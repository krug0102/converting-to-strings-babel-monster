goog.provide('sci.impl.vars');

/**
 * @interface
 */
sci.impl.vars.HasName = function(){};

var sci$impl$vars$HasName$getName$dyn_68988 = (function (_){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (sci.impl.vars.getName[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4522__auto__.call(null,_));
} else {
var m__4519__auto__ = (sci.impl.vars.getName["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4519__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("HasName.getName",_);
}
}
});
sci.impl.vars.getName = (function sci$impl$vars$getName(_){
if((((!((_ == null)))) && ((!((_.sci$impl$vars$HasName$getName$arity$1 == null)))))){
return _.sci$impl$vars$HasName$getName$arity$1(_);
} else {
return sci$impl$vars$HasName$getName$dyn_68988(_);
}
});


/**
* @constructor
 * @implements {sci.impl.vars.HasName}
 * @implements {cljs.core.IMeta}
*/
sci.impl.vars.SciNamespace = (function (name,meta){
this.name = name;
this.meta = meta;
this.cljs$lang$protocol_mask$partition0$ = 131072;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(sci.impl.vars.SciNamespace.prototype.toString = (function (){
var self__ = this;
var _ = this;
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.name);
}));

(sci.impl.vars.SciNamespace.prototype.sci$impl$vars$HasName$ = cljs.core.PROTOCOL_SENTINEL);

(sci.impl.vars.SciNamespace.prototype.sci$impl$vars$HasName$getName$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.name;
}));

(sci.impl.vars.SciNamespace.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.meta;
}));

(sci.impl.vars.SciNamespace.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null),cljs.core.with_meta(new cljs.core.Symbol(null,"meta","meta",-1154898805,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
}));

(sci.impl.vars.SciNamespace.cljs$lang$type = true);

(sci.impl.vars.SciNamespace.cljs$lang$ctorStr = "sci.impl.vars/SciNamespace");

(sci.impl.vars.SciNamespace.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"sci.impl.vars/SciNamespace");
}));

/**
 * Positional factory function for sci.impl.vars/SciNamespace.
 */
sci.impl.vars.__GT_SciNamespace = (function sci$impl$vars$__GT_SciNamespace(name,meta){
return (new sci.impl.vars.SciNamespace(name,meta));
});

sci.impl.vars.namespace_QMARK_ = (function sci$impl$vars$namespace_QMARK_(x){
return (x instanceof sci.impl.vars.SciNamespace);
});

/**
* @constructor
*/
sci.impl.vars.Frame = (function (bindings,prev){
this.bindings = bindings;
this.prev = prev;
});

(sci.impl.vars.Frame.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"bindings","bindings",-1383038577,null),new cljs.core.Symbol(null,"prev","prev",43462301,null)], null);
}));

(sci.impl.vars.Frame.cljs$lang$type = true);

(sci.impl.vars.Frame.cljs$lang$ctorStr = "sci.impl.vars/Frame");

(sci.impl.vars.Frame.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"sci.impl.vars/Frame");
}));

/**
 * Positional factory function for sci.impl.vars/Frame.
 */
sci.impl.vars.__GT_Frame = (function sci$impl$vars$__GT_Frame(bindings,prev){
return (new sci.impl.vars.Frame(bindings,prev));
});

sci.impl.vars.top_frame = (new sci.impl.vars.Frame(cljs.core.PersistentArrayMap.EMPTY,null));
sci.impl.vars.dvals = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(sci.impl.vars.top_frame);
sci.impl.vars.get_thread_binding_frame = (function sci$impl$vars$get_thread_binding_frame(){
return cljs.core.deref(sci.impl.vars.dvals);
});

/**
* @constructor
 * @implements {sci.impl.types.IBox}
*/
sci.impl.vars.TBox = (function (thread,val){
this.thread = thread;
this.val = val;
});
(sci.impl.vars.TBox.prototype.sci$impl$types$IBox$ = cljs.core.PROTOCOL_SENTINEL);

(sci.impl.vars.TBox.prototype.sci$impl$types$IBox$setVal$arity$2 = (function (this$,v){
var self__ = this;
var this$__$1 = this;
return (self__.val = v);
}));

(sci.impl.vars.TBox.prototype.sci$impl$types$IBox$getVal$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.val;
}));

(sci.impl.vars.TBox.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"thread","thread",-1707434245,null),cljs.core.with_meta(new cljs.core.Symbol(null,"val","val",1769233139,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
}));

(sci.impl.vars.TBox.cljs$lang$type = true);

(sci.impl.vars.TBox.cljs$lang$ctorStr = "sci.impl.vars/TBox");

(sci.impl.vars.TBox.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"sci.impl.vars/TBox");
}));

/**
 * Positional factory function for sci.impl.vars/TBox.
 */
sci.impl.vars.__GT_TBox = (function sci$impl$vars$__GT_TBox(thread,val){
return (new sci.impl.vars.TBox(thread,val));
});

sci.impl.vars.clone_thread_binding_frame = (function sci$impl$vars$clone_thread_binding_frame(){
var f = cljs.core.deref(sci.impl.vars.dvals);
return (new sci.impl.vars.Frame(f.bindings,null));
});
sci.impl.vars.reset_thread_binding_frame = (function sci$impl$vars$reset_thread_binding_frame(frame){
return cljs.core.reset_BANG_(sci.impl.vars.dvals,frame);
});
sci.impl.vars.dynamic_var_QMARK_ = (function sci$impl$vars$dynamic_var_QMARK_(v){
var and__4221__auto__ = (sci.impl.vars.var_QMARK_.cljs$core$IFn$_invoke$arity$1 ? sci.impl.vars.var_QMARK_.cljs$core$IFn$_invoke$arity$1(v) : sci.impl.vars.var_QMARK_.call(null,v));
if(cljs.core.truth_(and__4221__auto__)){
return new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v));
} else {
return and__4221__auto__;
}
});

/**
 * @interface
 */
sci.impl.vars.IVar = function(){};

