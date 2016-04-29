// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__25729_25743 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__25730_25744 = null;
var count__25731_25745 = (0);
var i__25732_25746 = (0);
while(true){
if((i__25732_25746 < count__25731_25745)){
var f_25747 = cljs.core._nth.call(null,chunk__25730_25744,i__25732_25746);
cljs.core.println.call(null,"  ",f_25747);

var G__25748 = seq__25729_25743;
var G__25749 = chunk__25730_25744;
var G__25750 = count__25731_25745;
var G__25751 = (i__25732_25746 + (1));
seq__25729_25743 = G__25748;
chunk__25730_25744 = G__25749;
count__25731_25745 = G__25750;
i__25732_25746 = G__25751;
continue;
} else {
var temp__4425__auto___25752 = cljs.core.seq.call(null,seq__25729_25743);
if(temp__4425__auto___25752){
var seq__25729_25753__$1 = temp__4425__auto___25752;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25729_25753__$1)){
var c__17574__auto___25754 = cljs.core.chunk_first.call(null,seq__25729_25753__$1);
var G__25755 = cljs.core.chunk_rest.call(null,seq__25729_25753__$1);
var G__25756 = c__17574__auto___25754;
var G__25757 = cljs.core.count.call(null,c__17574__auto___25754);
var G__25758 = (0);
seq__25729_25743 = G__25755;
chunk__25730_25744 = G__25756;
count__25731_25745 = G__25757;
i__25732_25746 = G__25758;
continue;
} else {
var f_25759 = cljs.core.first.call(null,seq__25729_25753__$1);
cljs.core.println.call(null,"  ",f_25759);

var G__25760 = cljs.core.next.call(null,seq__25729_25753__$1);
var G__25761 = null;
var G__25762 = (0);
var G__25763 = (0);
seq__25729_25743 = G__25760;
chunk__25730_25744 = G__25761;
count__25731_25745 = G__25762;
i__25732_25746 = G__25763;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_25764 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16771__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16771__auto__)){
return or__16771__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_25764);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_25764)))?cljs.core.second.call(null,arglists_25764):arglists_25764));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__25733 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__25734 = null;
var count__25735 = (0);
var i__25736 = (0);
while(true){
if((i__25736 < count__25735)){
var vec__25737 = cljs.core._nth.call(null,chunk__25734,i__25736);
var name = cljs.core.nth.call(null,vec__25737,(0),null);
var map__25738 = cljs.core.nth.call(null,vec__25737,(1),null);
var map__25738__$1 = ((((!((map__25738 == null)))?((((map__25738.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25738.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25738):map__25738);
var doc = cljs.core.get.call(null,map__25738__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__25738__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__25765 = seq__25733;
var G__25766 = chunk__25734;
var G__25767 = count__25735;
var G__25768 = (i__25736 + (1));
seq__25733 = G__25765;
chunk__25734 = G__25766;
count__25735 = G__25767;
i__25736 = G__25768;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__25733);
if(temp__4425__auto__){
var seq__25733__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25733__$1)){
var c__17574__auto__ = cljs.core.chunk_first.call(null,seq__25733__$1);
var G__25769 = cljs.core.chunk_rest.call(null,seq__25733__$1);
var G__25770 = c__17574__auto__;
var G__25771 = cljs.core.count.call(null,c__17574__auto__);
var G__25772 = (0);
seq__25733 = G__25769;
chunk__25734 = G__25770;
count__25735 = G__25771;
i__25736 = G__25772;
continue;
} else {
var vec__25740 = cljs.core.first.call(null,seq__25733__$1);
var name = cljs.core.nth.call(null,vec__25740,(0),null);
var map__25741 = cljs.core.nth.call(null,vec__25740,(1),null);
var map__25741__$1 = ((((!((map__25741 == null)))?((((map__25741.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25741.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25741):map__25741);
var doc = cljs.core.get.call(null,map__25741__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__25741__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__25773 = cljs.core.next.call(null,seq__25733__$1);
var G__25774 = null;
var G__25775 = (0);
var G__25776 = (0);
seq__25733 = G__25773;
chunk__25734 = G__25774;
count__25735 = G__25775;
i__25736 = G__25776;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map