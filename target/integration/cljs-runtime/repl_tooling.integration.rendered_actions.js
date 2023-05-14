goog.provide('repl_tooling.integration.rendered_actions');
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"repl_tooling.integration.rendered_actions","repl_tooling.integration.rendered_actions",403093697),new cljs.core.Keyword(null,"fake-editor","fake-editor",-2015963141)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"fake-editor",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof repl_tooling !== 'undefined') && (typeof repl_tooling.integration !== 'undefined') && (typeof repl_tooling.integration.rendered_actions !== 'undefined') && (typeof repl_tooling.integration.rendered_actions.t_repl_tooling$integration$rendered_actions99857 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
repl_tooling.integration.rendered_actions.t_repl_tooling$integration$rendered_actions99857 = (function (meta99858){
this.meta99858 = meta99858;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(repl_tooling.integration.rendered_actions.t_repl_tooling$integration$rendered_actions99857.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_99859,meta99858__$1){
var self__ = this;
var _99859__$1 = this;
return (new repl_tooling.integration.rendered_actions.t_repl_tooling$integration$rendered_actions99857(meta99858__$1));
}));

(repl_tooling.integration.rendered_actions.t_repl_tooling$integration$rendered_actions99857.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_99859){
var self__ = this;
var _99859__$1 = this;
return self__.meta99858;
}));

(repl_tooling.integration.rendered_actions.t_repl_tooling$integration$rendered_actions99857.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(repl_tooling.integration.rendered_actions.t_repl_tooling$integration$rendered_actions99857.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__54113__auto__,devcard_opts__54114__auto__){
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

(repl_tooling.integration.rendered_actions.t_repl_tooling$integration$rendered_actions99857.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta99858","meta99858",-1725704297,null)], null);
}));

(repl_tooling.integration.rendered_actions.t_repl_tooling$integration$rendered_actions99857.cljs$lang$type = true);

(repl_tooling.integration.rendered_actions.t_repl_tooling$integration$rendered_actions99857.cljs$lang$ctorStr = "repl-tooling.integration.rendered-actions/t_repl_tooling$integration$rendered_actions99857");

(repl_tooling.integration.rendered_actions.t_repl_tooling$integration$rendered_actions99857.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"repl-tooling.integration.rendered-actions/t_repl_tooling$integration$rendered_actions99857");
}));

/**
 * Positional factory function for repl-tooling.integration.rendered-actions/t_repl_tooling$integration$rendered_actions99857.
 */
repl_tooling.integration.rendered_actions.__GT_t_repl_tooling$integration$rendered_actions99857 = (function repl_tooling$integration$rendered_actions$__GT_t_repl_tooling$integration$rendered_actions99857(meta99858){
return (new repl_tooling.integration.rendered_actions.t_repl_tooling$integration$rendered_actions99857(meta99858));
});

}

