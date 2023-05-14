goog.provide('matcher_combinators.model');

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
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
matcher_combinators.model.Mismatch = (function (expected,actual,__meta,__extmap,__hash){
this.expected = expected;
this.actual = actual;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(matcher_combinators.model.Mismatch.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(matcher_combinators.model.Mismatch.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k51768,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__51776 = k51768;
var G__51776__$1 = (((G__51776 instanceof cljs.core.Keyword))?G__51776.fqn:null);
switch (G__51776__$1) {
case "expected":
return self__.expected;

break;
case "actual":
return self__.actual;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k51768,else__4475__auto__);

}
}));

(matcher_combinators.model.Mismatch.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__51777){
var vec__51778 = p__51777;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51778,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51778,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(matcher_combinators.model.Mismatch.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#matcher-combinators.model.Mismatch{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"expected","expected",1583670997),self__.expected],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"actual","actual",107306363),self__.actual],null))], null),self__.__extmap));
}));

(matcher_combinators.model.Mismatch.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__51767){
var self__ = this;
var G__51767__$1 = this;
return (new cljs.core.RecordIter((0),G__51767__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(matcher_combinators.model.Mismatch.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(matcher_combinators.model.Mismatch.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new matcher_combinators.model.Mismatch(self__.expected,self__.actual,self__.__meta,self__.__extmap,self__.__hash));
}));

(matcher_combinators.model.Mismatch.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(matcher_combinators.model.Mismatch.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (coll__4469__auto__){
return (1652762392 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
})(this__4468__auto____$1);
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(matcher_combinators.model.Mismatch.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this51769,other51770){
var self__ = this;
var this51769__$1 = this;
return (((!((other51770 == null)))) && ((((this51769__$1.constructor === other51770.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51769__$1.expected,other51770.expected)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51769__$1.actual,other51770.actual)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51769__$1.__extmap,other51770.__extmap)))))))));
}));

(matcher_combinators.model.Mismatch.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"expected","expected",1583670997),null,new cljs.core.Keyword(null,"actual","actual",107306363),null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new matcher_combinators.model.Mismatch(self__.expected,self__.actual,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(matcher_combinators.model.Mismatch.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k51768){
var self__ = this;
var this__4479__auto____$1 = this;
var G__51803 = k51768;
var G__51803__$1 = (((G__51803 instanceof cljs.core.Keyword))?G__51803.fqn:null);
switch (G__51803__$1) {
case "expected":
case "actual":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k51768);

}
}));

(matcher_combinators.model.Mismatch.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__51767){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__51805 = cljs.core.keyword_identical_QMARK_;
var expr__51806 = k__4481__auto__;
if(cljs.core.truth_((pred__51805.cljs$core$IFn$_invoke$arity$2 ? pred__51805.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expected","expected",1583670997),expr__51806) : pred__51805.call(null,new cljs.core.Keyword(null,"expected","expected",1583670997),expr__51806)))){
return (new matcher_combinators.model.Mismatch(G__51767,self__.actual,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51805.cljs$core$IFn$_invoke$arity$2 ? pred__51805.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"actual","actual",107306363),expr__51806) : pred__51805.call(null,new cljs.core.Keyword(null,"actual","actual",107306363),expr__51806)))){
return (new matcher_combinators.model.Mismatch(self__.expected,G__51767,self__.__meta,self__.__extmap,null));
} else {
return (new matcher_combinators.model.Mismatch(self__.expected,self__.actual,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__51767),null));
}
}
}));

(matcher_combinators.model.Mismatch.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"expected","expected",1583670997),self__.expected,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"actual","actual",107306363),self__.actual,null))], null),self__.__extmap));
}));

(matcher_combinators.model.Mismatch.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__51767){
var self__ = this;
var this__4471__auto____$1 = this;
return (new matcher_combinators.model.Mismatch(self__.expected,self__.actual,G__51767,self__.__extmap,self__.__hash));
}));

(matcher_combinators.model.Mismatch.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4478__auto__,(0)),cljs.core._nth(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(matcher_combinators.model.Mismatch.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expected","expected",-1070764772,null),new cljs.core.Symbol(null,"actual","actual",1747837890,null)], null);
}));

(matcher_combinators.model.Mismatch.cljs$lang$type = true);

(matcher_combinators.model.Mismatch.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"matcher-combinators.model/Mismatch",null,(1),null));
}));

(matcher_combinators.model.Mismatch.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"matcher-combinators.model/Mismatch");
}));

/**
 * Positional factory function for matcher-combinators.model/Mismatch.
 */
matcher_combinators.model.__GT_Mismatch = (function matcher_combinators$model$__GT_Mismatch(expected,actual){
return (new matcher_combinators.model.Mismatch(expected,actual,null,null,null));
});

