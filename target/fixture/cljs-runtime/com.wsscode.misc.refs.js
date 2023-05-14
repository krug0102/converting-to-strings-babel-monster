goog.provide('com.wsscode.misc.refs');
/**
 * Clojure/Clojurescript efficient keyword comparison.
 */
com.wsscode.misc.refs.kw_identical_QMARK_ = (function com$wsscode$misc$refs$kw_identical_QMARK_(kw_a,kw_b){
return cljs.core.keyword_identical_QMARK_(kw_a,kw_b);
});
/**
 * Check if x is an atom.
 */
com.wsscode.misc.refs.atom_QMARK_ = (function com$wsscode$misc$refs$atom_QMARK_(x){
if((!((x == null)))){
if((((x.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IDeref$)))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x);
}
});

/**
 * @interface
 */
com.wsscode.misc.refs.GenericBox = function(){};

var com$wsscode$misc$refs$GenericBox$_greset_BANG_$dyn_157604 = (function (this$,value){
var x__4521__auto__ = (((this$ == null))?null:this$);
var m__4522__auto__ = (com.wsscode.misc.refs._greset_BANG_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(this$,value) : m__4522__auto__.call(null,this$,value));
} else {
var m__4519__auto__ = (com.wsscode.misc.refs._greset_BANG_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(this$,value) : m__4519__auto__.call(null,this$,value));
} else {
throw cljs.core.missing_protocol("GenericBox.-greset!",this$);
}
}
});
com.wsscode.misc.refs._greset_BANG_ = (function com$wsscode$misc$refs$_greset_BANG_(this$,value){
if((((!((this$ == null)))) && ((!((this$.com$wsscode$misc$refs$GenericBox$_greset_BANG_$arity$2 == null)))))){
return this$.com$wsscode$misc$refs$GenericBox$_greset_BANG_$arity$2(this$,value);
} else {
return com$wsscode$misc$refs$GenericBox$_greset_BANG_$dyn_157604(this$,value);
}
});

var com$wsscode$misc$refs$GenericBox$_gswap_BANG_$dyn_157607 = (function() {
var G__157608 = null;
var G__157608__2 = (function (this$,f){
var x__4521__auto__ = (((this$ == null))?null:this$);
var m__4522__auto__ = (com.wsscode.misc.refs._gswap_BANG_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(this$,f) : m__4522__auto__.call(null,this$,f));
} else {
var m__4519__auto__ = (com.wsscode.misc.refs._gswap_BANG_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(this$,f) : m__4519__auto__.call(null,this$,f));
} else {
throw cljs.core.missing_protocol("GenericBox.-gswap!",this$);
}
}
});
var G__157608__3 = (function (this$,f,x){
var x__4521__auto__ = (((this$ == null))?null:this$);
var m__4522__auto__ = (com.wsscode.misc.refs._gswap_BANG_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$3(this$,f,x) : m__4522__auto__.call(null,this$,f,x));
} else {
var m__4519__auto__ = (com.wsscode.misc.refs._gswap_BANG_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$3(this$,f,x) : m__4519__auto__.call(null,this$,f,x));
} else {
throw cljs.core.missing_protocol("GenericBox.-gswap!",this$);
}
}
});
var G__157608__4 = (function (this$,f,x,y){
var x__4521__auto__ = (((this$ == null))?null:this$);
var m__4522__auto__ = (com.wsscode.misc.refs._gswap_BANG_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$4(this$,f,x,y) : m__4522__auto__.call(null,this$,f,x,y));
} else {
var m__4519__auto__ = (com.wsscode.misc.refs._gswap_BANG_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$4(this$,f,x,y) : m__4519__auto__.call(null,this$,f,x,y));
} else {
throw cljs.core.missing_protocol("GenericBox.-gswap!",this$);
}
}
});
var G__157608__5 = (function (this$,f,x,y,more){
var x__4521__auto__ = (((this$ == null))?null:this$);
var m__4522__auto__ = (com.wsscode.misc.refs._gswap_BANG_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$5 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$5(this$,f,x,y,more) : m__4522__auto__.call(null,this$,f,x,y,more));
} else {
var m__4519__auto__ = (com.wsscode.misc.refs._gswap_BANG_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$5 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$5(this$,f,x,y,more) : m__4519__auto__.call(null,this$,f,x,y,more));
} else {
throw cljs.core.missing_protocol("GenericBox.-gswap!",this$);
}
}
});
G__157608 = function(this$,f,x,y,more){
switch(arguments.length){
case 2:
return G__157608__2.call(this,this$,f);
case 3:
return G__157608__3.call(this,this$,f,x);
case 4:
return G__157608__4.call(this,this$,f,x,y);
case 5:
return G__157608__5.call(this,this$,f,x,y,more);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__157608.cljs$core$IFn$_invoke$arity$2 = G__157608__2;
G__157608.cljs$core$IFn$_invoke$arity$3 = G__157608__3;
G__157608.cljs$core$IFn$_invoke$arity$4 = G__157608__4;
G__157608.cljs$core$IFn$_invoke$arity$5 = G__157608__5;
return G__157608;
})()
;
com.wsscode.misc.refs._gswap_BANG_ = (function com$wsscode$misc$refs$_gswap_BANG_(var_args){
var G__157580 = arguments.length;
switch (G__157580) {
case 2:
return com.wsscode.misc.refs._gswap_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.wsscode.misc.refs._gswap_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return com.wsscode.misc.refs._gswap_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return com.wsscode.misc.refs._gswap_BANG_.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.wsscode.misc.refs._gswap_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,f){
if((((!((this$ == null)))) && ((!((this$.com$wsscode$misc$refs$GenericBox$_gswap_BANG_$arity$2 == null)))))){
return this$.com$wsscode$misc$refs$GenericBox$_gswap_BANG_$arity$2(this$,f);
} else {
return com$wsscode$misc$refs$GenericBox$_gswap_BANG_$dyn_157607(this$,f);
}
}));

