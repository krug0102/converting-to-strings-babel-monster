goog.provide('com.wsscode.pathom3.connect.runner.async');
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom3.connect.runner.async","env","com.wsscode.pathom3.connect.runner.async/env",505762358),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"env","env",-1815813235),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null)),new cljs.core.Keyword(null,"env-promise","env-promise",1031935557),new cljs.core.Symbol("promesa.core","promise?","promesa.core/promise?",-1893544292,null)),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword(null,"env-promise","env-promise",1031935557)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null)),new cljs.core.Symbol("promesa.core","promise?","promesa.core/promise?",-1893544292,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__158740){
return cljs.core.map_QMARK_(G__158740);
})], null),(function (G__158740){
return cljs.core.map_QMARK_(G__158740);
}),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),null])),promesa.core.promise_QMARK_], null),null));

com.wsscode.pathom3.connect.runner.async.reduce_async = (function com$wsscode$pathom3$connect$runner$async$reduce_async(f,init,coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (d,item){
return promesa.core.then.cljs$core$IFn$_invoke$arity$2(d,(function (p1__158741_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__158741_SHARP_,item) : f.call(null,p1__158741_SHARP_,item));
}));
}),promesa.core.resolved(init),coll);
});
com.wsscode.pathom3.connect.runner.async.reduce_kv_async = (function com$wsscode$pathom3$connect$runner$async$reduce_kv_async(f,init,coll){
return cljs.core.reduce_kv((function (d,k,v){
return promesa.core.then.cljs$core$IFn$_invoke$arity$2(d,(function (p1__158742_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(p1__158742_SHARP_,k,v) : f.call(null,p1__158742_SHARP_,k,v));
}));
}),promesa.core.resolved(init),coll);
});
com.wsscode.pathom3.connect.runner.async.process_map_subquery = (function com$wsscode$pathom3$connect$runner$async$process_map_subquery(env,ast,m){
if(((cljs.core.map_QMARK_(m)) && (cljs.core.not(com.wsscode.pathom3.connect.operation.final_value_QMARK_(m))))){
var cache_tree_STAR_ = com.wsscode.pathom3.entity_tree.create_entity(m);
var ast__$1 = com.wsscode.pathom3.connect.runner.pick_union_entry(ast,m);
return (com.wsscode.pathom3.connect.runner.async.run_graph_BANG_.cljs$core$IFn$_invoke$arity$3 ? com.wsscode.pathom3.connect.runner.async.run_graph_BANG_.cljs$core$IFn$_invoke$arity$3(env,ast__$1,cache_tree_STAR_) : com.wsscode.pathom3.connect.runner.async.run_graph_BANG_.call(null,env,ast__$1,cache_tree_STAR_));
} else {
return m;
}
});
com.wsscode.pathom3.connect.runner.async.process_sequence_subquery = (function com$wsscode$pathom3$connect$runner$async$process_sequence_subquery(env,ast,s){
if(cljs.core.truth_(com.wsscode.pathom3.connect.operation.final_value_QMARK_(s))){
return s;
} else {
return promesa.core.then.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom3.connect.runner.async.reduce_async((function (p__158753,entry){
var vec__158754 = p__158753;
var seq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__158754,(0),null);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__158754,(1),null);
return promesa.protocols._bind(null,(function (___56277__auto__){
return promesa.protocols._bind(com.wsscode.pathom3.connect.runner.async.process_map_subquery(com.wsscode.pathom3.path.append_path(env,idx),ast,entry),(function (sub_res){
return promesa.protocols._bind(null,(function (___56267__auto__){
return promesa.protocols._promise(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seq,sub_res),(idx + (1))], null));
}));
}));
}));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.empty(s),(0)], null),s),cljs.core.first);
}
});
/**
 * Build a new map where the values are replaced with the map process of the subquery.
 */
com.wsscode.pathom3.connect.runner.async.process_map_container_subquery = (function com$wsscode$pathom3$connect$runner$async$process_map_container_subquery(env,ast,m){
if(cljs.core.truth_(com.wsscode.pathom3.connect.operation.final_value_QMARK_(m))){
return m;
} else {
return com.wsscode.pathom3.connect.runner.async.reduce_kv_async((function (m__$1,k,v){
return promesa.protocols._bind(null,(function (___56277__auto__){
return promesa.protocols._bind(com.wsscode.pathom3.connect.runner.async.process_map_subquery(com.wsscode.pathom3.path.append_path(env,k),ast,v),(function (res){
return promesa.protocols._bind(null,(function (___56267__auto__){
return promesa.protocols._promise(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,k,res));
}));
}));
}));
}),cljs.core.empty(m),m);
}
});
com.wsscode.pathom3.connect.runner.async.process_attr_subquery = (function com$wsscode$pathom3$connect$runner$async$process_attr_subquery(p__158761,entity,k,v){
var map__158762 = p__158761;
var map__158762__$1 = cljs.core.__destructure_map(map__158762);
var env = map__158762__$1;
var graph = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__158762__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","graph","com.wsscode.pathom3.connect.planner/graph",-1915509744));
var map__158763 = com.wsscode.pathom3.connect.runner.entry_ast(graph,k);
var map__158763__$1 = cljs.core.__destructure_map(map__158763);
var ast = map__158763__$1;
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__158763__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var env__$1 = com.wsscode.pathom3.path.append_path(env,k);
if(cljs.core.truth_(children)){
if(cljs.core.map_QMARK_(v)){
if(cljs.core.truth_(com.wsscode.pathom3.connect.runner.process_map_container_QMARK_(ast,v))){
return com.wsscode.pathom3.connect.runner.async.process_map_container_subquery(env__$1,ast,v);
} else {
return com.wsscode.pathom3.connect.runner.async.process_map_subquery(env__$1,ast,v);
}
} else {
if(com.wsscode.misc.coll.collection_QMARK_(v)){
return com.wsscode.pathom3.connect.runner.async.process_sequence_subquery((function (){var G__158764 = env__$1;
if((!(cljs.core.vector_QMARK_(v)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__158764,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","unsupported-batch?","com.wsscode.pathom3.connect.runner/unsupported-batch?",-826939500),true);
} else {
return G__158764;
}
})(),ast,v);
} else {
return v;

}
}
} else {
var temp__5751__auto__ = cljs.core.find(entity,k);
if(cljs.core.truth_(temp__5751__auto__)){
var x = temp__5751__auto__;
return cljs.core.val(x);
} else {
return v;
}
}
});
/**
 * Specialized merge versions that work on entity data.
 */
com.wsscode.pathom3.connect.runner.async.merge_entity_data = (function com$wsscode$pathom3$connect$runner$async$merge_entity_data(env,entity,new_data){
return com.wsscode.pathom3.connect.runner.async.reduce_kv_async((function (out,k,v){
if(com.wsscode.misc.refs.kw_identical_QMARK_(v,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","unknown-value","com.wsscode.pathom3.connect.operation/unknown-value",1340287052))){
return out;
} else {
return promesa.protocols._bind(null,(function (___56277__auto__){
return promesa.protocols._bind(com.wsscode.pathom3.connect.runner.async.process_attr_subquery(env,entity,k,v),(function (v_SINGLEQUOTE_){
return promesa.protocols._bind(null,(function (___56267__auto__){
return promesa.protocols._promise(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(out,k,v_SINGLEQUOTE_));
}));
}));
}));
}
}),entity,new_data);
});
/**
 * This function gets the map returned from the resolver and merge the data in the
 *   current cache-tree.
 */
com.wsscode.pathom3.connect.runner.async.merge_resolver_response_BANG_ = (function com$wsscode$pathom3$connect$runner$async$merge_resolver_response_BANG_(env,response){
if(cljs.core.map_QMARK_(response)){
return promesa.protocols._bind(null,(function (___56277__auto__){
return promesa.protocols._bind(com.wsscode.pathom3.connect.runner.async.merge_entity_data(env,com.wsscode.pathom3.entity_tree.entity(env),response),(function (new_data){
return promesa.protocols._bind(null,(function (___56267__auto__){
return promesa.protocols._bind(com.wsscode.pathom3.entity_tree.reset_entity_BANG_(env,new_data),(function (___56266__auto__){
return promesa.protocols._promise(env);
}));
}));
}));
}));
} else {
return env;
}
});
/**
 * Process the idents from the Graph, this will add the ident data into the child.
 * 
 *   If there is ident data already, it gets merged with the ident value.
 */
com.wsscode.pathom3.connect.runner.async.process_idents_BANG_ = (function com$wsscode$pathom3$connect$runner$async$process_idents_BANG_(env,idents){
return promesa.core.then.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom3.connect.runner.async.reduce_async((function (_,k){
return promesa.protocols._bind(null,(function (___56277__auto__){
return promesa.protocols._bind(com.wsscode.pathom3.connect.runner.async.process_attr_subquery(env,cljs.core.PersistentArrayMap.EMPTY,k,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.get.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom3.entity_tree.entity(env),k),cljs.core.first(k),cljs.core.second(k))),(function (sub_value){
return promesa.protocols._bind(null,(function (___56267__auto__){
return promesa.protocols._promise(com.wsscode.pathom3.entity_tree.swap_entity_BANG_.cljs$core$IFn$_invoke$arity$2(env,(function (p1__158765_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__158765_SHARP_,k,sub_value);
})));
}));
}));
}));
}),null,idents),cljs.core.constantly(null));
});
/**
 * Runs the next node associated with the node, in case it exists.
 */
