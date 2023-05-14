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
var G__156150 = xs;
args__$2 = G__156150;
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
var G__156151 = xs;
args__$2 = G__156151;
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
var len__4829__auto___156152 = arguments.length;
var i__4830__auto___156153 = (0);
while(true){
if((i__4830__auto___156153 < len__4829__auto___156152)){
args__4835__auto__.push((arguments[i__4830__auto___156153]));

var G__156154 = (i__4830__auto___156153 + (1));
i__4830__auto___156153 = G__156154;
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
var G__156157 = ctx__$2;
var G__156158 = rest_let_bindings;
ctx__$1 = G__156157;
let_bindings__$1 = G__156158;
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
var G__156159 = nexprs;
exprs__$1 = G__156159;
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
(sci.impl.interpreter.eval_let.cljs$lang$applyTo = (function (seq155272){
var G__155273 = cljs.core.first(seq155272);
var seq155272__$1 = cljs.core.next(seq155272);
var G__155274 = cljs.core.first(seq155272__$1);
var seq155272__$2 = cljs.core.next(seq155272__$1);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__155273,G__155274,seq155272__$2);
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
sci.impl.interpreter.eval_def = (function sci$impl$interpreter$eval_def(ctx,p__155285){
var vec__155286 = p__155285;
var _def = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__155286,(0),null);
var var_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__155286,(1),null);
var _QMARK_docstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__155286,(2),null);
var _QMARK_init = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__155286,(3),null);
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
var v = (cljs.core.truth_((sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("sci.impl","var.unbound","sci.impl/var.unbound",-1824207647),init__$1) : sci.impl.utils.kw_identical_QMARK_.call(null,new cljs.core.Keyword("sci.impl","var.unbound","sci.impl/var.unbound",-1824207647),init__$1)))?(function (){var G__155292 = prev__$1;
cljs.core.alter_meta_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__155292,cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m__$1], 0));

return G__155292;
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
var vec__155297 = libspec;
var seq__155298 = cljs.core.seq(vec__155297);
var first__155299 = cljs.core.first(seq__155298);
var seq__155298__$1 = cljs.core.next(seq__155298);
var lib_name = first__155299;
var opts = seq__155298__$1;
var ret = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lib-name","lib-name",1158024282),lib_name], null);
var G__155305 = opts;
var vec__155306 = G__155305;
var seq__155307 = cljs.core.seq(vec__155306);
var first__155308 = cljs.core.first(seq__155307);
var seq__155307__$1 = cljs.core.next(seq__155307);
var opt_name = first__155308;
var first__155308__$1 = cljs.core.first(seq__155307__$1);
var seq__155307__$2 = cljs.core.next(seq__155307__$1);
var fst_opt = first__155308__$1;
var rst_opts = seq__155307__$2;
var ret__$1 = ret;
var G__155305__$1 = G__155305;
while(true){
var ret__$2 = ret__$1;
var vec__155314 = G__155305__$1;
var seq__155315 = cljs.core.seq(vec__155314);
var first__155316 = cljs.core.first(seq__155315);
var seq__155315__$1 = cljs.core.next(seq__155315);
var opt_name__$1 = first__155316;
var first__155316__$1 = cljs.core.first(seq__155315__$1);
var seq__155315__$2 = cljs.core.next(seq__155315__$1);
var fst_opt__$1 = first__155316__$1;
var rst_opts__$1 = seq__155315__$2;
if(cljs.core.not(opt_name__$1)){
return ret__$2;
} else {
var G__155320 = opt_name__$1;
var G__155320__$1 = (((G__155320 instanceof cljs.core.Keyword))?G__155320.fqn:null);
switch (G__155320__$1) {
case "as":
var G__156165 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$2,new cljs.core.Keyword(null,"as","as",1148689641),fst_opt__$1);
var G__156166 = rst_opts__$1;
ret__$1 = G__156165;
G__155305__$1 = G__156166;
continue;

break;
case "reload":
case "reload-all":
case "verbose":
var G__156167 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$2,new cljs.core.Keyword(null,"reload","reload",863702807),true);
var G__156168 = cljs.core.cons(fst_opt__$1,rst_opts__$1);
ret__$1 = G__156167;
G__155305__$1 = G__156168;
continue;

break;
case "refer":
case "rename":
case "exclude":
case "only":
var G__156169 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$2,opt_name__$1,fst_opt__$1);
var G__156170 = rst_opts__$1;
ret__$1 = G__156169;
G__155305__$1 = G__156170;
continue;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__155320__$1)].join('')));

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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ns,p__155323){
var vec__155325 = p__155323;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__155325,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__155325,(1),null);
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
sci.impl.interpreter.handle_require_libspec_env = (function sci$impl$interpreter$handle_require_libspec_env(ctx,env,use_QMARK_,current_ns,the_loaded_ns,lib_name,p__155329){
var map__155330 = p__155329;
var map__155330__$1 = cljs.core.__destructure_map(map__155330);
var _parsed_libspec = map__155330__$1;
var as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__155330__$1,new cljs.core.Keyword(null,"as","as",1148689641));
var refer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__155330__$1,new cljs.core.Keyword(null,"refer","refer",-964295553));
var rename = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__155330__$1,new cljs.core.Keyword(null,"rename","rename",1508157613));
var exclude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__155330__$1,new cljs.core.Keyword(null,"exclude","exclude",-1230250334));
var only = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__155330__$1,new cljs.core.Keyword(null,"only","only",1907811652));
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
var vec__155337 = temp__5751__auto__;
var _k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__155337,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__155337,(1),null);
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
var map__155342 = sci.impl.interpreter.parse_libspec(libspec);
var map__155342__$1 = cljs.core.__destructure_map(map__155342);
var parsed_libspec = map__155342__$1;
var lib_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__155342__$1,new cljs.core.Keyword(null,"lib-name","lib-name",1158024282));
var reload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__155342__$1,new cljs.core.Keyword(null,"reload","reload",863702807));
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
var temp__5751__auto____$2 = (function (){var G__155344 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),lib_name,new cljs.core.Keyword(null,"reload","reload",863702807),reload], null);
return (load_fn.cljs$core$IFn$_invoke$arity$1 ? load_fn.cljs$core$IFn$_invoke$arity$1(G__155344) : load_fn.call(null,G__155344));
})();
if(cljs.core.truth_(temp__5751__auto____$2)){
var map__155345 = temp__5751__auto____$2;
var map__155345__$1 = cljs.core.__destructure_map(map__155345);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__155345__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__155345__$1,new cljs.core.Keyword(null,"source","source",-433931539));
try{sci.impl.vars.push_thread_bindings(cljs.core.PersistentArrayMap.createAsIfByAssoc([sci.impl.vars.current_ns,cljs.core.deref(sci.impl.vars.current_ns),sci.impl.vars.current_file,file]));

try{var G__155350_156186 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),cljs.core.PersistentArrayMap.EMPTY);
var G__155351_156187 = source;
(sci.impl.interpreter.eval_string_STAR_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.eval_string_STAR_.cljs$core$IFn$_invoke$arity$2(G__155350_156186,G__155351_156187) : sci.impl.interpreter.eval_string_STAR_.call(null,G__155350_156186,G__155351_156187));
}finally {sci.impl.vars.pop_thread_bindings();
}}catch (e155346){if((e155346 instanceof Error)){
var e_156189 = e155346;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(env_STAR_,cljs.core.update,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lib_name], 0));

throw e_156189;
} else {
throw e155346;

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
var len__4829__auto___156193 = arguments.length;
var i__4830__auto___156194 = (0);
while(true){
if((i__4830__auto___156194 < len__4829__auto___156193)){
args__4835__auto__.push((arguments[i__4830__auto___156194]));

var G__156195 = (i__4830__auto___156194 + (1));
i__4830__auto___156194 = G__156195;
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
var ret = (function (){var G__155369 = ctx;
var G__155370 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__155369,G__155370) : sci.impl.interpreter.interpret.call(null,G__155369,G__155370));
})();
if((ret instanceof cljs.core.Symbol)){
var G__156196 = (function (){var G__155371 = libspecs;
if(cljs.core.truth_(current_libspec)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__155371,current_libspec);
} else {
return G__155371;
}
})();
var G__156197 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ret], null);
var G__156198 = cljs.core.next(args__$1);
libspecs = G__156196;
current_libspec = G__156197;
args__$1 = G__156198;
continue;
} else {
if((ret instanceof cljs.core.Keyword)){
var G__156199 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(libspecs,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current_libspec,ret));
var G__156200 = null;
var G__156201 = cljs.core.next(args__$1);
libspecs = G__156199;
current_libspec = G__156200;
args__$1 = G__156201;
continue;
} else {
var G__156202 = (function (){var G__155372 = libspecs;
if(cljs.core.truth_(current_libspec)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__155372,current_libspec);
} else {
return G__155372;
}
})();
var G__156203 = ret;
var G__156204 = cljs.core.next(args__$1);
libspecs = G__156202;
current_libspec = G__156203;
args__$1 = G__156204;
continue;

}
}
} else {
var libspecs__$1 = (function (){var G__155373 = libspecs;
if(cljs.core.truth_(current_libspec)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__155373,current_libspec);
} else {
return G__155373;
}
})();
return cljs.core.run_BANG_(((function (libspecs,current_libspec,args__$1,libspecs__$1){
return (function (p1__155355_SHARP_){
return sci.impl.interpreter.handle_require_libspec(ctx,p1__155355_SHARP_);
});})(libspecs,current_libspec,args__$1,libspecs__$1))
,libspecs__$1);
}
break;
}
}));

