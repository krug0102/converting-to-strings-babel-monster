goog.provide('repl_tooling.target_eval_test');
repl_tooling.target_eval_test.filename = cljs.core.atom.cljs$core$IFn$_invoke$arity$1("foo.cljs");
repl_tooling.target_eval_test.state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
repl_tooling.target_eval_test.reset_state = (function repl_tooling$target_eval_test$reset_state(){
return cljs.core.reset_BANG_(repl_tooling.target_eval_test.state,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"editor-data","editor-data",-2084300305),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"contents","contents",-1567174023),"(+ 1 2)",new cljs.core.Keyword(null,"filename","filename",-1428840783),cljs.core.deref(repl_tooling.target_eval_test.filename),new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)], null)], null),new cljs.core.Keyword(null,"result","result",1415092211),promesa.core.deferred(),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"commands","commands",161008658),cljs.core.PersistentArrayMap.EMPTY], null));
});
repl_tooling.target_eval_test.set_editor_data = (function repl_tooling$target_eval_test$set_editor_data(data){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(repl_tooling.target_eval_test.state,cljs.core.update,new cljs.core.Keyword(null,"editor-data","editor-data",-2084300305),cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([data], 0));
});
repl_tooling.target_eval_test.connect_BANG_ = (function repl_tooling$target_eval_test$connect_BANG_(){
repl_tooling.target_eval_test.reset_state();

return repl_tooling.editor_integration.connection.connect_BANG_("localhost",(4444),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"on-stdout","on-stdout",1480958368),(function (p1__52026_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(repl_tooling.target_eval_test.state,cljs.core.update,new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__52026_SHARP_], 0));
}),new cljs.core.Keyword(null,"register-commands","register-commands",-552391338),(function (p1__52027_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(repl_tooling.target_eval_test.state,cljs.core.assoc,new cljs.core.Keyword(null,"commands","commands",161008658),p1__52027_SHARP_);
}),new cljs.core.Keyword(null,"on-stderr","on-stderr",1583456038),(function (p1__52028_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(repl_tooling.target_eval_test.state,cljs.core.update,new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__52028_SHARP_], 0));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (){
return repl_tooling.target_eval_test.reset_state();
}),new cljs.core.Keyword(null,"on-eval","on-eval",-1349336659),(function (p1__52029_SHARP_){
return promesa.core.resolve_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(repl_tooling.target_eval_test.state)),p1__52029_SHARP_);
}),new cljs.core.Keyword(null,"editor-data","editor-data",-2084300305),(function (){
return new cljs.core.Keyword(null,"editor-data","editor-data",-2084300305).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(repl_tooling.target_eval_test.state));
}),new cljs.core.Keyword(null,"open-editor","open-editor",1337424020),(function (p1__52030_SHARP_){
return promesa.core.resolve_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(repl_tooling.target_eval_test.state)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open-editor","open-editor",1337424020),p1__52030_SHARP_], null));
}),new cljs.core.Keyword(null,"notify","notify",-1256867814),cljs.core.prn], null));
});
repl_tooling.target_eval_test.evaluate_BANG_ = (function repl_tooling$target_eval_test$evaluate_BANG_(code){
repl_tooling.target_eval_test.set_editor_data(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"contents","contents",-1567174023),code], null));

var p = promesa.core.deferred();
var cmd = new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"evaluate-top-block","evaluate-top-block",-2034693127).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"commands","commands",161008658).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(repl_tooling.target_eval_test.state))));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(repl_tooling.target_eval_test.state,cljs.core.assoc,new cljs.core.Keyword(null,"result","result",1415092211),p);

(cmd.cljs$core$IFn$_invoke$arity$0 ? cmd.cljs$core$IFn$_invoke$arity$0() : cmd.call(null));