com.wsscode.pathom3.connect.runner.async.run_next_node_BANG_ = (function com$wsscode$pathom3$connect$runner$async$run_next_node_BANG_(p__158766,p__158767){
var map__158768 = p__158766;
var map__158768__$1 = cljs.core.__destructure_map(map__158768);
var env = map__158768__$1;
var graph = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__158768__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","graph","com.wsscode.pathom3.connect.planner/graph",-1915509744));
var map__158769 = p__158767;
var map__158769__$1 = cljs.core.__destructure_map(map__158769);
var run_next = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__158769__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","run-next","com.wsscode.pathom3.connect.planner/run-next",285457140));
if(cljs.core.truth_(run_next)){
var G__158770 = env;
var G__158771 = com.wsscode.pathom3.connect.planner.get_node.cljs$core$IFn$_invoke$arity$2(graph,run_next);
return (com.wsscode.pathom3.connect.runner.async.run_node_BANG_.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom3.connect.runner.async.run_node_BANG_.cljs$core$IFn$_invoke$arity$2(G__158770,G__158771) : com.wsscode.pathom3.connect.runner.async.run_node_BANG_.call(null,G__158770,G__158771));
} else {
return null;
}
});
com.wsscode.pathom3.connect.runner.async.invoke_resolver_cached = (function com$wsscode$pathom3$connect$runner$async$invoke_resolver_cached(env,cache_QMARK_,op_name,resolver,cache_store,input_data,params){
if(cljs.core.truth_(cache_QMARK_)){
return com.wsscode.pathom3.cache.cached(cache_store,env,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [op_name,input_data,params], null),(function (){
try{return com.wsscode.pathom3.connect.operation.protocols._resolve(resolver,env,input_data);
}catch (e158773){var e = e158773;
return promesa.core.rejected(e);
}}));
} else {
try{return com.wsscode.pathom3.connect.operation.protocols._resolve(resolver,env,input_data);
}catch (e158774){var e = e158774;
return promesa.core.rejected(e);
}}
});
com.wsscode.pathom3.connect.runner.async.invoke_resolver_cached_batch = (function com$wsscode$pathom3$connect$runner$async$invoke_resolver_cached_batch(env,cache_QMARK_,op_name,resolver,cache_store,input_data,params){
com.wsscode.pathom3.connect.runner.warn_batch_unsupported(env,op_name);

if(cljs.core.truth_(cache_QMARK_)){
return com.wsscode.pathom3.cache.cached(cache_store,env,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [op_name,input_data,params], null),(function (){
try{var r__82170__auto__ = com.wsscode.pathom3.connect.operation.protocols._resolve(resolver,env,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_data], null));
if(promesa.core.promise_QMARK_(r__82170__auto__)){
return promesa.core.then.cljs$core$IFn$_invoke$arity$2(r__82170__auto__,(function (res){
return cljs.core.first(res);
}));
} else {
var res = r__82170__auto__;
return cljs.core.first(res);
}
}catch (e158776){var e = e158776;
return promesa.core.rejected(e);
}}));
} else {
try{var r__82170__auto__ = com.wsscode.pathom3.connect.operation.protocols._resolve(resolver,env,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_data], null));
if(promesa.core.promise_QMARK_(r__82170__auto__)){
return promesa.core.then.cljs$core$IFn$_invoke$arity$2(r__82170__auto__,(function (res){
return cljs.core.first(res);
}));
} else {
var res = r__82170__auto__;
return cljs.core.first(res);
}
}catch (e158777){var e = e158777;
return promesa.core.rejected(e);
}}
});
/**
 * Evaluates a resolver using node information.
 * 
 *   When this function runs the resolver, if filters the data to only include the keys
 *   mentioned by the resolver input. This is important to ensure that the resolver is
 *   not using some key that came accidentally due to execution order, that would lead to
 *   brittle executions.
 */
