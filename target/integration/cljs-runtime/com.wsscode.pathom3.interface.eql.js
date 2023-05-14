goog.provide('com.wsscode.pathom3.interface$.eql');
com.wsscode.pathom3.interface$.eql.process_ast_STAR_ = (function com$wsscode$pathom3$interface$eql$process_ast_STAR_(env,ast){
var ent_tree_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom3.entity-tree","entity-tree*","com.wsscode.pathom3.entity-tree/entity-tree*",1259415691),com.wsscode.pathom3.entity_tree.create_entity(cljs.core.PersistentArrayMap.EMPTY));
var result = com.wsscode.pathom3.connect.runner.run_graph_BANG_(env,ast,ent_tree_STAR_);
var _LT__GT_ = result;
return com.wsscode.pathom3.format.eql.map_select_ast(env,_LT__GT_,ast);
});
com.wsscode.pathom3.interface$.eql.process_ast = (function com$wsscode$pathom3$interface$eql$process_ast(env,ast){
return com.wsscode.pathom3.plugin.run_with_plugins.cljs$core$IFn$_invoke$arity$5(env,new cljs.core.Keyword("com.wsscode.pathom3.interface.eql","wrap-process-ast","com.wsscode.pathom3.interface.eql/wrap-process-ast",-300125751),com.wsscode.pathom3.interface$.eql.process_ast_STAR_,env,ast);
});
/**
 * Evaluate EQL expression.
 * 
 *   This interface allows you to request a specific data shape to Pathom and get
 *   the response as a map with all data combined.
 * 
 *   This is efficient for large queries, given Pathom can make a plan considering
 *   the whole request at once (different from Smart Map, which always plans for one
 *   attribute at a time).
 * 
 *   At minimum you need to build an index to use this.
 * 
 *    (p.eql/process (pci/register some-resolvers)
 *      [:eql :request])
 * 
 *   By default, processing will start with a blank entity tree. You can override this by
 *   sending an entity tree as the second argument in the 3-arity version of this fn:
 * 
 *    (p.eql/process (pci/register some-resolvers)
 *      {:eql "initial data"}
 *      [:eql :request])
 * 
 *   For more options around processing check the docs on the connect runner.
 */
