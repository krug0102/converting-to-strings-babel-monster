goog.provide('clojure.math.combinatorics');
clojure.math.combinatorics._STAR__SINGLEQUOTE_ = cljs.core._STAR_;
clojure.math.combinatorics._PLUS__SINGLEQUOTE_ = cljs.core._PLUS_;
/**
 * Lazily concatenates a collection of collections into a flat sequence,
 *   because Clojure's `apply concat` is insufficiently lazy.
 */
clojure.math.combinatorics.join = (function clojure$math$combinatorics$join(colls){
return (new cljs.core.LazySeq(null,(function (){
var temp__5753__auto__ = cljs.core.seq(colls);
if(temp__5753__auto__){
var s = temp__5753__auto__;
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.first(s),(function (){var G__146420 = cljs.core.rest(s);
return (clojure.math.combinatorics.join.cljs$core$IFn$_invoke$arity$1 ? clojure.math.combinatorics.join.cljs$core$IFn$_invoke$arity$1(G__146420) : clojure.math.combinatorics.join.call(null,G__146420));
})());
} else {
return null;
}
}),null,null));
});
/**
 * Uses join to achieve lazier version of mapcat (on one collection)
 */
clojure.math.combinatorics.mapjoin = (function clojure$math$combinatorics$mapjoin(f,coll){
return clojure.math.combinatorics.join(cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,coll));
});
/**
 * Annoyingly, the built-in distinct? doesn't handle 0 args, so we need
 *   to write our own version that considers the empty-list to be distinct
 */
clojure.math.combinatorics.all_different_QMARK_ = (function clojure$math$combinatorics$all_different_QMARK_(s){
if(cljs.core.seq(s)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.distinct_QMARK_,s);
} else {
return true;
}
});
clojure.math.combinatorics.index_combinations = (function clojure$math$combinatorics$index_combinations(n,cnt){
return (new cljs.core.LazySeq(null,(function (){
var c = cljs.core.vec(cljs.core.cons(null,(function (){var iter__4622__auto__ = (function clojure$math$combinatorics$index_combinations_$_iter__146421(s__146422){
return (new cljs.core.LazySeq(null,(function (){
var s__146422__$1 = s__146422;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__146422__$1);
if(temp__5753__auto__){
var s__146422__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__146422__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__146422__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__146424 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__146423 = (0);
while(true){
if((i__146423 < size__4621__auto__)){
var j = cljs.core._nth(c__4620__auto__,i__146423);
cljs.core.chunk_append(b__146424,((j + cnt) + (- (n + (1)))));

var G__147028 = (i__146423 + (1));
i__146423 = G__147028;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__146424),clojure$math$combinatorics$index_combinations_$_iter__146421(cljs.core.chunk_rest(s__146422__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__146424),null);
}
} else {
var j = cljs.core.first(s__146422__$2);
return cljs.core.cons(((j + cnt) + (- (n + (1)))),clojure$math$combinatorics$index_combinations_$_iter__146421(cljs.core.rest(s__146422__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(n + (1))));
})()));
var iter_comb = (function clojure$math$combinatorics$index_combinations_$_iter_comb(c__$1,j){
if((j > n)){
return null;
} else {
var c__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(c__$1,j,((c__$1.cljs$core$IFn$_invoke$arity$1 ? c__$1.cljs$core$IFn$_invoke$arity$1(j) : c__$1.call(null,j)) - (1)));
if(((c__$2.cljs$core$IFn$_invoke$arity$1 ? c__$2.cljs$core$IFn$_invoke$arity$1(j) : c__$2.call(null,j)) < j)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$2,(j + (1))], null);
} else {
var c__$3 = c__$2;
var j__$1 = j;
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(j__$1,(1))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$3,j__$1], null);
} else {
var G__147033 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(c__$3,(j__$1 - (1)),((c__$3.cljs$core$IFn$_invoke$arity$1 ? c__$3.cljs$core$IFn$_invoke$arity$1(j__$1) : c__$3.call(null,j__$1)) - (1)));
var G__147034 = (j__$1 - (1));
c__$3 = G__147033;
j__$1 = G__147034;
continue;
}
break;
}
}
}
});
var step = (function clojure$math$combinatorics$index_combinations_$_step(c__$1,j){
return cljs.core.cons(cljs.core.rseq(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(c__$1,(1),(n + (1)))),(new cljs.core.LazySeq(null,(function (){
var next_step = iter_comb(c__$1,j);
if(cljs.core.truth_(next_step)){
return clojure$math$combinatorics$index_combinations_$_step((next_step.cljs$core$IFn$_invoke$arity$1 ? next_step.cljs$core$IFn$_invoke$arity$1((0)) : next_step.call(null,(0))),(next_step.cljs$core$IFn$_invoke$arity$1 ? next_step.cljs$core$IFn$_invoke$arity$1((1)) : next_step.call(null,(1))));
} else {
return null;
}
}),null,null)));
});
return step(c,(1));
}),null,null));
});
clojure.math.combinatorics.distribute = (function clojure$math$combinatorics$distribute(m,index,total,distribution,already_distributed){
var distribution__$1 = distribution;
var index__$1 = index;
var already_distributed__$1 = already_distributed;
while(true){
if((index__$1 >= cljs.core.count(m))){
return null;
} else {
var quantity_to_distribute = (total - already_distributed__$1);
var mi = (m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1(index__$1) : m.call(null,index__$1));
if((quantity_to_distribute <= mi)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(distribution__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [index__$1,quantity_to_distribute,total], null));
} else {
var G__147039 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(distribution__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [index__$1,mi,(already_distributed__$1 + mi)], null));
var G__147040 = (index__$1 + (1));
var G__147041 = (already_distributed__$1 + mi);
distribution__$1 = G__147039;
index__$1 = G__147040;
already_distributed__$1 = G__147041;
continue;
}
}
break;
}
});
clojure.math.combinatorics.next_distribution = (function clojure$math$combinatorics$next_distribution(m,total,distribution){
var vec__146427 = cljs.core.peek(distribution);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__146427,(0),null);
var this_bucket = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__146427,(1),null);
var this_and_to_the_left = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__146427,(2),null);
if((index < (cljs.core.count(m) - (1)))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this_bucket,(1))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.pop(distribution),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(index + (1)),(1),this_and_to_the_left], null));
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.pop(distribution),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,(this_bucket - (1)),(this_and_to_the_left - (1))], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(index + (1)),(1),this_and_to_the_left], null)], 0));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this_bucket,total)){
return null;
} else {
var distribution__$1 = cljs.core.pop(distribution);
while(true){
var vec__146432 = cljs.core.peek(distribution__$1);
var index__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__146432,(0),null);
var this_bucket__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__146432,(1),null);
var this_and_to_the_left__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__146432,(2),null);
var distribution__$2 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this_bucket__$1,(1)))?cljs.core.pop(distribution__$1):cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.pop(distribution__$1),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [index__$1,(this_bucket__$1 - (1)),(this_and_to_the_left__$1 - (1))], null)));
if(((total - (this_and_to_the_left__$1 - (1))) <= cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(m,(index__$1 + (1)))))){
return clojure.math.combinatorics.distribute(m,(index__$1 + (1)),total,distribution__$2,(this_and_to_the_left__$1 - (1)));
} else {
if(cljs.core.seq(distribution__$2)){
var G__147044 = distribution__$2;
distribution__$1 = G__147044;
continue;
} else {
return null;

}
}
break;
}

}
}
});
clojure.math.combinatorics.bounded_distributions = (function clojure$math$combinatorics$bounded_distributions(m,t){
var step = (function clojure$math$combinatorics$bounded_distributions_$_step(distribution){
return cljs.core.cons(distribution,(new cljs.core.LazySeq(null,(function (){
var temp__5753__auto__ = clojure.math.combinatorics.next_distribution(m,t,distribution);
if(cljs.core.truth_(temp__5753__auto__)){
var next_step = temp__5753__auto__;
return clojure$math$combinatorics$bounded_distributions_$_step(next_step);
} else {
return null;
}
}),null,null)));
});
return step(clojure.math.combinatorics.distribute(m,(0),t,cljs.core.PersistentVector.EMPTY,(0)));
});
/**
 * Handles the case when you want the combinations of a list with duplicate items.
 */
