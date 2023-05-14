goog.provide('repl_tooling.editor_integration.connection');
/**
 * Disconnect all REPLs. Indempotent.
 */
repl_tooling.editor_integration.connection.disconnect_BANG_ = (function repl_tooling$editor_integration$connection$disconnect_BANG_(){
repl_tooling.integrations.repls.disconnect_BANG_(new cljs.core.Keyword(null,"clj-eval","clj-eval",-1090238509));

repl_tooling.integrations.repls.disconnect_BANG_(new cljs.core.Keyword(null,"clj-aux","clj-aux",-1228071979));

repl_tooling.integrations.repls.disconnect_BANG_(new cljs.core.Keyword(null,"cljs-aux","cljs-aux",-1599754418));

return repl_tooling.integrations.repls.disconnect_BANG_(new cljs.core.Keyword(null,"cljs-eval","cljs-eval",1860675817));
});
repl_tooling.editor_integration.connection.features_for = (function repl_tooling$editor_integration$connection$features_for(state,p__147075,_repl_kind){
var map__147076 = p__147075;
var map__147076__$1 = cljs.core.__destructure_map(map__147076);
var opts = map__147076__$1;
var editor_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__147076__$1,new cljs.core.Keyword(null,"editor-data","editor-data",-2084300305));
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"eval-and-render","eval-and-render",-58898623),new cljs.core.Keyword(null,"get-full-var-name","get-full-var-name",167996546),new cljs.core.Keyword(null,"get-code","get-code",619118884),new cljs.core.Keyword(null,"repl-for","repl-for",1424925162),new cljs.core.Keyword(null,"evaluate-and-render","evaluate-and-render",482317356),new cljs.core.Keyword(null,"go-to-var-definition","go-to-var-definition",-956809838),new cljs.core.Keyword(null,"autocomplete","autocomplete",1041133913),new cljs.core.Keyword(null,"result-for-renderer","result-for-renderer",-118580804),new cljs.core.Keyword(null,"eql","eql",1414892383),new cljs.core.Keyword(null,"eval","eval",-1103567905)],[(function() {
var repl_tooling$editor_integration$connection$features_for_$_eval_and_render = null;
var repl_tooling$editor_integration$connection$features_for_$_eval_and_render__2 = (function (code,range){
return repl_tooling$editor_integration$connection$features_for_$_eval_and_render.cljs$core$IFn$_invoke$arity$3(code,range,null);
});
var repl_tooling$editor_integration$connection$features_for_$_eval_and_render__3 = (function (code,range,pass){
return promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind((editor_data.cljs$core$IFn$_invoke$arity$0 ? editor_data.cljs$core$IFn$_invoke$arity$0() : editor_data.call(null)),(function (data){
return promesa.protocols._bind(null,(function (___31810__auto__){
return promesa.protocols._promise(repl_tooling.commands_to_repl.all_cmds.eval_range(state,data,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"pass","pass",1574159993),pass),cljs.core.constantly(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [range,code], null))));
}));
}));
}));
});
repl_tooling$editor_integration$connection$features_for_$_eval_and_render = function(code,range,pass){
switch(arguments.length){
case 2:
return repl_tooling$editor_integration$connection$features_for_$_eval_and_render__2.call(this,code,range);
case 3:
return repl_tooling$editor_integration$connection$features_for_$_eval_and_render__3.call(this,code,range,pass);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
repl_tooling$editor_integration$connection$features_for_$_eval_and_render.cljs$core$IFn$_invoke$arity$2 = repl_tooling$editor_integration$connection$features_for_$_eval_and_render__2;
repl_tooling$editor_integration$connection$features_for_$_eval_and_render.cljs$core$IFn$_invoke$arity$3 = repl_tooling$editor_integration$connection$features_for_$_eval_and_render__3;
return repl_tooling$editor_integration$connection$features_for_$_eval_and_render;
})()
,(function (){
return repl_tooling.commands_to_repl.all_cmds.fqn_for_var(state);
}),(function (p1__147071_SHARP_){
return repl_tooling.editor_integration.evaluation.get_code(state,p1__147071_SHARP_);
}),(function (p1__147072_SHARP_,p2__147073_SHARP_){
return repl_tooling.editor_integration.evaluation.repl_for(state,p1__147072_SHARP_,p2__147073_SHARP_);
}),(function (options){
return promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind((editor_data.cljs$core$IFn$_invoke$arity$0 ? editor_data.cljs$core$IFn$_invoke$arity$0() : editor_data.call(null)),(function (data){
return promesa.protocols._bind(options,(function (p__147083){
var map__147084 = p__147083;
var map__147084__$1 = cljs.core.__destructure_map(map__147084);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__147084__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var range = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__147084__$1,new cljs.core.Keyword(null,"range","range",1639692286));
return promesa.protocols._bind(null,(function (___31810__auto__){
return promesa.protocols._promise(repl_tooling.commands_to_repl.all_cmds.eval_range(state,data,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(options,new cljs.core.Keyword(null,"text","text",-1790561697),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"range","range",1639692286)], 0)),cljs.core.constantly(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [range,text], null))));
}));
}));
}));
}));
}),(function (p1__147069_SHARP_){
return repl_tooling.editor_integration.definition.goto_definition(state,p1__147069_SHARP_);
}),(function (){
return promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind((editor_data.cljs$core$IFn$_invoke$arity$0 ? editor_data.cljs$core$IFn$_invoke$arity$0() : editor_data.call(null)),(function (data){
return promesa.protocols._bind(null,(function (___31810__auto__){
return promesa.protocols._promise(repl_tooling.editor_integration.autocomplete.command(state,opts,data));
}));
}));
}));
}),(function (p1__147068_SHARP_){
return repl_tooling.editor_integration.renderer.parse_result(new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(p1__147068_SHARP_),new cljs.core.Keyword(null,"repl","repl",-35398667).cljs$core$IFn$_invoke$arity$1(p1__147068_SHARP_),state);
}),repl_tooling.commands_to_repl.pathom.eql_from_state(state),(function (options){
var code = new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(options);
var vec__147088 = new cljs.core.Keyword(null,"range","range",1639692286).cljs$core$IFn$_invoke$arity$1(options);
var vec__147091 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__147088,(0),null);
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__147091,(0),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__147091,(1),null);
var eval_opts = (function (){var G__147095 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(options,new cljs.core.Keyword(null,"text","text",-1790561697));
var G__147095__$1 = (cljs.core.truth_(row)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__147095,new cljs.core.Keyword(null,"row","row",-570139521),row):G__147095);
if(cljs.core.truth_(col)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__147095__$1,new cljs.core.Keyword(null,"col","col",-1959363084),col);
} else {
return G__147095__$1;
}
})();
return repl_tooling.editor_integration.evaluation.eval_with_promise(state,code,eval_opts);
})]);
});
repl_tooling.editor_integration.connection.file_exists_QMARK_ = (function repl_tooling$editor_integration$connection$file_exists_QMARK_(file){
return (new Promise((function (resolve){
return shadow.js.shim.module$fs.exists(file,resolve);
})));
});
repl_tooling.editor_integration.connection.read_file = (function repl_tooling$editor_integration$connection$read_file(editor_state,file){
var run_callback = new cljs.core.Keyword(null,"run-callback","run-callback",-1601688857).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(editor_state));
var existing_file = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__147102_SHARP_){
return shadow.js.shim.module$fs.existsSync(p1__147102_SHARP_);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__147101_SHARP_){
return shadow.js.shim.module$path.join(p1__147101_SHARP_,file);
}),cljs.core.cons(".",new cljs.core.Keyword(null,"project-paths","project-paths",-1637469806).cljs$core$IFn$_invoke$arity$1((run_callback.cljs$core$IFn$_invoke$arity$1 ? run_callback.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"get-config","get-config",1800808901)) : run_callback.call(null,new cljs.core.Keyword(null,"get-config","get-config",1800808901))))))));
return (new Promise((function (resolve){
if(cljs.core.truth_(existing_file)){
return shadow.js.shim.module$fs.readFile(existing_file,(function (error,not_error){
if(cljs.core.truth_(error)){
return (resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(null) : resolve.call(null,null));
} else {
var G__147109 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(not_error);
return (resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(G__147109) : resolve.call(null,G__147109));
}
}));
} else {
return (resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(null) : resolve.call(null,null));
}
})));
});
repl_tooling.editor_integration.connection.default_opts = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-stdout","on-stdout",1480958368),new cljs.core.Keyword(null,"config-file-path","config-file-path",-862460128),new cljs.core.Keyword(null,"on-result","on-result",-1034982142),new cljs.core.Keyword(null,"get-config","get-config",1800808901),new cljs.core.Keyword(null,"file-exists","file-exists",1541082726),new cljs.core.Keyword(null,"on-start-eval","on-start-eval",-560475418),new cljs.core.Keyword(null,"on-stderr","on-stderr",1583456038),new cljs.core.Keyword(null,"get-rendered-results","get-rendered-results",1638622697),new cljs.core.Keyword(null,"on-eval","on-eval",-1349336659),new cljs.core.Keyword(null,"editor-data","editor-data",-2084300305),new cljs.core.Keyword(null,"prompt","prompt",-78109487),new cljs.core.Keyword(null,"open-editor","open-editor",1337424020),new cljs.core.Keyword(null,"register-commands","register-commands",-552391338),new cljs.core.Keyword(null,"on-copy","on-copy",-227435882),new cljs.core.Keyword(null,"notify","notify",-1256867814)],[cljs.core.identity,null,cljs.core.identity,cljs.core.constantly(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"project-paths","project-paths",-1637469806),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"eval-mode","eval-mode",1105308847),new cljs.core.Keyword(null,"prefer-clj","prefer-clj",-124166522)], null)),repl_tooling.editor_integration.connection.file_exists_QMARK_,cljs.core.identity,cljs.core.identity,cljs.core.constantly(cljs.core.PersistentVector.EMPTY),cljs.core.identity,cljs.core.identity,(function() { 
var G__147865__delegate = function (_){
return (new Promise((function (){
return null;
})));
};
var G__147865 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__147866__i = 0, G__147866__a = new Array(arguments.length -  0);
while (G__147866__i < G__147866__a.length) {G__147866__a[G__147866__i] = arguments[G__147866__i + 0]; ++G__147866__i;}
  _ = new cljs.core.IndexedSeq(G__147866__a,0,null);
} 
return G__147865__delegate.call(this,_);};
G__147865.cljs$lang$maxFixedArity = 0;
G__147865.cljs$lang$applyTo = (function (arglist__147867){
var _ = cljs.core.seq(arglist__147867);
return G__147865__delegate(_);
});
G__147865.cljs$core$IFn$_invoke$arity$variadic = G__147865__delegate;
return G__147865;
})()
,cljs.core.identity,cljs.core.identity,cljs.core.identity,cljs.core.identity]);
repl_tooling.editor_integration.connection.swap_state_BANG_ = (function repl_tooling$editor_integration$connection$swap_state_BANG_(state,options,kind){
return promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(repl_tooling.commands_to_repl.all_cmds.all(state,options,kind),(function (cmds){
return promesa.protocols._bind(repl_tooling.editor_integration.connection.features_for(state,options,kind),(function (feats){
return promesa.protocols._bind(null,(function (___31810__auto__){
return promesa.protocols._bind(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.assoc,new cljs.core.Keyword("editor","features","editor/features",1302258665),feats,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"run-callback","run-callback",-1601688857),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(repl_tooling.editor_integration.commands.run_callback_BANG_,state),new cljs.core.Keyword(null,"run-feature","run-feature",-606861678),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(repl_tooling.editor_integration.commands.run_feature_BANG_,state)], 0)),(function (___31809__auto__){
return promesa.protocols._bind(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","callbacks","editor/callbacks",1179124831),new cljs.core.Keyword(null,"read-file","read-file",-1584858601)], null),(function (p1__147113_SHARP_){
var or__4223__auto__ = p1__147113_SHARP_;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2(repl_tooling.editor_integration.connection.read_file,state);
}
})),(function (___31809__auto____$1){
return promesa.protocols._promise(repl_tooling.editor_integration.configs.prepare_commands(state,cmds));
}));
}));
}));
}));
}));
}));
});
/**
 * 
 */