var sci$impl$vars$IVar$bindRoot$dyn_68994 = (function (this$,v){
var x__4521__auto__ = (((this$ == null))?null:this$);
var m__4522__auto__ = (sci.impl.vars.bindRoot[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(this$,v) : m__4522__auto__.call(null,this$,v));
} else {
var m__4519__auto__ = (sci.impl.vars.bindRoot["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(this$,v) : m__4519__auto__.call(null,this$,v));
} else {
throw cljs.core.missing_protocol("IVar.bindRoot",this$);
}
}
});
sci.impl.vars.bindRoot = (function sci$impl$vars$bindRoot(this$,v){
if((((!((this$ == null)))) && ((!((this$.sci$impl$vars$IVar$bindRoot$arity$2 == null)))))){
return this$.sci$impl$vars$IVar$bindRoot$arity$2(this$,v);
} else {
return sci$impl$vars$IVar$bindRoot$dyn_68994(this$,v);
}
});

var sci$impl$vars$IVar$getRawRoot$dyn_68996 = (function (this$){
var x__4521__auto__ = (((this$ == null))?null:this$);
var m__4522__auto__ = (sci.impl.vars.getRawRoot[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4522__auto__.call(null,this$));
} else {
var m__4519__auto__ = (sci.impl.vars.getRawRoot["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4519__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IVar.getRawRoot",this$);
}
}
});
sci.impl.vars.getRawRoot = (function sci$impl$vars$getRawRoot(this$){
if((((!((this$ == null)))) && ((!((this$.sci$impl$vars$IVar$getRawRoot$arity$1 == null)))))){
return this$.sci$impl$vars$IVar$getRawRoot$arity$1(this$);
} else {
return sci$impl$vars$IVar$getRawRoot$dyn_68996(this$);
}
});

var sci$impl$vars$IVar$toSymbol$dyn_68998 = (function (this$){
var x__4521__auto__ = (((this$ == null))?null:this$);
var m__4522__auto__ = (sci.impl.vars.toSymbol[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4522__auto__.call(null,this$));
} else {
var m__4519__auto__ = (sci.impl.vars.toSymbol["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4519__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IVar.toSymbol",this$);
}
}
});
sci.impl.vars.toSymbol = (function sci$impl$vars$toSymbol(this$){
if((((!((this$ == null)))) && ((!((this$.sci$impl$vars$IVar$toSymbol$arity$1 == null)))))){
return this$.sci$impl$vars$IVar$toSymbol$arity$1(this$);
} else {
return sci$impl$vars$IVar$toSymbol$dyn_68998(this$);
}
});

var sci$impl$vars$IVar$isMacro$dyn_69000 = (function (this$){
var x__4521__auto__ = (((this$ == null))?null:this$);
var m__4522__auto__ = (sci.impl.vars.isMacro[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4522__auto__.call(null,this$));
} else {
var m__4519__auto__ = (sci.impl.vars.isMacro["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4519__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IVar.isMacro",this$);
}
}
});
sci.impl.vars.isMacro = (function sci$impl$vars$isMacro(this$){
if((((!((this$ == null)))) && ((!((this$.sci$impl$vars$IVar$isMacro$arity$1 == null)))))){
return this$.sci$impl$vars$IVar$isMacro$arity$1(this$);
} else {
return sci$impl$vars$IVar$isMacro$dyn_69000(this$);
}
});

var sci$impl$vars$IVar$hasRoot$dyn_69005 = (function (this$){
var x__4521__auto__ = (((this$ == null))?null:this$);
var m__4522__auto__ = (sci.impl.vars.hasRoot[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4522__auto__.call(null,this$));
} else {
var m__4519__auto__ = (sci.impl.vars.hasRoot["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4519__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IVar.hasRoot",this$);
}
}
});
sci.impl.vars.hasRoot = (function sci$impl$vars$hasRoot(this$){
if((((!((this$ == null)))) && ((!((this$.sci$impl$vars$IVar$hasRoot$arity$1 == null)))))){
return this$.sci$impl$vars$IVar$hasRoot$arity$1(this$);
} else {
return sci$impl$vars$IVar$hasRoot$dyn_69005(this$);
}
});

var sci$impl$vars$IVar$setThreadBound$dyn_69008 = (function (this$,v){
var x__4521__auto__ = (((this$ == null))?null:this$);
var m__4522__auto__ = (sci.impl.vars.setThreadBound[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(this$,v) : m__4522__auto__.call(null,this$,v));
} else {
var m__4519__auto__ = (sci.impl.vars.setThreadBound["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(this$,v) : m__4519__auto__.call(null,this$,v));
} else {
throw cljs.core.missing_protocol("IVar.setThreadBound",this$);
}
}
});
sci.impl.vars.setThreadBound = (function sci$impl$vars$setThreadBound(this$,v){
if((((!((this$ == null)))) && ((!((this$.sci$impl$vars$IVar$setThreadBound$arity$2 == null)))))){
return this$.sci$impl$vars$IVar$setThreadBound$arity$2(this$,v);
} else {
return sci$impl$vars$IVar$setThreadBound$dyn_69008(this$,v);
}
});

var sci$impl$vars$IVar$unbind$dyn_69009 = (function (this$){
var x__4521__auto__ = (((this$ == null))?null:this$);
var m__4522__auto__ = (sci.impl.vars.unbind[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4522__auto__.call(null,this$));
} else {
var m__4519__auto__ = (sci.impl.vars.unbind["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4519__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IVar.unbind",this$);
}
}
});
sci.impl.vars.unbind = (function sci$impl$vars$unbind(this$){
if((((!((this$ == null)))) && ((!((this$.sci$impl$vars$IVar$unbind$arity$1 == null)))))){
return this$.sci$impl$vars$IVar$unbind$arity$1(this$);
} else {
return sci$impl$vars$IVar$unbind$dyn_69009(this$);
}
});

sci.impl.vars.push_thread_bindings = (function sci$impl$vars$push_thread_bindings(bindings){
var frame = sci.impl.vars.get_thread_binding_frame();
var bmap = frame.bindings;
var bmap__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__68680){
var vec__68681 = p__68680;
var var_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68681,(0),null);
var val_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68681,(1),null);
if(cljs.core.truth_(sci.impl.vars.dynamic_var_QMARK_(var_STAR_))){
} else {
throw (new Error(["Can't dynamically bind non-dynamic var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(var_STAR_)].join('')));
}

sci.impl.vars.setThreadBound(var_STAR_,true);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,var_STAR_,(new sci.impl.vars.TBox(null,val_STAR_)));
}),bmap,bindings);
return sci.impl.vars.reset_thread_binding_frame((new sci.impl.vars.Frame(bmap__$1,frame)));
});
sci.impl.vars.pop_thread_bindings = (function sci$impl$vars$pop_thread_bindings(){
var temp__5751__auto__ = sci.impl.vars.get_thread_binding_frame().prev;
if(cljs.core.truth_(temp__5751__auto__)){
var f = temp__5751__auto__;
if((sci.impl.vars.top_frame === f)){
return cljs.core.reset_BANG_(sci.impl.vars.dvals,sci.impl.vars.top_frame);
} else {
return sci.impl.vars.reset_thread_binding_frame(f);
}
} else {
throw (new Error("No frame to pop."));
}
});
sci.impl.vars.get_thread_bindings = (function sci$impl$vars$get_thread_bindings(){
var f = sci.impl.vars.get_thread_binding_frame();
var ret = cljs.core.PersistentArrayMap.EMPTY;
var kvs = cljs.core.seq(f.bindings);
while(true){
if(kvs){
var vec__68695 = cljs.core.first(kvs);
var var_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68695,(0),null);
var tbox = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68695,(1),null);
var tbox_val = tbox.sci$impl$types$IBox$getVal$arity$1(null);
var G__69019 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,var_STAR_,tbox_val);
var G__69020 = cljs.core.next(kvs);
ret = G__69019;
kvs = G__69020;
continue;
} else {
return ret;
}
break;
}
});
sci.impl.vars.get_thread_binding = (function sci$impl$vars$get_thread_binding(sci_var){
var temp__5753__auto__ = cljs.core.deref(sci.impl.vars.dvals);
if(cljs.core.truth_(temp__5753__auto__)){
var f = temp__5753__auto__;
var temp__5753__auto____$1 = f.bindings;
if(cljs.core.truth_(temp__5753__auto____$1)){
var bindings = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(bindings,sci_var);
} else {
return null;
}
} else {
return null;
}
});
sci.impl.vars.binding_conveyor_fn = (function sci$impl$vars$binding_conveyor_fn(f){
var frame = sci.impl.vars.clone_thread_binding_frame();
return (function() {
var G__69023 = null;
var G__69023__0 = (function (){
sci.impl.vars.reset_thread_binding_frame(frame);

return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
});
var G__69023__1 = (function (x){
sci.impl.vars.reset_thread_binding_frame(frame);

return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x));
});
var G__69023__2 = (function (x,y){
sci.impl.vars.reset_thread_binding_frame(frame);

return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(x,y) : f.call(null,x,y));
});
var G__69023__3 = (function (x,y,z){
sci.impl.vars.reset_thread_binding_frame(frame);

return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(x,y,z) : f.call(null,x,y,z));
});
var G__69023__4 = (function() { 
var G__69026__delegate = function (x,y,z,args){
sci.impl.vars.reset_thread_binding_frame(frame);

return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,x,y,z,args);
};
var G__69026 = function (x,y,z,var_args){
var args = null;
if (arguments.length > 3) {
var G__69028__i = 0, G__69028__a = new Array(arguments.length -  3);
while (G__69028__i < G__69028__a.length) {G__69028__a[G__69028__i] = arguments[G__69028__i + 3]; ++G__69028__i;}
  args = new cljs.core.IndexedSeq(G__69028__a,0,null);
} 
return G__69026__delegate.call(this,x,y,z,args);};
G__69026.cljs$lang$maxFixedArity = 3;
G__69026.cljs$lang$applyTo = (function (arglist__69030){
var x = cljs.core.first(arglist__69030);
arglist__69030 = cljs.core.next(arglist__69030);
var y = cljs.core.first(arglist__69030);
arglist__69030 = cljs.core.next(arglist__69030);
var z = cljs.core.first(arglist__69030);
var args = cljs.core.rest(arglist__69030);
return G__69026__delegate(x,y,z,args);
});
G__69026.cljs$core$IFn$_invoke$arity$variadic = G__69026__delegate;
return G__69026;
})()
;
G__69023 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__69023__0.call(this);
case 1:
return G__69023__1.call(this,x);
case 2:
return G__69023__2.call(this,x,y);
case 3:
return G__69023__3.call(this,x,y,z);
default:
var G__69031 = null;
if (arguments.length > 3) {
var G__69032__i = 0, G__69032__a = new Array(arguments.length -  3);
while (G__69032__i < G__69032__a.length) {G__69032__a[G__69032__i] = arguments[G__69032__i + 3]; ++G__69032__i;}
G__69031 = new cljs.core.IndexedSeq(G__69032__a,0,null);
}
return G__69023__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, G__69031);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__69023.cljs$lang$maxFixedArity = 3;
G__69023.cljs$lang$applyTo = G__69023__4.cljs$lang$applyTo;
G__69023.cljs$core$IFn$_invoke$arity$0 = G__69023__0;
G__69023.cljs$core$IFn$_invoke$arity$1 = G__69023__1;
G__69023.cljs$core$IFn$_invoke$arity$2 = G__69023__2;
G__69023.cljs$core$IFn$_invoke$arity$3 = G__69023__3;
G__69023.cljs$core$IFn$_invoke$arity$variadic = G__69023__4.cljs$core$IFn$_invoke$arity$variadic;
return G__69023;
})()
});
sci.impl.vars.throw_unbound_call_exception = (function sci$impl$vars$throw_unbound_call_exception(the_var){
throw (new Error(["Attempting to call unbound fn: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(the_var)].join('')));
});

/**
* @constructor
 * @implements {cljs.core.IFn}
*/
sci.impl.vars.SciUnbound = (function (the_var){
this.the_var = the_var;
this.cljs$lang$protocol_mask$partition0$ = 1;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(sci.impl.vars.SciUnbound.prototype.toString = (function (){
var self__ = this;
var _ = this;
return ["Unbound: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.the_var)].join('');
}));

(sci.impl.vars.SciUnbound.prototype.call = (function() {
var G__69034 = null;
var G__69034__1 = (function (self__){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
});
var G__69034__2 = (function (self__,a){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
});
var G__69034__3 = (function (self__,a,b){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
});
var G__69034__4 = (function (self__,a,b,c){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
});
var G__69034__5 = (function (self__,a,b,c,d){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
});
var G__69034__6 = (function (self__,a,b,c,d,e){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
});
var G__69034__7 = (function (self__,a,b,c,d,e,f){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
});
var G__69034__8 = (function (self__,a,b,c,d,e,f,g){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
});
var G__69034__9 = (function (self__,a,b,c,d,e,f,g,h){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
});
var G__69034__10 = (function (self__,a,b,c,d,e,f,g,h,i){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
});
var G__69034__11 = (function (self__,a,b,c,d,e,f,g,h,i,j){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
});
var G__69034__12 = (function (self__,a,b,c,d,e,f,g,h,i,j,k){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
});
var G__69034__13 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
});
var G__69034__14 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
});
var G__69034__15 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
});
var G__69034__16 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
});
var G__69034__17 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
});
var G__69034__18 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
});
var G__69034__19 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
});
var G__69034__20 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
});
var G__69034__21 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
});
var G__69034__22 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
});
G__69034 = function(self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
switch(arguments.length){
case 1:
return G__69034__1.call(this,self__);
case 2:
return G__69034__2.call(this,self__,a);
case 3:
return G__69034__3.call(this,self__,a,b);
case 4:
return G__69034__4.call(this,self__,a,b,c);
case 5:
return G__69034__5.call(this,self__,a,b,c,d);
case 6:
return G__69034__6.call(this,self__,a,b,c,d,e);
case 7:
return G__69034__7.call(this,self__,a,b,c,d,e,f);
case 8:
return G__69034__8.call(this,self__,a,b,c,d,e,f,g);
case 9:
return G__69034__9.call(this,self__,a,b,c,d,e,f,g,h);
case 10:
return G__69034__10.call(this,self__,a,b,c,d,e,f,g,h,i);
case 11:
return G__69034__11.call(this,self__,a,b,c,d,e,f,g,h,i,j);
case 12:
return G__69034__12.call(this,self__,a,b,c,d,e,f,g,h,i,j,k);
case 13:
return G__69034__13.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l);
case 14:
return G__69034__14.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m);
case 15:
return G__69034__15.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case 16:
return G__69034__16.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case 17:
return G__69034__17.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case 18:
return G__69034__18.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case 19:
return G__69034__19.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r);
case 20:
return G__69034__20.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s);
case 21:
return G__69034__21.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
case 22:
return G__69034__22.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__69034.cljs$core$IFn$_invoke$arity$1 = G__69034__1;
G__69034.cljs$core$IFn$_invoke$arity$2 = G__69034__2;
G__69034.cljs$core$IFn$_invoke$arity$3 = G__69034__3;
G__69034.cljs$core$IFn$_invoke$arity$4 = G__69034__4;
G__69034.cljs$core$IFn$_invoke$arity$5 = G__69034__5;
G__69034.cljs$core$IFn$_invoke$arity$6 = G__69034__6;
G__69034.cljs$core$IFn$_invoke$arity$7 = G__69034__7;
G__69034.cljs$core$IFn$_invoke$arity$8 = G__69034__8;
G__69034.cljs$core$IFn$_invoke$arity$9 = G__69034__9;
G__69034.cljs$core$IFn$_invoke$arity$10 = G__69034__10;
G__69034.cljs$core$IFn$_invoke$arity$11 = G__69034__11;
G__69034.cljs$core$IFn$_invoke$arity$12 = G__69034__12;
G__69034.cljs$core$IFn$_invoke$arity$13 = G__69034__13;
G__69034.cljs$core$IFn$_invoke$arity$14 = G__69034__14;
G__69034.cljs$core$IFn$_invoke$arity$15 = G__69034__15;
G__69034.cljs$core$IFn$_invoke$arity$16 = G__69034__16;
G__69034.cljs$core$IFn$_invoke$arity$17 = G__69034__17;
G__69034.cljs$core$IFn$_invoke$arity$18 = G__69034__18;
G__69034.cljs$core$IFn$_invoke$arity$19 = G__69034__19;
G__69034.cljs$core$IFn$_invoke$arity$20 = G__69034__20;
G__69034.cljs$core$IFn$_invoke$arity$21 = G__69034__21;
G__69034.cljs$core$IFn$_invoke$arity$22 = G__69034__22;
return G__69034;
})()
);

