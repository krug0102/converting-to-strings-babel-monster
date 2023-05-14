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

var repl_tooling$editor_helpers$IIncompleteStr$only_str$dyn_136301 = (function (_){
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
return repl_tooling$editor_helpers$IIncompleteStr$only_str$dyn_136301(_);
}
});

var repl_tooling$editor_helpers$IIncompleteStr$concat_with$dyn_136305 = (function (_,other){
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
return repl_tooling$editor_helpers$IIncompleteStr$concat_with$dyn_136305(_,other);
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

var repl_tooling$editor_helpers$Taggable$obj$dyn_136313 = (function (this$){
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
return repl_tooling$editor_helpers$Taggable$obj$dyn_136313(this$);
}
});

var repl_tooling$editor_helpers$Taggable$tag$dyn_136315 = (function (this$){
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
return repl_tooling$editor_helpers$Taggable$tag$dyn_136315(this$);
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

(repl_tooling.editor_helpers.Browseable.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k135867,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__135889 = k135867;
var G__135889__$1 = (((G__135889 instanceof cljs.core.Keyword))?G__135889.fqn:null);
switch (G__135889__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k135867,else__4475__auto__);

}
}));

(repl_tooling.editor_helpers.Browseable.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__135893){
var vec__135895 = p__135893;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__135895,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__135895,(1),null);
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

(repl_tooling.editor_helpers.Browseable.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__135866){
var self__ = this;
var G__135866__$1 = this;
return (new cljs.core.RecordIter((0),G__135866__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"object","object",1474613949),new cljs.core.Keyword(null,"more-fn","more-fn",-1002134682),new cljs.core.Keyword(null,"attributes","attributes",-74013604)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(repl_tooling.editor_helpers.Browseable.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this135869,other135870){
var self__ = this;
var this135869__$1 = this;
return (((!((other135870 == null)))) && ((((this135869__$1.constructor === other135870.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this135869__$1.object,other135870.object)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this135869__$1.more_fn,other135870.more_fn)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this135869__$1.attributes,other135870.attributes)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this135869__$1.__extmap,other135870.__extmap)))))))))));
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

(repl_tooling.editor_helpers.Browseable.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k135867){
var self__ = this;
var this__4479__auto____$1 = this;
var G__135943 = k135867;
var G__135943__$1 = (((G__135943 instanceof cljs.core.Keyword))?G__135943.fqn:null);
switch (G__135943__$1) {
case "object":
case "more-fn":
case "attributes":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k135867);

}
}));

(repl_tooling.editor_helpers.Browseable.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__135866){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__135951 = cljs.core.keyword_identical_QMARK_;
var expr__135952 = k__4481__auto__;
if(cljs.core.truth_((pred__135951.cljs$core$IFn$_invoke$arity$2 ? pred__135951.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"object","object",1474613949),expr__135952) : pred__135951.call(null,new cljs.core.Keyword(null,"object","object",1474613949),expr__135952)))){
return (new repl_tooling.editor_helpers.Browseable(G__135866,self__.more_fn,self__.attributes,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__135951.cljs$core$IFn$_invoke$arity$2 ? pred__135951.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"more-fn","more-fn",-1002134682),expr__135952) : pred__135951.call(null,new cljs.core.Keyword(null,"more-fn","more-fn",-1002134682),expr__135952)))){
return (new repl_tooling.editor_helpers.Browseable(self__.object,G__135866,self__.attributes,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__135951.cljs$core$IFn$_invoke$arity$2 ? pred__135951.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"attributes","attributes",-74013604),expr__135952) : pred__135951.call(null,new cljs.core.Keyword(null,"attributes","attributes",-74013604),expr__135952)))){
return (new repl_tooling.editor_helpers.Browseable(self__.object,self__.more_fn,G__135866,self__.__meta,self__.__extmap,null));
} else {
return (new repl_tooling.editor_helpers.Browseable(self__.object,self__.more_fn,self__.attributes,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__135866),null));
}
}
}
}));

(repl_tooling.editor_helpers.Browseable.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"object","object",1474613949),self__.object,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"more-fn","more-fn",-1002134682),self__.more_fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"attributes","attributes",-74013604),self__.attributes,null))], null),self__.__extmap));
}));

