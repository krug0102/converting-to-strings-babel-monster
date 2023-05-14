goog.provide('repl_tooling.integrations.repls');
repl_tooling.integrations.repls.detect_nrepl = (function repl_tooling$integrations$repls$detect_nrepl(buffer){
var p = promesa.core.deferred();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.deref(buffer))){
cljs.core.add_watch(buffer,new cljs.core.Keyword(null,"nrepl","nrepl",745184018),(function (_,___$1,___$2,p__40905){
var vec__40906 = p__40905;
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40906,(0),null);
cljs.core.remove_watch(buffer,new cljs.core.Keyword(null,"nrepl","nrepl",745184018));

if(cljs.core.truth_(cljs.core.re_find(/^d\d/,val))){
return promesa.core.resolve_BANG_.cljs$core$IFn$_invoke$arity$2(p,true);
} else {
return promesa.core.resolve_BANG_.cljs$core$IFn$_invoke$arity$2(p,false);
}
}));
} else {
promesa.core.resolve_BANG_.cljs$core$IFn$_invoke$arity$2(p,false);
}

return p;
});
repl_tooling.integrations.repls.detect_output_kind = (function repl_tooling$integrations$repls$detect_output_kind(row,kind_p){
var temp__5753__auto__ = cljs.core.re_find(/:using-(.*)-repl/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(row));
if(cljs.core.truth_(temp__5753__auto__)){
var row_kind = temp__5753__auto__;
return promesa.core.resolve_BANG_.cljs$core$IFn$_invoke$arity$2(kind_p,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.second(row_kind)));
} else {
return null;
}
});
repl_tooling.integrations.repls.detect_socket_kind = (function repl_tooling$integrations$repls$detect_socket_kind(conn,buffer){
var kind_p = promesa.core.deferred();
var control = repl_tooling.repl_client.connection.treat_buffer_BANG_(buffer,(function (p1__40917_SHARP_){
return repl_tooling.integrations.repls.detect_output_kind(p1__40917_SHARP_,kind_p);
}),cljs.core.identity);
return promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(conn.write("\n"),(function (_){
return promesa.protocols._bind(repl_tooling.repl_client.connection.next_line(control),(function (___$1){
return promesa.protocols._bind(conn.write(["#?(",":bb :using-bb-repl ",":joker :using-joker-repl ",":clje :using-clje-repl ",":cljs :using-cljs-repl ",":cljr :using-cljr-repl ",":clj :using-clj-repl ",")\n"].join('')),(function (___$2){
return promesa.protocols._bind(repl_tooling.repl_client.connection.next_line(control),(function (___$3){
return promesa.protocols._bind(conn.write(":using-unknown-repl\n"),(function (___$4){
return promesa.protocols._bind(kind_p,(function (kind){
return promesa.protocols._bind(null,(function (___31810__auto__){
return promesa.protocols._bind(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(control,cljs.core.assoc,new cljs.core.Keyword(null,"on-line","on-line",657365746),cljs.core.identity),(function (___31809__auto__){
return promesa.protocols._promise(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"conn","conn",278309663),conn,new cljs.core.Keyword(null,"buffer","buffer",617295198),buffer,new cljs.core.Keyword(null,"control","control",1892578036),control,new cljs.core.Keyword(null,"repl-kind","repl-kind",607962569),kind], null));
}));
}));
}));
}));
}));
}));
}));
}));
}));
});
repl_tooling.integrations.repls.connect_and_detect_BANG_ = (function repl_tooling$integrations$repls$connect_and_detect_BANG_(host,port,on_output){
return promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(repl_tooling.repl_client.connection.connect_BANG_(host,port),(function (p__40935){
var map__40938 = p__40935;
var map__40938__$1 = cljs.core.__destructure_map(map__40938);
var conn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40938__$1,new cljs.core.Keyword(null,"conn","conn",278309663));
var buffer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40938__$1,new cljs.core.Keyword(null,"buffer","buffer",617295198));
return promesa.protocols._bind(promesa.core.delay.cljs$core$IFn$_invoke$arity$1((2)),(function (_){
return promesa.protocols._bind(conn.write(repl_tooling.nrepl.bencode.encode(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"new-session",new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"clone","clone",711747572)], null)),"binary"),(function (___$1){
return promesa.protocols._bind(repl_tooling.integrations.repls.detect_nrepl(buffer),(function (nrepl_QMARK_){
return promesa.protocols._bind(null,(function (___31810__auto__){
return promesa.protocols._promise((cljs.core.truth_(nrepl_QMARK_)?repl_tooling.repl_client.nrepl.repl_for(conn,buffer,on_output):repl_tooling.integrations.repls.detect_socket_kind(conn,buffer)));
}));
}));
}));
}));
}));
}));
});
repl_tooling.integrations.repls.add_to_eval_queue = (function repl_tooling$integrations$repls$add_to_eval_queue(cmd_for,command,opts,callback,pending_evals,eval_cmd){
var id = (function (){var or__4223__auto__ = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}
})();
var command__$1 = (function (){var G__40945 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"command","command",-894540724),command,new cljs.core.Keyword(null,"id","id",-1388402092),id], null);
return (cmd_for.cljs$core$IFn$_invoke$arity$1 ? cmd_for.cljs$core$IFn$_invoke$arity$1(G__40945) : cmd_for.call(null,G__40945));
})();
var temp__5751__auto___41333 = new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(command__$1);
if(cljs.core.truth_(temp__5751__auto___41333)){
var result_41334 = temp__5751__auto___41333;
var pending_41335 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(opts,new cljs.core.Keyword(null,"command","command",-894540724),result_41334,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"callback","callback",-705136228),callback,new cljs.core.Keyword(null,"id","id",-1388402092),id], 0));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(pending_evals,cljs.core.assoc,id,pending_41335);

