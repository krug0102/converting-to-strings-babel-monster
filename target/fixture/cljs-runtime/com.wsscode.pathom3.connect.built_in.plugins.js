goog.provide('com.wsscode.pathom3.connect.built_in.plugins');
com.wsscode.pathom3.connect.built_in.plugins.process_entity_errors = (function com$wsscode$pathom3$connect$built_in$plugins$process_entity_errors(entity){
if(cljs.core.truth_(com.wsscode.pathom3.error.scan_for_errors_QMARK_(entity))){
var ast = new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","index-ast","com.wsscode.pathom3.connect.planner/index-ast",905845713).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","run-stats","com.wsscode.pathom3.connect.runner/run-stats",1718909061).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(entity)));
var errors = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$1((function (k){
var temp__5751__auto__ = com.wsscode.pathom3.error.attribute_error(entity,k);
if(cljs.core.truth_(temp__5751__auto__)){
var error = temp__5751__auto__;
return com.wsscode.misc.coll.make_map_entry(k,error);
} else {
return null;
}
})),cljs.core.keys(ast));
var G__159012 = entity;
if(cljs.core.seq(errors)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__159012,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","attribute-errors","com.wsscode.pathom3.connect.runner/attribute-errors",723532527),errors);
} else {
return G__159012;
}
} else {
return entity;
}
});
/**
 * This plugin makes attributes errors visible in the data.
 */
com.wsscode.pathom3.connect.built_in.plugins.attribute_errors_plugin = (function com$wsscode$pathom3$connect$built_in$plugins$attribute_errors_plugin(){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom3.plugin","id","com.wsscode.pathom3.plugin/id",661105804),new cljs.core.Symbol("com.wsscode.pathom3.connect.built-in.plugins","attribute-errors-plugin","com.wsscode.pathom3.connect.built-in.plugins/attribute-errors-plugin",-1165732049,null),new cljs.core.Keyword("com.wsscode.pathom3.interface.eql","wrap-process-ast","com.wsscode.pathom3.interface.eql/wrap-process-ast",-300125751),(function com$wsscode$pathom3$connect$built_in$plugins$attribute_errors_plugin_$_attribute_errors_plugin_wrap_process_ast_external(process){
return (function com$wsscode$pathom3$connect$built_in$plugins$attribute_errors_plugin_$_attribute_errors_plugin_wrap_process_ast_external_$_attribute_errors_plugin_wrap_process_ast_internal(env,ast){
var G__159013 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.Keyword("com.wsscode.pathom3.format.eql","map-select-include","com.wsscode.pathom3.format.eql/map-select-include",-1328680889),com.wsscode.misc.coll.sconj,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","attribute-errors","com.wsscode.pathom3.connect.runner/attribute-errors",723532527));
var G__159014 = ast;
return (process.cljs$core$IFn$_invoke$arity$2 ? process.cljs$core$IFn$_invoke$arity$2(G__159013,G__159014) : process.call(null,G__159013,G__159014));
});
}),new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","wrap-root-run-graph!","com.wsscode.pathom3.connect.runner/wrap-root-run-graph!",893721083),(function com$wsscode$pathom3$connect$built_in$plugins$attribute_errors_plugin_$_attribute_errors_plugin_wrap_run_graph_external(run_graph_BANG_){
return (function com$wsscode$pathom3$connect$built_in$plugins$attribute_errors_plugin_$_attribute_errors_plugin_wrap_run_graph_external_$_attribute_errors_plugin_wrap_run_graph_internal(env,ast_or_graph,entity_tree_STAR_){
var r__82170__auto__ = (run_graph_BANG_.cljs$core$IFn$_invoke$arity$3 ? run_graph_BANG_.cljs$core$IFn$_invoke$arity$3(env,ast_or_graph,entity_tree_STAR_) : run_graph_BANG_.call(null,env,ast_or_graph,entity_tree_STAR_));
if(promesa.core.promise_QMARK_(r__82170__auto__)){
return promesa.core.then.cljs$core$IFn$_invoke$arity$2(r__82170__auto__,(function (entity){
return clojure.walk.postwalk((function (x){
if(cljs.core.map_QMARK_(x)){
return com.wsscode.pathom3.connect.built_in.plugins.process_entity_errors(x);
} else {
return x;
}
}),entity);
}));
} else {
var entity = r__82170__auto__;
return clojure.walk.postwalk((function (x){
if(cljs.core.map_QMARK_(x)){
return com.wsscode.pathom3.connect.built_in.plugins.process_entity_errors(x);
} else {
return x;
}
}),entity);
}
});
})], null);
});
/**
 * Remove the run stats from the result meta. Use this in production to avoid sending
 *   the stats. This is important for performance and security.
 */
