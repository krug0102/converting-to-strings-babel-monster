goog.provide('repl_tooling.commands_to_repl.pathom');
if((typeof repl_tooling !== 'undefined') && (typeof repl_tooling.commands_to_repl !== 'undefined') && (typeof repl_tooling.commands_to_repl.pathom !== 'undefined') && (typeof repl_tooling.commands_to_repl.pathom.global_eql !== 'undefined')){
} else {
repl_tooling.commands_to_repl.pathom.global_eql = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof repl_tooling !== 'undefined') && (typeof repl_tooling.commands_to_repl !== 'undefined') && (typeof repl_tooling.commands_to_repl.pathom !== 'undefined') && (typeof repl_tooling.commands_to_repl.pathom.global_resolvers !== 'undefined')){
} else {
repl_tooling.commands_to_repl.pathom.global_resolvers = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof repl_tooling !== 'undefined') && (typeof repl_tooling.commands_to_repl !== 'undefined') && (typeof repl_tooling.commands_to_repl.pathom !== 'undefined') && (typeof repl_tooling.commands_to_repl.pathom.orig_resolvers !== 'undefined')){
} else {
repl_tooling.commands_to_repl.pathom.orig_resolvers = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
repl_tooling.commands_to_repl.pathom.reset_resolvers = (function repl_tooling$commands_to_repl$pathom$reset_resolvers(){
cljs.core.reset_BANG_(repl_tooling.commands_to_repl.pathom.global_resolvers,cljs.core.deref(repl_tooling.commands_to_repl.pathom.orig_resolvers));

return cljs.core.reset_BANG_(repl_tooling.commands_to_repl.pathom.global_eql,duck_repled.core.gen_eql.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"resolvers","resolvers",-1037942130),cljs.core.deref(repl_tooling.commands_to_repl.pathom.orig_resolvers)], null)));
});
repl_tooling.commands_to_repl.pathom.add_resolver = (function repl_tooling$commands_to_repl$pathom$add_resolver(config,fun){
var old = cljs.core.deref(repl_tooling.commands_to_repl.pathom.global_resolvers);
var new$ = duck_repled.core.add_resolver.cljs$core$IFn$_invoke$arity$3(old,config,fun);
cljs.core.reset_BANG_(repl_tooling.commands_to_repl.pathom.global_resolvers,new$);

return cljs.core.reset_BANG_(repl_tooling.commands_to_repl.pathom.global_eql,duck_repled.core.gen_eql.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"resolvers","resolvers",-1037942130),new$], null)));
});
repl_tooling.commands_to_repl.pathom.compose_resolver = (function repl_tooling$commands_to_repl$pathom$compose_resolver(config,fun){
var old = cljs.core.deref(repl_tooling.commands_to_repl.pathom.global_resolvers);
var new$ = duck_repled.core.compose_resolver.cljs$core$IFn$_invoke$arity$3(old,config,fun);
cljs.core.reset_BANG_(repl_tooling.commands_to_repl.pathom.global_resolvers,new$);

return cljs.core.reset_BANG_(repl_tooling.commands_to_repl.pathom.global_eql,duck_repled.core.gen_eql.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"resolvers","resolvers",-1037942130),new$], null)));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {duck_repled.repl_protocol.Evaluator}
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
repl_tooling.commands_to_repl.pathom.REPL = (function (evaluator,__meta,__extmap,__hash){
this.evaluator = evaluator;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(repl_tooling.commands_to_repl.pathom.REPL.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(repl_tooling.commands_to_repl.pathom.REPL.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k51119,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__51123 = k51119;
var G__51123__$1 = (((G__51123 instanceof cljs.core.Keyword))?G__51123.fqn:null);
switch (G__51123__$1) {
case "evaluator":
return self__.evaluator;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k51119,else__4475__auto__);

}
}));

(repl_tooling.commands_to_repl.pathom.REPL.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__51124){
var vec__51125 = p__51124;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51125,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51125,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(repl_tooling.commands_to_repl.pathom.REPL.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#repl-tooling.commands-to-repl.pathom.REPL{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"evaluator","evaluator",704655039),self__.evaluator],null))], null),self__.__extmap));
}));