repl_tooling.editor_integration.connection.connect_evaluator_BANG_ = (function repl_tooling$editor_integration$connection$connect_evaluator_BANG_(evaluators,opts){
return (new Promise((function (resolve){
var state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(evaluators);
var options = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([repl_tooling.editor_integration.connection.default_opts,opts], 0));
repl_tooling.editor_integration.connection.swap_state_BANG_(state,options,new cljs.core.Keyword(null,"clj","clj",-660495428));

return (resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(state) : resolve.call(null,state));
})));
});
repl_tooling.editor_integration.connection.tr_kind = (function repl_tooling$editor_integration$connection$tr_kind(kind){
var kinds = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"clj","clj",-660495428),"Clojure",new cljs.core.Keyword(null,"cljs","cljs",1492417629),"ClojureScript",new cljs.core.Keyword(null,"cljr","cljr",361703864),"ClojureCLR",new cljs.core.Keyword(null,"clje","clje",184731695),"Clojerl",new cljs.core.Keyword(null,"bb","bb",75940837),"Babaska"], null);
var G__147124 = kind;
var G__147125 = clojure.string.capitalize(cljs.core.name(kind));
return (kinds.cljs$core$IFn$_invoke$arity$2 ? kinds.cljs$core$IFn$_invoke$arity$2(G__147124,G__147125) : kinds.call(null,G__147124,G__147125));
});
repl_tooling.editor_integration.connection.prepare_cljs = (function repl_tooling$editor_integration$connection$prepare_cljs(primary,host,port,state,options){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs","repl","cljs/repl",-36497565),primary,new cljs.core.Keyword("repl","info","repl/info",-345199547),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"host","host",-1558485167),host,new cljs.core.Keyword(null,"port","port",1534937262),port,new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"cljs","cljs",1492417629),new cljs.core.Keyword(null,"kind-name","kind-name",131475723),repl_tooling.editor_integration.connection.tr_kind(new cljs.core.Keyword(null,"cljs","cljs",1492417629))], null)], null));

repl_tooling.eval.eval.cljs$core$IFn$_invoke$arity$3(primary,"(set! lumo.repl/*pprint-results* false)",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ignore","ignore",-1631542033),true], null));

return repl_tooling.editor_integration.connection.swap_state_BANG_(state,options,new cljs.core.Keyword(null,"cljs","cljs",1492417629));
});
repl_tooling.editor_integration.connection.prepare_joker = (function repl_tooling$editor_integration$connection$prepare_joker(primary,host,port,state,options){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("clj","repl","clj/repl",-35234538),primary,new cljs.core.Keyword("clj","aux","clj/aux",-10310625),primary,new cljs.core.Keyword("repl","info","repl/info",-345199547),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"host","host",-1558485167),host,new cljs.core.Keyword(null,"port","port",1534937262),port,new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"joker","joker",-976230320),new cljs.core.Keyword(null,"kind-name","kind-name",131475723),repl_tooling.editor_integration.connection.tr_kind(new cljs.core.Keyword(null,"joker","joker",-976230320))], null)], null));

