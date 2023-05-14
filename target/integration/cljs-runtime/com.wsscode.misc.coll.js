goog.provide('com.wsscode.misc.coll');
/**
 * Returns a lazy sequence of the elements of coll, removing any elements that
 *   return duplicate values when passed to a function f.
 */
com.wsscode.misc.coll.distinct_by = (function com$wsscode$misc$coll$distinct_by(var_args){
var G__80656 = arguments.length;
switch (G__80656) {
case 1:
return com.wsscode.misc.coll.distinct_by.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.wsscode.misc.coll.distinct_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.wsscode.misc.coll.distinct_by.cljs$core$IFn$_invoke$arity$1 = (function (f){
return (function (rf){
var seen = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
return (function() {
var G__80795 = null;
var G__80795__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__80795__1 = (function (result){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(result) : rf.call(null,result));
});
var G__80795__2 = (function (result,x){
var fx = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x));
if(cljs.core.contains_QMARK_(cljs.core.deref(seen),fx)){
return result;
} else {
seen.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen.cljs$core$IDeref$_deref$arity$1(null),fx));

return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(result,x) : rf.call(null,result,x));
}
});
G__80795 = function(result,x){
switch(arguments.length){
case 0:
return G__80795__0.call(this);
case 1:
return G__80795__1.call(this,result);
case 2:
return G__80795__2.call(this,result,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__80795.cljs$core$IFn$_invoke$arity$0 = G__80795__0;
G__80795.cljs$core$IFn$_invoke$arity$1 = G__80795__1;
G__80795.cljs$core$IFn$_invoke$arity$2 = G__80795__2;
return G__80795;
})()
});
}));

(com.wsscode.misc.coll.distinct_by.cljs$core$IFn$_invoke$arity$2 = (function (f,coll){
var step = (function com$wsscode$misc$coll$step(xs,seen){
return (new cljs.core.LazySeq(null,(function (){
return (function (p__80664,seen__$1){
while(true){
var vec__80665 = p__80664;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80665,(0),null);
var xs__$1 = vec__80665;
var temp__5753__auto__ = cljs.core.seq(xs__$1);
if(temp__5753__auto__){
var s = temp__5753__auto__;
var fx = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x));
if(cljs.core.contains_QMARK_(seen__$1,fx)){
var G__80799 = cljs.core.rest(s);
var G__80800 = seen__$1;
p__80664 = G__80799;
seen__$1 = G__80800;
continue;
} else {
return cljs.core.cons(x,com$wsscode$misc$coll$step(cljs.core.rest(s),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen__$1,fx)));
}
} else {
return null;
}
break;
}
})(xs,seen);
}),null,null));
});
return step(coll,cljs.core.PersistentHashSet.EMPTY);
}));

(com.wsscode.misc.coll.distinct_by.cljs$lang$maxFixedArity = 2);

/**
 * Returns a lazy sequence removing consecutive duplicates in coll when passed to a function f.
 *   Returns a transducer when no collection is provided.
 */
com.wsscode.misc.coll.dedupe_by = (function com$wsscode$misc$coll$dedupe_by(var_args){
var G__80669 = arguments.length;
switch (G__80669) {
case 1:
return com.wsscode.misc.coll.dedupe_by.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.wsscode.misc.coll.dedupe_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.wsscode.misc.coll.dedupe_by.cljs$core$IFn$_invoke$arity$1 = (function (f){
return (function (rf){
var pv = cljs.core.volatile_BANG_(new cljs.core.Keyword("com.wsscode.misc.coll","none","com.wsscode.misc.coll/none",1151350699));
return (function() {
var G__80802 = null;
var G__80802__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__80802__1 = (function (result){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(result) : rf.call(null,result));
});
var G__80802__2 = (function (result,x){
var prior = cljs.core.deref(pv);
var fx = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x));
cljs.core.vreset_BANG_(pv,fx);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(prior,fx)){
return result;
} else {
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(result,x) : rf.call(null,result,x));
}
});
G__80802 = function(result,x){
switch(arguments.length){
case 0:
return G__80802__0.call(this);
case 1:
return G__80802__1.call(this,result);
case 2:
return G__80802__2.call(this,result,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__80802.cljs$core$IFn$_invoke$arity$0 = G__80802__0;
G__80802.cljs$core$IFn$_invoke$arity$1 = G__80802__1;
G__80802.cljs$core$IFn$_invoke$arity$2 = G__80802__2;
return G__80802;
})()
});
}));

