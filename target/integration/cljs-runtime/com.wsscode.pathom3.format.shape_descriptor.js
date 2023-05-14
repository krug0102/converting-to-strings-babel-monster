goog.provide('com.wsscode.pathom3.format.shape_descriptor');
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom3.format.shape-descriptor","shape-descriptor","com.wsscode.pathom3.format.shape-descriptor/shape-descriptor",1733631433),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword("com.wsscode.pathom3.format.shape-descriptor","shape-descriptor","com.wsscode.pathom3.format.shape-descriptor/shape-descriptor",1733631433)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Symbol(null,"any?","any?",-318999933,null),new cljs.core.Keyword("com.wsscode.pathom3.format.shape-descriptor","shape-descriptor","com.wsscode.pathom3.format.shape-descriptor/shape-descriptor",1733631433)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword("com.wsscode.pathom3.format.shape-descriptor","shape-descriptor","com.wsscode.pathom3.format.shape-descriptor/shape-descriptor",1733631433)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.any_QMARK_,new cljs.core.Keyword("com.wsscode.pathom3.format.shape-descriptor","shape-descriptor","com.wsscode.pathom3.format.shape-descriptor/shape-descriptor",1733631433)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__81305){
return cljs.core.map_QMARK_(G__81305);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__11949__auto__,v__11950__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__11950__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword("com.wsscode.pathom3.format.shape-descriptor","shape-descriptor","com.wsscode.pathom3.format.shape-descriptor/shape-descriptor",1733631433))], null),null));
/**
 * Deep merge of shapes, it takes in account that values are always maps.
 */
com.wsscode.pathom3.format.shape_descriptor.merge_shapes = (function com$wsscode$pathom3$format$shape_descriptor$merge_shapes(var_args){
var G__81308 = arguments.length;
switch (G__81308) {
case 1:
return com.wsscode.pathom3.format.shape_descriptor.merge_shapes.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.wsscode.pathom3.format.shape_descriptor.merge_shapes.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.wsscode.pathom3.format.shape_descriptor.merge_shapes.cljs$core$IFn$_invoke$arity$1 = (function (a){
return a;
}));

(com.wsscode.pathom3.format.shape_descriptor.merge_shapes.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
if(((cljs.core.map_QMARK_(a)) && (cljs.core.map_QMARK_(b)))){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(com.wsscode.pathom3.format.shape_descriptor.merge_shapes,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b], 0));
} else {
if(cljs.core.map_QMARK_(a)){
return a;
} else {
if(cljs.core.map_QMARK_(b)){
return b;
} else {
return b;

}
}
}
}));

(com.wsscode.pathom3.format.shape_descriptor.merge_shapes.cljs$lang$maxFixedArity = 2);

/**
 * Helper function to transform a map into an shape descriptor.
 * 
 *   Edges of shape descriptor are always an empty map. If a value of the map is a sequence.
 *   This will combine the keys present in all items on the final shape description.
 * 
 *   WARN: this idea of merging is still under test, this may change in the future.
 */
com.wsscode.pathom3.format.shape_descriptor.data__GT_shape_descriptor = (function com$wsscode$pathom3$format$shape_descriptor$data__GT_shape_descriptor(data){
if(cljs.core.map_QMARK_(data)){
return cljs.core.reduce_kv((function (out,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(out,k,((cljs.core.map_QMARK_(v))?(com.wsscode.pathom3.format.shape_descriptor.data__GT_shape_descriptor.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom3.format.shape_descriptor.data__GT_shape_descriptor.cljs$core$IFn$_invoke$arity$1(v) : com.wsscode.pathom3.format.shape_descriptor.data__GT_shape_descriptor.call(null,v)):((cljs.core.sequential_QMARK_(v))?(function (){var shape = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (q,x){
return com.wsscode.misc.coll.merge_grow.cljs$core$IFn$_invoke$arity$2(q,(com.wsscode.pathom3.format.shape_descriptor.data__GT_shape_descriptor.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom3.format.shape_descriptor.data__GT_shape_descriptor.cljs$core$IFn$_invoke$arity$1(x) : com.wsscode.pathom3.format.shape_descriptor.data__GT_shape_descriptor.call(null,x)));
}),cljs.core.PersistentArrayMap.EMPTY,v);
if(cljs.core.seq(shape)){
return shape;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})():cljs.core.PersistentArrayMap.EMPTY
)));
}),cljs.core.PersistentArrayMap.EMPTY,data);
} else {
return null;
}
});
/**
 * Convert EQL AST to shape descriptor format.
 */
