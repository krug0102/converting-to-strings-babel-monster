goog.provide('repl_tooling.editor_helpers');

/**
* @constructor
 * @implements {cljs.core.IPrintWithWriter}
*/
repl_tooling.editor_helpers.LiteralRender = (function (string){
this.string = string;
this.cljs$lang$protocol_mask$partition0$ = 2147483648;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(repl_tooling.editor_helpers.LiteralRender.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
return cljs.core._write(writer,self__.string);
}));

(repl_tooling.editor_helpers.LiteralRender.prototype.toString = (function (){
var self__ = this;
var _ = this;
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.string);
}));

(repl_tooling.editor_helpers.LiteralRender.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"string","string",-349010059,null)], null);
}));

(repl_tooling.editor_helpers.LiteralRender.cljs$lang$type = true);

(repl_tooling.editor_helpers.LiteralRender.cljs$lang$ctorStr = "repl-tooling.editor-helpers/LiteralRender");

(repl_tooling.editor_helpers.LiteralRender.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"repl-tooling.editor-helpers/LiteralRender");
}));

/**
 * Positional factory function for repl-tooling.editor-helpers/LiteralRender.
 */
repl_tooling.editor_helpers.__GT_LiteralRender = (function repl_tooling$editor_helpers$__GT_LiteralRender(string){
return (new repl_tooling.editor_helpers.LiteralRender(string));
});


/**
* @constructor
 * @implements {cljs.core.IPrintWithWriter}
*/
repl_tooling.editor_helpers.Interactive = (function (edn){
this.edn = edn;
this.cljs$lang$protocol_mask$partition0$ = 2147483648;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(repl_tooling.editor_helpers.Interactive.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
return cljs.core._write(writer,self__.edn);
}));

(repl_tooling.editor_helpers.Interactive.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"edn","edn",-1336594884,null)], null);
}));

(repl_tooling.editor_helpers.Interactive.cljs$lang$type = true);

(repl_tooling.editor_helpers.Interactive.cljs$lang$ctorStr = "repl-tooling.editor-helpers/Interactive");

(repl_tooling.editor_helpers.Interactive.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"repl-tooling.editor-helpers/Interactive");
}));

/**
 * Positional factory function for repl-tooling.editor-helpers/Interactive.
 */
repl_tooling.editor_helpers.__GT_Interactive = (function repl_tooling$editor_helpers$__GT_Interactive(edn){
return (new repl_tooling.editor_helpers.Interactive(edn));
});


/**
 * @interface
 */
repl_tooling.editor_helpers.IIncompleteStr = function(){};

var repl_tooling$editor_helpers$IIncompleteStr$only_str$dyn_141312 = (function (_){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (repl_tooling.editor_helpers.only_str[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4522__auto__.call(null,_));
} else {
var m__4519__auto__ = (repl_tooling.editor_helpers.only_str["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4519__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IIncompleteStr.only-str",_);
}
}
});
repl_tooling.editor_helpers.only_str = (function repl_tooling$editor_helpers$only_str(_){
if((((!((_ == null)))) && ((!((_.repl_tooling$editor_helpers$IIncompleteStr$only_str$arity$1 == null)))))){
return _.repl_tooling$editor_helpers$IIncompleteStr$only_str$arity$1(_);
} else {
return repl_tooling$editor_helpers$IIncompleteStr$only_str$dyn_141312(_);
}
});

var repl_tooling$editor_helpers$IIncompleteStr$concat_with$dyn_141313 = (function (_,other){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (repl_tooling.editor_helpers.concat_with[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(_,other) : m__4522__auto__.call(null,_,other));
} else {
var m__4519__auto__ = (repl_tooling.editor_helpers.concat_with["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(_,other) : m__4519__auto__.call(null,_,other));
} else {
throw cljs.core.missing_protocol("IIncompleteStr.concat-with",_);
}
}
});
repl_tooling.editor_helpers.concat_with = (function repl_tooling$editor_helpers$concat_with(_,other){
if((((!((_ == null)))) && ((!((_.repl_tooling$editor_helpers$IIncompleteStr$concat_with$arity$2 == null)))))){
return _.repl_tooling$editor_helpers$IIncompleteStr$concat_with$arity$2(_,other);
} else {
return repl_tooling$editor_helpers$IIncompleteStr$concat_with$dyn_141313(_,other);
}
});


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {repl_tooling.editor_helpers.IIncompleteStr}
*/
repl_tooling.editor_helpers.IncompleteStr = (function (string){
this.string = string;
this.cljs$lang$protocol_mask$partition0$ = 2147614720;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(repl_tooling.editor_helpers.IncompleteStr.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$.repl_tooling$editor_helpers$IIncompleteStr$only_str$arity$1(null)),"..."].join('');
}));

(repl_tooling.editor_helpers.IncompleteStr.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
return cljs.core._write(writer,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(self__.string)),"..."].join('')], 0)));
}));

(repl_tooling.editor_helpers.IncompleteStr.prototype.repl_tooling$editor_helpers$IIncompleteStr$ = cljs.core.PROTOCOL_SENTINEL);

(repl_tooling.editor_helpers.IncompleteStr.prototype.repl_tooling$editor_helpers$IIncompleteStr$only_str$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.first(self__.string);
}));

(repl_tooling.editor_helpers.IncompleteStr.prototype.repl_tooling$editor_helpers$IIncompleteStr$concat_with$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
if(typeof other === 'string'){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(self__.string)),other].join('');
} else {
return (new repl_tooling.editor_helpers.IncompleteStr(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(self__.string)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(repl_tooling.editor_helpers.only_str(other))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("repl-tooling","...","repl-tooling/...",-2073461648),new cljs.core.Keyword(null,"get-more","get-more",634750896).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(other))], null)], null)));
}
}));

(repl_tooling.editor_helpers.IncompleteStr.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"get-more","get-more",634750896),new cljs.core.Keyword("repl-tooling","...","repl-tooling/...",-2073461648).cljs$core$IFn$_invoke$arity$1(cljs.core.second(self__.string))], null);
}));

(repl_tooling.editor_helpers.IncompleteStr.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"string","string",-349010059,null)], null);
}));

(repl_tooling.editor_helpers.IncompleteStr.cljs$lang$type = true);

(repl_tooling.editor_helpers.IncompleteStr.cljs$lang$ctorStr = "repl-tooling.editor-helpers/IncompleteStr");

(repl_tooling.editor_helpers.IncompleteStr.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"repl-tooling.editor-helpers/IncompleteStr");
}));

/**
 * Positional factory function for repl-tooling.editor-helpers/IncompleteStr.
 */
repl_tooling.editor_helpers.__GT_IncompleteStr = (function repl_tooling$editor_helpers$__GT_IncompleteStr(string){
return (new repl_tooling.editor_helpers.IncompleteStr(string));
});


/**
 * @interface
 */
repl_tooling.editor_helpers.Taggable = function(){};

var repl_tooling$editor_helpers$Taggable$obj$dyn_141318 = (function (this$){
var x__4521__auto__ = (((this$ == null))?null:this$);
var m__4522__auto__ = (repl_tooling.editor_helpers.obj[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4522__auto__.call(null,this$));
} else {
var m__4519__auto__ = (repl_tooling.editor_helpers.obj["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4519__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Taggable.obj",this$);
}
}
});
repl_tooling.editor_helpers.obj = (function repl_tooling$editor_helpers$obj(this$){
if((((!((this$ == null)))) && ((!((this$.repl_tooling$editor_helpers$Taggable$obj$arity$1 == null)))))){
return this$.repl_tooling$editor_helpers$Taggable$obj$arity$1(this$);
} else {
return repl_tooling$editor_helpers$Taggable$obj$dyn_141318(this$);
}
});