(com.wsscode.misc.coll.dedupe_by.cljs$core$IFn$_invoke$arity$2 = (function (f,coll){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$2(com.wsscode.misc.coll.dedupe_by.cljs$core$IFn$_invoke$arity$1(f),coll);
}));

(com.wsscode.misc.coll.dedupe_by.cljs$lang$maxFixedArity = 2);

/**
 * Like group by, but will keep only the last result.
 */
com.wsscode.misc.coll.index_by = (function com$wsscode$misc$coll$index_by(f,coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,x){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x)),x);
}),cljs.core.PersistentArrayMap.EMPTY,coll);
});
/**
 * Return the first element in coll that returns true for f.
 */
com.wsscode.misc.coll.find_first = (function com$wsscode$misc$coll$find_first(f,coll){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(f,coll));
});
com.wsscode.misc.coll.sconj = cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY);
com.wsscode.misc.coll.vconj = cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY);
/**
 * Add element to a vector at some specific index. Only works with vectors!
 */
com.wsscode.misc.coll.conj_at_index = (function com$wsscode$misc$coll$conj_at_index(v,idx,x){
var before = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,(0),idx);
var after = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,idx,cljs.core.count(v));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(before,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([after], 0)));
});
/**
 * Find the index of element x in coll. Return nil if element is not found.
 */
com.wsscode.misc.coll.index_of = (function com$wsscode$misc$coll$index_of(coll,x){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (_,p__80675){
var vec__80679 = p__80675;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80679,(0),null);
var x_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80679,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,x_SINGLEQUOTE_)){
return cljs.core.reduced(i);
} else {
return null;
}
}),null,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,coll));
});
/**
 * Return a blank immutable queue or create one from coll.
 */
com.wsscode.misc.coll.queue = (function com$wsscode$misc$coll$queue(var_args){
var G__80702 = arguments.length;
switch (G__80702) {
case 0:
return com.wsscode.misc.coll.queue.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return com.wsscode.misc.coll.queue.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.wsscode.misc.coll.queue.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.PersistentQueue.EMPTY;
}));

(com.wsscode.misc.coll.queue.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(com.wsscode.misc.coll.queue.cljs$core$IFn$_invoke$arity$0(),coll);
}));

(com.wsscode.misc.coll.queue.cljs$lang$maxFixedArity = 1);

/**
 * CLJC helper to create MapEntry.
 */
com.wsscode.misc.coll.make_map_entry = (function com$wsscode$misc$coll$make_map_entry(k,v){
return (new cljs.core.MapEntry(k,v,null));
});
/**
 * Map over the given hash-map keys.
 * 
 *   Example:
 *  (map-keys #(str/replace (name %) "_" "-") {"foo_bar" 1}) => {"foo-bar" 1}
 *   
 */
com.wsscode.misc.coll.map_keys = (function com$wsscode$misc$coll$map_keys(f,m){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (x){
return com.wsscode.misc.coll.make_map_entry((function (){var G__80707 = cljs.core.key(x);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__80707) : f.call(null,G__80707));
})(),cljs.core.val(x));
})),m);
});
/**
 * Map over the given hash-map vals.
 * 
 *   Example:
 *  (map-vals inc {:a 1 :b 2})
 *   
 */
