goog.provide('repl_tooling.integration.clojure_ui');
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"repl_tooling.integration.clojure_ui","repl_tooling.integration.clojure_ui",-1742924779),new cljs.core.Keyword(null,"fake-editor","fake-editor",-2015963141)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"fake-editor",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof repl_tooling !== 'undefined') && (typeof repl_tooling.integration !== 'undefined') && (typeof repl_tooling.integration.clojure_ui !== 'undefined') && (typeof repl_tooling.integration.clojure_ui.t_repl_tooling$integration$clojure_ui76044 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
repl_tooling.integration.clojure_ui.t_repl_tooling$integration$clojure_ui76044 = (function (meta76045){
this.meta76045 = meta76045;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(repl_tooling.integration.clojure_ui.t_repl_tooling$integration$clojure_ui76044.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_76046,meta76045__$1){
var self__ = this;
var _76046__$1 = this;
return (new repl_tooling.integration.clojure_ui.t_repl_tooling$integration$clojure_ui76044(meta76045__$1));
}));

(repl_tooling.integration.clojure_ui.t_repl_tooling$integration$clojure_ui76044.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_76046){
var self__ = this;
var _76046__$1 = this;
return self__.meta76045;
}));

(repl_tooling.integration.clojure_ui.t_repl_tooling$integration$clojure_ui76044.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(repl_tooling.integration.clojure_ui.t_repl_tooling$integration$clojure_ui76044.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__54113__auto__,devcard_opts__54114__auto__){
var self__ = this;
var this__54113__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__54114__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__54138__auto__ = repl_tooling.integration.fake_editor.editor;
if(cljs.core.fn_QMARK_(v__54138__auto__)){
return (function (data_atom__54139__auto__,owner__54140__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__54138__auto__,data_atom__54139__auto__,owner__54140__auto__], null));
});
} else {
return reagent.core.as_element(v__54138__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__54114__auto__))], 0))], 0));
}));

(repl_tooling.integration.clojure_ui.t_repl_tooling$integration$clojure_ui76044.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta76045","meta76045",-153294888,null)], null);
}));

(repl_tooling.integration.clojure_ui.t_repl_tooling$integration$clojure_ui76044.cljs$lang$type = true);

(repl_tooling.integration.clojure_ui.t_repl_tooling$integration$clojure_ui76044.cljs$lang$ctorStr = "repl-tooling.integration.clojure-ui/t_repl_tooling$integration$clojure_ui76044");

(repl_tooling.integration.clojure_ui.t_repl_tooling$integration$clojure_ui76044.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"repl-tooling.integration.clojure-ui/t_repl_tooling$integration$clojure_ui76044");
}));

/**
 * Positional factory function for repl-tooling.integration.clojure-ui/t_repl_tooling$integration$clojure_ui76044.
 */
repl_tooling.integration.clojure_ui.__GT_t_repl_tooling$integration$clojure_ui76044 = (function repl_tooling$integration$clojure_ui$__GT_t_repl_tooling$integration$clojure_ui76044(meta76045){
return (new repl_tooling.integration.clojure_ui.t_repl_tooling$integration$clojure_ui76044(meta76045));
});

}

