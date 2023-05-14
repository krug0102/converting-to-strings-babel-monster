goog.provide('repl_tooling.editor_integration.configs');
repl_tooling.editor_integration.configs.read_config_file = (function repl_tooling$editor_integration$configs$read_config_file(config_file){
var p = promesa.core.deferred();
shadow.js.shim.module$fs.readFile(config_file,(function (p1__146899_SHARP_,p2__146898_SHARP_){
return promesa.core.resolve_BANG_.cljs$core$IFn$_invoke$arity$2(p,cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__146898_SHARP_));
}));

return p;
});
repl_tooling.editor_integration.configs.name_for = (function repl_tooling$editor_integration$configs$name_for(k){
return clojure.string.replace(clojure.string.capitalize(cljs.core.name(k)),/-/," ");
});
repl_tooling.editor_integration.configs.catch_errors = (function repl_tooling$editor_integration$configs$catch_errors(fun,editor_state){
try{return (fun.cljs$core$IFn$_invoke$arity$0 ? fun.cljs$core$IFn$_invoke$arity$0() : fun.call(null));
}catch (e146905){var e = e146905;
return repl_tooling.editor_integration.commands.run_callback_BANG_.cljs$core$IFn$_invoke$arity$variadic(editor_state,new cljs.core.Keyword(null,"on-eval","on-eval",-1349336659),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("custom-eval"),new cljs.core.Keyword(null,"editor-data","editor-data",-2084300305),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"contents","contents",-1567174023),"[INTERNAL-FN]",new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)], null),new cljs.core.Keyword(null,"filename","filename",-1428840783),new cljs.core.Keyword(null,"config-file-path","config-file-path",-862460128).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("editor","callbacks","editor/callbacks",1179124831).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(editor_state)))], null),new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)], null),new cljs.core.Keyword(null,"repl","repl",-35398667),null,new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),e,new cljs.core.Keyword(null,"as-text","as-text",-449861067),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0)),new cljs.core.Keyword(null,"parsed?","parsed?",44224124),true], null)], null)], 0));
}});
repl_tooling.editor_integration.configs.fns_for = (function repl_tooling$editor_integration$configs$fns_for(editor_state,config_file){
if(cljs.core.truth_(shadow.js.shim.module$fs.existsSync(config_file))){
return promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(repl_tooling.editor_integration.configs.read_config_file(config_file),(function (config){
return promesa.protocols._bind(cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY),(function (sci_state){
return promesa.protocols._bind((function (){
repl_tooling.editor_integration.interpreter.evaluate_code(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"code","code",1586293142),config,new cljs.core.Keyword(null,"sci-state","sci-state",-1065730528),sci_state,new cljs.core.Keyword(null,"editor-state","editor-state",579582138),editor_state], null));

return null;
})()
,(function (_){
return promesa.protocols._bind(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Symbol(null,"pr","pr",1056937027,null),"null",new cljs.core.Symbol(null,"log","log",45015523,null),"null",new cljs.core.Symbol(null,"prn","prn",1561684909,null),"null",new cljs.core.Symbol(null,"println","println",-733595439,null),"null",new cljs.core.Symbol(null,"print","print",-1354873355,null),"null"], null), null),cljs.core.first),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__146907_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__146907_SHARP_,sci.core.eval_string.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__146907_SHARP_),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"env","env",-1815813235),sci_state], null))],null));
}),sci.core.eval_string.cljs$core$IFn$_invoke$arity$2("(->> *ns* ns-publics keys)",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"env","env",-1815813235),sci_state], null)))),(function (vars){
return promesa.protocols._bind(null,(function (___31810__auto__){
return promesa.protocols._promise(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__146913){
var vec__146914 = p__146913;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__146914,(0),null);
var fun = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__146914,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),repl_tooling.editor_integration.configs.name_for(k),new cljs.core.Keyword(null,"command","command",-894540724),(function (){
return repl_tooling.editor_integration.configs.catch_errors(fun,editor_state);
})], null));
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__146919){
var vec__146920 = p__146919;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__146920,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__146920,(1),null);
return cljs.core.fn_QMARK_(v);
}),vars)));
}));
}));
}));
}));
}));
}));
} else {
return null;
}
});
repl_tooling.editor_integration.configs.watch_config = (function repl_tooling$editor_integration$configs$watch_config(editor_state,cmds_from_tooling,config_file){
if(cljs.core.truth_(config_file)){
var dir = shadow.js.shim.module$path.dirname(config_file);
var watch_pid = shadow.js.shim.module$fs.watch(dir,(function (evt,filename){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.js.shim.module$path.join(dir,filename),config_file)){
return (repl_tooling.editor_integration.configs.reg_commands.cljs$core$IFn$_invoke$arity$3 ? repl_tooling.editor_integration.configs.reg_commands.cljs$core$IFn$_invoke$arity$3(editor_state,cmds_from_tooling,config_file) : repl_tooling.editor_integration.configs.reg_commands.call(null,editor_state,cmds_from_tooling,config_file));
} else {
return null;
}
}));
var old_disconnect = new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("editor","callbacks","editor/callbacks",1179124831).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(editor_state)));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(editor_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","callbacks","editor/callbacks",1179124831),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814)], null),(function (){
(old_disconnect.cljs$core$IFn$_invoke$arity$0 ? old_disconnect.cljs$core$IFn$_invoke$arity$0() : old_disconnect.call(null));

return watch_pid.close();
}));
} else {
return null;
}
});
repl_tooling.editor_integration.configs.fns_or_check_errors = (function repl_tooling$editor_integration$configs$fns_or_check_errors(editor_state,config_file){
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(repl_tooling.editor_integration.configs.fns_for(editor_state,config_file),(function (error){
var serialized_146960 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.tagged_literal(new cljs.core.Symbol(null,"error","error",661562495,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),error.name,new cljs.core.Keyword(null,"data","data",-232669377),error.data,new cljs.core.Keyword(null,"message","message",-406056002),error.message,new cljs.core.Keyword(null,"trace","trace",-1082747415),clojure.string.split_lines(error.stack)], null))], 0));
var data_146961 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("sci-error-"),new cljs.core.Keyword(null,"result","result",1415092211),repl_tooling.editor_helpers.parse_result(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),serialized_146960,new cljs.core.Keyword(null,"as-text","as-text",-449861067),serialized_146960], null))], null);
var error_data_146962 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(error);
var data_146963__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(error_data_146962),new cljs.core.Keyword("sci","error","sci/error",-979082803)))?(function (){var rowcol = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(error_data_146962) - (1)),(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(error_data_146962) - (1))], null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data_146961,new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rowcol,rowcol], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"editor-data","editor-data",-2084300305),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"filename","filename",-1428840783),config_file,new cljs.core.Keyword(null,"contents","contents",-1567174023),"",new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rowcol,rowcol], null)], null)], 0));
})():cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data_146961,new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"editor-data","editor-data",-2084300305),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"filename","filename",-1428840783),null,new cljs.core.Keyword(null,"contents","contents",-1567174023),"",new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)], null)], null)], 0)));
repl_tooling.editor_integration.commands.run_callback_BANG_.cljs$core$IFn$_invoke$arity$variadic(editor_state,new cljs.core.Keyword(null,"on-start-eval","on-start-eval",-560475418),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(data_146963__$1,new cljs.core.Keyword(null,"result","result",1415092211))], 0));

