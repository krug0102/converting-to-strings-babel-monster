goog.provide('repl_tooling.editor_integration.renderer.interactive');
repl_tooling.editor_integration.renderer.interactive.edn_QMARK_ = (function repl_tooling$editor_integration$renderer$interactive$edn_QMARK_(obj){
return ((typeof obj === 'number') || (((typeof obj === 'string') || (((cljs.core.coll_QMARK_(obj)) || (((cljs.core.boolean_QMARK_(obj)) || ((((obj == null)) || (((cljs.core.regexp_QMARK_(obj)) || ((((obj instanceof cljs.core.Symbol)) || ((((obj instanceof cljs.core.Keyword)) || (cljs.core.tagged_literal_QMARK_(obj)))))))))))))))));
});
repl_tooling.editor_integration.renderer.interactive.norm_evt = (function repl_tooling$editor_integration$renderer$interactive$norm_evt(obj){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(repl_tooling.editor_integration.renderer.interactive.edn_QMARK_,cljs.core.second),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__59530_SHARP_){
var norm = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.replace(p1__59530_SHARP_,/[A-Z]/,(function (r){
return ["-",clojure.string.lower_case(r)].join('');
})));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [norm,(obj[p1__59530_SHARP_])], null);
}),Object.getOwnPropertyNames(Object.getPrototypeOf(obj)))));
});
repl_tooling.editor_integration.renderer.interactive.run_evt_fun_BANG_ = (function repl_tooling$editor_integration$renderer$interactive$run_evt_fun_BANG_(eql,e,fun,state,repl,additional_args){
e.preventDefault();

e.stopPropagation();

var norm = (function (p1__59536_SHARP_){
if(((cljs.core.tagged_literal_QMARK_(p1__59536_SHARP_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__59536_SHARP_.tag,new cljs.core.Symbol("tooling","eval","tooling/eval",2084422636,null))))){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__59536_SHARP_.form], 0));
} else {
return ["'",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__59536_SHARP_], 0))].join('');
}
});
var code = ["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fun)," '",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([repl_tooling.editor_integration.renderer.interactive.norm_evt(e.target)], 0))," '",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.deref(state)], 0))," ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(norm,additional_args)),")"].join('');
var res = (function (){var G__59545 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("text","contents","text/contents",-1566533716),code], null);
var G__59546 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("repl","result","repl/result",1421065572)], null);
return (eql.cljs$core$IFn$_invoke$arity$2 ? eql.cljs$core$IFn$_invoke$arity$2(G__59545,G__59546) : eql.call(null,G__59545,G__59546));
})();
return promesa.core.then.cljs$core$IFn$_invoke$arity$2(res,(function (response){
return cljs.core.reset_BANG_(state,new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("repl","result","repl/result",1421065572).cljs$core$IFn$_invoke$arity$1(response)));
}));
});
repl_tooling.editor_integration.renderer.interactive.prepare_fn = (function repl_tooling$editor_integration$renderer$interactive$prepare_fn(eql,fun,state,repl){
return (function() { 
var G__60048__delegate = function (args){
if(repl_tooling.editor_integration.renderer.interactive.edn_QMARK_(cljs.core.first(args))){
return (function (e){
return repl_tooling.editor_integration.renderer.interactive.run_evt_fun_BANG_(eql,e,fun,state,repl,args);
});
} else {
return repl_tooling.editor_integration.renderer.interactive.run_evt_fun_BANG_(eql,cljs.core.first(args),fun,state,repl,cljs.core.PersistentVector.EMPTY);
}
};
var G__60048 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__60049__i = 0, G__60049__a = new Array(arguments.length -  0);
while (G__60049__i < G__60049__a.length) {G__60049__a[G__60049__i] = arguments[G__60049__i + 0]; ++G__60049__i;}
  args = new cljs.core.IndexedSeq(G__60049__a,0,null);
} 
return G__60048__delegate.call(this,args);};
G__60048.cljs$lang$maxFixedArity = 0;
G__60048.cljs$lang$applyTo = (function (arglist__60050){
var args = cljs.core.seq(arglist__60050);
return G__60048__delegate(args);
});
G__60048.cljs$core$IFn$_invoke$arity$variadic = G__60048__delegate;
return G__60048;
})()
;
});
repl_tooling.editor_integration.renderer.interactive.bindings_for = (function repl_tooling$editor_integration$renderer$interactive$bindings_for(editor_state,eql,state,fns,repl){
var binds = paprika.collection.map_values((function (v){
return (function() { 
var G__60051__delegate = function (args){
promesa.protocols._bind(null,(function (___31810__auto__){
return promesa.protocols._promise(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(v,args));
}));

return null;
};
var G__60051 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__60052__i = 0, G__60052__a = new Array(arguments.length -  0);
while (G__60052__i < G__60052__a.length) {G__60052__a[G__60052__i] = arguments[G__60052__i + 0]; ++G__60052__i;}
  args = new cljs.core.IndexedSeq(G__60052__a,0,null);
} 
return G__60051__delegate.call(this,args);};
G__60051.cljs$lang$maxFixedArity = 0;
G__60051.cljs$lang$applyTo = (function (arglist__60053){
var args = cljs.core.seq(arglist__60053);
return G__60051__delegate(args);
});
G__60051.cljs$core$IFn$_invoke$arity$variadic = G__60051__delegate;
return G__60051;
})()
;
}),repl_tooling.editor_integration.interpreter.debug_bindings(editor_state));
var binds__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(binds,new cljs.core.Symbol(null,"?state","?state",-1752482484,null),cljs.core.deref(state),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Symbol(null,"?state-atom","?state-atom",-1559113913,null),state,new cljs.core.Symbol(null,"eql","eql",-1239543386,null),eql,new cljs.core.Symbol(null,"eval","eval",536963622,null),(function (p1__59553_SHARP_){
return cljs.core.tagged_literal(new cljs.core.Symbol("tooling","eval","tooling/eval",2084422636,null),p1__59553_SHARP_);
})], 0));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(binds__$1,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__59554){
var vec__59555 = p__59554;
var f_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59555,(0),null);
var f_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59555,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["?",cljs.core.name(f_name)].join('')),repl_tooling.editor_integration.renderer.interactive.prepare_fn(eql,f_body,state,repl)], null);
}),fns));
});
repl_tooling.editor_integration.renderer.interactive.treat_error = (function repl_tooling$editor_integration$renderer$interactive$treat_error(hiccup){
var d = document.createElement("div");
reagent.dom.render.cljs$core$IFn$_invoke$arity$2(hiccup,d);

return hiccup;
});
repl_tooling.editor_integration.renderer.interactive.prepare_new_eql = (function repl_tooling$editor_integration$renderer$interactive$prepare_new_eql(editor_state){
var eql = new cljs.core.Keyword(null,"eql","eql",1414892383).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("editor","features","editor/features",1302258665).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(editor_state)));
var cached_result = (function (){var G__59559 = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","data","editor/data",-1539989548),new cljs.core.Keyword("config","repl-kind","config/repl-kind",1937588875),new cljs.core.Keyword("config","eval-as","config/eval-as",-937334597),new cljs.core.Keyword("config","project-paths","config/project-paths",1302768596),new cljs.core.Keyword("repl","evaluators","repl/evaluators",84539740)], null);
return (eql.cljs$core$IFn$_invoke$arity$1 ? eql.cljs$core$IFn$_invoke$arity$1(G__59559) : eql.call(null,G__59559));
})();
return (function() {
var repl_tooling$editor_integration$renderer$interactive$prepare_new_eql_$_q = null;
var repl_tooling$editor_integration$renderer$interactive$prepare_new_eql_$_q__1 = (function (query){
return repl_tooling$editor_integration$renderer$interactive$prepare_new_eql_$_q.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,query);
});
var repl_tooling$editor_integration$renderer$interactive$prepare_new_eql_$_q__2 = (function (seed,query){
return promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(cached_result,(function (original_seed){
return promesa.protocols._bind(null,(function (___31810__auto__){
return promesa.protocols._promise((function (){var G__59564 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([original_seed,seed], 0));
var G__59565 = query;
return (eql.cljs$core$IFn$_invoke$arity$2 ? eql.cljs$core$IFn$_invoke$arity$2(G__59564,G__59565) : eql.call(null,G__59564,G__59565));
})());
}));
}));
}));
});
repl_tooling$editor_integration$renderer$interactive$prepare_new_eql_$_q = function(seed,query){
switch(arguments.length){
case 1:
return repl_tooling$editor_integration$renderer$interactive$prepare_new_eql_$_q__1.call(this,seed);
case 2:
return repl_tooling$editor_integration$renderer$interactive$prepare_new_eql_$_q__2.call(this,seed,query);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
repl_tooling$editor_integration$renderer$interactive$prepare_new_eql_$_q.cljs$core$IFn$_invoke$arity$1 = repl_tooling$editor_integration$renderer$interactive$prepare_new_eql_$_q__1;
repl_tooling$editor_integration$renderer$interactive$prepare_new_eql_$_q.cljs$core$IFn$_invoke$arity$2 = repl_tooling$editor_integration$renderer$interactive$prepare_new_eql_$_q__2;
return repl_tooling$editor_integration$renderer$interactive$prepare_new_eql_$_q;
})()
});
repl_tooling.editor_integration.renderer.interactive.render_interactive = (function repl_tooling$editor_integration$renderer$interactive$render_interactive(p__59569,repl,editor_state){
var map__59571 = p__59569;
var map__59571__$1 = cljs.core.__destructure_map(map__59571);
var edn = map__59571__$1;
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59571__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var html = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59571__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var fns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59571__$1,new cljs.core.Keyword(null,"fns","fns",1185138786));
var state__$1 = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(state);
var code = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([html], 0));
var eql = repl_tooling.editor_integration.renderer.interactive.prepare_new_eql(editor_state);
var html__$1 = (function (state__$2){
try{return repl_tooling.editor_integration.renderer.interactive.treat_error(repl_tooling.ui.pinkie.tag_inject(repl_tooling.editor_integration.interpreter.evaluate_code(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"code","code",1586293142),code,new cljs.core.Keyword(null,"bindings","bindings",1271397192),repl_tooling.editor_integration.renderer.interactive.bindings_for(editor_state,eql,state__$2,fns,repl),new cljs.core.Keyword(null,"editor-state","editor-state",579582138),editor_state], null))));
}catch (e59574){var e = e59574;
console.log(e);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.error","div.error",314336058),"Can't render this code - ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0))], null);
}});
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [html__$1,state__$1], null);
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
 * @implements {repl_tooling.editor_integration.renderer.protocols.Renderable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
repl_tooling.editor_integration.renderer.interactive.Interactive = (function (edn,repl,editor_state,__meta,__extmap,__hash){
this.edn = edn;
this.repl = repl;
this.editor_state = editor_state;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(repl_tooling.editor_integration.renderer.interactive.Interactive.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(repl_tooling.editor_integration.renderer.interactive.Interactive.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k59576,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__59596 = k59576;
var G__59596__$1 = (((G__59596 instanceof cljs.core.Keyword))?G__59596.fqn:null);
switch (G__59596__$1) {
case "edn":
return self__.edn;

break;
case "repl":
return self__.repl;

break;
case "editor-state":
return self__.editor_state;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k59576,else__4475__auto__);

}
}));

(repl_tooling.editor_integration.renderer.interactive.Interactive.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__59597){
var vec__59598 = p__59597;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59598,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59598,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(repl_tooling.editor_integration.renderer.interactive.Interactive.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#repl-tooling.editor-integration.renderer.interactive.Interactive{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"edn","edn",1317840885),self__.edn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"repl","repl",-35398667),self__.repl],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"editor-state","editor-state",579582138),self__.editor_state],null))], null),self__.__extmap));
}));

