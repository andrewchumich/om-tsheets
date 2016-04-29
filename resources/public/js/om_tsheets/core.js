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
cljs.core.enable_console_print_BANG_.call(null);
om_tsheets.core.app_state = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("timesheets","list","timesheets/list",-1066812812),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("db","id","db/id",-1388397098),(0),new cljs.core.Keyword("timesheet","start","timesheet/start",-300956771),Date(),new cljs.core.Keyword("timesheet","end","timesheet/end",-222813232),Date(),new cljs.core.Keyword(null,"jobcode","jobcode",437139525),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),(0),new cljs.core.Keyword("jobcode","name","jobcode/name",1129739111),"Hello"], null),new cljs.core.Keyword("timesheet","notes","timesheet/notes",-993216837),"Some notes"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("db","id","db/id",-1388397098),(1),new cljs.core.Keyword("timesheet","start","timesheet/start",-300956771),Date(),new cljs.core.Keyword("timesheet","end","timesheet/end",-222813232),Date(),new cljs.core.Keyword(null,"jobcode","jobcode",437139525),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),(1),new cljs.core.Keyword("jobcode","name","jobcode/name",1129739111),"Running for President"], null),new cljs.core.Keyword("timesheet","notes","timesheet/notes",-993216837),"Some more notes"], null)], null)], null);
/**
 * @constructor
 */
om_tsheets.core.Jobcode = (function om_tsheets$core$Jobcode(){
var this__19952__auto__ = this;
React.Component.apply(this__19952__auto__,arguments);

if(!((this__19952__auto__.initLocalState == null))){
this__19952__auto__.state = this__19952__auto__.initLocalState();
} else {
this__19952__auto__.state = {};
}

return this__19952__auto__;
});

om_tsheets.core.Jobcode.prototype = goog.object.clone(React.Component.prototype);

var x32057_32073 = om_tsheets.core.Jobcode.prototype;
x32057_32073.componentWillUpdate = ((function (x32057_32073){
return (function (next_props__19893__auto__,next_state__19894__auto__){
var this__19892__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__19892__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__19892__auto__);
});})(x32057_32073))
;

x32057_32073.shouldComponentUpdate = ((function (x32057_32073){
return (function (next_props__19893__auto__,next_state__19894__auto__){
var this__19892__auto__ = this;
var or__16771__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__19892__auto__),goog.object.get(next_props__19893__auto__,"omcljs$value"));
if(or__16771__auto__){
return or__16771__auto__;
} else {
var and__16759__auto__ = this__19892__auto__.state;
if(cljs.core.truth_(and__16759__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__19892__auto__.state,"omcljs$state"),goog.object.get(next_state__19894__auto__,"omcljs$state"));
} else {
return and__16759__auto__;
}
}
});})(x32057_32073))
;

x32057_32073.componentWillUnmount = ((function (x32057_32073){
return (function (){
var this__19892__auto__ = this;
var r__19898__auto__ = om.next.get_reconciler.call(null,this__19892__auto__);
var cfg__19899__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__19898__auto__);
var st__19900__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__19899__auto__);
var indexer__19897__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__19899__auto__);
if((st__19900__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__19900__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__19892__auto__);
}

if((indexer__19897__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__19897__auto__,this__19892__auto__);
}
});})(x32057_32073))
;

x32057_32073.componentDidUpdate = ((function (x32057_32073){
return (function (prev_props__19895__auto__,prev_state__19896__auto__){
var this__19892__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__19892__auto__);
});})(x32057_32073))
;

