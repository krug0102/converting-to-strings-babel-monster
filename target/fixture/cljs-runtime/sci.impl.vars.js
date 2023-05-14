goog.provide('sci.impl.vars');

/**
 * @interface
 */
sci.impl.vars.HasName = function(){};

var sci$impl$vars$HasName$getName$dyn_154121 = (function (_){
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
return sci$impl$vars$HasName$getName$dyn_154121(_);
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

var sci$impl$vars$IVar$bindRoot$dyn_154123 = (function (this$,v){
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
return sci$impl$vars$IVar$bindRoot$dyn_154123(this$,v);
}
});

var sci$impl$vars$IVar$getRawRoot$dyn_154125 = (function (this$){
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
return sci$impl$vars$IVar$getRawRoot$dyn_154125(this$);
}
});

var sci$impl$vars$IVar$toSymbol$dyn_154127 = (function (this$){
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
return sci$impl$vars$IVar$toSymbol$dyn_154127(this$);
}
});

var sci$impl$vars$IVar$isMacro$dyn_154128 = (function (this$){
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
return sci$impl$vars$IVar$isMacro$dyn_154128(this$);
}
});

var sci$impl$vars$IVar$hasRoot$dyn_154129 = (function (this$){
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
return sci$impl$vars$IVar$hasRoot$dyn_154129(this$);
}
});

var sci$impl$vars$IVar$setThreadBound$dyn_154130 = (function (this$,v){
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
return sci$impl$vars$IVar$setThreadBound$dyn_154130(this$,v);
}
});

var sci$impl$vars$IVar$unbind$dyn_154132 = (function (this$){
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
return sci$impl$vars$IVar$unbind$dyn_154132(this$);
}
});

