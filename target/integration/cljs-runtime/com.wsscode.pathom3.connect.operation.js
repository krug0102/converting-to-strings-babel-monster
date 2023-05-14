goog.provide('com.wsscode.pathom3.connect.operation');
com.wsscode.pathom3.connect.operation.operation_QMARK_ = (function com$wsscode$pathom3$connect$operation$operation_QMARK_(x){
if((!((x == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.com$wsscode$pathom3$connect$operation$protocols$IOperation$)))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(com.wsscode.pathom3.connect.operation.protocols.IOperation,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(com.wsscode.pathom3.connect.operation.protocols.IOperation,x);
}
});
com.wsscode.pathom3.connect.operation.resolver_QMARK_ = (function com$wsscode$pathom3$connect$operation$resolver_QMARK_(x){
if((!((x == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.com$wsscode$pathom3$connect$operation$protocols$IResolver$)))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(com.wsscode.pathom3.connect.operation.protocols.IResolver,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(com.wsscode.pathom3.connect.operation.protocols.IResolver,x);
}
});
com.wsscode.pathom3.connect.operation.mutation_QMARK_ = (function com$wsscode$pathom3$connect$operation$mutation_QMARK_(x){
if((!((x == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.com$wsscode$pathom3$connect$operation$protocols$IMutation$)))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(com.wsscode.pathom3.connect.operation.protocols.IMutation,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(com.wsscode.pathom3.connect.operation.protocols.IMutation,x);
}
});
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","op-name","com.wsscode.pathom3.connect.operation/op-name",-1249801049),new cljs.core.Symbol("cljs.core","symbol?","cljs.core/symbol?",1422196122,null),cljs.core.symbol_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","input","com.wsscode.pathom3.connect.operation/input",-1553849497),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),cljs.core.vector_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","output","com.wsscode.pathom3.connect.operation/output",801488703),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),cljs.core.vector_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","params","com.wsscode.pathom3.connect.operation/params",-1389779339),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),cljs.core.vector_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","docstring","com.wsscode.pathom3.connect.operation/docstring",-1367867441),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","cache?","com.wsscode.pathom3.connect.operation/cache?",575940493),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),cljs.core.boolean_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","cache-store","com.wsscode.pathom3.connect.operation/cache-store",1503197377),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),cljs.core.keyword_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","batch?","com.wsscode.pathom3.connect.operation/batch?",1500979317),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),cljs.core.boolean_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","priority","com.wsscode.pathom3.connect.operation/priority",-813904543),new cljs.core.Symbol("cljs.core","int?","cljs.core/int?",50730120,null),cljs.core.int_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","resolve","com.wsscode.pathom3.connect.operation/resolve",606027628),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),cljs.core.fn_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","mutate","com.wsscode.pathom3.connect.operation/mutate",-822588464),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),cljs.core.fn_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","operation-type","com.wsscode.pathom3.connect.operation/operation-type",704998960),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","operation-type-mutation","com.wsscode.pathom3.connect.operation/operation-type-mutation",-494456636),"null",new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","operation-type-resolver","com.wsscode.pathom3.connect.operation/operation-type-resolver",-1680641911),"null"], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","operation-type-mutation","com.wsscode.pathom3.connect.operation/operation-type-mutation",-494456636),null,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","operation-type-resolver","com.wsscode.pathom3.connect.operation/operation-type-resolver",-1680641911),null], null), null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","operation-config","com.wsscode.pathom3.connect.operation/operation-config",583946173),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),cljs.core.map_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","operation","com.wsscode.pathom3.connect.operation/operation",874578684),new cljs.core.Symbol("com.wsscode.pathom3.connect.operation","operation?","com.wsscode.pathom3.connect.operation/operation?",1767294343,null),com.wsscode.pathom3.connect.operation.operation_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","resolver","com.wsscode.pathom3.connect.operation/resolver",380611107),new cljs.core.Symbol("com.wsscode.pathom3.connect.operation","resolver?","com.wsscode.pathom3.connect.operation/resolver?",-370083233,null),com.wsscode.pathom3.connect.operation.resolver_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","mutation","com.wsscode.pathom3.connect.operation/mutation",2085009056),new cljs.core.Symbol("com.wsscode.pathom3.connect.operation","mutation?","com.wsscode.pathom3.connect.operation/mutation?",1025315137,null),com.wsscode.pathom3.connect.operation.mutation_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","provides","com.wsscode.pathom3.connect.operation/provides",541419618),new cljs.core.Keyword("com.wsscode.pathom3.format.shape-descriptor","shape-descriptor","com.wsscode.pathom3.format.shape-descriptor/shape-descriptor",1733631433),new cljs.core.Keyword("com.wsscode.pathom3.format.shape-descriptor","shape-descriptor","com.wsscode.pathom3.format.shape-descriptor/shape-descriptor",1733631433));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","requires","com.wsscode.pathom3.connect.operation/requires",926175715),new cljs.core.Keyword("com.wsscode.pathom3.format.shape-descriptor","shape-descriptor","com.wsscode.pathom3.format.shape-descriptor/shape-descriptor",1733631433),new cljs.core.Keyword("com.wsscode.pathom3.format.shape-descriptor","shape-descriptor","com.wsscode.pathom3.format.shape-descriptor/shape-descriptor",1733631433));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","optionals","com.wsscode.pathom3.connect.operation/optionals",1880951663),new cljs.core.Keyword("com.wsscode.pathom3.format.shape-descriptor","shape-descriptor","com.wsscode.pathom3.format.shape-descriptor/shape-descriptor",1733631433),new cljs.core.Keyword("com.wsscode.pathom3.format.shape-descriptor","shape-descriptor","com.wsscode.pathom3.format.shape-descriptor/shape-descriptor",1733631433));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","dynamic-name","com.wsscode.pathom3.connect.operation/dynamic-name",1218566238),new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","op-name","com.wsscode.pathom3.connect.operation/op-name",-1249801049),new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","op-name","com.wsscode.pathom3.connect.operation/op-name",-1249801049));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","dynamic-resolver?","com.wsscode.pathom3.connect.operation/dynamic-resolver?",868139406),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),cljs.core.boolean_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","transform","com.wsscode.pathom3.connect.operation/transform",-704383498),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),cljs.core.fn_QMARK_);

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICollection}
 * @implements {com.wsscode.pathom3.connect.operation.protocols.IOperation}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {com.wsscode.pathom3.connect.operation.protocols.IResolver}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.wsscode.pathom3.connect.operation.Resolver = (function (config,resolve,__meta,__extmap,__hash){
this.config = config;
this.resolve = resolve;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716171;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(com.wsscode.pathom3.connect.operation.Resolver.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(com.wsscode.pathom3.connect.operation.Resolver.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k81966,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__81973 = k81966;
var G__81973__$1 = (((G__81973 instanceof cljs.core.Keyword))?G__81973.fqn:null);
switch (G__81973__$1) {
case "config":
return self__.config;

break;
case "resolve":
return self__.resolve;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k81966,else__4475__auto__);

}
}));

(com.wsscode.pathom3.connect.operation.Resolver.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__81976){
var vec__81977 = p__81976;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81977,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81977,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(com.wsscode.pathom3.connect.operation.Resolver.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#com.wsscode.pathom3.connect.operation.Resolver{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"config","config",994861415),self__.config],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"resolve","resolve",-1584445482),self__.resolve],null))], null),self__.__extmap));
}));