(eval_cmd.cljs$core$IFn$_invoke$arity$1 ? eval_cmd.cljs$core$IFn$_invoke$arity$1(pending_41335) : eval_cmd.call(null,pending_41335));
} else {
(callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(command__$1) : callback.call(null,command__$1));
}

return id;
});

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
repl_tooling.integrations.repls.Generic = (function (pending_evals,cmd_for,eval_cmd,__meta,__extmap,__hash){
this.pending_evals = pending_evals;
this.cmd_for = cmd_for;
this.eval_cmd = eval_cmd;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(repl_tooling.integrations.repls.Generic.prototype.repl_tooling$eval$Evaluator$ = cljs.core.PROTOCOL_SENTINEL);

(repl_tooling.integrations.repls.Generic.prototype.repl_tooling$eval$Evaluator$evaluate$arity$4 = (function (_,command,opts,callback){
var self__ = this;
var ___$1 = this;
return repl_tooling.integrations.repls.add_to_eval_queue(self__.cmd_for,command,opts,callback,self__.pending_evals,self__.eval_cmd);
}));

(repl_tooling.integrations.repls.Generic.prototype.repl_tooling$eval$Evaluator$break$arity$2 = (function (_,___$1){
var self__ = this;
var ___$2 = this;
return null;
}));

(repl_tooling.integrations.repls.Generic.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(repl_tooling.integrations.repls.Generic.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k40955,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__40974 = k40955;
var G__40974__$1 = (((G__40974 instanceof cljs.core.Keyword))?G__40974.fqn:null);
switch (G__40974__$1) {
case "pending-evals":
return self__.pending_evals;

break;
case "cmd-for":
return self__.cmd_for;

break;
case "eval-cmd":
return self__.eval_cmd;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k40955,else__4475__auto__);

}
}));

(repl_tooling.integrations.repls.Generic.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__40981){
var vec__40982 = p__40981;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40982,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40982,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(repl_tooling.integrations.repls.Generic.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#repl-tooling.integrations.repls.Generic{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pending-evals","pending-evals",1249255957),self__.pending_evals],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cmd-for","cmd-for",-775116831),self__.cmd_for],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"eval-cmd","eval-cmd",1308555311),self__.eval_cmd],null))], null),self__.__extmap));
}));

(repl_tooling.integrations.repls.Generic.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__40954){
var self__ = this;
var G__40954__$1 = this;
return (new cljs.core.RecordIter((0),G__40954__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pending-evals","pending-evals",1249255957),new cljs.core.Keyword(null,"cmd-for","cmd-for",-775116831),new cljs.core.Keyword(null,"eval-cmd","eval-cmd",1308555311)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(repl_tooling.integrations.repls.Generic.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(repl_tooling.integrations.repls.Generic.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new repl_tooling.integrations.repls.Generic(self__.pending_evals,self__.cmd_for,self__.eval_cmd,self__.__meta,self__.__extmap,self__.__hash));
}));

(repl_tooling.integrations.repls.Generic.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
}));

