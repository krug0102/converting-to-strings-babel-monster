goog.provide('malli.util');
malli.util.equals = (function malli$util$equals(var_args){
var G__85244 = arguments.length;
switch (G__85244) {
case 2:
return malli.util.equals.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return malli.util.equals.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.util.equals.cljs$core$IFn$_invoke$arity$2 = (function (_QMARK_schema1,_QMARK_schema2){
return malli.util.equals.cljs$core$IFn$_invoke$arity$3(_QMARK_schema1,_QMARK_schema2,null);
}));

(malli.util.equals.cljs$core$IFn$_invoke$arity$3 = (function (_QMARK_schema1,_QMARK_schema2,options){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(malli.core.form.cljs$core$IFn$_invoke$arity$2(_QMARK_schema1,options),malli.core.form.cljs$core$IFn$_invoke$arity$2(_QMARK_schema2,options));
}));

(malli.util.equals.cljs$lang$maxFixedArity = 3);

malli.util._simplify_map_entry = (function malli$util$_simplify_map_entry(p__85248){
var vec__85249 = p__85248;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85249,(0),null);
var _QMARK_p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85249,(1),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85249,(2),null);
if(cljs.core.not(s)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,_QMARK_p], null);
} else {
if(cljs.core.truth_((function (){var and__4221__auto__ = _QMARK_p;
if(cljs.core.truth_(and__4221__auto__)){
return ((new cljs.core.Keyword(null,"optional","optional",2053951509).cljs$core$IFn$_invoke$arity$1(_QMARK_p) === false) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(_QMARK_p))));
} else {
return and__4221__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,s], null);
} else {
if(cljs.core.not(cljs.core.seq(_QMARK_p))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,s], null);
} else {
if(new cljs.core.Keyword(null,"optional","optional",2053951509).cljs$core$IFn$_invoke$arity$1(_QMARK_p) === false){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(_QMARK_p,new cljs.core.Keyword(null,"optional","optional",2053951509)),s], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,_QMARK_p,s], null);

}
}
}
}
});
malli.util._required_map_entry_QMARK_ = (function malli$util$_required_map_entry_QMARK_(p__85252){
var vec__85253 = p__85252;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85253,(0),null);
var _QMARK_p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85253,(1),null);
return (!(((cljs.core.map_QMARK_(_QMARK_p)) && (new cljs.core.Keyword(null,"optional","optional",2053951509).cljs$core$IFn$_invoke$arity$1(_QMARK_p) === true))));
});
malli.util._entry = (function malli$util$_entry(p__85259,p__85260,merge_required,merge,options){
var vec__85262 = p__85259;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85262,(0),null);
var _QMARK_p1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85262,(1),null);
var s1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85262,(2),null);
var e1 = vec__85262;
var vec__85265 = p__85260;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85265,(0),null);
var _QMARK_p2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85265,(1),null);
var s2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85265,(2),null);
var e2 = vec__85265;
var required = (function (){var G__85269 = malli.util._required_map_entry_QMARK_(e1);
var G__85270 = malli.util._required_map_entry_QMARK_(e2);
return (merge_required.cljs$core$IFn$_invoke$arity$2 ? merge_required.cljs$core$IFn$_invoke$arity$2(G__85269,G__85270) : merge_required.call(null,G__85269,G__85270));
})();
var p = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([_QMARK_p1,_QMARK_p2], 0));
return malli.util._simplify_map_entry(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p,new cljs.core.Keyword(null,"optional","optional",2053951509),cljs.core.not(required)),(merge.cljs$core$IFn$_invoke$arity$3 ? merge.cljs$core$IFn$_invoke$arity$3(s1,s2,options) : merge.call(null,s1,s2,options))], null));
});
malli.util._open_map_QMARK_ = (function malli$util$_open_map_QMARK_(schema__$1,options){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"map","map",1371690461),malli.core.type.cljs$core$IFn$_invoke$arity$2(schema__$1,options))) && ((!(new cljs.core.Keyword(null,"closed","closed",-919675359).cljs$core$IFn$_invoke$arity$1(malli.core.properties.cljs$core$IFn$_invoke$arity$1(schema__$1)) === false))));
});
/**
 * Prewalks the Schema recursively with a 3-arity fn [schema path options], returns with
 *   and as soon as the function returns non-null value.
 */
malli.util.find_first = (function malli$util$find_first(var_args){
var G__85278 = arguments.length;
switch (G__85278) {
case 2:
return malli.util.find_first.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return malli.util.find_first.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.util.find_first.cljs$core$IFn$_invoke$arity$2 = (function (_QMARK_schema,f){
return malli.util.find_first.cljs$core$IFn$_invoke$arity$3(_QMARK_schema,f,null);
}));

(malli.util.find_first.cljs$core$IFn$_invoke$arity$3 = (function (_QMARK_schema,f,options){
var result = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
malli.core._walk(malli.core.schema.cljs$core$IFn$_invoke$arity$2(_QMARK_schema,options),(function (){
if((typeof malli !== 'undefined') && (typeof malli.util !== 'undefined') && (typeof malli.util.t_malli$util85281 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {malli.core.Walker}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.util.t_malli$util85281 = (function (_QMARK_schema,f,options,result,meta85282){
this._QMARK_schema = _QMARK_schema;
this.f = f;
this.options = options;
this.result = result;
this.meta85282 = meta85282;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.util.t_malli$util85281.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_85283,meta85282__$1){
var self__ = this;
var _85283__$1 = this;
return (new malli.util.t_malli$util85281(self__._QMARK_schema,self__.f,self__.options,self__.result,meta85282__$1));
}));

(malli.util.t_malli$util85281.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_85283){
var self__ = this;
var _85283__$1 = this;
return self__.meta85282;
}));

(malli.util.t_malli$util85281.prototype.malli$core$Walker$ = cljs.core.PROTOCOL_SENTINEL);

(malli.util.t_malli$util85281.prototype.malli$core$Walker$_accept$arity$4 = (function (_,s,path,options__$1){
var self__ = this;
var ___$1 = this;
return cljs.core.not((function (){var or__4223__auto__ = cljs.core.deref(self__.result);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.reset_BANG_(self__.result,(self__.f.cljs$core$IFn$_invoke$arity$3 ? self__.f.cljs$core$IFn$_invoke$arity$3(s,path,options__$1) : self__.f.call(null,s,path,options__$1)));
}
})());
}));

(malli.util.t_malli$util85281.prototype.malli$core$Walker$_inner$arity$4 = (function (this$,s,path,options__$1){
var self__ = this;
var this$__$1 = this;
if(cljs.core.not(cljs.core.deref(self__.result))){
return malli.core._walk(s,this$__$1,path,options__$1);
} else {
return null;
}
}));

(malli.util.t_malli$util85281.prototype.malli$core$Walker$_outer$arity$5 = (function (_,___$1,___$2,___$3,___$4){
var self__ = this;
var ___$5 = this;
return null;
}));

(malli.util.t_malli$util85281.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?schema","?schema",-271534072,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"options","options",1740170016,null),new cljs.core.Symbol(null,"result","result",-1239343558,null),new cljs.core.Symbol(null,"meta85282","meta85282",2060944492,null)], null);
}));

(malli.util.t_malli$util85281.cljs$lang$type = true);

(malli.util.t_malli$util85281.cljs$lang$ctorStr = "malli.util/t_malli$util85281");

(malli.util.t_malli$util85281.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"malli.util/t_malli$util85281");
}));

/**
 * Positional factory function for malli.util/t_malli$util85281.
 */
malli.util.__GT_t_malli$util85281 = (function malli$util$__GT_t_malli$util85281(_QMARK_schema__$1,f__$1,options__$1,result__$1,meta85282){
return (new malli.util.t_malli$util85281(_QMARK_schema__$1,f__$1,options__$1,result__$1,meta85282));
});

}

return (new malli.util.t_malli$util85281(_QMARK_schema,f,options,result,cljs.core.PersistentArrayMap.EMPTY));
})()
,cljs.core.PersistentVector.EMPTY,options);

