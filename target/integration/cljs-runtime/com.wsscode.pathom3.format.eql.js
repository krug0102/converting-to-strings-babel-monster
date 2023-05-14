goog.provide('com.wsscode.pathom3.format.eql');
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom3.format.eql","prop->ast","com.wsscode.pathom3.format.eql/prop->ast",-87545218),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword("edn-query-language.ast","node","edn-query-language.ast/node",-1614840957)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Symbol(null,"any?","any?",-318999933,null),new cljs.core.Keyword("edn-query-language.ast","node","edn-query-language.ast/node",-1614840957)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword("edn-query-language.ast","node","edn-query-language.ast/node",-1614840957)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.any_QMARK_,new cljs.core.Keyword("edn-query-language.ast","node","edn-query-language.ast/node",-1614840957)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__81306){
return cljs.core.map_QMARK_(G__81306);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__11949__auto__,v__11950__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__11950__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword("edn-query-language.ast","node","edn-query-language.ast/node",-1614840957))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom3.format.eql","map-select-include","com.wsscode.pathom3.format.eql/map-select-include",-1328680889),new cljs.core.Keyword("com.wsscode.pathom3.attribute","attributes-set","com.wsscode.pathom3.attribute/attributes-set",-1031622660),new cljs.core.Keyword("com.wsscode.pathom3.attribute","attributes-set","com.wsscode.pathom3.attribute/attributes-set",-1031622660));
/**
 * Returns a vector with the properties at the root of the query.
 * 
 *   For example:
 * 
 *  (query-root-properties [{:a [:b]} :c])
 *  => [:a :c]
 * 
 *   In case the query is a union query, it will merge the roots of then will merge:
 * 
 *  (query-root-properties {:foo [{:a [:b]} :c]
 *                          :bar [:a :d]})
 *  => [:a :c :d]
 */
com.wsscode.pathom3.format.eql.query_root_properties = (function com$wsscode$pathom3$format$eql$query_root_properties(query){
if(cljs.core.map_QMARK_(query)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$0(),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom3.format.eql.query_root_properties,cljs.core.vals(query))));
} else {
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(edn_query_language.core.query__GT_ast(query)));
}
});
com.wsscode.pathom3.format.eql.prop = (function com$wsscode$pathom3$format$eql$prop(k){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),k,new cljs.core.Keyword(null,"key","key",-1516042587),k], null);
});
/**
 * Given an AST point, check if the children is a union query type.
 */
com.wsscode.pathom3.format.eql.union_children_QMARK_ = (function com$wsscode$pathom3$format$eql$union_children_QMARK_(ast){
return com.wsscode.misc.refs.kw_identical_QMARK_(new cljs.core.Keyword(null,"union","union",2142937499),(function (){var G__81309 = ast;
var G__81309__$1 = (((G__81309 == null))?null:new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(G__81309));
var G__81309__$2 = (((G__81309__$1 == null))?null:cljs.core.first(G__81309__$1));
if((G__81309__$2 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(G__81309__$2);
}
})());
});
/**
 * Get union children when its an union, otherwise return nil.
 */
com.wsscode.pathom3.format.eql.union_children = (function com$wsscode$pathom3$format$eql$union_children(ast){
if(com.wsscode.pathom3.format.eql.union_children_QMARK_(ast)){
return new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast)));
} else {
return null;
}
});
/**
 * Convert a union entry to a root.
 */
com.wsscode.pathom3.format.eql.union__GT_root = (function com$wsscode$pathom3$format$eql$union__GT_root(ast){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ast,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"root","root",-448657453)),new cljs.core.Keyword(null,"union-key","union-key",1529707234),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"query","query",-1288509510)], 0));
});
com.wsscode.pathom3.format.eql.union_key_on_data_QMARK_ = (function com$wsscode$pathom3$format$eql$union_key_on_data_QMARK_(p__81310,m){
var map__81311 = p__81310;
var map__81311__$1 = cljs.core.__destructure_map(map__81311);
var union_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81311__$1,new cljs.core.Keyword(null,"union-key","union-key",1529707234));
return cljs.core.contains_QMARK_(m,union_key);
});
/**
 * Check if ast children is a union type. If so, makes a decision to choose a path and
 *   return that AST.
 */