(com.wsscode.pathom3.connect.operation.Resolver.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__81965){
var self__ = this;
var G__81965__$1 = this;
return (new cljs.core.RecordIter((0),G__81965__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"resolve","resolve",-1584445482)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.wsscode.pathom3.connect.operation.Resolver.prototype.com$wsscode$pathom3$connect$operation$protocols$IResolver$ = cljs.core.PROTOCOL_SENTINEL);

(com.wsscode.pathom3.connect.operation.Resolver.prototype.com$wsscode$pathom3$connect$operation$protocols$IResolver$_resolve$arity$3 = (function (_,env,input){
var self__ = this;
var ___$1 = this;
return (self__.resolve.cljs$core$IFn$_invoke$arity$2 ? self__.resolve.cljs$core$IFn$_invoke$arity$2(env,input) : self__.resolve.call(null,env,input));
}));

(com.wsscode.pathom3.connect.operation.Resolver.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(com.wsscode.pathom3.connect.operation.Resolver.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new com.wsscode.pathom3.connect.operation.Resolver(self__.config,self__.resolve,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.wsscode.pathom3.connect.operation.Resolver.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(com.wsscode.pathom3.connect.operation.Resolver.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (coll__4469__auto__){
return (276776581 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
})(this__4468__auto____$1);
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(com.wsscode.pathom3.connect.operation.Resolver.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this81967,other81968){
var self__ = this;
var this81967__$1 = this;
return (((!((other81968 == null)))) && ((((this81967__$1.constructor === other81968.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this81967__$1.config,other81968.config)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this81967__$1.resolve,other81968.resolve)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this81967__$1.__extmap,other81968.__extmap)))))))));
}));

(com.wsscode.pathom3.connect.operation.Resolver.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"config","config",994861415),null,new cljs.core.Keyword(null,"resolve","resolve",-1584445482),null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new com.wsscode.pathom3.connect.operation.Resolver(self__.config,self__.resolve,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(com.wsscode.pathom3.connect.operation.Resolver.prototype.com$wsscode$pathom3$connect$operation$protocols$IOperation$ = cljs.core.PROTOCOL_SENTINEL);

(com.wsscode.pathom3.connect.operation.Resolver.prototype.com$wsscode$pathom3$connect$operation$protocols$IOperation$_operation_config$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.config;
}));

(com.wsscode.pathom3.connect.operation.Resolver.prototype.com$wsscode$pathom3$connect$operation$protocols$IOperation$_operation_type$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","operation-type-resolver","com.wsscode.pathom3.connect.operation/operation-type-resolver",-1680641911);
}));

(com.wsscode.pathom3.connect.operation.Resolver.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k81966){
var self__ = this;
var this__4479__auto____$1 = this;
var G__81980 = k81966;
var G__81980__$1 = (((G__81980 instanceof cljs.core.Keyword))?G__81980.fqn:null);
switch (G__81980__$1) {
case "config":
case "resolve":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k81966);

}
}));

(com.wsscode.pathom3.connect.operation.Resolver.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__81965){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__81981 = cljs.core.keyword_identical_QMARK_;
var expr__81982 = k__4481__auto__;
if(cljs.core.truth_((pred__81981.cljs$core$IFn$_invoke$arity$2 ? pred__81981.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"config","config",994861415),expr__81982) : pred__81981.call(null,new cljs.core.Keyword(null,"config","config",994861415),expr__81982)))){
return (new com.wsscode.pathom3.connect.operation.Resolver(G__81965,self__.resolve,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__81981.cljs$core$IFn$_invoke$arity$2 ? pred__81981.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"resolve","resolve",-1584445482),expr__81982) : pred__81981.call(null,new cljs.core.Keyword(null,"resolve","resolve",-1584445482),expr__81982)))){
return (new com.wsscode.pathom3.connect.operation.Resolver(self__.config,G__81965,self__.__meta,self__.__extmap,null));
} else {
return (new com.wsscode.pathom3.connect.operation.Resolver(self__.config,self__.resolve,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__81965),null));
}
}
}));

(com.wsscode.pathom3.connect.operation.Resolver.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"config","config",994861415),self__.config,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"resolve","resolve",-1584445482),self__.resolve,null))], null),self__.__extmap));
}));

(com.wsscode.pathom3.connect.operation.Resolver.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__81965){
var self__ = this;
var this__4471__auto____$1 = this;
return (new com.wsscode.pathom3.connect.operation.Resolver(self__.config,self__.resolve,G__81965,self__.__extmap,self__.__hash));
}));

(com.wsscode.pathom3.connect.operation.Resolver.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4478__auto__,(0)),cljs.core._nth(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(com.wsscode.pathom3.connect.operation.Resolver.prototype.call = (function() {
var G__82159 = null;
var G__82159__1 = (function (self__){
var self__ = this;
var self____$1 = this;
var _this = self____$1;
var G__81984 = cljs.core.PersistentArrayMap.EMPTY;
var G__81985 = cljs.core.PersistentArrayMap.EMPTY;
return (self__.resolve.cljs$core$IFn$_invoke$arity$2 ? self__.resolve.cljs$core$IFn$_invoke$arity$2(G__81984,G__81985) : self__.resolve.call(null,G__81984,G__81985));
});
var G__82159__2 = (function (self__,input){
var self__ = this;
var self____$1 = this;
var _this = self____$1;
var G__81986 = cljs.core.PersistentArrayMap.EMPTY;
var G__81987 = input;
return (self__.resolve.cljs$core$IFn$_invoke$arity$2 ? self__.resolve.cljs$core$IFn$_invoke$arity$2(G__81986,G__81987) : self__.resolve.call(null,G__81986,G__81987));
});
var G__82159__3 = (function (self__,env,input){
var self__ = this;
var self____$1 = this;
var _this = self____$1;
return (self__.resolve.cljs$core$IFn$_invoke$arity$2 ? self__.resolve.cljs$core$IFn$_invoke$arity$2(env,input) : self__.resolve.call(null,env,input));
});
G__82159 = function(self__,env,input){
switch(arguments.length){
case 1:
return G__82159__1.call(this,self__);
case 2:
return G__82159__2.call(this,self__,env);
case 3:
return G__82159__3.call(this,self__,env,input);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__82159.cljs$core$IFn$_invoke$arity$1 = G__82159__1;
G__82159.cljs$core$IFn$_invoke$arity$2 = G__82159__2;
G__82159.cljs$core$IFn$_invoke$arity$3 = G__82159__3;
return G__82159;
})()
);

(com.wsscode.pathom3.connect.operation.Resolver.prototype.apply = (function (self__,args81972){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args81972)));
}));

(com.wsscode.pathom3.connect.operation.Resolver.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var _this = this;
var G__81988 = cljs.core.PersistentArrayMap.EMPTY;
var G__81989 = cljs.core.PersistentArrayMap.EMPTY;
return (self__.resolve.cljs$core$IFn$_invoke$arity$2 ? self__.resolve.cljs$core$IFn$_invoke$arity$2(G__81988,G__81989) : self__.resolve.call(null,G__81988,G__81989));
}));

(com.wsscode.pathom3.connect.operation.Resolver.prototype.cljs$core$IFn$_invoke$arity$1 = (function (input){
var self__ = this;
var _this = this;
var G__81990 = cljs.core.PersistentArrayMap.EMPTY;
var G__81991 = input;
return (self__.resolve.cljs$core$IFn$_invoke$arity$2 ? self__.resolve.cljs$core$IFn$_invoke$arity$2(G__81990,G__81991) : self__.resolve.call(null,G__81990,G__81991));
}));

