goog.provide('promesa.impl');
promesa.impl._STAR_default_promise_STAR_ = Promise;
promesa.impl.resolved = (function promesa$impl$resolved(v){
return promesa.impl._STAR_default_promise_STAR_.resolve(v);
});
promesa.impl.rejected = (function promesa$impl$rejected(v){
return promesa.impl._STAR_default_promise_STAR_.reject(v);
});
promesa.impl.deferred = (function promesa$impl$deferred(){
var state = ({});
var obj = (new promesa.impl._STAR_default_promise_STAR_((function (resolve,reject){
(state.resolve = resolve);

return (state.reject = reject);
})));
var x60049 = obj;
(x60049.promesa$protocols$ICompletable$ = cljs.core.PROTOCOL_SENTINEL);

(x60049.promesa$protocols$ICompletable$_resolve_BANG_$arity$2 = (function (_,v){
var ___$1 = this;
return state.resolve(v);
}));

(x60049.promesa$protocols$ICompletable$_reject_BANG_$arity$2 = (function (_,v){
var ___$1 = this;
return state.reject(v);
}));

return x60049;
});
promesa.impl.extend_promise_BANG_ = (function promesa$impl$extend_promise_BANG_(t){
(t.prototype.promesa$protocols$IPromiseFactory$ = cljs.core.PROTOCOL_SENTINEL);

(t.prototype.promesa$protocols$IPromiseFactory$_promise$arity$1 = (function (p){
var p__$1 = this;
return p__$1;
}));

(t.prototype.promesa$protocols$IPromise$ = cljs.core.PROTOCOL_SENTINEL);

(t.prototype.promesa$protocols$IPromise$_map$arity$2 = (function (it,f){
var it__$1 = this;
return it__$1.then((function (p1__60050_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__60050_SHARP_) : f.call(null,p1__60050_SHARP_));
}));
}));

(t.prototype.promesa$protocols$IPromise$_map$arity$3 = (function (it,f,e){
var it__$1 = this;
return it__$1.then((function (p1__60051_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__60051_SHARP_) : f.call(null,p1__60051_SHARP_));
}));
}));

(t.prototype.promesa$protocols$IPromise$_bind$arity$2 = (function (it,f){
var it__$1 = this;
return it__$1.then((function (p1__60052_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__60052_SHARP_) : f.call(null,p1__60052_SHARP_));
}));
}));

(t.prototype.promesa$protocols$IPromise$_bind$arity$3 = (function (it,f,e){
var it__$1 = this;
return it__$1.then((function (p1__60053_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__60053_SHARP_) : f.call(null,p1__60053_SHARP_));
}));
}));

(t.prototype.promesa$protocols$IPromise$_then$arity$2 = (function (it,f){
var it__$1 = this;
return it__$1.then((function (p1__60054_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__60054_SHARP_) : f.call(null,p1__60054_SHARP_));
}));
}));

(t.prototype.promesa$protocols$IPromise$_then$arity$3 = (function (it,f,e){
var it__$1 = this;
return it__$1.then((function (p1__60055_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__60055_SHARP_) : f.call(null,p1__60055_SHARP_));
}));
}));

(t.prototype.promesa$protocols$IPromise$_mapErr$arity$2 = (function (it,f){
var it__$1 = this;
return it__$1.catch((function (p1__60056_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__60056_SHARP_) : f.call(null,p1__60056_SHARP_));
}));
}));

(t.prototype.promesa$protocols$IPromise$_mapErr$arity$3 = (function (it,f,e){
var it__$1 = this;
return it__$1.catch((function (p1__60057_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__60057_SHARP_) : f.call(null,p1__60057_SHARP_));
}));
}));

(t.prototype.promesa$protocols$IPromise$_thenErr$arity$2 = (function (it,f){
var it__$1 = this;
return it__$1.catch((function (p1__60058_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__60058_SHARP_) : f.call(null,p1__60058_SHARP_));
}));
}));