return (new repl_tooling.integration.clojure_ui.t_repl_tooling$integration$clojure_ui76044(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),repl_tooling.integration.fake_editor.state,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
(devcards.core.test_timeout = (20000));
repl_tooling.integration.clojure_ui.click_chevron = (function repl_tooling$integration$clojure_ui$click_chevron(n){
var temp__5753__auto__ = (document.querySelectorAll("a.chevron")[n]);
if(cljs.core.truth_(temp__5753__auto__)){
var elem = temp__5753__auto__;
elem.click();

return elem;
} else {
return null;
}
});
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"repl_tooling.integration.clojure_ui","repl_tooling.integration.clojure_ui",-1742924779),new cljs.core.Keyword(null,"repl-evaluation","repl-evaluation",-906376266)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"repl-evaluation",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){
return check.async.async_test_STAR_("Clojure REPL evaluation",(8000),(function (){
return repl_tooling.integration.fake_editor.disconnect_BANG_();
}),promesa.protocols._bind(null,(function (___31810__auto__){
return promesa.protocols._bind(repl_tooling.integration.fake_editor.connect_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"notify","notify",-1256867814),cljs.core.prn], null)),(function (___31809__auto__){
return promesa.protocols._bind(promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._bind(null,(function (___31810__auto____$1){
return promesa.protocols._bind(cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["evaluation works"], 0)),(function (___31809__auto____$1){
return promesa.protocols._bind(repl_tooling.integration.fake_editor.type_and_eval("(+ 2 3)"),(function (___31809__auto____$2){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(check.async.to_promise(repl_tooling.integration.fake_editor.change_result_p()),(function (left_76056){
return promesa.protocols._bind(check.async.to_promise("5"),(function (right_76057){
return promesa.protocols._bind(null,(function (___31810__auto____$2){
return promesa.protocols._bind(cljs.test.do_report(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var lft__35783__auto__ = left_76056;
var rgt__35784__auto__ = right_76057;
var qleft__35785__auto__ = new cljs.core.Symbol(null,"left-76056","left-76056",-436534554,null);
var qright__35786__auto__ = new cljs.core.Symbol(null,"right-76057","right-76057",-1131697497,null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})(),new cljs.core.Keyword(null,"expected","expected",1583670997),"5")),(function (___31809__auto____$3){
return promesa.protocols._promise(new cljs.core.Keyword(null,"done","done",-889844188));
}));
}));
}));
}));
})));
}));
}));
})),(function() { 
var G__78048__delegate = function (___36014__auto__){
return cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
};
var G__78048 = function (var_args){
var ___36014__auto__ = null;
if (arguments.length > 0) {
var G__78049__i = 0, G__78049__a = new Array(arguments.length -  0);
while (G__78049__i < G__78049__a.length) {G__78049__a[G__78049__i] = arguments[G__78049__i + 0]; ++G__78049__i;}
  ___36014__auto__ = new cljs.core.IndexedSeq(G__78049__a,0,null);
} 
return G__78048__delegate.call(this,___36014__auto__);};
G__78048.cljs$lang$maxFixedArity = 0;
G__78048.cljs$lang$applyTo = (function (arglist__78050){
var ___36014__auto__ = cljs.core.seq(arglist__78050);
return G__78048__delegate(___36014__auto__);
});
G__78048.cljs$core$IFn$_invoke$arity$variadic = G__78048__delegate;
return G__78048;
})()
),(function (___31809__auto____$1){
return promesa.protocols._bind(promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._bind(null,(function (___31810__auto____$1){
return promesa.protocols._bind(cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["evaluate blocks"], 0)),(function (___31809__auto____$2){
return promesa.protocols._bind(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(repl_tooling.integration.fake_editor.state,cljs.core.assoc,new cljs.core.Keyword(null,"code","code",1586293142),"(+ 1 2)\n\n(+ 2 \n  (+ 3 4))",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(3)], null)], null)], 0)),(function (___31809__auto____$3){
return promesa.protocols._bind(repl_tooling.integration.fake_editor.run_command_BANG_(new cljs.core.Keyword(null,"evaluate-block","evaluate-block",-906759120)),(function (___31809__auto____$4){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(check.async.to_promise(repl_tooling.integration.fake_editor.change_result_p()),(function (left_76059){
return promesa.protocols._bind(check.async.to_promise("7"),(function (right_76060){
return promesa.protocols._bind(null,(function (___31810__auto____$2){
return promesa.protocols._bind(cljs.test.do_report(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var lft__35783__auto__ = left_76059;
var rgt__35784__auto__ = right_76060;
var qleft__35785__auto__ = new cljs.core.Symbol(null,"left-76059","left-76059",60410277,null);
var qright__35786__auto__ = new cljs.core.Symbol(null,"right-76060","right-76060",-973938376,null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})(),new cljs.core.Keyword(null,"expected","expected",1583670997),"7")),(function (___31809__auto____$5){
return promesa.protocols._promise(new cljs.core.Keyword(null,"done","done",-889844188));
}));
}));
}));
}));
})));
}));
}));
}));
})),(function() { 
var G__78052__delegate = function (___36014__auto__){
return cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
};
var G__78052 = function (var_args){
var ___36014__auto__ = null;
if (arguments.length > 0) {
var G__78053__i = 0, G__78053__a = new Array(arguments.length -  0);
while (G__78053__i < G__78053__a.length) {G__78053__a[G__78053__i] = arguments[G__78053__i + 0]; ++G__78053__i;}
  ___36014__auto__ = new cljs.core.IndexedSeq(G__78053__a,0,null);
} 
return G__78052__delegate.call(this,___36014__auto__);};
G__78052.cljs$lang$maxFixedArity = 0;
G__78052.cljs$lang$applyTo = (function (arglist__78054){
var ___36014__auto__ = cljs.core.seq(arglist__78054);
return G__78052__delegate(___36014__auto__);
});
G__78052.cljs$core$IFn$_invoke$arity$variadic = G__78052__delegate;
return G__78052;
})()
),(function (___31809__auto____$2){
return promesa.protocols._bind(promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._bind(null,(function (___31810__auto____$1){
return promesa.protocols._bind(cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["evaluate top blocks"], 0)),(function (___31809__auto____$3){
return promesa.protocols._bind(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(repl_tooling.integration.fake_editor.state,cljs.core.assoc,new cljs.core.Keyword(null,"code","code",1586293142),"(+ 1 2)\n\n(+ 2 \n  (+ 3 4))",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(3)], null)], null)], 0)),(function (___31809__auto____$4){
return promesa.protocols._bind(repl_tooling.integration.fake_editor.run_command_BANG_(new cljs.core.Keyword(null,"evaluate-top-block","evaluate-top-block",-2034693127)),(function (___31809__auto____$5){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(check.async.to_promise(repl_tooling.integration.fake_editor.change_result_p()),(function (left_76099){
return promesa.protocols._bind(check.async.to_promise("9"),(function (right_76100){
return promesa.protocols._bind(null,(function (___31810__auto____$2){
return promesa.protocols._bind(cljs.test.do_report(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var lft__35794__auto__ = left_76099;
var rgt__35795__auto__ = right_76100;
var qleft__35796__auto__ = new cljs.core.Symbol(null,"left-76099","left-76099",-16137113,null);
var qright__35797__auto__ = new cljs.core.Symbol(null,"right-76100","right-76100",-147509172,null);
var result__35798__auto__ = expectations.compare_expr.cljs$core$IFn$_invoke$arity$4(rgt__35795__auto__,lft__35794__auto__,qright__35797__auto__,qleft__35796__auto__);
var unformatted_msg__35799__auto__ = expectations.__GT_failure_message(result__35798__auto__);
var msg__35800__auto__ = clojure.string.replace(unformatted_msg__35799__auto__,/^.*?\n/,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(qleft__35796__auto__)," => ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(qright__35797__auto__)].join(''));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(result__35798__auto__),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35797__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),qleft__35796__auto__,new cljs.core.Keyword(null,"message","message",-406056002),msg__35800__auto__], null);
})(),new cljs.core.Keyword(null,"expected","expected",1583670997),"9")),(function (___31809__auto____$6){
return promesa.protocols._promise(new cljs.core.Keyword(null,"done","done",-889844188));
}));
}));
}));
}));
})));
}));
}));
}));
})),(function() { 
var G__78058__delegate = function (___36014__auto__){
return cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
};
var G__78058 = function (var_args){
var ___36014__auto__ = null;
if (arguments.length > 0) {
var G__78059__i = 0, G__78059__a = new Array(arguments.length -  0);
while (G__78059__i < G__78059__a.length) {G__78059__a[G__78059__i] = arguments[G__78059__i + 0]; ++G__78059__i;}
  ___36014__auto__ = new cljs.core.IndexedSeq(G__78059__a,0,null);
} 
return G__78058__delegate.call(this,___36014__auto__);};
G__78058.cljs$lang$maxFixedArity = 0;
G__78058.cljs$lang$applyTo = (function (arglist__78060){
var ___36014__auto__ = cljs.core.seq(arglist__78060);
return G__78058__delegate(___36014__auto__);
});
G__78058.cljs$core$IFn$_invoke$arity$variadic = G__78058__delegate;
return G__78058;
})()
),(function (___31809__auto____$3){
return promesa.protocols._bind(promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._bind(null,(function (___31810__auto____$1){
return promesa.protocols._bind(cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["displays booleans"], 0)),(function (___31809__auto____$4){
return promesa.protocols._bind((function (){
repl_tooling.integration.fake_editor.type_and_eval("true");

return promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(repl_tooling.integration.fake_editor.change_result_p(),(function (res__71895__auto__){
return promesa.protocols._bind(null,(function (___31810__auto____$2){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto____$1){
return promesa.protocols._bind(check.async.to_promise(clojure.string.replace(res__71895__auto__,/(\n|\s+)+/," ")),(function (left_76101){
return promesa.protocols._bind(check.async.to_promise("true"),(function (right_76102){
return promesa.protocols._bind(null,(function (___31810__auto____$3){
return promesa.protocols._bind(cljs.test.do_report(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var lft__35783__auto__ = left_76101;
var rgt__35784__auto__ = right_76102;
var qleft__35785__auto__ = new cljs.core.Symbol(null,"left-76101","left-76101",-314833553,null);
var qright__35786__auto__ = new cljs.core.Symbol(null,"right-76102","right-76102",-162891070,null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})(),new cljs.core.Keyword(null,"expected","expected",1583670997),"true")),(function (___31809__auto____$5){
return promesa.protocols._promise(new cljs.core.Keyword(null,"done","done",-889844188));
}));
}));
}));
}));
})));
}));
}));
}));
})()
,(function (___31809__auto____$5){
return promesa.protocols._bind((function (){
repl_tooling.integration.fake_editor.type_and_eval("false");

return promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(repl_tooling.integration.fake_editor.change_result_p(),(function (res__71895__auto__){
return promesa.protocols._bind(null,(function (___31810__auto____$2){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto____$1){
return promesa.protocols._bind(check.async.to_promise(clojure.string.replace(res__71895__auto__,/(\n|\s+)+/," ")),(function (left_76103){
return promesa.protocols._bind(check.async.to_promise("false"),(function (right_76104){
return promesa.protocols._bind(null,(function (___31810__auto____$3){
return promesa.protocols._bind(cljs.test.do_report(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var lft__35783__auto__ = left_76103;
var rgt__35784__auto__ = right_76104;
var qleft__35785__auto__ = new cljs.core.Symbol(null,"left-76103","left-76103",-2046199952,null);
var qright__35786__auto__ = new cljs.core.Symbol(null,"right-76104","right-76104",1143330209,null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})(),new cljs.core.Keyword(null,"expected","expected",1583670997),"false")),(function (___31809__auto____$6){
return promesa.protocols._promise(new cljs.core.Keyword(null,"done","done",-889844188));
}));
}));
}));
}));
})));
}));
}));
}));
})()
,(function (___31809__auto____$6){
return promesa.protocols._promise((function (){
repl_tooling.integration.fake_editor.type_and_eval("nil");

return promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(repl_tooling.integration.fake_editor.change_result_p(),(function (res__71895__auto__){
return promesa.protocols._bind(null,(function (___31810__auto____$2){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto____$1){
return promesa.protocols._bind(check.async.to_promise(clojure.string.replace(res__71895__auto__,/(\n|\s+)+/," ")),(function (left_76164){
return promesa.protocols._bind(check.async.to_promise("nil"),(function (right_76165){
return promesa.protocols._bind(null,(function (___31810__auto____$3){
return promesa.protocols._bind(cljs.test.do_report(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var lft__35783__auto__ = left_76164;
var rgt__35784__auto__ = right_76165;
var qleft__35785__auto__ = new cljs.core.Symbol(null,"left-76164","left-76164",974113353,null);
var qright__35786__auto__ = new cljs.core.Symbol(null,"right-76165","right-76165",463285769,null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})(),new cljs.core.Keyword(null,"expected","expected",1583670997),"nil")),(function (___31809__auto____$7){
return promesa.protocols._promise(new cljs.core.Keyword(null,"done","done",-889844188));
}));
}));
}));
}));
})));
}));
}));
}));
})()
);
}));
}));
}));
})),(function() { 
var G__78071__delegate = function (___36014__auto__){
return cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
};
var G__78071 = function (var_args){
var ___36014__auto__ = null;
if (arguments.length > 0) {
var G__78072__i = 0, G__78072__a = new Array(arguments.length -  0);
while (G__78072__i < G__78072__a.length) {G__78072__a[G__78072__i] = arguments[G__78072__i + 0]; ++G__78072__i;}
  ___36014__auto__ = new cljs.core.IndexedSeq(G__78072__a,0,null);
} 
return G__78071__delegate.call(this,___36014__auto__);};
G__78071.cljs$lang$maxFixedArity = 0;
G__78071.cljs$lang$applyTo = (function (arglist__78073){
var ___36014__auto__ = cljs.core.seq(arglist__78073);
return G__78071__delegate(___36014__auto__);
});
G__78071.cljs$core$IFn$_invoke$arity$variadic = G__78071__delegate;
return G__78071;
})()
),(function (___31809__auto____$4){
return promesa.protocols._bind(promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._bind(null,(function (___31810__auto____$1){
return promesa.protocols._bind(cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["displays UUIDs"], 0)),(function (___31809__auto____$5){
return promesa.protocols._promise((function (){
repl_tooling.integration.fake_editor.type_and_eval("(java.util.UUID/fromString \"00000000-0000-0000-0000-000000000000\")");

return promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(repl_tooling.integration.fake_editor.change_result_p(),(function (res__71895__auto__){
return promesa.protocols._bind(null,(function (___31810__auto____$2){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto____$1){
return promesa.protocols._bind(check.async.to_promise(clojure.string.replace(res__71895__auto__,/(\n|\s+)+/," ")),(function (left_76166){
return promesa.protocols._bind(check.async.to_promise("#uuid \"00000000-0000-0000-0000-000000000000\""),(function (right_76167){
return promesa.protocols._bind(null,(function (___31810__auto____$3){
return promesa.protocols._bind(cljs.test.do_report(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var lft__35783__auto__ = left_76166;
var rgt__35784__auto__ = right_76167;
var qleft__35785__auto__ = new cljs.core.Symbol(null,"left-76166","left-76166",1232575563,null);
var qright__35786__auto__ = new cljs.core.Symbol(null,"right-76167","right-76167",-618036068,null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})(),new cljs.core.Keyword(null,"expected","expected",1583670997),"#uuid \"00000000-0000-0000-0000-000000000000\"")),(function (___31809__auto____$6){
return promesa.protocols._promise(new cljs.core.Keyword(null,"done","done",-889844188));
}));
}));
}));
}));
})));
}));
}));
}));
})()
);
}));
})),(function() { 
var G__78076__delegate = function (___36014__auto__){
return cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
};
var G__78076 = function (var_args){
var ___36014__auto__ = null;
if (arguments.length > 0) {
var G__78077__i = 0, G__78077__a = new Array(arguments.length -  0);
while (G__78077__i < G__78077__a.length) {G__78077__a[G__78077__i] = arguments[G__78077__i + 0]; ++G__78077__i;}
  ___36014__auto__ = new cljs.core.IndexedSeq(G__78077__a,0,null);
} 
return G__78076__delegate.call(this,___36014__auto__);};
G__78076.cljs$lang$maxFixedArity = 0;
G__78076.cljs$lang$applyTo = (function (arglist__78078){
var ___36014__auto__ = cljs.core.seq(arglist__78078);
return G__78076__delegate(___36014__auto__);
});
G__78076.cljs$core$IFn$_invoke$arity$variadic = G__78076__delegate;
return G__78076;
})()
),(function (___31809__auto____$5){
return promesa.protocols._bind(promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._bind(null,(function (___31810__auto____$1){
return promesa.protocols._bind(cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["captures STDOUT"], 0)),(function (___31809__auto____$6){
return promesa.protocols._bind(repl_tooling.integration.fake_editor.type_and_eval("(println :FOOBAR)"),(function (___31809__auto____$7){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(check.async.to_promise(repl_tooling.integration.fake_editor.change_stdout_p()),(function (left_76168){
return promesa.protocols._bind(check.async.to_promise(/:FOOBAR/),(function (right_76169){
return promesa.protocols._bind(null,(function (___31810__auto____$2){
return promesa.protocols._bind(cljs.test.do_report(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var lft__35794__auto__ = left_76168;
var rgt__35795__auto__ = right_76169;
var qleft__35796__auto__ = new cljs.core.Symbol(null,"left-76168","left-76168",-291836575,null);
var qright__35797__auto__ = new cljs.core.Symbol(null,"right-76169","right-76169",494155907,null);
var result__35798__auto__ = expectations.compare_expr.cljs$core$IFn$_invoke$arity$4(rgt__35795__auto__,lft__35794__auto__,qright__35797__auto__,qleft__35796__auto__);
var unformatted_msg__35799__auto__ = expectations.__GT_failure_message(result__35798__auto__);
var msg__35800__auto__ = clojure.string.replace(unformatted_msg__35799__auto__,/^.*?\n/,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(qleft__35796__auto__)," => ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(qright__35797__auto__)].join(''));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(result__35798__auto__),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35797__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),qleft__35796__auto__,new cljs.core.Keyword(null,"message","message",-406056002),msg__35800__auto__], null);
})(),new cljs.core.Keyword(null,"expected","expected",1583670997),/:FOOBAR/)),(function (___31809__auto____$8){
return promesa.protocols._promise(new cljs.core.Keyword(null,"done","done",-889844188));
}));
}));
}));
}));
})));
}));
}));
})),(function() { 
var G__78084__delegate = function (___36014__auto__){
return cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
};
var G__78084 = function (var_args){
var ___36014__auto__ = null;
if (arguments.length > 0) {
var G__78085__i = 0, G__78085__a = new Array(arguments.length -  0);
while (G__78085__i < G__78085__a.length) {G__78085__a[G__78085__i] = arguments[G__78085__i + 0]; ++G__78085__i;}
  ___36014__auto__ = new cljs.core.IndexedSeq(G__78085__a,0,null);
} 
return G__78084__delegate.call(this,___36014__auto__);};
G__78084.cljs$lang$maxFixedArity = 0;
G__78084.cljs$lang$applyTo = (function (arglist__78086){
var ___36014__auto__ = cljs.core.seq(arglist__78086);
return G__78084__delegate(___36014__auto__);
});
G__78084.cljs$core$IFn$_invoke$arity$variadic = G__78084__delegate;
return G__78084;
})()
),(function (___31809__auto____$6){
return promesa.protocols._bind(promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._bind(null,(function (___31810__auto____$1){
return promesa.protocols._bind(cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["captures STDERR"], 0)),(function (___31809__auto____$7){
return promesa.protocols._bind(repl_tooling.integration.fake_editor.type_and_eval("(.write *err* \"Error\")"),(function (___31809__auto____$8){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(check.async.to_promise(repl_tooling.integration.fake_editor.change_stderr_p()),(function (left_76170){
return promesa.protocols._bind(check.async.to_promise(/Error/),(function (right_76171){
return promesa.protocols._bind(null,(function (___31810__auto____$2){
return promesa.protocols._bind(cljs.test.do_report(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var lft__35794__auto__ = left_76170;
var rgt__35795__auto__ = right_76171;
var qleft__35796__auto__ = new cljs.core.Symbol(null,"left-76170","left-76170",718605248,null);
var qright__35797__auto__ = new cljs.core.Symbol(null,"right-76171","right-76171",-670806192,null);
var result__35798__auto__ = expectations.compare_expr.cljs$core$IFn$_invoke$arity$4(rgt__35795__auto__,lft__35794__auto__,qright__35797__auto__,qleft__35796__auto__);
var unformatted_msg__35799__auto__ = expectations.__GT_failure_message(result__35798__auto__);
var msg__35800__auto__ = clojure.string.replace(unformatted_msg__35799__auto__,/^.*?\n/,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(qleft__35796__auto__)," => ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(qright__35797__auto__)].join(''));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(result__35798__auto__),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35797__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),qleft__35796__auto__,new cljs.core.Keyword(null,"message","message",-406056002),msg__35800__auto__], null);
})(),new cljs.core.Keyword(null,"expected","expected",1583670997),/Error/)),(function (___31809__auto____$9){
return promesa.protocols._promise(new cljs.core.Keyword(null,"done","done",-889844188));
}));
}));
}));
}));
})));
}));
}));
})),(function() { 
var G__78090__delegate = function (___36014__auto__){
return cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
};
var G__78090 = function (var_args){
var ___36014__auto__ = null;
if (arguments.length > 0) {
var G__78091__i = 0, G__78091__a = new Array(arguments.length -  0);
while (G__78091__i < G__78091__a.length) {G__78091__a[G__78091__i] = arguments[G__78091__i + 0]; ++G__78091__i;}
  ___36014__auto__ = new cljs.core.IndexedSeq(G__78091__a,0,null);
} 
return G__78090__delegate.call(this,___36014__auto__);};
G__78090.cljs$lang$maxFixedArity = 0;
G__78090.cljs$lang$applyTo = (function (arglist__78092){
var ___36014__auto__ = cljs.core.seq(arglist__78092);
return G__78090__delegate(___36014__auto__);
});
G__78090.cljs$core$IFn$_invoke$arity$variadic = G__78090__delegate;
return G__78090;
})()
),(function (___31809__auto____$7){
return promesa.protocols._bind(promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._bind(null,(function (___31810__auto____$1){
return promesa.protocols._bind(cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["detects NS on file"], 0)),(function (___31809__auto____$8){
return promesa.protocols._promise((function (){
repl_tooling.integration.fake_editor.type_and_eval("(do (ns clojure.walk)\n(stringify-keys {:foo 10}))");

return promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(repl_tooling.integration.fake_editor.change_result_p(),(function (res__71895__auto__){
return promesa.protocols._bind(null,(function (___31810__auto____$2){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto____$1){
return promesa.protocols._bind(check.async.to_promise(clojure.string.replace(res__71895__auto__,/(\n|\s+)+/," ")),(function (left_76207){
return promesa.protocols._bind(check.async.to_promise(/\"foo\" 10/),(function (right_76208){
return promesa.protocols._bind(null,(function (___31810__auto____$3){
return promesa.protocols._bind(cljs.test.do_report(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var lft__35783__auto__ = left_76207;
var rgt__35784__auto__ = right_76208;
var qleft__35785__auto__ = new cljs.core.Symbol(null,"left-76207","left-76207",-1123042528,null);
var qright__35786__auto__ = new cljs.core.Symbol(null,"right-76208","right-76208",-1896009747,null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})(),new cljs.core.Keyword(null,"expected","expected",1583670997),/\"foo\" 10/)),(function (___31809__auto____$9){
return promesa.protocols._promise(new cljs.core.Keyword(null,"done","done",-889844188));
}));
}));
}));
}));
})));
}));
}));
}));
})()
);
}));
})),(function() { 
var G__78099__delegate = function (___36014__auto__){
return cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
};
var G__78099 = function (var_args){
var ___36014__auto__ = null;
if (arguments.length > 0) {
var G__78100__i = 0, G__78100__a = new Array(arguments.length -  0);
while (G__78100__i < G__78100__a.length) {G__78100__a[G__78100__i] = arguments[G__78100__i + 0]; ++G__78100__i;}
  ___36014__auto__ = new cljs.core.IndexedSeq(G__78100__a,0,null);
} 
return G__78099__delegate.call(this,___36014__auto__);};
G__78099.cljs$lang$maxFixedArity = 0;
G__78099.cljs$lang$applyTo = (function (arglist__78101){
var ___36014__auto__ = cljs.core.seq(arglist__78101);
return G__78099__delegate(___36014__auto__);
});
G__78099.cljs$core$IFn$_invoke$arity$variadic = G__78099__delegate;
return G__78099;
})()
),(function (___31809__auto____$8){
return promesa.protocols._bind(promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._bind(null,(function (___31810__auto____$1){
return promesa.protocols._bind(cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["evaluates and presents big strings"], 0)),(function (___31809__auto____$9){
return promesa.protocols._bind((function (){
repl_tooling.integration.fake_editor.type_and_eval("(apply str (range 100))");

return promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(repl_tooling.integration.fake_editor.change_result_p(),(function (res__71895__auto__){
return promesa.protocols._bind(null,(function (___31810__auto____$2){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto____$1){
return promesa.protocols._bind(check.async.to_promise(clojure.string.replace(res__71895__auto__,/(\n|\s+)+/," ")),(function (left_76209){
return promesa.protocols._bind(check.async.to_promise(["\"01234567891011121314151617181920212223242526272829","303132333435363738394041424344 ... \""].join('')),(function (right_76210){
return promesa.protocols._bind(null,(function (___31810__auto____$3){
return promesa.protocols._bind(cljs.test.do_report(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var lft__35783__auto__ = left_76209;
var rgt__35784__auto__ = right_76210;
var qleft__35785__auto__ = new cljs.core.Symbol(null,"left-76209","left-76209",85658833,null);
var qright__35786__auto__ = new cljs.core.Symbol(null,"right-76210","right-76210",-150241472,null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})(),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"\"01234567891011121314151617181920212223242526272829","303132333435363738394041424344 ... \""))),(function (___31809__auto____$10){
return promesa.protocols._promise(new cljs.core.Keyword(null,"done","done",-889844188));
}));
}));
}));
}));
})));
}));
}));
}));
})()
,(function (___31809__auto____$10){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31810__auto____$2){
return promesa.protocols._bind(document.querySelector("#result a:nth-child(n+1)").click(),(function (___31809__auto____$11){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(repl_tooling.integration.fake_editor.change_result_p(),(function (res__71930__auto__){
return promesa.protocols._bind(null,(function (___31810__auto____$3){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto____$1){
return promesa.protocols._bind(check.async.to_promise(clojure.string.replace(res__71930__auto__,/(\n|\s+)+/," ")),(function (left_76211){
return promesa.protocols._bind(check.async.to_promise(["\"0123456789101112131415161718192021222324252627282930313233343","536373839404142434445464748495051525354555657585960616263646566","676869707172737475767778798081828384 ... \""].join('')),(function (right_76212){
return promesa.protocols._bind(null,(function (___31810__auto____$4){
return promesa.protocols._bind(cljs.test.do_report(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var lft__35783__auto__ = left_76211;
var rgt__35784__auto__ = right_76212;
var qleft__35785__auto__ = new cljs.core.Symbol(null,"left-76211","left-76211",34131360,null);
var qright__35786__auto__ = new cljs.core.Symbol(null,"right-76212","right-76212",-1859387238,null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})(),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"\"0123456789101112131415161718192021222324252627282930313233343","536373839404142434445464748495051525354555657585960616263646566","676869707172737475767778798081828384 ... \""))),(function (___31809__auto____$12){
return promesa.protocols._promise(new cljs.core.Keyword(null,"done","done",-889844188));
}));
}));
}));
}));
})));
}));
}));
})));
}));
})));
}));
}));
})),(function() { 
var G__78171__delegate = function (___36014__auto__){
return cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
};
var G__78171 = function (var_args){
var ___36014__auto__ = null;
if (arguments.length > 0) {
var G__78172__i = 0, G__78172__a = new Array(arguments.length -  0);
while (G__78172__i < G__78172__a.length) {G__78172__a[G__78172__i] = arguments[G__78172__i + 0]; ++G__78172__i;}
  ___36014__auto__ = new cljs.core.IndexedSeq(G__78172__a,0,null);
} 
return G__78171__delegate.call(this,___36014__auto__);};
G__78171.cljs$lang$maxFixedArity = 0;
G__78171.cljs$lang$applyTo = (function (arglist__78173){
var ___36014__auto__ = cljs.core.seq(arglist__78173);
return G__78171__delegate(___36014__auto__);
});
G__78171.cljs$core$IFn$_invoke$arity$variadic = G__78171__delegate;
return G__78171;
})()
),(function (___31809__auto____$9){
return promesa.protocols._bind(promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._bind(null,(function (___31810__auto____$1){
return promesa.protocols._bind(cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["evaluates and presents big lists"], 0)),(function (___31809__auto____$10){
return promesa.protocols._bind((function (){
repl_tooling.integration.fake_editor.type_and_eval("(range)");

return promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(repl_tooling.integration.fake_editor.change_result_p(),(function (res__71895__auto__){
return promesa.protocols._bind(null,(function (___31810__auto____$2){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto____$1){
return promesa.protocols._bind(check.async.to_promise(clojure.string.replace(res__71895__auto__,/(\n|\s+)+/," ")),(function (left_76237){
return promesa.protocols._bind(check.async.to_promise("( 0 1 2 3 4 5 6 7 8 9 ... )"),(function (right_76238){
return promesa.protocols._bind(null,(function (___31810__auto____$3){
return promesa.protocols._bind(cljs.test.do_report(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var lft__35783__auto__ = left_76237;
var rgt__35784__auto__ = right_76238;
var qleft__35785__auto__ = new cljs.core.Symbol(null,"left-76237","left-76237",1057384727,null);
var qright__35786__auto__ = new cljs.core.Symbol(null,"right-76238","right-76238",1042993690,null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})(),new cljs.core.Keyword(null,"expected","expected",1583670997),"( 0 1 2 3 4 5 6 7 8 9 ... )")),(function (___31809__auto____$11){
return promesa.protocols._promise(new cljs.core.Keyword(null,"done","done",-889844188));
}));
}));
}));
}));
})));
}));
}));
}));
})()
,(function (___31809__auto____$11){
return promesa.protocols._bind(promesa.protocols._bind(null,(function (___31810__auto____$2){
return promesa.protocols._bind(document.querySelector("#result a:nth-child(n+2)").click(),(function (___31809__auto____$12){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(repl_tooling.integration.fake_editor.change_result_p(),(function (res__71930__auto__){
return promesa.protocols._bind(null,(function (___31810__auto____$3){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto____$1){
return promesa.protocols._bind(check.async.to_promise(clojure.string.replace(res__71930__auto__,/(\n|\s+)+/," ")),(function (left_76248){
return promesa.protocols._bind(check.async.to_promise("( 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 ... )"),(function (right_76249){
return promesa.protocols._bind(null,(function (___31810__auto____$4){
return promesa.protocols._bind(cljs.test.do_report(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var lft__35783__auto__ = left_76248;
var rgt__35784__auto__ = right_76249;
var qleft__35785__auto__ = new cljs.core.Symbol(null,"left-76248","left-76248",-982289938,null);
var qright__35786__auto__ = new cljs.core.Symbol(null,"right-76249","right-76249",-1474982260,null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})(),new cljs.core.Keyword(null,"expected","expected",1583670997),"( 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 ... )")),(function (___31809__auto____$13){
return promesa.protocols._promise(new cljs.core.Keyword(null,"done","done",-889844188));
}));
}));
}));
}));
})));
}));
}));
})));
}));
})),(function (___31809__auto____$12){
return promesa.protocols._bind(promesa.protocols._bind(null,(function (___31810__auto____$2){
return promesa.protocols._bind(document.querySelector("#result a:nth-child(n+1)").click(),(function (___31809__auto____$13){
return promesa.protocols._bind(repl_tooling.integration.fake_editor.change_result_p(),(function (___31809__auto____$14){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(repl_tooling.integration.fake_editor.txt_for_selector("#result .children"),(function (res__71941__auto__){
return promesa.protocols._bind(null,(function (___31810__auto____$3){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto____$1){
return promesa.protocols._bind(check.async.to_promise(clojure.string.replace(res__71941__auto__,/(\n|\s+)+/," ")),(function (left_76297){
return promesa.protocols._bind(check.async.to_promise("0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 ..."),(function (right_76298){
return promesa.protocols._bind(null,(function (___31810__auto____$4){
return promesa.protocols._bind(cljs.test.do_report(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var lft__35783__auto__ = left_76297;
var rgt__35784__auto__ = right_76298;
var qleft__35785__auto__ = new cljs.core.Symbol(null,"left-76297","left-76297",-1811867712,null);
var qright__35786__auto__ = new cljs.core.Symbol(null,"right-76298","right-76298",-1192099986,null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})(),new cljs.core.Keyword(null,"expected","expected",1583670997),"0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 ...")),(function (___31809__auto____$15){
return promesa.protocols._promise(new cljs.core.Keyword(null,"done","done",-889844188));
}));
}));
}));
}));
})));
}));
}));
})));
}));
}));
})),(function (___31809__auto____$13){
return promesa.protocols._promise(promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._bind(null,(function (___31810__auto____$2){
return promesa.protocols._bind(cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["toggle off"], 0)),(function (___31809__auto____$14){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31810__auto____$3){
return promesa.protocols._bind(document.querySelector("#result a:nth-child(n+1)").click(),(function (___31809__auto____$15){
return promesa.protocols._bind(repl_tooling.integration.fake_editor.change_result_p(),(function (___31809__auto____$16){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(repl_tooling.integration.fake_editor.txt_for_selector("#result .children"),(function (res__71941__auto__){
return promesa.protocols._bind(null,(function (___31810__auto____$4){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto____$1){
return promesa.protocols._bind(check.async.to_promise(clojure.string.replace(res__71941__auto__,/(\n|\s+)+/," ")),(function (left_76320){
return promesa.protocols._bind(check.async.to_promise(""),(function (right_76321){
return promesa.protocols._bind(null,(function (___31810__auto____$5){
return promesa.protocols._bind(cljs.test.do_report(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var lft__35783__auto__ = left_76320;
var rgt__35784__auto__ = right_76321;
var qleft__35785__auto__ = new cljs.core.Symbol(null,"left-76320","left-76320",1690711933,null);
var qright__35786__auto__ = new cljs.core.Symbol(null,"right-76321","right-76321",-561173374,null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})(),new cljs.core.Keyword(null,"expected","expected",1583670997),"")),(function (___31809__auto____$17){
return promesa.protocols._promise(new cljs.core.Keyword(null,"done","done",-889844188));
}));
}));
}));
}));
})));
}));
}));
})));
}));
}));
})));
}));
})),(function() { 
var G__78189__delegate = function (___36014__auto__){
return cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
};
var G__78189 = function (var_args){
var ___36014__auto__ = null;
if (arguments.length > 0) {
var G__78190__i = 0, G__78190__a = new Array(arguments.length -  0);
while (G__78190__i < G__78190__a.length) {G__78190__a[G__78190__i] = arguments[G__78190__i + 0]; ++G__78190__i;}
  ___36014__auto__ = new cljs.core.IndexedSeq(G__78190__a,0,null);
} 
return G__78189__delegate.call(this,___36014__auto__);};
G__78189.cljs$lang$maxFixedArity = 0;
G__78189.cljs$lang$applyTo = (function (arglist__78191){
var ___36014__auto__ = cljs.core.seq(arglist__78191);
return G__78189__delegate(___36014__auto__);
});
G__78189.cljs$core$IFn$_invoke$arity$variadic = G__78189__delegate;
return G__78189;
})()
));
}));
}));
}));
}));
})),(function() { 
var G__78192__delegate = function (___36014__auto__){
return cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
};
var G__78192 = function (var_args){
var ___36014__auto__ = null;
if (arguments.length > 0) {
var G__78193__i = 0, G__78193__a = new Array(arguments.length -  0);
while (G__78193__i < G__78193__a.length) {G__78193__a[G__78193__i] = arguments[G__78193__i + 0]; ++G__78193__i;}
  ___36014__auto__ = new cljs.core.IndexedSeq(G__78193__a,0,null);
} 
return G__78192__delegate.call(this,___36014__auto__);};
G__78192.cljs$lang$maxFixedArity = 0;
G__78192.cljs$lang$applyTo = (function (arglist__78194){
var ___36014__auto__ = cljs.core.seq(arglist__78194);
return G__78192__delegate(___36014__auto__);
});
G__78192.cljs$core$IFn$_invoke$arity$variadic = G__78192__delegate;
return G__78192;
})()
),(function (___31809__auto____$10){
return promesa.protocols._bind(promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._bind(null,(function (___31810__auto____$1){
return promesa.protocols._bind(cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["evaluates and presents big vectors"], 0)),(function (___31809__auto____$11){
return promesa.protocols._bind((function (){
repl_tooling.integration.fake_editor.type_and_eval("(vec (range 14))");

return promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(repl_tooling.integration.fake_editor.change_result_p(),(function (res__71895__auto__){
return promesa.protocols._bind(null,(function (___31810__auto____$2){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto____$1){
return promesa.protocols._bind(check.async.to_promise(clojure.string.replace(res__71895__auto__,/(\n|\s+)+/," ")),(function (left_76336){
return promesa.protocols._bind(check.async.to_promise("[ 0 1 2 3 4 5 6 7 8 9 ... ]"),(function (right_76337){
return promesa.protocols._bind(null,(function (___31810__auto____$3){
return promesa.protocols._bind(cljs.test.do_report(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var lft__35783__auto__ = left_76336;
var rgt__35784__auto__ = right_76337;
var qleft__35785__auto__ = new cljs.core.Symbol(null,"left-76336","left-76336",306966000,null);
var qright__35786__auto__ = new cljs.core.Symbol(null,"right-76337","right-76337",-1487286788,null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})(),new cljs.core.Keyword(null,"expected","expected",1583670997),"[ 0 1 2 3 4 5 6 7 8 9 ... ]")),(function (___31809__auto____$12){
return promesa.protocols._promise(new cljs.core.Keyword(null,"done","done",-889844188));
}));
}));
}));
}));
})));
}));
}));
}));
})()
,(function (___31809__auto____$12){
return promesa.protocols._bind(promesa.protocols._bind(null,(function (___31810__auto____$2){
return promesa.protocols._bind(document.querySelector("#result a:nth-child(n+2)").click(),(function (___31809__auto____$13){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(repl_tooling.integration.fake_editor.change_result_p(),(function (res__71930__auto__){
return promesa.protocols._bind(null,(function (___31810__auto____$3){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto____$1){
return promesa.protocols._bind(check.async.to_promise(clojure.string.replace(res__71930__auto__,/(\n|\s+)+/," ")),(function (left_76347){
return promesa.protocols._bind(check.async.to_promise("[ 0 1 2 3 4 5 6 7 8 9 10 11 12 13 ]"),(function (right_76348){
return promesa.protocols._bind(null,(function (___31810__auto____$4){
return promesa.protocols._bind(cljs.test.do_report(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var lft__35783__auto__ = left_76347;
var rgt__35784__auto__ = right_76348;
var qleft__35785__auto__ = new cljs.core.Symbol(null,"left-76347","left-76347",290191881,null);
var qright__35786__auto__ = new cljs.core.Symbol(null,"right-76348","right-76348",-1929827822,null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})(),new cljs.core.Keyword(null,"expected","expected",1583670997),"[ 0 1 2 3 4 5 6 7 8 9 10 11 12 13 ]")),(function (___31809__auto____$14){
return promesa.protocols._promise(new cljs.core.Keyword(null,"done","done",-889844188));
}));
}));
}));
}));
})));
}));
}));
})));
}));
})),(function (___31809__auto____$13){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31810__auto____$2){
return promesa.protocols._bind(document.querySelector("#result a:nth-child(n+1)").click(),(function (___31809__auto____$14){
return promesa.protocols._bind(repl_tooling.integration.fake_editor.change_result_p(),(function (___31809__auto____$15){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(repl_tooling.integration.fake_editor.txt_for_selector("#result .children"),(function (res__71941__auto__){
return promesa.protocols._bind(null,(function (___31810__auto____$3){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto____$1){
return promesa.protocols._bind(check.async.to_promise(clojure.string.replace(res__71941__auto__,/(\n|\s+)+/," ")),(function (left_76357){
return promesa.protocols._bind(check.async.to_promise("0 1 2 3 4 5 6 7 8 9 10 11 12 13"),(function (right_76358){
return promesa.protocols._bind(null,(function (___31810__auto____$4){
return promesa.protocols._bind(cljs.test.do_report(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var lft__35783__auto__ = left_76357;
var rgt__35784__auto__ = right_76358;
var qleft__35785__auto__ = new cljs.core.Symbol(null,"left-76357","left-76357",-281169018,null);
var qright__35786__auto__ = new cljs.core.Symbol(null,"right-76358","right-76358",-2116959936,null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})(),new cljs.core.Keyword(null,"expected","expected",1583670997),"0 1 2 3 4 5 6 7 8 9 10 11 12 13")),(function (___31809__auto____$16){
return promesa.protocols._promise(new cljs.core.Keyword(null,"done","done",-889844188));
}));
}));
}));
}));
})));
}));
}));
})));
}));
}));
})));
}));
}));
}));
})),(function() { 
var G__78245__delegate = function (___36014__auto__){
return cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
};
var G__78245 = function (var_args){
var ___36014__auto__ = null;
if (arguments.length > 0) {
var G__78247__i = 0, G__78247__a = new Array(arguments.length -  0);
while (G__78247__i < G__78247__a.length) {G__78247__a[G__78247__i] = arguments[G__78247__i + 0]; ++G__78247__i;}
  ___36014__auto__ = new cljs.core.IndexedSeq(G__78247__a,0,null);
} 
return G__78245__delegate.call(this,___36014__auto__);};
G__78245.cljs$lang$maxFixedArity = 0;
G__78245.cljs$lang$applyTo = (function (arglist__78249){
var ___36014__auto__ = cljs.core.seq(arglist__78249);
return G__78245__delegate(___36014__auto__);
});
G__78245.cljs$core$IFn$_invoke$arity$variadic = G__78245__delegate;
return G__78245;
})()
),(function (___31809__auto____$11){
return promesa.protocols._bind(promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._bind(null,(function (___31810__auto____$1){
return promesa.protocols._bind(cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["evaluates and presents big sets"], 0)),(function (___31809__auto____$12){
return promesa.protocols._bind((function (){
repl_tooling.integration.fake_editor.type_and_eval("(apply sorted-set (range 14))");

return promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(repl_tooling.integration.fake_editor.change_result_p(),(function (res__71895__auto__){
return promesa.protocols._bind(null,(function (___31810__auto____$2){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto____$1){
return promesa.protocols._bind(check.async.to_promise(clojure.string.replace(res__71895__auto__,/(\n|\s+)+/," ")),(function (left_76368){
return promesa.protocols._bind(check.async.to_promise("#{ 0 1 2 3 4 5 6 7 8 9 ... }"),(function (right_76369){
return promesa.protocols._bind(null,(function (___31810__auto____$3){
return promesa.protocols._bind(cljs.test.do_report(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var lft__35783__auto__ = left_76368;
var rgt__35784__auto__ = right_76369;
var qleft__35785__auto__ = new cljs.core.Symbol(null,"left-76368","left-76368",-1272920707,null);
var qright__35786__auto__ = new cljs.core.Symbol(null,"right-76369","right-76369",623274613,null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})(),new cljs.core.Keyword(null,"expected","expected",1583670997),"#{ 0 1 2 3 4 5 6 7 8 9 ... }")),(function (___31809__auto____$13){
return promesa.protocols._promise(new cljs.core.Keyword(null,"done","done",-889844188));
}));
}));
}));
}));
})));
}));
}));
}));
})()
,(function (___31809__auto____$13){
return promesa.protocols._bind(promesa.protocols._bind(null,(function (___31810__auto____$2){
return promesa.protocols._bind(document.querySelector("#result a:nth-child(n+2)").click(),(function (___31809__auto____$14){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(repl_tooling.integration.fake_editor.change_result_p(),(function (res__71930__auto__){
return promesa.protocols._bind(null,(function (___31810__auto____$3){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto____$1){
return promesa.protocols._bind(check.async.to_promise(clojure.string.replace(res__71930__auto__,/(\n|\s+)+/," ")),(function (left_76370){
return promesa.protocols._bind(check.async.to_promise("#{ 0 1 2 3 4 5 6 7 8 9 10 11 12 13 }"),(function (right_76371){
return promesa.protocols._bind(null,(function (___31810__auto____$4){
return promesa.protocols._bind(cljs.test.do_report(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var lft__35783__auto__ = left_76370;
var rgt__35784__auto__ = right_76371;
var qleft__35785__auto__ = new cljs.core.Symbol(null,"left-76370","left-76370",-1606536575,null);
var qright__35786__auto__ = new cljs.core.Symbol(null,"right-76371","right-76371",-837575747,null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})(),new cljs.core.Keyword(null,"expected","expected",1583670997),"#{ 0 1 2 3 4 5 6 7 8 9 10 11 12 13 }")),(function (___31809__auto____$15){
return promesa.protocols._promise(new cljs.core.Keyword(null,"done","done",-889844188));
}));
}));
}));
}));
})));
}));
}));
})));
}));
})),(function (___31809__auto____$14){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31810__auto____$2){
return promesa.protocols._bind(document.querySelector("#result a:nth-child(n+1)").click(),(function (___31809__auto____$15){
return promesa.protocols._bind(repl_tooling.integration.fake_editor.change_result_p(),(function (___31809__auto____$16){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(repl_tooling.integration.fake_editor.txt_for_selector("#result .children"),(function (res__71941__auto__){
return promesa.protocols._bind(null,(function (___31810__auto____$3){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto____$1){
return promesa.protocols._bind(check.async.to_promise(clojure.string.replace(res__71941__auto__,/(\n|\s+)+/," ")),(function (left_76376){
return promesa.protocols._bind(check.async.to_promise("0 1 2 3 4 5 6 7 8 9 10 11 12 13"),(function (right_76377){
return promesa.protocols._bind(null,(function (___31810__auto____$4){
return promesa.protocols._bind(cljs.test.do_report(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var lft__35783__auto__ = left_76376;
var rgt__35784__auto__ = right_76377;
var qleft__35785__auto__ = new cljs.core.Symbol(null,"left-76376","left-76376",-1242930738,null);
var qright__35786__auto__ = new cljs.core.Symbol(null,"right-76377","right-76377",-1610529817,null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})(),new cljs.core.Keyword(null,"expected","expected",1583670997),"0 1 2 3 4 5 6 7 8 9 10 11 12 13")),(function (___31809__auto____$17){
return promesa.protocols._promise(new cljs.core.Keyword(null,"done","done",-889844188));
}));
}));
}));
}));
})));
}));
}));
})));
}));
}));
})));
}));
}));
}));
})),(function() { 
var G__78258__delegate = function (___36014__auto__){
return cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
};
var G__78258 = function (var_args){
var ___36014__auto__ = null;
if (arguments.length > 0) {
var G__78259__i = 0, G__78259__a = new Array(arguments.length -  0);
while (G__78259__i < G__78259__a.length) {G__78259__a[G__78259__i] = arguments[G__78259__i + 0]; ++G__78259__i;}
  ___36014__auto__ = new cljs.core.IndexedSeq(G__78259__a,0,null);
} 
return G__78258__delegate.call(this,___36014__auto__);};
G__78258.cljs$lang$maxFixedArity = 0;
G__78258.cljs$lang$applyTo = (function (arglist__78260){
var ___36014__auto__ = cljs.core.seq(arglist__78260);
return G__78258__delegate(___36014__auto__);
});
G__78258.cljs$core$IFn$_invoke$arity$variadic = G__78258__delegate;
return G__78258;
})()
),(function (___31809__auto____$12){
return promesa.protocols._bind(promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._bind(null,(function (___31810__auto____$1){
return promesa.protocols._bind(cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["evaluates and presents maps"], 0)),(function (___31809__auto____$13){
return promesa.protocols._bind((function (){
repl_tooling.integration.fake_editor.type_and_eval("(sorted-map :a (range 12) :b 90)");

return promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(repl_tooling.integration.fake_editor.change_result_p(),(function (res__71895__auto__){
return promesa.protocols._bind(null,(function (___31810__auto____$2){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto____$1){
return promesa.protocols._bind(check.async.to_promise(clojure.string.replace(res__71895__auto__,/(\n|\s+)+/," ")),(function (left_76388){
return promesa.protocols._bind(check.async.to_promise("{ :a ( 0 1 2 3 4 5 6 7 8 9 ... ) , :b 90 }"),(function (right_76389){
return promesa.protocols._bind(null,(function (___31810__auto____$3){
return promesa.protocols._bind(cljs.test.do_report(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var lft__35783__auto__ = left_76388;
var rgt__35784__auto__ = right_76389;
var qleft__35785__auto__ = new cljs.core.Symbol(null,"left-76388","left-76388",1433901966,null);
var qright__35786__auto__ = new cljs.core.Symbol(null,"right-76389","right-76389",-1017470546,null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})(),new cljs.core.Keyword(null,"expected","expected",1583670997),"{ :a ( 0 1 2 3 4 5 6 7 8 9 ... ) , :b 90 }")),(function (___31809__auto____$14){
return promesa.protocols._promise(new cljs.core.Keyword(null,"done","done",-889844188));
}));
}));
}));
}));
})));
}));
}));
}));
})()
,(function (___31809__auto____$14){
return promesa.protocols._bind(promesa.protocols._bind(null,(function (___31810__auto____$2){
return promesa.protocols._bind(document.querySelector("#result a:nth-child(n+2)").click(),(function (___31809__auto____$15){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(repl_tooling.integration.fake_editor.change_result_p(),(function (res__71930__auto__){
return promesa.protocols._bind(null,(function (___31810__auto____$3){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto____$1){
return promesa.protocols._bind(check.async.to_promise(clojure.string.replace(res__71930__auto__,/(\n|\s+)+/," ")),(function (left_76390){
return promesa.protocols._bind(check.async.to_promise("{ :a ( 0 1 2 3 4 5 6 7 8 9 10 11 ) , :b 90 }"),(function (right_76391){
return promesa.protocols._bind(null,(function (___31810__auto____$4){
return promesa.protocols._bind(cljs.test.do_report(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var lft__35783__auto__ = left_76390;
var rgt__35784__auto__ = right_76391;
var qleft__35785__auto__ = new cljs.core.Symbol(null,"left-76390","left-76390",-1304173811,null);
var qright__35786__auto__ = new cljs.core.Symbol(null,"right-76391","right-76391",122524566,null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})(),new cljs.core.Keyword(null,"expected","expected",1583670997),"{ :a ( 0 1 2 3 4 5 6 7 8 9 10 11 ) , :b 90 }")),(function (___31809__auto____$16){
return promesa.protocols._promise(new cljs.core.Keyword(null,"done","done",-889844188));
}));
}));
}));
}));
})));
}));
}));
})));
}));
})),(function (___31809__auto____$15){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31810__auto____$2){
return promesa.protocols._bind(document.querySelector("#result a:nth-child(n+1)").click(),(function (___31809__auto____$16){
return promesa.protocols._bind(repl_tooling.integration.fake_editor.change_result_p(),(function (___31809__auto____$17){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(repl_tooling.integration.fake_editor.txt_for_selector("#result .children"),(function (res__71941__auto__){
return promesa.protocols._bind(null,(function (___31810__auto____$3){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto____$1){
return promesa.protocols._bind(check.async.to_promise(clojure.string.replace(res__71941__auto__,/(\n|\s+)+/," ")),(function (left_76402){
return promesa.protocols._bind(check.async.to_promise("[ :a ( 0 1 2 3 4 5 6 7 8 9 10 11 ) ] [ :b 90 ]"),(function (right_76403){
return promesa.protocols._bind(null,(function (___31810__auto____$4){
return promesa.protocols._bind(cljs.test.do_report(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var lft__35783__auto__ = left_76402;
var rgt__35784__auto__ = right_76403;
var qleft__35785__auto__ = new cljs.core.Symbol(null,"left-76402","left-76402",-423271317,null);
var qright__35786__auto__ = new cljs.core.Symbol(null,"right-76403","right-76403",-1062206206,null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})(),new cljs.core.Keyword(null,"expected","expected",1583670997),"[ :a ( 0 1 2 3 4 5 6 7 8 9 10 11 ) ] [ :b 90 ]")),(function (___31809__auto____$18){
return promesa.protocols._promise(new cljs.core.Keyword(null,"done","done",-889844188));
}));
}));
}));
}));
})));
}));
}));
})));
}));
}));
})));
}));
}));
}));
})),(function() { 
var G__78269__delegate = function (___36014__auto__){
return cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
};
var G__78269 = function (var_args){
var ___36014__auto__ = null;
if (arguments.length > 0) {
var G__78271__i = 0, G__78271__a = new Array(arguments.length -  0);
while (G__78271__i < G__78271__a.length) {G__78271__a[G__78271__i] = arguments[G__78271__i + 0]; ++G__78271__i;}
  ___36014__auto__ = new cljs.core.IndexedSeq(G__78271__a,0,null);
} 
return G__78269__delegate.call(this,___36014__auto__);};
G__78269.cljs$lang$maxFixedArity = 0;
G__78269.cljs$lang$applyTo = (function (arglist__78272){
var ___36014__auto__ = cljs.core.seq(arglist__78272);
return G__78269__delegate(___36014__auto__);
});
G__78269.cljs$core$IFn$_invoke$arity$variadic = G__78269__delegate;
return G__78269;
})()
),(function (___31809__auto____$13){
return promesa.protocols._bind(promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._bind(null,(function (___31810__auto____$1){
return promesa.protocols._bind(cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["evaluates and presents taggable objects"], 0)),(function (___31809__auto____$14){
return promesa.protocols._bind((function (){
repl_tooling.integration.fake_editor.type_and_eval("(do (defrecord Foo [a b]) (->Foo (range 15) 20))");

return promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(repl_tooling.integration.fake_editor.change_result_p(),(function (res__71895__auto__){
return promesa.protocols._bind(null,(function (___31810__auto____$2){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto____$1){
return promesa.protocols._bind(check.async.to_promise(clojure.string.replace(res__71895__auto__,/(\n|\s+)+/," ")),(function (left_76408){
return promesa.protocols._bind(check.async.to_promise(/#.+Foo \{ :a \( 0 1 2 3 4 5 6 7 8 9 ... \) , :b 20 \}/),(function (right_76409){
return promesa.protocols._bind(null,(function (___31810__auto____$3){
return promesa.protocols._bind(cljs.test.do_report(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var lft__35783__auto__ = left_76408;
var rgt__35784__auto__ = right_76409;
var qleft__35785__auto__ = new cljs.core.Symbol(null,"left-76408","left-76408",-1645471698,null);
var qright__35786__auto__ = new cljs.core.Symbol(null,"right-76409","right-76409",398842689,null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})(),new cljs.core.Keyword(null,"expected","expected",1583670997),/#.+Foo \{ :a \( 0 1 2 3 4 5 6 7 8 9 ... \) , :b 20 \}/)),(function (___31809__auto____$15){
return promesa.protocols._promise(new cljs.core.Keyword(null,"done","done",-889844188));
}));
}));
}));
}));
})));
}));
}));
}));
})()
,(function (___31809__auto____$15){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31810__auto____$2){
return promesa.protocols._bind(document.querySelector("#result a:nth-child(n+2)").click(),(function (___31809__auto____$16){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(repl_tooling.integration.fake_editor.change_result_p(),(function (res__71930__auto__){
return promesa.protocols._bind(null,(function (___31810__auto____$3){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto____$1){
return promesa.protocols._bind(check.async.to_promise(clojure.string.replace(res__71930__auto__,/(\n|\s+)+/," ")),(function (left_76412){
return promesa.protocols._bind(check.async.to_promise(/#.+Foo \{ :a \( 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 \) , :b 20 \}/),(function (right_76413){
return promesa.protocols._bind(null,(function (___31810__auto____$4){
return promesa.protocols._bind(cljs.test.do_report(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var lft__35783__auto__ = left_76412;
var rgt__35784__auto__ = right_76413;
var qleft__35785__auto__ = new cljs.core.Symbol(null,"left-76412","left-76412",-1308581259,null);
var qright__35786__auto__ = new cljs.core.Symbol(null,"right-76413","right-76413",1610146859,null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})(),new cljs.core.Keyword(null,"expected","expected",1583670997),/#.+Foo \{ :a \( 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 \) , :b 20 \}/)),(function (___31809__auto____$17){
return promesa.protocols._promise(new cljs.core.Keyword(null,"done","done",-889844188));
}));
}));
}));
}));
})));
}));
}));
})));
}));
})));
}));
}));
})),(function() { 
var G__78363__delegate = function (___36014__auto__){
return cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
};
var G__78363 = function (var_args){
var ___36014__auto__ = null;
if (arguments.length > 0) {
var G__78365__i = 0, G__78365__a = new Array(arguments.length -  0);
while (G__78365__i < G__78365__a.length) {G__78365__a[G__78365__i] = arguments[G__78365__i + 0]; ++G__78365__i;}
  ___36014__auto__ = new cljs.core.IndexedSeq(G__78365__a,0,null);
} 
return G__78363__delegate.call(this,___36014__auto__);};
G__78363.cljs$lang$maxFixedArity = 0;
G__78363.cljs$lang$applyTo = (function (arglist__78366){
var ___36014__auto__ = cljs.core.seq(arglist__78366);
return G__78363__delegate(___36014__auto__);
});
G__78363.cljs$core$IFn$_invoke$arity$variadic = G__78363__delegate;
return G__78363;
})()
),(function (___31809__auto____$14){
return promesa.protocols._bind(promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._bind(null,(function (___31810__auto____$1){
return promesa.protocols._bind(cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["evaluates and presents classes"], 0)),(function (___31809__auto____$15){
return promesa.protocols._promise((function (){
repl_tooling.integration.fake_editor.type_and_eval("(ns user) Object");

return promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(repl_tooling.integration.fake_editor.change_result_p(),(function (res__71895__auto__){
return promesa.protocols._bind(null,(function (___31810__auto____$2){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto____$1){
return promesa.protocols._bind(check.async.to_promise(clojure.string.replace(res__71895__auto__,/(\n|\s+)+/," ")),(function (left_76428){
return promesa.protocols._bind(check.async.to_promise("java.lang.Object ..."),(function (right_76429){
return promesa.protocols._bind(null,(function (___31810__auto____$3){
return promesa.protocols._bind(cljs.test.do_report(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var lft__35783__auto__ = left_76428;
var rgt__35784__auto__ = right_76429;
var qleft__35785__auto__ = new cljs.core.Symbol(null,"left-76428","left-76428",1582312526,null);
var qright__35786__auto__ = new cljs.core.Symbol(null,"right-76429","right-76429",726399709,null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})(),new cljs.core.Keyword(null,"expected","expected",1583670997),"java.lang.Object ...")),(function (___31809__auto____$16){
return promesa.protocols._promise(new cljs.core.Keyword(null,"done","done",-889844188));
}));
}));
}));
}));
})));
}));
}));
}));
})()
);
}));
})),(function() { 
var G__78371__delegate = function (___36014__auto__){
return cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
};
var G__78371 = function (var_args){
var ___36014__auto__ = null;
if (arguments.length > 0) {
var G__78372__i = 0, G__78372__a = new Array(arguments.length -  0);
while (G__78372__i < G__78372__a.length) {G__78372__a[G__78372__i] = arguments[G__78372__i + 0]; ++G__78372__i;}
  ___36014__auto__ = new cljs.core.IndexedSeq(G__78372__a,0,null);
} 
return G__78371__delegate.call(this,___36014__auto__);};
G__78371.cljs$lang$maxFixedArity = 0;
G__78371.cljs$lang$applyTo = (function (arglist__78374){
var ___36014__auto__ = cljs.core.seq(arglist__78374);
return G__78371__delegate(___36014__auto__);
});
G__78371.cljs$core$IFn$_invoke$arity$variadic = G__78371__delegate;
return G__78371;
})()
),(function (___31809__auto____$15){
return promesa.protocols._bind(promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._bind(null,(function (___31810__auto____$1){
return promesa.protocols._bind(cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["evaluates inner browseable structures"], 0)),(function (___31809__auto____$16){
return promesa.protocols._promise((function (){
repl_tooling.integration.fake_editor.type_and_eval("(->> (range 95 100)\n     (map #(vector (symbol (apply str (range %)))\n                   (tagged-literal 'foobar.baz/lolnein (doto (java.util.LinkedList.)\n                                                             (.add %)\n                                                             (.add %)))))\n     (into {}))");

return promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(repl_tooling.integration.fake_editor.change_result_p(),(function (res__71895__auto__){
return promesa.protocols._bind(null,(function (___31810__auto____$2){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto____$1){
return promesa.protocols._bind(check.async.to_promise(clojure.string.replace(res__71895__auto__,/(\n|\s+)+/," ")),(function (left_76447){
return promesa.protocols._bind(check.async.to_promise(/#foobar.baz\/lolnein \.\.\./),(function (right_76448){
return promesa.protocols._bind(null,(function (___31810__auto____$3){
return promesa.protocols._bind(cljs.test.do_report(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var lft__35783__auto__ = left_76447;
var rgt__35784__auto__ = right_76448;
var qleft__35785__auto__ = new cljs.core.Symbol(null,"left-76447","left-76447",189936142,null);
var qright__35786__auto__ = new cljs.core.Symbol(null,"right-76448","right-76448",45225360,null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})(),new cljs.core.Keyword(null,"expected","expected",1583670997),/#foobar.baz\/lolnein \.\.\./)),(function (___31809__auto____$17){
return promesa.protocols._promise(new cljs.core.Keyword(null,"done","done",-889844188));
}));
}));
}));
}));
})));
}));
}));
}));
})()
);
}));
})),(function() { 
var G__78379__delegate = function (___36014__auto__){
return cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
};
var G__78379 = function (var_args){
var ___36014__auto__ = null;
if (arguments.length > 0) {
var G__78380__i = 0, G__78380__a = new Array(arguments.length -  0);
while (G__78380__i < G__78380__a.length) {G__78380__a[G__78380__i] = arguments[G__78380__i + 0]; ++G__78380__i;}
  ___36014__auto__ = new cljs.core.IndexedSeq(G__78380__a,0,null);
} 
return G__78379__delegate.call(this,___36014__auto__);};
G__78379.cljs$lang$maxFixedArity = 0;
G__78379.cljs$lang$applyTo = (function (arglist__78381){
var ___36014__auto__ = cljs.core.seq(arglist__78381);
return G__78379__delegate(___36014__auto__);
});
G__78379.cljs$core$IFn$_invoke$arity$variadic = G__78379__delegate;
return G__78379;
})()
),(function (___31809__auto____$16){
return promesa.protocols._bind(repl_tooling.integration.clojure_ui.click_chevron((0)),(function (___31809__auto____$17){
return promesa.protocols._bind(repl_tooling.integration.fake_editor.change_result_p(),(function (___31809__auto____$18){
return promesa.protocols._bind(promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._bind(null,(function (___31810__auto____$1){
return promesa.protocols._bind(cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["map is too deep, we show just the ellision for object"], 0)),(function (___31809__auto____$19){
return promesa.protocols._bind(repl_tooling.integration.clojure_ui.click_chevron((5)),(function (___31809__auto____$20){
return promesa.protocols._bind(repl_tooling.integration.fake_editor.change_result_p(),(function (___31809__auto____$21){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(check.async.to_promise(clojure.string.replace(repl_tooling.integration.fake_editor.txt_for_selector("#result div:nth-child(5) div:nth-child(2) div.tagged"),/(\n|\s+)+/," ")),(function (left_76457){
return promesa.protocols._bind(check.async.to_promise(/#foobar.baz\/lolnein \.\.\./),(function (right_76458){
return promesa.protocols._bind(null,(function (___31810__auto____$2){
return promesa.protocols._bind(cljs.test.do_report(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var lft__35794__auto__ = left_76457;
var rgt__35795__auto__ = right_76458;
var qleft__35796__auto__ = new cljs.core.Symbol(null,"left-76457","left-76457",-1193184162,null);
var qright__35797__auto__ = new cljs.core.Symbol(null,"right-76458","right-76458",-285858774,null);
var result__35798__auto__ = expectations.compare_expr.cljs$core$IFn$_invoke$arity$4(rgt__35795__auto__,lft__35794__auto__,qright__35797__auto__,qleft__35796__auto__);
var unformatted_msg__35799__auto__ = expectations.__GT_failure_message(result__35798__auto__);
var msg__35800__auto__ = clojure.string.replace(unformatted_msg__35799__auto__,/^.*?\n/,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(qleft__35796__auto__)," => ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(qright__35797__auto__)].join(''));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(result__35798__auto__),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35797__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),qleft__35796__auto__,new cljs.core.Keyword(null,"message","message",-406056002),msg__35800__auto__], null);
})(),new cljs.core.Keyword(null,"expected","expected",1583670997),/#foobar.baz\/lolnein \.\.\./)),(function (___31809__auto____$22){
return promesa.protocols._promise(new cljs.core.Keyword(null,"done","done",-889844188));
}));
}));
}));
}));
})));
}));
}));
}));
})),(function() { 
var G__78384__delegate = function (___36014__auto__){
return cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
};
var G__78384 = function (var_args){
var ___36014__auto__ = null;
if (arguments.length > 0) {
var G__78389__i = 0, G__78389__a = new Array(arguments.length -  0);
while (G__78389__i < G__78389__a.length) {G__78389__a[G__78389__i] = arguments[G__78389__i + 0]; ++G__78389__i;}
  ___36014__auto__ = new cljs.core.IndexedSeq(G__78389__a,0,null);
} 
return G__78384__delegate.call(this,___36014__auto__);};
G__78384.cljs$lang$maxFixedArity = 0;
G__78384.cljs$lang$applyTo = (function (arglist__78390){
var ___36014__auto__ = cljs.core.seq(arglist__78390);
return G__78384__delegate(___36014__auto__);
});
G__78384.cljs$core$IFn$_invoke$arity$variadic = G__78384__delegate;
return G__78384;
})()
),(function (___31809__auto____$19){
return promesa.protocols._bind(promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._bind(null,(function (___31810__auto____$1){
return promesa.protocols._bind(cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["clicking the ellision for object should render its representation"], 0)),(function (___31809__auto____$20){
return promesa.protocols._bind((function (){var G__76467 = document;
var G__76467__$1 = (((G__76467 == null))?null:G__76467.querySelector(".children .children div:nth-child(2) div div a"));
if((G__76467__$1 == null)){
return null;
} else {
return G__76467__$1.click();
}
})(),(function (___31809__auto____$21){
return promesa.protocols._bind(repl_tooling.integration.fake_editor.wait_for_p((function (){
return repl_tooling.integration.clojure_ui.click_chevron((6));
})),(function (___31809__auto____$22){
return promesa.protocols._bind(repl_tooling.integration.fake_editor.change_result_p(),(function (___31809__auto____$23){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(check.async.to_promise(clojure.string.replace(repl_tooling.integration.fake_editor.txt_for_selector("#result .children div.tag:nth-child(2)"),/(\n|\s+)+/," ")),(function (left_76470){
return promesa.protocols._bind(check.async.to_promise(/\( 99 99 \)/),(function (right_76471){
return promesa.protocols._bind(null,(function (___31810__auto____$2){
return promesa.protocols._bind(cljs.test.do_report(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var lft__35794__auto__ = left_76470;
var rgt__35795__auto__ = right_76471;
var qleft__35796__auto__ = new cljs.core.Symbol(null,"left-76470","left-76470",-584121954,null);
var qright__35797__auto__ = new cljs.core.Symbol(null,"right-76471","right-76471",-1553208950,null);
var result__35798__auto__ = expectations.compare_expr.cljs$core$IFn$_invoke$arity$4(rgt__35795__auto__,lft__35794__auto__,qright__35797__auto__,qleft__35796__auto__);
var unformatted_msg__35799__auto__ = expectations.__GT_failure_message(result__35798__auto__);
var msg__35800__auto__ = clojure.string.replace(unformatted_msg__35799__auto__,/^.*?\n/,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(qleft__35796__auto__)," => ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(qright__35797__auto__)].join(''));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(result__35798__auto__),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35797__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),qleft__35796__auto__,new cljs.core.Keyword(null,"message","message",-406056002),msg__35800__auto__], null);
})(),new cljs.core.Keyword(null,"expected","expected",1583670997),/\( 99 99 \)/)),(function (___31809__auto____$24){
return promesa.protocols._promise(new cljs.core.Keyword(null,"done","done",-889844188));
}));
}));
}));
}));
})));
}));
}));
}));
}));
})),(function() { 
var G__78395__delegate = function (___36014__auto__){
return cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
};
var G__78395 = function (var_args){
var ___36014__auto__ = null;
if (arguments.length > 0) {
var G__78396__i = 0, G__78396__a = new Array(arguments.length -  0);
while (G__78396__i < G__78396__a.length) {G__78396__a[G__78396__i] = arguments[G__78396__i + 0]; ++G__78396__i;}
  ___36014__auto__ = new cljs.core.IndexedSeq(G__78396__a,0,null);
} 
return G__78395__delegate.call(this,___36014__auto__);};
G__78395.cljs$lang$maxFixedArity = 0;
G__78395.cljs$lang$applyTo = (function (arglist__78397){
var ___36014__auto__ = cljs.core.seq(arglist__78397);
return G__78395__delegate(___36014__auto__);
});
G__78395.cljs$core$IFn$_invoke$arity$variadic = G__78395__delegate;
return G__78395;
})()
),(function (___31809__auto____$20){
return promesa.protocols._bind(promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._bind(null,(function (___31810__auto____$1){
return promesa.protocols._bind(cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["division by zero renders an exception"], 0)),(function (___31809__auto____$21){
return promesa.protocols._promise((function (){
repl_tooling.integration.fake_editor.type_and_eval("(/ 10 0)");

return promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(repl_tooling.integration.fake_editor.change_result_p(),(function (res__71895__auto__){
return promesa.protocols._bind(null,(function (___31810__auto____$2){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto____$1){
return promesa.protocols._bind(check.async.to_promise(clojure.string.replace(res__71895__auto__,/(\n|\s+)+/," ")),(function (left_76477){
return promesa.protocols._bind(check.async.to_promise(/java.lang.ArithmeticException : \"Divide by zero\"/),(function (right_76478){
return promesa.protocols._bind(null,(function (___31810__auto____$3){
return promesa.protocols._bind(cljs.test.do_report(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var lft__35783__auto__ = left_76477;
var rgt__35784__auto__ = right_76478;
var qleft__35785__auto__ = new cljs.core.Symbol(null,"left-76477","left-76477",1248809800,null);
var qright__35786__auto__ = new cljs.core.Symbol(null,"right-76478","right-76478",1207317529,null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})(),new cljs.core.Keyword(null,"expected","expected",1583670997),/java.lang.ArithmeticException : \"Divide by zero\"/)),(function (___31809__auto____$22){
return promesa.protocols._promise(new cljs.core.Keyword(null,"done","done",-889844188));
}));
}));
}));
}));
})));
}));
}));
}));
})()
);
}));
})),(function() { 
var G__78404__delegate = function (___36014__auto__){
return cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
};
var G__78404 = function (var_args){
var ___36014__auto__ = null;
if (arguments.length > 0) {
var G__78407__i = 0, G__78407__a = new Array(arguments.length -  0);
while (G__78407__i < G__78407__a.length) {G__78407__a[G__78407__i] = arguments[G__78407__i + 0]; ++G__78407__i;}
  ___36014__auto__ = new cljs.core.IndexedSeq(G__78407__a,0,null);
} 
return G__78404__delegate.call(this,___36014__auto__);};
G__78404.cljs$lang$maxFixedArity = 0;
G__78404.cljs$lang$applyTo = (function (arglist__78408){
var ___36014__auto__ = cljs.core.seq(arglist__78408);
return G__78404__delegate(___36014__auto__);
});
G__78404.cljs$core$IFn$_invoke$arity$variadic = G__78404__delegate;
return G__78404;
})()
),(function (___31809__auto____$21){
return promesa.protocols._promise(promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._bind(null,(function (___31810__auto____$1){
return promesa.protocols._bind(cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["shows exceptions on unidentified elements"], 0)),(function (___31809__auto____$22){
return promesa.protocols._promise((function (){
repl_tooling.integration.fake_editor.type_and_eval("(SomeUnknownObject.)");

return promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(repl_tooling.integration.fake_editor.change_result_p(),(function (res__71895__auto__){
return promesa.protocols._bind(null,(function (___31810__auto____$2){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto____$1){
return promesa.protocols._bind(check.async.to_promise(clojure.string.replace(res__71895__auto__,/(\n|\s+)+/," ")),(function (left_76486){
return promesa.protocols._bind(check.async.to_promise(/Unable to resolve classname: SomeUnknownObject/),(function (right_76487){
return promesa.protocols._bind(null,(function (___31810__auto____$3){
return promesa.protocols._bind(cljs.test.do_report(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var lft__35783__auto__ = left_76486;
var rgt__35784__auto__ = right_76487;
var qleft__35785__auto__ = new cljs.core.Symbol(null,"left-76486","left-76486",-39505064,null);
var qright__35786__auto__ = new cljs.core.Symbol(null,"right-76487","right-76487",-1465332805,null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})(),new cljs.core.Keyword(null,"expected","expected",1583670997),/Unable to resolve classname: SomeUnknownObject/)),(function (___31809__auto____$23){
return promesa.protocols._promise(new cljs.core.Keyword(null,"done","done",-889844188));
}));
}));
}));
}));
})));
}));
}));
}));
})()
);
}));
})),(function() { 
var G__78415__delegate = function (___36014__auto__){
return cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
};
var G__78415 = function (var_args){
var ___36014__auto__ = null;
if (arguments.length > 0) {
var G__78417__i = 0, G__78417__a = new Array(arguments.length -  0);
while (G__78417__i < G__78417__a.length) {G__78417__a[G__78417__i] = arguments[G__78417__i + 0]; ++G__78417__i;}
  ___36014__auto__ = new cljs.core.IndexedSeq(G__78417__a,0,null);
} 
return G__78415__delegate.call(this,___36014__auto__);};
G__78415.cljs$lang$maxFixedArity = 0;
G__78415.cljs$lang$applyTo = (function (arglist__78418){
var ___36014__auto__ = cljs.core.seq(arglist__78418);
return G__78415__delegate(___36014__auto__);
});
G__78415.cljs$core$IFn$_invoke$arity$variadic = G__78415__delegate;
return G__78415;
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
}));
}));
}));
})));
})], 0)),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));