(repl_tooling.editor_integration.renderer.interactive.Interactive.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__59575){
var self__ = this;
var G__59575__$1 = this;
return (new cljs.core.RecordIter((0),G__59575__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"edn","edn",1317840885),new cljs.core.Keyword(null,"repl","repl",-35398667),new cljs.core.Keyword(null,"editor-state","editor-state",579582138)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(repl_tooling.editor_integration.renderer.interactive.Interactive.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(repl_tooling.editor_integration.renderer.interactive.Interactive.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new repl_tooling.editor_integration.renderer.interactive.Interactive(self__.edn,self__.repl,self__.editor_state,self__.__meta,self__.__extmap,self__.__hash));
}));

(repl_tooling.editor_integration.renderer.interactive.Interactive.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
}));

(repl_tooling.editor_integration.renderer.interactive.Interactive.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (coll__4469__auto__){
return (1598141977 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
})(this__4468__auto____$1);
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(repl_tooling.editor_integration.renderer.interactive.Interactive.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this59577,other59578){
var self__ = this;
var this59577__$1 = this;
return (((!((other59578 == null)))) && ((((this59577__$1.constructor === other59578.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this59577__$1.edn,other59578.edn)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this59577__$1.repl,other59578.repl)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this59577__$1.editor_state,other59578.editor_state)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this59577__$1.__extmap,other59578.__extmap)))))))))));
}));

