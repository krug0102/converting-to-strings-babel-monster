goog.provide('schema.utils');
/**
 * Like assoc but only assocs when value is truthy.  Copied from plumbing.core so that
 * schema need not depend on plumbing.
 */
schema.utils.assoc_when = (function schema$utils$assoc_when(var_args){
var args__4835__auto__ = [];
var len__4829__auto___152171 = arguments.length;
var i__4830__auto___152172 = (0);
while(true){
if((i__4830__auto___152172 < len__4829__auto___152171)){
args__4835__auto__.push((arguments[i__4830__auto___152172]));

var G__152173 = (i__4830__auto___152172 + (1));
i__4830__auto___152172 = G__152173;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return schema.utils.assoc_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(schema.utils.assoc_when.cljs$core$IFn$_invoke$arity$variadic = (function (m,kvs){
if(cljs.core.even_QMARK_(cljs.core.count(kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

return cljs.core.into.cljs$core$IFn$_invoke$arity$2((function (){var or__4223__auto__ = m;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__4622__auto__ = (function schema$utils$iter__152094(s__152095){
return (new cljs.core.LazySeq(null,(function (){
var s__152095__$1 = s__152095;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__152095__$1);
if(temp__5753__auto__){
var s__152095__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__152095__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__152095__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__152097 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__152096 = (0);
while(true){
if((i__152096 < size__4621__auto__)){
var vec__152101 = cljs.core._nth(c__4620__auto__,i__152096);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__152101,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__152101,(1),null);
if(cljs.core.truth_(v)){
cljs.core.chunk_append(b__152097,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__152174 = (i__152096 + (1));
i__152096 = G__152174;
continue;
} else {
var G__152176 = (i__152096 + (1));
i__152096 = G__152176;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__152097),schema$utils$iter__152094(cljs.core.chunk_rest(s__152095__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__152097),null);
}
} else {
var vec__152104 = cljs.core.first(s__152095__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__152104,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__152104,(1),null);
if(cljs.core.truth_(v)){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),schema$utils$iter__152094(cljs.core.rest(s__152095__$2)));
} else {
var G__152177 = cljs.core.rest(s__152095__$2);
s__152095__$1 = G__152177;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
})());
}));

(schema.utils.assoc_when.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(schema.utils.assoc_when.cljs$lang$applyTo = (function (seq152089){
var G__152090 = cljs.core.first(seq152089);
var seq152089__$1 = cljs.core.next(seq152089);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__152090,seq152089__$1);
}));

schema.utils.type_of = (function schema$utils$type_of(x){
return typeof x;
});
/**
 * What class can we associate the fn schema with? In Clojure use the class of the fn; in
 * cljs just use the fn itself.
 */
schema.utils.fn_schema_bearer = (function schema$utils$fn_schema_bearer(f){
return f;
});
schema.utils.format_STAR_ = (function schema$utils$format_STAR_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___152178 = arguments.length;
var i__4830__auto___152179 = (0);
while(true){
if((i__4830__auto___152179 < len__4829__auto___152178)){
args__4835__auto__.push((arguments[i__4830__auto___152179]));

var G__152180 = (i__4830__auto___152179 + (1));
i__4830__auto___152179 = G__152180;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.string.format,fmt,args);
}));

(schema.utils.format_STAR_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(schema.utils.format_STAR_.cljs$lang$applyTo = (function (seq152110){
var G__152111 = cljs.core.first(seq152110);
var seq152110__$1 = cljs.core.next(seq152110);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__152111,seq152110__$1);
}));

schema.utils.max_value_length = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((19));
/**
 * Provide a descriptive short name for a value.
 */
schema.utils.value_name = (function schema$utils$value_name(value){
var t = schema.utils.type_of(value);
if((((cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)).length) <= cljs.core.deref(schema.utils.max_value_length))){
return value;
} else {
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["a-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(t)].join(''));
}
});
/**
 * TODO: eventually use built in demunge in latest cljs.
 */
schema.utils.unmunge = (function schema$utils$unmunge(s){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__152120){
var vec__152121 = p__152120;
var to = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__152121,(0),null);
var from = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__152121,(1),null);
return clojure.string.replace(s__$1,from,cljs.core.str.cljs$core$IFn$_invoke$arity$1(to));
}),s,cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__152119_SHARP_){
return (- cljs.core.count(cljs.core.second(p1__152119_SHARP_)));
}),cljs.core.PersistentHashMap.fromArrays(["@","!","\"","#","%","&","'","*","+","-","/",":","[","{","<","\\","|","=","]","}",">","^","~","?"],["_CIRCA_","_BANG_","_DOUBLEQUOTE_","_SHARP_","_PERCENT_","_AMPERSAND_","_SINGLEQUOTE_","_STAR_","_PLUS_","_","_SLASH_","_COLON_","_LBRACK_","_LBRACE_","_LT_","_BSLASH_","_BAR_","_EQ_","_RBRACK_","_RBRACE_","_GT_","_CARET_","_TILDE_","_QMARK_"])));
});
/**
 * A meaningful name for a function that looks like its symbol, if applicable.
 */
schema.utils.fn_name = (function schema$utils$fn_name(f){
var vec__152126 = cljs.core.re_matches(/#object\[(.*)\]/,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f], 0)));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__152126,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__152126,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Function",s)){
return "function";
} else {
return cljs.core.re_find(/[^\/]+(?:$|(?=\/+$))/,cljs.core.demunge(s));
}
});
schema.utils.record_QMARK_ = (function schema$utils$record_QMARK_(x){
if((!((x == null)))){
if((((x.cljs$lang$protocol_mask$partition0$ & (67108864))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IRecord$)))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IRecord,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IRecord,x);
}
});

/**
* @constructor
 * @implements {cljs.core.IPrintWithWriter}
*/
schema.utils.ValidationError = (function (schema,value,expectation_delay,fail_explanation){
this.schema = schema;
this.value = value;
this.expectation_delay = expectation_delay;
this.fail_explanation = fail_explanation;
this.cljs$lang$protocol_mask$partition0$ = 2147483648;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(schema.utils.ValidationError.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
return cljs.core._pr_writer((schema.utils.validation_error_explain.cljs$core$IFn$_invoke$arity$1 ? schema.utils.validation_error_explain.cljs$core$IFn$_invoke$arity$1(this$__$1) : schema.utils.validation_error_explain.call(null,this$__$1)),writer,opts);
}));

(schema.utils.ValidationError.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"schema","schema",58529736,null),new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Symbol(null,"expectation-delay","expectation-delay",-1886214669,null),new cljs.core.Symbol(null,"fail-explanation","fail-explanation",530278923,null)], null);
}));

