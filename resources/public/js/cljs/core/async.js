// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args20800 = [];
var len__17829__auto___20806 = arguments.length;
var i__17830__auto___20807 = (0);
while(true){
if((i__17830__auto___20807 < len__17829__auto___20806)){
args20800.push((arguments[i__17830__auto___20807]));

var G__20808 = (i__17830__auto___20807 + (1));
i__17830__auto___20807 = G__20808;
continue;
} else {
}
break;
}

var G__20802 = args20800.length;
switch (G__20802) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20800.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async20803 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20803 = (function (f,blockable,meta20804){
this.f = f;
this.blockable = blockable;
this.meta20804 = meta20804;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20803.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20805,meta20804__$1){
var self__ = this;
var _20805__$1 = this;
return (new cljs.core.async.t_cljs$core$async20803(self__.f,self__.blockable,meta20804__$1));
});

cljs.core.async.t_cljs$core$async20803.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20805){
var self__ = this;
var _20805__$1 = this;
return self__.meta20804;
});

cljs.core.async.t_cljs$core$async20803.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async20803.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async20803.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async20803.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async20803.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta20804","meta20804",-1532295380,null)], null);
});

cljs.core.async.t_cljs$core$async20803.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20803.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20803";

cljs.core.async.t_cljs$core$async20803.cljs$lang$ctorPrWriter = (function (this__17369__auto__,writer__17370__auto__,opt__17371__auto__){
return cljs.core._write.call(null,writer__17370__auto__,"cljs.core.async/t_cljs$core$async20803");
});

cljs.core.async.__GT_t_cljs$core$async20803 = (function cljs$core$async$__GT_t_cljs$core$async20803(f__$1,blockable__$1,meta20804){
return (new cljs.core.async.t_cljs$core$async20803(f__$1,blockable__$1,meta20804));
});

}

return (new cljs.core.async.t_cljs$core$async20803(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args20812 = [];
var len__17829__auto___20815 = arguments.length;
var i__17830__auto___20816 = (0);
while(true){
if((i__17830__auto___20816 < len__17829__auto___20815)){
args20812.push((arguments[i__17830__auto___20816]));

var G__20817 = (i__17830__auto___20816 + (1));
i__17830__auto___20816 = G__20817;
continue;
} else {
}
break;
}

var G__20814 = args20812.length;
switch (G__20814) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20812.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args20819 = [];
var len__17829__auto___20822 = arguments.length;
var i__17830__auto___20823 = (0);
while(true){
if((i__17830__auto___20823 < len__17829__auto___20822)){
args20819.push((arguments[i__17830__auto___20823]));

var G__20824 = (i__17830__auto___20823 + (1));
i__17830__auto___20823 = G__20824;
continue;
} else {
}
break;
}

var G__20821 = args20819.length;
switch (G__20821) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20819.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args20826 = [];
var len__17829__auto___20829 = arguments.length;
var i__17830__auto___20830 = (0);
while(true){
if((i__17830__auto___20830 < len__17829__auto___20829)){
args20826.push((arguments[i__17830__auto___20830]));

var G__20831 = (i__17830__auto___20830 + (1));
i__17830__auto___20830 = G__20831;
continue;
} else {
}
break;
}

var G__20828 = args20826.length;
switch (G__20828) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20826.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_20833 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_20833);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_20833,ret){
return (function (){
return fn1.call(null,val_20833);
});})(val_20833,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args20834 = [];
var len__17829__auto___20837 = arguments.length;
var i__17830__auto___20838 = (0);
while(true){
if((i__17830__auto___20838 < len__17829__auto___20837)){
args20834.push((arguments[i__17830__auto___20838]));

var G__20839 = (i__17830__auto___20838 + (1));
i__17830__auto___20838 = G__20839;
continue;
} else {
}
break;
}

var G__20836 = args20834.length;
switch (G__20836) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20834.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__17674__auto___20841 = n;
var x_20842 = (0);
while(true){
if((x_20842 < n__17674__auto___20841)){
(a[x_20842] = (0));

var G__20843 = (x_20842 + (1));
x_20842 = G__20843;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__20844 = (i + (1));
i = G__20844;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async20848 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20848 = (function (alt_flag,flag,meta20849){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta20849 = meta20849;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20848.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_20850,meta20849__$1){
var self__ = this;
var _20850__$1 = this;
return (new cljs.core.async.t_cljs$core$async20848(self__.alt_flag,self__.flag,meta20849__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async20848.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_20850){
var self__ = this;
var _20850__$1 = this;
return self__.meta20849;
});})(flag))
;

cljs.core.async.t_cljs$core$async20848.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async20848.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async20848.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async20848.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async20848.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta20849","meta20849",115227465,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async20848.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20848.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20848";

cljs.core.async.t_cljs$core$async20848.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__17369__auto__,writer__17370__auto__,opt__17371__auto__){
return cljs.core._write.call(null,writer__17370__auto__,"cljs.core.async/t_cljs$core$async20848");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async20848 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async20848(alt_flag__$1,flag__$1,meta20849){
return (new cljs.core.async.t_cljs$core$async20848(alt_flag__$1,flag__$1,meta20849));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async20848(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async20854 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20854 = (function (alt_handler,flag,cb,meta20855){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta20855 = meta20855;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20854.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20856,meta20855__$1){
var self__ = this;
var _20856__$1 = this;
return (new cljs.core.async.t_cljs$core$async20854(self__.alt_handler,self__.flag,self__.cb,meta20855__$1));
});

cljs.core.async.t_cljs$core$async20854.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20856){
var self__ = this;
var _20856__$1 = this;
return self__.meta20855;
});

cljs.core.async.t_cljs$core$async20854.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async20854.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async20854.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async20854.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async20854.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta20855","meta20855",-1814628374,null)], null);
});

cljs.core.async.t_cljs$core$async20854.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20854.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20854";

cljs.core.async.t_cljs$core$async20854.cljs$lang$ctorPrWriter = (function (this__17369__auto__,writer__17370__auto__,opt__17371__auto__){
return cljs.core._write.call(null,writer__17370__auto__,"cljs.core.async/t_cljs$core$async20854");
});

cljs.core.async.__GT_t_cljs$core$async20854 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async20854(alt_handler__$1,flag__$1,cb__$1,meta20855){
return (new cljs.core.async.t_cljs$core$async20854(alt_handler__$1,flag__$1,cb__$1,meta20855));
});

}