(repl_tooling.editor_helpers.Browseable.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__135866){
var self__ = this;
var this__4471__auto____$1 = this;
return (new repl_tooling.editor_helpers.Browseable(self__.object,self__.more_fn,self__.attributes,G__135866,self__.__extmap,self__.__hash));
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
repl_tooling.editor_helpers.map__GT_Browseable = (function repl_tooling$editor_helpers$map__GT_Browseable(G__135875){
var extmap__4512__auto__ = (function (){var G__135964 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__135875,new cljs.core.Keyword(null,"object","object",1474613949),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"more-fn","more-fn",-1002134682),new cljs.core.Keyword(null,"attributes","attributes",-74013604)], 0));
if(cljs.core.record_QMARK_(G__135875)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__135964);
} else {
return G__135964;
}
})();
return (new repl_tooling.editor_helpers.Browseable(new cljs.core.Keyword(null,"object","object",1474613949).cljs$core$IFn$_invoke$arity$1(G__135875),new cljs.core.Keyword(null,"more-fn","more-fn",-1002134682).cljs$core$IFn$_invoke$arity$1(G__135875),new cljs.core.Keyword(null,"attributes","attributes",-74013604).cljs$core$IFn$_invoke$arity$1(G__135875),null,cljs.core.not_empty(extmap__4512__auto__),null));
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

(repl_tooling.editor_helpers.IncompleteObj.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k135969,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__135978 = k135969;
var G__135978__$1 = (((G__135978 instanceof cljs.core.Keyword))?G__135978.fqn:null);
switch (G__135978__$1) {
case "more-fn":
return self__.more_fn;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k135969,else__4475__auto__);

}
}));

(repl_tooling.editor_helpers.IncompleteObj.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__135982){
var vec__135983 = p__135982;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__135983,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__135983,(1),null);
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

(repl_tooling.editor_helpers.IncompleteObj.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__135968){
var self__ = this;
var G__135968__$1 = this;
return (new cljs.core.RecordIter((0),G__135968__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"more-fn","more-fn",-1002134682)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(repl_tooling.editor_helpers.IncompleteObj.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this135970,other135971){
var self__ = this;
var this135970__$1 = this;
return (((!((other135971 == null)))) && ((((this135970__$1.constructor === other135971.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this135970__$1.more_fn,other135971.more_fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this135970__$1.__extmap,other135971.__extmap)))))));
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

(repl_tooling.editor_helpers.IncompleteObj.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k135969){
var self__ = this;
var this__4479__auto____$1 = this;
var G__135990 = k135969;
var G__135990__$1 = (((G__135990 instanceof cljs.core.Keyword))?G__135990.fqn:null);
switch (G__135990__$1) {
case "more-fn":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k135969);

}
}));

(repl_tooling.editor_helpers.IncompleteObj.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__135968){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__135993 = cljs.core.keyword_identical_QMARK_;
var expr__135994 = k__4481__auto__;
if(cljs.core.truth_((pred__135993.cljs$core$IFn$_invoke$arity$2 ? pred__135993.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"more-fn","more-fn",-1002134682),expr__135994) : pred__135993.call(null,new cljs.core.Keyword(null,"more-fn","more-fn",-1002134682),expr__135994)))){
return (new repl_tooling.editor_helpers.IncompleteObj(G__135968,self__.__meta,self__.__extmap,null));
} else {
return (new repl_tooling.editor_helpers.IncompleteObj(self__.more_fn,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__135968),null));
}
}));

(repl_tooling.editor_helpers.IncompleteObj.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"more-fn","more-fn",-1002134682),self__.more_fn,null))], null),self__.__extmap));
}));

(repl_tooling.editor_helpers.IncompleteObj.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__135968){
var self__ = this;
var this__4471__auto____$1 = this;
return (new repl_tooling.editor_helpers.IncompleteObj(self__.more_fn,G__135968,self__.__extmap,self__.__hash));
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
repl_tooling.editor_helpers.map__GT_IncompleteObj = (function repl_tooling$editor_helpers$map__GT_IncompleteObj(G__135974){
var extmap__4512__auto__ = (function (){var G__136005 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__135974,new cljs.core.Keyword(null,"more-fn","more-fn",-1002134682));
if(cljs.core.record_QMARK_(G__135974)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__136005);
} else {
return G__136005;
}
})();
return (new repl_tooling.editor_helpers.IncompleteObj(new cljs.core.Keyword(null,"more-fn","more-fn",-1002134682).cljs$core$IFn$_invoke$arity$1(G__135974),null,cljs.core.not_empty(extmap__4512__auto__),null));
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

(repl_tooling.editor_helpers.Error.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k136008,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__136019 = k136008;
var G__136019__$1 = (((G__136019 instanceof cljs.core.Keyword))?G__136019.fqn:null);
switch (G__136019__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k136008,else__4475__auto__);

}
}));

(repl_tooling.editor_helpers.Error.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__136024){
var vec__136025 = p__136024;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__136025,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__136025,(1),null);
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

