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

(matcher_combinators.model.Mismatch.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k147444,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__147448 = k147444;
var G__147448__$1 = (((G__147448 instanceof cljs.core.Keyword))?G__147448.fqn:null);
switch (G__147448__$1) {
case "expected":
return self__.expected;

break;
case "actual":
return self__.actual;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k147444,else__4475__auto__);

}
}));

(matcher_combinators.model.Mismatch.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__147449){
var vec__147450 = p__147449;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__147450,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__147450,(1),null);
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

(matcher_combinators.model.Mismatch.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__147443){
var self__ = this;
var G__147443__$1 = this;
return (new cljs.core.RecordIter((0),G__147443__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(matcher_combinators.model.Mismatch.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this147445,other147446){
var self__ = this;
var this147445__$1 = this;
return (((!((other147446 == null)))) && ((((this147445__$1.constructor === other147446.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this147445__$1.expected,other147446.expected)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this147445__$1.actual,other147446.actual)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this147445__$1.__extmap,other147446.__extmap)))))))));
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

(matcher_combinators.model.Mismatch.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k147444){
var self__ = this;
var this__4479__auto____$1 = this;
var G__147454 = k147444;
var G__147454__$1 = (((G__147454 instanceof cljs.core.Keyword))?G__147454.fqn:null);
switch (G__147454__$1) {
case "expected":
case "actual":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k147444);

}
}));

(matcher_combinators.model.Mismatch.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__147443){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__147455 = cljs.core.keyword_identical_QMARK_;
var expr__147456 = k__4481__auto__;
if(cljs.core.truth_((pred__147455.cljs$core$IFn$_invoke$arity$2 ? pred__147455.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expected","expected",1583670997),expr__147456) : pred__147455.call(null,new cljs.core.Keyword(null,"expected","expected",1583670997),expr__147456)))){
return (new matcher_combinators.model.Mismatch(G__147443,self__.actual,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__147455.cljs$core$IFn$_invoke$arity$2 ? pred__147455.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"actual","actual",107306363),expr__147456) : pred__147455.call(null,new cljs.core.Keyword(null,"actual","actual",107306363),expr__147456)))){
return (new matcher_combinators.model.Mismatch(self__.expected,G__147443,self__.__meta,self__.__extmap,null));
} else {
return (new matcher_combinators.model.Mismatch(self__.expected,self__.actual,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__147443),null));
}
}
}));

(matcher_combinators.model.Mismatch.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"expected","expected",1583670997),self__.expected,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"actual","actual",107306363),self__.actual,null))], null),self__.__extmap));
}));

(matcher_combinators.model.Mismatch.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__147443){
var self__ = this;
var this__4471__auto____$1 = this;
return (new matcher_combinators.model.Mismatch(self__.expected,self__.actual,G__147443,self__.__extmap,self__.__hash));
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
matcher_combinators.model.map__GT_Mismatch = (function matcher_combinators$model$map__GT_Mismatch(G__147447){
var extmap__4512__auto__ = (function (){var G__147461 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__147447,new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"actual","actual",107306363)], 0));
if(cljs.core.record_QMARK_(G__147447)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__147461);
} else {
return G__147461;
}
})();
return (new matcher_combinators.model.Mismatch(new cljs.core.Keyword(null,"expected","expected",1583670997).cljs$core$IFn$_invoke$arity$1(G__147447),new cljs.core.Keyword(null,"actual","actual",107306363).cljs$core$IFn$_invoke$arity$1(G__147447),null,cljs.core.not_empty(extmap__4512__auto__),null));
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

(matcher_combinators.model.ExpectedMismatch.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k147464,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__147469 = k147464;
var G__147469__$1 = (((G__147469 instanceof cljs.core.Keyword))?G__147469.fqn:null);
switch (G__147469__$1) {
case "expected":
return self__.expected;

break;
case "actual":
return self__.actual;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k147464,else__4475__auto__);

}
}));

