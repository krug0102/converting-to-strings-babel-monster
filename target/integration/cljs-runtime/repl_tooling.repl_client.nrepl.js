goog.provide('repl_tooling.repl_client.nrepl');

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {repl_tooling.eval.Evaluator}
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
repl_tooling.repl_client.nrepl.Evaluator = (function (conn,pending,session_id,__meta,__extmap,__hash){
this.conn = conn;
this.pending = pending;
this.session_id = session_id;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(repl_tooling.repl_client.nrepl.Evaluator.prototype.repl_tooling$eval$Evaluator$ = cljs.core.PROTOCOL_SENTINEL);

(repl_tooling.repl_client.nrepl.Evaluator.prototype.repl_tooling$eval$Evaluator$evaluate$arity$4 = (function (this$,command,opts,callback){
var self__ = this;
var this$__$1 = this;
var id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$2(opts,cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("eval"));
var op = (function (){var G__141628 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"op","op",-1882987955),"eval",new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.str.cljs$core$IFn$_invoke$arity$1(command),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"session","session",1008279103),self__.session_id], null);
if((new cljs.core.Keyword(null,"default-printer","default-printer",1627873917).cljs$core$IFn$_invoke$arity$1(opts) == null)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__141628,new cljs.core.Keyword("nrepl.middleware.print","print","nrepl.middleware.print/print",-1616742548),"___repl-tooling.__generic_printer_blob/nrepl-pprint");
} else {
return G__141628;
}
})();
var full_op = (function (){var G__141631 = op;
var G__141631__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(opts))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__141631,new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(opts)):G__141631);
var G__141631__$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"filename","filename",-1428840783).cljs$core$IFn$_invoke$arity$1(opts))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__141631__$1,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"filename","filename",-1428840783).cljs$core$IFn$_invoke$arity$1(opts)):G__141631__$1);
var G__141631__$3 = (cljs.core.truth_(new cljs.core.Keyword(null,"col","col",-1959363084).cljs$core$IFn$_invoke$arity$1(opts))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__141631__$2,new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"col","col",-1959363084).cljs$core$IFn$_invoke$arity$1(opts)):G__141631__$2);
if(cljs.core.truth_(new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__141631__$3,new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(opts));
} else {
return G__141631__$3;
}
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.pending,cljs.core.assoc,cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"callback","callback",-705136228),callback));

self__.conn.write(Buffer.from(repl_tooling.nrepl.bencode.encode(full_op)),"binary");

return id;
}));

(repl_tooling.repl_client.nrepl.Evaluator.prototype.repl_tooling$eval$Evaluator$break$arity$2 = (function (_,___$1){
var self__ = this;
var ___$2 = this;
return self__.conn.write(repl_tooling.nrepl.bencode.encode(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"interrupt","interrupt",-1601071178),new cljs.core.Keyword(null,"session","session",1008279103),self__.session_id], null)),"binary");
}));

(repl_tooling.repl_client.nrepl.Evaluator.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(repl_tooling.repl_client.nrepl.Evaluator.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k141620,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__141640 = k141620;
var G__141640__$1 = (((G__141640 instanceof cljs.core.Keyword))?G__141640.fqn:null);
switch (G__141640__$1) {
case "conn":
return self__.conn;

break;
case "pending":
return self__.pending;

break;
case "session-id":
return self__.session_id;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k141620,else__4475__auto__);

}
}));

(repl_tooling.repl_client.nrepl.Evaluator.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__141642){
var vec__141643 = p__141642;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__141643,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__141643,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(repl_tooling.repl_client.nrepl.Evaluator.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#repl-tooling.repl-client.nrepl.Evaluator{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"conn","conn",278309663),self__.conn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pending","pending",-220036727),self__.pending],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"session-id","session-id",-1147060351),self__.session_id],null))], null),self__.__extmap));
}));