x32057_32073.isMounted = ((function (x32057_32073){
return (function (){
var this__19892__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__19892__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x32057_32073))
;

x32057_32073.componentWillMount = ((function (x32057_32073){
return (function (){
var this__19892__auto__ = this;
var indexer__19897__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__19892__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__19897__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__19897__auto__,this__19892__auto__);
}
});})(x32057_32073))
;

x32057_32073.render = ((function (x32057_32073){
return (function (){
var this__19891__auto__ = this;
var this$ = this__19891__auto__;
var _STAR_reconciler_STAR_32058 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_32059 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_32060 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_32061 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_32062 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__19891__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__19891__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__19891__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__19891__auto__);

om.next._STAR_parent_STAR_ = this__19891__auto__;

try{var map__32063 = om.next.props.call(null,this$);
var map__32063__$1 = ((((!((map__32063 == null)))?((((map__32063.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32063.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32063):map__32063);
var name = cljs.core.get.call(null,map__32063__$1,new cljs.core.Keyword(null,"name","name",1843675177));
return React.DOM.div(null,om.util.force_children.call(null,name));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_32062;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_32061;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_32060;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_32059;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_32058;
}});})(x32057_32073))
;


om_tsheets.core.Jobcode.prototype.constructor = om_tsheets.core.Jobcode;

om_tsheets.core.Jobcode.prototype.constructor.displayName = "om-tsheets.core/Jobcode";

om_tsheets.core.Jobcode.prototype.om$isComponent = true;

var x32065_32074 = om_tsheets.core.Jobcode;
x32065_32074.om$next$Ident$ = true;

x32065_32074.om$next$Ident$ident$arity$2 = ((function (x32065_32074){
return (function (this$,p__32066){
var map__32067 = p__32066;
var map__32067__$1 = ((((!((map__32067 == null)))?((((map__32067.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32067.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32067):map__32067);
var id = cljs.core.get.call(null,map__32067__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("jobcode","by-id","jobcode/by-id",642034585),id], null);
});})(x32065_32074))
;

x32065_32074.om$next$IQuery$ = true;

x32065_32074.om$next$IQuery$query$arity$1 = ((function (x32065_32074){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("jobcode","name","jobcode/name",1129739111)], null);
});})(x32065_32074))
;


var x32069_32075 = om_tsheets.core.Jobcode.prototype;
x32069_32075.om$next$Ident$ = true;

x32069_32075.om$next$Ident$ident$arity$2 = ((function (x32069_32075){
return (function (this$,p__32070){
var map__32071 = p__32070;
var map__32071__$1 = ((((!((map__32071 == null)))?((((map__32071.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32071.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32071):map__32071);
var id = cljs.core.get.call(null,map__32071__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("jobcode","by-id","jobcode/by-id",642034585),id], null);
});})(x32069_32075))
;

x32069_32075.om$next$IQuery$ = true;

x32069_32075.om$next$IQuery$query$arity$1 = ((function (x32069_32075){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("jobcode","name","jobcode/name",1129739111)], null);
});})(x32069_32075))
;


om_tsheets.core.Jobcode.cljs$lang$type = true;

om_tsheets.core.Jobcode.cljs$lang$ctorStr = "om-tsheets.core/Jobcode";

om_tsheets.core.Jobcode.cljs$lang$ctorPrWriter = (function (this__19954__auto__,writer__19955__auto__,opt__19956__auto__){
return cljs.core._write.call(null,writer__19955__auto__,"om-tsheets.core/Jobcode");
});
om_tsheets.core.jobcode_view = om.next.factory.call(null,om_tsheets.core.Jobcode);
/**
 * @constructor
 */
om_tsheets.core.Timesheet = (function om_tsheets$core$Timesheet(){
var this__19952__auto__ = this;
React.Component.apply(this__19952__auto__,arguments);

if(!((this__19952__auto__.initLocalState == null))){
this__19952__auto__.state = this__19952__auto__.initLocalState();
} else {
this__19952__auto__.state = {};
}

return this__19952__auto__;
});

om_tsheets.core.Timesheet.prototype = goog.object.clone(React.Component.prototype);

var x32080_32096 = om_tsheets.core.Timesheet.prototype;
x32080_32096.componentWillUpdate = ((function (x32080_32096){
return (function (next_props__19893__auto__,next_state__19894__auto__){
var this__19892__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__19892__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__19892__auto__);
});})(x32080_32096))
;

x32080_32096.shouldComponentUpdate = ((function (x32080_32096){
return (function (next_props__19893__auto__,next_state__19894__auto__){
var this__19892__auto__ = this;
var or__16771__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__19892__auto__),goog.object.get(next_props__19893__auto__,"omcljs$value"));
if(or__16771__auto__){
return or__16771__auto__;
} else {
var and__16759__auto__ = this__19892__auto__.state;
if(cljs.core.truth_(and__16759__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__19892__auto__.state,"omcljs$state"),goog.object.get(next_state__19894__auto__,"omcljs$state"));
} else {
return and__16759__auto__;
}
}
});})(x32080_32096))
;

x32080_32096.componentWillUnmount = ((function (x32080_32096){
return (function (){
var this__19892__auto__ = this;
var r__19898__auto__ = om.next.get_reconciler.call(null,this__19892__auto__);
var cfg__19899__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__19898__auto__);
var st__19900__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__19899__auto__);
var indexer__19897__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__19899__auto__);
if((st__19900__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__19900__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__19892__auto__);
}

if((indexer__19897__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__19897__auto__,this__19892__auto__);
}
});})(x32080_32096))
;