sci.impl.vars.push_thread_bindings = (function sci$impl$vars$push_thread_bindings(bindings){
var frame = sci.impl.vars.get_thread_binding_frame();
var bmap = frame.bindings;
var bmap__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__154053){
var vec__154054 = p__154053;
var var_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__154054,(0),null);
var val_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__154054,(1),null);
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
var vec__154060 = cljs.core.first(kvs);
var var_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__154060,(0),null);
var tbox = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__154060,(1),null);
var tbox_val = tbox.sci$impl$types$IBox$getVal$arity$1(null);
var G__154135 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,var_STAR_,tbox_val);
var G__154136 = cljs.core.next(kvs);
ret = G__154135;
kvs = G__154136;
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
var G__154137 = null;
var G__154137__0 = (function (){
sci.impl.vars.reset_thread_binding_frame(frame);

return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
});
var G__154137__1 = (function (x){
sci.impl.vars.reset_thread_binding_frame(frame);

return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x));
});
var G__154137__2 = (function (x,y){
sci.impl.vars.reset_thread_binding_frame(frame);

return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(x,y) : f.call(null,x,y));
});
var G__154137__3 = (function (x,y,z){
sci.impl.vars.reset_thread_binding_frame(frame);

return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(x,y,z) : f.call(null,x,y,z));
});
var G__154137__4 = (function() { 
var G__154138__delegate = function (x,y,z,args){
sci.impl.vars.reset_thread_binding_frame(frame);

return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,x,y,z,args);
};
var G__154138 = function (x,y,z,var_args){
var args = null;
if (arguments.length > 3) {
var G__154139__i = 0, G__154139__a = new Array(arguments.length -  3);
while (G__154139__i < G__154139__a.length) {G__154139__a[G__154139__i] = arguments[G__154139__i + 3]; ++G__154139__i;}
  args = new cljs.core.IndexedSeq(G__154139__a,0,null);
} 
return G__154138__delegate.call(this,x,y,z,args);};
G__154138.cljs$lang$maxFixedArity = 3;
G__154138.cljs$lang$applyTo = (function (arglist__154140){
var x = cljs.core.first(arglist__154140);
arglist__154140 = cljs.core.next(arglist__154140);
var y = cljs.core.first(arglist__154140);
arglist__154140 = cljs.core.next(arglist__154140);
var z = cljs.core.first(arglist__154140);
var args = cljs.core.rest(arglist__154140);
return G__154138__delegate(x,y,z,args);
});
G__154138.cljs$core$IFn$_invoke$arity$variadic = G__154138__delegate;
return G__154138;
})()
;
G__154137 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__154137__0.call(this);
case 1:
return G__154137__1.call(this,x);
case 2:
return G__154137__2.call(this,x,y);
case 3:
return G__154137__3.call(this,x,y,z);
default:
var G__154141 = null;
if (arguments.length > 3) {
var G__154142__i = 0, G__154142__a = new Array(arguments.length -  3);
while (G__154142__i < G__154142__a.length) {G__154142__a[G__154142__i] = arguments[G__154142__i + 3]; ++G__154142__i;}
G__154141 = new cljs.core.IndexedSeq(G__154142__a,0,null);
}
return G__154137__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, G__154141);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__154137.cljs$lang$maxFixedArity = 3;
G__154137.cljs$lang$applyTo = G__154137__4.cljs$lang$applyTo;
G__154137.cljs$core$IFn$_invoke$arity$0 = G__154137__0;
G__154137.cljs$core$IFn$_invoke$arity$1 = G__154137__1;
G__154137.cljs$core$IFn$_invoke$arity$2 = G__154137__2;
G__154137.cljs$core$IFn$_invoke$arity$3 = G__154137__3;
G__154137.cljs$core$IFn$_invoke$arity$variadic = G__154137__4.cljs$core$IFn$_invoke$arity$variadic;
return G__154137;
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
var G__154143 = null;
var G__154143__1 = (function (self__){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
});
var G__154143__2 = (function (self__,a){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
});
var G__154143__3 = (function (self__,a,b){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
});
var G__154143__4 = (function (self__,a,b,c){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
});
var G__154143__5 = (function (self__,a,b,c,d){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
});
var G__154143__6 = (function (self__,a,b,c,d,e){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
});
var G__154143__7 = (function (self__,a,b,c,d,e,f){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
});
var G__154143__8 = (function (self__,a,b,c,d,e,f,g){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
});
var G__154143__9 = (function (self__,a,b,c,d,e,f,g,h){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
});
var G__154143__10 = (function (self__,a,b,c,d,e,f,g,h,i){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
});
var G__154143__11 = (function (self__,a,b,c,d,e,f,g,h,i,j){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
});
var G__154143__12 = (function (self__,a,b,c,d,e,f,g,h,i,j,k){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
});
var G__154143__13 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
});
var G__154143__14 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
});
var G__154143__15 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
});
var G__154143__16 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
});
var G__154143__17 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
});
var G__154143__18 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
});
var G__154143__19 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
});
var G__154143__20 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
});
var G__154143__21 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
});
var G__154143__22 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
});
G__154143 = function(self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
switch(arguments.length){
case 1:
return G__154143__1.call(this,self__);
case 2:
return G__154143__2.call(this,self__,a);
case 3:
return G__154143__3.call(this,self__,a,b);
case 4:
return G__154143__4.call(this,self__,a,b,c);
case 5:
return G__154143__5.call(this,self__,a,b,c,d);
case 6:
return G__154143__6.call(this,self__,a,b,c,d,e);
case 7:
return G__154143__7.call(this,self__,a,b,c,d,e,f);
case 8:
return G__154143__8.call(this,self__,a,b,c,d,e,f,g);
case 9:
return G__154143__9.call(this,self__,a,b,c,d,e,f,g,h);
case 10:
return G__154143__10.call(this,self__,a,b,c,d,e,f,g,h,i);
case 11:
return G__154143__11.call(this,self__,a,b,c,d,e,f,g,h,i,j);
case 12:
return G__154143__12.call(this,self__,a,b,c,d,e,f,g,h,i,j,k);
case 13:
return G__154143__13.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l);
case 14:
return G__154143__14.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m);
case 15:
return G__154143__15.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case 16:
return G__154143__16.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case 17:
return G__154143__17.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case 18:
return G__154143__18.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case 19:
return G__154143__19.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r);
case 20:
return G__154143__20.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s);
case 21:
return G__154143__21.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
case 22:
return G__154143__22.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__154143.cljs$core$IFn$_invoke$arity$1 = G__154143__1;
G__154143.cljs$core$IFn$_invoke$arity$2 = G__154143__2;
G__154143.cljs$core$IFn$_invoke$arity$3 = G__154143__3;
G__154143.cljs$core$IFn$_invoke$arity$4 = G__154143__4;
G__154143.cljs$core$IFn$_invoke$arity$5 = G__154143__5;
G__154143.cljs$core$IFn$_invoke$arity$6 = G__154143__6;
G__154143.cljs$core$IFn$_invoke$arity$7 = G__154143__7;
G__154143.cljs$core$IFn$_invoke$arity$8 = G__154143__8;
G__154143.cljs$core$IFn$_invoke$arity$9 = G__154143__9;
G__154143.cljs$core$IFn$_invoke$arity$10 = G__154143__10;
G__154143.cljs$core$IFn$_invoke$arity$11 = G__154143__11;
G__154143.cljs$core$IFn$_invoke$arity$12 = G__154143__12;
G__154143.cljs$core$IFn$_invoke$arity$13 = G__154143__13;
G__154143.cljs$core$IFn$_invoke$arity$14 = G__154143__14;
G__154143.cljs$core$IFn$_invoke$arity$15 = G__154143__15;
G__154143.cljs$core$IFn$_invoke$arity$16 = G__154143__16;
G__154143.cljs$core$IFn$_invoke$arity$17 = G__154143__17;
G__154143.cljs$core$IFn$_invoke$arity$18 = G__154143__18;
G__154143.cljs$core$IFn$_invoke$arity$19 = G__154143__19;
G__154143.cljs$core$IFn$_invoke$arity$20 = G__154143__20;
G__154143.cljs$core$IFn$_invoke$arity$21 = G__154143__21;
G__154143.cljs$core$IFn$_invoke$arity$22 = G__154143__22;
return G__154143;
})()
);

