goog.provide('repl_tooling.integrations.connection');
repl_tooling.integrations.connection.treat_result = (function repl_tooling$integrations$connection$treat_result(id,ret){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(ret))){
repl_tooling.integrations.repls.disconnect_BANG_(id);

return ret;
} else {
var success = promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(repl_tooling.eval.eval.cljs$core$IFn$_invoke$arity$3(ret,"(/ 10 0)",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ignore","ignore",-1631542033),true], null)),(function (p__140124){
var map__140125 = p__140124;
var map__140125__$1 = cljs.core.__destructure_map(map__140125);
var as_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__140125__$1,new cljs.core.Keyword(null,"as-text","as-text",-449861067));
return promesa.protocols._bind(null,(function (___31810__auto__){
return promesa.protocols._promise(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(as_text,"##Inf"))?ret:(function (){
repl_tooling.integrations.repls.disconnect_BANG_(id);

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"unknown","unknown",-935977881)], null);
})()
));
}));
}));
}));
var delay = promesa.core.delay.cljs$core$IFn$_invoke$arity$2((4000),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"timeout-runtime","timeout-runtime",148844680)], null));
return promesa.core.race(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [success,delay], null));
}
});
/**
 * Given a host, port, and a clojure command, connects on a Clojure REPL,
 * runs the command to change it to CLJS, and returns an evaluator for CLJS.
 */
