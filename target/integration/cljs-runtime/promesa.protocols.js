goog.provide('promesa.protocols');

/**
 * A promise abstraction.
 * @interface
 */
promesa.protocols.IPromise = function(){};

var promesa$protocols$IPromise$_bind$dyn_59908 = (function() {
var G__59909 = null;
var G__59909__2 = (function (_,f){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (promesa.protocols._bind[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(_,f) : m__4522__auto__.call(null,_,f));
} else {
var m__4519__auto__ = (promesa.protocols._bind["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(_,f) : m__4519__auto__.call(null,_,f));
} else {
throw cljs.core.missing_protocol("IPromise.-bind",_);
}
}
});
var G__59909__3 = (function (_,f,executor){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (promesa.protocols._bind[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$3(_,f,executor) : m__4522__auto__.call(null,_,f,executor));
} else {
var m__4519__auto__ = (promesa.protocols._bind["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$3(_,f,executor) : m__4519__auto__.call(null,_,f,executor));
} else {
throw cljs.core.missing_protocol("IPromise.-bind",_);
}
}
});
G__59909 = function(_,f,executor){
switch(arguments.length){
case 2:
return G__59909__2.call(this,_,f);
case 3:
return G__59909__3.call(this,_,f,executor);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__59909.cljs$core$IFn$_invoke$arity$2 = G__59909__2;
G__59909.cljs$core$IFn$_invoke$arity$3 = G__59909__3;
return G__59909;
})()
;
/**
 * Apply function to a computation and flatten.
 */
promesa.protocols._bind = (function promesa$protocols$_bind(var_args){
var G__59843 = arguments.length;
switch (G__59843) {
case 2:
return promesa.protocols._bind.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.protocols._bind.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.protocols._bind.cljs$core$IFn$_invoke$arity$2 = (function (_,f){
if((((!((_ == null)))) && ((!((_.promesa$protocols$IPromise$_bind$arity$2 == null)))))){
return _.promesa$protocols$IPromise$_bind$arity$2(_,f);
} else {
return promesa$protocols$IPromise$_bind$dyn_59908(_,f);
}
}));

(promesa.protocols._bind.cljs$core$IFn$_invoke$arity$3 = (function (_,f,executor){
if((((!((_ == null)))) && ((!((_.promesa$protocols$IPromise$_bind$arity$3 == null)))))){
return _.promesa$protocols$IPromise$_bind$arity$3(_,f,executor);
} else {
return promesa$protocols$IPromise$_bind$dyn_59908(_,f,executor);
}
}));

(promesa.protocols._bind.cljs$lang$maxFixedArity = 3);


var promesa$protocols$IPromise$_map$dyn_59923 = (function() {
var G__59924 = null;
var G__59924__2 = (function (_,f){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (promesa.protocols._map[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(_,f) : m__4522__auto__.call(null,_,f));
} else {
var m__4519__auto__ = (promesa.protocols._map["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(_,f) : m__4519__auto__.call(null,_,f));
} else {
throw cljs.core.missing_protocol("IPromise.-map",_);
}
}
});
var G__59924__3 = (function (_,f,executor){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (promesa.protocols._map[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$3(_,f,executor) : m__4522__auto__.call(null,_,f,executor));
} else {
var m__4519__auto__ = (promesa.protocols._map["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$3(_,f,executor) : m__4519__auto__.call(null,_,f,executor));
} else {
throw cljs.core.missing_protocol("IPromise.-map",_);
}
}
});
G__59924 = function(_,f,executor){
switch(arguments.length){
case 2:
return G__59924__2.call(this,_,f);
case 3:
return G__59924__3.call(this,_,f,executor);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__59924.cljs$core$IFn$_invoke$arity$2 = G__59924__2;
G__59924.cljs$core$IFn$_invoke$arity$3 = G__59924__3;
return G__59924;
})()
;
/**
 * Apply function to a computation
 */
promesa.protocols._map = (function promesa$protocols$_map(var_args){
var G__59851 = arguments.length;
switch (G__59851) {
case 2:
return promesa.protocols._map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.protocols._map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.protocols._map.cljs$core$IFn$_invoke$arity$2 = (function (_,f){
if((((!((_ == null)))) && ((!((_.promesa$protocols$IPromise$_map$arity$2 == null)))))){
return _.promesa$protocols$IPromise$_map$arity$2(_,f);
} else {
return promesa$protocols$IPromise$_map$dyn_59923(_,f);
}
}));

(promesa.protocols._map.cljs$core$IFn$_invoke$arity$3 = (function (_,f,executor){
if((((!((_ == null)))) && ((!((_.promesa$protocols$IPromise$_map$arity$3 == null)))))){
return _.promesa$protocols$IPromise$_map$arity$3(_,f,executor);
} else {
return promesa$protocols$IPromise$_map$dyn_59923(_,f,executor);
}
}));

(promesa.protocols._map.cljs$lang$maxFixedArity = 3);


var promesa$protocols$IPromise$_then$dyn_59940 = (function() {
var G__59941 = null;
var G__59941__2 = (function (_,f){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (promesa.protocols._then[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(_,f) : m__4522__auto__.call(null,_,f));
} else {
var m__4519__auto__ = (promesa.protocols._then["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(_,f) : m__4519__auto__.call(null,_,f));
} else {
throw cljs.core.missing_protocol("IPromise.-then",_);
}
}
});
var G__59941__3 = (function (_,f,executor){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (promesa.protocols._then[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$3(_,f,executor) : m__4522__auto__.call(null,_,f,executor));
} else {
var m__4519__auto__ = (promesa.protocols._then["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$3(_,f,executor) : m__4519__auto__.call(null,_,f,executor));
} else {
throw cljs.core.missing_protocol("IPromise.-then",_);
}
}
});
G__59941 = function(_,f,executor){
switch(arguments.length){
case 2:
return G__59941__2.call(this,_,f);
case 3:
return G__59941__3.call(this,_,f,executor);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__59941.cljs$core$IFn$_invoke$arity$2 = G__59941__2;
G__59941.cljs$core$IFn$_invoke$arity$3 = G__59941__3;
return G__59941;
})()
;
/**
 * Apply function to a computation and flatten if promise found.
 */
promesa.protocols._then = (function promesa$protocols$_then(var_args){
var G__59855 = arguments.length;
switch (G__59855) {
case 2:
return promesa.protocols._then.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.protocols._then.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.protocols._then.cljs$core$IFn$_invoke$arity$2 = (function (_,f){
if((((!((_ == null)))) && ((!((_.promesa$protocols$IPromise$_then$arity$2 == null)))))){
return _.promesa$protocols$IPromise$_then$arity$2(_,f);
} else {
return promesa$protocols$IPromise$_then$dyn_59940(_,f);
}
}));

(promesa.protocols._then.cljs$core$IFn$_invoke$arity$3 = (function (_,f,executor){
if((((!((_ == null)))) && ((!((_.promesa$protocols$IPromise$_then$arity$3 == null)))))){
return _.promesa$protocols$IPromise$_then$arity$3(_,f,executor);
} else {
return promesa$protocols$IPromise$_then$dyn_59940(_,f,executor);
}
}));

(promesa.protocols._then.cljs$lang$maxFixedArity = 3);


var promesa$protocols$IPromise$_mapErr$dyn_59944 = (function() {
var G__59945 = null;
var G__59945__2 = (function (_,f){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (promesa.protocols._mapErr[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(_,f) : m__4522__auto__.call(null,_,f));
} else {
var m__4519__auto__ = (promesa.protocols._mapErr["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(_,f) : m__4519__auto__.call(null,_,f));
} else {
throw cljs.core.missing_protocol("IPromise.-mapErr",_);
}
}
});
var G__59945__3 = (function (_,f,executor){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (promesa.protocols._mapErr[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$3(_,f,executor) : m__4522__auto__.call(null,_,f,executor));
} else {
var m__4519__auto__ = (promesa.protocols._mapErr["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$3(_,f,executor) : m__4519__auto__.call(null,_,f,executor));
} else {
throw cljs.core.missing_protocol("IPromise.-mapErr",_);
}
}
});
G__59945 = function(_,f,executor){
switch(arguments.length){
case 2:
return G__59945__2.call(this,_,f);
case 3:
return G__59945__3.call(this,_,f,executor);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__59945.cljs$core$IFn$_invoke$arity$2 = G__59945__2;
G__59945.cljs$core$IFn$_invoke$arity$3 = G__59945__3;
return G__59945;
})()
;
/**
 * Apply function to a failed computation.
 */
promesa.protocols._mapErr = (function promesa$protocols$_mapErr(var_args){
var G__59861 = arguments.length;
switch (G__59861) {
case 2:
return promesa.protocols._mapErr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.protocols._mapErr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.protocols._mapErr.cljs$core$IFn$_invoke$arity$2 = (function (_,f){
if((((!((_ == null)))) && ((!((_.promesa$protocols$IPromise$_mapErr$arity$2 == null)))))){
return _.promesa$protocols$IPromise$_mapErr$arity$2(_,f);
} else {
return promesa$protocols$IPromise$_mapErr$dyn_59944(_,f);
}
}));

(promesa.protocols._mapErr.cljs$core$IFn$_invoke$arity$3 = (function (_,f,executor){
if((((!((_ == null)))) && ((!((_.promesa$protocols$IPromise$_mapErr$arity$3 == null)))))){
return _.promesa$protocols$IPromise$_mapErr$arity$3(_,f,executor);
} else {
return promesa$protocols$IPromise$_mapErr$dyn_59944(_,f,executor);
}
}));

(promesa.protocols._mapErr.cljs$lang$maxFixedArity = 3);


var promesa$protocols$IPromise$_thenErr$dyn_59949 = (function() {
var G__59950 = null;
var G__59950__2 = (function (_,f){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (promesa.protocols._thenErr[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(_,f) : m__4522__auto__.call(null,_,f));
} else {
var m__4519__auto__ = (promesa.protocols._thenErr["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(_,f) : m__4519__auto__.call(null,_,f));
} else {
throw cljs.core.missing_protocol("IPromise.-thenErr",_);
}
}
});
var G__59950__3 = (function (_,f,executor){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (promesa.protocols._thenErr[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$3(_,f,executor) : m__4522__auto__.call(null,_,f,executor));
} else {
var m__4519__auto__ = (promesa.protocols._thenErr["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$3(_,f,executor) : m__4519__auto__.call(null,_,f,executor));
} else {
throw cljs.core.missing_protocol("IPromise.-thenErr",_);
}
}
});
G__59950 = function(_,f,executor){
switch(arguments.length){
case 2:
return G__59950__2.call(this,_,f);
case 3:
return G__59950__3.call(this,_,f,executor);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__59950.cljs$core$IFn$_invoke$arity$2 = G__59950__2;
G__59950.cljs$core$IFn$_invoke$arity$3 = G__59950__3;
return G__59950;
})()
;
/**
 * Apply function to a failed computation. and flatten if promise found.
 */
promesa.protocols._thenErr = (function promesa$protocols$_thenErr(var_args){
var G__59867 = arguments.length;
switch (G__59867) {
case 2:
return promesa.protocols._thenErr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.protocols._thenErr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.protocols._thenErr.cljs$core$IFn$_invoke$arity$2 = (function (_,f){
if((((!((_ == null)))) && ((!((_.promesa$protocols$IPromise$_thenErr$arity$2 == null)))))){
return _.promesa$protocols$IPromise$_thenErr$arity$2(_,f);
} else {
return promesa$protocols$IPromise$_thenErr$dyn_59949(_,f);
}
}));

(promesa.protocols._thenErr.cljs$core$IFn$_invoke$arity$3 = (function (_,f,executor){
if((((!((_ == null)))) && ((!((_.promesa$protocols$IPromise$_thenErr$arity$3 == null)))))){
return _.promesa$protocols$IPromise$_thenErr$arity$3(_,f,executor);
} else {
return promesa$protocols$IPromise$_thenErr$dyn_59949(_,f,executor);
}
}));

(promesa.protocols._thenErr.cljs$lang$maxFixedArity = 3);


var promesa$protocols$IPromise$_handle$dyn_59956 = (function() {
var G__59957 = null;
var G__59957__2 = (function (_,f){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (promesa.protocols._handle[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(_,f) : m__4522__auto__.call(null,_,f));
} else {
var m__4519__auto__ = (promesa.protocols._handle["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(_,f) : m__4519__auto__.call(null,_,f));
} else {
throw cljs.core.missing_protocol("IPromise.-handle",_);
}
}
});
var G__59957__3 = (function (_,f,executor){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (promesa.protocols._handle[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$3(_,f,executor) : m__4522__auto__.call(null,_,f,executor));
} else {
var m__4519__auto__ = (promesa.protocols._handle["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$3(_,f,executor) : m__4519__auto__.call(null,_,f,executor));
} else {
throw cljs.core.missing_protocol("IPromise.-handle",_);
}
}
});
G__59957 = function(_,f,executor){
switch(arguments.length){
case 2:
return G__59957__2.call(this,_,f);
case 3:
return G__59957__3.call(this,_,f,executor);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__59957.cljs$core$IFn$_invoke$arity$2 = G__59957__2;
G__59957.cljs$core$IFn$_invoke$arity$3 = G__59957__3;
return G__59957;
})()
;
/**
 * Apply function to a computation identpendently if is failed or
 *  successful and flatten if promise found.
 */
promesa.protocols._handle = (function promesa$protocols$_handle(var_args){
var G__59873 = arguments.length;
switch (G__59873) {
case 2:
return promesa.protocols._handle.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.protocols._handle.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.protocols._handle.cljs$core$IFn$_invoke$arity$2 = (function (_,f){
if((((!((_ == null)))) && ((!((_.promesa$protocols$IPromise$_handle$arity$2 == null)))))){
return _.promesa$protocols$IPromise$_handle$arity$2(_,f);
} else {
return promesa$protocols$IPromise$_handle$dyn_59956(_,f);
}
}));

(promesa.protocols._handle.cljs$core$IFn$_invoke$arity$3 = (function (_,f,executor){
if((((!((_ == null)))) && ((!((_.promesa$protocols$IPromise$_handle$arity$3 == null)))))){
return _.promesa$protocols$IPromise$_handle$arity$3(_,f,executor);
} else {
return promesa$protocols$IPromise$_handle$dyn_59956(_,f,executor);
}
}));

(promesa.protocols._handle.cljs$lang$maxFixedArity = 3);


var promesa$protocols$IPromise$_finally$dyn_59967 = (function() {
var G__59968 = null;
var G__59968__2 = (function (_,f){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (promesa.protocols._finally[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(_,f) : m__4522__auto__.call(null,_,f));
} else {
var m__4519__auto__ = (promesa.protocols._finally["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(_,f) : m__4519__auto__.call(null,_,f));
} else {
throw cljs.core.missing_protocol("IPromise.-finally",_);
}
}
});
var G__59968__3 = (function (_,f,executor){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (promesa.protocols._finally[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$3(_,f,executor) : m__4522__auto__.call(null,_,f,executor));
} else {
var m__4519__auto__ = (promesa.protocols._finally["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$3(_,f,executor) : m__4519__auto__.call(null,_,f,executor));
} else {
throw cljs.core.missing_protocol("IPromise.-finally",_);
}
}
});
G__59968 = function(_,f,executor){
switch(arguments.length){
case 2:
return G__59968__2.call(this,_,f);
case 3:
return G__59968__3.call(this,_,f,executor);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__59968.cljs$core$IFn$_invoke$arity$2 = G__59968__2;
G__59968.cljs$core$IFn$_invoke$arity$3 = G__59968__3;
return G__59968;
})()
;
/**
 * Apply function to a computation identpendently if is failed or
 *  successful; the return value is ignored.
 */
promesa.protocols._finally = (function promesa$protocols$_finally(var_args){
var G__59881 = arguments.length;
switch (G__59881) {
case 2:
return promesa.protocols._finally.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.protocols._finally.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.protocols._finally.cljs$core$IFn$_invoke$arity$2 = (function (_,f){
if((((!((_ == null)))) && ((!((_.promesa$protocols$IPromise$_finally$arity$2 == null)))))){
return _.promesa$protocols$IPromise$_finally$arity$2(_,f);
} else {
return promesa$protocols$IPromise$_finally$dyn_59967(_,f);
}
}));

(promesa.protocols._finally.cljs$core$IFn$_invoke$arity$3 = (function (_,f,executor){
if((((!((_ == null)))) && ((!((_.promesa$protocols$IPromise$_finally$arity$3 == null)))))){
return _.promesa$protocols$IPromise$_finally$arity$3(_,f,executor);
} else {
return promesa$protocols$IPromise$_finally$dyn_59967(_,f,executor);
}
}));

(promesa.protocols._finally.cljs$lang$maxFixedArity = 3);



/**
 * Additional state/introspection abstraction.
 * @interface
 */
promesa.protocols.IState = function(){};

var promesa$protocols$IState$_extract$dyn_59977 = (function (_){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (promesa.protocols._extract[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4522__auto__.call(null,_));
} else {
var m__4519__auto__ = (promesa.protocols._extract["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4519__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IState.-extract",_);
}
}
});
/**
 * Extract the current value.
 */
promesa.protocols._extract = (function promesa$protocols$_extract(_){
if((((!((_ == null)))) && ((!((_.promesa$protocols$IState$_extract$arity$1 == null)))))){
return _.promesa$protocols$IState$_extract$arity$1(_);
} else {
return promesa$protocols$IState$_extract$dyn_59977(_);
}
});

var promesa$protocols$IState$_resolved_QMARK_$dyn_59978 = (function (_){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (promesa.protocols._resolved_QMARK_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4522__auto__.call(null,_));
} else {
var m__4519__auto__ = (promesa.protocols._resolved_QMARK_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4519__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IState.-resolved?",_);
}
}
});
/**
 * Returns true if a promise is resolved.
 */
promesa.protocols._resolved_QMARK_ = (function promesa$protocols$_resolved_QMARK_(_){
if((((!((_ == null)))) && ((!((_.promesa$protocols$IState$_resolved_QMARK_$arity$1 == null)))))){
return _.promesa$protocols$IState$_resolved_QMARK_$arity$1(_);
} else {
return promesa$protocols$IState$_resolved_QMARK_$dyn_59978(_);
}
});

var promesa$protocols$IState$_rejected_QMARK_$dyn_59983 = (function (_){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (promesa.protocols._rejected_QMARK_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4522__auto__.call(null,_));
} else {
var m__4519__auto__ = (promesa.protocols._rejected_QMARK_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4519__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IState.-rejected?",_);
}
}
});
/**
 * Returns true if a promise is rejected.
 */
promesa.protocols._rejected_QMARK_ = (function promesa$protocols$_rejected_QMARK_(_){
if((((!((_ == null)))) && ((!((_.promesa$protocols$IState$_rejected_QMARK_$arity$1 == null)))))){
return _.promesa$protocols$IState$_rejected_QMARK_$arity$1(_);
} else {
return promesa$protocols$IState$_rejected_QMARK_$dyn_59983(_);
}
});

var promesa$protocols$IState$_pending_QMARK_$dyn_59987 = (function (_){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (promesa.protocols._pending_QMARK_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4522__auto__.call(null,_));
} else {
var m__4519__auto__ = (promesa.protocols._pending_QMARK_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4519__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IState.-pending?",_);
}
}
});
/**
 * Retutns true if a promise is pending.
 */
promesa.protocols._pending_QMARK_ = (function promesa$protocols$_pending_QMARK_(_){
if((((!((_ == null)))) && ((!((_.promesa$protocols$IState$_pending_QMARK_$arity$1 == null)))))){
return _.promesa$protocols$IState$_pending_QMARK_$arity$1(_);
} else {
return promesa$protocols$IState$_pending_QMARK_$dyn_59987(_);
}
});


/**
 * A promise constructor abstraction.
 * @interface
 */
promesa.protocols.IPromiseFactory = function(){};

var promesa$protocols$IPromiseFactory$_promise$dyn_60001 = (function (_){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (promesa.protocols._promise[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4522__auto__.call(null,_));
} else {
var m__4519__auto__ = (promesa.protocols._promise["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4519__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IPromiseFactory.-promise",_);
}
}
});
/**
 * Create a promise instance from other types
 */
promesa.protocols._promise = (function promesa$protocols$_promise(_){
if((((!((_ == null)))) && ((!((_.promesa$protocols$IPromiseFactory$_promise$arity$1 == null)))))){
return _.promesa$protocols$IPromiseFactory$_promise$arity$1(_);
} else {
return promesa$protocols$IPromiseFactory$_promise$dyn_60001(_);
}
});


/**
 * A cancellation abstraction.
 * @interface
 */
promesa.protocols.ICancellable = function(){};

var promesa$protocols$ICancellable$_cancel_BANG_$dyn_60002 = (function (_){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (promesa.protocols._cancel_BANG_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4522__auto__.call(null,_));
} else {
var m__4519__auto__ = (promesa.protocols._cancel_BANG_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4519__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("ICancellable.-cancel!",_);
}
}
});
promesa.protocols._cancel_BANG_ = (function promesa$protocols$_cancel_BANG_(_){
if((((!((_ == null)))) && ((!((_.promesa$protocols$ICancellable$_cancel_BANG_$arity$1 == null)))))){
return _.promesa$protocols$ICancellable$_cancel_BANG_$arity$1(_);
} else {
return promesa$protocols$ICancellable$_cancel_BANG_$dyn_60002(_);
}
});

var promesa$protocols$ICancellable$_cancelled_QMARK_$dyn_60003 = (function (_){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (promesa.protocols._cancelled_QMARK_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4522__auto__.call(null,_));
} else {
var m__4519__auto__ = (promesa.protocols._cancelled_QMARK_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4519__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("ICancellable.-cancelled?",_);
}
}
});
promesa.protocols._cancelled_QMARK_ = (function promesa$protocols$_cancelled_QMARK_(_){
if((((!((_ == null)))) && ((!((_.promesa$protocols$ICancellable$_cancelled_QMARK_$arity$1 == null)))))){
return _.promesa$protocols$ICancellable$_cancelled_QMARK_$arity$1(_);
} else {
return promesa$protocols$ICancellable$_cancelled_QMARK_$dyn_60003(_);
}
});


/**
 * @interface
 */
promesa.protocols.ICompletable = function(){};

var promesa$protocols$ICompletable$_resolve_BANG_$dyn_60004 = (function (_,v){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (promesa.protocols._resolve_BANG_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(_,v) : m__4522__auto__.call(null,_,v));
} else {
var m__4519__auto__ = (promesa.protocols._resolve_BANG_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(_,v) : m__4519__auto__.call(null,_,v));
} else {
throw cljs.core.missing_protocol("ICompletable.-resolve!",_);
}
}
});
/**
 * Deliver a value to empty promise.
 */
promesa.protocols._resolve_BANG_ = (function promesa$protocols$_resolve_BANG_(_,v){
if((((!((_ == null)))) && ((!((_.promesa$protocols$ICompletable$_resolve_BANG_$arity$2 == null)))))){
return _.promesa$protocols$ICompletable$_resolve_BANG_$arity$2(_,v);
} else {
return promesa$protocols$ICompletable$_resolve_BANG_$dyn_60004(_,v);
}
});

var promesa$protocols$ICompletable$_reject_BANG_$dyn_60006 = (function (_,e){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (promesa.protocols._reject_BANG_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(_,e) : m__4522__auto__.call(null,_,e));
} else {
var m__4519__auto__ = (promesa.protocols._reject_BANG_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(_,e) : m__4519__auto__.call(null,_,e));
} else {
throw cljs.core.missing_protocol("ICompletable.-reject!",_);
}
}
});
/**
 * Deliver an error to empty promise.
 */
promesa.protocols._reject_BANG_ = (function promesa$protocols$_reject_BANG_(_,e){
if((((!((_ == null)))) && ((!((_.promesa$protocols$ICompletable$_reject_BANG_$arity$2 == null)))))){
return _.promesa$protocols$ICompletable$_reject_BANG_$arity$2(_,e);
} else {
return promesa$protocols$ICompletable$_reject_BANG_$dyn_60006(_,e);
}
});


/**
 * @interface
 */
promesa.protocols.IExecutor = function(){};

var promesa$protocols$IExecutor$_run_BANG_$dyn_60007 = (function (_,task){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (promesa.protocols._run_BANG_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(_,task) : m__4522__auto__.call(null,_,task));
} else {
var m__4519__auto__ = (promesa.protocols._run_BANG_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(_,task) : m__4519__auto__.call(null,_,task));
} else {
throw cljs.core.missing_protocol("IExecutor.-run!",_);
}
}
});
/**
 * Run a task and return a promise.
 */
promesa.protocols._run_BANG_ = (function promesa$protocols$_run_BANG_(_,task){
if((((!((_ == null)))) && ((!((_.promesa$protocols$IExecutor$_run_BANG_$arity$2 == null)))))){
return _.promesa$protocols$IExecutor$_run_BANG_$arity$2(_,task);
} else {
return promesa$protocols$IExecutor$_run_BANG_$dyn_60007(_,task);
}
});

var promesa$protocols$IExecutor$_submit_BANG_$dyn_60008 = (function (_,task){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (promesa.protocols._submit_BANG_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(_,task) : m__4522__auto__.call(null,_,task));
} else {
var m__4519__auto__ = (promesa.protocols._submit_BANG_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(_,task) : m__4519__auto__.call(null,_,task));
} else {
throw cljs.core.missing_protocol("IExecutor.-submit!",_);
}
}
});
/**
 * Submit a task and return a promise.
 */
promesa.protocols._submit_BANG_ = (function promesa$protocols$_submit_BANG_(_,task){
if((((!((_ == null)))) && ((!((_.promesa$protocols$IExecutor$_submit_BANG_$arity$2 == null)))))){
return _.promesa$protocols$IExecutor$_submit_BANG_$arity$2(_,task);
} else {
return promesa$protocols$IExecutor$_submit_BANG_$dyn_60008(_,task);
}
});


/**
 * A generic abstraction for scheduler facilities.
 * @interface
 */
promesa.protocols.IScheduler = function(){};

var promesa$protocols$IScheduler$_schedule_BANG_$dyn_60009 = (function (_,ms,func){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (promesa.protocols._schedule_BANG_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$3(_,ms,func) : m__4522__auto__.call(null,_,ms,func));
} else {
var m__4519__auto__ = (promesa.protocols._schedule_BANG_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$3(_,ms,func) : m__4519__auto__.call(null,_,ms,func));
} else {
throw cljs.core.missing_protocol("IScheduler.-schedule!",_);
}
}
});
/**
 * Schedule a function to be executed in future.
 */
promesa.protocols._schedule_BANG_ = (function promesa$protocols$_schedule_BANG_(_,ms,func){
if((((!((_ == null)))) && ((!((_.promesa$protocols$IScheduler$_schedule_BANG_$arity$3 == null)))))){
return _.promesa$protocols$IScheduler$_schedule_BANG_$arity$3(_,ms,func);
} else {
return promesa$protocols$IScheduler$_schedule_BANG_$dyn_60009(_,ms,func);
}
});


//# sourceMappingURL=promesa.protocols.js.map