(sci.impl.vars.SciUnbound.prototype.apply = (function (self__,args154063){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args154063)));
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
var G__154154 = null;
var G__154154__1 = (function (self__){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
var fexpr__154070 = cljs.core.deref(this$);
return (fexpr__154070.cljs$core$IFn$_invoke$arity$0 ? fexpr__154070.cljs$core$IFn$_invoke$arity$0() : fexpr__154070.call(null));
});
var G__154154__2 = (function (self__,a){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
var fexpr__154071 = cljs.core.deref(this$);
return (fexpr__154071.cljs$core$IFn$_invoke$arity$1 ? fexpr__154071.cljs$core$IFn$_invoke$arity$1(a) : fexpr__154071.call(null,a));
});
var G__154154__3 = (function (self__,a,b){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
var fexpr__154072 = cljs.core.deref(this$);
return (fexpr__154072.cljs$core$IFn$_invoke$arity$2 ? fexpr__154072.cljs$core$IFn$_invoke$arity$2(a,b) : fexpr__154072.call(null,a,b));
});
var G__154154__4 = (function (self__,a,b,c){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
var fexpr__154073 = cljs.core.deref(this$);
return (fexpr__154073.cljs$core$IFn$_invoke$arity$3 ? fexpr__154073.cljs$core$IFn$_invoke$arity$3(a,b,c) : fexpr__154073.call(null,a,b,c));
});
var G__154154__5 = (function (self__,a,b,c,d){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
var fexpr__154074 = cljs.core.deref(this$);
return (fexpr__154074.cljs$core$IFn$_invoke$arity$4 ? fexpr__154074.cljs$core$IFn$_invoke$arity$4(a,b,c,d) : fexpr__154074.call(null,a,b,c,d));
});
var G__154154__6 = (function (self__,a,b,c,d,e){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
var fexpr__154075 = cljs.core.deref(this$);
return (fexpr__154075.cljs$core$IFn$_invoke$arity$5 ? fexpr__154075.cljs$core$IFn$_invoke$arity$5(a,b,c,d,e) : fexpr__154075.call(null,a,b,c,d,e));
});
var G__154154__7 = (function (self__,a,b,c,d,e,f){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
var fexpr__154076 = cljs.core.deref(this$);
return (fexpr__154076.cljs$core$IFn$_invoke$arity$6 ? fexpr__154076.cljs$core$IFn$_invoke$arity$6(a,b,c,d,e,f) : fexpr__154076.call(null,a,b,c,d,e,f));
});
var G__154154__8 = (function (self__,a,b,c,d,e,f,g){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
var fexpr__154077 = cljs.core.deref(this$);
return (fexpr__154077.cljs$core$IFn$_invoke$arity$7 ? fexpr__154077.cljs$core$IFn$_invoke$arity$7(a,b,c,d,e,f,g) : fexpr__154077.call(null,a,b,c,d,e,f,g));
});
var G__154154__9 = (function (self__,a,b,c,d,e,f,g,h){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
var fexpr__154078 = cljs.core.deref(this$);
return (fexpr__154078.cljs$core$IFn$_invoke$arity$8 ? fexpr__154078.cljs$core$IFn$_invoke$arity$8(a,b,c,d,e,f,g,h) : fexpr__154078.call(null,a,b,c,d,e,f,g,h));
});
var G__154154__10 = (function (self__,a,b,c,d,e,f,g,h,i){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
var fexpr__154079 = cljs.core.deref(this$);
return (fexpr__154079.cljs$core$IFn$_invoke$arity$9 ? fexpr__154079.cljs$core$IFn$_invoke$arity$9(a,b,c,d,e,f,g,h,i) : fexpr__154079.call(null,a,b,c,d,e,f,g,h,i));
});
var G__154154__11 = (function (self__,a,b,c,d,e,f,g,h,i,j){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
var fexpr__154080 = cljs.core.deref(this$);
return (fexpr__154080.cljs$core$IFn$_invoke$arity$10 ? fexpr__154080.cljs$core$IFn$_invoke$arity$10(a,b,c,d,e,f,g,h,i,j) : fexpr__154080.call(null,a,b,c,d,e,f,g,h,i,j));
});
var G__154154__12 = (function (self__,a,b,c,d,e,f,g,h,i,j,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
var fexpr__154081 = cljs.core.deref(this$);
return (fexpr__154081.cljs$core$IFn$_invoke$arity$11 ? fexpr__154081.cljs$core$IFn$_invoke$arity$11(a,b,c,d,e,f,g,h,i,j,k) : fexpr__154081.call(null,a,b,c,d,e,f,g,h,i,j,k));
});
var G__154154__13 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
var fexpr__154082 = cljs.core.deref(this$);
return (fexpr__154082.cljs$core$IFn$_invoke$arity$12 ? fexpr__154082.cljs$core$IFn$_invoke$arity$12(a,b,c,d,e,f,g,h,i,j,k,l) : fexpr__154082.call(null,a,b,c,d,e,f,g,h,i,j,k,l));
});
var G__154154__14 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
var fexpr__154083 = cljs.core.deref(this$);
return (fexpr__154083.cljs$core$IFn$_invoke$arity$13 ? fexpr__154083.cljs$core$IFn$_invoke$arity$13(a,b,c,d,e,f,g,h,i,j,k,l,m) : fexpr__154083.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m));
});
var G__154154__15 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
var fexpr__154084 = cljs.core.deref(this$);
return (fexpr__154084.cljs$core$IFn$_invoke$arity$14 ? fexpr__154084.cljs$core$IFn$_invoke$arity$14(a,b,c,d,e,f,g,h,i,j,k,l,m,n) : fexpr__154084.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n));
});
var G__154154__16 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
var fexpr__154085 = cljs.core.deref(this$);
return (fexpr__154085.cljs$core$IFn$_invoke$arity$15 ? fexpr__154085.cljs$core$IFn$_invoke$arity$15(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o) : fexpr__154085.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o));
});
var G__154154__17 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
var fexpr__154086 = cljs.core.deref(this$);
return (fexpr__154086.cljs$core$IFn$_invoke$arity$16 ? fexpr__154086.cljs$core$IFn$_invoke$arity$16(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p) : fexpr__154086.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p));
});
var G__154154__18 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
var fexpr__154087 = cljs.core.deref(this$);
return (fexpr__154087.cljs$core$IFn$_invoke$arity$17 ? fexpr__154087.cljs$core$IFn$_invoke$arity$17(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q) : fexpr__154087.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q));
});
var G__154154__19 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
var fexpr__154088 = cljs.core.deref(this$);
return (fexpr__154088.cljs$core$IFn$_invoke$arity$18 ? fexpr__154088.cljs$core$IFn$_invoke$arity$18(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r) : fexpr__154088.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r));
});
var G__154154__20 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
var fexpr__154089 = cljs.core.deref(this$);
return (fexpr__154089.cljs$core$IFn$_invoke$arity$19 ? fexpr__154089.cljs$core$IFn$_invoke$arity$19(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s) : fexpr__154089.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s));
});
var G__154154__21 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
var fexpr__154090 = cljs.core.deref(this$);
return (fexpr__154090.cljs$core$IFn$_invoke$arity$20 ? fexpr__154090.cljs$core$IFn$_invoke$arity$20(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t) : fexpr__154090.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t));
});
var G__154154__22 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(cljs.core.deref(this$),a,b,c,d,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest], 0));
});
G__154154 = function(self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
switch(arguments.length){
case 1:
return G__154154__1.call(this,self__);
case 2:
return G__154154__2.call(this,self__,a);
case 3:
return G__154154__3.call(this,self__,a,b);
case 4:
return G__154154__4.call(this,self__,a,b,c);
case 5:
return G__154154__5.call(this,self__,a,b,c,d);
case 6:
return G__154154__6.call(this,self__,a,b,c,d,e);
case 7:
return G__154154__7.call(this,self__,a,b,c,d,e,f);
case 8:
return G__154154__8.call(this,self__,a,b,c,d,e,f,g);
case 9:
return G__154154__9.call(this,self__,a,b,c,d,e,f,g,h);
case 10:
return G__154154__10.call(this,self__,a,b,c,d,e,f,g,h,i);
case 11:
return G__154154__11.call(this,self__,a,b,c,d,e,f,g,h,i,j);
case 12:
return G__154154__12.call(this,self__,a,b,c,d,e,f,g,h,i,j,k);
case 13:
return G__154154__13.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l);
case 14:
return G__154154__14.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m);
case 15:
return G__154154__15.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case 16:
return G__154154__16.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case 17:
return G__154154__17.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case 18:
return G__154154__18.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case 19:
return G__154154__19.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r);
case 20:
return G__154154__20.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s);
case 21:
return G__154154__21.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
case 22:
return G__154154__22.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__154154.cljs$core$IFn$_invoke$arity$1 = G__154154__1;
G__154154.cljs$core$IFn$_invoke$arity$2 = G__154154__2;
G__154154.cljs$core$IFn$_invoke$arity$3 = G__154154__3;
G__154154.cljs$core$IFn$_invoke$arity$4 = G__154154__4;
G__154154.cljs$core$IFn$_invoke$arity$5 = G__154154__5;
G__154154.cljs$core$IFn$_invoke$arity$6 = G__154154__6;
G__154154.cljs$core$IFn$_invoke$arity$7 = G__154154__7;
G__154154.cljs$core$IFn$_invoke$arity$8 = G__154154__8;
G__154154.cljs$core$IFn$_invoke$arity$9 = G__154154__9;
G__154154.cljs$core$IFn$_invoke$arity$10 = G__154154__10;
G__154154.cljs$core$IFn$_invoke$arity$11 = G__154154__11;
G__154154.cljs$core$IFn$_invoke$arity$12 = G__154154__12;
G__154154.cljs$core$IFn$_invoke$arity$13 = G__154154__13;
G__154154.cljs$core$IFn$_invoke$arity$14 = G__154154__14;
G__154154.cljs$core$IFn$_invoke$arity$15 = G__154154__15;
G__154154.cljs$core$IFn$_invoke$arity$16 = G__154154__16;
G__154154.cljs$core$IFn$_invoke$arity$17 = G__154154__17;
G__154154.cljs$core$IFn$_invoke$arity$18 = G__154154__18;
G__154154.cljs$core$IFn$_invoke$arity$19 = G__154154__19;
G__154154.cljs$core$IFn$_invoke$arity$20 = G__154154__20;
G__154154.cljs$core$IFn$_invoke$arity$21 = G__154154__21;
G__154154.cljs$core$IFn$_invoke$arity$22 = G__154154__22;
return G__154154;
})()
);

