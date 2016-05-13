(ns om-tsheets.jobcode
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [goog.dom :as gdom]
            [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]
            [cljs.pprint :as pprint])
  (:import [goog Uri]
           [goog.net Jsonp]))

(defui Jobcode
  static om/IQuery
  (query [this]
         [:jobcode/id :jobcode/name])
  Object
  (render [this]
          (let [{:keys [jobcode/name]} (om/props this)]
            (dom/div nil name))))

(def jobcode-view (om/factory Jobcode))
