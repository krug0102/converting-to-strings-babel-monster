goog.provide('repl_tooling.editor_integration.loaders');
repl_tooling.editor_integration.loaders.eval_code = (function repl_tooling$editor_integration$loaders$eval_code(code,p__139131){
var map__139132 = p__139131;
var map__139132__$1 = cljs.core.__destructure_map(map__139132);
var editor_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__139132__$1,new cljs.core.Keyword(null,"editor-data","editor-data",-2084300305));
var notify = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__139132__$1,new cljs.core.Keyword(null,"notify","notify",-1256867814));
var evaluate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__139132__$1,new cljs.core.Keyword(null,"evaluate","evaluate",1525218437));
var on_eval = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__139132__$1,new cljs.core.Keyword(null,"on-eval","on-eval",-1349336659));
var filename = new cljs.core.Keyword(null,"filename","filename",-1428840783).cljs$core$IFn$_invoke$arity$1(editor_data);
(repl_tooling.editor_helpers._STAR_out_on_aux_STAR_ = true);

return (function (){var G__139133 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",-1790561697),code,new cljs.core.Keyword(null,"auto-opts","auto-opts",-887097020),true,new cljs.core.Keyword(null,"aux","aux",-10408640),true], null);
return (evaluate.cljs$core$IFn$_invoke$arity$1 ? evaluate.cljs$core$IFn$_invoke$arity$1(G__139133) : evaluate.call(null,G__139133));
})().then((function (){
var G__139134 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"info","info",-317069002),new cljs.core.Keyword(null,"title","title",636505583),"Loaded file",new cljs.core.Keyword(null,"message","message",-406056002),filename], null);
return (notify.cljs$core$IFn$_invoke$arity$1 ? notify.cljs$core$IFn$_invoke$arity$1(G__139134) : notify.call(null,G__139134));
})).catch((function (error){
var G__139135_139149 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"title","title",636505583),"Error loading file",new cljs.core.Keyword(null,"message","message",-406056002),filename], null);
(notify.cljs$core$IFn$_invoke$arity$1 ? notify.cljs$core$IFn$_invoke$arity$1(G__139135_139149) : notify.call(null,G__139135_139149));

var G__139136 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("load-file"),new cljs.core.Keyword(null,"repl","repl",-35398667),null,new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)], null),new cljs.core.Keyword(null,"editor-data","editor-data",-2084300305),editor_data,new cljs.core.Keyword(null,"result","result",1415092211),error], null);
return (on_eval.cljs$core$IFn$_invoke$arity$1 ? on_eval.cljs$core$IFn$_invoke$arity$1(G__139136) : on_eval.call(null,G__139136));
})).finally((function (){
return (repl_tooling.editor_helpers._STAR_out_on_aux_STAR_ = false);
}));
});
repl_tooling.editor_integration.loaders.do_load_file = (function repl_tooling$editor_integration$loaders$do_load_file(p__139137){
var map__139138 = p__139137;
var map__139138__$1 = cljs.core.__destructure_map(map__139138);
var options = map__139138__$1;
var editor_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__139138__$1,new cljs.core.Keyword(null,"editor-data","editor-data",-2084300305));
var filename = clojure.string.replace(new cljs.core.Keyword(null,"filename","filename",-1428840783).cljs$core$IFn$_invoke$arity$1(editor_data),"\\","/");
var code = ["(do"," (require 'clojure.string)"," (println \"Loading\" \"",filename,"\")"," (try ","  (let [path \"",filename,"\"","        nix? (clojure.string/starts-with? (System/getProperty \"user.dir\") \"/\")","        win? (clojure.string/starts-with? (subs path 1) \":/\")","        drv  (clojure.string/lower-case (subs path 0 1))","        path (if (and nix? win?) (str \"/mnt/\" drv (subs path 2)) path)]","   (clojure.core/load-file path))))"].join('');
return repl_tooling.editor_integration.loaders.eval_code(code,options);
});
repl_tooling.editor_integration.loaders.do_load_file_simple = (function repl_tooling$editor_integration$loaders$do_load_file_simple(p__139139){
var map__139140 = p__139139;
var map__139140__$1 = cljs.core.__destructure_map(map__139140);
var options = map__139140__$1;
var editor_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__139140__$1,new cljs.core.Keyword(null,"editor-data","editor-data",-2084300305));
var filename = clojure.string.replace(new cljs.core.Keyword(null,"filename","filename",-1428840783).cljs$core$IFn$_invoke$arity$1(editor_data),"\\","/");
var code = ["(clojure.core/load-file \"",filename,"\")"].join('');
return repl_tooling.editor_integration.loaders.eval_code(code,options);
});
repl_tooling.editor_integration.loaders.load_file = (function repl_tooling$editor_integration$loaders$load_file(editor_data,state){
var map__139142 = new cljs.core.Keyword("editor","callbacks","editor/callbacks",1179124831).cljs$core$IFn$_invoke$arity$1(state);
var map__139142__$1 = cljs.core.__destructure_map(map__139142);
var notify = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__139142__$1,new cljs.core.Keyword(null,"notify","notify",-1256867814));
var get_config = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__139142__$1,new cljs.core.Keyword(null,"get-config","get-config",1800808901));
var on_eval = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__139142__$1,new cljs.core.Keyword(null,"on-eval","on-eval",-1349336659));
var repl_kind = new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("repl","info","repl/info",-345199547).cljs$core$IFn$_invoke$arity$1(state));
var options = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"notify","notify",-1256867814),notify,new cljs.core.Keyword(null,"evaluate","evaluate",1525218437),new cljs.core.Keyword(null,"eval","eval",-1103567905).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("editor","features","editor/features",1302258665).cljs$core$IFn$_invoke$arity$1(state)),new cljs.core.Keyword(null,"on-eval","on-eval",-1349336659),on_eval,new cljs.core.Keyword(null,"editor-data","editor-data",-2084300305),editor_data], null);
var temp__5751__auto__ = new cljs.core.Keyword(null,"filename","filename",-1428840783).cljs$core$IFn$_invoke$arity$1(editor_data);
if(cljs.core.truth_(temp__5751__auto__)){
var filename = temp__5751__auto__;
if(cljs.core.truth_(repl_tooling.editor_integration.evaluation.need_cljs_QMARK_((get_config.cljs$core$IFn$_invoke$arity$0 ? get_config.cljs$core$IFn$_invoke$arity$0() : get_config.call(null)),filename))){
var G__139143 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"title","title",636505583),"Can't load-file in a CLJS file",new cljs.core.Keyword(null,"message","message",-406056002),"ClojureScript files are not supported to load file"], null);
return (notify.cljs$core$IFn$_invoke$arity$1 ? notify.cljs$core$IFn$_invoke$arity$1(G__139143) : notify.call(null,G__139143));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"clj","clj",-660495428),repl_kind)){
return repl_tooling.editor_integration.loaders.do_load_file(options);
} else {
return repl_tooling.editor_integration.loaders.do_load_file_simple(options);

}
}
} else {
var G__139148 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"title","title",636505583),"No file to load",new cljs.core.Keyword(null,"message","message",-406056002),["Can't find a file to load. Please, ensure that ","you're editing a saved file."].join('')], null);
return (notify.cljs$core$IFn$_invoke$arity$1 ? notify.cljs$core$IFn$_invoke$arity$1(G__139148) : notify.call(null,G__139148));
}
});

//# sourceMappingURL=repl_tooling.editor_integration.loaders.js.map
