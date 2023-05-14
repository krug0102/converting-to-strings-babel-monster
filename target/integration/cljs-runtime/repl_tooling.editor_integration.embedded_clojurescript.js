goog.provide('repl_tooling.editor_integration.embedded_clojurescript');
repl_tooling.editor_integration.embedded_clojurescript.trs = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"no-build-id","no-build-id",1370490140),"There's no build ID detected on shadow-cljs file",new cljs.core.Keyword(null,"no-shadow-file","no-shadow-file",10730743),"File shadow-cljs.edn not found",new cljs.core.Keyword(null,"no-shadow","no-shadow",-1032437495),"This project is not a shadow-cljs, can't connect to CLJS REPL",new cljs.core.Keyword(null,"workers-empty","workers-empty",2015423315),"No shadow-cljs workers running",new cljs.core.Keyword(null,"access-denied","access-denied",959449406),["Shadow Socket-REPL was given an wrong token. ","Please, be sure you have the Shadow-CLJS compiler ","running and watching some build-id"].join(''),new cljs.core.Keyword(null,"timeout-runtime","timeout-runtime",148844680),["Timeout trying to find runtime for Javascript, or ","runtime for Javascript not found. If you're connecting ","to a browser target, make sure that the browser is open, ","on the page you want, and that JS compiled by ","ClojureScript is loaded on the page. If it's not a ","browser, make sure that the app that runs the ","compiled Javascript is running"].join(''),new cljs.core.Keyword(null,"no-worker","no-worker",-1787344751),"No worker for build"], null);
repl_tooling.editor_integration.embedded_clojurescript.notify_BANG_ = (function repl_tooling$editor_integration$embedded_clojurescript$notify_BANG_(notify,params){
(notify.cljs$core$IFn$_invoke$arity$1 ? notify.cljs$core$IFn$_invoke$arity$1(params) : notify.call(null,params));

return Promise.resolve(null);
});
repl_tooling.editor_integration.embedded_clojurescript.treat_error = (function repl_tooling$editor_integration$embedded_clojurescript$treat_error(error,notify){
var message = (function (){var G__145219 = error;
if((error instanceof cljs.core.Keyword)){
return (repl_tooling.editor_integration.embedded_clojurescript.trs.cljs$core$IFn$_invoke$arity$2 ? repl_tooling.editor_integration.embedded_clojurescript.trs.cljs$core$IFn$_invoke$arity$2(G__145219,"Unknown Error") : repl_tooling.editor_integration.embedded_clojurescript.trs.call(null,G__145219,"Unknown Error"));
} else {
return G__145219;
}
})();
repl_tooling.editor_integration.embedded_clojurescript.notify_BANG_(notify,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"title","title",636505583),"Error connecting to ClojureScript",new cljs.core.Keyword(null,"message","message",-406056002),message], null));

