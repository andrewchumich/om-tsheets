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
var args47817 = [];
var len__17829__auto___47823 = arguments.length;
var i__17830__auto___47824 = (0);
while(true){
if((i__17830__auto___47824 < len__17829__auto___47823)){
args47817.push((arguments[i__17830__auto___47824]));

var G__47825 = (i__17830__auto___47824 + (1));
i__17830__auto___47824 = G__47825;
continue;
} else {
}
break;
}

var G__47819 = args47817.length;
switch (G__47819) {
case 0:
return om_tsheets.timesheet.create_timesheet.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return om_tsheets.timesheet.create_timesheet.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47817.length)].join('')));

}
});

om_tsheets.timesheet.create_timesheet.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tsheets.timesheet.create_timesheet.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

om_tsheets.timesheet.create_timesheet.cljs$core$IFn$_invoke$arity$1 = (function (p__47820){
var map__47821 = p__47820;
var map__47821__$1 = ((((!((map__47821 == null)))?((((map__47821.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47821.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47821):map__47821);
var ts = map__47821__$1;
var start = cljs.core.get.call(null,map__47821__$1,new cljs.core.Keyword("timesheet","start","timesheet/start",-300956771),(new Date()));
var end = cljs.core.get.call(null,map__47821__$1,new cljs.core.Keyword("timesheet","end","timesheet/end",-222813232),(new Date()));
var jobcode = cljs.core.get.call(null,map__47821__$1,new cljs.core.Keyword("timesheet","jobcode","timesheet/jobcode",89283979),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("jobcode","by-id","jobcode/by-id",642034585),(0)], null));
var notes = cljs.core.get.call(null,map__47821__$1,new cljs.core.Keyword("timesheet","notes","timesheet/notes",-993216837),"");
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("timesheet","start","timesheet/start",-300956771),start,new cljs.core.Keyword("timesheet","end","timesheet/end",-222813232),end,new cljs.core.Keyword("timesheet","jobcode","timesheet/jobcode",89283979),jobcode,new cljs.core.Keyword("timesheet","notes","timesheet/notes",-993216837),notes], null);
});

om_tsheets.timesheet.create_timesheet.cljs$lang$maxFixedArity = 1;
om_tsheets.timesheet.add_timesheet = (function om_tsheets$timesheet$add_timesheet(c){
var ts = om_tsheets.timesheet.create_timesheet.call(null,om.next.props.call(null,c));
return om.next.transact_BANG_.call(null,c,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("timesheet","add","timesheet/add",302710196,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"timesheet","timesheet",-198269298)),cljs.core._conj.call(null,cljs.core.List.EMPTY,ts)))))))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("timesheet","list","timesheet/list",710553005)))))));
});
om_tsheets.timesheet.add_edit_timesheet = (function om_tsheets$timesheet$add_edit_timesheet(var_args){
var args47827 = [];
var len__17829__auto___47830 = arguments.length;
var i__17830__auto___47831 = (0);
while(true){
if((i__17830__auto___47831 < len__17829__auto___47830)){
args47827.push((arguments[i__17830__auto___47831]));

var G__47832 = (i__17830__auto___47831 + (1));
i__17830__auto___47831 = G__47832;
continue;
} else {
}
break;
}

var G__47829 = args47827.length;
switch (G__47829) {
case 1:
return om_tsheets.timesheet.add_edit_timesheet.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om_tsheets.timesheet.add_edit_timesheet.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47827.length)].join('')));

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
var this__19951__auto__ = this;
React.Component.apply(this__19951__auto__,arguments);

if(!((this__19951__auto__.initLocalState == null))){
this__19951__auto__.state = this__19951__auto__.initLocalState();
} else {
this__19951__auto__.state = {};
}

return this__19951__auto__;
});

om_tsheets.timesheet.Timesheet.prototype = goog.object.clone(React.Component.prototype);

var x47838_47854 = om_tsheets.timesheet.Timesheet.prototype;
x47838_47854.componentWillUpdate = ((function (x47838_47854){
return (function (next_props__19892__auto__,next_state__19893__auto__){
var this__19891__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__19891__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__19891__auto__);
});})(x47838_47854))
;

x47838_47854.shouldComponentUpdate = ((function (x47838_47854){
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
});})(x47838_47854))
;

x47838_47854.componentWillUnmount = ((function (x47838_47854){
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
});})(x47838_47854))
;

x47838_47854.componentDidUpdate = ((function (x47838_47854){
return (function (prev_props__19894__auto__,prev_state__19895__auto__){
var this__19891__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__19891__auto__);
});})(x47838_47854))
;

