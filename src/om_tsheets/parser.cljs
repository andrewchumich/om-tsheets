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

(defmethod read :db/id
  [{:keys [state timesheet]} key params]
  {:value (get timesheet key)})

(defmethod read :timesheets/list
  [{:keys [state query parser] :as env} key params]
  (letfn [(parse-timesheet
            ; given a timesheet id, parse the current query by placing that 
            ; person's data in the env, and call the parser recursively
            [timesheet-id]
            (if-let [timesheet (get-in @state timesheet-id)]
              (do
                (parser (assoc env :timesheet timesheet) query))
              nil))]
    (let [st @state
         timesheet-ids (get st key)]
      (println st)
     ;; (println (mapv parse-timesheet timesheet-ids))
     (if (contains? st key)
       {:value (get st key)}))))


(def parser
  (om/parser {:read read}))
