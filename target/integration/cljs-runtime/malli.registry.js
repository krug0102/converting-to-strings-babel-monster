goog.provide('malli.registry');
/**
 * @define {string}
 */
malli.registry.type = goog.define("malli.registry.type","default");

/**
 * @interface
 */
malli.registry.Registry = function(){};

var malli$registry$Registry$_schema$dyn_84147 = (function (this$,type){
var x__4521__auto__ = (((this$ == null))?null:this$);
var m__4522__auto__ = (malli.registry._schema[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(this$,type) : m__4522__auto__.call(null,this$,type));
} else {
var m__4519__auto__ = (malli.registry._schema["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(this$,type) : m__4519__auto__.call(null,this$,type));
} else {
throw cljs.core.missing_protocol("Registry.-schema",this$);
}
}
});
/**
 * returns the schema from a registry
 */
malli.registry._schema = (function malli$registry$_schema(this$,type){
if((((!((this$ == null)))) && ((!((this$.malli$registry$Registry$_schema$arity$2 == null)))))){
return this$.malli$registry$Registry$_schema$arity$2(this$,type);
} else {
return malli$registry$Registry$_schema$dyn_84147(this$,type);
}
});

var malli$registry$Registry$_schemas$dyn_84148 = (function (this$){
var x__4521__auto__ = (((this$ == null))?null:this$);
var m__4522__auto__ = (malli.registry._schemas[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4522__auto__.call(null,this$));
} else {
var m__4519__auto__ = (malli.registry._schemas["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4519__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Registry.-schemas",this$);
}
}
});
/**
 * returns all schemas from a registry
 */
malli.registry._schemas = (function malli$registry$_schemas(this$){
if((((!((this$ == null)))) && ((!((this$.malli$registry$Registry$_schemas$arity$1 == null)))))){
return this$.malli$registry$Registry$_schemas$arity$1(this$);
} else {
return malli$registry$Registry$_schemas$dyn_84148(this$);
}
});

malli.registry.simple_registry = (function malli$registry$simple_registry(schemas){
if((typeof malli !== 'undefined') && (typeof malli.registry !== 'undefined') && (typeof malli.registry.t_malli$registry84107 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry84107 = (function (schemas,meta84108){
this.schemas = schemas;
this.meta84108 = meta84108;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry84107.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_84109,meta84108__$1){
var self__ = this;
var _84109__$1 = this;
return (new malli.registry.t_malli$registry84107(self__.schemas,meta84108__$1));
}));

(malli.registry.t_malli$registry84107.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_84109){
var self__ = this;
var _84109__$1 = this;
return self__.meta84108;
}));

(malli.registry.t_malli$registry84107.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry84107.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.schemas,type);
}));

(malli.registry.t_malli$registry84107.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.schemas;
}));

(malli.registry.t_malli$registry84107.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"schemas","schemas",-2079365190,null),new cljs.core.Symbol(null,"meta84108","meta84108",997471637,null)], null);
}));

(malli.registry.t_malli$registry84107.cljs$lang$type = true);

(malli.registry.t_malli$registry84107.cljs$lang$ctorStr = "malli.registry/t_malli$registry84107");

(malli.registry.t_malli$registry84107.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"malli.registry/t_malli$registry84107");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry84107.
 */
malli.registry.__GT_t_malli$registry84107 = (function malli$registry$simple_registry_$___GT_t_malli$registry84107(schemas__$1,meta84108){
return (new malli.registry.t_malli$registry84107(schemas__$1,meta84108));
});

}

