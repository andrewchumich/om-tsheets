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
  ([{:keys [timesheet/id timesheet/clocked-in timesheet/start timesheet/end timesheet/jobcode timesheet/notes]
     :or {timesheet/start (js/Date.)
          timesheet/end (js/Date.)
          timesheet/jobcode [:jobcode/by-id 0]
          timesheet/clocked-in false
          timesheet/notes ""} :as ts}]
   {:timesheet/id id
    :timesheet/clocked-in clocked-in
    :timesheet/start start
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
      (dom/div nil
        (dom/div nil "-------------------------------------")
        (dom/div nil (str clocked-in)) 
        (dom/div nil (str (.getFullYear start) "/" (+ 1 (.getMonth start)) "/" (.getDate start)))
        (if (not (nil? end)) 
          (dom/div nil (str (.getFullYear end) "/" (+ 1 (.getMonth end)) "/" (.getDate end))))
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

(defn update-timecard [c timesheet]
  (if-let [id (:timesheet/id timesheet)] 
    (om/transact! c
                  `[(timesheet/update {:timesheet ~timesheet
                                       :id [:timesheet/by-id ~id]})
                    :timesheet/list :timesheet/timecard])))

(defn clock-out [c id]
  (om/transact! c
                `[(timecard/clock-out {:timesheet/id ~id})
                  :timesheet/list :timesheet/timecard]))

(defn clock-in [c id]
  (om/transact! c
                `[(timecard/clock-in {:jobcode/id ~id})
                  :timesheet/list :timesheet/timecard]))


(defn jobcode-item [c jobcode]
  (if-let [id (:jobcode/id jobcode)]
    (if-let [name (:jobcode/name jobcode)]
       (dom/button #js {:onClick #(clock-in c id)
                        :key id}
                name))))

(defui ClockIn
  ; takes a jobcode list and a parent component
  ; need to figure out how do get colocated query here
  Object
  (render [this]
          (let [{:keys [parent/component jobcode/list]} (om/props this)]
            (dom/div nil
                     (dom/p nil "Jobcodes")
                     (map #(jobcode-item component %) list)))))

;; (map #(jobcode-item c %) jobcodes)
(def clock-in-view (om/factory ClockIn))

(defui Timecard 
  static om/IQuery
  (query [this]
         `[:timesheet/id :timesheet/clocked-in :timesheet/start :timesheet/end :timesheet/notes {:timesheet/jobcode ~(om/get-query Jobcode)} {:jobcode/list [:jobcode/name :jobcode/id]}])
  Object
  (componentDidMount [this] 
                     (let [{:keys [timesheet/notes]} (om/props this)]
                       (om/set-state! this {:timesheet/notes notes})))
  (componentWillReceiveProps [this next-props]
                             (let [{:keys [timesheet/notes]} next-props]
                               (om/set-state! this {:timesheet/notes notes})))
  (render [this]
          (let [{:keys [timesheet/id timesheet/clocked-in timesheet/start timesheet/end timesheet/jobcode timesheet/notes jobcode/list]} (om/props this)] 
            (dom/div nil
                     (dom/p nil "Timecard")
                     (if (= true clocked-in)
                       (dom/div nil 
                                (dom/button #js {:onClick #(clock-out this id)} "Clock Out")
                                (dom/div #js {:className "edit-notes-container"}
                                         (dom/label nil "Notes: ")
                                         (dom/input #js {:type "text"
                                                         :onChange #(change-notes this %)
                                                         :onBlur #(update-timecard this {:timesheet/id id
                                                                                         :timesheet/notes (om/get-state this :timesheet/notes)})
                                                         :value (om/get-state this :timesheet/notes)})))) 
                     (clock-in-view (assoc {} 
                                           :parent/component this
                                           :jobcode/list list))))))

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