(t.prototype.promesa$protocols$IPromise$_thenErr$arity$3 = (function (it,f,e){
var it__$1 = this;
return it__$1.catch((function (p1__60059_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__60059_SHARP_) : f.call(null,p1__60059_SHARP_));
}));
}));

(t.prototype.promesa$protocols$IPromise$_handle$arity$2 = (function (it,f){
var it__$1 = this;
return it__$1.then((function (p1__60060_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__60060_SHARP_,null) : f.call(null,p1__60060_SHARP_,null));
}),(function (p1__60061_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(null,p1__60061_SHARP_) : f.call(null,null,p1__60061_SHARP_));
}));
}));

(t.prototype.promesa$protocols$IPromise$_handle$arity$3 = (function (it,f,e){
var it__$1 = this;
return it__$1.then((function (p1__60062_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__60062_SHARP_,null) : f.call(null,p1__60062_SHARP_,null));
}),(function (p1__60063_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(null,p1__60063_SHARP_) : f.call(null,null,p1__60063_SHARP_));
}));
}));

(t.prototype.promesa$protocols$IPromise$_finally$arity$2 = (function (it,f){
var it__$1 = this;
it__$1.then((function (p1__60064_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__60064_SHARP_,null) : f.call(null,p1__60064_SHARP_,null));
}),(function (p1__60065_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(null,p1__60065_SHARP_) : f.call(null,null,p1__60065_SHARP_));
}));

return it__$1;
}));

return (t.prototype.promesa$protocols$IPromise$_finally$arity$3 = (function (it,f,executor){
var it__$1 = this;
it__$1.then((function (p1__60066_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__60066_SHARP_,null) : f.call(null,p1__60066_SHARP_,null));
}),(function (p1__60067_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(null,p1__60067_SHARP_) : f.call(null,null,p1__60067_SHARP_));
}));

return it__$1;
}));
});
promesa.impl.extend_promise_BANG_(Promise);
goog.object.set(promesa.protocols.IPromise,"_",true);

