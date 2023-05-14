goog.provide('com.wsscode.log');
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.log","level","com.wsscode.log/level",1172057907),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("com.wsscode.log","level-warn","com.wsscode.log/level-warn",312686542),"null",new cljs.core.Keyword("com.wsscode.log","level-debug","com.wsscode.log/level-debug",1489977397),"null",new cljs.core.Keyword("com.wsscode.log","level-info","com.wsscode.log/level-info",702175034),"null",new cljs.core.Keyword("com.wsscode.log","level-error","com.wsscode.log/level-error",1042653178),"null"], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("com.wsscode.log","level-warn","com.wsscode.log/level-warn",312686542),null,new cljs.core.Keyword("com.wsscode.log","level-debug","com.wsscode.log/level-debug",1489977397),null,new cljs.core.Keyword("com.wsscode.log","level-info","com.wsscode.log/level-info",702175034),null,new cljs.core.Keyword("com.wsscode.log","level-error","com.wsscode.log/level-error",1042653178),null], null), null));
com.wsscode.log.log_levels = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("com.wsscode.log","level-debug","com.wsscode.log/level-debug",1489977397),(1),new cljs.core.Keyword("com.wsscode.log","level-info","com.wsscode.log/level-info",702175034),(2),new cljs.core.Keyword("com.wsscode.log","level-warn","com.wsscode.log/level-warn",312686542),(3),new cljs.core.Keyword("com.wsscode.log","level-error","com.wsscode.log/level-error",1042653178),(4)], null);

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {com.wsscode.log.protocols.Logger}
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
com.wsscode.log.PrintLogger = (function (min_level,__meta,__extmap,__hash){
this.min_level = min_level;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(com.wsscode.log.PrintLogger.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(com.wsscode.log.PrintLogger.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k83186,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__83192 = k83186;
var G__83192__$1 = (((G__83192 instanceof cljs.core.Keyword))?G__83192.fqn:null);
switch (G__83192__$1) {
case "min-level":
return self__.min_level;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k83186,else__4475__auto__);

}
}));

(com.wsscode.log.PrintLogger.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__83195){
var vec__83196 = p__83195;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83196,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83196,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(com.wsscode.log.PrintLogger.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#com.wsscode.log.PrintLogger{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"min-level","min-level",1634684919),self__.min_level],null))], null),self__.__extmap));
}));

(com.wsscode.log.PrintLogger.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__83185){
var self__ = this;
var G__83185__$1 = this;
return (new cljs.core.RecordIter((0),G__83185__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"min-level","min-level",1634684919)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.wsscode.log.PrintLogger.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(com.wsscode.log.PrintLogger.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new com.wsscode.log.PrintLogger(self__.min_level,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.wsscode.log.PrintLogger.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(com.wsscode.log.PrintLogger.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (coll__4469__auto__){
return (94621924 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
})(this__4468__auto____$1);
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(com.wsscode.log.PrintLogger.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this83187,other83188){
var self__ = this;
var this83187__$1 = this;
return (((!((other83188 == null)))) && ((((this83187__$1.constructor === other83188.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this83187__$1.min_level,other83188.min_level)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this83187__$1.__extmap,other83188.__extmap)))))));
}));

(com.wsscode.log.PrintLogger.prototype.com$wsscode$log$protocols$Logger$ = cljs.core.PROTOCOL_SENTINEL);

(com.wsscode.log.PrintLogger.prototype.com$wsscode$log$protocols$Logger$_log_event$arity$2 = (function (_this,p__83204){
var self__ = this;
var map__83205 = p__83204;
var map__83205__$1 = cljs.core.__destructure_map(map__83205);
var data = map__83205__$1;
var timestamp = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83205__$1,new cljs.core.Keyword("com.wsscode.log","timestamp","com.wsscode.log/timestamp",731997926));
var level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83205__$1,new cljs.core.Keyword("com.wsscode.log","level","com.wsscode.log/level",1172057907));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83205__$1,new cljs.core.Keyword("com.wsscode.log","event","com.wsscode.log/event",151015715));
var _this__$1 = this;
return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(timestamp)," ",(cljs.core.truth_(level)?[clojure.string.upper_case(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(cljs.core.name(level),(6)))," "].join(''):null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," - ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(data,new cljs.core.Keyword("com.wsscode.log","level","com.wsscode.log/level",1172057907),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.log","event","com.wsscode.log/event",151015715),new cljs.core.Keyword("com.wsscode.log","timestamp","com.wsscode.log/timestamp",731997926)], 0))], 0)),"\n"].join('')], 0));
}));