(repl_tooling.editor_helpers.Error.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__136007){
var self__ = this;
var G__136007__$1 = this;
return (new cljs.core.RecordIter((0),G__136007__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"add-data","add-data",1561339203),new cljs.core.Keyword(null,"trace","trace",-1082747415)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(repl_tooling.editor_helpers.Error.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this136009,other136010){
var self__ = this;
var this136009__$1 = this;
return (((!((other136010 == null)))) && ((((this136009__$1.constructor === other136010.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this136009__$1.type,other136010.type)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this136009__$1.message,other136010.message)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this136009__$1.add_data,other136010.add_data)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this136009__$1.trace,other136010.trace)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this136009__$1.__extmap,other136010.__extmap)))))))))))));
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

(repl_tooling.editor_helpers.Error.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k136008){
var self__ = this;
var this__4479__auto____$1 = this;
var G__136047 = k136008;
var G__136047__$1 = (((G__136047 instanceof cljs.core.Keyword))?G__136047.fqn:null);
switch (G__136047__$1) {
case "type":
case "message":
case "add-data":
case "trace":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k136008);

}
}));

(repl_tooling.editor_helpers.Error.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__136007){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__136051 = cljs.core.keyword_identical_QMARK_;
var expr__136052 = k__4481__auto__;
if(cljs.core.truth_((pred__136051.cljs$core$IFn$_invoke$arity$2 ? pred__136051.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348),expr__136052) : pred__136051.call(null,new cljs.core.Keyword(null,"type","type",1174270348),expr__136052)))){
return (new repl_tooling.editor_helpers.Error(G__136007,self__.message,self__.add_data,self__.trace,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__136051.cljs$core$IFn$_invoke$arity$2 ? pred__136051.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"message","message",-406056002),expr__136052) : pred__136051.call(null,new cljs.core.Keyword(null,"message","message",-406056002),expr__136052)))){
return (new repl_tooling.editor_helpers.Error(self__.type,G__136007,self__.add_data,self__.trace,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__136051.cljs$core$IFn$_invoke$arity$2 ? pred__136051.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"add-data","add-data",1561339203),expr__136052) : pred__136051.call(null,new cljs.core.Keyword(null,"add-data","add-data",1561339203),expr__136052)))){
return (new repl_tooling.editor_helpers.Error(self__.type,self__.message,G__136007,self__.trace,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__136051.cljs$core$IFn$_invoke$arity$2 ? pred__136051.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"trace","trace",-1082747415),expr__136052) : pred__136051.call(null,new cljs.core.Keyword(null,"trace","trace",-1082747415),expr__136052)))){
return (new repl_tooling.editor_helpers.Error(self__.type,self__.message,self__.add_data,G__136007,self__.__meta,self__.__extmap,null));
} else {
return (new repl_tooling.editor_helpers.Error(self__.type,self__.message,self__.add_data,self__.trace,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__136007),null));
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

(repl_tooling.editor_helpers.Error.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__136007){
var self__ = this;
var this__4471__auto____$1 = this;
return (new repl_tooling.editor_helpers.Error(self__.type,self__.message,self__.add_data,self__.trace,G__136007,self__.__extmap,self__.__hash));
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
repl_tooling.editor_helpers.map__GT_Error = (function repl_tooling$editor_helpers$map__GT_Error(G__136013){
var extmap__4512__auto__ = (function (){var G__136064 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__136013,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"add-data","add-data",1561339203),new cljs.core.Keyword(null,"trace","trace",-1082747415)], 0));
if(cljs.core.record_QMARK_(G__136013)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__136064);
} else {
return G__136064;
}
})();
return (new repl_tooling.editor_helpers.Error(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(G__136013),new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(G__136013),new cljs.core.Keyword(null,"add-data","add-data",1561339203).cljs$core$IFn$_invoke$arity$1(G__136013),new cljs.core.Keyword(null,"trace","trace",-1082747415).cljs$core$IFn$_invoke$arity$1(G__136013),null,cljs.core.not_empty(extmap__4512__auto__),null));
});

