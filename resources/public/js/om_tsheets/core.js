// Compiled by ClojureScript 1.7.170 {}
goog.provide('om_tsheets.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.Uri');
goog.require('cljs.pprint');
goog.require('om.dom');
goog.require('cljs.core.async');
goog.require('goog.net.Jsonp');
goog.require('om_tsheets.parser');
goog.require('clojure.string');
goog.require('om.next');
goog.require('om_tsheets.timesheet');
cljs.core.enable_console_print_BANG_.call(null);
om_tsheets.core.app_state = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("timesheet","editing","timesheet/editing",1319567555),null,new cljs.core.Keyword("timesheet","by-id","timesheet/by-id",-2057892815),new cljs.core.PersistentArrayMap(null, 2, [(0),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("timesheet","id","timesheet/id",-1493403774),(0),new cljs.core.Keyword("timesheet","clocked-in","timesheet/clocked-in",-1991812801),false,new cljs.core.Keyword("timesheet","start","timesheet/start",-300956771),(new Date()),new cljs.core.Keyword("timesheet","end","timesheet/end",-222813232),(new Date()),new cljs.core.Keyword("timesheet","jobcode","timesheet/jobcode",89283979),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("jobcode","by-id","jobcode/by-id",642034585),(0)], null),new cljs.core.Keyword("timesheet","notes","timesheet/notes",-993216837),"Some notes"], null),(1),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("timesheet","id","timesheet/id",-1493403774),(1),new cljs.core.Keyword("timesheet","clocked-in","timesheet/clocked-in",-1991812801),false,new cljs.core.Keyword("timesheet","start","timesheet/start",-300956771),(new Date((2015),(5),(5))),new cljs.core.Keyword("timesheet","end","timesheet/end",-222813232),(new Date()),new cljs.core.Keyword("timesheet","jobcode","timesheet/jobcode",89283979),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("jobcode","by-id","jobcode/by-id",642034585),(1)], null),new cljs.core.Keyword("timesheet","notes","timesheet/notes",-993216837),"Some more notes"], null)], null),new cljs.core.Keyword("jobcode","by-id","jobcode/by-id",642034585),new cljs.core.PersistentArrayMap(null, 2, [(0),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("jobcode","id","jobcode/id",269276970),(0),new cljs.core.Keyword("jobcode","name","jobcode/name",1129739111),"A Jobcode"], null),(1),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("jobcode","id","jobcode/id",269276970),(1),new cljs.core.Keyword("jobcode","name","jobcode/name",1129739111),"Running for President"], null)], null)], null);
/**
 * @constructor
 */
om_tsheets.core.TimesheetList = (function om_tsheets$core$TimesheetList(){
var this__19951__auto__ = this;
React.Component.apply(this__19951__auto__,arguments);

if(!((this__19951__auto__.initLocalState == null))){
this__19951__auto__.state = this__19951__auto__.initLocalState();
} else {
this__19951__auto__.state = {};
}

return this__19951__auto__;
});

om_tsheets.core.TimesheetList.prototype = goog.object.clone(React.Component.prototype);

var x47984_47994 = om_tsheets.core.TimesheetList.prototype;
x47984_47994.componentWillUpdate = ((function (x47984_47994){
return (function (next_props__19892__auto__,next_state__19893__auto__){
var this__19891__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__19891__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__19891__auto__);
});})(x47984_47994))
;

x47984_47994.shouldComponentUpdate = ((function (x47984_47994){
return (function (next_props__19892__auto__,next_state__19893__auto__){
var this__19891__auto__ = this;
var or__16771__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__19891__auto__),goog.object.get(next_props__19892__auto__,"omcljs$value"));
if(or__16771__auto__){
return or__16771__auto__;
} else {
var and__16759__auto__ = this__19891__auto__.state;
if(cljs.core.truth_(and__16759__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__19891__auto__.state,"omcljs$state"),goog.object.get(next_state__19893__auto__,"omcljs$state"));
} else {
return and__16759__auto__;
}
}
});})(x47984_47994))
;

