goog.provide('check.async_old');
check.async_old.timeout = (3000);
check.async_old.to_chan = (function check$async_old$to_chan(left){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"chan__60320__auto__","chan__60320__auto__",-1848718436,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol("cljs.core.async","promise-chan","cljs.core.async/promise-chan",2017156358,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".then",".then",224668574,null),null,(1),null)),(new cljs.core.List(null,left,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"result__60321__auto__","result__60321__auto__",-1048092228,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core.async","put!","cljs.core.async/put!",681138889,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"chan__60320__auto__","chan__60320__auto__",-1848718436,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"result__60321__auto__","result__60321__auto__",-1048092228,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"chan__60320__auto__","chan__60320__auto__",-1848718436,null),null,(1),null))], 0))));
});
check.async_old.get_from_channel_BANG_ = (function check$async_old$get_from_channel_BANG_(cljs_QMARK_,chan){
if(cljs.core.truth_(cljs_QMARK_)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core.async","<!","cljs.core.async/<!",1278951036,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","instance?","cljs.core/instance?",2044751870,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("js","Promise","js/Promise",-1626764693,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,chan,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,check.async_old.to_chan(chan),null,(1),null)),(new cljs.core.List(null,chan,null,(1),null))], 0)))),null,(1),null)))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core.async","alts!!","cljs.core.async/alts!!",-510913850,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,chan,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core.async","timeout","cljs.core.async/timeout",-2129255094,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("check.async-old","timeout","check.async-old/timeout",-1097752623,null),null,(1),null))))),null,(1),null)))))),null,(1),null))))),null,(1),null)))));
}
});
check.core.assert_arrow.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"=resolves=>","=resolves=>",-23578509,null),(function (cljs_QMARK_,left,_,right){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"value__60327__auto__","value__60327__auto__",-180771588,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("check.async-old","get-from-channel!","check.async-old/get-from-channel!",1759534378,null),null,(1),null)),(new cljs.core.List(null,cljs_QMARK_,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,left,null,(1),null))], 0)))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("check.core","assert-arrow","check.core/assert-arrow",2033561426,null),null,(1),null)),(new cljs.core.List(null,cljs_QMARK_,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"value__60327__auto__","value__60327__auto__",-180771588,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("check.async-old","=>","check.async-old/=>",533632775,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,right,null,(1),null))], 0)))),null,(1),null))], 0))));
}));
check.async_old.promise_test_STAR_ = (function check$async_old$promise_test_STAR_(prom,done,tear,time){
var teardown = (function (){var or__4223__auto__ = tear;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return (function (){
return cljs.core.List.EMPTY;
});
}
})();
var mark_done = (new cljs.core.Delay((function (){
(teardown.cljs$core$IFn$_invoke$arity$0 ? teardown.cljs$core$IFn$_invoke$arity$0() : teardown.call(null));

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}),null));
setTimeout((function (){
if(cljs.core.realized_QMARK_(mark_done)){
return null;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Async error - not finalized",cljs.core.PersistentArrayMap.EMPTY);

return cljs.core.deref(mark_done);
}
}),time);

prom.then((function (_){
return cljs.core.deref(mark_done);
}));

return prom.catch((function (error){
cljs.core.deref(done);

throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Promise resolved with error",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),error], null));
}));
});

//# sourceMappingURL=check.async_old.js.map
