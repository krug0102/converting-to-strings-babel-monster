goog.provide('duck_repled.repl_resolvers');
duck_repled.repl_resolvers.get_right_repl = com.wsscode.pathom3.connect.operation.resolver.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol("duck-repled.repl-resolvers","get-right-repl","duck-repled.repl-resolvers/get-right-repl",1858824047,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","output","com.wsscode.pathom3.connect.operation/output",801488703),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("repl","evaluator","repl/evaluator",693013328),new cljs.core.Keyword("repl","cljs","repl/cljs",1492639726)], null),new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","input","com.wsscode.pathom3.connect.operation/input",-1553849497),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("repl","kind","repl/kind",-721172504),new cljs.core.Keyword("repl","evaluators","repl/evaluators",84539740)], null)], null),(function duck_repled$repl_resolvers$get_right_repl(_,p__160704){
var map__160705 = p__160704;
var map__160705__$1 = cljs.core.__destructure_map(map__160705);
var kind = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__160705__$1,new cljs.core.Keyword("repl","kind","repl/kind",-721172504));
var evaluators = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__160705__$1,new cljs.core.Keyword("repl","evaluators","repl/evaluators",84539740));
var map__160706 = evaluators;
var map__160706__$1 = cljs.core.__destructure_map(map__160706);
var clj = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__160706__$1,new cljs.core.Keyword(null,"clj","clj",-660495428));
var cljs__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__160706__$1,new cljs.core.Keyword(null,"cljs","cljs",1492417629));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(kind,new cljs.core.Keyword(null,"cljs","cljs",1492417629))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("repl","evaluator","repl/evaluator",693013328),clj,new cljs.core.Keyword("repl","clj","repl/clj",-655079317),clj], null);
} else {
if((clj == null)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("repl","evaluator","repl/evaluator",693013328),cljs__$1], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("repl","clj","repl/clj",-655079317),clj,new cljs.core.Keyword("repl","evaluator","repl/evaluator",693013328),cljs__$1], null);

}
}
}));

