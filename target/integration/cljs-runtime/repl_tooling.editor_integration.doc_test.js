goog.provide('repl_tooling.editor_integration.doc_test');
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"repl_tooling.editor_integration.doc_test","repl_tooling.editor_integration.doc_test",-1333967307),new cljs.core.Keyword(null,"doc-for-var","doc-for-var",376145016)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"doc-for-var",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){
return check.async.async_test_STAR_("documentation for var",(16000),(function (){
return repl_tooling.integration.fake_editor.disconnect_BANG_();
}),promesa.protocols._bind(null,(function (___31810__auto__){
return promesa.protocols._bind(repl_tooling.integration.fake_editor.connect_BANG_.cljs$core$IFn$_invoke$arity$0(),(function (___31809__auto__){
return promesa.protocols._bind(promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._bind(null,(function (___31810__auto____$1){
return promesa.protocols._bind(cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["doc for Clojure"], 0)),(function (___31809__auto____$1){
return promesa.protocols._bind(repl_tooling.integration.fake_editor.type("str"),(function (___31809__auto____$2){
return promesa.protocols._bind(repl_tooling.integration.fake_editor.run_command_BANG_(new cljs.core.Keyword(null,"doc-for-var","doc-for-var",376145016)),(function (___31809__auto____$3){
return promesa.protocols._bind(promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(check.async.to_promise(repl_tooling.integration.fake_editor.change_result_p()),(function (left_102454){
return promesa.protocols._bind(check.async.to_promise(/concatenation/),(function (right_102455){
return promesa.protocols._bind(null,(function (___31810__auto____$2){
return promesa.protocols._bind(cljs.test.do_report(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var lft__35783__auto__ = left_102454;
var rgt__35784__auto__ = right_102455;
var qleft__35785__auto__ = new cljs.core.Symbol(null,"left-102454","left-102454",1313636022,null);
var qright__35786__auto__ = new cljs.core.Symbol(null,"right-102455","right-102455",-475871644,null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})(),new cljs.core.Keyword(null,"expected","expected",1583670997),/concatenation/)),(function (___31809__auto____$4){
return promesa.protocols._promise(new cljs.core.Keyword(null,"done","done",-889844188));
}));
}));
}));
}));
})),(function (___31809__auto____$4){
return promesa.protocols._bind(repl_tooling.integration.fake_editor.click_link("Get source"),(function (___31809__auto____$5){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(check.async.to_promise(repl_tooling.integration.fake_editor.change_result_p()),(function (left_102458){
return promesa.protocols._bind(check.async.to_promise(/StringBuilder/),(function (right_102459){
return promesa.protocols._bind(null,(function (___31810__auto____$2){
return promesa.protocols._bind(cljs.test.do_report(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var lft__35783__auto__ = left_102458;
var rgt__35784__auto__ = right_102459;
var qleft__35785__auto__ = new cljs.core.Symbol(null,"left-102458","left-102458",1497054561,null);
var qright__35786__auto__ = new cljs.core.Symbol(null,"right-102459","right-102459",-1963665553,null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})(),new cljs.core.Keyword(null,"expected","expected",1583670997),/StringBuilder/)),(function (___31809__auto____$6){
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
}));
})),(function() { 
var G__102590__delegate = function (___36014__auto__){
return cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
};
var G__102590 = function (var_args){
var ___36014__auto__ = null;
if (arguments.length > 0) {
var G__102591__i = 0, G__102591__a = new Array(arguments.length -  0);
while (G__102591__i < G__102591__a.length) {G__102591__a[G__102591__i] = arguments[G__102591__i + 0]; ++G__102591__i;}
  ___36014__auto__ = new cljs.core.IndexedSeq(G__102591__a,0,null);
} 
return G__102590__delegate.call(this,___36014__auto__);};
G__102590.cljs$lang$maxFixedArity = 0;
G__102590.cljs$lang$applyTo = (function (arglist__102593){
var ___36014__auto__ = cljs.core.seq(arglist__102593);
return G__102590__delegate(___36014__auto__);
});
G__102590.cljs$core$IFn$_invoke$arity$variadic = G__102590__delegate;
return G__102590;
})()
),(function (___31809__auto____$1){
return promesa.protocols._bind(promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._bind(null,(function (___31810__auto____$1){
return promesa.protocols._bind(cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["source for var in Clojure"], 0)),(function (___31809__auto____$2){
return promesa.protocols._bind(repl_tooling.integration.fake_editor.clear_results_BANG_(),(function (___31809__auto____$3){
return promesa.protocols._bind(repl_tooling.integration.fake_editor.run_command_BANG_(new cljs.core.Keyword(null,"source-for-var","source-for-var",-8035322)),(function (___31809__auto____$4){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(check.async.to_promise(repl_tooling.integration.fake_editor.change_stdout_p()),(function (left_102461){
return promesa.protocols._bind(check.async.to_promise(/StringBuilder/),(function (right_102462){
return promesa.protocols._bind(null,(function (___31810__auto____$2){
return promesa.protocols._bind(cljs.test.do_report(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var lft__35783__auto__ = left_102461;
var rgt__35784__auto__ = right_102462;
var qleft__35785__auto__ = new cljs.core.Symbol(null,"left-102461","left-102461",-667743502,null);
var qright__35786__auto__ = new cljs.core.Symbol(null,"right-102462","right-102462",-1727491,null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})(),new cljs.core.Keyword(null,"expected","expected",1583670997),/StringBuilder/)),(function (___31809__auto____$5){
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
var G__102595__delegate = function (___36014__auto__){
return cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
};
var G__102595 = function (var_args){
var ___36014__auto__ = null;
if (arguments.length > 0) {
var G__102596__i = 0, G__102596__a = new Array(arguments.length -  0);
while (G__102596__i < G__102596__a.length) {G__102596__a[G__102596__i] = arguments[G__102596__i + 0]; ++G__102596__i;}
  ___36014__auto__ = new cljs.core.IndexedSeq(G__102596__a,0,null);
} 
return G__102595__delegate.call(this,___36014__auto__);};
G__102595.cljs$lang$maxFixedArity = 0;
G__102595.cljs$lang$applyTo = (function (arglist__102597){
var ___36014__auto__ = cljs.core.seq(arglist__102597);
return G__102595__delegate(___36014__auto__);
});
G__102595.cljs$core$IFn$_invoke$arity$variadic = G__102595__delegate;
return G__102595;
})()
),(function (___31809__auto____$2){
return promesa.protocols._bind(promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._bind(null,(function (___31810__auto____$1){
return promesa.protocols._bind(cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["doc for ClojureScript"], 0)),(function (___31809__auto____$3){
return promesa.protocols._bind(repl_tooling.integration.fake_editor.run_command_BANG_(new cljs.core.Keyword(null,"connect-embedded","connect-embedded",610098730)),(function (___31809__auto____$4){
return promesa.protocols._bind(promesa.core.delay.cljs$core$IFn$_invoke$arity$1((1000)),(function (___31809__auto____$5){
return promesa.protocols._bind(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(repl_tooling.integration.fake_editor.state,cljs.core.assoc,new cljs.core.Keyword(null,"filename","filename",-1428840783),"file.cljs"),(function (___31809__auto____$6){
return promesa.protocols._bind(repl_tooling.integration.fake_editor.type("str\n(ns repl-tooling.integration.fixture-app)"),(function (___31809__auto____$7){
return promesa.protocols._bind(repl_tooling.integration.fake_editor.run_command_BANG_(new cljs.core.Keyword(null,"doc-for-var","doc-for-var",376145016)),(function (___31809__auto____$8){
return promesa.protocols._bind(promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(check.async.to_promise(repl_tooling.integration.fake_editor.change_result_p()),(function (left_102486){
return promesa.protocols._bind(check.async.to_promise(/concatenation/),(function (right_102487){
return promesa.protocols._bind(null,(function (___31810__auto____$2){
return promesa.protocols._bind(cljs.test.do_report(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var lft__35783__auto__ = left_102486;
var rgt__35784__auto__ = right_102487;
var qleft__35785__auto__ = new cljs.core.Symbol(null,"left-102486","left-102486",-914818895,null);
var qright__35786__auto__ = new cljs.core.Symbol(null,"right-102487","right-102487",-1148564307,null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})(),new cljs.core.Keyword(null,"expected","expected",1583670997),/concatenation/)),(function (___31809__auto____$9){
return promesa.protocols._promise(new cljs.core.Keyword(null,"done","done",-889844188));
}));
}));
}));
}));
})),(function (___31809__auto____$9){
return promesa.protocols._bind(repl_tooling.integration.fake_editor.click_link("Get source"),(function (___31809__auto____$10){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(check.async.to_promise(repl_tooling.integration.fake_editor.change_result_p()),(function (left_102500){
return promesa.protocols._bind(check.async.to_promise(/StringBuffer/),(function (right_102501){
return promesa.protocols._bind(null,(function (___31810__auto____$2){
return promesa.protocols._bind(cljs.test.do_report(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var lft__35783__auto__ = left_102500;
var rgt__35784__auto__ = right_102501;
var qleft__35785__auto__ = new cljs.core.Symbol(null,"left-102500","left-102500",851890761,null);
var qright__35786__auto__ = new cljs.core.Symbol(null,"right-102501","right-102501",-1344916420,null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})(),new cljs.core.Keyword(null,"expected","expected",1583670997),/StringBuffer/)),(function (___31809__auto____$11){
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
}));
}));
}));
}));
})),(function() { 
var G__102601__delegate = function (___36014__auto__){
return cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
};
var G__102601 = function (var_args){
var ___36014__auto__ = null;
if (arguments.length > 0) {
var G__102602__i = 0, G__102602__a = new Array(arguments.length -  0);
while (G__102602__i < G__102602__a.length) {G__102602__a[G__102602__i] = arguments[G__102602__i + 0]; ++G__102602__i;}
  ___36014__auto__ = new cljs.core.IndexedSeq(G__102602__a,0,null);
} 
return G__102601__delegate.call(this,___36014__auto__);};
G__102601.cljs$lang$maxFixedArity = 0;
G__102601.cljs$lang$applyTo = (function (arglist__102603){
var ___36014__auto__ = cljs.core.seq(arglist__102603);
return G__102601__delegate(___36014__auto__);
});
G__102601.cljs$core$IFn$_invoke$arity$variadic = G__102601__delegate;
return G__102601;
})()
),(function (___31809__auto____$3){
return promesa.protocols._promise(promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._bind(null,(function (___31810__auto____$1){
return promesa.protocols._bind(cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["source for var in ClojureScript"], 0)),(function (___31809__auto____$4){
return promesa.protocols._bind(repl_tooling.integration.fake_editor.clear_results_BANG_(),(function (___31809__auto____$5){
return promesa.protocols._bind(repl_tooling.integration.fake_editor.run_command_BANG_(new cljs.core.Keyword(null,"source-for-var","source-for-var",-8035322)),(function (___31809__auto____$6){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(check.async.to_promise(repl_tooling.integration.fake_editor.change_stdout_p()),(function (left_102505){
return promesa.protocols._bind(check.async.to_promise(/StringBuffer/),(function (right_102506){
return promesa.protocols._bind(null,(function (___31810__auto____$2){
return promesa.protocols._bind(cljs.test.do_report(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var lft__35783__auto__ = left_102505;
var rgt__35784__auto__ = right_102506;
var qleft__35785__auto__ = new cljs.core.Symbol(null,"left-102505","left-102505",1073186139,null);
var qright__35786__auto__ = new cljs.core.Symbol(null,"right-102506","right-102506",101370492,null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})(),new cljs.core.Keyword(null,"expected","expected",1583670997),/StringBuffer/)),(function (___31809__auto____$7){
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
var G__102605__delegate = function (___36014__auto__){
return cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
};
var G__102605 = function (var_args){
var ___36014__auto__ = null;
if (arguments.length > 0) {
var G__102606__i = 0, G__102606__a = new Array(arguments.length -  0);
while (G__102606__i < G__102606__a.length) {G__102606__a[G__102606__i] = arguments[G__102606__i + 0]; ++G__102606__i;}
  ___36014__auto__ = new cljs.core.IndexedSeq(G__102606__a,0,null);
} 
return G__102605__delegate.call(this,___36014__auto__);};
G__102605.cljs$lang$maxFixedArity = 0;
G__102605.cljs$lang$applyTo = (function (arglist__102607){
var ___36014__auto__ = cljs.core.seq(arglist__102607);
return G__102605__delegate(___36014__auto__);
});
G__102605.cljs$core$IFn$_invoke$arity$variadic = G__102605__delegate;
return G__102605;
})()
));
}));
}));
}));
}));
})));
})], 0)),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));

repl_tooling.editor_integration.doc_test.doc_for_var = (function repl_tooling$editor_integration$doc_test$doc_for_var(){
return cljs.test.test_var(repl_tooling.editor_integration.doc_test.doc_for_var.cljs$lang$var);
});
repl_tooling.editor_integration.doc_test.doc_for_var.cljs$lang$test = (function (){
return check.async.async_test_STAR_("documentation for var",(16000),(function (){
return repl_tooling.integration.fake_editor.disconnect_BANG_();
}),promesa.protocols._bind(null,(function (___31810__auto__){
return promesa.protocols._bind(repl_tooling.integration.fake_editor.connect_BANG_.cljs$core$IFn$_invoke$arity$0(),(function (___31809__auto__){
return promesa.protocols._bind(promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._bind(null,(function (___31810__auto____$1){
return promesa.protocols._bind(cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["doc for Clojure"], 0)),(function (___31809__auto____$1){
return promesa.protocols._bind(repl_tooling.integration.fake_editor.type("str"),(function (___31809__auto____$2){
return promesa.protocols._bind(repl_tooling.integration.fake_editor.run_command_BANG_(new cljs.core.Keyword(null,"doc-for-var","doc-for-var",376145016)),(function (___31809__auto____$3){
return promesa.protocols._bind(promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(check.async.to_promise(repl_tooling.integration.fake_editor.change_result_p()),(function (left_102514){
return promesa.protocols._bind(check.async.to_promise(/concatenation/),(function (right_102515){
return promesa.protocols._bind(null,(function (___31810__auto____$2){
return promesa.protocols._bind(cljs.test.do_report(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var lft__35783__auto__ = left_102514;
var rgt__35784__auto__ = right_102515;
var qleft__35785__auto__ = new cljs.core.Symbol(null,"left-102514","left-102514",1718764027,null);
var qright__35786__auto__ = new cljs.core.Symbol(null,"right-102515","right-102515",900108058,null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})(),new cljs.core.Keyword(null,"expected","expected",1583670997),/concatenation/)),(function (___31809__auto____$4){
return promesa.protocols._promise(new cljs.core.Keyword(null,"done","done",-889844188));
}));
}));
}));
}));
})),(function (___31809__auto____$4){
return promesa.protocols._bind(repl_tooling.integration.fake_editor.click_link("Get source"),(function (___31809__auto____$5){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(check.async.to_promise(repl_tooling.integration.fake_editor.change_result_p()),(function (left_102520){
return promesa.protocols._bind(check.async.to_promise(/StringBuilder/),(function (right_102521){
return promesa.protocols._bind(null,(function (___31810__auto____$2){
return promesa.protocols._bind(cljs.test.do_report(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var lft__35783__auto__ = left_102520;
var rgt__35784__auto__ = right_102521;
var qleft__35785__auto__ = new cljs.core.Symbol(null,"left-102520","left-102520",-1297583457,null);
var qright__35786__auto__ = new cljs.core.Symbol(null,"right-102521","right-102521",-2013715579,null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})(),new cljs.core.Keyword(null,"expected","expected",1583670997),/StringBuilder/)),(function (___31809__auto____$6){
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
}));
})),(function() { 
var G__102611__delegate = function (___36014__auto__){
return cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
};
var G__102611 = function (var_args){
var ___36014__auto__ = null;
if (arguments.length > 0) {
var G__102612__i = 0, G__102612__a = new Array(arguments.length -  0);
while (G__102612__i < G__102612__a.length) {G__102612__a[G__102612__i] = arguments[G__102612__i + 0]; ++G__102612__i;}
  ___36014__auto__ = new cljs.core.IndexedSeq(G__102612__a,0,null);
} 
return G__102611__delegate.call(this,___36014__auto__);};
G__102611.cljs$lang$maxFixedArity = 0;
G__102611.cljs$lang$applyTo = (function (arglist__102613){
var ___36014__auto__ = cljs.core.seq(arglist__102613);
return G__102611__delegate(___36014__auto__);
});
G__102611.cljs$core$IFn$_invoke$arity$variadic = G__102611__delegate;
return G__102611;
})()
),(function (___31809__auto____$1){
return promesa.protocols._bind(promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._bind(null,(function (___31810__auto____$1){
return promesa.protocols._bind(cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["source for var in Clojure"], 0)),(function (___31809__auto____$2){
return promesa.protocols._bind(repl_tooling.integration.fake_editor.clear_results_BANG_(),(function (___31809__auto____$3){
return promesa.protocols._bind(repl_tooling.integration.fake_editor.run_command_BANG_(new cljs.core.Keyword(null,"source-for-var","source-for-var",-8035322)),(function (___31809__auto____$4){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(check.async.to_promise(repl_tooling.integration.fake_editor.change_stdout_p()),(function (left_102528){
return promesa.protocols._bind(check.async.to_promise(/StringBuilder/),(function (right_102529){
return promesa.protocols._bind(null,(function (___31810__auto____$2){
return promesa.protocols._bind(cljs.test.do_report(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var lft__35783__auto__ = left_102528;
var rgt__35784__auto__ = right_102529;
var qleft__35785__auto__ = new cljs.core.Symbol(null,"left-102528","left-102528",-664097766,null);
var qright__35786__auto__ = new cljs.core.Symbol(null,"right-102529","right-102529",576119213,null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})(),new cljs.core.Keyword(null,"expected","expected",1583670997),/StringBuilder/)),(function (___31809__auto____$5){
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
var G__102615__delegate = function (___36014__auto__){
return cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
};
var G__102615 = function (var_args){
var ___36014__auto__ = null;
if (arguments.length > 0) {
var G__102616__i = 0, G__102616__a = new Array(arguments.length -  0);
while (G__102616__i < G__102616__a.length) {G__102616__a[G__102616__i] = arguments[G__102616__i + 0]; ++G__102616__i;}
  ___36014__auto__ = new cljs.core.IndexedSeq(G__102616__a,0,null);
} 
return G__102615__delegate.call(this,___36014__auto__);};
G__102615.cljs$lang$maxFixedArity = 0;
G__102615.cljs$lang$applyTo = (function (arglist__102617){
var ___36014__auto__ = cljs.core.seq(arglist__102617);
return G__102615__delegate(___36014__auto__);
});
G__102615.cljs$core$IFn$_invoke$arity$variadic = G__102615__delegate;
return G__102615;
})()
),(function (___31809__auto____$2){
return promesa.protocols._bind(promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._bind(null,(function (___31810__auto____$1){
return promesa.protocols._bind(cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["doc for ClojureScript"], 0)),(function (___31809__auto____$3){
return promesa.protocols._bind(repl_tooling.integration.fake_editor.run_command_BANG_(new cljs.core.Keyword(null,"connect-embedded","connect-embedded",610098730)),(function (___31809__auto____$4){
return promesa.protocols._bind(promesa.core.delay.cljs$core$IFn$_invoke$arity$1((1000)),(function (___31809__auto____$5){
return promesa.protocols._bind(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(repl_tooling.integration.fake_editor.state,cljs.core.assoc,new cljs.core.Keyword(null,"filename","filename",-1428840783),"file.cljs"),(function (___31809__auto____$6){
return promesa.protocols._bind(repl_tooling.integration.fake_editor.type("str\n(ns repl-tooling.integration.fixture-app)"),(function (___31809__auto____$7){
return promesa.protocols._bind(repl_tooling.integration.fake_editor.run_command_BANG_(new cljs.core.Keyword(null,"doc-for-var","doc-for-var",376145016)),(function (___31809__auto____$8){
return promesa.protocols._bind(promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(check.async.to_promise(repl_tooling.integration.fake_editor.change_result_p()),(function (left_102541){
return promesa.protocols._bind(check.async.to_promise(/concatenation/),(function (right_102542){
return promesa.protocols._bind(null,(function (___31810__auto____$2){
return promesa.protocols._bind(cljs.test.do_report(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var lft__35783__auto__ = left_102541;
var rgt__35784__auto__ = right_102542;
var qleft__35785__auto__ = new cljs.core.Symbol(null,"left-102541","left-102541",1260204507,null);
var qright__35786__auto__ = new cljs.core.Symbol(null,"right-102542","right-102542",-1380452183,null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})(),new cljs.core.Keyword(null,"expected","expected",1583670997),/concatenation/)),(function (___31809__auto____$9){
return promesa.protocols._promise(new cljs.core.Keyword(null,"done","done",-889844188));
}));
}));
}));
}));
})),(function (___31809__auto____$9){
return promesa.protocols._bind(repl_tooling.integration.fake_editor.click_link("Get source"),(function (___31809__auto____$10){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(check.async.to_promise(repl_tooling.integration.fake_editor.change_result_p()),(function (left_102545){
return promesa.protocols._bind(check.async.to_promise(/StringBuffer/),(function (right_102546){
return promesa.protocols._bind(null,(function (___31810__auto____$2){
return promesa.protocols._bind(cljs.test.do_report(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var lft__35783__auto__ = left_102545;
var rgt__35784__auto__ = right_102546;
var qleft__35785__auto__ = new cljs.core.Symbol(null,"left-102545","left-102545",-171071110,null);
var qright__35786__auto__ = new cljs.core.Symbol(null,"right-102546","right-102546",1238248548,null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})(),new cljs.core.Keyword(null,"expected","expected",1583670997),/StringBuffer/)),(function (___31809__auto____$11){
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
}));
}));
}));
}));
})),(function() { 
var G__102628__delegate = function (___36014__auto__){
return cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
};
var G__102628 = function (var_args){
var ___36014__auto__ = null;
if (arguments.length > 0) {
var G__102629__i = 0, G__102629__a = new Array(arguments.length -  0);
while (G__102629__i < G__102629__a.length) {G__102629__a[G__102629__i] = arguments[G__102629__i + 0]; ++G__102629__i;}
  ___36014__auto__ = new cljs.core.IndexedSeq(G__102629__a,0,null);
} 
return G__102628__delegate.call(this,___36014__auto__);};
G__102628.cljs$lang$maxFixedArity = 0;
G__102628.cljs$lang$applyTo = (function (arglist__102630){
var ___36014__auto__ = cljs.core.seq(arglist__102630);
return G__102628__delegate(___36014__auto__);
});
G__102628.cljs$core$IFn$_invoke$arity$variadic = G__102628__delegate;
return G__102628;
})()
),(function (___31809__auto____$3){
return promesa.protocols._promise(promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._bind(null,(function (___31810__auto____$1){
return promesa.protocols._bind(cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["source for var in ClojureScript"], 0)),(function (___31809__auto____$4){
return promesa.protocols._bind(repl_tooling.integration.fake_editor.clear_results_BANG_(),(function (___31809__auto____$5){
return promesa.protocols._bind(repl_tooling.integration.fake_editor.run_command_BANG_(new cljs.core.Keyword(null,"source-for-var","source-for-var",-8035322)),(function (___31809__auto____$6){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(check.async.to_promise(repl_tooling.integration.fake_editor.change_stdout_p()),(function (left_102556){
return promesa.protocols._bind(check.async.to_promise(/StringBuffer/),(function (right_102557){
return promesa.protocols._bind(null,(function (___31810__auto____$2){
return promesa.protocols._bind(cljs.test.do_report(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var lft__35783__auto__ = left_102556;
var rgt__35784__auto__ = right_102557;
var qleft__35785__auto__ = new cljs.core.Symbol(null,"left-102556","left-102556",1748320094,null);
var qright__35786__auto__ = new cljs.core.Symbol(null,"right-102557","right-102557",1422605317,null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})(),new cljs.core.Keyword(null,"expected","expected",1583670997),/StringBuffer/)),(function (___31809__auto____$7){
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
var G__102632__delegate = function (___36014__auto__){
return cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
};
var G__102632 = function (var_args){
var ___36014__auto__ = null;
if (arguments.length > 0) {
var G__102633__i = 0, G__102633__a = new Array(arguments.length -  0);
while (G__102633__i < G__102633__a.length) {G__102633__a[G__102633__i] = arguments[G__102633__i + 0]; ++G__102633__i;}
  ___36014__auto__ = new cljs.core.IndexedSeq(G__102633__a,0,null);
} 
return G__102632__delegate.call(this,___36014__auto__);};
G__102632.cljs$lang$maxFixedArity = 0;
G__102632.cljs$lang$applyTo = (function (arglist__102634){
var ___36014__auto__ = cljs.core.seq(arglist__102634);
return G__102632__delegate(___36014__auto__);
});
G__102632.cljs$core$IFn$_invoke$arity$variadic = G__102632__delegate;
return G__102632;
})()
));
}));
}));
}));
}));
})));
});

(repl_tooling.editor_integration.doc_test.doc_for_var.cljs$lang$var = new cljs.core.Var(function(){return repl_tooling.editor_integration.doc_test.doc_for_var;},new cljs.core.Symbol("repl-tooling.editor-integration.doc-test","doc-for-var","repl-tooling.editor-integration.doc-test/doc-for-var",-1052753472,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"repl-tooling.editor-integration.doc-test","repl-tooling.editor-integration.doc-test",884888529,null),new cljs.core.Symbol(null,"doc-for-var","doc-for-var",2016676543,null),"repl_tooling/editor_integration/doc_test.cljs",27,1,34,34,cljs.core.List.EMPTY,null,(cljs.core.truth_(repl_tooling.editor_integration.doc_test.doc_for_var)?repl_tooling.editor_integration.doc_test.doc_for_var.cljs$lang$test:null)])));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"repl_tooling.editor_integration.doc_test","repl_tooling.editor_integration.doc_test",-1333967307),new cljs.core.Keyword(null,"fake-editor","fake-editor",-2015963141)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"fake-editor",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof repl_tooling !== 'undefined') && (typeof repl_tooling.editor_integration !== 'undefined') && (typeof repl_tooling.editor_integration.doc_test !== 'undefined') && (typeof repl_tooling.editor_integration.doc_test.t_repl_tooling$editor_integration$doc_test102567 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
repl_tooling.editor_integration.doc_test.t_repl_tooling$editor_integration$doc_test102567 = (function (meta102568){
this.meta102568 = meta102568;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(repl_tooling.editor_integration.doc_test.t_repl_tooling$editor_integration$doc_test102567.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_102569,meta102568__$1){
var self__ = this;
var _102569__$1 = this;
return (new repl_tooling.editor_integration.doc_test.t_repl_tooling$editor_integration$doc_test102567(meta102568__$1));
}));

(repl_tooling.editor_integration.doc_test.t_repl_tooling$editor_integration$doc_test102567.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_102569){
var self__ = this;
var _102569__$1 = this;
return self__.meta102568;
}));

(repl_tooling.editor_integration.doc_test.t_repl_tooling$editor_integration$doc_test102567.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(repl_tooling.editor_integration.doc_test.t_repl_tooling$editor_integration$doc_test102567.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__54113__auto__,devcard_opts__54114__auto__){
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

(repl_tooling.editor_integration.doc_test.t_repl_tooling$editor_integration$doc_test102567.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta102568","meta102568",1393778082,null)], null);
}));

(repl_tooling.editor_integration.doc_test.t_repl_tooling$editor_integration$doc_test102567.cljs$lang$type = true);

(repl_tooling.editor_integration.doc_test.t_repl_tooling$editor_integration$doc_test102567.cljs$lang$ctorStr = "repl-tooling.editor-integration.doc-test/t_repl_tooling$editor_integration$doc_test102567");

(repl_tooling.editor_integration.doc_test.t_repl_tooling$editor_integration$doc_test102567.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"repl-tooling.editor-integration.doc-test/t_repl_tooling$editor_integration$doc_test102567");
}));

/**
 * Positional factory function for repl-tooling.editor-integration.doc-test/t_repl_tooling$editor_integration$doc_test102567.
 */
repl_tooling.editor_integration.doc_test.__GT_t_repl_tooling$editor_integration$doc_test102567 = (function repl_tooling$editor_integration$doc_test$__GT_t_repl_tooling$editor_integration$doc_test102567(meta102568){
return (new repl_tooling.editor_integration.doc_test.t_repl_tooling$editor_integration$doc_test102567(meta102568));
});

}

return (new repl_tooling.editor_integration.doc_test.t_repl_tooling$editor_integration$doc_test102567(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),repl_tooling.integration.fake_editor.state,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));

//# sourceMappingURL=repl_tooling.editor_integration.doc_test.js.map
