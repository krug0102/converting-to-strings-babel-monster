goog.provide('matcher_combinators.matchers');
matcher_combinators.matchers.non_internal_record_QMARK_ = (function matcher_combinators$matchers$non_internal_record_QMARK_(v){
return ((cljs.core.record_QMARK_(v)) && ((!(clojure.string.starts_with_QMARK_(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(v)),"class matcher_combinators.core")))));
});
/**
 * Matcher that will match when the given value is exactly the same as the
 *   `expected`.
 */
matcher_combinators.matchers.equals = (function matcher_combinators$matchers$equals(expected){
if(cljs.core.sequential_QMARK_(expected)){
return matcher_combinators.core.__GT_EqualsSeq(expected);
} else {
if(cljs.core.set_QMARK_(expected)){
return matcher_combinators.core.__GT_SetEquals(expected,false);
} else {
if(matcher_combinators.matchers.non_internal_record_QMARK_(expected)){
return matcher_combinators.core.__GT_EqualsRecord(expected);
} else {
if(cljs.core.map_QMARK_(expected)){
return matcher_combinators.core.__GT_EqualsMap(expected);
} else {
return matcher_combinators.core.__GT_Value(expected);

}
}
}
}
});
/**
 * Matches a set in the way `(equals some-set)` would, but accepts sequences as
 *   the expected matcher argument, allowing one to use matchers with the same
 *   submatcher appearing more than once.
 */
matcher_combinators.matchers.set_equals = (function matcher_combinators$matchers$set_equals(expected){
return matcher_combinators.core.__GT_SetEquals(expected,true);
});
/**
 * Matcher for asserting that the expected is embedded in the actual.
 * 
 *   Behaviour differs depending on the form of the `expected`:
 * 
 *   - map:      matches when the map contains some of the same key/values as the
 *            `expected` map.
 *   - sequence: order-agnostic matcher that will match when provided a subset of
 *            the `expected` sequence.
 *   - set:      matches when all the matchers in the `expected` set can be
 *            matched with an element in the provided set. There may be more
 *            elements in the provided set than there are matchers.
 */
matcher_combinators.matchers.embeds = (function matcher_combinators$matchers$embeds(expected){
if(cljs.core.sequential_QMARK_(expected)){
return matcher_combinators.core.__GT_EmbedsSeq(expected);
} else {
if(cljs.core.set_QMARK_(expected)){
return matcher_combinators.core.__GT_SetEmbeds(expected,false);
} else {
if(matcher_combinators.matchers.non_internal_record_QMARK_(expected)){
return matcher_combinators.core.__GT_EqualsRecord(expected);
} else {
if(cljs.core.map_QMARK_(expected)){
return matcher_combinators.core.__GT_EmbedsMap(expected);
} else {
return matcher_combinators.core.__GT_InvalidType(expected,"embeds","seq, set, map");

}
}
}
}
});
/**
 * Matches a set in the way `(embeds some-set)` would, but accepts sequences
 *   as the expected matcher argument, allowing one to use matchers with the same
 *   submatcher appearing more than once.
 */
matcher_combinators.matchers.set_embeds = (function matcher_combinators$matchers$set_embeds(expected){
return matcher_combinators.core.__GT_SetEmbeds(expected,true);
});
/**
 * Matcher that will match when the given a list that is the same as the
 *   `expected` list but with elements in a different order.
 * 
 *   Similar to Midje's `(just expected :in-any-order)`
 */
matcher_combinators.matchers.in_any_order = (function matcher_combinators$matchers$in_any_order(expected){
return matcher_combinators.core.__GT_InAnyOrder(expected);
});
/**
 * Matcher that will match when provided a (ordered) prefix of the `expected`
 *   list.
 * 
 *   Similar to Midje's `(embeds expected)`
 */
matcher_combinators.matchers.prefix = (function matcher_combinators$matchers$prefix(expected){
return matcher_combinators.core.__GT_Prefix(expected);
});
/**
 * Matcher that will match when given value matches the `expected` regular expression.
 */
matcher_combinators.matchers.regex = (function matcher_combinators$matchers$regex(expected){
return matcher_combinators.core.__GT_Regex(expected);
});
/**
 * Value-position matcher for maps that matches when containing map doesn't
 *   have the key pointing to this matcher.
 */
matcher_combinators.matchers.absent = matcher_combinators.core.__GT_Absent();
/**
 * Matcher that will match when `pred` of the actual value returns true.
 */