x47984_47994.componentWillUnmount = ((function (x47984_47994){
return (function (){
var this__19891__auto__ = this;
var r__19897__auto__ = om.next.get_reconciler.call(null,this__19891__auto__);
var cfg__19898__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__19897__auto__);
var st__19899__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__19898__auto__);
var indexer__19896__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__19898__auto__);
if((st__19899__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__19899__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__19891__auto__);
}

if((indexer__19896__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__19896__auto__,this__19891__auto__);
}
});})(x47984_47994))
;

x47984_47994.componentDidUpdate = ((function (x47984_47994){
return (function (prev_props__19894__auto__,prev_state__19895__auto__){
var this__19891__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__19891__auto__);
});})(x47984_47994))
;

x47984_47994.isMounted = ((function (x47984_47994){
return (function (){
var this__19891__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__19891__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x47984_47994))
;

x47984_47994.componentWillMount = ((function (x47984_47994){
return (function (){
var this__19891__auto__ = this;
var indexer__19896__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__19891__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__19896__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__19896__auto__,this__19891__auto__);
}
});})(x47984_47994))
;

x47984_47994.render = ((function (x47984_47994){
return (function (){
var this__19890__auto__ = this;
var this$ = this__19890__auto__;
var _STAR_reconciler_STAR_47985 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_47986 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_47987 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_47988 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_47989 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__19890__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__19890__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__19890__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__19890__auto__);

om.next._STAR_parent_STAR_ = this__19890__auto__;

try{var map__47990 = om.next.props.call(null,this$);
var map__47990__$1 = ((((!((map__47990 == null)))?((((map__47990.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47990.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47990):map__47990);
var list = cljs.core.get.call(null,map__47990__$1,new cljs.core.Keyword("timesheet","list","timesheet/list",710553005));
var editing = cljs.core.get.call(null,map__47990__$1,new cljs.core.Keyword("timesheet","editing","timesheet/editing",1319567555));
var timecard = cljs.core.get.call(null,map__47990__$1,new cljs.core.Keyword("timesheet","timecard","timesheet/timecard",1818482514));
cljs.core.println.call(null,timecard);

return React.DOM.div(null,om.util.force_children.call(null,React.DOM.p(null,om.util.force_children.call(null,"TSHEETS"))),om.util.force_children.call(null,(((timecard == null))?om_tsheets.timesheet.clock_in_view.call(null):om_tsheets.timesheet.timecard_view.call(null,timecard))),om.util.force_children.call(null,cljs.core.map.call(null,om_tsheets.timesheet.timesheet_view,list)),om.util.force_children.call(null,(((editing == null))?React.DOM.button({"onClick": ((function (map__47990,map__47990__$1,list,editing,timecard,_STAR_reconciler_STAR_47985,_STAR_depth_STAR_47986,_STAR_shared_STAR_47987,_STAR_instrument_STAR_47988,_STAR_parent_STAR_47989,this$,this__19890__auto__,x47984_47994){
return (function (){
return om_tsheets.timesheet.add_edit_timesheet.call(null,this$,om_tsheets.timesheet.create_timesheet.call(null));
});})(map__47990,map__47990__$1,list,editing,timecard,_STAR_reconciler_STAR_47985,_STAR_depth_STAR_47986,_STAR_shared_STAR_47987,_STAR_instrument_STAR_47988,_STAR_parent_STAR_47989,this$,this__19890__auto__,x47984_47994))
},om.util.force_children.call(null,"Add Timesheet")):om_tsheets.timesheet.timesheet_edit_view.call(null,editing))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_47989;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_47988;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_47987;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_47986;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_47985;
}});})(x47984_47994))
;


om_tsheets.core.TimesheetList.prototype.constructor = om_tsheets.core.TimesheetList;

om_tsheets.core.TimesheetList.prototype.constructor.displayName = "om-tsheets.core/TimesheetList";

om_tsheets.core.TimesheetList.prototype.om$isComponent = true;

var x47992_47995 = om_tsheets.core.TimesheetList;
x47992_47995.om$next$IQueryParams$ = true;

x47992_47995.om$next$IQueryParams$params$arity$1 = ((function (x47992_47995){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"timesheet-item","timesheet-item",-1499628014),om.next.get_query.call(null,om_tsheets.timesheet.Timesheet),new cljs.core.Keyword(null,"timesheet-edit-item","timesheet-edit-item",25236182),om.next.get_query.call(null,om_tsheets.timesheet.TimesheetEdit),new cljs.core.Keyword(null,"timecard-item","timecard-item",170932991),om.next.get_query.call(null,om_tsheets.timesheet.Timecard)], null);
});})(x47992_47995))
;

x47992_47995.om$next$IQuery$ = true;

x47992_47995.om$next$IQuery$query$arity$1 = ((function (x47992_47995){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("timesheet","list","timesheet/list",710553005),new cljs.core.Symbol(null,"?timesheet-item","?timesheet-item",630810751,null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("timesheet","editing","timesheet/editing",1319567555),new cljs.core.Symbol(null,"?timesheet-edit-item","?timesheet-edit-item",590179435,null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("timesheet","timecard","timesheet/timecard",1818482514),new cljs.core.Symbol(null,"?timecard-item","?timecard-item",-1034193887,null)], null)], null);
});})(x47992_47995))
;


