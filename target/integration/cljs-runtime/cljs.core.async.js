goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__39848 = arguments.length;
switch (G__39848) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async39849 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39849 = (function (f,blockable,meta39850){
this.f = f;
this.blockable = blockable;
this.meta39850 = meta39850;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async39849.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39851,meta39850__$1){
var self__ = this;
var _39851__$1 = this;
return (new cljs.core.async.t_cljs$core$async39849(self__.f,self__.blockable,meta39850__$1));
}));

(cljs.core.async.t_cljs$core$async39849.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39851){
var self__ = this;
var _39851__$1 = this;
return self__.meta39850;
}));

(cljs.core.async.t_cljs$core$async39849.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39849.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async39849.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async39849.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async39849.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta39850","meta39850",1421740449,null)], null);
}));

(cljs.core.async.t_cljs$core$async39849.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async39849.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39849");

(cljs.core.async.t_cljs$core$async39849.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async39849");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async39849.
 */
cljs.core.async.__GT_t_cljs$core$async39849 = (function cljs$core$async$__GT_t_cljs$core$async39849(f__$1,blockable__$1,meta39850){
return (new cljs.core.async.t_cljs$core$async39849(f__$1,blockable__$1,meta39850));
});

}

return (new cljs.core.async.t_cljs$core$async39849(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__39854 = arguments.length;
switch (G__39854) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__39859 = arguments.length;
switch (G__39859) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__39874 = arguments.length;
switch (G__39874) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_41401 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_41401) : fn1.call(null,val_41401));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_41401) : fn1.call(null,val_41401));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__39882 = arguments.length;
switch (G__39882) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5751__auto__)){
var ret = temp__5751__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5751__auto__)){
var retb = temp__5751__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4706__auto___41403 = n;
var x_41404 = (0);
while(true){
if((x_41404 < n__4706__auto___41403)){
(a[x_41404] = x_41404);

var G__41405 = (x_41404 + (1));
x_41404 = G__41405;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async39883 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39883 = (function (flag,meta39884){
this.flag = flag;
this.meta39884 = meta39884;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async39883.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39885,meta39884__$1){
var self__ = this;
var _39885__$1 = this;
return (new cljs.core.async.t_cljs$core$async39883(self__.flag,meta39884__$1));
}));

(cljs.core.async.t_cljs$core$async39883.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39885){
var self__ = this;
var _39885__$1 = this;
return self__.meta39884;
}));

(cljs.core.async.t_cljs$core$async39883.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39883.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async39883.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async39883.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async39883.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta39884","meta39884",-1650065490,null)], null);
}));

(cljs.core.async.t_cljs$core$async39883.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async39883.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39883");

(cljs.core.async.t_cljs$core$async39883.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async39883");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async39883.
 */
cljs.core.async.__GT_t_cljs$core$async39883 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async39883(flag__$1,meta39884){
return (new cljs.core.async.t_cljs$core$async39883(flag__$1,meta39884));
});

}

return (new cljs.core.async.t_cljs$core$async39883(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async39886 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39886 = (function (flag,cb,meta39887){
this.flag = flag;
this.cb = cb;
this.meta39887 = meta39887;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async39886.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39888,meta39887__$1){
var self__ = this;
var _39888__$1 = this;
return (new cljs.core.async.t_cljs$core$async39886(self__.flag,self__.cb,meta39887__$1));
}));

(cljs.core.async.t_cljs$core$async39886.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39888){
var self__ = this;
var _39888__$1 = this;
return self__.meta39887;
}));

(cljs.core.async.t_cljs$core$async39886.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39886.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async39886.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async39886.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async39886.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta39887","meta39887",-134322433,null)], null);
}));

(cljs.core.async.t_cljs$core$async39886.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async39886.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39886");

(cljs.core.async.t_cljs$core$async39886.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async39886");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async39886.
 */
cljs.core.async.__GT_t_cljs$core$async39886 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async39886(flag__$1,cb__$1,meta39887){
return (new cljs.core.async.t_cljs$core$async39886(flag__$1,cb__$1,meta39887));
});

}