(repl_tooling.repl_client.nrepl.Evaluator.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__141619){
var self__ = this;
var G__141619__$1 = this;
return (new cljs.core.RecordIter((0),G__141619__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"conn","conn",278309663),new cljs.core.Keyword(null,"pending","pending",-220036727),new cljs.core.Keyword(null,"session-id","session-id",-1147060351)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(repl_tooling.repl_client.nrepl.Evaluator.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(repl_tooling.repl_client.nrepl.Evaluator.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new repl_tooling.repl_client.nrepl.Evaluator(self__.conn,self__.pending,self__.session_id,self__.__meta,self__.__extmap,self__.__hash));
}));

(repl_tooling.repl_client.nrepl.Evaluator.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
}));

(repl_tooling.repl_client.nrepl.Evaluator.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (coll__4469__auto__){
return (-559677413 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
})(this__4468__auto____$1);
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(repl_tooling.repl_client.nrepl.Evaluator.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this141621,other141622){
var self__ = this;
var this141621__$1 = this;
return (((!((other141622 == null)))) && ((((this141621__$1.constructor === other141622.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this141621__$1.conn,other141622.conn)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this141621__$1.pending,other141622.pending)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this141621__$1.session_id,other141622.session_id)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this141621__$1.__extmap,other141622.__extmap)))))))))));
}));

(repl_tooling.repl_client.nrepl.Evaluator.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"session-id","session-id",-1147060351),null,new cljs.core.Keyword(null,"pending","pending",-220036727),null,new cljs.core.Keyword(null,"conn","conn",278309663),null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new repl_tooling.repl_client.nrepl.Evaluator(self__.conn,self__.pending,self__.session_id,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(repl_tooling.repl_client.nrepl.Evaluator.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k141620){
var self__ = this;
var this__4479__auto____$1 = this;
var G__141670 = k141620;
var G__141670__$1 = (((G__141670 instanceof cljs.core.Keyword))?G__141670.fqn:null);
switch (G__141670__$1) {
case "conn":
case "pending":
case "session-id":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k141620);

}
}));

(repl_tooling.repl_client.nrepl.Evaluator.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__141619){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__141672 = cljs.core.keyword_identical_QMARK_;
var expr__141673 = k__4481__auto__;
if(cljs.core.truth_((pred__141672.cljs$core$IFn$_invoke$arity$2 ? pred__141672.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"conn","conn",278309663),expr__141673) : pred__141672.call(null,new cljs.core.Keyword(null,"conn","conn",278309663),expr__141673)))){
return (new repl_tooling.repl_client.nrepl.Evaluator(G__141619,self__.pending,self__.session_id,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__141672.cljs$core$IFn$_invoke$arity$2 ? pred__141672.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pending","pending",-220036727),expr__141673) : pred__141672.call(null,new cljs.core.Keyword(null,"pending","pending",-220036727),expr__141673)))){
return (new repl_tooling.repl_client.nrepl.Evaluator(self__.conn,G__141619,self__.session_id,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__141672.cljs$core$IFn$_invoke$arity$2 ? pred__141672.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"session-id","session-id",-1147060351),expr__141673) : pred__141672.call(null,new cljs.core.Keyword(null,"session-id","session-id",-1147060351),expr__141673)))){
return (new repl_tooling.repl_client.nrepl.Evaluator(self__.conn,self__.pending,G__141619,self__.__meta,self__.__extmap,null));
} else {
return (new repl_tooling.repl_client.nrepl.Evaluator(self__.conn,self__.pending,self__.session_id,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__141619),null));
}
}
}
}));

(repl_tooling.repl_client.nrepl.Evaluator.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"conn","conn",278309663),self__.conn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"pending","pending",-220036727),self__.pending,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"session-id","session-id",-1147060351),self__.session_id,null))], null),self__.__extmap));
}));

(repl_tooling.repl_client.nrepl.Evaluator.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__141619){
var self__ = this;
var this__4471__auto____$1 = this;
return (new repl_tooling.repl_client.nrepl.Evaluator(self__.conn,self__.pending,self__.session_id,G__141619,self__.__extmap,self__.__hash));
}));

