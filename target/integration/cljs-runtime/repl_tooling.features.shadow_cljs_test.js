goog.provide('repl_tooling.features.shadow_cljs_test');
repl_tooling.features.shadow_cljs_test.port = (new cljs.core.Delay((function (){
return parseInt(cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.js.shim.module$fs.readFileSync(".shadow-cljs/http.port")));
}),null));
repl_tooling.features.shadow_cljs_test.token = (new cljs.core.Delay((function (){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.js.shim.module$fs.readFileSync(".shadow-cljs/server.token"));
}),null));
repl_tooling.features.shadow_cljs_test.connect_BANG_ = (function repl_tooling$features$shadow_cljs_test$connect_BANG_(){
return promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY),(function (output){
return promesa.protocols._bind(repl_tooling.repl_client.shadow_ws.connect_BANG_(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"shadow","shadow",873231803),new cljs.core.Keyword(null,"build-id","build-id",1642831089),new cljs.core.Keyword(null,"fixture","fixture",1595630169),new cljs.core.Keyword(null,"host","host",-1558485167),"localhost",new cljs.core.Keyword(null,"port","port",1534937262),cljs.core.deref(repl_tooling.features.shadow_cljs_test.port),new cljs.core.Keyword(null,"token","token",-1211463215),cljs.core.deref(repl_tooling.features.shadow_cljs_test.token),new cljs.core.Keyword(null,"on-output","on-output",-2023300495),(function (p1__84685_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(output,cljs.core.conj,p1__84685_SHARP_);
})], null)),(function (repl){
return promesa.protocols._bind(null,(function (___31810__auto__){
return promesa.protocols._promise(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [repl,output], null));
}));
}));
}));
}));
});
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"repl_tooling.features.shadow_cljs_test","repl_tooling.features.shadow_cljs_test",1488772503),new cljs.core.Keyword(null,"shadow-cljs-websocket","shadow-cljs-websocket",-1032449396)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"shadow-cljs-websocket",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){
if((typeof repl_tooling !== 'undefined') && (typeof repl_tooling.features !== 'undefined') && (typeof repl_tooling.features.shadow_cljs_test !== 'undefined') && (typeof repl_tooling.features.shadow_cljs_test.t_repl_tooling$features$shadow_cljs_test84697 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
repl_tooling.features.shadow_cljs_test.t_repl_tooling$features$shadow_cljs_test84697 = (function (meta84698){
this.meta84698 = meta84698;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(repl_tooling.features.shadow_cljs_test.t_repl_tooling$features$shadow_cljs_test84697.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_84699,meta84698__$1){
var self__ = this;
var _84699__$1 = this;
return (new repl_tooling.features.shadow_cljs_test.t_repl_tooling$features$shadow_cljs_test84697(meta84698__$1));
}));

(repl_tooling.features.shadow_cljs_test.t_repl_tooling$features$shadow_cljs_test84697.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_84699){
var self__ = this;
var _84699__$1 = this;
return self__.meta84698;
}));

(repl_tooling.features.shadow_cljs_test.t_repl_tooling$features$shadow_cljs_test84697.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(repl_tooling.features.shadow_cljs_test.t_repl_tooling$features$shadow_cljs_test84697.prototype.call = (function (self__,done__84400__auto__){
var self__ = this;
var self____$1 = this;
var ___9200__auto__ = self____$1;
return promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.core.race(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [promesa.protocols._bind(null,(function (___31810__auto__){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(repl_tooling.features.shadow_cljs_test.connect_BANG_(),(function (p__84777){
var vec__84778 = p__84777;
var repl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84778,(0),null);
var outputs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84778,(1),null);
return promesa.protocols._bind(null,(function (___31810__auto____$1){
return promesa.protocols._promise((function (){
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["connecting to Shadow"], 0));

try{return promesa.protocols._bind(null,(function (___31810__auto____$2){
return promesa.protocols._bind(promesa.core.delay.cljs$core$IFn$_invoke$arity$1((100)),(function (___31809__auto__){
return promesa.protocols._bind((function (){
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["evaluating results"], 0));

try{return promesa.protocols._bind(null,(function (___31810__auto____$3){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto____$1){
return promesa.protocols._bind(repl_tooling.eval.eval.cljs$core$IFn$_invoke$arity$2(repl,"(+ 1 2)"),(function (res){
return promesa.protocols._bind(null,(function (___31810__auto____$4){
return promesa.protocols._promise((function (){try{return cljs.test.do_report((function (){var lft__35783__auto__ = res;
var rgt__35784__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),(3),new cljs.core.Keyword(null,"as-text","as-text",-449861067),"3",new cljs.core.Keyword(null,"parsed?","parsed?",44224124),true], null);
var qleft__35785__auto__ = new cljs.core.Symbol(null,"res","res",245523648,null);
var qright__35786__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),(3),new cljs.core.Keyword(null,"as-text","as-text",-449861067),"3",new cljs.core.Keyword(null,"parsed?","parsed?",44224124),true], null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})());
}catch (e84785){var t__35810__auto__ = e84785;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),(3),new cljs.core.Keyword(null,"as-text","as-text",-449861067),"3",new cljs.core.Keyword(null,"parsed?","parsed?",44224124),true], null),new cljs.core.Keyword(null,"actual","actual",107306363),check.core.normalize_error(t__35810__auto__),new cljs.core.Keyword(null,"message","message",-406056002),["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"res","res",245523648,null))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"=>","=>",-813269641,null))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),(3),new cljs.core.Keyword(null,"as-text","as-text",-449861067),"3",new cljs.core.Keyword(null,"parsed?","parsed?",44224124),true], null))].join('')], null));
}})());
}));
}));
})));
}));
}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}})()
,(function (___31809__auto____$1){
return promesa.protocols._bind((function (){
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["evaluating to errors"], 0));

try{return promesa.protocols._bind(null,(function (___31810__auto____$3){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto____$1){
return promesa.protocols._bind(promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(repl_tooling.eval.eval.cljs$core$IFn$_invoke$arity$2(repl,"(throw (ex-info :foo {}))"),(function (error){
return error;
})),(function (res){
return promesa.protocols._bind(null,(function (___31810__auto____$4){
return promesa.protocols._promise((function (){try{return cljs.test.do_report((function (){var lft__35783__auto__ = res;
var rgt__35784__auto__ = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.map_QMARK_,new cljs.core.Keyword(null,"as-text","as-text",-449861067),/#error.*:foo/], null);
var qleft__35785__auto__ = new cljs.core.Symbol(null,"res","res",245523648,null);
var qright__35786__auto__ = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Keyword(null,"as-text","as-text",-449861067),/#error.*:foo/], null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})());
}catch (e84786){var t__35810__auto__ = e84786;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.map_QMARK_,new cljs.core.Keyword(null,"as-text","as-text",-449861067),/#error.*:foo/], null),new cljs.core.Keyword(null,"actual","actual",107306363),check.core.normalize_error(t__35810__auto__),new cljs.core.Keyword(null,"message","message",-406056002),["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"res","res",245523648,null))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"=>","=>",-813269641,null))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Keyword(null,"as-text","as-text",-449861067),/#error.*:foo/], null))].join('')], null));
}})());
}));
}));
})));
}));
}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}})()
,(function (___31809__auto____$2){
return promesa.protocols._bind((function (){
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["evaluating syntax errors"], 0));

try{return promesa.protocols._bind(null,(function (___31810__auto____$3){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto____$1){
return promesa.protocols._bind(promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(repl_tooling.eval.eval.cljs$core$IFn$_invoke$arity$2(repl,"(prn nonexistent-var)"),(function (error){
return error;
})),(function (res){
return promesa.protocols._bind(null,(function (___31810__auto____$4){
return promesa.protocols._promise((function (){try{return cljs.test.do_report((function (){var lft__35783__auto__ = res;
var rgt__35784__auto__ = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.map_QMARK_,new cljs.core.Keyword(null,"as-text","as-text",-449861067),/nonexistent-var/], null);
var qleft__35785__auto__ = new cljs.core.Symbol(null,"res","res",245523648,null);
var qright__35786__auto__ = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Keyword(null,"as-text","as-text",-449861067),/nonexistent-var/], null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})());
}catch (e84787){var t__35810__auto__ = e84787;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.map_QMARK_,new cljs.core.Keyword(null,"as-text","as-text",-449861067),/nonexistent-var/], null),new cljs.core.Keyword(null,"actual","actual",107306363),check.core.normalize_error(t__35810__auto__),new cljs.core.Keyword(null,"message","message",-406056002),["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"res","res",245523648,null))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"=>","=>",-813269641,null))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Keyword(null,"as-text","as-text",-449861067),/nonexistent-var/], null))].join('')], null));
}})());
}));
}));
})));
}));
}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}})()
,(function (___31809__auto____$3){
return promesa.protocols._bind((function (){
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["evaluating compile errors"], 0));

try{return promesa.protocols._bind(null,(function (___31810__auto____$3){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto____$1){
return promesa.protocols._bind(promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(repl_tooling.eval.eval.cljs$core$IFn$_invoke$arity$2(repl,"(nil 10)"),(function (error){
return error;
})),(function (res){
return promesa.protocols._bind(null,(function (___31810__auto____$4){
return promesa.protocols._promise((function (){try{return cljs.test.do_report((function (){var lft__35783__auto__ = res;
var rgt__35784__auto__ = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.map_QMARK_,new cljs.core.Keyword(null,"as-text","as-text",-449861067),/Can't call nil/], null);
var qleft__35785__auto__ = new cljs.core.Symbol(null,"res","res",245523648,null);
var qright__35786__auto__ = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Keyword(null,"as-text","as-text",-449861067),/Can't call nil/], null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})());
}catch (e84827){var t__35810__auto__ = e84827;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.map_QMARK_,new cljs.core.Keyword(null,"as-text","as-text",-449861067),/Can't call nil/], null),new cljs.core.Keyword(null,"actual","actual",107306363),check.core.normalize_error(t__35810__auto__),new cljs.core.Keyword(null,"message","message",-406056002),["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"res","res",245523648,null))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"=>","=>",-813269641,null))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Keyword(null,"as-text","as-text",-449861067),/Can't call nil/], null))].join('')], null));
}})());
}));
}));
})));
}));
}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}})()
,(function (___31809__auto____$4){
return promesa.protocols._bind((function (){
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["evaluating print commands"], 0));

try{return promesa.protocols._bind(null,(function (___31810__auto____$3){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto____$1){
return promesa.protocols._bind(repl_tooling.eval.eval.cljs$core$IFn$_invoke$arity$2(repl,"(pr :SOME-TEXT)"),(function (res){
return promesa.protocols._bind(null,(function (___31810__auto____$4){
return promesa.protocols._bind((function (){try{return cljs.test.do_report((function (){var lft__35783__auto__ = res;
var rgt__35784__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",1415092211),null], null);
var qleft__35785__auto__ = new cljs.core.Symbol(null,"res","res",245523648,null);
var qright__35786__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",1415092211),null], null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})());
}catch (e84840){var t__35810__auto__ = e84840;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",1415092211),null], null),new cljs.core.Keyword(null,"actual","actual",107306363),check.core.normalize_error(t__35810__auto__),new cljs.core.Keyword(null,"message","message",-406056002),["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"res","res",245523648,null))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"=>","=>",-813269641,null))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",1415092211),null], null))].join('')], null));
}})(),(function (___31809__auto____$5){
return promesa.protocols._promise((function (){try{return cljs.test.do_report((function (){var lft__35783__auto__ = cljs.core.deref(outputs);
var rgt__35784__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"out","out",-910545517),":SOME-TEXT"], null)], null);
var qleft__35785__auto__ = cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"outputs","outputs",-255981507,null));
var qright__35786__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"out","out",-910545517),":SOME-TEXT"], null)], null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})());
}catch (e84843){var t__35810__auto__ = e84843;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"out","out",-910545517),":SOME-TEXT"], null)], null),new cljs.core.Keyword(null,"actual","actual",107306363),check.core.normalize_error(t__35810__auto__),new cljs.core.Keyword(null,"message","message",-406056002),["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"outputs","outputs",-255981507,null)))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"=>","=>",-813269641,null))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"out","out",-910545517),":SOME-TEXT"], null)], null))].join('')], null));
}})());
}));
}));
}));
})));
}));
}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}})()
,(function (___31809__auto____$5){
return promesa.protocols._promise((function (){
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["evaluating custom shadow-cljs commands"], 0));

try{return promesa.protocols._bind(null,(function (___31810__auto____$3){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto____$1){
return promesa.protocols._bind(repl_tooling.eval.eval.cljs$core$IFn$_invoke$arity$3(repl,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(1),null], null), null)], null)], 0)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"shadow-command","shadow-command",1389461500),true], null)),(function (res){
return promesa.protocols._bind(null,(function (___31810__auto____$4){
return promesa.protocols._promise((function (){try{return cljs.test.do_report((function (){var lft__35783__auto__ = res;
var rgt__35784__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.set_QMARK_,new cljs.core.Keyword(null,"from","from",1815293044),(1),new cljs.core.Keyword(null,"call-id","call-id",1043012968),cljs.core.any_QMARK_], null)], null);
var qleft__35785__auto__ = new cljs.core.Symbol(null,"res","res",245523648,null);
var qright__35786__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.Symbol(null,"set?","set?",1636014792,null),new cljs.core.Keyword(null,"from","from",1815293044),(1),new cljs.core.Keyword(null,"call-id","call-id",1043012968),new cljs.core.Symbol(null,"any?","any?",-318999933,null)], null)], null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})());
}catch (e84855){var t__35810__auto__ = e84855;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.set_QMARK_,new cljs.core.Keyword(null,"from","from",1815293044),(1),new cljs.core.Keyword(null,"call-id","call-id",1043012968),cljs.core.any_QMARK_], null)], null),new cljs.core.Keyword(null,"actual","actual",107306363),check.core.normalize_error(t__35810__auto__),new cljs.core.Keyword(null,"message","message",-406056002),["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"res","res",245523648,null))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"=>","=>",-813269641,null))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.Symbol(null,"set?","set?",1636014792,null),new cljs.core.Keyword(null,"from","from",1815293044),(1),new cljs.core.Keyword(null,"call-id","call-id",1043012968),new cljs.core.Symbol(null,"any?","any?",-318999933,null)], null)], null))].join('')], null));
}})());
}));
}));
})));
}));
}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}})()
);
}));
}));
}));
}));
}));
}));
}));
}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}})()
);
}));
}));
})));
})),promesa.core.delay.cljs$core$IFn$_invoke$arity$2((3000),new cljs.core.Keyword(null,"--TIMEOUT-84696","--TIMEOUT-84696",154580792))], null)),(function (res__84401__auto__,err__84402__auto__){
repl_tooling.integrations.repls.disconnect_BANG_(new cljs.core.Keyword(null,"shadow","shadow",873231803));

if(cljs.core.truth_(err__84402__auto__)){
try{var values__9152__auto___87342 = (new cljs.core.List(null,cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Error on test result",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),err__84402__auto__], null)),null,(1),null));
var result__9153__auto___87343 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.not,values__9152__auto___87342);
if(cljs.core.truth_(result__9153__auto___87343)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"pass","pass",1574159993),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","not","clojure.core/not",2621194,null),cljs.core.list(new cljs.core.Symbol("clojure.core","ex-info","clojure.core/ex-info",-504237117,null),"Error on test result",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Symbol(null,"err__84402__auto__","err__84402__auto__",-1561524708,null)], null))),null,cljs.core.cons(new cljs.core.Symbol("clojure.core","not","clojure.core/not",2621194,null),values__9152__auto___87342),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"fail","fail",1706214930),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","not","clojure.core/not",2621194,null),cljs.core.list(new cljs.core.Symbol("clojure.core","ex-info","clojure.core/ex-info",-504237117,null),"Error on test result",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Symbol(null,"err__84402__auto__","err__84402__auto__",-1561524708,null)], null))),null,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol("clojure.core","not","clojure.core/not",2621194,null),values__9152__auto___87342),null,(1),null)),(2),null)),null]));
}

}catch (e84901){var t__9189__auto___87346 = e84901;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","not","clojure.core/not",2621194,null),cljs.core.list(new cljs.core.Symbol("clojure.core","ex-info","clojure.core/ex-info",-504237117,null),"Error on test result",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Symbol(null,"err__84402__auto__","err__84402__auto__",-1561524708,null)], null))),null,t__9189__auto___87346,null]));
}} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(res__84401__auto__,new cljs.core.Keyword(null,"--TIMEOUT-84696","--TIMEOUT-84696",154580792))){
try{var values__9152__auto___87348 = (new cljs.core.List(null,cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Async error - not finalized",cljs.core.PersistentArrayMap.EMPTY),null,(1),null));
var result__9153__auto___87349 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.not,values__9152__auto___87348);
if(cljs.core.truth_(result__9153__auto___87349)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"pass","pass",1574159993),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","not","clojure.core/not",2621194,null),cljs.core.list(new cljs.core.Symbol("clojure.core","ex-info","clojure.core/ex-info",-504237117,null),"Async error - not finalized",cljs.core.PersistentArrayMap.EMPTY)),null,cljs.core.cons(new cljs.core.Symbol("clojure.core","not","clojure.core/not",2621194,null),values__9152__auto___87348),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"fail","fail",1706214930),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","not","clojure.core/not",2621194,null),cljs.core.list(new cljs.core.Symbol("clojure.core","ex-info","clojure.core/ex-info",-504237117,null),"Async error - not finalized",cljs.core.PersistentArrayMap.EMPTY)),null,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol("clojure.core","not","clojure.core/not",2621194,null),values__9152__auto___87348),null,(1),null)),(2),null)),null]));
}

}catch (e84910){var t__9189__auto___87351 = e84910;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","not","clojure.core/not",2621194,null),cljs.core.list(new cljs.core.Symbol("clojure.core","ex-info","clojure.core/ex-info",-504237117,null),"Async error - not finalized",cljs.core.PersistentArrayMap.EMPTY)),null,t__9189__auto___87351,null]));
}} else {
}
}

