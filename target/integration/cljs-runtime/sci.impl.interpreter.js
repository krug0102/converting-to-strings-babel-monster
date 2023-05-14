goog.provide('sci.impl.interpreter');

sci.impl.interpreter.macros = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 19, [new cljs.core.Symbol(null,"macroexpand","macroexpand",1509933344,null),"null",new cljs.core.Symbol(null,"try","try",-1273693247,null),"null",new cljs.core.Symbol(null,"lazy-seq","lazy-seq",489632906,null),"null",new cljs.core.Symbol(null,"let","let",358118826,null),"null",new cljs.core.Symbol(null,"fn","fn",465265323,null),"null",new cljs.core.Symbol(null,"do","do",1686842252,null),"null",new cljs.core.Symbol(null,"in-ns","in-ns",-2089468466,null),"null",new cljs.core.Symbol(null,"defn","defn",-126010802,null),"null",new cljs.core.Symbol(null,"if","if",1181717262,null),"null",new cljs.core.Symbol(null,"or","or",1876275696,null),"null",new cljs.core.Symbol(null,"macroexpand-1","macroexpand-1",659241329,null),"null",new cljs.core.Symbol(null,"require","require",1172530194,null),"null",new cljs.core.Symbol(null,"syntax-quote","syntax-quote",407366680,null),"null",new cljs.core.Symbol(null,"set!","set!",250714521,null),"null",new cljs.core.Symbol(null,".",".",1975675962,null),"null",new cljs.core.Symbol(null,"quote","quote",1377916282,null),"null",new cljs.core.Symbol(null,"case","case",-1510733573,null),"null",new cljs.core.Symbol(null,"and","and",668631710,null),"null",new cljs.core.Symbol(null,"def","def",597100991,null),"null"], null), null);
/**
 * The and macro from clojure.core.
 */
sci.impl.interpreter.eval_and = (function sci$impl$interpreter$eval_and(ctx,args){
var args__$1 = cljs.core.seq(args);
var args__$2 = args__$1;
while(true){
if(args__$2){
var x = cljs.core.first(args__$2);
var xs = cljs.core.next(args__$2);
var v = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,x) : sci.impl.interpreter.interpret.call(null,ctx,x));
if(cljs.core.truth_(v)){
if(xs){
var G__79336 = xs;
args__$2 = G__79336;
continue;
} else {
return v;
}
} else {
return v;
}
} else {
return true;
}
break;
}
});
/**
 * The or macro from clojure.core.
 */
sci.impl.interpreter.eval_or = (function sci$impl$interpreter$eval_or(ctx,args){
var args__$1 = cljs.core.seq(args);
var args__$2 = args__$1;
while(true){
if(args__$2){
var x = cljs.core.first(args__$2);
var xs = cljs.core.next(args__$2);
var v = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,x) : sci.impl.interpreter.interpret.call(null,ctx,x));
if(cljs.core.truth_(v)){
return v;
} else {
if(xs){
var G__79337 = xs;
args__$2 = G__79337;
continue;
} else {
return v;
}
}
} else {
return null;
}
break;
}
});
/**
 * The let macro from clojure.core
 */
sci.impl.interpreter.eval_let = (function sci$impl$interpreter$eval_let(var_args){
var args__4835__auto__ = [];
var len__4829__auto___79338 = arguments.length;
var i__4830__auto___79339 = (0);
while(true){
if((i__4830__auto___79339 < len__4829__auto___79338)){
args__4835__auto__.push((arguments[i__4830__auto___79339]));

var G__79340 = (i__4830__auto___79339 + (1));
i__4830__auto___79339 = G__79340;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((2) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((2)),(0),null)):null);
return sci.impl.interpreter.eval_let.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4836__auto__);
});

(sci.impl.interpreter.eval_let.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,let_bindings,exprs){
var ctx__$1 = (function (){var ctx__$1 = ctx;
var let_bindings__$1 = let_bindings;
while(true){
var let_name = cljs.core.first(let_bindings__$1);
var let_bindings__$2 = cljs.core.rest(let_bindings__$1);
var let_val = cljs.core.first(let_bindings__$2);
var rest_let_bindings = cljs.core.next(let_bindings__$2);
var val_tag = (function (){var temp__5753__auto__ = cljs.core.meta(let_val);
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
return new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(m);
} else {
return null;
}
})();
var let_name__$1 = (cljs.core.truth_(val_tag)?cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(let_name,cljs.core.update,new cljs.core.Keyword(null,"tag","tag",-1290361223),((function (ctx__$1,let_bindings__$1,let_name,let_bindings__$2,let_val,rest_let_bindings,val_tag){
return (function (t){
if(cljs.core.truth_(t)){
return t;
} else {
return val_tag;
}
});})(ctx__$1,let_bindings__$1,let_name,let_bindings__$2,let_val,rest_let_bindings,val_tag))
):let_name);
var v = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx__$1,let_val) : sci.impl.interpreter.interpret.call(null,ctx__$1,let_val));
var ctx__$2 = cljs.core.assoc_in(ctx__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),let_name__$1], null),v);
if(cljs.core.not(rest_let_bindings)){
return ctx__$2;
} else {
var G__79343 = ctx__$2;
var G__79344 = rest_let_bindings;
ctx__$1 = G__79343;
let_bindings__$1 = G__79344;
continue;
}
break;
}
})();
if(cljs.core.truth_(exprs)){
var exprs__$1 = exprs;
while(true){
var e = cljs.core.first(exprs__$1);
var ret = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx__$1,e) : sci.impl.interpreter.interpret.call(null,ctx__$1,e));
var nexprs = cljs.core.next(exprs__$1);
if(nexprs){
var G__79345 = nexprs;
exprs__$1 = G__79345;
continue;
} else {
return ret;
}
break;
}
} else {
return null;
}
}));

(sci.impl.interpreter.eval_let.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.interpreter.eval_let.cljs$lang$applyTo = (function (seq78464){
var G__78465 = cljs.core.first(seq78464);
var seq78464__$1 = cljs.core.next(seq78464);
var G__78466 = cljs.core.first(seq78464__$1);
var seq78464__$2 = cljs.core.next(seq78464__$1);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__78465,G__78466,seq78464__$2);
}));

sci.impl.interpreter.eval_if = (function sci$impl$interpreter$eval_if(ctx,expr){
var cond = cljs.core.first(expr);
var expr__$1 = cljs.core.rest(expr);
var then = cljs.core.first(expr__$1);
var expr__$2 = cljs.core.rest(expr__$1);
var else$ = cljs.core.first(expr__$2);
if(cljs.core.truth_((sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,cond) : sci.impl.interpreter.interpret.call(null,ctx,cond)))){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,then) : sci.impl.interpreter.interpret.call(null,ctx,then));
} else {
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,else$) : sci.impl.interpreter.interpret.call(null,ctx,else$));
}
});
sci.impl.interpreter.eval_def = (function sci$impl$interpreter$eval_def(ctx,p__78476){
var vec__78477 = p__78476;
var _def = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78477,(0),null);
var var_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78477,(1),null);
var _QMARK_docstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78477,(2),null);
var _QMARK_init = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78477,(3),null);
var docstring = (cljs.core.truth_(_QMARK_init)?_QMARK_docstring:null);
var init = (cljs.core.truth_(docstring)?_QMARK_init:_QMARK_docstring);
var init__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,init) : sci.impl.interpreter.interpret.call(null,ctx,init));
var m = cljs.core.meta(var_name);
var m__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,m) : sci.impl.interpreter.interpret.call(null,ctx,m));
var cnn = sci.impl.vars.getName(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m__$1));
var assoc_in_env = (function (env){
var the_current_ns = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn], null));
var prev = cljs.core.get.cljs$core$IFn$_invoke$arity$2(the_current_ns,var_name);
var prev__$1 = (((!(sci.impl.vars.var_QMARK_(prev))))?sci.impl.vars.__GT_SciVar(prev,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cnn),cljs.core.str.cljs$core$IFn$_invoke$arity$1(var_name)),cljs.core.meta(prev),false):prev);
var v = (cljs.core.truth_((sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("sci.impl","var.unbound","sci.impl/var.unbound",-1824207647),init__$1) : sci.impl.utils.kw_identical_QMARK_.call(null,new cljs.core.Keyword("sci.impl","var.unbound","sci.impl/var.unbound",-1824207647),init__$1)))?(function (){var G__78480 = prev__$1;
cljs.core.alter_meta_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__78480,cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m__$1], 0));

return G__78480;
})():(function (){
sci.impl.vars.bindRoot(prev__$1,init__$1);

cljs.core.alter_meta_BANG_.cljs$core$IFn$_invoke$arity$variadic(prev__$1,cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m__$1], 0));