clojure.math.combinatorics.multi_comb = (function clojure$math$combinatorics$multi_comb(l,t){
var f = cljs.core.frequencies(l);
var v = cljs.core.vec(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(l));
var domain = cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(v));
var m = cljs.core.vec((function (){var iter__4622__auto__ = (function clojure$math$combinatorics$multi_comb_$_iter__146440(s__146441){
return (new cljs.core.LazySeq(null,(function (){
var s__146441__$1 = s__146441;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__146441__$1);
if(temp__5753__auto__){
var s__146441__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__146441__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__146441__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__146443 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__146442 = (0);
while(true){
if((i__146442 < size__4621__auto__)){
var i = cljs.core._nth(c__4620__auto__,i__146442);
cljs.core.chunk_append(b__146443,(function (){var G__146446 = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__146446) : f.call(null,G__146446));
})());

var G__147048 = (i__146442 + (1));
i__146442 = G__147048;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__146443),clojure$math$combinatorics$multi_comb_$_iter__146440(cljs.core.chunk_rest(s__146441__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__146443),null);
}
} else {
var i = cljs.core.first(s__146441__$2);
return cljs.core.cons((function (){var G__146448 = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__146448) : f.call(null,G__146448));
})(),clojure$math$combinatorics$multi_comb_$_iter__146440(cljs.core.rest(s__146441__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(domain);
})());
var qs = clojure.math.combinatorics.bounded_distributions(m,t);
var iter__4622__auto__ = (function clojure$math$combinatorics$multi_comb_$_iter__146449(s__146450){
return (new cljs.core.LazySeq(null,(function (){
var s__146450__$1 = s__146450;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__146450__$1);
if(temp__5753__auto__){
var s__146450__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__146450__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__146450__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__146452 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__146451 = (0);
while(true){
if((i__146451 < size__4621__auto__)){
var q = cljs.core._nth(c__4620__auto__,i__146451);
cljs.core.chunk_append(b__146452,clojure.math.combinatorics.join((function (){var iter__4622__auto__ = ((function (i__146451,q,c__4620__auto__,size__4621__auto__,b__146452,s__146450__$2,temp__5753__auto__,f,v,domain,m,qs){
return (function clojure$math$combinatorics$multi_comb_$_iter__146449_$_iter__146454(s__146455){
return (new cljs.core.LazySeq(null,((function (i__146451,q,c__4620__auto__,size__4621__auto__,b__146452,s__146450__$2,temp__5753__auto__,f,v,domain,m,qs){
return (function (){
var s__146455__$1 = s__146455;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__146455__$1);
if(temp__5753__auto____$1){
var s__146455__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__146455__$2)){
var c__4620__auto____$1 = cljs.core.chunk_first(s__146455__$2);
var size__4621__auto____$1 = cljs.core.count(c__4620__auto____$1);
var b__146457 = cljs.core.chunk_buffer(size__4621__auto____$1);
if((function (){var i__146456 = (0);
while(true){
if((i__146456 < size__4621__auto____$1)){
var vec__146466 = cljs.core._nth(c__4620__auto____$1,i__146456);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__146466,(0),null);
var this_bucket = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__146466,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__146466,(2),null);
cljs.core.chunk_append(b__146457,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(this_bucket,(v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(index) : v.call(null,index))));

var G__147049 = (i__146456 + (1));
i__146456 = G__147049;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__146457),clojure$math$combinatorics$multi_comb_$_iter__146449_$_iter__146454(cljs.core.chunk_rest(s__146455__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__146457),null);
}
} else {
var vec__146474 = cljs.core.first(s__146455__$2);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__146474,(0),null);
var this_bucket = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__146474,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__146474,(2),null);
return cljs.core.cons(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(this_bucket,(v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(index) : v.call(null,index))),clojure$math$combinatorics$multi_comb_$_iter__146449_$_iter__146454(cljs.core.rest(s__146455__$2)));
}
} else {
return null;
}
break;
}
});})(i__146451,q,c__4620__auto__,size__4621__auto__,b__146452,s__146450__$2,temp__5753__auto__,f,v,domain,m,qs))
,null,null));
});})(i__146451,q,c__4620__auto__,size__4621__auto__,b__146452,s__146450__$2,temp__5753__auto__,f,v,domain,m,qs))
;
return iter__4622__auto__(q);
})()));

var G__147050 = (i__146451 + (1));
i__146451 = G__147050;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__146452),clojure$math$combinatorics$multi_comb_$_iter__146449(cljs.core.chunk_rest(s__146450__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__146452),null);
}
} else {
var q = cljs.core.first(s__146450__$2);
return cljs.core.cons(clojure.math.combinatorics.join((function (){var iter__4622__auto__ = ((function (q,s__146450__$2,temp__5753__auto__,f,v,domain,m,qs){
return (function clojure$math$combinatorics$multi_comb_$_iter__146449_$_iter__146479(s__146480){
return (new cljs.core.LazySeq(null,(function (){
var s__146480__$1 = s__146480;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__146480__$1);
if(temp__5753__auto____$1){
var s__146480__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__146480__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__146480__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__146482 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__146481 = (0);
while(true){
if((i__146481 < size__4621__auto__)){
var vec__146486 = cljs.core._nth(c__4620__auto__,i__146481);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__146486,(0),null);
var this_bucket = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__146486,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__146486,(2),null);
cljs.core.chunk_append(b__146482,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(this_bucket,(v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(index) : v.call(null,index))));

var G__147051 = (i__146481 + (1));
i__146481 = G__147051;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__146482),clojure$math$combinatorics$multi_comb_$_iter__146449_$_iter__146479(cljs.core.chunk_rest(s__146480__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__146482),null);
}
} else {
var vec__146491 = cljs.core.first(s__146480__$2);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__146491,(0),null);
var this_bucket = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__146491,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__146491,(2),null);
return cljs.core.cons(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(this_bucket,(v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(index) : v.call(null,index))),clojure$math$combinatorics$multi_comb_$_iter__146449_$_iter__146479(cljs.core.rest(s__146480__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(q,s__146450__$2,temp__5753__auto__,f,v,domain,m,qs))
;
return iter__4622__auto__(q);
})()),clojure$math$combinatorics$multi_comb_$_iter__146449(cljs.core.rest(s__146450__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(qs);
});
/**
 * All the unique ways of taking t different elements from items
 */
clojure.math.combinatorics.combinations = (function clojure$math$combinatorics$combinations(items,t){
var v_items = cljs.core.vec(cljs.core.reverse(items));
if((t === (0))){
return (new cljs.core.List(null,cljs.core.List.EMPTY,null,(1),null));
} else {
var cnt = cljs.core.count(items);
if((t > cnt)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t,(1))){
var iter__4622__auto__ = (function clojure$math$combinatorics$combinations_$_iter__146495(s__146496){
return (new cljs.core.LazySeq(null,(function (){
var s__146496__$1 = s__146496;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__146496__$1);
if(temp__5753__auto__){
var s__146496__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__146496__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__146496__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__146498 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__146497 = (0);
while(true){
if((i__146497 < size__4621__auto__)){
var item = cljs.core._nth(c__4620__auto__,i__146497);
cljs.core.chunk_append(b__146498,(new cljs.core.List(null,item,null,(1),null)));

var G__147053 = (i__146497 + (1));
i__146497 = G__147053;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__146498),clojure$math$combinatorics$combinations_$_iter__146495(cljs.core.chunk_rest(s__146496__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__146498),null);
}
} else {
var item = cljs.core.first(s__146496__$2);
return cljs.core.cons((new cljs.core.List(null,item,null,(1),null)),clojure$math$combinatorics$combinations_$_iter__146495(cljs.core.rest(s__146496__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(items));
} else {
if(cljs.core.truth_(clojure.math.combinatorics.all_different_QMARK_(items))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t,cnt)){
return (new cljs.core.List(null,cljs.core.seq(items),null,(1),null));
} else {
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__146494_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(v_items,p1__146494_SHARP_);
}),clojure.math.combinatorics.index_combinations(t,cnt));
}
} else {
return clojure.math.combinatorics.multi_comb(items,t);

}
}
}
}
});
/**
 * Given a sequence that may have chunks, return a sequence that is 1-at-a-time
 * lazy with no chunks. Chunks are good for efficiency when the data items are
 * small, but when being processed via map, for example, a reference is kept to
 * every function result in the chunk until the entire chunk has been processed,
 * which increases the amount of memory in use that cannot be garbage
 * collected.
 */
clojure.math.combinatorics.unchunk = (function clojure$math$combinatorics$unchunk(s){
return (new cljs.core.LazySeq(null,(function (){
if(cljs.core.seq(s)){
return cljs.core.cons(cljs.core.first(s),(function (){var G__146503 = cljs.core.rest(s);
return (clojure.math.combinatorics.unchunk.cljs$core$IFn$_invoke$arity$1 ? clojure.math.combinatorics.unchunk.cljs$core$IFn$_invoke$arity$1(G__146503) : clojure.math.combinatorics.unchunk.call(null,G__146503));
})());
} else {
return null;
}
}),null,null));
});
/**
 * All the subsets of items
 */
clojure.math.combinatorics.subsets = (function clojure$math$combinatorics$subsets(items){
return clojure.math.combinatorics.mapjoin((function (n){
return clojure.math.combinatorics.combinations(items,n);
}),clojure.math.combinatorics.unchunk(cljs.core.range.cljs$core$IFn$_invoke$arity$1((cljs.core.count(items) + (1)))));
});
/**
 * All the ways to take one item from each sequence
 */
clojure.math.combinatorics.cartesian_product = (function clojure$math$combinatorics$cartesian_product(var_args){
var args__4835__auto__ = [];
var len__4829__auto___147058 = arguments.length;
var i__4830__auto___147059 = (0);
while(true){
if((i__4830__auto___147059 < len__4829__auto___147058)){
args__4835__auto__.push((arguments[i__4830__auto___147059]));

var G__147060 = (i__4830__auto___147059 + (1));
i__4830__auto___147059 = G__147060;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return clojure.math.combinatorics.cartesian_product.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(clojure.math.combinatorics.cartesian_product.cljs$core$IFn$_invoke$arity$variadic = (function (seqs){
var v_original_seqs = cljs.core.vec(seqs);
var step = (function clojure$math$combinatorics$step(v_seqs){
var increment = (function (v_seqs__$1){
var i = (cljs.core.count(v_seqs__$1) - (1));
var v_seqs__$2 = v_seqs__$1;
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,(-1))){
return null;
} else {
var temp__5751__auto__ = cljs.core.next((v_seqs__$2.cljs$core$IFn$_invoke$arity$1 ? v_seqs__$2.cljs$core$IFn$_invoke$arity$1(i) : v_seqs__$2.call(null,i)));
if(temp__5751__auto__){
var rst = temp__5751__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v_seqs__$2,i,rst);
} else {
var G__147061 = (i - (1));
var G__147062 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v_seqs__$2,i,(v_original_seqs.cljs$core$IFn$_invoke$arity$1 ? v_original_seqs.cljs$core$IFn$_invoke$arity$1(i) : v_original_seqs.call(null,i)));
i = G__147061;
v_seqs__$2 = G__147062;
continue;
}
}
break;
}
});
if(cljs.core.truth_(v_seqs)){
return cljs.core.cons(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,v_seqs),(new cljs.core.LazySeq(null,(function (){
return clojure$math$combinatorics$step(increment(v_seqs));
}),null,null)));
} else {
return null;
}
});
if(cljs.core.every_QMARK_(cljs.core.seq,seqs)){
return (new cljs.core.LazySeq(null,(function (){
return step(v_original_seqs);
}),null,null));
} else {
return null;
}
}));

(clojure.math.combinatorics.cartesian_product.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(clojure.math.combinatorics.cartesian_product.cljs$lang$applyTo = (function (seq146508){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq146508));
}));

/**
 * All the ways of taking n (possibly the same) elements from the sequence of items
 */
clojure.math.combinatorics.selections = (function clojure$math$combinatorics$selections(items,n){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.math.combinatorics.cartesian_product,cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(items)));
});
clojure.math.combinatorics.iter_perm = (function clojure$math$combinatorics$iter_perm(v){
var len = cljs.core.count(v);
var j = (function (){var i = (len - (2));
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,(-1))){
return null;
} else {
if(((v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i)) < (function (){var G__146514 = (i + (1));
return (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(G__146514) : v.call(null,G__146514));
})())){
return i;
} else {
var G__147063 = (i - (1));
i = G__147063;
continue;

}
}
break;
}
})();
if(cljs.core.truth_(j)){
var vj = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(j) : v.call(null,j));
var l = (function (){var i = (len - (1));
while(true){
if((vj < (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i)))){
return i;
} else {
var G__147064 = (i - (1));
i = G__147064;
continue;
}
break;
}
})();
var v__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(v,j,(v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(l) : v.call(null,l)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([l,vj], 0));
var k = (j + (1));
var l__$1 = (len - (1));
while(true){
if((k < l__$1)){
var G__147065 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(v__$1,k,(v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(l__$1) : v__$1.call(null,l__$1)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([l__$1,(v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(k) : v__$1.call(null,k))], 0));
var G__147066 = (k + (1));
var G__147067 = (l__$1 - (1));
v__$1 = G__147065;
k = G__147066;
l__$1 = G__147067;
continue;
} else {
return v__$1;
}
break;
}
} else {
return null;
}
});
clojure.math.combinatorics.vec_lex_permutations = (function clojure$math$combinatorics$vec_lex_permutations(v){
if(cljs.core.truth_(v)){
return cljs.core.cons(v,(new cljs.core.LazySeq(null,(function (){
var G__146525 = clojure.math.combinatorics.iter_perm(v);
return (clojure.math.combinatorics.vec_lex_permutations.cljs$core$IFn$_invoke$arity$1 ? clojure.math.combinatorics.vec_lex_permutations.cljs$core$IFn$_invoke$arity$1(G__146525) : clojure.math.combinatorics.vec_lex_permutations.call(null,G__146525));
}),null,null)));
} else {
return null;
}
});
/**
 * DEPRECATED as a public function.
 * 
 * In prior versions of the combinatorics library, there were two similar functions: permutations and lex-permutations.  It was a source of confusion to know which to call.  Now, you can always call permutations.  When appropriate (i.e., when you pass in a sorted sequence of numbers), permutations will automatically call lex-permutations as a speed optimization.
 */
clojure.math.combinatorics.lex_permutations = (function clojure$math$combinatorics$lex_permutations(c){
return (new cljs.core.LazySeq(null,(function (){
var vec_sorted = cljs.core.vec(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(c));
if((cljs.core.count(vec_sorted) === (0))){
return (new cljs.core.List(null,cljs.core.PersistentVector.EMPTY,null,(1),null));
} else {
return clojure.math.combinatorics.vec_lex_permutations(vec_sorted);
}
}),null,null));
});
/**
 * Returns true iff s is a sequence of numbers in non-decreasing order
 */
clojure.math.combinatorics.sorted_numbers_QMARK_ = (function clojure$math$combinatorics$sorted_numbers_QMARK_(s){
var and__4221__auto__ = cljs.core.every_QMARK_(cljs.core.number_QMARK_,s);
if(and__4221__auto__){
var or__4223__auto__ = cljs.core.empty_QMARK_(s);
if(or__4223__auto__){
return or__4223__auto__;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._LT__EQ_,s);
}
} else {
return and__4221__auto__;
}
});
/**
 * Handles the case when you want the permutations of a list with duplicate items.
 */
clojure.math.combinatorics.multi_perm = (function clojure$math$combinatorics$multi_perm(l){
var f = cljs.core.frequencies(l);
var v = cljs.core.vec(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(l));
var indices = clojure.math.combinatorics.join((function (){var iter__4622__auto__ = (function clojure$math$combinatorics$multi_perm_$_iter__146530(s__146531){
return (new cljs.core.LazySeq(null,(function (){
var s__146531__$1 = s__146531;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__146531__$1);
if(temp__5753__auto__){
var s__146531__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__146531__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__146531__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__146533 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__146532 = (0);
while(true){
if((i__146532 < size__4621__auto__)){
var i = cljs.core._nth(c__4620__auto__,i__146532);
cljs.core.chunk_append(b__146533,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((function (){var G__146537 = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__146537) : f.call(null,G__146537));
})(),i));

var G__147068 = (i__146532 + (1));
i__146532 = G__147068;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__146533),clojure$math$combinatorics$multi_perm_$_iter__146530(cljs.core.chunk_rest(s__146531__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__146533),null);
}
} else {
var i = cljs.core.first(s__146531__$2);
return cljs.core.cons(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((function (){var G__146539 = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__146539) : f.call(null,G__146539));
})(),i),clojure$math$combinatorics$multi_perm_$_iter__146530(cljs.core.rest(s__146531__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(v)));
})());
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.map,v),clojure.math.combinatorics.lex_permutations(indices));
});
/**
 * All the distinct permutations of items, lexicographic by index 
 *   (special handling for duplicate items).
 */
clojure.math.combinatorics.permutations = (function clojure$math$combinatorics$permutations(items){
if(cljs.core.truth_(clojure.math.combinatorics.sorted_numbers_QMARK_(items))){
return clojure.math.combinatorics.lex_permutations(items);
} else {
if(cljs.core.truth_(clojure.math.combinatorics.all_different_QMARK_(items))){
var v = cljs.core.vec(items);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__146541_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(v,p1__146541_SHARP_);
}),clojure.math.combinatorics.lex_permutations(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(v))));
} else {
return clojure.math.combinatorics.multi_perm(items);

}
}
});
/**
 * Every permutation of every combination of t elements from items
 */
clojure.math.combinatorics.permuted_combinations = (function clojure$math$combinatorics$permuted_combinations(items,t){
return clojure.math.combinatorics.join(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.math.combinatorics.permutations,clojure.math.combinatorics.combinations(items,t)));
});
clojure.math.combinatorics.factorial = (function clojure$math$combinatorics$factorial(n){
if(cljs.core.integer_QMARK_(n)){
} else {
throw (new Error("Assert failed: (integer? n)"));
}

if((!((n < (0))))){
} else {
throw (new Error("Assert failed: (not (neg? n))"));
}

var acc = (1);
var n__$1 = n;
while(true){
if((n__$1 === (0))){
return acc;
} else {
var G__147074 = (clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(acc,n__$1) : clojure.math.combinatorics._STAR__SINGLEQUOTE_.call(null,acc,n__$1));
var G__147075 = (n__$1 - (1));
acc = G__147074;
n__$1 = G__147075;
continue;
}
break;
}
});
/**
 * Input is a non-negative base 10 integer, output is the number in the
 * factorial number system (http://en.wikipedia.org/wiki/Factorial_number_system)
 * expressed as a list of 'digits'
 */
clojure.math.combinatorics.factorial_numbers = (function clojure$math$combinatorics$factorial_numbers(n){
if(cljs.core.integer_QMARK_(n)){
} else {
throw (new Error("Assert failed: (integer? n)"));
}

if((!((n < (0))))){
} else {
throw (new Error("Assert failed: (not (neg? n))"));
}

var n__$1 = n;
var digits = cljs.core.List.EMPTY;
var divisor = (1);
while(true){
if((n__$1 === (0))){
return digits;
} else {
var q = cljs.core.quot(n__$1,divisor);
var r = cljs.core.rem(n__$1,divisor);
var G__147076 = q;
var G__147077 = cljs.core.cons(r,digits);
var G__147078 = (divisor + (1));
n__$1 = G__147076;
digits = G__147077;
divisor = G__147078;
continue;
}
break;
}
});
clojure.math.combinatorics.remove_nth = (function clojure$math$combinatorics$remove_nth(l,n){
var acc = cljs.core.PersistentVector.EMPTY;
var l__$1 = l;
var n__$1 = n;
while(true){
if((n__$1 === (0))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(acc,cljs.core.rest(l__$1));
} else {
var G__147079 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,cljs.core.first(l__$1));
var G__147080 = cljs.core.rest(l__$1);
var G__147081 = (n__$1 - (1));
acc = G__147079;
l__$1 = G__147080;
n__$1 = G__147081;
continue;
}
break;
}
});
/**
 * Input should be a sorted sequential collection l of distinct items, 
 * output is nth-permutation (0-based)
 */
clojure.math.combinatorics.nth_permutation_distinct = (function clojure$math$combinatorics$nth_permutation_distinct(l,n){
if((n < clojure.math.combinatorics.factorial(cljs.core.count(l)))){
} else {
throw (new Error(["Assert failed: ",cljs.core.print_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([n,"is too large. Input has only",clojure.math.combinatorics.factorial(cljs.core.count(l)),"permutations."], 0)),"\n","(< n (factorial (count l)))"].join('')));
}

var length = cljs.core.count(l);
var fact_nums = clojure.math.combinatorics.factorial_numbers(n);
var indices = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((length - cljs.core.count(fact_nums)),(0)),fact_nums);
var l__$1 = l;
var perm = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_(indices)){
return perm;
} else {
var i = cljs.core.first(indices);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(l__$1,i);
var G__147082 = cljs.core.rest(indices);
var G__147083 = clojure.math.combinatorics.remove_nth(l__$1,i);
var G__147084 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(perm,item);
indices = G__147082;
l__$1 = G__147083;
perm = G__147084;
continue;
}
break;
}
});
clojure.math.combinatorics.count_permutations_from_frequencies = (function clojure$math$combinatorics$count_permutations_from_frequencies(freqs){
var counts = cljs.core.vals(freqs);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._SLASH_,clojure.math.combinatorics.factorial(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,counts)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.math.combinatorics.factorial,counts));
});
/**
 * Counts the number of distinct permutations of l
 */
