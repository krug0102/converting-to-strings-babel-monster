goog.provide('sci.impl.io');
sci.impl.io.in$ = (function (){var _STAR_unrestricted_STAR__orig_val__71133 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__71134 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__71134);

try{var G__71135 = sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*in*","*in*",1130010229,null));
sci.impl.vars.unbind(G__71135);

return G__71135;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__71133);
}})();
sci.impl.io.out = (function (){var _STAR_unrestricted_STAR__orig_val__71138 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__71139 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__71139);

try{var G__71140 = sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*out*","*out*",1277591796,null));
sci.impl.vars.unbind(G__71140);

return G__71140;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__71138);
}})();
sci.impl.io.err = (function (){var _STAR_unrestricted_STAR__orig_val__71141 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__71142 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__71142);

try{var G__71143 = sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*err*","*err*",2070937226,null));
sci.impl.vars.unbind(G__71143);

return G__71143;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__71141);
}})();
sci.impl.io.print_meta = sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"*print-meta*","*print-meta*",-919406644,null),false);
sci.impl.io.print_length = sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"*print-length*","*print-length*",-687693654,null),null);
sci.impl.io.print_level = sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"*print-level*","*print-level*",-634488505,null),null);
sci.impl.io.pr = (function sci$impl$io$pr(var_args){
var args__4835__auto__ = [];
var len__4829__auto___71312 = arguments.length;
var i__4830__auto___71313 = (0);
while(true){
if((i__4830__auto___71313 < len__4829__auto___71312)){
args__4835__auto__.push((arguments[i__4830__auto___71313]));

var G__71314 = (i__4830__auto___71313 + (1));
i__4830__auto___71313 = G__71314;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return sci.impl.io.pr.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(sci.impl.io.pr.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__71153 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__71154 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__71155 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_length_STAR__temp_val__71156 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__71157 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__71158 = cljs.core.deref(sci.impl.io.print_meta);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__71156);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__71157);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__71158);

try{return cljs.core.deref(sci.impl.io.out).append(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,objs));
}finally {(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__71155);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__71154);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__71153);
}}));

(sci.impl.io.pr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.pr.cljs$lang$applyTo = (function (seq71148){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq71148));
}));

sci.impl.io.flush = (function sci$impl$io$flush(){
return null;
});
sci.impl.io.newline = (function sci$impl$io$newline(){
return (sci.impl.io.println.cljs$core$IFn$_invoke$arity$0 ? sci.impl.io.println.cljs$core$IFn$_invoke$arity$0() : sci.impl.io.println.call(null));
});
/**
 * pr to a string, returning it
 */
sci.impl.io.pr_str = (function sci$impl$io$pr_str(var_args){
var args__4835__auto__ = [];
var len__4829__auto___71317 = arguments.length;
var i__4830__auto___71318 = (0);
while(true){
if((i__4830__auto___71318 < len__4829__auto___71317)){
args__4835__auto__.push((arguments[i__4830__auto___71318]));

var G__71319 = (i__4830__auto___71318 + (1));
i__4830__auto___71318 = G__71319;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return sci.impl.io.pr_str.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(sci.impl.io.pr_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__71174 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__71175 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__71176 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_length_STAR__temp_val__71177 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__71178 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__71179 = cljs.core.deref(sci.impl.io.print_meta);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__71177);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__71178);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__71179);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,objs);
}finally {(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__71176);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__71175);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__71174);
}}));

(sci.impl.io.pr_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.pr_str.cljs$lang$applyTo = (function (seq71168){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq71168));
}));

sci.impl.io.prn = (function sci$impl$io$prn(var_args){
var args__4835__auto__ = [];
var len__4829__auto___71322 = arguments.length;
var i__4830__auto___71323 = (0);
while(true){
if((i__4830__auto___71323 < len__4829__auto___71322)){
args__4835__auto__.push((arguments[i__4830__auto___71323]));

var G__71324 = (i__4830__auto___71323 + (1));
i__4830__auto___71323 = G__71324;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return sci.impl.io.prn.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(sci.impl.io.prn.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__71190 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__71191 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__71192 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_length_STAR__temp_val__71193 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__71194 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__71195 = cljs.core.deref(sci.impl.io.print_meta);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__71193);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__71194);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__71195);

try{return cljs.core.deref(sci.impl.io.out).append(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.prn_str,objs));
}finally {(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__71192);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__71191);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__71190);
}}));

(sci.impl.io.prn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.prn.cljs$lang$applyTo = (function (seq71186){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq71186));
}));

/**
 * pr to a string, returning it
 */