return repl_tooling.editor_integration.connection.swap_state_BANG_(state,options,new cljs.core.Keyword(null,"joker","joker",-976230320));
});
repl_tooling.editor_integration.connection.prepare_generic = (function repl_tooling$editor_integration$connection$prepare_generic(primary,aux,host,port,state,options,kind){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"clj","clj",-660495428),kind)){
repl_tooling.eval.evaluate(aux,":aux-connected",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ignore","ignore",-1631542033),true], null),(function (){
return repl_tooling.repl_client.clojure.disable_limits_BANG_(aux);
}));
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("clj","aux","clj/aux",-10310625),aux,new cljs.core.Keyword("clj","repl","clj/repl",-35234538),primary,new cljs.core.Keyword("repl","info","repl/info",-345199547),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"host","host",-1558485167),host,new cljs.core.Keyword(null,"port","port",1534937262),port,new cljs.core.Keyword(null,"kind","kind",-717265803),kind,new cljs.core.Keyword(null,"kind-name","kind-name",131475723),repl_tooling.editor_integration.connection.tr_kind(kind)], null)], null));

return repl_tooling.editor_integration.connection.swap_state_BANG_(state,options,kind);
});
repl_tooling.editor_integration.connection.connection_error_BANG_ = (function repl_tooling$editor_integration$connection$connection_error_BANG_(error,notify){
repl_tooling.editor_integration.connection.disconnect_BANG_();

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("ECONNREFUSED",error)){
var G__147138_147978 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"title","title",636505583),"REPL not connected",new cljs.core.Keyword(null,"message","message",-406056002),["Connection refused. Ensure that you have a ","Socket REPL started on this host/port"].join('')], null);
(notify.cljs$core$IFn$_invoke$arity$1 ? notify.cljs$core$IFn$_invoke$arity$1(G__147138_147978) : notify.call(null,G__147138_147978));
} else {
var G__147140_147980 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"title","title",636505583),"REPL not connected",new cljs.core.Keyword(null,"message","message",-406056002),["Unknown error while connecting to the REPL: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(error)].join('')], null);
(notify.cljs$core$IFn$_invoke$arity$1 ? notify.cljs$core$IFn$_invoke$arity$1(G__147140_147980) : notify.call(null,G__147140_147980));

console.error(error);
}