x47838_47854.isMounted = ((function (x47838_47854){
return (function (){
var this__19891__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__19891__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x47838_47854))
;

x47838_47854.componentWillMount = ((function (x47838_47854){
return (function (){
var this__19891__auto__ = this;
var indexer__19896__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__19891__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__19896__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__19896__auto__,this__19891__auto__);
}
});})(x47838_47854))
;

x47838_47854.render = ((function (x47838_47854){
return (function (){
var this__19890__auto__ = this;
var this$ = this__19890__auto__;
var _STAR_reconciler_STAR_47839 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_47840 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_47841 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_47842 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_47843 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__19890__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__19890__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__19890__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__19890__auto__);

om.next._STAR_parent_STAR_ = this__19890__auto__;

try{var map__47844 = om.next.props.call(null,this$);
var map__47844__$1 = ((((!((map__47844 == null)))?((((map__47844.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47844.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47844):map__47844);
var clocked_in = cljs.core.get.call(null,map__47844__$1,new cljs.core.Keyword("timesheet","clocked-in","timesheet/clocked-in",-1991812801));
var start = cljs.core.get.call(null,map__47844__$1,new cljs.core.Keyword("timesheet","start","timesheet/start",-300956771));
var end = cljs.core.get.call(null,map__47844__$1,new cljs.core.Keyword("timesheet","end","timesheet/end",-222813232));
var jobcode = cljs.core.get.call(null,map__47844__$1,new cljs.core.Keyword("timesheet","jobcode","timesheet/jobcode",89283979));
var notes = cljs.core.get.call(null,map__47844__$1,new cljs.core.Keyword("timesheet","notes","timesheet/notes",-993216837));
cljs.core.println.call(null,clocked_in);

return React.DOM.div(null,om.util.force_children.call(null,React.DOM.div(null,om.util.force_children.call(null,"-------------------------------------"))),om.util.force_children.call(null,React.DOM.div(null,om.util.force_children.call(null,[cljs.core.str(clocked_in)].join('')))),om.util.force_children.call(null,React.DOM.div(null,om.util.force_children.call(null,[cljs.core.str(start.getFullYear()),cljs.core.str("/"),cljs.core.str(start.getMonth()),cljs.core.str("/"),cljs.core.str(start.getDate())].join('')))),om.util.force_children.call(null,React.DOM.div(null,om.util.force_children.call(null,[cljs.core.str(end.getFullYear()),cljs.core.str("/"),cljs.core.str(end.getMonth()),cljs.core.str("/"),cljs.core.str(end.getDate())].join('')))),om.util.force_children.call(null,om_tsheets.jobcode.jobcode_view.call(null,jobcode)),om.util.force_children.call(null,React.DOM.p(null,om.util.force_children.call(null,notes))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_47843;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_47842;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_47841;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_47840;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_47839;
}});})(x47838_47854))
;


om_tsheets.timesheet.Timesheet.prototype.constructor = om_tsheets.timesheet.Timesheet;

om_tsheets.timesheet.Timesheet.prototype.constructor.displayName = "om-tsheets.timesheet/Timesheet";

om_tsheets.timesheet.Timesheet.prototype.om$isComponent = true;

var x47846_47855 = om_tsheets.timesheet.Timesheet;
x47846_47855.om$next$Ident$ = true;

x47846_47855.om$next$Ident$ident$arity$2 = ((function (x47846_47855){
return (function (this$,p__47847){
var map__47848 = p__47847;
var map__47848__$1 = ((((!((map__47848 == null)))?((((map__47848.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47848.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47848):map__47848);
var props = map__47848__$1;
var id = cljs.core.get.call(null,map__47848__$1,new cljs.core.Keyword("timesheet","id","timesheet/id",-1493403774));
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("timesheet","by-id","timesheet/by-id",-2057892815),id], null);
});})(x47846_47855))
;

x47846_47855.om$next$IQuery$ = true;

x47846_47855.om$next$IQuery$query$arity$1 = ((function (x47846_47855){
return (function (this$){
var this$__$1 = this;
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("timesheet","id","timesheet/id",-1493403774)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("timesheet","clocked-in","timesheet/clocked-in",-1991812801)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("timesheet","start","timesheet/start",-300956771)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("timesheet","end","timesheet/end",-222813232)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("timesheet","notes","timesheet/notes",-993216837)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("timesheet","jobcode","timesheet/jobcode",89283979)),cljs.core._conj.call(null,cljs.core.List.EMPTY,om.next.get_query.call(null,om_tsheets.jobcode.Jobcode)))))))))));
});})(x47846_47855))
;


