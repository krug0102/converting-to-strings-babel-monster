goog.provide('rewrite_clj.node.whitespace');
/**
 * This function is applied to every newline string.
 */
rewrite_clj.node.whitespace._STAR_newline_fn_STAR_ = cljs.core.identity;
/**
 * This function is applied to every newline string and should produce
 * the eventual character count.
 */
rewrite_clj.node.whitespace._STAR_count_fn_STAR_ = cljs.core.count;
rewrite_clj.node.whitespace.sexpr_unsupported = (function rewrite_clj$node$whitespace$sexpr_unsupported(){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("unsupported operation",cljs.core.PersistentArrayMap.EMPTY);
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
 * @implements {rewrite_clj.node.protocols.Node}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
rewrite_clj.node.whitespace.WhitespaceNode = (function (whitespace,__meta,__extmap,__hash){
this.whitespace = whitespace;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(rewrite_clj.node.whitespace.WhitespaceNode.prototype.toString = (function (){
var self__ = this;
var node = this;
return node.rewrite_clj$node$protocols$Node$string$arity$1(null);
}));

(rewrite_clj.node.whitespace.WhitespaceNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(rewrite_clj.node.whitespace.WhitespaceNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k57189,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__57193 = k57189;
var G__57193__$1 = (((G__57193 instanceof cljs.core.Keyword))?G__57193.fqn:null);
switch (G__57193__$1) {
case "whitespace":
return self__.whitespace;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k57189,else__4475__auto__);

}
}));

(rewrite_clj.node.whitespace.WhitespaceNode.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__57194){
var vec__57195 = p__57194;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57195,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57195,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(rewrite_clj.node.whitespace.WhitespaceNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#rewrite-clj.node.whitespace.WhitespaceNode{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483),self__.whitespace],null))], null),self__.__extmap));
}));

(rewrite_clj.node.whitespace.WhitespaceNode.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__57188){
var self__ = this;
var G__57188__$1 = this;
return (new cljs.core.RecordIter((0),G__57188__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(rewrite_clj.node.whitespace.WhitespaceNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(rewrite_clj.node.whitespace.WhitespaceNode.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new rewrite_clj.node.whitespace.WhitespaceNode(self__.whitespace,self__.__meta,self__.__extmap,self__.__hash));
}));

(rewrite_clj.node.whitespace.WhitespaceNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(rewrite_clj.node.whitespace.WhitespaceNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (coll__4469__auto__){
return (1595850179 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
})(this__4468__auto____$1);
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(rewrite_clj.node.whitespace.WhitespaceNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this57190,other57191){
var self__ = this;
var this57190__$1 = this;
return (((!((other57191 == null)))) && ((((this57190__$1.constructor === other57191.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57190__$1.whitespace,other57191.whitespace)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57190__$1.__extmap,other57191.__extmap)))))));
}));

(rewrite_clj.node.whitespace.WhitespaceNode.prototype.rewrite_clj$node$protocols$Node$ = cljs.core.PROTOCOL_SENTINEL);

(rewrite_clj.node.whitespace.WhitespaceNode.prototype.rewrite_clj$node$protocols$Node$tag$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483);
}));

(rewrite_clj.node.whitespace.WhitespaceNode.prototype.rewrite_clj$node$protocols$Node$node_type$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483);
}));

(rewrite_clj.node.whitespace.WhitespaceNode.prototype.rewrite_clj$node$protocols$Node$printable_only_QMARK_$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return true;
}));

(rewrite_clj.node.whitespace.WhitespaceNode.prototype.rewrite_clj$node$protocols$Node$sexpr_STAR_$arity$2 = (function (_node,_opts){
var self__ = this;
var _node__$1 = this;
return rewrite_clj.node.whitespace.sexpr_unsupported();
}));

(rewrite_clj.node.whitespace.WhitespaceNode.prototype.rewrite_clj$node$protocols$Node$length$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return cljs.core.count(self__.whitespace);
}));