/**
 * Factory function for matcher-combinators.model/Mismatch, taking a map of keywords to field values.
 */
matcher_combinators.model.map__GT_Mismatch = (function matcher_combinators$model$map__GT_Mismatch(G__51772){
var extmap__4512__auto__ = (function (){var G__51823 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__51772,new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"actual","actual",107306363)], 0));
if(cljs.core.record_QMARK_(G__51772)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__51823);
} else {
return G__51823;
}
})();
return (new matcher_combinators.model.Mismatch(new cljs.core.Keyword(null,"expected","expected",1583670997).cljs$core$IFn$_invoke$arity$1(G__51772),new cljs.core.Keyword(null,"actual","actual",107306363).cljs$core$IFn$_invoke$arity$1(G__51772),null,cljs.core.not_empty(extmap__4512__auto__),null));
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
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
matcher_combinators.model.ExpectedMismatch = (function (expected,actual,__meta,__extmap,__hash){
this.expected = expected;
this.actual = actual;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(matcher_combinators.model.ExpectedMismatch.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(matcher_combinators.model.ExpectedMismatch.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k51825,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__51829 = k51825;
var G__51829__$1 = (((G__51829 instanceof cljs.core.Keyword))?G__51829.fqn:null);
switch (G__51829__$1) {
case "expected":
return self__.expected;

break;
case "actual":
return self__.actual;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k51825,else__4475__auto__);

}
}));

(matcher_combinators.model.ExpectedMismatch.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__51838){
var vec__51839 = p__51838;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51839,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51839,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(matcher_combinators.model.ExpectedMismatch.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#matcher-combinators.model.ExpectedMismatch{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"expected","expected",1583670997),self__.expected],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"actual","actual",107306363),self__.actual],null))], null),self__.__extmap));
}));

(matcher_combinators.model.ExpectedMismatch.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__51824){
var self__ = this;
var G__51824__$1 = this;
return (new cljs.core.RecordIter((0),G__51824__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(matcher_combinators.model.ExpectedMismatch.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(matcher_combinators.model.ExpectedMismatch.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new matcher_combinators.model.ExpectedMismatch(self__.expected,self__.actual,self__.__meta,self__.__extmap,self__.__hash));
}));

(matcher_combinators.model.ExpectedMismatch.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(matcher_combinators.model.ExpectedMismatch.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (coll__4469__auto__){
return (-725495299 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
})(this__4468__auto____$1);
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(matcher_combinators.model.ExpectedMismatch.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this51826,other51827){
var self__ = this;
var this51826__$1 = this;
return (((!((other51827 == null)))) && ((((this51826__$1.constructor === other51827.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51826__$1.expected,other51827.expected)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51826__$1.actual,other51827.actual)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51826__$1.__extmap,other51827.__extmap)))))))));
}));

(matcher_combinators.model.ExpectedMismatch.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"expected","expected",1583670997),null,new cljs.core.Keyword(null,"actual","actual",107306363),null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new matcher_combinators.model.ExpectedMismatch(self__.expected,self__.actual,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(matcher_combinators.model.ExpectedMismatch.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k51825){
var self__ = this;
var this__4479__auto____$1 = this;
var G__51850 = k51825;
var G__51850__$1 = (((G__51850 instanceof cljs.core.Keyword))?G__51850.fqn:null);
switch (G__51850__$1) {
case "expected":
case "actual":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k51825);

}
}));

(matcher_combinators.model.ExpectedMismatch.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__51824){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__51852 = cljs.core.keyword_identical_QMARK_;
var expr__51853 = k__4481__auto__;
if(cljs.core.truth_((pred__51852.cljs$core$IFn$_invoke$arity$2 ? pred__51852.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expected","expected",1583670997),expr__51853) : pred__51852.call(null,new cljs.core.Keyword(null,"expected","expected",1583670997),expr__51853)))){
return (new matcher_combinators.model.ExpectedMismatch(G__51824,self__.actual,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51852.cljs$core$IFn$_invoke$arity$2 ? pred__51852.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"actual","actual",107306363),expr__51853) : pred__51852.call(null,new cljs.core.Keyword(null,"actual","actual",107306363),expr__51853)))){
return (new matcher_combinators.model.ExpectedMismatch(self__.expected,G__51824,self__.__meta,self__.__extmap,null));
} else {
return (new matcher_combinators.model.ExpectedMismatch(self__.expected,self__.actual,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__51824),null));
}
}
}));

(matcher_combinators.model.ExpectedMismatch.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"expected","expected",1583670997),self__.expected,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"actual","actual",107306363),self__.actual,null))], null),self__.__extmap));
}));

