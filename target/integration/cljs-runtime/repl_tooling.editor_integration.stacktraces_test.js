goog.provide('repl_tooling.editor_integration.stacktraces_test');
repl_tooling.editor_integration.stacktraces_test.click_link = (function repl_tooling$editor_integration$stacktraces_test$click_link(link_text){
return promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind((function (){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__107278_SHARP_){
return cljs.core.re_find(cljs.core.re_pattern(link_text),p1__107278_SHARP_.innerText);
}),cljs.core.rest(document.querySelectorAll("div.result a"))));
}),(function (find_link){
return promesa.protocols._bind(repl_tooling.integration.fake_editor.wait_for_p(find_link),(function (link){
return promesa.protocols._bind(null,(function (___31810__auto__){
return promesa.protocols._promise(link.click());
}));
}));
}));
}));
});
repl_tooling.editor_integration.stacktraces_test.open_editor_callback = (function repl_tooling$editor_integration$stacktraces_test$open_editor_callback(){
var last_call = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(promesa.core.deferred());
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opened-editor","opened-editor",-1442799144),(function (){
var prom = cljs.core.deref(last_call);
promesa.core.then.cljs$core$IFn$_invoke$arity$2(prom,(function (){
return cljs.core.reset_BANG_(last_call,promesa.core.deferred());
}));

return prom;
}),new cljs.core.Keyword(null,"callback","callback",-705136228),(function (res){
return promesa.core.resolve_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(last_call),res);
})], null);
});
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"repl_tooling.editor_integration.stacktraces_test","repl_tooling.editor_integration.stacktraces_test",-267445397),new cljs.core.Keyword(null,"clickable-stacktraces","clickable-stacktraces",1573141363)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"clickable-stacktraces",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){
var map__107303 = repl_tooling.editor_integration.stacktraces_test.open_editor_callback();
var map__107303__$1 = cljs.core.__destructure_map(map__107303);
var opened_editor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__107303__$1,new cljs.core.Keyword(null,"opened-editor","opened-editor",-1442799144));
var callback = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__107303__$1,new cljs.core.Keyword(null,"callback","callback",-705136228));
return check.async.async_test_STAR_("pathom resolvers",(8000),(function (){
return repl_tooling.integration.fake_editor.disconnect_BANG_();
}),promesa.protocols._bind(null,(function (___31810__auto__){
return promesa.protocols._bind(repl_tooling.integration.fake_editor.connect_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open-editor","open-editor",1337424020),callback], null)),(function (___31809__auto__){
return promesa.protocols._bind(promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._bind(null,(function (___31810__auto____$1){
return promesa.protocols._bind(cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["will open a Clojure code from a stacktrace derived from classpath"], 0)),(function (___31809__auto____$1){
return promesa.protocols._bind(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(repl_tooling.integration.fake_editor.state,cljs.core.assoc,new cljs.core.Keyword(null,"filename","filename",-1428840783),"test/repl_tooling/integration/fake_editor.clj"),(function (___31809__auto____$2){
return promesa.protocols._bind(repl_tooling.integration.fake_editor.type_and_eval("(/ 10 0)"),(function (___31809__auto____$3){
return promesa.protocols._bind(repl_tooling.editor_integration.stacktraces_test.click_link("fake_editor.clj:1"),(function (___31809__auto____$4){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(check.async.to_promise((opened_editor.cljs$core$IFn$_invoke$arity$0 ? opened_editor.cljs$core$IFn$_invoke$arity$0() : opened_editor.call(null))),(function (left_107336){
return promesa.protocols._bind(check.async.to_promise(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file-name","file-name",-1654217259),"test/repl_tooling/integration/fake_editor.clj",new cljs.core.Keyword(null,"line","line",212345235),(0)], null)),(function (right_107337){
return promesa.protocols._bind(null,(function (___31810__auto____$2){
return promesa.protocols._bind(cljs.test.do_report(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var lft__35783__auto__ = left_107336;
var rgt__35784__auto__ = right_107337;
var qleft__35785__auto__ = new cljs.core.Symbol(null,"left-107336","left-107336",-825363471,null);
var qright__35786__auto__ = new cljs.core.Symbol(null,"right-107337","right-107337",-214828896,null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})(),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file-name","file-name",-1654217259),"test/repl_tooling/integration/fake_editor.clj",new cljs.core.Keyword(null,"line","line",212345235),(0)], null))),(function (___31809__auto____$5){
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
var G__107409__delegate = function (___36014__auto__){
return cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
};
var G__107409 = function (var_args){
var ___36014__auto__ = null;
if (arguments.length > 0) {
var G__107410__i = 0, G__107410__a = new Array(arguments.length -  0);
while (G__107410__i < G__107410__a.length) {G__107410__a[G__107410__i] = arguments[G__107410__i + 0]; ++G__107410__i;}
  ___36014__auto__ = new cljs.core.IndexedSeq(G__107410__a,0,null);
} 
return G__107409__delegate.call(this,___36014__auto__);};
G__107409.cljs$lang$maxFixedArity = 0;
G__107409.cljs$lang$applyTo = (function (arglist__107411){
var ___36014__auto__ = cljs.core.seq(arglist__107411);
return G__107409__delegate(___36014__auto__);
});
G__107409.cljs$core$IFn$_invoke$arity$variadic = G__107409__delegate;
return G__107409;
})()
),(function (___31809__auto____$1){
return promesa.protocols._promise(promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._bind(null,(function (___31810__auto____$1){
return promesa.protocols._bind(cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["will open a Clojure source code inside a JAR"], 0)),(function (___31809__auto____$2){
return promesa.protocols._bind(repl_tooling.editor_integration.stacktraces_test.click_link("core.clj"),(function (___31809__auto____$3){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(check.async.to_promise((opened_editor.cljs$core$IFn$_invoke$arity$0 ? opened_editor.cljs$core$IFn$_invoke$arity$0() : opened_editor.call(null))),(function (left_107348){
return promesa.protocols._bind(check.async.to_promise(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file-name","file-name",-1654217259),/clojure.*jar!.*core.clj/,new cljs.core.Keyword(null,"contents","contents",-1567174023),/clojure.core/], null)),(function (right_107349){
return promesa.protocols._bind(null,(function (___31810__auto____$2){
return promesa.protocols._bind(cljs.test.do_report(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var lft__35783__auto__ = left_107348;
var rgt__35784__auto__ = right_107349;
var qleft__35785__auto__ = new cljs.core.Symbol(null,"left-107348","left-107348",293480539,null);
var qright__35786__auto__ = new cljs.core.Symbol(null,"right-107349","right-107349",-1839155725,null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})(),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file-name","file-name",-1654217259),/clojure.*jar!.*core.clj/,new cljs.core.Keyword(null,"contents","contents",-1567174023),/clojure.core/], null))),(function (___31809__auto____$4){
return promesa.protocols._promise(new cljs.core.Keyword(null,"done","done",-889844188));
}));
}));
}));
}));
})));
}));
}));
})),(function() { 
var G__107412__delegate = function (___36014__auto__){
return cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
};
var G__107412 = function (var_args){
var ___36014__auto__ = null;
if (arguments.length > 0) {
var G__107413__i = 0, G__107413__a = new Array(arguments.length -  0);
while (G__107413__i < G__107413__a.length) {G__107413__a[G__107413__i] = arguments[G__107413__i + 0]; ++G__107413__i;}
  ___36014__auto__ = new cljs.core.IndexedSeq(G__107413__a,0,null);
} 
return G__107412__delegate.call(this,___36014__auto__);};
G__107412.cljs$lang$maxFixedArity = 0;
G__107412.cljs$lang$applyTo = (function (arglist__107414){
var ___36014__auto__ = cljs.core.seq(arglist__107414);
return G__107412__delegate(___36014__auto__);
});
G__107412.cljs$core$IFn$_invoke$arity$variadic = G__107412__delegate;
return G__107412;
})()
));
}));
}));
})));
})], 0)),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));

