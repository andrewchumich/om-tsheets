// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
figwheel.client.file_reloading.queued_file_reload;
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__16771__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__16771__auto__){
return or__16771__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__16771__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__16771__auto__)){
return or__16771__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__24705_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__24705_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__24710 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__24711 = null;
var count__24712 = (0);
var i__24713 = (0);
while(true){
if((i__24713 < count__24712)){
var n = cljs.core._nth.call(null,chunk__24711,i__24713);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__24714 = seq__24710;
var G__24715 = chunk__24711;
var G__24716 = count__24712;
var G__24717 = (i__24713 + (1));
seq__24710 = G__24714;
chunk__24711 = G__24715;
count__24712 = G__24716;
i__24713 = G__24717;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__24710);
if(temp__4425__auto__){
var seq__24710__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24710__$1)){
var c__17574__auto__ = cljs.core.chunk_first.call(null,seq__24710__$1);
var G__24718 = cljs.core.chunk_rest.call(null,seq__24710__$1);
var G__24719 = c__17574__auto__;
var G__24720 = cljs.core.count.call(null,c__17574__auto__);
var G__24721 = (0);
seq__24710 = G__24718;
chunk__24711 = G__24719;
count__24712 = G__24720;
i__24713 = G__24721;
continue;
} else {
var n = cljs.core.first.call(null,seq__24710__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__24722 = cljs.core.next.call(null,seq__24710__$1);
var G__24723 = null;
var G__24724 = (0);
var G__24725 = (0);
seq__24710 = G__24722;
chunk__24711 = G__24723;
count__24712 = G__24724;
i__24713 = G__24725;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__24764_24771 = cljs.core.seq.call(null,deps);
var chunk__24765_24772 = null;
var count__24766_24773 = (0);
var i__24767_24774 = (0);
while(true){
if((i__24767_24774 < count__24766_24773)){
var dep_24775 = cljs.core._nth.call(null,chunk__24765_24772,i__24767_24774);
topo_sort_helper_STAR_.call(null,dep_24775,(depth + (1)),state);

var G__24776 = seq__24764_24771;
var G__24777 = chunk__24765_24772;
var G__24778 = count__24766_24773;
var G__24779 = (i__24767_24774 + (1));
seq__24764_24771 = G__24776;
chunk__24765_24772 = G__24777;
count__24766_24773 = G__24778;
i__24767_24774 = G__24779;
continue;
} else {
var temp__4425__auto___24780 = cljs.core.seq.call(null,seq__24764_24771);
if(temp__4425__auto___24780){
var seq__24764_24781__$1 = temp__4425__auto___24780;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24764_24781__$1)){
var c__17574__auto___24782 = cljs.core.chunk_first.call(null,seq__24764_24781__$1);
var G__24783 = cljs.core.chunk_rest.call(null,seq__24764_24781__$1);
var G__24784 = c__17574__auto___24782;
var G__24785 = cljs.core.count.call(null,c__17574__auto___24782);
var G__24786 = (0);
seq__24764_24771 = G__24783;
chunk__24765_24772 = G__24784;
count__24766_24773 = G__24785;
i__24767_24774 = G__24786;
continue;
} else {
var dep_24787 = cljs.core.first.call(null,seq__24764_24781__$1);
topo_sort_helper_STAR_.call(null,dep_24787,(depth + (1)),state);

var G__24788 = cljs.core.next.call(null,seq__24764_24781__$1);
var G__24789 = null;
var G__24790 = (0);
var G__24791 = (0);
seq__24764_24771 = G__24788;
chunk__24765_24772 = G__24789;
count__24766_24773 = G__24790;
i__24767_24774 = G__24791;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__24768){
var vec__24770 = p__24768;
var x = cljs.core.nth.call(null,vec__24770,(0),null);
var xs = cljs.core.nthnext.call(null,vec__24770,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__24770,x,xs,get_deps__$1){
return (function (p1__24726_SHARP_){
return clojure.set.difference.call(null,p1__24726_SHARP_,x);
});})(vec__24770,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__24804 = cljs.core.seq.call(null,provides);
var chunk__24805 = null;
var count__24806 = (0);
var i__24807 = (0);
while(true){
if((i__24807 < count__24806)){
var prov = cljs.core._nth.call(null,chunk__24805,i__24807);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__24808_24816 = cljs.core.seq.call(null,requires);
var chunk__24809_24817 = null;
var count__24810_24818 = (0);
var i__24811_24819 = (0);
while(true){
if((i__24811_24819 < count__24810_24818)){
var req_24820 = cljs.core._nth.call(null,chunk__24809_24817,i__24811_24819);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_24820,prov);

var G__24821 = seq__24808_24816;
var G__24822 = chunk__24809_24817;
var G__24823 = count__24810_24818;
var G__24824 = (i__24811_24819 + (1));
seq__24808_24816 = G__24821;
chunk__24809_24817 = G__24822;
count__24810_24818 = G__24823;
i__24811_24819 = G__24824;
continue;
} else {
var temp__4425__auto___24825 = cljs.core.seq.call(null,seq__24808_24816);
if(temp__4425__auto___24825){
var seq__24808_24826__$1 = temp__4425__auto___24825;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24808_24826__$1)){
var c__17574__auto___24827 = cljs.core.chunk_first.call(null,seq__24808_24826__$1);
var G__24828 = cljs.core.chunk_rest.call(null,seq__24808_24826__$1);
var G__24829 = c__17574__auto___24827;
var G__24830 = cljs.core.count.call(null,c__17574__auto___24827);
var G__24831 = (0);
seq__24808_24816 = G__24828;
chunk__24809_24817 = G__24829;
count__24810_24818 = G__24830;
i__24811_24819 = G__24831;
continue;
} else {
var req_24832 = cljs.core.first.call(null,seq__24808_24826__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_24832,prov);

var G__24833 = cljs.core.next.call(null,seq__24808_24826__$1);
var G__24834 = null;
var G__24835 = (0);
var G__24836 = (0);
seq__24808_24816 = G__24833;
chunk__24809_24817 = G__24834;
count__24810_24818 = G__24835;
i__24811_24819 = G__24836;
continue;
}
} else {
}
}
break;
}

var G__24837 = seq__24804;
var G__24838 = chunk__24805;
var G__24839 = count__24806;
var G__24840 = (i__24807 + (1));
seq__24804 = G__24837;
chunk__24805 = G__24838;
count__24806 = G__24839;
i__24807 = G__24840;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__24804);
if(temp__4425__auto__){
var seq__24804__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24804__$1)){
var c__17574__auto__ = cljs.core.chunk_first.call(null,seq__24804__$1);
var G__24841 = cljs.core.chunk_rest.call(null,seq__24804__$1);
var G__24842 = c__17574__auto__;
var G__24843 = cljs.core.count.call(null,c__17574__auto__);
var G__24844 = (0);
seq__24804 = G__24841;
chunk__24805 = G__24842;
count__24806 = G__24843;
i__24807 = G__24844;
continue;
} else {
var prov = cljs.core.first.call(null,seq__24804__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__24812_24845 = cljs.core.seq.call(null,requires);
var chunk__24813_24846 = null;
var count__24814_24847 = (0);
var i__24815_24848 = (0);
while(true){
if((i__24815_24848 < count__24814_24847)){
var req_24849 = cljs.core._nth.call(null,chunk__24813_24846,i__24815_24848);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_24849,prov);

var G__24850 = seq__24812_24845;
var G__24851 = chunk__24813_24846;
var G__24852 = count__24814_24847;
var G__24853 = (i__24815_24848 + (1));
seq__24812_24845 = G__24850;
chunk__24813_24846 = G__24851;
count__24814_24847 = G__24852;
i__24815_24848 = G__24853;
continue;
} else {
var temp__4425__auto___24854__$1 = cljs.core.seq.call(null,seq__24812_24845);
if(temp__4425__auto___24854__$1){
var seq__24812_24855__$1 = temp__4425__auto___24854__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24812_24855__$1)){
var c__17574__auto___24856 = cljs.core.chunk_first.call(null,seq__24812_24855__$1);
var G__24857 = cljs.core.chunk_rest.call(null,seq__24812_24855__$1);
var G__24858 = c__17574__auto___24856;
var G__24859 = cljs.core.count.call(null,c__17574__auto___24856);
var G__24860 = (0);
seq__24812_24845 = G__24857;
chunk__24813_24846 = G__24858;
count__24814_24847 = G__24859;
i__24815_24848 = G__24860;
continue;
} else {
var req_24861 = cljs.core.first.call(null,seq__24812_24855__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_24861,prov);

var G__24862 = cljs.core.next.call(null,seq__24812_24855__$1);
var G__24863 = null;
var G__24864 = (0);
var G__24865 = (0);
seq__24812_24845 = G__24862;
chunk__24813_24846 = G__24863;
count__24814_24847 = G__24864;
i__24815_24848 = G__24865;
continue;
}
} else {
}
}
break;
}

var G__24866 = cljs.core.next.call(null,seq__24804__$1);
var G__24867 = null;
var G__24868 = (0);
var G__24869 = (0);
seq__24804 = G__24866;
chunk__24805 = G__24867;
count__24806 = G__24868;
i__24807 = G__24869;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__24874_24878 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__24875_24879 = null;
var count__24876_24880 = (0);
var i__24877_24881 = (0);
while(true){
if((i__24877_24881 < count__24876_24880)){
var ns_24882 = cljs.core._nth.call(null,chunk__24875_24879,i__24877_24881);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_24882);

var G__24883 = seq__24874_24878;
var G__24884 = chunk__24875_24879;
var G__24885 = count__24876_24880;
var G__24886 = (i__24877_24881 + (1));
seq__24874_24878 = G__24883;
chunk__24875_24879 = G__24884;
count__24876_24880 = G__24885;
i__24877_24881 = G__24886;
continue;
} else {
var temp__4425__auto___24887 = cljs.core.seq.call(null,seq__24874_24878);
if(temp__4425__auto___24887){
var seq__24874_24888__$1 = temp__4425__auto___24887;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24874_24888__$1)){
var c__17574__auto___24889 = cljs.core.chunk_first.call(null,seq__24874_24888__$1);
var G__24890 = cljs.core.chunk_rest.call(null,seq__24874_24888__$1);
var G__24891 = c__17574__auto___24889;
var G__24892 = cljs.core.count.call(null,c__17574__auto___24889);
var G__24893 = (0);
seq__24874_24878 = G__24890;
chunk__24875_24879 = G__24891;
count__24876_24880 = G__24892;
i__24877_24881 = G__24893;
continue;
} else {
var ns_24894 = cljs.core.first.call(null,seq__24874_24888__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_24894);

var G__24895 = cljs.core.next.call(null,seq__24874_24888__$1);
var G__24896 = null;
var G__24897 = (0);
var G__24898 = (0);
seq__24874_24878 = G__24895;
chunk__24875_24879 = G__24896;
count__24876_24880 = G__24897;
i__24877_24881 = G__24898;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__16771__auto__ = goog.require__;
if(cljs.core.truth_(or__16771__auto__)){
return or__16771__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__24899__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__24899 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24900__i = 0, G__24900__a = new Array(arguments.length -  0);
while (G__24900__i < G__24900__a.length) {G__24900__a[G__24900__i] = arguments[G__24900__i + 0]; ++G__24900__i;}
  args = new cljs.core.IndexedSeq(G__24900__a,0);
} 
return G__24899__delegate.call(this,args);};
G__24899.cljs$lang$maxFixedArity = 0;
G__24899.cljs$lang$applyTo = (function (arglist__24901){
var args = cljs.core.seq(arglist__24901);
return G__24899__delegate(args);
});
G__24899.cljs$core$IFn$_invoke$arity$variadic = G__24899__delegate;
return G__24899;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__24903 = cljs.core._EQ_;
var expr__24904 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__24903.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__24904))){
var path_parts = ((function (pred__24903,expr__24904){
return (function (p1__24902_SHARP_){
return clojure.string.split.call(null,p1__24902_SHARP_,/[\/\\]/);
});})(pred__24903,expr__24904))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__24903,expr__24904){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e24906){if((e24906 instanceof Error)){
var e = e24906;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e24906;

}
}})());
});
;})(path_parts,sep,root,pred__24903,expr__24904))
} else {
if(cljs.core.truth_(pred__24903.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__24904))){
return ((function (pred__24903,expr__24904){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__24903,expr__24904){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__24903,expr__24904))
);

return deferred.addErrback(((function (deferred,pred__24903,expr__24904){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__24903,expr__24904))
);
});
;})(pred__24903,expr__24904))
} else {
return ((function (pred__24903,expr__24904){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__24903,expr__24904))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__24907,callback){
var map__24910 = p__24907;
var map__24910__$1 = ((((!((map__24910 == null)))?((((map__24910.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24910.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24910):map__24910);
var file_msg = map__24910__$1;
var request_url = cljs.core.get.call(null,map__24910__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__24910,map__24910__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__24910,map__24910__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__20755__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20755__auto__){
return (function (){
var f__20756__auto__ = (function (){var switch__20643__auto__ = ((function (c__20755__auto__){
return (function (state_24934){
var state_val_24935 = (state_24934[(1)]);
if((state_val_24935 === (7))){
var inst_24930 = (state_24934[(2)]);
var state_24934__$1 = state_24934;
var statearr_24936_24956 = state_24934__$1;
(statearr_24936_24956[(2)] = inst_24930);

(statearr_24936_24956[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24935 === (1))){
var state_24934__$1 = state_24934;
var statearr_24937_24957 = state_24934__$1;
(statearr_24937_24957[(2)] = null);

(statearr_24937_24957[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24935 === (4))){
var inst_24914 = (state_24934[(7)]);
var inst_24914__$1 = (state_24934[(2)]);
var state_24934__$1 = (function (){var statearr_24938 = state_24934;
(statearr_24938[(7)] = inst_24914__$1);

return statearr_24938;
})();
if(cljs.core.truth_(inst_24914__$1)){
var statearr_24939_24958 = state_24934__$1;
(statearr_24939_24958[(1)] = (5));

} else {
var statearr_24940_24959 = state_24934__$1;
(statearr_24940_24959[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24935 === (6))){
var state_24934__$1 = state_24934;
var statearr_24941_24960 = state_24934__$1;
(statearr_24941_24960[(2)] = null);

(statearr_24941_24960[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24935 === (3))){
var inst_24932 = (state_24934[(2)]);
var state_24934__$1 = state_24934;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24934__$1,inst_24932);
} else {
if((state_val_24935 === (2))){
var state_24934__$1 = state_24934;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24934__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_24935 === (11))){
var inst_24926 = (state_24934[(2)]);
var state_24934__$1 = (function (){var statearr_24942 = state_24934;
(statearr_24942[(8)] = inst_24926);

return statearr_24942;
})();
var statearr_24943_24961 = state_24934__$1;
(statearr_24943_24961[(2)] = null);

(statearr_24943_24961[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24935 === (9))){
var inst_24918 = (state_24934[(9)]);
var inst_24920 = (state_24934[(10)]);
var inst_24922 = inst_24920.call(null,inst_24918);
var state_24934__$1 = state_24934;
var statearr_24944_24962 = state_24934__$1;
(statearr_24944_24962[(2)] = inst_24922);

(statearr_24944_24962[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24935 === (5))){
var inst_24914 = (state_24934[(7)]);
var inst_24916 = figwheel.client.file_reloading.blocking_load.call(null,inst_24914);
var state_24934__$1 = state_24934;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24934__$1,(8),inst_24916);
} else {
if((state_val_24935 === (10))){
var inst_24918 = (state_24934[(9)]);
var inst_24924 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_24918);
var state_24934__$1 = state_24934;
var statearr_24945_24963 = state_24934__$1;
(statearr_24945_24963[(2)] = inst_24924);

(statearr_24945_24963[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24935 === (8))){
var inst_24914 = (state_24934[(7)]);
var inst_24920 = (state_24934[(10)]);
var inst_24918 = (state_24934[(2)]);
var inst_24919 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_24920__$1 = cljs.core.get.call(null,inst_24919,inst_24914);
var state_24934__$1 = (function (){var statearr_24946 = state_24934;
(statearr_24946[(9)] = inst_24918);

(statearr_24946[(10)] = inst_24920__$1);

return statearr_24946;
})();
if(cljs.core.truth_(inst_24920__$1)){
var statearr_24947_24964 = state_24934__$1;
(statearr_24947_24964[(1)] = (9));

} else {
var statearr_24948_24965 = state_24934__$1;
(statearr_24948_24965[(1)] = (10));

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
});})(c__20755__auto__))
;
return ((function (switch__20643__auto__,c__20755__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__20644__auto__ = null;
var figwheel$client$file_reloading$state_machine__20644__auto____0 = (function (){
var statearr_24952 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24952[(0)] = figwheel$client$file_reloading$state_machine__20644__auto__);

(statearr_24952[(1)] = (1));

return statearr_24952;
});
var figwheel$client$file_reloading$state_machine__20644__auto____1 = (function (state_24934){
while(true){
var ret_value__20645__auto__ = (function (){try{while(true){
var result__20646__auto__ = switch__20643__auto__.call(null,state_24934);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20646__auto__;
}
break;
}
}catch (e24953){if((e24953 instanceof Object)){
var ex__20647__auto__ = e24953;
var statearr_24954_24966 = state_24934;
(statearr_24954_24966[(5)] = ex__20647__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24934);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24953;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20645__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24967 = state_24934;
state_24934 = G__24967;
continue;
} else {
return ret_value__20645__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__20644__auto__ = function(state_24934){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__20644__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__20644__auto____1.call(this,state_24934);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__20644__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__20644__auto____0;
figwheel$client$file_reloading$state_machine__20644__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__20644__auto____1;
return figwheel$client$file_reloading$state_machine__20644__auto__;
})()
;})(switch__20643__auto__,c__20755__auto__))
})();
var state__20757__auto__ = (function (){var statearr_24955 = f__20756__auto__.call(null);
(statearr_24955[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20755__auto__);

return statearr_24955;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20757__auto__);
});})(c__20755__auto__))
);

return c__20755__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__24968,callback){
var map__24971 = p__24968;
var map__24971__$1 = ((((!((map__24971 == null)))?((((map__24971.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24971.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24971):map__24971);
var file_msg = map__24971__$1;
var namespace = cljs.core.get.call(null,map__24971__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__24971,map__24971__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__24971,map__24971__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__24973){
var map__24976 = p__24973;
var map__24976__$1 = ((((!((map__24976 == null)))?((((map__24976.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24976.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24976):map__24976);
var file_msg = map__24976__$1;
var namespace = cljs.core.get.call(null,map__24976__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__16759__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__16759__auto__){
var or__16771__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16771__auto__)){
return or__16771__auto__;
} else {
var or__16771__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16771__auto____$1)){
return or__16771__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__16759__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__24978,callback){
var map__24981 = p__24978;
var map__24981__$1 = ((((!((map__24981 == null)))?((((map__24981.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24981.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24981):map__24981);
var file_msg = map__24981__$1;
var request_url = cljs.core.get.call(null,map__24981__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__24981__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__20755__auto___25069 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20755__auto___25069,out){
return (function (){
var f__20756__auto__ = (function (){var switch__20643__auto__ = ((function (c__20755__auto___25069,out){
return (function (state_25051){
var state_val_25052 = (state_25051[(1)]);
if((state_val_25052 === (1))){
var inst_25029 = cljs.core.nth.call(null,files,(0),null);
var inst_25030 = cljs.core.nthnext.call(null,files,(1));
var inst_25031 = files;
var state_25051__$1 = (function (){var statearr_25053 = state_25051;
(statearr_25053[(7)] = inst_25031);

(statearr_25053[(8)] = inst_25030);

(statearr_25053[(9)] = inst_25029);

return statearr_25053;
})();
var statearr_25054_25070 = state_25051__$1;
(statearr_25054_25070[(2)] = null);

(statearr_25054_25070[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25052 === (2))){
var inst_25031 = (state_25051[(7)]);
var inst_25034 = (state_25051[(10)]);
var inst_25034__$1 = cljs.core.nth.call(null,inst_25031,(0),null);
var inst_25035 = cljs.core.nthnext.call(null,inst_25031,(1));
var inst_25036 = (inst_25034__$1 == null);
var inst_25037 = cljs.core.not.call(null,inst_25036);
var state_25051__$1 = (function (){var statearr_25055 = state_25051;
(statearr_25055[(11)] = inst_25035);

(statearr_25055[(10)] = inst_25034__$1);

return statearr_25055;
})();
if(inst_25037){
var statearr_25056_25071 = state_25051__$1;
(statearr_25056_25071[(1)] = (4));

} else {
var statearr_25057_25072 = state_25051__$1;
(statearr_25057_25072[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25052 === (3))){
var inst_25049 = (state_25051[(2)]);
var state_25051__$1 = state_25051;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25051__$1,inst_25049);
} else {
if((state_val_25052 === (4))){
var inst_25034 = (state_25051[(10)]);
var inst_25039 = figwheel.client.file_reloading.reload_js_file.call(null,inst_25034);
var state_25051__$1 = state_25051;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25051__$1,(7),inst_25039);
} else {
if((state_val_25052 === (5))){
var inst_25045 = cljs.core.async.close_BANG_.call(null,out);
var state_25051__$1 = state_25051;
var statearr_25058_25073 = state_25051__$1;
(statearr_25058_25073[(2)] = inst_25045);

(statearr_25058_25073[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25052 === (6))){
var inst_25047 = (state_25051[(2)]);
var state_25051__$1 = state_25051;
var statearr_25059_25074 = state_25051__$1;
(statearr_25059_25074[(2)] = inst_25047);

(statearr_25059_25074[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25052 === (7))){
var inst_25035 = (state_25051[(11)]);
var inst_25041 = (state_25051[(2)]);
var inst_25042 = cljs.core.async.put_BANG_.call(null,out,inst_25041);
var inst_25031 = inst_25035;
var state_25051__$1 = (function (){var statearr_25060 = state_25051;
(statearr_25060[(7)] = inst_25031);

(statearr_25060[(12)] = inst_25042);

return statearr_25060;
})();
var statearr_25061_25075 = state_25051__$1;
(statearr_25061_25075[(2)] = null);

(statearr_25061_25075[(1)] = (2));


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
});})(c__20755__auto___25069,out))
;
return ((function (switch__20643__auto__,c__20755__auto___25069,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20644__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20644__auto____0 = (function (){
var statearr_25065 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25065[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20644__auto__);

(statearr_25065[(1)] = (1));

return statearr_25065;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20644__auto____1 = (function (state_25051){
while(true){
var ret_value__20645__auto__ = (function (){try{while(true){
var result__20646__auto__ = switch__20643__auto__.call(null,state_25051);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20646__auto__;
}
break;
}
}catch (e25066){if((e25066 instanceof Object)){
var ex__20647__auto__ = e25066;
var statearr_25067_25076 = state_25051;
(statearr_25067_25076[(5)] = ex__20647__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25051);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25066;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20645__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25077 = state_25051;
state_25051 = G__25077;
continue;
} else {
return ret_value__20645__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20644__auto__ = function(state_25051){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20644__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20644__auto____1.call(this,state_25051);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20644__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20644__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20644__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20644__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20644__auto__;
})()
;})(switch__20643__auto__,c__20755__auto___25069,out))
})();
var state__20757__auto__ = (function (){var statearr_25068 = f__20756__auto__.call(null);
(statearr_25068[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20755__auto___25069);

return statearr_25068;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20757__auto__);
});})(c__20755__auto___25069,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__25078,opts){
var map__25082 = p__25078;
var map__25082__$1 = ((((!((map__25082 == null)))?((((map__25082.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25082.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25082):map__25082);
var eval_body__$1 = cljs.core.get.call(null,map__25082__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__25082__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__16759__auto__ = eval_body__$1;
if(cljs.core.truth_(and__16759__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__16759__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e25084){var e = e25084;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4423__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__25085_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__25085_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4423__auto__)){
var file_msg = temp__4423__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__25090){
var vec__25091 = p__25090;
var k = cljs.core.nth.call(null,vec__25091,(0),null);
var v = cljs.core.nth.call(null,vec__25091,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__25092){
var vec__25093 = p__25092;
var k = cljs.core.nth.call(null,vec__25093,(0),null);
var v = cljs.core.nth.call(null,vec__25093,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__25097,p__25098){
var map__25345 = p__25097;
var map__25345__$1 = ((((!((map__25345 == null)))?((((map__25345.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25345.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25345):map__25345);
var opts = map__25345__$1;
var before_jsload = cljs.core.get.call(null,map__25345__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__25345__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__25345__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__25346 = p__25098;
var map__25346__$1 = ((((!((map__25346 == null)))?((((map__25346.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25346.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25346):map__25346);
var msg = map__25346__$1;
var files = cljs.core.get.call(null,map__25346__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__25346__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__25346__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__20755__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20755__auto__,map__25345,map__25345__$1,opts,before_jsload,on_jsload,reload_dependents,map__25346,map__25346__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__20756__auto__ = (function (){var switch__20643__auto__ = ((function (c__20755__auto__,map__25345,map__25345__$1,opts,before_jsload,on_jsload,reload_dependents,map__25346,map__25346__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_25499){
var state_val_25500 = (state_25499[(1)]);
if((state_val_25500 === (7))){
var inst_25362 = (state_25499[(7)]);
var inst_25363 = (state_25499[(8)]);
var inst_25360 = (state_25499[(9)]);
var inst_25361 = (state_25499[(10)]);
var inst_25368 = cljs.core._nth.call(null,inst_25361,inst_25363);
var inst_25369 = figwheel.client.file_reloading.eval_body.call(null,inst_25368,opts);
var inst_25370 = (inst_25363 + (1));
var tmp25501 = inst_25362;
var tmp25502 = inst_25360;
var tmp25503 = inst_25361;
var inst_25360__$1 = tmp25502;
var inst_25361__$1 = tmp25503;
var inst_25362__$1 = tmp25501;
var inst_25363__$1 = inst_25370;
var state_25499__$1 = (function (){var statearr_25504 = state_25499;
(statearr_25504[(7)] = inst_25362__$1);

(statearr_25504[(8)] = inst_25363__$1);

(statearr_25504[(9)] = inst_25360__$1);

(statearr_25504[(10)] = inst_25361__$1);

(statearr_25504[(11)] = inst_25369);

return statearr_25504;
})();
var statearr_25505_25591 = state_25499__$1;
(statearr_25505_25591[(2)] = null);

(statearr_25505_25591[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25500 === (20))){
var inst_25403 = (state_25499[(12)]);
var inst_25411 = figwheel.client.file_reloading.sort_files.call(null,inst_25403);
var state_25499__$1 = state_25499;
var statearr_25506_25592 = state_25499__$1;
(statearr_25506_25592[(2)] = inst_25411);

(statearr_25506_25592[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25500 === (27))){
var state_25499__$1 = state_25499;
var statearr_25507_25593 = state_25499__$1;
(statearr_25507_25593[(2)] = null);

(statearr_25507_25593[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25500 === (1))){
var inst_25352 = (state_25499[(13)]);
var inst_25349 = before_jsload.call(null,files);
var inst_25350 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_25351 = (function (){return ((function (inst_25352,inst_25349,inst_25350,state_val_25500,c__20755__auto__,map__25345,map__25345__$1,opts,before_jsload,on_jsload,reload_dependents,map__25346,map__25346__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__25094_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__25094_SHARP_);
});
;})(inst_25352,inst_25349,inst_25350,state_val_25500,c__20755__auto__,map__25345,map__25345__$1,opts,before_jsload,on_jsload,reload_dependents,map__25346,map__25346__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25352__$1 = cljs.core.filter.call(null,inst_25351,files);
var inst_25353 = cljs.core.not_empty.call(null,inst_25352__$1);
var state_25499__$1 = (function (){var statearr_25508 = state_25499;
(statearr_25508[(14)] = inst_25349);

(statearr_25508[(15)] = inst_25350);

(statearr_25508[(13)] = inst_25352__$1);

return statearr_25508;
})();
if(cljs.core.truth_(inst_25353)){
var statearr_25509_25594 = state_25499__$1;
(statearr_25509_25594[(1)] = (2));

} else {
var statearr_25510_25595 = state_25499__$1;
(statearr_25510_25595[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25500 === (24))){
var state_25499__$1 = state_25499;
var statearr_25511_25596 = state_25499__$1;
(statearr_25511_25596[(2)] = null);

(statearr_25511_25596[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25500 === (39))){
var inst_25453 = (state_25499[(16)]);
var state_25499__$1 = state_25499;
var statearr_25512_25597 = state_25499__$1;
(statearr_25512_25597[(2)] = inst_25453);

(statearr_25512_25597[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25500 === (46))){
var inst_25494 = (state_25499[(2)]);
var state_25499__$1 = state_25499;
var statearr_25513_25598 = state_25499__$1;
(statearr_25513_25598[(2)] = inst_25494);

(statearr_25513_25598[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25500 === (4))){
var inst_25397 = (state_25499[(2)]);
var inst_25398 = cljs.core.List.EMPTY;
var inst_25399 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_25398);
var inst_25400 = (function (){return ((function (inst_25397,inst_25398,inst_25399,state_val_25500,c__20755__auto__,map__25345,map__25345__$1,opts,before_jsload,on_jsload,reload_dependents,map__25346,map__25346__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__25095_SHARP_){
var and__16759__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__25095_SHARP_);
if(cljs.core.truth_(and__16759__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__25095_SHARP_));
} else {
return and__16759__auto__;
}
});
;})(inst_25397,inst_25398,inst_25399,state_val_25500,c__20755__auto__,map__25345,map__25345__$1,opts,before_jsload,on_jsload,reload_dependents,map__25346,map__25346__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25401 = cljs.core.filter.call(null,inst_25400,files);
var inst_25402 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_25403 = cljs.core.concat.call(null,inst_25401,inst_25402);
var state_25499__$1 = (function (){var statearr_25514 = state_25499;
(statearr_25514[(17)] = inst_25399);

(statearr_25514[(18)] = inst_25397);

(statearr_25514[(12)] = inst_25403);

return statearr_25514;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_25515_25599 = state_25499__$1;
(statearr_25515_25599[(1)] = (16));

} else {
var statearr_25516_25600 = state_25499__$1;
(statearr_25516_25600[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25500 === (15))){
var inst_25387 = (state_25499[(2)]);
var state_25499__$1 = state_25499;
var statearr_25517_25601 = state_25499__$1;
(statearr_25517_25601[(2)] = inst_25387);

(statearr_25517_25601[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25500 === (21))){
var inst_25413 = (state_25499[(19)]);
var inst_25413__$1 = (state_25499[(2)]);
var inst_25414 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_25413__$1);
var state_25499__$1 = (function (){var statearr_25518 = state_25499;
(statearr_25518[(19)] = inst_25413__$1);

return statearr_25518;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25499__$1,(22),inst_25414);
} else {
if((state_val_25500 === (31))){
var inst_25497 = (state_25499[(2)]);
var state_25499__$1 = state_25499;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25499__$1,inst_25497);
} else {
if((state_val_25500 === (32))){
var inst_25453 = (state_25499[(16)]);
var inst_25458 = inst_25453.cljs$lang$protocol_mask$partition0$;
var inst_25459 = (inst_25458 & (64));
var inst_25460 = inst_25453.cljs$core$ISeq$;
var inst_25461 = (inst_25459) || (inst_25460);
var state_25499__$1 = state_25499;
if(cljs.core.truth_(inst_25461)){
var statearr_25519_25602 = state_25499__$1;
(statearr_25519_25602[(1)] = (35));

} else {
var statearr_25520_25603 = state_25499__$1;
(statearr_25520_25603[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25500 === (40))){
var inst_25474 = (state_25499[(20)]);
var inst_25473 = (state_25499[(2)]);
var inst_25474__$1 = cljs.core.get.call(null,inst_25473,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_25475 = cljs.core.get.call(null,inst_25473,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_25476 = cljs.core.not_empty.call(null,inst_25474__$1);
var state_25499__$1 = (function (){var statearr_25521 = state_25499;
(statearr_25521[(21)] = inst_25475);

(statearr_25521[(20)] = inst_25474__$1);

return statearr_25521;
})();
if(cljs.core.truth_(inst_25476)){
var statearr_25522_25604 = state_25499__$1;
(statearr_25522_25604[(1)] = (41));

} else {
var statearr_25523_25605 = state_25499__$1;
(statearr_25523_25605[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25500 === (33))){
var state_25499__$1 = state_25499;
var statearr_25524_25606 = state_25499__$1;
(statearr_25524_25606[(2)] = false);

(statearr_25524_25606[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25500 === (13))){
var inst_25373 = (state_25499[(22)]);
var inst_25377 = cljs.core.chunk_first.call(null,inst_25373);
var inst_25378 = cljs.core.chunk_rest.call(null,inst_25373);
var inst_25379 = cljs.core.count.call(null,inst_25377);
var inst_25360 = inst_25378;
var inst_25361 = inst_25377;
var inst_25362 = inst_25379;
var inst_25363 = (0);
var state_25499__$1 = (function (){var statearr_25525 = state_25499;
(statearr_25525[(7)] = inst_25362);

(statearr_25525[(8)] = inst_25363);

(statearr_25525[(9)] = inst_25360);

(statearr_25525[(10)] = inst_25361);

return statearr_25525;
})();
var statearr_25526_25607 = state_25499__$1;
(statearr_25526_25607[(2)] = null);

(statearr_25526_25607[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25500 === (22))){
var inst_25421 = (state_25499[(23)]);
var inst_25417 = (state_25499[(24)]);
var inst_25413 = (state_25499[(19)]);
var inst_25416 = (state_25499[(25)]);
var inst_25416__$1 = (state_25499[(2)]);
var inst_25417__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_25416__$1);
var inst_25418 = (function (){var all_files = inst_25413;
var res_SINGLEQUOTE_ = inst_25416__$1;
var res = inst_25417__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_25421,inst_25417,inst_25413,inst_25416,inst_25416__$1,inst_25417__$1,state_val_25500,c__20755__auto__,map__25345,map__25345__$1,opts,before_jsload,on_jsload,reload_dependents,map__25346,map__25346__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__25096_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__25096_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_25421,inst_25417,inst_25413,inst_25416,inst_25416__$1,inst_25417__$1,state_val_25500,c__20755__auto__,map__25345,map__25345__$1,opts,before_jsload,on_jsload,reload_dependents,map__25346,map__25346__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25419 = cljs.core.filter.call(null,inst_25418,inst_25416__$1);
var inst_25420 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_25421__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_25420);
var inst_25422 = cljs.core.not_empty.call(null,inst_25421__$1);
var state_25499__$1 = (function (){var statearr_25527 = state_25499;
(statearr_25527[(23)] = inst_25421__$1);

(statearr_25527[(24)] = inst_25417__$1);

(statearr_25527[(26)] = inst_25419);

(statearr_25527[(25)] = inst_25416__$1);

return statearr_25527;
})();
if(cljs.core.truth_(inst_25422)){
var statearr_25528_25608 = state_25499__$1;
(statearr_25528_25608[(1)] = (23));

} else {
var statearr_25529_25609 = state_25499__$1;
(statearr_25529_25609[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25500 === (36))){
var state_25499__$1 = state_25499;
var statearr_25530_25610 = state_25499__$1;
(statearr_25530_25610[(2)] = false);

(statearr_25530_25610[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25500 === (41))){
var inst_25474 = (state_25499[(20)]);
var inst_25478 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_25479 = cljs.core.map.call(null,inst_25478,inst_25474);
var inst_25480 = cljs.core.pr_str.call(null,inst_25479);
var inst_25481 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_25480)].join('');
var inst_25482 = figwheel.client.utils.log.call(null,inst_25481);
var state_25499__$1 = state_25499;
var statearr_25531_25611 = state_25499__$1;
(statearr_25531_25611[(2)] = inst_25482);

(statearr_25531_25611[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25500 === (43))){
var inst_25475 = (state_25499[(21)]);
var inst_25485 = (state_25499[(2)]);
var inst_25486 = cljs.core.not_empty.call(null,inst_25475);
var state_25499__$1 = (function (){var statearr_25532 = state_25499;
(statearr_25532[(27)] = inst_25485);

return statearr_25532;
})();
if(cljs.core.truth_(inst_25486)){
var statearr_25533_25612 = state_25499__$1;
(statearr_25533_25612[(1)] = (44));

} else {
var statearr_25534_25613 = state_25499__$1;
(statearr_25534_25613[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25500 === (29))){
var inst_25421 = (state_25499[(23)]);
var inst_25417 = (state_25499[(24)]);
var inst_25419 = (state_25499[(26)]);
var inst_25413 = (state_25499[(19)]);
var inst_25416 = (state_25499[(25)]);
var inst_25453 = (state_25499[(16)]);
var inst_25449 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_25452 = (function (){var all_files = inst_25413;
var res_SINGLEQUOTE_ = inst_25416;
var res = inst_25417;
var files_not_loaded = inst_25419;
var dependencies_that_loaded = inst_25421;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25421,inst_25417,inst_25419,inst_25413,inst_25416,inst_25453,inst_25449,state_val_25500,c__20755__auto__,map__25345,map__25345__$1,opts,before_jsload,on_jsload,reload_dependents,map__25346,map__25346__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__25451){
var map__25535 = p__25451;
var map__25535__$1 = ((((!((map__25535 == null)))?((((map__25535.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25535.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25535):map__25535);
var namespace = cljs.core.get.call(null,map__25535__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25421,inst_25417,inst_25419,inst_25413,inst_25416,inst_25453,inst_25449,state_val_25500,c__20755__auto__,map__25345,map__25345__$1,opts,before_jsload,on_jsload,reload_dependents,map__25346,map__25346__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25453__$1 = cljs.core.group_by.call(null,inst_25452,inst_25419);
var inst_25455 = (inst_25453__$1 == null);
var inst_25456 = cljs.core.not.call(null,inst_25455);
var state_25499__$1 = (function (){var statearr_25537 = state_25499;
(statearr_25537[(16)] = inst_25453__$1);

(statearr_25537[(28)] = inst_25449);

return statearr_25537;
})();
if(inst_25456){
var statearr_25538_25614 = state_25499__$1;
(statearr_25538_25614[(1)] = (32));

} else {
var statearr_25539_25615 = state_25499__$1;
(statearr_25539_25615[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25500 === (44))){
var inst_25475 = (state_25499[(21)]);
var inst_25488 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_25475);
var inst_25489 = cljs.core.pr_str.call(null,inst_25488);
var inst_25490 = [cljs.core.str("not required: "),cljs.core.str(inst_25489)].join('');
var inst_25491 = figwheel.client.utils.log.call(null,inst_25490);
var state_25499__$1 = state_25499;
var statearr_25540_25616 = state_25499__$1;
(statearr_25540_25616[(2)] = inst_25491);

(statearr_25540_25616[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25500 === (6))){
var inst_25394 = (state_25499[(2)]);
var state_25499__$1 = state_25499;
var statearr_25541_25617 = state_25499__$1;
(statearr_25541_25617[(2)] = inst_25394);

(statearr_25541_25617[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25500 === (28))){
var inst_25419 = (state_25499[(26)]);
var inst_25446 = (state_25499[(2)]);
var inst_25447 = cljs.core.not_empty.call(null,inst_25419);
var state_25499__$1 = (function (){var statearr_25542 = state_25499;
(statearr_25542[(29)] = inst_25446);

return statearr_25542;
})();
if(cljs.core.truth_(inst_25447)){
var statearr_25543_25618 = state_25499__$1;
(statearr_25543_25618[(1)] = (29));

} else {
var statearr_25544_25619 = state_25499__$1;
(statearr_25544_25619[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25500 === (25))){
var inst_25417 = (state_25499[(24)]);
var inst_25433 = (state_25499[(2)]);
var inst_25434 = cljs.core.not_empty.call(null,inst_25417);
var state_25499__$1 = (function (){var statearr_25545 = state_25499;
(statearr_25545[(30)] = inst_25433);

return statearr_25545;
})();
if(cljs.core.truth_(inst_25434)){
var statearr_25546_25620 = state_25499__$1;
(statearr_25546_25620[(1)] = (26));

} else {
var statearr_25547_25621 = state_25499__$1;
(statearr_25547_25621[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25500 === (34))){
var inst_25468 = (state_25499[(2)]);
var state_25499__$1 = state_25499;
if(cljs.core.truth_(inst_25468)){
var statearr_25548_25622 = state_25499__$1;
(statearr_25548_25622[(1)] = (38));

} else {
var statearr_25549_25623 = state_25499__$1;
(statearr_25549_25623[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25500 === (17))){
var state_25499__$1 = state_25499;
var statearr_25550_25624 = state_25499__$1;
(statearr_25550_25624[(2)] = recompile_dependents);

(statearr_25550_25624[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25500 === (3))){
var state_25499__$1 = state_25499;
var statearr_25551_25625 = state_25499__$1;
(statearr_25551_25625[(2)] = null);

(statearr_25551_25625[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25500 === (12))){
var inst_25390 = (state_25499[(2)]);
var state_25499__$1 = state_25499;
var statearr_25552_25626 = state_25499__$1;
(statearr_25552_25626[(2)] = inst_25390);

(statearr_25552_25626[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25500 === (2))){
var inst_25352 = (state_25499[(13)]);
var inst_25359 = cljs.core.seq.call(null,inst_25352);
var inst_25360 = inst_25359;
var inst_25361 = null;
var inst_25362 = (0);
var inst_25363 = (0);
var state_25499__$1 = (function (){var statearr_25553 = state_25499;
(statearr_25553[(7)] = inst_25362);

(statearr_25553[(8)] = inst_25363);

(statearr_25553[(9)] = inst_25360);

(statearr_25553[(10)] = inst_25361);

return statearr_25553;
})();
var statearr_25554_25627 = state_25499__$1;
(statearr_25554_25627[(2)] = null);

(statearr_25554_25627[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25500 === (23))){
var inst_25421 = (state_25499[(23)]);
var inst_25417 = (state_25499[(24)]);
var inst_25419 = (state_25499[(26)]);
var inst_25413 = (state_25499[(19)]);
var inst_25416 = (state_25499[(25)]);
var inst_25424 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_25426 = (function (){var all_files = inst_25413;
var res_SINGLEQUOTE_ = inst_25416;
var res = inst_25417;
var files_not_loaded = inst_25419;
var dependencies_that_loaded = inst_25421;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25421,inst_25417,inst_25419,inst_25413,inst_25416,inst_25424,state_val_25500,c__20755__auto__,map__25345,map__25345__$1,opts,before_jsload,on_jsload,reload_dependents,map__25346,map__25346__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__25425){
var map__25555 = p__25425;
var map__25555__$1 = ((((!((map__25555 == null)))?((((map__25555.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25555.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25555):map__25555);
var request_url = cljs.core.get.call(null,map__25555__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25421,inst_25417,inst_25419,inst_25413,inst_25416,inst_25424,state_val_25500,c__20755__auto__,map__25345,map__25345__$1,opts,before_jsload,on_jsload,reload_dependents,map__25346,map__25346__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25427 = cljs.core.reverse.call(null,inst_25421);
var inst_25428 = cljs.core.map.call(null,inst_25426,inst_25427);
var inst_25429 = cljs.core.pr_str.call(null,inst_25428);
var inst_25430 = figwheel.client.utils.log.call(null,inst_25429);
var state_25499__$1 = (function (){var statearr_25557 = state_25499;
(statearr_25557[(31)] = inst_25424);

return statearr_25557;
})();
var statearr_25558_25628 = state_25499__$1;
(statearr_25558_25628[(2)] = inst_25430);

(statearr_25558_25628[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25500 === (35))){
var state_25499__$1 = state_25499;
var statearr_25559_25629 = state_25499__$1;
(statearr_25559_25629[(2)] = true);

(statearr_25559_25629[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25500 === (19))){
var inst_25403 = (state_25499[(12)]);
var inst_25409 = figwheel.client.file_reloading.expand_files.call(null,inst_25403);
var state_25499__$1 = state_25499;
var statearr_25560_25630 = state_25499__$1;
(statearr_25560_25630[(2)] = inst_25409);

(statearr_25560_25630[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25500 === (11))){
var state_25499__$1 = state_25499;
var statearr_25561_25631 = state_25499__$1;
(statearr_25561_25631[(2)] = null);

(statearr_25561_25631[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25500 === (9))){
var inst_25392 = (state_25499[(2)]);
var state_25499__$1 = state_25499;
var statearr_25562_25632 = state_25499__$1;
(statearr_25562_25632[(2)] = inst_25392);

(statearr_25562_25632[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25500 === (5))){
var inst_25362 = (state_25499[(7)]);
var inst_25363 = (state_25499[(8)]);
var inst_25365 = (inst_25363 < inst_25362);
var inst_25366 = inst_25365;
var state_25499__$1 = state_25499;
if(cljs.core.truth_(inst_25366)){
var statearr_25563_25633 = state_25499__$1;
(statearr_25563_25633[(1)] = (7));

} else {
var statearr_25564_25634 = state_25499__$1;
(statearr_25564_25634[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25500 === (14))){
var inst_25373 = (state_25499[(22)]);
var inst_25382 = cljs.core.first.call(null,inst_25373);
var inst_25383 = figwheel.client.file_reloading.eval_body.call(null,inst_25382,opts);
var inst_25384 = cljs.core.next.call(null,inst_25373);
var inst_25360 = inst_25384;
var inst_25361 = null;
var inst_25362 = (0);
var inst_25363 = (0);
var state_25499__$1 = (function (){var statearr_25565 = state_25499;
(statearr_25565[(32)] = inst_25383);

(statearr_25565[(7)] = inst_25362);

(statearr_25565[(8)] = inst_25363);

(statearr_25565[(9)] = inst_25360);

(statearr_25565[(10)] = inst_25361);

return statearr_25565;
})();
var statearr_25566_25635 = state_25499__$1;
(statearr_25566_25635[(2)] = null);

(statearr_25566_25635[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25500 === (45))){
var state_25499__$1 = state_25499;
var statearr_25567_25636 = state_25499__$1;
(statearr_25567_25636[(2)] = null);

(statearr_25567_25636[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25500 === (26))){
var inst_25421 = (state_25499[(23)]);
var inst_25417 = (state_25499[(24)]);
var inst_25419 = (state_25499[(26)]);
var inst_25413 = (state_25499[(19)]);
var inst_25416 = (state_25499[(25)]);
var inst_25436 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_25438 = (function (){var all_files = inst_25413;
var res_SINGLEQUOTE_ = inst_25416;
var res = inst_25417;
var files_not_loaded = inst_25419;
var dependencies_that_loaded = inst_25421;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25421,inst_25417,inst_25419,inst_25413,inst_25416,inst_25436,state_val_25500,c__20755__auto__,map__25345,map__25345__$1,opts,before_jsload,on_jsload,reload_dependents,map__25346,map__25346__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__25437){
var map__25568 = p__25437;
var map__25568__$1 = ((((!((map__25568 == null)))?((((map__25568.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25568.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25568):map__25568);
var namespace = cljs.core.get.call(null,map__25568__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__25568__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25421,inst_25417,inst_25419,inst_25413,inst_25416,inst_25436,state_val_25500,c__20755__auto__,map__25345,map__25345__$1,opts,before_jsload,on_jsload,reload_dependents,map__25346,map__25346__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25439 = cljs.core.map.call(null,inst_25438,inst_25417);
var inst_25440 = cljs.core.pr_str.call(null,inst_25439);
var inst_25441 = figwheel.client.utils.log.call(null,inst_25440);
var inst_25442 = (function (){var all_files = inst_25413;
var res_SINGLEQUOTE_ = inst_25416;
var res = inst_25417;
var files_not_loaded = inst_25419;
var dependencies_that_loaded = inst_25421;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25421,inst_25417,inst_25419,inst_25413,inst_25416,inst_25436,inst_25438,inst_25439,inst_25440,inst_25441,state_val_25500,c__20755__auto__,map__25345,map__25345__$1,opts,before_jsload,on_jsload,reload_dependents,map__25346,map__25346__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25421,inst_25417,inst_25419,inst_25413,inst_25416,inst_25436,inst_25438,inst_25439,inst_25440,inst_25441,state_val_25500,c__20755__auto__,map__25345,map__25345__$1,opts,before_jsload,on_jsload,reload_dependents,map__25346,map__25346__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25443 = setTimeout(inst_25442,(10));
var state_25499__$1 = (function (){var statearr_25570 = state_25499;
(statearr_25570[(33)] = inst_25441);

(statearr_25570[(34)] = inst_25436);

return statearr_25570;
})();
var statearr_25571_25637 = state_25499__$1;
(statearr_25571_25637[(2)] = inst_25443);

(statearr_25571_25637[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25500 === (16))){
var state_25499__$1 = state_25499;
var statearr_25572_25638 = state_25499__$1;
(statearr_25572_25638[(2)] = reload_dependents);

(statearr_25572_25638[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25500 === (38))){
var inst_25453 = (state_25499[(16)]);
var inst_25470 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25453);
var state_25499__$1 = state_25499;
var statearr_25573_25639 = state_25499__$1;
(statearr_25573_25639[(2)] = inst_25470);

(statearr_25573_25639[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25500 === (30))){
var state_25499__$1 = state_25499;
var statearr_25574_25640 = state_25499__$1;
(statearr_25574_25640[(2)] = null);

(statearr_25574_25640[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25500 === (10))){
var inst_25373 = (state_25499[(22)]);
var inst_25375 = cljs.core.chunked_seq_QMARK_.call(null,inst_25373);
var state_25499__$1 = state_25499;
if(inst_25375){
var statearr_25575_25641 = state_25499__$1;
(statearr_25575_25641[(1)] = (13));

} else {
var statearr_25576_25642 = state_25499__$1;
(statearr_25576_25642[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25500 === (18))){
var inst_25407 = (state_25499[(2)]);
var state_25499__$1 = state_25499;
if(cljs.core.truth_(inst_25407)){
var statearr_25577_25643 = state_25499__$1;
(statearr_25577_25643[(1)] = (19));

} else {
var statearr_25578_25644 = state_25499__$1;
(statearr_25578_25644[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25500 === (42))){
var state_25499__$1 = state_25499;
var statearr_25579_25645 = state_25499__$1;
(statearr_25579_25645[(2)] = null);

(statearr_25579_25645[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25500 === (37))){
var inst_25465 = (state_25499[(2)]);
var state_25499__$1 = state_25499;
var statearr_25580_25646 = state_25499__$1;
(statearr_25580_25646[(2)] = inst_25465);

(statearr_25580_25646[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25500 === (8))){
var inst_25360 = (state_25499[(9)]);
var inst_25373 = (state_25499[(22)]);
var inst_25373__$1 = cljs.core.seq.call(null,inst_25360);
var state_25499__$1 = (function (){var statearr_25581 = state_25499;
(statearr_25581[(22)] = inst_25373__$1);

return statearr_25581;
})();
if(inst_25373__$1){
var statearr_25582_25647 = state_25499__$1;
(statearr_25582_25647[(1)] = (10));

} else {
var statearr_25583_25648 = state_25499__$1;
(statearr_25583_25648[(1)] = (11));

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
}
});})(c__20755__auto__,map__25345,map__25345__$1,opts,before_jsload,on_jsload,reload_dependents,map__25346,map__25346__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__20643__auto__,c__20755__auto__,map__25345,map__25345__$1,opts,before_jsload,on_jsload,reload_dependents,map__25346,map__25346__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20644__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20644__auto____0 = (function (){
var statearr_25587 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25587[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__20644__auto__);

(statearr_25587[(1)] = (1));

return statearr_25587;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20644__auto____1 = (function (state_25499){
while(true){
var ret_value__20645__auto__ = (function (){try{while(true){
var result__20646__auto__ = switch__20643__auto__.call(null,state_25499);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20646__auto__;
}
break;
}
}catch (e25588){if((e25588 instanceof Object)){
var ex__20647__auto__ = e25588;
var statearr_25589_25649 = state_25499;
(statearr_25589_25649[(5)] = ex__20647__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25499);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25588;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20645__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25650 = state_25499;
state_25499 = G__25650;
continue;
} else {
return ret_value__20645__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__20644__auto__ = function(state_25499){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20644__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20644__auto____1.call(this,state_25499);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__20644__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__20644__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__20644__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__20644__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20644__auto__;
})()
;})(switch__20643__auto__,c__20755__auto__,map__25345,map__25345__$1,opts,before_jsload,on_jsload,reload_dependents,map__25346,map__25346__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__20757__auto__ = (function (){var statearr_25590 = f__20756__auto__.call(null);
(statearr_25590[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20755__auto__);

return statearr_25590;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20757__auto__);
});})(c__20755__auto__,map__25345,map__25345__$1,opts,before_jsload,on_jsload,reload_dependents,map__25346,map__25346__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__20755__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__25653,link){
var map__25656 = p__25653;
var map__25656__$1 = ((((!((map__25656 == null)))?((((map__25656.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25656.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25656):map__25656);
var file = cljs.core.get.call(null,map__25656__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__25656,map__25656__$1,file){
return (function (p1__25651_SHARP_,p2__25652_SHARP_){
if(cljs.core._EQ_.call(null,p1__25651_SHARP_,p2__25652_SHARP_)){
return p1__25651_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__25656,map__25656__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__25662){
var map__25663 = p__25662;
var map__25663__$1 = ((((!((map__25663 == null)))?((((map__25663.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25663.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25663):map__25663);
var match_length = cljs.core.get.call(null,map__25663__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__25663__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__25658_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__25658_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4425__auto__)){
var res = temp__4425__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args25665 = [];
var len__17829__auto___25668 = arguments.length;
var i__17830__auto___25669 = (0);
while(true){
if((i__17830__auto___25669 < len__17829__auto___25668)){
args25665.push((arguments[i__17830__auto___25669]));

var G__25670 = (i__17830__auto___25669 + (1));
i__17830__auto___25669 = G__25670;
continue;
} else {
}
break;
}

var G__25667 = args25665.length;
switch (G__25667) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25665.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__25672_SHARP_,p2__25673_SHARP_){
return cljs.core.assoc.call(null,p1__25672_SHARP_,cljs.core.get.call(null,p2__25673_SHARP_,key),p2__25673_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__25674){
var map__25677 = p__25674;
var map__25677__$1 = ((((!((map__25677 == null)))?((((map__25677.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25677.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25677):map__25677);
var f_data = map__25677__$1;
var file = cljs.core.get.call(null,map__25677__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__25679,files_msg){
var map__25686 = p__25679;
var map__25686__$1 = ((((!((map__25686 == null)))?((((map__25686.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25686.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25686):map__25686);
var opts = map__25686__$1;
var on_cssload = cljs.core.get.call(null,map__25686__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__25688_25692 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__25689_25693 = null;
var count__25690_25694 = (0);
var i__25691_25695 = (0);
while(true){
if((i__25691_25695 < count__25690_25694)){
var f_25696 = cljs.core._nth.call(null,chunk__25689_25693,i__25691_25695);
figwheel.client.file_reloading.reload_css_file.call(null,f_25696);

var G__25697 = seq__25688_25692;
var G__25698 = chunk__25689_25693;
var G__25699 = count__25690_25694;
var G__25700 = (i__25691_25695 + (1));
seq__25688_25692 = G__25697;
chunk__25689_25693 = G__25698;
count__25690_25694 = G__25699;
i__25691_25695 = G__25700;
continue;
} else {
var temp__4425__auto___25701 = cljs.core.seq.call(null,seq__25688_25692);
if(temp__4425__auto___25701){
var seq__25688_25702__$1 = temp__4425__auto___25701;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25688_25702__$1)){
var c__17574__auto___25703 = cljs.core.chunk_first.call(null,seq__25688_25702__$1);
var G__25704 = cljs.core.chunk_rest.call(null,seq__25688_25702__$1);
var G__25705 = c__17574__auto___25703;
var G__25706 = cljs.core.count.call(null,c__17574__auto___25703);
var G__25707 = (0);
seq__25688_25692 = G__25704;
chunk__25689_25693 = G__25705;
count__25690_25694 = G__25706;
i__25691_25695 = G__25707;
continue;
} else {
var f_25708 = cljs.core.first.call(null,seq__25688_25702__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_25708);

var G__25709 = cljs.core.next.call(null,seq__25688_25702__$1);
var G__25710 = null;
var G__25711 = (0);
var G__25712 = (0);
seq__25688_25692 = G__25709;
chunk__25689_25693 = G__25710;
count__25690_25694 = G__25711;
i__25691_25695 = G__25712;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__25686,map__25686__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__25686,map__25686__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map