com.wsscode.pathom3.connect.runner.async.invoke_resolver_from_node = (function com$wsscode$pathom3$connect$runner$async$invoke_resolver_from_node(env,p__158778){
var map__158783 = p__158778;
var map__158783__$1 = cljs.core.__destructure_map(map__158783);
var node = map__158783__$1;
var op_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__158783__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","op-name","com.wsscode.pathom3.connect.operation/op-name",-1249801049));
var input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__158783__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","input","com.wsscode.pathom3.connect.planner/input",1912157524));
var resolver = com.wsscode.pathom3.connect.indexes.resolver(env,op_name);
var map__158792 = com.wsscode.pathom3.connect.operation.operation_config(resolver);
var map__158792__$1 = cljs.core.__destructure_map(map__158792);
var op_name__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__158792__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","op-name","com.wsscode.pathom3.connect.operation/op-name",-1249801049));
var batch_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__158792__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","batch?","com.wsscode.pathom3.connect.operation/batch?",1500979317));
var cache_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__158792__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","cache?","com.wsscode.pathom3.connect.operation/cache?",575940493),true);
var cache_store = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__158792__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","cache-store","com.wsscode.pathom3.connect.operation/cache-store",1503197377));
var optionals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__158792__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","optionals","com.wsscode.pathom3.connect.operation/optionals",1880951663));
var env__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","node","com.wsscode.pathom3.connect.planner/node",325156565),node);
var entity = com.wsscode.pathom3.entity_tree.entity(env__$1);
var input_data = com.wsscode.pathom3.format.shape_descriptor.select_shape_filtering.cljs$core$IFn$_invoke$arity$3(entity,com.wsscode.pathom3.format.shape_descriptor.merge_shapes.cljs$core$IFn$_invoke$arity$2(input,optionals),input);
var input_shape = com.wsscode.pathom3.format.shape_descriptor.data__GT_shape_descriptor(input_data);
var params = com.wsscode.pathom3.connect.operation.params(env__$1);
var cache_store__$1 = com.wsscode.pathom3.connect.runner.choose_cache_store(env__$1,cache_store);
var resolver_cache_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env__$1,cache_store__$1);
var _ = com.wsscode.pathom3.connect.runner.merge_node_stats_BANG_(env__$1,node,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","resolver-run-start-ms","com.wsscode.pathom3.connect.runner/resolver-run-start-ms",213921287),com.wsscode.misc.time.now_ms()], null));
var result = promesa.core.catch$.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(com.wsscode.pathom3.format.shape_descriptor.missing.cljs$core$IFn$_invoke$arity$3(input_shape,input,entity))?(cljs.core.truth_(com.wsscode.pathom3.connect.runner.missing_maybe_in_pending_batch_QMARK_(env__$1,input))?com.wsscode.pathom3.connect.runner.wait_batch_response(env__$1,node):promesa.core.rejected(cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Insufficient data",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"required","required",1807647006),input,new cljs.core.Keyword(null,"available","available",-1470697127),input_shape], null)))):(cljs.core.truth_(batch_QMARK_)?(function (){var temp__5751__auto__ = com.wsscode.pathom3.cache.cache_find(resolver_cache_STAR_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [op_name__$1,input_data,params], null));
if(cljs.core.truth_(temp__5751__auto__)){
var x = temp__5751__auto__;
return cljs.core.val(x);
} else {
if(cljs.core.truth_(new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","unsupported-batch?","com.wsscode.pathom3.connect.runner/unsupported-batch?",-826939500).cljs$core$IFn$_invoke$arity$1(env__$1))){
return com.wsscode.pathom3.connect.runner.async.invoke_resolver_cached_batch(env__$1,cache_QMARK_,op_name__$1,resolver,cache_store__$1,input_data,params);
} else {
return com.wsscode.pathom3.connect.runner.batch_hold_token(env__$1,cache_QMARK_,op_name__$1,node,cache_store__$1,input_data);
}
}
})():com.wsscode.pathom3.connect.runner.async.invoke_resolver_cached(env__$1,cache_QMARK_,op_name__$1,resolver,cache_store__$1,input_data,params)
)),(function (error){
com.wsscode.pathom3.connect.runner.mark_resolver_error_with_plugins(env__$1,node,error);

return new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","node-error","com.wsscode.pathom3.connect.runner/node-error",890120380);
}));
return promesa.protocols._bind(null,(function (___56277__auto__){
return promesa.protocols._bind(result,(function (result__$1){
return promesa.protocols._bind(null,(function (___56267__auto__){
return promesa.protocols._bind((function (){var finish = com.wsscode.misc.time.now_ms();
return com.wsscode.pathom3.connect.runner.merge_node_stats_BANG_(env__$1,node,(function (){var G__158797 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","resolver-run-finish-ms","com.wsscode.pathom3.connect.runner/resolver-run-finish-ms",375193860),finish], null);
if(cljs.core.not(new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","batch-hold","com.wsscode.pathom3.connect.runner/batch-hold",-364021743).cljs$core$IFn$_invoke$arity$1(result__$1))){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__158797,com.wsscode.pathom3.connect.runner.report_resolver_io_stats(env__$1,input_data,result__$1)], 0));
} else {
return G__158797;
}
})());
})(),(function (___56266__auto__){
return promesa.protocols._promise(result__$1);
}));
}));
}));
}));
});
/**
 * This function evaluates the resolver associated with the node.
 * 
 *   First it checks if the expected results from the resolver are already available. In
 *   case they are, the resolver call is skipped.
 */
