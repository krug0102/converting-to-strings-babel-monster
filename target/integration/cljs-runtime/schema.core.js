goog.provide('schema.core');

/**
 * @interface
 */
schema.core.Schema = function(){};

var schema$core$Schema$spec$dyn_50650 = (function (this$){
var x__4521__auto__ = (((this$ == null))?null:this$);
var m__4522__auto__ = (schema.core.spec[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4522__auto__.call(null,this$));
} else {
var m__4519__auto__ = (schema.core.spec["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4519__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Schema.spec",this$);
}
}
});
/**
 * A spec is a record of some type that expresses the structure of this schema
 *   in a declarative and/or imperative way.  See schema.spec.* for examples.
 */
schema.core.spec = (function schema$core$spec(this$){
if((((!((this$ == null)))) && ((!((this$.schema$core$Schema$spec$arity$1 == null)))))){
return this$.schema$core$Schema$spec$arity$1(this$);
} else {
return schema$core$Schema$spec$dyn_50650(this$);
}
});

var schema$core$Schema$explain$dyn_50651 = (function (this$){
var x__4521__auto__ = (((this$ == null))?null:this$);
var m__4522__auto__ = (schema.core.explain[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4522__auto__.call(null,this$));
} else {
var m__4519__auto__ = (schema.core.explain["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4519__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Schema.explain",this$);
}
}
});
/**
 * Expand this schema to a human-readable format suitable for pprinting,
 *   also expanding class schematas at the leaves.  Example:
 * 
 *   user> (s/explain {:a s/Keyword :b [s/Int]} )
 *   {:a Keyword, :b [Int]}
 */
schema.core.explain = (function schema$core$explain(this$){
if((((!((this$ == null)))) && ((!((this$.schema$core$Schema$explain$arity$1 == null)))))){
return this$.schema$core$Schema$explain$arity$1(this$);
} else {
return schema$core$Schema$explain$dyn_50651(this$);
}
});

/**
 * Compile an efficient checker for schema, which returns nil for valid values and
 * error descriptions otherwise.
 */
schema.core.checker = (function schema$core$checker(schema__$1){
return cljs.core.comp.cljs$core$IFn$_invoke$arity$2(schema.utils.error_val,schema.spec.core.run_checker((function (s,params){
return schema.spec.core.checker(schema.core.spec(s),params);
}),false,schema__$1));
});
/**
 * Return nil if x matches schema; otherwise, returns a value that looks like the
 * 'bad' parts of x with ValidationErrors at the leaves describing the failures.
 * 
 * If you will be checking many datums, it is much more efficient to create
 * a 'checker' once and call it on each of them.
 */
schema.core.check = (function schema$core$check(schema__$1,x){
return schema.core.checker(schema__$1)(x);
});
/**
 * Compile an efficient validator for schema.
 */
schema.core.validator = (function schema$core$validator(schema__$1){
var c = schema.core.checker(schema__$1);
return (function (value){
var temp__5753__auto___50653 = c(value);
if(cljs.core.truth_(temp__5753__auto___50653)){
var error_50654 = temp__5753__auto___50653;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Value does not match schema: %s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([error_50654], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),schema__$1,new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"error","error",-978969032),error_50654], null));
} else {
}

return value;
});
});
/**
 * Throw an exception if value does not satisfy schema; otherwise, return value.
 * If you will be validating many datums, it is much more efficient to create
 * a 'validator' once and call it on each of them.
 */
schema.core.validate = (function schema$core$validate(schema__$1,value){
return schema.core.validator(schema__$1)(value);
});
schema.core.instance_precondition = (function schema$core$instance_precondition(s,klass){
return schema.spec.core.precondition(s,(function (p1__49609_SHARP_){
var and__4221__auto__ = (!((p1__49609_SHARP_ == null)));
if(and__4221__auto__){
var or__4223__auto__ = (klass === p1__49609_SHARP_.constructor);
if(or__4223__auto__){
return or__4223__auto__;
} else {
return p1__49609_SHARP_ instanceof klass;
}
} else {
return and__4221__auto__;
}
}),(function (p1__49610_SHARP_){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"instance?","instance?",1075939923,null),(new cljs.core.List(null,klass,(new cljs.core.List(null,p1__49610_SHARP_,null,(1),null)),(2),null)),(3),null));
}));
});
goog.object.set(schema.core.Schema,"function",true);

goog.object.set(schema.core.spec,"function",(function (this$){
var pre = schema.core.instance_precondition(this$,this$);
var temp__5751__auto__ = schema.utils.class_schema(this$);
if(cljs.core.truth_(temp__5751__auto__)){
var class_schema = temp__5751__auto__;
return schema.spec.variant.variant_spec.cljs$core$IFn$_invoke$arity$2(pre,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),class_schema], null)], null));
} else {
return schema.spec.leaf.leaf_spec(pre);
}
}));

goog.object.set(schema.core.explain,"function",(function (this$){
var temp__5751__auto__ = schema.utils.class_schema(this$);
if(cljs.core.truth_(temp__5751__auto__)){
var more_schema = temp__5751__auto__;
return schema.core.explain(more_schema);
} else {
var pred__49615 = cljs.core._EQ_;
var expr__49616 = this$;
if(cljs.core.truth_((pred__49615.cljs$core$IFn$_invoke$arity$2 ? pred__49615.cljs$core$IFn$_invoke$arity$2(null,expr__49616) : pred__49615.call(null,null,expr__49616)))){
return new cljs.core.Symbol(null,"Str","Str",907970895,null);
} else {
if(cljs.core.truth_((pred__49615.cljs$core$IFn$_invoke$arity$2 ? pred__49615.cljs$core$IFn$_invoke$arity$2(Boolean,expr__49616) : pred__49615.call(null,Boolean,expr__49616)))){
return new cljs.core.Symbol(null,"Bool","Bool",195910502,null);
} else {
if(cljs.core.truth_((pred__49615.cljs$core$IFn$_invoke$arity$2 ? pred__49615.cljs$core$IFn$_invoke$arity$2(Number,expr__49616) : pred__49615.call(null,Number,expr__49616)))){
return new cljs.core.Symbol(null,"Num","Num",-2044934708,null);
} else {
if(cljs.core.truth_((pred__49615.cljs$core$IFn$_invoke$arity$2 ? pred__49615.cljs$core$IFn$_invoke$arity$2(null,expr__49616) : pred__49615.call(null,null,expr__49616)))){
return new cljs.core.Symbol(null,"Regex","Regex",205914413,null);
} else {
if(cljs.core.truth_((pred__49615.cljs$core$IFn$_invoke$arity$2 ? pred__49615.cljs$core$IFn$_invoke$arity$2(Date,expr__49616) : pred__49615.call(null,Date,expr__49616)))){
return new cljs.core.Symbol(null,"Inst","Inst",292408622,null);
} else {
if(cljs.core.truth_((pred__49615.cljs$core$IFn$_invoke$arity$2 ? pred__49615.cljs$core$IFn$_invoke$arity$2(cljs.core.UUID,expr__49616) : pred__49615.call(null,cljs.core.UUID,expr__49616)))){
return new cljs.core.Symbol(null,"Uuid","Uuid",-1866694318,null);
} else {
return this$;
}
}
}
}
}
}
}
}));

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
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
schema.core.AnythingSchema = (function (_,__meta,__extmap,__hash){
this._ = _;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(schema.core.AnythingSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(schema.core.AnythingSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k49620,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__49624 = k49620;
var G__49624__$1 = (((G__49624 instanceof cljs.core.Keyword))?G__49624.fqn:null);
switch (G__49624__$1) {
case "_":
return self__._;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k49620,else__4475__auto__);

}
}));

(schema.core.AnythingSchema.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__49625){
var vec__49626 = p__49625;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49626,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49626,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(schema.core.AnythingSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#schema.core.AnythingSchema{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"_","_",1453416199),self__._],null))], null),self__.__extmap));
}));

(schema.core.AnythingSchema.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__49619){
var self__ = this;
var G__49619__$1 = this;
return (new cljs.core.RecordIter((0),G__49619__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_","_",1453416199)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(schema.core.AnythingSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(schema.core.AnythingSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new schema.core.AnythingSchema(self__._,self__.__meta,self__.__extmap,self__.__hash));
}));

(schema.core.AnythingSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(schema.core.AnythingSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (coll__4469__auto__){
return (-1432036169 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
})(this__4468__auto____$1);
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(schema.core.AnythingSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this49621,other49622){
var self__ = this;
var this49621__$1 = this;
return (((!((other49622 == null)))) && ((((this49621__$1.constructor === other49622.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49621__$1._,other49622._)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49621__$1.__extmap,other49622.__extmap)))))));
}));

(schema.core.AnythingSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"_","_",1453416199),null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new schema.core.AnythingSchema(self__._,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(schema.core.AnythingSchema.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k49620){
var self__ = this;
var this__4479__auto____$1 = this;
var G__49630 = k49620;
var G__49630__$1 = (((G__49630 instanceof cljs.core.Keyword))?G__49630.fqn:null);
switch (G__49630__$1) {
case "_":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k49620);

}
}));

(schema.core.AnythingSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__49619){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__49632 = cljs.core.keyword_identical_QMARK_;
var expr__49633 = k__4481__auto__;
if(cljs.core.truth_((pred__49632.cljs$core$IFn$_invoke$arity$2 ? pred__49632.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"_","_",1453416199),expr__49633) : pred__49632.call(null,new cljs.core.Keyword(null,"_","_",1453416199),expr__49633)))){
return (new schema.core.AnythingSchema(G__49619,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.AnythingSchema(self__._,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__49619),null));
}
}));

(schema.core.AnythingSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"_","_",1453416199),self__._,null))], null),self__.__extmap));
}));

(schema.core.AnythingSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__49619){
var self__ = this;
var this__4471__auto____$1 = this;
return (new schema.core.AnythingSchema(self__._,G__49619,self__.__extmap,self__.__hash));
}));

(schema.core.AnythingSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4478__auto__,(0)),cljs.core._nth(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(schema.core.AnythingSchema.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.AnythingSchema.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.leaf.leaf_spec(schema.spec.core._PLUS_no_precondition_PLUS_);
}));

(schema.core.AnythingSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Symbol(null,"Any","Any",1277492269,null);
}));

(schema.core.AnythingSchema.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null)], null);
}));

(schema.core.AnythingSchema.cljs$lang$type = true);

(schema.core.AnythingSchema.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"schema.core/AnythingSchema",null,(1),null));
}));

(schema.core.AnythingSchema.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"schema.core/AnythingSchema");
}));

/**
 * Positional factory function for schema.core/AnythingSchema.
 */
schema.core.__GT_AnythingSchema = (function schema$core$__GT_AnythingSchema(_){
return (new schema.core.AnythingSchema(_,null,null,null));
});

/**
 * Factory function for schema.core/AnythingSchema, taking a map of keywords to field values.
 */
schema.core.map__GT_AnythingSchema = (function schema$core$map__GT_AnythingSchema(G__49623){
var extmap__4512__auto__ = (function (){var G__49639 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__49623,new cljs.core.Keyword(null,"_","_",1453416199));
if(cljs.core.record_QMARK_(G__49623)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__49639);
} else {
return G__49639;
}
})();
return (new schema.core.AnythingSchema(new cljs.core.Keyword(null,"_","_",1453416199).cljs$core$IFn$_invoke$arity$1(G__49623),null,cljs.core.not_empty(extmap__4512__auto__),null));
});

/**
 * Any value, including nil.
 */
schema.core.Any = (new schema.core.AnythingSchema(null,null,null,null));

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
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
schema.core.EqSchema = (function (v,__meta,__extmap,__hash){
this.v = v;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(schema.core.EqSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(schema.core.EqSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k49644,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__49652 = k49644;
var G__49652__$1 = (((G__49652 instanceof cljs.core.Keyword))?G__49652.fqn:null);
switch (G__49652__$1) {
case "v":
return self__.v;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k49644,else__4475__auto__);

}
}));

(schema.core.EqSchema.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__49653){
var vec__49654 = p__49653;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49654,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49654,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(schema.core.EqSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#schema.core.EqSchema{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"v","v",21465059),self__.v],null))], null),self__.__extmap));
}));

(schema.core.EqSchema.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__49643){
var self__ = this;
var G__49643__$1 = this;
return (new cljs.core.RecordIter((0),G__49643__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"v","v",21465059)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(schema.core.EqSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(schema.core.EqSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new schema.core.EqSchema(self__.v,self__.__meta,self__.__extmap,self__.__hash));
}));

(schema.core.EqSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(schema.core.EqSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (coll__4469__auto__){
return (-907989292 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
})(this__4468__auto____$1);
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(schema.core.EqSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this49645,other49646){
var self__ = this;
var this49645__$1 = this;
return (((!((other49646 == null)))) && ((((this49645__$1.constructor === other49646.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49645__$1.v,other49646.v)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49645__$1.__extmap,other49646.__extmap)))))));
}));

(schema.core.EqSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"v","v",21465059),null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new schema.core.EqSchema(self__.v,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(schema.core.EqSchema.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k49644){
var self__ = this;
var this__4479__auto____$1 = this;
var G__49659 = k49644;
var G__49659__$1 = (((G__49659 instanceof cljs.core.Keyword))?G__49659.fqn:null);
switch (G__49659__$1) {
case "v":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k49644);

}
}));

(schema.core.EqSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__49643){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__49660 = cljs.core.keyword_identical_QMARK_;
var expr__49661 = k__4481__auto__;
if(cljs.core.truth_((pred__49660.cljs$core$IFn$_invoke$arity$2 ? pred__49660.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"v","v",21465059),expr__49661) : pred__49660.call(null,new cljs.core.Keyword(null,"v","v",21465059),expr__49661)))){
return (new schema.core.EqSchema(G__49643,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.EqSchema(self__.v,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__49643),null));
}
}));

(schema.core.EqSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"v","v",21465059),self__.v,null))], null),self__.__extmap));
}));

(schema.core.EqSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__49643){
var self__ = this;
var this__4471__auto____$1 = this;
return (new schema.core.EqSchema(self__.v,G__49643,self__.__extmap,self__.__hash));
}));

(schema.core.EqSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4478__auto__,(0)),cljs.core._nth(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(schema.core.EqSchema.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.EqSchema.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.leaf.leaf_spec(schema.spec.core.precondition(this$__$1,(function (p1__49641_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.v,p1__49641_SHARP_);
}),(function (p1__49642_SHARP_){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),(new cljs.core.List(null,self__.v,(new cljs.core.List(null,p1__49642_SHARP_,null,(1),null)),(2),null)),(3),null));
})));
}));

(schema.core.EqSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (new cljs.core.List(null,new cljs.core.Symbol(null,"eq","eq",1021992460,null),(new cljs.core.List(null,self__.v,null,(1),null)),(2),null));
}));

(schema.core.EqSchema.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"v","v",1661996586,null)], null);
}));

(schema.core.EqSchema.cljs$lang$type = true);

(schema.core.EqSchema.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"schema.core/EqSchema",null,(1),null));
}));

(schema.core.EqSchema.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"schema.core/EqSchema");
}));

/**
 * Positional factory function for schema.core/EqSchema.
 */
schema.core.__GT_EqSchema = (function schema$core$__GT_EqSchema(v){
return (new schema.core.EqSchema(v,null,null,null));
});

/**
 * Factory function for schema.core/EqSchema, taking a map of keywords to field values.
 */
schema.core.map__GT_EqSchema = (function schema$core$map__GT_EqSchema(G__49647){
var extmap__4512__auto__ = (function (){var G__49663 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__49647,new cljs.core.Keyword(null,"v","v",21465059));
if(cljs.core.record_QMARK_(G__49647)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__49663);
} else {
return G__49663;
}
})();
return (new schema.core.EqSchema(new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(G__49647),null,cljs.core.not_empty(extmap__4512__auto__),null));
});

/**
 * A value that must be (= v).
 */
schema.core.eq = (function schema$core$eq(v){
return (new schema.core.EqSchema(v,null,null,null));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
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
schema.core.Isa = (function (h,parent,__meta,__extmap,__hash){
this.h = h;
this.parent = parent;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(schema.core.Isa.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(schema.core.Isa.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k49670,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__49679 = k49670;
var G__49679__$1 = (((G__49679 instanceof cljs.core.Keyword))?G__49679.fqn:null);
switch (G__49679__$1) {
case "h":
return self__.h;

break;
case "parent":
return self__.parent;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k49670,else__4475__auto__);

}
}));

(schema.core.Isa.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__49680){
var vec__49681 = p__49680;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49681,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49681,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(schema.core.Isa.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#schema.core.Isa{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"parent","parent",-878878779),self__.parent],null))], null),self__.__extmap));
}));

(schema.core.Isa.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__49669){
var self__ = this;
var G__49669__$1 = this;
return (new cljs.core.RecordIter((0),G__49669__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h","h",1109658740),new cljs.core.Keyword(null,"parent","parent",-878878779)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(schema.core.Isa.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(schema.core.Isa.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new schema.core.Isa(self__.h,self__.parent,self__.__meta,self__.__extmap,self__.__hash));
}));

(schema.core.Isa.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(schema.core.Isa.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (coll__4469__auto__){
return (1593744337 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
})(this__4468__auto____$1);
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(schema.core.Isa.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this49671,other49672){
var self__ = this;
var this49671__$1 = this;
return (((!((other49672 == null)))) && ((((this49671__$1.constructor === other49672.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49671__$1.h,other49672.h)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49671__$1.parent,other49672.parent)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49671__$1.__extmap,other49672.__extmap)))))))));
}));

(schema.core.Isa.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"parent","parent",-878878779),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new schema.core.Isa(self__.h,self__.parent,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(schema.core.Isa.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k49670){
var self__ = this;
var this__4479__auto____$1 = this;
var G__49690 = k49670;
var G__49690__$1 = (((G__49690 instanceof cljs.core.Keyword))?G__49690.fqn:null);
switch (G__49690__$1) {
case "h":
case "parent":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k49670);

}
}));

(schema.core.Isa.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__49669){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__49691 = cljs.core.keyword_identical_QMARK_;
var expr__49692 = k__4481__auto__;
if(cljs.core.truth_((pred__49691.cljs$core$IFn$_invoke$arity$2 ? pred__49691.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__49692) : pred__49691.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__49692)))){
return (new schema.core.Isa(G__49669,self__.parent,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__49691.cljs$core$IFn$_invoke$arity$2 ? pred__49691.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parent","parent",-878878779),expr__49692) : pred__49691.call(null,new cljs.core.Keyword(null,"parent","parent",-878878779),expr__49692)))){
return (new schema.core.Isa(self__.h,G__49669,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Isa(self__.h,self__.parent,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__49669),null));
}
}
}));

(schema.core.Isa.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"parent","parent",-878878779),self__.parent,null))], null),self__.__extmap));
}));

(schema.core.Isa.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__49669){
var self__ = this;
var this__4471__auto____$1 = this;
return (new schema.core.Isa(self__.h,self__.parent,G__49669,self__.__extmap,self__.__hash));
}));

(schema.core.Isa.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4478__auto__,(0)),cljs.core._nth(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(schema.core.Isa.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.Isa.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.leaf.leaf_spec(schema.spec.core.precondition(this$__$1,(function (p1__49664_SHARP_){
if(cljs.core.truth_(self__.h)){
return cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$3(self__.h,p1__49664_SHARP_,self__.parent);
} else {
return cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(p1__49664_SHARP_,self__.parent);
}
}),(function (p1__49665_SHARP_){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"isa?","isa?",1358492324,null),(new cljs.core.List(null,p1__49665_SHARP_,(new cljs.core.List(null,self__.parent,null,(1),null)),(2),null)),(3),null));
})));
}));

(schema.core.Isa.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (new cljs.core.List(null,new cljs.core.Symbol(null,"isa?","isa?",1358492324,null),(new cljs.core.List(null,self__.parent,null,(1),null)),(2),null));
}));

(schema.core.Isa.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"h","h",-1544777029,null),new cljs.core.Symbol(null,"parent","parent",761652748,null)], null);
}));

(schema.core.Isa.cljs$lang$type = true);

(schema.core.Isa.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"schema.core/Isa",null,(1),null));
}));

(schema.core.Isa.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"schema.core/Isa");
}));

/**
 * Positional factory function for schema.core/Isa.
 */
schema.core.__GT_Isa = (function schema$core$__GT_Isa(h,parent){
return (new schema.core.Isa(h,parent,null,null,null));
});

/**
 * Factory function for schema.core/Isa, taking a map of keywords to field values.
 */
schema.core.map__GT_Isa = (function schema$core$map__GT_Isa(G__49673){
var extmap__4512__auto__ = (function (){var G__49698 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__49673,new cljs.core.Keyword(null,"h","h",1109658740),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"parent","parent",-878878779)], 0));
if(cljs.core.record_QMARK_(G__49673)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__49698);
} else {
return G__49698;
}
})();
return (new schema.core.Isa(new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__49673),new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(G__49673),null,cljs.core.not_empty(extmap__4512__auto__),null));
});