(com.wsscode.pathom3.connect.operation.Resolver.prototype.cljs$core$IFn$_invoke$arity$2 = (function (env,input){
var self__ = this;
var _this = this;
return (self__.resolve.cljs$core$IFn$_invoke$arity$2 ? self__.resolve.cljs$core$IFn$_invoke$arity$2(env,input) : self__.resolve.call(null,env,input));
}));

(com.wsscode.pathom3.connect.operation.Resolver.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"config","config",-1659574354,null),new cljs.core.Symbol(null,"resolve","resolve",56086045,null)], null);
}));

(com.wsscode.pathom3.connect.operation.Resolver.cljs$lang$type = true);

(com.wsscode.pathom3.connect.operation.Resolver.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"com.wsscode.pathom3.connect.operation/Resolver",null,(1),null));
}));

(com.wsscode.pathom3.connect.operation.Resolver.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"com.wsscode.pathom3.connect.operation/Resolver");
}));

/**
 * Positional factory function for com.wsscode.pathom3.connect.operation/Resolver.
 */
com.wsscode.pathom3.connect.operation.__GT_Resolver = (function com$wsscode$pathom3$connect$operation$__GT_Resolver(config,resolve){
return (new com.wsscode.pathom3.connect.operation.Resolver(config,resolve,null,null,null));
});

/**
 * Factory function for com.wsscode.pathom3.connect.operation/Resolver, taking a map of keywords to field values.
 */
com.wsscode.pathom3.connect.operation.map__GT_Resolver = (function com$wsscode$pathom3$connect$operation$map__GT_Resolver(G__81969){
var extmap__4512__auto__ = (function (){var G__81994 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__81969,new cljs.core.Keyword(null,"config","config",994861415),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"resolve","resolve",-1584445482)], 0));
if(cljs.core.record_QMARK_(G__81969)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__81994);
} else {
return G__81994;
}
})();
return (new com.wsscode.pathom3.connect.operation.Resolver(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(G__81969),new cljs.core.Keyword(null,"resolve","resolve",-1584445482).cljs$core$IFn$_invoke$arity$1(G__81969),null,cljs.core.not_empty(extmap__4512__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {com.wsscode.pathom3.connect.operation.protocols.IMutation}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICollection}
 * @implements {com.wsscode.pathom3.connect.operation.protocols.IOperation}
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
com.wsscode.pathom3.connect.operation.Mutation = (function (config,mutate,__meta,__extmap,__hash){
this.config = config;
this.mutate = mutate;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716171;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(com.wsscode.pathom3.connect.operation.Mutation.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(com.wsscode.pathom3.connect.operation.Mutation.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k81996,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__82001 = k81996;
var G__82001__$1 = (((G__82001 instanceof cljs.core.Keyword))?G__82001.fqn:null);
switch (G__82001__$1) {
case "config":
return self__.config;

break;
case "mutate":
return self__.mutate;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k81996,else__4475__auto__);

}
}));

(com.wsscode.pathom3.connect.operation.Mutation.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__82002){
var vec__82003 = p__82002;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82003,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82003,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(com.wsscode.pathom3.connect.operation.Mutation.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#com.wsscode.pathom3.connect.operation.Mutation{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"config","config",994861415),self__.config],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"mutate","mutate",1422419038),self__.mutate],null))], null),self__.__extmap));
}));

(com.wsscode.pathom3.connect.operation.Mutation.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__81995){
var self__ = this;
var G__81995__$1 = this;
return (new cljs.core.RecordIter((0),G__81995__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"mutate","mutate",1422419038)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.wsscode.pathom3.connect.operation.Mutation.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(com.wsscode.pathom3.connect.operation.Mutation.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new com.wsscode.pathom3.connect.operation.Mutation(self__.config,self__.mutate,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.wsscode.pathom3.connect.operation.Mutation.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(com.wsscode.pathom3.connect.operation.Mutation.prototype.com$wsscode$pathom3$connect$operation$protocols$IMutation$ = cljs.core.PROTOCOL_SENTINEL);

(com.wsscode.pathom3.connect.operation.Mutation.prototype.com$wsscode$pathom3$connect$operation$protocols$IMutation$_mutate$arity$3 = (function (_,env,input){
var self__ = this;
var ___$1 = this;
return (self__.mutate.cljs$core$IFn$_invoke$arity$2 ? self__.mutate.cljs$core$IFn$_invoke$arity$2(env,input) : self__.mutate.call(null,env,input));
}));

(com.wsscode.pathom3.connect.operation.Mutation.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (coll__4469__auto__){
return (-1635502555 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
})(this__4468__auto____$1);
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(com.wsscode.pathom3.connect.operation.Mutation.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this81997,other81998){
var self__ = this;
var this81997__$1 = this;
return (((!((other81998 == null)))) && ((((this81997__$1.constructor === other81998.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this81997__$1.config,other81998.config)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this81997__$1.mutate,other81998.mutate)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this81997__$1.__extmap,other81998.__extmap)))))))));
}));

(com.wsscode.pathom3.connect.operation.Mutation.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"config","config",994861415),null,new cljs.core.Keyword(null,"mutate","mutate",1422419038),null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new com.wsscode.pathom3.connect.operation.Mutation(self__.config,self__.mutate,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(com.wsscode.pathom3.connect.operation.Mutation.prototype.com$wsscode$pathom3$connect$operation$protocols$IOperation$ = cljs.core.PROTOCOL_SENTINEL);

(com.wsscode.pathom3.connect.operation.Mutation.prototype.com$wsscode$pathom3$connect$operation$protocols$IOperation$_operation_config$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.config;
}));

(com.wsscode.pathom3.connect.operation.Mutation.prototype.com$wsscode$pathom3$connect$operation$protocols$IOperation$_operation_type$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","operation-type-mutation","com.wsscode.pathom3.connect.operation/operation-type-mutation",-494456636);
}));

(com.wsscode.pathom3.connect.operation.Mutation.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k81996){
var self__ = this;
var this__4479__auto____$1 = this;
var G__82006 = k81996;
var G__82006__$1 = (((G__82006 instanceof cljs.core.Keyword))?G__82006.fqn:null);
switch (G__82006__$1) {
case "config":
case "mutate":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k81996);

}
}));

(com.wsscode.pathom3.connect.operation.Mutation.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__81995){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__82007 = cljs.core.keyword_identical_QMARK_;
var expr__82008 = k__4481__auto__;
if(cljs.core.truth_((pred__82007.cljs$core$IFn$_invoke$arity$2 ? pred__82007.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"config","config",994861415),expr__82008) : pred__82007.call(null,new cljs.core.Keyword(null,"config","config",994861415),expr__82008)))){
return (new com.wsscode.pathom3.connect.operation.Mutation(G__81995,self__.mutate,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__82007.cljs$core$IFn$_invoke$arity$2 ? pred__82007.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"mutate","mutate",1422419038),expr__82008) : pred__82007.call(null,new cljs.core.Keyword(null,"mutate","mutate",1422419038),expr__82008)))){
return (new com.wsscode.pathom3.connect.operation.Mutation(self__.config,G__81995,self__.__meta,self__.__extmap,null));
} else {
return (new com.wsscode.pathom3.connect.operation.Mutation(self__.config,self__.mutate,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__81995),null));
}
}
}));

