goog.provide('com.wsscode.pathom3.error');
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom3.error","error-type","com.wsscode.pathom3.error/error-type",1245150641),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("com.wsscode.pathom3.error","attribute-unreachable","com.wsscode.pathom3.error/attribute-unreachable",-777663159),"null",new cljs.core.Keyword("com.wsscode.pathom3.error","node-exception","com.wsscode.pathom3.error/node-exception",-1554442230),"null",new cljs.core.Keyword("com.wsscode.pathom3.error","ancestor-error","com.wsscode.pathom3.error/ancestor-error",-29995439),"null",new cljs.core.Keyword("com.wsscode.pathom3.error","attribute-not-requested","com.wsscode.pathom3.error/attribute-not-requested",1788921876),"null",new cljs.core.Keyword("com.wsscode.pathom3.error","attribute-missing","com.wsscode.pathom3.error/attribute-missing",584652600),"null",new cljs.core.Keyword("com.wsscode.pathom3.error","node-errors","com.wsscode.pathom3.error/node-errors",-1703376516),"null"], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("com.wsscode.pathom3.error","attribute-unreachable","com.wsscode.pathom3.error/attribute-unreachable",-777663159),null,new cljs.core.Keyword("com.wsscode.pathom3.error","node-exception","com.wsscode.pathom3.error/node-exception",-1554442230),null,new cljs.core.Keyword("com.wsscode.pathom3.error","ancestor-error","com.wsscode.pathom3.error/ancestor-error",-29995439),null,new cljs.core.Keyword("com.wsscode.pathom3.error","attribute-not-requested","com.wsscode.pathom3.error/attribute-not-requested",1788921876),null,new cljs.core.Keyword("com.wsscode.pathom3.error","attribute-missing","com.wsscode.pathom3.error/attribute-missing",584652600),null,new cljs.core.Keyword("com.wsscode.pathom3.error","node-errors","com.wsscode.pathom3.error/node-errors",-1703376516),null], null), null));
com.wsscode.pathom3.error.attribute_node_error = (function com$wsscode$pathom3$error$attribute_node_error(p__83922,node_id){
var map__83923 = p__83922;
var map__83923__$1 = cljs.core.__destructure_map(map__83923);
var graph = map__83923__$1;
var node_run_stats = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83923__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","node-run-stats","com.wsscode.pathom3.connect.runner/node-run-stats",-2036346899));
var map__83924 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(node_run_stats,node_id);
var map__83924__$1 = cljs.core.__destructure_map(map__83924);
var node_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83924__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","node-error","com.wsscode.pathom3.connect.runner/node-error",890120380));
var node_run_finish_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83924__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","node-run-finish-ms","com.wsscode.pathom3.connect.runner/node-run-finish-ms",1292429944));
if(cljs.core.truth_(node_error)){
return com.wsscode.misc.coll.make_map_entry(node_id,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom3.error","error-type","com.wsscode.pathom3.error/error-type",1245150641),new cljs.core.Keyword("com.wsscode.pathom3.error","node-exception","com.wsscode.pathom3.error/node-exception",-1554442230),new cljs.core.Keyword("com.wsscode.pathom3.error","exception","com.wsscode.pathom3.error/exception",-49171775),node_error], null));
} else {
if(cljs.core.truth_(node_run_finish_ms)){
return com.wsscode.misc.coll.make_map_entry(node_id,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom3.error","error-type","com.wsscode.pathom3.error/error-type",1245150641),new cljs.core.Keyword("com.wsscode.pathom3.error","attribute-missing","com.wsscode.pathom3.error/attribute-missing",584652600)], null));
} else {
var temp__5751__auto__ = cljs.core.first(cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (node_id__$1){
var temp__5751__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(node_run_stats,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_id__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","node-error","com.wsscode.pathom3.connect.runner/node-error",890120380)], null));
if(cljs.core.truth_(temp__5751__auto__)){
var error = temp__5751__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_id__$1,error], null);
} else {
return null;
}
}),com.wsscode.pathom3.connect.planner.node_ancestors(graph,node_id)));
if(cljs.core.truth_(temp__5751__auto__)){
var vec__83926 = temp__5751__auto__;
var node_id_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83926,(0),null);
var error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83926,(1),null);
return com.wsscode.misc.coll.make_map_entry(node_id,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom3.error","error-type","com.wsscode.pathom3.error/error-type",1245150641),new cljs.core.Keyword("com.wsscode.pathom3.error","ancestor-error","com.wsscode.pathom3.error/ancestor-error",-29995439),new cljs.core.Keyword("com.wsscode.pathom3.error","error-ancestor-id","com.wsscode.pathom3.error/error-ancestor-id",1256475106),node_id_SINGLEQUOTE_,new cljs.core.Keyword("com.wsscode.pathom3.error","exception","com.wsscode.pathom3.error/exception",-49171775),error], null));
} else {
return null;
}

}
}
});
/**
 * Return the attribute error, in case it failed.
 */
com.wsscode.pathom3.error.attribute_error = (function com$wsscode$pathom3$error$attribute_error(response,attribute){
if(cljs.core.contains_QMARK_(response,attribute)){
return null;
} else {
var map__83934 = new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","run-stats","com.wsscode.pathom3.connect.runner/run-stats",1718909061).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(response));
var map__83934__$1 = cljs.core.__destructure_map(map__83934);
var run_stats = map__83934__$1;
var index_ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83934__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","index-ast","com.wsscode.pathom3.connect.planner/index-ast",905845713));
var index_attrs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83934__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","index-attrs","com.wsscode.pathom3.connect.planner/index-attrs",-2110590142));
if(cljs.core.contains_QMARK_(index_ast,attribute)){
var temp__5751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(index_attrs,attribute);
if(cljs.core.truth_(temp__5751__auto__)){
var nodes = temp__5751__auto__;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom3.error","error-type","com.wsscode.pathom3.error/error-type",1245150641),new cljs.core.Keyword("com.wsscode.pathom3.error","node-errors","com.wsscode.pathom3.error/node-errors",-1703376516),new cljs.core.Keyword("com.wsscode.pathom3.error","node-error-details","com.wsscode.pathom3.error/node-error-details",1227147828),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$1((function (p1__83931_SHARP_){
return com.wsscode.pathom3.error.attribute_node_error(run_stats,p1__83931_SHARP_);
})),nodes)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom3.error","error-type","com.wsscode.pathom3.error/error-type",1245150641),new cljs.core.Keyword("com.wsscode.pathom3.error","attribute-unreachable","com.wsscode.pathom3.error/attribute-unreachable",-777663159)], null);
}
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom3.error","error-type","com.wsscode.pathom3.error/error-type",1245150641),new cljs.core.Keyword("com.wsscode.pathom3.error","attribute-not-requested","com.wsscode.pathom3.error/attribute-not-requested",1788921876)], null);
}
}
});
com.wsscode.pathom3.error.scan_for_errors_QMARK_ = (function com$wsscode$pathom3$error$scan_for_errors_QMARK_(response){
var G__83935 = response;
var G__83935__$1 = (((G__83935 == null))?null:cljs.core.meta(G__83935));
if((G__83935__$1 == null)){
return null;
} else {
return cljs.core.contains_QMARK_(G__83935__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","run-stats","com.wsscode.pathom3.connect.runner/run-stats",1718909061));
}
});

//# sourceMappingURL=com.wsscode.pathom3.error.js.map
