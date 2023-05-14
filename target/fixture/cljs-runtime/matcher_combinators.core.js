goog.provide('matcher_combinators.core');

/**
 * For internal use. Type-specific implementations for finding matchers for
 *   expected values and matching them against expected values.
 * @interface
 */
matcher_combinators.core.Matcher = function(){};

var matcher_combinators$core$Matcher$_matcher_for$dyn_148685 = (function() {
var G__148686 = null;
var G__148686__1 = (function (expected){
var x__4521__auto__ = (((expected == null))?null:expected);
var m__4522__auto__ = (matcher_combinators.core._matcher_for[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(expected) : m__4522__auto__.call(null,expected));
} else {
var m__4519__auto__ = (matcher_combinators.core._matcher_for["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(expected) : m__4519__auto__.call(null,expected));
} else {
throw cljs.core.missing_protocol("Matcher.-matcher-for",expected);
}
}
});
var G__148686__2 = (function (expected,t__GT_m){
var x__4521__auto__ = (((expected == null))?null:expected);
var m__4522__auto__ = (matcher_combinators.core._matcher_for[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(expected,t__GT_m) : m__4522__auto__.call(null,expected,t__GT_m));
} else {
var m__4519__auto__ = (matcher_combinators.core._matcher_for["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(expected,t__GT_m) : m__4519__auto__.call(null,expected,t__GT_m));
} else {
throw cljs.core.missing_protocol("Matcher.-matcher-for",expected);
}
}
});
G__148686 = function(expected,t__GT_m){
switch(arguments.length){
case 1:
return G__148686__1.call(this,expected);
case 2:
return G__148686__2.call(this,expected,t__GT_m);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__148686.cljs$core$IFn$_invoke$arity$1 = G__148686__1;
G__148686.cljs$core$IFn$_invoke$arity$2 = G__148686__2;
return G__148686;
})()
;
/**
 * Do not call directly. Implementation for matcher-combinators.matchers/matcher-for.
 */
matcher_combinators.core._matcher_for = (function matcher_combinators$core$_matcher_for(var_args){
var G__147781 = arguments.length;
switch (G__147781) {
case 1:
return matcher_combinators.core._matcher_for.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return matcher_combinators.core._matcher_for.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(matcher_combinators.core._matcher_for.cljs$core$IFn$_invoke$arity$1 = (function (expected){
if((((!((expected == null)))) && ((!((expected.matcher_combinators$core$Matcher$_matcher_for$arity$1 == null)))))){
return expected.matcher_combinators$core$Matcher$_matcher_for$arity$1(expected);
} else {
return matcher_combinators$core$Matcher$_matcher_for$dyn_148685(expected);
}
}));

(matcher_combinators.core._matcher_for.cljs$core$IFn$_invoke$arity$2 = (function (expected,t__GT_m){
if((((!((expected == null)))) && ((!((expected.matcher_combinators$core$Matcher$_matcher_for$arity$2 == null)))))){
return expected.matcher_combinators$core$Matcher$_matcher_for$arity$2(expected,t__GT_m);
} else {
return matcher_combinators$core$Matcher$_matcher_for$dyn_148685(expected,t__GT_m);
}
}));

(matcher_combinators.core._matcher_for.cljs$lang$maxFixedArity = 2);


var matcher_combinators$core$Matcher$_base_name$dyn_148688 = (function (this$){
var x__4521__auto__ = (((this$ == null))?null:this$);
var m__4522__auto__ = (matcher_combinators.core._base_name[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4522__auto__.call(null,this$));
} else {
var m__4519__auto__ = (matcher_combinators.core._base_name["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4519__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Matcher.-base-name",this$);
}
}
});
/**
 * The name of the matcher as a symbol
 */
matcher_combinators.core._base_name = (function matcher_combinators$core$_base_name(this$){
if((((!((this$ == null)))) && ((!((this$.matcher_combinators$core$Matcher$_base_name$arity$1 == null)))))){
return this$.matcher_combinators$core$Matcher$_base_name$arity$1(this$);
} else {
return matcher_combinators$core$Matcher$_base_name$dyn_148688(this$);
}
});

var matcher_combinators$core$Matcher$_match$dyn_148689 = (function (this$,actual){
var x__4521__auto__ = (((this$ == null))?null:this$);
var m__4522__auto__ = (matcher_combinators.core._match[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(this$,actual) : m__4522__auto__.call(null,this$,actual));
} else {
var m__4519__auto__ = (matcher_combinators.core._match["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(this$,actual) : m__4519__auto__.call(null,this$,actual));
} else {
throw cljs.core.missing_protocol("Matcher.-match",this$);
}
}
});
/**
 * Do not call directly. Implementation for matcher-combinators.core/match.
 */
matcher_combinators.core._match = (function matcher_combinators$core$_match(this$,actual){
if((((!((this$ == null)))) && ((!((this$.matcher_combinators$core$Matcher$_match$arity$2 == null)))))){
return this$.matcher_combinators$core$Matcher$_match$arity$2(this$,actual);
} else {
return matcher_combinators$core$Matcher$_match$dyn_148689(this$,actual);
}
});

/**
 * For internal use. Returns a map indicating whether the `actual` value matches `expected`.
 * 
 *   `expected` can be the expected value, a matcher, or a predicate fn of actual.
 * 
 *   Return map includes the following keys:
 * 
 *   - :matcher-combinators.result/type  - either :match or :mismatch
 *   - :matcher-combinators.result/value - the actual value with mismatch annotations.
 *                                      Only present when :match/result is :mismatch
 */
matcher_combinators.core.match = (function matcher_combinators$core$match(expected,actual){
return matcher_combinators.core._match(expected,actual);
});
cljs.spec.alpha.def_impl(new cljs.core.Symbol("matcher-combinators.core","indicates-match?","matcher-combinators.core/indicates-match?",-1708756026,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"match-result","match-result",-1198577436),new cljs.core.Keyword("matcher-combinators.result","result","matcher-combinators.result/result",-647454940)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"match-result","match-result",-1198577436),new cljs.core.Keyword("matcher-combinators.result","result","matcher-combinators.result/result",-647454940)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"match-result","match-result",-1198577436)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("matcher-combinators.result","result","matcher-combinators.result/result",-647454940)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("matcher-combinators.result","result","matcher-combinators.result/result",-647454940)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"match-result","match-result",-1198577436),new cljs.core.Keyword("matcher-combinators.result","result","matcher-combinators.result/result",-647454940)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),cljs.core.boolean_QMARK_,null,null),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),null,null,null));
/**
 * Returns true if match-result (the map returned by `(match expected actual)`) indicates a match.
 */
matcher_combinators.core.indicates_match_QMARK_ = (function matcher_combinators$core$indicates_match_QMARK_(match_result){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(match_result));
});
/**
 * DEPRECATED! Use `indicates-match?` instead.
 */
matcher_combinators.core.match_QMARK_ = (function matcher_combinators$core$match_QMARK_(match_result){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["DEPRECATION NOTICE: matcher-combinators.core/match? is deprecated.\n","                    Use matcher-combinators.core/indicates-match? instead."].join('')], 0));

return matcher_combinators.core.indicates_match_QMARK_(match_result);
});
matcher_combinators.core.matcher_QMARK_ = (function matcher_combinators$core$matcher_QMARK_(x){
if((!((x == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.matcher_combinators$core$Matcher$)))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(matcher_combinators.core.Matcher,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(matcher_combinators.core.Matcher,x);
}
});
matcher_combinators.core.value_match = (function matcher_combinators$core$value_match(expected,actual){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("matcher-combinators.core","missing","matcher-combinators.core/missing",-1284372822),actual)){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109),new cljs.core.Keyword(null,"mismatch","mismatch",103313617),new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494),matcher_combinators.model.__GT_Missing(expected),new cljs.core.Keyword("matcher-combinators.result","weight","matcher-combinators.result/weight",837269218),(1)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(expected,actual)){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109),new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494),actual,new cljs.core.Keyword("matcher-combinators.result","weight","matcher-combinators.result/weight",837269218),(0)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109),new cljs.core.Keyword(null,"mismatch","mismatch",103313617),new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494),matcher_combinators.model.__GT_Mismatch(expected,actual),new cljs.core.Keyword("matcher-combinators.result","weight","matcher-combinators.result/weight",837269218),(1)], null);

}
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {matcher_combinators.core.Matcher}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
matcher_combinators.core.Value = (function (expected,__meta,__extmap,__hash){
this.expected = expected;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(matcher_combinators.core.Value.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(matcher_combinators.core.Value.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k147806,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__147810 = k147806;
var G__147810__$1 = (((G__147810 instanceof cljs.core.Keyword))?G__147810.fqn:null);
switch (G__147810__$1) {
case "expected":
return self__.expected;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k147806,else__4475__auto__);

}
}));

(matcher_combinators.core.Value.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__147812){
var vec__147813 = p__147812;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__147813,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__147813,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(matcher_combinators.core.Value.prototype.matcher_combinators$core$Matcher$ = cljs.core.PROTOCOL_SENTINEL);

(matcher_combinators.core.Value.prototype.matcher_combinators$core$Matcher$_matcher_for$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1;
}));

(matcher_combinators.core.Value.prototype.matcher_combinators$core$Matcher$_matcher_for$arity$2 = (function (this$,_){
var self__ = this;
var this$__$1 = this;
return this$__$1;
}));

(matcher_combinators.core.Value.prototype.matcher_combinators$core$Matcher$_match$arity$2 = (function (_,actual){
var self__ = this;
var ___$1 = this;
return matcher_combinators.core.value_match(self__.expected,actual);
}));

(matcher_combinators.core.Value.prototype.matcher_combinators$core$Matcher$_base_name$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Symbol(null,"equals","equals",1177497557,null);
}));

(matcher_combinators.core.Value.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#matcher-combinators.core.Value{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"expected","expected",1583670997),self__.expected],null))], null),self__.__extmap));
}));

(matcher_combinators.core.Value.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__147805){
var self__ = this;
var G__147805__$1 = this;
return (new cljs.core.RecordIter((0),G__147805__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"expected","expected",1583670997)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(matcher_combinators.core.Value.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(matcher_combinators.core.Value.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new matcher_combinators.core.Value(self__.expected,self__.__meta,self__.__extmap,self__.__hash));
}));

(matcher_combinators.core.Value.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(matcher_combinators.core.Value.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (coll__4469__auto__){
return (-310765865 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
})(this__4468__auto____$1);
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(matcher_combinators.core.Value.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this147807,other147808){
var self__ = this;
var this147807__$1 = this;
return (((!((other147808 == null)))) && ((((this147807__$1.constructor === other147808.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this147807__$1.expected,other147808.expected)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this147807__$1.__extmap,other147808.__extmap)))))));
}));

(matcher_combinators.core.Value.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"expected","expected",1583670997),null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new matcher_combinators.core.Value(self__.expected,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(matcher_combinators.core.Value.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k147806){
var self__ = this;
var this__4479__auto____$1 = this;
var G__147833 = k147806;
var G__147833__$1 = (((G__147833 instanceof cljs.core.Keyword))?G__147833.fqn:null);
switch (G__147833__$1) {
case "expected":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k147806);

}
}));

(matcher_combinators.core.Value.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__147805){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__147837 = cljs.core.keyword_identical_QMARK_;
var expr__147838 = k__4481__auto__;
if(cljs.core.truth_((pred__147837.cljs$core$IFn$_invoke$arity$2 ? pred__147837.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expected","expected",1583670997),expr__147838) : pred__147837.call(null,new cljs.core.Keyword(null,"expected","expected",1583670997),expr__147838)))){
return (new matcher_combinators.core.Value(G__147805,self__.__meta,self__.__extmap,null));
} else {
return (new matcher_combinators.core.Value(self__.expected,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__147805),null));
}
}));

(matcher_combinators.core.Value.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"expected","expected",1583670997),self__.expected,null))], null),self__.__extmap));
}));

(matcher_combinators.core.Value.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__147805){
var self__ = this;
var this__4471__auto____$1 = this;
return (new matcher_combinators.core.Value(self__.expected,G__147805,self__.__extmap,self__.__hash));
}));

(matcher_combinators.core.Value.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4478__auto__,(0)),cljs.core._nth(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(matcher_combinators.core.Value.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expected","expected",-1070764772,null)], null);
}));

(matcher_combinators.core.Value.cljs$lang$type = true);

(matcher_combinators.core.Value.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"matcher-combinators.core/Value",null,(1),null));
}));

(matcher_combinators.core.Value.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"matcher-combinators.core/Value");
}));

/**
 * Positional factory function for matcher-combinators.core/Value.
 */
matcher_combinators.core.__GT_Value = (function matcher_combinators$core$__GT_Value(expected){
return (new matcher_combinators.core.Value(expected,null,null,null));
});

/**
 * Factory function for matcher-combinators.core/Value, taking a map of keywords to field values.
 */
matcher_combinators.core.map__GT_Value = (function matcher_combinators$core$map__GT_Value(G__147809){
var extmap__4512__auto__ = (function (){var G__147847 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__147809,new cljs.core.Keyword(null,"expected","expected",1583670997));
if(cljs.core.record_QMARK_(G__147809)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__147847);
} else {
return G__147847;
}
})();
return (new matcher_combinators.core.Value(new cljs.core.Keyword(null,"expected","expected",1583670997).cljs$core$IFn$_invoke$arity$1(G__147809),null,cljs.core.not_empty(extmap__4512__auto__),null));
});

matcher_combinators.core.validate_input = (function matcher_combinators$core$validate_input(var_args){
var G__147861 = arguments.length;
switch (G__147861) {
case 5:
return matcher_combinators.core.validate_input.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return matcher_combinators.core.validate_input.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(matcher_combinators.core.validate_input.cljs$core$IFn$_invoke$arity$5 = (function (expected,actual,pred,matcher_name,type){
return matcher_combinators.core.validate_input.cljs$core$IFn$_invoke$arity$6(expected,actual,pred,pred,matcher_name,type);
}));

(matcher_combinators.core.validate_input.cljs$core$IFn$_invoke$arity$6 = (function (expected,actual,expected_pred,actual_pred,matcher_name,type){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(actual,new cljs.core.Keyword("matcher-combinators.core","missing","matcher-combinators.core/missing",-1284372822))){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109),new cljs.core.Keyword(null,"mismatch","mismatch",103313617),new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494),matcher_combinators.model.__GT_Missing(expected),new cljs.core.Keyword("matcher-combinators.result","weight","matcher-combinators.result/weight",837269218),(1)], null);
} else {
if(cljs.core.not((expected_pred.cljs$core$IFn$_invoke$arity$1 ? expected_pred.cljs$core$IFn$_invoke$arity$1(expected) : expected_pred.call(null,expected)))){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109),new cljs.core.Keyword(null,"mismatch","mismatch",103313617),new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494),matcher_combinators.model.__GT_InvalidMatcherType(["provided: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expected)].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(matcher_name)," should be called with 'expected' argument of type: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)].join('')),new cljs.core.Keyword("matcher-combinators.result","weight","matcher-combinators.result/weight",837269218),(1)], null);
} else {
if(cljs.core.not((actual_pred.cljs$core$IFn$_invoke$arity$1 ? actual_pred.cljs$core$IFn$_invoke$arity$1(actual) : actual_pred.call(null,actual)))){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109),new cljs.core.Keyword(null,"mismatch","mismatch",103313617),new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494),matcher_combinators.model.__GT_Mismatch(expected,actual),new cljs.core.Keyword("matcher-combinators.result","weight","matcher-combinators.result/weight",837269218),(1)], null);
} else {
return null;

}
}
}
}));

(matcher_combinators.core.validate_input.cljs$lang$maxFixedArity = 6);

matcher_combinators.core.regex_QMARK_ = (function matcher_combinators$core$regex_QMARK_(value){
return cljs.core.regexp_QMARK_(value);
});
matcher_combinators.core.regex_type = "RegExp";

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {matcher_combinators.core.Matcher}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
matcher_combinators.core.Regex = (function (expected,__meta,__extmap,__hash){
this.expected = expected;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(matcher_combinators.core.Regex.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(matcher_combinators.core.Regex.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k147882,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__147893 = k147882;
var G__147893__$1 = (((G__147893 instanceof cljs.core.Keyword))?G__147893.fqn:null);
switch (G__147893__$1) {
case "expected":
return self__.expected;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k147882,else__4475__auto__);

}
}));

(matcher_combinators.core.Regex.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__147894){
var vec__147895 = p__147894;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__147895,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__147895,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(matcher_combinators.core.Regex.prototype.matcher_combinators$core$Matcher$ = cljs.core.PROTOCOL_SENTINEL);

(matcher_combinators.core.Regex.prototype.matcher_combinators$core$Matcher$_matcher_for$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1;
}));