com.wsscode.pathom3.format.eql.pick_union_entry = (function com$wsscode$pathom3$format$eql$pick_union_entry(ast,m){
if(com.wsscode.pathom3.format.eql.union_children_QMARK_(ast)){
return cljs.core.some((function (ast_SINGLEQUOTE_){
if(com.wsscode.pathom3.format.eql.union_key_on_data_QMARK_(ast_SINGLEQUOTE_,m)){
return com.wsscode.pathom3.format.eql.union__GT_root(ast_SINGLEQUOTE_);
} else {
return null;
}
}),com.wsscode.pathom3.format.eql.union_children(ast));
} else {
return ast;
}
});
/**
 * Check if AST entry is a union, if so it computes a new AST entry by combining
 *   all union paths as a single entry.
 */
com.wsscode.pathom3.format.eql.maybe_merge_union_ast = (function com$wsscode$pathom3$format$eql$maybe_merge_union_ast(ast){
if(com.wsscode.pathom3.format.eql.union_children_QMARK_(ast)){
var merged_children = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"children","children",-940561982)),(function (){var G__81314 = ast;
var G__81314__$1 = (((G__81314 == null))?null:new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(G__81314));
var G__81314__$2 = (((G__81314__$1 == null))?null:cljs.core.first(G__81314__$1));
if((G__81314__$2 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(G__81314__$2);
}
})());
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(ast,new cljs.core.Keyword(null,"children","children",-940561982),merged_children,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"query","query",-1288509510),edn_query_language.core.ast__GT_query(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.Keyword(null,"children","children",-940561982),merged_children], null))], 0));
} else {
return ast;
}
});
/**
 * When key is an ident, return the first part of it. Otherwise returns nil.
 */
com.wsscode.pathom3.format.eql.ident_key = (function com$wsscode$pathom3$format$eql$ident_key(key){
if(cljs.core.vector_QMARK_(key)){
return cljs.core.first(key);
} else {
return null;
}
});
com.wsscode.pathom3.format.eql.index_ast = (function com$wsscode$pathom3$format$eql$index_ast(p__81315){
var map__81316 = p__81315;
var map__81316__$1 = cljs.core.__destructure_map(map__81316);
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81316__$1,new cljs.core.Keyword(null,"children","children",-940561982));
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(com.wsscode.misc.coll.index_by(new cljs.core.Keyword(null,"key","key",-1516042587),children),new cljs.core.Symbol(null,"*","*",345799209,null));
});
com.wsscode.pathom3.format.eql.recursive_query_QMARK_ = (function com$wsscode$pathom3$format$eql$recursive_query_QMARK_(query){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"...","...",-1926939749,null),query)) || (cljs.core.int_QMARK_(query)));
});
com.wsscode.pathom3.format.eql.map_select_entry = (function com$wsscode$pathom3$format$eql$map_select_entry(env,source,p__81319){
var map__81320 = p__81319;
var map__81320__$1 = cljs.core.__destructure_map(map__81320);
var ast = map__81320__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81320__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81320__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81320__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var temp__5751__auto__ = cljs.core.find(source,key);
if(cljs.core.truth_(temp__5751__auto__)){
var x = temp__5751__auto__;
var val = cljs.core.val(x);
var ast__$1 = ((com.wsscode.pathom3.format.eql.recursive_query_QMARK_(query))?new cljs.core.Keyword(null,"parent-ast","parent-ast",-1730341901).cljs$core$IFn$_invoke$arity$1(ast):ast);
var ast__$2 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(ast__$1,new cljs.core.Keyword(null,"children","children",-940561982),(function (p1__81317_SHARP_){
var or__4223__auto__ = p1__81317_SHARP_;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.Symbol(null,"*","*",345799209,null)], null)], null);
}
}));
return com.wsscode.misc.coll.make_map_entry(key,(cljs.core.truth_((function (){var and__4221__auto__ = com.wsscode.misc.refs.kw_identical_QMARK_(type,new cljs.core.Keyword(null,"call","call",-519999866));
if(and__4221__auto__){
return new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","mutation-error","com.wsscode.pathom3.connect.runner/mutation-error",1516517468).cljs$core$IFn$_invoke$arity$1(val);
} else {
return and__4221__auto__;
}
})())?val:((cljs.core.map_QMARK_(val))?(com.wsscode.pathom3.format.eql.map_select_ast.cljs$core$IFn$_invoke$arity$3 ? com.wsscode.pathom3.format.eql.map_select_ast.cljs$core$IFn$_invoke$arity$3(env,val,ast__$2) : com.wsscode.pathom3.format.eql.map_select_ast.call(null,env,val,ast__$2)):((com.wsscode.misc.coll.collection_QMARK_(val))?cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.empty(val),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__81318_SHARP_){
return (com.wsscode.pathom3.format.eql.map_select_ast.cljs$core$IFn$_invoke$arity$3 ? com.wsscode.pathom3.format.eql.map_select_ast.cljs$core$IFn$_invoke$arity$3(env,p1__81318_SHARP_,ast__$2) : com.wsscode.pathom3.format.eql.map_select_ast.call(null,env,p1__81318_SHARP_,ast__$2));
})),(function (){var G__81321 = val;
if(com.wsscode.misc.coll.coll_append_at_head_QMARK_(val)){
return cljs.core.reverse(G__81321);
} else {
return G__81321;
}
})()):val
))));
} else {
return null;
}
});
/**
 * Check if some of the AST children is the wildcard value, which is *.
 */
