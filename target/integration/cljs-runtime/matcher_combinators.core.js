goog.provide('matcher_combinators.core');

/**
 * For internal use. Type-specific implementations for finding matchers for
 *   expected values and matching them against expected values.
 * @interface
 */
matcher_combinators.core.Matcher = function(){};

var matcher_combinators$core$Matcher$_matcher_for$dyn_52887 = (function() {
var G__52888 = null;
var G__52888__1 = (function (expected){
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
var G__52888__2 = (function (expected,t__GT_m){
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
G__52888 = function(expected,t__GT_m){
switch(arguments.length){
case 1:
return G__52888__1.call(this,expected);
case 2:
return G__52888__2.call(this,expected,t__GT_m);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__52888.cljs$core$IFn$_invoke$arity$1 = G__52888__1;
G__52888.cljs$core$IFn$_invoke$arity$2 = G__52888__2;
return G__52888;
})()
;
/**
 * Do not call directly. Implementation for matcher-combinators.matchers/matcher-for.
 */
matcher_combinators.core._matcher_for = (function matcher_combinators$core$_matcher_for(var_args){
var G__52554 = arguments.length;
switch (G__52554) {
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
return matcher_combinators$core$Matcher$_matcher_for$dyn_52887(expected);
}
}));

(matcher_combinators.core._matcher_for.cljs$core$IFn$_invoke$arity$2 = (function (expected,t__GT_m){
if((((!((expected == null)))) && ((!((expected.matcher_combinators$core$Matcher$_matcher_for$arity$2 == null)))))){
return expected.matcher_combinators$core$Matcher$_matcher_for$arity$2(expected,t__GT_m);
} else {
return matcher_combinators$core$Matcher$_matcher_for$dyn_52887(expected,t__GT_m);
}
}));

(matcher_combinators.core._matcher_for.cljs$lang$maxFixedArity = 2);


var matcher_combinators$core$Matcher$_base_name$dyn_52890 = (function (this$){
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
return matcher_combinators$core$Matcher$_base_name$dyn_52890(this$);
}
});

var matcher_combinators$core$Matcher$_match$dyn_52891 = (function (this$,actual){
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
return matcher_combinators$core$Matcher$_match$dyn_52891(this$,actual);
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

(matcher_combinators.core.Value.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k52559,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__52565 = k52559;
var G__52565__$1 = (((G__52565 instanceof cljs.core.Keyword))?G__52565.fqn:null);
switch (G__52565__$1) {
case "expected":
return self__.expected;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k52559,else__4475__auto__);

}
}));

(matcher_combinators.core.Value.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__52566){
var vec__52567 = p__52566;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52567,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52567,(1),null);
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

(matcher_combinators.core.Value.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__52558){
var self__ = this;
var G__52558__$1 = this;
return (new cljs.core.RecordIter((0),G__52558__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"expected","expected",1583670997)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(matcher_combinators.core.Value.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this52560,other52561){
var self__ = this;
var this52560__$1 = this;
return (((!((other52561 == null)))) && ((((this52560__$1.constructor === other52561.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52560__$1.expected,other52561.expected)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52560__$1.__extmap,other52561.__extmap)))))));
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

(matcher_combinators.core.Value.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k52559){
var self__ = this;
var this__4479__auto____$1 = this;
var G__52576 = k52559;
var G__52576__$1 = (((G__52576 instanceof cljs.core.Keyword))?G__52576.fqn:null);
switch (G__52576__$1) {
case "expected":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k52559);

}
}));

(matcher_combinators.core.Value.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__52558){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__52577 = cljs.core.keyword_identical_QMARK_;
var expr__52578 = k__4481__auto__;
if(cljs.core.truth_((pred__52577.cljs$core$IFn$_invoke$arity$2 ? pred__52577.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expected","expected",1583670997),expr__52578) : pred__52577.call(null,new cljs.core.Keyword(null,"expected","expected",1583670997),expr__52578)))){
return (new matcher_combinators.core.Value(G__52558,self__.__meta,self__.__extmap,null));
} else {
return (new matcher_combinators.core.Value(self__.expected,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__52558),null));
}
}));

(matcher_combinators.core.Value.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"expected","expected",1583670997),self__.expected,null))], null),self__.__extmap));
}));

(matcher_combinators.core.Value.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__52558){
var self__ = this;
var this__4471__auto____$1 = this;
return (new matcher_combinators.core.Value(self__.expected,G__52558,self__.__extmap,self__.__hash));
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
matcher_combinators.core.map__GT_Value = (function matcher_combinators$core$map__GT_Value(G__52564){
var extmap__4512__auto__ = (function (){var G__52580 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__52564,new cljs.core.Keyword(null,"expected","expected",1583670997));
if(cljs.core.record_QMARK_(G__52564)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__52580);
} else {
return G__52580;
}
})();
return (new matcher_combinators.core.Value(new cljs.core.Keyword(null,"expected","expected",1583670997).cljs$core$IFn$_invoke$arity$1(G__52564),null,cljs.core.not_empty(extmap__4512__auto__),null));
});

matcher_combinators.core.validate_input = (function matcher_combinators$core$validate_input(var_args){
var G__52582 = arguments.length;
switch (G__52582) {
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

(matcher_combinators.core.Regex.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k52584,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__52588 = k52584;
var G__52588__$1 = (((G__52588 instanceof cljs.core.Keyword))?G__52588.fqn:null);
switch (G__52588__$1) {
case "expected":
return self__.expected;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k52584,else__4475__auto__);

}
}));

(matcher_combinators.core.Regex.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__52589){
var vec__52590 = p__52589;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52590,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52590,(1),null);
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
}catch (e52593){if((e52593 instanceof Error)){
var _ = e52593;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109),new cljs.core.Keyword(null,"mismatch","mismatch",103313617),new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494),matcher_combinators.model.__GT_InvalidMatcherType(["provided: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(actual)].join(''),["regex ",cljs.core.print_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.expected], 0))," can't match 'expected' argument of type: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(actual))].join('')),new cljs.core.Keyword("matcher-combinators.result","weight","matcher-combinators.result/weight",837269218),(1)], null);
} else {
throw e52593;

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

(matcher_combinators.core.Regex.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__52583){
var self__ = this;
var G__52583__$1 = this;
return (new cljs.core.RecordIter((0),G__52583__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"expected","expected",1583670997)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(matcher_combinators.core.Regex.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this52585,other52586){
var self__ = this;
var this52585__$1 = this;
return (((!((other52586 == null)))) && ((((this52585__$1.constructor === other52586.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52585__$1.expected,other52586.expected)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52585__$1.__extmap,other52586.__extmap)))))));
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

(matcher_combinators.core.Regex.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k52584){
var self__ = this;
var this__4479__auto____$1 = this;
var G__52594 = k52584;
var G__52594__$1 = (((G__52594 instanceof cljs.core.Keyword))?G__52594.fqn:null);
switch (G__52594__$1) {
case "expected":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k52584);

}
}));

(matcher_combinators.core.Regex.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__52583){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__52595 = cljs.core.keyword_identical_QMARK_;
var expr__52596 = k__4481__auto__;
if(cljs.core.truth_((pred__52595.cljs$core$IFn$_invoke$arity$2 ? pred__52595.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expected","expected",1583670997),expr__52596) : pred__52595.call(null,new cljs.core.Keyword(null,"expected","expected",1583670997),expr__52596)))){
return (new matcher_combinators.core.Regex(G__52583,self__.__meta,self__.__extmap,null));
} else {
return (new matcher_combinators.core.Regex(self__.expected,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__52583),null));
}
}));

(matcher_combinators.core.Regex.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"expected","expected",1583670997),self__.expected,null))], null),self__.__extmap));
}));