(com.wsscode.misc.refs._gswap_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (this$,f,x){
if((((!((this$ == null)))) && ((!((this$.com$wsscode$misc$refs$GenericBox$_gswap_BANG_$arity$3 == null)))))){
return this$.com$wsscode$misc$refs$GenericBox$_gswap_BANG_$arity$3(this$,f,x);
} else {
return com$wsscode$misc$refs$GenericBox$_gswap_BANG_$dyn_157607(this$,f,x);
}
}));

(com.wsscode.misc.refs._gswap_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (this$,f,x,y){
if((((!((this$ == null)))) && ((!((this$.com$wsscode$misc$refs$GenericBox$_gswap_BANG_$arity$4 == null)))))){
return this$.com$wsscode$misc$refs$GenericBox$_gswap_BANG_$arity$4(this$,f,x,y);
} else {
return com$wsscode$misc$refs$GenericBox$_gswap_BANG_$dyn_157607(this$,f,x,y);
}
}));

(com.wsscode.misc.refs._gswap_BANG_.cljs$core$IFn$_invoke$arity$5 = (function (this$,f,x,y,more){
if((((!((this$ == null)))) && ((!((this$.com$wsscode$misc$refs$GenericBox$_gswap_BANG_$arity$5 == null)))))){
return this$.com$wsscode$misc$refs$GenericBox$_gswap_BANG_$arity$5(this$,f,x,y,more);
} else {
return com$wsscode$misc$refs$GenericBox$_gswap_BANG_$dyn_157607(this$,f,x,y,more);
}
}));

(com.wsscode.misc.refs._gswap_BANG_.cljs$lang$maxFixedArity = 5);


(cljs.core.Atom.prototype.com$wsscode$misc$refs$GenericBox$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Atom.prototype.com$wsscode$misc$refs$GenericBox$_greset_BANG_$arity$2 = (function (this$,value){
var this$__$1 = this;
return cljs.core.reset_BANG_(this$__$1,value);
}));

(cljs.core.Atom.prototype.com$wsscode$misc$refs$GenericBox$_gswap_BANG_$arity$2 = (function (this$,f){
var this$__$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(this$__$1,f);
}));

(cljs.core.Atom.prototype.com$wsscode$misc$refs$GenericBox$_gswap_BANG_$arity$3 = (function (this$,f,x){
var this$__$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(this$__$1,f,x);
}));

(cljs.core.Atom.prototype.com$wsscode$misc$refs$GenericBox$_gswap_BANG_$arity$4 = (function (this$,f,x,y){
var this$__$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(this$__$1,f,x,y);
}));

(cljs.core.Atom.prototype.com$wsscode$misc$refs$GenericBox$_gswap_BANG_$arity$5 = (function (this$,f,x,y,more){
var this$__$1 = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(cljs.core.swap_BANG_,this$__$1,f,x,y,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([more], 0));
}));