repl_tooling.editor_integration.commands.run_callback_BANG_.cljs$core$IFn$_invoke$arity$variadic(editor_state,new cljs.core.Keyword(null,"on-eval","on-eval",-1349336659),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data_146963__$1,new cljs.core.Keyword(null,"repl","repl",-35398667),null)], 0));

return null;
}));
});
repl_tooling.editor_integration.configs.reg_commands = (function repl_tooling$editor_integration$configs$reg_commands(editor_state,cmds_from_tooling,config_file){
repl_tooling.commands_to_repl.pathom.reset_resolvers();

return promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(repl_tooling.editor_integration.configs.fns_or_check_errors(editor_state,config_file),(function (cmds_from_config){
return promesa.protocols._bind(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cmds_from_tooling,cmds_from_config], 0)),new cljs.core.Keyword(null,"let","let",-1282412701),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"then","then",460598070),new cljs.core.Keyword(null,"catch","catch",1038065524)], 0)),(function (commands){
return promesa.protocols._bind(null,(function (___31810__auto__){
return promesa.protocols._bind(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(editor_state,cljs.core.assoc,new cljs.core.Keyword("editor","commands","editor/commands",1134888579),commands),(function (___31809__auto__){
return promesa.protocols._promise(repl_tooling.editor_integration.commands.run_callback_BANG_.cljs$core$IFn$_invoke$arity$variadic(editor_state,new cljs.core.Keyword(null,"register-commands","register-commands",-552391338),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([commands], 0)));
}));
}));
}));
}));
}));
});
repl_tooling.editor_integration.configs.clojure_renderer = (function repl_tooling$editor_integration$configs$clojure_renderer(editor_state,edn){
var fake_res = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),edn,new cljs.core.Keyword(null,"parsed?","parsed?",44224124),true,new cljs.core.Keyword(null,"as-text","as-text",-449861067),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([edn], 0))], null);
var parsed_ratom = repl_tooling.editor_integration.renderer.parse_result(fake_res,null,editor_state);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [repl_tooling.editor_integration.renderer.view_for_result,parsed_ratom], null);
});
repl_tooling.editor_integration.configs.register_custom_tags_BANG_ = (function repl_tooling$editor_integration$configs$register_custom_tags_BANG_(editor_state){
repl_tooling.ui.pinkie.register_tag(new cljs.core.Keyword("div","ansi","div/ansi",1415024159),repl_tooling.editor_integration.renderer.pinkie.ansi_tag);

repl_tooling.ui.pinkie.register_tag(new cljs.core.Keyword("div","clj","div/clj",-660599991),(function (p1__146945_SHARP_){
return repl_tooling.editor_integration.configs.clojure_renderer(editor_state,p1__146945_SHARP_);
}));

repl_tooling.editor_integration.renderer.pinkie.register_tag(new cljs.core.Keyword("div","md","div/md",705090030),repl_tooling.editor_integration.renderer.pinkie.markdown_tag);

return repl_tooling.ui.pinkie.register_tag(new cljs.core.Keyword("div","clj-code","div/clj-code",483850403),repl_tooling.editor_integration.renderer.pinkie.code_tag);
});
repl_tooling.editor_integration.configs.prepare_commands = (function repl_tooling$editor_integration$configs$prepare_commands(editor_state,cmds_from_tooling){
repl_tooling.editor_integration.configs.register_custom_tags_BANG_(editor_state);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(editor_state,cljs.core.assoc,new cljs.core.Keyword("editor","commands","editor/commands",1134888579),cmds_from_tooling);

return promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(new cljs.core.Keyword(null,"config-file-path","config-file-path",-862460128).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("editor","callbacks","editor/callbacks",1179124831).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(editor_state))),(function (config_file){
return promesa.protocols._bind(null,(function (___31810__auto__){
return promesa.protocols._bind(repl_tooling.editor_integration.configs.watch_config(editor_state,cmds_from_tooling,config_file),(function (___31809__auto__){
return promesa.protocols._promise(repl_tooling.editor_integration.configs.reg_commands(editor_state,cmds_from_tooling,config_file));
}));
}));
}));
}));
});

//# sourceMappingURL=repl_tooling.editor_integration.configs.js.map