com.wsscode.pathom3.interface$.eql.process = (function com$wsscode$pathom3$interface$eql$process(var_args){
var G__83702 = arguments.length;
switch (G__83702) {
case 2:
return com.wsscode.pathom3.interface$.eql.process.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.wsscode.pathom3.interface$.eql.process.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.wsscode.pathom3.interface$.eql.process.cljs$core$IFn$_invoke$arity$2 = (function (env,tx){
return com.wsscode.pathom3.interface$.eql.process_ast(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","root-query","com.wsscode.pathom3.connect.runner/root-query",1906324752),tx),edn_query_language.core.query__GT_ast(tx));
}));

(com.wsscode.pathom3.interface$.eql.process.cljs$core$IFn$_invoke$arity$3 = (function (env,entity,tx){
if(cljs.core.map_QMARK_(entity)){
} else {
throw (new Error(["Assert failed: ","Entity data must be a map.","\n","(map? entity)"].join('')));
}

return com.wsscode.pathom3.interface$.eql.process_ast(com.wsscode.pathom3.entity_tree.with_entity(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","root-query","com.wsscode.pathom3.connect.runner/root-query",1906324752),tx),entity),edn_query_language.core.query__GT_ast(tx));
}));

(com.wsscode.pathom3.interface$.eql.process.cljs$lang$maxFixedArity = 3);

/**
 * Works like process, but none of the original entity data is filtered out.
 */
com.wsscode.pathom3.interface$.eql.satisfy = (function com$wsscode$pathom3$interface$eql$satisfy(env,entity,tx){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([entity,com.wsscode.pathom3.interface$.eql.process.cljs$core$IFn$_invoke$arity$3(env,entity,tx)], 0));
});
/**
 * Normalize a remote interface input. In case of vector it makes a map. Otherwise
 *   returns as is.
 */
com.wsscode.pathom3.interface$.eql.normalize_input = (function com$wsscode$pathom3$interface$eql$normalize_input(input){
if(cljs.core.vector_QMARK_(input)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("pathom","tx","pathom/tx",1467758675),input,new cljs.core.Keyword("pathom","entity","pathom/entity",541245087),cljs.core.PersistentArrayMap.EMPTY], null);
} else {
return input;
}
});
com.wsscode.pathom3.interface$.eql.extend_env = (function com$wsscode$pathom3$interface$eql$extend_env(source_env,env_extension){
if(cljs.core.fn_QMARK_(env_extension)){
return (env_extension.cljs$core$IFn$_invoke$arity$1 ? env_extension.cljs$core$IFn$_invoke$arity$1(source_env) : env_extension.call(null,source_env));
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([source_env,env_extension], 0));
}
});
/**
 * Returns a function that wraps the environment. When exposing Pathom to some external
 *   system, this is the recommended way to do it. The format here makes your API compatible
 *   with Pathom Foreign process, which allows the integration of distributed environments.
 * 
 *   When calling the remote interface the user can send a query or a map containing the
 *   query and the initial entity data. This map is open and you can use as a way to extend
 *   the API.
 */
com.wsscode.pathom3.interface$.eql.boundary_interface = (function com$wsscode$pathom3$interface$eql$boundary_interface(env){
var env_SINGLEQUOTE_ = com.wsscode.pathom3.connect.indexes.register.cljs$core$IFn$_invoke$arity$2(env,com.wsscode.pathom3.connect.foreign.foreign_indexes_resolver);
return (function() {
var com$wsscode$pathom3$interface$eql$boundary_interface_$_boundary_interface_internal = null;
var com$wsscode$pathom3$interface$eql$boundary_interface_$_boundary_interface_internal__1 = (function (input){
return com$wsscode$pathom3$interface$eql$boundary_interface_$_boundary_interface_internal.cljs$core$IFn$_invoke$arity$2(null,input);
});
var com$wsscode$pathom3$interface$eql$boundary_interface_$_boundary_interface_internal__2 = (function (env_extension,input){
var map__83721 = com.wsscode.pathom3.interface$.eql.normalize_input(input);
var map__83721__$1 = cljs.core.__destructure_map(map__83721);
var request = map__83721__$1;
var tx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83721__$1,new cljs.core.Keyword("pathom","tx","pathom/tx",1467758675));
var entity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83721__$1,new cljs.core.Keyword("pathom","entity","pathom/entity",541245087));
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83721__$1,new cljs.core.Keyword("pathom","ast","pathom/ast",-211527857));
var env_SINGLEQUOTE___$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(com.wsscode.pathom3.interface$.eql.extend_env(env_SINGLEQUOTE_,env_extension),new cljs.core.Keyword("com.wsscode.pathom3.interface.eql","source-request","com.wsscode.pathom3.interface.eql/source-request",-2143815025),request);
var entity_SINGLEQUOTE_ = (function (){var or__4223__auto__ = entity;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
if(cljs.core.truth_(ast)){
return com.wsscode.pathom3.interface$.eql.process_ast(com.wsscode.pathom3.entity_tree.with_entity(env_SINGLEQUOTE___$1,entity_SINGLEQUOTE_),ast);
} else {
return com.wsscode.pathom3.interface$.eql.process.cljs$core$IFn$_invoke$arity$3(env_SINGLEQUOTE___$1,entity_SINGLEQUOTE_,tx);
}
});
com$wsscode$pathom3$interface$eql$boundary_interface_$_boundary_interface_internal = function(env_extension,input){
switch(arguments.length){
case 1:
return com$wsscode$pathom3$interface$eql$boundary_interface_$_boundary_interface_internal__1.call(this,env_extension);
case 2:
return com$wsscode$pathom3$interface$eql$boundary_interface_$_boundary_interface_internal__2.call(this,env_extension,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom3$interface$eql$boundary_interface_$_boundary_interface_internal.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom3$interface$eql$boundary_interface_$_boundary_interface_internal__1;
com$wsscode$pathom3$interface$eql$boundary_interface_$_boundary_interface_internal.cljs$core$IFn$_invoke$arity$2 = com$wsscode$pathom3$interface$eql$boundary_interface_$_boundary_interface_internal__2;
return com$wsscode$pathom3$interface$eql$boundary_interface_$_boundary_interface_internal;
})()
});

//# sourceMappingURL=com.wsscode.pathom3.interface.eql.js.map
