goog.provide('borkdude.dynaload');

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IDeref}
*/
borkdude.dynaload.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32769;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(borkdude.dynaload.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((!((self__.cached == null)))){
return self__.cached;
} else {
var x = (self__.f.cljs$core$IFn$_invoke$arity$0 ? self__.f.cljs$core$IFn$_invoke$arity$0() : self__.f.call(null));
if((x == null)){
} else {
(self__.cached = x);
}

return x;
}
}));

(borkdude.dynaload.LazyVar.prototype.call = (function() {
var G__159083 = null;
var G__159083__1 = (function (self__){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
var fexpr__159025 = cljs.core.deref(this$);
return (fexpr__159025.cljs$core$IFn$_invoke$arity$0 ? fexpr__159025.cljs$core$IFn$_invoke$arity$0() : fexpr__159025.call(null));
});
var G__159083__2 = (function (self__,a){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
var fexpr__159026 = cljs.core.deref(this$);
return (fexpr__159026.cljs$core$IFn$_invoke$arity$1 ? fexpr__159026.cljs$core$IFn$_invoke$arity$1(a) : fexpr__159026.call(null,a));
});
var G__159083__3 = (function (self__,a,b){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
var fexpr__159027 = cljs.core.deref(this$);
return (fexpr__159027.cljs$core$IFn$_invoke$arity$2 ? fexpr__159027.cljs$core$IFn$_invoke$arity$2(a,b) : fexpr__159027.call(null,a,b));
});
var G__159083__4 = (function (self__,a,b,c){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
var fexpr__159028 = cljs.core.deref(this$);
return (fexpr__159028.cljs$core$IFn$_invoke$arity$3 ? fexpr__159028.cljs$core$IFn$_invoke$arity$3(a,b,c) : fexpr__159028.call(null,a,b,c));
});
var G__159083__5 = (function (self__,a,b,c,d){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
var fexpr__159029 = cljs.core.deref(this$);
return (fexpr__159029.cljs$core$IFn$_invoke$arity$4 ? fexpr__159029.cljs$core$IFn$_invoke$arity$4(a,b,c,d) : fexpr__159029.call(null,a,b,c,d));
});
var G__159083__6 = (function (self__,a,b,c,d,e){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
var fexpr__159030 = cljs.core.deref(this$);
return (fexpr__159030.cljs$core$IFn$_invoke$arity$5 ? fexpr__159030.cljs$core$IFn$_invoke$arity$5(a,b,c,d,e) : fexpr__159030.call(null,a,b,c,d,e));
});
var G__159083__7 = (function (self__,a,b,c,d,e,f__$1){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
var fexpr__159031 = cljs.core.deref(this$);
return (fexpr__159031.cljs$core$IFn$_invoke$arity$6 ? fexpr__159031.cljs$core$IFn$_invoke$arity$6(a,b,c,d,e,f__$1) : fexpr__159031.call(null,a,b,c,d,e,f__$1));
});
var G__159083__8 = (function (self__,a,b,c,d,e,f__$1,g){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
var fexpr__159032 = cljs.core.deref(this$);
return (fexpr__159032.cljs$core$IFn$_invoke$arity$7 ? fexpr__159032.cljs$core$IFn$_invoke$arity$7(a,b,c,d,e,f__$1,g) : fexpr__159032.call(null,a,b,c,d,e,f__$1,g));
});
var G__159083__9 = (function (self__,a,b,c,d,e,f__$1,g,h){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
var fexpr__159033 = cljs.core.deref(this$);
return (fexpr__159033.cljs$core$IFn$_invoke$arity$8 ? fexpr__159033.cljs$core$IFn$_invoke$arity$8(a,b,c,d,e,f__$1,g,h) : fexpr__159033.call(null,a,b,c,d,e,f__$1,g,h));
});
var G__159083__10 = (function (self__,a,b,c,d,e,f__$1,g,h,i){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
var fexpr__159034 = cljs.core.deref(this$);
return (fexpr__159034.cljs$core$IFn$_invoke$arity$9 ? fexpr__159034.cljs$core$IFn$_invoke$arity$9(a,b,c,d,e,f__$1,g,h,i) : fexpr__159034.call(null,a,b,c,d,e,f__$1,g,h,i));
});
var G__159083__11 = (function (self__,a,b,c,d,e,f__$1,g,h,i,j){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
var fexpr__159035 = cljs.core.deref(this$);
return (fexpr__159035.cljs$core$IFn$_invoke$arity$10 ? fexpr__159035.cljs$core$IFn$_invoke$arity$10(a,b,c,d,e,f__$1,g,h,i,j) : fexpr__159035.call(null,a,b,c,d,e,f__$1,g,h,i,j));
});
var G__159083__12 = (function (self__,a,b,c,d,e,f__$1,g,h,i,j,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
var fexpr__159036 = cljs.core.deref(this$);
return (fexpr__159036.cljs$core$IFn$_invoke$arity$11 ? fexpr__159036.cljs$core$IFn$_invoke$arity$11(a,b,c,d,e,f__$1,g,h,i,j,k) : fexpr__159036.call(null,a,b,c,d,e,f__$1,g,h,i,j,k));
});
var G__159083__13 = (function (self__,a,b,c,d,e,f__$1,g,h,i,j,k,l){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
var fexpr__159037 = cljs.core.deref(this$);
return (fexpr__159037.cljs$core$IFn$_invoke$arity$12 ? fexpr__159037.cljs$core$IFn$_invoke$arity$12(a,b,c,d,e,f__$1,g,h,i,j,k,l) : fexpr__159037.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l));
});
var G__159083__14 = (function (self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
var fexpr__159038 = cljs.core.deref(this$);
return (fexpr__159038.cljs$core$IFn$_invoke$arity$13 ? fexpr__159038.cljs$core$IFn$_invoke$arity$13(a,b,c,d,e,f__$1,g,h,i,j,k,l,m) : fexpr__159038.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m));
});
var G__159083__15 = (function (self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
var fexpr__159039 = cljs.core.deref(this$);
return (fexpr__159039.cljs$core$IFn$_invoke$arity$14 ? fexpr__159039.cljs$core$IFn$_invoke$arity$14(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n) : fexpr__159039.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n));
});
var G__159083__16 = (function (self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
var fexpr__159040 = cljs.core.deref(this$);
return (fexpr__159040.cljs$core$IFn$_invoke$arity$15 ? fexpr__159040.cljs$core$IFn$_invoke$arity$15(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o) : fexpr__159040.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o));
});
var G__159083__17 = (function (self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
var fexpr__159041 = cljs.core.deref(this$);
return (fexpr__159041.cljs$core$IFn$_invoke$arity$16 ? fexpr__159041.cljs$core$IFn$_invoke$arity$16(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p) : fexpr__159041.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p));
});
var G__159083__18 = (function (self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
var fexpr__159042 = cljs.core.deref(this$);
return (fexpr__159042.cljs$core$IFn$_invoke$arity$17 ? fexpr__159042.cljs$core$IFn$_invoke$arity$17(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q) : fexpr__159042.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q));
});
var G__159083__19 = (function (self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
var fexpr__159043 = cljs.core.deref(this$);
return (fexpr__159043.cljs$core$IFn$_invoke$arity$18 ? fexpr__159043.cljs$core$IFn$_invoke$arity$18(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r) : fexpr__159043.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r));
});
var G__159083__20 = (function (self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
var fexpr__159044 = cljs.core.deref(this$);
return (fexpr__159044.cljs$core$IFn$_invoke$arity$19 ? fexpr__159044.cljs$core$IFn$_invoke$arity$19(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s) : fexpr__159044.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s));
});
var G__159083__21 = (function (self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
var fexpr__159045 = cljs.core.deref(this$);
return (fexpr__159045.cljs$core$IFn$_invoke$arity$20 ? fexpr__159045.cljs$core$IFn$_invoke$arity$20(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t) : fexpr__159045.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t));
});
var G__159083__22 = (function (self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(cljs.core.deref(this$),a,b,c,d,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest], 0));
});
G__159083 = function(self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
switch(arguments.length){
case 1:
return G__159083__1.call(this,self__);
case 2:
return G__159083__2.call(this,self__,a);
case 3:
return G__159083__3.call(this,self__,a,b);
case 4:
return G__159083__4.call(this,self__,a,b,c);
case 5:
return G__159083__5.call(this,self__,a,b,c,d);
case 6:
return G__159083__6.call(this,self__,a,b,c,d,e);
case 7:
return G__159083__7.call(this,self__,a,b,c,d,e,f__$1);
case 8:
return G__159083__8.call(this,self__,a,b,c,d,e,f__$1,g);
case 9:
return G__159083__9.call(this,self__,a,b,c,d,e,f__$1,g,h);
case 10:
return G__159083__10.call(this,self__,a,b,c,d,e,f__$1,g,h,i);
case 11:
return G__159083__11.call(this,self__,a,b,c,d,e,f__$1,g,h,i,j);
case 12:
return G__159083__12.call(this,self__,a,b,c,d,e,f__$1,g,h,i,j,k);
case 13:
return G__159083__13.call(this,self__,a,b,c,d,e,f__$1,g,h,i,j,k,l);
case 14:
return G__159083__14.call(this,self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m);
case 15:
return G__159083__15.call(this,self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n);
case 16:
return G__159083__16.call(this,self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o);
case 17:
return G__159083__17.call(this,self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p);
case 18:
return G__159083__18.call(this,self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q);
case 19:
return G__159083__19.call(this,self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r);
case 20:
return G__159083__20.call(this,self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s);
case 21:
return G__159083__21.call(this,self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
case 22:
return G__159083__22.call(this,self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__159083.cljs$core$IFn$_invoke$arity$1 = G__159083__1;
G__159083.cljs$core$IFn$_invoke$arity$2 = G__159083__2;
G__159083.cljs$core$IFn$_invoke$arity$3 = G__159083__3;
G__159083.cljs$core$IFn$_invoke$arity$4 = G__159083__4;
G__159083.cljs$core$IFn$_invoke$arity$5 = G__159083__5;
G__159083.cljs$core$IFn$_invoke$arity$6 = G__159083__6;
G__159083.cljs$core$IFn$_invoke$arity$7 = G__159083__7;
G__159083.cljs$core$IFn$_invoke$arity$8 = G__159083__8;
G__159083.cljs$core$IFn$_invoke$arity$9 = G__159083__9;
G__159083.cljs$core$IFn$_invoke$arity$10 = G__159083__10;
G__159083.cljs$core$IFn$_invoke$arity$11 = G__159083__11;
G__159083.cljs$core$IFn$_invoke$arity$12 = G__159083__12;
G__159083.cljs$core$IFn$_invoke$arity$13 = G__159083__13;
G__159083.cljs$core$IFn$_invoke$arity$14 = G__159083__14;
G__159083.cljs$core$IFn$_invoke$arity$15 = G__159083__15;
G__159083.cljs$core$IFn$_invoke$arity$16 = G__159083__16;
G__159083.cljs$core$IFn$_invoke$arity$17 = G__159083__17;
G__159083.cljs$core$IFn$_invoke$arity$18 = G__159083__18;
G__159083.cljs$core$IFn$_invoke$arity$19 = G__159083__19;
G__159083.cljs$core$IFn$_invoke$arity$20 = G__159083__20;
G__159083.cljs$core$IFn$_invoke$arity$21 = G__159083__21;
G__159083.cljs$core$IFn$_invoke$arity$22 = G__159083__22;
return G__159083;
})()
);

(borkdude.dynaload.LazyVar.prototype.apply = (function (self__,args159024){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args159024)));
}));