(sci.impl.vars.SciUnbound.prototype.apply = (function (self__,args68706){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args68706)));
}));

(sci.impl.vars.SciUnbound.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var _ = this;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
}));

(sci.impl.vars.SciUnbound.prototype.cljs$core$IFn$_invoke$arity$1 = (function (a){
var self__ = this;
var _ = this;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
}));

(sci.impl.vars.SciUnbound.prototype.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
var self__ = this;
var _ = this;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
}));

(sci.impl.vars.SciUnbound.prototype.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
var self__ = this;
var _ = this;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
}));

(sci.impl.vars.SciUnbound.prototype.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
var self__ = this;
var _ = this;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
}));

(sci.impl.vars.SciUnbound.prototype.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){
var self__ = this;
var _ = this;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
}));

(sci.impl.vars.SciUnbound.prototype.cljs$core$IFn$_invoke$arity$6 = (function (a,b,c,d,e,f){
var self__ = this;
var _ = this;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
}));

(sci.impl.vars.SciUnbound.prototype.cljs$core$IFn$_invoke$arity$7 = (function (a,b,c,d,e,f,g){
var self__ = this;
var _ = this;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
}));

(sci.impl.vars.SciUnbound.prototype.cljs$core$IFn$_invoke$arity$8 = (function (a,b,c,d,e,f,g,h){
var self__ = this;
var _ = this;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
}));

