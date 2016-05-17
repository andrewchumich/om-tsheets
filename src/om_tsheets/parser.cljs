(ns om-tsheets.parser
  (:require [goog.dom :as gdom]
            [cljs.core.async :as async :refer [<! >! put! chan]]
            [clojure.string :as string]
            [om.next :as om :refer-macros [defui]]
            [om-tsheets.timesheet :as ts-tsheets :refer [create-timesheet]]
            [om.dom :as dom]))

(defmulti read om/dispatch)

(defmethod read :default
  [{:keys [state]} key params]
  (let [st @state]
    (if (contains? st key)
      {:value (get st key)})))

(defmethod read :timesheet/start
  [{:keys [state timesheet]} key params]
  {:value (get timesheet key)})

(defmethod read :timesheet/clocked-in
  [{:keys [state timesheet]} key params]
  {:value (get timesheet key)})

(defmethod read :timesheet/end
  [{:keys [state timesheet]} key params]
  {:value (get timesheet key)})

(defmethod read :timesheet/notes
  [{:keys [state timesheet]} key params]
  {:value (get timesheet key)})

(defmethod read :timesheet/id
  [{:keys [state timesheet]} key params]
  {:value (get timesheet key)})

(defmethod read :timesheet/jobcode
  [{:keys [state query timesheet]} key params]
  (let [st @state
        jobcode (select-keys (get-in st (:timesheet/jobcode timesheet)) query)]
    {:value jobcode}))

(defmethod read :jobcode/list
  [{:keys [state query parser] :as env} key params]
  (let [st @state]
    {:value (into [] (vals (:jobcode/by-id st)))}))

(defmethod read :timesheet/list
  [{:keys [state query parser] :as env} key params]
  (letfn [(parse-timesheet
            ; given a timesheet id, parse the current query by placing that 
            ; person's data in the env, and call the parser recursively
            [timesheet-id]
            (if-let [timesheet (get-in @state [:timesheet/by-id timesheet-id])]
              (do
                (parser (assoc env :timesheet timesheet) query))
              nil))]
    (let [st @state
          timesheet-ids (into [] (keys (:timesheet/by-id st)))
          sort (if (nil? (:sort params)) :timesheet/start (:sort params))]
      (if (not (= [] timesheet-ids))
        {:value (into [] (reverse (sort-by sort (mapv parse-timesheet timesheet-ids))))}
        {:value []}))))



(defmethod read :timesheet/editing
  [{:keys [state query parser] :as env} key params]
  (let [st @state
        timesheet (:timesheet/editing st)]
    (if (nil? timesheet)
      {:value nil}
      {:value (parser (assoc env :timesheet timesheet) query)}
      )))

(defmethod read :timesheet/timecard
  [{:keys [state query parser] :as env} key params]
  (let [st @state
        timesheet (first (filter #(get % :timesheet/clocked-in) (vals (:timesheet/by-id st))))]
    {:value (parser (assoc env :timesheet timesheet) query)}
      ))


(defmulti mutate om/dispatch)

(defmethod mutate 'timesheet/update
  [{:keys [state ref] :as env} key {:keys [timesheet id] :as params}]
  {:action (fn []
             (swap! state update-in id merge timesheet)
             )})

(defmethod mutate 'timesheet/set
  [{:keys [state ref] :as env} key {:keys [timesheet id] :as params}]
  {:action (fn []
             (swap! state update-in id timesheet)
             )})

(defmethod mutate 'timesheet/add
  [{:keys [state ref] :as env} key {:keys [timesheet] :as params}]
  {:action (fn []
             (let [st @state
                   timesheet-id (count (:timesheet/by-id st))
                   ts (assoc timesheet :timesheet/id timesheet-id)]
               (swap! state assoc-in [:timesheet/by-id timesheet-id] ts)))})

(defmethod mutate 'timesheet/add-edit
  [{:keys [state query parser] :as env} key params]
  {:action (fn []
             (swap! state assoc :timesheet/editing (create-timesheet)))})

(defmethod mutate 'timesheet/remove-edit
  [{:keys [state query parser] :as env} key params]
  {:action (fn []
             (swap! state assoc :timesheet/editing nil))})

(defmethod mutate 'timesheet/submit-edit
  [{:keys [state query parser] :as env} key params]
  {:action (fn []
             (if-let [timesheet (:timesheet/editing @state)]
               (let [timesheet-id (count (:timesheet/by-id @state))
                     ts (assoc timesheet :timesheet/id timesheet-id)]
                 (swap! state assoc-in [:timesheet/by-id timesheet-id] ts)
                 (swap! state assoc :timesheet/editing nil))))})

(defmethod mutate 'timecard/clock-out
  [{:keys [state query parser] :as env} key {:keys [timesheet/id] :as params}]
  {:action (fn []
             (let [st @state
                   timesheet (get-in st [:timesheet/by-id id])
                   clocked-out-timesheet (assoc timesheet 
                                                :timesheet/clocked-in false
                                                :timesheet/end (js/Date.))]
               (swap! state assoc-in [:timesheet/by-id id] clocked-out-timesheet)))})

(defmethod mutate 'timecard/clock-in
  [{:keys [state query parser] :as env} key {:keys [jobcode/id] :as params}]
  {:action (fn []
             (let [st @state] 
               (if-let [timesheet (first (filter #(get % :timesheet/clocked-in) (vals (:timesheet/by-id st))))]
                 (let [timesheet-id (:timesheet/id timesheet)
                       clocked-out-timesheet (assoc timesheet 
                                                    :timesheet/clocked-in false
                                                    :timesheet/end (js/Date.))]
                   (swap! state assoc-in [:timesheet/by-id timesheet-id] clocked-out-timesheet)))
               (let [timesheet-id (count (:timesheet/by-id st))
                     clocked-in-timesheet (create-timesheet {:timesheet/id timesheet-id
                                                             :timesheet/clocked-in true
                                                             :timesheet/start (js/Date.)
                                                             :timesheet/jobcode [:jobcode/by-id id]
                                                             :timesheet/end nil})]
                 (swap! state assoc-in [:timesheet/by-id timesheet-id] clocked-in-timesheet)
                 )))})

(def parser
  (om/parser {:mutate mutate
              :read read}))