var x47850_47856 = om_tsheets.timesheet.Timesheet.prototype;
x47850_47856.om$next$Ident$ = true;

x47850_47856.om$next$Ident$ident$arity$2 = ((function (x47850_47856){
return (function (this$,p__47851){
var map__47852 = p__47851;
var map__47852__$1 = ((((!((map__47852 == null)))?((((map__47852.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47852.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47852):map__47852);
var props = map__47852__$1;
var id = cljs.core.get.call(null,map__47852__$1,new cljs.core.Keyword("timesheet","id","timesheet/id",-1493403774));
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("timesheet","by-id","timesheet/by-id",-2057892815),id], null);
});})(x47850_47856))
;

x47850_47856.om$next$IQuery$ = true;

x47850_47856.om$next$IQuery$query$arity$1 = ((function (x47850_47856){
return (function (this$){
var this$__$1 = this;
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("timesheet","id","timesheet/id",-1493403774)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("timesheet","clocked-in","timesheet/clocked-in",-1991812801)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("timesheet","start","timesheet/start",-300956771)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("timesheet","end","timesheet/end",-222813232)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("timesheet","notes","timesheet/notes",-993216837)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("timesheet","jobcode","timesheet/jobcode",89283979)),cljs.core._conj.call(null,cljs.core.List.EMPTY,om.next.get_query.call(null,om_tsheets.jobcode.Jobcode)))))))))));
});})(x47850_47856))
;


om_tsheets.timesheet.Timesheet.cljs$lang$type = true;

om_tsheets.timesheet.Timesheet.cljs$lang$ctorStr = "om-tsheets.timesheet/Timesheet";

om_tsheets.timesheet.Timesheet.cljs$lang$ctorPrWriter = (function (this__19953__auto__,writer__19954__auto__,opt__19955__auto__){
return cljs.core._write.call(null,writer__19954__auto__,"om-tsheets.timesheet/Timesheet");
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
om_tsheets.timesheet.set_timecard_notes = (function om_tsheets$timesheet$set_timecard_notes(c,notes){
return cljs.core.println.call(null,notes);
});
/**
 * @constructor
 */
om_tsheets.timesheet.ClockIn = (function om_tsheets$timesheet$ClockIn(){
var this__19951__auto__ = this;
React.Component.apply(this__19951__auto__,arguments);

if(!((this__19951__auto__.initLocalState == null))){
this__19951__auto__.state = this__19951__auto__.initLocalState();
} else {
this__19951__auto__.state = {};
}

return this__19951__auto__;
});

om_tsheets.timesheet.ClockIn.prototype = goog.object.clone(React.Component.prototype);

var x47861_47871 = om_tsheets.timesheet.ClockIn.prototype;
x47861_47871.componentWillUpdate = ((function (x47861_47871){
return (function (next_props__19892__auto__,next_state__19893__auto__){
var this__19891__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__19891__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__19891__auto__);
});})(x47861_47871))
;

x47861_47871.shouldComponentUpdate = ((function (x47861_47871){
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
});})(x47861_47871))
;

x47861_47871.componentWillUnmount = ((function (x47861_47871){
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
});})(x47861_47871))
;

x47861_47871.componentDidUpdate = ((function (x47861_47871){
return (function (prev_props__19894__auto__,prev_state__19895__auto__){
var this__19891__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__19891__auto__);
});})(x47861_47871))
;