(matcher_combinators.core.Regex.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__52583){
var self__ = this;
var this__4471__auto____$1 = this;
return (new matcher_combinators.core.Regex(self__.expected,G__52583,self__.__extmap,self__.__hash));
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
matcher_combinators.core.map__GT_Regex = (function matcher_combinators$core$map__GT_Regex(G__52587){
var extmap__4512__auto__ = (function (){var G__52598 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__52587,new cljs.core.Keyword(null,"expected","expected",1583670997));
if(cljs.core.record_QMARK_(G__52587)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__52598);
} else {
return G__52598;
}
})();
return (new matcher_combinators.core.Regex(new cljs.core.Keyword(null,"expected","expected",1583670997).cljs$core$IFn$_invoke$arity$1(G__52587),null,cljs.core.not_empty(extmap__4512__auto__),null));
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

(matcher_combinators.core.Absent.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k52600,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__52606 = k52600;
switch (G__52606) {
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k52600,else__4475__auto__);

}
}));

(matcher_combinators.core.Absent.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__52610){
var vec__52611 = p__52610;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52611,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52611,(1),null);
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

(matcher_combinators.core.Absent.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__52599){
var self__ = this;
var G__52599__$1 = this;
return (new cljs.core.RecordIter((0),G__52599__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(matcher_combinators.core.Absent.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this52601,other52602){
var self__ = this;
var this52601__$1 = this;
return (((!((other52602 == null)))) && ((((this52601__$1.constructor === other52602.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52601__$1.__extmap,other52602.__extmap)))));
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

(matcher_combinators.core.Absent.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k52600){
var self__ = this;
var this__4479__auto____$1 = this;
return cljs.core.contains_QMARK_(self__.__extmap,k52600);
}));

(matcher_combinators.core.Absent.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__52599){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__52619 = cljs.core.keyword_identical_QMARK_;
var expr__52620 = k__4481__auto__;
return (new matcher_combinators.core.Absent(self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__52599),null));
}));

(matcher_combinators.core.Absent.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(matcher_combinators.core.Absent.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__52599){
var self__ = this;
var this__4471__auto____$1 = this;
return (new matcher_combinators.core.Absent(G__52599,self__.__extmap,self__.__hash));
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
matcher_combinators.core.map__GT_Absent = (function matcher_combinators$core$map__GT_Absent(G__52603){
var extmap__4512__auto__ = (function (){var G__52626 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(G__52603);
if(cljs.core.record_QMARK_(G__52603)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__52626);
} else {
return G__52626;
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

(matcher_combinators.core.InvalidType.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k52628,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__52633 = k52628;
var G__52633__$1 = (((G__52633 instanceof cljs.core.Keyword))?G__52633.fqn:null);
switch (G__52633__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k52628,else__4475__auto__);

}
}));

(matcher_combinators.core.InvalidType.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__52635){
var vec__52636 = p__52635;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52636,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52636,(1),null);
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

(matcher_combinators.core.InvalidType.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__52627){
var self__ = this;
var G__52627__$1 = this;
return (new cljs.core.RecordIter((0),G__52627__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"provided","provided",-1493091365),new cljs.core.Keyword(null,"matcher-name","matcher-name",-1187399918),new cljs.core.Keyword(null,"type-msg","type-msg",264591646)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(matcher_combinators.core.InvalidType.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this52629,other52630){
var self__ = this;
var this52629__$1 = this;
return (((!((other52630 == null)))) && ((((this52629__$1.constructor === other52630.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52629__$1.provided,other52630.provided)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52629__$1.matcher_name,other52630.matcher_name)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52629__$1.type_msg,other52630.type_msg)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52629__$1.__extmap,other52630.__extmap)))))))))));
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

(matcher_combinators.core.InvalidType.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k52628){
var self__ = this;
var this__4479__auto____$1 = this;
var G__52647 = k52628;
var G__52647__$1 = (((G__52647 instanceof cljs.core.Keyword))?G__52647.fqn:null);
switch (G__52647__$1) {
case "provided":
case "matcher-name":
case "type-msg":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k52628);

}
}));

(matcher_combinators.core.InvalidType.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__52627){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__52650 = cljs.core.keyword_identical_QMARK_;
var expr__52651 = k__4481__auto__;
if(cljs.core.truth_((pred__52650.cljs$core$IFn$_invoke$arity$2 ? pred__52650.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"provided","provided",-1493091365),expr__52651) : pred__52650.call(null,new cljs.core.Keyword(null,"provided","provided",-1493091365),expr__52651)))){
return (new matcher_combinators.core.InvalidType(G__52627,self__.matcher_name,self__.type_msg,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__52650.cljs$core$IFn$_invoke$arity$2 ? pred__52650.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"matcher-name","matcher-name",-1187399918),expr__52651) : pred__52650.call(null,new cljs.core.Keyword(null,"matcher-name","matcher-name",-1187399918),expr__52651)))){
return (new matcher_combinators.core.InvalidType(self__.provided,G__52627,self__.type_msg,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__52650.cljs$core$IFn$_invoke$arity$2 ? pred__52650.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type-msg","type-msg",264591646),expr__52651) : pred__52650.call(null,new cljs.core.Keyword(null,"type-msg","type-msg",264591646),expr__52651)))){
return (new matcher_combinators.core.InvalidType(self__.provided,self__.matcher_name,G__52627,self__.__meta,self__.__extmap,null));
} else {
return (new matcher_combinators.core.InvalidType(self__.provided,self__.matcher_name,self__.type_msg,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__52627),null));
}
}
}
}));

(matcher_combinators.core.InvalidType.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"provided","provided",-1493091365),self__.provided,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"matcher-name","matcher-name",-1187399918),self__.matcher_name,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"type-msg","type-msg",264591646),self__.type_msg,null))], null),self__.__extmap));
}));

(matcher_combinators.core.InvalidType.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__52627){
var self__ = this;
var this__4471__auto____$1 = this;
return (new matcher_combinators.core.InvalidType(self__.provided,self__.matcher_name,self__.type_msg,G__52627,self__.__extmap,self__.__hash));
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
matcher_combinators.core.map__GT_InvalidType = (function matcher_combinators$core$map__GT_InvalidType(G__52631){
var extmap__4512__auto__ = (function (){var G__52658 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__52631,new cljs.core.Keyword(null,"provided","provided",-1493091365),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"matcher-name","matcher-name",-1187399918),new cljs.core.Keyword(null,"type-msg","type-msg",264591646)], 0));
if(cljs.core.record_QMARK_(G__52631)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__52658);
} else {
return G__52658;
}
})();
return (new matcher_combinators.core.InvalidType(new cljs.core.Keyword(null,"provided","provided",-1493091365).cljs$core$IFn$_invoke$arity$1(G__52631),new cljs.core.Keyword(null,"matcher-name","matcher-name",-1187399918).cljs$core$IFn$_invoke$arity$1(G__52631),new cljs.core.Keyword(null,"type-msg","type-msg",264591646).cljs$core$IFn$_invoke$arity$1(G__52631),null,cljs.core.not_empty(extmap__4512__auto__),null));
});

matcher_combinators.core.find_unexpected = (function matcher_combinators$core$find_unexpected(expected_map,key){
var temp__5753__auto__ = cljs.core.find(expected_map,key);
if(cljs.core.truth_(temp__5753__auto__)){
var vec__52659 = temp__5753__auto__;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52659,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52659,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(matcher_combinators.core.Absent,cljs.core.type(v))){
return null;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null);
}
} else {
return null;
}
});
matcher_combinators.core.match_kv = (function matcher_combinators$core$match_kv(actual,p__52663){
var vec__52664 = p__52663;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52664,(0),null);
var matcher = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52664,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(matcher_combinators.core.Absent,cljs.core.type(matcher))){
var temp__5751__auto__ = cljs.core.find(actual,key);
if(cljs.core.truth_(temp__5751__auto__)){
var vec__52667 = temp__5751__auto__;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52667,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52667,(1),null);
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
var unexpected_entries = cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p__52670){
var vec__52671 = p__52670;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52671,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52671,(1),null);
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
var mismatch_val = cljs.core.into.cljs$core$IFn$_invoke$arity$2(actual,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(unexpected_entries,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__52674){
var vec__52675 = p__52674;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52675,(0),null);
var match_result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52675,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(match_result)], null);
}),entry_results)));
var weight = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc_weight,p__52678){
var map__52679 = p__52678;
var map__52679__$1 = cljs.core.__destructure_map(map__52679);
var weight = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52679__$1,new cljs.core.Keyword("matcher-combinators.result","weight","matcher-combinators.result/weight",837269218));
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