return null;
});
repl_tooling.editor_integration.connection.callback_fn = (function repl_tooling$editor_integration$connection$callback_fn(state,output){
var map__147143 = new cljs.core.Keyword("editor","callbacks","editor/callbacks",1179124831).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state));
var map__147143__$1 = cljs.core.__destructure_map(map__147143);
var on_stdout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__147143__$1,new cljs.core.Keyword(null,"on-stdout","on-stdout",1480958368));
var on_stderr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__147143__$1,new cljs.core.Keyword(null,"on-stderr","on-stderr",1583456038));
var on_result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__147143__$1,new cljs.core.Keyword(null,"on-result","on-result",-1034982142));
var on_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__147143__$1,new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814));
var on_patch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__147143__$1,new cljs.core.Keyword(null,"on-patch","on-patch",-455422584));
if(cljs.core.truth_((function (){var and__4221__auto__ = (output == null);
if(and__4221__auto__){
return on_disconnect;
} else {
return and__4221__auto__;
}
})())){
repl_tooling.commands_to_repl.all_cmds.handle_disconnect_BANG_(state);

(on_disconnect.cljs$core$IFn$_invoke$arity$0 ? on_disconnect.cljs$core$IFn$_invoke$arity$0() : on_disconnect.call(null));
} else {
}

var temp__5753__auto___148014 = new cljs.core.Keyword(null,"out","out",-910545517).cljs$core$IFn$_invoke$arity$1(output);
if(cljs.core.truth_(temp__5753__auto___148014)){
var out_148015 = temp__5753__auto___148014;
var and__4221__auto___148020 = on_stdout;
if(cljs.core.truth_(and__4221__auto___148020)){
(on_stdout.cljs$core$IFn$_invoke$arity$1 ? on_stdout.cljs$core$IFn$_invoke$arity$1(out_148015) : on_stdout.call(null,out_148015));
} else {
}
} else {
}

var temp__5753__auto___148024 = new cljs.core.Keyword(null,"err","err",-2089457205).cljs$core$IFn$_invoke$arity$1(output);
if(cljs.core.truth_(temp__5753__auto___148024)){
var out_148025 = temp__5753__auto___148024;
var and__4221__auto___148026 = on_stderr;
if(cljs.core.truth_(and__4221__auto___148026)){
(on_stderr.cljs$core$IFn$_invoke$arity$1 ? on_stderr.cljs$core$IFn$_invoke$arity$1(out_148025) : on_stderr.call(null,out_148025));
} else {
}
} else {
}

if(cljs.core.truth_((function (){var and__4221__auto__ = on_result;
if(cljs.core.truth_(and__4221__auto__)){
return ((cljs.core.contains_QMARK_(output,new cljs.core.Keyword(null,"result","result",1415092211))) || (cljs.core.contains_QMARK_(output,new cljs.core.Keyword(null,"error","error",-978969032))));
} else {
return and__4221__auto__;
}
})())){
var G__147150_148038 = repl_tooling.editor_helpers.parse_result(output);
(on_result.cljs$core$IFn$_invoke$arity$1 ? on_result.cljs$core$IFn$_invoke$arity$1(G__147150_148038) : on_result.call(null,G__147150_148038));
} else {
}