/**
 * A value that must be a child of parent.
 */
schema.core.isa = (function schema$core$isa(var_args){
var G__49700 = arguments.length;
switch (G__49700) {
case 1:
return schema.core.isa.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return schema.core.isa.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(schema.core.isa.cljs$core$IFn$_invoke$arity$1 = (function (parent){
return (new schema.core.Isa(null,parent,null,null,null));
}));

(schema.core.isa.cljs$core$IFn$_invoke$arity$2 = (function (h,parent){
return (new schema.core.Isa(h,parent,null,null,null));
}));

(schema.core.isa.cljs$lang$maxFixedArity = 2);


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
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
schema.core.EnumSchema = (function (vs,__meta,__extmap,__hash){
this.vs = vs;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(schema.core.EnumSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(schema.core.EnumSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k49704,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__49709 = k49704;
var G__49709__$1 = (((G__49709 instanceof cljs.core.Keyword))?G__49709.fqn:null);
switch (G__49709__$1) {
case "vs":
return self__.vs;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k49704,else__4475__auto__);

}
}));

(schema.core.EnumSchema.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__49711){
var vec__49712 = p__49711;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49712,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49712,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(schema.core.EnumSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#schema.core.EnumSchema{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vs","vs",-2022097090),self__.vs],null))], null),self__.__extmap));
}));

(schema.core.EnumSchema.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__49703){
var self__ = this;
var G__49703__$1 = this;
return (new cljs.core.RecordIter((0),G__49703__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vs","vs",-2022097090)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(schema.core.EnumSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(schema.core.EnumSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new schema.core.EnumSchema(self__.vs,self__.__meta,self__.__extmap,self__.__hash));
}));

(schema.core.EnumSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(schema.core.EnumSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (coll__4469__auto__){
return (2002701468 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
})(this__4468__auto____$1);
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(schema.core.EnumSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this49705,other49706){
var self__ = this;
var this49705__$1 = this;
return (((!((other49706 == null)))) && ((((this49705__$1.constructor === other49706.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49705__$1.vs,other49706.vs)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49705__$1.__extmap,other49706.__extmap)))))));
}));

(schema.core.EnumSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vs","vs",-2022097090),null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new schema.core.EnumSchema(self__.vs,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(schema.core.EnumSchema.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k49704){
var self__ = this;
var this__4479__auto____$1 = this;
var G__49718 = k49704;
var G__49718__$1 = (((G__49718 instanceof cljs.core.Keyword))?G__49718.fqn:null);
switch (G__49718__$1) {
case "vs":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k49704);

}
}));

(schema.core.EnumSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__49703){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__49720 = cljs.core.keyword_identical_QMARK_;
var expr__49721 = k__4481__auto__;
if(cljs.core.truth_((pred__49720.cljs$core$IFn$_invoke$arity$2 ? pred__49720.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"vs","vs",-2022097090),expr__49721) : pred__49720.call(null,new cljs.core.Keyword(null,"vs","vs",-2022097090),expr__49721)))){
return (new schema.core.EnumSchema(G__49703,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.EnumSchema(self__.vs,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__49703),null));
}
}));

(schema.core.EnumSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"vs","vs",-2022097090),self__.vs,null))], null),self__.__extmap));
}));

(schema.core.EnumSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__49703){
var self__ = this;
var this__4471__auto____$1 = this;
return (new schema.core.EnumSchema(self__.vs,G__49703,self__.__extmap,self__.__hash));
}));

(schema.core.EnumSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4478__auto__,(0)),cljs.core._nth(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(schema.core.EnumSchema.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.EnumSchema.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.leaf.leaf_spec(schema.spec.core.precondition(this$__$1,(function (p1__49701_SHARP_){
return cljs.core.contains_QMARK_(self__.vs,p1__49701_SHARP_);
}),(function (p1__49702_SHARP_){
return (new cljs.core.List(null,self__.vs,(new cljs.core.List(null,p1__49702_SHARP_,null,(1),null)),(2),null));
})));
}));

(schema.core.EnumSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.cons(new cljs.core.Symbol(null,"enum","enum",-975417337,null),self__.vs);
}));

(schema.core.EnumSchema.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"vs","vs",-381565563,null)], null);
}));

(schema.core.EnumSchema.cljs$lang$type = true);

(schema.core.EnumSchema.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"schema.core/EnumSchema",null,(1),null));
}));

(schema.core.EnumSchema.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"schema.core/EnumSchema");
}));

/**
 * Positional factory function for schema.core/EnumSchema.
 */
schema.core.__GT_EnumSchema = (function schema$core$__GT_EnumSchema(vs){
return (new schema.core.EnumSchema(vs,null,null,null));
});

/**
 * Factory function for schema.core/EnumSchema, taking a map of keywords to field values.
 */
schema.core.map__GT_EnumSchema = (function schema$core$map__GT_EnumSchema(G__49707){
var extmap__4512__auto__ = (function (){var G__49725 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__49707,new cljs.core.Keyword(null,"vs","vs",-2022097090));
if(cljs.core.record_QMARK_(G__49707)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__49725);
} else {
return G__49725;
}
})();
return (new schema.core.EnumSchema(new cljs.core.Keyword(null,"vs","vs",-2022097090).cljs$core$IFn$_invoke$arity$1(G__49707),null,cljs.core.not_empty(extmap__4512__auto__),null));
});

/**
 * A value that must be = to some element of vs.
 */
schema.core.enum$ = (function schema$core$enum(var_args){
var args__4835__auto__ = [];
var len__4829__auto___50699 = arguments.length;
var i__4830__auto___50700 = (0);
while(true){
if((i__4830__auto___50700 < len__4829__auto___50699)){
args__4835__auto__.push((arguments[i__4830__auto___50700]));

var G__50701 = (i__4830__auto___50700 + (1));
i__4830__auto___50700 = G__50701;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return schema.core.enum$.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(schema.core.enum$.cljs$core$IFn$_invoke$arity$variadic = (function (vs){
return (new schema.core.EnumSchema(cljs.core.set(vs),null,null,null));
}));

(schema.core.enum$.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(schema.core.enum$.cljs$lang$applyTo = (function (seq49728){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49728));
}));


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
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
schema.core.Predicate = (function (p_QMARK_,pred_name,__meta,__extmap,__hash){
this.p_QMARK_ = p_QMARK_;
this.pred_name = pred_name;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(schema.core.Predicate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(schema.core.Predicate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k49732,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__49738 = k49732;
var G__49738__$1 = (((G__49738 instanceof cljs.core.Keyword))?G__49738.fqn:null);
switch (G__49738__$1) {
case "p?":
return self__.p_QMARK_;

break;
case "pred-name":
return self__.pred_name;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k49732,else__4475__auto__);

}
}));

(schema.core.Predicate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__49739){
var vec__49740 = p__49739;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49740,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49740,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(schema.core.Predicate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#schema.core.Predicate{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p?","p?",-1172161701),self__.p_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pred-name","pred-name",-3677451),self__.pred_name],null))], null),self__.__extmap));
}));

(schema.core.Predicate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__49731){
var self__ = this;
var G__49731__$1 = this;
return (new cljs.core.RecordIter((0),G__49731__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p?","p?",-1172161701),new cljs.core.Keyword(null,"pred-name","pred-name",-3677451)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(schema.core.Predicate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(schema.core.Predicate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new schema.core.Predicate(self__.p_QMARK_,self__.pred_name,self__.__meta,self__.__extmap,self__.__hash));
}));

(schema.core.Predicate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(schema.core.Predicate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (coll__4469__auto__){
return (2041221968 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
})(this__4468__auto____$1);
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(schema.core.Predicate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this49733,other49734){
var self__ = this;
var this49733__$1 = this;
return (((!((other49734 == null)))) && ((((this49733__$1.constructor === other49734.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49733__$1.p_QMARK_,other49734.p_QMARK_)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49733__$1.pred_name,other49734.pred_name)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49733__$1.__extmap,other49734.__extmap)))))))));
}));

(schema.core.Predicate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pred-name","pred-name",-3677451),null,new cljs.core.Keyword(null,"p?","p?",-1172161701),null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new schema.core.Predicate(self__.p_QMARK_,self__.pred_name,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(schema.core.Predicate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k49732){
var self__ = this;
var this__4479__auto____$1 = this;
var G__49751 = k49732;
var G__49751__$1 = (((G__49751 instanceof cljs.core.Keyword))?G__49751.fqn:null);
switch (G__49751__$1) {
case "p?":
case "pred-name":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k49732);

}
}));

(schema.core.Predicate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__49731){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__49752 = cljs.core.keyword_identical_QMARK_;
var expr__49753 = k__4481__auto__;
if(cljs.core.truth_((pred__49752.cljs$core$IFn$_invoke$arity$2 ? pred__49752.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"p?","p?",-1172161701),expr__49753) : pred__49752.call(null,new cljs.core.Keyword(null,"p?","p?",-1172161701),expr__49753)))){
return (new schema.core.Predicate(G__49731,self__.pred_name,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__49752.cljs$core$IFn$_invoke$arity$2 ? pred__49752.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pred-name","pred-name",-3677451),expr__49753) : pred__49752.call(null,new cljs.core.Keyword(null,"pred-name","pred-name",-3677451),expr__49753)))){
return (new schema.core.Predicate(self__.p_QMARK_,G__49731,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Predicate(self__.p_QMARK_,self__.pred_name,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__49731),null));
}
}
}));

(schema.core.Predicate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"p?","p?",-1172161701),self__.p_QMARK_,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"pred-name","pred-name",-3677451),self__.pred_name,null))], null),self__.__extmap));
}));

(schema.core.Predicate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__49731){
var self__ = this;
var this__4471__auto____$1 = this;
return (new schema.core.Predicate(self__.p_QMARK_,self__.pred_name,G__49731,self__.__extmap,self__.__hash));
}));

(schema.core.Predicate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4478__auto__,(0)),cljs.core._nth(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(schema.core.Predicate.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.Predicate.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.leaf.leaf_spec(schema.spec.core.precondition(this$__$1,self__.p_QMARK_,(function (p1__49730_SHARP_){
return (new cljs.core.List(null,self__.pred_name,(new cljs.core.List(null,p1__49730_SHARP_,null,(1),null)),(2),null));
})));
}));

(schema.core.Predicate.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.p_QMARK_,cljs.core.integer_QMARK_)){
return new cljs.core.Symbol(null,"Int","Int",-2116888740,null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.p_QMARK_,cljs.core.keyword_QMARK_)){
return new cljs.core.Symbol(null,"Keyword","Keyword",-850065993,null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.p_QMARK_,cljs.core.symbol_QMARK_)){
return new cljs.core.Symbol(null,"Symbol","Symbol",716452869,null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.p_QMARK_,cljs.core.string_QMARK_)){
return new cljs.core.Symbol(null,"Str","Str",907970895,null);
} else {
return (new cljs.core.List(null,new cljs.core.Symbol(null,"pred","pred",-727012372,null),(new cljs.core.List(null,self__.pred_name,null,(1),null)),(2),null));

}
}
}
}
}));

(schema.core.Predicate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p?","p?",468369826,null),new cljs.core.Symbol(null,"pred-name","pred-name",1636854076,null)], null);
}));

(schema.core.Predicate.cljs$lang$type = true);

(schema.core.Predicate.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"schema.core/Predicate",null,(1),null));
}));

(schema.core.Predicate.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"schema.core/Predicate");
}));

/**
 * Positional factory function for schema.core/Predicate.
 */
schema.core.__GT_Predicate = (function schema$core$__GT_Predicate(p_QMARK_,pred_name){
return (new schema.core.Predicate(p_QMARK_,pred_name,null,null,null));
});

/**
 * Factory function for schema.core/Predicate, taking a map of keywords to field values.
 */
schema.core.map__GT_Predicate = (function schema$core$map__GT_Predicate(G__49735){
var extmap__4512__auto__ = (function (){var G__49775 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__49735,new cljs.core.Keyword(null,"p?","p?",-1172161701),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"pred-name","pred-name",-3677451)], 0));
if(cljs.core.record_QMARK_(G__49735)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__49775);
} else {
return G__49775;
}
})();
return (new schema.core.Predicate(new cljs.core.Keyword(null,"p?","p?",-1172161701).cljs$core$IFn$_invoke$arity$1(G__49735),new cljs.core.Keyword(null,"pred-name","pred-name",-3677451).cljs$core$IFn$_invoke$arity$1(G__49735),null,cljs.core.not_empty(extmap__4512__auto__),null));
});

/**
 * A value for which p? returns true (and does not throw).
 * Optional pred-name can be passed for nicer validation errors.
 */
schema.core.pred = (function schema$core$pred(var_args){
var G__49785 = arguments.length;
switch (G__49785) {
case 1:
return schema.core.pred.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return schema.core.pred.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(schema.core.pred.cljs$core$IFn$_invoke$arity$1 = (function (p_QMARK_){
return schema.core.pred.cljs$core$IFn$_invoke$arity$2(p_QMARK_,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(schema.utils.fn_name(p_QMARK_)));
}));

(schema.core.pred.cljs$core$IFn$_invoke$arity$2 = (function (p_QMARK_,pred_name){
if(cljs.core.ifn_QMARK_(p_QMARK_)){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Not a function: %s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p_QMARK_], 0))));
}

return (new schema.core.Predicate(p_QMARK_,pred_name,null,null,null));
}));

(schema.core.pred.cljs$lang$maxFixedArity = 2);

schema.core.protocol_name = (function schema$core$protocol_name(protocol){
return new cljs.core.Keyword(null,"proto-sym","proto-sym",-886371734).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(protocol));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
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
schema.core.Protocol = (function (p,__meta,__extmap,__hash){
this.p = p;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(schema.core.Protocol.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(schema.core.Protocol.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k49793,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__49799 = k49793;
var G__49799__$1 = (((G__49799 instanceof cljs.core.Keyword))?G__49799.fqn:null);
switch (G__49799__$1) {
case "p":
return self__.p;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k49793,else__4475__auto__);

}
}));

(schema.core.Protocol.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__49800){
var vec__49802 = p__49800;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49802,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49802,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(schema.core.Protocol.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#schema.core.Protocol{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p","p",151049309),self__.p],null))], null),self__.__extmap));
}));

(schema.core.Protocol.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__49792){
var self__ = this;
var G__49792__$1 = this;
return (new cljs.core.RecordIter((0),G__49792__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(schema.core.Protocol.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(schema.core.Protocol.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new schema.core.Protocol(self__.p,self__.__meta,self__.__extmap,self__.__hash));
}));

(schema.core.Protocol.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(schema.core.Protocol.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (coll__4469__auto__){
return (-1892592712 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
})(this__4468__auto____$1);
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(schema.core.Protocol.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this49794,other49795){
var self__ = this;
var this49794__$1 = this;
return (((!((other49795 == null)))) && ((((this49794__$1.constructor === other49795.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49794__$1.p,other49795.p)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49794__$1.__extmap,other49795.__extmap)))))));
}));

(schema.core.Protocol.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"p","p",151049309),null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new schema.core.Protocol(self__.p,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(schema.core.Protocol.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k49793){
var self__ = this;
var this__4479__auto____$1 = this;
var G__49809 = k49793;
var G__49809__$1 = (((G__49809 instanceof cljs.core.Keyword))?G__49809.fqn:null);
switch (G__49809__$1) {
case "p":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k49793);

}
}));

(schema.core.Protocol.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__49792){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__49810 = cljs.core.keyword_identical_QMARK_;
var expr__49811 = k__4481__auto__;
if(cljs.core.truth_((pred__49810.cljs$core$IFn$_invoke$arity$2 ? pred__49810.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"p","p",151049309),expr__49811) : pred__49810.call(null,new cljs.core.Keyword(null,"p","p",151049309),expr__49811)))){
return (new schema.core.Protocol(G__49792,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Protocol(self__.p,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__49792),null));
}
}));

(schema.core.Protocol.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"p","p",151049309),self__.p,null))], null),self__.__extmap));
}));

(schema.core.Protocol.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__49792){
var self__ = this;
var this__4471__auto____$1 = this;
return (new schema.core.Protocol(self__.p,G__49792,self__.__extmap,self__.__hash));
}));

(schema.core.Protocol.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4478__auto__,(0)),cljs.core._nth(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(schema.core.Protocol.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.Protocol.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.leaf.leaf_spec(schema.spec.core.precondition(this$__$1,(function (p1__49790_SHARP_){
var fexpr__49813 = new cljs.core.Keyword(null,"proto-pred","proto-pred",1885698716).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(this$__$1));
return (fexpr__49813.cljs$core$IFn$_invoke$arity$1 ? fexpr__49813.cljs$core$IFn$_invoke$arity$1(p1__49790_SHARP_) : fexpr__49813.call(null,p1__49790_SHARP_));
}),(function (p1__49791_SHARP_){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),(new cljs.core.List(null,schema.core.protocol_name(this$__$1),(new cljs.core.List(null,p1__49791_SHARP_,null,(1),null)),(2),null)),(3),null));
})));
}));

(schema.core.Protocol.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (new cljs.core.List(null,new cljs.core.Symbol(null,"protocol","protocol",-2001965651,null),(new cljs.core.List(null,schema.core.protocol_name(this$__$1),null,(1),null)),(2),null));
}));

(schema.core.Protocol.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null)], null);
}));

(schema.core.Protocol.cljs$lang$type = true);

(schema.core.Protocol.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"schema.core/Protocol",null,(1),null));
}));

(schema.core.Protocol.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"schema.core/Protocol");
}));

/**
 * Positional factory function for schema.core/Protocol.
 */
schema.core.__GT_Protocol = (function schema$core$__GT_Protocol(p){
return (new schema.core.Protocol(p,null,null,null));
});

/**
 * Factory function for schema.core/Protocol, taking a map of keywords to field values.
 */
schema.core.map__GT_Protocol = (function schema$core$map__GT_Protocol(G__49796){
var extmap__4512__auto__ = (function (){var G__49814 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__49796,new cljs.core.Keyword(null,"p","p",151049309));
if(cljs.core.record_QMARK_(G__49796)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__49814);
} else {
return G__49814;
}
})();
return (new schema.core.Protocol(new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(G__49796),null,cljs.core.not_empty(extmap__4512__auto__),null));
});

(RegExp.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL);

(RegExp.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var this$__$1 = this;
return schema.spec.leaf.leaf_spec(cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(schema.spec.core.precondition(this$__$1,cljs.core.string_QMARK_,(function (p1__48064__48065__auto__){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"string?","string?",-1129175764,null),(new cljs.core.List(null,p1__48064__48065__auto__,null,(1),null)),(2),null));
})),schema.spec.core.precondition(this$__$1,(function (p1__49815_SHARP_){
return cljs.core.re_find(this$__$1,p1__49815_SHARP_);
}),(function (p1__49816_SHARP_){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"re-find","re-find",1143444147,null),(new cljs.core.List(null,schema.core.explain(this$__$1),(new cljs.core.List(null,p1__49816_SHARP_,null,(1),null)),(2),null)),(3),null));
}))));
}));

(RegExp.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["#\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$__$1).slice((1),(-1))),"\""].join(''));
}));
/**
 * Satisfied only by String.
 * Is (pred string?) and not js/String in cljs because of keywords.
 */
schema.core.Str = schema.core.pred.cljs$core$IFn$_invoke$arity$2(cljs.core.string_QMARK_,new cljs.core.Symbol(null,"string?","string?",-1129175764,null));
/**
 * Boolean true or false
 */
schema.core.Bool = Boolean;
/**
 * Any number
 */
schema.core.Num = Number;
/**
 * Any integral number
 */
schema.core.Int = schema.core.pred.cljs$core$IFn$_invoke$arity$2(cljs.core.integer_QMARK_,new cljs.core.Symbol(null,"integer?","integer?",1303791671,null));
/**
 * A keyword
 */
schema.core.Keyword = schema.core.pred.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword_QMARK_,new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null));
/**
 * A symbol
 */
schema.core.Symbol = schema.core.pred.cljs$core$IFn$_invoke$arity$2(cljs.core.symbol_QMARK_,new cljs.core.Symbol(null,"symbol?","symbol?",1820680511,null));
/**
 * A regular expression
 */
schema.core.Regex = (function (){
if((typeof schema !== 'undefined') && (typeof schema.core !== 'undefined') && (typeof schema.core.t_schema$core49822 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {schema.core.Schema}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
schema.core.t_schema$core49822 = (function (meta49823){
this.meta49823 = meta49823;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(schema.core.t_schema$core49822.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49824,meta49823__$1){
var self__ = this;
var _49824__$1 = this;
return (new schema.core.t_schema$core49822(meta49823__$1));
}));

(schema.core.t_schema$core49822.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49824){
var self__ = this;
var _49824__$1 = this;
return self__.meta49823;
}));

(schema.core.t_schema$core49822.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.t_schema$core49822.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.leaf.leaf_spec(schema.spec.core.precondition(this$__$1,(function (p1__49820_SHARP_){
return (p1__49820_SHARP_ instanceof RegExp);
}),(function (p1__49821_SHARP_){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"instance?","instance?",1075939923,null),(new cljs.core.List(null,new cljs.core.Symbol("js","RegExp","js/RegExp",1778210562,null),(new cljs.core.List(null,p1__49821_SHARP_,null,(1),null)),(2),null)),(3),null));
})));
}));

