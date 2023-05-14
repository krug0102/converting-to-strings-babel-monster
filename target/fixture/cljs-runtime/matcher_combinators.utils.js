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
var vec__147713 = cljs.core.split_with(cljs.core.complement(pred),coll);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__147713,(0),null);
var vec__147716 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__147713,(1),null);
var seq__147717 = cljs.core.seq(vec__147716);
var first__147718 = cljs.core.first(seq__147717);
var seq__147717__$1 = cljs.core.next(seq__147717);
var y = first__147718;
var z = seq__147717__$1;
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(x,z);
});

//# sourceMappingURL=matcher_combinators.utils.js.map