var temp__5753__auto__ = new cljs.core.Keyword(null,"patch","patch",380775109).cljs$core$IFn$_invoke$arity$1(output);
if(cljs.core.truth_(temp__5753__auto__)){
var patch = temp__5753__auto__;
var G__147151 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(patch,new cljs.core.Keyword(null,"result","result",1415092211),repl_tooling.editor_helpers.parse_result);
return (on_patch.cljs$core$IFn$_invoke$arity$1 ? on_patch.cljs$core$IFn$_invoke$arity$1(G__147151) : on_patch.call(null,G__147151));
} else {
return null;
}
});
repl_tooling.editor_integration.connection.find_patch = (function repl_tooling$editor_integration$connection$find_patch(id,maybe_coll){
var elem = (((maybe_coll instanceof reagent.ratom.RAtom))?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.deref(maybe_coll),new cljs.core.Keyword(null,"editor-state","editor-state",579582138),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"repl","repl",-35398667)], 0)):maybe_coll);
if((((elem instanceof repl_tooling.editor_integration.renderer.Patchable)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(elem))))){
return maybe_coll;
} else {
if(cljs.core.coll_QMARK_(elem)){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.flatten(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__147152_SHARP_){
return (repl_tooling.editor_integration.connection.find_patch.cljs$core$IFn$_invoke$arity$2 ? repl_tooling.editor_integration.connection.find_patch.cljs$core$IFn$_invoke$arity$2(id,p1__147152_SHARP_) : repl_tooling.editor_integration.connection.find_patch.call(null,id,p1__147152_SHARP_));
}),elem)));
} else {
return null;
}
}
});
repl_tooling.editor_integration.connection.prepare_patch = (function repl_tooling$editor_integration$connection$prepare_patch(p__147153){
var map__147154 = p__147153;
var map__147154__$1 = cljs.core.__destructure_map(map__147154);
var callbacks = map__147154__$1;
var on_patch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__147154__$1,new cljs.core.Keyword(null,"on-patch","on-patch",-455422584));
var get_rendered_results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__147154__$1,new cljs.core.Keyword(null,"get-rendered-results","get-rendered-results",1638622697));
if(cljs.core.truth_(on_patch)){
return callbacks;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(callbacks,new cljs.core.Keyword(null,"on-patch","on-patch",-455422584),(function (p__147155){
var map__147156 = p__147155;
var map__147156__$1 = cljs.core.__destructure_map(map__147156);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__147156__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__147156__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var seq__147157 = cljs.core.seq(repl_tooling.editor_integration.connection.find_patch(id,(get_rendered_results.cljs$core$IFn$_invoke$arity$0 ? get_rendered_results.cljs$core$IFn$_invoke$arity$0() : get_rendered_results.call(null))));
var chunk__147158 = null;
var count__147159 = (0);
var i__147160 = (0);
while(true){
if((i__147160 < count__147159)){
var patchable = chunk__147158.cljs$core$IIndexed$_nth$arity$2(null,i__147160);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(patchable,cljs.core.assoc,new cljs.core.Keyword(null,"value","value",305978217),repl_tooling.editor_integration.renderer.parse_result(result,new cljs.core.Keyword(null,"repl","repl",-35398667).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(patchable)),new cljs.core.Keyword(null,"editor-state","editor-state",579582138).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(patchable))));


var G__148103 = seq__147157;
var G__148104 = chunk__147158;
var G__148105 = count__147159;
var G__148106 = (i__147160 + (1));
seq__147157 = G__148103;
chunk__147158 = G__148104;
count__147159 = G__148105;
i__147160 = G__148106;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__147157);
if(temp__5753__auto__){
var seq__147157__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__147157__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__147157__$1);
var G__148119 = cljs.core.chunk_rest(seq__147157__$1);
var G__148120 = c__4649__auto__;
var G__148121 = cljs.core.count(c__4649__auto__);
var G__148122 = (0);
seq__147157 = G__148119;
chunk__147158 = G__148120;
count__147159 = G__148121;
i__147160 = G__148122;
continue;
} else {
var patchable = cljs.core.first(seq__147157__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(patchable,cljs.core.assoc,new cljs.core.Keyword(null,"value","value",305978217),repl_tooling.editor_integration.renderer.parse_result(result,new cljs.core.Keyword(null,"repl","repl",-35398667).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(patchable)),new cljs.core.Keyword(null,"editor-state","editor-state",579582138).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(patchable))));


var G__148131 = cljs.core.next(seq__147157__$1);
var G__148132 = null;
var G__148133 = (0);
var G__148134 = (0);
seq__147157 = G__148131;
chunk__147158 = G__148132;
count__147159 = G__148133;
i__147160 = G__148134;
continue;
}
} else {
return null;
}
}
break;
}
}));
}
});
repl_tooling.editor_integration.connection.callback_aux = (function repl_tooling$editor_integration$connection$callback_aux(original_callback){
return (function (msg){
if(cljs.core.truth_((function (){var or__4223__auto__ = new cljs.core.Keyword(null,"out","out",-910545517).cljs$core$IFn$_invoke$arity$1(msg);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return new cljs.core.Keyword(null,"err","err",-2089457205).cljs$core$IFn$_invoke$arity$1(msg);
}
})())){
if(cljs.core.truth_(repl_tooling.editor_helpers._STAR_out_on_aux_STAR_)){
return (original_callback.cljs$core$IFn$_invoke$arity$1 ? original_callback.cljs$core$IFn$_invoke$arity$1(msg) : original_callback.call(null,msg));
} else {
return null;
}
} else {
return (original_callback.cljs$core$IFn$_invoke$arity$1 ? original_callback.cljs$core$IFn$_invoke$arity$1(msg) : original_callback.call(null,msg));
}
});
});
var ufv___148148 = schema.utils.use_fn_validation;
var output_schema147303_148149 = schema.core.Any;
var input_schema147304_148150 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Str,cljs.core.with_meta(new cljs.core.Symbol(null,"host","host",82046360,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Str","s/Str",907974338,null)], null))),schema.core.one(schema.core.Int,cljs.core.with_meta(new cljs.core.Symbol(null,"port","port",-1119498507,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Int","s/Int",-2116888657,null)], null))),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg2","arg2",-924884852,null))], null);
var input_checker147305_148151 = (new cljs.core.Delay((function (){
return schema.core.checker(input_schema147304_148150);
}),null));
var output_checker147306_148152 = (new cljs.core.Delay((function (){
return schema.core.checker(output_schema147303_148149);
}),null));
var ret__40409__auto___148174 = /**
 * Inputs: [host :- s/Str port :- s/Int {:keys [notify], :as opts} :- s/Any]
 * 
 *   Connects to a clojure-like REPL that supports the socket REPL protocol.
 * Expects host, port, and some callbacks:
 * * on-start-eval -> a function that'll be called when an evaluation starts
 * * on-eval -> a function that'll be called when an evaluation ends
 * * editor-data -> a function that'll be called when a command needs editor's data.
 *   Editor's data is a map (or a promise that resolves to a map) with the arguments:
 *  :contents - the editor's contents.
 *  :filename - the current file's name. Can be nil if file was not saved yet.
 *  :range - a vector containing [[start-row start-col] [end-row end-col]], representing
 *    the current selection
 * * open-editor -> asks the editor to open an editor. Expects a map with `:filename`,
 *   `:line` and maybe `:contents`. If there's `:contents` key, it defines a "virtual
 *   file" so it's better to open up an read-only editor
 * * notify -> when something needs to be notified, this function will be called with a map
 *   containing :type (one of :info, :warning, or :error), :title and :message
 * * get-config -> when some function needs the configuration from the editor, this fn
 *   is called without arguments. Need to return a map with the config options.
 * * get-rendered-results -> gets all results that are rendered on the editor. This is
 *   used so that the REPL can 'patch' these results when new data appears (think
 *   of resolving promises in JS)
 * * on-patch -> patches the result. Optional, if you send a :get-rendered-results
 *   callback, one will be generated for you
 * * prompt -> when some function needs an answer from the editor, it'll call this
 *   callback passing :title, :message, and :arguments (a vector that is composed by
 *   :key and :value). The callback needs to return a `Promise` with one of the
 *   :key from the :arguments, or nil if nothing was selected.
 * * on-copy -> a function that receives a string and copies its contents to clipboard
 * * on-stdout -> a function that receives a string when some code prints to stdout
 * * on-stderr -> a function that receives a string when some code prints to stderr
 * * on-result -> returns a clojure EDN with the result of code
 * * on-disconnect -> called with no arguments, will disconnect REPLs. Can be called more
 * than once
 * 
 * Returns a promise that will resolve to a map with two repls: :clj/aux will be used
 * to autocomplete/etc, :clj/repl will be used to evaluate code.
 */