return p;
});
repl_tooling.target_eval_test.evaluation_test = (function repl_tooling$target_eval_test$evaluation_test(){
return cljs.test.test_var(repl_tooling.target_eval_test.evaluation_test.cljs$lang$var);
});
repl_tooling.target_eval_test.evaluation_test.cljs$lang$test = (function (){
return check.async.async_test_STAR_("evaluates code",(10000),(function (){
return (function (){
return repl_tooling.editor_integration.connection.disconnect_BANG_();
});
}),promesa.protocols._bind(null,(function (___31810__auto__){
return promesa.protocols._bind(promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._bind(null,(function (___31810__auto____$1){
return promesa.protocols._bind(cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["connects to a REPL"], 0)),(function (___31809__auto__){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(repl_tooling.target_eval_test.connect_BANG_(),(function (c){
return promesa.protocols._bind(null,(function (___31810__auto____$2){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto____$1){
return promesa.protocols._bind(check.async.to_promise(cljs.core.deref(c)),(function (left_52031){
return promesa.protocols._bind(check.async.to_promise(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("editor","commands","editor/commands",1134888579),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"evaluate-top-block","evaluate-top-block",-2034693127),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Evaluate Top Block",new cljs.core.Keyword(null,"command","command",-894540724),cljs.core.fn_QMARK_], null)], null)], null)),(function (right_52032){
return promesa.protocols._bind(null,(function (___31810__auto____$3){
return promesa.protocols._bind(cljs.test.do_report(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var lft__35783__auto__ = left_52031;
var rgt__35784__auto__ = right_52032;
var qleft__35785__auto__ = new cljs.core.Symbol(null,"left-52031","left-52031",31046487,null);
var qright__35786__auto__ = new cljs.core.Symbol(null,"right-52032","right-52032",-1355301735,null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})(),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("editor","commands","editor/commands",1134888579),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"evaluate-top-block","evaluate-top-block",-2034693127),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Evaluate Top Block",new cljs.core.Keyword(null,"command","command",-894540724),new cljs.core.Symbol(null,"fn?","fn?",1820990818,null)], null)], null)], null))),(function (___31809__auto____$1){
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
})),(function() { 
var G__52071__delegate = function (___36014__auto__){
return cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
};
var G__52071 = function (var_args){
var ___36014__auto__ = null;
if (arguments.length > 0) {
var G__52072__i = 0, G__52072__a = new Array(arguments.length -  0);
while (G__52072__i < G__52072__a.length) {G__52072__a[G__52072__i] = arguments[G__52072__i + 0]; ++G__52072__i;}
  ___36014__auto__ = new cljs.core.IndexedSeq(G__52072__a,0,null);
} 
return G__52071__delegate.call(this,___36014__auto__);};
G__52071.cljs$lang$maxFixedArity = 0;
G__52071.cljs$lang$applyTo = (function (arglist__52073){
var ___36014__auto__ = cljs.core.seq(arglist__52073);
return G__52071__delegate(___36014__auto__);
});
G__52071.cljs$core$IFn$_invoke$arity$variadic = G__52071__delegate;
return G__52071;
})()
),(function (___31809__auto__){
return promesa.protocols._bind(promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._bind(null,(function (___31810__auto____$1){
return promesa.protocols._bind(cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["evaluates literal commands"], 0)),(function (___31809__auto____$1){
return promesa.protocols._bind(promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(repl_tooling.target_eval_test.evaluate_BANG_("true"),(function (res){
return promesa.protocols._bind(null,(function (___31810__auto____$2){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto____$1){
return promesa.protocols._bind(check.async.to_promise(res),(function (left_52033){
return promesa.protocols._bind(check.async.to_promise(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",1415092211),true], null)], null)),(function (right_52034){
return promesa.protocols._bind(null,(function (___31810__auto____$3){
return promesa.protocols._bind(cljs.test.do_report(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var lft__35783__auto__ = left_52033;
var rgt__35784__auto__ = right_52034;
var qleft__35785__auto__ = new cljs.core.Symbol(null,"left-52033","left-52033",-651474880,null);
var qright__35786__auto__ = new cljs.core.Symbol(null,"right-52034","right-52034",-129067843,null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})(),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",1415092211),true], null)], null))),(function (___31809__auto____$2){
return promesa.protocols._promise(new cljs.core.Keyword(null,"done","done",-889844188));
}));
}));
}));
}));
})));
}));
}));
})),(function (___31809__auto____$2){
return promesa.protocols._bind(promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(repl_tooling.target_eval_test.evaluate_BANG_("false"),(function (res){
return promesa.protocols._bind(null,(function (___31810__auto____$2){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto____$1){
return promesa.protocols._bind(check.async.to_promise(res),(function (left_52035){
return promesa.protocols._bind(check.async.to_promise(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",1415092211),false], null)], null)),(function (right_52036){
return promesa.protocols._bind(null,(function (___31810__auto____$3){
return promesa.protocols._bind(cljs.test.do_report(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var lft__35783__auto__ = left_52035;
var rgt__35784__auto__ = right_52036;
var qleft__35785__auto__ = new cljs.core.Symbol(null,"left-52035","left-52035",815029973,null);
var qright__35786__auto__ = new cljs.core.Symbol(null,"right-52036","right-52036",1540326845,null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})(),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",1415092211),false], null)], null))),(function (___31809__auto____$3){
return promesa.protocols._promise(new cljs.core.Keyword(null,"done","done",-889844188));
}));
}));
}));
}));
})));
}));
}));
})),(function (___31809__auto____$3){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(repl_tooling.target_eval_test.evaluate_BANG_("nil"),(function (res){
return promesa.protocols._bind(null,(function (___31810__auto____$2){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto____$1){
return promesa.protocols._bind(check.async.to_promise(res),(function (left_52037){
return promesa.protocols._bind(check.async.to_promise(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",1415092211),null], null)], null)),(function (right_52038){
return promesa.protocols._bind(null,(function (___31810__auto____$3){
return promesa.protocols._bind(cljs.test.do_report(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var lft__35783__auto__ = left_52037;
var rgt__35784__auto__ = right_52038;
var qleft__35785__auto__ = new cljs.core.Symbol(null,"left-52037","left-52037",-726586482,null);
var qright__35786__auto__ = new cljs.core.Symbol(null,"right-52038","right-52038",2090610076,null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})(),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",1415092211),null], null)], null))),(function (___31809__auto____$4){
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
}));
})),(function() { 
var G__52074__delegate = function (___36014__auto__){
return cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
};
var G__52074 = function (var_args){
var ___36014__auto__ = null;
if (arguments.length > 0) {
var G__52075__i = 0, G__52075__a = new Array(arguments.length -  0);
while (G__52075__i < G__52075__a.length) {G__52075__a[G__52075__i] = arguments[G__52075__i + 0]; ++G__52075__i;}
  ___36014__auto__ = new cljs.core.IndexedSeq(G__52075__a,0,null);
} 
return G__52074__delegate.call(this,___36014__auto__);};
G__52074.cljs$lang$maxFixedArity = 0;
G__52074.cljs$lang$applyTo = (function (arglist__52076){
var ___36014__auto__ = cljs.core.seq(arglist__52076);
return G__52074__delegate(___36014__auto__);
});
G__52074.cljs$core$IFn$_invoke$arity$variadic = G__52074__delegate;
return G__52074;
})()
),(function (___31809__auto____$1){
return promesa.protocols._bind(promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._bind(null,(function (___31810__auto____$1){
return promesa.protocols._bind(cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["evaluates numbers"], 0)),(function (___31809__auto____$2){
return promesa.protocols._bind(promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(repl_tooling.target_eval_test.evaluate_BANG_("(+ 1 2)"),(function (res){
return promesa.protocols._bind(null,(function (___31810__auto____$2){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto____$1){
return promesa.protocols._bind(check.async.to_promise(res),(function (left_52039){
return promesa.protocols._bind(check.async.to_promise(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",1415092211),(3)], null)], null)),(function (right_52040){
return promesa.protocols._bind(null,(function (___31810__auto____$3){
return promesa.protocols._bind(cljs.test.do_report(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var lft__35783__auto__ = left_52039;
var rgt__35784__auto__ = right_52040;
var qleft__35785__auto__ = new cljs.core.Symbol(null,"left-52039","left-52039",2072075491,null);
var qright__35786__auto__ = new cljs.core.Symbol(null,"right-52040","right-52040",-1332362160,null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})(),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",1415092211),(3)], null)], null))),(function (___31809__auto____$3){
return promesa.protocols._promise(new cljs.core.Keyword(null,"done","done",-889844188));
}));
}));
}));
}));
})));
}));
}));
})),(function (___31809__auto____$3){
return promesa.protocols._bind(promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(repl_tooling.target_eval_test.evaluate_BANG_("(/ 10 2.0)"),(function (res){
return promesa.protocols._bind(null,(function (___31810__auto____$2){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto____$1){
return promesa.protocols._bind(check.async.to_promise(res),(function (left_52041){
return promesa.protocols._bind(check.async.to_promise(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",1415092211),5.0], null)], null)),(function (right_52042){
return promesa.protocols._bind(null,(function (___31810__auto____$3){
return promesa.protocols._bind(cljs.test.do_report(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var lft__35783__auto__ = left_52041;
var rgt__35784__auto__ = right_52042;
var qleft__35785__auto__ = new cljs.core.Symbol(null,"left-52041","left-52041",1783075055,null);
var qright__35786__auto__ = new cljs.core.Symbol(null,"right-52042","right-52042",609806592,null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})(),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",1415092211),5.0], null)], null))),(function (___31809__auto____$4){
return promesa.protocols._promise(new cljs.core.Keyword(null,"done","done",-889844188));
}));
}));
}));
}));
})));
}));
}));
})),(function (___31809__auto____$4){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(repl_tooling.target_eval_test.evaluate_BANG_("20"),(function (res){
return promesa.protocols._bind(null,(function (___31810__auto____$2){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto____$1){
return promesa.protocols._bind(check.async.to_promise(res),(function (left_52043){
return promesa.protocols._bind(check.async.to_promise(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",1415092211),(20)], null)], null)),(function (right_52044){
return promesa.protocols._bind(null,(function (___31810__auto____$3){
return promesa.protocols._bind(cljs.test.do_report(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var lft__35783__auto__ = left_52043;
var rgt__35784__auto__ = right_52044;
var qleft__35785__auto__ = new cljs.core.Symbol(null,"left-52043","left-52043",-624711178,null);
var qright__35786__auto__ = new cljs.core.Symbol(null,"right-52044","right-52044",2126205987,null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})(),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",1415092211),(20)], null)], null))),(function (___31809__auto____$5){
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
}));
})),(function() { 
var G__52077__delegate = function (___36014__auto__){
return cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
};
var G__52077 = function (var_args){
var ___36014__auto__ = null;
if (arguments.length > 0) {
var G__52078__i = 0, G__52078__a = new Array(arguments.length -  0);
while (G__52078__i < G__52078__a.length) {G__52078__a[G__52078__i] = arguments[G__52078__i + 0]; ++G__52078__i;}
  ___36014__auto__ = new cljs.core.IndexedSeq(G__52078__a,0,null);
} 
return G__52077__delegate.call(this,___36014__auto__);};
G__52077.cljs$lang$maxFixedArity = 0;
G__52077.cljs$lang$applyTo = (function (arglist__52079){
var ___36014__auto__ = cljs.core.seq(arglist__52079);
return G__52077__delegate(___36014__auto__);
});
G__52077.cljs$core$IFn$_invoke$arity$variadic = G__52077__delegate;
return G__52077;
})()
),(function (___31809__auto____$2){
return promesa.protocols._bind(promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._bind(null,(function (___31810__auto____$1){
return promesa.protocols._bind(cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["evaluates strings"], 0)),(function (___31809__auto____$3){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(repl_tooling.target_eval_test.evaluate_BANG_("(str 1 2 3 4)"),(function (res){
return promesa.protocols._bind(null,(function (___31810__auto____$2){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto____$1){
return promesa.protocols._bind(check.async.to_promise(res),(function (left_52045){
return promesa.protocols._bind(check.async.to_promise(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",1415092211),"1234"], null)], null)),(function (right_52046){
return promesa.protocols._bind(null,(function (___31810__auto____$3){
return promesa.protocols._bind(cljs.test.do_report(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var lft__35783__auto__ = left_52045;
var rgt__35784__auto__ = right_52046;
var qleft__35785__auto__ = new cljs.core.Symbol(null,"left-52045","left-52045",1156448884,null);
var qright__35786__auto__ = new cljs.core.Symbol(null,"right-52046","right-52046",-1335722821,null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})(),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",1415092211),"1234"], null)], null))),(function (___31809__auto____$4){
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
})),(function() { 
var G__52080__delegate = function (___36014__auto__){
return cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
};
var G__52080 = function (var_args){
var ___36014__auto__ = null;
if (arguments.length > 0) {
var G__52081__i = 0, G__52081__a = new Array(arguments.length -  0);
while (G__52081__i < G__52081__a.length) {G__52081__a[G__52081__i] = arguments[G__52081__i + 0]; ++G__52081__i;}
  ___36014__auto__ = new cljs.core.IndexedSeq(G__52081__a,0,null);
} 
return G__52080__delegate.call(this,___36014__auto__);};
G__52080.cljs$lang$maxFixedArity = 0;
G__52080.cljs$lang$applyTo = (function (arglist__52082){
var ___36014__auto__ = cljs.core.seq(arglist__52082);
return G__52080__delegate(___36014__auto__);
});
G__52080.cljs$core$IFn$_invoke$arity$variadic = G__52080__delegate;
return G__52080;
})()
),(function (___31809__auto____$3){
return promesa.protocols._bind(promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._bind(null,(function (___31810__auto____$1){
return promesa.protocols._bind(cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["evaluates regexp"], 0)),(function (___31809__auto____$4){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(repl_tooling.target_eval_test.evaluate_BANG_("#\"foo\""),(function (res){
return promesa.protocols._bind(null,(function (___31810__auto____$2){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto____$1){
return promesa.protocols._bind(check.async.to_promise(res),(function (left_52047){
return promesa.protocols._bind(check.async.to_promise(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",1415092211),cljs.core.regexp_QMARK_], null)], null)),(function (right_52048){
return promesa.protocols._bind(null,(function (___31810__auto____$3){
return promesa.protocols._bind(cljs.test.do_report(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var lft__35783__auto__ = left_52047;
var rgt__35784__auto__ = right_52048;
var qleft__35785__auto__ = new cljs.core.Symbol(null,"left-52047","left-52047",-1412013757,null);
var qright__35786__auto__ = new cljs.core.Symbol(null,"right-52048","right-52048",473815131,null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})(),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Symbol(null,"regexp?","regexp?",-1015402694,null)], null)], null))),(function (___31809__auto____$5){
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
})),(function() { 
var G__52083__delegate = function (___36014__auto__){
return cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
};
var G__52083 = function (var_args){
var ___36014__auto__ = null;
if (arguments.length > 0) {
var G__52084__i = 0, G__52084__a = new Array(arguments.length -  0);
while (G__52084__i < G__52084__a.length) {G__52084__a[G__52084__i] = arguments[G__52084__i + 0]; ++G__52084__i;}
  ___36014__auto__ = new cljs.core.IndexedSeq(G__52084__a,0,null);
} 
return G__52083__delegate.call(this,___36014__auto__);};
G__52083.cljs$lang$maxFixedArity = 0;
G__52083.cljs$lang$applyTo = (function (arglist__52085){
var ___36014__auto__ = cljs.core.seq(arglist__52085);
return G__52083__delegate(___36014__auto__);
});
G__52083.cljs$core$IFn$_invoke$arity$variadic = G__52083__delegate;
return G__52083;
})()
),(function (___31809__auto____$4){
return promesa.protocols._bind(promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._bind(null,(function (___31810__auto____$1){
return promesa.protocols._bind(cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["evaluates keywords and symbols"], 0)),(function (___31809__auto____$5){
return promesa.protocols._bind(promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(repl_tooling.target_eval_test.evaluate_BANG_("(keyword \"foo\")"),(function (res){
return promesa.protocols._bind(null,(function (___31810__auto____$2){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto____$1){
return promesa.protocols._bind(check.async.to_promise(res),(function (left_52049){
return promesa.protocols._bind(check.async.to_promise(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Keyword(null,"foo","foo",1268894036)], null)], null)),(function (right_52050){
return promesa.protocols._bind(null,(function (___31810__auto____$3){
return promesa.protocols._bind(cljs.test.do_report(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var lft__35783__auto__ = left_52049;
var rgt__35784__auto__ = right_52050;
var qleft__35785__auto__ = new cljs.core.Symbol(null,"left-52049","left-52049",2065683608,null);
var qright__35786__auto__ = new cljs.core.Symbol(null,"right-52050","right-52050",436790422,null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})(),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Keyword(null,"foo","foo",1268894036)], null)], null))),(function (___31809__auto____$6){
return promesa.protocols._promise(new cljs.core.Keyword(null,"done","done",-889844188));
}));
}));
}));
}));
})));
}));
}));
})),(function (___31809__auto____$6){
return promesa.protocols._bind(promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(repl_tooling.target_eval_test.evaluate_BANG_("(keyword \"foo bar\")"),(function (res){
return promesa.protocols._bind(null,(function (___31810__auto____$2){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto____$1){
return promesa.protocols._bind(check.async.to_promise(res),(function (left_52051){
return promesa.protocols._bind(check.async.to_promise(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",1415092211),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1("foo bar")], null)], null)),(function (right_52052){
return promesa.protocols._bind(null,(function (___31810__auto____$3){
return promesa.protocols._bind(cljs.test.do_report(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var lft__35783__auto__ = left_52051;
var rgt__35784__auto__ = right_52052;
var qleft__35785__auto__ = new cljs.core.Symbol(null,"left-52051","left-52051",1245132427,null);
var qright__35786__auto__ = new cljs.core.Symbol(null,"right-52052","right-52052",-1623137167,null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})(),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",1415092211),cljs.core.list(new cljs.core.Symbol(null,"keyword","keyword",-1843046022,null),"foo bar")], null)], null))),(function (___31809__auto____$7){
return promesa.protocols._promise(new cljs.core.Keyword(null,"done","done",-889844188));
}));
}));
}));
}));
})));
}));
}));
})),(function (___31809__auto____$7){
return promesa.protocols._bind(promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(repl_tooling.target_eval_test.evaluate_BANG_("(symbol \"foo\")"),(function (res){
return promesa.protocols._bind(null,(function (___31810__auto____$2){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto____$1){
return promesa.protocols._bind(check.async.to_promise(res),(function (left_52053){
return promesa.protocols._bind(check.async.to_promise(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Symbol(null,"foo","foo",-1385541733,null)], null)], null)),(function (right_52054){
return promesa.protocols._bind(null,(function (___31810__auto____$3){
return promesa.protocols._bind(cljs.test.do_report(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var lft__35783__auto__ = left_52053;
var rgt__35784__auto__ = right_52054;
var qleft__35785__auto__ = new cljs.core.Symbol(null,"left-52053","left-52053",-2138652042,null);
var qright__35786__auto__ = new cljs.core.Symbol(null,"right-52054","right-52054",1368638332,null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})(),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",1415092211),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"foo","foo",-1385541733,null))], null)], null))),(function (___31809__auto____$8){
return promesa.protocols._promise(new cljs.core.Keyword(null,"done","done",-889844188));
}));
}));
}));
}));
})));
}));
}));
})),(function (___31809__auto____$8){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(repl_tooling.target_eval_test.evaluate_BANG_("(symbol \"foo bar\")"),(function (res){
return promesa.protocols._bind(null,(function (___31810__auto____$2){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto____$1){
return promesa.protocols._bind(check.async.to_promise(res),(function (left_52055){
return promesa.protocols._bind(check.async.to_promise(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",1415092211),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1("foo bar")], null)], null)),(function (right_52056){
return promesa.protocols._bind(null,(function (___31810__auto____$3){
return promesa.protocols._bind(cljs.test.do_report(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var lft__35783__auto__ = left_52055;
var rgt__35784__auto__ = right_52056;
var qleft__35785__auto__ = new cljs.core.Symbol(null,"left-52055","left-52055",-563458797,null);
var qright__35786__auto__ = new cljs.core.Symbol(null,"right-52056","right-52056",-1086825750,null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})(),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",1415092211),cljs.core.list(new cljs.core.Symbol(null,"symbol","symbol",601958831,null),"foo bar")], null)], null))),(function (___31809__auto____$9){
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
}));
}));
})),(function() { 
var G__52086__delegate = function (___36014__auto__){
return cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
};
var G__52086 = function (var_args){
var ___36014__auto__ = null;
if (arguments.length > 0) {
var G__52087__i = 0, G__52087__a = new Array(arguments.length -  0);
while (G__52087__i < G__52087__a.length) {G__52087__a[G__52087__i] = arguments[G__52087__i + 0]; ++G__52087__i;}
  ___36014__auto__ = new cljs.core.IndexedSeq(G__52087__a,0,null);
} 
return G__52086__delegate.call(this,___36014__auto__);};
G__52086.cljs$lang$maxFixedArity = 0;
G__52086.cljs$lang$applyTo = (function (arglist__52088){
var ___36014__auto__ = cljs.core.seq(arglist__52088);
return G__52086__delegate(___36014__auto__);
});
G__52086.cljs$core$IFn$_invoke$arity$variadic = G__52086__delegate;
return G__52086;
})()
),(function (___31809__auto____$5){
return promesa.protocols._bind(promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._bind(null,(function (___31810__auto____$1){
return promesa.protocols._bind(cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["evaluates collections"], 0)),(function (___31809__auto____$6){
return promesa.protocols._bind(promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(repl_tooling.target_eval_test.evaluate_BANG_("(list 1 2 3)"),(function (res){
return promesa.protocols._bind(null,(function (___31810__auto____$2){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto____$1){
return promesa.protocols._bind(check.async.to_promise(res),(function (left_52057){
return promesa.protocols._bind(check.async.to_promise(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",1415092211),cljs.core.list((1),(2),(3))], null)], null)),(function (right_52058){
return promesa.protocols._bind(null,(function (___31810__auto____$3){
return promesa.protocols._bind(cljs.test.do_report(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var lft__35783__auto__ = left_52057;
var rgt__35784__auto__ = right_52058;
var qleft__35785__auto__ = new cljs.core.Symbol(null,"left-52057","left-52057",1385416826,null);
var qright__35786__auto__ = new cljs.core.Symbol(null,"right-52058","right-52058",-454780069,null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})(),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",1415092211),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(2),(3)))], null)], null))),(function (___31809__auto____$7){
return promesa.protocols._promise(new cljs.core.Keyword(null,"done","done",-889844188));
}));
}));
}));
}));
})));
}));
}));
})),(function (___31809__auto____$7){
return promesa.protocols._bind(promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(repl_tooling.target_eval_test.evaluate_BANG_("[1 2 3]"),(function (res){
return promesa.protocols._bind(null,(function (___31810__auto____$2){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto____$1){
return promesa.protocols._bind(check.async.to_promise(res),(function (left_52059){
return promesa.protocols._bind(check.async.to_promise(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3)], null)], null)], null)),(function (right_52060){
return promesa.protocols._bind(null,(function (___31810__auto____$3){
return promesa.protocols._bind(cljs.test.do_report(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var lft__35783__auto__ = left_52059;
var rgt__35784__auto__ = right_52060;
var qleft__35785__auto__ = new cljs.core.Symbol(null,"left-52059","left-52059",-199383738,null);
var qright__35786__auto__ = new cljs.core.Symbol(null,"right-52060","right-52060",-1091309998,null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})(),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3)], null)], null)], null))),(function (___31809__auto____$8){
return promesa.protocols._promise(new cljs.core.Keyword(null,"done","done",-889844188));
}));
}));
}));
}));
})));
}));
}));
})),(function (___31809__auto____$8){
return promesa.protocols._bind(promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(repl_tooling.target_eval_test.evaluate_BANG_("#{1 2 3}"),(function (res){
return promesa.protocols._bind(null,(function (___31810__auto____$2){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto____$1){
return promesa.protocols._bind(check.async.to_promise(res),(function (left_52061){
return promesa.protocols._bind(check.async.to_promise(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(1),null,(3),null,(2),null], null), null)], null)], null)),(function (right_52062){
return promesa.protocols._bind(null,(function (___31810__auto____$3){
return promesa.protocols._bind(cljs.test.do_report(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var lft__35783__auto__ = left_52061;
var rgt__35784__auto__ = right_52062;
var qleft__35785__auto__ = new cljs.core.Symbol(null,"left-52061","left-52061",-206248535,null);
var qright__35786__auto__ = new cljs.core.Symbol(null,"right-52062","right-52062",763096261,null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})(),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(1),"null",(3),"null",(2),"null"], null), null)], null)], null))),(function (___31809__auto____$9){
return promesa.protocols._promise(new cljs.core.Keyword(null,"done","done",-889844188));
}));
}));
}));
}));
})));
}));
}));
})),(function (___31809__auto____$9){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(repl_tooling.target_eval_test.evaluate_BANG_("{:a 1 :b 2}"),(function (res){
return promesa.protocols._bind(null,(function (___31810__auto____$2){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto____$1){
return promesa.protocols._bind(check.async.to_promise(res),(function (left_52063){
return promesa.protocols._bind(check.async.to_promise(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"a","a",-2123407586),(1),new cljs.core.Keyword(null,"b","b",1482224470),(2)], null)], null)], null)),(function (right_52064){
return promesa.protocols._bind(null,(function (___31810__auto____$3){
return promesa.protocols._bind(cljs.test.do_report(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var lft__35783__auto__ = left_52063;
var rgt__35784__auto__ = right_52064;
var qleft__35785__auto__ = new cljs.core.Symbol(null,"left-52063","left-52063",839889799,null);
var qright__35786__auto__ = new cljs.core.Symbol(null,"right-52064","right-52064",-1129876633,null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})(),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"a","a",-2123407586),(1),new cljs.core.Keyword(null,"b","b",1482224470),(2)], null)], null)], null))),(function (___31809__auto____$10){
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
}));
}));
})),(function() { 
var G__52089__delegate = function (___36014__auto__){
return cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
};
var G__52089 = function (var_args){
var ___36014__auto__ = null;
if (arguments.length > 0) {
var G__52090__i = 0, G__52090__a = new Array(arguments.length -  0);
while (G__52090__i < G__52090__a.length) {G__52090__a[G__52090__i] = arguments[G__52090__i + 0]; ++G__52090__i;}
  ___36014__auto__ = new cljs.core.IndexedSeq(G__52090__a,0,null);
} 
return G__52089__delegate.call(this,___36014__auto__);};
G__52089.cljs$lang$maxFixedArity = 0;
G__52089.cljs$lang$applyTo = (function (arglist__52091){
var ___36014__auto__ = cljs.core.seq(arglist__52091);
return G__52089__delegate(___36014__auto__);
});
G__52089.cljs$core$IFn$_invoke$arity$variadic = G__52089__delegate;
return G__52089;
})()
),(function (___31809__auto____$6){
return promesa.protocols._promise(promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._bind(null,(function (___31810__auto____$1){
return promesa.protocols._bind(cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["evaluates errors"], 0)),(function (___31809__auto____$7){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(repl_tooling.target_eval_test.evaluate_BANG_("(throw (ex-info \"Foo\" {}))"),(function (res){
return promesa.protocols._bind(null,(function (___31810__auto____$2){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto____$1){
return promesa.protocols._bind(check.async.to_promise(res),(function (left_52065){
return promesa.protocols._bind(check.async.to_promise(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),"Foo"], null)], null)], null)),(function (right_52066){
return promesa.protocols._bind(null,(function (___31810__auto____$3){
return promesa.protocols._bind(cljs.test.do_report(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var lft__35783__auto__ = left_52065;
var rgt__35784__auto__ = right_52066;
var qleft__35785__auto__ = new cljs.core.Symbol(null,"left-52065","left-52065",-1937711989,null);
var qright__35786__auto__ = new cljs.core.Symbol(null,"right-52066","right-52066",-664507138,null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})(),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),"Foo"], null)], null)], null))),(function (___31809__auto____$8){
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
})),(function() { 
var G__52092__delegate = function (___36014__auto__){
return cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
};
var G__52092 = function (var_args){
var ___36014__auto__ = null;
if (arguments.length > 0) {
var G__52093__i = 0, G__52093__a = new Array(arguments.length -  0);
while (G__52093__i < G__52093__a.length) {G__52093__a[G__52093__i] = arguments[G__52093__i + 0]; ++G__52093__i;}
  ___36014__auto__ = new cljs.core.IndexedSeq(G__52093__a,0,null);
} 
return G__52092__delegate.call(this,___36014__auto__);};
G__52092.cljs$lang$maxFixedArity = 0;
G__52092.cljs$lang$applyTo = (function (arglist__52094){
var ___36014__auto__ = cljs.core.seq(arglist__52094);
return G__52092__delegate(___36014__auto__);
});
G__52092.cljs$core$IFn$_invoke$arity$variadic = G__52092__delegate;
return G__52092;
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

(repl_tooling.target_eval_test.evaluation_test.cljs$lang$var = new cljs.core.Var(function(){return repl_tooling.target_eval_test.evaluation_test;},new cljs.core.Symbol("repl-tooling.target-eval-test","evaluation-test","repl-tooling.target-eval-test/evaluation-test",1317804527,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"repl-tooling.target-eval-test","repl-tooling.target-eval-test",-931674864,null),new cljs.core.Symbol(null,"evaluation-test","evaluation-test",706372912,null),"repl_tooling/target_eval_test.cljs",25,1,43,43,cljs.core.List.EMPTY,null,(cljs.core.truth_(repl_tooling.target_eval_test.evaluation_test)?repl_tooling.target_eval_test.evaluation_test.cljs$lang$test:null)])));
cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.test","default","cljs.test/default",-1581405322),new cljs.core.Keyword(null,"summary","summary",380847952)], null),(function (p__52067){
var map__52068 = p__52067;
var map__52068__$1 = cljs.core.__destructure_map(map__52068);
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52068__$1,new cljs.core.Keyword(null,"test","test",577538877));
var pass = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52068__$1,new cljs.core.Keyword(null,"pass","pass",1574159993));
var fail = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52068__$1,new cljs.core.Keyword(null,"fail","fail",1706214930));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52068__$1,new cljs.core.Keyword(null,"error","error",-978969032));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Ran",test,"tests containing",((pass + fail) + error),"assertions."], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pass,"passed,",fail,"failures,",error,"errors."], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic((0),fail,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([error], 0))){
return process.exit((0));
} else {
return process.exit((1));
}
}));
repl_tooling.target_eval_test.run = (function repl_tooling$target_eval_test$run(file_name){
cljs.core.reset_BANG_(repl_tooling.target_eval_test.filename,file_name);

return cljs.test.run_block((function (){var env52069 = cljs.test.empty_env.cljs$core$IFn$_invoke$arity$0();
var summary52070 = cljs.core.volatile_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"summary","summary",380847952),new cljs.core.Keyword(null,"fail","fail",1706214930),(0),new cljs.core.Keyword(null,"error","error",-978969032),(0),new cljs.core.Keyword(null,"pass","pass",1574159993),(0),new cljs.core.Keyword(null,"test","test",577538877),(0)], null));
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
cljs.test.set_env_BANG_(env52069);

cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"repl-tooling.target-eval-test","repl-tooling.target-eval-test",-931674864,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block((function (){var env__9222__auto__ = cljs.test.get_current_env();
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
if((env__9222__auto__ == null)){
cljs.test.set_env_BANG_(cljs.test.empty_env.cljs$core$IFn$_invoke$arity$0());
} else {
}


return null;
})], null),cljs.test.test_vars_block(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return repl_tooling.target_eval_test.evaluation_test;},new cljs.core.Symbol("repl-tooling.target-eval-test","evaluation-test","repl-tooling.target-eval-test/evaluation-test",1317804527,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"repl-tooling.target-eval-test","repl-tooling.target-eval-test",-931674864,null),new cljs.core.Symbol(null,"evaluation-test","evaluation-test",706372912,null),"repl_tooling/target_eval_test.cljs",25,1,43,43,cljs.core.List.EMPTY,null,(cljs.core.truth_(repl_tooling.target_eval_test.evaluation_test)?repl_tooling.target_eval_test.evaluation_test.cljs$lang$test:null)]))], null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
if((env__9222__auto__ == null)){
return cljs.test.clear_env_BANG_();
} else {
return null;
}
})], null)], 0));
})());
}),(function (){
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"repl-tooling.target-eval-test","repl-tooling.target-eval-test",-931674864,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
})], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return summary52070.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core._PLUS_)(summary52070.cljs$core$IDeref$_deref$arity$1(null),new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_())));
})], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
cljs.test.set_env_BANG_(env52069);

cljs.test.do_report(cljs.core.deref(summary52070));

cljs.test.report.call(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(summary52070),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-run-tests","end-run-tests",267300563)));

return cljs.test.clear_env_BANG_();
})], null));
})());
});

//# sourceMappingURL=repl_tooling.target_eval_test.js.map