var repl_tooling$editor_helpers$Taggable$tag$dyn_141321 = (function (this$){
var x__4521__auto__ = (((this$ == null))?null:this$);
var m__4522__auto__ = (repl_tooling.editor_helpers.tag[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4522__auto__.call(null,this$));
} else {
var m__4519__auto__ = (repl_tooling.editor_helpers.tag["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4519__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Taggable.tag",this$);
}
}
});
repl_tooling.editor_helpers.tag = (function repl_tooling$editor_helpers$tag(this$){
if((((!((this$ == null)))) && ((!((this$.repl_tooling$editor_helpers$Taggable$tag$arity$1 == null)))))){
return this$.repl_tooling$editor_helpers$Taggable$tag$arity$1(this$);
} else {
return repl_tooling$editor_helpers$Taggable$tag$dyn_141321(this$);
}
});


/**
* @constructor
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {repl_tooling.editor_helpers.Taggable}
*/
repl_tooling.editor_helpers.WithTag = (function (obj,tag){
this.obj = obj;
this.tag = tag;
this.cljs$lang$protocol_mask$partition0$ = 2147483648;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(repl_tooling.editor_helpers.WithTag.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
cljs.core._write(writer,"#");

cljs.core._write(writer,self__.tag);

cljs.core._write(writer," ");

return cljs.core._write(writer,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.obj], 0)));
}));

(repl_tooling.editor_helpers.WithTag.prototype.repl_tooling$editor_helpers$Taggable$ = cljs.core.PROTOCOL_SENTINEL);

(repl_tooling.editor_helpers.WithTag.prototype.repl_tooling$editor_helpers$Taggable$obj$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.obj;
}));

(repl_tooling.editor_helpers.WithTag.prototype.repl_tooling$editor_helpers$Taggable$tag$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.tag)," "].join('');
}));

(repl_tooling.editor_helpers.WithTag.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null),new cljs.core.Symbol(null,"tag","tag",350170304,null)], null);
}));

(repl_tooling.editor_helpers.WithTag.cljs$lang$type = true);

(repl_tooling.editor_helpers.WithTag.cljs$lang$ctorStr = "repl-tooling.editor-helpers/WithTag");

(repl_tooling.editor_helpers.WithTag.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"repl-tooling.editor-helpers/WithTag");
}));

/**
 * Positional factory function for repl-tooling.editor-helpers/WithTag.
 */
repl_tooling.editor_helpers.__GT_WithTag = (function repl_tooling$editor_helpers$__GT_WithTag(obj,tag){
return (new repl_tooling.editor_helpers.WithTag(obj,tag));
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
repl_tooling.editor_helpers.Browseable = (function (object,more_fn,attributes,__meta,__extmap,__hash){
this.object = object;
this.more_fn = more_fn;
this.attributes = attributes;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(repl_tooling.editor_helpers.Browseable.prototype.toString = (function (){
var self__ = this;
var _ = this;
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.object);
}));

(repl_tooling.editor_helpers.Browseable.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(repl_tooling.editor_helpers.Browseable.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k141170,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__141174 = k141170;
var G__141174__$1 = (((G__141174 instanceof cljs.core.Keyword))?G__141174.fqn:null);
switch (G__141174__$1) {
case "object":
return self__.object;

break;
case "more-fn":
return self__.more_fn;

break;
case "attributes":
return self__.attributes;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k141170,else__4475__auto__);

}
}));

(repl_tooling.editor_helpers.Browseable.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__141175){
var vec__141176 = p__141175;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__141176,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__141176,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(repl_tooling.editor_helpers.Browseable.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#repl-tooling.editor-helpers.Browseable{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"object","object",1474613949),self__.object],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"more-fn","more-fn",-1002134682),self__.more_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attributes","attributes",-74013604),self__.attributes],null))], null),self__.__extmap));
}));

(repl_tooling.editor_helpers.Browseable.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__141169){
var self__ = this;
var G__141169__$1 = this;
return (new cljs.core.RecordIter((0),G__141169__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"object","object",1474613949),new cljs.core.Keyword(null,"more-fn","more-fn",-1002134682),new cljs.core.Keyword(null,"attributes","attributes",-74013604)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(repl_tooling.editor_helpers.Browseable.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(repl_tooling.editor_helpers.Browseable.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new repl_tooling.editor_helpers.Browseable(self__.object,self__.more_fn,self__.attributes,self__.__meta,self__.__extmap,self__.__hash));
}));

(repl_tooling.editor_helpers.Browseable.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
}));

(repl_tooling.editor_helpers.Browseable.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (coll__4469__auto__){
return (1553566954 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
})(this__4468__auto____$1);
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(repl_tooling.editor_helpers.Browseable.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this141171,other141172){
var self__ = this;
var this141171__$1 = this;
return (((!((other141172 == null)))) && ((((this141171__$1.constructor === other141172.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this141171__$1.object,other141172.object)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this141171__$1.more_fn,other141172.more_fn)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this141171__$1.attributes,other141172.attributes)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this141171__$1.__extmap,other141172.__extmap)))))))))));
}));

(repl_tooling.editor_helpers.Browseable.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"more-fn","more-fn",-1002134682),null,new cljs.core.Keyword(null,"attributes","attributes",-74013604),null,new cljs.core.Keyword(null,"object","object",1474613949),null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new repl_tooling.editor_helpers.Browseable(self__.object,self__.more_fn,self__.attributes,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(repl_tooling.editor_helpers.Browseable.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k141170){
var self__ = this;
var this__4479__auto____$1 = this;
var G__141179 = k141170;
var G__141179__$1 = (((G__141179 instanceof cljs.core.Keyword))?G__141179.fqn:null);
switch (G__141179__$1) {
case "object":
case "more-fn":
case "attributes":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k141170);

}
}));

(repl_tooling.editor_helpers.Browseable.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__141169){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__141180 = cljs.core.keyword_identical_QMARK_;
var expr__141181 = k__4481__auto__;
if(cljs.core.truth_((pred__141180.cljs$core$IFn$_invoke$arity$2 ? pred__141180.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"object","object",1474613949),expr__141181) : pred__141180.call(null,new cljs.core.Keyword(null,"object","object",1474613949),expr__141181)))){
return (new repl_tooling.editor_helpers.Browseable(G__141169,self__.more_fn,self__.attributes,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__141180.cljs$core$IFn$_invoke$arity$2 ? pred__141180.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"more-fn","more-fn",-1002134682),expr__141181) : pred__141180.call(null,new cljs.core.Keyword(null,"more-fn","more-fn",-1002134682),expr__141181)))){
return (new repl_tooling.editor_helpers.Browseable(self__.object,G__141169,self__.attributes,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__141180.cljs$core$IFn$_invoke$arity$2 ? pred__141180.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"attributes","attributes",-74013604),expr__141181) : pred__141180.call(null,new cljs.core.Keyword(null,"attributes","attributes",-74013604),expr__141181)))){
return (new repl_tooling.editor_helpers.Browseable(self__.object,self__.more_fn,G__141169,self__.__meta,self__.__extmap,null));
} else {
return (new repl_tooling.editor_helpers.Browseable(self__.object,self__.more_fn,self__.attributes,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__141169),null));
}
}
}
}));

(repl_tooling.editor_helpers.Browseable.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"object","object",1474613949),self__.object,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"more-fn","more-fn",-1002134682),self__.more_fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"attributes","attributes",-74013604),self__.attributes,null))], null),self__.__extmap));
}));

(repl_tooling.editor_helpers.Browseable.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__141169){
var self__ = this;
var this__4471__auto____$1 = this;
return (new repl_tooling.editor_helpers.Browseable(self__.object,self__.more_fn,self__.attributes,G__141169,self__.__extmap,self__.__hash));
}));

(repl_tooling.editor_helpers.Browseable.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4478__auto__,(0)),cljs.core._nth(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(repl_tooling.editor_helpers.Browseable.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"object","object",-1179821820,null),new cljs.core.Symbol(null,"more-fn","more-fn",638396845,null),new cljs.core.Symbol(null,"attributes","attributes",1566517923,null)], null);
}));

(repl_tooling.editor_helpers.Browseable.cljs$lang$type = true);

(repl_tooling.editor_helpers.Browseable.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"repl-tooling.editor-helpers/Browseable",null,(1),null));
}));

(repl_tooling.editor_helpers.Browseable.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"repl-tooling.editor-helpers/Browseable");
}));