(com.wsscode.pathom3.connect.operation.Mutation.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"config","config",994861415),self__.config,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"mutate","mutate",1422419038),self__.mutate,null))], null),self__.__extmap));
}));

(com.wsscode.pathom3.connect.operation.Mutation.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__81995){
var self__ = this;
var this__4471__auto____$1 = this;
return (new com.wsscode.pathom3.connect.operation.Mutation(self__.config,self__.mutate,G__81995,self__.__extmap,self__.__hash));
}));

(com.wsscode.pathom3.connect.operation.Mutation.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4478__auto__,(0)),cljs.core._nth(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(com.wsscode.pathom3.connect.operation.Mutation.prototype.call = (function() {
var G__82180 = null;
var G__82180__1 = (function (self__){
var self__ = this;
var self____$1 = this;
var _this = self____$1;
var G__82013 = cljs.core.PersistentArrayMap.EMPTY;
var G__82014 = cljs.core.PersistentArrayMap.EMPTY;
return (self__.mutate.cljs$core$IFn$_invoke$arity$2 ? self__.mutate.cljs$core$IFn$_invoke$arity$2(G__82013,G__82014) : self__.mutate.call(null,G__82013,G__82014));
});
var G__82180__2 = (function (self__,input){
var self__ = this;
var self____$1 = this;
var _this = self____$1;
var G__82015 = cljs.core.PersistentArrayMap.EMPTY;
var G__82016 = input;
return (self__.mutate.cljs$core$IFn$_invoke$arity$2 ? self__.mutate.cljs$core$IFn$_invoke$arity$2(G__82015,G__82016) : self__.mutate.call(null,G__82015,G__82016));
});
var G__82180__3 = (function (self__,env,input){
var self__ = this;
var self____$1 = this;
var _this = self____$1;
return (self__.mutate.cljs$core$IFn$_invoke$arity$2 ? self__.mutate.cljs$core$IFn$_invoke$arity$2(env,input) : self__.mutate.call(null,env,input));
});
G__82180 = function(self__,env,input){
switch(arguments.length){
case 1:
return G__82180__1.call(this,self__);
case 2:
return G__82180__2.call(this,self__,env);
case 3:
return G__82180__3.call(this,self__,env,input);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__82180.cljs$core$IFn$_invoke$arity$1 = G__82180__1;
G__82180.cljs$core$IFn$_invoke$arity$2 = G__82180__2;
G__82180.cljs$core$IFn$_invoke$arity$3 = G__82180__3;
return G__82180;
})()
);

(com.wsscode.pathom3.connect.operation.Mutation.prototype.apply = (function (self__,args82000){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args82000)));
}));

(com.wsscode.pathom3.connect.operation.Mutation.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var _this = this;
var G__82020 = cljs.core.PersistentArrayMap.EMPTY;
var G__82021 = cljs.core.PersistentArrayMap.EMPTY;
return (self__.mutate.cljs$core$IFn$_invoke$arity$2 ? self__.mutate.cljs$core$IFn$_invoke$arity$2(G__82020,G__82021) : self__.mutate.call(null,G__82020,G__82021));
}));

(com.wsscode.pathom3.connect.operation.Mutation.prototype.cljs$core$IFn$_invoke$arity$1 = (function (input){
var self__ = this;
var _this = this;
var G__82022 = cljs.core.PersistentArrayMap.EMPTY;
var G__82023 = input;
return (self__.mutate.cljs$core$IFn$_invoke$arity$2 ? self__.mutate.cljs$core$IFn$_invoke$arity$2(G__82022,G__82023) : self__.mutate.call(null,G__82022,G__82023));
}));

(com.wsscode.pathom3.connect.operation.Mutation.prototype.cljs$core$IFn$_invoke$arity$2 = (function (env,input){
var self__ = this;
var _this = this;
return (self__.mutate.cljs$core$IFn$_invoke$arity$2 ? self__.mutate.cljs$core$IFn$_invoke$arity$2(env,input) : self__.mutate.call(null,env,input));
}));

(com.wsscode.pathom3.connect.operation.Mutation.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"config","config",-1659574354,null),new cljs.core.Symbol(null,"mutate","mutate",-1232016731,null)], null);
}));

(com.wsscode.pathom3.connect.operation.Mutation.cljs$lang$type = true);

(com.wsscode.pathom3.connect.operation.Mutation.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"com.wsscode.pathom3.connect.operation/Mutation",null,(1),null));
}));

(com.wsscode.pathom3.connect.operation.Mutation.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"com.wsscode.pathom3.connect.operation/Mutation");
}));

/**
 * Positional factory function for com.wsscode.pathom3.connect.operation/Mutation.
 */
com.wsscode.pathom3.connect.operation.__GT_Mutation = (function com$wsscode$pathom3$connect$operation$__GT_Mutation(config,mutate){
return (new com.wsscode.pathom3.connect.operation.Mutation(config,mutate,null,null,null));
});

/**
 * Factory function for com.wsscode.pathom3.connect.operation/Mutation, taking a map of keywords to field values.
 */
com.wsscode.pathom3.connect.operation.map__GT_Mutation = (function com$wsscode$pathom3$connect$operation$map__GT_Mutation(G__81999){
var extmap__4512__auto__ = (function (){var G__82024 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__81999,new cljs.core.Keyword(null,"config","config",994861415),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"mutate","mutate",1422419038)], 0));
if(cljs.core.record_QMARK_(G__81999)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__82024);
} else {
return G__82024;
}
})();
return (new com.wsscode.pathom3.connect.operation.Mutation(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(G__81999),new cljs.core.Keyword(null,"mutate","mutate",1422419038).cljs$core$IFn$_invoke$arity$1(G__81999),null,cljs.core.not_empty(extmap__4512__auto__),null));
});

/**
 * Make an attribute optional
 */