(repl_tooling.commands_to_repl.pathom.REPL.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__51118){
var self__ = this;
var G__51118__$1 = this;
return (new cljs.core.RecordIter((0),G__51118__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"evaluator","evaluator",704655039)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(repl_tooling.commands_to_repl.pathom.REPL.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(repl_tooling.commands_to_repl.pathom.REPL.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new repl_tooling.commands_to_repl.pathom.REPL(self__.evaluator,self__.__meta,self__.__extmap,self__.__hash));
}));

(repl_tooling.commands_to_repl.pathom.REPL.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(repl_tooling.commands_to_repl.pathom.REPL.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (coll__4469__auto__){
return (887825973 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
})(this__4468__auto____$1);
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(repl_tooling.commands_to_repl.pathom.REPL.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this51120,other51121){
var self__ = this;
var this51120__$1 = this;
return (((!((other51121 == null)))) && ((((this51120__$1.constructor === other51121.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51120__$1.evaluator,other51121.evaluator)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51120__$1.__extmap,other51121.__extmap)))))));
}));

(repl_tooling.commands_to_repl.pathom.REPL.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"evaluator","evaluator",704655039),null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new repl_tooling.commands_to_repl.pathom.REPL(self__.evaluator,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(repl_tooling.commands_to_repl.pathom.REPL.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k51119){
var self__ = this;
var this__4479__auto____$1 = this;
var G__51128 = k51119;
var G__51128__$1 = (((G__51128 instanceof cljs.core.Keyword))?G__51128.fqn:null);
switch (G__51128__$1) {
case "evaluator":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k51119);

}
}));

(repl_tooling.commands_to_repl.pathom.REPL.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__51118){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__51129 = cljs.core.keyword_identical_QMARK_;
var expr__51130 = k__4481__auto__;
if(cljs.core.truth_((pred__51129.cljs$core$IFn$_invoke$arity$2 ? pred__51129.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"evaluator","evaluator",704655039),expr__51130) : pred__51129.call(null,new cljs.core.Keyword(null,"evaluator","evaluator",704655039),expr__51130)))){
return (new repl_tooling.commands_to_repl.pathom.REPL(G__51118,self__.__meta,self__.__extmap,null));
} else {
return (new repl_tooling.commands_to_repl.pathom.REPL(self__.evaluator,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__51118),null));
}
}));

(repl_tooling.commands_to_repl.pathom.REPL.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"evaluator","evaluator",704655039),self__.evaluator,null))], null),self__.__extmap));
}));

(repl_tooling.commands_to_repl.pathom.REPL.prototype.duck_repled$repl_protocol$Evaluator$ = cljs.core.PROTOCOL_SENTINEL);

(repl_tooling.commands_to_repl.pathom.REPL.prototype.duck_repled$repl_protocol$Evaluator$_evaluate$arity$3 = (function (_,command,options){
var self__ = this;
var ___$1 = this;
return repl_tooling.eval.eval.cljs$core$IFn$_invoke$arity$3(self__.evaluator,command,options);
}));

(repl_tooling.commands_to_repl.pathom.REPL.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__51118){
var self__ = this;
var this__4471__auto____$1 = this;
return (new repl_tooling.commands_to_repl.pathom.REPL(self__.evaluator,G__51118,self__.__extmap,self__.__hash));
}));

(repl_tooling.commands_to_repl.pathom.REPL.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4478__auto__,(0)),cljs.core._nth(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(repl_tooling.commands_to_repl.pathom.REPL.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"evaluator","evaluator",-1949780730,null)], null);
}));

(repl_tooling.commands_to_repl.pathom.REPL.cljs$lang$type = true);

(repl_tooling.commands_to_repl.pathom.REPL.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"repl-tooling.commands-to-repl.pathom/REPL",null,(1),null));
}));

(repl_tooling.commands_to_repl.pathom.REPL.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"repl-tooling.commands-to-repl.pathom/REPL");
}));

/**
 * Positional factory function for repl-tooling.commands-to-repl.pathom/REPL.
 */