(sci.impl.vars.SciVar.prototype.apply = (function (self__,args154069){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args154069)));
}));

(sci.impl.vars.SciVar.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var this$ = this;
var fexpr__154091 = cljs.core.deref(this$);
return (fexpr__154091.cljs$core$IFn$_invoke$arity$0 ? fexpr__154091.cljs$core$IFn$_invoke$arity$0() : fexpr__154091.call(null));
}));

(sci.impl.vars.SciVar.prototype.cljs$core$IFn$_invoke$arity$1 = (function (a){
var self__ = this;
var this$ = this;
var fexpr__154092 = cljs.core.deref(this$);
return (fexpr__154092.cljs$core$IFn$_invoke$arity$1 ? fexpr__154092.cljs$core$IFn$_invoke$arity$1(a) : fexpr__154092.call(null,a));
}));

(sci.impl.vars.SciVar.prototype.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
var self__ = this;
var this$ = this;
var fexpr__154093 = cljs.core.deref(this$);
return (fexpr__154093.cljs$core$IFn$_invoke$arity$2 ? fexpr__154093.cljs$core$IFn$_invoke$arity$2(a,b) : fexpr__154093.call(null,a,b));
}));

(sci.impl.vars.SciVar.prototype.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
var self__ = this;
var this$ = this;
var fexpr__154094 = cljs.core.deref(this$);
return (fexpr__154094.cljs$core$IFn$_invoke$arity$3 ? fexpr__154094.cljs$core$IFn$_invoke$arity$3(a,b,c) : fexpr__154094.call(null,a,b,c));
}));

