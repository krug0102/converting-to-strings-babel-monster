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

(com.wsscode.pathom3.connect.operation.Resolver.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k157876,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__157881 = k157876;
var G__157881__$1 = (((G__157881 instanceof cljs.core.Keyword))?G__157881.fqn:null);
switch (G__157881__$1) {
case "config":
return self__.config;

break;
case "resolve":
return self__.resolve;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k157876,else__4475__auto__);

}
}));

(com.wsscode.pathom3.connect.operation.Resolver.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__157882){
var vec__157883 = p__157882;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__157883,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__157883,(1),null);
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

(com.wsscode.pathom3.connect.operation.Resolver.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__157875){
var self__ = this;
var G__157875__$1 = this;
return (new cljs.core.RecordIter((0),G__157875__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"resolve","resolve",-1584445482)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(com.wsscode.pathom3.connect.operation.Resolver.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this157877,other157878){
var self__ = this;
var this157877__$1 = this;
return (((!((other157878 == null)))) && ((((this157877__$1.constructor === other157878.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this157877__$1.config,other157878.config)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this157877__$1.resolve,other157878.resolve)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this157877__$1.__extmap,other157878.__extmap)))))))));
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

(com.wsscode.pathom3.connect.operation.Resolver.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k157876){
var self__ = this;
var this__4479__auto____$1 = this;
var G__157886 = k157876;
var G__157886__$1 = (((G__157886 instanceof cljs.core.Keyword))?G__157886.fqn:null);
switch (G__157886__$1) {
case "config":
case "resolve":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k157876);

}
}));

(com.wsscode.pathom3.connect.operation.Resolver.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__157875){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__157887 = cljs.core.keyword_identical_QMARK_;
var expr__157888 = k__4481__auto__;
if(cljs.core.truth_((pred__157887.cljs$core$IFn$_invoke$arity$2 ? pred__157887.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"config","config",994861415),expr__157888) : pred__157887.call(null,new cljs.core.Keyword(null,"config","config",994861415),expr__157888)))){
return (new com.wsscode.pathom3.connect.operation.Resolver(G__157875,self__.resolve,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__157887.cljs$core$IFn$_invoke$arity$2 ? pred__157887.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"resolve","resolve",-1584445482),expr__157888) : pred__157887.call(null,new cljs.core.Keyword(null,"resolve","resolve",-1584445482),expr__157888)))){
return (new com.wsscode.pathom3.connect.operation.Resolver(self__.config,G__157875,self__.__meta,self__.__extmap,null));
} else {
return (new com.wsscode.pathom3.connect.operation.Resolver(self__.config,self__.resolve,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__157875),null));
}
}
}));

(com.wsscode.pathom3.connect.operation.Resolver.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"config","config",994861415),self__.config,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"resolve","resolve",-1584445482),self__.resolve,null))], null),self__.__extmap));
}));

(com.wsscode.pathom3.connect.operation.Resolver.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__157875){
var self__ = this;
var this__4471__auto____$1 = this;
return (new com.wsscode.pathom3.connect.operation.Resolver(self__.config,self__.resolve,G__157875,self__.__extmap,self__.__hash));
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
var G__158068 = null;
var G__158068__1 = (function (self__){
var self__ = this;
var self____$1 = this;
var _this = self____$1;
var G__157890 = cljs.core.PersistentArrayMap.EMPTY;
var G__157891 = cljs.core.PersistentArrayMap.EMPTY;
return (self__.resolve.cljs$core$IFn$_invoke$arity$2 ? self__.resolve.cljs$core$IFn$_invoke$arity$2(G__157890,G__157891) : self__.resolve.call(null,G__157890,G__157891));
});
var G__158068__2 = (function (self__,input){
var self__ = this;
var self____$1 = this;
var _this = self____$1;
var G__157892 = cljs.core.PersistentArrayMap.EMPTY;
var G__157893 = input;
return (self__.resolve.cljs$core$IFn$_invoke$arity$2 ? self__.resolve.cljs$core$IFn$_invoke$arity$2(G__157892,G__157893) : self__.resolve.call(null,G__157892,G__157893));
});
var G__158068__3 = (function (self__,env,input){
var self__ = this;
var self____$1 = this;
var _this = self____$1;
return (self__.resolve.cljs$core$IFn$_invoke$arity$2 ? self__.resolve.cljs$core$IFn$_invoke$arity$2(env,input) : self__.resolve.call(null,env,input));
});
G__158068 = function(self__,env,input){
switch(arguments.length){
case 1:
return G__158068__1.call(this,self__);
case 2:
return G__158068__2.call(this,self__,env);
case 3:
return G__158068__3.call(this,self__,env,input);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__158068.cljs$core$IFn$_invoke$arity$1 = G__158068__1;
G__158068.cljs$core$IFn$_invoke$arity$2 = G__158068__2;
G__158068.cljs$core$IFn$_invoke$arity$3 = G__158068__3;
return G__158068;
})()
);