(sci.impl.interpreter.eval_require.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sci.impl.interpreter.eval_require.cljs$lang$applyTo = (function (seq155356){
var G__155357 = cljs.core.first(seq155356);
var seq155356__$1 = cljs.core.next(seq155356);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__155357,seq155356__$1);
}));

cljs.core.vreset_BANG_(sci.impl.utils.eval_require_state,sci.impl.interpreter.eval_require);
sci.impl.interpreter.eval_use = (function sci$impl$interpreter$eval_use(var_args){
var args__4835__auto__ = [];
var len__4829__auto___156206 = arguments.length;
var i__4830__auto___156207 = (0);
while(true){
if((i__4830__auto___156207 < len__4829__auto___156206)){
args__4835__auto__.push((arguments[i__4830__auto___156207]));

var G__156208 = (i__4830__auto___156207 + (1));
i__4830__auto___156207 = G__156208;
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
(sci.impl.interpreter.eval_use.cljs$lang$applyTo = (function (seq155377){
var G__155378 = cljs.core.first(seq155377);
var seq155377__$1 = cljs.core.next(seq155377);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__155378,seq155377__$1);
}));

cljs.core.vreset_BANG_(sci.impl.utils.eval_use_state,sci.impl.interpreter.eval_use);
sci.impl.interpreter.eval_case = (function sci$impl$interpreter$eval_case(ctx,p__155383){
var vec__155384 = p__155383;
var _case = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__155384,(0),null);
var map__155387 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__155384,(1),null);
var map__155387__$1 = cljs.core.__destructure_map(map__155387);
var case_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__155387__$1,new cljs.core.Keyword(null,"case-map","case-map",955082964));
var case_val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__155387__$1,new cljs.core.Keyword(null,"case-val","case-val",880926521));
var case_default = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__155387__$1,new cljs.core.Keyword(null,"case-default","case-default",1140470708));
var v = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,case_val) : sci.impl.interpreter.interpret.call(null,ctx,case_val));
var temp__5751__auto__ = cljs.core.find(case_map,v);
if(cljs.core.truth_(temp__5751__auto__)){
var vec__155391 = temp__5751__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__155391,(0),null);
var found = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__155391,(1),null);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,found) : sci.impl.interpreter.interpret.call(null,ctx,found));
} else {
if(cljs.core.vector_QMARK_(case_default)){
var G__155394 = ctx;
var G__155395 = cljs.core.second(case_default);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__155394,G__155395) : sci.impl.interpreter.interpret.call(null,G__155394,G__155395));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('')));
}
}
});
sci.impl.interpreter.eval_try = (function sci$impl$interpreter$eval_try(ctx,expr){
var map__155397 = new cljs.core.Keyword("sci.impl","try","sci.impl/try",2142624741).cljs$core$IFn$_invoke$arity$1(expr);
var map__155397__$1 = cljs.core.__destructure_map(map__155397);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__155397__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var catches = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__155397__$1,new cljs.core.Keyword(null,"catches","catches",-1478797617));
var finally$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__155397__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
try{var _STAR_in_try_STAR__orig_val__155410 = sci.impl.utils._STAR_in_try_STAR_;
var _STAR_in_try_STAR__temp_val__155411 = true;
(sci.impl.utils._STAR_in_try_STAR_ = _STAR_in_try_STAR__temp_val__155411);

try{return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,body) : sci.impl.interpreter.interpret.call(null,ctx,body));
}finally {(sci.impl.utils._STAR_in_try_STAR_ = _STAR_in_try_STAR__orig_val__155410);
}}catch (e155401){if((e155401 instanceof Error)){
var e = e155401;
var temp__5751__auto__ = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (_,c){
var clazz = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(c);
if((e instanceof clazz)){
return cljs.core.reduced(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sci.impl.interpreter","try-result","sci.impl.interpreter/try-result",1789456125),(function (){var G__155404 = cljs.core.assoc_in(ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),new cljs.core.Keyword(null,"binding","binding",539932593).cljs$core$IFn$_invoke$arity$1(c)], null),e);
var G__155405 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(c);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__155404,G__155405) : sci.impl.interpreter.interpret.call(null,G__155404,G__155405));
})()], null));
} else {
return null;
}
}),null,catches);
if(cljs.core.truth_(temp__5751__auto__)){
var vec__155407 = temp__5751__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__155407,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__155407,(1),null);
return r;
} else {
return sci.impl.utils.rethrow_with_location_of_node(ctx,e,body);
}
} else {
throw e155401;

}
}finally {(sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,finally$) : sci.impl.interpreter.interpret.call(null,ctx,finally$));
}});
sci.impl.interpreter.eval_throw = (function sci$impl$interpreter$eval_throw(ctx,p__155415){
var vec__155416 = p__155415;
var _throw = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__155416,(0),null);
var ex = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__155416,(1),null);
var ex__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,ex) : sci.impl.interpreter.interpret.call(null,ctx,ex));
throw ex__$1;
});
sci.impl.interpreter.eval_static_method_invocation = (function sci$impl$interpreter$eval_static_method_invocation(ctx,expr){
return sci.impl.interop.invoke_static_method(cljs.core.first(expr),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__155421_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__155421_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__155421_SHARP_));
}),cljs.core.rest(expr)));
});
sci.impl.interpreter.eval_constructor_invocation = (function sci$impl$interpreter$eval_constructor_invocation(ctx,p__155424){
var vec__155425 = p__155424;
var _new = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__155425,(0),null);
var constructor$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__155425,(1),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__155425,(2),null);
var args__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__155423_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__155423_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__155423_SHARP_));
}),args);
return sci.impl.interop.invoke_constructor(constructor$,args__$1);
});
sci.impl.interpreter.eval_instance_method_invocation = (function sci$impl$interpreter$eval_instance_method_invocation(p__155430,p__155431){
var map__155432 = p__155430;
var map__155432__$1 = cljs.core.__destructure_map(map__155432);
var ctx = map__155432__$1;
var class__GT_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__155432__$1,new cljs.core.Keyword(null,"class->opts","class->opts",2061906477));
var vec__155433 = p__155431;
var _dot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__155433,(0),null);
var instance_expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__155433,(1),null);
var method_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__155433,(2),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__155433,(3),null);
var _expr = vec__155433;
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

var args__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__155429_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__155429_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__155429_SHARP_));
}),args);
return sci.impl.interop.invoke_instance_method(instance_expr_STAR_,target_class,method_str,args__$1);
}
});
sci.impl.interpreter.eval_in_ns = (function sci$impl$interpreter$eval_in_ns(ctx,p__155451){
var vec__155453 = p__155451;
var _in_ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__155453,(0),null);
var ns_expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__155453,(1),null);
var ns_sym = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,ns_expr) : sci.impl.interpreter.interpret.call(null,ctx,ns_expr));
sci.impl.utils.set_namespace_BANG_(ctx,ns_sym,null);

return null;
});
sci.impl.interpreter.eval_refer = (function sci$impl$interpreter$eval_refer(var_args){
var args__4835__auto__ = [];
var len__4829__auto___156213 = arguments.length;
var i__4830__auto___156214 = (0);
while(true){
if((i__4830__auto___156214 < len__4829__auto___156213)){
args__4835__auto__.push((arguments[i__4830__auto___156214]));

var G__156215 = (i__4830__auto___156214 + (1));
i__4830__auto___156214 = G__156215;
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
var vec__155463 = exprs__$1;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__155463,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__155463,(1),null);
var G__155466_156217 = k;
var G__155466_156218__$1 = (((G__155466_156217 instanceof cljs.core.Keyword))?G__155466_156217.fqn:null);
switch (G__155466_156218__$1) {
case "exclude":
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),((function (exprs__$1,G__155466_156217,G__155466_156218__$1,vec__155463,k,v,ns_sym__$1){
return (function (env){
var cnn = sci.impl.vars.current_ns_name();
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn,new cljs.core.Keyword(null,"refer","refer",-964295553),ns_sym__$1,new cljs.core.Keyword(null,"exclude","exclude",-1230250334)], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.into,cljs.core.PersistentHashSet.EMPTY),v);
});})(exprs__$1,G__155466_156217,G__155466_156218__$1,vec__155463,k,v,ns_sym__$1))
);

break;
case "only":
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),((function (exprs__$1,G__155466_156217,G__155466_156218__$1,vec__155463,k,v,ns_sym__$1){
return (function (env){
var cnn = sci.impl.vars.current_ns_name();
var other_ns = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),ns_sym__$1], null));
var other_vars = cljs.core.select_keys(other_ns,v);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn], null),cljs.core.merge,other_vars);
});})(exprs__$1,G__155466_156217,G__155466_156218__$1,vec__155463,k,v,ns_sym__$1))
);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__155466_156218__$1)].join('')));

}