/**
 * Positional factory function for repl-tooling.editor-helpers/Browseable.
 */
repl_tooling.editor_helpers.__GT_Browseable = (function repl_tooling$editor_helpers$__GT_Browseable(object,more_fn,attributes){
return (new repl_tooling.editor_helpers.Browseable(object,more_fn,attributes,null,null,null));
});

/**
 * Factory function for repl-tooling.editor-helpers/Browseable, taking a map of keywords to field values.
 */
repl_tooling.editor_helpers.map__GT_Browseable = (function repl_tooling$editor_helpers$map__GT_Browseable(G__141173){
var extmap__4512__auto__ = (function (){var G__141183 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__141173,new cljs.core.Keyword(null,"object","object",1474613949),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"more-fn","more-fn",-1002134682),new cljs.core.Keyword(null,"attributes","attributes",-74013604)], 0));
if(cljs.core.record_QMARK_(G__141173)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__141183);
} else {
return G__141183;
}
})();
return (new repl_tooling.editor_helpers.Browseable(new cljs.core.Keyword(null,"object","object",1474613949).cljs$core$IFn$_invoke$arity$1(G__141173),new cljs.core.Keyword(null,"more-fn","more-fn",-1002134682).cljs$core$IFn$_invoke$arity$1(G__141173),new cljs.core.Keyword(null,"attributes","attributes",-74013604).cljs$core$IFn$_invoke$arity$1(G__141173),null,cljs.core.not_empty(extmap__4512__auto__),null));
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
repl_tooling.editor_helpers.IncompleteObj = (function (more_fn,__meta,__extmap,__hash){
this.more_fn = more_fn;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(repl_tooling.editor_helpers.IncompleteObj.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(repl_tooling.editor_helpers.IncompleteObj.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k141185,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__141189 = k141185;
var G__141189__$1 = (((G__141189 instanceof cljs.core.Keyword))?G__141189.fqn:null);
switch (G__141189__$1) {
case "more-fn":
return self__.more_fn;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k141185,else__4475__auto__);

}
}));

(repl_tooling.editor_helpers.IncompleteObj.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__141190){
var vec__141191 = p__141190;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__141191,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__141191,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(repl_tooling.editor_helpers.IncompleteObj.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#repl-tooling.editor-helpers.IncompleteObj{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"more-fn","more-fn",-1002134682),self__.more_fn],null))], null),self__.__extmap));
}));

(repl_tooling.editor_helpers.IncompleteObj.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__141184){
var self__ = this;
var G__141184__$1 = this;
return (new cljs.core.RecordIter((0),G__141184__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"more-fn","more-fn",-1002134682)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(repl_tooling.editor_helpers.IncompleteObj.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(repl_tooling.editor_helpers.IncompleteObj.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new repl_tooling.editor_helpers.IncompleteObj(self__.more_fn,self__.__meta,self__.__extmap,self__.__hash));
}));

(repl_tooling.editor_helpers.IncompleteObj.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(repl_tooling.editor_helpers.IncompleteObj.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (coll__4469__auto__){
return (1359077687 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
})(this__4468__auto____$1);
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(repl_tooling.editor_helpers.IncompleteObj.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this141186,other141187){
var self__ = this;
var this141186__$1 = this;
return (((!((other141187 == null)))) && ((((this141186__$1.constructor === other141187.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this141186__$1.more_fn,other141187.more_fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this141186__$1.__extmap,other141187.__extmap)))))));
}));

(repl_tooling.editor_helpers.IncompleteObj.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"more-fn","more-fn",-1002134682),null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new repl_tooling.editor_helpers.IncompleteObj(self__.more_fn,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(repl_tooling.editor_helpers.IncompleteObj.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k141185){
var self__ = this;
var this__4479__auto____$1 = this;
var G__141194 = k141185;
var G__141194__$1 = (((G__141194 instanceof cljs.core.Keyword))?G__141194.fqn:null);
switch (G__141194__$1) {
case "more-fn":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k141185);

}
}));

(repl_tooling.editor_helpers.IncompleteObj.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__141184){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__141195 = cljs.core.keyword_identical_QMARK_;
var expr__141196 = k__4481__auto__;
if(cljs.core.truth_((pred__141195.cljs$core$IFn$_invoke$arity$2 ? pred__141195.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"more-fn","more-fn",-1002134682),expr__141196) : pred__141195.call(null,new cljs.core.Keyword(null,"more-fn","more-fn",-1002134682),expr__141196)))){
return (new repl_tooling.editor_helpers.IncompleteObj(G__141184,self__.__meta,self__.__extmap,null));
} else {
return (new repl_tooling.editor_helpers.IncompleteObj(self__.more_fn,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__141184),null));
}
}));

(repl_tooling.editor_helpers.IncompleteObj.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"more-fn","more-fn",-1002134682),self__.more_fn,null))], null),self__.__extmap));
}));

(repl_tooling.editor_helpers.IncompleteObj.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__141184){
var self__ = this;
var this__4471__auto____$1 = this;
return (new repl_tooling.editor_helpers.IncompleteObj(self__.more_fn,G__141184,self__.__extmap,self__.__hash));
}));

(repl_tooling.editor_helpers.IncompleteObj.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4478__auto__,(0)),cljs.core._nth(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(repl_tooling.editor_helpers.IncompleteObj.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"more-fn","more-fn",638396845,null)], null);
}));

(repl_tooling.editor_helpers.IncompleteObj.cljs$lang$type = true);

(repl_tooling.editor_helpers.IncompleteObj.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"repl-tooling.editor-helpers/IncompleteObj",null,(1),null));
}));

(repl_tooling.editor_helpers.IncompleteObj.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"repl-tooling.editor-helpers/IncompleteObj");
}));

/**
 * Positional factory function for repl-tooling.editor-helpers/IncompleteObj.
 */
repl_tooling.editor_helpers.__GT_IncompleteObj = (function repl_tooling$editor_helpers$__GT_IncompleteObj(more_fn){
return (new repl_tooling.editor_helpers.IncompleteObj(more_fn,null,null,null));
});

/**
 * Factory function for repl-tooling.editor-helpers/IncompleteObj, taking a map of keywords to field values.
 */
repl_tooling.editor_helpers.map__GT_IncompleteObj = (function repl_tooling$editor_helpers$map__GT_IncompleteObj(G__141188){
var extmap__4512__auto__ = (function (){var G__141198 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__141188,new cljs.core.Keyword(null,"more-fn","more-fn",-1002134682));
if(cljs.core.record_QMARK_(G__141188)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__141198);
} else {
return G__141198;
}
})();
return (new repl_tooling.editor_helpers.IncompleteObj(new cljs.core.Keyword(null,"more-fn","more-fn",-1002134682).cljs$core$IFn$_invoke$arity$1(G__141188),null,cljs.core.not_empty(extmap__4512__auto__),null));
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
repl_tooling.editor_helpers.Error = (function (type,message,add_data,trace,__meta,__extmap,__hash){
this.type = type;
this.message = message;
this.add_data = add_data;
this.trace = trace;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(repl_tooling.editor_helpers.Error.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(repl_tooling.editor_helpers.Error.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k141200,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__141204 = k141200;
var G__141204__$1 = (((G__141204 instanceof cljs.core.Keyword))?G__141204.fqn:null);
switch (G__141204__$1) {
case "type":
return self__.type;

break;
case "message":
return self__.message;

break;
case "add-data":
return self__.add_data;

break;
case "trace":
return self__.trace;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k141200,else__4475__auto__);

}
}));

(repl_tooling.editor_helpers.Error.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__141205){
var vec__141206 = p__141205;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__141206,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__141206,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(repl_tooling.editor_helpers.Error.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#repl-tooling.editor-helpers.Error{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type","type",1174270348),self__.type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"message","message",-406056002),self__.message],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"add-data","add-data",1561339203),self__.add_data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"trace","trace",-1082747415),self__.trace],null))], null),self__.__extmap));
}));