clojure.math.combinatorics.count_permutations = (function clojure$math$combinatorics$count_permutations(l){
if(cljs.core.truth_(clojure.math.combinatorics.all_different_QMARK_(l))){
return clojure.math.combinatorics.factorial(cljs.core.count(l));
} else {
return clojure.math.combinatorics.count_permutations_from_frequencies(cljs.core.frequencies(l));
}
});
/**
 * Takes a sorted frequency map and returns how far into the sequence of
 * lexicographic permutations you get by varying the first item
 */
clojure.math.combinatorics.initial_perm_numbers = (function clojure$math$combinatorics$initial_perm_numbers(freqs){
return cljs.core.reductions.cljs$core$IFn$_invoke$arity$3(clojure.math.combinatorics._PLUS__SINGLEQUOTE_,(0),(function (){var iter__4622__auto__ = (function clojure$math$combinatorics$initial_perm_numbers_$_iter__146580(s__146581){
return (new cljs.core.LazySeq(null,(function (){
var s__146581__$1 = s__146581;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__146581__$1);
if(temp__5753__auto__){
var s__146581__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__146581__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__146581__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__146583 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__146582 = (0);
while(true){
if((i__146582 < size__4621__auto__)){
var vec__146587 = cljs.core._nth(c__4620__auto__,i__146582);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__146587,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__146587,(1),null);
cljs.core.chunk_append(b__146583,clojure.math.combinatorics.count_permutations_from_frequencies(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(freqs,k,(v - (1)))));

var G__147085 = (i__146582 + (1));
i__146582 = G__147085;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__146583),clojure$math$combinatorics$initial_perm_numbers_$_iter__146580(cljs.core.chunk_rest(s__146581__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__146583),null);
}
} else {
var vec__146591 = cljs.core.first(s__146581__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__146591,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__146591,(1),null);
return cljs.core.cons(clojure.math.combinatorics.count_permutations_from_frequencies(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(freqs,k,(v - (1)))),clojure$math$combinatorics$initial_perm_numbers_$_iter__146580(cljs.core.rest(s__146581__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(freqs);
})());
});
/**
 * Finds the index and remainder from the initial-perm-numbers.
 */
clojure.math.combinatorics.index_remainder = (function clojure$math$combinatorics$index_remainder(perm_numbers,n){
var perm_numbers__$1 = perm_numbers;
var index = (0);
while(true){
if((((cljs.core.first(perm_numbers__$1) <= n)) && ((n < cljs.core.second(perm_numbers__$1))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,(n - cljs.core.first(perm_numbers__$1))], null);
} else {
var G__147086 = cljs.core.rest(perm_numbers__$1);
var G__147087 = (index + (1));
perm_numbers__$1 = G__147086;
index = G__147087;
continue;
}
break;
}
});
clojure.math.combinatorics.dec_key = (function clojure$math$combinatorics$dec_key(m,k){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),(m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1(k) : m.call(null,k)))){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,k);
} else {
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),cljs.core.dec);
}
});
/**
 * Input is a non-negative base 10 integer n, and a sorted frequency map freqs.
 * Output is a list of 'digits' in this wacky duplicate factorial number system
 */
clojure.math.combinatorics.factorial_numbers_with_duplicates = (function clojure$math$combinatorics$factorial_numbers_with_duplicates(n,freqs){
var n__$1 = n;
var digits = cljs.core.PersistentVector.EMPTY;
var freqs__$1 = freqs;
while(true){
if((n__$1 === (0))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(digits,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.vals(freqs__$1)),(0)));
} else {
var vec__146608 = clojure.math.combinatorics.index_remainder(clojure.math.combinatorics.initial_perm_numbers(freqs__$1),n__$1);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__146608,(0),null);
var remainder = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__146608,(1),null);
var G__147088 = remainder;
var G__147089 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(digits,index);
var G__147090 = (function (){var nth_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(freqs__$1),index);
return clojure.math.combinatorics.dec_key(freqs__$1,nth_key);
})();
n__$1 = G__147088;
digits = G__147089;
freqs__$1 = G__147090;
continue;
}
break;
}
});
/**
 * Input should be a sorted sequential collection l of distinct items, 
 * output is nth-permutation (0-based)
 */
clojure.math.combinatorics.nth_permutation_duplicates = (function clojure$math$combinatorics$nth_permutation_duplicates(l,n){
if((n < clojure.math.combinatorics.count_permutations(l))){
} else {
throw (new Error(["Assert failed: ",cljs.core.print_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([n,"is too large. Input has only",clojure.math.combinatorics.count_permutations(l),"permutations."], 0)),"\n","(< n (count-permutations l))"].join('')));
}

var freqs = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.sorted_map(),cljs.core.frequencies(l));
var indices = clojure.math.combinatorics.factorial_numbers_with_duplicates(n,freqs);
var perm = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_(indices)){
return perm;
} else {
var i = cljs.core.first(indices);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(freqs),i);
var G__147091 = clojure.math.combinatorics.dec_key(freqs,item);
var G__147092 = cljs.core.rest(indices);
var G__147093 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(perm,item);
freqs = G__147091;
indices = G__147092;
perm = G__147093;
continue;
}
break;
}
});
/**
 * (nth (permutations items)) but calculated more directly.
 */
clojure.math.combinatorics.nth_permutation = (function clojure$math$combinatorics$nth_permutation(items,n){
if(cljs.core.truth_(clojure.math.combinatorics.sorted_numbers_QMARK_(items))){
if(cljs.core.truth_(clojure.math.combinatorics.all_different_QMARK_(items))){
return clojure.math.combinatorics.nth_permutation_distinct(items,n);
} else {
return clojure.math.combinatorics.nth_permutation_duplicates(items,n);
}
} else {
if(cljs.core.truth_(clojure.math.combinatorics.all_different_QMARK_(items))){
var v = cljs.core.vec(items);
var perm_indices = clojure.math.combinatorics.nth_permutation_distinct(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(items)),n);
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(v,perm_indices));
} else {
var v = cljs.core.vec(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(items));
var f = cljs.core.frequencies(items);
var indices = clojure.math.combinatorics.join((function (){var iter__4622__auto__ = (function clojure$math$combinatorics$nth_permutation_$_iter__146619(s__146620){
return (new cljs.core.LazySeq(null,(function (){
var s__146620__$1 = s__146620;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__146620__$1);
if(temp__5753__auto__){
var s__146620__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__146620__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__146620__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__146622 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__146621 = (0);
while(true){
if((i__146621 < size__4621__auto__)){
var i = cljs.core._nth(c__4620__auto__,i__146621);
cljs.core.chunk_append(b__146622,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((function (){var G__146627 = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__146627) : f.call(null,G__146627));
})(),i));

var G__147094 = (i__146621 + (1));
i__146621 = G__147094;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__146622),clojure$math$combinatorics$nth_permutation_$_iter__146619(cljs.core.chunk_rest(s__146620__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__146622),null);
}
} else {
var i = cljs.core.first(s__146620__$2);
return cljs.core.cons(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((function (){var G__146628 = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__146628) : f.call(null,G__146628));
})(),i),clojure$math$combinatorics$nth_permutation_$_iter__146619(cljs.core.rest(s__146620__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(v)));
})());
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(v,clojure.math.combinatorics.nth_permutation_duplicates(indices,n)));
}
}
});
/**
 * (drop n (permutations items)) but calculated more directly.
 */
clojure.math.combinatorics.drop_permutations = (function clojure$math$combinatorics$drop_permutations(items,n){
if((n === (0))){
return clojure.math.combinatorics.permutations(items);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,clojure.math.combinatorics.count_permutations(items))){
return cljs.core.List.EMPTY;
} else {
if(cljs.core.truth_(clojure.math.combinatorics.sorted_numbers_QMARK_(items))){
if(cljs.core.truth_(clojure.math.combinatorics.all_different_QMARK_(items))){
return clojure.math.combinatorics.vec_lex_permutations(clojure.math.combinatorics.nth_permutation_distinct(items,n));
} else {
return clojure.math.combinatorics.vec_lex_permutations(clojure.math.combinatorics.nth_permutation_duplicates(items,n));
}
} else {
if(cljs.core.truth_(clojure.math.combinatorics.all_different_QMARK_(items))){
var v = cljs.core.vec(items);
var perm_indices = clojure.math.combinatorics.nth_permutation_distinct(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(items)),n);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.map,v),clojure.math.combinatorics.vec_lex_permutations(perm_indices));
} else {
var v = cljs.core.vec(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(items));
var f = cljs.core.frequencies(items);
var indices = clojure.math.combinatorics.join((function (){var iter__4622__auto__ = (function clojure$math$combinatorics$drop_permutations_$_iter__146629(s__146630){
return (new cljs.core.LazySeq(null,(function (){
var s__146630__$1 = s__146630;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__146630__$1);
if(temp__5753__auto__){
var s__146630__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__146630__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__146630__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__146632 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__146631 = (0);
while(true){
if((i__146631 < size__4621__auto__)){
var i = cljs.core._nth(c__4620__auto__,i__146631);
cljs.core.chunk_append(b__146632,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((function (){var G__146637 = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__146637) : f.call(null,G__146637));
})(),i));

var G__147105 = (i__146631 + (1));
i__146631 = G__147105;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__146632),clojure$math$combinatorics$drop_permutations_$_iter__146629(cljs.core.chunk_rest(s__146630__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__146632),null);
}
} else {
var i = cljs.core.first(s__146630__$2);
return cljs.core.cons(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((function (){var G__146641 = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__146641) : f.call(null,G__146641));
})(),i),clojure$math$combinatorics$drop_permutations_$_iter__146629(cljs.core.rest(s__146630__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(v)));
})());
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.map,v),clojure.math.combinatorics.vec_lex_permutations(clojure.math.combinatorics.nth_permutation_duplicates(indices,n)));
}
}

}
}
});
clojure.math.combinatorics.n_take_k = (function clojure$math$combinatorics$n_take_k(n,k){
while(true){
if((k < (0))){
return (0);
} else {
if((k > n)){
return (0);
} else {
if((k === (0))){
return (1);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,(1))){
return n;
} else {
if((k > cljs.core.quot(n,(2)))){
var G__147107 = n;
var G__147108 = (n - k);
n = G__147107;
k = G__147108;
continue;
} else {
return (cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.math.combinatorics._STAR__SINGLEQUOTE_,cljs.core.range.cljs$core$IFn$_invoke$arity$2(((n - k) + (1)),(n + (1)))) / cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.math.combinatorics._STAR__SINGLEQUOTE_,cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(k + (1)))));

}
}
}
}
}
break;
}
});
clojure.math.combinatorics.count_combinations_from_frequencies = (function clojure$math$combinatorics$count_combinations_from_frequencies(freqs,t){
var counts = cljs.core.vals(freqs);
var sum = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,counts);
if((t === (0))){
return (1);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t,(1))){
return cljs.core.count(freqs);
} else {
if(cljs.core.every_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(1),null], null), null),counts)){
return clojure.math.combinatorics.n_take_k(cljs.core.count(freqs),t);
} else {
if((t > sum)){
return (0);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t,sum)){
return (1);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(freqs),(1))){
return (1);
} else {
var new_freqs = clojure.math.combinatorics.dec_key(freqs,cljs.core.first(cljs.core.keys(freqs)));
var G__146643 = clojure.math.combinatorics.count_combinations_from_frequencies.call(null,new_freqs,(t - (1)));
var G__146644 = clojure.math.combinatorics.count_combinations_from_frequencies.call(null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(freqs,cljs.core.first(cljs.core.keys(freqs))),t);
return (clojure.math.combinatorics._PLUS__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? clojure.math.combinatorics._PLUS__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(G__146643,G__146644) : clojure.math.combinatorics._PLUS__SINGLEQUOTE_.call(null,G__146643,G__146644));

}
}
}
}
}
}
});
/**
 * We need an internal version that doesn't memoize each call to count-combinations-from-frequencies
 * so that we can memoize over a series of calls.
 */