return prev__$1;
})()
);
var the_current_ns__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(the_current_ns,var_name,v);
return cljs.core.assoc_in(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn], null),the_current_ns__$1);
});
var env = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),assoc_in_env);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn,var_name], null));
});
sci.impl.interpreter.resolve_symbol = (function sci$impl$interpreter$resolve_symbol(ctx,sym){
var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var temp__5751__auto__ = cljs.core.find(bindings,sym);
if(cljs.core.truth_(temp__5751__auto__)){
var v = temp__5751__auto__;
return cljs.core.second(v);
} else {
return sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2(["Could not resolve symbol: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym),"\nks:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.keys(new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(ctx)))].join(''),sym);
}
});
sci.impl.interpreter.parse_libspec = (function sci$impl$interpreter$parse_libspec(libspec){
if(cljs.core.sequential_QMARK_(libspec)){
var vec__78481 = libspec;
var seq__78482 = cljs.core.seq(vec__78481);
var first__78483 = cljs.core.first(seq__78482);
var seq__78482__$1 = cljs.core.next(seq__78482);
var lib_name = first__78483;
var opts = seq__78482__$1;
var ret = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lib-name","lib-name",1158024282),lib_name], null);
var G__78487 = opts;
var vec__78488 = G__78487;
var seq__78489 = cljs.core.seq(vec__78488);
var first__78490 = cljs.core.first(seq__78489);
var seq__78489__$1 = cljs.core.next(seq__78489);
var opt_name = first__78490;
var first__78490__$1 = cljs.core.first(seq__78489__$1);
var seq__78489__$2 = cljs.core.next(seq__78489__$1);
var fst_opt = first__78490__$1;
var rst_opts = seq__78489__$2;
var ret__$1 = ret;
var G__78487__$1 = G__78487;
while(true){
var ret__$2 = ret__$1;
var vec__78500 = G__78487__$1;
var seq__78501 = cljs.core.seq(vec__78500);
var first__78502 = cljs.core.first(seq__78501);
var seq__78501__$1 = cljs.core.next(seq__78501);
var opt_name__$1 = first__78502;
var first__78502__$1 = cljs.core.first(seq__78501__$1);
var seq__78501__$2 = cljs.core.next(seq__78501__$1);
var fst_opt__$1 = first__78502__$1;
var rst_opts__$1 = seq__78501__$2;
if(cljs.core.not(opt_name__$1)){
return ret__$2;
} else {
var G__78504 = opt_name__$1;
var G__78504__$1 = (((G__78504 instanceof cljs.core.Keyword))?G__78504.fqn:null);
switch (G__78504__$1) {
case "as":
var G__79355 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$2,new cljs.core.Keyword(null,"as","as",1148689641),fst_opt__$1);
var G__79356 = rst_opts__$1;
ret__$1 = G__79355;
G__78487__$1 = G__79356;
continue;

break;
case "reload":
case "reload-all":
case "verbose":
var G__79357 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$2,new cljs.core.Keyword(null,"reload","reload",863702807),true);
var G__79358 = cljs.core.cons(fst_opt__$1,rst_opts__$1);
ret__$1 = G__79357;
G__78487__$1 = G__79358;
continue;

break;
case "refer":
case "rename":
case "exclude":
case "only":
var G__79359 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$2,opt_name__$1,fst_opt__$1);
var G__79360 = rst_opts__$1;
ret__$1 = G__79359;
G__78487__$1 = G__79360;
continue;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__78504__$1)].join('')));

}
}
break;
}
} else {
if((libspec instanceof cljs.core.Symbol)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lib-name","lib-name",1158024282),libspec], null);
} else {
throw (new Error(["Invalid libspec: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(libspec)].join('')));

}
}
});
sci.impl.interpreter.handle_refer_all = (function sci$impl$interpreter$handle_refer_all(the_current_ns,the_loaded_ns,include_sym_QMARK_,rename_sym,only){
var only__$1 = (cljs.core.truth_(only)?cljs.core.set(only):null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ns,p__78515){
var vec__78519 = p__78515;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78519,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78519,(1),null);
if(cljs.core.truth_((function (){var and__4221__auto__ = (k instanceof cljs.core.Symbol);
if(and__4221__auto__){
var and__4221__auto____$1 = (include_sym_QMARK_.cljs$core$IFn$_invoke$arity$1 ? include_sym_QMARK_.cljs$core$IFn$_invoke$arity$1(k) : include_sym_QMARK_.call(null,k));
if(cljs.core.truth_(and__4221__auto____$1)){
return ((cljs.core.not(only__$1)) || (cljs.core.contains_QMARK_(only__$1,k)));
} else {
return and__4221__auto____$1;
}
} else {
return and__4221__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ns,(rename_sym.cljs$core$IFn$_invoke$arity$1 ? rename_sym.cljs$core$IFn$_invoke$arity$1(k) : rename_sym.call(null,k)),v);
} else {
return ns;
}
}),the_current_ns,the_loaded_ns);
});
sci.impl.interpreter.handle_require_libspec_env = (function sci$impl$interpreter$handle_require_libspec_env(ctx,env,use_QMARK_,current_ns,the_loaded_ns,lib_name,p__78527){
var map__78529 = p__78527;
var map__78529__$1 = cljs.core.__destructure_map(map__78529);
var _parsed_libspec = map__78529__$1;
var as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78529__$1,new cljs.core.Keyword(null,"as","as",1148689641));
var refer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78529__$1,new cljs.core.Keyword(null,"refer","refer",-964295553));
var rename = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78529__$1,new cljs.core.Keyword(null,"rename","rename",1508157613));
var exclude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78529__$1,new cljs.core.Keyword(null,"exclude","exclude",-1230250334));
var only = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78529__$1,new cljs.core.Keyword(null,"only","only",1907811652));
var the_current_ns = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),current_ns], null));
var the_current_ns__$1 = (cljs.core.truth_(as)?cljs.core.assoc_in(the_current_ns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aliases","aliases",1346874714),as], null),lib_name):the_current_ns);
var rename_sym = (cljs.core.truth_(rename)?(function (sym){
var or__4223__auto__ = (rename.cljs$core$IFn$_invoke$arity$1 ? rename.cljs$core$IFn$_invoke$arity$1(sym) : rename.call(null,sym));
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return sym;
}
}):cljs.core.identity);
var include_sym_QMARK_ = (cljs.core.truth_(exclude)?(function (){var excludes = cljs.core.set(exclude);
return (function (sym){
return (!(cljs.core.contains_QMARK_(excludes,sym)));
});
})():cljs.core.constantly(true));
var the_current_ns__$2 = (cljs.core.truth_(refer)?(cljs.core.truth_((function (){var or__4223__auto__ = (sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"all","all",892129742),refer) : sci.impl.utils.kw_identical_QMARK_.call(null,new cljs.core.Keyword(null,"all","all",892129742),refer));
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return use_QMARK_;
}
})())?sci.impl.interpreter.handle_refer_all(the_current_ns__$1,the_loaded_ns,include_sym_QMARK_,rename_sym,null):((cljs.core.sequential_QMARK_(refer))?cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ns,sym){
if(cljs.core.truth_(include_sym_QMARK_(sym))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ns,(rename_sym.cljs$core$IFn$_invoke$arity$1 ? rename_sym.cljs$core$IFn$_invoke$arity$1(sym) : rename_sym.call(null,sym)),(function (){var temp__5751__auto__ = cljs.core.find(the_loaded_ns,sym);
if(cljs.core.truth_(temp__5751__auto__)){
var vec__78536 = temp__5751__auto__;
var _k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78536,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78536,(1),null);
return v;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"uberscript","uberscript",701571092).cljs$core$IFn$_invoke$arity$1(ctx))){
return null;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)," does not exist"].join('')));
}
}
})());
} else {
return ns;
}
}),the_current_ns__$1,refer):(function(){throw (new Error(":refer value must be a sequential collection of symbols"))})()
)):(cljs.core.truth_(use_QMARK_)?sci.impl.interpreter.handle_refer_all(the_current_ns__$1,the_loaded_ns,include_sym_QMARK_,rename_sym,only):the_current_ns__$1
));
var env__$1 = cljs.core.assoc_in(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),current_ns], null),the_current_ns__$2);
return env__$1;
});
sci.impl.interpreter.handle_require_libspec = (function sci$impl$interpreter$handle_require_libspec(ctx,libspec){
var map__78539 = sci.impl.interpreter.parse_libspec(libspec);
var map__78539__$1 = cljs.core.__destructure_map(map__78539);
var parsed_libspec = map__78539__$1;
var lib_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78539__$1,new cljs.core.Keyword(null,"lib-name","lib-name",1158024282));
var reload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78539__$1,new cljs.core.Keyword(null,"reload","reload",863702807));
var env_STAR_ = new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx);
var env = cljs.core.deref(env_STAR_);
var cnn = sci.impl.vars.current_ns_name();
var namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469));
var use_QMARK_ = new cljs.core.Keyword("sci.impl","use","sci.impl/use",1724565881).cljs$core$IFn$_invoke$arity$1(ctx);
var uberscript = new cljs.core.Keyword(null,"uberscript","uberscript",701571092).cljs$core$IFn$_invoke$arity$1(ctx);
var reload_STAR_ = (function (){var or__4223__auto__ = reload;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return uberscript;
}
})();
var temp__5751__auto__ = (cljs.core.truth_(reload_STAR_)?null:cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces,lib_name));
if(cljs.core.truth_(temp__5751__auto__)){
var the_loaded_ns = temp__5751__auto__;
return cljs.core.reset_BANG_(env_STAR_,sci.impl.interpreter.handle_require_libspec_env(ctx,env,use_QMARK_,cnn,the_loaded_ns,lib_name,parsed_libspec));
} else {
var temp__5751__auto____$1 = new cljs.core.Keyword(null,"load-fn","load-fn",-2121144334).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_(temp__5751__auto____$1)){
var load_fn = temp__5751__auto____$1;
var temp__5751__auto____$2 = (function (){var G__78540 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),lib_name,new cljs.core.Keyword(null,"reload","reload",863702807),reload], null);
return (load_fn.cljs$core$IFn$_invoke$arity$1 ? load_fn.cljs$core$IFn$_invoke$arity$1(G__78540) : load_fn.call(null,G__78540));
})();
if(cljs.core.truth_(temp__5751__auto____$2)){
var map__78541 = temp__5751__auto____$2;
var map__78541__$1 = cljs.core.__destructure_map(map__78541);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78541__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78541__$1,new cljs.core.Keyword(null,"source","source",-433931539));
try{sci.impl.vars.push_thread_bindings(cljs.core.PersistentArrayMap.createAsIfByAssoc([sci.impl.vars.current_ns,cljs.core.deref(sci.impl.vars.current_ns),sci.impl.vars.current_file,file]));

try{var G__78543_79367 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),cljs.core.PersistentArrayMap.EMPTY);
var G__78544_79368 = source;
(sci.impl.interpreter.eval_string_STAR_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.eval_string_STAR_.cljs$core$IFn$_invoke$arity$2(G__78543_79367,G__78544_79368) : sci.impl.interpreter.eval_string_STAR_.call(null,G__78543_79367,G__78544_79368));
}finally {sci.impl.vars.pop_thread_bindings();
}}catch (e78542){if((e78542 instanceof Error)){
var e_79370 = e78542;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(env_STAR_,cljs.core.update,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lib_name], 0));

throw e_79370;
} else {
throw e78542;

}
}
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(env_STAR_,(function (env__$1){
var namespaces__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env__$1,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469));
var the_loaded_ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces__$1,lib_name);
return sci.impl.interpreter.handle_require_libspec_env(ctx,env__$1,use_QMARK_,cnn,the_loaded_ns,lib_name,parsed_libspec);
}));
} else {
var or__4223__auto__ = (cljs.core.truth_(reload_STAR_)?(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces,lib_name);
if(cljs.core.truth_(temp__5753__auto__)){
var the_loaded_ns = temp__5753__auto__;
return cljs.core.reset_BANG_(env_STAR_,sci.impl.interpreter.handle_require_libspec_env(ctx,env,use_QMARK_,cnn,the_loaded_ns,lib_name,parsed_libspec));
} else {
return null;
}
})():null);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
throw (new Error(["Could not require ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib_name),"."].join('')));
}
}
} else {
throw (new Error(["Could not require ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib_name),"."].join('')));
}
}
});
sci.impl.interpreter.eval_require = (function sci$impl$interpreter$eval_require(var_args){
var args__4835__auto__ = [];
var len__4829__auto___79379 = arguments.length;
var i__4830__auto___79380 = (0);
while(true){
if((i__4830__auto___79380 < len__4829__auto___79379)){
args__4835__auto__.push((arguments[i__4830__auto___79380]));

var G__79381 = (i__4830__auto___79380 + (1));
i__4830__auto___79380 = G__79381;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return sci.impl.interpreter.eval_require.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(sci.impl.interpreter.eval_require.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,args){
var libspecs = cljs.core.PersistentVector.EMPTY;
var current_libspec = null;
var args__$1 = args;
while(true){
if(cljs.core.truth_(args__$1)){
var ret = (function (){var G__78559 = ctx;
var G__78560 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78559,G__78560) : sci.impl.interpreter.interpret.call(null,G__78559,G__78560));
})();
if((ret instanceof cljs.core.Symbol)){
var G__79382 = (function (){var G__78565 = libspecs;
if(cljs.core.truth_(current_libspec)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__78565,current_libspec);
} else {
return G__78565;
}
})();
var G__79383 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ret], null);
var G__79384 = cljs.core.next(args__$1);
libspecs = G__79382;
current_libspec = G__79383;
args__$1 = G__79384;
continue;
} else {
if((ret instanceof cljs.core.Keyword)){
var G__79385 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(libspecs,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current_libspec,ret));
var G__79386 = null;
var G__79387 = cljs.core.next(args__$1);
libspecs = G__79385;
current_libspec = G__79386;
args__$1 = G__79387;
continue;
} else {
var G__79388 = (function (){var G__78566 = libspecs;
if(cljs.core.truth_(current_libspec)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__78566,current_libspec);
} else {
return G__78566;
}
})();
var G__79389 = ret;
var G__79390 = cljs.core.next(args__$1);
libspecs = G__79388;
current_libspec = G__79389;
args__$1 = G__79390;
continue;

}
}
} else {
var libspecs__$1 = (function (){var G__78567 = libspecs;
if(cljs.core.truth_(current_libspec)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__78567,current_libspec);
} else {
return G__78567;
}
})();
return cljs.core.run_BANG_(((function (libspecs,current_libspec,args__$1,libspecs__$1){
return (function (p1__78549_SHARP_){
return sci.impl.interpreter.handle_require_libspec(ctx,p1__78549_SHARP_);
});})(libspecs,current_libspec,args__$1,libspecs__$1))
,libspecs__$1);
}
break;
}
}));

(sci.impl.interpreter.eval_require.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sci.impl.interpreter.eval_require.cljs$lang$applyTo = (function (seq78550){
var G__78551 = cljs.core.first(seq78550);
var seq78550__$1 = cljs.core.next(seq78550);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__78551,seq78550__$1);
}));

cljs.core.vreset_BANG_(sci.impl.utils.eval_require_state,sci.impl.interpreter.eval_require);
sci.impl.interpreter.eval_use = (function sci$impl$interpreter$eval_use(var_args){
var args__4835__auto__ = [];
var len__4829__auto___79392 = arguments.length;
var i__4830__auto___79393 = (0);
while(true){
if((i__4830__auto___79393 < len__4829__auto___79392)){
args__4835__auto__.push((arguments[i__4830__auto___79393]));

var G__79394 = (i__4830__auto___79393 + (1));
i__4830__auto___79393 = G__79394;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return sci.impl.interpreter.eval_use.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(sci.impl.interpreter.eval_use.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_require,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword("sci.impl","use","sci.impl/use",1724565881),true),args);
}));