matcher_combinators.matchers.pred = (function matcher_combinators$matchers$pred(pred){
return matcher_combinators.core.__GT_PredMatcher(pred,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"pred","pred",-727012372,null),null,(1),null)),(new cljs.core.List(null,pred,null,(1),null))))));
});
/**
 * Negation matcher that takes in an `expected` matcher and passes when it
 *   doesn't match the `actual`.
 * 
 *   When possible use positive matching instead as negation matching quickly
 *   leads to very unreadable match assertions
 */
matcher_combinators.matchers.mismatch = (function matcher_combinators$matchers$mismatch(expected){
return matcher_combinators.core.__GT_Mismatcher(expected);
});
matcher_combinators.matchers.cljs_uri = (function matcher_combinators$matchers$cljs_uri(expected){
return matcher_combinators.core.__GT_CljsUriEquals(expected);
});
/**
 * Returns the type-specific matcher object for an expected
 *   value. This is used internally to support the match-with matcher,
 *   and is also useful for discovery when you want to know which Matcher
 *   type is associated to a value.
 * 
 *   Adds :matcher-object? metadata to the returned matcher so that
 *   other functions can differentiate between matcher objects and
 *   objects that happen to implement the Matcher protocol (which should
 *   be all other objects).
 */
matcher_combinators.matchers.matcher_for = (function matcher_combinators$matchers$matcher_for(var_args){
var G__52894 = arguments.length;
switch (G__52894) {
case 1:
return matcher_combinators.matchers.matcher_for.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return matcher_combinators.matchers.matcher_for.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(matcher_combinators.matchers.matcher_for.cljs$core$IFn$_invoke$arity$1 = (function (expected){
return matcher_combinators.core._matcher_for(expected);
}));

(matcher_combinators.matchers.matcher_for.cljs$core$IFn$_invoke$arity$2 = (function (expected,overrides){
return matcher_combinators.core._matcher_for(expected,overrides);
}));

(matcher_combinators.matchers.matcher_for.cljs$lang$maxFixedArity = 2);

matcher_combinators.matchers.__GT_pred = (function matcher_combinators$matchers$__GT_pred(class_or_pred){
if(cljs.core.fn_QMARK_(class_or_pred)){
return class_or_pred;
} else {
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.instance_QMARK_,class_or_pred);
}
});
matcher_combinators.matchers.format_overrides = (function matcher_combinators$matchers$format_overrides(overrides){
if(cljs.core.sequential_QMARK_(overrides)){
return cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),overrides);
} else {
return overrides;
}
});
/**
 * Internal use only. Iterates through pred->matcher-overrides and
 *   returns the value (a matcher) bound to the first pred that returns
 *   true for value. If no override is found, returns the default matcher
 *   for value.
 * 
 *   The legacy API called for a map of type->matcher, which is still
 *   supported by wrapping types in (instance? type %) predicates.
 */
matcher_combinators.matchers.lookup_matcher = (function matcher_combinators$matchers$lookup_matcher(value,pred__GT_matcher_overrides){
var or__4223__auto__ = cljs.core.last(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__52897){
var vec__52898 = p__52897;
var class_or_pred = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52898,(0),null);
var matcher = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52898,(1),null);
if(cljs.core.truth_((function (){var fexpr__52901 = matcher_combinators.matchers.__GT_pred(class_or_pred);
return (fexpr__52901.cljs$core$IFn$_invoke$arity$1 ? fexpr__52901.cljs$core$IFn$_invoke$arity$1(value) : fexpr__52901.call(null,value));
})())){
return matcher;
} else {
return null;
}
}),matcher_combinators.matchers.format_overrides(pred__GT_matcher_overrides))));
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return matcher_combinators.matchers.matcher_for.cljs$core$IFn$_invoke$arity$1(value);
}
});
matcher_combinators.matchers.match_with_values = (function matcher_combinators$matchers$match_with_values(m,overrides){
return cljs.core.reduce_kv((function (m_STAR_,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m_STAR_,k,(matcher_combinators.matchers.match_with.cljs$core$IFn$_invoke$arity$2 ? matcher_combinators.matchers.match_with.cljs$core$IFn$_invoke$arity$2(overrides,v) : matcher_combinators.matchers.match_with.call(null,overrides,v)));
}),cljs.core.PersistentArrayMap.EMPTY,m);
});
matcher_combinators.matchers.match_with_elements = (function matcher_combinators$matchers$match_with_elements(coll,overrides){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (c,v){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(c,(matcher_combinators.matchers.match_with.cljs$core$IFn$_invoke$arity$2 ? matcher_combinators.matchers.match_with.cljs$core$IFn$_invoke$arity$2(overrides,v) : matcher_combinators.matchers.match_with.call(null,overrides,v)));
}),((cljs.core.set_QMARK_(coll))?cljs.core.PersistentHashSet.EMPTY:cljs.core.PersistentVector.EMPTY),coll);
});
/**
 * Given a vector (or map) of overrides, returns the appropriate matcher
 *   for value (with value wrapped). If no matcher for value is found in
 *   overrides, uses the default:
 *  embeds for maps
 *  regex  for regular expressions
 *  equals for everything else
 * 
 *   If value is a collection, recursively applies match-with to its nested
 *   values, ignoring nested values that are already wrapped in matchers.
 * 
 *   NOTE that each nested match-with creates a new context, and nested contexts
 *   do not inherit the overrides of their parent contexts.
 */