clojure.math.combinatorics.count_combinations_unmemoized = (function clojure$math$combinatorics$count_combinations_unmemoized(items,t){
if(cljs.core.truth_(clojure.math.combinatorics.all_different_QMARK_(items))){
return clojure.math.combinatorics.n_take_k(cljs.core.count(items),t);
} else {
return clojure.math.combinatorics.count_combinations_from_frequencies.call(null,cljs.core.frequencies(items),t);
}
});
/**
 * (count (combinations items t)) but computed more directly
 */
clojure.math.combinatorics.count_combinations = (function clojure$math$combinatorics$count_combinations(items,t){
var count_combinations_from_frequencies_orig_val__146646 = clojure.math.combinatorics.count_combinations_from_frequencies;
var count_combinations_from_frequencies_temp_val__146647 = cljs.core.memoize(clojure.math.combinatorics.count_combinations_from_frequencies);
(clojure.math.combinatorics.count_combinations_from_frequencies = count_combinations_from_frequencies_temp_val__146647);

try{return clojure.math.combinatorics.count_combinations_unmemoized(items,t);
}finally {(clojure.math.combinatorics.count_combinations_from_frequencies = count_combinations_from_frequencies_orig_val__146646);
}});
clojure.math.combinatorics.expt_int = (function clojure$math$combinatorics$expt_int(base,pow){
var n = pow;
var y = (1);
var z = base;
while(true){
var t = cljs.core.even_QMARK_(n);
var n__$1 = cljs.core.quot(n,(2));
if(t){
var G__147110 = n__$1;
var G__147111 = y;
var G__147112 = (clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(z,z) : clojure.math.combinatorics._STAR__SINGLEQUOTE_.call(null,z,z));
n = G__147110;
y = G__147111;
z = G__147112;
continue;
} else {
if((n__$1 === (0))){
return (clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(z,y) : clojure.math.combinatorics._STAR__SINGLEQUOTE_.call(null,z,y));
} else {
var G__147116 = n__$1;
var G__147117 = (clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(z,y) : clojure.math.combinatorics._STAR__SINGLEQUOTE_.call(null,z,y));
var G__147118 = (clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(z,z) : clojure.math.combinatorics._STAR__SINGLEQUOTE_.call(null,z,z));
n = G__147116;
y = G__147117;
z = G__147118;
continue;

}
}
break;
}
});
clojure.math.combinatorics.count_subsets_unmemoized = (function clojure$math$combinatorics$count_subsets_unmemoized(items){
if(cljs.core.empty_QMARK_(items)){
return (1);
} else {
if(cljs.core.truth_(clojure.math.combinatorics.all_different_QMARK_(items))){
return clojure.math.combinatorics.expt_int((2),cljs.core.count(items));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.math.combinatorics._PLUS__SINGLEQUOTE_,(function (){var iter__4622__auto__ = (function clojure$math$combinatorics$count_subsets_unmemoized_$_iter__146648(s__146649){
return (new cljs.core.LazySeq(null,(function (){
var s__146649__$1 = s__146649;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__146649__$1);
if(temp__5753__auto__){
var s__146649__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__146649__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__146649__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__146651 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__146650 = (0);
while(true){
if((i__146650 < size__4621__auto__)){
var i = cljs.core._nth(c__4620__auto__,i__146650);
cljs.core.chunk_append(b__146651,clojure.math.combinatorics.count_combinations_unmemoized(items,i));

var G__147120 = (i__146650 + (1));
i__146650 = G__147120;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__146651),clojure$math$combinatorics$count_subsets_unmemoized_$_iter__146648(cljs.core.chunk_rest(s__146649__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__146651),null);
}
} else {
var i = cljs.core.first(s__146649__$2);
return cljs.core.cons(clojure.math.combinatorics.count_combinations_unmemoized(items,i),clojure$math$combinatorics$count_subsets_unmemoized_$_iter__146648(cljs.core.rest(s__146649__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),(cljs.core.count(items) + (1))));
})());

}
}
});
/**
 * (count (subsets items)) but computed more directly
 */
clojure.math.combinatorics.count_subsets = (function clojure$math$combinatorics$count_subsets(items){
var count_combinations_from_frequencies_orig_val__146652 = clojure.math.combinatorics.count_combinations_from_frequencies;
var count_combinations_from_frequencies_temp_val__146653 = cljs.core.memoize(clojure.math.combinatorics.count_combinations_from_frequencies);
(clojure.math.combinatorics.count_combinations_from_frequencies = count_combinations_from_frequencies_temp_val__146653);

try{return clojure.math.combinatorics.count_subsets_unmemoized(items);
}finally {(clojure.math.combinatorics.count_combinations_from_frequencies = count_combinations_from_frequencies_orig_val__146652);
}});
/**
 * The nth element of the sequence of t-combinations of items,
 * where items is a collection of distinct elements
 */
clojure.math.combinatorics.nth_combination_distinct = (function clojure$math$combinatorics$nth_combination_distinct(items,t,n){
var comb = cljs.core.PersistentVector.EMPTY;
var items__$1 = items;
var t__$1 = t;
var n__$1 = n;
while(true){
if((((n__$1 === (0))) || (cljs.core.empty_QMARK_(items__$1)))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(comb,cljs.core.take.cljs$core$IFn$_invoke$arity$2(t__$1,items__$1));
} else {
var dc_dt = clojure.math.combinatorics.n_take_k((cljs.core.count(items__$1) - (1)),(t__$1 - (1)));
if((n__$1 < dc_dt)){
var G__147121 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(comb,cljs.core.first(items__$1));
var G__147122 = cljs.core.rest(items__$1);
var G__147123 = (t__$1 - (1));
var G__147124 = n__$1;
comb = G__147121;
items__$1 = G__147122;
t__$1 = G__147123;
n__$1 = G__147124;
continue;
} else {
var G__147125 = comb;
var G__147126 = cljs.core.rest(items__$1);
var G__147127 = t__$1;
var G__147128 = (n__$1 - dc_dt);
comb = G__147125;
items__$1 = G__147126;
t__$1 = G__147127;
n__$1 = G__147128;
continue;
}
}
break;
}
});
/**
 * The nth element of the sequence of t-combinations of the multiset
 * represented by freqs
 */
clojure.math.combinatorics.nth_combination_freqs = (function clojure$math$combinatorics$nth_combination_freqs(freqs,t,n){
var comb = cljs.core.PersistentVector.EMPTY;
var freqs__$1 = freqs;
var t__$1 = t;
var n__$1 = n;
while(true){
if((((n__$1 === (0))) || (cljs.core.empty_QMARK_(freqs__$1)))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(comb,cljs.core.take.cljs$core$IFn$_invoke$arity$2(t__$1,clojure.math.combinatorics.join((function (){var iter__4622__auto__ = ((function (comb,freqs__$1,t__$1,n__$1){
return (function clojure$math$combinatorics$nth_combination_freqs_$_iter__146676(s__146677){
return (new cljs.core.LazySeq(null,((function (comb,freqs__$1,t__$1,n__$1){
return (function (){
var s__146677__$1 = s__146677;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__146677__$1);
if(temp__5753__auto__){
var s__146677__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__146677__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__146677__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__146679 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__146678 = (0);
while(true){
if((i__146678 < size__4621__auto__)){
var vec__146680 = cljs.core._nth(c__4620__auto__,i__146678);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__146680,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__146680,(1),null);
cljs.core.chunk_append(b__146679,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(v,k));

var G__147136 = (i__146678 + (1));
i__146678 = G__147136;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__146679),clojure$math$combinatorics$nth_combination_freqs_$_iter__146676(cljs.core.chunk_rest(s__146677__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__146679),null);
}
} else {
var vec__146683 = cljs.core.first(s__146677__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__146683,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__146683,(1),null);
return cljs.core.cons(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(v,k),clojure$math$combinatorics$nth_combination_freqs_$_iter__146676(cljs.core.rest(s__146677__$2)));
}
} else {
return null;
}
break;
}
});})(comb,freqs__$1,t__$1,n__$1))
,null,null));
});})(comb,freqs__$1,t__$1,n__$1))
;
return iter__4622__auto__(freqs__$1);
})())));
} else {
var first_key = cljs.core.first(cljs.core.keys(freqs__$1));
var remove_one_key = clojure.math.combinatorics.dec_key(freqs__$1,first_key);
var dc_dt = clojure.math.combinatorics.count_combinations_from_frequencies.call(null,remove_one_key,(t__$1 - (1)));
if((n__$1 < dc_dt)){
var G__147137 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(comb,first_key);
var G__147138 = remove_one_key;
var G__147139 = (t__$1 - (1));
var G__147140 = n__$1;
comb = G__147137;
freqs__$1 = G__147138;
t__$1 = G__147139;
n__$1 = G__147140;
continue;
} else {
var G__147141 = comb;
var G__147142 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(freqs__$1,first_key);
var G__147143 = t__$1;
var G__147144 = (n__$1 - dc_dt);
comb = G__147141;
freqs__$1 = G__147142;
t__$1 = G__147143;
n__$1 = G__147144;
continue;
}
}
break;
}
});
/**
 * The nth element of the sequence of t-combinations of items
 */
clojure.math.combinatorics.nth_combination = (function clojure$math$combinatorics$nth_combination(items,t,n){
if((n < clojure.math.combinatorics.count_combinations(items,t))){
} else {
throw (new Error(["Assert failed: ",cljs.core.print_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([n,"is too large. Input has only",clojure.math.combinatorics.count_combinations_unmemoized(items,t),"combinations."], 0)),"\n","(< n (count-combinations items t))"].join('')));
}

if(cljs.core.truth_(clojure.math.combinatorics.all_different_QMARK_(items))){
return clojure.math.combinatorics.nth_combination_distinct(items,t,n);
} else {
var count_combinations_from_frequencies_orig_val__146690 = clojure.math.combinatorics.count_combinations_from_frequencies;
var count_combinations_from_frequencies_temp_val__146691 = cljs.core.memoize(clojure.math.combinatorics.count_combinations_from_frequencies);
(clojure.math.combinatorics.count_combinations_from_frequencies = count_combinations_from_frequencies_temp_val__146691);

try{var v = cljs.core.vec(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(items));
var f = cljs.core.frequencies(items);
var indices = clojure.math.combinatorics.join((function (){var iter__4622__auto__ = (function clojure$math$combinatorics$nth_combination_$_iter__146692(s__146693){
return (new cljs.core.LazySeq(null,(function (){
var s__146693__$1 = s__146693;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__146693__$1);
if(temp__5753__auto__){
var s__146693__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__146693__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__146693__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__146695 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__146694 = (0);
while(true){
if((i__146694 < size__4621__auto__)){
var i = cljs.core._nth(c__4620__auto__,i__146694);
cljs.core.chunk_append(b__146695,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((function (){var G__146704 = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__146704) : f.call(null,G__146704));
})(),i));

var G__147151 = (i__146694 + (1));
i__146694 = G__147151;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__146695),clojure$math$combinatorics$nth_combination_$_iter__146692(cljs.core.chunk_rest(s__146693__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__146695),null);
}
} else {
var i = cljs.core.first(s__146693__$2);
return cljs.core.cons(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((function (){var G__146705 = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__146705) : f.call(null,G__146705));
})(),i),clojure$math$combinatorics$nth_combination_$_iter__146692(cljs.core.rest(s__146693__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(v)));
})());
var indices_freqs = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.sorted_map(),cljs.core.frequencies(indices));
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(v,clojure.math.combinatorics.nth_combination_freqs(indices_freqs,t,n)));
}finally {(clojure.math.combinatorics.count_combinations_from_frequencies = count_combinations_from_frequencies_orig_val__146690);
}}
});
clojure.math.combinatorics.nth_subset = (function clojure$math$combinatorics$nth_subset(items,n){
if((n < clojure.math.combinatorics.count_subsets(items))){
} else {
throw (new Error(["Assert failed: ",cljs.core.print_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([n,"is too large. Input has only",clojure.math.combinatorics.count_subsets(items),"subsets."], 0)),"\n","(< n (count-subsets items))"].join('')));
}

var size = (0);
var n__$1 = n;
while(true){
var num_combinations = clojure.math.combinatorics.count_combinations(items,size);
if((n__$1 < num_combinations)){
return clojure.math.combinatorics.nth_combination(items,size,n__$1);
} else {
var G__147155 = (size + (1));
var G__147156 = (n__$1 - num_combinations);
size = G__147155;
n__$1 = G__147156;
continue;
}
break;
}
});
/**
 * The opposite of nth, i.e., from an item in a list, find the n
 */