(sci.impl.vars.SciUnbound.prototype.cljs$core$IFn$_invoke$arity$9 = (function (a,b,c,d,e,f,g,h,i){
var self__ = this;
var _ = this;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
}));

(sci.impl.vars.SciUnbound.prototype.cljs$core$IFn$_invoke$arity$10 = (function (a,b,c,d,e,f,g,h,i,j){
var self__ = this;
var _ = this;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
}));

(sci.impl.vars.SciUnbound.prototype.cljs$core$IFn$_invoke$arity$11 = (function (a,b,c,d,e,f,g,h,i,j,k){
var self__ = this;
var _ = this;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
}));

(sci.impl.vars.SciUnbound.prototype.cljs$core$IFn$_invoke$arity$12 = (function (a,b,c,d,e,f,g,h,i,j,k,l){
var self__ = this;
var _ = this;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
}));

(sci.impl.vars.SciUnbound.prototype.cljs$core$IFn$_invoke$arity$13 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m){
var self__ = this;
var _ = this;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
}));

(sci.impl.vars.SciUnbound.prototype.cljs$core$IFn$_invoke$arity$14 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n){
var self__ = this;
var _ = this;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
}));

(sci.impl.vars.SciUnbound.prototype.cljs$core$IFn$_invoke$arity$15 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
var self__ = this;
var _ = this;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
}));

(sci.impl.vars.SciUnbound.prototype.cljs$core$IFn$_invoke$arity$16 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
var self__ = this;
var _ = this;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
}));

(sci.impl.vars.SciUnbound.prototype.cljs$core$IFn$_invoke$arity$17 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
var self__ = this;
var _ = this;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
}));

(sci.impl.vars.SciUnbound.prototype.cljs$core$IFn$_invoke$arity$18 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){
var self__ = this;
var _ = this;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
}));

(sci.impl.vars.SciUnbound.prototype.cljs$core$IFn$_invoke$arity$19 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){
var self__ = this;
var _ = this;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
}));

(sci.impl.vars.SciUnbound.prototype.cljs$core$IFn$_invoke$arity$20 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){
var self__ = this;
var _ = this;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
}));

(sci.impl.vars.SciUnbound.prototype.cljs$core$IFn$_invoke$arity$21 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
var self__ = this;
var _ = this;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
}));

(sci.impl.vars.SciUnbound.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"the-var","the-var",-1226020156,null)], null);
}));

(sci.impl.vars.SciUnbound.cljs$lang$type = true);

(sci.impl.vars.SciUnbound.cljs$lang$ctorStr = "sci.impl.vars/SciUnbound");

(sci.impl.vars.SciUnbound.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"sci.impl.vars/SciUnbound");
}));

/**
 * Positional factory function for sci.impl.vars/SciUnbound.
 */
sci.impl.vars.__GT_SciUnbound = (function sci$impl$vars$__GT_SciUnbound(the_var){
return (new sci.impl.vars.SciUnbound(the_var));
});

sci.impl.vars.built_in_var_QMARK_ = (function sci$impl$vars$built_in_var_QMARK_(var_meta){
return new cljs.core.Keyword("sci.impl","built-in","sci.impl/built-in",1011824843).cljs$core$IFn$_invoke$arity$1(var_meta);
});

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {sci.impl.vars.HasName}
 * @implements {cljs.core.IMeta}
 * @implements {sci.impl.vars.IVar}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {sci.impl.types.IBox}
*/
sci.impl.vars.SciVar = (function (root,sym,meta,thread_bound){
this.root = root;
this.sym = sym;
this.meta = meta;
this.thread_bound = thread_bound;
this.cljs$lang$protocol_mask$partition0$ = 2147647489;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(sci.impl.vars.SciVar.prototype.sci$impl$vars$HasName$ = cljs.core.PROTOCOL_SENTINEL);

(sci.impl.vars.SciVar.prototype.sci$impl$vars$HasName$getName$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.sym;
}));

(sci.impl.vars.SciVar.prototype.sci$impl$vars$IVar$ = cljs.core.PROTOCOL_SENTINEL);

(sci.impl.vars.SciVar.prototype.sci$impl$vars$IVar$bindRoot$arity$2 = (function (this$,v){
var self__ = this;
var this$__$1 = this;
var vm__67894__auto__ = self__.meta;
if(cljs.core.truth_((function (){var or__4223__auto__ = sci.impl.unrestrict._STAR_unrestricted_STAR_;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.not(new cljs.core.Keyword("sci.impl","built-in","sci.impl/built-in",1011824843).cljs$core$IFn$_invoke$arity$1(vm__67894__auto__));
}
})())){
return (this$__$1.root = v);
} else {
var the_var__67895__auto__ = this$__$1;
var ns__67896__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(vm__67894__auto__);
var ns_name__67897__auto__ = sci.impl.vars.getName(ns__67896__auto__);
var name__67898__auto__ = the_var__67895__auto__.sci$impl$vars$HasName$getName$arity$1(null);
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Built-in var #'",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns_name__67897__auto__),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__67898__auto__)," is read-only."].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"var","var",-769682797),this$__$1], null));
}
}));