var G__156221 = cljs.core.nnext(exprs__$1);
exprs__$1 = G__156221;
continue;
} else {
return null;
}
break;
}
}));

(sci.impl.interpreter.eval_refer.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.interpreter.eval_refer.cljs$lang$applyTo = (function (seq155460){
var G__155461 = cljs.core.first(seq155460);
var seq155460__$1 = cljs.core.next(seq155460);
var G__155462 = cljs.core.first(seq155460__$1);
var seq155460__$2 = cljs.core.next(seq155460__$1);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__155461,G__155462,seq155460__$2);
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
var f__$2 = (cljs.core.truth_((function (){var G__155468 = new cljs.core.Keyword(null,"needs-ctx","needs-ctx",-35514403);
var G__155469 = (function (){var G__155470 = f__$1;
var G__155470__$1 = (((G__155470 == null))?null:cljs.core.meta(G__155470));
if((G__155470__$1 == null)){
return null;
} else {
return new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978).cljs$core$IFn$_invoke$arity$1(G__155470__$1);
}
})();
return (sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__155468,G__155469) : sci.impl.utils.kw_identical_QMARK_.call(null,G__155468,G__155469));
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
var len__4829__auto___156226 = arguments.length;
var i__4830__auto___156227 = (0);
while(true){
if((i__4830__auto___156227 < len__4829__auto___156226)){
args__4835__auto__.push((arguments[i__4830__auto___156227]));

var G__156229 = (i__4830__auto___156227 + (1));
i__4830__auto___156227 = G__156229;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return sci.impl.interpreter.eval_import.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(sci.impl.interpreter.eval_import.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,import_symbols_or_lists){
var specs = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__155472_SHARP_){
if(((cljs.core.seq_QMARK_(p1__155472_SHARP_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(p1__155472_SHARP_))))){
return cljs.core.second(p1__155472_SHARP_);
} else {
return p1__155472_SHARP_;
}
}),import_symbols_or_lists);
var env = new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx);
return cljs.core.run_BANG_((function (spec){
var vec__155482 = (((spec instanceof cljs.core.Symbol))?(function (){var s = cljs.core.str.cljs$core$IFn$_invoke$arity$1(spec);
var last_dot = clojure.string.last_index_of.cljs$core$IFn$_invoke$arity$2(s,".");
var package_PLUS_class_name = (cljs.core.truth_(last_dot)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),last_dot)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(last_dot + (1)),((s).length)))], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec], null)], null));
return package_PLUS_class_name;
})():(function (){var p = cljs.core.first(spec);
var cs = cljs.core.rest(spec);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cs], null);
})());
var package$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__155482,(0),null);
var classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__155482,(1),null);
var seq__155490 = cljs.core.seq(classes);
var chunk__155491 = null;
var count__155492 = (0);
var i__155493 = (0);
while(true){
if((i__155493 < count__155492)){
var class$ = chunk__155491.cljs$core$IIndexed$_nth$arity$2(null,i__155493);
var fq_class_name_156230 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(package$)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(package$),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''):class$));
if(cljs.core.truth_(sci.impl.interop.resolve_class(ctx,fq_class_name_156230))){
var cnn_156231 = sci.impl.vars.current_ns_name();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(env,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn_156231,new cljs.core.Keyword(null,"imports","imports",-1249933394),class$], null),fq_class_name_156230);
} else {
var temp__5751__auto___156232 = sci.impl.records.resolve_record_class.cljs$core$IFn$_invoke$arity$3(ctx,package$,class$);
if(cljs.core.truth_(temp__5751__auto___156232)){
var rec_156233 = temp__5751__auto___156232;
var cnn_156234 = sci.impl.vars.current_ns_name();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(env,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn_156234,class$], null),rec_156233);
} else {
throw (new Error(["Unable to resolve classname: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fq_class_name_156230)].join('')));
}
}


var G__156235 = seq__155490;
var G__156236 = chunk__155491;
var G__156237 = count__155492;
var G__156238 = (i__155493 + (1));
seq__155490 = G__156235;
chunk__155491 = G__156236;
count__155492 = G__156237;
i__155493 = G__156238;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__155490);
if(temp__5753__auto__){
var seq__155490__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__155490__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__155490__$1);
var G__156239 = cljs.core.chunk_rest(seq__155490__$1);
var G__156240 = c__4649__auto__;
var G__156241 = cljs.core.count(c__4649__auto__);
var G__156242 = (0);
seq__155490 = G__156239;
chunk__155491 = G__156240;
count__155492 = G__156241;
i__155493 = G__156242;
continue;
} else {
var class$ = cljs.core.first(seq__155490__$1);
var fq_class_name_156243 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(package$)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(package$),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''):class$));
if(cljs.core.truth_(sci.impl.interop.resolve_class(ctx,fq_class_name_156243))){
var cnn_156244 = sci.impl.vars.current_ns_name();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(env,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn_156244,new cljs.core.Keyword(null,"imports","imports",-1249933394),class$], null),fq_class_name_156243);
} else {
var temp__5751__auto___156245 = sci.impl.records.resolve_record_class.cljs$core$IFn$_invoke$arity$3(ctx,package$,class$);
if(cljs.core.truth_(temp__5751__auto___156245)){
var rec_156246 = temp__5751__auto___156245;
var cnn_156247 = sci.impl.vars.current_ns_name();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(env,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn_156247,class$], null),rec_156246);
} else {
throw (new Error(["Unable to resolve classname: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fq_class_name_156243)].join('')));
}
}


var G__156248 = cljs.core.next(seq__155490__$1);
var G__156249 = null;
var G__156250 = (0);
var G__156251 = (0);
seq__155490 = G__156248;
chunk__155491 = G__156249;
count__155492 = G__156250;
i__155493 = G__156251;
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
(sci.impl.interpreter.eval_import.cljs$lang$applyTo = (function (seq155473){
var G__155474 = cljs.core.first(seq155473);
var seq155473__$1 = cljs.core.next(seq155473);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__155474,seq155473__$1);
}));

sci.impl.interpreter.eval_set_BANG_ = (function sci$impl$interpreter$eval_set_BANG_(ctx,p__155519){
var vec__155520 = p__155519;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__155520,(0),null);
var obj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__155520,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__155520,(2),null);
var obj__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,obj) : sci.impl.interpreter.interpret.call(null,ctx,obj));
var v__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,v) : sci.impl.interpreter.interpret.call(null,ctx,v));
if(sci.impl.vars.var_QMARK_(obj__$1)){
return sci.impl.types.setVal(obj__$1,v__$1);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Cannot set ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(obj__$1)," to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v__$1)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"obj","obj",981763962),obj__$1,new cljs.core.Keyword(null,"v","v",21465059),v__$1], null));
}
});
sci.impl.interpreter.eval_do_STAR_ = (function sci$impl$interpreter$eval_do_STAR_(ctx,exprs){
var G__155527 = exprs;
var vec__155528 = G__155527;
var seq__155529 = cljs.core.seq(vec__155528);
var first__155530 = cljs.core.first(seq__155529);
var seq__155529__$1 = cljs.core.next(seq__155529);
var expr = first__155530;
var exprs__$1 = seq__155529__$1;
var G__155527__$1 = G__155527;
while(true){
var vec__155531 = G__155527__$1;
var seq__155532 = cljs.core.seq(vec__155531);
var first__155533 = cljs.core.first(seq__155532);
var seq__155532__$1 = cljs.core.next(seq__155532);
var expr__$1 = first__155533;
var exprs__$2 = seq__155532__$1;
var ret = (function (){try{return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,expr__$1) : sci.impl.interpreter.interpret.call(null,ctx,expr__$1));
}catch (e155534){if((e155534 instanceof Error)){
var e = e155534;
return sci.impl.utils.rethrow_with_location_of_node(ctx,e,expr__$1);
} else {
throw e155534;

}
}})();
var temp__5751__auto__ = cljs.core.seq(exprs__$2);
if(temp__5751__auto__){
var exprs__$3 = temp__5751__auto__;
var G__156252 = exprs__$3;
G__155527__$1 = G__156252;
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
var G__155727 = cljs.core.count(args);
switch (G__155727) {
case (0):
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

break;
case (1):
var arg155537 = (function (){var G__155728 = ctx;
var G__155729 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__155728,G__155729) : sci.impl.interpreter.interpret.call(null,G__155728,G__155729));
})();
var args__$1 = cljs.core.rest(args);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(arg155537) : f.call(null,arg155537));

break;
case (2):
var arg155538 = (function (){var G__155730 = ctx;
var G__155731 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__155730,G__155731) : sci.impl.interpreter.interpret.call(null,G__155730,G__155731));
})();
var args__$1 = cljs.core.rest(args);
var arg155539 = (function (){var G__155732 = ctx;
var G__155733 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__155732,G__155733) : sci.impl.interpreter.interpret.call(null,G__155732,G__155733));
})();
var args__$2 = cljs.core.rest(args__$1);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(arg155538,arg155539) : f.call(null,arg155538,arg155539));