(sci.impl.vars.SciVar.prototype.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
var self__ = this;
var this$ = this;
var fexpr__154095 = cljs.core.deref(this$);
return (fexpr__154095.cljs$core$IFn$_invoke$arity$4 ? fexpr__154095.cljs$core$IFn$_invoke$arity$4(a,b,c,d) : fexpr__154095.call(null,a,b,c,d));
}));

(sci.impl.vars.SciVar.prototype.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){
var self__ = this;
var this$ = this;
var fexpr__154096 = cljs.core.deref(this$);
return (fexpr__154096.cljs$core$IFn$_invoke$arity$5 ? fexpr__154096.cljs$core$IFn$_invoke$arity$5(a,b,c,d,e) : fexpr__154096.call(null,a,b,c,d,e));
}));

(sci.impl.vars.SciVar.prototype.cljs$core$IFn$_invoke$arity$6 = (function (a,b,c,d,e,f){
var self__ = this;
var this$ = this;
var fexpr__154097 = cljs.core.deref(this$);
return (fexpr__154097.cljs$core$IFn$_invoke$arity$6 ? fexpr__154097.cljs$core$IFn$_invoke$arity$6(a,b,c,d,e,f) : fexpr__154097.call(null,a,b,c,d,e,f));
}));

(sci.impl.vars.SciVar.prototype.cljs$core$IFn$_invoke$arity$7 = (function (a,b,c,d,e,f,g){
var self__ = this;
var this$ = this;
var fexpr__154098 = cljs.core.deref(this$);
return (fexpr__154098.cljs$core$IFn$_invoke$arity$7 ? fexpr__154098.cljs$core$IFn$_invoke$arity$7(a,b,c,d,e,f,g) : fexpr__154098.call(null,a,b,c,d,e,f,g));
}));