(repl_tooling.repl_client.nrepl.Evaluator.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4478__auto__,(0)),cljs.core._nth(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(repl_tooling.repl_client.nrepl.Evaluator.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"conn","conn",1918841190,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"js","js",-886355190,null)], null)),new cljs.core.Symbol(null,"pending","pending",1420494800,null),new cljs.core.Symbol(null,"session-id","session-id",493471176,null)], null);
}));

(repl_tooling.repl_client.nrepl.Evaluator.cljs$lang$type = true);

(repl_tooling.repl_client.nrepl.Evaluator.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"repl-tooling.repl-client.nrepl/Evaluator",null,(1),null));
}));

(repl_tooling.repl_client.nrepl.Evaluator.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"repl-tooling.repl-client.nrepl/Evaluator");
}));

/**
 * Positional factory function for repl-tooling.repl-client.nrepl/Evaluator.
 */
repl_tooling.repl_client.nrepl.__GT_Evaluator = (function repl_tooling$repl_client$nrepl$__GT_Evaluator(conn,pending,session_id){
return (new repl_tooling.repl_client.nrepl.Evaluator(conn,pending,session_id,null,null,null));
});

/**
 * Factory function for repl-tooling.repl-client.nrepl/Evaluator, taking a map of keywords to field values.
 */
repl_tooling.repl_client.nrepl.map__GT_Evaluator = (function repl_tooling$repl_client$nrepl$map__GT_Evaluator(G__141624){
var extmap__4512__auto__ = (function (){var G__141677 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__141624,new cljs.core.Keyword(null,"conn","conn",278309663),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"pending","pending",-220036727),new cljs.core.Keyword(null,"session-id","session-id",-1147060351)], 0));
if(cljs.core.record_QMARK_(G__141624)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__141677);
} else {
return G__141677;
}
})();
return (new repl_tooling.repl_client.nrepl.Evaluator(new cljs.core.Keyword(null,"conn","conn",278309663).cljs$core$IFn$_invoke$arity$1(G__141624),new cljs.core.Keyword(null,"pending","pending",-220036727).cljs$core$IFn$_invoke$arity$1(G__141624),new cljs.core.Keyword(null,"session-id","session-id",-1147060351).cljs$core$IFn$_invoke$arity$1(G__141624),null,cljs.core.not_empty(extmap__4512__auto__),null));
});

repl_tooling.repl_client.nrepl.send_state_res_BANG_ = (function repl_tooling$repl_client$nrepl$send_state_res_BANG_(msg,status,filename,row,col,callback){
if(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["namespace-not-found",null], null), null),status))){
var G__141678 = (function (){var G__141679 = "namespace-not-found";
var G__141680 = ["Namespace ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(msg,"ns"))," was not found. Maybe ","you neeed to load-file, or evaluate the ns form?"].join('');
var G__141681 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,(function (){var or__4223__auto__ = filename;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return "<no-file>";
}
})(),row,col], null)], null);
return (repl_tooling.editor_helpers.error_result.cljs$core$IFn$_invoke$arity$3 ? repl_tooling.editor_helpers.error_result.cljs$core$IFn$_invoke$arity$3(G__141679,G__141680,G__141681) : repl_tooling.editor_helpers.error_result.call(null,G__141679,G__141680,G__141681));
})();
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__141678) : callback.call(null,G__141678));
} else {
if(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["interrupted",null], null), null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(msg,"status")))){
var G__141682 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),"Interrupted!",new cljs.core.Keyword(null,"as-text","as-text",-449861067),"Interrupted!"], null);
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__141682) : callback.call(null,G__141682));
} else {
if(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["error",null], null), null),status))){
var G__141683 = (function (){var G__141684 = "Error";
var G__141685 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([status], 0));
var G__141686 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,(function (){var or__4223__auto__ = filename;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return "<no-file>";
}
})(),row,col], null)], null);
return (repl_tooling.editor_helpers.error_result.cljs$core$IFn$_invoke$arity$3 ? repl_tooling.editor_helpers.error_result.cljs$core$IFn$_invoke$arity$3(G__141684,G__141685,G__141686) : repl_tooling.editor_helpers.error_result.call(null,G__141684,G__141685,G__141686));
})();
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__141683) : callback.call(null,G__141683));
} else {
return null;
}
}
}
});
repl_tooling.repl_client.nrepl.treat_output_BANG_ = (function repl_tooling$repl_client$nrepl$treat_output_BANG_(pending,on_output,msg){
var temp__5753__auto___141803 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(pending),cljs.core.get.cljs$core$IFn$_invoke$arity$2(msg,"id"));
if(cljs.core.truth_(temp__5753__auto___141803)){
var map__141690_141804 = temp__5753__auto___141803;
var map__141690_141805__$1 = cljs.core.__destructure_map(map__141690_141804);
var callback_141806 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__141690_141805__$1,new cljs.core.Keyword(null,"callback","callback",-705136228));
var filename_141807 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__141690_141805__$1,new cljs.core.Keyword(null,"filename","filename",-1428840783));
var row_141808 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__141690_141805__$1,new cljs.core.Keyword(null,"row","row",-570139521));
var col_141809 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__141690_141805__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
if(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["value",null,"status",null,"ex",null], null), null),cljs.core.keys(msg)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(pending,cljs.core.dissoc,cljs.core.get.cljs$core$IFn$_invoke$arity$2(msg,"id"));
} else {
}

