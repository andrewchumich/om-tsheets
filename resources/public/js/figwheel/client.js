// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__26148 = cljs.core._EQ_;
var expr__26149 = (function (){var or__16771__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__16771__auto__)){
return or__16771__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__26148.call(null,"true",expr__26149))){
return true;
} else {
if(cljs.core.truth_(pred__26148.call(null,"false",expr__26149))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__26149)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__26151__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__26151 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26152__i = 0, G__26152__a = new Array(arguments.length -  0);
while (G__26152__i < G__26152__a.length) {G__26152__a[G__26152__i] = arguments[G__26152__i + 0]; ++G__26152__i;}
  args = new cljs.core.IndexedSeq(G__26152__a,0);
} 
return G__26151__delegate.call(this,args);};
G__26151.cljs$lang$maxFixedArity = 0;
G__26151.cljs$lang$applyTo = (function (arglist__26153){
var args = cljs.core.seq(arglist__26153);
return G__26151__delegate(args);
});
G__26151.cljs$core$IFn$_invoke$arity$variadic = G__26151__delegate;
return G__26151;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__26154){
var map__26157 = p__26154;
var map__26157__$1 = ((((!((map__26157 == null)))?((((map__26157.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26157.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26157):map__26157);
var message = cljs.core.get.call(null,map__26157__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__26157__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__16771__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16771__auto__)){
return or__16771__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__16759__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__16759__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__16759__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__20755__auto___26319 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20755__auto___26319,ch){
return (function (){
var f__20756__auto__ = (function (){var switch__20643__auto__ = ((function (c__20755__auto___26319,ch){
return (function (state_26288){
var state_val_26289 = (state_26288[(1)]);
if((state_val_26289 === (7))){
var inst_26284 = (state_26288[(2)]);
var state_26288__$1 = state_26288;
var statearr_26290_26320 = state_26288__$1;
(statearr_26290_26320[(2)] = inst_26284);

(statearr_26290_26320[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26289 === (1))){
var state_26288__$1 = state_26288;
var statearr_26291_26321 = state_26288__$1;
(statearr_26291_26321[(2)] = null);

(statearr_26291_26321[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26289 === (4))){
var inst_26241 = (state_26288[(7)]);
var inst_26241__$1 = (state_26288[(2)]);
var state_26288__$1 = (function (){var statearr_26292 = state_26288;
(statearr_26292[(7)] = inst_26241__$1);

return statearr_26292;
})();
if(cljs.core.truth_(inst_26241__$1)){
var statearr_26293_26322 = state_26288__$1;
(statearr_26293_26322[(1)] = (5));

} else {
var statearr_26294_26323 = state_26288__$1;
(statearr_26294_26323[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26289 === (15))){
var inst_26248 = (state_26288[(8)]);
var inst_26263 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_26248);
var inst_26264 = cljs.core.first.call(null,inst_26263);
var inst_26265 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_26264);
var inst_26266 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_26265)].join('');
var inst_26267 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_26266);
var state_26288__$1 = state_26288;
var statearr_26295_26324 = state_26288__$1;
(statearr_26295_26324[(2)] = inst_26267);

(statearr_26295_26324[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26289 === (13))){
var inst_26272 = (state_26288[(2)]);
var state_26288__$1 = state_26288;
var statearr_26296_26325 = state_26288__$1;
(statearr_26296_26325[(2)] = inst_26272);

(statearr_26296_26325[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26289 === (6))){
var state_26288__$1 = state_26288;
var statearr_26297_26326 = state_26288__$1;
(statearr_26297_26326[(2)] = null);

(statearr_26297_26326[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26289 === (17))){
var inst_26270 = (state_26288[(2)]);
var state_26288__$1 = state_26288;
var statearr_26298_26327 = state_26288__$1;
(statearr_26298_26327[(2)] = inst_26270);

(statearr_26298_26327[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26289 === (3))){
var inst_26286 = (state_26288[(2)]);
var state_26288__$1 = state_26288;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26288__$1,inst_26286);
} else {
if((state_val_26289 === (12))){
var inst_26247 = (state_26288[(9)]);
var inst_26261 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_26247,opts);
var state_26288__$1 = state_26288;
if(cljs.core.truth_(inst_26261)){
var statearr_26299_26328 = state_26288__$1;
(statearr_26299_26328[(1)] = (15));

} else {
var statearr_26300_26329 = state_26288__$1;
(statearr_26300_26329[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26289 === (2))){
var state_26288__$1 = state_26288;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26288__$1,(4),ch);
} else {
if((state_val_26289 === (11))){
var inst_26248 = (state_26288[(8)]);
var inst_26253 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26254 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_26248);
var inst_26255 = cljs.core.async.timeout.call(null,(1000));
var inst_26256 = [inst_26254,inst_26255];
var inst_26257 = (new cljs.core.PersistentVector(null,2,(5),inst_26253,inst_26256,null));
var state_26288__$1 = state_26288;
return cljs.core.async.ioc_alts_BANG_.call(null,state_26288__$1,(14),inst_26257);
} else {
if((state_val_26289 === (9))){
var inst_26248 = (state_26288[(8)]);
var inst_26274 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_26275 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_26248);
var inst_26276 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_26275);
var inst_26277 = [cljs.core.str("Not loading: "),cljs.core.str(inst_26276)].join('');
var inst_26278 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_26277);
var state_26288__$1 = (function (){var statearr_26301 = state_26288;
(statearr_26301[(10)] = inst_26274);

return statearr_26301;
})();
var statearr_26302_26330 = state_26288__$1;
(statearr_26302_26330[(2)] = inst_26278);

(statearr_26302_26330[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26289 === (5))){
var inst_26241 = (state_26288[(7)]);
var inst_26243 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_26244 = (new cljs.core.PersistentArrayMap(null,2,inst_26243,null));
var inst_26245 = (new cljs.core.PersistentHashSet(null,inst_26244,null));
var inst_26246 = figwheel.client.focus_msgs.call(null,inst_26245,inst_26241);
var inst_26247 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_26246);
var inst_26248 = cljs.core.first.call(null,inst_26246);
var inst_26249 = figwheel.client.autoload_QMARK_.call(null);
var state_26288__$1 = (function (){var statearr_26303 = state_26288;
(statearr_26303[(8)] = inst_26248);

(statearr_26303[(9)] = inst_26247);

return statearr_26303;
})();
if(cljs.core.truth_(inst_26249)){
var statearr_26304_26331 = state_26288__$1;
(statearr_26304_26331[(1)] = (8));

} else {
var statearr_26305_26332 = state_26288__$1;
(statearr_26305_26332[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26289 === (14))){
var inst_26259 = (state_26288[(2)]);
var state_26288__$1 = state_26288;
var statearr_26306_26333 = state_26288__$1;
(statearr_26306_26333[(2)] = inst_26259);

(statearr_26306_26333[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26289 === (16))){
var state_26288__$1 = state_26288;
var statearr_26307_26334 = state_26288__$1;
(statearr_26307_26334[(2)] = null);

(statearr_26307_26334[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26289 === (10))){
var inst_26280 = (state_26288[(2)]);
var state_26288__$1 = (function (){var statearr_26308 = state_26288;
(statearr_26308[(11)] = inst_26280);

return statearr_26308;
})();
var statearr_26309_26335 = state_26288__$1;
(statearr_26309_26335[(2)] = null);

(statearr_26309_26335[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26289 === (8))){
var inst_26247 = (state_26288[(9)]);
var inst_26251 = figwheel.client.reload_file_state_QMARK_.call(null,inst_26247,opts);
var state_26288__$1 = state_26288;
if(cljs.core.truth_(inst_26251)){
var statearr_26310_26336 = state_26288__$1;
(statearr_26310_26336[(1)] = (11));

} else {
var statearr_26311_26337 = state_26288__$1;
(statearr_26311_26337[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20755__auto___26319,ch))
;
return ((function (switch__20643__auto__,c__20755__auto___26319,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__20644__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__20644__auto____0 = (function (){
var statearr_26315 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26315[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__20644__auto__);

(statearr_26315[(1)] = (1));

return statearr_26315;
});
var figwheel$client$file_reloader_plugin_$_state_machine__20644__auto____1 = (function (state_26288){
while(true){
var ret_value__20645__auto__ = (function (){try{while(true){
var result__20646__auto__ = switch__20643__auto__.call(null,state_26288);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20646__auto__;
}
break;
}
}catch (e26316){if((e26316 instanceof Object)){
var ex__20647__auto__ = e26316;
var statearr_26317_26338 = state_26288;
(statearr_26317_26338[(5)] = ex__20647__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26288);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26316;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20645__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26339 = state_26288;
state_26288 = G__26339;
continue;
} else {
return ret_value__20645__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__20644__auto__ = function(state_26288){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__20644__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__20644__auto____1.call(this,state_26288);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__20644__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__20644__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__20644__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__20644__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__20644__auto__;
})()
;})(switch__20643__auto__,c__20755__auto___26319,ch))
})();
var state__20757__auto__ = (function (){var statearr_26318 = f__20756__auto__.call(null);
(statearr_26318[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20755__auto___26319);

return statearr_26318;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20757__auto__);
});})(c__20755__auto___26319,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__26340_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__26340_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_26347 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_26347){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_26345 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_26346 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_26345,_STAR_print_newline_STAR_26346,base_path_26347){
return (function() { 
var G__26348__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__26348 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26349__i = 0, G__26349__a = new Array(arguments.length -  0);
while (G__26349__i < G__26349__a.length) {G__26349__a[G__26349__i] = arguments[G__26349__i + 0]; ++G__26349__i;}
  args = new cljs.core.IndexedSeq(G__26349__a,0);
} 
return G__26348__delegate.call(this,args);};
G__26348.cljs$lang$maxFixedArity = 0;
G__26348.cljs$lang$applyTo = (function (arglist__26350){
var args = cljs.core.seq(arglist__26350);
return G__26348__delegate(args);
});
G__26348.cljs$core$IFn$_invoke$arity$variadic = G__26348__delegate;
return G__26348;
})()
;})(_STAR_print_fn_STAR_26345,_STAR_print_newline_STAR_26346,base_path_26347))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_26346;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_26345;
}}catch (e26344){if((e26344 instanceof Error)){
var e = e26344;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_26347], null));
} else {
var e = e26344;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_26347))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__26351){
var map__26358 = p__26351;
var map__26358__$1 = ((((!((map__26358 == null)))?((((map__26358.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26358.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26358):map__26358);
var opts = map__26358__$1;
var build_id = cljs.core.get.call(null,map__26358__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__26358,map__26358__$1,opts,build_id){
return (function (p__26360){
var vec__26361 = p__26360;
var map__26362 = cljs.core.nth.call(null,vec__26361,(0),null);
var map__26362__$1 = ((((!((map__26362 == null)))?((((map__26362.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26362.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26362):map__26362);
var msg = map__26362__$1;
var msg_name = cljs.core.get.call(null,map__26362__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__26361,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__26361,map__26362,map__26362__$1,msg,msg_name,_,map__26358,map__26358__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__26361,map__26362,map__26362__$1,msg,msg_name,_,map__26358,map__26358__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__26358,map__26358__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__26368){
var vec__26369 = p__26368;
var map__26370 = cljs.core.nth.call(null,vec__26369,(0),null);
var map__26370__$1 = ((((!((map__26370 == null)))?((((map__26370.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26370.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26370):map__26370);
var msg = map__26370__$1;
var msg_name = cljs.core.get.call(null,map__26370__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__26369,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__26372){
var map__26382 = p__26372;
var map__26382__$1 = ((((!((map__26382 == null)))?((((map__26382.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26382.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26382):map__26382);
var on_compile_warning = cljs.core.get.call(null,map__26382__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__26382__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__26382,map__26382__$1,on_compile_warning,on_compile_fail){
return (function (p__26384){
var vec__26385 = p__26384;
var map__26386 = cljs.core.nth.call(null,vec__26385,(0),null);
var map__26386__$1 = ((((!((map__26386 == null)))?((((map__26386.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26386.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26386):map__26386);
var msg = map__26386__$1;
var msg_name = cljs.core.get.call(null,map__26386__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__26385,(1));
var pred__26388 = cljs.core._EQ_;
var expr__26389 = msg_name;
if(cljs.core.truth_(pred__26388.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__26389))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__26388.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__26389))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__26382,map__26382__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__20755__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20755__auto__,msg_hist,msg_names,msg){
return (function (){
var f__20756__auto__ = (function (){var switch__20643__auto__ = ((function (c__20755__auto__,msg_hist,msg_names,msg){
return (function (state_26605){
var state_val_26606 = (state_26605[(1)]);
if((state_val_26606 === (7))){
var inst_26529 = (state_26605[(2)]);
var state_26605__$1 = state_26605;
if(cljs.core.truth_(inst_26529)){
var statearr_26607_26653 = state_26605__$1;
(statearr_26607_26653[(1)] = (8));

} else {
var statearr_26608_26654 = state_26605__$1;
(statearr_26608_26654[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26606 === (20))){
var inst_26599 = (state_26605[(2)]);
var state_26605__$1 = state_26605;
var statearr_26609_26655 = state_26605__$1;
(statearr_26609_26655[(2)] = inst_26599);

(statearr_26609_26655[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26606 === (27))){
var inst_26595 = (state_26605[(2)]);
var state_26605__$1 = state_26605;
var statearr_26610_26656 = state_26605__$1;
(statearr_26610_26656[(2)] = inst_26595);

(statearr_26610_26656[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26606 === (1))){
var inst_26522 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_26605__$1 = state_26605;
if(cljs.core.truth_(inst_26522)){
var statearr_26611_26657 = state_26605__$1;
(statearr_26611_26657[(1)] = (2));

} else {
var statearr_26612_26658 = state_26605__$1;
(statearr_26612_26658[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26606 === (24))){
var inst_26597 = (state_26605[(2)]);
var state_26605__$1 = state_26605;
var statearr_26613_26659 = state_26605__$1;
(statearr_26613_26659[(2)] = inst_26597);

(statearr_26613_26659[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26606 === (4))){
var inst_26603 = (state_26605[(2)]);
var state_26605__$1 = state_26605;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26605__$1,inst_26603);
} else {
if((state_val_26606 === (15))){
var inst_26601 = (state_26605[(2)]);
var state_26605__$1 = state_26605;
var statearr_26614_26660 = state_26605__$1;
(statearr_26614_26660[(2)] = inst_26601);

(statearr_26614_26660[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26606 === (21))){
var inst_26560 = (state_26605[(2)]);
var state_26605__$1 = state_26605;
var statearr_26615_26661 = state_26605__$1;
(statearr_26615_26661[(2)] = inst_26560);

(statearr_26615_26661[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26606 === (31))){
var inst_26584 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_26605__$1 = state_26605;
if(cljs.core.truth_(inst_26584)){
var statearr_26616_26662 = state_26605__$1;
(statearr_26616_26662[(1)] = (34));

} else {
var statearr_26617_26663 = state_26605__$1;
(statearr_26617_26663[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26606 === (32))){
var inst_26593 = (state_26605[(2)]);
var state_26605__$1 = state_26605;
var statearr_26618_26664 = state_26605__$1;
(statearr_26618_26664[(2)] = inst_26593);

(statearr_26618_26664[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26606 === (33))){
var inst_26582 = (state_26605[(2)]);
var state_26605__$1 = state_26605;
var statearr_26619_26665 = state_26605__$1;
(statearr_26619_26665[(2)] = inst_26582);

(statearr_26619_26665[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26606 === (13))){
var inst_26543 = figwheel.client.heads_up.clear.call(null);
var state_26605__$1 = state_26605;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26605__$1,(16),inst_26543);
} else {
if((state_val_26606 === (22))){
var inst_26564 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26565 = figwheel.client.heads_up.append_message.call(null,inst_26564);
var state_26605__$1 = state_26605;
var statearr_26620_26666 = state_26605__$1;
(statearr_26620_26666[(2)] = inst_26565);

(statearr_26620_26666[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26606 === (36))){
var inst_26591 = (state_26605[(2)]);
var state_26605__$1 = state_26605;
var statearr_26621_26667 = state_26605__$1;
(statearr_26621_26667[(2)] = inst_26591);

(statearr_26621_26667[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26606 === (29))){
var inst_26575 = (state_26605[(2)]);
var state_26605__$1 = state_26605;
var statearr_26622_26668 = state_26605__$1;
(statearr_26622_26668[(2)] = inst_26575);

(statearr_26622_26668[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26606 === (6))){
var inst_26524 = (state_26605[(7)]);
var state_26605__$1 = state_26605;
var statearr_26623_26669 = state_26605__$1;
(statearr_26623_26669[(2)] = inst_26524);

(statearr_26623_26669[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26606 === (28))){
var inst_26571 = (state_26605[(2)]);
var inst_26572 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26573 = figwheel.client.heads_up.display_warning.call(null,inst_26572);
var state_26605__$1 = (function (){var statearr_26624 = state_26605;
(statearr_26624[(8)] = inst_26571);

return statearr_26624;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26605__$1,(29),inst_26573);
} else {
if((state_val_26606 === (25))){
var inst_26569 = figwheel.client.heads_up.clear.call(null);
var state_26605__$1 = state_26605;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26605__$1,(28),inst_26569);
} else {
if((state_val_26606 === (34))){
var inst_26586 = figwheel.client.heads_up.flash_loaded.call(null);
var state_26605__$1 = state_26605;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26605__$1,(37),inst_26586);
} else {
if((state_val_26606 === (17))){
var inst_26551 = (state_26605[(2)]);
var state_26605__$1 = state_26605;
var statearr_26625_26670 = state_26605__$1;
(statearr_26625_26670[(2)] = inst_26551);

(statearr_26625_26670[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26606 === (3))){
var inst_26541 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_26605__$1 = state_26605;
if(cljs.core.truth_(inst_26541)){
var statearr_26626_26671 = state_26605__$1;
(statearr_26626_26671[(1)] = (13));

} else {
var statearr_26627_26672 = state_26605__$1;
(statearr_26627_26672[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26606 === (12))){
var inst_26537 = (state_26605[(2)]);
var state_26605__$1 = state_26605;
var statearr_26628_26673 = state_26605__$1;
(statearr_26628_26673[(2)] = inst_26537);

(statearr_26628_26673[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26606 === (2))){
var inst_26524 = (state_26605[(7)]);
var inst_26524__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_26605__$1 = (function (){var statearr_26629 = state_26605;
(statearr_26629[(7)] = inst_26524__$1);

return statearr_26629;
})();
if(cljs.core.truth_(inst_26524__$1)){
var statearr_26630_26674 = state_26605__$1;
(statearr_26630_26674[(1)] = (5));

} else {
var statearr_26631_26675 = state_26605__$1;
(statearr_26631_26675[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26606 === (23))){
var inst_26567 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_26605__$1 = state_26605;
if(cljs.core.truth_(inst_26567)){
var statearr_26632_26676 = state_26605__$1;
(statearr_26632_26676[(1)] = (25));

} else {
var statearr_26633_26677 = state_26605__$1;
(statearr_26633_26677[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26606 === (35))){
var state_26605__$1 = state_26605;
var statearr_26634_26678 = state_26605__$1;
(statearr_26634_26678[(2)] = null);

(statearr_26634_26678[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26606 === (19))){
var inst_26562 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_26605__$1 = state_26605;
if(cljs.core.truth_(inst_26562)){
var statearr_26635_26679 = state_26605__$1;
(statearr_26635_26679[(1)] = (22));

} else {
var statearr_26636_26680 = state_26605__$1;
(statearr_26636_26680[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26606 === (11))){
var inst_26533 = (state_26605[(2)]);
var state_26605__$1 = state_26605;
var statearr_26637_26681 = state_26605__$1;
(statearr_26637_26681[(2)] = inst_26533);

(statearr_26637_26681[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26606 === (9))){
var inst_26535 = figwheel.client.heads_up.clear.call(null);
var state_26605__$1 = state_26605;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26605__$1,(12),inst_26535);
} else {
if((state_val_26606 === (5))){
var inst_26526 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_26605__$1 = state_26605;
var statearr_26638_26682 = state_26605__$1;
(statearr_26638_26682[(2)] = inst_26526);

(statearr_26638_26682[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26606 === (14))){
var inst_26553 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_26605__$1 = state_26605;
if(cljs.core.truth_(inst_26553)){
var statearr_26639_26683 = state_26605__$1;
(statearr_26639_26683[(1)] = (18));

} else {
var statearr_26640_26684 = state_26605__$1;
(statearr_26640_26684[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26606 === (26))){
var inst_26577 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_26605__$1 = state_26605;
if(cljs.core.truth_(inst_26577)){
var statearr_26641_26685 = state_26605__$1;
(statearr_26641_26685[(1)] = (30));

} else {
var statearr_26642_26686 = state_26605__$1;
(statearr_26642_26686[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26606 === (16))){
var inst_26545 = (state_26605[(2)]);
var inst_26546 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26547 = figwheel.client.format_messages.call(null,inst_26546);
var inst_26548 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26549 = figwheel.client.heads_up.display_error.call(null,inst_26547,inst_26548);
var state_26605__$1 = (function (){var statearr_26643 = state_26605;
(statearr_26643[(9)] = inst_26545);

return statearr_26643;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26605__$1,(17),inst_26549);
} else {
if((state_val_26606 === (30))){
var inst_26579 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26580 = figwheel.client.heads_up.display_warning.call(null,inst_26579);
var state_26605__$1 = state_26605;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26605__$1,(33),inst_26580);
} else {
if((state_val_26606 === (10))){
var inst_26539 = (state_26605[(2)]);
var state_26605__$1 = state_26605;
var statearr_26644_26687 = state_26605__$1;
(statearr_26644_26687[(2)] = inst_26539);

(statearr_26644_26687[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26606 === (18))){
var inst_26555 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26556 = figwheel.client.format_messages.call(null,inst_26555);
var inst_26557 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26558 = figwheel.client.heads_up.display_error.call(null,inst_26556,inst_26557);
var state_26605__$1 = state_26605;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26605__$1,(21),inst_26558);
} else {
if((state_val_26606 === (37))){
var inst_26588 = (state_26605[(2)]);
var state_26605__$1 = state_26605;
var statearr_26645_26688 = state_26605__$1;
(statearr_26645_26688[(2)] = inst_26588);

(statearr_26645_26688[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26606 === (8))){
var inst_26531 = figwheel.client.heads_up.flash_loaded.call(null);
var state_26605__$1 = state_26605;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26605__$1,(11),inst_26531);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20755__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__20643__auto__,c__20755__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20644__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20644__auto____0 = (function (){
var statearr_26649 = [null,null,null,null,null,null,null,null,null,null];
(statearr_26649[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20644__auto__);

(statearr_26649[(1)] = (1));

return statearr_26649;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20644__auto____1 = (function (state_26605){
while(true){
var ret_value__20645__auto__ = (function (){try{while(true){
var result__20646__auto__ = switch__20643__auto__.call(null,state_26605);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20646__auto__;
}
break;
}
}catch (e26650){if((e26650 instanceof Object)){
var ex__20647__auto__ = e26650;
var statearr_26651_26689 = state_26605;
(statearr_26651_26689[(5)] = ex__20647__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26605);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26650;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20645__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26690 = state_26605;
state_26605 = G__26690;
continue;
} else {
return ret_value__20645__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20644__auto__ = function(state_26605){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20644__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20644__auto____1.call(this,state_26605);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20644__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20644__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20644__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20644__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20644__auto__;
})()
;})(switch__20643__auto__,c__20755__auto__,msg_hist,msg_names,msg))
})();
var state__20757__auto__ = (function (){var statearr_26652 = f__20756__auto__.call(null);
(statearr_26652[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20755__auto__);

return statearr_26652;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20757__auto__);
});})(c__20755__auto__,msg_hist,msg_names,msg))
);

return c__20755__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__20755__auto___26753 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20755__auto___26753,ch){
return (function (){
var f__20756__auto__ = (function (){var switch__20643__auto__ = ((function (c__20755__auto___26753,ch){
return (function (state_26736){
var state_val_26737 = (state_26736[(1)]);
if((state_val_26737 === (1))){
var state_26736__$1 = state_26736;
var statearr_26738_26754 = state_26736__$1;
(statearr_26738_26754[(2)] = null);

(statearr_26738_26754[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26737 === (2))){
var state_26736__$1 = state_26736;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26736__$1,(4),ch);
} else {
if((state_val_26737 === (3))){
var inst_26734 = (state_26736[(2)]);
var state_26736__$1 = state_26736;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26736__$1,inst_26734);
} else {
if((state_val_26737 === (4))){
var inst_26724 = (state_26736[(7)]);
var inst_26724__$1 = (state_26736[(2)]);
var state_26736__$1 = (function (){var statearr_26739 = state_26736;
(statearr_26739[(7)] = inst_26724__$1);

return statearr_26739;
})();
if(cljs.core.truth_(inst_26724__$1)){
var statearr_26740_26755 = state_26736__$1;
(statearr_26740_26755[(1)] = (5));

} else {
var statearr_26741_26756 = state_26736__$1;
(statearr_26741_26756[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26737 === (5))){
var inst_26724 = (state_26736[(7)]);
var inst_26726 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_26724);
var state_26736__$1 = state_26736;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26736__$1,(8),inst_26726);
} else {
if((state_val_26737 === (6))){
var state_26736__$1 = state_26736;
var statearr_26742_26757 = state_26736__$1;
(statearr_26742_26757[(2)] = null);

(statearr_26742_26757[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26737 === (7))){
var inst_26732 = (state_26736[(2)]);
var state_26736__$1 = state_26736;
var statearr_26743_26758 = state_26736__$1;
(statearr_26743_26758[(2)] = inst_26732);

(statearr_26743_26758[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26737 === (8))){
var inst_26728 = (state_26736[(2)]);
var state_26736__$1 = (function (){var statearr_26744 = state_26736;
(statearr_26744[(8)] = inst_26728);

return statearr_26744;
})();
var statearr_26745_26759 = state_26736__$1;
(statearr_26745_26759[(2)] = null);

(statearr_26745_26759[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__20755__auto___26753,ch))
;
return ((function (switch__20643__auto__,c__20755__auto___26753,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__20644__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__20644__auto____0 = (function (){
var statearr_26749 = [null,null,null,null,null,null,null,null,null];
(statearr_26749[(0)] = figwheel$client$heads_up_plugin_$_state_machine__20644__auto__);

(statearr_26749[(1)] = (1));

return statearr_26749;
});
var figwheel$client$heads_up_plugin_$_state_machine__20644__auto____1 = (function (state_26736){
while(true){
var ret_value__20645__auto__ = (function (){try{while(true){
var result__20646__auto__ = switch__20643__auto__.call(null,state_26736);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20646__auto__;
}
break;
}
}catch (e26750){if((e26750 instanceof Object)){
var ex__20647__auto__ = e26750;
var statearr_26751_26760 = state_26736;
(statearr_26751_26760[(5)] = ex__20647__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26736);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26750;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20645__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26761 = state_26736;
state_26736 = G__26761;
continue;
} else {
return ret_value__20645__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__20644__auto__ = function(state_26736){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__20644__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__20644__auto____1.call(this,state_26736);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__20644__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__20644__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__20644__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__20644__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__20644__auto__;
})()
;})(switch__20643__auto__,c__20755__auto___26753,ch))
})();
var state__20757__auto__ = (function (){var statearr_26752 = f__20756__auto__.call(null);
(statearr_26752[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20755__auto___26753);

return statearr_26752;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20757__auto__);
});})(c__20755__auto___26753,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__20755__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20755__auto__){
return (function (){
var f__20756__auto__ = (function (){var switch__20643__auto__ = ((function (c__20755__auto__){
return (function (state_26782){
var state_val_26783 = (state_26782[(1)]);
if((state_val_26783 === (1))){
var inst_26777 = cljs.core.async.timeout.call(null,(3000));
var state_26782__$1 = state_26782;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26782__$1,(2),inst_26777);
} else {
if((state_val_26783 === (2))){
var inst_26779 = (state_26782[(2)]);
var inst_26780 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_26782__$1 = (function (){var statearr_26784 = state_26782;
(statearr_26784[(7)] = inst_26779);

return statearr_26784;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26782__$1,inst_26780);
} else {
return null;
}
}
});})(c__20755__auto__))
;
return ((function (switch__20643__auto__,c__20755__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__20644__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__20644__auto____0 = (function (){
var statearr_26788 = [null,null,null,null,null,null,null,null];
(statearr_26788[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__20644__auto__);

(statearr_26788[(1)] = (1));

return statearr_26788;
});
var figwheel$client$enforce_project_plugin_$_state_machine__20644__auto____1 = (function (state_26782){
while(true){
var ret_value__20645__auto__ = (function (){try{while(true){
var result__20646__auto__ = switch__20643__auto__.call(null,state_26782);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20646__auto__;
}
break;
}
}catch (e26789){if((e26789 instanceof Object)){
var ex__20647__auto__ = e26789;
var statearr_26790_26792 = state_26782;
(statearr_26790_26792[(5)] = ex__20647__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26782);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26789;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20645__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26793 = state_26782;
state_26782 = G__26793;
continue;
} else {
return ret_value__20645__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__20644__auto__ = function(state_26782){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__20644__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__20644__auto____1.call(this,state_26782);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__20644__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__20644__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__20644__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__20644__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__20644__auto__;
})()
;})(switch__20643__auto__,c__20755__auto__))
})();
var state__20757__auto__ = (function (){var statearr_26791 = f__20756__auto__.call(null);
(statearr_26791[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20755__auto__);

return statearr_26791;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20757__auto__);
});})(c__20755__auto__))
);

return c__20755__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__26794){
var map__26801 = p__26794;
var map__26801__$1 = ((((!((map__26801 == null)))?((((map__26801.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26801.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26801):map__26801);
var ed = map__26801__$1;
var formatted_exception = cljs.core.get.call(null,map__26801__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__26801__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__26801__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__26803_26807 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__26804_26808 = null;
var count__26805_26809 = (0);
var i__26806_26810 = (0);
while(true){
if((i__26806_26810 < count__26805_26809)){
var msg_26811 = cljs.core._nth.call(null,chunk__26804_26808,i__26806_26810);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_26811);

var G__26812 = seq__26803_26807;
var G__26813 = chunk__26804_26808;
var G__26814 = count__26805_26809;
var G__26815 = (i__26806_26810 + (1));
seq__26803_26807 = G__26812;
chunk__26804_26808 = G__26813;
count__26805_26809 = G__26814;
i__26806_26810 = G__26815;
continue;
} else {
var temp__4425__auto___26816 = cljs.core.seq.call(null,seq__26803_26807);
if(temp__4425__auto___26816){
var seq__26803_26817__$1 = temp__4425__auto___26816;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26803_26817__$1)){
var c__17574__auto___26818 = cljs.core.chunk_first.call(null,seq__26803_26817__$1);
var G__26819 = cljs.core.chunk_rest.call(null,seq__26803_26817__$1);
var G__26820 = c__17574__auto___26818;
var G__26821 = cljs.core.count.call(null,c__17574__auto___26818);
var G__26822 = (0);
seq__26803_26807 = G__26819;
chunk__26804_26808 = G__26820;
count__26805_26809 = G__26821;
i__26806_26810 = G__26822;
continue;
} else {
var msg_26823 = cljs.core.first.call(null,seq__26803_26817__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_26823);

var G__26824 = cljs.core.next.call(null,seq__26803_26817__$1);
var G__26825 = null;
var G__26826 = (0);
var G__26827 = (0);
seq__26803_26807 = G__26824;
chunk__26804_26808 = G__26825;
count__26805_26809 = G__26826;
i__26806_26810 = G__26827;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__26828){
var map__26831 = p__26828;
var map__26831__$1 = ((((!((map__26831 == null)))?((((map__26831.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26831.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26831):map__26831);
var w = map__26831__$1;
var message = cljs.core.get.call(null,map__26831__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__16759__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__16759__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__16759__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__26839 = cljs.core.seq.call(null,plugins);
var chunk__26840 = null;
var count__26841 = (0);
var i__26842 = (0);
while(true){
if((i__26842 < count__26841)){
var vec__26843 = cljs.core._nth.call(null,chunk__26840,i__26842);
var k = cljs.core.nth.call(null,vec__26843,(0),null);
var plugin = cljs.core.nth.call(null,vec__26843,(1),null);
if(cljs.core.truth_(plugin)){
var pl_26845 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__26839,chunk__26840,count__26841,i__26842,pl_26845,vec__26843,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_26845.call(null,msg_hist);
});})(seq__26839,chunk__26840,count__26841,i__26842,pl_26845,vec__26843,k,plugin))
);
} else {
}

var G__26846 = seq__26839;
var G__26847 = chunk__26840;
var G__26848 = count__26841;
var G__26849 = (i__26842 + (1));
seq__26839 = G__26846;
chunk__26840 = G__26847;
count__26841 = G__26848;
i__26842 = G__26849;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__26839);
if(temp__4425__auto__){
var seq__26839__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26839__$1)){
var c__17574__auto__ = cljs.core.chunk_first.call(null,seq__26839__$1);
var G__26850 = cljs.core.chunk_rest.call(null,seq__26839__$1);
var G__26851 = c__17574__auto__;
var G__26852 = cljs.core.count.call(null,c__17574__auto__);
var G__26853 = (0);
seq__26839 = G__26850;
chunk__26840 = G__26851;
count__26841 = G__26852;
i__26842 = G__26853;
continue;
} else {
var vec__26844 = cljs.core.first.call(null,seq__26839__$1);
var k = cljs.core.nth.call(null,vec__26844,(0),null);
var plugin = cljs.core.nth.call(null,vec__26844,(1),null);
if(cljs.core.truth_(plugin)){
var pl_26854 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__26839,chunk__26840,count__26841,i__26842,pl_26854,vec__26844,k,plugin,seq__26839__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_26854.call(null,msg_hist);
});})(seq__26839,chunk__26840,count__26841,i__26842,pl_26854,vec__26844,k,plugin,seq__26839__$1,temp__4425__auto__))
);
} else {
}

var G__26855 = cljs.core.next.call(null,seq__26839__$1);
var G__26856 = null;
var G__26857 = (0);
var G__26858 = (0);
seq__26839 = G__26855;
chunk__26840 = G__26856;
count__26841 = G__26857;
i__26842 = G__26858;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args26859 = [];
var len__17829__auto___26862 = arguments.length;
var i__17830__auto___26863 = (0);
while(true){
if((i__17830__auto___26863 < len__17829__auto___26862)){
args26859.push((arguments[i__17830__auto___26863]));

var G__26864 = (i__17830__auto___26863 + (1));
i__17830__auto___26863 = G__26864;
continue;
} else {
}
break;
}

var G__26861 = args26859.length;
switch (G__26861) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26859.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__17836__auto__ = [];
var len__17829__auto___26870 = arguments.length;
var i__17830__auto___26871 = (0);
while(true){
if((i__17830__auto___26871 < len__17829__auto___26870)){
args__17836__auto__.push((arguments[i__17830__auto___26871]));

var G__26872 = (i__17830__auto___26871 + (1));
i__17830__auto___26871 = G__26872;
continue;
} else {
}
break;
}

var argseq__17837__auto__ = ((((0) < args__17836__auto__.length))?(new cljs.core.IndexedSeq(args__17836__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17837__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__26867){
var map__26868 = p__26867;
var map__26868__$1 = ((((!((map__26868 == null)))?((((map__26868.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26868.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26868):map__26868);
var opts = map__26868__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq26866){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26866));
});

//# sourceMappingURL=client.js.map