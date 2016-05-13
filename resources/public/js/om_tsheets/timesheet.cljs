(ns om-tsheets.timesheet
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [goog.dom :as gdom]
            [clojure.string :as string]
            [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]
            [cljs.pprint :as pprint]
            [om-tsheets.jobcode :as tsheets-jobcode :refer [jobcode-view Jobcode]]))

(defn create-timesheet
  ; create a new timesheet object
  ([]
   (create-timesheet {}))
  ([{:keys [timesheet/start timesheet/end timesheet/jobcode timesheet/notes]
     :or {timesheet/start (js/Date.)
          timesheet/end (js/Date.)
          timesheet/jobcode [:jobcode/by-id 0]
          timesheet/notes ""} :as ts}]
   {:timesheet/start start
    :timesheet/end end
    :timesheet/jobcode jobcode
    :timesheet/notes notes}))

(defn add-timesheet
  ; dispatches action to add new timesheet
  [c] 
  (let [ts (create-timesheet (om/props c))]
    (om/transact! c
                  `[(timesheet/add {:timesheet ~ts})
                    :timesheet/list])))


(defn add-edit-timesheet
  ; dispatches action to add new edit timesheet in :timesheet/editing
  ([c]
   (add-edit-timesheet c (create-timesheet)))
  ([c ts]
   (om/transact! c
                 `[(timesheet/update {:timesheet ~ts
                                      :id [:timesheet/editing]})
                   :timesheet/editing])))

(defn submit-edit-timesheet
  ; dispatches action to submit the timesheet being edited
  [c]
  (om/transact! c
                `[(timesheet/submit-edit)
                  :timesheet/editing :timesheet/list]))

(defn remove-edit-timesheet
  ; dispatches action to remove timsheet in :timesheet/editing
  [c]
  (om/transact! c
                `[(timesheet/remove-edit)
                  :timesheet/list :timesheet/editing]))

(defui Timesheet
  static om/Ident
  (ident [this {:keys [timesheet/id] :as props}]
         [:timesheet/by-id id])
  static om/IQuery
  (query [this] 
         `[:timesheet/id :timesheet/clocked-in :timesheet/start :timesheet/end :timesheet/notes {:timesheet/jobcode ~(om/get-query Jobcode)}])
  Object
  (render [this]
    (let [{:keys [timesheet/clocked-in timesheet/start timesheet/end timesheet/jobcode timesheet/notes]} (om/props this)]
      (println clocked-in)
      (dom/div nil
        (dom/div nil "-------------------------------------")
        (dom/div nil (str clocked-in))
        (dom/div nil (str (.getFullYear start) "/" (.getMonth start) "/" (.getDate start)))
        (dom/div nil (str (.getFullYear end) "/" (.getMonth end) "/" (.getDate end)))
        (jobcode-view jobcode)
        (dom/p nil notes)))))

(def timesheet-view (om/factory Timesheet {:keyfn :timesheet/id}))

(defn change-notes [c e]
  (let [val (.. e -target -value)]
    (om/update-state! c
                      assoc :timesheet/notes val)))

(defn change-date [c ref e]
  (let [val (.. e -target -value)]
    (om/update-state! c
                      assoc :timesheet/notes val)))

(defn set-notes [c notes]
  (add-edit-timesheet c (assoc {} :timesheet/notes notes)))

(defn set-timecard-notes [c notes]
  (println notes))

(defui ClockIn
  static om/IQueryParams
  (params [this]
          [:jobcode/list [:jobcode/name :jobcode/id]])
  Object
  (render [this]
          (let [{:keys [jobcode/list]} (om/props this)]
            (println list)
            (dom/div nil
                     (dom/p nil "Jobcodes"))))
  )

(def clock-in-view (om/factory ClockIn))

(defui Timecard
  static om/IQuery
  (query [this]
         `[:timesheet/id :timesheet/clocked-in :timesheet/start :timesheet/end :timesheet/notes {:timesheet/jobcode ~(om/get-query Jobcode)}])
  Object
  (componentDidMount [this props]
                     (let [{:keys [timesheet/clocked-in timesheet/start timesheet/end timesheet/jobcode timesheet/notes]} (om/props this)]
                       (om/set-state! this (om/props this))))
  (render [this]
          (let [{:keys []} (om/props this)]
            (dom/div nil
                     (dom/p nil "Timecard")
                     (dom/div #js {:className "edit-notes-container"}
                              (dom/label nil "Notes: ")
                              (dom/input #js {:type "text"
                                              :onChange #(change-notes this %)
                                              :onBlur #(set-timecard-notes this (om/get-state this :timesheet/notes))
                                              :value (om/get-state this :timesheet/notes)}))))))

(def timecard-view (om/factory Timecard))

(defui TimesheetEdit 
  static om/IQuery
  (query [this]
         `[:timesheet/id :timesheet/clocked-in :timesheet/start :timesheet/end :timesheet/notes {:timesheet/jobcode ~(om/get-query Jobcode)}])
  Object
  (componentDidMount [this props]
                     (let [{:keys [timesheet/clocked-in timesheet/start timesheet/end timesheet/jobcode timesheet/notes]} (om/props this)]
                       (om/set-state! this (om/props this))))
  (render [this]
          (let [{:keys [timesheet/clocked-in timesheet/start timesheet/end timesheet/jobcode timesheet/notes]} (om/props this)] 
            (println (type start))
            (dom/div nil
                     (dom/div #js {:className "edit-dates-container"}
                              (dom/div nil 
                                       (dom/label nil "Start")
                                       (dom/input #js {:type "date"
                                                       :value (om/get-state this :timesheet/start)
                                                       :onChange #(change-date this :timesheet/start %)}))
                              (dom/div nil 
                                       (dom/label nil "End")
                                       (dom/input #js {:type "date"
                                                       :value (om/get-state this :timesheet/end)})))
                     (dom/div #js {:className "edit-notes-container"}
                              (dom/label nil "Notes: ")
                              (dom/input #js {:type "text"
                                              :onChange #(change-notes this %)
                                              :onBlur #(set-notes this (om/get-state this :timesheet/notes))
                                              :value (om/get-state this :timesheet/notes)}))
                     (dom/button #js {:onClick #(submit-edit-timesheet this)} "Add")
                     (dom/button #js {:onClick #(remove-edit-timesheet this)} "Cancel")))))

(def timesheet-edit-view (om/factory TimesheetEdit))