(sci.impl.vars.SciVar.prototype.cljs$core$IFn$_invoke$arity$8 = (function (a,b,c,d,e,f,g,h){
var self__ = this;
var this$ = this;
var fexpr__154099 = cljs.core.deref(this$);
return (fexpr__154099.cljs$core$IFn$_invoke$arity$8 ? fexpr__154099.cljs$core$IFn$_invoke$arity$8(a,b,c,d,e,f,g,h) : fexpr__154099.call(null,a,b,c,d,e,f,g,h));
}));

(sci.impl.vars.SciVar.prototype.cljs$core$IFn$_invoke$arity$9 = (function (a,b,c,d,e,f,g,h,i){
var self__ = this;
var this$ = this;
var fexpr__154100 = cljs.core.deref(this$);
return (fexpr__154100.cljs$core$IFn$_invoke$arity$9 ? fexpr__154100.cljs$core$IFn$_invoke$arity$9(a,b,c,d,e,f,g,h,i) : fexpr__154100.call(null,a,b,c,d,e,f,g,h,i));
}));

(sci.impl.vars.SciVar.prototype.cljs$core$IFn$_invoke$arity$10 = (function (a,b,c,d,e,f,g,h,i,j){
var self__ = this;
var this$ = this;
var fexpr__154101 = cljs.core.deref(this$);
return (fexpr__154101.cljs$core$IFn$_invoke$arity$10 ? fexpr__154101.cljs$core$IFn$_invoke$arity$10(a,b,c,d,e,f,g,h,i,j) : fexpr__154101.call(null,a,b,c,d,e,f,g,h,i,j));
}));