(matcher_combinators.core.EmbedsMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k52685,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__52689 = k52685;
var G__52689__$1 = (((G__52689 instanceof cljs.core.Keyword))?G__52689.fqn:null);
switch (G__52689__$1) {
case "expected":
return self__.expected;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k52685,else__4475__auto__);

}
}));

(matcher_combinators.core.EmbedsMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__52690){
var vec__52691 = p__52690;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52691,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52691,(1),null);
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

(matcher_combinators.core.EmbedsMap.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__52684){
var self__ = this;
var G__52684__$1 = this;
return (new cljs.core.RecordIter((0),G__52684__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"expected","expected",1583670997)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(matcher_combinators.core.EmbedsMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this52686,other52687){
var self__ = this;
var this52686__$1 = this;
return (((!((other52687 == null)))) && ((((this52686__$1.constructor === other52687.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52686__$1.expected,other52687.expected)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52686__$1.__extmap,other52687.__extmap)))))));
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

(matcher_combinators.core.EmbedsMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k52685){
var self__ = this;
var this__4479__auto____$1 = this;
var G__52694 = k52685;
var G__52694__$1 = (((G__52694 instanceof cljs.core.Keyword))?G__52694.fqn:null);
switch (G__52694__$1) {
case "expected":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k52685);

}
}));

(matcher_combinators.core.EmbedsMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__52684){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__52695 = cljs.core.keyword_identical_QMARK_;
var expr__52696 = k__4481__auto__;
if(cljs.core.truth_((pred__52695.cljs$core$IFn$_invoke$arity$2 ? pred__52695.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expected","expected",1583670997),expr__52696) : pred__52695.call(null,new cljs.core.Keyword(null,"expected","expected",1583670997),expr__52696)))){
return (new matcher_combinators.core.EmbedsMap(G__52684,self__.__meta,self__.__extmap,null));
} else {
return (new matcher_combinators.core.EmbedsMap(self__.expected,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__52684),null));
}
}));

(matcher_combinators.core.EmbedsMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"expected","expected",1583670997),self__.expected,null))], null),self__.__extmap));
}));

(matcher_combinators.core.EmbedsMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__52684){
var self__ = this;
var this__4471__auto____$1 = this;
return (new matcher_combinators.core.EmbedsMap(self__.expected,G__52684,self__.__extmap,self__.__hash));
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
matcher_combinators.core.map__GT_EmbedsMap = (function matcher_combinators$core$map__GT_EmbedsMap(G__52688){
var extmap__4512__auto__ = (function (){var G__52698 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__52688,new cljs.core.Keyword(null,"expected","expected",1583670997));
if(cljs.core.record_QMARK_(G__52688)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__52698);
} else {
return G__52698;
}
})();
return (new matcher_combinators.core.EmbedsMap(new cljs.core.Keyword(null,"expected","expected",1583670997).cljs$core$IFn$_invoke$arity$1(G__52688),null,cljs.core.not_empty(extmap__4512__auto__),null));
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

(matcher_combinators.core.EqualsMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k52700,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__52704 = k52700;
var G__52704__$1 = (((G__52704 instanceof cljs.core.Keyword))?G__52704.fqn:null);
switch (G__52704__$1) {
case "expected":
return self__.expected;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k52700,else__4475__auto__);

}
}));

(matcher_combinators.core.EqualsMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__52705){
var vec__52706 = p__52705;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52706,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52706,(1),null);
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

(matcher_combinators.core.EqualsMap.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__52699){
var self__ = this;
var G__52699__$1 = this;
return (new cljs.core.RecordIter((0),G__52699__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"expected","expected",1583670997)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(matcher_combinators.core.EqualsMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this52701,other52702){
var self__ = this;
var this52701__$1 = this;
return (((!((other52702 == null)))) && ((((this52701__$1.constructor === other52702.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52701__$1.expected,other52702.expected)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52701__$1.__extmap,other52702.__extmap)))))));
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

(matcher_combinators.core.EqualsMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k52700){
var self__ = this;
var this__4479__auto____$1 = this;
var G__52709 = k52700;
var G__52709__$1 = (((G__52709 instanceof cljs.core.Keyword))?G__52709.fqn:null);
switch (G__52709__$1) {
case "expected":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k52700);

}
}));

(matcher_combinators.core.EqualsMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__52699){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__52710 = cljs.core.keyword_identical_QMARK_;
var expr__52711 = k__4481__auto__;
if(cljs.core.truth_((pred__52710.cljs$core$IFn$_invoke$arity$2 ? pred__52710.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expected","expected",1583670997),expr__52711) : pred__52710.call(null,new cljs.core.Keyword(null,"expected","expected",1583670997),expr__52711)))){
return (new matcher_combinators.core.EqualsMap(G__52699,self__.__meta,self__.__extmap,null));
} else {
return (new matcher_combinators.core.EqualsMap(self__.expected,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__52699),null));
}
}));

(matcher_combinators.core.EqualsMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"expected","expected",1583670997),self__.expected,null))], null),self__.__extmap));
}));

(matcher_combinators.core.EqualsMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__52699){
var self__ = this;
var this__4471__auto____$1 = this;
return (new matcher_combinators.core.EqualsMap(self__.expected,G__52699,self__.__extmap,self__.__hash));
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
matcher_combinators.core.map__GT_EqualsMap = (function matcher_combinators$core$map__GT_EqualsMap(G__52703){
var extmap__4512__auto__ = (function (){var G__52713 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__52703,new cljs.core.Keyword(null,"expected","expected",1583670997));
if(cljs.core.record_QMARK_(G__52703)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__52713);
} else {
return G__52713;
}
})();
return (new matcher_combinators.core.EqualsMap(new cljs.core.Keyword(null,"expected","expected",1583670997).cljs$core$IFn$_invoke$arity$1(G__52703),null,cljs.core.not_empty(extmap__4512__auto__),null));
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

(matcher_combinators.core.EqualsRecord.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k52715,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__52719 = k52715;
var G__52719__$1 = (((G__52719 instanceof cljs.core.Keyword))?G__52719.fqn:null);
switch (G__52719__$1) {
case "expected":
return self__.expected;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k52715,else__4475__auto__);

}
}));

(matcher_combinators.core.EqualsRecord.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__52720){
var vec__52721 = p__52720;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52721,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52721,(1),null);
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

(matcher_combinators.core.EqualsRecord.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__52714){
var self__ = this;
var G__52714__$1 = this;
return (new cljs.core.RecordIter((0),G__52714__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"expected","expected",1583670997)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(matcher_combinators.core.EqualsRecord.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this52716,other52717){
var self__ = this;
var this52716__$1 = this;
return (((!((other52717 == null)))) && ((((this52716__$1.constructor === other52717.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52716__$1.expected,other52717.expected)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52716__$1.__extmap,other52717.__extmap)))))));
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

(matcher_combinators.core.EqualsRecord.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k52715){
var self__ = this;
var this__4479__auto____$1 = this;
var G__52724 = k52715;
var G__52724__$1 = (((G__52724 instanceof cljs.core.Keyword))?G__52724.fqn:null);
switch (G__52724__$1) {
case "expected":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k52715);

}
}));

(matcher_combinators.core.EqualsRecord.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__52714){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__52725 = cljs.core.keyword_identical_QMARK_;
var expr__52726 = k__4481__auto__;
if(cljs.core.truth_((pred__52725.cljs$core$IFn$_invoke$arity$2 ? pred__52725.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expected","expected",1583670997),expr__52726) : pred__52725.call(null,new cljs.core.Keyword(null,"expected","expected",1583670997),expr__52726)))){
return (new matcher_combinators.core.EqualsRecord(G__52714,self__.__meta,self__.__extmap,null));
} else {
return (new matcher_combinators.core.EqualsRecord(self__.expected,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__52714),null));
}
}));

(matcher_combinators.core.EqualsRecord.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"expected","expected",1583670997),self__.expected,null))], null),self__.__extmap));
}));

