goog.provide('repl_tooling.repl_client.source');
repl_tooling.repl_client.source.conv_node = (function repl_tooling$repl_client$source$conv_node(node){
if(((rewrite_clj.node.whitespace_or_comment_QMARK_(node)) || (rewrite_clj.node.linebreak_QMARK_(node)))){
return rewrite_clj.node.whitespace_node(" ");
} else {
return (repl_tooling.repl_client.source.normalize_command.cljs$core$IFn$_invoke$arity$1 ? repl_tooling.repl_client.source.normalize_command.cljs$core$IFn$_invoke$arity$1(node) : repl_tooling.repl_client.source.normalize_command.call(null,node));

}
});
repl_tooling.repl_client.source.normalize_command = (function repl_tooling$repl_client$source$normalize_command(command){
var G__60891 = command;
if(cljs.core.contains_QMARK_(command,new cljs.core.Keyword(null,"children","children",-940561982))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__60891,new cljs.core.Keyword(null,"children","children",-940561982),(function (p1__60889_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(repl_tooling.repl_client.source.conv_node,p1__60889_SHARP_);
}));
} else {
return G__60891;
}
});
repl_tooling.repl_client.source.parse_command = (function repl_tooling$repl_client$source$parse_command(command,remove_lines_QMARK_){
var command__$1 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(command);
var cmd = (function (){try{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",1415092211),rewrite_clj.parser.parse_string_all(command__$1)], null);
}catch (e60892){var e = e60892;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e.message], 0))], null);
}})();
var temp__5751__auto__ = new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(cmd);
if(cljs.core.truth_(temp__5751__auto__)){
var res = temp__5751__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",1415092211),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__60895 = res;
if(cljs.core.truth_(remove_lines_QMARK_)){
return repl_tooling.repl_client.source.normalize_command(G__60895);
} else {
return G__60895;
}
})())], null);
} else {
return cmd;
}
});
repl_tooling.repl_client.source.default_template = "(try\n  (clojure.core/let [res (do __COMMAND__)\n                     res (___repl-tooling.__generic_printer_blob/serialize res)]\n    ['tooling$eval-res '__ID__ {:result (clojure.core/pr-str res)\n                                :as-text (clojure.core/pr-str res)}])\n  (catch __EX_TYPE__ e #?(:clje :stack) #?(:clje st)\n    (clojure.core/let [ex #?(:clje (clojure.core/tagged-literal\n                                    'error\n                                    (___repl-tooling.__generic_printer_blob/normalize-error e st))\n                             :default (___repl-tooling.__generic_printer_blob/serialize e))]\n      ['tooling$eval-res '__ID__ {:error (clojure.core/pr-str ex)\n                                  :as-text (clojure.core/pr-str ex)}])))\n";
repl_tooling.repl_client.source.wrap_command = (function repl_tooling$repl_client$source$wrap_command(var_args){
var G__60920 = arguments.length;
switch (G__60920) {
case 4:
return repl_tooling.repl_client.source.wrap_command.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return repl_tooling.repl_client.source.wrap_command.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(repl_tooling.repl_client.source.wrap_command.cljs$core$IFn$_invoke$arity$4 = (function (id,cmd,ex_type,strip_newlines_QMARK_){
return repl_tooling.repl_client.source.wrap_command.cljs$core$IFn$_invoke$arity$5(repl_tooling.repl_client.source.default_template,id,cmd,ex_type,strip_newlines_QMARK_);
}));

(repl_tooling.repl_client.source.wrap_command.cljs$core$IFn$_invoke$arity$5 = (function (template,id,cmd,ex_type,strip_newlines_QMARK_){
var cmd__$1 = repl_tooling.repl_client.source.parse_command(cmd,strip_newlines_QMARK_);
var temp__5751__auto__ = new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(cmd__$1);
if(cljs.core.truth_(temp__5751__auto__)){
var res = temp__5751__auto__;
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(repl_tooling.repl_client.source.parse_command(clojure.string.replace(clojure.string.replace(clojure.string.replace(template,/__COMMAND__/,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(res),"\n"].join('')),/__ID__/,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id], 0))),/__EX_TYPE__/,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ex_type], 0))),strip_newlines_QMARK_),new cljs.core.Keyword(null,"result","result",1415092211),cljs.core.str,"\n");
} else {
return cmd__$1;
}
}));

(repl_tooling.repl_client.source.wrap_command.cljs$lang$maxFixedArity = 5);

repl_tooling.repl_client.source.have_ns_command = (function repl_tooling$repl_client$source$have_ns_command(ns_name){
return ["(try (#?(:joker joker.core/require :default clojure.core/require) '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns_name),") ","true ","(catch #?(:bb java.lang.Throwable :clj java.lang.Throwable ",":joker Error :cljs :default :cljr System.Exception :clje _) _ ","false))"].join('');
});

//# sourceMappingURL=repl_tooling.repl_client.source.js.map