x32080_32096.componentDidUpdate = ((function (x32080_32096){
return (function (prev_props__19895__auto__,prev_state__19896__auto__){
var this__19892__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__19892__auto__);
});})(x32080_32096))
;

x32080_32096.isMounted = ((function (x32080_32096){
return (function (){
var this__19892__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__19892__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x32080_32096))
;

x32080_32096.componentWillMount = ((function (x32080_32096){
return (function (){
var this__19892__auto__ = this;
var indexer__19897__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__19892__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__19897__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__19897__auto__,this__19892__auto__);
}
});})(x32080_32096))
;

x32080_32096.render = ((function (x32080_32096){
return (function (){
var this__19891__auto__ = this;
var this$ = this__19891__auto__;
var _STAR_reconciler_STAR_32081 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_32082 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_32083 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_32084 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_32085 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__19891__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__19891__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__19891__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__19891__auto__);

om.next._STAR_parent_STAR_ = this__19891__auto__;

try{var map__32086 = om.next.props.call(null,this$);
var map__32086__$1 = ((((!((map__32086 == null)))?((((map__32086.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32086.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32086):map__32086);
var start = cljs.core.get.call(null,map__32086__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end = cljs.core.get.call(null,map__32086__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var jobcode = cljs.core.get.call(null,map__32086__$1,new cljs.core.Keyword(null,"jobcode","jobcode",437139525));
var notes = cljs.core.get.call(null,map__32086__$1,new cljs.core.Keyword(null,"notes","notes",-1039600523));
return React.DOM.div(null,om.util.force_children.call(null,React.DOM.div(null,om.util.force_children.call(null,"-------------------------------------"))),om.util.force_children.call(null,React.DOM.div(null,om.util.force_children.call(null,start))),om.util.force_children.call(null,React.DOM.div(null,om.util.force_children.call(null,end))),om.util.force_children.call(null,om_tsheets.core.jobcode_view.call(null,jobcode)),om.util.force_children.call(null,React.DOM.p(null,om.util.force_children.call(null,notes))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_32085;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_32084;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_32083;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_32082;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_32081;
}});})(x32080_32096))
;


om_tsheets.core.Timesheet.prototype.constructor = om_tsheets.core.Timesheet;

om_tsheets.core.Timesheet.prototype.constructor.displayName = "om-tsheets.core/Timesheet";

om_tsheets.core.Timesheet.prototype.om$isComponent = true;

var x32088_32097 = om_tsheets.core.Timesheet;
x32088_32097.om$next$Ident$ = true;

x32088_32097.om$next$Ident$ident$arity$2 = ((function (x32088_32097){
return (function (this$,p__32089){
var map__32090 = p__32089;
var map__32090__$1 = ((((!((map__32090 == null)))?((((map__32090.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32090.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32090):map__32090);
var id = cljs.core.get.call(null,map__32090__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("timesheets","by-id","timesheets/by-id",-480757180),id], null);
});})(x32088_32097))
;

x32088_32097.om$next$IQuery$ = true;

x32088_32097.om$next$IQuery$query$arity$1 = ((function (x32088_32097){
return (function (this$){
var this$__$1 = this;
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("db","id","db/id",-1388397098)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("timesheet","start","timesheet/start",-300956771)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("timesheet","end","timesheet/end",-222813232)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("timesheet","notes","timesheet/notes",-993216837)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"jobcode","jobcode",437139525)),cljs.core._conj.call(null,cljs.core.List.EMPTY,om.next.get_query.call(null,om_tsheets.core.Jobcode)))))))))));
});})(x32088_32097))
;


var x32092_32098 = om_tsheets.core.Timesheet.prototype;
x32092_32098.om$next$Ident$ = true;

x32092_32098.om$next$Ident$ident$arity$2 = ((function (x32092_32098){
return (function (this$,p__32093){
var map__32094 = p__32093;
var map__32094__$1 = ((((!((map__32094 == null)))?((((map__32094.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32094.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32094):map__32094);
var id = cljs.core.get.call(null,map__32094__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("timesheets","by-id","timesheets/by-id",-480757180),id], null);
});})(x32092_32098))
;

x32092_32098.om$next$IQuery$ = true;

x32092_32098.om$next$IQuery$query$arity$1 = ((function (x32092_32098){
return (function (this$){
var this$__$1 = this;
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("db","id","db/id",-1388397098)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("timesheet","start","timesheet/start",-300956771)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("timesheet","end","timesheet/end",-222813232)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("timesheet","notes","timesheet/notes",-993216837)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"jobcode","jobcode",437139525)),cljs.core._conj.call(null,cljs.core.List.EMPTY,om.next.get_query.call(null,om_tsheets.core.Jobcode)))))))))));
});})(x32092_32098))
;