return cljs.core.deref(result);
}));

(malli.util.find_first.cljs$lang$maxFixedArity = 3);

/**
 * Merges two schemas into one with the following rules:
 * 
 *   * if either schemas is `nil`, the other one is used, regardless of value
 *   * with two :map schemas, both keys and values are merged
 *   * for :and schemas, the first child is used in merge, rest kept as-is
 *   * with two :map entries, `:merge-entries` fn is used (default last one wins)
 *   * with any other schemas, `:merge-default` fn is used (default last one wins)
 * 
 *   | key               | description
 *   | ------------------|-------------
 *   | `:merge-default`  | `schema1 schema2 options -> schema` fn to merge unknown entries
 *   | `:merge-required` | `boolean boolean -> boolean` fn to resolve how required keys are merged
 */
malli.util.merge = (function malli$util$merge(var_args){
var G__85298 = arguments.length;
switch (G__85298) {
case 2:
return malli.util.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return malli.util.merge.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.util.merge.cljs$core$IFn$_invoke$arity$2 = (function (_QMARK_schema1,_QMARK_schema2){
return malli.util.merge.cljs$core$IFn$_invoke$arity$3(_QMARK_schema1,_QMARK_schema2,null);
}));

(malli.util.merge.cljs$core$IFn$_invoke$arity$3 = (function (_QMARK_schema1,_QMARK_schema2,options){
var vec__85302 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(_QMARK_schema1)?malli.core.deref_all.cljs$core$IFn$_invoke$arity$1(malli.core.schema.cljs$core$IFn$_invoke$arity$2(_QMARK_schema1,options)):null),(cljs.core.truth_(_QMARK_schema2)?malli.core.deref_all.cljs$core$IFn$_invoke$arity$1(malli.core.schema.cljs$core$IFn$_invoke$arity$2(_QMARK_schema2,options)):null)], null);
var schema1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85302,(0),null);
var schema2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85302,(1),null);
var schemas = vec__85302;
var map__85305 = options;
var map__85305__$1 = cljs.core.__destructure_map(map__85305);
var merge_default = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__85305__$1,new cljs.core.Keyword(null,"merge-default","merge-default",1152742083),(function (_,s2,___$1){
return s2;
}));
var merge_required = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__85305__$1,new cljs.core.Keyword(null,"merge-required","merge-required",75277811),(function (_,r2){
return r2;
}));
var tear = (function (s){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"map","map",1371690461),malli.core.type.cljs$core$IFn$_invoke$arity$1(s))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,s], null);
} else {
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [malli.core.properties.cljs$core$IFn$_invoke$arity$1(s)], null),malli.core.children.cljs$core$IFn$_invoke$arity$1(s));
}
});
var join = (function (p__85308,p__85309){
var vec__85311 = p__85308;
var seq__85312 = cljs.core.seq(vec__85311);
var first__85313 = cljs.core.first(seq__85312);
var seq__85312__$1 = cljs.core.next(seq__85312);
var p1 = first__85313;
var first__85313__$1 = cljs.core.first(seq__85312__$1);
var seq__85312__$2 = cljs.core.next(seq__85312__$1);
var c1 = first__85313__$1;
var cs1 = seq__85312__$2;
var vec__85314 = p__85309;
var seq__85315 = cljs.core.seq(vec__85314);
var first__85316 = cljs.core.first(seq__85315);
var seq__85315__$1 = cljs.core.next(seq__85315);
var p2 = first__85316;
var first__85316__$1 = cljs.core.first(seq__85315__$1);
var seq__85315__$2 = cljs.core.next(seq__85315__$1);
var c2 = first__85316__$1;
var cs2 = seq__85315__$2;
return malli.core.into_schema.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"and","and",-971899817),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1,p2], 0)),cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [malli.util.merge.cljs$core$IFn$_invoke$arity$2(c1,c2)], null),cs1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cs2], 0)),options);
});
if(cljs.core.not(schema1)){
return schema2;
} else {
if(cljs.core.not(schema2)){
return schema1;
} else {
if((!(cljs.core.every_QMARK_(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"and","and",-971899817),null,new cljs.core.Keyword(null,"map","map",1371690461),null], null), null),malli.core.type),schemas)))){
return (merge_default.cljs$core$IFn$_invoke$arity$3 ? merge_default.cljs$core$IFn$_invoke$arity$3(schema1,schema2,options) : merge_default.call(null,schema1,schema2,options));
} else {
if((!(cljs.core.every_QMARK_(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"map","map",1371690461),null], null), null),malli.core.type),schemas)))){
return join(tear(schema1),tear(schema2));
} else {
var p = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([malli.core.properties.cljs$core$IFn$_invoke$arity$1(schema1),malli.core.properties.cljs$core$IFn$_invoke$arity$1(schema2)], 0));
return malli.core.schema.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2((function (){var G__85321 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461)], null);
if(cljs.core.truth_(p)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__85321,p);
} else {
return G__85321;
}
})(),new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__85326,p__85327){
var map__85328 = p__85326;
var map__85328__$1 = cljs.core.__destructure_map(map__85328);
var acc = map__85328__$1;
var keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85328__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vec__85329 = p__85327;
var k2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85329,(0),null);
var e2 = vec__85329;
if(cljs.core.truth_((keys.cljs$core$IFn$_invoke$arity$1 ? keys.cljs$core$IFn$_invoke$arity$1(k2) : keys.call(null,k2)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc_SINGLEQUOTE_,p__85333){
var vec__85335 = p__85333;
var k1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85335,(0),null);
var e1 = vec__85335;
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc_SINGLEQUOTE_,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k1,k2))?malli.util._entry(e1,e2,merge_required,malli.util.merge,options):e1));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(acc)));
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(acc,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.conj,e2),new cljs.core.Keyword(null,"keys","keys",1068423698),cljs.core.conj,k2);
}
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.PersistentVector.EMPTY], null),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(malli.core.children,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([schemas], 0))))),options);

}
}
}
}
}));

(malli.util.merge.cljs$lang$maxFixedArity = 3);

/**
 * Union of two schemas. See [[merge]] for more details.
 */
malli.util.union = (function malli$util$union(var_args){
var G__85349 = arguments.length;
switch (G__85349) {
case 2:
return malli.util.union.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return malli.util.union.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.util.union.cljs$core$IFn$_invoke$arity$2 = (function (_QMARK_schema1,_QMARK_schema2){
return malli.util.union.cljs$core$IFn$_invoke$arity$3(_QMARK_schema1,_QMARK_schema2,null);
}));

(malli.util.union.cljs$core$IFn$_invoke$arity$3 = (function (_QMARK_schema1,_QMARK_schema2,options){
var merge_default = (function (s1,s2,options__$1){
if(cljs.core.truth_(malli.util.equals.cljs$core$IFn$_invoke$arity$2(s1,s2))){
return s1;
} else {
return malli.core.schema.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),s1,s2], null),options__$1);
}
});
var merge_required = (function (r1,r2){
var and__4221__auto__ = r1;
if(cljs.core.truth_(and__4221__auto__)){
return r2;
} else {
return and__4221__auto__;
}
});
return malli.util.merge.cljs$core$IFn$_invoke$arity$3(_QMARK_schema1,_QMARK_schema2,cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(options,new cljs.core.Keyword(null,"merge-default","merge-default",1152742083),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,merge_default)),new cljs.core.Keyword(null,"merge-required","merge-required",75277811),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,merge_required)));
}));

(malli.util.union.cljs$lang$maxFixedArity = 3);

/**
 * Returns a Schema instance with updated properties.
 */
malli.util.update_properties = (function malli$util$update_properties(var_args){
var args__4835__auto__ = [];
var len__4829__auto___85596 = arguments.length;
var i__4830__auto___85597 = (0);
while(true){
if((i__4830__auto___85597 < len__4829__auto___85596)){
args__4835__auto__.push((arguments[i__4830__auto___85597]));

var G__85598 = (i__4830__auto___85597 + (1));
i__4830__auto___85597 = G__85598;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((2) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((2)),(0),null)):null);
return malli.util.update_properties.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4836__auto__);
});

