goog.provide('com.wsscode.pathom3.entity_tree');
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom3.entity-tree","entity-tree","com.wsscode.pathom3.entity-tree/entity-tree",-1151887464),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),cljs.core.map_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom3.entity-tree","entity-tree*","com.wsscode.pathom3.entity-tree/entity-tree*",1259415691),new cljs.core.Symbol("com.wsscode.misc.refs","atom?","com.wsscode.misc.refs/atom?",-53238677,null),com.wsscode.misc.refs.atom_QMARK_);
/**
 * Returns the entity tree value from env
 */
com.wsscode.pathom3.entity_tree.entity = (function com$wsscode$pathom3$entity_tree$entity(p__82056){
var map__82057 = p__82056;
var map__82057__$1 = cljs.core.__destructure_map(map__82057);
var entity_tree_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82057__$1,new cljs.core.Keyword("com.wsscode.pathom3.entity-tree","entity-tree*","com.wsscode.pathom3.entity-tree/entity-tree*",1259415691));
var G__82058 = entity_tree_STAR_;
if((G__82058 == null)){
return null;
} else {
return cljs.core.deref(G__82058);
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
com.wsscode.pathom3.entity_tree.reset_entity_BANG_ = (function com$wsscode$pathom3$entity_tree$reset_entity_BANG_(p__82062,entity_tree){
var map__82063 = p__82062;
var map__82063__$1 = cljs.core.__destructure_map(map__82063);
var entity_tree_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82063__$1,new cljs.core.Keyword("com.wsscode.pathom3.entity-tree","entity-tree*","com.wsscode.pathom3.entity-tree/entity-tree*",1259415691));
return cljs.core.reset_BANG_(entity_tree_STAR_,entity_tree);
});
/**
 * Swap cache-tree at the current path. Returns the updated whole cache-tree.
 */
com.wsscode.pathom3.entity_tree.swap_entity_BANG_ = (function com$wsscode$pathom3$entity_tree$swap_entity_BANG_(var_args){
var G__82073 = arguments.length;
switch (G__82073) {
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
var len__4829__auto___82109 = arguments.length;
var i__4830__auto___82110 = (0);
while(true){
if((i__4830__auto___82110 < len__4829__auto___82109)){
args_arr__4850__auto__.push((arguments[i__4830__auto___82110]));

var G__82111 = (i__4830__auto___82110 + (1));
i__4830__auto___82110 = G__82111;
continue;
} else {
}
break;
}

var argseq__4851__auto__ = (new cljs.core.IndexedSeq(args_arr__4850__auto__.slice((4)),(0),null));
return com.wsscode.pathom3.entity_tree.swap_entity_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4851__auto__);

}
});

(com.wsscode.pathom3.entity_tree.swap_entity_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (p__82074,f){
var map__82076 = p__82074;
var map__82076__$1 = cljs.core.__destructure_map(map__82076);
var entity_tree_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82076__$1,new cljs.core.Keyword("com.wsscode.pathom3.entity-tree","entity-tree*","com.wsscode.pathom3.entity-tree/entity-tree*",1259415691));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(entity_tree_STAR_,f);
}));

(com.wsscode.pathom3.entity_tree.swap_entity_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (p__82079,f,x){
var map__82080 = p__82079;
var map__82080__$1 = cljs.core.__destructure_map(map__82080);
var entity_tree_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82080__$1,new cljs.core.Keyword("com.wsscode.pathom3.entity-tree","entity-tree*","com.wsscode.pathom3.entity-tree/entity-tree*",1259415691));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(entity_tree_STAR_,f,x);
}));

(com.wsscode.pathom3.entity_tree.swap_entity_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (p__82081,f,x,y){
var map__82082 = p__82081;
var map__82082__$1 = cljs.core.__destructure_map(map__82082);
var entity_tree_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82082__$1,new cljs.core.Keyword("com.wsscode.pathom3.entity-tree","entity-tree*","com.wsscode.pathom3.entity-tree/entity-tree*",1259415691));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(entity_tree_STAR_,f,x,y);
}));

(com.wsscode.pathom3.entity_tree.swap_entity_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__82083,f,x,y,args){
var map__82084 = p__82083;
var map__82084__$1 = cljs.core.__destructure_map(map__82084);
var entity_tree_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82084__$1,new cljs.core.Keyword("com.wsscode.pathom3.entity-tree","entity-tree*","com.wsscode.pathom3.entity-tree/entity-tree*",1259415691));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(cljs.core.swap_BANG_,entity_tree_STAR_,f,x,y,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([args], 0));
}));

/** @this {Function} */
(com.wsscode.pathom3.entity_tree.swap_entity_BANG_.cljs$lang$applyTo = (function (seq82067){
var G__82069 = cljs.core.first(seq82067);
var seq82067__$1 = cljs.core.next(seq82067);
var G__82070 = cljs.core.first(seq82067__$1);
var seq82067__$2 = cljs.core.next(seq82067__$1);
var G__82071 = cljs.core.first(seq82067__$2);
var seq82067__$3 = cljs.core.next(seq82067__$2);
var G__82072 = cljs.core.first(seq82067__$3);
var seq82067__$4 = cljs.core.next(seq82067__$3);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__82069,G__82070,G__82071,G__82072,seq82067__$4);
}));