(repl_tooling.editor_integration.renderer.interactive.Interactive.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"edn","edn",1317840885),null,new cljs.core.Keyword(null,"repl","repl",-35398667),null,new cljs.core.Keyword(null,"editor-state","editor-state",579582138),null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new repl_tooling.editor_integration.renderer.interactive.Interactive(self__.edn,self__.repl,self__.editor_state,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(repl_tooling.editor_integration.renderer.interactive.Interactive.prototype.repl_tooling$editor_integration$renderer$protocols$Renderable$ = cljs.core.PROTOCOL_SENTINEL);

(repl_tooling.editor_integration.renderer.interactive.Interactive.prototype.repl_tooling$editor_integration$renderer$protocols$Renderable$as_html$arity$3 = (function (_,ratom,___$1){
var self__ = this;
var ___$2 = this;
return repl_tooling.editor_integration.renderer.interactive.render_interactive(self__.edn,self__.repl,self__.editor_state);
}));

(repl_tooling.editor_integration.renderer.interactive.Interactive.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k59576){
var self__ = this;
var this__4479__auto____$1 = this;
var G__59618 = k59576;
var G__59618__$1 = (((G__59618 instanceof cljs.core.Keyword))?G__59618.fqn:null);
switch (G__59618__$1) {
case "edn":
case "repl":
case "editor-state":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k59576);

}
}));