(matcher_combinators.core.EqualsRecord.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__52714){
var self__ = this;
var this__4471__auto____$1 = this;
return (new matcher_combinators.core.EqualsRecord(self__.expected,G__52714,self__.__extmap,self__.__hash));
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
matcher_combinators.core.map__GT_EqualsRecord = (function matcher_combinators$core$map__GT_EqualsRecord(G__52718){
var extmap__4512__auto__ = (function (){var G__52728 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__52718,new cljs.core.Keyword(null,"expected","expected",1583670997));
if(cljs.core.record_QMARK_(G__52718)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__52728);
} else {
return G__52728;
}
})();
return (new matcher_combinators.core.EqualsRecord(new cljs.core.Keyword(null,"expected","expected",1583670997).cljs$core$IFn$_invoke$arity$1(G__52718),null,cljs.core.not_empty(extmap__4512__auto__),null));
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
if((typeof matcher_combinators !== 'undefined') && (typeof matcher_combinators.core !== 'undefined') && (typeof matcher_combinators.core.t_matcher_combinators$core52729 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {matcher_combinators.core.Matcher}
 * @implements {cljs.core.IWithMeta}
*/
matcher_combinators.core.t_matcher_combinators$core52729 = (function (meta52730){
this.meta52730 = meta52730;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(matcher_combinators.core.t_matcher_combinators$core52729.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52731,meta52730__$1){
var self__ = this;
var _52731__$1 = this;
return (new matcher_combinators.core.t_matcher_combinators$core52729(meta52730__$1));
}));

(matcher_combinators.core.t_matcher_combinators$core52729.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52731){
var self__ = this;
var _52731__$1 = this;
return self__.meta52730;
}));

(matcher_combinators.core.t_matcher_combinators$core52729.prototype.matcher_combinators$core$Matcher$ = cljs.core.PROTOCOL_SENTINEL);

(matcher_combinators.core.t_matcher_combinators$core52729.prototype.matcher_combinators$core$Matcher$_matcher_for$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1;
}));

(matcher_combinators.core.t_matcher_combinators$core52729.prototype.matcher_combinators$core$Matcher$_matcher_for$arity$2 = (function (this$,_){
var self__ = this;
var this$__$1 = this;
return this$__$1;
}));

(matcher_combinators.core.t_matcher_combinators$core52729.prototype.matcher_combinators$core$Matcher$_match$arity$2 = (function (_this,actual){
var self__ = this;
var _this__$1 = this;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109),new cljs.core.Keyword(null,"mismatch","mismatch",103313617),new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494),matcher_combinators.model.__GT_Unexpected(actual),new cljs.core.Keyword("matcher-combinators.result","weight","matcher-combinators.result/weight",837269218),(1)], null);
}));

(matcher_combinators.core.t_matcher_combinators$core52729.prototype.matcher_combinators$core$Matcher$_base_name$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Symbol(null,"unexpected","unexpected",502779103,null);
}));

(matcher_combinators.core.t_matcher_combinators$core52729.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta52730","meta52730",426301852,null)], null);
}));

(matcher_combinators.core.t_matcher_combinators$core52729.cljs$lang$type = true);

(matcher_combinators.core.t_matcher_combinators$core52729.cljs$lang$ctorStr = "matcher-combinators.core/t_matcher_combinators$core52729");

(matcher_combinators.core.t_matcher_combinators$core52729.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"matcher-combinators.core/t_matcher_combinators$core52729");
}));

/**
 * Positional factory function for matcher-combinators.core/t_matcher_combinators$core52729.
 */
matcher_combinators.core.__GT_t_matcher_combinators$core52729 = (function matcher_combinators$core$__GT_t_matcher_combinators$core52729(meta52730){
return (new matcher_combinators.core.t_matcher_combinators$core52729(meta52730));
});

}

return (new matcher_combinators.core.t_matcher_combinators$core52729(cljs.core.PersistentArrayMap.EMPTY));
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
var vec__52732 = matcher_combinators.core.normalize_inputs_length(expected,actual);
var matchers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52732,(0),null);
var actual_elems = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52732,(1),null);
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

(matcher_combinators.core.EqualsSeq.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k52736,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__52740 = k52736;
var G__52740__$1 = (((G__52740 instanceof cljs.core.Keyword))?G__52740.fqn:null);
switch (G__52740__$1) {
case "expected":
return self__.expected;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k52736,else__4475__auto__);

}
}));

(matcher_combinators.core.EqualsSeq.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__52741){
var vec__52742 = p__52741;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52742,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52742,(1),null);
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

(matcher_combinators.core.EqualsSeq.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__52735){
var self__ = this;
var G__52735__$1 = this;
return (new cljs.core.RecordIter((0),G__52735__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"expected","expected",1583670997)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(matcher_combinators.core.EqualsSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this52737,other52738){
var self__ = this;
var this52737__$1 = this;
return (((!((other52738 == null)))) && ((((this52737__$1.constructor === other52738.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52737__$1.expected,other52738.expected)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52737__$1.__extmap,other52738.__extmap)))))));
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

(matcher_combinators.core.EqualsSeq.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k52736){
var self__ = this;
var this__4479__auto____$1 = this;
var G__52745 = k52736;
var G__52745__$1 = (((G__52745 instanceof cljs.core.Keyword))?G__52745.fqn:null);
switch (G__52745__$1) {
case "expected":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k52736);

}
}));

(matcher_combinators.core.EqualsSeq.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__52735){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__52746 = cljs.core.keyword_identical_QMARK_;
var expr__52747 = k__4481__auto__;
if(cljs.core.truth_((pred__52746.cljs$core$IFn$_invoke$arity$2 ? pred__52746.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expected","expected",1583670997),expr__52747) : pred__52746.call(null,new cljs.core.Keyword(null,"expected","expected",1583670997),expr__52747)))){
return (new matcher_combinators.core.EqualsSeq(G__52735,self__.__meta,self__.__extmap,null));
} else {
return (new matcher_combinators.core.EqualsSeq(self__.expected,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__52735),null));
}
}));

(matcher_combinators.core.EqualsSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"expected","expected",1583670997),self__.expected,null))], null),self__.__extmap));
}));