(matcher_combinators.model.ExpectedMismatch.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__51824){
var self__ = this;
var this__4471__auto____$1 = this;
return (new matcher_combinators.model.ExpectedMismatch(self__.expected,self__.actual,G__51824,self__.__extmap,self__.__hash));
}));

(matcher_combinators.model.ExpectedMismatch.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4478__auto__,(0)),cljs.core._nth(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(matcher_combinators.model.ExpectedMismatch.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expected","expected",-1070764772,null),new cljs.core.Symbol(null,"actual","actual",1747837890,null)], null);
}));

(matcher_combinators.model.ExpectedMismatch.cljs$lang$type = true);

(matcher_combinators.model.ExpectedMismatch.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"matcher-combinators.model/ExpectedMismatch",null,(1),null));
}));

(matcher_combinators.model.ExpectedMismatch.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"matcher-combinators.model/ExpectedMismatch");
}));

/**
 * Positional factory function for matcher-combinators.model/ExpectedMismatch.
 */
matcher_combinators.model.__GT_ExpectedMismatch = (function matcher_combinators$model$__GT_ExpectedMismatch(expected,actual){
return (new matcher_combinators.model.ExpectedMismatch(expected,actual,null,null,null));
});

/**
 * Factory function for matcher-combinators.model/ExpectedMismatch, taking a map of keywords to field values.
 */
matcher_combinators.model.map__GT_ExpectedMismatch = (function matcher_combinators$model$map__GT_ExpectedMismatch(G__51828){
var extmap__4512__auto__ = (function (){var G__51855 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__51828,new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"actual","actual",107306363)], 0));
if(cljs.core.record_QMARK_(G__51828)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__51855);
} else {
return G__51855;
}
})();
return (new matcher_combinators.model.ExpectedMismatch(new cljs.core.Keyword(null,"expected","expected",1583670997).cljs$core$IFn$_invoke$arity$1(G__51828),new cljs.core.Keyword(null,"actual","actual",107306363).cljs$core$IFn$_invoke$arity$1(G__51828),null,cljs.core.not_empty(extmap__4512__auto__),null));
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
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
matcher_combinators.model.Missing = (function (expected,__meta,__extmap,__hash){
this.expected = expected;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(matcher_combinators.model.Missing.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(matcher_combinators.model.Missing.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k51860,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__51868 = k51860;
var G__51868__$1 = (((G__51868 instanceof cljs.core.Keyword))?G__51868.fqn:null);
switch (G__51868__$1) {
case "expected":
return self__.expected;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k51860,else__4475__auto__);

}
}));

(matcher_combinators.model.Missing.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__51872){
var vec__51873 = p__51872;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51873,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51873,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(matcher_combinators.model.Missing.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#matcher-combinators.model.Missing{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"expected","expected",1583670997),self__.expected],null))], null),self__.__extmap));
}));

(matcher_combinators.model.Missing.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__51859){
var self__ = this;
var G__51859__$1 = this;
return (new cljs.core.RecordIter((0),G__51859__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"expected","expected",1583670997)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(matcher_combinators.model.Missing.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(matcher_combinators.model.Missing.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new matcher_combinators.model.Missing(self__.expected,self__.__meta,self__.__extmap,self__.__hash));
}));

(matcher_combinators.model.Missing.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(matcher_combinators.model.Missing.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (coll__4469__auto__){
return (1991936284 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
})(this__4468__auto____$1);
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(matcher_combinators.model.Missing.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this51861,other51862){
var self__ = this;
var this51861__$1 = this;
return (((!((other51862 == null)))) && ((((this51861__$1.constructor === other51862.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51861__$1.expected,other51862.expected)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51861__$1.__extmap,other51862.__extmap)))))));
}));

(matcher_combinators.model.Missing.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"expected","expected",1583670997),null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new matcher_combinators.model.Missing(self__.expected,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(matcher_combinators.model.Missing.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k51860){
var self__ = this;
var this__4479__auto____$1 = this;
var G__51897 = k51860;
var G__51897__$1 = (((G__51897 instanceof cljs.core.Keyword))?G__51897.fqn:null);
switch (G__51897__$1) {
case "expected":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k51860);

}
}));

(matcher_combinators.model.Missing.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__51859){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__51904 = cljs.core.keyword_identical_QMARK_;
var expr__51905 = k__4481__auto__;
if(cljs.core.truth_((pred__51904.cljs$core$IFn$_invoke$arity$2 ? pred__51904.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expected","expected",1583670997),expr__51905) : pred__51904.call(null,new cljs.core.Keyword(null,"expected","expected",1583670997),expr__51905)))){
return (new matcher_combinators.model.Missing(G__51859,self__.__meta,self__.__extmap,null));
} else {
return (new matcher_combinators.model.Missing(self__.expected,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__51859),null));
}
}));