(borkdude.dynaload.LazyVar.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var this$ = this;
var fexpr__159046 = cljs.core.deref(this$);
return (fexpr__159046.cljs$core$IFn$_invoke$arity$0 ? fexpr__159046.cljs$core$IFn$_invoke$arity$0() : fexpr__159046.call(null));
}));

(borkdude.dynaload.LazyVar.prototype.cljs$core$IFn$_invoke$arity$1 = (function (a){
var self__ = this;
var this$ = this;
var fexpr__159047 = cljs.core.deref(this$);
return (fexpr__159047.cljs$core$IFn$_invoke$arity$1 ? fexpr__159047.cljs$core$IFn$_invoke$arity$1(a) : fexpr__159047.call(null,a));
}));

(borkdude.dynaload.LazyVar.prototype.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
var self__ = this;
var this$ = this;
var fexpr__159048 = cljs.core.deref(this$);
return (fexpr__159048.cljs$core$IFn$_invoke$arity$2 ? fexpr__159048.cljs$core$IFn$_invoke$arity$2(a,b) : fexpr__159048.call(null,a,b));
}));

(borkdude.dynaload.LazyVar.prototype.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
var self__ = this;
var this$ = this;
var fexpr__159049 = cljs.core.deref(this$);
return (fexpr__159049.cljs$core$IFn$_invoke$arity$3 ? fexpr__159049.cljs$core$IFn$_invoke$arity$3(a,b,c) : fexpr__159049.call(null,a,b,c));
}));