var temp__5753__auto___141811__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(msg,"status");
if(cljs.core.truth_(temp__5753__auto___141811__$1)){
var status_141812 = temp__5753__auto___141811__$1;
repl_tooling.repl_client.nrepl.send_state_res_BANG_(msg,status_141812,filename_141807,row_141808,col_141809,callback_141806);
} else {
}

var temp__5753__auto___141813__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(msg,"value");
if(cljs.core.truth_(temp__5753__auto___141813__$1)){
var value_141814 = temp__5753__auto___141813__$1;
var G__141693_141815 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"result","result",1415092211),value_141814,new cljs.core.Keyword(null,"as-text","as-text",-449861067),value_141814], null);
(callback_141806.cljs$core$IFn$_invoke$arity$1 ? callback_141806.cljs$core$IFn$_invoke$arity$1(G__141693_141815) : callback_141806.call(null,G__141693_141815));
} else {
}

var temp__5753__auto___141826__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(msg,"ex");
if(cljs.core.truth_(temp__5753__auto___141826__$1)){
var value_141828 = temp__5753__auto___141826__$1;
var value_141829__$1 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.tagged_literal(new cljs.core.Symbol("repl-tooling","literal-render","repl-tooling/literal-render",-211717929,null),value_141828)], 0));
var G__141697_141830 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),value_141829__$1,new cljs.core.Keyword(null,"as-text","as-text",-449861067),value_141829__$1], null);
(callback_141806.cljs$core$IFn$_invoke$arity$1 ? callback_141806.cljs$core$IFn$_invoke$arity$1(G__141697_141830) : callback_141806.call(null,G__141697_141830));
} else {
}
} else {
}

var temp__5753__auto___141831 = cljs.core.not_empty(cljs.core.get.cljs$core$IFn$_invoke$arity$2(msg,"out"));
if(cljs.core.truth_(temp__5753__auto___141831)){
var out_141832 = temp__5753__auto___141831;
var G__141698_141833 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"out","out",-910545517),out_141832], null);
(on_output.cljs$core$IFn$_invoke$arity$1 ? on_output.cljs$core$IFn$_invoke$arity$1(G__141698_141833) : on_output.call(null,G__141698_141833));
} else {
}