(schema.core.t_schema$core49822.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Symbol(null,"Regex","Regex",205914413,null);
}));

(schema.core.t_schema$core49822.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta49823","meta49823",-1455768453,null)], null);
}));

(schema.core.t_schema$core49822.cljs$lang$type = true);

(schema.core.t_schema$core49822.cljs$lang$ctorStr = "schema.core/t_schema$core49822");

(schema.core.t_schema$core49822.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"schema.core/t_schema$core49822");
}));

/**
 * Positional factory function for schema.core/t_schema$core49822.
 */
schema.core.__GT_t_schema$core49822 = (function schema$core$__GT_t_schema$core49822(meta49823){
return (new schema.core.t_schema$core49822(meta49823));
});

}

return (new schema.core.t_schema$core49822(cljs.core.PersistentArrayMap.EMPTY));
})()
;
/**
 * The local representation of #inst ...
 */
schema.core.Inst = Date;
/**
 * The local representation of #uuid ...
 */
schema.core.Uuid = cljs.core.UUID;

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
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
schema.core.Maybe = (function (schema,__meta,__extmap,__hash){
this.schema = schema;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(schema.core.Maybe.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(schema.core.Maybe.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k49830,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__49849 = k49830;
var G__49849__$1 = (((G__49849 instanceof cljs.core.Keyword))?G__49849.fqn:null);
switch (G__49849__$1) {
case "schema":
return self__.schema;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k49830,else__4475__auto__);

}
}));

(schema.core.Maybe.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__49853){
var vec__49854 = p__49853;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49854,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49854,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(schema.core.Maybe.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#schema.core.Maybe{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null))], null),self__.__extmap));
}));

(schema.core.Maybe.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__49829){
var self__ = this;
var G__49829__$1 = this;
return (new cljs.core.RecordIter((0),G__49829__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(schema.core.Maybe.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(schema.core.Maybe.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new schema.core.Maybe(self__.schema,self__.__meta,self__.__extmap,self__.__hash));
}));

(schema.core.Maybe.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(schema.core.Maybe.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (coll__4469__auto__){
return (-805411239 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
})(this__4468__auto____$1);
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(schema.core.Maybe.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this49831,other49832){
var self__ = this;
var this49831__$1 = this;
return (((!((other49832 == null)))) && ((((this49831__$1.constructor === other49832.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49831__$1.schema,other49832.schema)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49831__$1.__extmap,other49832.__extmap)))))));
}));

(schema.core.Maybe.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new schema.core.Maybe(self__.schema,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(schema.core.Maybe.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k49830){
var self__ = this;
var this__4479__auto____$1 = this;
var G__49861 = k49830;
var G__49861__$1 = (((G__49861 instanceof cljs.core.Keyword))?G__49861.fqn:null);
switch (G__49861__$1) {
case "schema":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k49830);

}
}));

(schema.core.Maybe.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__49829){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__49862 = cljs.core.keyword_identical_QMARK_;
var expr__49863 = k__4481__auto__;
if(cljs.core.truth_((pred__49862.cljs$core$IFn$_invoke$arity$2 ? pred__49862.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"schema","schema",-1582001791),expr__49863) : pred__49862.call(null,new cljs.core.Keyword(null,"schema","schema",-1582001791),expr__49863)))){
return (new schema.core.Maybe(G__49829,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Maybe(self__.schema,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__49829),null));
}
}));

(schema.core.Maybe.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema,null))], null),self__.__extmap));
}));

(schema.core.Maybe.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__49829){
var self__ = this;
var this__4471__auto____$1 = this;
return (new schema.core.Maybe(self__.schema,G__49829,self__.__extmap,self__.__hash));
}));

(schema.core.Maybe.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4478__auto__,(0)),cljs.core._nth(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(schema.core.Maybe.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.Maybe.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.variant.variant_spec.cljs$core$IFn$_invoke$arity$2(schema.spec.core._PLUS_no_precondition_PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"guard","guard",-873147811),cljs.core.nil_QMARK_,new cljs.core.Keyword(null,"schema","schema",-1582001791),schema.core.eq(null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema], null)], null));
}));

(schema.core.Maybe.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (new cljs.core.List(null,new cljs.core.Symbol(null,"maybe","maybe",1326133967,null),(new cljs.core.List(null,schema.core.explain(self__.schema),null,(1),null)),(2),null));
}));

(schema.core.Maybe.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"schema","schema",58529736,null)], null);
}));

(schema.core.Maybe.cljs$lang$type = true);

(schema.core.Maybe.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"schema.core/Maybe",null,(1),null));
}));

(schema.core.Maybe.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"schema.core/Maybe");
}));

/**
 * Positional factory function for schema.core/Maybe.
 */
schema.core.__GT_Maybe = (function schema$core$__GT_Maybe(schema__$1){
return (new schema.core.Maybe(schema__$1,null,null,null));
});

/**
 * Factory function for schema.core/Maybe, taking a map of keywords to field values.
 */
schema.core.map__GT_Maybe = (function schema$core$map__GT_Maybe(G__49839){
var extmap__4512__auto__ = (function (){var G__49867 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__49839,new cljs.core.Keyword(null,"schema","schema",-1582001791));
if(cljs.core.record_QMARK_(G__49839)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__49867);
} else {
return G__49867;
}
})();
return (new schema.core.Maybe(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(G__49839),null,cljs.core.not_empty(extmap__4512__auto__),null));
});

/**
 * A value that must either be nil or satisfy schema
 */
schema.core.maybe = (function schema$core$maybe(schema__$1){
return (new schema.core.Maybe(schema__$1,null,null,null));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
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
schema.core.NamedSchema = (function (schema,name,__meta,__extmap,__hash){
this.schema = schema;
this.name = name;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(schema.core.NamedSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(schema.core.NamedSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k49870,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__49875 = k49870;
var G__49875__$1 = (((G__49875 instanceof cljs.core.Keyword))?G__49875.fqn:null);
switch (G__49875__$1) {
case "schema":
return self__.schema;

break;
case "name":
return self__.name;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k49870,else__4475__auto__);

}
}));

(schema.core.NamedSchema.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__49876){
var vec__49877 = p__49876;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49877,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49877,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(schema.core.NamedSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#schema.core.NamedSchema{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null))], null),self__.__extmap));
}));

(schema.core.NamedSchema.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__49869){
var self__ = this;
var G__49869__$1 = this;
return (new cljs.core.RecordIter((0),G__49869__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Keyword(null,"name","name",1843675177)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(schema.core.NamedSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(schema.core.NamedSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new schema.core.NamedSchema(self__.schema,self__.name,self__.__meta,self__.__extmap,self__.__hash));
}));

(schema.core.NamedSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(schema.core.NamedSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (coll__4469__auto__){
return (456601728 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
})(this__4468__auto____$1);
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(schema.core.NamedSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this49871,other49872){
var self__ = this;
var this49871__$1 = this;
return (((!((other49872 == null)))) && ((((this49871__$1.constructor === other49872.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49871__$1.schema,other49872.schema)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49871__$1.name,other49872.name)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49871__$1.__extmap,other49872.__extmap)))))))));
}));

(schema.core.NamedSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),null,new cljs.core.Keyword(null,"name","name",1843675177),null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new schema.core.NamedSchema(self__.schema,self__.name,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(schema.core.NamedSchema.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k49870){
var self__ = this;
var this__4479__auto____$1 = this;
var G__49929 = k49870;
var G__49929__$1 = (((G__49929 instanceof cljs.core.Keyword))?G__49929.fqn:null);
switch (G__49929__$1) {
case "schema":
case "name":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k49870);

}
}));

(schema.core.NamedSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__49869){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__49931 = cljs.core.keyword_identical_QMARK_;
var expr__49932 = k__4481__auto__;
if(cljs.core.truth_((pred__49931.cljs$core$IFn$_invoke$arity$2 ? pred__49931.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"schema","schema",-1582001791),expr__49932) : pred__49931.call(null,new cljs.core.Keyword(null,"schema","schema",-1582001791),expr__49932)))){
return (new schema.core.NamedSchema(G__49869,self__.name,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__49931.cljs$core$IFn$_invoke$arity$2 ? pred__49931.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177),expr__49932) : pred__49931.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__49932)))){
return (new schema.core.NamedSchema(self__.schema,G__49869,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.NamedSchema(self__.schema,self__.name,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__49869),null));
}
}
}));

(schema.core.NamedSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"name","name",1843675177),self__.name,null))], null),self__.__extmap));
}));

(schema.core.NamedSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__49869){
var self__ = this;
var this__4471__auto____$1 = this;
return (new schema.core.NamedSchema(self__.schema,self__.name,G__49869,self__.__extmap,self__.__hash));
}));

(schema.core.NamedSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4478__auto__,(0)),cljs.core._nth(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(schema.core.NamedSchema.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.NamedSchema.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.variant.variant_spec.cljs$core$IFn$_invoke$arity$2(schema.spec.core._PLUS_no_precondition_PLUS_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema,new cljs.core.Keyword(null,"wrap-error","wrap-error",536732809),(function (p1__49868_SHARP_){
return schema.utils.__GT_NamedError(self__.name,p1__49868_SHARP_);
})], null)], null));
}));

(schema.core.NamedSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (new cljs.core.List(null,new cljs.core.Symbol(null,"named","named",1218138048,null),(new cljs.core.List(null,schema.core.explain(self__.schema),(new cljs.core.List(null,self__.name,null,(1),null)),(2),null)),(3),null));
}));

(schema.core.NamedSchema.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"schema","schema",58529736,null),new cljs.core.Symbol(null,"name","name",-810760592,null)], null);
}));

(schema.core.NamedSchema.cljs$lang$type = true);

(schema.core.NamedSchema.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"schema.core/NamedSchema",null,(1),null));
}));

(schema.core.NamedSchema.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"schema.core/NamedSchema");
}));

/**
 * Positional factory function for schema.core/NamedSchema.
 */
schema.core.__GT_NamedSchema = (function schema$core$__GT_NamedSchema(schema__$1,name){
return (new schema.core.NamedSchema(schema__$1,name,null,null,null));
});

/**
 * Factory function for schema.core/NamedSchema, taking a map of keywords to field values.
 */
schema.core.map__GT_NamedSchema = (function schema$core$map__GT_NamedSchema(G__49873){
var extmap__4512__auto__ = (function (){var G__49935 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__49873,new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"name","name",1843675177)], 0));
if(cljs.core.record_QMARK_(G__49873)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__49935);
} else {
return G__49935;
}
})();
return (new schema.core.NamedSchema(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(G__49873),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__49873),null,cljs.core.not_empty(extmap__4512__auto__),null));
});

/**
 * A value that must satisfy schema, and has a name for documentation purposes.
 */
schema.core.named = (function schema$core$named(schema__$1,name){
return (new schema.core.NamedSchema(schema__$1,name,null,null,null));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
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
schema.core.Either = (function (schemas,__meta,__extmap,__hash){
this.schemas = schemas;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(schema.core.Either.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(schema.core.Either.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k49938,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__49942 = k49938;
var G__49942__$1 = (((G__49942 instanceof cljs.core.Keyword))?G__49942.fqn:null);
switch (G__49942__$1) {
case "schemas":
return self__.schemas;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k49938,else__4475__auto__);

}
}));

(schema.core.Either.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__49943){
var vec__49944 = p__49943;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49944,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49944,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(schema.core.Either.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#schema.core.Either{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schemas","schemas",575070579),self__.schemas],null))], null),self__.__extmap));
}));

(schema.core.Either.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__49937){
var self__ = this;
var G__49937__$1 = this;
return (new cljs.core.RecordIter((0),G__49937__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schemas","schemas",575070579)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(schema.core.Either.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(schema.core.Either.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new schema.core.Either(self__.schemas,self__.__meta,self__.__extmap,self__.__hash));
}));

(schema.core.Either.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(schema.core.Either.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (coll__4469__auto__){
return (-1018568510 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
})(this__4468__auto____$1);
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(schema.core.Either.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this49939,other49940){
var self__ = this;
var this49939__$1 = this;
return (((!((other49940 == null)))) && ((((this49939__$1.constructor === other49940.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49939__$1.schemas,other49940.schemas)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49939__$1.__extmap,other49940.__extmap)))))));
}));

(schema.core.Either.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schemas","schemas",575070579),null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new schema.core.Either(self__.schemas,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(schema.core.Either.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k49938){
var self__ = this;
var this__4479__auto____$1 = this;
var G__49957 = k49938;
var G__49957__$1 = (((G__49957 instanceof cljs.core.Keyword))?G__49957.fqn:null);
switch (G__49957__$1) {
case "schemas":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k49938);

}
}));

(schema.core.Either.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__49937){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__49959 = cljs.core.keyword_identical_QMARK_;
var expr__49960 = k__4481__auto__;
if(cljs.core.truth_((pred__49959.cljs$core$IFn$_invoke$arity$2 ? pred__49959.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"schemas","schemas",575070579),expr__49960) : pred__49959.call(null,new cljs.core.Keyword(null,"schemas","schemas",575070579),expr__49960)))){
return (new schema.core.Either(G__49937,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Either(self__.schemas,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__49937),null));
}
}));

(schema.core.Either.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"schemas","schemas",575070579),self__.schemas,null))], null),self__.__extmap));
}));

(schema.core.Either.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__49937){
var self__ = this;
var this__4471__auto____$1 = this;
return (new schema.core.Either(self__.schemas,G__49937,self__.__extmap,self__.__hash));
}));

(schema.core.Either.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4478__auto__,(0)),cljs.core._nth(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(schema.core.Either.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.Either.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.variant.variant_spec.cljs$core$IFn$_invoke$arity$3(schema.spec.core._PLUS_no_precondition_PLUS_,(function (){var iter__4622__auto__ = (function schema$core$iter__49965(s__49966){
return (new cljs.core.LazySeq(null,(function (){
var s__49966__$1 = s__49966;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__49966__$1);
if(temp__5753__auto__){
var s__49966__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__49966__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__49966__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__49968 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__49967 = (0);
while(true){
if((i__49967 < size__4621__auto__)){
var s = cljs.core._nth(c__4620__auto__,i__49967);
cljs.core.chunk_append(b__49968,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"guard","guard",-873147811),cljs.core.complement(schema.core.checker(s)),new cljs.core.Keyword(null,"schema","schema",-1582001791),s], null));

var G__50795 = (i__49967 + (1));
i__49967 = G__50795;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49968),schema$core$iter__49965(cljs.core.chunk_rest(s__49966__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49968),null);
}
} else {
var s = cljs.core.first(s__49966__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"guard","guard",-873147811),cljs.core.complement(schema.core.checker(s)),new cljs.core.Keyword(null,"schema","schema",-1582001791),s], null),schema$core$iter__49965(cljs.core.rest(s__49966__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(self__.schemas);
})(),(function (p1__49936_SHARP_){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"some-matching-either-clause?","some-matching-either-clause?",-1443305015,null),(new cljs.core.List(null,p1__49936_SHARP_,null,(1),null)),(2),null));
}));
}));

(schema.core.Either.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.cons(new cljs.core.Symbol(null,"either","either",-2144373018,null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(schema.core.explain,self__.schemas));
}));

(schema.core.Either.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"schemas","schemas",-2079365190,null)], null);
}));

(schema.core.Either.cljs$lang$type = true);

(schema.core.Either.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"schema.core/Either",null,(1),null));
}));

(schema.core.Either.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"schema.core/Either");
}));

/**
 * Positional factory function for schema.core/Either.
 */
schema.core.__GT_Either = (function schema$core$__GT_Either(schemas){
return (new schema.core.Either(schemas,null,null,null));
});

/**
 * Factory function for schema.core/Either, taking a map of keywords to field values.
 */
schema.core.map__GT_Either = (function schema$core$map__GT_Either(G__49941){
var extmap__4512__auto__ = (function (){var G__49979 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__49941,new cljs.core.Keyword(null,"schemas","schemas",575070579));
if(cljs.core.record_QMARK_(G__49941)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__49979);
} else {
return G__49979;
}
})();
return (new schema.core.Either(new cljs.core.Keyword(null,"schemas","schemas",575070579).cljs$core$IFn$_invoke$arity$1(G__49941),null,cljs.core.not_empty(extmap__4512__auto__),null));
});

/**
 * A value that must satisfy at least one schema in schemas.
 * Note that `either` does not work properly with coercion
 * 
 * DEPRECATED: prefer `conditional` or `cond-pre`
 * 
 * WARNING: either does not work with coercion.  It is also slow and gives
 * bad error messages.  Please consider using `conditional` and friends
 * instead; they are more efficient, provide better error messages,
 * and work with coercion.
 */
schema.core.either = (function schema$core$either(var_args){
var args__4835__auto__ = [];
var len__4829__auto___50798 = arguments.length;
var i__4830__auto___50799 = (0);
while(true){
if((i__4830__auto___50799 < len__4829__auto___50798)){
args__4835__auto__.push((arguments[i__4830__auto___50799]));

var G__50800 = (i__4830__auto___50799 + (1));
i__4830__auto___50799 = G__50800;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return schema.core.either.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(schema.core.either.cljs$core$IFn$_invoke$arity$variadic = (function (schemas){
return (new schema.core.Either(schemas,null,null,null));
}));

(schema.core.either.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(schema.core.either.cljs$lang$applyTo = (function (seq49983){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49983));
}));


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
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
schema.core.ConditionalSchema = (function (preds_and_schemas,error_symbol,__meta,__extmap,__hash){
this.preds_and_schemas = preds_and_schemas;
this.error_symbol = error_symbol;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(schema.core.ConditionalSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(schema.core.ConditionalSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k49991,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__49998 = k49991;
var G__49998__$1 = (((G__49998 instanceof cljs.core.Keyword))?G__49998.fqn:null);
switch (G__49998__$1) {
case "preds-and-schemas":
return self__.preds_and_schemas;

break;
case "error-symbol":
return self__.error_symbol;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k49991,else__4475__auto__);

}
}));

(schema.core.ConditionalSchema.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__50002){
var vec__50003 = p__50002;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50003,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50003,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(schema.core.ConditionalSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#schema.core.ConditionalSchema{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"preds-and-schemas","preds-and-schemas",-1306766355),self__.preds_and_schemas],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"error-symbol","error-symbol",-823480428),self__.error_symbol],null))], null),self__.__extmap));
}));

(schema.core.ConditionalSchema.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__49990){
var self__ = this;
var G__49990__$1 = this;
return (new cljs.core.RecordIter((0),G__49990__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"preds-and-schemas","preds-and-schemas",-1306766355),new cljs.core.Keyword(null,"error-symbol","error-symbol",-823480428)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(schema.core.ConditionalSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(schema.core.ConditionalSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new schema.core.ConditionalSchema(self__.preds_and_schemas,self__.error_symbol,self__.__meta,self__.__extmap,self__.__hash));
}));

(schema.core.ConditionalSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(schema.core.ConditionalSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (coll__4469__auto__){
return (1418435858 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
})(this__4468__auto____$1);
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(schema.core.ConditionalSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this49992,other49993){
var self__ = this;
var this49992__$1 = this;
return (((!((other49993 == null)))) && ((((this49992__$1.constructor === other49993.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49992__$1.preds_and_schemas,other49993.preds_and_schemas)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49992__$1.error_symbol,other49993.error_symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49992__$1.__extmap,other49993.__extmap)))))))));
}));

(schema.core.ConditionalSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"preds-and-schemas","preds-and-schemas",-1306766355),null,new cljs.core.Keyword(null,"error-symbol","error-symbol",-823480428),null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new schema.core.ConditionalSchema(self__.preds_and_schemas,self__.error_symbol,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(schema.core.ConditionalSchema.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k49991){
var self__ = this;
var this__4479__auto____$1 = this;
var G__50021 = k49991;
var G__50021__$1 = (((G__50021 instanceof cljs.core.Keyword))?G__50021.fqn:null);
switch (G__50021__$1) {
case "preds-and-schemas":
case "error-symbol":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k49991);

}
}));

(schema.core.ConditionalSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__49990){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__50022 = cljs.core.keyword_identical_QMARK_;
var expr__50023 = k__4481__auto__;
if(cljs.core.truth_((pred__50022.cljs$core$IFn$_invoke$arity$2 ? pred__50022.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"preds-and-schemas","preds-and-schemas",-1306766355),expr__50023) : pred__50022.call(null,new cljs.core.Keyword(null,"preds-and-schemas","preds-and-schemas",-1306766355),expr__50023)))){
return (new schema.core.ConditionalSchema(G__49990,self__.error_symbol,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__50022.cljs$core$IFn$_invoke$arity$2 ? pred__50022.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"error-symbol","error-symbol",-823480428),expr__50023) : pred__50022.call(null,new cljs.core.Keyword(null,"error-symbol","error-symbol",-823480428),expr__50023)))){
return (new schema.core.ConditionalSchema(self__.preds_and_schemas,G__49990,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.ConditionalSchema(self__.preds_and_schemas,self__.error_symbol,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__49990),null));
}
}
}));

