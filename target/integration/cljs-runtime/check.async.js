goog.provide('check.async');
check.async.to_promise = (function check$async$to_promise(promise_or_chan){
if((((!((promise_or_chan == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === promise_or_chan.cljs$core$async$impl$protocols$ReadPort$))))?true:(((!promise_or_chan.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.ReadPort,promise_or_chan):false)):cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.ReadPort,promise_or_chan))){
var p = promesa.core.deferred();
var c__39769__auto___96891 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__39770__auto__ = (function (){var switch__39694__auto__ = (function (state_96801){
var state_val_96802 = (state_96801[(1)]);
if((state_val_96802 === (1))){
var state_96801__$1 = state_96801;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_96801__$1,(2),promise_or_chan);
} else {
if((state_val_96802 === (2))){
var inst_96798 = (state_96801[(2)]);
var inst_96799 = promesa.core.resolve_BANG_.cljs$core$IFn$_invoke$arity$2(p,inst_96798);
var state_96801__$1 = state_96801;
return cljs.core.async.impl.ioc_helpers.return_chan(state_96801__$1,inst_96799);
} else {
return null;
}
}
});
return (function() {
var check$async$to_promise_$_state_machine__39695__auto__ = null;
var check$async$to_promise_$_state_machine__39695__auto____0 = (function (){
var statearr_96812 = [null,null,null,null,null,null,null];
(statearr_96812[(0)] = check$async$to_promise_$_state_machine__39695__auto__);

(statearr_96812[(1)] = (1));

return statearr_96812;
});
var check$async$to_promise_$_state_machine__39695__auto____1 = (function (state_96801){
while(true){
var ret_value__39696__auto__ = (function (){try{while(true){
var result__39697__auto__ = switch__39694__auto__(state_96801);
if(cljs.core.keyword_identical_QMARK_(result__39697__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39697__auto__;
}
break;
}
}catch (e96814){var ex__39698__auto__ = e96814;
var statearr_96815_96896 = state_96801;
(statearr_96815_96896[(2)] = ex__39698__auto__);


if(cljs.core.seq((state_96801[(4)]))){
var statearr_96816_96897 = state_96801;
(statearr_96816_96897[(1)] = cljs.core.first((state_96801[(4)])));

} else {
throw ex__39698__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__96898 = state_96801;
state_96801 = G__96898;
continue;
} else {
return ret_value__39696__auto__;
}
break;
}
});
check$async$to_promise_$_state_machine__39695__auto__ = function(state_96801){
switch(arguments.length){
case 0:
return check$async$to_promise_$_state_machine__39695__auto____0.call(this);
case 1:
return check$async$to_promise_$_state_machine__39695__auto____1.call(this,state_96801);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check$async$to_promise_$_state_machine__39695__auto__.cljs$core$IFn$_invoke$arity$0 = check$async$to_promise_$_state_machine__39695__auto____0;
check$async$to_promise_$_state_machine__39695__auto__.cljs$core$IFn$_invoke$arity$1 = check$async$to_promise_$_state_machine__39695__auto____1;
return check$async$to_promise_$_state_machine__39695__auto__;
})()
})();
var state__39771__auto__ = (function (){var statearr_96818 = f__39770__auto__();
(statearr_96818[(6)] = c__39769__auto___96891);

return statearr_96818;
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
if((typeof check !== 'undefined') && (typeof check.async !== 'undefined') && (typeof check.async.t_check$async96822 !== 'undefined')){
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
check.async.t_check$async96822 = (function (prom,meta96823){
this.prom = prom;
this.meta96823 = meta96823;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(check.async.t_check$async96822.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_96824,meta96823__$1){
var self__ = this;
var _96824__$1 = this;
return (new check.async.t_check$async96822(self__.prom,meta96823__$1));
}));

(check.async.t_check$async96822.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_96824){
var self__ = this;
var _96824__$1 = this;
return self__.meta96823;
}));

(check.async.t_check$async96822.prototype.check$async$AsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(check.async.t_check$async96822.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(check.async.t_check$async96822.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(self__.prom,(function() { 
var G__96905__delegate = function (___$1){
return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
};
var G__96905 = function (var_args){
var ___$1 = null;
if (arguments.length > 0) {
var G__96906__i = 0, G__96906__a = new Array(arguments.length -  0);
while (G__96906__i < G__96906__a.length) {G__96906__a[G__96906__i] = arguments[G__96906__i + 0]; ++G__96906__i;}
  ___$1 = new cljs.core.IndexedSeq(G__96906__a,0,null);
} 
return G__96905__delegate.call(this,___$1);};
G__96905.cljs$lang$maxFixedArity = 0;
G__96905.cljs$lang$applyTo = (function (arglist__96907){
var ___$1 = cljs.core.seq(arglist__96907);
return G__96905__delegate(___$1);
});
G__96905.cljs$core$IFn$_invoke$arity$variadic = G__96905__delegate;
return G__96905;
})()
);
}));

(check.async.t_check$async96822.prototype.apply = (function (self__,args96827){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args96827)));
}));

(check.async.t_check$async96822.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var _ = this;
return promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(self__.prom,(function() { 
var G__96908__delegate = function (___$1){
return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
};
var G__96908 = function (var_args){
var ___$1 = null;
if (arguments.length > 0) {
var G__96909__i = 0, G__96909__a = new Array(arguments.length -  0);
while (G__96909__i < G__96909__a.length) {G__96909__a[G__96909__i] = arguments[G__96909__i + 0]; ++G__96909__i;}
  ___$1 = new cljs.core.IndexedSeq(G__96909__a,0,null);
} 
return G__96908__delegate.call(this,___$1);};
G__96908.cljs$lang$maxFixedArity = 0;
G__96908.cljs$lang$applyTo = (function (arglist__96910){
var ___$1 = cljs.core.seq(arglist__96910);
return G__96908__delegate(___$1);
});
G__96908.cljs$core$IFn$_invoke$arity$variadic = G__96908__delegate;
return G__96908;
})()
);
}));

(check.async.t_check$async96822.prototype.promesa$protocols$IPromise$ = cljs.core.PROTOCOL_SENTINEL);

(check.async.t_check$async96822.prototype.promesa$protocols$IPromise$_bind$arity$2 = (function (_,f){
var self__ = this;
var ___$1 = this;
return promesa.protocols._bind(self__.prom,f);
}));

(check.async.t_check$async96822.prototype.promesa$protocols$IPromise$_bind$arity$3 = (function (_,f,executor){
var self__ = this;
var ___$1 = this;
return promesa.protocols._bind(self__.prom,f,executor);
}));

(check.async.t_check$async96822.prototype.promesa$protocols$IPromise$_map$arity$2 = (function (_,f){
var self__ = this;
var ___$1 = this;
return promesa.protocols._map(self__.prom,f);
}));

(check.async.t_check$async96822.prototype.promesa$protocols$IPromise$_map$arity$3 = (function (_,f,executor){
var self__ = this;
var ___$1 = this;
return promesa.protocols._map(self__.prom,f,executor);
}));

(check.async.t_check$async96822.prototype.promesa$protocols$IPromise$_then$arity$2 = (function (_,f){
var self__ = this;
var ___$1 = this;
return promesa.protocols._then(self__.prom,f);
}));

(check.async.t_check$async96822.prototype.promesa$protocols$IPromise$_then$arity$3 = (function (_,f,executor){
var self__ = this;
var ___$1 = this;
return promesa.protocols._then(self__.prom,f,executor);
}));

(check.async.t_check$async96822.prototype.promesa$protocols$IPromise$_mapErr$arity$2 = (function (_,f){
var self__ = this;
var ___$1 = this;
return promesa.protocols._mapErr(self__.prom,f);
}));

(check.async.t_check$async96822.prototype.promesa$protocols$IPromise$_mapErr$arity$3 = (function (_,f,executor){
var self__ = this;
var ___$1 = this;
return promesa.protocols._mapErr(self__.prom,f,executor);
}));

(check.async.t_check$async96822.prototype.promesa$protocols$IPromise$_thenErr$arity$2 = (function (_,f){
var self__ = this;
var ___$1 = this;
return promesa.protocols._thenErr(self__.prom,f);
}));

(check.async.t_check$async96822.prototype.promesa$protocols$IPromise$_thenErr$arity$3 = (function (_,f,executor){
var self__ = this;
var ___$1 = this;
return promesa.protocols._thenErr(self__.prom,f,executor);
}));

(check.async.t_check$async96822.prototype.promesa$protocols$IPromise$_handle$arity$2 = (function (_,f){
var self__ = this;
var ___$1 = this;
return promesa.protocols._handle(self__.prom,f);
}));

(check.async.t_check$async96822.prototype.promesa$protocols$IPromise$_handle$arity$3 = (function (_,f,executor){
var self__ = this;
var ___$1 = this;
return promesa.protocols._handle(self__.prom,f,executor);
}));

(check.async.t_check$async96822.prototype.promesa$protocols$IPromise$_finally$arity$2 = (function (_,f){
var self__ = this;
var ___$1 = this;
return promesa.protocols._finally(self__.prom,f);
}));

(check.async.t_check$async96822.prototype.promesa$protocols$IPromise$_finally$arity$3 = (function (_,f,executor){
var self__ = this;
var ___$1 = this;
return promesa.protocols._finally(self__.prom,f,executor);
}));

(check.async.t_check$async96822.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"prom","prom",-54745349,null),new cljs.core.Symbol(null,"meta96823","meta96823",1026990663,null)], null);
}));

