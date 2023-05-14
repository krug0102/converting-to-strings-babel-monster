goog.provide('com.wsscode.pathom3.entity_tree');
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom3.entity-tree","entity-tree","com.wsscode.pathom3.entity-tree/entity-tree",-1151887464),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),cljs.core.map_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom3.entity-tree","entity-tree*","com.wsscode.pathom3.entity-tree/entity-tree*",1259415691),new cljs.core.Symbol("com.wsscode.misc.refs","atom?","com.wsscode.misc.refs/atom?",-53238677,null),com.wsscode.misc.refs.atom_QMARK_);
/**
 * Returns the entity tree value from env
 */
com.wsscode.pathom3.entity_tree.entity = (function com$wsscode$pathom3$entity_tree$entity(p__157999){
var map__158000 = p__157999;
var map__158000__$1 = cljs.core.__destructure_map(map__158000);
var entity_tree_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__158000__$1,new cljs.core.Keyword("com.wsscode.pathom3.entity-tree","entity-tree*","com.wsscode.pathom3.entity-tree/entity-tree*",1259415691));
var G__158001 = entity_tree_STAR_;
if((G__158001 == null)){
return null;
} else {
return cljs.core.deref(G__158001);
}
});
com.wsscode.pathom3.entity_tree.create_entity = (function com$wsscode$pathom3$entity_tree$create_entity(x){
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(x);
});
/**
 * Set the entity in the environment. Note in this function you must send the cache-tree
 *   as a map, not as an atom.
 */
com.wsscode.pathom3.entity_tree.with_entity = (function com$wsscode$pathom3$entity_tree$with_entity(env,entity_tree){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom3.entity-tree","entity-tree*","com.wsscode.pathom3.entity-tree/entity-tree*",1259415691),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(entity_tree));
});
com.wsscode.pathom3.entity_tree.reset_entity_BANG_ = (function com$wsscode$pathom3$entity_tree$reset_entity_BANG_(p__158002,entity_tree){
var map__158003 = p__158002;
var map__158003__$1 = cljs.core.__destructure_map(map__158003);
var entity_tree_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__158003__$1,new cljs.core.Keyword("com.wsscode.pathom3.entity-tree","entity-tree*","com.wsscode.pathom3.entity-tree/entity-tree*",1259415691));
return cljs.core.reset_BANG_(entity_tree_STAR_,entity_tree);
});
/**
 * Swap cache-tree at the current path. Returns the updated whole cache-tree.
 */
com.wsscode.pathom3.entity_tree.swap_entity_BANG_ = (function com$wsscode$pathom3$entity_tree$swap_entity_BANG_(var_args){
var G__158024 = arguments.length;
switch (G__158024) {
case 2:
return com.wsscode.pathom3.entity_tree.swap_entity_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.wsscode.pathom3.entity_tree.swap_entity_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return com.wsscode.pathom3.entity_tree.swap_entity_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__4850__auto__ = [];
var len__4829__auto___158057 = arguments.length;
var i__4830__auto___158058 = (0);
while(true){
if((i__4830__auto___158058 < len__4829__auto___158057)){
args_arr__4850__auto__.push((arguments[i__4830__auto___158058]));

var G__158059 = (i__4830__auto___158058 + (1));
i__4830__auto___158058 = G__158059;
continue;
} else {
}
break;
}

var argseq__4851__auto__ = (new cljs.core.IndexedSeq(args_arr__4850__auto__.slice((4)),(0),null));
return com.wsscode.pathom3.entity_tree.swap_entity_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4851__auto__);

}
});

(com.wsscode.pathom3.entity_tree.swap_entity_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (p__158025,f){
var map__158026 = p__158025;
var map__158026__$1 = cljs.core.__destructure_map(map__158026);
var entity_tree_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__158026__$1,new cljs.core.Keyword("com.wsscode.pathom3.entity-tree","entity-tree*","com.wsscode.pathom3.entity-tree/entity-tree*",1259415691));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(entity_tree_STAR_,f);
}));

(com.wsscode.pathom3.entity_tree.swap_entity_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (p__158027,f,x){
var map__158028 = p__158027;
var map__158028__$1 = cljs.core.__destructure_map(map__158028);
var entity_tree_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__158028__$1,new cljs.core.Keyword("com.wsscode.pathom3.entity-tree","entity-tree*","com.wsscode.pathom3.entity-tree/entity-tree*",1259415691));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(entity_tree_STAR_,f,x);
}));

(com.wsscode.pathom3.entity_tree.swap_entity_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (p__158029,f,x,y){
var map__158030 = p__158029;
var map__158030__$1 = cljs.core.__destructure_map(map__158030);
var entity_tree_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__158030__$1,new cljs.core.Keyword("com.wsscode.pathom3.entity-tree","entity-tree*","com.wsscode.pathom3.entity-tree/entity-tree*",1259415691));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(entity_tree_STAR_,f,x,y);
}));

(com.wsscode.pathom3.entity_tree.swap_entity_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__158031,f,x,y,args){
var map__158032 = p__158031;
var map__158032__$1 = cljs.core.__destructure_map(map__158032);
var entity_tree_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__158032__$1,new cljs.core.Keyword("com.wsscode.pathom3.entity-tree","entity-tree*","com.wsscode.pathom3.entity-tree/entity-tree*",1259415691));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(cljs.core.swap_BANG_,entity_tree_STAR_,f,x,y,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([args], 0));
}));

