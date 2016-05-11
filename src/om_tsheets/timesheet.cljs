(ns om-tsheets.timesheet
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [goog.dom :as gdom]
            [clojure.string :as string]
            [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]
            [cljs.pprint :as pprint]
            [om-tsheets.jobcode :as tsheets-jobcode :refer [jobcode-view Jobcode]]))

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
  [c e] 
  (let [ts (create-timesheet (om/props c))]
    (om/transact! c
                `[(timesheet/add {:timesheet ~ts})
                  :timesheet/list])))

(defn add-edit-timesheet
  ; dispatches action to add new edit timesheet
  [c e] 
  (let [ts (create-timesheet (om/props c))]
    (om/transact! c
                `[(timesheet/add-edit)
                  :timesheet/list])))

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

(def timesheet-view (om/factory Timesheet {:keyfn :timesheet/id}))

(defn change [c e]
  (println (.. e -target -value)))

(defui TimesheetEdit 
  static om/IQuery
  (query [this]
         `[:timesheet/id :timesheet/start :timesheet/end :timesheet/notes {:timesheet/jobcode ~(om/get-query Jobcode)}])
  Object
  (render [this]
          (let [{:keys [timesheet/start timesheet/end timesheet/jobcode timesheet/notes]} (om/props this)] 
            (dom/div nil
                    (dom/div nil
                             (dom/label nil "Notes: ")
                             (dom/input #js {:type "text" 
                                    :value notes
                                    :onChange #(change this %)}))
                    (dom/button #js {:onClick #(add-timesheet this %)} "Add")))))

(def timesheet-edit-view (om/factory TimesheetEdit))
