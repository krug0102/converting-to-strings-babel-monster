goog.provide('repl_tooling.editor_integration.renderer.interactive_test');
repl_tooling.editor_integration.renderer.interactive_test.render = (function repl_tooling$editor_integration$renderer$interactive_test$render(interactive_obj){
var text = ["'",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([interactive_obj], 0))].join('');
repl_tooling.integration.fake_editor.type(text);

return repl_tooling.integration.fake_editor.run_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"evaluate-and-render","evaluate-and-render",482317356),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",-1790561697),text,new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)], null),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"interactive","interactive",-2024078362),true,new cljs.core.Keyword(null,"aux","aux",-10408640),true], null)], null)], 0));
});
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"repl_tooling.editor_integration.renderer.interactive_test","repl_tooling.editor_integration.renderer.interactive_test",1099348807),new cljs.core.Keyword(null,"interactive-renderer","interactive-renderer",846816379)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"interactive-renderer",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){
return check.async.async_test_STAR_("pathom resolver customization",(16000),(function (){
return repl_tooling.integration.fake_editor.disconnect_BANG_();
}),promesa.protocols._bind(null,(function (___31810__auto__){
return promesa.protocols._bind(repl_tooling.integration.fake_editor.connect_BANG_.cljs$core$IFn$_invoke$arity$0(),(function (___31809__auto__){
return promesa.protocols._bind(promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._bind(null,(function (___31810__auto____$1){
return promesa.protocols._bind(cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["renders initial state"], 0)),(function (___31809__auto____$1){
return promesa.protocols._bind(repl_tooling.editor_integration.renderer.interactive_test.render(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"html","html",-998796897),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.Symbol(null,"?state","?state",-1752482484,null)], null),new cljs.core.Keyword(null,"state","state",-1988618099),(10)], null)),(function (___31809__auto____$2){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(check.async.to_promise(repl_tooling.integration.fake_editor.change_result_p()),(function (left_101225){
return promesa.protocols._bind(check.async.to_promise("10"),(function (right_101226){
return promesa.protocols._bind(null,(function (___31810__auto____$2){
return promesa.protocols._bind(cljs.test.do_report(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var lft__35783__auto__ = left_101225;
var rgt__35784__auto__ = right_101226;
var qleft__35785__auto__ = new cljs.core.Symbol(null,"left-101225","left-101225",317528399,null);
var qright__35786__auto__ = new cljs.core.Symbol(null,"right-101226","right-101226",-920646716,null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})(),new cljs.core.Keyword(null,"expected","expected",1583670997),"10")),(function (___31809__auto____$3){
return promesa.protocols._promise(new cljs.core.Keyword(null,"done","done",-889844188));
}));
}));
}));
}));
})));
}));
}));
})),(function() { 
var G__101409__delegate = function (___36014__auto__){
return cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
};
var G__101409 = function (var_args){
var ___36014__auto__ = null;
if (arguments.length > 0) {
var G__101411__i = 0, G__101411__a = new Array(arguments.length -  0);
while (G__101411__i < G__101411__a.length) {G__101411__a[G__101411__i] = arguments[G__101411__i + 0]; ++G__101411__i;}
  ___36014__auto__ = new cljs.core.IndexedSeq(G__101411__a,0,null);
} 
return G__101409__delegate.call(this,___36014__auto__);};
G__101409.cljs$lang$maxFixedArity = 0;
G__101409.cljs$lang$applyTo = (function (arglist__101412){
var ___36014__auto__ = cljs.core.seq(arglist__101412);
return G__101409__delegate(___36014__auto__);
});
G__101409.cljs$core$IFn$_invoke$arity$variadic = G__101409__delegate;
return G__101409;
})()
),(function (___31809__auto____$1){
return promesa.protocols._bind(promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._bind(null,(function (___31810__auto____$1){
return promesa.protocols._bind(cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["updates initial state with fn"], 0)),(function (___31809__auto____$2){
return promesa.protocols._bind(repl_tooling.editor_integration.renderer.interactive_test.render(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"html","html",-998796897),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),new cljs.core.Symbol(null,"?inc","?inc",1272739078,null)], null),new cljs.core.Symbol(null,"?state","?state",-1752482484,null)], null),new cljs.core.Keyword(null,"state","state",-1988618099),(20),new cljs.core.Keyword(null,"fns","fns",1185138786),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"inc","inc",-1316026094),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"event","event",1941966969,null),new cljs.core.Symbol(null,"state","state",-348086572,null)], null),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"state","state",-348086572,null)))], null)], null)),(function (___31809__auto____$3){
return promesa.protocols._bind(promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(check.async.to_promise(repl_tooling.integration.fake_editor.change_result_p()),(function (left_101233){
return promesa.protocols._bind(check.async.to_promise("20"),(function (right_101234){
return promesa.protocols._bind(null,(function (___31810__auto____$2){
return promesa.protocols._bind(cljs.test.do_report(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var lft__35783__auto__ = left_101233;
var rgt__35784__auto__ = right_101234;
var qleft__35785__auto__ = new cljs.core.Symbol(null,"left-101233","left-101233",-2133075871,null);
var qright__35786__auto__ = new cljs.core.Symbol(null,"right-101234","right-101234",-1616077453,null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})(),new cljs.core.Keyword(null,"expected","expected",1583670997),"20")),(function (___31809__auto____$4){
return promesa.protocols._promise(new cljs.core.Keyword(null,"done","done",-889844188));
}));
}));
}));
}));
})),(function (___31809__auto____$4){
return promesa.protocols._bind(repl_tooling.integration.ui_macros.click_on("20"),(function (___31809__auto____$5){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(check.async.to_promise(repl_tooling.integration.fake_editor.change_result_p()),(function (left_101242){
return promesa.protocols._bind(check.async.to_promise("21"),(function (right_101243){
return promesa.protocols._bind(null,(function (___31810__auto____$2){
return promesa.protocols._bind(cljs.test.do_report(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var lft__35783__auto__ = left_101242;
var rgt__35784__auto__ = right_101243;
var qleft__35785__auto__ = new cljs.core.Symbol(null,"left-101242","left-101242",-1949229761,null);
var qright__35786__auto__ = new cljs.core.Symbol(null,"right-101243","right-101243",-914660947,null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})(),new cljs.core.Keyword(null,"expected","expected",1583670997),"21")),(function (___31809__auto____$6){
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
var G__101416__delegate = function (___36014__auto__){
return cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
};
var G__101416 = function (var_args){
var ___36014__auto__ = null;
if (arguments.length > 0) {
var G__101417__i = 0, G__101417__a = new Array(arguments.length -  0);
while (G__101417__i < G__101417__a.length) {G__101417__a[G__101417__i] = arguments[G__101417__i + 0]; ++G__101417__i;}
  ___36014__auto__ = new cljs.core.IndexedSeq(G__101417__a,0,null);
} 
return G__101416__delegate.call(this,___36014__auto__);};
G__101416.cljs$lang$maxFixedArity = 0;
G__101416.cljs$lang$applyTo = (function (arglist__101418){
var ___36014__auto__ = cljs.core.seq(arglist__101418);
return G__101416__delegate(___36014__auto__);
});
G__101416.cljs$core$IFn$_invoke$arity$variadic = G__101416__delegate;
return G__101416;
})()
),(function (___31809__auto____$2){
return promesa.protocols._bind(promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._bind(null,(function (___31810__auto____$1){
return promesa.protocols._bind(cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["maps in states"], 0)),(function (___31809__auto____$3){
return promesa.protocols._bind(repl_tooling.editor_integration.renderer.interactive_test.render(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"html","html",-998796897),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.list(new cljs.core.Keyword(null,"val","val",128701612),new cljs.core.Symbol(null,"?state","?state",-1752482484,null))], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"val","val",128701612),(20)], null)], null)),(function (___31809__auto____$4){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(check.async.to_promise(repl_tooling.integration.fake_editor.change_result_p()),(function (left_101254){
return promesa.protocols._bind(check.async.to_promise("20"),(function (right_101255){
return promesa.protocols._bind(null,(function (___31810__auto____$2){
return promesa.protocols._bind(cljs.test.do_report(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var lft__35783__auto__ = left_101254;
var rgt__35784__auto__ = right_101255;
var qleft__35785__auto__ = new cljs.core.Symbol(null,"left-101254","left-101254",-1118587668,null);
var qright__35786__auto__ = new cljs.core.Symbol(null,"right-101255","right-101255",-1118766529,null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})(),new cljs.core.Keyword(null,"expected","expected",1583670997),"20")),(function (___31809__auto____$5){
return promesa.protocols._promise(new cljs.core.Keyword(null,"done","done",-889844188));
}));
}));
}));
}));
})));
}));
}));
})),(function() { 
var G__101419__delegate = function (___36014__auto__){
return cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
};
var G__101419 = function (var_args){
var ___36014__auto__ = null;
if (arguments.length > 0) {
var G__101420__i = 0, G__101420__a = new Array(arguments.length -  0);
while (G__101420__i < G__101420__a.length) {G__101420__a[G__101420__i] = arguments[G__101420__i + 0]; ++G__101420__i;}
  ___36014__auto__ = new cljs.core.IndexedSeq(G__101420__a,0,null);
} 
return G__101419__delegate.call(this,___36014__auto__);};
G__101419.cljs$lang$maxFixedArity = 0;
G__101419.cljs$lang$applyTo = (function (arglist__101421){
var ___36014__auto__ = cljs.core.seq(arglist__101421);
return G__101419__delegate(___36014__auto__);
});
G__101419.cljs$core$IFn$_invoke$arity$variadic = G__101419__delegate;
return G__101419;
})()
),(function (___31809__auto____$3){
return promesa.protocols._bind(promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._bind(null,(function (___31810__auto____$1){
return promesa.protocols._bind(cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["nested state"], 0)),(function (___31809__auto____$4){
return promesa.protocols._bind(repl_tooling.editor_integration.renderer.interactive_test.render(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"html","html",-998796897),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.list(new cljs.core.Keyword(null,"val","val",128701612),cljs.core.list(new cljs.core.Keyword(null,"v","v",21465059),new cljs.core.Symbol(null,"?state","?state",-1752482484,null)))], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"v","v",21465059),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"val","val",128701612),(21)], null)], null)], null)),(function (___31809__auto____$5){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(check.async.to_promise(repl_tooling.integration.fake_editor.change_result_p()),(function (left_101269){
return promesa.protocols._bind(check.async.to_promise("21"),(function (right_101270){
return promesa.protocols._bind(null,(function (___31810__auto____$2){
return promesa.protocols._bind(cljs.test.do_report(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var lft__35783__auto__ = left_101269;
var rgt__35784__auto__ = right_101270;
var qleft__35785__auto__ = new cljs.core.Symbol(null,"left-101269","left-101269",190522752,null);
var qright__35786__auto__ = new cljs.core.Symbol(null,"right-101270","right-101270",-1051197862,null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})(),new cljs.core.Keyword(null,"expected","expected",1583670997),"21")),(function (___31809__auto____$6){
return promesa.protocols._promise(new cljs.core.Keyword(null,"done","done",-889844188));
}));
}));
}));
}));
})));
}));
}));
})),(function() { 
var G__101422__delegate = function (___36014__auto__){
return cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
};
var G__101422 = function (var_args){
var ___36014__auto__ = null;
if (arguments.length > 0) {
var G__101423__i = 0, G__101423__a = new Array(arguments.length -  0);
while (G__101423__i < G__101423__a.length) {G__101423__a[G__101423__i] = arguments[G__101423__i + 0]; ++G__101423__i;}
  ___36014__auto__ = new cljs.core.IndexedSeq(G__101423__a,0,null);
} 
return G__101422__delegate.call(this,___36014__auto__);};
G__101422.cljs$lang$maxFixedArity = 0;
G__101422.cljs$lang$applyTo = (function (arglist__101424){
var ___36014__auto__ = cljs.core.seq(arglist__101424);
return G__101422__delegate(___36014__auto__);
});
G__101422.cljs$core$IFn$_invoke$arity$variadic = G__101422__delegate;
return G__101422;
})()
),(function (___31809__auto____$4){
return promesa.protocols._bind(promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._bind(null,(function (___31810__auto____$1){
return promesa.protocols._bind(cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["code on HTML"], 0)),(function (___31809__auto____$5){
return promesa.protocols._bind(repl_tooling.editor_integration.renderer.interactive_test.render(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"html","html",-998796897),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__101218#","p1__101218#",-641722082,null)], null),cljs.core.list(new cljs.core.Symbol(null,"vector","vector",-751469611,null),new cljs.core.Keyword(null,"span","span",1394872991),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"p1__101218#","p1__101218#",-641722082,null)))),cljs.core.list(new cljs.core.Keyword(null,"vec","vec",-657847931),new cljs.core.Symbol(null,"?state","?state",-1752482484,null)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.list(new cljs.core.Symbol(null,"pr-str","pr-str",-2066912145,null),cljs.core.list(new cljs.core.Symbol("walk","postwalk-replace","walk/postwalk-replace",91610132,null),new cljs.core.PersistentArrayMap(null, 1, [(1),(2)], null),cljs.core.list(new cljs.core.Keyword(null,"nested","nested",18943849),new cljs.core.Symbol(null,"?state","?state",-1752482484,null))))], null)], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"vec","vec",-657847931),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3)], null),new cljs.core.Keyword(null,"nested","nested",18943849),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"some","some",-1951079573),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nested","nested",18943849),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null)], null)], null)], null)], null)),(function (___31809__auto____$6){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(check.async.to_promise(repl_tooling.integration.fake_editor.change_result_p()),(function (left_101288){
return promesa.protocols._bind(check.async.to_promise("2\n3\n4\n{:some {:nested [2 2]}}"),(function (right_101289){
return promesa.protocols._bind(null,(function (___31810__auto____$2){
return promesa.protocols._bind(cljs.test.do_report(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var lft__35783__auto__ = left_101288;
var rgt__35784__auto__ = right_101289;
var qleft__35785__auto__ = new cljs.core.Symbol(null,"left-101288","left-101288",-2134826138,null);
var qright__35786__auto__ = new cljs.core.Symbol(null,"right-101289","right-101289",1234817807,null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})(),new cljs.core.Keyword(null,"expected","expected",1583670997),"2\n3\n4\n{:some {:nested [2 2]}}")),(function (___31809__auto____$7){
return promesa.protocols._promise(new cljs.core.Keyword(null,"done","done",-889844188));
}));
}));
}));
}));
})));
}));
}));
})),(function() { 
var G__101429__delegate = function (___36014__auto__){
return cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
};
var G__101429 = function (var_args){
var ___36014__auto__ = null;
if (arguments.length > 0) {
var G__101430__i = 0, G__101430__a = new Array(arguments.length -  0);
while (G__101430__i < G__101430__a.length) {G__101430__a[G__101430__i] = arguments[G__101430__i + 0]; ++G__101430__i;}
  ___36014__auto__ = new cljs.core.IndexedSeq(G__101430__a,0,null);
} 
return G__101429__delegate.call(this,___36014__auto__);};
G__101429.cljs$lang$maxFixedArity = 0;
G__101429.cljs$lang$applyTo = (function (arglist__101431){
var ___36014__auto__ = cljs.core.seq(arglist__101431);
return G__101429__delegate(___36014__auto__);
});
G__101429.cljs$core$IFn$_invoke$arity$variadic = G__101429__delegate;
return G__101429;
})()
),(function (___31809__auto____$5){
return promesa.protocols._bind(promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._bind(null,(function (___31810__auto____$1){
return promesa.protocols._bind(cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["passing params to callback fns"], 0)),(function (___31809__auto____$6){
return promesa.protocols._bind(repl_tooling.editor_integration.renderer.interactive_test.render(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"html","html",-998796897),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),cljs.core.list(new cljs.core.Symbol(null,"?inc","?inc",1272739078,null),new cljs.core.Keyword(null,"n","n",562130025))], null),cljs.core.list(new cljs.core.Keyword(null,"n","n",562130025),new cljs.core.Symbol(null,"?state","?state",-1752482484,null))], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"n","n",562130025),(20)], null),new cljs.core.Keyword(null,"fns","fns",1185138786),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"inc","inc",-1316026094),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"event","event",1941966969,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"key","key",124488940,null)], null),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"key","key",124488940,null),new cljs.core.Symbol(null,"inc","inc",324505433,null)))], null)], null)),(function (___31809__auto____$7){
return promesa.protocols._bind(promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(check.async.to_promise(repl_tooling.integration.fake_editor.change_result_p()),(function (left_101299){
return promesa.protocols._bind(check.async.to_promise("20"),(function (right_101300){
return promesa.protocols._bind(null,(function (___31810__auto____$2){
return promesa.protocols._bind(cljs.test.do_report(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var lft__35783__auto__ = left_101299;
var rgt__35784__auto__ = right_101300;
var qleft__35785__auto__ = new cljs.core.Symbol(null,"left-101299","left-101299",520496577,null);
var qright__35786__auto__ = new cljs.core.Symbol(null,"right-101300","right-101300",-1421360147,null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})(),new cljs.core.Keyword(null,"expected","expected",1583670997),"20")),(function (___31809__auto____$8){
return promesa.protocols._promise(new cljs.core.Keyword(null,"done","done",-889844188));
}));
}));
}));
}));
})),(function (___31809__auto____$8){
return promesa.protocols._bind(repl_tooling.integration.ui_macros.click_on("20"),(function (___31809__auto____$9){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(check.async.to_promise(repl_tooling.integration.fake_editor.change_result_p()),(function (left_101317){
return promesa.protocols._bind(check.async.to_promise("21"),(function (right_101318){
return promesa.protocols._bind(null,(function (___31810__auto____$2){
return promesa.protocols._bind(cljs.test.do_report(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var lft__35783__auto__ = left_101317;
var rgt__35784__auto__ = right_101318;
var qleft__35785__auto__ = new cljs.core.Symbol(null,"left-101317","left-101317",-312484926,null);
var qright__35786__auto__ = new cljs.core.Symbol(null,"right-101318","right-101318",1688381250,null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})(),new cljs.core.Keyword(null,"expected","expected",1583670997),"21")),(function (___31809__auto____$10){
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
var G__101436__delegate = function (___36014__auto__){
return cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
};
var G__101436 = function (var_args){
var ___36014__auto__ = null;
if (arguments.length > 0) {
var G__101437__i = 0, G__101437__a = new Array(arguments.length -  0);
while (G__101437__i < G__101437__a.length) {G__101437__a[G__101437__i] = arguments[G__101437__i + 0]; ++G__101437__i;}
  ___36014__auto__ = new cljs.core.IndexedSeq(G__101437__a,0,null);
} 
return G__101436__delegate.call(this,___36014__auto__);};
G__101436.cljs$lang$maxFixedArity = 0;
G__101436.cljs$lang$applyTo = (function (arglist__101439){
var ___36014__auto__ = cljs.core.seq(arglist__101439);
return G__101436__delegate(___36014__auto__);
});
G__101436.cljs$core$IFn$_invoke$arity$variadic = G__101436__delegate;
return G__101436;
})()
),(function (___31809__auto____$6){
return promesa.protocols._promise(promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._bind(null,(function (___31810__auto____$1){
return promesa.protocols._bind(cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["renders tooling's EDN renderer"], 0)),(function (___31809__auto____$7){
return promesa.protocols._bind(repl_tooling.editor_integration.configs.register_custom_tags_BANG_(cljs.core.PersistentArrayMap.EMPTY),(function (___31809__auto____$8){
return promesa.protocols._bind(repl_tooling.editor_integration.renderer.interactive_test.render(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"html","html",-998796897),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("div","clj","div/clj",-660599991),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(1),(2),(3),(4)))], null)], null)),(function (___31809__auto____$9){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(check.async.to_promise(repl_tooling.integration.fake_editor.change_result_p()),(function (left_101327){
return promesa.protocols._bind(check.async.to_promise("(\n+\n \n1\n \n2\n \n3\n \n4\n)"),(function (right_101328){
return promesa.protocols._bind(null,(function (___31810__auto____$2){
return promesa.protocols._bind(cljs.test.do_report(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var lft__35783__auto__ = left_101327;
var rgt__35784__auto__ = right_101328;
var qleft__35785__auto__ = new cljs.core.Symbol(null,"left-101327","left-101327",-747945202,null);
var qright__35786__auto__ = new cljs.core.Symbol(null,"right-101328","right-101328",-1958748381,null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})(),new cljs.core.Keyword(null,"expected","expected",1583670997),"(\n+\n \n1\n \n2\n \n3\n \n4\n)")),(function (___31809__auto____$10){
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
var G__101443__delegate = function (___36014__auto__){
return cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
};
var G__101443 = function (var_args){
var ___36014__auto__ = null;
if (arguments.length > 0) {
var G__101444__i = 0, G__101444__a = new Array(arguments.length -  0);
while (G__101444__i < G__101444__a.length) {G__101444__a[G__101444__i] = arguments[G__101444__i + 0]; ++G__101444__i;}
  ___36014__auto__ = new cljs.core.IndexedSeq(G__101444__a,0,null);
} 
return G__101443__delegate.call(this,___36014__auto__);};
G__101443.cljs$lang$maxFixedArity = 0;
G__101443.cljs$lang$applyTo = (function (arglist__101445){
var ___36014__auto__ = cljs.core.seq(arglist__101445);
return G__101443__delegate(___36014__auto__);
});
G__101443.cljs$core$IFn$_invoke$arity$variadic = G__101443__delegate;
return G__101443;
})()
));
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

repl_tooling.editor_integration.renderer.interactive_test.interactive_renderer = (function repl_tooling$editor_integration$renderer$interactive_test$interactive_renderer(){
return cljs.test.test_var(repl_tooling.editor_integration.renderer.interactive_test.interactive_renderer.cljs$lang$var);
});
repl_tooling.editor_integration.renderer.interactive_test.interactive_renderer.cljs$lang$test = (function (){
return check.async.async_test_STAR_("pathom resolver customization",(16000),(function (){
return repl_tooling.integration.fake_editor.disconnect_BANG_();
}),promesa.protocols._bind(null,(function (___31810__auto__){
return promesa.protocols._bind(repl_tooling.integration.fake_editor.connect_BANG_.cljs$core$IFn$_invoke$arity$0(),(function (___31809__auto__){
return promesa.protocols._bind(promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._bind(null,(function (___31810__auto____$1){
return promesa.protocols._bind(cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["renders initial state"], 0)),(function (___31809__auto____$1){
return promesa.protocols._bind(repl_tooling.editor_integration.renderer.interactive_test.render(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"html","html",-998796897),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.Symbol(null,"?state","?state",-1752482484,null)], null),new cljs.core.Keyword(null,"state","state",-1988618099),(10)], null)),(function (___31809__auto____$2){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(check.async.to_promise(repl_tooling.integration.fake_editor.change_result_p()),(function (left_101329){
return promesa.protocols._bind(check.async.to_promise("10"),(function (right_101330){
return promesa.protocols._bind(null,(function (___31810__auto____$2){
return promesa.protocols._bind(cljs.test.do_report(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var lft__35783__auto__ = left_101329;
var rgt__35784__auto__ = right_101330;
var qleft__35785__auto__ = new cljs.core.Symbol(null,"left-101329","left-101329",1429660298,null);
var qright__35786__auto__ = new cljs.core.Symbol(null,"right-101330","right-101330",-1592128927,null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})(),new cljs.core.Keyword(null,"expected","expected",1583670997),"10")),(function (___31809__auto____$3){
return promesa.protocols._promise(new cljs.core.Keyword(null,"done","done",-889844188));
}));
}));
}));
}));
})));
}));
}));
})),(function() { 
var G__101450__delegate = function (___36014__auto__){
return cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
};
var G__101450 = function (var_args){
var ___36014__auto__ = null;
if (arguments.length > 0) {
var G__101453__i = 0, G__101453__a = new Array(arguments.length -  0);
while (G__101453__i < G__101453__a.length) {G__101453__a[G__101453__i] = arguments[G__101453__i + 0]; ++G__101453__i;}
  ___36014__auto__ = new cljs.core.IndexedSeq(G__101453__a,0,null);
} 
return G__101450__delegate.call(this,___36014__auto__);};
G__101450.cljs$lang$maxFixedArity = 0;
G__101450.cljs$lang$applyTo = (function (arglist__101454){
var ___36014__auto__ = cljs.core.seq(arglist__101454);
return G__101450__delegate(___36014__auto__);
});
G__101450.cljs$core$IFn$_invoke$arity$variadic = G__101450__delegate;
return G__101450;
})()
),(function (___31809__auto____$1){
return promesa.protocols._bind(promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._bind(null,(function (___31810__auto____$1){
return promesa.protocols._bind(cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["updates initial state with fn"], 0)),(function (___31809__auto____$2){
return promesa.protocols._bind(repl_tooling.editor_integration.renderer.interactive_test.render(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"html","html",-998796897),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),new cljs.core.Symbol(null,"?inc","?inc",1272739078,null)], null),new cljs.core.Symbol(null,"?state","?state",-1752482484,null)], null),new cljs.core.Keyword(null,"state","state",-1988618099),(20),new cljs.core.Keyword(null,"fns","fns",1185138786),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"inc","inc",-1316026094),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"event","event",1941966969,null),new cljs.core.Symbol(null,"state","state",-348086572,null)], null),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"state","state",-348086572,null)))], null)], null)),(function (___31809__auto____$3){
return promesa.protocols._bind(promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(check.async.to_promise(repl_tooling.integration.fake_editor.change_result_p()),(function (left_101331){
return promesa.protocols._bind(check.async.to_promise("20"),(function (right_101332){
return promesa.protocols._bind(null,(function (___31810__auto____$2){
return promesa.protocols._bind(cljs.test.do_report(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var lft__35783__auto__ = left_101331;
var rgt__35784__auto__ = right_101332;
var qleft__35785__auto__ = new cljs.core.Symbol(null,"left-101331","left-101331",-1290577425,null);
var qright__35786__auto__ = new cljs.core.Symbol(null,"right-101332","right-101332",1891004373,null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})(),new cljs.core.Keyword(null,"expected","expected",1583670997),"20")),(function (___31809__auto____$4){
return promesa.protocols._promise(new cljs.core.Keyword(null,"done","done",-889844188));
}));
}));
}));
}));
})),(function (___31809__auto____$4){
return promesa.protocols._bind(repl_tooling.integration.ui_macros.click_on("20"),(function (___31809__auto____$5){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(check.async.to_promise(repl_tooling.integration.fake_editor.change_result_p()),(function (left_101333){
return promesa.protocols._bind(check.async.to_promise("21"),(function (right_101334){
return promesa.protocols._bind(null,(function (___31810__auto____$2){
return promesa.protocols._bind(cljs.test.do_report(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var lft__35783__auto__ = left_101333;
var rgt__35784__auto__ = right_101334;
var qleft__35785__auto__ = new cljs.core.Symbol(null,"left-101333","left-101333",-44843776,null);
var qright__35786__auto__ = new cljs.core.Symbol(null,"right-101334","right-101334",-128891864,null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})(),new cljs.core.Keyword(null,"expected","expected",1583670997),"21")),(function (___31809__auto____$6){
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
var G__101462__delegate = function (___36014__auto__){
return cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
};
var G__101462 = function (var_args){
var ___36014__auto__ = null;
if (arguments.length > 0) {
var G__101463__i = 0, G__101463__a = new Array(arguments.length -  0);
while (G__101463__i < G__101463__a.length) {G__101463__a[G__101463__i] = arguments[G__101463__i + 0]; ++G__101463__i;}
  ___36014__auto__ = new cljs.core.IndexedSeq(G__101463__a,0,null);
} 
return G__101462__delegate.call(this,___36014__auto__);};
G__101462.cljs$lang$maxFixedArity = 0;
G__101462.cljs$lang$applyTo = (function (arglist__101464){
var ___36014__auto__ = cljs.core.seq(arglist__101464);
return G__101462__delegate(___36014__auto__);
});
G__101462.cljs$core$IFn$_invoke$arity$variadic = G__101462__delegate;
return G__101462;
})()
),(function (___31809__auto____$2){
return promesa.protocols._bind(promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._bind(null,(function (___31810__auto____$1){
return promesa.protocols._bind(cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["maps in states"], 0)),(function (___31809__auto____$3){
return promesa.protocols._bind(repl_tooling.editor_integration.renderer.interactive_test.render(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"html","html",-998796897),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.list(new cljs.core.Keyword(null,"val","val",128701612),new cljs.core.Symbol(null,"?state","?state",-1752482484,null))], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"val","val",128701612),(20)], null)], null)),(function (___31809__auto____$4){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(check.async.to_promise(repl_tooling.integration.fake_editor.change_result_p()),(function (left_101341){
return promesa.protocols._bind(check.async.to_promise("20"),(function (right_101342){
return promesa.protocols._bind(null,(function (___31810__auto____$2){
return promesa.protocols._bind(cljs.test.do_report(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var lft__35783__auto__ = left_101341;
var rgt__35784__auto__ = right_101342;
var qleft__35785__auto__ = new cljs.core.Symbol(null,"left-101341","left-101341",-743891491,null);
var qright__35786__auto__ = new cljs.core.Symbol(null,"right-101342","right-101342",1777035147,null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})(),new cljs.core.Keyword(null,"expected","expected",1583670997),"20")),(function (___31809__auto____$5){
return promesa.protocols._promise(new cljs.core.Keyword(null,"done","done",-889844188));
}));
}));
}));
}));
})));
}));
}));
})),(function() { 
var G__101470__delegate = function (___36014__auto__){
return cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
};
var G__101470 = function (var_args){
var ___36014__auto__ = null;
if (arguments.length > 0) {
var G__101471__i = 0, G__101471__a = new Array(arguments.length -  0);
while (G__101471__i < G__101471__a.length) {G__101471__a[G__101471__i] = arguments[G__101471__i + 0]; ++G__101471__i;}
  ___36014__auto__ = new cljs.core.IndexedSeq(G__101471__a,0,null);
} 
return G__101470__delegate.call(this,___36014__auto__);};
G__101470.cljs$lang$maxFixedArity = 0;
G__101470.cljs$lang$applyTo = (function (arglist__101472){
var ___36014__auto__ = cljs.core.seq(arglist__101472);
return G__101470__delegate(___36014__auto__);
});
G__101470.cljs$core$IFn$_invoke$arity$variadic = G__101470__delegate;
return G__101470;
})()
),(function (___31809__auto____$3){
return promesa.protocols._bind(promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._bind(null,(function (___31810__auto____$1){
return promesa.protocols._bind(cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["nested state"], 0)),(function (___31809__auto____$4){
return promesa.protocols._bind(repl_tooling.editor_integration.renderer.interactive_test.render(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"html","html",-998796897),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.list(new cljs.core.Keyword(null,"val","val",128701612),cljs.core.list(new cljs.core.Keyword(null,"v","v",21465059),new cljs.core.Symbol(null,"?state","?state",-1752482484,null)))], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"v","v",21465059),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"val","val",128701612),(21)], null)], null)], null)),(function (___31809__auto____$5){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(check.async.to_promise(repl_tooling.integration.fake_editor.change_result_p()),(function (left_101348){
return promesa.protocols._bind(check.async.to_promise("21"),(function (right_101349){
return promesa.protocols._bind(null,(function (___31810__auto____$2){
return promesa.protocols._bind(cljs.test.do_report(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var lft__35783__auto__ = left_101348;
var rgt__35784__auto__ = right_101349;
var qleft__35785__auto__ = new cljs.core.Symbol(null,"left-101348","left-101348",-1519237947,null);
var qright__35786__auto__ = new cljs.core.Symbol(null,"right-101349","right-101349",-644856513,null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})(),new cljs.core.Keyword(null,"expected","expected",1583670997),"21")),(function (___31809__auto____$6){
return promesa.protocols._promise(new cljs.core.Keyword(null,"done","done",-889844188));
}));
}));
}));
}));
})));
}));
}));
})),(function() { 
var G__101476__delegate = function (___36014__auto__){
return cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
};
var G__101476 = function (var_args){
var ___36014__auto__ = null;
if (arguments.length > 0) {
var G__101477__i = 0, G__101477__a = new Array(arguments.length -  0);
while (G__101477__i < G__101477__a.length) {G__101477__a[G__101477__i] = arguments[G__101477__i + 0]; ++G__101477__i;}
  ___36014__auto__ = new cljs.core.IndexedSeq(G__101477__a,0,null);
} 
return G__101476__delegate.call(this,___36014__auto__);};
G__101476.cljs$lang$maxFixedArity = 0;
G__101476.cljs$lang$applyTo = (function (arglist__101478){
var ___36014__auto__ = cljs.core.seq(arglist__101478);
return G__101476__delegate(___36014__auto__);
});
G__101476.cljs$core$IFn$_invoke$arity$variadic = G__101476__delegate;
return G__101476;
})()
),(function (___31809__auto____$4){
return promesa.protocols._bind(promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._bind(null,(function (___31810__auto____$1){
return promesa.protocols._bind(cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["code on HTML"], 0)),(function (___31809__auto____$5){
return promesa.protocols._bind(repl_tooling.editor_integration.renderer.interactive_test.render(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"html","html",-998796897),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__101218#","p1__101218#",-641722082,null)], null),cljs.core.list(new cljs.core.Symbol(null,"vector","vector",-751469611,null),new cljs.core.Keyword(null,"span","span",1394872991),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"p1__101218#","p1__101218#",-641722082,null)))),cljs.core.list(new cljs.core.Keyword(null,"vec","vec",-657847931),new cljs.core.Symbol(null,"?state","?state",-1752482484,null)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.list(new cljs.core.Symbol(null,"pr-str","pr-str",-2066912145,null),cljs.core.list(new cljs.core.Symbol("walk","postwalk-replace","walk/postwalk-replace",91610132,null),new cljs.core.PersistentArrayMap(null, 1, [(1),(2)], null),cljs.core.list(new cljs.core.Keyword(null,"nested","nested",18943849),new cljs.core.Symbol(null,"?state","?state",-1752482484,null))))], null)], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"vec","vec",-657847931),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3)], null),new cljs.core.Keyword(null,"nested","nested",18943849),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"some","some",-1951079573),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nested","nested",18943849),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null)], null)], null)], null)], null)),(function (___31809__auto____$6){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(check.async.to_promise(repl_tooling.integration.fake_editor.change_result_p()),(function (left_101354){
return promesa.protocols._bind(check.async.to_promise("2\n3\n4\n{:some {:nested [2 2]}}"),(function (right_101355){
return promesa.protocols._bind(null,(function (___31810__auto____$2){
return promesa.protocols._bind(cljs.test.do_report(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var lft__35783__auto__ = left_101354;
var rgt__35784__auto__ = right_101355;
var qleft__35785__auto__ = new cljs.core.Symbol(null,"left-101354","left-101354",-469214276,null);
var qright__35786__auto__ = new cljs.core.Symbol(null,"right-101355","right-101355",-226211816,null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})(),new cljs.core.Keyword(null,"expected","expected",1583670997),"2\n3\n4\n{:some {:nested [2 2]}}")),(function (___31809__auto____$7){
return promesa.protocols._promise(new cljs.core.Keyword(null,"done","done",-889844188));
}));
}));
}));
}));
})));
}));
}));
})),(function() { 
var G__101480__delegate = function (___36014__auto__){
return cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
};
var G__101480 = function (var_args){
var ___36014__auto__ = null;
if (arguments.length > 0) {
var G__101481__i = 0, G__101481__a = new Array(arguments.length -  0);
while (G__101481__i < G__101481__a.length) {G__101481__a[G__101481__i] = arguments[G__101481__i + 0]; ++G__101481__i;}
  ___36014__auto__ = new cljs.core.IndexedSeq(G__101481__a,0,null);
} 
return G__101480__delegate.call(this,___36014__auto__);};
G__101480.cljs$lang$maxFixedArity = 0;
G__101480.cljs$lang$applyTo = (function (arglist__101482){
var ___36014__auto__ = cljs.core.seq(arglist__101482);
return G__101480__delegate(___36014__auto__);
});
G__101480.cljs$core$IFn$_invoke$arity$variadic = G__101480__delegate;
return G__101480;
})()
),(function (___31809__auto____$5){
return promesa.protocols._bind(promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._bind(null,(function (___31810__auto____$1){
return promesa.protocols._bind(cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["passing params to callback fns"], 0)),(function (___31809__auto____$6){
return promesa.protocols._bind(repl_tooling.editor_integration.renderer.interactive_test.render(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"html","html",-998796897),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),cljs.core.list(new cljs.core.Symbol(null,"?inc","?inc",1272739078,null),new cljs.core.Keyword(null,"n","n",562130025))], null),cljs.core.list(new cljs.core.Keyword(null,"n","n",562130025),new cljs.core.Symbol(null,"?state","?state",-1752482484,null))], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"n","n",562130025),(20)], null),new cljs.core.Keyword(null,"fns","fns",1185138786),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"inc","inc",-1316026094),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"event","event",1941966969,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"key","key",124488940,null)], null),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"key","key",124488940,null),new cljs.core.Symbol(null,"inc","inc",324505433,null)))], null)], null)),(function (___31809__auto____$7){
return promesa.protocols._bind(promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(check.async.to_promise(repl_tooling.integration.fake_editor.change_result_p()),(function (left_101361){
return promesa.protocols._bind(check.async.to_promise("20"),(function (right_101362){
return promesa.protocols._bind(null,(function (___31810__auto____$2){
return promesa.protocols._bind(cljs.test.do_report(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var lft__35783__auto__ = left_101361;
var rgt__35784__auto__ = right_101362;
var qleft__35785__auto__ = new cljs.core.Symbol(null,"left-101361","left-101361",-460961545,null);
var qright__35786__auto__ = new cljs.core.Symbol(null,"right-101362","right-101362",578379585,null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})(),new cljs.core.Keyword(null,"expected","expected",1583670997),"20")),(function (___31809__auto____$8){
return promesa.protocols._promise(new cljs.core.Keyword(null,"done","done",-889844188));
}));
}));
}));
}));
})),(function (___31809__auto____$8){
return promesa.protocols._bind(repl_tooling.integration.ui_macros.click_on("20"),(function (___31809__auto____$9){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(check.async.to_promise(repl_tooling.integration.fake_editor.change_result_p()),(function (left_101369){
return promesa.protocols._bind(check.async.to_promise("21"),(function (right_101370){
return promesa.protocols._bind(null,(function (___31810__auto____$2){
return promesa.protocols._bind(cljs.test.do_report(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var lft__35783__auto__ = left_101369;
var rgt__35784__auto__ = right_101370;
var qleft__35785__auto__ = new cljs.core.Symbol(null,"left-101369","left-101369",-668639563,null);
var qright__35786__auto__ = new cljs.core.Symbol(null,"right-101370","right-101370",-1332285450,null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})(),new cljs.core.Keyword(null,"expected","expected",1583670997),"21")),(function (___31809__auto____$10){
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
var G__101487__delegate = function (___36014__auto__){
return cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
};
var G__101487 = function (var_args){
var ___36014__auto__ = null;
if (arguments.length > 0) {
var G__101489__i = 0, G__101489__a = new Array(arguments.length -  0);
while (G__101489__i < G__101489__a.length) {G__101489__a[G__101489__i] = arguments[G__101489__i + 0]; ++G__101489__i;}
  ___36014__auto__ = new cljs.core.IndexedSeq(G__101489__a,0,null);
} 
return G__101487__delegate.call(this,___36014__auto__);};
G__101487.cljs$lang$maxFixedArity = 0;
G__101487.cljs$lang$applyTo = (function (arglist__101490){
var ___36014__auto__ = cljs.core.seq(arglist__101490);
return G__101487__delegate(___36014__auto__);
});
G__101487.cljs$core$IFn$_invoke$arity$variadic = G__101487__delegate;
return G__101487;
})()
),(function (___31809__auto____$6){
return promesa.protocols._promise(promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._bind(null,(function (___31810__auto____$1){
return promesa.protocols._bind(cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["renders tooling's EDN renderer"], 0)),(function (___31809__auto____$7){
return promesa.protocols._bind(repl_tooling.editor_integration.configs.register_custom_tags_BANG_(cljs.core.PersistentArrayMap.EMPTY),(function (___31809__auto____$8){
return promesa.protocols._bind(repl_tooling.editor_integration.renderer.interactive_test.render(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"html","html",-998796897),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("div","clj","div/clj",-660599991),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(1),(2),(3),(4)))], null)], null)),(function (___31809__auto____$9){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(check.async.to_promise(repl_tooling.integration.fake_editor.change_result_p()),(function (left_101382){
return promesa.protocols._bind(check.async.to_promise("(\n+\n \n1\n \n2\n \n3\n \n4\n)"),(function (right_101383){
return promesa.protocols._bind(null,(function (___31810__auto____$2){
return promesa.protocols._bind(cljs.test.do_report(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var lft__35783__auto__ = left_101382;
var rgt__35784__auto__ = right_101383;
var qleft__35785__auto__ = new cljs.core.Symbol(null,"left-101382","left-101382",1448849468,null);
var qright__35786__auto__ = new cljs.core.Symbol(null,"right-101383","right-101383",2074823147,null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})(),new cljs.core.Keyword(null,"expected","expected",1583670997),"(\n+\n \n1\n \n2\n \n3\n \n4\n)")),(function (___31809__auto____$10){
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
var G__101497__delegate = function (___36014__auto__){
return cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
};
var G__101497 = function (var_args){
var ___36014__auto__ = null;
if (arguments.length > 0) {
var G__101498__i = 0, G__101498__a = new Array(arguments.length -  0);
while (G__101498__i < G__101498__a.length) {G__101498__a[G__101498__i] = arguments[G__101498__i + 0]; ++G__101498__i;}
  ___36014__auto__ = new cljs.core.IndexedSeq(G__101498__a,0,null);
} 
return G__101497__delegate.call(this,___36014__auto__);};
G__101497.cljs$lang$maxFixedArity = 0;
G__101497.cljs$lang$applyTo = (function (arglist__101500){
var ___36014__auto__ = cljs.core.seq(arglist__101500);
return G__101497__delegate(___36014__auto__);
});
G__101497.cljs$core$IFn$_invoke$arity$variadic = G__101497__delegate;
return G__101497;
})()
));
}));
}));
}));
}));
}));
}));
}));
})));
});