(matcher_combinators.model.Missing.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"expected","expected",1583670997),self__.expected,null))], null),self__.__extmap));
}));

(matcher_combinators.model.Missing.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__51859){
var self__ = this;
var this__4471__auto____$1 = this;
return (new matcher_combinators.model.Missing(self__.expected,G__51859,self__.__extmap,self__.__hash));
}));

(matcher_combinators.model.Missing.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4478__auto__,(0)),cljs.core._nth(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(matcher_combinators.model.Missing.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expected","expected",-1070764772,null)], null);
}));

(matcher_combinators.model.Missing.cljs$lang$type = true);

(matcher_combinators.model.Missing.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"matcher-combinators.model/Missing",null,(1),null));
}));

(matcher_combinators.model.Missing.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"matcher-combinators.model/Missing");
}));

/**
 * Positional factory function for matcher-combinators.model/Missing.
 */
matcher_combinators.model.__GT_Missing = (function matcher_combinators$model$__GT_Missing(expected){
return (new matcher_combinators.model.Missing(expected,null,null,null));
});

/**
 * Factory function for matcher-combinators.model/Missing, taking a map of keywords to field values.
 */
matcher_combinators.model.map__GT_Missing = (function matcher_combinators$model$map__GT_Missing(G__51863){
var extmap__4512__auto__ = (function (){var G__51917 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__51863,new cljs.core.Keyword(null,"expected","expected",1583670997));
if(cljs.core.record_QMARK_(G__51863)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__51917);
} else {
return G__51917;
}
})();
return (new matcher_combinators.model.Missing(new cljs.core.Keyword(null,"expected","expected",1583670997).cljs$core$IFn$_invoke$arity$1(G__51863),null,cljs.core.not_empty(extmap__4512__auto__),null));
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
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
matcher_combinators.model.Unexpected = (function (actual,__meta,__extmap,__hash){
this.actual = actual;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(matcher_combinators.model.Unexpected.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(matcher_combinators.model.Unexpected.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k51922,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__51935 = k51922;
var G__51935__$1 = (((G__51935 instanceof cljs.core.Keyword))?G__51935.fqn:null);
switch (G__51935__$1) {
case "actual":
return self__.actual;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k51922,else__4475__auto__);

}
}));

(matcher_combinators.model.Unexpected.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__51936){
var vec__51941 = p__51936;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51941,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51941,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(matcher_combinators.model.Unexpected.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#matcher-combinators.model.Unexpected{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"actual","actual",107306363),self__.actual],null))], null),self__.__extmap));
}));

(matcher_combinators.model.Unexpected.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__51921){
var self__ = this;
var G__51921__$1 = this;
return (new cljs.core.RecordIter((0),G__51921__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"actual","actual",107306363)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(matcher_combinators.model.Unexpected.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(matcher_combinators.model.Unexpected.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new matcher_combinators.model.Unexpected(self__.actual,self__.__meta,self__.__extmap,self__.__hash));
}));

(matcher_combinators.model.Unexpected.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(matcher_combinators.model.Unexpected.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (coll__4469__auto__){
return (-110839811 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
})(this__4468__auto____$1);
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(matcher_combinators.model.Unexpected.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this51923,other51924){
var self__ = this;
var this51923__$1 = this;
return (((!((other51924 == null)))) && ((((this51923__$1.constructor === other51924.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51923__$1.actual,other51924.actual)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51923__$1.__extmap,other51924.__extmap)))))));
}));

(matcher_combinators.model.Unexpected.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"actual","actual",107306363),null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new matcher_combinators.model.Unexpected(self__.actual,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(matcher_combinators.model.Unexpected.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k51922){
var self__ = this;
var this__4479__auto____$1 = this;
var G__51990 = k51922;
var G__51990__$1 = (((G__51990 instanceof cljs.core.Keyword))?G__51990.fqn:null);
switch (G__51990__$1) {
case "actual":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k51922);

}
}));

(matcher_combinators.model.Unexpected.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__51921){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__51991 = cljs.core.keyword_identical_QMARK_;
var expr__51992 = k__4481__auto__;
if(cljs.core.truth_((pred__51991.cljs$core$IFn$_invoke$arity$2 ? pred__51991.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"actual","actual",107306363),expr__51992) : pred__51991.call(null,new cljs.core.Keyword(null,"actual","actual",107306363),expr__51992)))){
return (new matcher_combinators.model.Unexpected(G__51921,self__.__meta,self__.__extmap,null));
} else {
return (new matcher_combinators.model.Unexpected(self__.actual,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__51921),null));
}
}));

(matcher_combinators.model.Unexpected.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"actual","actual",107306363),self__.actual,null))], null),self__.__extmap));
}));