repl_tooling.integrations.connection.connect_self_hosted_BANG_ = (function repl_tooling$integrations$connection$connect_self_hosted_BANG_(p__140130){
var map__140132 = p__140130;
var map__140132__$1 = cljs.core.__destructure_map(map__140132);
var identifier = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__140132__$1,new cljs.core.Keyword(null,"identifier","identifier",-805503498),new cljs.core.Keyword(null,"cljs-eval","cljs-eval",1860675817));
var host = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__140132__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
var port = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__140132__$1,new cljs.core.Keyword(null,"port","port",1534937262));
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__140132__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var on_result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__140132__$1,new cljs.core.Keyword(null,"on-result","on-result",-1034982142));
var on_stdout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__140132__$1,new cljs.core.Keyword(null,"on-stdout","on-stdout",1480958368));
return promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind((new cljs.core.Delay((function (){
return repl_tooling.integrations.repls.connect_repl_BANG_(identifier,host,port,(function (res){
if(((cljs.core.contains_QMARK_(res,new cljs.core.Keyword(null,"result","result",1415092211))) || (cljs.core.contains_QMARK_(res,new cljs.core.Keyword(null,"error","error",-978969032))))){
var G__140136 = repl_tooling.editor_helpers.parse_result(res);
return (on_result.cljs$core$IFn$_invoke$arity$1 ? on_result.cljs$core$IFn$_invoke$arity$1(G__140136) : on_result.call(null,G__140136));
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"out","out",-910545517).cljs$core$IFn$_invoke$arity$1(res))){
var G__140137 = new cljs.core.Keyword(null,"out","out",-910545517).cljs$core$IFn$_invoke$arity$1(res);
return (on_stdout.cljs$core$IFn$_invoke$arity$1 ? on_stdout.cljs$core$IFn$_invoke$arity$1(G__140137) : on_stdout.call(null,G__140137));
} else {
return null;
}
}
}));
}),null)),(function (repl_info){
return promesa.protocols._bind(null,(function (___31810__auto__){
return promesa.protocols._promise((cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(code))?code:promesa.protocols._bind(null,(function (___31820__auto____$1){
return promesa.protocols._bind(cljs.core.deref(repl_info),(function (repl_info__$1){
return promesa.protocols._bind(repl_info__$1,(function (p__140143){
var vec__140144 = p__140143;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__140144,(0),null);
var clj_repl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__140144,(1),null);
return promesa.protocols._bind(repl_tooling.repl_client.clojure.self_host(clj_repl,code),(function (self_hosted){
return promesa.protocols._bind(null,(function (___31810__auto____$1){
return promesa.protocols._promise(repl_tooling.integrations.connection.treat_result(identifier,self_hosted));
}));
}));
}));
}));
}))));
}));
}));
}));
});
repl_tooling.integrations.connection.connect_shadow_ws_BANG_ = (function repl_tooling$integrations$connection$connect_shadow_ws_BANG_(p__140154){
var map__140156 = p__140154;
var map__140156__$1 = cljs.core.__destructure_map(map__140156);
var on_stdout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__140156__$1,new cljs.core.Keyword(null,"on-stdout","on-stdout",1480958368));
var compile_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__140156__$1,new cljs.core.Keyword(null,"compile-error","compile-error",-1313154526));
var on_start_eval = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__140156__$1,new cljs.core.Keyword(null,"on-start-eval","on-start-eval",-560475418));
var on_stderr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__140156__$1,new cljs.core.Keyword(null,"on-stderr","on-stderr",1583456038));
var on_patch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__140156__$1,new cljs.core.Keyword(null,"on-patch","on-patch",-455422584));
var on_eval = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__140156__$1,new cljs.core.Keyword(null,"on-eval","on-eval",-1349336659));
var build_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__140156__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
var directories = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__140156__$1,new cljs.core.Keyword(null,"directories","directories",-900278123));
var identifier = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__140156__$1,new cljs.core.Keyword(null,"identifier","identifier",-805503498),new cljs.core.Keyword(null,"cljs-eval","cljs-eval",1860675817));
var host = "localhost";
var dir = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__140151_SHARP_){
return shadow.js.shim.module$fs.existsSync(shadow.js.shim.module$path.join(p1__140151_SHARP_,".shadow-cljs","server.token"));
}),directories));
var port_file = (cljs.core.truth_(shadow.js.shim.module$fs.existsSync(shadow.js.shim.module$path.join(dir,".shadow-cljs","https-port.port")))?"https-port.port":"http.port");
var port = parseInt(cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.js.shim.module$fs.readFileSync(shadow.js.shim.module$path.join(dir,".shadow-cljs",port_file))));
var token = cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.js.shim.module$fs.readFileSync(shadow.js.shim.module$path.join(dir,".shadow-cljs","server.token")));
var on_output = (function (res){
if(cljs.core.truth_(new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(res))){
var res__$1 = new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(res);
var G__140202_140223 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(res__$1,new cljs.core.Keyword(null,"result","result",1415092211));
(on_start_eval.cljs$core$IFn$_invoke$arity$1 ? on_start_eval.cljs$core$IFn$_invoke$arity$1(G__140202_140223) : on_start_eval.call(null,G__140202_140223));

var G__140203 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(res__$1,new cljs.core.Keyword(null,"result","result",1415092211),repl_tooling.editor_helpers.parse_result),new cljs.core.Keyword(null,"repl","repl",-35398667),null);
return (on_eval.cljs$core$IFn$_invoke$arity$1 ? on_eval.cljs$core$IFn$_invoke$arity$1(G__140203) : on_eval.call(null,G__140203));
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"out","out",-910545517).cljs$core$IFn$_invoke$arity$1(res))){
var G__140206 = new cljs.core.Keyword(null,"out","out",-910545517).cljs$core$IFn$_invoke$arity$1(res);
return (on_stdout.cljs$core$IFn$_invoke$arity$1 ? on_stdout.cljs$core$IFn$_invoke$arity$1(G__140206) : on_stdout.call(null,G__140206));
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"err","err",-2089457205).cljs$core$IFn$_invoke$arity$1(res))){
var G__140208 = new cljs.core.Keyword(null,"err","err",-2089457205).cljs$core$IFn$_invoke$arity$1(res);
return (on_stderr.cljs$core$IFn$_invoke$arity$1 ? on_stderr.cljs$core$IFn$_invoke$arity$1(G__140208) : on_stderr.call(null,G__140208));
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"compile-err","compile-err",319516808).cljs$core$IFn$_invoke$arity$1(res))){
var G__140210 = new cljs.core.Keyword(null,"compile-err","compile-err",319516808).cljs$core$IFn$_invoke$arity$1(res);
return (compile_error.cljs$core$IFn$_invoke$arity$1 ? compile_error.cljs$core$IFn$_invoke$arity$1(G__140210) : compile_error.call(null,G__140210));
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"patch","patch",380775109).cljs$core$IFn$_invoke$arity$1(res))){
var G__140211 = new cljs.core.Keyword(null,"patch","patch",380775109).cljs$core$IFn$_invoke$arity$1(res);
return (on_patch.cljs$core$IFn$_invoke$arity$1 ? on_patch.cljs$core$IFn$_invoke$arity$1(G__140211) : on_patch.call(null,G__140211));
} else {
return null;
}
}
}
}
}
});
return repl_tooling.repl_client.shadow_ws.connect_BANG_(new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),identifier,new cljs.core.Keyword(null,"build-id","build-id",1642831089),build_id,new cljs.core.Keyword(null,"host","host",-1558485167),host,new cljs.core.Keyword(null,"port","port",1534937262),port,new cljs.core.Keyword(null,"token","token",-1211463215),token,new cljs.core.Keyword(null,"on-output","on-output",-2023300495),on_output,new cljs.core.Keyword(null,"ssl?","ssl?",1502872597),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(port_file,"https-port.port")], null));
});

//# sourceMappingURL=repl_tooling.integrations.connection.js.map