(repl_tooling.integrations.repls.Generic.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (coll__4469__auto__){
return (1385988952 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
})(this__4468__auto____$1);
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(repl_tooling.integrations.repls.Generic.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this40956,other40957){
var self__ = this;
var this40956__$1 = this;
return (((!((other40957 == null)))) && ((((this40956__$1.constructor === other40957.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this40956__$1.pending_evals,other40957.pending_evals)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this40956__$1.cmd_for,other40957.cmd_for)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this40956__$1.eval_cmd,other40957.eval_cmd)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this40956__$1.__extmap,other40957.__extmap)))))))))));
}));

(repl_tooling.integrations.repls.Generic.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cmd-for","cmd-for",-775116831),null,new cljs.core.Keyword(null,"eval-cmd","eval-cmd",1308555311),null,new cljs.core.Keyword(null,"pending-evals","pending-evals",1249255957),null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new repl_tooling.integrations.repls.Generic(self__.pending_evals,self__.cmd_for,self__.eval_cmd,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(repl_tooling.integrations.repls.Generic.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k40955){
var self__ = this;
var this__4479__auto____$1 = this;
var G__41009 = k40955;
var G__41009__$1 = (((G__41009 instanceof cljs.core.Keyword))?G__41009.fqn:null);
switch (G__41009__$1) {
case "pending-evals":
case "cmd-for":
case "eval-cmd":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k40955);

}
}));

(repl_tooling.integrations.repls.Generic.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__40954){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__41010 = cljs.core.keyword_identical_QMARK_;
var expr__41011 = k__4481__auto__;
if(cljs.core.truth_((pred__41010.cljs$core$IFn$_invoke$arity$2 ? pred__41010.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pending-evals","pending-evals",1249255957),expr__41011) : pred__41010.call(null,new cljs.core.Keyword(null,"pending-evals","pending-evals",1249255957),expr__41011)))){
return (new repl_tooling.integrations.repls.Generic(G__40954,self__.cmd_for,self__.eval_cmd,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__41010.cljs$core$IFn$_invoke$arity$2 ? pred__41010.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cmd-for","cmd-for",-775116831),expr__41011) : pred__41010.call(null,new cljs.core.Keyword(null,"cmd-for","cmd-for",-775116831),expr__41011)))){
return (new repl_tooling.integrations.repls.Generic(self__.pending_evals,G__40954,self__.eval_cmd,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__41010.cljs$core$IFn$_invoke$arity$2 ? pred__41010.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"eval-cmd","eval-cmd",1308555311),expr__41011) : pred__41010.call(null,new cljs.core.Keyword(null,"eval-cmd","eval-cmd",1308555311),expr__41011)))){
return (new repl_tooling.integrations.repls.Generic(self__.pending_evals,self__.cmd_for,G__40954,self__.__meta,self__.__extmap,null));
} else {
return (new repl_tooling.integrations.repls.Generic(self__.pending_evals,self__.cmd_for,self__.eval_cmd,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__40954),null));
}
}
}
}));

(repl_tooling.integrations.repls.Generic.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"pending-evals","pending-evals",1249255957),self__.pending_evals,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"cmd-for","cmd-for",-775116831),self__.cmd_for,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"eval-cmd","eval-cmd",1308555311),self__.eval_cmd,null))], null),self__.__extmap));
}));

(repl_tooling.integrations.repls.Generic.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__40954){
var self__ = this;
var this__4471__auto____$1 = this;
return (new repl_tooling.integrations.repls.Generic(self__.pending_evals,self__.cmd_for,self__.eval_cmd,G__40954,self__.__extmap,self__.__hash));
}));

(repl_tooling.integrations.repls.Generic.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4478__auto__,(0)),cljs.core._nth(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(repl_tooling.integrations.repls.Generic.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pending-evals","pending-evals",-1405179812,null),new cljs.core.Symbol(null,"cmd-for","cmd-for",865414696,null),new cljs.core.Symbol(null,"eval-cmd","eval-cmd",-1345880458,null)], null);
}));

(repl_tooling.integrations.repls.Generic.cljs$lang$type = true);

(repl_tooling.integrations.repls.Generic.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"repl-tooling.integrations.repls/Generic",null,(1),null));
}));

(repl_tooling.integrations.repls.Generic.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"repl-tooling.integrations.repls/Generic");
}));

/**
 * Positional factory function for repl-tooling.integrations.repls/Generic.
 */
