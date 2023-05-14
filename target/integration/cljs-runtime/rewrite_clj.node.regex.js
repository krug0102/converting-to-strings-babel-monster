goog.provide('rewrite_clj.node.regex');

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
rewrite_clj.node.regex.RegexNode = (function (pattern,__meta,__extmap,__hash){
this.pattern = pattern;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(rewrite_clj.node.regex.RegexNode.prototype.toString = (function (){
var self__ = this;
var node = this;
return node.rewrite_clj$node$protocols$Node$string$arity$1(null);
}));

(rewrite_clj.node.regex.RegexNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(rewrite_clj.node.regex.RegexNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k57464,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__57472 = k57464;
var G__57472__$1 = (((G__57472 instanceof cljs.core.Keyword))?G__57472.fqn:null);
switch (G__57472__$1) {
case "pattern":
return self__.pattern;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k57464,else__4475__auto__);

}
}));

(rewrite_clj.node.regex.RegexNode.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__57473){
var vec__57474 = p__57473;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57474,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57474,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(rewrite_clj.node.regex.RegexNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#rewrite-clj.node.regex.RegexNode{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pattern","pattern",242135423),self__.pattern],null))], null),self__.__extmap));
}));

(rewrite_clj.node.regex.RegexNode.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__57463){
var self__ = this;
var G__57463__$1 = this;
return (new cljs.core.RecordIter((0),G__57463__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pattern","pattern",242135423)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(rewrite_clj.node.regex.RegexNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(rewrite_clj.node.regex.RegexNode.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new rewrite_clj.node.regex.RegexNode(self__.pattern,self__.__meta,self__.__extmap,self__.__hash));
}));

(rewrite_clj.node.regex.RegexNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(rewrite_clj.node.regex.RegexNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (coll__4469__auto__){
return (705094795 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
})(this__4468__auto____$1);
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(rewrite_clj.node.regex.RegexNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this57465,other57466){
var self__ = this;
var this57465__$1 = this;
return (((!((other57466 == null)))) && ((((this57465__$1.constructor === other57466.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57465__$1.pattern,other57466.pattern)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57465__$1.__extmap,other57466.__extmap)))))));
}));

(rewrite_clj.node.regex.RegexNode.prototype.rewrite_clj$node$protocols$Node$ = cljs.core.PROTOCOL_SENTINEL);

(rewrite_clj.node.regex.RegexNode.prototype.rewrite_clj$node$protocols$Node$tag$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return new cljs.core.Keyword(null,"regex","regex",939488856);
}));

(rewrite_clj.node.regex.RegexNode.prototype.rewrite_clj$node$protocols$Node$node_type$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return new cljs.core.Keyword(null,"regex","regex",939488856);
}));

(rewrite_clj.node.regex.RegexNode.prototype.rewrite_clj$node$protocols$Node$printable_only_QMARK_$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return false;
}));

(rewrite_clj.node.regex.RegexNode.prototype.rewrite_clj$node$protocols$Node$sexpr_STAR_$arity$2 = (function (_node,_opts){
var self__ = this;
var _node__$1 = this;
return (new cljs.core.List(null,new cljs.core.Symbol(null,"re-pattern","re-pattern",1047705161,null),(new cljs.core.List(null,self__.pattern,null,(1),null)),(2),null));
}));

(rewrite_clj.node.regex.RegexNode.prototype.rewrite_clj$node$protocols$Node$length$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return ((3) + cljs.core.count(self__.pattern));
}));

(rewrite_clj.node.regex.RegexNode.prototype.rewrite_clj$node$protocols$Node$string$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return ["#\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.pattern),"\""].join('');
}));