com.wsscode.misc.coll.map_vals = (function com$wsscode$misc$coll$map_vals(f,m){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (x){
return com.wsscode.misc.coll.make_map_entry(cljs.core.key(x),(function (){var G__80709 = cljs.core.val(x);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__80709) : f.call(null,G__80709));
})());
})),m);
});
com.wsscode.misc.coll.filter_keys = (function com$wsscode$misc$coll$filter_keys(f,m){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$1(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(f,cljs.core.key)),m);
});
com.wsscode.misc.coll.filter_vals = (function com$wsscode$misc$coll$filter_vals(f,m){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$1(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(f,cljs.core.val)),m);
});
com.wsscode.misc.coll.remove_keys = (function com$wsscode$misc$coll$remove_keys(f,m){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$1(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(f,cljs.core.key)),m);
});
com.wsscode.misc.coll.remove_vals = (function com$wsscode$misc$coll$remove_vals(f,m){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$1(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(f,cljs.core.val)),m);
});
/**
 * Return the map keys, as a set. This also checks if the entry is a map, otherwise
 *   returns nil (instead of throw).
 */
com.wsscode.misc.coll.keys_set = (function com$wsscode$misc$coll$keys_set(m){
if(cljs.core.map_QMARK_(m)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.keys(m));
} else {
return null;
}
});
/**
 * Additive merging.
 * 
 *   When merging maps, it does a deep merge.
 *   When merging sets, makes a union of them.
 * 
 *   When value of the right side is nil, the left side will be kept.
 * 
 *   For the rest works as standard merge.
 */
com.wsscode.misc.coll.merge_grow = (function com$wsscode$misc$coll$merge_grow(var_args){
var G__80713 = arguments.length;
switch (G__80713) {
case 0:
return com.wsscode.misc.coll.merge_grow.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return com.wsscode.misc.coll.merge_grow.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.wsscode.misc.coll.merge_grow.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.wsscode.misc.coll.merge_grow.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.PersistentArrayMap.EMPTY;
}));

(com.wsscode.misc.coll.merge_grow.cljs$core$IFn$_invoke$arity$1 = (function (a){
return a;
}));

(com.wsscode.misc.coll.merge_grow.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
if(((cljs.core.set_QMARK_(a)) && (cljs.core.set_QMARK_(b)))){
return clojure.set.union.cljs$core$IFn$_invoke$arity$2(a,b);
} else {
if(((cljs.core.map_QMARK_(a)) && (cljs.core.map_QMARK_(b)))){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(com.wsscode.misc.coll.merge_grow,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b], 0));
} else {
if((b == null)){
return a;
} else {
return b;

}
}
}
}));

(com.wsscode.misc.coll.merge_grow.cljs$lang$maxFixedArity = 2);

/**
 * Like merge, but only add keys that are not present in the original map.
 */
com.wsscode.misc.coll.merge_defaults = (function com$wsscode$misc$coll$merge_defaults(m,defaults){
return cljs.core.reduce_kv((function (m__$1,k,v){
if(cljs.core.contains_QMARK_(m__$1,k)){
return m__$1;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,k,v);
}
}),m,defaults);
});
/**
 * Like assoc, but noop if v is falsy.
 */
com.wsscode.misc.coll.assoc_if = (function com$wsscode$misc$coll$assoc_if(var_args){
var G__80719 = arguments.length;
switch (G__80719) {
case 3:
return com.wsscode.misc.coll.assoc_if.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4850__auto__ = [];
var len__4829__auto___80822 = arguments.length;
var i__4830__auto___80823 = (0);
while(true){
if((i__4830__auto___80823 < len__4829__auto___80822)){
args_arr__4850__auto__.push((arguments[i__4830__auto___80823]));

var G__80824 = (i__4830__auto___80823 + (1));
i__4830__auto___80823 = G__80824;
continue;
} else {
}
break;
}

var argseq__4851__auto__ = (new cljs.core.IndexedSeq(args_arr__4850__auto__.slice((3)),(0),null));
return com.wsscode.misc.coll.assoc_if.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4851__auto__);

}
});

