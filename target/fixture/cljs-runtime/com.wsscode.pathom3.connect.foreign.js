goog.provide('com.wsscode.pathom3.connect.foreign');
com.wsscode.pathom3.connect.foreign.index_query = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom3.connect.indexes","indexes","com.wsscode.pathom3.connect.indexes/indexes",-1732299100)], null);
com.wsscode.pathom3.connect.foreign.remove_internal_keys = (function com$wsscode$pathom3$connect$foreign$remove_internal_keys(m){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$1((function (p__158452){
var vec__158453 = p__158452;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__158453,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__158453,(1),null);
return clojure.string.starts_with_QMARK_((function (){var or__4223__auto__ = cljs.core.namespace(k);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return "";
}
})(),"com.wsscode.pathom");
})),m);
});
com.wsscode.pathom3.connect.foreign.compute_foreign_input = (function com$wsscode$pathom3$connect$foreign$compute_foreign_input(p__158457){
var map__158458 = p__158457;
var map__158458__$1 = cljs.core.__destructure_map(map__158458);
var env = map__158458__$1;
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__158458__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","node","com.wsscode.pathom3.connect.planner/node",325156565));
var input = new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","input","com.wsscode.pathom3.connect.planner/input",1912157524).cljs$core$IFn$_invoke$arity$1(node);
var entity = com.wsscode.pathom3.entity_tree.entity(env);
return cljs.core.select_keys(entity,cljs.core.keys(input));
});
com.wsscode.pathom3.connect.foreign.compute_foreign_query = (function com$wsscode$pathom3$connect$foreign$compute_foreign_query(p__158460){
var map__158461 = p__158460;
var map__158461__$1 = cljs.core.__destructure_map(map__158461);
var env = map__158461__$1;
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__158461__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","node","com.wsscode.pathom3.connect.planner/node",325156565));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("pathom","ast","pathom/ast",-211527857),new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","foreign-ast","com.wsscode.pathom3.connect.planner/foreign-ast",1579399548).cljs$core$IFn$_invoke$arity$1(node),new cljs.core.Keyword("pathom","entity","pathom/entity",541245087),com.wsscode.pathom3.connect.foreign.compute_foreign_input(env)], null);
});
com.wsscode.pathom3.connect.foreign.internalize_foreign_errors = (function com$wsscode$pathom3$connect$foreign$internalize_foreign_errors(p__158463,errors){
var map__158464 = p__158463;
var map__158464__$1 = cljs.core.__destructure_map(map__158464);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__158464__$1,new cljs.core.Keyword("com.wsscode.pathom3.path","path","com.wsscode.pathom3.path/path",1029673558));
var join_node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__158464__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.foreign","join-node","com.wsscode.pathom3.connect.foreign/join-node",1596326140));
return com.wsscode.misc.coll.map_keys((function (p1__158462_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.pop(path),(function (){var G__158465 = p1__158462_SHARP_;
if(cljs.core.truth_(join_node)){
return cljs.core.next(G__158465);
} else {
return G__158465;
}
})());
}),errors);
});
com.wsscode.pathom3.connect.foreign.call_foreign = (function com$wsscode$pathom3$connect$foreign$call_foreign(env,parser){
var foreign_call = com.wsscode.pathom3.connect.foreign.compute_foreign_query(env);
var response = (parser.cljs$core$IFn$_invoke$arity$1 ? parser.cljs$core$IFn$_invoke$arity$1(foreign_call) : parser.call(null,foreign_call));
return response;
});
com.wsscode.pathom3.connect.foreign.foreign_indexes_resolver = com.wsscode.pathom3.connect.operation.resolver.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol("com.wsscode.pathom3.connect.foreign","foreign-indexes-resolver","com.wsscode.pathom3.connect.foreign/foreign-indexes-resolver",707360563,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","output","com.wsscode.pathom3.connect.operation/output",801488703),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom3.connect.indexes","indexes","com.wsscode.pathom3.connect.indexes/indexes",-1732299100)], null)], null),(function com$wsscode$pathom3$connect$foreign$foreign_indexes_resolver(env,_){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom3.connect.indexes","indexes","com.wsscode.pathom3.connect.indexes/indexes",-1732299100),cljs.core.select_keys(env,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom3.connect.indexes","index-attributes","com.wsscode.pathom3.connect.indexes/index-attributes",-711449838),new cljs.core.Keyword("com.wsscode.pathom3.connect.indexes","index-oir","com.wsscode.pathom3.connect.indexes/index-oir",-418434909),new cljs.core.Keyword("com.wsscode.pathom3.connect.indexes","index-io","com.wsscode.pathom3.connect.indexes/index-io",-1535152042),new cljs.core.Keyword("com.wsscode.pathom3.connect.indexes","autocomplete-ignore","com.wsscode.pathom3.connect.indexes/autocomplete-ignore",-2025369480),new cljs.core.Keyword("com.wsscode.pathom3.connect.indexes","index-resolvers","com.wsscode.pathom3.connect.indexes/index-resolvers",-848370553),new cljs.core.Keyword("com.wsscode.pathom3.connect.indexes","index-mutations","com.wsscode.pathom3.connect.indexes/index-mutations",24467175)], null))], null);
}));
com.wsscode.pathom3.connect.foreign.remove_foreign_indexes = (function com$wsscode$pathom3$connect$foreign$remove_foreign_indexes(indexes){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(indexes,new cljs.core.Keyword("com.wsscode.pathom3.connect.indexes","index-resolvers","com.wsscode.pathom3.connect.indexes/index-resolvers",-848370553),cljs.core.dissoc,new cljs.core.Symbol("com.wsscode.pathom3.connect.foreign","foreign-indexes-resolver","com.wsscode.pathom3.connect.foreign/foreign-indexes-resolver",707360563,null)),new cljs.core.Keyword("com.wsscode.pathom3.connect.indexes","index-attributes","com.wsscode.pathom3.connect.indexes/index-attributes",-711449838),cljs.core.dissoc,new cljs.core.Keyword("com.wsscode.pathom3.connect.indexes","indexes","com.wsscode.pathom3.connect.indexes/indexes",-1732299100)),new cljs.core.Keyword("com.wsscode.pathom3.connect.indexes","index-oir","com.wsscode.pathom3.connect.indexes/index-oir",-418434909),cljs.core.dissoc,new cljs.core.Keyword("com.wsscode.pathom3.connect.indexes","indexes","com.wsscode.pathom3.connect.indexes/indexes",-1732299100)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom3.connect.indexes","index-io","com.wsscode.pathom3.connect.indexes/index-io",-1535152042),cljs.core.PersistentHashSet.EMPTY], null),cljs.core.dissoc,new cljs.core.Keyword("com.wsscode.pathom3.connect.indexes","indexes","com.wsscode.pathom3.connect.indexes/indexes",-1732299100));
});
com.wsscode.pathom3.connect.foreign.internalize_foreign_indexes = (function com$wsscode$pathom3$connect$foreign$internalize_foreign_indexes(p__158468,foreign){
var map__158469 = p__158468;
var map__158469__$1 = cljs.core.__destructure_map(map__158469);
var indexes = map__158469__$1;
var index_source_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__158469__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.indexes","index-source-id","com.wsscode.pathom3.connect.indexes/index-source-id",-190271180));
var index_source_id__$1 = (function (){var or__4223__auto__ = index_source_id;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("dynamic-parser-");
}
})();
return cljs.core.assoc_in(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc_in(cljs.core.update.cljs$core$IFn$_invoke$arity$3(com.wsscode.pathom3.connect.foreign.remove_foreign_indexes(indexes),new cljs.core.Keyword("com.wsscode.pathom3.connect.indexes","index-resolvers","com.wsscode.pathom3.connect.indexes/index-resolvers",-848370553),(function (resolvers){
return com.wsscode.misc.coll.map_vals((function (p1__158467_SHARP_){
return com.wsscode.pathom3.connect.operation.update_config.cljs$core$IFn$_invoke$arity$4(p1__158467_SHARP_,cljs.core.assoc,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","dynamic-name","com.wsscode.pathom3.connect.operation/dynamic-name",1218566238),index_source_id__$1);
}),resolvers);
})),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom3.connect.indexes","index-resolvers","com.wsscode.pathom3.connect.indexes/index-resolvers",-848370553),index_source_id__$1], null),com.wsscode.pathom3.connect.operation.resolver.cljs$core$IFn$_invoke$arity$3(index_source_id__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","cache?","com.wsscode.pathom3.connect.operation/cache?",575940493),false,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","dynamic-resolver?","com.wsscode.pathom3.connect.operation/dynamic-resolver?",868139406),true], null),(function (env,_){
return com.wsscode.pathom3.connect.foreign.call_foreign(env,foreign);
}))),new cljs.core.Keyword("com.wsscode.pathom3.connect.indexes","index-source-id","com.wsscode.pathom3.connect.indexes/index-source-id",-190271180)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom3.connect.foreign","foreign-indexes","com.wsscode.pathom3.connect.foreign/foreign-indexes",1938921194),index_source_id__$1], null),indexes);
});
com.wsscode.pathom3.connect.foreign.foreign_register = (function com$wsscode$pathom3$connect$foreign$foreign_register(foreign){
var r__82170__auto__ = (foreign.cljs$core$IFn$_invoke$arity$1 ? foreign.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom3.connect.foreign.index_query) : foreign.call(null,com.wsscode.pathom3.connect.foreign.index_query));
if(promesa.core.promise_QMARK_(r__82170__auto__)){
return promesa.core.then.cljs$core$IFn$_invoke$arity$2(r__82170__auto__,(function (p__158474){
var map__158475 = p__158474;
var map__158475__$1 = cljs.core.__destructure_map(map__158475);
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__158475__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.indexes","indexes","com.wsscode.pathom3.connect.indexes/indexes",-1732299100));
return com.wsscode.pathom3.connect.foreign.internalize_foreign_indexes(indexes,foreign);
}));
} else {
var map__158476 = r__82170__auto__;
var map__158476__$1 = cljs.core.__destructure_map(map__158476);
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__158476__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.indexes","indexes","com.wsscode.pathom3.connect.indexes/indexes",-1732299100));
return com.wsscode.pathom3.connect.foreign.internalize_foreign_indexes(indexes,foreign);
}
});

//# sourceMappingURL=com.wsscode.pathom3.connect.foreign.js.map