(matcher_combinators.core.Regex.prototype.matcher_combinators$core$Matcher$_matcher_for$arity$2 = (function (this$,_){
var self__ = this;
var this$__$1 = this;
return this$__$1;
}));

(matcher_combinators.core.Regex.prototype.matcher_combinators$core$Matcher$_match$arity$2 = (function (this$,actual){
var self__ = this;
var this$__$1 = this;
var temp__5751__auto__ = matcher_combinators.core.validate_input.cljs$core$IFn$_invoke$arity$6(self__.expected,actual,matcher_combinators.core.regex_QMARK_,cljs.core.constantly(true),this$__$1.matcher_combinators$core$Matcher$_base_name$arity$1(null),matcher_combinators.core.regex_type);
if(cljs.core.truth_(temp__5751__auto__)){
var issue = temp__5751__auto__;
return issue;
} else {
try{var temp__5751__auto____$1 = cljs.core.re_find(self__.expected,actual);
if(cljs.core.truth_(temp__5751__auto____$1)){
var match = temp__5751__auto____$1;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109),new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494),match,new cljs.core.Keyword("matcher-combinators.result","weight","matcher-combinators.result/weight",837269218),(0)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109),new cljs.core.Keyword(null,"mismatch","mismatch",103313617),new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494),matcher_combinators.model.__GT_Mismatch(self__.expected,actual),new cljs.core.Keyword("matcher-combinators.result","weight","matcher-combinators.result/weight",837269218),(1)], null);
}
}catch (e147899){if((e147899 instanceof Error)){
var _ = e147899;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109),new cljs.core.Keyword(null,"mismatch","mismatch",103313617),new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494),matcher_combinators.model.__GT_InvalidMatcherType(["provided: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(actual)].join(''),["regex ",cljs.core.print_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.expected], 0))," can't match 'expected' argument of type: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(actual))].join('')),new cljs.core.Keyword("matcher-combinators.result","weight","matcher-combinators.result/weight",837269218),(1)], null);
} else {
throw e147899;

}
}}
}));

(matcher_combinators.core.Regex.prototype.matcher_combinators$core$Matcher$_base_name$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Symbol(null,"regex","regex",-1714946913,null);
}));

(matcher_combinators.core.Regex.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#matcher-combinators.core.Regex{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"expected","expected",1583670997),self__.expected],null))], null),self__.__extmap));
}));

(matcher_combinators.core.Regex.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__147881){
var self__ = this;
var G__147881__$1 = this;
return (new cljs.core.RecordIter((0),G__147881__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"expected","expected",1583670997)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(matcher_combinators.core.Regex.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(matcher_combinators.core.Regex.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new matcher_combinators.core.Regex(self__.expected,self__.__meta,self__.__extmap,self__.__hash));
}));

(matcher_combinators.core.Regex.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(matcher_combinators.core.Regex.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (coll__4469__auto__){
return (2035122650 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
})(this__4468__auto____$1);
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(matcher_combinators.core.Regex.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this147883,other147884){
var self__ = this;
var this147883__$1 = this;
return (((!((other147884 == null)))) && ((((this147883__$1.constructor === other147884.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this147883__$1.expected,other147884.expected)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this147883__$1.__extmap,other147884.__extmap)))))));
}));

(matcher_combinators.core.Regex.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"expected","expected",1583670997),null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new matcher_combinators.core.Regex(self__.expected,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(matcher_combinators.core.Regex.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k147882){
var self__ = this;
var this__4479__auto____$1 = this;
var G__147918 = k147882;
var G__147918__$1 = (((G__147918 instanceof cljs.core.Keyword))?G__147918.fqn:null);
switch (G__147918__$1) {
case "expected":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k147882);

}
}));

(matcher_combinators.core.Regex.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__147881){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__147919 = cljs.core.keyword_identical_QMARK_;
var expr__147920 = k__4481__auto__;
if(cljs.core.truth_((pred__147919.cljs$core$IFn$_invoke$arity$2 ? pred__147919.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expected","expected",1583670997),expr__147920) : pred__147919.call(null,new cljs.core.Keyword(null,"expected","expected",1583670997),expr__147920)))){
return (new matcher_combinators.core.Regex(G__147881,self__.__meta,self__.__extmap,null));
} else {
return (new matcher_combinators.core.Regex(self__.expected,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__147881),null));
}
}));

(matcher_combinators.core.Regex.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"expected","expected",1583670997),self__.expected,null))], null),self__.__extmap));
}));

(matcher_combinators.core.Regex.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__147881){
var self__ = this;
var this__4471__auto____$1 = this;
return (new matcher_combinators.core.Regex(self__.expected,G__147881,self__.__extmap,self__.__hash));
}));

(matcher_combinators.core.Regex.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4478__auto__,(0)),cljs.core._nth(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(matcher_combinators.core.Regex.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expected","expected",-1070764772,null)], null);
}));

(matcher_combinators.core.Regex.cljs$lang$type = true);

(matcher_combinators.core.Regex.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"matcher-combinators.core/Regex",null,(1),null));
}));

(matcher_combinators.core.Regex.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"matcher-combinators.core/Regex");
}));

/**
 * Positional factory function for matcher-combinators.core/Regex.
 */
matcher_combinators.core.__GT_Regex = (function matcher_combinators$core$__GT_Regex(expected){
return (new matcher_combinators.core.Regex(expected,null,null,null));
});

/**
 * Factory function for matcher-combinators.core/Regex, taking a map of keywords to field values.
 */
matcher_combinators.core.map__GT_Regex = (function matcher_combinators$core$map__GT_Regex(G__147885){
var extmap__4512__auto__ = (function (){var G__147928 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__147885,new cljs.core.Keyword(null,"expected","expected",1583670997));
if(cljs.core.record_QMARK_(G__147885)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__147928);
} else {
return G__147928;
}
})();
return (new matcher_combinators.core.Regex(new cljs.core.Keyword(null,"expected","expected",1583670997).cljs$core$IFn$_invoke$arity$1(G__147885),null,cljs.core.not_empty(extmap__4512__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {matcher_combinators.core.Matcher}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
matcher_combinators.core.Absent = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(matcher_combinators.core.Absent.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(matcher_combinators.core.Absent.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k147931,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__147935 = k147931;
switch (G__147935) {
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k147931,else__4475__auto__);

}
}));

(matcher_combinators.core.Absent.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__147939){
var vec__147940 = p__147939;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__147940,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__147940,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(matcher_combinators.core.Absent.prototype.matcher_combinators$core$Matcher$ = cljs.core.PROTOCOL_SENTINEL);

(matcher_combinators.core.Absent.prototype.matcher_combinators$core$Matcher$_matcher_for$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1;
}));

(matcher_combinators.core.Absent.prototype.matcher_combinators$core$Matcher$_matcher_for$arity$2 = (function (this$,_){
var self__ = this;
var this$__$1 = this;
return this$__$1;
}));

(matcher_combinators.core.Absent.prototype.matcher_combinators$core$Matcher$_match$arity$2 = (function (_this,_actual){
var self__ = this;
var _this__$1 = this;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109),new cljs.core.Keyword(null,"mismatch","mismatch",103313617),new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494),matcher_combinators.model.__GT_InvalidMatcherContext("`absent` matcher should only be used as the value in a map"),new cljs.core.Keyword("matcher-combinators.result","weight","matcher-combinators.result/weight",837269218),(1)], null);
}));

(matcher_combinators.core.Absent.prototype.matcher_combinators$core$Matcher$_base_name$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Symbol(null,"absent","absent",-1634295397,null);
}));

(matcher_combinators.core.Absent.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#matcher-combinators.core.Absent{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(matcher_combinators.core.Absent.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__147930){
var self__ = this;
var G__147930__$1 = this;
return (new cljs.core.RecordIter((0),G__147930__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(matcher_combinators.core.Absent.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(matcher_combinators.core.Absent.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new matcher_combinators.core.Absent(self__.__meta,self__.__extmap,self__.__hash));
}));

(matcher_combinators.core.Absent.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (0 + cljs.core.count(self__.__extmap));
}));

(matcher_combinators.core.Absent.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (coll__4469__auto__){
return (-1996031918 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
})(this__4468__auto____$1);
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(matcher_combinators.core.Absent.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this147932,other147933){
var self__ = this;
var this147932__$1 = this;
return (((!((other147933 == null)))) && ((((this147932__$1.constructor === other147933.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this147932__$1.__extmap,other147933.__extmap)))));
}));

(matcher_combinators.core.Absent.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.EMPTY,k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new matcher_combinators.core.Absent(self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(matcher_combinators.core.Absent.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k147931){
var self__ = this;
var this__4479__auto____$1 = this;
return cljs.core.contains_QMARK_(self__.__extmap,k147931);
}));

(matcher_combinators.core.Absent.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__147930){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__147956 = cljs.core.keyword_identical_QMARK_;
var expr__147957 = k__4481__auto__;
return (new matcher_combinators.core.Absent(self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__147930),null));
}));

(matcher_combinators.core.Absent.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(matcher_combinators.core.Absent.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__147930){
var self__ = this;
var this__4471__auto____$1 = this;
return (new matcher_combinators.core.Absent(G__147930,self__.__extmap,self__.__hash));
}));

(matcher_combinators.core.Absent.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4478__auto__,(0)),cljs.core._nth(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(matcher_combinators.core.Absent.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(matcher_combinators.core.Absent.cljs$lang$type = true);

(matcher_combinators.core.Absent.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"matcher-combinators.core/Absent",null,(1),null));
}));

(matcher_combinators.core.Absent.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"matcher-combinators.core/Absent");
}));

/**
 * Positional factory function for matcher-combinators.core/Absent.
 */
matcher_combinators.core.__GT_Absent = (function matcher_combinators$core$__GT_Absent(){
return (new matcher_combinators.core.Absent(null,null,null));
});

/**
 * Factory function for matcher-combinators.core/Absent, taking a map of keywords to field values.
 */
matcher_combinators.core.map__GT_Absent = (function matcher_combinators$core$map__GT_Absent(G__147934){
var extmap__4512__auto__ = (function (){var G__147959 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(G__147934);
if(cljs.core.record_QMARK_(G__147934)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__147959);
} else {
return G__147959;
}
})();
return (new matcher_combinators.core.Absent(null,cljs.core.not_empty(extmap__4512__auto__),null));
});

cljs.pprint.simple_dispatch.cljs$core$IMultiFn$_add_method$arity$3(null,matcher_combinators.core.Absent,(function (absent){
return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([matcher_combinators.core._base_name(absent)], 0));
}));

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {matcher_combinators.core.Matcher}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
matcher_combinators.core.InvalidType = (function (provided,matcher_name,type_msg,__meta,__extmap,__hash){
this.provided = provided;
this.matcher_name = matcher_name;
this.type_msg = type_msg;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(matcher_combinators.core.InvalidType.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(matcher_combinators.core.InvalidType.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k147961,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__147966 = k147961;
var G__147966__$1 = (((G__147966 instanceof cljs.core.Keyword))?G__147966.fqn:null);
switch (G__147966__$1) {
case "provided":
return self__.provided;

break;
case "matcher-name":
return self__.matcher_name;

break;
case "type-msg":
return self__.type_msg;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k147961,else__4475__auto__);

}
}));

(matcher_combinators.core.InvalidType.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__147969){
var vec__147972 = p__147969;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__147972,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__147972,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(matcher_combinators.core.InvalidType.prototype.matcher_combinators$core$Matcher$ = cljs.core.PROTOCOL_SENTINEL);

(matcher_combinators.core.InvalidType.prototype.matcher_combinators$core$Matcher$_matcher_for$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1;
}));

(matcher_combinators.core.InvalidType.prototype.matcher_combinators$core$Matcher$_matcher_for$arity$2 = (function (this$,_){
var self__ = this;
var this$__$1 = this;
return this$__$1;
}));

(matcher_combinators.core.InvalidType.prototype.matcher_combinators$core$Matcher$_match$arity$2 = (function (_this,_actual){
var self__ = this;
var _this__$1 = this;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109),new cljs.core.Keyword(null,"mismatch","mismatch",103313617),new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494),matcher_combinators.model.__GT_InvalidMatcherType(["provided: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.provided)].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.matcher_name)," should be called with 'expected' argument of type: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.type_msg)].join('')),new cljs.core.Keyword("matcher-combinators.result","weight","matcher-combinators.result/weight",837269218),(1)], null);
}));

(matcher_combinators.core.InvalidType.prototype.matcher_combinators$core$Matcher$_base_name$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(self__.matcher_name);
}));

(matcher_combinators.core.InvalidType.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#matcher-combinators.core.InvalidType{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"provided","provided",-1493091365),self__.provided],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"matcher-name","matcher-name",-1187399918),self__.matcher_name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-msg","type-msg",264591646),self__.type_msg],null))], null),self__.__extmap));
}));

(matcher_combinators.core.InvalidType.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__147960){
var self__ = this;
var G__147960__$1 = this;
return (new cljs.core.RecordIter((0),G__147960__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"provided","provided",-1493091365),new cljs.core.Keyword(null,"matcher-name","matcher-name",-1187399918),new cljs.core.Keyword(null,"type-msg","type-msg",264591646)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(matcher_combinators.core.InvalidType.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(matcher_combinators.core.InvalidType.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new matcher_combinators.core.InvalidType(self__.provided,self__.matcher_name,self__.type_msg,self__.__meta,self__.__extmap,self__.__hash));
}));

(matcher_combinators.core.InvalidType.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
}));

(matcher_combinators.core.InvalidType.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (coll__4469__auto__){
return (962201437 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
})(this__4468__auto____$1);
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(matcher_combinators.core.InvalidType.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this147962,other147963){
var self__ = this;
var this147962__$1 = this;
return (((!((other147963 == null)))) && ((((this147962__$1.constructor === other147963.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this147962__$1.provided,other147963.provided)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this147962__$1.matcher_name,other147963.matcher_name)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this147962__$1.type_msg,other147963.type_msg)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this147962__$1.__extmap,other147963.__extmap)))))))))));
}));

(matcher_combinators.core.InvalidType.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"matcher-name","matcher-name",-1187399918),null,new cljs.core.Keyword(null,"provided","provided",-1493091365),null,new cljs.core.Keyword(null,"type-msg","type-msg",264591646),null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new matcher_combinators.core.InvalidType(self__.provided,self__.matcher_name,self__.type_msg,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(matcher_combinators.core.InvalidType.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k147961){
var self__ = this;
var this__4479__auto____$1 = this;
var G__148007 = k147961;
var G__148007__$1 = (((G__148007 instanceof cljs.core.Keyword))?G__148007.fqn:null);
switch (G__148007__$1) {
case "provided":
case "matcher-name":
case "type-msg":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k147961);

}
}));

(matcher_combinators.core.InvalidType.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__147960){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__148010 = cljs.core.keyword_identical_QMARK_;
var expr__148011 = k__4481__auto__;
if(cljs.core.truth_((pred__148010.cljs$core$IFn$_invoke$arity$2 ? pred__148010.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"provided","provided",-1493091365),expr__148011) : pred__148010.call(null,new cljs.core.Keyword(null,"provided","provided",-1493091365),expr__148011)))){
return (new matcher_combinators.core.InvalidType(G__147960,self__.matcher_name,self__.type_msg,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__148010.cljs$core$IFn$_invoke$arity$2 ? pred__148010.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"matcher-name","matcher-name",-1187399918),expr__148011) : pred__148010.call(null,new cljs.core.Keyword(null,"matcher-name","matcher-name",-1187399918),expr__148011)))){
return (new matcher_combinators.core.InvalidType(self__.provided,G__147960,self__.type_msg,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__148010.cljs$core$IFn$_invoke$arity$2 ? pred__148010.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type-msg","type-msg",264591646),expr__148011) : pred__148010.call(null,new cljs.core.Keyword(null,"type-msg","type-msg",264591646),expr__148011)))){
return (new matcher_combinators.core.InvalidType(self__.provided,self__.matcher_name,G__147960,self__.__meta,self__.__extmap,null));
} else {
return (new matcher_combinators.core.InvalidType(self__.provided,self__.matcher_name,self__.type_msg,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__147960),null));
}
}
}
}));

(matcher_combinators.core.InvalidType.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"provided","provided",-1493091365),self__.provided,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"matcher-name","matcher-name",-1187399918),self__.matcher_name,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"type-msg","type-msg",264591646),self__.type_msg,null))], null),self__.__extmap));
}));

(matcher_combinators.core.InvalidType.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__147960){
var self__ = this;
var this__4471__auto____$1 = this;
return (new matcher_combinators.core.InvalidType(self__.provided,self__.matcher_name,self__.type_msg,G__147960,self__.__extmap,self__.__hash));
}));