var x47993_47996 = om_tsheets.core.TimesheetList.prototype;
x47993_47996.om$next$IQueryParams$ = true;

x47993_47996.om$next$IQueryParams$params$arity$1 = ((function (x47993_47996){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"timesheet-item","timesheet-item",-1499628014),om.next.get_query.call(null,om_tsheets.timesheet.Timesheet),new cljs.core.Keyword(null,"timesheet-edit-item","timesheet-edit-item",25236182),om.next.get_query.call(null,om_tsheets.timesheet.TimesheetEdit),new cljs.core.Keyword(null,"timecard-item","timecard-item",170932991),om.next.get_query.call(null,om_tsheets.timesheet.Timecard)], null);
});})(x47993_47996))
;

x47993_47996.om$next$IQuery$ = true;

x47993_47996.om$next$IQuery$query$arity$1 = ((function (x47993_47996){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("timesheet","list","timesheet/list",710553005),new cljs.core.Symbol(null,"?timesheet-item","?timesheet-item",630810751,null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("timesheet","editing","timesheet/editing",1319567555),new cljs.core.Symbol(null,"?timesheet-edit-item","?timesheet-edit-item",590179435,null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("timesheet","timecard","timesheet/timecard",1818482514),new cljs.core.Symbol(null,"?timecard-item","?timecard-item",-1034193887,null)], null)], null);
});})(x47993_47996))
;


om_tsheets.core.TimesheetList.cljs$lang$type = true;

om_tsheets.core.TimesheetList.cljs$lang$ctorStr = "om-tsheets.core/TimesheetList";

om_tsheets.core.TimesheetList.cljs$lang$ctorPrWriter = (function (this__19953__auto__,writer__19954__auto__,opt__19955__auto__){
return cljs.core._write.call(null,writer__19954__auto__,"om-tsheets.core/TimesheetList");
});
om_tsheets.core.reconciler = om.next.reconciler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),om_tsheets.core.app_state,new cljs.core.Keyword(null,"parser","parser",-1543495310),om_tsheets.parser.parser], null));
cljs.core.println.call(null,om.next.get_query.call(null,om_tsheets.timesheet.Timesheet));
om.next.add_root_BANG_.call(null,om_tsheets.core.reconciler,om_tsheets.core.TimesheetList,goog.dom.getElement("app"));

//# sourceMappingURL=core.js.map