goog.object.set(promesa.protocols._map,"_",(function() {
var G__60068 = null;
var G__60068__2 = (function (it,f){
return promesa.protocols._map(promesa.protocols._promise(it),f);
});
var G__60068__3 = (function (it,f,e){
return promesa.protocols._map(promesa.protocols._promise(it),f,e);
});
G__60068 = function(it,f,e){
switch(arguments.length){
case 2:
return G__60068__2.call(this,it,f);
case 3:
return G__60068__3.call(this,it,f,e);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__60068.cljs$core$IFn$_invoke$arity$2 = G__60068__2;
G__60068.cljs$core$IFn$_invoke$arity$3 = G__60068__3;
return G__60068;
})()
);

goog.object.set(promesa.protocols._bind,"_",(function() {
var G__60069 = null;
var G__60069__2 = (function (it,f){
return promesa.protocols._bind(promesa.protocols._promise(it),f);
});
var G__60069__3 = (function (it,f,e){
return promesa.protocols._bind(promesa.protocols._promise(it),f,e);
});
G__60069 = function(it,f,e){
switch(arguments.length){
case 2:
return G__60069__2.call(this,it,f);
case 3:
return G__60069__3.call(this,it,f,e);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__60069.cljs$core$IFn$_invoke$arity$2 = G__60069__2;
G__60069.cljs$core$IFn$_invoke$arity$3 = G__60069__3;
return G__60069;
})()
);

goog.object.set(promesa.protocols._then,"_",(function() {
var G__60070 = null;
var G__60070__2 = (function (it,f){
return promesa.protocols._then(promesa.protocols._promise(it),f);
});
var G__60070__3 = (function (it,f,e){
return promesa.protocols._then(promesa.protocols._promise(it),f,e);
});
G__60070 = function(it,f,e){
switch(arguments.length){
case 2:
return G__60070__2.call(this,it,f);
case 3:
return G__60070__3.call(this,it,f,e);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__60070.cljs$core$IFn$_invoke$arity$2 = G__60070__2;
G__60070.cljs$core$IFn$_invoke$arity$3 = G__60070__3;
return G__60070;
})()
);

goog.object.set(promesa.protocols._mapErr,"_",(function() {
var G__60071 = null;
var G__60071__2 = (function (it,f){
return promesa.protocols._mapErr(promesa.protocols._promise(it),f);
});
var G__60071__3 = (function (it,f,e){
return promesa.protocols._mapErr(promesa.protocols._promise(it),f,e);
});
G__60071 = function(it,f,e){
switch(arguments.length){
case 2:
return G__60071__2.call(this,it,f);
case 3:
return G__60071__3.call(this,it,f,e);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__60071.cljs$core$IFn$_invoke$arity$2 = G__60071__2;
G__60071.cljs$core$IFn$_invoke$arity$3 = G__60071__3;
return G__60071;
})()
);

goog.object.set(promesa.protocols._thenErr,"_",(function() {
var G__60072 = null;
var G__60072__2 = (function (it,f){
return promesa.protocols._thenErr(promesa.protocols._promise(it),f);
});
var G__60072__3 = (function (it,f,e){
return promesa.protocols._thenErr(promesa.protocols._promise(it),f,e);
});
G__60072 = function(it,f,e){
switch(arguments.length){
case 2:
return G__60072__2.call(this,it,f);
case 3:
return G__60072__3.call(this,it,f,e);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__60072.cljs$core$IFn$_invoke$arity$2 = G__60072__2;
G__60072.cljs$core$IFn$_invoke$arity$3 = G__60072__3;
return G__60072;
})()
);

goog.object.set(promesa.protocols._handle,"_",(function() {
var G__60073 = null;
var G__60073__2 = (function (it,f){
return promesa.protocols._handle(promesa.protocols._promise(it),f);
});
var G__60073__3 = (function (it,f,e){
return promesa.protocols._handle(promesa.protocols._promise(it),f,e);
});
G__60073 = function(it,f,e){
switch(arguments.length){
case 2:
return G__60073__2.call(this,it,f);
case 3:
return G__60073__3.call(this,it,f,e);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__60073.cljs$core$IFn$_invoke$arity$2 = G__60073__2;
G__60073.cljs$core$IFn$_invoke$arity$3 = G__60073__3;
return G__60073;
})()
);

goog.object.set(promesa.protocols._finally,"_",(function() {
var G__60074 = null;
var G__60074__2 = (function (it,f){
return promesa.protocols._finally(promesa.protocols._promise(it),f);
});
var G__60074__3 = (function (it,f,e){
return promesa.protocols._finally(promesa.protocols._promise(it),f,e);
});
G__60074 = function(it,f,e){
switch(arguments.length){
case 2:
return G__60074__2.call(this,it,f);
case 3:
return G__60074__3.call(this,it,f,e);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__60074.cljs$core$IFn$_invoke$arity$2 = G__60074__2;
G__60074.cljs$core$IFn$_invoke$arity$3 = G__60074__3;
return G__60074;
})()
);
(Error.prototype.promesa$protocols$IPromiseFactory$ = cljs.core.PROTOCOL_SENTINEL);

(Error.prototype.promesa$protocols$IPromiseFactory$_promise$arity$1 = (function (e){
var e__$1 = this;
return promesa.impl.rejected(e__$1);
}));

goog.object.set(promesa.protocols.IPromiseFactory,"_",true);

goog.object.set(promesa.protocols._promise,"_",(function (v){
return promesa.impl.resolved(v);
}));
promesa.impl.promise__GT_str = (function promesa$impl$promise__GT_str(p){
return "#<Promise[~]>";
});
(Promise.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(Promise.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (p,writer,opts){
var p__$1 = this;
return cljs.core._write(writer,promesa.impl.promise__GT_str(p__$1));
}));

//# sourceMappingURL=promesa.impl.js.map