repl_tooling.editor_integration.connection.connect_BANG_ = (function repl_tooling$editor_integration$connection$connect_BANG_(G__147307,G__147308,G__147309){
var validate__38124__auto__ = cljs.core.deref(ufv___148148);
if(cljs.core.truth_(validate__38124__auto__)){
var args__38125__auto___148189 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__147307,G__147308,G__147309], null);
if(cljs.core.truth_(schema.core.fn_validator)){
var G__147361_148190 = new cljs.core.Keyword(null,"input","input",556931961);
var G__147364_148191 = cljs.core.with_meta(new cljs.core.Symbol(null,"connect!","connect!",205447267,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Connects to a clojure-like REPL that supports the socket REPL protocol.\nExpects host, port, and some callbacks:\n* on-start-eval -> a function that'll be called when an evaluation starts\n* on-eval -> a function that'll be called when an evaluation ends\n* editor-data -> a function that'll be called when a command needs editor's data.\n  Editor's data is a map (or a promise that resolves to a map) with the arguments:\n    :contents - the editor's contents.\n    :filename - the current file's name. Can be nil if file was not saved yet.\n    :range - a vector containing [[start-row start-col] [end-row end-col]], representing\n      the current selection\n* open-editor -> asks the editor to open an editor. Expects a map with `:filename`,\n  `:line` and maybe `:contents`. If there's `:contents` key, it defines a \"virtual\n  file\" so it's better to open up an read-only editor\n* notify -> when something needs to be notified, this function will be called with a map\n  containing :type (one of :info, :warning, or :error), :title and :message\n* get-config -> when some function needs the configuration from the editor, this fn\n  is called without arguments. Need to return a map with the config options.\n* get-rendered-results -> gets all results that are rendered on the editor. This is\n  used so that the REPL can 'patch' these results when new data appears (think\n  of resolving promises in JS)\n* on-patch -> patches the result. Optional, if you send a :get-rendered-results\n  callback, one will be generated for you\n* prompt -> when some function needs an answer from the editor, it'll call this\n  callback passing :title, :message, and :arguments (a vector that is composed by\n  :key and :value). The callback needs to return a `Promise` with one of the\n  :key from the :arguments, or nil if nothing was selected.\n* on-copy -> a function that receives a string and copies its contents to clipboard\n* on-stdout -> a function that receives a string when some code prints to stdout\n* on-stderr -> a function that receives a string when some code prints to stderr\n* on-result -> returns a clojure EDN with the result of code\n* on-disconnect -> called with no arguments, will disconnect REPLs. Can be called more\nthan once\n\nReturns a promise that will resolve to a map with two repls: :clj/aux will be used\nto autocomplete/etc, :clj/repl will be used to evaluate code."], null));
var G__147365_148192 = input_schema147304_148150;
var G__147366_148193 = cljs.core.deref(input_checker147305_148151);
var G__147368_148194 = args__38125__auto___148189;
(schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5 ? schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5(G__147361_148190,G__147364_148191,G__147365_148192,G__147366_148193,G__147368_148194) : schema.core.fn_validator.call(null,G__147361_148190,G__147364_148191,G__147365_148192,G__147366_148193,G__147368_148194));
} else {
var temp__5753__auto___148219 = (function (){var fexpr__147379 = cljs.core.deref(input_checker147305_148151);
return (fexpr__147379.cljs$core$IFn$_invoke$arity$1 ? fexpr__147379.cljs$core$IFn$_invoke$arity$1(args__38125__auto___148189) : fexpr__147379.call(null,args__38125__auto___148189));
})();
if(cljs.core.truth_(temp__5753__auto___148219)){
var error__38126__auto___148221 = temp__5753__auto___148219;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.with_meta(new cljs.core.Symbol(null,"connect!","connect!",205447267,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Connects to a clojure-like REPL that supports the socket REPL protocol.\nExpects host, port, and some callbacks:\n* on-start-eval -> a function that'll be called when an evaluation starts\n* on-eval -> a function that'll be called when an evaluation ends\n* editor-data -> a function that'll be called when a command needs editor's data.\n  Editor's data is a map (or a promise that resolves to a map) with the arguments:\n    :contents - the editor's contents.\n    :filename - the current file's name. Can be nil if file was not saved yet.\n    :range - a vector containing [[start-row start-col] [end-row end-col]], representing\n      the current selection\n* open-editor -> asks the editor to open an editor. Expects a map with `:filename`,\n  `:line` and maybe `:contents`. If there's `:contents` key, it defines a \"virtual\n  file\" so it's better to open up an read-only editor\n* notify -> when something needs to be notified, this function will be called with a map\n  containing :type (one of :info, :warning, or :error), :title and :message\n* get-config -> when some function needs the configuration from the editor, this fn\n  is called without arguments. Need to return a map with the config options.\n* get-rendered-results -> gets all results that are rendered on the editor. This is\n  used so that the REPL can 'patch' these results when new data appears (think\n  of resolving promises in JS)\n* on-patch -> patches the result. Optional, if you send a :get-rendered-results\n  callback, one will be generated for you\n* prompt -> when some function needs an answer from the editor, it'll call this\n  callback passing :title, :message, and :arguments (a vector that is composed by\n  :key and :value). The callback needs to return a `Promise` with one of the\n  :key from the :arguments, or nil if nothing was selected.\n* on-copy -> a function that receives a string and copies its contents to clipboard\n* on-stdout -> a function that receives a string when some code prints to stdout\n* on-stderr -> a function that receives a string when some code prints to stderr\n* on-result -> returns a clojure EDN with the result of code\n* on-disconnect -> called with no arguments, will disconnect REPLs. Can be called more\nthan once\n\nReturns a promise that will resolve to a map with two repls: :clj/aux will be used\nto autocomplete/etc, :clj/repl will be used to evaluate code."], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([error__38126__auto___148221], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema147304_148150,new cljs.core.Keyword(null,"value","value",305978217),args__38125__auto___148189,new cljs.core.Keyword(null,"error","error",-978969032),error__38126__auto___148221], null));
} else {
}
}
} else {
}