(repl_tooling.editor_integration.renderer.interactive_test.interactive_renderer.cljs$lang$var = new cljs.core.Var(function(){return repl_tooling.editor_integration.renderer.interactive_test.interactive_renderer;},new cljs.core.Symbol("repl-tooling.editor-integration.renderer.interactive-test","interactive-renderer","repl-tooling.editor-integration.renderer.interactive-test/interactive-renderer",-863715086,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"repl-tooling.editor-integration.renderer.interactive-test","repl-tooling.editor-integration.renderer.interactive-test",-1574288544,null),new cljs.core.Symbol(null,"interactive-renderer","interactive-renderer",-1807619390,null),"repl_tooling/editor_integration/renderer/interactive_test.cljs",36,1,25,25,cljs.core.List.EMPTY,null,(cljs.core.truth_(repl_tooling.editor_integration.renderer.interactive_test.interactive_renderer)?repl_tooling.editor_integration.renderer.interactive_test.interactive_renderer.cljs$lang$test:null)])));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"repl_tooling.editor_integration.renderer.interactive_test","repl_tooling.editor_integration.renderer.interactive_test",1099348807),new cljs.core.Keyword(null,"fake-editor","fake-editor",-2015963141)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"fake-editor",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof repl_tooling !== 'undefined') && (typeof repl_tooling.editor_integration !== 'undefined') && (typeof repl_tooling.editor_integration.renderer !== 'undefined') && (typeof repl_tooling.editor_integration.renderer.interactive_test !== 'undefined') && (typeof repl_tooling.editor_integration.renderer.interactive_test.t_repl_tooling$editor_integration$renderer$interactive_test101384 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
repl_tooling.editor_integration.renderer.interactive_test.t_repl_tooling$editor_integration$renderer$interactive_test101384 = (function (meta101385){
this.meta101385 = meta101385;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(repl_tooling.editor_integration.renderer.interactive_test.t_repl_tooling$editor_integration$renderer$interactive_test101384.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_101386,meta101385__$1){
var self__ = this;
var _101386__$1 = this;
return (new repl_tooling.editor_integration.renderer.interactive_test.t_repl_tooling$editor_integration$renderer$interactive_test101384(meta101385__$1));
}));

(repl_tooling.editor_integration.renderer.interactive_test.t_repl_tooling$editor_integration$renderer$interactive_test101384.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_101386){
var self__ = this;
var _101386__$1 = this;
return self__.meta101385;
}));