com.wsscode.pathom3.format.shape_descriptor.ast__GT_shape_descriptor = (function com$wsscode$pathom3$format$shape_descriptor$ast__GT_shape_descriptor(ast){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__81312){
var map__81313 = p__81312;
var map__81313__$1 = cljs.core.__destructure_map(map__81313);
var node = map__81313__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81313__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81313__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81313__$1,new cljs.core.Keyword(null,"children","children",-940561982));
if(com.wsscode.misc.refs.kw_identical_QMARK_(new cljs.core.Keyword(null,"union","union",2142937499),type)){
var unions = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom3.format.shape_descriptor.ast__GT_shape_descriptor),children);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(com.wsscode.pathom3.format.shape_descriptor.merge_shapes,m,unions);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,key,(com.wsscode.pathom3.format.shape_descriptor.ast__GT_shape_descriptor.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom3.format.shape_descriptor.ast__GT_shape_descriptor.cljs$core$IFn$_invoke$arity$1(node) : com.wsscode.pathom3.format.shape_descriptor.ast__GT_shape_descriptor.call(null,node)));
}
}),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast));
});
/**
 * Convert pathom output format into shape descriptor format.
 */
com.wsscode.pathom3.format.shape_descriptor.query__GT_shape_descriptor = (function com$wsscode$pathom3$format$shape_descriptor$query__GT_shape_descriptor(output){
return com.wsscode.pathom3.format.shape_descriptor.ast__GT_shape_descriptor(edn_query_language.core.query__GT_ast(output));
});
/**
 * Convert pathom output format into shape descriptor format.
 */
com.wsscode.pathom3.format.shape_descriptor.shape_descriptor__GT_ast_children = (function com$wsscode$pathom3$format$shape_descriptor$shape_descriptor__GT_ast_children(shape){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__81324){
var vec__81325 = p__81324;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81325,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81325,(1),null);
if(cljs.core.seq(v)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"join","join",-758861890),new cljs.core.Keyword(null,"key","key",-1516042587),k,new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),k,new cljs.core.Keyword(null,"children","children",-940561982),(com.wsscode.pathom3.format.shape_descriptor.shape_descriptor__GT_ast_children.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom3.format.shape_descriptor.shape_descriptor__GT_ast_children.cljs$core$IFn$_invoke$arity$1(v) : com.wsscode.pathom3.format.shape_descriptor.shape_descriptor__GT_ast_children.call(null,v))], null);
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.Keyword(null,"key","key",-1516042587),k,new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),k], null);
}
})),shape);
});
/**
 * Convert pathom output format into shape descriptor format.
 */
com.wsscode.pathom3.format.shape_descriptor.shape_descriptor__GT_ast = (function com$wsscode$pathom3$format$shape_descriptor$shape_descriptor__GT_ast(shape){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.Keyword(null,"children","children",-940561982),com.wsscode.pathom3.format.shape_descriptor.shape_descriptor__GT_ast_children(shape)], null);
});
/**
 * Convert pathom output format into shape descriptor format.
 */
com.wsscode.pathom3.format.shape_descriptor.shape_descriptor__GT_query = (function com$wsscode$pathom3$format$shape_descriptor$shape_descriptor__GT_query(shape){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__81330){
var vec__81332 = p__81330;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81332,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81332,(1),null);
if(cljs.core.seq(v)){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([k,(com.wsscode.pathom3.format.shape_descriptor.shape_descriptor__GT_query.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom3.format.shape_descriptor.shape_descriptor__GT_query.cljs$core$IFn$_invoke$arity$1(v) : com.wsscode.pathom3.format.shape_descriptor.shape_descriptor__GT_query.call(null,v))]);
} else {
return k;
}
})),shape);
});
/**
 * This helper will remove nested requirements when data is an empty collection. This
 *   allows for nested inputs with empty collections to still be valid in shape.
 */
com.wsscode.pathom3.format.shape_descriptor.relax_empty_collections = (function com$wsscode$pathom3$format$shape_descriptor$relax_empty_collections(required,data){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (r,p__81336){
var vec__81337 = p__81336;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81337,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81337,(1),null);
if(((cljs.core.contains_QMARK_(r,k)) && (((com.wsscode.misc.coll.collection_QMARK_(v)) && (cljs.core.empty_QMARK_(v)))))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(r,k,cljs.core.PersistentArrayMap.EMPTY);
} else {
if(((cljs.core.contains_QMARK_(r,k)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(r,k),cljs.core.PersistentArrayMap.EMPTY)))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(r,k,com.wsscode.pathom3.format.shape_descriptor.relax_empty_collections,v);
} else {
return r;

}
}
}),required,((cljs.core.map_QMARK_(data))?data:((com.wsscode.misc.coll.collection_QMARK_(data))?cljs.core.first(data):null
)));
});
/**
 * Given some available and required shapes, returns which items are missing from available
 *   in the required. Returns nil when nothing is missing.
 */
