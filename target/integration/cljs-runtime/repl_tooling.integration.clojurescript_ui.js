goog.provide('repl_tooling.integration.clojurescript_ui');
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"repl_tooling.integration.clojurescript_ui","repl_tooling.integration.clojurescript_ui",-681893786),new cljs.core.Keyword(null,"fake-editor","fake-editor",-2015963141)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"fake-editor",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof repl_tooling !== 'undefined') && (typeof repl_tooling.integration !== 'undefined') && (typeof repl_tooling.integration.clojurescript_ui !== 'undefined') && (typeof repl_tooling.integration.clojurescript_ui.t_repl_tooling$integration$clojurescript_ui73014 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
repl_tooling.integration.clojurescript_ui.t_repl_tooling$integration$clojurescript_ui73014 = (function (meta73015){
this.meta73015 = meta73015;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(repl_tooling.integration.clojurescript_ui.t_repl_tooling$integration$clojurescript_ui73014.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_73016,meta73015__$1){
var self__ = this;
var _73016__$1 = this;
return (new repl_tooling.integration.clojurescript_ui.t_repl_tooling$integration$clojurescript_ui73014(meta73015__$1));
}));

(repl_tooling.integration.clojurescript_ui.t_repl_tooling$integration$clojurescript_ui73014.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_73016){
var self__ = this;
var _73016__$1 = this;
return self__.meta73015;
}));

(repl_tooling.integration.clojurescript_ui.t_repl_tooling$integration$clojurescript_ui73014.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(repl_tooling.integration.clojurescript_ui.t_repl_tooling$integration$clojurescript_ui73014.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__54113__auto__,devcard_opts__54114__auto__){
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

(repl_tooling.integration.clojurescript_ui.t_repl_tooling$integration$clojurescript_ui73014.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta73015","meta73015",-1768336936,null)], null);
}));

(repl_tooling.integration.clojurescript_ui.t_repl_tooling$integration$clojurescript_ui73014.cljs$lang$type = true);

(repl_tooling.integration.clojurescript_ui.t_repl_tooling$integration$clojurescript_ui73014.cljs$lang$ctorStr = "repl-tooling.integration.clojurescript-ui/t_repl_tooling$integration$clojurescript_ui73014");

(repl_tooling.integration.clojurescript_ui.t_repl_tooling$integration$clojurescript_ui73014.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"repl-tooling.integration.clojurescript-ui/t_repl_tooling$integration$clojurescript_ui73014");
}));

/**
 * Positional factory function for repl-tooling.integration.clojurescript-ui/t_repl_tooling$integration$clojurescript_ui73014.
 */
repl_tooling.integration.clojurescript_ui.__GT_t_repl_tooling$integration$clojurescript_ui73014 = (function repl_tooling$integration$clojurescript_ui$__GT_t_repl_tooling$integration$clojurescript_ui73014(meta73015){
return (new repl_tooling.integration.clojurescript_ui.t_repl_tooling$integration$clojurescript_ui73014(meta73015));
});

}