com.wsscode.pathom3.connect.runner.async.run_resolver_node_BANG_ = (function com$wsscode$pathom3$connect$runner$async$run_resolver_node_BANG_(env,node){
if(com.wsscode.pathom3.connect.runner.all_requires_ready_QMARK_(env,node)){
return com.wsscode.pathom3.connect.runner.async.run_next_node_BANG_(env,node);
} else {
return promesa.protocols._bind(null,(function (___56277__auto__){
return promesa.protocols._bind(com.wsscode.pathom3.connect.runner.merge_node_stats_BANG_(env,node,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","node-run-start-ms","com.wsscode.pathom3.connect.runner/node-run-start-ms",-2130582528),com.wsscode.misc.time.now_ms()], null)),(function (_){
return promesa.protocols._bind(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","node","com.wsscode.pathom3.connect.planner/node",325156565),node),(function (env_SINGLEQUOTE_){
return promesa.protocols._bind(com.wsscode.pathom3.plugin.run_with_plugins.cljs$core$IFn$_invoke$arity$5(env_SINGLEQUOTE_,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","wrap-resolve","com.wsscode.pathom3.connect.runner/wrap-resolve",-1315168003),com.wsscode.pathom3.connect.runner.async.invoke_resolver_from_node,env_SINGLEQUOTE_,node),(function (p__158825){
var map__158826 = p__158825;
var map__158826__$1 = cljs.core.__destructure_map(map__158826);
var response = map__158826__$1;
var batch_hold = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__158826__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","batch-hold","com.wsscode.pathom3.connect.runner/batch-hold",-364021743));
return promesa.protocols._bind(null,(function (___56267__auto__){
return promesa.protocols._promise((cljs.core.truth_(batch_hold)?response:(((!(com.wsscode.misc.refs.kw_identical_QMARK_(new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","node-error","com.wsscode.pathom3.connect.runner/node-error",890120380),response))))?promesa.protocols._bind(null,(function (___56267__auto____$1){
return promesa.protocols._bind(com.wsscode.pathom3.connect.runner.async.merge_resolver_response_BANG_(env,response),(function (___56266__auto__){
return promesa.protocols._bind(com.wsscode.pathom3.connect.runner.merge_node_stats_BANG_(env,node,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","node-run-finish-ms","com.wsscode.pathom3.connect.runner/node-run-finish-ms",1292429944),com.wsscode.misc.time.now_ms()], null)),(function (___56266__auto____$1){
return promesa.protocols._promise(com.wsscode.pathom3.connect.runner.async.run_next_node_BANG_(env,node));
}));
}));
})):(function (){
com.wsscode.pathom3.connect.runner.merge_node_stats_BANG_(env,node,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","node-run-finish-ms","com.wsscode.pathom3.connect.runner/node-run-finish-ms",1292429944),com.wsscode.misc.time.now_ms()], null));

return null;
})()

)));
}));
}));
}));
}));
}));
}
});
com.wsscode.pathom3.connect.runner.async.run_or_node_BANG__STAR_ = (function com$wsscode$pathom3$connect$runner$async$run_or_node_BANG__STAR_(p__158838,or_node,nodes){
var map__158847 = p__158838;
var map__158847__$1 = cljs.core.__destructure_map(map__158847);
var env = map__158847__$1;
var graph = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__158847__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","graph","com.wsscode.pathom3.connect.planner/graph",-1915509744));
var choose_path = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__158847__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","choose-path","com.wsscode.pathom3.connect.runner/choose-path",-251774625),com.wsscode.pathom3.connect.runner.default_choose_path);
if(cljs.core.seq(nodes)){
return promesa.protocols._bind(null,(function (___56277__auto__){
return promesa.protocols._bind((choose_path.cljs$core$IFn$_invoke$arity$3 ? choose_path.cljs$core$IFn$_invoke$arity$3(env,or_node,nodes) : choose_path.call(null,env,or_node,nodes)),(function (picked_node_id){
return promesa.protocols._bind(((cljs.core.contains_QMARK_(nodes,picked_node_id))?picked_node_id:(function (){
com.wsscode.log.log_event(com.wsscode.log._STAR_active_logger_STAR_,com.wsscode.log.make_event(new cljs.core.Keyword("com.wsscode.log","level-warn","com.wsscode.log/level-warn",312686542),new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","event-invalid-chosen-path","com.wsscode.pathom3.connect.runner/event-invalid-chosen-path",646160441),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"expected-one-of","expected-one-of",2046658893),nodes,new cljs.core.Keyword(null,"chosen-attempt","chosen-attempt",-1651171103),picked_node_id,new cljs.core.Keyword(null,"actual-used","actual-used",-2136040608),cljs.core.first(nodes)], null)));

return cljs.core.first(nodes);
})()
),(function (node_id){
return promesa.protocols._bind(com.wsscode.pathom3.connect.runner.add_taken_path_BANG_(env,or_node,node_id),(function (_){
return promesa.protocols._bind((function (){var G__158853 = env;
var G__158854 = com.wsscode.pathom3.connect.planner.get_node.cljs$core$IFn$_invoke$arity$2(graph,node_id);
return (com.wsscode.pathom3.connect.runner.async.run_node_BANG_.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom3.connect.runner.async.run_node_BANG_.cljs$core$IFn$_invoke$arity$2(G__158853,G__158854) : com.wsscode.pathom3.connect.runner.async.run_node_BANG_.call(null,G__158853,G__158854));
})(),(function (node_res){
return promesa.protocols._bind(null,(function (___56267__auto__){
return promesa.protocols._promise((cljs.core.truth_(new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","batch-hold","com.wsscode.pathom3.connect.runner/batch-hold",-364021743).cljs$core$IFn$_invoke$arity$1(node_res))?node_res:((com.wsscode.pathom3.connect.runner.all_requires_ready_QMARK_(env,or_node))?com.wsscode.pathom3.connect.runner.merge_node_stats_BANG_(env,or_node,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","success-path","com.wsscode.pathom3.connect.runner/success-path",1003623091),node_id], null)):(function (){var G__158869 = env;
var G__158870 = or_node;
var G__158871 = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(nodes,node_id);
return (com.wsscode.pathom3.connect.runner.async.run_or_node_BANG__STAR_.cljs$core$IFn$_invoke$arity$3 ? com.wsscode.pathom3.connect.runner.async.run_or_node_BANG__STAR_.cljs$core$IFn$_invoke$arity$3(G__158869,G__158870,G__158871) : com.wsscode.pathom3.connect.runner.async.run_or_node_BANG__STAR_.call(null,G__158869,G__158870,G__158871));
})())));
}));
}));
}));
}));
}));
}));
} else {
return null;
}
});
com.wsscode.pathom3.connect.runner.async.run_or_node_BANG_ = (function com$wsscode$pathom3$connect$runner$async$run_or_node_BANG_(env,p__158891){
var map__158892 = p__158891;
var map__158892__$1 = cljs.core.__destructure_map(map__158892);
var or_node = map__158892__$1;
var run_or = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__158892__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","run-or","com.wsscode.pathom3.connect.planner/run-or",-672801891));
return promesa.protocols._bind(null,(function (___56267__auto__){
return promesa.protocols._bind(com.wsscode.pathom3.connect.runner.merge_node_stats_BANG_(env,or_node,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","node-run-start-ms","com.wsscode.pathom3.connect.runner/node-run-start-ms",-2130582528),com.wsscode.misc.time.now_ms()], null)),(function (___56266__auto__){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___56277__auto__){
return promesa.protocols._bind(com.wsscode.pathom3.connect.runner.async.run_or_node_BANG__STAR_(env,or_node,run_or),(function (res){
return promesa.protocols._bind(null,(function (___56267__auto____$1){
return promesa.protocols._promise((cljs.core.truth_(new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","batch-hold","com.wsscode.pathom3.connect.runner/batch-hold",-364021743).cljs$core$IFn$_invoke$arity$1(res))?res:(function (){
com.wsscode.pathom3.connect.runner.merge_node_stats_BANG_(env,or_node,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","node-run-finish-ms","com.wsscode.pathom3.connect.runner/node-run-finish-ms",1292429944),com.wsscode.misc.time.now_ms()], null));

return com.wsscode.pathom3.connect.runner.async.run_next_node_BANG_(env,or_node);
})()
));
}));
}));
})));
}));
}));
});
/**
 * Given an AND node, runs every attached node, then runs the attached next.
 */