(matcher_combinators.model.ExpectedMismatch.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__147470){
var vec__147471 = p__147470;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__147471,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__147471,(1),null);
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

(matcher_combinators.model.ExpectedMismatch.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__147463){
var self__ = this;
var G__147463__$1 = this;
return (new cljs.core.RecordIter((0),G__147463__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(matcher_combinators.model.ExpectedMismatch.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this147465,other147466){
var self__ = this;
var this147465__$1 = this;
return (((!((other147466 == null)))) && ((((this147465__$1.constructor === other147466.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this147465__$1.expected,other147466.expected)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this147465__$1.actual,other147466.actual)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this147465__$1.__extmap,other147466.__extmap)))))))));
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

(matcher_combinators.model.ExpectedMismatch.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k147464){
var self__ = this;
var this__4479__auto____$1 = this;
var G__147479 = k147464;
var G__147479__$1 = (((G__147479 instanceof cljs.core.Keyword))?G__147479.fqn:null);
switch (G__147479__$1) {
case "expected":
case "actual":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k147464);

}
}));

(matcher_combinators.model.ExpectedMismatch.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__147463){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__147480 = cljs.core.keyword_identical_QMARK_;
var expr__147481 = k__4481__auto__;
if(cljs.core.truth_((pred__147480.cljs$core$IFn$_invoke$arity$2 ? pred__147480.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expected","expected",1583670997),expr__147481) : pred__147480.call(null,new cljs.core.Keyword(null,"expected","expected",1583670997),expr__147481)))){
return (new matcher_combinators.model.ExpectedMismatch(G__147463,self__.actual,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__147480.cljs$core$IFn$_invoke$arity$2 ? pred__147480.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"actual","actual",107306363),expr__147481) : pred__147480.call(null,new cljs.core.Keyword(null,"actual","actual",107306363),expr__147481)))){
return (new matcher_combinators.model.ExpectedMismatch(self__.expected,G__147463,self__.__meta,self__.__extmap,null));
} else {
return (new matcher_combinators.model.ExpectedMismatch(self__.expected,self__.actual,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__147463),null));
}
}
}));

(matcher_combinators.model.ExpectedMismatch.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"expected","expected",1583670997),self__.expected,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"actual","actual",107306363),self__.actual,null))], null),self__.__extmap));
}));

(matcher_combinators.model.ExpectedMismatch.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__147463){
var self__ = this;
var this__4471__auto____$1 = this;
return (new matcher_combinators.model.ExpectedMismatch(self__.expected,self__.actual,G__147463,self__.__extmap,self__.__hash));
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
matcher_combinators.model.map__GT_ExpectedMismatch = (function matcher_combinators$model$map__GT_ExpectedMismatch(G__147467){
var extmap__4512__auto__ = (function (){var G__147486 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__147467,new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"actual","actual",107306363)], 0));
if(cljs.core.record_QMARK_(G__147467)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__147486);
} else {
return G__147486;
}
})();
return (new matcher_combinators.model.ExpectedMismatch(new cljs.core.Keyword(null,"expected","expected",1583670997).cljs$core$IFn$_invoke$arity$1(G__147467),new cljs.core.Keyword(null,"actual","actual",107306363).cljs$core$IFn$_invoke$arity$1(G__147467),null,cljs.core.not_empty(extmap__4512__auto__),null));
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

(matcher_combinators.model.Missing.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k147488,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__147499 = k147488;
var G__147499__$1 = (((G__147499 instanceof cljs.core.Keyword))?G__147499.fqn:null);
switch (G__147499__$1) {
case "expected":
return self__.expected;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k147488,else__4475__auto__);

}
}));

(matcher_combinators.model.Missing.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__147503){
var vec__147504 = p__147503;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__147504,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__147504,(1),null);
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

(matcher_combinators.model.Missing.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__147487){
var self__ = this;
var G__147487__$1 = this;
return (new cljs.core.RecordIter((0),G__147487__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"expected","expected",1583670997)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(matcher_combinators.model.Missing.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this147489,other147490){
var self__ = this;
var this147489__$1 = this;
return (((!((other147490 == null)))) && ((((this147489__$1.constructor === other147490.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this147489__$1.expected,other147490.expected)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this147489__$1.__extmap,other147490.__extmap)))))));
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