repl_tooling.editor_integration.stacktraces_test.clickable_stacktraces = (function repl_tooling$editor_integration$stacktraces_test$clickable_stacktraces(){
return cljs.test.test_var(repl_tooling.editor_integration.stacktraces_test.clickable_stacktraces.cljs$lang$var);
});
repl_tooling.editor_integration.stacktraces_test.clickable_stacktraces.cljs$lang$test = (function (){
var map__107362 = repl_tooling.editor_integration.stacktraces_test.open_editor_callback();
var map__107362__$1 = cljs.core.__destructure_map(map__107362);
var opened_editor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__107362__$1,new cljs.core.Keyword(null,"opened-editor","opened-editor",-1442799144));
var callback = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__107362__$1,new cljs.core.Keyword(null,"callback","callback",-705136228));
return check.async.async_test_STAR_("pathom resolvers",(8000),(function (){
return repl_tooling.integration.fake_editor.disconnect_BANG_();
}),promesa.protocols._bind(null,(function (___31810__auto__){
return promesa.protocols._bind(repl_tooling.integration.fake_editor.connect_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open-editor","open-editor",1337424020),callback], null)),(function (___31809__auto__){
return promesa.protocols._bind(promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._bind(null,(function (___31810__auto____$1){
return promesa.protocols._bind(cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["will open a Clojure code from a stacktrace derived from classpath"], 0)),(function (___31809__auto____$1){
return promesa.protocols._bind(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(repl_tooling.integration.fake_editor.state,cljs.core.assoc,new cljs.core.Keyword(null,"filename","filename",-1428840783),"test/repl_tooling/integration/fake_editor.clj"),(function (___31809__auto____$2){
return promesa.protocols._bind(repl_tooling.integration.fake_editor.type_and_eval("(/ 10 0)"),(function (___31809__auto____$3){
return promesa.protocols._bind(repl_tooling.editor_integration.stacktraces_test.click_link("fake_editor.clj:1"),(function (___31809__auto____$4){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(check.async.to_promise((opened_editor.cljs$core$IFn$_invoke$arity$0 ? opened_editor.cljs$core$IFn$_invoke$arity$0() : opened_editor.call(null))),(function (left_107375){
return promesa.protocols._bind(check.async.to_promise(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file-name","file-name",-1654217259),"test/repl_tooling/integration/fake_editor.clj",new cljs.core.Keyword(null,"line","line",212345235),(0)], null)),(function (right_107376){
return promesa.protocols._bind(null,(function (___31810__auto____$2){
return promesa.protocols._bind(cljs.test.do_report(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var lft__35783__auto__ = left_107375;
var rgt__35784__auto__ = right_107376;
var qleft__35785__auto__ = new cljs.core.Symbol(null,"left-107375","left-107375",-3427864,null);
var qright__35786__auto__ = new cljs.core.Symbol(null,"right-107376","right-107376",390526909,null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})(),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file-name","file-name",-1654217259),"test/repl_tooling/integration/fake_editor.clj",new cljs.core.Keyword(null,"line","line",212345235),(0)], null))),(function (___31809__auto____$5){
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
var G__107417__delegate = function (___36014__auto__){
return cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
};
var G__107417 = function (var_args){
var ___36014__auto__ = null;
if (arguments.length > 0) {
var G__107419__i = 0, G__107419__a = new Array(arguments.length -  0);
while (G__107419__i < G__107419__a.length) {G__107419__a[G__107419__i] = arguments[G__107419__i + 0]; ++G__107419__i;}
  ___36014__auto__ = new cljs.core.IndexedSeq(G__107419__a,0,null);
} 
return G__107417__delegate.call(this,___36014__auto__);};
G__107417.cljs$lang$maxFixedArity = 0;
G__107417.cljs$lang$applyTo = (function (arglist__107420){
var ___36014__auto__ = cljs.core.seq(arglist__107420);
return G__107417__delegate(___36014__auto__);
});
G__107417.cljs$core$IFn$_invoke$arity$variadic = G__107417__delegate;
return G__107417;
})()
),(function (___31809__auto____$1){
return promesa.protocols._promise(promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._bind(null,(function (___31810__auto____$1){
return promesa.protocols._bind(cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["will open a Clojure source code inside a JAR"], 0)),(function (___31809__auto____$2){
return promesa.protocols._bind(repl_tooling.editor_integration.stacktraces_test.click_link("core.clj"),(function (___31809__auto____$3){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(check.async.to_promise((opened_editor.cljs$core$IFn$_invoke$arity$0 ? opened_editor.cljs$core$IFn$_invoke$arity$0() : opened_editor.call(null))),(function (left_107392){
return promesa.protocols._bind(check.async.to_promise(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file-name","file-name",-1654217259),/clojure.*jar!.*core.clj/,new cljs.core.Keyword(null,"contents","contents",-1567174023),/clojure.core/], null)),(function (right_107393){
return promesa.protocols._bind(null,(function (___31810__auto____$2){
return promesa.protocols._bind(cljs.test.do_report(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var lft__35783__auto__ = left_107392;
var rgt__35784__auto__ = right_107393;
var qleft__35785__auto__ = new cljs.core.Symbol(null,"left-107392","left-107392",2068230168,null);
var qright__35786__auto__ = new cljs.core.Symbol(null,"right-107393","right-107393",613665016,null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})(),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file-name","file-name",-1654217259),/clojure.*jar!.*core.clj/,new cljs.core.Keyword(null,"contents","contents",-1567174023),/clojure.core/], null))),(function (___31809__auto____$4){
return promesa.protocols._promise(new cljs.core.Keyword(null,"done","done",-889844188));
}));
}));
}));
}));
})));
}));
}));
})),(function() { 
var G__107427__delegate = function (___36014__auto__){
return cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
};
var G__107427 = function (var_args){
var ___36014__auto__ = null;
if (arguments.length > 0) {
var G__107428__i = 0, G__107428__a = new Array(arguments.length -  0);
while (G__107428__i < G__107428__a.length) {G__107428__a[G__107428__i] = arguments[G__107428__i + 0]; ++G__107428__i;}
  ___36014__auto__ = new cljs.core.IndexedSeq(G__107428__a,0,null);
} 
return G__107427__delegate.call(this,___36014__auto__);};
G__107427.cljs$lang$maxFixedArity = 0;
G__107427.cljs$lang$applyTo = (function (arglist__107429){
var ___36014__auto__ = cljs.core.seq(arglist__107429);
return G__107427__delegate(___36014__auto__);
});
G__107427.cljs$core$IFn$_invoke$arity$variadic = G__107427__delegate;
return G__107427;
})()
));
}));
}));
})));
});

(repl_tooling.editor_integration.stacktraces_test.clickable_stacktraces.cljs$lang$var = new cljs.core.Var(function(){return repl_tooling.editor_integration.stacktraces_test.clickable_stacktraces;},new cljs.core.Symbol("repl-tooling.editor-integration.stacktraces-test","clickable-stacktraces","repl-tooling.editor-integration.stacktraces-test/clickable-stacktraces",-1309156643,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"repl-tooling.editor-integration.stacktraces-test","repl-tooling.editor-integration.stacktraces-test",704464319,null),new cljs.core.Symbol(null,"clickable-stacktraces","clickable-stacktraces",-1081294406,null),"repl_tooling/editor_integration/stacktraces_test.cljs",37,1,28,28,cljs.core.List.EMPTY,null,(cljs.core.truth_(repl_tooling.editor_integration.stacktraces_test.clickable_stacktraces)?repl_tooling.editor_integration.stacktraces_test.clickable_stacktraces.cljs$lang$test:null)])));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"repl_tooling.editor_integration.stacktraces_test","repl_tooling.editor_integration.stacktraces_test",-267445397),new cljs.core.Keyword(null,"fake-editor","fake-editor",-2015963141)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"fake-editor",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof repl_tooling !== 'undefined') && (typeof repl_tooling.editor_integration !== 'undefined') && (typeof repl_tooling.editor_integration.stacktraces_test !== 'undefined') && (typeof repl_tooling.editor_integration.stacktraces_test.t_repl_tooling$editor_integration$stacktraces_test107400 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
repl_tooling.editor_integration.stacktraces_test.t_repl_tooling$editor_integration$stacktraces_test107400 = (function (meta107401){
this.meta107401 = meta107401;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(repl_tooling.editor_integration.stacktraces_test.t_repl_tooling$editor_integration$stacktraces_test107400.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_107402,meta107401__$1){
var self__ = this;
var _107402__$1 = this;
return (new repl_tooling.editor_integration.stacktraces_test.t_repl_tooling$editor_integration$stacktraces_test107400(meta107401__$1));
}));

(repl_tooling.editor_integration.stacktraces_test.t_repl_tooling$editor_integration$stacktraces_test107400.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_107402){
var self__ = this;
var _107402__$1 = this;
return self__.meta107401;
}));