(matcher_combinators.core.InvalidType.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4478__auto__,(0)),cljs.core._nth(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(matcher_combinators.core.InvalidType.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"provided","provided",147440162,null),new cljs.core.Symbol(null,"matcher-name","matcher-name",453131609,null),new cljs.core.Symbol(null,"type-msg","type-msg",1905123173,null)], null);
}));

(matcher_combinators.core.InvalidType.cljs$lang$type = true);

(matcher_combinators.core.InvalidType.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"matcher-combinators.core/InvalidType",null,(1),null));
}));

(matcher_combinators.core.InvalidType.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"matcher-combinators.core/InvalidType");
}));

/**
 * Positional factory function for matcher-combinators.core/InvalidType.
 */
matcher_combinators.core.__GT_InvalidType = (function matcher_combinators$core$__GT_InvalidType(provided,matcher_name,type_msg){
return (new matcher_combinators.core.InvalidType(provided,matcher_name,type_msg,null,null,null));
});

/**
 * Factory function for matcher-combinators.core/InvalidType, taking a map of keywords to field values.
 */
matcher_combinators.core.map__GT_InvalidType = (function matcher_combinators$core$map__GT_InvalidType(G__147964){
var extmap__4512__auto__ = (function (){var G__148026 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__147964,new cljs.core.Keyword(null,"provided","provided",-1493091365),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"matcher-name","matcher-name",-1187399918),new cljs.core.Keyword(null,"type-msg","type-msg",264591646)], 0));
if(cljs.core.record_QMARK_(G__147964)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__148026);
} else {
return G__148026;
}
})();
return (new matcher_combinators.core.InvalidType(new cljs.core.Keyword(null,"provided","provided",-1493091365).cljs$core$IFn$_invoke$arity$1(G__147964),new cljs.core.Keyword(null,"matcher-name","matcher-name",-1187399918).cljs$core$IFn$_invoke$arity$1(G__147964),new cljs.core.Keyword(null,"type-msg","type-msg",264591646).cljs$core$IFn$_invoke$arity$1(G__147964),null,cljs.core.not_empty(extmap__4512__auto__),null));
});

matcher_combinators.core.find_unexpected = (function matcher_combinators$core$find_unexpected(expected_map,key){
var temp__5753__auto__ = cljs.core.find(expected_map,key);
if(cljs.core.truth_(temp__5753__auto__)){
var vec__148031 = temp__5753__auto__;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__148031,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__148031,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(matcher_combinators.core.Absent,cljs.core.type(v))){
return null;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null);
}
} else {
return null;
}
});
matcher_combinators.core.match_kv = (function matcher_combinators$core$match_kv(actual,p__148034){
var vec__148035 = p__148034;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__148035,(0),null);
var matcher = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__148035,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(matcher_combinators.core.Absent,cljs.core.type(matcher))){
var temp__5751__auto__ = cljs.core.find(actual,key);
if(cljs.core.truth_(temp__5751__auto__)){
var vec__148041 = temp__5751__auto__;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__148041,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__148041,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109),new cljs.core.Keyword(null,"mismatch","mismatch",103313617),new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494),matcher_combinators.model.__GT_Unexpected(v),new cljs.core.Keyword("matcher-combinators.result","weight","matcher-combinators.result/weight",837269218),(1)], null)], null);
} else {
return null;
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,matcher_combinators.core.match(matcher,cljs.core.get.cljs$core$IFn$_invoke$arity$3(actual,key,new cljs.core.Keyword("matcher-combinators.core","missing","matcher-combinators.core/missing",-1284372822)))], null);
}
});
matcher_combinators.core.compare_maps = (function matcher_combinators$core$compare_maps(expected,actual,unexpected_handler,allow_unexpected_QMARK_){
var entry_results = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(matcher_combinators.core.match_kv,actual),expected));
var unexpected_entries = cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p__148051){
var vec__148052 = p__148051;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__148052,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__148052,(1),null);
if(cljs.core.truth_(matcher_combinators.core.find_unexpected(expected,key))){
return null;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,(unexpected_handler.cljs$core$IFn$_invoke$arity$1 ? unexpected_handler.cljs$core$IFn$_invoke$arity$1(val) : unexpected_handler.call(null,val))], null);
}
}),actual);
if(cljs.core.truth_((function (){var and__4221__auto__ = cljs.core.every_QMARK_(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(matcher_combinators.core.indicates_match_QMARK_,cljs.core.second),entry_results);
if(and__4221__auto__){
var or__4223__auto__ = allow_unexpected_QMARK_;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.empty_QMARK_(unexpected_entries);
}
} else {
return and__4221__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109),new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494),actual,new cljs.core.Keyword("matcher-combinators.result","weight","matcher-combinators.result/weight",837269218),(0)], null);
} else {
var mismatch_val = cljs.core.into.cljs$core$IFn$_invoke$arity$2(actual,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(unexpected_entries,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__148058){
var vec__148059 = p__148058;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__148059,(0),null);
var match_result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__148059,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(match_result)], null);
}),entry_results)));
var weight = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc_weight,p__148062){
var map__148063 = p__148062;
var map__148063__$1 = cljs.core.__destructure_map(map__148063);
var weight = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__148063__$1,new cljs.core.Keyword("matcher-combinators.result","weight","matcher-combinators.result/weight",837269218));
return (acc_weight + weight);
}),(cljs.core.truth_(allow_unexpected_QMARK_)?(0):cljs.core.count(unexpected_entries)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,entry_results));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109),new cljs.core.Keyword(null,"mismatch","mismatch",103313617),new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494),mismatch_val,new cljs.core.Keyword("matcher-combinators.result","weight","matcher-combinators.result/weight",837269218),weight], null);
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {matcher_combinators.core.Matcher}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
matcher_combinators.core.EmbedsMap = (function (expected,__meta,__extmap,__hash){
this.expected = expected;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(matcher_combinators.core.EmbedsMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(matcher_combinators.core.EmbedsMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k148067,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__148073 = k148067;
var G__148073__$1 = (((G__148073 instanceof cljs.core.Keyword))?G__148073.fqn:null);
switch (G__148073__$1) {
case "expected":
return self__.expected;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k148067,else__4475__auto__);

}
}));

(matcher_combinators.core.EmbedsMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__148074){
var vec__148075 = p__148074;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__148075,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__148075,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(matcher_combinators.core.EmbedsMap.prototype.matcher_combinators$core$Matcher$ = cljs.core.PROTOCOL_SENTINEL);

(matcher_combinators.core.EmbedsMap.prototype.matcher_combinators$core$Matcher$_matcher_for$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1;
}));

(matcher_combinators.core.EmbedsMap.prototype.matcher_combinators$core$Matcher$_matcher_for$arity$2 = (function (this$,_){
var self__ = this;
var this$__$1 = this;
return this$__$1;
}));

(matcher_combinators.core.EmbedsMap.prototype.matcher_combinators$core$Matcher$_match$arity$2 = (function (this$,actual){
var self__ = this;
var this$__$1 = this;
var temp__5751__auto__ = matcher_combinators.core.validate_input.cljs$core$IFn$_invoke$arity$5(self__.expected,actual,cljs.core.map_QMARK_,this$__$1.matcher_combinators$core$Matcher$_base_name$arity$1(null),"map");
if(cljs.core.truth_(temp__5751__auto__)){
var issue = temp__5751__auto__;
return issue;
} else {
return matcher_combinators.core.compare_maps(self__.expected,actual,cljs.core.identity,true);
}
}));

(matcher_combinators.core.EmbedsMap.prototype.matcher_combinators$core$Matcher$_base_name$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Symbol(null,"embeds","embeds",-1821086689,null);
}));

(matcher_combinators.core.EmbedsMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#matcher-combinators.core.EmbedsMap{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"expected","expected",1583670997),self__.expected],null))], null),self__.__extmap));
}));

(matcher_combinators.core.EmbedsMap.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__148066){
var self__ = this;
var G__148066__$1 = this;
return (new cljs.core.RecordIter((0),G__148066__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"expected","expected",1583670997)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(matcher_combinators.core.EmbedsMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(matcher_combinators.core.EmbedsMap.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new matcher_combinators.core.EmbedsMap(self__.expected,self__.__meta,self__.__extmap,self__.__hash));
}));

(matcher_combinators.core.EmbedsMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(matcher_combinators.core.EmbedsMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (coll__4469__auto__){
return (780281335 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
})(this__4468__auto____$1);
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(matcher_combinators.core.EmbedsMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this148068,other148069){
var self__ = this;
var this148068__$1 = this;
return (((!((other148069 == null)))) && ((((this148068__$1.constructor === other148069.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this148068__$1.expected,other148069.expected)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this148068__$1.__extmap,other148069.__extmap)))))));
}));

(matcher_combinators.core.EmbedsMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"expected","expected",1583670997),null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new matcher_combinators.core.EmbedsMap(self__.expected,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(matcher_combinators.core.EmbedsMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k148067){
var self__ = this;
var this__4479__auto____$1 = this;
var G__148103 = k148067;
var G__148103__$1 = (((G__148103 instanceof cljs.core.Keyword))?G__148103.fqn:null);
switch (G__148103__$1) {
case "expected":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k148067);

}
}));

(matcher_combinators.core.EmbedsMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__148066){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__148105 = cljs.core.keyword_identical_QMARK_;
var expr__148106 = k__4481__auto__;
if(cljs.core.truth_((pred__148105.cljs$core$IFn$_invoke$arity$2 ? pred__148105.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expected","expected",1583670997),expr__148106) : pred__148105.call(null,new cljs.core.Keyword(null,"expected","expected",1583670997),expr__148106)))){
return (new matcher_combinators.core.EmbedsMap(G__148066,self__.__meta,self__.__extmap,null));
} else {
return (new matcher_combinators.core.EmbedsMap(self__.expected,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__148066),null));
}
}));

(matcher_combinators.core.EmbedsMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"expected","expected",1583670997),self__.expected,null))], null),self__.__extmap));
}));

(matcher_combinators.core.EmbedsMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__148066){
var self__ = this;
var this__4471__auto____$1 = this;
return (new matcher_combinators.core.EmbedsMap(self__.expected,G__148066,self__.__extmap,self__.__hash));
}));

(matcher_combinators.core.EmbedsMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4478__auto__,(0)),cljs.core._nth(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(matcher_combinators.core.EmbedsMap.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expected","expected",-1070764772,null)], null);
}));

(matcher_combinators.core.EmbedsMap.cljs$lang$type = true);

(matcher_combinators.core.EmbedsMap.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"matcher-combinators.core/EmbedsMap",null,(1),null));
}));

(matcher_combinators.core.EmbedsMap.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"matcher-combinators.core/EmbedsMap");
}));

/**
 * Positional factory function for matcher-combinators.core/EmbedsMap.
 */
matcher_combinators.core.__GT_EmbedsMap = (function matcher_combinators$core$__GT_EmbedsMap(expected){
return (new matcher_combinators.core.EmbedsMap(expected,null,null,null));
});

/**
 * Factory function for matcher-combinators.core/EmbedsMap, taking a map of keywords to field values.
 */
matcher_combinators.core.map__GT_EmbedsMap = (function matcher_combinators$core$map__GT_EmbedsMap(G__148070){
var extmap__4512__auto__ = (function (){var G__148117 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__148070,new cljs.core.Keyword(null,"expected","expected",1583670997));
if(cljs.core.record_QMARK_(G__148070)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__148117);
} else {
return G__148117;
}
})();
return (new matcher_combinators.core.EmbedsMap(new cljs.core.Keyword(null,"expected","expected",1583670997).cljs$core$IFn$_invoke$arity$1(G__148070),null,cljs.core.not_empty(extmap__4512__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {matcher_combinators.core.Matcher}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
matcher_combinators.core.EqualsMap = (function (expected,__meta,__extmap,__hash){
this.expected = expected;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(matcher_combinators.core.EqualsMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(matcher_combinators.core.EqualsMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k148121,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__148137 = k148121;
var G__148137__$1 = (((G__148137 instanceof cljs.core.Keyword))?G__148137.fqn:null);
switch (G__148137__$1) {
case "expected":
return self__.expected;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k148121,else__4475__auto__);

}
}));

(matcher_combinators.core.EqualsMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__148138){
var vec__148139 = p__148138;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__148139,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__148139,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(matcher_combinators.core.EqualsMap.prototype.matcher_combinators$core$Matcher$ = cljs.core.PROTOCOL_SENTINEL);

(matcher_combinators.core.EqualsMap.prototype.matcher_combinators$core$Matcher$_matcher_for$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1;
}));

(matcher_combinators.core.EqualsMap.prototype.matcher_combinators$core$Matcher$_matcher_for$arity$2 = (function (this$,_){
var self__ = this;
var this$__$1 = this;
return this$__$1;
}));

(matcher_combinators.core.EqualsMap.prototype.matcher_combinators$core$Matcher$_match$arity$2 = (function (this$,actual){
var self__ = this;
var this$__$1 = this;
var temp__5751__auto__ = matcher_combinators.core.validate_input.cljs$core$IFn$_invoke$arity$5(self__.expected,actual,cljs.core.map_QMARK_,this$__$1.matcher_combinators$core$Matcher$_base_name$arity$1(null),"map");
if(cljs.core.truth_(temp__5751__auto__)){
var issue = temp__5751__auto__;
return issue;
} else {
return matcher_combinators.core.compare_maps(self__.expected,actual,matcher_combinators.model.__GT_Unexpected,false);
}
}));

(matcher_combinators.core.EqualsMap.prototype.matcher_combinators$core$Matcher$_base_name$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Symbol(null,"equals","equals",1177497557,null);
}));

(matcher_combinators.core.EqualsMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#matcher-combinators.core.EqualsMap{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"expected","expected",1583670997),self__.expected],null))], null),self__.__extmap));
}));

(matcher_combinators.core.EqualsMap.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__148120){
var self__ = this;
var G__148120__$1 = this;
return (new cljs.core.RecordIter((0),G__148120__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"expected","expected",1583670997)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(matcher_combinators.core.EqualsMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(matcher_combinators.core.EqualsMap.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new matcher_combinators.core.EqualsMap(self__.expected,self__.__meta,self__.__extmap,self__.__hash));
}));

(matcher_combinators.core.EqualsMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(matcher_combinators.core.EqualsMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (coll__4469__auto__){
return (-687591558 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
})(this__4468__auto____$1);
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(matcher_combinators.core.EqualsMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this148122,other148123){
var self__ = this;
var this148122__$1 = this;
return (((!((other148123 == null)))) && ((((this148122__$1.constructor === other148123.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this148122__$1.expected,other148123.expected)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this148122__$1.__extmap,other148123.__extmap)))))));
}));

(matcher_combinators.core.EqualsMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"expected","expected",1583670997),null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new matcher_combinators.core.EqualsMap(self__.expected,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(matcher_combinators.core.EqualsMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k148121){
var self__ = this;
var this__4479__auto____$1 = this;
var G__148147 = k148121;
var G__148147__$1 = (((G__148147 instanceof cljs.core.Keyword))?G__148147.fqn:null);
switch (G__148147__$1) {
case "expected":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k148121);

}
}));

(matcher_combinators.core.EqualsMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__148120){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__148148 = cljs.core.keyword_identical_QMARK_;
var expr__148149 = k__4481__auto__;
if(cljs.core.truth_((pred__148148.cljs$core$IFn$_invoke$arity$2 ? pred__148148.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expected","expected",1583670997),expr__148149) : pred__148148.call(null,new cljs.core.Keyword(null,"expected","expected",1583670997),expr__148149)))){
return (new matcher_combinators.core.EqualsMap(G__148120,self__.__meta,self__.__extmap,null));
} else {
return (new matcher_combinators.core.EqualsMap(self__.expected,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__148120),null));
}
}));

(matcher_combinators.core.EqualsMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"expected","expected",1583670997),self__.expected,null))], null),self__.__extmap));
}));

(matcher_combinators.core.EqualsMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__148120){
var self__ = this;
var this__4471__auto____$1 = this;
return (new matcher_combinators.core.EqualsMap(self__.expected,G__148120,self__.__extmap,self__.__hash));
}));

(matcher_combinators.core.EqualsMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4478__auto__,(0)),cljs.core._nth(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(matcher_combinators.core.EqualsMap.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expected","expected",-1070764772,null)], null);
}));

(matcher_combinators.core.EqualsMap.cljs$lang$type = true);

(matcher_combinators.core.EqualsMap.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"matcher-combinators.core/EqualsMap",null,(1),null));
}));

(matcher_combinators.core.EqualsMap.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"matcher-combinators.core/EqualsMap");
}));

/**
 * Positional factory function for matcher-combinators.core/EqualsMap.
 */