(com.wsscode.pathom3.connect.operation.Resolver.prototype.apply = (function (self__,args157880){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args157880)));
}));

(com.wsscode.pathom3.connect.operation.Resolver.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var _this = this;
var G__157894 = cljs.core.PersistentArrayMap.EMPTY;
var G__157895 = cljs.core.PersistentArrayMap.EMPTY;
return (self__.resolve.cljs$core$IFn$_invoke$arity$2 ? self__.resolve.cljs$core$IFn$_invoke$arity$2(G__157894,G__157895) : self__.resolve.call(null,G__157894,G__157895));
}));

(com.wsscode.pathom3.connect.operation.Resolver.prototype.cljs$core$IFn$_invoke$arity$1 = (function (input){
var self__ = this;
var _this = this;
var G__157896 = cljs.core.PersistentArrayMap.EMPTY;
var G__157897 = input;
return (self__.resolve.cljs$core$IFn$_invoke$arity$2 ? self__.resolve.cljs$core$IFn$_invoke$arity$2(G__157896,G__157897) : self__.resolve.call(null,G__157896,G__157897));
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
com.wsscode.pathom3.connect.operation.map__GT_Resolver = (function com$wsscode$pathom3$connect$operation$map__GT_Resolver(G__157879){
var extmap__4512__auto__ = (function (){var G__157898 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__157879,new cljs.core.Keyword(null,"config","config",994861415),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"resolve","resolve",-1584445482)], 0));
if(cljs.core.record_QMARK_(G__157879)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__157898);
} else {
return G__157898;
}
})();
return (new com.wsscode.pathom3.connect.operation.Resolver(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(G__157879),new cljs.core.Keyword(null,"resolve","resolve",-1584445482).cljs$core$IFn$_invoke$arity$1(G__157879),null,cljs.core.not_empty(extmap__4512__auto__),null));
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

(com.wsscode.pathom3.connect.operation.Mutation.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k157900,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__157905 = k157900;
var G__157905__$1 = (((G__157905 instanceof cljs.core.Keyword))?G__157905.fqn:null);
switch (G__157905__$1) {
case "config":
return self__.config;

break;
case "mutate":
return self__.mutate;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k157900,else__4475__auto__);

}
}));

(com.wsscode.pathom3.connect.operation.Mutation.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__157906){
var vec__157907 = p__157906;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__157907,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__157907,(1),null);
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

(com.wsscode.pathom3.connect.operation.Mutation.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__157899){
var self__ = this;
var G__157899__$1 = this;
return (new cljs.core.RecordIter((0),G__157899__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"mutate","mutate",1422419038)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(com.wsscode.pathom3.connect.operation.Mutation.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this157901,other157902){
var self__ = this;
var this157901__$1 = this;
return (((!((other157902 == null)))) && ((((this157901__$1.constructor === other157902.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this157901__$1.config,other157902.config)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this157901__$1.mutate,other157902.mutate)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this157901__$1.__extmap,other157902.__extmap)))))))));
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

(com.wsscode.pathom3.connect.operation.Mutation.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k157900){
var self__ = this;
var this__4479__auto____$1 = this;
var G__157910 = k157900;
var G__157910__$1 = (((G__157910 instanceof cljs.core.Keyword))?G__157910.fqn:null);
switch (G__157910__$1) {
case "config":
case "mutate":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k157900);

}
}));