(repl_tooling.editor_integration.renderer.interactive.Interactive.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__59575){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__59870 = cljs.core.keyword_identical_QMARK_;
var expr__59871 = k__4481__auto__;
if(cljs.core.truth_((pred__59870.cljs$core$IFn$_invoke$arity$2 ? pred__59870.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"edn","edn",1317840885),expr__59871) : pred__59870.call(null,new cljs.core.Keyword(null,"edn","edn",1317840885),expr__59871)))){
return (new repl_tooling.editor_integration.renderer.interactive.Interactive(G__59575,self__.repl,self__.editor_state,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__59870.cljs$core$IFn$_invoke$arity$2 ? pred__59870.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"repl","repl",-35398667),expr__59871) : pred__59870.call(null,new cljs.core.Keyword(null,"repl","repl",-35398667),expr__59871)))){
return (new repl_tooling.editor_integration.renderer.interactive.Interactive(self__.edn,G__59575,self__.editor_state,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__59870.cljs$core$IFn$_invoke$arity$2 ? pred__59870.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"editor-state","editor-state",579582138),expr__59871) : pred__59870.call(null,new cljs.core.Keyword(null,"editor-state","editor-state",579582138),expr__59871)))){
return (new repl_tooling.editor_integration.renderer.interactive.Interactive(self__.edn,self__.repl,G__59575,self__.__meta,self__.__extmap,null));
} else {
return (new repl_tooling.editor_integration.renderer.interactive.Interactive(self__.edn,self__.repl,self__.editor_state,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__59575),null));
}
}
}
}));

