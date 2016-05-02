(ns om-tsheets.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [goog.dom :as gdom]
            [cljs.core.async :as async :refer [<! >! put! chan]]
            [clojure.string :as string]
            [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]
            [om-tsheets.parser :as tsheets-parser :refer [parser]]
            [cljs.pprint :as pprint])
  (:import [goog Uri]
           [goog.net Jsonp]))

(enable-console-print!)

(def app-state {:timesheet/by-id {0 {:timesheet/id 0
                                     :timesheet/start (js/Date.)
                                     :timesheet/end (js/Date.)
                                     :timesheet/jobcode [:jobcode/by-id 0]
                                     :timesheet/notes "Some notes"}
                                  1 {:timesheet/id 1
                                     :timesheet/start (js/Date. 2015 5 5)
                                     :timesheet/end (js/Date.)
                                     :timesheet/jobcode [:jobcode/by-id 1]
                                     :timesheet/notes "Some more notes"}}
                :jobcode/by-id {0 {:jobcode/id 0
                                   :jobcode/name "A Jobcode"} 
                                1 {:jobcode/id 1
                                   :jobcode/name "Running for President"}}})


(defui Jobcode
  static om/IQuery
  (query [this]
         [:jobcode/id :jobcode/name])
  Object
  (render [this]
          (let [{:keys [jobcode/name]} (om/props this)]
            (dom/div nil name))))

(def jobcode-view (om/factory Jobcode))

(defn create-timesheet
  ([]
   (create-timesheet {}))
  ([{:keys [start end jobcode notes]
     :or {start (js/Date.)
          end (js/Date.)
          jobcode [:jobcode/by-id 0]
          notes "WAW"} :as ts}]
   {:timesheet/start start
    :timesheet/end end
    :timesheet/jobcode jobcode
    :timesheet/notes notes}))

(defn add-timesheet
  ; dispatches action to add new timesheet
  [c ts e] 
  (om/transact! c
                `[(timesheet/add {:timesheet ~ts})
                  :timesheet/list]))

(defui Timesheet
  static om/Ident
  (ident [this {:keys [timesheet/id] :as props}]
         [:timesheet/by-id id])
  static om/IQuery
  (query [this] 
         `[:timesheet/id :timesheet/start :timesheet/end :timesheet/notes {:timesheet/jobcode ~(om/get-query Jobcode)}])
  Object
  (render [this]
    (let [{:keys [timesheet/start timesheet/end timesheet/jobcode timesheet/notes]} (om/props this)]
      (dom/div nil
        (dom/div nil "-------------------------------------")
        (dom/div nil (str (.getFullYear start) "/" (.getMonth start) "/" (.getDate start)))
        (dom/div nil (str (.getFullYear end) "/" (.getMonth end) "/" (.getDate end)))
        (jobcode-view jobcode)
        (dom/p nil notes)))))

(def timesheet (om/factory Timesheet {:keyfn :timesheet/id}))

(defui TimesheetList
  static om/IQueryParams
  (params [this]
          {:timesheet-item (om/get-query Timesheet)})
  static om/IQuery
  (query [this]
         '[{:timesheet/list ?timesheet-item}])
  Object
  (render [this] 
          (let [{:keys [timesheet/list]} (om/props this)] 
            (dom/div nil
                     (dom/p nil "HELLO")
                     (map timesheet list)
                     (dom/button #js {:onClick #(add-timesheet this (create-timesheet) %)
                                      } "Add Timesheet")))))


(def reconciler
  (om/reconciler {:state app-state
                  :parser parser}))

;; (println (om/get-query TimesheetList))
;; (println (om/tree->db TimesheetList app-state))

(om/add-root! reconciler 
             TimesheetList (gdom/getElement "app"))