x47861_47871.isMounted = ((function (x47861_47871){
return (function (){
var this__19891__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__19891__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x47861_47871))
;

x47861_47871.componentWillMount = ((function (x47861_47871){
return (function (){
var this__19891__auto__ = this;
var indexer__19896__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__19891__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__19896__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__19896__auto__,this__19891__auto__);
}
});})(x47861_47871))
;

x47861_47871.render = ((function (x47861_47871){
return (function (){
var this__19890__auto__ = this;
var this$ = this__19890__auto__;
var _STAR_reconciler_STAR_47862 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_47863 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_47864 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_47865 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_47866 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__19890__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__19890__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__19890__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__19890__auto__);

om.next._STAR_parent_STAR_ = this__19890__auto__;

try{var map__47867 = om.next.props.call(null,this$);
var map__47867__$1 = ((((!((map__47867 == null)))?((((map__47867.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47867.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47867):map__47867);
var list = cljs.core.get.call(null,map__47867__$1,new cljs.core.Keyword("jobcode","list","jobcode/list",-2079830779));
cljs.core.println.call(null,list);

return React.DOM.div(null,om.util.force_children.call(null,React.DOM.p(null,om.util.force_children.call(null,"Jobcodes"))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_47866;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_47865;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_47864;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_47863;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_47862;
}});})(x47861_47871))
;


om_tsheets.timesheet.ClockIn.prototype.constructor = om_tsheets.timesheet.ClockIn;

om_tsheets.timesheet.ClockIn.prototype.constructor.displayName = "om-tsheets.timesheet/ClockIn";

om_tsheets.timesheet.ClockIn.prototype.om$isComponent = true;

var x47869_47872 = om_tsheets.timesheet.ClockIn;
x47869_47872.om$next$IQueryParams$ = true;

x47869_47872.om$next$IQueryParams$params$arity$1 = ((function (x47869_47872){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("jobcode","list","jobcode/list",-2079830779),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("jobcode","name","jobcode/name",1129739111),new cljs.core.Keyword("jobcode","id","jobcode/id",269276970)], null)], null);
});})(x47869_47872))
;


var x47870_47873 = om_tsheets.timesheet.ClockIn.prototype;
x47870_47873.om$next$IQueryParams$ = true;

x47870_47873.om$next$IQueryParams$params$arity$1 = ((function (x47870_47873){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("jobcode","list","jobcode/list",-2079830779),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("jobcode","name","jobcode/name",1129739111),new cljs.core.Keyword("jobcode","id","jobcode/id",269276970)], null)], null);
});})(x47870_47873))
;


om_tsheets.timesheet.ClockIn.cljs$lang$type = true;

om_tsheets.timesheet.ClockIn.cljs$lang$ctorStr = "om-tsheets.timesheet/ClockIn";

om_tsheets.timesheet.ClockIn.cljs$lang$ctorPrWriter = (function (this__19953__auto__,writer__19954__auto__,opt__19955__auto__){
return cljs.core._write.call(null,writer__19954__auto__,"om-tsheets.timesheet/ClockIn");
});
om_tsheets.timesheet.clock_in_view = om.next.factory.call(null,om_tsheets.timesheet.ClockIn);
/**
 * @constructor
 */
om_tsheets.timesheet.Timecard = (function om_tsheets$timesheet$Timecard(){
var this__19951__auto__ = this;
React.Component.apply(this__19951__auto__,arguments);

if(!((this__19951__auto__.initLocalState == null))){
this__19951__auto__.state = this__19951__auto__.initLocalState();
} else {
this__19951__auto__.state = {};
}

return this__19951__auto__;
});

om_tsheets.timesheet.Timecard.prototype = goog.object.clone(React.Component.prototype);

var x47879_47891 = om_tsheets.timesheet.Timecard.prototype;
x47879_47891.componentWillUpdate = ((function (x47879_47891){
return (function (next_props__19892__auto__,next_state__19893__auto__){
var this__19891__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__19891__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__19891__auto__);
});})(x47879_47891))
;

x47879_47891.shouldComponentUpdate = ((function (x47879_47891){
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
});})(x47879_47891))
;

x47879_47891.componentWillUnmount = ((function (x47879_47891){
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
});})(x47879_47891))
;

x47879_47891.componentDidUpdate = ((function (x47879_47891){
return (function (prev_props__19894__auto__,prev_state__19895__auto__){
var this__19891__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__19891__auto__);
});})(x47879_47891))
;

