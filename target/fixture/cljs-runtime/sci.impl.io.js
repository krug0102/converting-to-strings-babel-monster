goog.provide('sci.impl.io');
sci.impl.io.in$ = (function (){var _STAR_unrestricted_STAR__orig_val__154417 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__154418 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__154418);

try{var G__154422 = sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*in*","*in*",1130010229,null));
sci.impl.vars.unbind(G__154422);

return G__154422;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__154417);
}})();
sci.impl.io.out = (function (){var _STAR_unrestricted_STAR__orig_val__154423 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__154424 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__154424);

try{var G__154425 = sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*out*","*out*",1277591796,null));
sci.impl.vars.unbind(G__154425);

return G__154425;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__154423);
}})();
sci.impl.io.err = (function (){var _STAR_unrestricted_STAR__orig_val__154428 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__154429 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__154429);

try{var G__154430 = sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*err*","*err*",2070937226,null));
sci.impl.vars.unbind(G__154430);

return G__154430;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__154428);
}})();
sci.impl.io.print_meta = sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"*print-meta*","*print-meta*",-919406644,null),false);
sci.impl.io.print_length = sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"*print-length*","*print-length*",-687693654,null),null);
sci.impl.io.print_level = sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"*print-level*","*print-level*",-634488505,null),null);
sci.impl.io.pr = (function sci$impl$io$pr(var_args){
var args__4835__auto__ = [];
var len__4829__auto___154572 = arguments.length;
var i__4830__auto___154573 = (0);
while(true){
if((i__4830__auto___154573 < len__4829__auto___154572)){
args__4835__auto__.push((arguments[i__4830__auto___154573]));

var G__154574 = (i__4830__auto___154573 + (1));
i__4830__auto___154573 = G__154574;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return sci.impl.io.pr.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(sci.impl.io.pr.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__154445 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__154446 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__154447 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_length_STAR__temp_val__154448 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__154449 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__154450 = cljs.core.deref(sci.impl.io.print_meta);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__154448);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__154449);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__154450);

try{return cljs.core.deref(sci.impl.io.out).append(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,objs));
}finally {(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__154447);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__154446);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__154445);
}}));

(sci.impl.io.pr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.pr.cljs$lang$applyTo = (function (seq154431){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq154431));
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
var len__4829__auto___154580 = arguments.length;
var i__4830__auto___154581 = (0);
while(true){
if((i__4830__auto___154581 < len__4829__auto___154580)){
args__4835__auto__.push((arguments[i__4830__auto___154581]));

var G__154582 = (i__4830__auto___154581 + (1));
i__4830__auto___154581 = G__154582;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return sci.impl.io.pr_str.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(sci.impl.io.pr_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__154459 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__154460 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__154461 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_length_STAR__temp_val__154462 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__154463 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__154464 = cljs.core.deref(sci.impl.io.print_meta);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__154462);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__154463);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__154464);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,objs);
}finally {(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__154461);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__154460);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__154459);
}}));

(sci.impl.io.pr_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.pr_str.cljs$lang$applyTo = (function (seq154453){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq154453));
}));

sci.impl.io.prn = (function sci$impl$io$prn(var_args){
var args__4835__auto__ = [];
var len__4829__auto___154583 = arguments.length;
var i__4830__auto___154584 = (0);
while(true){
if((i__4830__auto___154584 < len__4829__auto___154583)){
args__4835__auto__.push((arguments[i__4830__auto___154584]));

var G__154585 = (i__4830__auto___154584 + (1));
i__4830__auto___154584 = G__154585;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return sci.impl.io.prn.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(sci.impl.io.prn.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__154470 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__154471 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__154472 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_length_STAR__temp_val__154473 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__154474 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__154475 = cljs.core.deref(sci.impl.io.print_meta);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__154473);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__154474);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__154475);

try{return cljs.core.deref(sci.impl.io.out).append(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.prn_str,objs));
}finally {(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__154472);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__154471);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__154470);
}}));

(sci.impl.io.prn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.prn.cljs$lang$applyTo = (function (seq154467){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq154467));
}));

/**
 * pr to a string, returning it
 */
sci.impl.io.prn_str = (function sci$impl$io$prn_str(var_args){
var args__4835__auto__ = [];
var len__4829__auto___154590 = arguments.length;
var i__4830__auto___154591 = (0);
while(true){
if((i__4830__auto___154591 < len__4829__auto___154590)){
args__4835__auto__.push((arguments[i__4830__auto___154591]));

var G__154592 = (i__4830__auto___154591 + (1));
i__4830__auto___154591 = G__154592;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return sci.impl.io.prn_str.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(sci.impl.io.prn_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__154483 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__154484 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__154485 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_length_STAR__temp_val__154486 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__154487 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__154488 = cljs.core.deref(sci.impl.io.print_meta);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__154486);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__154487);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__154488);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.prn_str,objs);
}finally {(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__154485);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__154484);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__154483);
}}));

