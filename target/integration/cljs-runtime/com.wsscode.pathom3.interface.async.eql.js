goog.provide('com.wsscode.pathom3.interface$.async.eql');
com.wsscode.pathom3.interface$.async.eql.process_ast_STAR_ = (function com$wsscode$pathom3$interface$async$eql$process_ast_STAR_(env,ast){
return promesa.protocols._bind(null,(function (___56277__auto__){
return promesa.protocols._bind(cljs.core.get.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom3.entity-tree","entity-tree*","com.wsscode.pathom3.entity-tree/entity-tree*",1259415691),com.wsscode.pathom3.entity_tree.create_entity(cljs.core.PersistentArrayMap.EMPTY)),(function (ent_tree_STAR_){
return promesa.protocols._bind(com.wsscode.pathom3.connect.runner.async.run_graph_BANG_(env,ast,ent_tree_STAR_),(function (result){
return promesa.protocols._bind(null,(function (___56267__auto__){
return promesa.protocols._promise((function (){var _LT__GT_ = result;
return com.wsscode.pathom3.format.eql.map_select_ast(env,_LT__GT_,ast);
})());
}));
}));
}));
}));
});
com.wsscode.pathom3.interface$.async.eql.process_ast = (function com$wsscode$pathom3$interface$async$eql$process_ast(env,ast){
return promesa.protocols._bind(null,(function (___56277__auto__){
return promesa.protocols._bind(env,(function (env__$1){
return promesa.protocols._bind(null,(function (___56267__auto__){
return promesa.protocols._promise(com.wsscode.pathom3.plugin.run_with_plugins.cljs$core$IFn$_invoke$arity$5(env__$1,new cljs.core.Keyword("com.wsscode.pathom3.interface.eql","wrap-process-ast","com.wsscode.pathom3.interface.eql/wrap-process-ast",-300125751),com.wsscode.pathom3.interface$.async.eql.process_ast_STAR_,env__$1,ast));
}));
}));
}));
});
/**
 * Evaluate EQL expression using async runner.
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
com.wsscode.pathom3.interface$.async.eql.process = (function com$wsscode$pathom3$interface$async$eql$process(var_args){
var G__83967 = arguments.length;
switch (G__83967) {
case 2:
return com.wsscode.pathom3.interface$.async.eql.process.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.wsscode.pathom3.interface$.async.eql.process.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.wsscode.pathom3.interface$.async.eql.process.cljs$core$IFn$_invoke$arity$2 = (function (env,tx){
return promesa.protocols._bind(null,(function (___56277__auto__){
return promesa.protocols._bind(env,(function (env__$1){
return promesa.protocols._bind(null,(function (___56267__auto__){
return promesa.protocols._promise(com.wsscode.pathom3.interface$.async.eql.process_ast(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","root-query","com.wsscode.pathom3.connect.runner/root-query",1906324752),tx),edn_query_language.core.query__GT_ast(tx)));
}));
}));
}));
}));

(com.wsscode.pathom3.interface$.async.eql.process.cljs$core$IFn$_invoke$arity$3 = (function (env,entity,tx){
if(cljs.core.map_QMARK_(entity)){
} else {
throw (new Error(["Assert failed: ","Entity data must be a map.","\n","(map? entity)"].join('')));
}

return promesa.protocols._bind(null,(function (___56277__auto__){
return promesa.protocols._bind(env,(function (env__$1){
return promesa.protocols._bind(null,(function (___56267__auto__){
return promesa.protocols._promise(com.wsscode.pathom3.interface$.async.eql.process_ast(com.wsscode.pathom3.entity_tree.with_entity(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","root-query","com.wsscode.pathom3.connect.runner/root-query",1906324752),tx),entity),edn_query_language.core.query__GT_ast(tx)));
}));
}));
}));
}));

(com.wsscode.pathom3.interface$.async.eql.process.cljs$lang$maxFixedArity = 3);

/**
 * Returns a function that wraps the environment. When exposing Pathom to some external
 *   system, this is the recommended way to do it. The format here makes your API compatible
 *   with Pathom Foreign process, which allows the integration of distributed environments.
 * 
 *   When calling the remote interface the user can send a query or a map containing the
 *   query and the initial entity data. This map is open and you can use as a way to extend
 *   the API.
 */