return (new malli.registry.t_malli$registry84107(schemas,cljs.core.PersistentArrayMap.EMPTY));
});
malli.registry.registry = (function malli$registry$registry(_QMARK_registry){
if((((!((_QMARK_registry == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === _QMARK_registry.malli$registry$Registry$))))?true:(((!_QMARK_registry.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(malli.registry.Registry,_QMARK_registry):false)):cljs.core.native_satisfies_QMARK_(malli.registry.Registry,_QMARK_registry))){
return _QMARK_registry;
} else {
if(cljs.core.map_QMARK_(_QMARK_registry)){
return malli.registry.simple_registry(_QMARK_registry);
} else {
return null;
}
}
});
malli.registry.registry_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(malli.registry.registry(cljs.core.PersistentArrayMap.EMPTY));
malli.registry.set_default_registry_BANG_ = (function malli$registry$set_default_registry_BANG_(_QMARK_registry){
if((malli.registry.type === "custom")){
return cljs.core.reset_BANG_(malli.registry.registry_STAR_,malli.registry.registry(_QMARK_registry));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("can't set default registry",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),malli.registry.type], null));
}
});
malli.registry.custom_default_registry = (function malli$registry$custom_default_registry(){
if((typeof malli !== 'undefined') && (typeof malli.registry !== 'undefined') && (typeof malli.registry.t_malli$registry84112 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry84112 = (function (meta84113){
this.meta84113 = meta84113;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry84112.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_84114,meta84113__$1){
var self__ = this;
var _84114__$1 = this;
return (new malli.registry.t_malli$registry84112(meta84113__$1));
}));

(malli.registry.t_malli$registry84112.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_84114){
var self__ = this;
var _84114__$1 = this;
return self__.meta84113;
}));

(malli.registry.t_malli$registry84112.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry84112.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(cljs.core.deref(malli.registry.registry_STAR_),type);
}));

(malli.registry.t_malli$registry84112.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(cljs.core.deref(malli.registry.registry_STAR_));
}));

(malli.registry.t_malli$registry84112.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta84113","meta84113",338487712,null)], null);
}));

(malli.registry.t_malli$registry84112.cljs$lang$type = true);

(malli.registry.t_malli$registry84112.cljs$lang$ctorStr = "malli.registry/t_malli$registry84112");

(malli.registry.t_malli$registry84112.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"malli.registry/t_malli$registry84112");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry84112.
 */
malli.registry.__GT_t_malli$registry84112 = (function malli$registry$custom_default_registry_$___GT_t_malli$registry84112(meta84113){
return (new malli.registry.t_malli$registry84112(meta84113));
});

}

return (new malli.registry.t_malli$registry84112(cljs.core.PersistentArrayMap.EMPTY));
});
malli.registry.composite_registry = (function malli$registry$composite_registry(var_args){
var args__4835__auto__ = [];
var len__4829__auto___84154 = arguments.length;
var i__4830__auto___84155 = (0);
while(true){
if((i__4830__auto___84155 < len__4829__auto___84154)){
args__4835__auto__.push((arguments[i__4830__auto___84155]));

var G__84156 = (i__4830__auto___84155 + (1));
i__4830__auto___84155 = G__84156;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return malli.registry.composite_registry.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(malli.registry.composite_registry.cljs$core$IFn$_invoke$arity$variadic = (function (_QMARK_registries){
var registries = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(malli.registry.registry,_QMARK_registries);
if((typeof malli !== 'undefined') && (typeof malli.registry !== 'undefined') && (typeof malli.registry.t_malli$registry84117 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry84117 = (function (_QMARK_registries,registries,meta84118){
this._QMARK_registries = _QMARK_registries;
this.registries = registries;
this.meta84118 = meta84118;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry84117.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_84119,meta84118__$1){
var self__ = this;
var _84119__$1 = this;
return (new malli.registry.t_malli$registry84117(self__._QMARK_registries,self__.registries,meta84118__$1));
}));

(malli.registry.t_malli$registry84117.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_84119){
var self__ = this;
var _84119__$1 = this;
return self__.meta84118;
}));

(malli.registry.t_malli$registry84117.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry84117.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return cljs.core.some((function (p1__84115_SHARP_){
return malli.registry._schema(p1__84115_SHARP_,type);
}),self__.registries);
}));

(malli.registry.t_malli$registry84117.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2(malli.registry._schemas,cljs.core.reverse(self__.registries)));
}));

(malli.registry.t_malli$registry84117.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?registries","?registries",2135368100,null),new cljs.core.Symbol(null,"registries","registries",-1366064418,null),new cljs.core.Symbol(null,"meta84118","meta84118",-1066908492,null)], null);
}));

