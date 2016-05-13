// Compiled by ClojureScript 1.7.170 {}
goog.provide('om_tsheets.jobcode');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.Uri');
goog.require('cljs.pprint');
goog.require('om.dom');
goog.require('goog.net.Jsonp');
goog.require('om.next');
/**
 * @constructor
 */
om_tsheets.jobcode.Jobcode = (function om_tsheets$jobcode$Jobcode(){
var this__19951__auto__ = this;
React.Component.apply(this__19951__auto__,arguments);

if(!((this__19951__auto__.initLocalState == null))){
this__19951__auto__.state = this__19951__auto__.initLocalState();
} else {
this__19951__auto__.state = {};
}

return this__19951__auto__;
});

om_tsheets.jobcode.Jobcode.prototype = goog.object.clone(React.Component.prototype);

var x20435_20445 = om_tsheets.jobcode.Jobcode.prototype;
x20435_20445.componentWillUpdate = ((function (x20435_20445){
return (function (next_props__19892__auto__,next_state__19893__auto__){
var this__19891__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__19891__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__19891__auto__);
});})(x20435_20445))
;

x20435_20445.shouldComponentUpdate = ((function (x20435_20445){
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
});})(x20435_20445))
;

x20435_20445.componentWillUnmount = ((function (x20435_20445){
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
});})(x20435_20445))
;

x20435_20445.componentDidUpdate = ((function (x20435_20445){
return (function (prev_props__19894__auto__,prev_state__19895__auto__){
var this__19891__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__19891__auto__);
});})(x20435_20445))
;

x20435_20445.isMounted = ((function (x20435_20445){
return (function (){
var this__19891__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__19891__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x20435_20445))
;

x20435_20445.componentWillMount = ((function (x20435_20445){
return (function (){
var this__19891__auto__ = this;
var indexer__19896__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__19891__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__19896__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__19896__auto__,this__19891__auto__);
}
});})(x20435_20445))
;

x20435_20445.render = ((function (x20435_20445){
return (function (){
var this__19890__auto__ = this;
var this$ = this__19890__auto__;
var _STAR_reconciler_STAR_20436 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_20437 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_20438 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_20439 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_20440 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__19890__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__19890__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__19890__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__19890__auto__);

om.next._STAR_parent_STAR_ = this__19890__auto__;

try{var map__20441 = om.next.props.call(null,this$);
var map__20441__$1 = ((((!((map__20441 == null)))?((((map__20441.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20441.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20441):map__20441);
var name = cljs.core.get.call(null,map__20441__$1,new cljs.core.Keyword("jobcode","name","jobcode/name",1129739111));
return React.DOM.div(null,om.util.force_children.call(null,name));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_20440;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_20439;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_20438;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_20437;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_20436;
}});})(x20435_20445))
;


om_tsheets.jobcode.Jobcode.prototype.constructor = om_tsheets.jobcode.Jobcode;

om_tsheets.jobcode.Jobcode.prototype.constructor.displayName = "om-tsheets.jobcode/Jobcode";

om_tsheets.jobcode.Jobcode.prototype.om$isComponent = true;

var x20443_20446 = om_tsheets.jobcode.Jobcode;
x20443_20446.om$next$IQuery$ = true;

x20443_20446.om$next$IQuery$query$arity$1 = ((function (x20443_20446){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("jobcode","id","jobcode/id",269276970),new cljs.core.Keyword("jobcode","name","jobcode/name",1129739111)], null);
});})(x20443_20446))
;


var x20444_20447 = om_tsheets.jobcode.Jobcode.prototype;
x20444_20447.om$next$IQuery$ = true;

x20444_20447.om$next$IQuery$query$arity$1 = ((function (x20444_20447){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("jobcode","id","jobcode/id",269276970),new cljs.core.Keyword("jobcode","name","jobcode/name",1129739111)], null);
});})(x20444_20447))
;


om_tsheets.jobcode.Jobcode.cljs$lang$type = true;

om_tsheets.jobcode.Jobcode.cljs$lang$ctorStr = "om-tsheets.jobcode/Jobcode";

om_tsheets.jobcode.Jobcode.cljs$lang$ctorPrWriter = (function (this__19953__auto__,writer__19954__auto__,opt__19955__auto__){
return cljs.core._write.call(null,writer__19954__auto__,"om-tsheets.jobcode/Jobcode");
});
om_tsheets.jobcode.jobcode_view = om.next.factory.call(null,om_tsheets.jobcode.Jobcode);

//# sourceMappingURL=jobcode.js.map