return (done__84400__auto__.cljs$core$IFn$_invoke$arity$0 ? done__84400__auto__.cljs$core$IFn$_invoke$arity$0() : done__84400__auto__.call(null));
}));
}));

(repl_tooling.features.shadow_cljs_test.t_repl_tooling$features$shadow_cljs_test84697.prototype.apply = (function (self__,args84762){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args84762)));
}));

(repl_tooling.features.shadow_cljs_test.t_repl_tooling$features$shadow_cljs_test84697.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done__84400__auto__){
var self__ = this;
var ___9200__auto__ = this;
return promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.core.race(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [promesa.protocols._bind(null,(function (___31810__auto__){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(repl_tooling.features.shadow_cljs_test.connect_BANG_(),(function (p__84918){
var vec__84919 = p__84918;
var repl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84919,(0),null);
var outputs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84919,(1),null);
return promesa.protocols._bind(null,(function (___31810__auto____$1){
return promesa.protocols._promise((function (){
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["connecting to Shadow"], 0));

try{return promesa.protocols._bind(null,(function (___31810__auto____$2){
return promesa.protocols._bind(promesa.core.delay.cljs$core$IFn$_invoke$arity$1((100)),(function (___31809__auto__){
return promesa.protocols._bind((function (){
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["evaluating results"], 0));

try{return promesa.protocols._bind(null,(function (___31810__auto____$3){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto____$1){
return promesa.protocols._bind(repl_tooling.eval.eval.cljs$core$IFn$_invoke$arity$2(repl,"(+ 1 2)"),(function (res){
return promesa.protocols._bind(null,(function (___31810__auto____$4){
return promesa.protocols._promise((function (){try{return cljs.test.do_report((function (){var lft__35783__auto__ = res;
var rgt__35784__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),(3),new cljs.core.Keyword(null,"as-text","as-text",-449861067),"3",new cljs.core.Keyword(null,"parsed?","parsed?",44224124),true], null);
var qleft__35785__auto__ = new cljs.core.Symbol(null,"res","res",245523648,null);
var qright__35786__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),(3),new cljs.core.Keyword(null,"as-text","as-text",-449861067),"3",new cljs.core.Keyword(null,"parsed?","parsed?",44224124),true], null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})());
}catch (e84930){var t__35810__auto__ = e84930;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),(3),new cljs.core.Keyword(null,"as-text","as-text",-449861067),"3",new cljs.core.Keyword(null,"parsed?","parsed?",44224124),true], null),new cljs.core.Keyword(null,"actual","actual",107306363),check.core.normalize_error(t__35810__auto__),new cljs.core.Keyword(null,"message","message",-406056002),["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"res","res",245523648,null))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"=>","=>",-813269641,null))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),(3),new cljs.core.Keyword(null,"as-text","as-text",-449861067),"3",new cljs.core.Keyword(null,"parsed?","parsed?",44224124),true], null))].join('')], null));
}})());
}));
}));
})));
}));
}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}})()
,(function (___31809__auto____$1){
return promesa.protocols._bind((function (){
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["evaluating to errors"], 0));

try{return promesa.protocols._bind(null,(function (___31810__auto____$3){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto____$1){
return promesa.protocols._bind(promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(repl_tooling.eval.eval.cljs$core$IFn$_invoke$arity$2(repl,"(throw (ex-info :foo {}))"),(function (error){
return error;
})),(function (res){
return promesa.protocols._bind(null,(function (___31810__auto____$4){
return promesa.protocols._promise((function (){try{return cljs.test.do_report((function (){var lft__35783__auto__ = res;
var rgt__35784__auto__ = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.map_QMARK_,new cljs.core.Keyword(null,"as-text","as-text",-449861067),/#error.*:foo/], null);
var qleft__35785__auto__ = new cljs.core.Symbol(null,"res","res",245523648,null);
var qright__35786__auto__ = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Keyword(null,"as-text","as-text",-449861067),/#error.*:foo/], null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})());
}catch (e84942){var t__35810__auto__ = e84942;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.map_QMARK_,new cljs.core.Keyword(null,"as-text","as-text",-449861067),/#error.*:foo/], null),new cljs.core.Keyword(null,"actual","actual",107306363),check.core.normalize_error(t__35810__auto__),new cljs.core.Keyword(null,"message","message",-406056002),["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"res","res",245523648,null))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"=>","=>",-813269641,null))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Keyword(null,"as-text","as-text",-449861067),/#error.*:foo/], null))].join('')], null));
}})());
}));
}));
})));
}));
}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}})()
,(function (___31809__auto____$2){
return promesa.protocols._bind((function (){
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["evaluating syntax errors"], 0));

try{return promesa.protocols._bind(null,(function (___31810__auto____$3){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto____$1){
return promesa.protocols._bind(promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(repl_tooling.eval.eval.cljs$core$IFn$_invoke$arity$2(repl,"(prn nonexistent-var)"),(function (error){
return error;
})),(function (res){
return promesa.protocols._bind(null,(function (___31810__auto____$4){
return promesa.protocols._promise((function (){try{return cljs.test.do_report((function (){var lft__35783__auto__ = res;
var rgt__35784__auto__ = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.map_QMARK_,new cljs.core.Keyword(null,"as-text","as-text",-449861067),/nonexistent-var/], null);
var qleft__35785__auto__ = new cljs.core.Symbol(null,"res","res",245523648,null);
var qright__35786__auto__ = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Keyword(null,"as-text","as-text",-449861067),/nonexistent-var/], null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})());
}catch (e84958){var t__35810__auto__ = e84958;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.map_QMARK_,new cljs.core.Keyword(null,"as-text","as-text",-449861067),/nonexistent-var/], null),new cljs.core.Keyword(null,"actual","actual",107306363),check.core.normalize_error(t__35810__auto__),new cljs.core.Keyword(null,"message","message",-406056002),["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"res","res",245523648,null))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"=>","=>",-813269641,null))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Keyword(null,"as-text","as-text",-449861067),/nonexistent-var/], null))].join('')], null));
}})());
}));
}));
})));
}));
}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}})()
,(function (___31809__auto____$3){
return promesa.protocols._bind((function (){
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["evaluating compile errors"], 0));

try{return promesa.protocols._bind(null,(function (___31810__auto____$3){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto____$1){
return promesa.protocols._bind(promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(repl_tooling.eval.eval.cljs$core$IFn$_invoke$arity$2(repl,"(nil 10)"),(function (error){
return error;
})),(function (res){
return promesa.protocols._bind(null,(function (___31810__auto____$4){
return promesa.protocols._promise((function (){try{return cljs.test.do_report((function (){var lft__35783__auto__ = res;
var rgt__35784__auto__ = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.map_QMARK_,new cljs.core.Keyword(null,"as-text","as-text",-449861067),/Can't call nil/], null);
var qleft__35785__auto__ = new cljs.core.Symbol(null,"res","res",245523648,null);
var qright__35786__auto__ = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Keyword(null,"as-text","as-text",-449861067),/Can't call nil/], null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})());
}catch (e84971){var t__35810__auto__ = e84971;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.map_QMARK_,new cljs.core.Keyword(null,"as-text","as-text",-449861067),/Can't call nil/], null),new cljs.core.Keyword(null,"actual","actual",107306363),check.core.normalize_error(t__35810__auto__),new cljs.core.Keyword(null,"message","message",-406056002),["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"res","res",245523648,null))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"=>","=>",-813269641,null))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Keyword(null,"as-text","as-text",-449861067),/Can't call nil/], null))].join('')], null));
}})());
}));
}));
})));
}));
}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}})()
,(function (___31809__auto____$4){
return promesa.protocols._bind((function (){
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["evaluating print commands"], 0));

try{return promesa.protocols._bind(null,(function (___31810__auto____$3){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto____$1){
return promesa.protocols._bind(repl_tooling.eval.eval.cljs$core$IFn$_invoke$arity$2(repl,"(pr :SOME-TEXT)"),(function (res){
return promesa.protocols._bind(null,(function (___31810__auto____$4){
return promesa.protocols._bind((function (){try{return cljs.test.do_report((function (){var lft__35783__auto__ = res;
var rgt__35784__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",1415092211),null], null);
var qleft__35785__auto__ = new cljs.core.Symbol(null,"res","res",245523648,null);
var qright__35786__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",1415092211),null], null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})());
}catch (e84979){var t__35810__auto__ = e84979;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",1415092211),null], null),new cljs.core.Keyword(null,"actual","actual",107306363),check.core.normalize_error(t__35810__auto__),new cljs.core.Keyword(null,"message","message",-406056002),["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"res","res",245523648,null))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"=>","=>",-813269641,null))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",1415092211),null], null))].join('')], null));
}})(),(function (___31809__auto____$5){
return promesa.protocols._promise((function (){try{return cljs.test.do_report((function (){var lft__35783__auto__ = cljs.core.deref(outputs);
var rgt__35784__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"out","out",-910545517),":SOME-TEXT"], null)], null);
var qleft__35785__auto__ = cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"outputs","outputs",-255981507,null));
var qright__35786__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"out","out",-910545517),":SOME-TEXT"], null)], null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})());
}catch (e84984){var t__35810__auto__ = e84984;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"out","out",-910545517),":SOME-TEXT"], null)], null),new cljs.core.Keyword(null,"actual","actual",107306363),check.core.normalize_error(t__35810__auto__),new cljs.core.Keyword(null,"message","message",-406056002),["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"outputs","outputs",-255981507,null)))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"=>","=>",-813269641,null))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"out","out",-910545517),":SOME-TEXT"], null)], null))].join('')], null));
}})());
}));
}));
}));
})));
}));
}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}})()
,(function (___31809__auto____$5){
return promesa.protocols._promise((function (){
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["evaluating custom shadow-cljs commands"], 0));

try{return promesa.protocols._bind(null,(function (___31810__auto____$3){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto____$1){
return promesa.protocols._bind(repl_tooling.eval.eval.cljs$core$IFn$_invoke$arity$3(repl,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(1),null], null), null)], null)], 0)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"shadow-command","shadow-command",1389461500),true], null)),(function (res){
return promesa.protocols._bind(null,(function (___31810__auto____$4){
return promesa.protocols._promise((function (){try{return cljs.test.do_report((function (){var lft__35783__auto__ = res;
var rgt__35784__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.set_QMARK_,new cljs.core.Keyword(null,"from","from",1815293044),(1),new cljs.core.Keyword(null,"call-id","call-id",1043012968),cljs.core.any_QMARK_], null)], null);
var qleft__35785__auto__ = new cljs.core.Symbol(null,"res","res",245523648,null);
var qright__35786__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.Symbol(null,"set?","set?",1636014792,null),new cljs.core.Keyword(null,"from","from",1815293044),(1),new cljs.core.Keyword(null,"call-id","call-id",1043012968),new cljs.core.Symbol(null,"any?","any?",-318999933,null)], null)], null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})());
}catch (e85101){var t__35810__auto__ = e85101;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.set_QMARK_,new cljs.core.Keyword(null,"from","from",1815293044),(1),new cljs.core.Keyword(null,"call-id","call-id",1043012968),cljs.core.any_QMARK_], null)], null),new cljs.core.Keyword(null,"actual","actual",107306363),check.core.normalize_error(t__35810__auto__),new cljs.core.Keyword(null,"message","message",-406056002),["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"res","res",245523648,null))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"=>","=>",-813269641,null))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.Symbol(null,"set?","set?",1636014792,null),new cljs.core.Keyword(null,"from","from",1815293044),(1),new cljs.core.Keyword(null,"call-id","call-id",1043012968),new cljs.core.Symbol(null,"any?","any?",-318999933,null)], null)], null))].join('')], null));
}})());
}));
}));
})));
}));
}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}})()
);
}));
}));
}));
}));
}));
}));
}));
}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}})()
);
}));
}));
})));
})),promesa.core.delay.cljs$core$IFn$_invoke$arity$2((3000),new cljs.core.Keyword(null,"--TIMEOUT-84696","--TIMEOUT-84696",154580792))], null)),(function (res__84401__auto__,err__84402__auto__){
repl_tooling.integrations.repls.disconnect_BANG_(new cljs.core.Keyword(null,"shadow","shadow",873231803));

if(cljs.core.truth_(err__84402__auto__)){
try{var values__9152__auto___87958 = (new cljs.core.List(null,cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Error on test result",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),err__84402__auto__], null)),null,(1),null));
var result__9153__auto___87959 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.not,values__9152__auto___87958);
if(cljs.core.truth_(result__9153__auto___87959)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"pass","pass",1574159993),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","not","clojure.core/not",2621194,null),cljs.core.list(new cljs.core.Symbol("clojure.core","ex-info","clojure.core/ex-info",-504237117,null),"Error on test result",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Symbol(null,"err__84402__auto__","err__84402__auto__",-1561524708,null)], null))),null,cljs.core.cons(new cljs.core.Symbol("clojure.core","not","clojure.core/not",2621194,null),values__9152__auto___87958),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"fail","fail",1706214930),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","not","clojure.core/not",2621194,null),cljs.core.list(new cljs.core.Symbol("clojure.core","ex-info","clojure.core/ex-info",-504237117,null),"Error on test result",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Symbol(null,"err__84402__auto__","err__84402__auto__",-1561524708,null)], null))),null,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol("clojure.core","not","clojure.core/not",2621194,null),values__9152__auto___87958),null,(1),null)),(2),null)),null]));
}

}catch (e85107){var t__9189__auto___87964 = e85107;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","not","clojure.core/not",2621194,null),cljs.core.list(new cljs.core.Symbol("clojure.core","ex-info","clojure.core/ex-info",-504237117,null),"Error on test result",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Symbol(null,"err__84402__auto__","err__84402__auto__",-1561524708,null)], null))),null,t__9189__auto___87964,null]));
}} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(res__84401__auto__,new cljs.core.Keyword(null,"--TIMEOUT-84696","--TIMEOUT-84696",154580792))){
try{var values__9152__auto___87965 = (new cljs.core.List(null,cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Async error - not finalized",cljs.core.PersistentArrayMap.EMPTY),null,(1),null));
var result__9153__auto___87966 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.not,values__9152__auto___87965);
if(cljs.core.truth_(result__9153__auto___87966)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"pass","pass",1574159993),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","not","clojure.core/not",2621194,null),cljs.core.list(new cljs.core.Symbol("clojure.core","ex-info","clojure.core/ex-info",-504237117,null),"Async error - not finalized",cljs.core.PersistentArrayMap.EMPTY)),null,cljs.core.cons(new cljs.core.Symbol("clojure.core","not","clojure.core/not",2621194,null),values__9152__auto___87965),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"fail","fail",1706214930),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","not","clojure.core/not",2621194,null),cljs.core.list(new cljs.core.Symbol("clojure.core","ex-info","clojure.core/ex-info",-504237117,null),"Async error - not finalized",cljs.core.PersistentArrayMap.EMPTY)),null,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol("clojure.core","not","clojure.core/not",2621194,null),values__9152__auto___87965),null,(1),null)),(2),null)),null]));
}

}catch (e85110){var t__9189__auto___87968 = e85110;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","not","clojure.core/not",2621194,null),cljs.core.list(new cljs.core.Symbol("clojure.core","ex-info","clojure.core/ex-info",-504237117,null),"Async error - not finalized",cljs.core.PersistentArrayMap.EMPTY)),null,t__9189__auto___87968,null]));
}} else {
}
}