(borkdude.dynaload.LazyVar.prototype.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
var self__ = this;
var this$ = this;
var fexpr__159050 = cljs.core.deref(this$);
return (fexpr__159050.cljs$core$IFn$_invoke$arity$4 ? fexpr__159050.cljs$core$IFn$_invoke$arity$4(a,b,c,d) : fexpr__159050.call(null,a,b,c,d));
}));

(borkdude.dynaload.LazyVar.prototype.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){
var self__ = this;
var this$ = this;
var fexpr__159051 = cljs.core.deref(this$);
return (fexpr__159051.cljs$core$IFn$_invoke$arity$5 ? fexpr__159051.cljs$core$IFn$_invoke$arity$5(a,b,c,d,e) : fexpr__159051.call(null,a,b,c,d,e));
}));

(borkdude.dynaload.LazyVar.prototype.cljs$core$IFn$_invoke$arity$6 = (function (a,b,c,d,e,f__$1){
var self__ = this;
var this$ = this;
var fexpr__159052 = cljs.core.deref(this$);
return (fexpr__159052.cljs$core$IFn$_invoke$arity$6 ? fexpr__159052.cljs$core$IFn$_invoke$arity$6(a,b,c,d,e,f__$1) : fexpr__159052.call(null,a,b,c,d,e,f__$1));
}));

