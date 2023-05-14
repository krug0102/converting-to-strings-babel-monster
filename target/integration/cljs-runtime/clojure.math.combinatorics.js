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
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.first(s),(function (){var G__51214 = cljs.core.rest(s);
return (clojure.math.combinatorics.join.cljs$core$IFn$_invoke$arity$1 ? clojure.math.combinatorics.join.cljs$core$IFn$_invoke$arity$1(G__51214) : clojure.math.combinatorics.join.call(null,G__51214));
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
var c = cljs.core.vec(cljs.core.cons(null,(function (){var iter__4622__auto__ = (function clojure$math$combinatorics$index_combinations_$_iter__51217(s__51218){
return (new cljs.core.LazySeq(null,(function (){
var s__51218__$1 = s__51218;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__51218__$1);
if(temp__5753__auto__){
var s__51218__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__51218__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__51218__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__51220 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__51219 = (0);
while(true){
if((i__51219 < size__4621__auto__)){
var j = cljs.core._nth(c__4620__auto__,i__51219);
cljs.core.chunk_append(b__51220,((j + cnt) + (- (n + (1)))));

var G__51864 = (i__51219 + (1));
i__51219 = G__51864;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51220),clojure$math$combinatorics$index_combinations_$_iter__51217(cljs.core.chunk_rest(s__51218__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51220),null);
}
} else {
var j = cljs.core.first(s__51218__$2);
return cljs.core.cons(((j + cnt) + (- (n + (1)))),clojure$math$combinatorics$index_combinations_$_iter__51217(cljs.core.rest(s__51218__$2)));
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
var G__51866 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(c__$3,(j__$1 - (1)),((c__$3.cljs$core$IFn$_invoke$arity$1 ? c__$3.cljs$core$IFn$_invoke$arity$1(j__$1) : c__$3.call(null,j__$1)) - (1)));
var G__51867 = (j__$1 - (1));
c__$3 = G__51866;
j__$1 = G__51867;
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
var G__51869 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(distribution__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [index__$1,mi,(already_distributed__$1 + mi)], null));
var G__51870 = (index__$1 + (1));
var G__51871 = (already_distributed__$1 + mi);
distribution__$1 = G__51869;
index__$1 = G__51870;
already_distributed__$1 = G__51871;
continue;
}
}
break;
}
});
clojure.math.combinatorics.next_distribution = (function clojure$math$combinatorics$next_distribution(m,total,distribution){
var vec__51234 = cljs.core.peek(distribution);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51234,(0),null);
var this_bucket = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51234,(1),null);
var this_and_to_the_left = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51234,(2),null);
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
var vec__51240 = cljs.core.peek(distribution__$1);
var index__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51240,(0),null);
var this_bucket__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51240,(1),null);
var this_and_to_the_left__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51240,(2),null);
var distribution__$2 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this_bucket__$1,(1)))?cljs.core.pop(distribution__$1):cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.pop(distribution__$1),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [index__$1,(this_bucket__$1 - (1)),(this_and_to_the_left__$1 - (1))], null)));
if(((total - (this_and_to_the_left__$1 - (1))) <= cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(m,(index__$1 + (1)))))){
return clojure.math.combinatorics.distribute(m,(index__$1 + (1)),total,distribution__$2,(this_and_to_the_left__$1 - (1)));
} else {
if(cljs.core.seq(distribution__$2)){
var G__51879 = distribution__$2;
distribution__$1 = G__51879;
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
var m = cljs.core.vec((function (){var iter__4622__auto__ = (function clojure$math$combinatorics$multi_comb_$_iter__51252(s__51253){
return (new cljs.core.LazySeq(null,(function (){
var s__51253__$1 = s__51253;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__51253__$1);
if(temp__5753__auto__){
var s__51253__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__51253__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__51253__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__51255 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__51254 = (0);
while(true){
if((i__51254 < size__4621__auto__)){
var i = cljs.core._nth(c__4620__auto__,i__51254);
cljs.core.chunk_append(b__51255,(function (){var G__51259 = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__51259) : f.call(null,G__51259));
})());

var G__51888 = (i__51254 + (1));
i__51254 = G__51888;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51255),clojure$math$combinatorics$multi_comb_$_iter__51252(cljs.core.chunk_rest(s__51253__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51255),null);
}
} else {
var i = cljs.core.first(s__51253__$2);
return cljs.core.cons((function (){var G__51260 = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__51260) : f.call(null,G__51260));
})(),clojure$math$combinatorics$multi_comb_$_iter__51252(cljs.core.rest(s__51253__$2)));
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
var iter__4622__auto__ = (function clojure$math$combinatorics$multi_comb_$_iter__51266(s__51267){
return (new cljs.core.LazySeq(null,(function (){
var s__51267__$1 = s__51267;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__51267__$1);
if(temp__5753__auto__){
var s__51267__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__51267__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__51267__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__51269 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__51268 = (0);
while(true){
if((i__51268 < size__4621__auto__)){
var q = cljs.core._nth(c__4620__auto__,i__51268);
cljs.core.chunk_append(b__51269,clojure.math.combinatorics.join((function (){var iter__4622__auto__ = ((function (i__51268,q,c__4620__auto__,size__4621__auto__,b__51269,s__51267__$2,temp__5753__auto__,f,v,domain,m,qs){
return (function clojure$math$combinatorics$multi_comb_$_iter__51266_$_iter__51279(s__51280){
return (new cljs.core.LazySeq(null,((function (i__51268,q,c__4620__auto__,size__4621__auto__,b__51269,s__51267__$2,temp__5753__auto__,f,v,domain,m,qs){
return (function (){
var s__51280__$1 = s__51280;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__51280__$1);
if(temp__5753__auto____$1){
var s__51280__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__51280__$2)){
var c__4620__auto____$1 = cljs.core.chunk_first(s__51280__$2);
var size__4621__auto____$1 = cljs.core.count(c__4620__auto____$1);
var b__51282 = cljs.core.chunk_buffer(size__4621__auto____$1);
if((function (){var i__51281 = (0);
while(true){
if((i__51281 < size__4621__auto____$1)){
var vec__51287 = cljs.core._nth(c__4620__auto____$1,i__51281);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51287,(0),null);
var this_bucket = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51287,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51287,(2),null);
cljs.core.chunk_append(b__51282,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(this_bucket,(v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(index) : v.call(null,index))));

var G__51893 = (i__51281 + (1));
i__51281 = G__51893;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51282),clojure$math$combinatorics$multi_comb_$_iter__51266_$_iter__51279(cljs.core.chunk_rest(s__51280__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51282),null);
}
} else {
var vec__51290 = cljs.core.first(s__51280__$2);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51290,(0),null);
var this_bucket = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51290,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51290,(2),null);
return cljs.core.cons(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(this_bucket,(v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(index) : v.call(null,index))),clojure$math$combinatorics$multi_comb_$_iter__51266_$_iter__51279(cljs.core.rest(s__51280__$2)));
}
} else {
return null;
}
break;
}
});})(i__51268,q,c__4620__auto__,size__4621__auto__,b__51269,s__51267__$2,temp__5753__auto__,f,v,domain,m,qs))
,null,null));
});})(i__51268,q,c__4620__auto__,size__4621__auto__,b__51269,s__51267__$2,temp__5753__auto__,f,v,domain,m,qs))
;
return iter__4622__auto__(q);
})()));

var G__51894 = (i__51268 + (1));
i__51268 = G__51894;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51269),clojure$math$combinatorics$multi_comb_$_iter__51266(cljs.core.chunk_rest(s__51267__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51269),null);
}
} else {
var q = cljs.core.first(s__51267__$2);
return cljs.core.cons(clojure.math.combinatorics.join((function (){var iter__4622__auto__ = ((function (q,s__51267__$2,temp__5753__auto__,f,v,domain,m,qs){
return (function clojure$math$combinatorics$multi_comb_$_iter__51266_$_iter__51293(s__51294){
return (new cljs.core.LazySeq(null,(function (){
var s__51294__$1 = s__51294;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__51294__$1);
if(temp__5753__auto____$1){
var s__51294__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__51294__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__51294__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__51296 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__51295 = (0);
while(true){
if((i__51295 < size__4621__auto__)){
var vec__51298 = cljs.core._nth(c__4620__auto__,i__51295);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51298,(0),null);
var this_bucket = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51298,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51298,(2),null);
cljs.core.chunk_append(b__51296,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(this_bucket,(v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(index) : v.call(null,index))));

var G__51899 = (i__51295 + (1));
i__51295 = G__51899;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51296),clojure$math$combinatorics$multi_comb_$_iter__51266_$_iter__51293(cljs.core.chunk_rest(s__51294__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51296),null);
}
} else {
var vec__51301 = cljs.core.first(s__51294__$2);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51301,(0),null);
var this_bucket = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51301,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51301,(2),null);
return cljs.core.cons(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(this_bucket,(v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(index) : v.call(null,index))),clojure$math$combinatorics$multi_comb_$_iter__51266_$_iter__51293(cljs.core.rest(s__51294__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(q,s__51267__$2,temp__5753__auto__,f,v,domain,m,qs))
;
return iter__4622__auto__(q);
})()),clojure$math$combinatorics$multi_comb_$_iter__51266(cljs.core.rest(s__51267__$2)));
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
var iter__4622__auto__ = (function clojure$math$combinatorics$combinations_$_iter__51307(s__51308){
return (new cljs.core.LazySeq(null,(function (){
var s__51308__$1 = s__51308;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__51308__$1);
if(temp__5753__auto__){
var s__51308__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__51308__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__51308__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__51310 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__51309 = (0);
while(true){
if((i__51309 < size__4621__auto__)){
var item = cljs.core._nth(c__4620__auto__,i__51309);
cljs.core.chunk_append(b__51310,(new cljs.core.List(null,item,null,(1),null)));

var G__51908 = (i__51309 + (1));
i__51309 = G__51908;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51310),clojure$math$combinatorics$combinations_$_iter__51307(cljs.core.chunk_rest(s__51308__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51310),null);
}
} else {
var item = cljs.core.first(s__51308__$2);
return cljs.core.cons((new cljs.core.List(null,item,null,(1),null)),clojure$math$combinatorics$combinations_$_iter__51307(cljs.core.rest(s__51308__$2)));
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
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__51304_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(v_items,p1__51304_SHARP_);
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
return cljs.core.cons(cljs.core.first(s),(function (){var G__51316 = cljs.core.rest(s);
return (clojure.math.combinatorics.unchunk.cljs$core$IFn$_invoke$arity$1 ? clojure.math.combinatorics.unchunk.cljs$core$IFn$_invoke$arity$1(G__51316) : clojure.math.combinatorics.unchunk.call(null,G__51316));
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
var len__4829__auto___51912 = arguments.length;
var i__4830__auto___51913 = (0);
while(true){
if((i__4830__auto___51913 < len__4829__auto___51912)){
args__4835__auto__.push((arguments[i__4830__auto___51913]));

var G__51914 = (i__4830__auto___51913 + (1));
i__4830__auto___51913 = G__51914;
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
var G__51918 = (i - (1));
var G__51919 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v_seqs__$2,i,(v_original_seqs.cljs$core$IFn$_invoke$arity$1 ? v_original_seqs.cljs$core$IFn$_invoke$arity$1(i) : v_original_seqs.call(null,i)));
i = G__51918;
v_seqs__$2 = G__51919;
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
(clojure.math.combinatorics.cartesian_product.cljs$lang$applyTo = (function (seq51319){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51319));
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
if(((v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i)) < (function (){var G__51320 = (i + (1));
return (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(G__51320) : v.call(null,G__51320));
})())){
return i;
} else {
var G__51926 = (i - (1));
i = G__51926;
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
var G__51931 = (i - (1));
i = G__51931;
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
var G__51932 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(v__$1,k,(v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(l__$1) : v__$1.call(null,l__$1)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([l__$1,(v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(k) : v__$1.call(null,k))], 0));
var G__51933 = (k + (1));
var G__51934 = (l__$1 - (1));
v__$1 = G__51932;
k = G__51933;
l__$1 = G__51934;
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
var G__51325 = clojure.math.combinatorics.iter_perm(v);
return (clojure.math.combinatorics.vec_lex_permutations.cljs$core$IFn$_invoke$arity$1 ? clojure.math.combinatorics.vec_lex_permutations.cljs$core$IFn$_invoke$arity$1(G__51325) : clojure.math.combinatorics.vec_lex_permutations.call(null,G__51325));
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
var indices = clojure.math.combinatorics.join((function (){var iter__4622__auto__ = (function clojure$math$combinatorics$multi_perm_$_iter__51329(s__51330){
return (new cljs.core.LazySeq(null,(function (){
var s__51330__$1 = s__51330;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__51330__$1);
if(temp__5753__auto__){
var s__51330__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__51330__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__51330__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__51332 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__51331 = (0);
while(true){
if((i__51331 < size__4621__auto__)){
var i = cljs.core._nth(c__4620__auto__,i__51331);
cljs.core.chunk_append(b__51332,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((function (){var G__51333 = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__51333) : f.call(null,G__51333));
})(),i));

var G__51955 = (i__51331 + (1));
i__51331 = G__51955;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51332),clojure$math$combinatorics$multi_perm_$_iter__51329(cljs.core.chunk_rest(s__51330__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51332),null);
}
} else {
var i = cljs.core.first(s__51330__$2);
return cljs.core.cons(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((function (){var G__51342 = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__51342) : f.call(null,G__51342));
})(),i),clojure$math$combinatorics$multi_perm_$_iter__51329(cljs.core.rest(s__51330__$2)));
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
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__51343_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(v,p1__51343_SHARP_);
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
var G__51957 = (clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(acc,n__$1) : clojure.math.combinatorics._STAR__SINGLEQUOTE_.call(null,acc,n__$1));
var G__51958 = (n__$1 - (1));
acc = G__51957;
n__$1 = G__51958;
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
var G__51959 = q;
var G__51960 = cljs.core.cons(r,digits);
var G__51961 = (divisor + (1));
n__$1 = G__51959;
digits = G__51960;
divisor = G__51961;
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
var G__51965 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,cljs.core.first(l__$1));
var G__51966 = cljs.core.rest(l__$1);
var G__51967 = (n__$1 - (1));
acc = G__51965;
l__$1 = G__51966;
n__$1 = G__51967;
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
var G__51977 = cljs.core.rest(indices);
var G__51978 = clojure.math.combinatorics.remove_nth(l__$1,i);
var G__51979 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(perm,item);
indices = G__51977;
l__$1 = G__51978;
perm = G__51979;
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
return cljs.core.reductions.cljs$core$IFn$_invoke$arity$3(clojure.math.combinatorics._PLUS__SINGLEQUOTE_,(0),(function (){var iter__4622__auto__ = (function clojure$math$combinatorics$initial_perm_numbers_$_iter__51355(s__51356){
return (new cljs.core.LazySeq(null,(function (){
var s__51356__$1 = s__51356;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__51356__$1);
if(temp__5753__auto__){
var s__51356__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__51356__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__51356__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__51358 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__51357 = (0);
while(true){
if((i__51357 < size__4621__auto__)){
var vec__51361 = cljs.core._nth(c__4620__auto__,i__51357);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51361,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51361,(1),null);
cljs.core.chunk_append(b__51358,clojure.math.combinatorics.count_permutations_from_frequencies(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(freqs,k,(v - (1)))));

var G__51987 = (i__51357 + (1));
i__51357 = G__51987;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51358),clojure$math$combinatorics$initial_perm_numbers_$_iter__51355(cljs.core.chunk_rest(s__51356__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51358),null);
}
} else {
var vec__51367 = cljs.core.first(s__51356__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51367,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51367,(1),null);
return cljs.core.cons(clojure.math.combinatorics.count_permutations_from_frequencies(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(freqs,k,(v - (1)))),clojure$math$combinatorics$initial_perm_numbers_$_iter__51355(cljs.core.rest(s__51356__$2)));
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
var G__51988 = cljs.core.rest(perm_numbers__$1);
var G__51989 = (index + (1));
perm_numbers__$1 = G__51988;
index = G__51989;
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
var vec__51393 = clojure.math.combinatorics.index_remainder(clojure.math.combinatorics.initial_perm_numbers(freqs__$1),n__$1);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51393,(0),null);
var remainder = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51393,(1),null);
var G__51994 = remainder;
var G__51995 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(digits,index);
var G__51996 = (function (){var nth_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(freqs__$1),index);
return clojure.math.combinatorics.dec_key(freqs__$1,nth_key);
})();
n__$1 = G__51994;
digits = G__51995;
freqs__$1 = G__51996;
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
var G__51997 = clojure.math.combinatorics.dec_key(freqs,item);
var G__51998 = cljs.core.rest(indices);
var G__51999 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(perm,item);
freqs = G__51997;
indices = G__51998;
perm = G__51999;
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
var indices = clojure.math.combinatorics.join((function (){var iter__4622__auto__ = (function clojure$math$combinatorics$nth_permutation_$_iter__51446(s__51447){
return (new cljs.core.LazySeq(null,(function (){
var s__51447__$1 = s__51447;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__51447__$1);
if(temp__5753__auto__){
var s__51447__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__51447__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__51447__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__51449 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__51448 = (0);
while(true){
if((i__51448 < size__4621__auto__)){
var i = cljs.core._nth(c__4620__auto__,i__51448);
cljs.core.chunk_append(b__51449,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((function (){var G__51450 = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__51450) : f.call(null,G__51450));
})(),i));

var G__52007 = (i__51448 + (1));
i__51448 = G__52007;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51449),clojure$math$combinatorics$nth_permutation_$_iter__51446(cljs.core.chunk_rest(s__51447__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51449),null);
}
} else {
var i = cljs.core.first(s__51447__$2);
return cljs.core.cons(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((function (){var G__51451 = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__51451) : f.call(null,G__51451));
})(),i),clojure$math$combinatorics$nth_permutation_$_iter__51446(cljs.core.rest(s__51447__$2)));
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
var indices = clojure.math.combinatorics.join((function (){var iter__4622__auto__ = (function clojure$math$combinatorics$drop_permutations_$_iter__51452(s__51453){
return (new cljs.core.LazySeq(null,(function (){
var s__51453__$1 = s__51453;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__51453__$1);
if(temp__5753__auto__){
var s__51453__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__51453__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__51453__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__51455 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__51454 = (0);
while(true){
if((i__51454 < size__4621__auto__)){
var i = cljs.core._nth(c__4620__auto__,i__51454);
cljs.core.chunk_append(b__51455,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((function (){var G__51456 = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__51456) : f.call(null,G__51456));
})(),i));

var G__52035 = (i__51454 + (1));
i__51454 = G__52035;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51455),clojure$math$combinatorics$drop_permutations_$_iter__51452(cljs.core.chunk_rest(s__51453__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51455),null);
}
} else {
var i = cljs.core.first(s__51453__$2);
return cljs.core.cons(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((function (){var G__51457 = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__51457) : f.call(null,G__51457));
})(),i),clojure$math$combinatorics$drop_permutations_$_iter__51452(cljs.core.rest(s__51453__$2)));
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
var G__52055 = n;
var G__52056 = (n - k);
n = G__52055;
k = G__52056;
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
var G__51463 = clojure.math.combinatorics.count_combinations_from_frequencies.call(null,new_freqs,(t - (1)));
var G__51464 = clojure.math.combinatorics.count_combinations_from_frequencies.call(null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(freqs,cljs.core.first(cljs.core.keys(freqs))),t);
return (clojure.math.combinatorics._PLUS__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? clojure.math.combinatorics._PLUS__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(G__51463,G__51464) : clojure.math.combinatorics._PLUS__SINGLEQUOTE_.call(null,G__51463,G__51464));

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
var count_combinations_from_frequencies_orig_val__51466 = clojure.math.combinatorics.count_combinations_from_frequencies;
var count_combinations_from_frequencies_temp_val__51467 = cljs.core.memoize(clojure.math.combinatorics.count_combinations_from_frequencies);
(clojure.math.combinatorics.count_combinations_from_frequencies = count_combinations_from_frequencies_temp_val__51467);

try{return clojure.math.combinatorics.count_combinations_unmemoized(items,t);
}finally {(clojure.math.combinatorics.count_combinations_from_frequencies = count_combinations_from_frequencies_orig_val__51466);
}});
clojure.math.combinatorics.expt_int = (function clojure$math$combinatorics$expt_int(base,pow){
var n = pow;
var y = (1);
var z = base;
while(true){
var t = cljs.core.even_QMARK_(n);
var n__$1 = cljs.core.quot(n,(2));
if(t){
var G__52061 = n__$1;
var G__52062 = y;
var G__52063 = (clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(z,z) : clojure.math.combinatorics._STAR__SINGLEQUOTE_.call(null,z,z));
n = G__52061;
y = G__52062;
z = G__52063;
continue;
} else {
if((n__$1 === (0))){
return (clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(z,y) : clojure.math.combinatorics._STAR__SINGLEQUOTE_.call(null,z,y));
} else {
var G__52064 = n__$1;
var G__52065 = (clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(z,y) : clojure.math.combinatorics._STAR__SINGLEQUOTE_.call(null,z,y));
var G__52066 = (clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(z,z) : clojure.math.combinatorics._STAR__SINGLEQUOTE_.call(null,z,z));
n = G__52064;
y = G__52065;
z = G__52066;
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
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.math.combinatorics._PLUS__SINGLEQUOTE_,(function (){var iter__4622__auto__ = (function clojure$math$combinatorics$count_subsets_unmemoized_$_iter__51472(s__51473){
return (new cljs.core.LazySeq(null,(function (){
var s__51473__$1 = s__51473;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__51473__$1);
if(temp__5753__auto__){
var s__51473__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__51473__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__51473__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__51475 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__51474 = (0);
while(true){
if((i__51474 < size__4621__auto__)){
var i = cljs.core._nth(c__4620__auto__,i__51474);
cljs.core.chunk_append(b__51475,clojure.math.combinatorics.count_combinations_unmemoized(items,i));

var G__52071 = (i__51474 + (1));
i__51474 = G__52071;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51475),clojure$math$combinatorics$count_subsets_unmemoized_$_iter__51472(cljs.core.chunk_rest(s__51473__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51475),null);
}
} else {
var i = cljs.core.first(s__51473__$2);
return cljs.core.cons(clojure.math.combinatorics.count_combinations_unmemoized(items,i),clojure$math$combinatorics$count_subsets_unmemoized_$_iter__51472(cljs.core.rest(s__51473__$2)));
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
var count_combinations_from_frequencies_orig_val__51478 = clojure.math.combinatorics.count_combinations_from_frequencies;
var count_combinations_from_frequencies_temp_val__51479 = cljs.core.memoize(clojure.math.combinatorics.count_combinations_from_frequencies);
(clojure.math.combinatorics.count_combinations_from_frequencies = count_combinations_from_frequencies_temp_val__51479);

try{return clojure.math.combinatorics.count_subsets_unmemoized(items);
}finally {(clojure.math.combinatorics.count_combinations_from_frequencies = count_combinations_from_frequencies_orig_val__51478);
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
var G__52073 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(comb,cljs.core.first(items__$1));
var G__52074 = cljs.core.rest(items__$1);
var G__52075 = (t__$1 - (1));
var G__52076 = n__$1;
comb = G__52073;
items__$1 = G__52074;
t__$1 = G__52075;
n__$1 = G__52076;
continue;
} else {
var G__52077 = comb;
var G__52078 = cljs.core.rest(items__$1);
var G__52079 = t__$1;
var G__52080 = (n__$1 - dc_dt);
comb = G__52077;
items__$1 = G__52078;
t__$1 = G__52079;
n__$1 = G__52080;
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
return (function clojure$math$combinatorics$nth_combination_freqs_$_iter__51506(s__51507){
return (new cljs.core.LazySeq(null,((function (comb,freqs__$1,t__$1,n__$1){
return (function (){
var s__51507__$1 = s__51507;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__51507__$1);
if(temp__5753__auto__){
var s__51507__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__51507__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__51507__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__51509 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__51508 = (0);
while(true){
if((i__51508 < size__4621__auto__)){
var vec__51516 = cljs.core._nth(c__4620__auto__,i__51508);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51516,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51516,(1),null);
cljs.core.chunk_append(b__51509,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(v,k));

var G__52081 = (i__51508 + (1));
i__51508 = G__52081;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51509),clojure$math$combinatorics$nth_combination_freqs_$_iter__51506(cljs.core.chunk_rest(s__51507__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51509),null);
}
} else {
var vec__51522 = cljs.core.first(s__51507__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51522,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51522,(1),null);
return cljs.core.cons(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(v,k),clojure$math$combinatorics$nth_combination_freqs_$_iter__51506(cljs.core.rest(s__51507__$2)));
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
var G__52087 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(comb,first_key);
var G__52088 = remove_one_key;
var G__52089 = (t__$1 - (1));
var G__52090 = n__$1;
comb = G__52087;
freqs__$1 = G__52088;
t__$1 = G__52089;
n__$1 = G__52090;
continue;
} else {
var G__52094 = comb;
var G__52095 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(freqs__$1,first_key);
var G__52096 = t__$1;
var G__52097 = (n__$1 - dc_dt);
comb = G__52094;
freqs__$1 = G__52095;
t__$1 = G__52096;
n__$1 = G__52097;
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
var count_combinations_from_frequencies_orig_val__51525 = clojure.math.combinatorics.count_combinations_from_frequencies;
var count_combinations_from_frequencies_temp_val__51526 = cljs.core.memoize(clojure.math.combinatorics.count_combinations_from_frequencies);
(clojure.math.combinatorics.count_combinations_from_frequencies = count_combinations_from_frequencies_temp_val__51526);

try{var v = cljs.core.vec(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(items));
var f = cljs.core.frequencies(items);
var indices = clojure.math.combinatorics.join((function (){var iter__4622__auto__ = (function clojure$math$combinatorics$nth_combination_$_iter__51527(s__51528){
return (new cljs.core.LazySeq(null,(function (){
var s__51528__$1 = s__51528;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__51528__$1);
if(temp__5753__auto__){
var s__51528__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__51528__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__51528__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__51530 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__51529 = (0);
while(true){
if((i__51529 < size__4621__auto__)){
var i = cljs.core._nth(c__4620__auto__,i__51529);
cljs.core.chunk_append(b__51530,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((function (){var G__51531 = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__51531) : f.call(null,G__51531));
})(),i));

var G__52110 = (i__51529 + (1));
i__51529 = G__52110;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51530),clojure$math$combinatorics$nth_combination_$_iter__51527(cljs.core.chunk_rest(s__51528__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51530),null);
}
} else {
var i = cljs.core.first(s__51528__$2);
return cljs.core.cons(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((function (){var G__51532 = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__51532) : f.call(null,G__51532));
})(),i),clojure$math$combinatorics$nth_combination_$_iter__51527(cljs.core.rest(s__51528__$2)));
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
}finally {(clojure.math.combinatorics.count_combinations_from_frequencies = count_combinations_from_frequencies_orig_val__51525);
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
var G__52124 = (size + (1));
var G__52125 = (n__$1 - num_combinations);
size = G__52124;
n__$1 = G__52125;
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
var G__52131 = cljs.core.rest(l__$1);
var G__52132 = (n + (1));
l__$1 = G__52131;
n = G__52132;
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
var G__52134 = cljs.core.rest(l__$1);
var G__52135 = (function (){var G__51546 = index;
var G__51547 = (function (){var G__51548 = clojure.math.combinatorics.factorial(n);
var G__51549 = clojure.math.combinatorics.list_index(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(l__$1),cljs.core.first(l__$1));
return (clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(G__51548,G__51549) : clojure.math.combinatorics._STAR__SINGLEQUOTE_.call(null,G__51548,G__51549));
})();
return (clojure.math.combinatorics._PLUS__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? clojure.math.combinatorics._PLUS__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(G__51546,G__51547) : clojure.math.combinatorics._PLUS__SINGLEQUOTE_.call(null,G__51546,G__51547));
})();
var G__52136 = (n - (1));
l__$1 = G__52134;
index = G__52135;
n = G__52136;
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
var G__52138 = cljs.core.rest(l__$1);
var G__52139 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(clojure.math.combinatorics._PLUS__SINGLEQUOTE_,index,(function (){var iter__4622__auto__ = ((function (l__$1,index,freqs){
return (function clojure$math$combinatorics$permutation_index_duplicates_$_iter__51570(s__51571){
return (new cljs.core.LazySeq(null,((function (l__$1,index,freqs){
return (function (){
var s__51571__$1 = s__51571;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__51571__$1);
if(temp__5753__auto__){
var s__51571__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__51571__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__51571__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__51573 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__51572 = (0);
while(true){
if((i__51572 < size__4621__auto__)){
var k = cljs.core._nth(c__4620__auto__,i__51572);
cljs.core.chunk_append(b__51573,clojure.math.combinatorics.count_permutations_from_frequencies(clojure.math.combinatorics.dec_key(freqs,k)));

var G__52143 = (i__51572 + (1));
i__51572 = G__52143;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51573),clojure$math$combinatorics$permutation_index_duplicates_$_iter__51570(cljs.core.chunk_rest(s__51571__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51573),null);
}
} else {
var k = cljs.core.first(s__51571__$2);
return cljs.core.cons(clojure.math.combinatorics.count_permutations_from_frequencies(clojure.math.combinatorics.dec_key(freqs,k)),clojure$math$combinatorics$permutation_index_duplicates_$_iter__51570(cljs.core.rest(s__51571__$2)));
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
return (function (p1__51550_SHARP_){
return (cljs.core.compare(p1__51550_SHARP_,cljs.core.first(l__$1)) < (0));
});})(l__$1,index,freqs,iter__4622__auto__))
,cljs.core.keys(freqs)));
})());
var G__52140 = clojure.math.combinatorics.dec_key(freqs,cljs.core.first(l__$1));
l__$1 = G__52138;
index = G__52139;
freqs = G__52140;
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
return cljs.core.vec((function (){var iter__4622__auto__ = (function clojure$math$combinatorics$init_$_iter__51583(s__51584){
return (new cljs.core.LazySeq(null,(function (){
var s__51584__$1 = s__51584;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__51584__$1);
if(temp__5753__auto__){
var s__51584__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__51584__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__51584__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__51586 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__51585 = (0);
while(true){
if((i__51585 < size__4621__auto__)){
var i = cljs.core._nth(c__4620__auto__,i__51585);
cljs.core.chunk_append(b__51586,(function (){var x__4306__auto__ = (0);
var y__4307__auto__ = (i - ((n - s) - (-1)));
return ((x__4306__auto__ > y__4307__auto__) ? x__4306__auto__ : y__4307__auto__);
})());

var G__52149 = (i__51585 + (1));
i__51585 = G__52149;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51586),clojure$math$combinatorics$init_$_iter__51583(cljs.core.chunk_rest(s__51584__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51586),null);
}
} else {
var i = cljs.core.first(s__51584__$2);
return cljs.core.cons((function (){var x__4306__auto__ = (0);
var y__4307__auto__ = (i - ((n - s) - (-1)));
return ((x__4306__auto__ > y__4307__auto__) ? x__4306__auto__ : y__4307__auto__);
})(),clojure$math$combinatorics$init_$_iter__51583(cljs.core.rest(s__51584__$2)));
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
var G__51591 = arguments.length;
switch (G__51591) {
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
var G__52182 = (j - (1));
j = G__52182;
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
var vec__51597 = (function (){var a__$2 = a__$1;
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
var G__52187 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(a__$2,i,new_a_i);
var G__52188 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(b__$1,i,current_max);
var G__52189 = (i + (1));
var G__52190 = (function (){var x__4306__auto__ = current_max;
var y__4307__auto__ = (new_a_i + (1));
return ((x__4306__auto__ > y__4307__auto__) ? x__4306__auto__ : y__4307__auto__);
})();
a__$2 = G__52187;
b__$1 = G__52188;
i = G__52189;
current_max = G__52190;
continue;
} else {
var G__52191 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(a__$2,i,(0));
var G__52192 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(b__$1,i,current_max);
var G__52193 = (i + (1));
var G__52194 = current_max;
a__$2 = G__52191;
b__$1 = G__52192;
i = G__52193;
current_max = G__52194;
continue;

}
}
break;
}
})();
var a__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51597,(0),null);
var b__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51597,(1),null);
return clojure.math.combinatorics.growth_strings_H.cljs$core$IFn$_invoke$arity$5(n,a__$2,b__$1,r,s);
}
}
}),null,null)));
}));

(clojure.math.combinatorics.growth_strings_H.cljs$lang$maxFixedArity = 5);

clojure.math.combinatorics.lex_partitions_H = (function clojure$math$combinatorics$lex_partitions_H(var_args){
var args__4835__auto__ = [];
var len__4829__auto___52195 = arguments.length;
var i__4830__auto___52196 = (0);
while(true){
if((i__4830__auto___52196 < len__4829__auto___52195)){
args__4835__auto__.push((arguments[i__4830__auto___52196]));

var G__52197 = (i__4830__auto___52196 + (1));
i__4830__auto___52196 = G__52197;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return clojure.math.combinatorics.lex_partitions_H.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(clojure.math.combinatorics.lex_partitions_H.cljs$core$IFn$_invoke$arity$variadic = (function (N,p__51623){
var map__51627 = p__51623;
var map__51627__$1 = cljs.core.__destructure_map(map__51627);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51627__$1,new cljs.core.Keyword(null,"min","min",444991522));
var to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51627__$1,new cljs.core.Keyword(null,"max","max",61366548));
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
var iter__4622__auto__ = (function clojure$math$combinatorics$iter__51645(s__51646){
return (new cljs.core.LazySeq(null,(function (){
var s__51646__$1 = s__51646;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__51646__$1);
if(temp__5753__auto__){
var s__51646__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__51646__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__51646__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__51648 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__51647 = (0);
while(true){
if((i__51647 < size__4621__auto__)){
var growth_string = cljs.core._nth(c__4620__auto__,i__51647);
var groups = cljs.core.group_by(growth_string,cljs.core.range.cljs$core$IFn$_invoke$arity$1(N));
cljs.core.chunk_append(b__51648,cljs.core.map.cljs$core$IFn$_invoke$arity$2(groups,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(groups))));

var G__52200 = (i__51647 + (1));
i__51647 = G__52200;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51648),clojure$math$combinatorics$iter__51645(cljs.core.chunk_rest(s__51646__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51648),null);
}
} else {
var growth_string = cljs.core.first(s__51646__$2);
var groups = cljs.core.group_by(growth_string,cljs.core.range.cljs$core$IFn$_invoke$arity$1(N));
return cljs.core.cons(cljs.core.map.cljs$core$IFn$_invoke$arity$2(groups,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(groups))),clojure$math$combinatorics$iter__51645(cljs.core.rest(s__51646__$2)));
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
(clojure.math.combinatorics.lex_partitions_H.cljs$lang$applyTo = (function (seq51612){
var G__51613 = cljs.core.first(seq51612);
var seq51612__$1 = cljs.core.next(seq51612);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51613,seq51612__$1);
}));

clojure.math.combinatorics.partitions_H = (function clojure$math$combinatorics$partitions_H(var_args){
var args__4835__auto__ = [];
var len__4829__auto___52201 = arguments.length;
var i__4830__auto___52202 = (0);
while(true){
if((i__4830__auto___52202 < len__4829__auto___52201)){
args__4835__auto__.push((arguments[i__4830__auto___52202]));

var G__52203 = (i__4830__auto___52202 + (1));
i__4830__auto___52202 = G__52203;
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
var iter__4622__auto__ = (function clojure$math$combinatorics$iter__51653(s__51654){
return (new cljs.core.LazySeq(null,(function (){
var s__51654__$1 = s__51654;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__51654__$1);
if(temp__5753__auto__){
var s__51654__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__51654__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__51654__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__51656 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__51655 = (0);
while(true){
if((i__51655 < size__4621__auto__)){
var parts = cljs.core._nth(c__4620__auto__,i__51655);
cljs.core.chunk_append(b__51656,(function (){var iter__4622__auto__ = ((function (i__51655,parts,c__4620__auto__,size__4621__auto__,b__51656,s__51654__$2,temp__5753__auto__,items__$1,N,lex){
return (function clojure$math$combinatorics$iter__51653_$_iter__51658(s__51659){
return (new cljs.core.LazySeq(null,((function (i__51655,parts,c__4620__auto__,size__4621__auto__,b__51656,s__51654__$2,temp__5753__auto__,items__$1,N,lex){
return (function (){
var s__51659__$1 = s__51659;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__51659__$1);
if(temp__5753__auto____$1){
var s__51659__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__51659__$2)){
var c__4620__auto____$1 = cljs.core.chunk_first(s__51659__$2);
var size__4621__auto____$1 = cljs.core.count(c__4620__auto____$1);
var b__51661 = cljs.core.chunk_buffer(size__4621__auto____$1);
if((function (){var i__51660 = (0);
while(true){
if((i__51660 < size__4621__auto____$1)){
var part = cljs.core._nth(c__4620__auto____$1,i__51660);
cljs.core.chunk_append(b__51661,cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (i__51660,i__51655,part,c__4620__auto____$1,size__4621__auto____$1,b__51661,s__51659__$2,temp__5753__auto____$1,parts,c__4620__auto__,size__4621__auto__,b__51656,s__51654__$2,temp__5753__auto__,items__$1,N,lex){
return (function (v,o){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,(items__$1.cljs$core$IFn$_invoke$arity$1 ? items__$1.cljs$core$IFn$_invoke$arity$1(o) : items__$1.call(null,o)));
});})(i__51660,i__51655,part,c__4620__auto____$1,size__4621__auto____$1,b__51661,s__51659__$2,temp__5753__auto____$1,parts,c__4620__auto__,size__4621__auto__,b__51656,s__51654__$2,temp__5753__auto__,items__$1,N,lex))
,cljs.core.transient$(cljs.core.PersistentVector.EMPTY),part)));

var G__52221 = (i__51660 + (1));
i__51660 = G__52221;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51661),clojure$math$combinatorics$iter__51653_$_iter__51658(cljs.core.chunk_rest(s__51659__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51661),null);
}
} else {
var part = cljs.core.first(s__51659__$2);
return cljs.core.cons(cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (i__51655,part,s__51659__$2,temp__5753__auto____$1,parts,c__4620__auto__,size__4621__auto__,b__51656,s__51654__$2,temp__5753__auto__,items__$1,N,lex){
return (function (v,o){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,(items__$1.cljs$core$IFn$_invoke$arity$1 ? items__$1.cljs$core$IFn$_invoke$arity$1(o) : items__$1.call(null,o)));
});})(i__51655,part,s__51659__$2,temp__5753__auto____$1,parts,c__4620__auto__,size__4621__auto__,b__51656,s__51654__$2,temp__5753__auto__,items__$1,N,lex))
,cljs.core.transient$(cljs.core.PersistentVector.EMPTY),part)),clojure$math$combinatorics$iter__51653_$_iter__51658(cljs.core.rest(s__51659__$2)));
}
} else {
return null;
}
break;
}
});})(i__51655,parts,c__4620__auto__,size__4621__auto__,b__51656,s__51654__$2,temp__5753__auto__,items__$1,N,lex))
,null,null));
});})(i__51655,parts,c__4620__auto__,size__4621__auto__,b__51656,s__51654__$2,temp__5753__auto__,items__$1,N,lex))
;
return iter__4622__auto__(parts);
})());

var G__52233 = (i__51655 + (1));
i__51655 = G__52233;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51656),clojure$math$combinatorics$iter__51653(cljs.core.chunk_rest(s__51654__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51656),null);
}
} else {
var parts = cljs.core.first(s__51654__$2);
return cljs.core.cons((function (){var iter__4622__auto__ = ((function (parts,s__51654__$2,temp__5753__auto__,items__$1,N,lex){
return (function clojure$math$combinatorics$iter__51653_$_iter__51668(s__51669){
return (new cljs.core.LazySeq(null,(function (){
var s__51669__$1 = s__51669;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__51669__$1);
if(temp__5753__auto____$1){
var s__51669__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__51669__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__51669__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__51671 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__51670 = (0);
while(true){
if((i__51670 < size__4621__auto__)){
var part = cljs.core._nth(c__4620__auto__,i__51670);
cljs.core.chunk_append(b__51671,cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (i__51670,part,c__4620__auto__,size__4621__auto__,b__51671,s__51669__$2,temp__5753__auto____$1,parts,s__51654__$2,temp__5753__auto__,items__$1,N,lex){
return (function (v,o){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,(items__$1.cljs$core$IFn$_invoke$arity$1 ? items__$1.cljs$core$IFn$_invoke$arity$1(o) : items__$1.call(null,o)));
});})(i__51670,part,c__4620__auto__,size__4621__auto__,b__51671,s__51669__$2,temp__5753__auto____$1,parts,s__51654__$2,temp__5753__auto__,items__$1,N,lex))
,cljs.core.transient$(cljs.core.PersistentVector.EMPTY),part)));

var G__52246 = (i__51670 + (1));
i__51670 = G__52246;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51671),clojure$math$combinatorics$iter__51653_$_iter__51668(cljs.core.chunk_rest(s__51669__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51671),null);
}
} else {
var part = cljs.core.first(s__51669__$2);
return cljs.core.cons(cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (part,s__51669__$2,temp__5753__auto____$1,parts,s__51654__$2,temp__5753__auto__,items__$1,N,lex){
return (function (v,o){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,(items__$1.cljs$core$IFn$_invoke$arity$1 ? items__$1.cljs$core$IFn$_invoke$arity$1(o) : items__$1.call(null,o)));
});})(part,s__51669__$2,temp__5753__auto____$1,parts,s__51654__$2,temp__5753__auto__,items__$1,N,lex))
,cljs.core.transient$(cljs.core.PersistentVector.EMPTY),part)),clojure$math$combinatorics$iter__51653_$_iter__51668(cljs.core.rest(s__51669__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(parts,s__51654__$2,temp__5753__auto__,items__$1,N,lex))
;
return iter__4622__auto__(parts);
})(),clojure$math$combinatorics$iter__51653(cljs.core.rest(s__51654__$2)));
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
(clojure.math.combinatorics.partitions_H.cljs$lang$applyTo = (function (seq51651){
var G__51652 = cljs.core.first(seq51651);
var seq51651__$1 = cljs.core.next(seq51651);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51652,seq51651__$1);
}));


clojure.math.combinatorics.multiset_partitions_M = (function clojure$math$combinatorics$multiset_partitions_M(var_args){
var G__51677 = arguments.length;
switch (G__51677) {
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
var vec__51678 = (function (){var j = (0);
var c__$1 = c;
var u__$1 = u;
var v__$1 = v;
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(j,m)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1,u__$1,v__$1], null);
} else {
var G__52256 = (j + (1));
var G__52257 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(c__$1,j,(j + (1)));
var G__52258 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(u__$1,j,(function (){var G__51684 = (j + (1));
return (multiset.cljs$core$IFn$_invoke$arity$1 ? multiset.cljs$core$IFn$_invoke$arity$1(G__51684) : multiset.call(null,G__51684));
})());
var G__52259 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v__$1,j,(function (){var G__51685 = (j + (1));
return (multiset.cljs$core$IFn$_invoke$arity$1 ? multiset.cljs$core$IFn$_invoke$arity$1(G__51685) : multiset.call(null,G__51685));
})());
j = G__52256;
c__$1 = G__52257;
u__$1 = G__52258;
v__$1 = G__52259;
continue;
}
break;
}
})();
var c__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51678,(0),null);
var u__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51678,(1),null);
var v__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51678,(2),null);
var a = (0);
var b = m;
var l = (0);
var f__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(f,(0),(0),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(1),m], 0));
var stack = cljs.core.List.EMPTY;
return clojure.math.combinatorics.multiset_partitions_M.cljs$core$IFn$_invoke$arity$11(n,m,f__$1,c__$1,u__$1,v__$1,a,b,l,r,s);
}));

(clojure.math.combinatorics.multiset_partitions_M.cljs$core$IFn$_invoke$arity$11 = (function (n,m,f,c,u,v,a,b,l,r,s){
while(true){
var vec__51690 = (function (){var j = a;
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
var G__52260 = (j + (1));
var G__52261 = k;
var G__52262 = true;
var G__52263 = u__$2;
var G__52264 = v__$1;
var G__52265 = c__$1;
j = G__52260;
k = G__52261;
x = G__52262;
u__$1 = G__52263;
v__$1 = G__52264;
c__$1 = G__52265;
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
var G__52266 = j__$1;
var G__52267 = k__$1;
var G__52268 = x__$1;
var G__52269 = u__$2;
var G__52270 = v__$2;
var G__52271 = c__$2;
j = G__52266;
k = G__52267;
x = G__52268;
u__$1 = G__52269;
v__$1 = G__52270;
c__$1 = G__52271;
continue;
} else {
var c__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(c__$1,k,(c__$1.cljs$core$IFn$_invoke$arity$1 ? c__$1.cljs$core$IFn$_invoke$arity$1(j) : c__$1.call(null,j)));
var v__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v__$1,k,(u__$2.cljs$core$IFn$_invoke$arity$1 ? u__$2.cljs$core$IFn$_invoke$arity$1(k) : u__$2.call(null,k)));
var k__$1 = (k + (1));
var j__$1 = (j + (1));
var G__52272 = j__$1;
var G__52273 = k__$1;
var G__52274 = x;
var G__52275 = u__$2;
var G__52276 = v__$2;
var G__52277 = c__$2;
j = G__52272;
k = G__52273;
x = G__52274;
u__$1 = G__52275;
v__$1 = G__52276;
c__$1 = G__52277;
continue;
}
}
}
break;
}
})();
var u__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51690,(0),null);
var v__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51690,(1),null);
var c__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51690,(2),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51690,(3),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51690,(4),null);
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
var G__52281 = n;
var G__52282 = m;
var G__52283 = f__$1;
var G__52284 = c__$1;
var G__52285 = u__$1;
var G__52286 = v__$1;
var G__52287 = a__$1;
var G__52288 = b__$1;
var G__52289 = l__$1;
var G__52290 = r;
var G__52291 = s;
n = G__52281;
m = G__52282;
f = G__52283;
c = G__52284;
u = G__52285;
v = G__52286;
a = G__52287;
b = G__52288;
l = G__52289;
r = G__52290;
s = G__52291;
continue;
} else {
var part = (function (){var iter__4622__auto__ = ((function (n,m,f,c,u,v,a,b,l,r,s,vec__51690,u__$1,v__$1,c__$1,j,k){
return (function clojure$math$combinatorics$iter__51704(s__51705){
return (new cljs.core.LazySeq(null,((function (n,m,f,c,u,v,a,b,l,r,s,vec__51690,u__$1,v__$1,c__$1,j,k){
return (function (){
var s__51705__$1 = s__51705;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__51705__$1);
if(temp__5753__auto__){
var s__51705__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__51705__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__51705__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__51707 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__51706 = (0);
while(true){
if((i__51706 < size__4621__auto__)){
var y = cljs.core._nth(c__4620__auto__,i__51706);
cljs.core.chunk_append(b__51707,(function (){var first_col = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(y) : f.call(null,y));
var last_col = ((function (){var G__51714 = (y + (1));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__51714) : f.call(null,G__51714));
})() - (1));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4622__auto__ = ((function (i__51706,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__4620__auto__,size__4621__auto__,b__51707,s__51705__$2,temp__5753__auto__,vec__51690,u__$1,v__$1,c__$1,j,k){
return (function clojure$math$combinatorics$iter__51704_$_iter__51717(s__51718){
return (new cljs.core.LazySeq(null,((function (i__51706,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__4620__auto__,size__4621__auto__,b__51707,s__51705__$2,temp__5753__auto__,vec__51690,u__$1,v__$1,c__$1,j,k){
return (function (){
var s__51718__$1 = s__51718;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__51718__$1);
if(temp__5753__auto____$1){
var s__51718__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__51718__$2)){
var c__4620__auto____$1 = cljs.core.chunk_first(s__51718__$2);
var size__4621__auto____$1 = cljs.core.count(c__4620__auto____$1);
var b__51720 = cljs.core.chunk_buffer(size__4621__auto____$1);
if((function (){var i__51719 = (0);
while(true){
if((i__51719 < size__4621__auto____$1)){
var z = cljs.core._nth(c__4620__auto____$1,i__51719);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(z) : v__$1.call(null,z)),(0))){
cljs.core.chunk_append(b__51720,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(c__$1.cljs$core$IFn$_invoke$arity$1 ? c__$1.cljs$core$IFn$_invoke$arity$1(z) : c__$1.call(null,z)),(v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(z) : v__$1.call(null,z))], null));

var G__52300 = (i__51719 + (1));
i__51719 = G__52300;
continue;
} else {
var G__52301 = (i__51719 + (1));
i__51719 = G__52301;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51720),clojure$math$combinatorics$iter__51704_$_iter__51717(cljs.core.chunk_rest(s__51718__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51720),null);
}
} else {
var z = cljs.core.first(s__51718__$2);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(z) : v__$1.call(null,z)),(0))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(c__$1.cljs$core$IFn$_invoke$arity$1 ? c__$1.cljs$core$IFn$_invoke$arity$1(z) : c__$1.call(null,z)),(v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(z) : v__$1.call(null,z))], null),clojure$math$combinatorics$iter__51704_$_iter__51717(cljs.core.rest(s__51718__$2)));
} else {
var G__52303 = cljs.core.rest(s__51718__$2);
s__51718__$1 = G__52303;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__51706,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__4620__auto__,size__4621__auto__,b__51707,s__51705__$2,temp__5753__auto__,vec__51690,u__$1,v__$1,c__$1,j,k))
,null,null));
});})(i__51706,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__4620__auto__,size__4621__auto__,b__51707,s__51705__$2,temp__5753__auto__,vec__51690,u__$1,v__$1,c__$1,j,k))
;
return iter__4622__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2(first_col,(last_col + (1))));
})());
})());

var G__52304 = (i__51706 + (1));
i__51706 = G__52304;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51707),clojure$math$combinatorics$iter__51704(cljs.core.chunk_rest(s__51705__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51707),null);
}
} else {
var y = cljs.core.first(s__51705__$2);
return cljs.core.cons((function (){var first_col = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(y) : f.call(null,y));
var last_col = ((function (){var G__51723 = (y + (1));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__51723) : f.call(null,G__51723));
})() - (1));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4622__auto__ = ((function (n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__51705__$2,temp__5753__auto__,vec__51690,u__$1,v__$1,c__$1,j,k){
return (function clojure$math$combinatorics$iter__51704_$_iter__51724(s__51725){
return (new cljs.core.LazySeq(null,((function (n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__51705__$2,temp__5753__auto__,vec__51690,u__$1,v__$1,c__$1,j,k){
return (function (){
var s__51725__$1 = s__51725;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__51725__$1);
if(temp__5753__auto____$1){
var s__51725__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__51725__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__51725__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__51727 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__51726 = (0);
while(true){
if((i__51726 < size__4621__auto__)){
var z = cljs.core._nth(c__4620__auto__,i__51726);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(z) : v__$1.call(null,z)),(0))){
cljs.core.chunk_append(b__51727,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(c__$1.cljs$core$IFn$_invoke$arity$1 ? c__$1.cljs$core$IFn$_invoke$arity$1(z) : c__$1.call(null,z)),(v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(z) : v__$1.call(null,z))], null));

var G__52306 = (i__51726 + (1));
i__51726 = G__52306;
continue;
} else {
var G__52308 = (i__51726 + (1));
i__51726 = G__52308;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51727),clojure$math$combinatorics$iter__51704_$_iter__51724(cljs.core.chunk_rest(s__51725__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51727),null);
}
} else {
var z = cljs.core.first(s__51725__$2);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(z) : v__$1.call(null,z)),(0))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(c__$1.cljs$core$IFn$_invoke$arity$1 ? c__$1.cljs$core$IFn$_invoke$arity$1(z) : c__$1.call(null,z)),(v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(z) : v__$1.call(null,z))], null),clojure$math$combinatorics$iter__51704_$_iter__51724(cljs.core.rest(s__51725__$2)));
} else {
var G__52309 = cljs.core.rest(s__51725__$2);
s__51725__$1 = G__52309;
continue;
}
}
} else {
return null;
}
break;
}
});})(n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__51705__$2,temp__5753__auto__,vec__51690,u__$1,v__$1,c__$1,j,k))
,null,null));
});})(n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__51705__$2,temp__5753__auto__,vec__51690,u__$1,v__$1,c__$1,j,k))
;
return iter__4622__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2(first_col,(last_col + (1))));
})());
})(),clojure$math$combinatorics$iter__51704(cljs.core.rest(s__51705__$2)));
}
} else {
return null;
}
break;
}
});})(n,m,f,c,u,v,a,b,l,r,s,vec__51690,u__$1,v__$1,c__$1,j,k))
,null,null));
});})(n,m,f,c,u,v,a,b,l,r,s,vec__51690,u__$1,v__$1,c__$1,j,k))
;
return iter__4622__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((l + (1))));
})();
return cljs.core.cons(part,(new cljs.core.LazySeq(null,((function (n,m,f,c,u,v,a,b,l,r,s,part,vec__51690,u__$1,v__$1,c__$1,j,k){
return (function (){
return (clojure.math.combinatorics.m5.cljs$core$IFn$_invoke$arity$11 ? clojure.math.combinatorics.m5.cljs$core$IFn$_invoke$arity$11(n,m,f,c__$1,u__$1,v__$1,a,b,l,r,s) : clojure.math.combinatorics.m5.call(null,n,m,f,c__$1,u__$1,v__$1,a,b,l,r,s));
});})(n,m,f,c,u,v,a,b,l,r,s,part,vec__51690,u__$1,v__$1,c__$1,j,k))
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
var G__52314 = (j - (1));
j = G__52314;
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
var diff_uv = (cljs.core.truth_(s)?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,(function (){var iter__4622__auto__ = (function clojure$math$combinatorics$m5_$_iter__51743(s__51744){
return (new cljs.core.LazySeq(null,(function (){
var s__51744__$1 = s__51744;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__51744__$1);
if(temp__5753__auto__){
var s__51744__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__51744__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__51744__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__51746 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__51745 = (0);
while(true){
if((i__51745 < size__4621__auto__)){
var i = cljs.core._nth(c__4620__auto__,i__51745);
cljs.core.chunk_append(b__51746,((u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(i) : u.call(null,i)) - (v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(i) : v__$1.call(null,i))));

var G__52320 = (i__51745 + (1));
i__51745 = G__52320;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51746),clojure$math$combinatorics$m5_$_iter__51743(cljs.core.chunk_rest(s__51744__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51746),null);
}
} else {
var i = cljs.core.first(s__51744__$2);
return cljs.core.cons(((u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(i) : u.call(null,i)) - (v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(i) : v__$1.call(null,i))),clojure$math$combinatorics$m5_$_iter__51743(cljs.core.rest(s__51744__$2)));
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
var G__52321 = cljs.core.rest(ks);
var G__52322 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v__$2,k,(u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(k) : u.call(null,k)));
ks = G__52321;
v__$2 = G__52322;
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
var G__52323 = (k_1 - (1));
var G__52324 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v__$3,k_1,(0));
var G__52325 = (amount - vk);
k_1 = G__52323;
v__$3 = G__52324;
amount = G__52325;
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
var len__4829__auto___52329 = arguments.length;
var i__4830__auto___52330 = (0);
while(true){
if((i__4830__auto___52330 < len__4829__auto___52329)){
args__4835__auto__.push((arguments[i__4830__auto___52330]));

var G__52331 = (i__4830__auto___52330 + (1));
i__4830__auto___52330 = G__52331;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return clojure.math.combinatorics.partitions_M.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(clojure.math.combinatorics.partitions_M.cljs$core$IFn$_invoke$arity$variadic = (function (items,p__51774){
var map__51775 = p__51774;
var map__51775__$1 = cljs.core.__destructure_map(map__51775);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51775__$1,new cljs.core.Keyword(null,"min","min",444991522));
var to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51775__$1,new cljs.core.Keyword(null,"max","max",61366548));
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
var start_multiset = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4622__auto__ = (function clojure$math$combinatorics$iter__51788(s__51789){
return (new cljs.core.LazySeq(null,(function (){
var s__51789__$1 = s__51789;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__51789__$1);
if(temp__5753__auto__){
var s__51789__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__51789__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__51789__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__51791 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__51790 = (0);
while(true){
if((i__51790 < size__4621__auto__)){
var i = cljs.core._nth(c__4620__auto__,i__51790);
var j = (i + (1));
cljs.core.chunk_append(b__51791,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,(function (){var G__51792 = (ditems.cljs$core$IFn$_invoke$arity$1 ? ditems.cljs$core$IFn$_invoke$arity$1(i) : ditems.call(null,i));
return (freqs.cljs$core$IFn$_invoke$arity$1 ? freqs.cljs$core$IFn$_invoke$arity$1(G__51792) : freqs.call(null,G__51792));
})()], null));

var G__52340 = (i__51790 + (1));
i__51790 = G__52340;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51791),clojure$math$combinatorics$iter__51788(cljs.core.chunk_rest(s__51789__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51791),null);
}
} else {
var i = cljs.core.first(s__51789__$2);
var j = (i + (1));
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,(function (){var G__51793 = (ditems.cljs$core$IFn$_invoke$arity$1 ? ditems.cljs$core$IFn$_invoke$arity$1(i) : ditems.call(null,i));
return (freqs.cljs$core$IFn$_invoke$arity$1 ? freqs.cljs$core$IFn$_invoke$arity$1(G__51793) : freqs.call(null,G__51793));
})()], null),clojure$math$combinatorics$iter__51788(cljs.core.rest(s__51789__$2)));
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
var iter__4622__auto__ = (function clojure$math$combinatorics$iter__51794(s__51795){
return (new cljs.core.LazySeq(null,(function (){
var s__51795__$1 = s__51795;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__51795__$1);
if(temp__5753__auto__){
var s__51795__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__51795__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__51795__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__51797 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__51796 = (0);
while(true){
if((i__51796 < size__4621__auto__)){
var part = cljs.core._nth(c__4620__auto__,i__51796);
cljs.core.chunk_append(b__51797,(function (){var iter__4622__auto__ = ((function (i__51796,part,c__4620__auto__,size__4621__auto__,b__51797,s__51795__$2,temp__5753__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__51775,map__51775__$1,from,to){
return (function clojure$math$combinatorics$iter__51794_$_iter__51799(s__51800){
return (new cljs.core.LazySeq(null,((function (i__51796,part,c__4620__auto__,size__4621__auto__,b__51797,s__51795__$2,temp__5753__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__51775,map__51775__$1,from,to){
return (function (){
var s__51800__$1 = s__51800;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__51800__$1);
if(temp__5753__auto____$1){
var s__51800__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__51800__$2)){
var c__4620__auto____$1 = cljs.core.chunk_first(s__51800__$2);
var size__4621__auto____$1 = cljs.core.count(c__4620__auto____$1);
var b__51802 = cljs.core.chunk_buffer(size__4621__auto____$1);
if((function (){var i__51801 = (0);
while(true){
if((i__51801 < size__4621__auto____$1)){
var multiset = cljs.core._nth(c__4620__auto____$1,i__51801);
cljs.core.chunk_append(b__51802,cljs.core.vec(clojure.math.combinatorics.mapjoin(((function (i__51801,i__51796,multiset,c__4620__auto____$1,size__4621__auto____$1,b__51802,s__51800__$2,temp__5753__auto____$1,part,c__4620__auto__,size__4621__auto__,b__51797,s__51795__$2,temp__5753__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__51775,map__51775__$1,from,to){
return (function (p__51808){
var vec__51809 = p__51808;
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51809,(0),null);
var numtimes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51809,(1),null);
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(numtimes,(function (){var G__51812 = (index - (1));
return (ditems.cljs$core$IFn$_invoke$arity$1 ? ditems.cljs$core$IFn$_invoke$arity$1(G__51812) : ditems.call(null,G__51812));
})());
});})(i__51801,i__51796,multiset,c__4620__auto____$1,size__4621__auto____$1,b__51802,s__51800__$2,temp__5753__auto____$1,part,c__4620__auto__,size__4621__auto__,b__51797,s__51795__$2,temp__5753__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__51775,map__51775__$1,from,to))
,multiset)));

var G__52346 = (i__51801 + (1));
i__51801 = G__52346;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51802),clojure$math$combinatorics$iter__51794_$_iter__51799(cljs.core.chunk_rest(s__51800__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51802),null);
}
} else {
var multiset = cljs.core.first(s__51800__$2);
return cljs.core.cons(cljs.core.vec(clojure.math.combinatorics.mapjoin(((function (i__51796,multiset,s__51800__$2,temp__5753__auto____$1,part,c__4620__auto__,size__4621__auto__,b__51797,s__51795__$2,temp__5753__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__51775,map__51775__$1,from,to){
return (function (p__51814){
var vec__51815 = p__51814;
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51815,(0),null);
var numtimes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51815,(1),null);
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(numtimes,(function (){var G__51818 = (index - (1));
return (ditems.cljs$core$IFn$_invoke$arity$1 ? ditems.cljs$core$IFn$_invoke$arity$1(G__51818) : ditems.call(null,G__51818));
})());
});})(i__51796,multiset,s__51800__$2,temp__5753__auto____$1,part,c__4620__auto__,size__4621__auto__,b__51797,s__51795__$2,temp__5753__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__51775,map__51775__$1,from,to))
,multiset)),clojure$math$combinatorics$iter__51794_$_iter__51799(cljs.core.rest(s__51800__$2)));
}
} else {
return null;
}
break;
}
});})(i__51796,part,c__4620__auto__,size__4621__auto__,b__51797,s__51795__$2,temp__5753__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__51775,map__51775__$1,from,to))
,null,null));
});})(i__51796,part,c__4620__auto__,size__4621__auto__,b__51797,s__51795__$2,temp__5753__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__51775,map__51775__$1,from,to))
;
return iter__4622__auto__(part);
})());

var G__52347 = (i__51796 + (1));
i__51796 = G__52347;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51797),clojure$math$combinatorics$iter__51794(cljs.core.chunk_rest(s__51795__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51797),null);
}
} else {
var part = cljs.core.first(s__51795__$2);
return cljs.core.cons((function (){var iter__4622__auto__ = ((function (part,s__51795__$2,temp__5753__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__51775,map__51775__$1,from,to){
return (function clojure$math$combinatorics$iter__51794_$_iter__51819(s__51820){
return (new cljs.core.LazySeq(null,(function (){
var s__51820__$1 = s__51820;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__51820__$1);
if(temp__5753__auto____$1){
var s__51820__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__51820__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__51820__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__51822 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__51821 = (0);
while(true){
if((i__51821 < size__4621__auto__)){
var multiset = cljs.core._nth(c__4620__auto__,i__51821);
cljs.core.chunk_append(b__51822,cljs.core.vec(clojure.math.combinatorics.mapjoin(((function (i__51821,multiset,c__4620__auto__,size__4621__auto__,b__51822,s__51820__$2,temp__5753__auto____$1,part,s__51795__$2,temp__5753__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__51775,map__51775__$1,from,to){
return (function (p__51833){
var vec__51834 = p__51833;
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51834,(0),null);
var numtimes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51834,(1),null);
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(numtimes,(function (){var G__51837 = (index - (1));
return (ditems.cljs$core$IFn$_invoke$arity$1 ? ditems.cljs$core$IFn$_invoke$arity$1(G__51837) : ditems.call(null,G__51837));
})());
});})(i__51821,multiset,c__4620__auto__,size__4621__auto__,b__51822,s__51820__$2,temp__5753__auto____$1,part,s__51795__$2,temp__5753__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__51775,map__51775__$1,from,to))
,multiset)));

var G__52354 = (i__51821 + (1));
i__51821 = G__52354;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51822),clojure$math$combinatorics$iter__51794_$_iter__51819(cljs.core.chunk_rest(s__51820__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51822),null);
}
} else {
var multiset = cljs.core.first(s__51820__$2);
return cljs.core.cons(cljs.core.vec(clojure.math.combinatorics.mapjoin(((function (multiset,s__51820__$2,temp__5753__auto____$1,part,s__51795__$2,temp__5753__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__51775,map__51775__$1,from,to){
return (function (p__51842){
var vec__51843 = p__51842;
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51843,(0),null);
var numtimes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51843,(1),null);
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(numtimes,(function (){var G__51846 = (index - (1));
return (ditems.cljs$core$IFn$_invoke$arity$1 ? ditems.cljs$core$IFn$_invoke$arity$1(G__51846) : ditems.call(null,G__51846));
})());
});})(multiset,s__51820__$2,temp__5753__auto____$1,part,s__51795__$2,temp__5753__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__51775,map__51775__$1,from,to))
,multiset)),clojure$math$combinatorics$iter__51794_$_iter__51819(cljs.core.rest(s__51820__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(part,s__51795__$2,temp__5753__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__51775,map__51775__$1,from,to))
;
return iter__4622__auto__(part);
})(),clojure$math$combinatorics$iter__51794(cljs.core.rest(s__51795__$2)));
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
(clojure.math.combinatorics.partitions_M.cljs$lang$applyTo = (function (seq51761){
var G__51762 = cljs.core.first(seq51761);
var seq51761__$1 = cljs.core.next(seq51761);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51762,seq51761__$1);
}));

/**
 * All the lexicographic distinct partitions of items.
 *  Optionally pass in :min and/or :max to specify inclusive bounds on the number of parts the items can be split into.
 */
clojure.math.combinatorics.partitions = (function clojure$math$combinatorics$partitions(var_args){
var args__4835__auto__ = [];
var len__4829__auto___52355 = arguments.length;
var i__4830__auto___52356 = (0);
while(true){
if((i__4830__auto___52356 < len__4829__auto___52355)){
args__4835__auto__.push((arguments[i__4830__auto___52356]));

var G__52357 = (i__4830__auto___52356 + (1));
i__4830__auto___52356 = G__52357;
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
(clojure.math.combinatorics.partitions.cljs$lang$applyTo = (function (seq51847){
var G__51848 = cljs.core.first(seq51847);
var seq51847__$1 = cljs.core.next(seq51847);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51848,seq51847__$1);
}));


//# sourceMappingURL=clojure.math.combinatorics.js.map
