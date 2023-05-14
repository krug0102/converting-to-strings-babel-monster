goog.provide('repl_tooling.editor_integration.definition');
repl_tooling.editor_integration.definition.goto_definition = (function repl_tooling$editor_integration$definition$goto_definition(state,resolver_opts){
var map__153805 = cljs.core.deref(state);
var map__153805__$1 = cljs.core.__destructure_map(map__153805);
var run_callback = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__153805__$1,new cljs.core.Keyword(null,"run-callback","run-callback",-1601688857));
var map__153806 = new cljs.core.Keyword("editor","features","editor/features",1302258665).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state));
var map__153806__$1 = cljs.core.__destructure_map(map__153806);
var eql = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__153806__$1,new cljs.core.Keyword(null,"eql","eql",1414892383));
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.then.cljs$core$IFn$_invoke$arity$2((function (){var G__153808 = resolver_opts;
var G__153809 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("definition","filename","definition/filename",1721264452),new cljs.core.Keyword("definition","contents","definition/contents",-151279794),new cljs.core.Keyword("definition","row","definition/row",275880138),new cljs.core.Keyword("definition","col","definition/col",-811501491)], null);
return (eql.cljs$core$IFn$_invoke$arity$2 ? eql.cljs$core$IFn$_invoke$arity$2(G__153808,G__153809) : eql.call(null,G__153808,G__153809));
})(),(function (p__153810){
var map__153811 = p__153810;
var map__153811__$1 = cljs.core.__destructure_map(map__153811);
var contents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__153811__$1,new cljs.core.Keyword("definition","contents","definition/contents",-151279794));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__153811__$1,new cljs.core.Keyword("definition","col","definition/col",-811501491));
var filename = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__153811__$1,new cljs.core.Keyword("definition","filename","definition/filename",1721264452));
var row = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__153811__$1,new cljs.core.Keyword("definition","row","definition/row",275880138));
if(cljs.core.truth_(filename)){
var G__153813 = new cljs.core.Keyword(null,"open-editor","open-editor",1337424020);
var G__153814 = (function (){var G__153815 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file-name","file-name",-1654217259),filename,new cljs.core.Keyword(null,"line","line",212345235),row], null);
var G__153815__$1 = (cljs.core.truth_(contents)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__153815,new cljs.core.Keyword(null,"contents","contents",-1567174023),new cljs.core.Keyword("text","contents","text/contents",-1566533716).cljs$core$IFn$_invoke$arity$1(contents)):G__153815);
if(cljs.core.truth_(col)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__153815__$1,new cljs.core.Keyword(null,"column","column",2078222095),col);
} else {
return G__153815__$1;
}
})();
return (run_callback.cljs$core$IFn$_invoke$arity$2 ? run_callback.cljs$core$IFn$_invoke$arity$2(G__153813,G__153814) : run_callback.call(null,G__153813,G__153814));
} else {
var G__153816 = new cljs.core.Keyword(null,"notify","notify",-1256867814);
var G__153817 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"title","title",636505583),"Could not find definition for var"], null);
return (run_callback.cljs$core$IFn$_invoke$arity$2 ? run_callback.cljs$core$IFn$_invoke$arity$2(G__153816,G__153817) : run_callback.call(null,G__153816,G__153817));
}
})),(function (){
var G__153818 = new cljs.core.Keyword(null,"notify","notify",-1256867814);
var G__153819 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"title","title",636505583),"Could not find definition for var"], null);
return (run_callback.cljs$core$IFn$_invoke$arity$2 ? run_callback.cljs$core$IFn$_invoke$arity$2(G__153818,G__153819) : run_callback.call(null,G__153818,G__153819));
}));
});
repl_tooling.editor_integration.definition.goto_current_var = (function repl_tooling$editor_integration$definition$goto_current_var(state){
return repl_tooling.editor_integration.definition.goto_definition(state,null);
});

//# sourceMappingURL=repl_tooling.editor_integration.definition.js.map