(rewrite_clj.node.whitespace.WhitespaceNode.prototype.rewrite_clj$node$protocols$Node$string$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return self__.whitespace;
}));

(rewrite_clj.node.whitespace.WhitespaceNode.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483),null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new rewrite_clj.node.whitespace.WhitespaceNode(self__.whitespace,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(rewrite_clj.node.whitespace.WhitespaceNode.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k57189){
var self__ = this;
var this__4479__auto____$1 = this;
var G__57198 = k57189;
var G__57198__$1 = (((G__57198 instanceof cljs.core.Keyword))?G__57198.fqn:null);
switch (G__57198__$1) {
case "whitespace":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k57189);

}
}));

(rewrite_clj.node.whitespace.WhitespaceNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__57188){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__57199 = cljs.core.keyword_identical_QMARK_;
var expr__57200 = k__4481__auto__;
if(cljs.core.truth_((pred__57199.cljs$core$IFn$_invoke$arity$2 ? pred__57199.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483),expr__57200) : pred__57199.call(null,new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483),expr__57200)))){
return (new rewrite_clj.node.whitespace.WhitespaceNode(G__57188,self__.__meta,self__.__extmap,null));
} else {
return (new rewrite_clj.node.whitespace.WhitespaceNode(self__.whitespace,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__57188),null));
}
}));

(rewrite_clj.node.whitespace.WhitespaceNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483),self__.whitespace,null))], null),self__.__extmap));
}));

(rewrite_clj.node.whitespace.WhitespaceNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__57188){
var self__ = this;
var this__4471__auto____$1 = this;
return (new rewrite_clj.node.whitespace.WhitespaceNode(self__.whitespace,G__57188,self__.__extmap,self__.__hash));
}));

(rewrite_clj.node.whitespace.WhitespaceNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4478__auto__,(0)),cljs.core._nth(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(rewrite_clj.node.whitespace.WhitespaceNode.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"whitespace","whitespace",300496044,null)], null);
}));

(rewrite_clj.node.whitespace.WhitespaceNode.cljs$lang$type = true);

(rewrite_clj.node.whitespace.WhitespaceNode.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"rewrite-clj.node.whitespace/WhitespaceNode",null,(1),null));
}));

(rewrite_clj.node.whitespace.WhitespaceNode.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"rewrite-clj.node.whitespace/WhitespaceNode");
}));

/**
 * Positional factory function for rewrite-clj.node.whitespace/WhitespaceNode.
 */
rewrite_clj.node.whitespace.__GT_WhitespaceNode = (function rewrite_clj$node$whitespace$__GT_WhitespaceNode(whitespace){
return (new rewrite_clj.node.whitespace.WhitespaceNode(whitespace,null,null,null));
});

/**
 * Factory function for rewrite-clj.node.whitespace/WhitespaceNode, taking a map of keywords to field values.
 */
rewrite_clj.node.whitespace.map__GT_WhitespaceNode = (function rewrite_clj$node$whitespace$map__GT_WhitespaceNode(G__57192){
var extmap__4512__auto__ = (function (){var G__57202 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__57192,new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483));
if(cljs.core.record_QMARK_(G__57192)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__57202);
} else {
return G__57202;
}
})();
return (new rewrite_clj.node.whitespace.WhitespaceNode(new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483).cljs$core$IFn$_invoke$arity$1(G__57192),null,cljs.core.not_empty(extmap__4512__auto__),null));
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
 * @implements {rewrite_clj.node.protocols.Node}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
rewrite_clj.node.whitespace.CommaNode = (function (commas,__meta,__extmap,__hash){
this.commas = commas;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(rewrite_clj.node.whitespace.CommaNode.prototype.toString = (function (){
var self__ = this;
var node = this;
return node.rewrite_clj$node$protocols$Node$string$arity$1(null);
}));

(rewrite_clj.node.whitespace.CommaNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(rewrite_clj.node.whitespace.CommaNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k57204,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__57208 = k57204;
var G__57208__$1 = (((G__57208 instanceof cljs.core.Keyword))?G__57208.fqn:null);
switch (G__57208__$1) {
case "commas":
return self__.commas;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k57204,else__4475__auto__);

}
}));