clojure.math.combinatorics.list_index = (function clojure$math$combinatorics$list_index(l,item){
var l__$1 = l;
var n = (0);
while(true){
if(cljs.core.seq(l__$1)){
} else {
throw (new Error("Assert failed: (seq l)"));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(item,cljs.core.first(l__$1))){
return n;
} else {
var G__147158 = cljs.core.rest(l__$1);
var G__147159 = (n + (1));
l__$1 = G__147158;
n = G__147159;
continue;
}
break;
}
});
clojure.math.combinatorics.permutation_index_distinct = (function clojure$math$combinatorics$permutation_index_distinct(l){
var l__$1 = l;
var index = (0);
var n = (cljs.core.count(l__$1) - (1));
while(true){
if(cljs.core.empty_QMARK_(l__$1)){
return index;
} else {
var G__147160 = cljs.core.rest(l__$1);
var G__147161 = (function (){var G__146715 = index;
var G__146716 = (function (){var G__146717 = clojure.math.combinatorics.factorial(n);
var G__146718 = clojure.math.combinatorics.list_index(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(l__$1),cljs.core.first(l__$1));
return (clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(G__146717,G__146718) : clojure.math.combinatorics._STAR__SINGLEQUOTE_.call(null,G__146717,G__146718));
})();
return (clojure.math.combinatorics._PLUS__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? clojure.math.combinatorics._PLUS__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(G__146715,G__146716) : clojure.math.combinatorics._PLUS__SINGLEQUOTE_.call(null,G__146715,G__146716));
})();
var G__147162 = (n - (1));
l__$1 = G__147160;
index = G__147161;
n = G__147162;
continue;
}
break;
}
});
clojure.math.combinatorics.permutation_index_duplicates = (function clojure$math$combinatorics$permutation_index_duplicates(l){
var l__$1 = l;
var index = (0);
var freqs = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.sorted_map(),cljs.core.frequencies(l__$1));
while(true){
if(cljs.core.empty_QMARK_(l__$1)){
return index;
} else {
var G__147163 = cljs.core.rest(l__$1);
var G__147164 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(clojure.math.combinatorics._PLUS__SINGLEQUOTE_,index,(function (){var iter__4622__auto__ = ((function (l__$1,index,freqs){
return (function clojure$math$combinatorics$permutation_index_duplicates_$_iter__146730(s__146731){
return (new cljs.core.LazySeq(null,((function (l__$1,index,freqs){
return (function (){
var s__146731__$1 = s__146731;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__146731__$1);
if(temp__5753__auto__){
var s__146731__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__146731__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__146731__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__146733 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__146732 = (0);
while(true){
if((i__146732 < size__4621__auto__)){
var k = cljs.core._nth(c__4620__auto__,i__146732);
cljs.core.chunk_append(b__146733,clojure.math.combinatorics.count_permutations_from_frequencies(clojure.math.combinatorics.dec_key(freqs,k)));

var G__147166 = (i__146732 + (1));
i__146732 = G__147166;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__146733),clojure$math$combinatorics$permutation_index_duplicates_$_iter__146730(cljs.core.chunk_rest(s__146731__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__146733),null);
}
} else {
var k = cljs.core.first(s__146731__$2);
return cljs.core.cons(clojure.math.combinatorics.count_permutations_from_frequencies(clojure.math.combinatorics.dec_key(freqs,k)),clojure$math$combinatorics$permutation_index_duplicates_$_iter__146730(cljs.core.rest(s__146731__$2)));
}
} else {
return null;
}
break;
}
});})(l__$1,index,freqs))
,null,null));
});})(l__$1,index,freqs))
;
return iter__4622__auto__(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(((function (l__$1,index,freqs,iter__4622__auto__){
return (function (p1__146719_SHARP_){
return (cljs.core.compare(p1__146719_SHARP_,cljs.core.first(l__$1)) < (0));
});})(l__$1,index,freqs,iter__4622__auto__))
,cljs.core.keys(freqs)));
})());
var G__147165 = clojure.math.combinatorics.dec_key(freqs,cljs.core.first(l__$1));
l__$1 = G__147163;
index = G__147164;
freqs = G__147165;
continue;
}
break;
}
});
/**
 * Input must be a sortable collection of items.  Returns the n such that
 *  (nth-permutation (sort items) n) is items.
 */
clojure.math.combinatorics.permutation_index = (function clojure$math$combinatorics$permutation_index(items){
if(cljs.core.truth_(clojure.math.combinatorics.all_different_QMARK_(items))){
return clojure.math.combinatorics.permutation_index_distinct(items);
} else {
return clojure.math.combinatorics.permutation_index_duplicates(items);
}
});
clojure.math.combinatorics.update = (function clojure$math$combinatorics$update(vec,index,f){
var item = (vec.cljs$core$IFn$_invoke$arity$1 ? vec.cljs$core$IFn$_invoke$arity$1(index) : vec.call(null,index));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(vec,index,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(item) : f.call(null,item)));
});
clojure.math.combinatorics.reify_bool = (function clojure$math$combinatorics$reify_bool(statement){
if(cljs.core.truth_(statement)){
return (1);
} else {
return (0);
}
});
clojure.math.combinatorics.init = (function clojure$math$combinatorics$init(n,s){
if(cljs.core.truth_(s)){
return cljs.core.vec((function (){var iter__4622__auto__ = (function clojure$math$combinatorics$init_$_iter__146742(s__146743){
return (new cljs.core.LazySeq(null,(function (){
var s__146743__$1 = s__146743;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__146743__$1);
if(temp__5753__auto__){
var s__146743__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__146743__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__146743__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__146745 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__146744 = (0);
while(true){
if((i__146744 < size__4621__auto__)){
var i = cljs.core._nth(c__4620__auto__,i__146744);
cljs.core.chunk_append(b__146745,(function (){var x__4306__auto__ = (0);
var y__4307__auto__ = (i - ((n - s) - (-1)));
return ((x__4306__auto__ > y__4307__auto__) ? x__4306__auto__ : y__4307__auto__);
})());

var G__147167 = (i__146744 + (1));
i__146744 = G__147167;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__146745),clojure$math$combinatorics$init_$_iter__146742(cljs.core.chunk_rest(s__146743__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__146745),null);
}
} else {
var i = cljs.core.first(s__146743__$2);
return cljs.core.cons((function (){var x__4306__auto__ = (0);
var y__4307__auto__ = (i - ((n - s) - (-1)));
return ((x__4306__auto__ > y__4307__auto__) ? x__4306__auto__ : y__4307__auto__);
})(),clojure$math$combinatorics$init_$_iter__146742(cljs.core.rest(s__146743__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(n + (1))));
})());
} else {
return cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(n,(0)));
}
});
clojure.math.combinatorics.growth_strings_H = (function clojure$math$combinatorics$growth_strings_H(var_args){
var G__146762 = arguments.length;
switch (G__146762) {
case 3:
return clojure.math.combinatorics.growth_strings_H.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 5:
return clojure.math.combinatorics.growth_strings_H.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.math.combinatorics.growth_strings_H.cljs$core$IFn$_invoke$arity$3 = (function (n,r,s){
return clojure.math.combinatorics.growth_strings_H.cljs$core$IFn$_invoke$arity$5(n,clojure.math.combinatorics.init(n,s),cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(n,(1))),r,s);
}));

(clojure.math.combinatorics.growth_strings_H.cljs$core$IFn$_invoke$arity$5 = (function (n,a,b,r,s){
return cljs.core.cons(a,(new cljs.core.LazySeq(null,(function (){
if((function (){var and__4221__auto__ = (cljs.core.peek(b) > cljs.core.peek(a));
if(and__4221__auto__){
if(cljs.core.truth_(r)){
return (cljs.core.peek(a) < (r - (1)));
} else {
return true;
}
} else {
return and__4221__auto__;
}
})()){
return clojure.math.combinatorics.growth_strings_H.cljs$core$IFn$_invoke$arity$5(n,clojure.math.combinatorics.update(a,(n - (1)),cljs.core.inc),b,r,s);
} else {
var j = (function (){var j = (n - (2));
while(true){
if((function (){var and__4221__auto__ = ((a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1(j) : a.call(null,j)) < (b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(j) : b.call(null,j)));
if(and__4221__auto__){
var and__4221__auto____$1 = (cljs.core.truth_(r)?((a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1(j) : a.call(null,j)) < (r - (1))):true);
if(and__4221__auto____$1){
if(cljs.core.truth_(s)){
return (((s - (b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(j) : b.call(null,j))) - clojure.math.combinatorics.reify_bool((((a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1(j) : a.call(null,j)) + (1)) === (b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(j) : b.call(null,j))))) <= (n - j));
} else {
return true;
}
} else {
return and__4221__auto____$1;
}
} else {
return and__4221__auto__;
}
})()){
return j;
} else {
var G__147170 = (j - (1));
j = G__147170;
continue;
}
break;
}
})();
if((j === (0))){
return cljs.core.List.EMPTY;
} else {
var a__$1 = clojure.math.combinatorics.update(a,j,cljs.core.inc);
var x = (cljs.core.truth_(s)?(s - ((b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(j) : b.call(null,j)) + clojure.math.combinatorics.reify_bool(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((a__$1.cljs$core$IFn$_invoke$arity$1 ? a__$1.cljs$core$IFn$_invoke$arity$1(j) : a__$1.call(null,j)),(b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(j) : b.call(null,j)))))):null);
var vec__146776 = (function (){var a__$2 = a__$1;
var b__$1 = b;
var i = (j + (1));
var current_max = ((b__$1.cljs$core$IFn$_invoke$arity$1 ? b__$1.cljs$core$IFn$_invoke$arity$1(j) : b__$1.call(null,j)) + clojure.math.combinatorics.reify_bool(((b__$1.cljs$core$IFn$_invoke$arity$1 ? b__$1.cljs$core$IFn$_invoke$arity$1(j) : b__$1.call(null,j)) === (a__$2.cljs$core$IFn$_invoke$arity$1 ? a__$2.cljs$core$IFn$_invoke$arity$1(j) : a__$2.call(null,j)))));
while(true){
if((i === n)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a__$2,b__$1], null);
} else {
if(cljs.core.truth_((function (){var and__4221__auto__ = s;
if(cljs.core.truth_(and__4221__auto__)){
return (i > ((n - x) - (1)));
} else {
return and__4221__auto__;
}
})())){
var new_a_i = ((i - n) + s);
var G__147176 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(a__$2,i,new_a_i);
var G__147177 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(b__$1,i,current_max);
var G__147178 = (i + (1));
var G__147179 = (function (){var x__4306__auto__ = current_max;
var y__4307__auto__ = (new_a_i + (1));
return ((x__4306__auto__ > y__4307__auto__) ? x__4306__auto__ : y__4307__auto__);
})();
a__$2 = G__147176;
b__$1 = G__147177;
i = G__147178;
current_max = G__147179;
continue;
} else {
var G__147180 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(a__$2,i,(0));
var G__147181 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(b__$1,i,current_max);
var G__147182 = (i + (1));
var G__147183 = current_max;
a__$2 = G__147180;
b__$1 = G__147181;
i = G__147182;
current_max = G__147183;
continue;

}
}
break;
}
})();
var a__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__146776,(0),null);
var b__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__146776,(1),null);
return clojure.math.combinatorics.growth_strings_H.cljs$core$IFn$_invoke$arity$5(n,a__$2,b__$1,r,s);
}
}
}),null,null)));
}));

(clojure.math.combinatorics.growth_strings_H.cljs$lang$maxFixedArity = 5);

clojure.math.combinatorics.lex_partitions_H = (function clojure$math$combinatorics$lex_partitions_H(var_args){
var args__4835__auto__ = [];
var len__4829__auto___147187 = arguments.length;
var i__4830__auto___147188 = (0);
while(true){
if((i__4830__auto___147188 < len__4829__auto___147187)){
args__4835__auto__.push((arguments[i__4830__auto___147188]));

var G__147189 = (i__4830__auto___147188 + (1));
i__4830__auto___147188 = G__147189;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return clojure.math.combinatorics.lex_partitions_H.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(clojure.math.combinatorics.lex_partitions_H.cljs$core$IFn$_invoke$arity$variadic = (function (N,p__146798){
var map__146799 = p__146798;
var map__146799__$1 = cljs.core.__destructure_map(map__146799);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__146799__$1,new cljs.core.Keyword(null,"min","min",444991522));
var to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__146799__$1,new cljs.core.Keyword(null,"max","max",61366548));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(N,(0))){
if(((((function (){var or__4223__auto__ = from;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return (0);
}
})() <= (0))) && (((0) <= (function (){var or__4223__auto__ = to;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return (0);
}
})())))){
return cljs.core.list(cljs.core.List.EMPTY);
} else {
return cljs.core.List.EMPTY;
}
} else {
var from__$1 = (cljs.core.truth_((function (){var and__4221__auto__ = from;
if(cljs.core.truth_(and__4221__auto__)){
return (from <= (1));
} else {
return and__4221__auto__;
}
})())?null:from);
var to__$1 = (cljs.core.truth_((function (){var and__4221__auto__ = to;
if(cljs.core.truth_(and__4221__auto__)){
return (to >= N);
} else {
return and__4221__auto__;
}
})())?null:to);
if((!(((((1) <= (function (){var or__4223__auto__ = from__$1;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return (1);
}
})())) && (((((function (){var or__4223__auto__ = from__$1;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return (1);
}
})() <= (function (){var or__4223__auto__ = to__$1;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return N;
}
})())) && (((function (){var or__4223__auto__ = to__$1;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return N;
}
})() <= N)))))))){
return cljs.core.List.EMPTY;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(N,(0))){
return cljs.core.list(cljs.core.List.EMPTY);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(N,(1))){
return cljs.core.list(cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null)));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(to__$1,(1))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.range.cljs$core$IFn$_invoke$arity$1(N),null,(1),null))))),null,(1),null)))));
} else {
var growth_strings = clojure.math.combinatorics.growth_strings_H.cljs$core$IFn$_invoke$arity$3(N,to__$1,from__$1);
var iter__4622__auto__ = (function clojure$math$combinatorics$iter__146804(s__146805){
return (new cljs.core.LazySeq(null,(function (){
var s__146805__$1 = s__146805;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__146805__$1);
if(temp__5753__auto__){
var s__146805__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__146805__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__146805__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__146807 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__146806 = (0);
while(true){
if((i__146806 < size__4621__auto__)){
var growth_string = cljs.core._nth(c__4620__auto__,i__146806);
var groups = cljs.core.group_by(growth_string,cljs.core.range.cljs$core$IFn$_invoke$arity$1(N));
cljs.core.chunk_append(b__146807,cljs.core.map.cljs$core$IFn$_invoke$arity$2(groups,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(groups))));

var G__147191 = (i__146806 + (1));
i__146806 = G__147191;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__146807),clojure$math$combinatorics$iter__146804(cljs.core.chunk_rest(s__146805__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__146807),null);
}
} else {
var growth_string = cljs.core.first(s__146805__$2);
var groups = cljs.core.group_by(growth_string,cljs.core.range.cljs$core$IFn$_invoke$arity$1(N));
return cljs.core.cons(cljs.core.map.cljs$core$IFn$_invoke$arity$2(groups,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(groups))),clojure$math$combinatorics$iter__146804(cljs.core.rest(s__146805__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(growth_strings);

}
}
}
}
}
}));

