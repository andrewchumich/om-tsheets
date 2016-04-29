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

(def app-state {:timesheets/list
                [{:timesheet/id 0
                  :timesheet/start (js/Date)
                  :timesheet/end (js/Date)
                  :timesheet/jobcode {:jobcode/id 0
                                      :jobcode/name "A Jobcode"}
                  :timesheet/notes "Some notes"}
                 {:timesheet/id 1
                  :timesheet/start (js/Date)
                  :timesheet/end (js/Date)
                  :timesheet/jobcode {:jobcode/id 1
                            :jobcode/name "Running for President"}
                  :timesheet/notes "Some more notes"}] 
                })


(defui Jobcode
  static om/Ident
  (ident [this {:keys [jobcode/id]}]
         [:jobcode/by-id id])
  static om/IQuery
  (query [this]
         [:jobcode/id :jobcode/name])
  Object
  (render [this]
          (let [{:keys [jobcode/name]} (om/props this)]
            (dom/div nil name))))

(def jobcode-view (om/factory Jobcode))

(defui Timesheet
  static om/Ident
  (ident [this {:keys [timesheet/id]}]
         [:timesheets/by-id id])
  static om/IQuery
  (query [this] 
         `[:timesheet/id :timesheet/start :timesheet/end :timesheet/notes {:timesheet/jobcode ~(om/get-query Jobcode)}])
  Object
  (render [this]
    (let [{:keys [timesheet/start timesheet/end timesheet/jobcode timesheet/notes]} (om/props this)]
      (dom/div nil
        (dom/div nil "-------------------------------------")
        (dom/div nil start)
        (dom/div nil end)
        (jobcode-view jobcode)
        (dom/p nil notes)))))

(def timesheet (om/factory Timesheet {:keyfn :timesheet/id}))

(defui TimesheetList
  static om/IQueryParams
  (params [this]
          {:timesheet-item (om/get-query Timesheet)})
  static om/IQuery
  (query [this]
         '[{:timesheets/list ?timesheet-item}])
  Object
  (render [this] 
          (let [{:keys [timesheets/list]} (om/props this)]
            (print list)
            (dom/div nil
                     (dom/p nil "HELLO")
                     (map timesheet list)))))

(def reconciler
  (om/reconciler {:state app-state
                  :parser parser}))

;; (println (om/get-query TimesheetList))
;; (println (om/tree->db TimesheetList app-state))
(om/add-root! reconciler 
             TimesheetList (gdom/getElement "app"))