com.wsscode.pathom3.connect.runner.async.run_and_node_BANG_ = (function com$wsscode$pathom3$connect$runner$async$run_and_node_BANG_(p__158924,p__158925){
var map__158926 = p__158924;
var map__158926__$1 = cljs.core.__destructure_map(map__158926);
var env = map__158926__$1;
var graph = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__158926__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","graph","com.wsscode.pathom3.connect.planner/graph",-1915509744));
var map__158927 = p__158925;
var map__158927__$1 = cljs.core.__destructure_map(map__158927);
var and_node = map__158927__$1;
var run_and = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__158927__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","run-and","com.wsscode.pathom3.connect.planner/run-and",-1356844884));
return promesa.protocols._bind(null,(function (___56267__auto__){
return promesa.protocols._bind(com.wsscode.pathom3.connect.runner.merge_node_stats_BANG_(env,and_node,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","node-run-start-ms","com.wsscode.pathom3.connect.runner/node-run-start-ms",-2130582528),com.wsscode.misc.time.now_ms()], null)),(function (___56266__auto__){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___56277__auto__){
return promesa.protocols._bind((function (){var run158938 = promesa.core._STAR_loop_run_fn_STAR_;
var deferred158937 = promesa.core.deferred();
var loop158936 = (function com$wsscode$pathom3$connect$runner$async$run_and_node_BANG__$_loop158936(params__56301__auto__){
return promesa.core.handle.cljs$core$IFn$_invoke$arity$2(promesa.core.then.cljs$core$IFn$_invoke$arity$2(promesa.core.all(params__56301__auto__),(function (p__158943){
var vec__158944 = p__158943;
var xs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__158944,(0),null);
return promesa.protocols._bind(null,(function (___56267__auto____$1){
return promesa.protocols._promise((cljs.core.truth_(xs)?promesa.protocols._bind(null,(function (___56277__auto____$1){
return promesa.protocols._bind(cljs.core.first(xs),(function (node_id){
return promesa.protocols._bind((function (){var G__158955 = env;
var G__158956 = com.wsscode.pathom3.connect.planner.get_node.cljs$core$IFn$_invoke$arity$2(graph,node_id);
return (com.wsscode.pathom3.connect.runner.async.run_node_BANG_.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom3.connect.runner.async.run_node_BANG_.cljs$core$IFn$_invoke$arity$2(G__158955,G__158956) : com.wsscode.pathom3.connect.runner.async.run_node_BANG_.call(null,G__158955,G__158956));
})(),(function (node_res){
return promesa.protocols._bind(null,(function (___56267__auto____$2){
return promesa.protocols._promise((cljs.core.truth_(new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","batch-hold","com.wsscode.pathom3.connect.runner/batch-hold",-364021743).cljs$core$IFn$_invoke$arity$1(node_res))?node_res:(new cljs.core.PersistentArrayMap(null,(2),[new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("promesa.core","recur","promesa.core/recur",100580374),new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.next(xs)], null)],null))));
}));
}));
}));
})):null));
}));
})),(function (res__56302__auto__,err__56303__auto__){
if((!((err__56303__auto__ == null)))){
return promesa.core.reject_BANG_(deferred158937,err__56303__auto__);
} else {
if(((cljs.core.map_QMARK_(res__56302__auto__)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(res__56302__auto__),new cljs.core.Keyword("promesa.core","recur","promesa.core/recur",100580374))))){
var G__158957_159008 = (function (){
return com$wsscode$pathom3$connect$runner$async$run_and_node_BANG__$_loop158936(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(res__56302__auto__));
});
(run158938.cljs$core$IFn$_invoke$arity$1 ? run158938.cljs$core$IFn$_invoke$arity$1(G__158957_159008) : run158938.call(null,G__158957_159008));

return null;
} else {
return promesa.core.resolve_BANG_.cljs$core$IFn$_invoke$arity$2(deferred158937,res__56302__auto__);

}
}
}));
});
var G__158961_159009 = (function (){
return loop158936(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [run_and], null));
});
(run158938.cljs$core$IFn$_invoke$arity$1 ? run158938.cljs$core$IFn$_invoke$arity$1(G__158961_159009) : run158938.call(null,G__158961_159009));

return deferred158937;
})(),(function (res){
return promesa.protocols._bind(null,(function (___56267__auto____$1){
return promesa.protocols._promise((cljs.core.truth_(new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","batch-hold","com.wsscode.pathom3.connect.runner/batch-hold",-364021743).cljs$core$IFn$_invoke$arity$1(res))?res:(function (){
com.wsscode.pathom3.connect.runner.merge_node_stats_BANG_(env,and_node,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","node-run-finish-ms","com.wsscode.pathom3.connect.runner/node-run-finish-ms",1292429944),com.wsscode.misc.time.now_ms()], null));

return com.wsscode.pathom3.connect.runner.async.run_next_node_BANG_(env,and_node);
})()
));
}));
}));
})));
}));
}));
});
/**
 * Run a node from the compute graph. This will start the processing on the sent node
 *   and them will run everything that's connected to this node as sequences of it.
 * 
 *   The result is going to build up at ::p.ent/cache-tree*, after the run is concluded
 *   the output will be there.
 */
com.wsscode.pathom3.connect.runner.async.run_node_BANG_ = (function com$wsscode$pathom3$connect$runner$async$run_node_BANG_(env,node){
var G__158966 = com.wsscode.pathom3.connect.planner.node_kind(node);
var G__158966__$1 = (((G__158966 instanceof cljs.core.Keyword))?G__158966.fqn:null);
switch (G__158966__$1) {
case "com.wsscode.pathom3.connect.planner/node-resolver":
return com.wsscode.pathom3.connect.runner.async.run_resolver_node_BANG_(env,node);

break;
case "com.wsscode.pathom3.connect.planner/node-and":
return com.wsscode.pathom3.connect.runner.async.run_and_node_BANG_(env,node);

break;
case "com.wsscode.pathom3.connect.planner/node-or":
return com.wsscode.pathom3.connect.runner.async.run_or_node_BANG_(env,node);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__158966__$1)].join('')));

}
});
/**
 * Run mutation from AST.
 */
com.wsscode.pathom3.connect.runner.async.invoke_mutation_BANG_ = (function com$wsscode$pathom3$connect$runner$async$invoke_mutation_BANG_(env,p__158971){
var map__158972 = p__158971;
var map__158972__$1 = cljs.core.__destructure_map(map__158972);
var ast = map__158972__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__158972__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
return promesa.protocols._bind(null,(function (___56277__auto__){
return promesa.protocols._bind(com.wsscode.pathom3.connect.indexes.mutation(env,key),(function (mutation){
return promesa.protocols._bind(com.wsscode.misc.time.now_ms(),(function (start){
return promesa.protocols._bind(com.wsscode.pathom3.connect.runner.merge_mutation_stats_BANG_(env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","op-name","com.wsscode.pathom3.connect.operation/op-name",-1249801049),key], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","node-run-start-ms","com.wsscode.pathom3.connect.runner/node-run-start-ms",-2130582528),start,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","mutation-run-start-ms","com.wsscode.pathom3.connect.runner/mutation-run-start-ms",2017573501),start], null)),(function (_){
return promesa.protocols._bind(promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._bind(null,(function (___56267__auto__){
return promesa.protocols._promise((cljs.core.truth_(mutation)?com.wsscode.pathom3.plugin.run_with_plugins.cljs$core$IFn$_invoke$arity$5(env,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","wrap-mutate","com.wsscode.pathom3.connect.runner/wrap-mutate",-1277033248),(function (p1__158969_SHARP_,p2__158970_SHARP_){
return com.wsscode.pathom3.connect.operation.protocols._mutate(mutation,p1__158969_SHARP_,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(p2__158970_SHARP_));
}),env,ast):(function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Mutation not found",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","op-name","com.wsscode.pathom3.connect.operation/op-name",-1249801049),key], null))})()));
})),(function (e){
com.wsscode.pathom3.plugin.run_with_plugins.cljs$core$IFn$_invoke$arity$6(env,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","wrap-mutation-error","com.wsscode.pathom3.connect.runner/wrap-mutation-error",-1155458602),(function (___$1,___$2,___$3){
return null;
}),env,ast,e);

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","mutation-error","com.wsscode.pathom3.connect.runner/mutation-error",1516517468),e], null);
})),(function (result){
return promesa.protocols._bind(com.wsscode.pathom3.connect.runner.merge_mutation_stats_BANG_(env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","op-name","com.wsscode.pathom3.connect.operation/op-name",-1249801049),key], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","mutation-run-finish-ms","com.wsscode.pathom3.connect.runner/mutation-run-finish-ms",394220236),com.wsscode.misc.time.now_ms()], null)),(function (___$1){
return promesa.protocols._bind((cljs.core.truth_(new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","mutation-error","com.wsscode.pathom3.connect.runner/mutation-error",1516517468).cljs$core$IFn$_invoke$arity$1(result))?result:com.wsscode.pathom3.connect.runner.async.process_attr_subquery(env,cljs.core.PersistentArrayMap.EMPTY,key,result)),(function (result_SINGLEQUOTE_){
return promesa.protocols._bind(null,(function (___56267__auto__){
return promesa.protocols._bind(com.wsscode.pathom3.entity_tree.swap_entity_BANG_.cljs$core$IFn$_invoke$arity$4(env,cljs.core.assoc,key,result_SINGLEQUOTE_),(function (___56266__auto__){
return promesa.protocols._bind(com.wsscode.pathom3.connect.runner.merge_mutation_stats_BANG_(env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","op-name","com.wsscode.pathom3.connect.operation/op-name",-1249801049),key], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","node-run-finish-ms","com.wsscode.pathom3.connect.runner/node-run-finish-ms",1292429944),com.wsscode.misc.time.now_ms()], null)),(function (___56266__auto____$1){
return promesa.protocols._promise(result);
}));
}));
}));
}));
}));
}));
}));
}));
}));
}));
});
/**
 * Runs the mutations gathered by the planner.
 */
