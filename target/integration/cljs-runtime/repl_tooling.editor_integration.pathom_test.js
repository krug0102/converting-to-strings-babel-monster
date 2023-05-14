goog.provide('repl_tooling.editor_integration.pathom_test');
repl_tooling.editor_integration.pathom_test.config = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"eval-mode","eval-mode",1105308847),new cljs.core.Keyword(null,"prefer-clj","prefer-clj",-124166522),new cljs.core.Keyword(null,"project-paths","project-paths",-1637469806),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [process.cwd()], null)], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"repl_tooling.editor_integration.pathom_test","repl_tooling.editor_integration.pathom_test",553010337),new cljs.core.Keyword(null,"customizing-pathom","customizing-pathom",-2042726637)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"customizing-pathom",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){
return check.async.async_test_STAR_("pathom resolver customization",(16000),(function (){
return repl_tooling.integration.fake_editor.disconnect_BANG_();
}),promesa.protocols._bind(null,(function (___31810__auto__){
return promesa.protocols._bind(repl_tooling.integration.fake_editor.connect_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"get-config","get-config",1800808901),(function (){
return cljs.core.deref(repl_tooling.editor_integration.pathom_test.config);
})], null)),(function (___31809__auto__){
return promesa.protocols._promise(promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._bind(null,(function (___31810__auto____$1){
return promesa.protocols._bind(cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["customizing resolves"], 0)),(function (___31809__auto____$1){
return promesa.protocols._bind(promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._bind(null,(function (___31810__auto____$2){
return promesa.protocols._bind(cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["will add a new resolver with our code"], 0)),(function (___31809__auto____$2){
return promesa.protocols._bind(repl_tooling.integration.fake_editor.type("some-symbol"),(function (___31809__auto____$3){
return promesa.protocols._bind(repl_tooling.commands_to_repl.pathom.add_resolver(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"outputs","outputs",-1896513034),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("var","meta","var/meta",1499588507)], null),new cljs.core.Keyword(null,"inputs","inputs",865803858),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","current-var","text/current-var",1432933099)], null)], null),(function (p__106382){
var map__106383 = p__106382;
var map__106383__$1 = cljs.core.__destructure_map(map__106383);
var current_var = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__106383__$1,new cljs.core.Keyword("text","current-var","text/current-var",1432933099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("var","meta","var/meta",1499588507),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword("text","contents","text/contents",-1566533716).cljs$core$IFn$_invoke$arity$1(current_var)], null)], null);
})),(function (___31809__auto____$4){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(check.async.to_promise(repl_tooling.integration.fake_editor.run_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"eql","eql",1414892383),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("var","meta","var/meta",1499588507)], null)], 0))),(function (left_106403){
return promesa.protocols._bind(check.async.to_promise(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("var","meta","var/meta",1499588507),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"some-symbol"], null)], null)),(function (right_106404){
return promesa.protocols._bind(null,(function (___31810__auto____$3){
return promesa.protocols._bind(cljs.test.do_report(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var lft__35783__auto__ = left_106403;
var rgt__35784__auto__ = right_106404;
var qleft__35785__auto__ = new cljs.core.Symbol(null,"left-106403","left-106403",-165890650,null);
var qright__35786__auto__ = new cljs.core.Symbol(null,"right-106404","right-106404",-1676133605,null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})(),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("var","meta","var/meta",1499588507),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"some-symbol"], null)], null))),(function (___31809__auto____$5){
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
var G__106632__delegate = function (___36014__auto__){
return cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
};
var G__106632 = function (var_args){
var ___36014__auto__ = null;
if (arguments.length > 0) {
var G__106633__i = 0, G__106633__a = new Array(arguments.length -  0);
while (G__106633__i < G__106633__a.length) {G__106633__a[G__106633__i] = arguments[G__106633__i + 0]; ++G__106633__i;}
  ___36014__auto__ = new cljs.core.IndexedSeq(G__106633__a,0,null);
} 
return G__106632__delegate.call(this,___36014__auto__);};
G__106632.cljs$lang$maxFixedArity = 0;
G__106632.cljs$lang$applyTo = (function (arglist__106635){
var ___36014__auto__ = cljs.core.seq(arglist__106635);
return G__106632__delegate(___36014__auto__);
});
G__106632.cljs$core$IFn$_invoke$arity$variadic = G__106632__delegate;
return G__106632;
})()
),(function (___31809__auto____$2){
return promesa.protocols._promise(promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._bind(null,(function (___31810__auto____$2){
return promesa.protocols._bind(cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["will compose original resolver, and add our customization code"], 0)),(function (___31809__auto____$3){
return promesa.protocols._bind(repl_tooling.integration.fake_editor.type("str"),(function (___31809__auto____$4){
return promesa.protocols._bind(repl_tooling.commands_to_repl.pathom.reset_resolvers(),(function (___31809__auto____$5){
return promesa.protocols._bind(repl_tooling.commands_to_repl.pathom.compose_resolver(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"outputs","outputs",-1896513034),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("var","meta","var/meta",1499588507)], null),new cljs.core.Keyword(null,"inputs","inputs",865803858),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("var","fqn","var/fqn",905054513)], null)], null),(function (p__106491){
var map__106492 = p__106491;
var map__106492__$1 = cljs.core.__destructure_map(map__106492);
var fqn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__106492__$1,new cljs.core.Keyword("var","fqn","var/fqn",905054513));
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__106492__$1,new cljs.core.Keyword("var","meta","var/meta",1499588507));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("var","meta","var/meta",1499588507),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(meta,new cljs.core.Keyword(null,"original-var","original-var",-2144893484),fqn)], null);
})),(function (___31809__auto____$6){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(check.async.to_promise(repl_tooling.integration.fake_editor.run_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"eql","eql",1414892383),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("var","meta","var/meta",1499588507)], null)], 0))),(function (left_106498){
return promesa.protocols._bind(check.async.to_promise(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("var","meta","var/meta",1499588507),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"doc","doc",1913296891),/concatenation/,new cljs.core.Keyword(null,"original-var","original-var",-2144893484),new cljs.core.Symbol("clojure.core","str","clojure.core/str",-1801552045,null)], null)], null)),(function (right_106499){
return promesa.protocols._bind(null,(function (___31810__auto____$3){
return promesa.protocols._bind(cljs.test.do_report(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var lft__35783__auto__ = left_106498;
var rgt__35784__auto__ = right_106499;
var qleft__35785__auto__ = new cljs.core.Symbol(null,"left-106498","left-106498",1620877614,null);
var qright__35786__auto__ = new cljs.core.Symbol(null,"right-106499","right-106499",1012749668,null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})(),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("var","meta","var/meta",1499588507),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"doc","doc",1913296891),/concatenation/,new cljs.core.Keyword(null,"original-var","original-var",-2144893484),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("clojure.core","str","clojure.core/str",-1801552045,null))], null)], null))),(function (___31809__auto____$7){
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
var G__106643__delegate = function (___36014__auto__){
return cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
};
var G__106643 = function (var_args){
var ___36014__auto__ = null;
if (arguments.length > 0) {
var G__106644__i = 0, G__106644__a = new Array(arguments.length -  0);
while (G__106644__i < G__106644__a.length) {G__106644__a[G__106644__i] = arguments[G__106644__i + 0]; ++G__106644__i;}
  ___36014__auto__ = new cljs.core.IndexedSeq(G__106644__a,0,null);
} 
return G__106643__delegate.call(this,___36014__auto__);};
G__106643.cljs$lang$maxFixedArity = 0;
G__106643.cljs$lang$applyTo = (function (arglist__106646){
var ___36014__auto__ = cljs.core.seq(arglist__106646);
return G__106643__delegate(___36014__auto__);
});
G__106643.cljs$core$IFn$_invoke$arity$variadic = G__106643__delegate;
return G__106643;
})()
));
}));
}));
})),(function() { 
var G__106647__delegate = function (___36014__auto__){
return cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
};
var G__106647 = function (var_args){
var ___36014__auto__ = null;
if (arguments.length > 0) {
var G__106649__i = 0, G__106649__a = new Array(arguments.length -  0);
while (G__106649__i < G__106649__a.length) {G__106649__a[G__106649__i] = arguments[G__106649__i + 0]; ++G__106649__i;}
  ___36014__auto__ = new cljs.core.IndexedSeq(G__106649__a,0,null);
} 
return G__106647__delegate.call(this,___36014__auto__);};
G__106647.cljs$lang$maxFixedArity = 0;
G__106647.cljs$lang$applyTo = (function (arglist__106650){
var ___36014__auto__ = cljs.core.seq(arglist__106650);
return G__106647__delegate(___36014__auto__);
});
G__106647.cljs$core$IFn$_invoke$arity$variadic = G__106647__delegate;
return G__106647;
})()
));
}));
})));
})], 0)),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));