(repl_tooling.editor_helpers.Error.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__141199){
var self__ = this;
var G__141199__$1 = this;
return (new cljs.core.RecordIter((0),G__141199__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"add-data","add-data",1561339203),new cljs.core.Keyword(null,"trace","trace",-1082747415)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(repl_tooling.editor_helpers.Error.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(repl_tooling.editor_helpers.Error.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new repl_tooling.editor_helpers.Error(self__.type,self__.message,self__.add_data,self__.trace,self__.__meta,self__.__extmap,self__.__hash));
}));

(repl_tooling.editor_helpers.Error.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
}));

(repl_tooling.editor_helpers.Error.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (coll__4469__auto__){
return (1005695947 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
})(this__4468__auto____$1);
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(repl_tooling.editor_helpers.Error.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this141201,other141202){
var self__ = this;
var this141201__$1 = this;
return (((!((other141202 == null)))) && ((((this141201__$1.constructor === other141202.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this141201__$1.type,other141202.type)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this141201__$1.message,other141202.message)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this141201__$1.add_data,other141202.add_data)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this141201__$1.trace,other141202.trace)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this141201__$1.__extmap,other141202.__extmap)))))))))))));
}));

(repl_tooling.editor_helpers.Error.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"add-data","add-data",1561339203),null,new cljs.core.Keyword(null,"trace","trace",-1082747415),null,new cljs.core.Keyword(null,"type","type",1174270348),null,new cljs.core.Keyword(null,"message","message",-406056002),null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new repl_tooling.editor_helpers.Error(self__.type,self__.message,self__.add_data,self__.trace,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(repl_tooling.editor_helpers.Error.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k141200){
var self__ = this;
var this__4479__auto____$1 = this;
var G__141209 = k141200;
var G__141209__$1 = (((G__141209 instanceof cljs.core.Keyword))?G__141209.fqn:null);
switch (G__141209__$1) {
case "type":
case "message":
case "add-data":
case "trace":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k141200);

}
}));

(repl_tooling.editor_helpers.Error.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__141199){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__141210 = cljs.core.keyword_identical_QMARK_;
var expr__141211 = k__4481__auto__;
if(cljs.core.truth_((pred__141210.cljs$core$IFn$_invoke$arity$2 ? pred__141210.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348),expr__141211) : pred__141210.call(null,new cljs.core.Keyword(null,"type","type",1174270348),expr__141211)))){
return (new repl_tooling.editor_helpers.Error(G__141199,self__.message,self__.add_data,self__.trace,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__141210.cljs$core$IFn$_invoke$arity$2 ? pred__141210.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"message","message",-406056002),expr__141211) : pred__141210.call(null,new cljs.core.Keyword(null,"message","message",-406056002),expr__141211)))){
return (new repl_tooling.editor_helpers.Error(self__.type,G__141199,self__.add_data,self__.trace,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__141210.cljs$core$IFn$_invoke$arity$2 ? pred__141210.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"add-data","add-data",1561339203),expr__141211) : pred__141210.call(null,new cljs.core.Keyword(null,"add-data","add-data",1561339203),expr__141211)))){
return (new repl_tooling.editor_helpers.Error(self__.type,self__.message,G__141199,self__.trace,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__141210.cljs$core$IFn$_invoke$arity$2 ? pred__141210.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"trace","trace",-1082747415),expr__141211) : pred__141210.call(null,new cljs.core.Keyword(null,"trace","trace",-1082747415),expr__141211)))){
return (new repl_tooling.editor_helpers.Error(self__.type,self__.message,self__.add_data,G__141199,self__.__meta,self__.__extmap,null));
} else {
return (new repl_tooling.editor_helpers.Error(self__.type,self__.message,self__.add_data,self__.trace,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__141199),null));
}
}
}
}
}));

(repl_tooling.editor_helpers.Error.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"type","type",1174270348),self__.type,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"message","message",-406056002),self__.message,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"add-data","add-data",1561339203),self__.add_data,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"trace","trace",-1082747415),self__.trace,null))], null),self__.__extmap));
}));

(repl_tooling.editor_helpers.Error.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__141199){
var self__ = this;
var this__4471__auto____$1 = this;
return (new repl_tooling.editor_helpers.Error(self__.type,self__.message,self__.add_data,self__.trace,G__141199,self__.__extmap,self__.__hash));
}));

(repl_tooling.editor_helpers.Error.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4478__auto__,(0)),cljs.core._nth(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(repl_tooling.editor_helpers.Error.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type","type",-1480165421,null),new cljs.core.Symbol(null,"message","message",1234475525,null),new cljs.core.Symbol(null,"add-data","add-data",-1093096566,null),new cljs.core.Symbol(null,"trace","trace",557784112,null)], null);
}));

(repl_tooling.editor_helpers.Error.cljs$lang$type = true);

(repl_tooling.editor_helpers.Error.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"repl-tooling.editor-helpers/Error",null,(1),null));
}));

(repl_tooling.editor_helpers.Error.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"repl-tooling.editor-helpers/Error");
}));

/**
 * Positional factory function for repl-tooling.editor-helpers/Error.
 */
repl_tooling.editor_helpers.__GT_Error = (function repl_tooling$editor_helpers$__GT_Error(type,message,add_data,trace){
return (new repl_tooling.editor_helpers.Error(type,message,add_data,trace,null,null,null));
});

/**
 * Factory function for repl-tooling.editor-helpers/Error, taking a map of keywords to field values.
 */
repl_tooling.editor_helpers.map__GT_Error = (function repl_tooling$editor_helpers$map__GT_Error(G__141203){
var extmap__4512__auto__ = (function (){var G__141213 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__141203,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"add-data","add-data",1561339203),new cljs.core.Keyword(null,"trace","trace",-1082747415)], 0));
if(cljs.core.record_QMARK_(G__141203)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__141213);
} else {
return G__141213;
}
})();
return (new repl_tooling.editor_helpers.Error(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(G__141203),new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(G__141203),new cljs.core.Keyword(null,"add-data","add-data",1561339203).cljs$core$IFn$_invoke$arity$1(G__141203),new cljs.core.Keyword(null,"trace","trace",-1082747415).cljs$core$IFn$_invoke$arity$1(G__141203),null,cljs.core.not_empty(extmap__4512__auto__),null));
});

repl_tooling.editor_helpers.parse_error = (function repl_tooling$editor_helpers$parse_error(hm){
var map__141214 = hm;
var map__141214__$1 = cljs.core.__destructure_map(map__141214);
var error = map__141214__$1;
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__141214__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__141214__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__141214__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var info = (function (){var or__4223__auto__ = (function (){var G__141216 = via;
var G__141216__$1 = (((G__141216 == null))?null:cljs.core.reverse(G__141216));
if((G__141216__$1 == null)){
return null;
} else {
return cljs.core.first(G__141216__$1);
}
})();
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return error;
}
})();
var map__141215 = info;
var map__141215__$1 = cljs.core.__destructure_map(map__141215);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__141215__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__141215__$1,new cljs.core.Keyword(null,"message","message",-406056002));
return repl_tooling.editor_helpers.__GT_Error(type,message,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(info,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"at","at",1476951349),new cljs.core.Keyword(null,"trace","trace",-1082747415)], 0)),trace);
});
repl_tooling.editor_helpers.__GT_browseable = (function repl_tooling$editor_helpers$__GT_browseable(object,additional_data){
if((((object instanceof repl_tooling.editor_helpers.WithTag)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("#class ",repl_tooling.editor_helpers.tag(object))))){
var vec__141217 = repl_tooling.editor_helpers.obj(object);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__141217,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__141217,(1),null);
return repl_tooling.editor_helpers.__GT_Browseable(f,new cljs.core.Keyword("repl-tooling","...","repl-tooling/...",-2073461648).cljs$core$IFn$_invoke$arity$1(s),null);
} else {
if(((cljs.core.map_QMARK_(object)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(object),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("repl-tooling","...","repl-tooling/...",-2073461648)], null))))){
return repl_tooling.editor_helpers.__GT_IncompleteObj(new cljs.core.Keyword("repl-tooling","...","repl-tooling/...",-2073461648).cljs$core$IFn$_invoke$arity$1(object));
} else {
return repl_tooling.editor_helpers.__GT_Browseable(object,new cljs.core.Keyword("repl-tooling","...","repl-tooling/...",-2073461648).cljs$core$IFn$_invoke$arity$1(additional_data),null);

}
}
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
repl_tooling.editor_helpers.Patchable = (function (id,value,__meta,__extmap,__hash){
this.id = id;
this.value = value;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(repl_tooling.editor_helpers.Patchable.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(repl_tooling.editor_helpers.Patchable.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k141221,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__141225 = k141221;
var G__141225__$1 = (((G__141225 instanceof cljs.core.Keyword))?G__141225.fqn:null);
switch (G__141225__$1) {
case "id":
return self__.id;

break;
case "value":
return self__.value;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k141221,else__4475__auto__);

}
}));