(matcher_combinators.model.Missing.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k147488){
var self__ = this;
var this__4479__auto____$1 = this;
var G__147522 = k147488;
var G__147522__$1 = (((G__147522 instanceof cljs.core.Keyword))?G__147522.fqn:null);
switch (G__147522__$1) {
case "expected":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k147488);

}
}));

(matcher_combinators.model.Missing.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__147487){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__147524 = cljs.core.keyword_identical_QMARK_;
var expr__147525 = k__4481__auto__;
if(cljs.core.truth_((pred__147524.cljs$core$IFn$_invoke$arity$2 ? pred__147524.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expected","expected",1583670997),expr__147525) : pred__147524.call(null,new cljs.core.Keyword(null,"expected","expected",1583670997),expr__147525)))){
return (new matcher_combinators.model.Missing(G__147487,self__.__meta,self__.__extmap,null));
} else {
return (new matcher_combinators.model.Missing(self__.expected,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__147487),null));
}
}));

(matcher_combinators.model.Missing.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"expected","expected",1583670997),self__.expected,null))], null),self__.__extmap));
}));

(matcher_combinators.model.Missing.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__147487){
var self__ = this;
var this__4471__auto____$1 = this;
return (new matcher_combinators.model.Missing(self__.expected,G__147487,self__.__extmap,self__.__hash));
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
matcher_combinators.model.map__GT_Missing = (function matcher_combinators$model$map__GT_Missing(G__147493){
var extmap__4512__auto__ = (function (){var G__147534 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__147493,new cljs.core.Keyword(null,"expected","expected",1583670997));
if(cljs.core.record_QMARK_(G__147493)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__147534);
} else {
return G__147534;
}
})();
return (new matcher_combinators.model.Missing(new cljs.core.Keyword(null,"expected","expected",1583670997).cljs$core$IFn$_invoke$arity$1(G__147493),null,cljs.core.not_empty(extmap__4512__auto__),null));
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

(matcher_combinators.model.Unexpected.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k147536,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__147543 = k147536;
var G__147543__$1 = (((G__147543 instanceof cljs.core.Keyword))?G__147543.fqn:null);
switch (G__147543__$1) {
case "actual":
return self__.actual;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k147536,else__4475__auto__);

}
}));

(matcher_combinators.model.Unexpected.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__147544){
var vec__147545 = p__147544;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__147545,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__147545,(1),null);
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

(matcher_combinators.model.Unexpected.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__147535){
var self__ = this;
var G__147535__$1 = this;
return (new cljs.core.RecordIter((0),G__147535__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"actual","actual",107306363)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(matcher_combinators.model.Unexpected.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this147537,other147538){
var self__ = this;
var this147537__$1 = this;
return (((!((other147538 == null)))) && ((((this147537__$1.constructor === other147538.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this147537__$1.actual,other147538.actual)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this147537__$1.__extmap,other147538.__extmap)))))));
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

(matcher_combinators.model.Unexpected.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k147536){
var self__ = this;
var this__4479__auto____$1 = this;
var G__147556 = k147536;
var G__147556__$1 = (((G__147556 instanceof cljs.core.Keyword))?G__147556.fqn:null);
switch (G__147556__$1) {
case "actual":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k147536);

}
}));

(matcher_combinators.model.Unexpected.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__147535){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__147557 = cljs.core.keyword_identical_QMARK_;
var expr__147558 = k__4481__auto__;
if(cljs.core.truth_((pred__147557.cljs$core$IFn$_invoke$arity$2 ? pred__147557.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"actual","actual",107306363),expr__147558) : pred__147557.call(null,new cljs.core.Keyword(null,"actual","actual",107306363),expr__147558)))){
return (new matcher_combinators.model.Unexpected(G__147535,self__.__meta,self__.__extmap,null));
} else {
return (new matcher_combinators.model.Unexpected(self__.actual,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__147535),null));
}
}));