(borkdude.dynaload.LazyVar.prototype.cljs$core$IFn$_invoke$arity$7 = (function (a,b,c,d,e,f__$1,g){
var self__ = this;
var this$ = this;
var fexpr__159053 = cljs.core.deref(this$);
return (fexpr__159053.cljs$core$IFn$_invoke$arity$7 ? fexpr__159053.cljs$core$IFn$_invoke$arity$7(a,b,c,d,e,f__$1,g) : fexpr__159053.call(null,a,b,c,d,e,f__$1,g));
}));

(borkdude.dynaload.LazyVar.prototype.cljs$core$IFn$_invoke$arity$8 = (function (a,b,c,d,e,f__$1,g,h){
var self__ = this;
var this$ = this;
var fexpr__159054 = cljs.core.deref(this$);
return (fexpr__159054.cljs$core$IFn$_invoke$arity$8 ? fexpr__159054.cljs$core$IFn$_invoke$arity$8(a,b,c,d,e,f__$1,g,h) : fexpr__159054.call(null,a,b,c,d,e,f__$1,g,h));
}));

(borkdude.dynaload.LazyVar.prototype.cljs$core$IFn$_invoke$arity$9 = (function (a,b,c,d,e,f__$1,g,h,i){
var self__ = this;
var this$ = this;
var fexpr__159055 = cljs.core.deref(this$);
return (fexpr__159055.cljs$core$IFn$_invoke$arity$9 ? fexpr__159055.cljs$core$IFn$_invoke$arity$9(a,b,c,d,e,f__$1,g,h,i) : fexpr__159055.call(null,a,b,c,d,e,f__$1,g,h,i));
}));

(borkdude.dynaload.LazyVar.prototype.cljs$core$IFn$_invoke$arity$10 = (function (a,b,c,d,e,f__$1,g,h,i,j){
var self__ = this;
var this$ = this;
var fexpr__159056 = cljs.core.deref(this$);
return (fexpr__159056.cljs$core$IFn$_invoke$arity$10 ? fexpr__159056.cljs$core$IFn$_invoke$arity$10(a,b,c,d,e,f__$1,g,h,i,j) : fexpr__159056.call(null,a,b,c,d,e,f__$1,g,h,i,j));
}));

(borkdude.dynaload.LazyVar.prototype.cljs$core$IFn$_invoke$arity$11 = (function (a,b,c,d,e,f__$1,g,h,i,j,k){
var self__ = this;
var this$ = this;
var fexpr__159057 = cljs.core.deref(this$);
return (fexpr__159057.cljs$core$IFn$_invoke$arity$11 ? fexpr__159057.cljs$core$IFn$_invoke$arity$11(a,b,c,d,e,f__$1,g,h,i,j,k) : fexpr__159057.call(null,a,b,c,d,e,f__$1,g,h,i,j,k));
}));

(borkdude.dynaload.LazyVar.prototype.cljs$core$IFn$_invoke$arity$12 = (function (a,b,c,d,e,f__$1,g,h,i,j,k,l){
var self__ = this;
var this$ = this;
var fexpr__159058 = cljs.core.deref(this$);
return (fexpr__159058.cljs$core$IFn$_invoke$arity$12 ? fexpr__159058.cljs$core$IFn$_invoke$arity$12(a,b,c,d,e,f__$1,g,h,i,j,k,l) : fexpr__159058.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l));
}));