var temp__5753__auto__ = cljs.core.not_empty(cljs.core.get.cljs$core$IFn$_invoke$arity$2(msg,"err"));
if(cljs.core.truth_(temp__5753__auto__)){
var out = temp__5753__auto__;
var G__141700 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"err","err",-2089457205),out], null);
return (on_output.cljs$core$IFn$_invoke$arity$1 ? on_output.cljs$core$IFn$_invoke$arity$1(G__141700) : on_output.call(null,G__141700));
} else {
return null;
}
});
repl_tooling.repl_client.nrepl.treat_socket_output_BANG_ = (function repl_tooling$repl_client$nrepl$treat_socket_output_BANG_(p__141704){
var map__141705 = p__141704;
var map__141705__$1 = cljs.core.__destructure_map(map__141705);
var decode_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__141705__$1,new cljs.core.Keyword(null,"decode!","decode!",-1151476196));
var buffer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__141705__$1,new cljs.core.Keyword(null,"buffer","buffer",617295198));
var val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__141705__$1,new cljs.core.Keyword(null,"val","val",128701612));
var treat = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__141705__$1,new cljs.core.Keyword(null,"treat","treat",357622602));
var on_output = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__141705__$1,new cljs.core.Keyword(null,"on-output","on-output",-2023300495));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"closed","closed",-919675359),val)){
return (on_output.cljs$core$IFn$_invoke$arity$1 ? on_output.cljs$core$IFn$_invoke$arity$1(null) : on_output.call(null,null));
} else {
if(cljs.core.truth_(val)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(buffer,cljs.core.subvec,(1));

var seq__141707 = cljs.core.seq((decode_BANG_.cljs$core$IFn$_invoke$arity$1 ? decode_BANG_.cljs$core$IFn$_invoke$arity$1(val) : decode_BANG_.call(null,val)));
var chunk__141708 = null;
var count__141709 = (0);
var i__141710 = (0);
while(true){
if((i__141710 < count__141709)){
var result = chunk__141708.cljs$core$IIndexed$_nth$arity$2(null,i__141710);
(treat.cljs$core$IFn$_invoke$arity$1 ? treat.cljs$core$IFn$_invoke$arity$1(result) : treat.call(null,result));


var G__141835 = seq__141707;
var G__141836 = chunk__141708;
var G__141837 = count__141709;
var G__141838 = (i__141710 + (1));
seq__141707 = G__141835;
chunk__141708 = G__141836;
count__141709 = G__141837;
i__141710 = G__141838;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__141707);
if(temp__5753__auto__){
var seq__141707__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__141707__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__141707__$1);
var G__141840 = cljs.core.chunk_rest(seq__141707__$1);
var G__141841 = c__4649__auto__;
var G__141842 = cljs.core.count(c__4649__auto__);
var G__141843 = (0);
seq__141707 = G__141840;
chunk__141708 = G__141841;
count__141709 = G__141842;
i__141710 = G__141843;
continue;
} else {
var result = cljs.core.first(seq__141707__$1);
(treat.cljs$core$IFn$_invoke$arity$1 ? treat.cljs$core$IFn$_invoke$arity$1(result) : treat.call(null,result));


var G__141844 = cljs.core.next(seq__141707__$1);
var G__141845 = null;
var G__141846 = (0);
var G__141847 = (0);
seq__141707 = G__141844;
chunk__141708 = G__141845;
count__141709 = G__141846;
i__141710 = G__141847;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});
repl_tooling.repl_client.nrepl.detection = ["#?(",":bb :bb ",":joker :joker ",":clje :clje ",":cljs :cljs ",":cljr :cljr ",":clj :clj ",":default :unknown",")"].join('');
repl_tooling.repl_client.nrepl.callback_fns = (function repl_tooling$repl_client$nrepl$callback_fns(){
var calls = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [calls,(function (arg){
var seq__141722 = cljs.core.seq(cljs.core.deref(calls));
var chunk__141723 = null;
var count__141724 = (0);
var i__141725 = (0);
while(true){
if((i__141725 < count__141724)){
var call = chunk__141723.cljs$core$IIndexed$_nth$arity$2(null,i__141725);
(call.cljs$core$IFn$_invoke$arity$1 ? call.cljs$core$IFn$_invoke$arity$1(arg) : call.call(null,arg));


var G__141851 = seq__141722;
var G__141852 = chunk__141723;
var G__141853 = count__141724;
var G__141854 = (i__141725 + (1));
seq__141722 = G__141851;
chunk__141723 = G__141852;
count__141724 = G__141853;
i__141725 = G__141854;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__141722);
if(temp__5753__auto__){
var seq__141722__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__141722__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__141722__$1);
var G__141855 = cljs.core.chunk_rest(seq__141722__$1);
var G__141856 = c__4649__auto__;
var G__141857 = cljs.core.count(c__4649__auto__);
var G__141858 = (0);
seq__141722 = G__141855;
chunk__141723 = G__141856;
count__141724 = G__141857;
i__141725 = G__141858;
continue;
} else {
var call = cljs.core.first(seq__141722__$1);
(call.cljs$core$IFn$_invoke$arity$1 ? call.cljs$core$IFn$_invoke$arity$1(arg) : call.call(null,arg));


var G__141861 = cljs.core.next(seq__141722__$1);
var G__141862 = null;
var G__141863 = (0);
var G__141864 = (0);
seq__141722 = G__141861;
chunk__141723 = G__141862;
count__141724 = G__141863;
i__141725 = G__141864;
continue;
}
} else {
return null;
}
}
break;
}
})], null);
});
repl_tooling.repl_client.nrepl.wait_for = (function repl_tooling$repl_client$nrepl$wait_for(calls,id,timeout){
var p = promesa.core.deferred();
var f = (function (msg){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,cljs.core.get.cljs$core$IFn$_invoke$arity$2(msg,"id"))){
return promesa.core.resolve_BANG_.cljs$core$IFn$_invoke$arity$2(p,msg);
} else {
return null;
}
});
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(calls,cljs.core.conj,f);