repl_tooling.editor_helpers.parse_error = (function repl_tooling$editor_helpers$parse_error(hm){
var map__136068 = hm;
var map__136068__$1 = cljs.core.__destructure_map(map__136068);
var error = map__136068__$1;
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__136068__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__136068__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__136068__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var info = (function (){var or__4223__auto__ = (function (){var G__136070 = via;
var G__136070__$1 = (((G__136070 == null))?null:cljs.core.reverse(G__136070));
if((G__136070__$1 == null)){
return null;
} else {
return cljs.core.first(G__136070__$1);
}
})();
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return error;
}
})();
var map__136069 = info;
var map__136069__$1 = cljs.core.__destructure_map(map__136069);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__136069__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__136069__$1,new cljs.core.Keyword(null,"message","message",-406056002));
return repl_tooling.editor_helpers.__GT_Error(type,message,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(info,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"at","at",1476951349),new cljs.core.Keyword(null,"trace","trace",-1082747415)], 0)),trace);
});
repl_tooling.editor_helpers.__GT_browseable = (function repl_tooling$editor_helpers$__GT_browseable(object,additional_data){
if((((object instanceof repl_tooling.editor_helpers.WithTag)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("#class ",repl_tooling.editor_helpers.tag(object))))){
var vec__136076 = repl_tooling.editor_helpers.obj(object);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__136076,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__136076,(1),null);
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

(repl_tooling.editor_helpers.Patchable.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k136083,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__136090 = k136083;
var G__136090__$1 = (((G__136090 instanceof cljs.core.Keyword))?G__136090.fqn:null);
switch (G__136090__$1) {
case "id":
return self__.id;

break;
case "value":
return self__.value;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k136083,else__4475__auto__);

}
}));

(repl_tooling.editor_helpers.Patchable.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__136093){
var vec__136094 = p__136093;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__136094,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__136094,(1),null);
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

(repl_tooling.editor_helpers.Patchable.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__136082){
var self__ = this;
var G__136082__$1 = this;
return (new cljs.core.RecordIter((0),G__136082__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"value","value",305978217)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(repl_tooling.editor_helpers.Patchable.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this136084,other136085){
var self__ = this;
var this136084__$1 = this;
return (((!((other136085 == null)))) && ((((this136084__$1.constructor === other136085.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this136084__$1.id,other136085.id)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this136084__$1.value,other136085.value)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this136084__$1.__extmap,other136085.__extmap)))))))));
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

(repl_tooling.editor_helpers.Patchable.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k136083){
var self__ = this;
var this__4479__auto____$1 = this;
var G__136115 = k136083;
var G__136115__$1 = (((G__136115 instanceof cljs.core.Keyword))?G__136115.fqn:null);
switch (G__136115__$1) {
case "id":
case "value":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k136083);

}
}));

(repl_tooling.editor_helpers.Patchable.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__136082){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__136118 = cljs.core.keyword_identical_QMARK_;
var expr__136119 = k__4481__auto__;
if(cljs.core.truth_((pred__136118.cljs$core$IFn$_invoke$arity$2 ? pred__136118.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),expr__136119) : pred__136118.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),expr__136119)))){
return (new repl_tooling.editor_helpers.Patchable(G__136082,self__.value,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__136118.cljs$core$IFn$_invoke$arity$2 ? pred__136118.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"value","value",305978217),expr__136119) : pred__136118.call(null,new cljs.core.Keyword(null,"value","value",305978217),expr__136119)))){
return (new repl_tooling.editor_helpers.Patchable(self__.id,G__136082,self__.__meta,self__.__extmap,null));
} else {
return (new repl_tooling.editor_helpers.Patchable(self__.id,self__.value,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__136082),null));
}
}
}));

(repl_tooling.editor_helpers.Patchable.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"id","id",-1388402092),self__.id,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"value","value",305978217),self__.value,null))], null),self__.__extmap));
}));

(repl_tooling.editor_helpers.Patchable.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__136082){
var self__ = this;
var this__4471__auto____$1 = this;
return (new repl_tooling.editor_helpers.Patchable(self__.id,self__.value,G__136082,self__.__extmap,self__.__hash));
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
repl_tooling.editor_helpers.map__GT_Patchable = (function repl_tooling$editor_helpers$map__GT_Patchable(G__136086){
var extmap__4512__auto__ = (function (){var G__136132 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__136086,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"value","value",305978217)], 0));
if(cljs.core.record_QMARK_(G__136086)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__136132);
} else {
return G__136132;
}
})();
return (new repl_tooling.editor_helpers.Patchable(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(G__136086),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__136086),null,cljs.core.not_empty(extmap__4512__auto__),null));
});