(malli.registry.t_malli$registry84117.cljs$lang$type = true);

(malli.registry.t_malli$registry84117.cljs$lang$ctorStr = "malli.registry/t_malli$registry84117");

(malli.registry.t_malli$registry84117.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"malli.registry/t_malli$registry84117");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry84117.
 */
malli.registry.__GT_t_malli$registry84117 = (function malli$registry$__GT_t_malli$registry84117(_QMARK_registries__$1,registries__$1,meta84118){
return (new malli.registry.t_malli$registry84117(_QMARK_registries__$1,registries__$1,meta84118));
});

}

return (new malli.registry.t_malli$registry84117(_QMARK_registries,registries,cljs.core.PersistentArrayMap.EMPTY));
}));

(malli.registry.composite_registry.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(malli.registry.composite_registry.cljs$lang$applyTo = (function (seq84116){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq84116));
}));

malli.registry.mutable_registry = (function malli$registry$mutable_registry(db){
if((typeof malli !== 'undefined') && (typeof malli.registry !== 'undefined') && (typeof malli.registry.t_malli$registry84120 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry84120 = (function (db,meta84121){
this.db = db;
this.meta84121 = meta84121;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry84120.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_84122,meta84121__$1){
var self__ = this;
var _84122__$1 = this;
return (new malli.registry.t_malli$registry84120(self__.db,meta84121__$1));
}));

(malli.registry.t_malli$registry84120.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_84122){
var self__ = this;
var _84122__$1 = this;
return self__.meta84121;
}));

(malli.registry.t_malli$registry84120.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry84120.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(malli.registry.registry(cljs.core.deref(self__.db)),type);
}));

(malli.registry.t_malli$registry84120.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(malli.registry.registry(cljs.core.deref(self__.db)));
}));

(malli.registry.t_malli$registry84120.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"meta84121","meta84121",1068398850,null)], null);
}));

(malli.registry.t_malli$registry84120.cljs$lang$type = true);

(malli.registry.t_malli$registry84120.cljs$lang$ctorStr = "malli.registry/t_malli$registry84120");

(malli.registry.t_malli$registry84120.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"malli.registry/t_malli$registry84120");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry84120.
 */
malli.registry.__GT_t_malli$registry84120 = (function malli$registry$mutable_registry_$___GT_t_malli$registry84120(db__$1,meta84121){
return (new malli.registry.t_malli$registry84120(db__$1,meta84121));
});

}

return (new malli.registry.t_malli$registry84120(db,cljs.core.PersistentArrayMap.EMPTY));
});
malli.registry._STAR_registry_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
malli.registry.dynamic_registry = (function malli$registry$dynamic_registry(){
if((typeof malli !== 'undefined') && (typeof malli.registry !== 'undefined') && (typeof malli.registry.t_malli$registry84123 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry84123 = (function (meta84124){
this.meta84124 = meta84124;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry84123.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_84125,meta84124__$1){
var self__ = this;
var _84125__$1 = this;
return (new malli.registry.t_malli$registry84123(meta84124__$1));
}));

(malli.registry.t_malli$registry84123.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_84125){
var self__ = this;
var _84125__$1 = this;
return self__.meta84124;
}));

(malli.registry.t_malli$registry84123.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry84123.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(malli.registry.registry(malli.registry._STAR_registry_STAR_),type);
}));

(malli.registry.t_malli$registry84123.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(malli.registry.registry(malli.registry._STAR_registry_STAR_));
}));

(malli.registry.t_malli$registry84123.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta84124","meta84124",839777019,null)], null);
}));

(malli.registry.t_malli$registry84123.cljs$lang$type = true);

(malli.registry.t_malli$registry84123.cljs$lang$ctorStr = "malli.registry/t_malli$registry84123");

(malli.registry.t_malli$registry84123.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"malli.registry/t_malli$registry84123");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry84123.
 */