(sci.impl.vars.SciVar.prototype.cljs$core$IFn$_invoke$arity$11 = (function (a,b,c,d,e,f,g,h,i,j,k){
var self__ = this;
var this$ = this;
var fexpr__154102 = cljs.core.deref(this$);
return (fexpr__154102.cljs$core$IFn$_invoke$arity$11 ? fexpr__154102.cljs$core$IFn$_invoke$arity$11(a,b,c,d,e,f,g,h,i,j,k) : fexpr__154102.call(null,a,b,c,d,e,f,g,h,i,j,k));
}));

(sci.impl.vars.SciVar.prototype.cljs$core$IFn$_invoke$arity$12 = (function (a,b,c,d,e,f,g,h,i,j,k,l){
var self__ = this;
var this$ = this;
var fexpr__154103 = cljs.core.deref(this$);
return (fexpr__154103.cljs$core$IFn$_invoke$arity$12 ? fexpr__154103.cljs$core$IFn$_invoke$arity$12(a,b,c,d,e,f,g,h,i,j,k,l) : fexpr__154103.call(null,a,b,c,d,e,f,g,h,i,j,k,l));
}));

(sci.impl.vars.SciVar.prototype.cljs$core$IFn$_invoke$arity$13 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m){
var self__ = this;
var this$ = this;
var fexpr__154104 = cljs.core.deref(this$);
return (fexpr__154104.cljs$core$IFn$_invoke$arity$13 ? fexpr__154104.cljs$core$IFn$_invoke$arity$13(a,b,c,d,e,f,g,h,i,j,k,l,m) : fexpr__154104.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m));
}));

(sci.impl.vars.SciVar.prototype.cljs$core$IFn$_invoke$arity$14 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n){
var self__ = this;
var this$ = this;
var fexpr__154105 = cljs.core.deref(this$);
return (fexpr__154105.cljs$core$IFn$_invoke$arity$14 ? fexpr__154105.cljs$core$IFn$_invoke$arity$14(a,b,c,d,e,f,g,h,i,j,k,l,m,n) : fexpr__154105.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n));
}));

(sci.impl.vars.SciVar.prototype.cljs$core$IFn$_invoke$arity$15 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
var self__ = this;
var this$ = this;
var fexpr__154106 = cljs.core.deref(this$);
return (fexpr__154106.cljs$core$IFn$_invoke$arity$15 ? fexpr__154106.cljs$core$IFn$_invoke$arity$15(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o) : fexpr__154106.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o));
}));

(sci.impl.vars.SciVar.prototype.cljs$core$IFn$_invoke$arity$16 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
var self__ = this;
var this$ = this;
var fexpr__154107 = cljs.core.deref(this$);
return (fexpr__154107.cljs$core$IFn$_invoke$arity$16 ? fexpr__154107.cljs$core$IFn$_invoke$arity$16(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p) : fexpr__154107.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p));
}));

(sci.impl.vars.SciVar.prototype.cljs$core$IFn$_invoke$arity$17 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
var self__ = this;
var this$ = this;
var fexpr__154108 = cljs.core.deref(this$);
return (fexpr__154108.cljs$core$IFn$_invoke$arity$17 ? fexpr__154108.cljs$core$IFn$_invoke$arity$17(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q) : fexpr__154108.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q));
}));