(com.wsscode.pathom3.entity_tree.swap_entity_BANG_.cljs$lang$maxFixedArity = (4));

/**
 * Swap cache-tree at the current path. Returns the updated whole cache-tree.
 */
com.wsscode.pathom3.entity_tree.vswap_entity_BANG_ = (function com$wsscode$pathom3$entity_tree$vswap_entity_BANG_(var_args){
var G__82092 = arguments.length;
switch (G__82092) {
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
var len__4829__auto___82115 = arguments.length;
var i__4830__auto___82116 = (0);
while(true){
if((i__4830__auto___82116 < len__4829__auto___82115)){
args_arr__4850__auto__.push((arguments[i__4830__auto___82116]));

var G__82117 = (i__4830__auto___82116 + (1));
i__4830__auto___82116 = G__82117;
continue;
} else {
}
break;
}

var argseq__4851__auto__ = (new cljs.core.IndexedSeq(args_arr__4850__auto__.slice((4)),(0),null));
return com.wsscode.pathom3.entity_tree.vswap_entity_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4851__auto__);

}
});

(com.wsscode.pathom3.entity_tree.vswap_entity_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (p__82093,f){
var map__82094 = p__82093;
var map__82094__$1 = cljs.core.__destructure_map(map__82094);
var entity_tree_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82094__$1,new cljs.core.Keyword("com.wsscode.pathom3.entity-tree","entity-tree*","com.wsscode.pathom3.entity-tree/entity-tree*",1259415691));
return cljs.core._vreset_BANG_(entity_tree_STAR_,(function (){var G__82095 = cljs.core._deref(entity_tree_STAR_);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__82095) : f.call(null,G__82095));
})());
}));

(com.wsscode.pathom3.entity_tree.vswap_entity_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (p__82096,f,x){
var map__82097 = p__82096;
var map__82097__$1 = cljs.core.__destructure_map(map__82097);
var entity_tree_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82097__$1,new cljs.core.Keyword("com.wsscode.pathom3.entity-tree","entity-tree*","com.wsscode.pathom3.entity-tree/entity-tree*",1259415691));
return cljs.core._vreset_BANG_(entity_tree_STAR_,(function (){var G__82098 = cljs.core._deref(entity_tree_STAR_);
var G__82099 = x;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__82098,G__82099) : f.call(null,G__82098,G__82099));
})());
}));

(com.wsscode.pathom3.entity_tree.vswap_entity_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (p__82100,f,x,y){
var map__82101 = p__82100;
var map__82101__$1 = cljs.core.__destructure_map(map__82101);
var entity_tree_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82101__$1,new cljs.core.Keyword("com.wsscode.pathom3.entity-tree","entity-tree*","com.wsscode.pathom3.entity-tree/entity-tree*",1259415691));
return cljs.core._vreset_BANG_(entity_tree_STAR_,(function (){var G__82102 = cljs.core._deref(entity_tree_STAR_);
var G__82103 = x;
var G__82104 = y;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__82102,G__82103,G__82104) : f.call(null,G__82102,G__82103,G__82104));
})());
}));

(com.wsscode.pathom3.entity_tree.vswap_entity_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__82105,f,x,y,args){
var map__82107 = p__82105;
var map__82107__$1 = cljs.core.__destructure_map(map__82107);
var entity_tree_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82107__$1,new cljs.core.Keyword("com.wsscode.pathom3.entity-tree","entity-tree*","com.wsscode.pathom3.entity-tree/entity-tree*",1259415691));
return cljs.core.vreset_BANG_(entity_tree_STAR_,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,cljs.core.deref(entity_tree_STAR_),x,y,args));
}));

/** @this {Function} */
(com.wsscode.pathom3.entity_tree.vswap_entity_BANG_.cljs$lang$applyTo = (function (seq82087){
var G__82088 = cljs.core.first(seq82087);
var seq82087__$1 = cljs.core.next(seq82087);
var G__82089 = cljs.core.first(seq82087__$1);
var seq82087__$2 = cljs.core.next(seq82087__$1);
var G__82090 = cljs.core.first(seq82087__$2);
var seq82087__$3 = cljs.core.next(seq82087__$2);
var G__82091 = cljs.core.first(seq82087__$3);
var seq82087__$4 = cljs.core.next(seq82087__$3);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__82088,G__82089,G__82090,G__82091,seq82087__$4);
}));

(com.wsscode.pathom3.entity_tree.vswap_entity_BANG_.cljs$lang$maxFixedArity = (4));

/**
 * Specialized merge versions that work on entity data.
 */
com.wsscode.pathom3.entity_tree.merge_entity_data = (function com$wsscode$pathom3$entity_tree$merge_entity_data(entity,new_data){
return cljs.core.reduce_kv(cljs.core.assoc,entity,new_data);
});

//# sourceMappingURL=com.wsscode.pathom3.entity_tree.js.map