(matcher_combinators.core.EqualsSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__52735){
var self__ = this;
var this__4471__auto____$1 = this;
return (new matcher_combinators.core.EqualsSeq(self__.expected,G__52735,self__.__extmap,self__.__hash));
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
matcher_combinators.core.map__GT_EqualsSeq = (function matcher_combinators$core$map__GT_EqualsSeq(G__52739){
var extmap__4512__auto__ = (function (){var G__52749 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__52739,new cljs.core.Keyword(null,"expected","expected",1583670997));
if(cljs.core.record_QMARK_(G__52739)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__52749);
} else {
return G__52749;
}
})();
return (new matcher_combinators.core.EqualsSeq(new cljs.core.Keyword(null,"expected","expected",1583670997).cljs$core$IFn$_invoke$arity$1(G__52739),null,cljs.core.not_empty(extmap__4512__auto__),null));
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (w,p__52750){
var map__52751 = p__52750;
var map__52751__$1 = cljs.core.__destructure_map(map__52751);
var weight = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52751__$1,new cljs.core.Keyword("matcher-combinators.result","weight","matcher-combinators.result/weight",837269218));
return (w + weight);
}),(0),cljs.core.map.cljs$core$IFn$_invoke$arity$3(matcher_combinators.core.match,matchers,elements));
});
matcher_combinators.core.matches_in_any_order_QMARK_ = (function matcher_combinators$core$matches_in_any_order_QMARK_(unmatched,elements,subset_QMARK_,matching){
while(true){
if(((cljs.core.empty_QMARK_(unmatched)) || (cljs.core.empty_QMARK_(elements)))){
var matched_QMARK_ = matcher_combinators.core.matched_successfully_QMARK_(unmatched,elements,subset_QMARK_);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"matched?","matched?",-297965314),matched_QMARK_,new cljs.core.Keyword(null,"unmatched","unmatched",1628955483),unmatched,new cljs.core.Keyword(null,"weight","weight",-1262796205),(cljs.core.truth_(matched_QMARK_)?(0):matcher_combinators.core.residual_matching_weight(unmatched,elements)),new cljs.core.Keyword(null,"elements","elements",657646735),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,matching),elements),new cljs.core.Keyword(null,"matched","matched",-975207164),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,matching)], null);
} else {
var vec__52754 = unmatched;
var seq__52755 = cljs.core.seq(vec__52754);
var first__52756 = cljs.core.first(seq__52755);
var seq__52755__$1 = cljs.core.next(seq__52755);
var matcher = first__52756;
var unmatched_rest = seq__52755__$1;
var matching_elem = matcher_combinators.utils.find_first(((function (unmatched,elements,subset_QMARK_,matching,vec__52754,seq__52755,first__52756,seq__52755__$1,matcher,unmatched_rest){
return (function (p1__52752_SHARP_){
return matcher_combinators.core.indicates_match_QMARK_(matcher_combinators.core.match(matcher,p1__52752_SHARP_));
});})(unmatched,elements,subset_QMARK_,matching,vec__52754,seq__52755,first__52756,seq__52755__$1,matcher,unmatched_rest))
,elements);
if((matching_elem == null)){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"matched?","matched?",-297965314),false,new cljs.core.Keyword(null,"unmatched","unmatched",1628955483),unmatched,new cljs.core.Keyword(null,"weight","weight",-1262796205),matcher_combinators.core.residual_matching_weight(unmatched,elements),new cljs.core.Keyword(null,"elements","elements",657646735),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,matching),elements),new cljs.core.Keyword(null,"matched","matched",-975207164),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,matching)], null);
} else {
var G__52955 = unmatched_rest;
var G__52956 = matcher_combinators.utils.remove_first(((function (unmatched,elements,subset_QMARK_,matching,vec__52754,seq__52755,first__52756,seq__52755__$1,matcher,unmatched_rest,matching_elem){
return (function (p1__52753_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(matching_elem,p1__52753_SHARP_);
});})(unmatched,elements,subset_QMARK_,matching,vec__52754,seq__52755,first__52756,seq__52755__$1,matcher,unmatched_rest,matching_elem))
,elements);
var G__52957 = subset_QMARK_;
var G__52958 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(matching,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [matcher,matching_elem], null));
unmatched = G__52955;
elements = G__52956;
subset_QMARK_ = G__52957;
matching = G__52958;
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
var map__52757 = matcher_combinators.core.matches_in_any_order_QMARK_(matchers,elements,subset_QMARK_,cljs.core.PersistentVector.EMPTY);
var map__52757__$1 = cljs.core.__destructure_map(map__52757);
var result = map__52757__$1;
var matched_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52757__$1,new cljs.core.Keyword(null,"matched?","matched?",-297965314));
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
var vec__52758 = (cljs.core.truth_(subset_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [expected,elements], null):matcher_combinators.core.normalize_inputs_length(expected,elements));
var matchers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52758,(0),null);
var elements__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52758,(1),null);
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

(matcher_combinators.core.InAnyOrder.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k52762,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__52766 = k52762;
var G__52766__$1 = (((G__52766 instanceof cljs.core.Keyword))?G__52766.fqn:null);
switch (G__52766__$1) {
case "expected":
return self__.expected;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k52762,else__4475__auto__);

}
}));

(matcher_combinators.core.InAnyOrder.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__52767){
var vec__52768 = p__52767;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52768,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52768,(1),null);
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

(matcher_combinators.core.InAnyOrder.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__52761){
var self__ = this;
var G__52761__$1 = this;
return (new cljs.core.RecordIter((0),G__52761__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"expected","expected",1583670997)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(matcher_combinators.core.InAnyOrder.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this52763,other52764){
var self__ = this;
var this52763__$1 = this;
return (((!((other52764 == null)))) && ((((this52763__$1.constructor === other52764.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52763__$1.expected,other52764.expected)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52763__$1.__extmap,other52764.__extmap)))))));
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

(matcher_combinators.core.InAnyOrder.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k52762){
var self__ = this;
var this__4479__auto____$1 = this;
var G__52771 = k52762;
var G__52771__$1 = (((G__52771 instanceof cljs.core.Keyword))?G__52771.fqn:null);
switch (G__52771__$1) {
case "expected":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k52762);

}
}));

(matcher_combinators.core.InAnyOrder.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__52761){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__52772 = cljs.core.keyword_identical_QMARK_;
var expr__52773 = k__4481__auto__;
if(cljs.core.truth_((pred__52772.cljs$core$IFn$_invoke$arity$2 ? pred__52772.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expected","expected",1583670997),expr__52773) : pred__52772.call(null,new cljs.core.Keyword(null,"expected","expected",1583670997),expr__52773)))){
return (new matcher_combinators.core.InAnyOrder(G__52761,self__.__meta,self__.__extmap,null));
} else {
return (new matcher_combinators.core.InAnyOrder(self__.expected,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__52761),null));
}
}));

(matcher_combinators.core.InAnyOrder.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"expected","expected",1583670997),self__.expected,null))], null),self__.__extmap));
}));

(matcher_combinators.core.InAnyOrder.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__52761){
var self__ = this;
var this__4471__auto____$1 = this;
return (new matcher_combinators.core.InAnyOrder(self__.expected,G__52761,self__.__extmap,self__.__hash));
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
matcher_combinators.core.map__GT_InAnyOrder = (function matcher_combinators$core$map__GT_InAnyOrder(G__52765){
var extmap__4512__auto__ = (function (){var G__52775 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__52765,new cljs.core.Keyword(null,"expected","expected",1583670997));
if(cljs.core.record_QMARK_(G__52765)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__52775);
} else {
return G__52775;
}
})();
return (new matcher_combinators.core.InAnyOrder(new cljs.core.Keyword(null,"expected","expected",1583670997).cljs$core$IFn$_invoke$arity$1(G__52765),null,cljs.core.not_empty(extmap__4512__auto__),null));
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

(matcher_combinators.core.SetEquals.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k52778,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__52782 = k52778;
var G__52782__$1 = (((G__52782 instanceof cljs.core.Keyword))?G__52782.fqn:null);
switch (G__52782__$1) {
case "expected":
return self__.expected;

break;
case "accept-seq?":
return self__.accept_seq_QMARK_;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k52778,else__4475__auto__);

}
}));

(matcher_combinators.core.SetEquals.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__52783){
var vec__52784 = p__52783;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52784,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52784,(1),null);
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
var temp__5751__auto__ = (cljs.core.truth_(self__.accept_seq_QMARK_)?matcher_combinators.core.validate_input.cljs$core$IFn$_invoke$arity$6(self__.expected,actual,(function (p1__52776_SHARP_){
return ((matcher_combinators.core.matchable_set_QMARK_(p1__52776_SHARP_)) || (cljs.core.sequential_QMARK_(p1__52776_SHARP_)));
}),matcher_combinators.core.matchable_set_QMARK_,this$__$1.matcher_combinators$core$Matcher$_base_name$arity$1(null),"set or sequential"):matcher_combinators.core.validate_input.cljs$core$IFn$_invoke$arity$5(self__.expected,actual,matcher_combinators.core.matchable_set_QMARK_,this$__$1.matcher_combinators$core$Matcher$_base_name$arity$1(null),"set"));
if(cljs.core.truth_(temp__5751__auto__)){
var issue = temp__5751__auto__;
return issue;
} else {
var map__52787 = matcher_combinators.core.match_any_order(cljs.core.vec(self__.expected),cljs.core.vec(actual),false);
var map__52787__$1 = cljs.core.__destructure_map(map__52787);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52787__$1,new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52787__$1,new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494));
var weight = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52787__$1,new cljs.core.Keyword("matcher-combinators.result","weight","matcher-combinators.result/weight",837269218));
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

(matcher_combinators.core.SetEquals.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__52777){
var self__ = this;
var G__52777__$1 = this;
return (new cljs.core.RecordIter((0),G__52777__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"accept-seq?","accept-seq?",1979939591)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(matcher_combinators.core.SetEquals.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this52779,other52780){
var self__ = this;
var this52779__$1 = this;
return (((!((other52780 == null)))) && ((((this52779__$1.constructor === other52780.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52779__$1.expected,other52780.expected)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52779__$1.accept_seq_QMARK_,other52780.accept_seq_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52779__$1.__extmap,other52780.__extmap)))))))));
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