com.wsscode.pathom3.connect.operation._QMARK_ = (function com$wsscode$pathom3$connect$operation$_QMARK_(attr){
return edn_query_language.core.update_property_param.cljs$core$IFn$_invoke$arity$variadic(attr,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","optional?","com.wsscode.pathom3.connect.operation/optional?",-926143517),true], 0));
});
com.wsscode.pathom3.connect.operation.operation_config = (function com$wsscode$pathom3$connect$operation$operation_config(operation){
return com.wsscode.pathom3.connect.operation.protocols._operation_config(operation);
});
com.wsscode.pathom3.connect.operation.operation_type = (function com$wsscode$pathom3$connect$operation$operation_type(operation){
return com.wsscode.pathom3.connect.operation.protocols._operation_type(operation);
});
com.wsscode.pathom3.connect.operation.describe_input_STAR_ = (function com$wsscode$pathom3$connect$operation$describe_input_STAR_(ast,path,outs_STAR_,opt_parent_QMARK_){
var seq__82025 = cljs.core.seq(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast));
var chunk__82026 = null;
var count__82027 = (0);
var i__82028 = (0);
while(true){
if((i__82028 < count__82027)){
var map__82039 = chunk__82026.cljs$core$IIndexed$_nth$arity$2(null,i__82028);
var map__82039__$1 = cljs.core.__destructure_map(map__82039);
var node = map__82039__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82039__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82039__$1,new cljs.core.Keyword(null,"params","params",710516235));
var opt_QMARK__82189 = (function (){var or__4223__auto__ = opt_parent_QMARK_;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","optional?","com.wsscode.pathom3.connect.operation/optional?",-926143517).cljs$core$IFn$_invoke$arity$1(params);
}
})();
if(cljs.core.truth_(opt_QMARK__82189)){
cljs.core._vreset_BANG_(outs_STAR_,cljs.core.assoc_in(cljs.core._deref(outs_STAR_),cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","optionals","com.wsscode.pathom3.connect.operation/optionals",1880951663)], null),path,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null)], 0)),cljs.core.PersistentArrayMap.EMPTY));
} else {
cljs.core._vreset_BANG_(outs_STAR_,cljs.core.assoc_in(cljs.core._deref(outs_STAR_),cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","requires","com.wsscode.pathom3.connect.operation/requires",926175715)], null),path,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null)], 0)),cljs.core.PersistentArrayMap.EMPTY));
}

var G__82040_82190 = node;
var G__82041_82191 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,key);
var G__82042_82192 = outs_STAR_;
var G__82043_82193 = opt_QMARK__82189;
(com.wsscode.pathom3.connect.operation.describe_input_STAR_.cljs$core$IFn$_invoke$arity$4 ? com.wsscode.pathom3.connect.operation.describe_input_STAR_.cljs$core$IFn$_invoke$arity$4(G__82040_82190,G__82041_82191,G__82042_82192,G__82043_82193) : com.wsscode.pathom3.connect.operation.describe_input_STAR_.call(null,G__82040_82190,G__82041_82191,G__82042_82192,G__82043_82193));


var G__82194 = seq__82025;
var G__82195 = chunk__82026;
var G__82196 = count__82027;
var G__82197 = (i__82028 + (1));
seq__82025 = G__82194;
chunk__82026 = G__82195;
count__82027 = G__82196;
i__82028 = G__82197;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__82025);
if(temp__5753__auto__){
var seq__82025__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__82025__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__82025__$1);
var G__82198 = cljs.core.chunk_rest(seq__82025__$1);
var G__82199 = c__4649__auto__;
var G__82200 = cljs.core.count(c__4649__auto__);
var G__82201 = (0);
seq__82025 = G__82198;
chunk__82026 = G__82199;
count__82027 = G__82200;
i__82028 = G__82201;
continue;
} else {
var map__82044 = cljs.core.first(seq__82025__$1);
var map__82044__$1 = cljs.core.__destructure_map(map__82044);
var node = map__82044__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82044__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82044__$1,new cljs.core.Keyword(null,"params","params",710516235));
var opt_QMARK__82202 = (function (){var or__4223__auto__ = opt_parent_QMARK_;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","optional?","com.wsscode.pathom3.connect.operation/optional?",-926143517).cljs$core$IFn$_invoke$arity$1(params);
}
})();
if(cljs.core.truth_(opt_QMARK__82202)){
cljs.core._vreset_BANG_(outs_STAR_,cljs.core.assoc_in(cljs.core._deref(outs_STAR_),cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","optionals","com.wsscode.pathom3.connect.operation/optionals",1880951663)], null),path,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null)], 0)),cljs.core.PersistentArrayMap.EMPTY));
} else {
cljs.core._vreset_BANG_(outs_STAR_,cljs.core.assoc_in(cljs.core._deref(outs_STAR_),cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","requires","com.wsscode.pathom3.connect.operation/requires",926175715)], null),path,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null)], 0)),cljs.core.PersistentArrayMap.EMPTY));
}

var G__82045_82204 = node;
var G__82046_82205 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,key);
var G__82047_82206 = outs_STAR_;
var G__82048_82207 = opt_QMARK__82202;
(com.wsscode.pathom3.connect.operation.describe_input_STAR_.cljs$core$IFn$_invoke$arity$4 ? com.wsscode.pathom3.connect.operation.describe_input_STAR_.cljs$core$IFn$_invoke$arity$4(G__82045_82204,G__82046_82205,G__82047_82206,G__82048_82207) : com.wsscode.pathom3.connect.operation.describe_input_STAR_.call(null,G__82045_82204,G__82046_82205,G__82047_82206,G__82048_82207));


var G__82209 = cljs.core.next(seq__82025__$1);
var G__82210 = null;
var G__82211 = (0);
var G__82212 = (0);
seq__82025 = G__82209;
chunk__82026 = G__82210;
count__82027 = G__82211;
i__82028 = G__82212;
continue;
}
} else {
return null;
}
}
break;
}
});
com.wsscode.pathom3.connect.operation.describe_input = (function com$wsscode$pathom3$connect$operation$describe_input(input){
var input_ast = edn_query_language.core.query__GT_ast(input);
var outs_STAR_ = cljs.core.volatile_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","requires","com.wsscode.pathom3.connect.operation/requires",926175715),cljs.core.PersistentArrayMap.EMPTY], null));
com.wsscode.pathom3.connect.operation.describe_input_STAR_(input_ast,cljs.core.PersistentVector.EMPTY,outs_STAR_,false);

return cljs.core.deref(outs_STAR_);
});
/**
 * Helper to create a resolver. A resolver have at least a name, the output definition
 *   and the resolve function.
 * 
 *   You can create a resolver using a map:
 * 
 *    (resolver
 *      {::op-name 'foo
 *       ::output  [:foo]
 *       ::resolve (fn [env input] ...)})
 * 
 *   Or with the helper syntax:
 * 
 *    (resolver 'foo {::output [:foo]} (fn [env input] ...))
 * 
 *   Returns an instance of the Resolver type.
 *   
 */
com.wsscode.pathom3.connect.operation.resolver = (function com$wsscode$pathom3$connect$operation$resolver(var_args){
var G__82050 = arguments.length;
switch (G__82050) {
case 3:
return com.wsscode.pathom3.connect.operation.resolver.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 1:
return com.wsscode.pathom3.connect.operation.resolver.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.wsscode.pathom3.connect.operation.resolver.cljs$core$IFn$_invoke$arity$3 = (function (op_name,config,resolve){
return com.wsscode.pathom3.connect.operation.resolver.cljs$core$IFn$_invoke$arity$1(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(com.wsscode.misc.coll.merge_defaults(config,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","op-name","com.wsscode.pathom3.connect.operation/op-name",-1249801049),op_name], null)),new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","resolve","com.wsscode.pathom3.connect.operation/resolve",606027628),resolve));
}));

(com.wsscode.pathom3.connect.operation.resolver.cljs$core$IFn$_invoke$arity$1 = (function (p__82051){
var map__82052 = p__82051;
var map__82052__$1 = cljs.core.__destructure_map(map__82052);
var config = map__82052__$1;
var transform = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82052__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","transform","com.wsscode.pathom3.connect.operation/transform",-704383498));
if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__82053){
return cljs.core.map_QMARK_(G__82053);
})], null),(function (G__82053){
return cljs.core.map_QMARK_(G__82053);
}),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),null])),config)){
} else {
cljs.spec.alpha.explain(cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__82054){
return cljs.core.map_QMARK_(G__82054);
})], null),(function (G__82054){
return cljs.core.map_QMARK_(G__82054);
}),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),null])),config);

throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Invalid config on defresolver ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"explain-data","explain-data",-1124944340),cljs.spec.alpha.explain_data(cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__82055){
return cljs.core.map_QMARK_(G__82055);
})], null),(function (G__82055){
return cljs.core.map_QMARK_(G__82055);
}),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),null])),config)], null));
}