break;
case (3):
var arg155540 = (function (){var G__155734 = ctx;
var G__155735 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__155734,G__155735) : sci.impl.interpreter.interpret.call(null,G__155734,G__155735));
})();
var args__$1 = cljs.core.rest(args);
var arg155541 = (function (){var G__155736 = ctx;
var G__155737 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__155736,G__155737) : sci.impl.interpreter.interpret.call(null,G__155736,G__155737));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg155542 = (function (){var G__155738 = ctx;
var G__155739 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__155738,G__155739) : sci.impl.interpreter.interpret.call(null,G__155738,G__155739));
})();
var args__$3 = cljs.core.rest(args__$2);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(arg155540,arg155541,arg155542) : f.call(null,arg155540,arg155541,arg155542));

break;
case (4):
var arg155543 = (function (){var G__155740 = ctx;
var G__155741 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__155740,G__155741) : sci.impl.interpreter.interpret.call(null,G__155740,G__155741));
})();
var args__$1 = cljs.core.rest(args);
var arg155544 = (function (){var G__155742 = ctx;
var G__155743 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__155742,G__155743) : sci.impl.interpreter.interpret.call(null,G__155742,G__155743));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg155545 = (function (){var G__155745 = ctx;
var G__155746 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__155745,G__155746) : sci.impl.interpreter.interpret.call(null,G__155745,G__155746));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg155546 = (function (){var G__155747 = ctx;
var G__155748 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__155747,G__155748) : sci.impl.interpreter.interpret.call(null,G__155747,G__155748));
})();
var args__$4 = cljs.core.rest(args__$3);
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(arg155543,arg155544,arg155545,arg155546) : f.call(null,arg155543,arg155544,arg155545,arg155546));

break;
case (5):
var arg155547 = (function (){var G__155749 = ctx;
var G__155750 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__155749,G__155750) : sci.impl.interpreter.interpret.call(null,G__155749,G__155750));
})();
var args__$1 = cljs.core.rest(args);
var arg155548 = (function (){var G__155751 = ctx;
var G__155752 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__155751,G__155752) : sci.impl.interpreter.interpret.call(null,G__155751,G__155752));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg155549 = (function (){var G__155753 = ctx;
var G__155754 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__155753,G__155754) : sci.impl.interpreter.interpret.call(null,G__155753,G__155754));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg155550 = (function (){var G__155755 = ctx;
var G__155756 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__155755,G__155756) : sci.impl.interpreter.interpret.call(null,G__155755,G__155756));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg155551 = (function (){var G__155757 = ctx;
var G__155758 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__155757,G__155758) : sci.impl.interpreter.interpret.call(null,G__155757,G__155758));
})();
var args__$5 = cljs.core.rest(args__$4);
return (f.cljs$core$IFn$_invoke$arity$5 ? f.cljs$core$IFn$_invoke$arity$5(arg155547,arg155548,arg155549,arg155550,arg155551) : f.call(null,arg155547,arg155548,arg155549,arg155550,arg155551));

break;
case (6):
var arg155552 = (function (){var G__155759 = ctx;
var G__155760 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__155759,G__155760) : sci.impl.interpreter.interpret.call(null,G__155759,G__155760));
})();
var args__$1 = cljs.core.rest(args);
var arg155553 = (function (){var G__155761 = ctx;
var G__155762 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__155761,G__155762) : sci.impl.interpreter.interpret.call(null,G__155761,G__155762));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg155554 = (function (){var G__155763 = ctx;
var G__155764 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__155763,G__155764) : sci.impl.interpreter.interpret.call(null,G__155763,G__155764));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg155555 = (function (){var G__155765 = ctx;
var G__155766 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__155765,G__155766) : sci.impl.interpreter.interpret.call(null,G__155765,G__155766));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg155556 = (function (){var G__155767 = ctx;
var G__155768 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__155767,G__155768) : sci.impl.interpreter.interpret.call(null,G__155767,G__155768));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg155557 = (function (){var G__155769 = ctx;
var G__155770 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__155769,G__155770) : sci.impl.interpreter.interpret.call(null,G__155769,G__155770));
})();
var args__$6 = cljs.core.rest(args__$5);
return (f.cljs$core$IFn$_invoke$arity$6 ? f.cljs$core$IFn$_invoke$arity$6(arg155552,arg155553,arg155554,arg155555,arg155556,arg155557) : f.call(null,arg155552,arg155553,arg155554,arg155555,arg155556,arg155557));

break;
case (7):
var arg155558 = (function (){var G__155771 = ctx;
var G__155772 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__155771,G__155772) : sci.impl.interpreter.interpret.call(null,G__155771,G__155772));
})();
var args__$1 = cljs.core.rest(args);
var arg155559 = (function (){var G__155773 = ctx;
var G__155774 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__155773,G__155774) : sci.impl.interpreter.interpret.call(null,G__155773,G__155774));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg155560 = (function (){var G__155775 = ctx;
var G__155776 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__155775,G__155776) : sci.impl.interpreter.interpret.call(null,G__155775,G__155776));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg155561 = (function (){var G__155777 = ctx;
var G__155778 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__155777,G__155778) : sci.impl.interpreter.interpret.call(null,G__155777,G__155778));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg155562 = (function (){var G__155779 = ctx;
var G__155780 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__155779,G__155780) : sci.impl.interpreter.interpret.call(null,G__155779,G__155780));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg155563 = (function (){var G__155781 = ctx;
var G__155782 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__155781,G__155782) : sci.impl.interpreter.interpret.call(null,G__155781,G__155782));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg155564 = (function (){var G__155783 = ctx;
var G__155784 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__155783,G__155784) : sci.impl.interpreter.interpret.call(null,G__155783,G__155784));
})();
var args__$7 = cljs.core.rest(args__$6);
return (f.cljs$core$IFn$_invoke$arity$7 ? f.cljs$core$IFn$_invoke$arity$7(arg155558,arg155559,arg155560,arg155561,arg155562,arg155563,arg155564) : f.call(null,arg155558,arg155559,arg155560,arg155561,arg155562,arg155563,arg155564));

break;
case (8):
var arg155565 = (function (){var G__155785 = ctx;
var G__155786 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__155785,G__155786) : sci.impl.interpreter.interpret.call(null,G__155785,G__155786));
})();
var args__$1 = cljs.core.rest(args);
var arg155566 = (function (){var G__155787 = ctx;
var G__155788 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__155787,G__155788) : sci.impl.interpreter.interpret.call(null,G__155787,G__155788));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg155567 = (function (){var G__155789 = ctx;
var G__155790 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__155789,G__155790) : sci.impl.interpreter.interpret.call(null,G__155789,G__155790));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg155568 = (function (){var G__155791 = ctx;
var G__155792 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__155791,G__155792) : sci.impl.interpreter.interpret.call(null,G__155791,G__155792));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg155569 = (function (){var G__155793 = ctx;
var G__155794 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__155793,G__155794) : sci.impl.interpreter.interpret.call(null,G__155793,G__155794));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg155570 = (function (){var G__155795 = ctx;
var G__155796 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__155795,G__155796) : sci.impl.interpreter.interpret.call(null,G__155795,G__155796));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg155571 = (function (){var G__155797 = ctx;
var G__155798 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__155797,G__155798) : sci.impl.interpreter.interpret.call(null,G__155797,G__155798));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg155572 = (function (){var G__155799 = ctx;
var G__155800 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__155799,G__155800) : sci.impl.interpreter.interpret.call(null,G__155799,G__155800));
})();
var args__$8 = cljs.core.rest(args__$7);
return (f.cljs$core$IFn$_invoke$arity$8 ? f.cljs$core$IFn$_invoke$arity$8(arg155565,arg155566,arg155567,arg155568,arg155569,arg155570,arg155571,arg155572) : f.call(null,arg155565,arg155566,arg155567,arg155568,arg155569,arg155570,arg155571,arg155572));

break;
case (9):
var arg155573 = (function (){var G__155801 = ctx;
var G__155802 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__155801,G__155802) : sci.impl.interpreter.interpret.call(null,G__155801,G__155802));
})();
var args__$1 = cljs.core.rest(args);
var arg155574 = (function (){var G__155803 = ctx;
var G__155804 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__155803,G__155804) : sci.impl.interpreter.interpret.call(null,G__155803,G__155804));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg155575 = (function (){var G__155805 = ctx;
var G__155806 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__155805,G__155806) : sci.impl.interpreter.interpret.call(null,G__155805,G__155806));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg155576 = (function (){var G__155807 = ctx;
var G__155808 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__155807,G__155808) : sci.impl.interpreter.interpret.call(null,G__155807,G__155808));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg155577 = (function (){var G__155809 = ctx;
var G__155810 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__155809,G__155810) : sci.impl.interpreter.interpret.call(null,G__155809,G__155810));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg155578 = (function (){var G__155811 = ctx;
var G__155812 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__155811,G__155812) : sci.impl.interpreter.interpret.call(null,G__155811,G__155812));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg155579 = (function (){var G__155813 = ctx;
var G__155814 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__155813,G__155814) : sci.impl.interpreter.interpret.call(null,G__155813,G__155814));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg155580 = (function (){var G__155815 = ctx;
var G__155816 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__155815,G__155816) : sci.impl.interpreter.interpret.call(null,G__155815,G__155816));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg155581 = (function (){var G__155817 = ctx;
var G__155818 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__155817,G__155818) : sci.impl.interpreter.interpret.call(null,G__155817,G__155818));
})();
var args__$9 = cljs.core.rest(args__$8);
return (f.cljs$core$IFn$_invoke$arity$9 ? f.cljs$core$IFn$_invoke$arity$9(arg155573,arg155574,arg155575,arg155576,arg155577,arg155578,arg155579,arg155580,arg155581) : f.call(null,arg155573,arg155574,arg155575,arg155576,arg155577,arg155578,arg155579,arg155580,arg155581));