var o__38127__auto__ = (function (){var host = G__147307;
var port = G__147308;
var G__147407 = G__147309;
var map__147408 = G__147407;
var map__147408__$1 = cljs.core.__destructure_map(map__147408);
var opts = map__147408__$1;
var notify = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__147408__$1,new cljs.core.Keyword(null,"notify","notify",-1256867814));
var host__$1 = host;
var port__$1 = port;
var G__147407__$1 = G__147407;
while(true){
var host__$2 = host__$1;
var port__$2 = port__$1;
var map__147418 = G__147407__$1;
var map__147418__$1 = cljs.core.__destructure_map(map__147418);
var opts__$1 = map__147418__$1;
var notify__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__147418__$1,new cljs.core.Keyword(null,"notify","notify",-1256867814));
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._bind(null,((function (host__$2,port__$2,map__147418,map__147418__$1,opts__$1,notify__$1,host,port,G__147407,map__147408,map__147408__$1,opts,notify,validate__38124__auto__,ufv___148148,output_schema147303_148149,input_schema147304_148150,input_checker147305_148151,output_checker147306_148152){
return (function (___31820__auto__){
return promesa.protocols._bind(repl_tooling.editor_integration.connection.prepare_patch(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([repl_tooling.editor_integration.connection.default_opts,opts__$1], 0))),(function (options){
return promesa.protocols._bind(cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("editor","callbacks","editor/callbacks",1179124831),options], null)),(function (state){
return promesa.protocols._bind(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(repl_tooling.editor_integration.connection.callback_fn,state),(function (callback){
return promesa.protocols._bind(repl_tooling.integrations.repls.connect_repl_BANG_(new cljs.core.Keyword(null,"clj-eval","clj-eval",-1090238509),host__$2,port__$2,callback),(function (p__147470){
var vec__147472 = p__147470;
var kind = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__147472,(0),null);
var primary = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__147472,(1),null);
return promesa.protocols._bind(repl_tooling.eval.eval.cljs$core$IFn$_invoke$arity$2(primary,"1234"),(function (_){
return promesa.protocols._bind((function (){var G__147489 = kind;
var G__147489__$1 = (((G__147489 instanceof cljs.core.Keyword))?G__147489.fqn:null);
switch (G__147489__$1) {
case "cljs":
return repl_tooling.editor_integration.connection.prepare_cljs(primary,host__$2,port__$2,state,options);

break;
case "joker":
return repl_tooling.editor_integration.connection.prepare_joker(primary,host__$2,port__$2,state,options);

break;
default:
return promesa.protocols._bind(null,(function (___31820__auto____$1){
return promesa.protocols._bind(repl_tooling.integrations.repls.connect_repl_BANG_(new cljs.core.Keyword(null,"clj-aux","clj-aux",-1228071979),host__$2,port__$2,repl_tooling.editor_integration.connection.callback_aux(callback)),(function (p__147513){
var vec__147517 = p__147513;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__147517,(0),null);
var aux = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__147517,(1),null);
return promesa.protocols._bind(null,(function (___31810__auto__){
return promesa.protocols._promise(repl_tooling.editor_integration.connection.prepare_generic(primary,aux,host__$2,port__$2,state,options,kind));
}));
}));
}));

}
})(),(function (___$1){
return promesa.protocols._bind((primary instanceof repl_tooling.repl_client.nrepl.Evaluator),(function (nrepl_QMARK_){
return promesa.protocols._bind(null,(function (___31810__auto__){
return promesa.protocols._promise((function (){
var G__147558_148334 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"info","info",-317069002),new cljs.core.Keyword(null,"title","title",636505583),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(repl_tooling.editor_integration.connection.tr_kind(kind)),(cljs.core.truth_(nrepl_QMARK_)?" nREPL":" socket REPL")," Connected"].join('')], null);
(notify__$1.cljs$core$IFn$_invoke$arity$1 ? notify__$1.cljs$core$IFn$_invoke$arity$1(G__147558_148334) : notify__$1.call(null,G__147558_148334));

return state;
})()
);
}));
}));
}));
}));
}));
}));
}));
}));
});})(host__$2,port__$2,map__147418,map__147418__$1,opts__$1,notify__$1,host,port,G__147407,map__147408,map__147408__$1,opts,notify,validate__38124__auto__,ufv___148148,output_schema147303_148149,input_schema147304_148150,input_checker147305_148151,output_checker147306_148152))
),((function (host__$2,port__$2,map__147418,map__147418__$1,opts__$1,notify__$1,host,port,G__147407,map__147408,map__147408__$1,opts,notify,validate__38124__auto__,ufv___148148,output_schema147303_148149,input_schema147304_148150,input_checker147305_148151,output_checker147306_148152){
return (function (p1__147302_SHARP_){
return repl_tooling.editor_integration.connection.connection_error_BANG_(p1__147302_SHARP_,notify__$1);
});})(host__$2,port__$2,map__147418,map__147418__$1,opts__$1,notify__$1,host,port,G__147407,map__147408,map__147408__$1,opts,notify,validate__38124__auto__,ufv___148148,output_schema147303_148149,input_schema147304_148150,input_checker147305_148151,output_checker147306_148152))
);
break;
}
})();
if(cljs.core.truth_(validate__38124__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
var G__147582_148356 = new cljs.core.Keyword(null,"output","output",-1105869043);
var G__147583_148357 = cljs.core.with_meta(new cljs.core.Symbol(null,"connect!","connect!",205447267,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Connects to a clojure-like REPL that supports the socket REPL protocol.\nExpects host, port, and some callbacks:\n* on-start-eval -> a function that'll be called when an evaluation starts\n* on-eval -> a function that'll be called when an evaluation ends\n* editor-data -> a function that'll be called when a command needs editor's data.\n  Editor's data is a map (or a promise that resolves to a map) with the arguments:\n    :contents - the editor's contents.\n    :filename - the current file's name. Can be nil if file was not saved yet.\n    :range - a vector containing [[start-row start-col] [end-row end-col]], representing\n      the current selection\n* open-editor -> asks the editor to open an editor. Expects a map with `:filename`,\n  `:line` and maybe `:contents`. If there's `:contents` key, it defines a \"virtual\n  file\" so it's better to open up an read-only editor\n* notify -> when something needs to be notified, this function will be called with a map\n  containing :type (one of :info, :warning, or :error), :title and :message\n* get-config -> when some function needs the configuration from the editor, this fn\n  is called without arguments. Need to return a map with the config options.\n* get-rendered-results -> gets all results that are rendered on the editor. This is\n  used so that the REPL can 'patch' these results when new data appears (think\n  of resolving promises in JS)\n* on-patch -> patches the result. Optional, if you send a :get-rendered-results\n  callback, one will be generated for you\n* prompt -> when some function needs an answer from the editor, it'll call this\n  callback passing :title, :message, and :arguments (a vector that is composed by\n  :key and :value). The callback needs to return a `Promise` with one of the\n  :key from the :arguments, or nil if nothing was selected.\n* on-copy -> a function that receives a string and copies its contents to clipboard\n* on-stdout -> a function that receives a string when some code prints to stdout\n* on-stderr -> a function that receives a string when some code prints to stderr\n* on-result -> returns a clojure EDN with the result of code\n* on-disconnect -> called with no arguments, will disconnect REPLs. Can be called more\nthan once\n\nReturns a promise that will resolve to a map with two repls: :clj/aux will be used\nto autocomplete/etc, :clj/repl will be used to evaluate code."], null));
var G__147584_148358 = output_schema147303_148149;
var G__147585_148359 = cljs.core.deref(output_checker147306_148152);
var G__147586_148360 = o__38127__auto__;
(schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5 ? schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5(G__147582_148356,G__147583_148357,G__147584_148358,G__147585_148359,G__147586_148360) : schema.core.fn_validator.call(null,G__147582_148356,G__147583_148357,G__147584_148358,G__147585_148359,G__147586_148360));
} else {
var temp__5753__auto___148385 = (function (){var fexpr__147596 = cljs.core.deref(output_checker147306_148152);
return (fexpr__147596.cljs$core$IFn$_invoke$arity$1 ? fexpr__147596.cljs$core$IFn$_invoke$arity$1(o__38127__auto__) : fexpr__147596.call(null,o__38127__auto__));
})();
if(cljs.core.truth_(temp__5753__auto___148385)){
var error__38126__auto___148397 = temp__5753__auto___148385;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.with_meta(new cljs.core.Symbol(null,"connect!","connect!",205447267,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Connects to a clojure-like REPL that supports the socket REPL protocol.\nExpects host, port, and some callbacks:\n* on-start-eval -> a function that'll be called when an evaluation starts\n* on-eval -> a function that'll be called when an evaluation ends\n* editor-data -> a function that'll be called when a command needs editor's data.\n  Editor's data is a map (or a promise that resolves to a map) with the arguments:\n    :contents - the editor's contents.\n    :filename - the current file's name. Can be nil if file was not saved yet.\n    :range - a vector containing [[start-row start-col] [end-row end-col]], representing\n      the current selection\n* open-editor -> asks the editor to open an editor. Expects a map with `:filename`,\n  `:line` and maybe `:contents`. If there's `:contents` key, it defines a \"virtual\n  file\" so it's better to open up an read-only editor\n* notify -> when something needs to be notified, this function will be called with a map\n  containing :type (one of :info, :warning, or :error), :title and :message\n* get-config -> when some function needs the configuration from the editor, this fn\n  is called without arguments. Need to return a map with the config options.\n* get-rendered-results -> gets all results that are rendered on the editor. This is\n  used so that the REPL can 'patch' these results when new data appears (think\n  of resolving promises in JS)\n* on-patch -> patches the result. Optional, if you send a :get-rendered-results\n  callback, one will be generated for you\n* prompt -> when some function needs an answer from the editor, it'll call this\n  callback passing :title, :message, and :arguments (a vector that is composed by\n  :key and :value). The callback needs to return a `Promise` with one of the\n  :key from the :arguments, or nil if nothing was selected.\n* on-copy -> a function that receives a string and copies its contents to clipboard\n* on-stdout -> a function that receives a string when some code prints to stdout\n* on-stderr -> a function that receives a string when some code prints to stderr\n* on-result -> returns a clojure EDN with the result of code\n* on-disconnect -> called with no arguments, will disconnect REPLs. Can be called more\nthan once\n\nReturns a promise that will resolve to a map with two repls: :clj/aux will be used\nto autocomplete/etc, :clj/repl will be used to evaluate code."], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([error__38126__auto___148397], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema147303_148149,new cljs.core.Keyword(null,"value","value",305978217),o__38127__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__38126__auto___148397], null));
} else {
}
}
} else {
}