var original160699_160838 = duck_repled.repl_resolvers.get_right_repl;
var resolver160700_160839 = new cljs.core.Keyword(null,"resolve","resolve",-1584445482).cljs$core$IFn$_invoke$arity$1(original160699_160838);
var outputs160701_160840 = new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","output","com.wsscode.pathom3.connect.operation/output",801488703).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(original160699_160838));
var op160702_160841 = new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","op-name","com.wsscode.pathom3.connect.operation/op-name",-1249801049).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(original160699_160838));
(duck_repled.repl_resolvers.get_right_repl = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(original160699_160838,new cljs.core.Keyword(null,"resolve","resolve",-1584445482),(function (a__89033__auto__,b__89034__auto__){
return promesa.protocols._bind(null,(function (___56277__auto__){
return promesa.protocols._bind((resolver160700_160839.cljs$core$IFn$_invoke$arity$2 ? resolver160700_160839.cljs$core$IFn$_invoke$arity$2(a__89033__auto__,b__89034__auto__) : resolver160700_160839.call(null,a__89033__auto__,b__89034__auto__)),(function (result__89035__auto__){
return promesa.protocols._bind(null,(function (___56267__auto__){
return promesa.protocols._promise((cljs.core.truth_(result__89035__auto__)?duck_repled.schemas.validate_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.keys(result__89035__auto__),result__89035__auto__,["Invalid schema on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(op160702_160841)," outputing ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(outputs160701_160840)].join('')):null));
}));
}));
}));
})));
duck_repled.repl_resolvers.repl_eval = com.wsscode.pathom3.connect.operation.resolver.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol("duck-repled.repl-resolvers","repl-eval","duck-repled.repl-resolvers/repl-eval",1152494268,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","input","com.wsscode.pathom3.connect.operation/input",-1553849497),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("repl","evaluator","repl/evaluator",693013328),new cljs.core.Keyword("text","contents","text/contents",-1566533716),com.wsscode.pathom3.connect.operation._QMARK_(new cljs.core.Keyword("editor","filename","editor/filename",1561957414)),com.wsscode.pathom3.connect.operation._QMARK_(new cljs.core.Keyword("repl","namespace","repl/namespace",-380958069)),com.wsscode.pathom3.connect.operation._QMARK_(new cljs.core.Keyword("text","range","text/range",1644551777))], null),new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","output","com.wsscode.pathom3.connect.operation/output",801488703),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("repl","result","repl/result",1421065572),new cljs.core.Keyword("repl","error","repl/error",-985152889)], null)], null),(function duck_repled$repl_resolvers$repl_eval(env,p__160723){
var map__160725 = p__160723;
var map__160725__$1 = cljs.core.__destructure_map(map__160725);
var evaluator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__160725__$1,new cljs.core.Keyword("repl","evaluator","repl/evaluator",693013328));
var namespace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__160725__$1,new cljs.core.Keyword("repl","namespace","repl/namespace",-380958069));
var contents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__160725__$1,new cljs.core.Keyword("text","contents","text/contents",-1566533716));
var range = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__160725__$1,new cljs.core.Keyword("text","range","text/range",1644551777));
var filename = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__160725__$1,new cljs.core.Keyword("editor","filename","editor/filename",1561957414));
return promesa.protocols._bind(null,(function (___56277__auto__){
return promesa.protocols._bind(com.wsscode.pathom3.connect.operation.params(env),(function (params){
return promesa.protocols._bind((function (){var G__160726 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(params,new cljs.core.Keyword("repl","template","repl/template",-731412419));
var G__160726__$1 = (cljs.core.truth_(namespace)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__160726,new cljs.core.Keyword(null,"namespace","namespace",-377510372),namespace):G__160726);
var G__160726__$2 = (cljs.core.truth_(filename)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__160726__$1,new cljs.core.Keyword(null,"filename","filename",-1428840783),filename):G__160726__$1);
if(cljs.core.truth_(range)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__160726__$2,new cljs.core.Keyword(null,"row","row",-570139521),(function (p1__160713_SHARP_){
var or__4223__auto__ = p1__160713_SHARP_;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.first(cljs.core.first(range));
}
})),new cljs.core.Keyword(null,"col","col",-1959363084),(function (p1__160714_SHARP_){
var or__4223__auto__ = p1__160714_SHARP_;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.second(cljs.core.first(range));
}
}));
} else {
return G__160726__$2;
}
})(),(function (opts){
return promesa.protocols._bind((function (){var temp__5751__auto__ = new cljs.core.Keyword("repl","template","repl/template",-731412419).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(temp__5751__auto__)){
var t = temp__5751__auto__;
return duck_repled.template.template(t,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("repl","code","repl/code",-1648869881),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(contents)], null));
} else {
return contents;
}
})(),(function (code){
return promesa.protocols._bind(duck_repled.repl_protocol.eval.cljs$core$IFn$_invoke$arity$3(evaluator,code,opts),(function (result){
return promesa.protocols._bind(null,(function (___56267__auto__){
return promesa.protocols._promise((cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(result))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("repl","error","repl/error",-985152889),result], null):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("repl","result","repl/result",1421065572),result], null)));
}));
}));
}));
}));
}));
}));
}));

