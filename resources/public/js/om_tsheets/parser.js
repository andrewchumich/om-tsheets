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
om_tsheets.parser.read = (function (){var method_table__17684__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17685__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17686__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17687__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17688__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"om-tsheets.parser","read"),om.next.dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17688__auto__,method_table__17684__auto__,prefer_table__17685__auto__,method_cache__17686__auto__,cached_hierarchy__17687__auto__));
})();
}
cljs.core._add_method.call(null,om_tsheets.parser.read,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__47917,key,params){
var map__47918 = p__47917;
var map__47918__$1 = ((((!((map__47918 == null)))?((((map__47918.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47918.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47918):map__47918);
var state = cljs.core.get.call(null,map__47918__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
if(cljs.core.contains_QMARK_.call(null,st,key)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get.call(null,st,key)], null);
} else {
return null;
}
}));
cljs.core._add_method.call(null,om_tsheets.parser.read,new cljs.core.Keyword("timesheet","start","timesheet/start",-300956771),(function (p__47920,key,params){
var map__47921 = p__47920;
var map__47921__$1 = ((((!((map__47921 == null)))?((((map__47921.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47921.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47921):map__47921);
var state = cljs.core.get.call(null,map__47921__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var timesheet = cljs.core.get.call(null,map__47921__$1,new cljs.core.Keyword(null,"timesheet","timesheet",-198269298));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get.call(null,timesheet,key)], null);
}));
cljs.core._add_method.call(null,om_tsheets.parser.read,new cljs.core.Keyword("timesheet","clocked-in","timesheet/clocked-in",-1991812801),(function (p__47923,key,params){
var map__47924 = p__47923;
var map__47924__$1 = ((((!((map__47924 == null)))?((((map__47924.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47924.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47924):map__47924);
var state = cljs.core.get.call(null,map__47924__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var timesheet = cljs.core.get.call(null,map__47924__$1,new cljs.core.Keyword(null,"timesheet","timesheet",-198269298));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get.call(null,timesheet,key)], null);
}));
cljs.core._add_method.call(null,om_tsheets.parser.read,new cljs.core.Keyword("timesheet","end","timesheet/end",-222813232),(function (p__47926,key,params){
var map__47927 = p__47926;
var map__47927__$1 = ((((!((map__47927 == null)))?((((map__47927.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47927.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47927):map__47927);
var state = cljs.core.get.call(null,map__47927__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var timesheet = cljs.core.get.call(null,map__47927__$1,new cljs.core.Keyword(null,"timesheet","timesheet",-198269298));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get.call(null,timesheet,key)], null);
}));
cljs.core._add_method.call(null,om_tsheets.parser.read,new cljs.core.Keyword("timesheet","notes","timesheet/notes",-993216837),(function (p__47929,key,params){
var map__47930 = p__47929;
var map__47930__$1 = ((((!((map__47930 == null)))?((((map__47930.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47930.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47930):map__47930);
var state = cljs.core.get.call(null,map__47930__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var timesheet = cljs.core.get.call(null,map__47930__$1,new cljs.core.Keyword(null,"timesheet","timesheet",-198269298));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get.call(null,timesheet,key)], null);
}));
cljs.core._add_method.call(null,om_tsheets.parser.read,new cljs.core.Keyword("timesheet","id","timesheet/id",-1493403774),(function (p__47932,key,params){
var map__47933 = p__47932;
var map__47933__$1 = ((((!((map__47933 == null)))?((((map__47933.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47933.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47933):map__47933);
var state = cljs.core.get.call(null,map__47933__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var timesheet = cljs.core.get.call(null,map__47933__$1,new cljs.core.Keyword(null,"timesheet","timesheet",-198269298));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get.call(null,timesheet,key)], null);
}));
cljs.core._add_method.call(null,om_tsheets.parser.read,new cljs.core.Keyword("timesheet","jobcode","timesheet/jobcode",89283979),(function (p__47935,key,params){
var map__47936 = p__47935;
var map__47936__$1 = ((((!((map__47936 == null)))?((((map__47936.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47936.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47936):map__47936);
var state = cljs.core.get.call(null,map__47936__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var query = cljs.core.get.call(null,map__47936__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var timesheet = cljs.core.get.call(null,map__47936__$1,new cljs.core.Keyword(null,"timesheet","timesheet",-198269298));
var st = cljs.core.deref.call(null,state);
var jobcode = cljs.core.select_keys.call(null,cljs.core.get_in.call(null,st,new cljs.core.Keyword("timesheet","jobcode","timesheet/jobcode",89283979).cljs$core$IFn$_invoke$arity$1(timesheet)),query);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),jobcode], null);
}));
cljs.core._add_method.call(null,om_tsheets.parser.read,new cljs.core.Keyword("jobcode","list","jobcode/list",-2079830779),(function (p__47938,key,params){
var map__47939 = p__47938;
var map__47939__$1 = ((((!((map__47939 == null)))?((((map__47939.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47939.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47939):map__47939);
var env = map__47939__$1;
var state = cljs.core.get.call(null,map__47939__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var query = cljs.core.get.call(null,map__47939__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var parser = cljs.core.get.call(null,map__47939__$1,new cljs.core.Keyword(null,"parser","parser",-1543495310));
var st = cljs.core.deref.call(null,state);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.vals.call(null,new cljs.core.Keyword("jobcode","by-id","jobcode/by-id",642034585).cljs$core$IFn$_invoke$arity$1(st)))], null);
}));
cljs.core._add_method.call(null,om_tsheets.parser.read,new cljs.core.Keyword("timesheet","list","timesheet/list",710553005),(function (p__47941,key,params){
var map__47942 = p__47941;
var map__47942__$1 = ((((!((map__47942 == null)))?((((map__47942.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47942.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47942):map__47942);
var env = map__47942__$1;
var state = cljs.core.get.call(null,map__47942__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var query = cljs.core.get.call(null,map__47942__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var parser = cljs.core.get.call(null,map__47942__$1,new cljs.core.Keyword(null,"parser","parser",-1543495310));
var parse_timesheet = ((function (map__47942,map__47942__$1,env,state,query,parser){
return (function om_tsheets$parser$parse_timesheet(timesheet_id){
var temp__4423__auto__ = cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("timesheet","by-id","timesheet/by-id",-2057892815),timesheet_id], null));
if(cljs.core.truth_(temp__4423__auto__)){
var timesheet = temp__4423__auto__;
return parser.call(null,cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"timesheet","timesheet",-198269298),timesheet),query);
} else {
return null;
}
});})(map__47942,map__47942__$1,env,state,query,parser))
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
cljs.core._add_method.call(null,om_tsheets.parser.read,new cljs.core.Keyword("timesheet","editing","timesheet/editing",1319567555),(function (p__47944,key,params){
var map__47945 = p__47944;
var map__47945__$1 = ((((!((map__47945 == null)))?((((map__47945.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47945.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47945):map__47945);
var env = map__47945__$1;
var state = cljs.core.get.call(null,map__47945__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var query = cljs.core.get.call(null,map__47945__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var parser = cljs.core.get.call(null,map__47945__$1,new cljs.core.Keyword(null,"parser","parser",-1543495310));
var st = cljs.core.deref.call(null,state);
var timesheet = new cljs.core.Keyword("timesheet","editing","timesheet/editing",1319567555).cljs$core$IFn$_invoke$arity$1(st);
if((timesheet == null)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),parser.call(null,cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"timesheet","timesheet",-198269298),timesheet),query)], null);
}
}));
cljs.core._add_method.call(null,om_tsheets.parser.read,new cljs.core.Keyword("timesheet","timecard","timesheet/timecard",1818482514),(function (p__47948,key,params){
var map__47949 = p__47948;
var map__47949__$1 = ((((!((map__47949 == null)))?((((map__47949.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47949.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47949):map__47949);
var env = map__47949__$1;
var state = cljs.core.get.call(null,map__47949__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var query = cljs.core.get.call(null,map__47949__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var parser = cljs.core.get.call(null,map__47949__$1,new cljs.core.Keyword(null,"parser","parser",-1543495310));
var st = cljs.core.deref.call(null,state);
var timesheet = cljs.core.first.call(null,cljs.core.filter.call(null,((function (st,map__47949,map__47949__$1,env,state,query,parser){
return (function (p1__47947_SHARP_){
return cljs.core.get.call(null,p1__47947_SHARP_,new cljs.core.Keyword("timesheet","clocked-in","timesheet/clocked-in",-1991812801));
});})(st,map__47949,map__47949__$1,env,state,query,parser))
,cljs.core.vals.call(null,new cljs.core.Keyword("timesheet","by-id","timesheet/by-id",-2057892815).cljs$core$IFn$_invoke$arity$1(st))));
if((timesheet == null)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),parser.call(null,cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"timesheet","timesheet",-198269298),timesheet),query)], null);
}
}));
if(typeof om_tsheets.parser.mutate !== 'undefined'){
} else {
om_tsheets.parser.mutate = (function (){var method_table__17684__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17685__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17686__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17687__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17688__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"om-tsheets.parser","mutate"),om.next.dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17688__auto__,method_table__17684__auto__,prefer_table__17685__auto__,method_cache__17686__auto__,cached_hierarchy__17687__auto__));
})();
}
cljs.core._add_method.call(null,om_tsheets.parser.mutate,new cljs.core.Symbol("timesheet","update","timesheet/update",-1654223807,null),(function (p__47951,key,p__47952){
var map__47953 = p__47951;
var map__47953__$1 = ((((!((map__47953 == null)))?((((map__47953.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47953.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47953):map__47953);
var env = map__47953__$1;
var state = cljs.core.get.call(null,map__47953__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ref = cljs.core.get.call(null,map__47953__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var map__47954 = p__47952;
var map__47954__$1 = ((((!((map__47954 == null)))?((((map__47954.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47954.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47954):map__47954);
var params = map__47954__$1;
var timesheet = cljs.core.get.call(null,map__47954__$1,new cljs.core.Keyword(null,"timesheet","timesheet",-198269298));
var id = cljs.core.get.call(null,map__47954__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__47953,map__47953__$1,env,state,ref,map__47954,map__47954__$1,params,timesheet,id){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,id,cljs.core.merge,timesheet);
});})(map__47953,map__47953__$1,env,state,ref,map__47954,map__47954__$1,params,timesheet,id))
], null);
}));
cljs.core._add_method.call(null,om_tsheets.parser.mutate,new cljs.core.Symbol("timesheet","set","timesheet/set",1957471927,null),(function (p__47957,key,p__47958){
var map__47959 = p__47957;
var map__47959__$1 = ((((!((map__47959 == null)))?((((map__47959.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47959.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47959):map__47959);
var env = map__47959__$1;
var state = cljs.core.get.call(null,map__47959__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ref = cljs.core.get.call(null,map__47959__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var map__47960 = p__47958;
var map__47960__$1 = ((((!((map__47960 == null)))?((((map__47960.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47960.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47960):map__47960);
var params = map__47960__$1;
var timesheet = cljs.core.get.call(null,map__47960__$1,new cljs.core.Keyword(null,"timesheet","timesheet",-198269298));
var id = cljs.core.get.call(null,map__47960__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__47959,map__47959__$1,env,state,ref,map__47960,map__47960__$1,params,timesheet,id){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,id,timesheet);
});})(map__47959,map__47959__$1,env,state,ref,map__47960,map__47960__$1,params,timesheet,id))
], null);
}));
cljs.core._add_method.call(null,om_tsheets.parser.mutate,new cljs.core.Symbol("timesheet","add","timesheet/add",302710196,null),(function (p__47963,key,p__47964){
var map__47965 = p__47963;
var map__47965__$1 = ((((!((map__47965 == null)))?((((map__47965.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47965.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47965):map__47965);
var env = map__47965__$1;
var state = cljs.core.get.call(null,map__47965__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ref = cljs.core.get.call(null,map__47965__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var map__47966 = p__47964;
var map__47966__$1 = ((((!((map__47966 == null)))?((((map__47966.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47966.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47966):map__47966);
var params = map__47966__$1;
var timesheet = cljs.core.get.call(null,map__47966__$1,new cljs.core.Keyword(null,"timesheet","timesheet",-198269298));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__47965,map__47965__$1,env,state,ref,map__47966,map__47966__$1,params,timesheet){
return (function (){
var st = cljs.core.deref.call(null,state);
var timesheet_id = cljs.core.count.call(null,new cljs.core.Keyword("timesheet","by-id","timesheet/by-id",-2057892815).cljs$core$IFn$_invoke$arity$1(st));
var ts = cljs.core.assoc.call(null,timesheet,new cljs.core.Keyword("timesheet","id","timesheet/id",-1493403774),timesheet_id);
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("timesheet","by-id","timesheet/by-id",-2057892815),timesheet_id], null),ts);
});})(map__47965,map__47965__$1,env,state,ref,map__47966,map__47966__$1,params,timesheet))
], null);
}));
cljs.core._add_method.call(null,om_tsheets.parser.mutate,new cljs.core.Symbol("timesheet","add-edit","timesheet/add-edit",-970180549,null),(function (p__47969,key,params){
var map__47970 = p__47969;
var map__47970__$1 = ((((!((map__47970 == null)))?((((map__47970.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47970.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47970):map__47970);
var env = map__47970__$1;
var state = cljs.core.get.call(null,map__47970__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var query = cljs.core.get.call(null,map__47970__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var parser = cljs.core.get.call(null,map__47970__$1,new cljs.core.Keyword(null,"parser","parser",-1543495310));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__47970,map__47970__$1,env,state,query,parser){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword("timesheet","editing","timesheet/editing",1319567555),om_tsheets.timesheet.create_timesheet.call(null));
});})(map__47970,map__47970__$1,env,state,query,parser))
], null);
}));
cljs.core._add_method.call(null,om_tsheets.parser.mutate,new cljs.core.Symbol("timesheet","remove-edit","timesheet/remove-edit",-1563460373,null),(function (p__47972,key,params){
var map__47973 = p__47972;
var map__47973__$1 = ((((!((map__47973 == null)))?((((map__47973.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47973.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47973):map__47973);
var env = map__47973__$1;
var state = cljs.core.get.call(null,map__47973__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var query = cljs.core.get.call(null,map__47973__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var parser = cljs.core.get.call(null,map__47973__$1,new cljs.core.Keyword(null,"parser","parser",-1543495310));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__47973,map__47973__$1,env,state,query,parser){
return (function (){
cljs.core.println.call(null,new cljs.core.Keyword("timesheet","editing","timesheet/editing",1319567555).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)));

cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword("timesheet","editing","timesheet/editing",1319567555),null);

return cljs.core.println.call(null,new cljs.core.Keyword("timesheet","editing","timesheet/editing",1319567555).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)));
});})(map__47973,map__47973__$1,env,state,query,parser))
], null);
}));
cljs.core._add_method.call(null,om_tsheets.parser.mutate,new cljs.core.Symbol("timesheet","submit-edit","timesheet/submit-edit",328887237,null),(function (p__47975,key,params){
var map__47976 = p__47975;
var map__47976__$1 = ((((!((map__47976 == null)))?((((map__47976.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47976.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47976):map__47976);
var env = map__47976__$1;
var state = cljs.core.get.call(null,map__47976__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var query = cljs.core.get.call(null,map__47976__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var parser = cljs.core.get.call(null,map__47976__$1,new cljs.core.Keyword(null,"parser","parser",-1543495310));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__47976,map__47976__$1,env,state,query,parser){
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
});})(map__47976,map__47976__$1,env,state,query,parser))
], null);
}));
om_tsheets.parser.parser = om.next.parser.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mutate","mutate",1422419038),om_tsheets.parser.mutate,new cljs.core.Keyword(null,"read","read",1140058661),om_tsheets.parser.read], null));

//# sourceMappingURL=parser.js.map