return null;
});
repl_tooling.editor_integration.embedded_clojurescript.save_repl_info_BANG_ = (function repl_tooling$editor_integration$embedded_clojurescript$save_repl_info_BANG_(state,target,repl){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,(function (s){
return cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(s,new cljs.core.Keyword("cljs","repl","cljs/repl",-36497565),repl),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("repl","info","repl/info",-345199547),new cljs.core.Keyword("cljs","repl-env","cljs/repl-env",-1983757034)], null),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("shadow.cljs.devtools.api","compiler-env","shadow.cljs.devtools.api/compiler-env",1054051916,null),null,(1),null)),(new cljs.core.List(null,target,null,(1),null))))));
}));
});
repl_tooling.editor_integration.embedded_clojurescript.warn_html = (function repl_tooling$editor_integration$embedded_clojurescript$warn_html(title,p__145232){
var map__145233 = p__145232;
var map__145233__$1 = cljs.core.__destructure_map(map__145233);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__145233__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__145233__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var msg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__145233__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__145233__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var full_path = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(file),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
var norm_name = (((((full_path).length) > (60)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"abbr","abbr",2088591884),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),file,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border","border",1444987323),"none",new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"none"], null)], null),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,"...",cljs.core.take_last((60),full_path))], null):full_path);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col","div.col",-1800797011),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.title.error","div.title.error",-1786476143),title,": "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pre","div.pre",-1234512317),msg], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(new cljs.core.List(null,new cljs.core.Symbol(null,"fn","fn",465265323,null),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol("editor","run-callback","editor/run-callback",-732129405,null),(new cljs.core.List(null,new cljs.core.Keyword(null,"open-editor","open-editor",1337424020),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"file-name","file-name",-1654217259),file,new cljs.core.Keyword(null,"line","line",212345235),(line - (1)),new cljs.core.Keyword(null,"column","column",2078222095),(column - (1))], null),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(3),null))], null),norm_name], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.space","div.space",-1949188144)], null)], null);
});
repl_tooling.editor_integration.embedded_clojurescript.compile_error_BANG_ = (function repl_tooling$editor_integration$embedded_clojurescript$compile_error_BANG_(state,compile_error){
var txt = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(compile_error),new cljs.core.Keyword(null,"warnings","warnings",-735437651)))?"Warning":"Error");
var id = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("shadow-error-");
var warnings = cljs.core.vec(cljs.core.cons(new cljs.core.Keyword(null,"<>","<>",1280186386),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__145276_SHARP_){
return repl_tooling.editor_integration.embedded_clojurescript.warn_html(txt,p1__145276_SHARP_);
}),new cljs.core.Keyword(null,"warnings","warnings",-735437651).cljs$core$IFn$_invoke$arity$1(compile_error))));
var interactive = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.tagged_literal(new cljs.core.Symbol("repl-tooling","interactive","repl-tooling/interactive",1881969409,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"html","html",-998796897),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.title","div.title",-1929547732),"Errors while compiling"], null),warnings], null)], null))], 0));
repl_tooling.editor_integration.commands.run_callback_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword(null,"on-start-eval","on-start-eval",-560475418),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"editor-data","editor-data",-2084300305),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"filename","filename",-1428840783),"<compile>.cljs",new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)], null),new cljs.core.Keyword(null,"contents","contents",-1567174023),""], null),new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)], null)], null)], 0));