(rewrite_clj.node.regex.RegexNode.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pattern","pattern",242135423),null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new rewrite_clj.node.regex.RegexNode(self__.pattern,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(rewrite_clj.node.regex.RegexNode.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k57464){
var self__ = this;
var this__4479__auto____$1 = this;
var G__57513 = k57464;
var G__57513__$1 = (((G__57513 instanceof cljs.core.Keyword))?G__57513.fqn:null);
switch (G__57513__$1) {
case "pattern":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k57464);

}
}));

(rewrite_clj.node.regex.RegexNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__57463){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__57514 = cljs.core.keyword_identical_QMARK_;
var expr__57515 = k__4481__auto__;
if(cljs.core.truth_((pred__57514.cljs$core$IFn$_invoke$arity$2 ? pred__57514.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pattern","pattern",242135423),expr__57515) : pred__57514.call(null,new cljs.core.Keyword(null,"pattern","pattern",242135423),expr__57515)))){
return (new rewrite_clj.node.regex.RegexNode(G__57463,self__.__meta,self__.__extmap,null));
} else {
return (new rewrite_clj.node.regex.RegexNode(self__.pattern,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__57463),null));
}
}));

(rewrite_clj.node.regex.RegexNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"pattern","pattern",242135423),self__.pattern,null))], null),self__.__extmap));
}));

(rewrite_clj.node.regex.RegexNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__57463){
var self__ = this;
var this__4471__auto____$1 = this;
return (new rewrite_clj.node.regex.RegexNode(self__.pattern,G__57463,self__.__extmap,self__.__hash));
}));

(rewrite_clj.node.regex.RegexNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4478__auto__,(0)),cljs.core._nth(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(rewrite_clj.node.regex.RegexNode.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pattern","pattern",1882666950,null)], null);
}));

(rewrite_clj.node.regex.RegexNode.cljs$lang$type = true);

(rewrite_clj.node.regex.RegexNode.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"rewrite-clj.node.regex/RegexNode",null,(1),null));
}));

(rewrite_clj.node.regex.RegexNode.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"rewrite-clj.node.regex/RegexNode");
}));

/**
 * Positional factory function for rewrite-clj.node.regex/RegexNode.
 */
rewrite_clj.node.regex.__GT_RegexNode = (function rewrite_clj$node$regex$__GT_RegexNode(pattern){
return (new rewrite_clj.node.regex.RegexNode(pattern,null,null,null));
});

/**
 * Factory function for rewrite-clj.node.regex/RegexNode, taking a map of keywords to field values.
 */
rewrite_clj.node.regex.map__GT_RegexNode = (function rewrite_clj$node$regex$map__GT_RegexNode(G__57467){
var extmap__4512__auto__ = (function (){var G__57521 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__57467,new cljs.core.Keyword(null,"pattern","pattern",242135423));
if(cljs.core.record_QMARK_(G__57467)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__57521);
} else {
return G__57521;
}
})();
return (new rewrite_clj.node.regex.RegexNode(new cljs.core.Keyword(null,"pattern","pattern",242135423).cljs$core$IFn$_invoke$arity$1(G__57467),null,cljs.core.not_empty(extmap__4512__auto__),null));
});

rewrite_clj.node.protocols.make_printable_BANG_(rewrite_clj.node.regex.RegexNode);
rewrite_clj.node.regex.pattern_string_for_regex = (function rewrite_clj$node$regex$pattern_string_for_regex(regex){
return regex.source;
});
/**
 * Create node representing a regex with `pattern-string`.
 * Use same escape rules for `pattern-string` as you would for `(re-pattern "pattern-string")`
 * 
 * ```Clojure
 * (require '[rewrite-clj.node :as n])
 * 
 * (-> (n/regex-node "my\\.lil.*regex")
 *     n/string)
 * ;; => "#\"my\\.lil.*regex\""  
 * ```
 */
rewrite_clj.node.regex.regex_node = (function rewrite_clj$node$regex$regex_node(pattern_string){
return rewrite_clj.node.regex.__GT_RegexNode(pattern_string);
});

//# sourceMappingURL=rewrite_clj.node.regex.js.map
