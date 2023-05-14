goog.provide('repl_tooling.editor_integration.definition');
repl_tooling.editor_integration.definition.goto_definition = (function repl_tooling$editor_integration$definition$goto_definition(state,resolver_opts){
var map__65983 = cljs.core.deref(state);
var map__65983__$1 = cljs.core.__destructure_map(map__65983);
var run_callback = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65983__$1,new cljs.core.Keyword(null,"run-callback","run-callback",-1601688857));
var map__65984 = new cljs.core.Keyword("editor","features","editor/features",1302258665).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state));
var map__65984__$1 = cljs.core.__destructure_map(map__65984);
var eql = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65984__$1,new cljs.core.Keyword(null,"eql","eql",1414892383));
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.then.cljs$core$IFn$_invoke$arity$2((function (){var G__65985 = resolver_opts;
var G__65986 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("definition","filename","definition/filename",1721264452),new cljs.core.Keyword("definition","contents","definition/contents",-151279794),new cljs.core.Keyword("definition","row","definition/row",275880138),new cljs.core.Keyword("definition","col","definition/col",-811501491)], null);
return (eql.cljs$core$IFn$_invoke$arity$2 ? eql.cljs$core$IFn$_invoke$arity$2(G__65985,G__65986) : eql.call(null,G__65985,G__65986));
})(),(function (p__65987){
var map__65988 = p__65987;
var map__65988__$1 = cljs.core.__destructure_map(map__65988);
var contents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65988__$1,new cljs.core.Keyword("definition","contents","definition/contents",-151279794));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65988__$1,new cljs.core.Keyword("definition","col","definition/col",-811501491));
var filename = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65988__$1,new cljs.core.Keyword("definition","filename","definition/filename",1721264452));
var row = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65988__$1,new cljs.core.Keyword("definition","row","definition/row",275880138));
if(cljs.core.truth_(filename)){
var G__65990 = new cljs.core.Keyword(null,"open-editor","open-editor",1337424020);
var G__65991 = (function (){var G__65992 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file-name","file-name",-1654217259),filename,new cljs.core.Keyword(null,"line","line",212345235),row], null);
var G__65992__$1 = (cljs.core.truth_(contents)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__65992,new cljs.core.Keyword(null,"contents","contents",-1567174023),new cljs.core.Keyword("text","contents","text/contents",-1566533716).cljs$core$IFn$_invoke$arity$1(contents)):G__65992);
if(cljs.core.truth_(col)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__65992__$1,new cljs.core.Keyword(null,"column","column",2078222095),col);
} else {
return G__65992__$1;
}
})();
return (run_callback.cljs$core$IFn$_invoke$arity$2 ? run_callback.cljs$core$IFn$_invoke$arity$2(G__65990,G__65991) : run_callback.call(null,G__65990,G__65991));
} else {
var G__65994 = new cljs.core.Keyword(null,"notify","notify",-1256867814);
var G__65995 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"title","title",636505583),"Could not find definition for var"], null);
return (run_callback.cljs$core$IFn$_invoke$arity$2 ? run_callback.cljs$core$IFn$_invoke$arity$2(G__65994,G__65995) : run_callback.call(null,G__65994,G__65995));
}
})),(function (){
var G__65996 = new cljs.core.Keyword(null,"notify","notify",-1256867814);
var G__65997 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"title","title",636505583),"Could not find definition for var"], null);
return (run_callback.cljs$core$IFn$_invoke$arity$2 ? run_callback.cljs$core$IFn$_invoke$arity$2(G__65996,G__65997) : run_callback.call(null,G__65996,G__65997));
}));
});
repl_tooling.editor_integration.definition.goto_current_var = (function repl_tooling$editor_integration$definition$goto_current_var(state){
return repl_tooling.editor_integration.definition.goto_definition(state,null);
});

//# sourceMappingURL=repl_tooling.editor_integration.definition.js.map
