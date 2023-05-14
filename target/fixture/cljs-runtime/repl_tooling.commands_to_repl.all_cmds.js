goog.provide('repl_tooling.commands_to_repl.all_cmds');
/**
 * Disconnect all REPLs. Indempotent.
 */
repl_tooling.commands_to_repl.all_cmds.disconnect_BANG_ = (function repl_tooling$commands_to_repl$all_cmds$disconnect_BANG_(){
repl_tooling.integrations.repls.disconnect_BANG_(new cljs.core.Keyword(null,"clj-eval","clj-eval",-1090238509));

repl_tooling.integrations.repls.disconnect_BANG_(new cljs.core.Keyword(null,"clj-aux","clj-aux",-1228071979));

repl_tooling.integrations.repls.disconnect_BANG_(new cljs.core.Keyword(null,"cljs-aux","cljs-aux",-1599754418));

return repl_tooling.integrations.repls.disconnect_BANG_(new cljs.core.Keyword(null,"cljs-eval","cljs-eval",1860675817));
});
/**
 * Disconnect all REPLs. Indempotent.
 */
repl_tooling.commands_to_repl.all_cmds.handle_disconnect_BANG_ = (function repl_tooling$commands_to_repl$all_cmds$handle_disconnect_BANG_(state){
repl_tooling.commands_to_repl.all_cmds.disconnect_BANG_();

return cljs.core.reset_BANG_(state,null);
});
repl_tooling.commands_to_repl.all_cmds.eval_range = (function repl_tooling$commands_to_repl$all_cmds$eval_range(state,p__140634,opts,function$){
var map__140635 = p__140634;
var map__140635__$1 = cljs.core.__destructure_map(map__140635);
var data = map__140635__$1;
var contents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__140635__$1,new cljs.core.Keyword(null,"contents","contents",-1567174023));
var range = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__140635__$1,new cljs.core.Keyword(null,"range","range",1639692286));
var vec__140636 = range;
var start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__140636,(0),null);
var vec__140639 = (function$.cljs$core$IFn$_invoke$arity$2 ? function$.cljs$core$IFn$_invoke$arity$2(contents,start) : function$.call(null,contents,start));
var eval_range = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__140639,(0),null);
var code = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__140639,(1),null);
if(cljs.core.truth_(eval_range)){
var vec__140642 = repl_tooling.editor_helpers.ns_range_for(contents,cljs.core.first(eval_range));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__140642,(0),null);
var namespace = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__140642,(1),null);
return repl_tooling.editor_integration.evaluation.eval_cmd(state,code,namespace,eval_range,data,opts);
} else {
return null;
}
});
repl_tooling.commands_to_repl.all_cmds.eval_block = (function repl_tooling$commands_to_repl$all_cmds$eval_block(state,data){
return promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(data,(function (d){
return promesa.protocols._bind(null,(function (___31810__auto__){
return promesa.protocols._promise(repl_tooling.commands_to_repl.all_cmds.eval_range(state,d,cljs.core.PersistentArrayMap.EMPTY,repl_tooling.editor_helpers.block_for));
}));
}));
}));
});
repl_tooling.commands_to_repl.all_cmds.eval_top_block = (function repl_tooling$commands_to_repl$all_cmds$eval_top_block(state,data){
return promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(data,(function (d){
return promesa.protocols._bind(null,(function (___31810__auto__){
return promesa.protocols._promise(repl_tooling.commands_to_repl.all_cmds.eval_range(state,d,cljs.core.PersistentArrayMap.EMPTY,repl_tooling.editor_helpers.top_block_for));
}));
}));
}));
});
repl_tooling.commands_to_repl.all_cmds.eval_selection = (function repl_tooling$commands_to_repl$all_cmds$eval_selection(state,data){
return promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(data,(function (p__140653){
var map__140654 = p__140653;
var map__140654__$1 = cljs.core.__destructure_map(map__140654);
var d = map__140654__$1;
var range = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__140654__$1,new cljs.core.Keyword(null,"range","range",1639692286));
return promesa.protocols._bind(null,(function (___31810__auto__){
return promesa.protocols._promise(repl_tooling.commands_to_repl.all_cmds.eval_range(state,d,cljs.core.PersistentArrayMap.EMPTY,(function (contents,_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [range,(repl_tooling.editor_helpers.text_in_range.cljs$core$IFn$_invoke$arity$2 ? repl_tooling.editor_helpers.text_in_range.cljs$core$IFn$_invoke$arity$2(contents,range) : repl_tooling.editor_helpers.text_in_range.call(null,contents,range))], null);
})));
}));
}));
}));
});
repl_tooling.commands_to_repl.all_cmds.all = (function repl_tooling$commands_to_repl$all_cmds$all(state,p__140657,repl_kind){
var map__140659 = p__140657;
var map__140659__$1 = cljs.core.__destructure_map(map__140659);
var opts = map__140659__$1;
var editor_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__140659__$1,new cljs.core.Keyword(null,"editor-data","editor-data",-2084300305));
return promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(repl_tooling.commands_to_repl.orchard.cmds(state),(function (orchard_cmds){
return promesa.protocols._bind(new cljs.core.Keyword(null,"config-file-path","config-file-path",-862460128).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("editor","callbacks","editor/callbacks",1179124831).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state))),(function (config_file){
return promesa.protocols._bind(null,(function (___31810__auto__){
return promesa.protocols._promise((function (){var G__140662 = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"run-test-for-var","run-test-for-var",-641344224),new cljs.core.Keyword(null,"source-for-var","source-for-var",-8035322),new cljs.core.Keyword(null,"run-tests-in-ns","run-tests-in-ns",-2088040057),new cljs.core.Keyword(null,"evaluate-block","evaluate-block",-906759120),new cljs.core.Keyword(null,"go-to-var-definition","go-to-var-definition",-956809838),new cljs.core.Keyword(null,"load-file","load-file",-424586670),new cljs.core.Keyword(null,"disconnect","disconnect",-132009289),new cljs.core.Keyword(null,"doc-for-var","doc-for-var",376145016),new cljs.core.Keyword(null,"evaluate-top-block","evaluate-top-block",-2034693127),new cljs.core.Keyword(null,"evaluate-selection","evaluate-selection",1547740826)],[new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Run test for current Var",new cljs.core.Keyword(null,"description","description",-1428560544),"Run current var as a testcase",new cljs.core.Keyword(null,"command","command",-894540724),(function (){
return promesa.protocols._bind(null,(function (___31820__auto____$1){
return promesa.protocols._bind((editor_data.cljs$core$IFn$_invoke$arity$0 ? editor_data.cljs$core$IFn$_invoke$arity$0() : editor_data.call(null)),(function (data){
return promesa.protocols._bind(null,(function (___31810__auto____$1){
return promesa.protocols._promise(repl_tooling.editor_integration.evaluation.run_test_at_cursor_BANG_(state,data));
}));
}));
}));
})], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Source for Var",new cljs.core.Keyword(null,"description","description",-1428560544),"Gets the source of the current var",new cljs.core.Keyword(null,"command","command",-894540724),(function (){
return repl_tooling.editor_integration.evaluation.source_for_var_BANG_(state);
})], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Run tests in NS",new cljs.core.Keyword(null,"description","description",-1428560544),"Run all tests on the current namespace",new cljs.core.Keyword(null,"command","command",-894540724),(function (){
return repl_tooling.editor_integration.evaluation.run_tests_in_ns_BANG_(state);
})], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Evaluate Block",new cljs.core.Keyword(null,"description","description",-1428560544),"Evaluates current block on editor's selection",new cljs.core.Keyword(null,"command","command",-894540724),(function (){
return repl_tooling.commands_to_repl.all_cmds.eval_block(state,(editor_data.cljs$core$IFn$_invoke$arity$0 ? editor_data.cljs$core$IFn$_invoke$arity$0() : editor_data.call(null)));
})], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Goto VAR definition",new cljs.core.Keyword(null,"description","description",-1428560544),"Goes to definition of the current variable",new cljs.core.Keyword(null,"command","command",-894540724),(function (){
return repl_tooling.editor_integration.definition.goto_current_var(state);
})], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Load File",new cljs.core.Keyword(null,"description","description",-1428560544),"Loads current file on a Clojure REPL",new cljs.core.Keyword(null,"command","command",-894540724),(function (){
return promesa.protocols._bind(null,(function (___31820__auto____$1){
return promesa.protocols._bind((editor_data.cljs$core$IFn$_invoke$arity$0 ? editor_data.cljs$core$IFn$_invoke$arity$0() : editor_data.call(null)),(function (data){
return promesa.protocols._bind(null,(function (___31810__auto____$1){
return promesa.protocols._promise(repl_tooling.editor_integration.loaders.load_file(data,cljs.core.deref(state)));
}));
}));
}));
})], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Disconnect REPLs",new cljs.core.Keyword(null,"description","description",-1428560544),"Disconnect all current connected REPLs",new cljs.core.Keyword(null,"command","command",-894540724),repl_tooling.commands_to_repl.all_cmds.disconnect_BANG_], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Documentation for current var",new cljs.core.Keyword(null,"description","description",-1428560544),"Shows documentation for the current var under cursor",new cljs.core.Keyword(null,"command","command",-894540724),(function (){
return repl_tooling.editor_integration.doc.doc_for_var(state);
})], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Evaluate Top Block",new cljs.core.Keyword(null,"description","description",-1428560544),"Evaluates top block block on current editor's selection",new cljs.core.Keyword(null,"command","command",-894540724),(function (){
return repl_tooling.commands_to_repl.all_cmds.eval_top_block(state,(editor_data.cljs$core$IFn$_invoke$arity$0 ? editor_data.cljs$core$IFn$_invoke$arity$0() : editor_data.call(null)));
})], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Evaluate Selection",new cljs.core.Keyword(null,"description","description",-1428560544),"Evaluates current editor's selection",new cljs.core.Keyword(null,"command","command",-894540724),(function (){
return repl_tooling.commands_to_repl.all_cmds.eval_selection(state,(editor_data.cljs$core$IFn$_invoke$arity$0 ? editor_data.cljs$core$IFn$_invoke$arity$0() : editor_data.call(null)));
})], null)]);
var G__140662__$1 = (cljs.core.truth_(config_file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__140662,new cljs.core.Keyword(null,"open-config","open-config",359107712),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Open Config File",new cljs.core.Keyword(null,"description","description",-1428560544),"Opens the current config file",new cljs.core.Keyword(null,"command","command",-894540724),(function (){
return repl_tooling.editor_integration.commands.run_callback_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword(null,"open-editor","open-editor",1337424020),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file-name","file-name",-1654217259),config_file,new cljs.core.Keyword(null,"line","line",212345235),(0)], null)], 0));
})], null)):G__140662);
var G__140662__$2 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"clj","clj",-660495428),repl_kind))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__140662__$1,new cljs.core.Keyword(null,"break-evaluation","break-evaluation",580088387),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Break Evaluation",new cljs.core.Keyword(null,"description","description",-1428560544),"Break current running eval",new cljs.core.Keyword(null,"command","command",-894540724),(function (){
return repl_tooling.eval.break$(new cljs.core.Keyword("clj","repl","clj/repl",-35234538).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)),new cljs.core.Keyword("clj","aux","clj/aux",-10310625).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)));
})], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"connect-embedded","connect-embedded",610098730),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"Connect Embedded ClojureScript REPL",new cljs.core.Keyword(null,"description","description",-1428560544),"Connects to a ClojureScript REPL inside a Clojure one",new cljs.core.Keyword(null,"command","command",-894540724),(function (){
return repl_tooling.editor_integration.embedded_clojurescript.connect_BANG_(state,opts,true);
}),new cljs.core.Keyword(null,"old-command","old-command",-117322095),(function (){
return repl_tooling.editor_integration.embedded_clojurescript.connect_BANG_(state,opts,false);
})], null)], 0)):G__140662__$1);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__140662__$2,orchard_cmds], 0));

})());
}));
}));
}));
}));
});
repl_tooling.commands_to_repl.all_cmds.fqn_for_var = (function repl_tooling$commands_to_repl$all_cmds$fqn_for_var(editor_state){
return promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(repl_tooling.editor_integration.commands.run_callback_BANG_(editor_state,new cljs.core.Keyword(null,"editor-data","editor-data",-2084300305)),(function (p__140684){
var map__140685 = p__140684;
var map__140685__$1 = cljs.core.__destructure_map(map__140685);
var contents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__140685__$1,new cljs.core.Keyword(null,"contents","contents",-1567174023));
var range = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__140685__$1,new cljs.core.Keyword(null,"range","range",1639692286));
var filename = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__140685__$1,new cljs.core.Keyword(null,"filename","filename",-1428840783));
return promesa.protocols._bind((function (){var G__140688 = contents;
var G__140689 = cljs.core.first(range);
return (repl_tooling.editor_helpers.current_var.cljs$core$IFn$_invoke$arity$2 ? repl_tooling.editor_helpers.current_var.cljs$core$IFn$_invoke$arity$2(G__140688,G__140689) : repl_tooling.editor_helpers.current_var.call(null,G__140688,G__140689));
})(),(function (p__140690){
var vec__140691 = p__140690;
var range__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__140691,(0),null);
var var$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__140691,(1),null);
return promesa.protocols._bind(repl_tooling.editor_integration.commands.run_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic(editor_state,new cljs.core.Keyword(null,"eval","eval",-1103567905),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"text","text",-1790561697),["`",cljs.core.str.cljs$core$IFn$_invoke$arity$1(var$)].join(''),new cljs.core.Keyword(null,"ignore","ignore",-1631542033),true,new cljs.core.Keyword(null,"auto-detect","auto-detect",-1255603603),true,new cljs.core.Keyword(null,"aux","aux",-10408640),true], null)], 0)),(function (res){
return promesa.protocols._bind(null,(function (___31810__auto__){
return promesa.protocols._promise(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(res,new cljs.core.Keyword(null,"range","range",1639692286),range__$1));
}));
}));
}));
}));
}));
});
repl_tooling.commands_to_repl.all_cmds.static_commands = (function repl_tooling$commands_to_repl$all_cmds$static_commands(state_ish){
var config_file = new cljs.core.Keyword(null,"config-file-path","config-file-path",-862460128).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("editor","callbacks","editor/callbacks",1179124831).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ish)));
var G__140700 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"doc-for-var","doc-for-var",376145016),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Documentation for current var",new cljs.core.Keyword(null,"description","description",-1428560544),"Shows documentation for the current var under cursor",new cljs.core.Keyword(null,"command","command",-894540724),(function (){
return repl_tooling.editor_integration.doc.doc_for_var(state_ish);
})], null),new cljs.core.Keyword(null,"go-to-var-definition","go-to-var-definition",-956809838),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Goto VAR definition",new cljs.core.Keyword(null,"description","description",-1428560544),"Goes to definition of the current variable",new cljs.core.Keyword(null,"command","command",-894540724),(function (){
return repl_tooling.editor_integration.definition.goto_current_var(state_ish);
})], null)], null);
return G__140700;
});

//# sourceMappingURL=repl_tooling.commands_to_repl.all_cmds.js.map