var original160716_160845 = duck_repled.repl_resolvers.repl_eval;
var resolver160717_160846 = new cljs.core.Keyword(null,"resolve","resolve",-1584445482).cljs$core$IFn$_invoke$arity$1(original160716_160845);
var outputs160718_160847 = new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","output","com.wsscode.pathom3.connect.operation/output",801488703).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(original160716_160845));
var op160719_160848 = new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","op-name","com.wsscode.pathom3.connect.operation/op-name",-1249801049).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(original160716_160845));
(duck_repled.repl_resolvers.repl_eval = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(original160716_160845,new cljs.core.Keyword(null,"resolve","resolve",-1584445482),(function (a__89033__auto__,b__89034__auto__){
return promesa.protocols._bind(null,(function (___56277__auto__){
return promesa.protocols._bind((resolver160717_160846.cljs$core$IFn$_invoke$arity$2 ? resolver160717_160846.cljs$core$IFn$_invoke$arity$2(a__89033__auto__,b__89034__auto__) : resolver160717_160846.call(null,a__89033__auto__,b__89034__auto__)),(function (result__89035__auto__){
return promesa.protocols._bind(null,(function (___56267__auto__){
return promesa.protocols._promise((cljs.core.truth_(result__89035__auto__)?duck_repled.schemas.validate_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.keys(result__89035__auto__),result__89035__auto__,["Invalid schema on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(op160719_160848)," outputing ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(outputs160718_160847)].join('')):null));
}));
}));
}));
})));
duck_repled.repl_resolvers.extract_right_var = (function duck_repled$repl_resolvers$extract_right_var(current_var,contents){
var contents__$1 = (function (){var or__4223__auto__ = new cljs.core.Keyword("text","contents","text/contents",-1566533716).cljs$core$IFn$_invoke$arity$1(current_var);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return contents;
}
})();
var vec__160733 = duck_repled.editor_helpers.current_var(cljs.core.str.cljs$core$IFn$_invoke$arity$1(contents__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__160733,(0),null);
var var$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__160733,(1),null);
if(cljs.core.truth_((function (){var and__4221__auto__ = var$;
if(cljs.core.truth_(and__4221__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(var$,contents__$1);
} else {
return and__4221__auto__;
}
})())){
return contents__$1;
} else {
return null;
}
});
duck_repled.repl_resolvers.fqn_var = com.wsscode.pathom3.connect.operation.resolver.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol("duck-repled.repl-resolvers","fqn-var","duck-repled.repl-resolvers/fqn-var",963833659,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","input","com.wsscode.pathom3.connect.operation/input",-1553849497),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("repl","namespace","repl/namespace",-380958069),new cljs.core.Keyword("repl","evaluator","repl/evaluator",693013328),com.wsscode.pathom3.connect.operation._QMARK_(new cljs.core.Keyword("text","current-var","text/current-var",1432933099)),com.wsscode.pathom3.connect.operation._QMARK_(new cljs.core.Keyword("text","contents","text/contents",-1566533716))], null),new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","output","com.wsscode.pathom3.connect.operation/output",801488703),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("var","fqn","var/fqn",905054513)], null)], null),(function duck_repled$repl_resolvers$fqn_var(_,p__160744){
var map__160745 = p__160744;
var map__160745__$1 = cljs.core.__destructure_map(map__160745);
var namespace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__160745__$1,new cljs.core.Keyword("repl","namespace","repl/namespace",-380958069));
var current_var = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__160745__$1,new cljs.core.Keyword("text","current-var","text/current-var",1432933099));
var contents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__160745__$1,new cljs.core.Keyword("text","contents","text/contents",-1566533716));
var evaluator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__160745__$1,new cljs.core.Keyword("repl","evaluator","repl/evaluator",693013328));
var temp__5753__auto__ = duck_repled.repl_resolvers.extract_right_var(current_var,contents);
if(cljs.core.truth_(temp__5753__auto__)){
var contents__$1 = temp__5753__auto__;
return promesa.protocols._bind(null,(function (___56277__auto__){
return promesa.protocols._bind(duck_repled.repl_protocol.eval.cljs$core$IFn$_invoke$arity$3(evaluator,["`",cljs.core.str.cljs$core$IFn$_invoke$arity$1(contents__$1)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),cljs.core.str.cljs$core$IFn$_invoke$arity$1(namespace)], null)),(function (p__160746){
var map__160751 = p__160746;
var map__160751__$1 = cljs.core.__destructure_map(map__160751);
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__160751__$1,new cljs.core.Keyword(null,"result","result",1415092211));
return promesa.protocols._bind(null,(function (___56267__auto__){
return promesa.protocols._promise(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("var","fqn","var/fqn",905054513),result], null));
}));
}));
}));
} else {
return null;
}
}));

