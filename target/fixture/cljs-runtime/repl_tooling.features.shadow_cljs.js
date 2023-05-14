goog.provide('repl_tooling.features.shadow_cljs');
repl_tooling.features.shadow_cljs.readfile = (function repl_tooling$features$shadow_cljs$readfile(shadow_path){
return cljs.core.keys(new cljs.core.Keyword(null,"builds","builds",-1946283802).cljs$core$IFn$_invoke$arity$1(cljs.reader.read_string.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),cljs.core.tagged_literal], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.js.shim.module$fs.readFileSync(shadow_path)))));
});
repl_tooling.features.shadow_cljs.cmd_for = (function repl_tooling$features$shadow_cljs$cmd_for(build_id){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("clojure.core","require","clojure.core/require",1941966779,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"shadow.cljs.devtools.api","shadow.cljs.devtools.api",1904570439,null),null,(1),null)))))),null,(1),null))))),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("shadow.cljs.devtools.api","repl","shadow.cljs.devtools.api/repl",450900220,null),null,(1),null)),(new cljs.core.List(null,build_id,null,(1),null))))),null,(1),null))], 0))));
});
repl_tooling.features.shadow_cljs.cmds_for = (function repl_tooling$features$shadow_cljs$cmds_for(shadow_path){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,repl_tooling.features.shadow_cljs.cmd_for),repl_tooling.features.shadow_cljs.readfile(shadow_path)));
});
repl_tooling.features.shadow_cljs.command_for = (function repl_tooling$features$shadow_cljs$command_for(project_paths){
var first_shadow_file = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(shadow.js.shim.module$fs.existsSync,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__161392_SHARP_){
return shadow.js.shim.module$path.join(p1__161392_SHARP_,"shadow-cljs.edn");
}),project_paths)));
if(cljs.core.truth_(first_shadow_file)){
return repl_tooling.features.shadow_cljs.cmds_for(first_shadow_file);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"no-shadow-file","no-shadow-file",10730743)], null);
}
});

//# sourceMappingURL=repl_tooling.features.shadow_cljs.js.map