(clojure.math.combinatorics.lex_partitions_H.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(clojure.math.combinatorics.lex_partitions_H.cljs$lang$applyTo = (function (seq146792){
var G__146793 = cljs.core.first(seq146792);
var seq146792__$1 = cljs.core.next(seq146792);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__146793,seq146792__$1);
}));

clojure.math.combinatorics.partitions_H = (function clojure$math$combinatorics$partitions_H(var_args){
var args__4835__auto__ = [];
var len__4829__auto___147195 = arguments.length;
var i__4830__auto___147196 = (0);
while(true){
if((i__4830__auto___147196 < len__4829__auto___147195)){
args__4835__auto__.push((arguments[i__4830__auto___147196]));

var G__147197 = (i__4830__auto___147196 + (1));
i__4830__auto___147196 = G__147197;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return clojure.math.combinatorics.partitions_H.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(clojure.math.combinatorics.partitions_H.cljs$core$IFn$_invoke$arity$variadic = (function (items,args){
var items__$1 = cljs.core.vec(items);
var N = cljs.core.count(items__$1);
var lex = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(clojure.math.combinatorics.lex_partitions_H,N,args);
var iter__4622__auto__ = (function clojure$math$combinatorics$iter__146815(s__146816){
return (new cljs.core.LazySeq(null,(function (){
var s__146816__$1 = s__146816;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__146816__$1);
if(temp__5753__auto__){
var s__146816__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__146816__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__146816__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__146818 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__146817 = (0);
while(true){
if((i__146817 < size__4621__auto__)){
var parts = cljs.core._nth(c__4620__auto__,i__146817);
cljs.core.chunk_append(b__146818,(function (){var iter__4622__auto__ = ((function (i__146817,parts,c__4620__auto__,size__4621__auto__,b__146818,s__146816__$2,temp__5753__auto__,items__$1,N,lex){
return (function clojure$math$combinatorics$iter__146815_$_iter__146821(s__146822){
return (new cljs.core.LazySeq(null,((function (i__146817,parts,c__4620__auto__,size__4621__auto__,b__146818,s__146816__$2,temp__5753__auto__,items__$1,N,lex){
return (function (){
var s__146822__$1 = s__146822;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__146822__$1);
if(temp__5753__auto____$1){
var s__146822__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__146822__$2)){
var c__4620__auto____$1 = cljs.core.chunk_first(s__146822__$2);
var size__4621__auto____$1 = cljs.core.count(c__4620__auto____$1);
var b__146824 = cljs.core.chunk_buffer(size__4621__auto____$1);
if((function (){var i__146823 = (0);
while(true){
if((i__146823 < size__4621__auto____$1)){
var part = cljs.core._nth(c__4620__auto____$1,i__146823);
cljs.core.chunk_append(b__146824,cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (i__146823,i__146817,part,c__4620__auto____$1,size__4621__auto____$1,b__146824,s__146822__$2,temp__5753__auto____$1,parts,c__4620__auto__,size__4621__auto__,b__146818,s__146816__$2,temp__5753__auto__,items__$1,N,lex){
return (function (v,o){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,(items__$1.cljs$core$IFn$_invoke$arity$1 ? items__$1.cljs$core$IFn$_invoke$arity$1(o) : items__$1.call(null,o)));
});})(i__146823,i__146817,part,c__4620__auto____$1,size__4621__auto____$1,b__146824,s__146822__$2,temp__5753__auto____$1,parts,c__4620__auto__,size__4621__auto__,b__146818,s__146816__$2,temp__5753__auto__,items__$1,N,lex))
,cljs.core.transient$(cljs.core.PersistentVector.EMPTY),part)));

var G__147205 = (i__146823 + (1));
i__146823 = G__147205;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__146824),clojure$math$combinatorics$iter__146815_$_iter__146821(cljs.core.chunk_rest(s__146822__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__146824),null);
}
} else {
var part = cljs.core.first(s__146822__$2);
return cljs.core.cons(cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (i__146817,part,s__146822__$2,temp__5753__auto____$1,parts,c__4620__auto__,size__4621__auto__,b__146818,s__146816__$2,temp__5753__auto__,items__$1,N,lex){
return (function (v,o){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,(items__$1.cljs$core$IFn$_invoke$arity$1 ? items__$1.cljs$core$IFn$_invoke$arity$1(o) : items__$1.call(null,o)));
});})(i__146817,part,s__146822__$2,temp__5753__auto____$1,parts,c__4620__auto__,size__4621__auto__,b__146818,s__146816__$2,temp__5753__auto__,items__$1,N,lex))
,cljs.core.transient$(cljs.core.PersistentVector.EMPTY),part)),clojure$math$combinatorics$iter__146815_$_iter__146821(cljs.core.rest(s__146822__$2)));
}
} else {
return null;
}
break;
}
});})(i__146817,parts,c__4620__auto__,size__4621__auto__,b__146818,s__146816__$2,temp__5753__auto__,items__$1,N,lex))
,null,null));
});})(i__146817,parts,c__4620__auto__,size__4621__auto__,b__146818,s__146816__$2,temp__5753__auto__,items__$1,N,lex))
;
return iter__4622__auto__(parts);
})());

var G__147206 = (i__146817 + (1));
i__146817 = G__147206;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__146818),clojure$math$combinatorics$iter__146815(cljs.core.chunk_rest(s__146816__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__146818),null);
}
} else {
var parts = cljs.core.first(s__146816__$2);
return cljs.core.cons((function (){var iter__4622__auto__ = ((function (parts,s__146816__$2,temp__5753__auto__,items__$1,N,lex){
return (function clojure$math$combinatorics$iter__146815_$_iter__146833(s__146834){
return (new cljs.core.LazySeq(null,(function (){
var s__146834__$1 = s__146834;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__146834__$1);
if(temp__5753__auto____$1){
var s__146834__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__146834__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__146834__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__146836 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__146835 = (0);
while(true){
if((i__146835 < size__4621__auto__)){
var part = cljs.core._nth(c__4620__auto__,i__146835);
cljs.core.chunk_append(b__146836,cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (i__146835,part,c__4620__auto__,size__4621__auto__,b__146836,s__146834__$2,temp__5753__auto____$1,parts,s__146816__$2,temp__5753__auto__,items__$1,N,lex){
return (function (v,o){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,(items__$1.cljs$core$IFn$_invoke$arity$1 ? items__$1.cljs$core$IFn$_invoke$arity$1(o) : items__$1.call(null,o)));
});})(i__146835,part,c__4620__auto__,size__4621__auto__,b__146836,s__146834__$2,temp__5753__auto____$1,parts,s__146816__$2,temp__5753__auto__,items__$1,N,lex))
,cljs.core.transient$(cljs.core.PersistentVector.EMPTY),part)));

var G__147210 = (i__146835 + (1));
i__146835 = G__147210;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__146836),clojure$math$combinatorics$iter__146815_$_iter__146833(cljs.core.chunk_rest(s__146834__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__146836),null);
}
} else {
var part = cljs.core.first(s__146834__$2);
return cljs.core.cons(cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (part,s__146834__$2,temp__5753__auto____$1,parts,s__146816__$2,temp__5753__auto__,items__$1,N,lex){
return (function (v,o){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,(items__$1.cljs$core$IFn$_invoke$arity$1 ? items__$1.cljs$core$IFn$_invoke$arity$1(o) : items__$1.call(null,o)));
});})(part,s__146834__$2,temp__5753__auto____$1,parts,s__146816__$2,temp__5753__auto__,items__$1,N,lex))
,cljs.core.transient$(cljs.core.PersistentVector.EMPTY),part)),clojure$math$combinatorics$iter__146815_$_iter__146833(cljs.core.rest(s__146834__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(parts,s__146816__$2,temp__5753__auto__,items__$1,N,lex))
;
return iter__4622__auto__(parts);
})(),clojure$math$combinatorics$iter__146815(cljs.core.rest(s__146816__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(lex);
}));

(clojure.math.combinatorics.partitions_H.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(clojure.math.combinatorics.partitions_H.cljs$lang$applyTo = (function (seq146811){
var G__146812 = cljs.core.first(seq146811);
var seq146811__$1 = cljs.core.next(seq146811);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__146812,seq146811__$1);
}));


clojure.math.combinatorics.multiset_partitions_M = (function clojure$math$combinatorics$multiset_partitions_M(var_args){
var G__146849 = arguments.length;
switch (G__146849) {
case 3:
return clojure.math.combinatorics.multiset_partitions_M.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 11:
return clojure.math.combinatorics.multiset_partitions_M.cljs$core$IFn$_invoke$arity$11((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.math.combinatorics.multiset_partitions_M.cljs$core$IFn$_invoke$arity$3 = (function (multiset,r,s){
var n = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.vals(multiset));
var m = cljs.core.count(multiset);
var f = cljs.core.PersistentVector.EMPTY;
var c = cljs.core.PersistentVector.EMPTY;
var u = cljs.core.PersistentVector.EMPTY;
var v = cljs.core.PersistentVector.EMPTY;
var vec__146855 = (function (){var j = (0);
var c__$1 = c;
var u__$1 = u;
var v__$1 = v;
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(j,m)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1,u__$1,v__$1], null);
} else {
var G__147218 = (j + (1));
var G__147219 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(c__$1,j,(j + (1)));
var G__147220 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(u__$1,j,(function (){var G__146864 = (j + (1));
return (multiset.cljs$core$IFn$_invoke$arity$1 ? multiset.cljs$core$IFn$_invoke$arity$1(G__146864) : multiset.call(null,G__146864));
})());
var G__147221 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v__$1,j,(function (){var G__146865 = (j + (1));
return (multiset.cljs$core$IFn$_invoke$arity$1 ? multiset.cljs$core$IFn$_invoke$arity$1(G__146865) : multiset.call(null,G__146865));
})());
j = G__147218;
c__$1 = G__147219;
u__$1 = G__147220;
v__$1 = G__147221;
continue;
}
break;
}
})();
var c__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__146855,(0),null);
var u__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__146855,(1),null);
var v__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__146855,(2),null);
var a = (0);
var b = m;
var l = (0);
var f__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(f,(0),(0),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(1),m], 0));
var stack = cljs.core.List.EMPTY;
return clojure.math.combinatorics.multiset_partitions_M.cljs$core$IFn$_invoke$arity$11(n,m,f__$1,c__$1,u__$1,v__$1,a,b,l,r,s);
}));