var original160736_160849 = duck_repled.repl_resolvers.fqn_var;
var resolver160737_160850 = new cljs.core.Keyword(null,"resolve","resolve",-1584445482).cljs$core$IFn$_invoke$arity$1(original160736_160849);
var outputs160738_160851 = new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","output","com.wsscode.pathom3.connect.operation/output",801488703).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(original160736_160849));
var op160739_160852 = new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","op-name","com.wsscode.pathom3.connect.operation/op-name",-1249801049).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(original160736_160849));
(duck_repled.repl_resolvers.fqn_var = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(original160736_160849,new cljs.core.Keyword(null,"resolve","resolve",-1584445482),(function (a__89033__auto__,b__89034__auto__){
return promesa.protocols._bind(null,(function (___56277__auto__){
return promesa.protocols._bind((resolver160737_160850.cljs$core$IFn$_invoke$arity$2 ? resolver160737_160850.cljs$core$IFn$_invoke$arity$2(a__89033__auto__,b__89034__auto__) : resolver160737_160850.call(null,a__89033__auto__,b__89034__auto__)),(function (result__89035__auto__){
return promesa.protocols._bind(null,(function (___56267__auto__){
return promesa.protocols._promise((cljs.core.truth_(result__89035__auto__)?duck_repled.schemas.validate_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.keys(result__89035__auto__),result__89035__auto__,["Invalid schema on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(op160739_160852)," outputing ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(outputs160738_160851)].join('')):null));
}));
}));
}));
})));
duck_repled.repl_resolvers.eval_for_meta = (function duck_repled$repl_resolvers$eval_for_meta(evaluator,var_name,namespace){
return promesa.protocols._bind(null,(function (___56277__auto__){
return promesa.protocols._bind(duck_repled.repl_protocol.eval.cljs$core$IFn$_invoke$arity$3(evaluator,duck_repled.template.template(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","meta","cljs.core/meta",-748218346,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword("duck-repled.repl-resolvers","current-var","duck-repled.repl-resolvers/current-var",-935032519),null,(1),null))))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("duck-repled.repl-resolvers","current-var","duck-repled.repl-resolvers/current-var",-935032519),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["#'",cljs.core.str.cljs$core$IFn$_invoke$arity$1(var_name)].join(''))], null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),cljs.core.str.cljs$core$IFn$_invoke$arity$1(namespace)], null)),(function (p__160760){
var map__160761 = p__160760;
var map__160761__$1 = cljs.core.__destructure_map(map__160761);
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__160761__$1,new cljs.core.Keyword(null,"result","result",1415092211));
return promesa.protocols._bind(null,(function (___56267__auto__){
return promesa.protocols._promise((cljs.core.truth_(result)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("var","meta","var/meta",1499588507),result], null):null));
}));
}));
}));
});
duck_repled.repl_resolvers.meta_for_var = com.wsscode.pathom3.connect.operation.resolver.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol("duck-repled.repl-resolvers","meta-for-var","duck-repled.repl-resolvers/meta-for-var",1611192965,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","input","com.wsscode.pathom3.connect.operation/input",-1553849497),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("repl","namespace","repl/namespace",-380958069),new cljs.core.Keyword("repl","evaluator","repl/evaluator",693013328),com.wsscode.pathom3.connect.operation._QMARK_(new cljs.core.Keyword("text","current-var","text/current-var",1432933099)),com.wsscode.pathom3.connect.operation._QMARK_(new cljs.core.Keyword("text","contents","text/contents",-1566533716)),com.wsscode.pathom3.connect.operation._QMARK_(new cljs.core.Keyword("config","repl-kind","config/repl-kind",1937588875))], null),new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","output","com.wsscode.pathom3.connect.operation/output",801488703),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("var","meta","var/meta",1499588507)], null),new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","priority","com.wsscode.pathom3.connect.operation/priority",-813904543),(1)], null),(function duck_repled$repl_resolvers$meta_for_var(_,p__160771){
var map__160772 = p__160771;
var map__160772__$1 = cljs.core.__destructure_map(map__160772);
var namespace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__160772__$1,new cljs.core.Keyword("repl","namespace","repl/namespace",-380958069));
var evaluator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__160772__$1,new cljs.core.Keyword("repl","evaluator","repl/evaluator",693013328));
var repl_kind = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__160772__$1,new cljs.core.Keyword("config","repl-kind","config/repl-kind",1937588875));
var current_var = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__160772__$1,new cljs.core.Keyword("text","current-var","text/current-var",1432933099));
var contents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__160772__$1,new cljs.core.Keyword("text","contents","text/contents",-1566533716));
var temp__5753__auto__ = duck_repled.repl_resolvers.extract_right_var(current_var,contents);
if(cljs.core.truth_(temp__5753__auto__)){
var contents__$1 = temp__5753__auto__;
return promesa.protocols._bind(null,(function (___56277__auto__){
return promesa.protocols._bind(duck_repled.repl_resolvers.eval_for_meta(evaluator,contents__$1,namespace),(function (meta){
return promesa.protocols._bind(null,(function (___56267__auto__){
return promesa.protocols._promise(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"clje","clje",184731695),repl_kind))?clojure.walk.postwalk((function (p1__160766_SHARP_){
var G__160777 = p1__160766_SHARP_;
if(((cljs.core.tagged_literal_QMARK_(p1__160766_SHARP_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__160766_SHARP_.tag,new cljs.core.Symbol(null,"erl","erl",383525232,null))))){
return G__160777.form;
} else {
return G__160777;
}
}),meta):meta));
}));
}));
}));
} else {
return null;
}
}));

