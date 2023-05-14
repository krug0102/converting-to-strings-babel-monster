goog.provide('malli.impl.util');
malli.impl.util._PLUS_max_size_PLUS_ = Number.MAX_VALUE;
malli.impl.util._tagged = (function malli$impl$util$_tagged(k,v){
return (new cljs.core.MapEntry(k,v,null));
});
malli.impl.util._tagged_QMARK_ = (function malli$impl$util$_tagged_QMARK_(v){
return (v instanceof cljs.core.MapEntry);
});
malli.impl.util._invalid_QMARK_ = (function malli$impl$util$_invalid_QMARK_(x){
return cljs.core.keyword_identical_QMARK_(x,new cljs.core.Keyword("malli.core","invalid","malli.core/invalid",362080900));
});
malli.impl.util._map_valid = (function malli$impl$util$_map_valid(f,v){
if(malli.impl.util._invalid_QMARK_(v)){
return v;
} else {
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v));
}
});
malli.impl.util._map_invalid = (function malli$impl$util$_map_invalid(f,v){
if(malli.impl.util._invalid_QMARK_(v)){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v));
} else {
return v;
}
});
malli.impl.util._fail_BANG_ = (function malli$impl$util$_fail_BANG_(var_args){
var G__84084 = arguments.length;
switch (G__84084) {
case 1:
return malli.impl.util._fail_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return malli.impl.util._fail_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return malli.impl.util._fail_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.impl.util._fail_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (type){
return malli.impl.util._fail_BANG_.cljs$core$IFn$_invoke$arity$2(type,null);
}));

(malli.impl.util._fail_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (type,data){
return malli.impl.util._fail_BANG_.cljs$core$IFn$_invoke$arity$3(type,null,data);
}));

(malli.impl.util._fail_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (type,message,data){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)," ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([data], 0)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"data","data",-232669377),data], null));
}));

(malli.impl.util._fail_BANG_.cljs$lang$maxFixedArity = 3);


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
malli.impl.util.SchemaError = (function (path,in$,schema,value,type,message,__meta,__extmap,__hash){
this.path = path;
this.in$ = in$;
this.schema = schema;
this.value = value;
this.type = type;
this.message = message;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(malli.impl.util.SchemaError.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(malli.impl.util.SchemaError.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k84088,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__84092 = k84088;
var G__84092__$1 = (((G__84092 instanceof cljs.core.Keyword))?G__84092.fqn:null);
switch (G__84092__$1) {
case "path":
return self__.path;

break;
case "in":
return self__.in$;

break;
case "schema":
return self__.schema;

break;
case "value":
return self__.value;

break;
case "type":
return self__.type;

break;
case "message":
return self__.message;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k84088,else__4475__auto__);

}
}));

(malli.impl.util.SchemaError.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__84093){
var vec__84094 = p__84093;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84094,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84094,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(malli.impl.util.SchemaError.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#malli.impl.util.SchemaError{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"path","path",-188191168),self__.path],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"in","in",-1531184865),self__.in$],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type","type",1174270348),self__.type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"message","message",-406056002),self__.message],null))], null),self__.__extmap));
}));

(malli.impl.util.SchemaError.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__84087){
var self__ = this;
var G__84087__$1 = this;
return (new cljs.core.RecordIter((0),G__84087__$1,6,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"message","message",-406056002)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(malli.impl.util.SchemaError.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(malli.impl.util.SchemaError.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new malli.impl.util.SchemaError(self__.path,self__.in$,self__.schema,self__.value,self__.type,self__.message,self__.__meta,self__.__extmap,self__.__hash));
}));

(malli.impl.util.SchemaError.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (6 + cljs.core.count(self__.__extmap));
}));

(malli.impl.util.SchemaError.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (coll__4469__auto__){
return (-1568369823 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
})(this__4468__auto____$1);
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(malli.impl.util.SchemaError.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this84089,other84090){
var self__ = this;
var this84089__$1 = this;
return (((!((other84090 == null)))) && ((((this84089__$1.constructor === other84090.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this84089__$1.path,other84090.path)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this84089__$1.in,other84090.in)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this84089__$1.schema,other84090.schema)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this84089__$1.value,other84090.value)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this84089__$1.type,other84090.type)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this84089__$1.message,other84090.message)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this84089__$1.__extmap,other84090.__extmap)))))))))))))))));
}));

(malli.impl.util.SchemaError.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"schema","schema",-1582001791),null,new cljs.core.Keyword(null,"value","value",305978217),null,new cljs.core.Keyword(null,"type","type",1174270348),null,new cljs.core.Keyword(null,"message","message",-406056002),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new malli.impl.util.SchemaError(self__.path,self__.in$,self__.schema,self__.value,self__.type,self__.message,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(malli.impl.util.SchemaError.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k84088){
var self__ = this;
var this__4479__auto____$1 = this;
var G__84097 = k84088;
var G__84097__$1 = (((G__84097 instanceof cljs.core.Keyword))?G__84097.fqn:null);
switch (G__84097__$1) {
case "path":
case "in":
case "schema":
case "value":
case "type":
case "message":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k84088);

}
}));