(malli.util.update_properties.cljs$core$IFn$_invoke$arity$variadic = (function (_QMARK_schema,f,args){
var schema__$1 = malli.core.schema.cljs$core$IFn$_invoke$arity$1(_QMARK_schema);
return malli.core.into_schema.cljs$core$IFn$_invoke$arity$4(malli.core._parent(schema__$1),cljs.core.not_empty(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,malli.core._properties(schema__$1),args)),malli.core._children(schema__$1),malli.core._options(schema__$1));
}));

(malli.util.update_properties.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(malli.util.update_properties.cljs$lang$applyTo = (function (seq85363){
var G__85364 = cljs.core.first(seq85363);
var seq85363__$1 = cljs.core.next(seq85363);
var G__85365 = cljs.core.first(seq85363__$1);
var seq85363__$2 = cljs.core.next(seq85363__$1);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__85364,G__85365,seq85363__$2);
}));

/**
 * Closes recursively all :map schemas by adding `{:closed true}`
 *   property, unless schema explicitely open with `{:closed false}`
 */
malli.util.closed_schema = (function malli$util$closed_schema(var_args){
var G__85378 = arguments.length;
switch (G__85378) {
case 1:
return malli.util.closed_schema.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return malli.util.closed_schema.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.util.closed_schema.cljs$core$IFn$_invoke$arity$1 = (function (_QMARK_schema){
return malli.util.closed_schema.cljs$core$IFn$_invoke$arity$2(_QMARK_schema,null);
}));

(malli.util.closed_schema.cljs$core$IFn$_invoke$arity$2 = (function (_QMARK_schema,options){
return malli.core.walk.cljs$core$IFn$_invoke$arity$3(_QMARK_schema,malli.core.schema_walker((function (schema__$1){
if(malli.util._open_map_QMARK_(schema__$1,options)){
return malli.util.update_properties.cljs$core$IFn$_invoke$arity$variadic(schema__$1,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"closed","closed",-919675359),true], 0));
} else {
return schema__$1;
}
})),options);
}));

(malli.util.closed_schema.cljs$lang$maxFixedArity = 2);

/**
 * Closes recursively all :map schemas by removing `:closed`
 *   property, unless schema explicitely open with `{:closed false}`
 */
malli.util.open_schema = (function malli$util$open_schema(var_args){
var G__85385 = arguments.length;
switch (G__85385) {
case 1:
return malli.util.open_schema.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return malli.util.open_schema.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.util.open_schema.cljs$core$IFn$_invoke$arity$1 = (function (_QMARK_schema){
return malli.util.open_schema.cljs$core$IFn$_invoke$arity$2(_QMARK_schema,null);
}));

(malli.util.open_schema.cljs$core$IFn$_invoke$arity$2 = (function (_QMARK_schema,options){
return malli.core.walk.cljs$core$IFn$_invoke$arity$3(_QMARK_schema,malli.core.schema_walker((function (schema__$1){
if(malli.util._open_map_QMARK_(schema__$1,options)){
return malli.util.update_properties.cljs$core$IFn$_invoke$arity$variadic(schema__$1,cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"closed","closed",-919675359)], 0));
} else {
return schema__$1;
}
})),options);
}));

(malli.util.open_schema.cljs$lang$maxFixedArity = 2);

/**
 * Returns all subschemas for unique paths as a vector of maps with :schema, :path and :in keys.
 * Walks over :schema references and top-level :refs. See [[malli.core/-walk]] for all options.
 */
malli.util.subschemas = (function malli$util$subschemas(var_args){
var G__85393 = arguments.length;
switch (G__85393) {
case 1:
return malli.util.subschemas.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return malli.util.subschemas.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.util.subschemas.cljs$core$IFn$_invoke$arity$1 = (function (_QMARK_schema){
return malli.util.subschemas.cljs$core$IFn$_invoke$arity$2(_QMARK_schema,null);
}));

(malli.util.subschemas.cljs$core$IFn$_invoke$arity$2 = (function (_QMARK_schema,options){
var schema__$1 = malli.core.schema.cljs$core$IFn$_invoke$arity$2(_QMARK_schema,options);
var options__$1 = (function (){var ref = (function (){var and__4221__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ref","ref",1289896967),malli.core.type.cljs$core$IFn$_invoke$arity$1(schema__$1));
if(and__4221__auto__){
return malli.core._ref(schema__$1);
} else {
return and__4221__auto__;
}
})();
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(options,new cljs.core.Keyword("malli.core","walk-schema-refs","malli.core/walk-schema-refs",-1140065954),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,true)),new cljs.core.Keyword("malli.core","walk-refs","malli.core/walk-refs",755904802),(function (f){
return (function (p1__85389_SHARP_){
var or__4223__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ref,p1__85389_SHARP_);
if(or__4223__auto__){
return or__4223__auto__;
} else {
var fexpr__85397 = malli.core._boolean_fn(f);
return (fexpr__85397.cljs$core$IFn$_invoke$arity$1 ? fexpr__85397.cljs$core$IFn$_invoke$arity$1(p1__85389_SHARP_) : fexpr__85397.call(null,p1__85389_SHARP_));
}
});
}));
})();
var state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
malli.util.find_first.cljs$core$IFn$_invoke$arity$3(schema__$1,(function (s,p,_){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),p,new cljs.core.Keyword(null,"in","in",-1531184865),(malli.util.path__GT_in.cljs$core$IFn$_invoke$arity$2 ? malli.util.path__GT_in.cljs$core$IFn$_invoke$arity$2(schema__$1,p) : malli.util.path__GT_in.call(null,schema__$1,p)),new cljs.core.Keyword(null,"schema","schema",-1582001791),s], null));

return null;
}),options__$1);

return cljs.core.deref(state);
}));

(malli.util.subschemas.cljs$lang$maxFixedArity = 2);

/**
 * Returns a sequence of distinct (f x) values)
 */
malli.util.distinct_by = (function malli$util$distinct_by(f,coll){
var seen = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (x){
var v = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x));
if(cljs.core.not((function (){var fexpr__85404 = cljs.core.deref(seen);
return (fexpr__85404.cljs$core$IFn$_invoke$arity$1 ? fexpr__85404.cljs$core$IFn$_invoke$arity$1(v) : fexpr__85404.call(null,v));
})())){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(seen,cljs.core.conj,v);
} else {
return null;
}
}),coll);
});
/**
 * Returns a value path for a given Schema and schema path
 */
malli.util.path__GT_in = (function malli$util$path__GT_in(schema__$1,path){
var i = (0);
var s = schema__$1;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
var or__4223__auto__ = (function (){var and__4221__auto__ = (i >= cljs.core.count(path));
if(and__4221__auto__){
return acc;
} else {
return and__4221__auto__;
}
})();
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
var G__85604 = (i + (1));
var G__85605 = malli.core._get(s,(path.cljs$core$IFn$_invoke$arity$1 ? path.cljs$core$IFn$_invoke$arity$1(i) : path.call(null,i)),null);
var G__85606 = (function (){var G__85411 = acc;
if(cljs.core.truth_(malli.core._keep(s))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__85411,(path.cljs$core$IFn$_invoke$arity$1 ? path.cljs$core$IFn$_invoke$arity$1(i) : path.call(null,i)));
} else {
return G__85411;
}
})();
i = G__85604;
s = G__85605;
acc = G__85606;
continue;
}
break;
}
});
/**
 * Returns a vector of schema paths for a given Schema and value path
 */