(sci.impl.io.prn_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.prn_str.cljs$lang$applyTo = (function (seq154482){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq154482));
}));

sci.impl.io.print = (function sci$impl$io$print(var_args){
var args__4835__auto__ = [];
var len__4829__auto___154593 = arguments.length;
var i__4830__auto___154594 = (0);
while(true){
if((i__4830__auto___154594 < len__4829__auto___154593)){
args__4835__auto__.push((arguments[i__4830__auto___154594]));

var G__154595 = (i__4830__auto___154594 + (1));
i__4830__auto___154594 = G__154595;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return sci.impl.io.print.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(sci.impl.io.print.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__154507 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__154508 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_length_STAR__temp_val__154509 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__154510 = cljs.core.deref(sci.impl.io.print_level);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__154509);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__154510);

try{return cljs.core.deref(sci.impl.io.out).append(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print_str,objs));
}finally {(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__154508);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__154507);
}}));

(sci.impl.io.print.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.print.cljs$lang$applyTo = (function (seq154501){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq154501));
}));

/**
 * pr to a string, returning it
 */
sci.impl.io.print_str = (function sci$impl$io$print_str(var_args){
var args__4835__auto__ = [];
var len__4829__auto___154600 = arguments.length;
var i__4830__auto___154601 = (0);
while(true){
if((i__4830__auto___154601 < len__4829__auto___154600)){
args__4835__auto__.push((arguments[i__4830__auto___154601]));

var G__154602 = (i__4830__auto___154601 + (1));
i__4830__auto___154601 = G__154602;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return sci.impl.io.print_str.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(sci.impl.io.print_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__154525 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__154526 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__154527 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_length_STAR__temp_val__154528 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__154530 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__154531 = cljs.core.deref(sci.impl.io.print_meta);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__154528);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__154530);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__154531);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print_str,objs);
}finally {(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__154527);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__154526);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__154525);
}}));

(sci.impl.io.print_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.print_str.cljs$lang$applyTo = (function (seq154515){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq154515));
}));

sci.impl.io.println = (function sci$impl$io$println(var_args){
var args__4835__auto__ = [];
var len__4829__auto___154609 = arguments.length;
var i__4830__auto___154610 = (0);
while(true){
if((i__4830__auto___154610 < len__4829__auto___154609)){
args__4835__auto__.push((arguments[i__4830__auto___154610]));

var G__154611 = (i__4830__auto___154610 + (1));
i__4830__auto___154610 = G__154611;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return sci.impl.io.println.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(sci.impl.io.println.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__154545 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__154546 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__154547 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_length_STAR__temp_val__154548 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__154549 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__154550 = cljs.core.deref(sci.impl.io.print_meta);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__154548);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__154549);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__154550);

try{return cljs.core.deref(sci.impl.io.out).append(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.println_str,objs));
}finally {(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__154547);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__154546);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__154545);
}}));

(sci.impl.io.println.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.println.cljs$lang$applyTo = (function (seq154540){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq154540));
}));

sci.impl.io.with_out_str = (function sci$impl$io$with_out_str(var_args){
var args__4835__auto__ = [];
var len__4829__auto___154616 = arguments.length;
var i__4830__auto___154617 = (0);
while(true){
if((i__4830__auto___154617 < len__4829__auto___154616)){
args__4835__auto__.push((arguments[i__4830__auto___154617]));

var G__154618 = (i__4830__auto___154617 + (1));
i__4830__auto___154617 = G__154618;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((2) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((2)),(0),null)):null);
return sci.impl.io.with_out_str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4836__auto__);
});

(sci.impl.io.with_out_str.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"s__154552__auto__","s__154552__auto__",-1119024061,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"goog.string.StringBuffer","goog.string.StringBuffer",-1220229842,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*out*","cljs.core/*out*",-1813565621,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__154552__auto__","s__154552__auto__",-1119024061,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body,(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__154552__auto__","s__154552__auto__",-1119024061,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(sci.impl.io.with_out_str.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.io.with_out_str.cljs$lang$applyTo = (function (seq154553){
var G__154554 = cljs.core.first(seq154553);
var seq154553__$1 = cljs.core.next(seq154553);
var G__154555 = cljs.core.first(seq154553__$1);
var seq154553__$2 = cljs.core.next(seq154553__$1);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__154554,G__154555,seq154553__$2);
}));


//# sourceMappingURL=sci.impl.io.js.map