break;
case (10):
var arg155582 = (function (){var G__155819 = ctx;
var G__155820 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__155819,G__155820) : sci.impl.interpreter.interpret.call(null,G__155819,G__155820));
})();
var args__$1 = cljs.core.rest(args);
var arg155583 = (function (){var G__155821 = ctx;
var G__155822 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__155821,G__155822) : sci.impl.interpreter.interpret.call(null,G__155821,G__155822));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg155584 = (function (){var G__155823 = ctx;
var G__155824 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__155823,G__155824) : sci.impl.interpreter.interpret.call(null,G__155823,G__155824));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg155585 = (function (){var G__155825 = ctx;
var G__155826 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__155825,G__155826) : sci.impl.interpreter.interpret.call(null,G__155825,G__155826));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg155586 = (function (){var G__155827 = ctx;
var G__155828 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__155827,G__155828) : sci.impl.interpreter.interpret.call(null,G__155827,G__155828));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg155587 = (function (){var G__155829 = ctx;
var G__155830 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__155829,G__155830) : sci.impl.interpreter.interpret.call(null,G__155829,G__155830));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg155588 = (function (){var G__155831 = ctx;
var G__155832 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__155831,G__155832) : sci.impl.interpreter.interpret.call(null,G__155831,G__155832));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg155589 = (function (){var G__155833 = ctx;
var G__155834 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__155833,G__155834) : sci.impl.interpreter.interpret.call(null,G__155833,G__155834));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg155590 = (function (){var G__155835 = ctx;
var G__155836 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__155835,G__155836) : sci.impl.interpreter.interpret.call(null,G__155835,G__155836));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg155591 = (function (){var G__155837 = ctx;
var G__155838 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__155837,G__155838) : sci.impl.interpreter.interpret.call(null,G__155837,G__155838));
})();
var args__$10 = cljs.core.rest(args__$9);
return (f.cljs$core$IFn$_invoke$arity$10 ? f.cljs$core$IFn$_invoke$arity$10(arg155582,arg155583,arg155584,arg155585,arg155586,arg155587,arg155588,arg155589,arg155590,arg155591) : f.call(null,arg155582,arg155583,arg155584,arg155585,arg155586,arg155587,arg155588,arg155589,arg155590,arg155591));

break;
case (11):
var arg155592 = (function (){var G__155839 = ctx;
var G__155840 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__155839,G__155840) : sci.impl.interpreter.interpret.call(null,G__155839,G__155840));
})();
var args__$1 = cljs.core.rest(args);
var arg155593 = (function (){var G__155841 = ctx;
var G__155842 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__155841,G__155842) : sci.impl.interpreter.interpret.call(null,G__155841,G__155842));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg155594 = (function (){var G__155843 = ctx;
var G__155844 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__155843,G__155844) : sci.impl.interpreter.interpret.call(null,G__155843,G__155844));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg155595 = (function (){var G__155845 = ctx;
var G__155846 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__155845,G__155846) : sci.impl.interpreter.interpret.call(null,G__155845,G__155846));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg155596 = (function (){var G__155847 = ctx;
var G__155848 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__155847,G__155848) : sci.impl.interpreter.interpret.call(null,G__155847,G__155848));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg155597 = (function (){var G__155849 = ctx;
var G__155850 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__155849,G__155850) : sci.impl.interpreter.interpret.call(null,G__155849,G__155850));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg155598 = (function (){var G__155851 = ctx;
var G__155852 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__155851,G__155852) : sci.impl.interpreter.interpret.call(null,G__155851,G__155852));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg155599 = (function (){var G__155853 = ctx;
var G__155854 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__155853,G__155854) : sci.impl.interpreter.interpret.call(null,G__155853,G__155854));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg155600 = (function (){var G__155855 = ctx;
var G__155856 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__155855,G__155856) : sci.impl.interpreter.interpret.call(null,G__155855,G__155856));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg155601 = (function (){var G__155857 = ctx;
var G__155858 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__155857,G__155858) : sci.impl.interpreter.interpret.call(null,G__155857,G__155858));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg155602 = (function (){var G__155859 = ctx;
var G__155860 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__155859,G__155860) : sci.impl.interpreter.interpret.call(null,G__155859,G__155860));
})();
var args__$11 = cljs.core.rest(args__$10);
return (f.cljs$core$IFn$_invoke$arity$11 ? f.cljs$core$IFn$_invoke$arity$11(arg155592,arg155593,arg155594,arg155595,arg155596,arg155597,arg155598,arg155599,arg155600,arg155601,arg155602) : f.call(null,arg155592,arg155593,arg155594,arg155595,arg155596,arg155597,arg155598,arg155599,arg155600,arg155601,arg155602));

break;
case (12):
var arg155603 = (function (){var G__155861 = ctx;
var G__155862 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__155861,G__155862) : sci.impl.interpreter.interpret.call(null,G__155861,G__155862));
})();
var args__$1 = cljs.core.rest(args);
var arg155604 = (function (){var G__155863 = ctx;
var G__155864 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__155863,G__155864) : sci.impl.interpreter.interpret.call(null,G__155863,G__155864));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg155605 = (function (){var G__155865 = ctx;
var G__155866 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__155865,G__155866) : sci.impl.interpreter.interpret.call(null,G__155865,G__155866));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg155606 = (function (){var G__155867 = ctx;
var G__155868 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__155867,G__155868) : sci.impl.interpreter.interpret.call(null,G__155867,G__155868));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg155607 = (function (){var G__155869 = ctx;
var G__155870 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__155869,G__155870) : sci.impl.interpreter.interpret.call(null,G__155869,G__155870));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg155608 = (function (){var G__155871 = ctx;
var G__155872 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__155871,G__155872) : sci.impl.interpreter.interpret.call(null,G__155871,G__155872));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg155609 = (function (){var G__155873 = ctx;
var G__155874 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__155873,G__155874) : sci.impl.interpreter.interpret.call(null,G__155873,G__155874));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg155610 = (function (){var G__155875 = ctx;
var G__155876 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__155875,G__155876) : sci.impl.interpreter.interpret.call(null,G__155875,G__155876));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg155611 = (function (){var G__155877 = ctx;
var G__155878 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__155877,G__155878) : sci.impl.interpreter.interpret.call(null,G__155877,G__155878));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg155612 = (function (){var G__155879 = ctx;
var G__155880 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__155879,G__155880) : sci.impl.interpreter.interpret.call(null,G__155879,G__155880));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg155613 = (function (){var G__155881 = ctx;
var G__155882 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__155881,G__155882) : sci.impl.interpreter.interpret.call(null,G__155881,G__155882));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg155614 = (function (){var G__155883 = ctx;
var G__155884 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__155883,G__155884) : sci.impl.interpreter.interpret.call(null,G__155883,G__155884));
})();
var args__$12 = cljs.core.rest(args__$11);
return (f.cljs$core$IFn$_invoke$arity$12 ? f.cljs$core$IFn$_invoke$arity$12(arg155603,arg155604,arg155605,arg155606,arg155607,arg155608,arg155609,arg155610,arg155611,arg155612,arg155613,arg155614) : f.call(null,arg155603,arg155604,arg155605,arg155606,arg155607,arg155608,arg155609,arg155610,arg155611,arg155612,arg155613,arg155614));