(repl_tooling.editor_helpers.Patchable.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__141226){
var vec__141227 = p__141226;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__141227,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__141227,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(repl_tooling.editor_helpers.Patchable.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#repl-tooling.editor-helpers.Patchable{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"id","id",-1388402092),self__.id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
}));

(repl_tooling.editor_helpers.Patchable.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__141220){
var self__ = this;
var G__141220__$1 = this;
return (new cljs.core.RecordIter((0),G__141220__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"value","value",305978217)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(repl_tooling.editor_helpers.Patchable.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(repl_tooling.editor_helpers.Patchable.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new repl_tooling.editor_helpers.Patchable(self__.id,self__.value,self__.__meta,self__.__extmap,self__.__hash));
}));

(repl_tooling.editor_helpers.Patchable.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(repl_tooling.editor_helpers.Patchable.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (coll__4469__auto__){
return (-67490352 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
})(this__4468__auto____$1);
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(repl_tooling.editor_helpers.Patchable.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this141222,other141223){
var self__ = this;
var this141222__$1 = this;
return (((!((other141223 == null)))) && ((((this141222__$1.constructor === other141223.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this141222__$1.id,other141223.id)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this141222__$1.value,other141223.value)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this141222__$1.__extmap,other141223.__extmap)))))))));
}));

(repl_tooling.editor_helpers.Patchable.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),null,new cljs.core.Keyword(null,"id","id",-1388402092),null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new repl_tooling.editor_helpers.Patchable(self__.id,self__.value,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(repl_tooling.editor_helpers.Patchable.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k141221){
var self__ = this;
var this__4479__auto____$1 = this;
var G__141230 = k141221;
var G__141230__$1 = (((G__141230 instanceof cljs.core.Keyword))?G__141230.fqn:null);
switch (G__141230__$1) {
case "id":
case "value":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k141221);

}
}));

(repl_tooling.editor_helpers.Patchable.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__141220){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__141231 = cljs.core.keyword_identical_QMARK_;
var expr__141232 = k__4481__auto__;
if(cljs.core.truth_((pred__141231.cljs$core$IFn$_invoke$arity$2 ? pred__141231.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),expr__141232) : pred__141231.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),expr__141232)))){
return (new repl_tooling.editor_helpers.Patchable(G__141220,self__.value,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__141231.cljs$core$IFn$_invoke$arity$2 ? pred__141231.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"value","value",305978217),expr__141232) : pred__141231.call(null,new cljs.core.Keyword(null,"value","value",305978217),expr__141232)))){
return (new repl_tooling.editor_helpers.Patchable(self__.id,G__141220,self__.__meta,self__.__extmap,null));
} else {
return (new repl_tooling.editor_helpers.Patchable(self__.id,self__.value,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__141220),null));
}
}
}));

(repl_tooling.editor_helpers.Patchable.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"id","id",-1388402092),self__.id,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"value","value",305978217),self__.value,null))], null),self__.__extmap));
}));

(repl_tooling.editor_helpers.Patchable.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__141220){
var self__ = this;
var this__4471__auto____$1 = this;
return (new repl_tooling.editor_helpers.Patchable(self__.id,self__.value,G__141220,self__.__extmap,self__.__hash));
}));

(repl_tooling.editor_helpers.Patchable.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4478__auto__,(0)),cljs.core._nth(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(repl_tooling.editor_helpers.Patchable.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"value","value",1946509744,null)], null);
}));

(repl_tooling.editor_helpers.Patchable.cljs$lang$type = true);

(repl_tooling.editor_helpers.Patchable.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"repl-tooling.editor-helpers/Patchable",null,(1),null));
}));

(repl_tooling.editor_helpers.Patchable.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"repl-tooling.editor-helpers/Patchable");
}));

/**
 * Positional factory function for repl-tooling.editor-helpers/Patchable.
 */
repl_tooling.editor_helpers.__GT_Patchable = (function repl_tooling$editor_helpers$__GT_Patchable(id,value){
return (new repl_tooling.editor_helpers.Patchable(id,value,null,null,null));
});

/**
 * Factory function for repl-tooling.editor-helpers/Patchable, taking a map of keywords to field values.
 */
repl_tooling.editor_helpers.map__GT_Patchable = (function repl_tooling$editor_helpers$map__GT_Patchable(G__141224){
var extmap__4512__auto__ = (function (){var G__141234 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__141224,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"value","value",305978217)], 0));
if(cljs.core.record_QMARK_(G__141224)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__141234);
} else {
return G__141234;
}
})();
return (new repl_tooling.editor_helpers.Patchable(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(G__141224),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__141224),null,cljs.core.not_empty(extmap__4512__auto__),null));
});

repl_tooling.editor_helpers.as_obj = (function repl_tooling$editor_helpers$as_obj(data){
var params = cljs.core.last(data);
var vec__141235 = data;
var browseable = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__141235,(0),null);
var pr_str_obj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__141235,(1),null);
var obj_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__141235,(2),null);
if(cljs.core.truth_(pr_str_obj)){
return repl_tooling.editor_helpers.__GT_browseable(pr_str_obj,cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"bean","bean",1034195873).cljs$core$IFn$_invoke$arity$1(params),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("repl-tooling","...","repl-tooling/...",-2073461648),null], null)));
} else {
return repl_tooling.editor_helpers.__GT_browseable([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"object","object",1474613949).cljs$core$IFn$_invoke$arity$1(browseable)),"@",cljs.core.str.cljs$core$IFn$_invoke$arity$1(obj_id)].join(''),cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"bean","bean",1034195873).cljs$core$IFn$_invoke$arity$1(params),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("repl-tooling","...","repl-tooling/...",-2073461648),null], null)));
}
});
/**
 * takes an error hashmap and returns the error type as a string
 */
repl_tooling.editor_helpers.get_error_type = (function repl_tooling$editor_helpers$get_error_type(hm){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.last(new cljs.core.Keyword(null,"via","via",-1904457336).cljs$core$IFn$_invoke$arity$1(hm))));
});
/**
 * takes an error hashmap and returns the stacktrace as a string
 */
repl_tooling.editor_helpers.get_error_trace = (function repl_tooling$editor_helpers$get_error_trace(hm){
return cljs.core.type(new cljs.core.Keyword(null,"trace","trace",-1082747415).cljs$core$IFn$_invoke$arity$1(hm));
});
/**
 * takes an error hashmap and returns the cause as a string
 */
repl_tooling.editor_helpers.get_error_cause = (function repl_tooling$editor_helpers$get_error_cause(hm){
return cljs.core.type(new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(hm));
});
/**
 * a simple error format that brings the error type, cause, and trace together
 */