promesa.protocols._bind(null,(function (___31810__auto__){
return promesa.protocols._bind(promesa.core.delay.cljs$core$IFn$_invoke$arity$1(timeout),(function (___31809__auto__){
return promesa.protocols._bind(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(calls,cljs.core.disj,f),(function (___31809__auto____$1){
return promesa.protocols._promise(promesa.core.reject_BANG_(p,new cljs.core.Keyword(null,"timeout","timeout",-318625318)));
}));
}));
}));

return p;
});
repl_tooling.repl_client.nrepl.session_for = (function repl_tooling$repl_client$nrepl$session_for(buffer,on_output){
var decode_BANG_ = repl_tooling.nrepl.bencode.decoder();
var pending = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var new_out = (function (out){
(on_output.cljs$core$IFn$_invoke$arity$1 ? on_output.cljs$core$IFn$_invoke$arity$1(out) : on_output.call(null,out));

if((out == null)){
return cljs.core.remove_watch(buffer,new cljs.core.Keyword(null,"nrepl-evaluator","nrepl-evaluator",-21110630));
} else {
return null;
}
});
var vec__141740 = repl_tooling.repl_client.nrepl.callback_fns();
var calls = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__141740,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__141740,(1),null);
var session_msg = repl_tooling.repl_client.nrepl.wait_for(calls,"new-session",(1000));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(calls,cljs.core.conj,(function (p1__141735_SHARP_){
return repl_tooling.repl_client.nrepl.treat_output_BANG_(pending,new_out,p1__141735_SHARP_);
}));

cljs.core.add_watch(buffer,new cljs.core.Keyword(null,"nrepl-evaluator","nrepl-evaluator",-21110630),(function (_,___$1,___$2,p__141746){
var vec__141747 = p__141746;
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__141747,(0),null);
return repl_tooling.repl_client.nrepl.treat_socket_output_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"decode!","decode!",-1151476196),decode_BANG_,new cljs.core.Keyword(null,"buffer","buffer",617295198),buffer,new cljs.core.Keyword(null,"val","val",128701612),val,new cljs.core.Keyword(null,"treat","treat",357622602),callback,new cljs.core.Keyword(null,"on-output","on-output",-2023300495),new_out], null));
}));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(buffer,cljs.core.identity);