return o__38127__auto__;
});
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(repl_tooling.editor_integration.connection.connect_BANG_),schema.core.__GT_FnSchema(output_schema147303_148149,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema147304_148150], null)));

/**
 * Connects callbacks only, for commands that can work without a REPL.
 */
repl_tooling.editor_integration.connection.connect_callbacks_BANG_ = (function repl_tooling$editor_integration$connection$connect_callbacks_BANG_(callbacks){
var options = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([repl_tooling.editor_integration.connection.default_opts,callbacks], 0));
var state_ish = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("editor","callbacks","editor/callbacks",1179124831),options], null));
var callback_cmds = repl_tooling.editor_integration.commands.__GT_Callbacks(state_ish);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ish,cljs.core.assoc,new cljs.core.Keyword("editor","features","editor/features",1302258665),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"result-for-renderer","result-for-renderer",-118580804),(function (p1__147636_SHARP_){
return repl_tooling.editor_integration.renderer.parse_result(new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(p1__147636_SHARP_),new cljs.core.Keyword(null,"repl","repl",-35398667).cljs$core$IFn$_invoke$arity$1(p1__147636_SHARP_),state_ish);
}),new cljs.core.Keyword(null,"eql","eql",1414892383),cljs.core.constantly(null)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"run-callback","run-callback",-1601688857),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(repl_tooling.editor_integration.commands.run_callback_BANG_,callback_cmds),new cljs.core.Keyword(null,"run-feature","run-feature",-606861678),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(repl_tooling.editor_integration.commands.run_feature_BANG_,callback_cmds)], 0));

var G__147676_148470 = repl_tooling.commands_to_repl.all_cmds.static_commands(state_ish);
var fexpr__147675_148471 = new cljs.core.Keyword(null,"register-commands","register-commands",-552391338).cljs$core$IFn$_invoke$arity$1(options);
(fexpr__147675_148471.cljs$core$IFn$_invoke$arity$1 ? fexpr__147675_148471.cljs$core$IFn$_invoke$arity$1(G__147676_148470) : fexpr__147675_148471.call(null,G__147676_148470));

return state_ish;
});

//# sourceMappingURL=repl_tooling.editor_integration.connection.js.map
