// Compiled by ClojureScript 1.7.170 {}
goog.provide('om_tsheets.timesheet');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('cljs.pprint');
goog.require('om.dom');
goog.require('om_tsheets.jobcode');
goog.require('clojure.string');
goog.require('om.next');
om_tsheets.timesheet.create_timesheet = (function om_tsheets$timesheet$create_timesheet(var_args){
var args35063 = [];
var len__17843__auto___35069 = arguments.length;
var i__17844__auto___35070 = (0);
while(true){
if((i__17844__auto___35070 < len__17843__auto___35069)){
args35063.push((arguments[i__17844__auto___35070]));

var G__35071 = (i__17844__auto___35070 + (1));
i__17844__auto___35070 = G__35071;
continue;
} else {
}
break;
}

var G__35065 = args35063.length;
switch (G__35065) {
case 0:
return om_tsheets.timesheet.create_timesheet.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return om_tsheets.timesheet.create_timesheet.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35063.length)].join('')));

}
});

om_tsheets.timesheet.create_timesheet.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tsheets.timesheet.create_timesheet.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

om_tsheets.timesheet.create_timesheet.cljs$core$IFn$_invoke$arity$1 = (function (p__35066){
var map__35067 = p__35066;
var map__35067__$1 = ((((!((map__35067 == null)))?((((map__35067.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35067.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35067):map__35067);
var ts = map__35067__$1;
var id = cljs.core.get.call(null,map__35067__$1,new cljs.core.Keyword("timesheet","id","timesheet/id",-1493403774));
var clocked_in = cljs.core.get.call(null,map__35067__$1,new cljs.core.Keyword("timesheet","clocked-in","timesheet/clocked-in",-1991812801),false);
var start = cljs.core.get.call(null,map__35067__$1,new cljs.core.Keyword("timesheet","start","timesheet/start",-300956771),(new Date()));
var end = cljs.core.get.call(null,map__35067__$1,new cljs.core.Keyword("timesheet","end","timesheet/end",-222813232),(new Date()));
var jobcode = cljs.core.get.call(null,map__35067__$1,new cljs.core.Keyword("timesheet","jobcode","timesheet/jobcode",89283979),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("jobcode","by-id","jobcode/by-id",642034585),(0)], null));
var notes = cljs.core.get.call(null,map__35067__$1,new cljs.core.Keyword("timesheet","notes","timesheet/notes",-993216837),"");
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("timesheet","id","timesheet/id",-1493403774),id,new cljs.core.Keyword("timesheet","clocked-in","timesheet/clocked-in",-1991812801),clocked_in,new cljs.core.Keyword("timesheet","start","timesheet/start",-300956771),start,new cljs.core.Keyword("timesheet","end","timesheet/end",-222813232),end,new cljs.core.Keyword("timesheet","jobcode","timesheet/jobcode",89283979),jobcode,new cljs.core.Keyword("timesheet","notes","timesheet/notes",-993216837),notes], null);
});

om_tsheets.timesheet.create_timesheet.cljs$lang$maxFixedArity = 1;
om_tsheets.timesheet.add_timesheet = (function om_tsheets$timesheet$add_timesheet(c){
var ts = om_tsheets.timesheet.create_timesheet.call(null,om.next.props.call(null,c));
return om.next.transact_BANG_.call(null,c,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("timesheet","add","timesheet/add",302710196,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"timesheet","timesheet",-198269298)),cljs.core._conj.call(null,cljs.core.List.EMPTY,ts)))))))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("timesheet","list","timesheet/list",710553005)))))));
});
om_tsheets.timesheet.add_edit_timesheet = (function om_tsheets$timesheet$add_edit_timesheet(var_args){
var args35073 = [];
var len__17843__auto___35076 = arguments.length;
var i__17844__auto___35077 = (0);
while(true){
if((i__17844__auto___35077 < len__17843__auto___35076)){
args35073.push((arguments[i__17844__auto___35077]));

var G__35078 = (i__17844__auto___35077 + (1));
i__17844__auto___35077 = G__35078;
continue;
} else {
}
break;
}

var G__35075 = args35073.length;
switch (G__35075) {
case 1:
return om_tsheets.timesheet.add_edit_timesheet.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om_tsheets.timesheet.add_edit_timesheet.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35073.length)].join('')));

}
});

om_tsheets.timesheet.add_edit_timesheet.cljs$core$IFn$_invoke$arity$1 = (function (c){
return om_tsheets.timesheet.add_edit_timesheet.call(null,c,om_tsheets.timesheet.create_timesheet.call(null));
});

om_tsheets.timesheet.add_edit_timesheet.cljs$core$IFn$_invoke$arity$2 = (function (c,ts){
return om.next.transact_BANG_.call(null,c,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("timesheet","update","timesheet/update",-1654223807,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"timesheet","timesheet",-198269298)),cljs.core._conj.call(null,cljs.core.List.EMPTY,ts),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"id","id",-1388402092)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("timesheet","editing","timesheet/editing",1319567555)))))))))))))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("timesheet","editing","timesheet/editing",1319567555)))))));
});

om_tsheets.timesheet.add_edit_timesheet.cljs$lang$maxFixedArity = 2;
om_tsheets.timesheet.submit_edit_timesheet = (function om_tsheets$timesheet$submit_edit_timesheet(c){
return om.next.transact_BANG_.call(null,c,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("timesheet","submit-edit","timesheet/submit-edit",328887237,null)))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("timesheet","editing","timesheet/editing",1319567555)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("timesheet","list","timesheet/list",710553005)))))));
});
om_tsheets.timesheet.remove_edit_timesheet = (function om_tsheets$timesheet$remove_edit_timesheet(c){
return om.next.transact_BANG_.call(null,c,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("timesheet","remove-edit","timesheet/remove-edit",-1563460373,null)))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("timesheet","list","timesheet/list",710553005)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("timesheet","editing","timesheet/editing",1319567555)))))));
});
/**
 * @constructor
 */
om_tsheets.timesheet.Timesheet = (function om_tsheets$timesheet$Timesheet(){
var this__19005__auto__ = this;
React.Component.apply(this__19005__auto__,arguments);

if(!((this__19005__auto__.initLocalState == null))){
this__19005__auto__.state = this__19005__auto__.initLocalState();
} else {
this__19005__auto__.state = {};
}

return this__19005__auto__;
});