(com.wsscode.misc.coll.assoc_if.cljs$core$IFn$_invoke$arity$3 = (function (m,k,v){
if(cljs.core.truth_(v)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,v);
} else {
return m;
}
}));

(com.wsscode.misc.coll.assoc_if.cljs$core$IFn$_invoke$arity$variadic = (function (m,k,v,kvs){
while(true){
var ret = com.wsscode.misc.coll.assoc_if.cljs$core$IFn$_invoke$arity$3(m,k,v);
if(cljs.core.truth_(kvs)){
var G__80825 = ret;
var G__80826 = cljs.core.first(kvs);
var G__80827 = cljs.core.second(kvs);
var G__80828 = cljs.core.nnext(kvs);
m = G__80825;
k = G__80826;
v = G__80827;
kvs = G__80828;
continue;
} else {
return ret;
}
break;
}
}));

/** @this {Function} */
(com.wsscode.misc.coll.assoc_if.cljs$lang$applyTo = (function (seq80715){
var G__80716 = cljs.core.first(seq80715);
var seq80715__$1 = cljs.core.next(seq80715);
var G__80717 = cljs.core.first(seq80715__$1);
var seq80715__$2 = cljs.core.next(seq80715__$1);
var G__80718 = cljs.core.first(seq80715__$2);
var seq80715__$3 = cljs.core.next(seq80715__$2);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__80716,G__80717,G__80718,seq80715__$3);
}));

(com.wsscode.misc.coll.assoc_if.cljs$lang$maxFixedArity = (3));

/**
 * Update some key when that key is present in the map.
 */
com.wsscode.misc.coll.update_contained = (function com$wsscode$misc$coll$update_contained(var_args){
var G__80739 = arguments.length;
switch (G__80739) {
case 3:
return com.wsscode.misc.coll.update_contained.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return com.wsscode.misc.coll.update_contained.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return com.wsscode.misc.coll.update_contained.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return com.wsscode.misc.coll.update_contained.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
var args_arr__4850__auto__ = [];
var len__4829__auto___80833 = arguments.length;
var i__4830__auto___80834 = (0);
while(true){
if((i__4830__auto___80834 < len__4829__auto___80833)){
args_arr__4850__auto__.push((arguments[i__4830__auto___80834]));

var G__80835 = (i__4830__auto___80834 + (1));
i__4830__auto___80834 = G__80835;
continue;
} else {
}
break;
}

var argseq__4851__auto__ = (new cljs.core.IndexedSeq(args_arr__4850__auto__.slice((6)),(0),null));
return com.wsscode.misc.coll.update_contained.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),argseq__4851__auto__);

}
});

(com.wsscode.misc.coll.update_contained.cljs$core$IFn$_invoke$arity$3 = (function (m,k,f){
if(cljs.core.contains_QMARK_(m,k)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(m,k,f);
} else {
return m;
}
}));

(com.wsscode.misc.coll.update_contained.cljs$core$IFn$_invoke$arity$4 = (function (m,k,f,a1){
if(cljs.core.contains_QMARK_(m,k)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(m,k,f,a1);
} else {
return m;
}
}));

(com.wsscode.misc.coll.update_contained.cljs$core$IFn$_invoke$arity$5 = (function (m,k,f,a1,a2){
if(cljs.core.contains_QMARK_(m,k)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(m,k,f,a1,a2);
} else {
return m;
}
}));

(com.wsscode.misc.coll.update_contained.cljs$core$IFn$_invoke$arity$6 = (function (m,k,f,a1,a2,a3){
if(cljs.core.contains_QMARK_(m,k)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$6(m,k,f,a1,a2,a3);
} else {
return m;
}
}));

(com.wsscode.misc.coll.update_contained.cljs$core$IFn$_invoke$arity$variadic = (function (m,k,f,a1,a2,a3,args){
if(cljs.core.contains_QMARK_(m,k)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(cljs.core.update,m,k,f,a1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a2,a3,args], 0));
} else {
return m;
}
}));