return (done__84400__auto__.cljs$core$IFn$_invoke$arity$0 ? done__84400__auto__.cljs$core$IFn$_invoke$arity$0() : done__84400__auto__.call(null));
}));
}));

(repl_tooling.features.shadow_cljs_test.t_repl_tooling$features$shadow_cljs_test84697.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta84698","meta84698",722998842,null)], null);
}));

(repl_tooling.features.shadow_cljs_test.t_repl_tooling$features$shadow_cljs_test84697.cljs$lang$type = true);

(repl_tooling.features.shadow_cljs_test.t_repl_tooling$features$shadow_cljs_test84697.cljs$lang$ctorStr = "repl-tooling.features.shadow-cljs-test/t_repl_tooling$features$shadow_cljs_test84697");

(repl_tooling.features.shadow_cljs_test.t_repl_tooling$features$shadow_cljs_test84697.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"repl-tooling.features.shadow-cljs-test/t_repl_tooling$features$shadow_cljs_test84697");
}));

/**
 * Positional factory function for repl-tooling.features.shadow-cljs-test/t_repl_tooling$features$shadow_cljs_test84697.
 */
repl_tooling.features.shadow_cljs_test.__GT_t_repl_tooling$features$shadow_cljs_test84697 = (function repl_tooling$features$shadow_cljs_test$__GT_t_repl_tooling$features$shadow_cljs_test84697(meta84698){
return (new repl_tooling.features.shadow_cljs_test.t_repl_tooling$features$shadow_cljs_test84697(meta84698));
});

}

return (new repl_tooling.features.shadow_cljs_test.t_repl_tooling$features$shadow_cljs_test84697(null));
})], 0)),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));