om_tsheets.timesheet.Timesheet.prototype = goog.object.clone(React.Component.prototype);

var x35084_35100 = om_tsheets.timesheet.Timesheet.prototype;
x35084_35100.componentWillUpdate = ((function (x35084_35100){
return (function (next_props__18946__auto__,next_state__18947__auto__){
var this__18945__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__18945__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__18945__auto__);
});})(x35084_35100))
;

x35084_35100.shouldComponentUpdate = ((function (x35084_35100){
return (function (next_props__18946__auto__,next_state__18947__auto__){
var this__18945__auto__ = this;
var or__16785__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__18945__auto__),goog.object.get(next_props__18946__auto__,"omcljs$value"));
if(or__16785__auto__){
return or__16785__auto__;
} else {
var and__16773__auto__ = this__18945__auto__.state;
if(cljs.core.truth_(and__16773__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__18945__auto__.state,"omcljs$state"),goog.object.get(next_state__18947__auto__,"omcljs$state"));
} else {
return and__16773__auto__;
}
}
});})(x35084_35100))
;

x35084_35100.componentWillUnmount = ((function (x35084_35100){
return (function (){
var this__18945__auto__ = this;
var r__18951__auto__ = om.next.get_reconciler.call(null,this__18945__auto__);
var cfg__18952__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__18951__auto__);
var st__18953__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__18952__auto__);
var indexer__18950__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__18952__auto__);
if((st__18953__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__18953__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__18945__auto__);
}

if((indexer__18950__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__18950__auto__,this__18945__auto__);
}
});})(x35084_35100))
;

x35084_35100.componentDidUpdate = ((function (x35084_35100){
return (function (prev_props__18948__auto__,prev_state__18949__auto__){
var this__18945__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__18945__auto__);
});})(x35084_35100))
;

x35084_35100.isMounted = ((function (x35084_35100){
return (function (){
var this__18945__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__18945__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x35084_35100))
;

x35084_35100.componentWillMount = ((function (x35084_35100){
return (function (){
var this__18945__auto__ = this;
var indexer__18950__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__18945__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__18950__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__18950__auto__,this__18945__auto__);
}
});})(x35084_35100))
;

x35084_35100.render = ((function (x35084_35100){
return (function (){
var this__18944__auto__ = this;
var this$ = this__18944__auto__;
var _STAR_reconciler_STAR_35085 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_35086 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_35087 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_35088 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_35089 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__18944__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__18944__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__18944__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__18944__auto__);

om.next._STAR_parent_STAR_ = this__18944__auto__;

try{var map__35090 = om.next.props.call(null,this$);
var map__35090__$1 = ((((!((map__35090 == null)))?((((map__35090.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35090.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35090):map__35090);
var clocked_in = cljs.core.get.call(null,map__35090__$1,new cljs.core.Keyword("timesheet","clocked-in","timesheet/clocked-in",-1991812801));
var start = cljs.core.get.call(null,map__35090__$1,new cljs.core.Keyword("timesheet","start","timesheet/start",-300956771));
var end = cljs.core.get.call(null,map__35090__$1,new cljs.core.Keyword("timesheet","end","timesheet/end",-222813232));
var jobcode = cljs.core.get.call(null,map__35090__$1,new cljs.core.Keyword("timesheet","jobcode","timesheet/jobcode",89283979));
var notes = cljs.core.get.call(null,map__35090__$1,new cljs.core.Keyword("timesheet","notes","timesheet/notes",-993216837));
return React.DOM.div(null,om.util.force_children.call(null,React.DOM.div(null,om.util.force_children.call(null,"-------------------------------------"))),om.util.force_children.call(null,React.DOM.div(null,om.util.force_children.call(null,[cljs.core.str(clocked_in)].join('')))),om.util.force_children.call(null,React.DOM.div(null,om.util.force_children.call(null,[cljs.core.str(start.getFullYear()),cljs.core.str("/"),cljs.core.str(((1) + start.getMonth())),cljs.core.str("/"),cljs.core.str(start.getDate())].join('')))),om.util.force_children.call(null,((!((end == null)))?React.DOM.div(null,om.util.force_children.call(null,[cljs.core.str(end.getFullYear()),cljs.core.str("/"),cljs.core.str(((1) + end.getMonth())),cljs.core.str("/"),cljs.core.str(end.getDate())].join(''))):null)),om.util.force_children.call(null,om_tsheets.jobcode.jobcode_view.call(null,jobcode)),om.util.force_children.call(null,React.DOM.p(null,om.util.force_children.call(null,notes))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_35089;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_35088;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_35087;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_35086;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_35085;
}});})(x35084_35100))
;


om_tsheets.timesheet.Timesheet.prototype.constructor = om_tsheets.timesheet.Timesheet;

om_tsheets.timesheet.Timesheet.prototype.constructor.displayName = "om-tsheets.timesheet/Timesheet";

om_tsheets.timesheet.Timesheet.prototype.om$isComponent = true;

var x35092_35101 = om_tsheets.timesheet.Timesheet;
x35092_35101.om$next$Ident$ = true;

x35092_35101.om$next$Ident$ident$arity$2 = ((function (x35092_35101){
return (function (this$,p__35093){
var map__35094 = p__35093;
var map__35094__$1 = ((((!((map__35094 == null)))?((((map__35094.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35094.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35094):map__35094);
var props = map__35094__$1;
var id = cljs.core.get.call(null,map__35094__$1,new cljs.core.Keyword("timesheet","id","timesheet/id",-1493403774));
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("timesheet","by-id","timesheet/by-id",-2057892815),id], null);
});})(x35092_35101))
;

x35092_35101.om$next$IQuery$ = true;

x35092_35101.om$next$IQuery$query$arity$1 = ((function (x35092_35101){
return (function (this$){
var this$__$1 = this;
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("timesheet","id","timesheet/id",-1493403774)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("timesheet","clocked-in","timesheet/clocked-in",-1991812801)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("timesheet","start","timesheet/start",-300956771)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("timesheet","end","timesheet/end",-222813232)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("timesheet","notes","timesheet/notes",-993216837)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("timesheet","jobcode","timesheet/jobcode",89283979)),cljs.core._conj.call(null,cljs.core.List.EMPTY,om.next.get_query.call(null,om_tsheets.jobcode.Jobcode)))))))))));
});})(x35092_35101))
;


