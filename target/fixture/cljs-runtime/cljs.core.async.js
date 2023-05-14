goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__148931 = arguments.length;
switch (G__148931) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async148932 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async148932 = (function (f,blockable,meta148933){
this.f = f;
this.blockable = blockable;
this.meta148933 = meta148933;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async148932.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_148934,meta148933__$1){
var self__ = this;
var _148934__$1 = this;
return (new cljs.core.async.t_cljs$core$async148932(self__.f,self__.blockable,meta148933__$1));
}));

(cljs.core.async.t_cljs$core$async148932.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_148934){
var self__ = this;
var _148934__$1 = this;
return self__.meta148933;
}));

(cljs.core.async.t_cljs$core$async148932.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async148932.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async148932.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async148932.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async148932.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta148933","meta148933",-197289485,null)], null);
}));

(cljs.core.async.t_cljs$core$async148932.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async148932.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async148932");

(cljs.core.async.t_cljs$core$async148932.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async148932");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async148932.
 */
cljs.core.async.__GT_t_cljs$core$async148932 = (function cljs$core$async$__GT_t_cljs$core$async148932(f__$1,blockable__$1,meta148933){
return (new cljs.core.async.t_cljs$core$async148932(f__$1,blockable__$1,meta148933));
});

}

return (new cljs.core.async.t_cljs$core$async148932(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__148937 = arguments.length;
switch (G__148937) {
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
var G__148939 = arguments.length;
switch (G__148939) {
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
var G__148941 = arguments.length;
switch (G__148941) {
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
var val_150738 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_150738) : fn1.call(null,val_150738));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_150738) : fn1.call(null,val_150738));
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
var G__148943 = arguments.length;
switch (G__148943) {
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
var n__4706__auto___150744 = n;
var x_150745 = (0);
while(true){
if((x_150745 < n__4706__auto___150744)){
(a[x_150745] = x_150745);

var G__150746 = (x_150745 + (1));
x_150745 = G__150746;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async148944 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async148944 = (function (flag,meta148945){
this.flag = flag;
this.meta148945 = meta148945;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async148944.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_148946,meta148945__$1){
var self__ = this;
var _148946__$1 = this;
return (new cljs.core.async.t_cljs$core$async148944(self__.flag,meta148945__$1));
}));

(cljs.core.async.t_cljs$core$async148944.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_148946){
var self__ = this;
var _148946__$1 = this;
return self__.meta148945;
}));

(cljs.core.async.t_cljs$core$async148944.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async148944.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async148944.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async148944.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async148944.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta148945","meta148945",-1613607579,null)], null);
}));

(cljs.core.async.t_cljs$core$async148944.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async148944.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async148944");

(cljs.core.async.t_cljs$core$async148944.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async148944");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async148944.
 */
cljs.core.async.__GT_t_cljs$core$async148944 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async148944(flag__$1,meta148945){
return (new cljs.core.async.t_cljs$core$async148944(flag__$1,meta148945));
});

}

return (new cljs.core.async.t_cljs$core$async148944(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async148947 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async148947 = (function (flag,cb,meta148948){
this.flag = flag;
this.cb = cb;
this.meta148948 = meta148948;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async148947.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_148949,meta148948__$1){
var self__ = this;
var _148949__$1 = this;
return (new cljs.core.async.t_cljs$core$async148947(self__.flag,self__.cb,meta148948__$1));
}));

(cljs.core.async.t_cljs$core$async148947.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_148949){
var self__ = this;
var _148949__$1 = this;
return self__.meta148948;
}));

(cljs.core.async.t_cljs$core$async148947.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async148947.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async148947.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async148947.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async148947.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta148948","meta148948",94788180,null)], null);
}));

(cljs.core.async.t_cljs$core$async148947.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async148947.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async148947");

(cljs.core.async.t_cljs$core$async148947.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async148947");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async148947.
 */
cljs.core.async.__GT_t_cljs$core$async148947 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async148947(flag__$1,cb__$1,meta148948){
return (new cljs.core.async.t_cljs$core$async148947(flag__$1,cb__$1,meta148948));
});

}