repl_tooling.commands_to_repl.pathom.__GT_REPL = (function repl_tooling$commands_to_repl$pathom$__GT_REPL(evaluator){
return (new repl_tooling.commands_to_repl.pathom.REPL(evaluator,null,null,null));
});

/**
 * Factory function for repl-tooling.commands-to-repl.pathom/REPL, taking a map of keywords to field values.
 */
repl_tooling.commands_to_repl.pathom.map__GT_REPL = (function repl_tooling$commands_to_repl$pathom$map__GT_REPL(G__51122){
var extmap__4512__auto__ = (function (){var G__51132 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__51122,new cljs.core.Keyword(null,"evaluator","evaluator",704655039));
if(cljs.core.record_QMARK_(G__51122)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__51132);
} else {
return G__51132;
}
})();
return (new repl_tooling.commands_to_repl.pathom.REPL(new cljs.core.Keyword(null,"evaluator","evaluator",704655039).cljs$core$IFn$_invoke$arity$1(G__51122),null,cljs.core.not_empty(extmap__4512__auto__),null));
});

repl_tooling.commands_to_repl.pathom.adapt_repl = (function repl_tooling$commands_to_repl$pathom$adapt_repl(evaluator){
if(cljs.core.truth_(evaluator)){
return repl_tooling.commands_to_repl.pathom.__GT_REPL(evaluator);
} else {
return new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","unknown-value","com.wsscode.pathom3.connect.operation/unknown-value",1340287052);
}
});
repl_tooling.commands_to_repl.pathom.resolvers_from_state = (function repl_tooling$commands_to_repl$pathom$resolvers_from_state(editor_state){
return promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(cljs.core.deref(editor_state),(function (p__51133){
var map__51134 = p__51133;
var map__51134__$1 = cljs.core.__destructure_map(map__51134);
var callbacks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51134__$1,new cljs.core.Keyword("editor","callbacks","editor/callbacks",1179124831));
return promesa.protocols._bind((function (){var fexpr__51135 = new cljs.core.Keyword(null,"editor-data","editor-data",-2084300305).cljs$core$IFn$_invoke$arity$1(callbacks);
return (fexpr__51135.cljs$core$IFn$_invoke$arity$0 ? fexpr__51135.cljs$core$IFn$_invoke$arity$0() : fexpr__51135.call(null));
})(),(function (editor_data){
return promesa.protocols._bind((function (){var fexpr__51136 = new cljs.core.Keyword(null,"get-config","get-config",1800808901).cljs$core$IFn$_invoke$arity$1(callbacks);
return (fexpr__51136.cljs$core$IFn$_invoke$arity$0 ? fexpr__51136.cljs$core$IFn$_invoke$arity$0() : fexpr__51136.call(null));
})(),(function (config){
return promesa.protocols._bind(new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","unknown-value","com.wsscode.pathom3.connect.operation/unknown-value",1340287052),(function (not_found){
return promesa.protocols._bind(null,(function (___31810__auto__){
return promesa.protocols._promise(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("editor","data","editor/data",-1539989548),(function (){var or__4223__auto__ = editor_data;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return not_found;
}
})(),new cljs.core.Keyword("config","eval-as","config/eval-as",-937334597),new cljs.core.Keyword(null,"eval-mode","eval-mode",1105308847).cljs$core$IFn$_invoke$arity$1(config),new cljs.core.Keyword("config","project-paths","config/project-paths",1302768596),cljs.core.vec(new cljs.core.Keyword(null,"project-paths","project-paths",-1637469806).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword("repl","evaluators","repl/evaluators",84539740),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"clj","clj",-660495428),repl_tooling.commands_to_repl.pathom.adapt_repl(new cljs.core.Keyword("clj","aux","clj/aux",-10310625).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(editor_state))),new cljs.core.Keyword(null,"cljs","cljs",1492417629),repl_tooling.commands_to_repl.pathom.adapt_repl(new cljs.core.Keyword("cljs","repl","cljs/repl",-36497565).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(editor_state)))], null),new cljs.core.Keyword("config","repl-kind","config/repl-kind",1937588875),new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("repl","info","repl/info",-345199547).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(editor_state)))], null));
}));
}));
}));
}));
}));
}));
});
repl_tooling.commands_to_repl.pathom.doc_part = cljs.core.list(new cljs.core.Symbol(null,"when-let","when-let",-1383043480,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"text","text",-150030170,null),cljs.core.list(new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Symbol(null,"?state","?state",-1752482484,null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.space","div.space",-1949188144)], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Keyword(null,"markdown?","markdown?",1094082235),new cljs.core.Symbol(null,"?state","?state",-1752482484,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("div","md","div/md",705090030),new cljs.core.Symbol(null,"text","text",-150030170,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pre","div.pre",-1234512317),new cljs.core.Symbol(null,"text","text",-150030170,null)], null))], null));
repl_tooling.commands_to_repl.pathom.spec_part = cljs.core.list(new cljs.core.Symbol(null,"when-let","when-let",-1383043480,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"spec","spec",1988051928,null),cljs.core.list(new cljs.core.Keyword(null,"spec","spec",347520401),new cljs.core.Symbol(null,"?state","?state",-1752482484,null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.space","div.space",-1949188144)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pre","div.pre",-1234512317),cljs.core.list(new cljs.core.Symbol(null,"cond->","cond->",561741875,null),"Spec:\n",cljs.core.list(new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Symbol(null,"spec","spec",1988051928,null)),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"  args: ",cljs.core.list(new cljs.core.Symbol(null,"pr-str","pr-str",-2066912145,null),cljs.core.list(new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Symbol(null,"spec","spec",1988051928,null))),"\n"),cljs.core.list(new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol(null,"spec","spec",1988051928,null)),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"  ret: ",cljs.core.list(new cljs.core.Symbol(null,"pr-str","pr-str",-2066912145,null),cljs.core.list(new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol(null,"spec","spec",1988051928,null))),"\n"),cljs.core.list(new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Symbol(null,"spec","spec",1988051928,null)),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"  fn: ",cljs.core.list(new cljs.core.Symbol(null,"pr-str","pr-str",-2066912145,null),cljs.core.list(new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Symbol(null,"spec","spec",1988051928,null)))))], null)], null));
repl_tooling.commands_to_repl.pathom.markdown_check = cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),cljs.core.list(new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Symbol(null,"?state","?state",-1752482484,null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.space","div.space",-1949188144)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"checkbox","checkbox",1612615655),new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core.list(new cljs.core.Keyword(null,"markdown?","markdown?",1094082235),new cljs.core.Symbol(null,"?state","?state",-1752482484,null)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"e","e",-1273166571,null)], null),cljs.core.list(new cljs.core.Symbol(null,"swap!","swap!",-655677516,null),new cljs.core.Symbol(null,"?state-atom","?state-atom",-1559113913,null),new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword(null,"markdown?","markdown?",1094082235),new cljs.core.Symbol(null,"not","not",1044554643,null)))], null)], null)," Use markdown"], null)], null));
repl_tooling.commands_to_repl.pathom.var_contents = cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Symbol(null,"?state","?state",-1752482484,null))),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.rows","div.rows",631075470),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.space","div.space",-1949188144)], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),new cljs.core.Symbol(null,"?state","?state",-1752482484,null),new cljs.core.Keyword(null,"var-value","var-value",1369253504)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("div","clj","div/clj",-660599991),cljs.core.list(new cljs.core.Keyword(null,"var-value","var-value",1369253504),new cljs.core.Symbol(null,"?state","?state",-1752482484,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),cljs.core.list(new cljs.core.Symbol(null,"?get-contents","?get-contents",-2036246355,null),cljs.core.list(new cljs.core.Symbol(null,"->>","->>",-1874332161,null),new cljs.core.Symbol(null,"?state","?state",-1752482484,null),new cljs.core.Keyword(null,"fqn","fqn",905101306),new cljs.core.Symbol(null,"eval","eval",536963622,null)))], null),"Get contents of var"], null)], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.rows","div.rows",631075470),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.space","div.space",-1949188144)], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),new cljs.core.Symbol(null,"?state","?state",-1752482484,null),new cljs.core.Keyword(null,"var-value","var-value",1369253504)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("div","md","div/md",705090030),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"```\n",cljs.core.list(new cljs.core.Keyword(null,"var-value","var-value",1369253504),new cljs.core.Symbol(null,"?state","?state",-1752482484,null)),"\n```")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"evt","evt",388964660,null)], null),cljs.core.list(new cljs.core.Symbol(null,".preventDefault",".preventDefault",1855844498,null),new cljs.core.Symbol(null,"evt","evt",388964660,null)),cljs.core.list(new cljs.core.Symbol(null,".stopPropagation",".stopPropagation",-1758290105,null),new cljs.core.Symbol(null,"evt","evt",388964660,null)),cljs.core.list(new cljs.core.Symbol("p","let","p/let",358118874,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"info","info",1323462525,null),cljs.core.list(new cljs.core.Symbol(null,"eql","eql",-1239543386,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("editor","contents","editor/contents",-394611860),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("text","current-var","text/current-var",1432933099),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("definition","source","definition/source",513279520)], null)], null)], null)], null)], null))], null),cljs.core.list(new cljs.core.Symbol(null,"swap!","swap!",-655677516,null),new cljs.core.Symbol(null,"?state-atom","?state-atom",-1559113913,null),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"var-value","var-value",1369253504),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"info","info",1323462525,null),new cljs.core.Keyword("editor","contents","editor/contents",-394611860),new cljs.core.Keyword("text","current-var","text/current-var",1432933099),new cljs.core.Keyword("definition","source","definition/source",513279520),new cljs.core.Keyword("text","contents","text/contents",-1566533716)))))], null),"Get source"], null)], null))], null));
repl_tooling.commands_to_repl.pathom.improved_doc_for_var = (function repl_tooling$commands_to_repl$pathom$improved_doc_for_var(p__51137){
var map__51138 = p__51137;
var map__51138__$1 = cljs.core.__destructure_map(map__51138);
var fqn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51138__$1,new cljs.core.Keyword("var","fqn","var/fqn",905054513));
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51138__$1,new cljs.core.Keyword("var","meta","var/meta",1499588507));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51138__$1,new cljs.core.Keyword("var","spec","var/spec",346621034));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("render","doc","render/doc",-2108271987),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"html","html",-998796897),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.rows","div.rows",631075470),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.title","div.title",-1929547732),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"?state","?state",-1752482484,null),new cljs.core.Keyword(null,"fqn","fqn",905101306),new cljs.core.Symbol(null,"str","str",-1564826950,null))], null),cljs.core.list(new cljs.core.Symbol(null,"when-let","when-let",-1383043480,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"args","args",-1338879193,null),cljs.core.list(new cljs.core.Symbol(null,"seq","seq",-177272256,null),cljs.core.list(new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Symbol(null,"?state","?state",-1752482484,null)))], null),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"a","a",-482876059,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Symbol(null,"a","a",-482876059,null)], null),cljs.core.list(new cljs.core.Symbol(null,"pr-str","pr-str",-2066912145,null),new cljs.core.Symbol(null,"a","a",-482876059,null))], null)),new cljs.core.Symbol(null,"args","args",-1338879193,null))),cljs.core.list(new cljs.core.Symbol(null,"cond->","cond->",561741875,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.cols","div.cols",-1850713503)], null),cljs.core.list(new cljs.core.Keyword(null,"macro","macro",-867863404),new cljs.core.Symbol(null,"?state","?state",-1752482484,null)),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),"macro"], null)),cljs.core.list(new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Symbol(null,"?state","?state",-1752482484,null)),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),"private"], null))),repl_tooling.commands_to_repl.pathom.doc_part,repl_tooling.commands_to_repl.pathom.spec_part,repl_tooling.commands_to_repl.pathom.markdown_check,repl_tooling.commands_to_repl.pathom.var_contents], null),new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(meta,new cljs.core.Keyword(null,"ns","ns",441598760)),new cljs.core.Keyword(null,"markdown?","markdown?",1094082235),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"fqn","fqn",905101306),fqn,new cljs.core.Keyword(null,"spec","spec",347520401),spec], 0)),new cljs.core.Keyword(null,"fns","fns",1185138786),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"get-contents","get-contents",-824977715),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"value","value",1946509744,null)], null),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Keyword(null,"var-value","var-value",1369253504),new cljs.core.Symbol(null,"value","value",1946509744,null)))], null)], null)], null);
});
repl_tooling.commands_to_repl.pathom.eql_from_state = (function repl_tooling$commands_to_repl$pathom$eql_from_state(editor_state){
var resolver = (function (){
return repl_tooling.commands_to_repl.pathom.resolvers_from_state(editor_state);
});
var resolvers = duck_repled.core.add_resolver.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"inputs","inputs",865803858),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"outputs","outputs",-1896513034),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","data","editor/data",-1539989548),new cljs.core.Keyword("config","eval-as","config/eval-as",-937334597),new cljs.core.Keyword("config","project-paths","config/project-paths",1302768596),new cljs.core.Keyword("config","repl-kind","config/repl-kind",1937588875)], null)], null),resolver);
var resolvers__$1 = duck_repled.core.add_resolver.cljs$core$IFn$_invoke$arity$3(resolvers,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"inputs","inputs",865803858),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("var","fqn","var/fqn",905054513),new cljs.core.Keyword("var","meta","var/meta",1499588507),com.wsscode.pathom3.connect.operation._QMARK_(new cljs.core.Keyword("var","spec","var/spec",346621034))], null),new cljs.core.Keyword(null,"outputs","outputs",-1896513034),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("render","doc","render/doc",-2108271987)], null)], null),repl_tooling.commands_to_repl.pathom.improved_doc_for_var);
cljs.core.reset_BANG_(repl_tooling.commands_to_repl.pathom.orig_resolvers,resolvers__$1);