var x35096_35102 = om_tsheets.timesheet.Timesheet.prototype;
x35096_35102.om$next$Ident$ = true;

x35096_35102.om$next$Ident$ident$arity$2 = ((function (x35096_35102){
return (function (this$,p__35097){
var map__35098 = p__35097;
var map__35098__$1 = ((((!((map__35098 == null)))?((((map__35098.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35098.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35098):map__35098);
var props = map__35098__$1;
var id = cljs.core.get.call(null,map__35098__$1,new cljs.core.Keyword("timesheet","id","timesheet/id",-1493403774));
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("timesheet","by-id","timesheet/by-id",-2057892815),id], null);
});})(x35096_35102))
;

x35096_35102.om$next$IQuery$ = true;

x35096_35102.om$next$IQuery$query$arity$1 = ((function (x35096_35102){
return (function (this$){
var this$__$1 = this;
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("timesheet","id","timesheet/id",-1493403774)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("timesheet","clocked-in","timesheet/clocked-in",-1991812801)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("timesheet","start","timesheet/start",-300956771)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("timesheet","end","timesheet/end",-222813232)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("timesheet","notes","timesheet/notes",-993216837)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("timesheet","jobcode","timesheet/jobcode",89283979)),cljs.core._conj.call(null,cljs.core.List.EMPTY,om.next.get_query.call(null,om_tsheets.jobcode.Jobcode)))))))))));
});})(x35096_35102))
;


om_tsheets.timesheet.Timesheet.cljs$lang$type = true;

om_tsheets.timesheet.Timesheet.cljs$lang$ctorStr = "om-tsheets.timesheet/Timesheet";

om_tsheets.timesheet.Timesheet.cljs$lang$ctorPrWriter = (function (this__19007__auto__,writer__19008__auto__,opt__19009__auto__){
return cljs.core._write.call(null,writer__19008__auto__,"om-tsheets.timesheet/Timesheet");
});
om_tsheets.timesheet.timesheet_view = om.next.factory.call(null,om_tsheets.timesheet.Timesheet,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword("timesheet","id","timesheet/id",-1493403774)], null));
om_tsheets.timesheet.change_notes = (function om_tsheets$timesheet$change_notes(c,e){
var val = e.target.value;
return om.next.update_state_BANG_.call(null,c,cljs.core.assoc,new cljs.core.Keyword("timesheet","notes","timesheet/notes",-993216837),val);
});
om_tsheets.timesheet.change_date = (function om_tsheets$timesheet$change_date(c,ref,e){
var val = e.target.value;
return om.next.update_state_BANG_.call(null,c,cljs.core.assoc,new cljs.core.Keyword("timesheet","notes","timesheet/notes",-993216837),val);
});
om_tsheets.timesheet.set_notes = (function om_tsheets$timesheet$set_notes(c,notes){
return om_tsheets.timesheet.add_edit_timesheet.call(null,c,cljs.core.assoc.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("timesheet","notes","timesheet/notes",-993216837),notes));
});
om_tsheets.timesheet.update_timecard = (function om_tsheets$timesheet$update_timecard(c,timesheet){
var temp__4423__auto__ = new cljs.core.Keyword("timesheet","id","timesheet/id",-1493403774).cljs$core$IFn$_invoke$arity$1(timesheet);
if(cljs.core.truth_(temp__4423__auto__)){
var id = temp__4423__auto__;
return om.next.transact_BANG_.call(null,c,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("timesheet","update","timesheet/update",-1654223807,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"timesheet","timesheet",-198269298)),cljs.core._conj.call(null,cljs.core.List.EMPTY,timesheet),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"id","id",-1388402092)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("timesheet","by-id","timesheet/by-id",-2057892815)),cljs.core._conj.call(null,cljs.core.List.EMPTY,id))))))))))))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("timesheet","list","timesheet/list",710553005)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("timesheet","timecard","timesheet/timecard",1818482514)))))));
} else {
return null;
}
});
om_tsheets.timesheet.clock_out = (function om_tsheets$timesheet$clock_out(c,id){
return om.next.transact_BANG_.call(null,c,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("timecard","clock-out","timecard/clock-out",1759782042,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("timesheet","id","timesheet/id",-1493403774)),cljs.core._conj.call(null,cljs.core.List.EMPTY,id)))))))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("timesheet","list","timesheet/list",710553005)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("timesheet","timecard","timesheet/timecard",1818482514)))))));
});
om_tsheets.timesheet.clock_in = (function om_tsheets$timesheet$clock_in(c,id){
return om.next.transact_BANG_.call(null,c,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("timecard","clock-in","timecard/clock-in",1797562068,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("jobcode","id","jobcode/id",269276970)),cljs.core._conj.call(null,cljs.core.List.EMPTY,id)))))))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("timesheet","list","timesheet/list",710553005)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("timesheet","timecard","timesheet/timecard",1818482514)))))));
});
om_tsheets.timesheet.jobcode_item = (function om_tsheets$timesheet$jobcode_item(c,jobcode){
var temp__4423__auto__ = new cljs.core.Keyword("jobcode","id","jobcode/id",269276970).cljs$core$IFn$_invoke$arity$1(jobcode);
if(cljs.core.truth_(temp__4423__auto__)){
var id = temp__4423__auto__;
var temp__4423__auto____$1 = new cljs.core.Keyword("jobcode","name","jobcode/name",1129739111).cljs$core$IFn$_invoke$arity$1(jobcode);
if(cljs.core.truth_(temp__4423__auto____$1)){
var name = temp__4423__auto____$1;
return React.DOM.button({"onClick": ((function (name,temp__4423__auto____$1,id,temp__4423__auto__){
return (function (){
return om_tsheets.timesheet.clock_in.call(null,c,id);
});})(name,temp__4423__auto____$1,id,temp__4423__auto__))
, "key": id},om.util.force_children.call(null,name));
} else {
return null;
}
} else {
return null;
}
});
/**
 * @constructor
 */