(clojure.math.combinatorics.multiset_partitions_M.cljs$core$IFn$_invoke$arity$11 = (function (n,m,f,c,u,v,a,b,l,r,s){
while(true){
var vec__146866 = (function (){var j = a;
var k = b;
var x = false;
var u__$1 = u;
var v__$1 = v;
var c__$1 = c;
while(true){
if((j >= b)){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [u__$1,v__$1,c__$1,j,k], null);
} else {
var u__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(u__$1,k,((u__$1.cljs$core$IFn$_invoke$arity$1 ? u__$1.cljs$core$IFn$_invoke$arity$1(j) : u__$1.call(null,j)) - (v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(j) : v__$1.call(null,j))));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((u__$2.cljs$core$IFn$_invoke$arity$1 ? u__$2.cljs$core$IFn$_invoke$arity$1(k) : u__$2.call(null,k)),(0))){
var G__147222 = (j + (1));
var G__147223 = k;
var G__147224 = true;
var G__147225 = u__$2;
var G__147226 = v__$1;
var G__147227 = c__$1;
j = G__147222;
k = G__147223;
x = G__147224;
u__$1 = G__147225;
v__$1 = G__147226;
c__$1 = G__147227;
continue;
} else {
if(cljs.core.not(x)){
var c__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(c__$1,k,(c__$1.cljs$core$IFn$_invoke$arity$1 ? c__$1.cljs$core$IFn$_invoke$arity$1(j) : c__$1.call(null,j)));
var v__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v__$1,k,(function (){var x__4309__auto__ = (v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(j) : v__$1.call(null,j));
var y__4310__auto__ = (u__$2.cljs$core$IFn$_invoke$arity$1 ? u__$2.cljs$core$IFn$_invoke$arity$1(k) : u__$2.call(null,k));
return ((x__4309__auto__ < y__4310__auto__) ? x__4309__auto__ : y__4310__auto__);
})());
var x__$1 = ((u__$2.cljs$core$IFn$_invoke$arity$1 ? u__$2.cljs$core$IFn$_invoke$arity$1(k) : u__$2.call(null,k)) < (v__$2.cljs$core$IFn$_invoke$arity$1 ? v__$2.cljs$core$IFn$_invoke$arity$1(j) : v__$2.call(null,j)));
var k__$1 = (k + (1));
var j__$1 = (j + (1));
var G__147232 = j__$1;
var G__147233 = k__$1;
var G__147234 = x__$1;
var G__147235 = u__$2;
var G__147236 = v__$2;
var G__147237 = c__$2;
j = G__147232;
k = G__147233;
x = G__147234;
u__$1 = G__147235;
v__$1 = G__147236;
c__$1 = G__147237;
continue;
} else {
var c__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(c__$1,k,(c__$1.cljs$core$IFn$_invoke$arity$1 ? c__$1.cljs$core$IFn$_invoke$arity$1(j) : c__$1.call(null,j)));
var v__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v__$1,k,(u__$2.cljs$core$IFn$_invoke$arity$1 ? u__$2.cljs$core$IFn$_invoke$arity$1(k) : u__$2.call(null,k)));
var k__$1 = (k + (1));
var j__$1 = (j + (1));
var G__147238 = j__$1;
var G__147239 = k__$1;
var G__147240 = x;
var G__147241 = u__$2;
var G__147242 = v__$2;
var G__147243 = c__$2;
j = G__147238;
k = G__147239;
x = G__147240;
u__$1 = G__147241;
v__$1 = G__147242;
c__$1 = G__147243;
continue;
}
}
}
break;
}
})();
var u__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__146866,(0),null);
var v__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__146866,(1),null);
var c__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__146866,(2),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__146866,(3),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__146866,(4),null);
if(cljs.core.truth_((function (){var and__4221__auto__ = r;
if(cljs.core.truth_(and__4221__auto__)){
return (((k > b)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(l,(r - (1)))));
} else {
return and__4221__auto__;
}
})())){
return (clojure.math.combinatorics.m5.cljs$core$IFn$_invoke$arity$11 ? clojure.math.combinatorics.m5.cljs$core$IFn$_invoke$arity$11(n,m,f,c__$1,u__$1,v__$1,a,b,l,r,s) : clojure.math.combinatorics.m5.call(null,n,m,f,c__$1,u__$1,v__$1,a,b,l,r,s));
} else {
if(cljs.core.truth_((function (){var and__4221__auto__ = s;
if(cljs.core.truth_(and__4221__auto__)){
return (((k <= b)) && (((l + (1)) < s)));
} else {
return and__4221__auto__;
}
})())){
return (clojure.math.combinatorics.m5.cljs$core$IFn$_invoke$arity$11 ? clojure.math.combinatorics.m5.cljs$core$IFn$_invoke$arity$11(n,m,f,c__$1,u__$1,v__$1,a,b,l,r,s) : clojure.math.combinatorics.m5.call(null,n,m,f,c__$1,u__$1,v__$1,a,b,l,r,s));
} else {
if((k > b)){
var a__$1 = b;
var b__$1 = k;
var l__$1 = (l + (1));
var f__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(f,(l__$1 + (1)),b__$1);
var G__147248 = n;
var G__147249 = m;
var G__147250 = f__$1;
var G__147251 = c__$1;
var G__147252 = u__$1;
var G__147253 = v__$1;
var G__147254 = a__$1;
var G__147255 = b__$1;
var G__147256 = l__$1;
var G__147257 = r;
var G__147258 = s;
n = G__147248;
m = G__147249;
f = G__147250;
c = G__147251;
u = G__147252;
v = G__147253;
a = G__147254;
b = G__147255;
l = G__147256;
r = G__147257;
s = G__147258;
continue;
} else {
var part = (function (){var iter__4622__auto__ = ((function (n,m,f,c,u,v,a,b,l,r,s,vec__146866,u__$1,v__$1,c__$1,j,k){
return (function clojure$math$combinatorics$iter__146885(s__146886){
return (new cljs.core.LazySeq(null,((function (n,m,f,c,u,v,a,b,l,r,s,vec__146866,u__$1,v__$1,c__$1,j,k){
return (function (){
var s__146886__$1 = s__146886;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__146886__$1);
if(temp__5753__auto__){
var s__146886__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__146886__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__146886__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__146888 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__146887 = (0);
while(true){
if((i__146887 < size__4621__auto__)){
var y = cljs.core._nth(c__4620__auto__,i__146887);
cljs.core.chunk_append(b__146888,(function (){var first_col = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(y) : f.call(null,y));
var last_col = ((function (){var G__146890 = (y + (1));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__146890) : f.call(null,G__146890));
})() - (1));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4622__auto__ = ((function (i__146887,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__4620__auto__,size__4621__auto__,b__146888,s__146886__$2,temp__5753__auto__,vec__146866,u__$1,v__$1,c__$1,j,k){
return (function clojure$math$combinatorics$iter__146885_$_iter__146891(s__146892){
return (new cljs.core.LazySeq(null,((function (i__146887,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__4620__auto__,size__4621__auto__,b__146888,s__146886__$2,temp__5753__auto__,vec__146866,u__$1,v__$1,c__$1,j,k){
return (function (){
var s__146892__$1 = s__146892;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__146892__$1);
if(temp__5753__auto____$1){
var s__146892__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__146892__$2)){
var c__4620__auto____$1 = cljs.core.chunk_first(s__146892__$2);
var size__4621__auto____$1 = cljs.core.count(c__4620__auto____$1);
var b__146894 = cljs.core.chunk_buffer(size__4621__auto____$1);
if((function (){var i__146893 = (0);
while(true){
if((i__146893 < size__4621__auto____$1)){
var z = cljs.core._nth(c__4620__auto____$1,i__146893);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(z) : v__$1.call(null,z)),(0))){
cljs.core.chunk_append(b__146894,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(c__$1.cljs$core$IFn$_invoke$arity$1 ? c__$1.cljs$core$IFn$_invoke$arity$1(z) : c__$1.call(null,z)),(v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(z) : v__$1.call(null,z))], null));

var G__147263 = (i__146893 + (1));
i__146893 = G__147263;
continue;
} else {
var G__147264 = (i__146893 + (1));
i__146893 = G__147264;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__146894),clojure$math$combinatorics$iter__146885_$_iter__146891(cljs.core.chunk_rest(s__146892__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__146894),null);
}
} else {
var z = cljs.core.first(s__146892__$2);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(z) : v__$1.call(null,z)),(0))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(c__$1.cljs$core$IFn$_invoke$arity$1 ? c__$1.cljs$core$IFn$_invoke$arity$1(z) : c__$1.call(null,z)),(v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(z) : v__$1.call(null,z))], null),clojure$math$combinatorics$iter__146885_$_iter__146891(cljs.core.rest(s__146892__$2)));
} else {
var G__147265 = cljs.core.rest(s__146892__$2);
s__146892__$1 = G__147265;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__146887,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__4620__auto__,size__4621__auto__,b__146888,s__146886__$2,temp__5753__auto__,vec__146866,u__$1,v__$1,c__$1,j,k))
,null,null));
});})(i__146887,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__4620__auto__,size__4621__auto__,b__146888,s__146886__$2,temp__5753__auto__,vec__146866,u__$1,v__$1,c__$1,j,k))
;
return iter__4622__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2(first_col,(last_col + (1))));
})());
})());

var G__147266 = (i__146887 + (1));
i__146887 = G__147266;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__146888),clojure$math$combinatorics$iter__146885(cljs.core.chunk_rest(s__146886__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__146888),null);
}
} else {
var y = cljs.core.first(s__146886__$2);
return cljs.core.cons((function (){var first_col = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(y) : f.call(null,y));
var last_col = ((function (){var G__146906 = (y + (1));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__146906) : f.call(null,G__146906));
})() - (1));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4622__auto__ = ((function (n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__146886__$2,temp__5753__auto__,vec__146866,u__$1,v__$1,c__$1,j,k){
return (function clojure$math$combinatorics$iter__146885_$_iter__146907(s__146908){
return (new cljs.core.LazySeq(null,((function (n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__146886__$2,temp__5753__auto__,vec__146866,u__$1,v__$1,c__$1,j,k){
return (function (){
var s__146908__$1 = s__146908;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__146908__$1);
if(temp__5753__auto____$1){
var s__146908__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__146908__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__146908__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__146910 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__146909 = (0);
while(true){
if((i__146909 < size__4621__auto__)){
var z = cljs.core._nth(c__4620__auto__,i__146909);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(z) : v__$1.call(null,z)),(0))){
cljs.core.chunk_append(b__146910,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(c__$1.cljs$core$IFn$_invoke$arity$1 ? c__$1.cljs$core$IFn$_invoke$arity$1(z) : c__$1.call(null,z)),(v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(z) : v__$1.call(null,z))], null));

var G__147271 = (i__146909 + (1));
i__146909 = G__147271;
continue;
} else {
var G__147272 = (i__146909 + (1));
i__146909 = G__147272;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__146910),clojure$math$combinatorics$iter__146885_$_iter__146907(cljs.core.chunk_rest(s__146908__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__146910),null);
}
} else {
var z = cljs.core.first(s__146908__$2);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(z) : v__$1.call(null,z)),(0))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(c__$1.cljs$core$IFn$_invoke$arity$1 ? c__$1.cljs$core$IFn$_invoke$arity$1(z) : c__$1.call(null,z)),(v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(z) : v__$1.call(null,z))], null),clojure$math$combinatorics$iter__146885_$_iter__146907(cljs.core.rest(s__146908__$2)));
} else {
var G__147273 = cljs.core.rest(s__146908__$2);
s__146908__$1 = G__147273;
continue;
}
}
} else {
return null;
}
break;
}
});})(n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__146886__$2,temp__5753__auto__,vec__146866,u__$1,v__$1,c__$1,j,k))
,null,null));
});})(n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__146886__$2,temp__5753__auto__,vec__146866,u__$1,v__$1,c__$1,j,k))
;
return iter__4622__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2(first_col,(last_col + (1))));
})());
})(),clojure$math$combinatorics$iter__146885(cljs.core.rest(s__146886__$2)));
}
} else {
return null;
}
break;
}
});})(n,m,f,c,u,v,a,b,l,r,s,vec__146866,u__$1,v__$1,c__$1,j,k))
,null,null));
});})(n,m,f,c,u,v,a,b,l,r,s,vec__146866,u__$1,v__$1,c__$1,j,k))
;
return iter__4622__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((l + (1))));
})();
return cljs.core.cons(part,(new cljs.core.LazySeq(null,((function (n,m,f,c,u,v,a,b,l,r,s,part,vec__146866,u__$1,v__$1,c__$1,j,k){
return (function (){
return (clojure.math.combinatorics.m5.cljs$core$IFn$_invoke$arity$11 ? clojure.math.combinatorics.m5.cljs$core$IFn$_invoke$arity$11(n,m,f,c__$1,u__$1,v__$1,a,b,l,r,s) : clojure.math.combinatorics.m5.call(null,n,m,f,c__$1,u__$1,v__$1,a,b,l,r,s));
});})(n,m,f,c,u,v,a,b,l,r,s,part,vec__146866,u__$1,v__$1,c__$1,j,k))
,null,null)));

}
}
}
break;
}
}));

(clojure.math.combinatorics.multiset_partitions_M.cljs$lang$maxFixedArity = 11);