com.wsscode.pathom3.interface$.async.eql.boundary_interface = (function com$wsscode$pathom3$interface$async$eql$boundary_interface(env){
var env_SINGLEQUOTE_ = promesa.protocols._bind(null,(function (___56277__auto__){
return promesa.protocols._bind(env,(function (env__$1){
return promesa.protocols._bind(null,(function (___56267__auto__){
return promesa.protocols._promise(com.wsscode.pathom3.connect.indexes.register.cljs$core$IFn$_invoke$arity$2(env__$1,com.wsscode.pathom3.connect.foreign.foreign_indexes_resolver));
}));
}));
}));
return (function() {
var com$wsscode$pathom3$interface$async$eql$boundary_interface_$_boundary_interface_internal = null;
var com$wsscode$pathom3$interface$async$eql$boundary_interface_$_boundary_interface_internal__1 = (function (input){
return com$wsscode$pathom3$interface$async$eql$boundary_interface_$_boundary_interface_internal.cljs$core$IFn$_invoke$arity$2(null,input);
});
var com$wsscode$pathom3$interface$async$eql$boundary_interface_$_boundary_interface_internal__2 = (function (env_extension,input){
return promesa.protocols._bind(null,(function (___56277__auto__){
return promesa.protocols._bind(com.wsscode.pathom3.interface$.eql.normalize_input(input),(function (p__83968){
var map__83969 = p__83968;
var map__83969__$1 = cljs.core.__destructure_map(map__83969);
var request = map__83969__$1;
var tx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83969__$1,new cljs.core.Keyword("pathom","tx","pathom/tx",1467758675));
var entity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83969__$1,new cljs.core.Keyword("pathom","entity","pathom/entity",541245087));
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83969__$1,new cljs.core.Keyword("pathom","ast","pathom/ast",-211527857));
return promesa.protocols._bind(env_SINGLEQUOTE_,(function (env_SINGLEQUOTE___$1){
return promesa.protocols._bind(env_extension,(function (env_extension__$1){
return promesa.protocols._bind(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(com.wsscode.pathom3.interface$.eql.extend_env(env_SINGLEQUOTE___$1,env_extension__$1),new cljs.core.Keyword("com.wsscode.pathom3.interface.async.eql","source-request","com.wsscode.pathom3.interface.async.eql/source-request",416859869),request),(function (env_SINGLEQUOTE___$2){
return promesa.protocols._bind((function (){var or__4223__auto__ = entity;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (entity_SINGLEQUOTE_){
return promesa.protocols._bind(null,(function (___56267__auto__){
return promesa.protocols._promise((cljs.core.truth_(ast)?com.wsscode.pathom3.interface$.async.eql.process_ast(com.wsscode.pathom3.entity_tree.with_entity(env_SINGLEQUOTE___$2,entity_SINGLEQUOTE_),ast):com.wsscode.pathom3.interface$.async.eql.process.cljs$core$IFn$_invoke$arity$3(env_SINGLEQUOTE___$2,entity_SINGLEQUOTE_,tx)));
}));
}));
}));
}));
}));
}));
}));
});
com$wsscode$pathom3$interface$async$eql$boundary_interface_$_boundary_interface_internal = function(env_extension,input){
switch(arguments.length){
case 1:
return com$wsscode$pathom3$interface$async$eql$boundary_interface_$_boundary_interface_internal__1.call(this,env_extension);
case 2:
return com$wsscode$pathom3$interface$async$eql$boundary_interface_$_boundary_interface_internal__2.call(this,env_extension,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom3$interface$async$eql$boundary_interface_$_boundary_interface_internal.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom3$interface$async$eql$boundary_interface_$_boundary_interface_internal__1;
com$wsscode$pathom3$interface$async$eql$boundary_interface_$_boundary_interface_internal.cljs$core$IFn$_invoke$arity$2 = com$wsscode$pathom3$interface$async$eql$boundary_interface_$_boundary_interface_internal__2;
return com$wsscode$pathom3$interface$async$eql$boundary_interface_$_boundary_interface_internal;
})()
});

//# sourceMappingURL=com.wsscode.pathom3.interface.async.eql.js.map