(check.async.t_check$async96822.cljs$lang$type = true);

(check.async.t_check$async96822.cljs$lang$ctorStr = "check.async/t_check$async96822");

(check.async.t_check$async96822.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"check.async/t_check$async96822");
}));

/**
 * Positional factory function for check.async/t_check$async96822.
 */
check.async.__GT_t_check$async96822 = (function check$async$reified_async_prom_$___GT_t_check$async96822(prom__$1,meta96823){
return (new check.async.t_check$async96822(prom__$1,meta96823));
});

}

return (new check.async.t_check$async96822(prom,cljs.core.PersistentArrayMap.EMPTY));
});
check.async.async_test_STAR_ = (function check$async$async_test_STAR_(description,timeout,teardown,prom){
var timeout_error = (new Object());
var error = (new Object());
var promise = promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(prom,(function (p1__96861_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[error,p1__96861_SHARP_],null));
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
try{var values__9152__auto___96915 = (new cljs.core.List(null,error__$1,null,(1),null));
var result__9153__auto___96916 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.not,values__9152__auto___96915);
if(cljs.core.truth_(result__9153__auto___96916)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["check/async.cljs",54,new cljs.core.Keyword(null,"pass","pass",1574159993),43,71,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),new cljs.core.Symbol(null,"error","error",661562495,null)),71,cljs.core.cons(new cljs.core.Symbol(null,"not","not",1044554643,null),values__9152__auto___96915),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["check/async.cljs",54,new cljs.core.Keyword(null,"fail","fail",1706214930),43,71,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),new cljs.core.Symbol(null,"error","error",661562495,null)),71,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"not","not",1044554643,null),values__9152__auto___96915),null,(1),null)),(2),null)),null]));
}

}catch (e96881){var t__9189__auto___96917 = e96881;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["check/async.cljs",54,new cljs.core.Keyword(null,"error","error",-978969032),43,71,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),new cljs.core.Symbol(null,"error","error",661562495,null)),71,t__9189__auto___96917,null]));
}
return null;
}));
return check.async.reified_async_prom(full_prom);
});

//# sourceMappingURL=check.async.js.map