(matcher_combinators.model.Unexpected.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"actual","actual",107306363),self__.actual,null))], null),self__.__extmap));
}));

(matcher_combinators.model.Unexpected.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__147535){
var self__ = this;
var this__4471__auto____$1 = this;
return (new matcher_combinators.model.Unexpected(self__.actual,G__147535,self__.__extmap,self__.__hash));
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
matcher_combinators.model.map__GT_Unexpected = (function matcher_combinators$model$map__GT_Unexpected(G__147539){
var extmap__4512__auto__ = (function (){var G__147561 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__147539,new cljs.core.Keyword(null,"actual","actual",107306363));
if(cljs.core.record_QMARK_(G__147539)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__147561);
} else {
return G__147561;
}
})();
return (new matcher_combinators.model.Unexpected(new cljs.core.Keyword(null,"actual","actual",107306363).cljs$core$IFn$_invoke$arity$1(G__147539),null,cljs.core.not_empty(extmap__4512__auto__),null));
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

(matcher_combinators.model.InvalidMatcherType.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k147563,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__147569 = k147563;
var G__147569__$1 = (((G__147569 instanceof cljs.core.Keyword))?G__147569.fqn:null);
switch (G__147569__$1) {
case "provided":
return self__.provided;

break;
case "expected-type-msg":
return self__.expected_type_msg;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k147563,else__4475__auto__);

}
}));

(matcher_combinators.model.InvalidMatcherType.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__147571){
var vec__147574 = p__147571;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__147574,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__147574,(1),null);
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

(matcher_combinators.model.InvalidMatcherType.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__147562){
var self__ = this;
var G__147562__$1 = this;
return (new cljs.core.RecordIter((0),G__147562__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"provided","provided",-1493091365),new cljs.core.Keyword(null,"expected-type-msg","expected-type-msg",-1708159764)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(matcher_combinators.model.InvalidMatcherType.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this147564,other147565){
var self__ = this;
var this147564__$1 = this;
return (((!((other147565 == null)))) && ((((this147564__$1.constructor === other147565.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this147564__$1.provided,other147565.provided)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this147564__$1.expected_type_msg,other147565.expected_type_msg)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this147564__$1.__extmap,other147565.__extmap)))))))));
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

(matcher_combinators.model.InvalidMatcherType.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k147563){
var self__ = this;
var this__4479__auto____$1 = this;
var G__147581 = k147563;
var G__147581__$1 = (((G__147581 instanceof cljs.core.Keyword))?G__147581.fqn:null);
switch (G__147581__$1) {
case "provided":
case "expected-type-msg":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k147563);

}
}));

(matcher_combinators.model.InvalidMatcherType.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__147562){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__147582 = cljs.core.keyword_identical_QMARK_;
var expr__147583 = k__4481__auto__;
if(cljs.core.truth_((pred__147582.cljs$core$IFn$_invoke$arity$2 ? pred__147582.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"provided","provided",-1493091365),expr__147583) : pred__147582.call(null,new cljs.core.Keyword(null,"provided","provided",-1493091365),expr__147583)))){
return (new matcher_combinators.model.InvalidMatcherType(G__147562,self__.expected_type_msg,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__147582.cljs$core$IFn$_invoke$arity$2 ? pred__147582.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expected-type-msg","expected-type-msg",-1708159764),expr__147583) : pred__147582.call(null,new cljs.core.Keyword(null,"expected-type-msg","expected-type-msg",-1708159764),expr__147583)))){
return (new matcher_combinators.model.InvalidMatcherType(self__.provided,G__147562,self__.__meta,self__.__extmap,null));
} else {
return (new matcher_combinators.model.InvalidMatcherType(self__.provided,self__.expected_type_msg,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__147562),null));
}
}
}));