(sci.impl.vars.SciVar.prototype.sci$impl$vars$IVar$getRawRoot$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.root;
}));

(sci.impl.vars.SciVar.prototype.sci$impl$vars$IVar$toSymbol$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.sym;
}));

(sci.impl.vars.SciVar.prototype.sci$impl$vars$IVar$isMacro$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword("sci","macro","sci/macro",-868536151).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(self__.root));
}));

(sci.impl.vars.SciVar.prototype.sci$impl$vars$IVar$setThreadBound$arity$2 = (function (this$,v){
var self__ = this;
var this$__$1 = this;
return (this$__$1.thread_bound = v);
}));

(sci.impl.vars.SciVar.prototype.sci$impl$vars$IVar$unbind$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var vm__67894__auto__ = self__.meta;
if(cljs.core.truth_((function (){var or__4223__auto__ = sci.impl.unrestrict._STAR_unrestricted_STAR_;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.not(new cljs.core.Keyword("sci.impl","built-in","sci.impl/built-in",1011824843).cljs$core$IFn$_invoke$arity$1(vm__67894__auto__));
}
})())){
return (this$__$1.root = (new sci.impl.vars.SciUnbound(this$__$1)));
} else {
var the_var__67895__auto__ = this$__$1;
var ns__67896__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(vm__67894__auto__);
var ns_name__67897__auto__ = sci.impl.vars.getName(ns__67896__auto__);
var name__67898__auto__ = the_var__67895__auto__.sci$impl$vars$HasName$getName$arity$1(null);
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Built-in var #'",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns_name__67897__auto__),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__67898__auto__)," is read-only."].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"var","var",-769682797),this$__$1], null));
}
}));

(sci.impl.vars.SciVar.prototype.sci$impl$vars$IVar$hasRoot$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (!((self__.root instanceof sci.impl.vars.SciUnbound)));
}));

(sci.impl.vars.SciVar.prototype.sci$impl$types$IBox$ = cljs.core.PROTOCOL_SENTINEL);

(sci.impl.vars.SciVar.prototype.sci$impl$types$IBox$setVal$arity$2 = (function (this$,v){
var self__ = this;
var this$__$1 = this;
var temp__5751__auto__ = sci.impl.vars.get_thread_binding(this$__$1);
if(cljs.core.truth_(temp__5751__auto__)){
var b = temp__5751__auto__;
return sci.impl.types.setVal(b,v);
} else {
throw (new Error(["Can't change/establish root binding of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$__$1)," with set"].join('')));
}
}));

(sci.impl.vars.SciVar.prototype.sci$impl$types$IBox$getVal$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.root;
}));

(sci.impl.vars.SciVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(self__.thread_bound)){
var temp__5751__auto__ = sci.impl.vars.get_thread_binding(this$__$1);
if(cljs.core.truth_(temp__5751__auto__)){
var tbox = temp__5751__auto__;
return sci.impl.types.getVal(tbox);
} else {
return self__.root;
}
} else {
return self__.root;
}
}));

(sci.impl.vars.SciVar.prototype.toString = (function (){
var self__ = this;
var _ = this;
return ["#'",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.sym)].join('');
}));

(sci.impl.vars.SciVar.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,writer,opts){
var self__ = this;
var a__$1 = this;
cljs.core._write(writer,"#'");

return cljs.core.pr_writer(self__.sym,writer,opts);
}));

(sci.impl.vars.SciVar.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.meta;
}));