(matcher_combinators.core.SetEquals.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k52778){
var self__ = this;
var this__4479__auto____$1 = this;
var G__52788 = k52778;
var G__52788__$1 = (((G__52788 instanceof cljs.core.Keyword))?G__52788.fqn:null);
switch (G__52788__$1) {
case "expected":
case "accept-seq?":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k52778);

}
}));

(matcher_combinators.core.SetEquals.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__52777){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__52789 = cljs.core.keyword_identical_QMARK_;
var expr__52790 = k__4481__auto__;
if(cljs.core.truth_((pred__52789.cljs$core$IFn$_invoke$arity$2 ? pred__52789.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expected","expected",1583670997),expr__52790) : pred__52789.call(null,new cljs.core.Keyword(null,"expected","expected",1583670997),expr__52790)))){
return (new matcher_combinators.core.SetEquals(G__52777,self__.accept_seq_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__52789.cljs$core$IFn$_invoke$arity$2 ? pred__52789.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"accept-seq?","accept-seq?",1979939591),expr__52790) : pred__52789.call(null,new cljs.core.Keyword(null,"accept-seq?","accept-seq?",1979939591),expr__52790)))){
return (new matcher_combinators.core.SetEquals(self__.expected,G__52777,self__.__meta,self__.__extmap,null));
} else {
return (new matcher_combinators.core.SetEquals(self__.expected,self__.accept_seq_QMARK_,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__52777),null));
}
}
}));

(matcher_combinators.core.SetEquals.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"expected","expected",1583670997),self__.expected,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"accept-seq?","accept-seq?",1979939591),self__.accept_seq_QMARK_,null))], null),self__.__extmap));
}));

(matcher_combinators.core.SetEquals.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__52777){
var self__ = this;
var this__4471__auto____$1 = this;
return (new matcher_combinators.core.SetEquals(self__.expected,self__.accept_seq_QMARK_,G__52777,self__.__extmap,self__.__hash));
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
matcher_combinators.core.map__GT_SetEquals = (function matcher_combinators$core$map__GT_SetEquals(G__52781){
var extmap__4512__auto__ = (function (){var G__52792 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__52781,new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"accept-seq?","accept-seq?",1979939591)], 0));
if(cljs.core.record_QMARK_(G__52781)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__52792);
} else {
return G__52792;
}
})();
return (new matcher_combinators.core.SetEquals(new cljs.core.Keyword(null,"expected","expected",1583670997).cljs$core$IFn$_invoke$arity$1(G__52781),new cljs.core.Keyword(null,"accept-seq?","accept-seq?",1979939591).cljs$core$IFn$_invoke$arity$1(G__52781),null,cljs.core.not_empty(extmap__4512__auto__),null));
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

(matcher_combinators.core.Prefix.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k52794,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__52798 = k52794;
var G__52798__$1 = (((G__52798 instanceof cljs.core.Keyword))?G__52798.fqn:null);
switch (G__52798__$1) {
case "expected":
return self__.expected;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k52794,else__4475__auto__);

}
}));

(matcher_combinators.core.Prefix.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__52799){
var vec__52800 = p__52799;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52800,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52800,(1),null);
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

(matcher_combinators.core.Prefix.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__52793){
var self__ = this;
var G__52793__$1 = this;
return (new cljs.core.RecordIter((0),G__52793__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"expected","expected",1583670997)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(matcher_combinators.core.Prefix.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this52795,other52796){
var self__ = this;
var this52795__$1 = this;
return (((!((other52796 == null)))) && ((((this52795__$1.constructor === other52796.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52795__$1.expected,other52796.expected)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52795__$1.__extmap,other52796.__extmap)))))));
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

(matcher_combinators.core.Prefix.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k52794){
var self__ = this;
var this__4479__auto____$1 = this;
var G__52803 = k52794;
var G__52803__$1 = (((G__52803 instanceof cljs.core.Keyword))?G__52803.fqn:null);
switch (G__52803__$1) {
case "expected":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k52794);

}
}));

(matcher_combinators.core.Prefix.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__52793){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__52804 = cljs.core.keyword_identical_QMARK_;
var expr__52805 = k__4481__auto__;
if(cljs.core.truth_((pred__52804.cljs$core$IFn$_invoke$arity$2 ? pred__52804.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expected","expected",1583670997),expr__52805) : pred__52804.call(null,new cljs.core.Keyword(null,"expected","expected",1583670997),expr__52805)))){
return (new matcher_combinators.core.Prefix(G__52793,self__.__meta,self__.__extmap,null));
} else {
return (new matcher_combinators.core.Prefix(self__.expected,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__52793),null));
}
}));

(matcher_combinators.core.Prefix.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"expected","expected",1583670997),self__.expected,null))], null),self__.__extmap));
}));

(matcher_combinators.core.Prefix.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__52793){
var self__ = this;
var this__4471__auto____$1 = this;
return (new matcher_combinators.core.Prefix(self__.expected,G__52793,self__.__extmap,self__.__hash));
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
matcher_combinators.core.map__GT_Prefix = (function matcher_combinators$core$map__GT_Prefix(G__52797){
var extmap__4512__auto__ = (function (){var G__52807 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__52797,new cljs.core.Keyword(null,"expected","expected",1583670997));
if(cljs.core.record_QMARK_(G__52797)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__52807);
} else {
return G__52807;
}
})();
return (new matcher_combinators.core.Prefix(new cljs.core.Keyword(null,"expected","expected",1583670997).cljs$core$IFn$_invoke$arity$1(G__52797),null,cljs.core.not_empty(extmap__4512__auto__),null));
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

(matcher_combinators.core.EmbedsSeq.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k52809,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__52813 = k52809;
var G__52813__$1 = (((G__52813 instanceof cljs.core.Keyword))?G__52813.fqn:null);
switch (G__52813__$1) {
case "expected":
return self__.expected;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k52809,else__4475__auto__);

}
}));

(matcher_combinators.core.EmbedsSeq.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__52814){
var vec__52815 = p__52814;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52815,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52815,(1),null);
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

(matcher_combinators.core.EmbedsSeq.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__52808){
var self__ = this;
var G__52808__$1 = this;
return (new cljs.core.RecordIter((0),G__52808__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"expected","expected",1583670997)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(matcher_combinators.core.EmbedsSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this52810,other52811){
var self__ = this;
var this52810__$1 = this;
return (((!((other52811 == null)))) && ((((this52810__$1.constructor === other52811.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52810__$1.expected,other52811.expected)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52810__$1.__extmap,other52811.__extmap)))))));
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

(matcher_combinators.core.EmbedsSeq.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k52809){
var self__ = this;
var this__4479__auto____$1 = this;
var G__52818 = k52809;
var G__52818__$1 = (((G__52818 instanceof cljs.core.Keyword))?G__52818.fqn:null);
switch (G__52818__$1) {
case "expected":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k52809);

}
}));

(matcher_combinators.core.EmbedsSeq.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__52808){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__52819 = cljs.core.keyword_identical_QMARK_;
var expr__52820 = k__4481__auto__;
if(cljs.core.truth_((pred__52819.cljs$core$IFn$_invoke$arity$2 ? pred__52819.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expected","expected",1583670997),expr__52820) : pred__52819.call(null,new cljs.core.Keyword(null,"expected","expected",1583670997),expr__52820)))){
return (new matcher_combinators.core.EmbedsSeq(G__52808,self__.__meta,self__.__extmap,null));
} else {
return (new matcher_combinators.core.EmbedsSeq(self__.expected,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__52808),null));
}
}));

(matcher_combinators.core.EmbedsSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"expected","expected",1583670997),self__.expected,null))], null),self__.__extmap));
}));