/** @this {Function} */
(com.wsscode.misc.coll.update_contained.cljs$lang$applyTo = (function (seq80732){
var G__80733 = cljs.core.first(seq80732);
var seq80732__$1 = cljs.core.next(seq80732);
var G__80734 = cljs.core.first(seq80732__$1);
var seq80732__$2 = cljs.core.next(seq80732__$1);
var G__80735 = cljs.core.first(seq80732__$2);
var seq80732__$3 = cljs.core.next(seq80732__$2);
var G__80736 = cljs.core.first(seq80732__$3);
var seq80732__$4 = cljs.core.next(seq80732__$3);
var G__80737 = cljs.core.first(seq80732__$4);
var seq80732__$5 = cljs.core.next(seq80732__$4);
var G__80738 = cljs.core.first(seq80732__$5);
var seq80732__$6 = cljs.core.next(seq80732__$5);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__80733,G__80734,G__80735,G__80736,G__80737,G__80738,seq80732__$6);
}));

(com.wsscode.misc.coll.update_contained.cljs$lang$maxFixedArity = (6));

/**
 * Update some key that key is present in the map and value is truthy.
 */
com.wsscode.misc.coll.update_if = (function com$wsscode$misc$coll$update_if(var_args){
var G__80762 = arguments.length;
switch (G__80762) {
case 3:
return com.wsscode.misc.coll.update_if.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return com.wsscode.misc.coll.update_if.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return com.wsscode.misc.coll.update_if.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return com.wsscode.misc.coll.update_if.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
var args_arr__4850__auto__ = [];
var len__4829__auto___80846 = arguments.length;
var i__4830__auto___80847 = (0);
while(true){
if((i__4830__auto___80847 < len__4829__auto___80846)){
args_arr__4850__auto__.push((arguments[i__4830__auto___80847]));

var G__80848 = (i__4830__auto___80847 + (1));
i__4830__auto___80847 = G__80848;
continue;
} else {
}
break;
}

var argseq__4851__auto__ = (new cljs.core.IndexedSeq(args_arr__4850__auto__.slice((6)),(0),null));
return com.wsscode.misc.coll.update_if.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),argseq__4851__auto__);

}
});

(com.wsscode.misc.coll.update_if.cljs$core$IFn$_invoke$arity$3 = (function (m,k,f){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(m,k,f);
} else {
return m;
}
}));

(com.wsscode.misc.coll.update_if.cljs$core$IFn$_invoke$arity$4 = (function (m,k,f,a1){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(m,k,f,a1);
} else {
return m;
}
}));

(com.wsscode.misc.coll.update_if.cljs$core$IFn$_invoke$arity$5 = (function (m,k,f,a1,a2){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(m,k,f,a1,a2);
} else {
return m;
}
}));

(com.wsscode.misc.coll.update_if.cljs$core$IFn$_invoke$arity$6 = (function (m,k,f,a1,a2,a3){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$6(m,k,f,a1,a2,a3);
} else {
return m;
}
}));

(com.wsscode.misc.coll.update_if.cljs$core$IFn$_invoke$arity$variadic = (function (m,k,f,a1,a2,a3,args){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(cljs.core.update,m,k,f,a1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a2,a3,args], 0));
} else {
return m;
}
}));

/** @this {Function} */
(com.wsscode.misc.coll.update_if.cljs$lang$applyTo = (function (seq80755){
var G__80756 = cljs.core.first(seq80755);
var seq80755__$1 = cljs.core.next(seq80755);
var G__80757 = cljs.core.first(seq80755__$1);
var seq80755__$2 = cljs.core.next(seq80755__$1);
var G__80758 = cljs.core.first(seq80755__$2);
var seq80755__$3 = cljs.core.next(seq80755__$2);
var G__80759 = cljs.core.first(seq80755__$3);
var seq80755__$4 = cljs.core.next(seq80755__$3);
var G__80760 = cljs.core.first(seq80755__$4);
var seq80755__$5 = cljs.core.next(seq80755__$4);
var G__80761 = cljs.core.first(seq80755__$5);
var seq80755__$6 = cljs.core.next(seq80755__$5);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__80756,G__80757,G__80758,G__80759,G__80760,G__80761,seq80755__$6);
}));