(matcher_combinators.model.Unexpected.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__51921){
var self__ = this;
var this__4471__auto____$1 = this;
return (new matcher_combinators.model.Unexpected(self__.actual,G__51921,self__.__extmap,self__.__hash));
}));

(matcher_combinators.model.Unexpected.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4478__auto__,(0)),cljs.core._nth(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(matcher_combinators.model.Unexpected.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"actual","actual",1747837890,null)], null);
}));

(matcher_combinators.model.Unexpected.cljs$lang$type = true);

(matcher_combinators.model.Unexpected.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"matcher-combinators.model/Unexpected",null,(1),null));
}));

(matcher_combinators.model.Unexpected.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"matcher-combinators.model/Unexpected");
}));

/**
 * Positional factory function for matcher-combinators.model/Unexpected.
 */
matcher_combinators.model.__GT_Unexpected = (function matcher_combinators$model$__GT_Unexpected(actual){
return (new matcher_combinators.model.Unexpected(actual,null,null,null));
});

/**
 * Factory function for matcher-combinators.model/Unexpected, taking a map of keywords to field values.
 */
matcher_combinators.model.map__GT_Unexpected = (function matcher_combinators$model$map__GT_Unexpected(G__51925){
var extmap__4512__auto__ = (function (){var G__52019 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__51925,new cljs.core.Keyword(null,"actual","actual",107306363));
if(cljs.core.record_QMARK_(G__51925)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__52019);
} else {
return G__52019;
}
})();
return (new matcher_combinators.model.Unexpected(new cljs.core.Keyword(null,"actual","actual",107306363).cljs$core$IFn$_invoke$arity$1(G__51925),null,cljs.core.not_empty(extmap__4512__auto__),null));
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
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
matcher_combinators.model.InvalidMatcherType = (function (provided,expected_type_msg,__meta,__extmap,__hash){
this.provided = provided;
this.expected_type_msg = expected_type_msg;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(matcher_combinators.model.InvalidMatcherType.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(matcher_combinators.model.InvalidMatcherType.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k52032,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__52178 = k52032;
var G__52178__$1 = (((G__52178 instanceof cljs.core.Keyword))?G__52178.fqn:null);
switch (G__52178__$1) {
case "provided":
return self__.provided;

break;
case "expected-type-msg":
return self__.expected_type_msg;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k52032,else__4475__auto__);

}
}));

(matcher_combinators.model.InvalidMatcherType.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__52183){
var vec__52184 = p__52183;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52184,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52184,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(matcher_combinators.model.InvalidMatcherType.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#matcher-combinators.model.InvalidMatcherType{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"provided","provided",-1493091365),self__.provided],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"expected-type-msg","expected-type-msg",-1708159764),self__.expected_type_msg],null))], null),self__.__extmap));
}));

(matcher_combinators.model.InvalidMatcherType.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__52031){
var self__ = this;
var G__52031__$1 = this;
return (new cljs.core.RecordIter((0),G__52031__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"provided","provided",-1493091365),new cljs.core.Keyword(null,"expected-type-msg","expected-type-msg",-1708159764)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(matcher_combinators.model.InvalidMatcherType.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(matcher_combinators.model.InvalidMatcherType.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new matcher_combinators.model.InvalidMatcherType(self__.provided,self__.expected_type_msg,self__.__meta,self__.__extmap,self__.__hash));
}));

(matcher_combinators.model.InvalidMatcherType.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(matcher_combinators.model.InvalidMatcherType.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (coll__4469__auto__){
return (-1077608286 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
})(this__4468__auto____$1);
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(matcher_combinators.model.InvalidMatcherType.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this52033,other52034){
var self__ = this;
var this52033__$1 = this;
return (((!((other52034 == null)))) && ((((this52033__$1.constructor === other52034.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52033__$1.provided,other52034.provided)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52033__$1.expected_type_msg,other52034.expected_type_msg)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52033__$1.__extmap,other52034.__extmap)))))))));
}));

(matcher_combinators.model.InvalidMatcherType.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"expected-type-msg","expected-type-msg",-1708159764),null,new cljs.core.Keyword(null,"provided","provided",-1493091365),null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new matcher_combinators.model.InvalidMatcherType(self__.provided,self__.expected_type_msg,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(matcher_combinators.model.InvalidMatcherType.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k52032){
var self__ = this;
var this__4479__auto____$1 = this;
var G__52216 = k52032;
var G__52216__$1 = (((G__52216 instanceof cljs.core.Keyword))?G__52216.fqn:null);
switch (G__52216__$1) {
case "provided":
case "expected-type-msg":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k52032);

}
}));