(schema.core.ConditionalSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"preds-and-schemas","preds-and-schemas",-1306766355),self__.preds_and_schemas,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"error-symbol","error-symbol",-823480428),self__.error_symbol,null))], null),self__.__extmap));
}));

(schema.core.ConditionalSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__49990){
var self__ = this;
var this__4471__auto____$1 = this;
return (new schema.core.ConditionalSchema(self__.preds_and_schemas,self__.error_symbol,G__49990,self__.__extmap,self__.__hash));
}));

(schema.core.ConditionalSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4478__auto__,(0)),cljs.core._nth(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(schema.core.ConditionalSchema.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.ConditionalSchema.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.variant.variant_spec.cljs$core$IFn$_invoke$arity$3(schema.spec.core._PLUS_no_precondition_PLUS_,(function (){var iter__4622__auto__ = (function schema$core$iter__50030(s__50031){
return (new cljs.core.LazySeq(null,(function (){
var s__50031__$1 = s__50031;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__50031__$1);
if(temp__5753__auto__){
var s__50031__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__50031__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__50031__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__50033 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__50032 = (0);
while(true){
if((i__50032 < size__4621__auto__)){
var vec__50035 = cljs.core._nth(c__4620__auto__,i__50032);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50035,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50035,(1),null);
cljs.core.chunk_append(b__50033,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"guard","guard",-873147811),p,new cljs.core.Keyword(null,"schema","schema",-1582001791),s], null));

var G__50819 = (i__50032 + (1));
i__50032 = G__50819;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50033),schema$core$iter__50030(cljs.core.chunk_rest(s__50031__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50033),null);
}
} else {
var vec__50042 = cljs.core.first(s__50031__$2);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50042,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50042,(1),null);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"guard","guard",-873147811),p,new cljs.core.Keyword(null,"schema","schema",-1582001791),s], null),schema$core$iter__50030(cljs.core.rest(s__50031__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(self__.preds_and_schemas);
})(),(function (p1__49989_SHARP_){
return (new cljs.core.List(null,(function (){var or__4223__auto__ = self__.error_symbol;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(self__.preds_and_schemas))){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(schema.utils.fn_name(cljs.core.ffirst(self__.preds_and_schemas)));
} else {
return new cljs.core.Symbol(null,"some-matching-condition?","some-matching-condition?",1512398506,null);
}
}
})(),(new cljs.core.List(null,p1__49989_SHARP_,null,(1),null)),(2),null));
}));
}));

(schema.core.ConditionalSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.cons(new cljs.core.Symbol(null,"conditional","conditional",-1212542970,null),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__50050){
var vec__50051 = p__50050;
var pred = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50051,(0),null);
var schema__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50051,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(schema.utils.fn_name(pred)),schema.core.explain(schema__$1)], null);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.preds_and_schemas], 0)),(cljs.core.truth_(self__.error_symbol)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.error_symbol], null):null)));
}));

(schema.core.ConditionalSchema.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"preds-and-schemas","preds-and-schemas",333765172,null),new cljs.core.Symbol(null,"error-symbol","error-symbol",817051099,null)], null);
}));

(schema.core.ConditionalSchema.cljs$lang$type = true);

(schema.core.ConditionalSchema.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"schema.core/ConditionalSchema",null,(1),null));
}));

(schema.core.ConditionalSchema.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"schema.core/ConditionalSchema");
}));

/**
 * Positional factory function for schema.core/ConditionalSchema.
 */
schema.core.__GT_ConditionalSchema = (function schema$core$__GT_ConditionalSchema(preds_and_schemas,error_symbol){
return (new schema.core.ConditionalSchema(preds_and_schemas,error_symbol,null,null,null));
});

/**
 * Factory function for schema.core/ConditionalSchema, taking a map of keywords to field values.
 */
schema.core.map__GT_ConditionalSchema = (function schema$core$map__GT_ConditionalSchema(G__49994){
var extmap__4512__auto__ = (function (){var G__50059 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__49994,new cljs.core.Keyword(null,"preds-and-schemas","preds-and-schemas",-1306766355),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"error-symbol","error-symbol",-823480428)], 0));
if(cljs.core.record_QMARK_(G__49994)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__50059);
} else {
return G__50059;
}
})();
return (new schema.core.ConditionalSchema(new cljs.core.Keyword(null,"preds-and-schemas","preds-and-schemas",-1306766355).cljs$core$IFn$_invoke$arity$1(G__49994),new cljs.core.Keyword(null,"error-symbol","error-symbol",-823480428).cljs$core$IFn$_invoke$arity$1(G__49994),null,cljs.core.not_empty(extmap__4512__auto__),null));
});

/**
 * Define a conditional schema.  Takes args like cond,
 * (conditional pred1 schema1 pred2 schema2 ...),
 * and checks the first schemaX where predX (an ordinary Clojure function
 * that returns true or false) returns true on the value.
 * Unlike cond, throws if the value does not match any condition.
 * :else may be used as a final condition in the place of (constantly true).
 * More efficient than either, since only one schema must be checked.
 * An optional final argument can be passed, a symbol to appear in
 * error messages when none of the conditions match.
 */
schema.core.conditional = (function schema$core$conditional(var_args){
var args__4835__auto__ = [];
var len__4829__auto___50822 = arguments.length;
var i__4830__auto___50823 = (0);
while(true){
if((i__4830__auto___50823 < len__4829__auto___50822)){
args__4835__auto__.push((arguments[i__4830__auto___50823]));

var G__50824 = (i__4830__auto___50823 + (1));
i__4830__auto___50823 = G__50824;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return schema.core.conditional.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(schema.core.conditional.cljs$core$IFn$_invoke$arity$variadic = (function (preds_and_schemas){
if(((cljs.core.seq(preds_and_schemas)) && (((cljs.core.even_QMARK_(cljs.core.count(preds_and_schemas))) || ((cljs.core.last(preds_and_schemas) instanceof cljs.core.Symbol)))))){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Expected even, nonzero number of args (with optional trailing symbol); got %s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.count(preds_and_schemas)], 0))));
}

return (new schema.core.ConditionalSchema(cljs.core.vec((function (){var iter__4622__auto__ = (function schema$core$iter__50061(s__50062){
return (new cljs.core.LazySeq(null,(function (){
var s__50062__$1 = s__50062;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__50062__$1);
if(temp__5753__auto__){
var s__50062__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__50062__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__50062__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__50064 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__50063 = (0);
while(true){
if((i__50063 < size__4621__auto__)){
var vec__50065 = cljs.core._nth(c__4620__auto__,i__50063);
var pred = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50065,(0),null);
var schema__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50065,(1),null);
cljs.core.chunk_append(b__50064,(function (){
if(cljs.core.ifn_QMARK_(pred)){
} else {
throw (new Error(schema.utils.format_STAR_(["Conditional predicate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pred)," must be a function"].join(''))));
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pred,new cljs.core.Keyword(null,"else","else",-1508377146)))?cljs.core.constantly(true):pred),schema__$1], null);
})()
);

var G__50835 = (i__50063 + (1));
i__50063 = G__50835;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50064),schema$core$iter__50061(cljs.core.chunk_rest(s__50062__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50064),null);
}
} else {
var vec__50068 = cljs.core.first(s__50062__$2);
var pred = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50068,(0),null);
var schema__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50068,(1),null);
return cljs.core.cons((function (){
if(cljs.core.ifn_QMARK_(pred)){
} else {
throw (new Error(schema.utils.format_STAR_(["Conditional predicate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pred)," must be a function"].join(''))));
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pred,new cljs.core.Keyword(null,"else","else",-1508377146)))?cljs.core.constantly(true):pred),schema__$1], null);
})()
,schema$core$iter__50061(cljs.core.rest(s__50062__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),preds_and_schemas));
})()),((cljs.core.odd_QMARK_(cljs.core.count(preds_and_schemas)))?cljs.core.last(preds_and_schemas):null),null,null,null));
}));

(schema.core.conditional.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(schema.core.conditional.cljs$lang$applyTo = (function (seq50060){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50060));
}));


/**
 * @interface
 */
schema.core.HasPrecondition = function(){};

var schema$core$HasPrecondition$precondition$dyn_50836 = (function (this$){
var x__4521__auto__ = (((this$ == null))?null:this$);
var m__4522__auto__ = (schema.core.precondition[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4522__auto__.call(null,this$));
} else {
var m__4519__auto__ = (schema.core.precondition["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4519__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("HasPrecondition.precondition",this$);
}
}
});
/**
 * Return a predicate representing the Precondition for this schema:
 *   the predicate returns true if the precondition is satisfied.
 *   (See spec.core for more details)
 */
schema.core.precondition = (function schema$core$precondition(this$){
if((((!((this$ == null)))) && ((!((this$.schema$core$HasPrecondition$precondition$arity$1 == null)))))){
return this$.schema$core$HasPrecondition$precondition$arity$1(this$);
} else {
return schema$core$HasPrecondition$precondition$dyn_50836(this$);
}
});

(schema.spec.leaf.LeafSpec.prototype.schema$core$HasPrecondition$ = cljs.core.PROTOCOL_SENTINEL);

(schema.spec.leaf.LeafSpec.prototype.schema$core$HasPrecondition$precondition$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.complement(this$__$1.pre);
}));

(schema.spec.variant.VariantSpec.prototype.schema$core$HasPrecondition$ = cljs.core.PROTOCOL_SENTINEL);

(schema.spec.variant.VariantSpec.prototype.schema$core$HasPrecondition$precondition$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.every_pred.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(this$__$1.pre),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.some_fn,(function (){var iter__4622__auto__ = (function schema$core$iter__50076(s__50077){
return (new cljs.core.LazySeq(null,(function (){
var s__50077__$1 = s__50077;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__50077__$1);
if(temp__5753__auto__){
var s__50077__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__50077__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__50077__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__50079 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__50078 = (0);
while(true){
if((i__50078 < size__4621__auto__)){
var map__50081 = cljs.core._nth(c__4620__auto__,i__50078);
var map__50081__$1 = cljs.core.__destructure_map(map__50081);
var guard = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50081__$1,new cljs.core.Keyword(null,"guard","guard",-873147811));
var schema__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50081__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791));
cljs.core.chunk_append(b__50079,(cljs.core.truth_(guard)?cljs.core.every_pred.cljs$core$IFn$_invoke$arity$2(guard,schema.core.precondition(schema.core.spec(schema__$1))):schema.core.precondition(schema.core.spec(schema__$1))));

var G__50838 = (i__50078 + (1));
i__50078 = G__50838;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50079),schema$core$iter__50076(cljs.core.chunk_rest(s__50077__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50079),null);
}
} else {
var map__50082 = cljs.core.first(s__50077__$2);
var map__50082__$1 = cljs.core.__destructure_map(map__50082);
var guard = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50082__$1,new cljs.core.Keyword(null,"guard","guard",-873147811));
var schema__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50082__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791));
return cljs.core.cons((cljs.core.truth_(guard)?cljs.core.every_pred.cljs$core$IFn$_invoke$arity$2(guard,schema.core.precondition(schema.core.spec(schema__$1))):schema.core.precondition(schema.core.spec(schema__$1))),schema$core$iter__50076(cljs.core.rest(s__50077__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(this$__$1.options);
})()));
}));

(schema.spec.collection.CollectionSpec.prototype.schema$core$HasPrecondition$ = cljs.core.PROTOCOL_SENTINEL);

(schema.spec.collection.CollectionSpec.prototype.schema$core$HasPrecondition$precondition$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.complement(this$__$1.pre);
}));

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
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
schema.core.CondPre = (function (schemas,__meta,__extmap,__hash){
this.schemas = schemas;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(schema.core.CondPre.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(schema.core.CondPre.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k50087,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__50095 = k50087;
var G__50095__$1 = (((G__50095 instanceof cljs.core.Keyword))?G__50095.fqn:null);
switch (G__50095__$1) {
case "schemas":
return self__.schemas;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k50087,else__4475__auto__);

}
}));

(schema.core.CondPre.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__50100){
var vec__50101 = p__50100;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50101,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50101,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(schema.core.CondPre.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#schema.core.CondPre{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schemas","schemas",575070579),self__.schemas],null))], null),self__.__extmap));
}));

(schema.core.CondPre.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__50086){
var self__ = this;
var G__50086__$1 = this;
return (new cljs.core.RecordIter((0),G__50086__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schemas","schemas",575070579)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(schema.core.CondPre.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(schema.core.CondPre.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new schema.core.CondPre(self__.schemas,self__.__meta,self__.__extmap,self__.__hash));
}));

(schema.core.CondPre.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(schema.core.CondPre.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (coll__4469__auto__){
return (-56613580 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
})(this__4468__auto____$1);
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(schema.core.CondPre.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this50088,other50089){
var self__ = this;
var this50088__$1 = this;
return (((!((other50089 == null)))) && ((((this50088__$1.constructor === other50089.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50088__$1.schemas,other50089.schemas)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50088__$1.__extmap,other50089.__extmap)))))));
}));

(schema.core.CondPre.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schemas","schemas",575070579),null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new schema.core.CondPre(self__.schemas,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(schema.core.CondPre.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k50087){
var self__ = this;
var this__4479__auto____$1 = this;
var G__50116 = k50087;
var G__50116__$1 = (((G__50116 instanceof cljs.core.Keyword))?G__50116.fqn:null);
switch (G__50116__$1) {
case "schemas":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k50087);

}
}));

(schema.core.CondPre.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__50086){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__50118 = cljs.core.keyword_identical_QMARK_;
var expr__50119 = k__4481__auto__;
if(cljs.core.truth_((pred__50118.cljs$core$IFn$_invoke$arity$2 ? pred__50118.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"schemas","schemas",575070579),expr__50119) : pred__50118.call(null,new cljs.core.Keyword(null,"schemas","schemas",575070579),expr__50119)))){
return (new schema.core.CondPre(G__50086,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.CondPre(self__.schemas,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__50086),null));
}
}));

(schema.core.CondPre.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"schemas","schemas",575070579),self__.schemas,null))], null),self__.__extmap));
}));

(schema.core.CondPre.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__50086){
var self__ = this;
var this__4471__auto____$1 = this;
return (new schema.core.CondPre(self__.schemas,G__50086,self__.__extmap,self__.__hash));
}));

(schema.core.CondPre.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4478__auto__,(0)),cljs.core._nth(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(schema.core.CondPre.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.CondPre.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.variant.variant_spec.cljs$core$IFn$_invoke$arity$3(schema.spec.core._PLUS_no_precondition_PLUS_,(function (){var iter__4622__auto__ = (function schema$core$iter__50121(s__50122){
return (new cljs.core.LazySeq(null,(function (){
var s__50122__$1 = s__50122;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__50122__$1);
if(temp__5753__auto__){
var s__50122__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__50122__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__50122__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__50124 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__50123 = (0);
while(true){
if((i__50123 < size__4621__auto__)){
var s = cljs.core._nth(c__4620__auto__,i__50123);
cljs.core.chunk_append(b__50124,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"guard","guard",-873147811),schema.core.precondition(schema.core.spec(s)),new cljs.core.Keyword(null,"schema","schema",-1582001791),s], null));

var G__50850 = (i__50123 + (1));
i__50123 = G__50850;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50124),schema$core$iter__50121(cljs.core.chunk_rest(s__50122__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50124),null);
}
} else {
var s = cljs.core.first(s__50122__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"guard","guard",-873147811),schema.core.precondition(schema.core.spec(s)),new cljs.core.Keyword(null,"schema","schema",-1582001791),s], null),schema$core$iter__50121(cljs.core.rest(s__50122__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(self__.schemas);
})(),(function (p1__50085_SHARP_){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"matches-some-precondition?","matches-some-precondition?",2123072832,null),(new cljs.core.List(null,p1__50085_SHARP_,null,(1),null)),(2),null));
}));
}));

(schema.core.CondPre.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.cons(new cljs.core.Symbol(null,"cond-pre","cond-pre",-923707731,null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(schema.core.explain,self__.schemas));
}));

(schema.core.CondPre.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"schemas","schemas",-2079365190,null)], null);
}));

(schema.core.CondPre.cljs$lang$type = true);

(schema.core.CondPre.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"schema.core/CondPre",null,(1),null));
}));

(schema.core.CondPre.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"schema.core/CondPre");
}));

/**
 * Positional factory function for schema.core/CondPre.
 */
schema.core.__GT_CondPre = (function schema$core$__GT_CondPre(schemas){
return (new schema.core.CondPre(schemas,null,null,null));
});

/**
 * Factory function for schema.core/CondPre, taking a map of keywords to field values.
 */
schema.core.map__GT_CondPre = (function schema$core$map__GT_CondPre(G__50094){
var extmap__4512__auto__ = (function (){var G__50129 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__50094,new cljs.core.Keyword(null,"schemas","schemas",575070579));
if(cljs.core.record_QMARK_(G__50094)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__50129);
} else {
return G__50129;
}
})();
return (new schema.core.CondPre(new cljs.core.Keyword(null,"schemas","schemas",575070579).cljs$core$IFn$_invoke$arity$1(G__50094),null,cljs.core.not_empty(extmap__4512__auto__),null));
});

/**
 * A replacement for `either` that constructs a conditional schema
 * based on the schema spec preconditions of the component schemas.
 * 
 * Given a datum, the preconditions for each schema (which typically
 * check just the outermost class) are tested against the datum in turn.
 * The first schema whose precondition matches is greedily selected,
 * and the datum is validated against that schema.  Unlike `either`,
 * a validation failure is final (and there is no backtracking to try
 * other schemas that might match).
 * 
 * Thus, `cond-pre` is only suitable for schemas with mutually exclusive
 * preconditions (e.g., s/Int and s/Str).  If this doesn't hold
 * (e.g. {:a s/Int} and {:b s/Str}), you must use `conditional` instead
 * and provide an explicit condition for distinguishing the cases.
 * 
 * EXPERIMENTAL
 */
schema.core.cond_pre = (function schema$core$cond_pre(var_args){
var args__4835__auto__ = [];
var len__4829__auto___50853 = arguments.length;
var i__4830__auto___50854 = (0);
while(true){
if((i__4830__auto___50854 < len__4829__auto___50853)){
args__4835__auto__.push((arguments[i__4830__auto___50854]));

var G__50855 = (i__4830__auto___50854 + (1));
i__4830__auto___50854 = G__50855;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return schema.core.cond_pre.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(schema.core.cond_pre.cljs$core$IFn$_invoke$arity$variadic = (function (schemas){
return (new schema.core.CondPre(schemas,null,null,null));
}));

(schema.core.cond_pre.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(schema.core.cond_pre.cljs$lang$applyTo = (function (seq50130){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50130));
}));


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
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
schema.core.Constrained = (function (schema,postcondition,post_name,__meta,__extmap,__hash){
this.schema = schema;
this.postcondition = postcondition;
this.post_name = post_name;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(schema.core.Constrained.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(schema.core.Constrained.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k50133,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__50137 = k50133;
var G__50137__$1 = (((G__50137 instanceof cljs.core.Keyword))?G__50137.fqn:null);
switch (G__50137__$1) {
case "schema":
return self__.schema;

break;
case "postcondition":
return self__.postcondition;

break;
case "post-name":
return self__.post_name;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k50133,else__4475__auto__);

}
}));

(schema.core.Constrained.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__50138){
var vec__50139 = p__50138;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50139,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50139,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(schema.core.Constrained.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#schema.core.Constrained{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"postcondition","postcondition",-737101222),self__.postcondition],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"post-name","post-name",491455269),self__.post_name],null))], null),self__.__extmap));
}));

(schema.core.Constrained.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__50132){
var self__ = this;
var G__50132__$1 = this;
return (new cljs.core.RecordIter((0),G__50132__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Keyword(null,"postcondition","postcondition",-737101222),new cljs.core.Keyword(null,"post-name","post-name",491455269)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(schema.core.Constrained.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(schema.core.Constrained.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new schema.core.Constrained(self__.schema,self__.postcondition,self__.post_name,self__.__meta,self__.__extmap,self__.__hash));
}));

(schema.core.Constrained.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
}));

(schema.core.Constrained.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (coll__4469__auto__){
return (725895648 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
})(this__4468__auto____$1);
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(schema.core.Constrained.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this50134,other50135){
var self__ = this;
var this50134__$1 = this;
return (((!((other50135 == null)))) && ((((this50134__$1.constructor === other50135.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50134__$1.schema,other50135.schema)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50134__$1.postcondition,other50135.postcondition)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50134__$1.post_name,other50135.post_name)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50134__$1.__extmap,other50135.__extmap)))))))))));
}));

