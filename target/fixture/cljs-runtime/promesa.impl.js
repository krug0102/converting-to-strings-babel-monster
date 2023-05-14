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
var x145994 = obj;
(x145994.promesa$protocols$ICompletable$ = cljs.core.PROTOCOL_SENTINEL);

(x145994.promesa$protocols$ICompletable$_resolve_BANG_$arity$2 = (function (_,v){
var ___$1 = this;
return state.resolve(v);
}));

(x145994.promesa$protocols$ICompletable$_reject_BANG_$arity$2 = (function (_,v){
var ___$1 = this;
return state.reject(v);
}));

return x145994;
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
return it__$1.then((function (p1__145995_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__145995_SHARP_) : f.call(null,p1__145995_SHARP_));
}));
}));

(t.prototype.promesa$protocols$IPromise$_map$arity$3 = (function (it,f,e){
var it__$1 = this;
return it__$1.then((function (p1__145996_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__145996_SHARP_) : f.call(null,p1__145996_SHARP_));
}));
}));

(t.prototype.promesa$protocols$IPromise$_bind$arity$2 = (function (it,f){
var it__$1 = this;
return it__$1.then((function (p1__145997_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__145997_SHARP_) : f.call(null,p1__145997_SHARP_));
}));
}));

(t.prototype.promesa$protocols$IPromise$_bind$arity$3 = (function (it,f,e){
var it__$1 = this;
return it__$1.then((function (p1__145998_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__145998_SHARP_) : f.call(null,p1__145998_SHARP_));
}));
}));

(t.prototype.promesa$protocols$IPromise$_then$arity$2 = (function (it,f){
var it__$1 = this;
return it__$1.then((function (p1__145999_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__145999_SHARP_) : f.call(null,p1__145999_SHARP_));
}));
}));

(t.prototype.promesa$protocols$IPromise$_then$arity$3 = (function (it,f,e){
var it__$1 = this;
return it__$1.then((function (p1__146000_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__146000_SHARP_) : f.call(null,p1__146000_SHARP_));
}));
}));

(t.prototype.promesa$protocols$IPromise$_mapErr$arity$2 = (function (it,f){
var it__$1 = this;
return it__$1.catch((function (p1__146001_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__146001_SHARP_) : f.call(null,p1__146001_SHARP_));
}));
}));

(t.prototype.promesa$protocols$IPromise$_mapErr$arity$3 = (function (it,f,e){
var it__$1 = this;
return it__$1.catch((function (p1__146002_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__146002_SHARP_) : f.call(null,p1__146002_SHARP_));
}));
}));

(t.prototype.promesa$protocols$IPromise$_thenErr$arity$2 = (function (it,f){
var it__$1 = this;
return it__$1.catch((function (p1__146003_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__146003_SHARP_) : f.call(null,p1__146003_SHARP_));
}));
}));

(t.prototype.promesa$protocols$IPromise$_thenErr$arity$3 = (function (it,f,e){
var it__$1 = this;
return it__$1.catch((function (p1__146004_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__146004_SHARP_) : f.call(null,p1__146004_SHARP_));
}));
}));

(t.prototype.promesa$protocols$IPromise$_handle$arity$2 = (function (it,f){
var it__$1 = this;
return it__$1.then((function (p1__146005_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__146005_SHARP_,null) : f.call(null,p1__146005_SHARP_,null));
}),(function (p1__146006_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(null,p1__146006_SHARP_) : f.call(null,null,p1__146006_SHARP_));
}));
}));

(t.prototype.promesa$protocols$IPromise$_handle$arity$3 = (function (it,f,e){
var it__$1 = this;
return it__$1.then((function (p1__146007_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__146007_SHARP_,null) : f.call(null,p1__146007_SHARP_,null));
}),(function (p1__146008_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(null,p1__146008_SHARP_) : f.call(null,null,p1__146008_SHARP_));
}));
}));

(t.prototype.promesa$protocols$IPromise$_finally$arity$2 = (function (it,f){
var it__$1 = this;
it__$1.then((function (p1__146009_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__146009_SHARP_,null) : f.call(null,p1__146009_SHARP_,null));
}),(function (p1__146010_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(null,p1__146010_SHARP_) : f.call(null,null,p1__146010_SHARP_));
}));

return it__$1;
}));

return (t.prototype.promesa$protocols$IPromise$_finally$arity$3 = (function (it,f,executor){
var it__$1 = this;
it__$1.then((function (p1__146011_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__146011_SHARP_,null) : f.call(null,p1__146011_SHARP_,null));
}),(function (p1__146012_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(null,p1__146012_SHARP_) : f.call(null,null,p1__146012_SHARP_));
}));

return it__$1;
}));
});
promesa.impl.extend_promise_BANG_(Promise);
goog.object.set(promesa.protocols.IPromise,"_",true);