return (new repl_tooling.integration.clojurescript_ui.t_repl_tooling$integration$clojurescript_ui73014(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),repl_tooling.integration.fake_editor.state,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
repl_tooling.integration.clojurescript_ui.click_selector = (function repl_tooling$integration$clojurescript_ui$click_selector(sel){
return document.querySelector(sel).click();
});
(devcards.core.test_timeout = (20000));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"repl_tooling.integration.clojurescript_ui","repl_tooling.integration.clojurescript_ui",-681893786),new cljs.core.Keyword(null,"repl-evaluation","repl-evaluation",-906376266)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"repl-evaluation",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){
return check.async.async_test_STAR_("ClojureScript REPL evaluation",(8000),(function (){
return repl_tooling.integration.fake_editor.disconnect_BANG_();
}),promesa.protocols._bind(null,(function (___31810__auto__){
return promesa.protocols._bind(repl_tooling.integration.fake_editor.connect_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"notify","notify",-1256867814),cljs.core.prn], null)),(function (___31809__auto__){
return promesa.protocols._bind(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(repl_tooling.integration.fake_editor.state,cljs.core.assoc,new cljs.core.Keyword(null,"filename","filename",-1428840783),"foo.cljs"),(function (___31809__auto____$1){
return promesa.protocols._bind(repl_tooling.integration.fake_editor.run_command_BANG_(new cljs.core.Keyword(null,"connect-embedded","connect-embedded",610098730)),(function (___31809__auto____$2){
return promesa.protocols._bind(promesa.core.delay.cljs$core$IFn$_invoke$arity$1((1000)),(function (___31809__auto____$3){
return promesa.protocols._bind(promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._bind(null,(function (___31810__auto____$1){
return promesa.protocols._bind(cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["evaluation works for nil"], 0)),(function (___31809__auto____$4){
return promesa.protocols._bind(repl_tooling.integration.fake_editor.type_and_eval("nil"),(function (___31809__auto____$5){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(check.async.to_promise(repl_tooling.integration.fake_editor.change_result_p()),(function (left_73139){
return promesa.protocols._bind(check.async.to_promise("nil"),(function (right_73140){
return promesa.protocols._bind(null,(function (___31810__auto____$2){
return promesa.protocols._bind(cljs.test.do_report(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var lft__35783__auto__ = left_73139;
var rgt__35784__auto__ = right_73140;
var qleft__35785__auto__ = new cljs.core.Symbol(null,"left-73139","left-73139",79168404,null);
var qright__35786__auto__ = new cljs.core.Symbol(null,"right-73140","right-73140",34659490,null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})(),new cljs.core.Keyword(null,"expected","expected",1583670997),"nil")),(function (___31809__auto____$6){
return promesa.protocols._promise(new cljs.core.Keyword(null,"done","done",-889844188));
}));
}));
}));
}));
})));
}));
}));
})),(function() { 
var G__76004__delegate = function (___36014__auto__){
return cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
};
var G__76004 = function (var_args){
var ___36014__auto__ = null;
if (arguments.length > 0) {
var G__76005__i = 0, G__76005__a = new Array(arguments.length -  0);
while (G__76005__i < G__76005__a.length) {G__76005__a[G__76005__i] = arguments[G__76005__i + 0]; ++G__76005__i;}
  ___36014__auto__ = new cljs.core.IndexedSeq(G__76005__a,0,null);
} 
return G__76004__delegate.call(this,___36014__auto__);};
G__76004.cljs$lang$maxFixedArity = 0;
G__76004.cljs$lang$applyTo = (function (arglist__76006){
var ___36014__auto__ = cljs.core.seq(arglist__76006);
return G__76004__delegate(___36014__auto__);
});
G__76004.cljs$core$IFn$_invoke$arity$variadic = G__76004__delegate;
return G__76004;
})()
),(function (___31809__auto____$4){
return promesa.protocols._bind(promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._bind(null,(function (___31810__auto____$1){
return promesa.protocols._bind(cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["evaluation works, but doesn't print something on STDOUT"], 0)),(function (___31809__auto____$5){
return promesa.protocols._bind(repl_tooling.integration.fake_editor.type_and_eval("(/ 10 0)"),(function (___31809__auto____$6){
return promesa.protocols._bind(promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(check.async.to_promise(repl_tooling.integration.fake_editor.change_result_p()),(function (left_73141){
return promesa.protocols._bind(check.async.to_promise("##Inf"),(function (right_73142){
return promesa.protocols._bind(null,(function (___31810__auto____$2){
return promesa.protocols._bind(cljs.test.do_report(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var lft__35783__auto__ = left_73141;
var rgt__35784__auto__ = right_73142;
var qleft__35785__auto__ = new cljs.core.Symbol(null,"left-73141","left-73141",-651000127,null);
var qright__35786__auto__ = new cljs.core.Symbol(null,"right-73142","right-73142",-669631699,null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})(),new cljs.core.Keyword(null,"expected","expected",1583670997),"##Inf")),(function (___31809__auto____$7){
return promesa.protocols._promise(new cljs.core.Keyword(null,"done","done",-889844188));
}));
}));
}));
}));
})),(function (___31809__auto____$7){
return promesa.protocols._promise((function (){try{var values__9152__auto__ = (new cljs.core.List(null,cljs.core.re_find(/=>/,repl_tooling.integration.fake_editor.txt_for_selector("#stdout")),null,(1),null));
var result__9153__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.not,values__9152__auto__);
if(cljs.core.truth_(result__9153__auto__)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["repl_tooling/integration/clojurescript_ui.cljs",66,new cljs.core.Keyword(null,"pass","pass",1574159993),11,39,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"re-find","re-find",1143444147,null),/=>/,cljs.core.list(new cljs.core.Symbol("fake","txt-for-selector","fake/txt-for-selector",1500946571,null),"#stdout"))),39,cljs.core.cons(new cljs.core.Symbol(null,"not","not",1044554643,null),values__9152__auto__),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["repl_tooling/integration/clojurescript_ui.cljs",66,new cljs.core.Keyword(null,"fail","fail",1706214930),11,39,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"re-find","re-find",1143444147,null),/=>/,cljs.core.list(new cljs.core.Symbol("fake","txt-for-selector","fake/txt-for-selector",1500946571,null),"#stdout"))),39,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"not","not",1044554643,null),values__9152__auto__),null,(1),null)),(2),null)),null]));
}

return result__9153__auto__;
}catch (e73391){var t__9189__auto__ = e73391;
return cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["repl_tooling/integration/clojurescript_ui.cljs",66,new cljs.core.Keyword(null,"error","error",-978969032),11,39,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"re-find","re-find",1143444147,null),/=>/,cljs.core.list(new cljs.core.Symbol("fake","txt-for-selector","fake/txt-for-selector",1500946571,null),"#stdout"))),39,t__9189__auto__,null]));
}})());
}));
}));
}));
})),(function() { 
var G__76012__delegate = function (___36014__auto__){
return cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
};
var G__76012 = function (var_args){
var ___36014__auto__ = null;
if (arguments.length > 0) {
var G__76013__i = 0, G__76013__a = new Array(arguments.length -  0);
while (G__76013__i < G__76013__a.length) {G__76013__a[G__76013__i] = arguments[G__76013__i + 0]; ++G__76013__i;}
  ___36014__auto__ = new cljs.core.IndexedSeq(G__76013__a,0,null);
} 
return G__76012__delegate.call(this,___36014__auto__);};
G__76012.cljs$lang$maxFixedArity = 0;
G__76012.cljs$lang$applyTo = (function (arglist__76014){
var ___36014__auto__ = cljs.core.seq(arglist__76014);
return G__76012__delegate(___36014__auto__);
});
G__76012.cljs$core$IFn$_invoke$arity$variadic = G__76012__delegate;
return G__76012;
})()
),(function (___31809__auto____$5){
return promesa.protocols._bind(promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._bind(null,(function (___31810__auto____$1){
return promesa.protocols._bind(cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["evaluate blocks"], 0)),(function (___31809__auto____$6){
return promesa.protocols._bind(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(repl_tooling.integration.fake_editor.state,cljs.core.assoc,new cljs.core.Keyword(null,"code","code",1586293142),"(+ 1 2)\n\n(+ 2 \n  (+ 3 4))",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(3)], null)], null)], 0)),(function (___31809__auto____$7){
return promesa.protocols._bind(repl_tooling.integration.fake_editor.run_command_BANG_(new cljs.core.Keyword(null,"evaluate-block","evaluate-block",-906759120)),(function (___31809__auto____$8){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(check.async.to_promise(repl_tooling.integration.fake_editor.change_result_p()),(function (left_73467){
return promesa.protocols._bind(check.async.to_promise("7"),(function (right_73468){
return promesa.protocols._bind(null,(function (___31810__auto____$2){
return promesa.protocols._bind(cljs.test.do_report(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var lft__35783__auto__ = left_73467;
var rgt__35784__auto__ = right_73468;
var qleft__35785__auto__ = new cljs.core.Symbol(null,"left-73467","left-73467",20194113,null);
var qright__35786__auto__ = new cljs.core.Symbol(null,"right-73468","right-73468",-1971870745,null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})(),new cljs.core.Keyword(null,"expected","expected",1583670997),"7")),(function (___31809__auto____$9){
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
var G__76017__delegate = function (___36014__auto__){
return cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
};
var G__76017 = function (var_args){
var ___36014__auto__ = null;
if (arguments.length > 0) {
var G__76018__i = 0, G__76018__a = new Array(arguments.length -  0);
while (G__76018__i < G__76018__a.length) {G__76018__a[G__76018__i] = arguments[G__76018__i + 0]; ++G__76018__i;}
  ___36014__auto__ = new cljs.core.IndexedSeq(G__76018__a,0,null);
} 
return G__76017__delegate.call(this,___36014__auto__);};
G__76017.cljs$lang$maxFixedArity = 0;
G__76017.cljs$lang$applyTo = (function (arglist__76019){
var ___36014__auto__ = cljs.core.seq(arglist__76019);
return G__76017__delegate(___36014__auto__);
});
G__76017.cljs$core$IFn$_invoke$arity$variadic = G__76017__delegate;
return G__76017;
})()
),(function (___31809__auto____$6){
return promesa.protocols._bind(promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._bind(null,(function (___31810__auto____$1){
return promesa.protocols._bind(cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["evaluate top blocks"], 0)),(function (___31809__auto____$7){
return promesa.protocols._bind(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(repl_tooling.integration.fake_editor.state,cljs.core.assoc,new cljs.core.Keyword(null,"code","code",1586293142),"(+ 1 2)\n\n(+ 2 \n  (+ 3 4))",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(3)], null)], null)], 0)),(function (___31809__auto____$8){
return promesa.protocols._bind(repl_tooling.integration.fake_editor.run_command_BANG_(new cljs.core.Keyword(null,"evaluate-top-block","evaluate-top-block",-2034693127)),(function (___31809__auto____$9){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(check.async.to_promise(repl_tooling.integration.fake_editor.change_result_p()),(function (left_73556){
return promesa.protocols._bind(check.async.to_promise("9"),(function (right_73557){
return promesa.protocols._bind(null,(function (___31810__auto____$2){
return promesa.protocols._bind(cljs.test.do_report(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var lft__35783__auto__ = left_73556;
var rgt__35784__auto__ = right_73557;
var qleft__35785__auto__ = new cljs.core.Symbol(null,"left-73556","left-73556",218994630,null);
var qright__35786__auto__ = new cljs.core.Symbol(null,"right-73557","right-73557",-2131902241,null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})(),new cljs.core.Keyword(null,"expected","expected",1583670997),"9")),(function (___31809__auto____$10){
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
var G__76021__delegate = function (___36014__auto__){
return cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
};
var G__76021 = function (var_args){
var ___36014__auto__ = null;
if (arguments.length > 0) {
var G__76022__i = 0, G__76022__a = new Array(arguments.length -  0);
while (G__76022__i < G__76022__a.length) {G__76022__a[G__76022__i] = arguments[G__76022__i + 0]; ++G__76022__i;}
  ___36014__auto__ = new cljs.core.IndexedSeq(G__76022__a,0,null);
} 
return G__76021__delegate.call(this,___36014__auto__);};
G__76021.cljs$lang$maxFixedArity = 0;
G__76021.cljs$lang$applyTo = (function (arglist__76023){
var ___36014__auto__ = cljs.core.seq(arglist__76023);
return G__76021__delegate(___36014__auto__);
});
G__76021.cljs$core$IFn$_invoke$arity$variadic = G__76021__delegate;
return G__76021;
})()
),(function (___31809__auto____$7){
return promesa.protocols._bind(promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._bind(null,(function (___31810__auto____$1){
return promesa.protocols._bind(cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["displays booleans"], 0)),(function (___31809__auto____$8){
return promesa.protocols._bind((function (){
repl_tooling.integration.fake_editor.type_and_eval("true");

return promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(repl_tooling.integration.fake_editor.change_result_p(),(function (res__71895__auto__){
return promesa.protocols._bind(null,(function (___31810__auto____$2){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto____$1){
return promesa.protocols._bind(check.async.to_promise(clojure.string.replace(res__71895__auto__,/(\n|\s+)+/," ")),(function (left_73976){
return promesa.protocols._bind(check.async.to_promise("true"),(function (right_73977){
return promesa.protocols._bind(null,(function (___31810__auto____$3){
return promesa.protocols._bind(cljs.test.do_report(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var lft__35783__auto__ = left_73976;
var rgt__35784__auto__ = right_73977;
var qleft__35785__auto__ = new cljs.core.Symbol(null,"left-73976","left-73976",337987797,null);
var qright__35786__auto__ = new cljs.core.Symbol(null,"right-73977","right-73977",-135764423,null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})(),new cljs.core.Keyword(null,"expected","expected",1583670997),"true")),(function (___31809__auto____$9){
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
,(function (___31809__auto____$9){
return promesa.protocols._bind((function (){
repl_tooling.integration.fake_editor.type_and_eval("false");

return promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(repl_tooling.integration.fake_editor.change_result_p(),(function (res__71895__auto__){
return promesa.protocols._bind(null,(function (___31810__auto____$2){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto____$1){
return promesa.protocols._bind(check.async.to_promise(clojure.string.replace(res__71895__auto__,/(\n|\s+)+/," ")),(function (left_74052){
return promesa.protocols._bind(check.async.to_promise("false"),(function (right_74053){
return promesa.protocols._bind(null,(function (___31810__auto____$3){
return promesa.protocols._bind(cljs.test.do_report(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var lft__35783__auto__ = left_74052;
var rgt__35784__auto__ = right_74053;
var qleft__35785__auto__ = new cljs.core.Symbol(null,"left-74052","left-74052",126996320,null);
var qright__35786__auto__ = new cljs.core.Symbol(null,"right-74053","right-74053",970951916,null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})(),new cljs.core.Keyword(null,"expected","expected",1583670997),"false")),(function (___31809__auto____$10){
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
return promesa.protocols._promise((function (){
repl_tooling.integration.fake_editor.type_and_eval("nil");

return promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(repl_tooling.integration.fake_editor.change_result_p(),(function (res__71895__auto__){
return promesa.protocols._bind(null,(function (___31810__auto____$2){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto____$1){
return promesa.protocols._bind(check.async.to_promise(clojure.string.replace(res__71895__auto__,/(\n|\s+)+/," ")),(function (left_74142){
return promesa.protocols._bind(check.async.to_promise("nil"),(function (right_74143){
return promesa.protocols._bind(null,(function (___31810__auto____$3){
return promesa.protocols._bind(cljs.test.do_report(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var lft__35783__auto__ = left_74142;
var rgt__35784__auto__ = right_74143;
var qleft__35785__auto__ = new cljs.core.Symbol(null,"left-74142","left-74142",1677329274,null);
var qright__35786__auto__ = new cljs.core.Symbol(null,"right-74143","right-74143",2022411495,null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})(),new cljs.core.Keyword(null,"expected","expected",1583670997),"nil")),(function (___31809__auto____$11){
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
var G__76032__delegate = function (___36014__auto__){
return cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
};
var G__76032 = function (var_args){
var ___36014__auto__ = null;
if (arguments.length > 0) {
var G__76033__i = 0, G__76033__a = new Array(arguments.length -  0);
while (G__76033__i < G__76033__a.length) {G__76033__a[G__76033__i] = arguments[G__76033__i + 0]; ++G__76033__i;}
  ___36014__auto__ = new cljs.core.IndexedSeq(G__76033__a,0,null);
} 
return G__76032__delegate.call(this,___36014__auto__);};
G__76032.cljs$lang$maxFixedArity = 0;
G__76032.cljs$lang$applyTo = (function (arglist__76034){
var ___36014__auto__ = cljs.core.seq(arglist__76034);
return G__76032__delegate(___36014__auto__);
});
G__76032.cljs$core$IFn$_invoke$arity$variadic = G__76032__delegate;
return G__76032;
})()
),(function (___31809__auto____$8){
return promesa.protocols._bind(promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._bind(null,(function (___31810__auto____$1){
return promesa.protocols._bind(cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["captures STDOUT"], 0)),(function (___31809__auto____$9){
return promesa.protocols._bind(repl_tooling.integration.fake_editor.type_and_eval("(println :FOOBAR)"),(function (___31809__auto____$10){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(check.async.to_promise(repl_tooling.integration.fake_editor.change_stdout_p()),(function (left_74217){
return promesa.protocols._bind(check.async.to_promise(/:FOOBAR/),(function (right_74218){
return promesa.protocols._bind(null,(function (___31810__auto____$2){
return promesa.protocols._bind(cljs.test.do_report(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var lft__35783__auto__ = left_74217;
var rgt__35784__auto__ = right_74218;
var qleft__35785__auto__ = new cljs.core.Symbol(null,"left-74217","left-74217",739628922,null);
var qright__35786__auto__ = new cljs.core.Symbol(null,"right-74218","right-74218",1019920607,null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})(),new cljs.core.Keyword(null,"expected","expected",1583670997),/:FOOBAR/)),(function (___31809__auto____$11){
return promesa.protocols._promise(new cljs.core.Keyword(null,"done","done",-889844188));
}));
}));
}));
}));
})));
}));
}));
})),(function() { 
var G__76038__delegate = function (___36014__auto__){
return cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
};
var G__76038 = function (var_args){
var ___36014__auto__ = null;
if (arguments.length > 0) {
var G__76039__i = 0, G__76039__a = new Array(arguments.length -  0);
while (G__76039__i < G__76039__a.length) {G__76039__a[G__76039__i] = arguments[G__76039__i + 0]; ++G__76039__i;}
  ___36014__auto__ = new cljs.core.IndexedSeq(G__76039__a,0,null);
} 
return G__76038__delegate.call(this,___36014__auto__);};
G__76038.cljs$lang$maxFixedArity = 0;
G__76038.cljs$lang$applyTo = (function (arglist__76040){
var ___36014__auto__ = cljs.core.seq(arglist__76040);
return G__76038__delegate(___36014__auto__);
});
G__76038.cljs$core$IFn$_invoke$arity$variadic = G__76038__delegate;
return G__76038;
})()
),(function (___31809__auto____$9){
return promesa.protocols._bind(promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._bind(null,(function (___31810__auto____$1){
return promesa.protocols._bind(cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["detects NS on file"], 0)),(function (___31809__auto____$10){
return promesa.protocols._bind(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(repl_tooling.integration.fake_editor.state,cljs.core.assoc,new cljs.core.Keyword(null,"code","code",1586293142),"(ns clojure.string)\n(upper-case \"this is upper\")",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null)], null)], 0)),(function (___31809__auto____$11){
return promesa.protocols._bind(repl_tooling.integration.fake_editor.run_command_BANG_(new cljs.core.Keyword(null,"evaluate-block","evaluate-block",-906759120)),(function (___31809__auto____$12){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(check.async.to_promise(repl_tooling.integration.fake_editor.change_result_p()),(function (left_74223){
return promesa.protocols._bind(check.async.to_promise(/THIS IS UPPER/),(function (right_74224){
return promesa.protocols._bind(null,(function (___31810__auto____$2){
return promesa.protocols._bind(cljs.test.do_report(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var lft__35783__auto__ = left_74223;
var rgt__35784__auto__ = right_74224;
var qleft__35785__auto__ = new cljs.core.Symbol(null,"left-74223","left-74223",-944367315,null);
var qright__35786__auto__ = new cljs.core.Symbol(null,"right-74224","right-74224",1354409257,null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})(),new cljs.core.Keyword(null,"expected","expected",1583670997),/THIS IS UPPER/)),(function (___31809__auto____$13){
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
var G__76041__delegate = function (___36014__auto__){
return cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
};
var G__76041 = function (var_args){
var ___36014__auto__ = null;
if (arguments.length > 0) {
var G__76042__i = 0, G__76042__a = new Array(arguments.length -  0);
while (G__76042__i < G__76042__a.length) {G__76042__a[G__76042__i] = arguments[G__76042__i + 0]; ++G__76042__i;}
  ___36014__auto__ = new cljs.core.IndexedSeq(G__76042__a,0,null);
} 
return G__76041__delegate.call(this,___36014__auto__);};
G__76041.cljs$lang$maxFixedArity = 0;
G__76041.cljs$lang$applyTo = (function (arglist__76043){
var ___36014__auto__ = cljs.core.seq(arglist__76043);
return G__76041__delegate(___36014__auto__);
});
G__76041.cljs$core$IFn$_invoke$arity$variadic = G__76041__delegate;
return G__76041;
})()
),(function (___31809__auto____$10){
return promesa.protocols._bind(promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._bind(null,(function (___31810__auto____$1){
return promesa.protocols._bind(cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["displays invalid EDN"], 0)),(function (___31809__auto____$11){
return promesa.protocols._bind((function (){
repl_tooling.integration.fake_editor.type_and_eval("{(keyword \"foo bar\") 10}");

return promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(repl_tooling.integration.fake_editor.change_result_p(),(function (res__71895__auto__){
return promesa.protocols._bind(null,(function (___31810__auto____$2){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto____$1){
return promesa.protocols._bind(check.async.to_promise(clojure.string.replace(res__71895__auto__,/(\n|\s+)+/," ")),(function (left_74233){
return promesa.protocols._bind(check.async.to_promise("{ :foo bar 10 }"),(function (right_74234){
return promesa.protocols._bind(null,(function (___31810__auto____$3){
return promesa.protocols._bind(cljs.test.do_report(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var lft__35783__auto__ = left_74233;
var rgt__35784__auto__ = right_74234;
var qleft__35785__auto__ = new cljs.core.Symbol(null,"left-74233","left-74233",2134848325,null);
var qright__35786__auto__ = new cljs.core.Symbol(null,"right-74234","right-74234",-2078903083,null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})(),new cljs.core.Keyword(null,"expected","expected",1583670997),"{ :foo bar 10 }")),(function (___31809__auto____$12){
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
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31810__auto____$2){
return promesa.protocols._bind(document.querySelector("#result a:nth-child(n+1)").click(),(function (___31809__auto____$13){
return promesa.protocols._bind(repl_tooling.integration.fake_editor.change_result_p(),(function (___31809__auto____$14){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(repl_tooling.integration.fake_editor.txt_for_selector("#result .children"),(function (res__71941__auto__){
return promesa.protocols._bind(null,(function (___31810__auto____$3){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto____$1){
return promesa.protocols._bind(check.async.to_promise(clojure.string.replace(res__71941__auto__,/(\n|\s+)+/," ")),(function (left_74409){
return promesa.protocols._bind(check.async.to_promise("[ :foo bar 10 ]"),(function (right_74410){
return promesa.protocols._bind(null,(function (___31810__auto____$4){
return promesa.protocols._bind(cljs.test.do_report(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var lft__35783__auto__ = left_74409;
var rgt__35784__auto__ = right_74410;
var qleft__35785__auto__ = new cljs.core.Symbol(null,"left-74409","left-74409",-1162705505,null);
var qright__35786__auto__ = new cljs.core.Symbol(null,"right-74410","right-74410",-1545481002,null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})(),new cljs.core.Keyword(null,"expected","expected",1583670997),"[ :foo bar 10 ]")),(function (___31809__auto____$15){
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
})),(function() { 
var G__76061__delegate = function (___36014__auto__){
return cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
};
var G__76061 = function (var_args){
var ___36014__auto__ = null;
if (arguments.length > 0) {
var G__76062__i = 0, G__76062__a = new Array(arguments.length -  0);
while (G__76062__i < G__76062__a.length) {G__76062__a[G__76062__i] = arguments[G__76062__i + 0]; ++G__76062__i;}
  ___36014__auto__ = new cljs.core.IndexedSeq(G__76062__a,0,null);
} 
return G__76061__delegate.call(this,___36014__auto__);};
G__76061.cljs$lang$maxFixedArity = 0;
G__76061.cljs$lang$applyTo = (function (arglist__76063){
var ___36014__auto__ = cljs.core.seq(arglist__76063);
return G__76061__delegate(___36014__auto__);
});
G__76061.cljs$core$IFn$_invoke$arity$variadic = G__76061__delegate;
return G__76061;
})()
),(function (___31809__auto____$11){
return promesa.protocols._promise(promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._bind(null,(function (___31810__auto____$1){
return promesa.protocols._bind(cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["evaluates and presents taggable objects"], 0)),(function (___31809__auto____$12){
return promesa.protocols._promise((function (){
repl_tooling.integration.fake_editor.type_and_eval("(do (defrecord Foo [a b]) (->Foo (range 10) 20))");

return promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(repl_tooling.integration.fake_editor.change_result_p(),(function (res__71895__auto__){
return promesa.protocols._bind(null,(function (___31810__auto____$2){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto____$1){
return promesa.protocols._bind(check.async.to_promise(clojure.string.replace(res__71895__auto__,/(\n|\s+)+/," ")),(function (left_74492){
return promesa.protocols._bind(check.async.to_promise(/#.+Foo \{ :a \( 0 1 2 3 4 5 6 7 8 9 \) , :b 20 \}/),(function (right_74493){
return promesa.protocols._bind(null,(function (___31810__auto____$3){
return promesa.protocols._bind(cljs.test.do_report(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var lft__35783__auto__ = left_74492;
var rgt__35784__auto__ = right_74493;
var qleft__35785__auto__ = new cljs.core.Symbol(null,"left-74492","left-74492",-1991382290,null);
var qright__35786__auto__ = new cljs.core.Symbol(null,"right-74493","right-74493",-923005500,null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})(),new cljs.core.Keyword(null,"expected","expected",1583670997),/#.+Foo \{ :a \( 0 1 2 3 4 5 6 7 8 9 \) , :b 20 \}/)),(function (___31809__auto____$13){
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
var G__76064__delegate = function (___36014__auto__){
return cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
};
var G__76064 = function (var_args){
var ___36014__auto__ = null;
if (arguments.length > 0) {
var G__76065__i = 0, G__76065__a = new Array(arguments.length -  0);
while (G__76065__i < G__76065__a.length) {G__76065__a[G__76065__i] = arguments[G__76065__i + 0]; ++G__76065__i;}
  ___36014__auto__ = new cljs.core.IndexedSeq(G__76065__a,0,null);
} 
return G__76064__delegate.call(this,___36014__auto__);};
G__76064.cljs$lang$maxFixedArity = 0;
G__76064.cljs$lang$applyTo = (function (arglist__76066){
var ___36014__auto__ = cljs.core.seq(arglist__76066);
return G__76064__delegate(___36014__auto__);
});
G__76064.cljs$core$IFn$_invoke$arity$variadic = G__76064__delegate;
return G__76064;
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
})));
})], 0)),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));

repl_tooling.integration.clojurescript_ui.repl_evaluation = (function repl_tooling$integration$clojurescript_ui$repl_evaluation(){
return cljs.test.test_var(repl_tooling.integration.clojurescript_ui.repl_evaluation.cljs$lang$var);
});
repl_tooling.integration.clojurescript_ui.repl_evaluation.cljs$lang$test = (function (){
return check.async.async_test_STAR_("ClojureScript REPL evaluation",(8000),(function (){
return repl_tooling.integration.fake_editor.disconnect_BANG_();
}),promesa.protocols._bind(null,(function (___31810__auto__){
return promesa.protocols._bind(repl_tooling.integration.fake_editor.connect_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"notify","notify",-1256867814),cljs.core.prn], null)),(function (___31809__auto__){
return promesa.protocols._bind(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(repl_tooling.integration.fake_editor.state,cljs.core.assoc,new cljs.core.Keyword(null,"filename","filename",-1428840783),"foo.cljs"),(function (___31809__auto____$1){
return promesa.protocols._bind(repl_tooling.integration.fake_editor.run_command_BANG_(new cljs.core.Keyword(null,"connect-embedded","connect-embedded",610098730)),(function (___31809__auto____$2){
return promesa.protocols._bind(promesa.core.delay.cljs$core$IFn$_invoke$arity$1((1000)),(function (___31809__auto____$3){
return promesa.protocols._bind(promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._bind(null,(function (___31810__auto____$1){
return promesa.protocols._bind(cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["evaluation works for nil"], 0)),(function (___31809__auto____$4){
return promesa.protocols._bind(repl_tooling.integration.fake_editor.type_and_eval("nil"),(function (___31809__auto____$5){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(check.async.to_promise(repl_tooling.integration.fake_editor.change_result_p()),(function (left_74736){
return promesa.protocols._bind(check.async.to_promise("nil"),(function (right_74737){
return promesa.protocols._bind(null,(function (___31810__auto____$2){
return promesa.protocols._bind(cljs.test.do_report(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var lft__35783__auto__ = left_74736;
var rgt__35784__auto__ = right_74737;
var qleft__35785__auto__ = new cljs.core.Symbol(null,"left-74736","left-74736",-1370297165,null);
var qright__35786__auto__ = new cljs.core.Symbol(null,"right-74737","right-74737",86543484,null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})(),new cljs.core.Keyword(null,"expected","expected",1583670997),"nil")),(function (___31809__auto____$6){
return promesa.protocols._promise(new cljs.core.Keyword(null,"done","done",-889844188));
}));
}));
}));
}));
})));
}));
}));
})),(function() { 
var G__76068__delegate = function (___36014__auto__){
return cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
};
var G__76068 = function (var_args){
var ___36014__auto__ = null;
if (arguments.length > 0) {
var G__76069__i = 0, G__76069__a = new Array(arguments.length -  0);
while (G__76069__i < G__76069__a.length) {G__76069__a[G__76069__i] = arguments[G__76069__i + 0]; ++G__76069__i;}
  ___36014__auto__ = new cljs.core.IndexedSeq(G__76069__a,0,null);
} 
return G__76068__delegate.call(this,___36014__auto__);};
G__76068.cljs$lang$maxFixedArity = 0;
G__76068.cljs$lang$applyTo = (function (arglist__76070){
var ___36014__auto__ = cljs.core.seq(arglist__76070);
return G__76068__delegate(___36014__auto__);
});
G__76068.cljs$core$IFn$_invoke$arity$variadic = G__76068__delegate;
return G__76068;
})()
),(function (___31809__auto____$4){
return promesa.protocols._bind(promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._bind(null,(function (___31810__auto____$1){
return promesa.protocols._bind(cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["evaluation works, but doesn't print something on STDOUT"], 0)),(function (___31809__auto____$5){
return promesa.protocols._bind(repl_tooling.integration.fake_editor.type_and_eval("(/ 10 0)"),(function (___31809__auto____$6){
return promesa.protocols._bind(promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(check.async.to_promise(repl_tooling.integration.fake_editor.change_result_p()),(function (left_74912){
return promesa.protocols._bind(check.async.to_promise("##Inf"),(function (right_74913){
return promesa.protocols._bind(null,(function (___31810__auto____$2){
return promesa.protocols._bind(cljs.test.do_report(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var lft__35783__auto__ = left_74912;
var rgt__35784__auto__ = right_74913;
var qleft__35785__auto__ = new cljs.core.Symbol(null,"left-74912","left-74912",511615406,null);
var qright__35786__auto__ = new cljs.core.Symbol(null,"right-74913","right-74913",106036336,null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})(),new cljs.core.Keyword(null,"expected","expected",1583670997),"##Inf")),(function (___31809__auto____$7){
return promesa.protocols._promise(new cljs.core.Keyword(null,"done","done",-889844188));
}));
}));
}));
}));
})),(function (___31809__auto____$7){
return promesa.protocols._promise((function (){try{var values__9152__auto__ = (new cljs.core.List(null,cljs.core.re_find(/=>/,repl_tooling.integration.fake_editor.txt_for_selector("#stdout")),null,(1),null));
var result__9153__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.not,values__9152__auto__);
if(cljs.core.truth_(result__9153__auto__)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["repl_tooling/integration/clojurescript_ui.cljs",66,new cljs.core.Keyword(null,"pass","pass",1574159993),11,39,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"re-find","re-find",1143444147,null),/=>/,cljs.core.list(new cljs.core.Symbol("fake","txt-for-selector","fake/txt-for-selector",1500946571,null),"#stdout"))),39,cljs.core.cons(new cljs.core.Symbol(null,"not","not",1044554643,null),values__9152__auto__),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["repl_tooling/integration/clojurescript_ui.cljs",66,new cljs.core.Keyword(null,"fail","fail",1706214930),11,39,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"re-find","re-find",1143444147,null),/=>/,cljs.core.list(new cljs.core.Symbol("fake","txt-for-selector","fake/txt-for-selector",1500946571,null),"#stdout"))),39,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"not","not",1044554643,null),values__9152__auto__),null,(1),null)),(2),null)),null]));
}

return result__9153__auto__;
}catch (e74914){var t__9189__auto__ = e74914;
return cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["repl_tooling/integration/clojurescript_ui.cljs",66,new cljs.core.Keyword(null,"error","error",-978969032),11,39,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"re-find","re-find",1143444147,null),/=>/,cljs.core.list(new cljs.core.Symbol("fake","txt-for-selector","fake/txt-for-selector",1500946571,null),"#stdout"))),39,t__9189__auto__,null]));
}})());
}));
}));
}));
})),(function() { 
var G__76075__delegate = function (___36014__auto__){
return cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
};
var G__76075 = function (var_args){
var ___36014__auto__ = null;
if (arguments.length > 0) {
var G__76076__i = 0, G__76076__a = new Array(arguments.length -  0);
while (G__76076__i < G__76076__a.length) {G__76076__a[G__76076__i] = arguments[G__76076__i + 0]; ++G__76076__i;}
  ___36014__auto__ = new cljs.core.IndexedSeq(G__76076__a,0,null);
} 
return G__76075__delegate.call(this,___36014__auto__);};
G__76075.cljs$lang$maxFixedArity = 0;
G__76075.cljs$lang$applyTo = (function (arglist__76077){
var ___36014__auto__ = cljs.core.seq(arglist__76077);
return G__76075__delegate(___36014__auto__);
});
G__76075.cljs$core$IFn$_invoke$arity$variadic = G__76075__delegate;
return G__76075;
})()
),(function (___31809__auto____$5){
return promesa.protocols._bind(promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._bind(null,(function (___31810__auto____$1){
return promesa.protocols._bind(cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["evaluate blocks"], 0)),(function (___31809__auto____$6){
return promesa.protocols._bind(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(repl_tooling.integration.fake_editor.state,cljs.core.assoc,new cljs.core.Keyword(null,"code","code",1586293142),"(+ 1 2)\n\n(+ 2 \n  (+ 3 4))",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(3)], null)], null)], 0)),(function (___31809__auto____$7){
return promesa.protocols._bind(repl_tooling.integration.fake_editor.run_command_BANG_(new cljs.core.Keyword(null,"evaluate-block","evaluate-block",-906759120)),(function (___31809__auto____$8){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(check.async.to_promise(repl_tooling.integration.fake_editor.change_result_p()),(function (left_74915){
return promesa.protocols._bind(check.async.to_promise("7"),(function (right_74916){
return promesa.protocols._bind(null,(function (___31810__auto____$2){
return promesa.protocols._bind(cljs.test.do_report(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var lft__35783__auto__ = left_74915;
var rgt__35784__auto__ = right_74916;
var qleft__35785__auto__ = new cljs.core.Symbol(null,"left-74915","left-74915",1882649947,null);
var qright__35786__auto__ = new cljs.core.Symbol(null,"right-74916","right-74916",1031398753,null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})(),new cljs.core.Keyword(null,"expected","expected",1583670997),"7")),(function (___31809__auto____$9){
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
var G__76079__delegate = function (___36014__auto__){
return cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
};
var G__76079 = function (var_args){
var ___36014__auto__ = null;
if (arguments.length > 0) {
var G__76080__i = 0, G__76080__a = new Array(arguments.length -  0);
while (G__76080__i < G__76080__a.length) {G__76080__a[G__76080__i] = arguments[G__76080__i + 0]; ++G__76080__i;}
  ___36014__auto__ = new cljs.core.IndexedSeq(G__76080__a,0,null);
} 
return G__76079__delegate.call(this,___36014__auto__);};
G__76079.cljs$lang$maxFixedArity = 0;
G__76079.cljs$lang$applyTo = (function (arglist__76081){
var ___36014__auto__ = cljs.core.seq(arglist__76081);
return G__76079__delegate(___36014__auto__);
});
G__76079.cljs$core$IFn$_invoke$arity$variadic = G__76079__delegate;
return G__76079;
})()
),(function (___31809__auto____$6){
return promesa.protocols._bind(promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._bind(null,(function (___31810__auto____$1){
return promesa.protocols._bind(cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["evaluate top blocks"], 0)),(function (___31809__auto____$7){
return promesa.protocols._bind(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(repl_tooling.integration.fake_editor.state,cljs.core.assoc,new cljs.core.Keyword(null,"code","code",1586293142),"(+ 1 2)\n\n(+ 2 \n  (+ 3 4))",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(3)], null)], null)], 0)),(function (___31809__auto____$8){
return promesa.protocols._bind(repl_tooling.integration.fake_editor.run_command_BANG_(new cljs.core.Keyword(null,"evaluate-top-block","evaluate-top-block",-2034693127)),(function (___31809__auto____$9){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(check.async.to_promise(repl_tooling.integration.fake_editor.change_result_p()),(function (left_75267){
return promesa.protocols._bind(check.async.to_promise("9"),(function (right_75268){
return promesa.protocols._bind(null,(function (___31810__auto____$2){
return promesa.protocols._bind(cljs.test.do_report(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var lft__35783__auto__ = left_75267;
var rgt__35784__auto__ = right_75268;
var qleft__35785__auto__ = new cljs.core.Symbol(null,"left-75267","left-75267",-415651201,null);
var qright__35786__auto__ = new cljs.core.Symbol(null,"right-75268","right-75268",819957840,null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})(),new cljs.core.Keyword(null,"expected","expected",1583670997),"9")),(function (___31809__auto____$10){
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
var G__76085__delegate = function (___36014__auto__){
return cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
};
var G__76085 = function (var_args){
var ___36014__auto__ = null;
if (arguments.length > 0) {
var G__76126__i = 0, G__76126__a = new Array(arguments.length -  0);
while (G__76126__i < G__76126__a.length) {G__76126__a[G__76126__i] = arguments[G__76126__i + 0]; ++G__76126__i;}
  ___36014__auto__ = new cljs.core.IndexedSeq(G__76126__a,0,null);
} 
return G__76085__delegate.call(this,___36014__auto__);};
G__76085.cljs$lang$maxFixedArity = 0;
G__76085.cljs$lang$applyTo = (function (arglist__76127){
var ___36014__auto__ = cljs.core.seq(arglist__76127);
return G__76085__delegate(___36014__auto__);
});
G__76085.cljs$core$IFn$_invoke$arity$variadic = G__76085__delegate;
return G__76085;
})()
),(function (___31809__auto____$7){
return promesa.protocols._bind(promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._bind(null,(function (___31810__auto____$1){
return promesa.protocols._bind(cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["displays booleans"], 0)),(function (___31809__auto____$8){
return promesa.protocols._bind((function (){
repl_tooling.integration.fake_editor.type_and_eval("true");

return promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(repl_tooling.integration.fake_editor.change_result_p(),(function (res__71895__auto__){
return promesa.protocols._bind(null,(function (___31810__auto____$2){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto____$1){
return promesa.protocols._bind(check.async.to_promise(clojure.string.replace(res__71895__auto__,/(\n|\s+)+/," ")),(function (left_75269){
return promesa.protocols._bind(check.async.to_promise("true"),(function (right_75270){
return promesa.protocols._bind(null,(function (___31810__auto____$3){
return promesa.protocols._bind(cljs.test.do_report(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var lft__35783__auto__ = left_75269;
var rgt__35784__auto__ = right_75270;
var qleft__35785__auto__ = new cljs.core.Symbol(null,"left-75269","left-75269",1638131557,null);
var qright__35786__auto__ = new cljs.core.Symbol(null,"right-75270","right-75270",2008577719,null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})(),new cljs.core.Keyword(null,"expected","expected",1583670997),"true")),(function (___31809__auto____$9){
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
,(function (___31809__auto____$9){
return promesa.protocols._bind((function (){
repl_tooling.integration.fake_editor.type_and_eval("false");

return promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(repl_tooling.integration.fake_editor.change_result_p(),(function (res__71895__auto__){
return promesa.protocols._bind(null,(function (___31810__auto____$2){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto____$1){
return promesa.protocols._bind(check.async.to_promise(clojure.string.replace(res__71895__auto__,/(\n|\s+)+/," ")),(function (left_75271){
return promesa.protocols._bind(check.async.to_promise("false"),(function (right_75272){
return promesa.protocols._bind(null,(function (___31810__auto____$3){
return promesa.protocols._bind(cljs.test.do_report(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var lft__35783__auto__ = left_75271;
var rgt__35784__auto__ = right_75272;
var qleft__35785__auto__ = new cljs.core.Symbol(null,"left-75271","left-75271",-1181522400,null);
var qright__35786__auto__ = new cljs.core.Symbol(null,"right-75272","right-75272",-491142491,null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})(),new cljs.core.Keyword(null,"expected","expected",1583670997),"false")),(function (___31809__auto____$10){
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
return promesa.protocols._promise((function (){
repl_tooling.integration.fake_editor.type_and_eval("nil");

return promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(repl_tooling.integration.fake_editor.change_result_p(),(function (res__71895__auto__){
return promesa.protocols._bind(null,(function (___31810__auto____$2){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto____$1){
return promesa.protocols._bind(check.async.to_promise(clojure.string.replace(res__71895__auto__,/(\n|\s+)+/," ")),(function (left_75609){
return promesa.protocols._bind(check.async.to_promise("nil"),(function (right_75610){
return promesa.protocols._bind(null,(function (___31810__auto____$3){
return promesa.protocols._bind(cljs.test.do_report(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var lft__35783__auto__ = left_75609;
var rgt__35784__auto__ = right_75610;
var qleft__35785__auto__ = new cljs.core.Symbol(null,"left-75609","left-75609",1976527432,null);
var qright__35786__auto__ = new cljs.core.Symbol(null,"right-75610","right-75610",454516653,null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})(),new cljs.core.Keyword(null,"expected","expected",1583670997),"nil")),(function (___31809__auto____$11){
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
var G__76128__delegate = function (___36014__auto__){
return cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
};
var G__76128 = function (var_args){
var ___36014__auto__ = null;
if (arguments.length > 0) {
var G__76129__i = 0, G__76129__a = new Array(arguments.length -  0);
while (G__76129__i < G__76129__a.length) {G__76129__a[G__76129__i] = arguments[G__76129__i + 0]; ++G__76129__i;}
  ___36014__auto__ = new cljs.core.IndexedSeq(G__76129__a,0,null);
} 
return G__76128__delegate.call(this,___36014__auto__);};
G__76128.cljs$lang$maxFixedArity = 0;
G__76128.cljs$lang$applyTo = (function (arglist__76130){
var ___36014__auto__ = cljs.core.seq(arglist__76130);
return G__76128__delegate(___36014__auto__);
});
G__76128.cljs$core$IFn$_invoke$arity$variadic = G__76128__delegate;
return G__76128;
})()
),(function (___31809__auto____$8){
return promesa.protocols._bind(promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._bind(null,(function (___31810__auto____$1){
return promesa.protocols._bind(cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["captures STDOUT"], 0)),(function (___31809__auto____$9){
return promesa.protocols._bind(repl_tooling.integration.fake_editor.type_and_eval("(println :FOOBAR)"),(function (___31809__auto____$10){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(check.async.to_promise(repl_tooling.integration.fake_editor.change_stdout_p()),(function (left_75715){
return promesa.protocols._bind(check.async.to_promise(/:FOOBAR/),(function (right_75716){
return promesa.protocols._bind(null,(function (___31810__auto____$2){
return promesa.protocols._bind(cljs.test.do_report(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var lft__35783__auto__ = left_75715;
var rgt__35784__auto__ = right_75716;
var qleft__35785__auto__ = new cljs.core.Symbol(null,"left-75715","left-75715",852269986,null);
var qright__35786__auto__ = new cljs.core.Symbol(null,"right-75716","right-75716",1229346242,null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})(),new cljs.core.Keyword(null,"expected","expected",1583670997),/:FOOBAR/)),(function (___31809__auto____$11){
return promesa.protocols._promise(new cljs.core.Keyword(null,"done","done",-889844188));
}));
}));
}));
}));
})));
}));
}));
})),(function() { 
var G__76152__delegate = function (___36014__auto__){
return cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
};
var G__76152 = function (var_args){
var ___36014__auto__ = null;
if (arguments.length > 0) {
var G__76153__i = 0, G__76153__a = new Array(arguments.length -  0);
while (G__76153__i < G__76153__a.length) {G__76153__a[G__76153__i] = arguments[G__76153__i + 0]; ++G__76153__i;}
  ___36014__auto__ = new cljs.core.IndexedSeq(G__76153__a,0,null);
} 
return G__76152__delegate.call(this,___36014__auto__);};
G__76152.cljs$lang$maxFixedArity = 0;
G__76152.cljs$lang$applyTo = (function (arglist__76154){
var ___36014__auto__ = cljs.core.seq(arglist__76154);
return G__76152__delegate(___36014__auto__);
});
G__76152.cljs$core$IFn$_invoke$arity$variadic = G__76152__delegate;
return G__76152;
})()
),(function (___31809__auto____$9){
return promesa.protocols._bind(promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._bind(null,(function (___31810__auto____$1){
return promesa.protocols._bind(cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["detects NS on file"], 0)),(function (___31809__auto____$10){
return promesa.protocols._bind(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(repl_tooling.integration.fake_editor.state,cljs.core.assoc,new cljs.core.Keyword(null,"code","code",1586293142),"(ns clojure.string)\n(upper-case \"this is upper\")",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null)], null)], 0)),(function (___31809__auto____$11){
return promesa.protocols._bind(repl_tooling.integration.fake_editor.run_command_BANG_(new cljs.core.Keyword(null,"evaluate-block","evaluate-block",-906759120)),(function (___31809__auto____$12){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(check.async.to_promise(repl_tooling.integration.fake_editor.change_result_p()),(function (left_75828){
return promesa.protocols._bind(check.async.to_promise(/THIS IS UPPER/),(function (right_75829){
return promesa.protocols._bind(null,(function (___31810__auto____$2){
return promesa.protocols._bind(cljs.test.do_report(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var lft__35783__auto__ = left_75828;
var rgt__35784__auto__ = right_75829;
var qleft__35785__auto__ = new cljs.core.Symbol(null,"left-75828","left-75828",1427902190,null);
var qright__35786__auto__ = new cljs.core.Symbol(null,"right-75829","right-75829",-950484075,null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})(),new cljs.core.Keyword(null,"expected","expected",1583670997),/THIS IS UPPER/)),(function (___31809__auto____$13){
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
var G__76155__delegate = function (___36014__auto__){
return cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
};
var G__76155 = function (var_args){
var ___36014__auto__ = null;
if (arguments.length > 0) {
var G__76156__i = 0, G__76156__a = new Array(arguments.length -  0);
while (G__76156__i < G__76156__a.length) {G__76156__a[G__76156__i] = arguments[G__76156__i + 0]; ++G__76156__i;}
  ___36014__auto__ = new cljs.core.IndexedSeq(G__76156__a,0,null);
} 
return G__76155__delegate.call(this,___36014__auto__);};
G__76155.cljs$lang$maxFixedArity = 0;
G__76155.cljs$lang$applyTo = (function (arglist__76157){
var ___36014__auto__ = cljs.core.seq(arglist__76157);
return G__76155__delegate(___36014__auto__);
});
G__76155.cljs$core$IFn$_invoke$arity$variadic = G__76155__delegate;
return G__76155;
})()
),(function (___31809__auto____$10){
return promesa.protocols._bind(promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._bind(null,(function (___31810__auto____$1){
return promesa.protocols._bind(cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["displays invalid EDN"], 0)),(function (___31809__auto____$11){
return promesa.protocols._bind((function (){
repl_tooling.integration.fake_editor.type_and_eval("{(keyword \"foo bar\") 10}");

return promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(repl_tooling.integration.fake_editor.change_result_p(),(function (res__71895__auto__){
return promesa.protocols._bind(null,(function (___31810__auto____$2){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto____$1){
return promesa.protocols._bind(check.async.to_promise(clojure.string.replace(res__71895__auto__,/(\n|\s+)+/," ")),(function (left_75904){
return promesa.protocols._bind(check.async.to_promise("{ :foo bar 10 }"),(function (right_75905){
return promesa.protocols._bind(null,(function (___31810__auto____$3){
return promesa.protocols._bind(cljs.test.do_report(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var lft__35783__auto__ = left_75904;
var rgt__35784__auto__ = right_75905;
var qleft__35785__auto__ = new cljs.core.Symbol(null,"left-75904","left-75904",-1992891252,null);
var qright__35786__auto__ = new cljs.core.Symbol(null,"right-75905","right-75905",1554021685,null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})(),new cljs.core.Keyword(null,"expected","expected",1583670997),"{ :foo bar 10 }")),(function (___31809__auto____$12){
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
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31810__auto____$2){
return promesa.protocols._bind(document.querySelector("#result a:nth-child(n+1)").click(),(function (___31809__auto____$13){
return promesa.protocols._bind(repl_tooling.integration.fake_editor.change_result_p(),(function (___31809__auto____$14){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(repl_tooling.integration.fake_editor.txt_for_selector("#result .children"),(function (res__71941__auto__){
return promesa.protocols._bind(null,(function (___31810__auto____$3){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto____$1){
return promesa.protocols._bind(check.async.to_promise(clojure.string.replace(res__71941__auto__,/(\n|\s+)+/," ")),(function (left_75914){
return promesa.protocols._bind(check.async.to_promise("[ :foo bar 10 ]"),(function (right_75915){
return promesa.protocols._bind(null,(function (___31810__auto____$4){
return promesa.protocols._bind(cljs.test.do_report(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var lft__35783__auto__ = left_75914;
var rgt__35784__auto__ = right_75915;
var qleft__35785__auto__ = new cljs.core.Symbol(null,"left-75914","left-75914",-371682801,null);
var qright__35786__auto__ = new cljs.core.Symbol(null,"right-75915","right-75915",936034687,null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})(),new cljs.core.Keyword(null,"expected","expected",1583670997),"[ :foo bar 10 ]")),(function (___31809__auto____$15){
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
})),(function() { 
var G__76158__delegate = function (___36014__auto__){
return cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
};
var G__76158 = function (var_args){
var ___36014__auto__ = null;
if (arguments.length > 0) {
var G__76159__i = 0, G__76159__a = new Array(arguments.length -  0);
while (G__76159__i < G__76159__a.length) {G__76159__a[G__76159__i] = arguments[G__76159__i + 0]; ++G__76159__i;}
  ___36014__auto__ = new cljs.core.IndexedSeq(G__76159__a,0,null);
} 
return G__76158__delegate.call(this,___36014__auto__);};
G__76158.cljs$lang$maxFixedArity = 0;
G__76158.cljs$lang$applyTo = (function (arglist__76160){
var ___36014__auto__ = cljs.core.seq(arglist__76160);
return G__76158__delegate(___36014__auto__);
});
G__76158.cljs$core$IFn$_invoke$arity$variadic = G__76158__delegate;
return G__76158;
})()
),(function (___31809__auto____$11){
return promesa.protocols._promise(promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._bind(null,(function (___31810__auto____$1){
return promesa.protocols._bind(cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["evaluates and presents taggable objects"], 0)),(function (___31809__auto____$12){
return promesa.protocols._promise((function (){
repl_tooling.integration.fake_editor.type_and_eval("(do (defrecord Foo [a b]) (->Foo (range 10) 20))");

return promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(repl_tooling.integration.fake_editor.change_result_p(),(function (res__71895__auto__){
return promesa.protocols._bind(null,(function (___31810__auto____$2){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto____$1){
return promesa.protocols._bind(check.async.to_promise(clojure.string.replace(res__71895__auto__,/(\n|\s+)+/," ")),(function (left_75924){
return promesa.protocols._bind(check.async.to_promise(/#.+Foo \{ :a \( 0 1 2 3 4 5 6 7 8 9 \) , :b 20 \}/),(function (right_75925){
return promesa.protocols._bind(null,(function (___31810__auto____$3){
return promesa.protocols._bind(cljs.test.do_report(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var lft__35783__auto__ = left_75924;
var rgt__35784__auto__ = right_75925;
var qleft__35785__auto__ = new cljs.core.Symbol(null,"left-75924","left-75924",-2049807042,null);
var qright__35786__auto__ = new cljs.core.Symbol(null,"right-75925","right-75925",-1971040125,null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})(),new cljs.core.Keyword(null,"expected","expected",1583670997),/#.+Foo \{ :a \( 0 1 2 3 4 5 6 7 8 9 \) , :b 20 \}/)),(function (___31809__auto____$13){
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
var G__76161__delegate = function (___36014__auto__){
return cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
};
var G__76161 = function (var_args){
var ___36014__auto__ = null;
if (arguments.length > 0) {
var G__76162__i = 0, G__76162__a = new Array(arguments.length -  0);
while (G__76162__i < G__76162__a.length) {G__76162__a[G__76162__i] = arguments[G__76162__i + 0]; ++G__76162__i;}
  ___36014__auto__ = new cljs.core.IndexedSeq(G__76162__a,0,null);
} 
return G__76161__delegate.call(this,___36014__auto__);};
G__76161.cljs$lang$maxFixedArity = 0;
G__76161.cljs$lang$applyTo = (function (arglist__76163){
var ___36014__auto__ = cljs.core.seq(arglist__76163);
return G__76161__delegate(___36014__auto__);
});
G__76161.cljs$core$IFn$_invoke$arity$variadic = G__76161__delegate;
return G__76161;
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
})));
});

(repl_tooling.integration.clojurescript_ui.repl_evaluation.cljs$lang$var = new cljs.core.Var(function(){return repl_tooling.integration.clojurescript_ui.repl_evaluation;},new cljs.core.Symbol("repl-tooling.integration.clojurescript-ui","repl-evaluation","repl-tooling.integration.clojurescript-ui/repl-evaluation",-2025241873,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"repl-tooling.integration.clojurescript-ui","repl-tooling.integration.clojurescript-ui",-894190138,null),new cljs.core.Symbol(null,"repl-evaluation","repl-evaluation",734155261,null),"repl_tooling/integration/clojurescript_ui.cljs",31,1,24,24,cljs.core.List.EMPTY,null,(cljs.core.truth_(repl_tooling.integration.clojurescript_ui.repl_evaluation)?repl_tooling.integration.clojurescript_ui.repl_evaluation.cljs$lang$test:null)])));

//# sourceMappingURL=repl_tooling.integration.clojurescript_ui.js.map