(sci.impl.vars.SciVar.prototype.cljs$core$IFn$_invoke$arity$18 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){
var self__ = this;
var this$ = this;
var fexpr__154109 = cljs.core.deref(this$);
return (fexpr__154109.cljs$core$IFn$_invoke$arity$18 ? fexpr__154109.cljs$core$IFn$_invoke$arity$18(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r) : fexpr__154109.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r));
}));

(sci.impl.vars.SciVar.prototype.cljs$core$IFn$_invoke$arity$19 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){
var self__ = this;
var this$ = this;
var fexpr__154110 = cljs.core.deref(this$);
return (fexpr__154110.cljs$core$IFn$_invoke$arity$19 ? fexpr__154110.cljs$core$IFn$_invoke$arity$19(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s) : fexpr__154110.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s));
}));

(sci.impl.vars.SciVar.prototype.cljs$core$IFn$_invoke$arity$20 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){
var self__ = this;
var this$ = this;
var fexpr__154111 = cljs.core.deref(this$);
return (fexpr__154111.cljs$core$IFn$_invoke$arity$20 ? fexpr__154111.cljs$core$IFn$_invoke$arity$20(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t) : fexpr__154111.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t));
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
var G__154113 = arguments.length;
switch (G__154113) {
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
var len__4829__auto___154183 = arguments.length;
var i__4830__auto___154184 = (0);
while(true){
if((i__4830__auto___154184 < len__4829__auto___154183)){
args__4835__auto__.push((arguments[i__4830__auto___154184]));

var G__154185 = (i__4830__auto___154184 + (1));
i__4830__auto___154184 = G__154185;
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
var G__154188 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"var","var",870848730,null),null,(1),null)),(new cljs.core.List(null,cljs.core.first(vvs),null,(1),null)))))),cljs.core.second(vvs));
var G__154189 = cljs.core.next(cljs.core.next(vvs));
ret = G__154188;
vvs = G__154189;
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
(sci.impl.vars.binding.cljs$lang$applyTo = (function (seq154114){
var G__154115 = cljs.core.first(seq154114);
var seq154114__$1 = cljs.core.next(seq154114);
var G__154116 = cljs.core.first(seq154114__$1);
var seq154114__$2 = cljs.core.next(seq154114__$1);
var G__154117 = cljs.core.first(seq154114__$2);
var seq154114__$3 = cljs.core.next(seq154114__$2);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__154115,G__154116,G__154117,seq154114__$3);
}));

sci.impl.vars.current_file = sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"*file*","*file*",624866474,null),null);
sci.impl.vars.user_ns = sci.impl.vars.__GT_SciNamespace(new cljs.core.Symbol(null,"user","user",-1122004413,null),null);
sci.impl.vars.current_ns = sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"*ns*","*ns*",740153818,null),sci.impl.vars.user_ns);
sci.impl.vars.current_ns_name = (function sci$impl$vars$current_ns_name(){
return sci.impl.vars.getName(cljs.core.deref(sci.impl.vars.current_ns));
});
sci.impl.vars.alter_var_root = (function sci$impl$vars$alter_var_root(var_args){
var args__4835__auto__ = [];
var len__4829__auto___154191 = arguments.length;
var i__4830__auto___154192 = (0);
while(true){
if((i__4830__auto___154192 < len__4829__auto___154191)){
args__4835__auto__.push((arguments[i__4830__auto___154192]));

var G__154193 = (i__4830__auto___154192 + (1));
i__4830__auto___154192 = G__154193;
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
(sci.impl.vars.alter_var_root.cljs$lang$applyTo = (function (seq154118){
var G__154119 = cljs.core.first(seq154118);
var seq154118__$1 = cljs.core.next(seq154118);
var G__154120 = cljs.core.first(seq154118__$1);
var seq154118__$2 = cljs.core.next(seq154118__$1);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__154119,G__154120,seq154118__$2);
}));


//# sourceMappingURL=sci.impl.vars.js.map
