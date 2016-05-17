(ns om-tsheets.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [goog.dom :as gdom]
            [cljs.core.async :as async :refer [<! >! put! chan]]
            [clojure.string :as string]
            [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]
            [om-tsheets.parser :as tsheets-parser :refer [parser]]
            [cljs.pprint :as pprint]
            [om-tsheets.timesheet :as tsheets-timesheet :refer [timesheet-view Timesheet TimesheetEdit create-timesheet timesheet-edit-view add-timesheet add-edit-timesheet Timecard timecard-view]])
  (:import [goog Uri]
           [goog.net Jsonp]))

(enable-console-print!)

(def app-state {:timesheet/editing nil
                :timesheet/by-id {0 {:timesheet/id 0
                                     :timesheet/clocked-in true
                                     :timesheet/start (js/Date. 2016 4 15)
                                     :timesheet/end nil
                                     :timesheet/jobcode [:jobcode/by-id 0]
                                     :timesheet/notes "Some notes"}
                                  1 {:timesheet/id 1
                                     :timesheet/clocked-in false
                                     :timesheet/start (js/Date. 2015 4 5)
                                     :timesheet/end (js/Date. 2015 4 5)
                                     :timesheet/jobcode [:jobcode/by-id 1]
                                     :timesheet/notes "Some more notes"}}
                :jobcode/by-id {0 {:jobcode/id 0
                                   :jobcode/name "A Jobcode"} 
                                1 {:jobcode/id 1
                                   :jobcode/name "Running for President"}}})


(defui TimesheetList
  static om/IQueryParams
  (params [this]
          {:timesheet-item (om/get-query Timesheet)
           :timesheet-edit-item (om/get-query TimesheetEdit)
           :timecard-item (om/get-query Timecard)})
  static om/IQuery
  (query [this]
         '[{:timesheet/list ?timesheet-item}
           {:timesheet/editing ?timesheet-edit-item}
           {:timesheet/timecard ?timecard-item}])
  Object
  (render [this] 
          (let [{:keys [timesheet/list timesheet/editing timesheet/timecard]} (om/props this)] 
            (dom/div nil
                     (dom/p nil "TSHEETS")
                     (timecard-view timecard)
                     (map timesheet-view list) 
                     (if (nil? editing)
                       (dom/button #js {:onClick #(add-edit-timesheet this (create-timesheet))} "Add Timesheet")
                       (timesheet-edit-view editing))
                     ))))
;; (dom/button #js {:onClick #(add-timesheet this (create-timesheet) %)
;;                                       } "Add Timesheet")

(def reconciler
  (om/reconciler {:state app-state
                  :parser parser}))

;; (println (om/get-query Timecard))
;; (println (:timecard/by-id (om/tree->db TimesheetList app-state)))

(om/add-root! reconciler 
             TimesheetList (gdom/getElement "app"))
