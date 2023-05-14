goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__148961__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__148961 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__148962__i = 0, G__148962__a = new Array(arguments.length -  0);
while (G__148962__i < G__148962__a.length) {G__148962__a[G__148962__i] = arguments[G__148962__i + 0]; ++G__148962__i;}
  args = new cljs.core.IndexedSeq(G__148962__a,0,null);
} 
return G__148961__delegate.call(this,args);};
G__148961.cljs$lang$maxFixedArity = 0;
G__148961.cljs$lang$applyTo = (function (arglist__148963){
var args = cljs.core.seq(arglist__148963);
return G__148961__delegate(args);
});
G__148961.cljs$core$IFn$_invoke$arity$variadic = G__148961__delegate;
return G__148961;
})()
);

(o.error = (function() { 
var G__148964__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__148964 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__148965__i = 0, G__148965__a = new Array(arguments.length -  0);
while (G__148965__i < G__148965__a.length) {G__148965__a[G__148965__i] = arguments[G__148965__i + 0]; ++G__148965__i;}
  args = new cljs.core.IndexedSeq(G__148965__a,0,null);
} 
return G__148964__delegate.call(this,args);};
G__148964.cljs$lang$maxFixedArity = 0;
G__148964.cljs$lang$applyTo = (function (arglist__148966){
var args = cljs.core.seq(arglist__148966);
return G__148964__delegate(args);
});
G__148964.cljs$core$IFn$_invoke$arity$variadic = G__148964__delegate;
return G__148964;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