if(com.wsscode.pathom3.connect.operation.resolver_QMARK_(config)){
return config;
} else {
var map__82059 = (function (){var G__82061 = config;
if(cljs.core.truth_(transform)){
return (transform.cljs$core$IFn$_invoke$arity$1 ? transform.cljs$core$IFn$_invoke$arity$1(G__82061) : transform.call(null,G__82061));
} else {
return G__82061;
}
})();
var map__82059__$1 = cljs.core.__destructure_map(map__82059);
var config__$1 = map__82059__$1;
var resolve = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82059__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","resolve","com.wsscode.pathom3.connect.operation/resolve",606027628));
var output = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82059__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","output","com.wsscode.pathom3.connect.operation/output",801488703));
var defaults = (cljs.core.truth_(output)?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","input","com.wsscode.pathom3.connect.operation/input",-1553849497),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","provides","com.wsscode.pathom3.connect.operation/provides",541419618),com.wsscode.pathom3.format.shape_descriptor.query__GT_shape_descriptor(output)], null):cljs.core.PersistentArrayMap.EMPTY);
var map__82060 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([defaults,config__$1], 0)),new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","resolve","com.wsscode.pathom3.connect.operation/resolve",606027628),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","transform","com.wsscode.pathom3.connect.operation/transform",-704383498)], 0));
var map__82060__$1 = cljs.core.__destructure_map(map__82060);
var config_SINGLEQUOTE_ = map__82060__$1;
var input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82060__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","input","com.wsscode.pathom3.connect.operation/input",-1553849497));
var config_SINGLEQUOTE___$1 = (function (){var G__82064 = config_SINGLEQUOTE_;
if(cljs.core.truth_(input)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__82064,com.wsscode.pathom3.connect.operation.describe_input(input)], 0));
} else {
return G__82064;
}
})();
return com.wsscode.pathom3.connect.operation.__GT_Resolver(config_SINGLEQUOTE___$1,(function (){var or__4223__auto__ = resolve;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return (function (_,___$1){
return null;
});
}
})());
}
}));

(com.wsscode.pathom3.connect.operation.resolver.cljs$lang$maxFixedArity = 3);

/**
 * Helper to create a mutation. A mutation must have a name and the mutate function.
 * 
 *   You can create a mutation using a map:
 * 
 *    (mutation
 *      {::op-name 'foo
 *       ::output  [:foo]
 *       ::mutate  (fn [env params] ...)})
 * 
 *   Or with the helper syntax:
 * 
 *    (mutation 'foo {} (fn [env params] ...))
 * 
 *   Returns an instance of the Mutation type.
 *   
 */
com.wsscode.pathom3.connect.operation.mutation = (function com$wsscode$pathom3$connect$operation$mutation(var_args){
var G__82068 = arguments.length;
switch (G__82068) {
case 3:
return com.wsscode.pathom3.connect.operation.mutation.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 1:
return com.wsscode.pathom3.connect.operation.mutation.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.wsscode.pathom3.connect.operation.mutation.cljs$core$IFn$_invoke$arity$3 = (function (op_name,config,mutate){
return com.wsscode.pathom3.connect.operation.mutation.cljs$core$IFn$_invoke$arity$1(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(com.wsscode.misc.coll.merge_defaults(config,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","op-name","com.wsscode.pathom3.connect.operation/op-name",-1249801049),op_name], null)),new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","mutate","com.wsscode.pathom3.connect.operation/mutate",-822588464),mutate));
}));

(com.wsscode.pathom3.connect.operation.mutation.cljs$core$IFn$_invoke$arity$1 = (function (p__82075){
var map__82077 = p__82075;
var map__82077__$1 = cljs.core.__destructure_map(map__82077);
var config = map__82077__$1;
var transform = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82077__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","transform","com.wsscode.pathom3.connect.operation/transform",-704383498));
if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__82078){
return cljs.core.map_QMARK_(G__82078);
})], null),(function (G__82078){
return cljs.core.map_QMARK_(G__82078);
}),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),null])),config)){
} else {
cljs.spec.alpha.explain(cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__82085){
return cljs.core.map_QMARK_(G__82085);
})], null),(function (G__82085){
return cljs.core.map_QMARK_(G__82085);
}),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),null])),config);

throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Invalid config on mutation ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"explain-data","explain-data",-1124944340),cljs.spec.alpha.explain_data(cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__82106){
return cljs.core.map_QMARK_(G__82106);
})], null),(function (G__82106){
return cljs.core.map_QMARK_(G__82106);
}),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),null])),config)], null));
}

if(com.wsscode.pathom3.connect.operation.mutation_QMARK_(config)){
return config;
} else {
var map__82112 = (function (){var G__82113 = config;
if(cljs.core.truth_(transform)){
return (transform.cljs$core$IFn$_invoke$arity$1 ? transform.cljs$core$IFn$_invoke$arity$1(G__82113) : transform.call(null,G__82113));
} else {
return G__82113;
}
})();
var map__82112__$1 = cljs.core.__destructure_map(map__82112);
var config__$1 = map__82112__$1;
var mutate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82112__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","mutate","com.wsscode.pathom3.connect.operation/mutate",-822588464));
var output = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82112__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","output","com.wsscode.pathom3.connect.operation/output",801488703));
var defaults = (cljs.core.truth_(output)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","provides","com.wsscode.pathom3.connect.operation/provides",541419618),com.wsscode.pathom3.format.shape_descriptor.query__GT_shape_descriptor(output)], null):cljs.core.PersistentArrayMap.EMPTY);
var config_SINGLEQUOTE_ = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([defaults,config__$1], 0)),new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","mutate","com.wsscode.pathom3.connect.operation/mutate",-822588464),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","transform","com.wsscode.pathom3.connect.operation/transform",-704383498)], 0));
return com.wsscode.pathom3.connect.operation.__GT_Mutation(config_SINGLEQUOTE_,(function (){var or__4223__auto__ = mutate;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return (function (_,___$1){
return null;
});
}
})());
}
}));

(com.wsscode.pathom3.connect.operation.mutation.cljs$lang$maxFixedArity = 3);

/**
 * Pull parameters from environment. Always returns a map.
 */
com.wsscode.pathom3.connect.operation.params = (function com$wsscode$pathom3$connect$operation$params(env){
var or__4223__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","node","com.wsscode.pathom3.connect.planner/node",325156565),new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","params","com.wsscode.pathom3.connect.planner/params",1545394210)], null));
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
/**
 * Set current node params to params.
 */
com.wsscode.pathom3.connect.operation.with_node_params = (function com$wsscode$pathom3$connect$operation$with_node_params(var_args){
var G__82119 = arguments.length;
switch (G__82119) {
case 1:
return com.wsscode.pathom3.connect.operation.with_node_params.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.wsscode.pathom3.connect.operation.with_node_params.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.wsscode.pathom3.connect.operation.with_node_params.cljs$core$IFn$_invoke$arity$1 = (function (params){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","node","com.wsscode.pathom3.connect.planner/node",325156565),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","params","com.wsscode.pathom3.connect.planner/params",1545394210),params], null)], null);
}));

(com.wsscode.pathom3.connect.operation.with_node_params.cljs$core$IFn$_invoke$arity$2 = (function (env,params){
return cljs.core.assoc_in(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","node","com.wsscode.pathom3.connect.planner/node",325156565),new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","params","com.wsscode.pathom3.connect.planner/params",1545394210)], null),params);
}));