malli.registry.__GT_t_malli$registry84123 = (function malli$registry$dynamic_registry_$___GT_t_malli$registry84123(meta84124){
return (new malli.registry.t_malli$registry84123(meta84124));
});

}

return (new malli.registry.t_malli$registry84123(cljs.core.PersistentArrayMap.EMPTY));
});
malli.registry.lazy_registry = (function malli$registry$lazy_registry(default_registry,provider){
var cache_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var registry_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(default_registry);
return cljs.core.reset_BANG_(registry_STAR_,malli.registry.composite_registry.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([default_registry,(function (){
if((typeof malli !== 'undefined') && (typeof malli.registry !== 'undefined') && (typeof malli.registry.t_malli$registry84126 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry84126 = (function (default_registry,provider,cache_STAR_,registry_STAR_,meta84127){
this.default_registry = default_registry;
this.provider = provider;
this.cache_STAR_ = cache_STAR_;
this.registry_STAR_ = registry_STAR_;
this.meta84127 = meta84127;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry84126.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_84128,meta84127__$1){
var self__ = this;
var _84128__$1 = this;
return (new malli.registry.t_malli$registry84126(self__.default_registry,self__.provider,self__.cache_STAR_,self__.registry_STAR_,meta84127__$1));
}));

(malli.registry.t_malli$registry84126.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_84128){
var self__ = this;
var _84128__$1 = this;
return self__.meta84127;
}));

(malli.registry.t_malli$registry84126.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry84126.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,name){
var self__ = this;
var ___$1 = this;
var or__4223__auto__ = (function (){var fexpr__84132 = cljs.core.deref(self__.cache_STAR_);
return (fexpr__84132.cljs$core$IFn$_invoke$arity$1 ? fexpr__84132.cljs$core$IFn$_invoke$arity$1(name) : fexpr__84132.call(null,name));
})();
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
var temp__5753__auto__ = (function (){var G__84133 = name;
var G__84134 = cljs.core.deref(self__.registry_STAR_);
return (self__.provider.cljs$core$IFn$_invoke$arity$2 ? self__.provider.cljs$core$IFn$_invoke$arity$2(G__84133,G__84134) : self__.provider.call(null,G__84133,G__84134));
})();
if(cljs.core.truth_(temp__5753__auto__)){
var schema__$1 = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cache_STAR_,cljs.core.assoc,name,schema__$1);

return schema__$1;
} else {
return null;
}
}
}));

(malli.registry.t_malli$registry84126.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.cache_STAR_);
}));

(malli.registry.t_malli$registry84126.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"default-registry","default-registry",732204441,null),new cljs.core.Symbol(null,"provider","provider",1338474627,null),new cljs.core.Symbol(null,"cache*","cache*",-548597526,null),new cljs.core.Symbol(null,"registry*","registry*",-268031273,null),new cljs.core.Symbol(null,"meta84127","meta84127",-858376494,null)], null);
}));

(malli.registry.t_malli$registry84126.cljs$lang$type = true);

(malli.registry.t_malli$registry84126.cljs$lang$ctorStr = "malli.registry/t_malli$registry84126");

(malli.registry.t_malli$registry84126.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"malli.registry/t_malli$registry84126");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry84126.
 */
malli.registry.__GT_t_malli$registry84126 = (function malli$registry$lazy_registry_$___GT_t_malli$registry84126(default_registry__$1,provider__$1,cache_STAR___$1,registry_STAR___$1,meta84127){
return (new malli.registry.t_malli$registry84126(default_registry__$1,provider__$1,cache_STAR___$1,registry_STAR___$1,meta84127));
});

}

return (new malli.registry.t_malli$registry84126(default_registry,provider,cache_STAR_,registry_STAR_,cljs.core.PersistentArrayMap.EMPTY));
})()
], 0)));
});
/**
 * finds a schema from a registry
 */
malli.registry.schema = (function malli$registry$schema(registry,type){
return malli.registry._schema(registry,type);
});
/**
 * finds all schemas from a registry
 */
malli.registry.schemas = (function malli$registry$schemas(registry){
return malli.registry._schemas(registry);
});

//# sourceMappingURL=malli.registry.js.map