return repl_tooling.editor_integration.commands.run_callback_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword(null,"on-eval","on-eval",-1349336659),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"editor-data","editor-data",-2084300305),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"filename","filename",-1428840783),"<compile>.cljs",new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)], null),new cljs.core.Keyword(null,"contents","contents",-1567174023),""], null),new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)], null),new cljs.core.Keyword(null,"repl","repl",-35398667),null,new cljs.core.Keyword(null,"result","result",1415092211),repl_tooling.editor_helpers.parse_result(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"result","result",1415092211),interactive,new cljs.core.Keyword(null,"as-text","as-text",-449861067),interactive], null))], null)], 0));
});
repl_tooling.editor_integration.embedded_clojurescript.connect_and_update_state_BANG_ = (function repl_tooling$editor_integration$embedded_clojurescript$connect_and_update_state_BANG_(state,opts,target,upgrade_cmd){
var map__145441 = opts;
var map__145441__$1 = cljs.core.__destructure_map(map__145441);
var notify = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__145441__$1,new cljs.core.Keyword(null,"notify","notify",-1256867814));
var on_result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__145441__$1,new cljs.core.Keyword(null,"on-result","on-result",-1034982142));
var on_stdout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__145441__$1,new cljs.core.Keyword(null,"on-stdout","on-stdout",1480958368));
var map__145445 = new cljs.core.Keyword("repl","info","repl/info",-345199547).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state));
var map__145445__$1 = cljs.core.__destructure_map(map__145445);
var host = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__145445__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
var port = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__145445__$1,new cljs.core.Keyword(null,"port","port",1534937262));
var config = repl_tooling.editor_integration.commands.run_callback_BANG_(state,new cljs.core.Keyword(null,"get-config","get-config",1800808901));
var after_connect = (function (p1__145403_SHARP_){
var temp__5751__auto__ = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(p1__145403_SHARP_);
if(cljs.core.truth_(temp__5751__auto__)){
var error = temp__5751__auto__;
return repl_tooling.editor_integration.embedded_clojurescript.treat_error(error,notify);
} else {
repl_tooling.editor_integration.embedded_clojurescript.save_repl_info_BANG_(state,target,p1__145403_SHARP_);

repl_tooling.editor_integration.embedded_clojurescript.notify_BANG_(notify,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"info","info",-317069002),new cljs.core.Keyword(null,"title","title",636505583),"Connected to ClojureScript",new cljs.core.Keyword(null,"message","message",-406056002),["Connected to Shadow-CLJS target ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(target)].join('')], null));

return p1__145403_SHARP_;
}
});
if(cljs.core.truth_(target)){
if(cljs.core.truth_(upgrade_cmd)){
return repl_tooling.integrations.connection.connect_self_hosted_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"host","host",-1558485167),host,new cljs.core.Keyword(null,"port","port",1534937262),port,new cljs.core.Keyword(null,"code","code",1586293142),upgrade_cmd,new cljs.core.Keyword(null,"on-result","on-result",-1034982142),(function (p1__145413_SHARP_){
var and__4221__auto__ = on_result;
if(cljs.core.truth_(and__4221__auto__)){
return (on_result.cljs$core$IFn$_invoke$arity$1 ? on_result.cljs$core$IFn$_invoke$arity$1(p1__145413_SHARP_) : on_result.call(null,p1__145413_SHARP_));
} else {
return and__4221__auto__;
}
}),new cljs.core.Keyword(null,"on-stdout","on-stdout",1480958368),(function (p1__145417_SHARP_){
var and__4221__auto__ = on_stdout;
if(cljs.core.truth_(and__4221__auto__)){
return (on_stdout.cljs$core$IFn$_invoke$arity$1 ? on_stdout.cljs$core$IFn$_invoke$arity$1(p1__145417_SHARP_) : on_stdout.call(null,p1__145417_SHARP_));
} else {
return and__4221__auto__;
}
})], null)).then(after_connect);
} else {
return repl_tooling.integrations.connection.connect_shadow_ws_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(opts,new cljs.core.Keyword(null,"directories","directories",-900278123),new cljs.core.Keyword(null,"project-paths","project-paths",-1637469806).cljs$core$IFn$_invoke$arity$1(config),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"host","host",-1558485167),host,new cljs.core.Keyword(null,"port","port",1534937262),port,new cljs.core.Keyword(null,"build-id","build-id",1642831089),target,new cljs.core.Keyword(null,"compile-error","compile-error",-1313154526),(function (p1__145418_SHARP_){
return repl_tooling.editor_integration.embedded_clojurescript.compile_error_BANG_(state,p1__145418_SHARP_);
})], 0))).then(after_connect);
}
} else {
return repl_tooling.editor_integration.embedded_clojurescript.notify_BANG_(notify,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"warn","warn",-436710552),new cljs.core.Keyword(null,"title","title",636505583),"No option selected",new cljs.core.Keyword(null,"message","message",-406056002),"Please select a valid target for Shadow-CLJS"], null));
}
});
repl_tooling.editor_integration.embedded_clojurescript.choose_id_BANG_ = (function repl_tooling$editor_integration$embedded_clojurescript$choose_id_BANG_(state,p__145485,commands,use_new_QMARK_){
var map__145486 = p__145485;
var map__145486__$1 = cljs.core.__destructure_map(map__145486);
var opts = map__145486__$1;
var prompt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__145486__$1,new cljs.core.Keyword(null,"prompt","prompt",-78109487));
return (function (){var G__145487 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"Multiple Shadow-CLJS targets",new cljs.core.Keyword(null,"message","message",-406056002),"Choose the build target that you want to connect",new cljs.core.Keyword(null,"arguments","arguments",-1182834456),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (id){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),id,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.name(id)], null);
}),cljs.core.keys(commands))], null);
return (prompt.cljs$core$IFn$_invoke$arity$1 ? prompt.cljs$core$IFn$_invoke$arity$1(G__145487) : prompt.call(null,G__145487));
})().then((function (p1__145484_SHARP_){
return repl_tooling.editor_integration.embedded_clojurescript.connect_and_update_state_BANG_(state,opts,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p1__145484_SHARP_),(cljs.core.truth_(use_new_QMARK_)?null:cljs.core.get.cljs$core$IFn$_invoke$arity$2(commands,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p1__145484_SHARP_))));
}));
});
repl_tooling.editor_integration.embedded_clojurescript.connect_embedded = (function repl_tooling$editor_integration$embedded_clojurescript$connect_embedded(state,p__145489,use_new_QMARK_){
var map__145490 = p__145489;
var map__145490__$1 = cljs.core.__destructure_map(map__145490);
var opts = map__145490__$1;
var get_config = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__145490__$1,new cljs.core.Keyword(null,"get-config","get-config",1800808901));
var notify = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__145490__$1,new cljs.core.Keyword(null,"notify","notify",-1256867814));
var commands = repl_tooling.features.shadow_cljs.command_for(new cljs.core.Keyword(null,"project-paths","project-paths",-1637469806).cljs$core$IFn$_invoke$arity$1((get_config.cljs$core$IFn$_invoke$arity$0 ? get_config.cljs$core$IFn$_invoke$arity$0() : get_config.call(null))));
var temp__5751__auto__ = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(commands);
if(cljs.core.truth_(temp__5751__auto__)){
var error = temp__5751__auto__;
return repl_tooling.editor_integration.embedded_clojurescript.treat_error(error,notify);
} else {
var G__145491 = cljs.core.count(commands);
switch (G__145491) {
case (0):
return repl_tooling.editor_integration.embedded_clojurescript.treat_error(new cljs.core.Keyword(null,"no-build-id","no-build-id",1370490140),notify);

break;
case (1):
return repl_tooling.editor_integration.embedded_clojurescript.connect_and_update_state_BANG_(state,opts,cljs.core.first(cljs.core.keys(commands)),(cljs.core.truth_(use_new_QMARK_)?null:cljs.core.first(cljs.core.vals(commands)))).then();

break;
default:
return repl_tooling.editor_integration.embedded_clojurescript.choose_id_BANG_(state,opts,commands,use_new_QMARK_);

}
}
});
repl_tooling.editor_integration.embedded_clojurescript.connect_BANG_ = (function repl_tooling$editor_integration$embedded_clojurescript$connect_BANG_(state,p__145492,use_new_QMARK_){
var map__145493 = p__145492;
var map__145493__$1 = cljs.core.__destructure_map(map__145493);
var opts = map__145493__$1;
var notify = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__145493__$1,new cljs.core.Keyword(null,"notify","notify",-1256867814));
if(cljs.core.truth_(new cljs.core.Keyword("cljs","repl","cljs/repl",-36497565).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)))){
return repl_tooling.editor_integration.embedded_clojurescript.notify_BANG_(notify,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"warn","warn",-436710552),new cljs.core.Keyword(null,"title","title",636505583),"REPL already connected",new cljs.core.Keyword(null,"message","message",-406056002),["REPL is already connected.\n\n","Please, disconnect the current REPL ","if you want to connect to another."].join('')], null));
} else {
if(cljs.core.truth_(new cljs.core.Keyword("clj","aux","clj/aux",-10310625).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)))){
return repl_tooling.editor_integration.embedded_clojurescript.connect_embedded(state,opts,use_new_QMARK_);
} else {
return repl_tooling.editor_integration.embedded_clojurescript.notify_BANG_(notify,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"warn","warn",-436710552),new cljs.core.Keyword(null,"title","title",636505583),"REPL not connected",new cljs.core.Keyword(null,"message","message",-406056002),["To connect a self-hosted REPL, ","you first need to connect a Clojure REPL"].join('')], null));

}
}
});

//# sourceMappingURL=repl_tooling.editor_integration.embedded_clojurescript.js.map
