goog.provide('sci.impl.fns');
sci.impl.fns.throw_arity = (function sci$impl$fns$throw_arity(fn_name,macro_QMARK_,args){
throw (new Error((function (){var actual_count = (cljs.core.truth_(macro_QMARK_)?(cljs.core.count(args) - (2)):cljs.core.count(args));
return ["Cannot call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_name)," with ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(actual_count)," arguments"].join('');
})()));
});

/**
* @constructor
 * @implements {sci.impl.types.IBox}
*/
sci.impl.fns.Recur = (function (val){
this.val = val;
});
(sci.impl.fns.Recur.prototype.sci$impl$types$IBox$ = cljs.core.PROTOCOL_SENTINEL);

(sci.impl.fns.Recur.prototype.sci$impl$types$IBox$getVal$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.val;
}));

(sci.impl.fns.Recur.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"val","val",1769233139,null)], null);
}));

(sci.impl.fns.Recur.cljs$lang$type = true);

(sci.impl.fns.Recur.cljs$lang$ctorStr = "sci.impl.fns/Recur");

(sci.impl.fns.Recur.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"sci.impl.fns/Recur");
}));

/**
 * Positional factory function for sci.impl.fns/Recur.
 */
sci.impl.fns.__GT_Recur = (function sci$impl$fns$__GT_Recur(val){
return (new sci.impl.fns.Recur(val));
});