repl_tooling.editor_helpers.simple_error_format = (function repl_tooling$editor_helpers$simple_error_format(hm){
return ["Error: ",repl_tooling.editor_helpers.get_error_type(hm)," --> ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(repl_tooling.editor_helpers.get_error_cause(hm))," --> ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(repl_tooling.editor_helpers.get_error_trace(hm))].join('');
});
repl_tooling.editor_helpers.modify_message = (function repl_tooling$editor_helpers$modify_message(exc){
var exc_type = cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword(null,"via","via",-1904457336).cljs$core$IFn$_invoke$arity$1(exc))));
var map__141238 = exc;
var map__141238__$1 = cljs.core.__destructure_map(map__141238);
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__141238__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__141238__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__141238__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__141238__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var nested_QMARK_ = (cljs.core.count(via) > (1));
var map__141239 = cljs.core.last(via);
var map__141239__$1 = cljs.core.__destructure_map(map__141239);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__141239__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__141239__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var nested_type = cljs.core.str.cljs$core$IFn$_invoke$arity$1(type);
var phase = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via)));
var exc_info_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("clojure.lang.ExceptionInfo",exc_type);
var compiler_exc_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("clojure.lang.Compiler$CompilerException",exc_type);
if(cljs.core.truth_((function (){var and__4221__auto__ = nested_QMARK_;
if(and__4221__auto__){
var and__4221__auto____$1 = compiler_exc_QMARK_;
if(and__4221__auto____$1){
return repl_tooling.processor.macro_spec_QMARK_(cause,via);
} else {
return and__4221__auto____$1;
}
} else {
return and__4221__auto__;
}
})())){
return "spec-macro-message";
} else {
if(cljs.core.truth_((function (){var and__4221__auto__ = nested_QMARK_;
if(and__4221__auto__){
var and__4221__auto____$1 = compiler_exc_QMARK_;
if(and__4221__auto____$1){
return repl_tooling.processor.invalid_signature_QMARK_(cause,via);
} else {
return and__4221__auto____$1;
}
} else {
return and__4221__auto__;
}
})())){
return "invalid-sig-message";
} else {
if(((((exc_info_QMARK_) && ((!(nested_QMARK_))))) || (((compiler_exc_QMARK_) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("clojure.lang.ExceptionInfo",nested_type)))))){
return "spec-message";
} else {
if(((exc_info_QMARK_) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("clojure.lang.ExceptionInfo",nested_type)))){
return "spec-message-phase";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(phase,new cljs.core.Keyword(null,"print-eval-result","print-eval-result",-783412263))){
return "regular message print-phase";
} else {
return ["regular message: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(repl_tooling.processor.process_message(type,message))].join('');

}
}
}
}
}
});
repl_tooling.editor_helpers.a = (function repl_tooling$editor_helpers$a(hm){
return cljs.core.type(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.last(new cljs.core.Keyword(null,"via","via",-1904457336).cljs$core$IFn$_invoke$arity$1(hm))));
});
repl_tooling.editor_helpers.read_result = (function repl_tooling$editor_helpers$read_result(res){
try{return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"readers","readers",-2118263030),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Symbol("unrepl","bigdec","unrepl/bigdec",1219925171,null),new cljs.core.Symbol(null,"js","js",-886355190,null),new cljs.core.Symbol("repl-tooling","patchable","repl-tooling/patchable",564392648,null),new cljs.core.Symbol("unrepl","browsable","unrepl/browsable",1602639990,null),new cljs.core.Symbol("unrepl","bigint","unrepl/bigint",167196934,null),new cljs.core.Symbol(null,"error","error",661562495,null),new cljs.core.Symbol("unrepl","pattern","unrepl/pattern",36354126,null),new cljs.core.Symbol("clojure","var","clojure/var",1334488358,null),new cljs.core.Symbol("unrepl","bad-symbol","unrepl/bad-symbol",-1620045345,null),new cljs.core.Symbol("unrepl","ns","unrepl/ns",-1569898729,null),new cljs.core.Symbol("unrepl","object","unrepl/object",-1949837428,null),new cljs.core.Symbol("unrepl","bad-keyword","unrepl/bad-keyword",108551765,null),new cljs.core.Symbol("unrepl","string","unrepl/string",1026372333,null),new cljs.core.Symbol("repl-tooling","literal-render","repl-tooling/literal-render",-211717929,null),new cljs.core.Symbol("unrepl","ratio","unrepl/ratio",-127914605,null),new cljs.core.Symbol("unrepl.java","class","unrepl.java/class",-824237533,null),new cljs.core.Symbol("repl-tooling","interactive","repl-tooling/interactive",1881969409,null)],[(function (n){
return (new repl_tooling.editor_helpers.LiteralRender([cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),"M"].join('')));
}),(function (p1__141241_SHARP_){
return (new repl_tooling.editor_helpers.WithTag(p1__141241_SHARP_,"js"));
}),(function (p1__141244_SHARP_){
return repl_tooling.editor_helpers.__GT_Patchable(cljs.core.first(p1__141244_SHARP_),cljs.core.second(p1__141244_SHARP_));
}),(function (p__141249){
var vec__141250 = p__141249;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__141250,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__141250,(1),null);
return repl_tooling.editor_helpers.__GT_browseable(a,b);
}),(function (n){
return (new repl_tooling.editor_helpers.LiteralRender([cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),"N"].join('')));
}),repl_tooling.editor_helpers.modify_message,cljs.core.re_pattern,(function (p1__141245_SHARP_){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["#'",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__141245_SHARP_)].join(''));
}),(function (p__141253){
var vec__141254 = p__141253;
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__141254,(0),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__141254,(1),null);
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(ns,name);
}),(function (n){
return (new repl_tooling.editor_helpers.LiteralRender(cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)));
}),repl_tooling.editor_helpers.as_obj,(function (p__141257){
var vec__141258 = p__141257;
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__141258,(0),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__141258,(1),null);
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(ns,name);
}),(function (p1__141240_SHARP_){
return (new repl_tooling.editor_helpers.IncompleteStr(p1__141240_SHARP_));
}),(function (p1__141242_SHARP_){
return (new repl_tooling.editor_helpers.LiteralRender(p1__141242_SHARP_));
}),(function (p__141261){
var vec__141262 = p__141261;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__141262,(0),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__141262,(1),null);
return (new repl_tooling.editor_helpers.LiteralRender([cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(d)].join('')));
}),(function (k){
return (new repl_tooling.editor_helpers.WithTag(k,"class"));
}),(function (p1__141243_SHARP_){
return (new repl_tooling.editor_helpers.Interactive(p1__141243_SHARP_));
})]),new cljs.core.Keyword(null,"default","default",-1987822328),(function (p1__141247_SHARP_,p2__141246_SHARP_){
return (new repl_tooling.editor_helpers.WithTag(p2__141246_SHARP_,p1__141247_SHARP_));
})], null),res);
}catch (e141248){var _ = e141248;
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(res);
}});
var ufv___141394 = schema.utils.use_fn_validation;
var output_schema141267_141395 = repl_tooling.editor_integration.schemas.ReplResult;
var input_schema141268_141396 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"result","result",-1239343558,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null)))], null);
var input_checker141269_141397 = (new cljs.core.Delay((function (){
return schema.core.checker(input_schema141268_141396);
}),null));
var output_checker141270_141398 = (new cljs.core.Delay((function (){
return schema.core.checker(output_schema141267_141395);
}),null));
var ret__40409__auto___141401 = /**
 * Inputs: [result :- s/Any]
 *   Returns: schemas/ReplResult
 */