return (new cljs.core.async.t_cljs$core$async148947(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__148950_SHARP_){
var G__148952 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__148950_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__148952) : fret.call(null,G__148952));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__148951_SHARP_){
var G__148953 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__148951_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__148953) : fret.call(null,G__148953));
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
var G__150761 = (i + (1));
i = G__150761;
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
var len__4829__auto___150765 = arguments.length;
var i__4830__auto___150766 = (0);
while(true){
if((i__4830__auto___150766 < len__4829__auto___150765)){
args__4835__auto__.push((arguments[i__4830__auto___150766]));

var G__150767 = (i__4830__auto___150766 + (1));
i__4830__auto___150766 = G__150767;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__148956){
var map__148957 = p__148956;
var map__148957__$1 = cljs.core.__destructure_map(map__148957);
var opts = map__148957__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq148954){
var G__148955 = cljs.core.first(seq148954);
var seq148954__$1 = cljs.core.next(seq148954);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__148955,seq148954__$1);
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
var G__148971 = arguments.length;
switch (G__148971) {
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
var c__39769__auto___150772 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__39770__auto__ = (function (){var switch__39694__auto__ = (function (state_148996){
var state_val_148997 = (state_148996[(1)]);
if((state_val_148997 === (7))){
var inst_148991 = (state_148996[(2)]);
var state_148996__$1 = state_148996;
var statearr_148998_150773 = state_148996__$1;
(statearr_148998_150773[(2)] = inst_148991);

(statearr_148998_150773[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_148997 === (1))){
var state_148996__$1 = state_148996;
var statearr_148999_150774 = state_148996__$1;
(statearr_148999_150774[(2)] = null);

(statearr_148999_150774[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_148997 === (4))){
var inst_148974 = (state_148996[(7)]);
var inst_148974__$1 = (state_148996[(2)]);
var inst_148975 = (inst_148974__$1 == null);
var state_148996__$1 = (function (){var statearr_149000 = state_148996;
(statearr_149000[(7)] = inst_148974__$1);

return statearr_149000;
})();
if(cljs.core.truth_(inst_148975)){
var statearr_149001_150776 = state_148996__$1;
(statearr_149001_150776[(1)] = (5));

} else {
var statearr_149002_150777 = state_148996__$1;
(statearr_149002_150777[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_148997 === (13))){
var state_148996__$1 = state_148996;
var statearr_149003_150778 = state_148996__$1;
(statearr_149003_150778[(2)] = null);

(statearr_149003_150778[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_148997 === (6))){
var inst_148974 = (state_148996[(7)]);
var state_148996__$1 = state_148996;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_148996__$1,(11),to,inst_148974);
} else {
if((state_val_148997 === (3))){
var inst_148994 = (state_148996[(2)]);
var state_148996__$1 = state_148996;
return cljs.core.async.impl.ioc_helpers.return_chan(state_148996__$1,inst_148994);
} else {
if((state_val_148997 === (12))){
var state_148996__$1 = state_148996;
var statearr_149005_150780 = state_148996__$1;
(statearr_149005_150780[(2)] = null);

(statearr_149005_150780[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_148997 === (2))){
var state_148996__$1 = state_148996;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_148996__$1,(4),from);
} else {
if((state_val_148997 === (11))){
var inst_148984 = (state_148996[(2)]);
var state_148996__$1 = state_148996;
if(cljs.core.truth_(inst_148984)){
var statearr_149006_150781 = state_148996__$1;
(statearr_149006_150781[(1)] = (12));

} else {
var statearr_149007_150782 = state_148996__$1;
(statearr_149007_150782[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_148997 === (9))){
var state_148996__$1 = state_148996;
var statearr_149008_150797 = state_148996__$1;
(statearr_149008_150797[(2)] = null);

(statearr_149008_150797[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_148997 === (5))){
var state_148996__$1 = state_148996;
if(cljs.core.truth_(close_QMARK_)){
var statearr_149009_150798 = state_148996__$1;
(statearr_149009_150798[(1)] = (8));

} else {
var statearr_149010_150799 = state_148996__$1;
(statearr_149010_150799[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_148997 === (14))){
var inst_148989 = (state_148996[(2)]);
var state_148996__$1 = state_148996;
var statearr_149011_150801 = state_148996__$1;
(statearr_149011_150801[(2)] = inst_148989);

(statearr_149011_150801[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_148997 === (10))){
var inst_148981 = (state_148996[(2)]);
var state_148996__$1 = state_148996;
var statearr_149012_150804 = state_148996__$1;
(statearr_149012_150804[(2)] = inst_148981);

(statearr_149012_150804[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_148997 === (8))){
var inst_148978 = cljs.core.async.close_BANG_(to);
var state_148996__$1 = state_148996;
var statearr_149013_150806 = state_148996__$1;
(statearr_149013_150806[(2)] = inst_148978);

(statearr_149013_150806[(1)] = (10));


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
var statearr_149014 = [null,null,null,null,null,null,null,null];
(statearr_149014[(0)] = cljs$core$async$state_machine__39695__auto__);

(statearr_149014[(1)] = (1));

return statearr_149014;
});
var cljs$core$async$state_machine__39695__auto____1 = (function (state_148996){
while(true){
var ret_value__39696__auto__ = (function (){try{while(true){
var result__39697__auto__ = switch__39694__auto__(state_148996);
if(cljs.core.keyword_identical_QMARK_(result__39697__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39697__auto__;
}
break;
}
}catch (e149015){var ex__39698__auto__ = e149015;
var statearr_149016_150807 = state_148996;
(statearr_149016_150807[(2)] = ex__39698__auto__);


if(cljs.core.seq((state_148996[(4)]))){
var statearr_149017_150808 = state_148996;
(statearr_149017_150808[(1)] = cljs.core.first((state_148996[(4)])));

} else {
throw ex__39698__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__150810 = state_148996;
state_148996 = G__150810;
continue;
} else {
return ret_value__39696__auto__;
}
break;
}
});
cljs$core$async$state_machine__39695__auto__ = function(state_148996){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39695__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39695__auto____1.call(this,state_148996);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39695__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39695__auto____0;
cljs$core$async$state_machine__39695__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39695__auto____1;
return cljs$core$async$state_machine__39695__auto__;
})()
})();
var state__39771__auto__ = (function (){var statearr_149018 = f__39770__auto__();
(statearr_149018[(6)] = c__39769__auto___150772);

return statearr_149018;
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
var process = (function (p__149019){
var vec__149020 = p__149019;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__149020,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__149020,(1),null);
var job = vec__149020;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__39769__auto___150814 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__39770__auto__ = (function (){var switch__39694__auto__ = (function (state_149027){
var state_val_149028 = (state_149027[(1)]);
if((state_val_149028 === (1))){
var state_149027__$1 = state_149027;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_149027__$1,(2),res,v);
} else {
if((state_val_149028 === (2))){
var inst_149024 = (state_149027[(2)]);
var inst_149025 = cljs.core.async.close_BANG_(res);
var state_149027__$1 = (function (){var statearr_149029 = state_149027;
(statearr_149029[(7)] = inst_149024);

return statearr_149029;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_149027__$1,inst_149025);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__39695__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__39695__auto____0 = (function (){
var statearr_149030 = [null,null,null,null,null,null,null,null];
(statearr_149030[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__39695__auto__);

(statearr_149030[(1)] = (1));

return statearr_149030;
});
var cljs$core$async$pipeline_STAR__$_state_machine__39695__auto____1 = (function (state_149027){
while(true){
var ret_value__39696__auto__ = (function (){try{while(true){
var result__39697__auto__ = switch__39694__auto__(state_149027);
if(cljs.core.keyword_identical_QMARK_(result__39697__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39697__auto__;
}
break;
}
}catch (e149031){var ex__39698__auto__ = e149031;
var statearr_149032_150815 = state_149027;
(statearr_149032_150815[(2)] = ex__39698__auto__);


if(cljs.core.seq((state_149027[(4)]))){
var statearr_149033_150816 = state_149027;
(statearr_149033_150816[(1)] = cljs.core.first((state_149027[(4)])));

} else {
throw ex__39698__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__150817 = state_149027;
state_149027 = G__150817;
continue;
} else {
return ret_value__39696__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__39695__auto__ = function(state_149027){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__39695__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__39695__auto____1.call(this,state_149027);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__39695__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__39695__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__39695__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__39695__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__39695__auto__;
})()
})();
var state__39771__auto__ = (function (){var statearr_149034 = f__39770__auto__();
(statearr_149034[(6)] = c__39769__auto___150814);

return statearr_149034;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39771__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__149035){
var vec__149036 = p__149035;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__149036,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__149036,(1),null);
var job = vec__149036;
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
var n__4706__auto___150822 = n;
var __150823 = (0);
while(true){
if((__150823 < n__4706__auto___150822)){
var G__149039_150824 = type;
var G__149039_150825__$1 = (((G__149039_150824 instanceof cljs.core.Keyword))?G__149039_150824.fqn:null);
switch (G__149039_150825__$1) {
case "compute":
var c__39769__auto___150827 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__150823,c__39769__auto___150827,G__149039_150824,G__149039_150825__$1,n__4706__auto___150822,jobs,results,process,async){
return (function (){
var f__39770__auto__ = (function (){var switch__39694__auto__ = ((function (__150823,c__39769__auto___150827,G__149039_150824,G__149039_150825__$1,n__4706__auto___150822,jobs,results,process,async){
return (function (state_149052){
var state_val_149053 = (state_149052[(1)]);
if((state_val_149053 === (1))){
var state_149052__$1 = state_149052;
var statearr_149054_150831 = state_149052__$1;
(statearr_149054_150831[(2)] = null);

(statearr_149054_150831[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149053 === (2))){
var state_149052__$1 = state_149052;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_149052__$1,(4),jobs);
} else {
if((state_val_149053 === (3))){
var inst_149050 = (state_149052[(2)]);
var state_149052__$1 = state_149052;
return cljs.core.async.impl.ioc_helpers.return_chan(state_149052__$1,inst_149050);
} else {
if((state_val_149053 === (4))){
var inst_149042 = (state_149052[(2)]);
var inst_149043 = process(inst_149042);
var state_149052__$1 = state_149052;
if(cljs.core.truth_(inst_149043)){
var statearr_149055_150832 = state_149052__$1;
(statearr_149055_150832[(1)] = (5));

} else {
var statearr_149056_150833 = state_149052__$1;
(statearr_149056_150833[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149053 === (5))){
var state_149052__$1 = state_149052;
var statearr_149057_150836 = state_149052__$1;
(statearr_149057_150836[(2)] = null);

(statearr_149057_150836[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149053 === (6))){
var state_149052__$1 = state_149052;
var statearr_149058_150838 = state_149052__$1;
(statearr_149058_150838[(2)] = null);

(statearr_149058_150838[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149053 === (7))){
var inst_149048 = (state_149052[(2)]);
var state_149052__$1 = state_149052;
var statearr_149059_150839 = state_149052__$1;
(statearr_149059_150839[(2)] = inst_149048);

(statearr_149059_150839[(1)] = (3));


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
});})(__150823,c__39769__auto___150827,G__149039_150824,G__149039_150825__$1,n__4706__auto___150822,jobs,results,process,async))
;
return ((function (__150823,switch__39694__auto__,c__39769__auto___150827,G__149039_150824,G__149039_150825__$1,n__4706__auto___150822,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__39695__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__39695__auto____0 = (function (){
var statearr_149060 = [null,null,null,null,null,null,null];
(statearr_149060[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__39695__auto__);

(statearr_149060[(1)] = (1));

return statearr_149060;
});
var cljs$core$async$pipeline_STAR__$_state_machine__39695__auto____1 = (function (state_149052){
while(true){
var ret_value__39696__auto__ = (function (){try{while(true){
var result__39697__auto__ = switch__39694__auto__(state_149052);
if(cljs.core.keyword_identical_QMARK_(result__39697__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39697__auto__;
}
break;
}
}catch (e149061){var ex__39698__auto__ = e149061;
var statearr_149062_150842 = state_149052;
(statearr_149062_150842[(2)] = ex__39698__auto__);


if(cljs.core.seq((state_149052[(4)]))){
var statearr_149063_150844 = state_149052;
(statearr_149063_150844[(1)] = cljs.core.first((state_149052[(4)])));

} else {
throw ex__39698__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__150845 = state_149052;
state_149052 = G__150845;
continue;
} else {
return ret_value__39696__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__39695__auto__ = function(state_149052){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__39695__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__39695__auto____1.call(this,state_149052);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__39695__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__39695__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__39695__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__39695__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__39695__auto__;
})()
;})(__150823,switch__39694__auto__,c__39769__auto___150827,G__149039_150824,G__149039_150825__$1,n__4706__auto___150822,jobs,results,process,async))
})();
var state__39771__auto__ = (function (){var statearr_149064 = f__39770__auto__();
(statearr_149064[(6)] = c__39769__auto___150827);

return statearr_149064;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39771__auto__);
});})(__150823,c__39769__auto___150827,G__149039_150824,G__149039_150825__$1,n__4706__auto___150822,jobs,results,process,async))
);


break;
case "async":
var c__39769__auto___150846 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__150823,c__39769__auto___150846,G__149039_150824,G__149039_150825__$1,n__4706__auto___150822,jobs,results,process,async){
return (function (){
var f__39770__auto__ = (function (){var switch__39694__auto__ = ((function (__150823,c__39769__auto___150846,G__149039_150824,G__149039_150825__$1,n__4706__auto___150822,jobs,results,process,async){
return (function (state_149077){
var state_val_149078 = (state_149077[(1)]);
if((state_val_149078 === (1))){
var state_149077__$1 = state_149077;
var statearr_149079_150847 = state_149077__$1;
(statearr_149079_150847[(2)] = null);

(statearr_149079_150847[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149078 === (2))){
var state_149077__$1 = state_149077;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_149077__$1,(4),jobs);
} else {
if((state_val_149078 === (3))){
var inst_149075 = (state_149077[(2)]);
var state_149077__$1 = state_149077;
return cljs.core.async.impl.ioc_helpers.return_chan(state_149077__$1,inst_149075);
} else {
if((state_val_149078 === (4))){
var inst_149067 = (state_149077[(2)]);
var inst_149068 = async(inst_149067);
var state_149077__$1 = state_149077;
if(cljs.core.truth_(inst_149068)){
var statearr_149080_150851 = state_149077__$1;
(statearr_149080_150851[(1)] = (5));

} else {
var statearr_149081_150852 = state_149077__$1;
(statearr_149081_150852[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149078 === (5))){
var state_149077__$1 = state_149077;
var statearr_149082_150853 = state_149077__$1;
(statearr_149082_150853[(2)] = null);

(statearr_149082_150853[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149078 === (6))){
var state_149077__$1 = state_149077;
var statearr_149083_150854 = state_149077__$1;
(statearr_149083_150854[(2)] = null);

(statearr_149083_150854[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149078 === (7))){
var inst_149073 = (state_149077[(2)]);
var state_149077__$1 = state_149077;
var statearr_149084_150855 = state_149077__$1;
(statearr_149084_150855[(2)] = inst_149073);

(statearr_149084_150855[(1)] = (3));


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
});})(__150823,c__39769__auto___150846,G__149039_150824,G__149039_150825__$1,n__4706__auto___150822,jobs,results,process,async))
;
return ((function (__150823,switch__39694__auto__,c__39769__auto___150846,G__149039_150824,G__149039_150825__$1,n__4706__auto___150822,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__39695__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__39695__auto____0 = (function (){
var statearr_149085 = [null,null,null,null,null,null,null];
(statearr_149085[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__39695__auto__);

(statearr_149085[(1)] = (1));

return statearr_149085;
});
var cljs$core$async$pipeline_STAR__$_state_machine__39695__auto____1 = (function (state_149077){
while(true){
var ret_value__39696__auto__ = (function (){try{while(true){
var result__39697__auto__ = switch__39694__auto__(state_149077);
if(cljs.core.keyword_identical_QMARK_(result__39697__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39697__auto__;
}
break;
}
}catch (e149086){var ex__39698__auto__ = e149086;
var statearr_149087_150857 = state_149077;
(statearr_149087_150857[(2)] = ex__39698__auto__);


if(cljs.core.seq((state_149077[(4)]))){
var statearr_149088_150858 = state_149077;
(statearr_149088_150858[(1)] = cljs.core.first((state_149077[(4)])));

} else {
throw ex__39698__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__150859 = state_149077;
state_149077 = G__150859;
continue;
} else {
return ret_value__39696__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__39695__auto__ = function(state_149077){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__39695__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__39695__auto____1.call(this,state_149077);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__39695__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__39695__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__39695__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__39695__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__39695__auto__;
})()
;})(__150823,switch__39694__auto__,c__39769__auto___150846,G__149039_150824,G__149039_150825__$1,n__4706__auto___150822,jobs,results,process,async))
})();
var state__39771__auto__ = (function (){var statearr_149089 = f__39770__auto__();
(statearr_149089[(6)] = c__39769__auto___150846);

return statearr_149089;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39771__auto__);
});})(__150823,c__39769__auto___150846,G__149039_150824,G__149039_150825__$1,n__4706__auto___150822,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__149039_150825__$1)].join('')));

}

var G__150861 = (__150823 + (1));
__150823 = G__150861;
continue;
} else {
}
break;
}

var c__39769__auto___150863 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__39770__auto__ = (function (){var switch__39694__auto__ = (function (state_149111){
var state_val_149112 = (state_149111[(1)]);
if((state_val_149112 === (7))){
var inst_149107 = (state_149111[(2)]);
var state_149111__$1 = state_149111;
var statearr_149113_150865 = state_149111__$1;
(statearr_149113_150865[(2)] = inst_149107);

(statearr_149113_150865[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149112 === (1))){
var state_149111__$1 = state_149111;
var statearr_149114_150866 = state_149111__$1;
(statearr_149114_150866[(2)] = null);

(statearr_149114_150866[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149112 === (4))){
var inst_149092 = (state_149111[(7)]);
var inst_149092__$1 = (state_149111[(2)]);
var inst_149093 = (inst_149092__$1 == null);
var state_149111__$1 = (function (){var statearr_149115 = state_149111;
(statearr_149115[(7)] = inst_149092__$1);

return statearr_149115;
})();
if(cljs.core.truth_(inst_149093)){
var statearr_149116_150867 = state_149111__$1;
(statearr_149116_150867[(1)] = (5));

} else {
var statearr_149117_150868 = state_149111__$1;
(statearr_149117_150868[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149112 === (6))){
var inst_149092 = (state_149111[(7)]);
var inst_149097 = (state_149111[(8)]);
var inst_149097__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_149098 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_149099 = [inst_149092,inst_149097__$1];
var inst_149100 = (new cljs.core.PersistentVector(null,2,(5),inst_149098,inst_149099,null));
var state_149111__$1 = (function (){var statearr_149118 = state_149111;
(statearr_149118[(8)] = inst_149097__$1);

return statearr_149118;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_149111__$1,(8),jobs,inst_149100);
} else {
if((state_val_149112 === (3))){
var inst_149109 = (state_149111[(2)]);
var state_149111__$1 = state_149111;
return cljs.core.async.impl.ioc_helpers.return_chan(state_149111__$1,inst_149109);
} else {
if((state_val_149112 === (2))){
var state_149111__$1 = state_149111;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_149111__$1,(4),from);
} else {
if((state_val_149112 === (9))){
var inst_149104 = (state_149111[(2)]);
var state_149111__$1 = (function (){var statearr_149119 = state_149111;
(statearr_149119[(9)] = inst_149104);

return statearr_149119;
})();
var statearr_149120_150869 = state_149111__$1;
(statearr_149120_150869[(2)] = null);

(statearr_149120_150869[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149112 === (5))){
var inst_149095 = cljs.core.async.close_BANG_(jobs);
var state_149111__$1 = state_149111;
var statearr_149121_150870 = state_149111__$1;
(statearr_149121_150870[(2)] = inst_149095);

(statearr_149121_150870[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149112 === (8))){
var inst_149097 = (state_149111[(8)]);
var inst_149102 = (state_149111[(2)]);
var state_149111__$1 = (function (){var statearr_149122 = state_149111;
(statearr_149122[(10)] = inst_149102);

return statearr_149122;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_149111__$1,(9),results,inst_149097);
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
var statearr_149123 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_149123[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__39695__auto__);

(statearr_149123[(1)] = (1));

return statearr_149123;
});
var cljs$core$async$pipeline_STAR__$_state_machine__39695__auto____1 = (function (state_149111){
while(true){
var ret_value__39696__auto__ = (function (){try{while(true){
var result__39697__auto__ = switch__39694__auto__(state_149111);
if(cljs.core.keyword_identical_QMARK_(result__39697__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39697__auto__;
}
break;
}
}catch (e149124){var ex__39698__auto__ = e149124;
var statearr_149125_150871 = state_149111;
(statearr_149125_150871[(2)] = ex__39698__auto__);


if(cljs.core.seq((state_149111[(4)]))){
var statearr_149126_150872 = state_149111;
(statearr_149126_150872[(1)] = cljs.core.first((state_149111[(4)])));

} else {
throw ex__39698__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__150873 = state_149111;
state_149111 = G__150873;
continue;
} else {
return ret_value__39696__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__39695__auto__ = function(state_149111){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__39695__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__39695__auto____1.call(this,state_149111);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__39695__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__39695__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__39695__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__39695__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__39695__auto__;
})()
})();
var state__39771__auto__ = (function (){var statearr_149132 = f__39770__auto__();
(statearr_149132[(6)] = c__39769__auto___150863);

return statearr_149132;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39771__auto__);
}));


var c__39769__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__39770__auto__ = (function (){var switch__39694__auto__ = (function (state_149170){
var state_val_149171 = (state_149170[(1)]);
if((state_val_149171 === (7))){
var inst_149166 = (state_149170[(2)]);
var state_149170__$1 = state_149170;
var statearr_149172_150874 = state_149170__$1;
(statearr_149172_150874[(2)] = inst_149166);

(statearr_149172_150874[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149171 === (20))){
var state_149170__$1 = state_149170;
var statearr_149173_150875 = state_149170__$1;
(statearr_149173_150875[(2)] = null);

(statearr_149173_150875[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149171 === (1))){
var state_149170__$1 = state_149170;
var statearr_149174_150876 = state_149170__$1;
(statearr_149174_150876[(2)] = null);

(statearr_149174_150876[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149171 === (4))){
var inst_149135 = (state_149170[(7)]);
var inst_149135__$1 = (state_149170[(2)]);
var inst_149136 = (inst_149135__$1 == null);
var state_149170__$1 = (function (){var statearr_149175 = state_149170;
(statearr_149175[(7)] = inst_149135__$1);

return statearr_149175;
})();
if(cljs.core.truth_(inst_149136)){
var statearr_149176_150877 = state_149170__$1;
(statearr_149176_150877[(1)] = (5));

} else {
var statearr_149177_150878 = state_149170__$1;
(statearr_149177_150878[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149171 === (15))){
var inst_149148 = (state_149170[(8)]);
var state_149170__$1 = state_149170;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_149170__$1,(18),to,inst_149148);
} else {
if((state_val_149171 === (21))){
var inst_149161 = (state_149170[(2)]);
var state_149170__$1 = state_149170;
var statearr_149178_150879 = state_149170__$1;
(statearr_149178_150879[(2)] = inst_149161);

(statearr_149178_150879[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149171 === (13))){
var inst_149163 = (state_149170[(2)]);
var state_149170__$1 = (function (){var statearr_149179 = state_149170;
(statearr_149179[(9)] = inst_149163);

return statearr_149179;
})();
var statearr_149180_150880 = state_149170__$1;
(statearr_149180_150880[(2)] = null);

(statearr_149180_150880[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149171 === (6))){
var inst_149135 = (state_149170[(7)]);
var state_149170__$1 = state_149170;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_149170__$1,(11),inst_149135);
} else {
if((state_val_149171 === (17))){
var inst_149156 = (state_149170[(2)]);
var state_149170__$1 = state_149170;
if(cljs.core.truth_(inst_149156)){
var statearr_149181_150881 = state_149170__$1;
(statearr_149181_150881[(1)] = (19));

} else {
var statearr_149182_150882 = state_149170__$1;
(statearr_149182_150882[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149171 === (3))){
var inst_149168 = (state_149170[(2)]);
var state_149170__$1 = state_149170;
return cljs.core.async.impl.ioc_helpers.return_chan(state_149170__$1,inst_149168);
} else {
if((state_val_149171 === (12))){
var inst_149145 = (state_149170[(10)]);
var state_149170__$1 = state_149170;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_149170__$1,(14),inst_149145);
} else {
if((state_val_149171 === (2))){
var state_149170__$1 = state_149170;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_149170__$1,(4),results);
} else {
if((state_val_149171 === (19))){
var state_149170__$1 = state_149170;
var statearr_149183_150883 = state_149170__$1;
(statearr_149183_150883[(2)] = null);

(statearr_149183_150883[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149171 === (11))){
var inst_149145 = (state_149170[(2)]);
var state_149170__$1 = (function (){var statearr_149184 = state_149170;
(statearr_149184[(10)] = inst_149145);

return statearr_149184;
})();
var statearr_149187_150884 = state_149170__$1;
(statearr_149187_150884[(2)] = null);

(statearr_149187_150884[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149171 === (9))){
var state_149170__$1 = state_149170;
var statearr_149191_150885 = state_149170__$1;
(statearr_149191_150885[(2)] = null);

(statearr_149191_150885[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149171 === (5))){
var state_149170__$1 = state_149170;
if(cljs.core.truth_(close_QMARK_)){
var statearr_149192_150886 = state_149170__$1;
(statearr_149192_150886[(1)] = (8));

} else {
var statearr_149193_150887 = state_149170__$1;
(statearr_149193_150887[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149171 === (14))){
var inst_149150 = (state_149170[(11)]);
var inst_149148 = (state_149170[(8)]);
var inst_149148__$1 = (state_149170[(2)]);
var inst_149149 = (inst_149148__$1 == null);
var inst_149150__$1 = cljs.core.not(inst_149149);
var state_149170__$1 = (function (){var statearr_149194 = state_149170;
(statearr_149194[(11)] = inst_149150__$1);

(statearr_149194[(8)] = inst_149148__$1);

return statearr_149194;
})();
if(inst_149150__$1){
var statearr_149195_150888 = state_149170__$1;
(statearr_149195_150888[(1)] = (15));

} else {
var statearr_149196_150889 = state_149170__$1;
(statearr_149196_150889[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149171 === (16))){
var inst_149150 = (state_149170[(11)]);
var state_149170__$1 = state_149170;
var statearr_149197_150890 = state_149170__$1;
(statearr_149197_150890[(2)] = inst_149150);

(statearr_149197_150890[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149171 === (10))){
var inst_149142 = (state_149170[(2)]);
var state_149170__$1 = state_149170;
var statearr_149198_150891 = state_149170__$1;
(statearr_149198_150891[(2)] = inst_149142);

(statearr_149198_150891[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149171 === (18))){
var inst_149153 = (state_149170[(2)]);
var state_149170__$1 = state_149170;
var statearr_149199_150892 = state_149170__$1;
(statearr_149199_150892[(2)] = inst_149153);

(statearr_149199_150892[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149171 === (8))){
var inst_149139 = cljs.core.async.close_BANG_(to);
var state_149170__$1 = state_149170;
var statearr_149200_150893 = state_149170__$1;
(statearr_149200_150893[(2)] = inst_149139);

(statearr_149200_150893[(1)] = (10));


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
var statearr_149201 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_149201[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__39695__auto__);

(statearr_149201[(1)] = (1));

return statearr_149201;
});
var cljs$core$async$pipeline_STAR__$_state_machine__39695__auto____1 = (function (state_149170){
while(true){
var ret_value__39696__auto__ = (function (){try{while(true){
var result__39697__auto__ = switch__39694__auto__(state_149170);
if(cljs.core.keyword_identical_QMARK_(result__39697__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39697__auto__;
}
break;
}
}catch (e149202){var ex__39698__auto__ = e149202;
var statearr_149203_150894 = state_149170;
(statearr_149203_150894[(2)] = ex__39698__auto__);


if(cljs.core.seq((state_149170[(4)]))){
var statearr_149204_150895 = state_149170;
(statearr_149204_150895[(1)] = cljs.core.first((state_149170[(4)])));

} else {
throw ex__39698__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__150896 = state_149170;
state_149170 = G__150896;
continue;
} else {
return ret_value__39696__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__39695__auto__ = function(state_149170){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__39695__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__39695__auto____1.call(this,state_149170);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__39695__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__39695__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__39695__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__39695__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__39695__auto__;
})()
})();
var state__39771__auto__ = (function (){var statearr_149205 = f__39770__auto__();
(statearr_149205[(6)] = c__39769__auto__);

return statearr_149205;
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
var G__149209 = arguments.length;
switch (G__149209) {
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
var G__149211 = arguments.length;
switch (G__149211) {
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
var G__149214 = arguments.length;
switch (G__149214) {
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
var c__39769__auto___150900 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__39770__auto__ = (function (){var switch__39694__auto__ = (function (state_149241){
var state_val_149242 = (state_149241[(1)]);
if((state_val_149242 === (7))){
var inst_149237 = (state_149241[(2)]);
var state_149241__$1 = state_149241;
var statearr_149243_150901 = state_149241__$1;
(statearr_149243_150901[(2)] = inst_149237);

(statearr_149243_150901[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149242 === (1))){
var state_149241__$1 = state_149241;
var statearr_149244_150902 = state_149241__$1;
(statearr_149244_150902[(2)] = null);

(statearr_149244_150902[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149242 === (4))){
var inst_149217 = (state_149241[(7)]);
var inst_149217__$1 = (state_149241[(2)]);
var inst_149218 = (inst_149217__$1 == null);
var state_149241__$1 = (function (){var statearr_149245 = state_149241;
(statearr_149245[(7)] = inst_149217__$1);

return statearr_149245;
})();
if(cljs.core.truth_(inst_149218)){
var statearr_149246_150903 = state_149241__$1;
(statearr_149246_150903[(1)] = (5));

} else {
var statearr_149247_150904 = state_149241__$1;
(statearr_149247_150904[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149242 === (13))){
var state_149241__$1 = state_149241;
var statearr_149248_150905 = state_149241__$1;
(statearr_149248_150905[(2)] = null);

(statearr_149248_150905[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149242 === (6))){
var inst_149217 = (state_149241[(7)]);
var inst_149224 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_149217) : p.call(null,inst_149217));
var state_149241__$1 = state_149241;
if(cljs.core.truth_(inst_149224)){
var statearr_149249_150906 = state_149241__$1;
(statearr_149249_150906[(1)] = (9));

} else {
var statearr_149250_150907 = state_149241__$1;
(statearr_149250_150907[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149242 === (3))){
var inst_149239 = (state_149241[(2)]);
var state_149241__$1 = state_149241;
return cljs.core.async.impl.ioc_helpers.return_chan(state_149241__$1,inst_149239);
} else {
if((state_val_149242 === (12))){
var state_149241__$1 = state_149241;
var statearr_149252_150908 = state_149241__$1;
(statearr_149252_150908[(2)] = null);

(statearr_149252_150908[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149242 === (2))){
var state_149241__$1 = state_149241;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_149241__$1,(4),ch);
} else {
if((state_val_149242 === (11))){
var inst_149217 = (state_149241[(7)]);
var inst_149228 = (state_149241[(2)]);
var state_149241__$1 = state_149241;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_149241__$1,(8),inst_149228,inst_149217);
} else {
if((state_val_149242 === (9))){
var state_149241__$1 = state_149241;
var statearr_149253_150909 = state_149241__$1;
(statearr_149253_150909[(2)] = tc);

(statearr_149253_150909[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149242 === (5))){
var inst_149220 = cljs.core.async.close_BANG_(tc);
var inst_149222 = cljs.core.async.close_BANG_(fc);
var state_149241__$1 = (function (){var statearr_149254 = state_149241;
(statearr_149254[(8)] = inst_149220);

return statearr_149254;
})();
var statearr_149255_150910 = state_149241__$1;
(statearr_149255_150910[(2)] = inst_149222);

(statearr_149255_150910[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149242 === (14))){
var inst_149235 = (state_149241[(2)]);
var state_149241__$1 = state_149241;
var statearr_149256_150911 = state_149241__$1;
(statearr_149256_150911[(2)] = inst_149235);

(statearr_149256_150911[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149242 === (10))){
var state_149241__$1 = state_149241;
var statearr_149257_150912 = state_149241__$1;
(statearr_149257_150912[(2)] = fc);

(statearr_149257_150912[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149242 === (8))){
var inst_149230 = (state_149241[(2)]);
var state_149241__$1 = state_149241;
if(cljs.core.truth_(inst_149230)){
var statearr_149258_150913 = state_149241__$1;
(statearr_149258_150913[(1)] = (12));

} else {
var statearr_149259_150914 = state_149241__$1;
(statearr_149259_150914[(1)] = (13));

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
var statearr_149260 = [null,null,null,null,null,null,null,null,null];
(statearr_149260[(0)] = cljs$core$async$state_machine__39695__auto__);

(statearr_149260[(1)] = (1));

return statearr_149260;
});
var cljs$core$async$state_machine__39695__auto____1 = (function (state_149241){
while(true){
var ret_value__39696__auto__ = (function (){try{while(true){
var result__39697__auto__ = switch__39694__auto__(state_149241);
if(cljs.core.keyword_identical_QMARK_(result__39697__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39697__auto__;
}
break;
}
}catch (e149261){var ex__39698__auto__ = e149261;
var statearr_149262_150915 = state_149241;
(statearr_149262_150915[(2)] = ex__39698__auto__);


if(cljs.core.seq((state_149241[(4)]))){
var statearr_149263_150916 = state_149241;
(statearr_149263_150916[(1)] = cljs.core.first((state_149241[(4)])));

} else {
throw ex__39698__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__150917 = state_149241;
state_149241 = G__150917;
continue;
} else {
return ret_value__39696__auto__;
}
break;
}
});
cljs$core$async$state_machine__39695__auto__ = function(state_149241){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39695__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39695__auto____1.call(this,state_149241);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39695__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39695__auto____0;
cljs$core$async$state_machine__39695__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39695__auto____1;
return cljs$core$async$state_machine__39695__auto__;
})()
})();
var state__39771__auto__ = (function (){var statearr_149264 = f__39770__auto__();
(statearr_149264[(6)] = c__39769__auto___150900);

return statearr_149264;
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
var f__39770__auto__ = (function (){var switch__39694__auto__ = (function (state_149286){
var state_val_149287 = (state_149286[(1)]);
if((state_val_149287 === (7))){
var inst_149282 = (state_149286[(2)]);
var state_149286__$1 = state_149286;
var statearr_149288_150918 = state_149286__$1;
(statearr_149288_150918[(2)] = inst_149282);

(statearr_149288_150918[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149287 === (1))){
var inst_149265 = init;
var inst_149266 = inst_149265;
var state_149286__$1 = (function (){var statearr_149289 = state_149286;
(statearr_149289[(7)] = inst_149266);

return statearr_149289;
})();
var statearr_149290_150919 = state_149286__$1;
(statearr_149290_150919[(2)] = null);

(statearr_149290_150919[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149287 === (4))){
var inst_149269 = (state_149286[(8)]);
var inst_149269__$1 = (state_149286[(2)]);
var inst_149270 = (inst_149269__$1 == null);
var state_149286__$1 = (function (){var statearr_149291 = state_149286;
(statearr_149291[(8)] = inst_149269__$1);

return statearr_149291;
})();
if(cljs.core.truth_(inst_149270)){
var statearr_149292_150920 = state_149286__$1;
(statearr_149292_150920[(1)] = (5));

} else {
var statearr_149293_150921 = state_149286__$1;
(statearr_149293_150921[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149287 === (6))){
var inst_149273 = (state_149286[(9)]);
var inst_149269 = (state_149286[(8)]);
var inst_149266 = (state_149286[(7)]);
var inst_149273__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_149266,inst_149269) : f.call(null,inst_149266,inst_149269));
var inst_149274 = cljs.core.reduced_QMARK_(inst_149273__$1);
var state_149286__$1 = (function (){var statearr_149294 = state_149286;
(statearr_149294[(9)] = inst_149273__$1);

return statearr_149294;
})();
if(inst_149274){
var statearr_149295_150922 = state_149286__$1;
(statearr_149295_150922[(1)] = (8));

} else {
var statearr_149296_150923 = state_149286__$1;
(statearr_149296_150923[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149287 === (3))){
var inst_149284 = (state_149286[(2)]);
var state_149286__$1 = state_149286;
return cljs.core.async.impl.ioc_helpers.return_chan(state_149286__$1,inst_149284);
} else {
if((state_val_149287 === (2))){
var state_149286__$1 = state_149286;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_149286__$1,(4),ch);
} else {
if((state_val_149287 === (9))){
var inst_149273 = (state_149286[(9)]);
var inst_149266 = inst_149273;
var state_149286__$1 = (function (){var statearr_149301 = state_149286;
(statearr_149301[(7)] = inst_149266);

return statearr_149301;
})();
var statearr_149302_150924 = state_149286__$1;
(statearr_149302_150924[(2)] = null);

(statearr_149302_150924[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149287 === (5))){
var inst_149266 = (state_149286[(7)]);
var state_149286__$1 = state_149286;
var statearr_149303_150925 = state_149286__$1;
(statearr_149303_150925[(2)] = inst_149266);

(statearr_149303_150925[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149287 === (10))){
var inst_149280 = (state_149286[(2)]);
var state_149286__$1 = state_149286;
var statearr_149304_150926 = state_149286__$1;
(statearr_149304_150926[(2)] = inst_149280);

(statearr_149304_150926[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149287 === (8))){
var inst_149273 = (state_149286[(9)]);
var inst_149276 = cljs.core.deref(inst_149273);
var state_149286__$1 = state_149286;
var statearr_149305_150927 = state_149286__$1;
(statearr_149305_150927[(2)] = inst_149276);

(statearr_149305_150927[(1)] = (10));


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
var statearr_149306 = [null,null,null,null,null,null,null,null,null,null];
(statearr_149306[(0)] = cljs$core$async$reduce_$_state_machine__39695__auto__);

(statearr_149306[(1)] = (1));

return statearr_149306;
});
var cljs$core$async$reduce_$_state_machine__39695__auto____1 = (function (state_149286){
while(true){
var ret_value__39696__auto__ = (function (){try{while(true){
var result__39697__auto__ = switch__39694__auto__(state_149286);
if(cljs.core.keyword_identical_QMARK_(result__39697__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39697__auto__;
}
break;
}
}catch (e149307){var ex__39698__auto__ = e149307;
var statearr_149308_150930 = state_149286;
(statearr_149308_150930[(2)] = ex__39698__auto__);


if(cljs.core.seq((state_149286[(4)]))){
var statearr_149309_150931 = state_149286;
(statearr_149309_150931[(1)] = cljs.core.first((state_149286[(4)])));

} else {
throw ex__39698__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__150932 = state_149286;
state_149286 = G__150932;
continue;
} else {
return ret_value__39696__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__39695__auto__ = function(state_149286){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__39695__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__39695__auto____1.call(this,state_149286);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__39695__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__39695__auto____0;
cljs$core$async$reduce_$_state_machine__39695__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__39695__auto____1;
return cljs$core$async$reduce_$_state_machine__39695__auto__;
})()
})();
var state__39771__auto__ = (function (){var statearr_149310 = f__39770__auto__();
(statearr_149310[(6)] = c__39769__auto__);

return statearr_149310;
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
var f__39770__auto__ = (function (){var switch__39694__auto__ = (function (state_149320){
var state_val_149321 = (state_149320[(1)]);
if((state_val_149321 === (1))){
var inst_149315 = cljs.core.async.reduce(f__$1,init,ch);
var state_149320__$1 = state_149320;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_149320__$1,(2),inst_149315);
} else {
if((state_val_149321 === (2))){
var inst_149317 = (state_149320[(2)]);
var inst_149318 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_149317) : f__$1.call(null,inst_149317));
var state_149320__$1 = state_149320;
return cljs.core.async.impl.ioc_helpers.return_chan(state_149320__$1,inst_149318);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__39695__auto__ = null;
var cljs$core$async$transduce_$_state_machine__39695__auto____0 = (function (){
var statearr_149326 = [null,null,null,null,null,null,null];
(statearr_149326[(0)] = cljs$core$async$transduce_$_state_machine__39695__auto__);

(statearr_149326[(1)] = (1));

return statearr_149326;
});
var cljs$core$async$transduce_$_state_machine__39695__auto____1 = (function (state_149320){
while(true){
var ret_value__39696__auto__ = (function (){try{while(true){
var result__39697__auto__ = switch__39694__auto__(state_149320);
if(cljs.core.keyword_identical_QMARK_(result__39697__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39697__auto__;
}
break;
}
}catch (e149327){var ex__39698__auto__ = e149327;
var statearr_149328_150933 = state_149320;
(statearr_149328_150933[(2)] = ex__39698__auto__);


if(cljs.core.seq((state_149320[(4)]))){
var statearr_149329_150934 = state_149320;
(statearr_149329_150934[(1)] = cljs.core.first((state_149320[(4)])));

} else {
throw ex__39698__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__150935 = state_149320;
state_149320 = G__150935;
continue;
} else {
return ret_value__39696__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__39695__auto__ = function(state_149320){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__39695__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__39695__auto____1.call(this,state_149320);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__39695__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__39695__auto____0;
cljs$core$async$transduce_$_state_machine__39695__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__39695__auto____1;
return cljs$core$async$transduce_$_state_machine__39695__auto__;
})()
})();
var state__39771__auto__ = (function (){var statearr_149330 = f__39770__auto__();
(statearr_149330[(6)] = c__39769__auto__);

return statearr_149330;
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
var G__149332 = arguments.length;
switch (G__149332) {
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
var f__39770__auto__ = (function (){var switch__39694__auto__ = (function (state_149357){
var state_val_149358 = (state_149357[(1)]);
if((state_val_149358 === (7))){
var inst_149339 = (state_149357[(2)]);
var state_149357__$1 = state_149357;
var statearr_149359_150937 = state_149357__$1;
(statearr_149359_150937[(2)] = inst_149339);

(statearr_149359_150937[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149358 === (1))){
var inst_149333 = cljs.core.seq(coll);
var inst_149334 = inst_149333;
var state_149357__$1 = (function (){var statearr_149360 = state_149357;
(statearr_149360[(7)] = inst_149334);

return statearr_149360;
})();
var statearr_149361_150938 = state_149357__$1;
(statearr_149361_150938[(2)] = null);

(statearr_149361_150938[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149358 === (4))){
var inst_149334 = (state_149357[(7)]);
var inst_149337 = cljs.core.first(inst_149334);
var state_149357__$1 = state_149357;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_149357__$1,(7),ch,inst_149337);
} else {
if((state_val_149358 === (13))){
var inst_149351 = (state_149357[(2)]);
var state_149357__$1 = state_149357;
var statearr_149362_150939 = state_149357__$1;
(statearr_149362_150939[(2)] = inst_149351);

(statearr_149362_150939[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149358 === (6))){
var inst_149342 = (state_149357[(2)]);
var state_149357__$1 = state_149357;
if(cljs.core.truth_(inst_149342)){
var statearr_149363_150940 = state_149357__$1;
(statearr_149363_150940[(1)] = (8));

} else {
var statearr_149364_150941 = state_149357__$1;
(statearr_149364_150941[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149358 === (3))){
var inst_149355 = (state_149357[(2)]);
var state_149357__$1 = state_149357;
return cljs.core.async.impl.ioc_helpers.return_chan(state_149357__$1,inst_149355);
} else {
if((state_val_149358 === (12))){
var state_149357__$1 = state_149357;
var statearr_149365_150942 = state_149357__$1;
(statearr_149365_150942[(2)] = null);

(statearr_149365_150942[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149358 === (2))){
var inst_149334 = (state_149357[(7)]);
var state_149357__$1 = state_149357;
if(cljs.core.truth_(inst_149334)){
var statearr_149366_150943 = state_149357__$1;
(statearr_149366_150943[(1)] = (4));

} else {
var statearr_149367_150944 = state_149357__$1;
(statearr_149367_150944[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149358 === (11))){
var inst_149348 = cljs.core.async.close_BANG_(ch);
var state_149357__$1 = state_149357;
var statearr_149368_150945 = state_149357__$1;
(statearr_149368_150945[(2)] = inst_149348);

(statearr_149368_150945[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149358 === (9))){
var state_149357__$1 = state_149357;
if(cljs.core.truth_(close_QMARK_)){
var statearr_149369_150946 = state_149357__$1;
(statearr_149369_150946[(1)] = (11));

} else {
var statearr_149370_150947 = state_149357__$1;
(statearr_149370_150947[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149358 === (5))){
var inst_149334 = (state_149357[(7)]);
var state_149357__$1 = state_149357;
var statearr_149371_150948 = state_149357__$1;
(statearr_149371_150948[(2)] = inst_149334);

(statearr_149371_150948[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149358 === (10))){
var inst_149353 = (state_149357[(2)]);
var state_149357__$1 = state_149357;
var statearr_149372_150949 = state_149357__$1;
(statearr_149372_150949[(2)] = inst_149353);

(statearr_149372_150949[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149358 === (8))){
var inst_149334 = (state_149357[(7)]);
var inst_149344 = cljs.core.next(inst_149334);
var inst_149334__$1 = inst_149344;
var state_149357__$1 = (function (){var statearr_149373 = state_149357;
(statearr_149373[(7)] = inst_149334__$1);

return statearr_149373;
})();
var statearr_149374_150950 = state_149357__$1;
(statearr_149374_150950[(2)] = null);

(statearr_149374_150950[(1)] = (2));


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
var statearr_149375 = [null,null,null,null,null,null,null,null];
(statearr_149375[(0)] = cljs$core$async$state_machine__39695__auto__);

(statearr_149375[(1)] = (1));

return statearr_149375;
});
var cljs$core$async$state_machine__39695__auto____1 = (function (state_149357){
while(true){
var ret_value__39696__auto__ = (function (){try{while(true){
var result__39697__auto__ = switch__39694__auto__(state_149357);
if(cljs.core.keyword_identical_QMARK_(result__39697__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39697__auto__;
}
break;
}
}catch (e149376){var ex__39698__auto__ = e149376;
var statearr_149377_150952 = state_149357;
(statearr_149377_150952[(2)] = ex__39698__auto__);


if(cljs.core.seq((state_149357[(4)]))){
var statearr_149378_150953 = state_149357;
(statearr_149378_150953[(1)] = cljs.core.first((state_149357[(4)])));

} else {
throw ex__39698__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__150954 = state_149357;
state_149357 = G__150954;
continue;
} else {
return ret_value__39696__auto__;
}
break;
}
});
cljs$core$async$state_machine__39695__auto__ = function(state_149357){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39695__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39695__auto____1.call(this,state_149357);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39695__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39695__auto____0;
cljs$core$async$state_machine__39695__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39695__auto____1;
return cljs$core$async$state_machine__39695__auto__;
})()
})();
var state__39771__auto__ = (function (){var statearr_149379 = f__39770__auto__();
(statearr_149379[(6)] = c__39769__auto__);

return statearr_149379;
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
var G__149381 = arguments.length;
switch (G__149381) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_150958 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_150958(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_150959 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_150959(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_150960 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_150960(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_150961 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_150961(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async149399 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async149399 = (function (ch,cs,meta149400){
this.ch = ch;
this.cs = cs;
this.meta149400 = meta149400;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async149399.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_149401,meta149400__$1){
var self__ = this;
var _149401__$1 = this;
return (new cljs.core.async.t_cljs$core$async149399(self__.ch,self__.cs,meta149400__$1));
}));

(cljs.core.async.t_cljs$core$async149399.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_149401){
var self__ = this;
var _149401__$1 = this;
return self__.meta149400;
}));

(cljs.core.async.t_cljs$core$async149399.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async149399.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async149399.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async149399.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async149399.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async149399.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async149399.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta149400","meta149400",-1354623293,null)], null);
}));

(cljs.core.async.t_cljs$core$async149399.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async149399.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async149399");

(cljs.core.async.t_cljs$core$async149399.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async149399");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async149399.
 */
cljs.core.async.__GT_t_cljs$core$async149399 = (function cljs$core$async$mult_$___GT_t_cljs$core$async149399(ch__$1,cs__$1,meta149400){
return (new cljs.core.async.t_cljs$core$async149399(ch__$1,cs__$1,meta149400));
});

}

return (new cljs.core.async.t_cljs$core$async149399(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__39769__auto___150962 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__39770__auto__ = (function (){var switch__39694__auto__ = (function (state_149551){
var state_val_149552 = (state_149551[(1)]);
if((state_val_149552 === (7))){
var inst_149547 = (state_149551[(2)]);
var state_149551__$1 = state_149551;
var statearr_149553_150963 = state_149551__$1;
(statearr_149553_150963[(2)] = inst_149547);

(statearr_149553_150963[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149552 === (20))){
var inst_149451 = (state_149551[(7)]);
var inst_149463 = cljs.core.first(inst_149451);
var inst_149464 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_149463,(0),null);
var inst_149465 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_149463,(1),null);
var state_149551__$1 = (function (){var statearr_149554 = state_149551;
(statearr_149554[(8)] = inst_149464);

return statearr_149554;
})();
if(cljs.core.truth_(inst_149465)){
var statearr_149556_150964 = state_149551__$1;
(statearr_149556_150964[(1)] = (22));

} else {
var statearr_149557_150965 = state_149551__$1;
(statearr_149557_150965[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149552 === (27))){
var inst_149420 = (state_149551[(9)]);
var inst_149493 = (state_149551[(10)]);
var inst_149495 = (state_149551[(11)]);
var inst_149501 = (state_149551[(12)]);
var inst_149501__$1 = cljs.core._nth(inst_149493,inst_149495);
var inst_149502 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_149501__$1,inst_149420,done);
var state_149551__$1 = (function (){var statearr_149558 = state_149551;
(statearr_149558[(12)] = inst_149501__$1);

return statearr_149558;
})();
if(cljs.core.truth_(inst_149502)){
var statearr_149559_150966 = state_149551__$1;
(statearr_149559_150966[(1)] = (30));

} else {
var statearr_149560_150967 = state_149551__$1;
(statearr_149560_150967[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149552 === (1))){
var state_149551__$1 = state_149551;
var statearr_149561_150968 = state_149551__$1;
(statearr_149561_150968[(2)] = null);

(statearr_149561_150968[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149552 === (24))){
var inst_149451 = (state_149551[(7)]);
var inst_149470 = (state_149551[(2)]);
var inst_149471 = cljs.core.next(inst_149451);
var inst_149429 = inst_149471;
var inst_149430 = null;
var inst_149431 = (0);
var inst_149432 = (0);
var state_149551__$1 = (function (){var statearr_149562 = state_149551;
(statearr_149562[(13)] = inst_149429);

(statearr_149562[(14)] = inst_149430);

(statearr_149562[(15)] = inst_149431);

(statearr_149562[(16)] = inst_149470);

(statearr_149562[(17)] = inst_149432);

return statearr_149562;
})();
var statearr_149563_150969 = state_149551__$1;
(statearr_149563_150969[(2)] = null);

(statearr_149563_150969[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149552 === (39))){
var state_149551__$1 = state_149551;
var statearr_149567_150970 = state_149551__$1;
(statearr_149567_150970[(2)] = null);

(statearr_149567_150970[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149552 === (4))){
var inst_149420 = (state_149551[(9)]);
var inst_149420__$1 = (state_149551[(2)]);
var inst_149421 = (inst_149420__$1 == null);
var state_149551__$1 = (function (){var statearr_149568 = state_149551;
(statearr_149568[(9)] = inst_149420__$1);

return statearr_149568;
})();
if(cljs.core.truth_(inst_149421)){
var statearr_149569_150971 = state_149551__$1;
(statearr_149569_150971[(1)] = (5));

} else {
var statearr_149570_150972 = state_149551__$1;
(statearr_149570_150972[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149552 === (15))){
var inst_149429 = (state_149551[(13)]);
var inst_149430 = (state_149551[(14)]);
var inst_149431 = (state_149551[(15)]);
var inst_149432 = (state_149551[(17)]);
var inst_149447 = (state_149551[(2)]);
var inst_149448 = (inst_149432 + (1));
var tmp149564 = inst_149429;
var tmp149565 = inst_149430;
var tmp149566 = inst_149431;
var inst_149429__$1 = tmp149564;
var inst_149430__$1 = tmp149565;
var inst_149431__$1 = tmp149566;
var inst_149432__$1 = inst_149448;
var state_149551__$1 = (function (){var statearr_149571 = state_149551;
(statearr_149571[(13)] = inst_149429__$1);

(statearr_149571[(14)] = inst_149430__$1);

(statearr_149571[(18)] = inst_149447);

(statearr_149571[(15)] = inst_149431__$1);

(statearr_149571[(17)] = inst_149432__$1);

return statearr_149571;
})();
var statearr_149572_150974 = state_149551__$1;
(statearr_149572_150974[(2)] = null);

(statearr_149572_150974[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149552 === (21))){
var inst_149474 = (state_149551[(2)]);
var state_149551__$1 = state_149551;
var statearr_149576_150975 = state_149551__$1;
(statearr_149576_150975[(2)] = inst_149474);

(statearr_149576_150975[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149552 === (31))){
var inst_149501 = (state_149551[(12)]);
var inst_149505 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_149501);
var state_149551__$1 = state_149551;
var statearr_149577_150976 = state_149551__$1;
(statearr_149577_150976[(2)] = inst_149505);

(statearr_149577_150976[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149552 === (32))){
var inst_149494 = (state_149551[(19)]);
var inst_149493 = (state_149551[(10)]);
var inst_149495 = (state_149551[(11)]);
var inst_149492 = (state_149551[(20)]);
var inst_149507 = (state_149551[(2)]);
var inst_149508 = (inst_149495 + (1));
var tmp149573 = inst_149494;
var tmp149574 = inst_149493;
var tmp149575 = inst_149492;
var inst_149492__$1 = tmp149575;
var inst_149493__$1 = tmp149574;
var inst_149494__$1 = tmp149573;
var inst_149495__$1 = inst_149508;
var state_149551__$1 = (function (){var statearr_149578 = state_149551;
(statearr_149578[(19)] = inst_149494__$1);

(statearr_149578[(10)] = inst_149493__$1);

(statearr_149578[(11)] = inst_149495__$1);

(statearr_149578[(20)] = inst_149492__$1);

(statearr_149578[(21)] = inst_149507);

return statearr_149578;
})();
var statearr_149579_150977 = state_149551__$1;
(statearr_149579_150977[(2)] = null);

(statearr_149579_150977[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149552 === (40))){
var inst_149520 = (state_149551[(22)]);
var inst_149524 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_149520);
var state_149551__$1 = state_149551;
var statearr_149580_150978 = state_149551__$1;
(statearr_149580_150978[(2)] = inst_149524);

(statearr_149580_150978[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149552 === (33))){
var inst_149511 = (state_149551[(23)]);
var inst_149513 = cljs.core.chunked_seq_QMARK_(inst_149511);
var state_149551__$1 = state_149551;
if(inst_149513){
var statearr_149581_150979 = state_149551__$1;
(statearr_149581_150979[(1)] = (36));

} else {
var statearr_149582_150980 = state_149551__$1;
(statearr_149582_150980[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149552 === (13))){
var inst_149441 = (state_149551[(24)]);
var inst_149444 = cljs.core.async.close_BANG_(inst_149441);
var state_149551__$1 = state_149551;
var statearr_149583_150981 = state_149551__$1;
(statearr_149583_150981[(2)] = inst_149444);

(statearr_149583_150981[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149552 === (22))){
var inst_149464 = (state_149551[(8)]);
var inst_149467 = cljs.core.async.close_BANG_(inst_149464);
var state_149551__$1 = state_149551;
var statearr_149584_150982 = state_149551__$1;
(statearr_149584_150982[(2)] = inst_149467);

(statearr_149584_150982[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149552 === (36))){
var inst_149511 = (state_149551[(23)]);
var inst_149515 = cljs.core.chunk_first(inst_149511);
var inst_149516 = cljs.core.chunk_rest(inst_149511);
var inst_149517 = cljs.core.count(inst_149515);
var inst_149492 = inst_149516;
var inst_149493 = inst_149515;
var inst_149494 = inst_149517;
var inst_149495 = (0);
var state_149551__$1 = (function (){var statearr_149585 = state_149551;
(statearr_149585[(19)] = inst_149494);

(statearr_149585[(10)] = inst_149493);

(statearr_149585[(11)] = inst_149495);

(statearr_149585[(20)] = inst_149492);

return statearr_149585;
})();
var statearr_149586_150983 = state_149551__$1;
(statearr_149586_150983[(2)] = null);

(statearr_149586_150983[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149552 === (41))){
var inst_149511 = (state_149551[(23)]);
var inst_149526 = (state_149551[(2)]);
var inst_149527 = cljs.core.next(inst_149511);
var inst_149492 = inst_149527;
var inst_149493 = null;
var inst_149494 = (0);
var inst_149495 = (0);
var state_149551__$1 = (function (){var statearr_149587 = state_149551;
(statearr_149587[(19)] = inst_149494);

(statearr_149587[(25)] = inst_149526);

(statearr_149587[(10)] = inst_149493);

(statearr_149587[(11)] = inst_149495);

(statearr_149587[(20)] = inst_149492);

return statearr_149587;
})();
var statearr_149588_150984 = state_149551__$1;
(statearr_149588_150984[(2)] = null);

(statearr_149588_150984[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149552 === (43))){
var state_149551__$1 = state_149551;
var statearr_149589_150985 = state_149551__$1;
(statearr_149589_150985[(2)] = null);

(statearr_149589_150985[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149552 === (29))){
var inst_149535 = (state_149551[(2)]);
var state_149551__$1 = state_149551;
var statearr_149590_150986 = state_149551__$1;
(statearr_149590_150986[(2)] = inst_149535);

(statearr_149590_150986[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149552 === (44))){
var inst_149544 = (state_149551[(2)]);
var state_149551__$1 = (function (){var statearr_149591 = state_149551;
(statearr_149591[(26)] = inst_149544);

return statearr_149591;
})();
var statearr_149592_150987 = state_149551__$1;
(statearr_149592_150987[(2)] = null);

(statearr_149592_150987[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149552 === (6))){
var inst_149484 = (state_149551[(27)]);
var inst_149483 = cljs.core.deref(cs);
var inst_149484__$1 = cljs.core.keys(inst_149483);
var inst_149485 = cljs.core.count(inst_149484__$1);
var inst_149486 = cljs.core.reset_BANG_(dctr,inst_149485);
var inst_149491 = cljs.core.seq(inst_149484__$1);
var inst_149492 = inst_149491;
var inst_149493 = null;
var inst_149494 = (0);
var inst_149495 = (0);
var state_149551__$1 = (function (){var statearr_149593 = state_149551;
(statearr_149593[(19)] = inst_149494);

(statearr_149593[(27)] = inst_149484__$1);

(statearr_149593[(10)] = inst_149493);

(statearr_149593[(11)] = inst_149495);

(statearr_149593[(20)] = inst_149492);

(statearr_149593[(28)] = inst_149486);

return statearr_149593;
})();
var statearr_149594_150988 = state_149551__$1;
(statearr_149594_150988[(2)] = null);

(statearr_149594_150988[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149552 === (28))){
var inst_149511 = (state_149551[(23)]);
var inst_149492 = (state_149551[(20)]);
var inst_149511__$1 = cljs.core.seq(inst_149492);
var state_149551__$1 = (function (){var statearr_149597 = state_149551;
(statearr_149597[(23)] = inst_149511__$1);

return statearr_149597;
})();
if(inst_149511__$1){
var statearr_149598_150989 = state_149551__$1;
(statearr_149598_150989[(1)] = (33));

} else {
var statearr_149599_150990 = state_149551__$1;
(statearr_149599_150990[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149552 === (25))){
var inst_149494 = (state_149551[(19)]);
var inst_149495 = (state_149551[(11)]);
var inst_149498 = (inst_149495 < inst_149494);
var inst_149499 = inst_149498;
var state_149551__$1 = state_149551;
if(cljs.core.truth_(inst_149499)){
var statearr_149600_150991 = state_149551__$1;
(statearr_149600_150991[(1)] = (27));

} else {
var statearr_149601_150992 = state_149551__$1;
(statearr_149601_150992[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149552 === (34))){
var state_149551__$1 = state_149551;
var statearr_149602_150993 = state_149551__$1;
(statearr_149602_150993[(2)] = null);

(statearr_149602_150993[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149552 === (17))){
var state_149551__$1 = state_149551;
var statearr_149603_150994 = state_149551__$1;
(statearr_149603_150994[(2)] = null);

(statearr_149603_150994[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149552 === (3))){
var inst_149549 = (state_149551[(2)]);
var state_149551__$1 = state_149551;
return cljs.core.async.impl.ioc_helpers.return_chan(state_149551__$1,inst_149549);
} else {
if((state_val_149552 === (12))){
var inst_149479 = (state_149551[(2)]);
var state_149551__$1 = state_149551;
var statearr_149608_150995 = state_149551__$1;
(statearr_149608_150995[(2)] = inst_149479);

(statearr_149608_150995[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149552 === (2))){
var state_149551__$1 = state_149551;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_149551__$1,(4),ch);
} else {
if((state_val_149552 === (23))){
var state_149551__$1 = state_149551;
var statearr_149609_150996 = state_149551__$1;
(statearr_149609_150996[(2)] = null);

(statearr_149609_150996[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149552 === (35))){
var inst_149533 = (state_149551[(2)]);
var state_149551__$1 = state_149551;
var statearr_149610_150997 = state_149551__$1;
(statearr_149610_150997[(2)] = inst_149533);

(statearr_149610_150997[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149552 === (19))){
var inst_149451 = (state_149551[(7)]);
var inst_149455 = cljs.core.chunk_first(inst_149451);
var inst_149456 = cljs.core.chunk_rest(inst_149451);
var inst_149457 = cljs.core.count(inst_149455);
var inst_149429 = inst_149456;
var inst_149430 = inst_149455;
var inst_149431 = inst_149457;
var inst_149432 = (0);
var state_149551__$1 = (function (){var statearr_149611 = state_149551;
(statearr_149611[(13)] = inst_149429);

(statearr_149611[(14)] = inst_149430);

(statearr_149611[(15)] = inst_149431);

(statearr_149611[(17)] = inst_149432);

return statearr_149611;
})();
var statearr_149612_150998 = state_149551__$1;
(statearr_149612_150998[(2)] = null);

(statearr_149612_150998[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149552 === (11))){
var inst_149429 = (state_149551[(13)]);
var inst_149451 = (state_149551[(7)]);
var inst_149451__$1 = cljs.core.seq(inst_149429);
var state_149551__$1 = (function (){var statearr_149613 = state_149551;
(statearr_149613[(7)] = inst_149451__$1);

return statearr_149613;
})();
if(inst_149451__$1){
var statearr_149618_150999 = state_149551__$1;
(statearr_149618_150999[(1)] = (16));

} else {
var statearr_149619_151000 = state_149551__$1;
(statearr_149619_151000[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149552 === (9))){
var inst_149481 = (state_149551[(2)]);
var state_149551__$1 = state_149551;
var statearr_149620_151001 = state_149551__$1;
(statearr_149620_151001[(2)] = inst_149481);

(statearr_149620_151001[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149552 === (5))){
var inst_149427 = cljs.core.deref(cs);
var inst_149428 = cljs.core.seq(inst_149427);
var inst_149429 = inst_149428;
var inst_149430 = null;
var inst_149431 = (0);
var inst_149432 = (0);
var state_149551__$1 = (function (){var statearr_149621 = state_149551;
(statearr_149621[(13)] = inst_149429);

(statearr_149621[(14)] = inst_149430);

(statearr_149621[(15)] = inst_149431);

(statearr_149621[(17)] = inst_149432);

return statearr_149621;
})();
var statearr_149622_151002 = state_149551__$1;
(statearr_149622_151002[(2)] = null);

(statearr_149622_151002[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149552 === (14))){
var state_149551__$1 = state_149551;
var statearr_149623_151003 = state_149551__$1;
(statearr_149623_151003[(2)] = null);

(statearr_149623_151003[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149552 === (45))){
var inst_149541 = (state_149551[(2)]);
var state_149551__$1 = state_149551;
var statearr_149624_151004 = state_149551__$1;
(statearr_149624_151004[(2)] = inst_149541);

(statearr_149624_151004[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149552 === (26))){
var inst_149484 = (state_149551[(27)]);
var inst_149537 = (state_149551[(2)]);
var inst_149538 = cljs.core.seq(inst_149484);
var state_149551__$1 = (function (){var statearr_149625 = state_149551;
(statearr_149625[(29)] = inst_149537);

return statearr_149625;
})();
if(inst_149538){
var statearr_149626_151005 = state_149551__$1;
(statearr_149626_151005[(1)] = (42));

} else {
var statearr_149627_151006 = state_149551__$1;
(statearr_149627_151006[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149552 === (16))){
var inst_149451 = (state_149551[(7)]);
var inst_149453 = cljs.core.chunked_seq_QMARK_(inst_149451);
var state_149551__$1 = state_149551;
if(inst_149453){
var statearr_149628_151007 = state_149551__$1;
(statearr_149628_151007[(1)] = (19));

} else {
var statearr_149629_151008 = state_149551__$1;
(statearr_149629_151008[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149552 === (38))){
var inst_149530 = (state_149551[(2)]);
var state_149551__$1 = state_149551;
var statearr_149630_151009 = state_149551__$1;
(statearr_149630_151009[(2)] = inst_149530);

(statearr_149630_151009[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149552 === (30))){
var state_149551__$1 = state_149551;
var statearr_149632_151010 = state_149551__$1;
(statearr_149632_151010[(2)] = null);

(statearr_149632_151010[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149552 === (10))){
var inst_149430 = (state_149551[(14)]);
var inst_149432 = (state_149551[(17)]);
var inst_149440 = cljs.core._nth(inst_149430,inst_149432);
var inst_149441 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_149440,(0),null);
var inst_149442 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_149440,(1),null);
var state_149551__$1 = (function (){var statearr_149633 = state_149551;
(statearr_149633[(24)] = inst_149441);

return statearr_149633;
})();
if(cljs.core.truth_(inst_149442)){
var statearr_149634_151011 = state_149551__$1;
(statearr_149634_151011[(1)] = (13));

} else {
var statearr_149635_151012 = state_149551__$1;
(statearr_149635_151012[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149552 === (18))){
var inst_149477 = (state_149551[(2)]);
var state_149551__$1 = state_149551;
var statearr_149637_151013 = state_149551__$1;
(statearr_149637_151013[(2)] = inst_149477);

(statearr_149637_151013[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149552 === (42))){
var state_149551__$1 = state_149551;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_149551__$1,(45),dchan);
} else {
if((state_val_149552 === (37))){
var inst_149511 = (state_149551[(23)]);
var inst_149420 = (state_149551[(9)]);
var inst_149520 = (state_149551[(22)]);
var inst_149520__$1 = cljs.core.first(inst_149511);
var inst_149521 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_149520__$1,inst_149420,done);
var state_149551__$1 = (function (){var statearr_149639 = state_149551;
(statearr_149639[(22)] = inst_149520__$1);

return statearr_149639;
})();
if(cljs.core.truth_(inst_149521)){
var statearr_149640_151014 = state_149551__$1;
(statearr_149640_151014[(1)] = (39));

} else {
var statearr_149641_151015 = state_149551__$1;
(statearr_149641_151015[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149552 === (8))){
var inst_149431 = (state_149551[(15)]);
var inst_149432 = (state_149551[(17)]);
var inst_149434 = (inst_149432 < inst_149431);
var inst_149435 = inst_149434;
var state_149551__$1 = state_149551;
if(cljs.core.truth_(inst_149435)){
var statearr_149642_151016 = state_149551__$1;
(statearr_149642_151016[(1)] = (10));

} else {
var statearr_149643_151017 = state_149551__$1;
(statearr_149643_151017[(1)] = (11));

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
var statearr_149644 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_149644[(0)] = cljs$core$async$mult_$_state_machine__39695__auto__);

(statearr_149644[(1)] = (1));

return statearr_149644;
});
var cljs$core$async$mult_$_state_machine__39695__auto____1 = (function (state_149551){
while(true){
var ret_value__39696__auto__ = (function (){try{while(true){
var result__39697__auto__ = switch__39694__auto__(state_149551);
if(cljs.core.keyword_identical_QMARK_(result__39697__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39697__auto__;
}
break;
}
}catch (e149645){var ex__39698__auto__ = e149645;
var statearr_149650_151018 = state_149551;
(statearr_149650_151018[(2)] = ex__39698__auto__);


if(cljs.core.seq((state_149551[(4)]))){
var statearr_149651_151019 = state_149551;
(statearr_149651_151019[(1)] = cljs.core.first((state_149551[(4)])));

} else {
throw ex__39698__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__151020 = state_149551;
state_149551 = G__151020;
continue;
} else {
return ret_value__39696__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__39695__auto__ = function(state_149551){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__39695__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__39695__auto____1.call(this,state_149551);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__39695__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__39695__auto____0;
cljs$core$async$mult_$_state_machine__39695__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__39695__auto____1;
return cljs$core$async$mult_$_state_machine__39695__auto__;
})()
})();
var state__39771__auto__ = (function (){var statearr_149652 = f__39770__auto__();
(statearr_149652[(6)] = c__39769__auto___150962);

return statearr_149652;
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
var G__149654 = arguments.length;
switch (G__149654) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_151022 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_151022(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_151023 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_151023(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_151024 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_151024(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_151025 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_151025(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_151026 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_151026(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___151027 = arguments.length;
var i__4830__auto___151028 = (0);
while(true){
if((i__4830__auto___151028 < len__4829__auto___151027)){
args__4835__auto__.push((arguments[i__4830__auto___151028]));

var G__151029 = (i__4830__auto___151028 + (1));
i__4830__auto___151028 = G__151029;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((3) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4836__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__149670){
var map__149671 = p__149670;
var map__149671__$1 = cljs.core.__destructure_map(map__149671);
var opts = map__149671__$1;
var statearr_149672_151030 = state;
(statearr_149672_151030[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_149673_151031 = state;
(statearr_149673_151031[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_149674_151032 = state;
(statearr_149674_151032[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq149664){
var G__149665 = cljs.core.first(seq149664);
var seq149664__$1 = cljs.core.next(seq149664);
var G__149666 = cljs.core.first(seq149664__$1);
var seq149664__$2 = cljs.core.next(seq149664__$1);
var G__149667 = cljs.core.first(seq149664__$2);
var seq149664__$3 = cljs.core.next(seq149664__$2);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__149665,G__149666,G__149667,seq149664__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async149677 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async149677 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta149678){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta149678 = meta149678;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async149677.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_149679,meta149678__$1){
var self__ = this;
var _149679__$1 = this;
return (new cljs.core.async.t_cljs$core$async149677(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta149678__$1));
}));

(cljs.core.async.t_cljs$core$async149677.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_149679){
var self__ = this;
var _149679__$1 = this;
return self__.meta149678;
}));

(cljs.core.async.t_cljs$core$async149677.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async149677.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async149677.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async149677.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async149677.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async149677.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async149677.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async149677.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async149677.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta149678","meta149678",-1538988003,null)], null);
}));

(cljs.core.async.t_cljs$core$async149677.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async149677.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async149677");

(cljs.core.async.t_cljs$core$async149677.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async149677");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async149677.
 */
cljs.core.async.__GT_t_cljs$core$async149677 = (function cljs$core$async$mix_$___GT_t_cljs$core$async149677(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta149678){
return (new cljs.core.async.t_cljs$core$async149677(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta149678));
});

}

return (new cljs.core.async.t_cljs$core$async149677(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__39769__auto___151034 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__39770__auto__ = (function (){var switch__39694__auto__ = (function (state_149747){
var state_val_149748 = (state_149747[(1)]);
if((state_val_149748 === (7))){
var inst_149707 = (state_149747[(2)]);
var state_149747__$1 = state_149747;
if(cljs.core.truth_(inst_149707)){
var statearr_149749_151036 = state_149747__$1;
(statearr_149749_151036[(1)] = (8));

} else {
var statearr_149750_151037 = state_149747__$1;
(statearr_149750_151037[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149748 === (20))){
var inst_149700 = (state_149747[(7)]);
var state_149747__$1 = state_149747;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_149747__$1,(23),out,inst_149700);
} else {
if((state_val_149748 === (1))){
var inst_149683 = calc_state();
var inst_149684 = cljs.core.__destructure_map(inst_149683);
var inst_149685 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_149684,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_149686 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_149684,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_149687 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_149684,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_149688 = inst_149683;
var state_149747__$1 = (function (){var statearr_149751 = state_149747;
(statearr_149751[(8)] = inst_149686);

(statearr_149751[(9)] = inst_149685);

(statearr_149751[(10)] = inst_149687);

(statearr_149751[(11)] = inst_149688);

return statearr_149751;
})();
var statearr_149752_151038 = state_149747__$1;
(statearr_149752_151038[(2)] = null);

(statearr_149752_151038[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149748 === (24))){
var inst_149691 = (state_149747[(12)]);
var inst_149688 = inst_149691;
var state_149747__$1 = (function (){var statearr_149753 = state_149747;
(statearr_149753[(11)] = inst_149688);

return statearr_149753;
})();
var statearr_149755_151039 = state_149747__$1;
(statearr_149755_151039[(2)] = null);

(statearr_149755_151039[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149748 === (4))){
var inst_149700 = (state_149747[(7)]);
var inst_149702 = (state_149747[(13)]);
var inst_149699 = (state_149747[(2)]);
var inst_149700__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_149699,(0),null);
var inst_149701 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_149699,(1),null);
var inst_149702__$1 = (inst_149700__$1 == null);
var state_149747__$1 = (function (){var statearr_149756 = state_149747;
(statearr_149756[(7)] = inst_149700__$1);

(statearr_149756[(13)] = inst_149702__$1);

(statearr_149756[(14)] = inst_149701);

return statearr_149756;
})();
if(cljs.core.truth_(inst_149702__$1)){
var statearr_149757_151041 = state_149747__$1;
(statearr_149757_151041[(1)] = (5));

} else {
var statearr_149758_151043 = state_149747__$1;
(statearr_149758_151043[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149748 === (15))){
var inst_149692 = (state_149747[(15)]);
var inst_149721 = (state_149747[(16)]);
var inst_149721__$1 = cljs.core.empty_QMARK_(inst_149692);
var state_149747__$1 = (function (){var statearr_149759 = state_149747;
(statearr_149759[(16)] = inst_149721__$1);

return statearr_149759;
})();
if(inst_149721__$1){
var statearr_149760_151045 = state_149747__$1;
(statearr_149760_151045[(1)] = (17));

} else {
var statearr_149761_151046 = state_149747__$1;
(statearr_149761_151046[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149748 === (21))){
var inst_149691 = (state_149747[(12)]);
var inst_149688 = inst_149691;
var state_149747__$1 = (function (){var statearr_149762 = state_149747;
(statearr_149762[(11)] = inst_149688);

return statearr_149762;
})();
var statearr_149765_151047 = state_149747__$1;
(statearr_149765_151047[(2)] = null);

(statearr_149765_151047[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149748 === (13))){
var inst_149714 = (state_149747[(2)]);
var inst_149715 = calc_state();
var inst_149688 = inst_149715;
var state_149747__$1 = (function (){var statearr_149767 = state_149747;
(statearr_149767[(17)] = inst_149714);

(statearr_149767[(11)] = inst_149688);

return statearr_149767;
})();
var statearr_149768_151048 = state_149747__$1;
(statearr_149768_151048[(2)] = null);

(statearr_149768_151048[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149748 === (22))){
var inst_149741 = (state_149747[(2)]);
var state_149747__$1 = state_149747;
var statearr_149769_151049 = state_149747__$1;
(statearr_149769_151049[(2)] = inst_149741);

(statearr_149769_151049[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149748 === (6))){
var inst_149701 = (state_149747[(14)]);
var inst_149705 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_149701,change);
var state_149747__$1 = state_149747;
var statearr_149773_151050 = state_149747__$1;
(statearr_149773_151050[(2)] = inst_149705);

(statearr_149773_151050[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149748 === (25))){
var state_149747__$1 = state_149747;
var statearr_149774_151051 = state_149747__$1;
(statearr_149774_151051[(2)] = null);

(statearr_149774_151051[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149748 === (17))){
var inst_149693 = (state_149747[(18)]);
var inst_149701 = (state_149747[(14)]);
var inst_149723 = (inst_149693.cljs$core$IFn$_invoke$arity$1 ? inst_149693.cljs$core$IFn$_invoke$arity$1(inst_149701) : inst_149693.call(null,inst_149701));
var inst_149724 = cljs.core.not(inst_149723);
var state_149747__$1 = state_149747;
var statearr_149775_151052 = state_149747__$1;
(statearr_149775_151052[(2)] = inst_149724);

(statearr_149775_151052[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149748 === (3))){
var inst_149745 = (state_149747[(2)]);
var state_149747__$1 = state_149747;
return cljs.core.async.impl.ioc_helpers.return_chan(state_149747__$1,inst_149745);
} else {
if((state_val_149748 === (12))){
var state_149747__$1 = state_149747;
var statearr_149776_151053 = state_149747__$1;
(statearr_149776_151053[(2)] = null);

(statearr_149776_151053[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149748 === (2))){
var inst_149688 = (state_149747[(11)]);
var inst_149691 = (state_149747[(12)]);
var inst_149691__$1 = cljs.core.__destructure_map(inst_149688);
var inst_149692 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_149691__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_149693 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_149691__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_149694 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_149691__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_149747__$1 = (function (){var statearr_149777 = state_149747;
(statearr_149777[(15)] = inst_149692);

(statearr_149777[(18)] = inst_149693);

(statearr_149777[(12)] = inst_149691__$1);

return statearr_149777;
})();
return cljs.core.async.ioc_alts_BANG_(state_149747__$1,(4),inst_149694);
} else {
if((state_val_149748 === (23))){
var inst_149732 = (state_149747[(2)]);
var state_149747__$1 = state_149747;
if(cljs.core.truth_(inst_149732)){
var statearr_149779_151054 = state_149747__$1;
(statearr_149779_151054[(1)] = (24));

} else {
var statearr_149780_151055 = state_149747__$1;
(statearr_149780_151055[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149748 === (19))){
var inst_149727 = (state_149747[(2)]);
var state_149747__$1 = state_149747;
var statearr_149781_151056 = state_149747__$1;
(statearr_149781_151056[(2)] = inst_149727);

(statearr_149781_151056[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149748 === (11))){
var inst_149701 = (state_149747[(14)]);
var inst_149711 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_149701);
var state_149747__$1 = state_149747;
var statearr_149787_151057 = state_149747__$1;
(statearr_149787_151057[(2)] = inst_149711);

(statearr_149787_151057[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149748 === (9))){
var inst_149718 = (state_149747[(19)]);
var inst_149692 = (state_149747[(15)]);
var inst_149701 = (state_149747[(14)]);
var inst_149718__$1 = (inst_149692.cljs$core$IFn$_invoke$arity$1 ? inst_149692.cljs$core$IFn$_invoke$arity$1(inst_149701) : inst_149692.call(null,inst_149701));
var state_149747__$1 = (function (){var statearr_149788 = state_149747;
(statearr_149788[(19)] = inst_149718__$1);

return statearr_149788;
})();
if(cljs.core.truth_(inst_149718__$1)){
var statearr_149789_151058 = state_149747__$1;
(statearr_149789_151058[(1)] = (14));

} else {
var statearr_149790_151059 = state_149747__$1;
(statearr_149790_151059[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149748 === (5))){
var inst_149702 = (state_149747[(13)]);
var state_149747__$1 = state_149747;
var statearr_149791_151060 = state_149747__$1;
(statearr_149791_151060[(2)] = inst_149702);

(statearr_149791_151060[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149748 === (14))){
var inst_149718 = (state_149747[(19)]);
var state_149747__$1 = state_149747;
var statearr_149794_151061 = state_149747__$1;
(statearr_149794_151061[(2)] = inst_149718);

(statearr_149794_151061[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149748 === (26))){
var inst_149737 = (state_149747[(2)]);
var state_149747__$1 = state_149747;
var statearr_149795_151062 = state_149747__$1;
(statearr_149795_151062[(2)] = inst_149737);

(statearr_149795_151062[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149748 === (16))){
var inst_149729 = (state_149747[(2)]);
var state_149747__$1 = state_149747;
if(cljs.core.truth_(inst_149729)){
var statearr_149796_151063 = state_149747__$1;
(statearr_149796_151063[(1)] = (20));

} else {
var statearr_149797_151064 = state_149747__$1;
(statearr_149797_151064[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149748 === (10))){
var inst_149743 = (state_149747[(2)]);
var state_149747__$1 = state_149747;
var statearr_149798_151065 = state_149747__$1;
(statearr_149798_151065[(2)] = inst_149743);

(statearr_149798_151065[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149748 === (18))){
var inst_149721 = (state_149747[(16)]);
var state_149747__$1 = state_149747;
var statearr_149799_151066 = state_149747__$1;
(statearr_149799_151066[(2)] = inst_149721);

(statearr_149799_151066[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149748 === (8))){
var inst_149700 = (state_149747[(7)]);
var inst_149709 = (inst_149700 == null);
var state_149747__$1 = state_149747;
if(cljs.core.truth_(inst_149709)){
var statearr_149800_151067 = state_149747__$1;
(statearr_149800_151067[(1)] = (11));

} else {
var statearr_149801_151068 = state_149747__$1;
(statearr_149801_151068[(1)] = (12));

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
var statearr_149804 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_149804[(0)] = cljs$core$async$mix_$_state_machine__39695__auto__);

(statearr_149804[(1)] = (1));

return statearr_149804;
});
var cljs$core$async$mix_$_state_machine__39695__auto____1 = (function (state_149747){
while(true){
var ret_value__39696__auto__ = (function (){try{while(true){
var result__39697__auto__ = switch__39694__auto__(state_149747);
if(cljs.core.keyword_identical_QMARK_(result__39697__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39697__auto__;
}
break;
}
}catch (e149806){var ex__39698__auto__ = e149806;
var statearr_149807_151069 = state_149747;
(statearr_149807_151069[(2)] = ex__39698__auto__);


if(cljs.core.seq((state_149747[(4)]))){
var statearr_149809_151070 = state_149747;
(statearr_149809_151070[(1)] = cljs.core.first((state_149747[(4)])));

} else {
throw ex__39698__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__151071 = state_149747;
state_149747 = G__151071;
continue;
} else {
return ret_value__39696__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__39695__auto__ = function(state_149747){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__39695__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__39695__auto____1.call(this,state_149747);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__39695__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__39695__auto____0;
cljs$core$async$mix_$_state_machine__39695__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__39695__auto____1;
return cljs$core$async$mix_$_state_machine__39695__auto__;
})()
})();
var state__39771__auto__ = (function (){var statearr_149813 = f__39770__auto__();
(statearr_149813[(6)] = c__39769__auto___151034);

return statearr_149813;
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

var cljs$core$async$Pub$sub_STAR_$dyn_151072 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_151072(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_151073 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_151073(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_151074 = (function() {
var G__151075 = null;
var G__151075__1 = (function (p){
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
var G__151075__2 = (function (p,v){
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
G__151075 = function(p,v){
switch(arguments.length){
case 1:
return G__151075__1.call(this,p);
case 2:
return G__151075__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__151075.cljs$core$IFn$_invoke$arity$1 = G__151075__1;
G__151075.cljs$core$IFn$_invoke$arity$2 = G__151075__2;
return G__151075;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__149823 = arguments.length;
switch (G__149823) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_151074(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_151074(p,v);
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
var G__149860 = arguments.length;
switch (G__149860) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__149858_SHARP_){
if(cljs.core.truth_((p1__149858_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__149858_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__149858_SHARP_.call(null,topic)))){
return p1__149858_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__149858_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async149883 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async149883 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta149884){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta149884 = meta149884;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async149883.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_149885,meta149884__$1){
var self__ = this;
var _149885__$1 = this;
return (new cljs.core.async.t_cljs$core$async149883(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta149884__$1));
}));

(cljs.core.async.t_cljs$core$async149883.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_149885){
var self__ = this;
var _149885__$1 = this;
return self__.meta149884;
}));

(cljs.core.async.t_cljs$core$async149883.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async149883.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async149883.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async149883.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async149883.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async149883.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async149883.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async149883.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta149884","meta149884",700318376,null)], null);
}));

(cljs.core.async.t_cljs$core$async149883.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async149883.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async149883");

(cljs.core.async.t_cljs$core$async149883.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async149883");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async149883.
 */
cljs.core.async.__GT_t_cljs$core$async149883 = (function cljs$core$async$__GT_t_cljs$core$async149883(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta149884){
return (new cljs.core.async.t_cljs$core$async149883(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta149884));
});

}

return (new cljs.core.async.t_cljs$core$async149883(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__39769__auto___151080 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__39770__auto__ = (function (){var switch__39694__auto__ = (function (state_149966){
var state_val_149967 = (state_149966[(1)]);
if((state_val_149967 === (7))){
var inst_149962 = (state_149966[(2)]);
var state_149966__$1 = state_149966;
var statearr_149969_151081 = state_149966__$1;
(statearr_149969_151081[(2)] = inst_149962);

(statearr_149969_151081[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149967 === (20))){
var state_149966__$1 = state_149966;
var statearr_149970_151082 = state_149966__$1;
(statearr_149970_151082[(2)] = null);

(statearr_149970_151082[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149967 === (1))){
var state_149966__$1 = state_149966;
var statearr_149971_151083 = state_149966__$1;
(statearr_149971_151083[(2)] = null);

(statearr_149971_151083[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149967 === (24))){
var inst_149945 = (state_149966[(7)]);
var inst_149954 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_149945);
var state_149966__$1 = state_149966;
var statearr_149972_151084 = state_149966__$1;
(statearr_149972_151084[(2)] = inst_149954);

(statearr_149972_151084[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149967 === (4))){
var inst_149897 = (state_149966[(8)]);
var inst_149897__$1 = (state_149966[(2)]);
var inst_149898 = (inst_149897__$1 == null);
var state_149966__$1 = (function (){var statearr_149973 = state_149966;
(statearr_149973[(8)] = inst_149897__$1);

return statearr_149973;
})();
if(cljs.core.truth_(inst_149898)){
var statearr_149974_151085 = state_149966__$1;
(statearr_149974_151085[(1)] = (5));

} else {
var statearr_149975_151086 = state_149966__$1;
(statearr_149975_151086[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149967 === (15))){
var inst_149939 = (state_149966[(2)]);
var state_149966__$1 = state_149966;
var statearr_149976_151087 = state_149966__$1;
(statearr_149976_151087[(2)] = inst_149939);

(statearr_149976_151087[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149967 === (21))){
var inst_149959 = (state_149966[(2)]);
var state_149966__$1 = (function (){var statearr_149977 = state_149966;
(statearr_149977[(9)] = inst_149959);

return statearr_149977;
})();
var statearr_149978_151088 = state_149966__$1;
(statearr_149978_151088[(2)] = null);

(statearr_149978_151088[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149967 === (13))){
var inst_149921 = (state_149966[(10)]);
var inst_149923 = cljs.core.chunked_seq_QMARK_(inst_149921);
var state_149966__$1 = state_149966;
if(inst_149923){
var statearr_149979_151089 = state_149966__$1;
(statearr_149979_151089[(1)] = (16));

} else {
var statearr_149980_151090 = state_149966__$1;
(statearr_149980_151090[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149967 === (22))){
var inst_149951 = (state_149966[(2)]);
var state_149966__$1 = state_149966;
if(cljs.core.truth_(inst_149951)){
var statearr_149981_151091 = state_149966__$1;
(statearr_149981_151091[(1)] = (23));

} else {
var statearr_149982_151092 = state_149966__$1;
(statearr_149982_151092[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149967 === (6))){
var inst_149897 = (state_149966[(8)]);
var inst_149947 = (state_149966[(11)]);
var inst_149945 = (state_149966[(7)]);
var inst_149945__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_149897) : topic_fn.call(null,inst_149897));
var inst_149946 = cljs.core.deref(mults);
var inst_149947__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_149946,inst_149945__$1);
var state_149966__$1 = (function (){var statearr_149983 = state_149966;
(statearr_149983[(11)] = inst_149947__$1);

(statearr_149983[(7)] = inst_149945__$1);

return statearr_149983;
})();
if(cljs.core.truth_(inst_149947__$1)){
var statearr_149984_151093 = state_149966__$1;
(statearr_149984_151093[(1)] = (19));

} else {
var statearr_149985_151094 = state_149966__$1;
(statearr_149985_151094[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149967 === (25))){
var inst_149956 = (state_149966[(2)]);
var state_149966__$1 = state_149966;
var statearr_149986_151095 = state_149966__$1;
(statearr_149986_151095[(2)] = inst_149956);

(statearr_149986_151095[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149967 === (17))){
var inst_149921 = (state_149966[(10)]);
var inst_149930 = cljs.core.first(inst_149921);
var inst_149931 = cljs.core.async.muxch_STAR_(inst_149930);
var inst_149932 = cljs.core.async.close_BANG_(inst_149931);
var inst_149933 = cljs.core.next(inst_149921);
var inst_149907 = inst_149933;
var inst_149908 = null;
var inst_149909 = (0);
var inst_149910 = (0);
var state_149966__$1 = (function (){var statearr_149987 = state_149966;
(statearr_149987[(12)] = inst_149908);

(statearr_149987[(13)] = inst_149907);

(statearr_149987[(14)] = inst_149910);

(statearr_149987[(15)] = inst_149909);

(statearr_149987[(16)] = inst_149932);

return statearr_149987;
})();
var statearr_149988_151096 = state_149966__$1;
(statearr_149988_151096[(2)] = null);

(statearr_149988_151096[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149967 === (3))){
var inst_149964 = (state_149966[(2)]);
var state_149966__$1 = state_149966;
return cljs.core.async.impl.ioc_helpers.return_chan(state_149966__$1,inst_149964);
} else {
if((state_val_149967 === (12))){
var inst_149941 = (state_149966[(2)]);
var state_149966__$1 = state_149966;
var statearr_149989_151097 = state_149966__$1;
(statearr_149989_151097[(2)] = inst_149941);

(statearr_149989_151097[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149967 === (2))){
var state_149966__$1 = state_149966;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_149966__$1,(4),ch);
} else {
if((state_val_149967 === (23))){
var state_149966__$1 = state_149966;
var statearr_149990_151098 = state_149966__$1;
(statearr_149990_151098[(2)] = null);

(statearr_149990_151098[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149967 === (19))){
var inst_149897 = (state_149966[(8)]);
var inst_149947 = (state_149966[(11)]);
var inst_149949 = cljs.core.async.muxch_STAR_(inst_149947);
var state_149966__$1 = state_149966;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_149966__$1,(22),inst_149949,inst_149897);
} else {
if((state_val_149967 === (11))){
var inst_149907 = (state_149966[(13)]);
var inst_149921 = (state_149966[(10)]);
var inst_149921__$1 = cljs.core.seq(inst_149907);
var state_149966__$1 = (function (){var statearr_149991 = state_149966;
(statearr_149991[(10)] = inst_149921__$1);

return statearr_149991;
})();
if(inst_149921__$1){
var statearr_149992_151099 = state_149966__$1;
(statearr_149992_151099[(1)] = (13));

} else {
var statearr_149995_151100 = state_149966__$1;
(statearr_149995_151100[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149967 === (9))){
var inst_149943 = (state_149966[(2)]);
var state_149966__$1 = state_149966;
var statearr_149996_151101 = state_149966__$1;
(statearr_149996_151101[(2)] = inst_149943);

(statearr_149996_151101[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149967 === (5))){
var inst_149904 = cljs.core.deref(mults);
var inst_149905 = cljs.core.vals(inst_149904);
var inst_149906 = cljs.core.seq(inst_149905);
var inst_149907 = inst_149906;
var inst_149908 = null;
var inst_149909 = (0);
var inst_149910 = (0);
var state_149966__$1 = (function (){var statearr_149997 = state_149966;
(statearr_149997[(12)] = inst_149908);

(statearr_149997[(13)] = inst_149907);

(statearr_149997[(14)] = inst_149910);

(statearr_149997[(15)] = inst_149909);

return statearr_149997;
})();
var statearr_149998_151102 = state_149966__$1;
(statearr_149998_151102[(2)] = null);

(statearr_149998_151102[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149967 === (14))){
var state_149966__$1 = state_149966;
var statearr_150002_151103 = state_149966__$1;
(statearr_150002_151103[(2)] = null);

(statearr_150002_151103[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149967 === (16))){
var inst_149921 = (state_149966[(10)]);
var inst_149925 = cljs.core.chunk_first(inst_149921);
var inst_149926 = cljs.core.chunk_rest(inst_149921);
var inst_149927 = cljs.core.count(inst_149925);
var inst_149907 = inst_149926;
var inst_149908 = inst_149925;
var inst_149909 = inst_149927;
var inst_149910 = (0);
var state_149966__$1 = (function (){var statearr_150003 = state_149966;
(statearr_150003[(12)] = inst_149908);

(statearr_150003[(13)] = inst_149907);

(statearr_150003[(14)] = inst_149910);

(statearr_150003[(15)] = inst_149909);

return statearr_150003;
})();
var statearr_150004_151106 = state_149966__$1;
(statearr_150004_151106[(2)] = null);

(statearr_150004_151106[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149967 === (10))){
var inst_149908 = (state_149966[(12)]);
var inst_149907 = (state_149966[(13)]);
var inst_149910 = (state_149966[(14)]);
var inst_149909 = (state_149966[(15)]);
var inst_149915 = cljs.core._nth(inst_149908,inst_149910);
var inst_149916 = cljs.core.async.muxch_STAR_(inst_149915);
var inst_149917 = cljs.core.async.close_BANG_(inst_149916);
var inst_149918 = (inst_149910 + (1));
var tmp149999 = inst_149908;
var tmp150000 = inst_149907;
var tmp150001 = inst_149909;
var inst_149907__$1 = tmp150000;
var inst_149908__$1 = tmp149999;
var inst_149909__$1 = tmp150001;
var inst_149910__$1 = inst_149918;
var state_149966__$1 = (function (){var statearr_150006 = state_149966;
(statearr_150006[(12)] = inst_149908__$1);

(statearr_150006[(13)] = inst_149907__$1);

(statearr_150006[(14)] = inst_149910__$1);

(statearr_150006[(17)] = inst_149917);

(statearr_150006[(15)] = inst_149909__$1);

return statearr_150006;
})();
var statearr_150007_151107 = state_149966__$1;
(statearr_150007_151107[(2)] = null);

(statearr_150007_151107[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149967 === (18))){
var inst_149936 = (state_149966[(2)]);
var state_149966__$1 = state_149966;
var statearr_150009_151108 = state_149966__$1;
(statearr_150009_151108[(2)] = inst_149936);

(statearr_150009_151108[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149967 === (8))){
var inst_149910 = (state_149966[(14)]);
var inst_149909 = (state_149966[(15)]);
var inst_149912 = (inst_149910 < inst_149909);
var inst_149913 = inst_149912;
var state_149966__$1 = state_149966;
if(cljs.core.truth_(inst_149913)){
var statearr_150013_151109 = state_149966__$1;
(statearr_150013_151109[(1)] = (10));

} else {
var statearr_150014_151110 = state_149966__$1;
(statearr_150014_151110[(1)] = (11));

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
var statearr_150015 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_150015[(0)] = cljs$core$async$state_machine__39695__auto__);

(statearr_150015[(1)] = (1));

return statearr_150015;
});
var cljs$core$async$state_machine__39695__auto____1 = (function (state_149966){
while(true){
var ret_value__39696__auto__ = (function (){try{while(true){
var result__39697__auto__ = switch__39694__auto__(state_149966);
if(cljs.core.keyword_identical_QMARK_(result__39697__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39697__auto__;
}
break;
}
}catch (e150016){var ex__39698__auto__ = e150016;
var statearr_150017_151111 = state_149966;
(statearr_150017_151111[(2)] = ex__39698__auto__);


if(cljs.core.seq((state_149966[(4)]))){
var statearr_150018_151112 = state_149966;
(statearr_150018_151112[(1)] = cljs.core.first((state_149966[(4)])));

} else {
throw ex__39698__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__151113 = state_149966;
state_149966 = G__151113;
continue;
} else {
return ret_value__39696__auto__;
}
break;
}
});
cljs$core$async$state_machine__39695__auto__ = function(state_149966){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39695__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39695__auto____1.call(this,state_149966);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39695__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39695__auto____0;
cljs$core$async$state_machine__39695__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39695__auto____1;
return cljs$core$async$state_machine__39695__auto__;
})()
})();
var state__39771__auto__ = (function (){var statearr_150020 = f__39770__auto__();
(statearr_150020[(6)] = c__39769__auto___151080);

return statearr_150020;
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
var G__150022 = arguments.length;
switch (G__150022) {
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
var G__150027 = arguments.length;
switch (G__150027) {
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
var G__150029 = arguments.length;
switch (G__150029) {
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
var c__39769__auto___151118 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__39770__auto__ = (function (){var switch__39694__auto__ = (function (state_150072){
var state_val_150073 = (state_150072[(1)]);
if((state_val_150073 === (7))){
var state_150072__$1 = state_150072;
var statearr_150074_151121 = state_150072__$1;
(statearr_150074_151121[(2)] = null);

(statearr_150074_151121[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150073 === (1))){
var state_150072__$1 = state_150072;
var statearr_150075_151128 = state_150072__$1;
(statearr_150075_151128[(2)] = null);

(statearr_150075_151128[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150073 === (4))){
var inst_150033 = (state_150072[(7)]);
var inst_150032 = (state_150072[(8)]);
var inst_150035 = (inst_150033 < inst_150032);
var state_150072__$1 = state_150072;
if(cljs.core.truth_(inst_150035)){
var statearr_150076_151130 = state_150072__$1;
(statearr_150076_151130[(1)] = (6));

} else {
var statearr_150077_151131 = state_150072__$1;
(statearr_150077_151131[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150073 === (15))){
var inst_150058 = (state_150072[(9)]);
var inst_150063 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_150058);
var state_150072__$1 = state_150072;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_150072__$1,(17),out,inst_150063);
} else {
if((state_val_150073 === (13))){
var inst_150058 = (state_150072[(9)]);
var inst_150058__$1 = (state_150072[(2)]);
var inst_150059 = cljs.core.some(cljs.core.nil_QMARK_,inst_150058__$1);
var state_150072__$1 = (function (){var statearr_150078 = state_150072;
(statearr_150078[(9)] = inst_150058__$1);

return statearr_150078;
})();
if(cljs.core.truth_(inst_150059)){
var statearr_150079_151132 = state_150072__$1;
(statearr_150079_151132[(1)] = (14));

} else {
var statearr_150080_151133 = state_150072__$1;
(statearr_150080_151133[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150073 === (6))){
var state_150072__$1 = state_150072;
var statearr_150081_151134 = state_150072__$1;
(statearr_150081_151134[(2)] = null);

(statearr_150081_151134[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150073 === (17))){
var inst_150065 = (state_150072[(2)]);
var state_150072__$1 = (function (){var statearr_150083 = state_150072;
(statearr_150083[(10)] = inst_150065);

return statearr_150083;
})();
var statearr_150084_151135 = state_150072__$1;
(statearr_150084_151135[(2)] = null);

(statearr_150084_151135[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150073 === (3))){
var inst_150070 = (state_150072[(2)]);
var state_150072__$1 = state_150072;
return cljs.core.async.impl.ioc_helpers.return_chan(state_150072__$1,inst_150070);
} else {
if((state_val_150073 === (12))){
var _ = (function (){var statearr_150085 = state_150072;
(statearr_150085[(4)] = cljs.core.rest((state_150072[(4)])));

return statearr_150085;
})();
var state_150072__$1 = state_150072;
var ex150082 = (state_150072__$1[(2)]);
var statearr_150086_151137 = state_150072__$1;
(statearr_150086_151137[(5)] = ex150082);


if((ex150082 instanceof Object)){
var statearr_150087_151138 = state_150072__$1;
(statearr_150087_151138[(1)] = (11));

(statearr_150087_151138[(5)] = null);

} else {
throw ex150082;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150073 === (2))){
var inst_150031 = cljs.core.reset_BANG_(dctr,cnt);
var inst_150032 = cnt;
var inst_150033 = (0);
var state_150072__$1 = (function (){var statearr_150088 = state_150072;
(statearr_150088[(7)] = inst_150033);

(statearr_150088[(11)] = inst_150031);

(statearr_150088[(8)] = inst_150032);

return statearr_150088;
})();
var statearr_150089_151139 = state_150072__$1;
(statearr_150089_151139[(2)] = null);

(statearr_150089_151139[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150073 === (11))){
var inst_150037 = (state_150072[(2)]);
var inst_150038 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_150072__$1 = (function (){var statearr_150090 = state_150072;
(statearr_150090[(12)] = inst_150037);

return statearr_150090;
})();
var statearr_150091_151140 = state_150072__$1;
(statearr_150091_151140[(2)] = inst_150038);

(statearr_150091_151140[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150073 === (9))){
var inst_150033 = (state_150072[(7)]);
var _ = (function (){var statearr_150092 = state_150072;
(statearr_150092[(4)] = cljs.core.cons((12),(state_150072[(4)])));

return statearr_150092;
})();
var inst_150044 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_150033) : chs__$1.call(null,inst_150033));
var inst_150045 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_150033) : done.call(null,inst_150033));
var inst_150046 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_150044,inst_150045);
var ___$1 = (function (){var statearr_150093 = state_150072;
(statearr_150093[(4)] = cljs.core.rest((state_150072[(4)])));

return statearr_150093;
})();
var state_150072__$1 = state_150072;
var statearr_150094_151141 = state_150072__$1;
(statearr_150094_151141[(2)] = inst_150046);

(statearr_150094_151141[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150073 === (5))){
var inst_150056 = (state_150072[(2)]);
var state_150072__$1 = (function (){var statearr_150095 = state_150072;
(statearr_150095[(13)] = inst_150056);

return statearr_150095;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_150072__$1,(13),dchan);
} else {
if((state_val_150073 === (14))){
var inst_150061 = cljs.core.async.close_BANG_(out);
var state_150072__$1 = state_150072;
var statearr_150096_151143 = state_150072__$1;
(statearr_150096_151143[(2)] = inst_150061);

(statearr_150096_151143[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150073 === (16))){
var inst_150068 = (state_150072[(2)]);
var state_150072__$1 = state_150072;
var statearr_150097_151144 = state_150072__$1;
(statearr_150097_151144[(2)] = inst_150068);

(statearr_150097_151144[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150073 === (10))){
var inst_150033 = (state_150072[(7)]);
var inst_150049 = (state_150072[(2)]);
var inst_150050 = (inst_150033 + (1));
var inst_150033__$1 = inst_150050;
var state_150072__$1 = (function (){var statearr_150098 = state_150072;
(statearr_150098[(14)] = inst_150049);

(statearr_150098[(7)] = inst_150033__$1);

return statearr_150098;
})();
var statearr_150099_151149 = state_150072__$1;
(statearr_150099_151149[(2)] = null);

(statearr_150099_151149[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150073 === (8))){
var inst_150054 = (state_150072[(2)]);
var state_150072__$1 = state_150072;
var statearr_150100_151151 = state_150072__$1;
(statearr_150100_151151[(2)] = inst_150054);

(statearr_150100_151151[(1)] = (5));


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
var statearr_150101 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_150101[(0)] = cljs$core$async$state_machine__39695__auto__);

(statearr_150101[(1)] = (1));

return statearr_150101;
});
var cljs$core$async$state_machine__39695__auto____1 = (function (state_150072){
while(true){
var ret_value__39696__auto__ = (function (){try{while(true){
var result__39697__auto__ = switch__39694__auto__(state_150072);
if(cljs.core.keyword_identical_QMARK_(result__39697__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39697__auto__;
}
break;
}
}catch (e150102){var ex__39698__auto__ = e150102;
var statearr_150103_151154 = state_150072;
(statearr_150103_151154[(2)] = ex__39698__auto__);


if(cljs.core.seq((state_150072[(4)]))){
var statearr_150104_151155 = state_150072;
(statearr_150104_151155[(1)] = cljs.core.first((state_150072[(4)])));

} else {
throw ex__39698__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__151156 = state_150072;
state_150072 = G__151156;
continue;
} else {
return ret_value__39696__auto__;
}
break;
}
});
cljs$core$async$state_machine__39695__auto__ = function(state_150072){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39695__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39695__auto____1.call(this,state_150072);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39695__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39695__auto____0;
cljs$core$async$state_machine__39695__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39695__auto____1;
return cljs$core$async$state_machine__39695__auto__;
})()
})();
var state__39771__auto__ = (function (){var statearr_150105 = f__39770__auto__();
(statearr_150105[(6)] = c__39769__auto___151118);

return statearr_150105;
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
var G__150108 = arguments.length;
switch (G__150108) {
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
var c__39769__auto___151159 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__39770__auto__ = (function (){var switch__39694__auto__ = (function (state_150140){
var state_val_150141 = (state_150140[(1)]);
if((state_val_150141 === (7))){
var inst_150119 = (state_150140[(7)]);
var inst_150120 = (state_150140[(8)]);
var inst_150119__$1 = (state_150140[(2)]);
var inst_150120__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_150119__$1,(0),null);
var inst_150121 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_150119__$1,(1),null);
var inst_150122 = (inst_150120__$1 == null);
var state_150140__$1 = (function (){var statearr_150142 = state_150140;
(statearr_150142[(7)] = inst_150119__$1);

(statearr_150142[(9)] = inst_150121);

(statearr_150142[(8)] = inst_150120__$1);

return statearr_150142;
})();
if(cljs.core.truth_(inst_150122)){
var statearr_150143_151161 = state_150140__$1;
(statearr_150143_151161[(1)] = (8));

} else {
var statearr_150144_151163 = state_150140__$1;
(statearr_150144_151163[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150141 === (1))){
var inst_150109 = cljs.core.vec(chs);
var inst_150110 = inst_150109;
var state_150140__$1 = (function (){var statearr_150145 = state_150140;
(statearr_150145[(10)] = inst_150110);

return statearr_150145;
})();
var statearr_150146_151165 = state_150140__$1;
(statearr_150146_151165[(2)] = null);

(statearr_150146_151165[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150141 === (4))){
var inst_150110 = (state_150140[(10)]);
var state_150140__$1 = state_150140;
return cljs.core.async.ioc_alts_BANG_(state_150140__$1,(7),inst_150110);
} else {
if((state_val_150141 === (6))){
var inst_150136 = (state_150140[(2)]);
var state_150140__$1 = state_150140;
var statearr_150147_151166 = state_150140__$1;
(statearr_150147_151166[(2)] = inst_150136);

(statearr_150147_151166[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150141 === (3))){
var inst_150138 = (state_150140[(2)]);
var state_150140__$1 = state_150140;
return cljs.core.async.impl.ioc_helpers.return_chan(state_150140__$1,inst_150138);
} else {
if((state_val_150141 === (2))){
var inst_150110 = (state_150140[(10)]);
var inst_150112 = cljs.core.count(inst_150110);
var inst_150113 = (inst_150112 > (0));
var state_150140__$1 = state_150140;
if(cljs.core.truth_(inst_150113)){
var statearr_150149_151171 = state_150140__$1;
(statearr_150149_151171[(1)] = (4));

} else {
var statearr_150150_151172 = state_150140__$1;
(statearr_150150_151172[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150141 === (11))){
var inst_150110 = (state_150140[(10)]);
var inst_150129 = (state_150140[(2)]);
var tmp150148 = inst_150110;
var inst_150110__$1 = tmp150148;
var state_150140__$1 = (function (){var statearr_150151 = state_150140;
(statearr_150151[(10)] = inst_150110__$1);

(statearr_150151[(11)] = inst_150129);

return statearr_150151;
})();
var statearr_150152_151174 = state_150140__$1;
(statearr_150152_151174[(2)] = null);

(statearr_150152_151174[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150141 === (9))){
var inst_150120 = (state_150140[(8)]);
var state_150140__$1 = state_150140;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_150140__$1,(11),out,inst_150120);
} else {
if((state_val_150141 === (5))){
var inst_150134 = cljs.core.async.close_BANG_(out);
var state_150140__$1 = state_150140;
var statearr_150153_151176 = state_150140__$1;
(statearr_150153_151176[(2)] = inst_150134);

(statearr_150153_151176[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150141 === (10))){
var inst_150132 = (state_150140[(2)]);
var state_150140__$1 = state_150140;
var statearr_150154_151177 = state_150140__$1;
(statearr_150154_151177[(2)] = inst_150132);

(statearr_150154_151177[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150141 === (8))){
var inst_150110 = (state_150140[(10)]);
var inst_150119 = (state_150140[(7)]);
var inst_150121 = (state_150140[(9)]);
var inst_150120 = (state_150140[(8)]);
var inst_150124 = (function (){var cs = inst_150110;
var vec__150115 = inst_150119;
var v = inst_150120;
var c = inst_150121;
return (function (p1__150106_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__150106_SHARP_);
});
})();
var inst_150125 = cljs.core.filterv(inst_150124,inst_150110);
var inst_150110__$1 = inst_150125;
var state_150140__$1 = (function (){var statearr_150155 = state_150140;
(statearr_150155[(10)] = inst_150110__$1);

return statearr_150155;
})();
var statearr_150156_151179 = state_150140__$1;
(statearr_150156_151179[(2)] = null);

(statearr_150156_151179[(1)] = (2));


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
var statearr_150157 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_150157[(0)] = cljs$core$async$state_machine__39695__auto__);

(statearr_150157[(1)] = (1));

return statearr_150157;
});
var cljs$core$async$state_machine__39695__auto____1 = (function (state_150140){
while(true){
var ret_value__39696__auto__ = (function (){try{while(true){
var result__39697__auto__ = switch__39694__auto__(state_150140);
if(cljs.core.keyword_identical_QMARK_(result__39697__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39697__auto__;
}
break;
}
}catch (e150158){var ex__39698__auto__ = e150158;
var statearr_150159_151180 = state_150140;
(statearr_150159_151180[(2)] = ex__39698__auto__);


if(cljs.core.seq((state_150140[(4)]))){
var statearr_150160_151182 = state_150140;
(statearr_150160_151182[(1)] = cljs.core.first((state_150140[(4)])));

} else {
throw ex__39698__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__151183 = state_150140;
state_150140 = G__151183;
continue;
} else {
return ret_value__39696__auto__;
}
break;
}
});
cljs$core$async$state_machine__39695__auto__ = function(state_150140){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39695__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39695__auto____1.call(this,state_150140);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39695__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39695__auto____0;
cljs$core$async$state_machine__39695__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39695__auto____1;
return cljs$core$async$state_machine__39695__auto__;
})()
})();
var state__39771__auto__ = (function (){var statearr_150162 = f__39770__auto__();
(statearr_150162[(6)] = c__39769__auto___151159);

return statearr_150162;
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
var G__150164 = arguments.length;
switch (G__150164) {
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
var c__39769__auto___151186 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__39770__auto__ = (function (){var switch__39694__auto__ = (function (state_150189){
var state_val_150190 = (state_150189[(1)]);
if((state_val_150190 === (7))){
var inst_150171 = (state_150189[(7)]);
var inst_150171__$1 = (state_150189[(2)]);
var inst_150172 = (inst_150171__$1 == null);
var inst_150173 = cljs.core.not(inst_150172);
var state_150189__$1 = (function (){var statearr_150191 = state_150189;
(statearr_150191[(7)] = inst_150171__$1);

return statearr_150191;
})();
if(inst_150173){
var statearr_150192_151189 = state_150189__$1;
(statearr_150192_151189[(1)] = (8));

} else {
var statearr_150193_151190 = state_150189__$1;
(statearr_150193_151190[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150190 === (1))){
var inst_150166 = (0);
var state_150189__$1 = (function (){var statearr_150195 = state_150189;
(statearr_150195[(8)] = inst_150166);

return statearr_150195;
})();
var statearr_150196_151191 = state_150189__$1;
(statearr_150196_151191[(2)] = null);

(statearr_150196_151191[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150190 === (4))){
var state_150189__$1 = state_150189;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_150189__$1,(7),ch);
} else {
if((state_val_150190 === (6))){
var inst_150184 = (state_150189[(2)]);
var state_150189__$1 = state_150189;
var statearr_150197_151193 = state_150189__$1;
(statearr_150197_151193[(2)] = inst_150184);

(statearr_150197_151193[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150190 === (3))){
var inst_150186 = (state_150189[(2)]);
var inst_150187 = cljs.core.async.close_BANG_(out);
var state_150189__$1 = (function (){var statearr_150198 = state_150189;
(statearr_150198[(9)] = inst_150186);

return statearr_150198;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_150189__$1,inst_150187);
} else {
if((state_val_150190 === (2))){
var inst_150166 = (state_150189[(8)]);
var inst_150168 = (inst_150166 < n);
var state_150189__$1 = state_150189;
if(cljs.core.truth_(inst_150168)){
var statearr_150200_151196 = state_150189__$1;
(statearr_150200_151196[(1)] = (4));

} else {
var statearr_150201_151197 = state_150189__$1;
(statearr_150201_151197[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150190 === (11))){
var inst_150166 = (state_150189[(8)]);
var inst_150176 = (state_150189[(2)]);
var inst_150177 = (inst_150166 + (1));
var inst_150166__$1 = inst_150177;
var state_150189__$1 = (function (){var statearr_150202 = state_150189;
(statearr_150202[(10)] = inst_150176);

(statearr_150202[(8)] = inst_150166__$1);

return statearr_150202;
})();
var statearr_150203_151199 = state_150189__$1;
(statearr_150203_151199[(2)] = null);

(statearr_150203_151199[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150190 === (9))){
var state_150189__$1 = state_150189;
var statearr_150204_151201 = state_150189__$1;
(statearr_150204_151201[(2)] = null);

(statearr_150204_151201[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150190 === (5))){
var state_150189__$1 = state_150189;
var statearr_150205_151202 = state_150189__$1;
(statearr_150205_151202[(2)] = null);

(statearr_150205_151202[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150190 === (10))){
var inst_150181 = (state_150189[(2)]);
var state_150189__$1 = state_150189;
var statearr_150206_151203 = state_150189__$1;
(statearr_150206_151203[(2)] = inst_150181);

(statearr_150206_151203[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150190 === (8))){
var inst_150171 = (state_150189[(7)]);
var state_150189__$1 = state_150189;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_150189__$1,(11),out,inst_150171);
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
var statearr_150209 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_150209[(0)] = cljs$core$async$state_machine__39695__auto__);

(statearr_150209[(1)] = (1));

return statearr_150209;
});
var cljs$core$async$state_machine__39695__auto____1 = (function (state_150189){
while(true){
var ret_value__39696__auto__ = (function (){try{while(true){
var result__39697__auto__ = switch__39694__auto__(state_150189);
if(cljs.core.keyword_identical_QMARK_(result__39697__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39697__auto__;
}
break;
}
}catch (e150210){var ex__39698__auto__ = e150210;
var statearr_150211_151210 = state_150189;
(statearr_150211_151210[(2)] = ex__39698__auto__);


if(cljs.core.seq((state_150189[(4)]))){
var statearr_150212_151211 = state_150189;
(statearr_150212_151211[(1)] = cljs.core.first((state_150189[(4)])));

} else {
throw ex__39698__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__151212 = state_150189;
state_150189 = G__151212;
continue;
} else {
return ret_value__39696__auto__;
}
break;
}
});
cljs$core$async$state_machine__39695__auto__ = function(state_150189){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39695__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39695__auto____1.call(this,state_150189);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39695__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39695__auto____0;
cljs$core$async$state_machine__39695__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39695__auto____1;
return cljs$core$async$state_machine__39695__auto__;
})()
})();
var state__39771__auto__ = (function (){var statearr_150213 = f__39770__auto__();
(statearr_150213[(6)] = c__39769__auto___151186);

return statearr_150213;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async150215 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async150215 = (function (f,ch,meta150216){
this.f = f;
this.ch = ch;
this.meta150216 = meta150216;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async150215.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_150217,meta150216__$1){
var self__ = this;
var _150217__$1 = this;
return (new cljs.core.async.t_cljs$core$async150215(self__.f,self__.ch,meta150216__$1));
}));

(cljs.core.async.t_cljs$core$async150215.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_150217){
var self__ = this;
var _150217__$1 = this;
return self__.meta150216;
}));

(cljs.core.async.t_cljs$core$async150215.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async150215.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async150215.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async150215.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async150215.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async150219 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async150219 = (function (f,ch,meta150216,_,fn1,meta150220){
this.f = f;
this.ch = ch;
this.meta150216 = meta150216;
this._ = _;
this.fn1 = fn1;
this.meta150220 = meta150220;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async150219.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_150221,meta150220__$1){
var self__ = this;
var _150221__$1 = this;
return (new cljs.core.async.t_cljs$core$async150219(self__.f,self__.ch,self__.meta150216,self__._,self__.fn1,meta150220__$1));
}));

(cljs.core.async.t_cljs$core$async150219.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_150221){
var self__ = this;
var _150221__$1 = this;
return self__.meta150220;
}));

(cljs.core.async.t_cljs$core$async150219.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async150219.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async150219.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async150219.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__150214_SHARP_){
var G__150223 = (((p1__150214_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__150214_SHARP_) : self__.f.call(null,p1__150214_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__150223) : f1.call(null,G__150223));
});
}));

(cljs.core.async.t_cljs$core$async150219.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta150216","meta150216",80359700,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async150215","cljs.core.async/t_cljs$core$async150215",1516328944,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta150220","meta150220",329500732,null)], null);
}));

(cljs.core.async.t_cljs$core$async150219.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async150219.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async150219");

(cljs.core.async.t_cljs$core$async150219.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async150219");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async150219.
 */
cljs.core.async.__GT_t_cljs$core$async150219 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async150219(f__$1,ch__$1,meta150216__$1,___$2,fn1__$1,meta150220){
return (new cljs.core.async.t_cljs$core$async150219(f__$1,ch__$1,meta150216__$1,___$2,fn1__$1,meta150220));
});

}

return (new cljs.core.async.t_cljs$core$async150219(self__.f,self__.ch,self__.meta150216,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4221__auto__ = ret;
if(cljs.core.truth_(and__4221__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4221__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__150224 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__150224) : self__.f.call(null,G__150224));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async150215.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async150215.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async150215.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta150216","meta150216",80359700,null)], null);
}));

(cljs.core.async.t_cljs$core$async150215.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async150215.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async150215");

(cljs.core.async.t_cljs$core$async150215.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async150215");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async150215.
 */
cljs.core.async.__GT_t_cljs$core$async150215 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async150215(f__$1,ch__$1,meta150216){
return (new cljs.core.async.t_cljs$core$async150215(f__$1,ch__$1,meta150216));
});

}

return (new cljs.core.async.t_cljs$core$async150215(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async150228 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async150228 = (function (f,ch,meta150229){
this.f = f;
this.ch = ch;
this.meta150229 = meta150229;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async150228.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_150230,meta150229__$1){
var self__ = this;
var _150230__$1 = this;
return (new cljs.core.async.t_cljs$core$async150228(self__.f,self__.ch,meta150229__$1));
}));

(cljs.core.async.t_cljs$core$async150228.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_150230){
var self__ = this;
var _150230__$1 = this;
return self__.meta150229;
}));

(cljs.core.async.t_cljs$core$async150228.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async150228.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async150228.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async150228.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async150228.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async150228.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async150228.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta150229","meta150229",-786497932,null)], null);
}));

(cljs.core.async.t_cljs$core$async150228.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async150228.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async150228");

(cljs.core.async.t_cljs$core$async150228.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async150228");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async150228.
 */
cljs.core.async.__GT_t_cljs$core$async150228 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async150228(f__$1,ch__$1,meta150229){
return (new cljs.core.async.t_cljs$core$async150228(f__$1,ch__$1,meta150229));
});

}

return (new cljs.core.async.t_cljs$core$async150228(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async150232 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async150232 = (function (p,ch,meta150233){
this.p = p;
this.ch = ch;
this.meta150233 = meta150233;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async150232.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_150234,meta150233__$1){
var self__ = this;
var _150234__$1 = this;
return (new cljs.core.async.t_cljs$core$async150232(self__.p,self__.ch,meta150233__$1));
}));

(cljs.core.async.t_cljs$core$async150232.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_150234){
var self__ = this;
var _150234__$1 = this;
return self__.meta150233;
}));

(cljs.core.async.t_cljs$core$async150232.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async150232.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async150232.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async150232.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async150232.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async150232.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async150232.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async150232.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta150233","meta150233",896514617,null)], null);
}));

(cljs.core.async.t_cljs$core$async150232.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async150232.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async150232");

(cljs.core.async.t_cljs$core$async150232.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async150232");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async150232.
 */
cljs.core.async.__GT_t_cljs$core$async150232 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async150232(p__$1,ch__$1,meta150233){
return (new cljs.core.async.t_cljs$core$async150232(p__$1,ch__$1,meta150233));
});

}

return (new cljs.core.async.t_cljs$core$async150232(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__150238 = arguments.length;
switch (G__150238) {
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
var c__39769__auto___151222 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__39770__auto__ = (function (){var switch__39694__auto__ = (function (state_150262){
var state_val_150263 = (state_150262[(1)]);
if((state_val_150263 === (7))){
var inst_150258 = (state_150262[(2)]);
var state_150262__$1 = state_150262;
var statearr_150264_151224 = state_150262__$1;
(statearr_150264_151224[(2)] = inst_150258);

(statearr_150264_151224[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150263 === (1))){
var state_150262__$1 = state_150262;
var statearr_150265_151225 = state_150262__$1;
(statearr_150265_151225[(2)] = null);

(statearr_150265_151225[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150263 === (4))){
var inst_150244 = (state_150262[(7)]);
var inst_150244__$1 = (state_150262[(2)]);
var inst_150245 = (inst_150244__$1 == null);
var state_150262__$1 = (function (){var statearr_150266 = state_150262;
(statearr_150266[(7)] = inst_150244__$1);

return statearr_150266;
})();
if(cljs.core.truth_(inst_150245)){
var statearr_150267_151226 = state_150262__$1;
(statearr_150267_151226[(1)] = (5));

} else {
var statearr_150268_151227 = state_150262__$1;
(statearr_150268_151227[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150263 === (6))){
var inst_150244 = (state_150262[(7)]);
var inst_150249 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_150244) : p.call(null,inst_150244));
var state_150262__$1 = state_150262;
if(cljs.core.truth_(inst_150249)){
var statearr_150269_151235 = state_150262__$1;
(statearr_150269_151235[(1)] = (8));

} else {
var statearr_150270_151236 = state_150262__$1;
(statearr_150270_151236[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150263 === (3))){
var inst_150260 = (state_150262[(2)]);
var state_150262__$1 = state_150262;
return cljs.core.async.impl.ioc_helpers.return_chan(state_150262__$1,inst_150260);
} else {
if((state_val_150263 === (2))){
var state_150262__$1 = state_150262;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_150262__$1,(4),ch);
} else {
if((state_val_150263 === (11))){
var inst_150252 = (state_150262[(2)]);
var state_150262__$1 = state_150262;
var statearr_150271_151237 = state_150262__$1;
(statearr_150271_151237[(2)] = inst_150252);

(statearr_150271_151237[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150263 === (9))){
var state_150262__$1 = state_150262;
var statearr_150273_151238 = state_150262__$1;
(statearr_150273_151238[(2)] = null);

(statearr_150273_151238[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150263 === (5))){
var inst_150247 = cljs.core.async.close_BANG_(out);
var state_150262__$1 = state_150262;
var statearr_150274_151240 = state_150262__$1;
(statearr_150274_151240[(2)] = inst_150247);

(statearr_150274_151240[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150263 === (10))){
var inst_150255 = (state_150262[(2)]);
var state_150262__$1 = (function (){var statearr_150275 = state_150262;
(statearr_150275[(8)] = inst_150255);

return statearr_150275;
})();
var statearr_150276_151241 = state_150262__$1;
(statearr_150276_151241[(2)] = null);

(statearr_150276_151241[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150263 === (8))){
var inst_150244 = (state_150262[(7)]);
var state_150262__$1 = state_150262;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_150262__$1,(11),out,inst_150244);
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
var statearr_150277 = [null,null,null,null,null,null,null,null,null];
(statearr_150277[(0)] = cljs$core$async$state_machine__39695__auto__);

(statearr_150277[(1)] = (1));

return statearr_150277;
});
var cljs$core$async$state_machine__39695__auto____1 = (function (state_150262){
while(true){
var ret_value__39696__auto__ = (function (){try{while(true){
var result__39697__auto__ = switch__39694__auto__(state_150262);
if(cljs.core.keyword_identical_QMARK_(result__39697__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39697__auto__;
}
break;
}
}catch (e150278){var ex__39698__auto__ = e150278;
var statearr_150279_151243 = state_150262;
(statearr_150279_151243[(2)] = ex__39698__auto__);


if(cljs.core.seq((state_150262[(4)]))){
var statearr_150280_151244 = state_150262;
(statearr_150280_151244[(1)] = cljs.core.first((state_150262[(4)])));

} else {
throw ex__39698__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__151245 = state_150262;
state_150262 = G__151245;
continue;
} else {
return ret_value__39696__auto__;
}
break;
}
});
cljs$core$async$state_machine__39695__auto__ = function(state_150262){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39695__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39695__auto____1.call(this,state_150262);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39695__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39695__auto____0;
cljs$core$async$state_machine__39695__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39695__auto____1;
return cljs$core$async$state_machine__39695__auto__;
})()
})();
var state__39771__auto__ = (function (){var statearr_150282 = f__39770__auto__();
(statearr_150282[(6)] = c__39769__auto___151222);

return statearr_150282;
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
var G__150284 = arguments.length;
switch (G__150284) {
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
var f__39770__auto__ = (function (){var switch__39694__auto__ = (function (state_150350){
var state_val_150351 = (state_150350[(1)]);
if((state_val_150351 === (7))){
var inst_150345 = (state_150350[(2)]);
var state_150350__$1 = state_150350;
var statearr_150352_151248 = state_150350__$1;
(statearr_150352_151248[(2)] = inst_150345);

(statearr_150352_151248[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150351 === (20))){
var inst_150315 = (state_150350[(7)]);
var inst_150326 = (state_150350[(2)]);
var inst_150327 = cljs.core.next(inst_150315);
var inst_150301 = inst_150327;
var inst_150302 = null;
var inst_150303 = (0);
var inst_150304 = (0);
var state_150350__$1 = (function (){var statearr_150353 = state_150350;
(statearr_150353[(8)] = inst_150304);

(statearr_150353[(9)] = inst_150303);

(statearr_150353[(10)] = inst_150326);

(statearr_150353[(11)] = inst_150301);

(statearr_150353[(12)] = inst_150302);

return statearr_150353;
})();
var statearr_150354_151249 = state_150350__$1;
(statearr_150354_151249[(2)] = null);

(statearr_150354_151249[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150351 === (1))){
var state_150350__$1 = state_150350;
var statearr_150355_151250 = state_150350__$1;
(statearr_150355_151250[(2)] = null);

(statearr_150355_151250[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150351 === (4))){
var inst_150290 = (state_150350[(13)]);
var inst_150290__$1 = (state_150350[(2)]);
var inst_150291 = (inst_150290__$1 == null);
var state_150350__$1 = (function (){var statearr_150356 = state_150350;
(statearr_150356[(13)] = inst_150290__$1);

return statearr_150356;
})();
if(cljs.core.truth_(inst_150291)){
var statearr_150357_151251 = state_150350__$1;
(statearr_150357_151251[(1)] = (5));

} else {
var statearr_150358_151252 = state_150350__$1;
(statearr_150358_151252[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150351 === (15))){
var state_150350__$1 = state_150350;
var statearr_150362_151254 = state_150350__$1;
(statearr_150362_151254[(2)] = null);

(statearr_150362_151254[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150351 === (21))){
var state_150350__$1 = state_150350;
var statearr_150363_151256 = state_150350__$1;
(statearr_150363_151256[(2)] = null);

(statearr_150363_151256[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150351 === (13))){
var inst_150304 = (state_150350[(8)]);
var inst_150303 = (state_150350[(9)]);
var inst_150301 = (state_150350[(11)]);
var inst_150302 = (state_150350[(12)]);
var inst_150311 = (state_150350[(2)]);
var inst_150312 = (inst_150304 + (1));
var tmp150359 = inst_150303;
var tmp150360 = inst_150301;
var tmp150361 = inst_150302;
var inst_150301__$1 = tmp150360;
var inst_150302__$1 = tmp150361;
var inst_150303__$1 = tmp150359;
var inst_150304__$1 = inst_150312;
var state_150350__$1 = (function (){var statearr_150364 = state_150350;
(statearr_150364[(8)] = inst_150304__$1);

(statearr_150364[(9)] = inst_150303__$1);

(statearr_150364[(14)] = inst_150311);

(statearr_150364[(11)] = inst_150301__$1);

(statearr_150364[(12)] = inst_150302__$1);

return statearr_150364;
})();
var statearr_150365_151257 = state_150350__$1;
(statearr_150365_151257[(2)] = null);

(statearr_150365_151257[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150351 === (22))){
var state_150350__$1 = state_150350;
var statearr_150368_151259 = state_150350__$1;
(statearr_150368_151259[(2)] = null);

(statearr_150368_151259[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150351 === (6))){
var inst_150290 = (state_150350[(13)]);
var inst_150299 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_150290) : f.call(null,inst_150290));
var inst_150300 = cljs.core.seq(inst_150299);
var inst_150301 = inst_150300;
var inst_150302 = null;
var inst_150303 = (0);
var inst_150304 = (0);
var state_150350__$1 = (function (){var statearr_150370 = state_150350;
(statearr_150370[(8)] = inst_150304);

(statearr_150370[(9)] = inst_150303);

(statearr_150370[(11)] = inst_150301);

(statearr_150370[(12)] = inst_150302);

return statearr_150370;
})();
var statearr_150371_151264 = state_150350__$1;
(statearr_150371_151264[(2)] = null);

(statearr_150371_151264[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150351 === (17))){
var inst_150315 = (state_150350[(7)]);
var inst_150319 = cljs.core.chunk_first(inst_150315);
var inst_150320 = cljs.core.chunk_rest(inst_150315);
var inst_150321 = cljs.core.count(inst_150319);
var inst_150301 = inst_150320;
var inst_150302 = inst_150319;
var inst_150303 = inst_150321;
var inst_150304 = (0);
var state_150350__$1 = (function (){var statearr_150375 = state_150350;
(statearr_150375[(8)] = inst_150304);

(statearr_150375[(9)] = inst_150303);

(statearr_150375[(11)] = inst_150301);

(statearr_150375[(12)] = inst_150302);

return statearr_150375;
})();
var statearr_150376_151265 = state_150350__$1;
(statearr_150376_151265[(2)] = null);

(statearr_150376_151265[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150351 === (3))){
var inst_150347 = (state_150350[(2)]);
var state_150350__$1 = state_150350;
return cljs.core.async.impl.ioc_helpers.return_chan(state_150350__$1,inst_150347);
} else {
if((state_val_150351 === (12))){
var inst_150335 = (state_150350[(2)]);
var state_150350__$1 = state_150350;
var statearr_150377_151266 = state_150350__$1;
(statearr_150377_151266[(2)] = inst_150335);

(statearr_150377_151266[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150351 === (2))){
var state_150350__$1 = state_150350;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_150350__$1,(4),in$);
} else {
if((state_val_150351 === (23))){
var inst_150343 = (state_150350[(2)]);
var state_150350__$1 = state_150350;
var statearr_150378_151268 = state_150350__$1;
(statearr_150378_151268[(2)] = inst_150343);

(statearr_150378_151268[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150351 === (19))){
var inst_150330 = (state_150350[(2)]);
var state_150350__$1 = state_150350;
var statearr_150379_151269 = state_150350__$1;
(statearr_150379_151269[(2)] = inst_150330);

(statearr_150379_151269[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150351 === (11))){
var inst_150301 = (state_150350[(11)]);
var inst_150315 = (state_150350[(7)]);
var inst_150315__$1 = cljs.core.seq(inst_150301);
var state_150350__$1 = (function (){var statearr_150380 = state_150350;
(statearr_150380[(7)] = inst_150315__$1);

return statearr_150380;
})();
if(inst_150315__$1){
var statearr_150381_151270 = state_150350__$1;
(statearr_150381_151270[(1)] = (14));

} else {
var statearr_150382_151271 = state_150350__$1;
(statearr_150382_151271[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150351 === (9))){
var inst_150337 = (state_150350[(2)]);
var inst_150338 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_150350__$1 = (function (){var statearr_150383 = state_150350;
(statearr_150383[(15)] = inst_150337);

return statearr_150383;
})();
if(cljs.core.truth_(inst_150338)){
var statearr_150384_151272 = state_150350__$1;
(statearr_150384_151272[(1)] = (21));

} else {
var statearr_150385_151274 = state_150350__$1;
(statearr_150385_151274[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150351 === (5))){
var inst_150293 = cljs.core.async.close_BANG_(out);
var state_150350__$1 = state_150350;
var statearr_150386_151275 = state_150350__$1;
(statearr_150386_151275[(2)] = inst_150293);

(statearr_150386_151275[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150351 === (14))){
var inst_150315 = (state_150350[(7)]);
var inst_150317 = cljs.core.chunked_seq_QMARK_(inst_150315);
var state_150350__$1 = state_150350;
if(inst_150317){
var statearr_150388_151276 = state_150350__$1;
(statearr_150388_151276[(1)] = (17));

} else {
var statearr_150389_151278 = state_150350__$1;
(statearr_150389_151278[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150351 === (16))){
var inst_150333 = (state_150350[(2)]);
var state_150350__$1 = state_150350;
var statearr_150390_151279 = state_150350__$1;
(statearr_150390_151279[(2)] = inst_150333);

(statearr_150390_151279[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150351 === (10))){
var inst_150304 = (state_150350[(8)]);
var inst_150302 = (state_150350[(12)]);
var inst_150309 = cljs.core._nth(inst_150302,inst_150304);
var state_150350__$1 = state_150350;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_150350__$1,(13),out,inst_150309);
} else {
if((state_val_150351 === (18))){
var inst_150315 = (state_150350[(7)]);
var inst_150324 = cljs.core.first(inst_150315);
var state_150350__$1 = state_150350;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_150350__$1,(20),out,inst_150324);
} else {
if((state_val_150351 === (8))){
var inst_150304 = (state_150350[(8)]);
var inst_150303 = (state_150350[(9)]);
var inst_150306 = (inst_150304 < inst_150303);
var inst_150307 = inst_150306;
var state_150350__$1 = state_150350;
if(cljs.core.truth_(inst_150307)){
var statearr_150391_151283 = state_150350__$1;
(statearr_150391_151283[(1)] = (10));

} else {
var statearr_150392_151284 = state_150350__$1;
(statearr_150392_151284[(1)] = (11));

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
var statearr_150393 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_150393[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__39695__auto__);

(statearr_150393[(1)] = (1));

return statearr_150393;
});
var cljs$core$async$mapcat_STAR__$_state_machine__39695__auto____1 = (function (state_150350){
while(true){
var ret_value__39696__auto__ = (function (){try{while(true){
var result__39697__auto__ = switch__39694__auto__(state_150350);
if(cljs.core.keyword_identical_QMARK_(result__39697__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39697__auto__;
}
break;
}
}catch (e150395){var ex__39698__auto__ = e150395;
var statearr_150397_151286 = state_150350;
(statearr_150397_151286[(2)] = ex__39698__auto__);


if(cljs.core.seq((state_150350[(4)]))){
var statearr_150398_151288 = state_150350;
(statearr_150398_151288[(1)] = cljs.core.first((state_150350[(4)])));

} else {
throw ex__39698__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__151289 = state_150350;
state_150350 = G__151289;
continue;
} else {
return ret_value__39696__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__39695__auto__ = function(state_150350){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__39695__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__39695__auto____1.call(this,state_150350);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__39695__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__39695__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__39695__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__39695__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__39695__auto__;
})()
})();
var state__39771__auto__ = (function (){var statearr_150401 = f__39770__auto__();
(statearr_150401[(6)] = c__39769__auto__);

return statearr_150401;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39771__auto__);
}));

return c__39769__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__150403 = arguments.length;
switch (G__150403) {
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
var G__150410 = arguments.length;
switch (G__150410) {
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
var G__150418 = arguments.length;
switch (G__150418) {
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
var c__39769__auto___151299 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__39770__auto__ = (function (){var switch__39694__auto__ = (function (state_150445){
var state_val_150446 = (state_150445[(1)]);
if((state_val_150446 === (7))){
var inst_150440 = (state_150445[(2)]);
var state_150445__$1 = state_150445;
var statearr_150447_151300 = state_150445__$1;
(statearr_150447_151300[(2)] = inst_150440);

(statearr_150447_151300[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150446 === (1))){
var inst_150422 = null;
var state_150445__$1 = (function (){var statearr_150448 = state_150445;
(statearr_150448[(7)] = inst_150422);

return statearr_150448;
})();
var statearr_150449_151303 = state_150445__$1;
(statearr_150449_151303[(2)] = null);

(statearr_150449_151303[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150446 === (4))){
var inst_150425 = (state_150445[(8)]);
var inst_150425__$1 = (state_150445[(2)]);
var inst_150426 = (inst_150425__$1 == null);
var inst_150427 = cljs.core.not(inst_150426);
var state_150445__$1 = (function (){var statearr_150450 = state_150445;
(statearr_150450[(8)] = inst_150425__$1);

return statearr_150450;
})();
if(inst_150427){
var statearr_150451_151305 = state_150445__$1;
(statearr_150451_151305[(1)] = (5));

} else {
var statearr_150452_151306 = state_150445__$1;
(statearr_150452_151306[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150446 === (6))){
var state_150445__$1 = state_150445;
var statearr_150453_151307 = state_150445__$1;
(statearr_150453_151307[(2)] = null);

(statearr_150453_151307[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150446 === (3))){
var inst_150442 = (state_150445[(2)]);
var inst_150443 = cljs.core.async.close_BANG_(out);
var state_150445__$1 = (function (){var statearr_150454 = state_150445;
(statearr_150454[(9)] = inst_150442);

return statearr_150454;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_150445__$1,inst_150443);
} else {
if((state_val_150446 === (2))){
var state_150445__$1 = state_150445;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_150445__$1,(4),ch);
} else {
if((state_val_150446 === (11))){
var inst_150425 = (state_150445[(8)]);
var inst_150434 = (state_150445[(2)]);
var inst_150422 = inst_150425;
var state_150445__$1 = (function (){var statearr_150455 = state_150445;
(statearr_150455[(7)] = inst_150422);

(statearr_150455[(10)] = inst_150434);

return statearr_150455;
})();
var statearr_150456_151308 = state_150445__$1;
(statearr_150456_151308[(2)] = null);

(statearr_150456_151308[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150446 === (9))){
var inst_150425 = (state_150445[(8)]);
var state_150445__$1 = state_150445;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_150445__$1,(11),out,inst_150425);
} else {
if((state_val_150446 === (5))){
var inst_150422 = (state_150445[(7)]);
var inst_150425 = (state_150445[(8)]);
var inst_150429 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_150425,inst_150422);
var state_150445__$1 = state_150445;
if(inst_150429){
var statearr_150458_151311 = state_150445__$1;
(statearr_150458_151311[(1)] = (8));

} else {
var statearr_150459_151312 = state_150445__$1;
(statearr_150459_151312[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150446 === (10))){
var inst_150437 = (state_150445[(2)]);
var state_150445__$1 = state_150445;
var statearr_150460_151313 = state_150445__$1;
(statearr_150460_151313[(2)] = inst_150437);

(statearr_150460_151313[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150446 === (8))){
var inst_150422 = (state_150445[(7)]);
var tmp150457 = inst_150422;
var inst_150422__$1 = tmp150457;
var state_150445__$1 = (function (){var statearr_150461 = state_150445;
(statearr_150461[(7)] = inst_150422__$1);

return statearr_150461;
})();
var statearr_150462_151314 = state_150445__$1;
(statearr_150462_151314[(2)] = null);

(statearr_150462_151314[(1)] = (2));


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
var statearr_150463 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_150463[(0)] = cljs$core$async$state_machine__39695__auto__);

(statearr_150463[(1)] = (1));

return statearr_150463;
});
var cljs$core$async$state_machine__39695__auto____1 = (function (state_150445){
while(true){
var ret_value__39696__auto__ = (function (){try{while(true){
var result__39697__auto__ = switch__39694__auto__(state_150445);
if(cljs.core.keyword_identical_QMARK_(result__39697__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39697__auto__;
}
break;
}
}catch (e150464){var ex__39698__auto__ = e150464;
var statearr_150465_151318 = state_150445;
(statearr_150465_151318[(2)] = ex__39698__auto__);


if(cljs.core.seq((state_150445[(4)]))){
var statearr_150466_151319 = state_150445;
(statearr_150466_151319[(1)] = cljs.core.first((state_150445[(4)])));

} else {
throw ex__39698__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__151320 = state_150445;
state_150445 = G__151320;
continue;
} else {
return ret_value__39696__auto__;
}
break;
}
});
cljs$core$async$state_machine__39695__auto__ = function(state_150445){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39695__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39695__auto____1.call(this,state_150445);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39695__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39695__auto____0;
cljs$core$async$state_machine__39695__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39695__auto____1;
return cljs$core$async$state_machine__39695__auto__;
})()
})();
var state__39771__auto__ = (function (){var statearr_150471 = f__39770__auto__();
(statearr_150471[(6)] = c__39769__auto___151299);

return statearr_150471;
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
var G__150473 = arguments.length;
switch (G__150473) {
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
var c__39769__auto___151322 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__39770__auto__ = (function (){var switch__39694__auto__ = (function (state_150511){
var state_val_150512 = (state_150511[(1)]);
if((state_val_150512 === (7))){
var inst_150507 = (state_150511[(2)]);
var state_150511__$1 = state_150511;
var statearr_150514_151323 = state_150511__$1;
(statearr_150514_151323[(2)] = inst_150507);

(statearr_150514_151323[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150512 === (1))){
var inst_150474 = (new Array(n));
var inst_150475 = inst_150474;
var inst_150476 = (0);
var state_150511__$1 = (function (){var statearr_150519 = state_150511;
(statearr_150519[(7)] = inst_150475);

(statearr_150519[(8)] = inst_150476);

return statearr_150519;
})();
var statearr_150521_151324 = state_150511__$1;
(statearr_150521_151324[(2)] = null);

(statearr_150521_151324[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150512 === (4))){
var inst_150479 = (state_150511[(9)]);
var inst_150479__$1 = (state_150511[(2)]);
var inst_150480 = (inst_150479__$1 == null);
var inst_150481 = cljs.core.not(inst_150480);
var state_150511__$1 = (function (){var statearr_150538 = state_150511;
(statearr_150538[(9)] = inst_150479__$1);

return statearr_150538;
})();
if(inst_150481){
var statearr_150539_151327 = state_150511__$1;
(statearr_150539_151327[(1)] = (5));

} else {
var statearr_150540_151328 = state_150511__$1;
(statearr_150540_151328[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150512 === (15))){
var inst_150501 = (state_150511[(2)]);
var state_150511__$1 = state_150511;
var statearr_150541_151329 = state_150511__$1;
(statearr_150541_151329[(2)] = inst_150501);

(statearr_150541_151329[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150512 === (13))){
var state_150511__$1 = state_150511;
var statearr_150542_151330 = state_150511__$1;
(statearr_150542_151330[(2)] = null);

(statearr_150542_151330[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150512 === (6))){
var inst_150476 = (state_150511[(8)]);
var inst_150497 = (inst_150476 > (0));
var state_150511__$1 = state_150511;
if(cljs.core.truth_(inst_150497)){
var statearr_150543_151331 = state_150511__$1;
(statearr_150543_151331[(1)] = (12));

} else {
var statearr_150544_151332 = state_150511__$1;
(statearr_150544_151332[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150512 === (3))){
var inst_150509 = (state_150511[(2)]);
var state_150511__$1 = state_150511;
return cljs.core.async.impl.ioc_helpers.return_chan(state_150511__$1,inst_150509);
} else {
if((state_val_150512 === (12))){
var inst_150475 = (state_150511[(7)]);
var inst_150499 = cljs.core.vec(inst_150475);
var state_150511__$1 = state_150511;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_150511__$1,(15),out,inst_150499);
} else {
if((state_val_150512 === (2))){
var state_150511__$1 = state_150511;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_150511__$1,(4),ch);
} else {
if((state_val_150512 === (11))){
var inst_150491 = (state_150511[(2)]);
var inst_150492 = (new Array(n));
var inst_150475 = inst_150492;
var inst_150476 = (0);
var state_150511__$1 = (function (){var statearr_150545 = state_150511;
(statearr_150545[(7)] = inst_150475);

(statearr_150545[(10)] = inst_150491);

(statearr_150545[(8)] = inst_150476);

return statearr_150545;
})();
var statearr_150546_151335 = state_150511__$1;
(statearr_150546_151335[(2)] = null);

(statearr_150546_151335[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150512 === (9))){
var inst_150475 = (state_150511[(7)]);
var inst_150489 = cljs.core.vec(inst_150475);
var state_150511__$1 = state_150511;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_150511__$1,(11),out,inst_150489);
} else {
if((state_val_150512 === (5))){
var inst_150475 = (state_150511[(7)]);
var inst_150484 = (state_150511[(11)]);
var inst_150479 = (state_150511[(9)]);
var inst_150476 = (state_150511[(8)]);
var inst_150483 = (inst_150475[inst_150476] = inst_150479);
var inst_150484__$1 = (inst_150476 + (1));
var inst_150485 = (inst_150484__$1 < n);
var state_150511__$1 = (function (){var statearr_150547 = state_150511;
(statearr_150547[(12)] = inst_150483);

(statearr_150547[(11)] = inst_150484__$1);

return statearr_150547;
})();
if(cljs.core.truth_(inst_150485)){
var statearr_150548_151337 = state_150511__$1;
(statearr_150548_151337[(1)] = (8));

} else {
var statearr_150549_151338 = state_150511__$1;
(statearr_150549_151338[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150512 === (14))){
var inst_150504 = (state_150511[(2)]);
var inst_150505 = cljs.core.async.close_BANG_(out);
var state_150511__$1 = (function (){var statearr_150551 = state_150511;
(statearr_150551[(13)] = inst_150504);

return statearr_150551;
})();
var statearr_150552_151339 = state_150511__$1;
(statearr_150552_151339[(2)] = inst_150505);

(statearr_150552_151339[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150512 === (10))){
var inst_150495 = (state_150511[(2)]);
var state_150511__$1 = state_150511;
var statearr_150553_151340 = state_150511__$1;
(statearr_150553_151340[(2)] = inst_150495);

(statearr_150553_151340[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150512 === (8))){
var inst_150475 = (state_150511[(7)]);
var inst_150484 = (state_150511[(11)]);
var tmp150550 = inst_150475;
var inst_150475__$1 = tmp150550;
var inst_150476 = inst_150484;
var state_150511__$1 = (function (){var statearr_150554 = state_150511;
(statearr_150554[(7)] = inst_150475__$1);

(statearr_150554[(8)] = inst_150476);

return statearr_150554;
})();
var statearr_150555_151341 = state_150511__$1;
(statearr_150555_151341[(2)] = null);

(statearr_150555_151341[(1)] = (2));


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
var statearr_150556 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_150556[(0)] = cljs$core$async$state_machine__39695__auto__);

(statearr_150556[(1)] = (1));

return statearr_150556;
});
var cljs$core$async$state_machine__39695__auto____1 = (function (state_150511){
while(true){
var ret_value__39696__auto__ = (function (){try{while(true){
var result__39697__auto__ = switch__39694__auto__(state_150511);
if(cljs.core.keyword_identical_QMARK_(result__39697__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39697__auto__;
}
break;
}
}catch (e150557){var ex__39698__auto__ = e150557;
var statearr_150558_151343 = state_150511;
(statearr_150558_151343[(2)] = ex__39698__auto__);


if(cljs.core.seq((state_150511[(4)]))){
var statearr_150559_151344 = state_150511;
(statearr_150559_151344[(1)] = cljs.core.first((state_150511[(4)])));

} else {
throw ex__39698__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__151345 = state_150511;
state_150511 = G__151345;
continue;
} else {
return ret_value__39696__auto__;
}
break;
}
});
cljs$core$async$state_machine__39695__auto__ = function(state_150511){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39695__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39695__auto____1.call(this,state_150511);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39695__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39695__auto____0;
cljs$core$async$state_machine__39695__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39695__auto____1;
return cljs$core$async$state_machine__39695__auto__;
})()
})();
var state__39771__auto__ = (function (){var statearr_150560 = f__39770__auto__();
(statearr_150560[(6)] = c__39769__auto___151322);

return statearr_150560;
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
var G__150562 = arguments.length;
switch (G__150562) {
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
var c__39769__auto___151348 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__39770__auto__ = (function (){var switch__39694__auto__ = (function (state_150607){
var state_val_150608 = (state_150607[(1)]);
if((state_val_150608 === (7))){
var inst_150603 = (state_150607[(2)]);
var state_150607__$1 = state_150607;
var statearr_150609_151349 = state_150607__$1;
(statearr_150609_151349[(2)] = inst_150603);

(statearr_150609_151349[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150608 === (1))){
var inst_150563 = [];
var inst_150564 = inst_150563;
var inst_150565 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_150607__$1 = (function (){var statearr_150610 = state_150607;
(statearr_150610[(7)] = inst_150564);

(statearr_150610[(8)] = inst_150565);

return statearr_150610;
})();
var statearr_150611_151350 = state_150607__$1;
(statearr_150611_151350[(2)] = null);

(statearr_150611_151350[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150608 === (4))){
var inst_150568 = (state_150607[(9)]);
var inst_150568__$1 = (state_150607[(2)]);
var inst_150569 = (inst_150568__$1 == null);
var inst_150570 = cljs.core.not(inst_150569);
var state_150607__$1 = (function (){var statearr_150612 = state_150607;
(statearr_150612[(9)] = inst_150568__$1);

return statearr_150612;
})();
if(inst_150570){
var statearr_150613_151352 = state_150607__$1;
(statearr_150613_151352[(1)] = (5));

} else {
var statearr_150614_151353 = state_150607__$1;
(statearr_150614_151353[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150608 === (15))){
var inst_150564 = (state_150607[(7)]);
var inst_150595 = cljs.core.vec(inst_150564);
var state_150607__$1 = state_150607;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_150607__$1,(18),out,inst_150595);
} else {
if((state_val_150608 === (13))){
var inst_150590 = (state_150607[(2)]);
var state_150607__$1 = state_150607;
var statearr_150615_151355 = state_150607__$1;
(statearr_150615_151355[(2)] = inst_150590);

(statearr_150615_151355[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150608 === (6))){
var inst_150564 = (state_150607[(7)]);
var inst_150592 = inst_150564.length;
var inst_150593 = (inst_150592 > (0));
var state_150607__$1 = state_150607;
if(cljs.core.truth_(inst_150593)){
var statearr_150616_151359 = state_150607__$1;
(statearr_150616_151359[(1)] = (15));

} else {
var statearr_150617_151360 = state_150607__$1;
(statearr_150617_151360[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150608 === (17))){
var inst_150600 = (state_150607[(2)]);
var inst_150601 = cljs.core.async.close_BANG_(out);
var state_150607__$1 = (function (){var statearr_150618 = state_150607;
(statearr_150618[(10)] = inst_150600);

return statearr_150618;
})();
var statearr_150619_151361 = state_150607__$1;
(statearr_150619_151361[(2)] = inst_150601);

(statearr_150619_151361[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150608 === (3))){
var inst_150605 = (state_150607[(2)]);
var state_150607__$1 = state_150607;
return cljs.core.async.impl.ioc_helpers.return_chan(state_150607__$1,inst_150605);
} else {
if((state_val_150608 === (12))){
var inst_150564 = (state_150607[(7)]);
var inst_150583 = cljs.core.vec(inst_150564);
var state_150607__$1 = state_150607;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_150607__$1,(14),out,inst_150583);
} else {
if((state_val_150608 === (2))){
var state_150607__$1 = state_150607;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_150607__$1,(4),ch);
} else {
if((state_val_150608 === (11))){
var inst_150564 = (state_150607[(7)]);
var inst_150572 = (state_150607[(11)]);
var inst_150568 = (state_150607[(9)]);
var inst_150580 = inst_150564.push(inst_150568);
var tmp150620 = inst_150564;
var inst_150564__$1 = tmp150620;
var inst_150565 = inst_150572;
var state_150607__$1 = (function (){var statearr_150622 = state_150607;
(statearr_150622[(12)] = inst_150580);

(statearr_150622[(7)] = inst_150564__$1);

(statearr_150622[(8)] = inst_150565);

return statearr_150622;
})();
var statearr_150627_151365 = state_150607__$1;
(statearr_150627_151365[(2)] = null);

(statearr_150627_151365[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150608 === (9))){
var inst_150565 = (state_150607[(8)]);
var inst_150576 = cljs.core.keyword_identical_QMARK_(inst_150565,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_150607__$1 = state_150607;
var statearr_150629_151366 = state_150607__$1;
(statearr_150629_151366[(2)] = inst_150576);

(statearr_150629_151366[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150608 === (5))){
var inst_150572 = (state_150607[(11)]);
var inst_150565 = (state_150607[(8)]);
var inst_150568 = (state_150607[(9)]);
var inst_150573 = (state_150607[(13)]);
var inst_150572__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_150568) : f.call(null,inst_150568));
var inst_150573__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_150572__$1,inst_150565);
var state_150607__$1 = (function (){var statearr_150630 = state_150607;
(statearr_150630[(11)] = inst_150572__$1);

(statearr_150630[(13)] = inst_150573__$1);

return statearr_150630;
})();
if(inst_150573__$1){
var statearr_150631_151367 = state_150607__$1;
(statearr_150631_151367[(1)] = (8));

} else {
var statearr_150632_151368 = state_150607__$1;
(statearr_150632_151368[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150608 === (14))){
var inst_150572 = (state_150607[(11)]);
var inst_150568 = (state_150607[(9)]);
var inst_150585 = (state_150607[(2)]);
var inst_150586 = [];
var inst_150587 = inst_150586.push(inst_150568);
var inst_150564 = inst_150586;
var inst_150565 = inst_150572;
var state_150607__$1 = (function (){var statearr_150633 = state_150607;
(statearr_150633[(14)] = inst_150585);

(statearr_150633[(15)] = inst_150587);

(statearr_150633[(7)] = inst_150564);

(statearr_150633[(8)] = inst_150565);

return statearr_150633;
})();
var statearr_150634_151369 = state_150607__$1;
(statearr_150634_151369[(2)] = null);

(statearr_150634_151369[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150608 === (16))){
var state_150607__$1 = state_150607;
var statearr_150635_151370 = state_150607__$1;
(statearr_150635_151370[(2)] = null);

(statearr_150635_151370[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150608 === (10))){
var inst_150578 = (state_150607[(2)]);
var state_150607__$1 = state_150607;
if(cljs.core.truth_(inst_150578)){
var statearr_150636_151371 = state_150607__$1;
(statearr_150636_151371[(1)] = (11));

} else {
var statearr_150637_151372 = state_150607__$1;
(statearr_150637_151372[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150608 === (18))){
var inst_150597 = (state_150607[(2)]);
var state_150607__$1 = state_150607;
var statearr_150638_151373 = state_150607__$1;
(statearr_150638_151373[(2)] = inst_150597);

(statearr_150638_151373[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150608 === (8))){
var inst_150573 = (state_150607[(13)]);
var state_150607__$1 = state_150607;
var statearr_150639_151374 = state_150607__$1;
(statearr_150639_151374[(2)] = inst_150573);

(statearr_150639_151374[(1)] = (10));


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
var statearr_150640 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_150640[(0)] = cljs$core$async$state_machine__39695__auto__);

(statearr_150640[(1)] = (1));

return statearr_150640;
});
var cljs$core$async$state_machine__39695__auto____1 = (function (state_150607){
while(true){
var ret_value__39696__auto__ = (function (){try{while(true){
var result__39697__auto__ = switch__39694__auto__(state_150607);
if(cljs.core.keyword_identical_QMARK_(result__39697__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39697__auto__;
}
break;
}
}catch (e150641){var ex__39698__auto__ = e150641;
var statearr_150642_151375 = state_150607;
(statearr_150642_151375[(2)] = ex__39698__auto__);


if(cljs.core.seq((state_150607[(4)]))){
var statearr_150643_151376 = state_150607;
(statearr_150643_151376[(1)] = cljs.core.first((state_150607[(4)])));

} else {
throw ex__39698__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__151377 = state_150607;
state_150607 = G__151377;
continue;
} else {
return ret_value__39696__auto__;
}
break;
}
});
cljs$core$async$state_machine__39695__auto__ = function(state_150607){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39695__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39695__auto____1.call(this,state_150607);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39695__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39695__auto____0;
cljs$core$async$state_machine__39695__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39695__auto____1;
return cljs$core$async$state_machine__39695__auto__;
})()
})();
var state__39771__auto__ = (function (){var statearr_150644 = f__39770__auto__();
(statearr_150644[(6)] = c__39769__auto___151348);

return statearr_150644;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39771__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