(schema.core.Constrained.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),null,new cljs.core.Keyword(null,"post-name","post-name",491455269),null,new cljs.core.Keyword(null,"postcondition","postcondition",-737101222),null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new schema.core.Constrained(self__.schema,self__.postcondition,self__.post_name,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(schema.core.Constrained.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k50133){
var self__ = this;
var this__4479__auto____$1 = this;
var G__50145 = k50133;
var G__50145__$1 = (((G__50145 instanceof cljs.core.Keyword))?G__50145.fqn:null);
switch (G__50145__$1) {
case "schema":
case "postcondition":
case "post-name":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k50133);

}
}));

(schema.core.Constrained.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__50132){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__50146 = cljs.core.keyword_identical_QMARK_;
var expr__50147 = k__4481__auto__;
if(cljs.core.truth_((pred__50146.cljs$core$IFn$_invoke$arity$2 ? pred__50146.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"schema","schema",-1582001791),expr__50147) : pred__50146.call(null,new cljs.core.Keyword(null,"schema","schema",-1582001791),expr__50147)))){
return (new schema.core.Constrained(G__50132,self__.postcondition,self__.post_name,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__50146.cljs$core$IFn$_invoke$arity$2 ? pred__50146.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"postcondition","postcondition",-737101222),expr__50147) : pred__50146.call(null,new cljs.core.Keyword(null,"postcondition","postcondition",-737101222),expr__50147)))){
return (new schema.core.Constrained(self__.schema,G__50132,self__.post_name,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__50146.cljs$core$IFn$_invoke$arity$2 ? pred__50146.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"post-name","post-name",491455269),expr__50147) : pred__50146.call(null,new cljs.core.Keyword(null,"post-name","post-name",491455269),expr__50147)))){
return (new schema.core.Constrained(self__.schema,self__.postcondition,G__50132,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Constrained(self__.schema,self__.postcondition,self__.post_name,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__50132),null));
}
}
}
}));

(schema.core.Constrained.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"postcondition","postcondition",-737101222),self__.postcondition,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"post-name","post-name",491455269),self__.post_name,null))], null),self__.__extmap));
}));

(schema.core.Constrained.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__50132){
var self__ = this;
var this__4471__auto____$1 = this;
return (new schema.core.Constrained(self__.schema,self__.postcondition,self__.post_name,G__50132,self__.__extmap,self__.__hash));
}));

(schema.core.Constrained.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4478__auto__,(0)),cljs.core._nth(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(schema.core.Constrained.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.Constrained.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.variant.variant_spec.cljs$core$IFn$_invoke$arity$4(schema.spec.core._PLUS_no_precondition_PLUS_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema], null)], null),null,schema.spec.core.precondition(this$__$1,self__.postcondition,(function (p1__50131_SHARP_){
return (new cljs.core.List(null,self__.post_name,(new cljs.core.List(null,p1__50131_SHARP_,null,(1),null)),(2),null));
})));
}));

(schema.core.Constrained.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (new cljs.core.List(null,new cljs.core.Symbol(null,"constrained","constrained",-2057147788,null),(new cljs.core.List(null,schema.core.explain(self__.schema),(new cljs.core.List(null,self__.post_name,null,(1),null)),(2),null)),(3),null));
}));

(schema.core.Constrained.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"schema","schema",58529736,null),new cljs.core.Symbol(null,"postcondition","postcondition",903430305,null),new cljs.core.Symbol(null,"post-name","post-name",2131986796,null)], null);
}));

(schema.core.Constrained.cljs$lang$type = true);

(schema.core.Constrained.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"schema.core/Constrained",null,(1),null));
}));

(schema.core.Constrained.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"schema.core/Constrained");
}));

/**
 * Positional factory function for schema.core/Constrained.
 */
schema.core.__GT_Constrained = (function schema$core$__GT_Constrained(schema__$1,postcondition,post_name){
return (new schema.core.Constrained(schema__$1,postcondition,post_name,null,null,null));
});

/**
 * Factory function for schema.core/Constrained, taking a map of keywords to field values.
 */
schema.core.map__GT_Constrained = (function schema$core$map__GT_Constrained(G__50136){
var extmap__4512__auto__ = (function (){var G__50151 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__50136,new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"postcondition","postcondition",-737101222),new cljs.core.Keyword(null,"post-name","post-name",491455269)], 0));
if(cljs.core.record_QMARK_(G__50136)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__50151);
} else {
return G__50151;
}
})();
return (new schema.core.Constrained(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(G__50136),new cljs.core.Keyword(null,"postcondition","postcondition",-737101222).cljs$core$IFn$_invoke$arity$1(G__50136),new cljs.core.Keyword(null,"post-name","post-name",491455269).cljs$core$IFn$_invoke$arity$1(G__50136),null,cljs.core.not_empty(extmap__4512__auto__),null));
});

/**
 * A schema with an additional post-condition.  Differs from `conditional`
 * with a single schema, in that the predicate checked *after* the main
 * schema.  This can lead to better error messages, and is often better
 * suited for coercion.
 */
schema.core.constrained = (function schema$core$constrained(var_args){
var G__50156 = arguments.length;
switch (G__50156) {
case 2:
return schema.core.constrained.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return schema.core.constrained.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(schema.core.constrained.cljs$core$IFn$_invoke$arity$2 = (function (s,p_QMARK_){
return schema.core.constrained.cljs$core$IFn$_invoke$arity$3(s,p_QMARK_,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(schema.utils.fn_name(p_QMARK_)));
}));

(schema.core.constrained.cljs$core$IFn$_invoke$arity$3 = (function (s,p_QMARK_,pred_name){
if(cljs.core.ifn_QMARK_(p_QMARK_)){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Not a function: %s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p_QMARK_], 0))));
}

return (new schema.core.Constrained(s,p_QMARK_,pred_name,null,null,null));
}));

(schema.core.constrained.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {schema.core.HasPrecondition}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
 * @implements {schema.spec.core.CoreSpec}
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
schema.core.Both = (function (schemas,__meta,__extmap,__hash){
this.schemas = schemas;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(schema.core.Both.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(schema.core.Both.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k50163,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__50175 = k50163;
var G__50175__$1 = (((G__50175 instanceof cljs.core.Keyword))?G__50175.fqn:null);
switch (G__50175__$1) {
case "schemas":
return self__.schemas;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k50163,else__4475__auto__);

}
}));

(schema.core.Both.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__50177){
var vec__50178 = p__50177;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50178,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50178,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(schema.core.Both.prototype.schema$spec$core$CoreSpec$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.Both.prototype.schema$spec$core$CoreSpec$subschemas$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.schemas;
}));

(schema.core.Both.prototype.schema$spec$core$CoreSpec$checker$arity$2 = (function (this$,params){
var self__ = this;
var this$__$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (f,t){
return (function (x){
var tx = (t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(x) : t.call(null,x));
if(schema.utils.error_QMARK_(tx)){
return tx;
} else {
var G__50185 = (function (){var or__4223__auto__ = tx;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return x;
}
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__50185) : f.call(null,G__50185));
}
});
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__50161_SHARP_){
return schema.spec.core.sub_checker(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),p1__50161_SHARP_], null),params);
}),cljs.core.reverse(self__.schemas)));
}));

(schema.core.Both.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#schema.core.Both{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schemas","schemas",575070579),self__.schemas],null))], null),self__.__extmap));
}));

(schema.core.Both.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__50162){
var self__ = this;
var G__50162__$1 = this;
return (new cljs.core.RecordIter((0),G__50162__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schemas","schemas",575070579)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(schema.core.Both.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(schema.core.Both.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new schema.core.Both(self__.schemas,self__.__meta,self__.__extmap,self__.__hash));
}));

(schema.core.Both.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(schema.core.Both.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (coll__4469__auto__){
return (1189778852 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
})(this__4468__auto____$1);
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(schema.core.Both.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this50164,other50165){
var self__ = this;
var this50164__$1 = this;
return (((!((other50165 == null)))) && ((((this50164__$1.constructor === other50165.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50164__$1.schemas,other50165.schemas)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50164__$1.__extmap,other50165.__extmap)))))));
}));

(schema.core.Both.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schemas","schemas",575070579),null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new schema.core.Both(self__.schemas,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(schema.core.Both.prototype.schema$core$HasPrecondition$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.Both.prototype.schema$core$HasPrecondition$precondition$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.every_pred,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(schema.core.precondition,schema.core.spec),self__.schemas));
}));

(schema.core.Both.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k50163){
var self__ = this;
var this__4479__auto____$1 = this;
var G__50189 = k50163;
var G__50189__$1 = (((G__50189 instanceof cljs.core.Keyword))?G__50189.fqn:null);
switch (G__50189__$1) {
case "schemas":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k50163);

}
}));

(schema.core.Both.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__50162){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__50191 = cljs.core.keyword_identical_QMARK_;
var expr__50192 = k__4481__auto__;
if(cljs.core.truth_((pred__50191.cljs$core$IFn$_invoke$arity$2 ? pred__50191.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"schemas","schemas",575070579),expr__50192) : pred__50191.call(null,new cljs.core.Keyword(null,"schemas","schemas",575070579),expr__50192)))){
return (new schema.core.Both(G__50162,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Both(self__.schemas,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__50162),null));
}
}));

(schema.core.Both.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"schemas","schemas",575070579),self__.schemas,null))], null),self__.__extmap));
}));

(schema.core.Both.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__50162){
var self__ = this;
var this__4471__auto____$1 = this;
return (new schema.core.Both(self__.schemas,G__50162,self__.__extmap,self__.__hash));
}));

(schema.core.Both.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4478__auto__,(0)),cljs.core._nth(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(schema.core.Both.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.Both.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1;
}));

(schema.core.Both.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.cons(new cljs.core.Symbol(null,"both","both",1246882687,null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(schema.core.explain,self__.schemas));
}));

(schema.core.Both.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"schemas","schemas",-2079365190,null)], null);
}));

(schema.core.Both.cljs$lang$type = true);

(schema.core.Both.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"schema.core/Both",null,(1),null));
}));

(schema.core.Both.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"schema.core/Both");
}));

/**
 * Positional factory function for schema.core/Both.
 */
schema.core.__GT_Both = (function schema$core$__GT_Both(schemas){
return (new schema.core.Both(schemas,null,null,null));
});

/**
 * Factory function for schema.core/Both, taking a map of keywords to field values.
 */
schema.core.map__GT_Both = (function schema$core$map__GT_Both(G__50168){
var extmap__4512__auto__ = (function (){var G__50200 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__50168,new cljs.core.Keyword(null,"schemas","schemas",575070579));
if(cljs.core.record_QMARK_(G__50168)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__50200);
} else {
return G__50200;
}
})();
return (new schema.core.Both(new cljs.core.Keyword(null,"schemas","schemas",575070579).cljs$core$IFn$_invoke$arity$1(G__50168),null,cljs.core.not_empty(extmap__4512__auto__),null));
});

/**
 * A value that must satisfy every schema in schemas.
 * 
 * DEPRECATED: prefer 'conditional' with a single condition
 * instead, or `constrained`.
 * 
 * When used with coercion, coerces each schema in sequence.
 */
schema.core.both = (function schema$core$both(var_args){
var args__4835__auto__ = [];
var len__4829__auto___50867 = arguments.length;
var i__4830__auto___50868 = (0);
while(true){
if((i__4830__auto___50868 < len__4829__auto___50867)){
args__4835__auto__.push((arguments[i__4830__auto___50868]));

var G__50869 = (i__4830__auto___50868 + (1));
i__4830__auto___50868 = G__50869;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return schema.core.both.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(schema.core.both.cljs$core$IFn$_invoke$arity$variadic = (function (schemas){
return (new schema.core.Both(schemas,null,null,null));
}));

(schema.core.both.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(schema.core.both.cljs$lang$applyTo = (function (seq50201){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50201));
}));

/**
 * if the predicate returns truthy, use the if-schema, otherwise use the else-schema
 */
schema.core.if$ = (function schema$core$if(pred,if_schema,else_schema){
return schema.core.conditional.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pred,if_schema,cljs.core.constantly(true),else_schema], 0));
});
schema.core.var_name = (function schema$core$var_name(v){
var map__50204 = cljs.core.meta(v);
var map__50204__$1 = cljs.core.__destructure_map(map__50204);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50204__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50204__$1,new cljs.core.Keyword(null,"name","name",1843675177));
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
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
schema.core.Recursive = (function (derefable,__meta,__extmap,__hash){
this.derefable = derefable;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(schema.core.Recursive.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(schema.core.Recursive.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k50206,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__50212 = k50206;
var G__50212__$1 = (((G__50212 instanceof cljs.core.Keyword))?G__50212.fqn:null);
switch (G__50212__$1) {
case "derefable":
return self__.derefable;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k50206,else__4475__auto__);

}
}));

(schema.core.Recursive.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__50213){
var vec__50215 = p__50213;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50215,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50215,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(schema.core.Recursive.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#schema.core.Recursive{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"derefable","derefable",377265868),self__.derefable],null))], null),self__.__extmap));
}));

(schema.core.Recursive.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__50205){
var self__ = this;
var G__50205__$1 = this;
return (new cljs.core.RecordIter((0),G__50205__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"derefable","derefable",377265868)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(schema.core.Recursive.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(schema.core.Recursive.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new schema.core.Recursive(self__.derefable,self__.__meta,self__.__extmap,self__.__hash));
}));

(schema.core.Recursive.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(schema.core.Recursive.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (coll__4469__auto__){
return (1521498755 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
})(this__4468__auto____$1);
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(schema.core.Recursive.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this50207,other50208){
var self__ = this;
var this50207__$1 = this;
return (((!((other50208 == null)))) && ((((this50207__$1.constructor === other50208.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50207__$1.derefable,other50208.derefable)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50207__$1.__extmap,other50208.__extmap)))))));
}));

(schema.core.Recursive.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"derefable","derefable",377265868),null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new schema.core.Recursive(self__.derefable,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(schema.core.Recursive.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k50206){
var self__ = this;
var this__4479__auto____$1 = this;
var G__50228 = k50206;
var G__50228__$1 = (((G__50228 instanceof cljs.core.Keyword))?G__50228.fqn:null);
switch (G__50228__$1) {
case "derefable":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k50206);

}
}));

(schema.core.Recursive.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__50205){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__50231 = cljs.core.keyword_identical_QMARK_;
var expr__50232 = k__4481__auto__;
if(cljs.core.truth_((pred__50231.cljs$core$IFn$_invoke$arity$2 ? pred__50231.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"derefable","derefable",377265868),expr__50232) : pred__50231.call(null,new cljs.core.Keyword(null,"derefable","derefable",377265868),expr__50232)))){
return (new schema.core.Recursive(G__50205,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Recursive(self__.derefable,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__50205),null));
}
}));

(schema.core.Recursive.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"derefable","derefable",377265868),self__.derefable,null))], null),self__.__extmap));
}));

(schema.core.Recursive.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__50205){
var self__ = this;
var this__4471__auto____$1 = this;
return (new schema.core.Recursive(self__.derefable,G__50205,self__.__extmap,self__.__hash));
}));

(schema.core.Recursive.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4478__auto__,(0)),cljs.core._nth(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(schema.core.Recursive.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.Recursive.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.variant.variant_spec.cljs$core$IFn$_invoke$arity$2(schema.spec.core._PLUS_no_precondition_PLUS_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.deref(self__.derefable)], null)], null));
}));

(schema.core.Recursive.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (new cljs.core.List(null,new cljs.core.Symbol(null,"recursive","recursive",-1935549897,null),(new cljs.core.List(null,(((self__.derefable instanceof cljs.core.Var))?(new cljs.core.List(null,new cljs.core.Symbol(null,"var","var",870848730,null),(new cljs.core.List(null,schema.core.var_name(self__.derefable),null,(1),null)),(2),null)):new cljs.core.Symbol(null,"...","...",-1926939749,null)),null,(1),null)),(2),null));
}));

(schema.core.Recursive.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"derefable","derefable",2017797395,null)], null);
}));

(schema.core.Recursive.cljs$lang$type = true);

(schema.core.Recursive.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"schema.core/Recursive",null,(1),null));
}));

(schema.core.Recursive.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"schema.core/Recursive");
}));

/**
 * Positional factory function for schema.core/Recursive.
 */
schema.core.__GT_Recursive = (function schema$core$__GT_Recursive(derefable){
return (new schema.core.Recursive(derefable,null,null,null));
});

/**
 * Factory function for schema.core/Recursive, taking a map of keywords to field values.
 */
schema.core.map__GT_Recursive = (function schema$core$map__GT_Recursive(G__50209){
var extmap__4512__auto__ = (function (){var G__50239 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__50209,new cljs.core.Keyword(null,"derefable","derefable",377265868));
if(cljs.core.record_QMARK_(G__50209)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__50239);
} else {
return G__50239;
}
})();
return (new schema.core.Recursive(new cljs.core.Keyword(null,"derefable","derefable",377265868).cljs$core$IFn$_invoke$arity$1(G__50209),null,cljs.core.not_empty(extmap__4512__auto__),null));
});

/**
 * Support for (mutually) recursive schemas by passing a var that points to a schema,
 * e.g (recursive #'ExampleRecursiveSchema).
 */
schema.core.recursive = (function schema$core$recursive(schema__$1){
if((((!((schema__$1 == null))))?(((((schema__$1.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === schema__$1.cljs$core$IDeref$))))?true:(((!schema__$1.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,schema__$1):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,schema__$1))){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Not an IDeref: %s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([schema__$1], 0))));
}

return (new schema.core.Recursive(schema__$1,null,null,null));
});
schema.core.atom_QMARK_ = (function schema$core$atom_QMARK_(x){
if((!((x == null)))){
if((((x.cljs$lang$protocol_mask$partition1$ & (16384))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IAtom$)))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,x);
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
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
schema.core.Atomic = (function (schema,__meta,__extmap,__hash){
this.schema = schema;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(schema.core.Atomic.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(schema.core.Atomic.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k50244,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__50250 = k50244;
var G__50250__$1 = (((G__50250 instanceof cljs.core.Keyword))?G__50250.fqn:null);
switch (G__50250__$1) {
case "schema":
return self__.schema;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k50244,else__4475__auto__);

}
}));

(schema.core.Atomic.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__50251){
var vec__50253 = p__50251;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50253,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50253,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(schema.core.Atomic.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#schema.core.Atomic{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null))], null),self__.__extmap));
}));

(schema.core.Atomic.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__50243){
var self__ = this;
var G__50243__$1 = this;
return (new cljs.core.RecordIter((0),G__50243__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(schema.core.Atomic.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(schema.core.Atomic.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new schema.core.Atomic(self__.schema,self__.__meta,self__.__extmap,self__.__hash));
}));

(schema.core.Atomic.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(schema.core.Atomic.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (coll__4469__auto__){
return (1019346599 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
})(this__4468__auto____$1);
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(schema.core.Atomic.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this50245,other50246){
var self__ = this;
var this50245__$1 = this;
return (((!((other50246 == null)))) && ((((this50245__$1.constructor === other50246.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50245__$1.schema,other50246.schema)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50245__$1.__extmap,other50246.__extmap)))))));
}));

(schema.core.Atomic.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new schema.core.Atomic(self__.schema,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(schema.core.Atomic.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k50244){
var self__ = this;
var this__4479__auto____$1 = this;
var G__50260 = k50244;
var G__50260__$1 = (((G__50260 instanceof cljs.core.Keyword))?G__50260.fqn:null);
switch (G__50260__$1) {
case "schema":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k50244);

}
}));

(schema.core.Atomic.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__50243){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__50261 = cljs.core.keyword_identical_QMARK_;
var expr__50262 = k__4481__auto__;
if(cljs.core.truth_((pred__50261.cljs$core$IFn$_invoke$arity$2 ? pred__50261.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"schema","schema",-1582001791),expr__50262) : pred__50261.call(null,new cljs.core.Keyword(null,"schema","schema",-1582001791),expr__50262)))){
return (new schema.core.Atomic(G__50243,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Atomic(self__.schema,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__50243),null));
}
}));

(schema.core.Atomic.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema,null))], null),self__.__extmap));
}));

(schema.core.Atomic.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__50243){
var self__ = this;
var this__4471__auto____$1 = this;
return (new schema.core.Atomic(self__.schema,G__50243,self__.__extmap,self__.__hash));
}));

(schema.core.Atomic.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4478__auto__,(0)),cljs.core._nth(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(schema.core.Atomic.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.Atomic.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.collection.collection_spec(schema.spec.core.precondition(this$__$1,schema.core.atom_QMARK_,(function (p1__48064__48065__auto__){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"atom?","atom?",-1007535292,null),(new cljs.core.List(null,p1__48064__48065__auto__,null,(1),null)),(2),null));
})),cljs.core.atom,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.spec.collection.one_element(true,self__.schema,(function (item_fn,coll){
var G__50264_50912 = cljs.core.deref(coll);
(item_fn.cljs$core$IFn$_invoke$arity$1 ? item_fn.cljs$core$IFn$_invoke$arity$1(G__50264_50912) : item_fn.call(null,G__50264_50912));

return null;
}))], null),(function (_,xs,___$1){
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.first(xs));
}));
}));