(rewrite_clj.node.whitespace.CommaNode.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__57209){
var vec__57210 = p__57209;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57210,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57210,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(rewrite_clj.node.whitespace.CommaNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#rewrite-clj.node.whitespace.CommaNode{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"commas","commas",1094507436),self__.commas],null))], null),self__.__extmap));
}));

(rewrite_clj.node.whitespace.CommaNode.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__57203){
var self__ = this;
var G__57203__$1 = this;
return (new cljs.core.RecordIter((0),G__57203__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"commas","commas",1094507436)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(rewrite_clj.node.whitespace.CommaNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(rewrite_clj.node.whitespace.CommaNode.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new rewrite_clj.node.whitespace.CommaNode(self__.commas,self__.__meta,self__.__extmap,self__.__hash));
}));

(rewrite_clj.node.whitespace.CommaNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(rewrite_clj.node.whitespace.CommaNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (coll__4469__auto__){
return (-551131754 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
})(this__4468__auto____$1);
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(rewrite_clj.node.whitespace.CommaNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this57205,other57206){
var self__ = this;
var this57205__$1 = this;
return (((!((other57206 == null)))) && ((((this57205__$1.constructor === other57206.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57205__$1.commas,other57206.commas)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57205__$1.__extmap,other57206.__extmap)))))));
}));

(rewrite_clj.node.whitespace.CommaNode.prototype.rewrite_clj$node$protocols$Node$ = cljs.core.PROTOCOL_SENTINEL);

(rewrite_clj.node.whitespace.CommaNode.prototype.rewrite_clj$node$protocols$Node$tag$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return new cljs.core.Keyword(null,"comma","comma",1699024745);
}));

(rewrite_clj.node.whitespace.CommaNode.prototype.rewrite_clj$node$protocols$Node$node_type$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return new cljs.core.Keyword(null,"comma","comma",1699024745);
}));

(rewrite_clj.node.whitespace.CommaNode.prototype.rewrite_clj$node$protocols$Node$printable_only_QMARK_$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return true;
}));

(rewrite_clj.node.whitespace.CommaNode.prototype.rewrite_clj$node$protocols$Node$sexpr_STAR_$arity$2 = (function (_node,_opts){
var self__ = this;
var _node__$1 = this;
return rewrite_clj.node.whitespace.sexpr_unsupported();
}));

(rewrite_clj.node.whitespace.CommaNode.prototype.rewrite_clj$node$protocols$Node$length$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return cljs.core.count(self__.commas);
}));

(rewrite_clj.node.whitespace.CommaNode.prototype.rewrite_clj$node$protocols$Node$string$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return self__.commas;
}));

(rewrite_clj.node.whitespace.CommaNode.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"commas","commas",1094507436),null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new rewrite_clj.node.whitespace.CommaNode(self__.commas,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(rewrite_clj.node.whitespace.CommaNode.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k57204){
var self__ = this;
var this__4479__auto____$1 = this;
var G__57213 = k57204;
var G__57213__$1 = (((G__57213 instanceof cljs.core.Keyword))?G__57213.fqn:null);
switch (G__57213__$1) {
case "commas":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k57204);

}
}));

(rewrite_clj.node.whitespace.CommaNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__57203){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__57214 = cljs.core.keyword_identical_QMARK_;
var expr__57215 = k__4481__auto__;
if(cljs.core.truth_((pred__57214.cljs$core$IFn$_invoke$arity$2 ? pred__57214.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"commas","commas",1094507436),expr__57215) : pred__57214.call(null,new cljs.core.Keyword(null,"commas","commas",1094507436),expr__57215)))){
return (new rewrite_clj.node.whitespace.CommaNode(G__57203,self__.__meta,self__.__extmap,null));
} else {
return (new rewrite_clj.node.whitespace.CommaNode(self__.commas,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__57203),null));
}
}));