sci.impl.fns.parse_fn_args_PLUS_body = (function sci$impl$fns$parse_fn_args_PLUS_body(ctx,interpret,eval_do_STAR_,p__154309,fn_name,macro_QMARK_,with_meta_QMARK_){
var map__154310 = p__154309;
var map__154310__$1 = cljs.core.__destructure_map(map__154310);
var _m = map__154310__$1;
var fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__154310__$1,new cljs.core.Keyword("sci.impl","fixed-arity","sci.impl/fixed-arity",-1251617052));
var var_arg_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__154310__$1,new cljs.core.Keyword("sci.impl","var-arg-name","sci.impl/var-arg-name",1800498100));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__154310__$1,new cljs.core.Keyword("sci.impl","params","sci.impl/params",-175360738));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__154310__$1,new cljs.core.Keyword("sci.impl","body","sci.impl/body",-1493886648));
var min_var_args_arity = (cljs.core.truth_(var_arg_name)?fixed_arity:null);
var f = (function() { 
var sci$impl$fns$parse_fn_args_PLUS_body_$_run_fn__delegate = function (args){
while(true){
var bindings = new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(ctx);
var bindings__$1 = (function (){var args__$1 = cljs.core.seq(args);
var params__$1 = cljs.core.seq(params);
var ret = bindings;
while(true){
if(params__$1){
var fp = cljs.core.first(params__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"&","&",-2144855648,null),fp)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,cljs.core.second(params__$1),args__$1);
} else {
if(args__$1){
} else {
sci.impl.fns.throw_arity(fn_name,macro_QMARK_,args__$1);
}

var G__154343 = cljs.core.next(args__$1);
var G__154344 = cljs.core.next(params__$1);
var G__154345 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,fp,cljs.core.first(args__$1));
args__$1 = G__154343;
params__$1 = G__154344;
ret = G__154345;
continue;
}
} else {
if(args__$1){
sci.impl.fns.throw_arity(fn_name,macro_QMARK_,args__$1);
} else {
}

return ret;
}
break;
}
})();
var ctx__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings__$1);
var ret = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(body)))?(function (){var G__154311 = ctx__$1;
var G__154312 = cljs.core.first(body);
return (interpret.cljs$core$IFn$_invoke$arity$2 ? interpret.cljs$core$IFn$_invoke$arity$2(G__154311,G__154312) : interpret.call(null,G__154311,G__154312));
})():(eval_do_STAR_.cljs$core$IFn$_invoke$arity$2 ? eval_do_STAR_.cljs$core$IFn$_invoke$arity$2(ctx__$1,body) : eval_do_STAR_.call(null,ctx__$1,body)));
var recur_QMARK_ = (ret instanceof sci.impl.fns.Recur);
if(recur_QMARK_){
var recur_val = sci.impl.types.getVal(ret);
if(cljs.core.truth_(min_var_args_arity)){
var vec__154316 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(recur_val,(0),min_var_args_arity),cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(recur_val,min_var_args_arity)], null);
var fixed_args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__154316,(0),null);
var vec__154319 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__154316,(1),null);
var rest_args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__154319,(0),null);
var G__154350 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(fixed_args,rest_args);
args = G__154350;
continue;
} else {
var G__154351 = recur_val;
args = G__154351;
continue;
}
} else {
return ret;
}
break;
}
};
var sci$impl$fns$parse_fn_args_PLUS_body_$_run_fn = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__154352__i = 0, G__154352__a = new Array(arguments.length -  0);
while (G__154352__i < G__154352__a.length) {G__154352__a[G__154352__i] = arguments[G__154352__i + 0]; ++G__154352__i;}
  args = new cljs.core.IndexedSeq(G__154352__a,0,null);
} 
return sci$impl$fns$parse_fn_args_PLUS_body_$_run_fn__delegate.call(this,args);};
sci$impl$fns$parse_fn_args_PLUS_body_$_run_fn.cljs$lang$maxFixedArity = 0;
sci$impl$fns$parse_fn_args_PLUS_body_$_run_fn.cljs$lang$applyTo = (function (arglist__154353){
var args = cljs.core.seq(arglist__154353);
return sci$impl$fns$parse_fn_args_PLUS_body_$_run_fn__delegate(args);
});
sci$impl$fns$parse_fn_args_PLUS_body_$_run_fn.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$parse_fn_args_PLUS_body_$_run_fn__delegate;
return sci$impl$fns$parse_fn_args_PLUS_body_$_run_fn;
})()
;
if(cljs.core.truth_(with_meta_QMARK_)){
return cljs.core.with_meta(f,(cljs.core.truth_(min_var_args_arity)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("sci.impl","min-var-args-arity","sci.impl/min-var-args-arity",-1081358721),min_var_args_arity], null):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("sci.impl","fixed-arity","sci.impl/fixed-arity",-1251617052),fixed_arity], null)));
} else {
return f;
}
});
sci.impl.fns.lookup_by_arity = (function sci$impl$fns$lookup_by_arity(arities,arity){
return cljs.core.some((function (f){
var map__154324 = cljs.core.meta(f);
var map__154324__$1 = cljs.core.__destructure_map(map__154324);
var fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__154324__$1,new cljs.core.Keyword("sci.impl","fixed-arity","sci.impl/fixed-arity",-1251617052));
var min_var_args_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__154324__$1,new cljs.core.Keyword("sci.impl","min-var-args-arity","sci.impl/min-var-args-arity",-1081358721));
if(cljs.core.truth_((function (){var or__4223__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(arity,fixed_arity);
if(or__4223__auto__){
return or__4223__auto__;
} else {
var and__4221__auto__ = min_var_args_arity;
if(cljs.core.truth_(and__4221__auto__)){
return (arity >= min_var_args_arity);
} else {
return and__4221__auto__;
}
}
})())){
return f;
} else {
return null;
}
}),arities);
});
sci.impl.fns.eval_fn = (function sci$impl$fns$eval_fn(ctx,interpret,eval_do_STAR_,p__154334){
var map__154335 = p__154334;
var map__154335__$1 = cljs.core.__destructure_map(map__154335);
var f = map__154335__$1;
var fn_bodies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__154335__$1,new cljs.core.Keyword("sci.impl","fn-bodies","sci.impl/fn-bodies",134751661));
var fn_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__154335__$1,new cljs.core.Keyword("sci.impl","fn-name","sci.impl/fn-name",-1172300569));
var macro_QMARK_ = new cljs.core.Keyword("sci","macro","sci/macro",-868536151).cljs$core$IFn$_invoke$arity$1(f);
var self_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var call_self = (function() { 
var G__154356__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self_ref),args);
};
var G__154356 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__154357__i = 0, G__154357__a = new Array(arguments.length -  0);
while (G__154357__i < G__154357__a.length) {G__154357__a[G__154357__i] = arguments[G__154357__i + 0]; ++G__154357__i;}
  args = new cljs.core.IndexedSeq(G__154357__a,0,null);
} 
return G__154356__delegate.call(this,args);};
G__154356.cljs$lang$maxFixedArity = 0;
G__154356.cljs$lang$applyTo = (function (arglist__154358){
var args = cljs.core.seq(arglist__154358);
return G__154356__delegate(args);
});
G__154356.cljs$core$IFn$_invoke$arity$variadic = G__154356__delegate;
return G__154356;
})()
;
var ctx__$1 = (cljs.core.truth_(fn_name)?cljs.core.assoc_in(ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),fn_name], null),call_self):ctx);
var single_arity_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(fn_bodies));
var f__$1 = ((single_arity_QMARK_)?sci.impl.fns.parse_fn_args_PLUS_body(ctx__$1,interpret,eval_do_STAR_,cljs.core.first(fn_bodies),fn_name,macro_QMARK_,false):(function (){var arities = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__154331_SHARP_){
return sci.impl.fns.parse_fn_args_PLUS_body(ctx__$1,interpret,eval_do_STAR_,p1__154331_SHARP_,fn_name,macro_QMARK_,true);
}),fn_bodies);
return (function() { 
var G__154362__delegate = function (args){
var arg_count = cljs.core.count(args);
var temp__5751__auto__ = sci.impl.fns.lookup_by_arity(arities,arg_count);
if(cljs.core.truth_(temp__5751__auto__)){
var f__$1 = temp__5751__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f__$1,args);
} else {
throw (new Error((function (){var actual_count = (cljs.core.truth_(macro_QMARK_)?(arg_count - (2)):arg_count);
return ["Cannot call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_name)," with ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(actual_count)," arguments"].join('');
})()));
}
};
var G__154362 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__154365__i = 0, G__154365__a = new Array(arguments.length -  0);
while (G__154365__i < G__154365__a.length) {G__154365__a[G__154365__i] = arguments[G__154365__i + 0]; ++G__154365__i;}
  args = new cljs.core.IndexedSeq(G__154365__a,0,null);
} 
return G__154362__delegate.call(this,args);};
G__154362.cljs$lang$maxFixedArity = 0;
G__154362.cljs$lang$applyTo = (function (arglist__154366){
var args = cljs.core.seq(arglist__154366);
return G__154362__delegate(args);
});
G__154362.cljs$core$IFn$_invoke$arity$variadic = G__154362__delegate;
return G__154362;
})()
;
})());
var f__$2 = (cljs.core.truth_(macro_QMARK_)?cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$2(f__$1,(function (p1__154332_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__154332_SHARP_,new cljs.core.Keyword("sci","macro","sci/macro",-868536151),macro_QMARK_);
})):f__$1);
cljs.core.reset_BANG_(self_ref,f__$2);

return f__$2;
});

//# sourceMappingURL=sci.impl.fns.js.map
