goog.provide('rewrite_clj.node.comment');

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
rewrite_clj.node.comment.CommentNode = (function (prefix,s,__meta,__extmap,__hash){
this.prefix = prefix;
this.s = s;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(rewrite_clj.node.comment.CommentNode.prototype.toString = (function (){
var self__ = this;
var node = this;
return node.rewrite_clj$node$protocols$Node$string$arity$1(null);
}));

(rewrite_clj.node.comment.CommentNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(rewrite_clj.node.comment.CommentNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k56541,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__56556 = k56541;
var G__56556__$1 = (((G__56556 instanceof cljs.core.Keyword))?G__56556.fqn:null);
switch (G__56556__$1) {
case "prefix":
return self__.prefix;

break;
case "s":
return self__.s;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k56541,else__4475__auto__);

}
}));

(rewrite_clj.node.comment.CommentNode.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__56559){
var vec__56560 = p__56559;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56560,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56560,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(rewrite_clj.node.comment.CommentNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#rewrite-clj.node.comment.CommentNode{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"prefix","prefix",-265908465),self__.prefix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"s","s",1705939918),self__.s],null))], null),self__.__extmap));
}));

(rewrite_clj.node.comment.CommentNode.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__56540){
var self__ = this;
var G__56540__$1 = this;
return (new cljs.core.RecordIter((0),G__56540__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prefix","prefix",-265908465),new cljs.core.Keyword(null,"s","s",1705939918)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(rewrite_clj.node.comment.CommentNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(rewrite_clj.node.comment.CommentNode.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new rewrite_clj.node.comment.CommentNode(self__.prefix,self__.s,self__.__meta,self__.__extmap,self__.__hash));
}));

(rewrite_clj.node.comment.CommentNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(rewrite_clj.node.comment.CommentNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (coll__4469__auto__){
return (495469178 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
})(this__4468__auto____$1);
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(rewrite_clj.node.comment.CommentNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this56542,other56543){
var self__ = this;
var this56542__$1 = this;
return (((!((other56543 == null)))) && ((((this56542__$1.constructor === other56543.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this56542__$1.prefix,other56543.prefix)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this56542__$1.s,other56543.s)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this56542__$1.__extmap,other56543.__extmap)))))))));
}));

(rewrite_clj.node.comment.CommentNode.prototype.rewrite_clj$node$protocols$Node$ = cljs.core.PROTOCOL_SENTINEL);

(rewrite_clj.node.comment.CommentNode.prototype.rewrite_clj$node$protocols$Node$tag$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return new cljs.core.Keyword(null,"comment","comment",532206069);
}));

(rewrite_clj.node.comment.CommentNode.prototype.rewrite_clj$node$protocols$Node$node_type$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return new cljs.core.Keyword(null,"comment","comment",532206069);
}));

(rewrite_clj.node.comment.CommentNode.prototype.rewrite_clj$node$protocols$Node$printable_only_QMARK_$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return true;
}));

(rewrite_clj.node.comment.CommentNode.prototype.rewrite_clj$node$protocols$Node$sexpr_STAR_$arity$2 = (function (_node,_opts){
var self__ = this;
var _node__$1 = this;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("unsupported operation",cljs.core.PersistentArrayMap.EMPTY);
}));

(rewrite_clj.node.comment.CommentNode.prototype.rewrite_clj$node$protocols$Node$length$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return (cljs.core.count(self__.prefix) + cljs.core.count(self__.s));
}));

(rewrite_clj.node.comment.CommentNode.prototype.rewrite_clj$node$protocols$Node$string$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.prefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.s)].join('');
}));

(rewrite_clj.node.comment.CommentNode.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"s","s",1705939918),null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new rewrite_clj.node.comment.CommentNode(self__.prefix,self__.s,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(rewrite_clj.node.comment.CommentNode.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k56541){
var self__ = this;
var this__4479__auto____$1 = this;
var G__56586 = k56541;
var G__56586__$1 = (((G__56586 instanceof cljs.core.Keyword))?G__56586.fqn:null);
switch (G__56586__$1) {
case "prefix":
case "s":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k56541);

}
}));

(rewrite_clj.node.comment.CommentNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__56540){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__56587 = cljs.core.keyword_identical_QMARK_;
var expr__56588 = k__4481__auto__;
if(cljs.core.truth_((pred__56587.cljs$core$IFn$_invoke$arity$2 ? pred__56587.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"prefix","prefix",-265908465),expr__56588) : pred__56587.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),expr__56588)))){
return (new rewrite_clj.node.comment.CommentNode(G__56540,self__.s,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__56587.cljs$core$IFn$_invoke$arity$2 ? pred__56587.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"s","s",1705939918),expr__56588) : pred__56587.call(null,new cljs.core.Keyword(null,"s","s",1705939918),expr__56588)))){
return (new rewrite_clj.node.comment.CommentNode(self__.prefix,G__56540,self__.__meta,self__.__extmap,null));
} else {
return (new rewrite_clj.node.comment.CommentNode(self__.prefix,self__.s,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__56540),null));
}
}
}));