repl_tooling.editor_integration.pathom_test.customizing_pathom = (function repl_tooling$editor_integration$pathom_test$customizing_pathom(){
return cljs.test.test_var(repl_tooling.editor_integration.pathom_test.customizing_pathom.cljs$lang$var);
});
repl_tooling.editor_integration.pathom_test.customizing_pathom.cljs$lang$test = (function (){
return check.async.async_test_STAR_("pathom resolver customization",(16000),(function (){
return repl_tooling.integration.fake_editor.disconnect_BANG_();
}),promesa.protocols._bind(null,(function (___31810__auto__){
return promesa.protocols._bind(repl_tooling.integration.fake_editor.connect_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"get-config","get-config",1800808901),(function (){
return cljs.core.deref(repl_tooling.editor_integration.pathom_test.config);
})], null)),(function (___31809__auto__){
return promesa.protocols._promise(promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._bind(null,(function (___31810__auto____$1){
return promesa.protocols._bind(cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["customizing resolves"], 0)),(function (___31809__auto____$1){
return promesa.protocols._bind(promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._bind(null,(function (___31810__auto____$2){
return promesa.protocols._bind(cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["will add a new resolver with our code"], 0)),(function (___31809__auto____$2){
return promesa.protocols._bind(repl_tooling.integration.fake_editor.type("some-symbol"),(function (___31809__auto____$3){
return promesa.protocols._bind(repl_tooling.commands_to_repl.pathom.add_resolver(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"outputs","outputs",-1896513034),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("var","meta","var/meta",1499588507)], null),new cljs.core.Keyword(null,"inputs","inputs",865803858),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","current-var","text/current-var",1432933099)], null)], null),(function (p__106535){
var map__106536 = p__106535;
var map__106536__$1 = cljs.core.__destructure_map(map__106536);
var current_var = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__106536__$1,new cljs.core.Keyword("text","current-var","text/current-var",1432933099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("var","meta","var/meta",1499588507),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword("text","contents","text/contents",-1566533716).cljs$core$IFn$_invoke$arity$1(current_var)], null)], null);
})),(function (___31809__auto____$4){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(check.async.to_promise(repl_tooling.integration.fake_editor.run_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"eql","eql",1414892383),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("var","meta","var/meta",1499588507)], null)], 0))),(function (left_106541){
return promesa.protocols._bind(check.async.to_promise(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("var","meta","var/meta",1499588507),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"some-symbol"], null)], null)),(function (right_106542){
return promesa.protocols._bind(null,(function (___31810__auto____$3){
return promesa.protocols._bind(cljs.test.do_report(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var lft__35783__auto__ = left_106541;
var rgt__35784__auto__ = right_106542;
var qleft__35785__auto__ = new cljs.core.Symbol(null,"left-106541","left-106541",-1961402118,null);
var qright__35786__auto__ = new cljs.core.Symbol(null,"right-106542","right-106542",1205394703,null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})(),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("var","meta","var/meta",1499588507),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"some-symbol"], null)], null))),(function (___31809__auto____$5){
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
var G__106658__delegate = function (___36014__auto__){
return cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
};
var G__106658 = function (var_args){
var ___36014__auto__ = null;
if (arguments.length > 0) {
var G__106659__i = 0, G__106659__a = new Array(arguments.length -  0);
while (G__106659__i < G__106659__a.length) {G__106659__a[G__106659__i] = arguments[G__106659__i + 0]; ++G__106659__i;}
  ___36014__auto__ = new cljs.core.IndexedSeq(G__106659__a,0,null);
} 
return G__106658__delegate.call(this,___36014__auto__);};
G__106658.cljs$lang$maxFixedArity = 0;
G__106658.cljs$lang$applyTo = (function (arglist__106660){
var ___36014__auto__ = cljs.core.seq(arglist__106660);
return G__106658__delegate(___36014__auto__);
});
G__106658.cljs$core$IFn$_invoke$arity$variadic = G__106658__delegate;
return G__106658;
})()
),(function (___31809__auto____$2){
return promesa.protocols._promise(promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._bind(null,(function (___31810__auto____$2){
return promesa.protocols._bind(cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["will compose original resolver, and add our customization code"], 0)),(function (___31809__auto____$3){
return promesa.protocols._bind(repl_tooling.integration.fake_editor.type("str"),(function (___31809__auto____$4){
return promesa.protocols._bind(repl_tooling.commands_to_repl.pathom.reset_resolvers(),(function (___31809__auto____$5){
return promesa.protocols._bind(repl_tooling.commands_to_repl.pathom.compose_resolver(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"outputs","outputs",-1896513034),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("var","meta","var/meta",1499588507)], null),new cljs.core.Keyword(null,"inputs","inputs",865803858),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("var","fqn","var/fqn",905054513)], null)], null),(function (p__106559){
var map__106560 = p__106559;
var map__106560__$1 = cljs.core.__destructure_map(map__106560);
var fqn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__106560__$1,new cljs.core.Keyword("var","fqn","var/fqn",905054513));
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__106560__$1,new cljs.core.Keyword("var","meta","var/meta",1499588507));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("var","meta","var/meta",1499588507),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(meta,new cljs.core.Keyword(null,"original-var","original-var",-2144893484),fqn)], null);
})),(function (___31809__auto____$6){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(check.async.to_promise(repl_tooling.integration.fake_editor.run_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"eql","eql",1414892383),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("var","meta","var/meta",1499588507)], null)], 0))),(function (left_106562){
return promesa.protocols._bind(check.async.to_promise(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("var","meta","var/meta",1499588507),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"doc","doc",1913296891),/concatenation/,new cljs.core.Keyword(null,"original-var","original-var",-2144893484),new cljs.core.Symbol("clojure.core","str","clojure.core/str",-1801552045,null)], null)], null)),(function (right_106563){
return promesa.protocols._bind(null,(function (___31810__auto____$3){
return promesa.protocols._bind(cljs.test.do_report(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var lft__35783__auto__ = left_106562;
var rgt__35784__auto__ = right_106563;
var qleft__35785__auto__ = new cljs.core.Symbol(null,"left-106562","left-106562",-1449687595,null);
var qright__35786__auto__ = new cljs.core.Symbol(null,"right-106563","right-106563",-1735835442,null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})(),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("var","meta","var/meta",1499588507),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"doc","doc",1913296891),/concatenation/,new cljs.core.Keyword(null,"original-var","original-var",-2144893484),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("clojure.core","str","clojure.core/str",-1801552045,null))], null)], null))),(function (___31809__auto____$7){
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
var G__106664__delegate = function (___36014__auto__){
return cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
};
var G__106664 = function (var_args){
var ___36014__auto__ = null;
if (arguments.length > 0) {
var G__106665__i = 0, G__106665__a = new Array(arguments.length -  0);
while (G__106665__i < G__106665__a.length) {G__106665__a[G__106665__i] = arguments[G__106665__i + 0]; ++G__106665__i;}
  ___36014__auto__ = new cljs.core.IndexedSeq(G__106665__a,0,null);
} 
return G__106664__delegate.call(this,___36014__auto__);};
G__106664.cljs$lang$maxFixedArity = 0;
G__106664.cljs$lang$applyTo = (function (arglist__106666){
var ___36014__auto__ = cljs.core.seq(arglist__106666);
return G__106664__delegate(___36014__auto__);
});
G__106664.cljs$core$IFn$_invoke$arity$variadic = G__106664__delegate;
return G__106664;
})()
));
}));
}));
})),(function() { 
var G__106667__delegate = function (___36014__auto__){
return cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
};
var G__106667 = function (var_args){
var ___36014__auto__ = null;
if (arguments.length > 0) {
var G__106668__i = 0, G__106668__a = new Array(arguments.length -  0);
while (G__106668__i < G__106668__a.length) {G__106668__a[G__106668__i] = arguments[G__106668__i + 0]; ++G__106668__i;}
  ___36014__auto__ = new cljs.core.IndexedSeq(G__106668__a,0,null);
} 
return G__106667__delegate.call(this,___36014__auto__);};
G__106667.cljs$lang$maxFixedArity = 0;
G__106667.cljs$lang$applyTo = (function (arglist__106669){
var ___36014__auto__ = cljs.core.seq(arglist__106669);
return G__106667__delegate(___36014__auto__);
});
G__106667.cljs$core$IFn$_invoke$arity$variadic = G__106667__delegate;
return G__106667;
})()
));
}));
})));
});

(repl_tooling.editor_integration.pathom_test.customizing_pathom.cljs$lang$var = new cljs.core.Var(function(){return repl_tooling.editor_integration.pathom_test.customizing_pathom;},new cljs.core.Symbol("repl-tooling.editor-integration.pathom-test","customizing-pathom","repl-tooling.editor-integration.pathom-test/customizing-pathom",1292027006,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"repl-tooling.editor-integration.pathom-test","repl-tooling.editor-integration.pathom-test",973659904,null),new cljs.core.Symbol(null,"customizing-pathom","customizing-pathom",-402195110,null),"repl_tooling/editor_integration/pathom_test.cljs",34,1,15,15,cljs.core.List.EMPTY,null,(cljs.core.truth_(repl_tooling.editor_integration.pathom_test.customizing_pathom)?repl_tooling.editor_integration.pathom_test.customizing_pathom.cljs$lang$test:null)])));

//# sourceMappingURL=repl_tooling.editor_integration.pathom_test.js.map