(com.wsscode.pathom3.connect.operation.with_node_params.cljs$lang$maxFixedArity = 2);

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","defresolver-args","com.wsscode.pathom3.connect.operation/defresolver-args",1313253759),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_);
com.wsscode.pathom3.connect.operation.as_entry_QMARK_ = (function com$wsscode$pathom3$connect$operation$as_entry_QMARK_(x){
return com.wsscode.misc.refs.kw_identical_QMARK_(new cljs.core.Keyword(null,"as","as",1148689641),cljs.core.first(x));
});
com.wsscode.pathom3.connect.operation.extract_destructure_map_keys_as_keywords = (function com$wsscode$pathom3$connect$operation$extract_destructure_map_keys_as_keywords(m){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.remove.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom3.connect.operation.as_entry_QMARK_),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1((function (p__82122){
var vec__82123 = p__82122;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82123,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82123,(1),null);
if((((k instanceof cljs.core.Keyword)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("keys",cljs.core.name(k))))){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__82121_SHARP_){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2((function (){var or__4223__auto__ = cljs.core.namespace(p1__82121_SHARP_);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.namespace(k);
}
})(),cljs.core.name(p1__82121_SHARP_));
}),val);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [val], null);
}
}))),m);
});
com.wsscode.pathom3.connect.operation.params__GT_resolver_options = (function com$wsscode$pathom3$connect$operation$params__GT_resolver_options(p__82126){
var map__82127 = p__82126;
var map__82127__$1 = cljs.core.__destructure_map(map__82127);
var arglist = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82127__$1,new cljs.core.Keyword(null,"arglist","arglist",-1808272150));
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82127__$1,new cljs.core.Keyword(null,"options","options",99638489));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82127__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var docstring = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82127__$1,new cljs.core.Keyword(null,"docstring","docstring",879233117));
var vec__82128 = cljs.core.last(arglist);
var input_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82128,(0),null);
var input_arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82128,(1),null);
var last_expr = cljs.core.last(body);
var G__82131 = options;
var G__82131__$1 = ((((cljs.core.map_QMARK_(last_expr)) && (cljs.core.not(new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","output","com.wsscode.pathom3.connect.operation/output",801488703).cljs$core$IFn$_invoke$arity$1(options)))))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__82131,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","output","com.wsscode.pathom3.connect.operation/output",801488703),com.wsscode.pathom3.format.eql.data__GT_query(last_expr)):G__82131);
var G__82131__$2 = ((((com.wsscode.misc.refs.kw_identical_QMARK_(new cljs.core.Keyword(null,"map","map",1371690461),input_type)) && (cljs.core.not(new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","input","com.wsscode.pathom3.connect.operation/input",-1553849497).cljs$core$IFn$_invoke$arity$1(options)))))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__82131__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","input","com.wsscode.pathom3.connect.operation/input",-1553849497),com.wsscode.pathom3.connect.operation.extract_destructure_map_keys_as_keywords(input_arg)):G__82131__$1);
if(cljs.core.truth_(docstring)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__82131__$2,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","docstring","com.wsscode.pathom3.connect.operation/docstring",-1367867441),docstring);
} else {
return G__82131__$2;
}
});
com.wsscode.pathom3.connect.operation.params__GT_mutation_options = (function com$wsscode$pathom3$connect$operation$params__GT_mutation_options(p__82132){
var map__82133 = p__82132;
var map__82133__$1 = cljs.core.__destructure_map(map__82133);
var arglist = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82133__$1,new cljs.core.Keyword(null,"arglist","arglist",-1808272150));
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82133__$1,new cljs.core.Keyword(null,"options","options",99638489));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82133__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var docstring = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82133__$1,new cljs.core.Keyword(null,"docstring","docstring",879233117));
var vec__82134 = cljs.core.last(arglist);
var input_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82134,(0),null);
var params_arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82134,(1),null);
var last_expr = cljs.core.last(body);
var G__82137 = options;
var G__82137__$1 = ((((cljs.core.map_QMARK_(last_expr)) && (cljs.core.not(new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","output","com.wsscode.pathom3.connect.operation/output",801488703).cljs$core$IFn$_invoke$arity$1(options)))))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__82137,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","output","com.wsscode.pathom3.connect.operation/output",801488703),com.wsscode.pathom3.format.eql.data__GT_query(last_expr)):G__82137);
var G__82137__$2 = ((((com.wsscode.misc.refs.kw_identical_QMARK_(new cljs.core.Keyword(null,"map","map",1371690461),input_type)) && (cljs.core.not(new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","params","com.wsscode.pathom3.connect.operation/params",-1389779339).cljs$core$IFn$_invoke$arity$1(options)))))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__82137__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","params","com.wsscode.pathom3.connect.operation/params",-1389779339),com.wsscode.pathom3.connect.operation.extract_destructure_map_keys_as_keywords(params_arg)):G__82137__$1);
if(cljs.core.truth_(docstring)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__82137__$2,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","docstring","com.wsscode.pathom3.connect.operation/docstring",-1367867441),docstring);
} else {
return G__82137__$2;
}
});
/**
 * Ensures arglist contains two elements.
 */
com.wsscode.pathom3.connect.operation.normalize_arglist = (function com$wsscode$pathom3$connect$operation$normalize_arglist(arglist){
var arglist__$1 = arglist;
while(true){
if((cljs.core.count(arglist__$1) < (2))){
var G__82222 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null),arglist__$1);
arglist__$1 = G__82222;
continue;
} else {
return arglist__$1;
}
break;
}
});
/**
 * Returns a new resolver with the modified config. You can use this to change anything
 *   in the resolver configuration map. The only thing you can't change from here is the
 *   resolver or mutation functions. You can use the wrap-resolve and wrap-mutation
 *   helpers to do that.
 */
com.wsscode.pathom3.connect.operation.update_config = (function com$wsscode$pathom3$connect$operation$update_config(var_args){
var G__82151 = arguments.length;
switch (G__82151) {
case 2:
return com.wsscode.pathom3.connect.operation.update_config.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.wsscode.pathom3.connect.operation.update_config.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return com.wsscode.pathom3.connect.operation.update_config.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return com.wsscode.pathom3.connect.operation.update_config.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return com.wsscode.pathom3.connect.operation.update_config.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
case 7:
return com.wsscode.pathom3.connect.operation.update_config.cljs$core$IFn$_invoke$arity$7((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
case 8:
return com.wsscode.pathom3.connect.operation.update_config.cljs$core$IFn$_invoke$arity$8((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]));

break;
case 9:
return com.wsscode.pathom3.connect.operation.update_config.cljs$core$IFn$_invoke$arity$9((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]));

break;
case 10:
return com.wsscode.pathom3.connect.operation.update_config.cljs$core$IFn$_invoke$arity$10((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]));

break;
case 11:
return com.wsscode.pathom3.connect.operation.update_config.cljs$core$IFn$_invoke$arity$11((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]));

break;
default:
var args_arr__4850__auto__ = [];
var len__4829__auto___82227 = arguments.length;
var i__4830__auto___82228 = (0);
while(true){
if((i__4830__auto___82228 < len__4829__auto___82227)){
args_arr__4850__auto__.push((arguments[i__4830__auto___82228]));

var G__82229 = (i__4830__auto___82228 + (1));
i__4830__auto___82228 = G__82229;
continue;
} else {
}
break;
}

var argseq__4851__auto__ = (new cljs.core.IndexedSeq(args_arr__4850__auto__.slice((11)),(0),null));
return com.wsscode.pathom3.connect.operation.update_config.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),argseq__4851__auto__);

}
});