repl_tooling.integrations.repls.__GT_Generic = (function repl_tooling$integrations$repls$__GT_Generic(pending_evals,cmd_for,eval_cmd){
return (new repl_tooling.integrations.repls.Generic(pending_evals,cmd_for,eval_cmd,null,null,null));
});

/**
 * Factory function for repl-tooling.integrations.repls/Generic, taking a map of keywords to field values.
 */
repl_tooling.integrations.repls.map__GT_Generic = (function repl_tooling$integrations$repls$map__GT_Generic(G__40966){
var extmap__4512__auto__ = (function (){var G__41029 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__40966,new cljs.core.Keyword(null,"pending-evals","pending-evals",1249255957),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"cmd-for","cmd-for",-775116831),new cljs.core.Keyword(null,"eval-cmd","eval-cmd",1308555311)], 0));
if(cljs.core.record_QMARK_(G__40966)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__41029);
} else {
return G__41029;
}
})();
return (new repl_tooling.integrations.repls.Generic(new cljs.core.Keyword(null,"pending-evals","pending-evals",1249255957).cljs$core$IFn$_invoke$arity$1(G__40966),new cljs.core.Keyword(null,"cmd-for","cmd-for",-775116831).cljs$core$IFn$_invoke$arity$1(G__40966),new cljs.core.Keyword(null,"eval-cmd","eval-cmd",1308555311).cljs$core$IFn$_invoke$arity$1(G__40966),null,cljs.core.not_empty(extmap__4512__auto__),null));
});

repl_tooling.integrations.repls.capture_eval_result = (function repl_tooling$integrations$repls$capture_eval_result(pending_evals,on_output,result){
var vec__41045 = result;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41045,(0),null);
var edn_result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41045,(1),null);
var map__41049 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(pending_evals),id);
var map__41049__$1 = cljs.core.__destructure_map(map__41049);
var callback = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41049__$1,new cljs.core.Keyword(null,"callback","callback",-705136228));
var pass = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41049__$1,new cljs.core.Keyword(null,"pass","pass",1574159993));
var ignore = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41049__$1,new cljs.core.Keyword(null,"ignore","ignore",-1631542033));
var msg = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pass,edn_result], 0));
if(cljs.core.truth_(ignore)){
} else {
(on_output.cljs$core$IFn$_invoke$arity$1 ? on_output.cljs$core$IFn$_invoke$arity$1(msg) : on_output.call(null,msg));
}