com.wsscode.pathom3.format.shape_descriptor.missing = (function com$wsscode$pathom3$format$shape_descriptor$missing(var_args){
var G__81341 = arguments.length;
switch (G__81341) {
case 2:
return com.wsscode.pathom3.format.shape_descriptor.missing.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.wsscode.pathom3.format.shape_descriptor.missing.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.wsscode.pathom3.format.shape_descriptor.missing.cljs$core$IFn$_invoke$arity$2 = (function (available,required){
var res = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$1((function (el){
var attr = cljs.core.key(el);
var sub_query = cljs.core.val(el);
if(cljs.core.contains_QMARK_(available,attr)){
var temp__5751__auto__ = (function (){var and__4221__auto__ = cljs.core.seq(sub_query);
if(and__4221__auto__){
return com.wsscode.pathom3.format.shape_descriptor.missing.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(available,attr),sub_query);
} else {
return and__4221__auto__;
}
})();
if(cljs.core.truth_(temp__5751__auto__)){
var sub_req = temp__5751__auto__;
return com.wsscode.misc.coll.make_map_entry(attr,sub_req);
} else {
return null;
}
} else {
return el;
}
})),required);
if(cljs.core.seq(res)){
return res;
} else {
return null;
}
}));

(com.wsscode.pathom3.format.shape_descriptor.missing.cljs$core$IFn$_invoke$arity$3 = (function (available,required,data){
return com.wsscode.pathom3.format.shape_descriptor.missing.cljs$core$IFn$_invoke$arity$2(available,com.wsscode.pathom3.format.shape_descriptor.relax_empty_collections(required,data));
}));

(com.wsscode.pathom3.format.shape_descriptor.missing.cljs$lang$maxFixedArity = 3);

/**
 * Like set/difference, for shapes.
 */