com.wsscode.pathom3.connect.runner.async.process_mutations_BANG_ = (function com$wsscode$pathom3$connect$runner$async$process_mutations_BANG_(p__158974){
var map__158975 = p__158974;
var map__158975__$1 = cljs.core.__destructure_map(map__158975);
var env = map__158975__$1;
var graph = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__158975__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","graph","com.wsscode.pathom3.connect.planner/graph",-1915509744));
return com.wsscode.pathom3.connect.runner.async.reduce_async((function (_,key){
return com.wsscode.pathom3.connect.runner.async.invoke_mutation_BANG_(env,com.wsscode.pathom3.connect.runner.entry_ast(graph,key));
}),null,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","mutations","com.wsscode.pathom3.connect.planner/mutations",-1571107042).cljs$core$IFn$_invoke$arity$1(graph));
});
com.wsscode.pathom3.connect.runner.async.run_root_node_BANG_ = (function com$wsscode$pathom3$connect$runner$async$run_root_node_BANG_(p__158976){
var map__158977 = p__158976;
var map__158977__$1 = cljs.core.__destructure_map(map__158977);
var env = map__158977__$1;
var graph = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__158977__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","graph","com.wsscode.pathom3.connect.planner/graph",-1915509744));
var temp__5751__auto__ = com.wsscode.pathom3.connect.planner.get_root_node(graph);
if(cljs.core.truth_(temp__5751__auto__)){
var root = temp__5751__auto__;
return promesa.protocols._bind(null,(function (___56277__auto__){
return promesa.protocols._bind(com.wsscode.pathom3.connect.runner.async.run_node_BANG_(env,root),(function (p__158978){
var map__158979 = p__158978;
var map__158979__$1 = cljs.core.__destructure_map(map__158979);
var batch_hold = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__158979__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","batch-hold","com.wsscode.pathom3.connect.runner/batch-hold",-364021743));
return promesa.protocols._bind(null,(function (___56267__auto__){
return promesa.protocols._promise((cljs.core.truth_(batch_hold)?(cljs.core.truth_(new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","nested-waiting?","com.wsscode.pathom3.connect.runner/nested-waiting?",820889396).cljs$core$IFn$_invoke$arity$1(batch_hold))?com.wsscode.misc.refs.gswap_BANG_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","batch-waiting*","com.wsscode.pathom3.connect.runner/batch-waiting*",-950834195).cljs$core$IFn$_invoke$arity$1(env),com.wsscode.misc.coll.vconj,batch_hold):com.wsscode.misc.refs.gswap_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","batch-pending*","com.wsscode.pathom3.connect.runner/batch-pending*",898520706).cljs$core$IFn$_invoke$arity$1(env),cljs.core.update,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","op-name","com.wsscode.pathom3.connect.operation/op-name",-1249801049).cljs$core$IFn$_invoke$arity$1(batch_hold),com.wsscode.misc.coll.vconj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([batch_hold], 0))):null));
}));
}));
}));
} else {
return null;
}
});
/**
 * Run the root node of the graph. As resolvers run, the result will be add to the
 *   entity cache tree.
 */