return (new cljs.core.async.t_cljs$core$async39886(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__39890_SHARP_){
var G__39898 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__39890_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__39898) : fret.call(null,G__39898));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__39894_SHARP_){
var G__39899 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__39894_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__39899) : fret.call(null,G__39899));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4223__auto__ = wport;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return port;
}
})()], null));
} else {
var G__41408 = (i + (1));
i = G__41408;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4223__auto__ = ret;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5753__auto__ = (function (){var and__4221__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4221__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4221__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var got = temp__5753__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___41409 = arguments.length;
var i__4830__auto___41410 = (0);
while(true){
if((i__4830__auto___41410 < len__4829__auto___41409)){
args__4835__auto__.push((arguments[i__4830__auto___41410]));

var G__41411 = (i__4830__auto___41410 + (1));
i__4830__auto___41410 = G__41411;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__39904){
var map__39905 = p__39904;
var map__39905__$1 = cljs.core.__destructure_map(map__39905);
var opts = map__39905__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq39900){
var G__39901 = cljs.core.first(seq39900);
var seq39900__$1 = cljs.core.next(seq39900);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39901,seq39900__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__39907 = arguments.length;
switch (G__39907) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__39769__auto___41413 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__39770__auto__ = (function (){var switch__39694__auto__ = (function (state_39941){
var state_val_39942 = (state_39941[(1)]);
if((state_val_39942 === (7))){
var inst_39937 = (state_39941[(2)]);
var state_39941__$1 = state_39941;
var statearr_39943_41414 = state_39941__$1;
(statearr_39943_41414[(2)] = inst_39937);

(statearr_39943_41414[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39942 === (1))){
var state_39941__$1 = state_39941;
var statearr_39944_41415 = state_39941__$1;
(statearr_39944_41415[(2)] = null);

(statearr_39944_41415[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39942 === (4))){
var inst_39919 = (state_39941[(7)]);
var inst_39919__$1 = (state_39941[(2)]);
var inst_39920 = (inst_39919__$1 == null);
var state_39941__$1 = (function (){var statearr_39947 = state_39941;
(statearr_39947[(7)] = inst_39919__$1);

return statearr_39947;
})();
if(cljs.core.truth_(inst_39920)){
var statearr_39948_41416 = state_39941__$1;
(statearr_39948_41416[(1)] = (5));

} else {
var statearr_39949_41417 = state_39941__$1;
(statearr_39949_41417[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39942 === (13))){
var state_39941__$1 = state_39941;
var statearr_39954_41418 = state_39941__$1;
(statearr_39954_41418[(2)] = null);

(statearr_39954_41418[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39942 === (6))){
var inst_39919 = (state_39941[(7)]);
var state_39941__$1 = state_39941;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39941__$1,(11),to,inst_39919);
} else {
if((state_val_39942 === (3))){
var inst_39939 = (state_39941[(2)]);
var state_39941__$1 = state_39941;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39941__$1,inst_39939);
} else {
if((state_val_39942 === (12))){
var state_39941__$1 = state_39941;
var statearr_39956_41419 = state_39941__$1;
(statearr_39956_41419[(2)] = null);

(statearr_39956_41419[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39942 === (2))){
var state_39941__$1 = state_39941;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39941__$1,(4),from);
} else {
if((state_val_39942 === (11))){
var inst_39930 = (state_39941[(2)]);
var state_39941__$1 = state_39941;
if(cljs.core.truth_(inst_39930)){
var statearr_39960_41420 = state_39941__$1;
(statearr_39960_41420[(1)] = (12));

} else {
var statearr_39961_41421 = state_39941__$1;
(statearr_39961_41421[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39942 === (9))){
var state_39941__$1 = state_39941;
var statearr_39962_41422 = state_39941__$1;
(statearr_39962_41422[(2)] = null);

(statearr_39962_41422[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39942 === (5))){
var state_39941__$1 = state_39941;
if(cljs.core.truth_(close_QMARK_)){
var statearr_39964_41423 = state_39941__$1;
(statearr_39964_41423[(1)] = (8));

} else {
var statearr_39965_41424 = state_39941__$1;
(statearr_39965_41424[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39942 === (14))){
var inst_39935 = (state_39941[(2)]);
var state_39941__$1 = state_39941;
var statearr_39966_41425 = state_39941__$1;
(statearr_39966_41425[(2)] = inst_39935);

(statearr_39966_41425[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39942 === (10))){
var inst_39927 = (state_39941[(2)]);
var state_39941__$1 = state_39941;
var statearr_39971_41427 = state_39941__$1;
(statearr_39971_41427[(2)] = inst_39927);

(statearr_39971_41427[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39942 === (8))){
var inst_39923 = cljs.core.async.close_BANG_(to);
var state_39941__$1 = state_39941;
var statearr_39974_41428 = state_39941__$1;
(statearr_39974_41428[(2)] = inst_39923);

(statearr_39974_41428[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
return (function() {
var cljs$core$async$state_machine__39695__auto__ = null;
var cljs$core$async$state_machine__39695__auto____0 = (function (){
var statearr_39977 = [null,null,null,null,null,null,null,null];
(statearr_39977[(0)] = cljs$core$async$state_machine__39695__auto__);

(statearr_39977[(1)] = (1));

return statearr_39977;
});
var cljs$core$async$state_machine__39695__auto____1 = (function (state_39941){
while(true){
var ret_value__39696__auto__ = (function (){try{while(true){
var result__39697__auto__ = switch__39694__auto__(state_39941);
if(cljs.core.keyword_identical_QMARK_(result__39697__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39697__auto__;
}
break;
}
}catch (e39978){var ex__39698__auto__ = e39978;
var statearr_39979_41429 = state_39941;
(statearr_39979_41429[(2)] = ex__39698__auto__);


if(cljs.core.seq((state_39941[(4)]))){
var statearr_39980_41430 = state_39941;
(statearr_39980_41430[(1)] = cljs.core.first((state_39941[(4)])));

} else {
throw ex__39698__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41432 = state_39941;
state_39941 = G__41432;
continue;
} else {
return ret_value__39696__auto__;
}
break;
}
});
cljs$core$async$state_machine__39695__auto__ = function(state_39941){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39695__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39695__auto____1.call(this,state_39941);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39695__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39695__auto____0;
cljs$core$async$state_machine__39695__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39695__auto____1;
return cljs$core$async$state_machine__39695__auto__;
})()
})();
var state__39771__auto__ = (function (){var statearr_39981 = f__39770__auto__();
(statearr_39981[(6)] = c__39769__auto___41413);

return statearr_39981;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39771__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__39986){
var vec__39987 = p__39986;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39987,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39987,(1),null);
var job = vec__39987;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__39769__auto___41434 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__39770__auto__ = (function (){var switch__39694__auto__ = (function (state_39994){
var state_val_39995 = (state_39994[(1)]);
if((state_val_39995 === (1))){
var state_39994__$1 = state_39994;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39994__$1,(2),res,v);
} else {
if((state_val_39995 === (2))){
var inst_39991 = (state_39994[(2)]);
var inst_39992 = cljs.core.async.close_BANG_(res);
var state_39994__$1 = (function (){var statearr_39996 = state_39994;
(statearr_39996[(7)] = inst_39991);

return statearr_39996;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_39994__$1,inst_39992);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__39695__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__39695__auto____0 = (function (){
var statearr_39997 = [null,null,null,null,null,null,null,null];
(statearr_39997[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__39695__auto__);

(statearr_39997[(1)] = (1));

return statearr_39997;
});
var cljs$core$async$pipeline_STAR__$_state_machine__39695__auto____1 = (function (state_39994){
while(true){
var ret_value__39696__auto__ = (function (){try{while(true){
var result__39697__auto__ = switch__39694__auto__(state_39994);
if(cljs.core.keyword_identical_QMARK_(result__39697__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39697__auto__;
}
break;
}
}catch (e39999){var ex__39698__auto__ = e39999;
var statearr_40000_41437 = state_39994;
(statearr_40000_41437[(2)] = ex__39698__auto__);


if(cljs.core.seq((state_39994[(4)]))){
var statearr_40003_41438 = state_39994;
(statearr_40003_41438[(1)] = cljs.core.first((state_39994[(4)])));

} else {
throw ex__39698__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41439 = state_39994;
state_39994 = G__41439;
continue;
} else {
return ret_value__39696__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__39695__auto__ = function(state_39994){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__39695__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__39695__auto____1.call(this,state_39994);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__39695__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__39695__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__39695__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__39695__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__39695__auto__;
})()
})();
var state__39771__auto__ = (function (){var statearr_40008 = f__39770__auto__();
(statearr_40008[(6)] = c__39769__auto___41434);

return statearr_40008;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39771__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__40011){
var vec__40013 = p__40011;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40013,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40013,(1),null);
var job = vec__40013;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4706__auto___41440 = n;
var __41441 = (0);
while(true){
if((__41441 < n__4706__auto___41440)){
var G__40017_41442 = type;
var G__40017_41443__$1 = (((G__40017_41442 instanceof cljs.core.Keyword))?G__40017_41442.fqn:null);
switch (G__40017_41443__$1) {
case "compute":
var c__39769__auto___41445 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__41441,c__39769__auto___41445,G__40017_41442,G__40017_41443__$1,n__4706__auto___41440,jobs,results,process,async){
return (function (){
var f__39770__auto__ = (function (){var switch__39694__auto__ = ((function (__41441,c__39769__auto___41445,G__40017_41442,G__40017_41443__$1,n__4706__auto___41440,jobs,results,process,async){
return (function (state_40030){
var state_val_40031 = (state_40030[(1)]);
if((state_val_40031 === (1))){
var state_40030__$1 = state_40030;
var statearr_40033_41447 = state_40030__$1;
(statearr_40033_41447[(2)] = null);

(statearr_40033_41447[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40031 === (2))){
var state_40030__$1 = state_40030;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40030__$1,(4),jobs);
} else {
if((state_val_40031 === (3))){
var inst_40028 = (state_40030[(2)]);
var state_40030__$1 = state_40030;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40030__$1,inst_40028);
} else {
if((state_val_40031 === (4))){
var inst_40020 = (state_40030[(2)]);
var inst_40021 = process(inst_40020);
var state_40030__$1 = state_40030;
if(cljs.core.truth_(inst_40021)){
var statearr_40037_41449 = state_40030__$1;
(statearr_40037_41449[(1)] = (5));

} else {
var statearr_40038_41450 = state_40030__$1;
(statearr_40038_41450[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40031 === (5))){
var state_40030__$1 = state_40030;
var statearr_40039_41451 = state_40030__$1;
(statearr_40039_41451[(2)] = null);

(statearr_40039_41451[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40031 === (6))){
var state_40030__$1 = state_40030;
var statearr_40041_41452 = state_40030__$1;
(statearr_40041_41452[(2)] = null);

(statearr_40041_41452[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40031 === (7))){
var inst_40026 = (state_40030[(2)]);
var state_40030__$1 = state_40030;
var statearr_40045_41453 = state_40030__$1;
(statearr_40045_41453[(2)] = inst_40026);

(statearr_40045_41453[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__41441,c__39769__auto___41445,G__40017_41442,G__40017_41443__$1,n__4706__auto___41440,jobs,results,process,async))
;
return ((function (__41441,switch__39694__auto__,c__39769__auto___41445,G__40017_41442,G__40017_41443__$1,n__4706__auto___41440,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__39695__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__39695__auto____0 = (function (){
var statearr_40047 = [null,null,null,null,null,null,null];
(statearr_40047[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__39695__auto__);

(statearr_40047[(1)] = (1));

return statearr_40047;
});
var cljs$core$async$pipeline_STAR__$_state_machine__39695__auto____1 = (function (state_40030){
while(true){
var ret_value__39696__auto__ = (function (){try{while(true){
var result__39697__auto__ = switch__39694__auto__(state_40030);
if(cljs.core.keyword_identical_QMARK_(result__39697__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39697__auto__;
}
break;
}
}catch (e40048){var ex__39698__auto__ = e40048;
var statearr_40050_41454 = state_40030;
(statearr_40050_41454[(2)] = ex__39698__auto__);


if(cljs.core.seq((state_40030[(4)]))){
var statearr_40052_41455 = state_40030;
(statearr_40052_41455[(1)] = cljs.core.first((state_40030[(4)])));

} else {
throw ex__39698__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41457 = state_40030;
state_40030 = G__41457;
continue;
} else {
return ret_value__39696__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__39695__auto__ = function(state_40030){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__39695__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__39695__auto____1.call(this,state_40030);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__39695__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__39695__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__39695__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__39695__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__39695__auto__;
})()
;})(__41441,switch__39694__auto__,c__39769__auto___41445,G__40017_41442,G__40017_41443__$1,n__4706__auto___41440,jobs,results,process,async))
})();
var state__39771__auto__ = (function (){var statearr_40055 = f__39770__auto__();
(statearr_40055[(6)] = c__39769__auto___41445);

return statearr_40055;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39771__auto__);
});})(__41441,c__39769__auto___41445,G__40017_41442,G__40017_41443__$1,n__4706__auto___41440,jobs,results,process,async))
);


break;
case "async":
var c__39769__auto___41459 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__41441,c__39769__auto___41459,G__40017_41442,G__40017_41443__$1,n__4706__auto___41440,jobs,results,process,async){
return (function (){
var f__39770__auto__ = (function (){var switch__39694__auto__ = ((function (__41441,c__39769__auto___41459,G__40017_41442,G__40017_41443__$1,n__4706__auto___41440,jobs,results,process,async){
return (function (state_40068){
var state_val_40069 = (state_40068[(1)]);
if((state_val_40069 === (1))){
var state_40068__$1 = state_40068;
var statearr_40071_41460 = state_40068__$1;
(statearr_40071_41460[(2)] = null);

(statearr_40071_41460[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40069 === (2))){
var state_40068__$1 = state_40068;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40068__$1,(4),jobs);
} else {
if((state_val_40069 === (3))){
var inst_40066 = (state_40068[(2)]);
var state_40068__$1 = state_40068;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40068__$1,inst_40066);
} else {
if((state_val_40069 === (4))){
var inst_40058 = (state_40068[(2)]);
var inst_40059 = async(inst_40058);
var state_40068__$1 = state_40068;
if(cljs.core.truth_(inst_40059)){
var statearr_40072_41461 = state_40068__$1;
(statearr_40072_41461[(1)] = (5));

} else {
var statearr_40073_41462 = state_40068__$1;
(statearr_40073_41462[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40069 === (5))){
var state_40068__$1 = state_40068;
var statearr_40074_41463 = state_40068__$1;
(statearr_40074_41463[(2)] = null);

(statearr_40074_41463[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40069 === (6))){
var state_40068__$1 = state_40068;
var statearr_40075_41464 = state_40068__$1;
(statearr_40075_41464[(2)] = null);

(statearr_40075_41464[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40069 === (7))){
var inst_40064 = (state_40068[(2)]);
var state_40068__$1 = state_40068;
var statearr_40076_41465 = state_40068__$1;
(statearr_40076_41465[(2)] = inst_40064);

(statearr_40076_41465[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__41441,c__39769__auto___41459,G__40017_41442,G__40017_41443__$1,n__4706__auto___41440,jobs,results,process,async))
;
return ((function (__41441,switch__39694__auto__,c__39769__auto___41459,G__40017_41442,G__40017_41443__$1,n__4706__auto___41440,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__39695__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__39695__auto____0 = (function (){
var statearr_40077 = [null,null,null,null,null,null,null];
(statearr_40077[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__39695__auto__);

(statearr_40077[(1)] = (1));

return statearr_40077;
});
var cljs$core$async$pipeline_STAR__$_state_machine__39695__auto____1 = (function (state_40068){
while(true){
var ret_value__39696__auto__ = (function (){try{while(true){
var result__39697__auto__ = switch__39694__auto__(state_40068);
if(cljs.core.keyword_identical_QMARK_(result__39697__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39697__auto__;
}
break;
}
}catch (e40078){var ex__39698__auto__ = e40078;
var statearr_40079_41466 = state_40068;
(statearr_40079_41466[(2)] = ex__39698__auto__);


if(cljs.core.seq((state_40068[(4)]))){
var statearr_40080_41467 = state_40068;
(statearr_40080_41467[(1)] = cljs.core.first((state_40068[(4)])));

} else {
throw ex__39698__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41469 = state_40068;
state_40068 = G__41469;
continue;
} else {
return ret_value__39696__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__39695__auto__ = function(state_40068){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__39695__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__39695__auto____1.call(this,state_40068);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__39695__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__39695__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__39695__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__39695__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__39695__auto__;
})()
;})(__41441,switch__39694__auto__,c__39769__auto___41459,G__40017_41442,G__40017_41443__$1,n__4706__auto___41440,jobs,results,process,async))
})();
var state__39771__auto__ = (function (){var statearr_40081 = f__39770__auto__();
(statearr_40081[(6)] = c__39769__auto___41459);

return statearr_40081;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39771__auto__);
});})(__41441,c__39769__auto___41459,G__40017_41442,G__40017_41443__$1,n__4706__auto___41440,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__40017_41443__$1)].join('')));

}

var G__41471 = (__41441 + (1));
__41441 = G__41471;
continue;
} else {
}
break;
}

var c__39769__auto___41472 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__39770__auto__ = (function (){var switch__39694__auto__ = (function (state_40103){
var state_val_40104 = (state_40103[(1)]);
if((state_val_40104 === (7))){
var inst_40099 = (state_40103[(2)]);
var state_40103__$1 = state_40103;
var statearr_40105_41473 = state_40103__$1;
(statearr_40105_41473[(2)] = inst_40099);

(statearr_40105_41473[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40104 === (1))){
var state_40103__$1 = state_40103;
var statearr_40106_41474 = state_40103__$1;
(statearr_40106_41474[(2)] = null);

(statearr_40106_41474[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40104 === (4))){
var inst_40084 = (state_40103[(7)]);
var inst_40084__$1 = (state_40103[(2)]);
var inst_40085 = (inst_40084__$1 == null);
var state_40103__$1 = (function (){var statearr_40107 = state_40103;
(statearr_40107[(7)] = inst_40084__$1);

return statearr_40107;
})();
if(cljs.core.truth_(inst_40085)){
var statearr_40108_41475 = state_40103__$1;
(statearr_40108_41475[(1)] = (5));

} else {
var statearr_40118_41476 = state_40103__$1;
(statearr_40118_41476[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40104 === (6))){
var inst_40089 = (state_40103[(8)]);
var inst_40084 = (state_40103[(7)]);
var inst_40089__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_40090 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_40091 = [inst_40084,inst_40089__$1];
var inst_40092 = (new cljs.core.PersistentVector(null,2,(5),inst_40090,inst_40091,null));
var state_40103__$1 = (function (){var statearr_40119 = state_40103;
(statearr_40119[(8)] = inst_40089__$1);

return statearr_40119;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40103__$1,(8),jobs,inst_40092);
} else {
if((state_val_40104 === (3))){
var inst_40101 = (state_40103[(2)]);
var state_40103__$1 = state_40103;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40103__$1,inst_40101);
} else {
if((state_val_40104 === (2))){
var state_40103__$1 = state_40103;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40103__$1,(4),from);
} else {
if((state_val_40104 === (9))){
var inst_40096 = (state_40103[(2)]);
var state_40103__$1 = (function (){var statearr_40120 = state_40103;
(statearr_40120[(9)] = inst_40096);

return statearr_40120;
})();
var statearr_40121_41477 = state_40103__$1;
(statearr_40121_41477[(2)] = null);

(statearr_40121_41477[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40104 === (5))){
var inst_40087 = cljs.core.async.close_BANG_(jobs);
var state_40103__$1 = state_40103;
var statearr_40122_41478 = state_40103__$1;
(statearr_40122_41478[(2)] = inst_40087);

(statearr_40122_41478[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40104 === (8))){
var inst_40089 = (state_40103[(8)]);
var inst_40094 = (state_40103[(2)]);
var state_40103__$1 = (function (){var statearr_40123 = state_40103;
(statearr_40123[(10)] = inst_40094);

return statearr_40123;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40103__$1,(9),results,inst_40089);
} else {
return null;
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
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__39695__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__39695__auto____0 = (function (){
var statearr_40124 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_40124[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__39695__auto__);

(statearr_40124[(1)] = (1));

return statearr_40124;
});
var cljs$core$async$pipeline_STAR__$_state_machine__39695__auto____1 = (function (state_40103){
while(true){
var ret_value__39696__auto__ = (function (){try{while(true){
var result__39697__auto__ = switch__39694__auto__(state_40103);
if(cljs.core.keyword_identical_QMARK_(result__39697__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39697__auto__;
}
break;
}
}catch (e40125){var ex__39698__auto__ = e40125;
var statearr_40126_41480 = state_40103;
(statearr_40126_41480[(2)] = ex__39698__auto__);


if(cljs.core.seq((state_40103[(4)]))){
var statearr_40127_41481 = state_40103;
(statearr_40127_41481[(1)] = cljs.core.first((state_40103[(4)])));

} else {
throw ex__39698__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41483 = state_40103;
state_40103 = G__41483;
continue;
} else {
return ret_value__39696__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__39695__auto__ = function(state_40103){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__39695__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__39695__auto____1.call(this,state_40103);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__39695__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__39695__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__39695__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__39695__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__39695__auto__;
})()
})();
var state__39771__auto__ = (function (){var statearr_40128 = f__39770__auto__();
(statearr_40128[(6)] = c__39769__auto___41472);

return statearr_40128;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39771__auto__);
}));


var c__39769__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__39770__auto__ = (function (){var switch__39694__auto__ = (function (state_40166){
var state_val_40167 = (state_40166[(1)]);
if((state_val_40167 === (7))){
var inst_40162 = (state_40166[(2)]);
var state_40166__$1 = state_40166;
var statearr_40168_41484 = state_40166__$1;
(statearr_40168_41484[(2)] = inst_40162);

(statearr_40168_41484[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40167 === (20))){
var state_40166__$1 = state_40166;
var statearr_40169_41485 = state_40166__$1;
(statearr_40169_41485[(2)] = null);

(statearr_40169_41485[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40167 === (1))){
var state_40166__$1 = state_40166;
var statearr_40170_41486 = state_40166__$1;
(statearr_40170_41486[(2)] = null);

(statearr_40170_41486[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40167 === (4))){
var inst_40131 = (state_40166[(7)]);
var inst_40131__$1 = (state_40166[(2)]);
var inst_40132 = (inst_40131__$1 == null);
var state_40166__$1 = (function (){var statearr_40171 = state_40166;
(statearr_40171[(7)] = inst_40131__$1);

return statearr_40171;
})();
if(cljs.core.truth_(inst_40132)){
var statearr_40172_41487 = state_40166__$1;
(statearr_40172_41487[(1)] = (5));

} else {
var statearr_40173_41488 = state_40166__$1;
(statearr_40173_41488[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40167 === (15))){
var inst_40144 = (state_40166[(8)]);
var state_40166__$1 = state_40166;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40166__$1,(18),to,inst_40144);
} else {
if((state_val_40167 === (21))){
var inst_40157 = (state_40166[(2)]);
var state_40166__$1 = state_40166;
var statearr_40174_41489 = state_40166__$1;
(statearr_40174_41489[(2)] = inst_40157);

(statearr_40174_41489[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40167 === (13))){
var inst_40159 = (state_40166[(2)]);
var state_40166__$1 = (function (){var statearr_40175 = state_40166;
(statearr_40175[(9)] = inst_40159);

return statearr_40175;
})();
var statearr_40180_41490 = state_40166__$1;
(statearr_40180_41490[(2)] = null);

(statearr_40180_41490[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40167 === (6))){
var inst_40131 = (state_40166[(7)]);
var state_40166__$1 = state_40166;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40166__$1,(11),inst_40131);
} else {
if((state_val_40167 === (17))){
var inst_40152 = (state_40166[(2)]);
var state_40166__$1 = state_40166;
if(cljs.core.truth_(inst_40152)){
var statearr_40182_41491 = state_40166__$1;
(statearr_40182_41491[(1)] = (19));

} else {
var statearr_40184_41492 = state_40166__$1;
(statearr_40184_41492[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40167 === (3))){
var inst_40164 = (state_40166[(2)]);
var state_40166__$1 = state_40166;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40166__$1,inst_40164);
} else {
if((state_val_40167 === (12))){
var inst_40141 = (state_40166[(10)]);
var state_40166__$1 = state_40166;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40166__$1,(14),inst_40141);
} else {
if((state_val_40167 === (2))){
var state_40166__$1 = state_40166;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40166__$1,(4),results);
} else {
if((state_val_40167 === (19))){
var state_40166__$1 = state_40166;
var statearr_40186_41494 = state_40166__$1;
(statearr_40186_41494[(2)] = null);

(statearr_40186_41494[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40167 === (11))){
var inst_40141 = (state_40166[(2)]);
var state_40166__$1 = (function (){var statearr_40187 = state_40166;
(statearr_40187[(10)] = inst_40141);

return statearr_40187;
})();
var statearr_40188_41495 = state_40166__$1;
(statearr_40188_41495[(2)] = null);

(statearr_40188_41495[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40167 === (9))){
var state_40166__$1 = state_40166;
var statearr_40189_41496 = state_40166__$1;
(statearr_40189_41496[(2)] = null);

(statearr_40189_41496[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40167 === (5))){
var state_40166__$1 = state_40166;
if(cljs.core.truth_(close_QMARK_)){
var statearr_40190_41497 = state_40166__$1;
(statearr_40190_41497[(1)] = (8));

} else {
var statearr_40191_41498 = state_40166__$1;
(statearr_40191_41498[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40167 === (14))){
var inst_40146 = (state_40166[(11)]);
var inst_40144 = (state_40166[(8)]);
var inst_40144__$1 = (state_40166[(2)]);
var inst_40145 = (inst_40144__$1 == null);
var inst_40146__$1 = cljs.core.not(inst_40145);
var state_40166__$1 = (function (){var statearr_40193 = state_40166;
(statearr_40193[(11)] = inst_40146__$1);

(statearr_40193[(8)] = inst_40144__$1);

return statearr_40193;
})();
if(inst_40146__$1){
var statearr_40194_41499 = state_40166__$1;
(statearr_40194_41499[(1)] = (15));

} else {
var statearr_40195_41500 = state_40166__$1;
(statearr_40195_41500[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40167 === (16))){
var inst_40146 = (state_40166[(11)]);
var state_40166__$1 = state_40166;
var statearr_40199_41501 = state_40166__$1;
(statearr_40199_41501[(2)] = inst_40146);

(statearr_40199_41501[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40167 === (10))){
var inst_40138 = (state_40166[(2)]);
var state_40166__$1 = state_40166;
var statearr_40200_41502 = state_40166__$1;
(statearr_40200_41502[(2)] = inst_40138);

(statearr_40200_41502[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40167 === (18))){
var inst_40149 = (state_40166[(2)]);
var state_40166__$1 = state_40166;
var statearr_40201_41503 = state_40166__$1;
(statearr_40201_41503[(2)] = inst_40149);

(statearr_40201_41503[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40167 === (8))){
var inst_40135 = cljs.core.async.close_BANG_(to);
var state_40166__$1 = state_40166;
var statearr_40202_41508 = state_40166__$1;
(statearr_40202_41508[(2)] = inst_40135);

(statearr_40202_41508[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__39695__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__39695__auto____0 = (function (){
var statearr_40203 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40203[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__39695__auto__);

(statearr_40203[(1)] = (1));

return statearr_40203;
});
var cljs$core$async$pipeline_STAR__$_state_machine__39695__auto____1 = (function (state_40166){
while(true){
var ret_value__39696__auto__ = (function (){try{while(true){
var result__39697__auto__ = switch__39694__auto__(state_40166);
if(cljs.core.keyword_identical_QMARK_(result__39697__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39697__auto__;
}
break;
}
}catch (e40204){var ex__39698__auto__ = e40204;
var statearr_40205_41509 = state_40166;
(statearr_40205_41509[(2)] = ex__39698__auto__);


if(cljs.core.seq((state_40166[(4)]))){
var statearr_40206_41510 = state_40166;
(statearr_40206_41510[(1)] = cljs.core.first((state_40166[(4)])));

} else {
throw ex__39698__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41511 = state_40166;
state_40166 = G__41511;
continue;
} else {
return ret_value__39696__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__39695__auto__ = function(state_40166){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__39695__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__39695__auto____1.call(this,state_40166);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__39695__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__39695__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__39695__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__39695__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__39695__auto__;
})()
})();
var state__39771__auto__ = (function (){var statearr_40207 = f__39770__auto__();
(statearr_40207[(6)] = c__39769__auto__);

return statearr_40207;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39771__auto__);
}));

return c__39769__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__40209 = arguments.length;
switch (G__40209) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__40211 = arguments.length;
switch (G__40211) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__40213 = arguments.length;
switch (G__40213) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__39769__auto___41515 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__39770__auto__ = (function (){var switch__39694__auto__ = (function (state_40239){
var state_val_40240 = (state_40239[(1)]);
if((state_val_40240 === (7))){
var inst_40235 = (state_40239[(2)]);
var state_40239__$1 = state_40239;
var statearr_40241_41516 = state_40239__$1;
(statearr_40241_41516[(2)] = inst_40235);

(statearr_40241_41516[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40240 === (1))){
var state_40239__$1 = state_40239;
var statearr_40242_41517 = state_40239__$1;
(statearr_40242_41517[(2)] = null);

(statearr_40242_41517[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40240 === (4))){
var inst_40216 = (state_40239[(7)]);
var inst_40216__$1 = (state_40239[(2)]);
var inst_40217 = (inst_40216__$1 == null);
var state_40239__$1 = (function (){var statearr_40243 = state_40239;
(statearr_40243[(7)] = inst_40216__$1);

return statearr_40243;
})();
if(cljs.core.truth_(inst_40217)){
var statearr_40244_41519 = state_40239__$1;
(statearr_40244_41519[(1)] = (5));

} else {
var statearr_40245_41520 = state_40239__$1;
(statearr_40245_41520[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40240 === (13))){
var state_40239__$1 = state_40239;
var statearr_40246_41522 = state_40239__$1;
(statearr_40246_41522[(2)] = null);

(statearr_40246_41522[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40240 === (6))){
var inst_40216 = (state_40239[(7)]);
var inst_40222 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_40216) : p.call(null,inst_40216));
var state_40239__$1 = state_40239;
if(cljs.core.truth_(inst_40222)){
var statearr_40247_41523 = state_40239__$1;
(statearr_40247_41523[(1)] = (9));

} else {
var statearr_40248_41524 = state_40239__$1;
(statearr_40248_41524[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40240 === (3))){
var inst_40237 = (state_40239[(2)]);
var state_40239__$1 = state_40239;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40239__$1,inst_40237);
} else {
if((state_val_40240 === (12))){
var state_40239__$1 = state_40239;
var statearr_40249_41525 = state_40239__$1;
(statearr_40249_41525[(2)] = null);

(statearr_40249_41525[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40240 === (2))){
var state_40239__$1 = state_40239;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40239__$1,(4),ch);
} else {
if((state_val_40240 === (11))){
var inst_40216 = (state_40239[(7)]);
var inst_40226 = (state_40239[(2)]);
var state_40239__$1 = state_40239;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40239__$1,(8),inst_40226,inst_40216);
} else {
if((state_val_40240 === (9))){
var state_40239__$1 = state_40239;
var statearr_40250_41526 = state_40239__$1;
(statearr_40250_41526[(2)] = tc);

(statearr_40250_41526[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40240 === (5))){
var inst_40219 = cljs.core.async.close_BANG_(tc);
var inst_40220 = cljs.core.async.close_BANG_(fc);
var state_40239__$1 = (function (){var statearr_40251 = state_40239;
(statearr_40251[(8)] = inst_40219);

return statearr_40251;
})();
var statearr_40252_41527 = state_40239__$1;
(statearr_40252_41527[(2)] = inst_40220);

(statearr_40252_41527[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40240 === (14))){
var inst_40233 = (state_40239[(2)]);
var state_40239__$1 = state_40239;
var statearr_40253_41528 = state_40239__$1;
(statearr_40253_41528[(2)] = inst_40233);

(statearr_40253_41528[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40240 === (10))){
var state_40239__$1 = state_40239;
var statearr_40254_41529 = state_40239__$1;
(statearr_40254_41529[(2)] = fc);

(statearr_40254_41529[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40240 === (8))){
var inst_40228 = (state_40239[(2)]);
var state_40239__$1 = state_40239;
if(cljs.core.truth_(inst_40228)){
var statearr_40255_41530 = state_40239__$1;
(statearr_40255_41530[(1)] = (12));

} else {
var statearr_40256_41531 = state_40239__$1;
(statearr_40256_41531[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
return (function() {
var cljs$core$async$state_machine__39695__auto__ = null;
var cljs$core$async$state_machine__39695__auto____0 = (function (){
var statearr_40257 = [null,null,null,null,null,null,null,null,null];
(statearr_40257[(0)] = cljs$core$async$state_machine__39695__auto__);

(statearr_40257[(1)] = (1));

return statearr_40257;
});
var cljs$core$async$state_machine__39695__auto____1 = (function (state_40239){
while(true){
var ret_value__39696__auto__ = (function (){try{while(true){
var result__39697__auto__ = switch__39694__auto__(state_40239);
if(cljs.core.keyword_identical_QMARK_(result__39697__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39697__auto__;
}
break;
}
}catch (e40258){var ex__39698__auto__ = e40258;
var statearr_40259_41532 = state_40239;
(statearr_40259_41532[(2)] = ex__39698__auto__);


if(cljs.core.seq((state_40239[(4)]))){
var statearr_40260_41533 = state_40239;
(statearr_40260_41533[(1)] = cljs.core.first((state_40239[(4)])));

} else {
throw ex__39698__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41534 = state_40239;
state_40239 = G__41534;
continue;
} else {
return ret_value__39696__auto__;
}
break;
}
});
cljs$core$async$state_machine__39695__auto__ = function(state_40239){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39695__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39695__auto____1.call(this,state_40239);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39695__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39695__auto____0;
cljs$core$async$state_machine__39695__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39695__auto____1;
return cljs$core$async$state_machine__39695__auto__;
})()
})();
var state__39771__auto__ = (function (){var statearr_40261 = f__39770__auto__();
(statearr_40261[(6)] = c__39769__auto___41515);

return statearr_40261;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39771__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__39769__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__39770__auto__ = (function (){var switch__39694__auto__ = (function (state_40283){
var state_val_40284 = (state_40283[(1)]);
if((state_val_40284 === (7))){
var inst_40279 = (state_40283[(2)]);
var state_40283__$1 = state_40283;
var statearr_40285_41539 = state_40283__$1;
(statearr_40285_41539[(2)] = inst_40279);

(statearr_40285_41539[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40284 === (1))){
var inst_40262 = init;
var inst_40263 = inst_40262;
var state_40283__$1 = (function (){var statearr_40286 = state_40283;
(statearr_40286[(7)] = inst_40263);

return statearr_40286;
})();
var statearr_40287_41543 = state_40283__$1;
(statearr_40287_41543[(2)] = null);

(statearr_40287_41543[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40284 === (4))){
var inst_40266 = (state_40283[(8)]);
var inst_40266__$1 = (state_40283[(2)]);
var inst_40267 = (inst_40266__$1 == null);
var state_40283__$1 = (function (){var statearr_40288 = state_40283;
(statearr_40288[(8)] = inst_40266__$1);

return statearr_40288;
})();
if(cljs.core.truth_(inst_40267)){
var statearr_40289_41544 = state_40283__$1;
(statearr_40289_41544[(1)] = (5));

} else {
var statearr_40290_41545 = state_40283__$1;
(statearr_40290_41545[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40284 === (6))){
var inst_40266 = (state_40283[(8)]);
var inst_40263 = (state_40283[(7)]);
var inst_40270 = (state_40283[(9)]);
var inst_40270__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_40263,inst_40266) : f.call(null,inst_40263,inst_40266));
var inst_40271 = cljs.core.reduced_QMARK_(inst_40270__$1);
var state_40283__$1 = (function (){var statearr_40291 = state_40283;
(statearr_40291[(9)] = inst_40270__$1);

return statearr_40291;
})();
if(inst_40271){
var statearr_40292_41546 = state_40283__$1;
(statearr_40292_41546[(1)] = (8));

} else {
var statearr_40293_41550 = state_40283__$1;
(statearr_40293_41550[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40284 === (3))){
var inst_40281 = (state_40283[(2)]);
var state_40283__$1 = state_40283;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40283__$1,inst_40281);
} else {
if((state_val_40284 === (2))){
var state_40283__$1 = state_40283;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40283__$1,(4),ch);
} else {
if((state_val_40284 === (9))){
var inst_40270 = (state_40283[(9)]);
var inst_40263 = inst_40270;
var state_40283__$1 = (function (){var statearr_40294 = state_40283;
(statearr_40294[(7)] = inst_40263);

return statearr_40294;
})();
var statearr_40295_41551 = state_40283__$1;
(statearr_40295_41551[(2)] = null);

(statearr_40295_41551[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40284 === (5))){
var inst_40263 = (state_40283[(7)]);
var state_40283__$1 = state_40283;
var statearr_40296_41552 = state_40283__$1;
(statearr_40296_41552[(2)] = inst_40263);

(statearr_40296_41552[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40284 === (10))){
var inst_40277 = (state_40283[(2)]);
var state_40283__$1 = state_40283;
var statearr_40297_41556 = state_40283__$1;
(statearr_40297_41556[(2)] = inst_40277);

(statearr_40297_41556[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40284 === (8))){
var inst_40270 = (state_40283[(9)]);
var inst_40273 = cljs.core.deref(inst_40270);
var state_40283__$1 = state_40283;
var statearr_40298_41557 = state_40283__$1;
(statearr_40298_41557[(2)] = inst_40273);

(statearr_40298_41557[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
return (function() {
var cljs$core$async$reduce_$_state_machine__39695__auto__ = null;
var cljs$core$async$reduce_$_state_machine__39695__auto____0 = (function (){
var statearr_40299 = [null,null,null,null,null,null,null,null,null,null];
(statearr_40299[(0)] = cljs$core$async$reduce_$_state_machine__39695__auto__);

(statearr_40299[(1)] = (1));

return statearr_40299;
});
var cljs$core$async$reduce_$_state_machine__39695__auto____1 = (function (state_40283){
while(true){
var ret_value__39696__auto__ = (function (){try{while(true){
var result__39697__auto__ = switch__39694__auto__(state_40283);
if(cljs.core.keyword_identical_QMARK_(result__39697__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39697__auto__;
}
break;
}
}catch (e40300){var ex__39698__auto__ = e40300;
var statearr_40301_41558 = state_40283;
(statearr_40301_41558[(2)] = ex__39698__auto__);


if(cljs.core.seq((state_40283[(4)]))){
var statearr_40302_41562 = state_40283;
(statearr_40302_41562[(1)] = cljs.core.first((state_40283[(4)])));

} else {
throw ex__39698__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41563 = state_40283;
state_40283 = G__41563;
continue;
} else {
return ret_value__39696__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__39695__auto__ = function(state_40283){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__39695__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__39695__auto____1.call(this,state_40283);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__39695__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__39695__auto____0;
cljs$core$async$reduce_$_state_machine__39695__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__39695__auto____1;
return cljs$core$async$reduce_$_state_machine__39695__auto__;
})()
})();
var state__39771__auto__ = (function (){var statearr_40303 = f__39770__auto__();
(statearr_40303[(6)] = c__39769__auto__);

return statearr_40303;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39771__auto__);
}));

return c__39769__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__39769__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__39770__auto__ = (function (){var switch__39694__auto__ = (function (state_40309){
var state_val_40310 = (state_40309[(1)]);
if((state_val_40310 === (1))){
var inst_40304 = cljs.core.async.reduce(f__$1,init,ch);
var state_40309__$1 = state_40309;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40309__$1,(2),inst_40304);
} else {
if((state_val_40310 === (2))){
var inst_40306 = (state_40309[(2)]);
var inst_40307 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_40306) : f__$1.call(null,inst_40306));
var state_40309__$1 = state_40309;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40309__$1,inst_40307);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__39695__auto__ = null;
var cljs$core$async$transduce_$_state_machine__39695__auto____0 = (function (){
var statearr_40311 = [null,null,null,null,null,null,null];
(statearr_40311[(0)] = cljs$core$async$transduce_$_state_machine__39695__auto__);

(statearr_40311[(1)] = (1));

return statearr_40311;
});
var cljs$core$async$transduce_$_state_machine__39695__auto____1 = (function (state_40309){
while(true){
var ret_value__39696__auto__ = (function (){try{while(true){
var result__39697__auto__ = switch__39694__auto__(state_40309);
if(cljs.core.keyword_identical_QMARK_(result__39697__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39697__auto__;
}
break;
}
}catch (e40312){var ex__39698__auto__ = e40312;
var statearr_40313_41571 = state_40309;
(statearr_40313_41571[(2)] = ex__39698__auto__);


if(cljs.core.seq((state_40309[(4)]))){
var statearr_40314_41572 = state_40309;
(statearr_40314_41572[(1)] = cljs.core.first((state_40309[(4)])));

} else {
throw ex__39698__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41573 = state_40309;
state_40309 = G__41573;
continue;
} else {
return ret_value__39696__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__39695__auto__ = function(state_40309){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__39695__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__39695__auto____1.call(this,state_40309);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__39695__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__39695__auto____0;
cljs$core$async$transduce_$_state_machine__39695__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__39695__auto____1;
return cljs$core$async$transduce_$_state_machine__39695__auto__;
})()
})();
var state__39771__auto__ = (function (){var statearr_40315 = f__39770__auto__();
(statearr_40315[(6)] = c__39769__auto__);

return statearr_40315;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39771__auto__);
}));

return c__39769__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__40317 = arguments.length;
switch (G__40317) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__39769__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__39770__auto__ = (function (){var switch__39694__auto__ = (function (state_40342){
var state_val_40343 = (state_40342[(1)]);
if((state_val_40343 === (7))){
var inst_40324 = (state_40342[(2)]);
var state_40342__$1 = state_40342;
var statearr_40344_41578 = state_40342__$1;
(statearr_40344_41578[(2)] = inst_40324);

(statearr_40344_41578[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40343 === (1))){
var inst_40318 = cljs.core.seq(coll);
var inst_40319 = inst_40318;
var state_40342__$1 = (function (){var statearr_40345 = state_40342;
(statearr_40345[(7)] = inst_40319);

return statearr_40345;
})();
var statearr_40346_41579 = state_40342__$1;
(statearr_40346_41579[(2)] = null);

(statearr_40346_41579[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40343 === (4))){
var inst_40319 = (state_40342[(7)]);
var inst_40322 = cljs.core.first(inst_40319);
var state_40342__$1 = state_40342;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40342__$1,(7),ch,inst_40322);
} else {
if((state_val_40343 === (13))){
var inst_40336 = (state_40342[(2)]);
var state_40342__$1 = state_40342;
var statearr_40347_41583 = state_40342__$1;
(statearr_40347_41583[(2)] = inst_40336);

(statearr_40347_41583[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40343 === (6))){
var inst_40327 = (state_40342[(2)]);
var state_40342__$1 = state_40342;
if(cljs.core.truth_(inst_40327)){
var statearr_40348_41584 = state_40342__$1;
(statearr_40348_41584[(1)] = (8));

} else {
var statearr_40349_41585 = state_40342__$1;
(statearr_40349_41585[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40343 === (3))){
var inst_40340 = (state_40342[(2)]);
var state_40342__$1 = state_40342;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40342__$1,inst_40340);
} else {
if((state_val_40343 === (12))){
var state_40342__$1 = state_40342;
var statearr_40350_41586 = state_40342__$1;
(statearr_40350_41586[(2)] = null);

(statearr_40350_41586[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40343 === (2))){
var inst_40319 = (state_40342[(7)]);
var state_40342__$1 = state_40342;
if(cljs.core.truth_(inst_40319)){
var statearr_40351_41587 = state_40342__$1;
(statearr_40351_41587[(1)] = (4));

} else {
var statearr_40352_41588 = state_40342__$1;
(statearr_40352_41588[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40343 === (11))){
var inst_40333 = cljs.core.async.close_BANG_(ch);
var state_40342__$1 = state_40342;
var statearr_40353_41589 = state_40342__$1;
(statearr_40353_41589[(2)] = inst_40333);

(statearr_40353_41589[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40343 === (9))){
var state_40342__$1 = state_40342;
if(cljs.core.truth_(close_QMARK_)){
var statearr_40354_41593 = state_40342__$1;
(statearr_40354_41593[(1)] = (11));

} else {
var statearr_40355_41594 = state_40342__$1;
(statearr_40355_41594[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40343 === (5))){
var inst_40319 = (state_40342[(7)]);
var state_40342__$1 = state_40342;
var statearr_40356_41595 = state_40342__$1;
(statearr_40356_41595[(2)] = inst_40319);

(statearr_40356_41595[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40343 === (10))){
var inst_40338 = (state_40342[(2)]);
var state_40342__$1 = state_40342;
var statearr_40357_41596 = state_40342__$1;
(statearr_40357_41596[(2)] = inst_40338);

(statearr_40357_41596[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40343 === (8))){
var inst_40319 = (state_40342[(7)]);
var inst_40329 = cljs.core.next(inst_40319);
var inst_40319__$1 = inst_40329;
var state_40342__$1 = (function (){var statearr_40358 = state_40342;
(statearr_40358[(7)] = inst_40319__$1);

return statearr_40358;
})();
var statearr_40359_41597 = state_40342__$1;
(statearr_40359_41597[(2)] = null);

(statearr_40359_41597[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
return (function() {
var cljs$core$async$state_machine__39695__auto__ = null;
var cljs$core$async$state_machine__39695__auto____0 = (function (){
var statearr_40360 = [null,null,null,null,null,null,null,null];
(statearr_40360[(0)] = cljs$core$async$state_machine__39695__auto__);

(statearr_40360[(1)] = (1));

return statearr_40360;
});
var cljs$core$async$state_machine__39695__auto____1 = (function (state_40342){
while(true){
var ret_value__39696__auto__ = (function (){try{while(true){
var result__39697__auto__ = switch__39694__auto__(state_40342);
if(cljs.core.keyword_identical_QMARK_(result__39697__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39697__auto__;
}
break;
}
}catch (e40361){var ex__39698__auto__ = e40361;
var statearr_40362_41598 = state_40342;
(statearr_40362_41598[(2)] = ex__39698__auto__);


if(cljs.core.seq((state_40342[(4)]))){
var statearr_40363_41599 = state_40342;
(statearr_40363_41599[(1)] = cljs.core.first((state_40342[(4)])));

} else {
throw ex__39698__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41601 = state_40342;
state_40342 = G__41601;
continue;
} else {
return ret_value__39696__auto__;
}
break;
}
});
cljs$core$async$state_machine__39695__auto__ = function(state_40342){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39695__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39695__auto____1.call(this,state_40342);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39695__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39695__auto____0;
cljs$core$async$state_machine__39695__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39695__auto____1;
return cljs$core$async$state_machine__39695__auto__;
})()
})();
var state__39771__auto__ = (function (){var statearr_40364 = f__39770__auto__();
(statearr_40364[(6)] = c__39769__auto__);

return statearr_40364;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39771__auto__);
}));

return c__39769__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__40366 = arguments.length;
switch (G__40366) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_41603 = (function (_){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4522__auto__.call(null,_));
} else {
var m__4519__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4519__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_41603(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_41604 = (function (m,ch,close_QMARK_){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4522__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4519__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4519__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_41604(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_41605 = (function (m,ch){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4522__auto__.call(null,m,ch));
} else {
var m__4519__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4519__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_41605(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_41606 = (function (m){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4522__auto__.call(null,m));
} else {
var m__4519__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4519__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_41606(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async40367 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40367 = (function (ch,cs,meta40368){
this.ch = ch;
this.cs = cs;
this.meta40368 = meta40368;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async40367.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40369,meta40368__$1){
var self__ = this;
var _40369__$1 = this;
return (new cljs.core.async.t_cljs$core$async40367(self__.ch,self__.cs,meta40368__$1));
}));

(cljs.core.async.t_cljs$core$async40367.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40369){
var self__ = this;
var _40369__$1 = this;
return self__.meta40368;
}));

(cljs.core.async.t_cljs$core$async40367.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40367.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async40367.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40367.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async40367.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async40367.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async40367.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta40368","meta40368",-1965241642,null)], null);
}));

(cljs.core.async.t_cljs$core$async40367.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async40367.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40367");

(cljs.core.async.t_cljs$core$async40367.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async40367");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async40367.
 */
cljs.core.async.__GT_t_cljs$core$async40367 = (function cljs$core$async$mult_$___GT_t_cljs$core$async40367(ch__$1,cs__$1,meta40368){
return (new cljs.core.async.t_cljs$core$async40367(ch__$1,cs__$1,meta40368));
});

}

return (new cljs.core.async.t_cljs$core$async40367(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__39769__auto___41607 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__39770__auto__ = (function (){var switch__39694__auto__ = (function (state_40502){
var state_val_40503 = (state_40502[(1)]);
if((state_val_40503 === (7))){
var inst_40498 = (state_40502[(2)]);
var state_40502__$1 = state_40502;
var statearr_40504_41608 = state_40502__$1;
(statearr_40504_41608[(2)] = inst_40498);

(statearr_40504_41608[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40503 === (20))){
var inst_40403 = (state_40502[(7)]);
var inst_40415 = cljs.core.first(inst_40403);
var inst_40416 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_40415,(0),null);
var inst_40417 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_40415,(1),null);
var state_40502__$1 = (function (){var statearr_40505 = state_40502;
(statearr_40505[(8)] = inst_40416);

return statearr_40505;
})();
if(cljs.core.truth_(inst_40417)){
var statearr_40506_41609 = state_40502__$1;
(statearr_40506_41609[(1)] = (22));

} else {
var statearr_40507_41610 = state_40502__$1;
(statearr_40507_41610[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40503 === (27))){
var inst_40445 = (state_40502[(9)]);
var inst_40452 = (state_40502[(10)]);
var inst_40447 = (state_40502[(11)]);
var inst_40372 = (state_40502[(12)]);
var inst_40452__$1 = cljs.core._nth(inst_40445,inst_40447);
var inst_40453 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_40452__$1,inst_40372,done);
var state_40502__$1 = (function (){var statearr_40508 = state_40502;
(statearr_40508[(10)] = inst_40452__$1);

return statearr_40508;
})();
if(cljs.core.truth_(inst_40453)){
var statearr_40509_41611 = state_40502__$1;
(statearr_40509_41611[(1)] = (30));

} else {
var statearr_40510_41612 = state_40502__$1;
(statearr_40510_41612[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40503 === (1))){
var state_40502__$1 = state_40502;
var statearr_40511_41613 = state_40502__$1;
(statearr_40511_41613[(2)] = null);

(statearr_40511_41613[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40503 === (24))){
var inst_40403 = (state_40502[(7)]);
var inst_40422 = (state_40502[(2)]);
var inst_40423 = cljs.core.next(inst_40403);
var inst_40381 = inst_40423;
var inst_40382 = null;
var inst_40383 = (0);
var inst_40384 = (0);
var state_40502__$1 = (function (){var statearr_40512 = state_40502;
(statearr_40512[(13)] = inst_40382);

(statearr_40512[(14)] = inst_40383);

(statearr_40512[(15)] = inst_40384);

(statearr_40512[(16)] = inst_40381);

(statearr_40512[(17)] = inst_40422);

return statearr_40512;
})();
var statearr_40513_41616 = state_40502__$1;
(statearr_40513_41616[(2)] = null);

(statearr_40513_41616[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40503 === (39))){
var state_40502__$1 = state_40502;
var statearr_40517_41620 = state_40502__$1;
(statearr_40517_41620[(2)] = null);

(statearr_40517_41620[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40503 === (4))){
var inst_40372 = (state_40502[(12)]);
var inst_40372__$1 = (state_40502[(2)]);
var inst_40373 = (inst_40372__$1 == null);
var state_40502__$1 = (function (){var statearr_40518 = state_40502;
(statearr_40518[(12)] = inst_40372__$1);

return statearr_40518;
})();
if(cljs.core.truth_(inst_40373)){
var statearr_40519_41621 = state_40502__$1;
(statearr_40519_41621[(1)] = (5));

} else {
var statearr_40520_41622 = state_40502__$1;
(statearr_40520_41622[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40503 === (15))){
var inst_40382 = (state_40502[(13)]);
var inst_40383 = (state_40502[(14)]);
var inst_40384 = (state_40502[(15)]);
var inst_40381 = (state_40502[(16)]);
var inst_40399 = (state_40502[(2)]);
var inst_40400 = (inst_40384 + (1));
var tmp40514 = inst_40382;
var tmp40515 = inst_40383;
var tmp40516 = inst_40381;
var inst_40381__$1 = tmp40516;
var inst_40382__$1 = tmp40514;
var inst_40383__$1 = tmp40515;
var inst_40384__$1 = inst_40400;
var state_40502__$1 = (function (){var statearr_40521 = state_40502;
(statearr_40521[(18)] = inst_40399);

(statearr_40521[(13)] = inst_40382__$1);

(statearr_40521[(14)] = inst_40383__$1);

(statearr_40521[(15)] = inst_40384__$1);

(statearr_40521[(16)] = inst_40381__$1);

return statearr_40521;
})();
var statearr_40522_41624 = state_40502__$1;
(statearr_40522_41624[(2)] = null);

(statearr_40522_41624[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40503 === (21))){
var inst_40426 = (state_40502[(2)]);
var state_40502__$1 = state_40502;
var statearr_40526_41625 = state_40502__$1;
(statearr_40526_41625[(2)] = inst_40426);

(statearr_40526_41625[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40503 === (31))){
var inst_40452 = (state_40502[(10)]);
var inst_40456 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_40452);
var state_40502__$1 = state_40502;
var statearr_40527_41627 = state_40502__$1;
(statearr_40527_41627[(2)] = inst_40456);

(statearr_40527_41627[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40503 === (32))){
var inst_40445 = (state_40502[(9)]);
var inst_40447 = (state_40502[(11)]);
var inst_40446 = (state_40502[(19)]);
var inst_40444 = (state_40502[(20)]);
var inst_40458 = (state_40502[(2)]);
var inst_40459 = (inst_40447 + (1));
var tmp40523 = inst_40445;
var tmp40524 = inst_40446;
var tmp40525 = inst_40444;
var inst_40444__$1 = tmp40525;
var inst_40445__$1 = tmp40523;
var inst_40446__$1 = tmp40524;
var inst_40447__$1 = inst_40459;
var state_40502__$1 = (function (){var statearr_40528 = state_40502;
(statearr_40528[(21)] = inst_40458);

(statearr_40528[(9)] = inst_40445__$1);

(statearr_40528[(11)] = inst_40447__$1);

(statearr_40528[(19)] = inst_40446__$1);

(statearr_40528[(20)] = inst_40444__$1);

return statearr_40528;
})();
var statearr_40529_41629 = state_40502__$1;
(statearr_40529_41629[(2)] = null);

(statearr_40529_41629[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40503 === (40))){
var inst_40471 = (state_40502[(22)]);
var inst_40475 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_40471);
var state_40502__$1 = state_40502;
var statearr_40530_41630 = state_40502__$1;
(statearr_40530_41630[(2)] = inst_40475);

(statearr_40530_41630[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40503 === (33))){
var inst_40462 = (state_40502[(23)]);
var inst_40464 = cljs.core.chunked_seq_QMARK_(inst_40462);
var state_40502__$1 = state_40502;
if(inst_40464){
var statearr_40531_41631 = state_40502__$1;
(statearr_40531_41631[(1)] = (36));

} else {
var statearr_40532_41632 = state_40502__$1;
(statearr_40532_41632[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40503 === (13))){
var inst_40393 = (state_40502[(24)]);
var inst_40396 = cljs.core.async.close_BANG_(inst_40393);
var state_40502__$1 = state_40502;
var statearr_40533_41633 = state_40502__$1;
(statearr_40533_41633[(2)] = inst_40396);

(statearr_40533_41633[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40503 === (22))){
var inst_40416 = (state_40502[(8)]);
var inst_40419 = cljs.core.async.close_BANG_(inst_40416);
var state_40502__$1 = state_40502;
var statearr_40534_41634 = state_40502__$1;
(statearr_40534_41634[(2)] = inst_40419);

(statearr_40534_41634[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40503 === (36))){
var inst_40462 = (state_40502[(23)]);
var inst_40466 = cljs.core.chunk_first(inst_40462);
var inst_40467 = cljs.core.chunk_rest(inst_40462);
var inst_40468 = cljs.core.count(inst_40466);
var inst_40444 = inst_40467;
var inst_40445 = inst_40466;
var inst_40446 = inst_40468;
var inst_40447 = (0);
var state_40502__$1 = (function (){var statearr_40535 = state_40502;
(statearr_40535[(9)] = inst_40445);

(statearr_40535[(11)] = inst_40447);

(statearr_40535[(19)] = inst_40446);

(statearr_40535[(20)] = inst_40444);

return statearr_40535;
})();
var statearr_40536_41635 = state_40502__$1;
(statearr_40536_41635[(2)] = null);

(statearr_40536_41635[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40503 === (41))){
var inst_40462 = (state_40502[(23)]);
var inst_40477 = (state_40502[(2)]);
var inst_40478 = cljs.core.next(inst_40462);
var inst_40444 = inst_40478;
var inst_40445 = null;
var inst_40446 = (0);
var inst_40447 = (0);
var state_40502__$1 = (function (){var statearr_40537 = state_40502;
(statearr_40537[(9)] = inst_40445);

(statearr_40537[(11)] = inst_40447);

(statearr_40537[(19)] = inst_40446);

(statearr_40537[(20)] = inst_40444);

(statearr_40537[(25)] = inst_40477);

return statearr_40537;
})();
var statearr_40538_41636 = state_40502__$1;
(statearr_40538_41636[(2)] = null);

(statearr_40538_41636[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40503 === (43))){
var state_40502__$1 = state_40502;
var statearr_40539_41638 = state_40502__$1;
(statearr_40539_41638[(2)] = null);

(statearr_40539_41638[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40503 === (29))){
var inst_40486 = (state_40502[(2)]);
var state_40502__$1 = state_40502;
var statearr_40540_41642 = state_40502__$1;
(statearr_40540_41642[(2)] = inst_40486);

(statearr_40540_41642[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40503 === (44))){
var inst_40495 = (state_40502[(2)]);
var state_40502__$1 = (function (){var statearr_40541 = state_40502;
(statearr_40541[(26)] = inst_40495);

return statearr_40541;
})();
var statearr_40542_41643 = state_40502__$1;
(statearr_40542_41643[(2)] = null);

(statearr_40542_41643[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40503 === (6))){
var inst_40436 = (state_40502[(27)]);
var inst_40435 = cljs.core.deref(cs);
var inst_40436__$1 = cljs.core.keys(inst_40435);
var inst_40437 = cljs.core.count(inst_40436__$1);
var inst_40438 = cljs.core.reset_BANG_(dctr,inst_40437);
var inst_40443 = cljs.core.seq(inst_40436__$1);
var inst_40444 = inst_40443;
var inst_40445 = null;
var inst_40446 = (0);
var inst_40447 = (0);
var state_40502__$1 = (function (){var statearr_40543 = state_40502;
(statearr_40543[(28)] = inst_40438);

(statearr_40543[(9)] = inst_40445);

(statearr_40543[(11)] = inst_40447);

(statearr_40543[(19)] = inst_40446);

(statearr_40543[(20)] = inst_40444);

(statearr_40543[(27)] = inst_40436__$1);

return statearr_40543;
})();
var statearr_40544_41646 = state_40502__$1;
(statearr_40544_41646[(2)] = null);

(statearr_40544_41646[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40503 === (28))){
var inst_40462 = (state_40502[(23)]);
var inst_40444 = (state_40502[(20)]);
var inst_40462__$1 = cljs.core.seq(inst_40444);
var state_40502__$1 = (function (){var statearr_40545 = state_40502;
(statearr_40545[(23)] = inst_40462__$1);

return statearr_40545;
})();
if(inst_40462__$1){
var statearr_40546_41649 = state_40502__$1;
(statearr_40546_41649[(1)] = (33));

} else {
var statearr_40547_41650 = state_40502__$1;
(statearr_40547_41650[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40503 === (25))){
var inst_40447 = (state_40502[(11)]);
var inst_40446 = (state_40502[(19)]);
var inst_40449 = (inst_40447 < inst_40446);
var inst_40450 = inst_40449;
var state_40502__$1 = state_40502;
if(cljs.core.truth_(inst_40450)){
var statearr_40548_41651 = state_40502__$1;
(statearr_40548_41651[(1)] = (27));

} else {
var statearr_40549_41652 = state_40502__$1;
(statearr_40549_41652[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40503 === (34))){
var state_40502__$1 = state_40502;
var statearr_40550_41653 = state_40502__$1;
(statearr_40550_41653[(2)] = null);

(statearr_40550_41653[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40503 === (17))){
var state_40502__$1 = state_40502;
var statearr_40551_41654 = state_40502__$1;
(statearr_40551_41654[(2)] = null);

(statearr_40551_41654[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40503 === (3))){
var inst_40500 = (state_40502[(2)]);
var state_40502__$1 = state_40502;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40502__$1,inst_40500);
} else {
if((state_val_40503 === (12))){
var inst_40431 = (state_40502[(2)]);
var state_40502__$1 = state_40502;
var statearr_40552_41658 = state_40502__$1;
(statearr_40552_41658[(2)] = inst_40431);

(statearr_40552_41658[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40503 === (2))){
var state_40502__$1 = state_40502;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40502__$1,(4),ch);
} else {
if((state_val_40503 === (23))){
var state_40502__$1 = state_40502;
var statearr_40553_41663 = state_40502__$1;
(statearr_40553_41663[(2)] = null);

(statearr_40553_41663[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40503 === (35))){
var inst_40484 = (state_40502[(2)]);
var state_40502__$1 = state_40502;
var statearr_40554_41664 = state_40502__$1;
(statearr_40554_41664[(2)] = inst_40484);

(statearr_40554_41664[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40503 === (19))){
var inst_40403 = (state_40502[(7)]);
var inst_40407 = cljs.core.chunk_first(inst_40403);
var inst_40408 = cljs.core.chunk_rest(inst_40403);
var inst_40409 = cljs.core.count(inst_40407);
var inst_40381 = inst_40408;
var inst_40382 = inst_40407;
var inst_40383 = inst_40409;
var inst_40384 = (0);
var state_40502__$1 = (function (){var statearr_40555 = state_40502;
(statearr_40555[(13)] = inst_40382);

(statearr_40555[(14)] = inst_40383);

(statearr_40555[(15)] = inst_40384);

(statearr_40555[(16)] = inst_40381);

return statearr_40555;
})();
var statearr_40556_41671 = state_40502__$1;
(statearr_40556_41671[(2)] = null);

(statearr_40556_41671[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40503 === (11))){
var inst_40381 = (state_40502[(16)]);
var inst_40403 = (state_40502[(7)]);
var inst_40403__$1 = cljs.core.seq(inst_40381);
var state_40502__$1 = (function (){var statearr_40557 = state_40502;
(statearr_40557[(7)] = inst_40403__$1);

return statearr_40557;
})();
if(inst_40403__$1){
var statearr_40558_41672 = state_40502__$1;
(statearr_40558_41672[(1)] = (16));

} else {
var statearr_40559_41673 = state_40502__$1;
(statearr_40559_41673[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40503 === (9))){
var inst_40433 = (state_40502[(2)]);
var state_40502__$1 = state_40502;
var statearr_40560_41674 = state_40502__$1;
(statearr_40560_41674[(2)] = inst_40433);

(statearr_40560_41674[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40503 === (5))){
var inst_40379 = cljs.core.deref(cs);
var inst_40380 = cljs.core.seq(inst_40379);
var inst_40381 = inst_40380;
var inst_40382 = null;
var inst_40383 = (0);
var inst_40384 = (0);
var state_40502__$1 = (function (){var statearr_40561 = state_40502;
(statearr_40561[(13)] = inst_40382);

(statearr_40561[(14)] = inst_40383);

(statearr_40561[(15)] = inst_40384);

(statearr_40561[(16)] = inst_40381);

return statearr_40561;
})();
var statearr_40562_41675 = state_40502__$1;
(statearr_40562_41675[(2)] = null);

(statearr_40562_41675[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40503 === (14))){
var state_40502__$1 = state_40502;
var statearr_40563_41676 = state_40502__$1;
(statearr_40563_41676[(2)] = null);

(statearr_40563_41676[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40503 === (45))){
var inst_40492 = (state_40502[(2)]);
var state_40502__$1 = state_40502;
var statearr_40564_41677 = state_40502__$1;
(statearr_40564_41677[(2)] = inst_40492);

(statearr_40564_41677[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40503 === (26))){
var inst_40436 = (state_40502[(27)]);
var inst_40488 = (state_40502[(2)]);
var inst_40489 = cljs.core.seq(inst_40436);
var state_40502__$1 = (function (){var statearr_40565 = state_40502;
(statearr_40565[(29)] = inst_40488);

return statearr_40565;
})();
if(inst_40489){
var statearr_40566_41678 = state_40502__$1;
(statearr_40566_41678[(1)] = (42));

} else {
var statearr_40567_41679 = state_40502__$1;
(statearr_40567_41679[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40503 === (16))){
var inst_40403 = (state_40502[(7)]);
var inst_40405 = cljs.core.chunked_seq_QMARK_(inst_40403);
var state_40502__$1 = state_40502;
if(inst_40405){
var statearr_40568_41680 = state_40502__$1;
(statearr_40568_41680[(1)] = (19));

} else {
var statearr_40569_41681 = state_40502__$1;
(statearr_40569_41681[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40503 === (38))){
var inst_40481 = (state_40502[(2)]);
var state_40502__$1 = state_40502;
var statearr_40570_41682 = state_40502__$1;
(statearr_40570_41682[(2)] = inst_40481);

(statearr_40570_41682[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40503 === (30))){
var state_40502__$1 = state_40502;
var statearr_40571_41683 = state_40502__$1;
(statearr_40571_41683[(2)] = null);

(statearr_40571_41683[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40503 === (10))){
var inst_40382 = (state_40502[(13)]);
var inst_40384 = (state_40502[(15)]);
var inst_40392 = cljs.core._nth(inst_40382,inst_40384);
var inst_40393 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_40392,(0),null);
var inst_40394 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_40392,(1),null);
var state_40502__$1 = (function (){var statearr_40572 = state_40502;
(statearr_40572[(24)] = inst_40393);

return statearr_40572;
})();
if(cljs.core.truth_(inst_40394)){
var statearr_40573_41684 = state_40502__$1;
(statearr_40573_41684[(1)] = (13));

} else {
var statearr_40574_41685 = state_40502__$1;
(statearr_40574_41685[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40503 === (18))){
var inst_40429 = (state_40502[(2)]);
var state_40502__$1 = state_40502;
var statearr_40575_41686 = state_40502__$1;
(statearr_40575_41686[(2)] = inst_40429);

(statearr_40575_41686[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40503 === (42))){
var state_40502__$1 = state_40502;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40502__$1,(45),dchan);
} else {
if((state_val_40503 === (37))){
var inst_40462 = (state_40502[(23)]);
var inst_40471 = (state_40502[(22)]);
var inst_40372 = (state_40502[(12)]);
var inst_40471__$1 = cljs.core.first(inst_40462);
var inst_40472 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_40471__$1,inst_40372,done);
var state_40502__$1 = (function (){var statearr_40576 = state_40502;
(statearr_40576[(22)] = inst_40471__$1);

return statearr_40576;
})();
if(cljs.core.truth_(inst_40472)){
var statearr_40577_41687 = state_40502__$1;
(statearr_40577_41687[(1)] = (39));

} else {
var statearr_40578_41694 = state_40502__$1;
(statearr_40578_41694[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40503 === (8))){
var inst_40383 = (state_40502[(14)]);
var inst_40384 = (state_40502[(15)]);
var inst_40386 = (inst_40384 < inst_40383);
var inst_40387 = inst_40386;
var state_40502__$1 = state_40502;
if(cljs.core.truth_(inst_40387)){
var statearr_40579_41695 = state_40502__$1;
(statearr_40579_41695[(1)] = (10));

} else {
var statearr_40580_41696 = state_40502__$1;
(statearr_40580_41696[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__39695__auto__ = null;
var cljs$core$async$mult_$_state_machine__39695__auto____0 = (function (){
var statearr_40581 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40581[(0)] = cljs$core$async$mult_$_state_machine__39695__auto__);

(statearr_40581[(1)] = (1));

return statearr_40581;
});
var cljs$core$async$mult_$_state_machine__39695__auto____1 = (function (state_40502){
while(true){
var ret_value__39696__auto__ = (function (){try{while(true){
var result__39697__auto__ = switch__39694__auto__(state_40502);
if(cljs.core.keyword_identical_QMARK_(result__39697__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39697__auto__;
}
break;
}
}catch (e40582){var ex__39698__auto__ = e40582;
var statearr_40583_41697 = state_40502;
(statearr_40583_41697[(2)] = ex__39698__auto__);


if(cljs.core.seq((state_40502[(4)]))){
var statearr_40584_41698 = state_40502;
(statearr_40584_41698[(1)] = cljs.core.first((state_40502[(4)])));

} else {
throw ex__39698__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41699 = state_40502;
state_40502 = G__41699;
continue;
} else {
return ret_value__39696__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__39695__auto__ = function(state_40502){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__39695__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__39695__auto____1.call(this,state_40502);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__39695__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__39695__auto____0;
cljs$core$async$mult_$_state_machine__39695__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__39695__auto____1;
return cljs$core$async$mult_$_state_machine__39695__auto__;
})()
})();
var state__39771__auto__ = (function (){var statearr_40585 = f__39770__auto__();
(statearr_40585[(6)] = c__39769__auto___41607);

return statearr_40585;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39771__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__40587 = arguments.length;
switch (G__40587) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_41701 = (function (m,ch){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4522__auto__.call(null,m,ch));
} else {
var m__4519__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4519__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_41701(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_41702 = (function (m,ch){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4522__auto__.call(null,m,ch));
} else {
var m__4519__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4519__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_41702(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_41709 = (function (m){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4522__auto__.call(null,m));
} else {
var m__4519__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4519__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_41709(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_41710 = (function (m,state_map){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4522__auto__.call(null,m,state_map));
} else {
var m__4519__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4519__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_41710(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_41711 = (function (m,mode){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4522__auto__.call(null,m,mode));
} else {
var m__4519__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4519__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_41711(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___41712 = arguments.length;
var i__4830__auto___41713 = (0);
while(true){
if((i__4830__auto___41713 < len__4829__auto___41712)){
args__4835__auto__.push((arguments[i__4830__auto___41713]));

var G__41714 = (i__4830__auto___41713 + (1));
i__4830__auto___41713 = G__41714;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((3) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4836__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__40592){
var map__40593 = p__40592;
var map__40593__$1 = cljs.core.__destructure_map(map__40593);
var opts = map__40593__$1;
var statearr_40594_41715 = state;
(statearr_40594_41715[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_40595_41716 = state;
(statearr_40595_41716[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_40596_41717 = state;
(statearr_40596_41717[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq40588){
var G__40589 = cljs.core.first(seq40588);
var seq40588__$1 = cljs.core.next(seq40588);
var G__40590 = cljs.core.first(seq40588__$1);
var seq40588__$2 = cljs.core.next(seq40588__$1);
var G__40591 = cljs.core.first(seq40588__$2);
var seq40588__$3 = cljs.core.next(seq40588__$2);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40589,G__40590,G__40591,seq40588__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async40597 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40597 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta40598){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta40598 = meta40598;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async40597.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40599,meta40598__$1){
var self__ = this;
var _40599__$1 = this;
return (new cljs.core.async.t_cljs$core$async40597(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta40598__$1));
}));

(cljs.core.async.t_cljs$core$async40597.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40599){
var self__ = this;
var _40599__$1 = this;
return self__.meta40598;
}));

(cljs.core.async.t_cljs$core$async40597.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40597.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async40597.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40597.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async40597.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async40597.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async40597.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async40597.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async40597.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta40598","meta40598",1163015453,null)], null);
}));

(cljs.core.async.t_cljs$core$async40597.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async40597.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40597");

(cljs.core.async.t_cljs$core$async40597.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async40597");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async40597.
 */
cljs.core.async.__GT_t_cljs$core$async40597 = (function cljs$core$async$mix_$___GT_t_cljs$core$async40597(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta40598){
return (new cljs.core.async.t_cljs$core$async40597(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta40598));
});

}

return (new cljs.core.async.t_cljs$core$async40597(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__39769__auto___41724 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__39770__auto__ = (function (){var switch__39694__auto__ = (function (state_40667){
var state_val_40668 = (state_40667[(1)]);
if((state_val_40668 === (7))){
var inst_40627 = (state_40667[(2)]);
var state_40667__$1 = state_40667;
if(cljs.core.truth_(inst_40627)){
var statearr_40669_41725 = state_40667__$1;
(statearr_40669_41725[(1)] = (8));

} else {
var statearr_40670_41726 = state_40667__$1;
(statearr_40670_41726[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40668 === (20))){
var inst_40620 = (state_40667[(7)]);
var state_40667__$1 = state_40667;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40667__$1,(23),out,inst_40620);
} else {
if((state_val_40668 === (1))){
var inst_40603 = calc_state();
var inst_40604 = cljs.core.__destructure_map(inst_40603);
var inst_40605 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_40604,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_40606 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_40604,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_40607 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_40604,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_40608 = inst_40603;
var state_40667__$1 = (function (){var statearr_40671 = state_40667;
(statearr_40671[(8)] = inst_40607);

(statearr_40671[(9)] = inst_40606);

(statearr_40671[(10)] = inst_40608);

(statearr_40671[(11)] = inst_40605);

return statearr_40671;
})();
var statearr_40672_41727 = state_40667__$1;
(statearr_40672_41727[(2)] = null);

(statearr_40672_41727[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40668 === (24))){
var inst_40611 = (state_40667[(12)]);
var inst_40608 = inst_40611;
var state_40667__$1 = (function (){var statearr_40673 = state_40667;
(statearr_40673[(10)] = inst_40608);

return statearr_40673;
})();
var statearr_40674_41728 = state_40667__$1;
(statearr_40674_41728[(2)] = null);

(statearr_40674_41728[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40668 === (4))){
var inst_40622 = (state_40667[(13)]);
var inst_40620 = (state_40667[(7)]);
var inst_40619 = (state_40667[(2)]);
var inst_40620__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_40619,(0),null);
var inst_40621 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_40619,(1),null);
var inst_40622__$1 = (inst_40620__$1 == null);
var state_40667__$1 = (function (){var statearr_40675 = state_40667;
(statearr_40675[(13)] = inst_40622__$1);

(statearr_40675[(7)] = inst_40620__$1);

(statearr_40675[(14)] = inst_40621);

return statearr_40675;
})();
if(cljs.core.truth_(inst_40622__$1)){
var statearr_40676_41729 = state_40667__$1;
(statearr_40676_41729[(1)] = (5));

} else {
var statearr_40677_41730 = state_40667__$1;
(statearr_40677_41730[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40668 === (15))){
var inst_40641 = (state_40667[(15)]);
var inst_40612 = (state_40667[(16)]);
var inst_40641__$1 = cljs.core.empty_QMARK_(inst_40612);
var state_40667__$1 = (function (){var statearr_40678 = state_40667;
(statearr_40678[(15)] = inst_40641__$1);

return statearr_40678;
})();
if(inst_40641__$1){
var statearr_40679_41731 = state_40667__$1;
(statearr_40679_41731[(1)] = (17));

} else {
var statearr_40680_41732 = state_40667__$1;
(statearr_40680_41732[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40668 === (21))){
var inst_40611 = (state_40667[(12)]);
var inst_40608 = inst_40611;
var state_40667__$1 = (function (){var statearr_40681 = state_40667;
(statearr_40681[(10)] = inst_40608);

return statearr_40681;
})();
var statearr_40682_41733 = state_40667__$1;
(statearr_40682_41733[(2)] = null);

(statearr_40682_41733[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40668 === (13))){
var inst_40634 = (state_40667[(2)]);
var inst_40635 = calc_state();
var inst_40608 = inst_40635;
var state_40667__$1 = (function (){var statearr_40683 = state_40667;
(statearr_40683[(17)] = inst_40634);

(statearr_40683[(10)] = inst_40608);

return statearr_40683;
})();
var statearr_40684_41734 = state_40667__$1;
(statearr_40684_41734[(2)] = null);

(statearr_40684_41734[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40668 === (22))){
var inst_40661 = (state_40667[(2)]);
var state_40667__$1 = state_40667;
var statearr_40685_41735 = state_40667__$1;
(statearr_40685_41735[(2)] = inst_40661);

(statearr_40685_41735[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40668 === (6))){
var inst_40621 = (state_40667[(14)]);
var inst_40625 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_40621,change);
var state_40667__$1 = state_40667;
var statearr_40686_41736 = state_40667__$1;
(statearr_40686_41736[(2)] = inst_40625);

(statearr_40686_41736[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40668 === (25))){
var state_40667__$1 = state_40667;
var statearr_40687_41737 = state_40667__$1;
(statearr_40687_41737[(2)] = null);

(statearr_40687_41737[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40668 === (17))){
var inst_40621 = (state_40667[(14)]);
var inst_40613 = (state_40667[(18)]);
var inst_40643 = (inst_40613.cljs$core$IFn$_invoke$arity$1 ? inst_40613.cljs$core$IFn$_invoke$arity$1(inst_40621) : inst_40613.call(null,inst_40621));
var inst_40644 = cljs.core.not(inst_40643);
var state_40667__$1 = state_40667;
var statearr_40688_41739 = state_40667__$1;
(statearr_40688_41739[(2)] = inst_40644);

(statearr_40688_41739[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40668 === (3))){
var inst_40665 = (state_40667[(2)]);
var state_40667__$1 = state_40667;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40667__$1,inst_40665);
} else {
if((state_val_40668 === (12))){
var state_40667__$1 = state_40667;
var statearr_40689_41744 = state_40667__$1;
(statearr_40689_41744[(2)] = null);

(statearr_40689_41744[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40668 === (2))){
var inst_40611 = (state_40667[(12)]);
var inst_40608 = (state_40667[(10)]);
var inst_40611__$1 = cljs.core.__destructure_map(inst_40608);
var inst_40612 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_40611__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_40613 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_40611__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_40614 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_40611__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_40667__$1 = (function (){var statearr_40690 = state_40667;
(statearr_40690[(18)] = inst_40613);

(statearr_40690[(12)] = inst_40611__$1);

(statearr_40690[(16)] = inst_40612);

return statearr_40690;
})();
return cljs.core.async.ioc_alts_BANG_(state_40667__$1,(4),inst_40614);
} else {
if((state_val_40668 === (23))){
var inst_40652 = (state_40667[(2)]);
var state_40667__$1 = state_40667;
if(cljs.core.truth_(inst_40652)){
var statearr_40691_41745 = state_40667__$1;
(statearr_40691_41745[(1)] = (24));

} else {
var statearr_40692_41746 = state_40667__$1;
(statearr_40692_41746[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40668 === (19))){
var inst_40647 = (state_40667[(2)]);
var state_40667__$1 = state_40667;
var statearr_40693_41747 = state_40667__$1;
(statearr_40693_41747[(2)] = inst_40647);

(statearr_40693_41747[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40668 === (11))){
var inst_40621 = (state_40667[(14)]);
var inst_40631 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_40621);
var state_40667__$1 = state_40667;
var statearr_40694_41748 = state_40667__$1;
(statearr_40694_41748[(2)] = inst_40631);

(statearr_40694_41748[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40668 === (9))){
var inst_40621 = (state_40667[(14)]);
var inst_40638 = (state_40667[(19)]);
var inst_40612 = (state_40667[(16)]);
var inst_40638__$1 = (inst_40612.cljs$core$IFn$_invoke$arity$1 ? inst_40612.cljs$core$IFn$_invoke$arity$1(inst_40621) : inst_40612.call(null,inst_40621));
var state_40667__$1 = (function (){var statearr_40695 = state_40667;
(statearr_40695[(19)] = inst_40638__$1);

return statearr_40695;
})();
if(cljs.core.truth_(inst_40638__$1)){
var statearr_40696_41749 = state_40667__$1;
(statearr_40696_41749[(1)] = (14));

} else {
var statearr_40697_41750 = state_40667__$1;
(statearr_40697_41750[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40668 === (5))){
var inst_40622 = (state_40667[(13)]);
var state_40667__$1 = state_40667;
var statearr_40698_41751 = state_40667__$1;
(statearr_40698_41751[(2)] = inst_40622);

(statearr_40698_41751[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40668 === (14))){
var inst_40638 = (state_40667[(19)]);
var state_40667__$1 = state_40667;
var statearr_40699_41752 = state_40667__$1;
(statearr_40699_41752[(2)] = inst_40638);

(statearr_40699_41752[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40668 === (26))){
var inst_40657 = (state_40667[(2)]);
var state_40667__$1 = state_40667;
var statearr_40700_41753 = state_40667__$1;
(statearr_40700_41753[(2)] = inst_40657);

(statearr_40700_41753[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40668 === (16))){
var inst_40649 = (state_40667[(2)]);
var state_40667__$1 = state_40667;
if(cljs.core.truth_(inst_40649)){
var statearr_40701_41754 = state_40667__$1;
(statearr_40701_41754[(1)] = (20));

} else {
var statearr_40702_41755 = state_40667__$1;
(statearr_40702_41755[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40668 === (10))){
var inst_40663 = (state_40667[(2)]);
var state_40667__$1 = state_40667;
var statearr_40703_41756 = state_40667__$1;
(statearr_40703_41756[(2)] = inst_40663);

(statearr_40703_41756[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40668 === (18))){
var inst_40641 = (state_40667[(15)]);
var state_40667__$1 = state_40667;
var statearr_40704_41757 = state_40667__$1;
(statearr_40704_41757[(2)] = inst_40641);

(statearr_40704_41757[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40668 === (8))){
var inst_40620 = (state_40667[(7)]);
var inst_40629 = (inst_40620 == null);
var state_40667__$1 = state_40667;
if(cljs.core.truth_(inst_40629)){
var statearr_40705_41758 = state_40667__$1;
(statearr_40705_41758[(1)] = (11));

} else {
var statearr_40706_41759 = state_40667__$1;
(statearr_40706_41759[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__39695__auto__ = null;
var cljs$core$async$mix_$_state_machine__39695__auto____0 = (function (){
var statearr_40707 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40707[(0)] = cljs$core$async$mix_$_state_machine__39695__auto__);

(statearr_40707[(1)] = (1));

return statearr_40707;
});
var cljs$core$async$mix_$_state_machine__39695__auto____1 = (function (state_40667){
while(true){
var ret_value__39696__auto__ = (function (){try{while(true){
var result__39697__auto__ = switch__39694__auto__(state_40667);
if(cljs.core.keyword_identical_QMARK_(result__39697__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39697__auto__;
}
break;
}
}catch (e40708){var ex__39698__auto__ = e40708;
var statearr_40709_41761 = state_40667;
(statearr_40709_41761[(2)] = ex__39698__auto__);


if(cljs.core.seq((state_40667[(4)]))){
var statearr_40710_41763 = state_40667;
(statearr_40710_41763[(1)] = cljs.core.first((state_40667[(4)])));

} else {
throw ex__39698__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41764 = state_40667;
state_40667 = G__41764;
continue;
} else {
return ret_value__39696__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__39695__auto__ = function(state_40667){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__39695__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__39695__auto____1.call(this,state_40667);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__39695__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__39695__auto____0;
cljs$core$async$mix_$_state_machine__39695__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__39695__auto____1;
return cljs$core$async$mix_$_state_machine__39695__auto__;
})()
})();
var state__39771__auto__ = (function (){var statearr_40711 = f__39770__auto__();
(statearr_40711[(6)] = c__39769__auto___41724);

return statearr_40711;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39771__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_41765 = (function (p,v,ch,close_QMARK_){
var x__4521__auto__ = (((p == null))?null:p);
var m__4522__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4522__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4519__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4519__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_41765(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_41768 = (function (p,v,ch){
var x__4521__auto__ = (((p == null))?null:p);
var m__4522__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4522__auto__.call(null,p,v,ch));
} else {
var m__4519__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4519__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_41768(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_41769 = (function() {
var G__41770 = null;
var G__41770__1 = (function (p){
var x__4521__auto__ = (((p == null))?null:p);
var m__4522__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4522__auto__.call(null,p));
} else {
var m__4519__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4519__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__41770__2 = (function (p,v){
var x__4521__auto__ = (((p == null))?null:p);
var m__4522__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4522__auto__.call(null,p,v));
} else {
var m__4519__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4519__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__41770 = function(p,v){
switch(arguments.length){
case 1:
return G__41770__1.call(this,p);
case 2:
return G__41770__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__41770.cljs$core$IFn$_invoke$arity$1 = G__41770__1;
G__41770.cljs$core$IFn$_invoke$arity$2 = G__41770__2;
return G__41770;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__40713 = arguments.length;
switch (G__40713) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_41769(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_41769(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__40716 = arguments.length;
switch (G__40716) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4223__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__40714_SHARP_){
if(cljs.core.truth_((p1__40714_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__40714_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__40714_SHARP_.call(null,topic)))){
return p1__40714_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40714_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async40717 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40717 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta40718){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta40718 = meta40718;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async40717.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40719,meta40718__$1){
var self__ = this;
var _40719__$1 = this;
return (new cljs.core.async.t_cljs$core$async40717(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta40718__$1));
}));

(cljs.core.async.t_cljs$core$async40717.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40719){
var self__ = this;
var _40719__$1 = this;
return self__.meta40718;
}));

(cljs.core.async.t_cljs$core$async40717.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40717.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async40717.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40717.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async40717.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async40717.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async40717.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async40717.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta40718","meta40718",1612600303,null)], null);
}));

(cljs.core.async.t_cljs$core$async40717.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async40717.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40717");

(cljs.core.async.t_cljs$core$async40717.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async40717");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async40717.
 */
cljs.core.async.__GT_t_cljs$core$async40717 = (function cljs$core$async$__GT_t_cljs$core$async40717(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta40718){
return (new cljs.core.async.t_cljs$core$async40717(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta40718));
});

}

return (new cljs.core.async.t_cljs$core$async40717(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__39769__auto___41775 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__39770__auto__ = (function (){var switch__39694__auto__ = (function (state_40791){
var state_val_40792 = (state_40791[(1)]);
if((state_val_40792 === (7))){
var inst_40787 = (state_40791[(2)]);
var state_40791__$1 = state_40791;
var statearr_40793_41776 = state_40791__$1;
(statearr_40793_41776[(2)] = inst_40787);

(statearr_40793_41776[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40792 === (20))){
var state_40791__$1 = state_40791;
var statearr_40794_41777 = state_40791__$1;
(statearr_40794_41777[(2)] = null);

(statearr_40794_41777[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40792 === (1))){
var state_40791__$1 = state_40791;
var statearr_40795_41778 = state_40791__$1;
(statearr_40795_41778[(2)] = null);

(statearr_40795_41778[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40792 === (24))){
var inst_40770 = (state_40791[(7)]);
var inst_40779 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_40770);
var state_40791__$1 = state_40791;
var statearr_40796_41779 = state_40791__$1;
(statearr_40796_41779[(2)] = inst_40779);

(statearr_40796_41779[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40792 === (4))){
var inst_40722 = (state_40791[(8)]);
var inst_40722__$1 = (state_40791[(2)]);
var inst_40723 = (inst_40722__$1 == null);
var state_40791__$1 = (function (){var statearr_40797 = state_40791;
(statearr_40797[(8)] = inst_40722__$1);

return statearr_40797;
})();
if(cljs.core.truth_(inst_40723)){
var statearr_40798_41780 = state_40791__$1;
(statearr_40798_41780[(1)] = (5));

} else {
var statearr_40799_41781 = state_40791__$1;
(statearr_40799_41781[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40792 === (15))){
var inst_40764 = (state_40791[(2)]);
var state_40791__$1 = state_40791;
var statearr_40800_41782 = state_40791__$1;
(statearr_40800_41782[(2)] = inst_40764);

(statearr_40800_41782[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40792 === (21))){
var inst_40784 = (state_40791[(2)]);
var state_40791__$1 = (function (){var statearr_40801 = state_40791;
(statearr_40801[(9)] = inst_40784);

return statearr_40801;
})();
var statearr_40802_41783 = state_40791__$1;
(statearr_40802_41783[(2)] = null);

(statearr_40802_41783[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40792 === (13))){
var inst_40746 = (state_40791[(10)]);
var inst_40748 = cljs.core.chunked_seq_QMARK_(inst_40746);
var state_40791__$1 = state_40791;
if(inst_40748){
var statearr_40803_41784 = state_40791__$1;
(statearr_40803_41784[(1)] = (16));

} else {
var statearr_40804_41785 = state_40791__$1;
(statearr_40804_41785[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40792 === (22))){
var inst_40776 = (state_40791[(2)]);
var state_40791__$1 = state_40791;
if(cljs.core.truth_(inst_40776)){
var statearr_40805_41786 = state_40791__$1;
(statearr_40805_41786[(1)] = (23));

} else {
var statearr_40806_41787 = state_40791__$1;
(statearr_40806_41787[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40792 === (6))){
var inst_40772 = (state_40791[(11)]);
var inst_40770 = (state_40791[(7)]);
var inst_40722 = (state_40791[(8)]);
var inst_40770__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_40722) : topic_fn.call(null,inst_40722));
var inst_40771 = cljs.core.deref(mults);
var inst_40772__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_40771,inst_40770__$1);
var state_40791__$1 = (function (){var statearr_40807 = state_40791;
(statearr_40807[(11)] = inst_40772__$1);

(statearr_40807[(7)] = inst_40770__$1);

return statearr_40807;
})();
if(cljs.core.truth_(inst_40772__$1)){
var statearr_40808_41788 = state_40791__$1;
(statearr_40808_41788[(1)] = (19));

} else {
var statearr_40809_41789 = state_40791__$1;
(statearr_40809_41789[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40792 === (25))){
var inst_40781 = (state_40791[(2)]);
var state_40791__$1 = state_40791;
var statearr_40810_41790 = state_40791__$1;
(statearr_40810_41790[(2)] = inst_40781);

(statearr_40810_41790[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40792 === (17))){
var inst_40746 = (state_40791[(10)]);
var inst_40755 = cljs.core.first(inst_40746);
var inst_40756 = cljs.core.async.muxch_STAR_(inst_40755);
var inst_40757 = cljs.core.async.close_BANG_(inst_40756);
var inst_40758 = cljs.core.next(inst_40746);
var inst_40732 = inst_40758;
var inst_40733 = null;
var inst_40734 = (0);
var inst_40735 = (0);
var state_40791__$1 = (function (){var statearr_40811 = state_40791;
(statearr_40811[(12)] = inst_40734);

(statearr_40811[(13)] = inst_40735);

(statearr_40811[(14)] = inst_40732);

(statearr_40811[(15)] = inst_40757);

(statearr_40811[(16)] = inst_40733);

return statearr_40811;
})();
var statearr_40812_41792 = state_40791__$1;
(statearr_40812_41792[(2)] = null);

(statearr_40812_41792[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40792 === (3))){
var inst_40789 = (state_40791[(2)]);
var state_40791__$1 = state_40791;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40791__$1,inst_40789);
} else {
if((state_val_40792 === (12))){
var inst_40766 = (state_40791[(2)]);
var state_40791__$1 = state_40791;
var statearr_40813_41793 = state_40791__$1;
(statearr_40813_41793[(2)] = inst_40766);

(statearr_40813_41793[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40792 === (2))){
var state_40791__$1 = state_40791;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40791__$1,(4),ch);
} else {
if((state_val_40792 === (23))){
var state_40791__$1 = state_40791;
var statearr_40814_41794 = state_40791__$1;
(statearr_40814_41794[(2)] = null);

(statearr_40814_41794[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40792 === (19))){
var inst_40772 = (state_40791[(11)]);
var inst_40722 = (state_40791[(8)]);
var inst_40774 = cljs.core.async.muxch_STAR_(inst_40772);
var state_40791__$1 = state_40791;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40791__$1,(22),inst_40774,inst_40722);
} else {
if((state_val_40792 === (11))){
var inst_40732 = (state_40791[(14)]);
var inst_40746 = (state_40791[(10)]);
var inst_40746__$1 = cljs.core.seq(inst_40732);
var state_40791__$1 = (function (){var statearr_40815 = state_40791;
(statearr_40815[(10)] = inst_40746__$1);

return statearr_40815;
})();
if(inst_40746__$1){
var statearr_40816_41799 = state_40791__$1;
(statearr_40816_41799[(1)] = (13));

} else {
var statearr_40817_41800 = state_40791__$1;
(statearr_40817_41800[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40792 === (9))){
var inst_40768 = (state_40791[(2)]);
var state_40791__$1 = state_40791;
var statearr_40818_41801 = state_40791__$1;
(statearr_40818_41801[(2)] = inst_40768);

(statearr_40818_41801[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40792 === (5))){
var inst_40729 = cljs.core.deref(mults);
var inst_40730 = cljs.core.vals(inst_40729);
var inst_40731 = cljs.core.seq(inst_40730);
var inst_40732 = inst_40731;
var inst_40733 = null;
var inst_40734 = (0);
var inst_40735 = (0);
var state_40791__$1 = (function (){var statearr_40819 = state_40791;
(statearr_40819[(12)] = inst_40734);

(statearr_40819[(13)] = inst_40735);

(statearr_40819[(14)] = inst_40732);

(statearr_40819[(16)] = inst_40733);

return statearr_40819;
})();
var statearr_40820_41802 = state_40791__$1;
(statearr_40820_41802[(2)] = null);

(statearr_40820_41802[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40792 === (14))){
var state_40791__$1 = state_40791;
var statearr_40824_41803 = state_40791__$1;
(statearr_40824_41803[(2)] = null);

(statearr_40824_41803[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40792 === (16))){
var inst_40746 = (state_40791[(10)]);
var inst_40750 = cljs.core.chunk_first(inst_40746);
var inst_40751 = cljs.core.chunk_rest(inst_40746);
var inst_40752 = cljs.core.count(inst_40750);
var inst_40732 = inst_40751;
var inst_40733 = inst_40750;
var inst_40734 = inst_40752;
var inst_40735 = (0);
var state_40791__$1 = (function (){var statearr_40825 = state_40791;
(statearr_40825[(12)] = inst_40734);

(statearr_40825[(13)] = inst_40735);

(statearr_40825[(14)] = inst_40732);

(statearr_40825[(16)] = inst_40733);

return statearr_40825;
})();
var statearr_40826_41804 = state_40791__$1;
(statearr_40826_41804[(2)] = null);

(statearr_40826_41804[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40792 === (10))){
var inst_40734 = (state_40791[(12)]);
var inst_40735 = (state_40791[(13)]);
var inst_40732 = (state_40791[(14)]);
var inst_40733 = (state_40791[(16)]);
var inst_40740 = cljs.core._nth(inst_40733,inst_40735);
var inst_40741 = cljs.core.async.muxch_STAR_(inst_40740);
var inst_40742 = cljs.core.async.close_BANG_(inst_40741);
var inst_40743 = (inst_40735 + (1));
var tmp40821 = inst_40734;
var tmp40822 = inst_40732;
var tmp40823 = inst_40733;
var inst_40732__$1 = tmp40822;
var inst_40733__$1 = tmp40823;
var inst_40734__$1 = tmp40821;
var inst_40735__$1 = inst_40743;
var state_40791__$1 = (function (){var statearr_40827 = state_40791;
(statearr_40827[(12)] = inst_40734__$1);

(statearr_40827[(17)] = inst_40742);

(statearr_40827[(13)] = inst_40735__$1);

(statearr_40827[(14)] = inst_40732__$1);

(statearr_40827[(16)] = inst_40733__$1);

return statearr_40827;
})();
var statearr_40828_41805 = state_40791__$1;
(statearr_40828_41805[(2)] = null);

(statearr_40828_41805[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40792 === (18))){
var inst_40761 = (state_40791[(2)]);
var state_40791__$1 = state_40791;
var statearr_40829_41806 = state_40791__$1;
(statearr_40829_41806[(2)] = inst_40761);

(statearr_40829_41806[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40792 === (8))){
var inst_40734 = (state_40791[(12)]);
var inst_40735 = (state_40791[(13)]);
var inst_40737 = (inst_40735 < inst_40734);
var inst_40738 = inst_40737;
var state_40791__$1 = state_40791;
if(cljs.core.truth_(inst_40738)){
var statearr_40830_41807 = state_40791__$1;
(statearr_40830_41807[(1)] = (10));

} else {
var statearr_40831_41808 = state_40791__$1;
(statearr_40831_41808[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
}
});
return (function() {
var cljs$core$async$state_machine__39695__auto__ = null;
var cljs$core$async$state_machine__39695__auto____0 = (function (){
var statearr_40832 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40832[(0)] = cljs$core$async$state_machine__39695__auto__);

(statearr_40832[(1)] = (1));

return statearr_40832;
});
var cljs$core$async$state_machine__39695__auto____1 = (function (state_40791){
while(true){
var ret_value__39696__auto__ = (function (){try{while(true){
var result__39697__auto__ = switch__39694__auto__(state_40791);
if(cljs.core.keyword_identical_QMARK_(result__39697__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39697__auto__;
}
break;
}
}catch (e40833){var ex__39698__auto__ = e40833;
var statearr_40834_41809 = state_40791;
(statearr_40834_41809[(2)] = ex__39698__auto__);


if(cljs.core.seq((state_40791[(4)]))){
var statearr_40835_41810 = state_40791;
(statearr_40835_41810[(1)] = cljs.core.first((state_40791[(4)])));

} else {
throw ex__39698__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41811 = state_40791;
state_40791 = G__41811;
continue;
} else {
return ret_value__39696__auto__;
}
break;
}
});
cljs$core$async$state_machine__39695__auto__ = function(state_40791){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39695__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39695__auto____1.call(this,state_40791);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39695__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39695__auto____0;
cljs$core$async$state_machine__39695__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39695__auto____1;
return cljs$core$async$state_machine__39695__auto__;
})()
})();
var state__39771__auto__ = (function (){var statearr_40836 = f__39770__auto__();
(statearr_40836[(6)] = c__39769__auto___41775);

return statearr_40836;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39771__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__40838 = arguments.length;
switch (G__40838) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__40840 = arguments.length;
switch (G__40840) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__40842 = arguments.length;
switch (G__40842) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__39769__auto___41828 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__39770__auto__ = (function (){var switch__39694__auto__ = (function (state_40885){
var state_val_40886 = (state_40885[(1)]);
if((state_val_40886 === (7))){
var state_40885__$1 = state_40885;
var statearr_40887_41829 = state_40885__$1;
(statearr_40887_41829[(2)] = null);

(statearr_40887_41829[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40886 === (1))){
var state_40885__$1 = state_40885;
var statearr_40888_41833 = state_40885__$1;
(statearr_40888_41833[(2)] = null);

(statearr_40888_41833[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40886 === (4))){
var inst_40846 = (state_40885[(7)]);
var inst_40845 = (state_40885[(8)]);
var inst_40848 = (inst_40846 < inst_40845);
var state_40885__$1 = state_40885;
if(cljs.core.truth_(inst_40848)){
var statearr_40889_41834 = state_40885__$1;
(statearr_40889_41834[(1)] = (6));

} else {
var statearr_40890_41835 = state_40885__$1;
(statearr_40890_41835[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40886 === (15))){
var inst_40871 = (state_40885[(9)]);
var inst_40876 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_40871);
var state_40885__$1 = state_40885;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40885__$1,(17),out,inst_40876);
} else {
if((state_val_40886 === (13))){
var inst_40871 = (state_40885[(9)]);
var inst_40871__$1 = (state_40885[(2)]);
var inst_40872 = cljs.core.some(cljs.core.nil_QMARK_,inst_40871__$1);
var state_40885__$1 = (function (){var statearr_40891 = state_40885;
(statearr_40891[(9)] = inst_40871__$1);

return statearr_40891;
})();
if(cljs.core.truth_(inst_40872)){
var statearr_40892_41840 = state_40885__$1;
(statearr_40892_41840[(1)] = (14));

} else {
var statearr_40893_41841 = state_40885__$1;
(statearr_40893_41841[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40886 === (6))){
var state_40885__$1 = state_40885;
var statearr_40894_41842 = state_40885__$1;
(statearr_40894_41842[(2)] = null);

(statearr_40894_41842[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40886 === (17))){
var inst_40878 = (state_40885[(2)]);
var state_40885__$1 = (function (){var statearr_40896 = state_40885;
(statearr_40896[(10)] = inst_40878);

return statearr_40896;
})();
var statearr_40897_41843 = state_40885__$1;
(statearr_40897_41843[(2)] = null);

(statearr_40897_41843[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40886 === (3))){
var inst_40883 = (state_40885[(2)]);
var state_40885__$1 = state_40885;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40885__$1,inst_40883);
} else {
if((state_val_40886 === (12))){
var _ = (function (){var statearr_40898 = state_40885;
(statearr_40898[(4)] = cljs.core.rest((state_40885[(4)])));

return statearr_40898;
})();
var state_40885__$1 = state_40885;
var ex40895 = (state_40885__$1[(2)]);
var statearr_40899_41844 = state_40885__$1;
(statearr_40899_41844[(5)] = ex40895);


if((ex40895 instanceof Object)){
var statearr_40900_41845 = state_40885__$1;
(statearr_40900_41845[(1)] = (11));

(statearr_40900_41845[(5)] = null);

} else {
throw ex40895;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40886 === (2))){
var inst_40844 = cljs.core.reset_BANG_(dctr,cnt);
var inst_40845 = cnt;
var inst_40846 = (0);
var state_40885__$1 = (function (){var statearr_40901 = state_40885;
(statearr_40901[(11)] = inst_40844);

(statearr_40901[(7)] = inst_40846);

(statearr_40901[(8)] = inst_40845);

return statearr_40901;
})();
var statearr_40902_41846 = state_40885__$1;
(statearr_40902_41846[(2)] = null);

(statearr_40902_41846[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40886 === (11))){
var inst_40850 = (state_40885[(2)]);
var inst_40851 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_40885__$1 = (function (){var statearr_40903 = state_40885;
(statearr_40903[(12)] = inst_40850);

return statearr_40903;
})();
var statearr_40904_41847 = state_40885__$1;
(statearr_40904_41847[(2)] = inst_40851);

(statearr_40904_41847[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40886 === (9))){
var inst_40846 = (state_40885[(7)]);
var _ = (function (){var statearr_40905 = state_40885;
(statearr_40905[(4)] = cljs.core.cons((12),(state_40885[(4)])));

return statearr_40905;
})();
var inst_40857 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_40846) : chs__$1.call(null,inst_40846));
var inst_40858 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_40846) : done.call(null,inst_40846));
var inst_40859 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_40857,inst_40858);
var ___$1 = (function (){var statearr_40906 = state_40885;
(statearr_40906[(4)] = cljs.core.rest((state_40885[(4)])));

return statearr_40906;
})();
var state_40885__$1 = state_40885;
var statearr_40907_41848 = state_40885__$1;
(statearr_40907_41848[(2)] = inst_40859);

(statearr_40907_41848[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40886 === (5))){
var inst_40869 = (state_40885[(2)]);
var state_40885__$1 = (function (){var statearr_40908 = state_40885;
(statearr_40908[(13)] = inst_40869);

return statearr_40908;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40885__$1,(13),dchan);
} else {
if((state_val_40886 === (14))){
var inst_40874 = cljs.core.async.close_BANG_(out);
var state_40885__$1 = state_40885;
var statearr_40909_41850 = state_40885__$1;
(statearr_40909_41850[(2)] = inst_40874);

(statearr_40909_41850[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40886 === (16))){
var inst_40881 = (state_40885[(2)]);
var state_40885__$1 = state_40885;
var statearr_40910_41851 = state_40885__$1;
(statearr_40910_41851[(2)] = inst_40881);

(statearr_40910_41851[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40886 === (10))){
var inst_40846 = (state_40885[(7)]);
var inst_40862 = (state_40885[(2)]);
var inst_40863 = (inst_40846 + (1));
var inst_40846__$1 = inst_40863;
var state_40885__$1 = (function (){var statearr_40911 = state_40885;
(statearr_40911[(14)] = inst_40862);

(statearr_40911[(7)] = inst_40846__$1);

return statearr_40911;
})();
var statearr_40912_41853 = state_40885__$1;
(statearr_40912_41853[(2)] = null);

(statearr_40912_41853[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40886 === (8))){
var inst_40867 = (state_40885[(2)]);
var state_40885__$1 = state_40885;
var statearr_40913_41854 = state_40885__$1;
(statearr_40913_41854[(2)] = inst_40867);

(statearr_40913_41854[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
return (function() {
var cljs$core$async$state_machine__39695__auto__ = null;
var cljs$core$async$state_machine__39695__auto____0 = (function (){
var statearr_40914 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40914[(0)] = cljs$core$async$state_machine__39695__auto__);

(statearr_40914[(1)] = (1));

return statearr_40914;
});
var cljs$core$async$state_machine__39695__auto____1 = (function (state_40885){
while(true){
var ret_value__39696__auto__ = (function (){try{while(true){
var result__39697__auto__ = switch__39694__auto__(state_40885);
if(cljs.core.keyword_identical_QMARK_(result__39697__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39697__auto__;
}
break;
}
}catch (e40915){var ex__39698__auto__ = e40915;
var statearr_40916_41855 = state_40885;
(statearr_40916_41855[(2)] = ex__39698__auto__);


if(cljs.core.seq((state_40885[(4)]))){
var statearr_40917_41856 = state_40885;
(statearr_40917_41856[(1)] = cljs.core.first((state_40885[(4)])));

} else {
throw ex__39698__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41857 = state_40885;
state_40885 = G__41857;
continue;
} else {
return ret_value__39696__auto__;
}
break;
}
});
cljs$core$async$state_machine__39695__auto__ = function(state_40885){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39695__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39695__auto____1.call(this,state_40885);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39695__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39695__auto____0;
cljs$core$async$state_machine__39695__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39695__auto____1;
return cljs$core$async$state_machine__39695__auto__;
})()
})();
var state__39771__auto__ = (function (){var statearr_40918 = f__39770__auto__();
(statearr_40918[(6)] = c__39769__auto___41828);

return statearr_40918;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39771__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__40921 = arguments.length;
switch (G__40921) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__39769__auto___41859 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__39770__auto__ = (function (){var switch__39694__auto__ = (function (state_40953){
var state_val_40954 = (state_40953[(1)]);
if((state_val_40954 === (7))){
var inst_40933 = (state_40953[(7)]);
var inst_40932 = (state_40953[(8)]);
var inst_40932__$1 = (state_40953[(2)]);
var inst_40933__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_40932__$1,(0),null);
var inst_40934 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_40932__$1,(1),null);
var inst_40935 = (inst_40933__$1 == null);
var state_40953__$1 = (function (){var statearr_40955 = state_40953;
(statearr_40955[(7)] = inst_40933__$1);

(statearr_40955[(8)] = inst_40932__$1);

(statearr_40955[(9)] = inst_40934);

return statearr_40955;
})();
if(cljs.core.truth_(inst_40935)){
var statearr_40956_41860 = state_40953__$1;
(statearr_40956_41860[(1)] = (8));

} else {
var statearr_40957_41861 = state_40953__$1;
(statearr_40957_41861[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40954 === (1))){
var inst_40922 = cljs.core.vec(chs);
var inst_40923 = inst_40922;
var state_40953__$1 = (function (){var statearr_40958 = state_40953;
(statearr_40958[(10)] = inst_40923);

return statearr_40958;
})();
var statearr_40959_41862 = state_40953__$1;
(statearr_40959_41862[(2)] = null);

(statearr_40959_41862[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40954 === (4))){
var inst_40923 = (state_40953[(10)]);
var state_40953__$1 = state_40953;
return cljs.core.async.ioc_alts_BANG_(state_40953__$1,(7),inst_40923);
} else {
if((state_val_40954 === (6))){
var inst_40949 = (state_40953[(2)]);
var state_40953__$1 = state_40953;
var statearr_40960_41863 = state_40953__$1;
(statearr_40960_41863[(2)] = inst_40949);

(statearr_40960_41863[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40954 === (3))){
var inst_40951 = (state_40953[(2)]);
var state_40953__$1 = state_40953;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40953__$1,inst_40951);
} else {
if((state_val_40954 === (2))){
var inst_40923 = (state_40953[(10)]);
var inst_40925 = cljs.core.count(inst_40923);
var inst_40926 = (inst_40925 > (0));
var state_40953__$1 = state_40953;
if(cljs.core.truth_(inst_40926)){
var statearr_40962_41864 = state_40953__$1;
(statearr_40962_41864[(1)] = (4));

} else {
var statearr_40963_41865 = state_40953__$1;
(statearr_40963_41865[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40954 === (11))){
var inst_40923 = (state_40953[(10)]);
var inst_40942 = (state_40953[(2)]);
var tmp40961 = inst_40923;
var inst_40923__$1 = tmp40961;
var state_40953__$1 = (function (){var statearr_40964 = state_40953;
(statearr_40964[(10)] = inst_40923__$1);

(statearr_40964[(11)] = inst_40942);

return statearr_40964;
})();
var statearr_40965_41866 = state_40953__$1;
(statearr_40965_41866[(2)] = null);

(statearr_40965_41866[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40954 === (9))){
var inst_40933 = (state_40953[(7)]);
var state_40953__$1 = state_40953;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40953__$1,(11),out,inst_40933);
} else {
if((state_val_40954 === (5))){
var inst_40947 = cljs.core.async.close_BANG_(out);
var state_40953__$1 = state_40953;
var statearr_40966_41867 = state_40953__$1;
(statearr_40966_41867[(2)] = inst_40947);

(statearr_40966_41867[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40954 === (10))){
var inst_40945 = (state_40953[(2)]);
var state_40953__$1 = state_40953;
var statearr_40967_41868 = state_40953__$1;
(statearr_40967_41868[(2)] = inst_40945);

(statearr_40967_41868[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40954 === (8))){
var inst_40933 = (state_40953[(7)]);
var inst_40923 = (state_40953[(10)]);
var inst_40932 = (state_40953[(8)]);
var inst_40934 = (state_40953[(9)]);
var inst_40937 = (function (){var cs = inst_40923;
var vec__40928 = inst_40932;
var v = inst_40933;
var c = inst_40934;
return (function (p1__40919_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__40919_SHARP_);
});
})();
var inst_40938 = cljs.core.filterv(inst_40937,inst_40923);
var inst_40923__$1 = inst_40938;
var state_40953__$1 = (function (){var statearr_40968 = state_40953;
(statearr_40968[(10)] = inst_40923__$1);

return statearr_40968;
})();
var statearr_40969_41869 = state_40953__$1;
(statearr_40969_41869[(2)] = null);

(statearr_40969_41869[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
return (function() {
var cljs$core$async$state_machine__39695__auto__ = null;
var cljs$core$async$state_machine__39695__auto____0 = (function (){
var statearr_40970 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40970[(0)] = cljs$core$async$state_machine__39695__auto__);

(statearr_40970[(1)] = (1));

return statearr_40970;
});
var cljs$core$async$state_machine__39695__auto____1 = (function (state_40953){
while(true){
var ret_value__39696__auto__ = (function (){try{while(true){
var result__39697__auto__ = switch__39694__auto__(state_40953);
if(cljs.core.keyword_identical_QMARK_(result__39697__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39697__auto__;
}
break;
}
}catch (e40971){var ex__39698__auto__ = e40971;
var statearr_40972_41874 = state_40953;
(statearr_40972_41874[(2)] = ex__39698__auto__);


if(cljs.core.seq((state_40953[(4)]))){
var statearr_40973_41875 = state_40953;
(statearr_40973_41875[(1)] = cljs.core.first((state_40953[(4)])));

} else {
throw ex__39698__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41876 = state_40953;
state_40953 = G__41876;
continue;
} else {
return ret_value__39696__auto__;
}
break;
}
});
cljs$core$async$state_machine__39695__auto__ = function(state_40953){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39695__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39695__auto____1.call(this,state_40953);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39695__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39695__auto____0;
cljs$core$async$state_machine__39695__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39695__auto____1;
return cljs$core$async$state_machine__39695__auto__;
})()
})();
var state__39771__auto__ = (function (){var statearr_40974 = f__39770__auto__();
(statearr_40974[(6)] = c__39769__auto___41859);

return statearr_40974;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39771__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__40976 = arguments.length;
switch (G__40976) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__39769__auto___41878 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__39770__auto__ = (function (){var switch__39694__auto__ = (function (state_41000){
var state_val_41001 = (state_41000[(1)]);
if((state_val_41001 === (7))){
var inst_40982 = (state_41000[(7)]);
var inst_40982__$1 = (state_41000[(2)]);
var inst_40983 = (inst_40982__$1 == null);
var inst_40984 = cljs.core.not(inst_40983);
var state_41000__$1 = (function (){var statearr_41002 = state_41000;
(statearr_41002[(7)] = inst_40982__$1);

return statearr_41002;
})();
if(inst_40984){
var statearr_41003_41879 = state_41000__$1;
(statearr_41003_41879[(1)] = (8));

} else {
var statearr_41004_41880 = state_41000__$1;
(statearr_41004_41880[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41001 === (1))){
var inst_40977 = (0);
var state_41000__$1 = (function (){var statearr_41005 = state_41000;
(statearr_41005[(8)] = inst_40977);

return statearr_41005;
})();
var statearr_41006_41881 = state_41000__$1;
(statearr_41006_41881[(2)] = null);

(statearr_41006_41881[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41001 === (4))){
var state_41000__$1 = state_41000;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41000__$1,(7),ch);
} else {
if((state_val_41001 === (6))){
var inst_40995 = (state_41000[(2)]);
var state_41000__$1 = state_41000;
var statearr_41007_41886 = state_41000__$1;
(statearr_41007_41886[(2)] = inst_40995);

(statearr_41007_41886[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41001 === (3))){
var inst_40997 = (state_41000[(2)]);
var inst_40998 = cljs.core.async.close_BANG_(out);
var state_41000__$1 = (function (){var statearr_41008 = state_41000;
(statearr_41008[(9)] = inst_40997);

return statearr_41008;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_41000__$1,inst_40998);
} else {
if((state_val_41001 === (2))){
var inst_40977 = (state_41000[(8)]);
var inst_40979 = (inst_40977 < n);
var state_41000__$1 = state_41000;
if(cljs.core.truth_(inst_40979)){
var statearr_41009_41887 = state_41000__$1;
(statearr_41009_41887[(1)] = (4));

} else {
var statearr_41010_41889 = state_41000__$1;
(statearr_41010_41889[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41001 === (11))){
var inst_40977 = (state_41000[(8)]);
var inst_40987 = (state_41000[(2)]);
var inst_40988 = (inst_40977 + (1));
var inst_40977__$1 = inst_40988;
var state_41000__$1 = (function (){var statearr_41011 = state_41000;
(statearr_41011[(10)] = inst_40987);

(statearr_41011[(8)] = inst_40977__$1);

return statearr_41011;
})();
var statearr_41012_41890 = state_41000__$1;
(statearr_41012_41890[(2)] = null);

(statearr_41012_41890[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41001 === (9))){
var state_41000__$1 = state_41000;
var statearr_41013_41891 = state_41000__$1;
(statearr_41013_41891[(2)] = null);

(statearr_41013_41891[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41001 === (5))){
var state_41000__$1 = state_41000;
var statearr_41014_41892 = state_41000__$1;
(statearr_41014_41892[(2)] = null);

(statearr_41014_41892[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41001 === (10))){
var inst_40992 = (state_41000[(2)]);
var state_41000__$1 = state_41000;
var statearr_41015_41893 = state_41000__$1;
(statearr_41015_41893[(2)] = inst_40992);

(statearr_41015_41893[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41001 === (8))){
var inst_40982 = (state_41000[(7)]);
var state_41000__$1 = state_41000;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41000__$1,(11),out,inst_40982);
} else {
return null;
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
return (function() {
var cljs$core$async$state_machine__39695__auto__ = null;
var cljs$core$async$state_machine__39695__auto____0 = (function (){
var statearr_41016 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_41016[(0)] = cljs$core$async$state_machine__39695__auto__);

(statearr_41016[(1)] = (1));

return statearr_41016;
});
var cljs$core$async$state_machine__39695__auto____1 = (function (state_41000){
while(true){
var ret_value__39696__auto__ = (function (){try{while(true){
var result__39697__auto__ = switch__39694__auto__(state_41000);
if(cljs.core.keyword_identical_QMARK_(result__39697__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39697__auto__;
}
break;
}
}catch (e41017){var ex__39698__auto__ = e41017;
var statearr_41018_41894 = state_41000;
(statearr_41018_41894[(2)] = ex__39698__auto__);


if(cljs.core.seq((state_41000[(4)]))){
var statearr_41019_41895 = state_41000;
(statearr_41019_41895[(1)] = cljs.core.first((state_41000[(4)])));

} else {
throw ex__39698__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41897 = state_41000;
state_41000 = G__41897;
continue;
} else {
return ret_value__39696__auto__;
}
break;
}
});
cljs$core$async$state_machine__39695__auto__ = function(state_41000){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39695__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39695__auto____1.call(this,state_41000);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39695__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39695__auto____0;
cljs$core$async$state_machine__39695__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39695__auto____1;
return cljs$core$async$state_machine__39695__auto__;
})()
})();
var state__39771__auto__ = (function (){var statearr_41020 = f__39770__auto__();
(statearr_41020[(6)] = c__39769__auto___41878);

return statearr_41020;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39771__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async41022 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41022 = (function (f,ch,meta41023){
this.f = f;
this.ch = ch;
this.meta41023 = meta41023;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async41022.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41024,meta41023__$1){
var self__ = this;
var _41024__$1 = this;
return (new cljs.core.async.t_cljs$core$async41022(self__.f,self__.ch,meta41023__$1));
}));

(cljs.core.async.t_cljs$core$async41022.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41024){
var self__ = this;
var _41024__$1 = this;
return self__.meta41023;
}));

(cljs.core.async.t_cljs$core$async41022.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async41022.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async41022.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async41022.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async41022.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async41025 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41025 = (function (f,ch,meta41023,_,fn1,meta41026){
this.f = f;
this.ch = ch;
this.meta41023 = meta41023;
this._ = _;
this.fn1 = fn1;
this.meta41026 = meta41026;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async41025.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41027,meta41026__$1){
var self__ = this;
var _41027__$1 = this;
return (new cljs.core.async.t_cljs$core$async41025(self__.f,self__.ch,self__.meta41023,self__._,self__.fn1,meta41026__$1));
}));

(cljs.core.async.t_cljs$core$async41025.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41027){
var self__ = this;
var _41027__$1 = this;
return self__.meta41026;
}));

(cljs.core.async.t_cljs$core$async41025.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async41025.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async41025.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async41025.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__41021_SHARP_){
var G__41028 = (((p1__41021_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__41021_SHARP_) : self__.f.call(null,p1__41021_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__41028) : f1.call(null,G__41028));
});
}));

(cljs.core.async.t_cljs$core$async41025.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta41023","meta41023",-2048739641,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async41022","cljs.core.async/t_cljs$core$async41022",-372791225,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta41026","meta41026",629519238,null)], null);
}));

(cljs.core.async.t_cljs$core$async41025.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async41025.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41025");

(cljs.core.async.t_cljs$core$async41025.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async41025");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async41025.
 */
cljs.core.async.__GT_t_cljs$core$async41025 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async41025(f__$1,ch__$1,meta41023__$1,___$2,fn1__$1,meta41026){
return (new cljs.core.async.t_cljs$core$async41025(f__$1,ch__$1,meta41023__$1,___$2,fn1__$1,meta41026));
});

}

return (new cljs.core.async.t_cljs$core$async41025(self__.f,self__.ch,self__.meta41023,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4221__auto__ = ret;
if(cljs.core.truth_(and__4221__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4221__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__41029 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__41029) : self__.f.call(null,G__41029));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async41022.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async41022.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async41022.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta41023","meta41023",-2048739641,null)], null);
}));

(cljs.core.async.t_cljs$core$async41022.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async41022.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41022");

(cljs.core.async.t_cljs$core$async41022.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async41022");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async41022.
 */
cljs.core.async.__GT_t_cljs$core$async41022 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async41022(f__$1,ch__$1,meta41023){
return (new cljs.core.async.t_cljs$core$async41022(f__$1,ch__$1,meta41023));
});

}

return (new cljs.core.async.t_cljs$core$async41022(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async41030 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41030 = (function (f,ch,meta41031){
this.f = f;
this.ch = ch;
this.meta41031 = meta41031;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async41030.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41032,meta41031__$1){
var self__ = this;
var _41032__$1 = this;
return (new cljs.core.async.t_cljs$core$async41030(self__.f,self__.ch,meta41031__$1));
}));

(cljs.core.async.t_cljs$core$async41030.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41032){
var self__ = this;
var _41032__$1 = this;
return self__.meta41031;
}));

(cljs.core.async.t_cljs$core$async41030.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async41030.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async41030.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async41030.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async41030.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async41030.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async41030.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta41031","meta41031",-121535707,null)], null);
}));

(cljs.core.async.t_cljs$core$async41030.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async41030.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41030");

(cljs.core.async.t_cljs$core$async41030.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async41030");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async41030.
 */
cljs.core.async.__GT_t_cljs$core$async41030 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async41030(f__$1,ch__$1,meta41031){
return (new cljs.core.async.t_cljs$core$async41030(f__$1,ch__$1,meta41031));
});

}

return (new cljs.core.async.t_cljs$core$async41030(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async41033 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41033 = (function (p,ch,meta41034){
this.p = p;
this.ch = ch;
this.meta41034 = meta41034;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async41033.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41035,meta41034__$1){
var self__ = this;
var _41035__$1 = this;
return (new cljs.core.async.t_cljs$core$async41033(self__.p,self__.ch,meta41034__$1));
}));

(cljs.core.async.t_cljs$core$async41033.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41035){
var self__ = this;
var _41035__$1 = this;
return self__.meta41034;
}));

(cljs.core.async.t_cljs$core$async41033.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async41033.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async41033.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async41033.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async41033.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async41033.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async41033.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async41033.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta41034","meta41034",387050054,null)], null);
}));

(cljs.core.async.t_cljs$core$async41033.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async41033.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41033");

(cljs.core.async.t_cljs$core$async41033.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async41033");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async41033.
 */
cljs.core.async.__GT_t_cljs$core$async41033 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async41033(p__$1,ch__$1,meta41034){
return (new cljs.core.async.t_cljs$core$async41033(p__$1,ch__$1,meta41034));
});

}

return (new cljs.core.async.t_cljs$core$async41033(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__41037 = arguments.length;
switch (G__41037) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__39769__auto___41907 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__39770__auto__ = (function (){var switch__39694__auto__ = (function (state_41058){
var state_val_41059 = (state_41058[(1)]);
if((state_val_41059 === (7))){
var inst_41054 = (state_41058[(2)]);
var state_41058__$1 = state_41058;
var statearr_41060_41908 = state_41058__$1;
(statearr_41060_41908[(2)] = inst_41054);

(statearr_41060_41908[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41059 === (1))){
var state_41058__$1 = state_41058;
var statearr_41061_41909 = state_41058__$1;
(statearr_41061_41909[(2)] = null);

(statearr_41061_41909[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41059 === (4))){
var inst_41040 = (state_41058[(7)]);
var inst_41040__$1 = (state_41058[(2)]);
var inst_41041 = (inst_41040__$1 == null);
var state_41058__$1 = (function (){var statearr_41062 = state_41058;
(statearr_41062[(7)] = inst_41040__$1);

return statearr_41062;
})();
if(cljs.core.truth_(inst_41041)){
var statearr_41063_41910 = state_41058__$1;
(statearr_41063_41910[(1)] = (5));

} else {
var statearr_41064_41911 = state_41058__$1;
(statearr_41064_41911[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41059 === (6))){
var inst_41040 = (state_41058[(7)]);
var inst_41045 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_41040) : p.call(null,inst_41040));
var state_41058__$1 = state_41058;
if(cljs.core.truth_(inst_41045)){
var statearr_41065_41912 = state_41058__$1;
(statearr_41065_41912[(1)] = (8));

} else {
var statearr_41066_41913 = state_41058__$1;
(statearr_41066_41913[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41059 === (3))){
var inst_41056 = (state_41058[(2)]);
var state_41058__$1 = state_41058;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41058__$1,inst_41056);
} else {
if((state_val_41059 === (2))){
var state_41058__$1 = state_41058;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41058__$1,(4),ch);
} else {
if((state_val_41059 === (11))){
var inst_41048 = (state_41058[(2)]);
var state_41058__$1 = state_41058;
var statearr_41067_41914 = state_41058__$1;
(statearr_41067_41914[(2)] = inst_41048);

(statearr_41067_41914[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41059 === (9))){
var state_41058__$1 = state_41058;
var statearr_41068_41915 = state_41058__$1;
(statearr_41068_41915[(2)] = null);

(statearr_41068_41915[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41059 === (5))){
var inst_41043 = cljs.core.async.close_BANG_(out);
var state_41058__$1 = state_41058;
var statearr_41069_41916 = state_41058__$1;
(statearr_41069_41916[(2)] = inst_41043);

(statearr_41069_41916[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41059 === (10))){
var inst_41051 = (state_41058[(2)]);
var state_41058__$1 = (function (){var statearr_41070 = state_41058;
(statearr_41070[(8)] = inst_41051);

return statearr_41070;
})();
var statearr_41071_41917 = state_41058__$1;
(statearr_41071_41917[(2)] = null);

(statearr_41071_41917[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41059 === (8))){
var inst_41040 = (state_41058[(7)]);
var state_41058__$1 = state_41058;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41058__$1,(11),out,inst_41040);
} else {
return null;
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
return (function() {
var cljs$core$async$state_machine__39695__auto__ = null;
var cljs$core$async$state_machine__39695__auto____0 = (function (){
var statearr_41072 = [null,null,null,null,null,null,null,null,null];
(statearr_41072[(0)] = cljs$core$async$state_machine__39695__auto__);

(statearr_41072[(1)] = (1));

return statearr_41072;
});
var cljs$core$async$state_machine__39695__auto____1 = (function (state_41058){
while(true){
var ret_value__39696__auto__ = (function (){try{while(true){
var result__39697__auto__ = switch__39694__auto__(state_41058);
if(cljs.core.keyword_identical_QMARK_(result__39697__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39697__auto__;
}
break;
}
}catch (e41073){var ex__39698__auto__ = e41073;
var statearr_41074_41918 = state_41058;
(statearr_41074_41918[(2)] = ex__39698__auto__);


if(cljs.core.seq((state_41058[(4)]))){
var statearr_41075_41919 = state_41058;
(statearr_41075_41919[(1)] = cljs.core.first((state_41058[(4)])));

} else {
throw ex__39698__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41920 = state_41058;
state_41058 = G__41920;
continue;
} else {
return ret_value__39696__auto__;
}
break;
}
});
cljs$core$async$state_machine__39695__auto__ = function(state_41058){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39695__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39695__auto____1.call(this,state_41058);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39695__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39695__auto____0;
cljs$core$async$state_machine__39695__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39695__auto____1;
return cljs$core$async$state_machine__39695__auto__;
})()
})();
var state__39771__auto__ = (function (){var statearr_41076 = f__39770__auto__();
(statearr_41076[(6)] = c__39769__auto___41907);

return statearr_41076;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39771__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__41078 = arguments.length;
switch (G__41078) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__39769__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__39770__auto__ = (function (){var switch__39694__auto__ = (function (state_41140){
var state_val_41141 = (state_41140[(1)]);
if((state_val_41141 === (7))){
var inst_41136 = (state_41140[(2)]);
var state_41140__$1 = state_41140;
var statearr_41142_41923 = state_41140__$1;
(statearr_41142_41923[(2)] = inst_41136);

(statearr_41142_41923[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41141 === (20))){
var inst_41106 = (state_41140[(7)]);
var inst_41117 = (state_41140[(2)]);
var inst_41118 = cljs.core.next(inst_41106);
var inst_41092 = inst_41118;
var inst_41093 = null;
var inst_41094 = (0);
var inst_41095 = (0);
var state_41140__$1 = (function (){var statearr_41143 = state_41140;
(statearr_41143[(8)] = inst_41094);

(statearr_41143[(9)] = inst_41093);

(statearr_41143[(10)] = inst_41117);

(statearr_41143[(11)] = inst_41092);

(statearr_41143[(12)] = inst_41095);

return statearr_41143;
})();
var statearr_41144_41924 = state_41140__$1;
(statearr_41144_41924[(2)] = null);

(statearr_41144_41924[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41141 === (1))){
var state_41140__$1 = state_41140;
var statearr_41145_41925 = state_41140__$1;
(statearr_41145_41925[(2)] = null);

(statearr_41145_41925[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41141 === (4))){
var inst_41081 = (state_41140[(13)]);
var inst_41081__$1 = (state_41140[(2)]);
var inst_41082 = (inst_41081__$1 == null);
var state_41140__$1 = (function (){var statearr_41146 = state_41140;
(statearr_41146[(13)] = inst_41081__$1);

return statearr_41146;
})();
if(cljs.core.truth_(inst_41082)){
var statearr_41147_41926 = state_41140__$1;
(statearr_41147_41926[(1)] = (5));

} else {
var statearr_41148_41927 = state_41140__$1;
(statearr_41148_41927[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41141 === (15))){
var state_41140__$1 = state_41140;
var statearr_41152_41928 = state_41140__$1;
(statearr_41152_41928[(2)] = null);

(statearr_41152_41928[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41141 === (21))){
var state_41140__$1 = state_41140;
var statearr_41153_41929 = state_41140__$1;
(statearr_41153_41929[(2)] = null);

(statearr_41153_41929[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41141 === (13))){
var inst_41094 = (state_41140[(8)]);
var inst_41093 = (state_41140[(9)]);
var inst_41092 = (state_41140[(11)]);
var inst_41095 = (state_41140[(12)]);
var inst_41102 = (state_41140[(2)]);
var inst_41103 = (inst_41095 + (1));
var tmp41149 = inst_41094;
var tmp41150 = inst_41093;
var tmp41151 = inst_41092;
var inst_41092__$1 = tmp41151;
var inst_41093__$1 = tmp41150;
var inst_41094__$1 = tmp41149;
var inst_41095__$1 = inst_41103;
var state_41140__$1 = (function (){var statearr_41154 = state_41140;
(statearr_41154[(14)] = inst_41102);

(statearr_41154[(8)] = inst_41094__$1);

(statearr_41154[(9)] = inst_41093__$1);

(statearr_41154[(11)] = inst_41092__$1);

(statearr_41154[(12)] = inst_41095__$1);

return statearr_41154;
})();
var statearr_41155_41932 = state_41140__$1;
(statearr_41155_41932[(2)] = null);

(statearr_41155_41932[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41141 === (22))){
var state_41140__$1 = state_41140;
var statearr_41156_41935 = state_41140__$1;
(statearr_41156_41935[(2)] = null);

(statearr_41156_41935[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41141 === (6))){
var inst_41081 = (state_41140[(13)]);
var inst_41090 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_41081) : f.call(null,inst_41081));
var inst_41091 = cljs.core.seq(inst_41090);
var inst_41092 = inst_41091;
var inst_41093 = null;
var inst_41094 = (0);
var inst_41095 = (0);
var state_41140__$1 = (function (){var statearr_41157 = state_41140;
(statearr_41157[(8)] = inst_41094);

(statearr_41157[(9)] = inst_41093);

(statearr_41157[(11)] = inst_41092);

(statearr_41157[(12)] = inst_41095);

return statearr_41157;
})();
var statearr_41158_41937 = state_41140__$1;
(statearr_41158_41937[(2)] = null);

(statearr_41158_41937[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41141 === (17))){
var inst_41106 = (state_41140[(7)]);
var inst_41110 = cljs.core.chunk_first(inst_41106);
var inst_41111 = cljs.core.chunk_rest(inst_41106);
var inst_41112 = cljs.core.count(inst_41110);
var inst_41092 = inst_41111;
var inst_41093 = inst_41110;
var inst_41094 = inst_41112;
var inst_41095 = (0);
var state_41140__$1 = (function (){var statearr_41159 = state_41140;
(statearr_41159[(8)] = inst_41094);

(statearr_41159[(9)] = inst_41093);

(statearr_41159[(11)] = inst_41092);

(statearr_41159[(12)] = inst_41095);

return statearr_41159;
})();
var statearr_41160_41938 = state_41140__$1;
(statearr_41160_41938[(2)] = null);

(statearr_41160_41938[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41141 === (3))){
var inst_41138 = (state_41140[(2)]);
var state_41140__$1 = state_41140;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41140__$1,inst_41138);
} else {
if((state_val_41141 === (12))){
var inst_41126 = (state_41140[(2)]);
var state_41140__$1 = state_41140;
var statearr_41161_41939 = state_41140__$1;
(statearr_41161_41939[(2)] = inst_41126);

(statearr_41161_41939[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41141 === (2))){
var state_41140__$1 = state_41140;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41140__$1,(4),in$);
} else {
if((state_val_41141 === (23))){
var inst_41134 = (state_41140[(2)]);
var state_41140__$1 = state_41140;
var statearr_41162_41940 = state_41140__$1;
(statearr_41162_41940[(2)] = inst_41134);

(statearr_41162_41940[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41141 === (19))){
var inst_41121 = (state_41140[(2)]);
var state_41140__$1 = state_41140;
var statearr_41163_41941 = state_41140__$1;
(statearr_41163_41941[(2)] = inst_41121);

(statearr_41163_41941[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41141 === (11))){
var inst_41106 = (state_41140[(7)]);
var inst_41092 = (state_41140[(11)]);
var inst_41106__$1 = cljs.core.seq(inst_41092);
var state_41140__$1 = (function (){var statearr_41164 = state_41140;
(statearr_41164[(7)] = inst_41106__$1);

return statearr_41164;
})();
if(inst_41106__$1){
var statearr_41165_41943 = state_41140__$1;
(statearr_41165_41943[(1)] = (14));

} else {
var statearr_41166_41944 = state_41140__$1;
(statearr_41166_41944[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41141 === (9))){
var inst_41128 = (state_41140[(2)]);
var inst_41129 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_41140__$1 = (function (){var statearr_41167 = state_41140;
(statearr_41167[(15)] = inst_41128);

return statearr_41167;
})();
if(cljs.core.truth_(inst_41129)){
var statearr_41168_41945 = state_41140__$1;
(statearr_41168_41945[(1)] = (21));

} else {
var statearr_41169_41946 = state_41140__$1;
(statearr_41169_41946[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41141 === (5))){
var inst_41084 = cljs.core.async.close_BANG_(out);
var state_41140__$1 = state_41140;
var statearr_41170_41947 = state_41140__$1;
(statearr_41170_41947[(2)] = inst_41084);

(statearr_41170_41947[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41141 === (14))){
var inst_41106 = (state_41140[(7)]);
var inst_41108 = cljs.core.chunked_seq_QMARK_(inst_41106);
var state_41140__$1 = state_41140;
if(inst_41108){
var statearr_41171_41948 = state_41140__$1;
(statearr_41171_41948[(1)] = (17));

} else {
var statearr_41172_41949 = state_41140__$1;
(statearr_41172_41949[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41141 === (16))){
var inst_41124 = (state_41140[(2)]);
var state_41140__$1 = state_41140;
var statearr_41173_41954 = state_41140__$1;
(statearr_41173_41954[(2)] = inst_41124);

(statearr_41173_41954[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41141 === (10))){
var inst_41093 = (state_41140[(9)]);
var inst_41095 = (state_41140[(12)]);
var inst_41100 = cljs.core._nth(inst_41093,inst_41095);
var state_41140__$1 = state_41140;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41140__$1,(13),out,inst_41100);
} else {
if((state_val_41141 === (18))){
var inst_41106 = (state_41140[(7)]);
var inst_41115 = cljs.core.first(inst_41106);
var state_41140__$1 = state_41140;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41140__$1,(20),out,inst_41115);
} else {
if((state_val_41141 === (8))){
var inst_41094 = (state_41140[(8)]);
var inst_41095 = (state_41140[(12)]);
var inst_41097 = (inst_41095 < inst_41094);
var inst_41098 = inst_41097;
var state_41140__$1 = state_41140;
if(cljs.core.truth_(inst_41098)){
var statearr_41174_41955 = state_41140__$1;
(statearr_41174_41955[(1)] = (10));

} else {
var statearr_41175_41956 = state_41140__$1;
(statearr_41175_41956[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__39695__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__39695__auto____0 = (function (){
var statearr_41176 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41176[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__39695__auto__);

(statearr_41176[(1)] = (1));

return statearr_41176;
});
var cljs$core$async$mapcat_STAR__$_state_machine__39695__auto____1 = (function (state_41140){
while(true){
var ret_value__39696__auto__ = (function (){try{while(true){
var result__39697__auto__ = switch__39694__auto__(state_41140);
if(cljs.core.keyword_identical_QMARK_(result__39697__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39697__auto__;
}
break;
}
}catch (e41177){var ex__39698__auto__ = e41177;
var statearr_41178_41957 = state_41140;
(statearr_41178_41957[(2)] = ex__39698__auto__);


if(cljs.core.seq((state_41140[(4)]))){
var statearr_41179_41958 = state_41140;
(statearr_41179_41958[(1)] = cljs.core.first((state_41140[(4)])));

} else {
throw ex__39698__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41959 = state_41140;
state_41140 = G__41959;
continue;
} else {
return ret_value__39696__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__39695__auto__ = function(state_41140){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__39695__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__39695__auto____1.call(this,state_41140);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__39695__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__39695__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__39695__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__39695__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__39695__auto__;
})()
})();
var state__39771__auto__ = (function (){var statearr_41180 = f__39770__auto__();
(statearr_41180[(6)] = c__39769__auto__);

return statearr_41180;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39771__auto__);
}));

return c__39769__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__41182 = arguments.length;
switch (G__41182) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__41184 = arguments.length;
switch (G__41184) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__41186 = arguments.length;
switch (G__41186) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__39769__auto___41963 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__39770__auto__ = (function (){var switch__39694__auto__ = (function (state_41210){
var state_val_41211 = (state_41210[(1)]);
if((state_val_41211 === (7))){
var inst_41205 = (state_41210[(2)]);
var state_41210__$1 = state_41210;
var statearr_41212_41964 = state_41210__$1;
(statearr_41212_41964[(2)] = inst_41205);

(statearr_41212_41964[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41211 === (1))){
var inst_41187 = null;
var state_41210__$1 = (function (){var statearr_41213 = state_41210;
(statearr_41213[(7)] = inst_41187);

return statearr_41213;
})();
var statearr_41214_41965 = state_41210__$1;
(statearr_41214_41965[(2)] = null);

(statearr_41214_41965[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41211 === (4))){
var inst_41190 = (state_41210[(8)]);
var inst_41190__$1 = (state_41210[(2)]);
var inst_41191 = (inst_41190__$1 == null);
var inst_41192 = cljs.core.not(inst_41191);
var state_41210__$1 = (function (){var statearr_41215 = state_41210;
(statearr_41215[(8)] = inst_41190__$1);

return statearr_41215;
})();
if(inst_41192){
var statearr_41216_41966 = state_41210__$1;
(statearr_41216_41966[(1)] = (5));

} else {
var statearr_41217_41967 = state_41210__$1;
(statearr_41217_41967[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41211 === (6))){
var state_41210__$1 = state_41210;
var statearr_41218_41968 = state_41210__$1;
(statearr_41218_41968[(2)] = null);

(statearr_41218_41968[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41211 === (3))){
var inst_41207 = (state_41210[(2)]);
var inst_41208 = cljs.core.async.close_BANG_(out);
var state_41210__$1 = (function (){var statearr_41219 = state_41210;
(statearr_41219[(9)] = inst_41207);

return statearr_41219;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_41210__$1,inst_41208);
} else {
if((state_val_41211 === (2))){
var state_41210__$1 = state_41210;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41210__$1,(4),ch);
} else {
if((state_val_41211 === (11))){
var inst_41190 = (state_41210[(8)]);
var inst_41199 = (state_41210[(2)]);
var inst_41187 = inst_41190;
var state_41210__$1 = (function (){var statearr_41220 = state_41210;
(statearr_41220[(7)] = inst_41187);

(statearr_41220[(10)] = inst_41199);

return statearr_41220;
})();
var statearr_41221_41969 = state_41210__$1;
(statearr_41221_41969[(2)] = null);

(statearr_41221_41969[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41211 === (9))){
var inst_41190 = (state_41210[(8)]);
var state_41210__$1 = state_41210;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41210__$1,(11),out,inst_41190);
} else {
if((state_val_41211 === (5))){
var inst_41190 = (state_41210[(8)]);
var inst_41187 = (state_41210[(7)]);
var inst_41194 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_41190,inst_41187);
var state_41210__$1 = state_41210;
if(inst_41194){
var statearr_41223_41970 = state_41210__$1;
(statearr_41223_41970[(1)] = (8));

} else {
var statearr_41224_41971 = state_41210__$1;
(statearr_41224_41971[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41211 === (10))){
var inst_41202 = (state_41210[(2)]);
var state_41210__$1 = state_41210;
var statearr_41225_41973 = state_41210__$1;
(statearr_41225_41973[(2)] = inst_41202);

(statearr_41225_41973[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41211 === (8))){
var inst_41187 = (state_41210[(7)]);
var tmp41222 = inst_41187;
var inst_41187__$1 = tmp41222;
var state_41210__$1 = (function (){var statearr_41226 = state_41210;
(statearr_41226[(7)] = inst_41187__$1);

return statearr_41226;
})();
var statearr_41227_41974 = state_41210__$1;
(statearr_41227_41974[(2)] = null);

(statearr_41227_41974[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
return (function() {
var cljs$core$async$state_machine__39695__auto__ = null;
var cljs$core$async$state_machine__39695__auto____0 = (function (){
var statearr_41228 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_41228[(0)] = cljs$core$async$state_machine__39695__auto__);

(statearr_41228[(1)] = (1));

return statearr_41228;
});
var cljs$core$async$state_machine__39695__auto____1 = (function (state_41210){
while(true){
var ret_value__39696__auto__ = (function (){try{while(true){
var result__39697__auto__ = switch__39694__auto__(state_41210);
if(cljs.core.keyword_identical_QMARK_(result__39697__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39697__auto__;
}
break;
}
}catch (e41229){var ex__39698__auto__ = e41229;
var statearr_41230_41978 = state_41210;
(statearr_41230_41978[(2)] = ex__39698__auto__);


if(cljs.core.seq((state_41210[(4)]))){
var statearr_41231_41979 = state_41210;
(statearr_41231_41979[(1)] = cljs.core.first((state_41210[(4)])));

} else {
throw ex__39698__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41980 = state_41210;
state_41210 = G__41980;
continue;
} else {
return ret_value__39696__auto__;
}
break;
}
});
cljs$core$async$state_machine__39695__auto__ = function(state_41210){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39695__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39695__auto____1.call(this,state_41210);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39695__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39695__auto____0;
cljs$core$async$state_machine__39695__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39695__auto____1;
return cljs$core$async$state_machine__39695__auto__;
})()
})();
var state__39771__auto__ = (function (){var statearr_41232 = f__39770__auto__();
(statearr_41232[(6)] = c__39769__auto___41963);

return statearr_41232;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39771__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__41234 = arguments.length;
switch (G__41234) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__39769__auto___41982 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__39770__auto__ = (function (){var switch__39694__auto__ = (function (state_41272){
var state_val_41273 = (state_41272[(1)]);
if((state_val_41273 === (7))){
var inst_41268 = (state_41272[(2)]);
var state_41272__$1 = state_41272;
var statearr_41274_41983 = state_41272__$1;
(statearr_41274_41983[(2)] = inst_41268);

(statearr_41274_41983[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41273 === (1))){
var inst_41235 = (new Array(n));
var inst_41236 = inst_41235;
var inst_41237 = (0);
var state_41272__$1 = (function (){var statearr_41275 = state_41272;
(statearr_41275[(7)] = inst_41236);

(statearr_41275[(8)] = inst_41237);

return statearr_41275;
})();
var statearr_41276_41984 = state_41272__$1;
(statearr_41276_41984[(2)] = null);

(statearr_41276_41984[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41273 === (4))){
var inst_41240 = (state_41272[(9)]);
var inst_41240__$1 = (state_41272[(2)]);
var inst_41241 = (inst_41240__$1 == null);
var inst_41242 = cljs.core.not(inst_41241);
var state_41272__$1 = (function (){var statearr_41277 = state_41272;
(statearr_41277[(9)] = inst_41240__$1);

return statearr_41277;
})();
if(inst_41242){
var statearr_41278_41985 = state_41272__$1;
(statearr_41278_41985[(1)] = (5));

} else {
var statearr_41279_41986 = state_41272__$1;
(statearr_41279_41986[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41273 === (15))){
var inst_41262 = (state_41272[(2)]);
var state_41272__$1 = state_41272;
var statearr_41280_41987 = state_41272__$1;
(statearr_41280_41987[(2)] = inst_41262);

(statearr_41280_41987[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41273 === (13))){
var state_41272__$1 = state_41272;
var statearr_41281_41988 = state_41272__$1;
(statearr_41281_41988[(2)] = null);

(statearr_41281_41988[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41273 === (6))){
var inst_41237 = (state_41272[(8)]);
var inst_41258 = (inst_41237 > (0));
var state_41272__$1 = state_41272;
if(cljs.core.truth_(inst_41258)){
var statearr_41282_41989 = state_41272__$1;
(statearr_41282_41989[(1)] = (12));

} else {
var statearr_41283_41990 = state_41272__$1;
(statearr_41283_41990[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41273 === (3))){
var inst_41270 = (state_41272[(2)]);
var state_41272__$1 = state_41272;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41272__$1,inst_41270);
} else {
if((state_val_41273 === (12))){
var inst_41236 = (state_41272[(7)]);
var inst_41260 = cljs.core.vec(inst_41236);
var state_41272__$1 = state_41272;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41272__$1,(15),out,inst_41260);
} else {
if((state_val_41273 === (2))){
var state_41272__$1 = state_41272;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41272__$1,(4),ch);
} else {
if((state_val_41273 === (11))){
var inst_41252 = (state_41272[(2)]);
var inst_41253 = (new Array(n));
var inst_41236 = inst_41253;
var inst_41237 = (0);
var state_41272__$1 = (function (){var statearr_41284 = state_41272;
(statearr_41284[(7)] = inst_41236);

(statearr_41284[(10)] = inst_41252);

(statearr_41284[(8)] = inst_41237);

return statearr_41284;
})();
var statearr_41285_41992 = state_41272__$1;
(statearr_41285_41992[(2)] = null);

(statearr_41285_41992[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41273 === (9))){
var inst_41236 = (state_41272[(7)]);
var inst_41250 = cljs.core.vec(inst_41236);
var state_41272__$1 = state_41272;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41272__$1,(11),out,inst_41250);
} else {
if((state_val_41273 === (5))){
var inst_41236 = (state_41272[(7)]);
var inst_41240 = (state_41272[(9)]);
var inst_41237 = (state_41272[(8)]);
var inst_41245 = (state_41272[(11)]);
var inst_41244 = (inst_41236[inst_41237] = inst_41240);
var inst_41245__$1 = (inst_41237 + (1));
var inst_41246 = (inst_41245__$1 < n);
var state_41272__$1 = (function (){var statearr_41286 = state_41272;
(statearr_41286[(12)] = inst_41244);

(statearr_41286[(11)] = inst_41245__$1);

return statearr_41286;
})();
if(cljs.core.truth_(inst_41246)){
var statearr_41287_41993 = state_41272__$1;
(statearr_41287_41993[(1)] = (8));

} else {
var statearr_41288_41994 = state_41272__$1;
(statearr_41288_41994[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41273 === (14))){
var inst_41265 = (state_41272[(2)]);
var inst_41266 = cljs.core.async.close_BANG_(out);
var state_41272__$1 = (function (){var statearr_41290 = state_41272;
(statearr_41290[(13)] = inst_41265);

return statearr_41290;
})();
var statearr_41291_41995 = state_41272__$1;
(statearr_41291_41995[(2)] = inst_41266);

(statearr_41291_41995[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41273 === (10))){
var inst_41256 = (state_41272[(2)]);
var state_41272__$1 = state_41272;
var statearr_41292_41996 = state_41272__$1;
(statearr_41292_41996[(2)] = inst_41256);

(statearr_41292_41996[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41273 === (8))){
var inst_41236 = (state_41272[(7)]);
var inst_41245 = (state_41272[(11)]);
var tmp41289 = inst_41236;
var inst_41236__$1 = tmp41289;
var inst_41237 = inst_41245;
var state_41272__$1 = (function (){var statearr_41293 = state_41272;
(statearr_41293[(7)] = inst_41236__$1);

(statearr_41293[(8)] = inst_41237);

return statearr_41293;
})();
var statearr_41294_41997 = state_41272__$1;
(statearr_41294_41997[(2)] = null);

(statearr_41294_41997[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
return (function() {
var cljs$core$async$state_machine__39695__auto__ = null;
var cljs$core$async$state_machine__39695__auto____0 = (function (){
var statearr_41295 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41295[(0)] = cljs$core$async$state_machine__39695__auto__);

(statearr_41295[(1)] = (1));

return statearr_41295;
});
var cljs$core$async$state_machine__39695__auto____1 = (function (state_41272){
while(true){
var ret_value__39696__auto__ = (function (){try{while(true){
var result__39697__auto__ = switch__39694__auto__(state_41272);
if(cljs.core.keyword_identical_QMARK_(result__39697__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39697__auto__;
}
break;
}
}catch (e41296){var ex__39698__auto__ = e41296;
var statearr_41297_41998 = state_41272;
(statearr_41297_41998[(2)] = ex__39698__auto__);


if(cljs.core.seq((state_41272[(4)]))){
var statearr_41298_41999 = state_41272;
(statearr_41298_41999[(1)] = cljs.core.first((state_41272[(4)])));

} else {
throw ex__39698__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42000 = state_41272;
state_41272 = G__42000;
continue;
} else {
return ret_value__39696__auto__;
}
break;
}
});
cljs$core$async$state_machine__39695__auto__ = function(state_41272){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39695__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39695__auto____1.call(this,state_41272);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39695__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39695__auto____0;
cljs$core$async$state_machine__39695__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39695__auto____1;
return cljs$core$async$state_machine__39695__auto__;
})()
})();
var state__39771__auto__ = (function (){var statearr_41299 = f__39770__auto__();
(statearr_41299[(6)] = c__39769__auto___41982);

return statearr_41299;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39771__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__41301 = arguments.length;
switch (G__41301) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__39769__auto___42002 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__39770__auto__ = (function (){var switch__39694__auto__ = (function (state_41346){
var state_val_41347 = (state_41346[(1)]);
if((state_val_41347 === (7))){
var inst_41342 = (state_41346[(2)]);
var state_41346__$1 = state_41346;
var statearr_41348_42003 = state_41346__$1;
(statearr_41348_42003[(2)] = inst_41342);

(statearr_41348_42003[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41347 === (1))){
var inst_41302 = [];
var inst_41303 = inst_41302;
var inst_41304 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_41346__$1 = (function (){var statearr_41349 = state_41346;
(statearr_41349[(7)] = inst_41303);

(statearr_41349[(8)] = inst_41304);

return statearr_41349;
})();
var statearr_41350_42004 = state_41346__$1;
(statearr_41350_42004[(2)] = null);

(statearr_41350_42004[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41347 === (4))){
var inst_41307 = (state_41346[(9)]);
var inst_41307__$1 = (state_41346[(2)]);
var inst_41308 = (inst_41307__$1 == null);
var inst_41309 = cljs.core.not(inst_41308);
var state_41346__$1 = (function (){var statearr_41351 = state_41346;
(statearr_41351[(9)] = inst_41307__$1);

return statearr_41351;
})();
if(inst_41309){
var statearr_41352_42005 = state_41346__$1;
(statearr_41352_42005[(1)] = (5));

} else {
var statearr_41353_42006 = state_41346__$1;
(statearr_41353_42006[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41347 === (15))){
var inst_41303 = (state_41346[(7)]);
var inst_41334 = cljs.core.vec(inst_41303);
var state_41346__$1 = state_41346;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41346__$1,(18),out,inst_41334);
} else {
if((state_val_41347 === (13))){
var inst_41329 = (state_41346[(2)]);
var state_41346__$1 = state_41346;
var statearr_41354_42007 = state_41346__$1;
(statearr_41354_42007[(2)] = inst_41329);

(statearr_41354_42007[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41347 === (6))){
var inst_41303 = (state_41346[(7)]);
var inst_41331 = inst_41303.length;
var inst_41332 = (inst_41331 > (0));
var state_41346__$1 = state_41346;
if(cljs.core.truth_(inst_41332)){
var statearr_41355_42008 = state_41346__$1;
(statearr_41355_42008[(1)] = (15));

} else {
var statearr_41356_42009 = state_41346__$1;
(statearr_41356_42009[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41347 === (17))){
var inst_41339 = (state_41346[(2)]);
var inst_41340 = cljs.core.async.close_BANG_(out);
var state_41346__$1 = (function (){var statearr_41357 = state_41346;
(statearr_41357[(10)] = inst_41339);

return statearr_41357;
})();
var statearr_41358_42010 = state_41346__$1;
(statearr_41358_42010[(2)] = inst_41340);

(statearr_41358_42010[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41347 === (3))){
var inst_41344 = (state_41346[(2)]);
var state_41346__$1 = state_41346;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41346__$1,inst_41344);
} else {
if((state_val_41347 === (12))){
var inst_41303 = (state_41346[(7)]);
var inst_41322 = cljs.core.vec(inst_41303);
var state_41346__$1 = state_41346;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41346__$1,(14),out,inst_41322);
} else {
if((state_val_41347 === (2))){
var state_41346__$1 = state_41346;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41346__$1,(4),ch);
} else {
if((state_val_41347 === (11))){
var inst_41303 = (state_41346[(7)]);
var inst_41311 = (state_41346[(11)]);
var inst_41307 = (state_41346[(9)]);
var inst_41319 = inst_41303.push(inst_41307);
var tmp41359 = inst_41303;
var inst_41303__$1 = tmp41359;
var inst_41304 = inst_41311;
var state_41346__$1 = (function (){var statearr_41360 = state_41346;
(statearr_41360[(12)] = inst_41319);

(statearr_41360[(7)] = inst_41303__$1);

(statearr_41360[(8)] = inst_41304);

return statearr_41360;
})();
var statearr_41361_42015 = state_41346__$1;
(statearr_41361_42015[(2)] = null);

(statearr_41361_42015[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41347 === (9))){
var inst_41304 = (state_41346[(8)]);
var inst_41315 = cljs.core.keyword_identical_QMARK_(inst_41304,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_41346__$1 = state_41346;
var statearr_41362_42016 = state_41346__$1;
(statearr_41362_42016[(2)] = inst_41315);

(statearr_41362_42016[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41347 === (5))){
var inst_41312 = (state_41346[(13)]);
var inst_41304 = (state_41346[(8)]);
var inst_41311 = (state_41346[(11)]);
var inst_41307 = (state_41346[(9)]);
var inst_41311__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_41307) : f.call(null,inst_41307));
var inst_41312__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_41311__$1,inst_41304);
var state_41346__$1 = (function (){var statearr_41363 = state_41346;
(statearr_41363[(13)] = inst_41312__$1);

(statearr_41363[(11)] = inst_41311__$1);

return statearr_41363;
})();
if(inst_41312__$1){
var statearr_41364_42018 = state_41346__$1;
(statearr_41364_42018[(1)] = (8));

} else {
var statearr_41365_42019 = state_41346__$1;
(statearr_41365_42019[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41347 === (14))){
var inst_41311 = (state_41346[(11)]);
var inst_41307 = (state_41346[(9)]);
var inst_41324 = (state_41346[(2)]);
var inst_41325 = [];
var inst_41326 = inst_41325.push(inst_41307);
var inst_41303 = inst_41325;
var inst_41304 = inst_41311;
var state_41346__$1 = (function (){var statearr_41366 = state_41346;
(statearr_41366[(7)] = inst_41303);

(statearr_41366[(14)] = inst_41326);

(statearr_41366[(8)] = inst_41304);

(statearr_41366[(15)] = inst_41324);

return statearr_41366;
})();
var statearr_41367_42023 = state_41346__$1;
(statearr_41367_42023[(2)] = null);

(statearr_41367_42023[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41347 === (16))){
var state_41346__$1 = state_41346;
var statearr_41368_42024 = state_41346__$1;
(statearr_41368_42024[(2)] = null);

(statearr_41368_42024[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41347 === (10))){
var inst_41317 = (state_41346[(2)]);
var state_41346__$1 = state_41346;
if(cljs.core.truth_(inst_41317)){
var statearr_41369_42025 = state_41346__$1;
(statearr_41369_42025[(1)] = (11));

} else {
var statearr_41370_42026 = state_41346__$1;
(statearr_41370_42026[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41347 === (18))){
var inst_41336 = (state_41346[(2)]);
var state_41346__$1 = state_41346;
var statearr_41371_42028 = state_41346__$1;
(statearr_41371_42028[(2)] = inst_41336);

(statearr_41371_42028[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41347 === (8))){
var inst_41312 = (state_41346[(13)]);
var state_41346__$1 = state_41346;
var statearr_41372_42029 = state_41346__$1;
(statearr_41372_42029[(2)] = inst_41312);

(statearr_41372_42029[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
return (function() {
var cljs$core$async$state_machine__39695__auto__ = null;
var cljs$core$async$state_machine__39695__auto____0 = (function (){
var statearr_41373 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41373[(0)] = cljs$core$async$state_machine__39695__auto__);

(statearr_41373[(1)] = (1));

return statearr_41373;
});
var cljs$core$async$state_machine__39695__auto____1 = (function (state_41346){
while(true){
var ret_value__39696__auto__ = (function (){try{while(true){
var result__39697__auto__ = switch__39694__auto__(state_41346);
if(cljs.core.keyword_identical_QMARK_(result__39697__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39697__auto__;
}
break;
}
}catch (e41374){var ex__39698__auto__ = e41374;
var statearr_41375_42031 = state_41346;
(statearr_41375_42031[(2)] = ex__39698__auto__);


if(cljs.core.seq((state_41346[(4)]))){
var statearr_41376_42032 = state_41346;
(statearr_41376_42032[(1)] = cljs.core.first((state_41346[(4)])));

} else {
throw ex__39698__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42033 = state_41346;
state_41346 = G__42033;
continue;
} else {
return ret_value__39696__auto__;
}
break;
}
});
cljs$core$async$state_machine__39695__auto__ = function(state_41346){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39695__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39695__auto____1.call(this,state_41346);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39695__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39695__auto____0;
cljs$core$async$state_machine__39695__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39695__auto____1;
return cljs$core$async$state_machine__39695__auto__;
})()
})();
var state__39771__auto__ = (function (){var statearr_41377 = f__39770__auto__();
(statearr_41377[(6)] = c__39769__auto___42002);

return statearr_41377;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39771__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
