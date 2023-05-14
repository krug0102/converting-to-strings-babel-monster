goog.provide('com.wsscode.pathom3.path');
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom3.path","path-entry","com.wsscode.pathom3.path/path-entry",2017607573),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword("com.wsscode.pathom3.attribute","attribute","com.wsscode.pathom3.attribute/attribute",1003469786),new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword("edn-query-language.core","ident","edn-query-language.core/ident",419196228),new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.Symbol("cljs.core","nat-int?","cljs.core/nat-int?",-164364171,null),new cljs.core.Keyword(null,"call","call",-519999866),new cljs.core.Symbol("cljs.core","symbol?","cljs.core/symbol?",1422196122,null)),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.Keyword(null,"call","call",-519999866)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom3.attribute","attribute","com.wsscode.pathom3.attribute/attribute",1003469786),new cljs.core.Keyword("edn-query-language.core","ident","edn-query-language.core/ident",419196228),new cljs.core.Symbol("cljs.core","nat-int?","cljs.core/nat-int?",-164364171,null),new cljs.core.Symbol("cljs.core","symbol?","cljs.core/symbol?",1422196122,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom3.attribute","attribute","com.wsscode.pathom3.attribute/attribute",1003469786),new cljs.core.Keyword("edn-query-language.core","ident","edn-query-language.core/ident",419196228),cljs.core.nat_int_QMARK_,cljs.core.symbol_QMARK_], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom3.path","path","com.wsscode.pathom3.path/path",1029673558),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom3.path","path-entry","com.wsscode.pathom3.path/path-entry",2017607573),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null))),cljs.spec.alpha.nilable_impl(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom3.path","path-entry","com.wsscode.pathom3.path/path-entry",2017607573),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom3.path","path-entry","com.wsscode.pathom3.path/path-entry",2017607573),new cljs.core.Keyword("com.wsscode.pathom3.path","path-entry","com.wsscode.pathom3.path/path-entry",2017607573),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__81970){
return cljs.core.vector_QMARK_(G__81970);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.vector_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom3.path","path-entry","com.wsscode.pathom3.path/path-entry",2017607573),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null))], null),null),null));
com.wsscode.pathom3.path.append_path = (function com$wsscode$pathom3$path$append_path(env,path_entry){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.Keyword("com.wsscode.pathom3.path","path","com.wsscode.pathom3.path/path",1029673558),com.wsscode.misc.coll.vconj,path_entry);
});
/**
 * Check if current path is the root, meaning a blank path.
 */
com.wsscode.pathom3.path.root_QMARK_ = (function com$wsscode$pathom3$path$root_QMARK_(p__81974){
var map__81975 = p__81974;
var map__81975__$1 = cljs.core.__destructure_map(map__81975);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81975__$1,new cljs.core.Keyword("com.wsscode.pathom3.path","path","com.wsscode.pathom3.path/path",1029673558));
return cljs.core.empty_QMARK_(path);
});

//# sourceMappingURL=com.wsscode.pathom3.path.js.map