repl_tooling.features.shadow_cljs_test.shadow_cljs_websocket = (function repl_tooling$features$shadow_cljs_test$shadow_cljs_websocket(){
return cljs.test.test_var(repl_tooling.features.shadow_cljs_test.shadow_cljs_websocket.cljs$lang$var);
});
repl_tooling.features.shadow_cljs_test.shadow_cljs_websocket.cljs$lang$test = (function (){
if((typeof repl_tooling !== 'undefined') && (typeof repl_tooling.features !== 'undefined') && (typeof repl_tooling.features.shadow_cljs_test !== 'undefined') && (typeof repl_tooling.features.shadow_cljs_test.t_repl_tooling$features$shadow_cljs_test85131 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
repl_tooling.features.shadow_cljs_test.t_repl_tooling$features$shadow_cljs_test85131 = (function (meta85132){
this.meta85132 = meta85132;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(repl_tooling.features.shadow_cljs_test.t_repl_tooling$features$shadow_cljs_test85131.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_85133,meta85132__$1){
var self__ = this;
var _85133__$1 = this;
return (new repl_tooling.features.shadow_cljs_test.t_repl_tooling$features$shadow_cljs_test85131(meta85132__$1));
}));

(repl_tooling.features.shadow_cljs_test.t_repl_tooling$features$shadow_cljs_test85131.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_85133){
var self__ = this;
var _85133__$1 = this;
return self__.meta85132;
}));

(repl_tooling.features.shadow_cljs_test.t_repl_tooling$features$shadow_cljs_test85131.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(repl_tooling.features.shadow_cljs_test.t_repl_tooling$features$shadow_cljs_test85131.prototype.call = (function (self__,done__84400__auto__){
var self__ = this;
var self____$1 = this;
var ___9200__auto__ = self____$1;
return promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.core.race(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [promesa.protocols._bind(null,(function (___31810__auto__){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(repl_tooling.features.shadow_cljs_test.connect_BANG_(),(function (p__85147){
var vec__85149 = p__85147;
var repl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85149,(0),null);
var outputs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85149,(1),null);
return promesa.protocols._bind(null,(function (___31810__auto____$1){
return promesa.protocols._promise((function (){
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["connecting to Shadow"], 0));

try{return promesa.protocols._bind(null,(function (___31810__auto____$2){
return promesa.protocols._bind(promesa.core.delay.cljs$core$IFn$_invoke$arity$1((100)),(function (___31809__auto__){
return promesa.protocols._bind((function (){
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["evaluating results"], 0));

try{return promesa.protocols._bind(null,(function (___31810__auto____$3){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto____$1){
return promesa.protocols._bind(repl_tooling.eval.eval.cljs$core$IFn$_invoke$arity$2(repl,"(+ 1 2)"),(function (res){
return promesa.protocols._bind(null,(function (___31810__auto____$4){
return promesa.protocols._promise((function (){try{return cljs.test.do_report((function (){var lft__35783__auto__ = res;
var rgt__35784__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),(3),new cljs.core.Keyword(null,"as-text","as-text",-449861067),"3",new cljs.core.Keyword(null,"parsed?","parsed?",44224124),true], null);
var qleft__35785__auto__ = new cljs.core.Symbol(null,"res","res",245523648,null);
var qright__35786__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),(3),new cljs.core.Keyword(null,"as-text","as-text",-449861067),"3",new cljs.core.Keyword(null,"parsed?","parsed?",44224124),true], null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})());
}catch (e85164){var t__35810__auto__ = e85164;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),(3),new cljs.core.Keyword(null,"as-text","as-text",-449861067),"3",new cljs.core.Keyword(null,"parsed?","parsed?",44224124),true], null),new cljs.core.Keyword(null,"actual","actual",107306363),check.core.normalize_error(t__35810__auto__),new cljs.core.Keyword(null,"message","message",-406056002),["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"res","res",245523648,null))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"=>","=>",-813269641,null))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),(3),new cljs.core.Keyword(null,"as-text","as-text",-449861067),"3",new cljs.core.Keyword(null,"parsed?","parsed?",44224124),true], null))].join('')], null));
}})());
}));
}));
})));
}));
}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}})()
,(function (___31809__auto____$1){
return promesa.protocols._bind((function (){
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["evaluating to errors"], 0));

try{return promesa.protocols._bind(null,(function (___31810__auto____$3){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto____$1){
return promesa.protocols._bind(promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(repl_tooling.eval.eval.cljs$core$IFn$_invoke$arity$2(repl,"(throw (ex-info :foo {}))"),(function (error){
return error;
})),(function (res){
return promesa.protocols._bind(null,(function (___31810__auto____$4){
return promesa.protocols._promise((function (){try{return cljs.test.do_report((function (){var lft__35783__auto__ = res;
var rgt__35784__auto__ = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.map_QMARK_,new cljs.core.Keyword(null,"as-text","as-text",-449861067),/#error.*:foo/], null);
var qleft__35785__auto__ = new cljs.core.Symbol(null,"res","res",245523648,null);
var qright__35786__auto__ = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Keyword(null,"as-text","as-text",-449861067),/#error.*:foo/], null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})());
}catch (e85416){var t__35810__auto__ = e85416;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.map_QMARK_,new cljs.core.Keyword(null,"as-text","as-text",-449861067),/#error.*:foo/], null),new cljs.core.Keyword(null,"actual","actual",107306363),check.core.normalize_error(t__35810__auto__),new cljs.core.Keyword(null,"message","message",-406056002),["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"res","res",245523648,null))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"=>","=>",-813269641,null))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Keyword(null,"as-text","as-text",-449861067),/#error.*:foo/], null))].join('')], null));
}})());
}));
}));
})));
}));
}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}})()
,(function (___31809__auto____$2){
return promesa.protocols._bind((function (){
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["evaluating syntax errors"], 0));

try{return promesa.protocols._bind(null,(function (___31810__auto____$3){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto____$1){
return promesa.protocols._bind(promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(repl_tooling.eval.eval.cljs$core$IFn$_invoke$arity$2(repl,"(prn nonexistent-var)"),(function (error){
return error;
})),(function (res){
return promesa.protocols._bind(null,(function (___31810__auto____$4){
return promesa.protocols._promise((function (){try{return cljs.test.do_report((function (){var lft__35783__auto__ = res;
var rgt__35784__auto__ = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.map_QMARK_,new cljs.core.Keyword(null,"as-text","as-text",-449861067),/nonexistent-var/], null);
var qleft__35785__auto__ = new cljs.core.Symbol(null,"res","res",245523648,null);
var qright__35786__auto__ = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Keyword(null,"as-text","as-text",-449861067),/nonexistent-var/], null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})());
}catch (e85437){var t__35810__auto__ = e85437;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.map_QMARK_,new cljs.core.Keyword(null,"as-text","as-text",-449861067),/nonexistent-var/], null),new cljs.core.Keyword(null,"actual","actual",107306363),check.core.normalize_error(t__35810__auto__),new cljs.core.Keyword(null,"message","message",-406056002),["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"res","res",245523648,null))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"=>","=>",-813269641,null))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Keyword(null,"as-text","as-text",-449861067),/nonexistent-var/], null))].join('')], null));
}})());
}));
}));
})));
}));
}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}})()
,(function (___31809__auto____$3){
return promesa.protocols._bind((function (){
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["evaluating compile errors"], 0));

try{return promesa.protocols._bind(null,(function (___31810__auto____$3){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto____$1){
return promesa.protocols._bind(promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(repl_tooling.eval.eval.cljs$core$IFn$_invoke$arity$2(repl,"(nil 10)"),(function (error){
return error;
})),(function (res){
return promesa.protocols._bind(null,(function (___31810__auto____$4){
return promesa.protocols._promise((function (){try{return cljs.test.do_report((function (){var lft__35783__auto__ = res;
var rgt__35784__auto__ = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.map_QMARK_,new cljs.core.Keyword(null,"as-text","as-text",-449861067),/Can't call nil/], null);
var qleft__35785__auto__ = new cljs.core.Symbol(null,"res","res",245523648,null);
var qright__35786__auto__ = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Keyword(null,"as-text","as-text",-449861067),/Can't call nil/], null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})());
}catch (e85445){var t__35810__auto__ = e85445;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.map_QMARK_,new cljs.core.Keyword(null,"as-text","as-text",-449861067),/Can't call nil/], null),new cljs.core.Keyword(null,"actual","actual",107306363),check.core.normalize_error(t__35810__auto__),new cljs.core.Keyword(null,"message","message",-406056002),["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"res","res",245523648,null))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"=>","=>",-813269641,null))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Keyword(null,"as-text","as-text",-449861067),/Can't call nil/], null))].join('')], null));
}})());
}));
}));
})));
}));
}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}})()
,(function (___31809__auto____$4){
return promesa.protocols._bind((function (){
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["evaluating print commands"], 0));

try{return promesa.protocols._bind(null,(function (___31810__auto____$3){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto____$1){
return promesa.protocols._bind(repl_tooling.eval.eval.cljs$core$IFn$_invoke$arity$2(repl,"(pr :SOME-TEXT)"),(function (res){
return promesa.protocols._bind(null,(function (___31810__auto____$4){
return promesa.protocols._bind((function (){try{return cljs.test.do_report((function (){var lft__35783__auto__ = res;
var rgt__35784__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",1415092211),null], null);
var qleft__35785__auto__ = new cljs.core.Symbol(null,"res","res",245523648,null);
var qright__35786__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",1415092211),null], null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})());
}catch (e85683){var t__35810__auto__ = e85683;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",1415092211),null], null),new cljs.core.Keyword(null,"actual","actual",107306363),check.core.normalize_error(t__35810__auto__),new cljs.core.Keyword(null,"message","message",-406056002),["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"res","res",245523648,null))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"=>","=>",-813269641,null))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",1415092211),null], null))].join('')], null));
}})(),(function (___31809__auto____$5){
return promesa.protocols._promise((function (){try{return cljs.test.do_report((function (){var lft__35783__auto__ = cljs.core.deref(outputs);
var rgt__35784__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"out","out",-910545517),":SOME-TEXT"], null)], null);
var qleft__35785__auto__ = cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"outputs","outputs",-255981507,null));
var qright__35786__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"out","out",-910545517),":SOME-TEXT"], null)], null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})());
}catch (e85684){var t__35810__auto__ = e85684;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"out","out",-910545517),":SOME-TEXT"], null)], null),new cljs.core.Keyword(null,"actual","actual",107306363),check.core.normalize_error(t__35810__auto__),new cljs.core.Keyword(null,"message","message",-406056002),["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"outputs","outputs",-255981507,null)))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"=>","=>",-813269641,null))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"out","out",-910545517),":SOME-TEXT"], null)], null))].join('')], null));
}})());
}));
}));
}));
})));
}));
}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}})()
,(function (___31809__auto____$5){
return promesa.protocols._promise((function (){
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["evaluating custom shadow-cljs commands"], 0));

try{return promesa.protocols._bind(null,(function (___31810__auto____$3){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto____$1){
return promesa.protocols._bind(repl_tooling.eval.eval.cljs$core$IFn$_invoke$arity$3(repl,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(1),null], null), null)], null)], 0)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"shadow-command","shadow-command",1389461500),true], null)),(function (res){
return promesa.protocols._bind(null,(function (___31810__auto____$4){
return promesa.protocols._promise((function (){try{return cljs.test.do_report((function (){var lft__35783__auto__ = res;
var rgt__35784__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.set_QMARK_,new cljs.core.Keyword(null,"from","from",1815293044),(1),new cljs.core.Keyword(null,"call-id","call-id",1043012968),cljs.core.any_QMARK_], null)], null);
var qleft__35785__auto__ = new cljs.core.Symbol(null,"res","res",245523648,null);
var qright__35786__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.Symbol(null,"set?","set?",1636014792,null),new cljs.core.Keyword(null,"from","from",1815293044),(1),new cljs.core.Keyword(null,"call-id","call-id",1043012968),new cljs.core.Symbol(null,"any?","any?",-318999933,null)], null)], null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})());
}catch (e85690){var t__35810__auto__ = e85690;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.set_QMARK_,new cljs.core.Keyword(null,"from","from",1815293044),(1),new cljs.core.Keyword(null,"call-id","call-id",1043012968),cljs.core.any_QMARK_], null)], null),new cljs.core.Keyword(null,"actual","actual",107306363),check.core.normalize_error(t__35810__auto__),new cljs.core.Keyword(null,"message","message",-406056002),["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"res","res",245523648,null))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"=>","=>",-813269641,null))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.Symbol(null,"set?","set?",1636014792,null),new cljs.core.Keyword(null,"from","from",1815293044),(1),new cljs.core.Keyword(null,"call-id","call-id",1043012968),new cljs.core.Symbol(null,"any?","any?",-318999933,null)], null)], null))].join('')], null));
}})());
}));
}));
})));
}));
}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}})()
);
}));
}));
}));
}));
}));
}));
}));
}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}})()
);
}));
}));
})));
})),promesa.core.delay.cljs$core$IFn$_invoke$arity$2((3000),new cljs.core.Keyword(null,"--TIMEOUT-85128","--TIMEOUT-85128",1667765287))], null)),(function (res__84401__auto__,err__84402__auto__){
repl_tooling.integrations.repls.disconnect_BANG_(new cljs.core.Keyword(null,"shadow","shadow",873231803));

if(cljs.core.truth_(err__84402__auto__)){
try{var values__9152__auto___88020 = (new cljs.core.List(null,cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Error on test result",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),err__84402__auto__], null)),null,(1),null));
var result__9153__auto___88021 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.not,values__9152__auto___88020);
if(cljs.core.truth_(result__9153__auto___88021)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"pass","pass",1574159993),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","not","clojure.core/not",2621194,null),cljs.core.list(new cljs.core.Symbol("clojure.core","ex-info","clojure.core/ex-info",-504237117,null),"Error on test result",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Symbol(null,"err__84402__auto__","err__84402__auto__",-1561524708,null)], null))),null,cljs.core.cons(new cljs.core.Symbol("clojure.core","not","clojure.core/not",2621194,null),values__9152__auto___88020),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"fail","fail",1706214930),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","not","clojure.core/not",2621194,null),cljs.core.list(new cljs.core.Symbol("clojure.core","ex-info","clojure.core/ex-info",-504237117,null),"Error on test result",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Symbol(null,"err__84402__auto__","err__84402__auto__",-1561524708,null)], null))),null,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol("clojure.core","not","clojure.core/not",2621194,null),values__9152__auto___88020),null,(1),null)),(2),null)),null]));
}

}catch (e85702){var t__9189__auto___88190 = e85702;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","not","clojure.core/not",2621194,null),cljs.core.list(new cljs.core.Symbol("clojure.core","ex-info","clojure.core/ex-info",-504237117,null),"Error on test result",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Symbol(null,"err__84402__auto__","err__84402__auto__",-1561524708,null)], null))),null,t__9189__auto___88190,null]));
}} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(res__84401__auto__,new cljs.core.Keyword(null,"--TIMEOUT-85128","--TIMEOUT-85128",1667765287))){
try{var values__9152__auto___88194 = (new cljs.core.List(null,cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Async error - not finalized",cljs.core.PersistentArrayMap.EMPTY),null,(1),null));
var result__9153__auto___88195 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.not,values__9152__auto___88194);
if(cljs.core.truth_(result__9153__auto___88195)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"pass","pass",1574159993),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","not","clojure.core/not",2621194,null),cljs.core.list(new cljs.core.Symbol("clojure.core","ex-info","clojure.core/ex-info",-504237117,null),"Async error - not finalized",cljs.core.PersistentArrayMap.EMPTY)),null,cljs.core.cons(new cljs.core.Symbol("clojure.core","not","clojure.core/not",2621194,null),values__9152__auto___88194),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"fail","fail",1706214930),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","not","clojure.core/not",2621194,null),cljs.core.list(new cljs.core.Symbol("clojure.core","ex-info","clojure.core/ex-info",-504237117,null),"Async error - not finalized",cljs.core.PersistentArrayMap.EMPTY)),null,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol("clojure.core","not","clojure.core/not",2621194,null),values__9152__auto___88194),null,(1),null)),(2),null)),null]));
}

}catch (e85705){var t__9189__auto___88202 = e85705;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","not","clojure.core/not",2621194,null),cljs.core.list(new cljs.core.Symbol("clojure.core","ex-info","clojure.core/ex-info",-504237117,null),"Async error - not finalized",cljs.core.PersistentArrayMap.EMPTY)),null,t__9189__auto___88202,null]));
}} else {
}
}

return (done__84400__auto__.cljs$core$IFn$_invoke$arity$0 ? done__84400__auto__.cljs$core$IFn$_invoke$arity$0() : done__84400__auto__.call(null));
}));
}));