repl_tooling.editor_helpers.parse_result = (function repl_tooling$editor_helpers$parse_result(G__141271){
var validate__38124__auto__ = cljs.core.deref(ufv___141394);
if(cljs.core.truth_(validate__38124__auto__)){
var args__38125__auto___141402 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__141271], null);
if(cljs.core.truth_(schema.core.fn_validator)){
var G__141272_141403 = new cljs.core.Keyword(null,"input","input",556931961);
var G__141273_141404 = cljs.core.with_meta(new cljs.core.Symbol(null,"parse-result","parse-result",-161418745,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schemas","ReplResult","schemas/ReplResult",1728447817,null)], null));
var G__141274_141405 = input_schema141268_141396;
var G__141275_141406 = cljs.core.deref(input_checker141269_141397);
var G__141276_141407 = args__38125__auto___141402;
(schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5 ? schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5(G__141272_141403,G__141273_141404,G__141274_141405,G__141275_141406,G__141276_141407) : schema.core.fn_validator.call(null,G__141272_141403,G__141273_141404,G__141274_141405,G__141275_141406,G__141276_141407));
} else {
var temp__5753__auto___141408 = (function (){var fexpr__141277 = cljs.core.deref(input_checker141269_141397);
return (fexpr__141277.cljs$core$IFn$_invoke$arity$1 ? fexpr__141277.cljs$core$IFn$_invoke$arity$1(args__38125__auto___141402) : fexpr__141277.call(null,args__38125__auto___141402));
})();
if(cljs.core.truth_(temp__5753__auto___141408)){
var error__38126__auto___141409 = temp__5753__auto___141408;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.with_meta(new cljs.core.Symbol(null,"parse-result","parse-result",-161418745,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schemas","ReplResult","schemas/ReplResult",1728447817,null)], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([error__38126__auto___141409], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema141268_141396,new cljs.core.Keyword(null,"value","value",305978217),args__38125__auto___141402,new cljs.core.Keyword(null,"error","error",-978969032),error__38126__auto___141409], null));
} else {
}
}
} else {
}

var o__38127__auto__ = (function (){var result = G__141271;
while(true){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(((cljs.core.contains_QMARK_(result,new cljs.core.Keyword(null,"result","result",1415092211)))?cljs.core.update.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"result","result",1415092211),((function (validate__38124__auto__,ufv___141394,output_schema141267_141395,input_schema141268_141396,input_checker141269_141397,output_checker141270_141398){
return (function (p1__141265_SHARP_){
if(cljs.core.truth_(new cljs.core.Keyword(null,"parsed?","parsed?",44224124).cljs$core$IFn$_invoke$arity$1(result))){
return p1__141265_SHARP_;
} else {
var G__141278 = repl_tooling.editor_helpers.read_result(p1__141265_SHARP_);
var G__141278__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"literal","literal",1664775605).cljs$core$IFn$_invoke$arity$1(result))?(new repl_tooling.editor_helpers.LiteralRender(G__141278)):G__141278);
if(cljs.core.truth_(new cljs.core.Keyword(null,"interactive","interactive",-2024078362).cljs$core$IFn$_invoke$arity$1(result))){
return (new repl_tooling.editor_helpers.Interactive(G__141278__$1));
} else {
return G__141278__$1;
}
}
});})(validate__38124__auto__,ufv___141394,output_schema141267_141395,input_schema141268_141396,input_checker141269_141397,output_checker141270_141398))
):cljs.core.update.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"error","error",-978969032),((function (validate__38124__auto__,ufv___141394,output_schema141267_141395,input_schema141268_141396,input_checker141269_141397,output_checker141270_141398){
return (function (p1__141266_SHARP_){
var G__141279 = p1__141266_SHARP_;
if(cljs.core.not(new cljs.core.Keyword(null,"parsed?","parsed?",44224124).cljs$core$IFn$_invoke$arity$1(result))){
return repl_tooling.editor_helpers.read_result(G__141279);
} else {
return G__141279;
}
});})(validate__38124__auto__,ufv___141394,output_schema141267_141395,input_schema141268_141396,input_checker141269_141397,output_checker141270_141398))
)),new cljs.core.Keyword(null,"parsed?","parsed?",44224124),true);
break;
}
})();
if(cljs.core.truth_(validate__38124__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
var G__141280_141411 = new cljs.core.Keyword(null,"output","output",-1105869043);
var G__141281_141412 = cljs.core.with_meta(new cljs.core.Symbol(null,"parse-result","parse-result",-161418745,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schemas","ReplResult","schemas/ReplResult",1728447817,null)], null));
var G__141282_141413 = output_schema141267_141395;
var G__141283_141414 = cljs.core.deref(output_checker141270_141398);
var G__141284_141415 = o__38127__auto__;
(schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5 ? schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5(G__141280_141411,G__141281_141412,G__141282_141413,G__141283_141414,G__141284_141415) : schema.core.fn_validator.call(null,G__141280_141411,G__141281_141412,G__141282_141413,G__141283_141414,G__141284_141415));
} else {
var temp__5753__auto___141416 = (function (){var fexpr__141285 = cljs.core.deref(output_checker141270_141398);
return (fexpr__141285.cljs$core$IFn$_invoke$arity$1 ? fexpr__141285.cljs$core$IFn$_invoke$arity$1(o__38127__auto__) : fexpr__141285.call(null,o__38127__auto__));
})();
if(cljs.core.truth_(temp__5753__auto___141416)){
var error__38126__auto___141421 = temp__5753__auto___141416;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.with_meta(new cljs.core.Symbol(null,"parse-result","parse-result",-161418745,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schemas","ReplResult","schemas/ReplResult",1728447817,null)], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([error__38126__auto___141421], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema141267_141395,new cljs.core.Keyword(null,"value","value",305978217),o__38127__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__38126__auto___141421], null));
} else {
}
}
} else {
}

return o__38127__auto__;
});
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(repl_tooling.editor_helpers.parse_result),schema.core.__GT_FnSchema(output_schema141267_141395,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema141268_141396], null)));

repl_tooling.editor_helpers.text_in_range = duck_repled.editor_helpers.text_in_range;
repl_tooling.editor_helpers.top_levels = duck_repled.editor_helpers.top_blocks;
repl_tooling.editor_helpers.current_var = duck_repled.editor_helpers.current_var;
repl_tooling.editor_helpers.block_for = duck_repled.editor_helpers.block_for;
repl_tooling.editor_helpers.top_block_for = (function repl_tooling$editor_helpers$top_block_for(text,position){
var tops = duck_repled.editor_helpers.top_blocks(text);
return duck_repled.editor_helpers.top_block_for(tops,position);
});
repl_tooling.editor_helpers.ns_range_for = (function repl_tooling$editor_helpers$ns_range_for(text,position){
var tops = duck_repled.editor_helpers.top_blocks(text);
return duck_repled.editor_helpers.ns_range_for(tops,position);
});
repl_tooling.editor_helpers._STAR_out_on_aux_STAR_ = false;
repl_tooling.editor_helpers.with_out = (function repl_tooling$editor_helpers$with_out(fun){
(repl_tooling.editor_helpers._STAR_out_on_aux_STAR_ = true);

var p = promesa.protocols._bind(null,(function (___31810__auto__){
return promesa.protocols._promise((fun.cljs$core$IFn$_invoke$arity$0 ? fun.cljs$core$IFn$_invoke$arity$0() : fun.call(null)));
}));
promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(p,(function (){
return (repl_tooling.editor_helpers._STAR_out_on_aux_STAR_ = false);
}));

return p;
});
var ufv___141423 = schema.utils.use_fn_validation;
var output_schema141286_141424 = schema.core.maybe(schema.core.Int);
var input_schema141287_141425 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Str], null),cljs.core.with_meta(new cljs.core.Symbol(null,"project-paths","project-paths",3061721,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Str","s/Str",907974338,null)], null)], null))),schema.core.one(schema.core.Bool,cljs.core.with_meta(new cljs.core.Symbol(null,"detect-nrepl?","detect-nrepl?",-1146406677,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null)], null))),schema.core.one(schema.core.maybe(schema.core.Int),cljs.core.with_meta(new cljs.core.Symbol(null,"typed-port","typed-port",-1871933203,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","maybe","s/maybe",1326133944,null),new cljs.core.Symbol("s","Int","s/Int",-2116888657,null))], null)))], null);
var input_checker141288_141426 = (new cljs.core.Delay((function (){
return schema.core.checker(input_schema141287_141425);
}),null));
var output_checker141289_141427 = (new cljs.core.Delay((function (){
return schema.core.checker(output_schema141286_141424);
}),null));
var ret__40409__auto___141429 = /**
 * Inputs: [project-paths :- [s/Str] detect-nrepl? :- s/Bool typed-port :- (s/maybe s/Int)]
 *   Returns: (s/maybe s/Int)
 */