break;
case (13):
var arg155615 = (function (){var G__155885 = ctx;
var G__155886 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__155885,G__155886) : sci.impl.interpreter.interpret.call(null,G__155885,G__155886));
})();
var args__$1 = cljs.core.rest(args);
var arg155616 = (function (){var G__155887 = ctx;
var G__155888 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__155887,G__155888) : sci.impl.interpreter.interpret.call(null,G__155887,G__155888));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg155617 = (function (){var G__155889 = ctx;
var G__155890 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__155889,G__155890) : sci.impl.interpreter.interpret.call(null,G__155889,G__155890));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg155618 = (function (){var G__155891 = ctx;
var G__155892 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__155891,G__155892) : sci.impl.interpreter.interpret.call(null,G__155891,G__155892));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg155619 = (function (){var G__155893 = ctx;
var G__155894 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__155893,G__155894) : sci.impl.interpreter.interpret.call(null,G__155893,G__155894));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg155620 = (function (){var G__155895 = ctx;
var G__155896 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__155895,G__155896) : sci.impl.interpreter.interpret.call(null,G__155895,G__155896));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg155621 = (function (){var G__155897 = ctx;
var G__155898 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__155897,G__155898) : sci.impl.interpreter.interpret.call(null,G__155897,G__155898));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg155622 = (function (){var G__155899 = ctx;
var G__155900 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__155899,G__155900) : sci.impl.interpreter.interpret.call(null,G__155899,G__155900));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg155623 = (function (){var G__155901 = ctx;
var G__155902 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__155901,G__155902) : sci.impl.interpreter.interpret.call(null,G__155901,G__155902));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg155624 = (function (){var G__155903 = ctx;
var G__155904 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__155903,G__155904) : sci.impl.interpreter.interpret.call(null,G__155903,G__155904));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg155625 = (function (){var G__155905 = ctx;
var G__155906 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__155905,G__155906) : sci.impl.interpreter.interpret.call(null,G__155905,G__155906));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg155626 = (function (){var G__155907 = ctx;
var G__155908 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__155907,G__155908) : sci.impl.interpreter.interpret.call(null,G__155907,G__155908));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg155627 = (function (){var G__155909 = ctx;
var G__155910 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__155909,G__155910) : sci.impl.interpreter.interpret.call(null,G__155909,G__155910));
})();
var args__$13 = cljs.core.rest(args__$12);
return (f.cljs$core$IFn$_invoke$arity$13 ? f.cljs$core$IFn$_invoke$arity$13(arg155615,arg155616,arg155617,arg155618,arg155619,arg155620,arg155621,arg155622,arg155623,arg155624,arg155625,arg155626,arg155627) : f.call(null,arg155615,arg155616,arg155617,arg155618,arg155619,arg155620,arg155621,arg155622,arg155623,arg155624,arg155625,arg155626,arg155627));

break;
case (14):
var arg155628 = (function (){var G__155911 = ctx;
var G__155912 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__155911,G__155912) : sci.impl.interpreter.interpret.call(null,G__155911,G__155912));
})();
var args__$1 = cljs.core.rest(args);
var arg155629 = (function (){var G__155913 = ctx;
var G__155914 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__155913,G__155914) : sci.impl.interpreter.interpret.call(null,G__155913,G__155914));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg155630 = (function (){var G__155915 = ctx;
var G__155916 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__155915,G__155916) : sci.impl.interpreter.interpret.call(null,G__155915,G__155916));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg155631 = (function (){var G__155917 = ctx;
var G__155918 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__155917,G__155918) : sci.impl.interpreter.interpret.call(null,G__155917,G__155918));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg155632 = (function (){var G__155919 = ctx;
var G__155920 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__155919,G__155920) : sci.impl.interpreter.interpret.call(null,G__155919,G__155920));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg155633 = (function (){var G__155921 = ctx;
var G__155922 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__155921,G__155922) : sci.impl.interpreter.interpret.call(null,G__155921,G__155922));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg155634 = (function (){var G__155923 = ctx;
var G__155924 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__155923,G__155924) : sci.impl.interpreter.interpret.call(null,G__155923,G__155924));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg155635 = (function (){var G__155925 = ctx;
var G__155926 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__155925,G__155926) : sci.impl.interpreter.interpret.call(null,G__155925,G__155926));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg155636 = (function (){var G__155927 = ctx;
var G__155928 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__155927,G__155928) : sci.impl.interpreter.interpret.call(null,G__155927,G__155928));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg155637 = (function (){var G__155929 = ctx;
var G__155930 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__155929,G__155930) : sci.impl.interpreter.interpret.call(null,G__155929,G__155930));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg155638 = (function (){var G__155931 = ctx;
var G__155932 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__155931,G__155932) : sci.impl.interpreter.interpret.call(null,G__155931,G__155932));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg155639 = (function (){var G__155933 = ctx;
var G__155934 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__155933,G__155934) : sci.impl.interpreter.interpret.call(null,G__155933,G__155934));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg155640 = (function (){var G__155935 = ctx;
var G__155936 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__155935,G__155936) : sci.impl.interpreter.interpret.call(null,G__155935,G__155936));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg155641 = (function (){var G__155937 = ctx;
var G__155938 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__155937,G__155938) : sci.impl.interpreter.interpret.call(null,G__155937,G__155938));
})();
var args__$14 = cljs.core.rest(args__$13);
return (f.cljs$core$IFn$_invoke$arity$14 ? f.cljs$core$IFn$_invoke$arity$14(arg155628,arg155629,arg155630,arg155631,arg155632,arg155633,arg155634,arg155635,arg155636,arg155637,arg155638,arg155639,arg155640,arg155641) : f.call(null,arg155628,arg155629,arg155630,arg155631,arg155632,arg155633,arg155634,arg155635,arg155636,arg155637,arg155638,arg155639,arg155640,arg155641));

break;
case (15):
var arg155642 = (function (){var G__155939 = ctx;
var G__155940 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__155939,G__155940) : sci.impl.interpreter.interpret.call(null,G__155939,G__155940));
})();
var args__$1 = cljs.core.rest(args);
var arg155643 = (function (){var G__155941 = ctx;
var G__155942 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__155941,G__155942) : sci.impl.interpreter.interpret.call(null,G__155941,G__155942));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg155644 = (function (){var G__155943 = ctx;
var G__155944 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__155943,G__155944) : sci.impl.interpreter.interpret.call(null,G__155943,G__155944));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg155645 = (function (){var G__155945 = ctx;
var G__155946 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__155945,G__155946) : sci.impl.interpreter.interpret.call(null,G__155945,G__155946));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg155646 = (function (){var G__155947 = ctx;
var G__155948 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__155947,G__155948) : sci.impl.interpreter.interpret.call(null,G__155947,G__155948));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg155647 = (function (){var G__155949 = ctx;
var G__155950 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__155949,G__155950) : sci.impl.interpreter.interpret.call(null,G__155949,G__155950));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg155648 = (function (){var G__155951 = ctx;
var G__155952 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__155951,G__155952) : sci.impl.interpreter.interpret.call(null,G__155951,G__155952));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg155649 = (function (){var G__155953 = ctx;
var G__155954 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__155953,G__155954) : sci.impl.interpreter.interpret.call(null,G__155953,G__155954));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg155650 = (function (){var G__155955 = ctx;
var G__155956 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__155955,G__155956) : sci.impl.interpreter.interpret.call(null,G__155955,G__155956));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg155651 = (function (){var G__155957 = ctx;
var G__155958 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__155957,G__155958) : sci.impl.interpreter.interpret.call(null,G__155957,G__155958));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg155652 = (function (){var G__155959 = ctx;
var G__155960 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__155959,G__155960) : sci.impl.interpreter.interpret.call(null,G__155959,G__155960));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg155653 = (function (){var G__155961 = ctx;
var G__155962 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__155961,G__155962) : sci.impl.interpreter.interpret.call(null,G__155961,G__155962));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg155654 = (function (){var G__155963 = ctx;
var G__155964 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__155963,G__155964) : sci.impl.interpreter.interpret.call(null,G__155963,G__155964));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg155655 = (function (){var G__155965 = ctx;
var G__155966 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__155965,G__155966) : sci.impl.interpreter.interpret.call(null,G__155965,G__155966));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg155656 = (function (){var G__155967 = ctx;
var G__155968 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__155967,G__155968) : sci.impl.interpreter.interpret.call(null,G__155967,G__155968));
})();
var args__$15 = cljs.core.rest(args__$14);
return (f.cljs$core$IFn$_invoke$arity$15 ? f.cljs$core$IFn$_invoke$arity$15(arg155642,arg155643,arg155644,arg155645,arg155646,arg155647,arg155648,arg155649,arg155650,arg155651,arg155652,arg155653,arg155654,arg155655,arg155656) : f.call(null,arg155642,arg155643,arg155644,arg155645,arg155646,arg155647,arg155648,arg155649,arg155650,arg155651,arg155652,arg155653,arg155654,arg155655,arg155656));