(cljs.core.Volatile.prototype.com$wsscode$misc$refs$GenericBox$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Volatile.prototype.com$wsscode$misc$refs$GenericBox$_greset_BANG_$arity$2 = (function (this$,value){
var this$__$1 = this;
return cljs.core.vreset_BANG_(this$__$1,value);
}));

(cljs.core.Volatile.prototype.com$wsscode$misc$refs$GenericBox$_gswap_BANG_$arity$2 = (function (this$,f){
var this$__$1 = this;
return this$__$1.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,(function (){var G__157586 = this$__$1.cljs$core$IDeref$_deref$arity$1(null);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__157586) : f.call(null,G__157586));
})());
}));

(cljs.core.Volatile.prototype.com$wsscode$misc$refs$GenericBox$_gswap_BANG_$arity$3 = (function (this$,f,x){
var this$__$1 = this;
return this$__$1.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,(function (){var G__157591 = this$__$1.cljs$core$IDeref$_deref$arity$1(null);
var G__157592 = x;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__157591,G__157592) : f.call(null,G__157591,G__157592));
})());
}));

(cljs.core.Volatile.prototype.com$wsscode$misc$refs$GenericBox$_gswap_BANG_$arity$4 = (function (this$,f,x,y){
var this$__$1 = this;
return this$__$1.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,(function (){var G__157593 = this$__$1.cljs$core$IDeref$_deref$arity$1(null);
var G__157594 = x;
var G__157595 = y;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__157593,G__157594,G__157595) : f.call(null,G__157593,G__157594,G__157595));
})());
}));

(cljs.core.Volatile.prototype.com$wsscode$misc$refs$GenericBox$_gswap_BANG_$arity$5 = (function (this$,f,x,y,more){
var this$__$1 = this;
return cljs.core.vreset_BANG_(this$__$1,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,cljs.core.deref(this$__$1),x,y,more));
}));
com.wsscode.misc.refs.greset_BANG_ = (function com$wsscode$misc$refs$greset_BANG_(this$,val){
return com.wsscode.misc.refs._greset_BANG_(this$,val);
});
com.wsscode.misc.refs.gswap_BANG_ = (function com$wsscode$misc$refs$gswap_BANG_(var_args){
var G__157602 = arguments.length;
switch (G__157602) {
case 2:
return com.wsscode.misc.refs.gswap_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.wsscode.misc.refs.gswap_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return com.wsscode.misc.refs.gswap_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__4850__auto__ = [];
var len__4829__auto___157621 = arguments.length;
var i__4830__auto___157622 = (0);
while(true){
if((i__4830__auto___157622 < len__4829__auto___157621)){
args_arr__4850__auto__.push((arguments[i__4830__auto___157622]));

var G__157623 = (i__4830__auto___157622 + (1));
i__4830__auto___157622 = G__157623;
continue;
} else {
}
break;
}

var argseq__4851__auto__ = (new cljs.core.IndexedSeq(args_arr__4850__auto__.slice((4)),(0),null));
return com.wsscode.misc.refs.gswap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4851__auto__);

}
});

(com.wsscode.misc.refs.gswap_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,f){
return com.wsscode.misc.refs._gswap_BANG_(this$,f);
}));

(com.wsscode.misc.refs.gswap_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (this$,f,x){
return com.wsscode.misc.refs._gswap_BANG_(this$,f,x);
}));

(com.wsscode.misc.refs.gswap_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (this$,f,x,y){
return com.wsscode.misc.refs._gswap_BANG_(this$,f,x,y);
}));

(com.wsscode.misc.refs.gswap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,f,x,y,more){
return com.wsscode.misc.refs._gswap_BANG_(this$,f,x,y,more);
}));

/** @this {Function} */
(com.wsscode.misc.refs.gswap_BANG_.cljs$lang$applyTo = (function (seq157597){
var G__157598 = cljs.core.first(seq157597);
var seq157597__$1 = cljs.core.next(seq157597);
var G__157599 = cljs.core.first(seq157597__$1);
var seq157597__$2 = cljs.core.next(seq157597__$1);
var G__157600 = cljs.core.first(seq157597__$2);
var seq157597__$3 = cljs.core.next(seq157597__$2);
var G__157601 = cljs.core.first(seq157597__$3);
var seq157597__$4 = cljs.core.next(seq157597__$3);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__157598,G__157599,G__157600,G__157601,seq157597__$4);
}));

(com.wsscode.misc.refs.gswap_BANG_.cljs$lang$maxFixedArity = (4));


//# sourceMappingURL=com.wsscode.misc.refs.js.map