(repl_tooling.editor_integration.stacktraces_test.t_repl_tooling$editor_integration$stacktraces_test107400.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(repl_tooling.editor_integration.stacktraces_test.t_repl_tooling$editor_integration$stacktraces_test107400.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__54113__auto__,devcard_opts__54114__auto__){
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

(repl_tooling.editor_integration.stacktraces_test.t_repl_tooling$editor_integration$stacktraces_test107400.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta107401","meta107401",662700894,null)], null);
}));

(repl_tooling.editor_integration.stacktraces_test.t_repl_tooling$editor_integration$stacktraces_test107400.cljs$lang$type = true);

(repl_tooling.editor_integration.stacktraces_test.t_repl_tooling$editor_integration$stacktraces_test107400.cljs$lang$ctorStr = "repl-tooling.editor-integration.stacktraces-test/t_repl_tooling$editor_integration$stacktraces_test107400");

(repl_tooling.editor_integration.stacktraces_test.t_repl_tooling$editor_integration$stacktraces_test107400.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"repl-tooling.editor-integration.stacktraces-test/t_repl_tooling$editor_integration$stacktraces_test107400");
}));

/**
 * Positional factory function for repl-tooling.editor-integration.stacktraces-test/t_repl_tooling$editor_integration$stacktraces_test107400.
 */
repl_tooling.editor_integration.stacktraces_test.__GT_t_repl_tooling$editor_integration$stacktraces_test107400 = (function repl_tooling$editor_integration$stacktraces_test$__GT_t_repl_tooling$editor_integration$stacktraces_test107400(meta107401){
return (new repl_tooling.editor_integration.stacktraces_test.t_repl_tooling$editor_integration$stacktraces_test107400(meta107401));
});

}

return (new repl_tooling.editor_integration.stacktraces_test.t_repl_tooling$editor_integration$stacktraces_test107400(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),repl_tooling.integration.fake_editor.state,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));

//# sourceMappingURL=repl_tooling.editor_integration.stacktraces_test.js.map