(schema.utils.ValidationError.cljs$lang$type = true);

(schema.utils.ValidationError.cljs$lang$ctorStr = "schema.utils/ValidationError");

(schema.utils.ValidationError.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"schema.utils/ValidationError");
}));

/**
 * Positional factory function for schema.utils/ValidationError.
 */
schema.utils.__GT_ValidationError = (function schema$utils$__GT_ValidationError(schema__$1,value,expectation_delay,fail_explanation){
return (new schema.utils.ValidationError(schema__$1,value,expectation_delay,fail_explanation));
});

schema.utils.validation_error_explain = (function schema$utils$validation_error_explain(err){
return (new cljs.core.List(null,(function (){var or__4223__auto__ = err.fail_explanation;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return new cljs.core.Symbol(null,"not","not",1044554643,null);
}
})(),(new cljs.core.List(null,cljs.core.deref(err.expectation_delay),null,(1),null)),(2),null));
});
/**
 * for cljs sake (easier than normalizing imports in macros.clj)
 */
schema.utils.make_ValidationError = (function schema$utils$make_ValidationError(schema__$1,value,expectation_delay,fail_explanation){
return (new schema.utils.ValidationError(schema__$1,value,expectation_delay,fail_explanation));
});

/**
* @constructor
 * @implements {cljs.core.IPrintWithWriter}
*/
schema.utils.NamedError = (function (name,error){
this.name = name;
this.error = error;
this.cljs$lang$protocol_mask$partition0$ = 2147483648;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(schema.utils.NamedError.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
return cljs.core._pr_writer((schema.utils.named_error_explain.cljs$core$IFn$_invoke$arity$1 ? schema.utils.named_error_explain.cljs$core$IFn$_invoke$arity$1(this$__$1) : schema.utils.named_error_explain.call(null,this$__$1)),writer,opts);
}));

(schema.utils.NamedError.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"error","error",661562495,null)], null);
}));

(schema.utils.NamedError.cljs$lang$type = true);

(schema.utils.NamedError.cljs$lang$ctorStr = "schema.utils/NamedError");

(schema.utils.NamedError.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"schema.utils/NamedError");
}));

/**
 * Positional factory function for schema.utils/NamedError.
 */
schema.utils.__GT_NamedError = (function schema$utils$__GT_NamedError(name,error){
return (new schema.utils.NamedError(name,error));
});

schema.utils.named_error_explain = (function schema$utils$named_error_explain(err){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"named","named",1218138048,null),(new cljs.core.List(null,err.error,(new cljs.core.List(null,err.name,null,(1),null)),(2),null)),(3),null));
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
schema.utils.ErrorContainer = (function (error,__meta,__extmap,__hash){
this.error = error;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(schema.utils.ErrorContainer.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(schema.utils.ErrorContainer.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k152142,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__152149 = k152142;
var G__152149__$1 = (((G__152149 instanceof cljs.core.Keyword))?G__152149.fqn:null);
switch (G__152149__$1) {
case "error":
return self__.error;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k152142,else__4475__auto__);

}
}));