com.wsscode.pathom3.format.eql.ast_contains_wildcard_QMARK_ = (function com$wsscode$pathom3$format$eql$ast_contains_wildcard_QMARK_(p__81322){
var map__81323 = p__81322;
var map__81323__$1 = cljs.core.__destructure_map(map__81323);
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81323__$1,new cljs.core.Keyword(null,"children","children",-940561982));
return cljs.core.boolean$(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"*","*",345799209,null),null], null), null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"key","key",-1516042587),children)));
});
com.wsscode.pathom3.format.eql.extend_ast_with_wildcard = (function com$wsscode$pathom3$format$eql$extend_ast_with_wildcard(source,children){
var children_contains_QMARK_ = (function (k){
return cljs.core.boolean$(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([k]),new cljs.core.Keyword(null,"key","key",-1516042587)),children)));
});
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (children__$1,k){
if(children_contains_QMARK_(k)){
return children__$1;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(children__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.Keyword(null,"key","key",-1516042587),k,new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),k], null));
}
}),children,cljs.core.keys(source));
});
com.wsscode.pathom3.format.eql.include_extra_attrs = (function com$wsscode$pathom3$format$eql$include_extra_attrs(children,attrs){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(children,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (k){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.Keyword(null,"key","key",-1516042587),k,new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),k], null);
})),attrs);
});
/**
 * Same as map-select, but using AST as source.
 */
com.wsscode.pathom3.format.eql.map_select_ast = (function com$wsscode$pathom3$format$eql$map_select_ast(p__81329,source,ast){
var map__81331 = p__81329;
var map__81331__$1 = cljs.core.__destructure_map(map__81331);
var env = map__81331__$1;
var map_select_include = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81331__$1,new cljs.core.Keyword("com.wsscode.pathom3.format.eql","map-select-include","com.wsscode.pathom3.format.eql/map-select-include",-1328680889));
if(com.wsscode.misc.coll.native_map_QMARK_(source)){
var start = cljs.core.with_meta(cljs.core.PersistentArrayMap.EMPTY,cljs.core.meta(source));
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(start,cljs.core.keep.cljs$core$IFn$_invoke$arity$1((function (p1__81328_SHARP_){
return com.wsscode.pathom3.plugin.run_with_plugins.cljs$core$IFn$_invoke$arity$6(env,new cljs.core.Keyword("com.wsscode.pathom3.format.eql","wrap-map-select-entry","com.wsscode.pathom3.format.eql/wrap-map-select-entry",901874620),com.wsscode.pathom3.format.eql.map_select_entry,env,source,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__81328_SHARP_,new cljs.core.Keyword(null,"parent-ast","parent-ast",-1730341901),ast));
})),(function (){var G__81342 = (function (){var G__81343 = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom3.format.eql.pick_union_entry(ast,source));
if(cljs.core.truth_(map_select_include)){
return com.wsscode.pathom3.format.eql.include_extra_attrs(G__81343,map_select_include);
} else {
return G__81343;
}
})();
if(com.wsscode.pathom3.format.eql.ast_contains_wildcard_QMARK_(ast)){
return com.wsscode.pathom3.format.eql.extend_ast_with_wildcard(source,G__81342);
} else {
return G__81342;
}
})());
} else {
return source;
}
});
/**
 * Starting from a map, do a EQL selection on that map. Think of this function as
 *   a power up version of select-keys.
 * 
 *   Example:
 *   (p/map-select {:foo "bar" :deep {:a 1 :b 2}} [{:deep [:a]}])
 *   => {:deep {:a 1}}
 */
