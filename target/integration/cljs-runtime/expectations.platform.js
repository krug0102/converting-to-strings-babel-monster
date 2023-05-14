goog.provide('expectations.platform');
expectations.platform.ns_name = (function expectations$platform$ns_name(ns){
if((ns instanceof cljs.core.Symbol)){
return ns;
} else {
return null;
}
});
/**
 * @param {...*} var_args
 */
expectations.platform.bound_QMARK_ = (function() { 
var expectations$platform$bound_QMARK___delegate = function (vars){
return cljs.core.every_QMARK_((function (p1__51461_SHARP_){
return cljs.core.deref(p1__51461_SHARP_);
}),vars);
};
var expectations$platform$bound_QMARK_ = function (var_args){
var vars = null;
if (arguments.length > 0) {
var G__51469__i = 0, G__51469__a = new Array(arguments.length -  0);
while (G__51469__i < G__51469__a.length) {G__51469__a[G__51469__i] = arguments[G__51469__i + 0]; ++G__51469__i;}
  vars = new cljs.core.IndexedSeq(G__51469__a,0,null);
} 
return expectations$platform$bound_QMARK___delegate.call(this,vars);};
expectations$platform$bound_QMARK_.cljs$lang$maxFixedArity = 0;
expectations$platform$bound_QMARK_.cljs$lang$applyTo = (function (arglist__51470){
var vars = cljs.core.seq(arglist__51470);
return expectations$platform$bound_QMARK___delegate(vars);
});
expectations$platform$bound_QMARK_.cljs$core$IFn$_invoke$arity$variadic = expectations$platform$bound_QMARK___delegate;
return expectations$platform$bound_QMARK_;
})()
;
expectations.platform.format = goog.string.format;
expectations.platform.nodejs_QMARK_ = (function expectations$platform$nodejs_QMARK_(){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(typeof(process),"object");
});
expectations.platform.getenv = (function expectations$platform$getenv(var$){
return (((expectations.platform.nodejs_QMARK_())?process.env:window)[var$]);
});
expectations.platform.get_message = (function expectations$platform$get_message(e){
return e.message;
});
expectations.platform.nano_time = (function expectations$platform$nano_time(){
if(expectations.platform.nodejs_QMARK_()){
return (function (p1__51465_SHARP_){
return ((1.0E9 * (p1__51465_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__51465_SHARP_.cljs$core$IFn$_invoke$arity$1((0)) : p1__51465_SHARP_.call(null,(0)))) + (p1__51465_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__51465_SHARP_.cljs$core$IFn$_invoke$arity$1((1)) : p1__51465_SHARP_.call(null,(1))));
})(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(process.hrtime()));
} else {
return performance.now();
}
});
expectations.platform.on_windows_QMARK_ = (function expectations$platform$on_windows_QMARK_(){
return cljs.core.re_find(/[Ww]in/,((expectations.platform.nodejs_QMARK_())?process.platform:""));
});
expectations.platform.pprint = cljs.core.println;
expectations.platform.print_stack_trace = (function expectations$platform$print_stack_trace(e){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e.stack], 0));
});
expectations.platform.iref_types = cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.Atom]);

//# sourceMappingURL=expectations.platform.js.map