com.wsscode.pathom3.format.shape_descriptor.difference = (function com$wsscode$pathom3$format$shape_descriptor$difference(s1,s2){
return cljs.core.reduce_kv((function (out,k,sub){
var temp__5751__auto__ = cljs.core.find(s2,k);
if(cljs.core.truth_(temp__5751__auto__)){
var x = temp__5751__auto__;
var v = cljs.core.val(x);
if(((cljs.core.seq(sub)) && (cljs.core.seq(v)))){
var sub_diff = (com.wsscode.pathom3.format.shape_descriptor.difference.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom3.format.shape_descriptor.difference.cljs$core$IFn$_invoke$arity$2(sub,v) : com.wsscode.pathom3.format.shape_descriptor.difference.call(null,sub,v));
if(cljs.core.seq(sub_diff)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(out,k,sub_diff);
} else {
return out;
}
} else {
return out;
}
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(out,k,sub);
}
}),(function (){var or__4223__auto__ = cljs.core.empty(s1);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),s1);
});
/**
 * Like set/intersection, for shapes.
 */
com.wsscode.pathom3.format.shape_descriptor.intersection = (function com$wsscode$pathom3$format$shape_descriptor$intersection(s1,s2){
return cljs.core.reduce_kv((function (out,k,sub){
var temp__5751__auto__ = cljs.core.find(s2,k);
if(cljs.core.truth_(temp__5751__auto__)){
var x = temp__5751__auto__;
var v = cljs.core.val(x);
if(((cljs.core.seq(sub)) && (cljs.core.seq(v)))){
var sub_inter = (com.wsscode.pathom3.format.shape_descriptor.intersection.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom3.format.shape_descriptor.intersection.cljs$core$IFn$_invoke$arity$2(sub,v) : com.wsscode.pathom3.format.shape_descriptor.intersection.call(null,sub,v));
if(cljs.core.seq(sub_inter)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(out,k,sub_inter);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(out,k,cljs.core.PersistentArrayMap.EMPTY);
}
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(out,k,cljs.core.PersistentArrayMap.EMPTY);
}
} else {
return out;
}
}),(function (){var or__4223__auto__ = cljs.core.empty(s1);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),s1);
});
/**
 * Select the parts of data covered by shape. This is similar to select-keys, but for
 *   nested shapes.
 */
com.wsscode.pathom3.format.shape_descriptor.select_shape = (function com$wsscode$pathom3$format$shape_descriptor$select_shape(data,shape){
return cljs.core.reduce_kv((function (out,k,sub){
var temp__5751__auto__ = cljs.core.find(data,k);
if(cljs.core.truth_(temp__5751__auto__)){
var x = temp__5751__auto__;
var v = cljs.core.val(x);
if(cljs.core.seq(sub)){
if(cljs.core.map_QMARK_(v)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(out,k,(com.wsscode.pathom3.format.shape_descriptor.select_shape.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom3.format.shape_descriptor.select_shape.cljs$core$IFn$_invoke$arity$2(v,sub) : com.wsscode.pathom3.format.shape_descriptor.select_shape.call(null,v,sub)));
} else {
if(com.wsscode.misc.coll.collection_QMARK_(v)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(out,k,cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.empty(v),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__81349_SHARP_){
return (com.wsscode.pathom3.format.shape_descriptor.select_shape.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom3.format.shape_descriptor.select_shape.cljs$core$IFn$_invoke$arity$2(p1__81349_SHARP_,sub) : com.wsscode.pathom3.format.shape_descriptor.select_shape.call(null,p1__81349_SHARP_,sub));
})),v));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(out,k,v);

}
}
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(out,k,v);
}
} else {
return out;
}
}),cljs.core.empty(data),shape);
});
com.wsscode.pathom3.format.shape_descriptor.select_shape_filter_coll = (function com$wsscode$pathom3$format$shape_descriptor$select_shape_filter_coll(out,k,v,sub,sub_req){
var sub_keys = cljs.core.keys(sub_req);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(out,k,cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.empty(v),cljs.core.keep.cljs$core$IFn$_invoke$arity$1((function (p1__81353_SHARP_){
var s_SINGLEQUOTE_ = (com.wsscode.pathom3.format.shape_descriptor.select_shape_filtering.cljs$core$IFn$_invoke$arity$3 ? com.wsscode.pathom3.format.shape_descriptor.select_shape_filtering.cljs$core$IFn$_invoke$arity$3(p1__81353_SHARP_,sub,sub_req) : com.wsscode.pathom3.format.shape_descriptor.select_shape_filtering.call(null,p1__81353_SHARP_,sub,sub_req));
if(cljs.core.every_QMARK_((function (x){
return cljs.core.contains_QMARK_(s_SINGLEQUOTE_,x);
}),sub_keys)){
return s_SINGLEQUOTE_;
} else {
return null;
}
})),v));
});
/**
 * Like select-shape, but in case of collections, if some item doesn't have all the
 *   required keys, its removed from the collection.
 */
com.wsscode.pathom3.format.shape_descriptor.select_shape_filtering = (function com$wsscode$pathom3$format$shape_descriptor$select_shape_filtering(var_args){
var G__81355 = arguments.length;
switch (G__81355) {
case 2:
return com.wsscode.pathom3.format.shape_descriptor.select_shape_filtering.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.wsscode.pathom3.format.shape_descriptor.select_shape_filtering.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.wsscode.pathom3.format.shape_descriptor.select_shape_filtering.cljs$core$IFn$_invoke$arity$2 = (function (data,shape){
return com.wsscode.pathom3.format.shape_descriptor.select_shape_filtering.cljs$core$IFn$_invoke$arity$3(data,shape,shape);
}));

(com.wsscode.pathom3.format.shape_descriptor.select_shape_filtering.cljs$core$IFn$_invoke$arity$3 = (function (data,shape,required_shape){
return cljs.core.reduce_kv((function (out,k,sub){
var temp__5751__auto__ = cljs.core.find(data,k);
if(cljs.core.truth_(temp__5751__auto__)){
var x = temp__5751__auto__;
var v = cljs.core.val(x);
if(cljs.core.seq(sub)){
var sub_req = cljs.core.get.cljs$core$IFn$_invoke$arity$2(required_shape,k);
if(cljs.core.map_QMARK_(v)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(out,k,com.wsscode.pathom3.format.shape_descriptor.select_shape_filtering.cljs$core$IFn$_invoke$arity$3(v,sub,sub_req));
} else {
if(com.wsscode.misc.coll.collection_QMARK_(v)){
return com.wsscode.pathom3.format.shape_descriptor.select_shape_filter_coll(out,k,v,sub,sub_req);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(out,k,v);

}
}
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(out,k,v);
}
} else {
return out;
}
}),cljs.core.empty(data),shape);
}));

(com.wsscode.pathom3.format.shape_descriptor.select_shape_filtering.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=com.wsscode.pathom3.format.shape_descriptor.js.map