(matcher_combinators.model.InvalidMatcherType.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__52031){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__52222 = cljs.core.keyword_identical_QMARK_;
var expr__52223 = k__4481__auto__;
if(cljs.core.truth_((pred__52222.cljs$core$IFn$_invoke$arity$2 ? pred__52222.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"provided","provided",-1493091365),expr__52223) : pred__52222.call(null,new cljs.core.Keyword(null,"provided","provided",-1493091365),expr__52223)))){
return (new matcher_combinators.model.InvalidMatcherType(G__52031,self__.expected_type_msg,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__52222.cljs$core$IFn$_invoke$arity$2 ? pred__52222.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expected-type-msg","expected-type-msg",-1708159764),expr__52223) : pred__52222.call(null,new cljs.core.Keyword(null,"expected-type-msg","expected-type-msg",-1708159764),expr__52223)))){
return (new matcher_combinators.model.InvalidMatcherType(self__.provided,G__52031,self__.__meta,self__.__extmap,null));
} else {
return (new matcher_combinators.model.InvalidMatcherType(self__.provided,self__.expected_type_msg,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__52031),null));
}
}
}));

(matcher_combinators.model.InvalidMatcherType.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"provided","provided",-1493091365),self__.provided,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"expected-type-msg","expected-type-msg",-1708159764),self__.expected_type_msg,null))], null),self__.__extmap));
}));

(matcher_combinators.model.InvalidMatcherType.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__52031){
var self__ = this;
var this__4471__auto____$1 = this;
return (new matcher_combinators.model.InvalidMatcherType(self__.provided,self__.expected_type_msg,G__52031,self__.__extmap,self__.__hash));
}));

(matcher_combinators.model.InvalidMatcherType.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4478__auto__,(0)),cljs.core._nth(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(matcher_combinators.model.InvalidMatcherType.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"provided","provided",147440162,null),new cljs.core.Symbol(null,"expected-type-msg","expected-type-msg",-67628237,null)], null);
}));

(matcher_combinators.model.InvalidMatcherType.cljs$lang$type = true);

(matcher_combinators.model.InvalidMatcherType.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"matcher-combinators.model/InvalidMatcherType",null,(1),null));
}));

(matcher_combinators.model.InvalidMatcherType.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"matcher-combinators.model/InvalidMatcherType");
}));

/**
 * Positional factory function for matcher-combinators.model/InvalidMatcherType.
 */
matcher_combinators.model.__GT_InvalidMatcherType = (function matcher_combinators$model$__GT_InvalidMatcherType(provided,expected_type_msg){
return (new matcher_combinators.model.InvalidMatcherType(provided,expected_type_msg,null,null,null));
});

/**
 * Factory function for matcher-combinators.model/InvalidMatcherType, taking a map of keywords to field values.
 */
matcher_combinators.model.map__GT_InvalidMatcherType = (function matcher_combinators$model$map__GT_InvalidMatcherType(G__52040){
var extmap__4512__auto__ = (function (){var G__52294 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__52040,new cljs.core.Keyword(null,"provided","provided",-1493091365),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"expected-type-msg","expected-type-msg",-1708159764)], 0));
if(cljs.core.record_QMARK_(G__52040)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__52294);
} else {
return G__52294;
}
})();
return (new matcher_combinators.model.InvalidMatcherType(new cljs.core.Keyword(null,"provided","provided",-1493091365).cljs$core$IFn$_invoke$arity$1(G__52040),new cljs.core.Keyword(null,"expected-type-msg","expected-type-msg",-1708159764).cljs$core$IFn$_invoke$arity$1(G__52040),null,cljs.core.not_empty(extmap__4512__auto__),null));
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
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
matcher_combinators.model.InvalidMatcherContext = (function (message,__meta,__extmap,__hash){
this.message = message;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(matcher_combinators.model.InvalidMatcherContext.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(matcher_combinators.model.InvalidMatcherContext.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k52296,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__52302 = k52296;
var G__52302__$1 = (((G__52302 instanceof cljs.core.Keyword))?G__52302.fqn:null);
switch (G__52302__$1) {
case "message":
return self__.message;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k52296,else__4475__auto__);

}
}));

(matcher_combinators.model.InvalidMatcherContext.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__52310){
var vec__52311 = p__52310;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52311,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52311,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(matcher_combinators.model.InvalidMatcherContext.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#matcher-combinators.model.InvalidMatcherContext{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"message","message",-406056002),self__.message],null))], null),self__.__extmap));
}));