(schema.core.Atomic.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (new cljs.core.List(null,new cljs.core.Symbol(null,"atom","atom",1243487874,null),(new cljs.core.List(null,schema.core.explain(self__.schema),null,(1),null)),(2),null));
}));

(schema.core.Atomic.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"schema","schema",58529736,null)], null);
}));

(schema.core.Atomic.cljs$lang$type = true);

(schema.core.Atomic.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"schema.core/Atomic",null,(1),null));
}));

(schema.core.Atomic.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"schema.core/Atomic");
}));

/**
 * Positional factory function for schema.core/Atomic.
 */
schema.core.__GT_Atomic = (function schema$core$__GT_Atomic(schema__$1){
return (new schema.core.Atomic(schema__$1,null,null,null));
});

/**
 * Factory function for schema.core/Atomic, taking a map of keywords to field values.
 */
schema.core.map__GT_Atomic = (function schema$core$map__GT_Atomic(G__50249){
var extmap__4512__auto__ = (function (){var G__50270 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__50249,new cljs.core.Keyword(null,"schema","schema",-1582001791));
if(cljs.core.record_QMARK_(G__50249)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__50270);
} else {
return G__50270;
}
})();
return (new schema.core.Atomic(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(G__50249),null,cljs.core.not_empty(extmap__4512__auto__),null));
});

/**
 * An atom containing a value matching 'schema'.
 */
schema.core.atom = (function schema$core$atom(schema__$1){
return schema.core.__GT_Atomic(schema__$1);
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
schema.core.RequiredKey = (function (k,__meta,__extmap,__hash){
this.k = k;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(schema.core.RequiredKey.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(schema.core.RequiredKey.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k50275,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__50281 = k50275;
var G__50281__$1 = (((G__50281 instanceof cljs.core.Keyword))?G__50281.fqn:null);
switch (G__50281__$1) {
case "k":
return self__.k;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k50275,else__4475__auto__);

}
}));

(schema.core.RequiredKey.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__50282){
var vec__50283 = p__50282;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50283,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50283,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(schema.core.RequiredKey.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#schema.core.RequiredKey{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"k","k",-2146297393),self__.k],null))], null),self__.__extmap));
}));

(schema.core.RequiredKey.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__50274){
var self__ = this;
var G__50274__$1 = this;
return (new cljs.core.RecordIter((0),G__50274__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"k","k",-2146297393)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(schema.core.RequiredKey.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(schema.core.RequiredKey.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new schema.core.RequiredKey(self__.k,self__.__meta,self__.__extmap,self__.__hash));
}));

(schema.core.RequiredKey.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(schema.core.RequiredKey.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (coll__4469__auto__){
return (-1805575094 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
})(this__4468__auto____$1);
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(schema.core.RequiredKey.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this50276,other50277){
var self__ = this;
var this50276__$1 = this;
return (((!((other50277 == null)))) && ((((this50276__$1.constructor === other50277.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50276__$1.k,other50277.k)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50276__$1.__extmap,other50277.__extmap)))))));
}));

(schema.core.RequiredKey.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"k","k",-2146297393),null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new schema.core.RequiredKey(self__.k,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(schema.core.RequiredKey.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k50275){
var self__ = this;
var this__4479__auto____$1 = this;
var G__50290 = k50275;
var G__50290__$1 = (((G__50290 instanceof cljs.core.Keyword))?G__50290.fqn:null);
switch (G__50290__$1) {
case "k":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k50275);

}
}));

(schema.core.RequiredKey.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__50274){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__50291 = cljs.core.keyword_identical_QMARK_;
var expr__50292 = k__4481__auto__;
if(cljs.core.truth_((pred__50291.cljs$core$IFn$_invoke$arity$2 ? pred__50291.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"k","k",-2146297393),expr__50292) : pred__50291.call(null,new cljs.core.Keyword(null,"k","k",-2146297393),expr__50292)))){
return (new schema.core.RequiredKey(G__50274,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.RequiredKey(self__.k,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__50274),null));
}
}));

(schema.core.RequiredKey.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"k","k",-2146297393),self__.k,null))], null),self__.__extmap));
}));

(schema.core.RequiredKey.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__50274){
var self__ = this;
var this__4471__auto____$1 = this;
return (new schema.core.RequiredKey(self__.k,G__50274,self__.__extmap,self__.__hash));
}));

(schema.core.RequiredKey.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4478__auto__,(0)),cljs.core._nth(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(schema.core.RequiredKey.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null)], null);
}));

(schema.core.RequiredKey.cljs$lang$type = true);

(schema.core.RequiredKey.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"schema.core/RequiredKey",null,(1),null));
}));

(schema.core.RequiredKey.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"schema.core/RequiredKey");
}));

/**
 * Positional factory function for schema.core/RequiredKey.
 */
schema.core.__GT_RequiredKey = (function schema$core$__GT_RequiredKey(k){
return (new schema.core.RequiredKey(k,null,null,null));
});

/**
 * Factory function for schema.core/RequiredKey, taking a map of keywords to field values.
 */
schema.core.map__GT_RequiredKey = (function schema$core$map__GT_RequiredKey(G__50278){
var extmap__4512__auto__ = (function (){var G__50294 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__50278,new cljs.core.Keyword(null,"k","k",-2146297393));
if(cljs.core.record_QMARK_(G__50278)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__50294);
} else {
return G__50294;
}
})();
return (new schema.core.RequiredKey(new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(G__50278),null,cljs.core.not_empty(extmap__4512__auto__),null));
});

/**
 * A required key in a map
 */
schema.core.required_key = (function schema$core$required_key(k){
if((k instanceof cljs.core.Keyword)){
return k;
} else {
return (new schema.core.RequiredKey(k,null,null,null));
}
});
schema.core.required_key_QMARK_ = (function schema$core$required_key_QMARK_(ks){
return (((ks instanceof cljs.core.Keyword)) || ((ks instanceof schema.core.RequiredKey)));
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
schema.core.OptionalKey = (function (k,__meta,__extmap,__hash){
this.k = k;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(schema.core.OptionalKey.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(schema.core.OptionalKey.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k50296,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__50300 = k50296;
var G__50300__$1 = (((G__50300 instanceof cljs.core.Keyword))?G__50300.fqn:null);
switch (G__50300__$1) {
case "k":
return self__.k;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k50296,else__4475__auto__);

}
}));

(schema.core.OptionalKey.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__50301){
var vec__50302 = p__50301;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50302,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50302,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(schema.core.OptionalKey.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#schema.core.OptionalKey{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"k","k",-2146297393),self__.k],null))], null),self__.__extmap));
}));

(schema.core.OptionalKey.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__50295){
var self__ = this;
var G__50295__$1 = this;
return (new cljs.core.RecordIter((0),G__50295__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"k","k",-2146297393)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(schema.core.OptionalKey.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(schema.core.OptionalKey.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new schema.core.OptionalKey(self__.k,self__.__meta,self__.__extmap,self__.__hash));
}));

(schema.core.OptionalKey.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(schema.core.OptionalKey.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (coll__4469__auto__){
return (-1508333161 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
})(this__4468__auto____$1);
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(schema.core.OptionalKey.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this50297,other50298){
var self__ = this;
var this50297__$1 = this;
return (((!((other50298 == null)))) && ((((this50297__$1.constructor === other50298.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50297__$1.k,other50298.k)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50297__$1.__extmap,other50298.__extmap)))))));
}));

(schema.core.OptionalKey.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"k","k",-2146297393),null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new schema.core.OptionalKey(self__.k,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(schema.core.OptionalKey.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k50296){
var self__ = this;
var this__4479__auto____$1 = this;
var G__50310 = k50296;
var G__50310__$1 = (((G__50310 instanceof cljs.core.Keyword))?G__50310.fqn:null);
switch (G__50310__$1) {
case "k":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k50296);

}
}));

(schema.core.OptionalKey.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__50295){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__50311 = cljs.core.keyword_identical_QMARK_;
var expr__50312 = k__4481__auto__;
if(cljs.core.truth_((pred__50311.cljs$core$IFn$_invoke$arity$2 ? pred__50311.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"k","k",-2146297393),expr__50312) : pred__50311.call(null,new cljs.core.Keyword(null,"k","k",-2146297393),expr__50312)))){
return (new schema.core.OptionalKey(G__50295,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.OptionalKey(self__.k,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__50295),null));
}
}));

(schema.core.OptionalKey.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"k","k",-2146297393),self__.k,null))], null),self__.__extmap));
}));

(schema.core.OptionalKey.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__50295){
var self__ = this;
var this__4471__auto____$1 = this;
return (new schema.core.OptionalKey(self__.k,G__50295,self__.__extmap,self__.__hash));
}));

(schema.core.OptionalKey.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4478__auto__,(0)),cljs.core._nth(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(schema.core.OptionalKey.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null)], null);
}));

(schema.core.OptionalKey.cljs$lang$type = true);

(schema.core.OptionalKey.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"schema.core/OptionalKey",null,(1),null));
}));

(schema.core.OptionalKey.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"schema.core/OptionalKey");
}));

/**
 * Positional factory function for schema.core/OptionalKey.
 */
schema.core.__GT_OptionalKey = (function schema$core$__GT_OptionalKey(k){
return (new schema.core.OptionalKey(k,null,null,null));
});

/**
 * Factory function for schema.core/OptionalKey, taking a map of keywords to field values.
 */
schema.core.map__GT_OptionalKey = (function schema$core$map__GT_OptionalKey(G__50299){
var extmap__4512__auto__ = (function (){var G__50319 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__50299,new cljs.core.Keyword(null,"k","k",-2146297393));
if(cljs.core.record_QMARK_(G__50299)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__50319);
} else {
return G__50319;
}
})();
return (new schema.core.OptionalKey(new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(G__50299),null,cljs.core.not_empty(extmap__4512__auto__),null));
});

/**
 * An optional key in a map
 */
schema.core.optional_key = (function schema$core$optional_key(k){
return (new schema.core.OptionalKey(k,null,null,null));
});
schema.core.optional_key_QMARK_ = (function schema$core$optional_key_QMARK_(ks){
return (ks instanceof schema.core.OptionalKey);
});
schema.core.explicit_schema_key = (function schema$core$explicit_schema_key(ks){
if((ks instanceof cljs.core.Keyword)){
return ks;
} else {
if((ks instanceof schema.core.RequiredKey)){
return ks.k;
} else {
if(schema.core.optional_key_QMARK_(ks)){
return ks.k;
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Bad explicit key: %s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ks], 0))));

}
}
}
});
schema.core.specific_key_QMARK_ = (function schema$core$specific_key_QMARK_(ks){
return ((schema.core.required_key_QMARK_(ks)) || (schema.core.optional_key_QMARK_(ks)));
});
schema.core.map_entry_ctor = (function schema$core$map_entry_ctor(p__50322){
var vec__50323 = p__50322;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50323,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50323,(1),null);
var coll = vec__50323;
return (new cljs.core.MapEntry(k,v,null));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
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
schema.core.MapEntry = (function (key_schema,val_schema,__meta,__extmap,__hash){
this.key_schema = key_schema;
this.val_schema = val_schema;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(schema.core.MapEntry.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(schema.core.MapEntry.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k50328,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__50333 = k50328;
var G__50333__$1 = (((G__50333 instanceof cljs.core.Keyword))?G__50333.fqn:null);
switch (G__50333__$1) {
case "key-schema":
return self__.key_schema;

break;
case "val-schema":
return self__.val_schema;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k50328,else__4475__auto__);

}
}));

(schema.core.MapEntry.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__50338){
var vec__50339 = p__50338;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50339,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50339,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(schema.core.MapEntry.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#schema.core.MapEntry{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"key-schema","key-schema",-1096660726),self__.key_schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"val-schema","val-schema",-2014773619),self__.val_schema],null))], null),self__.__extmap));
}));

(schema.core.MapEntry.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__50327){
var self__ = this;
var G__50327__$1 = this;
return (new cljs.core.RecordIter((0),G__50327__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key-schema","key-schema",-1096660726),new cljs.core.Keyword(null,"val-schema","val-schema",-2014773619)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(schema.core.MapEntry.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(schema.core.MapEntry.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new schema.core.MapEntry(self__.key_schema,self__.val_schema,self__.__meta,self__.__extmap,self__.__hash));
}));

(schema.core.MapEntry.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(schema.core.MapEntry.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (coll__4469__auto__){
return (-804356212 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
})(this__4468__auto____$1);
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(schema.core.MapEntry.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this50329,other50330){
var self__ = this;
var this50329__$1 = this;
return (((!((other50330 == null)))) && ((((this50329__$1.constructor === other50330.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50329__$1.key_schema,other50330.key_schema)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50329__$1.val_schema,other50330.val_schema)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50329__$1.__extmap,other50330.__extmap)))))))));
}));

(schema.core.MapEntry.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key-schema","key-schema",-1096660726),null,new cljs.core.Keyword(null,"val-schema","val-schema",-2014773619),null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new schema.core.MapEntry(self__.key_schema,self__.val_schema,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(schema.core.MapEntry.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k50328){
var self__ = this;
var this__4479__auto____$1 = this;
var G__50343 = k50328;
var G__50343__$1 = (((G__50343 instanceof cljs.core.Keyword))?G__50343.fqn:null);
switch (G__50343__$1) {
case "key-schema":
case "val-schema":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k50328);

}
}));

(schema.core.MapEntry.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__50327){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__50345 = cljs.core.keyword_identical_QMARK_;
var expr__50346 = k__4481__auto__;
if(cljs.core.truth_((pred__50345.cljs$core$IFn$_invoke$arity$2 ? pred__50345.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"key-schema","key-schema",-1096660726),expr__50346) : pred__50345.call(null,new cljs.core.Keyword(null,"key-schema","key-schema",-1096660726),expr__50346)))){
return (new schema.core.MapEntry(G__50327,self__.val_schema,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__50345.cljs$core$IFn$_invoke$arity$2 ? pred__50345.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"val-schema","val-schema",-2014773619),expr__50346) : pred__50345.call(null,new cljs.core.Keyword(null,"val-schema","val-schema",-2014773619),expr__50346)))){
return (new schema.core.MapEntry(self__.key_schema,G__50327,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.MapEntry(self__.key_schema,self__.val_schema,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__50327),null));
}
}
}));

(schema.core.MapEntry.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"key-schema","key-schema",-1096660726),self__.key_schema,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"val-schema","val-schema",-2014773619),self__.val_schema,null))], null),self__.__extmap));
}));

(schema.core.MapEntry.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__50327){
var self__ = this;
var this__4471__auto____$1 = this;
return (new schema.core.MapEntry(self__.key_schema,self__.val_schema,G__50327,self__.__extmap,self__.__hash));
}));

(schema.core.MapEntry.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4478__auto__,(0)),cljs.core._nth(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(schema.core.MapEntry.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.MapEntry.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.collection.collection_spec(schema.spec.core._PLUS_no_precondition_PLUS_,schema.core.map_entry_ctor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.spec.collection.one_element(true,self__.key_schema,(function (item_fn,e){
var G__50350_50950 = cljs.core.key(e);
(item_fn.cljs$core$IFn$_invoke$arity$1 ? item_fn.cljs$core$IFn$_invoke$arity$1(G__50350_50950) : item_fn.call(null,G__50350_50950));

return e;
})),schema.spec.collection.one_element(true,self__.val_schema,(function (item_fn,e){
var G__50351_50951 = cljs.core.val(e);
(item_fn.cljs$core$IFn$_invoke$arity$1 ? item_fn.cljs$core$IFn$_invoke$arity$1(G__50351_50951) : item_fn.call(null,G__50351_50951));

return null;
}))], null),(function (p__50352,p__50353,_){
var vec__50354 = p__50352;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50354,(0),null);
var vec__50357 = p__50353;
var xk = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50357,(0),null);
var xv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50357,(1),null);
var temp__5751__auto__ = schema.utils.error_val(xk);
if(cljs.core.truth_(temp__5751__auto__)){
var k_err = temp__5751__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k_err,new cljs.core.Symbol(null,"invalid-key","invalid-key",-1461682245,null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,schema.utils.error_val(xv)], null);
}
}));
}));

(schema.core.MapEntry.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (new cljs.core.List(null,new cljs.core.Symbol(null,"map-entry","map-entry",329617471,null),(new cljs.core.List(null,schema.core.explain(self__.key_schema),(new cljs.core.List(null,schema.core.explain(self__.val_schema),null,(1),null)),(2),null)),(3),null));
}));

(schema.core.MapEntry.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"key-schema","key-schema",543870801,null),new cljs.core.Symbol(null,"val-schema","val-schema",-374242092,null)], null);
}));

(schema.core.MapEntry.cljs$lang$type = true);

(schema.core.MapEntry.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"schema.core/MapEntry",null,(1),null));
}));

(schema.core.MapEntry.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"schema.core/MapEntry");
}));

/**
 * Positional factory function for schema.core/MapEntry.
 */
schema.core.__GT_MapEntry = (function schema$core$__GT_MapEntry(key_schema,val_schema){
return (new schema.core.MapEntry(key_schema,val_schema,null,null,null));
});

/**
 * Factory function for schema.core/MapEntry, taking a map of keywords to field values.
 */
schema.core.map__GT_MapEntry = (function schema$core$map__GT_MapEntry(G__50332){
var extmap__4512__auto__ = (function (){var G__50360 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__50332,new cljs.core.Keyword(null,"key-schema","key-schema",-1096660726),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"val-schema","val-schema",-2014773619)], 0));
if(cljs.core.record_QMARK_(G__50332)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__50360);
} else {
return G__50360;
}
})();
return (new schema.core.MapEntry(new cljs.core.Keyword(null,"key-schema","key-schema",-1096660726).cljs$core$IFn$_invoke$arity$1(G__50332),new cljs.core.Keyword(null,"val-schema","val-schema",-2014773619).cljs$core$IFn$_invoke$arity$1(G__50332),null,cljs.core.not_empty(extmap__4512__auto__),null));
});

schema.core.map_entry = (function schema$core$map_entry(key_schema,val_schema){
return (new schema.core.MapEntry(key_schema,val_schema,null,null,null));
});
schema.core.find_extra_keys_schema = (function schema$core$find_extra_keys_schema(map_schema){
var key_schemata = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(schema.core.specific_key_QMARK_,cljs.core.keys(map_schema));
if((cljs.core.count(key_schemata) < (2))){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("More than one non-optional/required key schemata: %s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.vec(key_schemata)], 0))));
}

return cljs.core.first(key_schemata);
});
schema.core.explain_kspec = (function schema$core$explain_kspec(kspec){
if(schema.core.specific_key_QMARK_(kspec)){
if((kspec instanceof cljs.core.Keyword)){
return kspec;
} else {
return (new cljs.core.List(null,((schema.core.required_key_QMARK_(kspec))?new cljs.core.Symbol(null,"required-key","required-key",1624616412,null):((schema.core.optional_key_QMARK_(kspec))?new cljs.core.Symbol(null,"optional-key","optional-key",988406145,null):null)),(new cljs.core.List(null,schema.core.explicit_schema_key(kspec),null,(1),null)),(2),null));
}
} else {
return schema.core.explain(kspec);
}
});
schema.core.map_elements = (function schema$core$map_elements(this$){
var extra_keys_schema = schema.core.find_extra_keys_schema(this$);
var duplicate_keys_50952 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(schema.core.explain_kspec,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__50361_SHARP_){
return (cljs.core.count(p1__50361_SHARP_) > (1));
}),cljs.core.vals(cljs.core.group_by(schema.core.explicit_schema_key,cljs.core.keys(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(this$,extra_keys_schema)))))));
if(cljs.core.empty_QMARK_(duplicate_keys_50952)){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Schema has multiple variants of the same explicit key: %s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([duplicate_keys_50952], 0))));
}

