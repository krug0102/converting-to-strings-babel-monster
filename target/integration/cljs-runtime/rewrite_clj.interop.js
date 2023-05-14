goog.provide('rewrite_clj.interop');
/**
 * Interop version of string format
 *   Note that there a big differences between Java's format and Google Closure's format - we don't address them.
 *   %d and %s are known to work in both.
 */
rewrite_clj.interop.simple_format = (function rewrite_clj$interop$simple_format(var_args){
var args__4835__auto__ = [];
var len__4829__auto___56503 = arguments.length;
var i__4830__auto___56504 = (0);
while(true){
if((i__4830__auto___56504 < len__4829__auto___56503)){
args__4835__auto__.push((arguments[i__4830__auto___56504]));

var G__56505 = (i__4830__auto___56504 + (1));
i__4830__auto___56504 = G__56505;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return rewrite_clj.interop.simple_format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(rewrite_clj.interop.simple_format.cljs$core$IFn$_invoke$arity$variadic = (function (template,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.string.format,template,args);
}));

(rewrite_clj.interop.simple_format.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(rewrite_clj.interop.simple_format.cljs$lang$applyTo = (function (seq56500){
var G__56501 = cljs.core.first(seq56500);
var seq56500__$1 = cljs.core.next(seq56500);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56501,seq56500__$1);
}));

rewrite_clj.interop.str__GT_int = (function rewrite_clj$interop$str__GT_int(s){
return parseInt(s);
});
rewrite_clj.interop.int__GT_str = (function rewrite_clj$interop$int__GT_str(n,base){
return n.toString(base);
});
rewrite_clj.interop.min_int = (function rewrite_clj$interop$min_int(){
return Number.MIN_SAFE_INTEGER;
});
rewrite_clj.interop.max_int = (function rewrite_clj$interop$max_int(){
return Number.MAX_SAFE_INTEGER;
});
rewrite_clj.interop.clojure_whitespace_QMARK_ = (function rewrite_clj$interop$clojure_whitespace_QMARK_(c){
var and__4221__auto__ = c;
if(cljs.core.truth_(and__4221__auto__)){
return ((-1) < ["\r","\n","\t"," ",","].indexOf(c));
} else {
return and__4221__auto__;
}
});
rewrite_clj.interop.meta_available_QMARK_ = (function rewrite_clj$interop$meta_available_QMARK_(data){
if((!((data == null)))){
if((((data.cljs$lang$protocol_mask$partition0$ & (262144))) || ((cljs.core.PROTOCOL_SENTINEL === data.cljs$core$IWithMeta$)))){
return true;
} else {
return false;
}
} else {
return false;
}
});

//# sourceMappingURL=rewrite_clj.interop.js.map