(repl_tooling.editor_integration.renderer.interactive.Interactive.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"edn","edn",1317840885),self__.edn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"repl","repl",-35398667),self__.repl,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"editor-state","editor-state",579582138),self__.editor_state,null))], null),self__.__extmap));
}));

(repl_tooling.editor_integration.renderer.interactive.Interactive.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__59575){
var self__ = this;
var this__4471__auto____$1 = this;
return (new repl_tooling.editor_integration.renderer.interactive.Interactive(self__.edn,self__.repl,self__.editor_state,G__59575,self__.__extmap,self__.__hash));
}));

(repl_tooling.editor_integration.renderer.interactive.Interactive.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4478__auto__,(0)),cljs.core._nth(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(repl_tooling.editor_integration.renderer.interactive.Interactive.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"edn","edn",-1336594884,null),new cljs.core.Symbol(null,"repl","repl",1605132860,null),new cljs.core.Symbol(null,"editor-state","editor-state",-2074853631,null)], null);
}));

(repl_tooling.editor_integration.renderer.interactive.Interactive.cljs$lang$type = true);

(repl_tooling.editor_integration.renderer.interactive.Interactive.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"repl-tooling.editor-integration.renderer.interactive/Interactive",null,(1),null));
}));

(repl_tooling.editor_integration.renderer.interactive.Interactive.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"repl-tooling.editor-integration.renderer.interactive/Interactive");
}));

/**
 * Positional factory function for repl-tooling.editor-integration.renderer.interactive/Interactive.
 */
repl_tooling.editor_integration.renderer.interactive.__GT_Interactive = (function repl_tooling$editor_integration$renderer$interactive$__GT_Interactive(edn,repl,editor_state){
return (new repl_tooling.editor_integration.renderer.interactive.Interactive(edn,repl,editor_state,null,null,null));
});

/**
 * Factory function for repl-tooling.editor-integration.renderer.interactive/Interactive, taking a map of keywords to field values.
 */
repl_tooling.editor_integration.renderer.interactive.map__GT_Interactive = (function repl_tooling$editor_integration$renderer$interactive$map__GT_Interactive(G__59581){
var extmap__4512__auto__ = (function (){var G__59955 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__59581,new cljs.core.Keyword(null,"edn","edn",1317840885),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"repl","repl",-35398667),new cljs.core.Keyword(null,"editor-state","editor-state",579582138)], 0));
if(cljs.core.record_QMARK_(G__59581)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__59955);
} else {
return G__59955;
}
})();
return (new repl_tooling.editor_integration.renderer.interactive.Interactive(new cljs.core.Keyword(null,"edn","edn",1317840885).cljs$core$IFn$_invoke$arity$1(G__59581),new cljs.core.Keyword(null,"repl","repl",-35398667).cljs$core$IFn$_invoke$arity$1(G__59581),new cljs.core.Keyword(null,"editor-state","editor-state",579582138).cljs$core$IFn$_invoke$arity$1(G__59581),null,cljs.core.not_empty(extmap__4512__auto__),null));
});


//# sourceMappingURL=repl_tooling.editor_integration.renderer.interactive.js.map