(matcher_combinators.core.EmbedsSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__52808){
var self__ = this;
var this__4471__auto____$1 = this;
return (new matcher_combinators.core.EmbedsSeq(self__.expected,G__52808,self__.__extmap,self__.__hash));
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
matcher_combinators.core.map__GT_EmbedsSeq = (function matcher_combinators$core$map__GT_EmbedsSeq(G__52812){
var extmap__4512__auto__ = (function (){var G__52822 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__52812,new cljs.core.Keyword(null,"expected","expected",1583670997));
if(cljs.core.record_QMARK_(G__52812)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__52822);
} else {
return G__52822;
}
})();
return (new matcher_combinators.core.EmbedsSeq(new cljs.core.Keyword(null,"expected","expected",1583670997).cljs$core$IFn$_invoke$arity$1(G__52812),null,cljs.core.not_empty(extmap__4512__auto__),null));
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

(matcher_combinators.core.SetEmbeds.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k52825,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__52829 = k52825;
var G__52829__$1 = (((G__52829 instanceof cljs.core.Keyword))?G__52829.fqn:null);
switch (G__52829__$1) {
case "expected":
return self__.expected;

break;
case "accept-seq?":
return self__.accept_seq_QMARK_;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k52825,else__4475__auto__);

}
}));

(matcher_combinators.core.SetEmbeds.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__52830){
var vec__52831 = p__52830;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52831,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52831,(1),null);
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
var temp__5751__auto__ = (cljs.core.truth_(self__.accept_seq_QMARK_)?matcher_combinators.core.validate_input.cljs$core$IFn$_invoke$arity$6(self__.expected,actual,(function (p1__52823_SHARP_){
return ((matcher_combinators.core.matchable_set_QMARK_(p1__52823_SHARP_)) || (cljs.core.sequential_QMARK_(p1__52823_SHARP_)));
}),matcher_combinators.core.matchable_set_QMARK_,this$__$1.matcher_combinators$core$Matcher$_base_name$arity$1(null),"set or sequential"):matcher_combinators.core.validate_input.cljs$core$IFn$_invoke$arity$5(self__.expected,actual,matcher_combinators.core.matchable_set_QMARK_,this$__$1.matcher_combinators$core$Matcher$_base_name$arity$1(null),"set"));
if(cljs.core.truth_(temp__5751__auto__)){
var issue = temp__5751__auto__;
return issue;
} else {
var map__52834 = matcher_combinators.core.match_any_order(cljs.core.vec(self__.expected),cljs.core.vec(actual),true);
var map__52834__$1 = cljs.core.__destructure_map(map__52834);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52834__$1,new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52834__$1,new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494));
var weight = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52834__$1,new cljs.core.Keyword("matcher-combinators.result","weight","matcher-combinators.result/weight",837269218));
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

(matcher_combinators.core.SetEmbeds.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__52824){
var self__ = this;
var G__52824__$1 = this;
return (new cljs.core.RecordIter((0),G__52824__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"accept-seq?","accept-seq?",1979939591)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(matcher_combinators.core.SetEmbeds.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this52826,other52827){
var self__ = this;
var this52826__$1 = this;
return (((!((other52827 == null)))) && ((((this52826__$1.constructor === other52827.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52826__$1.expected,other52827.expected)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52826__$1.accept_seq_QMARK_,other52827.accept_seq_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52826__$1.__extmap,other52827.__extmap)))))))));
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

(matcher_combinators.core.SetEmbeds.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k52825){
var self__ = this;
var this__4479__auto____$1 = this;
var G__52835 = k52825;
var G__52835__$1 = (((G__52835 instanceof cljs.core.Keyword))?G__52835.fqn:null);
switch (G__52835__$1) {
case "expected":
case "accept-seq?":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k52825);

}
}));

(matcher_combinators.core.SetEmbeds.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__52824){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__52836 = cljs.core.keyword_identical_QMARK_;
var expr__52837 = k__4481__auto__;
if(cljs.core.truth_((pred__52836.cljs$core$IFn$_invoke$arity$2 ? pred__52836.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expected","expected",1583670997),expr__52837) : pred__52836.call(null,new cljs.core.Keyword(null,"expected","expected",1583670997),expr__52837)))){
return (new matcher_combinators.core.SetEmbeds(G__52824,self__.accept_seq_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__52836.cljs$core$IFn$_invoke$arity$2 ? pred__52836.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"accept-seq?","accept-seq?",1979939591),expr__52837) : pred__52836.call(null,new cljs.core.Keyword(null,"accept-seq?","accept-seq?",1979939591),expr__52837)))){
return (new matcher_combinators.core.SetEmbeds(self__.expected,G__52824,self__.__meta,self__.__extmap,null));
} else {
return (new matcher_combinators.core.SetEmbeds(self__.expected,self__.accept_seq_QMARK_,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__52824),null));
}
}
}));

(matcher_combinators.core.SetEmbeds.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"expected","expected",1583670997),self__.expected,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"accept-seq?","accept-seq?",1979939591),self__.accept_seq_QMARK_,null))], null),self__.__extmap));
}));

(matcher_combinators.core.SetEmbeds.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__52824){
var self__ = this;
var this__4471__auto____$1 = this;
return (new matcher_combinators.core.SetEmbeds(self__.expected,self__.accept_seq_QMARK_,G__52824,self__.__extmap,self__.__hash));
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
matcher_combinators.core.map__GT_SetEmbeds = (function matcher_combinators$core$map__GT_SetEmbeds(G__52828){
var extmap__4512__auto__ = (function (){var G__52839 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__52828,new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"accept-seq?","accept-seq?",1979939591)], 0));
if(cljs.core.record_QMARK_(G__52828)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__52839);
} else {
return G__52839;
}
})();
return (new matcher_combinators.core.SetEmbeds(new cljs.core.Keyword(null,"expected","expected",1583670997).cljs$core$IFn$_invoke$arity$1(G__52828),new cljs.core.Keyword(null,"accept-seq?","accept-seq?",1979939591).cljs$core$IFn$_invoke$arity$1(G__52828),null,cljs.core.not_empty(extmap__4512__auto__),null));
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

(matcher_combinators.core.PredMatcher.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k52841,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__52845 = k52841;
var G__52845__$1 = (((G__52845 instanceof cljs.core.Keyword))?G__52845.fqn:null);
switch (G__52845__$1) {
case "pred":
return self__.pred;

break;
case "desc":
return self__.desc;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k52841,else__4475__auto__);

}
}));

(matcher_combinators.core.PredMatcher.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__52846){
var vec__52847 = p__52846;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52847,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52847,(1),null);
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

(matcher_combinators.core.PredMatcher.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__52840){
var self__ = this;
var G__52840__$1 = this;
return (new cljs.core.RecordIter((0),G__52840__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pred","pred",1927423397),new cljs.core.Keyword(null,"desc","desc",2093485764)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(matcher_combinators.core.PredMatcher.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this52842,other52843){
var self__ = this;
var this52842__$1 = this;
return (((!((other52843 == null)))) && ((((this52842__$1.constructor === other52843.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52842__$1.pred,other52843.pred)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52842__$1.desc,other52843.desc)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52842__$1.__extmap,other52843.__extmap)))))))));
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

(matcher_combinators.core.PredMatcher.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k52841){
var self__ = this;
var this__4479__auto____$1 = this;
var G__52850 = k52841;
var G__52850__$1 = (((G__52850 instanceof cljs.core.Keyword))?G__52850.fqn:null);
switch (G__52850__$1) {
case "pred":
case "desc":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k52841);

}
}));

(matcher_combinators.core.PredMatcher.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__52840){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__52851 = cljs.core.keyword_identical_QMARK_;
var expr__52852 = k__4481__auto__;
if(cljs.core.truth_((pred__52851.cljs$core$IFn$_invoke$arity$2 ? pred__52851.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pred","pred",1927423397),expr__52852) : pred__52851.call(null,new cljs.core.Keyword(null,"pred","pred",1927423397),expr__52852)))){
return (new matcher_combinators.core.PredMatcher(G__52840,self__.desc,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__52851.cljs$core$IFn$_invoke$arity$2 ? pred__52851.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"desc","desc",2093485764),expr__52852) : pred__52851.call(null,new cljs.core.Keyword(null,"desc","desc",2093485764),expr__52852)))){
return (new matcher_combinators.core.PredMatcher(self__.pred,G__52840,self__.__meta,self__.__extmap,null));
} else {
return (new matcher_combinators.core.PredMatcher(self__.pred,self__.desc,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__52840),null));
}
}
}));