repl_tooling.editor_helpers.as_obj = (function repl_tooling$editor_helpers$as_obj(data){
var params = cljs.core.last(data);
var vec__136137 = data;
var browseable = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__136137,(0),null);
var pr_str_obj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__136137,(1),null);
var obj_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__136137,(2),null);
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
var map__136153 = exc;
var map__136153__$1 = cljs.core.__destructure_map(map__136153);
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__136153__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__136153__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__136153__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__136153__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var nested_QMARK_ = (cljs.core.count(via) > (1));
var map__136154 = cljs.core.last(via);
var map__136154__$1 = cljs.core.__destructure_map(map__136154);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__136154__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__136154__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
}),(function (p1__136165_SHARP_){
return (new repl_tooling.editor_helpers.WithTag(p1__136165_SHARP_,"js"));
}),(function (p1__136169_SHARP_){
return repl_tooling.editor_helpers.__GT_Patchable(cljs.core.first(p1__136169_SHARP_),cljs.core.second(p1__136169_SHARP_));
}),(function (p__136178){
var vec__136179 = p__136178;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__136179,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__136179,(1),null);
return repl_tooling.editor_helpers.__GT_browseable(a,b);
}),(function (n){
return (new repl_tooling.editor_helpers.LiteralRender([cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),"N"].join('')));
}),repl_tooling.editor_helpers.modify_message,cljs.core.re_pattern,(function (p1__136170_SHARP_){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["#'",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__136170_SHARP_)].join(''));
}),(function (p__136183){
var vec__136185 = p__136183;
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__136185,(0),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__136185,(1),null);
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(ns,name);
}),(function (n){
return (new repl_tooling.editor_helpers.LiteralRender(cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)));
}),repl_tooling.editor_helpers.as_obj,(function (p__136189){
var vec__136191 = p__136189;
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__136191,(0),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__136191,(1),null);
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(ns,name);
}),(function (p1__136164_SHARP_){
return (new repl_tooling.editor_helpers.IncompleteStr(p1__136164_SHARP_));
}),(function (p1__136167_SHARP_){
return (new repl_tooling.editor_helpers.LiteralRender(p1__136167_SHARP_));
}),(function (p__136195){
var vec__136197 = p__136195;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__136197,(0),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__136197,(1),null);
return (new repl_tooling.editor_helpers.LiteralRender([cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(d)].join('')));
}),(function (k){
return (new repl_tooling.editor_helpers.WithTag(k,"class"));
}),(function (p1__136168_SHARP_){
return (new repl_tooling.editor_helpers.Interactive(p1__136168_SHARP_));
})]),new cljs.core.Keyword(null,"default","default",-1987822328),(function (p1__136172_SHARP_,p2__136171_SHARP_){
return (new repl_tooling.editor_helpers.WithTag(p2__136171_SHARP_,p1__136172_SHARP_));
})], null),res);
}catch (e136174){var _ = e136174;
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(res);
}});
var ufv___136416 = schema.utils.use_fn_validation;
var output_schema136206_136417 = repl_tooling.editor_integration.schemas.ReplResult;
var input_schema136207_136418 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"result","result",-1239343558,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null)))], null);
var input_checker136208_136419 = (new cljs.core.Delay((function (){
return schema.core.checker(input_schema136207_136418);
}),null));
var output_checker136209_136420 = (new cljs.core.Delay((function (){
return schema.core.checker(output_schema136206_136417);
}),null));
var ret__40409__auto___136423 = /**
 * Inputs: [result :- s/Any]
 *   Returns: schemas/ReplResult
 */