malli.util.in__GT_paths = (function malli$util$in__GT_paths(schema__$1,in$){
var state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
var in_equals = (function (p__85415,p__85416){
while(true){
var vec__85417 = p__85415;
var seq__85418 = cljs.core.seq(vec__85417);
var first__85419 = cljs.core.first(seq__85418);
var seq__85418__$1 = cljs.core.next(seq__85418);
var x = first__85419;
var xs = seq__85418__$1;
var vec__85420 = p__85416;
var seq__85421 = cljs.core.seq(vec__85420);
var first__85422 = cljs.core.first(seq__85421);
var seq__85421__$1 = cljs.core.next(seq__85421);
var y = first__85422;
var ys = seq__85421__$1;
if(cljs.core.truth_((function (){var and__4221__auto__ = x;
if(cljs.core.truth_(and__4221__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,y);
} else {
return and__4221__auto__;
}
})())){
var G__85609 = xs;
var G__85610 = ys;
p__85415 = G__85609;
p__85416 = G__85610;
continue;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,y)){
return true;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("malli.core","in","malli.core/in",-1208578537),x)){
var G__85611 = xs;
var G__85612 = ys;
p__85415 = G__85611;
p__85416 = G__85612;
continue;
} else {
return null;
}
}
}
break;
}
});
var parent_exists = (function (v1,v2){
var i = (function (){var x__4309__auto__ = cljs.core.count(v1);
var y__4310__auto__ = cljs.core.count(v2);
return ((x__4309__auto__ < y__4310__auto__) ? x__4309__auto__ : y__4310__auto__);
})();
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v1,(0),i),cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v2,(0),i));
});
malli.util.find_first.cljs$core$IFn$_invoke$arity$2(schema__$1,(function (_,path,___$1){
if(cljs.core.truth_((function (){var and__4221__auto__ = in_equals(malli.util.path__GT_in(schema__$1,path),in$);
if(cljs.core.truth_(and__4221__auto__)){
return cljs.core.not(cljs.core.some((function (p1__85413_SHARP_){
return parent_exists(path,p1__85413_SHARP_);
}),cljs.core.deref(state)));
} else {
return and__4221__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.conj,path);

return null;
} else {
return null;
}
}));

return cljs.core.deref(state);
});
/**
 * Transforms entries with f.
 */
malli.util.transform_entries = (function malli$util$transform_entries(var_args){
var G__85436 = arguments.length;
switch (G__85436) {
case 2:
return malli.util.transform_entries.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return malli.util.transform_entries.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.util.transform_entries.cljs$core$IFn$_invoke$arity$2 = (function (_QMARK_schema,f){
return malli.util.transform_entries.cljs$core$IFn$_invoke$arity$3(_QMARK_schema,f,null);
}));

(malli.util.transform_entries.cljs$core$IFn$_invoke$arity$3 = (function (_QMARK_schema,f,options){
var schema__$1 = malli.core.deref_all.cljs$core$IFn$_invoke$arity$1(malli.core.schema.cljs$core$IFn$_invoke$arity$2(_QMARK_schema,options));
return malli.core.into_schema.cljs$core$IFn$_invoke$arity$3(malli.core._parent(schema__$1),malli.core._properties(schema__$1),(function (){var G__85441 = malli.core._children(schema__$1);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__85441) : f.call(null,G__85441));
})());
}));

(malli.util.transform_entries.cljs$lang$maxFixedArity = 3);

/**
 * Makes map keys optional.
 */
malli.util.optional_keys = (function malli$util$optional_keys(var_args){
var G__85444 = arguments.length;
switch (G__85444) {
case 1:
return malli.util.optional_keys.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return malli.util.optional_keys.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return malli.util.optional_keys.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.util.optional_keys.cljs$core$IFn$_invoke$arity$1 = (function (_QMARK_schema){
return malli.util.optional_keys.cljs$core$IFn$_invoke$arity$3(_QMARK_schema,null,null);
}));

(malli.util.optional_keys.cljs$core$IFn$_invoke$arity$2 = (function (_QMARK_schema,_QMARK_keys){
var vec__85447 = ((cljs.core.map_QMARK_(_QMARK_keys))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,_QMARK_keys], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_keys,null], null));
var keys = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85447,(0),null);
var options = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85447,(1),null);
return malli.util.optional_keys.cljs$core$IFn$_invoke$arity$3(_QMARK_schema,keys,options);
}));

(malli.util.optional_keys.cljs$core$IFn$_invoke$arity$3 = (function (_QMARK_schema,keys,options){
var accept = (cljs.core.truth_(keys)?cljs.core.set(keys):cljs.core.constantly(true));
var mapper = (function (p__85453){
var vec__85454 = p__85453;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85454,(0),null);
var e = vec__85454;
if(cljs.core.truth_((accept.cljs$core$IFn$_invoke$arity$1 ? accept.cljs$core$IFn$_invoke$arity$1(k) : accept.call(null,k)))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(e,(1),cljs.core.assoc,new cljs.core.Keyword(null,"optional","optional",2053951509),true);
} else {
return e;
}
});
return malli.util.transform_entries.cljs$core$IFn$_invoke$arity$3(_QMARK_schema,(function (p1__85442_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(mapper,p1__85442_SHARP_);
}),options);
}));

(malli.util.optional_keys.cljs$lang$maxFixedArity = 3);

/**
 * Makes map keys required.
 */
malli.util.required_keys = (function malli$util$required_keys(var_args){
var G__85463 = arguments.length;
switch (G__85463) {
case 1:
return malli.util.required_keys.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return malli.util.required_keys.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return malli.util.required_keys.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.util.required_keys.cljs$core$IFn$_invoke$arity$1 = (function (_QMARK_schema){
return malli.util.required_keys.cljs$core$IFn$_invoke$arity$3(_QMARK_schema,null,null);
}));

(malli.util.required_keys.cljs$core$IFn$_invoke$arity$2 = (function (_QMARK_schema,_QMARK_keys){
var vec__85467 = ((cljs.core.map_QMARK_(_QMARK_keys))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,_QMARK_keys], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_keys,null], null));
var keys = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85467,(0),null);
var options = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85467,(1),null);
return malli.util.required_keys.cljs$core$IFn$_invoke$arity$3(_QMARK_schema,keys,options);
}));

(malli.util.required_keys.cljs$core$IFn$_invoke$arity$3 = (function (_QMARK_schema,keys,options){
var accept = (cljs.core.truth_(keys)?cljs.core.set(keys):cljs.core.constantly(true));
var required = (function (p){
var p_SINGLEQUOTE_ = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p,new cljs.core.Keyword(null,"optional","optional",2053951509));
if(cljs.core.seq(p_SINGLEQUOTE_)){
return p_SINGLEQUOTE_;
} else {
return null;
}
});
var mapper = (function (p__85474){
var vec__85475 = p__85474;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85475,(0),null);
var e = vec__85475;
if(cljs.core.truth_((accept.cljs$core$IFn$_invoke$arity$1 ? accept.cljs$core$IFn$_invoke$arity$1(k) : accept.call(null,k)))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(e,(1),required);
} else {
return e;
}
});
return malli.util.transform_entries.cljs$core$IFn$_invoke$arity$3(_QMARK_schema,(function (p1__85459_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(mapper,p1__85459_SHARP_);
}),options);
}));

(malli.util.required_keys.cljs$lang$maxFixedArity = 3);

/**
 * Like [[clojure.core/select-keys]], but for MapSchemas.
 */
malli.util.select_keys = (function malli$util$select_keys(var_args){
var G__85482 = arguments.length;
switch (G__85482) {
case 2:
return malli.util.select_keys.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return malli.util.select_keys.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.util.select_keys.cljs$core$IFn$_invoke$arity$2 = (function (_QMARK_schema,keys){
return malli.util.select_keys.cljs$core$IFn$_invoke$arity$3(_QMARK_schema,keys,null);
}));

(malli.util.select_keys.cljs$core$IFn$_invoke$arity$3 = (function (_QMARK_schema,keys,options){
var key_set = cljs.core.set(keys);
return malli.util.transform_entries.cljs$core$IFn$_invoke$arity$3(_QMARK_schema,(function (p1__85480_SHARP_){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__85484){
var vec__85485 = p__85484;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85485,(0),null);
return (key_set.cljs$core$IFn$_invoke$arity$1 ? key_set.cljs$core$IFn$_invoke$arity$1(k) : key_set.call(null,k));
}),p1__85480_SHARP_);
}),options);
}));