matcher_combinators.core.__GT_EqualsMap = (function matcher_combinators$core$__GT_EqualsMap(expected){
return (new matcher_combinators.core.EqualsMap(expected,null,null,null));
});

/**
 * Factory function for matcher-combinators.core/EqualsMap, taking a map of keywords to field values.
 */
matcher_combinators.core.map__GT_EqualsMap = (function matcher_combinators$core$map__GT_EqualsMap(G__148128){
var extmap__4512__auto__ = (function (){var G__148151 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__148128,new cljs.core.Keyword(null,"expected","expected",1583670997));
if(cljs.core.record_QMARK_(G__148128)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__148151);
} else {
return G__148151;
}
})();
return (new matcher_combinators.core.EqualsMap(new cljs.core.Keyword(null,"expected","expected",1583670997).cljs$core$IFn$_invoke$arity$1(G__148128),null,cljs.core.not_empty(extmap__4512__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {matcher_combinators.core.Matcher}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
matcher_combinators.core.EqualsRecord = (function (expected,__meta,__extmap,__hash){
this.expected = expected;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(matcher_combinators.core.EqualsRecord.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(matcher_combinators.core.EqualsRecord.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k148153,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__148157 = k148153;
var G__148157__$1 = (((G__148157 instanceof cljs.core.Keyword))?G__148157.fqn:null);
switch (G__148157__$1) {
case "expected":
return self__.expected;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k148153,else__4475__auto__);

}
}));

(matcher_combinators.core.EqualsRecord.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__148161){
var vec__148163 = p__148161;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__148163,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__148163,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(matcher_combinators.core.EqualsRecord.prototype.matcher_combinators$core$Matcher$ = cljs.core.PROTOCOL_SENTINEL);

(matcher_combinators.core.EqualsRecord.prototype.matcher_combinators$core$Matcher$_matcher_for$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1;
}));

(matcher_combinators.core.EqualsRecord.prototype.matcher_combinators$core$Matcher$_matcher_for$arity$2 = (function (this$,_){
var self__ = this;
var this$__$1 = this;
return this$__$1;
}));

(matcher_combinators.core.EqualsRecord.prototype.matcher_combinators$core$Matcher$_match$arity$2 = (function (this$,actual){
var self__ = this;
var this$__$1 = this;
var temp__5751__auto__ = matcher_combinators.core.validate_input.cljs$core$IFn$_invoke$arity$6(self__.expected,actual,cljs.core.record_QMARK_,cljs.core.map_QMARK_,this$__$1.matcher_combinators$core$Matcher$_base_name$arity$1(null),"record");
if(cljs.core.truth_(temp__5751__auto__)){
var issue = temp__5751__auto__;
return issue;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.type(self__.expected),cljs.core.type(actual))){
return matcher_combinators.core.match(matcher_combinators.core.__GT_EqualsMap(self__.expected),actual);
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109),new cljs.core.Keyword(null,"mismatch","mismatch",103313617),new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494),matcher_combinators.model.__GT_TypeMismatch(self__.expected,actual),new cljs.core.Keyword("matcher-combinators.result","weight","matcher-combinators.result/weight",837269218),(1)], null);
}
}
}));

(matcher_combinators.core.EqualsRecord.prototype.matcher_combinators$core$Matcher$_base_name$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Symbol(null,"equals","equals",1177497557,null);
}));

(matcher_combinators.core.EqualsRecord.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#matcher-combinators.core.EqualsRecord{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"expected","expected",1583670997),self__.expected],null))], null),self__.__extmap));
}));

(matcher_combinators.core.EqualsRecord.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__148152){
var self__ = this;
var G__148152__$1 = this;
return (new cljs.core.RecordIter((0),G__148152__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"expected","expected",1583670997)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(matcher_combinators.core.EqualsRecord.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(matcher_combinators.core.EqualsRecord.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new matcher_combinators.core.EqualsRecord(self__.expected,self__.__meta,self__.__extmap,self__.__hash));
}));

(matcher_combinators.core.EqualsRecord.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(matcher_combinators.core.EqualsRecord.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (coll__4469__auto__){
return (-2008141317 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
})(this__4468__auto____$1);
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(matcher_combinators.core.EqualsRecord.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this148154,other148155){
var self__ = this;
var this148154__$1 = this;
return (((!((other148155 == null)))) && ((((this148154__$1.constructor === other148155.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this148154__$1.expected,other148155.expected)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this148154__$1.__extmap,other148155.__extmap)))))));
}));

(matcher_combinators.core.EqualsRecord.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"expected","expected",1583670997),null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new matcher_combinators.core.EqualsRecord(self__.expected,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(matcher_combinators.core.EqualsRecord.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k148153){
var self__ = this;
var this__4479__auto____$1 = this;
var G__148181 = k148153;
var G__148181__$1 = (((G__148181 instanceof cljs.core.Keyword))?G__148181.fqn:null);
switch (G__148181__$1) {
case "expected":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k148153);

}
}));

(matcher_combinators.core.EqualsRecord.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__148152){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__148183 = cljs.core.keyword_identical_QMARK_;
var expr__148184 = k__4481__auto__;
if(cljs.core.truth_((pred__148183.cljs$core$IFn$_invoke$arity$2 ? pred__148183.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expected","expected",1583670997),expr__148184) : pred__148183.call(null,new cljs.core.Keyword(null,"expected","expected",1583670997),expr__148184)))){
return (new matcher_combinators.core.EqualsRecord(G__148152,self__.__meta,self__.__extmap,null));
} else {
return (new matcher_combinators.core.EqualsRecord(self__.expected,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__148152),null));
}
}));

(matcher_combinators.core.EqualsRecord.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"expected","expected",1583670997),self__.expected,null))], null),self__.__extmap));
}));

(matcher_combinators.core.EqualsRecord.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__148152){
var self__ = this;
var this__4471__auto____$1 = this;
return (new matcher_combinators.core.EqualsRecord(self__.expected,G__148152,self__.__extmap,self__.__hash));
}));

(matcher_combinators.core.EqualsRecord.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4478__auto__,(0)),cljs.core._nth(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(matcher_combinators.core.EqualsRecord.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expected","expected",-1070764772,null)], null);
}));

(matcher_combinators.core.EqualsRecord.cljs$lang$type = true);

(matcher_combinators.core.EqualsRecord.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"matcher-combinators.core/EqualsRecord",null,(1),null));
}));

(matcher_combinators.core.EqualsRecord.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"matcher-combinators.core/EqualsRecord");
}));

/**
 * Positional factory function for matcher-combinators.core/EqualsRecord.
 */
matcher_combinators.core.__GT_EqualsRecord = (function matcher_combinators$core$__GT_EqualsRecord(expected){
return (new matcher_combinators.core.EqualsRecord(expected,null,null,null));
});

/**
 * Factory function for matcher-combinators.core/EqualsRecord, taking a map of keywords to field values.
 */
matcher_combinators.core.map__GT_EqualsRecord = (function matcher_combinators$core$map__GT_EqualsRecord(G__148156){
var extmap__4512__auto__ = (function (){var G__148186 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__148156,new cljs.core.Keyword(null,"expected","expected",1583670997));
if(cljs.core.record_QMARK_(G__148156)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__148186);
} else {
return G__148186;
}
})();
return (new matcher_combinators.core.EqualsRecord(new cljs.core.Keyword(null,"expected","expected",1583670997).cljs$core$IFn$_invoke$arity$1(G__148156),null,cljs.core.not_empty(extmap__4512__auto__),null));
});

matcher_combinators.core.type_preserving_mismatch = (function matcher_combinators$core$type_preserving_mismatch(base_list,values){
var lst = cljs.core.into.cljs$core$IFn$_invoke$arity$2(base_list,values);
if(cljs.core.vector_QMARK_(base_list)){
return lst;
} else {
return cljs.core.reverse(lst);
}
});
matcher_combinators.core.unexpected_matcher = (function (){
if((typeof matcher_combinators !== 'undefined') && (typeof matcher_combinators.core !== 'undefined') && (typeof matcher_combinators.core.t_matcher_combinators$core148187 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {matcher_combinators.core.Matcher}
 * @implements {cljs.core.IWithMeta}
*/
matcher_combinators.core.t_matcher_combinators$core148187 = (function (meta148188){
this.meta148188 = meta148188;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(matcher_combinators.core.t_matcher_combinators$core148187.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_148189,meta148188__$1){
var self__ = this;
var _148189__$1 = this;
return (new matcher_combinators.core.t_matcher_combinators$core148187(meta148188__$1));
}));

(matcher_combinators.core.t_matcher_combinators$core148187.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_148189){
var self__ = this;
var _148189__$1 = this;
return self__.meta148188;
}));

(matcher_combinators.core.t_matcher_combinators$core148187.prototype.matcher_combinators$core$Matcher$ = cljs.core.PROTOCOL_SENTINEL);

(matcher_combinators.core.t_matcher_combinators$core148187.prototype.matcher_combinators$core$Matcher$_matcher_for$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1;
}));

(matcher_combinators.core.t_matcher_combinators$core148187.prototype.matcher_combinators$core$Matcher$_matcher_for$arity$2 = (function (this$,_){
var self__ = this;
var this$__$1 = this;
return this$__$1;
}));

(matcher_combinators.core.t_matcher_combinators$core148187.prototype.matcher_combinators$core$Matcher$_match$arity$2 = (function (_this,actual){
var self__ = this;
var _this__$1 = this;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109),new cljs.core.Keyword(null,"mismatch","mismatch",103313617),new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494),matcher_combinators.model.__GT_Unexpected(actual),new cljs.core.Keyword("matcher-combinators.result","weight","matcher-combinators.result/weight",837269218),(1)], null);
}));

(matcher_combinators.core.t_matcher_combinators$core148187.prototype.matcher_combinators$core$Matcher$_base_name$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Symbol(null,"unexpected","unexpected",502779103,null);
}));

(matcher_combinators.core.t_matcher_combinators$core148187.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta148188","meta148188",-183613843,null)], null);
}));

(matcher_combinators.core.t_matcher_combinators$core148187.cljs$lang$type = true);

(matcher_combinators.core.t_matcher_combinators$core148187.cljs$lang$ctorStr = "matcher-combinators.core/t_matcher_combinators$core148187");

(matcher_combinators.core.t_matcher_combinators$core148187.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"matcher-combinators.core/t_matcher_combinators$core148187");
}));

/**
 * Positional factory function for matcher-combinators.core/t_matcher_combinators$core148187.
 */
matcher_combinators.core.__GT_t_matcher_combinators$core148187 = (function matcher_combinators$core$__GT_t_matcher_combinators$core148187(meta148188){
return (new matcher_combinators.core.t_matcher_combinators$core148187(meta148188));
});

}

return (new matcher_combinators.core.t_matcher_combinators$core148187(cljs.core.PersistentArrayMap.EMPTY));
})()
;
/**
 * Modify the matchers and actuals sequences to match in length.
 *   When `matchers` is longer, add `missing` elements to `actuals`.
 *   When `actuals` is longer, add unexpected entry matchers to `matchers`.
 */
matcher_combinators.core.normalize_inputs_length = (function matcher_combinators$core$normalize_inputs_length(matchers,actuals){
var matchers_count = cljs.core.count(matchers);
var actuals_count = cljs.core.count(actuals);
if((actuals_count < matchers_count)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [matchers,cljs.core.take.cljs$core$IFn$_invoke$arity$2(matchers_count,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(actuals,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("matcher-combinators.core","missing","matcher-combinators.core/missing",-1284372822))))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.take.cljs$core$IFn$_invoke$arity$2(actuals_count,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(matchers,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(matcher_combinators.core.unexpected_matcher))),actuals], null);
}
});
matcher_combinators.core.sequence_match = (function matcher_combinators$core$sequence_match(expected,actual,subseq_QMARK_){
if((!(cljs.core.sequential_QMARK_(actual)))){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109),new cljs.core.Keyword(null,"mismatch","mismatch",103313617),new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494),matcher_combinators.model.__GT_Mismatch(expected,actual),new cljs.core.Keyword("matcher-combinators.result","weight","matcher-combinators.result/weight",837269218),(1)], null);
} else {
var vec__148207 = matcher_combinators.core.normalize_inputs_length(expected,actual);
var matchers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__148207,(0),null);
var actual_elems = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__148207,(1),null);
var match_results_SINGLEQUOTE_ = cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (matcher,actual_element){
return matcher_combinators.core.match(matcher,actual_element);
}),matchers,actual_elems);
var match_size = (cljs.core.truth_(subseq_QMARK_)?cljs.core.count(expected):(function (){var x__4306__auto__ = cljs.core.count(actual);
var y__4307__auto__ = cljs.core.count(expected);
return ((x__4306__auto__ > y__4307__auto__) ? x__4306__auto__ : y__4307__auto__);
})());
var match_results = cljs.core.take.cljs$core$IFn$_invoke$arity$2(match_size,match_results_SINGLEQUOTE_);
if(cljs.core.truth_(cljs.core.some(cljs.core.complement(matcher_combinators.core.indicates_match_QMARK_),match_results))){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109),new cljs.core.Keyword(null,"mismatch","mismatch",103313617),new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494),matcher_combinators.core.type_preserving_mismatch(cljs.core.empty(actual),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494),match_results)),new cljs.core.Keyword("matcher-combinators.result","weight","matcher-combinators.result/weight",837269218),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,(0),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("matcher-combinators.result","weight","matcher-combinators.result/weight",837269218),match_results))], null);
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109),new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494),actual,new cljs.core.Keyword("matcher-combinators.result","weight","matcher-combinators.result/weight",837269218),(0)], null);
}
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {matcher_combinators.core.Matcher}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
matcher_combinators.core.EqualsSeq = (function (expected,__meta,__extmap,__hash){
this.expected = expected;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(matcher_combinators.core.EqualsSeq.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(matcher_combinators.core.EqualsSeq.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k148226,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__148237 = k148226;
var G__148237__$1 = (((G__148237 instanceof cljs.core.Keyword))?G__148237.fqn:null);
switch (G__148237__$1) {
case "expected":
return self__.expected;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k148226,else__4475__auto__);

}
}));

(matcher_combinators.core.EqualsSeq.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__148238){
var vec__148239 = p__148238;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__148239,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__148239,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(matcher_combinators.core.EqualsSeq.prototype.matcher_combinators$core$Matcher$ = cljs.core.PROTOCOL_SENTINEL);

(matcher_combinators.core.EqualsSeq.prototype.matcher_combinators$core$Matcher$_matcher_for$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1;
}));

(matcher_combinators.core.EqualsSeq.prototype.matcher_combinators$core$Matcher$_matcher_for$arity$2 = (function (this$,_){
var self__ = this;
var this$__$1 = this;
return this$__$1;
}));

(matcher_combinators.core.EqualsSeq.prototype.matcher_combinators$core$Matcher$_match$arity$2 = (function (this$,actual){
var self__ = this;
var this$__$1 = this;
var temp__5751__auto__ = matcher_combinators.core.validate_input.cljs$core$IFn$_invoke$arity$5(self__.expected,actual,cljs.core.sequential_QMARK_,this$__$1.matcher_combinators$core$Matcher$_base_name$arity$1(null),"sequential");
if(cljs.core.truth_(temp__5751__auto__)){
var issue = temp__5751__auto__;
return issue;
} else {
return matcher_combinators.core.sequence_match(self__.expected,actual,false);
}
}));

(matcher_combinators.core.EqualsSeq.prototype.matcher_combinators$core$Matcher$_base_name$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Symbol(null,"equals","equals",1177497557,null);
}));

(matcher_combinators.core.EqualsSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#matcher-combinators.core.EqualsSeq{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"expected","expected",1583670997),self__.expected],null))], null),self__.__extmap));
}));

(matcher_combinators.core.EqualsSeq.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__148225){
var self__ = this;
var G__148225__$1 = this;
return (new cljs.core.RecordIter((0),G__148225__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"expected","expected",1583670997)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(matcher_combinators.core.EqualsSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(matcher_combinators.core.EqualsSeq.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new matcher_combinators.core.EqualsSeq(self__.expected,self__.__meta,self__.__extmap,self__.__hash));
}));

(matcher_combinators.core.EqualsSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(matcher_combinators.core.EqualsSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (coll__4469__auto__){
return (-1589650518 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
})(this__4468__auto____$1);
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(matcher_combinators.core.EqualsSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this148227,other148228){
var self__ = this;
var this148227__$1 = this;
return (((!((other148228 == null)))) && ((((this148227__$1.constructor === other148228.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this148227__$1.expected,other148228.expected)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this148227__$1.__extmap,other148228.__extmap)))))));
}));