(schema.utils.ErrorContainer.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__152152){
var vec__152153 = p__152152;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__152153,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__152153,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(schema.utils.ErrorContainer.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#schema.utils.ErrorContainer{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"error","error",-978969032),self__.error],null))], null),self__.__extmap));
}));

(schema.utils.ErrorContainer.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__152141){
var self__ = this;
var G__152141__$1 = this;
return (new cljs.core.RecordIter((0),G__152141__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(schema.utils.ErrorContainer.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(schema.utils.ErrorContainer.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new schema.utils.ErrorContainer(self__.error,self__.__meta,self__.__extmap,self__.__hash));
}));

(schema.utils.ErrorContainer.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(schema.utils.ErrorContainer.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (coll__4469__auto__){
return (1172277899 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
})(this__4468__auto____$1);
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(schema.utils.ErrorContainer.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this152143,other152144){
var self__ = this;
var this152143__$1 = this;
return (((!((other152144 == null)))) && ((((this152143__$1.constructor === other152144.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this152143__$1.error,other152144.error)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this152143__$1.__extmap,other152144.__extmap)))))));
}));

(schema.utils.ErrorContainer.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new schema.utils.ErrorContainer(self__.error,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(schema.utils.ErrorContainer.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k152142){
var self__ = this;
var this__4479__auto____$1 = this;
var G__152158 = k152142;
var G__152158__$1 = (((G__152158 instanceof cljs.core.Keyword))?G__152158.fqn:null);
switch (G__152158__$1) {
case "error":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k152142);

}
}));

(schema.utils.ErrorContainer.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__152141){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__152159 = cljs.core.keyword_identical_QMARK_;
var expr__152160 = k__4481__auto__;
if(cljs.core.truth_((pred__152159.cljs$core$IFn$_invoke$arity$2 ? pred__152159.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"error","error",-978969032),expr__152160) : pred__152159.call(null,new cljs.core.Keyword(null,"error","error",-978969032),expr__152160)))){
return (new schema.utils.ErrorContainer(G__152141,self__.__meta,self__.__extmap,null));
} else {
return (new schema.utils.ErrorContainer(self__.error,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__152141),null));
}
}));

(schema.utils.ErrorContainer.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"error","error",-978969032),self__.error,null))], null),self__.__extmap));
}));

(schema.utils.ErrorContainer.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__152141){
var self__ = this;
var this__4471__auto____$1 = this;
return (new schema.utils.ErrorContainer(self__.error,G__152141,self__.__extmap,self__.__hash));
}));

(schema.utils.ErrorContainer.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4478__auto__,(0)),cljs.core._nth(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(schema.utils.ErrorContainer.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"error","error",661562495,null)], null);
}));

(schema.utils.ErrorContainer.cljs$lang$type = true);

(schema.utils.ErrorContainer.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"schema.utils/ErrorContainer",null,(1),null));
}));

(schema.utils.ErrorContainer.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"schema.utils/ErrorContainer");
}));

/**
 * Positional factory function for schema.utils/ErrorContainer.
 */
schema.utils.__GT_ErrorContainer = (function schema$utils$__GT_ErrorContainer(error){
return (new schema.utils.ErrorContainer(error,null,null,null));
});

/**
 * Factory function for schema.utils/ErrorContainer, taking a map of keywords to field values.
 */
schema.utils.map__GT_ErrorContainer = (function schema$utils$map__GT_ErrorContainer(G__152146){
var extmap__4512__auto__ = (function (){var G__152163 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__152146,new cljs.core.Keyword(null,"error","error",-978969032));
if(cljs.core.record_QMARK_(G__152146)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__152163);
} else {
return G__152163;
}
})();
return (new schema.utils.ErrorContainer(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(G__152146),null,cljs.core.not_empty(extmap__4512__auto__),null));
});

/**
 * Distinguish a value (must be non-nil) as an error.
 */
schema.utils.error = (function schema$utils$error(x){
if(cljs.core.truth_(x)){
} else {
throw (new Error("Assert failed: x"));
}

return schema.utils.__GT_ErrorContainer(x);
});
schema.utils.error_QMARK_ = (function schema$utils$error_QMARK_(x){
return (x instanceof schema.utils.ErrorContainer);
});
schema.utils.error_val = (function schema$utils$error_val(x){
if(schema.utils.error_QMARK_(x)){
return x.error;
} else {
return null;
}
});
schema.utils.declare_class_schema_BANG_ = (function schema$utils$declare_class_schema_BANG_(klass,schema__$1){
return goog.object.set(klass,"schema$utils$schema",schema__$1);
});

schema.utils.class_schema = (function schema$utils$class_schema(klass){
return goog.object.get(klass,"schema$utils$schema");
});
/**
 * Turn on run-time function validation for functions compiled when
 * s/compile-fn-validation was true -- has no effect for functions compiled
 * when it is false.
 */
schema.utils.use_fn_validation = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);

//# sourceMappingURL=schema.utils.js.map