(malli.util.select_keys.cljs$lang$maxFixedArity = 3);

/**
 * Like [[clojure.set/rename-keys]], but for MapSchemas. Collisions are resolved in favor of the renamed key, like `assoc`-ing.
 */
malli.util.rename_keys = (function malli$util$rename_keys(var_args){
var G__85489 = arguments.length;
switch (G__85489) {
case 2:
return malli.util.rename_keys.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return malli.util.rename_keys.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.util.rename_keys.cljs$core$IFn$_invoke$arity$2 = (function (_QMARK_schema,kmap){
return malli.util.rename_keys.cljs$core$IFn$_invoke$arity$3(_QMARK_schema,kmap,null);
}));

(malli.util.rename_keys.cljs$core$IFn$_invoke$arity$3 = (function (_QMARK_schema,kmap,options){
return malli.util.transform_entries.cljs$core$IFn$_invoke$arity$3(_QMARK_schema,(function (entries){
var source_keys = cljs.core.set(cljs.core.keys(kmap));
var target_keys = cljs.core.set(cljs.core.vals(kmap));
var remove_conflicts = (function (p__85490){
var vec__85491 = p__85490;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85491,(0),null);
var or__4223__auto__ = (source_keys.cljs$core$IFn$_invoke$arity$1 ? source_keys.cljs$core$IFn$_invoke$arity$1(k) : source_keys.call(null,k));
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.not((target_keys.cljs$core$IFn$_invoke$arity$1 ? target_keys.cljs$core$IFn$_invoke$arity$1(k) : target_keys.call(null,k)));
}
});
var alter_keys = (function (p__85494){
var vec__85495 = p__85494;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85495,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85495,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85495,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.cljs$core$IFn$_invoke$arity$3(kmap,k,k),m,v], null);
});
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(alter_keys,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(remove_conflicts,entries));
}),options);
}));

(malli.util.rename_keys.cljs$lang$maxFixedArity = 3);

/**
 * Like [[clojure.core/dissoc]], but for MapSchemas.
 */
malli.util.dissoc = (function malli$util$dissoc(var_args){
var G__85501 = arguments.length;
switch (G__85501) {
case 2:
return malli.util.dissoc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return malli.util.dissoc.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.util.dissoc.cljs$core$IFn$_invoke$arity$2 = (function (_QMARK_schema,key){
return malli.util.dissoc.cljs$core$IFn$_invoke$arity$3(_QMARK_schema,key,null);
}));

(malli.util.dissoc.cljs$core$IFn$_invoke$arity$3 = (function (_QMARK_schema,key,options){
return malli.util.transform_entries.cljs$core$IFn$_invoke$arity$3(_QMARK_schema,(function (p1__85498_SHARP_){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__85502){
var vec__85503 = p__85502;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85503,(0),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,k);
}),p1__85498_SHARP_);
}),options);
}));

(malli.util.dissoc.cljs$lang$maxFixedArity = 3);

/**
 * Like [[clojure.core/find]], but for MapSchemas.
 */
