goog.provide('com.wsscode.pathom3.placeholder');
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom3.placeholder","placeholder-prefixes","com.wsscode.pathom3.placeholder/placeholder-prefixes",-1875287531),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),cljs.core.string_QMARK_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__82010){
return cljs.core.set_QMARK_(G__82010);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.set_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null))], null),null));
/**
 * Check if a given key is a placeholder.
 */
com.wsscode.pathom3.placeholder.placeholder_key_QMARK_ = (function com$wsscode$pathom3$placeholder$placeholder_key_QMARK_(p__82011,k){
var map__82012 = p__82011;
var map__82012__$1 = cljs.core.__destructure_map(map__82012);
var placeholder_prefixes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82012__$1,new cljs.core.Keyword("com.wsscode.pathom3.path","placeholder-prefixes","com.wsscode.pathom3.path/placeholder-prefixes",77896209));
var placeholder_prefixes__$1 = (function (){var or__4223__auto__ = placeholder_prefixes;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [">",null], null), null);
}
})();
return (((k instanceof cljs.core.Keyword)) && (cljs.core.contains_QMARK_(placeholder_prefixes__$1,cljs.core.namespace(k))));
});
/**
 * Find the closest parent key that's not a placeholder key.
 */
com.wsscode.pathom3.placeholder.find_closest_non_placeholder_parent_join_key = (function com$wsscode$pathom3$placeholder$find_closest_non_placeholder_parent_join_key(p__82018){
var map__82019 = p__82018;
var map__82019__$1 = cljs.core.__destructure_map(map__82019);
var env = map__82019__$1;
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82019__$1,new cljs.core.Keyword("com.wsscode.pathom3.path","path","com.wsscode.pathom3.path/path",1029673558));
return cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__82017_SHARP_){
return com.wsscode.pathom3.placeholder.placeholder_key_QMARK_(env,p1__82017_SHARP_);
}),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((1),cljs.core.rseq((function (){var or__4223__auto__ = path;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})()))));
});

//# sourceMappingURL=com.wsscode.pathom3.placeholder.js.map