(com.wsscode.pathom3.connect.operation.update_config.cljs$core$IFn$_invoke$arity$2 = (function (operation,f){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(operation,new cljs.core.Keyword(null,"config","config",994861415),f);
}));

(com.wsscode.pathom3.connect.operation.update_config.cljs$core$IFn$_invoke$arity$3 = (function (operation,f,a1){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(operation,new cljs.core.Keyword(null,"config","config",994861415),f,a1);
}));

(com.wsscode.pathom3.connect.operation.update_config.cljs$core$IFn$_invoke$arity$4 = (function (operation,f,a1,a2){
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(operation,new cljs.core.Keyword(null,"config","config",994861415),f,a1,a2);
}));

(com.wsscode.pathom3.connect.operation.update_config.cljs$core$IFn$_invoke$arity$5 = (function (operation,f,a1,a2,a3){
return cljs.core.update.cljs$core$IFn$_invoke$arity$6(operation,new cljs.core.Keyword(null,"config","config",994861415),f,a1,a2,a3);
}));

(com.wsscode.pathom3.connect.operation.update_config.cljs$core$IFn$_invoke$arity$6 = (function (operation,f,a1,a2,a3,a4){
return cljs.core.update.cljs$core$IFn$_invoke$arity$variadic(operation,new cljs.core.Keyword(null,"config","config",994861415),f,a1,a2,a3,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a4], 0));
}));

(com.wsscode.pathom3.connect.operation.update_config.cljs$core$IFn$_invoke$arity$7 = (function (operation,f,a1,a2,a3,a4,a5){
return cljs.core.update.cljs$core$IFn$_invoke$arity$variadic(operation,new cljs.core.Keyword(null,"config","config",994861415),f,a1,a2,a3,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a4,a5], 0));
}));

(com.wsscode.pathom3.connect.operation.update_config.cljs$core$IFn$_invoke$arity$8 = (function (operation,f,a1,a2,a3,a4,a5,a6){
return cljs.core.update.cljs$core$IFn$_invoke$arity$variadic(operation,new cljs.core.Keyword(null,"config","config",994861415),f,a1,a2,a3,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a4,a5,a6], 0));
}));

(com.wsscode.pathom3.connect.operation.update_config.cljs$core$IFn$_invoke$arity$9 = (function (operation,f,a1,a2,a3,a4,a5,a6,a7){
return cljs.core.update.cljs$core$IFn$_invoke$arity$variadic(operation,new cljs.core.Keyword(null,"config","config",994861415),f,a1,a2,a3,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a4,a5,a6,a7], 0));
}));

(com.wsscode.pathom3.connect.operation.update_config.cljs$core$IFn$_invoke$arity$10 = (function (operation,f,a1,a2,a3,a4,a5,a6,a7,a8){
return cljs.core.update.cljs$core$IFn$_invoke$arity$variadic(operation,new cljs.core.Keyword(null,"config","config",994861415),f,a1,a2,a3,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a4,a5,a6,a7,a8], 0));
}));

(com.wsscode.pathom3.connect.operation.update_config.cljs$core$IFn$_invoke$arity$11 = (function (operation,f,a1,a2,a3,a4,a5,a6,a7,a8,a9){
return cljs.core.update.cljs$core$IFn$_invoke$arity$variadic(operation,new cljs.core.Keyword(null,"config","config",994861415),f,a1,a2,a3,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a4,a5,a6,a7,a8,a9], 0));
}));

(com.wsscode.pathom3.connect.operation.update_config.cljs$core$IFn$_invoke$arity$variadic = (function (operation,f,a1,a2,a3,a4,a5,a6,a7,a8,a9,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(cljs.core.update,operation,new cljs.core.Keyword(null,"config","config",994861415),f,a1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a2,a3,a4,a5,a6,a7,a8,a9,args], 0));
}));

/** @this {Function} */
(com.wsscode.pathom3.connect.operation.update_config.cljs$lang$applyTo = (function (seq82139){
var G__82140 = cljs.core.first(seq82139);
var seq82139__$1 = cljs.core.next(seq82139);
var G__82141 = cljs.core.first(seq82139__$1);
var seq82139__$2 = cljs.core.next(seq82139__$1);
var G__82142 = cljs.core.first(seq82139__$2);
var seq82139__$3 = cljs.core.next(seq82139__$2);
var G__82143 = cljs.core.first(seq82139__$3);
var seq82139__$4 = cljs.core.next(seq82139__$3);
var G__82144 = cljs.core.first(seq82139__$4);
var seq82139__$5 = cljs.core.next(seq82139__$4);
var G__82145 = cljs.core.first(seq82139__$5);
var seq82139__$6 = cljs.core.next(seq82139__$5);
var G__82146 = cljs.core.first(seq82139__$6);
var seq82139__$7 = cljs.core.next(seq82139__$6);
var G__82147 = cljs.core.first(seq82139__$7);
var seq82139__$8 = cljs.core.next(seq82139__$7);
var G__82148 = cljs.core.first(seq82139__$8);
var seq82139__$9 = cljs.core.next(seq82139__$8);
var G__82149 = cljs.core.first(seq82139__$9);
var seq82139__$10 = cljs.core.next(seq82139__$9);
var G__82150 = cljs.core.first(seq82139__$10);
var seq82139__$11 = cljs.core.next(seq82139__$10);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__82140,G__82141,G__82142,G__82143,G__82144,G__82145,G__82146,G__82147,G__82148,G__82149,G__82150,seq82139__$11);
}));

(com.wsscode.pathom3.connect.operation.update_config.cljs$lang$maxFixedArity = (11));

/**
 * Return a new resolver with the resolve fn modified. You can use the previous fn or
 *   just replace. Here is a noop wrapper example:
 * 
 *   (wrap-resolve resolver
 *  (fn [resolve]
 *    (fn [env input]
 *      (resolve env input)))
 */
com.wsscode.pathom3.connect.operation.wrap_resolve = (function com$wsscode$pathom3$connect$operation$wrap_resolve(resolver,f){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(resolver,new cljs.core.Keyword(null,"resolve","resolve",-1584445482),f);
});
/**
 * Return a new mutation with the resolve fn modified. You can use the previous fn or
 *   just replace. Here is a noop wrapper example:
 * 
 *   (wrap-mutate mutation
 *  (fn [mutate]
 *    (fn [env params]
 *      (mutate env params)))
 */
com.wsscode.pathom3.connect.operation.wrap_mutate = (function com$wsscode$pathom3$connect$operation$wrap_mutate(mutation,f){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(mutation,new cljs.core.Keyword(null,"mutate","mutate",1422419038),f);
});
com.wsscode.pathom3.connect.operation.final_value_QMARK_ = (function com$wsscode$pathom3$connect$operation$final_value_QMARK_(x){
var G__82152 = x;
var G__82152__$1 = (((G__82152 == null))?null:cljs.core.meta(G__82152));
var G__82152__$2 = (((G__82152__$1 == null))?null:new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","final","com.wsscode.pathom3.connect.operation/final",-910956993).cljs$core$IFn$_invoke$arity$1(G__82152__$1));
if((G__82152__$2 == null)){
return null;
} else {
return G__82152__$2 === true;
}
});

//# sourceMappingURL=com.wsscode.pathom3.connect.operation.js.map