malli.util.find = (function malli$util$find(var_args){
var G__85507 = arguments.length;
switch (G__85507) {
case 2:
return malli.util.find.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return malli.util.find.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.util.find.cljs$core$IFn$_invoke$arity$2 = (function (_QMARK_schema,k){
return malli.util.find.cljs$core$IFn$_invoke$arity$3(_QMARK_schema,k,null);
}));

(malli.util.find.cljs$core$IFn$_invoke$arity$3 = (function (_QMARK_schema,k,options){
var schema__$1 = malli.core.schema.cljs$core$IFn$_invoke$arity$2((function (){var or__4223__auto__ = _QMARK_schema;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return new cljs.core.Keyword(null,"map","map",1371690461);
}
})(),options);
if(cljs.core.truth_(schema__$1)){
return malli.core._get(schema__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli.core","find","malli.core/find",163301512),k], null),null);
} else {
return null;
}
}));

(malli.util.find.cljs$lang$maxFixedArity = 3);

/**
 * Like [[clojure.core/get]], but for LensSchemas.
 */
malli.util.get = (function malli$util$get(var_args){
var G__85509 = arguments.length;
switch (G__85509) {
case 2:
return malli.util.get.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return malli.util.get.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return malli.util.get.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.util.get.cljs$core$IFn$_invoke$arity$2 = (function (_QMARK_schema,k){
return malli.util.get.cljs$core$IFn$_invoke$arity$4(_QMARK_schema,k,null,null);
}));

(malli.util.get.cljs$core$IFn$_invoke$arity$3 = (function (_QMARK_schema,k,default$){
return malli.util.get.cljs$core$IFn$_invoke$arity$4(_QMARK_schema,k,default$,null);
}));

(malli.util.get.cljs$core$IFn$_invoke$arity$4 = (function (_QMARK_schema,k,default$,options){
var schema__$1 = malli.core.schema.cljs$core$IFn$_invoke$arity$2((function (){var or__4223__auto__ = _QMARK_schema;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return new cljs.core.Keyword(null,"map","map",1371690461);
}
})(),options);
if(cljs.core.truth_(schema__$1)){
return malli.core._get(schema__$1,k,default$);
} else {
return null;
}
}));

(malli.util.get.cljs$lang$maxFixedArity = 4);

/**
 * Like [[clojure.core/assoc]], but for LensSchemas.
 */
malli.util.assoc = (function malli$util$assoc(var_args){
var G__85515 = arguments.length;
switch (G__85515) {
case 3:
return malli.util.assoc.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return malli.util.assoc.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.util.assoc.cljs$core$IFn$_invoke$arity$3 = (function (_QMARK_schema,key,value){
return malli.util.assoc.cljs$core$IFn$_invoke$arity$4(_QMARK_schema,key,value,null);
}));

(malli.util.assoc.cljs$core$IFn$_invoke$arity$4 = (function (_QMARK_schema,key,value,options){
return malli.core._set(malli.core.schema.cljs$core$IFn$_invoke$arity$2(_QMARK_schema,options),key,value);
}));

(malli.util.assoc.cljs$lang$maxFixedArity = 4);

/**
 * Like [[clojure.core/update]], but for LensSchema instances.
 */
malli.util.update = (function malli$util$update(var_args){
var args__4835__auto__ = [];
var len__4829__auto___85639 = arguments.length;
var i__4830__auto___85640 = (0);
while(true){
if((i__4830__auto___85640 < len__4829__auto___85639)){
args__4835__auto__.push((arguments[i__4830__auto___85640]));

var G__85641 = (i__4830__auto___85640 + (1));
i__4830__auto___85640 = G__85641;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((3) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((3)),(0),null)):null);
return malli.util.update.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4836__auto__);
});

(malli.util.update.cljs$core$IFn$_invoke$arity$variadic = (function (schema__$1,key,f,args){
return malli.core._set(malli.core.schema.cljs$core$IFn$_invoke$arity$1(schema__$1),key,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,malli.util.get.cljs$core$IFn$_invoke$arity$2(schema__$1,key),args));
}));

(malli.util.update.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(malli.util.update.cljs$lang$applyTo = (function (seq85516){
var G__85517 = cljs.core.first(seq85516);
var seq85516__$1 = cljs.core.next(seq85516);
var G__85518 = cljs.core.first(seq85516__$1);
var seq85516__$2 = cljs.core.next(seq85516__$1);
var G__85519 = cljs.core.first(seq85516__$2);
var seq85516__$3 = cljs.core.next(seq85516__$2);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__85517,G__85518,G__85519,seq85516__$3);
}));

/**
 * Like [[clojure.core/get-in]], but for LensSchemas.
 */
malli.util.get_in = (function malli$util$get_in(var_args){
var G__85523 = arguments.length;
switch (G__85523) {
case 2:
return malli.util.get_in.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return malli.util.get_in.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return malli.util.get_in.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.util.get_in.cljs$core$IFn$_invoke$arity$2 = (function (_QMARK_schema,ks){
return malli.util.get_in.cljs$core$IFn$_invoke$arity$4(_QMARK_schema,ks,null,null);
}));

(malli.util.get_in.cljs$core$IFn$_invoke$arity$3 = (function (_QMARK_schema,ks,default$){
return malli.util.get_in.cljs$core$IFn$_invoke$arity$4(_QMARK_schema,ks,default$,null);
}));

(malli.util.get_in.cljs$core$IFn$_invoke$arity$4 = (function (_QMARK_schema,p__85527,default$,options){
var vec__85528 = p__85527;
var seq__85529 = cljs.core.seq(vec__85528);
var first__85530 = cljs.core.first(seq__85529);
var seq__85529__$1 = cljs.core.next(seq__85529);
var k = first__85530;
var ks = seq__85529__$1;
var schema__$1 = malli.core.schema.cljs$core$IFn$_invoke$arity$2((function (){var or__4223__auto__ = _QMARK_schema;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return new cljs.core.Keyword(null,"map","map",1371690461);
}
})(),options);
if(cljs.core.not(k)){
return schema__$1;
} else {
var sentinel = ({});
var schema__$2 = malli.util.get.cljs$core$IFn$_invoke$arity$3(schema__$1,k,sentinel);
if((schema__$2 === sentinel)){
return default$;
} else {
if(ks){
return malli.util.get_in.cljs$core$IFn$_invoke$arity$3(schema__$2,ks,default$);
} else {
return schema__$2;

}
}
}
}));

(malli.util.get_in.cljs$lang$maxFixedArity = 4);

/**
 * Like [[clojure.core/assoc-in]], but for LensSchemas.
 */
malli.util.assoc_in = (function malli$util$assoc_in(var_args){
var G__85534 = arguments.length;
switch (G__85534) {
case 3:
return malli.util.assoc_in.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return malli.util.assoc_in.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.util.assoc_in.cljs$core$IFn$_invoke$arity$3 = (function (_QMARK_schema,ks,value){
return malli.util.assoc_in.cljs$core$IFn$_invoke$arity$4(_QMARK_schema,ks,value,null);
}));

(malli.util.assoc_in.cljs$core$IFn$_invoke$arity$4 = (function (_QMARK_schema,p__85536,value,options){
var vec__85537 = p__85536;
var seq__85538 = cljs.core.seq(vec__85537);
var first__85539 = cljs.core.first(seq__85538);
var seq__85538__$1 = cljs.core.next(seq__85538);
var k = first__85539;
var ks = seq__85538__$1;
var schema__$1 = malli.core.schema.cljs$core$IFn$_invoke$arity$2(_QMARK_schema,options);
return malli.util.assoc.cljs$core$IFn$_invoke$arity$3(schema__$1,k,((ks)?malli.util.assoc_in.cljs$core$IFn$_invoke$arity$3(malli.util.get.cljs$core$IFn$_invoke$arity$3(schema__$1,k,malli.core.schema.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"map","map",1371690461),malli.core.options.cljs$core$IFn$_invoke$arity$1(schema__$1))),ks,value):value));
}));

(malli.util.assoc_in.cljs$lang$maxFixedArity = 4);

/**
 * Like [[clojure.core/update-in]], but for LensSchemas.
 */
malli.util.update_in = (function malli$util$update_in(var_args){
var args__4835__auto__ = [];
var len__4829__auto___85647 = arguments.length;
var i__4830__auto___85648 = (0);
while(true){
if((i__4830__auto___85648 < len__4829__auto___85647)){
args__4835__auto__.push((arguments[i__4830__auto___85648]));

var G__85649 = (i__4830__auto___85648 + (1));
i__4830__auto___85648 = G__85649;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((3) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((3)),(0),null)):null);
return malli.util.update_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4836__auto__);
});

(malli.util.update_in.cljs$core$IFn$_invoke$arity$variadic = (function (schema__$1,ks,f,args){
var up = (function malli$util$up(s,p__85548,f__$1,args__$1){
var vec__85549 = p__85548;
var seq__85550 = cljs.core.seq(vec__85549);
var first__85551 = cljs.core.first(seq__85550);
var seq__85550__$1 = cljs.core.next(seq__85550);
var k = first__85551;
var ks__$1 = seq__85550__$1;
return malli.util.assoc.cljs$core$IFn$_invoke$arity$3(s,k,((ks__$1)?malli$util$up(malli.util.get.cljs$core$IFn$_invoke$arity$3(s,k,malli.core.schema.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"map","map",1371690461),malli.core.options.cljs$core$IFn$_invoke$arity$1(schema__$1))),ks__$1,f__$1,args__$1):cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f__$1,malli.util.get.cljs$core$IFn$_invoke$arity$2(s,k),args__$1)));
});
return up(schema__$1,ks,f,args);
}));

(malli.util.update_in.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(malli.util.update_in.cljs$lang$applyTo = (function (seq85540){
var G__85541 = cljs.core.first(seq85540);
var seq85540__$1 = cljs.core.next(seq85540);
var G__85542 = cljs.core.first(seq85540__$1);
var seq85540__$2 = cljs.core.next(seq85540__$1);
var G__85543 = cljs.core.first(seq85540__$2);
var seq85540__$3 = cljs.core.next(seq85540__$2);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__85541,G__85542,G__85543,seq85540__$3);
}));

malli.util._map_syntax_walker = (function malli$util$_map_syntax_walker(schema__$1,_,children,___$1){
var properties = malli.core.properties.cljs$core$IFn$_invoke$arity$1(schema__$1);
var G__85552 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),malli.core.type.cljs$core$IFn$_invoke$arity$1(schema__$1)], null);
var G__85552__$1 = ((cljs.core.seq(properties))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__85552,new cljs.core.Keyword(null,"properties","properties",685819552),properties):G__85552);
if(cljs.core.seq(children)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__85552__$1,new cljs.core.Keyword(null,"children","children",-940561982),children);
} else {
return G__85552__$1;
}
});
malli.util.to_map_syntax = (function malli$util$to_map_syntax(var_args){
var G__85554 = arguments.length;
switch (G__85554) {
case 1:
return malli.util.to_map_syntax.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return malli.util.to_map_syntax.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.util.to_map_syntax.cljs$core$IFn$_invoke$arity$1 = (function (_QMARK_schema){
return malli.util.to_map_syntax.cljs$core$IFn$_invoke$arity$2(_QMARK_schema,null);
}));

(malli.util.to_map_syntax.cljs$core$IFn$_invoke$arity$2 = (function (_QMARK_schema,options){
return malli.core.walk.cljs$core$IFn$_invoke$arity$3(_QMARK_schema,malli.util._map_syntax_walker,options);
}));

(malli.util.to_map_syntax.cljs$lang$maxFixedArity = 2);

malli.util.from_map_syntax = (function malli$util$from_map_syntax(var_args){
var G__85558 = arguments.length;
switch (G__85558) {
case 1:
return malli.util.from_map_syntax.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return malli.util.from_map_syntax.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.util.from_map_syntax.cljs$core$IFn$_invoke$arity$1 = (function (m){
return malli.util.from_map_syntax.cljs$core$IFn$_invoke$arity$2(m,null);
}));

(malli.util.from_map_syntax.cljs$core$IFn$_invoke$arity$2 = (function (p__85559,options){
var map__85560 = p__85559;
var map__85560__$1 = cljs.core.__destructure_map(map__85560);
var m = map__85560__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85560__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var properties = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85560__$1,new cljs.core.Keyword(null,"properties","properties",685819552));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85560__$1,new cljs.core.Keyword(null,"children","children",-940561982));
if(cljs.core.map_QMARK_(m)){
var _LT__child = ((cljs.core.vector_QMARK_(cljs.core.first(children)))?(function (f){
return (function (p1__85555_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__85555_SHARP_,(2),f);
});
}):cljs.core.identity);
var vec__85561 = malli.core._properties_and_options(properties,options,malli.core._form);
var properties__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85561,(0),null);
var options__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85561,(1),null);
return malli.core.into_schema.cljs$core$IFn$_invoke$arity$4(type,properties__$1,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (){var G__85564 = (function (p1__85556_SHARP_){
return malli.util.from_map_syntax.cljs$core$IFn$_invoke$arity$2(p1__85556_SHARP_,options__$1);
});
return (_LT__child.cljs$core$IFn$_invoke$arity$1 ? _LT__child.cljs$core$IFn$_invoke$arity$1(G__85564) : _LT__child.call(null,G__85564));
})(),children),options__$1);
} else {
return m;
}
}));