(rewrite_clj.node.whitespace.CommaNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"commas","commas",1094507436),self__.commas,null))], null),self__.__extmap));
}));

(rewrite_clj.node.whitespace.CommaNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__57203){
var self__ = this;
var this__4471__auto____$1 = this;
return (new rewrite_clj.node.whitespace.CommaNode(self__.commas,G__57203,self__.__extmap,self__.__hash));
}));

(rewrite_clj.node.whitespace.CommaNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4478__auto__,(0)),cljs.core._nth(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(rewrite_clj.node.whitespace.CommaNode.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"commas","commas",-1559928333,null)], null);
}));

(rewrite_clj.node.whitespace.CommaNode.cljs$lang$type = true);

(rewrite_clj.node.whitespace.CommaNode.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"rewrite-clj.node.whitespace/CommaNode",null,(1),null));
}));

(rewrite_clj.node.whitespace.CommaNode.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"rewrite-clj.node.whitespace/CommaNode");
}));

/**
 * Positional factory function for rewrite-clj.node.whitespace/CommaNode.
 */
rewrite_clj.node.whitespace.__GT_CommaNode = (function rewrite_clj$node$whitespace$__GT_CommaNode(commas){
return (new rewrite_clj.node.whitespace.CommaNode(commas,null,null,null));
});

/**
 * Factory function for rewrite-clj.node.whitespace/CommaNode, taking a map of keywords to field values.
 */
rewrite_clj.node.whitespace.map__GT_CommaNode = (function rewrite_clj$node$whitespace$map__GT_CommaNode(G__57207){
var extmap__4512__auto__ = (function (){var G__57217 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__57207,new cljs.core.Keyword(null,"commas","commas",1094507436));
if(cljs.core.record_QMARK_(G__57207)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__57217);
} else {
return G__57217;
}
})();
return (new rewrite_clj.node.whitespace.CommaNode(new cljs.core.Keyword(null,"commas","commas",1094507436).cljs$core$IFn$_invoke$arity$1(G__57207),null,cljs.core.not_empty(extmap__4512__auto__),null));
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
 * @implements {rewrite_clj.node.protocols.Node}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
rewrite_clj.node.whitespace.NewlineNode = (function (newlines,__meta,__extmap,__hash){
this.newlines = newlines;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(rewrite_clj.node.whitespace.NewlineNode.prototype.toString = (function (){
var self__ = this;
var node = this;
return node.rewrite_clj$node$protocols$Node$string$arity$1(null);
}));

(rewrite_clj.node.whitespace.NewlineNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(rewrite_clj.node.whitespace.NewlineNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k57219,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__57223 = k57219;
var G__57223__$1 = (((G__57223 instanceof cljs.core.Keyword))?G__57223.fqn:null);
switch (G__57223__$1) {
case "newlines":
return self__.newlines;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k57219,else__4475__auto__);

}
}));

(rewrite_clj.node.whitespace.NewlineNode.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__57224){
var vec__57225 = p__57224;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57225,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57225,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(rewrite_clj.node.whitespace.NewlineNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#rewrite-clj.node.whitespace.NewlineNode{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"newlines","newlines",-1185451518),self__.newlines],null))], null),self__.__extmap));
}));

(rewrite_clj.node.whitespace.NewlineNode.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__57218){
var self__ = this;
var G__57218__$1 = this;
return (new cljs.core.RecordIter((0),G__57218__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"newlines","newlines",-1185451518)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(rewrite_clj.node.whitespace.NewlineNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(rewrite_clj.node.whitespace.NewlineNode.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new rewrite_clj.node.whitespace.NewlineNode(self__.newlines,self__.__meta,self__.__extmap,self__.__hash));
}));

(rewrite_clj.node.whitespace.NewlineNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(rewrite_clj.node.whitespace.NewlineNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (coll__4469__auto__){
return (979711303 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
})(this__4468__auto____$1);
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(rewrite_clj.node.whitespace.NewlineNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this57220,other57221){
var self__ = this;
var this57220__$1 = this;
return (((!((other57221 == null)))) && ((((this57220__$1.constructor === other57221.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57220__$1.newlines,other57221.newlines)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57220__$1.__extmap,other57221.__extmap)))))));
}));