var without_extra_keys_schema = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(this$,extra_keys_schema);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var iter__4622__auto__ = (function schema$core$map_elements_$_iter__50364(s__50365){
return (new cljs.core.LazySeq(null,(function (){
var s__50365__$1 = s__50365;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__50365__$1);
if(temp__5753__auto__){
var s__50365__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__50365__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__50365__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__50367 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__50366 = (0);
while(true){
if((i__50366 < size__4621__auto__)){
var vec__50368 = cljs.core._nth(c__4620__auto__,i__50366);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50368,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50368,(1),null);
cljs.core.chunk_append(b__50367,(function (){var rk = schema.core.explicit_schema_key(k);
var required_QMARK_ = schema.core.required_key_QMARK_(k);
return schema.spec.collection.one_element(required_QMARK_,schema.core.map_entry(schema.core.eq(rk),v),((function (i__50366,rk,required_QMARK_,vec__50368,k,v,c__4620__auto__,size__4621__auto__,b__50367,s__50365__$2,temp__5753__auto__,without_extra_keys_schema,extra_keys_schema){
return (function (item_fn,m){
var e = cljs.core.find(m,rk);
if(cljs.core.truth_(e)){
(item_fn.cljs$core$IFn$_invoke$arity$1 ? item_fn.cljs$core$IFn$_invoke$arity$1(e) : item_fn.call(null,e));
} else {
if(required_QMARK_){
var G__50371_50954 = schema.utils.error(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rk,new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null)], null));
(item_fn.cljs$core$IFn$_invoke$arity$1 ? item_fn.cljs$core$IFn$_invoke$arity$1(G__50371_50954) : item_fn.call(null,G__50371_50954));
} else {
}
}

if(cljs.core.truth_(e)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,rk);
} else {
return m;
}
});})(i__50366,rk,required_QMARK_,vec__50368,k,v,c__4620__auto__,size__4621__auto__,b__50367,s__50365__$2,temp__5753__auto__,without_extra_keys_schema,extra_keys_schema))
);
})());

var G__50956 = (i__50366 + (1));
i__50366 = G__50956;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50367),schema$core$map_elements_$_iter__50364(cljs.core.chunk_rest(s__50365__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50367),null);
}
} else {
var vec__50373 = cljs.core.first(s__50365__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50373,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50373,(1),null);
return cljs.core.cons((function (){var rk = schema.core.explicit_schema_key(k);
var required_QMARK_ = schema.core.required_key_QMARK_(k);
return schema.spec.collection.one_element(required_QMARK_,schema.core.map_entry(schema.core.eq(rk),v),((function (rk,required_QMARK_,vec__50373,k,v,s__50365__$2,temp__5753__auto__,without_extra_keys_schema,extra_keys_schema){
return (function (item_fn,m){
var e = cljs.core.find(m,rk);
if(cljs.core.truth_(e)){
(item_fn.cljs$core$IFn$_invoke$arity$1 ? item_fn.cljs$core$IFn$_invoke$arity$1(e) : item_fn.call(null,e));
} else {
if(required_QMARK_){
var G__50378_50960 = schema.utils.error(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rk,new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null)], null));
(item_fn.cljs$core$IFn$_invoke$arity$1 ? item_fn.cljs$core$IFn$_invoke$arity$1(G__50378_50960) : item_fn.call(null,G__50378_50960));
} else {
}
}

if(cljs.core.truth_(e)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,rk);
} else {
return m;
}
});})(rk,required_QMARK_,vec__50373,k,v,s__50365__$2,temp__5753__auto__,without_extra_keys_schema,extra_keys_schema))
);
})(),schema$core$map_elements_$_iter__50364(cljs.core.rest(s__50365__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(without_extra_keys_schema);
})(),(cljs.core.truth_(extra_keys_schema)?(function (){var specific_keys = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(schema.core.explicit_schema_key,cljs.core.keys(without_extra_keys_schema)));
var vec__50379 = cljs.core.find(this$,extra_keys_schema);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50379,(0),null);
var vs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50379,(1),null);
var restricted_ks = schema.core.constrained.cljs$core$IFn$_invoke$arity$2(ks,(function (p1__50362_SHARP_){
return (!(cljs.core.contains_QMARK_(specific_keys,p1__50362_SHARP_)));
}));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.spec.collection.all_elements(schema.core.map_entry(restricted_ks,vs))], null);
})():null));
});
schema.core.map_error = (function schema$core$map_error(){
return (function (_,elts,extra){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(schema.utils.error_val,elts),(function (){var iter__4622__auto__ = (function schema$core$map_error_$_iter__50382(s__50383){
return (new cljs.core.LazySeq(null,(function (){
var s__50383__$1 = s__50383;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__50383__$1);
if(temp__5753__auto__){
var s__50383__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__50383__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__50383__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__50385 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__50384 = (0);
while(true){
if((i__50384 < size__4621__auto__)){
var vec__50386 = cljs.core._nth(c__4620__auto__,i__50384);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50386,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50386,(1),null);
cljs.core.chunk_append(b__50385,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.Symbol(null,"disallowed-key","disallowed-key",-1877785633,null)], null));

var G__50961 = (i__50384 + (1));
i__50384 = G__50961;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50385),schema$core$map_error_$_iter__50382(cljs.core.chunk_rest(s__50383__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50385),null);
}
} else {
var vec__50389 = cljs.core.first(s__50383__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50389,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50389,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.Symbol(null,"disallowed-key","disallowed-key",-1877785633,null)], null),schema$core$map_error_$_iter__50382(cljs.core.rest(s__50383__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(extra);
})()));
});
});
schema.core.map_spec = (function schema$core$map_spec(this$){
return schema.spec.collection.collection_spec(schema.spec.core.precondition(this$,cljs.core.map_QMARK_,(function (p1__48064__48065__auto__){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"map?","map?",-1780568534,null),(new cljs.core.List(null,p1__48064__48065__auto__,null,(1),null)),(2),null));
})),(function (p1__50392_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,p1__50392_SHARP_);
}),schema.core.map_elements(this$),schema.core.map_error());
});
schema.core.map_explain = (function schema$core$map_explain(this$){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4622__auto__ = (function schema$core$map_explain_$_iter__50396(s__50397){
return (new cljs.core.LazySeq(null,(function (){
var s__50397__$1 = s__50397;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__50397__$1);
if(temp__5753__auto__){
var s__50397__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__50397__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__50397__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__50399 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__50398 = (0);
while(true){
if((i__50398 < size__4621__auto__)){
var vec__50400 = cljs.core._nth(c__4620__auto__,i__50398);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50400,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50400,(1),null);
cljs.core.chunk_append(b__50399,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explain_kspec(k),schema.core.explain(v)], null));

var G__50962 = (i__50398 + (1));
i__50398 = G__50962;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50399),schema$core$map_explain_$_iter__50396(cljs.core.chunk_rest(s__50397__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50399),null);
}
} else {
var vec__50403 = cljs.core.first(s__50397__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50403,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50403,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explain_kspec(k),schema.core.explain(v)], null),schema$core$map_explain_$_iter__50396(cljs.core.rest(s__50397__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(this$);
})());
});
(cljs.core.PersistentArrayMap.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentArrayMap.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var this$__$1 = this;
return schema.core.map_spec(this$__$1);
}));

(cljs.core.PersistentArrayMap.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var this$__$1 = this;
return schema.core.map_explain(this$__$1);
}));

(cljs.core.PersistentHashMap.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentHashMap.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var this$__$1 = this;
return schema.core.map_spec(this$__$1);
}));

(cljs.core.PersistentHashMap.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var this$__$1 = this;
return schema.core.map_explain(this$__$1);
}));
(cljs.core.PersistentHashSet.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentHashSet.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(this$__$1),(1))){
} else {
throw (new Error(schema.utils.format_STAR_("Set schema must have exactly one element")));
}

return schema.spec.collection.collection_spec(schema.spec.core.precondition(this$__$1,cljs.core.set_QMARK_,(function (p1__48064__48065__auto__){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"set?","set?",1636014792,null),(new cljs.core.List(null,p1__48064__48065__auto__,null,(1),null)),(2),null));
})),cljs.core.set,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.spec.collection.all_elements(cljs.core.first(this$__$1))], null),(function (_,xs,___$1){
return cljs.core.set(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(schema.utils.error_val,xs));
}));
}));

(cljs.core.PersistentHashSet.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.set(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explain(cljs.core.first(this$__$1))], null));
}));
schema.core.queue_QMARK_ = (function schema$core$queue_QMARK_(x){
return (x instanceof cljs.core.PersistentQueue);
});
schema.core.as_queue = (function schema$core$as_queue(col){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,cljs.core.PersistentQueue.EMPTY,col);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
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
schema.core.Queue = (function (schema,__meta,__extmap,__hash){
this.schema = schema;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(schema.core.Queue.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(schema.core.Queue.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k50414,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__50418 = k50414;
var G__50418__$1 = (((G__50418 instanceof cljs.core.Keyword))?G__50418.fqn:null);
switch (G__50418__$1) {
case "schema":
return self__.schema;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k50414,else__4475__auto__);

}
}));

(schema.core.Queue.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__50419){
var vec__50420 = p__50419;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50420,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50420,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(schema.core.Queue.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#schema.core.Queue{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null))], null),self__.__extmap));
}));

(schema.core.Queue.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__50413){
var self__ = this;
var G__50413__$1 = this;
return (new cljs.core.RecordIter((0),G__50413__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(schema.core.Queue.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(schema.core.Queue.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new schema.core.Queue(self__.schema,self__.__meta,self__.__extmap,self__.__hash));
}));

(schema.core.Queue.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(schema.core.Queue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (coll__4469__auto__){
return (-1542973436 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
})(this__4468__auto____$1);
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(schema.core.Queue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this50415,other50416){
var self__ = this;
var this50415__$1 = this;
return (((!((other50416 == null)))) && ((((this50415__$1.constructor === other50416.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50415__$1.schema,other50416.schema)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50415__$1.__extmap,other50416.__extmap)))))));
}));

(schema.core.Queue.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new schema.core.Queue(self__.schema,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(schema.core.Queue.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k50414){
var self__ = this;
var this__4479__auto____$1 = this;
var G__50423 = k50414;
var G__50423__$1 = (((G__50423 instanceof cljs.core.Keyword))?G__50423.fqn:null);
switch (G__50423__$1) {
case "schema":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k50414);

}
}));

(schema.core.Queue.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__50413){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__50424 = cljs.core.keyword_identical_QMARK_;
var expr__50425 = k__4481__auto__;
if(cljs.core.truth_((pred__50424.cljs$core$IFn$_invoke$arity$2 ? pred__50424.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"schema","schema",-1582001791),expr__50425) : pred__50424.call(null,new cljs.core.Keyword(null,"schema","schema",-1582001791),expr__50425)))){
return (new schema.core.Queue(G__50413,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Queue(self__.schema,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__50413),null));
}
}));

(schema.core.Queue.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema,null))], null),self__.__extmap));
}));

(schema.core.Queue.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__50413){
var self__ = this;
var this__4471__auto____$1 = this;
return (new schema.core.Queue(self__.schema,G__50413,self__.__extmap,self__.__hash));
}));

(schema.core.Queue.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4478__auto__,(0)),cljs.core._nth(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(schema.core.Queue.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.Queue.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.collection.collection_spec(schema.spec.core.precondition(this$__$1,schema.core.queue_QMARK_,(function (p1__48064__48065__auto__){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"queue?","queue?",-880510795,null),(new cljs.core.List(null,p1__48064__48065__auto__,null,(1),null)),(2),null));
})),schema.core.as_queue,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.spec.collection.all_elements(self__.schema)], null),(function (_,xs,___$1){
return schema.core.as_queue(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(schema.utils.error_val,xs));
}));
}));

(schema.core.Queue.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (new cljs.core.List(null,new cljs.core.Symbol(null,"queue","queue",-1198599890,null),(new cljs.core.List(null,schema.core.explain(self__.schema),null,(1),null)),(2),null));
}));

(schema.core.Queue.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"schema","schema",58529736,null)], null);
}));

(schema.core.Queue.cljs$lang$type = true);

(schema.core.Queue.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"schema.core/Queue",null,(1),null));
}));

(schema.core.Queue.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"schema.core/Queue");
}));

/**
 * Positional factory function for schema.core/Queue.
 */
schema.core.__GT_Queue = (function schema$core$__GT_Queue(schema__$1){
return (new schema.core.Queue(schema__$1,null,null,null));
});

/**
 * Factory function for schema.core/Queue, taking a map of keywords to field values.
 */
schema.core.map__GT_Queue = (function schema$core$map__GT_Queue(G__50417){
var extmap__4512__auto__ = (function (){var G__50431 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__50417,new cljs.core.Keyword(null,"schema","schema",-1582001791));
if(cljs.core.record_QMARK_(G__50417)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__50431);
} else {
return G__50431;
}
})();
return (new schema.core.Queue(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(G__50417),null,cljs.core.not_empty(extmap__4512__auto__),null));
});

/**
 * Defines a schema satisfied by instances of clojure.lang.PersistentQueue
 *   (clj.core/PersistentQueue in ClojureScript) whose values satisfy x.
 */
schema.core.queue = (function schema$core$queue(x){
return (new schema.core.Queue(x,null,null,null));
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
schema.core.One = (function (schema,optional_QMARK_,name,__meta,__extmap,__hash){
this.schema = schema;
this.optional_QMARK_ = optional_QMARK_;
this.name = name;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(schema.core.One.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(schema.core.One.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k50436,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__50442 = k50436;
var G__50442__$1 = (((G__50442 instanceof cljs.core.Keyword))?G__50442.fqn:null);
switch (G__50442__$1) {
case "schema":
return self__.schema;

break;
case "optional?":
return self__.optional_QMARK_;

break;
case "name":
return self__.name;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k50436,else__4475__auto__);

}
}));

(schema.core.One.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__50443){
var vec__50444 = p__50443;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50444,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50444,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(schema.core.One.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#schema.core.One{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"optional?","optional?",1184638129),self__.optional_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null))], null),self__.__extmap));
}));

(schema.core.One.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__50435){
var self__ = this;
var G__50435__$1 = this;
return (new cljs.core.RecordIter((0),G__50435__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Keyword(null,"optional?","optional?",1184638129),new cljs.core.Keyword(null,"name","name",1843675177)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(schema.core.One.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(schema.core.One.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new schema.core.One(self__.schema,self__.optional_QMARK_,self__.name,self__.__meta,self__.__extmap,self__.__hash));
}));

(schema.core.One.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
}));

(schema.core.One.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (coll__4469__auto__){
return (-197981045 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
})(this__4468__auto____$1);
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(schema.core.One.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this50437,other50438){
var self__ = this;
var this50437__$1 = this;
return (((!((other50438 == null)))) && ((((this50437__$1.constructor === other50438.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50437__$1.schema,other50438.schema)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50437__$1.optional_QMARK_,other50438.optional_QMARK_)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50437__$1.name,other50438.name)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50437__$1.__extmap,other50438.__extmap)))))))))));
}));

(schema.core.One.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),null,new cljs.core.Keyword(null,"name","name",1843675177),null,new cljs.core.Keyword(null,"optional?","optional?",1184638129),null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new schema.core.One(self__.schema,self__.optional_QMARK_,self__.name,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(schema.core.One.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k50436){
var self__ = this;
var this__4479__auto____$1 = this;
var G__50467 = k50436;
var G__50467__$1 = (((G__50467 instanceof cljs.core.Keyword))?G__50467.fqn:null);
switch (G__50467__$1) {
case "schema":
case "optional?":
case "name":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k50436);

}
}));

(schema.core.One.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__50435){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__50470 = cljs.core.keyword_identical_QMARK_;
var expr__50471 = k__4481__auto__;
if(cljs.core.truth_((pred__50470.cljs$core$IFn$_invoke$arity$2 ? pred__50470.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"schema","schema",-1582001791),expr__50471) : pred__50470.call(null,new cljs.core.Keyword(null,"schema","schema",-1582001791),expr__50471)))){
return (new schema.core.One(G__50435,self__.optional_QMARK_,self__.name,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__50470.cljs$core$IFn$_invoke$arity$2 ? pred__50470.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"optional?","optional?",1184638129),expr__50471) : pred__50470.call(null,new cljs.core.Keyword(null,"optional?","optional?",1184638129),expr__50471)))){
return (new schema.core.One(self__.schema,G__50435,self__.name,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__50470.cljs$core$IFn$_invoke$arity$2 ? pred__50470.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177),expr__50471) : pred__50470.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__50471)))){
return (new schema.core.One(self__.schema,self__.optional_QMARK_,G__50435,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.One(self__.schema,self__.optional_QMARK_,self__.name,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__50435),null));
}
}
}
}));

(schema.core.One.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"optional?","optional?",1184638129),self__.optional_QMARK_,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"name","name",1843675177),self__.name,null))], null),self__.__extmap));
}));

(schema.core.One.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__50435){
var self__ = this;
var this__4471__auto____$1 = this;
return (new schema.core.One(self__.schema,self__.optional_QMARK_,self__.name,G__50435,self__.__extmap,self__.__hash));
}));

(schema.core.One.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4478__auto__,(0)),cljs.core._nth(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(schema.core.One.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"schema","schema",58529736,null),new cljs.core.Symbol(null,"optional?","optional?",-1469797640,null),new cljs.core.Symbol(null,"name","name",-810760592,null)], null);
}));

(schema.core.One.cljs$lang$type = true);

(schema.core.One.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"schema.core/One",null,(1),null));
}));

(schema.core.One.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"schema.core/One");
}));

/**
 * Positional factory function for schema.core/One.
 */
schema.core.__GT_One = (function schema$core$__GT_One(schema__$1,optional_QMARK_,name){
return (new schema.core.One(schema__$1,optional_QMARK_,name,null,null,null));
});

/**
 * Factory function for schema.core/One, taking a map of keywords to field values.
 */
schema.core.map__GT_One = (function schema$core$map__GT_One(G__50439){
var extmap__4512__auto__ = (function (){var G__50475 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__50439,new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"optional?","optional?",1184638129),new cljs.core.Keyword(null,"name","name",1843675177)], 0));
if(cljs.core.record_QMARK_(G__50439)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__50475);
} else {
return G__50475;
}
})();
return (new schema.core.One(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(G__50439),new cljs.core.Keyword(null,"optional?","optional?",1184638129).cljs$core$IFn$_invoke$arity$1(G__50439),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__50439),null,cljs.core.not_empty(extmap__4512__auto__),null));
});

/**
 * A single required element of a sequence (not repeated, the implicit default)
 */
schema.core.one = (function schema$core$one(schema__$1,name){
return (new schema.core.One(schema__$1,false,name,null,null,null));
});
/**
 * A single optional element of a sequence (not repeated, the implicit default)
 */
schema.core.optional = (function schema$core$optional(schema__$1,name){
return (new schema.core.One(schema__$1,true,name,null,null,null));
});
schema.core.parse_sequence_schema = (function schema$core$parse_sequence_schema(s){

var vec__50483 = cljs.core.split_with((function (p1__50478_SHARP_){
return (((p1__50478_SHARP_ instanceof schema.core.One)) && (cljs.core.not(new cljs.core.Keyword(null,"optional?","optional?",1184638129).cljs$core$IFn$_invoke$arity$1(p1__50478_SHARP_))));
}),s);
var required = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50483,(0),null);
var more = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50483,(1),null);
var vec__50486 = cljs.core.split_with((function (p1__50479_SHARP_){
var and__4221__auto__ = (p1__50479_SHARP_ instanceof schema.core.One);
if(and__4221__auto__){
return new cljs.core.Keyword(null,"optional?","optional?",1184638129).cljs$core$IFn$_invoke$arity$1(p1__50479_SHARP_);
} else {
return and__4221__auto__;
}
}),more);
var optional = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50486,(0),null);
var more__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50486,(1),null);
if((((cljs.core.count(more__$1) <= (1))) && (cljs.core.every_QMARK_((function (p1__50480_SHARP_){
return (!((p1__50480_SHARP_ instanceof schema.core.One)));
}),more__$1)))){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("%s is not a valid sequence schema; %s%s%s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s,"a valid sequence schema consists of zero or more `one` elements, ","followed by zero or more `optional` elements, followed by an optional ","schema that will match the remaining elements."], 0))));
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.concat.cljs$core$IFn$_invoke$arity$2(required,optional),cljs.core.first(more__$1)], null);
});
(cljs.core.PersistentVector.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var this$__$1 = this;
return schema.spec.collection.collection_spec(schema.spec.core.precondition(this$__$1,(function (x){
return (((x == null)) || (cljs.core.sequential_QMARK_(x)));
}),(function (p1__50493_SHARP_){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"sequential?","sequential?",1102351463,null),(new cljs.core.List(null,p1__50493_SHARP_,null,(1),null)),(2),null));
})),cljs.core.vec,(function (){var vec__50494 = schema.core.parse_sequence_schema(this$__$1);
var singles = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50494,(0),null);
var multi = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50494,(1),null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (more,s){
if(cljs.core.not(s.optional_QMARK_)){
return cljs.core.cons(schema.spec.collection.one_element(true,schema.core.named(s.schema,s.name),(function (item_fn,x){
var temp__5751__auto__ = cljs.core.seq(x);
if(temp__5751__auto__){
var x__$1 = temp__5751__auto__;
var G__50500_50999 = cljs.core.first(x__$1);
(item_fn.cljs$core$IFn$_invoke$arity$1 ? item_fn.cljs$core$IFn$_invoke$arity$1(G__50500_50999) : item_fn.call(null,G__50500_50999));

return cljs.core.rest(x__$1);
} else {
var G__50502_51000 = schema.utils.error(schema.utils.make_ValidationError(s.schema,new cljs.core.Keyword("schema.core","missing","schema.core/missing",1420181325),(new cljs.core.Delay((function (){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"present?","present?",-1810613791,null),(new cljs.core.List(null,s.name,null,(1),null)),(2),null));
}),null)),null));
(item_fn.cljs$core$IFn$_invoke$arity$1 ? item_fn.cljs$core$IFn$_invoke$arity$1(G__50502_51000) : item_fn.call(null,G__50502_51000));

return null;
}
})),more);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.spec.collection.optional_tail(schema.core.named(s.schema,s.name),(function (item_fn,x){
var temp__5753__auto__ = cljs.core.seq(x);
if(temp__5753__auto__){
var x__$1 = temp__5753__auto__;
var G__50504_51001 = cljs.core.first(x__$1);
(item_fn.cljs$core$IFn$_invoke$arity$1 ? item_fn.cljs$core$IFn$_invoke$arity$1(G__50504_51001) : item_fn.call(null,G__50504_51001));

return cljs.core.rest(x__$1);
} else {
return null;
}
}),more)], null);
}
}),(cljs.core.truth_(multi)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.spec.collection.all_elements(multi)], null):null),cljs.core.reverse(singles));
})(),(function (_,elts,extra){
var head = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(schema.utils.error_val,elts);
if(cljs.core.seq(extra)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(head,schema.utils.error_val(schema.utils.error(schema.utils.make_ValidationError(null,extra,(new cljs.core.Delay((function (){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"has-extra-elts?","has-extra-elts?",-1376562869,null),(new cljs.core.List(null,cljs.core.count(extra),null,(1),null)),(2),null));
}),null)),null))));
} else {
return head;
}
}));
}));

