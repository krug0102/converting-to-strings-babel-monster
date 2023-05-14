goog.provide('matcher_combinators.utils');
matcher_combinators.utils.processable_number_QMARK_ = (function matcher_combinators$utils$processable_number_QMARK_(v){
return ((typeof v === 'number') && ((!(cljs.core.infinite_QMARK_(v)))));
});
matcher_combinators.utils.abs = (function matcher_combinators$utils$abs(n){
return Math.abs(n);
});
/**
 * Internal use only. Subject to change and removal.
 *   Supports the `within-delta` matcher.
 */
matcher_combinators.utils.within_delta_QMARK_ = (function matcher_combinators$utils$within_delta_QMARK_(delta,expected,actual){
return ((matcher_combinators.utils.processable_number_QMARK_(actual)) && ((((expected >= (actual - matcher_combinators.utils.abs(delta)))) && ((expected <= (actual + matcher_combinators.utils.abs(delta)))))));
});
/**
 * Internal use only. Subject to change and removal.
 */
matcher_combinators.utils.find_first = (function matcher_combinators$utils$find_first(pred,coll){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(pred,coll));
});
/**
 * Internal use only. Subject to change and removal.
 *   Similar to `remove` but stops after removing 1 element
 */
matcher_combinators.utils.remove_first = (function matcher_combinators$utils$remove_first(pred,coll){
var vec__52545 = cljs.core.split_with(cljs.core.complement(pred),coll);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52545,(0),null);
var vec__52548 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52545,(1),null);
var seq__52549 = cljs.core.seq(vec__52548);
var first__52550 = cljs.core.first(seq__52549);
var seq__52549__$1 = cljs.core.next(seq__52549);
var y = first__52550;
var z = seq__52549__$1;
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(x,z);
});

//# sourceMappingURL=matcher_combinators.utils.js.map