break;
case (16):
var arg155657 = (function (){var G__155969 = ctx;
var G__155970 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__155969,G__155970) : sci.impl.interpreter.interpret.call(null,G__155969,G__155970));
})();
var args__$1 = cljs.core.rest(args);
var arg155658 = (function (){var G__155971 = ctx;
var G__155972 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__155971,G__155972) : sci.impl.interpreter.interpret.call(null,G__155971,G__155972));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg155659 = (function (){var G__155973 = ctx;
var G__155974 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__155973,G__155974) : sci.impl.interpreter.interpret.call(null,G__155973,G__155974));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg155660 = (function (){var G__155975 = ctx;
var G__155976 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__155975,G__155976) : sci.impl.interpreter.interpret.call(null,G__155975,G__155976));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg155661 = (function (){var G__155977 = ctx;
var G__155978 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__155977,G__155978) : sci.impl.interpreter.interpret.call(null,G__155977,G__155978));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg155662 = (function (){var G__155979 = ctx;
var G__155980 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__155979,G__155980) : sci.impl.interpreter.interpret.call(null,G__155979,G__155980));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg155663 = (function (){var G__155981 = ctx;
var G__155982 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__155981,G__155982) : sci.impl.interpreter.interpret.call(null,G__155981,G__155982));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg155664 = (function (){var G__155983 = ctx;
var G__155984 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__155983,G__155984) : sci.impl.interpreter.interpret.call(null,G__155983,G__155984));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg155665 = (function (){var G__155985 = ctx;
var G__155986 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__155985,G__155986) : sci.impl.interpreter.interpret.call(null,G__155985,G__155986));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg155666 = (function (){var G__155987 = ctx;
var G__155988 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__155987,G__155988) : sci.impl.interpreter.interpret.call(null,G__155987,G__155988));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg155667 = (function (){var G__155989 = ctx;
var G__155990 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__155989,G__155990) : sci.impl.interpreter.interpret.call(null,G__155989,G__155990));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg155668 = (function (){var G__155991 = ctx;
var G__155992 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__155991,G__155992) : sci.impl.interpreter.interpret.call(null,G__155991,G__155992));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg155669 = (function (){var G__155993 = ctx;
var G__155994 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__155993,G__155994) : sci.impl.interpreter.interpret.call(null,G__155993,G__155994));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg155670 = (function (){var G__155995 = ctx;
var G__155996 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__155995,G__155996) : sci.impl.interpreter.interpret.call(null,G__155995,G__155996));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg155671 = (function (){var G__155997 = ctx;
var G__155998 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__155997,G__155998) : sci.impl.interpreter.interpret.call(null,G__155997,G__155998));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg155672 = (function (){var G__155999 = ctx;
var G__156000 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__155999,G__156000) : sci.impl.interpreter.interpret.call(null,G__155999,G__156000));
})();
var args__$16 = cljs.core.rest(args__$15);
return (f.cljs$core$IFn$_invoke$arity$16 ? f.cljs$core$IFn$_invoke$arity$16(arg155657,arg155658,arg155659,arg155660,arg155661,arg155662,arg155663,arg155664,arg155665,arg155666,arg155667,arg155668,arg155669,arg155670,arg155671,arg155672) : f.call(null,arg155657,arg155658,arg155659,arg155660,arg155661,arg155662,arg155663,arg155664,arg155665,arg155666,arg155667,arg155668,arg155669,arg155670,arg155671,arg155672));

break;
case (17):
var arg155673 = (function (){var G__156001 = ctx;
var G__156002 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__156001,G__156002) : sci.impl.interpreter.interpret.call(null,G__156001,G__156002));
})();
var args__$1 = cljs.core.rest(args);
var arg155674 = (function (){var G__156003 = ctx;
var G__156004 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__156003,G__156004) : sci.impl.interpreter.interpret.call(null,G__156003,G__156004));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg155675 = (function (){var G__156005 = ctx;
var G__156006 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__156005,G__156006) : sci.impl.interpreter.interpret.call(null,G__156005,G__156006));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg155676 = (function (){var G__156007 = ctx;
var G__156008 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__156007,G__156008) : sci.impl.interpreter.interpret.call(null,G__156007,G__156008));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg155677 = (function (){var G__156009 = ctx;
var G__156010 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__156009,G__156010) : sci.impl.interpreter.interpret.call(null,G__156009,G__156010));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg155678 = (function (){var G__156011 = ctx;
var G__156012 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__156011,G__156012) : sci.impl.interpreter.interpret.call(null,G__156011,G__156012));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg155679 = (function (){var G__156013 = ctx;
var G__156014 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__156013,G__156014) : sci.impl.interpreter.interpret.call(null,G__156013,G__156014));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg155680 = (function (){var G__156015 = ctx;
var G__156016 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__156015,G__156016) : sci.impl.interpreter.interpret.call(null,G__156015,G__156016));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg155681 = (function (){var G__156017 = ctx;
var G__156018 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__156017,G__156018) : sci.impl.interpreter.interpret.call(null,G__156017,G__156018));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg155682 = (function (){var G__156019 = ctx;
var G__156020 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__156019,G__156020) : sci.impl.interpreter.interpret.call(null,G__156019,G__156020));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg155683 = (function (){var G__156021 = ctx;
var G__156022 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__156021,G__156022) : sci.impl.interpreter.interpret.call(null,G__156021,G__156022));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg155684 = (function (){var G__156023 = ctx;
var G__156024 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__156023,G__156024) : sci.impl.interpreter.interpret.call(null,G__156023,G__156024));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg155685 = (function (){var G__156025 = ctx;
var G__156026 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__156025,G__156026) : sci.impl.interpreter.interpret.call(null,G__156025,G__156026));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg155686 = (function (){var G__156027 = ctx;
var G__156028 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__156027,G__156028) : sci.impl.interpreter.interpret.call(null,G__156027,G__156028));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg155687 = (function (){var G__156029 = ctx;
var G__156030 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__156029,G__156030) : sci.impl.interpreter.interpret.call(null,G__156029,G__156030));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg155688 = (function (){var G__156031 = ctx;
var G__156032 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__156031,G__156032) : sci.impl.interpreter.interpret.call(null,G__156031,G__156032));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg155689 = (function (){var G__156033 = ctx;
var G__156034 = cljs.core.first(args__$16);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__156033,G__156034) : sci.impl.interpreter.interpret.call(null,G__156033,G__156034));
})();
var args__$17 = cljs.core.rest(args__$16);
return (f.cljs$core$IFn$_invoke$arity$17 ? f.cljs$core$IFn$_invoke$arity$17(arg155673,arg155674,arg155675,arg155676,arg155677,arg155678,arg155679,arg155680,arg155681,arg155682,arg155683,arg155684,arg155685,arg155686,arg155687,arg155688,arg155689) : f.call(null,arg155673,arg155674,arg155675,arg155676,arg155677,arg155678,arg155679,arg155680,arg155681,arg155682,arg155683,arg155684,arg155685,arg155686,arg155687,arg155688,arg155689));

break;
case (18):
var arg155690 = (function (){var G__156035 = ctx;
var G__156036 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__156035,G__156036) : sci.impl.interpreter.interpret.call(null,G__156035,G__156036));
})();
var args__$1 = cljs.core.rest(args);
var arg155691 = (function (){var G__156037 = ctx;
var G__156038 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__156037,G__156038) : sci.impl.interpreter.interpret.call(null,G__156037,G__156038));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg155692 = (function (){var G__156039 = ctx;
var G__156040 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__156039,G__156040) : sci.impl.interpreter.interpret.call(null,G__156039,G__156040));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg155693 = (function (){var G__156041 = ctx;
var G__156042 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__156041,G__156042) : sci.impl.interpreter.interpret.call(null,G__156041,G__156042));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg155694 = (function (){var G__156043 = ctx;
var G__156044 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__156043,G__156044) : sci.impl.interpreter.interpret.call(null,G__156043,G__156044));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg155695 = (function (){var G__156045 = ctx;
var G__156046 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__156045,G__156046) : sci.impl.interpreter.interpret.call(null,G__156045,G__156046));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg155696 = (function (){var G__156047 = ctx;
var G__156048 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__156047,G__156048) : sci.impl.interpreter.interpret.call(null,G__156047,G__156048));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg155697 = (function (){var G__156049 = ctx;
var G__156050 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__156049,G__156050) : sci.impl.interpreter.interpret.call(null,G__156049,G__156050));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg155698 = (function (){var G__156051 = ctx;
var G__156052 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__156051,G__156052) : sci.impl.interpreter.interpret.call(null,G__156051,G__156052));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg155699 = (function (){var G__156053 = ctx;
var G__156054 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__156053,G__156054) : sci.impl.interpreter.interpret.call(null,G__156053,G__156054));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg155700 = (function (){var G__156055 = ctx;
var G__156056 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__156055,G__156056) : sci.impl.interpreter.interpret.call(null,G__156055,G__156056));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg155701 = (function (){var G__156057 = ctx;
var G__156058 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__156057,G__156058) : sci.impl.interpreter.interpret.call(null,G__156057,G__156058));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg155702 = (function (){var G__156059 = ctx;
var G__156060 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__156059,G__156060) : sci.impl.interpreter.interpret.call(null,G__156059,G__156060));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg155703 = (function (){var G__156061 = ctx;
var G__156062 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__156061,G__156062) : sci.impl.interpreter.interpret.call(null,G__156061,G__156062));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg155704 = (function (){var G__156063 = ctx;
var G__156064 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__156063,G__156064) : sci.impl.interpreter.interpret.call(null,G__156063,G__156064));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg155705 = (function (){var G__156065 = ctx;
var G__156066 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__156065,G__156066) : sci.impl.interpreter.interpret.call(null,G__156065,G__156066));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg155706 = (function (){var G__156067 = ctx;
var G__156068 = cljs.core.first(args__$16);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__156067,G__156068) : sci.impl.interpreter.interpret.call(null,G__156067,G__156068));
})();
var args__$17 = cljs.core.rest(args__$16);
var arg155707 = (function (){var G__156069 = ctx;
var G__156070 = cljs.core.first(args__$17);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__156069,G__156070) : sci.impl.interpreter.interpret.call(null,G__156069,G__156070));
})();
var args__$18 = cljs.core.rest(args__$17);
return (f.cljs$core$IFn$_invoke$arity$18 ? f.cljs$core$IFn$_invoke$arity$18(arg155690,arg155691,arg155692,arg155693,arg155694,arg155695,arg155696,arg155697,arg155698,arg155699,arg155700,arg155701,arg155702,arg155703,arg155704,arg155705,arg155706,arg155707) : f.call(null,arg155690,arg155691,arg155692,arg155693,arg155694,arg155695,arg155696,arg155697,arg155698,arg155699,arg155700,arg155701,arg155702,arg155703,arg155704,arg155705,arg155706,arg155707));