var original160767_160853 = duck_repled.repl_resolvers.meta_for_var;
var resolver160768_160854 = new cljs.core.Keyword(null,"resolve","resolve",-1584445482).cljs$core$IFn$_invoke$arity$1(original160767_160853);
var outputs160769_160855 = new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","output","com.wsscode.pathom3.connect.operation/output",801488703).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(original160767_160853));
var op160770_160856 = new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","op-name","com.wsscode.pathom3.connect.operation/op-name",-1249801049).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(original160767_160853));
(duck_repled.repl_resolvers.meta_for_var = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(original160767_160853,new cljs.core.Keyword(null,"resolve","resolve",-1584445482),(function (a__89033__auto__,b__89034__auto__){
return promesa.protocols._bind(null,(function (___56277__auto__){
return promesa.protocols._bind((resolver160768_160854.cljs$core$IFn$_invoke$arity$2 ? resolver160768_160854.cljs$core$IFn$_invoke$arity$2(a__89033__auto__,b__89034__auto__) : resolver160768_160854.call(null,a__89033__auto__,b__89034__auto__)),(function (result__89035__auto__){
return promesa.protocols._bind(null,(function (___56267__auto__){
return promesa.protocols._promise((cljs.core.truth_(result__89035__auto__)?duck_repled.schemas.validate_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.keys(result__89035__auto__),result__89035__auto__,["Invalid schema on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(op160770_160856)," outputing ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(outputs160769_160855)].join('')):null));
}));
}));
}));
})));
duck_repled.repl_resolvers.meta_for_clj_var = com.wsscode.pathom3.connect.operation.resolver.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol("duck-repled.repl-resolvers","meta-for-clj-var","duck-repled.repl-resolvers/meta-for-clj-var",-1721167074,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","output","com.wsscode.pathom3.connect.operation/output",801488703),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("var","meta","var/meta",1499588507)], null),new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","input","com.wsscode.pathom3.connect.operation/input",-1553849497),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("var","fqn","var/fqn",905054513),new cljs.core.Keyword("repl","clj","repl/clj",-655079317),new cljs.core.Keyword("repl","kind","repl/kind",-721172504)], null)], null),(function duck_repled$repl_resolvers$meta_for_clj_var(_,p__160790){
var map__160791 = p__160790;
var map__160791__$1 = cljs.core.__destructure_map(map__160791);
var fqn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__160791__$1,new cljs.core.Keyword("var","fqn","var/fqn",905054513));
var clj = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__160791__$1,new cljs.core.Keyword("repl","clj","repl/clj",-655079317));
var kind = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__160791__$1,new cljs.core.Keyword("repl","kind","repl/kind",-721172504));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cljs","cljs",1492417629),kind)){
return duck_repled.repl_resolvers.eval_for_meta(clj,fqn,new cljs.core.Symbol(null,"user","user",-1122004413,null));
} else {
return null;
}
}));

