goog.provide('paprika.collection');
paprika.collection.map_kv = (function paprika$collection$map_kv(f,clj_map){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__66279){
var vec__66280 = p__66279;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66280,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66280,(1),null);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(k,v) : f.call(null,k,v));
}),clj_map));
});
paprika.collection.map_keys = (function paprika$collection$map_keys(f,clj_map){
return paprika.collection.map_kv((function (p1__66284_SHARP_,p2__66286_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__66284_SHARP_) : f.call(null,p1__66284_SHARP_)),p2__66286_SHARP_],null));
}),clj_map);
});
paprika.collection.map_values = (function paprika$collection$map_values(f,clj_map){
return paprika.collection.map_kv((function (p1__66290_SHARP_,p2__66292_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__66290_SHARP_,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p2__66292_SHARP_) : f.call(null,p2__66292_SHARP_))],null));
}),clj_map);
});
paprika.collection.update_in_when = (function paprika$collection$update_in_when(var_args){
var args__4835__auto__ = [];
var len__4829__auto___66319 = arguments.length;
var i__4830__auto___66320 = (0);
while(true){
if((i__4830__auto___66320 < len__4829__auto___66319)){
args__4835__auto__.push((arguments[i__4830__auto___66320]));

var G__66321 = (i__4830__auto___66320 + (1));
i__4830__auto___66320 = G__66321;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((3) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((3)),(0),null)):null);
return paprika.collection.update_in_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4836__auto__);
});

(paprika.collection.update_in_when.cljs$core$IFn$_invoke$arity$variadic = (function (map,path,fun,args){
var curr_val = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(map,path);
var new_val = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(fun,curr_val,args);
if((new_val == null)){
return map;
} else {
return cljs.core.assoc_in(map,path,new_val);
}
}));

(paprika.collection.update_in_when.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(paprika.collection.update_in_when.cljs$lang$applyTo = (function (seq66295){
var G__66296 = cljs.core.first(seq66295);
var seq66295__$1 = cljs.core.next(seq66295);
var G__66297 = cljs.core.first(seq66295__$1);
var seq66295__$2 = cljs.core.next(seq66295__$1);
var G__66299 = cljs.core.first(seq66295__$2);
var seq66295__$3 = cljs.core.next(seq66295__$2);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__66296,G__66297,G__66299,seq66295__$3);
}));

/**
 * Exactly the same as clojure.core/group-by, except it returns a single
 * element. If there are more than one element that matches the function,
 * the ending indexed element is undefined
 */
paprika.collection.index_by = (function paprika$collection$index_by(f,collection){
return clojure.core.reducers.reduce.cljs$core$IFn$_invoke$arity$3((function (map,m){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(map,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(m) : f.call(null,m)),m);
}),cljs.core.PersistentArrayMap.EMPTY,collection);
});

//# sourceMappingURL=paprika.collection.js.map