(malli.util.from_map_syntax.cljs$lang$maxFixedArity = 2);

malli.util._reducing = (function malli$util$_reducing(f){
return (function (_,p__85568,options){
var vec__85569 = p__85568;
var seq__85570 = cljs.core.seq(vec__85569);
var first__85571 = cljs.core.first(seq__85570);
var seq__85570__$1 = cljs.core.next(seq__85570);
var first = first__85571;
var rest = seq__85570__$1;
var children = vec__85569;
var children__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__85565_SHARP_){
return malli.core.schema.cljs$core$IFn$_invoke$arity$2(p1__85565_SHARP_,options);
}),children);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [children__$1,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(malli.core.form,children__$1),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__85566_SHARP_,p2__85567_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(p1__85566_SHARP_,p2__85567_SHARP_,options) : f.call(null,p1__85566_SHARP_,p2__85567_SHARP_,options));
}),first,rest)], null);
});
});
malli.util._applying = (function malli$util$_applying(f){
return (function (_,children,options){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update.cljs$core$IFn$_invoke$arity$3(children,(0),(function (p1__85572_SHARP_){
return malli.core.schema.cljs$core$IFn$_invoke$arity$2(p1__85572_SHARP_,options);
})),cljs.core.update.cljs$core$IFn$_invoke$arity$3(children,(0),(function (p1__85573_SHARP_){
return malli.core.form.cljs$core$IFn$_invoke$arity$2(p1__85573_SHARP_,options);
})),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(children,options))], null);
});
});
malli.util._util_schema = (function malli$util$_util_schema(p__85574){
var map__85575 = p__85574;
var map__85575__$1 = cljs.core.__destructure_map(map__85575);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85575__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var min = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85575__$1,new cljs.core.Keyword(null,"min","min",444991522));
var max = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85575__$1,new cljs.core.Keyword(null,"max","max",61366548));
var childs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85575__$1,new cljs.core.Keyword(null,"childs","childs",-1293201887));
var type_properties = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85575__$1,new cljs.core.Keyword(null,"type-properties","type-properties",-1728352126));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85575__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
if((typeof malli !== 'undefined') && (typeof malli.util !== 'undefined') && (typeof malli.util.t_malli$util85576 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {malli.core.IntoSchema}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.util.t_malli$util85576 = (function (p__85574,map__85575,type,min,max,childs,type_properties,fn,meta85577){
this.p__85574 = p__85574;
this.map__85575 = map__85575;
this.type = type;
this.min = min;
this.max = max;
this.childs = childs;
this.type_properties = type_properties;
this.fn = fn;
this.meta85577 = meta85577;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.util.t_malli$util85576.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_85578,meta85577__$1){
var self__ = this;
var _85578__$1 = this;
return (new malli.util.t_malli$util85576(self__.p__85574,self__.map__85575,self__.type,self__.min,self__.max,self__.childs,self__.type_properties,self__.fn,meta85577__$1));
}));

(malli.util.t_malli$util85576.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_85578){
var self__ = this;
var _85578__$1 = this;
return self__.meta85577;
}));

(malli.util.t_malli$util85576.prototype.malli$core$IntoSchema$ = cljs.core.PROTOCOL_SENTINEL);

(malli.util.t_malli$util85576.prototype.malli$core$IntoSchema$_type$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.type;
}));

(malli.util.t_malli$util85576.prototype.malli$core$IntoSchema$_type_properties$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.type_properties;
}));

(malli.util.t_malli$util85576.prototype.malli$core$IntoSchema$_properties_schema$arity$2 = (function (_,___$1){
var self__ = this;
var ___$2 = this;
return null;
}));

(malli.util.t_malli$util85576.prototype.malli$core$IntoSchema$_children_schema$arity$2 = (function (_,___$1){
var self__ = this;
var ___$2 = this;
return null;
}));

(malli.util.t_malli$util85576.prototype.malli$core$IntoSchema$_into_schema$arity$4 = (function (parent,properties,children,options){
var self__ = this;
var parent__$1 = this;
malli.core._check_children_BANG_(self__.type,properties,children,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"min","min",444991522),self__.min,new cljs.core.Keyword(null,"max","max",61366548),self__.max], null));

var vec__85580 = (function (){var G__85583 = properties;
var G__85584 = cljs.core.vec(children);
var G__85585 = options;
return (self__.fn.cljs$core$IFn$_invoke$arity$3 ? self__.fn.cljs$core$IFn$_invoke$arity$3(G__85583,G__85584,G__85585) : self__.fn.call(null,G__85583,G__85584,G__85585));
})();
var children__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85580,(0),null);
var forms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85580,(1),null);
var schema__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85580,(2),null);
var walkable_childs = (cljs.core.truth_(self__.childs)?cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(children__$1,(0),self__.childs):children__$1);
var form = malli.core._create_form(self__.type,properties,forms);
if((typeof malli !== 'undefined') && (typeof malli.util !== 'undefined') && (typeof malli.util.t_malli$util85586 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {malli.core.LensSchema}
 * @implements {malli.core.Schema}
 * @implements {malli.core.RefSchema}
 * @implements {cljs.core.IWithMeta}
*/
malli.util.t_malli$util85586 = (function (form,options,vec__85580,forms,properties,childs,schema,children,min,type_properties,walkable_childs,fn,parent,p__85574,type,meta85577,max,map__85575,meta85587){
this.form = form;
this.options = options;
this.vec__85580 = vec__85580;
this.forms = forms;
this.properties = properties;
this.childs = childs;
this.schema = schema;
this.children = children;
this.min = min;
this.type_properties = type_properties;
this.walkable_childs = walkable_childs;
this.fn = fn;
this.parent = parent;
this.p__85574 = p__85574;
this.type = type;
this.meta85577 = meta85577;
this.max = max;
this.map__85575 = map__85575;
this.meta85587 = meta85587;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.util.t_malli$util85586.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_85588,meta85587__$1){
var self__ = this;
var _85588__$1 = this;
return (new malli.util.t_malli$util85586(self__.form,self__.options,self__.vec__85580,self__.forms,self__.properties,self__.childs,self__.schema,self__.children,self__.min,self__.type_properties,self__.walkable_childs,self__.fn,self__.parent,self__.p__85574,self__.type,self__.meta85577,self__.max,self__.map__85575,meta85587__$1));
}));

(malli.util.t_malli$util85586.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_85588){
var self__ = this;
var _85588__$1 = this;
return self__.meta85587;
}));

(malli.util.t_malli$util85586.prototype.malli$core$Schema$ = cljs.core.PROTOCOL_SENTINEL);

(malli.util.t_malli$util85586.prototype.malli$core$Schema$_validator$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.core._validator(self__.schema);
}));

(malli.util.t_malli$util85586.prototype.malli$core$Schema$_options$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.options;
}));

(malli.util.t_malli$util85586.prototype.malli$core$Schema$_transformer$arity$4 = (function (this$,transformer,method,options__$1){
var self__ = this;
var this$__$1 = this;
return malli.core._parent_children_transformer(this$__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.schema], null),transformer,method,options__$1);
}));