return (new cljs.core.async.t_cljs$core$async20854(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__20857_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20857_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__20858_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20858_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__16771__auto__ = wport;
if(cljs.core.truth_(or__16771__auto__)){
return or__16771__auto__;
} else {
return port;
}
})()], null));
} else {
var G__20859 = (i + (1));
i = G__20859;
continue;
}
} else {
return null;
}
break;
}
})();
var or__16771__auto__ = ret;
if(cljs.core.truth_(or__16771__auto__)){
return or__16771__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__16759__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__16759__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__16759__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__17836__auto__ = [];
var len__17829__auto___20865 = arguments.length;
var i__17830__auto___20866 = (0);
while(true){
if((i__17830__auto___20866 < len__17829__auto___20865)){
args__17836__auto__.push((arguments[i__17830__auto___20866]));

var G__20867 = (i__17830__auto___20866 + (1));
i__17830__auto___20866 = G__20867;
continue;
} else {
}
break;
}

var argseq__17837__auto__ = ((((1) < args__17836__auto__.length))?(new cljs.core.IndexedSeq(args__17836__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17837__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__20862){
var map__20863 = p__20862;
var map__20863__$1 = ((((!((map__20863 == null)))?((((map__20863.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20863.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20863):map__20863);
var opts = map__20863__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq20860){
var G__20861 = cljs.core.first.call(null,seq20860);
var seq20860__$1 = cljs.core.next.call(null,seq20860);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__20861,seq20860__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args20868 = [];
var len__17829__auto___20918 = arguments.length;
var i__17830__auto___20919 = (0);
while(true){
if((i__17830__auto___20919 < len__17829__auto___20918)){
args20868.push((arguments[i__17830__auto___20919]));

var G__20920 = (i__17830__auto___20919 + (1));
i__17830__auto___20919 = G__20920;
continue;
} else {
}
break;
}

var G__20870 = args20868.length;
switch (G__20870) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20868.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__20755__auto___20922 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20755__auto___20922){
return (function (){
var f__20756__auto__ = (function (){var switch__20643__auto__ = ((function (c__20755__auto___20922){
return (function (state_20894){
var state_val_20895 = (state_20894[(1)]);
if((state_val_20895 === (7))){
var inst_20890 = (state_20894[(2)]);
var state_20894__$1 = state_20894;
var statearr_20896_20923 = state_20894__$1;
(statearr_20896_20923[(2)] = inst_20890);

(statearr_20896_20923[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20895 === (1))){
var state_20894__$1 = state_20894;
var statearr_20897_20924 = state_20894__$1;
(statearr_20897_20924[(2)] = null);

(statearr_20897_20924[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20895 === (4))){
var inst_20873 = (state_20894[(7)]);
var inst_20873__$1 = (state_20894[(2)]);
var inst_20874 = (inst_20873__$1 == null);
var state_20894__$1 = (function (){var statearr_20898 = state_20894;
(statearr_20898[(7)] = inst_20873__$1);

return statearr_20898;
})();
if(cljs.core.truth_(inst_20874)){
var statearr_20899_20925 = state_20894__$1;
(statearr_20899_20925[(1)] = (5));

} else {
var statearr_20900_20926 = state_20894__$1;
(statearr_20900_20926[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20895 === (13))){
var state_20894__$1 = state_20894;
var statearr_20901_20927 = state_20894__$1;
(statearr_20901_20927[(2)] = null);

(statearr_20901_20927[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20895 === (6))){
var inst_20873 = (state_20894[(7)]);
var state_20894__$1 = state_20894;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20894__$1,(11),to,inst_20873);
} else {
if((state_val_20895 === (3))){
var inst_20892 = (state_20894[(2)]);
var state_20894__$1 = state_20894;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20894__$1,inst_20892);
} else {
if((state_val_20895 === (12))){
var state_20894__$1 = state_20894;
var statearr_20902_20928 = state_20894__$1;
(statearr_20902_20928[(2)] = null);

(statearr_20902_20928[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20895 === (2))){
var state_20894__$1 = state_20894;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20894__$1,(4),from);
} else {
if((state_val_20895 === (11))){
var inst_20883 = (state_20894[(2)]);
var state_20894__$1 = state_20894;
if(cljs.core.truth_(inst_20883)){
var statearr_20903_20929 = state_20894__$1;
(statearr_20903_20929[(1)] = (12));

} else {
var statearr_20904_20930 = state_20894__$1;
(statearr_20904_20930[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20895 === (9))){
var state_20894__$1 = state_20894;
var statearr_20905_20931 = state_20894__$1;
(statearr_20905_20931[(2)] = null);

(statearr_20905_20931[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20895 === (5))){
var state_20894__$1 = state_20894;
if(cljs.core.truth_(close_QMARK_)){
var statearr_20906_20932 = state_20894__$1;
(statearr_20906_20932[(1)] = (8));

} else {
var statearr_20907_20933 = state_20894__$1;
(statearr_20907_20933[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20895 === (14))){
var inst_20888 = (state_20894[(2)]);
var state_20894__$1 = state_20894;
var statearr_20908_20934 = state_20894__$1;
(statearr_20908_20934[(2)] = inst_20888);

(statearr_20908_20934[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20895 === (10))){
var inst_20880 = (state_20894[(2)]);
var state_20894__$1 = state_20894;
var statearr_20909_20935 = state_20894__$1;
(statearr_20909_20935[(2)] = inst_20880);

(statearr_20909_20935[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20895 === (8))){
var inst_20877 = cljs.core.async.close_BANG_.call(null,to);
var state_20894__$1 = state_20894;
var statearr_20910_20936 = state_20894__$1;
(statearr_20910_20936[(2)] = inst_20877);

(statearr_20910_20936[(1)] = (10));


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
});})(c__20755__auto___20922))
;
return ((function (switch__20643__auto__,c__20755__auto___20922){
return (function() {
var cljs$core$async$state_machine__20644__auto__ = null;
var cljs$core$async$state_machine__20644__auto____0 = (function (){
var statearr_20914 = [null,null,null,null,null,null,null,null];
(statearr_20914[(0)] = cljs$core$async$state_machine__20644__auto__);

(statearr_20914[(1)] = (1));

return statearr_20914;
});
var cljs$core$async$state_machine__20644__auto____1 = (function (state_20894){
while(true){
var ret_value__20645__auto__ = (function (){try{while(true){
var result__20646__auto__ = switch__20643__auto__.call(null,state_20894);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20646__auto__;
}
break;
}
}catch (e20915){if((e20915 instanceof Object)){
var ex__20647__auto__ = e20915;
var statearr_20916_20937 = state_20894;
(statearr_20916_20937[(5)] = ex__20647__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20894);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20915;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20645__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20938 = state_20894;
state_20894 = G__20938;
continue;
} else {
return ret_value__20645__auto__;
}
break;
}
});
cljs$core$async$state_machine__20644__auto__ = function(state_20894){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20644__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20644__auto____1.call(this,state_20894);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20644__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20644__auto____0;
cljs$core$async$state_machine__20644__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20644__auto____1;
return cljs$core$async$state_machine__20644__auto__;
})()
;})(switch__20643__auto__,c__20755__auto___20922))
})();
var state__20757__auto__ = (function (){var statearr_20917 = f__20756__auto__.call(null);
(statearr_20917[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20755__auto___20922);

return statearr_20917;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20757__auto__);
});})(c__20755__auto___20922))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__21122){
var vec__21123 = p__21122;
var v = cljs.core.nth.call(null,vec__21123,(0),null);
var p = cljs.core.nth.call(null,vec__21123,(1),null);
var job = vec__21123;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__20755__auto___21305 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20755__auto___21305,res,vec__21123,v,p,job,jobs,results){
return (function (){
var f__20756__auto__ = (function (){var switch__20643__auto__ = ((function (c__20755__auto___21305,res,vec__21123,v,p,job,jobs,results){
return (function (state_21128){
var state_val_21129 = (state_21128[(1)]);
if((state_val_21129 === (1))){
var state_21128__$1 = state_21128;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21128__$1,(2),res,v);
} else {
if((state_val_21129 === (2))){
var inst_21125 = (state_21128[(2)]);
var inst_21126 = cljs.core.async.close_BANG_.call(null,res);
var state_21128__$1 = (function (){var statearr_21130 = state_21128;
(statearr_21130[(7)] = inst_21125);

return statearr_21130;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21128__$1,inst_21126);
} else {
return null;
}
}
});})(c__20755__auto___21305,res,vec__21123,v,p,job,jobs,results))
;
return ((function (switch__20643__auto__,c__20755__auto___21305,res,vec__21123,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20644__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20644__auto____0 = (function (){
var statearr_21134 = [null,null,null,null,null,null,null,null];
(statearr_21134[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20644__auto__);

(statearr_21134[(1)] = (1));

return statearr_21134;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20644__auto____1 = (function (state_21128){
while(true){
var ret_value__20645__auto__ = (function (){try{while(true){
var result__20646__auto__ = switch__20643__auto__.call(null,state_21128);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20646__auto__;
}
break;
}
}catch (e21135){if((e21135 instanceof Object)){
var ex__20647__auto__ = e21135;
var statearr_21136_21306 = state_21128;
(statearr_21136_21306[(5)] = ex__20647__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21128);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21135;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20645__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21307 = state_21128;
state_21128 = G__21307;
continue;
} else {
return ret_value__20645__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20644__auto__ = function(state_21128){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20644__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20644__auto____1.call(this,state_21128);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20644__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20644__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20644__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20644__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20644__auto__;
})()
;})(switch__20643__auto__,c__20755__auto___21305,res,vec__21123,v,p,job,jobs,results))
})();
var state__20757__auto__ = (function (){var statearr_21137 = f__20756__auto__.call(null);
(statearr_21137[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20755__auto___21305);

return statearr_21137;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20757__auto__);
});})(c__20755__auto___21305,res,vec__21123,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__21138){
var vec__21139 = p__21138;
var v = cljs.core.nth.call(null,vec__21139,(0),null);
var p = cljs.core.nth.call(null,vec__21139,(1),null);
var job = vec__21139;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__17674__auto___21308 = n;
var __21309 = (0);
while(true){
if((__21309 < n__17674__auto___21308)){
var G__21140_21310 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__21140_21310) {
case "compute":
var c__20755__auto___21312 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__21309,c__20755__auto___21312,G__21140_21310,n__17674__auto___21308,jobs,results,process,async){
return (function (){
var f__20756__auto__ = (function (){var switch__20643__auto__ = ((function (__21309,c__20755__auto___21312,G__21140_21310,n__17674__auto___21308,jobs,results,process,async){
return (function (state_21153){
var state_val_21154 = (state_21153[(1)]);
if((state_val_21154 === (1))){
var state_21153__$1 = state_21153;
var statearr_21155_21313 = state_21153__$1;
(statearr_21155_21313[(2)] = null);

(statearr_21155_21313[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21154 === (2))){
var state_21153__$1 = state_21153;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21153__$1,(4),jobs);
} else {
if((state_val_21154 === (3))){
var inst_21151 = (state_21153[(2)]);
var state_21153__$1 = state_21153;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21153__$1,inst_21151);
} else {
if((state_val_21154 === (4))){
var inst_21143 = (state_21153[(2)]);
var inst_21144 = process.call(null,inst_21143);
var state_21153__$1 = state_21153;
if(cljs.core.truth_(inst_21144)){
var statearr_21156_21314 = state_21153__$1;
(statearr_21156_21314[(1)] = (5));

} else {
var statearr_21157_21315 = state_21153__$1;
(statearr_21157_21315[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21154 === (5))){
var state_21153__$1 = state_21153;
var statearr_21158_21316 = state_21153__$1;
(statearr_21158_21316[(2)] = null);

(statearr_21158_21316[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21154 === (6))){
var state_21153__$1 = state_21153;
var statearr_21159_21317 = state_21153__$1;
(statearr_21159_21317[(2)] = null);

(statearr_21159_21317[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21154 === (7))){
var inst_21149 = (state_21153[(2)]);
var state_21153__$1 = state_21153;
var statearr_21160_21318 = state_21153__$1;
(statearr_21160_21318[(2)] = inst_21149);

(statearr_21160_21318[(1)] = (3));


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
});})(__21309,c__20755__auto___21312,G__21140_21310,n__17674__auto___21308,jobs,results,process,async))
;
return ((function (__21309,switch__20643__auto__,c__20755__auto___21312,G__21140_21310,n__17674__auto___21308,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20644__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20644__auto____0 = (function (){
var statearr_21164 = [null,null,null,null,null,null,null];
(statearr_21164[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20644__auto__);

(statearr_21164[(1)] = (1));

return statearr_21164;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20644__auto____1 = (function (state_21153){
while(true){
var ret_value__20645__auto__ = (function (){try{while(true){
var result__20646__auto__ = switch__20643__auto__.call(null,state_21153);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20646__auto__;
}
break;
}
}catch (e21165){if((e21165 instanceof Object)){
var ex__20647__auto__ = e21165;
var statearr_21166_21319 = state_21153;
(statearr_21166_21319[(5)] = ex__20647__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21153);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21165;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20645__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21320 = state_21153;
state_21153 = G__21320;
continue;
} else {
return ret_value__20645__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20644__auto__ = function(state_21153){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20644__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20644__auto____1.call(this,state_21153);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20644__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20644__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20644__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20644__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20644__auto__;
})()
;})(__21309,switch__20643__auto__,c__20755__auto___21312,G__21140_21310,n__17674__auto___21308,jobs,results,process,async))
})();
var state__20757__auto__ = (function (){var statearr_21167 = f__20756__auto__.call(null);
(statearr_21167[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20755__auto___21312);

return statearr_21167;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20757__auto__);
});})(__21309,c__20755__auto___21312,G__21140_21310,n__17674__auto___21308,jobs,results,process,async))
);


break;
case "async":
var c__20755__auto___21321 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__21309,c__20755__auto___21321,G__21140_21310,n__17674__auto___21308,jobs,results,process,async){
return (function (){
var f__20756__auto__ = (function (){var switch__20643__auto__ = ((function (__21309,c__20755__auto___21321,G__21140_21310,n__17674__auto___21308,jobs,results,process,async){
return (function (state_21180){
var state_val_21181 = (state_21180[(1)]);
if((state_val_21181 === (1))){
var state_21180__$1 = state_21180;
var statearr_21182_21322 = state_21180__$1;
(statearr_21182_21322[(2)] = null);

(statearr_21182_21322[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21181 === (2))){
var state_21180__$1 = state_21180;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21180__$1,(4),jobs);
} else {
if((state_val_21181 === (3))){
var inst_21178 = (state_21180[(2)]);
var state_21180__$1 = state_21180;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21180__$1,inst_21178);
} else {
if((state_val_21181 === (4))){
var inst_21170 = (state_21180[(2)]);
var inst_21171 = async.call(null,inst_21170);
var state_21180__$1 = state_21180;
if(cljs.core.truth_(inst_21171)){
var statearr_21183_21323 = state_21180__$1;
(statearr_21183_21323[(1)] = (5));

} else {
var statearr_21184_21324 = state_21180__$1;
(statearr_21184_21324[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21181 === (5))){
var state_21180__$1 = state_21180;
var statearr_21185_21325 = state_21180__$1;
(statearr_21185_21325[(2)] = null);

(statearr_21185_21325[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21181 === (6))){
var state_21180__$1 = state_21180;
var statearr_21186_21326 = state_21180__$1;
(statearr_21186_21326[(2)] = null);

(statearr_21186_21326[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21181 === (7))){
var inst_21176 = (state_21180[(2)]);
var state_21180__$1 = state_21180;
var statearr_21187_21327 = state_21180__$1;
(statearr_21187_21327[(2)] = inst_21176);

(statearr_21187_21327[(1)] = (3));


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
});})(__21309,c__20755__auto___21321,G__21140_21310,n__17674__auto___21308,jobs,results,process,async))
;
return ((function (__21309,switch__20643__auto__,c__20755__auto___21321,G__21140_21310,n__17674__auto___21308,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20644__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20644__auto____0 = (function (){
var statearr_21191 = [null,null,null,null,null,null,null];
(statearr_21191[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20644__auto__);

(statearr_21191[(1)] = (1));

return statearr_21191;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20644__auto____1 = (function (state_21180){
while(true){
var ret_value__20645__auto__ = (function (){try{while(true){
var result__20646__auto__ = switch__20643__auto__.call(null,state_21180);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20646__auto__;
}
break;
}
}catch (e21192){if((e21192 instanceof Object)){
var ex__20647__auto__ = e21192;
var statearr_21193_21328 = state_21180;
(statearr_21193_21328[(5)] = ex__20647__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21180);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21192;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20645__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21329 = state_21180;
state_21180 = G__21329;
continue;
} else {
return ret_value__20645__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20644__auto__ = function(state_21180){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20644__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20644__auto____1.call(this,state_21180);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20644__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20644__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20644__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20644__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20644__auto__;
})()
;})(__21309,switch__20643__auto__,c__20755__auto___21321,G__21140_21310,n__17674__auto___21308,jobs,results,process,async))
})();
var state__20757__auto__ = (function (){var statearr_21194 = f__20756__auto__.call(null);
(statearr_21194[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20755__auto___21321);

return statearr_21194;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20757__auto__);
});})(__21309,c__20755__auto___21321,G__21140_21310,n__17674__auto___21308,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__21330 = (__21309 + (1));
__21309 = G__21330;
continue;
} else {
}
break;
}

var c__20755__auto___21331 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20755__auto___21331,jobs,results,process,async){
return (function (){
var f__20756__auto__ = (function (){var switch__20643__auto__ = ((function (c__20755__auto___21331,jobs,results,process,async){
return (function (state_21216){
var state_val_21217 = (state_21216[(1)]);
if((state_val_21217 === (1))){
var state_21216__$1 = state_21216;
var statearr_21218_21332 = state_21216__$1;
(statearr_21218_21332[(2)] = null);

(statearr_21218_21332[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21217 === (2))){
var state_21216__$1 = state_21216;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21216__$1,(4),from);
} else {
if((state_val_21217 === (3))){
var inst_21214 = (state_21216[(2)]);
var state_21216__$1 = state_21216;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21216__$1,inst_21214);
} else {
if((state_val_21217 === (4))){
var inst_21197 = (state_21216[(7)]);
var inst_21197__$1 = (state_21216[(2)]);
var inst_21198 = (inst_21197__$1 == null);
var state_21216__$1 = (function (){var statearr_21219 = state_21216;
(statearr_21219[(7)] = inst_21197__$1);

return statearr_21219;
})();
if(cljs.core.truth_(inst_21198)){
var statearr_21220_21333 = state_21216__$1;
(statearr_21220_21333[(1)] = (5));

} else {
var statearr_21221_21334 = state_21216__$1;
(statearr_21221_21334[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21217 === (5))){
var inst_21200 = cljs.core.async.close_BANG_.call(null,jobs);
var state_21216__$1 = state_21216;
var statearr_21222_21335 = state_21216__$1;
(statearr_21222_21335[(2)] = inst_21200);

(statearr_21222_21335[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21217 === (6))){
var inst_21197 = (state_21216[(7)]);
var inst_21202 = (state_21216[(8)]);
var inst_21202__$1 = cljs.core.async.chan.call(null,(1));
var inst_21203 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_21204 = [inst_21197,inst_21202__$1];
var inst_21205 = (new cljs.core.PersistentVector(null,2,(5),inst_21203,inst_21204,null));
var state_21216__$1 = (function (){var statearr_21223 = state_21216;
(statearr_21223[(8)] = inst_21202__$1);

return statearr_21223;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21216__$1,(8),jobs,inst_21205);
} else {
if((state_val_21217 === (7))){
var inst_21212 = (state_21216[(2)]);
var state_21216__$1 = state_21216;
var statearr_21224_21336 = state_21216__$1;
(statearr_21224_21336[(2)] = inst_21212);

(statearr_21224_21336[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21217 === (8))){
var inst_21202 = (state_21216[(8)]);
var inst_21207 = (state_21216[(2)]);
var state_21216__$1 = (function (){var statearr_21225 = state_21216;
(statearr_21225[(9)] = inst_21207);

return statearr_21225;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21216__$1,(9),results,inst_21202);
} else {
if((state_val_21217 === (9))){
var inst_21209 = (state_21216[(2)]);
var state_21216__$1 = (function (){var statearr_21226 = state_21216;
(statearr_21226[(10)] = inst_21209);

return statearr_21226;
})();
var statearr_21227_21337 = state_21216__$1;
(statearr_21227_21337[(2)] = null);

(statearr_21227_21337[(1)] = (2));


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
});})(c__20755__auto___21331,jobs,results,process,async))
;
return ((function (switch__20643__auto__,c__20755__auto___21331,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20644__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20644__auto____0 = (function (){
var statearr_21231 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21231[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20644__auto__);

(statearr_21231[(1)] = (1));

return statearr_21231;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20644__auto____1 = (function (state_21216){
while(true){
var ret_value__20645__auto__ = (function (){try{while(true){
var result__20646__auto__ = switch__20643__auto__.call(null,state_21216);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20646__auto__;
}
break;
}
}catch (e21232){if((e21232 instanceof Object)){
var ex__20647__auto__ = e21232;
var statearr_21233_21338 = state_21216;
(statearr_21233_21338[(5)] = ex__20647__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21216);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21232;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20645__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21339 = state_21216;
state_21216 = G__21339;
continue;
} else {
return ret_value__20645__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20644__auto__ = function(state_21216){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20644__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20644__auto____1.call(this,state_21216);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20644__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20644__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20644__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20644__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20644__auto__;
})()
;})(switch__20643__auto__,c__20755__auto___21331,jobs,results,process,async))
})();
var state__20757__auto__ = (function (){var statearr_21234 = f__20756__auto__.call(null);
(statearr_21234[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20755__auto___21331);

return statearr_21234;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20757__auto__);
});})(c__20755__auto___21331,jobs,results,process,async))
);


var c__20755__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20755__auto__,jobs,results,process,async){
return (function (){
var f__20756__auto__ = (function (){var switch__20643__auto__ = ((function (c__20755__auto__,jobs,results,process,async){
return (function (state_21272){
var state_val_21273 = (state_21272[(1)]);
if((state_val_21273 === (7))){
var inst_21268 = (state_21272[(2)]);
var state_21272__$1 = state_21272;
var statearr_21274_21340 = state_21272__$1;
(statearr_21274_21340[(2)] = inst_21268);

(statearr_21274_21340[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21273 === (20))){
var state_21272__$1 = state_21272;
var statearr_21275_21341 = state_21272__$1;
(statearr_21275_21341[(2)] = null);

(statearr_21275_21341[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21273 === (1))){
var state_21272__$1 = state_21272;
var statearr_21276_21342 = state_21272__$1;
(statearr_21276_21342[(2)] = null);

(statearr_21276_21342[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21273 === (4))){
var inst_21237 = (state_21272[(7)]);
var inst_21237__$1 = (state_21272[(2)]);
var inst_21238 = (inst_21237__$1 == null);
var state_21272__$1 = (function (){var statearr_21277 = state_21272;
(statearr_21277[(7)] = inst_21237__$1);

return statearr_21277;
})();
if(cljs.core.truth_(inst_21238)){
var statearr_21278_21343 = state_21272__$1;
(statearr_21278_21343[(1)] = (5));

} else {
var statearr_21279_21344 = state_21272__$1;
(statearr_21279_21344[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21273 === (15))){
var inst_21250 = (state_21272[(8)]);
var state_21272__$1 = state_21272;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21272__$1,(18),to,inst_21250);
} else {
if((state_val_21273 === (21))){
var inst_21263 = (state_21272[(2)]);
var state_21272__$1 = state_21272;
var statearr_21280_21345 = state_21272__$1;
(statearr_21280_21345[(2)] = inst_21263);

(statearr_21280_21345[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21273 === (13))){
var inst_21265 = (state_21272[(2)]);
var state_21272__$1 = (function (){var statearr_21281 = state_21272;
(statearr_21281[(9)] = inst_21265);

return statearr_21281;
})();
var statearr_21282_21346 = state_21272__$1;
(statearr_21282_21346[(2)] = null);

(statearr_21282_21346[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21273 === (6))){
var inst_21237 = (state_21272[(7)]);
var state_21272__$1 = state_21272;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21272__$1,(11),inst_21237);
} else {
if((state_val_21273 === (17))){
var inst_21258 = (state_21272[(2)]);
var state_21272__$1 = state_21272;
if(cljs.core.truth_(inst_21258)){
var statearr_21283_21347 = state_21272__$1;
(statearr_21283_21347[(1)] = (19));

} else {
var statearr_21284_21348 = state_21272__$1;
(statearr_21284_21348[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21273 === (3))){
var inst_21270 = (state_21272[(2)]);
var state_21272__$1 = state_21272;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21272__$1,inst_21270);
} else {
if((state_val_21273 === (12))){
var inst_21247 = (state_21272[(10)]);
var state_21272__$1 = state_21272;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21272__$1,(14),inst_21247);
} else {
if((state_val_21273 === (2))){
var state_21272__$1 = state_21272;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21272__$1,(4),results);
} else {
if((state_val_21273 === (19))){
var state_21272__$1 = state_21272;
var statearr_21285_21349 = state_21272__$1;
(statearr_21285_21349[(2)] = null);

(statearr_21285_21349[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21273 === (11))){
var inst_21247 = (state_21272[(2)]);
var state_21272__$1 = (function (){var statearr_21286 = state_21272;
(statearr_21286[(10)] = inst_21247);

return statearr_21286;
})();
var statearr_21287_21350 = state_21272__$1;
(statearr_21287_21350[(2)] = null);

(statearr_21287_21350[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21273 === (9))){
var state_21272__$1 = state_21272;
var statearr_21288_21351 = state_21272__$1;
(statearr_21288_21351[(2)] = null);

(statearr_21288_21351[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21273 === (5))){
var state_21272__$1 = state_21272;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21289_21352 = state_21272__$1;
(statearr_21289_21352[(1)] = (8));

} else {
var statearr_21290_21353 = state_21272__$1;
(statearr_21290_21353[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21273 === (14))){
var inst_21250 = (state_21272[(8)]);
var inst_21252 = (state_21272[(11)]);
var inst_21250__$1 = (state_21272[(2)]);
var inst_21251 = (inst_21250__$1 == null);
var inst_21252__$1 = cljs.core.not.call(null,inst_21251);
var state_21272__$1 = (function (){var statearr_21291 = state_21272;
(statearr_21291[(8)] = inst_21250__$1);

(statearr_21291[(11)] = inst_21252__$1);

return statearr_21291;
})();
if(inst_21252__$1){
var statearr_21292_21354 = state_21272__$1;
(statearr_21292_21354[(1)] = (15));

} else {
var statearr_21293_21355 = state_21272__$1;
(statearr_21293_21355[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21273 === (16))){
var inst_21252 = (state_21272[(11)]);
var state_21272__$1 = state_21272;
var statearr_21294_21356 = state_21272__$1;
(statearr_21294_21356[(2)] = inst_21252);

(statearr_21294_21356[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21273 === (10))){
var inst_21244 = (state_21272[(2)]);
var state_21272__$1 = state_21272;
var statearr_21295_21357 = state_21272__$1;
(statearr_21295_21357[(2)] = inst_21244);

(statearr_21295_21357[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21273 === (18))){
var inst_21255 = (state_21272[(2)]);
var state_21272__$1 = state_21272;
var statearr_21296_21358 = state_21272__$1;
(statearr_21296_21358[(2)] = inst_21255);

(statearr_21296_21358[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21273 === (8))){
var inst_21241 = cljs.core.async.close_BANG_.call(null,to);
var state_21272__$1 = state_21272;
var statearr_21297_21359 = state_21272__$1;
(statearr_21297_21359[(2)] = inst_21241);

(statearr_21297_21359[(1)] = (10));


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
}
}
}
}
});})(c__20755__auto__,jobs,results,process,async))
;
return ((function (switch__20643__auto__,c__20755__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20644__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20644__auto____0 = (function (){
var statearr_21301 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21301[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20644__auto__);

(statearr_21301[(1)] = (1));

return statearr_21301;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20644__auto____1 = (function (state_21272){
while(true){
var ret_value__20645__auto__ = (function (){try{while(true){
var result__20646__auto__ = switch__20643__auto__.call(null,state_21272);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20646__auto__;
}
break;
}
}catch (e21302){if((e21302 instanceof Object)){
var ex__20647__auto__ = e21302;
var statearr_21303_21360 = state_21272;
(statearr_21303_21360[(5)] = ex__20647__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21272);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21302;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20645__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21361 = state_21272;
state_21272 = G__21361;
continue;
} else {
return ret_value__20645__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20644__auto__ = function(state_21272){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20644__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20644__auto____1.call(this,state_21272);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20644__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20644__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20644__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20644__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20644__auto__;
})()
;})(switch__20643__auto__,c__20755__auto__,jobs,results,process,async))
})();
var state__20757__auto__ = (function (){var statearr_21304 = f__20756__auto__.call(null);
(statearr_21304[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20755__auto__);

return statearr_21304;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20757__auto__);
});})(c__20755__auto__,jobs,results,process,async))
);

return c__20755__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args21362 = [];
var len__17829__auto___21365 = arguments.length;
var i__17830__auto___21366 = (0);
while(true){
if((i__17830__auto___21366 < len__17829__auto___21365)){
args21362.push((arguments[i__17830__auto___21366]));

var G__21367 = (i__17830__auto___21366 + (1));
i__17830__auto___21366 = G__21367;
continue;
} else {
}
break;
}

var G__21364 = args21362.length;
switch (G__21364) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21362.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args21369 = [];
var len__17829__auto___21372 = arguments.length;
var i__17830__auto___21373 = (0);
while(true){
if((i__17830__auto___21373 < len__17829__auto___21372)){
args21369.push((arguments[i__17830__auto___21373]));

var G__21374 = (i__17830__auto___21373 + (1));
i__17830__auto___21373 = G__21374;
continue;
} else {
}
break;
}

var G__21371 = args21369.length;
switch (G__21371) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21369.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args21376 = [];
var len__17829__auto___21429 = arguments.length;
var i__17830__auto___21430 = (0);
while(true){
if((i__17830__auto___21430 < len__17829__auto___21429)){
args21376.push((arguments[i__17830__auto___21430]));

var G__21431 = (i__17830__auto___21430 + (1));
i__17830__auto___21430 = G__21431;
continue;
} else {
}
break;
}

var G__21378 = args21376.length;
switch (G__21378) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21376.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__20755__auto___21433 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20755__auto___21433,tc,fc){
return (function (){
var f__20756__auto__ = (function (){var switch__20643__auto__ = ((function (c__20755__auto___21433,tc,fc){
return (function (state_21404){
var state_val_21405 = (state_21404[(1)]);
if((state_val_21405 === (7))){
var inst_21400 = (state_21404[(2)]);
var state_21404__$1 = state_21404;
var statearr_21406_21434 = state_21404__$1;
(statearr_21406_21434[(2)] = inst_21400);

(statearr_21406_21434[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21405 === (1))){
var state_21404__$1 = state_21404;
var statearr_21407_21435 = state_21404__$1;
(statearr_21407_21435[(2)] = null);

(statearr_21407_21435[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21405 === (4))){
var inst_21381 = (state_21404[(7)]);
var inst_21381__$1 = (state_21404[(2)]);
var inst_21382 = (inst_21381__$1 == null);
var state_21404__$1 = (function (){var statearr_21408 = state_21404;
(statearr_21408[(7)] = inst_21381__$1);

return statearr_21408;
})();
if(cljs.core.truth_(inst_21382)){
var statearr_21409_21436 = state_21404__$1;
(statearr_21409_21436[(1)] = (5));

} else {
var statearr_21410_21437 = state_21404__$1;
(statearr_21410_21437[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21405 === (13))){
var state_21404__$1 = state_21404;
var statearr_21411_21438 = state_21404__$1;
(statearr_21411_21438[(2)] = null);

(statearr_21411_21438[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21405 === (6))){
var inst_21381 = (state_21404[(7)]);
var inst_21387 = p.call(null,inst_21381);
var state_21404__$1 = state_21404;
if(cljs.core.truth_(inst_21387)){
var statearr_21412_21439 = state_21404__$1;
(statearr_21412_21439[(1)] = (9));

} else {
var statearr_21413_21440 = state_21404__$1;
(statearr_21413_21440[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21405 === (3))){
var inst_21402 = (state_21404[(2)]);
var state_21404__$1 = state_21404;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21404__$1,inst_21402);
} else {
if((state_val_21405 === (12))){
var state_21404__$1 = state_21404;
var statearr_21414_21441 = state_21404__$1;
(statearr_21414_21441[(2)] = null);

(statearr_21414_21441[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21405 === (2))){
var state_21404__$1 = state_21404;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21404__$1,(4),ch);
} else {
if((state_val_21405 === (11))){
var inst_21381 = (state_21404[(7)]);
var inst_21391 = (state_21404[(2)]);
var state_21404__$1 = state_21404;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21404__$1,(8),inst_21391,inst_21381);
} else {
if((state_val_21405 === (9))){
var state_21404__$1 = state_21404;
var statearr_21415_21442 = state_21404__$1;
(statearr_21415_21442[(2)] = tc);

(statearr_21415_21442[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21405 === (5))){
var inst_21384 = cljs.core.async.close_BANG_.call(null,tc);
var inst_21385 = cljs.core.async.close_BANG_.call(null,fc);
var state_21404__$1 = (function (){var statearr_21416 = state_21404;
(statearr_21416[(8)] = inst_21384);

return statearr_21416;
})();
var statearr_21417_21443 = state_21404__$1;
(statearr_21417_21443[(2)] = inst_21385);

(statearr_21417_21443[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21405 === (14))){
var inst_21398 = (state_21404[(2)]);
var state_21404__$1 = state_21404;
var statearr_21418_21444 = state_21404__$1;
(statearr_21418_21444[(2)] = inst_21398);

(statearr_21418_21444[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21405 === (10))){
var state_21404__$1 = state_21404;
var statearr_21419_21445 = state_21404__$1;
(statearr_21419_21445[(2)] = fc);

(statearr_21419_21445[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21405 === (8))){
var inst_21393 = (state_21404[(2)]);
var state_21404__$1 = state_21404;
if(cljs.core.truth_(inst_21393)){
var statearr_21420_21446 = state_21404__$1;
(statearr_21420_21446[(1)] = (12));

} else {
var statearr_21421_21447 = state_21404__$1;
(statearr_21421_21447[(1)] = (13));

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
});})(c__20755__auto___21433,tc,fc))
;
return ((function (switch__20643__auto__,c__20755__auto___21433,tc,fc){
return (function() {
var cljs$core$async$state_machine__20644__auto__ = null;
var cljs$core$async$state_machine__20644__auto____0 = (function (){
var statearr_21425 = [null,null,null,null,null,null,null,null,null];
(statearr_21425[(0)] = cljs$core$async$state_machine__20644__auto__);

(statearr_21425[(1)] = (1));

return statearr_21425;
});
var cljs$core$async$state_machine__20644__auto____1 = (function (state_21404){
while(true){
var ret_value__20645__auto__ = (function (){try{while(true){
var result__20646__auto__ = switch__20643__auto__.call(null,state_21404);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20646__auto__;
}
break;
}
}catch (e21426){if((e21426 instanceof Object)){
var ex__20647__auto__ = e21426;
var statearr_21427_21448 = state_21404;
(statearr_21427_21448[(5)] = ex__20647__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21404);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21426;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20645__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21449 = state_21404;
state_21404 = G__21449;
continue;
} else {
return ret_value__20645__auto__;
}
break;
}
});
cljs$core$async$state_machine__20644__auto__ = function(state_21404){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20644__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20644__auto____1.call(this,state_21404);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20644__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20644__auto____0;
cljs$core$async$state_machine__20644__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20644__auto____1;
return cljs$core$async$state_machine__20644__auto__;
})()
;})(switch__20643__auto__,c__20755__auto___21433,tc,fc))
})();
var state__20757__auto__ = (function (){var statearr_21428 = f__20756__auto__.call(null);
(statearr_21428[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20755__auto___21433);

return statearr_21428;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20757__auto__);
});})(c__20755__auto___21433,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__20755__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20755__auto__){
return (function (){
var f__20756__auto__ = (function (){var switch__20643__auto__ = ((function (c__20755__auto__){
return (function (state_21513){
var state_val_21514 = (state_21513[(1)]);
if((state_val_21514 === (7))){
var inst_21509 = (state_21513[(2)]);
var state_21513__$1 = state_21513;
var statearr_21515_21536 = state_21513__$1;
(statearr_21515_21536[(2)] = inst_21509);

(statearr_21515_21536[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21514 === (1))){
var inst_21493 = init;
var state_21513__$1 = (function (){var statearr_21516 = state_21513;
(statearr_21516[(7)] = inst_21493);

return statearr_21516;
})();
var statearr_21517_21537 = state_21513__$1;
(statearr_21517_21537[(2)] = null);

(statearr_21517_21537[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21514 === (4))){
var inst_21496 = (state_21513[(8)]);
var inst_21496__$1 = (state_21513[(2)]);
var inst_21497 = (inst_21496__$1 == null);
var state_21513__$1 = (function (){var statearr_21518 = state_21513;
(statearr_21518[(8)] = inst_21496__$1);

return statearr_21518;
})();
if(cljs.core.truth_(inst_21497)){
var statearr_21519_21538 = state_21513__$1;
(statearr_21519_21538[(1)] = (5));

} else {
var statearr_21520_21539 = state_21513__$1;
(statearr_21520_21539[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21514 === (6))){
var inst_21496 = (state_21513[(8)]);
var inst_21493 = (state_21513[(7)]);
var inst_21500 = (state_21513[(9)]);
var inst_21500__$1 = f.call(null,inst_21493,inst_21496);
var inst_21501 = cljs.core.reduced_QMARK_.call(null,inst_21500__$1);
var state_21513__$1 = (function (){var statearr_21521 = state_21513;
(statearr_21521[(9)] = inst_21500__$1);

return statearr_21521;
})();
if(inst_21501){
var statearr_21522_21540 = state_21513__$1;
(statearr_21522_21540[(1)] = (8));

} else {
var statearr_21523_21541 = state_21513__$1;
(statearr_21523_21541[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21514 === (3))){
var inst_21511 = (state_21513[(2)]);
var state_21513__$1 = state_21513;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21513__$1,inst_21511);
} else {
if((state_val_21514 === (2))){
var state_21513__$1 = state_21513;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21513__$1,(4),ch);
} else {
if((state_val_21514 === (9))){
var inst_21500 = (state_21513[(9)]);
var inst_21493 = inst_21500;
var state_21513__$1 = (function (){var statearr_21524 = state_21513;
(statearr_21524[(7)] = inst_21493);

return statearr_21524;
})();
var statearr_21525_21542 = state_21513__$1;
(statearr_21525_21542[(2)] = null);

(statearr_21525_21542[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21514 === (5))){
var inst_21493 = (state_21513[(7)]);
var state_21513__$1 = state_21513;
var statearr_21526_21543 = state_21513__$1;
(statearr_21526_21543[(2)] = inst_21493);

(statearr_21526_21543[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21514 === (10))){
var inst_21507 = (state_21513[(2)]);
var state_21513__$1 = state_21513;
var statearr_21527_21544 = state_21513__$1;
(statearr_21527_21544[(2)] = inst_21507);

(statearr_21527_21544[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21514 === (8))){
var inst_21500 = (state_21513[(9)]);
var inst_21503 = cljs.core.deref.call(null,inst_21500);
var state_21513__$1 = state_21513;
var statearr_21528_21545 = state_21513__$1;
(statearr_21528_21545[(2)] = inst_21503);

(statearr_21528_21545[(1)] = (10));


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
});})(c__20755__auto__))
;
return ((function (switch__20643__auto__,c__20755__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__20644__auto__ = null;
var cljs$core$async$reduce_$_state_machine__20644__auto____0 = (function (){
var statearr_21532 = [null,null,null,null,null,null,null,null,null,null];
(statearr_21532[(0)] = cljs$core$async$reduce_$_state_machine__20644__auto__);

(statearr_21532[(1)] = (1));

return statearr_21532;
});
var cljs$core$async$reduce_$_state_machine__20644__auto____1 = (function (state_21513){
while(true){
var ret_value__20645__auto__ = (function (){try{while(true){
var result__20646__auto__ = switch__20643__auto__.call(null,state_21513);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20646__auto__;
}
break;
}
}catch (e21533){if((e21533 instanceof Object)){
var ex__20647__auto__ = e21533;
var statearr_21534_21546 = state_21513;
(statearr_21534_21546[(5)] = ex__20647__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21513);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21533;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20645__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21547 = state_21513;
state_21513 = G__21547;
continue;
} else {
return ret_value__20645__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__20644__auto__ = function(state_21513){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__20644__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__20644__auto____1.call(this,state_21513);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__20644__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__20644__auto____0;
cljs$core$async$reduce_$_state_machine__20644__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__20644__auto____1;
return cljs$core$async$reduce_$_state_machine__20644__auto__;
})()
;})(switch__20643__auto__,c__20755__auto__))
})();
var state__20757__auto__ = (function (){var statearr_21535 = f__20756__auto__.call(null);
(statearr_21535[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20755__auto__);

return statearr_21535;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20757__auto__);
});})(c__20755__auto__))
);

return c__20755__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args21548 = [];
var len__17829__auto___21600 = arguments.length;
var i__17830__auto___21601 = (0);
while(true){
if((i__17830__auto___21601 < len__17829__auto___21600)){
args21548.push((arguments[i__17830__auto___21601]));

var G__21602 = (i__17830__auto___21601 + (1));
i__17830__auto___21601 = G__21602;
continue;
} else {
}
break;
}

var G__21550 = args21548.length;
switch (G__21550) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21548.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__20755__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20755__auto__){
return (function (){
var f__20756__auto__ = (function (){var switch__20643__auto__ = ((function (c__20755__auto__){
return (function (state_21575){
var state_val_21576 = (state_21575[(1)]);
if((state_val_21576 === (7))){
var inst_21557 = (state_21575[(2)]);
var state_21575__$1 = state_21575;
var statearr_21577_21604 = state_21575__$1;
(statearr_21577_21604[(2)] = inst_21557);

(statearr_21577_21604[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21576 === (1))){
var inst_21551 = cljs.core.seq.call(null,coll);
var inst_21552 = inst_21551;
var state_21575__$1 = (function (){var statearr_21578 = state_21575;
(statearr_21578[(7)] = inst_21552);

return statearr_21578;
})();
var statearr_21579_21605 = state_21575__$1;
(statearr_21579_21605[(2)] = null);

(statearr_21579_21605[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21576 === (4))){
var inst_21552 = (state_21575[(7)]);
var inst_21555 = cljs.core.first.call(null,inst_21552);
var state_21575__$1 = state_21575;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21575__$1,(7),ch,inst_21555);
} else {
if((state_val_21576 === (13))){
var inst_21569 = (state_21575[(2)]);
var state_21575__$1 = state_21575;
var statearr_21580_21606 = state_21575__$1;
(statearr_21580_21606[(2)] = inst_21569);

(statearr_21580_21606[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21576 === (6))){
var inst_21560 = (state_21575[(2)]);
var state_21575__$1 = state_21575;
if(cljs.core.truth_(inst_21560)){
var statearr_21581_21607 = state_21575__$1;
(statearr_21581_21607[(1)] = (8));

} else {
var statearr_21582_21608 = state_21575__$1;
(statearr_21582_21608[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21576 === (3))){
var inst_21573 = (state_21575[(2)]);
var state_21575__$1 = state_21575;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21575__$1,inst_21573);
} else {
if((state_val_21576 === (12))){
var state_21575__$1 = state_21575;
var statearr_21583_21609 = state_21575__$1;
(statearr_21583_21609[(2)] = null);

(statearr_21583_21609[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21576 === (2))){
var inst_21552 = (state_21575[(7)]);
var state_21575__$1 = state_21575;
if(cljs.core.truth_(inst_21552)){
var statearr_21584_21610 = state_21575__$1;
(statearr_21584_21610[(1)] = (4));

} else {
var statearr_21585_21611 = state_21575__$1;
(statearr_21585_21611[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21576 === (11))){
var inst_21566 = cljs.core.async.close_BANG_.call(null,ch);
var state_21575__$1 = state_21575;
var statearr_21586_21612 = state_21575__$1;
(statearr_21586_21612[(2)] = inst_21566);

(statearr_21586_21612[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21576 === (9))){
var state_21575__$1 = state_21575;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21587_21613 = state_21575__$1;
(statearr_21587_21613[(1)] = (11));

} else {
var statearr_21588_21614 = state_21575__$1;
(statearr_21588_21614[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21576 === (5))){
var inst_21552 = (state_21575[(7)]);
var state_21575__$1 = state_21575;
var statearr_21589_21615 = state_21575__$1;
(statearr_21589_21615[(2)] = inst_21552);

(statearr_21589_21615[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21576 === (10))){
var inst_21571 = (state_21575[(2)]);
var state_21575__$1 = state_21575;
var statearr_21590_21616 = state_21575__$1;
(statearr_21590_21616[(2)] = inst_21571);

(statearr_21590_21616[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21576 === (8))){
var inst_21552 = (state_21575[(7)]);
var inst_21562 = cljs.core.next.call(null,inst_21552);
var inst_21552__$1 = inst_21562;
var state_21575__$1 = (function (){var statearr_21591 = state_21575;
(statearr_21591[(7)] = inst_21552__$1);

return statearr_21591;
})();
var statearr_21592_21617 = state_21575__$1;
(statearr_21592_21617[(2)] = null);

(statearr_21592_21617[(1)] = (2));


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
});})(c__20755__auto__))
;
return ((function (switch__20643__auto__,c__20755__auto__){
return (function() {
var cljs$core$async$state_machine__20644__auto__ = null;
var cljs$core$async$state_machine__20644__auto____0 = (function (){
var statearr_21596 = [null,null,null,null,null,null,null,null];
(statearr_21596[(0)] = cljs$core$async$state_machine__20644__auto__);

(statearr_21596[(1)] = (1));

return statearr_21596;
});
var cljs$core$async$state_machine__20644__auto____1 = (function (state_21575){
while(true){
var ret_value__20645__auto__ = (function (){try{while(true){
var result__20646__auto__ = switch__20643__auto__.call(null,state_21575);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20646__auto__;
}
break;
}
}catch (e21597){if((e21597 instanceof Object)){
var ex__20647__auto__ = e21597;
var statearr_21598_21618 = state_21575;
(statearr_21598_21618[(5)] = ex__20647__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21575);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21597;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20645__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21619 = state_21575;
state_21575 = G__21619;
continue;
} else {
return ret_value__20645__auto__;
}
break;
}
});
cljs$core$async$state_machine__20644__auto__ = function(state_21575){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20644__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20644__auto____1.call(this,state_21575);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20644__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20644__auto____0;
cljs$core$async$state_machine__20644__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20644__auto____1;
return cljs$core$async$state_machine__20644__auto__;
})()
;})(switch__20643__auto__,c__20755__auto__))
})();
var state__20757__auto__ = (function (){var statearr_21599 = f__20756__auto__.call(null);
(statearr_21599[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20755__auto__);

return statearr_21599;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20757__auto__);
});})(c__20755__auto__))
);

return c__20755__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__17426__auto__ = (((_ == null))?null:_);
var m__17427__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__17426__auto__)]);
if(!((m__17427__auto__ == null))){
return m__17427__auto__.call(null,_);
} else {
var m__17427__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__17427__auto____$1 == null))){
return m__17427__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__17426__auto__ = (((m == null))?null:m);
var m__17427__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__17426__auto__)]);
if(!((m__17427__auto__ == null))){
return m__17427__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__17427__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__17427__auto____$1 == null))){
return m__17427__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__17426__auto__ = (((m == null))?null:m);
var m__17427__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__17426__auto__)]);
if(!((m__17427__auto__ == null))){
return m__17427__auto__.call(null,m,ch);
} else {
var m__17427__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__17427__auto____$1 == null))){
return m__17427__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__17426__auto__ = (((m == null))?null:m);
var m__17427__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__17426__auto__)]);
if(!((m__17427__auto__ == null))){
return m__17427__auto__.call(null,m);
} else {
var m__17427__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__17427__auto____$1 == null))){
return m__17427__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async21841 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21841 = (function (mult,ch,cs,meta21842){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta21842 = meta21842;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21841.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_21843,meta21842__$1){
var self__ = this;
var _21843__$1 = this;
return (new cljs.core.async.t_cljs$core$async21841(self__.mult,self__.ch,self__.cs,meta21842__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async21841.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_21843){
var self__ = this;
var _21843__$1 = this;
return self__.meta21842;
});})(cs))
;

cljs.core.async.t_cljs$core$async21841.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async21841.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async21841.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async21841.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async21841.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async21841.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async21841.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta21842","meta21842",187901250,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async21841.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21841.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21841";

cljs.core.async.t_cljs$core$async21841.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__17369__auto__,writer__17370__auto__,opt__17371__auto__){
return cljs.core._write.call(null,writer__17370__auto__,"cljs.core.async/t_cljs$core$async21841");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async21841 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async21841(mult__$1,ch__$1,cs__$1,meta21842){
return (new cljs.core.async.t_cljs$core$async21841(mult__$1,ch__$1,cs__$1,meta21842));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async21841(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__20755__auto___22062 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20755__auto___22062,cs,m,dchan,dctr,done){
return (function (){
var f__20756__auto__ = (function (){var switch__20643__auto__ = ((function (c__20755__auto___22062,cs,m,dchan,dctr,done){
return (function (state_21974){
var state_val_21975 = (state_21974[(1)]);
if((state_val_21975 === (7))){
var inst_21970 = (state_21974[(2)]);
var state_21974__$1 = state_21974;
var statearr_21976_22063 = state_21974__$1;
(statearr_21976_22063[(2)] = inst_21970);

(statearr_21976_22063[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21975 === (20))){
var inst_21875 = (state_21974[(7)]);
var inst_21885 = cljs.core.first.call(null,inst_21875);
var inst_21886 = cljs.core.nth.call(null,inst_21885,(0),null);
var inst_21887 = cljs.core.nth.call(null,inst_21885,(1),null);
var state_21974__$1 = (function (){var statearr_21977 = state_21974;
(statearr_21977[(8)] = inst_21886);

return statearr_21977;
})();
if(cljs.core.truth_(inst_21887)){
var statearr_21978_22064 = state_21974__$1;
(statearr_21978_22064[(1)] = (22));

} else {
var statearr_21979_22065 = state_21974__$1;
(statearr_21979_22065[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21975 === (27))){
var inst_21846 = (state_21974[(9)]);
var inst_21915 = (state_21974[(10)]);
var inst_21917 = (state_21974[(11)]);
var inst_21922 = (state_21974[(12)]);
var inst_21922__$1 = cljs.core._nth.call(null,inst_21915,inst_21917);
var inst_21923 = cljs.core.async.put_BANG_.call(null,inst_21922__$1,inst_21846,done);
var state_21974__$1 = (function (){var statearr_21980 = state_21974;
(statearr_21980[(12)] = inst_21922__$1);

return statearr_21980;
})();
if(cljs.core.truth_(inst_21923)){
var statearr_21981_22066 = state_21974__$1;
(statearr_21981_22066[(1)] = (30));

} else {
var statearr_21982_22067 = state_21974__$1;
(statearr_21982_22067[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21975 === (1))){
var state_21974__$1 = state_21974;
var statearr_21983_22068 = state_21974__$1;
(statearr_21983_22068[(2)] = null);

(statearr_21983_22068[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21975 === (24))){
var inst_21875 = (state_21974[(7)]);
var inst_21892 = (state_21974[(2)]);
var inst_21893 = cljs.core.next.call(null,inst_21875);
var inst_21855 = inst_21893;
var inst_21856 = null;
var inst_21857 = (0);
var inst_21858 = (0);
var state_21974__$1 = (function (){var statearr_21984 = state_21974;
(statearr_21984[(13)] = inst_21856);

(statearr_21984[(14)] = inst_21857);

(statearr_21984[(15)] = inst_21855);

(statearr_21984[(16)] = inst_21892);

(statearr_21984[(17)] = inst_21858);

return statearr_21984;
})();
var statearr_21985_22069 = state_21974__$1;
(statearr_21985_22069[(2)] = null);

(statearr_21985_22069[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21975 === (39))){
var state_21974__$1 = state_21974;
var statearr_21989_22070 = state_21974__$1;
(statearr_21989_22070[(2)] = null);

(statearr_21989_22070[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21975 === (4))){
var inst_21846 = (state_21974[(9)]);
var inst_21846__$1 = (state_21974[(2)]);
var inst_21847 = (inst_21846__$1 == null);
var state_21974__$1 = (function (){var statearr_21990 = state_21974;
(statearr_21990[(9)] = inst_21846__$1);

return statearr_21990;
})();
if(cljs.core.truth_(inst_21847)){
var statearr_21991_22071 = state_21974__$1;
(statearr_21991_22071[(1)] = (5));

} else {
var statearr_21992_22072 = state_21974__$1;
(statearr_21992_22072[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21975 === (15))){
var inst_21856 = (state_21974[(13)]);
var inst_21857 = (state_21974[(14)]);
var inst_21855 = (state_21974[(15)]);
var inst_21858 = (state_21974[(17)]);
var inst_21871 = (state_21974[(2)]);
var inst_21872 = (inst_21858 + (1));
var tmp21986 = inst_21856;
var tmp21987 = inst_21857;
var tmp21988 = inst_21855;
var inst_21855__$1 = tmp21988;
var inst_21856__$1 = tmp21986;
var inst_21857__$1 = tmp21987;
var inst_21858__$1 = inst_21872;
var state_21974__$1 = (function (){var statearr_21993 = state_21974;
(statearr_21993[(13)] = inst_21856__$1);

(statearr_21993[(18)] = inst_21871);

(statearr_21993[(14)] = inst_21857__$1);

(statearr_21993[(15)] = inst_21855__$1);

(statearr_21993[(17)] = inst_21858__$1);

return statearr_21993;
})();
var statearr_21994_22073 = state_21974__$1;
(statearr_21994_22073[(2)] = null);

(statearr_21994_22073[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21975 === (21))){
var inst_21896 = (state_21974[(2)]);
var state_21974__$1 = state_21974;
var statearr_21998_22074 = state_21974__$1;
(statearr_21998_22074[(2)] = inst_21896);

(statearr_21998_22074[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21975 === (31))){
var inst_21922 = (state_21974[(12)]);
var inst_21926 = done.call(null,null);
var inst_21927 = cljs.core.async.untap_STAR_.call(null,m,inst_21922);
var state_21974__$1 = (function (){var statearr_21999 = state_21974;
(statearr_21999[(19)] = inst_21926);

return statearr_21999;
})();
var statearr_22000_22075 = state_21974__$1;
(statearr_22000_22075[(2)] = inst_21927);

(statearr_22000_22075[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21975 === (32))){
var inst_21914 = (state_21974[(20)]);
var inst_21915 = (state_21974[(10)]);
var inst_21917 = (state_21974[(11)]);
var inst_21916 = (state_21974[(21)]);
var inst_21929 = (state_21974[(2)]);
var inst_21930 = (inst_21917 + (1));
var tmp21995 = inst_21914;
var tmp21996 = inst_21915;
var tmp21997 = inst_21916;
var inst_21914__$1 = tmp21995;
var inst_21915__$1 = tmp21996;
var inst_21916__$1 = tmp21997;
var inst_21917__$1 = inst_21930;
var state_21974__$1 = (function (){var statearr_22001 = state_21974;
(statearr_22001[(22)] = inst_21929);

(statearr_22001[(20)] = inst_21914__$1);

(statearr_22001[(10)] = inst_21915__$1);

(statearr_22001[(11)] = inst_21917__$1);

(statearr_22001[(21)] = inst_21916__$1);

return statearr_22001;
})();
var statearr_22002_22076 = state_21974__$1;
(statearr_22002_22076[(2)] = null);

(statearr_22002_22076[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21975 === (40))){
var inst_21942 = (state_21974[(23)]);
var inst_21946 = done.call(null,null);
var inst_21947 = cljs.core.async.untap_STAR_.call(null,m,inst_21942);
var state_21974__$1 = (function (){var statearr_22003 = state_21974;
(statearr_22003[(24)] = inst_21946);

return statearr_22003;
})();
var statearr_22004_22077 = state_21974__$1;
(statearr_22004_22077[(2)] = inst_21947);

(statearr_22004_22077[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21975 === (33))){
var inst_21933 = (state_21974[(25)]);
var inst_21935 = cljs.core.chunked_seq_QMARK_.call(null,inst_21933);
var state_21974__$1 = state_21974;
if(inst_21935){
var statearr_22005_22078 = state_21974__$1;
(statearr_22005_22078[(1)] = (36));

} else {
var statearr_22006_22079 = state_21974__$1;
(statearr_22006_22079[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21975 === (13))){
var inst_21865 = (state_21974[(26)]);
var inst_21868 = cljs.core.async.close_BANG_.call(null,inst_21865);
var state_21974__$1 = state_21974;
var statearr_22007_22080 = state_21974__$1;
(statearr_22007_22080[(2)] = inst_21868);

(statearr_22007_22080[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21975 === (22))){
var inst_21886 = (state_21974[(8)]);
var inst_21889 = cljs.core.async.close_BANG_.call(null,inst_21886);
var state_21974__$1 = state_21974;
var statearr_22008_22081 = state_21974__$1;
(statearr_22008_22081[(2)] = inst_21889);

(statearr_22008_22081[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21975 === (36))){
var inst_21933 = (state_21974[(25)]);
var inst_21937 = cljs.core.chunk_first.call(null,inst_21933);
var inst_21938 = cljs.core.chunk_rest.call(null,inst_21933);
var inst_21939 = cljs.core.count.call(null,inst_21937);
var inst_21914 = inst_21938;
var inst_21915 = inst_21937;
var inst_21916 = inst_21939;
var inst_21917 = (0);
var state_21974__$1 = (function (){var statearr_22009 = state_21974;
(statearr_22009[(20)] = inst_21914);

(statearr_22009[(10)] = inst_21915);

(statearr_22009[(11)] = inst_21917);

(statearr_22009[(21)] = inst_21916);

return statearr_22009;
})();
var statearr_22010_22082 = state_21974__$1;
(statearr_22010_22082[(2)] = null);

(statearr_22010_22082[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21975 === (41))){
var inst_21933 = (state_21974[(25)]);
var inst_21949 = (state_21974[(2)]);
var inst_21950 = cljs.core.next.call(null,inst_21933);
var inst_21914 = inst_21950;
var inst_21915 = null;
var inst_21916 = (0);
var inst_21917 = (0);
var state_21974__$1 = (function (){var statearr_22011 = state_21974;
(statearr_22011[(20)] = inst_21914);

(statearr_22011[(10)] = inst_21915);

(statearr_22011[(11)] = inst_21917);

(statearr_22011[(27)] = inst_21949);

(statearr_22011[(21)] = inst_21916);

return statearr_22011;
})();
var statearr_22012_22083 = state_21974__$1;
(statearr_22012_22083[(2)] = null);

(statearr_22012_22083[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21975 === (43))){
var state_21974__$1 = state_21974;
var statearr_22013_22084 = state_21974__$1;
(statearr_22013_22084[(2)] = null);

(statearr_22013_22084[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21975 === (29))){
var inst_21958 = (state_21974[(2)]);
var state_21974__$1 = state_21974;
var statearr_22014_22085 = state_21974__$1;
(statearr_22014_22085[(2)] = inst_21958);

(statearr_22014_22085[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21975 === (44))){
var inst_21967 = (state_21974[(2)]);
var state_21974__$1 = (function (){var statearr_22015 = state_21974;
(statearr_22015[(28)] = inst_21967);

return statearr_22015;
})();
var statearr_22016_22086 = state_21974__$1;
(statearr_22016_22086[(2)] = null);

(statearr_22016_22086[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21975 === (6))){
var inst_21906 = (state_21974[(29)]);
var inst_21905 = cljs.core.deref.call(null,cs);
var inst_21906__$1 = cljs.core.keys.call(null,inst_21905);
var inst_21907 = cljs.core.count.call(null,inst_21906__$1);
var inst_21908 = cljs.core.reset_BANG_.call(null,dctr,inst_21907);
var inst_21913 = cljs.core.seq.call(null,inst_21906__$1);
var inst_21914 = inst_21913;
var inst_21915 = null;
var inst_21916 = (0);
var inst_21917 = (0);
var state_21974__$1 = (function (){var statearr_22017 = state_21974;
(statearr_22017[(30)] = inst_21908);

(statearr_22017[(20)] = inst_21914);

(statearr_22017[(10)] = inst_21915);

(statearr_22017[(29)] = inst_21906__$1);

(statearr_22017[(11)] = inst_21917);

(statearr_22017[(21)] = inst_21916);

return statearr_22017;
})();
var statearr_22018_22087 = state_21974__$1;
(statearr_22018_22087[(2)] = null);

(statearr_22018_22087[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21975 === (28))){
var inst_21914 = (state_21974[(20)]);
var inst_21933 = (state_21974[(25)]);
var inst_21933__$1 = cljs.core.seq.call(null,inst_21914);
var state_21974__$1 = (function (){var statearr_22019 = state_21974;
(statearr_22019[(25)] = inst_21933__$1);

return statearr_22019;
})();
if(inst_21933__$1){
var statearr_22020_22088 = state_21974__$1;
(statearr_22020_22088[(1)] = (33));

} else {
var statearr_22021_22089 = state_21974__$1;
(statearr_22021_22089[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21975 === (25))){
var inst_21917 = (state_21974[(11)]);
var inst_21916 = (state_21974[(21)]);
var inst_21919 = (inst_21917 < inst_21916);
var inst_21920 = inst_21919;
var state_21974__$1 = state_21974;
if(cljs.core.truth_(inst_21920)){
var statearr_22022_22090 = state_21974__$1;
(statearr_22022_22090[(1)] = (27));

} else {
var statearr_22023_22091 = state_21974__$1;
(statearr_22023_22091[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21975 === (34))){
var state_21974__$1 = state_21974;
var statearr_22024_22092 = state_21974__$1;
(statearr_22024_22092[(2)] = null);

(statearr_22024_22092[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21975 === (17))){
var state_21974__$1 = state_21974;
var statearr_22025_22093 = state_21974__$1;
(statearr_22025_22093[(2)] = null);

(statearr_22025_22093[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21975 === (3))){
var inst_21972 = (state_21974[(2)]);
var state_21974__$1 = state_21974;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21974__$1,inst_21972);
} else {
if((state_val_21975 === (12))){
var inst_21901 = (state_21974[(2)]);
var state_21974__$1 = state_21974;
var statearr_22026_22094 = state_21974__$1;
(statearr_22026_22094[(2)] = inst_21901);

(statearr_22026_22094[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21975 === (2))){
var state_21974__$1 = state_21974;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21974__$1,(4),ch);
} else {
if((state_val_21975 === (23))){
var state_21974__$1 = state_21974;
var statearr_22027_22095 = state_21974__$1;
(statearr_22027_22095[(2)] = null);

(statearr_22027_22095[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21975 === (35))){
var inst_21956 = (state_21974[(2)]);
var state_21974__$1 = state_21974;
var statearr_22028_22096 = state_21974__$1;
(statearr_22028_22096[(2)] = inst_21956);

(statearr_22028_22096[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21975 === (19))){
var inst_21875 = (state_21974[(7)]);
var inst_21879 = cljs.core.chunk_first.call(null,inst_21875);
var inst_21880 = cljs.core.chunk_rest.call(null,inst_21875);
var inst_21881 = cljs.core.count.call(null,inst_21879);
var inst_21855 = inst_21880;
var inst_21856 = inst_21879;
var inst_21857 = inst_21881;
var inst_21858 = (0);
var state_21974__$1 = (function (){var statearr_22029 = state_21974;
(statearr_22029[(13)] = inst_21856);

(statearr_22029[(14)] = inst_21857);

(statearr_22029[(15)] = inst_21855);

(statearr_22029[(17)] = inst_21858);

return statearr_22029;
})();
var statearr_22030_22097 = state_21974__$1;
(statearr_22030_22097[(2)] = null);

(statearr_22030_22097[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21975 === (11))){
var inst_21875 = (state_21974[(7)]);
var inst_21855 = (state_21974[(15)]);
var inst_21875__$1 = cljs.core.seq.call(null,inst_21855);
var state_21974__$1 = (function (){var statearr_22031 = state_21974;
(statearr_22031[(7)] = inst_21875__$1);

return statearr_22031;
})();
if(inst_21875__$1){
var statearr_22032_22098 = state_21974__$1;
(statearr_22032_22098[(1)] = (16));

} else {
var statearr_22033_22099 = state_21974__$1;
(statearr_22033_22099[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21975 === (9))){
var inst_21903 = (state_21974[(2)]);
var state_21974__$1 = state_21974;
var statearr_22034_22100 = state_21974__$1;
(statearr_22034_22100[(2)] = inst_21903);

(statearr_22034_22100[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21975 === (5))){
var inst_21853 = cljs.core.deref.call(null,cs);
var inst_21854 = cljs.core.seq.call(null,inst_21853);
var inst_21855 = inst_21854;
var inst_21856 = null;
var inst_21857 = (0);
var inst_21858 = (0);
var state_21974__$1 = (function (){var statearr_22035 = state_21974;
(statearr_22035[(13)] = inst_21856);

(statearr_22035[(14)] = inst_21857);

(statearr_22035[(15)] = inst_21855);

(statearr_22035[(17)] = inst_21858);

return statearr_22035;
})();
var statearr_22036_22101 = state_21974__$1;
(statearr_22036_22101[(2)] = null);

(statearr_22036_22101[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21975 === (14))){
var state_21974__$1 = state_21974;
var statearr_22037_22102 = state_21974__$1;
(statearr_22037_22102[(2)] = null);

(statearr_22037_22102[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21975 === (45))){
var inst_21964 = (state_21974[(2)]);
var state_21974__$1 = state_21974;
var statearr_22038_22103 = state_21974__$1;
(statearr_22038_22103[(2)] = inst_21964);

(statearr_22038_22103[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21975 === (26))){
var inst_21906 = (state_21974[(29)]);
var inst_21960 = (state_21974[(2)]);
var inst_21961 = cljs.core.seq.call(null,inst_21906);
var state_21974__$1 = (function (){var statearr_22039 = state_21974;
(statearr_22039[(31)] = inst_21960);

return statearr_22039;
})();
if(inst_21961){
var statearr_22040_22104 = state_21974__$1;
(statearr_22040_22104[(1)] = (42));

} else {
var statearr_22041_22105 = state_21974__$1;
(statearr_22041_22105[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21975 === (16))){
var inst_21875 = (state_21974[(7)]);
var inst_21877 = cljs.core.chunked_seq_QMARK_.call(null,inst_21875);
var state_21974__$1 = state_21974;
if(inst_21877){
var statearr_22042_22106 = state_21974__$1;
(statearr_22042_22106[(1)] = (19));

} else {
var statearr_22043_22107 = state_21974__$1;
(statearr_22043_22107[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21975 === (38))){
var inst_21953 = (state_21974[(2)]);
var state_21974__$1 = state_21974;
var statearr_22044_22108 = state_21974__$1;
(statearr_22044_22108[(2)] = inst_21953);

(statearr_22044_22108[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21975 === (30))){
var state_21974__$1 = state_21974;
var statearr_22045_22109 = state_21974__$1;
(statearr_22045_22109[(2)] = null);

(statearr_22045_22109[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21975 === (10))){
var inst_21856 = (state_21974[(13)]);
var inst_21858 = (state_21974[(17)]);
var inst_21864 = cljs.core._nth.call(null,inst_21856,inst_21858);
var inst_21865 = cljs.core.nth.call(null,inst_21864,(0),null);
var inst_21866 = cljs.core.nth.call(null,inst_21864,(1),null);
var state_21974__$1 = (function (){var statearr_22046 = state_21974;
(statearr_22046[(26)] = inst_21865);

return statearr_22046;
})();
if(cljs.core.truth_(inst_21866)){
var statearr_22047_22110 = state_21974__$1;
(statearr_22047_22110[(1)] = (13));

} else {
var statearr_22048_22111 = state_21974__$1;
(statearr_22048_22111[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21975 === (18))){
var inst_21899 = (state_21974[(2)]);
var state_21974__$1 = state_21974;
var statearr_22049_22112 = state_21974__$1;
(statearr_22049_22112[(2)] = inst_21899);

(statearr_22049_22112[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21975 === (42))){
var state_21974__$1 = state_21974;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21974__$1,(45),dchan);
} else {
if((state_val_21975 === (37))){
var inst_21846 = (state_21974[(9)]);
var inst_21933 = (state_21974[(25)]);
var inst_21942 = (state_21974[(23)]);
var inst_21942__$1 = cljs.core.first.call(null,inst_21933);
var inst_21943 = cljs.core.async.put_BANG_.call(null,inst_21942__$1,inst_21846,done);
var state_21974__$1 = (function (){var statearr_22050 = state_21974;
(statearr_22050[(23)] = inst_21942__$1);

return statearr_22050;
})();
if(cljs.core.truth_(inst_21943)){
var statearr_22051_22113 = state_21974__$1;
(statearr_22051_22113[(1)] = (39));

} else {
var statearr_22052_22114 = state_21974__$1;
(statearr_22052_22114[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21975 === (8))){
var inst_21857 = (state_21974[(14)]);
var inst_21858 = (state_21974[(17)]);
var inst_21860 = (inst_21858 < inst_21857);
var inst_21861 = inst_21860;
var state_21974__$1 = state_21974;
if(cljs.core.truth_(inst_21861)){
var statearr_22053_22115 = state_21974__$1;
(statearr_22053_22115[(1)] = (10));

} else {
var statearr_22054_22116 = state_21974__$1;
(statearr_22054_22116[(1)] = (11));

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
});})(c__20755__auto___22062,cs,m,dchan,dctr,done))
;
return ((function (switch__20643__auto__,c__20755__auto___22062,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__20644__auto__ = null;
var cljs$core$async$mult_$_state_machine__20644__auto____0 = (function (){
var statearr_22058 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22058[(0)] = cljs$core$async$mult_$_state_machine__20644__auto__);

(statearr_22058[(1)] = (1));

return statearr_22058;
});
var cljs$core$async$mult_$_state_machine__20644__auto____1 = (function (state_21974){
while(true){
var ret_value__20645__auto__ = (function (){try{while(true){
var result__20646__auto__ = switch__20643__auto__.call(null,state_21974);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20646__auto__;
}
break;
}
}catch (e22059){if((e22059 instanceof Object)){
var ex__20647__auto__ = e22059;
var statearr_22060_22117 = state_21974;
(statearr_22060_22117[(5)] = ex__20647__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21974);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22059;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20645__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22118 = state_21974;
state_21974 = G__22118;
continue;
} else {
return ret_value__20645__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__20644__auto__ = function(state_21974){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__20644__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__20644__auto____1.call(this,state_21974);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__20644__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__20644__auto____0;
cljs$core$async$mult_$_state_machine__20644__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__20644__auto____1;
return cljs$core$async$mult_$_state_machine__20644__auto__;
})()
;})(switch__20643__auto__,c__20755__auto___22062,cs,m,dchan,dctr,done))
})();
var state__20757__auto__ = (function (){var statearr_22061 = f__20756__auto__.call(null);
(statearr_22061[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20755__auto___22062);

return statearr_22061;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20757__auto__);
});})(c__20755__auto___22062,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args22119 = [];
var len__17829__auto___22122 = arguments.length;
var i__17830__auto___22123 = (0);
while(true){
if((i__17830__auto___22123 < len__17829__auto___22122)){
args22119.push((arguments[i__17830__auto___22123]));

var G__22124 = (i__17830__auto___22123 + (1));
i__17830__auto___22123 = G__22124;
continue;
} else {
}
break;
}

var G__22121 = args22119.length;
switch (G__22121) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22119.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__17426__auto__ = (((m == null))?null:m);
var m__17427__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__17426__auto__)]);
if(!((m__17427__auto__ == null))){
return m__17427__auto__.call(null,m,ch);
} else {
var m__17427__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__17427__auto____$1 == null))){
return m__17427__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__17426__auto__ = (((m == null))?null:m);
var m__17427__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__17426__auto__)]);
if(!((m__17427__auto__ == null))){
return m__17427__auto__.call(null,m,ch);
} else {
var m__17427__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__17427__auto____$1 == null))){
return m__17427__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__17426__auto__ = (((m == null))?null:m);
var m__17427__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__17426__auto__)]);
if(!((m__17427__auto__ == null))){
return m__17427__auto__.call(null,m);
} else {
var m__17427__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__17427__auto____$1 == null))){
return m__17427__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__17426__auto__ = (((m == null))?null:m);
var m__17427__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__17426__auto__)]);
if(!((m__17427__auto__ == null))){
return m__17427__auto__.call(null,m,state_map);
} else {
var m__17427__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__17427__auto____$1 == null))){
return m__17427__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__17426__auto__ = (((m == null))?null:m);
var m__17427__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__17426__auto__)]);
if(!((m__17427__auto__ == null))){
return m__17427__auto__.call(null,m,mode);
} else {
var m__17427__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__17427__auto____$1 == null))){
return m__17427__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__17836__auto__ = [];
var len__17829__auto___22136 = arguments.length;
var i__17830__auto___22137 = (0);
while(true){
if((i__17830__auto___22137 < len__17829__auto___22136)){
args__17836__auto__.push((arguments[i__17830__auto___22137]));

var G__22138 = (i__17830__auto___22137 + (1));
i__17830__auto___22137 = G__22138;
continue;
} else {
}
break;
}

var argseq__17837__auto__ = ((((3) < args__17836__auto__.length))?(new cljs.core.IndexedSeq(args__17836__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17837__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__22130){
var map__22131 = p__22130;
var map__22131__$1 = ((((!((map__22131 == null)))?((((map__22131.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22131.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22131):map__22131);
var opts = map__22131__$1;
var statearr_22133_22139 = state;
(statearr_22133_22139[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__22131,map__22131__$1,opts){
return (function (val){
var statearr_22134_22140 = state;
(statearr_22134_22140[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__22131,map__22131__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_22135_22141 = state;
(statearr_22135_22141[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq22126){
var G__22127 = cljs.core.first.call(null,seq22126);
var seq22126__$1 = cljs.core.next.call(null,seq22126);
var G__22128 = cljs.core.first.call(null,seq22126__$1);
var seq22126__$2 = cljs.core.next.call(null,seq22126__$1);
var G__22129 = cljs.core.first.call(null,seq22126__$2);
var seq22126__$3 = cljs.core.next.call(null,seq22126__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__22127,G__22128,G__22129,seq22126__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async22305 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22305 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta22306){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta22306 = meta22306;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22305.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_22307,meta22306__$1){
var self__ = this;
var _22307__$1 = this;
return (new cljs.core.async.t_cljs$core$async22305(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta22306__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22305.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_22307){
var self__ = this;
var _22307__$1 = this;
return self__.meta22306;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22305.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async22305.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22305.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async22305.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22305.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22305.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22305.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22305.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22305.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta22306","meta22306",765128719,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22305.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22305.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22305";

cljs.core.async.t_cljs$core$async22305.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__17369__auto__,writer__17370__auto__,opt__17371__auto__){
return cljs.core._write.call(null,writer__17370__auto__,"cljs.core.async/t_cljs$core$async22305");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async22305 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async22305(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta22306){
return (new cljs.core.async.t_cljs$core$async22305(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta22306));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async22305(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__20755__auto___22468 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20755__auto___22468,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__20756__auto__ = (function (){var switch__20643__auto__ = ((function (c__20755__auto___22468,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_22405){
var state_val_22406 = (state_22405[(1)]);
if((state_val_22406 === (7))){
var inst_22323 = (state_22405[(2)]);
var state_22405__$1 = state_22405;
var statearr_22407_22469 = state_22405__$1;
(statearr_22407_22469[(2)] = inst_22323);

(statearr_22407_22469[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22406 === (20))){
var inst_22335 = (state_22405[(7)]);
var state_22405__$1 = state_22405;
var statearr_22408_22470 = state_22405__$1;
(statearr_22408_22470[(2)] = inst_22335);

(statearr_22408_22470[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22406 === (27))){
var state_22405__$1 = state_22405;
var statearr_22409_22471 = state_22405__$1;
(statearr_22409_22471[(2)] = null);

(statearr_22409_22471[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22406 === (1))){
var inst_22311 = (state_22405[(8)]);
var inst_22311__$1 = calc_state.call(null);
var inst_22313 = (inst_22311__$1 == null);
var inst_22314 = cljs.core.not.call(null,inst_22313);
var state_22405__$1 = (function (){var statearr_22410 = state_22405;
(statearr_22410[(8)] = inst_22311__$1);

return statearr_22410;
})();
if(inst_22314){
var statearr_22411_22472 = state_22405__$1;
(statearr_22411_22472[(1)] = (2));

} else {
var statearr_22412_22473 = state_22405__$1;
(statearr_22412_22473[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22406 === (24))){
var inst_22365 = (state_22405[(9)]);
var inst_22379 = (state_22405[(10)]);
var inst_22358 = (state_22405[(11)]);
var inst_22379__$1 = inst_22358.call(null,inst_22365);
var state_22405__$1 = (function (){var statearr_22413 = state_22405;
(statearr_22413[(10)] = inst_22379__$1);

return statearr_22413;
})();
if(cljs.core.truth_(inst_22379__$1)){
var statearr_22414_22474 = state_22405__$1;
(statearr_22414_22474[(1)] = (29));

} else {
var statearr_22415_22475 = state_22405__$1;
(statearr_22415_22475[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22406 === (4))){
var inst_22326 = (state_22405[(2)]);
var state_22405__$1 = state_22405;
if(cljs.core.truth_(inst_22326)){
var statearr_22416_22476 = state_22405__$1;
(statearr_22416_22476[(1)] = (8));

} else {
var statearr_22417_22477 = state_22405__$1;
(statearr_22417_22477[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22406 === (15))){
var inst_22352 = (state_22405[(2)]);
var state_22405__$1 = state_22405;
if(cljs.core.truth_(inst_22352)){
var statearr_22418_22478 = state_22405__$1;
(statearr_22418_22478[(1)] = (19));

} else {
var statearr_22419_22479 = state_22405__$1;
(statearr_22419_22479[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22406 === (21))){
var inst_22357 = (state_22405[(12)]);
var inst_22357__$1 = (state_22405[(2)]);
var inst_22358 = cljs.core.get.call(null,inst_22357__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_22359 = cljs.core.get.call(null,inst_22357__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_22360 = cljs.core.get.call(null,inst_22357__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_22405__$1 = (function (){var statearr_22420 = state_22405;
(statearr_22420[(12)] = inst_22357__$1);

(statearr_22420[(13)] = inst_22359);

(statearr_22420[(11)] = inst_22358);

return statearr_22420;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_22405__$1,(22),inst_22360);
} else {
if((state_val_22406 === (31))){
var inst_22387 = (state_22405[(2)]);
var state_22405__$1 = state_22405;
if(cljs.core.truth_(inst_22387)){
var statearr_22421_22480 = state_22405__$1;
(statearr_22421_22480[(1)] = (32));

} else {
var statearr_22422_22481 = state_22405__$1;
(statearr_22422_22481[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22406 === (32))){
var inst_22364 = (state_22405[(14)]);
var state_22405__$1 = state_22405;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22405__$1,(35),out,inst_22364);
} else {
if((state_val_22406 === (33))){
var inst_22357 = (state_22405[(12)]);
var inst_22335 = inst_22357;
var state_22405__$1 = (function (){var statearr_22423 = state_22405;
(statearr_22423[(7)] = inst_22335);

return statearr_22423;
})();
var statearr_22424_22482 = state_22405__$1;
(statearr_22424_22482[(2)] = null);

(statearr_22424_22482[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22406 === (13))){
var inst_22335 = (state_22405[(7)]);
var inst_22342 = inst_22335.cljs$lang$protocol_mask$partition0$;
var inst_22343 = (inst_22342 & (64));
var inst_22344 = inst_22335.cljs$core$ISeq$;
var inst_22345 = (inst_22343) || (inst_22344);
var state_22405__$1 = state_22405;
if(cljs.core.truth_(inst_22345)){
var statearr_22425_22483 = state_22405__$1;
(statearr_22425_22483[(1)] = (16));

} else {
var statearr_22426_22484 = state_22405__$1;
(statearr_22426_22484[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22406 === (22))){
var inst_22365 = (state_22405[(9)]);
var inst_22364 = (state_22405[(14)]);
var inst_22363 = (state_22405[(2)]);
var inst_22364__$1 = cljs.core.nth.call(null,inst_22363,(0),null);
var inst_22365__$1 = cljs.core.nth.call(null,inst_22363,(1),null);
var inst_22366 = (inst_22364__$1 == null);
var inst_22367 = cljs.core._EQ_.call(null,inst_22365__$1,change);
var inst_22368 = (inst_22366) || (inst_22367);
var state_22405__$1 = (function (){var statearr_22427 = state_22405;
(statearr_22427[(9)] = inst_22365__$1);

(statearr_22427[(14)] = inst_22364__$1);

return statearr_22427;
})();
if(cljs.core.truth_(inst_22368)){
var statearr_22428_22485 = state_22405__$1;
(statearr_22428_22485[(1)] = (23));

} else {
var statearr_22429_22486 = state_22405__$1;
(statearr_22429_22486[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22406 === (36))){
var inst_22357 = (state_22405[(12)]);
var inst_22335 = inst_22357;
var state_22405__$1 = (function (){var statearr_22430 = state_22405;
(statearr_22430[(7)] = inst_22335);

return statearr_22430;
})();
var statearr_22431_22487 = state_22405__$1;
(statearr_22431_22487[(2)] = null);

(statearr_22431_22487[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22406 === (29))){
var inst_22379 = (state_22405[(10)]);
var state_22405__$1 = state_22405;
var statearr_22432_22488 = state_22405__$1;
(statearr_22432_22488[(2)] = inst_22379);

(statearr_22432_22488[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22406 === (6))){
var state_22405__$1 = state_22405;
var statearr_22433_22489 = state_22405__$1;
(statearr_22433_22489[(2)] = false);

(statearr_22433_22489[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22406 === (28))){
var inst_22375 = (state_22405[(2)]);
var inst_22376 = calc_state.call(null);
var inst_22335 = inst_22376;
var state_22405__$1 = (function (){var statearr_22434 = state_22405;
(statearr_22434[(7)] = inst_22335);

(statearr_22434[(15)] = inst_22375);

return statearr_22434;
})();
var statearr_22435_22490 = state_22405__$1;
(statearr_22435_22490[(2)] = null);

(statearr_22435_22490[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22406 === (25))){
var inst_22401 = (state_22405[(2)]);
var state_22405__$1 = state_22405;
var statearr_22436_22491 = state_22405__$1;
(statearr_22436_22491[(2)] = inst_22401);

(statearr_22436_22491[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22406 === (34))){
var inst_22399 = (state_22405[(2)]);
var state_22405__$1 = state_22405;
var statearr_22437_22492 = state_22405__$1;
(statearr_22437_22492[(2)] = inst_22399);

(statearr_22437_22492[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22406 === (17))){
var state_22405__$1 = state_22405;
var statearr_22438_22493 = state_22405__$1;
(statearr_22438_22493[(2)] = false);

(statearr_22438_22493[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22406 === (3))){
var state_22405__$1 = state_22405;
var statearr_22439_22494 = state_22405__$1;
(statearr_22439_22494[(2)] = false);

(statearr_22439_22494[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22406 === (12))){
var inst_22403 = (state_22405[(2)]);
var state_22405__$1 = state_22405;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22405__$1,inst_22403);
} else {
if((state_val_22406 === (2))){
var inst_22311 = (state_22405[(8)]);
var inst_22316 = inst_22311.cljs$lang$protocol_mask$partition0$;
var inst_22317 = (inst_22316 & (64));
var inst_22318 = inst_22311.cljs$core$ISeq$;
var inst_22319 = (inst_22317) || (inst_22318);
var state_22405__$1 = state_22405;
if(cljs.core.truth_(inst_22319)){
var statearr_22440_22495 = state_22405__$1;
(statearr_22440_22495[(1)] = (5));

} else {
var statearr_22441_22496 = state_22405__$1;
(statearr_22441_22496[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22406 === (23))){
var inst_22364 = (state_22405[(14)]);
var inst_22370 = (inst_22364 == null);
var state_22405__$1 = state_22405;
if(cljs.core.truth_(inst_22370)){
var statearr_22442_22497 = state_22405__$1;
(statearr_22442_22497[(1)] = (26));

} else {
var statearr_22443_22498 = state_22405__$1;
(statearr_22443_22498[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22406 === (35))){
var inst_22390 = (state_22405[(2)]);
var state_22405__$1 = state_22405;
if(cljs.core.truth_(inst_22390)){
var statearr_22444_22499 = state_22405__$1;
(statearr_22444_22499[(1)] = (36));

} else {
var statearr_22445_22500 = state_22405__$1;
(statearr_22445_22500[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22406 === (19))){
var inst_22335 = (state_22405[(7)]);
var inst_22354 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22335);
var state_22405__$1 = state_22405;
var statearr_22446_22501 = state_22405__$1;
(statearr_22446_22501[(2)] = inst_22354);

(statearr_22446_22501[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22406 === (11))){
var inst_22335 = (state_22405[(7)]);
var inst_22339 = (inst_22335 == null);
var inst_22340 = cljs.core.not.call(null,inst_22339);
var state_22405__$1 = state_22405;
if(inst_22340){
var statearr_22447_22502 = state_22405__$1;
(statearr_22447_22502[(1)] = (13));

} else {
var statearr_22448_22503 = state_22405__$1;
(statearr_22448_22503[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22406 === (9))){
var inst_22311 = (state_22405[(8)]);
var state_22405__$1 = state_22405;
var statearr_22449_22504 = state_22405__$1;
(statearr_22449_22504[(2)] = inst_22311);

(statearr_22449_22504[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22406 === (5))){
var state_22405__$1 = state_22405;
var statearr_22450_22505 = state_22405__$1;
(statearr_22450_22505[(2)] = true);

(statearr_22450_22505[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22406 === (14))){
var state_22405__$1 = state_22405;
var statearr_22451_22506 = state_22405__$1;
(statearr_22451_22506[(2)] = false);

(statearr_22451_22506[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22406 === (26))){
var inst_22365 = (state_22405[(9)]);
var inst_22372 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_22365);
var state_22405__$1 = state_22405;
var statearr_22452_22507 = state_22405__$1;
(statearr_22452_22507[(2)] = inst_22372);

(statearr_22452_22507[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22406 === (16))){
var state_22405__$1 = state_22405;
var statearr_22453_22508 = state_22405__$1;
(statearr_22453_22508[(2)] = true);

(statearr_22453_22508[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22406 === (38))){
var inst_22395 = (state_22405[(2)]);
var state_22405__$1 = state_22405;
var statearr_22454_22509 = state_22405__$1;
(statearr_22454_22509[(2)] = inst_22395);

(statearr_22454_22509[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22406 === (30))){
var inst_22365 = (state_22405[(9)]);
var inst_22359 = (state_22405[(13)]);
var inst_22358 = (state_22405[(11)]);
var inst_22382 = cljs.core.empty_QMARK_.call(null,inst_22358);
var inst_22383 = inst_22359.call(null,inst_22365);
var inst_22384 = cljs.core.not.call(null,inst_22383);
var inst_22385 = (inst_22382) && (inst_22384);
var state_22405__$1 = state_22405;
var statearr_22455_22510 = state_22405__$1;
(statearr_22455_22510[(2)] = inst_22385);

(statearr_22455_22510[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22406 === (10))){
var inst_22311 = (state_22405[(8)]);
var inst_22331 = (state_22405[(2)]);
var inst_22332 = cljs.core.get.call(null,inst_22331,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_22333 = cljs.core.get.call(null,inst_22331,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_22334 = cljs.core.get.call(null,inst_22331,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_22335 = inst_22311;
var state_22405__$1 = (function (){var statearr_22456 = state_22405;
(statearr_22456[(7)] = inst_22335);

(statearr_22456[(16)] = inst_22334);

(statearr_22456[(17)] = inst_22333);

(statearr_22456[(18)] = inst_22332);

return statearr_22456;
})();
var statearr_22457_22511 = state_22405__$1;
(statearr_22457_22511[(2)] = null);

(statearr_22457_22511[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22406 === (18))){
var inst_22349 = (state_22405[(2)]);
var state_22405__$1 = state_22405;
var statearr_22458_22512 = state_22405__$1;
(statearr_22458_22512[(2)] = inst_22349);

(statearr_22458_22512[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22406 === (37))){
var state_22405__$1 = state_22405;
var statearr_22459_22513 = state_22405__$1;
(statearr_22459_22513[(2)] = null);

(statearr_22459_22513[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22406 === (8))){
var inst_22311 = (state_22405[(8)]);
var inst_22328 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22311);
var state_22405__$1 = state_22405;
var statearr_22460_22514 = state_22405__$1;
(statearr_22460_22514[(2)] = inst_22328);

(statearr_22460_22514[(1)] = (10));


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
});})(c__20755__auto___22468,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__20643__auto__,c__20755__auto___22468,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__20644__auto__ = null;
var cljs$core$async$mix_$_state_machine__20644__auto____0 = (function (){
var statearr_22464 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22464[(0)] = cljs$core$async$mix_$_state_machine__20644__auto__);

(statearr_22464[(1)] = (1));

return statearr_22464;
});
var cljs$core$async$mix_$_state_machine__20644__auto____1 = (function (state_22405){
while(true){
var ret_value__20645__auto__ = (function (){try{while(true){
var result__20646__auto__ = switch__20643__auto__.call(null,state_22405);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20646__auto__;
}
break;
}
}catch (e22465){if((e22465 instanceof Object)){
var ex__20647__auto__ = e22465;
var statearr_22466_22515 = state_22405;
(statearr_22466_22515[(5)] = ex__20647__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22405);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22465;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20645__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22516 = state_22405;
state_22405 = G__22516;
continue;
} else {
return ret_value__20645__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__20644__auto__ = function(state_22405){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__20644__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__20644__auto____1.call(this,state_22405);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__20644__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__20644__auto____0;
cljs$core$async$mix_$_state_machine__20644__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__20644__auto____1;
return cljs$core$async$mix_$_state_machine__20644__auto__;
})()
;})(switch__20643__auto__,c__20755__auto___22468,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__20757__auto__ = (function (){var statearr_22467 = f__20756__auto__.call(null);
(statearr_22467[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20755__auto___22468);

return statearr_22467;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20757__auto__);
});})(c__20755__auto___22468,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__17426__auto__ = (((p == null))?null:p);
var m__17427__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__17426__auto__)]);
if(!((m__17427__auto__ == null))){
return m__17427__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__17427__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__17427__auto____$1 == null))){
return m__17427__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__17426__auto__ = (((p == null))?null:p);
var m__17427__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__17426__auto__)]);
if(!((m__17427__auto__ == null))){
return m__17427__auto__.call(null,p,v,ch);
} else {
var m__17427__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__17427__auto____$1 == null))){
return m__17427__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args22517 = [];
var len__17829__auto___22520 = arguments.length;
var i__17830__auto___22521 = (0);
while(true){
if((i__17830__auto___22521 < len__17829__auto___22520)){
args22517.push((arguments[i__17830__auto___22521]));

var G__22522 = (i__17830__auto___22521 + (1));
i__17830__auto___22521 = G__22522;
continue;
} else {
}
break;
}

var G__22519 = args22517.length;
switch (G__22519) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22517.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__17426__auto__ = (((p == null))?null:p);
var m__17427__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17426__auto__)]);
if(!((m__17427__auto__ == null))){
return m__17427__auto__.call(null,p);
} else {
var m__17427__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17427__auto____$1 == null))){
return m__17427__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__17426__auto__ = (((p == null))?null:p);
var m__17427__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17426__auto__)]);
if(!((m__17427__auto__ == null))){
return m__17427__auto__.call(null,p,v);
} else {
var m__17427__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17427__auto____$1 == null))){
return m__17427__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args22525 = [];
var len__17829__auto___22650 = arguments.length;
var i__17830__auto___22651 = (0);
while(true){
if((i__17830__auto___22651 < len__17829__auto___22650)){
args22525.push((arguments[i__17830__auto___22651]));

var G__22652 = (i__17830__auto___22651 + (1));
i__17830__auto___22651 = G__22652;
continue;
} else {
}
break;
}

var G__22527 = args22525.length;
switch (G__22527) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22525.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__16771__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__16771__auto__)){
return or__16771__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__16771__auto__,mults){
return (function (p1__22524_SHARP_){
if(cljs.core.truth_(p1__22524_SHARP_.call(null,topic))){
return p1__22524_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__22524_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16771__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async22528 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22528 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta22529){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta22529 = meta22529;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22528.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_22530,meta22529__$1){
var self__ = this;
var _22530__$1 = this;
return (new cljs.core.async.t_cljs$core$async22528(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta22529__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22528.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_22530){
var self__ = this;
var _22530__$1 = this;
return self__.meta22529;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22528.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async22528.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22528.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async22528.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22528.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22528.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22528.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22528.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta22529","meta22529",923438108,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22528.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22528.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22528";

cljs.core.async.t_cljs$core$async22528.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__17369__auto__,writer__17370__auto__,opt__17371__auto__){
return cljs.core._write.call(null,writer__17370__auto__,"cljs.core.async/t_cljs$core$async22528");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async22528 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async22528(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta22529){
return (new cljs.core.async.t_cljs$core$async22528(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta22529));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async22528(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__20755__auto___22654 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20755__auto___22654,mults,ensure_mult,p){
return (function (){
var f__20756__auto__ = (function (){var switch__20643__auto__ = ((function (c__20755__auto___22654,mults,ensure_mult,p){
return (function (state_22602){
var state_val_22603 = (state_22602[(1)]);
if((state_val_22603 === (7))){
var inst_22598 = (state_22602[(2)]);
var state_22602__$1 = state_22602;
var statearr_22604_22655 = state_22602__$1;
(statearr_22604_22655[(2)] = inst_22598);

(statearr_22604_22655[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22603 === (20))){
var state_22602__$1 = state_22602;
var statearr_22605_22656 = state_22602__$1;
(statearr_22605_22656[(2)] = null);

(statearr_22605_22656[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22603 === (1))){
var state_22602__$1 = state_22602;
var statearr_22606_22657 = state_22602__$1;
(statearr_22606_22657[(2)] = null);

(statearr_22606_22657[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22603 === (24))){
var inst_22581 = (state_22602[(7)]);
var inst_22590 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_22581);
var state_22602__$1 = state_22602;
var statearr_22607_22658 = state_22602__$1;
(statearr_22607_22658[(2)] = inst_22590);

(statearr_22607_22658[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22603 === (4))){
var inst_22533 = (state_22602[(8)]);
var inst_22533__$1 = (state_22602[(2)]);
var inst_22534 = (inst_22533__$1 == null);
var state_22602__$1 = (function (){var statearr_22608 = state_22602;
(statearr_22608[(8)] = inst_22533__$1);

return statearr_22608;
})();
if(cljs.core.truth_(inst_22534)){
var statearr_22609_22659 = state_22602__$1;
(statearr_22609_22659[(1)] = (5));

} else {
var statearr_22610_22660 = state_22602__$1;
(statearr_22610_22660[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22603 === (15))){
var inst_22575 = (state_22602[(2)]);
var state_22602__$1 = state_22602;
var statearr_22611_22661 = state_22602__$1;
(statearr_22611_22661[(2)] = inst_22575);

(statearr_22611_22661[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22603 === (21))){
var inst_22595 = (state_22602[(2)]);
var state_22602__$1 = (function (){var statearr_22612 = state_22602;
(statearr_22612[(9)] = inst_22595);

return statearr_22612;
})();
var statearr_22613_22662 = state_22602__$1;
(statearr_22613_22662[(2)] = null);

(statearr_22613_22662[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22603 === (13))){
var inst_22557 = (state_22602[(10)]);
var inst_22559 = cljs.core.chunked_seq_QMARK_.call(null,inst_22557);
var state_22602__$1 = state_22602;
if(inst_22559){
var statearr_22614_22663 = state_22602__$1;
(statearr_22614_22663[(1)] = (16));

} else {
var statearr_22615_22664 = state_22602__$1;
(statearr_22615_22664[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22603 === (22))){
var inst_22587 = (state_22602[(2)]);
var state_22602__$1 = state_22602;
if(cljs.core.truth_(inst_22587)){
var statearr_22616_22665 = state_22602__$1;
(statearr_22616_22665[(1)] = (23));

} else {
var statearr_22617_22666 = state_22602__$1;
(statearr_22617_22666[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22603 === (6))){
var inst_22583 = (state_22602[(11)]);
var inst_22533 = (state_22602[(8)]);
var inst_22581 = (state_22602[(7)]);
var inst_22581__$1 = topic_fn.call(null,inst_22533);
var inst_22582 = cljs.core.deref.call(null,mults);
var inst_22583__$1 = cljs.core.get.call(null,inst_22582,inst_22581__$1);
var state_22602__$1 = (function (){var statearr_22618 = state_22602;
(statearr_22618[(11)] = inst_22583__$1);

(statearr_22618[(7)] = inst_22581__$1);

return statearr_22618;
})();
if(cljs.core.truth_(inst_22583__$1)){
var statearr_22619_22667 = state_22602__$1;
(statearr_22619_22667[(1)] = (19));

} else {
var statearr_22620_22668 = state_22602__$1;
(statearr_22620_22668[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22603 === (25))){
var inst_22592 = (state_22602[(2)]);
var state_22602__$1 = state_22602;
var statearr_22621_22669 = state_22602__$1;
(statearr_22621_22669[(2)] = inst_22592);

(statearr_22621_22669[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22603 === (17))){
var inst_22557 = (state_22602[(10)]);
var inst_22566 = cljs.core.first.call(null,inst_22557);
var inst_22567 = cljs.core.async.muxch_STAR_.call(null,inst_22566);
var inst_22568 = cljs.core.async.close_BANG_.call(null,inst_22567);
var inst_22569 = cljs.core.next.call(null,inst_22557);
var inst_22543 = inst_22569;
var inst_22544 = null;
var inst_22545 = (0);
var inst_22546 = (0);
var state_22602__$1 = (function (){var statearr_22622 = state_22602;
(statearr_22622[(12)] = inst_22545);

(statearr_22622[(13)] = inst_22546);

(statearr_22622[(14)] = inst_22543);

(statearr_22622[(15)] = inst_22544);

(statearr_22622[(16)] = inst_22568);

return statearr_22622;
})();
var statearr_22623_22670 = state_22602__$1;
(statearr_22623_22670[(2)] = null);

(statearr_22623_22670[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22603 === (3))){
var inst_22600 = (state_22602[(2)]);
var state_22602__$1 = state_22602;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22602__$1,inst_22600);
} else {
if((state_val_22603 === (12))){
var inst_22577 = (state_22602[(2)]);
var state_22602__$1 = state_22602;
var statearr_22624_22671 = state_22602__$1;
(statearr_22624_22671[(2)] = inst_22577);

(statearr_22624_22671[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22603 === (2))){
var state_22602__$1 = state_22602;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22602__$1,(4),ch);
} else {
if((state_val_22603 === (23))){
var state_22602__$1 = state_22602;
var statearr_22625_22672 = state_22602__$1;
(statearr_22625_22672[(2)] = null);

(statearr_22625_22672[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22603 === (19))){
var inst_22583 = (state_22602[(11)]);
var inst_22533 = (state_22602[(8)]);
var inst_22585 = cljs.core.async.muxch_STAR_.call(null,inst_22583);
var state_22602__$1 = state_22602;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22602__$1,(22),inst_22585,inst_22533);
} else {
if((state_val_22603 === (11))){
var inst_22543 = (state_22602[(14)]);
var inst_22557 = (state_22602[(10)]);
var inst_22557__$1 = cljs.core.seq.call(null,inst_22543);
var state_22602__$1 = (function (){var statearr_22626 = state_22602;
(statearr_22626[(10)] = inst_22557__$1);

return statearr_22626;
})();
if(inst_22557__$1){
var statearr_22627_22673 = state_22602__$1;
(statearr_22627_22673[(1)] = (13));

} else {
var statearr_22628_22674 = state_22602__$1;
(statearr_22628_22674[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22603 === (9))){
var inst_22579 = (state_22602[(2)]);
var state_22602__$1 = state_22602;
var statearr_22629_22675 = state_22602__$1;
(statearr_22629_22675[(2)] = inst_22579);

(statearr_22629_22675[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22603 === (5))){
var inst_22540 = cljs.core.deref.call(null,mults);
var inst_22541 = cljs.core.vals.call(null,inst_22540);
var inst_22542 = cljs.core.seq.call(null,inst_22541);
var inst_22543 = inst_22542;
var inst_22544 = null;
var inst_22545 = (0);
var inst_22546 = (0);
var state_22602__$1 = (function (){var statearr_22630 = state_22602;
(statearr_22630[(12)] = inst_22545);

(statearr_22630[(13)] = inst_22546);

(statearr_22630[(14)] = inst_22543);

(statearr_22630[(15)] = inst_22544);

return statearr_22630;
})();
var statearr_22631_22676 = state_22602__$1;
(statearr_22631_22676[(2)] = null);

(statearr_22631_22676[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22603 === (14))){
var state_22602__$1 = state_22602;
var statearr_22635_22677 = state_22602__$1;
(statearr_22635_22677[(2)] = null);

(statearr_22635_22677[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22603 === (16))){
var inst_22557 = (state_22602[(10)]);
var inst_22561 = cljs.core.chunk_first.call(null,inst_22557);
var inst_22562 = cljs.core.chunk_rest.call(null,inst_22557);
var inst_22563 = cljs.core.count.call(null,inst_22561);
var inst_22543 = inst_22562;
var inst_22544 = inst_22561;
var inst_22545 = inst_22563;
var inst_22546 = (0);
var state_22602__$1 = (function (){var statearr_22636 = state_22602;
(statearr_22636[(12)] = inst_22545);

(statearr_22636[(13)] = inst_22546);

(statearr_22636[(14)] = inst_22543);

(statearr_22636[(15)] = inst_22544);

return statearr_22636;
})();
var statearr_22637_22678 = state_22602__$1;
(statearr_22637_22678[(2)] = null);

(statearr_22637_22678[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22603 === (10))){
var inst_22545 = (state_22602[(12)]);
var inst_22546 = (state_22602[(13)]);
var inst_22543 = (state_22602[(14)]);
var inst_22544 = (state_22602[(15)]);
var inst_22551 = cljs.core._nth.call(null,inst_22544,inst_22546);
var inst_22552 = cljs.core.async.muxch_STAR_.call(null,inst_22551);
var inst_22553 = cljs.core.async.close_BANG_.call(null,inst_22552);
var inst_22554 = (inst_22546 + (1));
var tmp22632 = inst_22545;
var tmp22633 = inst_22543;
var tmp22634 = inst_22544;
var inst_22543__$1 = tmp22633;
var inst_22544__$1 = tmp22634;
var inst_22545__$1 = tmp22632;
var inst_22546__$1 = inst_22554;
var state_22602__$1 = (function (){var statearr_22638 = state_22602;
(statearr_22638[(12)] = inst_22545__$1);

(statearr_22638[(17)] = inst_22553);

(statearr_22638[(13)] = inst_22546__$1);

(statearr_22638[(14)] = inst_22543__$1);

(statearr_22638[(15)] = inst_22544__$1);

return statearr_22638;
})();
var statearr_22639_22679 = state_22602__$1;
(statearr_22639_22679[(2)] = null);

(statearr_22639_22679[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22603 === (18))){
var inst_22572 = (state_22602[(2)]);
var state_22602__$1 = state_22602;
var statearr_22640_22680 = state_22602__$1;
(statearr_22640_22680[(2)] = inst_22572);

(statearr_22640_22680[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22603 === (8))){
var inst_22545 = (state_22602[(12)]);
var inst_22546 = (state_22602[(13)]);
var inst_22548 = (inst_22546 < inst_22545);
var inst_22549 = inst_22548;
var state_22602__$1 = state_22602;
if(cljs.core.truth_(inst_22549)){
var statearr_22641_22681 = state_22602__$1;
(statearr_22641_22681[(1)] = (10));

} else {
var statearr_22642_22682 = state_22602__$1;
(statearr_22642_22682[(1)] = (11));

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
}
}
}
}
}
}
}
}
});})(c__20755__auto___22654,mults,ensure_mult,p))
;
return ((function (switch__20643__auto__,c__20755__auto___22654,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__20644__auto__ = null;
var cljs$core$async$state_machine__20644__auto____0 = (function (){
var statearr_22646 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22646[(0)] = cljs$core$async$state_machine__20644__auto__);

(statearr_22646[(1)] = (1));

return statearr_22646;
});
var cljs$core$async$state_machine__20644__auto____1 = (function (state_22602){
while(true){
var ret_value__20645__auto__ = (function (){try{while(true){
var result__20646__auto__ = switch__20643__auto__.call(null,state_22602);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20646__auto__;
}
break;
}
}catch (e22647){if((e22647 instanceof Object)){
var ex__20647__auto__ = e22647;
var statearr_22648_22683 = state_22602;
(statearr_22648_22683[(5)] = ex__20647__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22602);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22647;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20645__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22684 = state_22602;
state_22602 = G__22684;
continue;
} else {
return ret_value__20645__auto__;
}
break;
}
});
cljs$core$async$state_machine__20644__auto__ = function(state_22602){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20644__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20644__auto____1.call(this,state_22602);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20644__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20644__auto____0;
cljs$core$async$state_machine__20644__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20644__auto____1;
return cljs$core$async$state_machine__20644__auto__;
})()
;})(switch__20643__auto__,c__20755__auto___22654,mults,ensure_mult,p))
})();
var state__20757__auto__ = (function (){var statearr_22649 = f__20756__auto__.call(null);
(statearr_22649[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20755__auto___22654);

return statearr_22649;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20757__auto__);
});})(c__20755__auto___22654,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args22685 = [];
var len__17829__auto___22688 = arguments.length;
var i__17830__auto___22689 = (0);
while(true){
if((i__17830__auto___22689 < len__17829__auto___22688)){
args22685.push((arguments[i__17830__auto___22689]));

var G__22690 = (i__17830__auto___22689 + (1));
i__17830__auto___22689 = G__22690;
continue;
} else {
}
break;
}

var G__22687 = args22685.length;
switch (G__22687) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22685.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args22692 = [];
var len__17829__auto___22695 = arguments.length;
var i__17830__auto___22696 = (0);
while(true){
if((i__17830__auto___22696 < len__17829__auto___22695)){
args22692.push((arguments[i__17830__auto___22696]));

var G__22697 = (i__17830__auto___22696 + (1));
i__17830__auto___22696 = G__22697;
continue;
} else {
}
break;
}

var G__22694 = args22692.length;
switch (G__22694) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22692.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args22699 = [];
var len__17829__auto___22770 = arguments.length;
var i__17830__auto___22771 = (0);
while(true){
if((i__17830__auto___22771 < len__17829__auto___22770)){
args22699.push((arguments[i__17830__auto___22771]));

var G__22772 = (i__17830__auto___22771 + (1));
i__17830__auto___22771 = G__22772;
continue;
} else {
}
break;
}

var G__22701 = args22699.length;
switch (G__22701) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22699.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__20755__auto___22774 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20755__auto___22774,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__20756__auto__ = (function (){var switch__20643__auto__ = ((function (c__20755__auto___22774,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_22740){
var state_val_22741 = (state_22740[(1)]);
if((state_val_22741 === (7))){
var state_22740__$1 = state_22740;
var statearr_22742_22775 = state_22740__$1;
(statearr_22742_22775[(2)] = null);

(statearr_22742_22775[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22741 === (1))){
var state_22740__$1 = state_22740;
var statearr_22743_22776 = state_22740__$1;
(statearr_22743_22776[(2)] = null);

(statearr_22743_22776[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22741 === (4))){
var inst_22704 = (state_22740[(7)]);
var inst_22706 = (inst_22704 < cnt);
var state_22740__$1 = state_22740;
if(cljs.core.truth_(inst_22706)){
var statearr_22744_22777 = state_22740__$1;
(statearr_22744_22777[(1)] = (6));

} else {
var statearr_22745_22778 = state_22740__$1;
(statearr_22745_22778[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22741 === (15))){
var inst_22736 = (state_22740[(2)]);
var state_22740__$1 = state_22740;
var statearr_22746_22779 = state_22740__$1;
(statearr_22746_22779[(2)] = inst_22736);

(statearr_22746_22779[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22741 === (13))){
var inst_22729 = cljs.core.async.close_BANG_.call(null,out);
var state_22740__$1 = state_22740;
var statearr_22747_22780 = state_22740__$1;
(statearr_22747_22780[(2)] = inst_22729);

(statearr_22747_22780[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22741 === (6))){
var state_22740__$1 = state_22740;
var statearr_22748_22781 = state_22740__$1;
(statearr_22748_22781[(2)] = null);

(statearr_22748_22781[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22741 === (3))){
var inst_22738 = (state_22740[(2)]);
var state_22740__$1 = state_22740;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22740__$1,inst_22738);
} else {
if((state_val_22741 === (12))){
var inst_22726 = (state_22740[(8)]);
var inst_22726__$1 = (state_22740[(2)]);
var inst_22727 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_22726__$1);
var state_22740__$1 = (function (){var statearr_22749 = state_22740;
(statearr_22749[(8)] = inst_22726__$1);

return statearr_22749;
})();
if(cljs.core.truth_(inst_22727)){
var statearr_22750_22782 = state_22740__$1;
(statearr_22750_22782[(1)] = (13));

} else {
var statearr_22751_22783 = state_22740__$1;
(statearr_22751_22783[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22741 === (2))){
var inst_22703 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_22704 = (0);
var state_22740__$1 = (function (){var statearr_22752 = state_22740;
(statearr_22752[(7)] = inst_22704);

(statearr_22752[(9)] = inst_22703);

return statearr_22752;
})();
var statearr_22753_22784 = state_22740__$1;
(statearr_22753_22784[(2)] = null);

(statearr_22753_22784[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22741 === (11))){
var inst_22704 = (state_22740[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_22740,(10),Object,null,(9));
var inst_22713 = chs__$1.call(null,inst_22704);
var inst_22714 = done.call(null,inst_22704);
var inst_22715 = cljs.core.async.take_BANG_.call(null,inst_22713,inst_22714);
var state_22740__$1 = state_22740;
var statearr_22754_22785 = state_22740__$1;
(statearr_22754_22785[(2)] = inst_22715);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22740__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22741 === (9))){
var inst_22704 = (state_22740[(7)]);
var inst_22717 = (state_22740[(2)]);
var inst_22718 = (inst_22704 + (1));
var inst_22704__$1 = inst_22718;
var state_22740__$1 = (function (){var statearr_22755 = state_22740;
(statearr_22755[(7)] = inst_22704__$1);

(statearr_22755[(10)] = inst_22717);

return statearr_22755;
})();
var statearr_22756_22786 = state_22740__$1;
(statearr_22756_22786[(2)] = null);

(statearr_22756_22786[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22741 === (5))){
var inst_22724 = (state_22740[(2)]);
var state_22740__$1 = (function (){var statearr_22757 = state_22740;
(statearr_22757[(11)] = inst_22724);

return statearr_22757;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22740__$1,(12),dchan);
} else {
if((state_val_22741 === (14))){
var inst_22726 = (state_22740[(8)]);
var inst_22731 = cljs.core.apply.call(null,f,inst_22726);
var state_22740__$1 = state_22740;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22740__$1,(16),out,inst_22731);
} else {
if((state_val_22741 === (16))){
var inst_22733 = (state_22740[(2)]);
var state_22740__$1 = (function (){var statearr_22758 = state_22740;
(statearr_22758[(12)] = inst_22733);

return statearr_22758;
})();
var statearr_22759_22787 = state_22740__$1;
(statearr_22759_22787[(2)] = null);

(statearr_22759_22787[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22741 === (10))){
var inst_22708 = (state_22740[(2)]);
var inst_22709 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_22740__$1 = (function (){var statearr_22760 = state_22740;
(statearr_22760[(13)] = inst_22708);

return statearr_22760;
})();
var statearr_22761_22788 = state_22740__$1;
(statearr_22761_22788[(2)] = inst_22709);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22740__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22741 === (8))){
var inst_22722 = (state_22740[(2)]);
var state_22740__$1 = state_22740;
var statearr_22762_22789 = state_22740__$1;
(statearr_22762_22789[(2)] = inst_22722);

(statearr_22762_22789[(1)] = (5));


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
});})(c__20755__auto___22774,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__20643__auto__,c__20755__auto___22774,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__20644__auto__ = null;
var cljs$core$async$state_machine__20644__auto____0 = (function (){
var statearr_22766 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22766[(0)] = cljs$core$async$state_machine__20644__auto__);

(statearr_22766[(1)] = (1));

return statearr_22766;
});
var cljs$core$async$state_machine__20644__auto____1 = (function (state_22740){
while(true){
var ret_value__20645__auto__ = (function (){try{while(true){
var result__20646__auto__ = switch__20643__auto__.call(null,state_22740);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20646__auto__;
}
break;
}
}catch (e22767){if((e22767 instanceof Object)){
var ex__20647__auto__ = e22767;
var statearr_22768_22790 = state_22740;
(statearr_22768_22790[(5)] = ex__20647__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22740);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22767;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20645__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22791 = state_22740;
state_22740 = G__22791;
continue;
} else {
return ret_value__20645__auto__;
}
break;
}
});
cljs$core$async$state_machine__20644__auto__ = function(state_22740){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20644__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20644__auto____1.call(this,state_22740);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20644__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20644__auto____0;
cljs$core$async$state_machine__20644__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20644__auto____1;
return cljs$core$async$state_machine__20644__auto__;
})()
;})(switch__20643__auto__,c__20755__auto___22774,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__20757__auto__ = (function (){var statearr_22769 = f__20756__auto__.call(null);
(statearr_22769[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20755__auto___22774);

return statearr_22769;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20757__auto__);
});})(c__20755__auto___22774,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args22793 = [];
var len__17829__auto___22849 = arguments.length;
var i__17830__auto___22850 = (0);
while(true){
if((i__17830__auto___22850 < len__17829__auto___22849)){
args22793.push((arguments[i__17830__auto___22850]));

var G__22851 = (i__17830__auto___22850 + (1));
i__17830__auto___22850 = G__22851;
continue;
} else {
}
break;
}

var G__22795 = args22793.length;
switch (G__22795) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22793.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20755__auto___22853 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20755__auto___22853,out){
return (function (){
var f__20756__auto__ = (function (){var switch__20643__auto__ = ((function (c__20755__auto___22853,out){
return (function (state_22825){
var state_val_22826 = (state_22825[(1)]);
if((state_val_22826 === (7))){
var inst_22804 = (state_22825[(7)]);
var inst_22805 = (state_22825[(8)]);
var inst_22804__$1 = (state_22825[(2)]);
var inst_22805__$1 = cljs.core.nth.call(null,inst_22804__$1,(0),null);
var inst_22806 = cljs.core.nth.call(null,inst_22804__$1,(1),null);
var inst_22807 = (inst_22805__$1 == null);
var state_22825__$1 = (function (){var statearr_22827 = state_22825;
(statearr_22827[(7)] = inst_22804__$1);

(statearr_22827[(8)] = inst_22805__$1);

(statearr_22827[(9)] = inst_22806);

return statearr_22827;
})();
if(cljs.core.truth_(inst_22807)){
var statearr_22828_22854 = state_22825__$1;
(statearr_22828_22854[(1)] = (8));

} else {
var statearr_22829_22855 = state_22825__$1;
(statearr_22829_22855[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22826 === (1))){
var inst_22796 = cljs.core.vec.call(null,chs);
var inst_22797 = inst_22796;
var state_22825__$1 = (function (){var statearr_22830 = state_22825;
(statearr_22830[(10)] = inst_22797);

return statearr_22830;
})();
var statearr_22831_22856 = state_22825__$1;
(statearr_22831_22856[(2)] = null);

(statearr_22831_22856[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22826 === (4))){
var inst_22797 = (state_22825[(10)]);
var state_22825__$1 = state_22825;
return cljs.core.async.ioc_alts_BANG_.call(null,state_22825__$1,(7),inst_22797);
} else {
if((state_val_22826 === (6))){
var inst_22821 = (state_22825[(2)]);
var state_22825__$1 = state_22825;
var statearr_22832_22857 = state_22825__$1;
(statearr_22832_22857[(2)] = inst_22821);

(statearr_22832_22857[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22826 === (3))){
var inst_22823 = (state_22825[(2)]);
var state_22825__$1 = state_22825;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22825__$1,inst_22823);
} else {
if((state_val_22826 === (2))){
var inst_22797 = (state_22825[(10)]);
var inst_22799 = cljs.core.count.call(null,inst_22797);
var inst_22800 = (inst_22799 > (0));
var state_22825__$1 = state_22825;
if(cljs.core.truth_(inst_22800)){
var statearr_22834_22858 = state_22825__$1;
(statearr_22834_22858[(1)] = (4));

} else {
var statearr_22835_22859 = state_22825__$1;
(statearr_22835_22859[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22826 === (11))){
var inst_22797 = (state_22825[(10)]);
var inst_22814 = (state_22825[(2)]);
var tmp22833 = inst_22797;
var inst_22797__$1 = tmp22833;
var state_22825__$1 = (function (){var statearr_22836 = state_22825;
(statearr_22836[(10)] = inst_22797__$1);

(statearr_22836[(11)] = inst_22814);

return statearr_22836;
})();
var statearr_22837_22860 = state_22825__$1;
(statearr_22837_22860[(2)] = null);

(statearr_22837_22860[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22826 === (9))){
var inst_22805 = (state_22825[(8)]);
var state_22825__$1 = state_22825;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22825__$1,(11),out,inst_22805);
} else {
if((state_val_22826 === (5))){
var inst_22819 = cljs.core.async.close_BANG_.call(null,out);
var state_22825__$1 = state_22825;
var statearr_22838_22861 = state_22825__$1;
(statearr_22838_22861[(2)] = inst_22819);

(statearr_22838_22861[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22826 === (10))){
var inst_22817 = (state_22825[(2)]);
var state_22825__$1 = state_22825;
var statearr_22839_22862 = state_22825__$1;
(statearr_22839_22862[(2)] = inst_22817);

(statearr_22839_22862[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22826 === (8))){
var inst_22804 = (state_22825[(7)]);
var inst_22805 = (state_22825[(8)]);
var inst_22806 = (state_22825[(9)]);
var inst_22797 = (state_22825[(10)]);
var inst_22809 = (function (){var cs = inst_22797;
var vec__22802 = inst_22804;
var v = inst_22805;
var c = inst_22806;
return ((function (cs,vec__22802,v,c,inst_22804,inst_22805,inst_22806,inst_22797,state_val_22826,c__20755__auto___22853,out){
return (function (p1__22792_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__22792_SHARP_);
});
;})(cs,vec__22802,v,c,inst_22804,inst_22805,inst_22806,inst_22797,state_val_22826,c__20755__auto___22853,out))
})();
var inst_22810 = cljs.core.filterv.call(null,inst_22809,inst_22797);
var inst_22797__$1 = inst_22810;
var state_22825__$1 = (function (){var statearr_22840 = state_22825;
(statearr_22840[(10)] = inst_22797__$1);

return statearr_22840;
})();
var statearr_22841_22863 = state_22825__$1;
(statearr_22841_22863[(2)] = null);

(statearr_22841_22863[(1)] = (2));


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
});})(c__20755__auto___22853,out))
;
return ((function (switch__20643__auto__,c__20755__auto___22853,out){
return (function() {
var cljs$core$async$state_machine__20644__auto__ = null;
var cljs$core$async$state_machine__20644__auto____0 = (function (){
var statearr_22845 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22845[(0)] = cljs$core$async$state_machine__20644__auto__);

(statearr_22845[(1)] = (1));

return statearr_22845;
});
var cljs$core$async$state_machine__20644__auto____1 = (function (state_22825){
while(true){
var ret_value__20645__auto__ = (function (){try{while(true){
var result__20646__auto__ = switch__20643__auto__.call(null,state_22825);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20646__auto__;
}
break;
}
}catch (e22846){if((e22846 instanceof Object)){
var ex__20647__auto__ = e22846;
var statearr_22847_22864 = state_22825;
(statearr_22847_22864[(5)] = ex__20647__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22825);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22846;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20645__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22865 = state_22825;
state_22825 = G__22865;
continue;
} else {
return ret_value__20645__auto__;
}
break;
}
});
cljs$core$async$state_machine__20644__auto__ = function(state_22825){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20644__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20644__auto____1.call(this,state_22825);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20644__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20644__auto____0;
cljs$core$async$state_machine__20644__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20644__auto____1;
return cljs$core$async$state_machine__20644__auto__;
})()
;})(switch__20643__auto__,c__20755__auto___22853,out))
})();
var state__20757__auto__ = (function (){var statearr_22848 = f__20756__auto__.call(null);
(statearr_22848[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20755__auto___22853);

return statearr_22848;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20757__auto__);
});})(c__20755__auto___22853,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args22866 = [];
var len__17829__auto___22915 = arguments.length;
var i__17830__auto___22916 = (0);
while(true){
if((i__17830__auto___22916 < len__17829__auto___22915)){
args22866.push((arguments[i__17830__auto___22916]));

var G__22917 = (i__17830__auto___22916 + (1));
i__17830__auto___22916 = G__22917;
continue;
} else {
}
break;
}

var G__22868 = args22866.length;
switch (G__22868) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22866.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20755__auto___22919 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20755__auto___22919,out){
return (function (){
var f__20756__auto__ = (function (){var switch__20643__auto__ = ((function (c__20755__auto___22919,out){
return (function (state_22892){
var state_val_22893 = (state_22892[(1)]);
if((state_val_22893 === (7))){
var inst_22874 = (state_22892[(7)]);
var inst_22874__$1 = (state_22892[(2)]);
var inst_22875 = (inst_22874__$1 == null);
var inst_22876 = cljs.core.not.call(null,inst_22875);
var state_22892__$1 = (function (){var statearr_22894 = state_22892;
(statearr_22894[(7)] = inst_22874__$1);

return statearr_22894;
})();
if(inst_22876){
var statearr_22895_22920 = state_22892__$1;
(statearr_22895_22920[(1)] = (8));

} else {
var statearr_22896_22921 = state_22892__$1;
(statearr_22896_22921[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22893 === (1))){
var inst_22869 = (0);
var state_22892__$1 = (function (){var statearr_22897 = state_22892;
(statearr_22897[(8)] = inst_22869);

return statearr_22897;
})();
var statearr_22898_22922 = state_22892__$1;
(statearr_22898_22922[(2)] = null);

(statearr_22898_22922[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22893 === (4))){
var state_22892__$1 = state_22892;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22892__$1,(7),ch);
} else {
if((state_val_22893 === (6))){
var inst_22887 = (state_22892[(2)]);
var state_22892__$1 = state_22892;
var statearr_22899_22923 = state_22892__$1;
(statearr_22899_22923[(2)] = inst_22887);

(statearr_22899_22923[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22893 === (3))){
var inst_22889 = (state_22892[(2)]);
var inst_22890 = cljs.core.async.close_BANG_.call(null,out);
var state_22892__$1 = (function (){var statearr_22900 = state_22892;
(statearr_22900[(9)] = inst_22889);

return statearr_22900;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22892__$1,inst_22890);
} else {
if((state_val_22893 === (2))){
var inst_22869 = (state_22892[(8)]);
var inst_22871 = (inst_22869 < n);
var state_22892__$1 = state_22892;
if(cljs.core.truth_(inst_22871)){
var statearr_22901_22924 = state_22892__$1;
(statearr_22901_22924[(1)] = (4));

} else {
var statearr_22902_22925 = state_22892__$1;
(statearr_22902_22925[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22893 === (11))){
var inst_22869 = (state_22892[(8)]);
var inst_22879 = (state_22892[(2)]);
var inst_22880 = (inst_22869 + (1));
var inst_22869__$1 = inst_22880;
var state_22892__$1 = (function (){var statearr_22903 = state_22892;
(statearr_22903[(8)] = inst_22869__$1);

(statearr_22903[(10)] = inst_22879);

return statearr_22903;
})();
var statearr_22904_22926 = state_22892__$1;
(statearr_22904_22926[(2)] = null);

(statearr_22904_22926[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22893 === (9))){
var state_22892__$1 = state_22892;
var statearr_22905_22927 = state_22892__$1;
(statearr_22905_22927[(2)] = null);

(statearr_22905_22927[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22893 === (5))){
var state_22892__$1 = state_22892;
var statearr_22906_22928 = state_22892__$1;
(statearr_22906_22928[(2)] = null);

(statearr_22906_22928[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22893 === (10))){
var inst_22884 = (state_22892[(2)]);
var state_22892__$1 = state_22892;
var statearr_22907_22929 = state_22892__$1;
(statearr_22907_22929[(2)] = inst_22884);

(statearr_22907_22929[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22893 === (8))){
var inst_22874 = (state_22892[(7)]);
var state_22892__$1 = state_22892;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22892__$1,(11),out,inst_22874);
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
});})(c__20755__auto___22919,out))
;
return ((function (switch__20643__auto__,c__20755__auto___22919,out){
return (function() {
var cljs$core$async$state_machine__20644__auto__ = null;
var cljs$core$async$state_machine__20644__auto____0 = (function (){
var statearr_22911 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22911[(0)] = cljs$core$async$state_machine__20644__auto__);

(statearr_22911[(1)] = (1));

return statearr_22911;
});
var cljs$core$async$state_machine__20644__auto____1 = (function (state_22892){
while(true){
var ret_value__20645__auto__ = (function (){try{while(true){
var result__20646__auto__ = switch__20643__auto__.call(null,state_22892);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20646__auto__;
}
break;
}
}catch (e22912){if((e22912 instanceof Object)){
var ex__20647__auto__ = e22912;
var statearr_22913_22930 = state_22892;
(statearr_22913_22930[(5)] = ex__20647__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22892);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22912;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20645__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22931 = state_22892;
state_22892 = G__22931;
continue;
} else {
return ret_value__20645__auto__;
}
break;
}
});
cljs$core$async$state_machine__20644__auto__ = function(state_22892){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20644__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20644__auto____1.call(this,state_22892);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20644__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20644__auto____0;
cljs$core$async$state_machine__20644__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20644__auto____1;
return cljs$core$async$state_machine__20644__auto__;
})()
;})(switch__20643__auto__,c__20755__auto___22919,out))
})();
var state__20757__auto__ = (function (){var statearr_22914 = f__20756__auto__.call(null);
(statearr_22914[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20755__auto___22919);

return statearr_22914;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20757__auto__);
});})(c__20755__auto___22919,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async22939 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22939 = (function (map_LT_,f,ch,meta22940){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta22940 = meta22940;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22939.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22941,meta22940__$1){
var self__ = this;
var _22941__$1 = this;
return (new cljs.core.async.t_cljs$core$async22939(self__.map_LT_,self__.f,self__.ch,meta22940__$1));
});

cljs.core.async.t_cljs$core$async22939.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22941){
var self__ = this;
var _22941__$1 = this;
return self__.meta22940;
});

cljs.core.async.t_cljs$core$async22939.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async22939.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22939.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22939.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async22939.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async22942 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22942 = (function (map_LT_,f,ch,meta22940,_,fn1,meta22943){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta22940 = meta22940;
this._ = _;
this.fn1 = fn1;
this.meta22943 = meta22943;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22942.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_22944,meta22943__$1){
var self__ = this;
var _22944__$1 = this;
return (new cljs.core.async.t_cljs$core$async22942(self__.map_LT_,self__.f,self__.ch,self__.meta22940,self__._,self__.fn1,meta22943__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async22942.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_22944){
var self__ = this;
var _22944__$1 = this;
return self__.meta22943;
});})(___$1))
;

cljs.core.async.t_cljs$core$async22942.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async22942.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async22942.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async22942.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__22932_SHARP_){
return f1.call(null,(((p1__22932_SHARP_ == null))?null:self__.f.call(null,p1__22932_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async22942.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22940","meta22940",379025694,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async22939","cljs.core.async/t_cljs$core$async22939",-1464747074,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta22943","meta22943",1553924147,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async22942.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22942.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22942";

cljs.core.async.t_cljs$core$async22942.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__17369__auto__,writer__17370__auto__,opt__17371__auto__){
return cljs.core._write.call(null,writer__17370__auto__,"cljs.core.async/t_cljs$core$async22942");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async22942 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async22942(map_LT___$1,f__$1,ch__$1,meta22940__$1,___$2,fn1__$1,meta22943){
return (new cljs.core.async.t_cljs$core$async22942(map_LT___$1,f__$1,ch__$1,meta22940__$1,___$2,fn1__$1,meta22943));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async22942(self__.map_LT_,self__.f,self__.ch,self__.meta22940,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__16759__auto__ = ret;
if(cljs.core.truth_(and__16759__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__16759__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async22939.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async22939.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async22939.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22940","meta22940",379025694,null)], null);
});

cljs.core.async.t_cljs$core$async22939.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22939.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22939";

cljs.core.async.t_cljs$core$async22939.cljs$lang$ctorPrWriter = (function (this__17369__auto__,writer__17370__auto__,opt__17371__auto__){
return cljs.core._write.call(null,writer__17370__auto__,"cljs.core.async/t_cljs$core$async22939");
});

cljs.core.async.__GT_t_cljs$core$async22939 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async22939(map_LT___$1,f__$1,ch__$1,meta22940){
return (new cljs.core.async.t_cljs$core$async22939(map_LT___$1,f__$1,ch__$1,meta22940));
});

}

return (new cljs.core.async.t_cljs$core$async22939(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async22948 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22948 = (function (map_GT_,f,ch,meta22949){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta22949 = meta22949;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22948.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22950,meta22949__$1){
var self__ = this;
var _22950__$1 = this;
return (new cljs.core.async.t_cljs$core$async22948(self__.map_GT_,self__.f,self__.ch,meta22949__$1));
});

cljs.core.async.t_cljs$core$async22948.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22950){
var self__ = this;
var _22950__$1 = this;
return self__.meta22949;
});

cljs.core.async.t_cljs$core$async22948.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async22948.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22948.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async22948.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async22948.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async22948.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async22948.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22949","meta22949",-2077249062,null)], null);
});

cljs.core.async.t_cljs$core$async22948.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22948.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22948";

cljs.core.async.t_cljs$core$async22948.cljs$lang$ctorPrWriter = (function (this__17369__auto__,writer__17370__auto__,opt__17371__auto__){
return cljs.core._write.call(null,writer__17370__auto__,"cljs.core.async/t_cljs$core$async22948");
});

cljs.core.async.__GT_t_cljs$core$async22948 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async22948(map_GT___$1,f__$1,ch__$1,meta22949){
return (new cljs.core.async.t_cljs$core$async22948(map_GT___$1,f__$1,ch__$1,meta22949));
});

}

return (new cljs.core.async.t_cljs$core$async22948(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async22954 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22954 = (function (filter_GT_,p,ch,meta22955){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta22955 = meta22955;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22954.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22956,meta22955__$1){
var self__ = this;
var _22956__$1 = this;
return (new cljs.core.async.t_cljs$core$async22954(self__.filter_GT_,self__.p,self__.ch,meta22955__$1));
});

cljs.core.async.t_cljs$core$async22954.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22956){
var self__ = this;
var _22956__$1 = this;
return self__.meta22955;
});

cljs.core.async.t_cljs$core$async22954.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async22954.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22954.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22954.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async22954.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async22954.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async22954.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async22954.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22955","meta22955",747273365,null)], null);
});

cljs.core.async.t_cljs$core$async22954.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22954.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22954";

cljs.core.async.t_cljs$core$async22954.cljs$lang$ctorPrWriter = (function (this__17369__auto__,writer__17370__auto__,opt__17371__auto__){
return cljs.core._write.call(null,writer__17370__auto__,"cljs.core.async/t_cljs$core$async22954");
});

cljs.core.async.__GT_t_cljs$core$async22954 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async22954(filter_GT___$1,p__$1,ch__$1,meta22955){
return (new cljs.core.async.t_cljs$core$async22954(filter_GT___$1,p__$1,ch__$1,meta22955));
});

}

return (new cljs.core.async.t_cljs$core$async22954(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args22957 = [];
var len__17829__auto___23001 = arguments.length;
var i__17830__auto___23002 = (0);
while(true){
if((i__17830__auto___23002 < len__17829__auto___23001)){
args22957.push((arguments[i__17830__auto___23002]));

var G__23003 = (i__17830__auto___23002 + (1));
i__17830__auto___23002 = G__23003;
continue;
} else {
}
break;
}

var G__22959 = args22957.length;
switch (G__22959) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22957.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20755__auto___23005 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20755__auto___23005,out){
return (function (){
var f__20756__auto__ = (function (){var switch__20643__auto__ = ((function (c__20755__auto___23005,out){
return (function (state_22980){
var state_val_22981 = (state_22980[(1)]);
if((state_val_22981 === (7))){
var inst_22976 = (state_22980[(2)]);
var state_22980__$1 = state_22980;
var statearr_22982_23006 = state_22980__$1;
(statearr_22982_23006[(2)] = inst_22976);

(statearr_22982_23006[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22981 === (1))){
var state_22980__$1 = state_22980;
var statearr_22983_23007 = state_22980__$1;
(statearr_22983_23007[(2)] = null);

(statearr_22983_23007[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22981 === (4))){
var inst_22962 = (state_22980[(7)]);
var inst_22962__$1 = (state_22980[(2)]);
var inst_22963 = (inst_22962__$1 == null);
var state_22980__$1 = (function (){var statearr_22984 = state_22980;
(statearr_22984[(7)] = inst_22962__$1);

return statearr_22984;
})();
if(cljs.core.truth_(inst_22963)){
var statearr_22985_23008 = state_22980__$1;
(statearr_22985_23008[(1)] = (5));

} else {
var statearr_22986_23009 = state_22980__$1;
(statearr_22986_23009[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22981 === (6))){
var inst_22962 = (state_22980[(7)]);
var inst_22967 = p.call(null,inst_22962);
var state_22980__$1 = state_22980;
if(cljs.core.truth_(inst_22967)){
var statearr_22987_23010 = state_22980__$1;
(statearr_22987_23010[(1)] = (8));

} else {
var statearr_22988_23011 = state_22980__$1;
(statearr_22988_23011[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22981 === (3))){
var inst_22978 = (state_22980[(2)]);
var state_22980__$1 = state_22980;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22980__$1,inst_22978);
} else {
if((state_val_22981 === (2))){
var state_22980__$1 = state_22980;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22980__$1,(4),ch);
} else {
if((state_val_22981 === (11))){
var inst_22970 = (state_22980[(2)]);
var state_22980__$1 = state_22980;
var statearr_22989_23012 = state_22980__$1;
(statearr_22989_23012[(2)] = inst_22970);

(statearr_22989_23012[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22981 === (9))){
var state_22980__$1 = state_22980;
var statearr_22990_23013 = state_22980__$1;
(statearr_22990_23013[(2)] = null);

(statearr_22990_23013[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22981 === (5))){
var inst_22965 = cljs.core.async.close_BANG_.call(null,out);
var state_22980__$1 = state_22980;
var statearr_22991_23014 = state_22980__$1;
(statearr_22991_23014[(2)] = inst_22965);

(statearr_22991_23014[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22981 === (10))){
var inst_22973 = (state_22980[(2)]);
var state_22980__$1 = (function (){var statearr_22992 = state_22980;
(statearr_22992[(8)] = inst_22973);

return statearr_22992;
})();
var statearr_22993_23015 = state_22980__$1;
(statearr_22993_23015[(2)] = null);

(statearr_22993_23015[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22981 === (8))){
var inst_22962 = (state_22980[(7)]);
var state_22980__$1 = state_22980;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22980__$1,(11),out,inst_22962);
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
});})(c__20755__auto___23005,out))
;
return ((function (switch__20643__auto__,c__20755__auto___23005,out){
return (function() {
var cljs$core$async$state_machine__20644__auto__ = null;
var cljs$core$async$state_machine__20644__auto____0 = (function (){
var statearr_22997 = [null,null,null,null,null,null,null,null,null];
(statearr_22997[(0)] = cljs$core$async$state_machine__20644__auto__);

(statearr_22997[(1)] = (1));

return statearr_22997;
});
var cljs$core$async$state_machine__20644__auto____1 = (function (state_22980){
while(true){
var ret_value__20645__auto__ = (function (){try{while(true){
var result__20646__auto__ = switch__20643__auto__.call(null,state_22980);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20646__auto__;
}
break;
}
}catch (e22998){if((e22998 instanceof Object)){
var ex__20647__auto__ = e22998;
var statearr_22999_23016 = state_22980;
(statearr_22999_23016[(5)] = ex__20647__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22980);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22998;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20645__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23017 = state_22980;
state_22980 = G__23017;
continue;
} else {
return ret_value__20645__auto__;
}
break;
}
});
cljs$core$async$state_machine__20644__auto__ = function(state_22980){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20644__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20644__auto____1.call(this,state_22980);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20644__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20644__auto____0;
cljs$core$async$state_machine__20644__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20644__auto____1;
return cljs$core$async$state_machine__20644__auto__;
})()
;})(switch__20643__auto__,c__20755__auto___23005,out))
})();
var state__20757__auto__ = (function (){var statearr_23000 = f__20756__auto__.call(null);
(statearr_23000[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20755__auto___23005);

return statearr_23000;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20757__auto__);
});})(c__20755__auto___23005,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args23018 = [];
var len__17829__auto___23021 = arguments.length;
var i__17830__auto___23022 = (0);
while(true){
if((i__17830__auto___23022 < len__17829__auto___23021)){
args23018.push((arguments[i__17830__auto___23022]));

var G__23023 = (i__17830__auto___23022 + (1));
i__17830__auto___23022 = G__23023;
continue;
} else {
}
break;
}

var G__23020 = args23018.length;
switch (G__23020) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23018.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__20755__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20755__auto__){
return (function (){
var f__20756__auto__ = (function (){var switch__20643__auto__ = ((function (c__20755__auto__){
return (function (state_23190){
var state_val_23191 = (state_23190[(1)]);
if((state_val_23191 === (7))){
var inst_23186 = (state_23190[(2)]);
var state_23190__$1 = state_23190;
var statearr_23192_23233 = state_23190__$1;
(statearr_23192_23233[(2)] = inst_23186);

(statearr_23192_23233[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23191 === (20))){
var inst_23156 = (state_23190[(7)]);
var inst_23167 = (state_23190[(2)]);
var inst_23168 = cljs.core.next.call(null,inst_23156);
var inst_23142 = inst_23168;
var inst_23143 = null;
var inst_23144 = (0);
var inst_23145 = (0);
var state_23190__$1 = (function (){var statearr_23193 = state_23190;
(statearr_23193[(8)] = inst_23144);

(statearr_23193[(9)] = inst_23145);

(statearr_23193[(10)] = inst_23142);

(statearr_23193[(11)] = inst_23143);

(statearr_23193[(12)] = inst_23167);

return statearr_23193;
})();
var statearr_23194_23234 = state_23190__$1;
(statearr_23194_23234[(2)] = null);

(statearr_23194_23234[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23191 === (1))){
var state_23190__$1 = state_23190;
var statearr_23195_23235 = state_23190__$1;
(statearr_23195_23235[(2)] = null);

(statearr_23195_23235[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23191 === (4))){
var inst_23131 = (state_23190[(13)]);
var inst_23131__$1 = (state_23190[(2)]);
var inst_23132 = (inst_23131__$1 == null);
var state_23190__$1 = (function (){var statearr_23196 = state_23190;
(statearr_23196[(13)] = inst_23131__$1);

return statearr_23196;
})();
if(cljs.core.truth_(inst_23132)){
var statearr_23197_23236 = state_23190__$1;
(statearr_23197_23236[(1)] = (5));

} else {
var statearr_23198_23237 = state_23190__$1;
(statearr_23198_23237[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23191 === (15))){
var state_23190__$1 = state_23190;
var statearr_23202_23238 = state_23190__$1;
(statearr_23202_23238[(2)] = null);

(statearr_23202_23238[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23191 === (21))){
var state_23190__$1 = state_23190;
var statearr_23203_23239 = state_23190__$1;
(statearr_23203_23239[(2)] = null);

(statearr_23203_23239[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23191 === (13))){
var inst_23144 = (state_23190[(8)]);
var inst_23145 = (state_23190[(9)]);
var inst_23142 = (state_23190[(10)]);
var inst_23143 = (state_23190[(11)]);
var inst_23152 = (state_23190[(2)]);
var inst_23153 = (inst_23145 + (1));
var tmp23199 = inst_23144;
var tmp23200 = inst_23142;
var tmp23201 = inst_23143;
var inst_23142__$1 = tmp23200;
var inst_23143__$1 = tmp23201;
var inst_23144__$1 = tmp23199;
var inst_23145__$1 = inst_23153;
var state_23190__$1 = (function (){var statearr_23204 = state_23190;
(statearr_23204[(8)] = inst_23144__$1);

(statearr_23204[(14)] = inst_23152);

(statearr_23204[(9)] = inst_23145__$1);

(statearr_23204[(10)] = inst_23142__$1);

(statearr_23204[(11)] = inst_23143__$1);

return statearr_23204;
})();
var statearr_23205_23240 = state_23190__$1;
(statearr_23205_23240[(2)] = null);

(statearr_23205_23240[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23191 === (22))){
var state_23190__$1 = state_23190;
var statearr_23206_23241 = state_23190__$1;
(statearr_23206_23241[(2)] = null);

(statearr_23206_23241[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23191 === (6))){
var inst_23131 = (state_23190[(13)]);
var inst_23140 = f.call(null,inst_23131);
var inst_23141 = cljs.core.seq.call(null,inst_23140);
var inst_23142 = inst_23141;
var inst_23143 = null;
var inst_23144 = (0);
var inst_23145 = (0);
var state_23190__$1 = (function (){var statearr_23207 = state_23190;
(statearr_23207[(8)] = inst_23144);

(statearr_23207[(9)] = inst_23145);

(statearr_23207[(10)] = inst_23142);

(statearr_23207[(11)] = inst_23143);

return statearr_23207;
})();
var statearr_23208_23242 = state_23190__$1;
(statearr_23208_23242[(2)] = null);

(statearr_23208_23242[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23191 === (17))){
var inst_23156 = (state_23190[(7)]);
var inst_23160 = cljs.core.chunk_first.call(null,inst_23156);
var inst_23161 = cljs.core.chunk_rest.call(null,inst_23156);
var inst_23162 = cljs.core.count.call(null,inst_23160);
var inst_23142 = inst_23161;
var inst_23143 = inst_23160;
var inst_23144 = inst_23162;
var inst_23145 = (0);
var state_23190__$1 = (function (){var statearr_23209 = state_23190;
(statearr_23209[(8)] = inst_23144);

(statearr_23209[(9)] = inst_23145);

(statearr_23209[(10)] = inst_23142);

(statearr_23209[(11)] = inst_23143);

return statearr_23209;
})();
var statearr_23210_23243 = state_23190__$1;
(statearr_23210_23243[(2)] = null);

(statearr_23210_23243[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23191 === (3))){
var inst_23188 = (state_23190[(2)]);
var state_23190__$1 = state_23190;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23190__$1,inst_23188);
} else {
if((state_val_23191 === (12))){
var inst_23176 = (state_23190[(2)]);
var state_23190__$1 = state_23190;
var statearr_23211_23244 = state_23190__$1;
(statearr_23211_23244[(2)] = inst_23176);

(statearr_23211_23244[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23191 === (2))){
var state_23190__$1 = state_23190;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23190__$1,(4),in$);
} else {
if((state_val_23191 === (23))){
var inst_23184 = (state_23190[(2)]);
var state_23190__$1 = state_23190;
var statearr_23212_23245 = state_23190__$1;
(statearr_23212_23245[(2)] = inst_23184);

(statearr_23212_23245[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23191 === (19))){
var inst_23171 = (state_23190[(2)]);
var state_23190__$1 = state_23190;
var statearr_23213_23246 = state_23190__$1;
(statearr_23213_23246[(2)] = inst_23171);

(statearr_23213_23246[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23191 === (11))){
var inst_23156 = (state_23190[(7)]);
var inst_23142 = (state_23190[(10)]);
var inst_23156__$1 = cljs.core.seq.call(null,inst_23142);
var state_23190__$1 = (function (){var statearr_23214 = state_23190;
(statearr_23214[(7)] = inst_23156__$1);

return statearr_23214;
})();
if(inst_23156__$1){
var statearr_23215_23247 = state_23190__$1;
(statearr_23215_23247[(1)] = (14));

} else {
var statearr_23216_23248 = state_23190__$1;
(statearr_23216_23248[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23191 === (9))){
var inst_23178 = (state_23190[(2)]);
var inst_23179 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_23190__$1 = (function (){var statearr_23217 = state_23190;
(statearr_23217[(15)] = inst_23178);

return statearr_23217;
})();
if(cljs.core.truth_(inst_23179)){
var statearr_23218_23249 = state_23190__$1;
(statearr_23218_23249[(1)] = (21));

} else {
var statearr_23219_23250 = state_23190__$1;
(statearr_23219_23250[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23191 === (5))){
var inst_23134 = cljs.core.async.close_BANG_.call(null,out);
var state_23190__$1 = state_23190;
var statearr_23220_23251 = state_23190__$1;
(statearr_23220_23251[(2)] = inst_23134);

(statearr_23220_23251[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23191 === (14))){
var inst_23156 = (state_23190[(7)]);
var inst_23158 = cljs.core.chunked_seq_QMARK_.call(null,inst_23156);
var state_23190__$1 = state_23190;
if(inst_23158){
var statearr_23221_23252 = state_23190__$1;
(statearr_23221_23252[(1)] = (17));

} else {
var statearr_23222_23253 = state_23190__$1;
(statearr_23222_23253[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23191 === (16))){
var inst_23174 = (state_23190[(2)]);
var state_23190__$1 = state_23190;
var statearr_23223_23254 = state_23190__$1;
(statearr_23223_23254[(2)] = inst_23174);

(statearr_23223_23254[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23191 === (10))){
var inst_23145 = (state_23190[(9)]);
var inst_23143 = (state_23190[(11)]);
var inst_23150 = cljs.core._nth.call(null,inst_23143,inst_23145);
var state_23190__$1 = state_23190;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23190__$1,(13),out,inst_23150);
} else {
if((state_val_23191 === (18))){
var inst_23156 = (state_23190[(7)]);
var inst_23165 = cljs.core.first.call(null,inst_23156);
var state_23190__$1 = state_23190;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23190__$1,(20),out,inst_23165);
} else {
if((state_val_23191 === (8))){
var inst_23144 = (state_23190[(8)]);
var inst_23145 = (state_23190[(9)]);
var inst_23147 = (inst_23145 < inst_23144);
var inst_23148 = inst_23147;
var state_23190__$1 = state_23190;
if(cljs.core.truth_(inst_23148)){
var statearr_23224_23255 = state_23190__$1;
(statearr_23224_23255[(1)] = (10));

} else {
var statearr_23225_23256 = state_23190__$1;
(statearr_23225_23256[(1)] = (11));

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
}
}
}
}
}
}
});})(c__20755__auto__))
;
return ((function (switch__20643__auto__,c__20755__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__20644__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__20644__auto____0 = (function (){
var statearr_23229 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23229[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__20644__auto__);

(statearr_23229[(1)] = (1));

return statearr_23229;
});
var cljs$core$async$mapcat_STAR__$_state_machine__20644__auto____1 = (function (state_23190){
while(true){
var ret_value__20645__auto__ = (function (){try{while(true){
var result__20646__auto__ = switch__20643__auto__.call(null,state_23190);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20646__auto__;
}
break;
}
}catch (e23230){if((e23230 instanceof Object)){
var ex__20647__auto__ = e23230;
var statearr_23231_23257 = state_23190;
(statearr_23231_23257[(5)] = ex__20647__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23190);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23230;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20645__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23258 = state_23190;
state_23190 = G__23258;
continue;
} else {
return ret_value__20645__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__20644__auto__ = function(state_23190){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__20644__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__20644__auto____1.call(this,state_23190);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__20644__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__20644__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__20644__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__20644__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__20644__auto__;
})()
;})(switch__20643__auto__,c__20755__auto__))
})();
var state__20757__auto__ = (function (){var statearr_23232 = f__20756__auto__.call(null);
(statearr_23232[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20755__auto__);

return statearr_23232;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20757__auto__);
});})(c__20755__auto__))
);

return c__20755__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args23259 = [];
var len__17829__auto___23262 = arguments.length;
var i__17830__auto___23263 = (0);
while(true){
if((i__17830__auto___23263 < len__17829__auto___23262)){
args23259.push((arguments[i__17830__auto___23263]));

var G__23264 = (i__17830__auto___23263 + (1));
i__17830__auto___23263 = G__23264;
continue;
} else {
}
break;
}

var G__23261 = args23259.length;
switch (G__23261) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23259.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args23266 = [];
var len__17829__auto___23269 = arguments.length;
var i__17830__auto___23270 = (0);
while(true){
if((i__17830__auto___23270 < len__17829__auto___23269)){
args23266.push((arguments[i__17830__auto___23270]));

var G__23271 = (i__17830__auto___23270 + (1));
i__17830__auto___23270 = G__23271;
continue;
} else {
}
break;
}

var G__23268 = args23266.length;
switch (G__23268) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23266.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args23273 = [];
var len__17829__auto___23324 = arguments.length;
var i__17830__auto___23325 = (0);
while(true){
if((i__17830__auto___23325 < len__17829__auto___23324)){
args23273.push((arguments[i__17830__auto___23325]));

var G__23326 = (i__17830__auto___23325 + (1));
i__17830__auto___23325 = G__23326;
continue;
} else {
}
break;
}

var G__23275 = args23273.length;
switch (G__23275) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23273.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20755__auto___23328 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20755__auto___23328,out){
return (function (){
var f__20756__auto__ = (function (){var switch__20643__auto__ = ((function (c__20755__auto___23328,out){
return (function (state_23299){
var state_val_23300 = (state_23299[(1)]);
if((state_val_23300 === (7))){
var inst_23294 = (state_23299[(2)]);
var state_23299__$1 = state_23299;
var statearr_23301_23329 = state_23299__$1;
(statearr_23301_23329[(2)] = inst_23294);

(statearr_23301_23329[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23300 === (1))){
var inst_23276 = null;
var state_23299__$1 = (function (){var statearr_23302 = state_23299;
(statearr_23302[(7)] = inst_23276);

return statearr_23302;
})();
var statearr_23303_23330 = state_23299__$1;
(statearr_23303_23330[(2)] = null);

(statearr_23303_23330[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23300 === (4))){
var inst_23279 = (state_23299[(8)]);
var inst_23279__$1 = (state_23299[(2)]);
var inst_23280 = (inst_23279__$1 == null);
var inst_23281 = cljs.core.not.call(null,inst_23280);
var state_23299__$1 = (function (){var statearr_23304 = state_23299;
(statearr_23304[(8)] = inst_23279__$1);

return statearr_23304;
})();
if(inst_23281){
var statearr_23305_23331 = state_23299__$1;
(statearr_23305_23331[(1)] = (5));

} else {
var statearr_23306_23332 = state_23299__$1;
(statearr_23306_23332[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23300 === (6))){
var state_23299__$1 = state_23299;
var statearr_23307_23333 = state_23299__$1;
(statearr_23307_23333[(2)] = null);

(statearr_23307_23333[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23300 === (3))){
var inst_23296 = (state_23299[(2)]);
var inst_23297 = cljs.core.async.close_BANG_.call(null,out);
var state_23299__$1 = (function (){var statearr_23308 = state_23299;
(statearr_23308[(9)] = inst_23296);

return statearr_23308;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23299__$1,inst_23297);
} else {
if((state_val_23300 === (2))){
var state_23299__$1 = state_23299;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23299__$1,(4),ch);
} else {
if((state_val_23300 === (11))){
var inst_23279 = (state_23299[(8)]);
var inst_23288 = (state_23299[(2)]);
var inst_23276 = inst_23279;
var state_23299__$1 = (function (){var statearr_23309 = state_23299;
(statearr_23309[(10)] = inst_23288);

(statearr_23309[(7)] = inst_23276);

return statearr_23309;
})();
var statearr_23310_23334 = state_23299__$1;
(statearr_23310_23334[(2)] = null);

(statearr_23310_23334[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23300 === (9))){
var inst_23279 = (state_23299[(8)]);
var state_23299__$1 = state_23299;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23299__$1,(11),out,inst_23279);
} else {
if((state_val_23300 === (5))){
var inst_23276 = (state_23299[(7)]);
var inst_23279 = (state_23299[(8)]);
var inst_23283 = cljs.core._EQ_.call(null,inst_23279,inst_23276);
var state_23299__$1 = state_23299;
if(inst_23283){
var statearr_23312_23335 = state_23299__$1;
(statearr_23312_23335[(1)] = (8));

} else {
var statearr_23313_23336 = state_23299__$1;
(statearr_23313_23336[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23300 === (10))){
var inst_23291 = (state_23299[(2)]);
var state_23299__$1 = state_23299;
var statearr_23314_23337 = state_23299__$1;
(statearr_23314_23337[(2)] = inst_23291);

(statearr_23314_23337[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23300 === (8))){
var inst_23276 = (state_23299[(7)]);
var tmp23311 = inst_23276;
var inst_23276__$1 = tmp23311;
var state_23299__$1 = (function (){var statearr_23315 = state_23299;
(statearr_23315[(7)] = inst_23276__$1);

return statearr_23315;
})();
var statearr_23316_23338 = state_23299__$1;
(statearr_23316_23338[(2)] = null);

(statearr_23316_23338[(1)] = (2));


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
});})(c__20755__auto___23328,out))
;
return ((function (switch__20643__auto__,c__20755__auto___23328,out){
return (function() {
var cljs$core$async$state_machine__20644__auto__ = null;
var cljs$core$async$state_machine__20644__auto____0 = (function (){
var statearr_23320 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23320[(0)] = cljs$core$async$state_machine__20644__auto__);

(statearr_23320[(1)] = (1));

return statearr_23320;
});
var cljs$core$async$state_machine__20644__auto____1 = (function (state_23299){
while(true){
var ret_value__20645__auto__ = (function (){try{while(true){
var result__20646__auto__ = switch__20643__auto__.call(null,state_23299);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20646__auto__;
}
break;
}
}catch (e23321){if((e23321 instanceof Object)){
var ex__20647__auto__ = e23321;
var statearr_23322_23339 = state_23299;
(statearr_23322_23339[(5)] = ex__20647__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23299);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23321;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20645__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23340 = state_23299;
state_23299 = G__23340;
continue;
} else {
return ret_value__20645__auto__;
}
break;
}
});
cljs$core$async$state_machine__20644__auto__ = function(state_23299){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20644__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20644__auto____1.call(this,state_23299);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20644__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20644__auto____0;
cljs$core$async$state_machine__20644__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20644__auto____1;
return cljs$core$async$state_machine__20644__auto__;
})()
;})(switch__20643__auto__,c__20755__auto___23328,out))
})();
var state__20757__auto__ = (function (){var statearr_23323 = f__20756__auto__.call(null);
(statearr_23323[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20755__auto___23328);

return statearr_23323;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20757__auto__);
});})(c__20755__auto___23328,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args23341 = [];
var len__17829__auto___23411 = arguments.length;
var i__17830__auto___23412 = (0);
while(true){
if((i__17830__auto___23412 < len__17829__auto___23411)){
args23341.push((arguments[i__17830__auto___23412]));

var G__23413 = (i__17830__auto___23412 + (1));
i__17830__auto___23412 = G__23413;
continue;
} else {
}
break;
}

var G__23343 = args23341.length;
switch (G__23343) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23341.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20755__auto___23415 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20755__auto___23415,out){
return (function (){
var f__20756__auto__ = (function (){var switch__20643__auto__ = ((function (c__20755__auto___23415,out){
return (function (state_23381){
var state_val_23382 = (state_23381[(1)]);
if((state_val_23382 === (7))){
var inst_23377 = (state_23381[(2)]);
var state_23381__$1 = state_23381;
var statearr_23383_23416 = state_23381__$1;
(statearr_23383_23416[(2)] = inst_23377);

(statearr_23383_23416[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23382 === (1))){
var inst_23344 = (new Array(n));
var inst_23345 = inst_23344;
var inst_23346 = (0);
var state_23381__$1 = (function (){var statearr_23384 = state_23381;
(statearr_23384[(7)] = inst_23345);

(statearr_23384[(8)] = inst_23346);

return statearr_23384;
})();
var statearr_23385_23417 = state_23381__$1;
(statearr_23385_23417[(2)] = null);

(statearr_23385_23417[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23382 === (4))){
var inst_23349 = (state_23381[(9)]);
var inst_23349__$1 = (state_23381[(2)]);
var inst_23350 = (inst_23349__$1 == null);
var inst_23351 = cljs.core.not.call(null,inst_23350);
var state_23381__$1 = (function (){var statearr_23386 = state_23381;
(statearr_23386[(9)] = inst_23349__$1);

return statearr_23386;
})();
if(inst_23351){
var statearr_23387_23418 = state_23381__$1;
(statearr_23387_23418[(1)] = (5));

} else {
var statearr_23388_23419 = state_23381__$1;
(statearr_23388_23419[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23382 === (15))){
var inst_23371 = (state_23381[(2)]);
var state_23381__$1 = state_23381;
var statearr_23389_23420 = state_23381__$1;
(statearr_23389_23420[(2)] = inst_23371);

(statearr_23389_23420[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23382 === (13))){
var state_23381__$1 = state_23381;
var statearr_23390_23421 = state_23381__$1;
(statearr_23390_23421[(2)] = null);

(statearr_23390_23421[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23382 === (6))){
var inst_23346 = (state_23381[(8)]);
var inst_23367 = (inst_23346 > (0));
var state_23381__$1 = state_23381;
if(cljs.core.truth_(inst_23367)){
var statearr_23391_23422 = state_23381__$1;
(statearr_23391_23422[(1)] = (12));

} else {
var statearr_23392_23423 = state_23381__$1;
(statearr_23392_23423[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23382 === (3))){
var inst_23379 = (state_23381[(2)]);
var state_23381__$1 = state_23381;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23381__$1,inst_23379);
} else {
if((state_val_23382 === (12))){
var inst_23345 = (state_23381[(7)]);
var inst_23369 = cljs.core.vec.call(null,inst_23345);
var state_23381__$1 = state_23381;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23381__$1,(15),out,inst_23369);
} else {
if((state_val_23382 === (2))){
var state_23381__$1 = state_23381;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23381__$1,(4),ch);
} else {
if((state_val_23382 === (11))){
var inst_23361 = (state_23381[(2)]);
var inst_23362 = (new Array(n));
var inst_23345 = inst_23362;
var inst_23346 = (0);
var state_23381__$1 = (function (){var statearr_23393 = state_23381;
(statearr_23393[(7)] = inst_23345);

(statearr_23393[(10)] = inst_23361);

(statearr_23393[(8)] = inst_23346);

return statearr_23393;
})();
var statearr_23394_23424 = state_23381__$1;
(statearr_23394_23424[(2)] = null);

(statearr_23394_23424[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23382 === (9))){
var inst_23345 = (state_23381[(7)]);
var inst_23359 = cljs.core.vec.call(null,inst_23345);
var state_23381__$1 = state_23381;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23381__$1,(11),out,inst_23359);
} else {
if((state_val_23382 === (5))){
var inst_23354 = (state_23381[(11)]);
var inst_23345 = (state_23381[(7)]);
var inst_23349 = (state_23381[(9)]);
var inst_23346 = (state_23381[(8)]);
var inst_23353 = (inst_23345[inst_23346] = inst_23349);
var inst_23354__$1 = (inst_23346 + (1));
var inst_23355 = (inst_23354__$1 < n);
var state_23381__$1 = (function (){var statearr_23395 = state_23381;
(statearr_23395[(12)] = inst_23353);

(statearr_23395[(11)] = inst_23354__$1);

return statearr_23395;
})();
if(cljs.core.truth_(inst_23355)){
var statearr_23396_23425 = state_23381__$1;
(statearr_23396_23425[(1)] = (8));

} else {
var statearr_23397_23426 = state_23381__$1;
(statearr_23397_23426[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23382 === (14))){
var inst_23374 = (state_23381[(2)]);
var inst_23375 = cljs.core.async.close_BANG_.call(null,out);
var state_23381__$1 = (function (){var statearr_23399 = state_23381;
(statearr_23399[(13)] = inst_23374);

return statearr_23399;
})();
var statearr_23400_23427 = state_23381__$1;
(statearr_23400_23427[(2)] = inst_23375);

(statearr_23400_23427[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23382 === (10))){
var inst_23365 = (state_23381[(2)]);
var state_23381__$1 = state_23381;
var statearr_23401_23428 = state_23381__$1;
(statearr_23401_23428[(2)] = inst_23365);

(statearr_23401_23428[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23382 === (8))){
var inst_23354 = (state_23381[(11)]);
var inst_23345 = (state_23381[(7)]);
var tmp23398 = inst_23345;
var inst_23345__$1 = tmp23398;
var inst_23346 = inst_23354;
var state_23381__$1 = (function (){var statearr_23402 = state_23381;
(statearr_23402[(7)] = inst_23345__$1);

(statearr_23402[(8)] = inst_23346);

return statearr_23402;
})();
var statearr_23403_23429 = state_23381__$1;
(statearr_23403_23429[(2)] = null);

(statearr_23403_23429[(1)] = (2));


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
});})(c__20755__auto___23415,out))
;
return ((function (switch__20643__auto__,c__20755__auto___23415,out){
return (function() {
var cljs$core$async$state_machine__20644__auto__ = null;
var cljs$core$async$state_machine__20644__auto____0 = (function (){
var statearr_23407 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23407[(0)] = cljs$core$async$state_machine__20644__auto__);

(statearr_23407[(1)] = (1));

return statearr_23407;
});
var cljs$core$async$state_machine__20644__auto____1 = (function (state_23381){
while(true){
var ret_value__20645__auto__ = (function (){try{while(true){
var result__20646__auto__ = switch__20643__auto__.call(null,state_23381);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20646__auto__;
}
break;
}
}catch (e23408){if((e23408 instanceof Object)){
var ex__20647__auto__ = e23408;
var statearr_23409_23430 = state_23381;
(statearr_23409_23430[(5)] = ex__20647__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23381);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23408;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20645__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23431 = state_23381;
state_23381 = G__23431;
continue;
} else {
return ret_value__20645__auto__;
}
break;
}
});
cljs$core$async$state_machine__20644__auto__ = function(state_23381){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20644__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20644__auto____1.call(this,state_23381);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20644__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20644__auto____0;
cljs$core$async$state_machine__20644__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20644__auto____1;
return cljs$core$async$state_machine__20644__auto__;
})()
;})(switch__20643__auto__,c__20755__auto___23415,out))
})();
var state__20757__auto__ = (function (){var statearr_23410 = f__20756__auto__.call(null);
(statearr_23410[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20755__auto___23415);

return statearr_23410;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20757__auto__);
});})(c__20755__auto___23415,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args23432 = [];
var len__17829__auto___23506 = arguments.length;
var i__17830__auto___23507 = (0);
while(true){
if((i__17830__auto___23507 < len__17829__auto___23506)){
args23432.push((arguments[i__17830__auto___23507]));

var G__23508 = (i__17830__auto___23507 + (1));
i__17830__auto___23507 = G__23508;
continue;
} else {
}
break;
}

var G__23434 = args23432.length;
switch (G__23434) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23432.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20755__auto___23510 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20755__auto___23510,out){
return (function (){
var f__20756__auto__ = (function (){var switch__20643__auto__ = ((function (c__20755__auto___23510,out){
return (function (state_23476){
var state_val_23477 = (state_23476[(1)]);
if((state_val_23477 === (7))){
var inst_23472 = (state_23476[(2)]);
var state_23476__$1 = state_23476;
var statearr_23478_23511 = state_23476__$1;
(statearr_23478_23511[(2)] = inst_23472);

(statearr_23478_23511[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23477 === (1))){
var inst_23435 = [];
var inst_23436 = inst_23435;
var inst_23437 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_23476__$1 = (function (){var statearr_23479 = state_23476;
(statearr_23479[(7)] = inst_23437);

(statearr_23479[(8)] = inst_23436);

return statearr_23479;
})();
var statearr_23480_23512 = state_23476__$1;
(statearr_23480_23512[(2)] = null);

(statearr_23480_23512[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23477 === (4))){
var inst_23440 = (state_23476[(9)]);
var inst_23440__$1 = (state_23476[(2)]);
var inst_23441 = (inst_23440__$1 == null);
var inst_23442 = cljs.core.not.call(null,inst_23441);
var state_23476__$1 = (function (){var statearr_23481 = state_23476;
(statearr_23481[(9)] = inst_23440__$1);

return statearr_23481;
})();
if(inst_23442){
var statearr_23482_23513 = state_23476__$1;
(statearr_23482_23513[(1)] = (5));

} else {
var statearr_23483_23514 = state_23476__$1;
(statearr_23483_23514[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23477 === (15))){
var inst_23466 = (state_23476[(2)]);
var state_23476__$1 = state_23476;
var statearr_23484_23515 = state_23476__$1;
(statearr_23484_23515[(2)] = inst_23466);

(statearr_23484_23515[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23477 === (13))){
var state_23476__$1 = state_23476;
var statearr_23485_23516 = state_23476__$1;
(statearr_23485_23516[(2)] = null);

(statearr_23485_23516[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23477 === (6))){
var inst_23436 = (state_23476[(8)]);
var inst_23461 = inst_23436.length;
var inst_23462 = (inst_23461 > (0));
var state_23476__$1 = state_23476;
if(cljs.core.truth_(inst_23462)){
var statearr_23486_23517 = state_23476__$1;
(statearr_23486_23517[(1)] = (12));

} else {
var statearr_23487_23518 = state_23476__$1;
(statearr_23487_23518[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23477 === (3))){
var inst_23474 = (state_23476[(2)]);
var state_23476__$1 = state_23476;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23476__$1,inst_23474);
} else {
if((state_val_23477 === (12))){
var inst_23436 = (state_23476[(8)]);
var inst_23464 = cljs.core.vec.call(null,inst_23436);
var state_23476__$1 = state_23476;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23476__$1,(15),out,inst_23464);
} else {
if((state_val_23477 === (2))){
var state_23476__$1 = state_23476;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23476__$1,(4),ch);
} else {
if((state_val_23477 === (11))){
var inst_23444 = (state_23476[(10)]);
var inst_23440 = (state_23476[(9)]);
var inst_23454 = (state_23476[(2)]);
var inst_23455 = [];
var inst_23456 = inst_23455.push(inst_23440);
var inst_23436 = inst_23455;
var inst_23437 = inst_23444;
var state_23476__$1 = (function (){var statearr_23488 = state_23476;
(statearr_23488[(7)] = inst_23437);

(statearr_23488[(11)] = inst_23454);

(statearr_23488[(8)] = inst_23436);

(statearr_23488[(12)] = inst_23456);

return statearr_23488;
})();
var statearr_23489_23519 = state_23476__$1;
(statearr_23489_23519[(2)] = null);

(statearr_23489_23519[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23477 === (9))){
var inst_23436 = (state_23476[(8)]);
var inst_23452 = cljs.core.vec.call(null,inst_23436);
var state_23476__$1 = state_23476;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23476__$1,(11),out,inst_23452);
} else {
if((state_val_23477 === (5))){
var inst_23437 = (state_23476[(7)]);
var inst_23444 = (state_23476[(10)]);
var inst_23440 = (state_23476[(9)]);
var inst_23444__$1 = f.call(null,inst_23440);
var inst_23445 = cljs.core._EQ_.call(null,inst_23444__$1,inst_23437);
var inst_23446 = cljs.core.keyword_identical_QMARK_.call(null,inst_23437,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_23447 = (inst_23445) || (inst_23446);
var state_23476__$1 = (function (){var statearr_23490 = state_23476;
(statearr_23490[(10)] = inst_23444__$1);

return statearr_23490;
})();
if(cljs.core.truth_(inst_23447)){
var statearr_23491_23520 = state_23476__$1;
(statearr_23491_23520[(1)] = (8));

} else {
var statearr_23492_23521 = state_23476__$1;
(statearr_23492_23521[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23477 === (14))){
var inst_23469 = (state_23476[(2)]);
var inst_23470 = cljs.core.async.close_BANG_.call(null,out);
var state_23476__$1 = (function (){var statearr_23494 = state_23476;
(statearr_23494[(13)] = inst_23469);

return statearr_23494;
})();
var statearr_23495_23522 = state_23476__$1;
(statearr_23495_23522[(2)] = inst_23470);

(statearr_23495_23522[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23477 === (10))){
var inst_23459 = (state_23476[(2)]);
var state_23476__$1 = state_23476;
var statearr_23496_23523 = state_23476__$1;
(statearr_23496_23523[(2)] = inst_23459);

(statearr_23496_23523[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23477 === (8))){
var inst_23444 = (state_23476[(10)]);
var inst_23436 = (state_23476[(8)]);
var inst_23440 = (state_23476[(9)]);
var inst_23449 = inst_23436.push(inst_23440);
var tmp23493 = inst_23436;
var inst_23436__$1 = tmp23493;
var inst_23437 = inst_23444;
var state_23476__$1 = (function (){var statearr_23497 = state_23476;
(statearr_23497[(7)] = inst_23437);

(statearr_23497[(8)] = inst_23436__$1);

(statearr_23497[(14)] = inst_23449);

return statearr_23497;
})();
var statearr_23498_23524 = state_23476__$1;
(statearr_23498_23524[(2)] = null);

(statearr_23498_23524[(1)] = (2));


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
});})(c__20755__auto___23510,out))
;
return ((function (switch__20643__auto__,c__20755__auto___23510,out){
return (function() {
var cljs$core$async$state_machine__20644__auto__ = null;
var cljs$core$async$state_machine__20644__auto____0 = (function (){
var statearr_23502 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23502[(0)] = cljs$core$async$state_machine__20644__auto__);

(statearr_23502[(1)] = (1));

return statearr_23502;
});
var cljs$core$async$state_machine__20644__auto____1 = (function (state_23476){
while(true){
var ret_value__20645__auto__ = (function (){try{while(true){
var result__20646__auto__ = switch__20643__auto__.call(null,state_23476);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20646__auto__;
}
break;
}
}catch (e23503){if((e23503 instanceof Object)){
var ex__20647__auto__ = e23503;
var statearr_23504_23525 = state_23476;
(statearr_23504_23525[(5)] = ex__20647__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23476);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23503;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20645__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23526 = state_23476;
state_23476 = G__23526;
continue;
} else {
return ret_value__20645__auto__;
}
break;
}
});
cljs$core$async$state_machine__20644__auto__ = function(state_23476){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20644__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20644__auto____1.call(this,state_23476);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20644__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20644__auto____0;
cljs$core$async$state_machine__20644__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20644__auto____1;
return cljs$core$async$state_machine__20644__auto__;
})()
;})(switch__20643__auto__,c__20755__auto___23510,out))
})();
var state__20757__auto__ = (function (){var statearr_23505 = f__20756__auto__.call(null);
(statearr_23505[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20755__auto___23510);

return statearr_23505;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20757__auto__);
});})(c__20755__auto___23510,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map