(sci.impl.interpreter.eval_use.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sci.impl.interpreter.eval_use.cljs$lang$applyTo = (function (seq78568){
var G__78569 = cljs.core.first(seq78568);
var seq78568__$1 = cljs.core.next(seq78568);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__78569,seq78568__$1);
}));

cljs.core.vreset_BANG_(sci.impl.utils.eval_use_state,sci.impl.interpreter.eval_use);
sci.impl.interpreter.eval_case = (function sci$impl$interpreter$eval_case(ctx,p__78570){
var vec__78571 = p__78570;
var _case = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78571,(0),null);
var map__78574 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78571,(1),null);
var map__78574__$1 = cljs.core.__destructure_map(map__78574);
var case_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78574__$1,new cljs.core.Keyword(null,"case-map","case-map",955082964));
var case_val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78574__$1,new cljs.core.Keyword(null,"case-val","case-val",880926521));
var case_default = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78574__$1,new cljs.core.Keyword(null,"case-default","case-default",1140470708));
var v = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,case_val) : sci.impl.interpreter.interpret.call(null,ctx,case_val));
var temp__5751__auto__ = cljs.core.find(case_map,v);
if(cljs.core.truth_(temp__5751__auto__)){
var vec__78575 = temp__5751__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78575,(0),null);
var found = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78575,(1),null);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,found) : sci.impl.interpreter.interpret.call(null,ctx,found));
} else {
if(cljs.core.vector_QMARK_(case_default)){
var G__78578 = ctx;
var G__78579 = cljs.core.second(case_default);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78578,G__78579) : sci.impl.interpreter.interpret.call(null,G__78578,G__78579));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('')));
}
}
});
sci.impl.interpreter.eval_try = (function sci$impl$interpreter$eval_try(ctx,expr){
var map__78584 = new cljs.core.Keyword("sci.impl","try","sci.impl/try",2142624741).cljs$core$IFn$_invoke$arity$1(expr);
var map__78584__$1 = cljs.core.__destructure_map(map__78584);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78584__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var catches = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78584__$1,new cljs.core.Keyword(null,"catches","catches",-1478797617));
var finally$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78584__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
try{var _STAR_in_try_STAR__orig_val__78591 = sci.impl.utils._STAR_in_try_STAR_;
var _STAR_in_try_STAR__temp_val__78592 = true;
(sci.impl.utils._STAR_in_try_STAR_ = _STAR_in_try_STAR__temp_val__78592);

try{return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,body) : sci.impl.interpreter.interpret.call(null,ctx,body));
}finally {(sci.impl.utils._STAR_in_try_STAR_ = _STAR_in_try_STAR__orig_val__78591);
}}catch (e78585){if((e78585 instanceof Error)){
var e = e78585;
var temp__5751__auto__ = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (_,c){
var clazz = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(c);
if((e instanceof clazz)){
return cljs.core.reduced(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sci.impl.interpreter","try-result","sci.impl.interpreter/try-result",1789456125),(function (){var G__78586 = cljs.core.assoc_in(ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),new cljs.core.Keyword(null,"binding","binding",539932593).cljs$core$IFn$_invoke$arity$1(c)], null),e);
var G__78587 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(c);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78586,G__78587) : sci.impl.interpreter.interpret.call(null,G__78586,G__78587));
})()], null));
} else {
return null;
}
}),null,catches);
if(cljs.core.truth_(temp__5751__auto__)){
var vec__78588 = temp__5751__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78588,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78588,(1),null);
return r;
} else {
return sci.impl.utils.rethrow_with_location_of_node(ctx,e,body);
}
} else {
throw e78585;

}
}finally {(sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,finally$) : sci.impl.interpreter.interpret.call(null,ctx,finally$));
}});
sci.impl.interpreter.eval_throw = (function sci$impl$interpreter$eval_throw(ctx,p__78594){
var vec__78595 = p__78594;
var _throw = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78595,(0),null);
var ex = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78595,(1),null);
var ex__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,ex) : sci.impl.interpreter.interpret.call(null,ctx,ex));
throw ex__$1;
});
sci.impl.interpreter.eval_static_method_invocation = (function sci$impl$interpreter$eval_static_method_invocation(ctx,expr){
return sci.impl.interop.invoke_static_method(cljs.core.first(expr),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__78599_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__78599_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__78599_SHARP_));
}),cljs.core.rest(expr)));
});
sci.impl.interpreter.eval_constructor_invocation = (function sci$impl$interpreter$eval_constructor_invocation(ctx,p__78603){
var vec__78604 = p__78603;
var _new = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78604,(0),null);
var constructor$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78604,(1),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78604,(2),null);
var args__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__78602_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__78602_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__78602_SHARP_));
}),args);
return sci.impl.interop.invoke_constructor(constructor$,args__$1);
});
sci.impl.interpreter.eval_instance_method_invocation = (function sci$impl$interpreter$eval_instance_method_invocation(p__78612,p__78613){
var map__78614 = p__78612;
var map__78614__$1 = cljs.core.__destructure_map(map__78614);
var ctx = map__78614__$1;
var class__GT_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78614__$1,new cljs.core.Keyword(null,"class->opts","class->opts",2061906477));
var vec__78615 = p__78613;
var _dot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78615,(0),null);
var instance_expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78615,(1),null);
var method_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78615,(2),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78615,(3),null);
var _expr = vec__78615;
var instance_meta = cljs.core.meta(instance_expr);
var tag_class = new cljs.core.Keyword(null,"tag-class","tag-class",714967874).cljs$core$IFn$_invoke$arity$1(instance_meta);
var instance_expr_STAR_ = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,instance_expr) : sci.impl.interpreter.interpret.call(null,ctx,instance_expr));
if(cljs.core.map_QMARK_(instance_expr_STAR_)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(instance_expr_STAR_,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(method_str,(1))));
} else {
var instance_class = (function (){var or__4223__auto__ = tag_class;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.type(instance_expr_STAR_);
}
})();
var instance_class_name = instance_class.name;
var instance_class_symbol = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(instance_class_name);
var allowed_QMARK_ = (function (){var or__4223__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(class__GT_opts,new cljs.core.Keyword(null,"allow","allow",-1857325745));
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(class__GT_opts,instance_class_symbol);
}
})();
var target_class = (cljs.core.truth_(allowed_QMARK_)?instance_class:(function (){var temp__5753__auto__ = new cljs.core.Keyword(null,"public-class","public-class",1127293019).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5753__auto__)){
var f = temp__5753__auto__;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(instance_expr_STAR_) : f.call(null,instance_expr_STAR_));
} else {
return null;
}
})());
if(cljs.core.truth_(target_class)){
} else {
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2(["Method ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(method_str)," on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(instance_class)," not allowed!"].join(''),instance_expr);
}

var args__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__78611_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__78611_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__78611_SHARP_));
}),args);
return sci.impl.interop.invoke_instance_method(instance_expr_STAR_,target_class,method_str,args__$1);
}
});
sci.impl.interpreter.eval_in_ns = (function sci$impl$interpreter$eval_in_ns(ctx,p__78618){
var vec__78620 = p__78618;
var _in_ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78620,(0),null);
var ns_expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78620,(1),null);
var ns_sym = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,ns_expr) : sci.impl.interpreter.interpret.call(null,ctx,ns_expr));
sci.impl.utils.set_namespace_BANG_(ctx,ns_sym,null);

return null;
});
sci.impl.interpreter.eval_refer = (function sci$impl$interpreter$eval_refer(var_args){
var args__4835__auto__ = [];
var len__4829__auto___79408 = arguments.length;
var i__4830__auto___79409 = (0);
while(true){
if((i__4830__auto___79409 < len__4829__auto___79408)){
args__4835__auto__.push((arguments[i__4830__auto___79409]));

var G__79410 = (i__4830__auto___79409 + (1));
i__4830__auto___79409 = G__79410;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((2) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((2)),(0),null)):null);
return sci.impl.interpreter.eval_refer.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4836__auto__);
});

(sci.impl.interpreter.eval_refer.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,ns_sym,exprs){
var ns_sym__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,ns_sym) : sci.impl.interpreter.interpret.call(null,ctx,ns_sym));
var exprs__$1 = exprs;
while(true){
if(cljs.core.truth_(exprs__$1)){
var vec__78641 = exprs__$1;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78641,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78641,(1),null);
var G__78644_79413 = k;
var G__78644_79414__$1 = (((G__78644_79413 instanceof cljs.core.Keyword))?G__78644_79413.fqn:null);
switch (G__78644_79414__$1) {
case "exclude":
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),((function (exprs__$1,G__78644_79413,G__78644_79414__$1,vec__78641,k,v,ns_sym__$1){
return (function (env){
var cnn = sci.impl.vars.current_ns_name();
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn,new cljs.core.Keyword(null,"refer","refer",-964295553),ns_sym__$1,new cljs.core.Keyword(null,"exclude","exclude",-1230250334)], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.into,cljs.core.PersistentHashSet.EMPTY),v);
});})(exprs__$1,G__78644_79413,G__78644_79414__$1,vec__78641,k,v,ns_sym__$1))
);

break;
case "only":
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),((function (exprs__$1,G__78644_79413,G__78644_79414__$1,vec__78641,k,v,ns_sym__$1){
return (function (env){
var cnn = sci.impl.vars.current_ns_name();
var other_ns = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),ns_sym__$1], null));
var other_vars = cljs.core.select_keys(other_ns,v);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn], null),cljs.core.merge,other_vars);
});})(exprs__$1,G__78644_79413,G__78644_79414__$1,vec__78641,k,v,ns_sym__$1))
);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__78644_79414__$1)].join('')));

}

var G__79417 = cljs.core.nnext(exprs__$1);
exprs__$1 = G__79417;
continue;
} else {
return null;
}
break;
}
}));

(sci.impl.interpreter.eval_refer.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.interpreter.eval_refer.cljs$lang$applyTo = (function (seq78629){
var G__78630 = cljs.core.first(seq78629);
var seq78629__$1 = cljs.core.next(seq78629);
var G__78631 = cljs.core.first(seq78629__$1);
var seq78629__$2 = cljs.core.next(seq78629__$1);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__78630,G__78631,seq78629__$2);
}));