(sci.impl.vars.SciVar.prototype.call = (function() {
var G__69084 = null;
var G__69084__1 = (function (self__){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
var fexpr__68824 = cljs.core.deref(this$);
return (fexpr__68824.cljs$core$IFn$_invoke$arity$0 ? fexpr__68824.cljs$core$IFn$_invoke$arity$0() : fexpr__68824.call(null));
});
var G__69084__2 = (function (self__,a){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
var fexpr__68825 = cljs.core.deref(this$);
return (fexpr__68825.cljs$core$IFn$_invoke$arity$1 ? fexpr__68825.cljs$core$IFn$_invoke$arity$1(a) : fexpr__68825.call(null,a));
});
var G__69084__3 = (function (self__,a,b){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
var fexpr__68827 = cljs.core.deref(this$);
return (fexpr__68827.cljs$core$IFn$_invoke$arity$2 ? fexpr__68827.cljs$core$IFn$_invoke$arity$2(a,b) : fexpr__68827.call(null,a,b));
});
var G__69084__4 = (function (self__,a,b,c){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
var fexpr__68829 = cljs.core.deref(this$);
return (fexpr__68829.cljs$core$IFn$_invoke$arity$3 ? fexpr__68829.cljs$core$IFn$_invoke$arity$3(a,b,c) : fexpr__68829.call(null,a,b,c));
});
var G__69084__5 = (function (self__,a,b,c,d){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
var fexpr__68832 = cljs.core.deref(this$);
return (fexpr__68832.cljs$core$IFn$_invoke$arity$4 ? fexpr__68832.cljs$core$IFn$_invoke$arity$4(a,b,c,d) : fexpr__68832.call(null,a,b,c,d));
});
var G__69084__6 = (function (self__,a,b,c,d,e){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
var fexpr__68834 = cljs.core.deref(this$);
return (fexpr__68834.cljs$core$IFn$_invoke$arity$5 ? fexpr__68834.cljs$core$IFn$_invoke$arity$5(a,b,c,d,e) : fexpr__68834.call(null,a,b,c,d,e));
});
var G__69084__7 = (function (self__,a,b,c,d,e,f){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
var fexpr__68836 = cljs.core.deref(this$);
return (fexpr__68836.cljs$core$IFn$_invoke$arity$6 ? fexpr__68836.cljs$core$IFn$_invoke$arity$6(a,b,c,d,e,f) : fexpr__68836.call(null,a,b,c,d,e,f));
});
var G__69084__8 = (function (self__,a,b,c,d,e,f,g){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
var fexpr__68837 = cljs.core.deref(this$);
return (fexpr__68837.cljs$core$IFn$_invoke$arity$7 ? fexpr__68837.cljs$core$IFn$_invoke$arity$7(a,b,c,d,e,f,g) : fexpr__68837.call(null,a,b,c,d,e,f,g));
});
var G__69084__9 = (function (self__,a,b,c,d,e,f,g,h){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
var fexpr__68840 = cljs.core.deref(this$);
return (fexpr__68840.cljs$core$IFn$_invoke$arity$8 ? fexpr__68840.cljs$core$IFn$_invoke$arity$8(a,b,c,d,e,f,g,h) : fexpr__68840.call(null,a,b,c,d,e,f,g,h));
});
var G__69084__10 = (function (self__,a,b,c,d,e,f,g,h,i){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
var fexpr__68842 = cljs.core.deref(this$);
return (fexpr__68842.cljs$core$IFn$_invoke$arity$9 ? fexpr__68842.cljs$core$IFn$_invoke$arity$9(a,b,c,d,e,f,g,h,i) : fexpr__68842.call(null,a,b,c,d,e,f,g,h,i));
});
var G__69084__11 = (function (self__,a,b,c,d,e,f,g,h,i,j){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
var fexpr__68845 = cljs.core.deref(this$);
return (fexpr__68845.cljs$core$IFn$_invoke$arity$10 ? fexpr__68845.cljs$core$IFn$_invoke$arity$10(a,b,c,d,e,f,g,h,i,j) : fexpr__68845.call(null,a,b,c,d,e,f,g,h,i,j));
});
var G__69084__12 = (function (self__,a,b,c,d,e,f,g,h,i,j,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
var fexpr__68847 = cljs.core.deref(this$);
return (fexpr__68847.cljs$core$IFn$_invoke$arity$11 ? fexpr__68847.cljs$core$IFn$_invoke$arity$11(a,b,c,d,e,f,g,h,i,j,k) : fexpr__68847.call(null,a,b,c,d,e,f,g,h,i,j,k));
});
var G__69084__13 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
var fexpr__68849 = cljs.core.deref(this$);
return (fexpr__68849.cljs$core$IFn$_invoke$arity$12 ? fexpr__68849.cljs$core$IFn$_invoke$arity$12(a,b,c,d,e,f,g,h,i,j,k,l) : fexpr__68849.call(null,a,b,c,d,e,f,g,h,i,j,k,l));
});
var G__69084__14 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
var fexpr__68851 = cljs.core.deref(this$);
return (fexpr__68851.cljs$core$IFn$_invoke$arity$13 ? fexpr__68851.cljs$core$IFn$_invoke$arity$13(a,b,c,d,e,f,g,h,i,j,k,l,m) : fexpr__68851.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m));
});
var G__69084__15 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
var fexpr__68853 = cljs.core.deref(this$);
return (fexpr__68853.cljs$core$IFn$_invoke$arity$14 ? fexpr__68853.cljs$core$IFn$_invoke$arity$14(a,b,c,d,e,f,g,h,i,j,k,l,m,n) : fexpr__68853.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n));
});
var G__69084__16 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
var fexpr__68856 = cljs.core.deref(this$);
return (fexpr__68856.cljs$core$IFn$_invoke$arity$15 ? fexpr__68856.cljs$core$IFn$_invoke$arity$15(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o) : fexpr__68856.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o));
});
var G__69084__17 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
var fexpr__68857 = cljs.core.deref(this$);
return (fexpr__68857.cljs$core$IFn$_invoke$arity$16 ? fexpr__68857.cljs$core$IFn$_invoke$arity$16(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p) : fexpr__68857.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p));
});
var G__69084__18 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
var fexpr__68859 = cljs.core.deref(this$);
return (fexpr__68859.cljs$core$IFn$_invoke$arity$17 ? fexpr__68859.cljs$core$IFn$_invoke$arity$17(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q) : fexpr__68859.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q));
});
var G__69084__19 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
var fexpr__68861 = cljs.core.deref(this$);
return (fexpr__68861.cljs$core$IFn$_invoke$arity$18 ? fexpr__68861.cljs$core$IFn$_invoke$arity$18(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r) : fexpr__68861.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r));
});
var G__69084__20 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
var fexpr__68863 = cljs.core.deref(this$);
return (fexpr__68863.cljs$core$IFn$_invoke$arity$19 ? fexpr__68863.cljs$core$IFn$_invoke$arity$19(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s) : fexpr__68863.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s));
});
var G__69084__21 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
var fexpr__68865 = cljs.core.deref(this$);
return (fexpr__68865.cljs$core$IFn$_invoke$arity$20 ? fexpr__68865.cljs$core$IFn$_invoke$arity$20(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t) : fexpr__68865.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t));
});
var G__69084__22 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(cljs.core.deref(this$),a,b,c,d,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest], 0));
});
G__69084 = function(self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
switch(arguments.length){
case 1:
return G__69084__1.call(this,self__);
case 2:
return G__69084__2.call(this,self__,a);
case 3:
return G__69084__3.call(this,self__,a,b);
case 4:
return G__69084__4.call(this,self__,a,b,c);
case 5:
return G__69084__5.call(this,self__,a,b,c,d);
case 6:
return G__69084__6.call(this,self__,a,b,c,d,e);
case 7:
return G__69084__7.call(this,self__,a,b,c,d,e,f);
case 8:
return G__69084__8.call(this,self__,a,b,c,d,e,f,g);
case 9:
return G__69084__9.call(this,self__,a,b,c,d,e,f,g,h);
case 10:
return G__69084__10.call(this,self__,a,b,c,d,e,f,g,h,i);
case 11:
return G__69084__11.call(this,self__,a,b,c,d,e,f,g,h,i,j);
case 12:
return G__69084__12.call(this,self__,a,b,c,d,e,f,g,h,i,j,k);
case 13:
return G__69084__13.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l);
case 14:
return G__69084__14.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m);
case 15:
return G__69084__15.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case 16:
return G__69084__16.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case 17:
return G__69084__17.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case 18:
return G__69084__18.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case 19:
return G__69084__19.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r);
case 20:
return G__69084__20.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s);
case 21:
return G__69084__21.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
case 22:
return G__69084__22.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__69084.cljs$core$IFn$_invoke$arity$1 = G__69084__1;
G__69084.cljs$core$IFn$_invoke$arity$2 = G__69084__2;
G__69084.cljs$core$IFn$_invoke$arity$3 = G__69084__3;
G__69084.cljs$core$IFn$_invoke$arity$4 = G__69084__4;
G__69084.cljs$core$IFn$_invoke$arity$5 = G__69084__5;
G__69084.cljs$core$IFn$_invoke$arity$6 = G__69084__6;
G__69084.cljs$core$IFn$_invoke$arity$7 = G__69084__7;
G__69084.cljs$core$IFn$_invoke$arity$8 = G__69084__8;
G__69084.cljs$core$IFn$_invoke$arity$9 = G__69084__9;
G__69084.cljs$core$IFn$_invoke$arity$10 = G__69084__10;
G__69084.cljs$core$IFn$_invoke$arity$11 = G__69084__11;
G__69084.cljs$core$IFn$_invoke$arity$12 = G__69084__12;
G__69084.cljs$core$IFn$_invoke$arity$13 = G__69084__13;
G__69084.cljs$core$IFn$_invoke$arity$14 = G__69084__14;
G__69084.cljs$core$IFn$_invoke$arity$15 = G__69084__15;
G__69084.cljs$core$IFn$_invoke$arity$16 = G__69084__16;
G__69084.cljs$core$IFn$_invoke$arity$17 = G__69084__17;
G__69084.cljs$core$IFn$_invoke$arity$18 = G__69084__18;
G__69084.cljs$core$IFn$_invoke$arity$19 = G__69084__19;
G__69084.cljs$core$IFn$_invoke$arity$20 = G__69084__20;
G__69084.cljs$core$IFn$_invoke$arity$21 = G__69084__21;
G__69084.cljs$core$IFn$_invoke$arity$22 = G__69084__22;
return G__69084;
})()
);

(sci.impl.vars.SciVar.prototype.apply = (function (self__,args68787){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args68787)));
}));

(sci.impl.vars.SciVar.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var this$ = this;
var fexpr__68871 = cljs.core.deref(this$);
return (fexpr__68871.cljs$core$IFn$_invoke$arity$0 ? fexpr__68871.cljs$core$IFn$_invoke$arity$0() : fexpr__68871.call(null));
}));