(matcher_combinators.core.PredMatcher.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"pred","pred",1927423397),self__.pred,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"desc","desc",2093485764),self__.desc,null))], null),self__.__extmap));
}));

(matcher_combinators.core.PredMatcher.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__52840){
var self__ = this;
var this__4471__auto____$1 = this;
return (new matcher_combinators.core.PredMatcher(self__.pred,self__.desc,G__52840,self__.__extmap,self__.__hash));
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
matcher_combinators.core.map__GT_PredMatcher = (function matcher_combinators$core$map__GT_PredMatcher(G__52844){
var extmap__4512__auto__ = (function (){var G__52854 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__52844,new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"desc","desc",2093485764)], 0));
if(cljs.core.record_QMARK_(G__52844)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__52854);
} else {
return G__52854;
}
})();
return (new matcher_combinators.core.PredMatcher(new cljs.core.Keyword(null,"pred","pred",1927423397).cljs$core$IFn$_invoke$arity$1(G__52844),new cljs.core.Keyword(null,"desc","desc",2093485764).cljs$core$IFn$_invoke$arity$1(G__52844),null,cljs.core.not_empty(extmap__4512__auto__),null));
});

matcher_combinators.core.printable_matcher = (function matcher_combinators$core$printable_matcher(matcher){
try{var temp__5751__auto__ = matcher_combinators.core._base_name(matcher);
if(cljs.core.truth_(temp__5751__auto__)){
var n = temp__5751__auto__;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(n),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"expected","expected",1583670997).cljs$core$IFn$_invoke$arity$1(matcher),null,(1),null)))));
} else {
return matcher;
}
}catch (e52855){if((e52855 instanceof Error)){
var _e = e52855;
return matcher;
} else {
throw e52855;

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

(matcher_combinators.core.Mismatcher.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k52857,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__52861 = k52857;
var G__52861__$1 = (((G__52861 instanceof cljs.core.Keyword))?G__52861.fqn:null);
switch (G__52861__$1) {
case "expected":
return self__.expected;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k52857,else__4475__auto__);

}
}));

(matcher_combinators.core.Mismatcher.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__52862){
var vec__52863 = p__52862;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52863,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52863,(1),null);
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
var map__52866 = matcher_combinators.core.match(self__.expected,actual);
var map__52866__$1 = cljs.core.__destructure_map(map__52866);
var result = map__52866__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52866__$1,new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109));
var weight = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52866__$1,new cljs.core.Keyword("matcher-combinators.result","weight","matcher-combinators.result/weight",837269218));
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

(matcher_combinators.core.Mismatcher.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__52856){
var self__ = this;
var G__52856__$1 = this;
return (new cljs.core.RecordIter((0),G__52856__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"expected","expected",1583670997)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(matcher_combinators.core.Mismatcher.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this52858,other52859){
var self__ = this;
var this52858__$1 = this;
return (((!((other52859 == null)))) && ((((this52858__$1.constructor === other52859.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52858__$1.expected,other52859.expected)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52858__$1.__extmap,other52859.__extmap)))))));
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

(matcher_combinators.core.Mismatcher.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k52857){
var self__ = this;
var this__4479__auto____$1 = this;
var G__52867 = k52857;
var G__52867__$1 = (((G__52867 instanceof cljs.core.Keyword))?G__52867.fqn:null);
switch (G__52867__$1) {
case "expected":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k52857);

}
}));

(matcher_combinators.core.Mismatcher.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__52856){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__52868 = cljs.core.keyword_identical_QMARK_;
var expr__52869 = k__4481__auto__;
if(cljs.core.truth_((pred__52868.cljs$core$IFn$_invoke$arity$2 ? pred__52868.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expected","expected",1583670997),expr__52869) : pred__52868.call(null,new cljs.core.Keyword(null,"expected","expected",1583670997),expr__52869)))){
return (new matcher_combinators.core.Mismatcher(G__52856,self__.__meta,self__.__extmap,null));
} else {
return (new matcher_combinators.core.Mismatcher(self__.expected,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__52856),null));
}
}));

(matcher_combinators.core.Mismatcher.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"expected","expected",1583670997),self__.expected,null))], null),self__.__extmap));
}));

(matcher_combinators.core.Mismatcher.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__52856){
var self__ = this;
var this__4471__auto____$1 = this;
return (new matcher_combinators.core.Mismatcher(self__.expected,G__52856,self__.__extmap,self__.__hash));
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
matcher_combinators.core.map__GT_Mismatcher = (function matcher_combinators$core$map__GT_Mismatcher(G__52860){
var extmap__4512__auto__ = (function (){var G__52871 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__52860,new cljs.core.Keyword(null,"expected","expected",1583670997));
if(cljs.core.record_QMARK_(G__52860)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__52871);
} else {
return G__52871;
}
})();
return (new matcher_combinators.core.Mismatcher(new cljs.core.Keyword(null,"expected","expected",1583670997).cljs$core$IFn$_invoke$arity$1(G__52860),null,cljs.core.not_empty(extmap__4512__auto__),null));
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

(matcher_combinators.core.CljsUriEquals.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k52873,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__52877 = k52873;
var G__52877__$1 = (((G__52877 instanceof cljs.core.Keyword))?G__52877.fqn:null);
switch (G__52877__$1) {
case "expected":
return self__.expected;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k52873,else__4475__auto__);

}
}));

(matcher_combinators.core.CljsUriEquals.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__52878){
var vec__52879 = p__52878;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52879,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52879,(1),null);
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

(matcher_combinators.core.CljsUriEquals.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__52872){
var self__ = this;
var G__52872__$1 = this;
return (new cljs.core.RecordIter((0),G__52872__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"expected","expected",1583670997)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(matcher_combinators.core.CljsUriEquals.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this52874,other52875){
var self__ = this;
var this52874__$1 = this;
return (((!((other52875 == null)))) && ((((this52874__$1.constructor === other52875.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52874__$1.expected,other52875.expected)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52874__$1.__extmap,other52875.__extmap)))))));
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

(matcher_combinators.core.CljsUriEquals.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k52873){
var self__ = this;
var this__4479__auto____$1 = this;
var G__52882 = k52873;
var G__52882__$1 = (((G__52882 instanceof cljs.core.Keyword))?G__52882.fqn:null);
switch (G__52882__$1) {
case "expected":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k52873);

}
}));

(matcher_combinators.core.CljsUriEquals.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__52872){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__52883 = cljs.core.keyword_identical_QMARK_;
var expr__52884 = k__4481__auto__;
if(cljs.core.truth_((pred__52883.cljs$core$IFn$_invoke$arity$2 ? pred__52883.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expected","expected",1583670997),expr__52884) : pred__52883.call(null,new cljs.core.Keyword(null,"expected","expected",1583670997),expr__52884)))){
return (new matcher_combinators.core.CljsUriEquals(G__52872,self__.__meta,self__.__extmap,null));
} else {
return (new matcher_combinators.core.CljsUriEquals(self__.expected,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__52872),null));
}
}));

(matcher_combinators.core.CljsUriEquals.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"expected","expected",1583670997),self__.expected,null))], null),self__.__extmap));
}));

(matcher_combinators.core.CljsUriEquals.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__52872){
var self__ = this;
var this__4471__auto____$1 = this;
return (new matcher_combinators.core.CljsUriEquals(self__.expected,G__52872,self__.__extmap,self__.__hash));
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
matcher_combinators.core.map__GT_CljsUriEquals = (function matcher_combinators$core$map__GT_CljsUriEquals(G__52876){
var extmap__4512__auto__ = (function (){var G__52886 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__52876,new cljs.core.Keyword(null,"expected","expected",1583670997));
if(cljs.core.record_QMARK_(G__52876)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__52886);
} else {
return G__52886;
}
})();
return (new matcher_combinators.core.CljsUriEquals(new cljs.core.Keyword(null,"expected","expected",1583670997).cljs$core$IFn$_invoke$arity$1(G__52876),null,cljs.core.not_empty(extmap__4512__auto__),null));
});


//# sourceMappingURL=matcher_combinators.core.js.map