repl_tooling.editor_helpers.parse_result = (function repl_tooling$editor_helpers$parse_result(G__136210){
var validate__38124__auto__ = cljs.core.deref(ufv___136416);
if(cljs.core.truth_(validate__38124__auto__)){
var args__38125__auto___136424 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__136210], null);
if(cljs.core.truth_(schema.core.fn_validator)){
var G__136215_136425 = new cljs.core.Keyword(null,"input","input",556931961);
var G__136216_136426 = cljs.core.with_meta(new cljs.core.Symbol(null,"parse-result","parse-result",-161418745,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schemas","ReplResult","schemas/ReplResult",1728447817,null)], null));
var G__136217_136427 = input_schema136207_136418;
var G__136218_136428 = cljs.core.deref(input_checker136208_136419);
var G__136219_136429 = args__38125__auto___136424;
(schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5 ? schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5(G__136215_136425,G__136216_136426,G__136217_136427,G__136218_136428,G__136219_136429) : schema.core.fn_validator.call(null,G__136215_136425,G__136216_136426,G__136217_136427,G__136218_136428,G__136219_136429));
} else {
var temp__5753__auto___136431 = (function (){var fexpr__136221 = cljs.core.deref(input_checker136208_136419);
return (fexpr__136221.cljs$core$IFn$_invoke$arity$1 ? fexpr__136221.cljs$core$IFn$_invoke$arity$1(args__38125__auto___136424) : fexpr__136221.call(null,args__38125__auto___136424));
})();
if(cljs.core.truth_(temp__5753__auto___136431)){
var error__38126__auto___136432 = temp__5753__auto___136431;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.with_meta(new cljs.core.Symbol(null,"parse-result","parse-result",-161418745,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schemas","ReplResult","schemas/ReplResult",1728447817,null)], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([error__38126__auto___136432], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema136207_136418,new cljs.core.Keyword(null,"value","value",305978217),args__38125__auto___136424,new cljs.core.Keyword(null,"error","error",-978969032),error__38126__auto___136432], null));
} else {
}
}
} else {
}

var o__38127__auto__ = (function (){var result = G__136210;
while(true){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(((cljs.core.contains_QMARK_(result,new cljs.core.Keyword(null,"result","result",1415092211)))?cljs.core.update.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"result","result",1415092211),((function (validate__38124__auto__,ufv___136416,output_schema136206_136417,input_schema136207_136418,input_checker136208_136419,output_checker136209_136420){
return (function (p1__136203_SHARP_){
if(cljs.core.truth_(new cljs.core.Keyword(null,"parsed?","parsed?",44224124).cljs$core$IFn$_invoke$arity$1(result))){
return p1__136203_SHARP_;
} else {
var G__136224 = repl_tooling.editor_helpers.read_result(p1__136203_SHARP_);
var G__136224__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"literal","literal",1664775605).cljs$core$IFn$_invoke$arity$1(result))?(new repl_tooling.editor_helpers.LiteralRender(G__136224)):G__136224);
if(cljs.core.truth_(new cljs.core.Keyword(null,"interactive","interactive",-2024078362).cljs$core$IFn$_invoke$arity$1(result))){
return (new repl_tooling.editor_helpers.Interactive(G__136224__$1));
} else {
return G__136224__$1;
}
}
});})(validate__38124__auto__,ufv___136416,output_schema136206_136417,input_schema136207_136418,input_checker136208_136419,output_checker136209_136420))
):cljs.core.update.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"error","error",-978969032),((function (validate__38124__auto__,ufv___136416,output_schema136206_136417,input_schema136207_136418,input_checker136208_136419,output_checker136209_136420){
return (function (p1__136204_SHARP_){
var G__136226 = p1__136204_SHARP_;
if(cljs.core.not(new cljs.core.Keyword(null,"parsed?","parsed?",44224124).cljs$core$IFn$_invoke$arity$1(result))){
return repl_tooling.editor_helpers.read_result(G__136226);
} else {
return G__136226;
}
});})(validate__38124__auto__,ufv___136416,output_schema136206_136417,input_schema136207_136418,input_checker136208_136419,output_checker136209_136420))
)),new cljs.core.Keyword(null,"parsed?","parsed?",44224124),true);
break;
}
})();
if(cljs.core.truth_(validate__38124__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
var G__136227_136440 = new cljs.core.Keyword(null,"output","output",-1105869043);
var G__136228_136441 = cljs.core.with_meta(new cljs.core.Symbol(null,"parse-result","parse-result",-161418745,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schemas","ReplResult","schemas/ReplResult",1728447817,null)], null));
var G__136229_136442 = output_schema136206_136417;
var G__136230_136443 = cljs.core.deref(output_checker136209_136420);
var G__136231_136444 = o__38127__auto__;
(schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5 ? schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5(G__136227_136440,G__136228_136441,G__136229_136442,G__136230_136443,G__136231_136444) : schema.core.fn_validator.call(null,G__136227_136440,G__136228_136441,G__136229_136442,G__136230_136443,G__136231_136444));
} else {
var temp__5753__auto___136446 = (function (){var fexpr__136233 = cljs.core.deref(output_checker136209_136420);
return (fexpr__136233.cljs$core$IFn$_invoke$arity$1 ? fexpr__136233.cljs$core$IFn$_invoke$arity$1(o__38127__auto__) : fexpr__136233.call(null,o__38127__auto__));
})();
if(cljs.core.truth_(temp__5753__auto___136446)){
var error__38126__auto___136448 = temp__5753__auto___136446;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.with_meta(new cljs.core.Symbol(null,"parse-result","parse-result",-161418745,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schemas","ReplResult","schemas/ReplResult",1728447817,null)], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([error__38126__auto___136448], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema136206_136417,new cljs.core.Keyword(null,"value","value",305978217),o__38127__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__38126__auto___136448], null));
} else {
}
}
} else {
}

return o__38127__auto__;
});
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(repl_tooling.editor_helpers.parse_result),schema.core.__GT_FnSchema(output_schema136206_136417,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema136207_136418], null)));

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
var ufv___136455 = schema.utils.use_fn_validation;
var output_schema136244_136456 = schema.core.maybe(schema.core.Int);
var input_schema136245_136457 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Str], null),cljs.core.with_meta(new cljs.core.Symbol(null,"project-paths","project-paths",3061721,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Str","s/Str",907974338,null)], null)], null))),schema.core.one(schema.core.Bool,cljs.core.with_meta(new cljs.core.Symbol(null,"detect-nrepl?","detect-nrepl?",-1146406677,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null)], null))),schema.core.one(schema.core.maybe(schema.core.Int),cljs.core.with_meta(new cljs.core.Symbol(null,"typed-port","typed-port",-1871933203,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","maybe","s/maybe",1326133944,null),new cljs.core.Symbol("s","Int","s/Int",-2116888657,null))], null)))], null);
var input_checker136246_136458 = (new cljs.core.Delay((function (){
return schema.core.checker(input_schema136245_136457);
}),null));
var output_checker136247_136459 = (new cljs.core.Delay((function (){
return schema.core.checker(output_schema136244_136456);
}),null));
var ret__40409__auto___136461 = /**
 * Inputs: [project-paths :- [s/Str] detect-nrepl? :- s/Bool typed-port :- (s/maybe s/Int)]
 *   Returns: (s/maybe s/Int)
 */