(com.wsscode.log.PrintLogger.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min-level","min-level",1634684919),null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new com.wsscode.log.PrintLogger(self__.min_level,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(com.wsscode.log.PrintLogger.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k83186){
var self__ = this;
var this__4479__auto____$1 = this;
var G__83211 = k83186;
var G__83211__$1 = (((G__83211 instanceof cljs.core.Keyword))?G__83211.fqn:null);
switch (G__83211__$1) {
case "min-level":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k83186);

}
}));

(com.wsscode.log.PrintLogger.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__83185){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__83214 = cljs.core.keyword_identical_QMARK_;
var expr__83215 = k__4481__auto__;
if(cljs.core.truth_((pred__83214.cljs$core$IFn$_invoke$arity$2 ? pred__83214.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"min-level","min-level",1634684919),expr__83215) : pred__83214.call(null,new cljs.core.Keyword(null,"min-level","min-level",1634684919),expr__83215)))){
return (new com.wsscode.log.PrintLogger(G__83185,self__.__meta,self__.__extmap,null));
} else {
return (new com.wsscode.log.PrintLogger(self__.min_level,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__83185),null));
}
}));

(com.wsscode.log.PrintLogger.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"min-level","min-level",1634684919),self__.min_level,null))], null),self__.__extmap));
}));

(com.wsscode.log.PrintLogger.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__83185){
var self__ = this;
var this__4471__auto____$1 = this;
return (new com.wsscode.log.PrintLogger(self__.min_level,G__83185,self__.__extmap,self__.__hash));
}));

(com.wsscode.log.PrintLogger.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4478__auto__,(0)),cljs.core._nth(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(com.wsscode.log.PrintLogger.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"min-level","min-level",-1019750850,null)], null);
}));

(com.wsscode.log.PrintLogger.cljs$lang$type = true);

(com.wsscode.log.PrintLogger.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"com.wsscode.log/PrintLogger",null,(1),null));
}));

(com.wsscode.log.PrintLogger.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"com.wsscode.log/PrintLogger");
}));

/**
 * Positional factory function for com.wsscode.log/PrintLogger.
 */
com.wsscode.log.__GT_PrintLogger = (function com$wsscode$log$__GT_PrintLogger(min_level){
return (new com.wsscode.log.PrintLogger(min_level,null,null,null));
});

/**
 * Factory function for com.wsscode.log/PrintLogger, taking a map of keywords to field values.
 */
com.wsscode.log.map__GT_PrintLogger = (function com$wsscode$log$map__GT_PrintLogger(G__83189){
var extmap__4512__auto__ = (function (){var G__83218 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__83189,new cljs.core.Keyword(null,"min-level","min-level",1634684919));
if(cljs.core.record_QMARK_(G__83189)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__83218);
} else {
return G__83218;
}
})();
return (new com.wsscode.log.PrintLogger(new cljs.core.Keyword(null,"min-level","min-level",1634684919).cljs$core$IFn$_invoke$arity$1(G__83189),null,cljs.core.not_empty(extmap__4512__auto__),null));
});

com.wsscode.log._STAR_active_logger_STAR_ = com.wsscode.log.__GT_PrintLogger(new cljs.core.Keyword("com.wsscode.log","level-debug","com.wsscode.log/level-debug",1489977397));
com.wsscode.log.now = (function com$wsscode$log$now(){
return (new Date());
});
com.wsscode.log.log_event = (function com$wsscode$log$log_event(logger,event){
return com.wsscode.log.protocols._log_event(logger,event);
});
com.wsscode.log.make_event = (function com$wsscode$log$make_event(event_level,event_name,data){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.log","event","com.wsscode.log/event",151015715),event_name,new cljs.core.Keyword("com.wsscode.log","level","com.wsscode.log/level",1172057907),event_level,new cljs.core.Keyword("com.wsscode.log","timestamp","com.wsscode.log/timestamp",731997926),com.wsscode.log.now()], null),data], 0));
});

//# sourceMappingURL=com.wsscode.log.js.map