om_tsheets.core.Timesheet.cljs$lang$type = true;

om_tsheets.core.Timesheet.cljs$lang$ctorStr = "om-tsheets.core/Timesheet";

om_tsheets.core.Timesheet.cljs$lang$ctorPrWriter = (function (this__19954__auto__,writer__19955__auto__,opt__19956__auto__){
return cljs.core._write.call(null,writer__19955__auto__,"om-tsheets.core/Timesheet");
});
om_tsheets.core.timesheet = om.next.factory.call(null,om_tsheets.core.Timesheet,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword(null,"id","id",-1388402092)], null));
/**
 * @constructor
 */
om_tsheets.core.TimesheetList = (function om_tsheets$core$TimesheetList(){
var this__19952__auto__ = this;
React.Component.apply(this__19952__auto__,arguments);

if(!((this__19952__auto__.initLocalState == null))){
this__19952__auto__.state = this__19952__auto__.initLocalState();
} else {
this__19952__auto__.state = {};
}

return this__19952__auto__;
});

om_tsheets.core.TimesheetList.prototype = goog.object.clone(React.Component.prototype);

var x32103_32113 = om_tsheets.core.TimesheetList.prototype;
x32103_32113.componentWillUpdate = ((function (x32103_32113){
return (function (next_props__19893__auto__,next_state__19894__auto__){
var this__19892__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__19892__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__19892__auto__);
});})(x32103_32113))
;

x32103_32113.shouldComponentUpdate = ((function (x32103_32113){
return (function (next_props__19893__auto__,next_state__19894__auto__){
var this__19892__auto__ = this;
var or__16771__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__19892__auto__),goog.object.get(next_props__19893__auto__,"omcljs$value"));
if(or__16771__auto__){
return or__16771__auto__;
} else {
var and__16759__auto__ = this__19892__auto__.state;
if(cljs.core.truth_(and__16759__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__19892__auto__.state,"omcljs$state"),goog.object.get(next_state__19894__auto__,"omcljs$state"));
} else {
return and__16759__auto__;
}
}
});})(x32103_32113))
;

x32103_32113.componentWillUnmount = ((function (x32103_32113){
return (function (){
var this__19892__auto__ = this;
var r__19898__auto__ = om.next.get_reconciler.call(null,this__19892__auto__);
var cfg__19899__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__19898__auto__);
var st__19900__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__19899__auto__);
var indexer__19897__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__19899__auto__);
if((st__19900__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__19900__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__19892__auto__);
}

if((indexer__19897__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__19897__auto__,this__19892__auto__);
}
});})(x32103_32113))
;

x32103_32113.componentDidUpdate = ((function (x32103_32113){
return (function (prev_props__19895__auto__,prev_state__19896__auto__){
var this__19892__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__19892__auto__);
});})(x32103_32113))
;