x47879_47891.isMounted = ((function (x47879_47891){
return (function (){
var this__19891__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__19891__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x47879_47891))
;

x47879_47891.componentWillMount = ((function (x47879_47891){
return (function (){
var this__19891__auto__ = this;
var indexer__19896__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__19891__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__19896__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__19896__auto__,this__19891__auto__);
}
});})(x47879_47891))
;

x47879_47891.componentDidMount = ((function (x47879_47891){
return (function (props){
var this$ = this;
var map__47880 = om.next.props.call(null,this$);
var map__47880__$1 = ((((!((map__47880 == null)))?((((map__47880.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47880.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47880):map__47880);
var clocked_in = cljs.core.get.call(null,map__47880__$1,new cljs.core.Keyword("timesheet","clocked-in","timesheet/clocked-in",-1991812801));
var start = cljs.core.get.call(null,map__47880__$1,new cljs.core.Keyword("timesheet","start","timesheet/start",-300956771));
var end = cljs.core.get.call(null,map__47880__$1,new cljs.core.Keyword("timesheet","end","timesheet/end",-222813232));
var jobcode = cljs.core.get.call(null,map__47880__$1,new cljs.core.Keyword("timesheet","jobcode","timesheet/jobcode",89283979));
var notes = cljs.core.get.call(null,map__47880__$1,new cljs.core.Keyword("timesheet","notes","timesheet/notes",-993216837));
return om.next.set_state_BANG_.call(null,this$,om.next.props.call(null,this$));
});})(x47879_47891))
;

x47879_47891.render = ((function (x47879_47891){
return (function (){
var this__19890__auto__ = this;
var this$ = this__19890__auto__;
var _STAR_reconciler_STAR_47882 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_47883 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_47884 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_47885 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_47886 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__19890__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__19890__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__19890__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__19890__auto__);

om.next._STAR_parent_STAR_ = this__19890__auto__;

try{var map__47887 = om.next.props.call(null,this$);
var map__47887__$1 = ((((!((map__47887 == null)))?((((map__47887.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47887.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47887):map__47887);
return React.DOM.div(null,om.util.force_children.call(null,React.DOM.p(null,om.util.force_children.call(null,"Timecard"))),om.util.force_children.call(null,React.DOM.div({"className": "edit-notes-container"},om.util.force_children.call(null,React.DOM.label(null,om.util.force_children.call(null,"Notes: "))),om.util.force_children.call(null,om.dom.input.call(null,{"type": "text", "onChange": ((function (map__47887,map__47887__$1,_STAR_reconciler_STAR_47882,_STAR_depth_STAR_47883,_STAR_shared_STAR_47884,_STAR_instrument_STAR_47885,_STAR_parent_STAR_47886,this$,this__19890__auto__,x47879_47891){
return (function (p1__47874_SHARP_){
return om_tsheets.timesheet.change_notes.call(null,this$,p1__47874_SHARP_);
});})(map__47887,map__47887__$1,_STAR_reconciler_STAR_47882,_STAR_depth_STAR_47883,_STAR_shared_STAR_47884,_STAR_instrument_STAR_47885,_STAR_parent_STAR_47886,this$,this__19890__auto__,x47879_47891))
, "onBlur": ((function (map__47887,map__47887__$1,_STAR_reconciler_STAR_47882,_STAR_depth_STAR_47883,_STAR_shared_STAR_47884,_STAR_instrument_STAR_47885,_STAR_parent_STAR_47886,this$,this__19890__auto__,x47879_47891){
return (function (){
return om_tsheets.timesheet.set_timecard_notes.call(null,this$,om.next.get_state.call(null,this$,new cljs.core.Keyword("timesheet","notes","timesheet/notes",-993216837)));
});})(map__47887,map__47887__$1,_STAR_reconciler_STAR_47882,_STAR_depth_STAR_47883,_STAR_shared_STAR_47884,_STAR_instrument_STAR_47885,_STAR_parent_STAR_47886,this$,this__19890__auto__,x47879_47891))
, "value": om.next.get_state.call(null,this$,new cljs.core.Keyword("timesheet","notes","timesheet/notes",-993216837))})))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_47886;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_47885;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_47884;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_47883;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_47882;
}});})(x47879_47891))
;


om_tsheets.timesheet.Timecard.prototype.constructor = om_tsheets.timesheet.Timecard;

om_tsheets.timesheet.Timecard.prototype.constructor.displayName = "om-tsheets.timesheet/Timecard";

om_tsheets.timesheet.Timecard.prototype.om$isComponent = true;

var x47889_47892 = om_tsheets.timesheet.Timecard;
x47889_47892.om$next$IQuery$ = true;

x47889_47892.om$next$IQuery$query$arity$1 = ((function (x47889_47892){
return (function (this$){
var this$__$1 = this;
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("timesheet","id","timesheet/id",-1493403774)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("timesheet","clocked-in","timesheet/clocked-in",-1991812801)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("timesheet","start","timesheet/start",-300956771)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("timesheet","end","timesheet/end",-222813232)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("timesheet","notes","timesheet/notes",-993216837)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("timesheet","jobcode","timesheet/jobcode",89283979)),cljs.core._conj.call(null,cljs.core.List.EMPTY,om.next.get_query.call(null,om_tsheets.jobcode.Jobcode)))))))))));
});})(x47889_47892))
;


var x47890_47893 = om_tsheets.timesheet.Timecard.prototype;
x47890_47893.om$next$IQuery$ = true;

x47890_47893.om$next$IQuery$query$arity$1 = ((function (x47890_47893){
return (function (this$){
var this$__$1 = this;
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("timesheet","id","timesheet/id",-1493403774)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("timesheet","clocked-in","timesheet/clocked-in",-1991812801)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("timesheet","start","timesheet/start",-300956771)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("timesheet","end","timesheet/end",-222813232)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("timesheet","notes","timesheet/notes",-993216837)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("timesheet","jobcode","timesheet/jobcode",89283979)),cljs.core._conj.call(null,cljs.core.List.EMPTY,om.next.get_query.call(null,om_tsheets.jobcode.Jobcode)))))))))));
});})(x47890_47893))
;