clojure.math.combinatorics.m5 = (function clojure$math$combinatorics$m5(n,m,f,c,u,v,a,b,l,r,s){
var j = (function (){var j = (b - (1));
while(true){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(j) : v.call(null,j)),(0))){
return j;
} else {
var G__147278 = (j - (1));
j = G__147278;
continue;
}
break;
}
})();
if(cljs.core.truth_((function (){var and__4221__auto__ = r;
if(cljs.core.truth_(and__4221__auto__)){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(j,a)) && (((((v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(j) : v.call(null,j)) - (1)) * (r - l)) < (u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(j) : u.call(null,j)))));
} else {
return and__4221__auto__;
}
})())){
return (clojure.math.combinatorics.m6.cljs$core$IFn$_invoke$arity$11 ? clojure.math.combinatorics.m6.cljs$core$IFn$_invoke$arity$11(n,m,f,c,u,v,a,b,l,r,s) : clojure.math.combinatorics.m6.call(null,n,m,f,c,u,v,a,b,l,r,s));
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(j,a)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(j) : v.call(null,j)),(1))))){
return (clojure.math.combinatorics.m6.cljs$core$IFn$_invoke$arity$11 ? clojure.math.combinatorics.m6.cljs$core$IFn$_invoke$arity$11(n,m,f,c,u,v,a,b,l,r,s) : clojure.math.combinatorics.m6.call(null,n,m,f,c,u,v,a,b,l,r,s));
} else {
var v__$1 = clojure.math.combinatorics.update(v,j,cljs.core.dec);
var diff_uv = (cljs.core.truth_(s)?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,(function (){var iter__4622__auto__ = (function clojure$math$combinatorics$m5_$_iter__146916(s__146917){
return (new cljs.core.LazySeq(null,(function (){
var s__146917__$1 = s__146917;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__146917__$1);
if(temp__5753__auto__){
var s__146917__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__146917__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__146917__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__146919 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__146918 = (0);
while(true){
if((i__146918 < size__4621__auto__)){
var i = cljs.core._nth(c__4620__auto__,i__146918);
cljs.core.chunk_append(b__146919,((u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(i) : u.call(null,i)) - (v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(i) : v__$1.call(null,i))));

var G__147279 = (i__146918 + (1));
i__146918 = G__147279;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__146919),clojure$math$combinatorics$m5_$_iter__146916(cljs.core.chunk_rest(s__146917__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__146919),null);
}
} else {
var i = cljs.core.first(s__146917__$2);
return cljs.core.cons(((u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(i) : u.call(null,i)) - (v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(i) : v__$1.call(null,i))),clojure$math$combinatorics$m5_$_iter__146916(cljs.core.rest(s__146917__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2(a,(j + (1))));
})()):null);
var v__$2 = (function (){var ks = cljs.core.range.cljs$core$IFn$_invoke$arity$2((j + (1)),b);
var v__$2 = v__$1;
while(true){
if(cljs.core.empty_QMARK_(ks)){
return v__$2;
} else {
var k = cljs.core.first(ks);
var G__147280 = cljs.core.rest(ks);
var G__147281 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v__$2,k,(u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(k) : u.call(null,k)));
ks = G__147280;
v__$2 = G__147281;
continue;
}
break;
}
})();
var min_partitions_after_this = (cljs.core.truth_(s)?(s - (l + (1))):(0));
var amount_to_dec = (cljs.core.truth_(s)?(function (){var x__4306__auto__ = (0);
var y__4307__auto__ = (min_partitions_after_this - diff_uv);
return ((x__4306__auto__ > y__4307__auto__) ? x__4306__auto__ : y__4307__auto__);
})():(0));
var v__$3 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(amount_to_dec,(0)))?v__$2:(function (){var k_1 = (b - (1));
var v__$3 = v__$2;
var amount = amount_to_dec;
while(true){
var vk = (v__$3.cljs$core$IFn$_invoke$arity$1 ? v__$3.cljs$core$IFn$_invoke$arity$1(k_1) : v__$3.call(null,k_1));
if((amount > vk)){
var G__147282 = (k_1 - (1));
var G__147283 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v__$3,k_1,(0));
var G__147284 = (amount - vk);
k_1 = G__147282;
v__$3 = G__147283;
amount = G__147284;
continue;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v__$3,k_1,(vk - amount));
}
break;
}
})());
return clojure.math.combinatorics.multiset_partitions_M.cljs$core$IFn$_invoke$arity$11(n,m,f,c,u,v__$3,a,b,l,r,s);

}
}
});
clojure.math.combinatorics.m6 = (function clojure$math$combinatorics$m6(n,m,f,c,u,v,a,b,l,r,s){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(l,(0))){
return cljs.core.List.EMPTY;
} else {
var l__$1 = (l - (1));
var b__$1 = a;
var a__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(l__$1) : f.call(null,l__$1));
return clojure.math.combinatorics.m5(n,m,f,c,u,v,a__$1,b__$1,l__$1,r,s);
}
});
clojure.math.combinatorics.partitions_M = (function clojure$math$combinatorics$partitions_M(var_args){
var args__4835__auto__ = [];
var len__4829__auto___147287 = arguments.length;
var i__4830__auto___147288 = (0);
while(true){
if((i__4830__auto___147288 < len__4829__auto___147287)){
args__4835__auto__.push((arguments[i__4830__auto___147288]));

var G__147289 = (i__4830__auto___147288 + (1));
i__4830__auto___147288 = G__147289;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return clojure.math.combinatorics.partitions_M.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(clojure.math.combinatorics.partitions_M.cljs$core$IFn$_invoke$arity$variadic = (function (items,p__146935){
var map__146936 = p__146935;
var map__146936__$1 = cljs.core.__destructure_map(map__146936);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__146936__$1,new cljs.core.Keyword(null,"min","min",444991522));
var to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__146936__$1,new cljs.core.Keyword(null,"max","max",61366548));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(items),(0))){
if(((((function (){var or__4223__auto__ = from;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return (0);
}
})() <= (0))) && (((0) <= (function (){var or__4223__auto__ = to;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return (0);
}
})())))){
return cljs.core.list(cljs.core.List.EMPTY);
} else {
return cljs.core.List.EMPTY;
}
} else {
var items__$1 = cljs.core.vec(items);
var ditems = cljs.core.vec(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(items__$1));
var freqs = cljs.core.frequencies(items__$1);
var N = cljs.core.count(items__$1);
var M = cljs.core.count(ditems);
var from__$1 = (cljs.core.truth_((function (){var and__4221__auto__ = from;
if(cljs.core.truth_(and__4221__auto__)){
return (from <= (1));
} else {
return and__4221__auto__;
}
})())?null:from);
var to__$1 = (cljs.core.truth_((function (){var and__4221__auto__ = to;
if(cljs.core.truth_(and__4221__auto__)){
return (to >= N);
} else {
return and__4221__auto__;
}
})())?null:to);
if((!(((((1) <= (function (){var or__4223__auto__ = from__$1;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return (1);
}
})())) && (((((function (){var or__4223__auto__ = from__$1;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return (1);
}
})() <= (function (){var or__4223__auto__ = to__$1;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return N;
}
})())) && (((function (){var or__4223__auto__ = to__$1;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return N;
}
})() <= N)))))))){
return cljs.core.List.EMPTY;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(N,(1))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.first(items__$1),null,(1),null)))))),null,(1),null))))),null,(1),null)))));
} else {
var start_multiset = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4622__auto__ = (function clojure$math$combinatorics$iter__146937(s__146938){
return (new cljs.core.LazySeq(null,(function (){
var s__146938__$1 = s__146938;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__146938__$1);
if(temp__5753__auto__){
var s__146938__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__146938__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__146938__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__146940 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__146939 = (0);
while(true){
if((i__146939 < size__4621__auto__)){
var i = cljs.core._nth(c__4620__auto__,i__146939);
var j = (i + (1));
cljs.core.chunk_append(b__146940,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,(function (){var G__146941 = (ditems.cljs$core$IFn$_invoke$arity$1 ? ditems.cljs$core$IFn$_invoke$arity$1(i) : ditems.call(null,i));
return (freqs.cljs$core$IFn$_invoke$arity$1 ? freqs.cljs$core$IFn$_invoke$arity$1(G__146941) : freqs.call(null,G__146941));
})()], null));

var G__147300 = (i__146939 + (1));
i__146939 = G__147300;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__146940),clojure$math$combinatorics$iter__146937(cljs.core.chunk_rest(s__146938__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__146940),null);
}
} else {
var i = cljs.core.first(s__146938__$2);
var j = (i + (1));
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,(function (){var G__146942 = (ditems.cljs$core$IFn$_invoke$arity$1 ? ditems.cljs$core$IFn$_invoke$arity$1(i) : ditems.call(null,i));
return (freqs.cljs$core$IFn$_invoke$arity$1 ? freqs.cljs$core$IFn$_invoke$arity$1(G__146942) : freqs.call(null,G__146942));
})()], null),clojure$math$combinatorics$iter__146937(cljs.core.rest(s__146938__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(M));
})());
var parts = clojure.math.combinatorics.multiset_partitions_M.cljs$core$IFn$_invoke$arity$3(start_multiset,to__$1,from__$1);
var iter__4622__auto__ = (function clojure$math$combinatorics$iter__146943(s__146944){
return (new cljs.core.LazySeq(null,(function (){
var s__146944__$1 = s__146944;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__146944__$1);
if(temp__5753__auto__){
var s__146944__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__146944__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__146944__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__146946 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__146945 = (0);
while(true){
if((i__146945 < size__4621__auto__)){
var part = cljs.core._nth(c__4620__auto__,i__146945);
cljs.core.chunk_append(b__146946,(function (){var iter__4622__auto__ = ((function (i__146945,part,c__4620__auto__,size__4621__auto__,b__146946,s__146944__$2,temp__5753__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__146936,map__146936__$1,from,to){
return (function clojure$math$combinatorics$iter__146943_$_iter__146947(s__146948){
return (new cljs.core.LazySeq(null,((function (i__146945,part,c__4620__auto__,size__4621__auto__,b__146946,s__146944__$2,temp__5753__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__146936,map__146936__$1,from,to){
return (function (){
var s__146948__$1 = s__146948;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__146948__$1);
if(temp__5753__auto____$1){
var s__146948__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__146948__$2)){
var c__4620__auto____$1 = cljs.core.chunk_first(s__146948__$2);
var size__4621__auto____$1 = cljs.core.count(c__4620__auto____$1);
var b__146950 = cljs.core.chunk_buffer(size__4621__auto____$1);
if((function (){var i__146949 = (0);
while(true){
if((i__146949 < size__4621__auto____$1)){
var multiset = cljs.core._nth(c__4620__auto____$1,i__146949);
cljs.core.chunk_append(b__146950,cljs.core.vec(clojure.math.combinatorics.mapjoin(((function (i__146949,i__146945,multiset,c__4620__auto____$1,size__4621__auto____$1,b__146950,s__146948__$2,temp__5753__auto____$1,part,c__4620__auto__,size__4621__auto__,b__146946,s__146944__$2,temp__5753__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__146936,map__146936__$1,from,to){
return (function (p__146951){
var vec__146952 = p__146951;
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__146952,(0),null);
var numtimes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__146952,(1),null);
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(numtimes,(function (){var G__146955 = (index - (1));
return (ditems.cljs$core$IFn$_invoke$arity$1 ? ditems.cljs$core$IFn$_invoke$arity$1(G__146955) : ditems.call(null,G__146955));
})());
});})(i__146949,i__146945,multiset,c__4620__auto____$1,size__4621__auto____$1,b__146950,s__146948__$2,temp__5753__auto____$1,part,c__4620__auto__,size__4621__auto__,b__146946,s__146944__$2,temp__5753__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__146936,map__146936__$1,from,to))
,multiset)));

var G__147305 = (i__146949 + (1));
i__146949 = G__147305;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__146950),clojure$math$combinatorics$iter__146943_$_iter__146947(cljs.core.chunk_rest(s__146948__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__146950),null);
}
} else {
var multiset = cljs.core.first(s__146948__$2);
return cljs.core.cons(cljs.core.vec(clojure.math.combinatorics.mapjoin(((function (i__146945,multiset,s__146948__$2,temp__5753__auto____$1,part,c__4620__auto__,size__4621__auto__,b__146946,s__146944__$2,temp__5753__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__146936,map__146936__$1,from,to){
return (function (p__146957){
var vec__146961 = p__146957;
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__146961,(0),null);
var numtimes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__146961,(1),null);
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(numtimes,(function (){var G__146964 = (index - (1));
return (ditems.cljs$core$IFn$_invoke$arity$1 ? ditems.cljs$core$IFn$_invoke$arity$1(G__146964) : ditems.call(null,G__146964));
})());
});})(i__146945,multiset,s__146948__$2,temp__5753__auto____$1,part,c__4620__auto__,size__4621__auto__,b__146946,s__146944__$2,temp__5753__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__146936,map__146936__$1,from,to))
,multiset)),clojure$math$combinatorics$iter__146943_$_iter__146947(cljs.core.rest(s__146948__$2)));
}
} else {
return null;
}
break;
}
});})(i__146945,part,c__4620__auto__,size__4621__auto__,b__146946,s__146944__$2,temp__5753__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__146936,map__146936__$1,from,to))
,null,null));
});})(i__146945,part,c__4620__auto__,size__4621__auto__,b__146946,s__146944__$2,temp__5753__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__146936,map__146936__$1,from,to))
;
return iter__4622__auto__(part);
})());

var G__147311 = (i__146945 + (1));
i__146945 = G__147311;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__146946),clojure$math$combinatorics$iter__146943(cljs.core.chunk_rest(s__146944__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__146946),null);
}
} else {
var part = cljs.core.first(s__146944__$2);
return cljs.core.cons((function (){var iter__4622__auto__ = ((function (part,s__146944__$2,temp__5753__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__146936,map__146936__$1,from,to){
return (function clojure$math$combinatorics$iter__146943_$_iter__146965(s__146967){
return (new cljs.core.LazySeq(null,(function (){
var s__146967__$1 = s__146967;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__146967__$1);
if(temp__5753__auto____$1){
var s__146967__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__146967__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__146967__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__146969 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__146968 = (0);
while(true){
if((i__146968 < size__4621__auto__)){
var multiset = cljs.core._nth(c__4620__auto__,i__146968);
cljs.core.chunk_append(b__146969,cljs.core.vec(clojure.math.combinatorics.mapjoin(((function (i__146968,multiset,c__4620__auto__,size__4621__auto__,b__146969,s__146967__$2,temp__5753__auto____$1,part,s__146944__$2,temp__5753__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__146936,map__146936__$1,from,to){
return (function (p__146974){
var vec__146978 = p__146974;
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__146978,(0),null);
var numtimes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__146978,(1),null);
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(numtimes,(function (){var G__146981 = (index - (1));
return (ditems.cljs$core$IFn$_invoke$arity$1 ? ditems.cljs$core$IFn$_invoke$arity$1(G__146981) : ditems.call(null,G__146981));
})());
});})(i__146968,multiset,c__4620__auto__,size__4621__auto__,b__146969,s__146967__$2,temp__5753__auto____$1,part,s__146944__$2,temp__5753__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__146936,map__146936__$1,from,to))
,multiset)));

var G__147313 = (i__146968 + (1));
i__146968 = G__147313;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__146969),clojure$math$combinatorics$iter__146943_$_iter__146965(cljs.core.chunk_rest(s__146967__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__146969),null);
}
} else {
var multiset = cljs.core.first(s__146967__$2);
return cljs.core.cons(cljs.core.vec(clojure.math.combinatorics.mapjoin(((function (multiset,s__146967__$2,temp__5753__auto____$1,part,s__146944__$2,temp__5753__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__146936,map__146936__$1,from,to){
return (function (p__146983){
var vec__146987 = p__146983;
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__146987,(0),null);
var numtimes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__146987,(1),null);
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(numtimes,(function (){var G__146990 = (index - (1));
return (ditems.cljs$core$IFn$_invoke$arity$1 ? ditems.cljs$core$IFn$_invoke$arity$1(G__146990) : ditems.call(null,G__146990));
})());
});})(multiset,s__146967__$2,temp__5753__auto____$1,part,s__146944__$2,temp__5753__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__146936,map__146936__$1,from,to))
,multiset)),clojure$math$combinatorics$iter__146943_$_iter__146965(cljs.core.rest(s__146967__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(part,s__146944__$2,temp__5753__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__146936,map__146936__$1,from,to))
;
return iter__4622__auto__(part);
})(),clojure$math$combinatorics$iter__146943(cljs.core.rest(s__146944__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(parts);

}
}
}
}));

(clojure.math.combinatorics.partitions_M.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(clojure.math.combinatorics.partitions_M.cljs$lang$applyTo = (function (seq146933){
var G__146934 = cljs.core.first(seq146933);
var seq146933__$1 = cljs.core.next(seq146933);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__146934,seq146933__$1);
}));

/**
 * All the lexicographic distinct partitions of items.
 *  Optionally pass in :min and/or :max to specify inclusive bounds on the number of parts the items can be split into.
 */
clojure.math.combinatorics.partitions = (function clojure$math$combinatorics$partitions(var_args){
var args__4835__auto__ = [];
var len__4829__auto___147318 = arguments.length;
var i__4830__auto___147319 = (0);
while(true){
if((i__4830__auto___147319 < len__4829__auto___147318)){
args__4835__auto__.push((arguments[i__4830__auto___147319]));

var G__147320 = (i__4830__auto___147319 + (1));
i__4830__auto___147319 = G__147320;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return clojure.math.combinatorics.partitions.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(clojure.math.combinatorics.partitions.cljs$core$IFn$_invoke$arity$variadic = (function (items,args){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(items),(0))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(clojure.math.combinatorics.partitions_H,items,args);
} else {
if(cljs.core.truth_(clojure.math.combinatorics.all_different_QMARK_(items))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(clojure.math.combinatorics.partitions_H,items,args);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(clojure.math.combinatorics.partitions_M,items,args);

}
}
}));

(clojure.math.combinatorics.partitions.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(clojure.math.combinatorics.partitions.cljs$lang$applyTo = (function (seq146995){
var G__146996 = cljs.core.first(seq146995);
var seq146995__$1 = cljs.core.next(seq146995);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__146996,seq146995__$1);
}));


//# sourceMappingURL=clojure.math.combinatorics.js.map
