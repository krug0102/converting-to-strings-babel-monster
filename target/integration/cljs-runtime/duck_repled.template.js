goog.provide('duck_repled.template');
duck_repled.template.template = (function duck_repled$template$template(code,replaces){
var code__$1 = clojure.walk.postwalk((function (sym){
if((((sym instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(sym),"cljs.core")))){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("clojure.core",cljs.core.name(sym));
} else {
return sym;
}
}),code);
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clojure.walk.postwalk_replace(replaces,code__$1)], 0));
});

//# sourceMappingURL=duck_repled.template.js.map