matcher_combinators.matchers.match_with = (function matcher_combinators$matchers$match_with(overrides,value){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4((cljs.core.truth_(new cljs.core.Keyword("matcher-combinators.matchers","match-with?","matcher-combinators.matchers/match-with?",-1554879280).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(value)))?value:((cljs.core.fn_QMARK_(value))?value:((((cljs.core.record_QMARK_(value)) && (cljs.core.map_QMARK_(new cljs.core.Keyword(null,"expected","expected",1583670997).cljs$core$IFn$_invoke$arity$1(value)))))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(value,new cljs.core.Keyword(null,"expected","expected",1583670997),matcher_combinators.matchers.match_with_values,overrides):((((cljs.core.record_QMARK_(value)) && (cljs.core.coll_QMARK_(new cljs.core.Keyword(null,"expected","expected",1583670997).cljs$core$IFn$_invoke$arity$1(value)))))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(value,new cljs.core.Keyword(null,"expected","expected",1583670997),matcher_combinators.matchers.match_with_elements,overrides):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(matcher_combinators.core.Absent,cljs.core.type(value)))?value:((cljs.core.map_QMARK_(value))?(function (){var G__52905 = matcher_combinators.matchers.match_with_values(value,overrides);
var fexpr__52904 = matcher_combinators.matchers.matcher_for.cljs$core$IFn$_invoke$arity$2(value,overrides);
return (fexpr__52904.cljs$core$IFn$_invoke$arity$1 ? fexpr__52904.cljs$core$IFn$_invoke$arity$1(G__52905) : fexpr__52904.call(null,G__52905));
})():((cljs.core.coll_QMARK_(value))?(function (){var G__52907 = matcher_combinators.matchers.match_with_elements(value,overrides);
var fexpr__52906 = matcher_combinators.matchers.matcher_for.cljs$core$IFn$_invoke$arity$2(value,overrides);
return (fexpr__52906.cljs$core$IFn$_invoke$arity$1 ? fexpr__52906.cljs$core$IFn$_invoke$arity$1(G__52907) : fexpr__52906.call(null,G__52907));
})():(function (){var fexpr__52908 = matcher_combinators.matchers.matcher_for.cljs$core$IFn$_invoke$arity$2(value,overrides);
return (fexpr__52908.cljs$core$IFn$_invoke$arity$1 ? fexpr__52908.cljs$core$IFn$_invoke$arity$1(value) : fexpr__52908.call(null,value));
})()
))))))),cljs.core.assoc,new cljs.core.Keyword("matcher-combinators.matchers","match-with?","matcher-combinators.matchers/match-with?",-1554879280),true);
});
/**
 * Given `delta` and `expected`, returns a Matcher that will match
 *   when the actual value is within `delta` of `expected`. Given only
 *   `delta`, returns a function to be used in the context of `match-with`,
 *   e.g.
 * 
 *  (is (match? (m/match-with [number? (m/within-delta 0.01M)]
 *                            <expected>)
 *              <actual>))
 */
matcher_combinators.matchers.within_delta = (function matcher_combinators$matchers$within_delta(var_args){
var G__52911 = arguments.length;
switch (G__52911) {
case 1:
return matcher_combinators.matchers.within_delta.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return matcher_combinators.matchers.within_delta.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(matcher_combinators.matchers.within_delta.cljs$core$IFn$_invoke$arity$1 = (function (delta){
return (function (expected){
return matcher_combinators.matchers.within_delta.cljs$core$IFn$_invoke$arity$2(delta,expected);
});
}));

(matcher_combinators.matchers.within_delta.cljs$core$IFn$_invoke$arity$2 = (function (delta,expected){
return matcher_combinators.core.__GT_PredMatcher((function (actual){
return matcher_combinators.utils.within_delta_QMARK_(delta,expected,actual);
}),["within-delta ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expected)," (+/- ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(delta),")"].join(''));
}));

(matcher_combinators.matchers.within_delta.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=matcher_combinators.matchers.js.map