goog.object.set(promesa.protocols._map,"_",(function() {
var G__146014 = null;
var G__146014__2 = (function (it,f){
return promesa.protocols._map(promesa.protocols._promise(it),f);
});
var G__146014__3 = (function (it,f,e){
return promesa.protocols._map(promesa.protocols._promise(it),f,e);
});
G__146014 = function(it,f,e){
switch(arguments.length){
case 2:
return G__146014__2.call(this,it,f);
case 3:
return G__146014__3.call(this,it,f,e);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__146014.cljs$core$IFn$_invoke$arity$2 = G__146014__2;
G__146014.cljs$core$IFn$_invoke$arity$3 = G__146014__3;
return G__146014;
})()
);

goog.object.set(promesa.protocols._bind,"_",(function() {
var G__146018 = null;
var G__146018__2 = (function (it,f){
return promesa.protocols._bind(promesa.protocols._promise(it),f);
});
var G__146018__3 = (function (it,f,e){
return promesa.protocols._bind(promesa.protocols._promise(it),f,e);
});
G__146018 = function(it,f,e){
switch(arguments.length){
case 2:
return G__146018__2.call(this,it,f);
case 3:
return G__146018__3.call(this,it,f,e);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__146018.cljs$core$IFn$_invoke$arity$2 = G__146018__2;
G__146018.cljs$core$IFn$_invoke$arity$3 = G__146018__3;
return G__146018;
})()
);

goog.object.set(promesa.protocols._then,"_",(function() {
var G__146020 = null;
var G__146020__2 = (function (it,f){
return promesa.protocols._then(promesa.protocols._promise(it),f);
});
var G__146020__3 = (function (it,f,e){
return promesa.protocols._then(promesa.protocols._promise(it),f,e);
});
G__146020 = function(it,f,e){
switch(arguments.length){
case 2:
return G__146020__2.call(this,it,f);
case 3:
return G__146020__3.call(this,it,f,e);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__146020.cljs$core$IFn$_invoke$arity$2 = G__146020__2;
G__146020.cljs$core$IFn$_invoke$arity$3 = G__146020__3;
return G__146020;
})()
);

goog.object.set(promesa.protocols._mapErr,"_",(function() {
var G__146022 = null;
var G__146022__2 = (function (it,f){
return promesa.protocols._mapErr(promesa.protocols._promise(it),f);
});
var G__146022__3 = (function (it,f,e){
return promesa.protocols._mapErr(promesa.protocols._promise(it),f,e);
});
G__146022 = function(it,f,e){
switch(arguments.length){
case 2:
return G__146022__2.call(this,it,f);
case 3:
return G__146022__3.call(this,it,f,e);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__146022.cljs$core$IFn$_invoke$arity$2 = G__146022__2;
G__146022.cljs$core$IFn$_invoke$arity$3 = G__146022__3;
return G__146022;
})()
);

goog.object.set(promesa.protocols._thenErr,"_",(function() {
var G__146024 = null;
var G__146024__2 = (function (it,f){
return promesa.protocols._thenErr(promesa.protocols._promise(it),f);
});
var G__146024__3 = (function (it,f,e){
return promesa.protocols._thenErr(promesa.protocols._promise(it),f,e);
});
G__146024 = function(it,f,e){
switch(arguments.length){
case 2:
return G__146024__2.call(this,it,f);
case 3:
return G__146024__3.call(this,it,f,e);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__146024.cljs$core$IFn$_invoke$arity$2 = G__146024__2;
G__146024.cljs$core$IFn$_invoke$arity$3 = G__146024__3;
return G__146024;
})()
);

goog.object.set(promesa.protocols._handle,"_",(function() {
var G__146026 = null;
var G__146026__2 = (function (it,f){
return promesa.protocols._handle(promesa.protocols._promise(it),f);
});
var G__146026__3 = (function (it,f,e){
return promesa.protocols._handle(promesa.protocols._promise(it),f,e);
});
G__146026 = function(it,f,e){
switch(arguments.length){
case 2:
return G__146026__2.call(this,it,f);
case 3:
return G__146026__3.call(this,it,f,e);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__146026.cljs$core$IFn$_invoke$arity$2 = G__146026__2;
G__146026.cljs$core$IFn$_invoke$arity$3 = G__146026__3;
return G__146026;
})()
);

goog.object.set(promesa.protocols._finally,"_",(function() {
var G__146027 = null;
var G__146027__2 = (function (it,f){
return promesa.protocols._finally(promesa.protocols._promise(it),f);
});
var G__146027__3 = (function (it,f,e){
return promesa.protocols._finally(promesa.protocols._promise(it),f,e);
});
G__146027 = function(it,f,e){
switch(arguments.length){
case 2:
return G__146027__2.call(this,it,f);
case 3:
return G__146027__3.call(this,it,f,e);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__146027.cljs$core$IFn$_invoke$arity$2 = G__146027__2;
G__146027.cljs$core$IFn$_invoke$arity$3 = G__146027__3;
return G__146027;
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