om_tsheets.timesheet.ClockIn = (function om_tsheets$timesheet$ClockIn(){
var this__19005__auto__ = this;
React.Component.apply(this__19005__auto__,arguments);

if(!((this__19005__auto__.initLocalState == null))){
this__19005__auto__.state = this__19005__auto__.initLocalState();
} else {
this__19005__auto__.state = {};
}

return this__19005__auto__;
});

om_tsheets.timesheet.ClockIn.prototype = goog.object.clone(React.Component.prototype);

var x35108_35118 = om_tsheets.timesheet.ClockIn.prototype;
x35108_35118.componentWillUpdate = ((function (x35108_35118){
return (function (next_props__18946__auto__,next_state__18947__auto__){
var this__18945__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__18945__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__18945__auto__);
});})(x35108_35118))
;

x35108_35118.shouldComponentUpdate = ((function (x35108_35118){
return (function (next_props__18946__auto__,next_state__18947__auto__){
var this__18945__auto__ = this;
var or__16785__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__18945__auto__),goog.object.get(next_props__18946__auto__,"omcljs$value"));
if(or__16785__auto__){
return or__16785__auto__;
} else {
var and__16773__auto__ = this__18945__auto__.state;
if(cljs.core.truth_(and__16773__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__18945__auto__.state,"omcljs$state"),goog.object.get(next_state__18947__auto__,"omcljs$state"));
} else {
return and__16773__auto__;
}
}
});})(x35108_35118))
;

x35108_35118.componentWillUnmount = ((function (x35108_35118){
return (function (){
var this__18945__auto__ = this;
var r__18951__auto__ = om.next.get_reconciler.call(null,this__18945__auto__);
var cfg__18952__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__18951__auto__);
var st__18953__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__18952__auto__);
var indexer__18950__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__18952__auto__);
if((st__18953__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__18953__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__18945__auto__);
}

if((indexer__18950__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__18950__auto__,this__18945__auto__);
}
});})(x35108_35118))
;

x35108_35118.componentDidUpdate = ((function (x35108_35118){
return (function (prev_props__18948__auto__,prev_state__18949__auto__){
var this__18945__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__18945__auto__);
});})(x35108_35118))
;

x35108_35118.isMounted = ((function (x35108_35118){
return (function (){
var this__18945__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__18945__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x35108_35118))
;

x35108_35118.componentWillMount = ((function (x35108_35118){
return (function (){
var this__18945__auto__ = this;
var indexer__18950__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__18945__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__18950__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__18950__auto__,this__18945__auto__);
}
});})(x35108_35118))
;

x35108_35118.render = ((function (x35108_35118){
return (function (){
var this__18944__auto__ = this;
var this$ = this__18944__auto__;
var _STAR_reconciler_STAR_35109 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_35110 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_35111 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_35112 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_35113 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__18944__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__18944__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__18944__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__18944__auto__);

om.next._STAR_parent_STAR_ = this__18944__auto__;

try{var map__35114 = om.next.props.call(null,this$);
var map__35114__$1 = ((((!((map__35114 == null)))?((((map__35114.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35114.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35114):map__35114);
var component = cljs.core.get.call(null,map__35114__$1,new cljs.core.Keyword("parent","component","parent/component",428516584));
var list = cljs.core.get.call(null,map__35114__$1,new cljs.core.Keyword("jobcode","list","jobcode/list",-2079830779));
return React.DOM.div(null,om.util.force_children.call(null,React.DOM.p(null,om.util.force_children.call(null,"Jobcodes"))),om.util.force_children.call(null,cljs.core.map.call(null,((function (map__35114,map__35114__$1,component,list,_STAR_reconciler_STAR_35109,_STAR_depth_STAR_35110,_STAR_shared_STAR_35111,_STAR_instrument_STAR_35112,_STAR_parent_STAR_35113,this$,this__18944__auto__,x35108_35118){
return (function (p1__35103_SHARP_){
return om_tsheets.timesheet.jobcode_item.call(null,component,p1__35103_SHARP_);
});})(map__35114,map__35114__$1,component,list,_STAR_reconciler_STAR_35109,_STAR_depth_STAR_35110,_STAR_shared_STAR_35111,_STAR_instrument_STAR_35112,_STAR_parent_STAR_35113,this$,this__18944__auto__,x35108_35118))
,list)));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_35113;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_35112;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_35111;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_35110;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_35109;
}});})(x35108_35118))
;


om_tsheets.timesheet.ClockIn.prototype.constructor = om_tsheets.timesheet.ClockIn;

om_tsheets.timesheet.ClockIn.prototype.constructor.displayName = "om-tsheets.timesheet/ClockIn";

om_tsheets.timesheet.ClockIn.prototype.om$isComponent = true;

var x35116_35119 = om_tsheets.timesheet.ClockIn;


var x35117_35120 = om_tsheets.timesheet.ClockIn.prototype;


om_tsheets.timesheet.ClockIn.cljs$lang$type = true;

om_tsheets.timesheet.ClockIn.cljs$lang$ctorStr = "om-tsheets.timesheet/ClockIn";

om_tsheets.timesheet.ClockIn.cljs$lang$ctorPrWriter = (function (this__19007__auto__,writer__19008__auto__,opt__19009__auto__){
return cljs.core._write.call(null,writer__19008__auto__,"om-tsheets.timesheet/ClockIn");
});
om_tsheets.timesheet.clock_in_view = om.next.factory.call(null,om_tsheets.timesheet.ClockIn);
/**
 * @constructor
 */
om_tsheets.timesheet.Timecard = (function om_tsheets$timesheet$Timecard(){
var this__19005__auto__ = this;
React.Component.apply(this__19005__auto__,arguments);

if(!((this__19005__auto__.initLocalState == null))){
this__19005__auto__.state = this__19005__auto__.initLocalState();
} else {
this__19005__auto__.state = {};
}

return this__19005__auto__;
});

om_tsheets.timesheet.Timecard.prototype = goog.object.clone(React.Component.prototype);

var x35126_35140 = om_tsheets.timesheet.Timecard.prototype;
x35126_35140.componentWillUpdate = ((function (x35126_35140){
return (function (next_props__18946__auto__,next_state__18947__auto__){
var this__18945__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__18945__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__18945__auto__);
});})(x35126_35140))
;

x35126_35140.shouldComponentUpdate = ((function (x35126_35140){
return (function (next_props__18946__auto__,next_state__18947__auto__){
var this__18945__auto__ = this;
var or__16785__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__18945__auto__),goog.object.get(next_props__18946__auto__,"omcljs$value"));
if(or__16785__auto__){
return or__16785__auto__;
} else {
var and__16773__auto__ = this__18945__auto__.state;
if(cljs.core.truth_(and__16773__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__18945__auto__.state,"omcljs$state"),goog.object.get(next_state__18947__auto__,"omcljs$state"));
} else {
return and__16773__auto__;
}
}
});})(x35126_35140))
;

x35126_35140.componentWillUnmount = ((function (x35126_35140){
return (function (){
var this__18945__auto__ = this;
var r__18951__auto__ = om.next.get_reconciler.call(null,this__18945__auto__);
var cfg__18952__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__18951__auto__);
var st__18953__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__18952__auto__);
var indexer__18950__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__18952__auto__);
if((st__18953__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__18953__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__18945__auto__);
}

if((indexer__18950__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__18950__auto__,this__18945__auto__);
}
});})(x35126_35140))
;

