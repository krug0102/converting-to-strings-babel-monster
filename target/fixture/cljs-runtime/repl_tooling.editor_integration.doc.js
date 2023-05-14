goog.provide('repl_tooling.editor_integration.doc');
repl_tooling.editor_integration.doc.translate_to_doc = (function repl_tooling$editor_integration$doc$translate_to_doc(meta,spec_QMARK_){
return ["-------------------------\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(meta)),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(meta)),"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(meta)),"\n  ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(meta)),((cljs.core.map_QMARK_(spec_QMARK_))?(function (){var G__140535 = "\nSpec\n";
var G__140535__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(spec_QMARK_))?[G__140535,"  args: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(spec_QMARK_)], 0)),"\n"].join(''):G__140535);
var G__140535__$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(spec_QMARK_))?[G__140535__$1,"  ret: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(spec_QMARK_)], 0)),"\n"].join(''):G__140535__$1);
if(cljs.core.truth_(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(spec_QMARK_))){
return [G__140535__$2,"  fn: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(spec_QMARK_)], 0))].join('');
} else {
return G__140535__$2;
}
})():null)].join('');
});
repl_tooling.editor_integration.doc.doc_for_var = (function repl_tooling$editor_integration$doc$doc_for_var(state){
return promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("doc-for-var"),(function (id){
return promesa.protocols._bind(cljs.core.deref(state),(function (p__140544){
var map__140546 = p__140544;
var map__140546__$1 = cljs.core.__destructure_map(map__140546);
var run_feature = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__140546__$1,new cljs.core.Keyword(null,"run-feature","run-feature",-606861678));
var run_callback = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__140546__$1,new cljs.core.Keyword(null,"run-callback","run-callback",-1601688857));
return promesa.protocols._bind((function (){var G__140548 = new cljs.core.Keyword(null,"eql","eql",1414892383);
var G__140549 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","data","editor/data",-1539989548),new cljs.core.Keyword("text","current-var","text/current-var",1432933099)], null);
return (run_feature.cljs$core$IFn$_invoke$arity$2 ? run_feature.cljs$core$IFn$_invoke$arity$2(G__140548,G__140549) : run_feature.call(null,G__140548,G__140549));
})(),(function (seed){
return promesa.protocols._bind(seed,(function (p__140552){
var map__140553 = p__140552;
var map__140553__$1 = cljs.core.__destructure_map(map__140553);
var current_var = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__140553__$1,new cljs.core.Keyword("editor","current-var","editor/current-var",1738979243));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__140553__$1,new cljs.core.Keyword("editor","data","editor/data",-1539989548));
return promesa.protocols._bind(new cljs.core.Keyword("text","range","text/range",1644551777).cljs$core$IFn$_invoke$arity$2(current_var,new cljs.core.Keyword(null,"range","range",1639692286).cljs$core$IFn$_invoke$arity$1(data)),(function (current_range){
return promesa.protocols._bind((function (){var G__140554 = new cljs.core.Keyword(null,"on-start-eval","on-start-eval",-560475418);
var G__140555 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"editor-data","editor-data",-2084300305),data,new cljs.core.Keyword(null,"range","range",1639692286),current_range], null);
return (run_callback.cljs$core$IFn$_invoke$arity$2 ? run_callback.cljs$core$IFn$_invoke$arity$2(G__140554,G__140555) : run_callback.call(null,G__140554,G__140555));
})(),(function (_){
return promesa.protocols._bind((function (){var G__140556 = new cljs.core.Keyword(null,"eql","eql",1414892383);
var G__140557 = seed;
var G__140558 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("render","doc","render/doc",-2108271987)], null);
return (run_feature.cljs$core$IFn$_invoke$arity$3 ? run_feature.cljs$core$IFn$_invoke$arity$3(G__140556,G__140557,G__140558) : run_feature.call(null,G__140556,G__140557,G__140558));
})(),(function (res){
return promesa.protocols._bind((function (){var temp__5751__auto__ = new cljs.core.Keyword("render","doc","render/doc",-2108271987).cljs$core$IFn$_invoke$arity$1(res);
if(cljs.core.truth_(temp__5751__auto__)){
var doc = temp__5751__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",1415092211),(new repl_tooling.editor_helpers.Interactive(doc))], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),(new repl_tooling.editor_helpers.LiteralRender("Can't find doc for this variable"))], null);
}
})(),(function (doc){
return promesa.protocols._bind(null,(function (___31810__auto__){
return promesa.protocols._promise((function (){var G__140563 = new cljs.core.Keyword(null,"on-eval","on-eval",-1349336659);
var G__140564 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"repl","repl",-35398667),null,new cljs.core.Keyword(null,"result","result",1415092211),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(doc,new cljs.core.Keyword(null,"parsed?","parsed?",44224124),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"as-text","as-text",-449861067),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4223__auto__ = new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(doc);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(doc);
}
})()], 0))], 0))], 0)),new cljs.core.Keyword(null,"editor-data","editor-data",-2084300305),data,new cljs.core.Keyword(null,"range","range",1639692286),current_range], null);
return (run_callback.cljs$core$IFn$_invoke$arity$2 ? run_callback.cljs$core$IFn$_invoke$arity$2(G__140563,G__140564) : run_callback.call(null,G__140563,G__140564));
})());
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

//# sourceMappingURL=repl_tooling.editor_integration.doc.js.map