return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(msg) : callback.call(null,msg));
});
repl_tooling.integrations.repls.send_namespace = (function repl_tooling$integrations$repls$send_namespace(conn,ns_command,namespace,control){
if(cljs.core.truth_(namespace)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(control,cljs.core.update,new cljs.core.Keyword(null,"ignore-output","ignore-output",-1884856211),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([/^\r?\n?.*?=> /,/(?:.+Namespace.+|nil)\r?\n/], 0));

return conn.write(["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns_command),cljs.core.str.cljs$core$IFn$_invoke$arity$1(namespace),")"].join(''));
} else {
return null;
}
});
repl_tooling.integrations.repls.wait_for_blob_done = (function repl_tooling$integrations$repls$wait_for_blob_done(kind,conn,control){
conn.write((function (){var G__41066 = ["(ns ___repl-tooling.__generic_printer_blob\n  (:require [clojure.string :as str]\n            #?(:cljs [cljs.reader])))\n\n(defmulti serialize #(-> % type pr-str))\n\n#?(:joker\n   (defn tagged-literal [a-sym a-val]\n     (symbol (str \"#\" a-sym \" \" (pr-str a-val)))))\n\n(defn- to-symbol [res]\n  (let [r (pr-str res)]\n    (if (re-matches #\":[a-zA-Z0-9\\-.$!?\\/><*=_]+\" r)\n      res\n      (tagged-literal 'unrepl/bad-symbol [nil (pr-str res)]))))\n\n(defn- to-keyword [res]\n  (let [r (pr-str res)]\n    (if (re-matches #\"[a-zA-Z0-9\\-.$!?\\/><*=_]+\" r)\n      res\n      (tagged-literal 'unrepl/bad-keyword [(namespace res) (name res)]))))\n\n#?(:cljs\n   (defn norm-js-obj [js-obj]\n     (tagged-literal\n      'unrepl/browsable\n      [(if (= js/Function (type js-obj))\n         (let [splitted (-> js-obj .-name cljs.core/demunge\n                            (clojure.string/split (re-pattern \"/\")))]\n           (tagged-literal 'unrepl/bad-symbol\n                           [(->> splitted\n                                 butlast\n                                 (clojure.string/join \".\")\n                                 not-empty)\n                            (str (last splitted) \" (function)\")]))\n         (if (try (cljs.reader/read-string {:default tagged-literal}\n                                           (pr-str js-obj))\n               (catch :default _ nil))\n           js-obj\n           (tagged-literal 'unrepl/bad-symbol [nil (pr-str js-obj)])))\n       {:repl-tooling/... `(quote\n                             ~(->> js-obj\n                                   js/Object.getPrototypeOf\n                                   js/Object.getOwnPropertyNames\n                                   (concat (js/Object.getOwnPropertyNames js-obj))\n                                   distinct\n                                   sort\n                                   (map #(symbol (str \".\" %)))))}])))\n\n#?(:clje\n   (extend-protocol clojerl.IHash\n     clojerl.reader.TaggedLiteral\n     (hash [this]\n       (+ (clojerl.IHash/hash (get this :tag))\n          (clojerl.IHash/hash (get this :form))))))\n\n#?(:clje\n   (defn normalize-error [res trace]\n     (let [trace (mapv (fn [[_ _ _ [[_ file] [_ line]]]]\n                         [nil nil (str file) line])\n                       trace)]\n       (if (instance? clojerl.ExceptionInfo res)\n         {:type \"clojerl.ExceptionInfo\"\n          :message (serialize (.message res))\n          :data (serialize (ex-data res))\n          :trace trace}\n         {:type \"Error\"\n          :message (serialize res)\n          :trace trace}))))\n\n#?(:cljs\n   (defmethod serialize \"#object[cljs$core$ExceptionInfo]\" [res]\n     (tagged-literal 'error\n        {:type \"cljs.core.ExceptionInfo\"\n         :data (.-data res)\n         :message (.-message res)\n         :trace (->> res .-stack clojure.string/split-lines)})))\n\n(defmethod serialize \"erlang.Tuple\" [res]\n  (tagged-literal 'erl (serialize (vec res))))\n\n#?(:cljs\n    (defmethod serialize \"#object[Promise]\" [res]\n      (let [id (gensym \"patch\")]\n        (.then res\n          (fn [res]\n            (tap>\n             (tagged-literal\n              'repl-tooling/patch\n              [id\n               (pr-str\n                (tagged-literal\n                 'promise\n                 (serialize res)))]))))\n        (tagged-literal\n         'repl-tooling/patchable [id (tagged-literal 'promise '<pending>)]))))\n\n(defmethod serialize :default [res]\n  (cond\n     #?(:cljs false :clje false :default (ratio? res))\n     (tagged-literal 'repl-tooling/literal-render (pr-str res))\n\n    #?(:joker false :default (record? res))\n    res\n\n    (map? res)\n    (->> res (map #(mapv serialize %)) (into {}))\n\n    (vector? res)\n    (mapv serialize res)\n\n    (set? res)\n    (into #{} (map serialize res))\n\n    (coll? res)\n    (map serialize res)\n\n    (var? res)\n    (tagged-literal 'repl-tooling/literal-render (pr-str res))\n\n    (->> res type str (re-find #\"(?i)regex\"))\n    (tagged-literal 'unrepl/pattern (-> (pr-str res)\n                                        (clojure.string/replace (re-pattern \"^#\\\"\") \"\")\n                                        (clojure.string/replace (re-pattern \"\\\"$\") \"\")))\n\n    (symbol? res) (to-symbol res)\n    (keyword? res) (to-keyword res)\n\n    (->> res type str (re-find #\"Big(Decimal|Float)\"))\n    (str \"#unrepl/bigdec \" res)\n\n    (->> res type str (re-find #\"BigInt\"))\n    (str \"#unrepl/bigint \"res)\n\n    (->> res pr-str (re-find #\"^#error \")) res\n\n    (number? res)\n    (if (> res 9007199254740990)\n      (tagged-literal 'repl-tooling/literal-render (pr-str res))\n      res)\n\n    (contains? #{true false nil} res) res\n\n    #?(:cljs (instance? js/Error res))\n    #?(:cljs (tagged-literal 'error\n               {:type (.-name res)\n                :message (.-message res)\n                :trace (->> res .-stack clojure.string/split-lines)}))\n\n    (string? res) res\n    :else #?(:cljs (norm-js-obj res)\n             :default (tagged-literal 'repl-tooling/literal-render (pr-str res)))))\n\n(defn nrepl-pprint [value writer opts]\n  (.write writer (pr-str (serialize value))))\n\n(ns user)\n:DONE-BLOB\n","\n"].join('');
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"joker","joker",-976230320),kind)){
return clojure.string.replace(G__41066,/clojure.string/,"joker.string");
} else {
return G__41066;
}
})());