/** @this {Function} */
(com.wsscode.pathom3.entity_tree.swap_entity_BANG_.cljs$lang$applyTo = (function (seq158019){
var G__158020 = cljs.core.first(seq158019);
var seq158019__$1 = cljs.core.next(seq158019);
var G__158021 = cljs.core.first(seq158019__$1);
var seq158019__$2 = cljs.core.next(seq158019__$1);
var G__158022 = cljs.core.first(seq158019__$2);
var seq158019__$3 = cljs.core.next(seq158019__$2);
var G__158023 = cljs.core.first(seq158019__$3);
var seq158019__$4 = cljs.core.next(seq158019__$3);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__158020,G__158021,G__158022,G__158023,seq158019__$4);
}));

(com.wsscode.pathom3.entity_tree.swap_entity_BANG_.cljs$lang$maxFixedArity = (4));

/**
 * Swap cache-tree at the current path. Returns the updated whole cache-tree.
 */
com.wsscode.pathom3.entity_tree.vswap_entity_BANG_ = (function com$wsscode$pathom3$entity_tree$vswap_entity_BANG_(var_args){
var G__158039 = arguments.length;
switch (G__158039) {
case 2:
return com.wsscode.pathom3.entity_tree.vswap_entity_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.wsscode.pathom3.entity_tree.vswap_entity_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return com.wsscode.pathom3.entity_tree.vswap_entity_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__4850__auto__ = [];
var len__4829__auto___158063 = arguments.length;
var i__4830__auto___158064 = (0);
while(true){
if((i__4830__auto___158064 < len__4829__auto___158063)){
args_arr__4850__auto__.push((arguments[i__4830__auto___158064]));

var G__158065 = (i__4830__auto___158064 + (1));
i__4830__auto___158064 = G__158065;
continue;
} else {
}
break;
}

var argseq__4851__auto__ = (new cljs.core.IndexedSeq(args_arr__4850__auto__.slice((4)),(0),null));
return com.wsscode.pathom3.entity_tree.vswap_entity_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4851__auto__);

}
});

(com.wsscode.pathom3.entity_tree.vswap_entity_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (p__158040,f){
var map__158041 = p__158040;
var map__158041__$1 = cljs.core.__destructure_map(map__158041);
var entity_tree_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__158041__$1,new cljs.core.Keyword("com.wsscode.pathom3.entity-tree","entity-tree*","com.wsscode.pathom3.entity-tree/entity-tree*",1259415691));
return cljs.core._vreset_BANG_(entity_tree_STAR_,(function (){var G__158042 = cljs.core._deref(entity_tree_STAR_);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__158042) : f.call(null,G__158042));
})());
}));

(com.wsscode.pathom3.entity_tree.vswap_entity_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (p__158044,f,x){
var map__158045 = p__158044;
var map__158045__$1 = cljs.core.__destructure_map(map__158045);
var entity_tree_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__158045__$1,new cljs.core.Keyword("com.wsscode.pathom3.entity-tree","entity-tree*","com.wsscode.pathom3.entity-tree/entity-tree*",1259415691));
return cljs.core._vreset_BANG_(entity_tree_STAR_,(function (){var G__158046 = cljs.core._deref(entity_tree_STAR_);
var G__158047 = x;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__158046,G__158047) : f.call(null,G__158046,G__158047));
})());
}));

(com.wsscode.pathom3.entity_tree.vswap_entity_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (p__158048,f,x,y){
var map__158049 = p__158048;
var map__158049__$1 = cljs.core.__destructure_map(map__158049);
var entity_tree_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__158049__$1,new cljs.core.Keyword("com.wsscode.pathom3.entity-tree","entity-tree*","com.wsscode.pathom3.entity-tree/entity-tree*",1259415691));
return cljs.core._vreset_BANG_(entity_tree_STAR_,(function (){var G__158050 = cljs.core._deref(entity_tree_STAR_);
var G__158051 = x;
var G__158052 = y;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__158050,G__158051,G__158052) : f.call(null,G__158050,G__158051,G__158052));
})());
}));

(com.wsscode.pathom3.entity_tree.vswap_entity_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__158053,f,x,y,args){
var map__158054 = p__158053;
var map__158054__$1 = cljs.core.__destructure_map(map__158054);
var entity_tree_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__158054__$1,new cljs.core.Keyword("com.wsscode.pathom3.entity-tree","entity-tree*","com.wsscode.pathom3.entity-tree/entity-tree*",1259415691));
return cljs.core.vreset_BANG_(entity_tree_STAR_,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,cljs.core.deref(entity_tree_STAR_),x,y,args));
}));

/** @this {Function} */
(com.wsscode.pathom3.entity_tree.vswap_entity_BANG_.cljs$lang$applyTo = (function (seq158034){
var G__158035 = cljs.core.first(seq158034);
var seq158034__$1 = cljs.core.next(seq158034);
var G__158036 = cljs.core.first(seq158034__$1);
var seq158034__$2 = cljs.core.next(seq158034__$1);
var G__158037 = cljs.core.first(seq158034__$2);
var seq158034__$3 = cljs.core.next(seq158034__$2);
var G__158038 = cljs.core.first(seq158034__$3);
var seq158034__$4 = cljs.core.next(seq158034__$3);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__158035,G__158036,G__158037,G__158038,seq158034__$4);
}));

(com.wsscode.pathom3.entity_tree.vswap_entity_BANG_.cljs$lang$maxFixedArity = (4));

/**
 * Specialized merge versions that work on entity data.
 */
com.wsscode.pathom3.entity_tree.merge_entity_data = (function com$wsscode$pathom3$entity_tree$merge_entity_data(entity,new_data){
return cljs.core.reduce_kv(cljs.core.assoc,entity,new_data);
});

//# sourceMappingURL=com.wsscode.pathom3.entity_tree.js.map