cljs.core.vreset_BANG_(sci.impl.utils.eval_refer_state,sci.impl.interpreter.eval_refer);
sci.impl.interpreter.eval_resolve = (function sci$impl$interpreter$eval_resolve(ctx,sym){
var sym__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,sym) : sci.impl.interpreter.interpret.call(null,ctx,sym));
return cljs.core.second(sci.impl.analyzer.lookup(ctx,sym__$1,false));
});
cljs.core.vreset_BANG_(sci.impl.utils.eval_resolve_state,sci.impl.interpreter.eval_resolve);
sci.impl.interpreter.macroexpand_1 = (function sci$impl$interpreter$macroexpand_1(ctx,expr){
var original_expr = expr;
if(cljs.core.seq_QMARK_(expr)){
var op = cljs.core.first(expr);
if((op instanceof cljs.core.Symbol)){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(sci.impl.analyzer.special_syms,op))){
return expr;
} else {
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"for","for",316745208,null),null], null), null),op)){
return sci.impl.analyzer.analyze(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword("sci.impl","macroexpanding","sci.impl/macroexpanding",2113471825),true),expr);
} else {
var f = sci.impl.analyzer.resolve_symbol.cljs$core$IFn$_invoke$arity$3(ctx,op,true);
var f__$1 = (cljs.core.truth_((function (){var and__4221__auto__ = sci.impl.vars.var_QMARK_(f);
if(and__4221__auto__){
return sci.impl.vars.isMacro(f);
} else {
return and__4221__auto__;
}
})())?cljs.core.deref(f):f);
if(cljs.core.truth_(sci.impl.analyzer.macro_QMARK_(f__$1))){
var f__$2 = (cljs.core.truth_((function (){var G__78675 = new cljs.core.Keyword(null,"needs-ctx","needs-ctx",-35514403);
var G__78676 = (function (){var G__78677 = f__$1;
var G__78677__$1 = (((G__78677 == null))?null:cljs.core.meta(G__78677));
if((G__78677__$1 == null)){
return null;
} else {
return new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978).cljs$core$IFn$_invoke$arity$1(G__78677__$1);
}
})();
return (sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__78675,G__78676) : sci.impl.utils.kw_identical_QMARK_.call(null,G__78675,G__78676));
})())?cljs.core.partial.cljs$core$IFn$_invoke$arity$2(f__$1,ctx):f__$1);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(f__$2,original_expr,new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(ctx),cljs.core.rest(expr));
} else {
return expr;
}

}
}
} else {
return expr;
}
} else {
return expr;
}
});
sci.impl.interpreter.macroexpand = (function sci$impl$interpreter$macroexpand(ctx,form){
var ex = sci.impl.interpreter.macroexpand_1(ctx,form);
if((ex === form)){
return form;
} else {
return (sci.impl.interpreter.macroexpand.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.macroexpand.cljs$core$IFn$_invoke$arity$2(ctx,ex) : sci.impl.interpreter.macroexpand.call(null,ctx,ex));
}
});
sci.impl.interpreter.eval_import = (function sci$impl$interpreter$eval_import(var_args){
var args__4835__auto__ = [];
var len__4829__auto___79424 = arguments.length;
var i__4830__auto___79425 = (0);
while(true){
if((i__4830__auto___79425 < len__4829__auto___79424)){
args__4835__auto__.push((arguments[i__4830__auto___79425]));

var G__79427 = (i__4830__auto___79425 + (1));
i__4830__auto___79425 = G__79427;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return sci.impl.interpreter.eval_import.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(sci.impl.interpreter.eval_import.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,import_symbols_or_lists){
var specs = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__78679_SHARP_){
if(((cljs.core.seq_QMARK_(p1__78679_SHARP_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(p1__78679_SHARP_))))){
return cljs.core.second(p1__78679_SHARP_);
} else {
return p1__78679_SHARP_;
}
}),import_symbols_or_lists);
var env = new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx);
return cljs.core.run_BANG_((function (spec){
var vec__78683 = (((spec instanceof cljs.core.Symbol))?(function (){var s = cljs.core.str.cljs$core$IFn$_invoke$arity$1(spec);
var last_dot = clojure.string.last_index_of.cljs$core$IFn$_invoke$arity$2(s,".");
var package_PLUS_class_name = (cljs.core.truth_(last_dot)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),last_dot)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(last_dot + (1)),((s).length)))], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec], null)], null));
return package_PLUS_class_name;
})():(function (){var p = cljs.core.first(spec);
var cs = cljs.core.rest(spec);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cs], null);
})());
var package$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78683,(0),null);
var classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78683,(1),null);
var seq__78686 = cljs.core.seq(classes);
var chunk__78687 = null;
var count__78688 = (0);
var i__78689 = (0);
while(true){
if((i__78689 < count__78688)){
var class$ = chunk__78687.cljs$core$IIndexed$_nth$arity$2(null,i__78689);
var fq_class_name_79432 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(package$)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(package$),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''):class$));
if(cljs.core.truth_(sci.impl.interop.resolve_class(ctx,fq_class_name_79432))){
var cnn_79433 = sci.impl.vars.current_ns_name();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(env,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn_79433,new cljs.core.Keyword(null,"imports","imports",-1249933394),class$], null),fq_class_name_79432);
} else {
var temp__5751__auto___79435 = sci.impl.records.resolve_record_class.cljs$core$IFn$_invoke$arity$3(ctx,package$,class$);
if(cljs.core.truth_(temp__5751__auto___79435)){
var rec_79436 = temp__5751__auto___79435;
var cnn_79437 = sci.impl.vars.current_ns_name();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(env,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn_79437,class$], null),rec_79436);
} else {
throw (new Error(["Unable to resolve classname: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fq_class_name_79432)].join('')));
}
}


var G__79438 = seq__78686;
var G__79439 = chunk__78687;
var G__79440 = count__78688;
var G__79441 = (i__78689 + (1));
seq__78686 = G__79438;
chunk__78687 = G__79439;
count__78688 = G__79440;
i__78689 = G__79441;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__78686);
if(temp__5753__auto__){
var seq__78686__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__78686__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__78686__$1);
var G__79443 = cljs.core.chunk_rest(seq__78686__$1);
var G__79444 = c__4649__auto__;
var G__79445 = cljs.core.count(c__4649__auto__);
var G__79446 = (0);
seq__78686 = G__79443;
chunk__78687 = G__79444;
count__78688 = G__79445;
i__78689 = G__79446;
continue;
} else {
var class$ = cljs.core.first(seq__78686__$1);
var fq_class_name_79447 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(package$)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(package$),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''):class$));
if(cljs.core.truth_(sci.impl.interop.resolve_class(ctx,fq_class_name_79447))){
var cnn_79448 = sci.impl.vars.current_ns_name();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(env,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn_79448,new cljs.core.Keyword(null,"imports","imports",-1249933394),class$], null),fq_class_name_79447);
} else {
var temp__5751__auto___79449 = sci.impl.records.resolve_record_class.cljs$core$IFn$_invoke$arity$3(ctx,package$,class$);
if(cljs.core.truth_(temp__5751__auto___79449)){
var rec_79450 = temp__5751__auto___79449;
var cnn_79451 = sci.impl.vars.current_ns_name();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(env,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn_79451,class$], null),rec_79450);
} else {
throw (new Error(["Unable to resolve classname: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fq_class_name_79447)].join('')));
}
}


var G__79454 = cljs.core.next(seq__78686__$1);
var G__79455 = null;
var G__79456 = (0);
var G__79457 = (0);
seq__78686 = G__79454;
chunk__78687 = G__79455;
count__78688 = G__79456;
i__78689 = G__79457;
continue;
}
} else {
return null;
}
}
break;
}
}),specs);
}));

(sci.impl.interpreter.eval_import.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sci.impl.interpreter.eval_import.cljs$lang$applyTo = (function (seq78680){
var G__78681 = cljs.core.first(seq78680);
var seq78680__$1 = cljs.core.next(seq78680);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__78681,seq78680__$1);
}));

sci.impl.interpreter.eval_set_BANG_ = (function sci$impl$interpreter$eval_set_BANG_(ctx,p__78696){
var vec__78697 = p__78696;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78697,(0),null);
var obj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78697,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78697,(2),null);
var obj__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,obj) : sci.impl.interpreter.interpret.call(null,ctx,obj));
var v__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,v) : sci.impl.interpreter.interpret.call(null,ctx,v));
if(sci.impl.vars.var_QMARK_(obj__$1)){
return sci.impl.types.setVal(obj__$1,v__$1);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Cannot set ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(obj__$1)," to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v__$1)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"obj","obj",981763962),obj__$1,new cljs.core.Keyword(null,"v","v",21465059),v__$1], null));
}
});
sci.impl.interpreter.eval_do_STAR_ = (function sci$impl$interpreter$eval_do_STAR_(ctx,exprs){
var G__78703 = exprs;
var vec__78704 = G__78703;
var seq__78705 = cljs.core.seq(vec__78704);
var first__78706 = cljs.core.first(seq__78705);
var seq__78705__$1 = cljs.core.next(seq__78705);
var expr = first__78706;
var exprs__$1 = seq__78705__$1;
var G__78703__$1 = G__78703;
while(true){
var vec__78707 = G__78703__$1;
var seq__78708 = cljs.core.seq(vec__78707);
var first__78709 = cljs.core.first(seq__78708);
var seq__78708__$1 = cljs.core.next(seq__78708);
var expr__$1 = first__78709;
var exprs__$2 = seq__78708__$1;
var ret = (function (){try{return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,expr__$1) : sci.impl.interpreter.interpret.call(null,ctx,expr__$1));
}catch (e78710){if((e78710 instanceof Error)){
var e = e78710;
return sci.impl.utils.rethrow_with_location_of_node(ctx,e,expr__$1);
} else {
throw e78710;

}
}})();
var temp__5751__auto__ = cljs.core.seq(exprs__$2);
if(temp__5751__auto__){
var exprs__$3 = temp__5751__auto__;
var G__79465 = exprs__$3;
G__78703__$1 = G__79465;
continue;
} else {
return ret;
}
break;
}
});
sci.impl.interpreter.eval_do = (function sci$impl$interpreter$eval_do(ctx,expr){
var temp__5753__auto__ = cljs.core.next(expr);
if(temp__5753__auto__){
var exprs = temp__5753__auto__;
return sci.impl.interpreter.eval_do_STAR_(ctx,exprs);
} else {
return null;
}
});
sci.impl.interpreter.fn_call = (function sci$impl$interpreter$fn_call(ctx,f,args){
var G__78903 = cljs.core.count(args);
switch (G__78903) {
case (0):
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

break;
case (1):
var arg78713 = (function (){var G__78904 = ctx;
var G__78905 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78904,G__78905) : sci.impl.interpreter.interpret.call(null,G__78904,G__78905));
})();
var args__$1 = cljs.core.rest(args);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(arg78713) : f.call(null,arg78713));

break;
case (2):
var arg78714 = (function (){var G__78906 = ctx;
var G__78907 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78906,G__78907) : sci.impl.interpreter.interpret.call(null,G__78906,G__78907));
})();
var args__$1 = cljs.core.rest(args);
var arg78715 = (function (){var G__78908 = ctx;
var G__78909 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78908,G__78909) : sci.impl.interpreter.interpret.call(null,G__78908,G__78909));
})();
var args__$2 = cljs.core.rest(args__$1);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(arg78714,arg78715) : f.call(null,arg78714,arg78715));

break;
case (3):
var arg78716 = (function (){var G__78910 = ctx;
var G__78911 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78910,G__78911) : sci.impl.interpreter.interpret.call(null,G__78910,G__78911));
})();
var args__$1 = cljs.core.rest(args);
var arg78717 = (function (){var G__78912 = ctx;
var G__78913 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78912,G__78913) : sci.impl.interpreter.interpret.call(null,G__78912,G__78913));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg78718 = (function (){var G__78914 = ctx;
var G__78915 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78914,G__78915) : sci.impl.interpreter.interpret.call(null,G__78914,G__78915));
})();
var args__$3 = cljs.core.rest(args__$2);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(arg78716,arg78717,arg78718) : f.call(null,arg78716,arg78717,arg78718));

break;
case (4):
var arg78719 = (function (){var G__78916 = ctx;
var G__78917 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78916,G__78917) : sci.impl.interpreter.interpret.call(null,G__78916,G__78917));
})();
var args__$1 = cljs.core.rest(args);
var arg78720 = (function (){var G__78918 = ctx;
var G__78919 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78918,G__78919) : sci.impl.interpreter.interpret.call(null,G__78918,G__78919));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg78721 = (function (){var G__78920 = ctx;
var G__78921 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78920,G__78921) : sci.impl.interpreter.interpret.call(null,G__78920,G__78921));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg78722 = (function (){var G__78922 = ctx;
var G__78923 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78922,G__78923) : sci.impl.interpreter.interpret.call(null,G__78922,G__78923));
})();
var args__$4 = cljs.core.rest(args__$3);
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(arg78719,arg78720,arg78721,arg78722) : f.call(null,arg78719,arg78720,arg78721,arg78722));

break;
case (5):
var arg78723 = (function (){var G__78924 = ctx;
var G__78925 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78924,G__78925) : sci.impl.interpreter.interpret.call(null,G__78924,G__78925));
})();
var args__$1 = cljs.core.rest(args);
var arg78724 = (function (){var G__78926 = ctx;
var G__78927 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78926,G__78927) : sci.impl.interpreter.interpret.call(null,G__78926,G__78927));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg78725 = (function (){var G__78928 = ctx;
var G__78929 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78928,G__78929) : sci.impl.interpreter.interpret.call(null,G__78928,G__78929));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg78726 = (function (){var G__78930 = ctx;
var G__78931 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78930,G__78931) : sci.impl.interpreter.interpret.call(null,G__78930,G__78931));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg78727 = (function (){var G__78932 = ctx;
var G__78933 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78932,G__78933) : sci.impl.interpreter.interpret.call(null,G__78932,G__78933));
})();
var args__$5 = cljs.core.rest(args__$4);
return (f.cljs$core$IFn$_invoke$arity$5 ? f.cljs$core$IFn$_invoke$arity$5(arg78723,arg78724,arg78725,arg78726,arg78727) : f.call(null,arg78723,arg78724,arg78725,arg78726,arg78727));