var run41096 = promesa.core._STAR_loop_run_fn_STAR_;
var deferred41095 = promesa.core.deferred();
var loop41094 = (function repl_tooling$integrations$repls$wait_for_blob_done_$_loop41094(params__31844__auto__){
return promesa.core.handle.cljs$core$IFn$_invoke$arity$2(promesa.core.then.cljs$core$IFn$_invoke$arity$2(promesa.core.all(params__31844__auto__),(function (p__41097){
var vec__41098 = p__41097;
var curr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41098,(0),null);
return promesa.protocols._bind(null,(function (___31810__auto__){
return promesa.protocols._promise((cljs.core.truth_(cljs.core.re_find(/:DONE-BLOB/,curr))?null:(new cljs.core.PersistentArrayMap(null,(2),[new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("promesa.core","recur","promesa.core/recur",100580374),new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [repl_tooling.repl_client.connection.next_line(control)], null)],null))));
}));
})),(function (res__31845__auto__,err__31846__auto__){
if((!((err__31846__auto__ == null)))){
return promesa.core.reject_BANG_(deferred41095,err__31846__auto__);
} else {
if(((cljs.core.map_QMARK_(res__31845__auto__)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(res__31845__auto__),new cljs.core.Keyword("promesa.core","recur","promesa.core/recur",100580374))))){
var G__41104_41362 = (function (){
return repl_tooling$integrations$repls$wait_for_blob_done_$_loop41094(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(res__31845__auto__));
});
(run41096.cljs$core$IFn$_invoke$arity$1 ? run41096.cljs$core$IFn$_invoke$arity$1(G__41104_41362) : run41096.call(null,G__41104_41362));

return null;
} else {
return promesa.core.resolve_BANG_.cljs$core$IFn$_invoke$arity$2(deferred41095,res__31845__auto__);

}
}
}));
});
var G__41109_41363 = (function (){
return loop41094(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [repl_tooling.repl_client.connection.next_line(control)], null));
});
(run41096.cljs$core$IFn$_invoke$arity$1 ? run41096.cljs$core$IFn$_invoke$arity$1(G__41109_41363) : run41096.call(null,G__41109_41363));

return deferred41095;
});
repl_tooling.integrations.repls.instantiate_correct_evaluator = (function repl_tooling$integrations$repls$instantiate_correct_evaluator(repl_kind,conn,control,on_output){
var pending_evals = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cmd_for = (function (){var G__41127 = repl_kind;
var G__41127__$1 = (((G__41127 instanceof cljs.core.Keyword))?G__41127.fqn:null);
switch (G__41127__$1) {
case "bb":
return (function (p__41133){
var map__41134 = p__41133;
var map__41134__$1 = cljs.core.__destructure_map(map__41134);
var command = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41134__$1,new cljs.core.Keyword(null,"command","command",-894540724));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41134__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return repl_tooling.repl_client.source.wrap_command.cljs$core$IFn$_invoke$arity$4(id,command,new cljs.core.Symbol(null,"java.lang.Throwable","java.lang.Throwable",648042246,null),true);
});

break;
case "joker":
return (function (p__41136){
var map__41137 = p__41136;
var map__41137__$1 = cljs.core.__destructure_map(map__41137);
var command = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41137__$1,new cljs.core.Keyword(null,"command","command",-894540724));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41137__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var o = repl_tooling.repl_client.source.wrap_command.cljs$core$IFn$_invoke$arity$4(id,command,new cljs.core.Symbol(null,"Error","Error",-1692662047,null),false);
var res = new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(o);
if(cljs.core.truth_(res)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",1415092211),clojure.string.replace(res,/clojure\.core\//,"joker.core/")], null);
} else {
return o;
}
});

break;
case "cljs":
return (function (p__41138){
var map__41139 = p__41138;
var map__41139__$1 = cljs.core.__destructure_map(map__41139);
var command = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41139__$1,new cljs.core.Keyword(null,"command","command",-894540724));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41139__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return repl_tooling.repl_client.source.wrap_command.cljs$core$IFn$_invoke$arity$4(id,command,new cljs.core.Keyword(null,"default","default",-1987822328),true);
});

break;
case "cljr":
return (function (p__41140){
var map__41141 = p__41140;
var map__41141__$1 = cljs.core.__destructure_map(map__41141);
var command = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41141__$1,new cljs.core.Keyword(null,"command","command",-894540724));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41141__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return repl_tooling.repl_client.source.wrap_command.cljs$core$IFn$_invoke$arity$4(id,command,new cljs.core.Symbol(null,"System.Exception","System.Exception",-1648590948,null),true);
});

break;
case "clje":
return (function (p__41142){
var map__41143 = p__41142;
var map__41143__$1 = cljs.core.__destructure_map(map__41143);
var command = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41143__$1,new cljs.core.Keyword(null,"command","command",-894540724));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41143__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return repl_tooling.repl_client.source.wrap_command.cljs$core$IFn$_invoke$arity$4(id,command,new cljs.core.Symbol(null,"_","_",-1201019570,null),false);
});