(matcher_combinators.model.InvalidMatcherContext.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__52295){
var self__ = this;
var G__52295__$1 = this;
return (new cljs.core.RecordIter((0),G__52295__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(matcher_combinators.model.InvalidMatcherContext.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(matcher_combinators.model.InvalidMatcherContext.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new matcher_combinators.model.InvalidMatcherContext(self__.message,self__.__meta,self__.__extmap,self__.__hash));
}));

(matcher_combinators.model.InvalidMatcherContext.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(matcher_combinators.model.InvalidMatcherContext.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (coll__4469__auto__){
return (-1611115898 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
})(this__4468__auto____$1);
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(matcher_combinators.model.InvalidMatcherContext.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this52297,other52298){
var self__ = this;
var this52297__$1 = this;
return (((!((other52298 == null)))) && ((((this52297__$1.constructor === other52298.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52297__$1.message,other52298.message)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52297__$1.__extmap,other52298.__extmap)))))));
}));

(matcher_combinators.model.InvalidMatcherContext.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new matcher_combinators.model.InvalidMatcherContext(self__.message,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(matcher_combinators.model.InvalidMatcherContext.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k52296){
var self__ = this;
var this__4479__auto____$1 = this;
var G__52332 = k52296;
var G__52332__$1 = (((G__52332 instanceof cljs.core.Keyword))?G__52332.fqn:null);
switch (G__52332__$1) {
case "message":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k52296);

}
}));

(matcher_combinators.model.InvalidMatcherContext.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__52295){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__52333 = cljs.core.keyword_identical_QMARK_;
var expr__52334 = k__4481__auto__;
if(cljs.core.truth_((pred__52333.cljs$core$IFn$_invoke$arity$2 ? pred__52333.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"message","message",-406056002),expr__52334) : pred__52333.call(null,new cljs.core.Keyword(null,"message","message",-406056002),expr__52334)))){
return (new matcher_combinators.model.InvalidMatcherContext(G__52295,self__.__meta,self__.__extmap,null));
} else {
return (new matcher_combinators.model.InvalidMatcherContext(self__.message,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__52295),null));
}
}));

(matcher_combinators.model.InvalidMatcherContext.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"message","message",-406056002),self__.message,null))], null),self__.__extmap));
}));

(matcher_combinators.model.InvalidMatcherContext.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__52295){
var self__ = this;
var this__4471__auto____$1 = this;
return (new matcher_combinators.model.InvalidMatcherContext(self__.message,G__52295,self__.__extmap,self__.__hash));
}));

(matcher_combinators.model.InvalidMatcherContext.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4478__auto__,(0)),cljs.core._nth(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(matcher_combinators.model.InvalidMatcherContext.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null);
}));

(matcher_combinators.model.InvalidMatcherContext.cljs$lang$type = true);

(matcher_combinators.model.InvalidMatcherContext.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"matcher-combinators.model/InvalidMatcherContext",null,(1),null));
}));

(matcher_combinators.model.InvalidMatcherContext.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"matcher-combinators.model/InvalidMatcherContext");
}));

/**
 * Positional factory function for matcher-combinators.model/InvalidMatcherContext.
 */
matcher_combinators.model.__GT_InvalidMatcherContext = (function matcher_combinators$model$__GT_InvalidMatcherContext(message){
return (new matcher_combinators.model.InvalidMatcherContext(message,null,null,null));
});

/**
 * Factory function for matcher-combinators.model/InvalidMatcherContext, taking a map of keywords to field values.
 */
matcher_combinators.model.map__GT_InvalidMatcherContext = (function matcher_combinators$model$map__GT_InvalidMatcherContext(G__52299){
var extmap__4512__auto__ = (function (){var G__52348 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__52299,new cljs.core.Keyword(null,"message","message",-406056002));
if(cljs.core.record_QMARK_(G__52299)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__52348);
} else {
return G__52348;
}
})();
return (new matcher_combinators.model.InvalidMatcherContext(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(G__52299),null,cljs.core.not_empty(extmap__4512__auto__),null));
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
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
matcher_combinators.model.TypeMismatch = (function (expected,actual,__meta,__extmap,__hash){
this.expected = expected;
this.actual = actual;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(matcher_combinators.model.TypeMismatch.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(matcher_combinators.model.TypeMismatch.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k52350,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__52358 = k52350;
var G__52358__$1 = (((G__52358 instanceof cljs.core.Keyword))?G__52358.fqn:null);
switch (G__52358__$1) {
case "expected":
return self__.expected;

break;
case "actual":
return self__.actual;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k52350,else__4475__auto__);

}
}));

(matcher_combinators.model.TypeMismatch.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__52359){
var vec__52360 = p__52359;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52360,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52360,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(matcher_combinators.model.TypeMismatch.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#matcher-combinators.model.TypeMismatch{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"expected","expected",1583670997),self__.expected],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"actual","actual",107306363),self__.actual],null))], null),self__.__extmap));
}));