(sci.impl.vars.SciVar.prototype.cljs$core$IFn$_invoke$arity$1 = (function (a){
var self__ = this;
var this$ = this;
var fexpr__68872 = cljs.core.deref(this$);
return (fexpr__68872.cljs$core$IFn$_invoke$arity$1 ? fexpr__68872.cljs$core$IFn$_invoke$arity$1(a) : fexpr__68872.call(null,a));
}));

(sci.impl.vars.SciVar.prototype.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
var self__ = this;
var this$ = this;
var fexpr__68875 = cljs.core.deref(this$);
return (fexpr__68875.cljs$core$IFn$_invoke$arity$2 ? fexpr__68875.cljs$core$IFn$_invoke$arity$2(a,b) : fexpr__68875.call(null,a,b));
}));

(sci.impl.vars.SciVar.prototype.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
var self__ = this;
var this$ = this;
var fexpr__68879 = cljs.core.deref(this$);
return (fexpr__68879.cljs$core$IFn$_invoke$arity$3 ? fexpr__68879.cljs$core$IFn$_invoke$arity$3(a,b,c) : fexpr__68879.call(null,a,b,c));
}));

(sci.impl.vars.SciVar.prototype.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
var self__ = this;
var this$ = this;
var fexpr__68882 = cljs.core.deref(this$);
return (fexpr__68882.cljs$core$IFn$_invoke$arity$4 ? fexpr__68882.cljs$core$IFn$_invoke$arity$4(a,b,c,d) : fexpr__68882.call(null,a,b,c,d));
}));

(sci.impl.vars.SciVar.prototype.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){
var self__ = this;
var this$ = this;
var fexpr__68885 = cljs.core.deref(this$);
return (fexpr__68885.cljs$core$IFn$_invoke$arity$5 ? fexpr__68885.cljs$core$IFn$_invoke$arity$5(a,b,c,d,e) : fexpr__68885.call(null,a,b,c,d,e));
}));

(sci.impl.vars.SciVar.prototype.cljs$core$IFn$_invoke$arity$6 = (function (a,b,c,d,e,f){
var self__ = this;
var this$ = this;
var fexpr__68888 = cljs.core.deref(this$);
return (fexpr__68888.cljs$core$IFn$_invoke$arity$6 ? fexpr__68888.cljs$core$IFn$_invoke$arity$6(a,b,c,d,e,f) : fexpr__68888.call(null,a,b,c,d,e,f));
}));

(sci.impl.vars.SciVar.prototype.cljs$core$IFn$_invoke$arity$7 = (function (a,b,c,d,e,f,g){
var self__ = this;
var this$ = this;
var fexpr__68890 = cljs.core.deref(this$);
return (fexpr__68890.cljs$core$IFn$_invoke$arity$7 ? fexpr__68890.cljs$core$IFn$_invoke$arity$7(a,b,c,d,e,f,g) : fexpr__68890.call(null,a,b,c,d,e,f,g));
}));

(sci.impl.vars.SciVar.prototype.cljs$core$IFn$_invoke$arity$8 = (function (a,b,c,d,e,f,g,h){
var self__ = this;
var this$ = this;
var fexpr__68892 = cljs.core.deref(this$);
return (fexpr__68892.cljs$core$IFn$_invoke$arity$8 ? fexpr__68892.cljs$core$IFn$_invoke$arity$8(a,b,c,d,e,f,g,h) : fexpr__68892.call(null,a,b,c,d,e,f,g,h));
}));

(sci.impl.vars.SciVar.prototype.cljs$core$IFn$_invoke$arity$9 = (function (a,b,c,d,e,f,g,h,i){
var self__ = this;
var this$ = this;
var fexpr__68895 = cljs.core.deref(this$);
return (fexpr__68895.cljs$core$IFn$_invoke$arity$9 ? fexpr__68895.cljs$core$IFn$_invoke$arity$9(a,b,c,d,e,f,g,h,i) : fexpr__68895.call(null,a,b,c,d,e,f,g,h,i));
}));

(sci.impl.vars.SciVar.prototype.cljs$core$IFn$_invoke$arity$10 = (function (a,b,c,d,e,f,g,h,i,j){
var self__ = this;
var this$ = this;
var fexpr__68898 = cljs.core.deref(this$);
return (fexpr__68898.cljs$core$IFn$_invoke$arity$10 ? fexpr__68898.cljs$core$IFn$_invoke$arity$10(a,b,c,d,e,f,g,h,i,j) : fexpr__68898.call(null,a,b,c,d,e,f,g,h,i,j));
}));

(sci.impl.vars.SciVar.prototype.cljs$core$IFn$_invoke$arity$11 = (function (a,b,c,d,e,f,g,h,i,j,k){
var self__ = this;
var this$ = this;
var fexpr__68901 = cljs.core.deref(this$);
return (fexpr__68901.cljs$core$IFn$_invoke$arity$11 ? fexpr__68901.cljs$core$IFn$_invoke$arity$11(a,b,c,d,e,f,g,h,i,j,k) : fexpr__68901.call(null,a,b,c,d,e,f,g,h,i,j,k));
}));

(sci.impl.vars.SciVar.prototype.cljs$core$IFn$_invoke$arity$12 = (function (a,b,c,d,e,f,g,h,i,j,k,l){
var self__ = this;
var this$ = this;
var fexpr__68904 = cljs.core.deref(this$);
return (fexpr__68904.cljs$core$IFn$_invoke$arity$12 ? fexpr__68904.cljs$core$IFn$_invoke$arity$12(a,b,c,d,e,f,g,h,i,j,k,l) : fexpr__68904.call(null,a,b,c,d,e,f,g,h,i,j,k,l));
}));

(sci.impl.vars.SciVar.prototype.cljs$core$IFn$_invoke$arity$13 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m){
var self__ = this;
var this$ = this;
var fexpr__68908 = cljs.core.deref(this$);
return (fexpr__68908.cljs$core$IFn$_invoke$arity$13 ? fexpr__68908.cljs$core$IFn$_invoke$arity$13(a,b,c,d,e,f,g,h,i,j,k,l,m) : fexpr__68908.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m));
}));

(sci.impl.vars.SciVar.prototype.cljs$core$IFn$_invoke$arity$14 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n){
var self__ = this;
var this$ = this;
var fexpr__68911 = cljs.core.deref(this$);
return (fexpr__68911.cljs$core$IFn$_invoke$arity$14 ? fexpr__68911.cljs$core$IFn$_invoke$arity$14(a,b,c,d,e,f,g,h,i,j,k,l,m,n) : fexpr__68911.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n));
}));

(sci.impl.vars.SciVar.prototype.cljs$core$IFn$_invoke$arity$15 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
var self__ = this;
var this$ = this;
var fexpr__68913 = cljs.core.deref(this$);
return (fexpr__68913.cljs$core$IFn$_invoke$arity$15 ? fexpr__68913.cljs$core$IFn$_invoke$arity$15(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o) : fexpr__68913.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o));
}));

(sci.impl.vars.SciVar.prototype.cljs$core$IFn$_invoke$arity$16 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
var self__ = this;
var this$ = this;
var fexpr__68916 = cljs.core.deref(this$);
return (fexpr__68916.cljs$core$IFn$_invoke$arity$16 ? fexpr__68916.cljs$core$IFn$_invoke$arity$16(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p) : fexpr__68916.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p));
}));