repl_tooling.integration.clojure_ui.repl_evaluation = (function repl_tooling$integration$clojure_ui$repl_evaluation(){
return cljs.test.test_var(repl_tooling.integration.clojure_ui.repl_evaluation.cljs$lang$var);
});
repl_tooling.integration.clojure_ui.repl_evaluation.cljs$lang$test = (function (){
return check.async.async_test_STAR_("Clojure REPL evaluation",(8000),(function (){
return repl_tooling.integration.fake_editor.disconnect_BANG_();
}),promesa.protocols._bind(null,(function (___31810__auto__){
return promesa.protocols._bind(repl_tooling.integration.fake_editor.connect_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"notify","notify",-1256867814),cljs.core.prn], null)),(function (___31809__auto__){
return promesa.protocols._bind(promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._bind(null,(function (___31810__auto____$1){
return promesa.protocols._bind(cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["evaluation works"], 0)),(function (___31809__auto____$1){
return promesa.protocols._bind(repl_tooling.integration.fake_editor.type_and_eval("(+ 2 3)"),(function (___31809__auto____$2){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(check.async.to_promise(repl_tooling.integration.fake_editor.change_result_p()),(function (left_76528){
return promesa.protocols._bind(check.async.to_promise("5"),(function (right_76529){
return promesa.protocols._bind(null,(function (___31810__auto____$2){
return promesa.protocols._bind(cljs.test.do_report(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var lft__35783__auto__ = left_76528;
var rgt__35784__auto__ = right_76529;
var qleft__35785__auto__ = new cljs.core.Symbol(null,"left-76528","left-76528",1409996011,null);
var qright__35786__auto__ = new cljs.core.Symbol(null,"right-76529","right-76529",1320185004,null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})(),new cljs.core.Keyword(null,"expected","expected",1583670997),"5")),(function (___31809__auto____$3){
return promesa.protocols._promise(new cljs.core.Keyword(null,"done","done",-889844188));
}));
}));
}));
}));
})));
}));
}));
})),(function() { 
var G__78425__delegate = function (___36014__auto__){
return cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
};
var G__78425 = function (var_args){
var ___36014__auto__ = null;
if (arguments.length > 0) {
var G__78427__i = 0, G__78427__a = new Array(arguments.length -  0);
while (G__78427__i < G__78427__a.length) {G__78427__a[G__78427__i] = arguments[G__78427__i + 0]; ++G__78427__i;}
  ___36014__auto__ = new cljs.core.IndexedSeq(G__78427__a,0,null);
} 
return G__78425__delegate.call(this,___36014__auto__);};
G__78425.cljs$lang$maxFixedArity = 0;
G__78425.cljs$lang$applyTo = (function (arglist__78429){
var ___36014__auto__ = cljs.core.seq(arglist__78429);
return G__78425__delegate(___36014__auto__);
});
G__78425.cljs$core$IFn$_invoke$arity$variadic = G__78425__delegate;
return G__78425;
})()
),(function (___31809__auto____$1){
return promesa.protocols._bind(promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._bind(null,(function (___31810__auto____$1){
return promesa.protocols._bind(cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["evaluate blocks"], 0)),(function (___31809__auto____$2){
return promesa.protocols._bind(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(repl_tooling.integration.fake_editor.state,cljs.core.assoc,new cljs.core.Keyword(null,"code","code",1586293142),"(+ 1 2)\n\n(+ 2 \n  (+ 3 4))",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(3)], null)], null)], 0)),(function (___31809__auto____$3){
return promesa.protocols._bind(repl_tooling.integration.fake_editor.run_command_BANG_(new cljs.core.Keyword(null,"evaluate-block","evaluate-block",-906759120)),(function (___31809__auto____$4){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(check.async.to_promise(repl_tooling.integration.fake_editor.change_result_p()),(function (left_76655){
return promesa.protocols._bind(check.async.to_promise("7"),(function (right_76656){
return promesa.protocols._bind(null,(function (___31810__auto____$2){
return promesa.protocols._bind(cljs.test.do_report(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var lft__35783__auto__ = left_76655;
var rgt__35784__auto__ = right_76656;
var qleft__35785__auto__ = new cljs.core.Symbol(null,"left-76655","left-76655",-1681610761,null);
var qright__35786__auto__ = new cljs.core.Symbol(null,"right-76656","right-76656",-666476702,null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})(),new cljs.core.Keyword(null,"expected","expected",1583670997),"7")),(function (___31809__auto____$5){
return promesa.protocols._promise(new cljs.core.Keyword(null,"done","done",-889844188));
}));
}));
}));
}));
})));
}));
}));
}));
})),(function() { 
var G__78436__delegate = function (___36014__auto__){
return cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
};
var G__78436 = function (var_args){
var ___36014__auto__ = null;
if (arguments.length > 0) {
var G__78437__i = 0, G__78437__a = new Array(arguments.length -  0);
while (G__78437__i < G__78437__a.length) {G__78437__a[G__78437__i] = arguments[G__78437__i + 0]; ++G__78437__i;}
  ___36014__auto__ = new cljs.core.IndexedSeq(G__78437__a,0,null);
} 
return G__78436__delegate.call(this,___36014__auto__);};
G__78436.cljs$lang$maxFixedArity = 0;
G__78436.cljs$lang$applyTo = (function (arglist__78438){
var ___36014__auto__ = cljs.core.seq(arglist__78438);
return G__78436__delegate(___36014__auto__);
});
G__78436.cljs$core$IFn$_invoke$arity$variadic = G__78436__delegate;
return G__78436;
})()
),(function (___31809__auto____$2){
return promesa.protocols._bind(promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._bind(null,(function (___31810__auto____$1){
return promesa.protocols._bind(cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["evaluate top blocks"], 0)),(function (___31809__auto____$3){
return promesa.protocols._bind(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(repl_tooling.integration.fake_editor.state,cljs.core.assoc,new cljs.core.Keyword(null,"code","code",1586293142),"(+ 1 2)\n\n(+ 2 \n  (+ 3 4))",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(3)], null)], null)], 0)),(function (___31809__auto____$4){
return promesa.protocols._bind(repl_tooling.integration.fake_editor.run_command_BANG_(new cljs.core.Keyword(null,"evaluate-top-block","evaluate-top-block",-2034693127)),(function (___31809__auto____$5){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(check.async.to_promise(repl_tooling.integration.fake_editor.change_result_p()),(function (left_76696){
return promesa.protocols._bind(check.async.to_promise("9"),(function (right_76697){
return promesa.protocols._bind(null,(function (___31810__auto____$2){
return promesa.protocols._bind(cljs.test.do_report(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var lft__35794__auto__ = left_76696;
var rgt__35795__auto__ = right_76697;
var qleft__35796__auto__ = new cljs.core.Symbol(null,"left-76696","left-76696",1864472637,null);
var qright__35797__auto__ = new cljs.core.Symbol(null,"right-76697","right-76697",-792501957,null);
var result__35798__auto__ = expectations.compare_expr.cljs$core$IFn$_invoke$arity$4(rgt__35795__auto__,lft__35794__auto__,qright__35797__auto__,qleft__35796__auto__);
var unformatted_msg__35799__auto__ = expectations.__GT_failure_message(result__35798__auto__);
var msg__35800__auto__ = clojure.string.replace(unformatted_msg__35799__auto__,/^.*?\n/,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(qleft__35796__auto__)," => ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(qright__35797__auto__)].join(''));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(result__35798__auto__),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35797__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),qleft__35796__auto__,new cljs.core.Keyword(null,"message","message",-406056002),msg__35800__auto__], null);
})(),new cljs.core.Keyword(null,"expected","expected",1583670997),"9")),(function (___31809__auto____$6){
return promesa.protocols._promise(new cljs.core.Keyword(null,"done","done",-889844188));
}));
}));
}));
}));
})));
}));
}));
}));
})),(function() { 
var G__78448__delegate = function (___36014__auto__){
return cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
};
var G__78448 = function (var_args){
var ___36014__auto__ = null;
if (arguments.length > 0) {
var G__78451__i = 0, G__78451__a = new Array(arguments.length -  0);
while (G__78451__i < G__78451__a.length) {G__78451__a[G__78451__i] = arguments[G__78451__i + 0]; ++G__78451__i;}
  ___36014__auto__ = new cljs.core.IndexedSeq(G__78451__a,0,null);
} 
return G__78448__delegate.call(this,___36014__auto__);};
G__78448.cljs$lang$maxFixedArity = 0;
G__78448.cljs$lang$applyTo = (function (arglist__78452){
var ___36014__auto__ = cljs.core.seq(arglist__78452);
return G__78448__delegate(___36014__auto__);
});
G__78448.cljs$core$IFn$_invoke$arity$variadic = G__78448__delegate;
return G__78448;
})()
),(function (___31809__auto____$3){
return promesa.protocols._bind(promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._bind(null,(function (___31810__auto____$1){
return promesa.protocols._bind(cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["displays booleans"], 0)),(function (___31809__auto____$4){
return promesa.protocols._bind((function (){
repl_tooling.integration.fake_editor.type_and_eval("true");

return promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(repl_tooling.integration.fake_editor.change_result_p(),(function (res__71895__auto__){
return promesa.protocols._bind(null,(function (___31810__auto____$2){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto____$1){
return promesa.protocols._bind(check.async.to_promise(clojure.string.replace(res__71895__auto__,/(\n|\s+)+/," ")),(function (left_76698){
return promesa.protocols._bind(check.async.to_promise("true"),(function (right_76699){
return promesa.protocols._bind(null,(function (___31810__auto____$3){
return promesa.protocols._bind(cljs.test.do_report(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var lft__35783__auto__ = left_76698;
var rgt__35784__auto__ = right_76699;
var qleft__35785__auto__ = new cljs.core.Symbol(null,"left-76698","left-76698",-1896974177,null);
var qright__35786__auto__ = new cljs.core.Symbol(null,"right-76699","right-76699",-1925916902,null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})(),new cljs.core.Keyword(null,"expected","expected",1583670997),"true")),(function (___31809__auto____$5){
return promesa.protocols._promise(new cljs.core.Keyword(null,"done","done",-889844188));
}));
}));
}));
}));
})));
}));
}));
}));
})()
,(function (___31809__auto____$5){
return promesa.protocols._bind((function (){
repl_tooling.integration.fake_editor.type_and_eval("false");

return promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(repl_tooling.integration.fake_editor.change_result_p(),(function (res__71895__auto__){
return promesa.protocols._bind(null,(function (___31810__auto____$2){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto____$1){
return promesa.protocols._bind(check.async.to_promise(clojure.string.replace(res__71895__auto__,/(\n|\s+)+/," ")),(function (left_76788){
return promesa.protocols._bind(check.async.to_promise("false"),(function (right_76789){
return promesa.protocols._bind(null,(function (___31810__auto____$3){
return promesa.protocols._bind(cljs.test.do_report(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var lft__35783__auto__ = left_76788;
var rgt__35784__auto__ = right_76789;
var qleft__35785__auto__ = new cljs.core.Symbol(null,"left-76788","left-76788",-1019988270,null);
var qright__35786__auto__ = new cljs.core.Symbol(null,"right-76789","right-76789",351057567,null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})(),new cljs.core.Keyword(null,"expected","expected",1583670997),"false")),(function (___31809__auto____$6){
return promesa.protocols._promise(new cljs.core.Keyword(null,"done","done",-889844188));
}));
}));
}));
}));
})));
}));
}));
}));
})()
,(function (___31809__auto____$6){
return promesa.protocols._promise((function (){
repl_tooling.integration.fake_editor.type_and_eval("nil");

return promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(repl_tooling.integration.fake_editor.change_result_p(),(function (res__71895__auto__){
return promesa.protocols._bind(null,(function (___31810__auto____$2){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto____$1){
return promesa.protocols._bind(check.async.to_promise(clojure.string.replace(res__71895__auto__,/(\n|\s+)+/," ")),(function (left_76900){
return promesa.protocols._bind(check.async.to_promise("nil"),(function (right_76901){
return promesa.protocols._bind(null,(function (___31810__auto____$3){
return promesa.protocols._bind(cljs.test.do_report(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var lft__35783__auto__ = left_76900;
var rgt__35784__auto__ = right_76901;
var qleft__35785__auto__ = new cljs.core.Symbol(null,"left-76900","left-76900",-1086218789,null);
var qright__35786__auto__ = new cljs.core.Symbol(null,"right-76901","right-76901",-2014594818,null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})(),new cljs.core.Keyword(null,"expected","expected",1583670997),"nil")),(function (___31809__auto____$7){
return promesa.protocols._promise(new cljs.core.Keyword(null,"done","done",-889844188));
}));
}));
}));
}));
})));
}));
}));
}));
})()
);
}));
}));
}));
})),(function() { 
var G__78490__delegate = function (___36014__auto__){
return cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
};
var G__78490 = function (var_args){
var ___36014__auto__ = null;
if (arguments.length > 0) {
var G__78491__i = 0, G__78491__a = new Array(arguments.length -  0);
while (G__78491__i < G__78491__a.length) {G__78491__a[G__78491__i] = arguments[G__78491__i + 0]; ++G__78491__i;}
  ___36014__auto__ = new cljs.core.IndexedSeq(G__78491__a,0,null);
} 
return G__78490__delegate.call(this,___36014__auto__);};
G__78490.cljs$lang$maxFixedArity = 0;
G__78490.cljs$lang$applyTo = (function (arglist__78493){
var ___36014__auto__ = cljs.core.seq(arglist__78493);
return G__78490__delegate(___36014__auto__);
});
G__78490.cljs$core$IFn$_invoke$arity$variadic = G__78490__delegate;
return G__78490;
})()
),(function (___31809__auto____$4){
return promesa.protocols._bind(promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._bind(null,(function (___31810__auto____$1){
return promesa.protocols._bind(cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["displays UUIDs"], 0)),(function (___31809__auto____$5){
return promesa.protocols._promise((function (){
repl_tooling.integration.fake_editor.type_and_eval("(java.util.UUID/fromString \"00000000-0000-0000-0000-000000000000\")");

return promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(repl_tooling.integration.fake_editor.change_result_p(),(function (res__71895__auto__){
return promesa.protocols._bind(null,(function (___31810__auto____$2){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto____$1){
return promesa.protocols._bind(check.async.to_promise(clojure.string.replace(res__71895__auto__,/(\n|\s+)+/," ")),(function (left_77065){
return promesa.protocols._bind(check.async.to_promise("#uuid \"00000000-0000-0000-0000-000000000000\""),(function (right_77066){
return promesa.protocols._bind(null,(function (___31810__auto____$3){
return promesa.protocols._bind(cljs.test.do_report(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var lft__35783__auto__ = left_77065;
var rgt__35784__auto__ = right_77066;
var qleft__35785__auto__ = new cljs.core.Symbol(null,"left-77065","left-77065",1006795628,null);
var qright__35786__auto__ = new cljs.core.Symbol(null,"right-77066","right-77066",720553622,null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})(),new cljs.core.Keyword(null,"expected","expected",1583670997),"#uuid \"00000000-0000-0000-0000-000000000000\"")),(function (___31809__auto____$6){
return promesa.protocols._promise(new cljs.core.Keyword(null,"done","done",-889844188));
}));
}));
}));
}));
})));
}));
}));
}));
})()
);
}));
})),(function() { 
var G__78505__delegate = function (___36014__auto__){
return cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
};
var G__78505 = function (var_args){
var ___36014__auto__ = null;
if (arguments.length > 0) {
var G__78506__i = 0, G__78506__a = new Array(arguments.length -  0);
while (G__78506__i < G__78506__a.length) {G__78506__a[G__78506__i] = arguments[G__78506__i + 0]; ++G__78506__i;}
  ___36014__auto__ = new cljs.core.IndexedSeq(G__78506__a,0,null);
} 
return G__78505__delegate.call(this,___36014__auto__);};
G__78505.cljs$lang$maxFixedArity = 0;
G__78505.cljs$lang$applyTo = (function (arglist__78507){
var ___36014__auto__ = cljs.core.seq(arglist__78507);
return G__78505__delegate(___36014__auto__);
});
G__78505.cljs$core$IFn$_invoke$arity$variadic = G__78505__delegate;
return G__78505;
})()
),(function (___31809__auto____$5){
return promesa.protocols._bind(promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._bind(null,(function (___31810__auto____$1){
return promesa.protocols._bind(cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["captures STDOUT"], 0)),(function (___31809__auto____$6){
return promesa.protocols._bind(repl_tooling.integration.fake_editor.type_and_eval("(println :FOOBAR)"),(function (___31809__auto____$7){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(check.async.to_promise(repl_tooling.integration.fake_editor.change_stdout_p()),(function (left_77121){
return promesa.protocols._bind(check.async.to_promise(/:FOOBAR/),(function (right_77122){
return promesa.protocols._bind(null,(function (___31810__auto____$2){
return promesa.protocols._bind(cljs.test.do_report(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var lft__35794__auto__ = left_77121;
var rgt__35795__auto__ = right_77122;
var qleft__35796__auto__ = new cljs.core.Symbol(null,"left-77121","left-77121",-94527686,null);
var qright__35797__auto__ = new cljs.core.Symbol(null,"right-77122","right-77122",-1977698572,null);
var result__35798__auto__ = expectations.compare_expr.cljs$core$IFn$_invoke$arity$4(rgt__35795__auto__,lft__35794__auto__,qright__35797__auto__,qleft__35796__auto__);
var unformatted_msg__35799__auto__ = expectations.__GT_failure_message(result__35798__auto__);
var msg__35800__auto__ = clojure.string.replace(unformatted_msg__35799__auto__,/^.*?\n/,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(qleft__35796__auto__)," => ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(qright__35797__auto__)].join(''));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(result__35798__auto__),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35797__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),qleft__35796__auto__,new cljs.core.Keyword(null,"message","message",-406056002),msg__35800__auto__], null);
})(),new cljs.core.Keyword(null,"expected","expected",1583670997),/:FOOBAR/)),(function (___31809__auto____$8){
return promesa.protocols._promise(new cljs.core.Keyword(null,"done","done",-889844188));
}));
}));
}));
}));
})));
}));
}));
})),(function() { 
var G__78513__delegate = function (___36014__auto__){
return cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
};
var G__78513 = function (var_args){
var ___36014__auto__ = null;
if (arguments.length > 0) {
var G__78514__i = 0, G__78514__a = new Array(arguments.length -  0);
while (G__78514__i < G__78514__a.length) {G__78514__a[G__78514__i] = arguments[G__78514__i + 0]; ++G__78514__i;}
  ___36014__auto__ = new cljs.core.IndexedSeq(G__78514__a,0,null);
} 
return G__78513__delegate.call(this,___36014__auto__);};
G__78513.cljs$lang$maxFixedArity = 0;
G__78513.cljs$lang$applyTo = (function (arglist__78516){
var ___36014__auto__ = cljs.core.seq(arglist__78516);
return G__78513__delegate(___36014__auto__);
});
G__78513.cljs$core$IFn$_invoke$arity$variadic = G__78513__delegate;
return G__78513;
})()
),(function (___31809__auto____$6){
return promesa.protocols._bind(promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._bind(null,(function (___31810__auto____$1){
return promesa.protocols._bind(cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["captures STDERR"], 0)),(function (___31809__auto____$7){
return promesa.protocols._bind(repl_tooling.integration.fake_editor.type_and_eval("(.write *err* \"Error\")"),(function (___31809__auto____$8){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(check.async.to_promise(repl_tooling.integration.fake_editor.change_stderr_p()),(function (left_77124){
return promesa.protocols._bind(check.async.to_promise(/Error/),(function (right_77125){
return promesa.protocols._bind(null,(function (___31810__auto____$2){
return promesa.protocols._bind(cljs.test.do_report(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var lft__35794__auto__ = left_77124;
var rgt__35795__auto__ = right_77125;
var qleft__35796__auto__ = new cljs.core.Symbol(null,"left-77124","left-77124",801867326,null);
var qright__35797__auto__ = new cljs.core.Symbol(null,"right-77125","right-77125",-842059455,null);
var result__35798__auto__ = expectations.compare_expr.cljs$core$IFn$_invoke$arity$4(rgt__35795__auto__,lft__35794__auto__,qright__35797__auto__,qleft__35796__auto__);
var unformatted_msg__35799__auto__ = expectations.__GT_failure_message(result__35798__auto__);
var msg__35800__auto__ = clojure.string.replace(unformatted_msg__35799__auto__,/^.*?\n/,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(qleft__35796__auto__)," => ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(qright__35797__auto__)].join(''));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(result__35798__auto__),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35797__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),qleft__35796__auto__,new cljs.core.Keyword(null,"message","message",-406056002),msg__35800__auto__], null);
})(),new cljs.core.Keyword(null,"expected","expected",1583670997),/Error/)),(function (___31809__auto____$9){
return promesa.protocols._promise(new cljs.core.Keyword(null,"done","done",-889844188));
}));
}));
}));
}));
})));
}));
}));
})),(function() { 
var G__78523__delegate = function (___36014__auto__){
return cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
};
var G__78523 = function (var_args){
var ___36014__auto__ = null;
if (arguments.length > 0) {
var G__78525__i = 0, G__78525__a = new Array(arguments.length -  0);
while (G__78525__i < G__78525__a.length) {G__78525__a[G__78525__i] = arguments[G__78525__i + 0]; ++G__78525__i;}
  ___36014__auto__ = new cljs.core.IndexedSeq(G__78525__a,0,null);
} 
return G__78523__delegate.call(this,___36014__auto__);};
G__78523.cljs$lang$maxFixedArity = 0;
G__78523.cljs$lang$applyTo = (function (arglist__78526){
var ___36014__auto__ = cljs.core.seq(arglist__78526);
return G__78523__delegate(___36014__auto__);
});
G__78523.cljs$core$IFn$_invoke$arity$variadic = G__78523__delegate;
return G__78523;
})()
),(function (___31809__auto____$7){
return promesa.protocols._bind(promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._bind(null,(function (___31810__auto____$1){
return promesa.protocols._bind(cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["detects NS on file"], 0)),(function (___31809__auto____$8){
return promesa.protocols._promise((function (){
repl_tooling.integration.fake_editor.type_and_eval("(do (ns clojure.walk)\n(stringify-keys {:foo 10}))");

return promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(repl_tooling.integration.fake_editor.change_result_p(),(function (res__71895__auto__){
return promesa.protocols._bind(null,(function (___31810__auto____$2){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto____$1){
return promesa.protocols._bind(check.async.to_promise(clojure.string.replace(res__71895__auto__,/(\n|\s+)+/," ")),(function (left_77136){
return promesa.protocols._bind(check.async.to_promise(/\"foo\" 10/),(function (right_77137){
return promesa.protocols._bind(null,(function (___31810__auto____$3){
return promesa.protocols._bind(cljs.test.do_report(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var lft__35783__auto__ = left_77136;
var rgt__35784__auto__ = right_77137;
var qleft__35785__auto__ = new cljs.core.Symbol(null,"left-77136","left-77136",517374828,null);
var qright__35786__auto__ = new cljs.core.Symbol(null,"right-77137","right-77137",-545508005,null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})(),new cljs.core.Keyword(null,"expected","expected",1583670997),/\"foo\" 10/)),(function (___31809__auto____$9){
return promesa.protocols._promise(new cljs.core.Keyword(null,"done","done",-889844188));
}));
}));
}));
}));
})));
}));
}));
}));
})()
);
}));
})),(function() { 
var G__78533__delegate = function (___36014__auto__){
return cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
};
var G__78533 = function (var_args){
var ___36014__auto__ = null;
if (arguments.length > 0) {
var G__78535__i = 0, G__78535__a = new Array(arguments.length -  0);
while (G__78535__i < G__78535__a.length) {G__78535__a[G__78535__i] = arguments[G__78535__i + 0]; ++G__78535__i;}
  ___36014__auto__ = new cljs.core.IndexedSeq(G__78535__a,0,null);
} 
return G__78533__delegate.call(this,___36014__auto__);};
G__78533.cljs$lang$maxFixedArity = 0;
G__78533.cljs$lang$applyTo = (function (arglist__78536){
var ___36014__auto__ = cljs.core.seq(arglist__78536);
return G__78533__delegate(___36014__auto__);
});
G__78533.cljs$core$IFn$_invoke$arity$variadic = G__78533__delegate;
return G__78533;
})()
),(function (___31809__auto____$8){
return promesa.protocols._bind(promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._bind(null,(function (___31810__auto____$1){
return promesa.protocols._bind(cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["evaluates and presents big strings"], 0)),(function (___31809__auto____$9){
return promesa.protocols._bind((function (){
repl_tooling.integration.fake_editor.type_and_eval("(apply str (range 100))");

return promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(repl_tooling.integration.fake_editor.change_result_p(),(function (res__71895__auto__){
return promesa.protocols._bind(null,(function (___31810__auto____$2){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto____$1){
return promesa.protocols._bind(check.async.to_promise(clojure.string.replace(res__71895__auto__,/(\n|\s+)+/," ")),(function (left_77142){
return promesa.protocols._bind(check.async.to_promise(["\"01234567891011121314151617181920212223242526272829","303132333435363738394041424344 ... \""].join('')),(function (right_77143){
return promesa.protocols._bind(null,(function (___31810__auto____$3){
return promesa.protocols._bind(cljs.test.do_report(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var lft__35783__auto__ = left_77142;
var rgt__35784__auto__ = right_77143;
var qleft__35785__auto__ = new cljs.core.Symbol(null,"left-77142","left-77142",-1847446508,null);
var qright__35786__auto__ = new cljs.core.Symbol(null,"right-77143","right-77143",456081064,null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})(),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"\"01234567891011121314151617181920212223242526272829","303132333435363738394041424344 ... \""))),(function (___31809__auto____$10){
return promesa.protocols._promise(new cljs.core.Keyword(null,"done","done",-889844188));
}));
}));
}));
}));
})));
}));
}));
}));
})()
,(function (___31809__auto____$10){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31810__auto____$2){
return promesa.protocols._bind(document.querySelector("#result a:nth-child(n+1)").click(),(function (___31809__auto____$11){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(repl_tooling.integration.fake_editor.change_result_p(),(function (res__71930__auto__){
return promesa.protocols._bind(null,(function (___31810__auto____$3){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto____$1){
return promesa.protocols._bind(check.async.to_promise(clojure.string.replace(res__71930__auto__,/(\n|\s+)+/," ")),(function (left_77144){
return promesa.protocols._bind(check.async.to_promise(["\"0123456789101112131415161718192021222324252627282930313233343","536373839404142434445464748495051525354555657585960616263646566","676869707172737475767778798081828384 ... \""].join('')),(function (right_77145){
return promesa.protocols._bind(null,(function (___31810__auto____$4){
return promesa.protocols._bind(cljs.test.do_report(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var lft__35783__auto__ = left_77144;
var rgt__35784__auto__ = right_77145;
var qleft__35785__auto__ = new cljs.core.Symbol(null,"left-77144","left-77144",-651268201,null);
var qright__35786__auto__ = new cljs.core.Symbol(null,"right-77145","right-77145",1375916893,null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})(),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"\"0123456789101112131415161718192021222324252627282930313233343","536373839404142434445464748495051525354555657585960616263646566","676869707172737475767778798081828384 ... \""))),(function (___31809__auto____$12){
return promesa.protocols._promise(new cljs.core.Keyword(null,"done","done",-889844188));
}));
}));
}));
}));
})));
}));
}));
})));
}));
})));
}));
}));
})),(function() { 
var G__78598__delegate = function (___36014__auto__){
return cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
};
var G__78598 = function (var_args){
var ___36014__auto__ = null;
if (arguments.length > 0) {
var G__78599__i = 0, G__78599__a = new Array(arguments.length -  0);
while (G__78599__i < G__78599__a.length) {G__78599__a[G__78599__i] = arguments[G__78599__i + 0]; ++G__78599__i;}
  ___36014__auto__ = new cljs.core.IndexedSeq(G__78599__a,0,null);
} 
return G__78598__delegate.call(this,___36014__auto__);};
G__78598.cljs$lang$maxFixedArity = 0;
G__78598.cljs$lang$applyTo = (function (arglist__78600){
var ___36014__auto__ = cljs.core.seq(arglist__78600);
return G__78598__delegate(___36014__auto__);
});
G__78598.cljs$core$IFn$_invoke$arity$variadic = G__78598__delegate;
return G__78598;
})()
),(function (___31809__auto____$9){
return promesa.protocols._bind(promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._bind(null,(function (___31810__auto____$1){
return promesa.protocols._bind(cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["evaluates and presents big lists"], 0)),(function (___31809__auto____$10){
return promesa.protocols._bind((function (){
repl_tooling.integration.fake_editor.type_and_eval("(range)");

return promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(repl_tooling.integration.fake_editor.change_result_p(),(function (res__71895__auto__){
return promesa.protocols._bind(null,(function (___31810__auto____$2){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto____$1){
return promesa.protocols._bind(check.async.to_promise(clojure.string.replace(res__71895__auto__,/(\n|\s+)+/," ")),(function (left_77146){
return promesa.protocols._bind(check.async.to_promise("( 0 1 2 3 4 5 6 7 8 9 ... )"),(function (right_77147){
return promesa.protocols._bind(null,(function (___31810__auto____$3){
return promesa.protocols._bind(cljs.test.do_report(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var lft__35783__auto__ = left_77146;
var rgt__35784__auto__ = right_77147;
var qleft__35785__auto__ = new cljs.core.Symbol(null,"left-77146","left-77146",880741556,null);
var qright__35786__auto__ = new cljs.core.Symbol(null,"right-77147","right-77147",-2141652506,null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})(),new cljs.core.Keyword(null,"expected","expected",1583670997),"( 0 1 2 3 4 5 6 7 8 9 ... )")),(function (___31809__auto____$11){
return promesa.protocols._promise(new cljs.core.Keyword(null,"done","done",-889844188));
}));
}));
}));
}));
})));
}));
}));
}));
})()
,(function (___31809__auto____$11){
return promesa.protocols._bind(promesa.protocols._bind(null,(function (___31810__auto____$2){
return promesa.protocols._bind(document.querySelector("#result a:nth-child(n+2)").click(),(function (___31809__auto____$12){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(repl_tooling.integration.fake_editor.change_result_p(),(function (res__71930__auto__){
return promesa.protocols._bind(null,(function (___31810__auto____$3){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto____$1){
return promesa.protocols._bind(check.async.to_promise(clojure.string.replace(res__71930__auto__,/(\n|\s+)+/," ")),(function (left_77155){
return promesa.protocols._bind(check.async.to_promise("( 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 ... )"),(function (right_77156){
return promesa.protocols._bind(null,(function (___31810__auto____$4){
return promesa.protocols._bind(cljs.test.do_report(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var lft__35783__auto__ = left_77155;
var rgt__35784__auto__ = right_77156;
var qleft__35785__auto__ = new cljs.core.Symbol(null,"left-77155","left-77155",-160091908,null);
var qright__35786__auto__ = new cljs.core.Symbol(null,"right-77156","right-77156",-1915070357,null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})(),new cljs.core.Keyword(null,"expected","expected",1583670997),"( 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 ... )")),(function (___31809__auto____$13){
return promesa.protocols._promise(new cljs.core.Keyword(null,"done","done",-889844188));
}));
}));
}));
}));
})));
}));
}));
})));
}));
})),(function (___31809__auto____$12){
return promesa.protocols._bind(promesa.protocols._bind(null,(function (___31810__auto____$2){
return promesa.protocols._bind(document.querySelector("#result a:nth-child(n+1)").click(),(function (___31809__auto____$13){
return promesa.protocols._bind(repl_tooling.integration.fake_editor.change_result_p(),(function (___31809__auto____$14){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(repl_tooling.integration.fake_editor.txt_for_selector("#result .children"),(function (res__71941__auto__){
return promesa.protocols._bind(null,(function (___31810__auto____$3){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto____$1){
return promesa.protocols._bind(check.async.to_promise(clojure.string.replace(res__71941__auto__,/(\n|\s+)+/," ")),(function (left_77189){
return promesa.protocols._bind(check.async.to_promise("0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 ..."),(function (right_77190){
return promesa.protocols._bind(null,(function (___31810__auto____$4){
return promesa.protocols._bind(cljs.test.do_report(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var lft__35783__auto__ = left_77189;
var rgt__35784__auto__ = right_77190;
var qleft__35785__auto__ = new cljs.core.Symbol(null,"left-77189","left-77189",1908333140,null);
var qright__35786__auto__ = new cljs.core.Symbol(null,"right-77190","right-77190",1059154422,null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})(),new cljs.core.Keyword(null,"expected","expected",1583670997),"0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 ...")),(function (___31809__auto____$15){
return promesa.protocols._promise(new cljs.core.Keyword(null,"done","done",-889844188));
}));
}));
}));
}));
})));
}));
}));
})));
}));
}));
})),(function (___31809__auto____$13){
return promesa.protocols._promise(promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._bind(null,(function (___31810__auto____$2){
return promesa.protocols._bind(cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["toggle off"], 0)),(function (___31809__auto____$14){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31810__auto____$3){
return promesa.protocols._bind(document.querySelector("#result a:nth-child(n+1)").click(),(function (___31809__auto____$15){
return promesa.protocols._bind(repl_tooling.integration.fake_editor.change_result_p(),(function (___31809__auto____$16){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(repl_tooling.integration.fake_editor.txt_for_selector("#result .children"),(function (res__71941__auto__){
return promesa.protocols._bind(null,(function (___31810__auto____$4){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto____$1){
return promesa.protocols._bind(check.async.to_promise(clojure.string.replace(res__71941__auto__,/(\n|\s+)+/," ")),(function (left_77200){
return promesa.protocols._bind(check.async.to_promise(""),(function (right_77201){
return promesa.protocols._bind(null,(function (___31810__auto____$5){
return promesa.protocols._bind(cljs.test.do_report(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var lft__35783__auto__ = left_77200;
var rgt__35784__auto__ = right_77201;
var qleft__35785__auto__ = new cljs.core.Symbol(null,"left-77200","left-77200",-1807750994,null);
var qright__35786__auto__ = new cljs.core.Symbol(null,"right-77201","right-77201",-336295390,null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})(),new cljs.core.Keyword(null,"expected","expected",1583670997),"")),(function (___31809__auto____$17){
return promesa.protocols._promise(new cljs.core.Keyword(null,"done","done",-889844188));
}));
}));
}));
}));
})));
}));
}));
})));
}));
}));
})));
}));
})),(function() { 
var G__78620__delegate = function (___36014__auto__){
return cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
};
var G__78620 = function (var_args){
var ___36014__auto__ = null;
if (arguments.length > 0) {
var G__78621__i = 0, G__78621__a = new Array(arguments.length -  0);
while (G__78621__i < G__78621__a.length) {G__78621__a[G__78621__i] = arguments[G__78621__i + 0]; ++G__78621__i;}
  ___36014__auto__ = new cljs.core.IndexedSeq(G__78621__a,0,null);
} 
return G__78620__delegate.call(this,___36014__auto__);};
G__78620.cljs$lang$maxFixedArity = 0;
G__78620.cljs$lang$applyTo = (function (arglist__78622){
var ___36014__auto__ = cljs.core.seq(arglist__78622);
return G__78620__delegate(___36014__auto__);
});
G__78620.cljs$core$IFn$_invoke$arity$variadic = G__78620__delegate;
return G__78620;
})()
));
}));
}));
}));
}));
})),(function() { 
var G__78623__delegate = function (___36014__auto__){
return cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
};
var G__78623 = function (var_args){
var ___36014__auto__ = null;
if (arguments.length > 0) {
var G__78624__i = 0, G__78624__a = new Array(arguments.length -  0);
while (G__78624__i < G__78624__a.length) {G__78624__a[G__78624__i] = arguments[G__78624__i + 0]; ++G__78624__i;}
  ___36014__auto__ = new cljs.core.IndexedSeq(G__78624__a,0,null);
} 
return G__78623__delegate.call(this,___36014__auto__);};
G__78623.cljs$lang$maxFixedArity = 0;
G__78623.cljs$lang$applyTo = (function (arglist__78625){
var ___36014__auto__ = cljs.core.seq(arglist__78625);
return G__78623__delegate(___36014__auto__);
});
G__78623.cljs$core$IFn$_invoke$arity$variadic = G__78623__delegate;
return G__78623;
})()
),(function (___31809__auto____$10){
return promesa.protocols._bind(promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._bind(null,(function (___31810__auto____$1){
return promesa.protocols._bind(cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["evaluates and presents big vectors"], 0)),(function (___31809__auto____$11){
return promesa.protocols._bind((function (){
repl_tooling.integration.fake_editor.type_and_eval("(vec (range 14))");

return promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(repl_tooling.integration.fake_editor.change_result_p(),(function (res__71895__auto__){
return promesa.protocols._bind(null,(function (___31810__auto____$2){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto____$1){
return promesa.protocols._bind(check.async.to_promise(clojure.string.replace(res__71895__auto__,/(\n|\s+)+/," ")),(function (left_77271){
return promesa.protocols._bind(check.async.to_promise("[ 0 1 2 3 4 5 6 7 8 9 ... ]"),(function (right_77272){
return promesa.protocols._bind(null,(function (___31810__auto____$3){
return promesa.protocols._bind(cljs.test.do_report(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var lft__35783__auto__ = left_77271;
var rgt__35784__auto__ = right_77272;
var qleft__35785__auto__ = new cljs.core.Symbol(null,"left-77271","left-77271",1196930605,null);
var qright__35786__auto__ = new cljs.core.Symbol(null,"right-77272","right-77272",1537797089,null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})(),new cljs.core.Keyword(null,"expected","expected",1583670997),"[ 0 1 2 3 4 5 6 7 8 9 ... ]")),(function (___31809__auto____$12){
return promesa.protocols._promise(new cljs.core.Keyword(null,"done","done",-889844188));
}));
}));
}));
}));
})));
}));
}));
}));
})()
,(function (___31809__auto____$12){
return promesa.protocols._bind(promesa.protocols._bind(null,(function (___31810__auto____$2){
return promesa.protocols._bind(document.querySelector("#result a:nth-child(n+2)").click(),(function (___31809__auto____$13){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(repl_tooling.integration.fake_editor.change_result_p(),(function (res__71930__auto__){
return promesa.protocols._bind(null,(function (___31810__auto____$3){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto____$1){
return promesa.protocols._bind(check.async.to_promise(clojure.string.replace(res__71930__auto__,/(\n|\s+)+/," ")),(function (left_77387){
return promesa.protocols._bind(check.async.to_promise("[ 0 1 2 3 4 5 6 7 8 9 10 11 12 13 ]"),(function (right_77388){
return promesa.protocols._bind(null,(function (___31810__auto____$4){
return promesa.protocols._bind(cljs.test.do_report(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var lft__35783__auto__ = left_77387;
var rgt__35784__auto__ = right_77388;
var qleft__35785__auto__ = new cljs.core.Symbol(null,"left-77387","left-77387",-1943673103,null);
var qright__35786__auto__ = new cljs.core.Symbol(null,"right-77388","right-77388",1087778688,null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})(),new cljs.core.Keyword(null,"expected","expected",1583670997),"[ 0 1 2 3 4 5 6 7 8 9 10 11 12 13 ]")),(function (___31809__auto____$14){
return promesa.protocols._promise(new cljs.core.Keyword(null,"done","done",-889844188));
}));
}));
}));
}));
})));
}));
}));
})));
}));
})),(function (___31809__auto____$13){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31810__auto____$2){
return promesa.protocols._bind(document.querySelector("#result a:nth-child(n+1)").click(),(function (___31809__auto____$14){
return promesa.protocols._bind(repl_tooling.integration.fake_editor.change_result_p(),(function (___31809__auto____$15){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(repl_tooling.integration.fake_editor.txt_for_selector("#result .children"),(function (res__71941__auto__){
return promesa.protocols._bind(null,(function (___31810__auto____$3){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto____$1){
return promesa.protocols._bind(check.async.to_promise(clojure.string.replace(res__71941__auto__,/(\n|\s+)+/," ")),(function (left_77534){
return promesa.protocols._bind(check.async.to_promise("0 1 2 3 4 5 6 7 8 9 10 11 12 13"),(function (right_77535){
return promesa.protocols._bind(null,(function (___31810__auto____$4){
return promesa.protocols._bind(cljs.test.do_report(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var lft__35783__auto__ = left_77534;
var rgt__35784__auto__ = right_77535;
var qleft__35785__auto__ = new cljs.core.Symbol(null,"left-77534","left-77534",-1288451915,null);
var qright__35786__auto__ = new cljs.core.Symbol(null,"right-77535","right-77535",-368415798,null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})(),new cljs.core.Keyword(null,"expected","expected",1583670997),"0 1 2 3 4 5 6 7 8 9 10 11 12 13")),(function (___31809__auto____$16){
return promesa.protocols._promise(new cljs.core.Keyword(null,"done","done",-889844188));
}));
}));
}));
}));
})));
}));
}));
})));
}));
}));
})));
}));
}));
}));
})),(function() { 
var G__78644__delegate = function (___36014__auto__){
return cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
};
var G__78644 = function (var_args){
var ___36014__auto__ = null;
if (arguments.length > 0) {
var G__78645__i = 0, G__78645__a = new Array(arguments.length -  0);
while (G__78645__i < G__78645__a.length) {G__78645__a[G__78645__i] = arguments[G__78645__i + 0]; ++G__78645__i;}
  ___36014__auto__ = new cljs.core.IndexedSeq(G__78645__a,0,null);
} 
return G__78644__delegate.call(this,___36014__auto__);};
G__78644.cljs$lang$maxFixedArity = 0;
G__78644.cljs$lang$applyTo = (function (arglist__78646){
var ___36014__auto__ = cljs.core.seq(arglist__78646);
return G__78644__delegate(___36014__auto__);
});
G__78644.cljs$core$IFn$_invoke$arity$variadic = G__78644__delegate;
return G__78644;
})()
),(function (___31809__auto____$11){
return promesa.protocols._bind(promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._bind(null,(function (___31810__auto____$1){
return promesa.protocols._bind(cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["evaluates and presents big sets"], 0)),(function (___31809__auto____$12){
return promesa.protocols._bind((function (){
repl_tooling.integration.fake_editor.type_and_eval("(apply sorted-set (range 14))");

return promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(repl_tooling.integration.fake_editor.change_result_p(),(function (res__71895__auto__){
return promesa.protocols._bind(null,(function (___31810__auto____$2){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto____$1){
return promesa.protocols._bind(check.async.to_promise(clojure.string.replace(res__71895__auto__,/(\n|\s+)+/," ")),(function (left_77645){
return promesa.protocols._bind(check.async.to_promise("#{ 0 1 2 3 4 5 6 7 8 9 ... }"),(function (right_77646){
return promesa.protocols._bind(null,(function (___31810__auto____$3){
return promesa.protocols._bind(cljs.test.do_report(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var lft__35783__auto__ = left_77645;
var rgt__35784__auto__ = right_77646;
var qleft__35785__auto__ = new cljs.core.Symbol(null,"left-77645","left-77645",73434644,null);
var qright__35786__auto__ = new cljs.core.Symbol(null,"right-77646","right-77646",435394081,null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})(),new cljs.core.Keyword(null,"expected","expected",1583670997),"#{ 0 1 2 3 4 5 6 7 8 9 ... }")),(function (___31809__auto____$13){
return promesa.protocols._promise(new cljs.core.Keyword(null,"done","done",-889844188));
}));
}));
}));
}));
})));
}));
}));
}));
})()
,(function (___31809__auto____$13){
return promesa.protocols._bind(promesa.protocols._bind(null,(function (___31810__auto____$2){
return promesa.protocols._bind(document.querySelector("#result a:nth-child(n+2)").click(),(function (___31809__auto____$14){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(repl_tooling.integration.fake_editor.change_result_p(),(function (res__71930__auto__){
return promesa.protocols._bind(null,(function (___31810__auto____$3){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto____$1){
return promesa.protocols._bind(check.async.to_promise(clojure.string.replace(res__71930__auto__,/(\n|\s+)+/," ")),(function (left_77747){
return promesa.protocols._bind(check.async.to_promise("#{ 0 1 2 3 4 5 6 7 8 9 10 11 12 13 }"),(function (right_77748){
return promesa.protocols._bind(null,(function (___31810__auto____$4){
return promesa.protocols._bind(cljs.test.do_report(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var lft__35783__auto__ = left_77747;
var rgt__35784__auto__ = right_77748;
var qleft__35785__auto__ = new cljs.core.Symbol(null,"left-77747","left-77747",-909093984,null);
var qright__35786__auto__ = new cljs.core.Symbol(null,"right-77748","right-77748",-735385545,null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})(),new cljs.core.Keyword(null,"expected","expected",1583670997),"#{ 0 1 2 3 4 5 6 7 8 9 10 11 12 13 }")),(function (___31809__auto____$15){
return promesa.protocols._promise(new cljs.core.Keyword(null,"done","done",-889844188));
}));
}));
}));
}));
})));
}));
}));
})));
}));
})),(function (___31809__auto____$14){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31810__auto____$2){
return promesa.protocols._bind(document.querySelector("#result a:nth-child(n+1)").click(),(function (___31809__auto____$15){
return promesa.protocols._bind(repl_tooling.integration.fake_editor.change_result_p(),(function (___31809__auto____$16){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(repl_tooling.integration.fake_editor.txt_for_selector("#result .children"),(function (res__71941__auto__){
return promesa.protocols._bind(null,(function (___31810__auto____$3){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto____$1){
return promesa.protocols._bind(check.async.to_promise(clojure.string.replace(res__71941__auto__,/(\n|\s+)+/," ")),(function (left_77825){
return promesa.protocols._bind(check.async.to_promise("0 1 2 3 4 5 6 7 8 9 10 11 12 13"),(function (right_77826){
return promesa.protocols._bind(null,(function (___31810__auto____$4){
return promesa.protocols._bind(cljs.test.do_report(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var lft__35783__auto__ = left_77825;
var rgt__35784__auto__ = right_77826;
var qleft__35785__auto__ = new cljs.core.Symbol(null,"left-77825","left-77825",1071819897,null);
var qright__35786__auto__ = new cljs.core.Symbol(null,"right-77826","right-77826",2086420570,null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})(),new cljs.core.Keyword(null,"expected","expected",1583670997),"0 1 2 3 4 5 6 7 8 9 10 11 12 13")),(function (___31809__auto____$17){
return promesa.protocols._promise(new cljs.core.Keyword(null,"done","done",-889844188));
}));
}));
}));
}));
})));
}));
}));
})));
}));
}));
})));
}));
}));
}));
})),(function() { 
var G__79753__delegate = function (___36014__auto__){
return cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
};
var G__79753 = function (var_args){
var ___36014__auto__ = null;
if (arguments.length > 0) {
var G__79755__i = 0, G__79755__a = new Array(arguments.length -  0);
while (G__79755__i < G__79755__a.length) {G__79755__a[G__79755__i] = arguments[G__79755__i + 0]; ++G__79755__i;}
  ___36014__auto__ = new cljs.core.IndexedSeq(G__79755__a,0,null);
} 
return G__79753__delegate.call(this,___36014__auto__);};
G__79753.cljs$lang$maxFixedArity = 0;
G__79753.cljs$lang$applyTo = (function (arglist__79760){
var ___36014__auto__ = cljs.core.seq(arglist__79760);
return G__79753__delegate(___36014__auto__);
});
G__79753.cljs$core$IFn$_invoke$arity$variadic = G__79753__delegate;
return G__79753;
})()
),(function (___31809__auto____$12){
return promesa.protocols._bind(promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._bind(null,(function (___31810__auto____$1){
return promesa.protocols._bind(cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["evaluates and presents maps"], 0)),(function (___31809__auto____$13){
return promesa.protocols._bind((function (){
repl_tooling.integration.fake_editor.type_and_eval("(sorted-map :a (range 12) :b 90)");

return promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(repl_tooling.integration.fake_editor.change_result_p(),(function (res__71895__auto__){
return promesa.protocols._bind(null,(function (___31810__auto____$2){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto____$1){
return promesa.protocols._bind(check.async.to_promise(clojure.string.replace(res__71895__auto__,/(\n|\s+)+/," ")),(function (left_77836){
return promesa.protocols._bind(check.async.to_promise("{ :a ( 0 1 2 3 4 5 6 7 8 9 ... ) , :b 90 }"),(function (right_77837){
return promesa.protocols._bind(null,(function (___31810__auto____$3){
return promesa.protocols._bind(cljs.test.do_report(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var lft__35783__auto__ = left_77836;
var rgt__35784__auto__ = right_77837;
var qleft__35785__auto__ = new cljs.core.Symbol(null,"left-77836","left-77836",-874275396,null);
var qright__35786__auto__ = new cljs.core.Symbol(null,"right-77837","right-77837",-998137530,null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})(),new cljs.core.Keyword(null,"expected","expected",1583670997),"{ :a ( 0 1 2 3 4 5 6 7 8 9 ... ) , :b 90 }")),(function (___31809__auto____$14){
return promesa.protocols._promise(new cljs.core.Keyword(null,"done","done",-889844188));
}));
}));
}));
}));
})));
}));
}));
}));
})()
,(function (___31809__auto____$14){
return promesa.protocols._bind(promesa.protocols._bind(null,(function (___31810__auto____$2){
return promesa.protocols._bind(document.querySelector("#result a:nth-child(n+2)").click(),(function (___31809__auto____$15){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(repl_tooling.integration.fake_editor.change_result_p(),(function (res__71930__auto__){
return promesa.protocols._bind(null,(function (___31810__auto____$3){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto____$1){
return promesa.protocols._bind(check.async.to_promise(clojure.string.replace(res__71930__auto__,/(\n|\s+)+/," ")),(function (left_77843){
return promesa.protocols._bind(check.async.to_promise("{ :a ( 0 1 2 3 4 5 6 7 8 9 10 11 ) , :b 90 }"),(function (right_77844){
return promesa.protocols._bind(null,(function (___31810__auto____$4){
return promesa.protocols._bind(cljs.test.do_report(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var lft__35783__auto__ = left_77843;
var rgt__35784__auto__ = right_77844;
var qleft__35785__auto__ = new cljs.core.Symbol(null,"left-77843","left-77843",375635905,null);
var qright__35786__auto__ = new cljs.core.Symbol(null,"right-77844","right-77844",1669060626,null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})(),new cljs.core.Keyword(null,"expected","expected",1583670997),"{ :a ( 0 1 2 3 4 5 6 7 8 9 10 11 ) , :b 90 }")),(function (___31809__auto____$16){
return promesa.protocols._promise(new cljs.core.Keyword(null,"done","done",-889844188));
}));
}));
}));
}));
})));
}));
}));
})));
}));
})),(function (___31809__auto____$15){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31810__auto____$2){
return promesa.protocols._bind(document.querySelector("#result a:nth-child(n+1)").click(),(function (___31809__auto____$16){
return promesa.protocols._bind(repl_tooling.integration.fake_editor.change_result_p(),(function (___31809__auto____$17){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(repl_tooling.integration.fake_editor.txt_for_selector("#result .children"),(function (res__71941__auto__){
return promesa.protocols._bind(null,(function (___31810__auto____$3){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto____$1){
return promesa.protocols._bind(check.async.to_promise(clojure.string.replace(res__71941__auto__,/(\n|\s+)+/," ")),(function (left_77855){
return promesa.protocols._bind(check.async.to_promise("[ :a ( 0 1 2 3 4 5 6 7 8 9 10 11 ) ] [ :b 90 ]"),(function (right_77856){
return promesa.protocols._bind(null,(function (___31810__auto____$4){
return promesa.protocols._bind(cljs.test.do_report(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var lft__35783__auto__ = left_77855;
var rgt__35784__auto__ = right_77856;
var qleft__35785__auto__ = new cljs.core.Symbol(null,"left-77855","left-77855",1016254364,null);
var qright__35786__auto__ = new cljs.core.Symbol(null,"right-77856","right-77856",-1740261779,null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})(),new cljs.core.Keyword(null,"expected","expected",1583670997),"[ :a ( 0 1 2 3 4 5 6 7 8 9 10 11 ) ] [ :b 90 ]")),(function (___31809__auto____$18){
return promesa.protocols._promise(new cljs.core.Keyword(null,"done","done",-889844188));
}));
}));
}));
}));
})));
}));
}));
})));
}));
}));
})));
}));
}));
}));
})),(function() { 
var G__80629__delegate = function (___36014__auto__){
return cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
};
var G__80629 = function (var_args){
var ___36014__auto__ = null;
if (arguments.length > 0) {
var G__80631__i = 0, G__80631__a = new Array(arguments.length -  0);
while (G__80631__i < G__80631__a.length) {G__80631__a[G__80631__i] = arguments[G__80631__i + 0]; ++G__80631__i;}
  ___36014__auto__ = new cljs.core.IndexedSeq(G__80631__a,0,null);
} 
return G__80629__delegate.call(this,___36014__auto__);};
G__80629.cljs$lang$maxFixedArity = 0;
G__80629.cljs$lang$applyTo = (function (arglist__80632){
var ___36014__auto__ = cljs.core.seq(arglist__80632);
return G__80629__delegate(___36014__auto__);
});
G__80629.cljs$core$IFn$_invoke$arity$variadic = G__80629__delegate;
return G__80629;
})()
),(function (___31809__auto____$13){
return promesa.protocols._bind(promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._bind(null,(function (___31810__auto____$1){
return promesa.protocols._bind(cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["evaluates and presents taggable objects"], 0)),(function (___31809__auto____$14){
return promesa.protocols._bind((function (){
repl_tooling.integration.fake_editor.type_and_eval("(do (defrecord Foo [a b]) (->Foo (range 15) 20))");

return promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(repl_tooling.integration.fake_editor.change_result_p(),(function (res__71895__auto__){
return promesa.protocols._bind(null,(function (___31810__auto____$2){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto____$1){
return promesa.protocols._bind(check.async.to_promise(clojure.string.replace(res__71895__auto__,/(\n|\s+)+/," ")),(function (left_77865){
return promesa.protocols._bind(check.async.to_promise(/#.+Foo \{ :a \( 0 1 2 3 4 5 6 7 8 9 ... \) , :b 20 \}/),(function (right_77866){
return promesa.protocols._bind(null,(function (___31810__auto____$3){
return promesa.protocols._bind(cljs.test.do_report(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var lft__35783__auto__ = left_77865;
var rgt__35784__auto__ = right_77866;
var qleft__35785__auto__ = new cljs.core.Symbol(null,"left-77865","left-77865",188841344,null);
var qright__35786__auto__ = new cljs.core.Symbol(null,"right-77866","right-77866",-1366357818,null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})(),new cljs.core.Keyword(null,"expected","expected",1583670997),/#.+Foo \{ :a \( 0 1 2 3 4 5 6 7 8 9 ... \) , :b 20 \}/)),(function (___31809__auto____$15){
return promesa.protocols._promise(new cljs.core.Keyword(null,"done","done",-889844188));
}));
}));
}));
}));
})));
}));
}));
}));
})()
,(function (___31809__auto____$15){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31810__auto____$2){
return promesa.protocols._bind(document.querySelector("#result a:nth-child(n+2)").click(),(function (___31809__auto____$16){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(repl_tooling.integration.fake_editor.change_result_p(),(function (res__71930__auto__){
return promesa.protocols._bind(null,(function (___31810__auto____$3){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto____$1){
return promesa.protocols._bind(check.async.to_promise(clojure.string.replace(res__71930__auto__,/(\n|\s+)+/," ")),(function (left_77870){
return promesa.protocols._bind(check.async.to_promise(/#.+Foo \{ :a \( 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 \) , :b 20 \}/),(function (right_77871){
return promesa.protocols._bind(null,(function (___31810__auto____$4){
return promesa.protocols._bind(cljs.test.do_report(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var lft__35783__auto__ = left_77870;
var rgt__35784__auto__ = right_77871;
var qleft__35785__auto__ = new cljs.core.Symbol(null,"left-77870","left-77870",1412946187,null);
var qright__35786__auto__ = new cljs.core.Symbol(null,"right-77871","right-77871",-1009427449,null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})(),new cljs.core.Keyword(null,"expected","expected",1583670997),/#.+Foo \{ :a \( 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 \) , :b 20 \}/)),(function (___31809__auto____$17){
return promesa.protocols._promise(new cljs.core.Keyword(null,"done","done",-889844188));
}));
}));
}));
}));
})));
}));
}));
})));
}));
})));
}));
}));
})),(function() { 
var G__80725__delegate = function (___36014__auto__){
return cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
};
var G__80725 = function (var_args){
var ___36014__auto__ = null;
if (arguments.length > 0) {
var G__80732__i = 0, G__80732__a = new Array(arguments.length -  0);
while (G__80732__i < G__80732__a.length) {G__80732__a[G__80732__i] = arguments[G__80732__i + 0]; ++G__80732__i;}
  ___36014__auto__ = new cljs.core.IndexedSeq(G__80732__a,0,null);
} 
return G__80725__delegate.call(this,___36014__auto__);};
G__80725.cljs$lang$maxFixedArity = 0;
G__80725.cljs$lang$applyTo = (function (arglist__80733){
var ___36014__auto__ = cljs.core.seq(arglist__80733);
return G__80725__delegate(___36014__auto__);
});
G__80725.cljs$core$IFn$_invoke$arity$variadic = G__80725__delegate;
return G__80725;
})()
),(function (___31809__auto____$14){
return promesa.protocols._bind(promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._bind(null,(function (___31810__auto____$1){
return promesa.protocols._bind(cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["evaluates and presents classes"], 0)),(function (___31809__auto____$15){
return promesa.protocols._promise((function (){
repl_tooling.integration.fake_editor.type_and_eval("(ns user) Object");

return promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(repl_tooling.integration.fake_editor.change_result_p(),(function (res__71895__auto__){
return promesa.protocols._bind(null,(function (___31810__auto____$2){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto____$1){
return promesa.protocols._bind(check.async.to_promise(clojure.string.replace(res__71895__auto__,/(\n|\s+)+/," ")),(function (left_77893){
return promesa.protocols._bind(check.async.to_promise("java.lang.Object ..."),(function (right_77894){
return promesa.protocols._bind(null,(function (___31810__auto____$3){
return promesa.protocols._bind(cljs.test.do_report(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var lft__35783__auto__ = left_77893;
var rgt__35784__auto__ = right_77894;
var qleft__35785__auto__ = new cljs.core.Symbol(null,"left-77893","left-77893",-1317664379,null);
var qright__35786__auto__ = new cljs.core.Symbol(null,"right-77894","right-77894",-1992799348,null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})(),new cljs.core.Keyword(null,"expected","expected",1583670997),"java.lang.Object ...")),(function (___31809__auto____$16){
return promesa.protocols._promise(new cljs.core.Keyword(null,"done","done",-889844188));
}));
}));
}));
}));
})));
}));
}));
}));
})()
);
}));
})),(function() { 
var G__80769__delegate = function (___36014__auto__){
return cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
};
var G__80769 = function (var_args){
var ___36014__auto__ = null;
if (arguments.length > 0) {
var G__80770__i = 0, G__80770__a = new Array(arguments.length -  0);
while (G__80770__i < G__80770__a.length) {G__80770__a[G__80770__i] = arguments[G__80770__i + 0]; ++G__80770__i;}
  ___36014__auto__ = new cljs.core.IndexedSeq(G__80770__a,0,null);
} 
return G__80769__delegate.call(this,___36014__auto__);};
G__80769.cljs$lang$maxFixedArity = 0;
G__80769.cljs$lang$applyTo = (function (arglist__80771){
var ___36014__auto__ = cljs.core.seq(arglist__80771);
return G__80769__delegate(___36014__auto__);
});
G__80769.cljs$core$IFn$_invoke$arity$variadic = G__80769__delegate;
return G__80769;
})()
),(function (___31809__auto____$15){
return promesa.protocols._bind(promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._bind(null,(function (___31810__auto____$1){
return promesa.protocols._bind(cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["evaluates inner browseable structures"], 0)),(function (___31809__auto____$16){
return promesa.protocols._promise((function (){
repl_tooling.integration.fake_editor.type_and_eval("(->> (range 95 100)\n     (map #(vector (symbol (apply str (range %)))\n                   (tagged-literal 'foobar.baz/lolnein (doto (java.util.LinkedList.)\n                                                             (.add %)\n                                                             (.add %)))))\n     (into {}))");

return promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(repl_tooling.integration.fake_editor.change_result_p(),(function (res__71895__auto__){
return promesa.protocols._bind(null,(function (___31810__auto____$2){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto____$1){
return promesa.protocols._bind(check.async.to_promise(clojure.string.replace(res__71895__auto__,/(\n|\s+)+/," ")),(function (left_77917){
return promesa.protocols._bind(check.async.to_promise(/#foobar.baz\/lolnein \.\.\./),(function (right_77918){
return promesa.protocols._bind(null,(function (___31810__auto____$3){
return promesa.protocols._bind(cljs.test.do_report(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var lft__35783__auto__ = left_77917;
var rgt__35784__auto__ = right_77918;
var qleft__35785__auto__ = new cljs.core.Symbol(null,"left-77917","left-77917",-486722980,null);
var qright__35786__auto__ = new cljs.core.Symbol(null,"right-77918","right-77918",1152306555,null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})(),new cljs.core.Keyword(null,"expected","expected",1583670997),/#foobar.baz\/lolnein \.\.\./)),(function (___31809__auto____$17){
return promesa.protocols._promise(new cljs.core.Keyword(null,"done","done",-889844188));
}));
}));
}));
}));
})));
}));
}));
}));
})()
);
}));
})),(function() { 
var G__80773__delegate = function (___36014__auto__){
return cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
};
var G__80773 = function (var_args){
var ___36014__auto__ = null;
if (arguments.length > 0) {
var G__80774__i = 0, G__80774__a = new Array(arguments.length -  0);
while (G__80774__i < G__80774__a.length) {G__80774__a[G__80774__i] = arguments[G__80774__i + 0]; ++G__80774__i;}
  ___36014__auto__ = new cljs.core.IndexedSeq(G__80774__a,0,null);
} 
return G__80773__delegate.call(this,___36014__auto__);};
G__80773.cljs$lang$maxFixedArity = 0;
G__80773.cljs$lang$applyTo = (function (arglist__80775){
var ___36014__auto__ = cljs.core.seq(arglist__80775);
return G__80773__delegate(___36014__auto__);
});
G__80773.cljs$core$IFn$_invoke$arity$variadic = G__80773__delegate;
return G__80773;
})()
),(function (___31809__auto____$16){
return promesa.protocols._bind(repl_tooling.integration.clojure_ui.click_chevron((0)),(function (___31809__auto____$17){
return promesa.protocols._bind(repl_tooling.integration.fake_editor.change_result_p(),(function (___31809__auto____$18){
return promesa.protocols._bind(promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._bind(null,(function (___31810__auto____$1){
return promesa.protocols._bind(cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["map is too deep, we show just the ellision for object"], 0)),(function (___31809__auto____$19){
return promesa.protocols._bind(repl_tooling.integration.clojure_ui.click_chevron((5)),(function (___31809__auto____$20){
return promesa.protocols._bind(repl_tooling.integration.fake_editor.change_result_p(),(function (___31809__auto____$21){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(check.async.to_promise(clojure.string.replace(repl_tooling.integration.fake_editor.txt_for_selector("#result div:nth-child(5) div:nth-child(2) div.tagged"),/(\n|\s+)+/," ")),(function (left_77935){
return promesa.protocols._bind(check.async.to_promise(/#foobar.baz\/lolnein \.\.\./),(function (right_77936){
return promesa.protocols._bind(null,(function (___31810__auto____$2){
return promesa.protocols._bind(cljs.test.do_report(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var lft__35794__auto__ = left_77935;
var rgt__35795__auto__ = right_77936;
var qleft__35796__auto__ = new cljs.core.Symbol(null,"left-77935","left-77935",1758079032,null);
var qright__35797__auto__ = new cljs.core.Symbol(null,"right-77936","right-77936",2034775808,null);
var result__35798__auto__ = expectations.compare_expr.cljs$core$IFn$_invoke$arity$4(rgt__35795__auto__,lft__35794__auto__,qright__35797__auto__,qleft__35796__auto__);
var unformatted_msg__35799__auto__ = expectations.__GT_failure_message(result__35798__auto__);
var msg__35800__auto__ = clojure.string.replace(unformatted_msg__35799__auto__,/^.*?\n/,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(qleft__35796__auto__)," => ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(qright__35797__auto__)].join(''));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(result__35798__auto__),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35797__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),qleft__35796__auto__,new cljs.core.Keyword(null,"message","message",-406056002),msg__35800__auto__], null);
})(),new cljs.core.Keyword(null,"expected","expected",1583670997),/#foobar.baz\/lolnein \.\.\./)),(function (___31809__auto____$22){
return promesa.protocols._promise(new cljs.core.Keyword(null,"done","done",-889844188));
}));
}));
}));
}));
})));
}));
}));
}));
})),(function() { 
var G__80780__delegate = function (___36014__auto__){
return cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
};
var G__80780 = function (var_args){
var ___36014__auto__ = null;
if (arguments.length > 0) {
var G__80782__i = 0, G__80782__a = new Array(arguments.length -  0);
while (G__80782__i < G__80782__a.length) {G__80782__a[G__80782__i] = arguments[G__80782__i + 0]; ++G__80782__i;}
  ___36014__auto__ = new cljs.core.IndexedSeq(G__80782__a,0,null);
} 
return G__80780__delegate.call(this,___36014__auto__);};
G__80780.cljs$lang$maxFixedArity = 0;
G__80780.cljs$lang$applyTo = (function (arglist__80783){
var ___36014__auto__ = cljs.core.seq(arglist__80783);
return G__80780__delegate(___36014__auto__);
});
G__80780.cljs$core$IFn$_invoke$arity$variadic = G__80780__delegate;
return G__80780;
})()
),(function (___31809__auto____$19){
return promesa.protocols._bind(promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._bind(null,(function (___31810__auto____$1){
return promesa.protocols._bind(cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["clicking the ellision for object should render its representation"], 0)),(function (___31809__auto____$20){
return promesa.protocols._bind((function (){var G__77949 = document;
var G__77949__$1 = (((G__77949 == null))?null:G__77949.querySelector(".children .children div:nth-child(2) div div a"));
if((G__77949__$1 == null)){
return null;
} else {
return G__77949__$1.click();
}
})(),(function (___31809__auto____$21){
return promesa.protocols._bind(repl_tooling.integration.fake_editor.wait_for_p((function (){
return repl_tooling.integration.clojure_ui.click_chevron((6));
})),(function (___31809__auto____$22){
return promesa.protocols._bind(repl_tooling.integration.fake_editor.change_result_p(),(function (___31809__auto____$23){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(check.async.to_promise(clojure.string.replace(repl_tooling.integration.fake_editor.txt_for_selector("#result .children div.tag:nth-child(2)"),/(\n|\s+)+/," ")),(function (left_77951){
return promesa.protocols._bind(check.async.to_promise(/\( 99 99 \)/),(function (right_77952){
return promesa.protocols._bind(null,(function (___31810__auto____$2){
return promesa.protocols._bind(cljs.test.do_report(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var lft__35794__auto__ = left_77951;
var rgt__35795__auto__ = right_77952;
var qleft__35796__auto__ = new cljs.core.Symbol(null,"left-77951","left-77951",-927340852,null);
var qright__35797__auto__ = new cljs.core.Symbol(null,"right-77952","right-77952",-2015382764,null);
var result__35798__auto__ = expectations.compare_expr.cljs$core$IFn$_invoke$arity$4(rgt__35795__auto__,lft__35794__auto__,qright__35797__auto__,qleft__35796__auto__);
var unformatted_msg__35799__auto__ = expectations.__GT_failure_message(result__35798__auto__);
var msg__35800__auto__ = clojure.string.replace(unformatted_msg__35799__auto__,/^.*?\n/,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(qleft__35796__auto__)," => ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(qright__35797__auto__)].join(''));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(result__35798__auto__),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35797__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),qleft__35796__auto__,new cljs.core.Keyword(null,"message","message",-406056002),msg__35800__auto__], null);
})(),new cljs.core.Keyword(null,"expected","expected",1583670997),/\( 99 99 \)/)),(function (___31809__auto____$24){
return promesa.protocols._promise(new cljs.core.Keyword(null,"done","done",-889844188));
}));
}));
}));
}));
})));
}));
}));
}));
}));
})),(function() { 
var G__80786__delegate = function (___36014__auto__){
return cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
};
var G__80786 = function (var_args){
var ___36014__auto__ = null;
if (arguments.length > 0) {
var G__80787__i = 0, G__80787__a = new Array(arguments.length -  0);
while (G__80787__i < G__80787__a.length) {G__80787__a[G__80787__i] = arguments[G__80787__i + 0]; ++G__80787__i;}
  ___36014__auto__ = new cljs.core.IndexedSeq(G__80787__a,0,null);
} 
return G__80786__delegate.call(this,___36014__auto__);};
G__80786.cljs$lang$maxFixedArity = 0;
G__80786.cljs$lang$applyTo = (function (arglist__80788){
var ___36014__auto__ = cljs.core.seq(arglist__80788);
return G__80786__delegate(___36014__auto__);
});
G__80786.cljs$core$IFn$_invoke$arity$variadic = G__80786__delegate;
return G__80786;
})()
),(function (___31809__auto____$20){
return promesa.protocols._bind(promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._bind(null,(function (___31810__auto____$1){
return promesa.protocols._bind(cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["division by zero renders an exception"], 0)),(function (___31809__auto____$21){
return promesa.protocols._promise((function (){
repl_tooling.integration.fake_editor.type_and_eval("(/ 10 0)");

return promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(repl_tooling.integration.fake_editor.change_result_p(),(function (res__71895__auto__){
return promesa.protocols._bind(null,(function (___31810__auto____$2){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto____$1){
return promesa.protocols._bind(check.async.to_promise(clojure.string.replace(res__71895__auto__,/(\n|\s+)+/," ")),(function (left_77953){
return promesa.protocols._bind(check.async.to_promise(/java.lang.ArithmeticException : \"Divide by zero\"/),(function (right_77954){
return promesa.protocols._bind(null,(function (___31810__auto____$3){
return promesa.protocols._bind(cljs.test.do_report(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var lft__35783__auto__ = left_77953;
var rgt__35784__auto__ = right_77954;
var qleft__35785__auto__ = new cljs.core.Symbol(null,"left-77953","left-77953",-1851515972,null);
var qright__35786__auto__ = new cljs.core.Symbol(null,"right-77954","right-77954",404287527,null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})(),new cljs.core.Keyword(null,"expected","expected",1583670997),/java.lang.ArithmeticException : \"Divide by zero\"/)),(function (___31809__auto____$22){
return promesa.protocols._promise(new cljs.core.Keyword(null,"done","done",-889844188));
}));
}));
}));
}));
})));
}));
}));
}));
})()
);
}));
})),(function() { 
var G__80794__delegate = function (___36014__auto__){
return cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
};
var G__80794 = function (var_args){
var ___36014__auto__ = null;
if (arguments.length > 0) {
var G__80796__i = 0, G__80796__a = new Array(arguments.length -  0);
while (G__80796__i < G__80796__a.length) {G__80796__a[G__80796__i] = arguments[G__80796__i + 0]; ++G__80796__i;}
  ___36014__auto__ = new cljs.core.IndexedSeq(G__80796__a,0,null);
} 
return G__80794__delegate.call(this,___36014__auto__);};
G__80794.cljs$lang$maxFixedArity = 0;
G__80794.cljs$lang$applyTo = (function (arglist__80797){
var ___36014__auto__ = cljs.core.seq(arglist__80797);
return G__80794__delegate(___36014__auto__);
});
G__80794.cljs$core$IFn$_invoke$arity$variadic = G__80794__delegate;
return G__80794;
})()
),(function (___31809__auto____$21){
return promesa.protocols._promise(promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._bind(null,(function (___31810__auto____$1){
return promesa.protocols._bind(cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["shows exceptions on unidentified elements"], 0)),(function (___31809__auto____$22){
return promesa.protocols._promise((function (){
repl_tooling.integration.fake_editor.type_and_eval("(SomeUnknownObject.)");

return promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(repl_tooling.integration.fake_editor.change_result_p(),(function (res__71895__auto__){
return promesa.protocols._bind(null,(function (___31810__auto____$2){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto____$1){
return promesa.protocols._bind(check.async.to_promise(clojure.string.replace(res__71895__auto__,/(\n|\s+)+/," ")),(function (left_77955){
return promesa.protocols._bind(check.async.to_promise(/Unable to resolve classname: SomeUnknownObject/),(function (right_77956){
return promesa.protocols._bind(null,(function (___31810__auto____$3){
return promesa.protocols._bind(cljs.test.do_report(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var lft__35783__auto__ = left_77955;
var rgt__35784__auto__ = right_77956;
var qleft__35785__auto__ = new cljs.core.Symbol(null,"left-77955","left-77955",-871328415,null);
var qright__35786__auto__ = new cljs.core.Symbol(null,"right-77956","right-77956",-1774506851,null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})(),new cljs.core.Keyword(null,"expected","expected",1583670997),/Unable to resolve classname: SomeUnknownObject/)),(function (___31809__auto____$23){
return promesa.protocols._promise(new cljs.core.Keyword(null,"done","done",-889844188));
}));
}));
}));
}));
})));
}));
}));
}));
})()
);
}));
})),(function() { 
var G__80801__delegate = function (___36014__auto__){
return cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
};
var G__80801 = function (var_args){
var ___36014__auto__ = null;
if (arguments.length > 0) {
var G__80802__i = 0, G__80802__a = new Array(arguments.length -  0);
while (G__80802__i < G__80802__a.length) {G__80802__a[G__80802__i] = arguments[G__80802__i + 0]; ++G__80802__i;}
  ___36014__auto__ = new cljs.core.IndexedSeq(G__80802__a,0,null);
} 
return G__80801__delegate.call(this,___36014__auto__);};
G__80801.cljs$lang$maxFixedArity = 0;
G__80801.cljs$lang$applyTo = (function (arglist__80803){
var ___36014__auto__ = cljs.core.seq(arglist__80803);
return G__80801__delegate(___36014__auto__);
});
G__80801.cljs$core$IFn$_invoke$arity$variadic = G__80801__delegate;
return G__80801;
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
}));
}));
}));
})));
});

(repl_tooling.integration.clojure_ui.repl_evaluation.cljs$lang$var = new cljs.core.Var(function(){return repl_tooling.integration.clojure_ui.repl_evaluation;},new cljs.core.Symbol("repl-tooling.integration.clojure-ui","repl-evaluation","repl-tooling.integration.clojure-ui/repl-evaluation",745927098,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"repl-tooling.integration.clojure-ui","repl-tooling.integration.clojure-ui",-1451094597,null),new cljs.core.Symbol(null,"repl-evaluation","repl-evaluation",734155261,null),"repl_tooling/integration/clojure_ui.cljs",31,1,25,25,cljs.core.List.EMPTY,null,(cljs.core.truth_(repl_tooling.integration.clojure_ui.repl_evaluation)?repl_tooling.integration.clojure_ui.repl_evaluation.cljs$lang$test:null)])));

//# sourceMappingURL=repl_tooling.integration.clojure_ui.js.map