(matcher_combinators.core.EqualsSeq.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"expected","expected",1583670997),null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new matcher_combinators.core.EqualsSeq(self__.expected,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(matcher_combinators.core.EqualsSeq.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k148226){
var self__ = this;
var this__4479__auto____$1 = this;
var G__148313 = k148226;
var G__148313__$1 = (((G__148313 instanceof cljs.core.Keyword))?G__148313.fqn:null);
switch (G__148313__$1) {
case "expected":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k148226);

}
}));

(matcher_combinators.core.EqualsSeq.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__148225){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__148328 = cljs.core.keyword_identical_QMARK_;
var expr__148329 = k__4481__auto__;
if(cljs.core.truth_((pred__148328.cljs$core$IFn$_invoke$arity$2 ? pred__148328.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expected","expected",1583670997),expr__148329) : pred__148328.call(null,new cljs.core.Keyword(null,"expected","expected",1583670997),expr__148329)))){
return (new matcher_combinators.core.EqualsSeq(G__148225,self__.__meta,self__.__extmap,null));
} else {
return (new matcher_combinators.core.EqualsSeq(self__.expected,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__148225),null));
}
}));

(matcher_combinators.core.EqualsSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"expected","expected",1583670997),self__.expected,null))], null),self__.__extmap));
}));

(matcher_combinators.core.EqualsSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__148225){
var self__ = this;
var this__4471__auto____$1 = this;
return (new matcher_combinators.core.EqualsSeq(self__.expected,G__148225,self__.__extmap,self__.__hash));
}));

(matcher_combinators.core.EqualsSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4478__auto__,(0)),cljs.core._nth(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(matcher_combinators.core.EqualsSeq.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expected","expected",-1070764772,null)], null);
}));

(matcher_combinators.core.EqualsSeq.cljs$lang$type = true);

(matcher_combinators.core.EqualsSeq.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"matcher-combinators.core/EqualsSeq",null,(1),null));
}));

(matcher_combinators.core.EqualsSeq.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"matcher-combinators.core/EqualsSeq");
}));

/**
 * Positional factory function for matcher-combinators.core/EqualsSeq.
 */
matcher_combinators.core.__GT_EqualsSeq = (function matcher_combinators$core$__GT_EqualsSeq(expected){
return (new matcher_combinators.core.EqualsSeq(expected,null,null,null));
});

/**
 * Factory function for matcher-combinators.core/EqualsSeq, taking a map of keywords to field values.
 */
matcher_combinators.core.map__GT_EqualsSeq = (function matcher_combinators$core$map__GT_EqualsSeq(G__148232){
var extmap__4512__auto__ = (function (){var G__148366 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__148232,new cljs.core.Keyword(null,"expected","expected",1583670997));
if(cljs.core.record_QMARK_(G__148232)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__148366);
} else {
return G__148366;
}
})();
return (new matcher_combinators.core.EqualsSeq(new cljs.core.Keyword(null,"expected","expected",1583670997).cljs$core$IFn$_invoke$arity$1(G__148232),null,cljs.core.not_empty(extmap__4512__auto__),null));
});

matcher_combinators.core.matched_successfully_QMARK_ = (function matcher_combinators$core$matched_successfully_QMARK_(unmatched,elements,subset_QMARK_){
var or__4223__auto__ = (function (){var and__4221__auto__ = subset_QMARK_;
if(cljs.core.truth_(and__4221__auto__)){
return cljs.core.empty_QMARK_(unmatched);
} else {
return and__4221__auto__;
}
})();
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return ((cljs.core.not(subset_QMARK_)) && (((cljs.core.empty_QMARK_(unmatched)) && (cljs.core.empty_QMARK_(elements)))));
}
});
matcher_combinators.core.residual_matching_weight = (function matcher_combinators$core$residual_matching_weight(matchers,elements){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (w,p__148429){
var map__148430 = p__148429;
var map__148430__$1 = cljs.core.__destructure_map(map__148430);
var weight = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__148430__$1,new cljs.core.Keyword("matcher-combinators.result","weight","matcher-combinators.result/weight",837269218));
return (w + weight);
}),(0),cljs.core.map.cljs$core$IFn$_invoke$arity$3(matcher_combinators.core.match,matchers,elements));
});
matcher_combinators.core.matches_in_any_order_QMARK_ = (function matcher_combinators$core$matches_in_any_order_QMARK_(unmatched,elements,subset_QMARK_,matching){
while(true){
if(((cljs.core.empty_QMARK_(unmatched)) || (cljs.core.empty_QMARK_(elements)))){
var matched_QMARK_ = matcher_combinators.core.matched_successfully_QMARK_(unmatched,elements,subset_QMARK_);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"matched?","matched?",-297965314),matched_QMARK_,new cljs.core.Keyword(null,"unmatched","unmatched",1628955483),unmatched,new cljs.core.Keyword(null,"weight","weight",-1262796205),(cljs.core.truth_(matched_QMARK_)?(0):matcher_combinators.core.residual_matching_weight(unmatched,elements)),new cljs.core.Keyword(null,"elements","elements",657646735),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,matching),elements),new cljs.core.Keyword(null,"matched","matched",-975207164),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,matching)], null);
} else {
var vec__148437 = unmatched;
var seq__148438 = cljs.core.seq(vec__148437);
var first__148439 = cljs.core.first(seq__148438);
var seq__148438__$1 = cljs.core.next(seq__148438);
var matcher = first__148439;
var unmatched_rest = seq__148438__$1;
var matching_elem = matcher_combinators.utils.find_first(((function (unmatched,elements,subset_QMARK_,matching,vec__148437,seq__148438,first__148439,seq__148438__$1,matcher,unmatched_rest){
return (function (p1__148433_SHARP_){
return matcher_combinators.core.indicates_match_QMARK_(matcher_combinators.core.match(matcher,p1__148433_SHARP_));
});})(unmatched,elements,subset_QMARK_,matching,vec__148437,seq__148438,first__148439,seq__148438__$1,matcher,unmatched_rest))
,elements);
if((matching_elem == null)){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"matched?","matched?",-297965314),false,new cljs.core.Keyword(null,"unmatched","unmatched",1628955483),unmatched,new cljs.core.Keyword(null,"weight","weight",-1262796205),matcher_combinators.core.residual_matching_weight(unmatched,elements),new cljs.core.Keyword(null,"elements","elements",657646735),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,matching),elements),new cljs.core.Keyword(null,"matched","matched",-975207164),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,matching)], null);
} else {
var G__148739 = unmatched_rest;
var G__148740 = matcher_combinators.utils.remove_first(((function (unmatched,elements,subset_QMARK_,matching,vec__148437,seq__148438,first__148439,seq__148438__$1,matcher,unmatched_rest,matching_elem){
return (function (p1__148434_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(matching_elem,p1__148434_SHARP_);
});})(unmatched,elements,subset_QMARK_,matching,vec__148437,seq__148438,first__148439,seq__148438__$1,matcher,unmatched_rest,matching_elem))
,elements);
var G__148741 = subset_QMARK_;
var G__148742 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(matching,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [matcher,matching_elem], null));
unmatched = G__148739;
elements = G__148740;
subset_QMARK_ = G__148741;
matching = G__148742;
continue;
}
}
break;
}
});
matcher_combinators.core.better_mismatch_QMARK_ = (function matcher_combinators$core$better_mismatch_QMARK_(best,candidate){
var best_matched = cljs.core.count(new cljs.core.Keyword(null,"matched","matched",-975207164).cljs$core$IFn$_invoke$arity$1(best));
var candidate_matched = cljs.core.count(new cljs.core.Keyword(null,"matched","matched",-975207164).cljs$core$IFn$_invoke$arity$1(candidate));
var candidate_weight = new cljs.core.Keyword(null,"weight","weight",-1262796205).cljs$core$IFn$_invoke$arity$1(candidate);
var best_weight = new cljs.core.Keyword(null,"weight","weight",-1262796205).cljs$core$IFn$_invoke$arity$1(best);
return (((candidate_matched >= best_matched)) && ((candidate_weight <= best_weight)));
});
matcher_combinators.core.matched_or_best_matchers = (function matcher_combinators$core$matched_or_best_matchers(elements,subset_QMARK_){
return (function (best,matchers){
var map__148467 = matcher_combinators.core.matches_in_any_order_QMARK_(matchers,elements,subset_QMARK_,cljs.core.PersistentVector.EMPTY);
var map__148467__$1 = cljs.core.__destructure_map(map__148467);
var result = map__148467__$1;
var matched_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__148467__$1,new cljs.core.Keyword(null,"matched?","matched?",-297965314));
if(cljs.core.truth_(matched_QMARK_)){
return cljs.core.reduced(new cljs.core.Keyword("matcher-combinators.core","match-found","matcher-combinators.core/match-found",-1178271107));
} else {
if(matcher_combinators.core.better_mismatch_QMARK_(best,result)){
return result;
} else {
return best;

}
}
});
});
matcher_combinators.core.match_all_permutations = (function matcher_combinators$core$match_all_permutations(expected,elements,subset_QMARK_){
var vec__148468 = (cljs.core.truth_(subset_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [expected,elements], null):matcher_combinators.core.normalize_inputs_length(expected,elements));
var matchers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__148468,(0),null);
var elements__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__148468,(1),null);
var matcher_perms = clojure.math.combinatorics.permutations(matchers);
var find_best_match = matcher_combinators.core.matched_or_best_matchers(elements__$1,subset_QMARK_);
var result = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(find_best_match,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"matched","matched",-975207164),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"weight","weight",-1262796205),Number.MAX_SAFE_INTEGER,new cljs.core.Keyword(null,"elements","elements",657646735),elements__$1,new cljs.core.Keyword(null,"unmatched","unmatched",1628955483),matchers], null),matcher_perms);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("matcher-combinators.core","match-found","matcher-combinators.core/match-found",-1178271107),result)){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109),new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494),elements__$1,new cljs.core.Keyword("matcher-combinators.result","weight","matcher-combinators.result/weight",837269218),(0)], null);
} else {
return matcher_combinators.core.match(matcher_combinators.core.__GT_EqualsSeq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"matched","matched",-975207164).cljs$core$IFn$_invoke$arity$1(result),new cljs.core.Keyword(null,"unmatched","unmatched",1628955483).cljs$core$IFn$_invoke$arity$1(result))),new cljs.core.Keyword(null,"elements","elements",657646735).cljs$core$IFn$_invoke$arity$1(result));
}
});
matcher_combinators.core.match_any_order = (function matcher_combinators$core$match_any_order(expected,actual,subset_QMARK_){
if((!(cljs.core.sequential_QMARK_(actual)))){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("result","type","result/type",-1647593047),new cljs.core.Keyword(null,"mismatch","mismatch",103313617),new cljs.core.Keyword("result","value","result/value",-628153460),matcher_combinators.model.__GT_Mismatch(expected,actual),new cljs.core.Keyword("result","weight","result/weight",-58361224),(1)], null);
} else {
return matcher_combinators.core.match_all_permutations(expected,actual,subset_QMARK_);
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {matcher_combinators.core.Matcher}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
matcher_combinators.core.InAnyOrder = (function (expected,__meta,__extmap,__hash){
this.expected = expected;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(matcher_combinators.core.InAnyOrder.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(matcher_combinators.core.InAnyOrder.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k148474,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__148487 = k148474;
var G__148487__$1 = (((G__148487 instanceof cljs.core.Keyword))?G__148487.fqn:null);
switch (G__148487__$1) {
case "expected":
return self__.expected;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k148474,else__4475__auto__);

}
}));

(matcher_combinators.core.InAnyOrder.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__148495){
var vec__148496 = p__148495;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__148496,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__148496,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(matcher_combinators.core.InAnyOrder.prototype.matcher_combinators$core$Matcher$ = cljs.core.PROTOCOL_SENTINEL);

(matcher_combinators.core.InAnyOrder.prototype.matcher_combinators$core$Matcher$_matcher_for$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1;
}));

(matcher_combinators.core.InAnyOrder.prototype.matcher_combinators$core$Matcher$_matcher_for$arity$2 = (function (this$,_){
var self__ = this;
var this$__$1 = this;
return this$__$1;
}));

(matcher_combinators.core.InAnyOrder.prototype.matcher_combinators$core$Matcher$_match$arity$2 = (function (this$,actual){
var self__ = this;
var this$__$1 = this;
var temp__5751__auto__ = matcher_combinators.core.validate_input.cljs$core$IFn$_invoke$arity$5(self__.expected,actual,cljs.core.sequential_QMARK_,this$__$1.matcher_combinators$core$Matcher$_base_name$arity$1(null),"sequential");
if(cljs.core.truth_(temp__5751__auto__)){
var issue = temp__5751__auto__;
return issue;
} else {
return matcher_combinators.core.match_any_order(self__.expected,actual,false);
}
}));

(matcher_combinators.core.InAnyOrder.prototype.matcher_combinators$core$Matcher$_base_name$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Symbol(null,"in-any-order","in-any-order",888700077,null);
}));

(matcher_combinators.core.InAnyOrder.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#matcher-combinators.core.InAnyOrder{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"expected","expected",1583670997),self__.expected],null))], null),self__.__extmap));
}));

(matcher_combinators.core.InAnyOrder.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__148473){
var self__ = this;
var G__148473__$1 = this;
return (new cljs.core.RecordIter((0),G__148473__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"expected","expected",1583670997)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(matcher_combinators.core.InAnyOrder.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(matcher_combinators.core.InAnyOrder.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new matcher_combinators.core.InAnyOrder(self__.expected,self__.__meta,self__.__extmap,self__.__hash));
}));

(matcher_combinators.core.InAnyOrder.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(matcher_combinators.core.InAnyOrder.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (coll__4469__auto__){
return (-1380668355 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
})(this__4468__auto____$1);
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(matcher_combinators.core.InAnyOrder.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this148475,other148476){
var self__ = this;
var this148475__$1 = this;
return (((!((other148476 == null)))) && ((((this148475__$1.constructor === other148476.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this148475__$1.expected,other148476.expected)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this148475__$1.__extmap,other148476.__extmap)))))));
}));

(matcher_combinators.core.InAnyOrder.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"expected","expected",1583670997),null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new matcher_combinators.core.InAnyOrder(self__.expected,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(matcher_combinators.core.InAnyOrder.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k148474){
var self__ = this;
var this__4479__auto____$1 = this;
var G__148522 = k148474;
var G__148522__$1 = (((G__148522 instanceof cljs.core.Keyword))?G__148522.fqn:null);
switch (G__148522__$1) {
case "expected":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k148474);

}
}));

(matcher_combinators.core.InAnyOrder.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__148473){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__148524 = cljs.core.keyword_identical_QMARK_;
var expr__148525 = k__4481__auto__;
if(cljs.core.truth_((pred__148524.cljs$core$IFn$_invoke$arity$2 ? pred__148524.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expected","expected",1583670997),expr__148525) : pred__148524.call(null,new cljs.core.Keyword(null,"expected","expected",1583670997),expr__148525)))){
return (new matcher_combinators.core.InAnyOrder(G__148473,self__.__meta,self__.__extmap,null));
} else {
return (new matcher_combinators.core.InAnyOrder(self__.expected,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__148473),null));
}
}));

(matcher_combinators.core.InAnyOrder.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"expected","expected",1583670997),self__.expected,null))], null),self__.__extmap));
}));

(matcher_combinators.core.InAnyOrder.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__148473){
var self__ = this;
var this__4471__auto____$1 = this;
return (new matcher_combinators.core.InAnyOrder(self__.expected,G__148473,self__.__extmap,self__.__hash));
}));

(matcher_combinators.core.InAnyOrder.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4478__auto__,(0)),cljs.core._nth(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(matcher_combinators.core.InAnyOrder.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expected","expected",-1070764772,null)], null);
}));

(matcher_combinators.core.InAnyOrder.cljs$lang$type = true);

(matcher_combinators.core.InAnyOrder.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"matcher-combinators.core/InAnyOrder",null,(1),null));
}));

(matcher_combinators.core.InAnyOrder.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"matcher-combinators.core/InAnyOrder");
}));

/**
 * Positional factory function for matcher-combinators.core/InAnyOrder.
 */
matcher_combinators.core.__GT_InAnyOrder = (function matcher_combinators$core$__GT_InAnyOrder(expected){
return (new matcher_combinators.core.InAnyOrder(expected,null,null,null));
});

/**
 * Factory function for matcher-combinators.core/InAnyOrder, taking a map of keywords to field values.
 */
matcher_combinators.core.map__GT_InAnyOrder = (function matcher_combinators$core$map__GT_InAnyOrder(G__148477){
var extmap__4512__auto__ = (function (){var G__148527 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__148477,new cljs.core.Keyword(null,"expected","expected",1583670997));
if(cljs.core.record_QMARK_(G__148477)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__148527);
} else {
return G__148527;
}
})();
return (new matcher_combinators.core.InAnyOrder(new cljs.core.Keyword(null,"expected","expected",1583670997).cljs$core$IFn$_invoke$arity$1(G__148477),null,cljs.core.not_empty(extmap__4512__auto__),null));
});

