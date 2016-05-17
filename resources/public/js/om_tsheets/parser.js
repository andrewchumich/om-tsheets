// Compiled by ClojureScript 1.7.170 {}
goog.provide('om_tsheets.parser');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('om.dom');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('om.next');
goog.require('om_tsheets.timesheet');
if(typeof om_tsheets.parser.read !== 'undefined'){
} else {
om_tsheets.parser.read = (function (){var method_table__17698__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17699__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17700__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17701__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17702__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"om-tsheets.parser","read"),om.next.dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17702__auto__,method_table__17698__auto__,prefer_table__17699__auto__,method_cache__17700__auto__,cached_hierarchy__17701__auto__));
})();
}
cljs.core._add_method.call(null,om_tsheets.parser.read,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__35166,key,params){
var map__35167 = p__35166;
var map__35167__$1 = ((((!((map__35167 == null)))?((((map__35167.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35167.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35167):map__35167);
var state = cljs.core.get.call(null,map__35167__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
if(cljs.core.contains_QMARK_.call(null,st,key)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get.call(null,st,key)], null);
} else {
return null;
}
}));
cljs.core._add_method.call(null,om_tsheets.parser.read,new cljs.core.Keyword("timesheet","start","timesheet/start",-300956771),(function (p__35169,key,params){
var map__35170 = p__35169;
var map__35170__$1 = ((((!((map__35170 == null)))?((((map__35170.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35170.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35170):map__35170);
var state = cljs.core.get.call(null,map__35170__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var timesheet = cljs.core.get.call(null,map__35170__$1,new cljs.core.Keyword(null,"timesheet","timesheet",-198269298));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get.call(null,timesheet,key)], null);
}));
cljs.core._add_method.call(null,om_tsheets.parser.read,new cljs.core.Keyword("timesheet","clocked-in","timesheet/clocked-in",-1991812801),(function (p__35172,key,params){
var map__35173 = p__35172;
var map__35173__$1 = ((((!((map__35173 == null)))?((((map__35173.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35173.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35173):map__35173);
var state = cljs.core.get.call(null,map__35173__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var timesheet = cljs.core.get.call(null,map__35173__$1,new cljs.core.Keyword(null,"timesheet","timesheet",-198269298));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get.call(null,timesheet,key)], null);
}));
cljs.core._add_method.call(null,om_tsheets.parser.read,new cljs.core.Keyword("timesheet","end","timesheet/end",-222813232),(function (p__35175,key,params){
var map__35176 = p__35175;
var map__35176__$1 = ((((!((map__35176 == null)))?((((map__35176.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35176.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35176):map__35176);
var state = cljs.core.get.call(null,map__35176__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var timesheet = cljs.core.get.call(null,map__35176__$1,new cljs.core.Keyword(null,"timesheet","timesheet",-198269298));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get.call(null,timesheet,key)], null);
}));
cljs.core._add_method.call(null,om_tsheets.parser.read,new cljs.core.Keyword("timesheet","notes","timesheet/notes",-993216837),(function (p__35178,key,params){
var map__35179 = p__35178;
var map__35179__$1 = ((((!((map__35179 == null)))?((((map__35179.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35179.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35179):map__35179);
var state = cljs.core.get.call(null,map__35179__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var timesheet = cljs.core.get.call(null,map__35179__$1,new cljs.core.Keyword(null,"timesheet","timesheet",-198269298));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get.call(null,timesheet,key)], null);
}));
cljs.core._add_method.call(null,om_tsheets.parser.read,new cljs.core.Keyword("timesheet","id","timesheet/id",-1493403774),(function (p__35181,key,params){
var map__35182 = p__35181;
var map__35182__$1 = ((((!((map__35182 == null)))?((((map__35182.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35182.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35182):map__35182);
var state = cljs.core.get.call(null,map__35182__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var timesheet = cljs.core.get.call(null,map__35182__$1,new cljs.core.Keyword(null,"timesheet","timesheet",-198269298));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get.call(null,timesheet,key)], null);
}));
cljs.core._add_method.call(null,om_tsheets.parser.read,new cljs.core.Keyword("timesheet","jobcode","timesheet/jobcode",89283979),(function (p__35184,key,params){
var map__35185 = p__35184;
var map__35185__$1 = ((((!((map__35185 == null)))?((((map__35185.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35185.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35185):map__35185);
var state = cljs.core.get.call(null,map__35185__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var query = cljs.core.get.call(null,map__35185__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var timesheet = cljs.core.get.call(null,map__35185__$1,new cljs.core.Keyword(null,"timesheet","timesheet",-198269298));
var st = cljs.core.deref.call(null,state);
var jobcode = cljs.core.select_keys.call(null,cljs.core.get_in.call(null,st,new cljs.core.Keyword("timesheet","jobcode","timesheet/jobcode",89283979).cljs$core$IFn$_invoke$arity$1(timesheet)),query);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),jobcode], null);
}));
cljs.core._add_method.call(null,om_tsheets.parser.read,new cljs.core.Keyword("jobcode","list","jobcode/list",-2079830779),(function (p__35187,key,params){
var map__35188 = p__35187;
var map__35188__$1 = ((((!((map__35188 == null)))?((((map__35188.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35188.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35188):map__35188);
var env = map__35188__$1;
var state = cljs.core.get.call(null,map__35188__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var query = cljs.core.get.call(null,map__35188__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var parser = cljs.core.get.call(null,map__35188__$1,new cljs.core.Keyword(null,"parser","parser",-1543495310));
var st = cljs.core.deref.call(null,state);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.vals.call(null,new cljs.core.Keyword("jobcode","by-id","jobcode/by-id",642034585).cljs$core$IFn$_invoke$arity$1(st)))], null);
}));
cljs.core._add_method.call(null,om_tsheets.parser.read,new cljs.core.Keyword("timesheet","list","timesheet/list",710553005),(function (p__35190,key,params){
var map__35191 = p__35190;
var map__35191__$1 = ((((!((map__35191 == null)))?((((map__35191.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35191.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35191):map__35191);
var env = map__35191__$1;
var state = cljs.core.get.call(null,map__35191__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var query = cljs.core.get.call(null,map__35191__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var parser = cljs.core.get.call(null,map__35191__$1,new cljs.core.Keyword(null,"parser","parser",-1543495310));
var parse_timesheet = ((function (map__35191,map__35191__$1,env,state,query,parser){
return (function om_tsheets$parser$parse_timesheet(timesheet_id){
var temp__4423__auto__ = cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("timesheet","by-id","timesheet/by-id",-2057892815),timesheet_id], null));
if(cljs.core.truth_(temp__4423__auto__)){
var timesheet = temp__4423__auto__;
return parser.call(null,cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"timesheet","timesheet",-198269298),timesheet),query);
} else {
return null;
}
});})(map__35191,map__35191__$1,env,state,query,parser))
;
var st = cljs.core.deref.call(null,state);
var timesheet_ids = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.keys.call(null,new cljs.core.Keyword("timesheet","by-id","timesheet/by-id",-2057892815).cljs$core$IFn$_invoke$arity$1(st)));
var sort = (((new cljs.core.Keyword(null,"sort","sort",953465918).cljs$core$IFn$_invoke$arity$1(params) == null))?new cljs.core.Keyword("timesheet","start","timesheet/start",-300956771):new cljs.core.Keyword(null,"sort","sort",953465918).cljs$core$IFn$_invoke$arity$1(params));
if(!(cljs.core._EQ_.call(null,cljs.core.PersistentVector.EMPTY,timesheet_ids))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.reverse.call(null,cljs.core.sort_by.call(null,sort,cljs.core.mapv.call(null,parse_timesheet,timesheet_ids))))], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.PersistentVector.EMPTY], null);
}
}));
cljs.core._add_method.call(null,om_tsheets.parser.read,new cljs.core.Keyword("timesheet","editing","timesheet/editing",1319567555),(function (p__35193,key,params){
var map__35194 = p__35193;
var map__35194__$1 = ((((!((map__35194 == null)))?((((map__35194.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35194.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35194):map__35194);
var env = map__35194__$1;
var state = cljs.core.get.call(null,map__35194__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var query = cljs.core.get.call(null,map__35194__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var parser = cljs.core.get.call(null,map__35194__$1,new cljs.core.Keyword(null,"parser","parser",-1543495310));
var st = cljs.core.deref.call(null,state);
var timesheet = new cljs.core.Keyword("timesheet","editing","timesheet/editing",1319567555).cljs$core$IFn$_invoke$arity$1(st);
if((timesheet == null)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),parser.call(null,cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"timesheet","timesheet",-198269298),timesheet),query)], null);
}
}));
cljs.core._add_method.call(null,om_tsheets.parser.read,new cljs.core.Keyword("timesheet","timecard","timesheet/timecard",1818482514),(function (p__35197,key,params){
var map__35198 = p__35197;
var map__35198__$1 = ((((!((map__35198 == null)))?((((map__35198.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35198.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35198):map__35198);
var env = map__35198__$1;
var state = cljs.core.get.call(null,map__35198__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var query = cljs.core.get.call(null,map__35198__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var parser = cljs.core.get.call(null,map__35198__$1,new cljs.core.Keyword(null,"parser","parser",-1543495310));
var st = cljs.core.deref.call(null,state);
var timesheet = cljs.core.first.call(null,cljs.core.filter.call(null,((function (st,map__35198,map__35198__$1,env,state,query,parser){
return (function (p1__35196_SHARP_){
return cljs.core.get.call(null,p1__35196_SHARP_,new cljs.core.Keyword("timesheet","clocked-in","timesheet/clocked-in",-1991812801));
});})(st,map__35198,map__35198__$1,env,state,query,parser))
,cljs.core.vals.call(null,new cljs.core.Keyword("timesheet","by-id","timesheet/by-id",-2057892815).cljs$core$IFn$_invoke$arity$1(st))));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),parser.call(null,cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"timesheet","timesheet",-198269298),timesheet),query)], null);
}));
if(typeof om_tsheets.parser.mutate !== 'undefined'){
} else {
om_tsheets.parser.mutate = (function (){var method_table__17698__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17699__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17700__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17701__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17702__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"om-tsheets.parser","mutate"),om.next.dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17702__auto__,method_table__17698__auto__,prefer_table__17699__auto__,method_cache__17700__auto__,cached_hierarchy__17701__auto__));
})();
}
cljs.core._add_method.call(null,om_tsheets.parser.mutate,new cljs.core.Symbol("timesheet","update","timesheet/update",-1654223807,null),(function (p__35200,key,p__35201){
var map__35202 = p__35200;
var map__35202__$1 = ((((!((map__35202 == null)))?((((map__35202.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35202.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35202):map__35202);
var env = map__35202__$1;
var state = cljs.core.get.call(null,map__35202__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ref = cljs.core.get.call(null,map__35202__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var map__35203 = p__35201;
var map__35203__$1 = ((((!((map__35203 == null)))?((((map__35203.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35203.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35203):map__35203);
var params = map__35203__$1;
var timesheet = cljs.core.get.call(null,map__35203__$1,new cljs.core.Keyword(null,"timesheet","timesheet",-198269298));
var id = cljs.core.get.call(null,map__35203__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__35202,map__35202__$1,env,state,ref,map__35203,map__35203__$1,params,timesheet,id){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,id,cljs.core.merge,timesheet);
});})(map__35202,map__35202__$1,env,state,ref,map__35203,map__35203__$1,params,timesheet,id))
], null);
}));
cljs.core._add_method.call(null,om_tsheets.parser.mutate,new cljs.core.Symbol("timesheet","set","timesheet/set",1957471927,null),(function (p__35206,key,p__35207){
var map__35208 = p__35206;
var map__35208__$1 = ((((!((map__35208 == null)))?((((map__35208.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35208.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35208):map__35208);
var env = map__35208__$1;
var state = cljs.core.get.call(null,map__35208__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ref = cljs.core.get.call(null,map__35208__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var map__35209 = p__35207;
var map__35209__$1 = ((((!((map__35209 == null)))?((((map__35209.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35209.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35209):map__35209);
var params = map__35209__$1;
var timesheet = cljs.core.get.call(null,map__35209__$1,new cljs.core.Keyword(null,"timesheet","timesheet",-198269298));
var id = cljs.core.get.call(null,map__35209__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__35208,map__35208__$1,env,state,ref,map__35209,map__35209__$1,params,timesheet,id){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,id,timesheet);
});})(map__35208,map__35208__$1,env,state,ref,map__35209,map__35209__$1,params,timesheet,id))
], null);
}));
cljs.core._add_method.call(null,om_tsheets.parser.mutate,new cljs.core.Symbol("timesheet","add","timesheet/add",302710196,null),(function (p__35212,key,p__35213){
var map__35214 = p__35212;
var map__35214__$1 = ((((!((map__35214 == null)))?((((map__35214.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35214.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35214):map__35214);
var env = map__35214__$1;
var state = cljs.core.get.call(null,map__35214__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ref = cljs.core.get.call(null,map__35214__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var map__35215 = p__35213;
var map__35215__$1 = ((((!((map__35215 == null)))?((((map__35215.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35215.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35215):map__35215);
var params = map__35215__$1;
var timesheet = cljs.core.get.call(null,map__35215__$1,new cljs.core.Keyword(null,"timesheet","timesheet",-198269298));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__35214,map__35214__$1,env,state,ref,map__35215,map__35215__$1,params,timesheet){
return (function (){
var st = cljs.core.deref.call(null,state);
var timesheet_id = cljs.core.count.call(null,new cljs.core.Keyword("timesheet","by-id","timesheet/by-id",-2057892815).cljs$core$IFn$_invoke$arity$1(st));
var ts = cljs.core.assoc.call(null,timesheet,new cljs.core.Keyword("timesheet","id","timesheet/id",-1493403774),timesheet_id);
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("timesheet","by-id","timesheet/by-id",-2057892815),timesheet_id], null),ts);
});})(map__35214,map__35214__$1,env,state,ref,map__35215,map__35215__$1,params,timesheet))
], null);
}));
cljs.core._add_method.call(null,om_tsheets.parser.mutate,new cljs.core.Symbol("timesheet","add-edit","timesheet/add-edit",-970180549,null),(function (p__35218,key,params){
var map__35219 = p__35218;
var map__35219__$1 = ((((!((map__35219 == null)))?((((map__35219.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35219.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35219):map__35219);
var env = map__35219__$1;
var state = cljs.core.get.call(null,map__35219__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var query = cljs.core.get.call(null,map__35219__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var parser = cljs.core.get.call(null,map__35219__$1,new cljs.core.Keyword(null,"parser","parser",-1543495310));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__35219,map__35219__$1,env,state,query,parser){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword("timesheet","editing","timesheet/editing",1319567555),om_tsheets.timesheet.create_timesheet.call(null));
});})(map__35219,map__35219__$1,env,state,query,parser))
], null);
}));
cljs.core._add_method.call(null,om_tsheets.parser.mutate,new cljs.core.Symbol("timesheet","remove-edit","timesheet/remove-edit",-1563460373,null),(function (p__35221,key,params){
var map__35222 = p__35221;
var map__35222__$1 = ((((!((map__35222 == null)))?((((map__35222.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35222.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35222):map__35222);
var env = map__35222__$1;
var state = cljs.core.get.call(null,map__35222__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var query = cljs.core.get.call(null,map__35222__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var parser = cljs.core.get.call(null,map__35222__$1,new cljs.core.Keyword(null,"parser","parser",-1543495310));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__35222,map__35222__$1,env,state,query,parser){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword("timesheet","editing","timesheet/editing",1319567555),null);
});})(map__35222,map__35222__$1,env,state,query,parser))
], null);
}));
cljs.core._add_method.call(null,om_tsheets.parser.mutate,new cljs.core.Symbol("timesheet","submit-edit","timesheet/submit-edit",328887237,null),(function (p__35224,key,params){
var map__35225 = p__35224;
var map__35225__$1 = ((((!((map__35225 == null)))?((((map__35225.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35225.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35225):map__35225);
var env = map__35225__$1;
var state = cljs.core.get.call(null,map__35225__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var query = cljs.core.get.call(null,map__35225__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var parser = cljs.core.get.call(null,map__35225__$1,new cljs.core.Keyword(null,"parser","parser",-1543495310));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__35225,map__35225__$1,env,state,query,parser){
return (function (){
var temp__4423__auto__ = new cljs.core.Keyword("timesheet","editing","timesheet/editing",1319567555).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state));
if(cljs.core.truth_(temp__4423__auto__)){
var timesheet = temp__4423__auto__;
var timesheet_id = cljs.core.count.call(null,new cljs.core.Keyword("timesheet","by-id","timesheet/by-id",-2057892815).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)));
var ts = cljs.core.assoc.call(null,timesheet,new cljs.core.Keyword("timesheet","id","timesheet/id",-1493403774),timesheet_id);
cljs.core.swap_BANG_.call(null,state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("timesheet","by-id","timesheet/by-id",-2057892815),timesheet_id], null),ts);

return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword("timesheet","editing","timesheet/editing",1319567555),null);
} else {
return null;
}
});})(map__35225,map__35225__$1,env,state,query,parser))
], null);
}));
cljs.core._add_method.call(null,om_tsheets.parser.mutate,new cljs.core.Symbol("timecard","clock-out","timecard/clock-out",1759782042,null),(function (p__35227,key,p__35228){
var map__35229 = p__35227;
var map__35229__$1 = ((((!((map__35229 == null)))?((((map__35229.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35229.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35229):map__35229);
var env = map__35229__$1;
var state = cljs.core.get.call(null,map__35229__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var query = cljs.core.get.call(null,map__35229__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var parser = cljs.core.get.call(null,map__35229__$1,new cljs.core.Keyword(null,"parser","parser",-1543495310));
var map__35230 = p__35228;
var map__35230__$1 = ((((!((map__35230 == null)))?((((map__35230.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35230.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35230):map__35230);
var params = map__35230__$1;
var id = cljs.core.get.call(null,map__35230__$1,new cljs.core.Keyword("timesheet","id","timesheet/id",-1493403774));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__35229,map__35229__$1,env,state,query,parser,map__35230,map__35230__$1,params,id){
return (function (){
var st = cljs.core.deref.call(null,state);
var timesheet = cljs.core.get_in.call(null,st,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("timesheet","by-id","timesheet/by-id",-2057892815),id], null));
var clocked_out_timesheet = cljs.core.assoc.call(null,timesheet,new cljs.core.Keyword("timesheet","clocked-in","timesheet/clocked-in",-1991812801),false,new cljs.core.Keyword("timesheet","end","timesheet/end",-222813232),(new Date()));
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("timesheet","by-id","timesheet/by-id",-2057892815),id], null),clocked_out_timesheet);
});})(map__35229,map__35229__$1,env,state,query,parser,map__35230,map__35230__$1,params,id))
], null);
}));
cljs.core._add_method.call(null,om_tsheets.parser.mutate,new cljs.core.Symbol("timecard","clock-in","timecard/clock-in",1797562068,null),(function (p__35234,key,p__35235){
var map__35236 = p__35234;
var map__35236__$1 = ((((!((map__35236 == null)))?((((map__35236.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35236.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35236):map__35236);
var env = map__35236__$1;
var state = cljs.core.get.call(null,map__35236__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var query = cljs.core.get.call(null,map__35236__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var parser = cljs.core.get.call(null,map__35236__$1,new cljs.core.Keyword(null,"parser","parser",-1543495310));
var map__35237 = p__35235;
var map__35237__$1 = ((((!((map__35237 == null)))?((((map__35237.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35237.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35237):map__35237);
var params = map__35237__$1;
var id = cljs.core.get.call(null,map__35237__$1,new cljs.core.Keyword("jobcode","id","jobcode/id",269276970));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__35236,map__35236__$1,env,state,query,parser,map__35237,map__35237__$1,params,id){
return (function (){
var st = cljs.core.deref.call(null,state);
var temp__4423__auto___35240 = cljs.core.first.call(null,cljs.core.filter.call(null,((function (st,map__35236,map__35236__$1,env,state,query,parser,map__35237,map__35237__$1,params,id){
return (function (p1__35233_SHARP_){
return cljs.core.get.call(null,p1__35233_SHARP_,new cljs.core.Keyword("timesheet","clocked-in","timesheet/clocked-in",-1991812801));
});})(st,map__35236,map__35236__$1,env,state,query,parser,map__35237,map__35237__$1,params,id))
,cljs.core.vals.call(null,new cljs.core.Keyword("timesheet","by-id","timesheet/by-id",-2057892815).cljs$core$IFn$_invoke$arity$1(st))));
if(cljs.core.truth_(temp__4423__auto___35240)){
var timesheet_35241 = temp__4423__auto___35240;
var timesheet_id_35242 = new cljs.core.Keyword("timesheet","id","timesheet/id",-1493403774).cljs$core$IFn$_invoke$arity$1(timesheet_35241);
var clocked_out_timesheet_35243 = cljs.core.assoc.call(null,timesheet_35241,new cljs.core.Keyword("timesheet","clocked-in","timesheet/clocked-in",-1991812801),false,new cljs.core.Keyword("timesheet","end","timesheet/end",-222813232),(new Date()));
cljs.core.swap_BANG_.call(null,state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("timesheet","by-id","timesheet/by-id",-2057892815),timesheet_id_35242], null),clocked_out_timesheet_35243);
} else {
}

var timesheet_id = cljs.core.count.call(null,new cljs.core.Keyword("timesheet","by-id","timesheet/by-id",-2057892815).cljs$core$IFn$_invoke$arity$1(st));
var clocked_in_timesheet = om_tsheets.timesheet.create_timesheet.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("timesheet","id","timesheet/id",-1493403774),timesheet_id,new cljs.core.Keyword("timesheet","clocked-in","timesheet/clocked-in",-1991812801),true,new cljs.core.Keyword("timesheet","start","timesheet/start",-300956771),(new Date()),new cljs.core.Keyword("timesheet","jobcode","timesheet/jobcode",89283979),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("jobcode","by-id","jobcode/by-id",642034585),id], null),new cljs.core.Keyword("timesheet","end","timesheet/end",-222813232),null], null));
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("timesheet","by-id","timesheet/by-id",-2057892815),timesheet_id], null),clocked_in_timesheet);
});})(map__35236,map__35236__$1,env,state,query,parser,map__35237,map__35237__$1,params,id))
], null);
}));
om_tsheets.parser.parser = om.next.parser.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mutate","mutate",1422419038),om_tsheets.parser.mutate,new cljs.core.Keyword(null,"read","read",1140058661),om_tsheets.parser.read], null));

//# sourceMappingURL=parser.js.map