(malli.impl.util.SchemaError.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__84087){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__84098 = cljs.core.keyword_identical_QMARK_;
var expr__84099 = k__4481__auto__;
if(cljs.core.truth_((pred__84098.cljs$core$IFn$_invoke$arity$2 ? pred__84098.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"path","path",-188191168),expr__84099) : pred__84098.call(null,new cljs.core.Keyword(null,"path","path",-188191168),expr__84099)))){
return (new malli.impl.util.SchemaError(G__84087,self__.in$,self__.schema,self__.value,self__.type,self__.message,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__84098.cljs$core$IFn$_invoke$arity$2 ? pred__84098.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"in","in",-1531184865),expr__84099) : pred__84098.call(null,new cljs.core.Keyword(null,"in","in",-1531184865),expr__84099)))){
return (new malli.impl.util.SchemaError(self__.path,G__84087,self__.schema,self__.value,self__.type,self__.message,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__84098.cljs$core$IFn$_invoke$arity$2 ? pred__84098.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"schema","schema",-1582001791),expr__84099) : pred__84098.call(null,new cljs.core.Keyword(null,"schema","schema",-1582001791),expr__84099)))){
return (new malli.impl.util.SchemaError(self__.path,self__.in$,G__84087,self__.value,self__.type,self__.message,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__84098.cljs$core$IFn$_invoke$arity$2 ? pred__84098.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"value","value",305978217),expr__84099) : pred__84098.call(null,new cljs.core.Keyword(null,"value","value",305978217),expr__84099)))){
return (new malli.impl.util.SchemaError(self__.path,self__.in$,self__.schema,G__84087,self__.type,self__.message,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__84098.cljs$core$IFn$_invoke$arity$2 ? pred__84098.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348),expr__84099) : pred__84098.call(null,new cljs.core.Keyword(null,"type","type",1174270348),expr__84099)))){
return (new malli.impl.util.SchemaError(self__.path,self__.in$,self__.schema,self__.value,G__84087,self__.message,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__84098.cljs$core$IFn$_invoke$arity$2 ? pred__84098.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"message","message",-406056002),expr__84099) : pred__84098.call(null,new cljs.core.Keyword(null,"message","message",-406056002),expr__84099)))){
return (new malli.impl.util.SchemaError(self__.path,self__.in$,self__.schema,self__.value,self__.type,G__84087,self__.__meta,self__.__extmap,null));
} else {
return (new malli.impl.util.SchemaError(self__.path,self__.in$,self__.schema,self__.value,self__.type,self__.message,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__84087),null));
}
}
}
}
}
}
}));

(malli.impl.util.SchemaError.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"path","path",-188191168),self__.path,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"in","in",-1531184865),self__.in$,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"value","value",305978217),self__.value,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"type","type",1174270348),self__.type,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"message","message",-406056002),self__.message,null))], null),self__.__extmap));
}));

(malli.impl.util.SchemaError.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__84087){
var self__ = this;
var this__4471__auto____$1 = this;
return (new malli.impl.util.SchemaError(self__.path,self__.in$,self__.schema,self__.value,self__.type,self__.message,G__84087,self__.__extmap,self__.__hash));
}));

(malli.impl.util.SchemaError.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4478__auto__,(0)),cljs.core._nth(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(malli.impl.util.SchemaError.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"in","in",109346662,null),new cljs.core.Symbol(null,"schema","schema",58529736,null),new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Symbol(null,"type","type",-1480165421,null),new cljs.core.Symbol(null,"message","message",1234475525,null)], null);
}));

(malli.impl.util.SchemaError.cljs$lang$type = true);

(malli.impl.util.SchemaError.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"malli.impl.util/SchemaError",null,(1),null));
}));

(malli.impl.util.SchemaError.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"malli.impl.util/SchemaError");
}));

/**
 * Positional factory function for malli.impl.util/SchemaError.
 */
malli.impl.util.__GT_SchemaError = (function malli$impl$util$__GT_SchemaError(path,in$,schema__$1,value,type,message){
return (new malli.impl.util.SchemaError(path,in$,schema__$1,value,type,message,null,null,null));
});

/**
 * Factory function for malli.impl.util/SchemaError, taking a map of keywords to field values.
 */
malli.impl.util.map__GT_SchemaError = (function malli$impl$util$map__GT_SchemaError(G__84091){
var extmap__4512__auto__ = (function (){var G__84101 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__84091,new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"message","message",-406056002)], 0));
if(cljs.core.record_QMARK_(G__84091)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__84101);
} else {
return G__84101;
}
})();
return (new malli.impl.util.SchemaError(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(G__84091),new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(G__84091),new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(G__84091),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__84091),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(G__84091),new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(G__84091),null,cljs.core.not_empty(extmap__4512__auto__),null));
});

malli.impl.util._error = (function malli$impl$util$_error(var_args){
var G__84103 = arguments.length;
switch (G__84103) {
case 4:
return malli.impl.util._error.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return malli.impl.util._error.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.impl.util._error.cljs$core$IFn$_invoke$arity$4 = (function (path,in$,schema__$1,value){
return malli.impl.util.__GT_SchemaError(path,in$,schema__$1,value,null,null);
}));

(malli.impl.util._error.cljs$core$IFn$_invoke$arity$5 = (function (path,in$,schema__$1,value,type){
return malli.impl.util.__GT_SchemaError(path,in$,schema__$1,value,type,null);
}));

(malli.impl.util._error.cljs$lang$maxFixedArity = 5);


//# sourceMappingURL=malli.impl.util.js.map