break;
default:
return (function (p__41144){
var map__41145 = p__41144;
var map__41145__$1 = cljs.core.__destructure_map(map__41145);
var command = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41145__$1,new cljs.core.Keyword(null,"command","command",-894540724));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41145__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return repl_tooling.repl_client.source.wrap_command.cljs$core$IFn$_invoke$arity$4(id,command,new cljs.core.Symbol(null,"Exception","Exception",1902226074,null),true);
});

}
})();
var eval_command = (function (){var G__41146 = repl_kind;
var G__41146__$1 = (((G__41146 instanceof cljs.core.Keyword))?G__41146.fqn:null);
switch (G__41146__$1) {
case "bb":
return (function (p__41147){
var map__41148 = p__41147;
var map__41148__$1 = cljs.core.__destructure_map(map__41148);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41148__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var command = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41148__$1,new cljs.core.Keyword(null,"command","command",-894540724));
var namespace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41148__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
repl_tooling.integrations.repls.send_namespace(conn,"in-ns '",namespace,control);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(control,cljs.core.update,new cljs.core.Keyword(null,"pending-evals","pending-evals",1249255957),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id], 0));

return conn.write(command);
});

break;
case "joker":
return (function (p__41149){
var map__41150 = p__41149;
var map__41150__$1 = cljs.core.__destructure_map(map__41150);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41150__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var command = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41150__$1,new cljs.core.Keyword(null,"command","command",-894540724));
var namespace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41150__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
repl_tooling.integrations.repls.send_namespace(conn,"joker.core/ns ",namespace,control);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(control,cljs.core.update,new cljs.core.Keyword(null,"pending-evals","pending-evals",1249255957),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id], 0));

return conn.write(command);
});

break;
default:
return (function (p__41155){
var map__41156 = p__41155;
var map__41156__$1 = cljs.core.__destructure_map(map__41156);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41156__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var command = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41156__$1,new cljs.core.Keyword(null,"command","command",-894540724));
var namespace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41156__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
repl_tooling.integrations.repls.send_namespace(conn,"in-ns '",namespace,control);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(control,cljs.core.update,new cljs.core.Keyword(null,"pending-evals","pending-evals",1249255957),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id], 0));