x32103_32113.isMounted = ((function (x32103_32113){
return (function (){
var this__19892__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__19892__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x32103_32113))
;

x32103_32113.componentWillMount = ((function (x32103_32113){
return (function (){
var this__19892__auto__ = this;
var indexer__19897__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__19892__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__19897__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__19897__auto__,this__19892__auto__);
}
});})(x32103_32113))
;

x32103_32113.render = ((function (x32103_32113){
return (function (){
var this__19891__auto__ = this;
var this$ = this__19891__auto__;
var _STAR_reconciler_STAR_32104 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_32105 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_32106 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_32107 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_32108 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__19891__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__19891__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__19891__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__19891__auto__);

om.next._STAR_parent_STAR_ = this__19891__auto__;

try{var map__32109 = om.next.props.call(null,this$);
var map__32109__$1 = ((((!((map__32109 == null)))?((((map__32109.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32109.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32109):map__32109);
var timesheets = cljs.core.get.call(null,map__32109__$1,new cljs.core.Keyword(null,"timesheets","timesheets",30895656));
cljs.core.println.call(null,timesheets);

return React.DOM.div(null,om.util.force_children.call(null,React.DOM.p(null,om.util.force_children.call(null,"HELLO"))),om.util.force_children.call(null,cljs.core.map.call(null,om_tsheets.core.timesheet,timesheets)));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_32108;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_32107;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_32106;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_32105;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_32104;
}});})(x32103_32113))
;


om_tsheets.core.TimesheetList.prototype.constructor = om_tsheets.core.TimesheetList;

om_tsheets.core.TimesheetList.prototype.constructor.displayName = "om-tsheets.core/TimesheetList";

om_tsheets.core.TimesheetList.prototype.om$isComponent = true;

var x32111_32114 = om_tsheets.core.TimesheetList;
x32111_32114.om$next$IQueryParams$ = true;

x32111_32114.om$next$IQueryParams$params$arity$1 = ((function (x32111_32114){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"timesheet-item","timesheet-item",-1499628014),om.next.get_query.call(null,om_tsheets.core.Timesheet)], null);
});})(x32111_32114))
;

x32111_32114.om$next$IQuery$ = true;

x32111_32114.om$next$IQuery$query$arity$1 = ((function (x32111_32114){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("timesheets","list","timesheets/list",-1066812812),new cljs.core.Symbol(null,"?timesheet-item","?timesheet-item",630810751,null)], null)], null);
});})(x32111_32114))
;


var x32112_32115 = om_tsheets.core.TimesheetList.prototype;
x32112_32115.om$next$IQueryParams$ = true;

x32112_32115.om$next$IQueryParams$params$arity$1 = ((function (x32112_32115){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"timesheet-item","timesheet-item",-1499628014),om.next.get_query.call(null,om_tsheets.core.Timesheet)], null);
});})(x32112_32115))
;

x32112_32115.om$next$IQuery$ = true;

x32112_32115.om$next$IQuery$query$arity$1 = ((function (x32112_32115){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("timesheets","list","timesheets/list",-1066812812),new cljs.core.Symbol(null,"?timesheet-item","?timesheet-item",630810751,null)], null)], null);
});})(x32112_32115))
;


om_tsheets.core.TimesheetList.cljs$lang$type = true;

om_tsheets.core.TimesheetList.cljs$lang$ctorStr = "om-tsheets.core/TimesheetList";

om_tsheets.core.TimesheetList.cljs$lang$ctorPrWriter = (function (this__19954__auto__,writer__19955__auto__,opt__19956__auto__){
return cljs.core._write.call(null,writer__19955__auto__,"om-tsheets.core/TimesheetList");
});
om_tsheets.core.reconciler = om.next.reconciler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),om_tsheets.core.app_state,new cljs.core.Keyword(null,"parser","parser",-1543495310),om_tsheets.parser.parser], null));
om.next.add_root_BANG_.call(null,om_tsheets.core.reconciler,om_tsheets.core.TimesheetList,goog.dom.getElement("app"));

//# sourceMappingURL=core.js.map