(borkdude.dynaload.LazyVar.prototype.cljs$core$IFn$_invoke$arity$13 = (function (a,b,c,d,e,f__$1,g,h,i,j,k,l,m){
var self__ = this;
var this$ = this;
var fexpr__159059 = cljs.core.deref(this$);
return (fexpr__159059.cljs$core$IFn$_invoke$arity$13 ? fexpr__159059.cljs$core$IFn$_invoke$arity$13(a,b,c,d,e,f__$1,g,h,i,j,k,l,m) : fexpr__159059.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m));
}));

(borkdude.dynaload.LazyVar.prototype.cljs$core$IFn$_invoke$arity$14 = (function (a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n){
var self__ = this;
var this$ = this;
var fexpr__159060 = cljs.core.deref(this$);
return (fexpr__159060.cljs$core$IFn$_invoke$arity$14 ? fexpr__159060.cljs$core$IFn$_invoke$arity$14(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n) : fexpr__159060.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n));
}));

(borkdude.dynaload.LazyVar.prototype.cljs$core$IFn$_invoke$arity$15 = (function (a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o){
var self__ = this;
var this$ = this;
var fexpr__159061 = cljs.core.deref(this$);
return (fexpr__159061.cljs$core$IFn$_invoke$arity$15 ? fexpr__159061.cljs$core$IFn$_invoke$arity$15(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o) : fexpr__159061.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o));
}));

(borkdude.dynaload.LazyVar.prototype.cljs$core$IFn$_invoke$arity$16 = (function (a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p){
var self__ = this;
var this$ = this;
var fexpr__159062 = cljs.core.deref(this$);
return (fexpr__159062.cljs$core$IFn$_invoke$arity$16 ? fexpr__159062.cljs$core$IFn$_invoke$arity$16(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p) : fexpr__159062.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p));
}));

(borkdude.dynaload.LazyVar.prototype.cljs$core$IFn$_invoke$arity$17 = (function (a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q){
var self__ = this;
var this$ = this;
var fexpr__159063 = cljs.core.deref(this$);
return (fexpr__159063.cljs$core$IFn$_invoke$arity$17 ? fexpr__159063.cljs$core$IFn$_invoke$arity$17(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q) : fexpr__159063.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q));
}));

(borkdude.dynaload.LazyVar.prototype.cljs$core$IFn$_invoke$arity$18 = (function (a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r){
var self__ = this;
var this$ = this;
var fexpr__159066 = cljs.core.deref(this$);
return (fexpr__159066.cljs$core$IFn$_invoke$arity$18 ? fexpr__159066.cljs$core$IFn$_invoke$arity$18(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r) : fexpr__159066.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r));
}));

(borkdude.dynaload.LazyVar.prototype.cljs$core$IFn$_invoke$arity$19 = (function (a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s){
var self__ = this;
var this$ = this;
var fexpr__159067 = cljs.core.deref(this$);
return (fexpr__159067.cljs$core$IFn$_invoke$arity$19 ? fexpr__159067.cljs$core$IFn$_invoke$arity$19(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s) : fexpr__159067.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s));
}));

(borkdude.dynaload.LazyVar.prototype.cljs$core$IFn$_invoke$arity$20 = (function (a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t){
var self__ = this;
var this$ = this;
var fexpr__159068 = cljs.core.deref(this$);
return (fexpr__159068.cljs$core$IFn$_invoke$arity$20 ? fexpr__159068.cljs$core$IFn$_invoke$arity$20(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t) : fexpr__159068.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t));
}));

(borkdude.dynaload.LazyVar.prototype.cljs$core$IFn$_invoke$arity$21 = (function (a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
var self__ = this;
var this$ = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(cljs.core.deref(this$),a,b,c,d,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest], 0));
}));

(borkdude.dynaload.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
}));

(borkdude.dynaload.LazyVar.cljs$lang$type = true);

(borkdude.dynaload.LazyVar.cljs$lang$ctorStr = "borkdude.dynaload/LazyVar");

(borkdude.dynaload.LazyVar.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"borkdude.dynaload/LazyVar");
}));

/**
 * Positional factory function for borkdude.dynaload/LazyVar.
 */
borkdude.dynaload.__GT_LazyVar = (function borkdude$dynaload$__GT_LazyVar(f,cached){
return (new borkdude.dynaload.LazyVar(f,cached));
});


//# sourceMappingURL=borkdude.dynaload.js.map