break;
case (6):
var arg78728 = (function (){var G__78934 = ctx;
var G__78935 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78934,G__78935) : sci.impl.interpreter.interpret.call(null,G__78934,G__78935));
})();
var args__$1 = cljs.core.rest(args);
var arg78729 = (function (){var G__78936 = ctx;
var G__78937 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78936,G__78937) : sci.impl.interpreter.interpret.call(null,G__78936,G__78937));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg78730 = (function (){var G__78938 = ctx;
var G__78939 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78938,G__78939) : sci.impl.interpreter.interpret.call(null,G__78938,G__78939));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg78731 = (function (){var G__78940 = ctx;
var G__78941 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78940,G__78941) : sci.impl.interpreter.interpret.call(null,G__78940,G__78941));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg78732 = (function (){var G__78942 = ctx;
var G__78943 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78942,G__78943) : sci.impl.interpreter.interpret.call(null,G__78942,G__78943));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg78733 = (function (){var G__78944 = ctx;
var G__78945 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78944,G__78945) : sci.impl.interpreter.interpret.call(null,G__78944,G__78945));
})();
var args__$6 = cljs.core.rest(args__$5);
return (f.cljs$core$IFn$_invoke$arity$6 ? f.cljs$core$IFn$_invoke$arity$6(arg78728,arg78729,arg78730,arg78731,arg78732,arg78733) : f.call(null,arg78728,arg78729,arg78730,arg78731,arg78732,arg78733));

break;
case (7):
var arg78734 = (function (){var G__78946 = ctx;
var G__78947 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78946,G__78947) : sci.impl.interpreter.interpret.call(null,G__78946,G__78947));
})();
var args__$1 = cljs.core.rest(args);
var arg78735 = (function (){var G__78948 = ctx;
var G__78949 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78948,G__78949) : sci.impl.interpreter.interpret.call(null,G__78948,G__78949));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg78736 = (function (){var G__78950 = ctx;
var G__78951 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78950,G__78951) : sci.impl.interpreter.interpret.call(null,G__78950,G__78951));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg78737 = (function (){var G__78952 = ctx;
var G__78953 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78952,G__78953) : sci.impl.interpreter.interpret.call(null,G__78952,G__78953));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg78738 = (function (){var G__78954 = ctx;
var G__78955 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78954,G__78955) : sci.impl.interpreter.interpret.call(null,G__78954,G__78955));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg78739 = (function (){var G__78956 = ctx;
var G__78957 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78956,G__78957) : sci.impl.interpreter.interpret.call(null,G__78956,G__78957));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg78740 = (function (){var G__78958 = ctx;
var G__78959 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78958,G__78959) : sci.impl.interpreter.interpret.call(null,G__78958,G__78959));
})();
var args__$7 = cljs.core.rest(args__$6);
return (f.cljs$core$IFn$_invoke$arity$7 ? f.cljs$core$IFn$_invoke$arity$7(arg78734,arg78735,arg78736,arg78737,arg78738,arg78739,arg78740) : f.call(null,arg78734,arg78735,arg78736,arg78737,arg78738,arg78739,arg78740));

break;
case (8):
var arg78741 = (function (){var G__78960 = ctx;
var G__78961 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78960,G__78961) : sci.impl.interpreter.interpret.call(null,G__78960,G__78961));
})();
var args__$1 = cljs.core.rest(args);
var arg78742 = (function (){var G__78962 = ctx;
var G__78963 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78962,G__78963) : sci.impl.interpreter.interpret.call(null,G__78962,G__78963));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg78743 = (function (){var G__78964 = ctx;
var G__78965 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78964,G__78965) : sci.impl.interpreter.interpret.call(null,G__78964,G__78965));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg78744 = (function (){var G__78966 = ctx;
var G__78967 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78966,G__78967) : sci.impl.interpreter.interpret.call(null,G__78966,G__78967));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg78745 = (function (){var G__78968 = ctx;
var G__78969 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78968,G__78969) : sci.impl.interpreter.interpret.call(null,G__78968,G__78969));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg78746 = (function (){var G__78970 = ctx;
var G__78971 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78970,G__78971) : sci.impl.interpreter.interpret.call(null,G__78970,G__78971));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg78747 = (function (){var G__78972 = ctx;
var G__78973 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78972,G__78973) : sci.impl.interpreter.interpret.call(null,G__78972,G__78973));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg78748 = (function (){var G__78974 = ctx;
var G__78975 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78974,G__78975) : sci.impl.interpreter.interpret.call(null,G__78974,G__78975));
})();
var args__$8 = cljs.core.rest(args__$7);
return (f.cljs$core$IFn$_invoke$arity$8 ? f.cljs$core$IFn$_invoke$arity$8(arg78741,arg78742,arg78743,arg78744,arg78745,arg78746,arg78747,arg78748) : f.call(null,arg78741,arg78742,arg78743,arg78744,arg78745,arg78746,arg78747,arg78748));

break;
case (9):
var arg78749 = (function (){var G__78976 = ctx;
var G__78977 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78976,G__78977) : sci.impl.interpreter.interpret.call(null,G__78976,G__78977));
})();
var args__$1 = cljs.core.rest(args);
var arg78750 = (function (){var G__78978 = ctx;
var G__78979 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78978,G__78979) : sci.impl.interpreter.interpret.call(null,G__78978,G__78979));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg78751 = (function (){var G__78980 = ctx;
var G__78981 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78980,G__78981) : sci.impl.interpreter.interpret.call(null,G__78980,G__78981));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg78752 = (function (){var G__78982 = ctx;
var G__78983 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78982,G__78983) : sci.impl.interpreter.interpret.call(null,G__78982,G__78983));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg78753 = (function (){var G__78984 = ctx;
var G__78985 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78984,G__78985) : sci.impl.interpreter.interpret.call(null,G__78984,G__78985));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg78754 = (function (){var G__78986 = ctx;
var G__78987 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78986,G__78987) : sci.impl.interpreter.interpret.call(null,G__78986,G__78987));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg78755 = (function (){var G__78988 = ctx;
var G__78989 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78988,G__78989) : sci.impl.interpreter.interpret.call(null,G__78988,G__78989));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg78756 = (function (){var G__78990 = ctx;
var G__78991 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78990,G__78991) : sci.impl.interpreter.interpret.call(null,G__78990,G__78991));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg78757 = (function (){var G__78992 = ctx;
var G__78993 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78992,G__78993) : sci.impl.interpreter.interpret.call(null,G__78992,G__78993));
})();
var args__$9 = cljs.core.rest(args__$8);
return (f.cljs$core$IFn$_invoke$arity$9 ? f.cljs$core$IFn$_invoke$arity$9(arg78749,arg78750,arg78751,arg78752,arg78753,arg78754,arg78755,arg78756,arg78757) : f.call(null,arg78749,arg78750,arg78751,arg78752,arg78753,arg78754,arg78755,arg78756,arg78757));

break;
case (10):
var arg78758 = (function (){var G__78994 = ctx;
var G__78995 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78994,G__78995) : sci.impl.interpreter.interpret.call(null,G__78994,G__78995));
})();
var args__$1 = cljs.core.rest(args);
var arg78759 = (function (){var G__78996 = ctx;
var G__78997 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78996,G__78997) : sci.impl.interpreter.interpret.call(null,G__78996,G__78997));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg78760 = (function (){var G__78998 = ctx;
var G__78999 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__78998,G__78999) : sci.impl.interpreter.interpret.call(null,G__78998,G__78999));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg78761 = (function (){var G__79000 = ctx;
var G__79001 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79000,G__79001) : sci.impl.interpreter.interpret.call(null,G__79000,G__79001));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg78762 = (function (){var G__79002 = ctx;
var G__79003 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79002,G__79003) : sci.impl.interpreter.interpret.call(null,G__79002,G__79003));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg78763 = (function (){var G__79004 = ctx;
var G__79005 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79004,G__79005) : sci.impl.interpreter.interpret.call(null,G__79004,G__79005));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg78764 = (function (){var G__79006 = ctx;
var G__79007 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79006,G__79007) : sci.impl.interpreter.interpret.call(null,G__79006,G__79007));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg78765 = (function (){var G__79008 = ctx;
var G__79009 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79008,G__79009) : sci.impl.interpreter.interpret.call(null,G__79008,G__79009));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg78766 = (function (){var G__79010 = ctx;
var G__79011 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79010,G__79011) : sci.impl.interpreter.interpret.call(null,G__79010,G__79011));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg78767 = (function (){var G__79012 = ctx;
var G__79013 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79012,G__79013) : sci.impl.interpreter.interpret.call(null,G__79012,G__79013));
})();
var args__$10 = cljs.core.rest(args__$9);
return (f.cljs$core$IFn$_invoke$arity$10 ? f.cljs$core$IFn$_invoke$arity$10(arg78758,arg78759,arg78760,arg78761,arg78762,arg78763,arg78764,arg78765,arg78766,arg78767) : f.call(null,arg78758,arg78759,arg78760,arg78761,arg78762,arg78763,arg78764,arg78765,arg78766,arg78767));

break;
case (11):
var arg78768 = (function (){var G__79014 = ctx;
var G__79015 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79014,G__79015) : sci.impl.interpreter.interpret.call(null,G__79014,G__79015));
})();
var args__$1 = cljs.core.rest(args);
var arg78769 = (function (){var G__79016 = ctx;
var G__79017 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79016,G__79017) : sci.impl.interpreter.interpret.call(null,G__79016,G__79017));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg78770 = (function (){var G__79018 = ctx;
var G__79019 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79018,G__79019) : sci.impl.interpreter.interpret.call(null,G__79018,G__79019));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg78771 = (function (){var G__79020 = ctx;
var G__79021 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79020,G__79021) : sci.impl.interpreter.interpret.call(null,G__79020,G__79021));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg78772 = (function (){var G__79022 = ctx;
var G__79023 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79022,G__79023) : sci.impl.interpreter.interpret.call(null,G__79022,G__79023));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg78773 = (function (){var G__79027 = ctx;
var G__79028 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79027,G__79028) : sci.impl.interpreter.interpret.call(null,G__79027,G__79028));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg78774 = (function (){var G__79029 = ctx;
var G__79030 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79029,G__79030) : sci.impl.interpreter.interpret.call(null,G__79029,G__79030));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg78775 = (function (){var G__79032 = ctx;
var G__79033 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79032,G__79033) : sci.impl.interpreter.interpret.call(null,G__79032,G__79033));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg78776 = (function (){var G__79034 = ctx;
var G__79035 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79034,G__79035) : sci.impl.interpreter.interpret.call(null,G__79034,G__79035));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg78777 = (function (){var G__79036 = ctx;
var G__79037 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79036,G__79037) : sci.impl.interpreter.interpret.call(null,G__79036,G__79037));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg78778 = (function (){var G__79038 = ctx;
var G__79039 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79038,G__79039) : sci.impl.interpreter.interpret.call(null,G__79038,G__79039));
})();
var args__$11 = cljs.core.rest(args__$10);
return (f.cljs$core$IFn$_invoke$arity$11 ? f.cljs$core$IFn$_invoke$arity$11(arg78768,arg78769,arg78770,arg78771,arg78772,arg78773,arg78774,arg78775,arg78776,arg78777,arg78778) : f.call(null,arg78768,arg78769,arg78770,arg78771,arg78772,arg78773,arg78774,arg78775,arg78776,arg78777,arg78778));