(matcher_combinators.model.TypeMismatch.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__52349){
var self__ = this;
var G__52349__$1 = this;
return (new cljs.core.RecordIter((0),G__52349__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(matcher_combinators.model.TypeMismatch.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(matcher_combinators.model.TypeMismatch.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new matcher_combinators.model.TypeMismatch(self__.expected,self__.actual,self__.__meta,self__.__extmap,self__.__hash));
}));

(matcher_combinators.model.TypeMismatch.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(matcher_combinators.model.TypeMismatch.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (coll__4469__auto__){
return (1505331111 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
})(this__4468__auto____$1);
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(matcher_combinators.model.TypeMismatch.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this52351,other52352){
var self__ = this;
var this52351__$1 = this;
return (((!((other52352 == null)))) && ((((this52351__$1.constructor === other52352.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52351__$1.expected,other52352.expected)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52351__$1.actual,other52352.actual)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52351__$1.__extmap,other52352.__extmap)))))))));
}));

(matcher_combinators.model.TypeMismatch.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"expected","expected",1583670997),null,new cljs.core.Keyword(null,"actual","actual",107306363),null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new matcher_combinators.model.TypeMismatch(self__.expected,self__.actual,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(matcher_combinators.model.TypeMismatch.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k52350){
var self__ = this;
var this__4479__auto____$1 = this;
var G__52503 = k52350;
var G__52503__$1 = (((G__52503 instanceof cljs.core.Keyword))?G__52503.fqn:null);
switch (G__52503__$1) {
case "expected":
case "actual":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k52350);

}
}));

(matcher_combinators.model.TypeMismatch.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__52349){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__52504 = cljs.core.keyword_identical_QMARK_;
var expr__52505 = k__4481__auto__;
if(cljs.core.truth_((pred__52504.cljs$core$IFn$_invoke$arity$2 ? pred__52504.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expected","expected",1583670997),expr__52505) : pred__52504.call(null,new cljs.core.Keyword(null,"expected","expected",1583670997),expr__52505)))){
return (new matcher_combinators.model.TypeMismatch(G__52349,self__.actual,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__52504.cljs$core$IFn$_invoke$arity$2 ? pred__52504.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"actual","actual",107306363),expr__52505) : pred__52504.call(null,new cljs.core.Keyword(null,"actual","actual",107306363),expr__52505)))){
return (new matcher_combinators.model.TypeMismatch(self__.expected,G__52349,self__.__meta,self__.__extmap,null));
} else {
return (new matcher_combinators.model.TypeMismatch(self__.expected,self__.actual,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__52349),null));
}
}
}));

(matcher_combinators.model.TypeMismatch.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"expected","expected",1583670997),self__.expected,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"actual","actual",107306363),self__.actual,null))], null),self__.__extmap));
}));

(matcher_combinators.model.TypeMismatch.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__52349){
var self__ = this;
var this__4471__auto____$1 = this;
return (new matcher_combinators.model.TypeMismatch(self__.expected,self__.actual,G__52349,self__.__extmap,self__.__hash));
}));

(matcher_combinators.model.TypeMismatch.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4478__auto__,(0)),cljs.core._nth(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(matcher_combinators.model.TypeMismatch.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expected","expected",-1070764772,null),new cljs.core.Symbol(null,"actual","actual",1747837890,null)], null);
}));

(matcher_combinators.model.TypeMismatch.cljs$lang$type = true);

(matcher_combinators.model.TypeMismatch.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"matcher-combinators.model/TypeMismatch",null,(1),null));
}));

(matcher_combinators.model.TypeMismatch.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"matcher-combinators.model/TypeMismatch");
}));

/**
 * Positional factory function for matcher-combinators.model/TypeMismatch.
 */
matcher_combinators.model.__GT_TypeMismatch = (function matcher_combinators$model$__GT_TypeMismatch(expected,actual){
return (new matcher_combinators.model.TypeMismatch(expected,actual,null,null,null));
});

/**
 * Factory function for matcher-combinators.model/TypeMismatch, taking a map of keywords to field values.
 */
matcher_combinators.model.map__GT_TypeMismatch = (function matcher_combinators$model$map__GT_TypeMismatch(G__52353){
var extmap__4512__auto__ = (function (){var G__52508 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__52353,new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"actual","actual",107306363)], 0));
if(cljs.core.record_QMARK_(G__52353)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__52508);
} else {
return G__52508;
}
})();
return (new matcher_combinators.model.TypeMismatch(new cljs.core.Keyword(null,"expected","expected",1583670997).cljs$core$IFn$_invoke$arity$1(G__52353),new cljs.core.Keyword(null,"actual","actual",107306363).cljs$core$IFn$_invoke$arity$1(G__52353),null,cljs.core.not_empty(extmap__4512__auto__),null));
});


//# sourceMappingURL=matcher_combinators.model.js.map
