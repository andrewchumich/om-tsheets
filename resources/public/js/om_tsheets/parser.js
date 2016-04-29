// Compiled by ClojureScript 1.7.170 {}
goog.provide('om_tsheets.parser');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('om.dom');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('om.next');
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
cljs.core._add_method.call(null,om_tsheets.parser.read,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__31899,key,params){
var map__31900 = p__31899;
var map__31900__$1 = ((((!((map__31900 == null)))?((((map__31900.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31900.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31900):map__31900);
var state = cljs.core.get.call(null,map__31900__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
cljs.core.println.call(null,key);

if(cljs.core.contains_QMARK_.call(null,st,key)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get.call(null,st,key)], null);
} else {
return null;
}
}));
cljs.core._add_method.call(null,om_tsheets.parser.read,new cljs.core.Keyword("timesheet","start","timesheet/start",-300956771),(function (p__31902,key,params){
var map__31903 = p__31902;
var map__31903__$1 = ((((!((map__31903 == null)))?((((map__31903.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31903.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31903):map__31903);
var state = cljs.core.get.call(null,map__31903__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var timesheet = cljs.core.get.call(null,map__31903__$1,new cljs.core.Keyword(null,"timesheet","timesheet",-198269298));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get.call(null,timesheet,key)], null);
}));
cljs.core._add_method.call(null,om_tsheets.parser.read,new cljs.core.Keyword("timesheet","end","timesheet/end",-222813232),(function (p__31905,key,params){
var map__31906 = p__31905;
var map__31906__$1 = ((((!((map__31906 == null)))?((((map__31906.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31906.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31906):map__31906);
var state = cljs.core.get.call(null,map__31906__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var timesheet = cljs.core.get.call(null,map__31906__$1,new cljs.core.Keyword(null,"timesheet","timesheet",-198269298));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get.call(null,timesheet,key)], null);
}));
cljs.core._add_method.call(null,om_tsheets.parser.read,new cljs.core.Keyword("timesheet","notes","timesheet/notes",-993216837),(function (p__31908,key,params){
var map__31909 = p__31908;
var map__31909__$1 = ((((!((map__31909 == null)))?((((map__31909.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31909.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31909):map__31909);
var state = cljs.core.get.call(null,map__31909__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var timesheet = cljs.core.get.call(null,map__31909__$1,new cljs.core.Keyword(null,"timesheet","timesheet",-198269298));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get.call(null,timesheet,key)], null);
}));
cljs.core._add_method.call(null,om_tsheets.parser.read,new cljs.core.Keyword("db","id","db/id",-1388397098),(function (p__31911,key,params){
var map__31912 = p__31911;
var map__31912__$1 = ((((!((map__31912 == null)))?((((map__31912.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31912.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31912):map__31912);
var state = cljs.core.get.call(null,map__31912__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var timesheet = cljs.core.get.call(null,map__31912__$1,new cljs.core.Keyword(null,"timesheet","timesheet",-198269298));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get.call(null,timesheet,key)], null);
}));
cljs.core._add_method.call(null,om_tsheets.parser.read,new cljs.core.Keyword("timesheets","list","timesheets/list",-1066812812),(function (p__31914,key,params){
var map__31915 = p__31914;
var map__31915__$1 = ((((!((map__31915 == null)))?((((map__31915.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31915.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31915):map__31915);
var env = map__31915__$1;
var state = cljs.core.get.call(null,map__31915__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var query = cljs.core.get.call(null,map__31915__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var parser = cljs.core.get.call(null,map__31915__$1,new cljs.core.Keyword(null,"parser","parser",-1543495310));
var parse_timesheet = ((function (map__31915,map__31915__$1,env,state,query,parser){
return (function om_tsheets$parser$parse_timesheet(timesheet_id){
var temp__4423__auto__ = cljs.core.get_in.call(null,cljs.core.deref.call(null,state),timesheet_id);
if(cljs.core.truth_(temp__4423__auto__)){
var timesheet = temp__4423__auto__;
return parser.call(null,cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"timesheet","timesheet",-198269298),timesheet),query);
} else {
return null;
}
});})(map__31915,map__31915__$1,env,state,query,parser))
;
var st = cljs.core.deref.call(null,state);
var timesheet_ids = cljs.core.get.call(null,st,key);
cljs.core.println.call(null,st);

if(cljs.core.contains_QMARK_.call(null,st,key)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get.call(null,st,key)], null);
} else {
return null;
}
}));
om_tsheets.parser.parser = om.next.parser.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"read","read",1140058661),om_tsheets.parser.read], null));

//# sourceMappingURL=parser.js.map