x35126_35140.componentDidUpdate = ((function (x35126_35140){
return (function (prev_props__18948__auto__,prev_state__18949__auto__){
var this__18945__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__18945__auto__);
});})(x35126_35140))
;

x35126_35140.isMounted = ((function (x35126_35140){
return (function (){
var this__18945__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__18945__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x35126_35140))
;

x35126_35140.componentWillMount = ((function (x35126_35140){
return (function (){
var this__18945__auto__ = this;
var indexer__18950__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__18945__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__18950__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__18950__auto__,this__18945__auto__);
}
});})(x35126_35140))
;

x35126_35140.componentDidMount = ((function (x35126_35140){
return (function (){
var this$ = this;
var map__35127 = om.next.props.call(null,this$);
var map__35127__$1 = ((((!((map__35127 == null)))?((((map__35127.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35127.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35127):map__35127);
var notes = cljs.core.get.call(null,map__35127__$1,new cljs.core.Keyword("timesheet","notes","timesheet/notes",-993216837));
return om.next.set_state_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("timesheet","notes","timesheet/notes",-993216837),notes], null));
});})(x35126_35140))
;

x35126_35140.componentWillReceiveProps = ((function (x35126_35140){
return (function (next_props__18929__auto__){
var this__18928__auto__ = this;
var this$ = this__18928__auto__;
var next_props = om.next._next_props.call(null,next_props__18929__auto__,this__18928__auto__);
var map__35129 = next_props;
var map__35129__$1 = ((((!((map__35129 == null)))?((((map__35129.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35129.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35129):map__35129);
var notes = cljs.core.get.call(null,map__35129__$1,new cljs.core.Keyword("timesheet","notes","timesheet/notes",-993216837));
return om.next.set_state_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("timesheet","notes","timesheet/notes",-993216837),notes], null));
});})(x35126_35140))
;

x35126_35140.render = ((function (x35126_35140){
return (function (){
var this__18944__auto__ = this;
var this$ = this__18944__auto__;
var _STAR_reconciler_STAR_35131 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_35132 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_35133 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_35134 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_35135 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__18944__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__18944__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__18944__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__18944__auto__);

om.next._STAR_parent_STAR_ = this__18944__auto__;

try{var map__35136 = om.next.props.call(null,this$);
var map__35136__$1 = ((((!((map__35136 == null)))?((((map__35136.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35136.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35136):map__35136);
var id = cljs.core.get.call(null,map__35136__$1,new cljs.core.Keyword("timesheet","id","timesheet/id",-1493403774));
var clocked_in = cljs.core.get.call(null,map__35136__$1,new cljs.core.Keyword("timesheet","clocked-in","timesheet/clocked-in",-1991812801));
var start = cljs.core.get.call(null,map__35136__$1,new cljs.core.Keyword("timesheet","start","timesheet/start",-300956771));
var end = cljs.core.get.call(null,map__35136__$1,new cljs.core.Keyword("timesheet","end","timesheet/end",-222813232));
var jobcode = cljs.core.get.call(null,map__35136__$1,new cljs.core.Keyword("timesheet","jobcode","timesheet/jobcode",89283979));
var notes = cljs.core.get.call(null,map__35136__$1,new cljs.core.Keyword("timesheet","notes","timesheet/notes",-993216837));
var list = cljs.core.get.call(null,map__35136__$1,new cljs.core.Keyword("jobcode","list","jobcode/list",-2079830779));
return React.DOM.div(null,om.util.force_children.call(null,React.DOM.p(null,om.util.force_children.call(null,"Timecard"))),om.util.force_children.call(null,((cljs.core._EQ_.call(null,true,clocked_in))?React.DOM.div(null,om.util.force_children.call(null,React.DOM.button({"onClick": ((function (map__35136,map__35136__$1,id,clocked_in,start,end,jobcode,notes,list,_STAR_reconciler_STAR_35131,_STAR_depth_STAR_35132,_STAR_shared_STAR_35133,_STAR_instrument_STAR_35134,_STAR_parent_STAR_35135,this$,this__18944__auto__,x35126_35140){
return (function (){
return om_tsheets.timesheet.clock_out.call(null,this$,id);
});})(map__35136,map__35136__$1,id,clocked_in,start,end,jobcode,notes,list,_STAR_reconciler_STAR_35131,_STAR_depth_STAR_35132,_STAR_shared_STAR_35133,_STAR_instrument_STAR_35134,_STAR_parent_STAR_35135,this$,this__18944__auto__,x35126_35140))
},om.util.force_children.call(null,"Clock Out"))),om.util.force_children.call(null,React.DOM.div({"className": "edit-notes-container"},om.util.force_children.call(null,React.DOM.label(null,om.util.force_children.call(null,"Notes: "))),om.util.force_children.call(null,om.dom.input.call(null,{"type": "text", "onChange": ((function (map__35136,map__35136__$1,id,clocked_in,start,end,jobcode,notes,list,_STAR_reconciler_STAR_35131,_STAR_depth_STAR_35132,_STAR_shared_STAR_35133,_STAR_instrument_STAR_35134,_STAR_parent_STAR_35135,this$,this__18944__auto__,x35126_35140){
return (function (p1__35121_SHARP_){
return om_tsheets.timesheet.change_notes.call(null,this$,p1__35121_SHARP_);
});})(map__35136,map__35136__$1,id,clocked_in,start,end,jobcode,notes,list,_STAR_reconciler_STAR_35131,_STAR_depth_STAR_35132,_STAR_shared_STAR_35133,_STAR_instrument_STAR_35134,_STAR_parent_STAR_35135,this$,this__18944__auto__,x35126_35140))
, "onBlur": ((function (map__35136,map__35136__$1,id,clocked_in,start,end,jobcode,notes,list,_STAR_reconciler_STAR_35131,_STAR_depth_STAR_35132,_STAR_shared_STAR_35133,_STAR_instrument_STAR_35134,_STAR_parent_STAR_35135,this$,this__18944__auto__,x35126_35140){
return (function (){
return om_tsheets.timesheet.update_timecard.call(null,this$,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("timesheet","id","timesheet/id",-1493403774),id,new cljs.core.Keyword("timesheet","notes","timesheet/notes",-993216837),om.next.get_state.call(null,this$,new cljs.core.Keyword("timesheet","notes","timesheet/notes",-993216837))], null));
});})(map__35136,map__35136__$1,id,clocked_in,start,end,jobcode,notes,list,_STAR_reconciler_STAR_35131,_STAR_depth_STAR_35132,_STAR_shared_STAR_35133,_STAR_instrument_STAR_35134,_STAR_parent_STAR_35135,this$,this__18944__auto__,x35126_35140))
, "value": om.next.get_state.call(null,this$,new cljs.core.Keyword("timesheet","notes","timesheet/notes",-993216837))}))))):null)),om.util.force_children.call(null,om_tsheets.timesheet.clock_in_view.call(null,cljs.core.assoc.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("parent","component","parent/component",428516584),this$,new cljs.core.Keyword("jobcode","list","jobcode/list",-2079830779),list))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_35135;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_35134;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_35133;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_35132;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_35131;
}});})(x35126_35140))
;


om_tsheets.timesheet.Timecard.prototype.constructor = om_tsheets.timesheet.Timecard;

om_tsheets.timesheet.Timecard.prototype.constructor.displayName = "om-tsheets.timesheet/Timecard";

om_tsheets.timesheet.Timecard.prototype.om$isComponent = true;

var x35138_35141 = om_tsheets.timesheet.Timecard;
x35138_35141.om$next$IQuery$ = true;

x35138_35141.om$next$IQuery$query$arity$1 = ((function (x35138_35141){
return (function (this$){
var this$__$1 = this;
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("timesheet","id","timesheet/id",-1493403774)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("timesheet","clocked-in","timesheet/clocked-in",-1991812801)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("timesheet","start","timesheet/start",-300956771)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("timesheet","end","timesheet/end",-222813232)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("timesheet","notes","timesheet/notes",-993216837)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("timesheet","jobcode","timesheet/jobcode",89283979)),cljs.core._conj.call(null,cljs.core.List.EMPTY,om.next.get_query.call(null,om_tsheets.jobcode.Jobcode))))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("jobcode","list","jobcode/list",-2079830779)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("jobcode","name","jobcode/name",1129739111)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("jobcode","id","jobcode/id",269276970))))))))))))))));
});})(x35138_35141))
;