break;
case (12):
var arg78779 = (function (){var G__79041 = ctx;
var G__79042 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79041,G__79042) : sci.impl.interpreter.interpret.call(null,G__79041,G__79042));
})();
var args__$1 = cljs.core.rest(args);
var arg78780 = (function (){var G__79043 = ctx;
var G__79044 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79043,G__79044) : sci.impl.interpreter.interpret.call(null,G__79043,G__79044));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg78781 = (function (){var G__79045 = ctx;
var G__79046 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79045,G__79046) : sci.impl.interpreter.interpret.call(null,G__79045,G__79046));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg78782 = (function (){var G__79047 = ctx;
var G__79048 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79047,G__79048) : sci.impl.interpreter.interpret.call(null,G__79047,G__79048));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg78783 = (function (){var G__79049 = ctx;
var G__79050 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79049,G__79050) : sci.impl.interpreter.interpret.call(null,G__79049,G__79050));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg78784 = (function (){var G__79051 = ctx;
var G__79052 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79051,G__79052) : sci.impl.interpreter.interpret.call(null,G__79051,G__79052));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg78785 = (function (){var G__79053 = ctx;
var G__79054 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79053,G__79054) : sci.impl.interpreter.interpret.call(null,G__79053,G__79054));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg78786 = (function (){var G__79055 = ctx;
var G__79056 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79055,G__79056) : sci.impl.interpreter.interpret.call(null,G__79055,G__79056));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg78787 = (function (){var G__79057 = ctx;
var G__79058 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79057,G__79058) : sci.impl.interpreter.interpret.call(null,G__79057,G__79058));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg78788 = (function (){var G__79059 = ctx;
var G__79060 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79059,G__79060) : sci.impl.interpreter.interpret.call(null,G__79059,G__79060));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg78789 = (function (){var G__79061 = ctx;
var G__79062 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79061,G__79062) : sci.impl.interpreter.interpret.call(null,G__79061,G__79062));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg78790 = (function (){var G__79063 = ctx;
var G__79064 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79063,G__79064) : sci.impl.interpreter.interpret.call(null,G__79063,G__79064));
})();
var args__$12 = cljs.core.rest(args__$11);
return (f.cljs$core$IFn$_invoke$arity$12 ? f.cljs$core$IFn$_invoke$arity$12(arg78779,arg78780,arg78781,arg78782,arg78783,arg78784,arg78785,arg78786,arg78787,arg78788,arg78789,arg78790) : f.call(null,arg78779,arg78780,arg78781,arg78782,arg78783,arg78784,arg78785,arg78786,arg78787,arg78788,arg78789,arg78790));

break;
case (13):
var arg78791 = (function (){var G__79065 = ctx;
var G__79066 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79065,G__79066) : sci.impl.interpreter.interpret.call(null,G__79065,G__79066));
})();
var args__$1 = cljs.core.rest(args);
var arg78792 = (function (){var G__79067 = ctx;
var G__79068 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79067,G__79068) : sci.impl.interpreter.interpret.call(null,G__79067,G__79068));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg78793 = (function (){var G__79070 = ctx;
var G__79071 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79070,G__79071) : sci.impl.interpreter.interpret.call(null,G__79070,G__79071));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg78794 = (function (){var G__79072 = ctx;
var G__79073 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79072,G__79073) : sci.impl.interpreter.interpret.call(null,G__79072,G__79073));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg78795 = (function (){var G__79074 = ctx;
var G__79075 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79074,G__79075) : sci.impl.interpreter.interpret.call(null,G__79074,G__79075));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg78796 = (function (){var G__79076 = ctx;
var G__79077 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79076,G__79077) : sci.impl.interpreter.interpret.call(null,G__79076,G__79077));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg78797 = (function (){var G__79078 = ctx;
var G__79079 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79078,G__79079) : sci.impl.interpreter.interpret.call(null,G__79078,G__79079));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg78798 = (function (){var G__79080 = ctx;
var G__79081 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79080,G__79081) : sci.impl.interpreter.interpret.call(null,G__79080,G__79081));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg78799 = (function (){var G__79082 = ctx;
var G__79083 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79082,G__79083) : sci.impl.interpreter.interpret.call(null,G__79082,G__79083));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg78800 = (function (){var G__79084 = ctx;
var G__79085 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79084,G__79085) : sci.impl.interpreter.interpret.call(null,G__79084,G__79085));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg78801 = (function (){var G__79086 = ctx;
var G__79087 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79086,G__79087) : sci.impl.interpreter.interpret.call(null,G__79086,G__79087));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg78802 = (function (){var G__79088 = ctx;
var G__79089 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79088,G__79089) : sci.impl.interpreter.interpret.call(null,G__79088,G__79089));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg78803 = (function (){var G__79090 = ctx;
var G__79091 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79090,G__79091) : sci.impl.interpreter.interpret.call(null,G__79090,G__79091));
})();
var args__$13 = cljs.core.rest(args__$12);
return (f.cljs$core$IFn$_invoke$arity$13 ? f.cljs$core$IFn$_invoke$arity$13(arg78791,arg78792,arg78793,arg78794,arg78795,arg78796,arg78797,arg78798,arg78799,arg78800,arg78801,arg78802,arg78803) : f.call(null,arg78791,arg78792,arg78793,arg78794,arg78795,arg78796,arg78797,arg78798,arg78799,arg78800,arg78801,arg78802,arg78803));

break;
case (14):
var arg78804 = (function (){var G__79092 = ctx;
var G__79093 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79092,G__79093) : sci.impl.interpreter.interpret.call(null,G__79092,G__79093));
})();
var args__$1 = cljs.core.rest(args);
var arg78805 = (function (){var G__79094 = ctx;
var G__79095 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79094,G__79095) : sci.impl.interpreter.interpret.call(null,G__79094,G__79095));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg78806 = (function (){var G__79096 = ctx;
var G__79097 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79096,G__79097) : sci.impl.interpreter.interpret.call(null,G__79096,G__79097));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg78807 = (function (){var G__79101 = ctx;
var G__79102 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79101,G__79102) : sci.impl.interpreter.interpret.call(null,G__79101,G__79102));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg78808 = (function (){var G__79103 = ctx;
var G__79104 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79103,G__79104) : sci.impl.interpreter.interpret.call(null,G__79103,G__79104));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg78809 = (function (){var G__79106 = ctx;
var G__79107 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79106,G__79107) : sci.impl.interpreter.interpret.call(null,G__79106,G__79107));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg78810 = (function (){var G__79108 = ctx;
var G__79109 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79108,G__79109) : sci.impl.interpreter.interpret.call(null,G__79108,G__79109));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg78811 = (function (){var G__79110 = ctx;
var G__79111 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79110,G__79111) : sci.impl.interpreter.interpret.call(null,G__79110,G__79111));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg78812 = (function (){var G__79112 = ctx;
var G__79113 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79112,G__79113) : sci.impl.interpreter.interpret.call(null,G__79112,G__79113));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg78813 = (function (){var G__79114 = ctx;
var G__79115 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79114,G__79115) : sci.impl.interpreter.interpret.call(null,G__79114,G__79115));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg78814 = (function (){var G__79116 = ctx;
var G__79117 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79116,G__79117) : sci.impl.interpreter.interpret.call(null,G__79116,G__79117));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg78815 = (function (){var G__79118 = ctx;
var G__79119 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79118,G__79119) : sci.impl.interpreter.interpret.call(null,G__79118,G__79119));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg78816 = (function (){var G__79120 = ctx;
var G__79121 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79120,G__79121) : sci.impl.interpreter.interpret.call(null,G__79120,G__79121));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg78817 = (function (){var G__79122 = ctx;
var G__79123 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79122,G__79123) : sci.impl.interpreter.interpret.call(null,G__79122,G__79123));
})();
var args__$14 = cljs.core.rest(args__$13);
return (f.cljs$core$IFn$_invoke$arity$14 ? f.cljs$core$IFn$_invoke$arity$14(arg78804,arg78805,arg78806,arg78807,arg78808,arg78809,arg78810,arg78811,arg78812,arg78813,arg78814,arg78815,arg78816,arg78817) : f.call(null,arg78804,arg78805,arg78806,arg78807,arg78808,arg78809,arg78810,arg78811,arg78812,arg78813,arg78814,arg78815,arg78816,arg78817));

break;
case (15):
var arg78818 = (function (){var G__79124 = ctx;
var G__79125 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79124,G__79125) : sci.impl.interpreter.interpret.call(null,G__79124,G__79125));
})();
var args__$1 = cljs.core.rest(args);
var arg78819 = (function (){var G__79126 = ctx;
var G__79127 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79126,G__79127) : sci.impl.interpreter.interpret.call(null,G__79126,G__79127));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg78820 = (function (){var G__79128 = ctx;
var G__79129 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79128,G__79129) : sci.impl.interpreter.interpret.call(null,G__79128,G__79129));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg78821 = (function (){var G__79130 = ctx;
var G__79131 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79130,G__79131) : sci.impl.interpreter.interpret.call(null,G__79130,G__79131));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg78822 = (function (){var G__79132 = ctx;
var G__79133 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79132,G__79133) : sci.impl.interpreter.interpret.call(null,G__79132,G__79133));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg78823 = (function (){var G__79134 = ctx;
var G__79135 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79134,G__79135) : sci.impl.interpreter.interpret.call(null,G__79134,G__79135));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg78824 = (function (){var G__79136 = ctx;
var G__79137 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79136,G__79137) : sci.impl.interpreter.interpret.call(null,G__79136,G__79137));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg78825 = (function (){var G__79138 = ctx;
var G__79139 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79138,G__79139) : sci.impl.interpreter.interpret.call(null,G__79138,G__79139));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg78826 = (function (){var G__79140 = ctx;
var G__79141 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79140,G__79141) : sci.impl.interpreter.interpret.call(null,G__79140,G__79141));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg78827 = (function (){var G__79142 = ctx;
var G__79143 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79142,G__79143) : sci.impl.interpreter.interpret.call(null,G__79142,G__79143));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg78828 = (function (){var G__79144 = ctx;
var G__79145 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79144,G__79145) : sci.impl.interpreter.interpret.call(null,G__79144,G__79145));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg78829 = (function (){var G__79146 = ctx;
var G__79147 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79146,G__79147) : sci.impl.interpreter.interpret.call(null,G__79146,G__79147));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg78830 = (function (){var G__79148 = ctx;
var G__79149 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79148,G__79149) : sci.impl.interpreter.interpret.call(null,G__79148,G__79149));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg78831 = (function (){var G__79150 = ctx;
var G__79151 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79150,G__79151) : sci.impl.interpreter.interpret.call(null,G__79150,G__79151));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg78832 = (function (){var G__79152 = ctx;
var G__79153 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79152,G__79153) : sci.impl.interpreter.interpret.call(null,G__79152,G__79153));
})();
var args__$15 = cljs.core.rest(args__$14);
return (f.cljs$core$IFn$_invoke$arity$15 ? f.cljs$core$IFn$_invoke$arity$15(arg78818,arg78819,arg78820,arg78821,arg78822,arg78823,arg78824,arg78825,arg78826,arg78827,arg78828,arg78829,arg78830,arg78831,arg78832) : f.call(null,arg78818,arg78819,arg78820,arg78821,arg78822,arg78823,arg78824,arg78825,arg78826,arg78827,arg78828,arg78829,arg78830,arg78831,arg78832));

break;
case (16):
var arg78833 = (function (){var G__79154 = ctx;
var G__79155 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79154,G__79155) : sci.impl.interpreter.interpret.call(null,G__79154,G__79155));
})();
var args__$1 = cljs.core.rest(args);
var arg78834 = (function (){var G__79156 = ctx;
var G__79157 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79156,G__79157) : sci.impl.interpreter.interpret.call(null,G__79156,G__79157));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg78835 = (function (){var G__79158 = ctx;
var G__79159 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79158,G__79159) : sci.impl.interpreter.interpret.call(null,G__79158,G__79159));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg78836 = (function (){var G__79160 = ctx;
var G__79161 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79160,G__79161) : sci.impl.interpreter.interpret.call(null,G__79160,G__79161));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg78837 = (function (){var G__79162 = ctx;
var G__79163 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79162,G__79163) : sci.impl.interpreter.interpret.call(null,G__79162,G__79163));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg78838 = (function (){var G__79164 = ctx;
var G__79165 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79164,G__79165) : sci.impl.interpreter.interpret.call(null,G__79164,G__79165));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg78839 = (function (){var G__79166 = ctx;
var G__79167 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79166,G__79167) : sci.impl.interpreter.interpret.call(null,G__79166,G__79167));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg78840 = (function (){var G__79168 = ctx;
var G__79169 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79168,G__79169) : sci.impl.interpreter.interpret.call(null,G__79168,G__79169));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg78841 = (function (){var G__79170 = ctx;
var G__79171 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79170,G__79171) : sci.impl.interpreter.interpret.call(null,G__79170,G__79171));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg78842 = (function (){var G__79184 = ctx;
var G__79185 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79184,G__79185) : sci.impl.interpreter.interpret.call(null,G__79184,G__79185));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg78843 = (function (){var G__79186 = ctx;
var G__79187 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79186,G__79187) : sci.impl.interpreter.interpret.call(null,G__79186,G__79187));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg78844 = (function (){var G__79188 = ctx;
var G__79189 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79188,G__79189) : sci.impl.interpreter.interpret.call(null,G__79188,G__79189));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg78845 = (function (){var G__79190 = ctx;
var G__79191 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79190,G__79191) : sci.impl.interpreter.interpret.call(null,G__79190,G__79191));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg78846 = (function (){var G__79192 = ctx;
var G__79193 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79192,G__79193) : sci.impl.interpreter.interpret.call(null,G__79192,G__79193));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg78847 = (function (){var G__79194 = ctx;
var G__79195 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79194,G__79195) : sci.impl.interpreter.interpret.call(null,G__79194,G__79195));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg78848 = (function (){var G__79196 = ctx;
var G__79197 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79196,G__79197) : sci.impl.interpreter.interpret.call(null,G__79196,G__79197));
})();
var args__$16 = cljs.core.rest(args__$15);
return (f.cljs$core$IFn$_invoke$arity$16 ? f.cljs$core$IFn$_invoke$arity$16(arg78833,arg78834,arg78835,arg78836,arg78837,arg78838,arg78839,arg78840,arg78841,arg78842,arg78843,arg78844,arg78845,arg78846,arg78847,arg78848) : f.call(null,arg78833,arg78834,arg78835,arg78836,arg78837,arg78838,arg78839,arg78840,arg78841,arg78842,arg78843,arg78844,arg78845,arg78846,arg78847,arg78848));