(rewrite_clj.node.comment.CommentNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"prefix","prefix",-265908465),self__.prefix,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"s","s",1705939918),self__.s,null))], null),self__.__extmap));
}));

(rewrite_clj.node.comment.CommentNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__56540){
var self__ = this;
var this__4471__auto____$1 = this;
return (new rewrite_clj.node.comment.CommentNode(self__.prefix,self__.s,G__56540,self__.__extmap,self__.__hash));
}));

(rewrite_clj.node.comment.CommentNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4478__auto__,(0)),cljs.core._nth(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(rewrite_clj.node.comment.CommentNode.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"prefix","prefix",1374623062,null),new cljs.core.Symbol(null,"s","s",-948495851,null)], null);
}));

(rewrite_clj.node.comment.CommentNode.cljs$lang$type = true);

(rewrite_clj.node.comment.CommentNode.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"rewrite-clj.node.comment/CommentNode",null,(1),null));
}));

(rewrite_clj.node.comment.CommentNode.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"rewrite-clj.node.comment/CommentNode");
}));

/**
 * Positional factory function for rewrite-clj.node.comment/CommentNode.
 */
rewrite_clj.node.comment.__GT_CommentNode = (function rewrite_clj$node$comment$__GT_CommentNode(prefix,s){
return (new rewrite_clj.node.comment.CommentNode(prefix,s,null,null,null));
});

/**
 * Factory function for rewrite-clj.node.comment/CommentNode, taking a map of keywords to field values.
 */
rewrite_clj.node.comment.map__GT_CommentNode = (function rewrite_clj$node$comment$map__GT_CommentNode(G__56545){
var extmap__4512__auto__ = (function (){var G__56595 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__56545,new cljs.core.Keyword(null,"prefix","prefix",-265908465),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"s","s",1705939918)], 0));
if(cljs.core.record_QMARK_(G__56545)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__56595);
} else {
return G__56595;
}
})();
return (new rewrite_clj.node.comment.CommentNode(new cljs.core.Keyword(null,"prefix","prefix",-265908465).cljs$core$IFn$_invoke$arity$1(G__56545),new cljs.core.Keyword(null,"s","s",1705939918).cljs$core$IFn$_invoke$arity$1(G__56545),null,cljs.core.not_empty(extmap__4512__auto__),null));
});

rewrite_clj.node.protocols.make_printable_BANG_(rewrite_clj.node.comment.CommentNode);
/**
 * Create node representing a comment with text `s`.
 * 
 * You may optionally specify a `prefix` of `";"` or `"#!"`, defaults is `";"`.
 * 
 * Argument `s`:
 * - must not include the `prefix`
 * - usually includes the trailing newline character, otherwise subsequent nodes will be on the comment line
 * 
 * ```Clojure
 * (require '[rewrite-clj.node :as n])
 * 
 * (-> (n/comment-node "; my comment\n")
 *     n/string)
 * ;; => ";; my comment\n"
 * 
 * (-> (n/comment-node "#!" "/usr/bin/env bb\n")
 *     n/string)
 * ;; => "#!/usr/bin/env bb\n"
 * ```
 */
rewrite_clj.node.comment.comment_node = (function rewrite_clj$node$comment$comment_node(var_args){
var G__56597 = arguments.length;
switch (G__56597) {
case 1:
return rewrite_clj.node.comment.comment_node.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rewrite_clj.node.comment.comment_node.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rewrite_clj.node.comment.comment_node.cljs$core$IFn$_invoke$arity$1 = (function (s){
return rewrite_clj.node.comment.comment_node.cljs$core$IFn$_invoke$arity$2(";",s);
}));

(rewrite_clj.node.comment.comment_node.cljs$core$IFn$_invoke$arity$2 = (function (prefix,s){
if(cljs.core.truth_((function (){var and__4221__auto__ = cljs.core.re_matches(/[^\r\n]*[\r\n]?/,s);
if(cljs.core.truth_(and__4221__auto__)){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(prefix,";")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(prefix,"#!")));
} else {
return and__4221__auto__;
}
})())){
} else {
throw (new Error("Assert failed: (and (re-matches #\"[^\\r\\n]*[\\r\\n]?\" s) (or (= prefix \";\") (= prefix \"#!\")))"));
}

return rewrite_clj.node.comment.__GT_CommentNode(prefix,s);
}));

(rewrite_clj.node.comment.comment_node.cljs$lang$maxFixedArity = 2);

/**
 * Returns true if `node` is a comment.
 */
rewrite_clj.node.comment.comment_QMARK_ = (function rewrite_clj$node$comment$comment_QMARK_(node){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rewrite_clj.node.protocols.tag(node),new cljs.core.Keyword(null,"comment","comment",532206069));
});

//# sourceMappingURL=rewrite_clj.node.comment.js.map