var x35139_35142 = om_tsheets.timesheet.Timecard.prototype;
x35139_35142.om$next$IQuery$ = true;

x35139_35142.om$next$IQuery$query$arity$1 = ((function (x35139_35142){
return (function (this$){
var this$__$1 = this;
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("timesheet","id","timesheet/id",-1493403774)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("timesheet","clocked-in","timesheet/clocked-in",-1991812801)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("timesheet","start","timesheet/start",-300956771)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("timesheet","end","timesheet/end",-222813232)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("timesheet","notes","timesheet/notes",-993216837)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("timesheet","jobcode","timesheet/jobcode",89283979)),cljs.core._conj.call(null,cljs.core.List.EMPTY,om.next.get_query.call(null,om_tsheets.jobcode.Jobcode))))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("jobcode","list","jobcode/list",-2079830779)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("jobcode","name","jobcode/name",1129739111)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("jobcode","id","jobcode/id",269276970))))))))))))))));
});})(x35139_35142))
;


om_tsheets.timesheet.Timecard.cljs$lang$type = true;

om_tsheets.timesheet.Timecard.cljs$lang$ctorStr = "om-tsheets.timesheet/Timecard";

om_tsheets.timesheet.Timecard.cljs$lang$ctorPrWriter = (function (this__19007__auto__,writer__19008__auto__,opt__19009__auto__){
return cljs.core._write.call(null,writer__19008__auto__,"om-tsheets.timesheet/Timecard");
});
om_tsheets.timesheet.timecard_view = om.next.factory.call(null,om_tsheets.timesheet.Timecard);
/**
 * @constructor
 */
om_tsheets.timesheet.TimesheetEdit = (function om_tsheets$timesheet$TimesheetEdit(){
var this__19005__auto__ = this;
React.Component.apply(this__19005__auto__,arguments);

if(!((this__19005__auto__.initLocalState == null))){
this__19005__auto__.state = this__19005__auto__.initLocalState();
} else {
this__19005__auto__.state = {};
}

return this__19005__auto__;
});

om_tsheets.timesheet.TimesheetEdit.prototype = goog.object.clone(React.Component.prototype);

var x35149_35161 = om_tsheets.timesheet.TimesheetEdit.prototype;
x35149_35161.componentWillUpdate = ((function (x35149_35161){
return (function (next_props__18946__auto__,next_state__18947__auto__){
var this__18945__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__18945__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__18945__auto__);
});})(x35149_35161))
;