(com.wsscode.pathom3.connect.operation.Mutation.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__157899){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__157911 = cljs.core.keyword_identical_QMARK_;
var expr__157912 = k__4481__auto__;
if(cljs.core.truth_((pred__157911.cljs$core$IFn$_invoke$arity$2 ? pred__157911.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"config","config",994861415),expr__157912) : pred__157911.call(null,new cljs.core.Keyword(null,"config","config",994861415),expr__157912)))){
return (new com.wsscode.pathom3.connect.operation.Mutation(G__157899,self__.mutate,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__157911.cljs$core$IFn$_invoke$arity$2 ? pred__157911.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"mutate","mutate",1422419038),expr__157912) : pred__157911.call(null,new cljs.core.Keyword(null,"mutate","mutate",1422419038),expr__157912)))){
return (new com.wsscode.pathom3.connect.operation.Mutation(self__.config,G__157899,self__.__meta,self__.__extmap,null));
} else {
return (new com.wsscode.pathom3.connect.operation.Mutation(self__.config,self__.mutate,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__157899),null));
}
}
}));

(com.wsscode.pathom3.connect.operation.Mutation.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"config","config",994861415),self__.config,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"mutate","mutate",1422419038),self__.mutate,null))], null),self__.__extmap));
}));

(com.wsscode.pathom3.connect.operation.Mutation.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__157899){
var self__ = this;
var this__4471__auto____$1 = this;
return (new com.wsscode.pathom3.connect.operation.Mutation(self__.config,self__.mutate,G__157899,self__.__extmap,self__.__hash));
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
var G__158078 = null;
var G__158078__1 = (function (self__){
var self__ = this;
var self____$1 = this;
var _this = self____$1;
var G__157914 = cljs.core.PersistentArrayMap.EMPTY;
var G__157915 = cljs.core.PersistentArrayMap.EMPTY;
return (self__.mutate.cljs$core$IFn$_invoke$arity$2 ? self__.mutate.cljs$core$IFn$_invoke$arity$2(G__157914,G__157915) : self__.mutate.call(null,G__157914,G__157915));
});
var G__158078__2 = (function (self__,input){
var self__ = this;
var self____$1 = this;
var _this = self____$1;
var G__157916 = cljs.core.PersistentArrayMap.EMPTY;
var G__157917 = input;
return (self__.mutate.cljs$core$IFn$_invoke$arity$2 ? self__.mutate.cljs$core$IFn$_invoke$arity$2(G__157916,G__157917) : self__.mutate.call(null,G__157916,G__157917));
});
var G__158078__3 = (function (self__,env,input){
var self__ = this;
var self____$1 = this;
var _this = self____$1;
return (self__.mutate.cljs$core$IFn$_invoke$arity$2 ? self__.mutate.cljs$core$IFn$_invoke$arity$2(env,input) : self__.mutate.call(null,env,input));
});
G__158078 = function(self__,env,input){
switch(arguments.length){
case 1:
return G__158078__1.call(this,self__);
case 2:
return G__158078__2.call(this,self__,env);
case 3:
return G__158078__3.call(this,self__,env,input);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__158078.cljs$core$IFn$_invoke$arity$1 = G__158078__1;
G__158078.cljs$core$IFn$_invoke$arity$2 = G__158078__2;
G__158078.cljs$core$IFn$_invoke$arity$3 = G__158078__3;
return G__158078;
})()
);

(com.wsscode.pathom3.connect.operation.Mutation.prototype.apply = (function (self__,args157904){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args157904)));
}));

(com.wsscode.pathom3.connect.operation.Mutation.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var _this = this;
var G__157918 = cljs.core.PersistentArrayMap.EMPTY;
var G__157919 = cljs.core.PersistentArrayMap.EMPTY;
return (self__.mutate.cljs$core$IFn$_invoke$arity$2 ? self__.mutate.cljs$core$IFn$_invoke$arity$2(G__157918,G__157919) : self__.mutate.call(null,G__157918,G__157919));
}));