return conn.write(command);
});

}
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"clj","clj",-660495428),repl_kind)){
return repl_tooling.repl_client.clojure.prepare_unrepl_evaluator(conn,control,on_output);
} else {
return promesa.protocols._bind(null,(function (___31810__auto__){
return promesa.protocols._bind(promesa.core.race(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [repl_tooling.integrations.repls.wait_for_blob_done(repl_kind,conn,control),promesa.core.delay.cljs$core$IFn$_invoke$arity$1((1000))], null)),(function (___31809__auto__){
return promesa.protocols._bind(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(control,cljs.core.assoc,new cljs.core.Keyword(null,"ignore-prompt","ignore-prompt",-1001404739),true),(function (___31809__auto____$1){
return promesa.protocols._bind(repl_tooling.repl_client.connection.prepare_evals(control,(function (p1__41122_SHARP_){
var temp__5751__auto__ = p1__41122_SHARP_;
if(cljs.core.truth_(temp__5751__auto__)){
var out = temp__5751__auto__;
var G__41171 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"out","out",-910545517),out], null);
return (on_output.cljs$core$IFn$_invoke$arity$1 ? on_output.cljs$core$IFn$_invoke$arity$1(G__41171) : on_output.call(null,G__41171));
} else {
return (on_output.cljs$core$IFn$_invoke$arity$1 ? on_output.cljs$core$IFn$_invoke$arity$1(null) : on_output.call(null,null));
}
}),(function (p1__41124_SHARP_){
return repl_tooling.integrations.repls.capture_eval_result(pending_evals,on_output,p1__41124_SHARP_);
})),(function (___31809__auto____$2){
return promesa.protocols._promise(repl_tooling.integrations.repls.__GT_Generic(pending_evals,cmd_for,eval_command));
}));
}));
}));
}));
}
});
repl_tooling.integrations.repls.ignore_output_on_control = (function repl_tooling$integrations$repls$ignore_output_on_control(control,repl_kind){
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"unknown","unknown",-935977881),repl_kind)))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(control,cljs.core.update,new cljs.core.Keyword(null,"ignore-output","ignore-output",-1884856211),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([/:using-unknown-repl/,/^\r?\n?.*?=> /], 0));
} else {
return null;
}
});
if((typeof repl_tooling !== 'undefined') && (typeof repl_tooling.integrations !== 'undefined') && (typeof repl_tooling.integrations.repls !== 'undefined') && (typeof repl_tooling.integrations.repls.connections !== 'undefined')){
} else {
repl_tooling.integrations.repls.connections = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
repl_tooling.integrations.repls.connect_repl_BANG_ = (function repl_tooling$integrations$repls$connect_repl_BANG_(id,host,port,on_output){
return promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(repl_tooling.integrations.repls.connect_and_detect_BANG_(host,port,on_output),(function (p__41300){
var map__41303 = p__41300;
var map__41303__$1 = cljs.core.__destructure_map(map__41303);
var conn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41303__$1,new cljs.core.Keyword(null,"conn","conn",278309663));
var control = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41303__$1,new cljs.core.Keyword(null,"control","control",1892578036));
var repl_kind = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41303__$1,new cljs.core.Keyword(null,"repl-kind","repl-kind",607962569));
var buffer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41303__$1,new cljs.core.Keyword(null,"buffer","buffer",617295198));
var evaluator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41303__$1,new cljs.core.Keyword(null,"evaluator","evaluator",704655039));
return promesa.protocols._bind(null,(function (___31810__auto__){
return promesa.protocols._bind(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(repl_tooling.integrations.repls.connections,cljs.core.assoc,id,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"conn","conn",278309663),conn,new cljs.core.Keyword(null,"buffer","buffer",617295198),buffer], null)),(function (___31809__auto__){
return promesa.protocols._promise((cljs.core.truth_(evaluator)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [repl_kind,evaluator], null):promesa.protocols._bind(null,(function (___31820__auto____$1){
return promesa.protocols._bind(repl_tooling.integrations.repls.ignore_output_on_control(control,repl_kind),(function (_){
return promesa.protocols._bind(repl_tooling.integrations.repls.instantiate_correct_evaluator(repl_kind,conn,control,on_output),(function (evaluator__$1){
return promesa.protocols._bind(null,(function (___31810__auto____$1){
return promesa.protocols._promise(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [repl_kind,evaluator__$1], null));
}));
}));
}));
}))));
}));
}));
}));
}));
});
repl_tooling.integrations.repls.disconnect_BANG_ = (function repl_tooling$integrations$repls$disconnect_BANG_(id){
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(repl_tooling.integrations.repls.connections),id);
if(cljs.core.truth_(temp__5753__auto__)){
var map__41319 = temp__5753__auto__;
var map__41319__$1 = cljs.core.__destructure_map(map__41319);
var conn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41319__$1,new cljs.core.Keyword(null,"conn","conn",278309663));
var buffer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41319__$1,new cljs.core.Keyword(null,"buffer","buffer",617295198));
setTimeout((function (){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.last(cljs.core.deref(buffer)),new cljs.core.Keyword(null,"closed","closed",-919675359))){
return null;
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(buffer,cljs.core.conj,new cljs.core.Keyword(null,"closed","closed",-919675359));
}
}),(1000));

return conn.end();
} else {
return null;
}
});

//# sourceMappingURL=repl_tooling.integrations.repls.js.map