om_tsheets.timesheet.Timecard.cljs$lang$type = true;

om_tsheets.timesheet.Timecard.cljs$lang$ctorStr = "om-tsheets.timesheet/Timecard";

om_tsheets.timesheet.Timecard.cljs$lang$ctorPrWriter = (function (this__19953__auto__,writer__19954__auto__,opt__19955__auto__){
return cljs.core._write.call(null,writer__19954__auto__,"om-tsheets.timesheet/Timecard");
});
om_tsheets.timesheet.timecard_view = om.next.factory.call(null,om_tsheets.timesheet.Timecard);
/**
 * @constructor
 */
om_tsheets.timesheet.TimesheetEdit = (function om_tsheets$timesheet$TimesheetEdit(){
var this__19951__auto__ = this;
React.Component.apply(this__19951__auto__,arguments);

if(!((this__19951__auto__.initLocalState == null))){
this__19951__auto__.state = this__19951__auto__.initLocalState();
} else {
this__19951__auto__.state = {};
}

return this__19951__auto__;
});

om_tsheets.timesheet.TimesheetEdit.prototype = goog.object.clone(React.Component.prototype);

var x47900_47912 = om_tsheets.timesheet.TimesheetEdit.prototype;
x47900_47912.componentWillUpdate = ((function (x47900_47912){
return (function (next_props__19892__auto__,next_state__19893__auto__){
var this__19891__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__19891__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__19891__auto__);
});})(x47900_47912))
;

x47900_47912.shouldComponentUpdate = ((function (x47900_47912){
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
});})(x47900_47912))
;

x47900_47912.componentWillUnmount = ((function (x47900_47912){
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
});})(x47900_47912))
;

x47900_47912.componentDidUpdate = ((function (x47900_47912){
return (function (prev_props__19894__auto__,prev_state__19895__auto__){
var this__19891__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__19891__auto__);
});})(x47900_47912))
;