(com.wsscode.pathom3.connect.operation.Mutation.prototype.cljs$core$IFn$_invoke$arity$1 = (function (input){
var self__ = this;
var _this = this;
var G__157920 = cljs.core.PersistentArrayMap.EMPTY;
var G__157921 = input;
return (self__.mutate.cljs$core$IFn$_invoke$arity$2 ? self__.mutate.cljs$core$IFn$_invoke$arity$2(G__157920,G__157921) : self__.mutate.call(null,G__157920,G__157921));
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
com.wsscode.pathom3.connect.operation.map__GT_Mutation = (function com$wsscode$pathom3$connect$operation$map__GT_Mutation(G__157903){
var extmap__4512__auto__ = (function (){var G__157925 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__157903,new cljs.core.Keyword(null,"config","config",994861415),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"mutate","mutate",1422419038)], 0));
if(cljs.core.record_QMARK_(G__157903)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__157925);
} else {
return G__157925;
}
})();
return (new com.wsscode.pathom3.connect.operation.Mutation(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(G__157903),new cljs.core.Keyword(null,"mutate","mutate",1422419038).cljs$core$IFn$_invoke$arity$1(G__157903),null,cljs.core.not_empty(extmap__4512__auto__),null));
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
var seq__157929 = cljs.core.seq(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast));
var chunk__157930 = null;
var count__157931 = (0);
var i__157932 = (0);
while(true){
if((i__157932 < count__157931)){
var map__157943 = chunk__157930.cljs$core$IIndexed$_nth$arity$2(null,i__157932);
var map__157943__$1 = cljs.core.__destructure_map(map__157943);
var node = map__157943__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__157943__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__157943__$1,new cljs.core.Keyword(null,"params","params",710516235));
var opt_QMARK__158082 = (function (){var or__4223__auto__ = opt_parent_QMARK_;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","optional?","com.wsscode.pathom3.connect.operation/optional?",-926143517).cljs$core$IFn$_invoke$arity$1(params);
}
})();
if(cljs.core.truth_(opt_QMARK__158082)){
cljs.core._vreset_BANG_(outs_STAR_,cljs.core.assoc_in(cljs.core._deref(outs_STAR_),cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","optionals","com.wsscode.pathom3.connect.operation/optionals",1880951663)], null),path,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null)], 0)),cljs.core.PersistentArrayMap.EMPTY));
} else {
cljs.core._vreset_BANG_(outs_STAR_,cljs.core.assoc_in(cljs.core._deref(outs_STAR_),cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","requires","com.wsscode.pathom3.connect.operation/requires",926175715)], null),path,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null)], 0)),cljs.core.PersistentArrayMap.EMPTY));
}

var G__157944_158083 = node;
var G__157945_158084 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,key);
var G__157946_158085 = outs_STAR_;
var G__157947_158086 = opt_QMARK__158082;
(com.wsscode.pathom3.connect.operation.describe_input_STAR_.cljs$core$IFn$_invoke$arity$4 ? com.wsscode.pathom3.connect.operation.describe_input_STAR_.cljs$core$IFn$_invoke$arity$4(G__157944_158083,G__157945_158084,G__157946_158085,G__157947_158086) : com.wsscode.pathom3.connect.operation.describe_input_STAR_.call(null,G__157944_158083,G__157945_158084,G__157946_158085,G__157947_158086));


var G__158087 = seq__157929;
var G__158088 = chunk__157930;
var G__158089 = count__157931;
var G__158090 = (i__157932 + (1));
seq__157929 = G__158087;
chunk__157930 = G__158088;
count__157931 = G__158089;
i__157932 = G__158090;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__157929);
if(temp__5753__auto__){
var seq__157929__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__157929__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__157929__$1);
var G__158091 = cljs.core.chunk_rest(seq__157929__$1);
var G__158092 = c__4649__auto__;
var G__158093 = cljs.core.count(c__4649__auto__);
var G__158094 = (0);
seq__157929 = G__158091;
chunk__157930 = G__158092;
count__157931 = G__158093;
i__157932 = G__158094;
continue;
} else {
var map__157948 = cljs.core.first(seq__157929__$1);
var map__157948__$1 = cljs.core.__destructure_map(map__157948);
var node = map__157948__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__157948__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__157948__$1,new cljs.core.Keyword(null,"params","params",710516235));
var opt_QMARK__158095 = (function (){var or__4223__auto__ = opt_parent_QMARK_;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","optional?","com.wsscode.pathom3.connect.operation/optional?",-926143517).cljs$core$IFn$_invoke$arity$1(params);
}
})();
if(cljs.core.truth_(opt_QMARK__158095)){
cljs.core._vreset_BANG_(outs_STAR_,cljs.core.assoc_in(cljs.core._deref(outs_STAR_),cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","optionals","com.wsscode.pathom3.connect.operation/optionals",1880951663)], null),path,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null)], 0)),cljs.core.PersistentArrayMap.EMPTY));
} else {
cljs.core._vreset_BANG_(outs_STAR_,cljs.core.assoc_in(cljs.core._deref(outs_STAR_),cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","requires","com.wsscode.pathom3.connect.operation/requires",926175715)], null),path,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null)], 0)),cljs.core.PersistentArrayMap.EMPTY));
}

var G__157949_158096 = node;
var G__157950_158097 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,key);
var G__157951_158098 = outs_STAR_;
var G__157952_158099 = opt_QMARK__158095;
(com.wsscode.pathom3.connect.operation.describe_input_STAR_.cljs$core$IFn$_invoke$arity$4 ? com.wsscode.pathom3.connect.operation.describe_input_STAR_.cljs$core$IFn$_invoke$arity$4(G__157949_158096,G__157950_158097,G__157951_158098,G__157952_158099) : com.wsscode.pathom3.connect.operation.describe_input_STAR_.call(null,G__157949_158096,G__157950_158097,G__157951_158098,G__157952_158099));


var G__158100 = cljs.core.next(seq__157929__$1);
var G__158101 = null;
var G__158102 = (0);
var G__158103 = (0);
seq__157929 = G__158100;
chunk__157930 = G__158101;
count__157931 = G__158102;
i__157932 = G__158103;
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
var G__157954 = arguments.length;
switch (G__157954) {
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

(com.wsscode.pathom3.connect.operation.resolver.cljs$core$IFn$_invoke$arity$1 = (function (p__157955){
var map__157956 = p__157955;
var map__157956__$1 = cljs.core.__destructure_map(map__157956);
var config = map__157956__$1;
var transform = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__157956__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","transform","com.wsscode.pathom3.connect.operation/transform",-704383498));
if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__157957){
return cljs.core.map_QMARK_(G__157957);
})], null),(function (G__157957){
return cljs.core.map_QMARK_(G__157957);
}),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),null])),config)){
} else {
cljs.spec.alpha.explain(cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__157958){
return cljs.core.map_QMARK_(G__157958);
})], null),(function (G__157958){
return cljs.core.map_QMARK_(G__157958);
}),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),null])),config);

throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Invalid config on defresolver ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"explain-data","explain-data",-1124944340),cljs.spec.alpha.explain_data(cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__157959){
return cljs.core.map_QMARK_(G__157959);
})], null),(function (G__157959){
return cljs.core.map_QMARK_(G__157959);
}),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),null])),config)], null));
}

if(com.wsscode.pathom3.connect.operation.resolver_QMARK_(config)){
return config;
} else {
var map__157963 = (function (){var G__157965 = config;
if(cljs.core.truth_(transform)){
return (transform.cljs$core$IFn$_invoke$arity$1 ? transform.cljs$core$IFn$_invoke$arity$1(G__157965) : transform.call(null,G__157965));
} else {
return G__157965;
}
})();
var map__157963__$1 = cljs.core.__destructure_map(map__157963);
var config__$1 = map__157963__$1;
var resolve = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__157963__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","resolve","com.wsscode.pathom3.connect.operation/resolve",606027628));
var output = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__157963__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","output","com.wsscode.pathom3.connect.operation/output",801488703));
var defaults = (cljs.core.truth_(output)?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","input","com.wsscode.pathom3.connect.operation/input",-1553849497),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","provides","com.wsscode.pathom3.connect.operation/provides",541419618),com.wsscode.pathom3.format.shape_descriptor.query__GT_shape_descriptor(output)], null):cljs.core.PersistentArrayMap.EMPTY);
var map__157964 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([defaults,config__$1], 0)),new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","resolve","com.wsscode.pathom3.connect.operation/resolve",606027628),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","transform","com.wsscode.pathom3.connect.operation/transform",-704383498)], 0));
var map__157964__$1 = cljs.core.__destructure_map(map__157964);
var config_SINGLEQUOTE_ = map__157964__$1;
var input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__157964__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","input","com.wsscode.pathom3.connect.operation/input",-1553849497));
var config_SINGLEQUOTE___$1 = (function (){var G__157967 = config_SINGLEQUOTE_;
if(cljs.core.truth_(input)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__157967,com.wsscode.pathom3.connect.operation.describe_input(input)], 0));
} else {
return G__157967;
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
var G__157971 = arguments.length;
switch (G__157971) {
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

(com.wsscode.pathom3.connect.operation.mutation.cljs$core$IFn$_invoke$arity$1 = (function (p__157972){
var map__157973 = p__157972;
var map__157973__$1 = cljs.core.__destructure_map(map__157973);
var config = map__157973__$1;
var transform = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__157973__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","transform","com.wsscode.pathom3.connect.operation/transform",-704383498));
if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__157974){
return cljs.core.map_QMARK_(G__157974);
})], null),(function (G__157974){
return cljs.core.map_QMARK_(G__157974);
}),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),null])),config)){
} else {
cljs.spec.alpha.explain(cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__157975){
return cljs.core.map_QMARK_(G__157975);
})], null),(function (G__157975){
return cljs.core.map_QMARK_(G__157975);
}),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),null])),config);

throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Invalid config on mutation ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"explain-data","explain-data",-1124944340),cljs.spec.alpha.explain_data(cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__157976){
return cljs.core.map_QMARK_(G__157976);
})], null),(function (G__157976){
return cljs.core.map_QMARK_(G__157976);
}),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),null])),config)], null));
}

if(com.wsscode.pathom3.connect.operation.mutation_QMARK_(config)){
return config;
} else {
var map__157977 = (function (){var G__157978 = config;
if(cljs.core.truth_(transform)){
return (transform.cljs$core$IFn$_invoke$arity$1 ? transform.cljs$core$IFn$_invoke$arity$1(G__157978) : transform.call(null,G__157978));
} else {
return G__157978;
}
})();
var map__157977__$1 = cljs.core.__destructure_map(map__157977);
var config__$1 = map__157977__$1;
var mutate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__157977__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","mutate","com.wsscode.pathom3.connect.operation/mutate",-822588464));
var output = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__157977__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","output","com.wsscode.pathom3.connect.operation/output",801488703));
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
var G__157980 = arguments.length;
switch (G__157980) {
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
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.remove.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom3.connect.operation.as_entry_QMARK_),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1((function (p__157983){
var vec__157984 = p__157983;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__157984,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__157984,(1),null);
if((((k instanceof cljs.core.Keyword)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("keys",cljs.core.name(k))))){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__157982_SHARP_){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2((function (){var or__4223__auto__ = cljs.core.namespace(p1__157982_SHARP_);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.namespace(k);
}
})(),cljs.core.name(p1__157982_SHARP_));
}),val);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [val], null);
}
}))),m);
});
com.wsscode.pathom3.connect.operation.params__GT_resolver_options = (function com$wsscode$pathom3$connect$operation$params__GT_resolver_options(p__157987){
var map__157988 = p__157987;
var map__157988__$1 = cljs.core.__destructure_map(map__157988);
var arglist = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__157988__$1,new cljs.core.Keyword(null,"arglist","arglist",-1808272150));
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__157988__$1,new cljs.core.Keyword(null,"options","options",99638489));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__157988__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var docstring = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__157988__$1,new cljs.core.Keyword(null,"docstring","docstring",879233117));
var vec__157989 = cljs.core.last(arglist);
var input_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__157989,(0),null);
var input_arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__157989,(1),null);
var last_expr = cljs.core.last(body);
var G__157992 = options;
var G__157992__$1 = ((((cljs.core.map_QMARK_(last_expr)) && (cljs.core.not(new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","output","com.wsscode.pathom3.connect.operation/output",801488703).cljs$core$IFn$_invoke$arity$1(options)))))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__157992,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","output","com.wsscode.pathom3.connect.operation/output",801488703),com.wsscode.pathom3.format.eql.data__GT_query(last_expr)):G__157992);
var G__157992__$2 = ((((com.wsscode.misc.refs.kw_identical_QMARK_(new cljs.core.Keyword(null,"map","map",1371690461),input_type)) && (cljs.core.not(new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","input","com.wsscode.pathom3.connect.operation/input",-1553849497).cljs$core$IFn$_invoke$arity$1(options)))))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__157992__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","input","com.wsscode.pathom3.connect.operation/input",-1553849497),com.wsscode.pathom3.connect.operation.extract_destructure_map_keys_as_keywords(input_arg)):G__157992__$1);
if(cljs.core.truth_(docstring)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__157992__$2,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","docstring","com.wsscode.pathom3.connect.operation/docstring",-1367867441),docstring);
} else {
return G__157992__$2;
}
});
com.wsscode.pathom3.connect.operation.params__GT_mutation_options = (function com$wsscode$pathom3$connect$operation$params__GT_mutation_options(p__157993){
var map__157994 = p__157993;
var map__157994__$1 = cljs.core.__destructure_map(map__157994);
var arglist = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__157994__$1,new cljs.core.Keyword(null,"arglist","arglist",-1808272150));
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__157994__$1,new cljs.core.Keyword(null,"options","options",99638489));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__157994__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var docstring = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__157994__$1,new cljs.core.Keyword(null,"docstring","docstring",879233117));
var vec__157995 = cljs.core.last(arglist);
var input_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__157995,(0),null);
var params_arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__157995,(1),null);
var last_expr = cljs.core.last(body);
var G__157998 = options;
var G__157998__$1 = ((((cljs.core.map_QMARK_(last_expr)) && (cljs.core.not(new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","output","com.wsscode.pathom3.connect.operation/output",801488703).cljs$core$IFn$_invoke$arity$1(options)))))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__157998,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","output","com.wsscode.pathom3.connect.operation/output",801488703),com.wsscode.pathom3.format.eql.data__GT_query(last_expr)):G__157998);
var G__157998__$2 = ((((com.wsscode.misc.refs.kw_identical_QMARK_(new cljs.core.Keyword(null,"map","map",1371690461),input_type)) && (cljs.core.not(new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","params","com.wsscode.pathom3.connect.operation/params",-1389779339).cljs$core$IFn$_invoke$arity$1(options)))))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__157998__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","params","com.wsscode.pathom3.connect.operation/params",-1389779339),com.wsscode.pathom3.connect.operation.extract_destructure_map_keys_as_keywords(params_arg)):G__157998__$1);
if(cljs.core.truth_(docstring)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__157998__$2,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","docstring","com.wsscode.pathom3.connect.operation/docstring",-1367867441),docstring);
} else {
return G__157998__$2;
}
});
/**
 * Ensures arglist contains two elements.
 */
com.wsscode.pathom3.connect.operation.normalize_arglist = (function com$wsscode$pathom3$connect$operation$normalize_arglist(arglist){
var arglist__$1 = arglist;
while(true){
if((cljs.core.count(arglist__$1) < (2))){
var G__158115 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null),arglist__$1);
arglist__$1 = G__158115;
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
var G__158017 = arguments.length;
switch (G__158017) {
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
var len__4829__auto___158118 = arguments.length;
var i__4830__auto___158119 = (0);
while(true){
if((i__4830__auto___158119 < len__4829__auto___158118)){
args_arr__4850__auto__.push((arguments[i__4830__auto___158119]));

var G__158121 = (i__4830__auto___158119 + (1));
i__4830__auto___158119 = G__158121;
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
(com.wsscode.pathom3.connect.operation.update_config.cljs$lang$applyTo = (function (seq158005){
var G__158006 = cljs.core.first(seq158005);
var seq158005__$1 = cljs.core.next(seq158005);
var G__158007 = cljs.core.first(seq158005__$1);
var seq158005__$2 = cljs.core.next(seq158005__$1);
var G__158008 = cljs.core.first(seq158005__$2);
var seq158005__$3 = cljs.core.next(seq158005__$2);
var G__158009 = cljs.core.first(seq158005__$3);
var seq158005__$4 = cljs.core.next(seq158005__$3);
var G__158010 = cljs.core.first(seq158005__$4);
var seq158005__$5 = cljs.core.next(seq158005__$4);
var G__158011 = cljs.core.first(seq158005__$5);
var seq158005__$6 = cljs.core.next(seq158005__$5);
var G__158012 = cljs.core.first(seq158005__$6);
var seq158005__$7 = cljs.core.next(seq158005__$6);
var G__158013 = cljs.core.first(seq158005__$7);
var seq158005__$8 = cljs.core.next(seq158005__$7);
var G__158014 = cljs.core.first(seq158005__$8);
var seq158005__$9 = cljs.core.next(seq158005__$8);
var G__158015 = cljs.core.first(seq158005__$9);
var seq158005__$10 = cljs.core.next(seq158005__$9);
var G__158016 = cljs.core.first(seq158005__$10);
var seq158005__$11 = cljs.core.next(seq158005__$10);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__158006,G__158007,G__158008,G__158009,G__158010,G__158011,G__158012,G__158013,G__158014,G__158015,G__158016,seq158005__$11);
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
var G__158043 = x;
var G__158043__$1 = (((G__158043 == null))?null:cljs.core.meta(G__158043));
var G__158043__$2 = (((G__158043__$1 == null))?null:new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","final","com.wsscode.pathom3.connect.operation/final",-910956993).cljs$core$IFn$_invoke$arity$1(G__158043__$1));
if((G__158043__$2 == null)){
return null;
} else {
return G__158043__$2 === true;
}
});

//# sourceMappingURL=com.wsscode.pathom3.connect.operation.js.map