com.wsscode.pathom3.connect.built_in.plugins.remove_stats_plugin = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom3.plugin","id","com.wsscode.pathom3.plugin/id",661105804),new cljs.core.Symbol("com.wsscode.pathom3.connect.built-in.plugins","remove-stats-plugin","com.wsscode.pathom3.connect.built-in.plugins/remove-stats-plugin",1967606466,null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","wrap-run-graph!","com.wsscode.pathom3.connect.runner/wrap-run-graph!",-170975775),(function com$wsscode$pathom3$connect$built_in$plugins$remove_stats_plugin_wrap_run_graph_external(run_graph_BANG_){
return (function com$wsscode$pathom3$connect$built_in$plugins$remove_stats_plugin_wrap_run_graph_external_$_remove_stats_plugin_wrap_run_graph_internal(env,ast_or_graph,entity_tree_STAR_){
var r__82170__auto__ = (run_graph_BANG_.cljs$core$IFn$_invoke$arity$3 ? run_graph_BANG_.cljs$core$IFn$_invoke$arity$3(env,ast_or_graph,entity_tree_STAR_) : run_graph_BANG_.call(null,env,ast_or_graph,entity_tree_STAR_));
if(promesa.core.promise_QMARK_(r__82170__auto__)){
return promesa.core.then.cljs$core$IFn$_invoke$arity$2(r__82170__auto__,(function (response){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$3(response,cljs.core.dissoc,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","run-stats","com.wsscode.pathom3.connect.runner/run-stats",1718909061));
}));
} else {
var response = r__82170__auto__;
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$3(response,cljs.core.dissoc,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","run-stats","com.wsscode.pathom3.connect.runner/run-stats",1718909061));
}
});
})], null)], 0));
/**
 * Remove the run stats from the result meta. Use this in production to avoid sending
 *   the stats. This is important for performance and security.
 * 
 *   TODO: error story is not complete, still up to decide what to do when params can't
 *   get fulfilled.
 */
com.wsscode.pathom3.connect.built_in.plugins.mutation_resolve_params = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom3.plugin","id","com.wsscode.pathom3.plugin/id",661105804),new cljs.core.Symbol("com.wsscode.pathom3.connect.built-in.plugins","mutation-resolve-params","com.wsscode.pathom3.connect.built-in.plugins/mutation-resolve-params",-2057198688,null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","wrap-mutate","com.wsscode.pathom3.connect.runner/wrap-mutate",-1277033248),(function com$wsscode$pathom3$connect$built_in$plugins$mutation_resolve_params_external(mutate){
return (function com$wsscode$pathom3$connect$built_in$plugins$mutation_resolve_params_external_$_mutation_resolve_params_internal(env,p__159015){
var map__159016 = p__159015;
var map__159016__$1 = cljs.core.__destructure_map(map__159016);
var ast = map__159016__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__159016__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var map__159017 = com.wsscode.pathom3.connect.indexes.mutation_config(env,key);
var map__159017__$1 = cljs.core.__destructure_map(map__159017);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__159017__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","params","com.wsscode.pathom3.connect.operation/params",-1389779339));
var r__82170__auto__ = (cljs.core.truth_(params)?(cljs.core.truth_(new cljs.core.Keyword("com.wsscode.pathom3.connect.runner.async","async-runner?","com.wsscode.pathom3.connect.runner.async/async-runner?",961718140).cljs$core$IFn$_invoke$arity$1(env))?com.wsscode.pathom3.interface$.async.eql.process.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(ast),params):com.wsscode.pathom3.interface$.eql.process.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(ast),params)):new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(ast));
if(promesa.core.promise_QMARK_(r__82170__auto__)){
return promesa.core.then.cljs$core$IFn$_invoke$arity$2(r__82170__auto__,(function (params_SINGLEQUOTE_){
var G__159020 = env;
var G__159021 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ast,new cljs.core.Keyword(null,"params","params",710516235),params_SINGLEQUOTE_);
return (mutate.cljs$core$IFn$_invoke$arity$2 ? mutate.cljs$core$IFn$_invoke$arity$2(G__159020,G__159021) : mutate.call(null,G__159020,G__159021));
}));
} else {
var params_SINGLEQUOTE_ = r__82170__auto__;
var G__159022 = env;
var G__159023 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ast,new cljs.core.Keyword(null,"params","params",710516235),params_SINGLEQUOTE_);
return (mutate.cljs$core$IFn$_invoke$arity$2 ? mutate.cljs$core$IFn$_invoke$arity$2(G__159022,G__159023) : mutate.call(null,G__159022,G__159023));
}
});
})], null)], 0));

//# sourceMappingURL=com.wsscode.pathom3.connect.built_in.plugins.js.map