(repl_tooling.features.shadow_cljs_test.t_repl_tooling$features$shadow_cljs_test85131.prototype.apply = (function (self__,args85142){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args85142)));
}));

(repl_tooling.features.shadow_cljs_test.t_repl_tooling$features$shadow_cljs_test85131.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done__84400__auto__){
var self__ = this;
var ___9200__auto__ = this;
return promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.core.race(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [promesa.protocols._bind(null,(function (___31810__auto__){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(repl_tooling.features.shadow_cljs_test.connect_BANG_(),(function (p__85716){
var vec__85717 = p__85716;
var repl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85717,(0),null);
var outputs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85717,(1),null);
return promesa.protocols._bind(null,(function (___31810__auto____$1){
return promesa.protocols._promise((function (){
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["connecting to Shadow"], 0));

try{return promesa.protocols._bind(null,(function (___31810__auto____$2){
return promesa.protocols._bind(promesa.core.delay.cljs$core$IFn$_invoke$arity$1((100)),(function (___31809__auto__){
return promesa.protocols._bind((function (){
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["evaluating results"], 0));

try{return promesa.protocols._bind(null,(function (___31810__auto____$3){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto____$1){
return promesa.protocols._bind(repl_tooling.eval.eval.cljs$core$IFn$_invoke$arity$2(repl,"(+ 1 2)"),(function (res){
return promesa.protocols._bind(null,(function (___31810__auto____$4){
return promesa.protocols._promise((function (){try{return cljs.test.do_report((function (){var lft__35783__auto__ = res;
var rgt__35784__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),(3),new cljs.core.Keyword(null,"as-text","as-text",-449861067),"3",new cljs.core.Keyword(null,"parsed?","parsed?",44224124),true], null);
var qleft__35785__auto__ = new cljs.core.Symbol(null,"res","res",245523648,null);
var qright__35786__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),(3),new cljs.core.Keyword(null,"as-text","as-text",-449861067),"3",new cljs.core.Keyword(null,"parsed?","parsed?",44224124),true], null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})());
}catch (e85725){var t__35810__auto__ = e85725;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),(3),new cljs.core.Keyword(null,"as-text","as-text",-449861067),"3",new cljs.core.Keyword(null,"parsed?","parsed?",44224124),true], null),new cljs.core.Keyword(null,"actual","actual",107306363),check.core.normalize_error(t__35810__auto__),new cljs.core.Keyword(null,"message","message",-406056002),["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"res","res",245523648,null))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"=>","=>",-813269641,null))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),(3),new cljs.core.Keyword(null,"as-text","as-text",-449861067),"3",new cljs.core.Keyword(null,"parsed?","parsed?",44224124),true], null))].join('')], null));
}})());
}));
}));
})));
}));
}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}})()
,(function (___31809__auto____$1){
return promesa.protocols._bind((function (){
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["evaluating to errors"], 0));

try{return promesa.protocols._bind(null,(function (___31810__auto____$3){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto____$1){
return promesa.protocols._bind(promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(repl_tooling.eval.eval.cljs$core$IFn$_invoke$arity$2(repl,"(throw (ex-info :foo {}))"),(function (error){
return error;
})),(function (res){
return promesa.protocols._bind(null,(function (___31810__auto____$4){
return promesa.protocols._promise((function (){try{return cljs.test.do_report((function (){var lft__35783__auto__ = res;
var rgt__35784__auto__ = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.map_QMARK_,new cljs.core.Keyword(null,"as-text","as-text",-449861067),/#error.*:foo/], null);
var qleft__35785__auto__ = new cljs.core.Symbol(null,"res","res",245523648,null);
var qright__35786__auto__ = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Keyword(null,"as-text","as-text",-449861067),/#error.*:foo/], null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})());
}catch (e85737){var t__35810__auto__ = e85737;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.map_QMARK_,new cljs.core.Keyword(null,"as-text","as-text",-449861067),/#error.*:foo/], null),new cljs.core.Keyword(null,"actual","actual",107306363),check.core.normalize_error(t__35810__auto__),new cljs.core.Keyword(null,"message","message",-406056002),["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"res","res",245523648,null))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"=>","=>",-813269641,null))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Keyword(null,"as-text","as-text",-449861067),/#error.*:foo/], null))].join('')], null));
}})());
}));
}));
})));
}));
}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}})()
,(function (___31809__auto____$2){
return promesa.protocols._bind((function (){
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["evaluating syntax errors"], 0));

try{return promesa.protocols._bind(null,(function (___31810__auto____$3){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto____$1){
return promesa.protocols._bind(promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(repl_tooling.eval.eval.cljs$core$IFn$_invoke$arity$2(repl,"(prn nonexistent-var)"),(function (error){
return error;
})),(function (res){
return promesa.protocols._bind(null,(function (___31810__auto____$4){
return promesa.protocols._promise((function (){try{return cljs.test.do_report((function (){var lft__35783__auto__ = res;
var rgt__35784__auto__ = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.map_QMARK_,new cljs.core.Keyword(null,"as-text","as-text",-449861067),/nonexistent-var/], null);
var qleft__35785__auto__ = new cljs.core.Symbol(null,"res","res",245523648,null);
var qright__35786__auto__ = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Keyword(null,"as-text","as-text",-449861067),/nonexistent-var/], null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})());
}catch (e85803){var t__35810__auto__ = e85803;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.map_QMARK_,new cljs.core.Keyword(null,"as-text","as-text",-449861067),/nonexistent-var/], null),new cljs.core.Keyword(null,"actual","actual",107306363),check.core.normalize_error(t__35810__auto__),new cljs.core.Keyword(null,"message","message",-406056002),["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"res","res",245523648,null))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"=>","=>",-813269641,null))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Keyword(null,"as-text","as-text",-449861067),/nonexistent-var/], null))].join('')], null));
}})());
}));
}));
})));
}));
}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}})()
,(function (___31809__auto____$3){
return promesa.protocols._bind((function (){
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["evaluating compile errors"], 0));

try{return promesa.protocols._bind(null,(function (___31810__auto____$3){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto____$1){
return promesa.protocols._bind(promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(repl_tooling.eval.eval.cljs$core$IFn$_invoke$arity$2(repl,"(nil 10)"),(function (error){
return error;
})),(function (res){
return promesa.protocols._bind(null,(function (___31810__auto____$4){
return promesa.protocols._promise((function (){try{return cljs.test.do_report((function (){var lft__35783__auto__ = res;
var rgt__35784__auto__ = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.map_QMARK_,new cljs.core.Keyword(null,"as-text","as-text",-449861067),/Can't call nil/], null);
var qleft__35785__auto__ = new cljs.core.Symbol(null,"res","res",245523648,null);
var qright__35786__auto__ = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Keyword(null,"as-text","as-text",-449861067),/Can't call nil/], null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})());
}catch (e85810){var t__35810__auto__ = e85810;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.map_QMARK_,new cljs.core.Keyword(null,"as-text","as-text",-449861067),/Can't call nil/], null),new cljs.core.Keyword(null,"actual","actual",107306363),check.core.normalize_error(t__35810__auto__),new cljs.core.Keyword(null,"message","message",-406056002),["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"res","res",245523648,null))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"=>","=>",-813269641,null))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Keyword(null,"as-text","as-text",-449861067),/Can't call nil/], null))].join('')], null));
}})());
}));
}));
})));
}));
}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}})()
,(function (___31809__auto____$4){
return promesa.protocols._bind((function (){
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["evaluating print commands"], 0));

try{return promesa.protocols._bind(null,(function (___31810__auto____$3){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto____$1){
return promesa.protocols._bind(repl_tooling.eval.eval.cljs$core$IFn$_invoke$arity$2(repl,"(pr :SOME-TEXT)"),(function (res){
return promesa.protocols._bind(null,(function (___31810__auto____$4){
return promesa.protocols._bind((function (){try{return cljs.test.do_report((function (){var lft__35783__auto__ = res;
var rgt__35784__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",1415092211),null], null);
var qleft__35785__auto__ = new cljs.core.Symbol(null,"res","res",245523648,null);
var qright__35786__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",1415092211),null], null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})());
}catch (e85817){var t__35810__auto__ = e85817;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",1415092211),null], null),new cljs.core.Keyword(null,"actual","actual",107306363),check.core.normalize_error(t__35810__auto__),new cljs.core.Keyword(null,"message","message",-406056002),["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"res","res",245523648,null))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"=>","=>",-813269641,null))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",1415092211),null], null))].join('')], null));
}})(),(function (___31809__auto____$5){
return promesa.protocols._promise((function (){try{return cljs.test.do_report((function (){var lft__35783__auto__ = cljs.core.deref(outputs);
var rgt__35784__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"out","out",-910545517),":SOME-TEXT"], null)], null);
var qleft__35785__auto__ = cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"outputs","outputs",-255981507,null));
var qright__35786__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"out","out",-910545517),":SOME-TEXT"], null)], null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})());
}catch (e85820){var t__35810__auto__ = e85820;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"out","out",-910545517),":SOME-TEXT"], null)], null),new cljs.core.Keyword(null,"actual","actual",107306363),check.core.normalize_error(t__35810__auto__),new cljs.core.Keyword(null,"message","message",-406056002),["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"outputs","outputs",-255981507,null)))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"=>","=>",-813269641,null))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"out","out",-910545517),":SOME-TEXT"], null)], null))].join('')], null));
}})());
}));
}));
}));
})));
}));
}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}})()
,(function (___31809__auto____$5){
return promesa.protocols._promise((function (){
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["evaluating custom shadow-cljs commands"], 0));

try{return promesa.protocols._bind(null,(function (___31810__auto____$3){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto____$1){
return promesa.protocols._bind(repl_tooling.eval.eval.cljs$core$IFn$_invoke$arity$3(repl,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(1),null], null), null)], null)], 0)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"shadow-command","shadow-command",1389461500),true], null)),(function (res){
return promesa.protocols._bind(null,(function (___31810__auto____$4){
return promesa.protocols._promise((function (){try{return cljs.test.do_report((function (){var lft__35783__auto__ = res;
var rgt__35784__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.set_QMARK_,new cljs.core.Keyword(null,"from","from",1815293044),(1),new cljs.core.Keyword(null,"call-id","call-id",1043012968),cljs.core.any_QMARK_], null)], null);
var qleft__35785__auto__ = new cljs.core.Symbol(null,"res","res",245523648,null);
var qright__35786__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.Symbol(null,"set?","set?",1636014792,null),new cljs.core.Keyword(null,"from","from",1815293044),(1),new cljs.core.Keyword(null,"call-id","call-id",1043012968),new cljs.core.Symbol(null,"any?","any?",-318999933,null)], null)], null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})());
}catch (e85829){var t__35810__auto__ = e85829;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.set_QMARK_,new cljs.core.Keyword(null,"from","from",1815293044),(1),new cljs.core.Keyword(null,"call-id","call-id",1043012968),cljs.core.any_QMARK_], null)], null),new cljs.core.Keyword(null,"actual","actual",107306363),check.core.normalize_error(t__35810__auto__),new cljs.core.Keyword(null,"message","message",-406056002),["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"res","res",245523648,null))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"=>","=>",-813269641,null))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.Symbol(null,"set?","set?",1636014792,null),new cljs.core.Keyword(null,"from","from",1815293044),(1),new cljs.core.Keyword(null,"call-id","call-id",1043012968),new cljs.core.Symbol(null,"any?","any?",-318999933,null)], null)], null))].join('')], null));
}})());
}));
}));
})));
}));
}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}})()
);
}));
}));
}));
}));
}));
}));
}));
}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}})()
);
}));
}));
})));
})),promesa.core.delay.cljs$core$IFn$_invoke$arity$2((3000),new cljs.core.Keyword(null,"--TIMEOUT-85128","--TIMEOUT-85128",1667765287))], null)),(function (res__84401__auto__,err__84402__auto__){
repl_tooling.integrations.repls.disconnect_BANG_(new cljs.core.Keyword(null,"shadow","shadow",873231803));

if(cljs.core.truth_(err__84402__auto__)){
try{var values__9152__auto___88281 = (new cljs.core.List(null,cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Error on test result",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),err__84402__auto__], null)),null,(1),null));
var result__9153__auto___88282 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.not,values__9152__auto___88281);
if(cljs.core.truth_(result__9153__auto___88282)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"pass","pass",1574159993),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","not","clojure.core/not",2621194,null),cljs.core.list(new cljs.core.Symbol("clojure.core","ex-info","clojure.core/ex-info",-504237117,null),"Error on test result",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Symbol(null,"err__84402__auto__","err__84402__auto__",-1561524708,null)], null))),null,cljs.core.cons(new cljs.core.Symbol("clojure.core","not","clojure.core/not",2621194,null),values__9152__auto___88281),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"fail","fail",1706214930),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","not","clojure.core/not",2621194,null),cljs.core.list(new cljs.core.Symbol("clojure.core","ex-info","clojure.core/ex-info",-504237117,null),"Error on test result",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Symbol(null,"err__84402__auto__","err__84402__auto__",-1561524708,null)], null))),null,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol("clojure.core","not","clojure.core/not",2621194,null),values__9152__auto___88281),null,(1),null)),(2),null)),null]));
}

}catch (e85837){var t__9189__auto___88289 = e85837;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","not","clojure.core/not",2621194,null),cljs.core.list(new cljs.core.Symbol("clojure.core","ex-info","clojure.core/ex-info",-504237117,null),"Error on test result",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Symbol(null,"err__84402__auto__","err__84402__auto__",-1561524708,null)], null))),null,t__9189__auto___88289,null]));
}} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(res__84401__auto__,new cljs.core.Keyword(null,"--TIMEOUT-85128","--TIMEOUT-85128",1667765287))){
try{var values__9152__auto___88294 = (new cljs.core.List(null,cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Async error - not finalized",cljs.core.PersistentArrayMap.EMPTY),null,(1),null));
var result__9153__auto___88295 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.not,values__9152__auto___88294);
if(cljs.core.truth_(result__9153__auto___88295)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"pass","pass",1574159993),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","not","clojure.core/not",2621194,null),cljs.core.list(new cljs.core.Symbol("clojure.core","ex-info","clojure.core/ex-info",-504237117,null),"Async error - not finalized",cljs.core.PersistentArrayMap.EMPTY)),null,cljs.core.cons(new cljs.core.Symbol("clojure.core","not","clojure.core/not",2621194,null),values__9152__auto___88294),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"fail","fail",1706214930),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","not","clojure.core/not",2621194,null),cljs.core.list(new cljs.core.Symbol("clojure.core","ex-info","clojure.core/ex-info",-504237117,null),"Async error - not finalized",cljs.core.PersistentArrayMap.EMPTY)),null,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol("clojure.core","not","clojure.core/not",2621194,null),values__9152__auto___88294),null,(1),null)),(2),null)),null]));
}

}catch (e85842){var t__9189__auto___88299 = e85842;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","not","clojure.core/not",2621194,null),cljs.core.list(new cljs.core.Symbol("clojure.core","ex-info","clojure.core/ex-info",-504237117,null),"Async error - not finalized",cljs.core.PersistentArrayMap.EMPTY)),null,t__9189__auto___88299,null]));
}} else {
}
}