x47900_47912.isMounted = ((function (x47900_47912){
return (function (){
var this__19891__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__19891__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x47900_47912))
;

x47900_47912.componentWillMount = ((function (x47900_47912){
return (function (){
var this__19891__auto__ = this;
var indexer__19896__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__19891__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__19896__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__19896__auto__,this__19891__auto__);
}
});})(x47900_47912))
;

x47900_47912.componentDidMount = ((function (x47900_47912){
return (function (props){
var this$ = this;
var map__47901 = om.next.props.call(null,this$);
var map__47901__$1 = ((((!((map__47901 == null)))?((((map__47901.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47901.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47901):map__47901);
var clocked_in = cljs.core.get.call(null,map__47901__$1,new cljs.core.Keyword("timesheet","clocked-in","timesheet/clocked-in",-1991812801));
var start = cljs.core.get.call(null,map__47901__$1,new cljs.core.Keyword("timesheet","start","timesheet/start",-300956771));
var end = cljs.core.get.call(null,map__47901__$1,new cljs.core.Keyword("timesheet","end","timesheet/end",-222813232));
var jobcode = cljs.core.get.call(null,map__47901__$1,new cljs.core.Keyword("timesheet","jobcode","timesheet/jobcode",89283979));
var notes = cljs.core.get.call(null,map__47901__$1,new cljs.core.Keyword("timesheet","notes","timesheet/notes",-993216837));
return om.next.set_state_BANG_.call(null,this$,om.next.props.call(null,this$));
});})(x47900_47912))
;

x47900_47912.render = ((function (x47900_47912){
return (function (){
var this__19890__auto__ = this;
var this$ = this__19890__auto__;
var _STAR_reconciler_STAR_47903 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_47904 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_47905 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_47906 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_47907 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__19890__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__19890__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__19890__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__19890__auto__);

om.next._STAR_parent_STAR_ = this__19890__auto__;

try{var map__47908 = om.next.props.call(null,this$);
var map__47908__$1 = ((((!((map__47908 == null)))?((((map__47908.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47908.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47908):map__47908);
var clocked_in = cljs.core.get.call(null,map__47908__$1,new cljs.core.Keyword("timesheet","clocked-in","timesheet/clocked-in",-1991812801));
var start = cljs.core.get.call(null,map__47908__$1,new cljs.core.Keyword("timesheet","start","timesheet/start",-300956771));
var end = cljs.core.get.call(null,map__47908__$1,new cljs.core.Keyword("timesheet","end","timesheet/end",-222813232));
var jobcode = cljs.core.get.call(null,map__47908__$1,new cljs.core.Keyword("timesheet","jobcode","timesheet/jobcode",89283979));
var notes = cljs.core.get.call(null,map__47908__$1,new cljs.core.Keyword("timesheet","notes","timesheet/notes",-993216837));
cljs.core.println.call(null,cljs.core.type.call(null,start));

return React.DOM.div(null,om.util.force_children.call(null,React.DOM.div({"className": "edit-dates-container"},om.util.force_children.call(null,React.DOM.div(null,om.util.force_children.call(null,React.DOM.label(null,om.util.force_children.call(null,"Start"))),om.util.force_children.call(null,om.dom.input.call(null,{"type": "date", "value": om.next.get_state.call(null,this$,new cljs.core.Keyword("timesheet","start","timesheet/start",-300956771)), "onChange": ((function (map__47908,map__47908__$1,clocked_in,start,end,jobcode,notes,_STAR_reconciler_STAR_47903,_STAR_depth_STAR_47904,_STAR_shared_STAR_47905,_STAR_instrument_STAR_47906,_STAR_parent_STAR_47907,this$,this__19890__auto__,x47900_47912){
return (function (p1__47894_SHARP_){
return om_tsheets.timesheet.change_date.call(null,this$,new cljs.core.Keyword("timesheet","start","timesheet/start",-300956771),p1__47894_SHARP_);
});})(map__47908,map__47908__$1,clocked_in,start,end,jobcode,notes,_STAR_reconciler_STAR_47903,_STAR_depth_STAR_47904,_STAR_shared_STAR_47905,_STAR_instrument_STAR_47906,_STAR_parent_STAR_47907,this$,this__19890__auto__,x47900_47912))
})))),om.util.force_children.call(null,React.DOM.div(null,om.util.force_children.call(null,React.DOM.label(null,om.util.force_children.call(null,"End"))),om.util.force_children.call(null,om.dom.input.call(null,{"type": "date", "value": om.next.get_state.call(null,this$,new cljs.core.Keyword("timesheet","end","timesheet/end",-222813232))})))))),om.util.force_children.call(null,React.DOM.div({"className": "edit-notes-container"},om.util.force_children.call(null,React.DOM.label(null,om.util.force_children.call(null,"Notes: "))),om.util.force_children.call(null,om.dom.input.call(null,{"type": "text", "onChange": ((function (map__47908,map__47908__$1,clocked_in,start,end,jobcode,notes,_STAR_reconciler_STAR_47903,_STAR_depth_STAR_47904,_STAR_shared_STAR_47905,_STAR_instrument_STAR_47906,_STAR_parent_STAR_47907,this$,this__19890__auto__,x47900_47912){
return (function (p1__47895_SHARP_){
return om_tsheets.timesheet.change_notes.call(null,this$,p1__47895_SHARP_);
});})(map__47908,map__47908__$1,clocked_in,start,end,jobcode,notes,_STAR_reconciler_STAR_47903,_STAR_depth_STAR_47904,_STAR_shared_STAR_47905,_STAR_instrument_STAR_47906,_STAR_parent_STAR_47907,this$,this__19890__auto__,x47900_47912))
, "onBlur": ((function (map__47908,map__47908__$1,clocked_in,start,end,jobcode,notes,_STAR_reconciler_STAR_47903,_STAR_depth_STAR_47904,_STAR_shared_STAR_47905,_STAR_instrument_STAR_47906,_STAR_parent_STAR_47907,this$,this__19890__auto__,x47900_47912){
return (function (){
return om_tsheets.timesheet.set_notes.call(null,this$,om.next.get_state.call(null,this$,new cljs.core.Keyword("timesheet","notes","timesheet/notes",-993216837)));
});})(map__47908,map__47908__$1,clocked_in,start,end,jobcode,notes,_STAR_reconciler_STAR_47903,_STAR_depth_STAR_47904,_STAR_shared_STAR_47905,_STAR_instrument_STAR_47906,_STAR_parent_STAR_47907,this$,this__19890__auto__,x47900_47912))
, "value": om.next.get_state.call(null,this$,new cljs.core.Keyword("timesheet","notes","timesheet/notes",-993216837))})))),om.util.force_children.call(null,React.DOM.button({"onClick": ((function (map__47908,map__47908__$1,clocked_in,start,end,jobcode,notes,_STAR_reconciler_STAR_47903,_STAR_depth_STAR_47904,_STAR_shared_STAR_47905,_STAR_instrument_STAR_47906,_STAR_parent_STAR_47907,this$,this__19890__auto__,x47900_47912){
return (function (){
return om_tsheets.timesheet.submit_edit_timesheet.call(null,this$);
});})(map__47908,map__47908__$1,clocked_in,start,end,jobcode,notes,_STAR_reconciler_STAR_47903,_STAR_depth_STAR_47904,_STAR_shared_STAR_47905,_STAR_instrument_STAR_47906,_STAR_parent_STAR_47907,this$,this__19890__auto__,x47900_47912))
},om.util.force_children.call(null,"Add"))),om.util.force_children.call(null,React.DOM.button({"onClick": ((function (map__47908,map__47908__$1,clocked_in,start,end,jobcode,notes,_STAR_reconciler_STAR_47903,_STAR_depth_STAR_47904,_STAR_shared_STAR_47905,_STAR_instrument_STAR_47906,_STAR_parent_STAR_47907,this$,this__19890__auto__,x47900_47912){
return (function (){
return om_tsheets.timesheet.remove_edit_timesheet.call(null,this$);
});})(map__47908,map__47908__$1,clocked_in,start,end,jobcode,notes,_STAR_reconciler_STAR_47903,_STAR_depth_STAR_47904,_STAR_shared_STAR_47905,_STAR_instrument_STAR_47906,_STAR_parent_STAR_47907,this$,this__19890__auto__,x47900_47912))
},om.util.force_children.call(null,"Cancel"))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_47907;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_47906;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_47905;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_47904;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_47903;
}});})(x47900_47912))
;


om_tsheets.timesheet.TimesheetEdit.prototype.constructor = om_tsheets.timesheet.TimesheetEdit;

om_tsheets.timesheet.TimesheetEdit.prototype.constructor.displayName = "om-tsheets.timesheet/TimesheetEdit";

om_tsheets.timesheet.TimesheetEdit.prototype.om$isComponent = true;

var x47910_47913 = om_tsheets.timesheet.TimesheetEdit;
x47910_47913.om$next$IQuery$ = true;

x47910_47913.om$next$IQuery$query$arity$1 = ((function (x47910_47913){
return (function (this$){
var this$__$1 = this;
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("timesheet","id","timesheet/id",-1493403774)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("timesheet","clocked-in","timesheet/clocked-in",-1991812801)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("timesheet","start","timesheet/start",-300956771)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("timesheet","end","timesheet/end",-222813232)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("timesheet","notes","timesheet/notes",-993216837)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("timesheet","jobcode","timesheet/jobcode",89283979)),cljs.core._conj.call(null,cljs.core.List.EMPTY,om.next.get_query.call(null,om_tsheets.jobcode.Jobcode)))))))))));
});})(x47910_47913))
;


var x47911_47914 = om_tsheets.timesheet.TimesheetEdit.prototype;
x47911_47914.om$next$IQuery$ = true;

x47911_47914.om$next$IQuery$query$arity$1 = ((function (x47911_47914){
return (function (this$){
var this$__$1 = this;
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("timesheet","id","timesheet/id",-1493403774)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("timesheet","clocked-in","timesheet/clocked-in",-1991812801)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("timesheet","start","timesheet/start",-300956771)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("timesheet","end","timesheet/end",-222813232)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("timesheet","notes","timesheet/notes",-993216837)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("timesheet","jobcode","timesheet/jobcode",89283979)),cljs.core._conj.call(null,cljs.core.List.EMPTY,om.next.get_query.call(null,om_tsheets.jobcode.Jobcode)))))))))));
});})(x47911_47914))
;


om_tsheets.timesheet.TimesheetEdit.cljs$lang$type = true;

om_tsheets.timesheet.TimesheetEdit.cljs$lang$ctorStr = "om-tsheets.timesheet/TimesheetEdit";

om_tsheets.timesheet.TimesheetEdit.cljs$lang$ctorPrWriter = (function (this__19953__auto__,writer__19954__auto__,opt__19955__auto__){
return cljs.core._write.call(null,writer__19954__auto__,"om-tsheets.timesheet/TimesheetEdit");
});
om_tsheets.timesheet.timesheet_edit_view = om.next.factory.call(null,om_tsheets.timesheet.TimesheetEdit);

//# sourceMappingURL=timesheet.js.map