(matcher_combinators.model.InvalidMatcherType.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"provided","provided",-1493091365),self__.provided,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"expected-type-msg","expected-type-msg",-1708159764),self__.expected_type_msg,null))], null),self__.__extmap));
}));

(matcher_combinators.model.InvalidMatcherType.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__147562){
var self__ = this;
var this__4471__auto____$1 = this;
return (new matcher_combinators.model.InvalidMatcherType(self__.provided,self__.expected_type_msg,G__147562,self__.__extmap,self__.__hash));
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
matcher_combinators.model.map__GT_InvalidMatcherType = (function matcher_combinators$model$map__GT_InvalidMatcherType(G__147567){
var extmap__4512__auto__ = (function (){var G__147585 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__147567,new cljs.core.Keyword(null,"provided","provided",-1493091365),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"expected-type-msg","expected-type-msg",-1708159764)], 0));
if(cljs.core.record_QMARK_(G__147567)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__147585);
} else {
return G__147585;
}
})();
return (new matcher_combinators.model.InvalidMatcherType(new cljs.core.Keyword(null,"provided","provided",-1493091365).cljs$core$IFn$_invoke$arity$1(G__147567),new cljs.core.Keyword(null,"expected-type-msg","expected-type-msg",-1708159764).cljs$core$IFn$_invoke$arity$1(G__147567),null,cljs.core.not_empty(extmap__4512__auto__),null));
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

(matcher_combinators.model.InvalidMatcherContext.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k147591,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__147596 = k147591;
var G__147596__$1 = (((G__147596 instanceof cljs.core.Keyword))?G__147596.fqn:null);
switch (G__147596__$1) {
case "message":
return self__.message;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k147591,else__4475__auto__);

}
}));

(matcher_combinators.model.InvalidMatcherContext.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__147597){
var vec__147598 = p__147597;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__147598,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__147598,(1),null);
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

(matcher_combinators.model.InvalidMatcherContext.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__147590){
var self__ = this;
var G__147590__$1 = this;
return (new cljs.core.RecordIter((0),G__147590__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(matcher_combinators.model.InvalidMatcherContext.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this147592,other147593){
var self__ = this;
var this147592__$1 = this;
return (((!((other147593 == null)))) && ((((this147592__$1.constructor === other147593.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this147592__$1.message,other147593.message)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this147592__$1.__extmap,other147593.__extmap)))))));
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

(matcher_combinators.model.InvalidMatcherContext.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k147591){
var self__ = this;
var this__4479__auto____$1 = this;
var G__147611 = k147591;
var G__147611__$1 = (((G__147611 instanceof cljs.core.Keyword))?G__147611.fqn:null);
switch (G__147611__$1) {
case "message":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k147591);

}
}));

(matcher_combinators.model.InvalidMatcherContext.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__147590){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__147613 = cljs.core.keyword_identical_QMARK_;
var expr__147614 = k__4481__auto__;
if(cljs.core.truth_((pred__147613.cljs$core$IFn$_invoke$arity$2 ? pred__147613.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"message","message",-406056002),expr__147614) : pred__147613.call(null,new cljs.core.Keyword(null,"message","message",-406056002),expr__147614)))){
return (new matcher_combinators.model.InvalidMatcherContext(G__147590,self__.__meta,self__.__extmap,null));
} else {
return (new matcher_combinators.model.InvalidMatcherContext(self__.message,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__147590),null));
}
}));

(matcher_combinators.model.InvalidMatcherContext.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"message","message",-406056002),self__.message,null))], null),self__.__extmap));
}));