x35149_35161.shouldComponentUpdate = ((function (x35149_35161){
return (function (next_props__18946__auto__,next_state__18947__auto__){
var this__18945__auto__ = this;
var or__16785__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__18945__auto__),goog.object.get(next_props__18946__auto__,"omcljs$value"));
if(or__16785__auto__){
return or__16785__auto__;
} else {
var and__16773__auto__ = this__18945__auto__.state;
if(cljs.core.truth_(and__16773__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__18945__auto__.state,"omcljs$state"),goog.object.get(next_state__18947__auto__,"omcljs$state"));
} else {
return and__16773__auto__;
}
}
});})(x35149_35161))
;

x35149_35161.componentWillUnmount = ((function (x35149_35161){
return (function (){
var this__18945__auto__ = this;
var r__18951__auto__ = om.next.get_reconciler.call(null,this__18945__auto__);
var cfg__18952__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__18951__auto__);
var st__18953__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__18952__auto__);
var indexer__18950__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__18952__auto__);
if((st__18953__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__18953__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__18945__auto__);
}

if((indexer__18950__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__18950__auto__,this__18945__auto__);
}
});})(x35149_35161))
;

x35149_35161.componentDidUpdate = ((function (x35149_35161){
return (function (prev_props__18948__auto__,prev_state__18949__auto__){
var this__18945__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__18945__auto__);
});})(x35149_35161))
;