(rewrite_clj.node.whitespace.NewlineNode.prototype.rewrite_clj$node$protocols$Node$ = cljs.core.PROTOCOL_SENTINEL);

(rewrite_clj.node.whitespace.NewlineNode.prototype.rewrite_clj$node$protocols$Node$tag$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return new cljs.core.Keyword(null,"newline","newline",1790071323);
}));

(rewrite_clj.node.whitespace.NewlineNode.prototype.rewrite_clj$node$protocols$Node$node_type$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return new cljs.core.Keyword(null,"newline","newline",1790071323);
}));

(rewrite_clj.node.whitespace.NewlineNode.prototype.rewrite_clj$node$protocols$Node$printable_only_QMARK_$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return true;
}));

(rewrite_clj.node.whitespace.NewlineNode.prototype.rewrite_clj$node$protocols$Node$sexpr_STAR_$arity$2 = (function (_node,_opts){
var self__ = this;
var _node__$1 = this;
return rewrite_clj.node.whitespace.sexpr_unsupported();
}));

(rewrite_clj.node.whitespace.NewlineNode.prototype.rewrite_clj$node$protocols$Node$length$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return rewrite_clj.node.whitespace._STAR_count_fn_STAR_.call(null,self__.newlines);
}));

(rewrite_clj.node.whitespace.NewlineNode.prototype.rewrite_clj$node$protocols$Node$string$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return rewrite_clj.node.whitespace._STAR_newline_fn_STAR_.call(null,self__.newlines);
}));

(rewrite_clj.node.whitespace.NewlineNode.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"newlines","newlines",-1185451518),null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new rewrite_clj.node.whitespace.NewlineNode(self__.newlines,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(rewrite_clj.node.whitespace.NewlineNode.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k57219){
var self__ = this;
var this__4479__auto____$1 = this;
var G__57228 = k57219;
var G__57228__$1 = (((G__57228 instanceof cljs.core.Keyword))?G__57228.fqn:null);
switch (G__57228__$1) {
case "newlines":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k57219);

}
}));

(rewrite_clj.node.whitespace.NewlineNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__57218){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__57229 = cljs.core.keyword_identical_QMARK_;
var expr__57230 = k__4481__auto__;
if(cljs.core.truth_((pred__57229.cljs$core$IFn$_invoke$arity$2 ? pred__57229.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"newlines","newlines",-1185451518),expr__57230) : pred__57229.call(null,new cljs.core.Keyword(null,"newlines","newlines",-1185451518),expr__57230)))){
return (new rewrite_clj.node.whitespace.NewlineNode(G__57218,self__.__meta,self__.__extmap,null));
} else {
return (new rewrite_clj.node.whitespace.NewlineNode(self__.newlines,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__57218),null));
}
}));

(rewrite_clj.node.whitespace.NewlineNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"newlines","newlines",-1185451518),self__.newlines,null))], null),self__.__extmap));
}));

(rewrite_clj.node.whitespace.NewlineNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__57218){
var self__ = this;
var this__4471__auto____$1 = this;
return (new rewrite_clj.node.whitespace.NewlineNode(self__.newlines,G__57218,self__.__extmap,self__.__hash));
}));

(rewrite_clj.node.whitespace.NewlineNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4478__auto__,(0)),cljs.core._nth(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(rewrite_clj.node.whitespace.NewlineNode.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"newlines","newlines",455080009,null)], null);
}));

(rewrite_clj.node.whitespace.NewlineNode.cljs$lang$type = true);

(rewrite_clj.node.whitespace.NewlineNode.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"rewrite-clj.node.whitespace/NewlineNode",null,(1),null));
}));

(rewrite_clj.node.whitespace.NewlineNode.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"rewrite-clj.node.whitespace/NewlineNode");
}));