/**
 * Clojure's set functions expect clojure.lang.IPersistentSet, but
 *   matching works just fine with java.util.Set as well.
 */
matcher_combinators.core.matchable_set_QMARK_ = (function matcher_combinators$core$matchable_set_QMARK_(s){
return cljs.core.set_QMARK_(s);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {matcher_combinators.core.Matcher}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
matcher_combinators.core.SetEquals = (function (expected,accept_seq_QMARK_,__meta,__extmap,__hash){
this.expected = expected;
this.accept_seq_QMARK_ = accept_seq_QMARK_;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(matcher_combinators.core.SetEquals.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(matcher_combinators.core.SetEquals.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k148532,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__148538 = k148532;
var G__148538__$1 = (((G__148538 instanceof cljs.core.Keyword))?G__148538.fqn:null);
switch (G__148538__$1) {
case "expected":
return self__.expected;

break;
case "accept-seq?":
return self__.accept_seq_QMARK_;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k148532,else__4475__auto__);

}
}));

(matcher_combinators.core.SetEquals.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__148541){
var vec__148542 = p__148541;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__148542,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__148542,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(matcher_combinators.core.SetEquals.prototype.matcher_combinators$core$Matcher$ = cljs.core.PROTOCOL_SENTINEL);

(matcher_combinators.core.SetEquals.prototype.matcher_combinators$core$Matcher$_matcher_for$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1;
}));

(matcher_combinators.core.SetEquals.prototype.matcher_combinators$core$Matcher$_matcher_for$arity$2 = (function (this$,_){
var self__ = this;
var this$__$1 = this;
return this$__$1;
}));

(matcher_combinators.core.SetEquals.prototype.matcher_combinators$core$Matcher$_match$arity$2 = (function (this$,actual){
var self__ = this;
var this$__$1 = this;
var temp__5751__auto__ = (cljs.core.truth_(self__.accept_seq_QMARK_)?matcher_combinators.core.validate_input.cljs$core$IFn$_invoke$arity$6(self__.expected,actual,(function (p1__148530_SHARP_){
return ((matcher_combinators.core.matchable_set_QMARK_(p1__148530_SHARP_)) || (cljs.core.sequential_QMARK_(p1__148530_SHARP_)));
}),matcher_combinators.core.matchable_set_QMARK_,this$__$1.matcher_combinators$core$Matcher$_base_name$arity$1(null),"set or sequential"):matcher_combinators.core.validate_input.cljs$core$IFn$_invoke$arity$5(self__.expected,actual,matcher_combinators.core.matchable_set_QMARK_,this$__$1.matcher_combinators$core$Matcher$_base_name$arity$1(null),"set"));
if(cljs.core.truth_(temp__5751__auto__)){
var issue = temp__5751__auto__;
return issue;
} else {
var map__148546 = matcher_combinators.core.match_any_order(cljs.core.vec(self__.expected),cljs.core.vec(actual),false);
var map__148546__$1 = cljs.core.__destructure_map(map__148546);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__148546__$1,new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__148546__$1,new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494));
var weight = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__148546__$1,new cljs.core.Keyword("matcher-combinators.result","weight","matcher-combinators.result/weight",837269218));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109),type,new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494),cljs.core.set(value),new cljs.core.Keyword("matcher-combinators.result","weight","matcher-combinators.result/weight",837269218),weight], null);
}
}));

(matcher_combinators.core.SetEquals.prototype.matcher_combinators$core$Matcher$_base_name$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.accept_seq_QMARK_)){
return new cljs.core.Symbol(null,"set-equals","set-equals",931472212,null);
} else {
return new cljs.core.Symbol(null,"equals","equals",1177497557,null);
}
}));

(matcher_combinators.core.SetEquals.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#matcher-combinators.core.SetEquals{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"expected","expected",1583670997),self__.expected],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"accept-seq?","accept-seq?",1979939591),self__.accept_seq_QMARK_],null))], null),self__.__extmap));
}));

(matcher_combinators.core.SetEquals.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__148531){
var self__ = this;
var G__148531__$1 = this;
return (new cljs.core.RecordIter((0),G__148531__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"accept-seq?","accept-seq?",1979939591)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(matcher_combinators.core.SetEquals.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(matcher_combinators.core.SetEquals.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new matcher_combinators.core.SetEquals(self__.expected,self__.accept_seq_QMARK_,self__.__meta,self__.__extmap,self__.__hash));
}));

(matcher_combinators.core.SetEquals.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(matcher_combinators.core.SetEquals.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (coll__4469__auto__){
return (267412764 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
})(this__4468__auto____$1);
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(matcher_combinators.core.SetEquals.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this148533,other148534){
var self__ = this;
var this148533__$1 = this;
return (((!((other148534 == null)))) && ((((this148533__$1.constructor === other148534.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this148533__$1.expected,other148534.expected)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this148533__$1.accept_seq_QMARK_,other148534.accept_seq_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this148533__$1.__extmap,other148534.__extmap)))))))));
}));

(matcher_combinators.core.SetEquals.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"accept-seq?","accept-seq?",1979939591),null,new cljs.core.Keyword(null,"expected","expected",1583670997),null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new matcher_combinators.core.SetEquals(self__.expected,self__.accept_seq_QMARK_,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(matcher_combinators.core.SetEquals.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k148532){
var self__ = this;
var this__4479__auto____$1 = this;
var G__148548 = k148532;
var G__148548__$1 = (((G__148548 instanceof cljs.core.Keyword))?G__148548.fqn:null);
switch (G__148548__$1) {
case "expected":
case "accept-seq?":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k148532);

}
}));

(matcher_combinators.core.SetEquals.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__148531){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__148549 = cljs.core.keyword_identical_QMARK_;
var expr__148550 = k__4481__auto__;
if(cljs.core.truth_((pred__148549.cljs$core$IFn$_invoke$arity$2 ? pred__148549.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expected","expected",1583670997),expr__148550) : pred__148549.call(null,new cljs.core.Keyword(null,"expected","expected",1583670997),expr__148550)))){
return (new matcher_combinators.core.SetEquals(G__148531,self__.accept_seq_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__148549.cljs$core$IFn$_invoke$arity$2 ? pred__148549.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"accept-seq?","accept-seq?",1979939591),expr__148550) : pred__148549.call(null,new cljs.core.Keyword(null,"accept-seq?","accept-seq?",1979939591),expr__148550)))){
return (new matcher_combinators.core.SetEquals(self__.expected,G__148531,self__.__meta,self__.__extmap,null));
} else {
return (new matcher_combinators.core.SetEquals(self__.expected,self__.accept_seq_QMARK_,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__148531),null));
}
}
}));

(matcher_combinators.core.SetEquals.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"expected","expected",1583670997),self__.expected,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"accept-seq?","accept-seq?",1979939591),self__.accept_seq_QMARK_,null))], null),self__.__extmap));
}));

(matcher_combinators.core.SetEquals.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__148531){
var self__ = this;
var this__4471__auto____$1 = this;
return (new matcher_combinators.core.SetEquals(self__.expected,self__.accept_seq_QMARK_,G__148531,self__.__extmap,self__.__hash));
}));

(matcher_combinators.core.SetEquals.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4478__auto__,(0)),cljs.core._nth(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(matcher_combinators.core.SetEquals.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expected","expected",-1070764772,null),new cljs.core.Symbol(null,"accept-seq?","accept-seq?",-674496178,null)], null);
}));

(matcher_combinators.core.SetEquals.cljs$lang$type = true);

(matcher_combinators.core.SetEquals.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"matcher-combinators.core/SetEquals",null,(1),null));
}));

(matcher_combinators.core.SetEquals.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"matcher-combinators.core/SetEquals");
}));

/**
 * Positional factory function for matcher-combinators.core/SetEquals.
 */
matcher_combinators.core.__GT_SetEquals = (function matcher_combinators$core$__GT_SetEquals(expected,accept_seq_QMARK_){
return (new matcher_combinators.core.SetEquals(expected,accept_seq_QMARK_,null,null,null));
});

/**
 * Factory function for matcher-combinators.core/SetEquals, taking a map of keywords to field values.
 */
matcher_combinators.core.map__GT_SetEquals = (function matcher_combinators$core$map__GT_SetEquals(G__148535){
var extmap__4512__auto__ = (function (){var G__148557 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__148535,new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"accept-seq?","accept-seq?",1979939591)], 0));
if(cljs.core.record_QMARK_(G__148535)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__148557);
} else {
return G__148557;
}
})();
return (new matcher_combinators.core.SetEquals(new cljs.core.Keyword(null,"expected","expected",1583670997).cljs$core$IFn$_invoke$arity$1(G__148535),new cljs.core.Keyword(null,"accept-seq?","accept-seq?",1979939591).cljs$core$IFn$_invoke$arity$1(G__148535),null,cljs.core.not_empty(extmap__4512__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {matcher_combinators.core.Matcher}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
matcher_combinators.core.Prefix = (function (expected,__meta,__extmap,__hash){
this.expected = expected;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(matcher_combinators.core.Prefix.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(matcher_combinators.core.Prefix.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k148559,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__148563 = k148559;
var G__148563__$1 = (((G__148563 instanceof cljs.core.Keyword))?G__148563.fqn:null);
switch (G__148563__$1) {
case "expected":
return self__.expected;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k148559,else__4475__auto__);

}
}));

(matcher_combinators.core.Prefix.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__148564){
var vec__148565 = p__148564;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__148565,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__148565,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(matcher_combinators.core.Prefix.prototype.matcher_combinators$core$Matcher$ = cljs.core.PROTOCOL_SENTINEL);

(matcher_combinators.core.Prefix.prototype.matcher_combinators$core$Matcher$_matcher_for$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1;
}));

(matcher_combinators.core.Prefix.prototype.matcher_combinators$core$Matcher$_matcher_for$arity$2 = (function (this$,_){
var self__ = this;
var this$__$1 = this;
return this$__$1;
}));

(matcher_combinators.core.Prefix.prototype.matcher_combinators$core$Matcher$_match$arity$2 = (function (this$,actual){
var self__ = this;
var this$__$1 = this;
var temp__5751__auto__ = matcher_combinators.core.validate_input.cljs$core$IFn$_invoke$arity$5(self__.expected,actual,cljs.core.sequential_QMARK_,this$__$1.matcher_combinators$core$Matcher$_base_name$arity$1(null),"sequential");
if(cljs.core.truth_(temp__5751__auto__)){
var issue = temp__5751__auto__;
return issue;
} else {
return matcher_combinators.core.sequence_match(self__.expected,actual,true);
}
}));

(matcher_combinators.core.Prefix.prototype.matcher_combinators$core$Matcher$_base_name$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Symbol(null,"prefix","prefix",1374623062,null);
}));

(matcher_combinators.core.Prefix.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#matcher-combinators.core.Prefix{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"expected","expected",1583670997),self__.expected],null))], null),self__.__extmap));
}));

(matcher_combinators.core.Prefix.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__148558){
var self__ = this;
var G__148558__$1 = this;
return (new cljs.core.RecordIter((0),G__148558__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"expected","expected",1583670997)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(matcher_combinators.core.Prefix.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(matcher_combinators.core.Prefix.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new matcher_combinators.core.Prefix(self__.expected,self__.__meta,self__.__extmap,self__.__hash));
}));

(matcher_combinators.core.Prefix.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(matcher_combinators.core.Prefix.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (coll__4469__auto__){
return (1645561750 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
})(this__4468__auto____$1);
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(matcher_combinators.core.Prefix.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this148560,other148561){
var self__ = this;
var this148560__$1 = this;
return (((!((other148561 == null)))) && ((((this148560__$1.constructor === other148561.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this148560__$1.expected,other148561.expected)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this148560__$1.__extmap,other148561.__extmap)))))));
}));

(matcher_combinators.core.Prefix.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"expected","expected",1583670997),null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new matcher_combinators.core.Prefix(self__.expected,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(matcher_combinators.core.Prefix.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k148559){
var self__ = this;
var this__4479__auto____$1 = this;
var G__148568 = k148559;
var G__148568__$1 = (((G__148568 instanceof cljs.core.Keyword))?G__148568.fqn:null);
switch (G__148568__$1) {
case "expected":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k148559);

}
}));

(matcher_combinators.core.Prefix.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__148558){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__148569 = cljs.core.keyword_identical_QMARK_;
var expr__148570 = k__4481__auto__;
if(cljs.core.truth_((pred__148569.cljs$core$IFn$_invoke$arity$2 ? pred__148569.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expected","expected",1583670997),expr__148570) : pred__148569.call(null,new cljs.core.Keyword(null,"expected","expected",1583670997),expr__148570)))){
return (new matcher_combinators.core.Prefix(G__148558,self__.__meta,self__.__extmap,null));
} else {
return (new matcher_combinators.core.Prefix(self__.expected,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__148558),null));
}
}));

(matcher_combinators.core.Prefix.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"expected","expected",1583670997),self__.expected,null))], null),self__.__extmap));
}));

(matcher_combinators.core.Prefix.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__148558){
var self__ = this;
var this__4471__auto____$1 = this;
return (new matcher_combinators.core.Prefix(self__.expected,G__148558,self__.__extmap,self__.__hash));
}));

(matcher_combinators.core.Prefix.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4478__auto__,(0)),cljs.core._nth(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(matcher_combinators.core.Prefix.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expected","expected",-1070764772,null)], null);
}));

(matcher_combinators.core.Prefix.cljs$lang$type = true);

(matcher_combinators.core.Prefix.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"matcher-combinators.core/Prefix",null,(1),null));
}));

(matcher_combinators.core.Prefix.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"matcher-combinators.core/Prefix");
}));

/**
 * Positional factory function for matcher-combinators.core/Prefix.
 */
matcher_combinators.core.__GT_Prefix = (function matcher_combinators$core$__GT_Prefix(expected){
return (new matcher_combinators.core.Prefix(expected,null,null,null));
});

/**
 * Factory function for matcher-combinators.core/Prefix, taking a map of keywords to field values.
 */
matcher_combinators.core.map__GT_Prefix = (function matcher_combinators$core$map__GT_Prefix(G__148562){
var extmap__4512__auto__ = (function (){var G__148582 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__148562,new cljs.core.Keyword(null,"expected","expected",1583670997));
if(cljs.core.record_QMARK_(G__148562)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__148582);
} else {
return G__148582;
}
})();
return (new matcher_combinators.core.Prefix(new cljs.core.Keyword(null,"expected","expected",1583670997).cljs$core$IFn$_invoke$arity$1(G__148562),null,cljs.core.not_empty(extmap__4512__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {matcher_combinators.core.Matcher}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
matcher_combinators.core.EmbedsSeq = (function (expected,__meta,__extmap,__hash){
this.expected = expected;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(matcher_combinators.core.EmbedsSeq.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(matcher_combinators.core.EmbedsSeq.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k148584,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__148589 = k148584;
var G__148589__$1 = (((G__148589 instanceof cljs.core.Keyword))?G__148589.fqn:null);
switch (G__148589__$1) {
case "expected":
return self__.expected;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k148584,else__4475__auto__);

}
}));

(matcher_combinators.core.EmbedsSeq.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__148590){
var vec__148591 = p__148590;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__148591,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__148591,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(matcher_combinators.core.EmbedsSeq.prototype.matcher_combinators$core$Matcher$ = cljs.core.PROTOCOL_SENTINEL);

(matcher_combinators.core.EmbedsSeq.prototype.matcher_combinators$core$Matcher$_matcher_for$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1;
}));

(matcher_combinators.core.EmbedsSeq.prototype.matcher_combinators$core$Matcher$_matcher_for$arity$2 = (function (this$,_){
var self__ = this;
var this$__$1 = this;
return this$__$1;
}));

(matcher_combinators.core.EmbedsSeq.prototype.matcher_combinators$core$Matcher$_match$arity$2 = (function (this$,actual){
var self__ = this;
var this$__$1 = this;
var temp__5751__auto__ = matcher_combinators.core.validate_input.cljs$core$IFn$_invoke$arity$5(self__.expected,actual,cljs.core.sequential_QMARK_,this$__$1.matcher_combinators$core$Matcher$_base_name$arity$1(null),"sequential");
if(cljs.core.truth_(temp__5751__auto__)){
var issue = temp__5751__auto__;
return issue;
} else {
return matcher_combinators.core.match_any_order(self__.expected,actual,true);
}
}));

(matcher_combinators.core.EmbedsSeq.prototype.matcher_combinators$core$Matcher$_base_name$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Symbol(null,"embeds","embeds",-1821086689,null);
}));