break;
case (19):
var arg155708 = (function (){var G__156071 = ctx;
var G__156072 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__156071,G__156072) : sci.impl.interpreter.interpret.call(null,G__156071,G__156072));
})();
var args__$1 = cljs.core.rest(args);
var arg155709 = (function (){var G__156073 = ctx;
var G__156074 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__156073,G__156074) : sci.impl.interpreter.interpret.call(null,G__156073,G__156074));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg155710 = (function (){var G__156075 = ctx;
var G__156076 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__156075,G__156076) : sci.impl.interpreter.interpret.call(null,G__156075,G__156076));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg155711 = (function (){var G__156077 = ctx;
var G__156078 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__156077,G__156078) : sci.impl.interpreter.interpret.call(null,G__156077,G__156078));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg155712 = (function (){var G__156079 = ctx;
var G__156080 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__156079,G__156080) : sci.impl.interpreter.interpret.call(null,G__156079,G__156080));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg155713 = (function (){var G__156081 = ctx;
var G__156082 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__156081,G__156082) : sci.impl.interpreter.interpret.call(null,G__156081,G__156082));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg155714 = (function (){var G__156083 = ctx;
var G__156084 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__156083,G__156084) : sci.impl.interpreter.interpret.call(null,G__156083,G__156084));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg155715 = (function (){var G__156085 = ctx;
var G__156086 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__156085,G__156086) : sci.impl.interpreter.interpret.call(null,G__156085,G__156086));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg155716 = (function (){var G__156087 = ctx;
var G__156088 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__156087,G__156088) : sci.impl.interpreter.interpret.call(null,G__156087,G__156088));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg155717 = (function (){var G__156089 = ctx;
var G__156090 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__156089,G__156090) : sci.impl.interpreter.interpret.call(null,G__156089,G__156090));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg155718 = (function (){var G__156091 = ctx;
var G__156092 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__156091,G__156092) : sci.impl.interpreter.interpret.call(null,G__156091,G__156092));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg155719 = (function (){var G__156093 = ctx;
var G__156094 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__156093,G__156094) : sci.impl.interpreter.interpret.call(null,G__156093,G__156094));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg155720 = (function (){var G__156095 = ctx;
var G__156096 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__156095,G__156096) : sci.impl.interpreter.interpret.call(null,G__156095,G__156096));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg155721 = (function (){var G__156097 = ctx;
var G__156098 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__156097,G__156098) : sci.impl.interpreter.interpret.call(null,G__156097,G__156098));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg155722 = (function (){var G__156099 = ctx;
var G__156100 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__156099,G__156100) : sci.impl.interpreter.interpret.call(null,G__156099,G__156100));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg155723 = (function (){var G__156101 = ctx;
var G__156102 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__156101,G__156102) : sci.impl.interpreter.interpret.call(null,G__156101,G__156102));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg155724 = (function (){var G__156103 = ctx;
var G__156104 = cljs.core.first(args__$16);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__156103,G__156104) : sci.impl.interpreter.interpret.call(null,G__156103,G__156104));
})();
var args__$17 = cljs.core.rest(args__$16);
var arg155725 = (function (){var G__156105 = ctx;
var G__156106 = cljs.core.first(args__$17);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__156105,G__156106) : sci.impl.interpreter.interpret.call(null,G__156105,G__156106));
})();
var args__$18 = cljs.core.rest(args__$17);
var arg155726 = (function (){var G__156107 = ctx;
var G__156108 = cljs.core.first(args__$18);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__156107,G__156108) : sci.impl.interpreter.interpret.call(null,G__156107,G__156108));
})();
var args__$19 = cljs.core.rest(args__$18);
return (f.cljs$core$IFn$_invoke$arity$19 ? f.cljs$core$IFn$_invoke$arity$19(arg155708,arg155709,arg155710,arg155711,arg155712,arg155713,arg155714,arg155715,arg155716,arg155717,arg155718,arg155719,arg155720,arg155721,arg155722,arg155723,arg155724,arg155725,arg155726) : f.call(null,arg155708,arg155709,arg155710,arg155711,arg155712,arg155713,arg155714,arg155715,arg155716,arg155717,arg155718,arg155719,arg155720,arg155721,arg155722,arg155723,arg155724,arg155725,arg155726));

break;
default:
var args__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__78226_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__78226_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__78226_SHARP_));
}),args);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args__$1);

}
});
sci.impl.interpreter.eval_special_call = (function sci$impl$interpreter$eval_special_call(ctx,f_sym,expr){
var G__156109 = sci.impl.utils.strip_core_ns(f_sym);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,".",".",1975675962,null),G__156109)){
return sci.impl.interpreter.eval_instance_method_invocation(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"and","and",668631710,null),G__156109)){
return sci.impl.interpreter.eval_and(ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"import","import",241030818,null),G__156109)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_import,ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"case","case",-1510733573,null),G__156109)){
return sci.impl.interpreter.eval_case(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"if","if",1181717262,null),G__156109)){
return sci.impl.interpreter.eval_if(ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"do","do",1686842252,null),G__156109)){
return sci.impl.interpreter.eval_do(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"macroexpand","macroexpand",1509933344,null),G__156109)){
return sci.impl.interpreter.macroexpand(ctx,(function (){var G__156110 = ctx;
var G__156111 = cljs.core.second(expr);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__156110,G__156111) : sci.impl.interpreter.interpret.call(null,G__156110,G__156111));
})());
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"def","def",597100991,null),G__156109)){
return sci.impl.interpreter.eval_def(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"let","let",358118826,null),G__156109)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_let,ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"in-ns","in-ns",-2089468466,null),G__156109)){
return sci.impl.interpreter.eval_in_ns(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"use","use",-205850897,null),G__156109)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_use,ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"set!","set!",250714521,null),G__156109)){
return sci.impl.interpreter.eval_set_BANG_(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"recur","recur",1202958259,null),G__156109)){
return sci.impl.interpreter.fn_call(ctx,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(sci.impl.fns.__GT_Recur,cljs.core.vector),cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"require","require",1172530194,null),G__156109)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_require,ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"new","new",-444906321,null),G__156109)){
return sci.impl.interpreter.eval_constructor_invocation(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"macroexpand-1","macroexpand-1",659241329,null),G__156109)){
return sci.impl.interpreter.macroexpand_1(ctx,(function (){var G__156112 = ctx;
var G__156113 = cljs.core.second(expr);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__156112,G__156113) : sci.impl.interpreter.interpret.call(null,G__156112,G__156113));
})());
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"refer","refer",676235974,null),G__156109)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_refer,ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"lazy-seq","lazy-seq",489632906,null),G__156109)){
return (new cljs.core.LazySeq(null,(function (){var G__156114 = ctx;
var G__156115 = cljs.core.second(expr);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__156114,G__156115) : sci.impl.interpreter.interpret.call(null,G__156114,G__156115));
})(),null,null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"throw","throw",595905694,null),G__156109)){
return sci.impl.interpreter.eval_throw(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"try","try",-1273693247,null),G__156109)){
return sci.impl.interpreter.eval_try(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"resolve","resolve",56086045,null),G__156109)){
return sci.impl.interpreter.eval_resolve(ctx,cljs.core.second(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"or","or",1876275696,null),G__156109)){
return sci.impl.interpreter.eval_or(ctx,cljs.core.rest(expr));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__156109)].join('')));

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
}catch (e156116){if((e156116 instanceof Error)){
var e = e156116;
return sci.impl.utils.rethrow_with_location_of_node(ctx,e,expr);
} else {
throw e156116;

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
var ret = ((cljs.core.not(op))?expr:(function (){var G__156129 = op;
var G__156129__$1 = (((G__156129 instanceof cljs.core.Keyword))?G__156129.fqn:null);
switch (G__156129__$1) {
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
return cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__156126_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__156126_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__156126_SHARP_));
}),cljs.core.keys(expr)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__156127_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__156127_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__156127_SHARP_));
}),cljs.core.vals(expr)));
} else {
if(((cljs.core.vector_QMARK_(expr)) || (cljs.core.set_QMARK_(expr)))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.empty(expr),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__156128_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__156128_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__156128_SHARP_));
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
var G__156289 = cljs.core.rest(exprs);
var G__156290 = (function (){var G__156138 = ctx;
var G__156139 = cljs.core.first(exprs);
return (sci.impl.interpreter.eval_form.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.eval_form.cljs$core$IFn$_invoke$arity$2(G__156138,G__156139) : sci.impl.interpreter.eval_form.call(null,G__156138,G__156139));
})();
exprs = G__156289;
ret = G__156290;
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
var G__156293 = ret__$1;
ret = G__156293;
continue;
}
break;
}
}finally {sci.impl.vars.pop_thread_bindings();
}});
sci.impl.interpreter.eval_string = (function sci$impl$interpreter$eval_string(var_args){
var G__156145 = arguments.length;
switch (G__156145) {
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