(malli.util.t_malli$util85586.prototype.malli$core$Schema$_walk$arity$4 = (function (this$,walker,path,options__$1){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(malli.core._accept(walker,this$__$1,path,options__$1))){
return malli.core._outer(walker,this$__$1,path,malli.core._inner_indexed(walker,path,self__.walkable_childs,options__$1),options__$1);
} else {
return null;
}
}));

(malli.util.t_malli$util85586.prototype.malli$core$Schema$_properties$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.properties;
}));

(malli.util.t_malli$util85586.prototype.malli$core$Schema$_children$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.children;
}));

(malli.util.t_malli$util85586.prototype.malli$core$Schema$_form$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.form;
}));

(malli.util.t_malli$util85586.prototype.malli$core$Schema$_explainer$arity$2 = (function (_,path){
var self__ = this;
var ___$1 = this;
return malli.core._explainer(self__.schema,path);
}));

(malli.util.t_malli$util85586.prototype.malli$core$Schema$_parent$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.parent;
}));

(malli.util.t_malli$util85586.prototype.malli$core$LensSchema$ = cljs.core.PROTOCOL_SENTINEL);

(malli.util.t_malli$util85586.prototype.malli$core$LensSchema$_keep$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return null;
}));

(malli.util.t_malli$util85586.prototype.malli$core$LensSchema$_get$arity$3 = (function (_,key,default$){
var self__ = this;
var ___$1 = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.children,key,default$);
}));

(malli.util.t_malli$util85586.prototype.malli$core$LensSchema$_set$arity$3 = (function (_,key,value){
var self__ = this;
var ___$1 = this;
return malli.core.into_schema.cljs$core$IFn$_invoke$arity$3(self__.type,self__.properties,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.children,key,value));
}));

(malli.util.t_malli$util85586.prototype.malli$core$RefSchema$ = cljs.core.PROTOCOL_SENTINEL);

(malli.util.t_malli$util85586.prototype.malli$core$RefSchema$_ref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return null;
}));

(malli.util.t_malli$util85586.prototype.malli$core$RefSchema$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.schema;
}));

(malli.util.t_malli$util85586.getBasis = (function (){
return new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"form","form",16469056,null),new cljs.core.Symbol(null,"options","options",1740170016,null),new cljs.core.Symbol(null,"vec__85580","vec__85580",-370122781,null),new cljs.core.Symbol(null,"forms","forms",-608443419,null),new cljs.core.Symbol(null,"properties","properties",-1968616217,null),new cljs.core.Symbol(null,"childs","childs",347329640,null),new cljs.core.Symbol(null,"schema","schema",58529736,null),new cljs.core.Symbol(null,"children","children",699969545,null),new cljs.core.Symbol(null,"min","min",2085523049,null),new cljs.core.Symbol(null,"type-properties","type-properties",-87820599,null),new cljs.core.Symbol(null,"walkable-childs","walkable-childs",1399888171,null),new cljs.core.Symbol(null,"fn","fn",465265323,null),cljs.core.with_meta(new cljs.core.Symbol(null,"parent","parent",761652748,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("malli.util","t_malli$util85576","malli.util/t_malli$util85576",-2033905139,null)], null)),new cljs.core.Symbol(null,"p__85574","p__85574",1445182252,null),new cljs.core.Symbol(null,"type","type",-1480165421,null),new cljs.core.Symbol(null,"meta85577","meta85577",-429815049,null),new cljs.core.Symbol(null,"max","max",1701898075,null),new cljs.core.Symbol(null,"map__85575","map__85575",-1273102499,null),new cljs.core.Symbol(null,"meta85587","meta85587",-2098908939,null)], null);
}));

(malli.util.t_malli$util85586.cljs$lang$type = true);

(malli.util.t_malli$util85586.cljs$lang$ctorStr = "malli.util/t_malli$util85586");

(malli.util.t_malli$util85586.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"malli.util/t_malli$util85586");
}));

/**
 * Positional factory function for malli.util/t_malli$util85586.
 */
malli.util.__GT_t_malli$util85586 = (function malli$util$_util_schema_$___GT_t_malli$util85586(form__$1,options__$1,vec__85580__$1,forms__$1,properties__$1,childs__$1,schema__$2,children__$2,min__$1,type_properties__$1,walkable_childs__$1,fn__$1,parent__$2,p__85574__$1,type__$1,meta85577__$1,max__$1,map__85575__$1,meta85587){
return (new malli.util.t_malli$util85586(form__$1,options__$1,vec__85580__$1,forms__$1,properties__$1,childs__$1,schema__$2,children__$2,min__$1,type_properties__$1,walkable_childs__$1,fn__$1,parent__$2,p__85574__$1,type__$1,meta85577__$1,max__$1,map__85575__$1,meta85587));
});

}

return (new malli.util.t_malli$util85586(form,options,vec__85580,forms,properties,self__.childs,schema__$1,children__$1,self__.min,self__.type_properties,walkable_childs,self__.fn,parent__$1,self__.p__85574,self__.type,self__.meta85577,self__.max,self__.map__85575,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("malli.core","schema","malli.core/schema",-1780373863)], null)));
}));

(malli.util.t_malli$util85576.getBasis = (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p__85574","p__85574",1445182252,null),new cljs.core.Symbol(null,"map__85575","map__85575",-1273102499,null),new cljs.core.Symbol(null,"type","type",-1480165421,null),new cljs.core.Symbol(null,"min","min",2085523049,null),new cljs.core.Symbol(null,"max","max",1701898075,null),new cljs.core.Symbol(null,"childs","childs",347329640,null),new cljs.core.Symbol(null,"type-properties","type-properties",-87820599,null),new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"meta85577","meta85577",-429815049,null)], null);
}));

(malli.util.t_malli$util85576.cljs$lang$type = true);

(malli.util.t_malli$util85576.cljs$lang$ctorStr = "malli.util/t_malli$util85576");

(malli.util.t_malli$util85576.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"malli.util/t_malli$util85576");
}));

/**
 * Positional factory function for malli.util/t_malli$util85576.
 */
malli.util.__GT_t_malli$util85576 = (function malli$util$_util_schema_$___GT_t_malli$util85576(p__85574__$1,map__85575__$2,type__$1,min__$1,max__$1,childs__$1,type_properties__$1,fn__$1,meta85577){
return (new malli.util.t_malli$util85576(p__85574__$1,map__85575__$2,type__$1,min__$1,max__$1,childs__$1,type_properties__$1,fn__$1,meta85577));
});

}

return (new malli.util.t_malli$util85576(p__85574,map__85575__$1,type,min,max,childs,type_properties,fn,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("malli.core","into-schema","malli.core/into-schema",1522165759)], null)));
});
malli.util._merge = (function malli$util$_merge(){
return malli.util._util_schema(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"merge","merge",-1804319409),new cljs.core.Keyword(null,"fn","fn",-1175266204),malli.util._reducing(malli.util.merge)], null));
});
malli.util._union = (function malli$util$_union(){
return malli.util._util_schema(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"union","union",2142937499),new cljs.core.Keyword(null,"fn","fn",-1175266204),malli.util._reducing(malli.util.union)], null));
});
malli.util._select_keys = (function malli$util$_select_keys(){
return malli.util._util_schema(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"select-keys","select-keys",1945879180),new cljs.core.Keyword(null,"childs","childs",-1293201887),(1),new cljs.core.Keyword(null,"min","min",444991522),(2),new cljs.core.Keyword(null,"max","max",61366548),(2),new cljs.core.Keyword(null,"fn","fn",-1175266204),malli.util._applying(malli.util.select_keys)], null));
});
malli.util.schemas = (function malli$util$schemas(){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"merge","merge",-1804319409),malli.util._merge(),new cljs.core.Keyword(null,"union","union",2142937499),malli.util._union(),new cljs.core.Keyword(null,"select-keys","select-keys",1945879180),malli.util._select_keys()], null);
});

//# sourceMappingURL=malli.util.js.map