var original160786_160857 = duck_repled.repl_resolvers.meta_for_clj_var;
var resolver160787_160858 = new cljs.core.Keyword(null,"resolve","resolve",-1584445482).cljs$core$IFn$_invoke$arity$1(original160786_160857);
var outputs160788_160859 = new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","output","com.wsscode.pathom3.connect.operation/output",801488703).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(original160786_160857));
var op160789_160860 = new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","op-name","com.wsscode.pathom3.connect.operation/op-name",-1249801049).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(original160786_160857));
(duck_repled.repl_resolvers.meta_for_clj_var = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(original160786_160857,new cljs.core.Keyword(null,"resolve","resolve",-1584445482),(function (a__89033__auto__,b__89034__auto__){
return promesa.protocols._bind(null,(function (___56277__auto__){
return promesa.protocols._bind((resolver160787_160858.cljs$core$IFn$_invoke$arity$2 ? resolver160787_160858.cljs$core$IFn$_invoke$arity$2(a__89033__auto__,b__89034__auto__) : resolver160787_160858.call(null,a__89033__auto__,b__89034__auto__)),(function (result__89035__auto__){
return promesa.protocols._bind(null,(function (___56267__auto__){
return promesa.protocols._promise((cljs.core.truth_(result__89035__auto__)?duck_repled.schemas.validate_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.keys(result__89035__auto__),result__89035__auto__,["Invalid schema on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(op160789_160860)," outputing ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(outputs160788_160859)].join('')):null));
}));
}));
}));
})));
duck_repled.repl_resolvers.spec_for_var = com.wsscode.pathom3.connect.operation.resolver.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol("duck-repled.repl-resolvers","spec-for-var","duck-repled.repl-resolvers/spec-for-var",1801331088,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","output","com.wsscode.pathom3.connect.operation/output",801488703),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("var","spec","var/spec",346621034)], null),new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","input","com.wsscode.pathom3.connect.operation/input",-1553849497),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("var","fqn","var/fqn",905054513),new cljs.core.Keyword("repl","evaluator","repl/evaluator",693013328)], null)], null),(function duck_repled$repl_resolvers$spec_for_var(_,p__160805){
var map__160806 = p__160805;
var map__160806__$1 = cljs.core.__destructure_map(map__160806);
var fqn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__160806__$1,new cljs.core.Keyword("var","fqn","var/fqn",905054513));
var evaluator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__160806__$1,new cljs.core.Keyword("repl","evaluator","repl/evaluator",693013328));
return promesa.protocols._bind(null,(function (___56277__auto__){
return promesa.protocols._bind(duck_repled.repl_protocol.eval.cljs$core$IFn$_invoke$arity$2(evaluator,"(require 'clojure.spec.alpha)"),(function (res){
return promesa.protocols._bind(null,(function (___56267__auto__){
return promesa.protocols._promise((cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res))?null:promesa.protocols._bind(null,(function (___56277__auto____$1){
return promesa.protocols._bind(duck_repled.repl_protocol.eval.cljs$core$IFn$_invoke$arity$2(evaluator,duck_repled.template.template(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"s__160802__auto__","s__160802__auto__",9276608,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("clojure.spec.alpha","get-spec","clojure.spec.alpha/get-spec",1733940227,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword("duck-repled.repl-resolvers","fqn","duck-repled.repl-resolvers/fqn",-1056377499),null,(1),null))))),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"fun__160803__auto__","fun__160803__auto__",1188201908,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"p1__160797__160804__auto__","p1__160797__160804__auto__",699869931,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","some->>","cljs.core/some->>",-244881963,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"p1__160797__160804__auto__","p1__160797__160804__auto__",699869931,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("duck-repled.repl-resolvers","s","duck-repled.repl-resolvers/s",1380781680,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol("clojure.spec.alpha","describe","clojure.spec.alpha/describe",92648296,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__160802__auto__","s__160802__auto__",9276608,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","->>","cljs.core/->>",-1207871206,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"args","args",1315556576),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"ret","ret",-468222814),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","map","cljs.core/map",-338988913,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","juxt","cljs.core/juxt",263800975,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","identity","cljs.core/identity",725118887,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"fun__160803__auto__","fun__160803__auto__",1188201908,null),null,(1),null))], 0)))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","filter","cljs.core/filter",-251894204,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","second","cljs.core/second",520555958,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","into","cljs.core/into",1879938733,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("duck-repled.repl-resolvers","fqn","duck-repled.repl-resolvers/fqn",-1056377499),fqn], null))),(function (p__160821){
var map__160822 = p__160821;
var map__160822__$1 = cljs.core.__destructure_map(map__160822);
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__160822__$1,new cljs.core.Keyword(null,"result","result",1415092211));
return promesa.protocols._bind(null,(function (___56267__auto____$1){
return promesa.protocols._promise((cljs.core.truth_(result)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("var","spec","var/spec",346621034),result], null):null));
}));
}));
}))));
}));
}));
}));
}));
duck_repled.repl_resolvers.doc_for_var = com.wsscode.pathom3.connect.operation.resolver.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol("duck-repled.repl-resolvers","doc-for-var","duck-repled.repl-resolvers/doc-for-var",-716301980,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","input","com.wsscode.pathom3.connect.operation/input",-1553849497),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("var","fqn","var/fqn",905054513),new cljs.core.Keyword("var","meta","var/meta",1499588507),com.wsscode.pathom3.connect.operation._QMARK_(new cljs.core.Keyword("var","spec","var/spec",346621034))], null),new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","output","com.wsscode.pathom3.connect.operation/output",801488703),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("var","doc","var/doc",1913167972)], null)], null),(function duck_repled$repl_resolvers$doc_for_var(_,p__160828){
var map__160829 = p__160828;
var map__160829__$1 = cljs.core.__destructure_map(map__160829);
var fqn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__160829__$1,new cljs.core.Keyword("var","fqn","var/fqn",905054513));
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__160829__$1,new cljs.core.Keyword("var","meta","var/meta",1499588507));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__160829__$1,new cljs.core.Keyword("var","spec","var/spec",346621034));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("var","doc","var/doc",1913167972),["-------------------------\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fqn),"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(meta)),"\n  ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(meta)),((cljs.core.map_QMARK_(spec))?(function (){var G__160833 = "\nSpec\n";
var G__160833__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(spec))?[G__160833,"  args: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(spec)], 0)),"\n"].join(''):G__160833);
var G__160833__$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(spec))?[G__160833__$1,"  ret: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(spec)], 0)),"\n"].join(''):G__160833__$1);
if(cljs.core.truth_(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(spec))){
return [G__160833__$2,"  fn: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(spec)], 0))].join('');
} else {
return G__160833__$2;
}
})():null)].join('')], null);
}));
duck_repled.repl_resolvers.resolvers = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [duck_repled.repl_resolvers.get_right_repl,duck_repled.repl_resolvers.repl_eval,duck_repled.repl_resolvers.fqn_var,duck_repled.repl_resolvers.meta_for_var,duck_repled.repl_resolvers.meta_for_clj_var,duck_repled.repl_resolvers.spec_for_var,duck_repled.repl_resolvers.doc_for_var], null);

//# sourceMappingURL=duck_repled.repl_resolvers.js.map
