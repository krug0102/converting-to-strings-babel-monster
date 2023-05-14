goog.provide('check.async');
check.async.to_promise = (function check$async$to_promise(promise_or_chan){
if((((!((promise_or_chan == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === promise_or_chan.cljs$core$async$impl$protocols$ReadPort$))))?true:(((!promise_or_chan.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.ReadPort,promise_or_chan):false)):cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.ReadPort,promise_or_chan))){
var p = promesa.core.deferred();
var c__39769__auto___150743 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__39770__auto__ = (function (){var switch__39694__auto__ = (function (state_150667){
var state_val_150668 = (state_150667[(1)]);
if((state_val_150668 === (1))){
var state_150667__$1 = state_150667;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_150667__$1,(2),promise_or_chan);
} else {
if((state_val_150668 === (2))){
var inst_150664 = (state_150667[(2)]);
var inst_150665 = promesa.core.resolve_BANG_.cljs$core$IFn$_invoke$arity$2(p,inst_150664);
var state_150667__$1 = state_150667;
return cljs.core.async.impl.ioc_helpers.return_chan(state_150667__$1,inst_150665);
} else {
return null;
}
}
});
return (function() {
var check$async$to_promise_$_state_machine__39695__auto__ = null;
var check$async$to_promise_$_state_machine__39695__auto____0 = (function (){
var statearr_150669 = [null,null,null,null,null,null,null];
(statearr_150669[(0)] = check$async$to_promise_$_state_machine__39695__auto__);

(statearr_150669[(1)] = (1));

return statearr_150669;
});
var check$async$to_promise_$_state_machine__39695__auto____1 = (function (state_150667){
while(true){
var ret_value__39696__auto__ = (function (){try{while(true){
var result__39697__auto__ = switch__39694__auto__(state_150667);
if(cljs.core.keyword_identical_QMARK_(result__39697__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39697__auto__;
}
break;
}
}catch (e150677){var ex__39698__auto__ = e150677;
var statearr_150678_150750 = state_150667;
(statearr_150678_150750[(2)] = ex__39698__auto__);


if(cljs.core.seq((state_150667[(4)]))){
var statearr_150679_150751 = state_150667;
(statearr_150679_150751[(1)] = cljs.core.first((state_150667[(4)])));

} else {
throw ex__39698__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__150752 = state_150667;
state_150667 = G__150752;
continue;
} else {
return ret_value__39696__auto__;
}
break;
}
});
check$async$to_promise_$_state_machine__39695__auto__ = function(state_150667){
switch(arguments.length){
case 0:
return check$async$to_promise_$_state_machine__39695__auto____0.call(this);
case 1:
return check$async$to_promise_$_state_machine__39695__auto____1.call(this,state_150667);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check$async$to_promise_$_state_machine__39695__auto__.cljs$core$IFn$_invoke$arity$0 = check$async$to_promise_$_state_machine__39695__auto____0;
check$async$to_promise_$_state_machine__39695__auto__.cljs$core$IFn$_invoke$arity$1 = check$async$to_promise_$_state_machine__39695__auto____1;
return check$async$to_promise_$_state_machine__39695__auto__;
})()
})();
var state__39771__auto__ = (function (){var statearr_150680 = f__39770__auto__();
(statearr_150680[(6)] = c__39769__auto___150743);

return statearr_150680;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39771__auto__);
}));


return p;
} else {
return promise_or_chan;
}
});

/**
 * @interface
 */
check.async.AsyncTest = function(){};

check.async.reified_async_prom = (function check$async$reified_async_prom(prom){
if((typeof check !== 'undefined') && (typeof check.async !== 'undefined') && (typeof check.async.t_check$async150685 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {promesa.protocols.IPromise}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
 * @implements {check.async.AsyncTest}
*/
check.async.t_check$async150685 = (function (prom,meta150686){
this.prom = prom;
this.meta150686 = meta150686;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(check.async.t_check$async150685.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_150687,meta150686__$1){
var self__ = this;
var _150687__$1 = this;
return (new check.async.t_check$async150685(self__.prom,meta150686__$1));
}));

(check.async.t_check$async150685.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_150687){
var self__ = this;
var _150687__$1 = this;
return self__.meta150686;
}));

(check.async.t_check$async150685.prototype.check$async$AsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(check.async.t_check$async150685.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(check.async.t_check$async150685.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(self__.prom,(function() { 
var G__150753__delegate = function (___$1){
return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
};
var G__150753 = function (var_args){
var ___$1 = null;
if (arguments.length > 0) {
var G__150754__i = 0, G__150754__a = new Array(arguments.length -  0);
while (G__150754__i < G__150754__a.length) {G__150754__a[G__150754__i] = arguments[G__150754__i + 0]; ++G__150754__i;}
  ___$1 = new cljs.core.IndexedSeq(G__150754__a,0,null);
} 
return G__150753__delegate.call(this,___$1);};
G__150753.cljs$lang$maxFixedArity = 0;
G__150753.cljs$lang$applyTo = (function (arglist__150755){
var ___$1 = cljs.core.seq(arglist__150755);
return G__150753__delegate(___$1);
});
G__150753.cljs$core$IFn$_invoke$arity$variadic = G__150753__delegate;
return G__150753;
})()
);
}));

(check.async.t_check$async150685.prototype.apply = (function (self__,args150693){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args150693)));
}));

(check.async.t_check$async150685.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var _ = this;
return promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(self__.prom,(function() { 
var G__150756__delegate = function (___$1){
return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
};
var G__150756 = function (var_args){
var ___$1 = null;
if (arguments.length > 0) {
var G__150758__i = 0, G__150758__a = new Array(arguments.length -  0);
while (G__150758__i < G__150758__a.length) {G__150758__a[G__150758__i] = arguments[G__150758__i + 0]; ++G__150758__i;}
  ___$1 = new cljs.core.IndexedSeq(G__150758__a,0,null);
} 
return G__150756__delegate.call(this,___$1);};
G__150756.cljs$lang$maxFixedArity = 0;
G__150756.cljs$lang$applyTo = (function (arglist__150759){
var ___$1 = cljs.core.seq(arglist__150759);
return G__150756__delegate(___$1);
});
G__150756.cljs$core$IFn$_invoke$arity$variadic = G__150756__delegate;
return G__150756;
})()
);
}));

