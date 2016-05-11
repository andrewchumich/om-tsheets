(ns om-tsheets.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [goog.dom :as gdom]
            [cljs.core.async :as async :refer [<! >! put! chan]]
            [clojure.string :as string]
            [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]
            [om-tsheets.parser :as tsheets-parser :refer [parser]]
            [cljs.pprint :as pprint]
            [om-tsheets.timesheet :as tsheets-timesheet :refer [timesheet-view Timesheet TimesheetEdit create-timesheet timesheet-edit-view add-timesheet add-edit-timesheet]])
  (:import [goog Uri]
           [goog.net Jsonp]))

(enable-console-print!)

(def app-state {:timesheet/editing nil
                :timesheet/by-id {0 {:timesheet/id 0
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


(defui TimesheetList
  static om/IQueryParams
  (params [this]
          {:timesheet-item (om/get-query Timesheet)
           :timesheet-edit-item (om/get-query TimesheetEdit)})
  static om/IQuery
  (query [this]
         '[{:timesheet/list ?timesheet-item}
           {:timesheet/editing ?timesheet-edit-item}])
  Object
  (render [this] 
          (let [{:keys [timesheet/list timesheet/editing]} (om/props this)] 
            (println editing)
            (dom/div nil
                     (dom/p nil "HELLO")
                     (map timesheet-view list) 
                     (if (nil? editing)
                       (dom/button #js {:onClick #(add-edit-timesheet this %)} "Add Timesheet")
                       (timesheet-edit-view editing)) 
                     ))))
;; (dom/button #js {:onClick #(add-timesheet this (create-timesheet) %)
;;                                       } "Add Timesheet")

(def reconciler
  (om/reconciler {:state app-state
                  :parser parser}))

;; (println (om/get-query TimesheetList))
;; (println (om/tree->db TimesheetList app-state))

(om/add-root! reconciler 
             TimesheetList (gdom/getElement "app"))