/**
 * Positional factory function for rewrite-clj.node.whitespace/NewlineNode.
 */
rewrite_clj.node.whitespace.__GT_NewlineNode = (function rewrite_clj$node$whitespace$__GT_NewlineNode(newlines){
return (new rewrite_clj.node.whitespace.NewlineNode(newlines,null,null,null));
});

/**
 * Factory function for rewrite-clj.node.whitespace/NewlineNode, taking a map of keywords to field values.
 */
rewrite_clj.node.whitespace.map__GT_NewlineNode = (function rewrite_clj$node$whitespace$map__GT_NewlineNode(G__57222){
var extmap__4512__auto__ = (function (){var G__57232 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__57222,new cljs.core.Keyword(null,"newlines","newlines",-1185451518));
if(cljs.core.record_QMARK_(G__57222)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__57232);
} else {
return G__57232;
}
})();
return (new rewrite_clj.node.whitespace.NewlineNode(new cljs.core.Keyword(null,"newlines","newlines",-1185451518).cljs$core$IFn$_invoke$arity$1(G__57222),null,cljs.core.not_empty(extmap__4512__auto__),null));
});

rewrite_clj.node.protocols.make_printable_BANG_(rewrite_clj.node.whitespace.WhitespaceNode);
rewrite_clj.node.protocols.make_printable_BANG_(rewrite_clj.node.whitespace.CommaNode);
rewrite_clj.node.protocols.make_printable_BANG_(rewrite_clj.node.whitespace.NewlineNode);
rewrite_clj.node.whitespace.string_of_QMARK_ = (function rewrite_clj$node$whitespace$string_of_QMARK_(s,pred){
var and__4221__auto__ = s;
if(cljs.core.truth_(and__4221__auto__)){
return ((typeof s === 'string') && ((((cljs.core.count(s) > (0))) && (cljs.core.every_QMARK_(pred,s)))));
} else {
return and__4221__auto__;
}
});
/**
 * Create whitespace node of string `s`, where `s` is one or more space characters.
 */
rewrite_clj.node.whitespace.whitespace_node = (function rewrite_clj$node$whitespace$whitespace_node(s){
if(cljs.core.truth_(rewrite_clj.node.whitespace.string_of_QMARK_(s,rewrite_clj.reader.space_QMARK_))){
} else {
throw (new Error("Assert failed: (string-of? s r/space?)"));
}

return rewrite_clj.node.whitespace.__GT_WhitespaceNode(s);
});
/**
 * Create comma node of string `s`, where `s` is one or more comma characters.
 */
rewrite_clj.node.whitespace.comma_node = (function rewrite_clj$node$whitespace$comma_node(s){
if(cljs.core.truth_(rewrite_clj.node.whitespace.string_of_QMARK_(s,rewrite_clj.reader.comma_QMARK_))){
} else {
throw (new Error("Assert failed: (string-of? s r/comma?)"));
}

return rewrite_clj.node.whitespace.__GT_CommaNode(s);
});
/**
 * Create newline node of string `s`, where `s` is one or more linebreak characters.
 */
rewrite_clj.node.whitespace.newline_node = (function rewrite_clj$node$whitespace$newline_node(s){
if(cljs.core.truth_(rewrite_clj.node.whitespace.string_of_QMARK_(s,rewrite_clj.reader.linebreak_QMARK_))){
} else {
throw (new Error("Assert failed: (string-of? s r/linebreak?)"));
}

return rewrite_clj.node.whitespace.__GT_NewlineNode(s);
});
rewrite_clj.node.whitespace.classify_whitespace = (function rewrite_clj$node$whitespace$classify_whitespace(c){
if(rewrite_clj.reader.comma_QMARK_(c)){
return new cljs.core.Keyword(null,"comma","comma",1699024745);
} else {
if(rewrite_clj.reader.linebreak_QMARK_(c)){
return new cljs.core.Keyword(null,"newline","newline",1790071323);
} else {
return new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483);

}
}
});
/**
 * Convert string `s` of whitespace to whitespace/newline nodes.
 */