x35149_35161.isMounted = ((function (x35149_35161){
return (function (){
var this__18945__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__18945__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x35149_35161))
;

x35149_35161.componentWillMount = ((function (x35149_35161){
return (function (){
var this__18945__auto__ = this;
var indexer__18950__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__18945__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__18950__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__18950__auto__,this__18945__auto__);
}
});})(x35149_35161))
;

x35149_35161.componentDidMount = ((function (x35149_35161){
return (function (props){
var this$ = this;
var map__35150 = om.next.props.call(null,this$);
var map__35150__$1 = ((((!((map__35150 == null)))?((((map__35150.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35150.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35150):map__35150);
var clocked_in = cljs.core.get.call(null,map__35150__$1,new cljs.core.Keyword("timesheet","clocked-in","timesheet/clocked-in",-1991812801));
var start = cljs.core.get.call(null,map__35150__$1,new cljs.core.Keyword("timesheet","start","timesheet/start",-300956771));
var end = cljs.core.get.call(null,map__35150__$1,new cljs.core.Keyword("timesheet","end","timesheet/end",-222813232));
var jobcode = cljs.core.get.call(null,map__35150__$1,new cljs.core.Keyword("timesheet","jobcode","timesheet/jobcode",89283979));
var notes = cljs.core.get.call(null,map__35150__$1,new cljs.core.Keyword("timesheet","notes","timesheet/notes",-993216837));
return om.next.set_state_BANG_.call(null,this$,om.next.props.call(null,this$));
});})(x35149_35161))
;

x35149_35161.render = ((function (x35149_35161){
return (function (){
var this__18944__auto__ = this;
var this$ = this__18944__auto__;
var _STAR_reconciler_STAR_35152 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_35153 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_35154 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_35155 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_35156 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__18944__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__18944__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__18944__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__18944__auto__);

om.next._STAR_parent_STAR_ = this__18944__auto__;

try{var map__35157 = om.next.props.call(null,this$);
var map__35157__$1 = ((((!((map__35157 == null)))?((((map__35157.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35157.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35157):map__35157);
var clocked_in = cljs.core.get.call(null,map__35157__$1,new cljs.core.Keyword("timesheet","clocked-in","timesheet/clocked-in",-1991812801));
var start = cljs.core.get.call(null,map__35157__$1,new cljs.core.Keyword("timesheet","start","timesheet/start",-300956771));
var end = cljs.core.get.call(null,map__35157__$1,new cljs.core.Keyword("timesheet","end","timesheet/end",-222813232));
var jobcode = cljs.core.get.call(null,map__35157__$1,new cljs.core.Keyword("timesheet","jobcode","timesheet/jobcode",89283979));
var notes = cljs.core.get.call(null,map__35157__$1,new cljs.core.Keyword("timesheet","notes","timesheet/notes",-993216837));
cljs.core.println.call(null,cljs.core.type.call(null,start));

return React.DOM.div(null,om.util.force_children.call(null,React.DOM.div({"className": "edit-dates-container"},om.util.force_children.call(null,React.DOM.div(null,om.util.force_children.call(null,React.DOM.label(null,om.util.force_children.call(null,"Start"))),om.util.force_children.call(null,om.dom.input.call(null,{"type": "date", "value": om.next.get_state.call(null,this$,new cljs.core.Keyword("timesheet","start","timesheet/start",-300956771)), "onChange": ((function (map__35157,map__35157__$1,clocked_in,start,end,jobcode,notes,_STAR_reconciler_STAR_35152,_STAR_depth_STAR_35153,_STAR_shared_STAR_35154,_STAR_instrument_STAR_35155,_STAR_parent_STAR_35156,this$,this__18944__auto__,x35149_35161){
return (function (p1__35143_SHARP_){
return om_tsheets.timesheet.change_date.call(null,this$,new cljs.core.Keyword("timesheet","start","timesheet/start",-300956771),p1__35143_SHARP_);
});})(map__35157,map__35157__$1,clocked_in,start,end,jobcode,notes,_STAR_reconciler_STAR_35152,_STAR_depth_STAR_35153,_STAR_shared_STAR_35154,_STAR_instrument_STAR_35155,_STAR_parent_STAR_35156,this$,this__18944__auto__,x35149_35161))
})))),om.util.force_children.call(null,React.DOM.div(null,om.util.force_children.call(null,React.DOM.label(null,om.util.force_children.call(null,"End"))),om.util.force_children.call(null,om.dom.input.call(null,{"type": "date", "value": om.next.get_state.call(null,this$,new cljs.core.Keyword("timesheet","end","timesheet/end",-222813232))})))))),om.util.force_children.call(null,React.DOM.div({"className": "edit-notes-container"},om.util.force_children.call(null,React.DOM.label(null,om.util.force_children.call(null,"Notes: "))),om.util.force_children.call(null,om.dom.input.call(null,{"type": "text", "onChange": ((function (map__35157,map__35157__$1,clocked_in,start,end,jobcode,notes,_STAR_reconciler_STAR_35152,_STAR_depth_STAR_35153,_STAR_shared_STAR_35154,_STAR_instrument_STAR_35155,_STAR_parent_STAR_35156,this$,this__18944__auto__,x35149_35161){
return (function (p1__35144_SHARP_){
return om_tsheets.timesheet.change_notes.call(null,this$,p1__35144_SHARP_);
});})(map__35157,map__35157__$1,clocked_in,start,end,jobcode,notes,_STAR_reconciler_STAR_35152,_STAR_depth_STAR_35153,_STAR_shared_STAR_35154,_STAR_instrument_STAR_35155,_STAR_parent_STAR_35156,this$,this__18944__auto__,x35149_35161))
, "onBlur": ((function (map__35157,map__35157__$1,clocked_in,start,end,jobcode,notes,_STAR_reconciler_STAR_35152,_STAR_depth_STAR_35153,_STAR_shared_STAR_35154,_STAR_instrument_STAR_35155,_STAR_parent_STAR_35156,this$,this__18944__auto__,x35149_35161){
return (function (){
return om_tsheets.timesheet.set_notes.call(null,this$,om.next.get_state.call(null,this$,new cljs.core.Keyword("timesheet","notes","timesheet/notes",-993216837)));
});})(map__35157,map__35157__$1,clocked_in,start,end,jobcode,notes,_STAR_reconciler_STAR_35152,_STAR_depth_STAR_35153,_STAR_shared_STAR_35154,_STAR_instrument_STAR_35155,_STAR_parent_STAR_35156,this$,this__18944__auto__,x35149_35161))
, "value": om.next.get_state.call(null,this$,new cljs.core.Keyword("timesheet","notes","timesheet/notes",-993216837))})))),om.util.force_children.call(null,React.DOM.button({"onClick": ((function (map__35157,map__35157__$1,clocked_in,start,end,jobcode,notes,_STAR_reconciler_STAR_35152,_STAR_depth_STAR_35153,_STAR_shared_STAR_35154,_STAR_instrument_STAR_35155,_STAR_parent_STAR_35156,this$,this__18944__auto__,x35149_35161){
return (function (){
return om_tsheets.timesheet.submit_edit_timesheet.call(null,this$);
});})(map__35157,map__35157__$1,clocked_in,start,end,jobcode,notes,_STAR_reconciler_STAR_35152,_STAR_depth_STAR_35153,_STAR_shared_STAR_35154,_STAR_instrument_STAR_35155,_STAR_parent_STAR_35156,this$,this__18944__auto__,x35149_35161))
},om.util.force_children.call(null,"Add"))),om.util.force_children.call(null,React.DOM.button({"onClick": ((function (map__35157,map__35157__$1,clocked_in,start,end,jobcode,notes,_STAR_reconciler_STAR_35152,_STAR_depth_STAR_35153,_STAR_shared_STAR_35154,_STAR_instrument_STAR_35155,_STAR_parent_STAR_35156,this$,this__18944__auto__,x35149_35161){
return (function (){
return om_tsheets.timesheet.remove_edit_timesheet.call(null,this$);
});})(map__35157,map__35157__$1,clocked_in,start,end,jobcode,notes,_STAR_reconciler_STAR_35152,_STAR_depth_STAR_35153,_STAR_shared_STAR_35154,_STAR_instrument_STAR_35155,_STAR_parent_STAR_35156,this$,this__18944__auto__,x35149_35161))
},om.util.force_children.call(null,"Cancel"))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_35156;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_35155;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_35154;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_35153;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_35152;
}});})(x35149_35161))
;


om_tsheets.timesheet.TimesheetEdit.prototype.constructor = om_tsheets.timesheet.TimesheetEdit;

om_tsheets.timesheet.TimesheetEdit.prototype.constructor.displayName = "om-tsheets.timesheet/TimesheetEdit";

om_tsheets.timesheet.TimesheetEdit.prototype.om$isComponent = true;

var x35159_35162 = om_tsheets.timesheet.TimesheetEdit;
x35159_35162.om$next$IQuery$ = true;

x35159_35162.om$next$IQuery$query$arity$1 = ((function (x35159_35162){
return (function (this$){
var this$__$1 = this;
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("timesheet","id","timesheet/id",-1493403774)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("timesheet","clocked-in","timesheet/clocked-in",-1991812801)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("timesheet","start","timesheet/start",-300956771)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("timesheet","end","timesheet/end",-222813232)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("timesheet","notes","timesheet/notes",-993216837)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("timesheet","jobcode","timesheet/jobcode",89283979)),cljs.core._conj.call(null,cljs.core.List.EMPTY,om.next.get_query.call(null,om_tsheets.jobcode.Jobcode)))))))))));
});})(x35159_35162))
;


var x35160_35163 = om_tsheets.timesheet.TimesheetEdit.prototype;
x35160_35163.om$next$IQuery$ = true;

x35160_35163.om$next$IQuery$query$arity$1 = ((function (x35160_35163){
return (function (this$){
var this$__$1 = this;
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("timesheet","id","timesheet/id",-1493403774)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("timesheet","clocked-in","timesheet/clocked-in",-1991812801)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("timesheet","start","timesheet/start",-300956771)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("timesheet","end","timesheet/end",-222813232)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("timesheet","notes","timesheet/notes",-993216837)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("timesheet","jobcode","timesheet/jobcode",89283979)),cljs.core._conj.call(null,cljs.core.List.EMPTY,om.next.get_query.call(null,om_tsheets.jobcode.Jobcode)))))))))));
});})(x35160_35163))
;


om_tsheets.timesheet.TimesheetEdit.cljs$lang$type = true;

om_tsheets.timesheet.TimesheetEdit.cljs$lang$ctorStr = "om-tsheets.timesheet/TimesheetEdit";

om_tsheets.timesheet.TimesheetEdit.cljs$lang$ctorPrWriter = (function (this__19007__auto__,writer__19008__auto__,opt__19009__auto__){
return cljs.core._write.call(null,writer__19008__auto__,"om-tsheets.timesheet/TimesheetEdit");
});
om_tsheets.timesheet.timesheet_edit_view = om.next.factory.call(null,om_tsheets.timesheet.TimesheetEdit);

//# sourceMappingURL=timesheet.js.map