break;
case (17):
var arg78849 = (function (){var G__79198 = ctx;
var G__79199 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79198,G__79199) : sci.impl.interpreter.interpret.call(null,G__79198,G__79199));
})();
var args__$1 = cljs.core.rest(args);
var arg78850 = (function (){var G__79201 = ctx;
var G__79202 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79201,G__79202) : sci.impl.interpreter.interpret.call(null,G__79201,G__79202));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg78851 = (function (){var G__79203 = ctx;
var G__79204 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79203,G__79204) : sci.impl.interpreter.interpret.call(null,G__79203,G__79204));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg78852 = (function (){var G__79205 = ctx;
var G__79206 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79205,G__79206) : sci.impl.interpreter.interpret.call(null,G__79205,G__79206));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg78853 = (function (){var G__79207 = ctx;
var G__79208 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79207,G__79208) : sci.impl.interpreter.interpret.call(null,G__79207,G__79208));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg78854 = (function (){var G__79209 = ctx;
var G__79210 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79209,G__79210) : sci.impl.interpreter.interpret.call(null,G__79209,G__79210));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg78855 = (function (){var G__79211 = ctx;
var G__79212 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79211,G__79212) : sci.impl.interpreter.interpret.call(null,G__79211,G__79212));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg78856 = (function (){var G__79213 = ctx;
var G__79214 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79213,G__79214) : sci.impl.interpreter.interpret.call(null,G__79213,G__79214));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg78857 = (function (){var G__79215 = ctx;
var G__79216 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79215,G__79216) : sci.impl.interpreter.interpret.call(null,G__79215,G__79216));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg78858 = (function (){var G__79217 = ctx;
var G__79218 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79217,G__79218) : sci.impl.interpreter.interpret.call(null,G__79217,G__79218));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg78859 = (function (){var G__79219 = ctx;
var G__79220 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79219,G__79220) : sci.impl.interpreter.interpret.call(null,G__79219,G__79220));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg78860 = (function (){var G__79221 = ctx;
var G__79222 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79221,G__79222) : sci.impl.interpreter.interpret.call(null,G__79221,G__79222));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg78861 = (function (){var G__79223 = ctx;
var G__79224 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79223,G__79224) : sci.impl.interpreter.interpret.call(null,G__79223,G__79224));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg78862 = (function (){var G__79225 = ctx;
var G__79226 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79225,G__79226) : sci.impl.interpreter.interpret.call(null,G__79225,G__79226));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg78863 = (function (){var G__79227 = ctx;
var G__79228 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79227,G__79228) : sci.impl.interpreter.interpret.call(null,G__79227,G__79228));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg78864 = (function (){var G__79229 = ctx;
var G__79230 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79229,G__79230) : sci.impl.interpreter.interpret.call(null,G__79229,G__79230));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg78865 = (function (){var G__79231 = ctx;
var G__79232 = cljs.core.first(args__$16);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79231,G__79232) : sci.impl.interpreter.interpret.call(null,G__79231,G__79232));
})();
var args__$17 = cljs.core.rest(args__$16);
return (f.cljs$core$IFn$_invoke$arity$17 ? f.cljs$core$IFn$_invoke$arity$17(arg78849,arg78850,arg78851,arg78852,arg78853,arg78854,arg78855,arg78856,arg78857,arg78858,arg78859,arg78860,arg78861,arg78862,arg78863,arg78864,arg78865) : f.call(null,arg78849,arg78850,arg78851,arg78852,arg78853,arg78854,arg78855,arg78856,arg78857,arg78858,arg78859,arg78860,arg78861,arg78862,arg78863,arg78864,arg78865));

break;
case (18):
var arg78866 = (function (){var G__79233 = ctx;
var G__79234 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79233,G__79234) : sci.impl.interpreter.interpret.call(null,G__79233,G__79234));
})();
var args__$1 = cljs.core.rest(args);
var arg78867 = (function (){var G__79235 = ctx;
var G__79236 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79235,G__79236) : sci.impl.interpreter.interpret.call(null,G__79235,G__79236));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg78868 = (function (){var G__79237 = ctx;
var G__79238 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79237,G__79238) : sci.impl.interpreter.interpret.call(null,G__79237,G__79238));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg78869 = (function (){var G__79239 = ctx;
var G__79240 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79239,G__79240) : sci.impl.interpreter.interpret.call(null,G__79239,G__79240));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg78870 = (function (){var G__79241 = ctx;
var G__79242 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79241,G__79242) : sci.impl.interpreter.interpret.call(null,G__79241,G__79242));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg78871 = (function (){var G__79243 = ctx;
var G__79244 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79243,G__79244) : sci.impl.interpreter.interpret.call(null,G__79243,G__79244));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg78872 = (function (){var G__79245 = ctx;
var G__79246 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79245,G__79246) : sci.impl.interpreter.interpret.call(null,G__79245,G__79246));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg78873 = (function (){var G__79247 = ctx;
var G__79248 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79247,G__79248) : sci.impl.interpreter.interpret.call(null,G__79247,G__79248));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg78874 = (function (){var G__79249 = ctx;
var G__79250 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79249,G__79250) : sci.impl.interpreter.interpret.call(null,G__79249,G__79250));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg78875 = (function (){var G__79251 = ctx;
var G__79252 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79251,G__79252) : sci.impl.interpreter.interpret.call(null,G__79251,G__79252));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg78876 = (function (){var G__79253 = ctx;
var G__79254 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79253,G__79254) : sci.impl.interpreter.interpret.call(null,G__79253,G__79254));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg78877 = (function (){var G__79255 = ctx;
var G__79256 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79255,G__79256) : sci.impl.interpreter.interpret.call(null,G__79255,G__79256));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg78878 = (function (){var G__79257 = ctx;
var G__79258 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79257,G__79258) : sci.impl.interpreter.interpret.call(null,G__79257,G__79258));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg78879 = (function (){var G__79259 = ctx;
var G__79260 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79259,G__79260) : sci.impl.interpreter.interpret.call(null,G__79259,G__79260));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg78880 = (function (){var G__79261 = ctx;
var G__79262 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79261,G__79262) : sci.impl.interpreter.interpret.call(null,G__79261,G__79262));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg78881 = (function (){var G__79263 = ctx;
var G__79264 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79263,G__79264) : sci.impl.interpreter.interpret.call(null,G__79263,G__79264));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg78882 = (function (){var G__79265 = ctx;
var G__79266 = cljs.core.first(args__$16);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79265,G__79266) : sci.impl.interpreter.interpret.call(null,G__79265,G__79266));
})();
var args__$17 = cljs.core.rest(args__$16);
var arg78883 = (function (){var G__79267 = ctx;
var G__79268 = cljs.core.first(args__$17);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79267,G__79268) : sci.impl.interpreter.interpret.call(null,G__79267,G__79268));
})();
var args__$18 = cljs.core.rest(args__$17);
return (f.cljs$core$IFn$_invoke$arity$18 ? f.cljs$core$IFn$_invoke$arity$18(arg78866,arg78867,arg78868,arg78869,arg78870,arg78871,arg78872,arg78873,arg78874,arg78875,arg78876,arg78877,arg78878,arg78879,arg78880,arg78881,arg78882,arg78883) : f.call(null,arg78866,arg78867,arg78868,arg78869,arg78870,arg78871,arg78872,arg78873,arg78874,arg78875,arg78876,arg78877,arg78878,arg78879,arg78880,arg78881,arg78882,arg78883));

break;
case (19):
var arg78884 = (function (){var G__79269 = ctx;
var G__79270 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79269,G__79270) : sci.impl.interpreter.interpret.call(null,G__79269,G__79270));
})();
var args__$1 = cljs.core.rest(args);
var arg78885 = (function (){var G__79271 = ctx;
var G__79272 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79271,G__79272) : sci.impl.interpreter.interpret.call(null,G__79271,G__79272));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg78886 = (function (){var G__79273 = ctx;
var G__79274 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79273,G__79274) : sci.impl.interpreter.interpret.call(null,G__79273,G__79274));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg78887 = (function (){var G__79275 = ctx;
var G__79276 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79275,G__79276) : sci.impl.interpreter.interpret.call(null,G__79275,G__79276));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg78888 = (function (){var G__79277 = ctx;
var G__79278 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79277,G__79278) : sci.impl.interpreter.interpret.call(null,G__79277,G__79278));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg78889 = (function (){var G__79279 = ctx;
var G__79280 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79279,G__79280) : sci.impl.interpreter.interpret.call(null,G__79279,G__79280));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg78890 = (function (){var G__79281 = ctx;
var G__79282 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79281,G__79282) : sci.impl.interpreter.interpret.call(null,G__79281,G__79282));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg78891 = (function (){var G__79283 = ctx;
var G__79284 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79283,G__79284) : sci.impl.interpreter.interpret.call(null,G__79283,G__79284));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg78892 = (function (){var G__79285 = ctx;
var G__79286 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79285,G__79286) : sci.impl.interpreter.interpret.call(null,G__79285,G__79286));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg78893 = (function (){var G__79287 = ctx;
var G__79288 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79287,G__79288) : sci.impl.interpreter.interpret.call(null,G__79287,G__79288));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg78894 = (function (){var G__79289 = ctx;
var G__79290 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79289,G__79290) : sci.impl.interpreter.interpret.call(null,G__79289,G__79290));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg78895 = (function (){var G__79291 = ctx;
var G__79292 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79291,G__79292) : sci.impl.interpreter.interpret.call(null,G__79291,G__79292));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg78896 = (function (){var G__79293 = ctx;
var G__79294 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79293,G__79294) : sci.impl.interpreter.interpret.call(null,G__79293,G__79294));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg78897 = (function (){var G__79295 = ctx;
var G__79296 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79295,G__79296) : sci.impl.interpreter.interpret.call(null,G__79295,G__79296));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg78898 = (function (){var G__79297 = ctx;
var G__79298 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79297,G__79298) : sci.impl.interpreter.interpret.call(null,G__79297,G__79298));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg78899 = (function (){var G__79299 = ctx;
var G__79300 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79299,G__79300) : sci.impl.interpreter.interpret.call(null,G__79299,G__79300));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg78900 = (function (){var G__79303 = ctx;
var G__79304 = cljs.core.first(args__$16);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79303,G__79304) : sci.impl.interpreter.interpret.call(null,G__79303,G__79304));
})();
var args__$17 = cljs.core.rest(args__$16);
var arg78901 = (function (){var G__79305 = ctx;
var G__79306 = cljs.core.first(args__$17);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79305,G__79306) : sci.impl.interpreter.interpret.call(null,G__79305,G__79306));
})();
var args__$18 = cljs.core.rest(args__$17);
var arg78902 = (function (){var G__79307 = ctx;
var G__79308 = cljs.core.first(args__$18);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79307,G__79308) : sci.impl.interpreter.interpret.call(null,G__79307,G__79308));
})();
var args__$19 = cljs.core.rest(args__$18);
return (f.cljs$core$IFn$_invoke$arity$19 ? f.cljs$core$IFn$_invoke$arity$19(arg78884,arg78885,arg78886,arg78887,arg78888,arg78889,arg78890,arg78891,arg78892,arg78893,arg78894,arg78895,arg78896,arg78897,arg78898,arg78899,arg78900,arg78901,arg78902) : f.call(null,arg78884,arg78885,arg78886,arg78887,arg78888,arg78889,arg78890,arg78891,arg78892,arg78893,arg78894,arg78895,arg78896,arg78897,arg78898,arg78899,arg78900,arg78901,arg78902));