rewrite_clj.node.whitespace.whitespace_nodes = (function rewrite_clj$node$whitespace$whitespace_nodes(s){
if(cljs.core.truth_(rewrite_clj.node.whitespace.string_of_QMARK_(s,rewrite_clj.reader.whitespace_QMARK_))){
} else {
throw (new Error("Assert failed: (string-of? s r/whitespace?)"));
}

return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (char_seq){
var s__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,char_seq);
var G__57233 = rewrite_clj.node.whitespace.classify_whitespace(cljs.core.first(char_seq));
var G__57233__$1 = (((G__57233 instanceof cljs.core.Keyword))?G__57233.fqn:null);
switch (G__57233__$1) {
case "comma":
return rewrite_clj.node.whitespace.comma_node(s__$1);

break;
case "newline":
return rewrite_clj.node.whitespace.newline_node(s__$1);

break;
default:
return rewrite_clj.node.whitespace.whitespace_node(s__$1);

}
}),cljs.core.partition_by.cljs$core$IFn$_invoke$arity$2(rewrite_clj.node.whitespace.classify_whitespace,s));
});
/**
 * Create node representing `n` spaces.
 */
rewrite_clj.node.whitespace.spaces = (function rewrite_clj$node$whitespace$spaces(n){
return rewrite_clj.node.whitespace.whitespace_node(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(n," ")));
});
/**
 * Create node representing `n` newline characters.
 */
rewrite_clj.node.whitespace.newlines = (function rewrite_clj$node$whitespace$newlines(n){
return rewrite_clj.node.whitespace.newline_node(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(n,"\n")));
});
var comma_57252 = rewrite_clj.node.whitespace.whitespace_nodes(", ");
/**
 * Interleave `nodes` with `", "` nodes.
 */
rewrite_clj.node.whitespace.comma_separated = (function rewrite_clj$node$whitespace$comma_separated(nodes){
return cljs.core.drop_last.cljs$core$IFn$_invoke$arity$2(cljs.core.count(comma_57252),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__57234_SHARP_){
return cljs.core.cons(p1__57234_SHARP_,comma_57252);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([nodes], 0)));
});
var nl_57253 = rewrite_clj.node.whitespace.newline_node("\n");
/**
 * Interleave `nodes` with newline nodes.
 */
rewrite_clj.node.whitespace.line_separated = (function rewrite_clj$node$whitespace$line_separated(nodes){
return cljs.core.butlast(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(nodes,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(nl_57253)));
});
var space_57254 = rewrite_clj.node.whitespace.whitespace_node(" ");
/**
 * Interleave `nodes` with `" "` nodes.
 */
rewrite_clj.node.whitespace.space_separated = (function rewrite_clj$node$whitespace$space_separated(nodes){
return cljs.core.butlast(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(nodes,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(space_57254)));
});
/**
 * Returns true if `node` represents Clojure whitespace.
 */
rewrite_clj.node.whitespace.whitespace_QMARK_ = (function rewrite_clj$node$whitespace$whitespace_QMARK_(node){
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483),null,new cljs.core.Keyword(null,"comma","comma",1699024745),null,new cljs.core.Keyword(null,"newline","newline",1790071323),null], null), null),rewrite_clj.node.protocols.tag(node));
});
/**
 * Returns true if `node` represents one or more linebreaks.
 */
rewrite_clj.node.whitespace.linebreak_QMARK_ = (function rewrite_clj$node$whitespace$linebreak_QMARK_(node){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rewrite_clj.node.protocols.tag(node),new cljs.core.Keyword(null,"newline","newline",1790071323));
});
/**
 * Returns true if `node` represents one or more commas.
 */
rewrite_clj.node.whitespace.comma_QMARK_ = (function rewrite_clj$node$whitespace$comma_QMARK_(node){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rewrite_clj.node.protocols.tag(node),new cljs.core.Keyword(null,"comma","comma",1699024745));
});

//# sourceMappingURL=rewrite_clj.node.whitespace.js.map