return (new repl_tooling.integration.rendered_actions.t_repl_tooling$integration$rendered_actions99857(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),repl_tooling.integration.fake_editor.state,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"inspect-data","inspect-data",640452006),true,new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
repl_tooling.integration.rendered_actions.click_chevron = (function repl_tooling$integration$rendered_actions$click_chevron(n){
return repl_tooling.integration.fake_editor.wait_for_p((function (){
var temp__5753__auto__ = (document.querySelectorAll("a.chevron")[n]);
if(cljs.core.truth_(temp__5753__auto__)){
var elem = temp__5753__auto__;
elem.click();

return elem;
} else {
return null;
}
}));
});
repl_tooling.integration.rendered_actions.clipboard = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
repl_tooling.integration.rendered_actions.click_clipboard = (function repl_tooling$integration$rendered_actions$click_clipboard(n){
cljs.core.reset_BANG_(repl_tooling.integration.rendered_actions.clipboard,promesa.core.deferred());

return repl_tooling.integration.fake_editor.wait_for_p((function (){
var temp__5753__auto__ = (document.querySelectorAll("a.icon.clipboard")[n]);
if(cljs.core.truth_(temp__5753__auto__)){
var obj = temp__5753__auto__;
obj.click();

return obj;
} else {
return null;
}
}));
});
(devcards.core.test_timeout = (20000));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"repl_tooling.integration.rendered_actions","repl_tooling.integration.rendered_actions",403093697),new cljs.core.Keyword(null,"copy-to-clipboard","copy-to-clipboard",-1375474147)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"copy-to-clipboard",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){
return check.async.async_test_STAR_("actions that can be made after rendering a result",(2000),(function (){
return repl_tooling.integration.fake_editor.disconnect_BANG_();
}),promesa.protocols._bind(null,(function (___31810__auto__){
return promesa.protocols._bind(repl_tooling.integration.fake_editor.connect_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-copy","on-copy",-227435882),(function (p1__99879_SHARP_){
return promesa.core.resolve_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(repl_tooling.integration.rendered_actions.clipboard),p1__99879_SHARP_);
})], null)),(function (___31809__auto__){
return promesa.protocols._bind(promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._bind(null,(function (___31810__auto____$1){
return promesa.protocols._bind(cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["copies tagged literals to clipboard"], 0)),(function (___31809__auto____$1){
return promesa.protocols._bind(repl_tooling.integration.fake_editor.type_and_eval("(tagged-literal 'foo [1 2])"),(function (___31809__auto____$2){
return promesa.protocols._bind(repl_tooling.integration.fake_editor.change_result_p(),(function (___31809__auto____$3){
return promesa.protocols._bind(repl_tooling.integration.rendered_actions.click_clipboard((0)),(function (___31809__auto____$4){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(check.async.to_promise(cljs.core.deref(repl_tooling.integration.rendered_actions.clipboard)),(function (left_99887){
return promesa.protocols._bind(check.async.to_promise("#foo [1 2]"),(function (right_99888){
return promesa.protocols._bind(null,(function (___31810__auto____$2){
return promesa.protocols._bind(cljs.test.do_report(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var lft__35783__auto__ = left_99887;
var rgt__35784__auto__ = right_99888;
var qleft__35785__auto__ = new cljs.core.Symbol(null,"left-99887","left-99887",-54566081,null);
var qright__35786__auto__ = new cljs.core.Symbol(null,"right-99888","right-99888",-1920986803,null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})(),new cljs.core.Keyword(null,"expected","expected",1583670997),"#foo [1 2]")),(function (___31809__auto____$5){
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
var G__100380__delegate = function (___36014__auto__){
return cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
};
var G__100380 = function (var_args){
var ___36014__auto__ = null;
if (arguments.length > 0) {
var G__100381__i = 0, G__100381__a = new Array(arguments.length -  0);
while (G__100381__i < G__100381__a.length) {G__100381__a[G__100381__i] = arguments[G__100381__i + 0]; ++G__100381__i;}
  ___36014__auto__ = new cljs.core.IndexedSeq(G__100381__a,0,null);
} 
return G__100380__delegate.call(this,___36014__auto__);};
G__100380.cljs$lang$maxFixedArity = 0;
G__100380.cljs$lang$applyTo = (function (arglist__100382){
var ___36014__auto__ = cljs.core.seq(arglist__100382);
return G__100380__delegate(___36014__auto__);
});
G__100380.cljs$core$IFn$_invoke$arity$variadic = G__100380__delegate;
return G__100380;
})()
),(function (___31809__auto____$1){
return promesa.protocols._bind(promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._bind(null,(function (___31810__auto____$1){
return promesa.protocols._bind(cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["copy only first line"], 0)),(function (___31809__auto____$2){
return promesa.protocols._bind(repl_tooling.integration.rendered_actions.click_chevron((0)),(function (___31809__auto____$3){
return promesa.protocols._bind(repl_tooling.integration.rendered_actions.click_clipboard((0)),(function (___31809__auto____$4){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(check.async.to_promise(cljs.core.deref(repl_tooling.integration.rendered_actions.clipboard)),(function (left_99899){
return promesa.protocols._bind(check.async.to_promise("#foo [1 2]"),(function (right_99900){
return promesa.protocols._bind(null,(function (___31810__auto____$2){
return promesa.protocols._bind(cljs.test.do_report(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var lft__35783__auto__ = left_99899;
var rgt__35784__auto__ = right_99900;
var qleft__35785__auto__ = new cljs.core.Symbol(null,"left-99899","left-99899",-1466813751,null);
var qright__35786__auto__ = new cljs.core.Symbol(null,"right-99900","right-99900",-495197546,null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})(),new cljs.core.Keyword(null,"expected","expected",1583670997),"#foo [1 2]")),(function (___31809__auto____$5){
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
var G__100384__delegate = function (___36014__auto__){
return cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
};
var G__100384 = function (var_args){
var ___36014__auto__ = null;
if (arguments.length > 0) {
var G__100386__i = 0, G__100386__a = new Array(arguments.length -  0);
while (G__100386__i < G__100386__a.length) {G__100386__a[G__100386__i] = arguments[G__100386__i + 0]; ++G__100386__i;}
  ___36014__auto__ = new cljs.core.IndexedSeq(G__100386__a,0,null);
} 
return G__100384__delegate.call(this,___36014__auto__);};
G__100384.cljs$lang$maxFixedArity = 0;
G__100384.cljs$lang$applyTo = (function (arglist__100387){
var ___36014__auto__ = cljs.core.seq(arglist__100387);
return G__100384__delegate(___36014__auto__);
});
G__100384.cljs$core$IFn$_invoke$arity$variadic = G__100384__delegate;
return G__100384;
})()
),(function (___31809__auto____$2){
return promesa.protocols._bind(promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._bind(null,(function (___31810__auto____$1){
return promesa.protocols._bind(cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["copies colls"], 0)),(function (___31809__auto____$3){
return promesa.protocols._bind(repl_tooling.integration.rendered_actions.click_clipboard((1)),(function (___31809__auto____$4){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(check.async.to_promise(cljs.core.deref(repl_tooling.integration.rendered_actions.clipboard)),(function (left_99906){
return promesa.protocols._bind(check.async.to_promise("[1 2]"),(function (right_99907){
return promesa.protocols._bind(null,(function (___31810__auto____$2){
return promesa.protocols._bind(cljs.test.do_report(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var lft__35783__auto__ = left_99906;
var rgt__35784__auto__ = right_99907;
var qleft__35785__auto__ = new cljs.core.Symbol(null,"left-99906","left-99906",1326478700,null);
var qright__35786__auto__ = new cljs.core.Symbol(null,"right-99907","right-99907",479133883,null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})(),new cljs.core.Keyword(null,"expected","expected",1583670997),"[1 2]")),(function (___31809__auto____$5){
return promesa.protocols._promise(new cljs.core.Keyword(null,"done","done",-889844188));
}));
}));
}));
}));
})));
}));
}));
})),(function() { 
var G__100394__delegate = function (___36014__auto__){
return cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
};
var G__100394 = function (var_args){
var ___36014__auto__ = null;
if (arguments.length > 0) {
var G__100395__i = 0, G__100395__a = new Array(arguments.length -  0);
while (G__100395__i < G__100395__a.length) {G__100395__a[G__100395__i] = arguments[G__100395__i + 0]; ++G__100395__i;}
  ___36014__auto__ = new cljs.core.IndexedSeq(G__100395__a,0,null);
} 
return G__100394__delegate.call(this,___36014__auto__);};
G__100394.cljs$lang$maxFixedArity = 0;
G__100394.cljs$lang$applyTo = (function (arglist__100396){
var ___36014__auto__ = cljs.core.seq(arglist__100396);
return G__100394__delegate(___36014__auto__);
});
G__100394.cljs$core$IFn$_invoke$arity$variadic = G__100394__delegate;
return G__100394;
})()
),(function (___31809__auto____$3){
return promesa.protocols._bind(promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._bind(null,(function (___31810__auto____$1){
return promesa.protocols._bind(cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["copies leafs"], 0)),(function (___31809__auto____$4){
return promesa.protocols._bind(repl_tooling.integration.rendered_actions.click_chevron((1)),(function (___31809__auto____$5){
return promesa.protocols._bind(repl_tooling.integration.rendered_actions.click_clipboard((2)),(function (___31809__auto____$6){
return promesa.protocols._bind(promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(check.async.to_promise(cljs.core.deref(repl_tooling.integration.rendered_actions.clipboard)),(function (left_99908){
return promesa.protocols._bind(check.async.to_promise("1"),(function (right_99909){
return promesa.protocols._bind(null,(function (___31810__auto____$2){
return promesa.protocols._bind(cljs.test.do_report(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var lft__35783__auto__ = left_99908;
var rgt__35784__auto__ = right_99909;
var qleft__35785__auto__ = new cljs.core.Symbol(null,"left-99908","left-99908",644964514,null);
var qright__35786__auto__ = new cljs.core.Symbol(null,"right-99909","right-99909",-80291946,null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})(),new cljs.core.Keyword(null,"expected","expected",1583670997),"1")),(function (___31809__auto____$7){
return promesa.protocols._promise(new cljs.core.Keyword(null,"done","done",-889844188));
}));
}));
}));
}));
})),(function (___31809__auto____$7){
return promesa.protocols._bind(repl_tooling.integration.rendered_actions.click_clipboard((3)),(function (___31809__auto____$8){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(check.async.to_promise(cljs.core.deref(repl_tooling.integration.rendered_actions.clipboard)),(function (left_99910){
return promesa.protocols._bind(check.async.to_promise("2"),(function (right_99911){
return promesa.protocols._bind(null,(function (___31810__auto____$2){
return promesa.protocols._bind(cljs.test.do_report(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var lft__35783__auto__ = left_99910;
var rgt__35784__auto__ = right_99911;
var qleft__35785__auto__ = new cljs.core.Symbol(null,"left-99910","left-99910",918199106,null);
var qright__35786__auto__ = new cljs.core.Symbol(null,"right-99911","right-99911",1740063500,null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})(),new cljs.core.Keyword(null,"expected","expected",1583670997),"2")),(function (___31809__auto____$9){
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
var G__100402__delegate = function (___36014__auto__){
return cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
};
var G__100402 = function (var_args){
var ___36014__auto__ = null;
if (arguments.length > 0) {
var G__100404__i = 0, G__100404__a = new Array(arguments.length -  0);
while (G__100404__i < G__100404__a.length) {G__100404__a[G__100404__i] = arguments[G__100404__i + 0]; ++G__100404__i;}
  ___36014__auto__ = new cljs.core.IndexedSeq(G__100404__a,0,null);
} 
return G__100402__delegate.call(this,___36014__auto__);};
G__100402.cljs$lang$maxFixedArity = 0;
G__100402.cljs$lang$applyTo = (function (arglist__100405){
var ___36014__auto__ = cljs.core.seq(arglist__100405);
return G__100402__delegate(___36014__auto__);
});
G__100402.cljs$core$IFn$_invoke$arity$variadic = G__100402__delegate;
return G__100402;
})()
),(function (___31809__auto____$4){
return promesa.protocols._bind(promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._bind(null,(function (___31810__auto____$1){
return promesa.protocols._bind(cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["copies incomplete string"], 0)),(function (___31809__auto____$5){
return promesa.protocols._bind(repl_tooling.integration.fake_editor.type_and_eval("(str (range 80))"),(function (___31809__auto____$6){
return promesa.protocols._bind(repl_tooling.integration.fake_editor.change_result_p(),(function (___31809__auto____$7){
return promesa.protocols._bind(repl_tooling.integration.rendered_actions.click_clipboard((0)),(function (___31809__auto____$8){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(check.async.to_promise(cljs.core.deref(repl_tooling.integration.rendered_actions.clipboard)),(function (left_99962){
return promesa.protocols._bind(check.async.to_promise(/28 29/),(function (right_99963){
return promesa.protocols._bind(null,(function (___31810__auto____$2){
return promesa.protocols._bind(cljs.test.do_report(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var lft__35783__auto__ = left_99962;
var rgt__35784__auto__ = right_99963;
var qleft__35785__auto__ = new cljs.core.Symbol(null,"left-99962","left-99962",-1494152058,null);
var qright__35786__auto__ = new cljs.core.Symbol(null,"right-99963","right-99963",949507267,null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})(),new cljs.core.Keyword(null,"expected","expected",1583670997),/28 29/)),(function (___31809__auto____$9){
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
var G__100407__delegate = function (___36014__auto__){
return cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
};
var G__100407 = function (var_args){
var ___36014__auto__ = null;
if (arguments.length > 0) {
var G__100408__i = 0, G__100408__a = new Array(arguments.length -  0);
while (G__100408__i < G__100408__a.length) {G__100408__a[G__100408__i] = arguments[G__100408__i + 0]; ++G__100408__i;}
  ___36014__auto__ = new cljs.core.IndexedSeq(G__100408__a,0,null);
} 
return G__100407__delegate.call(this,___36014__auto__);};
G__100407.cljs$lang$maxFixedArity = 0;
G__100407.cljs$lang$applyTo = (function (arglist__100409){
var ___36014__auto__ = cljs.core.seq(arglist__100409);
return G__100407__delegate(___36014__auto__);
});
G__100407.cljs$core$IFn$_invoke$arity$variadic = G__100407__delegate;
return G__100407;
})()
),(function (___31809__auto____$5){
return promesa.protocols._promise(promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._bind(null,(function (___31810__auto____$1){
return promesa.protocols._bind(cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["copies objects"], 0)),(function (___31809__auto____$6){
return promesa.protocols._bind(repl_tooling.integration.fake_editor.type_and_eval("(Object.)"),(function (___31809__auto____$7){
return promesa.protocols._bind(repl_tooling.integration.fake_editor.change_result_p(),(function (___31809__auto____$8){
return promesa.protocols._bind(repl_tooling.integration.rendered_actions.click_clipboard((0)),(function (___31809__auto____$9){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(check.async.to_promise(cljs.core.deref(repl_tooling.integration.rendered_actions.clipboard)),(function (left_99973){
return promesa.protocols._bind(check.async.to_promise(/#object.*java\.lang\.Object/),(function (right_99974){
return promesa.protocols._bind(null,(function (___31810__auto____$2){
return promesa.protocols._bind(cljs.test.do_report(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var lft__35783__auto__ = left_99973;
var rgt__35784__auto__ = right_99974;
var qleft__35785__auto__ = new cljs.core.Symbol(null,"left-99973","left-99973",-456213987,null);
var qright__35786__auto__ = new cljs.core.Symbol(null,"right-99974","right-99974",819775636,null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})(),new cljs.core.Keyword(null,"expected","expected",1583670997),/#object.*java\.lang\.Object/)),(function (___31809__auto____$10){
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
var G__100414__delegate = function (___36014__auto__){
return cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
};
var G__100414 = function (var_args){
var ___36014__auto__ = null;
if (arguments.length > 0) {
var G__100415__i = 0, G__100415__a = new Array(arguments.length -  0);
while (G__100415__i < G__100415__a.length) {G__100415__a[G__100415__i] = arguments[G__100415__i + 0]; ++G__100415__i;}
  ___36014__auto__ = new cljs.core.IndexedSeq(G__100415__a,0,null);
} 
return G__100414__delegate.call(this,___36014__auto__);};
G__100414.cljs$lang$maxFixedArity = 0;
G__100414.cljs$lang$applyTo = (function (arglist__100416){
var ___36014__auto__ = cljs.core.seq(arglist__100416);
return G__100414__delegate(___36014__auto__);
});
G__100414.cljs$core$IFn$_invoke$arity$variadic = G__100414__delegate;
return G__100414;
})()
));
}));
}));
}));
}));
}));
}));
})));
})], 0)),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));

repl_tooling.integration.rendered_actions.copy_to_clipboard = (function repl_tooling$integration$rendered_actions$copy_to_clipboard(){
return cljs.test.test_var(repl_tooling.integration.rendered_actions.copy_to_clipboard.cljs$lang$var);
});
repl_tooling.integration.rendered_actions.copy_to_clipboard.cljs$lang$test = (function (){
return check.async.async_test_STAR_("actions that can be made after rendering a result",(2000),(function (){
return repl_tooling.integration.fake_editor.disconnect_BANG_();
}),promesa.protocols._bind(null,(function (___31810__auto__){
return promesa.protocols._bind(repl_tooling.integration.fake_editor.connect_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-copy","on-copy",-227435882),(function (p1__99879_SHARP_){
return promesa.core.resolve_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(repl_tooling.integration.rendered_actions.clipboard),p1__99879_SHARP_);
})], null)),(function (___31809__auto__){
return promesa.protocols._bind(promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._bind(null,(function (___31810__auto____$1){
return promesa.protocols._bind(cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["copies tagged literals to clipboard"], 0)),(function (___31809__auto____$1){
return promesa.protocols._bind(repl_tooling.integration.fake_editor.type_and_eval("(tagged-literal 'foo [1 2])"),(function (___31809__auto____$2){
return promesa.protocols._bind(repl_tooling.integration.fake_editor.change_result_p(),(function (___31809__auto____$3){
return promesa.protocols._bind(repl_tooling.integration.rendered_actions.click_clipboard((0)),(function (___31809__auto____$4){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(check.async.to_promise(cljs.core.deref(repl_tooling.integration.rendered_actions.clipboard)),(function (left_100014){
return promesa.protocols._bind(check.async.to_promise("#foo [1 2]"),(function (right_100015){
return promesa.protocols._bind(null,(function (___31810__auto____$2){
return promesa.protocols._bind(cljs.test.do_report(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var lft__35783__auto__ = left_100014;
var rgt__35784__auto__ = right_100015;
var qleft__35785__auto__ = new cljs.core.Symbol(null,"left-100014","left-100014",1872873384,null);
var qright__35786__auto__ = new cljs.core.Symbol(null,"right-100015","right-100015",-1101580027,null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})(),new cljs.core.Keyword(null,"expected","expected",1583670997),"#foo [1 2]")),(function (___31809__auto____$5){
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
var G__100436__delegate = function (___36014__auto__){
return cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
};
var G__100436 = function (var_args){
var ___36014__auto__ = null;
if (arguments.length > 0) {
var G__100437__i = 0, G__100437__a = new Array(arguments.length -  0);
while (G__100437__i < G__100437__a.length) {G__100437__a[G__100437__i] = arguments[G__100437__i + 0]; ++G__100437__i;}
  ___36014__auto__ = new cljs.core.IndexedSeq(G__100437__a,0,null);
} 
return G__100436__delegate.call(this,___36014__auto__);};
G__100436.cljs$lang$maxFixedArity = 0;
G__100436.cljs$lang$applyTo = (function (arglist__100438){
var ___36014__auto__ = cljs.core.seq(arglist__100438);
return G__100436__delegate(___36014__auto__);
});
G__100436.cljs$core$IFn$_invoke$arity$variadic = G__100436__delegate;
return G__100436;
})()
),(function (___31809__auto____$1){
return promesa.protocols._bind(promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._bind(null,(function (___31810__auto____$1){
return promesa.protocols._bind(cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["copy only first line"], 0)),(function (___31809__auto____$2){
return promesa.protocols._bind(repl_tooling.integration.rendered_actions.click_chevron((0)),(function (___31809__auto____$3){
return promesa.protocols._bind(repl_tooling.integration.rendered_actions.click_clipboard((0)),(function (___31809__auto____$4){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(check.async.to_promise(cljs.core.deref(repl_tooling.integration.rendered_actions.clipboard)),(function (left_100252){
return promesa.protocols._bind(check.async.to_promise("#foo [1 2]"),(function (right_100253){
return promesa.protocols._bind(null,(function (___31810__auto____$2){
return promesa.protocols._bind(cljs.test.do_report(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var lft__35783__auto__ = left_100252;
var rgt__35784__auto__ = right_100253;
var qleft__35785__auto__ = new cljs.core.Symbol(null,"left-100252","left-100252",1273929207,null);
var qright__35786__auto__ = new cljs.core.Symbol(null,"right-100253","right-100253",234554227,null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})(),new cljs.core.Keyword(null,"expected","expected",1583670997),"#foo [1 2]")),(function (___31809__auto____$5){
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
var G__100439__delegate = function (___36014__auto__){
return cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
};
var G__100439 = function (var_args){
var ___36014__auto__ = null;
if (arguments.length > 0) {
var G__100440__i = 0, G__100440__a = new Array(arguments.length -  0);
while (G__100440__i < G__100440__a.length) {G__100440__a[G__100440__i] = arguments[G__100440__i + 0]; ++G__100440__i;}
  ___36014__auto__ = new cljs.core.IndexedSeq(G__100440__a,0,null);
} 
return G__100439__delegate.call(this,___36014__auto__);};
G__100439.cljs$lang$maxFixedArity = 0;
G__100439.cljs$lang$applyTo = (function (arglist__100441){
var ___36014__auto__ = cljs.core.seq(arglist__100441);
return G__100439__delegate(___36014__auto__);
});
G__100439.cljs$core$IFn$_invoke$arity$variadic = G__100439__delegate;
return G__100439;
})()
),(function (___31809__auto____$2){
return promesa.protocols._bind(promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._bind(null,(function (___31810__auto____$1){
return promesa.protocols._bind(cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["copies colls"], 0)),(function (___31809__auto____$3){
return promesa.protocols._bind(repl_tooling.integration.rendered_actions.click_clipboard((1)),(function (___31809__auto____$4){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(check.async.to_promise(cljs.core.deref(repl_tooling.integration.rendered_actions.clipboard)),(function (left_100265){
return promesa.protocols._bind(check.async.to_promise("[1 2]"),(function (right_100266){
return promesa.protocols._bind(null,(function (___31810__auto____$2){
return promesa.protocols._bind(cljs.test.do_report(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var lft__35783__auto__ = left_100265;
var rgt__35784__auto__ = right_100266;
var qleft__35785__auto__ = new cljs.core.Symbol(null,"left-100265","left-100265",1375146725,null);
var qright__35786__auto__ = new cljs.core.Symbol(null,"right-100266","right-100266",1704526056,null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})(),new cljs.core.Keyword(null,"expected","expected",1583670997),"[1 2]")),(function (___31809__auto____$5){
return promesa.protocols._promise(new cljs.core.Keyword(null,"done","done",-889844188));
}));
}));
}));
}));
})));
}));
}));
})),(function() { 
var G__100446__delegate = function (___36014__auto__){
return cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
};
var G__100446 = function (var_args){
var ___36014__auto__ = null;
if (arguments.length > 0) {
var G__100447__i = 0, G__100447__a = new Array(arguments.length -  0);
while (G__100447__i < G__100447__a.length) {G__100447__a[G__100447__i] = arguments[G__100447__i + 0]; ++G__100447__i;}
  ___36014__auto__ = new cljs.core.IndexedSeq(G__100447__a,0,null);
} 
return G__100446__delegate.call(this,___36014__auto__);};
G__100446.cljs$lang$maxFixedArity = 0;
G__100446.cljs$lang$applyTo = (function (arglist__100448){
var ___36014__auto__ = cljs.core.seq(arglist__100448);
return G__100446__delegate(___36014__auto__);
});
G__100446.cljs$core$IFn$_invoke$arity$variadic = G__100446__delegate;
return G__100446;
})()
),(function (___31809__auto____$3){
return promesa.protocols._bind(promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._bind(null,(function (___31810__auto____$1){
return promesa.protocols._bind(cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["copies leafs"], 0)),(function (___31809__auto____$4){
return promesa.protocols._bind(repl_tooling.integration.rendered_actions.click_chevron((1)),(function (___31809__auto____$5){
return promesa.protocols._bind(repl_tooling.integration.rendered_actions.click_clipboard((2)),(function (___31809__auto____$6){
return promesa.protocols._bind(promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(check.async.to_promise(cljs.core.deref(repl_tooling.integration.rendered_actions.clipboard)),(function (left_100273){
return promesa.protocols._bind(check.async.to_promise("1"),(function (right_100274){
return promesa.protocols._bind(null,(function (___31810__auto____$2){
return promesa.protocols._bind(cljs.test.do_report(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var lft__35783__auto__ = left_100273;
var rgt__35784__auto__ = right_100274;
var qleft__35785__auto__ = new cljs.core.Symbol(null,"left-100273","left-100273",-817110696,null);
var qright__35786__auto__ = new cljs.core.Symbol(null,"right-100274","right-100274",74993024,null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})(),new cljs.core.Keyword(null,"expected","expected",1583670997),"1")),(function (___31809__auto____$7){
return promesa.protocols._promise(new cljs.core.Keyword(null,"done","done",-889844188));
}));
}));
}));
}));
})),(function (___31809__auto____$7){
return promesa.protocols._bind(repl_tooling.integration.rendered_actions.click_clipboard((3)),(function (___31809__auto____$8){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(check.async.to_promise(cljs.core.deref(repl_tooling.integration.rendered_actions.clipboard)),(function (left_100312){
return promesa.protocols._bind(check.async.to_promise("2"),(function (right_100313){
return promesa.protocols._bind(null,(function (___31810__auto____$2){
return promesa.protocols._bind(cljs.test.do_report(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var lft__35783__auto__ = left_100312;
var rgt__35784__auto__ = right_100313;
var qleft__35785__auto__ = new cljs.core.Symbol(null,"left-100312","left-100312",-1504221711,null);
var qright__35786__auto__ = new cljs.core.Symbol(null,"right-100313","right-100313",382460858,null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})(),new cljs.core.Keyword(null,"expected","expected",1583670997),"2")),(function (___31809__auto____$9){
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
var G__100455__delegate = function (___36014__auto__){
return cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
};
var G__100455 = function (var_args){
var ___36014__auto__ = null;
if (arguments.length > 0) {
var G__100457__i = 0, G__100457__a = new Array(arguments.length -  0);
while (G__100457__i < G__100457__a.length) {G__100457__a[G__100457__i] = arguments[G__100457__i + 0]; ++G__100457__i;}
  ___36014__auto__ = new cljs.core.IndexedSeq(G__100457__a,0,null);
} 
return G__100455__delegate.call(this,___36014__auto__);};
G__100455.cljs$lang$maxFixedArity = 0;
G__100455.cljs$lang$applyTo = (function (arglist__100458){
var ___36014__auto__ = cljs.core.seq(arglist__100458);
return G__100455__delegate(___36014__auto__);
});
G__100455.cljs$core$IFn$_invoke$arity$variadic = G__100455__delegate;
return G__100455;
})()
),(function (___31809__auto____$4){
return promesa.protocols._bind(promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._bind(null,(function (___31810__auto____$1){
return promesa.protocols._bind(cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["copies incomplete string"], 0)),(function (___31809__auto____$5){
return promesa.protocols._bind(repl_tooling.integration.fake_editor.type_and_eval("(str (range 80))"),(function (___31809__auto____$6){
return promesa.protocols._bind(repl_tooling.integration.fake_editor.change_result_p(),(function (___31809__auto____$7){
return promesa.protocols._bind(repl_tooling.integration.rendered_actions.click_clipboard((0)),(function (___31809__auto____$8){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(check.async.to_promise(cljs.core.deref(repl_tooling.integration.rendered_actions.clipboard)),(function (left_100324){
return promesa.protocols._bind(check.async.to_promise(/28 29/),(function (right_100325){
return promesa.protocols._bind(null,(function (___31810__auto____$2){
return promesa.protocols._bind(cljs.test.do_report(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var lft__35783__auto__ = left_100324;
var rgt__35784__auto__ = right_100325;
var qleft__35785__auto__ = new cljs.core.Symbol(null,"left-100324","left-100324",344839052,null);
var qright__35786__auto__ = new cljs.core.Symbol(null,"right-100325","right-100325",-519028671,null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})(),new cljs.core.Keyword(null,"expected","expected",1583670997),/28 29/)),(function (___31809__auto____$9){
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
var G__100461__delegate = function (___36014__auto__){
return cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
};
var G__100461 = function (var_args){
var ___36014__auto__ = null;
if (arguments.length > 0) {
var G__100462__i = 0, G__100462__a = new Array(arguments.length -  0);
while (G__100462__i < G__100462__a.length) {G__100462__a[G__100462__i] = arguments[G__100462__i + 0]; ++G__100462__i;}
  ___36014__auto__ = new cljs.core.IndexedSeq(G__100462__a,0,null);
} 
return G__100461__delegate.call(this,___36014__auto__);};
G__100461.cljs$lang$maxFixedArity = 0;
G__100461.cljs$lang$applyTo = (function (arglist__100463){
var ___36014__auto__ = cljs.core.seq(arglist__100463);
return G__100461__delegate(___36014__auto__);
});
G__100461.cljs$core$IFn$_invoke$arity$variadic = G__100461__delegate;
return G__100461;
})()
),(function (___31809__auto____$5){
return promesa.protocols._promise(promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._bind(null,(function (___31810__auto____$1){
return promesa.protocols._bind(cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["copies objects"], 0)),(function (___31809__auto____$6){
return promesa.protocols._bind(repl_tooling.integration.fake_editor.type_and_eval("(Object.)"),(function (___31809__auto____$7){
return promesa.protocols._bind(repl_tooling.integration.fake_editor.change_result_p(),(function (___31809__auto____$8){
return promesa.protocols._bind(repl_tooling.integration.rendered_actions.click_clipboard((0)),(function (___31809__auto____$9){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(check.async.to_promise(cljs.core.deref(repl_tooling.integration.rendered_actions.clipboard)),(function (left_100336){
return promesa.protocols._bind(check.async.to_promise(/#object.*java\.lang\.Object/),(function (right_100337){
return promesa.protocols._bind(null,(function (___31810__auto____$2){
return promesa.protocols._bind(cljs.test.do_report(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var lft__35783__auto__ = left_100336;
var rgt__35784__auto__ = right_100337;
var qleft__35785__auto__ = new cljs.core.Symbol(null,"left-100336","left-100336",-2056413169,null);
var qright__35786__auto__ = new cljs.core.Symbol(null,"right-100337","right-100337",568265521,null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})(),new cljs.core.Keyword(null,"expected","expected",1583670997),/#object.*java\.lang\.Object/)),(function (___31809__auto____$10){
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
var G__100466__delegate = function (___36014__auto__){
return cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
};
var G__100466 = function (var_args){
var ___36014__auto__ = null;
if (arguments.length > 0) {
var G__100467__i = 0, G__100467__a = new Array(arguments.length -  0);
while (G__100467__i < G__100467__a.length) {G__100467__a[G__100467__i] = arguments[G__100467__i + 0]; ++G__100467__i;}
  ___36014__auto__ = new cljs.core.IndexedSeq(G__100467__a,0,null);
} 
return G__100466__delegate.call(this,___36014__auto__);};
G__100466.cljs$lang$maxFixedArity = 0;
G__100466.cljs$lang$applyTo = (function (arglist__100468){
var ___36014__auto__ = cljs.core.seq(arglist__100468);
return G__100466__delegate(___36014__auto__);
});
G__100466.cljs$core$IFn$_invoke$arity$variadic = G__100466__delegate;
return G__100466;
})()
));
}));
}));
}));
}));
}));
}));
})));
});

(repl_tooling.integration.rendered_actions.copy_to_clipboard.cljs$lang$var = new cljs.core.Var(function(){return repl_tooling.integration.rendered_actions.copy_to_clipboard;},new cljs.core.Symbol("repl-tooling.integration.rendered-actions","copy-to-clipboard","repl-tooling.integration.rendered-actions/copy-to-clipboard",-1057862427,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"repl-tooling.integration.rendered-actions","repl-tooling.integration.rendered-actions",1051697547,null),new cljs.core.Symbol(null,"copy-to-clipboard","copy-to-clipboard",265057380,null),"repl_tooling/integration/rendered_actions.cljs",33,1,30,30,cljs.core.List.EMPTY,null,(cljs.core.truth_(repl_tooling.integration.rendered_actions.copy_to_clipboard)?repl_tooling.integration.rendered_actions.copy_to_clipboard.cljs$lang$test:null)])));

//# sourceMappingURL=repl_tooling.integration.rendered_actions.js.map