return promesa.core.then.cljs$core$IFn$_invoke$arity$2(session_msg,(function (p1__141736_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[pending,p1__141736_SHARP_],null));
}));
});
repl_tooling.repl_client.nrepl.repl_for = (function repl_tooling$repl_client$nrepl$repl_for(conn,buffer,on_output){
return promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(repl_tooling.repl_client.nrepl.session_for(buffer,on_output),(function (p__141754){
var vec__141755 = p__141754;
var pending = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__141755,(0),null);
var session_msg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__141755,(1),null);
return promesa.protocols._bind(cljs.core.get.cljs$core$IFn$_invoke$arity$2(session_msg,"new-session"),(function (session_id){
return promesa.protocols._bind(repl_tooling.repl_client.nrepl.__GT_Evaluator(conn,pending,session_id),(function (evaluator){
return promesa.protocols._bind(repl_tooling.eval.eval.cljs$core$IFn$_invoke$arity$3(evaluator,"(ns ___repl-tooling.__generic_printer_blob\n  (:require [clojure.string :as str]\n            #?(:cljs [cljs.reader])))\n\n(defmulti serialize #(-> % type pr-str))\n\n#?(:joker\n   (defn tagged-literal [a-sym a-val]\n     (symbol (str \"#\" a-sym \" \" (pr-str a-val)))))\n\n(defn- to-symbol [res]\n  (let [r (pr-str res)]\n    (if (re-matches #\":[a-zA-Z0-9\\-.$!?\\/><*=_]+\" r)\n      res\n      (tagged-literal 'unrepl/bad-symbol [nil (pr-str res)]))))\n\n(defn- to-keyword [res]\n  (let [r (pr-str res)]\n    (if (re-matches #\"[a-zA-Z0-9\\-.$!?\\/><*=_]+\" r)\n      res\n      (tagged-literal 'unrepl/bad-keyword [(namespace res) (name res)]))))\n\n#?(:cljs\n   (defn norm-js-obj [js-obj]\n     (tagged-literal\n      'unrepl/browsable\n      [(if (= js/Function (type js-obj))\n         (let [splitted (-> js-obj .-name cljs.core/demunge\n                            (clojure.string/split (re-pattern \"/\")))]\n           (tagged-literal 'unrepl/bad-symbol\n                           [(->> splitted\n                                 butlast\n                                 (clojure.string/join \".\")\n                                 not-empty)\n                            (str (last splitted) \" (function)\")]))\n         (if (try (cljs.reader/read-string {:default tagged-literal}\n                                           (pr-str js-obj))\n               (catch :default _ nil))\n           js-obj\n           (tagged-literal 'unrepl/bad-symbol [nil (pr-str js-obj)])))\n       {:repl-tooling/... `(quote\n                             ~(->> js-obj\n                                   js/Object.getPrototypeOf\n                                   js/Object.getOwnPropertyNames\n                                   (concat (js/Object.getOwnPropertyNames js-obj))\n                                   distinct\n                                   sort\n                                   (map #(symbol (str \".\" %)))))}])))\n\n#?(:clje\n   (extend-protocol clojerl.IHash\n     clojerl.reader.TaggedLiteral\n     (hash [this]\n       (+ (clojerl.IHash/hash (get this :tag))\n          (clojerl.IHash/hash (get this :form))))))\n\n#?(:clje\n   (defn normalize-error [res trace]\n     (let [trace (mapv (fn [[_ _ _ [[_ file] [_ line]]]]\n                         [nil nil (str file) line])\n                       trace)]\n       (if (instance? clojerl.ExceptionInfo res)\n         {:type \"clojerl.ExceptionInfo\"\n          :message (serialize (.message res))\n          :data (serialize (ex-data res))\n          :trace trace}\n         {:type \"Error\"\n          :message (serialize res)\n          :trace trace}))))\n\n#?(:cljs\n   (defmethod serialize \"#object[cljs$core$ExceptionInfo]\" [res]\n     (tagged-literal 'error\n        {:type \"cljs.core.ExceptionInfo\"\n         :data (.-data res)\n         :message (.-message res)\n         :trace (->> res .-stack clojure.string/split-lines)})))\n\n(defmethod serialize \"erlang.Tuple\" [res]\n  (tagged-literal 'erl (serialize (vec res))))\n\n#?(:cljs\n    (defmethod serialize \"#object[Promise]\" [res]\n      (let [id (gensym \"patch\")]\n        (.then res\n          (fn [res]\n            (tap>\n             (tagged-literal\n              'repl-tooling/patch\n              [id\n               (pr-str\n                (tagged-literal\n                 'promise\n                 (serialize res)))]))))\n        (tagged-literal\n         'repl-tooling/patchable [id (tagged-literal 'promise '<pending>)]))))\n\n(defmethod serialize :default [res]\n  (cond\n     #?(:cljs false :clje false :default (ratio? res))\n     (tagged-literal 'repl-tooling/literal-render (pr-str res))\n\n    #?(:joker false :default (record? res))\n    res\n\n    (map? res)\n    (->> res (map #(mapv serialize %)) (into {}))\n\n    (vector? res)\n    (mapv serialize res)\n\n    (set? res)\n    (into #{} (map serialize res))\n\n    (coll? res)\n    (map serialize res)\n\n    (var? res)\n    (tagged-literal 'repl-tooling/literal-render (pr-str res))\n\n    (->> res type str (re-find #\"(?i)regex\"))\n    (tagged-literal 'unrepl/pattern (-> (pr-str res)\n                                        (clojure.string/replace (re-pattern \"^#\\\"\") \"\")\n                                        (clojure.string/replace (re-pattern \"\\\"$\") \"\")))\n\n    (symbol? res) (to-symbol res)\n    (keyword? res) (to-keyword res)\n\n    (->> res type str (re-find #\"Big(Decimal|Float)\"))\n    (str \"#unrepl/bigdec \" res)\n\n    (->> res type str (re-find #\"BigInt\"))\n    (str \"#unrepl/bigint \"res)\n\n    (->> res pr-str (re-find #\"^#error \")) res\n\n    (number? res)\n    (if (> res 9007199254740990)\n      (tagged-literal 'repl-tooling/literal-render (pr-str res))\n      res)\n\n    (contains? #{true false nil} res) res\n\n    #?(:cljs (instance? js/Error res))\n    #?(:cljs (tagged-literal 'error\n               {:type (.-name res)\n                :message (.-message res)\n                :trace (->> res .-stack clojure.string/split-lines)}))\n\n    (string? res) res\n    :else #?(:cljs (norm-js-obj res)\n             :default (tagged-literal 'repl-tooling/literal-render (pr-str res)))))\n\n(defn nrepl-pprint [value writer opts]\n  (.write writer (pr-str (serialize value))))\n\n(ns user)\n:DONE-BLOB\n",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ignore","ignore",-1631542033),true,new cljs.core.Keyword(null,"default-printer","default-printer",1627873917),true], null)),(function (_){
return promesa.protocols._bind(promesa.core.delay.cljs$core$IFn$_invoke$arity$1((100)),(function (___$1){
return promesa.protocols._bind(promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.then.cljs$core$IFn$_invoke$arity$2(repl_tooling.eval.eval.cljs$core$IFn$_invoke$arity$2(evaluator,repl_tooling.repl_client.nrepl.detection),new cljs.core.Keyword(null,"result","result",1415092211)),cljs.core.constantly(new cljs.core.Keyword(null,"unknown","unknown",-935977881))),(function (repl_kind){
return promesa.protocols._bind(null,(function (___31810__auto__){
return promesa.protocols._promise(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"evaluator","evaluator",704655039),evaluator,new cljs.core.Keyword(null,"conn","conn",278309663),conn,new cljs.core.Keyword(null,"buffer","buffer",617295198),buffer,new cljs.core.Keyword(null,"repl-kind","repl-kind",607962569),repl_kind], null));
}));
}));
}));
}));
}));
}));
}));
}));
});

//# sourceMappingURL=repl_tooling.repl_client.nrepl.js.map