(matcher_combinators.model.InvalidMatcherContext.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__147590){
var self__ = this;
var this__4471__auto____$1 = this;
return (new matcher_combinators.model.InvalidMatcherContext(self__.message,G__147590,self__.__extmap,self__.__hash));
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
matcher_combinators.model.map__GT_InvalidMatcherContext = (function matcher_combinators$model$map__GT_InvalidMatcherContext(G__147594){
var extmap__4512__auto__ = (function (){var G__147616 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__147594,new cljs.core.Keyword(null,"message","message",-406056002));
if(cljs.core.record_QMARK_(G__147594)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__147616);
} else {
return G__147616;
}
})();
return (new matcher_combinators.model.InvalidMatcherContext(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(G__147594),null,cljs.core.not_empty(extmap__4512__auto__),null));
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

(matcher_combinators.model.TypeMismatch.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k147618,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__147622 = k147618;
var G__147622__$1 = (((G__147622 instanceof cljs.core.Keyword))?G__147622.fqn:null);
switch (G__147622__$1) {
case "expected":
return self__.expected;

break;
case "actual":
return self__.actual;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k147618,else__4475__auto__);

}
}));

(matcher_combinators.model.TypeMismatch.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__147623){
var vec__147624 = p__147623;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__147624,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__147624,(1),null);
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

(matcher_combinators.model.TypeMismatch.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__147617){
var self__ = this;
var G__147617__$1 = this;
return (new cljs.core.RecordIter((0),G__147617__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(matcher_combinators.model.TypeMismatch.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this147619,other147620){
var self__ = this;
var this147619__$1 = this;
return (((!((other147620 == null)))) && ((((this147619__$1.constructor === other147620.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this147619__$1.expected,other147620.expected)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this147619__$1.actual,other147620.actual)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this147619__$1.__extmap,other147620.__extmap)))))))));
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

(matcher_combinators.model.TypeMismatch.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k147618){
var self__ = this;
var this__4479__auto____$1 = this;
var G__147631 = k147618;
var G__147631__$1 = (((G__147631 instanceof cljs.core.Keyword))?G__147631.fqn:null);
switch (G__147631__$1) {
case "expected":
case "actual":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k147618);

}
}));

(matcher_combinators.model.TypeMismatch.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__147617){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__147632 = cljs.core.keyword_identical_QMARK_;
var expr__147633 = k__4481__auto__;
if(cljs.core.truth_((pred__147632.cljs$core$IFn$_invoke$arity$2 ? pred__147632.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expected","expected",1583670997),expr__147633) : pred__147632.call(null,new cljs.core.Keyword(null,"expected","expected",1583670997),expr__147633)))){
return (new matcher_combinators.model.TypeMismatch(G__147617,self__.actual,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__147632.cljs$core$IFn$_invoke$arity$2 ? pred__147632.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"actual","actual",107306363),expr__147633) : pred__147632.call(null,new cljs.core.Keyword(null,"actual","actual",107306363),expr__147633)))){
return (new matcher_combinators.model.TypeMismatch(self__.expected,G__147617,self__.__meta,self__.__extmap,null));
} else {
return (new matcher_combinators.model.TypeMismatch(self__.expected,self__.actual,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__147617),null));
}
}
}));

(matcher_combinators.model.TypeMismatch.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"expected","expected",1583670997),self__.expected,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"actual","actual",107306363),self__.actual,null))], null),self__.__extmap));
}));

(matcher_combinators.model.TypeMismatch.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__147617){
var self__ = this;
var this__4471__auto____$1 = this;
return (new matcher_combinators.model.TypeMismatch(self__.expected,self__.actual,G__147617,self__.__extmap,self__.__hash));
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
matcher_combinators.model.map__GT_TypeMismatch = (function matcher_combinators$model$map__GT_TypeMismatch(G__147621){
var extmap__4512__auto__ = (function (){var G__147636 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__147621,new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"actual","actual",107306363)], 0));
if(cljs.core.record_QMARK_(G__147621)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__147636);
} else {
return G__147636;
}
})();
return (new matcher_combinators.model.TypeMismatch(new cljs.core.Keyword(null,"expected","expected",1583670997).cljs$core$IFn$_invoke$arity$1(G__147621),new cljs.core.Keyword(null,"actual","actual",107306363).cljs$core$IFn$_invoke$arity$1(G__147621),null,cljs.core.not_empty(extmap__4512__auto__),null));
});


//# sourceMappingURL=matcher_combinators.model.js.map