(sci.impl.vars.SciVar.prototype.cljs$core$IFn$_invoke$arity$17 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
var self__ = this;
var this$ = this;
var fexpr__68920 = cljs.core.deref(this$);
return (fexpr__68920.cljs$core$IFn$_invoke$arity$17 ? fexpr__68920.cljs$core$IFn$_invoke$arity$17(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q) : fexpr__68920.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q));
}));

(sci.impl.vars.SciVar.prototype.cljs$core$IFn$_invoke$arity$18 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){
var self__ = this;
var this$ = this;
var fexpr__68922 = cljs.core.deref(this$);
return (fexpr__68922.cljs$core$IFn$_invoke$arity$18 ? fexpr__68922.cljs$core$IFn$_invoke$arity$18(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r) : fexpr__68922.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r));
}));

(sci.impl.vars.SciVar.prototype.cljs$core$IFn$_invoke$arity$19 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){
var self__ = this;
var this$ = this;
var fexpr__68926 = cljs.core.deref(this$);
return (fexpr__68926.cljs$core$IFn$_invoke$arity$19 ? fexpr__68926.cljs$core$IFn$_invoke$arity$19(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s) : fexpr__68926.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s));
}));

(sci.impl.vars.SciVar.prototype.cljs$core$IFn$_invoke$arity$20 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){
var self__ = this;
var this$ = this;
var fexpr__68930 = cljs.core.deref(this$);
return (fexpr__68930.cljs$core$IFn$_invoke$arity$20 ? fexpr__68930.cljs$core$IFn$_invoke$arity$20(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t) : fexpr__68930.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t));
}));

(sci.impl.vars.SciVar.prototype.cljs$core$IFn$_invoke$arity$21 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
var self__ = this;
var this$ = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(cljs.core.deref(this$),a,b,c,d,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest], 0));
}));

(sci.impl.vars.SciVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"root","root",1191874074,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"sym","sym",195671222,null),cljs.core.with_meta(new cljs.core.Symbol(null,"meta","meta",-1154898805,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"thread-bound","thread-bound",1232527493,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
}));

(sci.impl.vars.SciVar.cljs$lang$type = true);

(sci.impl.vars.SciVar.cljs$lang$ctorStr = "sci.impl.vars/SciVar");

(sci.impl.vars.SciVar.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"sci.impl.vars/SciVar");
}));

/**
 * Positional factory function for sci.impl.vars/SciVar.
 */
sci.impl.vars.__GT_SciVar = (function sci$impl$vars$__GT_SciVar(root,sym,meta,thread_bound){
return (new sci.impl.vars.SciVar(root,sym,meta,thread_bound));
});

sci.impl.vars.var_QMARK_ = (function sci$impl$vars$var_QMARK_(x){
return (x instanceof sci.impl.vars.SciVar);
});
sci.impl.vars.dynamic_var = (function sci$impl$vars$dynamic_var(var_args){
var G__68942 = arguments.length;
switch (G__68942) {
case 1:
return sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$3(name,null,cljs.core.meta(name));
}));

(sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$2 = (function (name,init_val){
return sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$3(name,init_val,cljs.core.meta(name));
}));

(sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$3 = (function (name,init_val,meta){
var meta__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(meta,new cljs.core.Keyword(null,"dynamic","dynamic",704819571),true);
return (new sci.impl.vars.SciVar(init_val,name,meta__$1,false));
}));

(sci.impl.vars.dynamic_var.cljs$lang$maxFixedArity = 3);

sci.impl.vars.binding = (function sci$impl$vars$binding(var_args){
var args__4835__auto__ = [];
var len__4829__auto___69158 = arguments.length;
var i__4830__auto___69159 = (0);
while(true){
if((i__4830__auto___69159 < len__4829__auto___69158)){
args__4835__auto__.push((arguments[i__4830__auto___69159]));

var G__69160 = (i__4830__auto___69159 + (1));
i__4830__auto___69159 = G__69160;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((3) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((3)),(0),null)):null);
return sci.impl.vars.binding.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4836__auto__);
});

(sci.impl.vars.binding.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,bindings,body){
var var_ize = (function (var_vals){
var ret = cljs.core.PersistentVector.EMPTY;
var vvs = cljs.core.seq(var_vals);
while(true){
if(vvs){
var G__69164 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"var","var",870848730,null),null,(1),null)),(new cljs.core.List(null,cljs.core.first(vvs),null,(1),null)))))),cljs.core.second(vvs));
var G__69165 = cljs.core.next(cljs.core.next(vvs));
ret = G__69164;
vvs = G__69165;
continue;
} else {
return cljs.core.seq(ret);
}
break;
}
});
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","push-thread-bindings","cljs.core/push-thread-bindings",-703482450,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","hash-map","cljs.core/hash-map",303385767,null),null,(1),null)),var_ize(bindings)))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"try","try",-1273693247,null),null,(1),null)),body,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"finally","finally",-1065347064,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","pop-thread-bindings","cljs.core/pop-thread-bindings",-1994943347,null),null,(1),null))))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(sci.impl.vars.binding.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(sci.impl.vars.binding.cljs$lang$applyTo = (function (seq68951){
var G__68952 = cljs.core.first(seq68951);
var seq68951__$1 = cljs.core.next(seq68951);
var G__68953 = cljs.core.first(seq68951__$1);
var seq68951__$2 = cljs.core.next(seq68951__$1);
var G__68954 = cljs.core.first(seq68951__$2);
var seq68951__$3 = cljs.core.next(seq68951__$2);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__68952,G__68953,G__68954,seq68951__$3);
}));

sci.impl.vars.current_file = sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"*file*","*file*",624866474,null),null);
sci.impl.vars.user_ns = sci.impl.vars.__GT_SciNamespace(new cljs.core.Symbol(null,"user","user",-1122004413,null),null);
sci.impl.vars.current_ns = sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"*ns*","*ns*",740153818,null),sci.impl.vars.user_ns);
sci.impl.vars.current_ns_name = (function sci$impl$vars$current_ns_name(){
return sci.impl.vars.getName(cljs.core.deref(sci.impl.vars.current_ns));
});
sci.impl.vars.alter_var_root = (function sci$impl$vars$alter_var_root(var_args){
var args__4835__auto__ = [];
var len__4829__auto___69170 = arguments.length;
var i__4830__auto___69171 = (0);
while(true){
if((i__4830__auto___69171 < len__4829__auto___69170)){
args__4835__auto__.push((arguments[i__4830__auto___69171]));

var G__69172 = (i__4830__auto___69171 + (1));
i__4830__auto___69171 = G__69172;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((2) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((2)),(0),null)):null);
return sci.impl.vars.alter_var_root.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4836__auto__);
});

(sci.impl.vars.alter_var_root.cljs$core$IFn$_invoke$arity$variadic = (function (v,f,args){
return sci.impl.vars.bindRoot(v,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,sci.impl.vars.getRawRoot(v),args));
}));

(sci.impl.vars.alter_var_root.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.vars.alter_var_root.cljs$lang$applyTo = (function (seq68973){
var G__68974 = cljs.core.first(seq68973);
var seq68973__$1 = cljs.core.next(seq68973);
var G__68975 = cljs.core.first(seq68973__$1);
var seq68973__$2 = cljs.core.next(seq68973__$1);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__68974,G__68975,seq68973__$2);
}));


//# sourceMappingURL=sci.impl.vars.js.map