com.wsscode.pathom3.connect.runner.async.run_graph_BANG__STAR_ = (function com$wsscode$pathom3$connect$runner$async$run_graph_BANG__STAR_(p__158980){
var map__158981 = p__158980;
var map__158981__$1 = cljs.core.__destructure_map(map__158981);
var env = map__158981__$1;
var graph = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__158981__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","graph","com.wsscode.pathom3.connect.planner/graph",-1915509744));
var source_ent = com.wsscode.pathom3.entity_tree.entity(env);
return promesa.protocols._bind(null,(function (___56267__auto__){
return promesa.protocols._bind(com.wsscode.pathom3.connect.runner.async.process_mutations_BANG_(env),(function (___56266__auto__){
return promesa.protocols._bind((function (){var temp__5751__auto__ = new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","nested-process","com.wsscode.pathom3.connect.planner/nested-process",-35632382).cljs$core$IFn$_invoke$arity$1(graph);
if(cljs.core.truth_(temp__5751__auto__)){
var nested = temp__5751__auto__;
return com.wsscode.pathom3.connect.runner.async.merge_resolver_response_BANG_(env,cljs.core.select_keys(com.wsscode.pathom3.entity_tree.entity(env),nested));
} else {
return null;
}
})(),(function (___56266__auto____$1){
return promesa.protocols._bind((function (){var temp__5751__auto__ = new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","idents","com.wsscode.pathom3.connect.planner/idents",-1156950100).cljs$core$IFn$_invoke$arity$1(graph);
if(cljs.core.truth_(temp__5751__auto__)){
var idents = temp__5751__auto__;
return com.wsscode.pathom3.connect.runner.async.process_idents_BANG_(env,idents);
} else {
return null;
}
})(),(function (___56266__auto____$2){
return promesa.protocols._bind(com.wsscode.pathom3.connect.runner.async.run_root_node_BANG_(env),(function (___56266__auto____$3){
return promesa.protocols._bind(com.wsscode.pathom3.connect.runner.async.merge_resolver_response_BANG_(env,com.wsscode.pathom3.connect.runner.placeholder_merge_entity(env,source_ent)),(function (___56266__auto____$4){
return promesa.protocols._promise(graph);
}));
}));
}));
}));
}));
}));
});
com.wsscode.pathom3.connect.runner.async.plan_and_run_BANG_ = (function com$wsscode$pathom3$connect$runner$async$plan_and_run_BANG_(env,ast_or_graph,entity_tree_STAR_){
var graph = (cljs.core.truth_(new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","nodes","com.wsscode.pathom3.connect.planner/nodes",873592574).cljs$core$IFn$_invoke$arity$1(ast_or_graph))?ast_or_graph:(function (){var start_plan = com.wsscode.misc.time.now_ms();
var plan = com.wsscode.pathom3.connect.planner.compute_run_graph.cljs$core$IFn$_invoke$arity$1(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(env,new cljs.core.Keyword("edn-query-language.ast","node","edn-query-language.ast/node",-1614840957),ast_or_graph,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","available-data","com.wsscode.pathom3.connect.planner/available-data",727921292),com.wsscode.pathom3.format.shape_descriptor.data__GT_shape_descriptor(cljs.core.deref(entity_tree_STAR_))], 0)));
var finish_plan = com.wsscode.misc.time.now_ms();
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(plan,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","compute-plan-run-start-ms","com.wsscode.pathom3.connect.runner/compute-plan-run-start-ms",1143271592),start_plan,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","compute-plan-run-finish-ms","com.wsscode.pathom3.connect.runner/compute-plan-run-finish-ms",-1603607227),finish_plan], 0));
})());
return com.wsscode.pathom3.connect.runner.async.run_graph_BANG__STAR_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(env,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","graph","com.wsscode.pathom3.connect.planner/graph",-1915509744),graph,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom3.entity-tree","entity-tree*","com.wsscode.pathom3.entity-tree/entity-tree*",1259415691),entity_tree_STAR_], 0)));
});
com.wsscode.pathom3.connect.runner.async.run_batches_pending_BANG_ = (function com$wsscode$pathom3$connect$runner$async$run_batches_pending_BANG_(env){
var batches_STAR_ = new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","batch-pending*","com.wsscode.pathom3.connect.runner/batch-pending*",898520706).cljs$core$IFn$_invoke$arity$1(env);
var batches = cljs.core.deref(batches_STAR_);
cljs.core.reset_BANG_(batches_STAR_,cljs.core.PersistentArrayMap.EMPTY);

return com.wsscode.pathom3.connect.runner.async.reduce_async((function (_,p__158983){
var vec__158984 = p__158983;
var batch_op = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__158984,(0),null);
var batch_items = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__158984,(1),null);
return promesa.protocols._bind(null,(function (___56277__auto__){
return promesa.protocols._bind(cljs.core.group_by(new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","node-resolver-input","com.wsscode.pathom3.connect.runner/node-resolver-input",-1558799633),batch_items),(function (input_groups){
return promesa.protocols._bind(cljs.core.keys(input_groups),(function (inputs){
return promesa.protocols._bind(com.wsscode.pathom3.connect.indexes.resolver(env,batch_op),(function (resolver){
return promesa.protocols._bind(com.wsscode.misc.coll.update_if.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","env","com.wsscode.pathom3.connect.runner/env",-1421599428).cljs$core$IFn$_invoke$arity$1(cljs.core.first(batch_items)),new cljs.core.Keyword("com.wsscode.pathom3.path","path","com.wsscode.pathom3.path/path",1029673558),(function (p1__158982_SHARP_){
var G__158987 = p1__158982_SHARP_;
if(cljs.core.seq(p1__158982_SHARP_)){
return cljs.core.pop(G__158987);
} else {
return G__158987;
}
})),(function (batch_env){
return promesa.protocols._bind(com.wsscode.misc.time.now_ms(),(function (start){
return promesa.protocols._bind(promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom3.connect.operation.protocols._resolve(resolver,batch_env,inputs),(function (e){
return com.wsscode.pathom3.connect.runner.mark_batch_errors(e,env,batch_op,batch_items);
})),(function (responses){
return promesa.protocols._bind(com.wsscode.misc.time.now_ms(),(function (finish){
return promesa.protocols._bind(null,(function (___56267__auto__){
return promesa.protocols._promise(((com.wsscode.misc.refs.kw_identical_QMARK_(new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","node-error","com.wsscode.pathom3.connect.runner/node-error",890120380),responses))?null:(function (){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(inputs),cljs.core.count(responses))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Batch results must be a sequence and have the same length as the inputs.",cljs.core.PersistentArrayMap.EMPTY);
} else {
}

return com.wsscode.pathom3.connect.runner.async.reduce_async((function (___$1,p__158988){
var vec__158989 = p__158988;
var map__158992 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__158989,(0),null);
var map__158992__$1 = cljs.core.__destructure_map(map__158992);
var batch_item = map__158992__$1;
var env_SINGLEQUOTE_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__158992__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","env","com.wsscode.pathom3.connect.runner/env",-1421599428));
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__158992__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","node","com.wsscode.pathom3.connect.planner/node",325156565));
var node_resolver_input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__158992__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","node-resolver-input","com.wsscode.pathom3.connect.runner/node-resolver-input",-1558799633));
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__158989,(1),null);
com.wsscode.pathom3.connect.runner.cache_batch_item(batch_item,batch_op,response);

com.wsscode.pathom3.connect.runner.merge_node_stats_BANG_(env_SINGLEQUOTE_,node,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","batch-run-start-ms","com.wsscode.pathom3.connect.runner/batch-run-start-ms",-1710202816),start,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","batch-run-finish-ms","com.wsscode.pathom3.connect.runner/batch-run-finish-ms",-1912626285),finish], null),com.wsscode.pathom3.connect.runner.report_resolver_io_stats(env_SINGLEQUOTE_,node_resolver_input,response)], 0)));

return promesa.protocols._bind(null,(function (___56267__auto____$1){
return promesa.protocols._bind(com.wsscode.pathom3.connect.runner.async.merge_resolver_response_BANG_(env_SINGLEQUOTE_,response),(function (___56266__auto__){
return promesa.protocols._bind(com.wsscode.pathom3.connect.runner.merge_node_stats_BANG_(env_SINGLEQUOTE_,node,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","node-run-finish-ms","com.wsscode.pathom3.connect.runner/node-run-finish-ms",1292429944),com.wsscode.misc.time.now_ms()], null)),(function (___56266__auto____$1){
return promesa.protocols._bind(com.wsscode.pathom3.connect.runner.async.run_root_node_BANG_(env_SINGLEQUOTE_),(function (___56266__auto____$2){
return promesa.protocols._promise(com.wsscode.pathom3.connect.runner.merge_entity_to_root_data(env,env_SINGLEQUOTE_,node));
}));
}));
}));
}));
}),null,com.wsscode.pathom3.connect.runner.combine_inputs_with_responses(input_groups,inputs,responses));
})()
));
}));
}));
}));
}));
}));
}));
}));
}));
}));
}),null,batches);
});
com.wsscode.pathom3.connect.runner.async.run_batches_waiting_BANG_ = (function com$wsscode$pathom3$connect$runner$async$run_batches_waiting_BANG_(env){
var waits_STAR_ = new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","batch-waiting*","com.wsscode.pathom3.connect.runner/batch-waiting*",-950834195).cljs$core$IFn$_invoke$arity$1(env);
var waits = cljs.core.deref(waits_STAR_);
cljs.core.reset_BANG_(waits_STAR_,cljs.core.PersistentVector.EMPTY);

return com.wsscode.pathom3.connect.runner.async.reduce_async((function (_,p__158993){
var map__158994 = p__158993;
var map__158994__$1 = cljs.core.__destructure_map(map__158994);
var env_SINGLEQUOTE_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__158994__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","env","com.wsscode.pathom3.connect.runner/env",-1421599428));
com.wsscode.pathom3.entity_tree.reset_entity_BANG_(env_SINGLEQUOTE_,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom3.entity_tree.entity(env),new cljs.core.Keyword("com.wsscode.pathom3.path","path","com.wsscode.pathom3.path/path",1029673558).cljs$core$IFn$_invoke$arity$1(env_SINGLEQUOTE_)));

return promesa.protocols._bind(null,(function (___56267__auto__){
return promesa.protocols._bind(com.wsscode.pathom3.connect.runner.async.run_root_node_BANG_(env_SINGLEQUOTE_),(function (___56266__auto__){
return promesa.protocols._promise(((com.wsscode.pathom3.path.root_QMARK_(env_SINGLEQUOTE_))?null:com.wsscode.pathom3.entity_tree.swap_entity_BANG_.cljs$core$IFn$_invoke$arity$4(env,cljs.core.assoc_in,new cljs.core.Keyword("com.wsscode.pathom3.path","path","com.wsscode.pathom3.path/path",1029673558).cljs$core$IFn$_invoke$arity$1(env_SINGLEQUOTE_),com.wsscode.pathom3.connect.runner.include_meta_stats(com.wsscode.pathom3.entity_tree.entity(env_SINGLEQUOTE_),env_SINGLEQUOTE_,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","graph","com.wsscode.pathom3.connect.planner/graph",-1915509744).cljs$core$IFn$_invoke$arity$1(env_SINGLEQUOTE_)))));
}));
}));
}),null,waits);
});
com.wsscode.pathom3.connect.runner.async.run_batches_BANG_ = (function com$wsscode$pathom3$connect$runner$async$run_batches_BANG_(env){
return promesa.protocols._bind(null,(function (___56267__auto__){
return promesa.protocols._bind(com.wsscode.pathom3.connect.runner.async.run_batches_pending_BANG_(env),(function (___56266__auto__){
return promesa.protocols._promise(com.wsscode.pathom3.connect.runner.async.run_batches_waiting_BANG_(env));
}));
}));
});
com.wsscode.pathom3.connect.runner.async.run_graph_impl_BANG_ = (function com$wsscode$pathom3$connect$runner$async$run_graph_impl_BANG_(env,ast_or_graph,entity_tree_STAR_){
return promesa.protocols._bind(null,(function (___56277__auto__){
return promesa.protocols._bind(com.wsscode.pathom3.connect.runner.setup_runner_env(env,entity_tree_STAR_,cljs.core.atom),(function (env__$1){
return promesa.protocols._bind(com.wsscode.pathom3.connect.runner.async.plan_and_run_BANG_(env__$1,ast_or_graph,entity_tree_STAR_),(function (plan){
return promesa.protocols._bind(null,(function (___56267__auto__){
return promesa.protocols._bind(((com.wsscode.pathom3.path.root_QMARK_(env__$1))?(function (){var run158997 = promesa.core._STAR_loop_run_fn_STAR_;
var deferred158996 = promesa.core.deferred();
var loop158995 = (function com$wsscode$pathom3$connect$runner$async$run_graph_impl_BANG__$_loop158995(params__56301__auto__){
return promesa.core.handle.cljs$core$IFn$_invoke$arity$2(promesa.core.then.cljs$core$IFn$_invoke$arity$2(promesa.core.all(params__56301__auto__),(function (p__158998){
var vec__158999 = p__158998;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__158999,(0),null);
return promesa.protocols._bind(null,(function (___56267__auto____$1){
return promesa.protocols._promise(((cljs.core.seq(cljs.core.deref(new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","batch-pending*","com.wsscode.pathom3.connect.runner/batch-pending*",898520706).cljs$core$IFn$_invoke$arity$1(env__$1))))?(new cljs.core.PersistentArrayMap(null,(2),[new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("promesa.core","recur","promesa.core/recur",100580374),new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom3.connect.runner.async.run_batches_BANG_(env__$1)], null)],null)):null));
}));
})),(function (res__56302__auto__,err__56303__auto__){
if((!((err__56303__auto__ == null)))){
return promesa.core.reject_BANG_(deferred158996,err__56303__auto__);
} else {
if(((cljs.core.map_QMARK_(res__56302__auto__)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(res__56302__auto__),new cljs.core.Keyword("promesa.core","recur","promesa.core/recur",100580374))))){
var G__159002_159018 = (function (){
return com$wsscode$pathom3$connect$runner$async$run_graph_impl_BANG__$_loop158995(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(res__56302__auto__));
});
(run158997.cljs$core$IFn$_invoke$arity$1 ? run158997.cljs$core$IFn$_invoke$arity$1(G__159002_159018) : run158997.call(null,G__159002_159018));

return null;
} else {
return promesa.core.resolve_BANG_.cljs$core$IFn$_invoke$arity$2(deferred158996,res__56302__auto__);

}
}
}));
});
var G__159003_159019 = (function (){
return loop158995(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [promesa.core.resolved(null)], null));
});
(run158997.cljs$core$IFn$_invoke$arity$1 ? run158997.cljs$core$IFn$_invoke$arity$1(G__159003_159019) : run158997.call(null,G__159003_159019));

return deferred158996;
})():null),(function (___56266__auto__){
return promesa.protocols._promise(com.wsscode.pathom3.connect.runner.include_meta_stats(com.wsscode.pathom3.entity_tree.entity(env__$1),env__$1,plan));
}));
}));
}));
}));
}));
});
/**
 * Plan and execute a request, given an environment (with indexes), the request AST
 *   and the entity-tree*.
 */
com.wsscode.pathom3.connect.runner.async.run_graph_BANG_ = (function com$wsscode$pathom3$connect$runner$async$run_graph_BANG_(env,ast_or_graph,entity_tree_STAR_){
return promesa.protocols._bind(null,(function (___56277__auto__){
return promesa.protocols._bind(env,(function (env__$1){
return promesa.protocols._bind(null,(function (___56267__auto__){
return promesa.protocols._promise(com.wsscode.pathom3.connect.runner.run_graph_with_plugins(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner.async","async-runner?","com.wsscode.pathom3.connect.runner.async/async-runner?",961718140),true),ast_or_graph,entity_tree_STAR_,com.wsscode.pathom3.connect.runner.async.run_graph_impl_BANG_));
}));
}));
}));
});

//# sourceMappingURL=com.wsscode.pathom3.connect.runner.async.js.map