return (done__84400__auto__.cljs$core$IFn$_invoke$arity$0 ? done__84400__auto__.cljs$core$IFn$_invoke$arity$0() : done__84400__auto__.call(null));
}));
}));

(repl_tooling.features.shadow_cljs_test.t_repl_tooling$features$shadow_cljs_test85131.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta85132","meta85132",-1495715059,null)], null);
}));

(repl_tooling.features.shadow_cljs_test.t_repl_tooling$features$shadow_cljs_test85131.cljs$lang$type = true);

(repl_tooling.features.shadow_cljs_test.t_repl_tooling$features$shadow_cljs_test85131.cljs$lang$ctorStr = "repl-tooling.features.shadow-cljs-test/t_repl_tooling$features$shadow_cljs_test85131");

(repl_tooling.features.shadow_cljs_test.t_repl_tooling$features$shadow_cljs_test85131.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"repl-tooling.features.shadow-cljs-test/t_repl_tooling$features$shadow_cljs_test85131");
}));

/**
 * Positional factory function for repl-tooling.features.shadow-cljs-test/t_repl_tooling$features$shadow_cljs_test85131.
 */
repl_tooling.features.shadow_cljs_test.__GT_t_repl_tooling$features$shadow_cljs_test85131 = (function repl_tooling$features$shadow_cljs_test$__GT_t_repl_tooling$features$shadow_cljs_test85131(meta85132){
return (new repl_tooling.features.shadow_cljs_test.t_repl_tooling$features$shadow_cljs_test85131(meta85132));
});

}

return (new repl_tooling.features.shadow_cljs_test.t_repl_tooling$features$shadow_cljs_test85131(null));
});

(repl_tooling.features.shadow_cljs_test.shadow_cljs_websocket.cljs$lang$var = new cljs.core.Var(function(){return repl_tooling.features.shadow_cljs_test.shadow_cljs_websocket;},new cljs.core.Symbol("repl-tooling.features.shadow-cljs-test","shadow-cljs-websocket","repl-tooling.features.shadow-cljs-test/shadow-cljs-websocket",1727885700,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"repl-tooling.features.shadow-cljs-test","repl-tooling.features.shadow-cljs-test",-422638750,null),new cljs.core.Symbol(null,"shadow-cljs-websocket","shadow-cljs-websocket",608082131,null),"repl_tooling/features/shadow_cljs_test.cljs",37,1,29,29,cljs.core.List.EMPTY,null,(cljs.core.truth_(repl_tooling.features.shadow_cljs_test.shadow_cljs_websocket)?repl_tooling.features.shadow_cljs_test.shadow_cljs_websocket.cljs$lang$test:null)])));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"repl_tooling.features.shadow_cljs_test","repl_tooling.features.shadow_cljs_test",1488772503),new cljs.core.Keyword(null,"shadow-cljs-wrong-build","shadow-cljs-wrong-build",-251107048)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"shadow-cljs-wrong-build",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){
if((typeof repl_tooling !== 'undefined') && (typeof repl_tooling.features !== 'undefined') && (typeof repl_tooling.features.shadow_cljs_test !== 'undefined') && (typeof repl_tooling.features.shadow_cljs_test.t_repl_tooling$features$shadow_cljs_test85863 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
repl_tooling.features.shadow_cljs_test.t_repl_tooling$features$shadow_cljs_test85863 = (function (meta85864){
this.meta85864 = meta85864;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(repl_tooling.features.shadow_cljs_test.t_repl_tooling$features$shadow_cljs_test85863.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_85865,meta85864__$1){
var self__ = this;
var _85865__$1 = this;
return (new repl_tooling.features.shadow_cljs_test.t_repl_tooling$features$shadow_cljs_test85863(meta85864__$1));
}));

(repl_tooling.features.shadow_cljs_test.t_repl_tooling$features$shadow_cljs_test85863.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_85865){
var self__ = this;
var _85865__$1 = this;
return self__.meta85864;
}));

(repl_tooling.features.shadow_cljs_test.t_repl_tooling$features$shadow_cljs_test85863.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(repl_tooling.features.shadow_cljs_test.t_repl_tooling$features$shadow_cljs_test85863.prototype.call = (function (self__,done__84400__auto__){
var self__ = this;
var self____$1 = this;
var ___9200__auto__ = self____$1;
return promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.core.race(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [promesa.protocols._bind(null,(function (___31810__auto__){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(repl_tooling.repl_client.shadow_ws.connect_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"shadow-wrong-build","shadow-wrong-build",795501605),new cljs.core.Keyword(null,"build-id","build-id",1642831089),new cljs.core.Keyword(null,"wrong-id","wrong-id",910005835),new cljs.core.Keyword(null,"host","host",-1558485167),"localhost",new cljs.core.Keyword(null,"port","port",1534937262),cljs.core.deref(repl_tooling.features.shadow_cljs_test.port),new cljs.core.Keyword(null,"token","token",-1211463215),cljs.core.deref(repl_tooling.features.shadow_cljs_test.token)], null)),(function (repl){
return promesa.protocols._bind(null,(function (___31810__auto____$1){
return promesa.protocols._promise((function (){
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["connecting to Shadow"], 0));

try{return promesa.protocols._bind(null,(function (___31810__auto____$2){
return promesa.protocols._bind(promesa.core.delay.cljs$core$IFn$_invoke$arity$1((100)),(function (___31809__auto__){
return promesa.protocols._promise((function (){
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["evaluating results"], 0));

try{return promesa.protocols._bind(null,(function (___31810__auto____$3){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto____$1){
return promesa.protocols._bind(promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(repl_tooling.eval.eval.cljs$core$IFn$_invoke$arity$2(repl,"(+ 1 2)"),(function (error){
return error;
})),(function (res){
return promesa.protocols._bind(null,(function (___31810__auto____$4){
return promesa.protocols._promise((function (){try{return cljs.test.do_report((function (){var lft__35783__auto__ = res;
var rgt__35784__auto__ = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.map_QMARK_,new cljs.core.Keyword(null,"as-text","as-text",-449861067),/:wrong-id/], null);
var qleft__35785__auto__ = new cljs.core.Symbol(null,"res","res",245523648,null);
var qright__35786__auto__ = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Keyword(null,"as-text","as-text",-449861067),/:wrong-id/], null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})());
}catch (e86039){var t__35810__auto__ = e86039;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.map_QMARK_,new cljs.core.Keyword(null,"as-text","as-text",-449861067),/:wrong-id/], null),new cljs.core.Keyword(null,"actual","actual",107306363),check.core.normalize_error(t__35810__auto__),new cljs.core.Keyword(null,"message","message",-406056002),["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"res","res",245523648,null))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"=>","=>",-813269641,null))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Keyword(null,"as-text","as-text",-449861067),/:wrong-id/], null))].join('')], null));
}})());
}));
}));
})));
}));
}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}})()
);
}));
}));
}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}})()
);
}));
}));
})));
})),promesa.core.delay.cljs$core$IFn$_invoke$arity$2((3000),new cljs.core.Keyword(null,"--TIMEOUT-85862","--TIMEOUT-85862",-800701937))], null)),(function (res__84401__auto__,err__84402__auto__){
repl_tooling.integrations.repls.disconnect_BANG_(new cljs.core.Keyword(null,"shadow-wrong-build","shadow-wrong-build",795501605));

if(cljs.core.truth_(err__84402__auto__)){
try{var values__9152__auto___88337 = (new cljs.core.List(null,cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Error on test result",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),err__84402__auto__], null)),null,(1),null));
var result__9153__auto___88338 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.not,values__9152__auto___88337);
if(cljs.core.truth_(result__9153__auto___88338)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"pass","pass",1574159993),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","not","clojure.core/not",2621194,null),cljs.core.list(new cljs.core.Symbol("clojure.core","ex-info","clojure.core/ex-info",-504237117,null),"Error on test result",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Symbol(null,"err__84402__auto__","err__84402__auto__",-1561524708,null)], null))),null,cljs.core.cons(new cljs.core.Symbol("clojure.core","not","clojure.core/not",2621194,null),values__9152__auto___88337),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"fail","fail",1706214930),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","not","clojure.core/not",2621194,null),cljs.core.list(new cljs.core.Symbol("clojure.core","ex-info","clojure.core/ex-info",-504237117,null),"Error on test result",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Symbol(null,"err__84402__auto__","err__84402__auto__",-1561524708,null)], null))),null,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol("clojure.core","not","clojure.core/not",2621194,null),values__9152__auto___88337),null,(1),null)),(2),null)),null]));
}

}catch (e86166){var t__9189__auto___88342 = e86166;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","not","clojure.core/not",2621194,null),cljs.core.list(new cljs.core.Symbol("clojure.core","ex-info","clojure.core/ex-info",-504237117,null),"Error on test result",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Symbol(null,"err__84402__auto__","err__84402__auto__",-1561524708,null)], null))),null,t__9189__auto___88342,null]));
}} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(res__84401__auto__,new cljs.core.Keyword(null,"--TIMEOUT-85862","--TIMEOUT-85862",-800701937))){
try{var values__9152__auto___88347 = (new cljs.core.List(null,cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Async error - not finalized",cljs.core.PersistentArrayMap.EMPTY),null,(1),null));
var result__9153__auto___88348 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.not,values__9152__auto___88347);
if(cljs.core.truth_(result__9153__auto___88348)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"pass","pass",1574159993),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","not","clojure.core/not",2621194,null),cljs.core.list(new cljs.core.Symbol("clojure.core","ex-info","clojure.core/ex-info",-504237117,null),"Async error - not finalized",cljs.core.PersistentArrayMap.EMPTY)),null,cljs.core.cons(new cljs.core.Symbol("clojure.core","not","clojure.core/not",2621194,null),values__9152__auto___88347),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"fail","fail",1706214930),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","not","clojure.core/not",2621194,null),cljs.core.list(new cljs.core.Symbol("clojure.core","ex-info","clojure.core/ex-info",-504237117,null),"Async error - not finalized",cljs.core.PersistentArrayMap.EMPTY)),null,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol("clojure.core","not","clojure.core/not",2621194,null),values__9152__auto___88347),null,(1),null)),(2),null)),null]));
}

}catch (e86213){var t__9189__auto___88355 = e86213;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","not","clojure.core/not",2621194,null),cljs.core.list(new cljs.core.Symbol("clojure.core","ex-info","clojure.core/ex-info",-504237117,null),"Async error - not finalized",cljs.core.PersistentArrayMap.EMPTY)),null,t__9189__auto___88355,null]));
}} else {
}
}

return (done__84400__auto__.cljs$core$IFn$_invoke$arity$0 ? done__84400__auto__.cljs$core$IFn$_invoke$arity$0() : done__84400__auto__.call(null));
}));
}));