repl_tooling.editor_helpers.get_possible_port = (function repl_tooling$editor_helpers$get_possible_port(G__136248,G__136249,G__136250){
var validate__38124__auto__ = cljs.core.deref(ufv___136455);
if(cljs.core.truth_(validate__38124__auto__)){
var args__38125__auto___136463 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__136248,G__136249,G__136250], null);
if(cljs.core.truth_(schema.core.fn_validator)){
var G__136257_136464 = new cljs.core.Keyword(null,"input","input",556931961);
var G__136258_136465 = cljs.core.with_meta(new cljs.core.Symbol(null,"get-possible-port","get-possible-port",-870822536,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","maybe","s/maybe",1326133944,null),new cljs.core.Symbol("s","Int","s/Int",-2116888657,null))], null));
var G__136259_136466 = input_schema136245_136457;
var G__136260_136467 = cljs.core.deref(input_checker136246_136458);
var G__136261_136468 = args__38125__auto___136463;
(schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5 ? schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5(G__136257_136464,G__136258_136465,G__136259_136466,G__136260_136467,G__136261_136468) : schema.core.fn_validator.call(null,G__136257_136464,G__136258_136465,G__136259_136466,G__136260_136467,G__136261_136468));
} else {
var temp__5753__auto___136469 = (function (){var fexpr__136264 = cljs.core.deref(input_checker136246_136458);
return (fexpr__136264.cljs$core$IFn$_invoke$arity$1 ? fexpr__136264.cljs$core$IFn$_invoke$arity$1(args__38125__auto___136463) : fexpr__136264.call(null,args__38125__auto___136463));
})();
if(cljs.core.truth_(temp__5753__auto___136469)){
var error__38126__auto___136470 = temp__5753__auto___136469;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.with_meta(new cljs.core.Symbol(null,"get-possible-port","get-possible-port",-870822536,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","maybe","s/maybe",1326133944,null),new cljs.core.Symbol("s","Int","s/Int",-2116888657,null))], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([error__38126__auto___136470], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema136245_136457,new cljs.core.Keyword(null,"value","value",305978217),args__38125__auto___136463,new cljs.core.Keyword(null,"error","error",-978969032),error__38126__auto___136470], null));
} else {
}
}
} else {
}

var o__38127__auto__ = (function (){var project_paths = G__136248;
var detect_nrepl_QMARK_ = G__136249;
var typed_port = G__136250;
while(true){
if(cljs.core.truth_(typed_port)){
return typed_port;
} else {
var files = (function (){var G__136268 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [".socket-repl-port",shadow.js.shim.module$path.join(".shadow-cljs","socket-repl.port")], null);
if(cljs.core.truth_(detect_nrepl_QMARK_)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__136268,".nrepl-port");
} else {
return G__136268;
}
})();
var paths = (function (){var iter__4622__auto__ = ((function (files,validate__38124__auto__,ufv___136455,output_schema136244_136456,input_schema136245_136457,input_checker136246_136458,output_checker136247_136459){
return (function repl_tooling$editor_helpers$get_possible_port_$_iter__136269(s__136270){
return (new cljs.core.LazySeq(null,(function (){
var s__136270__$1 = s__136270;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__136270__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var file = cljs.core.first(xs__6308__auto__);
var iterys__4618__auto__ = ((function (s__136270__$1,file,xs__6308__auto__,temp__5753__auto__,files,validate__38124__auto__,ufv___136455,output_schema136244_136456,input_schema136245_136457,input_checker136246_136458,output_checker136247_136459){
return (function repl_tooling$editor_helpers$get_possible_port_$_iter__136269_$_iter__136271(s__136272){
return (new cljs.core.LazySeq(null,((function (s__136270__$1,file,xs__6308__auto__,temp__5753__auto__,files,validate__38124__auto__,ufv___136455,output_schema136244_136456,input_schema136245_136457,input_checker136246_136458,output_checker136247_136459){
return (function (){
var s__136272__$1 = s__136272;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__136272__$1);
if(temp__5753__auto____$1){
var s__136272__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__136272__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__136272__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__136274 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__136273 = (0);
while(true){
if((i__136273 < size__4621__auto__)){
var path = cljs.core._nth(c__4620__auto__,i__136273);
var full_path = shadow.js.shim.module$path.join(path,file);
if(cljs.core.truth_(shadow.js.shim.module$fs.existsSync(full_path))){
cljs.core.chunk_append(b__136274,parseInt(cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.js.shim.module$fs.readFileSync(full_path))));

var G__136478 = (i__136273 + (1));
i__136273 = G__136478;
continue;
} else {
var G__136479 = (i__136273 + (1));
i__136273 = G__136479;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__136274),repl_tooling$editor_helpers$get_possible_port_$_iter__136269_$_iter__136271(cljs.core.chunk_rest(s__136272__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__136274),null);
}
} else {
var path = cljs.core.first(s__136272__$2);
var full_path = shadow.js.shim.module$path.join(path,file);
if(cljs.core.truth_(shadow.js.shim.module$fs.existsSync(full_path))){
return cljs.core.cons(parseInt(cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.js.shim.module$fs.readFileSync(full_path))),repl_tooling$editor_helpers$get_possible_port_$_iter__136269_$_iter__136271(cljs.core.rest(s__136272__$2)));
} else {
var G__136481 = cljs.core.rest(s__136272__$2);
s__136272__$1 = G__136481;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__136270__$1,file,xs__6308__auto__,temp__5753__auto__,files,validate__38124__auto__,ufv___136455,output_schema136244_136456,input_schema136245_136457,input_checker136246_136458,output_checker136247_136459))
,null,null));
});})(s__136270__$1,file,xs__6308__auto__,temp__5753__auto__,files,validate__38124__auto__,ufv___136455,output_schema136244_136456,input_schema136245_136457,input_checker136246_136458,output_checker136247_136459))
;
var fs__4619__auto__ = cljs.core.seq(iterys__4618__auto__(project_paths));
if(fs__4619__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4619__auto__,repl_tooling$editor_helpers$get_possible_port_$_iter__136269(cljs.core.rest(s__136270__$1)));
} else {
var G__136482 = cljs.core.rest(s__136270__$1);
s__136270__$1 = G__136482;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});})(files,validate__38124__auto__,ufv___136455,output_schema136244_136456,input_schema136245_136457,input_checker136246_136458,output_checker136247_136459))
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
var G__136280_136484 = new cljs.core.Keyword(null,"output","output",-1105869043);
var G__136281_136485 = cljs.core.with_meta(new cljs.core.Symbol(null,"get-possible-port","get-possible-port",-870822536,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","maybe","s/maybe",1326133944,null),new cljs.core.Symbol("s","Int","s/Int",-2116888657,null))], null));
var G__136282_136486 = output_schema136244_136456;
var G__136283_136487 = cljs.core.deref(output_checker136247_136459);
var G__136284_136488 = o__38127__auto__;
(schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5 ? schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5(G__136280_136484,G__136281_136485,G__136282_136486,G__136283_136487,G__136284_136488) : schema.core.fn_validator.call(null,G__136280_136484,G__136281_136485,G__136282_136486,G__136283_136487,G__136284_136488));
} else {
var temp__5753__auto___136489 = (function (){var fexpr__136286 = cljs.core.deref(output_checker136247_136459);
return (fexpr__136286.cljs$core$IFn$_invoke$arity$1 ? fexpr__136286.cljs$core$IFn$_invoke$arity$1(o__38127__auto__) : fexpr__136286.call(null,o__38127__auto__));
})();
if(cljs.core.truth_(temp__5753__auto___136489)){
var error__38126__auto___136491 = temp__5753__auto___136489;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.with_meta(new cljs.core.Symbol(null,"get-possible-port","get-possible-port",-870822536,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","maybe","s/maybe",1326133944,null),new cljs.core.Symbol("s","Int","s/Int",-2116888657,null))], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([error__38126__auto___136491], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema136244_136456,new cljs.core.Keyword(null,"value","value",305978217),o__38127__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__38126__auto___136491], null));
} else {
}
}
} else {
}

return o__38127__auto__;
});
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(repl_tooling.editor_helpers.get_possible_port),schema.core.__GT_FnSchema(output_schema136244_136456,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema136245_136457], null)));


//# sourceMappingURL=repl_tooling.editor_helpers.js.map