break;
default:
var args__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__78226_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__78226_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__78226_SHARP_));
}),args);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args__$1);

}
});
sci.impl.interpreter.eval_special_call = (function sci$impl$interpreter$eval_special_call(ctx,f_sym,expr){
var G__79310 = sci.impl.utils.strip_core_ns(f_sym);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,".",".",1975675962,null),G__79310)){
return sci.impl.interpreter.eval_instance_method_invocation(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"and","and",668631710,null),G__79310)){
return sci.impl.interpreter.eval_and(ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"import","import",241030818,null),G__79310)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_import,ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"case","case",-1510733573,null),G__79310)){
return sci.impl.interpreter.eval_case(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"if","if",1181717262,null),G__79310)){
return sci.impl.interpreter.eval_if(ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"do","do",1686842252,null),G__79310)){
return sci.impl.interpreter.eval_do(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"macroexpand","macroexpand",1509933344,null),G__79310)){
return sci.impl.interpreter.macroexpand(ctx,(function (){var G__79311 = ctx;
var G__79312 = cljs.core.second(expr);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79311,G__79312) : sci.impl.interpreter.interpret.call(null,G__79311,G__79312));
})());
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"def","def",597100991,null),G__79310)){
return sci.impl.interpreter.eval_def(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"let","let",358118826,null),G__79310)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_let,ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"in-ns","in-ns",-2089468466,null),G__79310)){
return sci.impl.interpreter.eval_in_ns(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"use","use",-205850897,null),G__79310)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_use,ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"set!","set!",250714521,null),G__79310)){
return sci.impl.interpreter.eval_set_BANG_(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"recur","recur",1202958259,null),G__79310)){
return sci.impl.interpreter.fn_call(ctx,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(sci.impl.fns.__GT_Recur,cljs.core.vector),cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"require","require",1172530194,null),G__79310)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_require,ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"new","new",-444906321,null),G__79310)){
return sci.impl.interpreter.eval_constructor_invocation(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"macroexpand-1","macroexpand-1",659241329,null),G__79310)){
return sci.impl.interpreter.macroexpand_1(ctx,(function (){var G__79318 = ctx;
var G__79319 = cljs.core.second(expr);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79318,G__79319) : sci.impl.interpreter.interpret.call(null,G__79318,G__79319));
})());
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"refer","refer",676235974,null),G__79310)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_refer,ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"lazy-seq","lazy-seq",489632906,null),G__79310)){
return (new cljs.core.LazySeq(null,(function (){var G__79320 = ctx;
var G__79321 = cljs.core.second(expr);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__79320,G__79321) : sci.impl.interpreter.interpret.call(null,G__79320,G__79321));
})(),null,null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"throw","throw",595905694,null),G__79310)){
return sci.impl.interpreter.eval_throw(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"try","try",-1273693247,null),G__79310)){
return sci.impl.interpreter.eval_try(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"resolve","resolve",56086045,null),G__79310)){
return sci.impl.interpreter.eval_resolve(ctx,cljs.core.second(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"or","or",1876275696,null),G__79310)){
return sci.impl.interpreter.eval_or(ctx,cljs.core.rest(expr));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__79310)].join('')));

}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
sci.impl.interpreter.eval_call = (function sci$impl$interpreter$eval_call(ctx,expr){
try{var f = cljs.core.first(expr);
var m = cljs.core.meta(f);
var op = (cljs.core.truth_(m)?m.get(new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978)):null);
if((((f instanceof cljs.core.Symbol)) && (cljs.core.not(op)))){
return sci.impl.interpreter.eval_special_call(ctx,f,expr);
} else {
if(cljs.core.truth_((sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(op,new cljs.core.Keyword(null,"static-access","static-access",-1860919441)) : sci.impl.utils.kw_identical_QMARK_.call(null,op,new cljs.core.Keyword(null,"static-access","static-access",-1860919441))))){
return sci.impl.interpreter.eval_static_method_invocation(ctx,expr);
} else {
var f__$1 = (cljs.core.truth_(op)?(sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,f) : sci.impl.interpreter.interpret.call(null,ctx,f)):f);
if(cljs.core.ifn_QMARK_(f__$1)){
return sci.impl.interpreter.fn_call(ctx,f__$1,cljs.core.rest(expr));
} else {
throw (new Error(["Cannot call ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f__$1], 0))," as a function."].join('')));
}

}
}
}catch (e79322){if((e79322 instanceof Error)){
var e = e79322;
return sci.impl.utils.rethrow_with_location_of_node(ctx,e,expr);
} else {
throw e79322;

}
}});
sci.impl.interpreter.fix_meta = (function sci$impl$interpreter$fix_meta(v,old_meta){
if(cljs.core.truth_((function (){var and__4221__auto__ = (((!((v == null))))?(((((v.cljs$lang$protocol_mask$partition0$ & (262144))) || ((cljs.core.PROTOCOL_SENTINEL === v.cljs$core$IWithMeta$))))?true:false):false);
if(and__4221__auto__){
return cljs.core.meta(v);
} else {
return and__4221__auto__;
}
})())){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$2(v,(function (m){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978)),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(old_meta));
}));
} else {
return v;
}
});
sci.impl.interpreter.interpret = (function sci$impl$interpreter$interpret(ctx,expr){
if((expr instanceof sci.impl.types.EvalVar)){
var v = expr.sci$impl$types$IBox$getVal$arity$1(null);
if(cljs.core.not(sci.impl.vars.isMacro(v))){
return cljs.core.deref(v);
} else {
throw (new Error(["Can't take value of a macro: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v),""].join('')));
}
} else {
var m = cljs.core.meta(expr);
var op = (cljs.core.truth_(m)?m.get(new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978)):null);
var ret = ((cljs.core.not(op))?expr:(function (){var G__79328 = op;
var G__79328__$1 = (((G__79328 instanceof cljs.core.Keyword))?G__79328.fqn:null);
switch (G__79328__$1) {
case "call":
return sci.impl.interpreter.eval_call(ctx,expr);

break;
case "try":
return sci.impl.interpreter.eval_try(ctx,expr);

break;
case "fn":
return sci.impl.fns.eval_fn(ctx,sci.impl.interpreter.interpret,sci.impl.interpreter.eval_do_STAR_,expr);

break;
case "static-access":
return sci.impl.interop.get_static_field(expr);

break;
case "var-value":
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(expr,(0));

break;
case "deref!":
var v = cljs.core.first(expr);
var v__$1 = ((sci.impl.vars.var_QMARK_(v))?cljs.core.deref(v):v);
var v__$2 = cljs.core.force(v__$1);
return v__$2;

break;
case "resolve-sym":
return sci.impl.interpreter.resolve_symbol(ctx,expr);

break;
case "needs-ctx":
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2(expr,ctx);

break;
default:
if(cljs.core.map_QMARK_(expr)){
return cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__79325_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__79325_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__79325_SHARP_));
}),cljs.core.keys(expr)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__79326_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__79326_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__79326_SHARP_));
}),cljs.core.vals(expr)));
} else {
if(((cljs.core.vector_QMARK_(expr)) || (cljs.core.set_QMARK_(expr)))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.empty(expr),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__79327_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__79327_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__79327_SHARP_));
}),expr));
} else {
throw (new Error(["unexpected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr),", type: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(expr)),", meta:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(expr))].join('')));

}
}

}
})());
var ret__$1 = (cljs.core.truth_(m)?sci.impl.interpreter.fix_meta(ret,m):ret);
var temp__5751__auto__ = ctx.get(new cljs.core.Keyword(null,"realize-max","realize-max",-1846442543));
if(cljs.core.truth_(temp__5751__auto__)){
var n = temp__5751__auto__;
return sci.impl.max_or_throw.max_or_throw(ret__$1,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"expression","expression",202311876),expr),n);
} else {
return ret__$1;
}
}
});
sci.impl.interpreter.do_QMARK_ = (function sci$impl$interpreter$do_QMARK_(expr){
return ((cljs.core.list_QMARK_(expr)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.first(expr))));
});
sci.impl.interpreter.eval_form = (function sci$impl$interpreter$eval_form(ctx,form){
if(cljs.core.list_QMARK_(form)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.first(form))){
var exprs = cljs.core.rest(form);
var ret = null;
while(true){
if(cljs.core.seq(exprs)){
var G__79554 = cljs.core.rest(exprs);
var G__79555 = (function (){var G__79332 = ctx;
var G__79333 = cljs.core.first(exprs);
return (sci.impl.interpreter.eval_form.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.eval_form.cljs$core$IFn$_invoke$arity$2(G__79332,G__79333) : sci.impl.interpreter.eval_form.call(null,G__79332,G__79333));
})();
exprs = G__79554;
ret = G__79555;
continue;
} else {
return ret;
}
break;
}
} else {
if(((cljs.core.not(new cljs.core.Keyword(null,"uberscript","uberscript",701571092).cljs$core$IFn$_invoke$arity$1(ctx))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"ns","ns",2082130287,null),cljs.core.first(form))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"require","require",1172530194,null),cljs.core.first(form))))))){
var analyzed = sci.impl.analyzer.analyze(ctx,form);
var ret = sci.impl.interpreter.interpret(ctx,analyzed);
return ret;
} else {
return null;
}
}
} else {
var analyzed = sci.impl.analyzer.analyze(ctx,form);
var ret = sci.impl.interpreter.interpret(ctx,analyzed);
return ret;
}
});
cljs.core.vreset_BANG_(sci.impl.utils.eval_form_state,sci.impl.interpreter.eval_form);
sci.impl.interpreter.eval_string_STAR_ = (function sci$impl$interpreter$eval_string_STAR_(ctx,s){
sci.impl.vars.push_thread_bindings(cljs.core.PersistentArrayMap.createAsIfByAssoc([sci.impl.vars.current_ns,cljs.core.deref(sci.impl.vars.current_ns)]));

try{var reader = cljs.tools.reader.reader_types.indexing_push_back_reader.cljs$core$IFn$_invoke$arity$1(cljs.tools.reader.reader_types.string_push_back_reader.cljs$core$IFn$_invoke$arity$1(s));
var ret = null;
while(true){
var expr = sci.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2(ctx,reader);
if(cljs.core.truth_((sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("edamame.impl.parser","eof","edamame.impl.parser/eof",720552006),expr) : sci.impl.utils.kw_identical_QMARK_.call(null,new cljs.core.Keyword("edamame.impl.parser","eof","edamame.impl.parser/eof",720552006),expr)))){
return ret;
} else {
var ret__$1 = sci.impl.interpreter.eval_form(ctx,expr);
var G__79558 = ret__$1;
ret = G__79558;
continue;
}
break;
}
}finally {sci.impl.vars.pop_thread_bindings();
}});
sci.impl.interpreter.eval_string = (function sci$impl$interpreter$eval_string(var_args){
var G__79335 = arguments.length;
switch (G__79335) {
case 1:
return sci.impl.interpreter.eval_string.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sci.impl.interpreter.eval_string.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.interpreter.eval_string.cljs$core$IFn$_invoke$arity$1 = (function (s){
return sci.impl.interpreter.eval_string.cljs$core$IFn$_invoke$arity$2(s,null);
}));

(sci.impl.interpreter.eval_string.cljs$core$IFn$_invoke$arity$2 = (function (s,opts){
var init_ctx = sci.impl.opts.init(opts);
var ret = sci.impl.interpreter.eval_string_STAR_(init_ctx,s);
return ret;
}));

(sci.impl.interpreter.eval_string.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=sci.impl.interpreter.js.map