(matcher_combinators.core.EmbedsSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#matcher-combinators.core.EmbedsSeq{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"expected","expected",1583670997),self__.expected],null))], null),self__.__extmap));
}));

(matcher_combinators.core.EmbedsSeq.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__148583){
var self__ = this;
var G__148583__$1 = this;
return (new cljs.core.RecordIter((0),G__148583__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"expected","expected",1583670997)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(matcher_combinators.core.EmbedsSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(matcher_combinators.core.EmbedsSeq.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new matcher_combinators.core.EmbedsSeq(self__.expected,self__.__meta,self__.__extmap,self__.__hash));
}));

(matcher_combinators.core.EmbedsSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(matcher_combinators.core.EmbedsSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (coll__4469__auto__){
return (1571834464 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
})(this__4468__auto____$1);
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(matcher_combinators.core.EmbedsSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this148585,other148586){
var self__ = this;
var this148585__$1 = this;
return (((!((other148586 == null)))) && ((((this148585__$1.constructor === other148586.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this148585__$1.expected,other148586.expected)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this148585__$1.__extmap,other148586.__extmap)))))));
}));

(matcher_combinators.core.EmbedsSeq.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"expected","expected",1583670997),null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new matcher_combinators.core.EmbedsSeq(self__.expected,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(matcher_combinators.core.EmbedsSeq.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k148584){
var self__ = this;
var this__4479__auto____$1 = this;
var G__148595 = k148584;
var G__148595__$1 = (((G__148595 instanceof cljs.core.Keyword))?G__148595.fqn:null);
switch (G__148595__$1) {
case "expected":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k148584);

}
}));

(matcher_combinators.core.EmbedsSeq.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__148583){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__148596 = cljs.core.keyword_identical_QMARK_;
var expr__148597 = k__4481__auto__;
if(cljs.core.truth_((pred__148596.cljs$core$IFn$_invoke$arity$2 ? pred__148596.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expected","expected",1583670997),expr__148597) : pred__148596.call(null,new cljs.core.Keyword(null,"expected","expected",1583670997),expr__148597)))){
return (new matcher_combinators.core.EmbedsSeq(G__148583,self__.__meta,self__.__extmap,null));
} else {
return (new matcher_combinators.core.EmbedsSeq(self__.expected,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__148583),null));
}
}));

(matcher_combinators.core.EmbedsSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"expected","expected",1583670997),self__.expected,null))], null),self__.__extmap));
}));

(matcher_combinators.core.EmbedsSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__148583){
var self__ = this;
var this__4471__auto____$1 = this;
return (new matcher_combinators.core.EmbedsSeq(self__.expected,G__148583,self__.__extmap,self__.__hash));
}));

(matcher_combinators.core.EmbedsSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4478__auto__,(0)),cljs.core._nth(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(matcher_combinators.core.EmbedsSeq.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expected","expected",-1070764772,null)], null);
}));

(matcher_combinators.core.EmbedsSeq.cljs$lang$type = true);

(matcher_combinators.core.EmbedsSeq.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"matcher-combinators.core/EmbedsSeq",null,(1),null));
}));

(matcher_combinators.core.EmbedsSeq.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"matcher-combinators.core/EmbedsSeq");
}));

/**
 * Positional factory function for matcher-combinators.core/EmbedsSeq.
 */
matcher_combinators.core.__GT_EmbedsSeq = (function matcher_combinators$core$__GT_EmbedsSeq(expected){
return (new matcher_combinators.core.EmbedsSeq(expected,null,null,null));
});

/**
 * Factory function for matcher-combinators.core/EmbedsSeq, taking a map of keywords to field values.
 */
matcher_combinators.core.map__GT_EmbedsSeq = (function matcher_combinators$core$map__GT_EmbedsSeq(G__148587){
var extmap__4512__auto__ = (function (){var G__148599 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__148587,new cljs.core.Keyword(null,"expected","expected",1583670997));
if(cljs.core.record_QMARK_(G__148587)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__148599);
} else {
return G__148599;
}
})();
return (new matcher_combinators.core.EmbedsSeq(new cljs.core.Keyword(null,"expected","expected",1583670997).cljs$core$IFn$_invoke$arity$1(G__148587),null,cljs.core.not_empty(extmap__4512__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {matcher_combinators.core.Matcher}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
matcher_combinators.core.SetEmbeds = (function (expected,accept_seq_QMARK_,__meta,__extmap,__hash){
this.expected = expected;
this.accept_seq_QMARK_ = accept_seq_QMARK_;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(matcher_combinators.core.SetEmbeds.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(matcher_combinators.core.SetEmbeds.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k148602,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__148607 = k148602;
var G__148607__$1 = (((G__148607 instanceof cljs.core.Keyword))?G__148607.fqn:null);
switch (G__148607__$1) {
case "expected":
return self__.expected;

break;
case "accept-seq?":
return self__.accept_seq_QMARK_;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k148602,else__4475__auto__);

}
}));

(matcher_combinators.core.SetEmbeds.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__148608){
var vec__148609 = p__148608;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__148609,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__148609,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(matcher_combinators.core.SetEmbeds.prototype.matcher_combinators$core$Matcher$ = cljs.core.PROTOCOL_SENTINEL);

(matcher_combinators.core.SetEmbeds.prototype.matcher_combinators$core$Matcher$_matcher_for$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1;
}));

(matcher_combinators.core.SetEmbeds.prototype.matcher_combinators$core$Matcher$_matcher_for$arity$2 = (function (this$,_){
var self__ = this;
var this$__$1 = this;
return this$__$1;
}));

(matcher_combinators.core.SetEmbeds.prototype.matcher_combinators$core$Matcher$_match$arity$2 = (function (this$,actual){
var self__ = this;
var this$__$1 = this;
var temp__5751__auto__ = (cljs.core.truth_(self__.accept_seq_QMARK_)?matcher_combinators.core.validate_input.cljs$core$IFn$_invoke$arity$6(self__.expected,actual,(function (p1__148600_SHARP_){
return ((matcher_combinators.core.matchable_set_QMARK_(p1__148600_SHARP_)) || (cljs.core.sequential_QMARK_(p1__148600_SHARP_)));
}),matcher_combinators.core.matchable_set_QMARK_,this$__$1.matcher_combinators$core$Matcher$_base_name$arity$1(null),"set or sequential"):matcher_combinators.core.validate_input.cljs$core$IFn$_invoke$arity$5(self__.expected,actual,matcher_combinators.core.matchable_set_QMARK_,this$__$1.matcher_combinators$core$Matcher$_base_name$arity$1(null),"set"));
if(cljs.core.truth_(temp__5751__auto__)){
var issue = temp__5751__auto__;
return issue;
} else {
var map__148612 = matcher_combinators.core.match_any_order(cljs.core.vec(self__.expected),cljs.core.vec(actual),true);
var map__148612__$1 = cljs.core.__destructure_map(map__148612);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__148612__$1,new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__148612__$1,new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494));
var weight = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__148612__$1,new cljs.core.Keyword("matcher-combinators.result","weight","matcher-combinators.result/weight",837269218));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109),type,new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494),cljs.core.set(value),new cljs.core.Keyword("matcher-combinators.result","weight","matcher-combinators.result/weight",837269218),weight], null);
}
}));

(matcher_combinators.core.SetEmbeds.prototype.matcher_combinators$core$Matcher$_base_name$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.accept_seq_QMARK_)){
return new cljs.core.Symbol(null,"set-embeds","set-embeds",305166844,null);
} else {
return new cljs.core.Symbol(null,"embeds","embeds",-1821086689,null);
}
}));

(matcher_combinators.core.SetEmbeds.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#matcher-combinators.core.SetEmbeds{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"expected","expected",1583670997),self__.expected],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"accept-seq?","accept-seq?",1979939591),self__.accept_seq_QMARK_],null))], null),self__.__extmap));
}));

(matcher_combinators.core.SetEmbeds.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__148601){
var self__ = this;
var G__148601__$1 = this;
return (new cljs.core.RecordIter((0),G__148601__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"accept-seq?","accept-seq?",1979939591)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(matcher_combinators.core.SetEmbeds.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(matcher_combinators.core.SetEmbeds.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new matcher_combinators.core.SetEmbeds(self__.expected,self__.accept_seq_QMARK_,self__.__meta,self__.__extmap,self__.__hash));
}));

(matcher_combinators.core.SetEmbeds.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(matcher_combinators.core.SetEmbeds.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (coll__4469__auto__){
return (-2047205076 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
})(this__4468__auto____$1);
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(matcher_combinators.core.SetEmbeds.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this148603,other148604){
var self__ = this;
var this148603__$1 = this;
return (((!((other148604 == null)))) && ((((this148603__$1.constructor === other148604.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this148603__$1.expected,other148604.expected)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this148603__$1.accept_seq_QMARK_,other148604.accept_seq_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this148603__$1.__extmap,other148604.__extmap)))))))));
}));

(matcher_combinators.core.SetEmbeds.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"accept-seq?","accept-seq?",1979939591),null,new cljs.core.Keyword(null,"expected","expected",1583670997),null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new matcher_combinators.core.SetEmbeds(self__.expected,self__.accept_seq_QMARK_,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(matcher_combinators.core.SetEmbeds.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k148602){
var self__ = this;
var this__4479__auto____$1 = this;
var G__148613 = k148602;
var G__148613__$1 = (((G__148613 instanceof cljs.core.Keyword))?G__148613.fqn:null);
switch (G__148613__$1) {
case "expected":
case "accept-seq?":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k148602);

}
}));

(matcher_combinators.core.SetEmbeds.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__148601){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__148622 = cljs.core.keyword_identical_QMARK_;
var expr__148623 = k__4481__auto__;
if(cljs.core.truth_((pred__148622.cljs$core$IFn$_invoke$arity$2 ? pred__148622.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expected","expected",1583670997),expr__148623) : pred__148622.call(null,new cljs.core.Keyword(null,"expected","expected",1583670997),expr__148623)))){
return (new matcher_combinators.core.SetEmbeds(G__148601,self__.accept_seq_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__148622.cljs$core$IFn$_invoke$arity$2 ? pred__148622.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"accept-seq?","accept-seq?",1979939591),expr__148623) : pred__148622.call(null,new cljs.core.Keyword(null,"accept-seq?","accept-seq?",1979939591),expr__148623)))){
return (new matcher_combinators.core.SetEmbeds(self__.expected,G__148601,self__.__meta,self__.__extmap,null));
} else {
return (new matcher_combinators.core.SetEmbeds(self__.expected,self__.accept_seq_QMARK_,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__148601),null));
}
}
}));

(matcher_combinators.core.SetEmbeds.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"expected","expected",1583670997),self__.expected,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"accept-seq?","accept-seq?",1979939591),self__.accept_seq_QMARK_,null))], null),self__.__extmap));
}));

(matcher_combinators.core.SetEmbeds.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__148601){
var self__ = this;
var this__4471__auto____$1 = this;
return (new matcher_combinators.core.SetEmbeds(self__.expected,self__.accept_seq_QMARK_,G__148601,self__.__extmap,self__.__hash));
}));

(matcher_combinators.core.SetEmbeds.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4478__auto__,(0)),cljs.core._nth(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(matcher_combinators.core.SetEmbeds.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expected","expected",-1070764772,null),new cljs.core.Symbol(null,"accept-seq?","accept-seq?",-674496178,null)], null);
}));

(matcher_combinators.core.SetEmbeds.cljs$lang$type = true);

(matcher_combinators.core.SetEmbeds.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"matcher-combinators.core/SetEmbeds",null,(1),null));
}));

(matcher_combinators.core.SetEmbeds.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"matcher-combinators.core/SetEmbeds");
}));

/**
 * Positional factory function for matcher-combinators.core/SetEmbeds.
 */
matcher_combinators.core.__GT_SetEmbeds = (function matcher_combinators$core$__GT_SetEmbeds(expected,accept_seq_QMARK_){
return (new matcher_combinators.core.SetEmbeds(expected,accept_seq_QMARK_,null,null,null));
});

/**
 * Factory function for matcher-combinators.core/SetEmbeds, taking a map of keywords to field values.
 */
matcher_combinators.core.map__GT_SetEmbeds = (function matcher_combinators$core$map__GT_SetEmbeds(G__148605){
var extmap__4512__auto__ = (function (){var G__148626 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__148605,new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"accept-seq?","accept-seq?",1979939591)], 0));
if(cljs.core.record_QMARK_(G__148605)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__148626);
} else {
return G__148626;
}
})();
return (new matcher_combinators.core.SetEmbeds(new cljs.core.Keyword(null,"expected","expected",1583670997).cljs$core$IFn$_invoke$arity$1(G__148605),new cljs.core.Keyword(null,"accept-seq?","accept-seq?",1979939591).cljs$core$IFn$_invoke$arity$1(G__148605),null,cljs.core.not_empty(extmap__4512__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {matcher_combinators.core.Matcher}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
matcher_combinators.core.PredMatcher = (function (pred,desc,__meta,__extmap,__hash){
this.pred = pred;
this.desc = desc;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(matcher_combinators.core.PredMatcher.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(matcher_combinators.core.PredMatcher.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k148628,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__148634 = k148628;
var G__148634__$1 = (((G__148634 instanceof cljs.core.Keyword))?G__148634.fqn:null);
switch (G__148634__$1) {
case "pred":
return self__.pred;

break;
case "desc":
return self__.desc;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k148628,else__4475__auto__);

}
}));

(matcher_combinators.core.PredMatcher.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__148635){
var vec__148636 = p__148635;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__148636,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__148636,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(matcher_combinators.core.PredMatcher.prototype.matcher_combinators$core$Matcher$ = cljs.core.PROTOCOL_SENTINEL);

(matcher_combinators.core.PredMatcher.prototype.matcher_combinators$core$Matcher$_matcher_for$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1;
}));

(matcher_combinators.core.PredMatcher.prototype.matcher_combinators$core$Matcher$_matcher_for$arity$2 = (function (this$,_){
var self__ = this;
var this$__$1 = this;
return this$__$1;
}));

(matcher_combinators.core.PredMatcher.prototype.matcher_combinators$core$Matcher$_match$arity$2 = (function (this$,actual){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(actual,new cljs.core.Keyword("matcher-combinators.core","missing","matcher-combinators.core/missing",-1284372822))){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109),new cljs.core.Keyword(null,"mismatch","mismatch",103313617),new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494),matcher_combinators.model.__GT_Missing(self__.desc),new cljs.core.Keyword("matcher-combinators.result","weight","matcher-combinators.result/weight",837269218),(1)], null);
} else {
if(cljs.core.truth_((self__.pred.cljs$core$IFn$_invoke$arity$1 ? self__.pred.cljs$core$IFn$_invoke$arity$1(actual) : self__.pred.call(null,actual)))){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109),new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494),actual,new cljs.core.Keyword("matcher-combinators.result","weight","matcher-combinators.result/weight",837269218),(0)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109),new cljs.core.Keyword(null,"mismatch","mismatch",103313617),new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494),matcher_combinators.model.__GT_Mismatch(self__.desc,actual),new cljs.core.Keyword("matcher-combinators.result","weight","matcher-combinators.result/weight",837269218),(1)], null);

}
}
}));

(matcher_combinators.core.PredMatcher.prototype.matcher_combinators$core$Matcher$_base_name$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Symbol(null,"predicate","predicate",-101970333,null);
}));

(matcher_combinators.core.PredMatcher.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#matcher-combinators.core.PredMatcher{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pred","pred",1927423397),self__.pred],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"desc","desc",2093485764),self__.desc],null))], null),self__.__extmap));
}));

(matcher_combinators.core.PredMatcher.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__148627){
var self__ = this;
var G__148627__$1 = this;
return (new cljs.core.RecordIter((0),G__148627__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pred","pred",1927423397),new cljs.core.Keyword(null,"desc","desc",2093485764)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(matcher_combinators.core.PredMatcher.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(matcher_combinators.core.PredMatcher.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new matcher_combinators.core.PredMatcher(self__.pred,self__.desc,self__.__meta,self__.__extmap,self__.__hash));
}));

(matcher_combinators.core.PredMatcher.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(matcher_combinators.core.PredMatcher.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (coll__4469__auto__){
return (-1454087399 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
})(this__4468__auto____$1);
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(matcher_combinators.core.PredMatcher.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this148629,other148630){
var self__ = this;
var this148629__$1 = this;
return (((!((other148630 == null)))) && ((((this148629__$1.constructor === other148630.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this148629__$1.pred,other148630.pred)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this148629__$1.desc,other148630.desc)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this148629__$1.__extmap,other148630.__extmap)))))))));
}));