(com.wsscode.misc.coll.update_if.cljs$lang$maxFixedArity = (6));

com.wsscode.misc.coll.native_map_QMARK_ = (function com$wsscode$misc$coll$native_map_QMARK_(x){
return (((x instanceof cljs.core.PersistentArrayMap)) || ((x instanceof cljs.core.PersistentHashMap)));
});
/**
 * Sorts output list to match input list order.
 */
com.wsscode.misc.coll.restore_order = (function com$wsscode$misc$coll$restore_order(var_args){
var G__80775 = arguments.length;
switch (G__80775) {
case 3:
return com.wsscode.misc.coll.restore_order.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return com.wsscode.misc.coll.restore_order.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.wsscode.misc.coll.restore_order.cljs$core$IFn$_invoke$arity$3 = (function (inputs,key,items){
return com.wsscode.misc.coll.restore_order.cljs$core$IFn$_invoke$arity$4(inputs,key,items,(function (p1__80772_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([key],[cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__80772_SHARP_,key)]);
}));
}));

(com.wsscode.misc.coll.restore_order.cljs$core$IFn$_invoke$arity$4 = (function (inputs,key,items,default_fn){
var index = com.wsscode.misc.coll.index_by(key,items);
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (input){
var or__4223__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(index,cljs.core.get.cljs$core$IFn$_invoke$arity$2(input,key));
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return (default_fn.cljs$core$IFn$_invoke$arity$1 ? default_fn.cljs$core$IFn$_invoke$arity$1(input) : default_fn.call(null,input));
}
})),inputs);
}));

(com.wsscode.misc.coll.restore_order.cljs$lang$maxFixedArity = 4);

/**
 * CLJC utility to get an iterator from the collection.
 */
com.wsscode.misc.coll.iterator = (function com$wsscode$misc$coll$iterator(coll){
return cljs.core.iter(coll);
});
/**
 * Return true if column add items at head with conj.
 */
com.wsscode.misc.coll.coll_append_at_head_QMARK_ = (function com$wsscode$misc$coll$coll_append_at_head_QMARK_(s){
return (!(((cljs.core.vector_QMARK_(s)) || (cljs.core.set_QMARK_(s)))));
});
/**
 * Returns true for sequential collections and sets, false for maps.
 */
com.wsscode.misc.coll.collection_QMARK_ = (function com$wsscode$misc$coll$collection_QMARK_(x){
return ((cljs.core.sequential_QMARK_(x)) || (cljs.core.set_QMARK_(x)));
});
/**
 * Compare two vectors, this expects the vectors to be ordered.
 */
com.wsscode.misc.coll.vector_compare = (function com$wsscode$misc$coll$vector_compare(p__80784,p__80785){
while(true){
var vec__80786 = p__80784;
var seq__80787 = cljs.core.seq(vec__80786);
var first__80788 = cljs.core.first(seq__80787);
var seq__80787__$1 = cljs.core.next(seq__80787);
var value1 = first__80788;
var rest1 = seq__80787__$1;
var vec__80789 = p__80785;
var seq__80790 = cljs.core.seq(vec__80789);
var first__80791 = cljs.core.first(seq__80790);
var seq__80790__$1 = cljs.core.next(seq__80790);
var value2 = first__80791;
var rest2 = seq__80790__$1;
var result = cljs.core.compare(value1,value2);
if((!((result === (0))))){
return result;
} else {
if((value1 == null)){
return (0);
} else {
var G__80870 = rest1;
var G__80871 = rest2;
p__80784 = G__80870;
p__80785 = G__80871;
continue;

}
}
break;
}
});

//# sourceMappingURL=com.wsscode.misc.coll.js.map