com.wsscode.pathom3.format.eql.map_select = (function com$wsscode$pathom3$format$eql$map_select(env,source,tx){
return com.wsscode.pathom3.format.eql.map_select_ast(env,source,edn_query_language.core.query__GT_ast(tx));
});
/**
 * Helper function to transform a data into an output shape.
 */
com.wsscode.pathom3.format.eql.data__GT_query = (function com$wsscode$pathom3$format$eql$data__GT_query(data){
if(cljs.core.map_QMARK_(data)){
return cljs.core.vec(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,(function (p1__81344_SHARP_){
if(cljs.core.map_QMARK_(p1__81344_SHARP_)){
return cljs.core.ffirst(p1__81344_SHARP_);
} else {
return p1__81344_SHARP_;
}
})),cljs.core.reduce_kv((function (out,k,v){
if((((k instanceof cljs.core.Keyword)) || (edn_query_language.core.ident_QMARK_(k)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,((cljs.core.map_QMARK_(v))?(function (){var q = (com.wsscode.pathom3.format.eql.data__GT_query.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom3.format.eql.data__GT_query.cljs$core$IFn$_invoke$arity$1(v) : com.wsscode.pathom3.format.eql.data__GT_query.call(null,v));
if(cljs.core.seq(q)){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([k,q]);
} else {
return k;
}
})():((cljs.core.sequential_QMARK_(v))?(function (){var shape = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (q,x){
return edn_query_language.core.merge_queries(q,(com.wsscode.pathom3.format.eql.data__GT_query.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom3.format.eql.data__GT_query.cljs$core$IFn$_invoke$arity$1(x) : com.wsscode.pathom3.format.eql.data__GT_query.call(null,x)));
}),cljs.core.PersistentVector.EMPTY,v);
if(cljs.core.seq(shape)){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([k,shape]);
} else {
return k;
}
})():k
)));
} else {
return out;
}
}),cljs.core.PersistentVector.EMPTY,data)));
} else {
return null;
}
});
com.wsscode.pathom3.format.eql.map_children__GT_children = (function com$wsscode$pathom3$format$eql$map_children__GT_children(map_children){
return cljs.core.reduce_kv((function (children,_,ast){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(children,(function (){var G__81348 = ast;
if(cljs.core.truth_(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__81348,new cljs.core.Keyword(null,"children","children",-940561982),com.wsscode.pathom3.format.eql.map_children__GT_children);
} else {
return G__81348;
}
})());
}),cljs.core.PersistentVector.EMPTY,map_children);
});
com.wsscode.pathom3.format.eql.merge_ast_children = (function com$wsscode$pathom3$format$eql$merge_ast_children(ast1,ast2){
var idx = com.wsscode.misc.coll.index_by(new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast1));
var idx_SINGLEQUOTE_ = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (idx__$1,p__81350){
var map__81351 = p__81350;
var map__81351__$1 = cljs.core.__destructure_map(map__81351);
var node = map__81351__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81351__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var node__$1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(node,new cljs.core.Keyword(null,"query","query",-1288509510));
if(cljs.core.contains_QMARK_(idx__$1,key)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(idx__$1,key,com.wsscode.pathom3.format.eql.merge_ast_children,node__$1);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(idx__$1,key,node__$1);
}
}),idx,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast2));
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2((function (){var G__81352 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ast2,ast1], 0));
var G__81352__$1 = ((cljs.core.seq(idx_SINGLEQUOTE_))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__81352,new cljs.core.Keyword(null,"children","children",-940561982),com.wsscode.pathom3.format.eql.map_children__GT_children(idx_SINGLEQUOTE_)):G__81352);
if(((cljs.core.seq(idx_SINGLEQUOTE_)) && ((!(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"root","root",-448657453),null,new cljs.core.Keyword(null,"join","join",-758861890),null], null), null),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(ast1))))))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__81352__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"join","join",-758861890));
} else {
return G__81352__$1;
}
})(),new cljs.core.Keyword(null,"query","query",-1288509510));
});

//# sourceMappingURL=com.wsscode.pathom3.format.eql.js.map