repl_tooling.editor_helpers.get_possible_port = (function repl_tooling$editor_helpers$get_possible_port(G__141290,G__141291,G__141292){
var validate__38124__auto__ = cljs.core.deref(ufv___141423);
if(cljs.core.truth_(validate__38124__auto__)){
var args__38125__auto___141430 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__141290,G__141291,G__141292], null);
if(cljs.core.truth_(schema.core.fn_validator)){
var G__141293_141431 = new cljs.core.Keyword(null,"input","input",556931961);
var G__141294_141432 = cljs.core.with_meta(new cljs.core.Symbol(null,"get-possible-port","get-possible-port",-870822536,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","maybe","s/maybe",1326133944,null),new cljs.core.Symbol("s","Int","s/Int",-2116888657,null))], null));
var G__141295_141433 = input_schema141287_141425;
var G__141296_141434 = cljs.core.deref(input_checker141288_141426);
var G__141297_141435 = args__38125__auto___141430;
(schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5 ? schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5(G__141293_141431,G__141294_141432,G__141295_141433,G__141296_141434,G__141297_141435) : schema.core.fn_validator.call(null,G__141293_141431,G__141294_141432,G__141295_141433,G__141296_141434,G__141297_141435));
} else {
var temp__5753__auto___141437 = (function (){var fexpr__141298 = cljs.core.deref(input_checker141288_141426);
return (fexpr__141298.cljs$core$IFn$_invoke$arity$1 ? fexpr__141298.cljs$core$IFn$_invoke$arity$1(args__38125__auto___141430) : fexpr__141298.call(null,args__38125__auto___141430));
})();
if(cljs.core.truth_(temp__5753__auto___141437)){
var error__38126__auto___141439 = temp__5753__auto___141437;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.with_meta(new cljs.core.Symbol(null,"get-possible-port","get-possible-port",-870822536,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","maybe","s/maybe",1326133944,null),new cljs.core.Symbol("s","Int","s/Int",-2116888657,null))], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([error__38126__auto___141439], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema141287_141425,new cljs.core.Keyword(null,"value","value",305978217),args__38125__auto___141430,new cljs.core.Keyword(null,"error","error",-978969032),error__38126__auto___141439], null));
} else {
}
}
} else {
}

var o__38127__auto__ = (function (){var project_paths = G__141290;
var detect_nrepl_QMARK_ = G__141291;
var typed_port = G__141292;
while(true){
if(cljs.core.truth_(typed_port)){
return typed_port;
} else {
var files = (function (){var G__141299 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [".socket-repl-port",shadow.js.shim.module$path.join(".shadow-cljs","socket-repl.port")], null);
if(cljs.core.truth_(detect_nrepl_QMARK_)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__141299,".nrepl-port");
} else {
return G__141299;
}
})();
var paths = (function (){var iter__4622__auto__ = ((function (files,validate__38124__auto__,ufv___141423,output_schema141286_141424,input_schema141287_141425,input_checker141288_141426,output_checker141289_141427){
return (function repl_tooling$editor_helpers$get_possible_port_$_iter__141300(s__141301){
return (new cljs.core.LazySeq(null,(function (){
var s__141301__$1 = s__141301;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__141301__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var file = cljs.core.first(xs__6308__auto__);
var iterys__4618__auto__ = ((function (s__141301__$1,file,xs__6308__auto__,temp__5753__auto__,files,validate__38124__auto__,ufv___141423,output_schema141286_141424,input_schema141287_141425,input_checker141288_141426,output_checker141289_141427){
return (function repl_tooling$editor_helpers$get_possible_port_$_iter__141300_$_iter__141302(s__141303){
return (new cljs.core.LazySeq(null,((function (s__141301__$1,file,xs__6308__auto__,temp__5753__auto__,files,validate__38124__auto__,ufv___141423,output_schema141286_141424,input_schema141287_141425,input_checker141288_141426,output_checker141289_141427){
return (function (){
var s__141303__$1 = s__141303;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__141303__$1);
if(temp__5753__auto____$1){
var s__141303__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__141303__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__141303__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__141305 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__141304 = (0);
while(true){
if((i__141304 < size__4621__auto__)){
var path = cljs.core._nth(c__4620__auto__,i__141304);
var full_path = shadow.js.shim.module$path.join(path,file);
if(cljs.core.truth_(shadow.js.shim.module$fs.existsSync(full_path))){
cljs.core.chunk_append(b__141305,parseInt(cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.js.shim.module$fs.readFileSync(full_path))));

var G__141446 = (i__141304 + (1));
i__141304 = G__141446;
continue;
} else {
var G__141447 = (i__141304 + (1));
i__141304 = G__141447;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__141305),repl_tooling$editor_helpers$get_possible_port_$_iter__141300_$_iter__141302(cljs.core.chunk_rest(s__141303__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__141305),null);
}
} else {
var path = cljs.core.first(s__141303__$2);
var full_path = shadow.js.shim.module$path.join(path,file);
if(cljs.core.truth_(shadow.js.shim.module$fs.existsSync(full_path))){
return cljs.core.cons(parseInt(cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.js.shim.module$fs.readFileSync(full_path))),repl_tooling$editor_helpers$get_possible_port_$_iter__141300_$_iter__141302(cljs.core.rest(s__141303__$2)));
} else {
var G__141448 = cljs.core.rest(s__141303__$2);
s__141303__$1 = G__141448;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__141301__$1,file,xs__6308__auto__,temp__5753__auto__,files,validate__38124__auto__,ufv___141423,output_schema141286_141424,input_schema141287_141425,input_checker141288_141426,output_checker141289_141427))
,null,null));
});})(s__141301__$1,file,xs__6308__auto__,temp__5753__auto__,files,validate__38124__auto__,ufv___141423,output_schema141286_141424,input_schema141287_141425,input_checker141288_141426,output_checker141289_141427))
;
var fs__4619__auto__ = cljs.core.seq(iterys__4618__auto__(project_paths));
if(fs__4619__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4619__auto__,repl_tooling$editor_helpers$get_possible_port_$_iter__141300(cljs.core.rest(s__141301__$1)));
} else {
var G__141451 = cljs.core.rest(s__141301__$1);
s__141301__$1 = G__141451;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});})(files,validate__38124__auto__,ufv___141423,output_schema141286_141424,input_schema141287_141425,input_checker141288_141426,output_checker141289_141427))
;
return iter__4622__auto__(files);
})();
return cljs.core.first(paths);
}
break;
}
})();
if(cljs.core.truth_(validate__38124__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
var G__141306_141452 = new cljs.core.Keyword(null,"output","output",-1105869043);
var G__141307_141453 = cljs.core.with_meta(new cljs.core.Symbol(null,"get-possible-port","get-possible-port",-870822536,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","maybe","s/maybe",1326133944,null),new cljs.core.Symbol("s","Int","s/Int",-2116888657,null))], null));
var G__141308_141454 = output_schema141286_141424;
var G__141309_141455 = cljs.core.deref(output_checker141289_141427);
var G__141310_141456 = o__38127__auto__;
(schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5 ? schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5(G__141306_141452,G__141307_141453,G__141308_141454,G__141309_141455,G__141310_141456) : schema.core.fn_validator.call(null,G__141306_141452,G__141307_141453,G__141308_141454,G__141309_141455,G__141310_141456));
} else {
var temp__5753__auto___141458 = (function (){var fexpr__141311 = cljs.core.deref(output_checker141289_141427);
return (fexpr__141311.cljs$core$IFn$_invoke$arity$1 ? fexpr__141311.cljs$core$IFn$_invoke$arity$1(o__38127__auto__) : fexpr__141311.call(null,o__38127__auto__));
})();
if(cljs.core.truth_(temp__5753__auto___141458)){
var error__38126__auto___141459 = temp__5753__auto___141458;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.with_meta(new cljs.core.Symbol(null,"get-possible-port","get-possible-port",-870822536,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","maybe","s/maybe",1326133944,null),new cljs.core.Symbol("s","Int","s/Int",-2116888657,null))], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([error__38126__auto___141459], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema141286_141424,new cljs.core.Keyword(null,"value","value",305978217),o__38127__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__38126__auto___141459], null));
} else {
}
}
} else {
}

return o__38127__auto__;
});
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(repl_tooling.editor_helpers.get_possible_port),schema.core.__GT_FnSchema(output_schema141286_141424,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema141287_141425], null)));


//# sourceMappingURL=repl_tooling.editor_helpers.js.map