(matcher_combinators.core.PredMatcher.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"desc","desc",2093485764),null,new cljs.core.Keyword(null,"pred","pred",1927423397),null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new matcher_combinators.core.PredMatcher(self__.pred,self__.desc,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(matcher_combinators.core.PredMatcher.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k148628){
var self__ = this;
var this__4479__auto____$1 = this;
var G__148648 = k148628;
var G__148648__$1 = (((G__148648 instanceof cljs.core.Keyword))?G__148648.fqn:null);
switch (G__148648__$1) {
case "pred":
case "desc":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k148628);

}
}));

(matcher_combinators.core.PredMatcher.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__148627){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__148649 = cljs.core.keyword_identical_QMARK_;
var expr__148650 = k__4481__auto__;
if(cljs.core.truth_((pred__148649.cljs$core$IFn$_invoke$arity$2 ? pred__148649.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pred","pred",1927423397),expr__148650) : pred__148649.call(null,new cljs.core.Keyword(null,"pred","pred",1927423397),expr__148650)))){
return (new matcher_combinators.core.PredMatcher(G__148627,self__.desc,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__148649.cljs$core$IFn$_invoke$arity$2 ? pred__148649.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"desc","desc",2093485764),expr__148650) : pred__148649.call(null,new cljs.core.Keyword(null,"desc","desc",2093485764),expr__148650)))){
return (new matcher_combinators.core.PredMatcher(self__.pred,G__148627,self__.__meta,self__.__extmap,null));
} else {
return (new matcher_combinators.core.PredMatcher(self__.pred,self__.desc,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__148627),null));
}
}
}));

(matcher_combinators.core.PredMatcher.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"pred","pred",1927423397),self__.pred,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"desc","desc",2093485764),self__.desc,null))], null),self__.__extmap));
}));

(matcher_combinators.core.PredMatcher.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__148627){
var self__ = this;
var this__4471__auto____$1 = this;
return (new matcher_combinators.core.PredMatcher(self__.pred,self__.desc,G__148627,self__.__extmap,self__.__hash));
}));

(matcher_combinators.core.PredMatcher.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4478__auto__,(0)),cljs.core._nth(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(matcher_combinators.core.PredMatcher.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"desc","desc",-560950005,null)], null);
}));

(matcher_combinators.core.PredMatcher.cljs$lang$type = true);

(matcher_combinators.core.PredMatcher.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"matcher-combinators.core/PredMatcher",null,(1),null));
}));

(matcher_combinators.core.PredMatcher.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"matcher-combinators.core/PredMatcher");
}));

/**
 * Positional factory function for matcher-combinators.core/PredMatcher.
 */
matcher_combinators.core.__GT_PredMatcher = (function matcher_combinators$core$__GT_PredMatcher(pred,desc){
return (new matcher_combinators.core.PredMatcher(pred,desc,null,null,null));
});

/**
 * Factory function for matcher-combinators.core/PredMatcher, taking a map of keywords to field values.
 */
matcher_combinators.core.map__GT_PredMatcher = (function matcher_combinators$core$map__GT_PredMatcher(G__148631){
var extmap__4512__auto__ = (function (){var G__148652 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__148631,new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"desc","desc",2093485764)], 0));
if(cljs.core.record_QMARK_(G__148631)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__148652);
} else {
return G__148652;
}
})();
return (new matcher_combinators.core.PredMatcher(new cljs.core.Keyword(null,"pred","pred",1927423397).cljs$core$IFn$_invoke$arity$1(G__148631),new cljs.core.Keyword(null,"desc","desc",2093485764).cljs$core$IFn$_invoke$arity$1(G__148631),null,cljs.core.not_empty(extmap__4512__auto__),null));
});

matcher_combinators.core.printable_matcher = (function matcher_combinators$core$printable_matcher(matcher){
try{var temp__5751__auto__ = matcher_combinators.core._base_name(matcher);
if(cljs.core.truth_(temp__5751__auto__)){
var n = temp__5751__auto__;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(n),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"expected","expected",1583670997).cljs$core$IFn$_invoke$arity$1(matcher),null,(1),null)))));
} else {
return matcher;
}
}catch (e148653){if((e148653 instanceof Error)){
var _e = e148653;
return matcher;
} else {
throw e148653;

}
}});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {matcher_combinators.core.Matcher}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
matcher_combinators.core.Mismatcher = (function (expected,__meta,__extmap,__hash){
this.expected = expected;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(matcher_combinators.core.Mismatcher.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(matcher_combinators.core.Mismatcher.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k148655,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__148659 = k148655;
var G__148659__$1 = (((G__148659 instanceof cljs.core.Keyword))?G__148659.fqn:null);
switch (G__148659__$1) {
case "expected":
return self__.expected;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k148655,else__4475__auto__);

}
}));

(matcher_combinators.core.Mismatcher.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__148660){
var vec__148661 = p__148660;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__148661,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__148661,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(matcher_combinators.core.Mismatcher.prototype.matcher_combinators$core$Matcher$ = cljs.core.PROTOCOL_SENTINEL);

(matcher_combinators.core.Mismatcher.prototype.matcher_combinators$core$Matcher$_matcher_for$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1;
}));

(matcher_combinators.core.Mismatcher.prototype.matcher_combinators$core$Matcher$_matcher_for$arity$2 = (function (this$,_){
var self__ = this;
var this$__$1 = this;
return this$__$1;
}));

(matcher_combinators.core.Mismatcher.prototype.matcher_combinators$core$Matcher$_match$arity$2 = (function (this$,actual){
var self__ = this;
var this$__$1 = this;
var map__148664 = matcher_combinators.core.match(self__.expected,actual);
var map__148664__$1 = cljs.core.__destructure_map(map__148664);
var result = map__148664__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__148664__$1,new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109));
var weight = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__148664__$1,new cljs.core.Keyword("matcher-combinators.result","weight","matcher-combinators.result/weight",837269218));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),type)){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109),new cljs.core.Keyword(null,"mismatch","mismatch",103313617),new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494),matcher_combinators.model.__GT_ExpectedMismatch(matcher_combinators.core.printable_matcher(self__.expected),actual),new cljs.core.Keyword("matcher-combinators.result","weight","matcher-combinators.result/weight",837269218),weight], null);
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109),new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494),actual,new cljs.core.Keyword("matcher-combinators.result","weight","matcher-combinators.result/weight",837269218),(0)], null);
}
}));

(matcher_combinators.core.Mismatcher.prototype.matcher_combinators$core$Matcher$_base_name$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Symbol(null,"mismatch","mismatch",1743845144,null);
}));

(matcher_combinators.core.Mismatcher.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#matcher-combinators.core.Mismatcher{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"expected","expected",1583670997),self__.expected],null))], null),self__.__extmap));
}));

(matcher_combinators.core.Mismatcher.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__148654){
var self__ = this;
var G__148654__$1 = this;
return (new cljs.core.RecordIter((0),G__148654__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"expected","expected",1583670997)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(matcher_combinators.core.Mismatcher.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(matcher_combinators.core.Mismatcher.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new matcher_combinators.core.Mismatcher(self__.expected,self__.__meta,self__.__extmap,self__.__hash));
}));

(matcher_combinators.core.Mismatcher.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(matcher_combinators.core.Mismatcher.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (coll__4469__auto__){
return (2137457047 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
})(this__4468__auto____$1);
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(matcher_combinators.core.Mismatcher.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this148656,other148657){
var self__ = this;
var this148656__$1 = this;
return (((!((other148657 == null)))) && ((((this148656__$1.constructor === other148657.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this148656__$1.expected,other148657.expected)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this148656__$1.__extmap,other148657.__extmap)))))));
}));

(matcher_combinators.core.Mismatcher.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"expected","expected",1583670997),null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new matcher_combinators.core.Mismatcher(self__.expected,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(matcher_combinators.core.Mismatcher.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k148655){
var self__ = this;
var this__4479__auto____$1 = this;
var G__148665 = k148655;
var G__148665__$1 = (((G__148665 instanceof cljs.core.Keyword))?G__148665.fqn:null);
switch (G__148665__$1) {
case "expected":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k148655);

}
}));

(matcher_combinators.core.Mismatcher.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__148654){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__148666 = cljs.core.keyword_identical_QMARK_;
var expr__148667 = k__4481__auto__;
if(cljs.core.truth_((pred__148666.cljs$core$IFn$_invoke$arity$2 ? pred__148666.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expected","expected",1583670997),expr__148667) : pred__148666.call(null,new cljs.core.Keyword(null,"expected","expected",1583670997),expr__148667)))){
return (new matcher_combinators.core.Mismatcher(G__148654,self__.__meta,self__.__extmap,null));
} else {
return (new matcher_combinators.core.Mismatcher(self__.expected,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__148654),null));
}
}));

(matcher_combinators.core.Mismatcher.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"expected","expected",1583670997),self__.expected,null))], null),self__.__extmap));
}));

(matcher_combinators.core.Mismatcher.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__148654){
var self__ = this;
var this__4471__auto____$1 = this;
return (new matcher_combinators.core.Mismatcher(self__.expected,G__148654,self__.__extmap,self__.__hash));
}));

(matcher_combinators.core.Mismatcher.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4478__auto__,(0)),cljs.core._nth(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(matcher_combinators.core.Mismatcher.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expected","expected",-1070764772,null)], null);
}));

(matcher_combinators.core.Mismatcher.cljs$lang$type = true);

(matcher_combinators.core.Mismatcher.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"matcher-combinators.core/Mismatcher",null,(1),null));
}));

(matcher_combinators.core.Mismatcher.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"matcher-combinators.core/Mismatcher");
}));

/**
 * Positional factory function for matcher-combinators.core/Mismatcher.
 */
matcher_combinators.core.__GT_Mismatcher = (function matcher_combinators$core$__GT_Mismatcher(expected){
return (new matcher_combinators.core.Mismatcher(expected,null,null,null));
});

/**
 * Factory function for matcher-combinators.core/Mismatcher, taking a map of keywords to field values.
 */
matcher_combinators.core.map__GT_Mismatcher = (function matcher_combinators$core$map__GT_Mismatcher(G__148658){
var extmap__4512__auto__ = (function (){var G__148669 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__148658,new cljs.core.Keyword(null,"expected","expected",1583670997));
if(cljs.core.record_QMARK_(G__148658)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__148669);
} else {
return G__148669;
}
})();
return (new matcher_combinators.core.Mismatcher(new cljs.core.Keyword(null,"expected","expected",1583670997).cljs$core$IFn$_invoke$arity$1(G__148658),null,cljs.core.not_empty(extmap__4512__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {matcher_combinators.core.Matcher}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
matcher_combinators.core.CljsUriEquals = (function (expected,__meta,__extmap,__hash){
this.expected = expected;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(matcher_combinators.core.CljsUriEquals.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(matcher_combinators.core.CljsUriEquals.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k148671,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__148675 = k148671;
var G__148675__$1 = (((G__148675 instanceof cljs.core.Keyword))?G__148675.fqn:null);
switch (G__148675__$1) {
case "expected":
return self__.expected;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k148671,else__4475__auto__);

}
}));

(matcher_combinators.core.CljsUriEquals.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__148676){
var vec__148677 = p__148676;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__148677,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__148677,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(matcher_combinators.core.CljsUriEquals.prototype.matcher_combinators$core$Matcher$ = cljs.core.PROTOCOL_SENTINEL);

(matcher_combinators.core.CljsUriEquals.prototype.matcher_combinators$core$Matcher$_matcher_for$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1;
}));

(matcher_combinators.core.CljsUriEquals.prototype.matcher_combinators$core$Matcher$_matcher_for$arity$2 = (function (this$,_){
var self__ = this;
var this$__$1 = this;
return this$__$1;
}));

(matcher_combinators.core.CljsUriEquals.prototype.matcher_combinators$core$Matcher$_match$arity$2 = (function (this$,actual){
var self__ = this;
var this$__$1 = this;
var temp__5751__auto__ = matcher_combinators.core.validate_input.cljs$core$IFn$_invoke$arity$5(self__.expected,actual,cljs.core.uri_QMARK_,this$__$1.matcher_combinators$core$Matcher$_base_name$arity$1(null),"goog.Uri");
if(cljs.core.truth_(temp__5751__auto__)){
var issue = temp__5751__auto__;
return issue;
} else {
return matcher_combinators.core.value_match(self__.expected.toString(),actual.toString());
}
}));

(matcher_combinators.core.CljsUriEquals.prototype.matcher_combinators$core$Matcher$_base_name$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Symbol(null,"equals","equals",1177497557,null);
}));

(matcher_combinators.core.CljsUriEquals.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#matcher-combinators.core.CljsUriEquals{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"expected","expected",1583670997),self__.expected],null))], null),self__.__extmap));
}));

(matcher_combinators.core.CljsUriEquals.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__148670){
var self__ = this;
var G__148670__$1 = this;
return (new cljs.core.RecordIter((0),G__148670__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"expected","expected",1583670997)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(matcher_combinators.core.CljsUriEquals.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(matcher_combinators.core.CljsUriEquals.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new matcher_combinators.core.CljsUriEquals(self__.expected,self__.__meta,self__.__extmap,self__.__hash));
}));

(matcher_combinators.core.CljsUriEquals.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(matcher_combinators.core.CljsUriEquals.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (coll__4469__auto__){
return (-1196250428 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
})(this__4468__auto____$1);
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(matcher_combinators.core.CljsUriEquals.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this148672,other148673){
var self__ = this;
var this148672__$1 = this;
return (((!((other148673 == null)))) && ((((this148672__$1.constructor === other148673.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this148672__$1.expected,other148673.expected)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this148672__$1.__extmap,other148673.__extmap)))))));
}));

(matcher_combinators.core.CljsUriEquals.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"expected","expected",1583670997),null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new matcher_combinators.core.CljsUriEquals(self__.expected,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(matcher_combinators.core.CljsUriEquals.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k148671){
var self__ = this;
var this__4479__auto____$1 = this;
var G__148680 = k148671;
var G__148680__$1 = (((G__148680 instanceof cljs.core.Keyword))?G__148680.fqn:null);
switch (G__148680__$1) {
case "expected":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k148671);

}
}));

(matcher_combinators.core.CljsUriEquals.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__148670){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__148681 = cljs.core.keyword_identical_QMARK_;
var expr__148682 = k__4481__auto__;
if(cljs.core.truth_((pred__148681.cljs$core$IFn$_invoke$arity$2 ? pred__148681.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expected","expected",1583670997),expr__148682) : pred__148681.call(null,new cljs.core.Keyword(null,"expected","expected",1583670997),expr__148682)))){
return (new matcher_combinators.core.CljsUriEquals(G__148670,self__.__meta,self__.__extmap,null));
} else {
return (new matcher_combinators.core.CljsUriEquals(self__.expected,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__148670),null));
}
}));

(matcher_combinators.core.CljsUriEquals.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"expected","expected",1583670997),self__.expected,null))], null),self__.__extmap));
}));

(matcher_combinators.core.CljsUriEquals.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__148670){
var self__ = this;
var this__4471__auto____$1 = this;
return (new matcher_combinators.core.CljsUriEquals(self__.expected,G__148670,self__.__extmap,self__.__hash));
}));

(matcher_combinators.core.CljsUriEquals.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4478__auto__,(0)),cljs.core._nth(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(matcher_combinators.core.CljsUriEquals.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expected","expected",-1070764772,null)], null);
}));

(matcher_combinators.core.CljsUriEquals.cljs$lang$type = true);

(matcher_combinators.core.CljsUriEquals.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"matcher-combinators.core/CljsUriEquals",null,(1),null));
}));

(matcher_combinators.core.CljsUriEquals.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"matcher-combinators.core/CljsUriEquals");
}));

/**
 * Positional factory function for matcher-combinators.core/CljsUriEquals.
 */
matcher_combinators.core.__GT_CljsUriEquals = (function matcher_combinators$core$__GT_CljsUriEquals(expected){
return (new matcher_combinators.core.CljsUriEquals(expected,null,null,null));
});

/**
 * Factory function for matcher-combinators.core/CljsUriEquals, taking a map of keywords to field values.
 */
matcher_combinators.core.map__GT_CljsUriEquals = (function matcher_combinators$core$map__GT_CljsUriEquals(G__148674){
var extmap__4512__auto__ = (function (){var G__148684 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__148674,new cljs.core.Keyword(null,"expected","expected",1583670997));
if(cljs.core.record_QMARK_(G__148674)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__148684);
} else {
return G__148684;
}
})();
return (new matcher_combinators.core.CljsUriEquals(new cljs.core.Keyword(null,"expected","expected",1583670997).cljs$core$IFn$_invoke$arity$1(G__148674),null,cljs.core.not_empty(extmap__4512__auto__),null));
});


//# sourceMappingURL=matcher_combinators.core.js.map