(repl_tooling.features.shadow_cljs_test.t_repl_tooling$features$shadow_cljs_test85863.prototype.apply = (function (self__,args85872){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args85872)));
}));

(repl_tooling.features.shadow_cljs_test.t_repl_tooling$features$shadow_cljs_test85863.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done__84400__auto__){
var self__ = this;
var ___9200__auto__ = this;
return promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.core.race(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [promesa.protocols._bind(null,(function (___31810__auto__){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(repl_tooling.repl_client.shadow_ws.connect_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"shadow-wrong-build","shadow-wrong-build",795501605),new cljs.core.Keyword(null,"build-id","build-id",1642831089),new cljs.core.Keyword(null,"wrong-id","wrong-id",910005835),new cljs.core.Keyword(null,"host","host",-1558485167),"localhost",new cljs.core.Keyword(null,"port","port",1534937262),cljs.core.deref(repl_tooling.features.shadow_cljs_test.port),new cljs.core.Keyword(null,"token","token",-1211463215),cljs.core.deref(repl_tooling.features.shadow_cljs_test.token)], null)),(function (repl){
return promesa.protocols._bind(null,(function (___31810__auto____$1){
return promesa.protocols._promise((function (){
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["connecting to Shadow"], 0));

try{return promesa.protocols._bind(null,(function (___31810__auto____$2){
return promesa.protocols._bind(promesa.core.delay.cljs$core$IFn$_invoke$arity$1((100)),(function (___31809__auto__){
return promesa.protocols._promise((function (){
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["evaluating results"], 0));

try{return promesa.protocols._bind(null,(function (___31810__auto____$3){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto____$1){
return promesa.protocols._bind(promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(repl_tooling.eval.eval.cljs$core$IFn$_invoke$arity$2(repl,"(+ 1 2)"),(function (error){
return error;
})),(function (res){
return promesa.protocols._bind(null,(function (___31810__auto____$4){
return promesa.protocols._promise((function (){try{return cljs.test.do_report((function (){var lft__35783__auto__ = res;
var rgt__35784__auto__ = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.map_QMARK_,new cljs.core.Keyword(null,"as-text","as-text",-449861067),/:wrong-id/], null);
var qleft__35785__auto__ = new cljs.core.Symbol(null,"res","res",245523648,null);
var qright__35786__auto__ = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Keyword(null,"as-text","as-text",-449861067),/:wrong-id/], null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})());
}catch (e86899){var t__35810__auto__ = e86899;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.map_QMARK_,new cljs.core.Keyword(null,"as-text","as-text",-449861067),/:wrong-id/], null),new cljs.core.Keyword(null,"actual","actual",107306363),check.core.normalize_error(t__35810__auto__),new cljs.core.Keyword(null,"message","message",-406056002),["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"res","res",245523648,null))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"=>","=>",-813269641,null))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Keyword(null,"as-text","as-text",-449861067),/:wrong-id/], null))].join('')], null));
}})());
}));
}));
})));
}));
}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}})()
);
}));
}));
}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}})()
);
}));
}));
})));
})),promesa.core.delay.cljs$core$IFn$_invoke$arity$2((3000),new cljs.core.Keyword(null,"--TIMEOUT-85862","--TIMEOUT-85862",-800701937))], null)),(function (res__84401__auto__,err__84402__auto__){
repl_tooling.integrations.repls.disconnect_BANG_(new cljs.core.Keyword(null,"shadow-wrong-build","shadow-wrong-build",795501605));

if(cljs.core.truth_(err__84402__auto__)){
try{var values__9152__auto___88376 = (new cljs.core.List(null,cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Error on test result",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),err__84402__auto__], null)),null,(1),null));
var result__9153__auto___88377 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.not,values__9152__auto___88376);
if(cljs.core.truth_(result__9153__auto___88377)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"pass","pass",1574159993),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","not","clojure.core/not",2621194,null),cljs.core.list(new cljs.core.Symbol("clojure.core","ex-info","clojure.core/ex-info",-504237117,null),"Error on test result",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Symbol(null,"err__84402__auto__","err__84402__auto__",-1561524708,null)], null))),null,cljs.core.cons(new cljs.core.Symbol("clojure.core","not","clojure.core/not",2621194,null),values__9152__auto___88376),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"fail","fail",1706214930),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","not","clojure.core/not",2621194,null),cljs.core.list(new cljs.core.Symbol("clojure.core","ex-info","clojure.core/ex-info",-504237117,null),"Error on test result",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Symbol(null,"err__84402__auto__","err__84402__auto__",-1561524708,null)], null))),null,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol("clojure.core","not","clojure.core/not",2621194,null),values__9152__auto___88376),null,(1),null)),(2),null)),null]));
}

}catch (e86906){var t__9189__auto___88386 = e86906;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","not","clojure.core/not",2621194,null),cljs.core.list(new cljs.core.Symbol("clojure.core","ex-info","clojure.core/ex-info",-504237117,null),"Error on test result",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Symbol(null,"err__84402__auto__","err__84402__auto__",-1561524708,null)], null))),null,t__9189__auto___88386,null]));
}} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(res__84401__auto__,new cljs.core.Keyword(null,"--TIMEOUT-85862","--TIMEOUT-85862",-800701937))){
try{var values__9152__auto___88389 = (new cljs.core.List(null,cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Async error - not finalized",cljs.core.PersistentArrayMap.EMPTY),null,(1),null));
var result__9153__auto___88390 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.not,values__9152__auto___88389);
if(cljs.core.truth_(result__9153__auto___88390)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"pass","pass",1574159993),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","not","clojure.core/not",2621194,null),cljs.core.list(new cljs.core.Symbol("clojure.core","ex-info","clojure.core/ex-info",-504237117,null),"Async error - not finalized",cljs.core.PersistentArrayMap.EMPTY)),null,cljs.core.cons(new cljs.core.Symbol("clojure.core","not","clojure.core/not",2621194,null),values__9152__auto___88389),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"fail","fail",1706214930),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","not","clojure.core/not",2621194,null),cljs.core.list(new cljs.core.Symbol("clojure.core","ex-info","clojure.core/ex-info",-504237117,null),"Async error - not finalized",cljs.core.PersistentArrayMap.EMPTY)),null,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol("clojure.core","not","clojure.core/not",2621194,null),values__9152__auto___88389),null,(1),null)),(2),null)),null]));
}

}catch (e86910){var t__9189__auto___88395 = e86910;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","not","clojure.core/not",2621194,null),cljs.core.list(new cljs.core.Symbol("clojure.core","ex-info","clojure.core/ex-info",-504237117,null),"Async error - not finalized",cljs.core.PersistentArrayMap.EMPTY)),null,t__9189__auto___88395,null]));
}} else {
}
}

return (done__84400__auto__.cljs$core$IFn$_invoke$arity$0 ? done__84400__auto__.cljs$core$IFn$_invoke$arity$0() : done__84400__auto__.call(null));
}));
}));

(repl_tooling.features.shadow_cljs_test.t_repl_tooling$features$shadow_cljs_test85863.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta85864","meta85864",-55339702,null)], null);
}));

(repl_tooling.features.shadow_cljs_test.t_repl_tooling$features$shadow_cljs_test85863.cljs$lang$type = true);

(repl_tooling.features.shadow_cljs_test.t_repl_tooling$features$shadow_cljs_test85863.cljs$lang$ctorStr = "repl-tooling.features.shadow-cljs-test/t_repl_tooling$features$shadow_cljs_test85863");

(repl_tooling.features.shadow_cljs_test.t_repl_tooling$features$shadow_cljs_test85863.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"repl-tooling.features.shadow-cljs-test/t_repl_tooling$features$shadow_cljs_test85863");
}));

/**
 * Positional factory function for repl-tooling.features.shadow-cljs-test/t_repl_tooling$features$shadow_cljs_test85863.
 */
repl_tooling.features.shadow_cljs_test.__GT_t_repl_tooling$features$shadow_cljs_test85863 = (function repl_tooling$features$shadow_cljs_test$__GT_t_repl_tooling$features$shadow_cljs_test85863(meta85864){
return (new repl_tooling.features.shadow_cljs_test.t_repl_tooling$features$shadow_cljs_test85863(meta85864));
});

}

return (new repl_tooling.features.shadow_cljs_test.t_repl_tooling$features$shadow_cljs_test85863(null));
})], 0)),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));

repl_tooling.features.shadow_cljs_test.shadow_cljs_wrong_build = (function repl_tooling$features$shadow_cljs_test$shadow_cljs_wrong_build(){
return cljs.test.test_var(repl_tooling.features.shadow_cljs_test.shadow_cljs_wrong_build.cljs$lang$var);
});
repl_tooling.features.shadow_cljs_test.shadow_cljs_wrong_build.cljs$lang$test = (function (){
if((typeof repl_tooling !== 'undefined') && (typeof repl_tooling.features !== 'undefined') && (typeof repl_tooling.features.shadow_cljs_test !== 'undefined') && (typeof repl_tooling.features.shadow_cljs_test.t_repl_tooling$features$shadow_cljs_test86918 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
repl_tooling.features.shadow_cljs_test.t_repl_tooling$features$shadow_cljs_test86918 = (function (meta86919){
this.meta86919 = meta86919;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(repl_tooling.features.shadow_cljs_test.t_repl_tooling$features$shadow_cljs_test86918.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_86920,meta86919__$1){
var self__ = this;
var _86920__$1 = this;
return (new repl_tooling.features.shadow_cljs_test.t_repl_tooling$features$shadow_cljs_test86918(meta86919__$1));
}));

(repl_tooling.features.shadow_cljs_test.t_repl_tooling$features$shadow_cljs_test86918.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_86920){
var self__ = this;
var _86920__$1 = this;
return self__.meta86919;
}));

(repl_tooling.features.shadow_cljs_test.t_repl_tooling$features$shadow_cljs_test86918.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(repl_tooling.features.shadow_cljs_test.t_repl_tooling$features$shadow_cljs_test86918.prototype.call = (function (self__,done__84400__auto__){
var self__ = this;
var self____$1 = this;
var ___9200__auto__ = self____$1;
return promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.core.race(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [promesa.protocols._bind(null,(function (___31810__auto__){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(repl_tooling.repl_client.shadow_ws.connect_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"shadow-wrong-build","shadow-wrong-build",795501605),new cljs.core.Keyword(null,"build-id","build-id",1642831089),new cljs.core.Keyword(null,"wrong-id","wrong-id",910005835),new cljs.core.Keyword(null,"host","host",-1558485167),"localhost",new cljs.core.Keyword(null,"port","port",1534937262),cljs.core.deref(repl_tooling.features.shadow_cljs_test.port),new cljs.core.Keyword(null,"token","token",-1211463215),cljs.core.deref(repl_tooling.features.shadow_cljs_test.token)], null)),(function (repl){
return promesa.protocols._bind(null,(function (___31810__auto____$1){
return promesa.protocols._promise((function (){
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["connecting to Shadow"], 0));

try{return promesa.protocols._bind(null,(function (___31810__auto____$2){
return promesa.protocols._bind(promesa.core.delay.cljs$core$IFn$_invoke$arity$1((100)),(function (___31809__auto__){
return promesa.protocols._promise((function (){
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["evaluating results"], 0));

try{return promesa.protocols._bind(null,(function (___31810__auto____$3){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto____$1){
return promesa.protocols._bind(promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(repl_tooling.eval.eval.cljs$core$IFn$_invoke$arity$2(repl,"(+ 1 2)"),(function (error){
return error;
})),(function (res){
return promesa.protocols._bind(null,(function (___31810__auto____$4){
return promesa.protocols._promise((function (){try{return cljs.test.do_report((function (){var lft__35783__auto__ = res;
var rgt__35784__auto__ = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.map_QMARK_,new cljs.core.Keyword(null,"as-text","as-text",-449861067),/:wrong-id/], null);
var qleft__35785__auto__ = new cljs.core.Symbol(null,"res","res",245523648,null);
var qright__35786__auto__ = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Keyword(null,"as-text","as-text",-449861067),/:wrong-id/], null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})());
}catch (e87224){var t__35810__auto__ = e87224;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.map_QMARK_,new cljs.core.Keyword(null,"as-text","as-text",-449861067),/:wrong-id/], null),new cljs.core.Keyword(null,"actual","actual",107306363),check.core.normalize_error(t__35810__auto__),new cljs.core.Keyword(null,"message","message",-406056002),["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"res","res",245523648,null))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"=>","=>",-813269641,null))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Keyword(null,"as-text","as-text",-449861067),/:wrong-id/], null))].join('')], null));
}})());
}));
}));
})));
}));
}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}})()
);
}));
}));
}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}})()
);
}));
}));
})));
})),promesa.core.delay.cljs$core$IFn$_invoke$arity$2((3000),new cljs.core.Keyword(null,"--TIMEOUT-86917","--TIMEOUT-86917",-281652937))], null)),(function (res__84401__auto__,err__84402__auto__){
repl_tooling.integrations.repls.disconnect_BANG_(new cljs.core.Keyword(null,"shadow-wrong-build","shadow-wrong-build",795501605));

if(cljs.core.truth_(err__84402__auto__)){
try{var values__9152__auto___88412 = (new cljs.core.List(null,cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Error on test result",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),err__84402__auto__], null)),null,(1),null));
var result__9153__auto___88413 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.not,values__9152__auto___88412);
if(cljs.core.truth_(result__9153__auto___88413)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"pass","pass",1574159993),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","not","clojure.core/not",2621194,null),cljs.core.list(new cljs.core.Symbol("clojure.core","ex-info","clojure.core/ex-info",-504237117,null),"Error on test result",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Symbol(null,"err__84402__auto__","err__84402__auto__",-1561524708,null)], null))),null,cljs.core.cons(new cljs.core.Symbol("clojure.core","not","clojure.core/not",2621194,null),values__9152__auto___88412),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"fail","fail",1706214930),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","not","clojure.core/not",2621194,null),cljs.core.list(new cljs.core.Symbol("clojure.core","ex-info","clojure.core/ex-info",-504237117,null),"Error on test result",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Symbol(null,"err__84402__auto__","err__84402__auto__",-1561524708,null)], null))),null,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol("clojure.core","not","clojure.core/not",2621194,null),values__9152__auto___88412),null,(1),null)),(2),null)),null]));
}

}catch (e87232){var t__9189__auto___88415 = e87232;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","not","clojure.core/not",2621194,null),cljs.core.list(new cljs.core.Symbol("clojure.core","ex-info","clojure.core/ex-info",-504237117,null),"Error on test result",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Symbol(null,"err__84402__auto__","err__84402__auto__",-1561524708,null)], null))),null,t__9189__auto___88415,null]));
}} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(res__84401__auto__,new cljs.core.Keyword(null,"--TIMEOUT-86917","--TIMEOUT-86917",-281652937))){
try{var values__9152__auto___88416 = (new cljs.core.List(null,cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Async error - not finalized",cljs.core.PersistentArrayMap.EMPTY),null,(1),null));
var result__9153__auto___88417 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.not,values__9152__auto___88416);
if(cljs.core.truth_(result__9153__auto___88417)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"pass","pass",1574159993),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","not","clojure.core/not",2621194,null),cljs.core.list(new cljs.core.Symbol("clojure.core","ex-info","clojure.core/ex-info",-504237117,null),"Async error - not finalized",cljs.core.PersistentArrayMap.EMPTY)),null,cljs.core.cons(new cljs.core.Symbol("clojure.core","not","clojure.core/not",2621194,null),values__9152__auto___88416),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"fail","fail",1706214930),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","not","clojure.core/not",2621194,null),cljs.core.list(new cljs.core.Symbol("clojure.core","ex-info","clojure.core/ex-info",-504237117,null),"Async error - not finalized",cljs.core.PersistentArrayMap.EMPTY)),null,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol("clojure.core","not","clojure.core/not",2621194,null),values__9152__auto___88416),null,(1),null)),(2),null)),null]));
}

}catch (e87233){var t__9189__auto___88421 = e87233;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","not","clojure.core/not",2621194,null),cljs.core.list(new cljs.core.Symbol("clojure.core","ex-info","clojure.core/ex-info",-504237117,null),"Async error - not finalized",cljs.core.PersistentArrayMap.EMPTY)),null,t__9189__auto___88421,null]));
}} else {
}
}

