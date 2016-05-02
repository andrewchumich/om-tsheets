(ns om-tsheets.parser
  (:require [goog.dom :as gdom]
            [cljs.core.async :as async :refer [<! >! put! chan]]
            [clojure.string :as string]
            [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]))

(defmulti read om/dispatch)

(defmethod read :default
  [{:keys [state]} key params]
  (let [st @state]
    (println key)
    (if (contains? st key)
      {:value (get st key)})))

(defmethod read :timesheet/start
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

(defmulti mutate om/dispatch)

(defmethod mutate 'timesheet/add
  [{:keys [state ref] :as env} key {:keys [timesheet] :as params}]
  {:action (fn []
             (let [st @state
                   timesheet-id (count (:timesheet/by-id st))
                   ts (assoc timesheet :timesheet/id timesheet-id)]
               (swap! state assoc-in [:timesheet/by-id timesheet-id] ts)))})

(def parser
  (om/parser {:mutate mutate
              :read read}))