(cljs.core.PersistentVector.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var this$__$1 = this;
var vec__50507 = schema.core.parse_sequence_schema(this$__$1);
var singles = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50507,(0),null);
var multi = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50507,(1),null);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var iter__4622__auto__ = (function schema$core$iter__50512(s__50513){
return (new cljs.core.LazySeq(null,(function (){
var s__50513__$1 = s__50513;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__50513__$1);
if(temp__5753__auto__){
var s__50513__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__50513__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__50513__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__50515 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__50514 = (0);
while(true){
if((i__50514 < size__4621__auto__)){
var s = cljs.core._nth(c__4620__auto__,i__50514);
cljs.core.chunk_append(b__50515,(new cljs.core.List(null,(cljs.core.truth_(s.optional_QMARK_)?new cljs.core.Symbol(null,"optional","optional",-600484260,null):new cljs.core.Symbol(null,"one","one",-1719427865,null)),(new cljs.core.List(null,schema.core.explain(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(s)),(new cljs.core.List(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(s),null,(1),null)),(2),null)),(3),null)));

var G__51003 = (i__50514 + (1));
i__50514 = G__51003;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50515),schema$core$iter__50512(cljs.core.chunk_rest(s__50513__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50515),null);
}
} else {
var s = cljs.core.first(s__50513__$2);
return cljs.core.cons((new cljs.core.List(null,(cljs.core.truth_(s.optional_QMARK_)?new cljs.core.Symbol(null,"optional","optional",-600484260,null):new cljs.core.Symbol(null,"one","one",-1719427865,null)),(new cljs.core.List(null,schema.core.explain(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(s)),(new cljs.core.List(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(s),null,(1),null)),(2),null)),(3),null)),schema$core$iter__50512(cljs.core.rest(s__50513__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(singles);
})(),(cljs.core.truth_(multi)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explain(multi)], null):null)));
}));
/**
 * A schema for a pair of schemas and their names
 */
schema.core.pair = (function schema$core$pair(first_schema,first_name,second_schema,second_name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(first_schema,first_name),schema.core.one(second_schema,second_name)], null);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
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
schema.core.Record = (function (klass,schema,__meta,__extmap,__hash){
this.klass = klass;
this.schema = schema;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(schema.core.Record.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(schema.core.Record.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k50530,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__50538 = k50530;
var G__50538__$1 = (((G__50538 instanceof cljs.core.Keyword))?G__50538.fqn:null);
switch (G__50538__$1) {
case "klass":
return self__.klass;

break;
case "schema":
return self__.schema;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k50530,else__4475__auto__);

}
}));

(schema.core.Record.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__50539){
var vec__50541 = p__50539;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50541,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50541,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(schema.core.Record.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#schema.core.Record{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"klass","klass",-1386752349),self__.klass],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null))], null),self__.__extmap));
}));

(schema.core.Record.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__50529){
var self__ = this;
var G__50529__$1 = this;
return (new cljs.core.RecordIter((0),G__50529__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"klass","klass",-1386752349),new cljs.core.Keyword(null,"schema","schema",-1582001791)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(schema.core.Record.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(schema.core.Record.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new schema.core.Record(self__.klass,self__.schema,self__.__meta,self__.__extmap,self__.__hash));
}));

(schema.core.Record.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(schema.core.Record.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (coll__4469__auto__){
return (-1486476872 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
})(this__4468__auto____$1);
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(schema.core.Record.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this50531,other50532){
var self__ = this;
var this50531__$1 = this;
return (((!((other50532 == null)))) && ((((this50531__$1.constructor === other50532.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50531__$1.klass,other50532.klass)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50531__$1.schema,other50532.schema)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50531__$1.__extmap,other50532.__extmap)))))))));
}));

(schema.core.Record.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),null,new cljs.core.Keyword(null,"klass","klass",-1386752349),null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new schema.core.Record(self__.klass,self__.schema,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(schema.core.Record.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k50530){
var self__ = this;
var this__4479__auto____$1 = this;
var G__50563 = k50530;
var G__50563__$1 = (((G__50563 instanceof cljs.core.Keyword))?G__50563.fqn:null);
switch (G__50563__$1) {
case "klass":
case "schema":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k50530);

}
}));

(schema.core.Record.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__50529){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__50566 = cljs.core.keyword_identical_QMARK_;
var expr__50567 = k__4481__auto__;
if(cljs.core.truth_((pred__50566.cljs$core$IFn$_invoke$arity$2 ? pred__50566.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"klass","klass",-1386752349),expr__50567) : pred__50566.call(null,new cljs.core.Keyword(null,"klass","klass",-1386752349),expr__50567)))){
return (new schema.core.Record(G__50529,self__.schema,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__50566.cljs$core$IFn$_invoke$arity$2 ? pred__50566.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"schema","schema",-1582001791),expr__50567) : pred__50566.call(null,new cljs.core.Keyword(null,"schema","schema",-1582001791),expr__50567)))){
return (new schema.core.Record(self__.klass,G__50529,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Record(self__.klass,self__.schema,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__50529),null));
}
}
}));

(schema.core.Record.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"klass","klass",-1386752349),self__.klass,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema,null))], null),self__.__extmap));
}));

(schema.core.Record.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__50529){
var self__ = this;
var this__4471__auto____$1 = this;
return (new schema.core.Record(self__.klass,self__.schema,G__50529,self__.__extmap,self__.__hash));
}));

(schema.core.Record.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4478__auto__,(0)),cljs.core._nth(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(schema.core.Record.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.Record.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.collection.collection_spec((function (){var p = schema.spec.core.precondition(this$__$1,(function (p1__50524_SHARP_){
return (p1__50524_SHARP_ instanceof self__.klass);
}),(function (p1__50525_SHARP_){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"instance?","instance?",1075939923,null),(new cljs.core.List(null,self__.klass,(new cljs.core.List(null,p1__50525_SHARP_,null,(1),null)),(2),null)),(3),null));
}));
var temp__5751__auto__ = new cljs.core.Keyword(null,"extra-validator-fn","extra-validator-fn",1562905865).cljs$core$IFn$_invoke$arity$1(this$__$1);
if(cljs.core.truth_(temp__5751__auto__)){
var evf = temp__5751__auto__;
return cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(p,schema.spec.core.precondition(this$__$1,evf,(function (p1__50528_SHARP_){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"passes-extra-validation?","passes-extra-validation?",-1964809231,null),(new cljs.core.List(null,p1__50528_SHARP_,null,(1),null)),(2),null));
})));
} else {
return p;
}
})(),new cljs.core.Keyword(null,"constructor","constructor",-1953928811).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(this$__$1)),schema.core.map_elements(self__.schema),schema.core.map_error());
}));

(schema.core.Record.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (new cljs.core.List(null,new cljs.core.Symbol(null,"record","record",861424668,null),(new cljs.core.List(null,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.klass], 0))),(new cljs.core.List(null,schema.core.explain(self__.schema),null,(1),null)),(2),null)),(3),null));
}));

(schema.core.Record.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"klass","klass",253779178,null),new cljs.core.Symbol(null,"schema","schema",58529736,null)], null);
}));

(schema.core.Record.cljs$lang$type = true);

(schema.core.Record.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"schema.core/Record",null,(1),null));
}));

(schema.core.Record.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"schema.core/Record");
}));

/**
 * Positional factory function for schema.core/Record.
 */
schema.core.__GT_Record = (function schema$core$__GT_Record(klass,schema__$1){
return (new schema.core.Record(klass,schema__$1,null,null,null));
});

/**
 * Factory function for schema.core/Record, taking a map of keywords to field values.
 */
schema.core.map__GT_Record = (function schema$core$map__GT_Record(G__50533){
var extmap__4512__auto__ = (function (){var G__50569 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__50533,new cljs.core.Keyword(null,"klass","klass",-1386752349),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"schema","schema",-1582001791)], 0));
if(cljs.core.record_QMARK_(G__50533)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__50569);
} else {
return G__50569;
}
})();
return (new schema.core.Record(new cljs.core.Keyword(null,"klass","klass",-1386752349).cljs$core$IFn$_invoke$arity$1(G__50533),new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(G__50533),null,cljs.core.not_empty(extmap__4512__auto__),null));
});

schema.core.record_STAR_ = (function schema$core$record_STAR_(klass,schema__$1,map_constructor){
if(cljs.core.map_QMARK_(schema__$1)){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Expected map, got %s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([schema.utils.type_of(schema__$1)], 0))));
}

return cljs.core.with_meta((new schema.core.Record(klass,schema__$1,null,null,null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"constructor","constructor",-1953928811),map_constructor], null));
});
schema.core.explain_input_schema = (function schema$core$explain_input_schema(input_schema){
var vec__50584 = cljs.core.split_with((function (p1__50581_SHARP_){
return (p1__50581_SHARP_ instanceof schema.core.One);
}),input_schema);
var required = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50584,(0),null);
var more = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50584,(1),null);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__50583_SHARP_){
return schema.core.explain(p1__50583_SHARP_.schema);
}),required),((cljs.core.seq(more))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",-2144855648,null),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(schema.core.explain,more)], null):null));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
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
schema.core.FnSchema = (function (output_schema,input_schemas,__meta,__extmap,__hash){
this.output_schema = output_schema;
this.input_schemas = input_schemas;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(schema.core.FnSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(schema.core.FnSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k50589,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__50601 = k50589;
var G__50601__$1 = (((G__50601 instanceof cljs.core.Keyword))?G__50601.fqn:null);
switch (G__50601__$1) {
case "output-schema":
return self__.output_schema;

break;
case "input-schemas":
return self__.input_schemas;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k50589,else__4475__auto__);

}
}));

(schema.core.FnSchema.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__50602){
var vec__50603 = p__50602;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50603,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50603,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(schema.core.FnSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#schema.core.FnSchema{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"output-schema","output-schema",272504137),self__.output_schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"input-schemas","input-schemas",-982154805),self__.input_schemas],null))], null),self__.__extmap));
}));

(schema.core.FnSchema.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__50588){
var self__ = this;
var G__50588__$1 = this;
return (new cljs.core.RecordIter((0),G__50588__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"output-schema","output-schema",272504137),new cljs.core.Keyword(null,"input-schemas","input-schemas",-982154805)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(schema.core.FnSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(schema.core.FnSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new schema.core.FnSchema(self__.output_schema,self__.input_schemas,self__.__meta,self__.__extmap,self__.__hash));
}));

(schema.core.FnSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(schema.core.FnSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (coll__4469__auto__){
return (-2054647546 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
})(this__4468__auto____$1);
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(schema.core.FnSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this50590,other50591){
var self__ = this;
var this50590__$1 = this;
return (((!((other50591 == null)))) && ((((this50590__$1.constructor === other50591.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50590__$1.output_schema,other50591.output_schema)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50590__$1.input_schemas,other50591.input_schemas)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50590__$1.__extmap,other50591.__extmap)))))))));
}));

(schema.core.FnSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"output-schema","output-schema",272504137),null,new cljs.core.Keyword(null,"input-schemas","input-schemas",-982154805),null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new schema.core.FnSchema(self__.output_schema,self__.input_schemas,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(schema.core.FnSchema.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k50589){
var self__ = this;
var this__4479__auto____$1 = this;
var G__50617 = k50589;
var G__50617__$1 = (((G__50617 instanceof cljs.core.Keyword))?G__50617.fqn:null);
switch (G__50617__$1) {
case "output-schema":
case "input-schemas":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k50589);

}
}));

(schema.core.FnSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__50588){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__50622 = cljs.core.keyword_identical_QMARK_;
var expr__50623 = k__4481__auto__;
if(cljs.core.truth_((pred__50622.cljs$core$IFn$_invoke$arity$2 ? pred__50622.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"output-schema","output-schema",272504137),expr__50623) : pred__50622.call(null,new cljs.core.Keyword(null,"output-schema","output-schema",272504137),expr__50623)))){
return (new schema.core.FnSchema(G__50588,self__.input_schemas,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__50622.cljs$core$IFn$_invoke$arity$2 ? pred__50622.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"input-schemas","input-schemas",-982154805),expr__50623) : pred__50622.call(null,new cljs.core.Keyword(null,"input-schemas","input-schemas",-982154805),expr__50623)))){
return (new schema.core.FnSchema(self__.output_schema,G__50588,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.FnSchema(self__.output_schema,self__.input_schemas,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__50588),null));
}
}
}));

(schema.core.FnSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"output-schema","output-schema",272504137),self__.output_schema,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"input-schemas","input-schemas",-982154805),self__.input_schemas,null))], null),self__.__extmap));
}));

(schema.core.FnSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__50588){
var self__ = this;
var this__4471__auto____$1 = this;
return (new schema.core.FnSchema(self__.output_schema,self__.input_schemas,G__50588,self__.__extmap,self__.__hash));
}));

(schema.core.FnSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4478__auto__,(0)),cljs.core._nth(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(schema.core.FnSchema.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.FnSchema.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.leaf.leaf_spec(schema.spec.core.precondition(this$__$1,cljs.core.ifn_QMARK_,(function (p1__48064__48065__auto__){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),(new cljs.core.List(null,p1__48064__48065__auto__,null,(1),null)),(2),null));
})));
}));

(schema.core.FnSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((cljs.core.count(self__.input_schemas) > (1))){
return cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"=>*","=>*",1909690043,null),schema.core.explain(self__.output_schema),cljs.core.map.cljs$core$IFn$_invoke$arity$2(schema.core.explain_input_schema,self__.input_schemas));
} else {
return cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"=>","=>",-813269641,null),schema.core.explain(self__.output_schema),schema.core.explain_input_schema(cljs.core.first(self__.input_schemas)));
}
}));

(schema.core.FnSchema.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"output-schema","output-schema",1913035664,null),new cljs.core.Symbol(null,"input-schemas","input-schemas",658376722,null)], null);
}));

(schema.core.FnSchema.cljs$lang$type = true);

(schema.core.FnSchema.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"schema.core/FnSchema",null,(1),null));
}));

(schema.core.FnSchema.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"schema.core/FnSchema");
}));

/**
 * Positional factory function for schema.core/FnSchema.
 */
schema.core.__GT_FnSchema = (function schema$core$__GT_FnSchema(output_schema,input_schemas){
return (new schema.core.FnSchema(output_schema,input_schemas,null,null,null));
});

/**
 * Factory function for schema.core/FnSchema, taking a map of keywords to field values.
 */
schema.core.map__GT_FnSchema = (function schema$core$map__GT_FnSchema(G__50595){
var extmap__4512__auto__ = (function (){var G__50633 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__50595,new cljs.core.Keyword(null,"output-schema","output-schema",272504137),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"input-schemas","input-schemas",-982154805)], 0));
if(cljs.core.record_QMARK_(G__50595)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__50633);
} else {
return G__50633;
}
})();
return (new schema.core.FnSchema(new cljs.core.Keyword(null,"output-schema","output-schema",272504137).cljs$core$IFn$_invoke$arity$1(G__50595),new cljs.core.Keyword(null,"input-schemas","input-schemas",-982154805).cljs$core$IFn$_invoke$arity$1(G__50595),null,cljs.core.not_empty(extmap__4512__auto__),null));
});

schema.core.arity = (function schema$core$arity(input_schema){
if(cljs.core.seq(input_schema)){
if((cljs.core.last(input_schema) instanceof schema.core.One)){
return cljs.core.count(input_schema);
} else {
return Number.MAX_VALUE;
}
} else {
return (0);
}
});
/**
 * A function outputting a value in output schema, whose argument vector must match one of
 * input-schemas, each of which should be a sequence schema.
 * Currently function schemas are purely descriptive; they validate against any function,
 * regardless of actual input and output types.
 */
schema.core.make_fn_schema = (function schema$core$make_fn_schema(output_schema,input_schemas){
if(cljs.core.seq(input_schemas)){
} else {
throw (new Error(schema.utils.format_STAR_("Function must have at least one input schema")));
}

if(cljs.core.every_QMARK_(cljs.core.vector_QMARK_,input_schemas)){
} else {
throw (new Error(schema.utils.format_STAR_("Each arity must be a vector.")));
}

if(cljs.core.truth_(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.distinct_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(schema.core.arity,input_schemas)))){
} else {
throw (new Error(schema.utils.format_STAR_("Arities must be distinct")));
}

return (new schema.core.FnSchema(output_schema,cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(schema.core.arity,input_schemas),null,null,null));
});
/**
 * Records name in schema's metadata.
 */
schema.core.schema_with_name = (function schema$core$schema_with_name(schema__$1,name){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(schema__$1,cljs.core.assoc,new cljs.core.Keyword(null,"name","name",1843675177),name);
});
/**
 * Returns the name of a schema attached via schema-with-name (or defschema).
 */
schema.core.schema_name = (function schema$core$schema_name(schema__$1){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(schema__$1));
});
/**
 * Returns the namespace of a schema attached via defschema.
 */
schema.core.schema_ns = (function schema$core$schema_ns(schema__$1){
return new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(schema__$1));
});
/**
 * Get the current global schema validation setting.
 */
schema.core.fn_validation_QMARK_ = (function schema$core$fn_validation_QMARK_(){
return cljs.core.deref(schema.utils.use_fn_validation);
});
/**
 * Globally turn on (or off) schema validation for all s/fn and s/defn instances.
 */
schema.core.set_fn_validation_BANG_ = (function schema$core$set_fn_validation_BANG_(on_QMARK_){
return cljs.core.reset_BANG_(schema.utils.use_fn_validation,on_QMARK_);
});
/**
 * A var that can be rebound to a function to customize the behavior
 *   of fn validation. When fn validation is on and `fn-validator` is
 *   bound to a function, normal argument and return value checks will
 *   be substituted with a call to this function with five arguments:
 * 
 *  direction   - :input or :output
 *  fn-name     - a symbol, the function's name
 *  schema      - the schema for the arglist or the return value
 *  checker     - a precompiled checker to check a value against
 *                the schema
 *  value       - the actual arglist or return value
 * 
 *   The function's return value will be ignored.
 */
schema.core.fn_validator = null;
/**
 * Attach the schema to fn f at runtime, extractable by fn-schema.
 */
schema.core.schematize_fn = (function schema$core$schematize_fn(f,schema__$1){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(f,cljs.core.assoc,new cljs.core.Keyword(null,"schema","schema",-1582001791),schema__$1);
});
/**
 * Produce the schema for a function defined with s/fn or s/defn.
 */
schema.core.fn_schema = (function schema$core$fn_schema(f){
if(cljs.core.fn_QMARK_(f)){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Non-function %s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([schema.utils.type_of(f)], 0))));
}

var or__4223__auto__ = schema.utils.class_schema(schema.utils.fn_schema_bearer(f));
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
var m__47504__auto__ = cljs.core.meta(f);
var k__47505__auto__ = new cljs.core.Keyword(null,"schema","schema",-1582001791);
var temp__5751__auto__ = cljs.core.find(m__47504__auto__,k__47505__auto__);
if(cljs.core.truth_(temp__5751__auto__)){
var pair__47506__auto__ = temp__5751__auto__;
return cljs.core.val(pair__47506__auto__);
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Key %s not found in %s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k__47505__auto__,m__47504__auto__], 0))));
}
}
});
/**
 * Sets the maximum length of value to be output before it is contracted to a prettier name.
 */
schema.core.set_max_value_length_BANG_ = (function schema$core$set_max_value_length_BANG_(max_length){
return cljs.core.reset_BANG_(schema.utils.max_value_length,max_length);
});

//# sourceMappingURL=schema.core.js.map