(check.async.t_check$async150685.prototype.promesa$protocols$IPromise$ = cljs.core.PROTOCOL_SENTINEL);

(check.async.t_check$async150685.prototype.promesa$protocols$IPromise$_bind$arity$2 = (function (_,f){
var self__ = this;
var ___$1 = this;
return promesa.protocols._bind(self__.prom,f);
}));

(check.async.t_check$async150685.prototype.promesa$protocols$IPromise$_bind$arity$3 = (function (_,f,executor){
var self__ = this;
var ___$1 = this;
return promesa.protocols._bind(self__.prom,f,executor);
}));

(check.async.t_check$async150685.prototype.promesa$protocols$IPromise$_map$arity$2 = (function (_,f){
var self__ = this;
var ___$1 = this;
return promesa.protocols._map(self__.prom,f);
}));

(check.async.t_check$async150685.prototype.promesa$protocols$IPromise$_map$arity$3 = (function (_,f,executor){
var self__ = this;
var ___$1 = this;
return promesa.protocols._map(self__.prom,f,executor);
}));

(check.async.t_check$async150685.prototype.promesa$protocols$IPromise$_then$arity$2 = (function (_,f){
var self__ = this;
var ___$1 = this;
return promesa.protocols._then(self__.prom,f);
}));

(check.async.t_check$async150685.prototype.promesa$protocols$IPromise$_then$arity$3 = (function (_,f,executor){
var self__ = this;
var ___$1 = this;
return promesa.protocols._then(self__.prom,f,executor);
}));

(check.async.t_check$async150685.prototype.promesa$protocols$IPromise$_mapErr$arity$2 = (function (_,f){
var self__ = this;
var ___$1 = this;
return promesa.protocols._mapErr(self__.prom,f);
}));

(check.async.t_check$async150685.prototype.promesa$protocols$IPromise$_mapErr$arity$3 = (function (_,f,executor){
var self__ = this;
var ___$1 = this;
return promesa.protocols._mapErr(self__.prom,f,executor);
}));

(check.async.t_check$async150685.prototype.promesa$protocols$IPromise$_thenErr$arity$2 = (function (_,f){
var self__ = this;
var ___$1 = this;
return promesa.protocols._thenErr(self__.prom,f);
}));

(check.async.t_check$async150685.prototype.promesa$protocols$IPromise$_thenErr$arity$3 = (function (_,f,executor){
var self__ = this;
var ___$1 = this;
return promesa.protocols._thenErr(self__.prom,f,executor);
}));