(repl_tooling.editor_integration.renderer.interactive_test.t_repl_tooling$editor_integration$renderer$interactive_test101384.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(repl_tooling.editor_integration.renderer.interactive_test.t_repl_tooling$editor_integration$renderer$interactive_test101384.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__54113__auto__,devcard_opts__54114__auto__){
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

(repl_tooling.editor_integration.renderer.interactive_test.t_repl_tooling$editor_integration$renderer$interactive_test101384.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta101385","meta101385",38732845,null)], null);
}));

(repl_tooling.editor_integration.renderer.interactive_test.t_repl_tooling$editor_integration$renderer$interactive_test101384.cljs$lang$type = true);

(repl_tooling.editor_integration.renderer.interactive_test.t_repl_tooling$editor_integration$renderer$interactive_test101384.cljs$lang$ctorStr = "repl-tooling.editor-integration.renderer.interactive-test/t_repl_tooling$editor_integration$renderer$interactive_test101384");

(repl_tooling.editor_integration.renderer.interactive_test.t_repl_tooling$editor_integration$renderer$interactive_test101384.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"repl-tooling.editor-integration.renderer.interactive-test/t_repl_tooling$editor_integration$renderer$interactive_test101384");
}));

/**
 * Positional factory function for repl-tooling.editor-integration.renderer.interactive-test/t_repl_tooling$editor_integration$renderer$interactive_test101384.
 */
repl_tooling.editor_integration.renderer.interactive_test.__GT_t_repl_tooling$editor_integration$renderer$interactive_test101384 = (function repl_tooling$editor_integration$renderer$interactive_test$__GT_t_repl_tooling$editor_integration$renderer$interactive_test101384(meta101385){
return (new repl_tooling.editor_integration.renderer.interactive_test.t_repl_tooling$editor_integration$renderer$interactive_test101384(meta101385));
});

}

return (new repl_tooling.editor_integration.renderer.interactive_test.t_repl_tooling$editor_integration$renderer$interactive_test101384(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),repl_tooling.integration.fake_editor.state,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));

//# sourceMappingURL=repl_tooling.editor_integration.renderer.interactive_test.js.map