return (done__84400__auto__.cljs$core$IFn$_invoke$arity$0 ? done__84400__auto__.cljs$core$IFn$_invoke$arity$0() : done__84400__auto__.call(null));
}));
}));

(repl_tooling.features.shadow_cljs_test.t_repl_tooling$features$shadow_cljs_test86918.prototype.apply = (function (self__,args86923){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args86923)));
}));

(repl_tooling.features.shadow_cljs_test.t_repl_tooling$features$shadow_cljs_test86918.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done__84400__auto__){
var self__ = this;
var ___9200__auto__ = this;
return promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.core.race(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [promesa.protocols._bind(null,(function (___31810__auto__){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(repl_tooling.repl_client.shadow_ws.connect_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"shadow-wrong-build","shadow-wrong-build",795501605),new cljs.core.Keyword(null,"build-id","build-id",1642831089),new cljs.core.Keyword(null,"wrong-id","wrong-id",910005835),new cljs.core.Keyword(null,"host","host",-1558485167),"localhost",new cljs.core.Keyword(null,"port","port",1534937262),cljs.core.deref(repl_tooling.features.shadow_cljs_test.port),new cljs.core.Keyword(null,"token","token",-1211463215),cljs.core.deref(repl_tooling.features.shadow_cljs_test.token)], null)),(function (repl){
return promesa.protocols._bind(null,(function (___31810__auto____$1){
return promesa.protocols._promise((function (){
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["connecting to Shadow"], 0));

try{return promesa.protocols._bind(null,(function (___31810__auto____$2){
return promesa.protocols._bind(promesa.core.delay.cljs$core$IFn$_invoke$arity$1((100)),(function (___31809__auto__){
return promesa.protocols._promise((function (){
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["evaluating results"], 0));

try{return promesa.protocols._bind(null,(function (___31810__auto____$3){
return promesa.protocols._promise(promesa.protocols._bind(null,(function (___31820__auto____$1){
return promesa.protocols._bind(promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(repl_tooling.eval.eval.cljs$core$IFn$_invoke$arity$2(repl,"(+ 1 2)"),(function (error){
return error;
})),(function (res){
return promesa.protocols._bind(null,(function (___31810__auto____$4){
return promesa.protocols._promise((function (){try{return cljs.test.do_report((function (){var lft__35783__auto__ = res;
var rgt__35784__auto__ = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.map_QMARK_,new cljs.core.Keyword(null,"as-text","as-text",-449861067),/:wrong-id/], null);
var qleft__35785__auto__ = new cljs.core.Symbol(null,"res","res",245523648,null);
var qright__35786__auto__ = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Keyword(null,"as-text","as-text",-449861067),/:wrong-id/], null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})());
}catch (e87234){var t__35810__auto__ = e87234;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.map_QMARK_,new cljs.core.Keyword(null,"as-text","as-text",-449861067),/:wrong-id/], null),new cljs.core.Keyword(null,"actual","actual",107306363),check.core.normalize_error(t__35810__auto__),new cljs.core.Keyword(null,"message","message",-406056002),["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"res","res",245523648,null))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"=>","=>",-813269641,null))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Keyword(null,"as-text","as-text",-449861067),/:wrong-id/], null))].join('')], null));
}})());
}));
}));
})));
}));
}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}})()
);
}));
}));
}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}})()
);
}));
}));
})));
})),promesa.core.delay.cljs$core$IFn$_invoke$arity$2((3000),new cljs.core.Keyword(null,"--TIMEOUT-86917","--TIMEOUT-86917",-281652937))], null)),(function (res__84401__auto__,err__84402__auto__){
repl_tooling.integrations.repls.disconnect_BANG_(new cljs.core.Keyword(null,"shadow-wrong-build","shadow-wrong-build",795501605));

if(cljs.core.truth_(err__84402__auto__)){
try{var values__9152__auto___88426 = (new cljs.core.List(null,cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Error on test result",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),err__84402__auto__], null)),null,(1),null));
var result__9153__auto___88427 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.not,values__9152__auto___88426);
if(cljs.core.truth_(result__9153__auto___88427)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"pass","pass",1574159993),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","not","clojure.core/not",2621194,null),cljs.core.list(new cljs.core.Symbol("clojure.core","ex-info","clojure.core/ex-info",-504237117,null),"Error on test result",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Symbol(null,"err__84402__auto__","err__84402__auto__",-1561524708,null)], null))),null,cljs.core.cons(new cljs.core.Symbol("clojure.core","not","clojure.core/not",2621194,null),values__9152__auto___88426),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"fail","fail",1706214930),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","not","clojure.core/not",2621194,null),cljs.core.list(new cljs.core.Symbol("clojure.core","ex-info","clojure.core/ex-info",-504237117,null),"Error on test result",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Symbol(null,"err__84402__auto__","err__84402__auto__",-1561524708,null)], null))),null,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol("clojure.core","not","clojure.core/not",2621194,null),values__9152__auto___88426),null,(1),null)),(2),null)),null]));
}

}catch (e87285){var t__9189__auto___88434 = e87285;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","not","clojure.core/not",2621194,null),cljs.core.list(new cljs.core.Symbol("clojure.core","ex-info","clojure.core/ex-info",-504237117,null),"Error on test result",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Symbol(null,"err__84402__auto__","err__84402__auto__",-1561524708,null)], null))),null,t__9189__auto___88434,null]));
}} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(res__84401__auto__,new cljs.core.Keyword(null,"--TIMEOUT-86917","--TIMEOUT-86917",-281652937))){
try{var values__9152__auto___88437 = (new cljs.core.List(null,cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Async error - not finalized",cljs.core.PersistentArrayMap.EMPTY),null,(1),null));
var result__9153__auto___88438 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.not,values__9152__auto___88437);
if(cljs.core.truth_(result__9153__auto___88438)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"pass","pass",1574159993),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","not","clojure.core/not",2621194,null),cljs.core.list(new cljs.core.Symbol("clojure.core","ex-info","clojure.core/ex-info",-504237117,null),"Async error - not finalized",cljs.core.PersistentArrayMap.EMPTY)),null,cljs.core.cons(new cljs.core.Symbol("clojure.core","not","clojure.core/not",2621194,null),values__9152__auto___88437),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"fail","fail",1706214930),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","not","clojure.core/not",2621194,null),cljs.core.list(new cljs.core.Symbol("clojure.core","ex-info","clojure.core/ex-info",-504237117,null),"Async error - not finalized",cljs.core.PersistentArrayMap.EMPTY)),null,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol("clojure.core","not","clojure.core/not",2621194,null),values__9152__auto___88437),null,(1),null)),(2),null)),null]));
}

}catch (e87290){var t__9189__auto___88442 = e87290;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","not","clojure.core/not",2621194,null),cljs.core.list(new cljs.core.Symbol("clojure.core","ex-info","clojure.core/ex-info",-504237117,null),"Async error - not finalized",cljs.core.PersistentArrayMap.EMPTY)),null,t__9189__auto___88442,null]));
}} else {
}
}

return (done__84400__auto__.cljs$core$IFn$_invoke$arity$0 ? done__84400__auto__.cljs$core$IFn$_invoke$arity$0() : done__84400__auto__.call(null));
}));
}));

(repl_tooling.features.shadow_cljs_test.t_repl_tooling$features$shadow_cljs_test86918.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta86919","meta86919",-1006582686,null)], null);
}));

(repl_tooling.features.shadow_cljs_test.t_repl_tooling$features$shadow_cljs_test86918.cljs$lang$type = true);

(repl_tooling.features.shadow_cljs_test.t_repl_tooling$features$shadow_cljs_test86918.cljs$lang$ctorStr = "repl-tooling.features.shadow-cljs-test/t_repl_tooling$features$shadow_cljs_test86918");

(repl_tooling.features.shadow_cljs_test.t_repl_tooling$features$shadow_cljs_test86918.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"repl-tooling.features.shadow-cljs-test/t_repl_tooling$features$shadow_cljs_test86918");
}));

/**
 * Positional factory function for repl-tooling.features.shadow-cljs-test/t_repl_tooling$features$shadow_cljs_test86918.
 */
repl_tooling.features.shadow_cljs_test.__GT_t_repl_tooling$features$shadow_cljs_test86918 = (function repl_tooling$features$shadow_cljs_test$__GT_t_repl_tooling$features$shadow_cljs_test86918(meta86919){
return (new repl_tooling.features.shadow_cljs_test.t_repl_tooling$features$shadow_cljs_test86918(meta86919));
});

}

return (new repl_tooling.features.shadow_cljs_test.t_repl_tooling$features$shadow_cljs_test86918(null));
});

(repl_tooling.features.shadow_cljs_test.shadow_cljs_wrong_build.cljs$lang$var = new cljs.core.Var(function(){return repl_tooling.features.shadow_cljs_test.shadow_cljs_wrong_build;},new cljs.core.Symbol("repl-tooling.features.shadow-cljs-test","shadow-cljs-wrong-build","repl-tooling.features.shadow-cljs-test/shadow-cljs-wrong-build",-1817438196,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"repl-tooling.features.shadow-cljs-test","repl-tooling.features.shadow-cljs-test",-422638750,null),new cljs.core.Symbol(null,"shadow-cljs-wrong-build","shadow-cljs-wrong-build",1389424479,null),"repl_tooling/features/shadow_cljs_test.cljs",39,1,68,68,cljs.core.List.EMPTY,null,(cljs.core.truth_(repl_tooling.features.shadow_cljs_test.shadow_cljs_wrong_build)?repl_tooling.features.shadow_cljs_test.shadow_cljs_wrong_build.cljs$lang$test:null)])));

//# sourceMappingURL=repl_tooling.features.shadow_cljs_test.js.map