cljs.core.reset_BANG_(repl_tooling.commands_to_repl.pathom.global_resolvers,resolvers__$1);

cljs.core.reset_BANG_(repl_tooling.commands_to_repl.pathom.global_eql,duck_repled.core.gen_eql.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"resolvers","resolvers",-1037942130),resolvers__$1], null)));

return (function() {
var repl_tooling$commands_to_repl$pathom$eql_from_state_$_eql = null;
var repl_tooling$commands_to_repl$pathom$eql_from_state_$_eql__1 = (function (query){
var fexpr__51139 = cljs.core.deref(repl_tooling.commands_to_repl.pathom.global_eql);
return (fexpr__51139.cljs$core$IFn$_invoke$arity$1 ? fexpr__51139.cljs$core$IFn$_invoke$arity$1(query) : fexpr__51139.call(null,query));
});
var repl_tooling$commands_to_repl$pathom$eql_from_state_$_eql__2 = (function (seed,query){
var G__51141 = (function (){var or__4223__auto__ = seed;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var G__51142 = query;
var fexpr__51140 = cljs.core.deref(repl_tooling.commands_to_repl.pathom.global_eql);
return (fexpr__51140.cljs$core$IFn$_invoke$arity$2 ? fexpr__51140.cljs$core$IFn$_invoke$arity$2(G__51141,G__51142) : fexpr__51140.call(null,G__51141,G__51142));
});
repl_tooling$commands_to_repl$pathom$eql_from_state_$_eql = function(seed,query){
switch(arguments.length){
case 1:
return repl_tooling$commands_to_repl$pathom$eql_from_state_$_eql__1.call(this,seed);
case 2:
return repl_tooling$commands_to_repl$pathom$eql_from_state_$_eql__2.call(this,seed,query);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
repl_tooling$commands_to_repl$pathom$eql_from_state_$_eql.cljs$core$IFn$_invoke$arity$1 = repl_tooling$commands_to_repl$pathom$eql_from_state_$_eql__1;
repl_tooling$commands_to_repl$pathom$eql_from_state_$_eql.cljs$core$IFn$_invoke$arity$2 = repl_tooling$commands_to_repl$pathom$eql_from_state_$_eql__2;
return repl_tooling$commands_to_repl$pathom$eql_from_state_$_eql;
})()
});

//# sourceMappingURL=repl_tooling.commands_to_repl.pathom.js.map