sci.impl.io.prn_str = (function sci$impl$io$prn_str(var_args){
var args__4835__auto__ = [];
var len__4829__auto___71327 = arguments.length;
var i__4830__auto___71329 = (0);
while(true){
if((i__4830__auto___71329 < len__4829__auto___71327)){
args__4835__auto__.push((arguments[i__4830__auto___71329]));

var G__71330 = (i__4830__auto___71329 + (1));
i__4830__auto___71329 = G__71330;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return sci.impl.io.prn_str.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(sci.impl.io.prn_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__71203 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__71204 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__71205 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_length_STAR__temp_val__71206 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__71207 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__71208 = cljs.core.deref(sci.impl.io.print_meta);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__71206);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__71207);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__71208);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.prn_str,objs);
}finally {(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__71205);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__71204);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__71203);
}}));

(sci.impl.io.prn_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.prn_str.cljs$lang$applyTo = (function (seq71199){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq71199));
}));

sci.impl.io.print = (function sci$impl$io$print(var_args){
var args__4835__auto__ = [];
var len__4829__auto___71338 = arguments.length;
var i__4830__auto___71339 = (0);
while(true){
if((i__4830__auto___71339 < len__4829__auto___71338)){
args__4835__auto__.push((arguments[i__4830__auto___71339]));

var G__71340 = (i__4830__auto___71339 + (1));
i__4830__auto___71339 = G__71340;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return sci.impl.io.print.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(sci.impl.io.print.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__71239 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__71240 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_length_STAR__temp_val__71241 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__71242 = cljs.core.deref(sci.impl.io.print_level);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__71241);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__71242);

try{return cljs.core.deref(sci.impl.io.out).append(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print_str,objs));
}finally {(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__71240);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__71239);
}}));

(sci.impl.io.print.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.print.cljs$lang$applyTo = (function (seq71213){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq71213));
}));

/**
 * pr to a string, returning it
 */
sci.impl.io.print_str = (function sci$impl$io$print_str(var_args){
var args__4835__auto__ = [];
var len__4829__auto___71345 = arguments.length;
var i__4830__auto___71346 = (0);
while(true){
if((i__4830__auto___71346 < len__4829__auto___71345)){
args__4835__auto__.push((arguments[i__4830__auto___71346]));

var G__71347 = (i__4830__auto___71346 + (1));
i__4830__auto___71346 = G__71347;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return sci.impl.io.print_str.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(sci.impl.io.print_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__71251 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__71252 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__71253 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_length_STAR__temp_val__71254 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__71255 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__71256 = cljs.core.deref(sci.impl.io.print_meta);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__71254);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__71255);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__71256);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print_str,objs);
}finally {(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__71253);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__71252);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__71251);
}}));

(sci.impl.io.print_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.print_str.cljs$lang$applyTo = (function (seq71246){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq71246));
}));

sci.impl.io.println = (function sci$impl$io$println(var_args){
var args__4835__auto__ = [];
var len__4829__auto___71355 = arguments.length;
var i__4830__auto___71357 = (0);
while(true){
if((i__4830__auto___71357 < len__4829__auto___71355)){
args__4835__auto__.push((arguments[i__4830__auto___71357]));

var G__71359 = (i__4830__auto___71357 + (1));
i__4830__auto___71357 = G__71359;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return sci.impl.io.println.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(sci.impl.io.println.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__71265 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__71266 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__71267 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_length_STAR__temp_val__71268 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__71269 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__71270 = cljs.core.deref(sci.impl.io.print_meta);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__71268);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__71269);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__71270);

try{return cljs.core.deref(sci.impl.io.out).append(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.println_str,objs));
}finally {(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__71267);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__71266);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__71265);
}}));

(sci.impl.io.println.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.println.cljs$lang$applyTo = (function (seq71261){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq71261));
}));

sci.impl.io.with_out_str = (function sci$impl$io$with_out_str(var_args){
var args__4835__auto__ = [];
var len__4829__auto___71363 = arguments.length;
var i__4830__auto___71364 = (0);
while(true){
if((i__4830__auto___71364 < len__4829__auto___71363)){
args__4835__auto__.push((arguments[i__4830__auto___71364]));

var G__71365 = (i__4830__auto___71364 + (1));
i__4830__auto___71364 = G__71365;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((2) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((2)),(0),null)):null);
return sci.impl.io.with_out_str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4836__auto__);
});

(sci.impl.io.with_out_str.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"s__71280__auto__","s__71280__auto__",350485702,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"goog.string.StringBuffer","goog.string.StringBuffer",-1220229842,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*out*","cljs.core/*out*",-1813565621,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__71280__auto__","s__71280__auto__",350485702,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body,(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__71280__auto__","s__71280__auto__",350485702,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(sci.impl.io.with_out_str.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.io.with_out_str.cljs$lang$applyTo = (function (seq71284){
var G__71285 = cljs.core.first(seq71284);
var seq71284__$1 = cljs.core.next(seq71284);
var G__71286 = cljs.core.first(seq71284__$1);
var seq71284__$2 = cljs.core.next(seq71284__$1);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__71285,G__71286,seq71284__$2);
}));


//# sourceMappingURL=sci.impl.io.js.map