(check.async.t_check$async150685.prototype.promesa$protocols$IPromise$_handle$arity$2 = (function (_,f){
var self__ = this;
var ___$1 = this;
return promesa.protocols._handle(self__.prom,f);
}));

(check.async.t_check$async150685.prototype.promesa$protocols$IPromise$_handle$arity$3 = (function (_,f,executor){
var self__ = this;
var ___$1 = this;
return promesa.protocols._handle(self__.prom,f,executor);
}));

(check.async.t_check$async150685.prototype.promesa$protocols$IPromise$_finally$arity$2 = (function (_,f){
var self__ = this;
var ___$1 = this;
return promesa.protocols._finally(self__.prom,f);
}));

(check.async.t_check$async150685.prototype.promesa$protocols$IPromise$_finally$arity$3 = (function (_,f,executor){
var self__ = this;
var ___$1 = this;
return promesa.protocols._finally(self__.prom,f,executor);
}));

(check.async.t_check$async150685.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"prom","prom",-54745349,null),new cljs.core.Symbol(null,"meta150686","meta150686",-833598730,null)], null);
}));

(check.async.t_check$async150685.cljs$lang$type = true);

(check.async.t_check$async150685.cljs$lang$ctorStr = "check.async/t_check$async150685");

(check.async.t_check$async150685.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"check.async/t_check$async150685");
}));

/**
 * Positional factory function for check.async/t_check$async150685.
 */
check.async.__GT_t_check$async150685 = (function check$async$reified_async_prom_$___GT_t_check$async150685(prom__$1,meta150686){
return (new check.async.t_check$async150685(prom__$1,meta150686));
});

}

return (new check.async.t_check$async150685(prom,cljs.core.PersistentArrayMap.EMPTY));
});
check.async.async_test_STAR_ = (function check$async$async_test_STAR_(description,timeout,teardown,prom){
var timeout_error = (new Object());
var error = (new Object());
var promise = promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(prom,(function (p1__150732_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[error,p1__150732_SHARP_],null));
}));
var timeout_prom = promesa.protocols._bind(null,(function (___56267__auto__){
return promesa.protocols._bind(promesa.core.delay.cljs$core$IFn$_invoke$arity$1(timeout),(function (___56266__auto__){
return promesa.protocols._promise(timeout_error);
}));
}));
var full_prom = promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.then.cljs$core$IFn$_invoke$arity$2(promesa.core.race(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [promise,timeout_prom], null)),(function (res){
if(((cljs.core.vector_QMARK_(res)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(res),error)))){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),"Not an error",new cljs.core.Keyword(null,"actual","actual",107306363),check.core.normalize_error(cljs.core.second(res))], null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(timeout_error,res)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),"Test to finish",new cljs.core.Keyword(null,"actual","actual",107306363),check.core.normalize_error(["Test did ","not finish in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(timeout),"msec"].join(''))], null));
} else {
}
}

return (teardown.cljs$core$IFn$_invoke$arity$0 ? teardown.cljs$core$IFn$_invoke$arity$0() : teardown.call(null));
})),(function (error__$1){
try{var values__9152__auto___150770 = (new cljs.core.List(null,error__$1,null,(1),null));
var result__9153__auto___150771 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.not,values__9152__auto___150770);
if(cljs.core.truth_(result__9153__auto___150771)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["check/async.cljs",54,new cljs.core.Keyword(null,"pass","pass",1574159993),43,71,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),new cljs.core.Symbol(null,"error","error",661562495,null)),71,cljs.core.cons(new cljs.core.Symbol(null,"not","not",1044554643,null),values__9152__auto___150770),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["check/async.cljs",54,new cljs.core.Keyword(null,"fail","fail",1706214930),43,71,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),new cljs.core.Symbol(null,"error","error",661562495,null)),71,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"not","not",1044554643,null),values__9152__auto___150770),null,(1),null)),(2),null)),null]));
}

}catch (e150739){var t__9189__auto___150775 = e150739;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["check/async.cljs",54,new cljs.core.Keyword(null,"error","error",-978969032),43,71,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),new cljs.core.Symbol(null,"error","error",661562495,null)),71,t__9189__auto___150775,null]));
}
return null;
}));
return check.async.reified_async_prom(full_prom);
});

//# sourceMappingURL=check.async.js.map
