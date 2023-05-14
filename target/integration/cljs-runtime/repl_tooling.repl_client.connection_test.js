goog.provide('repl_tooling.repl_client.connection_test');
(devcards.core.test_timeout = (20000));
if((typeof repl_tooling !== 'undefined') && (typeof repl_tooling.repl_client !== 'undefined') && (typeof repl_tooling.repl_client.connection_test !== 'undefined') && (typeof repl_tooling.repl_client.connection_test.state !== 'undefined')){
} else {
repl_tooling.repl_client.connection_test.state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
repl_tooling.repl_client.connection_test.buffer = (function repl_tooling$repl_client$connection_test$buffer(){
var G__121350 = cljs.core.deref(repl_tooling.repl_client.connection_test.state);
var G__121350__$1 = (((G__121350 == null))?null:new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(G__121350));
if((G__121350__$1 == null)){
return null;
} else {
return cljs.core.deref(G__121350__$1);
}
});
repl_tooling.repl_client.connection_test.check_string = (function repl_tooling$repl_client$connection_test$check_string(regexp){
var c__39769__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__39770__auto__ = (function (){var switch__39694__auto__ = (function (state_121387){
var state_val_121388 = (state_121387[(1)]);
if((state_val_121388 === (7))){
var inst_121366 = (state_121387[(7)]);
var state_121387__$1 = state_121387;
var statearr_121394_132595 = state_121387__$1;
(statearr_121394_132595[(2)] = inst_121366);

(statearr_121394_132595[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_121388 === (1))){
var inst_121359 = (0);
var state_121387__$1 = (function (){var statearr_121398 = state_121387;
(statearr_121398[(8)] = inst_121359);

return statearr_121398;
})();
var statearr_121399_132596 = state_121387__$1;
(statearr_121399_132596[(2)] = null);

(statearr_121399_132596[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_121388 === (4))){
var inst_121366 = (state_121387[(7)]);
var inst_121365 = repl_tooling.repl_client.connection_test.buffer();
var inst_121366__$1 = cljs.core.peek(inst_121365);
var inst_121367 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_121366__$1);
var inst_121368 = cljs.core.re_find(regexp,inst_121367);
var state_121387__$1 = (function (){var statearr_121405 = state_121387;
(statearr_121405[(7)] = inst_121366__$1);

return statearr_121405;
})();
if(cljs.core.truth_(inst_121368)){
var statearr_121407_132599 = state_121387__$1;
(statearr_121407_132599[(1)] = (7));

} else {
var statearr_121410_132600 = state_121387__$1;
(statearr_121410_132600[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_121388 === (6))){
var inst_121383 = (state_121387[(2)]);
var state_121387__$1 = state_121387;
var statearr_121413_132602 = state_121387__$1;
(statearr_121413_132602[(2)] = inst_121383);

(statearr_121413_132602[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_121388 === (3))){
var inst_121385 = (state_121387[(2)]);
var state_121387__$1 = state_121387;
return cljs.core.async.impl.ioc_helpers.return_chan(state_121387__$1,inst_121385);
} else {
if((state_val_121388 === (2))){
var inst_121359 = (state_121387[(8)]);
var inst_121361 = (inst_121359 < (10));
var state_121387__$1 = state_121387;
if(cljs.core.truth_(inst_121361)){
var statearr_121421_132604 = state_121387__$1;
(statearr_121421_132604[(1)] = (4));

} else {
var statearr_121423_132605 = state_121387__$1;
(statearr_121423_132605[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_121388 === (9))){
var inst_121378 = (state_121387[(2)]);
var state_121387__$1 = state_121387;
var statearr_121425_132606 = state_121387__$1;
(statearr_121425_132606[(2)] = inst_121378);

(statearr_121425_132606[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_121388 === (5))){
var state_121387__$1 = state_121387;
var statearr_121429_132607 = state_121387__$1;
(statearr_121429_132607[(2)] = null);

(statearr_121429_132607[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_121388 === (10))){
var inst_121359 = (state_121387[(8)]);
var inst_121374 = (state_121387[(2)]);
var inst_121375 = (inst_121359 + (1));
var inst_121359__$1 = inst_121375;
var state_121387__$1 = (function (){var statearr_121438 = state_121387;
(statearr_121438[(9)] = inst_121374);

(statearr_121438[(8)] = inst_121359__$1);

return statearr_121438;
})();
var statearr_121439_132609 = state_121387__$1;
(statearr_121439_132609[(2)] = null);

(statearr_121439_132609[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_121388 === (8))){
var inst_121372 = cljs.core.async.timeout((100));
var state_121387__$1 = state_121387;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_121387__$1,(10),inst_121372);
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
var repl_tooling$repl_client$connection_test$check_string_$_state_machine__39695__auto__ = null;
var repl_tooling$repl_client$connection_test$check_string_$_state_machine__39695__auto____0 = (function (){
var statearr_121444 = [null,null,null,null,null,null,null,null,null,null];
(statearr_121444[(0)] = repl_tooling$repl_client$connection_test$check_string_$_state_machine__39695__auto__);

(statearr_121444[(1)] = (1));

return statearr_121444;
});
var repl_tooling$repl_client$connection_test$check_string_$_state_machine__39695__auto____1 = (function (state_121387){
while(true){
var ret_value__39696__auto__ = (function (){try{while(true){
var result__39697__auto__ = switch__39694__auto__(state_121387);
if(cljs.core.keyword_identical_QMARK_(result__39697__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39697__auto__;
}
break;
}
}catch (e121448){var ex__39698__auto__ = e121448;
var statearr_121450_132611 = state_121387;
(statearr_121450_132611[(2)] = ex__39698__auto__);


if(cljs.core.seq((state_121387[(4)]))){
var statearr_121453_132612 = state_121387;
(statearr_121453_132612[(1)] = cljs.core.first((state_121387[(4)])));

} else {
throw ex__39698__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__132613 = state_121387;
state_121387 = G__132613;
continue;
} else {
return ret_value__39696__auto__;
}
break;
}
});
repl_tooling$repl_client$connection_test$check_string_$_state_machine__39695__auto__ = function(state_121387){
switch(arguments.length){
case 0:
return repl_tooling$repl_client$connection_test$check_string_$_state_machine__39695__auto____0.call(this);
case 1:
return repl_tooling$repl_client$connection_test$check_string_$_state_machine__39695__auto____1.call(this,state_121387);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
repl_tooling$repl_client$connection_test$check_string_$_state_machine__39695__auto__.cljs$core$IFn$_invoke$arity$0 = repl_tooling$repl_client$connection_test$check_string_$_state_machine__39695__auto____0;
repl_tooling$repl_client$connection_test$check_string_$_state_machine__39695__auto__.cljs$core$IFn$_invoke$arity$1 = repl_tooling$repl_client$connection_test$check_string_$_state_machine__39695__auto____1;
return repl_tooling$repl_client$connection_test$check_string_$_state_machine__39695__auto__;
})()
})();
var state__39771__auto__ = (function (){var statearr_121457 = f__39770__auto__();
(statearr_121457[(6)] = c__39769__auto__);

return statearr_121457;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39771__auto__);
}));

return c__39769__auto__;
});
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"repl_tooling.repl_client.connection_test","repl_tooling.repl_client.connection_test",1555915928),new cljs.core.Keyword(null,"buffer-treatment","buffer-treatment",-340999556)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"buffer-treatment",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){
var buffer = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
var lines = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
var get_lines = (function (){
var l = cljs.core.deref(lines);
cljs.core.reset_BANG_(lines,cljs.core.PersistentVector.EMPTY);

return l;
});
var frags = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
if((typeof repl_tooling !== 'undefined') && (typeof repl_tooling.repl_client !== 'undefined') && (typeof repl_tooling.repl_client.connection_test !== 'undefined') && (typeof repl_tooling.repl_client.connection_test.t_repl_tooling$repl_client$connection_test121471 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
repl_tooling.repl_client.connection_test.t_repl_tooling$repl_client$connection_test121471 = (function (buffer,lines,get_lines,frags,meta121472){
this.buffer = buffer;
this.lines = lines;
this.get_lines = get_lines;
this.frags = frags;
this.meta121472 = meta121472;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(repl_tooling.repl_client.connection_test.t_repl_tooling$repl_client$connection_test121471.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_121473,meta121472__$1){
var self__ = this;
var _121473__$1 = this;
return (new repl_tooling.repl_client.connection_test.t_repl_tooling$repl_client$connection_test121471(self__.buffer,self__.lines,self__.get_lines,self__.frags,meta121472__$1));
}));

(repl_tooling.repl_client.connection_test.t_repl_tooling$repl_client$connection_test121471.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_121473){
var self__ = this;
var _121473__$1 = this;
return self__.meta121472;
}));

(repl_tooling.repl_client.connection_test.t_repl_tooling$repl_client$connection_test121471.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(repl_tooling.repl_client.connection_test.t_repl_tooling$repl_client$connection_test121471.prototype.call = (function (self__,done__60249__auto__){
var self__ = this;
var self____$1 = this;
var ___9200__auto__ = self____$1;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["treating buffer info"], 0));

try{var c__39769__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__39770__auto__ = (function (){var switch__39694__auto__ = (function (state_122786){
var state_val_122791 = (state_122786[(1)]);
if((state_val_122791 === (65))){
var _ = (function (){var statearr_122799 = state_122786;
(statearr_122799[(4)] = cljs.core.cons((67),(state_122786[(4)])));

return statearr_122799;
})();
var ___$1 = (function (){var statearr_122803 = state_122786;
(statearr_122803[(4)] = cljs.core.cons((68),(state_122786[(4)])));

return statearr_122803;
})();
var inst_122543 = cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((600000),"BIG\n");
var inst_122544 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.str,inst_122543);
var inst_122545 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.buffer,cljs.core.conj,inst_122544);
var state_122786__$1 = (function (){var statearr_122809 = state_122786;
(statearr_122809[(7)] = inst_122545);

return statearr_122809;
})();
var statearr_122810_132616 = state_122786__$1;
(statearr_122810_132616[(2)] = null);

(statearr_122810_132616[(1)] = (69));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122791 === (70))){
var inst_122618 = (state_122786[(2)]);
var _ = (function (){var statearr_122811 = state_122786;
(statearr_122811[(4)] = cljs.core.rest((state_122786[(4)])));

return statearr_122811;
})();
var state_122786__$1 = state_122786;
var statearr_122813_132618 = state_122786__$1;
(statearr_122813_132618[(2)] = inst_122618);

(statearr_122813_132618[(1)] = (67));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122791 === (62))){
var inst_122436 = (state_122786[(2)]);
var inst_122444 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_122454 = check.core.normalize_error(inst_122436);
var inst_122455 = cljs.core.list(new cljs.core.Symbol("async","<!","async/<!",-1308982001,null),new cljs.core.Symbol(null,"frags","frags",-341618008,null));
var inst_122456 = new cljs.core.Symbol(null,"=expect=>","=expect=>",-1384225590,null);
var inst_122457 = "aar\n";
var inst_122458 = ["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_122455)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_122456)," ",inst_122457].join('');
var inst_122460 = [new cljs.core.Keyword(null,"error","error",-978969032),"aar\n",inst_122454,inst_122458];
var inst_122461 = cljs.core.PersistentHashMap.fromArrays(inst_122444,inst_122460);
var inst_122462 = cljs.test.do_report(inst_122461);
var state_122786__$1 = state_122786;
var statearr_122821_132619 = state_122786__$1;
(statearr_122821_132619[(2)] = inst_122462);

(statearr_122821_132619[(1)] = (61));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122791 === (74))){
var state_122786__$1 = state_122786;
var statearr_122824_132620 = state_122786__$1;
(statearr_122824_132620[(2)] = new cljs.core.Keyword(null,"fail","fail",1706214930));

(statearr_122824_132620[(1)] = (75));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122791 === (7))){
var inst_121635 = (state_122786[(2)]);
var state_122786__$1 = (function (){var statearr_122825 = state_122786;
(statearr_122825[(8)] = inst_121635);

return statearr_122825;
})();
var statearr_122828_132623 = state_122786__$1;
(statearr_122828_132623[(2)] = null);

(statearr_122828_132623[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122791 === (59))){
var _ = (function (){var statearr_122830 = state_122786;
(statearr_122830[(4)] = cljs.core.rest((state_122786[(4)])));

return statearr_122830;
})();
var state_122786__$1 = state_122786;
var ex122823 = (state_122786__$1[(2)]);
var statearr_122831_132624 = state_122786__$1;
(statearr_122831_132624[(5)] = ex122823);


var statearr_122833_132625 = state_122786__$1;
(statearr_122833_132625[(1)] = (58));

(statearr_122833_132625[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122791 === (86))){
var inst_122765 = (state_122786[(2)]);
var _ = (function (){var statearr_122838 = state_122786;
(statearr_122838[(4)] = cljs.core.rest((state_122786[(4)])));

return statearr_122838;
})();
var state_122786__$1 = state_122786;
var statearr_122841_132626 = state_122786__$1;
(statearr_122841_132626[(2)] = inst_122765);

(statearr_122841_132626[(1)] = (78));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122791 === (20))){
var inst_121740 = (state_122786[(2)]);
var inst_121745 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_121749 = cljs.core.PersistentVector.EMPTY;
var inst_121750 = check.core.normalize_error(inst_121740);
var inst_121757 = cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"buffer","buffer",-2037140571,null));
var inst_121758 = new cljs.core.Symbol(null,"=expect=>","=expect=>",-1384225590,null);
var inst_121760 = cljs.core.PersistentVector.EMPTY;
var inst_121762 = ["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_121757)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_121758)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_121760)].join('');
var inst_121764 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_121749,inst_121750,inst_121762];
var inst_121765 = cljs.core.PersistentHashMap.fromArrays(inst_121745,inst_121764);
var inst_121767 = cljs.test.do_report(inst_121765);
var state_122786__$1 = state_122786;
var statearr_122851_132629 = state_122786__$1;
(statearr_122851_132629[(2)] = inst_121767);

(statearr_122851_132629[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122791 === (72))){
var _ = (function (){var statearr_122855 = state_122786;
(statearr_122855[(4)] = cljs.core.rest((state_122786[(4)])));

return statearr_122855;
})();
var state_122786__$1 = state_122786;
var ex122835 = (state_122786__$1[(2)]);
var statearr_122857_132630 = state_122786__$1;
(statearr_122857_132630[(5)] = ex122835);


var statearr_122860_132631 = state_122786__$1;
(statearr_122860_132631[(1)] = (71));

(statearr_122860_132631[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122791 === (58))){
var inst_122368 = (state_122786[(2)]);
var inst_122372 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_122374 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_122376 = ["bazaar"];
var inst_122377 = (new cljs.core.PersistentVector(null,1,(5),inst_122374,inst_122376,null));
var inst_122379 = check.core.normalize_error(inst_122368);
var inst_122391 = cljs.core.list(new cljs.core.Symbol(null,"get-lines","get-lines",-282739043,null));
var inst_122392 = new cljs.core.Symbol(null,"=expect=>","=expect=>",-1384225590,null);
var inst_122393 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["bazaar"], null);
var inst_122394 = ["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_122391)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_122392)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_122393)].join('');
var inst_122395 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_122377,inst_122379,inst_122394];
var inst_122396 = cljs.core.PersistentHashMap.fromArrays(inst_122372,inst_122395);
var inst_122397 = cljs.test.do_report(inst_122396);
var state_122786__$1 = state_122786;
var statearr_122867_132632 = state_122786__$1;
(statearr_122867_132632[(2)] = inst_122397);

(statearr_122867_132632[(1)] = (57));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122791 === (60))){
var _ = (function (){var statearr_122872 = state_122786;
(statearr_122872[(4)] = cljs.core.cons((63),(state_122786[(4)])));

return statearr_122872;
})();
var state_122786__$1 = state_122786;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_122786__$1,(64),self__.frags);
} else {
if((state_val_122791 === (27))){
var inst_121977 = (state_122786[(2)]);
var state_122786__$1 = (function (){var statearr_122877 = state_122786;
(statearr_122877[(9)] = inst_121977);

return statearr_122877;
})();
var statearr_122878_132633 = state_122786__$1;
(statearr_122878_132633[(2)] = null);

(statearr_122878_132633[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122791 === (1))){
var inst_121494 = (state_122786[(10)]);
var inst_121493 = (function (){return (function (){
cljs.core.async.close_BANG_(self__.frags);

return (done__60249__auto__.cljs$core$IFn$_invoke$arity$0 ? done__60249__auto__.cljs$core$IFn$_invoke$arity$0() : done__60249__auto__.call(null));
});
})();
var inst_121494__$1 = (new cljs.core.Delay(inst_121493,null));
var inst_121498 = (function (){var mark_as_done__60250__auto__ = inst_121494__$1;
return (function (){
if(cljs.core.realized_QMARK_(mark_as_done__60250__auto__)){
return null;
} else {
try{var value__9156__auto___132634 = (function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Async test error - not finalized",cljs.core.PersistentArrayMap.EMPTY)})();
if(cljs.core.truth_(value__9156__auto___132634)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"pass","pass",1574159993),null,null,cljs.core.list(new cljs.core.Symbol(null,"throw","throw",595905694,null),cljs.core.list(new cljs.core.Symbol("clojure.core","ex-info","clojure.core/ex-info",-504237117,null),"Async test error - not finalized",cljs.core.PersistentArrayMap.EMPTY)),null,value__9156__auto___132634,null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"fail","fail",1706214930),null,null,cljs.core.list(new cljs.core.Symbol(null,"throw","throw",595905694,null),cljs.core.list(new cljs.core.Symbol("clojure.core","ex-info","clojure.core/ex-info",-504237117,null),"Async test error - not finalized",cljs.core.PersistentArrayMap.EMPTY)),null,value__9156__auto___132634,null]));
}

}catch (e122891){var t__9189__auto___132635 = e122891;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol(null,"throw","throw",595905694,null),cljs.core.list(new cljs.core.Symbol("clojure.core","ex-info","clojure.core/ex-info",-504237117,null),"Async test error - not finalized",cljs.core.PersistentArrayMap.EMPTY)),null,t__9189__auto___132635,null]));
}
return cljs.core.deref(mark_as_done__60250__auto__);
}
});
})();
var inst_121499 = setTimeout(inst_121498,(3000));
var inst_121500 = (function (){var mark_as_done__60250__auto__ = inst_121494__$1;
return (function (p1__121460_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.lines,cljs.core.conj,p1__121460_SHARP_);
});
})();
var inst_121501 = (function (){var mark_as_done__60250__auto__ = inst_121494__$1;
return (function (p1__121462_SHARP_){
if(cljs.core.truth_(cljs.core.re_find(/BIG/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__121462_SHARP_)))){
return null;
} else {
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.frags,cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__121462_SHARP_));
}
});
})();
var inst_121502 = repl_tooling.repl_client.connection.treat_buffer_BANG_(self__.buffer,inst_121500,inst_121501);
var inst_121503 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_121504 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_121505 = (new cljs.core.PersistentVector(null,1,(5),inst_121503,inst_121504,null));
var inst_121506 = cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(inst_121505,cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["emits line"], 0));
var state_122786__$1 = (function (){var statearr_122901 = state_122786;
(statearr_122901[(11)] = inst_121499);

(statearr_122901[(10)] = inst_121494__$1);

(statearr_122901[(12)] = inst_121506);

(statearr_122901[(13)] = inst_121502);

return statearr_122901;
})();
var statearr_122902_132636 = state_122786__$1;
(statearr_122902_132636[(2)] = null);

(statearr_122902_132636[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122791 === (69))){
var _ = (function (){var statearr_122905 = state_122786;
(statearr_122905[(4)] = cljs.core.cons((72),(state_122786[(4)])));

return statearr_122905;
})();
var inst_122574 = (self__.get_lines.cljs$core$IFn$_invoke$arity$0 ? self__.get_lines.cljs$core$IFn$_invoke$arity$0() : self__.get_lines.call(null));
var inst_122575 = cljs.core.count(inst_122574);
var inst_122578 = cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol(null,"get-lines","get-lines",-282739043,null)));
var inst_122579 = (600000);
var inst_122580 = matcher_combinators.core.match((600000),inst_122575);
var inst_122585 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_122575], 0));
var inst_122586 = new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(inst_122580);
var inst_122587 = matcher_combinators.printer.as_string(inst_122586);
var inst_122589 = [inst_122585,"\n\nMismatch:\n",inst_122587].join('');
var inst_122591 = new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(inst_122580);
var inst_122592 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),inst_122591);
var inst_122595 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363)];
var state_122786__$1 = (function (){var statearr_122913 = state_122786;
(statearr_122913[(14)] = inst_122578);

(statearr_122913[(15)] = inst_122589);

(statearr_122913[(16)] = inst_122595);

(statearr_122913[(17)] = inst_122579);

return statearr_122913;
})();
if(inst_122592){
var statearr_122916_132637 = state_122786__$1;
(statearr_122916_132637[(1)] = (73));

} else {
var statearr_122919_132638 = state_122786__$1;
(statearr_122919_132638[(1)] = (74));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122791 === (24))){
var _ = (function (){var statearr_122924 = state_122786;
(statearr_122924[(4)] = cljs.core.rest((state_122786[(4)])));

return statearr_122924;
})();
var inst_121842 = (state_122786[(2)]);
var inst_121854 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_121857 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_121858 = (new cljs.core.PersistentVector(null,1,(5),inst_121854,inst_121857,null));
var inst_121859 = cljs.test.update_current_env_BANG_(inst_121858,cljs.core.rest);
var ___$1 = (function (){var temp__5753__auto__ = (state_122786[(5)]);
if(cljs.core.truth_(temp__5753__auto__)){
var e__38733__auto__ = temp__5753__auto__;
throw e__38733__auto__;
} else {
return null;
}
})();
var state_122786__$1 = (function (){var statearr_122930 = state_122786;
(statearr_122930[(18)] = inst_121859);

return statearr_122930;
})();
var statearr_122931_132640 = state_122786__$1;
(statearr_122931_132640[(2)] = inst_121842);

(statearr_122931_132640[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122791 === (55))){
var _ = (function (){var statearr_122934 = state_122786;
(statearr_122934[(4)] = cljs.core.rest((state_122786[(4)])));

return statearr_122934;
})();
var state_122786__$1 = state_122786;
var ex122903 = (state_122786__$1[(2)]);
var statearr_122938_132641 = state_122786__$1;
(statearr_122938_132641[(5)] = ex122903);


throw ex122903;


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122791 === (85))){
var _ = (function (){var statearr_122945 = state_122786;
(statearr_122945[(4)] = cljs.core.cons((88),(state_122786[(4)])));

return statearr_122945;
})();
var inst_122747 = (self__.get_lines.cljs$core$IFn$_invoke$arity$0 ? self__.get_lines.cljs$core$IFn$_invoke$arity$0() : self__.get_lines.call(null));
var inst_122748 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_122749 = [null];
var inst_122750 = (new cljs.core.PersistentVector(null,1,(5),inst_122748,inst_122749,null));
var inst_122751 = cljs.core.list(new cljs.core.Symbol(null,"get-lines","get-lines",-282739043,null));
var inst_122752 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null);
var inst_122753 = expectations.compare_expr.cljs$core$IFn$_invoke$arity$4(inst_122750,inst_122747,inst_122752,inst_122751);
var inst_122755 = expectations.__GT_failure_message(inst_122753);
var inst_122756 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_122751)," => ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_122752)].join('');
var inst_122757 = clojure.string.replace(inst_122755,/^.*?\n/,inst_122756);
var inst_122758 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_122759 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_122753);
var inst_122760 = [inst_122759,inst_122752,inst_122751,inst_122757];
var inst_122761 = cljs.core.PersistentHashMap.fromArrays(inst_122758,inst_122760);
var inst_122762 = cljs.test.do_report(inst_122761);
var ___$1 = (function (){var statearr_122951 = state_122786;
(statearr_122951[(4)] = cljs.core.rest((state_122786[(4)])));

return statearr_122951;
})();
var state_122786__$1 = state_122786;
var statearr_122952_132642 = state_122786__$1;
(statearr_122952_132642[(2)] = inst_122762);

(statearr_122952_132642[(1)] = (86));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122791 === (39))){
var inst_122211 = (state_122786[(2)]);
var state_122786__$1 = (function (){var statearr_122956 = state_122786;
(statearr_122956[(19)] = inst_122211);

return statearr_122956;
})();
var statearr_122958_132643 = state_122786__$1;
(statearr_122958_132643[(2)] = null);

(statearr_122958_132643[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122791 === (88))){
var _ = (function (){var statearr_122960 = state_122786;
(statearr_122960[(4)] = cljs.core.rest((state_122786[(4)])));

return statearr_122960;
})();
var state_122786__$1 = state_122786;
var ex122942 = (state_122786__$1[(2)]);
var statearr_122962_132646 = state_122786__$1;
(statearr_122962_132646[(5)] = ex122942);


var statearr_122965_132648 = state_122786__$1;
(statearr_122965_132648[(1)] = (87));

(statearr_122965_132648[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122791 === (46))){
var _ = (function (){var statearr_122967 = state_122786;
(statearr_122967[(4)] = cljs.core.rest((state_122786[(4)])));

return statearr_122967;
})();
var state_122786__$1 = state_122786;
var ex122954 = (state_122786__$1[(2)]);
var statearr_122972_132651 = state_122786__$1;
(statearr_122972_132651[(5)] = ex122954);


var statearr_122974_132652 = state_122786__$1;
(statearr_122974_132652[(1)] = (45));

(statearr_122974_132652[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122791 === (4))){
var _ = (function (){var statearr_122978 = state_122786;
(statearr_122978[(4)] = cljs.core.rest((state_122786[(4)])));

return statearr_122978;
})();
var inst_121510 = (state_122786[(2)]);
var inst_121514 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_121520 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_121521 = (new cljs.core.PersistentVector(null,1,(5),inst_121514,inst_121520,null));
var inst_121522 = cljs.test.update_current_env_BANG_(inst_121521,cljs.core.rest);
var ___$1 = (function (){var temp__5753__auto__ = (state_122786[(5)]);
if(cljs.core.truth_(temp__5753__auto__)){
var e__38733__auto__ = temp__5753__auto__;
throw e__38733__auto__;
} else {
return null;
}
})();
var state_122786__$1 = (function (){var statearr_122981 = state_122786;
(statearr_122981[(20)] = inst_121522);

return statearr_122981;
})();
var statearr_122982_132655 = state_122786__$1;
(statearr_122982_132655[(2)] = inst_121510);

(statearr_122982_132655[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122791 === (77))){
var inst_121494 = (state_122786[(10)]);
var inst_122768 = (state_122786[(2)]);
var inst_122769 = cljs.core.deref(inst_121494);
var state_122786__$1 = (function (){var statearr_122990 = state_122786;
(statearr_122990[(21)] = inst_122768);

return statearr_122990;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_122786__$1,inst_122769);
} else {
if((state_val_122791 === (54))){
var _ = (function (){var statearr_122996 = state_122786;
(statearr_122996[(4)] = cljs.core.rest((state_122786[(4)])));

return statearr_122996;
})();
var inst_122353 = (state_122786[(2)]);
var inst_122355 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_122356 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_122357 = (new cljs.core.PersistentVector(null,1,(5),inst_122355,inst_122356,null));
var inst_122358 = cljs.test.update_current_env_BANG_(inst_122357,cljs.core.rest);
var ___$1 = (function (){var temp__5753__auto__ = (state_122786[(5)]);
if(cljs.core.truth_(temp__5753__auto__)){
var e__38733__auto__ = temp__5753__auto__;
throw e__38733__auto__;
} else {
return null;
}
})();
var state_122786__$1 = (function (){var statearr_123001 = state_122786;
(statearr_123001[(22)] = inst_122358);

return statearr_123001;
})();
var statearr_123003_132657 = state_122786__$1;
(statearr_123003_132657[(2)] = inst_122353);

(statearr_123003_132657[(1)] = (53));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122791 === (15))){
var inst_121641 = (state_122786[(2)]);
var inst_121650 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_121655 = check.core.normalize_error(inst_121641);
var inst_121664 = cljs.core.list(new cljs.core.Symbol("async","<!","async/<!",-1308982001,null),new cljs.core.Symbol(null,"frags","frags",-341618008,null));
var inst_121665 = new cljs.core.Symbol(null,"=expect=>","=expect=>",-1384225590,null);
var inst_121666 = "foo\n";
var inst_121667 = ["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_121664)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_121665)," ",inst_121666].join('');
var inst_121669 = [new cljs.core.Keyword(null,"error","error",-978969032),"foo\n",inst_121655,inst_121667];
var inst_121671 = cljs.core.PersistentHashMap.fromArrays(inst_121650,inst_121669);
var inst_121674 = cljs.test.do_report(inst_121671);
var state_122786__$1 = state_122786;
var statearr_123010_132661 = state_122786__$1;
(statearr_123010_132661[(2)] = inst_121674);

(statearr_123010_132661[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122791 === (48))){
var _ = (function (){var statearr_123012 = state_122786;
(statearr_123012[(4)] = cljs.core.cons((51),(state_122786[(4)])));

return statearr_123012;
})();
var inst_122304 = cljs.core.deref(self__.buffer);
var inst_122307 = cljs.core.PersistentVector.EMPTY;
var inst_122311 = cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"buffer","buffer",-2037140571,null));
var inst_122313 = cljs.core.PersistentVector.EMPTY;
var inst_122319 = expectations.compare_expr.cljs$core$IFn$_invoke$arity$4(inst_122307,inst_122304,inst_122313,inst_122311);
var inst_122320 = expectations.__GT_failure_message(inst_122319);
var inst_122322 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_122311)," => ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_122313)].join('');
var inst_122323 = clojure.string.replace(inst_122320,/^.*?\n/,inst_122322);
var inst_122325 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_122326 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_122319);
var inst_122327 = [inst_122326,inst_122313,inst_122311,inst_122323];
var inst_122328 = cljs.core.PersistentHashMap.fromArrays(inst_122325,inst_122327);
var inst_122330 = cljs.test.do_report(inst_122328);
var ___$1 = (function (){var statearr_123014 = state_122786;
(statearr_123014[(4)] = cljs.core.rest((state_122786[(4)])));

return statearr_123014;
})();
var state_122786__$1 = state_122786;
var statearr_123016_132665 = state_122786__$1;
(statearr_123016_132665[(2)] = inst_122330);

(statearr_123016_132665[(1)] = (49));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122791 === (50))){
var inst_122266 = (state_122786[(2)]);
var inst_122269 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_122273 = cljs.core.PersistentVector.EMPTY;
var inst_122275 = check.core.normalize_error(inst_122266);
var inst_122286 = cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"buffer","buffer",-2037140571,null));
var inst_122287 = new cljs.core.Symbol(null,"=expect=>","=expect=>",-1384225590,null);
var inst_122288 = cljs.core.PersistentVector.EMPTY;
var inst_122289 = ["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_122286)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_122287)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_122288)].join('');
var inst_122290 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_122273,inst_122275,inst_122289];
var inst_122291 = cljs.core.PersistentHashMap.fromArrays(inst_122269,inst_122290);
var inst_122292 = cljs.test.do_report(inst_122291);
var state_122786__$1 = state_122786;
var statearr_123023_132667 = state_122786__$1;
(statearr_123023_132667[(2)] = inst_122292);

(statearr_123023_132667[(1)] = (49));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122791 === (75))){
var inst_122589 = (state_122786[(15)]);
var inst_122595 = (state_122786[(16)]);
var inst_122579 = (state_122786[(17)]);
var inst_122610 = (state_122786[(2)]);
var inst_122612 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(inst_122589);
var inst_122613 = [inst_122610,inst_122579,inst_122612];
var inst_122614 = cljs.core.PersistentHashMap.fromArrays(inst_122595,inst_122613);
var inst_122615 = cljs.test.do_report(inst_122614);
var _ = (function (){var statearr_123031 = state_122786;
(statearr_123031[(4)] = cljs.core.rest((state_122786[(4)])));

return statearr_123031;
})();
var state_122786__$1 = state_122786;
var statearr_123033_132668 = state_122786__$1;
(statearr_123033_132668[(2)] = inst_122615);

(statearr_123033_132668[(1)] = (70));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122791 === (21))){
var _ = (function (){var statearr_123038 = state_122786;
(statearr_123038[(4)] = cljs.core.rest((state_122786[(4)])));

return statearr_123038;
})();
var state_122786__$1 = state_122786;
var ex123018 = (state_122786__$1[(2)]);
var statearr_123042_132671 = state_122786__$1;
(statearr_123042_132671[(5)] = ex123018);


var statearr_123044_132672 = state_122786__$1;
(statearr_123044_132672[(1)] = (20));

(statearr_123044_132672[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122791 === (31))){
var inst_122071 = (state_122786[(2)]);
var _ = (function (){var statearr_123050 = state_122786;
(statearr_123050[(4)] = cljs.core.rest((state_122786[(4)])));

return statearr_123050;
})();
var state_122786__$1 = state_122786;
var statearr_123053_132675 = state_122786__$1;
(statearr_123053_132675[(2)] = inst_122071);

(statearr_123053_132675[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122791 === (32))){
var inst_121982 = (state_122786[(2)]);
var inst_121992 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_122000 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_122001 = ["baz"];
var inst_122002 = (new cljs.core.PersistentVector(null,1,(5),inst_122000,inst_122001,null));
var inst_122003 = check.core.normalize_error(inst_121982);
var inst_122006 = cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"buffer","buffer",-2037140571,null));
var inst_122007 = new cljs.core.Symbol(null,"=expect=>","=expect=>",-1384225590,null);
var inst_122008 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["baz"], null);
var inst_122009 = ["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_122006)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_122007)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_122008)].join('');
var inst_122010 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_122002,inst_122003,inst_122009];
var inst_122011 = cljs.core.PersistentHashMap.fromArrays(inst_121992,inst_122010);
var inst_122012 = cljs.test.do_report(inst_122011);
var state_122786__$1 = state_122786;
var statearr_123060_132677 = state_122786__$1;
(statearr_123060_132677[(2)] = inst_122012);

(statearr_123060_132677[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122791 === (40))){
var inst_122128 = (state_122786[(2)]);
var inst_122135 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_122147 = check.core.normalize_error(inst_122128);
var inst_122150 = cljs.core.list(new cljs.core.Symbol("async","<!","async/<!",-1308982001,null),new cljs.core.Symbol(null,"frags","frags",-341618008,null));
var inst_122151 = new cljs.core.Symbol(null,"=expect=>","=expect=>",-1384225590,null);
var inst_122152 = "foobarb\n";
var inst_122153 = ["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_122150)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_122151)," ",inst_122152].join('');
var inst_122154 = [new cljs.core.Keyword(null,"error","error",-978969032),"foobarb\n",inst_122147,inst_122153];
var inst_122156 = cljs.core.PersistentHashMap.fromArrays(inst_122135,inst_122154);
var inst_122157 = cljs.test.do_report(inst_122156);
var state_122786__$1 = state_122786;
var statearr_123068_132679 = state_122786__$1;
(statearr_123068_132679[(2)] = inst_122157);

(statearr_123068_132679[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122791 === (56))){
var _ = (function (){var statearr_123074 = state_122786;
(statearr_123074[(4)] = cljs.core.cons((59),(state_122786[(4)])));

return statearr_123074;
})();
var inst_122405 = (self__.get_lines.cljs$core$IFn$_invoke$arity$0 ? self__.get_lines.cljs$core$IFn$_invoke$arity$0() : self__.get_lines.call(null));
var inst_122409 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_122411 = ["bazaar"];
var inst_122413 = (new cljs.core.PersistentVector(null,1,(5),inst_122409,inst_122411,null));
var inst_122415 = cljs.core.list(new cljs.core.Symbol(null,"get-lines","get-lines",-282739043,null));
var inst_122416 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["bazaar"], null);
var inst_122417 = expectations.compare_expr.cljs$core$IFn$_invoke$arity$4(inst_122413,inst_122405,inst_122416,inst_122415);
var inst_122418 = expectations.__GT_failure_message(inst_122417);
var inst_122419 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_122415)," => ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_122416)].join('');
var inst_122420 = clojure.string.replace(inst_122418,/^.*?\n/,inst_122419);
var inst_122425 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_122428 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_122417);
var inst_122429 = [inst_122428,inst_122416,inst_122415,inst_122420];
var inst_122430 = cljs.core.PersistentHashMap.fromArrays(inst_122425,inst_122429);
var inst_122431 = cljs.test.do_report(inst_122430);
var ___$1 = (function (){var statearr_123079 = state_122786;
(statearr_123079[(4)] = cljs.core.rest((state_122786[(4)])));

return statearr_123079;
})();
var state_122786__$1 = state_122786;
var statearr_123080_132684 = state_122786__$1;
(statearr_123080_132684[(2)] = inst_122431);

(statearr_123080_132684[(1)] = (57));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122791 === (33))){
var _ = (function (){var statearr_123083 = state_122786;
(statearr_123083[(4)] = cljs.core.rest((state_122786[(4)])));

return statearr_123083;
})();
var state_122786__$1 = state_122786;
var ex123063 = (state_122786__$1[(2)]);
var statearr_123087_132685 = state_122786__$1;
(statearr_123087_132685[(5)] = ex123063);


var statearr_123088_132686 = state_122786__$1;
(statearr_123088_132686[(1)] = (32));

(statearr_123088_132686[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122791 === (13))){
var _ = (function (){var statearr_123091 = state_122786;
(statearr_123091[(4)] = cljs.core.cons((16),(state_122786[(4)])));

return statearr_123091;
})();
var state_122786__$1 = state_122786;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_122786__$1,(17),self__.frags);
} else {
if((state_val_122791 === (22))){
var _ = (function (){var statearr_123094 = state_122786;
(statearr_123094[(4)] = cljs.core.cons((24),(state_122786[(4)])));

return statearr_123094;
})();
var ___$1 = (function (){var statearr_123097 = state_122786;
(statearr_123097[(4)] = cljs.core.cons((25),(state_122786[(4)])));

return statearr_123097;
})();
var inst_121868 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.buffer,cljs.core.conj,"foo");
var inst_121870 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.buffer,cljs.core.conj,"bar");
var inst_121871 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.buffer,cljs.core.conj,"b\nbaz");
var state_122786__$1 = (function (){var statearr_123099 = state_122786;
(statearr_123099[(23)] = inst_121871);

(statearr_123099[(24)] = inst_121870);

(statearr_123099[(25)] = inst_121868);

return statearr_123099;
})();
var statearr_123100_132688 = state_122786__$1;
(statearr_123100_132688[(2)] = null);

(statearr_123100_132688[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122791 === (36))){
var _ = (function (){var statearr_123101 = state_122786;
(statearr_123101[(4)] = cljs.core.rest((state_122786[(4)])));

return statearr_123101;
})();
var inst_122102 = (state_122786[(2)]);
var inst_122111 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_122112 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_122113 = (new cljs.core.PersistentVector(null,1,(5),inst_122111,inst_122112,null));
var inst_122114 = cljs.test.update_current_env_BANG_(inst_122113,cljs.core.rest);
var ___$1 = (function (){var temp__5753__auto__ = (state_122786[(5)]);
if(cljs.core.truth_(temp__5753__auto__)){
var e__38733__auto__ = temp__5753__auto__;
throw e__38733__auto__;
} else {
return null;
}
})();
var state_122786__$1 = (function (){var statearr_123103 = state_122786;
(statearr_123103[(26)] = inst_122114);

return statearr_123103;
})();
var statearr_123104_132689 = state_122786__$1;
(statearr_123104_132689[(2)] = inst_122102);

(statearr_123104_132689[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122791 === (41))){
var _ = (function (){var statearr_123107 = state_122786;
(statearr_123107[(4)] = cljs.core.rest((state_122786[(4)])));

return statearr_123107;
})();
var state_122786__$1 = state_122786;
var ex123093 = (state_122786__$1[(2)]);
var statearr_123108_132693 = state_122786__$1;
(statearr_123108_132693[(5)] = ex123093);


var statearr_123109_132694 = state_122786__$1;
(statearr_123109_132694[(1)] = (40));

(statearr_123109_132694[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122791 === (43))){
var _ = (function (){var statearr_123113 = state_122786;
(statearr_123113[(4)] = cljs.core.cons((46),(state_122786[(4)])));

return statearr_123113;
})();
var state_122786__$1 = state_122786;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_122786__$1,(47),self__.frags);
} else {
if((state_val_122791 === (61))){
var inst_122504 = (state_122786[(2)]);
var _ = (function (){var statearr_123119 = state_122786;
(statearr_123119[(4)] = cljs.core.rest((state_122786[(4)])));

return statearr_123119;
})();
var state_122786__$1 = state_122786;
var statearr_123121_132698 = state_122786__$1;
(statearr_123121_132698[(2)] = inst_122504);

(statearr_123121_132698[(1)] = (54));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122791 === (29))){
var _ = (function (){var statearr_123124 = state_122786;
(statearr_123124[(4)] = cljs.core.rest((state_122786[(4)])));

return statearr_123124;
})();
var state_122786__$1 = state_122786;
var ex123111 = (state_122786__$1[(2)]);
var statearr_123126_132699 = state_122786__$1;
(statearr_123126_132699[(5)] = ex123111);


var statearr_123128_132700 = state_122786__$1;
(statearr_123128_132700[(1)] = (28));

(statearr_123128_132700[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122791 === (44))){
var inst_122260 = (state_122786[(2)]);
var state_122786__$1 = (function (){var statearr_123138 = state_122786;
(statearr_123138[(27)] = inst_122260);

return statearr_123138;
})();
var statearr_123146_132702 = state_122786__$1;
(statearr_123146_132702[(2)] = null);

(statearr_123146_132702[(1)] = (48));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122791 === (6))){
var _ = (function (){var statearr_123164 = state_122786;
(statearr_123164[(4)] = cljs.core.cons((9),(state_122786[(4)])));

return statearr_123164;
})();
var inst_121577 = (self__.get_lines.cljs$core$IFn$_invoke$arity$0 ? self__.get_lines.cljs$core$IFn$_invoke$arity$0() : self__.get_lines.call(null));
var inst_121581 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_121582 = ["foo"];
var inst_121584 = (new cljs.core.PersistentVector(null,1,(5),inst_121581,inst_121582,null));
var inst_121587 = cljs.core.list(new cljs.core.Symbol(null,"get-lines","get-lines",-282739043,null));
var inst_121589 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["foo"], null);
var inst_121591 = matcher_combinators.core.match(inst_121584,inst_121577);
var inst_121602 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_121577], 0));
var inst_121603 = new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(inst_121591);
var inst_121605 = matcher_combinators.printer.as_string(inst_121603);
var inst_121607 = [inst_121602,"\n\nMismatch:\n",inst_121605].join('');
var inst_121610 = new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(inst_121591);
var inst_121611 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),inst_121610);
var inst_121613 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363)];
var state_122786__$1 = (function (){var statearr_123191 = state_122786;
(statearr_123191[(28)] = inst_121589);

(statearr_123191[(29)] = inst_121587);

(statearr_123191[(30)] = inst_121607);

(statearr_123191[(31)] = inst_121613);

return statearr_123191;
})();
if(inst_121611){
var statearr_123202_132704 = state_122786__$1;
(statearr_123202_132704[(1)] = (10));

} else {
var statearr_123208_132705 = state_122786__$1;
(statearr_123208_132705[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122791 === (28))){
var inst_121879 = (state_122786[(2)]);
var inst_121886 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_121899 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_121900 = ["foobarb"];
var inst_121901 = (new cljs.core.PersistentVector(null,1,(5),inst_121899,inst_121900,null));
var inst_121903 = check.core.normalize_error(inst_121879);
var inst_121912 = cljs.core.list(new cljs.core.Symbol(null,"get-lines","get-lines",-282739043,null));
var inst_121914 = new cljs.core.Symbol(null,"=expect=>","=expect=>",-1384225590,null);
var inst_121915 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["foobarb"], null);
var inst_121916 = ["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_121912)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_121914)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_121915)].join('');
var inst_121917 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_121901,inst_121903,inst_121916];
var inst_121918 = cljs.core.PersistentHashMap.fromArrays(inst_121886,inst_121917);
var inst_121920 = cljs.test.do_report(inst_121918);
var state_122786__$1 = state_122786;
var statearr_123233_132706 = state_122786__$1;
(statearr_123233_132706[(2)] = inst_121920);

(statearr_123233_132706[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122791 === (64))){
var inst_122480 = (state_122786[(2)]);
var inst_122485 = cljs.core.list(new cljs.core.Symbol("async","<!","async/<!",-1308982001,null),new cljs.core.Symbol(null,"frags","frags",-341618008,null));
var inst_122488 = "aar\n";
var inst_122489 = expectations.compare_expr.cljs$core$IFn$_invoke$arity$4("aar\n",inst_122480,inst_122488,inst_122485);
var inst_122490 = expectations.__GT_failure_message(inst_122489);
var inst_122493 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_122485)," => ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_122488)].join('');
var inst_122494 = clojure.string.replace(inst_122490,/^.*?\n/,inst_122493);
var inst_122497 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_122498 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_122489);
var inst_122499 = [inst_122498,inst_122488,inst_122485,inst_122494];
var inst_122500 = cljs.core.PersistentHashMap.fromArrays(inst_122497,inst_122499);
var inst_122501 = cljs.test.do_report(inst_122500);
var _ = (function (){var statearr_123252 = state_122786;
(statearr_123252[(4)] = cljs.core.rest((state_122786[(4)])));

return statearr_123252;
})();
var state_122786__$1 = state_122786;
var statearr_123262_132708 = state_122786__$1;
(statearr_123262_132708[(2)] = inst_122501);

(statearr_123262_132708[(1)] = (61));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122791 === (51))){
var _ = (function (){var statearr_123269 = state_122786;
(statearr_123269[(4)] = cljs.core.rest((state_122786[(4)])));

return statearr_123269;
})();
var state_122786__$1 = state_122786;
var ex123211 = (state_122786__$1[(2)]);
var statearr_123286_132711 = state_122786__$1;
(statearr_123286_132711[(5)] = ex123211);


var statearr_123294_132712 = state_122786__$1;
(statearr_123294_132712[(1)] = (50));

(statearr_123294_132712[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122791 === (25))){
var _ = (function (){var statearr_123308 = state_122786;
(statearr_123308[(4)] = cljs.core.rest((state_122786[(4)])));

return statearr_123308;
})();
var state_122786__$1 = state_122786;
var ex123234 = (state_122786__$1[(2)]);
var statearr_123314_132715 = state_122786__$1;
(statearr_123314_132715[(5)] = ex123234);


throw ex123234;


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122791 === (34))){
var _ = (function (){var statearr_123334 = state_122786;
(statearr_123334[(4)] = cljs.core.cons((36),(state_122786[(4)])));

return statearr_123334;
})();
var ___$1 = (function (){var statearr_123336 = state_122786;
(statearr_123336[(4)] = cljs.core.cons((37),(state_122786[(4)])));

return statearr_123336;
})();
var state_122786__$1 = state_122786;
var statearr_123343_132717 = state_122786__$1;
(statearr_123343_132717[(2)] = null);

(statearr_123343_132717[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122791 === (17))){
var inst_121695 = (state_122786[(2)]);
var inst_121699 = cljs.core.list(new cljs.core.Symbol("async","<!","async/<!",-1308982001,null),new cljs.core.Symbol(null,"frags","frags",-341618008,null));
var inst_121703 = "foo\n";
var inst_121705 = expectations.compare_expr.cljs$core$IFn$_invoke$arity$4("foo\n",inst_121695,inst_121703,inst_121699);
var inst_121707 = expectations.__GT_failure_message(inst_121705);
var inst_121711 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_121699)," => ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_121703)].join('');
var inst_121712 = clojure.string.replace(inst_121707,/^.*?\n/,inst_121711);
var inst_121717 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_121719 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_121705);
var inst_121721 = [inst_121719,inst_121703,inst_121699,inst_121712];
var inst_121723 = cljs.core.PersistentHashMap.fromArrays(inst_121717,inst_121721);
var inst_121728 = cljs.test.do_report(inst_121723);
var _ = (function (){var statearr_123369 = state_122786;
(statearr_123369[(4)] = cljs.core.rest((state_122786[(4)])));

return statearr_123369;
})();
var state_122786__$1 = state_122786;
var statearr_123377_132722 = state_122786__$1;
(statearr_123377_132722[(2)] = inst_121728);

(statearr_123377_132722[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122791 === (3))){
var inst_121828 = (state_122786[(2)]);
var inst_121833 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_121836 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_121837 = (new cljs.core.PersistentVector(null,1,(5),inst_121833,inst_121836,null));
var inst_121838 = cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(inst_121837,cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["emits complex line"], 0));
var state_122786__$1 = (function (){var statearr_123394 = state_122786;
(statearr_123394[(32)] = inst_121838);

(statearr_123394[(33)] = inst_121828);

return statearr_123394;
})();
var statearr_123396_132725 = state_122786__$1;
(statearr_123396_132725[(2)] = null);

(statearr_123396_132725[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122791 === (12))){
var inst_121589 = (state_122786[(28)]);
var inst_121607 = (state_122786[(30)]);
var inst_121613 = (state_122786[(31)]);
var inst_121627 = (state_122786[(2)]);
var inst_121628 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(inst_121607);
var inst_121629 = [inst_121627,inst_121589,inst_121628];
var inst_121630 = cljs.core.PersistentHashMap.fromArrays(inst_121613,inst_121629);
var inst_121632 = cljs.test.do_report(inst_121630);
var _ = (function (){var statearr_123401 = state_122786;
(statearr_123401[(4)] = cljs.core.rest((state_122786[(4)])));

return statearr_123401;
})();
var state_122786__$1 = state_122786;
var statearr_123402_132726 = state_122786__$1;
(statearr_123402_132726[(2)] = inst_121632);

(statearr_123402_132726[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122791 === (2))){
var _ = (function (){var statearr_123403 = state_122786;
(statearr_123403[(4)] = cljs.core.cons((4),(state_122786[(4)])));

return statearr_123403;
})();
var ___$1 = (function (){var statearr_123405 = state_122786;
(statearr_123405[(4)] = cljs.core.cons((5),(state_122786[(4)])));

return statearr_123405;
})();
var inst_121533 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.buffer,cljs.core.conj,"foo\n");
var state_122786__$1 = (function (){var statearr_123406 = state_122786;
(statearr_123406[(34)] = inst_121533);

return statearr_123406;
})();
var statearr_123408_132727 = state_122786__$1;
(statearr_123408_132727[(2)] = null);

(statearr_123408_132727[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122791 === (66))){
var inst_122621 = (state_122786[(2)]);
var inst_122623 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_122624 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_122625 = (new cljs.core.PersistentVector(null,1,(5),inst_122623,inst_122624,null));
var inst_122626 = cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(inst_122625,cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["emits nil when closed connection"], 0));
var state_122786__$1 = (function (){var statearr_123410 = state_122786;
(statearr_123410[(35)] = inst_122626);

(statearr_123410[(36)] = inst_122621);

return statearr_123410;
})();
var statearr_123411_132729 = state_122786__$1;
(statearr_123411_132729[(2)] = null);

(statearr_123411_132729[(1)] = (76));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122791 === (23))){
var inst_122075 = (state_122786[(2)]);
var inst_122080 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_122083 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_122084 = (new cljs.core.PersistentVector(null,1,(5),inst_122080,inst_122083,null));
var inst_122086 = cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(inst_122084,cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["emits fragments"], 0));
var state_122786__$1 = (function (){var statearr_123415 = state_122786;
(statearr_123415[(37)] = inst_122086);

(statearr_123415[(38)] = inst_122075);

return statearr_123415;
})();
var statearr_123418_132731 = state_122786__$1;
(statearr_123418_132731[(2)] = null);

(statearr_123418_132731[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122791 === (47))){
var inst_122236 = (state_122786[(2)]);
var inst_122239 = cljs.core.list(new cljs.core.Symbol("async","<!","async/<!",-1308982001,null),new cljs.core.Symbol(null,"frags","frags",-341618008,null));
var inst_122241 = "baz";
var inst_122244 = expectations.compare_expr.cljs$core$IFn$_invoke$arity$4("baz",inst_122236,inst_122241,inst_122239);
var inst_122246 = expectations.__GT_failure_message(inst_122244);
var inst_122248 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_122239)," => ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_122241)].join('');
var inst_122249 = clojure.string.replace(inst_122246,/^.*?\n/,inst_122248);
var inst_122251 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_122253 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_122244);
var inst_122254 = [inst_122253,inst_122241,inst_122239,inst_122249];
var inst_122255 = cljs.core.PersistentHashMap.fromArrays(inst_122251,inst_122254);
var inst_122256 = cljs.test.do_report(inst_122255);
var _ = (function (){var statearr_123422 = state_122786;
(statearr_123422[(4)] = cljs.core.rest((state_122786[(4)])));

return statearr_123422;
})();
var state_122786__$1 = state_122786;
var statearr_123424_132733 = state_122786__$1;
(statearr_123424_132733[(2)] = inst_122256);

(statearr_123424_132733[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122791 === (35))){
var inst_122336 = (state_122786[(2)]);
var inst_122344 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_122345 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_122346 = (new cljs.core.PersistentVector(null,1,(5),inst_122344,inst_122345,null));
var inst_122347 = cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(inst_122346,cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["emits lines of already emitted frags"], 0));
var state_122786__$1 = (function (){var statearr_123427 = state_122786;
(statearr_123427[(39)] = inst_122336);

(statearr_123427[(40)] = inst_122347);

return statearr_123427;
})();
var statearr_123428_132735 = state_122786__$1;
(statearr_123428_132735[(2)] = null);

(statearr_123428_132735[(1)] = (52));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122791 === (82))){
var inst_122658 = (state_122786[(2)]);
var inst_122659 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_122661 = check.core.normalize_error(inst_122658);
var inst_122662 = cljs.core.list(new cljs.core.Symbol("async","<!","async/<!",-1308982001,null),new cljs.core.Symbol(null,"frags","frags",-341618008,null));
var inst_122664 = new cljs.core.Symbol(null,"=expect=>","=expect=>",-1384225590,null);
var inst_122665 = "";
var inst_122666 = ["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_122662)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_122664)," ",inst_122665].join('');
var inst_122667 = [new cljs.core.Keyword(null,"error","error",-978969032),"",inst_122661,inst_122666];
var inst_122668 = cljs.core.PersistentHashMap.fromArrays(inst_122659,inst_122667);
var inst_122669 = cljs.test.do_report(inst_122668);
var state_122786__$1 = state_122786;
var statearr_123433_132737 = state_122786__$1;
(statearr_123433_132737[(2)] = inst_122669);

(statearr_123433_132737[(1)] = (81));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122791 === (76))){
var _ = (function (){var statearr_123435 = state_122786;
(statearr_123435[(4)] = cljs.core.cons((78),(state_122786[(4)])));

return statearr_123435;
})();
var ___$1 = (function (){var statearr_123436 = state_122786;
(statearr_123436[(4)] = cljs.core.cons((79),(state_122786[(4)])));

return statearr_123436;
})();
var inst_122648 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.buffer,cljs.core.conj,new cljs.core.Keyword(null,"closed","closed",-919675359));
var state_122786__$1 = (function (){var statearr_123438 = state_122786;
(statearr_123438[(41)] = inst_122648);

return statearr_123438;
})();
var statearr_123439_132739 = state_122786__$1;
(statearr_123439_132739[(2)] = null);

(statearr_123439_132739[(1)] = (80));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122791 === (19))){
var inst_121825 = (state_122786[(2)]);
var _ = (function (){var statearr_123442 = state_122786;
(statearr_123442[(4)] = cljs.core.rest((state_122786[(4)])));

return statearr_123442;
})();
var state_122786__$1 = state_122786;
var statearr_123443_132740 = state_122786__$1;
(statearr_123443_132740[(2)] = inst_121825);

(statearr_123443_132740[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122791 === (57))){
var inst_122434 = (state_122786[(2)]);
var state_122786__$1 = (function (){var statearr_123445 = state_122786;
(statearr_123445[(42)] = inst_122434);

return statearr_123445;
})();
var statearr_123446_132741 = state_122786__$1;
(statearr_123446_132741[(2)] = null);

(statearr_123446_132741[(1)] = (60));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122791 === (68))){
var _ = (function (){var statearr_123449 = state_122786;
(statearr_123449[(4)] = cljs.core.rest((state_122786[(4)])));

return statearr_123449;
})();
var state_122786__$1 = state_122786;
var ex123440 = (state_122786__$1[(2)]);
var statearr_123450_132743 = state_122786__$1;
(statearr_123450_132743[(5)] = ex123440);


throw ex123440;


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122791 === (11))){
var state_122786__$1 = state_122786;
var statearr_123454_132744 = state_122786__$1;
(statearr_123454_132744[(2)] = new cljs.core.Keyword(null,"fail","fail",1706214930));

(statearr_123454_132744[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122791 === (9))){
var _ = (function (){var statearr_123456 = state_122786;
(statearr_123456[(4)] = cljs.core.rest((state_122786[(4)])));

return statearr_123456;
})();
var state_122786__$1 = state_122786;
var ex123447 = (state_122786__$1[(2)]);
var statearr_123458_132746 = state_122786__$1;
(statearr_123458_132746[(5)] = ex123447);


var statearr_123460_132747 = state_122786__$1;
(statearr_123460_132747[(1)] = (8));

(statearr_123460_132747[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122791 === (5))){
var _ = (function (){var statearr_123464 = state_122786;
(statearr_123464[(4)] = cljs.core.rest((state_122786[(4)])));

return statearr_123464;
})();
var state_122786__$1 = state_122786;
var ex123453 = (state_122786__$1[(2)]);
var statearr_123465_132750 = state_122786__$1;
(statearr_123465_132750[(5)] = ex123453);


throw ex123453;


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122791 === (83))){
var _ = (function (){var statearr_123467 = state_122786;
(statearr_123467[(4)] = cljs.core.rest((state_122786[(4)])));

return statearr_123467;
})();
var state_122786__$1 = state_122786;
var ex123455 = (state_122786__$1[(2)]);
var statearr_123470_132752 = state_122786__$1;
(statearr_123470_132752[(5)] = ex123455);


var statearr_123471_132753 = state_122786__$1;
(statearr_123471_132753[(1)] = (82));

(statearr_123471_132753[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122791 === (14))){
var inst_121732 = (state_122786[(2)]);
var state_122786__$1 = (function (){var statearr_123474 = state_122786;
(statearr_123474[(43)] = inst_121732);

return statearr_123474;
})();
var statearr_123476_132755 = state_122786__$1;
(statearr_123476_132755[(2)] = null);

(statearr_123476_132755[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122791 === (45))){
var inst_122212 = (state_122786[(2)]);
var inst_122215 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_122217 = check.core.normalize_error(inst_122212);
var inst_122218 = cljs.core.list(new cljs.core.Symbol("async","<!","async/<!",-1308982001,null),new cljs.core.Symbol(null,"frags","frags",-341618008,null));
var inst_122219 = new cljs.core.Symbol(null,"=expect=>","=expect=>",-1384225590,null);
var inst_122221 = "baz";
var inst_122222 = ["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_122218)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_122219)," ",inst_122221].join('');
var inst_122223 = [new cljs.core.Keyword(null,"error","error",-978969032),"baz",inst_122217,inst_122222];
var inst_122224 = cljs.core.PersistentHashMap.fromArrays(inst_122215,inst_122223);
var inst_122225 = cljs.test.do_report(inst_122224);
var state_122786__$1 = state_122786;
var statearr_123480_132756 = state_122786__$1;
(statearr_123480_132756[(2)] = inst_122225);

(statearr_123480_132756[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122791 === (53))){
var inst_122508 = (state_122786[(2)]);
var inst_122513 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_122514 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_122515 = (new cljs.core.PersistentVector(null,1,(5),inst_122513,inst_122514,null));
var inst_122516 = cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(inst_122515,cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["emits LOTS of lines"], 0));
var state_122786__$1 = (function (){var statearr_123484 = state_122786;
(statearr_123484[(44)] = inst_122508);

(statearr_123484[(45)] = inst_122516);

return statearr_123484;
})();
var statearr_123485_132758 = state_122786__$1;
(statearr_123485_132758[(2)] = null);

(statearr_123485_132758[(1)] = (65));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122791 === (78))){
var _ = (function (){var statearr_123489 = state_122786;
(statearr_123489[(4)] = cljs.core.rest((state_122786[(4)])));

return statearr_123489;
})();
var inst_122629 = (state_122786[(2)]);
var inst_122633 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_122634 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_122635 = (new cljs.core.PersistentVector(null,1,(5),inst_122633,inst_122634,null));
var inst_122636 = cljs.test.update_current_env_BANG_(inst_122635,cljs.core.rest);
var ___$1 = (function (){var temp__5753__auto__ = (state_122786[(5)]);
if(cljs.core.truth_(temp__5753__auto__)){
var e__38733__auto__ = temp__5753__auto__;
throw e__38733__auto__;
} else {
return null;
}
})();
var state_122786__$1 = (function (){var statearr_123493 = state_122786;
(statearr_123493[(46)] = inst_122636);

return statearr_123493;
})();
var statearr_123494_132761 = state_122786__$1;
(statearr_123494_132761[(2)] = inst_122629);

(statearr_123494_132761[(1)] = (77));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122791 === (26))){
var _ = (function (){var statearr_123497 = state_122786;
(statearr_123497[(4)] = cljs.core.cons((29),(state_122786[(4)])));

return statearr_123497;
})();
var inst_121930 = (self__.get_lines.cljs$core$IFn$_invoke$arity$0 ? self__.get_lines.cljs$core$IFn$_invoke$arity$0() : self__.get_lines.call(null));
var inst_121941 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_121947 = ["foobarb"];
var inst_121948 = (new cljs.core.PersistentVector(null,1,(5),inst_121941,inst_121947,null));
var inst_121949 = cljs.core.list(new cljs.core.Symbol(null,"get-lines","get-lines",-282739043,null));
var inst_121951 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["foobarb"], null);
var inst_121953 = expectations.compare_expr.cljs$core$IFn$_invoke$arity$4(inst_121948,inst_121930,inst_121951,inst_121949);
var inst_121959 = expectations.__GT_failure_message(inst_121953);
var inst_121962 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_121949)," => ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_121951)].join('');
var inst_121963 = clojure.string.replace(inst_121959,/^.*?\n/,inst_121962);
var inst_121964 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_121966 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_121953);
var inst_121967 = [inst_121966,inst_121951,inst_121949,inst_121963];
var inst_121968 = cljs.core.PersistentHashMap.fromArrays(inst_121964,inst_121967);
var inst_121971 = cljs.test.do_report(inst_121968);
var ___$1 = (function (){var statearr_123501 = state_122786;
(statearr_123501[(4)] = cljs.core.rest((state_122786[(4)])));

return statearr_123501;
})();
var state_122786__$1 = state_122786;
var statearr_123502_132765 = state_122786__$1;
(statearr_123502_132765[(2)] = inst_121971);

(statearr_123502_132765[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122791 === (16))){
var _ = (function (){var statearr_123505 = state_122786;
(statearr_123505[(4)] = cljs.core.rest((state_122786[(4)])));

return statearr_123505;
})();
var state_122786__$1 = state_122786;
var ex123487 = (state_122786__$1[(2)]);
var statearr_123506_132767 = state_122786__$1;
(statearr_123506_132767[(5)] = ex123487);


var statearr_123507_132769 = state_122786__$1;
(statearr_123507_132769[(1)] = (15));

(statearr_123507_132769[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122791 === (81))){
var inst_122703 = (state_122786[(2)]);
var state_122786__$1 = (function (){var statearr_123510 = state_122786;
(statearr_123510[(47)] = inst_122703);

return statearr_123510;
})();
var statearr_123511_132771 = state_122786__$1;
(statearr_123511_132771[(2)] = null);

(statearr_123511_132771[(1)] = (85));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122791 === (79))){
var _ = (function (){var statearr_123512 = state_122786;
(statearr_123512[(4)] = cljs.core.rest((state_122786[(4)])));

return statearr_123512;
})();
var state_122786__$1 = state_122786;
var ex123503 = (state_122786__$1[(2)]);
var statearr_123515_132772 = state_122786__$1;
(statearr_123515_132772[(5)] = ex123503);


throw ex123503;


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122791 === (38))){
var _ = (function (){var statearr_123519 = state_122786;
(statearr_123519[(4)] = cljs.core.cons((41),(state_122786[(4)])));

return statearr_123519;
})();
var state_122786__$1 = state_122786;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_122786__$1,(42),self__.frags);
} else {
if((state_val_122791 === (87))){
var inst_122705 = (state_122786[(2)]);
var inst_122710 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_122713 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_122714 = [null];
var inst_122715 = (new cljs.core.PersistentVector(null,1,(5),inst_122713,inst_122714,null));
var inst_122717 = check.core.normalize_error(inst_122705);
var inst_122722 = cljs.core.list(new cljs.core.Symbol(null,"get-lines","get-lines",-282739043,null));
var inst_122725 = new cljs.core.Symbol(null,"=expect=>","=expect=>",-1384225590,null);
var inst_122727 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null);
var inst_122728 = ["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_122722)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_122725)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_122727)].join('');
var inst_122729 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_122715,inst_122717,inst_122728];
var inst_122730 = cljs.core.PersistentHashMap.fromArrays(inst_122710,inst_122729);
var inst_122732 = cljs.test.do_report(inst_122730);
var state_122786__$1 = state_122786;
var statearr_123526_132773 = state_122786__$1;
(statearr_123526_132773[(2)] = inst_122732);

(statearr_123526_132773[(1)] = (86));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122791 === (30))){
var _ = (function (){var statearr_123530 = state_122786;
(statearr_123530[(4)] = cljs.core.cons((33),(state_122786[(4)])));

return statearr_123530;
})();
var inst_122028 = cljs.core.deref(self__.buffer);
var inst_122034 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_122036 = ["baz"];
var inst_122037 = (new cljs.core.PersistentVector(null,1,(5),inst_122034,inst_122036,null));
var inst_122038 = cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"buffer","buffer",-2037140571,null));
var inst_122039 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["baz"], null);
var inst_122040 = expectations.compare_expr.cljs$core$IFn$_invoke$arity$4(inst_122037,inst_122028,inst_122039,inst_122038);
var inst_122045 = expectations.__GT_failure_message(inst_122040);
var inst_122054 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_122038)," => ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_122039)].join('');
var inst_122056 = clojure.string.replace(inst_122045,/^.*?\n/,inst_122054);
var inst_122062 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_122063 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_122040);
var inst_122064 = [inst_122063,inst_122039,inst_122038,inst_122056];
var inst_122066 = cljs.core.PersistentHashMap.fromArrays(inst_122062,inst_122064);
var inst_122068 = cljs.test.do_report(inst_122066);
var ___$1 = (function (){var statearr_123535 = state_122786;
(statearr_123535[(4)] = cljs.core.rest((state_122786[(4)])));

return statearr_123535;
})();
var state_122786__$1 = state_122786;
var statearr_123536_132774 = state_122786__$1;
(statearr_123536_132774[(2)] = inst_122068);

(statearr_123536_132774[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122791 === (73))){
var state_122786__$1 = state_122786;
var statearr_123538_132775 = state_122786__$1;
(statearr_123538_132775[(2)] = new cljs.core.Keyword(null,"pass","pass",1574159993));

(statearr_123538_132775[(1)] = (75));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122791 === (10))){
var state_122786__$1 = state_122786;
var statearr_123540_132776 = state_122786__$1;
(statearr_123540_132776[(2)] = new cljs.core.Keyword(null,"pass","pass",1574159993));

(statearr_123540_132776[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122791 === (18))){
var _ = (function (){var statearr_123543 = state_122786;
(statearr_123543[(4)] = cljs.core.cons((21),(state_122786[(4)])));

return statearr_123543;
})();
var inst_121788 = cljs.core.deref(self__.buffer);
var inst_121793 = cljs.core.PersistentVector.EMPTY;
var inst_121795 = cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"buffer","buffer",-2037140571,null));
var inst_121797 = cljs.core.PersistentVector.EMPTY;
var inst_121799 = expectations.compare_expr.cljs$core$IFn$_invoke$arity$4(inst_121793,inst_121788,inst_121797,inst_121795);
var inst_121801 = expectations.__GT_failure_message(inst_121799);
var inst_121809 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_121795)," => ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_121797)].join('');
var inst_121811 = clojure.string.replace(inst_121801,/^.*?\n/,inst_121809);
var inst_121814 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_121816 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_121799);
var inst_121817 = [inst_121816,inst_121797,inst_121795,inst_121811];
var inst_121818 = cljs.core.PersistentHashMap.fromArrays(inst_121814,inst_121817);
var inst_121822 = cljs.test.do_report(inst_121818);
var ___$1 = (function (){var statearr_123550 = state_122786;
(statearr_123550[(4)] = cljs.core.rest((state_122786[(4)])));

return statearr_123550;
})();
var state_122786__$1 = state_122786;
var statearr_123551_132777 = state_122786__$1;
(statearr_123551_132777[(2)] = inst_121822);

(statearr_123551_132777[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122791 === (52))){
var _ = (function (){var statearr_123555 = state_122786;
(statearr_123555[(4)] = cljs.core.cons((54),(state_122786[(4)])));

return statearr_123555;
})();
var ___$1 = (function (){var statearr_123557 = state_122786;
(statearr_123557[(4)] = cljs.core.cons((55),(state_122786[(4)])));

return statearr_123557;
})();
var inst_122366 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.buffer,cljs.core.conj,"aar\n");
var state_122786__$1 = (function (){var statearr_123559 = state_122786;
(statearr_123559[(48)] = inst_122366);

return statearr_123559;
})();
var statearr_123561_132778 = state_122786__$1;
(statearr_123561_132778[(2)] = null);

(statearr_123561_132778[(1)] = (56));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122791 === (67))){
var _ = (function (){var statearr_123563 = state_122786;
(statearr_123563[(4)] = cljs.core.rest((state_122786[(4)])));

return statearr_123563;
})();
var inst_122519 = (state_122786[(2)]);
var inst_122532 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_122533 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_122534 = (new cljs.core.PersistentVector(null,1,(5),inst_122532,inst_122533,null));
var inst_122535 = cljs.test.update_current_env_BANG_(inst_122534,cljs.core.rest);
var ___$1 = (function (){var temp__5753__auto__ = (state_122786[(5)]);
if(cljs.core.truth_(temp__5753__auto__)){
var e__38733__auto__ = temp__5753__auto__;
throw e__38733__auto__;
} else {
return null;
}
})();
var state_122786__$1 = (function (){var statearr_123567 = state_122786;
(statearr_123567[(49)] = inst_122535);

return statearr_123567;
})();
var statearr_123569_132779 = state_122786__$1;
(statearr_123569_132779[(2)] = inst_122519);

(statearr_123569_132779[(1)] = (66));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122791 === (71))){
var inst_122546 = (state_122786[(2)]);
var inst_122549 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_122551 = check.core.normalize_error(inst_122546);
var inst_122552 = cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol(null,"get-lines","get-lines",-282739043,null)));
var inst_122553 = new cljs.core.Symbol(null,"=>","=>",-813269641,null);
var inst_122555 = (600000);
var inst_122556 = ["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_122552)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_122553)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_122555)].join('');
var inst_122558 = [new cljs.core.Keyword(null,"error","error",-978969032),(600000),inst_122551,inst_122556];
var inst_122559 = cljs.core.PersistentHashMap.fromArrays(inst_122549,inst_122558);
var inst_122560 = cljs.test.do_report(inst_122559);
var state_122786__$1 = state_122786;
var statearr_123575_132780 = state_122786__$1;
(statearr_123575_132780[(2)] = inst_122560);

(statearr_123575_132780[(1)] = (70));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122791 === (42))){
var inst_122183 = (state_122786[(2)]);
var inst_122185 = cljs.core.list(new cljs.core.Symbol("async","<!","async/<!",-1308982001,null),new cljs.core.Symbol(null,"frags","frags",-341618008,null));
var inst_122186 = "foobarb\n";
var inst_122187 = expectations.compare_expr.cljs$core$IFn$_invoke$arity$4("foobarb\n",inst_122183,inst_122186,inst_122185);
var inst_122188 = expectations.__GT_failure_message(inst_122187);
var inst_122198 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_122185)," => ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_122186)].join('');
var inst_122200 = clojure.string.replace(inst_122188,/^.*?\n/,inst_122198);
var inst_122203 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_122205 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_122187);
var inst_122206 = [inst_122205,inst_122186,inst_122185,inst_122200];
var inst_122207 = cljs.core.PersistentHashMap.fromArrays(inst_122203,inst_122206);
var inst_122208 = cljs.test.do_report(inst_122207);
var _ = (function (){var statearr_123580 = state_122786;
(statearr_123580[(4)] = cljs.core.rest((state_122786[(4)])));

return statearr_123580;
})();
var state_122786__$1 = state_122786;
var statearr_123581_132781 = state_122786__$1;
(statearr_123581_132781[(2)] = inst_122208);

(statearr_123581_132781[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122791 === (80))){
var _ = (function (){var statearr_123585 = state_122786;
(statearr_123585[(4)] = cljs.core.cons((83),(state_122786[(4)])));

return statearr_123585;
})();
var state_122786__$1 = state_122786;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_122786__$1,(84),self__.frags);
} else {
if((state_val_122791 === (37))){
var _ = (function (){var statearr_123586 = state_122786;
(statearr_123586[(4)] = cljs.core.rest((state_122786[(4)])));

return statearr_123586;
})();
var state_122786__$1 = state_122786;
var ex123578 = (state_122786__$1[(2)]);
var statearr_123587_132782 = state_122786__$1;
(statearr_123587_132782[(5)] = ex123578);


throw ex123578;


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122791 === (63))){
var _ = (function (){var statearr_123589 = state_122786;
(statearr_123589[(4)] = cljs.core.rest((state_122786[(4)])));

return statearr_123589;
})();
var state_122786__$1 = state_122786;
var ex123584 = (state_122786__$1[(2)]);
var statearr_123591_132783 = state_122786__$1;
(statearr_123591_132783[(5)] = ex123584);


var statearr_123592_132784 = state_122786__$1;
(statearr_123592_132784[(1)] = (62));

(statearr_123592_132784[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122791 === (8))){
var inst_121540 = (state_122786[(2)]);
var inst_121545 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_121548 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_121549 = ["foo"];
var inst_121550 = (new cljs.core.PersistentVector(null,1,(5),inst_121548,inst_121549,null));
var inst_121551 = check.core.normalize_error(inst_121540);
var inst_121555 = cljs.core.list(new cljs.core.Symbol(null,"get-lines","get-lines",-282739043,null));
var inst_121556 = new cljs.core.Symbol(null,"=>","=>",-813269641,null);
var inst_121557 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["foo"], null);
var inst_121558 = ["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_121555)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_121556)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_121557)].join('');
var inst_121560 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_121550,inst_121551,inst_121558];
var inst_121561 = cljs.core.PersistentHashMap.fromArrays(inst_121545,inst_121560);
var inst_121562 = cljs.test.do_report(inst_121561);
var state_122786__$1 = state_122786;
var statearr_123594_132785 = state_122786__$1;
(statearr_123594_132785[(2)] = inst_121562);

(statearr_123594_132785[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122791 === (49))){
var inst_122333 = (state_122786[(2)]);
var _ = (function (){var statearr_123597 = state_122786;
(statearr_123597[(4)] = cljs.core.rest((state_122786[(4)])));

return statearr_123597;
})();
var state_122786__$1 = state_122786;
var statearr_123600_132786 = state_122786__$1;
(statearr_123600_132786[(2)] = inst_122333);

(statearr_123600_132786[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122791 === (84))){
var inst_122679 = (state_122786[(2)]);
var inst_122682 = cljs.core.list(new cljs.core.Symbol("async","<!","async/<!",-1308982001,null),new cljs.core.Symbol(null,"frags","frags",-341618008,null));
var inst_122683 = "";
var inst_122686 = expectations.compare_expr.cljs$core$IFn$_invoke$arity$4("",inst_122679,inst_122683,inst_122682);
var inst_122687 = expectations.__GT_failure_message(inst_122686);
var inst_122689 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_122682)," => ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_122683)].join('');
var inst_122690 = clojure.string.replace(inst_122687,/^.*?\n/,inst_122689);
var inst_122696 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_122697 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_122686);
var inst_122698 = [inst_122697,inst_122683,inst_122682,inst_122690];
var inst_122699 = cljs.core.PersistentHashMap.fromArrays(inst_122696,inst_122698);
var inst_122700 = cljs.test.do_report(inst_122699);
var _ = (function (){var statearr_123601 = state_122786;
(statearr_123601[(4)] = cljs.core.rest((state_122786[(4)])));

return statearr_123601;
})();
var state_122786__$1 = state_122786;
var statearr_123603_132787 = state_122786__$1;
(statearr_123603_132787[(2)] = inst_122700);

(statearr_123603_132787[(1)] = (81));


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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
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
var repl_tooling$repl_client$connection_test$state_machine__39695__auto__ = null;
var repl_tooling$repl_client$connection_test$state_machine__39695__auto____0 = (function (){
var statearr_123608 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_123608[(0)] = repl_tooling$repl_client$connection_test$state_machine__39695__auto__);

(statearr_123608[(1)] = (1));

return statearr_123608;
});
var repl_tooling$repl_client$connection_test$state_machine__39695__auto____1 = (function (state_122786){
while(true){
var ret_value__39696__auto__ = (function (){try{while(true){
var result__39697__auto__ = switch__39694__auto__(state_122786);
if(cljs.core.keyword_identical_QMARK_(result__39697__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39697__auto__;
}
break;
}
}catch (e123610){var ex__39698__auto__ = e123610;
var statearr_123612_132788 = state_122786;
(statearr_123612_132788[(2)] = ex__39698__auto__);


if(cljs.core.seq((state_122786[(4)]))){
var statearr_123613_132789 = state_122786;
(statearr_123613_132789[(1)] = cljs.core.first((state_122786[(4)])));

} else {
throw ex__39698__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__132790 = state_122786;
state_122786 = G__132790;
continue;
} else {
return ret_value__39696__auto__;
}
break;
}
});
repl_tooling$repl_client$connection_test$state_machine__39695__auto__ = function(state_122786){
switch(arguments.length){
case 0:
return repl_tooling$repl_client$connection_test$state_machine__39695__auto____0.call(this);
case 1:
return repl_tooling$repl_client$connection_test$state_machine__39695__auto____1.call(this,state_122786);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
repl_tooling$repl_client$connection_test$state_machine__39695__auto__.cljs$core$IFn$_invoke$arity$0 = repl_tooling$repl_client$connection_test$state_machine__39695__auto____0;
repl_tooling$repl_client$connection_test$state_machine__39695__auto__.cljs$core$IFn$_invoke$arity$1 = repl_tooling$repl_client$connection_test$state_machine__39695__auto____1;
return repl_tooling$repl_client$connection_test$state_machine__39695__auto__;
})()
})();
var state__39771__auto__ = (function (){var statearr_123615 = f__39770__auto__();
(statearr_123615[(6)] = c__39769__auto__);

return statearr_123615;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39771__auto__);
}));

return c__39769__auto__;
}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}}));

(repl_tooling.repl_client.connection_test.t_repl_tooling$repl_client$connection_test121471.prototype.apply = (function (self__,args121479){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args121479)));
}));

(repl_tooling.repl_client.connection_test.t_repl_tooling$repl_client$connection_test121471.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done__60249__auto__){
var self__ = this;
var ___9200__auto__ = this;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["treating buffer info"], 0));

try{var c__39769__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__39770__auto__ = (function (){var switch__39694__auto__ = (function (state_124269){
var state_val_124271 = (state_124269[(1)]);
if((state_val_124271 === (65))){
var _ = (function (){var statearr_124272 = state_124269;
(statearr_124272[(4)] = cljs.core.cons((67),(state_124269[(4)])));

return statearr_124272;
})();
var ___$1 = (function (){var statearr_124273 = state_124269;
(statearr_124273[(4)] = cljs.core.cons((68),(state_124269[(4)])));

return statearr_124273;
})();
var inst_124117 = cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((600000),"BIG\n");
var inst_124118 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.str,inst_124117);
var inst_124119 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.buffer,cljs.core.conj,inst_124118);
var state_124269__$1 = (function (){var statearr_124275 = state_124269;
(statearr_124275[(7)] = inst_124119);

return statearr_124275;
})();
var statearr_124277_132795 = state_124269__$1;
(statearr_124277_132795[(2)] = null);

(statearr_124277_132795[(1)] = (69));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124271 === (70))){
var inst_124165 = (state_124269[(2)]);
var _ = (function (){var statearr_124281 = state_124269;
(statearr_124281[(4)] = cljs.core.rest((state_124269[(4)])));

return statearr_124281;
})();
var state_124269__$1 = state_124269;
var statearr_124282_132798 = state_124269__$1;
(statearr_124282_132798[(2)] = inst_124165);

(statearr_124282_132798[(1)] = (67));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124271 === (62))){
var inst_124061 = (state_124269[(2)]);
var inst_124062 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_124063 = check.core.normalize_error(inst_124061);
var inst_124064 = cljs.core.list(new cljs.core.Symbol("async","<!","async/<!",-1308982001,null),new cljs.core.Symbol(null,"frags","frags",-341618008,null));
var inst_124065 = new cljs.core.Symbol(null,"=expect=>","=expect=>",-1384225590,null);
var inst_124066 = "aar\n";
var inst_124067 = ["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_124064)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_124065)," ",inst_124066].join('');
var inst_124068 = [new cljs.core.Keyword(null,"error","error",-978969032),"aar\n",inst_124063,inst_124067];
var inst_124069 = cljs.core.PersistentHashMap.fromArrays(inst_124062,inst_124068);
var inst_124070 = cljs.test.do_report(inst_124069);
var state_124269__$1 = state_124269;
var statearr_124286_132800 = state_124269__$1;
(statearr_124286_132800[(2)] = inst_124070);

(statearr_124286_132800[(1)] = (61));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124271 === (74))){
var state_124269__$1 = state_124269;
var statearr_124289_132802 = state_124269__$1;
(statearr_124289_132802[(2)] = new cljs.core.Keyword(null,"fail","fail",1706214930));

(statearr_124289_132802[(1)] = (75));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124271 === (7))){
var inst_123690 = (state_124269[(2)]);
var state_124269__$1 = (function (){var statearr_124291 = state_124269;
(statearr_124291[(8)] = inst_123690);

return statearr_124291;
})();
var statearr_124293_132804 = state_124269__$1;
(statearr_124293_132804[(2)] = null);

(statearr_124293_132804[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124271 === (59))){
var _ = (function (){var statearr_124295 = state_124269;
(statearr_124295[(4)] = cljs.core.rest((state_124269[(4)])));

return statearr_124295;
})();
var state_124269__$1 = state_124269;
var ex124287 = (state_124269__$1[(2)]);
var statearr_124298_132805 = state_124269__$1;
(statearr_124298_132805[(5)] = ex124287);


var statearr_124300_132806 = state_124269__$1;
(statearr_124300_132806[(1)] = (58));

(statearr_124300_132806[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124271 === (86))){
var inst_124256 = (state_124269[(2)]);
var _ = (function (){var statearr_124305 = state_124269;
(statearr_124305[(4)] = cljs.core.rest((state_124269[(4)])));

return statearr_124305;
})();
var state_124269__$1 = state_124269;
var statearr_124306_132808 = state_124269__$1;
(statearr_124306_132808[(2)] = inst_124256);

(statearr_124306_132808[(1)] = (78));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124271 === (20))){
var inst_123729 = (state_124269[(2)]);
var inst_123730 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_123731 = cljs.core.PersistentVector.EMPTY;
var inst_123732 = check.core.normalize_error(inst_123729);
var inst_123733 = cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"buffer","buffer",-2037140571,null));
var inst_123734 = new cljs.core.Symbol(null,"=expect=>","=expect=>",-1384225590,null);
var inst_123735 = cljs.core.PersistentVector.EMPTY;
var inst_123736 = ["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_123733)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_123734)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_123735)].join('');
var inst_123737 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_123731,inst_123732,inst_123736];
var inst_123738 = cljs.core.PersistentHashMap.fromArrays(inst_123730,inst_123737);
var inst_123739 = cljs.test.do_report(inst_123738);
var state_124269__$1 = state_124269;
var statearr_124311_132810 = state_124269__$1;
(statearr_124311_132810[(2)] = inst_123739);

(statearr_124311_132810[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124271 === (72))){
var _ = (function (){var statearr_124313 = state_124269;
(statearr_124313[(4)] = cljs.core.rest((state_124269[(4)])));

return statearr_124313;
})();
var state_124269__$1 = state_124269;
var ex124303 = (state_124269__$1[(2)]);
var statearr_124315_132812 = state_124269__$1;
(statearr_124315_132812[(5)] = ex124303);


var statearr_124316_132813 = state_124269__$1;
(statearr_124316_132813[(1)] = (71));

(statearr_124316_132813[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124271 === (58))){
var inst_124021 = (state_124269[(2)]);
var inst_124022 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_124023 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_124024 = ["bazaar"];
var inst_124025 = (new cljs.core.PersistentVector(null,1,(5),inst_124023,inst_124024,null));
var inst_124026 = check.core.normalize_error(inst_124021);
var inst_124028 = cljs.core.list(new cljs.core.Symbol(null,"get-lines","get-lines",-282739043,null));
var inst_124029 = new cljs.core.Symbol(null,"=expect=>","=expect=>",-1384225590,null);
var inst_124030 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["bazaar"], null);
var inst_124031 = ["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_124028)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_124029)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_124030)].join('');
var inst_124032 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_124025,inst_124026,inst_124031];
var inst_124033 = cljs.core.PersistentHashMap.fromArrays(inst_124022,inst_124032);
var inst_124034 = cljs.test.do_report(inst_124033);
var state_124269__$1 = state_124269;
var statearr_124319_132815 = state_124269__$1;
(statearr_124319_132815[(2)] = inst_124034);

(statearr_124319_132815[(1)] = (57));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124271 === (60))){
var _ = (function (){var statearr_124323 = state_124269;
(statearr_124323[(4)] = cljs.core.cons((63),(state_124269[(4)])));

return statearr_124323;
})();
var state_124269__$1 = state_124269;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_124269__$1,(64),self__.frags);
} else {
if((state_val_124271 === (27))){
var inst_123823 = (state_124269[(2)]);
var state_124269__$1 = (function (){var statearr_124326 = state_124269;
(statearr_124326[(9)] = inst_123823);

return statearr_124326;
})();
var statearr_124327_132816 = state_124269__$1;
(statearr_124327_132816[(2)] = null);

(statearr_124327_132816[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124271 === (1))){
var inst_123619 = (state_124269[(10)]);
var inst_123618 = (function (){return (function (){
cljs.core.async.close_BANG_(self__.frags);

return (done__60249__auto__.cljs$core$IFn$_invoke$arity$0 ? done__60249__auto__.cljs$core$IFn$_invoke$arity$0() : done__60249__auto__.call(null));
});
})();
var inst_123619__$1 = (new cljs.core.Delay(inst_123618,null));
var inst_123621 = (function (){var mark_as_done__60250__auto__ = inst_123619__$1;
return (function (){
if(cljs.core.realized_QMARK_(mark_as_done__60250__auto__)){
return null;
} else {
try{var value__9156__auto___132818 = (function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Async test error - not finalized",cljs.core.PersistentArrayMap.EMPTY)})();
if(cljs.core.truth_(value__9156__auto___132818)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"pass","pass",1574159993),null,null,cljs.core.list(new cljs.core.Symbol(null,"throw","throw",595905694,null),cljs.core.list(new cljs.core.Symbol("clojure.core","ex-info","clojure.core/ex-info",-504237117,null),"Async test error - not finalized",cljs.core.PersistentArrayMap.EMPTY)),null,value__9156__auto___132818,null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"fail","fail",1706214930),null,null,cljs.core.list(new cljs.core.Symbol(null,"throw","throw",595905694,null),cljs.core.list(new cljs.core.Symbol("clojure.core","ex-info","clojure.core/ex-info",-504237117,null),"Async test error - not finalized",cljs.core.PersistentArrayMap.EMPTY)),null,value__9156__auto___132818,null]));
}

}catch (e124340){var t__9189__auto___132821 = e124340;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol(null,"throw","throw",595905694,null),cljs.core.list(new cljs.core.Symbol("clojure.core","ex-info","clojure.core/ex-info",-504237117,null),"Async test error - not finalized",cljs.core.PersistentArrayMap.EMPTY)),null,t__9189__auto___132821,null]));
}
return cljs.core.deref(mark_as_done__60250__auto__);
}
});
})();
var inst_123622 = setTimeout(inst_123621,(3000));
var inst_123623 = (function (){var mark_as_done__60250__auto__ = inst_123619__$1;
return (function (p1__121460_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.lines,cljs.core.conj,p1__121460_SHARP_);
});
})();
var inst_123624 = (function (){var mark_as_done__60250__auto__ = inst_123619__$1;
return (function (p1__121462_SHARP_){
if(cljs.core.truth_(cljs.core.re_find(/BIG/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__121462_SHARP_)))){
return null;
} else {
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.frags,cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__121462_SHARP_));
}
});
})();
var inst_123625 = repl_tooling.repl_client.connection.treat_buffer_BANG_(self__.buffer,inst_123623,inst_123624);
var inst_123626 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_123627 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_123628 = (new cljs.core.PersistentVector(null,1,(5),inst_123626,inst_123627,null));
var inst_123629 = cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(inst_123628,cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["emits line"], 0));
var state_124269__$1 = (function (){var statearr_124345 = state_124269;
(statearr_124345[(11)] = inst_123629);

(statearr_124345[(12)] = inst_123625);

(statearr_124345[(10)] = inst_123619__$1);

(statearr_124345[(13)] = inst_123622);

return statearr_124345;
})();
var statearr_124347_132824 = state_124269__$1;
(statearr_124347_132824[(2)] = null);

(statearr_124347_132824[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124271 === (69))){
var _ = (function (){var statearr_124349 = state_124269;
(statearr_124349[(4)] = cljs.core.cons((72),(state_124269[(4)])));

return statearr_124349;
})();
var inst_124140 = (self__.get_lines.cljs$core$IFn$_invoke$arity$0 ? self__.get_lines.cljs$core$IFn$_invoke$arity$0() : self__.get_lines.call(null));
var inst_124141 = cljs.core.count(inst_124140);
var inst_124142 = cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol(null,"get-lines","get-lines",-282739043,null)));
var inst_124143 = (600000);
var inst_124145 = matcher_combinators.core.match((600000),inst_124141);
var inst_124146 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_124141], 0));
var inst_124147 = new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(inst_124145);
var inst_124148 = matcher_combinators.printer.as_string(inst_124147);
var inst_124149 = [inst_124146,"\n\nMismatch:\n",inst_124148].join('');
var inst_124151 = new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(inst_124145);
var inst_124152 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),inst_124151);
var inst_124153 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363)];
var state_124269__$1 = (function (){var statearr_124352 = state_124269;
(statearr_124352[(14)] = inst_124149);

(statearr_124352[(15)] = inst_124143);

(statearr_124352[(16)] = inst_124153);

(statearr_124352[(17)] = inst_124142);

return statearr_124352;
})();
if(inst_124152){
var statearr_124354_132826 = state_124269__$1;
(statearr_124354_132826[(1)] = (73));

} else {
var statearr_124355_132827 = state_124269__$1;
(statearr_124355_132827[(1)] = (74));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124271 === (24))){
var _ = (function (){var statearr_124359 = state_124269;
(statearr_124359[(4)] = cljs.core.rest((state_124269[(4)])));

return statearr_124359;
})();
var inst_123772 = (state_124269[(2)]);
var inst_123773 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_123774 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_123775 = (new cljs.core.PersistentVector(null,1,(5),inst_123773,inst_123774,null));
var inst_123776 = cljs.test.update_current_env_BANG_(inst_123775,cljs.core.rest);
var ___$1 = (function (){var temp__5753__auto__ = (state_124269[(5)]);
if(cljs.core.truth_(temp__5753__auto__)){
var e__38733__auto__ = temp__5753__auto__;
throw e__38733__auto__;
} else {
return null;
}
})();
var state_124269__$1 = (function (){var statearr_124360 = state_124269;
(statearr_124360[(18)] = inst_123776);

return statearr_124360;
})();
var statearr_124362_132829 = state_124269__$1;
(statearr_124362_132829[(2)] = inst_123772);

(statearr_124362_132829[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124271 === (55))){
var _ = (function (){var statearr_124363 = state_124269;
(statearr_124363[(4)] = cljs.core.rest((state_124269[(4)])));

return statearr_124363;
})();
var state_124269__$1 = state_124269;
var ex124348 = (state_124269__$1[(2)]);
var statearr_124365_132831 = state_124269__$1;
(statearr_124365_132831[(5)] = ex124348);


throw ex124348;


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124271 === (85))){
var _ = (function (){var statearr_124368 = state_124269;
(statearr_124368[(4)] = cljs.core.cons((88),(state_124269[(4)])));

return statearr_124368;
})();
var inst_124238 = (self__.get_lines.cljs$core$IFn$_invoke$arity$0 ? self__.get_lines.cljs$core$IFn$_invoke$arity$0() : self__.get_lines.call(null));
var inst_124239 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_124240 = [null];
var inst_124241 = (new cljs.core.PersistentVector(null,1,(5),inst_124239,inst_124240,null));
var inst_124242 = cljs.core.list(new cljs.core.Symbol(null,"get-lines","get-lines",-282739043,null));
var inst_124243 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null);
var inst_124244 = expectations.compare_expr.cljs$core$IFn$_invoke$arity$4(inst_124241,inst_124238,inst_124243,inst_124242);
var inst_124246 = expectations.__GT_failure_message(inst_124244);
var inst_124247 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_124242)," => ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_124243)].join('');
var inst_124248 = clojure.string.replace(inst_124246,/^.*?\n/,inst_124247);
var inst_124249 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_124250 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_124244);
var inst_124251 = [inst_124250,inst_124243,inst_124242,inst_124248];
var inst_124252 = cljs.core.PersistentHashMap.fromArrays(inst_124249,inst_124251);
var inst_124253 = cljs.test.do_report(inst_124252);
var ___$1 = (function (){var statearr_124370 = state_124269;
(statearr_124370[(4)] = cljs.core.rest((state_124269[(4)])));

return statearr_124370;
})();
var state_124269__$1 = state_124269;
var statearr_124371_132834 = state_124269__$1;
(statearr_124371_132834[(2)] = inst_124253);

(statearr_124371_132834[(1)] = (86));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124271 === (39))){
var inst_123924 = (state_124269[(2)]);
var state_124269__$1 = (function (){var statearr_124375 = state_124269;
(statearr_124375[(19)] = inst_123924);

return statearr_124375;
})();
var statearr_124376_132836 = state_124269__$1;
(statearr_124376_132836[(2)] = null);

(statearr_124376_132836[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124271 === (88))){
var _ = (function (){var statearr_124378 = state_124269;
(statearr_124378[(4)] = cljs.core.rest((state_124269[(4)])));

return statearr_124378;
})();
var state_124269__$1 = state_124269;
var ex124366 = (state_124269__$1[(2)]);
var statearr_124380_132838 = state_124269__$1;
(statearr_124380_132838[(5)] = ex124366);


var statearr_124381_132840 = state_124269__$1;
(statearr_124381_132840[(1)] = (87));

(statearr_124381_132840[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124271 === (46))){
var _ = (function (){var statearr_124382 = state_124269;
(statearr_124382[(4)] = cljs.core.rest((state_124269[(4)])));

return statearr_124382;
})();
var state_124269__$1 = state_124269;
var ex124373 = (state_124269__$1[(2)]);
var statearr_124383_132843 = state_124269__$1;
(statearr_124383_132843[(5)] = ex124373);


var statearr_124384_132844 = state_124269__$1;
(statearr_124384_132844[(1)] = (45));

(statearr_124384_132844[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124271 === (4))){
var _ = (function (){var statearr_124387 = state_124269;
(statearr_124387[(4)] = cljs.core.rest((state_124269[(4)])));

return statearr_124387;
})();
var inst_123631 = (state_124269[(2)]);
var inst_123632 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_123633 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_123634 = (new cljs.core.PersistentVector(null,1,(5),inst_123632,inst_123633,null));
var inst_123635 = cljs.test.update_current_env_BANG_(inst_123634,cljs.core.rest);
var ___$1 = (function (){var temp__5753__auto__ = (state_124269[(5)]);
if(cljs.core.truth_(temp__5753__auto__)){
var e__38733__auto__ = temp__5753__auto__;
throw e__38733__auto__;
} else {
return null;
}
})();
var state_124269__$1 = (function (){var statearr_124388 = state_124269;
(statearr_124388[(20)] = inst_123635);

return statearr_124388;
})();
var statearr_124390_132847 = state_124269__$1;
(statearr_124390_132847[(2)] = inst_123631);

(statearr_124390_132847[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124271 === (77))){
var inst_123619 = (state_124269[(10)]);
var inst_124259 = (state_124269[(2)]);
var inst_124260 = cljs.core.deref(inst_123619);
var state_124269__$1 = (function (){var statearr_124394 = state_124269;
(statearr_124394[(21)] = inst_124259);

return statearr_124394;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_124269__$1,inst_124260);
} else {
if((state_val_124271 === (54))){
var _ = (function (){var statearr_124396 = state_124269;
(statearr_124396[(4)] = cljs.core.rest((state_124269[(4)])));

return statearr_124396;
})();
var inst_124007 = (state_124269[(2)]);
var inst_124008 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_124009 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_124010 = (new cljs.core.PersistentVector(null,1,(5),inst_124008,inst_124009,null));
var inst_124011 = cljs.test.update_current_env_BANG_(inst_124010,cljs.core.rest);
var ___$1 = (function (){var temp__5753__auto__ = (state_124269[(5)]);
if(cljs.core.truth_(temp__5753__auto__)){
var e__38733__auto__ = temp__5753__auto__;
throw e__38733__auto__;
} else {
return null;
}
})();
var state_124269__$1 = (function (){var statearr_124399 = state_124269;
(statearr_124399[(22)] = inst_124011);

return statearr_124399;
})();
var statearr_124400_132849 = state_124269__$1;
(statearr_124400_132849[(2)] = inst_124007);

(statearr_124400_132849[(1)] = (53));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124271 === (15))){
var inst_123691 = (state_124269[(2)]);
var inst_123693 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_123695 = check.core.normalize_error(inst_123691);
var inst_123697 = cljs.core.list(new cljs.core.Symbol("async","<!","async/<!",-1308982001,null),new cljs.core.Symbol(null,"frags","frags",-341618008,null));
var inst_123698 = new cljs.core.Symbol(null,"=expect=>","=expect=>",-1384225590,null);
var inst_123699 = "foo\n";
var inst_123700 = ["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_123697)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_123698)," ",inst_123699].join('');
var inst_123701 = [new cljs.core.Keyword(null,"error","error",-978969032),"foo\n",inst_123695,inst_123700];
var inst_123702 = cljs.core.PersistentHashMap.fromArrays(inst_123693,inst_123701);
var inst_123703 = cljs.test.do_report(inst_123702);
var state_124269__$1 = state_124269;
var statearr_124404_132852 = state_124269__$1;
(statearr_124404_132852[(2)] = inst_123703);

(statearr_124404_132852[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124271 === (48))){
var _ = (function (){var statearr_124405 = state_124269;
(statearr_124405[(4)] = cljs.core.cons((51),(state_124269[(4)])));

return statearr_124405;
})();
var inst_123981 = cljs.core.deref(self__.buffer);
var inst_123982 = cljs.core.PersistentVector.EMPTY;
var inst_123983 = cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"buffer","buffer",-2037140571,null));
var inst_123984 = cljs.core.PersistentVector.EMPTY;
var inst_123985 = expectations.compare_expr.cljs$core$IFn$_invoke$arity$4(inst_123982,inst_123981,inst_123984,inst_123983);
var inst_123986 = expectations.__GT_failure_message(inst_123985);
var inst_123987 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_123983)," => ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_123984)].join('');
var inst_123988 = clojure.string.replace(inst_123986,/^.*?\n/,inst_123987);
var inst_123990 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_123991 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_123985);
var inst_123992 = [inst_123991,inst_123984,inst_123983,inst_123988];
var inst_123993 = cljs.core.PersistentHashMap.fromArrays(inst_123990,inst_123992);
var inst_123994 = cljs.test.do_report(inst_123993);
var ___$1 = (function (){var statearr_124410 = state_124269;
(statearr_124410[(4)] = cljs.core.rest((state_124269[(4)])));

return statearr_124410;
})();
var state_124269__$1 = state_124269;
var statearr_124411_132858 = state_124269__$1;
(statearr_124411_132858[(2)] = inst_123994);

(statearr_124411_132858[(1)] = (49));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124271 === (50))){
var inst_123961 = (state_124269[(2)]);
var inst_123962 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_123964 = cljs.core.PersistentVector.EMPTY;
var inst_123965 = check.core.normalize_error(inst_123961);
var inst_123968 = cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"buffer","buffer",-2037140571,null));
var inst_123969 = new cljs.core.Symbol(null,"=expect=>","=expect=>",-1384225590,null);
var inst_123970 = cljs.core.PersistentVector.EMPTY;
var inst_123971 = ["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_123968)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_123969)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_123970)].join('');
var inst_123972 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_123964,inst_123965,inst_123971];
var inst_123973 = cljs.core.PersistentHashMap.fromArrays(inst_123962,inst_123972);
var inst_123974 = cljs.test.do_report(inst_123973);
var state_124269__$1 = state_124269;
var statearr_124417_132862 = state_124269__$1;
(statearr_124417_132862[(2)] = inst_123974);

(statearr_124417_132862[(1)] = (49));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124271 === (75))){
var inst_124149 = (state_124269[(14)]);
var inst_124143 = (state_124269[(15)]);
var inst_124153 = (state_124269[(16)]);
var inst_124158 = (state_124269[(2)]);
var inst_124159 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(inst_124149);
var inst_124160 = [inst_124158,inst_124143,inst_124159];
var inst_124161 = cljs.core.PersistentHashMap.fromArrays(inst_124153,inst_124160);
var inst_124162 = cljs.test.do_report(inst_124161);
var _ = (function (){var statearr_124421 = state_124269;
(statearr_124421[(4)] = cljs.core.rest((state_124269[(4)])));

return statearr_124421;
})();
var state_124269__$1 = state_124269;
var statearr_124422_132864 = state_124269__$1;
(statearr_124422_132864[(2)] = inst_124162);

(statearr_124422_132864[(1)] = (70));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124271 === (21))){
var _ = (function (){var statearr_124423 = state_124269;
(statearr_124423[(4)] = cljs.core.rest((state_124269[(4)])));

return statearr_124423;
})();
var state_124269__$1 = state_124269;
var ex124414 = (state_124269__$1[(2)]);
var statearr_124425_132865 = state_124269__$1;
(statearr_124425_132865[(5)] = ex124414);


var statearr_124426_132866 = state_124269__$1;
(statearr_124426_132866[(1)] = (20));

(statearr_124426_132866[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124271 === (31))){
var inst_123865 = (state_124269[(2)]);
var _ = (function (){var statearr_124429 = state_124269;
(statearr_124429[(4)] = cljs.core.rest((state_124269[(4)])));

return statearr_124429;
})();
var state_124269__$1 = state_124269;
var statearr_124431_132867 = state_124269__$1;
(statearr_124431_132867[(2)] = inst_123865);

(statearr_124431_132867[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124271 === (32))){
var inst_123824 = (state_124269[(2)]);
var inst_123825 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_123828 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_123829 = ["baz"];
var inst_123830 = (new cljs.core.PersistentVector(null,1,(5),inst_123828,inst_123829,null));
var inst_123831 = check.core.normalize_error(inst_123824);
var inst_123832 = cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"buffer","buffer",-2037140571,null));
var inst_123833 = new cljs.core.Symbol(null,"=expect=>","=expect=>",-1384225590,null);
var inst_123834 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["baz"], null);
var inst_123835 = ["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_123832)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_123833)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_123834)].join('');
var inst_123836 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_123830,inst_123831,inst_123835];
var inst_123837 = cljs.core.PersistentHashMap.fromArrays(inst_123825,inst_123836);
var inst_123838 = cljs.test.do_report(inst_123837);
var state_124269__$1 = state_124269;
var statearr_124437_132870 = state_124269__$1;
(statearr_124437_132870[(2)] = inst_123838);

(statearr_124437_132870[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124271 === (40))){
var inst_123888 = (state_124269[(2)]);
var inst_123890 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_123891 = check.core.normalize_error(inst_123888);
var inst_123894 = cljs.core.list(new cljs.core.Symbol("async","<!","async/<!",-1308982001,null),new cljs.core.Symbol(null,"frags","frags",-341618008,null));
var inst_123895 = new cljs.core.Symbol(null,"=expect=>","=expect=>",-1384225590,null);
var inst_123896 = "foobarb\n";
var inst_123897 = ["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_123894)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_123895)," ",inst_123896].join('');
var inst_123898 = [new cljs.core.Keyword(null,"error","error",-978969032),"foobarb\n",inst_123891,inst_123897];
var inst_123899 = cljs.core.PersistentHashMap.fromArrays(inst_123890,inst_123898);
var inst_123900 = cljs.test.do_report(inst_123899);
var state_124269__$1 = state_124269;
var statearr_124442_132871 = state_124269__$1;
(statearr_124442_132871[(2)] = inst_123900);

(statearr_124442_132871[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124271 === (56))){
var _ = (function (){var statearr_124446 = state_124269;
(statearr_124446[(4)] = cljs.core.cons((59),(state_124269[(4)])));

return statearr_124446;
})();
var inst_124041 = (self__.get_lines.cljs$core$IFn$_invoke$arity$0 ? self__.get_lines.cljs$core$IFn$_invoke$arity$0() : self__.get_lines.call(null));
var inst_124042 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_124043 = ["bazaar"];
var inst_124044 = (new cljs.core.PersistentVector(null,1,(5),inst_124042,inst_124043,null));
var inst_124045 = cljs.core.list(new cljs.core.Symbol(null,"get-lines","get-lines",-282739043,null));
var inst_124046 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["bazaar"], null);
var inst_124047 = expectations.compare_expr.cljs$core$IFn$_invoke$arity$4(inst_124044,inst_124041,inst_124046,inst_124045);
var inst_124048 = expectations.__GT_failure_message(inst_124047);
var inst_124049 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_124045)," => ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_124046)].join('');
var inst_124050 = clojure.string.replace(inst_124048,/^.*?\n/,inst_124049);
var inst_124052 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_124054 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_124047);
var inst_124055 = [inst_124054,inst_124046,inst_124045,inst_124050];
var inst_124056 = cljs.core.PersistentHashMap.fromArrays(inst_124052,inst_124055);
var inst_124057 = cljs.test.do_report(inst_124056);
var ___$1 = (function (){var statearr_124449 = state_124269;
(statearr_124449[(4)] = cljs.core.rest((state_124269[(4)])));

return statearr_124449;
})();
var state_124269__$1 = state_124269;
var statearr_124451_132872 = state_124269__$1;
(statearr_124451_132872[(2)] = inst_124057);

(statearr_124451_132872[(1)] = (57));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124271 === (33))){
var _ = (function (){var statearr_124455 = state_124269;
(statearr_124455[(4)] = cljs.core.rest((state_124269[(4)])));

return statearr_124455;
})();
var state_124269__$1 = state_124269;
var ex124438 = (state_124269__$1[(2)]);
var statearr_124457_132875 = state_124269__$1;
(statearr_124457_132875[(5)] = ex124438);


var statearr_124459_132876 = state_124269__$1;
(statearr_124459_132876[(1)] = (32));

(statearr_124459_132876[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124271 === (13))){
var _ = (function (){var statearr_124461 = state_124269;
(statearr_124461[(4)] = cljs.core.cons((16),(state_124269[(4)])));

return statearr_124461;
})();
var state_124269__$1 = state_124269;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_124269__$1,(17),self__.frags);
} else {
if((state_val_124271 === (22))){
var _ = (function (){var statearr_124465 = state_124269;
(statearr_124465[(4)] = cljs.core.cons((24),(state_124269[(4)])));

return statearr_124465;
})();
var ___$1 = (function (){var statearr_124468 = state_124269;
(statearr_124468[(4)] = cljs.core.cons((25),(state_124269[(4)])));

return statearr_124468;
})();
var inst_123784 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.buffer,cljs.core.conj,"foo");
var inst_123785 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.buffer,cljs.core.conj,"bar");
var inst_123786 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.buffer,cljs.core.conj,"b\nbaz");
var state_124269__$1 = (function (){var statearr_124470 = state_124269;
(statearr_124470[(23)] = inst_123786);

(statearr_124470[(24)] = inst_123785);

(statearr_124470[(25)] = inst_123784);

return statearr_124470;
})();
var statearr_124474_132879 = state_124269__$1;
(statearr_124474_132879[(2)] = null);

(statearr_124474_132879[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124271 === (36))){
var _ = (function (){var statearr_124476 = state_124269;
(statearr_124476[(4)] = cljs.core.rest((state_124269[(4)])));

return statearr_124476;
})();
var inst_123875 = (state_124269[(2)]);
var inst_123877 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_123878 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_123879 = (new cljs.core.PersistentVector(null,1,(5),inst_123877,inst_123878,null));
var inst_123880 = cljs.test.update_current_env_BANG_(inst_123879,cljs.core.rest);
var ___$1 = (function (){var temp__5753__auto__ = (state_124269[(5)]);
if(cljs.core.truth_(temp__5753__auto__)){
var e__38733__auto__ = temp__5753__auto__;
throw e__38733__auto__;
} else {
return null;
}
})();
var state_124269__$1 = (function (){var statearr_124480 = state_124269;
(statearr_124480[(26)] = inst_123880);

return statearr_124480;
})();
var statearr_124482_132881 = state_124269__$1;
(statearr_124482_132881[(2)] = inst_123875);

(statearr_124482_132881[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124271 === (41))){
var _ = (function (){var statearr_124483 = state_124269;
(statearr_124483[(4)] = cljs.core.rest((state_124269[(4)])));

return statearr_124483;
})();
var state_124269__$1 = state_124269;
var ex124464 = (state_124269__$1[(2)]);
var statearr_124485_132885 = state_124269__$1;
(statearr_124485_132885[(5)] = ex124464);


var statearr_124486_132886 = state_124269__$1;
(statearr_124486_132886[(1)] = (40));

(statearr_124486_132886[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124271 === (43))){
var _ = (function (){var statearr_124491 = state_124269;
(statearr_124491[(4)] = cljs.core.cons((46),(state_124269[(4)])));

return statearr_124491;
})();
var state_124269__$1 = state_124269;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_124269__$1,(47),self__.frags);
} else {
if((state_val_124271 === (61))){
var inst_124094 = (state_124269[(2)]);
var _ = (function (){var statearr_124494 = state_124269;
(statearr_124494[(4)] = cljs.core.rest((state_124269[(4)])));

return statearr_124494;
})();
var state_124269__$1 = state_124269;
var statearr_124496_132887 = state_124269__$1;
(statearr_124496_132887[(2)] = inst_124094);

(statearr_124496_132887[(1)] = (54));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124271 === (29))){
var _ = (function (){var statearr_124497 = state_124269;
(statearr_124497[(4)] = cljs.core.rest((state_124269[(4)])));

return statearr_124497;
})();
var state_124269__$1 = state_124269;
var ex124489 = (state_124269__$1[(2)]);
var statearr_124498_132888 = state_124269__$1;
(statearr_124498_132888[(5)] = ex124489);


var statearr_124499_132889 = state_124269__$1;
(statearr_124499_132889[(1)] = (28));

(statearr_124499_132889[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124271 === (44))){
var inst_123960 = (state_124269[(2)]);
var state_124269__$1 = (function (){var statearr_124504 = state_124269;
(statearr_124504[(27)] = inst_123960);

return statearr_124504;
})();
var statearr_124506_132892 = state_124269__$1;
(statearr_124506_132892[(2)] = null);

(statearr_124506_132892[(1)] = (48));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124271 === (6))){
var _ = (function (){var statearr_124510 = state_124269;
(statearr_124510[(4)] = cljs.core.cons((9),(state_124269[(4)])));

return statearr_124510;
})();
var inst_123663 = (self__.get_lines.cljs$core$IFn$_invoke$arity$0 ? self__.get_lines.cljs$core$IFn$_invoke$arity$0() : self__.get_lines.call(null));
var inst_123664 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_123665 = ["foo"];
var inst_123666 = (new cljs.core.PersistentVector(null,1,(5),inst_123664,inst_123665,null));
var inst_123667 = cljs.core.list(new cljs.core.Symbol(null,"get-lines","get-lines",-282739043,null));
var inst_123669 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["foo"], null);
var inst_123670 = matcher_combinators.core.match(inst_123666,inst_123663);
var inst_123671 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_123663], 0));
var inst_123672 = new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(inst_123670);
var inst_123673 = matcher_combinators.printer.as_string(inst_123672);
var inst_123674 = [inst_123671,"\n\nMismatch:\n",inst_123673].join('');
var inst_123676 = new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(inst_123670);
var inst_123677 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),inst_123676);
var inst_123678 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363)];
var state_124269__$1 = (function (){var statearr_124515 = state_124269;
(statearr_124515[(28)] = inst_123669);

(statearr_124515[(29)] = inst_123678);

(statearr_124515[(30)] = inst_123667);

(statearr_124515[(31)] = inst_123674);

return statearr_124515;
})();
if(inst_123677){
var statearr_124516_132894 = state_124269__$1;
(statearr_124516_132894[(1)] = (10));

} else {
var statearr_124518_132895 = state_124269__$1;
(statearr_124518_132895[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124271 === (28))){
var inst_123787 = (state_124269[(2)]);
var inst_123788 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_123789 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_123790 = ["foobarb"];
var inst_123791 = (new cljs.core.PersistentVector(null,1,(5),inst_123789,inst_123790,null));
var inst_123792 = check.core.normalize_error(inst_123787);
var inst_123793 = cljs.core.list(new cljs.core.Symbol(null,"get-lines","get-lines",-282739043,null));
var inst_123794 = new cljs.core.Symbol(null,"=expect=>","=expect=>",-1384225590,null);
var inst_123795 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["foobarb"], null);
var inst_123796 = ["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_123793)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_123794)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_123795)].join('');
var inst_123797 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_123791,inst_123792,inst_123796];
var inst_123798 = cljs.core.PersistentHashMap.fromArrays(inst_123788,inst_123797);
var inst_123799 = cljs.test.do_report(inst_123798);
var state_124269__$1 = state_124269;
var statearr_124524_132896 = state_124269__$1;
(statearr_124524_132896[(2)] = inst_123799);

(statearr_124524_132896[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124271 === (64))){
var inst_124077 = (state_124269[(2)]);
var inst_124078 = cljs.core.list(new cljs.core.Symbol("async","<!","async/<!",-1308982001,null),new cljs.core.Symbol(null,"frags","frags",-341618008,null));
var inst_124080 = "aar\n";
var inst_124081 = expectations.compare_expr.cljs$core$IFn$_invoke$arity$4("aar\n",inst_124077,inst_124080,inst_124078);
var inst_124082 = expectations.__GT_failure_message(inst_124081);
var inst_124083 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_124078)," => ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_124080)].join('');
var inst_124084 = clojure.string.replace(inst_124082,/^.*?\n/,inst_124083);
var inst_124085 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_124086 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_124081);
var inst_124087 = [inst_124086,inst_124080,inst_124078,inst_124084];
var inst_124088 = cljs.core.PersistentHashMap.fromArrays(inst_124085,inst_124087);
var inst_124091 = cljs.test.do_report(inst_124088);
var _ = (function (){var statearr_124527 = state_124269;
(statearr_124527[(4)] = cljs.core.rest((state_124269[(4)])));

return statearr_124527;
})();
var state_124269__$1 = state_124269;
var statearr_124528_132898 = state_124269__$1;
(statearr_124528_132898[(2)] = inst_124091);

(statearr_124528_132898[(1)] = (61));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124271 === (51))){
var _ = (function (){var statearr_124531 = state_124269;
(statearr_124531[(4)] = cljs.core.rest((state_124269[(4)])));

return statearr_124531;
})();
var state_124269__$1 = state_124269;
var ex124520 = (state_124269__$1[(2)]);
var statearr_124532_132900 = state_124269__$1;
(statearr_124532_132900[(5)] = ex124520);


var statearr_124533_132901 = state_124269__$1;
(statearr_124533_132901[(1)] = (50));

(statearr_124533_132901[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124271 === (25))){
var _ = (function (){var statearr_124535 = state_124269;
(statearr_124535[(4)] = cljs.core.rest((state_124269[(4)])));

return statearr_124535;
})();
var state_124269__$1 = state_124269;
var ex124525 = (state_124269__$1[(2)]);
var statearr_124536_132902 = state_124269__$1;
(statearr_124536_132902[(5)] = ex124525);


throw ex124525;


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124271 === (34))){
var _ = (function (){var statearr_124538 = state_124269;
(statearr_124538[(4)] = cljs.core.cons((36),(state_124269[(4)])));

return statearr_124538;
})();
var ___$1 = (function (){var statearr_124539 = state_124269;
(statearr_124539[(4)] = cljs.core.cons((37),(state_124269[(4)])));

return statearr_124539;
})();
var state_124269__$1 = state_124269;
var statearr_124540_132905 = state_124269__$1;
(statearr_124540_132905[(2)] = null);

(statearr_124540_132905[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124271 === (17))){
var inst_123711 = (state_124269[(2)]);
var inst_123712 = cljs.core.list(new cljs.core.Symbol("async","<!","async/<!",-1308982001,null),new cljs.core.Symbol(null,"frags","frags",-341618008,null));
var inst_123713 = "foo\n";
var inst_123714 = expectations.compare_expr.cljs$core$IFn$_invoke$arity$4("foo\n",inst_123711,inst_123713,inst_123712);
var inst_123716 = expectations.__GT_failure_message(inst_123714);
var inst_123717 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_123712)," => ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_123713)].join('');
var inst_123718 = clojure.string.replace(inst_123716,/^.*?\n/,inst_123717);
var inst_123719 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_123722 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_123714);
var inst_123723 = [inst_123722,inst_123713,inst_123712,inst_123718];
var inst_123724 = cljs.core.PersistentHashMap.fromArrays(inst_123719,inst_123723);
var inst_123725 = cljs.test.do_report(inst_123724);
var _ = (function (){var statearr_124543 = state_124269;
(statearr_124543[(4)] = cljs.core.rest((state_124269[(4)])));

return statearr_124543;
})();
var state_124269__$1 = state_124269;
var statearr_124544_132907 = state_124269__$1;
(statearr_124544_132907[(2)] = inst_123725);

(statearr_124544_132907[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124271 === (3))){
var inst_123765 = (state_124269[(2)]);
var inst_123766 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_123768 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_123769 = (new cljs.core.PersistentVector(null,1,(5),inst_123766,inst_123768,null));
var inst_123770 = cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(inst_123769,cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["emits complex line"], 0));
var state_124269__$1 = (function (){var statearr_124546 = state_124269;
(statearr_124546[(32)] = inst_123765);

(statearr_124546[(33)] = inst_123770);

return statearr_124546;
})();
var statearr_124548_132910 = state_124269__$1;
(statearr_124548_132910[(2)] = null);

(statearr_124548_132910[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124271 === (12))){
var inst_123669 = (state_124269[(28)]);
var inst_123678 = (state_124269[(29)]);
var inst_123674 = (state_124269[(31)]);
var inst_123683 = (state_124269[(2)]);
var inst_123684 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(inst_123674);
var inst_123685 = [inst_123683,inst_123669,inst_123684];
var inst_123686 = cljs.core.PersistentHashMap.fromArrays(inst_123678,inst_123685);
var inst_123687 = cljs.test.do_report(inst_123686);
var _ = (function (){var statearr_124550 = state_124269;
(statearr_124550[(4)] = cljs.core.rest((state_124269[(4)])));

return statearr_124550;
})();
var state_124269__$1 = state_124269;
var statearr_124552_132914 = state_124269__$1;
(statearr_124552_132914[(2)] = inst_123687);

(statearr_124552_132914[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124271 === (2))){
var _ = (function (){var statearr_124555 = state_124269;
(statearr_124555[(4)] = cljs.core.cons((4),(state_124269[(4)])));

return statearr_124555;
})();
var ___$1 = (function (){var statearr_124556 = state_124269;
(statearr_124556[(4)] = cljs.core.cons((5),(state_124269[(4)])));

return statearr_124556;
})();
var inst_123643 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.buffer,cljs.core.conj,"foo\n");
var state_124269__$1 = (function (){var statearr_124559 = state_124269;
(statearr_124559[(34)] = inst_123643);

return statearr_124559;
})();
var statearr_124560_132916 = state_124269__$1;
(statearr_124560_132916[(2)] = null);

(statearr_124560_132916[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124271 === (66))){
var inst_124168 = (state_124269[(2)]);
var inst_124169 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_124170 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_124171 = (new cljs.core.PersistentVector(null,1,(5),inst_124169,inst_124170,null));
var inst_124172 = cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(inst_124171,cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["emits nil when closed connection"], 0));
var state_124269__$1 = (function (){var statearr_124562 = state_124269;
(statearr_124562[(35)] = inst_124172);

(statearr_124562[(36)] = inst_124168);

return statearr_124562;
})();
var statearr_124563_132917 = state_124269__$1;
(statearr_124563_132917[(2)] = null);

(statearr_124563_132917[(1)] = (76));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124271 === (23))){
var inst_123868 = (state_124269[(2)]);
var inst_123870 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_123871 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_123872 = (new cljs.core.PersistentVector(null,1,(5),inst_123870,inst_123871,null));
var inst_123873 = cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(inst_123872,cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["emits fragments"], 0));
var state_124269__$1 = (function (){var statearr_124567 = state_124269;
(statearr_124567[(37)] = inst_123873);

(statearr_124567[(38)] = inst_123868);

return statearr_124567;
})();
var statearr_124568_132920 = state_124269__$1;
(statearr_124568_132920[(2)] = null);

(statearr_124568_132920[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124271 === (47))){
var inst_123944 = (state_124269[(2)]);
var inst_123945 = cljs.core.list(new cljs.core.Symbol("async","<!","async/<!",-1308982001,null),new cljs.core.Symbol(null,"frags","frags",-341618008,null));
var inst_123946 = "baz";
var inst_123948 = expectations.compare_expr.cljs$core$IFn$_invoke$arity$4("baz",inst_123944,inst_123946,inst_123945);
var inst_123949 = expectations.__GT_failure_message(inst_123948);
var inst_123950 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_123945)," => ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_123946)].join('');
var inst_123951 = clojure.string.replace(inst_123949,/^.*?\n/,inst_123950);
var inst_123953 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_123954 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_123948);
var inst_123955 = [inst_123954,inst_123946,inst_123945,inst_123951];
var inst_123956 = cljs.core.PersistentHashMap.fromArrays(inst_123953,inst_123955);
var inst_123957 = cljs.test.do_report(inst_123956);
var _ = (function (){var statearr_124571 = state_124269;
(statearr_124571[(4)] = cljs.core.rest((state_124269[(4)])));

return statearr_124571;
})();
var state_124269__$1 = state_124269;
var statearr_124573_132922 = state_124269__$1;
(statearr_124573_132922[(2)] = inst_123957);

(statearr_124573_132922[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124271 === (35))){
var inst_124000 = (state_124269[(2)]);
var inst_124001 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_124003 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_124004 = (new cljs.core.PersistentVector(null,1,(5),inst_124001,inst_124003,null));
var inst_124005 = cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(inst_124004,cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["emits lines of already emitted frags"], 0));
var state_124269__$1 = (function (){var statearr_124576 = state_124269;
(statearr_124576[(39)] = inst_124000);

(statearr_124576[(40)] = inst_124005);

return statearr_124576;
})();
var statearr_124579_132923 = state_124269__$1;
(statearr_124579_132923[(2)] = null);

(statearr_124579_132923[(1)] = (52));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124271 === (82))){
var inst_124187 = (state_124269[(2)]);
var inst_124189 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_124190 = check.core.normalize_error(inst_124187);
var inst_124192 = cljs.core.list(new cljs.core.Symbol("async","<!","async/<!",-1308982001,null),new cljs.core.Symbol(null,"frags","frags",-341618008,null));
var inst_124193 = new cljs.core.Symbol(null,"=expect=>","=expect=>",-1384225590,null);
var inst_124194 = "";
var inst_124195 = ["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_124192)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_124193)," ",inst_124194].join('');
var inst_124196 = [new cljs.core.Keyword(null,"error","error",-978969032),"",inst_124190,inst_124195];
var inst_124197 = cljs.core.PersistentHashMap.fromArrays(inst_124189,inst_124196);
var inst_124198 = cljs.test.do_report(inst_124197);
var state_124269__$1 = state_124269;
var statearr_124584_132928 = state_124269__$1;
(statearr_124584_132928[(2)] = inst_124198);

(statearr_124584_132928[(1)] = (81));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124271 === (76))){
var _ = (function (){var statearr_124586 = state_124269;
(statearr_124586[(4)] = cljs.core.cons((78),(state_124269[(4)])));

return statearr_124586;
})();
var ___$1 = (function (){var statearr_124587 = state_124269;
(statearr_124587[(4)] = cljs.core.cons((79),(state_124269[(4)])));

return statearr_124587;
})();
var inst_124186 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.buffer,cljs.core.conj,new cljs.core.Keyword(null,"closed","closed",-919675359));
var state_124269__$1 = (function (){var statearr_124589 = state_124269;
(statearr_124589[(41)] = inst_124186);

return statearr_124589;
})();
var statearr_124590_132931 = state_124269__$1;
(statearr_124590_132931[(2)] = null);

(statearr_124590_132931[(1)] = (80));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124271 === (19))){
var inst_123762 = (state_124269[(2)]);
var _ = (function (){var statearr_124593 = state_124269;
(statearr_124593[(4)] = cljs.core.rest((state_124269[(4)])));

return statearr_124593;
})();
var state_124269__$1 = state_124269;
var statearr_124594_132933 = state_124269__$1;
(statearr_124594_132933[(2)] = inst_123762);

(statearr_124594_132933[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124271 === (57))){
var inst_124060 = (state_124269[(2)]);
var state_124269__$1 = (function (){var statearr_124597 = state_124269;
(statearr_124597[(42)] = inst_124060);

return statearr_124597;
})();
var statearr_124598_132934 = state_124269__$1;
(statearr_124598_132934[(2)] = null);

(statearr_124598_132934[(1)] = (60));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124271 === (68))){
var _ = (function (){var statearr_124601 = state_124269;
(statearr_124601[(4)] = cljs.core.rest((state_124269[(4)])));

return statearr_124601;
})();
var state_124269__$1 = state_124269;
var ex124592 = (state_124269__$1[(2)]);
var statearr_124604_132935 = state_124269__$1;
(statearr_124604_132935[(5)] = ex124592);


throw ex124592;


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124271 === (11))){
var state_124269__$1 = state_124269;
var statearr_124606_132936 = state_124269__$1;
(statearr_124606_132936[(2)] = new cljs.core.Keyword(null,"fail","fail",1706214930));

(statearr_124606_132936[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124271 === (9))){
var _ = (function (){var statearr_124608 = state_124269;
(statearr_124608[(4)] = cljs.core.rest((state_124269[(4)])));

return statearr_124608;
})();
var state_124269__$1 = state_124269;
var ex124600 = (state_124269__$1[(2)]);
var statearr_124611_132938 = state_124269__$1;
(statearr_124611_132938[(5)] = ex124600);


var statearr_124614_132939 = state_124269__$1;
(statearr_124614_132939[(1)] = (8));

(statearr_124614_132939[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124271 === (5))){
var _ = (function (){var statearr_124616 = state_124269;
(statearr_124616[(4)] = cljs.core.rest((state_124269[(4)])));

return statearr_124616;
})();
var state_124269__$1 = state_124269;
var ex124605 = (state_124269__$1[(2)]);
var statearr_124618_132940 = state_124269__$1;
(statearr_124618_132940[(5)] = ex124605);


throw ex124605;


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124271 === (83))){
var _ = (function (){var statearr_124619 = state_124269;
(statearr_124619[(4)] = cljs.core.rest((state_124269[(4)])));

return statearr_124619;
})();
var state_124269__$1 = state_124269;
var ex124607 = (state_124269__$1[(2)]);
var statearr_124621_132941 = state_124269__$1;
(statearr_124621_132941[(5)] = ex124607);


var statearr_124622_132942 = state_124269__$1;
(statearr_124622_132942[(1)] = (82));

(statearr_124622_132942[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124271 === (14))){
var inst_123728 = (state_124269[(2)]);
var state_124269__$1 = (function (){var statearr_124625 = state_124269;
(statearr_124625[(43)] = inst_123728);

return statearr_124625;
})();
var statearr_124626_132943 = state_124269__$1;
(statearr_124626_132943[(2)] = null);

(statearr_124626_132943[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124271 === (45))){
var inst_123926 = (state_124269[(2)]);
var inst_123927 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_123928 = check.core.normalize_error(inst_123926);
var inst_123930 = cljs.core.list(new cljs.core.Symbol("async","<!","async/<!",-1308982001,null),new cljs.core.Symbol(null,"frags","frags",-341618008,null));
var inst_123931 = new cljs.core.Symbol(null,"=expect=>","=expect=>",-1384225590,null);
var inst_123932 = "baz";
var inst_123933 = ["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_123930)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_123931)," ",inst_123932].join('');
var inst_123934 = [new cljs.core.Keyword(null,"error","error",-978969032),"baz",inst_123928,inst_123933];
var inst_123935 = cljs.core.PersistentHashMap.fromArrays(inst_123927,inst_123934);
var inst_123936 = cljs.test.do_report(inst_123935);
var state_124269__$1 = state_124269;
var statearr_124629_132946 = state_124269__$1;
(statearr_124629_132946[(2)] = inst_123936);

(statearr_124629_132946[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124271 === (53))){
var inst_124097 = (state_124269[(2)]);
var inst_124099 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_124100 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_124101 = (new cljs.core.PersistentVector(null,1,(5),inst_124099,inst_124100,null));
var inst_124102 = cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(inst_124101,cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["emits LOTS of lines"], 0));
var state_124269__$1 = (function (){var statearr_124630 = state_124269;
(statearr_124630[(44)] = inst_124097);

(statearr_124630[(45)] = inst_124102);

return statearr_124630;
})();
var statearr_124632_132948 = state_124269__$1;
(statearr_124632_132948[(2)] = null);

(statearr_124632_132948[(1)] = (65));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124271 === (78))){
var _ = (function (){var statearr_124635 = state_124269;
(statearr_124635[(4)] = cljs.core.rest((state_124269[(4)])));

return statearr_124635;
})();
var inst_124174 = (state_124269[(2)]);
var inst_124175 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_124176 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_124177 = (new cljs.core.PersistentVector(null,1,(5),inst_124175,inst_124176,null));
var inst_124178 = cljs.test.update_current_env_BANG_(inst_124177,cljs.core.rest);
var ___$1 = (function (){var temp__5753__auto__ = (state_124269[(5)]);
if(cljs.core.truth_(temp__5753__auto__)){
var e__38733__auto__ = temp__5753__auto__;
throw e__38733__auto__;
} else {
return null;
}
})();
var state_124269__$1 = (function (){var statearr_124638 = state_124269;
(statearr_124638[(46)] = inst_124178);

return statearr_124638;
})();
var statearr_124639_132949 = state_124269__$1;
(statearr_124639_132949[(2)] = inst_124174);

(statearr_124639_132949[(1)] = (77));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124271 === (26))){
var _ = (function (){var statearr_124640 = state_124269;
(statearr_124640[(4)] = cljs.core.cons((29),(state_124269[(4)])));

return statearr_124640;
})();
var inst_123805 = (self__.get_lines.cljs$core$IFn$_invoke$arity$0 ? self__.get_lines.cljs$core$IFn$_invoke$arity$0() : self__.get_lines.call(null));
var inst_123806 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_123808 = ["foobarb"];
var inst_123809 = (new cljs.core.PersistentVector(null,1,(5),inst_123806,inst_123808,null));
var inst_123810 = cljs.core.list(new cljs.core.Symbol(null,"get-lines","get-lines",-282739043,null));
var inst_123811 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["foobarb"], null);
var inst_123812 = expectations.compare_expr.cljs$core$IFn$_invoke$arity$4(inst_123809,inst_123805,inst_123811,inst_123810);
var inst_123813 = expectations.__GT_failure_message(inst_123812);
var inst_123814 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_123810)," => ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_123811)].join('');
var inst_123815 = clojure.string.replace(inst_123813,/^.*?\n/,inst_123814);
var inst_123816 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_123817 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_123812);
var inst_123818 = [inst_123817,inst_123811,inst_123810,inst_123815];
var inst_123819 = cljs.core.PersistentHashMap.fromArrays(inst_123816,inst_123818);
var inst_123820 = cljs.test.do_report(inst_123819);
var ___$1 = (function (){var statearr_124643 = state_124269;
(statearr_124643[(4)] = cljs.core.rest((state_124269[(4)])));

return statearr_124643;
})();
var state_124269__$1 = state_124269;
var statearr_124644_132952 = state_124269__$1;
(statearr_124644_132952[(2)] = inst_123820);

(statearr_124644_132952[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124271 === (16))){
var _ = (function (){var statearr_124647 = state_124269;
(statearr_124647[(4)] = cljs.core.rest((state_124269[(4)])));

return statearr_124647;
})();
var state_124269__$1 = state_124269;
var ex124633 = (state_124269__$1[(2)]);
var statearr_124649_132953 = state_124269__$1;
(statearr_124649_132953[(5)] = ex124633);


var statearr_124650_132954 = state_124269__$1;
(statearr_124650_132954[(1)] = (15));

(statearr_124650_132954[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124271 === (81))){
var inst_124219 = (state_124269[(2)]);
var state_124269__$1 = (function (){var statearr_124652 = state_124269;
(statearr_124652[(47)] = inst_124219);

return statearr_124652;
})();
var statearr_124653_132955 = state_124269__$1;
(statearr_124653_132955[(2)] = null);

(statearr_124653_132955[(1)] = (85));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124271 === (79))){
var _ = (function (){var statearr_124655 = state_124269;
(statearr_124655[(4)] = cljs.core.rest((state_124269[(4)])));

return statearr_124655;
})();
var state_124269__$1 = state_124269;
var ex124645 = (state_124269__$1[(2)]);
var statearr_124657_132956 = state_124269__$1;
(statearr_124657_132956[(5)] = ex124645);


throw ex124645;


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124271 === (38))){
var _ = (function (){var statearr_124658 = state_124269;
(statearr_124658[(4)] = cljs.core.cons((41),(state_124269[(4)])));

return statearr_124658;
})();
var state_124269__$1 = state_124269;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_124269__$1,(42),self__.frags);
} else {
if((state_val_124271 === (87))){
var inst_124220 = (state_124269[(2)]);
var inst_124221 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_124222 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_124223 = [null];
var inst_124224 = (new cljs.core.PersistentVector(null,1,(5),inst_124222,inst_124223,null));
var inst_124225 = check.core.normalize_error(inst_124220);
var inst_124226 = cljs.core.list(new cljs.core.Symbol(null,"get-lines","get-lines",-282739043,null));
var inst_124227 = new cljs.core.Symbol(null,"=expect=>","=expect=>",-1384225590,null);
var inst_124228 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null);
var inst_124229 = ["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_124226)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_124227)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_124228)].join('');
var inst_124230 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_124224,inst_124225,inst_124229];
var inst_124231 = cljs.core.PersistentHashMap.fromArrays(inst_124221,inst_124230);
var inst_124232 = cljs.test.do_report(inst_124231);
var state_124269__$1 = state_124269;
var statearr_124665_132959 = state_124269__$1;
(statearr_124665_132959[(2)] = inst_124232);

(statearr_124665_132959[(1)] = (86));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124271 === (30))){
var _ = (function (){var statearr_124666 = state_124269;
(statearr_124666[(4)] = cljs.core.cons((33),(state_124269[(4)])));

return statearr_124666;
})();
var inst_123846 = cljs.core.deref(self__.buffer);
var inst_123848 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_123849 = ["baz"];
var inst_123850 = (new cljs.core.PersistentVector(null,1,(5),inst_123848,inst_123849,null));
var inst_123851 = cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"buffer","buffer",-2037140571,null));
var inst_123852 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["baz"], null);
var inst_123853 = expectations.compare_expr.cljs$core$IFn$_invoke$arity$4(inst_123850,inst_123846,inst_123852,inst_123851);
var inst_123854 = expectations.__GT_failure_message(inst_123853);
var inst_123855 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_123851)," => ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_123852)].join('');
var inst_123856 = clojure.string.replace(inst_123854,/^.*?\n/,inst_123855);
var inst_123858 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_123859 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_123853);
var inst_123860 = [inst_123859,inst_123852,inst_123851,inst_123856];
var inst_123861 = cljs.core.PersistentHashMap.fromArrays(inst_123858,inst_123860);
var inst_123862 = cljs.test.do_report(inst_123861);
var ___$1 = (function (){var statearr_124670 = state_124269;
(statearr_124670[(4)] = cljs.core.rest((state_124269[(4)])));

return statearr_124670;
})();
var state_124269__$1 = state_124269;
var statearr_124672_132962 = state_124269__$1;
(statearr_124672_132962[(2)] = inst_123862);

(statearr_124672_132962[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124271 === (73))){
var state_124269__$1 = state_124269;
var statearr_124673_132963 = state_124269__$1;
(statearr_124673_132963[(2)] = new cljs.core.Keyword(null,"pass","pass",1574159993));

(statearr_124673_132963[(1)] = (75));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124271 === (10))){
var state_124269__$1 = state_124269;
var statearr_124675_132965 = state_124269__$1;
(statearr_124675_132965[(2)] = new cljs.core.Keyword(null,"pass","pass",1574159993));

(statearr_124675_132965[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124271 === (18))){
var _ = (function (){var statearr_124677 = state_124269;
(statearr_124677[(4)] = cljs.core.cons((21),(state_124269[(4)])));

return statearr_124677;
})();
var inst_123746 = cljs.core.deref(self__.buffer);
var inst_123747 = cljs.core.PersistentVector.EMPTY;
var inst_123749 = cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"buffer","buffer",-2037140571,null));
var inst_123750 = cljs.core.PersistentVector.EMPTY;
var inst_123751 = expectations.compare_expr.cljs$core$IFn$_invoke$arity$4(inst_123747,inst_123746,inst_123750,inst_123749);
var inst_123752 = expectations.__GT_failure_message(inst_123751);
var inst_123753 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_123749)," => ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_123750)].join('');
var inst_123754 = clojure.string.replace(inst_123752,/^.*?\n/,inst_123753);
var inst_123755 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_123756 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_123751);
var inst_123757 = [inst_123756,inst_123750,inst_123749,inst_123754];
var inst_123758 = cljs.core.PersistentHashMap.fromArrays(inst_123755,inst_123757);
var inst_123759 = cljs.test.do_report(inst_123758);
var ___$1 = (function (){var statearr_124682 = state_124269;
(statearr_124682[(4)] = cljs.core.rest((state_124269[(4)])));

return statearr_124682;
})();
var state_124269__$1 = state_124269;
var statearr_124684_132967 = state_124269__$1;
(statearr_124684_132967[(2)] = inst_123759);

(statearr_124684_132967[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124271 === (52))){
var _ = (function (){var statearr_124688 = state_124269;
(statearr_124688[(4)] = cljs.core.cons((54),(state_124269[(4)])));

return statearr_124688;
})();
var ___$1 = (function (){var statearr_124690 = state_124269;
(statearr_124690[(4)] = cljs.core.cons((55),(state_124269[(4)])));

return statearr_124690;
})();
var inst_124019 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.buffer,cljs.core.conj,"aar\n");
var state_124269__$1 = (function (){var statearr_124693 = state_124269;
(statearr_124693[(48)] = inst_124019);

return statearr_124693;
})();
var statearr_124694_132970 = state_124269__$1;
(statearr_124694_132970[(2)] = null);

(statearr_124694_132970[(1)] = (56));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124271 === (67))){
var _ = (function (){var statearr_124698 = state_124269;
(statearr_124698[(4)] = cljs.core.rest((state_124269[(4)])));

return statearr_124698;
})();
var inst_124104 = (state_124269[(2)]);
var inst_124105 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_124106 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_124107 = (new cljs.core.PersistentVector(null,1,(5),inst_124105,inst_124106,null));
var inst_124108 = cljs.test.update_current_env_BANG_(inst_124107,cljs.core.rest);
var ___$1 = (function (){var temp__5753__auto__ = (state_124269[(5)]);
if(cljs.core.truth_(temp__5753__auto__)){
var e__38733__auto__ = temp__5753__auto__;
throw e__38733__auto__;
} else {
return null;
}
})();
var state_124269__$1 = (function (){var statearr_124702 = state_124269;
(statearr_124702[(49)] = inst_124108);

return statearr_124702;
})();
var statearr_124704_132973 = state_124269__$1;
(statearr_124704_132973[(2)] = inst_124104);

(statearr_124704_132973[(1)] = (66));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124271 === (71))){
var inst_124121 = (state_124269[(2)]);
var inst_124122 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_124124 = check.core.normalize_error(inst_124121);
var inst_124127 = cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol(null,"get-lines","get-lines",-282739043,null)));
var inst_124128 = new cljs.core.Symbol(null,"=>","=>",-813269641,null);
var inst_124129 = (600000);
var inst_124130 = ["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_124127)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_124128)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_124129)].join('');
var inst_124131 = [new cljs.core.Keyword(null,"error","error",-978969032),(600000),inst_124124,inst_124130];
var inst_124132 = cljs.core.PersistentHashMap.fromArrays(inst_124122,inst_124131);
var inst_124133 = cljs.test.do_report(inst_124132);
var state_124269__$1 = state_124269;
var statearr_124707_132974 = state_124269__$1;
(statearr_124707_132974[(2)] = inst_124133);

(statearr_124707_132974[(1)] = (70));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124271 === (42))){
var inst_123907 = (state_124269[(2)]);
var inst_123908 = cljs.core.list(new cljs.core.Symbol("async","<!","async/<!",-1308982001,null),new cljs.core.Symbol(null,"frags","frags",-341618008,null));
var inst_123909 = "foobarb\n";
var inst_123910 = expectations.compare_expr.cljs$core$IFn$_invoke$arity$4("foobarb\n",inst_123907,inst_123909,inst_123908);
var inst_123911 = expectations.__GT_failure_message(inst_123910);
var inst_123913 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_123908)," => ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_123909)].join('');
var inst_123914 = clojure.string.replace(inst_123911,/^.*?\n/,inst_123913);
var inst_123916 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_123917 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_123910);
var inst_123919 = [inst_123917,inst_123909,inst_123908,inst_123914];
var inst_123920 = cljs.core.PersistentHashMap.fromArrays(inst_123916,inst_123919);
var inst_123921 = cljs.test.do_report(inst_123920);
var _ = (function (){var statearr_124710 = state_124269;
(statearr_124710[(4)] = cljs.core.rest((state_124269[(4)])));

return statearr_124710;
})();
var state_124269__$1 = state_124269;
var statearr_124714_132975 = state_124269__$1;
(statearr_124714_132975[(2)] = inst_123921);

(statearr_124714_132975[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124271 === (80))){
var _ = (function (){var statearr_124716 = state_124269;
(statearr_124716[(4)] = cljs.core.cons((83),(state_124269[(4)])));

return statearr_124716;
})();
var state_124269__$1 = state_124269;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_124269__$1,(84),self__.frags);
} else {
if((state_val_124271 === (37))){
var _ = (function (){var statearr_124721 = state_124269;
(statearr_124721[(4)] = cljs.core.rest((state_124269[(4)])));

return statearr_124721;
})();
var state_124269__$1 = state_124269;
var ex124709 = (state_124269__$1[(2)]);
var statearr_124722_132978 = state_124269__$1;
(statearr_124722_132978[(5)] = ex124709);


throw ex124709;


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124271 === (63))){
var _ = (function (){var statearr_124724 = state_124269;
(statearr_124724[(4)] = cljs.core.rest((state_124269[(4)])));

return statearr_124724;
})();
var state_124269__$1 = state_124269;
var ex124715 = (state_124269__$1[(2)]);
var statearr_124727_132979 = state_124269__$1;
(statearr_124727_132979[(5)] = ex124715);


var statearr_124729_132980 = state_124269__$1;
(statearr_124729_132980[(1)] = (62));

(statearr_124729_132980[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124271 === (8))){
var inst_123644 = (state_124269[(2)]);
var inst_123645 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_123646 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_123647 = ["foo"];
var inst_123648 = (new cljs.core.PersistentVector(null,1,(5),inst_123646,inst_123647,null));
var inst_123649 = check.core.normalize_error(inst_123644);
var inst_123650 = cljs.core.list(new cljs.core.Symbol(null,"get-lines","get-lines",-282739043,null));
var inst_123651 = new cljs.core.Symbol(null,"=>","=>",-813269641,null);
var inst_123652 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["foo"], null);
var inst_123653 = ["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_123650)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_123651)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_123652)].join('');
var inst_123654 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_123648,inst_123649,inst_123653];
var inst_123655 = cljs.core.PersistentHashMap.fromArrays(inst_123645,inst_123654);
var inst_123656 = cljs.test.do_report(inst_123655);
var state_124269__$1 = state_124269;
var statearr_124734_132982 = state_124269__$1;
(statearr_124734_132982[(2)] = inst_123656);

(statearr_124734_132982[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124271 === (49))){
var inst_123997 = (state_124269[(2)]);
var _ = (function (){var statearr_124735 = state_124269;
(statearr_124735[(4)] = cljs.core.rest((state_124269[(4)])));

return statearr_124735;
})();
var state_124269__$1 = state_124269;
var statearr_124736_132984 = state_124269__$1;
(statearr_124736_132984[(2)] = inst_123997);

(statearr_124736_132984[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124271 === (84))){
var inst_124205 = (state_124269[(2)]);
var inst_124206 = cljs.core.list(new cljs.core.Symbol("async","<!","async/<!",-1308982001,null),new cljs.core.Symbol(null,"frags","frags",-341618008,null));
var inst_124207 = "";
var inst_124208 = expectations.compare_expr.cljs$core$IFn$_invoke$arity$4("",inst_124205,inst_124207,inst_124206);
var inst_124209 = expectations.__GT_failure_message(inst_124208);
var inst_124210 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_124206)," => ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_124207)].join('');
var inst_124211 = clojure.string.replace(inst_124209,/^.*?\n/,inst_124210);
var inst_124212 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_124213 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_124208);
var inst_124214 = [inst_124213,inst_124207,inst_124206,inst_124211];
var inst_124215 = cljs.core.PersistentHashMap.fromArrays(inst_124212,inst_124214);
var inst_124216 = cljs.test.do_report(inst_124215);
var _ = (function (){var statearr_124740 = state_124269;
(statearr_124740[(4)] = cljs.core.rest((state_124269[(4)])));

return statearr_124740;
})();
var state_124269__$1 = state_124269;
var statearr_124742_132985 = state_124269__$1;
(statearr_124742_132985[(2)] = inst_124216);

(statearr_124742_132985[(1)] = (81));


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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
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
var repl_tooling$repl_client$connection_test$state_machine__39695__auto__ = null;
var repl_tooling$repl_client$connection_test$state_machine__39695__auto____0 = (function (){
var statearr_124745 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_124745[(0)] = repl_tooling$repl_client$connection_test$state_machine__39695__auto__);

(statearr_124745[(1)] = (1));

return statearr_124745;
});
var repl_tooling$repl_client$connection_test$state_machine__39695__auto____1 = (function (state_124269){
while(true){
var ret_value__39696__auto__ = (function (){try{while(true){
var result__39697__auto__ = switch__39694__auto__(state_124269);
if(cljs.core.keyword_identical_QMARK_(result__39697__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39697__auto__;
}
break;
}
}catch (e124746){var ex__39698__auto__ = e124746;
var statearr_124748_132988 = state_124269;
(statearr_124748_132988[(2)] = ex__39698__auto__);


if(cljs.core.seq((state_124269[(4)]))){
var statearr_124750_132990 = state_124269;
(statearr_124750_132990[(1)] = cljs.core.first((state_124269[(4)])));

} else {
throw ex__39698__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__132991 = state_124269;
state_124269 = G__132991;
continue;
} else {
return ret_value__39696__auto__;
}
break;
}
});
repl_tooling$repl_client$connection_test$state_machine__39695__auto__ = function(state_124269){
switch(arguments.length){
case 0:
return repl_tooling$repl_client$connection_test$state_machine__39695__auto____0.call(this);
case 1:
return repl_tooling$repl_client$connection_test$state_machine__39695__auto____1.call(this,state_124269);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
repl_tooling$repl_client$connection_test$state_machine__39695__auto__.cljs$core$IFn$_invoke$arity$0 = repl_tooling$repl_client$connection_test$state_machine__39695__auto____0;
repl_tooling$repl_client$connection_test$state_machine__39695__auto__.cljs$core$IFn$_invoke$arity$1 = repl_tooling$repl_client$connection_test$state_machine__39695__auto____1;
return repl_tooling$repl_client$connection_test$state_machine__39695__auto__;
})()
})();
var state__39771__auto__ = (function (){var statearr_124753 = f__39770__auto__();
(statearr_124753[(6)] = c__39769__auto__);

return statearr_124753;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39771__auto__);
}));

return c__39769__auto__;
}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}}));

(repl_tooling.repl_client.connection_test.t_repl_tooling$repl_client$connection_test121471.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"buffer","buffer",-2037140571,null),new cljs.core.Symbol(null,"lines","lines",940365746,null),new cljs.core.Symbol(null,"get-lines","get-lines",-282739043,null),new cljs.core.Symbol(null,"frags","frags",-341618008,null),new cljs.core.Symbol(null,"meta121472","meta121472",1684752548,null)], null);
}));

(repl_tooling.repl_client.connection_test.t_repl_tooling$repl_client$connection_test121471.cljs$lang$type = true);

(repl_tooling.repl_client.connection_test.t_repl_tooling$repl_client$connection_test121471.cljs$lang$ctorStr = "repl-tooling.repl-client.connection-test/t_repl_tooling$repl_client$connection_test121471");

(repl_tooling.repl_client.connection_test.t_repl_tooling$repl_client$connection_test121471.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"repl-tooling.repl-client.connection-test/t_repl_tooling$repl_client$connection_test121471");
}));

/**
 * Positional factory function for repl-tooling.repl-client.connection-test/t_repl_tooling$repl_client$connection_test121471.
 */
repl_tooling.repl_client.connection_test.__GT_t_repl_tooling$repl_client$connection_test121471 = (function repl_tooling$repl_client$connection_test$__GT_t_repl_tooling$repl_client$connection_test121471(buffer__$1,lines__$1,get_lines__$1,frags__$1,meta121472){
return (new repl_tooling.repl_client.connection_test.t_repl_tooling$repl_client$connection_test121471(buffer__$1,lines__$1,get_lines__$1,frags__$1,meta121472));
});

}

return (new repl_tooling.repl_client.connection_test.t_repl_tooling$repl_client$connection_test121471(buffer,lines,get_lines,frags,null));
})], 0)),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));

repl_tooling.repl_client.connection_test.buffer_treatment = (function repl_tooling$repl_client$connection_test$buffer_treatment(){
return cljs.test.test_var(repl_tooling.repl_client.connection_test.buffer_treatment.cljs$lang$var);
});
repl_tooling.repl_client.connection_test.buffer_treatment.cljs$lang$test = (function (){
var buffer = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
var lines = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
var get_lines = (function (){
var l = cljs.core.deref(lines);
cljs.core.reset_BANG_(lines,cljs.core.PersistentVector.EMPTY);

return l;
});
var frags = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
if((typeof repl_tooling !== 'undefined') && (typeof repl_tooling.repl_client !== 'undefined') && (typeof repl_tooling.repl_client.connection_test !== 'undefined') && (typeof repl_tooling.repl_client.connection_test.t_repl_tooling$repl_client$connection_test124766 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
repl_tooling.repl_client.connection_test.t_repl_tooling$repl_client$connection_test124766 = (function (buffer,lines,get_lines,frags,meta124767){
this.buffer = buffer;
this.lines = lines;
this.get_lines = get_lines;
this.frags = frags;
this.meta124767 = meta124767;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(repl_tooling.repl_client.connection_test.t_repl_tooling$repl_client$connection_test124766.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_124768,meta124767__$1){
var self__ = this;
var _124768__$1 = this;
return (new repl_tooling.repl_client.connection_test.t_repl_tooling$repl_client$connection_test124766(self__.buffer,self__.lines,self__.get_lines,self__.frags,meta124767__$1));
}));

(repl_tooling.repl_client.connection_test.t_repl_tooling$repl_client$connection_test124766.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_124768){
var self__ = this;
var _124768__$1 = this;
return self__.meta124767;
}));

(repl_tooling.repl_client.connection_test.t_repl_tooling$repl_client$connection_test124766.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(repl_tooling.repl_client.connection_test.t_repl_tooling$repl_client$connection_test124766.prototype.call = (function (self__,done__60249__auto__){
var self__ = this;
var self____$1 = this;
var ___9200__auto__ = self____$1;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["treating buffer info"], 0));

try{var c__39769__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__39770__auto__ = (function (){var switch__39694__auto__ = (function (state_125424){
var state_val_125426 = (state_125424[(1)]);
if((state_val_125426 === (65))){
var _ = (function (){var statearr_125431 = state_125424;
(statearr_125431[(4)] = cljs.core.cons((67),(state_125424[(4)])));

return statearr_125431;
})();
var ___$1 = (function (){var statearr_125432 = state_125424;
(statearr_125432[(4)] = cljs.core.cons((68),(state_125424[(4)])));

return statearr_125432;
})();
var inst_125260 = cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((600000),"BIG\n");
var inst_125261 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.str,inst_125260);
var inst_125262 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.buffer,cljs.core.conj,inst_125261);
var state_125424__$1 = (function (){var statearr_125434 = state_125424;
(statearr_125434[(7)] = inst_125262);

return statearr_125434;
})();
var statearr_125436_132995 = state_125424__$1;
(statearr_125436_132995[(2)] = null);

(statearr_125436_132995[(1)] = (69));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125426 === (70))){
var inst_125307 = (state_125424[(2)]);
var _ = (function (){var statearr_125438 = state_125424;
(statearr_125438[(4)] = cljs.core.rest((state_125424[(4)])));

return statearr_125438;
})();
var state_125424__$1 = state_125424;
var statearr_125439_132997 = state_125424__$1;
(statearr_125439_132997[(2)] = inst_125307);

(statearr_125439_132997[(1)] = (67));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125426 === (62))){
var inst_125206 = (state_125424[(2)]);
var inst_125207 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_125208 = check.core.normalize_error(inst_125206);
var inst_125209 = cljs.core.list(new cljs.core.Symbol("async","<!","async/<!",-1308982001,null),new cljs.core.Symbol(null,"frags","frags",-341618008,null));
var inst_125210 = new cljs.core.Symbol(null,"=expect=>","=expect=>",-1384225590,null);
var inst_125211 = "aar\n";
var inst_125212 = ["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_125209)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_125210)," ",inst_125211].join('');
var inst_125213 = [new cljs.core.Keyword(null,"error","error",-978969032),"aar\n",inst_125208,inst_125212];
var inst_125214 = cljs.core.PersistentHashMap.fromArrays(inst_125207,inst_125213);
var inst_125215 = cljs.test.do_report(inst_125214);
var state_125424__$1 = state_125424;
var statearr_125444_133000 = state_125424__$1;
(statearr_125444_133000[(2)] = inst_125215);

(statearr_125444_133000[(1)] = (61));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125426 === (74))){
var state_125424__$1 = state_125424;
var statearr_125448_133001 = state_125424__$1;
(statearr_125448_133001[(2)] = new cljs.core.Keyword(null,"fail","fail",1706214930));

(statearr_125448_133001[(1)] = (75));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125426 === (7))){
var inst_124854 = (state_125424[(2)]);
var state_125424__$1 = (function (){var statearr_125452 = state_125424;
(statearr_125452[(8)] = inst_124854);

return statearr_125452;
})();
var statearr_125453_133003 = state_125424__$1;
(statearr_125453_133003[(2)] = null);

(statearr_125453_133003[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125426 === (59))){
var _ = (function (){var statearr_125455 = state_125424;
(statearr_125455[(4)] = cljs.core.rest((state_125424[(4)])));

return statearr_125455;
})();
var state_125424__$1 = state_125424;
var ex125447 = (state_125424__$1[(2)]);
var statearr_125457_133004 = state_125424__$1;
(statearr_125457_133004[(5)] = ex125447);


var statearr_125459_133005 = state_125424__$1;
(statearr_125459_133005[(1)] = (58));

(statearr_125459_133005[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125426 === (86))){
var inst_125409 = (state_125424[(2)]);
var _ = (function (){var statearr_125462 = state_125424;
(statearr_125462[(4)] = cljs.core.rest((state_125424[(4)])));

return statearr_125462;
})();
var state_125424__$1 = state_125424;
var statearr_125464_133007 = state_125424__$1;
(statearr_125464_133007[(2)] = inst_125409);

(statearr_125464_133007[(1)] = (78));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125426 === (20))){
var inst_124891 = (state_125424[(2)]);
var inst_124892 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_124893 = cljs.core.PersistentVector.EMPTY;
var inst_124894 = check.core.normalize_error(inst_124891);
var inst_124896 = cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"buffer","buffer",-2037140571,null));
var inst_124897 = new cljs.core.Symbol(null,"=expect=>","=expect=>",-1384225590,null);
var inst_124898 = cljs.core.PersistentVector.EMPTY;
var inst_124899 = ["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_124896)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_124897)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_124898)].join('');
var inst_124900 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_124893,inst_124894,inst_124899];
var inst_124901 = cljs.core.PersistentHashMap.fromArrays(inst_124892,inst_124900);
var inst_124902 = cljs.test.do_report(inst_124901);
var state_125424__$1 = state_125424;
var statearr_125466_133010 = state_125424__$1;
(statearr_125466_133010[(2)] = inst_124902);

(statearr_125466_133010[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125426 === (72))){
var _ = (function (){var statearr_125469 = state_125424;
(statearr_125469[(4)] = cljs.core.rest((state_125424[(4)])));

return statearr_125469;
})();
var state_125424__$1 = state_125424;
var ex125461 = (state_125424__$1[(2)]);
var statearr_125470_133011 = state_125424__$1;
(statearr_125470_133011[(5)] = ex125461);


var statearr_125471_133012 = state_125424__$1;
(statearr_125471_133012[(1)] = (71));

(statearr_125471_133012[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125426 === (58))){
var inst_125166 = (state_125424[(2)]);
var inst_125167 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_125168 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_125169 = ["bazaar"];
var inst_125170 = (new cljs.core.PersistentVector(null,1,(5),inst_125168,inst_125169,null));
var inst_125171 = check.core.normalize_error(inst_125166);
var inst_125174 = cljs.core.list(new cljs.core.Symbol(null,"get-lines","get-lines",-282739043,null));
var inst_125175 = new cljs.core.Symbol(null,"=expect=>","=expect=>",-1384225590,null);
var inst_125176 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["bazaar"], null);
var inst_125177 = ["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_125174)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_125175)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_125176)].join('');
var inst_125178 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_125170,inst_125171,inst_125177];
var inst_125179 = cljs.core.PersistentHashMap.fromArrays(inst_125167,inst_125178);
var inst_125180 = cljs.test.do_report(inst_125179);
var state_125424__$1 = state_125424;
var statearr_125476_133015 = state_125424__$1;
(statearr_125476_133015[(2)] = inst_125180);

(statearr_125476_133015[(1)] = (57));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125426 === (60))){
var _ = (function (){var statearr_125478 = state_125424;
(statearr_125478[(4)] = cljs.core.cons((63),(state_125424[(4)])));

return statearr_125478;
})();
var state_125424__$1 = state_125424;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_125424__$1,(64),self__.frags);
} else {
if((state_val_125426 === (27))){
var inst_124984 = (state_125424[(2)]);
var state_125424__$1 = (function (){var statearr_125480 = state_125424;
(statearr_125480[(9)] = inst_124984);

return statearr_125480;
})();
var statearr_125481_133017 = state_125424__$1;
(statearr_125481_133017[(2)] = null);

(statearr_125481_133017[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125426 === (1))){
var inst_124781 = (state_125424[(10)]);
var inst_124780 = (function (){return (function (){
cljs.core.async.close_BANG_(self__.frags);

return (done__60249__auto__.cljs$core$IFn$_invoke$arity$0 ? done__60249__auto__.cljs$core$IFn$_invoke$arity$0() : done__60249__auto__.call(null));
});
})();
var inst_124781__$1 = (new cljs.core.Delay(inst_124780,null));
var inst_124783 = (function (){var mark_as_done__60250__auto__ = inst_124781__$1;
return (function (){
if(cljs.core.realized_QMARK_(mark_as_done__60250__auto__)){
return null;
} else {
try{var value__9156__auto___133018 = (function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Async test error - not finalized",cljs.core.PersistentArrayMap.EMPTY)})();
if(cljs.core.truth_(value__9156__auto___133018)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"pass","pass",1574159993),null,null,cljs.core.list(new cljs.core.Symbol(null,"throw","throw",595905694,null),cljs.core.list(new cljs.core.Symbol("clojure.core","ex-info","clojure.core/ex-info",-504237117,null),"Async test error - not finalized",cljs.core.PersistentArrayMap.EMPTY)),null,value__9156__auto___133018,null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"fail","fail",1706214930),null,null,cljs.core.list(new cljs.core.Symbol(null,"throw","throw",595905694,null),cljs.core.list(new cljs.core.Symbol("clojure.core","ex-info","clojure.core/ex-info",-504237117,null),"Async test error - not finalized",cljs.core.PersistentArrayMap.EMPTY)),null,value__9156__auto___133018,null]));
}

}catch (e125485){var t__9189__auto___133019 = e125485;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol(null,"throw","throw",595905694,null),cljs.core.list(new cljs.core.Symbol("clojure.core","ex-info","clojure.core/ex-info",-504237117,null),"Async test error - not finalized",cljs.core.PersistentArrayMap.EMPTY)),null,t__9189__auto___133019,null]));
}
return cljs.core.deref(mark_as_done__60250__auto__);
}
});
})();
var inst_124784 = setTimeout(inst_124783,(3000));
var inst_124785 = (function (){var mark_as_done__60250__auto__ = inst_124781__$1;
return (function (p1__121460_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.lines,cljs.core.conj,p1__121460_SHARP_);
});
})();
var inst_124786 = (function (){var mark_as_done__60250__auto__ = inst_124781__$1;
return (function (p1__121462_SHARP_){
if(cljs.core.truth_(cljs.core.re_find(/BIG/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__121462_SHARP_)))){
return null;
} else {
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.frags,cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__121462_SHARP_));
}
});
})();
var inst_124787 = repl_tooling.repl_client.connection.treat_buffer_BANG_(self__.buffer,inst_124785,inst_124786);
var inst_124790 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_124791 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_124792 = (new cljs.core.PersistentVector(null,1,(5),inst_124790,inst_124791,null));
var inst_124793 = cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(inst_124792,cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["emits line"], 0));
var state_125424__$1 = (function (){var statearr_125492 = state_125424;
(statearr_125492[(10)] = inst_124781__$1);

(statearr_125492[(11)] = inst_124793);

(statearr_125492[(12)] = inst_124784);

(statearr_125492[(13)] = inst_124787);

return statearr_125492;
})();
var statearr_125495_133023 = state_125424__$1;
(statearr_125495_133023[(2)] = null);

(statearr_125495_133023[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125426 === (69))){
var _ = (function (){var statearr_125499 = state_125424;
(statearr_125499[(4)] = cljs.core.cons((72),(state_125424[(4)])));

return statearr_125499;
})();
var inst_125281 = (self__.get_lines.cljs$core$IFn$_invoke$arity$0 ? self__.get_lines.cljs$core$IFn$_invoke$arity$0() : self__.get_lines.call(null));
var inst_125282 = cljs.core.count(inst_125281);
var inst_125283 = cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol(null,"get-lines","get-lines",-282739043,null)));
var inst_125284 = (600000);
var inst_125285 = matcher_combinators.core.match((600000),inst_125282);
var inst_125288 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_125282], 0));
var inst_125289 = new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(inst_125285);
var inst_125290 = matcher_combinators.printer.as_string(inst_125289);
var inst_125291 = [inst_125288,"\n\nMismatch:\n",inst_125290].join('');
var inst_125292 = new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(inst_125285);
var inst_125293 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),inst_125292);
var inst_125295 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363)];
var state_125424__$1 = (function (){var statearr_125501 = state_125424;
(statearr_125501[(14)] = inst_125283);

(statearr_125501[(15)] = inst_125284);

(statearr_125501[(16)] = inst_125291);

(statearr_125501[(17)] = inst_125295);

return statearr_125501;
})();
if(inst_125293){
var statearr_125502_133024 = state_125424__$1;
(statearr_125502_133024[(1)] = (73));

} else {
var statearr_125503_133025 = state_125424__$1;
(statearr_125503_133025[(1)] = (74));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125426 === (24))){
var _ = (function (){var statearr_125504 = state_125424;
(statearr_125504[(4)] = cljs.core.rest((state_125424[(4)])));

return statearr_125504;
})();
var inst_124932 = (state_125424[(2)]);
var inst_124934 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_124935 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_124936 = (new cljs.core.PersistentVector(null,1,(5),inst_124934,inst_124935,null));
var inst_124937 = cljs.test.update_current_env_BANG_(inst_124936,cljs.core.rest);
var ___$1 = (function (){var temp__5753__auto__ = (state_125424[(5)]);
if(cljs.core.truth_(temp__5753__auto__)){
var e__38733__auto__ = temp__5753__auto__;
throw e__38733__auto__;
} else {
return null;
}
})();
var state_125424__$1 = (function (){var statearr_125505 = state_125424;
(statearr_125505[(18)] = inst_124937);

return statearr_125505;
})();
var statearr_125506_133028 = state_125424__$1;
(statearr_125506_133028[(2)] = inst_124932);

(statearr_125506_133028[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125426 === (55))){
var _ = (function (){var statearr_125509 = state_125424;
(statearr_125509[(4)] = cljs.core.rest((state_125424[(4)])));

return statearr_125509;
})();
var state_125424__$1 = state_125424;
var ex125498 = (state_125424__$1[(2)]);
var statearr_125512_133029 = state_125424__$1;
(statearr_125512_133029[(5)] = ex125498);


throw ex125498;


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125426 === (85))){
var _ = (function (){var statearr_125517 = state_125424;
(statearr_125517[(4)] = cljs.core.cons((88),(state_125424[(4)])));

return statearr_125517;
})();
var inst_125387 = (self__.get_lines.cljs$core$IFn$_invoke$arity$0 ? self__.get_lines.cljs$core$IFn$_invoke$arity$0() : self__.get_lines.call(null));
var inst_125389 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_125390 = [null];
var inst_125391 = (new cljs.core.PersistentVector(null,1,(5),inst_125389,inst_125390,null));
var inst_125392 = cljs.core.list(new cljs.core.Symbol(null,"get-lines","get-lines",-282739043,null));
var inst_125393 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null);
var inst_125395 = expectations.compare_expr.cljs$core$IFn$_invoke$arity$4(inst_125391,inst_125387,inst_125393,inst_125392);
var inst_125396 = expectations.__GT_failure_message(inst_125395);
var inst_125398 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_125392)," => ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_125393)].join('');
var inst_125399 = clojure.string.replace(inst_125396,/^.*?\n/,inst_125398);
var inst_125401 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_125403 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_125395);
var inst_125404 = [inst_125403,inst_125393,inst_125392,inst_125399];
var inst_125405 = cljs.core.PersistentHashMap.fromArrays(inst_125401,inst_125404);
var inst_125406 = cljs.test.do_report(inst_125405);
var ___$1 = (function (){var statearr_125521 = state_125424;
(statearr_125521[(4)] = cljs.core.rest((state_125424[(4)])));

return statearr_125521;
})();
var state_125424__$1 = state_125424;
var statearr_125522_133034 = state_125424__$1;
(statearr_125522_133034[(2)] = inst_125406);

(statearr_125522_133034[(1)] = (86));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125426 === (39))){
var inst_125076 = (state_125424[(2)]);
var state_125424__$1 = (function (){var statearr_125525 = state_125424;
(statearr_125525[(19)] = inst_125076);

return statearr_125525;
})();
var statearr_125527_133037 = state_125424__$1;
(statearr_125527_133037[(2)] = null);

(statearr_125527_133037[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125426 === (88))){
var _ = (function (){var statearr_125528 = state_125424;
(statearr_125528[(4)] = cljs.core.rest((state_125424[(4)])));

return statearr_125528;
})();
var state_125424__$1 = state_125424;
var ex125514 = (state_125424__$1[(2)]);
var statearr_125530_133038 = state_125424__$1;
(statearr_125530_133038[(5)] = ex125514);


var statearr_125532_133039 = state_125424__$1;
(statearr_125532_133039[(1)] = (87));

(statearr_125532_133039[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125426 === (46))){
var _ = (function (){var statearr_125534 = state_125424;
(statearr_125534[(4)] = cljs.core.rest((state_125424[(4)])));

return statearr_125534;
})();
var state_125424__$1 = state_125424;
var ex125523 = (state_125424__$1[(2)]);
var statearr_125535_133040 = state_125424__$1;
(statearr_125535_133040[(5)] = ex125523);


var statearr_125537_133041 = state_125424__$1;
(statearr_125537_133041[(1)] = (45));

(statearr_125537_133041[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125426 === (4))){
var _ = (function (){var statearr_125541 = state_125424;
(statearr_125541[(4)] = cljs.core.rest((state_125424[(4)])));

return statearr_125541;
})();
var inst_124795 = (state_125424[(2)]);
var inst_124796 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_124797 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_124798 = (new cljs.core.PersistentVector(null,1,(5),inst_124796,inst_124797,null));
var inst_124799 = cljs.test.update_current_env_BANG_(inst_124798,cljs.core.rest);
var ___$1 = (function (){var temp__5753__auto__ = (state_125424[(5)]);
if(cljs.core.truth_(temp__5753__auto__)){
var e__38733__auto__ = temp__5753__auto__;
throw e__38733__auto__;
} else {
return null;
}
})();
var state_125424__$1 = (function (){var statearr_125545 = state_125424;
(statearr_125545[(20)] = inst_124799);

return statearr_125545;
})();
var statearr_125546_133042 = state_125424__$1;
(statearr_125546_133042[(2)] = inst_124795);

(statearr_125546_133042[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125426 === (77))){
var inst_124781 = (state_125424[(10)]);
var inst_125412 = (state_125424[(2)]);
var inst_125413 = cljs.core.deref(inst_124781);
var state_125424__$1 = (function (){var statearr_125550 = state_125424;
(statearr_125550[(21)] = inst_125412);

return statearr_125550;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_125424__$1,inst_125413);
} else {
if((state_val_125426 === (54))){
var _ = (function (){var statearr_125552 = state_125424;
(statearr_125552[(4)] = cljs.core.rest((state_125424[(4)])));

return statearr_125552;
})();
var inst_125153 = (state_125424[(2)]);
var inst_125154 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_125155 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_125156 = (new cljs.core.PersistentVector(null,1,(5),inst_125154,inst_125155,null));
var inst_125157 = cljs.test.update_current_env_BANG_(inst_125156,cljs.core.rest);
var ___$1 = (function (){var temp__5753__auto__ = (state_125424[(5)]);
if(cljs.core.truth_(temp__5753__auto__)){
var e__38733__auto__ = temp__5753__auto__;
throw e__38733__auto__;
} else {
return null;
}
})();
var state_125424__$1 = (function (){var statearr_125556 = state_125424;
(statearr_125556[(22)] = inst_125157);

return statearr_125556;
})();
var statearr_125557_133045 = state_125424__$1;
(statearr_125557_133045[(2)] = inst_125153);

(statearr_125557_133045[(1)] = (53));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125426 === (15))){
var inst_124855 = (state_125424[(2)]);
var inst_124857 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_124858 = check.core.normalize_error(inst_124855);
var inst_124859 = cljs.core.list(new cljs.core.Symbol("async","<!","async/<!",-1308982001,null),new cljs.core.Symbol(null,"frags","frags",-341618008,null));
var inst_124860 = new cljs.core.Symbol(null,"=expect=>","=expect=>",-1384225590,null);
var inst_124862 = "foo\n";
var inst_124863 = ["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_124859)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_124860)," ",inst_124862].join('');
var inst_124864 = [new cljs.core.Keyword(null,"error","error",-978969032),"foo\n",inst_124858,inst_124863];
var inst_124865 = cljs.core.PersistentHashMap.fromArrays(inst_124857,inst_124864);
var inst_124866 = cljs.test.do_report(inst_124865);
var state_125424__$1 = state_125424;
var statearr_125562_133048 = state_125424__$1;
(statearr_125562_133048[(2)] = inst_124866);

(statearr_125562_133048[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125426 === (48))){
var _ = (function (){var statearr_125566 = state_125424;
(statearr_125566[(4)] = cljs.core.cons((51),(state_125424[(4)])));

return statearr_125566;
})();
var inst_125129 = cljs.core.deref(self__.buffer);
var inst_125130 = cljs.core.PersistentVector.EMPTY;
var inst_125131 = cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"buffer","buffer",-2037140571,null));
var inst_125132 = cljs.core.PersistentVector.EMPTY;
var inst_125133 = expectations.compare_expr.cljs$core$IFn$_invoke$arity$4(inst_125130,inst_125129,inst_125132,inst_125131);
var inst_125134 = expectations.__GT_failure_message(inst_125133);
var inst_125135 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_125131)," => ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_125132)].join('');
var inst_125136 = clojure.string.replace(inst_125134,/^.*?\n/,inst_125135);
var inst_125137 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_125138 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_125133);
var inst_125139 = [inst_125138,inst_125132,inst_125131,inst_125136];
var inst_125140 = cljs.core.PersistentHashMap.fromArrays(inst_125137,inst_125139);
var inst_125141 = cljs.test.do_report(inst_125140);
var ___$1 = (function (){var statearr_125571 = state_125424;
(statearr_125571[(4)] = cljs.core.rest((state_125424[(4)])));

return statearr_125571;
})();
var state_125424__$1 = state_125424;
var statearr_125573_133051 = state_125424__$1;
(statearr_125573_133051[(2)] = inst_125141);

(statearr_125573_133051[(1)] = (49));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125426 === (50))){
var inst_125111 = (state_125424[(2)]);
var inst_125112 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_125114 = cljs.core.PersistentVector.EMPTY;
var inst_125115 = check.core.normalize_error(inst_125111);
var inst_125116 = cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"buffer","buffer",-2037140571,null));
var inst_125117 = new cljs.core.Symbol(null,"=expect=>","=expect=>",-1384225590,null);
var inst_125118 = cljs.core.PersistentVector.EMPTY;
var inst_125119 = ["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_125116)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_125117)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_125118)].join('');
var inst_125120 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_125114,inst_125115,inst_125119];
var inst_125121 = cljs.core.PersistentHashMap.fromArrays(inst_125112,inst_125120);
var inst_125122 = cljs.test.do_report(inst_125121);
var state_125424__$1 = state_125424;
var statearr_125579_133054 = state_125424__$1;
(statearr_125579_133054[(2)] = inst_125122);

(statearr_125579_133054[(1)] = (49));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125426 === (75))){
var inst_125284 = (state_125424[(15)]);
var inst_125291 = (state_125424[(16)]);
var inst_125295 = (state_125424[(17)]);
var inst_125299 = (state_125424[(2)]);
var inst_125301 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(inst_125291);
var inst_125302 = [inst_125299,inst_125284,inst_125301];
var inst_125303 = cljs.core.PersistentHashMap.fromArrays(inst_125295,inst_125302);
var inst_125304 = cljs.test.do_report(inst_125303);
var _ = (function (){var statearr_125583 = state_125424;
(statearr_125583[(4)] = cljs.core.rest((state_125424[(4)])));

return statearr_125583;
})();
var state_125424__$1 = state_125424;
var statearr_125585_133056 = state_125424__$1;
(statearr_125585_133056[(2)] = inst_125304);

(statearr_125585_133056[(1)] = (70));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125426 === (21))){
var _ = (function (){var statearr_125586 = state_125424;
(statearr_125586[(4)] = cljs.core.rest((state_125424[(4)])));

return statearr_125586;
})();
var state_125424__$1 = state_125424;
var ex125574 = (state_125424__$1[(2)]);
var statearr_125587_133058 = state_125424__$1;
(statearr_125587_133058[(5)] = ex125574);


var statearr_125588_133059 = state_125424__$1;
(statearr_125588_133059[(1)] = (20));

(statearr_125588_133059[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125426 === (31))){
var inst_125022 = (state_125424[(2)]);
var _ = (function (){var statearr_125589 = state_125424;
(statearr_125589[(4)] = cljs.core.rest((state_125424[(4)])));

return statearr_125589;
})();
var state_125424__$1 = state_125424;
var statearr_125590_133062 = state_125424__$1;
(statearr_125590_133062[(2)] = inst_125022);

(statearr_125590_133062[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125426 === (32))){
var inst_124985 = (state_125424[(2)]);
var inst_124986 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_124987 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_124988 = ["baz"];
var inst_124989 = (new cljs.core.PersistentVector(null,1,(5),inst_124987,inst_124988,null));
var inst_124991 = check.core.normalize_error(inst_124985);
var inst_124992 = cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"buffer","buffer",-2037140571,null));
var inst_124993 = new cljs.core.Symbol(null,"=expect=>","=expect=>",-1384225590,null);
var inst_124994 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["baz"], null);
var inst_124995 = ["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_124992)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_124993)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_124994)].join('');
var inst_124996 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_124989,inst_124991,inst_124995];
var inst_124997 = cljs.core.PersistentHashMap.fromArrays(inst_124986,inst_124996);
var inst_124998 = cljs.test.do_report(inst_124997);
var state_125424__$1 = state_125424;
var statearr_125592_133065 = state_125424__$1;
(statearr_125592_133065[(2)] = inst_124998);

(statearr_125592_133065[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125426 === (40))){
var inst_125044 = (state_125424[(2)]);
var inst_125045 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_125046 = check.core.normalize_error(inst_125044);
var inst_125047 = cljs.core.list(new cljs.core.Symbol("async","<!","async/<!",-1308982001,null),new cljs.core.Symbol(null,"frags","frags",-341618008,null));
var inst_125048 = new cljs.core.Symbol(null,"=expect=>","=expect=>",-1384225590,null);
var inst_125049 = "foobarb\n";
var inst_125050 = ["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_125047)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_125048)," ",inst_125049].join('');
var inst_125051 = [new cljs.core.Keyword(null,"error","error",-978969032),"foobarb\n",inst_125046,inst_125050];
var inst_125052 = cljs.core.PersistentHashMap.fromArrays(inst_125045,inst_125051);
var inst_125053 = cljs.test.do_report(inst_125052);
var state_125424__$1 = state_125424;
var statearr_125594_133067 = state_125424__$1;
(statearr_125594_133067[(2)] = inst_125053);

(statearr_125594_133067[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125426 === (56))){
var _ = (function (){var statearr_125595 = state_125424;
(statearr_125595[(4)] = cljs.core.cons((59),(state_125424[(4)])));

return statearr_125595;
})();
var inst_125187 = (self__.get_lines.cljs$core$IFn$_invoke$arity$0 ? self__.get_lines.cljs$core$IFn$_invoke$arity$0() : self__.get_lines.call(null));
var inst_125188 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_125189 = ["bazaar"];
var inst_125190 = (new cljs.core.PersistentVector(null,1,(5),inst_125188,inst_125189,null));
var inst_125191 = cljs.core.list(new cljs.core.Symbol(null,"get-lines","get-lines",-282739043,null));
var inst_125192 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["bazaar"], null);
var inst_125193 = expectations.compare_expr.cljs$core$IFn$_invoke$arity$4(inst_125190,inst_125187,inst_125192,inst_125191);
var inst_125194 = expectations.__GT_failure_message(inst_125193);
var inst_125196 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_125191)," => ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_125192)].join('');
var inst_125197 = clojure.string.replace(inst_125194,/^.*?\n/,inst_125196);
var inst_125198 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_125199 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_125193);
var inst_125200 = [inst_125199,inst_125192,inst_125191,inst_125197];
var inst_125201 = cljs.core.PersistentHashMap.fromArrays(inst_125198,inst_125200);
var inst_125202 = cljs.test.do_report(inst_125201);
var ___$1 = (function (){var statearr_125600 = state_125424;
(statearr_125600[(4)] = cljs.core.rest((state_125424[(4)])));

return statearr_125600;
})();
var state_125424__$1 = state_125424;
var statearr_125602_133068 = state_125424__$1;
(statearr_125602_133068[(2)] = inst_125202);

(statearr_125602_133068[(1)] = (57));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125426 === (33))){
var _ = (function (){var statearr_125603 = state_125424;
(statearr_125603[(4)] = cljs.core.rest((state_125424[(4)])));

return statearr_125603;
})();
var state_125424__$1 = state_125424;
var ex125593 = (state_125424__$1[(2)]);
var statearr_125604_133069 = state_125424__$1;
(statearr_125604_133069[(5)] = ex125593);


var statearr_125607_133071 = state_125424__$1;
(statearr_125607_133071[(1)] = (32));

(statearr_125607_133071[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125426 === (13))){
var _ = (function (){var statearr_125611 = state_125424;
(statearr_125611[(4)] = cljs.core.cons((16),(state_125424[(4)])));

return statearr_125611;
})();
var state_125424__$1 = state_125424;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_125424__$1,(17),self__.frags);
} else {
if((state_val_125426 === (22))){
var _ = (function (){var statearr_125613 = state_125424;
(statearr_125613[(4)] = cljs.core.cons((24),(state_125424[(4)])));

return statearr_125613;
})();
var ___$1 = (function (){var statearr_125616 = state_125424;
(statearr_125616[(4)] = cljs.core.cons((25),(state_125424[(4)])));

return statearr_125616;
})();
var inst_124945 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.buffer,cljs.core.conj,"foo");
var inst_124946 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.buffer,cljs.core.conj,"bar");
var inst_124947 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.buffer,cljs.core.conj,"b\nbaz");
var state_125424__$1 = (function (){var statearr_125620 = state_125424;
(statearr_125620[(23)] = inst_124946);

(statearr_125620[(24)] = inst_124945);

(statearr_125620[(25)] = inst_124947);

return statearr_125620;
})();
var statearr_125623_133072 = state_125424__$1;
(statearr_125623_133072[(2)] = null);

(statearr_125623_133072[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125426 === (36))){
var _ = (function (){var statearr_125626 = state_125424;
(statearr_125626[(4)] = cljs.core.rest((state_125424[(4)])));

return statearr_125626;
})();
var inst_125032 = (state_125424[(2)]);
var inst_125033 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_125034 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_125035 = (new cljs.core.PersistentVector(null,1,(5),inst_125033,inst_125034,null));
var inst_125036 = cljs.test.update_current_env_BANG_(inst_125035,cljs.core.rest);
var ___$1 = (function (){var temp__5753__auto__ = (state_125424[(5)]);
if(cljs.core.truth_(temp__5753__auto__)){
var e__38733__auto__ = temp__5753__auto__;
throw e__38733__auto__;
} else {
return null;
}
})();
var state_125424__$1 = (function (){var statearr_125631 = state_125424;
(statearr_125631[(26)] = inst_125036);

return statearr_125631;
})();
var statearr_125632_133075 = state_125424__$1;
(statearr_125632_133075[(2)] = inst_125032);

(statearr_125632_133075[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125426 === (41))){
var _ = (function (){var statearr_125636 = state_125424;
(statearr_125636[(4)] = cljs.core.rest((state_125424[(4)])));

return statearr_125636;
})();
var state_125424__$1 = state_125424;
var ex125612 = (state_125424__$1[(2)]);
var statearr_125638_133077 = state_125424__$1;
(statearr_125638_133077[(5)] = ex125612);


var statearr_125642_133078 = state_125424__$1;
(statearr_125642_133078[(1)] = (40));

(statearr_125642_133078[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125426 === (43))){
var _ = (function (){var statearr_125646 = state_125424;
(statearr_125646[(4)] = cljs.core.cons((46),(state_125424[(4)])));

return statearr_125646;
})();
var state_125424__$1 = state_125424;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_125424__$1,(47),self__.frags);
} else {
if((state_val_125426 === (61))){
var inst_125239 = (state_125424[(2)]);
var _ = (function (){var statearr_125648 = state_125424;
(statearr_125648[(4)] = cljs.core.rest((state_125424[(4)])));

return statearr_125648;
})();
var state_125424__$1 = state_125424;
var statearr_125650_133080 = state_125424__$1;
(statearr_125650_133080[(2)] = inst_125239);

(statearr_125650_133080[(1)] = (54));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125426 === (29))){
var _ = (function (){var statearr_125653 = state_125424;
(statearr_125653[(4)] = cljs.core.rest((state_125424[(4)])));

return statearr_125653;
})();
var state_125424__$1 = state_125424;
var ex125643 = (state_125424__$1[(2)]);
var statearr_125655_133081 = state_125424__$1;
(statearr_125655_133081[(5)] = ex125643);


var statearr_125657_133083 = state_125424__$1;
(statearr_125657_133083[(1)] = (28));

(statearr_125657_133083[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125426 === (44))){
var inst_125110 = (state_125424[(2)]);
var state_125424__$1 = (function (){var statearr_125658 = state_125424;
(statearr_125658[(27)] = inst_125110);

return statearr_125658;
})();
var statearr_125659_133084 = state_125424__$1;
(statearr_125659_133084[(2)] = null);

(statearr_125659_133084[(1)] = (48));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125426 === (6))){
var _ = (function (){var statearr_125663 = state_125424;
(statearr_125663[(4)] = cljs.core.cons((9),(state_125424[(4)])));

return statearr_125663;
})();
var inst_124828 = (self__.get_lines.cljs$core$IFn$_invoke$arity$0 ? self__.get_lines.cljs$core$IFn$_invoke$arity$0() : self__.get_lines.call(null));
var inst_124829 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_124830 = ["foo"];
var inst_124831 = (new cljs.core.PersistentVector(null,1,(5),inst_124829,inst_124830,null));
var inst_124832 = cljs.core.list(new cljs.core.Symbol(null,"get-lines","get-lines",-282739043,null));
var inst_124833 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["foo"], null);
var inst_124834 = matcher_combinators.core.match(inst_124831,inst_124828);
var inst_124835 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_124828], 0));
var inst_124836 = new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(inst_124834);
var inst_124837 = matcher_combinators.printer.as_string(inst_124836);
var inst_124838 = [inst_124835,"\n\nMismatch:\n",inst_124837].join('');
var inst_124840 = new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(inst_124834);
var inst_124841 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),inst_124840);
var inst_124843 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363)];
var state_125424__$1 = (function (){var statearr_125666 = state_125424;
(statearr_125666[(28)] = inst_124833);

(statearr_125666[(29)] = inst_124838);

(statearr_125666[(30)] = inst_124832);

(statearr_125666[(31)] = inst_124843);

return statearr_125666;
})();
if(inst_124841){
var statearr_125667_133085 = state_125424__$1;
(statearr_125667_133085[(1)] = (10));

} else {
var statearr_125669_133086 = state_125424__$1;
(statearr_125669_133086[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125426 === (28))){
var inst_124948 = (state_125424[(2)]);
var inst_124949 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_124950 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_124951 = ["foobarb"];
var inst_124952 = (new cljs.core.PersistentVector(null,1,(5),inst_124950,inst_124951,null));
var inst_124953 = check.core.normalize_error(inst_124948);
var inst_124955 = cljs.core.list(new cljs.core.Symbol(null,"get-lines","get-lines",-282739043,null));
var inst_124956 = new cljs.core.Symbol(null,"=expect=>","=expect=>",-1384225590,null);
var inst_124957 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["foobarb"], null);
var inst_124958 = ["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_124955)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_124956)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_124957)].join('');
var inst_124959 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_124952,inst_124953,inst_124958];
var inst_124960 = cljs.core.PersistentHashMap.fromArrays(inst_124949,inst_124959);
var inst_124961 = cljs.test.do_report(inst_124960);
var state_125424__$1 = state_125424;
var statearr_125673_133088 = state_125424__$1;
(statearr_125673_133088[(2)] = inst_124961);

(statearr_125673_133088[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125426 === (64))){
var inst_125222 = (state_125424[(2)]);
var inst_125223 = cljs.core.list(new cljs.core.Symbol("async","<!","async/<!",-1308982001,null),new cljs.core.Symbol(null,"frags","frags",-341618008,null));
var inst_125224 = "aar\n";
var inst_125225 = expectations.compare_expr.cljs$core$IFn$_invoke$arity$4("aar\n",inst_125222,inst_125224,inst_125223);
var inst_125226 = expectations.__GT_failure_message(inst_125225);
var inst_125229 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_125223)," => ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_125224)].join('');
var inst_125230 = clojure.string.replace(inst_125226,/^.*?\n/,inst_125229);
var inst_125232 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_125233 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_125225);
var inst_125234 = [inst_125233,inst_125224,inst_125223,inst_125230];
var inst_125235 = cljs.core.PersistentHashMap.fromArrays(inst_125232,inst_125234);
var inst_125236 = cljs.test.do_report(inst_125235);
var _ = (function (){var statearr_125676 = state_125424;
(statearr_125676[(4)] = cljs.core.rest((state_125424[(4)])));

return statearr_125676;
})();
var state_125424__$1 = state_125424;
var statearr_125678_133091 = state_125424__$1;
(statearr_125678_133091[(2)] = inst_125236);

(statearr_125678_133091[(1)] = (61));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125426 === (51))){
var _ = (function (){var statearr_125682 = state_125424;
(statearr_125682[(4)] = cljs.core.rest((state_125424[(4)])));

return statearr_125682;
})();
var state_125424__$1 = state_125424;
var ex125670 = (state_125424__$1[(2)]);
var statearr_125684_133093 = state_125424__$1;
(statearr_125684_133093[(5)] = ex125670);


var statearr_125685_133094 = state_125424__$1;
(statearr_125685_133094[(1)] = (50));

(statearr_125685_133094[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125426 === (25))){
var _ = (function (){var statearr_125689 = state_125424;
(statearr_125689[(4)] = cljs.core.rest((state_125424[(4)])));

return statearr_125689;
})();
var state_125424__$1 = state_125424;
var ex125674 = (state_125424__$1[(2)]);
var statearr_125694_133095 = state_125424__$1;
(statearr_125694_133095[(5)] = ex125674);


throw ex125674;


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125426 === (34))){
var _ = (function (){var statearr_125698 = state_125424;
(statearr_125698[(4)] = cljs.core.cons((36),(state_125424[(4)])));

return statearr_125698;
})();
var ___$1 = (function (){var statearr_125702 = state_125424;
(statearr_125702[(4)] = cljs.core.cons((37),(state_125424[(4)])));

return statearr_125702;
})();
var state_125424__$1 = state_125424;
var statearr_125703_133097 = state_125424__$1;
(statearr_125703_133097[(2)] = null);

(statearr_125703_133097[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125426 === (17))){
var inst_124873 = (state_125424[(2)]);
var inst_124874 = cljs.core.list(new cljs.core.Symbol("async","<!","async/<!",-1308982001,null),new cljs.core.Symbol(null,"frags","frags",-341618008,null));
var inst_124875 = "foo\n";
var inst_124877 = expectations.compare_expr.cljs$core$IFn$_invoke$arity$4("foo\n",inst_124873,inst_124875,inst_124874);
var inst_124878 = expectations.__GT_failure_message(inst_124877);
var inst_124881 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_124874)," => ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_124875)].join('');
var inst_124882 = clojure.string.replace(inst_124878,/^.*?\n/,inst_124881);
var inst_124883 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_124884 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_124877);
var inst_124885 = [inst_124884,inst_124875,inst_124874,inst_124882];
var inst_124886 = cljs.core.PersistentHashMap.fromArrays(inst_124883,inst_124885);
var inst_124887 = cljs.test.do_report(inst_124886);
var _ = (function (){var statearr_125709 = state_125424;
(statearr_125709[(4)] = cljs.core.rest((state_125424[(4)])));

return statearr_125709;
})();
var state_125424__$1 = state_125424;
var statearr_125711_133099 = state_125424__$1;
(statearr_125711_133099[(2)] = inst_124887);

(statearr_125711_133099[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125426 === (3))){
var inst_124926 = (state_125424[(2)]);
var inst_124927 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_124928 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_124929 = (new cljs.core.PersistentVector(null,1,(5),inst_124927,inst_124928,null));
var inst_124930 = cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(inst_124929,cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["emits complex line"], 0));
var state_125424__$1 = (function (){var statearr_125716 = state_125424;
(statearr_125716[(32)] = inst_124930);

(statearr_125716[(33)] = inst_124926);

return statearr_125716;
})();
var statearr_125718_133101 = state_125424__$1;
(statearr_125718_133101[(2)] = null);

(statearr_125718_133101[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125426 === (12))){
var inst_124833 = (state_125424[(28)]);
var inst_124838 = (state_125424[(29)]);
var inst_124843 = (state_125424[(31)]);
var inst_124847 = (state_125424[(2)]);
var inst_124848 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(inst_124838);
var inst_124849 = [inst_124847,inst_124833,inst_124848];
var inst_124850 = cljs.core.PersistentHashMap.fromArrays(inst_124843,inst_124849);
var inst_124851 = cljs.test.do_report(inst_124850);
var _ = (function (){var statearr_125725 = state_125424;
(statearr_125725[(4)] = cljs.core.rest((state_125424[(4)])));

return statearr_125725;
})();
var state_125424__$1 = state_125424;
var statearr_125729_133103 = state_125424__$1;
(statearr_125729_133103[(2)] = inst_124851);

(statearr_125729_133103[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125426 === (2))){
var _ = (function (){var statearr_125733 = state_125424;
(statearr_125733[(4)] = cljs.core.cons((4),(state_125424[(4)])));

return statearr_125733;
})();
var ___$1 = (function (){var statearr_125734 = state_125424;
(statearr_125734[(4)] = cljs.core.cons((5),(state_125424[(4)])));

return statearr_125734;
})();
var inst_124808 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.buffer,cljs.core.conj,"foo\n");
var state_125424__$1 = (function (){var statearr_125737 = state_125424;
(statearr_125737[(34)] = inst_124808);

return statearr_125737;
})();
var statearr_125739_133105 = state_125424__$1;
(statearr_125739_133105[(2)] = null);

(statearr_125739_133105[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125426 === (66))){
var inst_125310 = (state_125424[(2)]);
var inst_125312 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_125314 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_125315 = (new cljs.core.PersistentVector(null,1,(5),inst_125312,inst_125314,null));
var inst_125316 = cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(inst_125315,cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["emits nil when closed connection"], 0));
var state_125424__$1 = (function (){var statearr_125742 = state_125424;
(statearr_125742[(35)] = inst_125316);

(statearr_125742[(36)] = inst_125310);

return statearr_125742;
})();
var statearr_125744_133106 = state_125424__$1;
(statearr_125744_133106[(2)] = null);

(statearr_125744_133106[(1)] = (76));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125426 === (23))){
var inst_125025 = (state_125424[(2)]);
var inst_125027 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_125028 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_125029 = (new cljs.core.PersistentVector(null,1,(5),inst_125027,inst_125028,null));
var inst_125030 = cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(inst_125029,cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["emits fragments"], 0));
var state_125424__$1 = (function (){var statearr_125751 = state_125424;
(statearr_125751[(37)] = inst_125025);

(statearr_125751[(38)] = inst_125030);

return statearr_125751;
})();
var statearr_125753_133107 = state_125424__$1;
(statearr_125753_133107[(2)] = null);

(statearr_125753_133107[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125426 === (47))){
var inst_125096 = (state_125424[(2)]);
var inst_125097 = cljs.core.list(new cljs.core.Symbol("async","<!","async/<!",-1308982001,null),new cljs.core.Symbol(null,"frags","frags",-341618008,null));
var inst_125098 = "baz";
var inst_125099 = expectations.compare_expr.cljs$core$IFn$_invoke$arity$4("baz",inst_125096,inst_125098,inst_125097);
var inst_125100 = expectations.__GT_failure_message(inst_125099);
var inst_125101 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_125097)," => ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_125098)].join('');
var inst_125102 = clojure.string.replace(inst_125100,/^.*?\n/,inst_125101);
var inst_125103 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_125104 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_125099);
var inst_125105 = [inst_125104,inst_125098,inst_125097,inst_125102];
var inst_125106 = cljs.core.PersistentHashMap.fromArrays(inst_125103,inst_125105);
var inst_125107 = cljs.test.do_report(inst_125106);
var _ = (function (){var statearr_125758 = state_125424;
(statearr_125758[(4)] = cljs.core.rest((state_125424[(4)])));

return statearr_125758;
})();
var state_125424__$1 = state_125424;
var statearr_125762_133109 = state_125424__$1;
(statearr_125762_133109[(2)] = inst_125107);

(statearr_125762_133109[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125426 === (35))){
var inst_125147 = (state_125424[(2)]);
var inst_125148 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_125149 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_125150 = (new cljs.core.PersistentVector(null,1,(5),inst_125148,inst_125149,null));
var inst_125151 = cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(inst_125150,cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["emits lines of already emitted frags"], 0));
var state_125424__$1 = (function (){var statearr_125765 = state_125424;
(statearr_125765[(39)] = inst_125147);

(statearr_125765[(40)] = inst_125151);

return statearr_125765;
})();
var statearr_125767_133112 = state_125424__$1;
(statearr_125767_133112[(2)] = null);

(statearr_125767_133112[(1)] = (52));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125426 === (82))){
var inst_125332 = (state_125424[(2)]);
var inst_125335 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_125336 = check.core.normalize_error(inst_125332);
var inst_125337 = cljs.core.list(new cljs.core.Symbol("async","<!","async/<!",-1308982001,null),new cljs.core.Symbol(null,"frags","frags",-341618008,null));
var inst_125338 = new cljs.core.Symbol(null,"=expect=>","=expect=>",-1384225590,null);
var inst_125339 = "";
var inst_125340 = ["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_125337)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_125338)," ",inst_125339].join('');
var inst_125341 = [new cljs.core.Keyword(null,"error","error",-978969032),"",inst_125336,inst_125340];
var inst_125342 = cljs.core.PersistentHashMap.fromArrays(inst_125335,inst_125341);
var inst_125343 = cljs.test.do_report(inst_125342);
var state_125424__$1 = state_125424;
var statearr_125774_133115 = state_125424__$1;
(statearr_125774_133115[(2)] = inst_125343);

(statearr_125774_133115[(1)] = (81));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125426 === (76))){
var _ = (function (){var statearr_125777 = state_125424;
(statearr_125777[(4)] = cljs.core.cons((78),(state_125424[(4)])));

return statearr_125777;
})();
var ___$1 = (function (){var statearr_125780 = state_125424;
(statearr_125780[(4)] = cljs.core.cons((79),(state_125424[(4)])));

return statearr_125780;
})();
var inst_125330 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.buffer,cljs.core.conj,new cljs.core.Keyword(null,"closed","closed",-919675359));
var state_125424__$1 = (function (){var statearr_125782 = state_125424;
(statearr_125782[(41)] = inst_125330);

return statearr_125782;
})();
var statearr_125784_133116 = state_125424__$1;
(statearr_125784_133116[(2)] = null);

(statearr_125784_133116[(1)] = (80));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125426 === (19))){
var inst_124923 = (state_125424[(2)]);
var _ = (function (){var statearr_125789 = state_125424;
(statearr_125789[(4)] = cljs.core.rest((state_125424[(4)])));

return statearr_125789;
})();
var state_125424__$1 = state_125424;
var statearr_125790_133117 = state_125424__$1;
(statearr_125790_133117[(2)] = inst_124923);

(statearr_125790_133117[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125426 === (57))){
var inst_125205 = (state_125424[(2)]);
var state_125424__$1 = (function (){var statearr_125792 = state_125424;
(statearr_125792[(42)] = inst_125205);

return statearr_125792;
})();
var statearr_125795_133118 = state_125424__$1;
(statearr_125795_133118[(2)] = null);

(statearr_125795_133118[(1)] = (60));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125426 === (68))){
var _ = (function (){var statearr_125801 = state_125424;
(statearr_125801[(4)] = cljs.core.rest((state_125424[(4)])));

return statearr_125801;
})();
var state_125424__$1 = state_125424;
var ex125788 = (state_125424__$1[(2)]);
var statearr_125802_133120 = state_125424__$1;
(statearr_125802_133120[(5)] = ex125788);


throw ex125788;


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125426 === (11))){
var state_125424__$1 = state_125424;
var statearr_125808_133121 = state_125424__$1;
(statearr_125808_133121[(2)] = new cljs.core.Keyword(null,"fail","fail",1706214930));

(statearr_125808_133121[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125426 === (9))){
var _ = (function (){var statearr_125810 = state_125424;
(statearr_125810[(4)] = cljs.core.rest((state_125424[(4)])));

return statearr_125810;
})();
var state_125424__$1 = state_125424;
var ex125799 = (state_125424__$1[(2)]);
var statearr_125811_133124 = state_125424__$1;
(statearr_125811_133124[(5)] = ex125799);


var statearr_125815_133125 = state_125424__$1;
(statearr_125815_133125[(1)] = (8));

(statearr_125815_133125[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125426 === (5))){
var _ = (function (){var statearr_125818 = state_125424;
(statearr_125818[(4)] = cljs.core.rest((state_125424[(4)])));

return statearr_125818;
})();
var state_125424__$1 = state_125424;
var ex125804 = (state_125424__$1[(2)]);
var statearr_125822_133127 = state_125424__$1;
(statearr_125822_133127[(5)] = ex125804);


throw ex125804;


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125426 === (83))){
var _ = (function (){var statearr_125827 = state_125424;
(statearr_125827[(4)] = cljs.core.rest((state_125424[(4)])));

return statearr_125827;
})();
var state_125424__$1 = state_125424;
var ex125809 = (state_125424__$1[(2)]);
var statearr_125830_133128 = state_125424__$1;
(statearr_125830_133128[(5)] = ex125809);


var statearr_125832_133129 = state_125424__$1;
(statearr_125832_133129[(1)] = (82));

(statearr_125832_133129[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125426 === (14))){
var inst_124890 = (state_125424[(2)]);
var state_125424__$1 = (function (){var statearr_125834 = state_125424;
(statearr_125834[(43)] = inst_124890);

return statearr_125834;
})();
var statearr_125835_133130 = state_125424__$1;
(statearr_125835_133130[(2)] = null);

(statearr_125835_133130[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125426 === (45))){
var inst_125077 = (state_125424[(2)]);
var inst_125079 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_125080 = check.core.normalize_error(inst_125077);
var inst_125081 = cljs.core.list(new cljs.core.Symbol("async","<!","async/<!",-1308982001,null),new cljs.core.Symbol(null,"frags","frags",-341618008,null));
var inst_125082 = new cljs.core.Symbol(null,"=expect=>","=expect=>",-1384225590,null);
var inst_125083 = "baz";
var inst_125084 = ["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_125081)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_125082)," ",inst_125083].join('');
var inst_125085 = [new cljs.core.Keyword(null,"error","error",-978969032),"baz",inst_125080,inst_125084];
var inst_125086 = cljs.core.PersistentHashMap.fromArrays(inst_125079,inst_125085);
var inst_125087 = cljs.test.do_report(inst_125086);
var state_125424__$1 = state_125424;
var statearr_125841_133133 = state_125424__$1;
(statearr_125841_133133[(2)] = inst_125087);

(statearr_125841_133133[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125426 === (53))){
var inst_125242 = (state_125424[(2)]);
var inst_125243 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_125244 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_125245 = (new cljs.core.PersistentVector(null,1,(5),inst_125243,inst_125244,null));
var inst_125246 = cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(inst_125245,cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["emits LOTS of lines"], 0));
var state_125424__$1 = (function (){var statearr_125849 = state_125424;
(statearr_125849[(44)] = inst_125242);

(statearr_125849[(45)] = inst_125246);

return statearr_125849;
})();
var statearr_125850_133136 = state_125424__$1;
(statearr_125850_133136[(2)] = null);

(statearr_125850_133136[(1)] = (65));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125426 === (78))){
var _ = (function (){var statearr_125853 = state_125424;
(statearr_125853[(4)] = cljs.core.rest((state_125424[(4)])));

return statearr_125853;
})();
var inst_125318 = (state_125424[(2)]);
var inst_125319 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_125320 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_125321 = (new cljs.core.PersistentVector(null,1,(5),inst_125319,inst_125320,null));
var inst_125322 = cljs.test.update_current_env_BANG_(inst_125321,cljs.core.rest);
var ___$1 = (function (){var temp__5753__auto__ = (state_125424[(5)]);
if(cljs.core.truth_(temp__5753__auto__)){
var e__38733__auto__ = temp__5753__auto__;
throw e__38733__auto__;
} else {
return null;
}
})();
var state_125424__$1 = (function (){var statearr_125858 = state_125424;
(statearr_125858[(46)] = inst_125322);

return statearr_125858;
})();
var statearr_125860_133139 = state_125424__$1;
(statearr_125860_133139[(2)] = inst_125318);

(statearr_125860_133139[(1)] = (77));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125426 === (26))){
var _ = (function (){var statearr_125863 = state_125424;
(statearr_125863[(4)] = cljs.core.cons((29),(state_125424[(4)])));

return statearr_125863;
})();
var inst_124967 = (self__.get_lines.cljs$core$IFn$_invoke$arity$0 ? self__.get_lines.cljs$core$IFn$_invoke$arity$0() : self__.get_lines.call(null));
var inst_124968 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_124969 = ["foobarb"];
var inst_124970 = (new cljs.core.PersistentVector(null,1,(5),inst_124968,inst_124969,null));
var inst_124971 = cljs.core.list(new cljs.core.Symbol(null,"get-lines","get-lines",-282739043,null));
var inst_124972 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["foobarb"], null);
var inst_124973 = expectations.compare_expr.cljs$core$IFn$_invoke$arity$4(inst_124970,inst_124967,inst_124972,inst_124971);
var inst_124974 = expectations.__GT_failure_message(inst_124973);
var inst_124975 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_124971)," => ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_124972)].join('');
var inst_124976 = clojure.string.replace(inst_124974,/^.*?\n/,inst_124975);
var inst_124977 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_124978 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_124973);
var inst_124979 = [inst_124978,inst_124972,inst_124971,inst_124976];
var inst_124980 = cljs.core.PersistentHashMap.fromArrays(inst_124977,inst_124979);
var inst_124981 = cljs.test.do_report(inst_124980);
var ___$1 = (function (){var statearr_125866 = state_125424;
(statearr_125866[(4)] = cljs.core.rest((state_125424[(4)])));

return statearr_125866;
})();
var state_125424__$1 = state_125424;
var statearr_125867_133143 = state_125424__$1;
(statearr_125867_133143[(2)] = inst_124981);

(statearr_125867_133143[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125426 === (16))){
var _ = (function (){var statearr_125870 = state_125424;
(statearr_125870[(4)] = cljs.core.rest((state_125424[(4)])));

return statearr_125870;
})();
var state_125424__$1 = state_125424;
var ex125851 = (state_125424__$1[(2)]);
var statearr_125872_133144 = state_125424__$1;
(statearr_125872_133144[(5)] = ex125851);


var statearr_125875_133145 = state_125424__$1;
(statearr_125875_133145[(1)] = (15));

(statearr_125875_133145[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125426 === (81))){
var inst_125367 = (state_125424[(2)]);
var state_125424__$1 = (function (){var statearr_125878 = state_125424;
(statearr_125878[(47)] = inst_125367);

return statearr_125878;
})();
var statearr_125879_133147 = state_125424__$1;
(statearr_125879_133147[(2)] = null);

(statearr_125879_133147[(1)] = (85));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125426 === (79))){
var _ = (function (){var statearr_125880 = state_125424;
(statearr_125880[(4)] = cljs.core.rest((state_125424[(4)])));

return statearr_125880;
})();
var state_125424__$1 = state_125424;
var ex125869 = (state_125424__$1[(2)]);
var statearr_125882_133150 = state_125424__$1;
(statearr_125882_133150[(5)] = ex125869);


throw ex125869;


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125426 === (38))){
var _ = (function (){var statearr_125885 = state_125424;
(statearr_125885[(4)] = cljs.core.cons((41),(state_125424[(4)])));

return statearr_125885;
})();
var state_125424__$1 = state_125424;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_125424__$1,(42),self__.frags);
} else {
if((state_val_125426 === (87))){
var inst_125368 = (state_125424[(2)]);
var inst_125369 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_125371 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_125372 = [null];
var inst_125373 = (new cljs.core.PersistentVector(null,1,(5),inst_125371,inst_125372,null));
var inst_125374 = check.core.normalize_error(inst_125368);
var inst_125375 = cljs.core.list(new cljs.core.Symbol(null,"get-lines","get-lines",-282739043,null));
var inst_125376 = new cljs.core.Symbol(null,"=expect=>","=expect=>",-1384225590,null);
var inst_125377 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null);
var inst_125378 = ["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_125375)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_125376)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_125377)].join('');
var inst_125379 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_125373,inst_125374,inst_125378];
var inst_125380 = cljs.core.PersistentHashMap.fromArrays(inst_125369,inst_125379);
var inst_125381 = cljs.test.do_report(inst_125380);
var state_125424__$1 = state_125424;
var statearr_125889_133153 = state_125424__$1;
(statearr_125889_133153[(2)] = inst_125381);

(statearr_125889_133153[(1)] = (86));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125426 === (30))){
var _ = (function (){var statearr_125892 = state_125424;
(statearr_125892[(4)] = cljs.core.cons((33),(state_125424[(4)])));

return statearr_125892;
})();
var inst_125004 = cljs.core.deref(self__.buffer);
var inst_125005 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_125006 = ["baz"];
var inst_125007 = (new cljs.core.PersistentVector(null,1,(5),inst_125005,inst_125006,null));
var inst_125008 = cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"buffer","buffer",-2037140571,null));
var inst_125009 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["baz"], null);
var inst_125010 = expectations.compare_expr.cljs$core$IFn$_invoke$arity$4(inst_125007,inst_125004,inst_125009,inst_125008);
var inst_125011 = expectations.__GT_failure_message(inst_125010);
var inst_125012 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_125008)," => ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_125009)].join('');
var inst_125013 = clojure.string.replace(inst_125011,/^.*?\n/,inst_125012);
var inst_125014 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_125015 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_125010);
var inst_125016 = [inst_125015,inst_125009,inst_125008,inst_125013];
var inst_125017 = cljs.core.PersistentHashMap.fromArrays(inst_125014,inst_125016);
var inst_125019 = cljs.test.do_report(inst_125017);
var ___$1 = (function (){var statearr_125897 = state_125424;
(statearr_125897[(4)] = cljs.core.rest((state_125424[(4)])));

return statearr_125897;
})();
var state_125424__$1 = state_125424;
var statearr_125898_133155 = state_125424__$1;
(statearr_125898_133155[(2)] = inst_125019);

(statearr_125898_133155[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125426 === (73))){
var state_125424__$1 = state_125424;
var statearr_125901_133156 = state_125424__$1;
(statearr_125901_133156[(2)] = new cljs.core.Keyword(null,"pass","pass",1574159993));

(statearr_125901_133156[(1)] = (75));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125426 === (10))){
var state_125424__$1 = state_125424;
var statearr_125904_133159 = state_125424__$1;
(statearr_125904_133159[(2)] = new cljs.core.Keyword(null,"pass","pass",1574159993));

(statearr_125904_133159[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125426 === (18))){
var _ = (function (){var statearr_125907 = state_125424;
(statearr_125907[(4)] = cljs.core.cons((21),(state_125424[(4)])));

return statearr_125907;
})();
var inst_124908 = cljs.core.deref(self__.buffer);
var inst_124909 = cljs.core.PersistentVector.EMPTY;
var inst_124910 = cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"buffer","buffer",-2037140571,null));
var inst_124911 = cljs.core.PersistentVector.EMPTY;
var inst_124912 = expectations.compare_expr.cljs$core$IFn$_invoke$arity$4(inst_124909,inst_124908,inst_124911,inst_124910);
var inst_124913 = expectations.__GT_failure_message(inst_124912);
var inst_124914 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_124910)," => ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_124911)].join('');
var inst_124915 = clojure.string.replace(inst_124913,/^.*?\n/,inst_124914);
var inst_124916 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_124917 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_124912);
var inst_124918 = [inst_124917,inst_124911,inst_124910,inst_124915];
var inst_124919 = cljs.core.PersistentHashMap.fromArrays(inst_124916,inst_124918);
var inst_124920 = cljs.test.do_report(inst_124919);
var ___$1 = (function (){var statearr_125911 = state_125424;
(statearr_125911[(4)] = cljs.core.rest((state_125424[(4)])));

return statearr_125911;
})();
var state_125424__$1 = state_125424;
var statearr_125913_133161 = state_125424__$1;
(statearr_125913_133161[(2)] = inst_124920);

(statearr_125913_133161[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125426 === (52))){
var _ = (function (){var statearr_125916 = state_125424;
(statearr_125916[(4)] = cljs.core.cons((54),(state_125424[(4)])));

return statearr_125916;
})();
var ___$1 = (function (){var statearr_125917 = state_125424;
(statearr_125917[(4)] = cljs.core.cons((55),(state_125424[(4)])));

return statearr_125917;
})();
var inst_125165 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.buffer,cljs.core.conj,"aar\n");
var state_125424__$1 = (function (){var statearr_125921 = state_125424;
(statearr_125921[(48)] = inst_125165);

return statearr_125921;
})();
var statearr_125922_133163 = state_125424__$1;
(statearr_125922_133163[(2)] = null);

(statearr_125922_133163[(1)] = (56));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125426 === (67))){
var _ = (function (){var statearr_125925 = state_125424;
(statearr_125925[(4)] = cljs.core.rest((state_125424[(4)])));

return statearr_125925;
})();
var inst_125248 = (state_125424[(2)]);
var inst_125249 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_125250 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_125251 = (new cljs.core.PersistentVector(null,1,(5),inst_125249,inst_125250,null));
var inst_125252 = cljs.test.update_current_env_BANG_(inst_125251,cljs.core.rest);
var ___$1 = (function (){var temp__5753__auto__ = (state_125424[(5)]);
if(cljs.core.truth_(temp__5753__auto__)){
var e__38733__auto__ = temp__5753__auto__;
throw e__38733__auto__;
} else {
return null;
}
})();
var state_125424__$1 = (function (){var statearr_125929 = state_125424;
(statearr_125929[(49)] = inst_125252);

return statearr_125929;
})();
var statearr_125931_133164 = state_125424__$1;
(statearr_125931_133164[(2)] = inst_125248);

(statearr_125931_133164[(1)] = (66));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125426 === (71))){
var inst_125263 = (state_125424[(2)]);
var inst_125266 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_125267 = check.core.normalize_error(inst_125263);
var inst_125269 = cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol(null,"get-lines","get-lines",-282739043,null)));
var inst_125270 = new cljs.core.Symbol(null,"=>","=>",-813269641,null);
var inst_125271 = (600000);
var inst_125272 = ["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_125269)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_125270)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_125271)].join('');
var inst_125273 = [new cljs.core.Keyword(null,"error","error",-978969032),(600000),inst_125267,inst_125272];
var inst_125274 = cljs.core.PersistentHashMap.fromArrays(inst_125266,inst_125273);
var inst_125275 = cljs.test.do_report(inst_125274);
var state_125424__$1 = state_125424;
var statearr_125936_133166 = state_125424__$1;
(statearr_125936_133166[(2)] = inst_125275);

(statearr_125936_133166[(1)] = (70));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125426 === (42))){
var inst_125060 = (state_125424[(2)]);
var inst_125062 = cljs.core.list(new cljs.core.Symbol("async","<!","async/<!",-1308982001,null),new cljs.core.Symbol(null,"frags","frags",-341618008,null));
var inst_125063 = "foobarb\n";
var inst_125064 = expectations.compare_expr.cljs$core$IFn$_invoke$arity$4("foobarb\n",inst_125060,inst_125063,inst_125062);
var inst_125066 = expectations.__GT_failure_message(inst_125064);
var inst_125067 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_125062)," => ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_125063)].join('');
var inst_125068 = clojure.string.replace(inst_125066,/^.*?\n/,inst_125067);
var inst_125069 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_125070 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_125064);
var inst_125071 = [inst_125070,inst_125063,inst_125062,inst_125068];
var inst_125072 = cljs.core.PersistentHashMap.fromArrays(inst_125069,inst_125071);
var inst_125073 = cljs.test.do_report(inst_125072);
var _ = (function (){var statearr_125940 = state_125424;
(statearr_125940[(4)] = cljs.core.rest((state_125424[(4)])));

return statearr_125940;
})();
var state_125424__$1 = state_125424;
var statearr_125941_133169 = state_125424__$1;
(statearr_125941_133169[(2)] = inst_125073);

(statearr_125941_133169[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125426 === (80))){
var _ = (function (){var statearr_125946 = state_125424;
(statearr_125946[(4)] = cljs.core.cons((83),(state_125424[(4)])));

return statearr_125946;
})();
var state_125424__$1 = state_125424;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_125424__$1,(84),self__.frags);
} else {
if((state_val_125426 === (37))){
var _ = (function (){var statearr_125949 = state_125424;
(statearr_125949[(4)] = cljs.core.rest((state_125424[(4)])));

return statearr_125949;
})();
var state_125424__$1 = state_125424;
var ex125938 = (state_125424__$1[(2)]);
var statearr_125951_133170 = state_125424__$1;
(statearr_125951_133170[(5)] = ex125938);


throw ex125938;


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125426 === (63))){
var _ = (function (){var statearr_125953 = state_125424;
(statearr_125953[(4)] = cljs.core.rest((state_125424[(4)])));

return statearr_125953;
})();
var state_125424__$1 = state_125424;
var ex125944 = (state_125424__$1[(2)]);
var statearr_125956_133171 = state_125424__$1;
(statearr_125956_133171[(5)] = ex125944);


var statearr_125958_133173 = state_125424__$1;
(statearr_125958_133173[(1)] = (62));

(statearr_125958_133173[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125426 === (8))){
var inst_124809 = (state_125424[(2)]);
var inst_124811 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_124812 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_124813 = ["foo"];
var inst_124814 = (new cljs.core.PersistentVector(null,1,(5),inst_124812,inst_124813,null));
var inst_124815 = check.core.normalize_error(inst_124809);
var inst_124816 = cljs.core.list(new cljs.core.Symbol(null,"get-lines","get-lines",-282739043,null));
var inst_124817 = new cljs.core.Symbol(null,"=>","=>",-813269641,null);
var inst_124818 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["foo"], null);
var inst_124819 = ["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_124816)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_124817)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_124818)].join('');
var inst_124820 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_124814,inst_124815,inst_124819];
var inst_124821 = cljs.core.PersistentHashMap.fromArrays(inst_124811,inst_124820);
var inst_124822 = cljs.test.do_report(inst_124821);
var state_125424__$1 = state_125424;
var statearr_125963_133176 = state_125424__$1;
(statearr_125963_133176[(2)] = inst_124822);

(statearr_125963_133176[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125426 === (49))){
var inst_125144 = (state_125424[(2)]);
var _ = (function (){var statearr_125965 = state_125424;
(statearr_125965[(4)] = cljs.core.rest((state_125424[(4)])));

return statearr_125965;
})();
var state_125424__$1 = state_125424;
var statearr_125966_133179 = state_125424__$1;
(statearr_125966_133179[(2)] = inst_125144);

(statearr_125966_133179[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125426 === (84))){
var inst_125352 = (state_125424[(2)]);
var inst_125353 = cljs.core.list(new cljs.core.Symbol("async","<!","async/<!",-1308982001,null),new cljs.core.Symbol(null,"frags","frags",-341618008,null));
var inst_125354 = "";
var inst_125355 = expectations.compare_expr.cljs$core$IFn$_invoke$arity$4("",inst_125352,inst_125354,inst_125353);
var inst_125356 = expectations.__GT_failure_message(inst_125355);
var inst_125358 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_125353)," => ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_125354)].join('');
var inst_125359 = clojure.string.replace(inst_125356,/^.*?\n/,inst_125358);
var inst_125360 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_125361 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_125355);
var inst_125362 = [inst_125361,inst_125354,inst_125353,inst_125359];
var inst_125363 = cljs.core.PersistentHashMap.fromArrays(inst_125360,inst_125362);
var inst_125364 = cljs.test.do_report(inst_125363);
var _ = (function (){var statearr_125972 = state_125424;
(statearr_125972[(4)] = cljs.core.rest((state_125424[(4)])));

return statearr_125972;
})();
var state_125424__$1 = state_125424;
var statearr_125973_133181 = state_125424__$1;
(statearr_125973_133181[(2)] = inst_125364);

(statearr_125973_133181[(1)] = (81));


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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
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
var repl_tooling$repl_client$connection_test$state_machine__39695__auto__ = null;
var repl_tooling$repl_client$connection_test$state_machine__39695__auto____0 = (function (){
var statearr_125982 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_125982[(0)] = repl_tooling$repl_client$connection_test$state_machine__39695__auto__);

(statearr_125982[(1)] = (1));

return statearr_125982;
});
var repl_tooling$repl_client$connection_test$state_machine__39695__auto____1 = (function (state_125424){
while(true){
var ret_value__39696__auto__ = (function (){try{while(true){
var result__39697__auto__ = switch__39694__auto__(state_125424);
if(cljs.core.keyword_identical_QMARK_(result__39697__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39697__auto__;
}
break;
}
}catch (e125984){var ex__39698__auto__ = e125984;
var statearr_125986_133183 = state_125424;
(statearr_125986_133183[(2)] = ex__39698__auto__);


if(cljs.core.seq((state_125424[(4)]))){
var statearr_125988_133184 = state_125424;
(statearr_125988_133184[(1)] = cljs.core.first((state_125424[(4)])));

} else {
throw ex__39698__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__133185 = state_125424;
state_125424 = G__133185;
continue;
} else {
return ret_value__39696__auto__;
}
break;
}
});
repl_tooling$repl_client$connection_test$state_machine__39695__auto__ = function(state_125424){
switch(arguments.length){
case 0:
return repl_tooling$repl_client$connection_test$state_machine__39695__auto____0.call(this);
case 1:
return repl_tooling$repl_client$connection_test$state_machine__39695__auto____1.call(this,state_125424);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
repl_tooling$repl_client$connection_test$state_machine__39695__auto__.cljs$core$IFn$_invoke$arity$0 = repl_tooling$repl_client$connection_test$state_machine__39695__auto____0;
repl_tooling$repl_client$connection_test$state_machine__39695__auto__.cljs$core$IFn$_invoke$arity$1 = repl_tooling$repl_client$connection_test$state_machine__39695__auto____1;
return repl_tooling$repl_client$connection_test$state_machine__39695__auto__;
})()
})();
var state__39771__auto__ = (function (){var statearr_125992 = f__39770__auto__();
(statearr_125992[(6)] = c__39769__auto__);

return statearr_125992;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39771__auto__);
}));

return c__39769__auto__;
}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}}));

(repl_tooling.repl_client.connection_test.t_repl_tooling$repl_client$connection_test124766.prototype.apply = (function (self__,args124773){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args124773)));
}));

(repl_tooling.repl_client.connection_test.t_repl_tooling$repl_client$connection_test124766.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done__60249__auto__){
var self__ = this;
var ___9200__auto__ = this;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["treating buffer info"], 0));

try{var c__39769__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__39770__auto__ = (function (){var switch__39694__auto__ = (function (state_126702){
var state_val_126707 = (state_126702[(1)]);
if((state_val_126707 === (65))){
var _ = (function (){var statearr_126713 = state_126702;
(statearr_126713[(4)] = cljs.core.cons((67),(state_126702[(4)])));

return statearr_126713;
})();
var ___$1 = (function (){var statearr_126717 = state_126702;
(statearr_126717[(4)] = cljs.core.cons((68),(state_126702[(4)])));

return statearr_126717;
})();
var inst_126535 = cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((600000),"BIG\n");
var inst_126536 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.str,inst_126535);
var inst_126537 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.buffer,cljs.core.conj,inst_126536);
var state_126702__$1 = (function (){var statearr_126719 = state_126702;
(statearr_126719[(7)] = inst_126537);

return statearr_126719;
})();
var statearr_126722_133190 = state_126702__$1;
(statearr_126722_133190[(2)] = null);

(statearr_126722_133190[(1)] = (69));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126707 === (70))){
var inst_126580 = (state_126702[(2)]);
var _ = (function (){var statearr_126726 = state_126702;
(statearr_126726[(4)] = cljs.core.rest((state_126702[(4)])));

return statearr_126726;
})();
var state_126702__$1 = state_126702;
var statearr_126728_133191 = state_126702__$1;
(statearr_126728_133191[(2)] = inst_126580);

(statearr_126728_133191[(1)] = (67));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126707 === (62))){
var inst_126473 = (state_126702[(2)]);
var inst_126474 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_126475 = check.core.normalize_error(inst_126473);
var inst_126476 = cljs.core.list(new cljs.core.Symbol("async","<!","async/<!",-1308982001,null),new cljs.core.Symbol(null,"frags","frags",-341618008,null));
var inst_126477 = new cljs.core.Symbol(null,"=expect=>","=expect=>",-1384225590,null);
var inst_126478 = "aar\n";
var inst_126480 = ["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_126476)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_126477)," ",inst_126478].join('');
var inst_126481 = [new cljs.core.Keyword(null,"error","error",-978969032),"aar\n",inst_126475,inst_126480];
var inst_126482 = cljs.core.PersistentHashMap.fromArrays(inst_126474,inst_126481);
var inst_126484 = cljs.test.do_report(inst_126482);
var state_126702__$1 = state_126702;
var statearr_126733_133194 = state_126702__$1;
(statearr_126733_133194[(2)] = inst_126484);

(statearr_126733_133194[(1)] = (61));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126707 === (74))){
var state_126702__$1 = state_126702;
var statearr_126738_133195 = state_126702__$1;
(statearr_126738_133195[(2)] = new cljs.core.Keyword(null,"fail","fail",1706214930));

(statearr_126738_133195[(1)] = (75));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126707 === (7))){
var inst_126089 = (state_126702[(2)]);
var state_126702__$1 = (function (){var statearr_126740 = state_126702;
(statearr_126740[(8)] = inst_126089);

return statearr_126740;
})();
var statearr_126741_133197 = state_126702__$1;
(statearr_126741_133197[(2)] = null);

(statearr_126741_133197[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126707 === (59))){
var _ = (function (){var statearr_126747 = state_126702;
(statearr_126747[(4)] = cljs.core.rest((state_126702[(4)])));

return statearr_126747;
})();
var state_126702__$1 = state_126702;
var ex126737 = (state_126702__$1[(2)]);
var statearr_126748_133198 = state_126702__$1;
(statearr_126748_133198[(5)] = ex126737);


var statearr_126749_133199 = state_126702__$1;
(statearr_126749_133199[(1)] = (58));

(statearr_126749_133199[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126707 === (86))){
var inst_126685 = (state_126702[(2)]);
var _ = (function (){var statearr_126752 = state_126702;
(statearr_126752[(4)] = cljs.core.rest((state_126702[(4)])));

return statearr_126752;
})();
var state_126702__$1 = state_126702;
var statearr_126755_133201 = state_126702__$1;
(statearr_126755_133201[(2)] = inst_126685);

(statearr_126755_133201[(1)] = (78));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126707 === (20))){
var inst_126125 = (state_126702[(2)]);
var inst_126126 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_126127 = cljs.core.PersistentVector.EMPTY;
var inst_126128 = check.core.normalize_error(inst_126125);
var inst_126130 = cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"buffer","buffer",-2037140571,null));
var inst_126131 = new cljs.core.Symbol(null,"=expect=>","=expect=>",-1384225590,null);
var inst_126132 = cljs.core.PersistentVector.EMPTY;
var inst_126133 = ["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_126130)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_126131)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_126132)].join('');
var inst_126134 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_126127,inst_126128,inst_126133];
var inst_126135 = cljs.core.PersistentHashMap.fromArrays(inst_126126,inst_126134);
var inst_126136 = cljs.test.do_report(inst_126135);
var state_126702__$1 = state_126702;
var statearr_126759_133204 = state_126702__$1;
(statearr_126759_133204[(2)] = inst_126136);

(statearr_126759_133204[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126707 === (72))){
var _ = (function (){var statearr_126761 = state_126702;
(statearr_126761[(4)] = cljs.core.rest((state_126702[(4)])));

return statearr_126761;
})();
var state_126702__$1 = state_126702;
var ex126751 = (state_126702__$1[(2)]);
var statearr_126765_133207 = state_126702__$1;
(statearr_126765_133207[(5)] = ex126751);


var statearr_126766_133208 = state_126702__$1;
(statearr_126766_133208[(1)] = (71));

(statearr_126766_133208[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126707 === (58))){
var inst_126428 = (state_126702[(2)]);
var inst_126430 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_126431 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_126432 = ["bazaar"];
var inst_126433 = (new cljs.core.PersistentVector(null,1,(5),inst_126431,inst_126432,null));
var inst_126434 = check.core.normalize_error(inst_126428);
var inst_126436 = cljs.core.list(new cljs.core.Symbol(null,"get-lines","get-lines",-282739043,null));
var inst_126437 = new cljs.core.Symbol(null,"=expect=>","=expect=>",-1384225590,null);
var inst_126438 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["bazaar"], null);
var inst_126439 = ["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_126436)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_126437)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_126438)].join('');
var inst_126440 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_126433,inst_126434,inst_126439];
var inst_126441 = cljs.core.PersistentHashMap.fromArrays(inst_126430,inst_126440);
var inst_126442 = cljs.test.do_report(inst_126441);
var state_126702__$1 = state_126702;
var statearr_126777_133211 = state_126702__$1;
(statearr_126777_133211[(2)] = inst_126442);

(statearr_126777_133211[(1)] = (57));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126707 === (60))){
var _ = (function (){var statearr_126781 = state_126702;
(statearr_126781[(4)] = cljs.core.cons((63),(state_126702[(4)])));

return statearr_126781;
})();
var state_126702__$1 = state_126702;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_126702__$1,(64),self__.frags);
} else {
if((state_val_126707 === (27))){
var inst_126228 = (state_126702[(2)]);
var state_126702__$1 = (function (){var statearr_126786 = state_126702;
(statearr_126786[(9)] = inst_126228);

return statearr_126786;
})();
var statearr_126787_133213 = state_126702__$1;
(statearr_126787_133213[(2)] = null);

(statearr_126787_133213[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126707 === (1))){
var inst_126004 = (state_126702[(10)]);
var inst_126003 = (function (){return (function (){
cljs.core.async.close_BANG_(self__.frags);

return (done__60249__auto__.cljs$core$IFn$_invoke$arity$0 ? done__60249__auto__.cljs$core$IFn$_invoke$arity$0() : done__60249__auto__.call(null));
});
})();
var inst_126004__$1 = (new cljs.core.Delay(inst_126003,null));
var inst_126007 = (function (){var mark_as_done__60250__auto__ = inst_126004__$1;
return (function (){
if(cljs.core.realized_QMARK_(mark_as_done__60250__auto__)){
return null;
} else {
try{var value__9156__auto___133214 = (function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Async test error - not finalized",cljs.core.PersistentArrayMap.EMPTY)})();
if(cljs.core.truth_(value__9156__auto___133214)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"pass","pass",1574159993),null,null,cljs.core.list(new cljs.core.Symbol(null,"throw","throw",595905694,null),cljs.core.list(new cljs.core.Symbol("clojure.core","ex-info","clojure.core/ex-info",-504237117,null),"Async test error - not finalized",cljs.core.PersistentArrayMap.EMPTY)),null,value__9156__auto___133214,null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"fail","fail",1706214930),null,null,cljs.core.list(new cljs.core.Symbol(null,"throw","throw",595905694,null),cljs.core.list(new cljs.core.Symbol("clojure.core","ex-info","clojure.core/ex-info",-504237117,null),"Async test error - not finalized",cljs.core.PersistentArrayMap.EMPTY)),null,value__9156__auto___133214,null]));
}

}catch (e126791){var t__9189__auto___133217 = e126791;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol(null,"throw","throw",595905694,null),cljs.core.list(new cljs.core.Symbol("clojure.core","ex-info","clojure.core/ex-info",-504237117,null),"Async test error - not finalized",cljs.core.PersistentArrayMap.EMPTY)),null,t__9189__auto___133217,null]));
}
return cljs.core.deref(mark_as_done__60250__auto__);
}
});
})();
var inst_126008 = setTimeout(inst_126007,(3000));
var inst_126010 = (function (){var mark_as_done__60250__auto__ = inst_126004__$1;
return (function (p1__121460_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.lines,cljs.core.conj,p1__121460_SHARP_);
});
})();
var inst_126011 = (function (){var mark_as_done__60250__auto__ = inst_126004__$1;
return (function (p1__121462_SHARP_){
if(cljs.core.truth_(cljs.core.re_find(/BIG/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__121462_SHARP_)))){
return null;
} else {
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.frags,cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__121462_SHARP_));
}
});
})();
var inst_126012 = repl_tooling.repl_client.connection.treat_buffer_BANG_(self__.buffer,inst_126010,inst_126011);
var inst_126013 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_126014 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_126015 = (new cljs.core.PersistentVector(null,1,(5),inst_126013,inst_126014,null));
var inst_126016 = cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(inst_126015,cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["emits line"], 0));
var state_126702__$1 = (function (){var statearr_126798 = state_126702;
(statearr_126798[(11)] = inst_126008);

(statearr_126798[(10)] = inst_126004__$1);

(statearr_126798[(12)] = inst_126012);

(statearr_126798[(13)] = inst_126016);

return statearr_126798;
})();
var statearr_126801_133219 = state_126702__$1;
(statearr_126801_133219[(2)] = null);

(statearr_126801_133219[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126707 === (69))){
var _ = (function (){var statearr_126803 = state_126702;
(statearr_126803[(4)] = cljs.core.cons((72),(state_126702[(4)])));

return statearr_126803;
})();
var inst_126553 = (self__.get_lines.cljs$core$IFn$_invoke$arity$0 ? self__.get_lines.cljs$core$IFn$_invoke$arity$0() : self__.get_lines.call(null));
var inst_126554 = cljs.core.count(inst_126553);
var inst_126555 = cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol(null,"get-lines","get-lines",-282739043,null)));
var inst_126556 = (600000);
var inst_126557 = matcher_combinators.core.match((600000),inst_126554);
var inst_126559 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_126554], 0));
var inst_126561 = new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(inst_126557);
var inst_126562 = matcher_combinators.printer.as_string(inst_126561);
var inst_126563 = [inst_126559,"\n\nMismatch:\n",inst_126562].join('');
var inst_126564 = new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(inst_126557);
var inst_126565 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),inst_126564);
var inst_126569 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363)];
var state_126702__$1 = (function (){var statearr_126806 = state_126702;
(statearr_126806[(14)] = inst_126556);

(statearr_126806[(15)] = inst_126569);

(statearr_126806[(16)] = inst_126563);

(statearr_126806[(17)] = inst_126555);

return statearr_126806;
})();
if(inst_126565){
var statearr_126808_133220 = state_126702__$1;
(statearr_126808_133220[(1)] = (73));

} else {
var statearr_126809_133221 = state_126702__$1;
(statearr_126809_133221[(1)] = (74));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126707 === (24))){
var _ = (function (){var statearr_126813 = state_126702;
(statearr_126813[(4)] = cljs.core.rest((state_126702[(4)])));

return statearr_126813;
})();
var inst_126170 = (state_126702[(2)]);
var inst_126171 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_126172 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_126173 = (new cljs.core.PersistentVector(null,1,(5),inst_126171,inst_126172,null));
var inst_126174 = cljs.test.update_current_env_BANG_(inst_126173,cljs.core.rest);
var ___$1 = (function (){var temp__5753__auto__ = (state_126702[(5)]);
if(cljs.core.truth_(temp__5753__auto__)){
var e__38733__auto__ = temp__5753__auto__;
throw e__38733__auto__;
} else {
return null;
}
})();
var state_126702__$1 = (function (){var statearr_126815 = state_126702;
(statearr_126815[(18)] = inst_126174);

return statearr_126815;
})();
var statearr_126816_133222 = state_126702__$1;
(statearr_126816_133222[(2)] = inst_126170);

(statearr_126816_133222[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126707 === (55))){
var _ = (function (){var statearr_126819 = state_126702;
(statearr_126819[(4)] = cljs.core.rest((state_126702[(4)])));

return statearr_126819;
})();
var state_126702__$1 = state_126702;
var ex126802 = (state_126702__$1[(2)]);
var statearr_126820_133223 = state_126702__$1;
(statearr_126820_133223[(5)] = ex126802);


throw ex126802;


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126707 === (85))){
var _ = (function (){var statearr_126822 = state_126702;
(statearr_126822[(4)] = cljs.core.cons((88),(state_126702[(4)])));

return statearr_126822;
})();
var inst_126666 = (self__.get_lines.cljs$core$IFn$_invoke$arity$0 ? self__.get_lines.cljs$core$IFn$_invoke$arity$0() : self__.get_lines.call(null));
var inst_126667 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_126668 = [null];
var inst_126669 = (new cljs.core.PersistentVector(null,1,(5),inst_126667,inst_126668,null));
var inst_126670 = cljs.core.list(new cljs.core.Symbol(null,"get-lines","get-lines",-282739043,null));
var inst_126672 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null);
var inst_126673 = expectations.compare_expr.cljs$core$IFn$_invoke$arity$4(inst_126669,inst_126666,inst_126672,inst_126670);
var inst_126674 = expectations.__GT_failure_message(inst_126673);
var inst_126676 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_126670)," => ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_126672)].join('');
var inst_126677 = clojure.string.replace(inst_126674,/^.*?\n/,inst_126676);
var inst_126678 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_126679 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_126673);
var inst_126680 = [inst_126679,inst_126672,inst_126670,inst_126677];
var inst_126681 = cljs.core.PersistentHashMap.fromArrays(inst_126678,inst_126680);
var inst_126682 = cljs.test.do_report(inst_126681);
var ___$1 = (function (){var statearr_126823 = state_126702;
(statearr_126823[(4)] = cljs.core.rest((state_126702[(4)])));

return statearr_126823;
})();
var state_126702__$1 = state_126702;
var statearr_126825_133224 = state_126702__$1;
(statearr_126825_133224[(2)] = inst_126682);

(statearr_126825_133224[(1)] = (86));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126707 === (39))){
var inst_126333 = (state_126702[(2)]);
var state_126702__$1 = (function (){var statearr_126829 = state_126702;
(statearr_126829[(19)] = inst_126333);

return statearr_126829;
})();
var statearr_126832_133226 = state_126702__$1;
(statearr_126832_133226[(2)] = null);

(statearr_126832_133226[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126707 === (88))){
var _ = (function (){var statearr_126837 = state_126702;
(statearr_126837[(4)] = cljs.core.rest((state_126702[(4)])));

return statearr_126837;
})();
var state_126702__$1 = state_126702;
var ex126821 = (state_126702__$1[(2)]);
var statearr_126840_133227 = state_126702__$1;
(statearr_126840_133227[(5)] = ex126821);


var statearr_126843_133228 = state_126702__$1;
(statearr_126843_133228[(1)] = (87));

(statearr_126843_133228[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126707 === (46))){
var _ = (function (){var statearr_126844 = state_126702;
(statearr_126844[(4)] = cljs.core.rest((state_126702[(4)])));

return statearr_126844;
})();
var state_126702__$1 = state_126702;
var ex126826 = (state_126702__$1[(2)]);
var statearr_126845_133230 = state_126702__$1;
(statearr_126845_133230[(5)] = ex126826);


var statearr_126846_133231 = state_126702__$1;
(statearr_126846_133231[(1)] = (45));

(statearr_126846_133231[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126707 === (4))){
var _ = (function (){var statearr_126851 = state_126702;
(statearr_126851[(4)] = cljs.core.rest((state_126702[(4)])));

return statearr_126851;
})();
var inst_126019 = (state_126702[(2)]);
var inst_126021 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_126022 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_126023 = (new cljs.core.PersistentVector(null,1,(5),inst_126021,inst_126022,null));
var inst_126024 = cljs.test.update_current_env_BANG_(inst_126023,cljs.core.rest);
var ___$1 = (function (){var temp__5753__auto__ = (state_126702[(5)]);
if(cljs.core.truth_(temp__5753__auto__)){
var e__38733__auto__ = temp__5753__auto__;
throw e__38733__auto__;
} else {
return null;
}
})();
var state_126702__$1 = (function (){var statearr_126857 = state_126702;
(statearr_126857[(20)] = inst_126024);

return statearr_126857;
})();
var statearr_126858_133232 = state_126702__$1;
(statearr_126858_133232[(2)] = inst_126019);

(statearr_126858_133232[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126707 === (77))){
var inst_126004 = (state_126702[(10)]);
var inst_126688 = (state_126702[(2)]);
var inst_126689 = cljs.core.deref(inst_126004);
var state_126702__$1 = (function (){var statearr_126863 = state_126702;
(statearr_126863[(21)] = inst_126688);

return statearr_126863;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_126702__$1,inst_126689);
} else {
if((state_val_126707 === (54))){
var _ = (function (){var statearr_126866 = state_126702;
(statearr_126866[(4)] = cljs.core.rest((state_126702[(4)])));

return statearr_126866;
})();
var inst_126414 = (state_126702[(2)]);
var inst_126415 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_126416 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_126417 = (new cljs.core.PersistentVector(null,1,(5),inst_126415,inst_126416,null));
var inst_126418 = cljs.test.update_current_env_BANG_(inst_126417,cljs.core.rest);
var ___$1 = (function (){var temp__5753__auto__ = (state_126702[(5)]);
if(cljs.core.truth_(temp__5753__auto__)){
var e__38733__auto__ = temp__5753__auto__;
throw e__38733__auto__;
} else {
return null;
}
})();
var state_126702__$1 = (function (){var statearr_126870 = state_126702;
(statearr_126870[(22)] = inst_126418);

return statearr_126870;
})();
var statearr_126872_133235 = state_126702__$1;
(statearr_126872_133235[(2)] = inst_126414);

(statearr_126872_133235[(1)] = (53));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126707 === (15))){
var inst_126091 = (state_126702[(2)]);
var inst_126092 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_126094 = check.core.normalize_error(inst_126091);
var inst_126096 = cljs.core.list(new cljs.core.Symbol("async","<!","async/<!",-1308982001,null),new cljs.core.Symbol(null,"frags","frags",-341618008,null));
var inst_126097 = new cljs.core.Symbol(null,"=expect=>","=expect=>",-1384225590,null);
var inst_126098 = "foo\n";
var inst_126099 = ["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_126096)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_126097)," ",inst_126098].join('');
var inst_126100 = [new cljs.core.Keyword(null,"error","error",-978969032),"foo\n",inst_126094,inst_126099];
var inst_126101 = cljs.core.PersistentHashMap.fromArrays(inst_126092,inst_126100);
var inst_126102 = cljs.test.do_report(inst_126101);
var state_126702__$1 = state_126702;
var statearr_126878_133238 = state_126702__$1;
(statearr_126878_133238[(2)] = inst_126102);

(statearr_126878_133238[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126707 === (48))){
var _ = (function (){var statearr_126881 = state_126702;
(statearr_126881[(4)] = cljs.core.cons((51),(state_126702[(4)])));

return statearr_126881;
})();
var inst_126388 = cljs.core.deref(self__.buffer);
var inst_126389 = cljs.core.PersistentVector.EMPTY;
var inst_126390 = cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"buffer","buffer",-2037140571,null));
var inst_126391 = cljs.core.PersistentVector.EMPTY;
var inst_126392 = expectations.compare_expr.cljs$core$IFn$_invoke$arity$4(inst_126389,inst_126388,inst_126391,inst_126390);
var inst_126393 = expectations.__GT_failure_message(inst_126392);
var inst_126394 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_126390)," => ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_126391)].join('');
var inst_126395 = clojure.string.replace(inst_126393,/^.*?\n/,inst_126394);
var inst_126397 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_126399 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_126392);
var inst_126400 = [inst_126399,inst_126391,inst_126390,inst_126395];
var inst_126401 = cljs.core.PersistentHashMap.fromArrays(inst_126397,inst_126400);
var inst_126402 = cljs.test.do_report(inst_126401);
var ___$1 = (function (){var statearr_126886 = state_126702;
(statearr_126886[(4)] = cljs.core.rest((state_126702[(4)])));

return statearr_126886;
})();
var state_126702__$1 = state_126702;
var statearr_126890_133242 = state_126702__$1;
(statearr_126890_133242[(2)] = inst_126402);

(statearr_126890_133242[(1)] = (49));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126707 === (50))){
var inst_126368 = (state_126702[(2)]);
var inst_126369 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_126372 = cljs.core.PersistentVector.EMPTY;
var inst_126373 = check.core.normalize_error(inst_126368);
var inst_126375 = cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"buffer","buffer",-2037140571,null));
var inst_126376 = new cljs.core.Symbol(null,"=expect=>","=expect=>",-1384225590,null);
var inst_126377 = cljs.core.PersistentVector.EMPTY;
var inst_126378 = ["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_126375)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_126376)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_126377)].join('');
var inst_126379 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_126372,inst_126373,inst_126378];
var inst_126380 = cljs.core.PersistentHashMap.fromArrays(inst_126369,inst_126379);
var inst_126381 = cljs.test.do_report(inst_126380);
var state_126702__$1 = state_126702;
var statearr_126898_133244 = state_126702__$1;
(statearr_126898_133244[(2)] = inst_126381);

(statearr_126898_133244[(1)] = (49));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126707 === (75))){
var inst_126556 = (state_126702[(14)]);
var inst_126569 = (state_126702[(15)]);
var inst_126563 = (state_126702[(16)]);
var inst_126573 = (state_126702[(2)]);
var inst_126574 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(inst_126563);
var inst_126575 = [inst_126573,inst_126556,inst_126574];
var inst_126576 = cljs.core.PersistentHashMap.fromArrays(inst_126569,inst_126575);
var inst_126577 = cljs.test.do_report(inst_126576);
var _ = (function (){var statearr_126903 = state_126702;
(statearr_126903[(4)] = cljs.core.rest((state_126702[(4)])));

return statearr_126903;
})();
var state_126702__$1 = state_126702;
var statearr_126905_133248 = state_126702__$1;
(statearr_126905_133248[(2)] = inst_126577);

(statearr_126905_133248[(1)] = (70));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126707 === (21))){
var _ = (function (){var statearr_126907 = state_126702;
(statearr_126907[(4)] = cljs.core.rest((state_126702[(4)])));

return statearr_126907;
})();
var state_126702__$1 = state_126702;
var ex126894 = (state_126702__$1[(2)]);
var statearr_126911_133250 = state_126702__$1;
(statearr_126911_133250[(5)] = ex126894);


var statearr_126913_133252 = state_126702__$1;
(statearr_126913_133252[(1)] = (20));

(statearr_126913_133252[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126707 === (31))){
var inst_126276 = (state_126702[(2)]);
var _ = (function (){var statearr_126920 = state_126702;
(statearr_126920[(4)] = cljs.core.rest((state_126702[(4)])));

return statearr_126920;
})();
var state_126702__$1 = state_126702;
var statearr_126923_133254 = state_126702__$1;
(statearr_126923_133254[(2)] = inst_126276);

(statearr_126923_133254[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126707 === (32))){
var inst_126230 = (state_126702[(2)]);
var inst_126232 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_126233 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_126234 = ["baz"];
var inst_126235 = (new cljs.core.PersistentVector(null,1,(5),inst_126233,inst_126234,null));
var inst_126236 = check.core.normalize_error(inst_126230);
var inst_126240 = cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"buffer","buffer",-2037140571,null));
var inst_126241 = new cljs.core.Symbol(null,"=expect=>","=expect=>",-1384225590,null);
var inst_126242 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["baz"], null);
var inst_126243 = ["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_126240)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_126241)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_126242)].join('');
var inst_126244 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_126235,inst_126236,inst_126243];
var inst_126245 = cljs.core.PersistentHashMap.fromArrays(inst_126232,inst_126244);
var inst_126246 = cljs.test.do_report(inst_126245);
var state_126702__$1 = state_126702;
var statearr_126929_133256 = state_126702__$1;
(statearr_126929_133256[(2)] = inst_126246);

(statearr_126929_133256[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126707 === (40))){
var inst_126301 = (state_126702[(2)]);
var inst_126302 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_126303 = check.core.normalize_error(inst_126301);
var inst_126304 = cljs.core.list(new cljs.core.Symbol("async","<!","async/<!",-1308982001,null),new cljs.core.Symbol(null,"frags","frags",-341618008,null));
var inst_126305 = new cljs.core.Symbol(null,"=expect=>","=expect=>",-1384225590,null);
var inst_126306 = "foobarb\n";
var inst_126307 = ["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_126304)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_126305)," ",inst_126306].join('');
var inst_126308 = [new cljs.core.Keyword(null,"error","error",-978969032),"foobarb\n",inst_126303,inst_126307];
var inst_126309 = cljs.core.PersistentHashMap.fromArrays(inst_126302,inst_126308);
var inst_126310 = cljs.test.do_report(inst_126309);
var state_126702__$1 = state_126702;
var statearr_126935_133257 = state_126702__$1;
(statearr_126935_133257[(2)] = inst_126310);

(statearr_126935_133257[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126707 === (56))){
var _ = (function (){var statearr_126937 = state_126702;
(statearr_126937[(4)] = cljs.core.cons((59),(state_126702[(4)])));

return statearr_126937;
})();
var inst_126450 = (self__.get_lines.cljs$core$IFn$_invoke$arity$0 ? self__.get_lines.cljs$core$IFn$_invoke$arity$0() : self__.get_lines.call(null));
var inst_126451 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_126454 = ["bazaar"];
var inst_126455 = (new cljs.core.PersistentVector(null,1,(5),inst_126451,inst_126454,null));
var inst_126456 = cljs.core.list(new cljs.core.Symbol(null,"get-lines","get-lines",-282739043,null));
var inst_126457 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["bazaar"], null);
var inst_126458 = expectations.compare_expr.cljs$core$IFn$_invoke$arity$4(inst_126455,inst_126450,inst_126457,inst_126456);
var inst_126459 = expectations.__GT_failure_message(inst_126458);
var inst_126461 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_126456)," => ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_126457)].join('');
var inst_126462 = clojure.string.replace(inst_126459,/^.*?\n/,inst_126461);
var inst_126463 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_126464 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_126458);
var inst_126465 = [inst_126464,inst_126457,inst_126456,inst_126462];
var inst_126466 = cljs.core.PersistentHashMap.fromArrays(inst_126463,inst_126465);
var inst_126467 = cljs.test.do_report(inst_126466);
var ___$1 = (function (){var statearr_126942 = state_126702;
(statearr_126942[(4)] = cljs.core.rest((state_126702[(4)])));

return statearr_126942;
})();
var state_126702__$1 = state_126702;
var statearr_126944_133259 = state_126702__$1;
(statearr_126944_133259[(2)] = inst_126467);

(statearr_126944_133259[(1)] = (57));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126707 === (33))){
var _ = (function (){var statearr_126950 = state_126702;
(statearr_126950[(4)] = cljs.core.rest((state_126702[(4)])));

return statearr_126950;
})();
var state_126702__$1 = state_126702;
var ex126931 = (state_126702__$1[(2)]);
var statearr_126955_133260 = state_126702__$1;
(statearr_126955_133260[(5)] = ex126931);


var statearr_126956_133261 = state_126702__$1;
(statearr_126956_133261[(1)] = (32));

(statearr_126956_133261[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126707 === (13))){
var _ = (function (){var statearr_126959 = state_126702;
(statearr_126959[(4)] = cljs.core.cons((16),(state_126702[(4)])));

return statearr_126959;
})();
var state_126702__$1 = state_126702;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_126702__$1,(17),self__.frags);
} else {
if((state_val_126707 === (22))){
var _ = (function (){var statearr_126966 = state_126702;
(statearr_126966[(4)] = cljs.core.cons((24),(state_126702[(4)])));

return statearr_126966;
})();
var ___$1 = (function (){var statearr_126968 = state_126702;
(statearr_126968[(4)] = cljs.core.cons((25),(state_126702[(4)])));

return statearr_126968;
})();
var inst_126182 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.buffer,cljs.core.conj,"foo");
var inst_126183 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.buffer,cljs.core.conj,"bar");
var inst_126185 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.buffer,cljs.core.conj,"b\nbaz");
var state_126702__$1 = (function (){var statearr_126970 = state_126702;
(statearr_126970[(23)] = inst_126183);

(statearr_126970[(24)] = inst_126185);

(statearr_126970[(25)] = inst_126182);

return statearr_126970;
})();
var statearr_126972_133264 = state_126702__$1;
(statearr_126972_133264[(2)] = null);

(statearr_126972_133264[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126707 === (36))){
var _ = (function (){var statearr_126973 = state_126702;
(statearr_126973[(4)] = cljs.core.rest((state_126702[(4)])));

return statearr_126973;
})();
var inst_126286 = (state_126702[(2)]);
var inst_126287 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_126288 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_126289 = (new cljs.core.PersistentVector(null,1,(5),inst_126287,inst_126288,null));
var inst_126291 = cljs.test.update_current_env_BANG_(inst_126289,cljs.core.rest);
var ___$1 = (function (){var temp__5753__auto__ = (state_126702[(5)]);
if(cljs.core.truth_(temp__5753__auto__)){
var e__38733__auto__ = temp__5753__auto__;
throw e__38733__auto__;
} else {
return null;
}
})();
var state_126702__$1 = (function (){var statearr_126979 = state_126702;
(statearr_126979[(26)] = inst_126291);

return statearr_126979;
})();
var statearr_126981_133268 = state_126702__$1;
(statearr_126981_133268[(2)] = inst_126286);

(statearr_126981_133268[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126707 === (41))){
var _ = (function (){var statearr_126985 = state_126702;
(statearr_126985[(4)] = cljs.core.rest((state_126702[(4)])));

return statearr_126985;
})();
var state_126702__$1 = state_126702;
var ex126962 = (state_126702__$1[(2)]);
var statearr_126987_133271 = state_126702__$1;
(statearr_126987_133271[(5)] = ex126962);


var statearr_126988_133272 = state_126702__$1;
(statearr_126988_133272[(1)] = (40));

(statearr_126988_133272[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126707 === (43))){
var _ = (function (){var statearr_126992 = state_126702;
(statearr_126992[(4)] = cljs.core.cons((46),(state_126702[(4)])));

return statearr_126992;
})();
var state_126702__$1 = state_126702;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_126702__$1,(47),self__.frags);
} else {
if((state_val_126707 === (61))){
var inst_126509 = (state_126702[(2)]);
var _ = (function (){var statearr_126995 = state_126702;
(statearr_126995[(4)] = cljs.core.rest((state_126702[(4)])));

return statearr_126995;
})();
var state_126702__$1 = state_126702;
var statearr_126997_133274 = state_126702__$1;
(statearr_126997_133274[(2)] = inst_126509);

(statearr_126997_133274[(1)] = (54));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126707 === (29))){
var _ = (function (){var statearr_126998 = state_126702;
(statearr_126998[(4)] = cljs.core.rest((state_126702[(4)])));

return statearr_126998;
})();
var state_126702__$1 = state_126702;
var ex126990 = (state_126702__$1[(2)]);
var statearr_127001_133275 = state_126702__$1;
(statearr_127001_133275[(5)] = ex126990);


var statearr_127003_133276 = state_126702__$1;
(statearr_127003_133276[(1)] = (28));

(statearr_127003_133276[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126707 === (44))){
var inst_126367 = (state_126702[(2)]);
var state_126702__$1 = (function (){var statearr_127006 = state_126702;
(statearr_127006[(27)] = inst_126367);

return statearr_127006;
})();
var statearr_127008_133277 = state_126702__$1;
(statearr_127008_133277[(2)] = null);

(statearr_127008_133277[(1)] = (48));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126707 === (6))){
var _ = (function (){var statearr_127013 = state_126702;
(statearr_127013[(4)] = cljs.core.cons((9),(state_126702[(4)])));

return statearr_127013;
})();
var inst_126057 = (self__.get_lines.cljs$core$IFn$_invoke$arity$0 ? self__.get_lines.cljs$core$IFn$_invoke$arity$0() : self__.get_lines.call(null));
var inst_126059 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_126060 = ["foo"];
var inst_126061 = (new cljs.core.PersistentVector(null,1,(5),inst_126059,inst_126060,null));
var inst_126062 = cljs.core.list(new cljs.core.Symbol(null,"get-lines","get-lines",-282739043,null));
var inst_126063 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["foo"], null);
var inst_126064 = matcher_combinators.core.match(inst_126061,inst_126057);
var inst_126067 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_126057], 0));
var inst_126068 = new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(inst_126064);
var inst_126069 = matcher_combinators.printer.as_string(inst_126068);
var inst_126070 = [inst_126067,"\n\nMismatch:\n",inst_126069].join('');
var inst_126071 = new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(inst_126064);
var inst_126072 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),inst_126071);
var inst_126074 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363)];
var state_126702__$1 = (function (){var statearr_127017 = state_126702;
(statearr_127017[(28)] = inst_126074);

(statearr_127017[(29)] = inst_126070);

(statearr_127017[(30)] = inst_126062);

(statearr_127017[(31)] = inst_126063);

return statearr_127017;
})();
if(inst_126072){
var statearr_127021_133279 = state_126702__$1;
(statearr_127021_133279[(1)] = (10));

} else {
var statearr_127022_133280 = state_126702__$1;
(statearr_127022_133280[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126707 === (28))){
var inst_126187 = (state_126702[(2)]);
var inst_126188 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_126189 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_126190 = ["foobarb"];
var inst_126191 = (new cljs.core.PersistentVector(null,1,(5),inst_126189,inst_126190,null));
var inst_126192 = check.core.normalize_error(inst_126187);
var inst_126194 = cljs.core.list(new cljs.core.Symbol(null,"get-lines","get-lines",-282739043,null));
var inst_126195 = new cljs.core.Symbol(null,"=expect=>","=expect=>",-1384225590,null);
var inst_126196 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["foobarb"], null);
var inst_126197 = ["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_126194)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_126195)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_126196)].join('');
var inst_126198 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_126191,inst_126192,inst_126197];
var inst_126199 = cljs.core.PersistentHashMap.fromArrays(inst_126188,inst_126198);
var inst_126200 = cljs.test.do_report(inst_126199);
var state_126702__$1 = state_126702;
var statearr_127032_133281 = state_126702__$1;
(statearr_127032_133281[(2)] = inst_126200);

(statearr_127032_133281[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126707 === (64))){
var inst_126493 = (state_126702[(2)]);
var inst_126494 = cljs.core.list(new cljs.core.Symbol("async","<!","async/<!",-1308982001,null),new cljs.core.Symbol(null,"frags","frags",-341618008,null));
var inst_126495 = "aar\n";
var inst_126496 = expectations.compare_expr.cljs$core$IFn$_invoke$arity$4("aar\n",inst_126493,inst_126495,inst_126494);
var inst_126497 = expectations.__GT_failure_message(inst_126496);
var inst_126498 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_126494)," => ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_126495)].join('');
var inst_126499 = clojure.string.replace(inst_126497,/^.*?\n/,inst_126498);
var inst_126500 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_126501 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_126496);
var inst_126502 = [inst_126501,inst_126495,inst_126494,inst_126499];
var inst_126503 = cljs.core.PersistentHashMap.fromArrays(inst_126500,inst_126502);
var inst_126505 = cljs.test.do_report(inst_126503);
var _ = (function (){var statearr_127040 = state_126702;
(statearr_127040[(4)] = cljs.core.rest((state_126702[(4)])));

return statearr_127040;
})();
var state_126702__$1 = state_126702;
var statearr_127042_133284 = state_126702__$1;
(statearr_127042_133284[(2)] = inst_126505);

(statearr_127042_133284[(1)] = (61));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126707 === (51))){
var _ = (function (){var statearr_127045 = state_126702;
(statearr_127045[(4)] = cljs.core.rest((state_126702[(4)])));

return statearr_127045;
})();
var state_126702__$1 = state_126702;
var ex127025 = (state_126702__$1[(2)]);
var statearr_127049_133286 = state_126702__$1;
(statearr_127049_133286[(5)] = ex127025);


var statearr_127052_133287 = state_126702__$1;
(statearr_127052_133287[(1)] = (50));

(statearr_127052_133287[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126707 === (25))){
var _ = (function (){var statearr_127057 = state_126702;
(statearr_127057[(4)] = cljs.core.rest((state_126702[(4)])));

return statearr_127057;
})();
var state_126702__$1 = state_126702;
var ex127036 = (state_126702__$1[(2)]);
var statearr_127060_133288 = state_126702__$1;
(statearr_127060_133288[(5)] = ex127036);


throw ex127036;


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126707 === (34))){
var _ = (function (){var statearr_127066 = state_126702;
(statearr_127066[(4)] = cljs.core.cons((36),(state_126702[(4)])));

return statearr_127066;
})();
var ___$1 = (function (){var statearr_127070 = state_126702;
(statearr_127070[(4)] = cljs.core.cons((37),(state_126702[(4)])));

return statearr_127070;
})();
var state_126702__$1 = state_126702;
var statearr_127072_133289 = state_126702__$1;
(statearr_127072_133289[(2)] = null);

(statearr_127072_133289[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126707 === (17))){
var inst_126110 = (state_126702[(2)]);
var inst_126111 = cljs.core.list(new cljs.core.Symbol("async","<!","async/<!",-1308982001,null),new cljs.core.Symbol(null,"frags","frags",-341618008,null));
var inst_126112 = "foo\n";
var inst_126113 = expectations.compare_expr.cljs$core$IFn$_invoke$arity$4("foo\n",inst_126110,inst_126112,inst_126111);
var inst_126114 = expectations.__GT_failure_message(inst_126113);
var inst_126115 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_126111)," => ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_126112)].join('');
var inst_126116 = clojure.string.replace(inst_126114,/^.*?\n/,inst_126115);
var inst_126117 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_126118 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_126113);
var inst_126119 = [inst_126118,inst_126112,inst_126111,inst_126116];
var inst_126120 = cljs.core.PersistentHashMap.fromArrays(inst_126117,inst_126119);
var inst_126121 = cljs.test.do_report(inst_126120);
var _ = (function (){var statearr_127079 = state_126702;
(statearr_127079[(4)] = cljs.core.rest((state_126702[(4)])));

return statearr_127079;
})();
var state_126702__$1 = state_126702;
var statearr_127082_133292 = state_126702__$1;
(statearr_127082_133292[(2)] = inst_126121);

(statearr_127082_133292[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126707 === (3))){
var inst_126164 = (state_126702[(2)]);
var inst_126165 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_126166 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_126167 = (new cljs.core.PersistentVector(null,1,(5),inst_126165,inst_126166,null));
var inst_126168 = cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(inst_126167,cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["emits complex line"], 0));
var state_126702__$1 = (function (){var statearr_127087 = state_126702;
(statearr_127087[(32)] = inst_126164);

(statearr_127087[(33)] = inst_126168);

return statearr_127087;
})();
var statearr_127088_133295 = state_126702__$1;
(statearr_127088_133295[(2)] = null);

(statearr_127088_133295[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126707 === (12))){
var inst_126074 = (state_126702[(28)]);
var inst_126070 = (state_126702[(29)]);
var inst_126063 = (state_126702[(31)]);
var inst_126081 = (state_126702[(2)]);
var inst_126082 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(inst_126070);
var inst_126083 = [inst_126081,inst_126063,inst_126082];
var inst_126085 = cljs.core.PersistentHashMap.fromArrays(inst_126074,inst_126083);
var inst_126086 = cljs.test.do_report(inst_126085);
var _ = (function (){var statearr_127094 = state_126702;
(statearr_127094[(4)] = cljs.core.rest((state_126702[(4)])));

return statearr_127094;
})();
var state_126702__$1 = state_126702;
var statearr_127096_133299 = state_126702__$1;
(statearr_127096_133299[(2)] = inst_126086);

(statearr_127096_133299[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126707 === (2))){
var _ = (function (){var statearr_127097 = state_126702;
(statearr_127097[(4)] = cljs.core.cons((4),(state_126702[(4)])));

return statearr_127097;
})();
var ___$1 = (function (){var statearr_127099 = state_126702;
(statearr_127099[(4)] = cljs.core.cons((5),(state_126702[(4)])));

return statearr_127099;
})();
var inst_126032 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.buffer,cljs.core.conj,"foo\n");
var state_126702__$1 = (function (){var statearr_127101 = state_126702;
(statearr_127101[(34)] = inst_126032);

return statearr_127101;
})();
var statearr_127102_133302 = state_126702__$1;
(statearr_127102_133302[(2)] = null);

(statearr_127102_133302[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126707 === (66))){
var inst_126583 = (state_126702[(2)]);
var inst_126584 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_126585 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_126586 = (new cljs.core.PersistentVector(null,1,(5),inst_126584,inst_126585,null));
var inst_126587 = cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(inst_126586,cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["emits nil when closed connection"], 0));
var state_126702__$1 = (function (){var statearr_127104 = state_126702;
(statearr_127104[(35)] = inst_126587);

(statearr_127104[(36)] = inst_126583);

return statearr_127104;
})();
var statearr_127106_133304 = state_126702__$1;
(statearr_127106_133304[(2)] = null);

(statearr_127106_133304[(1)] = (76));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126707 === (23))){
var inst_126279 = (state_126702[(2)]);
var inst_126280 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_126282 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_126283 = (new cljs.core.PersistentVector(null,1,(5),inst_126280,inst_126282,null));
var inst_126284 = cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(inst_126283,cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["emits fragments"], 0));
var state_126702__$1 = (function (){var statearr_127113 = state_126702;
(statearr_127113[(37)] = inst_126279);

(statearr_127113[(38)] = inst_126284);

return statearr_127113;
})();
var statearr_127115_133306 = state_126702__$1;
(statearr_127115_133306[(2)] = null);

(statearr_127115_133306[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126707 === (47))){
var inst_126352 = (state_126702[(2)]);
var inst_126353 = cljs.core.list(new cljs.core.Symbol("async","<!","async/<!",-1308982001,null),new cljs.core.Symbol(null,"frags","frags",-341618008,null));
var inst_126354 = "baz";
var inst_126355 = expectations.compare_expr.cljs$core$IFn$_invoke$arity$4("baz",inst_126352,inst_126354,inst_126353);
var inst_126357 = expectations.__GT_failure_message(inst_126355);
var inst_126358 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_126353)," => ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_126354)].join('');
var inst_126359 = clojure.string.replace(inst_126357,/^.*?\n/,inst_126358);
var inst_126360 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_126361 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_126355);
var inst_126362 = [inst_126361,inst_126354,inst_126353,inst_126359];
var inst_126363 = cljs.core.PersistentHashMap.fromArrays(inst_126360,inst_126362);
var inst_126364 = cljs.test.do_report(inst_126363);
var _ = (function (){var statearr_127123 = state_126702;
(statearr_127123[(4)] = cljs.core.rest((state_126702[(4)])));

return statearr_127123;
})();
var state_126702__$1 = state_126702;
var statearr_127126_133309 = state_126702__$1;
(statearr_127126_133309[(2)] = inst_126364);

(statearr_127126_133309[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126707 === (35))){
var inst_126408 = (state_126702[(2)]);
var inst_126409 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_126410 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_126411 = (new cljs.core.PersistentVector(null,1,(5),inst_126409,inst_126410,null));
var inst_126412 = cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(inst_126411,cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["emits lines of already emitted frags"], 0));
var state_126702__$1 = (function (){var statearr_127130 = state_126702;
(statearr_127130[(39)] = inst_126408);

(statearr_127130[(40)] = inst_126412);

return statearr_127130;
})();
var statearr_127132_133312 = state_126702__$1;
(statearr_127132_133312[(2)] = null);

(statearr_127132_133312[(1)] = (52));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126707 === (82))){
var inst_126605 = (state_126702[(2)]);
var inst_126608 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_126610 = check.core.normalize_error(inst_126605);
var inst_126612 = cljs.core.list(new cljs.core.Symbol("async","<!","async/<!",-1308982001,null),new cljs.core.Symbol(null,"frags","frags",-341618008,null));
var inst_126613 = new cljs.core.Symbol(null,"=expect=>","=expect=>",-1384225590,null);
var inst_126614 = "";
var inst_126615 = ["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_126612)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_126613)," ",inst_126614].join('');
var inst_126616 = [new cljs.core.Keyword(null,"error","error",-978969032),"",inst_126610,inst_126615];
var inst_126617 = cljs.core.PersistentHashMap.fromArrays(inst_126608,inst_126616);
var inst_126618 = cljs.test.do_report(inst_126617);
var state_126702__$1 = state_126702;
var statearr_127137_133314 = state_126702__$1;
(statearr_127137_133314[(2)] = inst_126618);

(statearr_127137_133314[(1)] = (81));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126707 === (76))){
var _ = (function (){var statearr_127144 = state_126702;
(statearr_127144[(4)] = cljs.core.cons((78),(state_126702[(4)])));

return statearr_127144;
})();
var ___$1 = (function (){var statearr_127145 = state_126702;
(statearr_127145[(4)] = cljs.core.cons((79),(state_126702[(4)])));

return statearr_127145;
})();
var inst_126603 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.buffer,cljs.core.conj,new cljs.core.Keyword(null,"closed","closed",-919675359));
var state_126702__$1 = (function (){var statearr_127146 = state_126702;
(statearr_127146[(41)] = inst_126603);

return statearr_127146;
})();
var statearr_127147_133316 = state_126702__$1;
(statearr_127147_133316[(2)] = null);

(statearr_127147_133316[(1)] = (80));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126707 === (19))){
var inst_126161 = (state_126702[(2)]);
var _ = (function (){var statearr_127152 = state_126702;
(statearr_127152[(4)] = cljs.core.rest((state_126702[(4)])));

return statearr_127152;
})();
var state_126702__$1 = state_126702;
var statearr_127155_133318 = state_126702__$1;
(statearr_127155_133318[(2)] = inst_126161);

(statearr_127155_133318[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126707 === (57))){
var inst_126470 = (state_126702[(2)]);
var state_126702__$1 = (function (){var statearr_127160 = state_126702;
(statearr_127160[(42)] = inst_126470);

return statearr_127160;
})();
var statearr_127162_133320 = state_126702__$1;
(statearr_127162_133320[(2)] = null);

(statearr_127162_133320[(1)] = (60));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126707 === (68))){
var _ = (function (){var statearr_127164 = state_126702;
(statearr_127164[(4)] = cljs.core.rest((state_126702[(4)])));

return statearr_127164;
})();
var state_126702__$1 = state_126702;
var ex127150 = (state_126702__$1[(2)]);
var statearr_127168_133321 = state_126702__$1;
(statearr_127168_133321[(5)] = ex127150);


throw ex127150;


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126707 === (11))){
var state_126702__$1 = state_126702;
var statearr_127171_133322 = state_126702__$1;
(statearr_127171_133322[(2)] = new cljs.core.Keyword(null,"fail","fail",1706214930));

(statearr_127171_133322[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126707 === (9))){
var _ = (function (){var statearr_127176 = state_126702;
(statearr_127176[(4)] = cljs.core.rest((state_126702[(4)])));

return statearr_127176;
})();
var state_126702__$1 = state_126702;
var ex127163 = (state_126702__$1[(2)]);
var statearr_127180_133323 = state_126702__$1;
(statearr_127180_133323[(5)] = ex127163);


var statearr_127184_133324 = state_126702__$1;
(statearr_127184_133324[(1)] = (8));

(statearr_127184_133324[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126707 === (5))){
var _ = (function (){var statearr_127189 = state_126702;
(statearr_127189[(4)] = cljs.core.rest((state_126702[(4)])));

return statearr_127189;
})();
var state_126702__$1 = state_126702;
var ex127170 = (state_126702__$1[(2)]);
var statearr_127192_133327 = state_126702__$1;
(statearr_127192_133327[(5)] = ex127170);


throw ex127170;


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126707 === (83))){
var _ = (function (){var statearr_127198 = state_126702;
(statearr_127198[(4)] = cljs.core.rest((state_126702[(4)])));

return statearr_127198;
})();
var state_126702__$1 = state_126702;
var ex127174 = (state_126702__$1[(2)]);
var statearr_127200_133329 = state_126702__$1;
(statearr_127200_133329[(5)] = ex127174);


var statearr_127202_133330 = state_126702__$1;
(statearr_127202_133330[(1)] = (82));

(statearr_127202_133330[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126707 === (14))){
var inst_126124 = (state_126702[(2)]);
var state_126702__$1 = (function (){var statearr_127210 = state_126702;
(statearr_127210[(43)] = inst_126124);

return statearr_127210;
})();
var statearr_127212_133332 = state_126702__$1;
(statearr_127212_133332[(2)] = null);

(statearr_127212_133332[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126707 === (45))){
var inst_126334 = (state_126702[(2)]);
var inst_126337 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_126338 = check.core.normalize_error(inst_126334);
var inst_126339 = cljs.core.list(new cljs.core.Symbol("async","<!","async/<!",-1308982001,null),new cljs.core.Symbol(null,"frags","frags",-341618008,null));
var inst_126340 = new cljs.core.Symbol(null,"=expect=>","=expect=>",-1384225590,null);
var inst_126341 = "baz";
var inst_126342 = ["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_126339)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_126340)," ",inst_126341].join('');
var inst_126343 = [new cljs.core.Keyword(null,"error","error",-978969032),"baz",inst_126338,inst_126342];
var inst_126344 = cljs.core.PersistentHashMap.fromArrays(inst_126337,inst_126343);
var inst_126345 = cljs.test.do_report(inst_126344);
var state_126702__$1 = state_126702;
var statearr_127217_133334 = state_126702__$1;
(statearr_127217_133334[(2)] = inst_126345);

(statearr_127217_133334[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126707 === (53))){
var inst_126512 = (state_126702[(2)]);
var inst_126515 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_126517 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_126518 = (new cljs.core.PersistentVector(null,1,(5),inst_126515,inst_126517,null));
var inst_126519 = cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(inst_126518,cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["emits LOTS of lines"], 0));
var state_126702__$1 = (function (){var statearr_127224 = state_126702;
(statearr_127224[(44)] = inst_126512);

(statearr_127224[(45)] = inst_126519);

return statearr_127224;
})();
var statearr_127227_133338 = state_126702__$1;
(statearr_127227_133338[(2)] = null);

(statearr_127227_133338[(1)] = (65));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126707 === (78))){
var _ = (function (){var statearr_127233 = state_126702;
(statearr_127233[(4)] = cljs.core.rest((state_126702[(4)])));

return statearr_127233;
})();
var inst_126590 = (state_126702[(2)]);
var inst_126592 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_126593 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_126594 = (new cljs.core.PersistentVector(null,1,(5),inst_126592,inst_126593,null));
var inst_126595 = cljs.test.update_current_env_BANG_(inst_126594,cljs.core.rest);
var ___$1 = (function (){var temp__5753__auto__ = (state_126702[(5)]);
if(cljs.core.truth_(temp__5753__auto__)){
var e__38733__auto__ = temp__5753__auto__;
throw e__38733__auto__;
} else {
return null;
}
})();
var state_126702__$1 = (function (){var statearr_127238 = state_126702;
(statearr_127238[(46)] = inst_126595);

return statearr_127238;
})();
var statearr_127239_133339 = state_126702__$1;
(statearr_127239_133339[(2)] = inst_126590);

(statearr_127239_133339[(1)] = (77));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126707 === (26))){
var _ = (function (){var statearr_127242 = state_126702;
(statearr_127242[(4)] = cljs.core.cons((29),(state_126702[(4)])));

return statearr_127242;
})();
var inst_126206 = (self__.get_lines.cljs$core$IFn$_invoke$arity$0 ? self__.get_lines.cljs$core$IFn$_invoke$arity$0() : self__.get_lines.call(null));
var inst_126209 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_126210 = ["foobarb"];
var inst_126211 = (new cljs.core.PersistentVector(null,1,(5),inst_126209,inst_126210,null));
var inst_126212 = cljs.core.list(new cljs.core.Symbol(null,"get-lines","get-lines",-282739043,null));
var inst_126214 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["foobarb"], null);
var inst_126215 = expectations.compare_expr.cljs$core$IFn$_invoke$arity$4(inst_126211,inst_126206,inst_126214,inst_126212);
var inst_126216 = expectations.__GT_failure_message(inst_126215);
var inst_126218 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_126212)," => ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_126214)].join('');
var inst_126219 = clojure.string.replace(inst_126216,/^.*?\n/,inst_126218);
var inst_126220 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_126221 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_126215);
var inst_126222 = [inst_126221,inst_126214,inst_126212,inst_126219];
var inst_126223 = cljs.core.PersistentHashMap.fromArrays(inst_126220,inst_126222);
var inst_126225 = cljs.test.do_report(inst_126223);
var ___$1 = (function (){var statearr_127248 = state_126702;
(statearr_127248[(4)] = cljs.core.rest((state_126702[(4)])));

return statearr_127248;
})();
var state_126702__$1 = state_126702;
var statearr_127250_133344 = state_126702__$1;
(statearr_127250_133344[(2)] = inst_126225);

(statearr_127250_133344[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126707 === (16))){
var _ = (function (){var statearr_127253 = state_126702;
(statearr_127253[(4)] = cljs.core.rest((state_126702[(4)])));

return statearr_127253;
})();
var state_126702__$1 = state_126702;
var ex127230 = (state_126702__$1[(2)]);
var statearr_127258_133346 = state_126702__$1;
(statearr_127258_133346[(5)] = ex127230);


var statearr_127260_133347 = state_126702__$1;
(statearr_127260_133347[(1)] = (15));

(statearr_127260_133347[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126707 === (81))){
var inst_126642 = (state_126702[(2)]);
var state_126702__$1 = (function (){var statearr_127266 = state_126702;
(statearr_127266[(47)] = inst_126642);

return statearr_127266;
})();
var statearr_127267_133348 = state_126702__$1;
(statearr_127267_133348[(2)] = null);

(statearr_127267_133348[(1)] = (85));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126707 === (79))){
var _ = (function (){var statearr_127268 = state_126702;
(statearr_127268[(4)] = cljs.core.rest((state_126702[(4)])));

return statearr_127268;
})();
var state_126702__$1 = state_126702;
var ex127252 = (state_126702__$1[(2)]);
var statearr_127274_133349 = state_126702__$1;
(statearr_127274_133349[(5)] = ex127252);


throw ex127252;


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126707 === (38))){
var _ = (function (){var statearr_127276 = state_126702;
(statearr_127276[(4)] = cljs.core.cons((41),(state_126702[(4)])));

return statearr_127276;
})();
var state_126702__$1 = state_126702;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_126702__$1,(42),self__.frags);
} else {
if((state_val_126707 === (87))){
var inst_126643 = (state_126702[(2)]);
var inst_126647 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_126649 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_126650 = [null];
var inst_126651 = (new cljs.core.PersistentVector(null,1,(5),inst_126649,inst_126650,null));
var inst_126653 = check.core.normalize_error(inst_126643);
var inst_126654 = cljs.core.list(new cljs.core.Symbol(null,"get-lines","get-lines",-282739043,null));
var inst_126655 = new cljs.core.Symbol(null,"=expect=>","=expect=>",-1384225590,null);
var inst_126656 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null);
var inst_126657 = ["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_126654)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_126655)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_126656)].join('');
var inst_126658 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_126651,inst_126653,inst_126657];
var inst_126659 = cljs.core.PersistentHashMap.fromArrays(inst_126647,inst_126658);
var inst_126660 = cljs.test.do_report(inst_126659);
var state_126702__$1 = state_126702;
var statearr_127285_133353 = state_126702__$1;
(statearr_127285_133353[(2)] = inst_126660);

(statearr_127285_133353[(1)] = (86));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126707 === (30))){
var _ = (function (){var statearr_127290 = state_126702;
(statearr_127290[(4)] = cljs.core.cons((33),(state_126702[(4)])));

return statearr_127290;
})();
var inst_126253 = cljs.core.deref(self__.buffer);
var inst_126255 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_126257 = ["baz"];
var inst_126258 = (new cljs.core.PersistentVector(null,1,(5),inst_126255,inst_126257,null));
var inst_126260 = cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"buffer","buffer",-2037140571,null));
var inst_126262 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["baz"], null);
var inst_126263 = expectations.compare_expr.cljs$core$IFn$_invoke$arity$4(inst_126258,inst_126253,inst_126262,inst_126260);
var inst_126264 = expectations.__GT_failure_message(inst_126263);
var inst_126265 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_126260)," => ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_126262)].join('');
var inst_126266 = clojure.string.replace(inst_126264,/^.*?\n/,inst_126265);
var inst_126267 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_126269 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_126263);
var inst_126270 = [inst_126269,inst_126262,inst_126260,inst_126266];
var inst_126271 = cljs.core.PersistentHashMap.fromArrays(inst_126267,inst_126270);
var inst_126273 = cljs.test.do_report(inst_126271);
var ___$1 = (function (){var statearr_127293 = state_126702;
(statearr_127293[(4)] = cljs.core.rest((state_126702[(4)])));

return statearr_127293;
})();
var state_126702__$1 = state_126702;
var statearr_127295_133355 = state_126702__$1;
(statearr_127295_133355[(2)] = inst_126273);

(statearr_127295_133355[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126707 === (73))){
var state_126702__$1 = state_126702;
var statearr_127298_133356 = state_126702__$1;
(statearr_127298_133356[(2)] = new cljs.core.Keyword(null,"pass","pass",1574159993));

(statearr_127298_133356[(1)] = (75));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126707 === (10))){
var state_126702__$1 = state_126702;
var statearr_127302_133357 = state_126702__$1;
(statearr_127302_133357[(2)] = new cljs.core.Keyword(null,"pass","pass",1574159993));

(statearr_127302_133357[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126707 === (18))){
var _ = (function (){var statearr_127304 = state_126702;
(statearr_127304[(4)] = cljs.core.cons((21),(state_126702[(4)])));

return statearr_127304;
})();
var inst_126143 = cljs.core.deref(self__.buffer);
var inst_126144 = cljs.core.PersistentVector.EMPTY;
var inst_126146 = cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"buffer","buffer",-2037140571,null));
var inst_126147 = cljs.core.PersistentVector.EMPTY;
var inst_126149 = expectations.compare_expr.cljs$core$IFn$_invoke$arity$4(inst_126144,inst_126143,inst_126147,inst_126146);
var inst_126150 = expectations.__GT_failure_message(inst_126149);
var inst_126151 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_126146)," => ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_126147)].join('');
var inst_126152 = clojure.string.replace(inst_126150,/^.*?\n/,inst_126151);
var inst_126153 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_126154 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_126149);
var inst_126155 = [inst_126154,inst_126147,inst_126146,inst_126152];
var inst_126156 = cljs.core.PersistentHashMap.fromArrays(inst_126153,inst_126155);
var inst_126158 = cljs.test.do_report(inst_126156);
var ___$1 = (function (){var statearr_127310 = state_126702;
(statearr_127310[(4)] = cljs.core.rest((state_126702[(4)])));

return statearr_127310;
})();
var state_126702__$1 = state_126702;
var statearr_127313_133360 = state_126702__$1;
(statearr_127313_133360[(2)] = inst_126158);

(statearr_127313_133360[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126707 === (52))){
var _ = (function (){var statearr_127318 = state_126702;
(statearr_127318[(4)] = cljs.core.cons((54),(state_126702[(4)])));

return statearr_127318;
})();
var ___$1 = (function (){var statearr_127321 = state_126702;
(statearr_127321[(4)] = cljs.core.cons((55),(state_126702[(4)])));

return statearr_127321;
})();
var inst_126427 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.buffer,cljs.core.conj,"aar\n");
var state_126702__$1 = (function (){var statearr_127324 = state_126702;
(statearr_127324[(48)] = inst_126427);

return statearr_127324;
})();
var statearr_127325_133363 = state_126702__$1;
(statearr_127325_133363[(2)] = null);

(statearr_127325_133363[(1)] = (56));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126707 === (67))){
var _ = (function (){var statearr_127330 = state_126702;
(statearr_127330[(4)] = cljs.core.rest((state_126702[(4)])));

return statearr_127330;
})();
var inst_126521 = (state_126702[(2)]);
var inst_126522 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_126524 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_126525 = (new cljs.core.PersistentVector(null,1,(5),inst_126522,inst_126524,null));
var inst_126526 = cljs.test.update_current_env_BANG_(inst_126525,cljs.core.rest);
var ___$1 = (function (){var temp__5753__auto__ = (state_126702[(5)]);
if(cljs.core.truth_(temp__5753__auto__)){
var e__38733__auto__ = temp__5753__auto__;
throw e__38733__auto__;
} else {
return null;
}
})();
var state_126702__$1 = (function (){var statearr_127331 = state_126702;
(statearr_127331[(49)] = inst_126526);

return statearr_127331;
})();
var statearr_127332_133365 = state_126702__$1;
(statearr_127332_133365[(2)] = inst_126521);

(statearr_127332_133365[(1)] = (66));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126707 === (71))){
var inst_126538 = (state_126702[(2)]);
var inst_126539 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_126540 = check.core.normalize_error(inst_126538);
var inst_126541 = cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol(null,"get-lines","get-lines",-282739043,null)));
var inst_126542 = new cljs.core.Symbol(null,"=>","=>",-813269641,null);
var inst_126543 = (600000);
var inst_126544 = ["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_126541)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_126542)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_126543)].join('');
var inst_126545 = [new cljs.core.Keyword(null,"error","error",-978969032),(600000),inst_126540,inst_126544];
var inst_126546 = cljs.core.PersistentHashMap.fromArrays(inst_126539,inst_126545);
var inst_126547 = cljs.test.do_report(inst_126546);
var state_126702__$1 = state_126702;
var statearr_127340_133369 = state_126702__$1;
(statearr_127340_133369[(2)] = inst_126547);

(statearr_127340_133369[(1)] = (70));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126707 === (42))){
var inst_126319 = (state_126702[(2)]);
var inst_126320 = cljs.core.list(new cljs.core.Symbol("async","<!","async/<!",-1308982001,null),new cljs.core.Symbol(null,"frags","frags",-341618008,null));
var inst_126321 = "foobarb\n";
var inst_126322 = expectations.compare_expr.cljs$core$IFn$_invoke$arity$4("foobarb\n",inst_126319,inst_126321,inst_126320);
var inst_126323 = expectations.__GT_failure_message(inst_126322);
var inst_126324 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_126320)," => ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_126321)].join('');
var inst_126325 = clojure.string.replace(inst_126323,/^.*?\n/,inst_126324);
var inst_126326 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_126327 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_126322);
var inst_126328 = [inst_126327,inst_126321,inst_126320,inst_126325];
var inst_126329 = cljs.core.PersistentHashMap.fromArrays(inst_126326,inst_126328);
var inst_126330 = cljs.test.do_report(inst_126329);
var _ = (function (){var statearr_127347 = state_126702;
(statearr_127347[(4)] = cljs.core.rest((state_126702[(4)])));

return statearr_127347;
})();
var state_126702__$1 = state_126702;
var statearr_127352_133371 = state_126702__$1;
(statearr_127352_133371[(2)] = inst_126330);

(statearr_127352_133371[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126707 === (80))){
var _ = (function (){var statearr_127354 = state_126702;
(statearr_127354[(4)] = cljs.core.cons((83),(state_126702[(4)])));

return statearr_127354;
})();
var state_126702__$1 = state_126702;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_126702__$1,(84),self__.frags);
} else {
if((state_val_126707 === (37))){
var _ = (function (){var statearr_127356 = state_126702;
(statearr_127356[(4)] = cljs.core.rest((state_126702[(4)])));

return statearr_127356;
})();
var state_126702__$1 = state_126702;
var ex127343 = (state_126702__$1[(2)]);
var statearr_127357_133374 = state_126702__$1;
(statearr_127357_133374[(5)] = ex127343);


throw ex127343;


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126707 === (63))){
var _ = (function (){var statearr_127360 = state_126702;
(statearr_127360[(4)] = cljs.core.rest((state_126702[(4)])));

return statearr_127360;
})();
var state_126702__$1 = state_126702;
var ex127353 = (state_126702__$1[(2)]);
var statearr_127362_133377 = state_126702__$1;
(statearr_127362_133377[(5)] = ex127353);


var statearr_127363_133378 = state_126702__$1;
(statearr_127363_133378[(1)] = (62));

(statearr_127363_133378[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126707 === (8))){
var inst_126034 = (state_126702[(2)]);
var inst_126036 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_126037 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_126038 = ["foo"];
var inst_126039 = (new cljs.core.PersistentVector(null,1,(5),inst_126037,inst_126038,null));
var inst_126040 = check.core.normalize_error(inst_126034);
var inst_126042 = cljs.core.list(new cljs.core.Symbol(null,"get-lines","get-lines",-282739043,null));
var inst_126043 = new cljs.core.Symbol(null,"=>","=>",-813269641,null);
var inst_126044 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["foo"], null);
var inst_126045 = ["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_126042)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_126043)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_126044)].join('');
var inst_126046 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_126039,inst_126040,inst_126045];
var inst_126047 = cljs.core.PersistentHashMap.fromArrays(inst_126036,inst_126046);
var inst_126048 = cljs.test.do_report(inst_126047);
var state_126702__$1 = state_126702;
var statearr_127368_133381 = state_126702__$1;
(statearr_127368_133381[(2)] = inst_126048);

(statearr_127368_133381[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126707 === (49))){
var inst_126405 = (state_126702[(2)]);
var _ = (function (){var statearr_127371 = state_126702;
(statearr_127371[(4)] = cljs.core.rest((state_126702[(4)])));

return statearr_127371;
})();
var state_126702__$1 = state_126702;
var statearr_127374_133383 = state_126702__$1;
(statearr_127374_133383[(2)] = inst_126405);

(statearr_127374_133383[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_126707 === (84))){
var inst_126625 = (state_126702[(2)]);
var inst_126626 = cljs.core.list(new cljs.core.Symbol("async","<!","async/<!",-1308982001,null),new cljs.core.Symbol(null,"frags","frags",-341618008,null));
var inst_126628 = "";
var inst_126629 = expectations.compare_expr.cljs$core$IFn$_invoke$arity$4("",inst_126625,inst_126628,inst_126626);
var inst_126630 = expectations.__GT_failure_message(inst_126629);
var inst_126632 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_126626)," => ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_126628)].join('');
var inst_126633 = clojure.string.replace(inst_126630,/^.*?\n/,inst_126632);
var inst_126635 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_126636 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_126629);
var inst_126637 = [inst_126636,inst_126628,inst_126626,inst_126633];
var inst_126638 = cljs.core.PersistentHashMap.fromArrays(inst_126635,inst_126637);
var inst_126639 = cljs.test.do_report(inst_126638);
var _ = (function (){var statearr_127381 = state_126702;
(statearr_127381[(4)] = cljs.core.rest((state_126702[(4)])));

return statearr_127381;
})();
var state_126702__$1 = state_126702;
var statearr_127383_133386 = state_126702__$1;
(statearr_127383_133386[(2)] = inst_126639);

(statearr_127383_133386[(1)] = (81));


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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
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
var repl_tooling$repl_client$connection_test$state_machine__39695__auto__ = null;
var repl_tooling$repl_client$connection_test$state_machine__39695__auto____0 = (function (){
var statearr_127397 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_127397[(0)] = repl_tooling$repl_client$connection_test$state_machine__39695__auto__);

(statearr_127397[(1)] = (1));

return statearr_127397;
});
var repl_tooling$repl_client$connection_test$state_machine__39695__auto____1 = (function (state_126702){
while(true){
var ret_value__39696__auto__ = (function (){try{while(true){
var result__39697__auto__ = switch__39694__auto__(state_126702);
if(cljs.core.keyword_identical_QMARK_(result__39697__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39697__auto__;
}
break;
}
}catch (e127401){var ex__39698__auto__ = e127401;
var statearr_127402_133389 = state_126702;
(statearr_127402_133389[(2)] = ex__39698__auto__);


if(cljs.core.seq((state_126702[(4)]))){
var statearr_127405_133391 = state_126702;
(statearr_127405_133391[(1)] = cljs.core.first((state_126702[(4)])));

} else {
throw ex__39698__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__133392 = state_126702;
state_126702 = G__133392;
continue;
} else {
return ret_value__39696__auto__;
}
break;
}
});
repl_tooling$repl_client$connection_test$state_machine__39695__auto__ = function(state_126702){
switch(arguments.length){
case 0:
return repl_tooling$repl_client$connection_test$state_machine__39695__auto____0.call(this);
case 1:
return repl_tooling$repl_client$connection_test$state_machine__39695__auto____1.call(this,state_126702);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
repl_tooling$repl_client$connection_test$state_machine__39695__auto__.cljs$core$IFn$_invoke$arity$0 = repl_tooling$repl_client$connection_test$state_machine__39695__auto____0;
repl_tooling$repl_client$connection_test$state_machine__39695__auto__.cljs$core$IFn$_invoke$arity$1 = repl_tooling$repl_client$connection_test$state_machine__39695__auto____1;
return repl_tooling$repl_client$connection_test$state_machine__39695__auto__;
})()
})();
var state__39771__auto__ = (function (){var statearr_127411 = f__39770__auto__();
(statearr_127411[(6)] = c__39769__auto__);

return statearr_127411;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39771__auto__);
}));

return c__39769__auto__;
}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}}));

(repl_tooling.repl_client.connection_test.t_repl_tooling$repl_client$connection_test124766.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"buffer","buffer",-2037140571,null),new cljs.core.Symbol(null,"lines","lines",940365746,null),new cljs.core.Symbol(null,"get-lines","get-lines",-282739043,null),new cljs.core.Symbol(null,"frags","frags",-341618008,null),new cljs.core.Symbol(null,"meta124767","meta124767",170705829,null)], null);
}));

(repl_tooling.repl_client.connection_test.t_repl_tooling$repl_client$connection_test124766.cljs$lang$type = true);

(repl_tooling.repl_client.connection_test.t_repl_tooling$repl_client$connection_test124766.cljs$lang$ctorStr = "repl-tooling.repl-client.connection-test/t_repl_tooling$repl_client$connection_test124766");

(repl_tooling.repl_client.connection_test.t_repl_tooling$repl_client$connection_test124766.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"repl-tooling.repl-client.connection-test/t_repl_tooling$repl_client$connection_test124766");
}));

/**
 * Positional factory function for repl-tooling.repl-client.connection-test/t_repl_tooling$repl_client$connection_test124766.
 */
repl_tooling.repl_client.connection_test.__GT_t_repl_tooling$repl_client$connection_test124766 = (function repl_tooling$repl_client$connection_test$__GT_t_repl_tooling$repl_client$connection_test124766(buffer__$1,lines__$1,get_lines__$1,frags__$1,meta124767){
return (new repl_tooling.repl_client.connection_test.t_repl_tooling$repl_client$connection_test124766(buffer__$1,lines__$1,get_lines__$1,frags__$1,meta124767));
});

}

return (new repl_tooling.repl_client.connection_test.t_repl_tooling$repl_client$connection_test124766(buffer,lines,get_lines,frags,null));
});

(repl_tooling.repl_client.connection_test.buffer_treatment.cljs$lang$var = new cljs.core.Var(function(){return repl_tooling.repl_client.connection_test.buffer_treatment;},new cljs.core.Symbol("repl-tooling.repl-client.connection-test","buffer-treatment","repl-tooling.repl-client.connection-test/buffer-treatment",946392793,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"repl-tooling.repl-client.connection-test","repl-tooling.repl-client.connection-test",1805185577,null),new cljs.core.Symbol(null,"buffer-treatment","buffer-treatment",1299531971,null),"repl_tooling/repl_client/connection_test.cljs",32,1,24,24,cljs.core.List.EMPTY,null,(cljs.core.truth_(repl_tooling.repl_client.connection_test.buffer_treatment)?repl_tooling.repl_client.connection_test.buffer_treatment.cljs$lang$test:null)])));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"repl_tooling.repl_client.connection_test","repl_tooling.repl_client.connection_test",1555915928),new cljs.core.Keyword(null,"eval-cycle","eval-cycle",-56751377)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"eval-cycle",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){
if((typeof repl_tooling !== 'undefined') && (typeof repl_tooling.repl_client !== 'undefined') && (typeof repl_tooling.repl_client.connection_test !== 'undefined') && (typeof repl_tooling.repl_client.connection_test.t_repl_tooling$repl_client$connection_test127440 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
repl_tooling.repl_client.connection_test.t_repl_tooling$repl_client$connection_test127440 = (function (meta127441){
this.meta127441 = meta127441;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(repl_tooling.repl_client.connection_test.t_repl_tooling$repl_client$connection_test127440.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_127442,meta127441__$1){
var self__ = this;
var _127442__$1 = this;
return (new repl_tooling.repl_client.connection_test.t_repl_tooling$repl_client$connection_test127440(meta127441__$1));
}));

(repl_tooling.repl_client.connection_test.t_repl_tooling$repl_client$connection_test127440.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_127442){
var self__ = this;
var _127442__$1 = this;
return self__.meta127441;
}));

(repl_tooling.repl_client.connection_test.t_repl_tooling$repl_client$connection_test127440.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(repl_tooling.repl_client.connection_test.t_repl_tooling$repl_client$connection_test127440.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___9200__auto__ = self____$1;
var buffer = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
var output = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var control = repl_tooling.repl_client.connection.treat_buffer_BANG_(buffer,cljs.core.identity,cljs.core.identity);
var c__39769__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__39770__auto__ = (function (){var switch__39694__auto__ = (function (state_128097){
var state_val_128099 = (state_128097[(1)]);
if((state_val_128099 === (65))){
var inst_127896 = (state_128097[(2)]);
var inst_127898 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_127899 = check.core.normalize_error(inst_127896);
var inst_127900 = cljs.core.list(new cljs.core.Symbol("async","<!","async/<!",-1308982001,null),new cljs.core.Symbol(null,"output","output",534662484,null));
var inst_127901 = new cljs.core.Symbol(null,"=expect=>","=expect=>",-1384225590,null);
var inst_127902 = "lol";
var inst_127903 = ["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_127900)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_127901)," ",inst_127902].join('');
var inst_127904 = [new cljs.core.Keyword(null,"error","error",-978969032),"lol",inst_127899,inst_127903];
var inst_127905 = cljs.core.PersistentHashMap.fromArrays(inst_127898,inst_127904);
var inst_127906 = cljs.test.do_report(inst_127905);
var state_128097__$1 = state_128097;
var statearr_128107_133397 = state_128097__$1;
(statearr_128107_133397[(2)] = inst_127906);

(statearr_128107_133397[(1)] = (64));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128099 === (70))){
var inst_127934 = (state_128097[(2)]);
var inst_127938 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_127939 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id01","id01",-1954134071,null),":foo"], null);
var inst_127940 = check.core.normalize_error(inst_127934);
var inst_127941 = cljs.core.list(new cljs.core.Symbol("async","<!","async/<!",-1308982001,null),new cljs.core.Symbol(null,"results","results",506361414,null));
var inst_127942 = new cljs.core.Symbol(null,"=expect=>","=expect=>",-1384225590,null);
var inst_127943 = cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id01","id01",-1954134071,null),":foo"], null));
var inst_127944 = ["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_127941)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_127942)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_127943)].join('');
var inst_127945 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_127939,inst_127940,inst_127944];
var inst_127946 = cljs.core.PersistentHashMap.fromArrays(inst_127938,inst_127945);
var inst_127947 = cljs.test.do_report(inst_127946);
var state_128097__$1 = state_128097;
var statearr_128112_133398 = state_128097__$1;
(statearr_128112_133398[(2)] = inst_127947);

(statearr_128112_133398[(1)] = (69));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128099 === (62))){
var inst_127877 = (state_128097[(2)]);
var inst_127878 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id01","id01",-1954134071,null),":foo"], null);
var inst_127879 = cljs.core.list(new cljs.core.Symbol("async","<!","async/<!",-1308982001,null),new cljs.core.Symbol(null,"results","results",506361414,null));
var inst_127880 = cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id01","id01",-1954134071,null),":foo"], null));
var inst_127882 = expectations.compare_expr.cljs$core$IFn$_invoke$arity$4(inst_127878,inst_127877,inst_127880,inst_127879);
var inst_127883 = expectations.__GT_failure_message(inst_127882);
var inst_127884 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_127879)," => ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_127880)].join('');
var inst_127885 = clojure.string.replace(inst_127883,/^.*?\n/,inst_127884);
var inst_127886 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_127887 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_127882);
var inst_127888 = [inst_127887,inst_127880,inst_127879,inst_127885];
var inst_127889 = cljs.core.PersistentHashMap.fromArrays(inst_127886,inst_127888);
var inst_127890 = cljs.test.do_report(inst_127889);
var _ = (function (){var statearr_128116 = state_128097;
(statearr_128116[(4)] = cljs.core.rest((state_128097[(4)])));

return statearr_128116;
})();
var state_128097__$1 = state_128097;
var statearr_128119_133402 = state_128097__$1;
(statearr_128119_133402[(2)] = inst_127890);

(statearr_128119_133402[(1)] = (59));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128099 === (74))){
var inst_128008 = (state_128097[(2)]);
var _ = (function (){var statearr_128124 = state_128097;
(statearr_128124[(4)] = cljs.core.rest((state_128097[(4)])));

return statearr_128124;
})();
var state_128097__$1 = state_128097;
var statearr_128125_133403 = state_128097__$1;
(statearr_128125_133403[(2)] = inst_128008);

(statearr_128125_133403[(1)] = (56));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128099 === (7))){
var inst_127511 = (state_128097[(2)]);
var _ = (function (){var statearr_128127 = state_128097;
(statearr_128127[(4)] = cljs.core.rest((state_128097[(4)])));

return statearr_128127;
})();
var state_128097__$1 = state_128097;
var statearr_128130_133404 = state_128097__$1;
(statearr_128130_133404[(2)] = inst_127511);

(statearr_128130_133404[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128099 === (59))){
var inst_127893 = (state_128097[(2)]);
var state_128097__$1 = (function (){var statearr_128133 = state_128097;
(statearr_128133[(7)] = inst_127893);

return statearr_128133;
})();
var statearr_128134_133408 = state_128097__$1;
(statearr_128134_133408[(2)] = null);

(statearr_128134_133408[(1)] = (63));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128099 === (86))){
var inst_128059 = (state_128097[(2)]);
var inst_128060 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id02","id02",365882140,null),"[\n1 2\n]"], null);
var inst_128061 = cljs.core.list(new cljs.core.Symbol("async","<!","async/<!",-1308982001,null),new cljs.core.Symbol(null,"results","results",506361414,null));
var inst_128062 = cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id02","id02",365882140,null),"[\n1 2\n]"], null));
var inst_128063 = expectations.compare_expr.cljs$core$IFn$_invoke$arity$4(inst_128060,inst_128059,inst_128062,inst_128061);
var inst_128064 = expectations.__GT_failure_message(inst_128063);
var inst_128065 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_128061)," => ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_128062)].join('');
var inst_128066 = clojure.string.replace(inst_128064,/^.*?\n/,inst_128065);
var inst_128069 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_128071 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_128063);
var inst_128072 = [inst_128071,inst_128062,inst_128061,inst_128066];
var inst_128073 = cljs.core.PersistentHashMap.fromArrays(inst_128069,inst_128072);
var inst_128074 = cljs.test.do_report(inst_128073);
var _ = (function (){var statearr_128139 = state_128097;
(statearr_128139[(4)] = cljs.core.rest((state_128097[(4)])));

return statearr_128139;
})();
var state_128097__$1 = state_128097;
var statearr_128141_133409 = state_128097__$1;
(statearr_128141_133409[(2)] = inst_128074);

(statearr_128141_133409[(1)] = (83));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128099 === (20))){
var _ = (function (){var statearr_128145 = state_128097;
(statearr_128145[(4)] = cljs.core.cons((23),(state_128097[(4)])));

return statearr_128145;
})();
var state_128097__$1 = state_128097;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_128097__$1,(24),output);
} else {
if((state_val_128099 === (72))){
var inst_127954 = (state_128097[(2)]);
var inst_127955 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id01","id01",-1954134071,null),":foo"], null);
var inst_127956 = cljs.core.list(new cljs.core.Symbol("async","<!","async/<!",-1308982001,null),new cljs.core.Symbol(null,"results","results",506361414,null));
var inst_127957 = cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id01","id01",-1954134071,null),":foo"], null));
var inst_127958 = expectations.compare_expr.cljs$core$IFn$_invoke$arity$4(inst_127955,inst_127954,inst_127957,inst_127956);
var inst_127959 = expectations.__GT_failure_message(inst_127958);
var inst_127960 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_127956)," => ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_127957)].join('');
var inst_127961 = clojure.string.replace(inst_127959,/^.*?\n/,inst_127960);
var inst_127962 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_127963 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_127958);
var inst_127964 = [inst_127963,inst_127957,inst_127956,inst_127961];
var inst_127965 = cljs.core.PersistentHashMap.fromArrays(inst_127962,inst_127964);
var inst_127966 = cljs.test.do_report(inst_127965);
var _ = (function (){var statearr_128222 = state_128097;
(statearr_128222[(4)] = cljs.core.rest((state_128097[(4)])));

return statearr_128222;
})();
var state_128097__$1 = state_128097;
var statearr_128223_133415 = state_128097__$1;
(statearr_128223_133415[(2)] = inst_127966);

(statearr_128223_133415[(1)] = (69));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128099 === (58))){
var _ = (function (){var statearr_128226 = state_128097;
(statearr_128226[(4)] = cljs.core.cons((61),(state_128097[(4)])));

return statearr_128226;
})();
var state_128097__$1 = state_128097;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_128097__$1,(62),results);
} else {
if((state_val_128099 === (60))){
var inst_127856 = (state_128097[(2)]);
var inst_127857 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_127858 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id01","id01",-1954134071,null),":foo"], null);
var inst_127859 = check.core.normalize_error(inst_127856);
var inst_127862 = cljs.core.list(new cljs.core.Symbol("async","<!","async/<!",-1308982001,null),new cljs.core.Symbol(null,"results","results",506361414,null));
var inst_127863 = new cljs.core.Symbol(null,"=expect=>","=expect=>",-1384225590,null);
var inst_127864 = cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id01","id01",-1954134071,null),":foo"], null));
var inst_127865 = ["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_127862)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_127863)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_127864)].join('');
var inst_127866 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_127858,inst_127859,inst_127865];
var inst_127867 = cljs.core.PersistentHashMap.fromArrays(inst_127857,inst_127866);
var inst_127868 = cljs.test.do_report(inst_127867);
var state_128097__$1 = state_128097;
var statearr_128232_133418 = state_128097__$1;
(statearr_128232_133418[(2)] = inst_127868);

(statearr_128232_133418[(1)] = (59));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128099 === (27))){
var _ = (function (){var statearr_128235 = state_128097;
(statearr_128235[(4)] = cljs.core.rest((state_128097[(4)])));

return statearr_128235;
})();
var inst_127621 = (state_128097[(2)]);
var inst_127622 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_127623 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_127624 = (new cljs.core.PersistentVector(null,1,(5),inst_127622,inst_127623,null));
var inst_127625 = cljs.test.update_current_env_BANG_(inst_127624,cljs.core.rest);
var ___$1 = (function (){var temp__5753__auto__ = (state_128097[(5)]);
if(cljs.core.truth_(temp__5753__auto__)){
var e__38733__auto__ = temp__5753__auto__;
throw e__38733__auto__;
} else {
return null;
}
})();
var state_128097__$1 = (function (){var statearr_128242 = state_128097;
(statearr_128242[(8)] = inst_127625);

return statearr_128242;
})();
var statearr_128243_133421 = state_128097__$1;
(statearr_128243_133421[(2)] = inst_127621);

(statearr_128243_133421[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128099 === (1))){
var inst_127452 = (function (){return (function (p1__127425_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(output,(function (){var or__4223__auto__ = p1__127425_SHARP_;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return new cljs.core.Keyword(null,"closed","closed",-919675359);
}
})());
});
})();
var inst_127453 = (function (){return (function (p1__127426_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(results,(function (){var or__4223__auto__ = p1__127426_SHARP_;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return new cljs.core.Keyword(null,"closed","closed",-919675359);
}
})());
});
})();
var inst_127454 = repl_tooling.repl_client.connection.prepare_evals(control,inst_127452,inst_127453);
var inst_127456 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_127458 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_127459 = (new cljs.core.PersistentVector(null,1,(5),inst_127456,inst_127458,null));
var inst_127460 = cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(inst_127459,cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["captures the result of output"], 0));
var state_128097__$1 = (function (){var statearr_128249 = state_128097;
(statearr_128249[(9)] = inst_127454);

(statearr_128249[(10)] = inst_127460);

return statearr_128249;
})();
var statearr_128297_133424 = state_128097__$1;
(statearr_128297_133424[(2)] = null);

(statearr_128297_133424[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128099 === (69))){
var inst_127969 = (state_128097[(2)]);
var state_128097__$1 = (function (){var statearr_128300 = state_128097;
(statearr_128300[(11)] = inst_127969);

return statearr_128300;
})();
var statearr_128304_133425 = state_128097__$1;
(statearr_128304_133425[(2)] = null);

(statearr_128304_133425[(1)] = (73));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128099 === (24))){
var inst_127595 = (state_128097[(2)]);
var inst_127596 = cljs.core.list(new cljs.core.Symbol("async","<!","async/<!",-1308982001,null),new cljs.core.Symbol(null,"output","output",534662484,null));
var inst_127597 = "[tooling$eval-res id01 \":foo\"]";
var inst_127598 = expectations.compare_expr.cljs$core$IFn$_invoke$arity$4("[tooling$eval-res id01 \":foo\"]",inst_127595,inst_127597,inst_127596);
var inst_127599 = expectations.__GT_failure_message(inst_127598);
var inst_127601 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_127596)," => ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_127597)].join('');
var inst_127602 = clojure.string.replace(inst_127599,/^.*?\n/,inst_127601);
var inst_127603 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_127604 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_127598);
var inst_127605 = [inst_127604,inst_127597,inst_127596,inst_127602];
var inst_127606 = cljs.core.PersistentHashMap.fromArrays(inst_127603,inst_127605);
var inst_127608 = cljs.test.do_report(inst_127606);
var _ = (function (){var statearr_128319 = state_128097;
(statearr_128319[(4)] = cljs.core.rest((state_128097[(4)])));

return statearr_128319;
})();
var state_128097__$1 = state_128097;
var statearr_128320_133430 = state_128097__$1;
(statearr_128320_133430[(2)] = inst_127608);

(statearr_128320_133430[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128099 === (55))){
var inst_128011 = (state_128097[(2)]);
var inst_128012 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_128013 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_128014 = (new cljs.core.PersistentVector(null,1,(5),inst_128012,inst_128013,null));
var inst_128015 = cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(inst_128014,cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["captures output in different fragments"], 0));
var state_128097__$1 = (function (){var statearr_128325 = state_128097;
(statearr_128325[(12)] = inst_128011);

(statearr_128325[(13)] = inst_128015);

return statearr_128325;
})();
var statearr_128326_133432 = state_128097__$1;
(statearr_128326_133432[(2)] = null);

(statearr_128326_133432[(1)] = (78));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128099 === (85))){
var _ = (function (){var statearr_128330 = state_128097;
(statearr_128330[(4)] = cljs.core.rest((state_128097[(4)])));

return statearr_128330;
})();
var state_128097__$1 = state_128097;
var ex128317 = (state_128097__$1[(2)]);
var statearr_128332_133435 = state_128097__$1;
(statearr_128332_133435[(5)] = ex128317);


var statearr_128335_133436 = state_128097__$1;
(statearr_128335_133436[(1)] = (84));

(statearr_128335_133436[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128099 === (39))){
var _ = (function (){var statearr_128339 = state_128097;
(statearr_128339[(4)] = cljs.core.cons((42),(state_128097[(4)])));

return statearr_128339;
})();
var state_128097__$1 = state_128097;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_128097__$1,(43),results);
} else {
if((state_val_128099 === (46))){
var inst_127753 = (state_128097[(2)]);
var inst_127755 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_127756 = check.core.normalize_error(inst_127753);
var inst_127757 = cljs.core.list(new cljs.core.Symbol("async","<!","async/<!",-1308982001,null),new cljs.core.Symbol(null,"output","output",534662484,null));
var inst_127758 = new cljs.core.Symbol(null,"=expect=>","=expect=>",-1384225590,null);
var inst_127759 = "lol";
var inst_127760 = ["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_127757)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_127758)," ",inst_127759].join('');
var inst_127761 = [new cljs.core.Keyword(null,"error","error",-978969032),"lol",inst_127756,inst_127760];
var inst_127762 = cljs.core.PersistentHashMap.fromArrays(inst_127755,inst_127761);
var inst_127763 = cljs.test.do_report(inst_127762);
var state_128097__$1 = state_128097;
var statearr_128344_133439 = state_128097__$1;
(statearr_128344_133439[(2)] = inst_127763);

(statearr_128344_133439[(1)] = (45));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128099 === (4))){
var _ = (function (){var statearr_128347 = state_128097;
(statearr_128347[(4)] = cljs.core.rest((state_128097[(4)])));

return statearr_128347;
})();
var inst_127463 = (state_128097[(2)]);
var inst_127465 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_127466 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_127467 = (new cljs.core.PersistentVector(null,1,(5),inst_127465,inst_127466,null));
var inst_127468 = cljs.test.update_current_env_BANG_(inst_127467,cljs.core.rest);
var ___$1 = (function (){var temp__5753__auto__ = (state_128097[(5)]);
if(cljs.core.truth_(temp__5753__auto__)){
var e__38733__auto__ = temp__5753__auto__;
throw e__38733__auto__;
} else {
return null;
}
})();
var state_128097__$1 = (function (){var statearr_128349 = state_128097;
(statearr_128349[(14)] = inst_127468);

return statearr_128349;
})();
var statearr_128352_133443 = state_128097__$1;
(statearr_128352_133443[(2)] = inst_127463);

(statearr_128352_133443[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128099 === (77))){
var inst_127990 = (state_128097[(2)]);
var inst_127992 = cljs.core.list(new cljs.core.Symbol("async","<!","async/<!",-1308982001,null),new cljs.core.Symbol(null,"output","output",534662484,null));
var inst_127994 = "bar";
var inst_127995 = expectations.compare_expr.cljs$core$IFn$_invoke$arity$4("bar",inst_127990,inst_127994,inst_127992);
var inst_127997 = expectations.__GT_failure_message(inst_127995);
var inst_127999 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_127992)," => ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_127994)].join('');
var inst_128000 = clojure.string.replace(inst_127997,/^.*?\n/,inst_127999);
var inst_128001 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_128002 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_127995);
var inst_128003 = [inst_128002,inst_127994,inst_127992,inst_128000];
var inst_128004 = cljs.core.PersistentHashMap.fromArrays(inst_128001,inst_128003);
var inst_128005 = cljs.test.do_report(inst_128004);
var _ = (function (){var statearr_128360 = state_128097;
(statearr_128360[(4)] = cljs.core.rest((state_128097[(4)])));

return statearr_128360;
})();
var state_128097__$1 = state_128097;
var statearr_128361_133446 = state_128097__$1;
(statearr_128361_133446[(2)] = inst_128005);

(statearr_128361_133446[(1)] = (74));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128099 === (54))){
var _ = (function (){var statearr_128364 = state_128097;
(statearr_128364[(4)] = cljs.core.cons((56),(state_128097[(4)])));

return statearr_128364;
})();
var ___$1 = (function (){var statearr_128366 = state_128097;
(statearr_128366[(4)] = cljs.core.cons((57),(state_128097[(4)])));

return statearr_128366;
})();
var inst_127851 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(control,cljs.core.assoc,new cljs.core.Keyword(null,"ignore-prompt","ignore-prompt",-1001404739),true);
var inst_127852 = new cljs.core.Symbol(null,"id01","id01",-1954134071,null);
var inst_127853 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(control,cljs.core.update,new cljs.core.Keyword(null,"pending-evals","pending-evals",1249255957),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_127852], 0));
var inst_127854 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(buffer,cljs.core.conj,"lol[tooling$eval-res id01 \":foo\"]\nuser.cljs=> ");
var state_128097__$1 = (function (){var statearr_128368 = state_128097;
(statearr_128368[(15)] = inst_127851);

(statearr_128368[(16)] = inst_127853);

(statearr_128368[(17)] = inst_127854);

return statearr_128368;
})();
var statearr_128371_133448 = state_128097__$1;
(statearr_128371_133448[(2)] = null);

(statearr_128371_133448[(1)] = (58));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128099 === (15))){
var _ = (function (){var statearr_128377 = state_128097;
(statearr_128377[(4)] = cljs.core.cons((18),(state_128097[(4)])));

return statearr_128377;
})();
var state_128097__$1 = state_128097;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_128097__$1,(19),results);
} else {
if((state_val_128099 === (48))){
var inst_127771 = (state_128097[(2)]);
var inst_127773 = cljs.core.list(new cljs.core.Symbol("async","<!","async/<!",-1308982001,null),new cljs.core.Symbol(null,"output","output",534662484,null));
var inst_127774 = "lol";
var inst_127776 = expectations.compare_expr.cljs$core$IFn$_invoke$arity$4("lol",inst_127771,inst_127774,inst_127773);
var inst_127777 = expectations.__GT_failure_message(inst_127776);
var inst_127778 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_127773)," => ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_127774)].join('');
var inst_127779 = clojure.string.replace(inst_127777,/^.*?\n/,inst_127778);
var inst_127781 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_127782 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_127776);
var inst_127783 = [inst_127782,inst_127774,inst_127773,inst_127779];
var inst_127784 = cljs.core.PersistentHashMap.fromArrays(inst_127781,inst_127783);
var inst_127785 = cljs.test.do_report(inst_127784);
var _ = (function (){var statearr_128383 = state_128097;
(statearr_128383[(4)] = cljs.core.rest((state_128097[(4)])));

return statearr_128383;
})();
var state_128097__$1 = state_128097;
var statearr_128385_133451 = state_128097__$1;
(statearr_128385_133451[(2)] = inst_127785);

(statearr_128385_133451[(1)] = (45));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128099 === (50))){
var inst_127827 = (state_128097[(2)]);
var _ = (function (){var statearr_128391 = state_128097;
(statearr_128391[(4)] = cljs.core.rest((state_128097[(4)])));

return statearr_128391;
})();
var state_128097__$1 = state_128097;
var statearr_128394_133454 = state_128097__$1;
(statearr_128394_133454[(2)] = inst_127827);

(statearr_128394_133454[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128099 === (75))){
var inst_127970 = (state_128097[(2)]);
var inst_127972 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_127974 = check.core.normalize_error(inst_127970);
var inst_127977 = cljs.core.list(new cljs.core.Symbol("async","<!","async/<!",-1308982001,null),new cljs.core.Symbol(null,"output","output",534662484,null));
var inst_127978 = new cljs.core.Symbol(null,"=expect=>","=expect=>",-1384225590,null);
var inst_127979 = "bar";
var inst_127980 = ["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_127977)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_127978)," ",inst_127979].join('');
var inst_127981 = [new cljs.core.Keyword(null,"error","error",-978969032),"bar",inst_127974,inst_127980];
var inst_127982 = cljs.core.PersistentHashMap.fromArrays(inst_127972,inst_127981);
var inst_127983 = cljs.test.do_report(inst_127982);
var state_128097__$1 = state_128097;
var statearr_128399_133456 = state_128097__$1;
(statearr_128399_133456[(2)] = inst_127983);

(statearr_128399_133456[(1)] = (74));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128099 === (21))){
var inst_127611 = (state_128097[(2)]);
var _ = (function (){var statearr_128403 = state_128097;
(statearr_128403[(4)] = cljs.core.rest((state_128097[(4)])));

return statearr_128403;
})();
var state_128097__$1 = state_128097;
var statearr_128408_133457 = state_128097__$1;
(statearr_128408_133457[(2)] = inst_127611);

(statearr_128408_133457[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128099 === (31))){
var inst_127636 = (state_128097[(2)]);
var inst_127637 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_127638 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id01","id01",-1954134071,null),":foo"], null);
var inst_127639 = check.core.normalize_error(inst_127636);
var inst_127643 = cljs.core.list(new cljs.core.Symbol("async","<!","async/<!",-1308982001,null),new cljs.core.Symbol(null,"results","results",506361414,null));
var inst_127644 = new cljs.core.Symbol(null,"=expect=>","=expect=>",-1384225590,null);
var inst_127645 = cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id01","id01",-1954134071,null),":foo"], null));
var inst_127646 = ["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_127643)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_127644)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_127645)].join('');
var inst_127647 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_127638,inst_127639,inst_127646];
var inst_127648 = cljs.core.PersistentHashMap.fromArrays(inst_127637,inst_127647);
var inst_127649 = cljs.test.do_report(inst_127648);
var state_128097__$1 = state_128097;
var statearr_128414_133458 = state_128097__$1;
(statearr_128414_133458[(2)] = inst_127649);

(statearr_128414_133458[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128099 === (32))){
var _ = (function (){var statearr_128419 = state_128097;
(statearr_128419[(4)] = cljs.core.rest((state_128097[(4)])));

return statearr_128419;
})();
var state_128097__$1 = state_128097;
var ex128401 = (state_128097__$1[(2)]);
var statearr_128421_133460 = state_128097__$1;
(statearr_128421_133460[(5)] = ex128401);


var statearr_128423_133461 = state_128097__$1;
(statearr_128423_133461[(1)] = (31));

(statearr_128423_133461[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128099 === (40))){
var inst_127752 = (state_128097[(2)]);
var state_128097__$1 = (function (){var statearr_128429 = state_128097;
(statearr_128429[(18)] = inst_127752);

return statearr_128429;
})();
var statearr_128430_133464 = state_128097__$1;
(statearr_128430_133464[(2)] = null);

(statearr_128430_133464[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128099 === (56))){
var _ = (function (){var statearr_128432 = state_128097;
(statearr_128432[(4)] = cljs.core.rest((state_128097[(4)])));

return statearr_128432;
})();
var inst_127838 = (state_128097[(2)]);
var inst_127839 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_127840 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_127841 = (new cljs.core.PersistentVector(null,1,(5),inst_127839,inst_127840,null));
var inst_127843 = cljs.test.update_current_env_BANG_(inst_127841,cljs.core.rest);
var ___$1 = (function (){var temp__5753__auto__ = (state_128097[(5)]);
if(cljs.core.truth_(temp__5753__auto__)){
var e__38733__auto__ = temp__5753__auto__;
throw e__38733__auto__;
} else {
return null;
}
})();
var state_128097__$1 = (function (){var statearr_128435 = state_128097;
(statearr_128435[(19)] = inst_127843);

return statearr_128435;
})();
var statearr_128436_133466 = state_128097__$1;
(statearr_128436_133466[(2)] = inst_127838);

(statearr_128436_133466[(1)] = (55));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128099 === (33))){
var inst_127657 = (state_128097[(2)]);
var inst_127658 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id01","id01",-1954134071,null),":foo"], null);
var inst_127659 = cljs.core.list(new cljs.core.Symbol("async","<!","async/<!",-1308982001,null),new cljs.core.Symbol(null,"results","results",506361414,null));
var inst_127661 = cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id01","id01",-1954134071,null),":foo"], null));
var inst_127662 = expectations.compare_expr.cljs$core$IFn$_invoke$arity$4(inst_127658,inst_127657,inst_127661,inst_127659);
var inst_127664 = expectations.__GT_failure_message(inst_127662);
var inst_127666 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_127659)," => ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_127661)].join('');
var inst_127667 = clojure.string.replace(inst_127664,/^.*?\n/,inst_127666);
var inst_127668 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_127669 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_127662);
var inst_127670 = [inst_127669,inst_127661,inst_127659,inst_127667];
var inst_127671 = cljs.core.PersistentHashMap.fromArrays(inst_127668,inst_127670);
var inst_127672 = cljs.test.do_report(inst_127671);
var _ = (function (){var statearr_128440 = state_128097;
(statearr_128440[(4)] = cljs.core.rest((state_128097[(4)])));

return statearr_128440;
})();
var state_128097__$1 = state_128097;
var statearr_128441_133470 = state_128097__$1;
(statearr_128441_133470[(2)] = inst_127672);

(statearr_128441_133470[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128099 === (13))){
var _ = (function (){var statearr_128445 = state_128097;
(statearr_128445[(4)] = cljs.core.rest((state_128097[(4)])));

return statearr_128445;
})();
var inst_127521 = (state_128097[(2)]);
var inst_127523 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_127524 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_127525 = (new cljs.core.PersistentVector(null,1,(5),inst_127523,inst_127524,null));
var inst_127526 = cljs.test.update_current_env_BANG_(inst_127525,cljs.core.rest);
var ___$1 = (function (){var temp__5753__auto__ = (state_128097[(5)]);
if(cljs.core.truth_(temp__5753__auto__)){
var e__38733__auto__ = temp__5753__auto__;
throw e__38733__auto__;
} else {
return null;
}
})();
var state_128097__$1 = (function (){var statearr_128451 = state_128097;
(statearr_128451[(20)] = inst_127526);

return statearr_128451;
})();
var statearr_128454_133473 = state_128097__$1;
(statearr_128454_133473[(2)] = inst_127521);

(statearr_128454_133473[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128099 === (22))){
var inst_127575 = (state_128097[(2)]);
var inst_127576 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_127578 = check.core.normalize_error(inst_127575);
var inst_127580 = cljs.core.list(new cljs.core.Symbol("async","<!","async/<!",-1308982001,null),new cljs.core.Symbol(null,"output","output",534662484,null));
var inst_127581 = new cljs.core.Symbol(null,"=expect=>","=expect=>",-1384225590,null);
var inst_127582 = "[tooling$eval-res id01 \":foo\"]";
var inst_127583 = ["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_127580)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_127581)," ",inst_127582].join('');
var inst_127584 = [new cljs.core.Keyword(null,"error","error",-978969032),"[tooling$eval-res id01 \":foo\"]",inst_127578,inst_127583];
var inst_127585 = cljs.core.PersistentHashMap.fromArrays(inst_127576,inst_127584);
var inst_127586 = cljs.test.do_report(inst_127585);
var state_128097__$1 = state_128097;
var statearr_128459_133474 = state_128097__$1;
(statearr_128459_133474[(2)] = inst_127586);

(statearr_128459_133474[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128099 === (36))){
var inst_127676 = (state_128097[(2)]);
var inst_127677 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_127679 = check.core.normalize_error(inst_127676);
var inst_127681 = cljs.core.list(new cljs.core.Symbol("async","<!","async/<!",-1308982001,null),new cljs.core.Symbol(null,"output","output",534662484,null));
var inst_127682 = new cljs.core.Symbol(null,"=expect=>","=expect=>",-1384225590,null);
var inst_127683 = "lol";
var inst_127684 = ["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_127681)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_127682)," ",inst_127683].join('');
var inst_127685 = [new cljs.core.Keyword(null,"error","error",-978969032),"lol",inst_127679,inst_127684];
var inst_127686 = cljs.core.PersistentHashMap.fromArrays(inst_127677,inst_127685);
var inst_127687 = cljs.test.do_report(inst_127686);
var state_128097__$1 = state_128097;
var statearr_128465_133476 = state_128097__$1;
(statearr_128465_133476[(2)] = inst_127687);

(statearr_128465_133476[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128099 === (41))){
var inst_127714 = (state_128097[(2)]);
var inst_127715 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_127716 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id01","id01",-1954134071,null),":foo"], null);
var inst_127718 = check.core.normalize_error(inst_127714);
var inst_127720 = cljs.core.list(new cljs.core.Symbol("async","<!","async/<!",-1308982001,null),new cljs.core.Symbol(null,"results","results",506361414,null));
var inst_127721 = new cljs.core.Symbol(null,"=expect=>","=expect=>",-1384225590,null);
var inst_127722 = cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id01","id01",-1954134071,null),":foo"], null));
var inst_127723 = ["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_127720)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_127721)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_127722)].join('');
var inst_127724 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_127716,inst_127718,inst_127723];
var inst_127725 = cljs.core.PersistentHashMap.fromArrays(inst_127715,inst_127724);
var inst_127726 = cljs.test.do_report(inst_127725);
var state_128097__$1 = state_128097;
var statearr_128470_133482 = state_128097__$1;
(statearr_128470_133482[(2)] = inst_127726);

(statearr_128470_133482[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128099 === (43))){
var inst_127734 = (state_128097[(2)]);
var inst_127735 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id01","id01",-1954134071,null),":foo"], null);
var inst_127736 = cljs.core.list(new cljs.core.Symbol("async","<!","async/<!",-1308982001,null),new cljs.core.Symbol(null,"results","results",506361414,null));
var inst_127738 = cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id01","id01",-1954134071,null),":foo"], null));
var inst_127739 = expectations.compare_expr.cljs$core$IFn$_invoke$arity$4(inst_127735,inst_127734,inst_127738,inst_127736);
var inst_127740 = expectations.__GT_failure_message(inst_127739);
var inst_127742 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_127736)," => ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_127738)].join('');
var inst_127743 = clojure.string.replace(inst_127740,/^.*?\n/,inst_127742);
var inst_127744 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_127746 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_127739);
var inst_127747 = [inst_127746,inst_127738,inst_127736,inst_127743];
var inst_127748 = cljs.core.PersistentHashMap.fromArrays(inst_127744,inst_127747);
var inst_127749 = cljs.test.do_report(inst_127748);
var _ = (function (){var statearr_128477 = state_128097;
(statearr_128477[(4)] = cljs.core.rest((state_128097[(4)])));

return statearr_128477;
})();
var state_128097__$1 = state_128097;
var statearr_128478_133485 = state_128097__$1;
(statearr_128478_133485[(2)] = inst_127749);

(statearr_128478_133485[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128099 === (61))){
var _ = (function (){var statearr_128479 = state_128097;
(statearr_128479[(4)] = cljs.core.rest((state_128097[(4)])));

return statearr_128479;
})();
var state_128097__$1 = state_128097;
var ex128467 = (state_128097__$1[(2)]);
var statearr_128480_133486 = state_128097__$1;
(statearr_128480_133486[(5)] = ex128467);


var statearr_128481_133489 = state_128097__$1;
(statearr_128481_133489[(1)] = (60));

(statearr_128481_133489[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128099 === (29))){
var _ = (function (){var statearr_128482 = state_128097;
(statearr_128482[(4)] = cljs.core.cons((32),(state_128097[(4)])));

return statearr_128482;
})();
var state_128097__$1 = state_128097;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_128097__$1,(33),results);
} else {
if((state_val_128099 === (44))){
var _ = (function (){var statearr_128486 = state_128097;
(statearr_128486[(4)] = cljs.core.cons((47),(state_128097[(4)])));

return statearr_128486;
})();
var state_128097__$1 = state_128097;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_128097__$1,(48),output);
} else {
if((state_val_128099 === (6))){
var _ = (function (){var statearr_128490 = state_128097;
(statearr_128490[(4)] = cljs.core.cons((9),(state_128097[(4)])));

return statearr_128490;
})();
var state_128097__$1 = state_128097;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_128097__$1,(10),output);
} else {
if((state_val_128099 === (28))){
var _ = (function (){var statearr_128492 = state_128097;
(statearr_128492[(4)] = cljs.core.rest((state_128097[(4)])));

return statearr_128492;
})();
var state_128097__$1 = state_128097;
var ex128484 = (state_128097__$1[(2)]);
var statearr_128494_133494 = state_128097__$1;
(statearr_128494_133494[(5)] = ex128484);


throw ex128484;


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128099 === (64))){
var inst_127929 = (state_128097[(2)]);
var inst_127931 = new cljs.core.Symbol(null,"id01","id01",-1954134071,null);
var inst_127932 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(control,cljs.core.update,new cljs.core.Keyword(null,"pending-evals","pending-evals",1249255957),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_127931], 0));
var inst_127933 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(buffer,cljs.core.conj,"[tooling$eval-res id01 \":foo\"]user.cljs=> bar");
var state_128097__$1 = (function (){var statearr_128496 = state_128097;
(statearr_128496[(21)] = inst_127929);

(statearr_128496[(22)] = inst_127933);

(statearr_128496[(23)] = inst_127932);

return statearr_128496;
})();
var statearr_128498_133496 = state_128097__$1;
(statearr_128498_133496[(2)] = null);

(statearr_128498_133496[(1)] = (68));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128099 === (51))){
var inst_127791 = (state_128097[(2)]);
var inst_127793 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_127794 = check.core.normalize_error(inst_127791);
var inst_127797 = cljs.core.list(new cljs.core.Symbol("async","<!","async/<!",-1308982001,null),new cljs.core.Symbol(null,"output","output",534662484,null));
var inst_127798 = new cljs.core.Symbol(null,"=expect=>","=expect=>",-1384225590,null);
var inst_127799 = "bar";
var inst_127800 = ["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_127797)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_127798)," ",inst_127799].join('');
var inst_127801 = [new cljs.core.Keyword(null,"error","error",-978969032),"bar",inst_127794,inst_127800];
var inst_127802 = cljs.core.PersistentHashMap.fromArrays(inst_127793,inst_127801);
var inst_127803 = cljs.test.do_report(inst_127802);
var state_128097__$1 = state_128097;
var statearr_128501_133498 = state_128097__$1;
(statearr_128501_133498[(2)] = inst_127803);

(statearr_128501_133498[(1)] = (50));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128099 === (25))){
var _ = (function (){var statearr_128504 = state_128097;
(statearr_128504[(4)] = cljs.core.cons((27),(state_128097[(4)])));

return statearr_128504;
})();
var ___$1 = (function (){var statearr_128506 = state_128097;
(statearr_128506[(4)] = cljs.core.cons((28),(state_128097[(4)])));

return statearr_128506;
})();
var inst_127633 = new cljs.core.Symbol(null,"id01","id01",-1954134071,null);
var inst_127634 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(control,cljs.core.update,new cljs.core.Keyword(null,"pending-evals","pending-evals",1249255957),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_127633], 0));
var inst_127635 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(buffer,cljs.core.conj,"lol[tooling$eval-res id01 \":foo\"]");
var state_128097__$1 = (function (){var statearr_128508 = state_128097;
(statearr_128508[(24)] = inst_127634);

(statearr_128508[(25)] = inst_127635);

return statearr_128508;
})();
var statearr_128511_133500 = state_128097__$1;
(statearr_128511_133500[(2)] = null);

(statearr_128511_133500[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128099 === (34))){
var _ = (function (){var statearr_128513 = state_128097;
(statearr_128513[(4)] = cljs.core.cons((37),(state_128097[(4)])));

return statearr_128513;
})();
var state_128097__$1 = state_128097;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_128097__$1,(38),output);
} else {
if((state_val_128099 === (17))){
var inst_127538 = (state_128097[(2)]);
var inst_127539 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_127540 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id01","id01",-1954134071,null),":foo"], null);
var inst_127541 = check.core.normalize_error(inst_127538);
var inst_127542 = cljs.core.list(new cljs.core.Symbol("async","<!","async/<!",-1308982001,null),new cljs.core.Symbol(null,"results","results",506361414,null));
var inst_127543 = new cljs.core.Symbol(null,"=expect=>","=expect=>",-1384225590,null);
var inst_127544 = cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id01","id01",-1954134071,null),":foo"], null));
var inst_127545 = ["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_127542)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_127543)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_127544)].join('');
var inst_127546 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_127540,inst_127541,inst_127545];
var inst_127547 = cljs.core.PersistentHashMap.fromArrays(inst_127539,inst_127546);
var inst_127548 = cljs.test.do_report(inst_127547);
var state_128097__$1 = state_128097;
var statearr_128515_133502 = state_128097__$1;
(statearr_128515_133502[(2)] = inst_127548);

(statearr_128515_133502[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128099 === (3))){
var inst_127514 = (state_128097[(2)]);
var inst_127515 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_127516 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_127517 = (new cljs.core.PersistentVector(null,1,(5),inst_127515,inst_127516,null));
var inst_127518 = cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(inst_127517,cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["captures results of simple evaluations"], 0));
var state_128097__$1 = (function (){var statearr_128517 = state_128097;
(statearr_128517[(26)] = inst_127514);

(statearr_128517[(27)] = inst_127518);

return statearr_128517;
})();
var statearr_128519_133504 = state_128097__$1;
(statearr_128519_133504[(2)] = null);

(statearr_128519_133504[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128099 === (12))){
var inst_127614 = (state_128097[(2)]);
var inst_127616 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_127617 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_127618 = (new cljs.core.PersistentVector(null,1,(5),inst_127616,inst_127617,null));
var inst_127619 = cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(inst_127618,cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["captures results of results mixed with stdout"], 0));
var state_128097__$1 = (function (){var statearr_128523 = state_128097;
(statearr_128523[(28)] = inst_127614);

(statearr_128523[(29)] = inst_127619);

return statearr_128523;
})();
var statearr_128524_133505 = state_128097__$1;
(statearr_128524_133505[(2)] = null);

(statearr_128524_133505[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128099 === (2))){
var _ = (function (){var statearr_128528 = state_128097;
(statearr_128528[(4)] = cljs.core.cons((4),(state_128097[(4)])));

return statearr_128528;
})();
var ___$1 = (function (){var statearr_128530 = state_128097;
(statearr_128530[(4)] = cljs.core.cons((5),(state_128097[(4)])));

return statearr_128530;
})();
var inst_127476 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(buffer,cljs.core.conj,":foobar");
var state_128097__$1 = (function (){var statearr_128532 = state_128097;
(statearr_128532[(30)] = inst_127476);

return statearr_128532;
})();
var statearr_128534_133508 = state_128097__$1;
(statearr_128534_133508[(2)] = null);

(statearr_128534_133508[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128099 === (66))){
var _ = (function (){var statearr_128537 = state_128097;
(statearr_128537[(4)] = cljs.core.rest((state_128097[(4)])));

return statearr_128537;
})();
var state_128097__$1 = state_128097;
var ex128521 = (state_128097__$1[(2)]);
var statearr_128538_133509 = state_128097__$1;
(statearr_128538_133509[(5)] = ex128521);


var statearr_128540_133510 = state_128097__$1;
(statearr_128540_133510[(1)] = (65));

(statearr_128540_133510[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128099 === (23))){
var _ = (function (){var statearr_128542 = state_128097;
(statearr_128542[(4)] = cljs.core.rest((state_128097[(4)])));

return statearr_128542;
})();
var state_128097__$1 = state_128097;
var ex128526 = (state_128097__$1[(2)]);
var statearr_128545_133511 = state_128097__$1;
(statearr_128545_133511[(5)] = ex128526);


var statearr_128546_133512 = state_128097__$1;
(statearr_128546_133512[(1)] = (22));

(statearr_128546_133512[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128099 === (47))){
var _ = (function (){var statearr_128549 = state_128097;
(statearr_128549[(4)] = cljs.core.rest((state_128097[(4)])));

return statearr_128549;
})();
var state_128097__$1 = state_128097;
var ex128535 = (state_128097__$1[(2)]);
var statearr_128552_133515 = state_128097__$1;
(statearr_128552_133515[(5)] = ex128535);


var statearr_128554_133516 = state_128097__$1;
(statearr_128554_133516[(1)] = (46));

(statearr_128554_133516[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128099 === (35))){
var inst_127709 = (state_128097[(2)]);
var inst_127710 = new cljs.core.Symbol(null,"id01","id01",-1954134071,null);
var inst_127711 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(control,cljs.core.update,new cljs.core.Keyword(null,"pending-evals","pending-evals",1249255957),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_127710], 0));
var inst_127712 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(buffer,cljs.core.conj,"lol[tooling$eval-res id01 \":foo\"]bar");
var state_128097__$1 = (function (){var statearr_128566 = state_128097;
(statearr_128566[(31)] = inst_127711);

(statearr_128566[(32)] = inst_127712);

(statearr_128566[(33)] = inst_127709);

return statearr_128566;
})();
var statearr_128570_133519 = state_128097__$1;
(statearr_128570_133519[(2)] = null);

(statearr_128570_133519[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128099 === (82))){
var _ = (function (){var statearr_128573 = state_128097;
(statearr_128573[(4)] = cljs.core.cons((85),(state_128097[(4)])));

return statearr_128573;
})();
var state_128097__$1 = state_128097;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_128097__$1,(86),results);
} else {
if((state_val_128099 === (76))){
var _ = (function (){var statearr_128577 = state_128097;
(statearr_128577[(4)] = cljs.core.rest((state_128097[(4)])));

return statearr_128577;
})();
var state_128097__$1 = state_128097;
var ex128560 = (state_128097__$1[(2)]);
var statearr_128580_133523 = state_128097__$1;
(statearr_128580_133523[(5)] = ex128560);


var statearr_128581_133524 = state_128097__$1;
(statearr_128581_133524[(1)] = (75));

(statearr_128581_133524[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128099 === (19))){
var inst_127556 = (state_128097[(2)]);
var inst_127557 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id01","id01",-1954134071,null),":foo"], null);
var inst_127558 = cljs.core.list(new cljs.core.Symbol("async","<!","async/<!",-1308982001,null),new cljs.core.Symbol(null,"results","results",506361414,null));
var inst_127559 = cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id01","id01",-1954134071,null),":foo"], null));
var inst_127560 = expectations.compare_expr.cljs$core$IFn$_invoke$arity$4(inst_127557,inst_127556,inst_127559,inst_127558);
var inst_127561 = expectations.__GT_failure_message(inst_127560);
var inst_127563 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_127558)," => ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_127559)].join('');
var inst_127564 = clojure.string.replace(inst_127561,/^.*?\n/,inst_127563);
var inst_127565 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_127566 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_127560);
var inst_127567 = [inst_127566,inst_127559,inst_127558,inst_127564];
var inst_127568 = cljs.core.PersistentHashMap.fromArrays(inst_127565,inst_127567);
var inst_127569 = cljs.test.do_report(inst_127568);
var _ = (function (){var statearr_128587 = state_128097;
(statearr_128587[(4)] = cljs.core.rest((state_128097[(4)])));

return statearr_128587;
})();
var state_128097__$1 = state_128097;
var statearr_128589_133527 = state_128097__$1;
(statearr_128589_133527[(2)] = inst_127569);

(statearr_128589_133527[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128099 === (57))){
var _ = (function (){var statearr_128591 = state_128097;
(statearr_128591[(4)] = cljs.core.rest((state_128097[(4)])));

return statearr_128591;
})();
var state_128097__$1 = state_128097;
var ex128575 = (state_128097__$1[(2)]);
var statearr_128594_133528 = state_128097__$1;
(statearr_128594_133528[(5)] = ex128575);


throw ex128575;


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128099 === (68))){
var _ = (function (){var statearr_128597 = state_128097;
(statearr_128597[(4)] = cljs.core.cons((71),(state_128097[(4)])));

return statearr_128597;
})();
var state_128097__$1 = state_128097;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_128097__$1,(72),results);
} else {
if((state_val_128099 === (11))){
var _ = (function (){var statearr_128604 = state_128097;
(statearr_128604[(4)] = cljs.core.cons((13),(state_128097[(4)])));

return statearr_128604;
})();
var ___$1 = (function (){var statearr_128606 = state_128097;
(statearr_128606[(4)] = cljs.core.cons((14),(state_128097[(4)])));

return statearr_128606;
})();
var inst_127535 = new cljs.core.Symbol(null,"id01","id01",-1954134071,null);
var inst_127536 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(control,cljs.core.update,new cljs.core.Keyword(null,"pending-evals","pending-evals",1249255957),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_127535], 0));
var inst_127537 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(buffer,cljs.core.conj,"[tooling$eval-res id01 \":foo\"]");
var state_128097__$1 = (function (){var statearr_128609 = state_128097;
(statearr_128609[(34)] = inst_127536);

(statearr_128609[(35)] = inst_127537);

return statearr_128609;
})();
var statearr_128611_133529 = state_128097__$1;
(statearr_128611_133529[(2)] = null);

(statearr_128611_133529[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128099 === (9))){
var _ = (function (){var statearr_128613 = state_128097;
(statearr_128613[(4)] = cljs.core.rest((state_128097[(4)])));

return statearr_128613;
})();
var state_128097__$1 = state_128097;
var ex128596 = (state_128097__$1[(2)]);
var statearr_128617_133530 = state_128097__$1;
(statearr_128617_133530[(5)] = ex128596);


var statearr_128620_133531 = state_128097__$1;
(statearr_128620_133531[(1)] = (8));

(statearr_128620_133531[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128099 === (5))){
var _ = (function (){var statearr_128624 = state_128097;
(statearr_128624[(4)] = cljs.core.rest((state_128097[(4)])));

return statearr_128624;
})();
var state_128097__$1 = state_128097;
var ex128602 = (state_128097__$1[(2)]);
var statearr_128626_133532 = state_128097__$1;
(statearr_128626_133532[(5)] = ex128602);


throw ex128602;


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128099 === (83))){
var inst_128077 = (state_128097[(2)]);
var _ = (function (){var statearr_128629 = state_128097;
(statearr_128629[(4)] = cljs.core.rest((state_128097[(4)])));

return statearr_128629;
})();
var state_128097__$1 = state_128097;
var statearr_128632_133533 = state_128097__$1;
(statearr_128632_133533[(2)] = inst_128077);

(statearr_128632_133533[(1)] = (80));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128099 === (14))){
var _ = (function (){var statearr_128638 = state_128097;
(statearr_128638[(4)] = cljs.core.rest((state_128097[(4)])));

return statearr_128638;
})();
var state_128097__$1 = state_128097;
var ex128621 = (state_128097__$1[(2)]);
var statearr_128641_133534 = state_128097__$1;
(statearr_128641_133534[(5)] = ex128621);


throw ex128621;


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128099 === (45))){
var inst_127788 = (state_128097[(2)]);
var state_128097__$1 = (function (){var statearr_128645 = state_128097;
(statearr_128645[(36)] = inst_127788);

return statearr_128645;
})();
var statearr_128646_133535 = state_128097__$1;
(statearr_128646_133535[(2)] = null);

(statearr_128646_133535[(1)] = (49));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128099 === (53))){
var inst_127810 = (state_128097[(2)]);
var inst_127811 = cljs.core.list(new cljs.core.Symbol("async","<!","async/<!",-1308982001,null),new cljs.core.Symbol(null,"output","output",534662484,null));
var inst_127813 = "bar";
var inst_127814 = expectations.compare_expr.cljs$core$IFn$_invoke$arity$4("bar",inst_127810,inst_127813,inst_127811);
var inst_127816 = expectations.__GT_failure_message(inst_127814);
var inst_127818 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_127811)," => ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_127813)].join('');
var inst_127819 = clojure.string.replace(inst_127816,/^.*?\n/,inst_127818);
var inst_127820 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_127821 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_127814);
var inst_127822 = [inst_127821,inst_127813,inst_127811,inst_127819];
var inst_127823 = cljs.core.PersistentHashMap.fromArrays(inst_127820,inst_127822);
var inst_127824 = cljs.test.do_report(inst_127823);
var _ = (function (){var statearr_128656 = state_128097;
(statearr_128656[(4)] = cljs.core.rest((state_128097[(4)])));

return statearr_128656;
})();
var state_128097__$1 = state_128097;
var statearr_128658_133538 = state_128097__$1;
(statearr_128658_133538[(2)] = inst_127824);

(statearr_128658_133538[(1)] = (50));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128099 === (78))){
var _ = (function (){var statearr_128661 = state_128097;
(statearr_128661[(4)] = cljs.core.cons((80),(state_128097[(4)])));

return statearr_128661;
})();
var ___$1 = (function (){var statearr_128663 = state_128097;
(statearr_128663[(4)] = cljs.core.cons((81),(state_128097[(4)])));

return statearr_128663;
})();
var inst_128032 = new cljs.core.Symbol(null,"id02","id02",365882140,null);
var inst_128033 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(control,cljs.core.update,new cljs.core.Keyword(null,"pending-evals","pending-evals",1249255957),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_128032], 0));
var inst_128034 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(buffer,cljs.core.conj,"[tooling$eval-res id02 \"[\n");
var inst_128035 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(buffer,cljs.core.conj,"1 2\n");
var inst_128036 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(buffer,cljs.core.conj,"]\"]");
var state_128097__$1 = (function (){var statearr_128665 = state_128097;
(statearr_128665[(37)] = inst_128033);

(statearr_128665[(38)] = inst_128036);

(statearr_128665[(39)] = inst_128034);

(statearr_128665[(40)] = inst_128035);

return statearr_128665;
})();
var statearr_128668_133539 = state_128097__$1;
(statearr_128668_133539[(2)] = null);

(statearr_128668_133539[(1)] = (82));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128099 === (26))){
var inst_127831 = (state_128097[(2)]);
var inst_127833 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_127834 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_127835 = (new cljs.core.PersistentVector(null,1,(5),inst_127833,inst_127834,null));
var inst_127836 = cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(inst_127835,cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["ignores prompt after a result"], 0));
var state_128097__$1 = (function (){var statearr_128673 = state_128097;
(statearr_128673[(41)] = inst_127831);

(statearr_128673[(42)] = inst_127836);

return statearr_128673;
})();
var statearr_128677_133540 = state_128097__$1;
(statearr_128677_133540[(2)] = null);

(statearr_128677_133540[(1)] = (54));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128099 === (16))){
var inst_127572 = (state_128097[(2)]);
var inst_127573 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(buffer,cljs.core.conj,"[tooling$eval-res id01 \":foo\"]");
var state_128097__$1 = (function (){var statearr_128680 = state_128097;
(statearr_128680[(43)] = inst_127572);

(statearr_128680[(44)] = inst_127573);

return statearr_128680;
})();
var statearr_128681_133541 = state_128097__$1;
(statearr_128681_133541[(2)] = null);

(statearr_128681_133541[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128099 === (81))){
var _ = (function (){var statearr_128684 = state_128097;
(statearr_128684[(4)] = cljs.core.rest((state_128097[(4)])));

return statearr_128684;
})();
var state_128097__$1 = state_128097;
var ex128670 = (state_128097__$1[(2)]);
var statearr_128689_133542 = state_128097__$1;
(statearr_128689_133542[(5)] = ex128670);


throw ex128670;


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128099 === (79))){
var inst_128080 = (state_128097[(2)]);
var inst_128081 = cljs.core.async.close_BANG_(output);
var inst_128082 = cljs.core.async.close_BANG_(results);
var inst_128083 = (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
var state_128097__$1 = (function (){var statearr_128690 = state_128097;
(statearr_128690[(45)] = inst_128082);

(statearr_128690[(46)] = inst_128081);

(statearr_128690[(47)] = inst_128080);

return statearr_128690;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_128097__$1,inst_128083);
} else {
if((state_val_128099 === (38))){
var inst_127694 = (state_128097[(2)]);
var inst_127695 = cljs.core.list(new cljs.core.Symbol("async","<!","async/<!",-1308982001,null),new cljs.core.Symbol(null,"output","output",534662484,null));
var inst_127696 = "lol";
var inst_127697 = expectations.compare_expr.cljs$core$IFn$_invoke$arity$4("lol",inst_127694,inst_127696,inst_127695);
var inst_127698 = expectations.__GT_failure_message(inst_127697);
var inst_127699 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_127695)," => ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_127696)].join('');
var inst_127700 = clojure.string.replace(inst_127698,/^.*?\n/,inst_127699);
var inst_127702 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_127703 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_127697);
var inst_127704 = [inst_127703,inst_127696,inst_127695,inst_127700];
var inst_127705 = cljs.core.PersistentHashMap.fromArrays(inst_127702,inst_127704);
var inst_127706 = cljs.test.do_report(inst_127705);
var _ = (function (){var statearr_128694 = state_128097;
(statearr_128694[(4)] = cljs.core.rest((state_128097[(4)])));

return statearr_128694;
})();
var state_128097__$1 = state_128097;
var statearr_128696_133543 = state_128097__$1;
(statearr_128696_133543[(2)] = inst_127706);

(statearr_128696_133543[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128099 === (30))){
var inst_127675 = (state_128097[(2)]);
var state_128097__$1 = (function (){var statearr_128699 = state_128097;
(statearr_128699[(48)] = inst_127675);

return statearr_128699;
})();
var statearr_128700_133546 = state_128097__$1;
(statearr_128700_133546[(2)] = null);

(statearr_128700_133546[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128099 === (73))){
var _ = (function (){var statearr_128703 = state_128097;
(statearr_128703[(4)] = cljs.core.cons((76),(state_128097[(4)])));

return statearr_128703;
})();
var state_128097__$1 = state_128097;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_128097__$1,(77),output);
} else {
if((state_val_128099 === (10))){
var inst_127496 = (state_128097[(2)]);
var inst_127497 = cljs.core.list(new cljs.core.Symbol("async","<!","async/<!",-1308982001,null),new cljs.core.Symbol(null,"output","output",534662484,null));
var inst_127498 = ":foobar";
var inst_127499 = expectations.compare_expr.cljs$core$IFn$_invoke$arity$4(":foobar",inst_127496,inst_127498,inst_127497);
var inst_127500 = expectations.__GT_failure_message(inst_127499);
var inst_127502 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_127497)," => ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_127498)].join('');
var inst_127503 = clojure.string.replace(inst_127500,/^.*?\n/,inst_127502);
var inst_127504 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_127505 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_127499);
var inst_127506 = [inst_127505,inst_127498,inst_127497,inst_127503];
var inst_127507 = cljs.core.PersistentHashMap.fromArrays(inst_127504,inst_127506);
var inst_127508 = cljs.test.do_report(inst_127507);
var _ = (function (){var statearr_128710 = state_128097;
(statearr_128710[(4)] = cljs.core.rest((state_128097[(4)])));

return statearr_128710;
})();
var state_128097__$1 = state_128097;
var statearr_128712_133547 = state_128097__$1;
(statearr_128712_133547[(2)] = inst_127508);

(statearr_128712_133547[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128099 === (18))){
var _ = (function (){var statearr_128714 = state_128097;
(statearr_128714[(4)] = cljs.core.rest((state_128097[(4)])));

return statearr_128714;
})();
var state_128097__$1 = state_128097;
var ex128702 = (state_128097__$1[(2)]);
var statearr_128715_133548 = state_128097__$1;
(statearr_128715_133548[(5)] = ex128702);


var statearr_128716_133549 = state_128097__$1;
(statearr_128716_133549[(1)] = (17));

(statearr_128716_133549[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128099 === (52))){
var _ = (function (){var statearr_128722 = state_128097;
(statearr_128722[(4)] = cljs.core.rest((state_128097[(4)])));

return statearr_128722;
})();
var state_128097__$1 = state_128097;
var ex128705 = (state_128097__$1[(2)]);
var statearr_128724_133550 = state_128097__$1;
(statearr_128724_133550[(5)] = ex128705);


var statearr_128725_133551 = state_128097__$1;
(statearr_128725_133551[(1)] = (51));

(statearr_128725_133551[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128099 === (67))){
var inst_127914 = (state_128097[(2)]);
var inst_127915 = cljs.core.list(new cljs.core.Symbol("async","<!","async/<!",-1308982001,null),new cljs.core.Symbol(null,"output","output",534662484,null));
var inst_127916 = "lol";
var inst_127917 = expectations.compare_expr.cljs$core$IFn$_invoke$arity$4("lol",inst_127914,inst_127916,inst_127915);
var inst_127918 = expectations.__GT_failure_message(inst_127917);
var inst_127920 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_127915)," => ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_127916)].join('');
var inst_127921 = clojure.string.replace(inst_127918,/^.*?\n/,inst_127920);
var inst_127922 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_127923 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_127917);
var inst_127924 = [inst_127923,inst_127916,inst_127915,inst_127921];
var inst_127925 = cljs.core.PersistentHashMap.fromArrays(inst_127922,inst_127924);
var inst_127926 = cljs.test.do_report(inst_127925);
var _ = (function (){var statearr_128733 = state_128097;
(statearr_128733[(4)] = cljs.core.rest((state_128097[(4)])));

return statearr_128733;
})();
var state_128097__$1 = state_128097;
var statearr_128734_133552 = state_128097__$1;
(statearr_128734_133552[(2)] = inst_127926);

(statearr_128734_133552[(1)] = (64));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128099 === (71))){
var _ = (function (){var statearr_128735 = state_128097;
(statearr_128735[(4)] = cljs.core.rest((state_128097[(4)])));

return statearr_128735;
})();
var state_128097__$1 = state_128097;
var ex128719 = (state_128097__$1[(2)]);
var statearr_128737_133553 = state_128097__$1;
(statearr_128737_133553[(5)] = ex128719);


var statearr_128738_133554 = state_128097__$1;
(statearr_128738_133554[(1)] = (70));

(statearr_128738_133554[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128099 === (42))){
var _ = (function (){var statearr_128741 = state_128097;
(statearr_128741[(4)] = cljs.core.rest((state_128097[(4)])));

return statearr_128741;
})();
var state_128097__$1 = state_128097;
var ex128727 = (state_128097__$1[(2)]);
var statearr_128744_133557 = state_128097__$1;
(statearr_128744_133557[(5)] = ex128727);


var statearr_128745_133558 = state_128097__$1;
(statearr_128745_133558[(1)] = (41));

(statearr_128745_133558[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128099 === (80))){
var _ = (function (){var statearr_128747 = state_128097;
(statearr_128747[(4)] = cljs.core.rest((state_128097[(4)])));

return statearr_128747;
})();
var inst_128017 = (state_128097[(2)]);
var inst_128018 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_128019 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_128020 = (new cljs.core.PersistentVector(null,1,(5),inst_128018,inst_128019,null));
var inst_128022 = cljs.test.update_current_env_BANG_(inst_128020,cljs.core.rest);
var ___$1 = (function (){var temp__5753__auto__ = (state_128097[(5)]);
if(cljs.core.truth_(temp__5753__auto__)){
var e__38733__auto__ = temp__5753__auto__;
throw e__38733__auto__;
} else {
return null;
}
})();
var state_128097__$1 = (function (){var statearr_128751 = state_128097;
(statearr_128751[(49)] = inst_128022);

return statearr_128751;
})();
var statearr_128753_133559 = state_128097__$1;
(statearr_128753_133559[(2)] = inst_128017);

(statearr_128753_133559[(1)] = (79));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128099 === (37))){
var _ = (function (){var statearr_128755 = state_128097;
(statearr_128755[(4)] = cljs.core.rest((state_128097[(4)])));

return statearr_128755;
})();
var state_128097__$1 = state_128097;
var ex128739 = (state_128097__$1[(2)]);
var statearr_128757_133560 = state_128097__$1;
(statearr_128757_133560[(5)] = ex128739);


var statearr_128758_133561 = state_128097__$1;
(statearr_128758_133561[(1)] = (36));

(statearr_128758_133561[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128099 === (63))){
var _ = (function (){var statearr_128760 = state_128097;
(statearr_128760[(4)] = cljs.core.cons((66),(state_128097[(4)])));

return statearr_128760;
})();
var state_128097__$1 = state_128097;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_128097__$1,(67),output);
} else {
if((state_val_128099 === (8))){
var inst_127478 = (state_128097[(2)]);
var inst_127479 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_127481 = check.core.normalize_error(inst_127478);
var inst_127482 = cljs.core.list(new cljs.core.Symbol("async","<!","async/<!",-1308982001,null),new cljs.core.Symbol(null,"output","output",534662484,null));
var inst_127483 = new cljs.core.Symbol(null,"=expect=>","=expect=>",-1384225590,null);
var inst_127484 = ":foobar";
var inst_127485 = ["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_127482)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_127483)," ",inst_127484].join('');
var inst_127486 = [new cljs.core.Keyword(null,"error","error",-978969032),":foobar",inst_127481,inst_127485];
var inst_127487 = cljs.core.PersistentHashMap.fromArrays(inst_127479,inst_127486);
var inst_127488 = cljs.test.do_report(inst_127487);
var state_128097__$1 = state_128097;
var statearr_128765_133562 = state_128097__$1;
(statearr_128765_133562[(2)] = inst_127488);

(statearr_128765_133562[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128099 === (49))){
var _ = (function (){var statearr_128767 = state_128097;
(statearr_128767[(4)] = cljs.core.cons((52),(state_128097[(4)])));

return statearr_128767;
})();
var state_128097__$1 = state_128097;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_128097__$1,(53),output);
} else {
if((state_val_128099 === (84))){
var inst_128037 = (state_128097[(2)]);
var inst_128038 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_128040 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id02","id02",365882140,null),"[\n1 2\n]"], null);
var inst_128041 = check.core.normalize_error(inst_128037);
var inst_128042 = cljs.core.list(new cljs.core.Symbol("async","<!","async/<!",-1308982001,null),new cljs.core.Symbol(null,"results","results",506361414,null));
var inst_128043 = new cljs.core.Symbol(null,"=expect=>","=expect=>",-1384225590,null);
var inst_128044 = cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id02","id02",365882140,null),"[\n1 2\n]"], null));
var inst_128045 = ["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_128042)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_128043)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_128044)].join('');
var inst_128046 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_128040,inst_128041,inst_128045];
var inst_128047 = cljs.core.PersistentHashMap.fromArrays(inst_128038,inst_128046);
var inst_128048 = cljs.test.do_report(inst_128047);
var state_128097__$1 = state_128097;
var statearr_128772_133566 = state_128097__$1;
(statearr_128772_133566[(2)] = inst_128048);

(statearr_128772_133566[(1)] = (83));


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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
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
var repl_tooling$repl_client$connection_test$state_machine__39695__auto__ = null;
var repl_tooling$repl_client$connection_test$state_machine__39695__auto____0 = (function (){
var statearr_128781 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_128781[(0)] = repl_tooling$repl_client$connection_test$state_machine__39695__auto__);

(statearr_128781[(1)] = (1));

return statearr_128781;
});
var repl_tooling$repl_client$connection_test$state_machine__39695__auto____1 = (function (state_128097){
while(true){
var ret_value__39696__auto__ = (function (){try{while(true){
var result__39697__auto__ = switch__39694__auto__(state_128097);
if(cljs.core.keyword_identical_QMARK_(result__39697__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39697__auto__;
}
break;
}
}catch (e128785){var ex__39698__auto__ = e128785;
var statearr_128786_133569 = state_128097;
(statearr_128786_133569[(2)] = ex__39698__auto__);


if(cljs.core.seq((state_128097[(4)]))){
var statearr_128790_133570 = state_128097;
(statearr_128790_133570[(1)] = cljs.core.first((state_128097[(4)])));

} else {
throw ex__39698__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__133571 = state_128097;
state_128097 = G__133571;
continue;
} else {
return ret_value__39696__auto__;
}
break;
}
});
repl_tooling$repl_client$connection_test$state_machine__39695__auto__ = function(state_128097){
switch(arguments.length){
case 0:
return repl_tooling$repl_client$connection_test$state_machine__39695__auto____0.call(this);
case 1:
return repl_tooling$repl_client$connection_test$state_machine__39695__auto____1.call(this,state_128097);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
repl_tooling$repl_client$connection_test$state_machine__39695__auto__.cljs$core$IFn$_invoke$arity$0 = repl_tooling$repl_client$connection_test$state_machine__39695__auto____0;
repl_tooling$repl_client$connection_test$state_machine__39695__auto__.cljs$core$IFn$_invoke$arity$1 = repl_tooling$repl_client$connection_test$state_machine__39695__auto____1;
return repl_tooling$repl_client$connection_test$state_machine__39695__auto__;
})()
})();
var state__39771__auto__ = (function (){var statearr_128794 = f__39770__auto__();
(statearr_128794[(6)] = c__39769__auto__);

return statearr_128794;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39771__auto__);
}));

return c__39769__auto__;
}));

(repl_tooling.repl_client.connection_test.t_repl_tooling$repl_client$connection_test127440.prototype.apply = (function (self__,args127444){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args127444)));
}));

(repl_tooling.repl_client.connection_test.t_repl_tooling$repl_client$connection_test127440.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___9200__auto__ = this;
var buffer = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
var output = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var control = repl_tooling.repl_client.connection.treat_buffer_BANG_(buffer,cljs.core.identity,cljs.core.identity);
var c__39769__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__39770__auto__ = (function (){var switch__39694__auto__ = (function (state_129417){
var state_val_129420 = (state_129417[(1)]);
if((state_val_129420 === (65))){
var inst_129231 = (state_129417[(2)]);
var inst_129232 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_129234 = check.core.normalize_error(inst_129231);
var inst_129235 = cljs.core.list(new cljs.core.Symbol("async","<!","async/<!",-1308982001,null),new cljs.core.Symbol(null,"output","output",534662484,null));
var inst_129236 = new cljs.core.Symbol(null,"=expect=>","=expect=>",-1384225590,null);
var inst_129237 = "lol";
var inst_129238 = ["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_129235)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_129236)," ",inst_129237].join('');
var inst_129239 = [new cljs.core.Keyword(null,"error","error",-978969032),"lol",inst_129234,inst_129238];
var inst_129240 = cljs.core.PersistentHashMap.fromArrays(inst_129232,inst_129239);
var inst_129241 = cljs.test.do_report(inst_129240);
var state_129417__$1 = state_129417;
var statearr_129425_133573 = state_129417__$1;
(statearr_129425_133573[(2)] = inst_129241);

(statearr_129425_133573[(1)] = (64));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129420 === (70))){
var inst_129269 = (state_129417[(2)]);
var inst_129270 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_129271 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id01","id01",-1954134071,null),":foo"], null);
var inst_129272 = check.core.normalize_error(inst_129269);
var inst_129274 = cljs.core.list(new cljs.core.Symbol("async","<!","async/<!",-1308982001,null),new cljs.core.Symbol(null,"results","results",506361414,null));
var inst_129275 = new cljs.core.Symbol(null,"=expect=>","=expect=>",-1384225590,null);
var inst_129276 = cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id01","id01",-1954134071,null),":foo"], null));
var inst_129277 = ["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_129274)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_129275)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_129276)].join('');
var inst_129278 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_129271,inst_129272,inst_129277];
var inst_129279 = cljs.core.PersistentHashMap.fromArrays(inst_129270,inst_129278);
var inst_129280 = cljs.test.do_report(inst_129279);
var state_129417__$1 = state_129417;
var statearr_129429_133575 = state_129417__$1;
(statearr_129429_133575[(2)] = inst_129280);

(statearr_129429_133575[(1)] = (69));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129420 === (62))){
var inst_129214 = (state_129417[(2)]);
var inst_129215 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id01","id01",-1954134071,null),":foo"], null);
var inst_129216 = cljs.core.list(new cljs.core.Symbol("async","<!","async/<!",-1308982001,null),new cljs.core.Symbol(null,"results","results",506361414,null));
var inst_129217 = cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id01","id01",-1954134071,null),":foo"], null));
var inst_129218 = expectations.compare_expr.cljs$core$IFn$_invoke$arity$4(inst_129215,inst_129214,inst_129217,inst_129216);
var inst_129219 = expectations.__GT_failure_message(inst_129218);
var inst_129220 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_129216)," => ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_129217)].join('');
var inst_129221 = clojure.string.replace(inst_129219,/^.*?\n/,inst_129220);
var inst_129223 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_129224 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_129218);
var inst_129225 = [inst_129224,inst_129217,inst_129216,inst_129221];
var inst_129226 = cljs.core.PersistentHashMap.fromArrays(inst_129223,inst_129225);
var inst_129227 = cljs.test.do_report(inst_129226);
var _ = (function (){var statearr_129436 = state_129417;
(statearr_129436[(4)] = cljs.core.rest((state_129417[(4)])));

return statearr_129436;
})();
var state_129417__$1 = state_129417;
var statearr_129437_133581 = state_129417__$1;
(statearr_129437_133581[(2)] = inst_129227);

(statearr_129437_133581[(1)] = (59));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129420 === (74))){
var inst_129336 = (state_129417[(2)]);
var _ = (function (){var statearr_129440 = state_129417;
(statearr_129440[(4)] = cljs.core.rest((state_129417[(4)])));

return statearr_129440;
})();
var state_129417__$1 = state_129417;
var statearr_129442_133582 = state_129417__$1;
(statearr_129442_133582[(2)] = inst_129336);

(statearr_129442_133582[(1)] = (56));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129420 === (7))){
var inst_128862 = (state_129417[(2)]);
var _ = (function (){var statearr_129445 = state_129417;
(statearr_129445[(4)] = cljs.core.rest((state_129417[(4)])));

return statearr_129445;
})();
var state_129417__$1 = state_129417;
var statearr_129446_133583 = state_129417__$1;
(statearr_129446_133583[(2)] = inst_128862);

(statearr_129446_133583[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129420 === (59))){
var inst_129230 = (state_129417[(2)]);
var state_129417__$1 = (function (){var statearr_129451 = state_129417;
(statearr_129451[(7)] = inst_129230);

return statearr_129451;
})();
var statearr_129452_133584 = state_129417__$1;
(statearr_129452_133584[(2)] = null);

(statearr_129452_133584[(1)] = (63));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129420 === (86))){
var inst_129383 = (state_129417[(2)]);
var inst_129384 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id02","id02",365882140,null),"[\n1 2\n]"], null);
var inst_129385 = cljs.core.list(new cljs.core.Symbol("async","<!","async/<!",-1308982001,null),new cljs.core.Symbol(null,"results","results",506361414,null));
var inst_129386 = cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id02","id02",365882140,null),"[\n1 2\n]"], null));
var inst_129387 = expectations.compare_expr.cljs$core$IFn$_invoke$arity$4(inst_129384,inst_129383,inst_129386,inst_129385);
var inst_129388 = expectations.__GT_failure_message(inst_129387);
var inst_129389 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_129385)," => ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_129386)].join('');
var inst_129390 = clojure.string.replace(inst_129388,/^.*?\n/,inst_129389);
var inst_129391 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_129392 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_129387);
var inst_129393 = [inst_129392,inst_129386,inst_129385,inst_129390];
var inst_129394 = cljs.core.PersistentHashMap.fromArrays(inst_129391,inst_129393);
var inst_129395 = cljs.test.do_report(inst_129394);
var _ = (function (){var statearr_129456 = state_129417;
(statearr_129456[(4)] = cljs.core.rest((state_129417[(4)])));

return statearr_129456;
})();
var state_129417__$1 = state_129417;
var statearr_129457_133585 = state_129417__$1;
(statearr_129457_133585[(2)] = inst_129395);

(statearr_129457_133585[(1)] = (83));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129420 === (20))){
var _ = (function (){var statearr_129458 = state_129417;
(statearr_129458[(4)] = cljs.core.cons((23),(state_129417[(4)])));

return statearr_129458;
})();
var state_129417__$1 = state_129417;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_129417__$1,(24),output);
} else {
if((state_val_129420 === (72))){
var inst_129288 = (state_129417[(2)]);
var inst_129289 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id01","id01",-1954134071,null),":foo"], null);
var inst_129290 = cljs.core.list(new cljs.core.Symbol("async","<!","async/<!",-1308982001,null),new cljs.core.Symbol(null,"results","results",506361414,null));
var inst_129291 = cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id01","id01",-1954134071,null),":foo"], null));
var inst_129292 = expectations.compare_expr.cljs$core$IFn$_invoke$arity$4(inst_129289,inst_129288,inst_129291,inst_129290);
var inst_129293 = expectations.__GT_failure_message(inst_129292);
var inst_129294 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_129290)," => ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_129291)].join('');
var inst_129295 = clojure.string.replace(inst_129293,/^.*?\n/,inst_129294);
var inst_129296 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_129297 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_129292);
var inst_129298 = [inst_129297,inst_129291,inst_129290,inst_129295];
var inst_129299 = cljs.core.PersistentHashMap.fromArrays(inst_129296,inst_129298);
var inst_129301 = cljs.test.do_report(inst_129299);
var _ = (function (){var statearr_129468 = state_129417;
(statearr_129468[(4)] = cljs.core.rest((state_129417[(4)])));

return statearr_129468;
})();
var state_129417__$1 = state_129417;
var statearr_129470_133586 = state_129417__$1;
(statearr_129470_133586[(2)] = inst_129301);

(statearr_129470_133586[(1)] = (69));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129420 === (58))){
var _ = (function (){var statearr_129474 = state_129417;
(statearr_129474[(4)] = cljs.core.cons((61),(state_129417[(4)])));

return statearr_129474;
})();
var state_129417__$1 = state_129417;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_129417__$1,(62),results);
} else {
if((state_val_129420 === (60))){
var inst_129195 = (state_129417[(2)]);
var inst_129196 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_129197 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id01","id01",-1954134071,null),":foo"], null);
var inst_129198 = check.core.normalize_error(inst_129195);
var inst_129199 = cljs.core.list(new cljs.core.Symbol("async","<!","async/<!",-1308982001,null),new cljs.core.Symbol(null,"results","results",506361414,null));
var inst_129200 = new cljs.core.Symbol(null,"=expect=>","=expect=>",-1384225590,null);
var inst_129201 = cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id01","id01",-1954134071,null),":foo"], null));
var inst_129202 = ["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_129199)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_129200)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_129201)].join('');
var inst_129203 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_129197,inst_129198,inst_129202];
var inst_129204 = cljs.core.PersistentHashMap.fromArrays(inst_129196,inst_129203);
var inst_129205 = cljs.test.do_report(inst_129204);
var state_129417__$1 = state_129417;
var statearr_129480_133591 = state_129417__$1;
(statearr_129480_133591[(2)] = inst_129205);

(statearr_129480_133591[(1)] = (59));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129420 === (27))){
var _ = (function (){var statearr_129484 = state_129417;
(statearr_129484[(4)] = cljs.core.rest((state_129417[(4)])));

return statearr_129484;
})();
var inst_128970 = (state_129417[(2)]);
var inst_128971 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_128972 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_128973 = (new cljs.core.PersistentVector(null,1,(5),inst_128971,inst_128972,null));
var inst_128974 = cljs.test.update_current_env_BANG_(inst_128973,cljs.core.rest);
var ___$1 = (function (){var temp__5753__auto__ = (state_129417[(5)]);
if(cljs.core.truth_(temp__5753__auto__)){
var e__38733__auto__ = temp__5753__auto__;
throw e__38733__auto__;
} else {
return null;
}
})();
var state_129417__$1 = (function (){var statearr_129488 = state_129417;
(statearr_129488[(8)] = inst_128974);

return statearr_129488;
})();
var statearr_129489_133595 = state_129417__$1;
(statearr_129489_133595[(2)] = inst_128970);

(statearr_129489_133595[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129420 === (1))){
var inst_128803 = (function (){return (function (p1__127425_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(output,(function (){var or__4223__auto__ = p1__127425_SHARP_;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return new cljs.core.Keyword(null,"closed","closed",-919675359);
}
})());
});
})();
var inst_128804 = (function (){return (function (p1__127426_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(results,(function (){var or__4223__auto__ = p1__127426_SHARP_;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return new cljs.core.Keyword(null,"closed","closed",-919675359);
}
})());
});
})();
var inst_128805 = repl_tooling.repl_client.connection.prepare_evals(control,inst_128803,inst_128804);
var inst_128806 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_128807 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_128808 = (new cljs.core.PersistentVector(null,1,(5),inst_128806,inst_128807,null));
var inst_128809 = cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(inst_128808,cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["captures the result of output"], 0));
var state_129417__$1 = (function (){var statearr_129498 = state_129417;
(statearr_129498[(9)] = inst_128809);

(statearr_129498[(10)] = inst_128805);

return statearr_129498;
})();
var statearr_129500_133596 = state_129417__$1;
(statearr_129500_133596[(2)] = null);

(statearr_129500_133596[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129420 === (69))){
var inst_129304 = (state_129417[(2)]);
var state_129417__$1 = (function (){var statearr_129503 = state_129417;
(statearr_129503[(11)] = inst_129304);

return statearr_129503;
})();
var statearr_129505_133599 = state_129417__$1;
(statearr_129505_133599[(2)] = null);

(statearr_129505_133599[(1)] = (73));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129420 === (24))){
var inst_128947 = (state_129417[(2)]);
var inst_128948 = cljs.core.list(new cljs.core.Symbol("async","<!","async/<!",-1308982001,null),new cljs.core.Symbol(null,"output","output",534662484,null));
var inst_128949 = "[tooling$eval-res id01 \":foo\"]";
var inst_128950 = expectations.compare_expr.cljs$core$IFn$_invoke$arity$4("[tooling$eval-res id01 \":foo\"]",inst_128947,inst_128949,inst_128948);
var inst_128951 = expectations.__GT_failure_message(inst_128950);
var inst_128952 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_128948)," => ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_128949)].join('');
var inst_128953 = clojure.string.replace(inst_128951,/^.*?\n/,inst_128952);
var inst_128954 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_128955 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_128950);
var inst_128956 = [inst_128955,inst_128949,inst_128948,inst_128953];
var inst_128957 = cljs.core.PersistentHashMap.fromArrays(inst_128954,inst_128956);
var inst_128958 = cljs.test.do_report(inst_128957);
var _ = (function (){var statearr_129510 = state_129417;
(statearr_129510[(4)] = cljs.core.rest((state_129417[(4)])));

return statearr_129510;
})();
var state_129417__$1 = state_129417;
var statearr_129512_133602 = state_129417__$1;
(statearr_129512_133602[(2)] = inst_128958);

(statearr_129512_133602[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129420 === (55))){
var inst_129339 = (state_129417[(2)]);
var inst_129342 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_129343 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_129345 = (new cljs.core.PersistentVector(null,1,(5),inst_129342,inst_129343,null));
var inst_129346 = cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(inst_129345,cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["captures output in different fragments"], 0));
var state_129417__$1 = (function (){var statearr_129518 = state_129417;
(statearr_129518[(12)] = inst_129339);

(statearr_129518[(13)] = inst_129346);

return statearr_129518;
})();
var statearr_129520_133603 = state_129417__$1;
(statearr_129520_133603[(2)] = null);

(statearr_129520_133603[(1)] = (78));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129420 === (85))){
var _ = (function (){var statearr_129523 = state_129417;
(statearr_129523[(4)] = cljs.core.rest((state_129417[(4)])));

return statearr_129523;
})();
var state_129417__$1 = state_129417;
var ex129507 = (state_129417__$1[(2)]);
var statearr_129527_133605 = state_129417__$1;
(statearr_129527_133605[(5)] = ex129507);


var statearr_129530_133606 = state_129417__$1;
(statearr_129530_133606[(1)] = (84));

(statearr_129530_133606[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129420 === (39))){
var _ = (function (){var statearr_129534 = state_129417;
(statearr_129534[(4)] = cljs.core.cons((42),(state_129417[(4)])));

return statearr_129534;
})();
var state_129417__$1 = state_129417;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_129417__$1,(43),results);
} else {
if((state_val_129420 === (46))){
var inst_129102 = (state_129417[(2)]);
var inst_129103 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_129104 = check.core.normalize_error(inst_129102);
var inst_129105 = cljs.core.list(new cljs.core.Symbol("async","<!","async/<!",-1308982001,null),new cljs.core.Symbol(null,"output","output",534662484,null));
var inst_129106 = new cljs.core.Symbol(null,"=expect=>","=expect=>",-1384225590,null);
var inst_129107 = "lol";
var inst_129108 = ["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_129105)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_129106)," ",inst_129107].join('');
var inst_129109 = [new cljs.core.Keyword(null,"error","error",-978969032),"lol",inst_129104,inst_129108];
var inst_129110 = cljs.core.PersistentHashMap.fromArrays(inst_129103,inst_129109);
var inst_129111 = cljs.test.do_report(inst_129110);
var state_129417__$1 = state_129417;
var statearr_129540_133607 = state_129417__$1;
(statearr_129540_133607[(2)] = inst_129111);

(statearr_129540_133607[(1)] = (45));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129420 === (4))){
var _ = (function (){var statearr_129542 = state_129417;
(statearr_129542[(4)] = cljs.core.rest((state_129417[(4)])));

return statearr_129542;
})();
var inst_128811 = (state_129417[(2)]);
var inst_128812 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_128813 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_128814 = (new cljs.core.PersistentVector(null,1,(5),inst_128812,inst_128813,null));
var inst_128815 = cljs.test.update_current_env_BANG_(inst_128814,cljs.core.rest);
var ___$1 = (function (){var temp__5753__auto__ = (state_129417[(5)]);
if(cljs.core.truth_(temp__5753__auto__)){
var e__38733__auto__ = temp__5753__auto__;
throw e__38733__auto__;
} else {
return null;
}
})();
var state_129417__$1 = (function (){var statearr_129546 = state_129417;
(statearr_129546[(14)] = inst_128815);

return statearr_129546;
})();
var statearr_129548_133608 = state_129417__$1;
(statearr_129548_133608[(2)] = inst_128811);

(statearr_129548_133608[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129420 === (77))){
var inst_129322 = (state_129417[(2)]);
var inst_129323 = cljs.core.list(new cljs.core.Symbol("async","<!","async/<!",-1308982001,null),new cljs.core.Symbol(null,"output","output",534662484,null));
var inst_129324 = "bar";
var inst_129325 = expectations.compare_expr.cljs$core$IFn$_invoke$arity$4("bar",inst_129322,inst_129324,inst_129323);
var inst_129326 = expectations.__GT_failure_message(inst_129325);
var inst_129327 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_129323)," => ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_129324)].join('');
var inst_129328 = clojure.string.replace(inst_129326,/^.*?\n/,inst_129327);
var inst_129329 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_129330 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_129325);
var inst_129331 = [inst_129330,inst_129324,inst_129323,inst_129328];
var inst_129332 = cljs.core.PersistentHashMap.fromArrays(inst_129329,inst_129331);
var inst_129333 = cljs.test.do_report(inst_129332);
var _ = (function (){var statearr_129558 = state_129417;
(statearr_129558[(4)] = cljs.core.rest((state_129417[(4)])));

return statearr_129558;
})();
var state_129417__$1 = state_129417;
var statearr_129559_133611 = state_129417__$1;
(statearr_129559_133611[(2)] = inst_129333);

(statearr_129559_133611[(1)] = (74));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129420 === (54))){
var _ = (function (){var statearr_129564 = state_129417;
(statearr_129564[(4)] = cljs.core.cons((56),(state_129417[(4)])));

return statearr_129564;
})();
var ___$1 = (function (){var statearr_129566 = state_129417;
(statearr_129566[(4)] = cljs.core.cons((57),(state_129417[(4)])));

return statearr_129566;
})();
var inst_129191 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(control,cljs.core.assoc,new cljs.core.Keyword(null,"ignore-prompt","ignore-prompt",-1001404739),true);
var inst_129192 = new cljs.core.Symbol(null,"id01","id01",-1954134071,null);
var inst_129193 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(control,cljs.core.update,new cljs.core.Keyword(null,"pending-evals","pending-evals",1249255957),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_129192], 0));
var inst_129194 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(buffer,cljs.core.conj,"lol[tooling$eval-res id01 \":foo\"]\nuser.cljs=> ");
var state_129417__$1 = (function (){var statearr_129568 = state_129417;
(statearr_129568[(15)] = inst_129193);

(statearr_129568[(16)] = inst_129194);

(statearr_129568[(17)] = inst_129191);

return statearr_129568;
})();
var statearr_129574_133612 = state_129417__$1;
(statearr_129574_133612[(2)] = null);

(statearr_129574_133612[(1)] = (58));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129420 === (15))){
var _ = (function (){var statearr_129577 = state_129417;
(statearr_129577[(4)] = cljs.core.cons((18),(state_129417[(4)])));

return statearr_129577;
})();
var state_129417__$1 = state_129417;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_129417__$1,(19),results);
} else {
if((state_val_129420 === (48))){
var inst_129118 = (state_129417[(2)]);
var inst_129119 = cljs.core.list(new cljs.core.Symbol("async","<!","async/<!",-1308982001,null),new cljs.core.Symbol(null,"output","output",534662484,null));
var inst_129121 = "lol";
var inst_129122 = expectations.compare_expr.cljs$core$IFn$_invoke$arity$4("lol",inst_129118,inst_129121,inst_129119);
var inst_129123 = expectations.__GT_failure_message(inst_129122);
var inst_129125 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_129119)," => ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_129121)].join('');
var inst_129126 = clojure.string.replace(inst_129123,/^.*?\n/,inst_129125);
var inst_129127 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_129128 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_129122);
var inst_129129 = [inst_129128,inst_129121,inst_129119,inst_129126];
var inst_129130 = cljs.core.PersistentHashMap.fromArrays(inst_129127,inst_129129);
var inst_129131 = cljs.test.do_report(inst_129130);
var _ = (function (){var statearr_129584 = state_129417;
(statearr_129584[(4)] = cljs.core.rest((state_129417[(4)])));

return statearr_129584;
})();
var state_129417__$1 = state_129417;
var statearr_129585_133613 = state_129417__$1;
(statearr_129585_133613[(2)] = inst_129131);

(statearr_129585_133613[(1)] = (45));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129420 === (50))){
var inst_129168 = (state_129417[(2)]);
var _ = (function (){var statearr_129589 = state_129417;
(statearr_129589[(4)] = cljs.core.rest((state_129417[(4)])));

return statearr_129589;
})();
var state_129417__$1 = state_129417;
var statearr_129590_133614 = state_129417__$1;
(statearr_129590_133614[(2)] = inst_129168);

(statearr_129590_133614[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129420 === (75))){
var inst_129305 = (state_129417[(2)]);
var inst_129306 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_129307 = check.core.normalize_error(inst_129305);
var inst_129309 = cljs.core.list(new cljs.core.Symbol("async","<!","async/<!",-1308982001,null),new cljs.core.Symbol(null,"output","output",534662484,null));
var inst_129310 = new cljs.core.Symbol(null,"=expect=>","=expect=>",-1384225590,null);
var inst_129311 = "bar";
var inst_129312 = ["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_129309)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_129310)," ",inst_129311].join('');
var inst_129313 = [new cljs.core.Keyword(null,"error","error",-978969032),"bar",inst_129307,inst_129312];
var inst_129314 = cljs.core.PersistentHashMap.fromArrays(inst_129306,inst_129313);
var inst_129315 = cljs.test.do_report(inst_129314);
var state_129417__$1 = state_129417;
var statearr_129594_133615 = state_129417__$1;
(statearr_129594_133615[(2)] = inst_129315);

(statearr_129594_133615[(1)] = (74));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129420 === (21))){
var inst_128961 = (state_129417[(2)]);
var _ = (function (){var statearr_129601 = state_129417;
(statearr_129601[(4)] = cljs.core.rest((state_129417[(4)])));

return statearr_129601;
})();
var state_129417__$1 = state_129417;
var statearr_129603_133617 = state_129417__$1;
(statearr_129603_133617[(2)] = inst_128961);

(statearr_129603_133617[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129420 === (31))){
var inst_128985 = (state_129417[(2)]);
var inst_128987 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_128988 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id01","id01",-1954134071,null),":foo"], null);
var inst_128989 = check.core.normalize_error(inst_128985);
var inst_128990 = cljs.core.list(new cljs.core.Symbol("async","<!","async/<!",-1308982001,null),new cljs.core.Symbol(null,"results","results",506361414,null));
var inst_128991 = new cljs.core.Symbol(null,"=expect=>","=expect=>",-1384225590,null);
var inst_128992 = cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id01","id01",-1954134071,null),":foo"], null));
var inst_128993 = ["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_128990)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_128991)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_128992)].join('');
var inst_128994 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_128988,inst_128989,inst_128993];
var inst_128995 = cljs.core.PersistentHashMap.fromArrays(inst_128987,inst_128994);
var inst_128996 = cljs.test.do_report(inst_128995);
var state_129417__$1 = state_129417;
var statearr_129609_133620 = state_129417__$1;
(statearr_129609_133620[(2)] = inst_128996);

(statearr_129609_133620[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129420 === (32))){
var _ = (function (){var statearr_129612 = state_129417;
(statearr_129612[(4)] = cljs.core.rest((state_129417[(4)])));

return statearr_129612;
})();
var state_129417__$1 = state_129417;
var ex129598 = (state_129417__$1[(2)]);
var statearr_129615_133621 = state_129417__$1;
(statearr_129615_133621[(5)] = ex129598);


var statearr_129616_133622 = state_129417__$1;
(statearr_129616_133622[(1)] = (31));

(statearr_129616_133622[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129420 === (40))){
var inst_129099 = (state_129417[(2)]);
var state_129417__$1 = (function (){var statearr_129619 = state_129417;
(statearr_129619[(18)] = inst_129099);

return statearr_129619;
})();
var statearr_129621_133623 = state_129417__$1;
(statearr_129621_133623[(2)] = null);

(statearr_129621_133623[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129420 === (56))){
var _ = (function (){var statearr_129626 = state_129417;
(statearr_129626[(4)] = cljs.core.rest((state_129417[(4)])));

return statearr_129626;
})();
var inst_129179 = (state_129417[(2)]);
var inst_129180 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_129181 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_129182 = (new cljs.core.PersistentVector(null,1,(5),inst_129180,inst_129181,null));
var inst_129183 = cljs.test.update_current_env_BANG_(inst_129182,cljs.core.rest);
var ___$1 = (function (){var temp__5753__auto__ = (state_129417[(5)]);
if(cljs.core.truth_(temp__5753__auto__)){
var e__38733__auto__ = temp__5753__auto__;
throw e__38733__auto__;
} else {
return null;
}
})();
var state_129417__$1 = (function (){var statearr_129629 = state_129417;
(statearr_129629[(19)] = inst_129183);

return statearr_129629;
})();
var statearr_129630_133624 = state_129417__$1;
(statearr_129630_133624[(2)] = inst_129179);

(statearr_129630_133624[(1)] = (55));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129420 === (33))){
var inst_129005 = (state_129417[(2)]);
var inst_129006 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id01","id01",-1954134071,null),":foo"], null);
var inst_129007 = cljs.core.list(new cljs.core.Symbol("async","<!","async/<!",-1308982001,null),new cljs.core.Symbol(null,"results","results",506361414,null));
var inst_129008 = cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id01","id01",-1954134071,null),":foo"], null));
var inst_129009 = expectations.compare_expr.cljs$core$IFn$_invoke$arity$4(inst_129006,inst_129005,inst_129008,inst_129007);
var inst_129010 = expectations.__GT_failure_message(inst_129009);
var inst_129012 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_129007)," => ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_129008)].join('');
var inst_129013 = clojure.string.replace(inst_129010,/^.*?\n/,inst_129012);
var inst_129015 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_129017 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_129009);
var inst_129018 = [inst_129017,inst_129008,inst_129007,inst_129013];
var inst_129019 = cljs.core.PersistentHashMap.fromArrays(inst_129015,inst_129018);
var inst_129020 = cljs.test.do_report(inst_129019);
var _ = (function (){var statearr_129639 = state_129417;
(statearr_129639[(4)] = cljs.core.rest((state_129417[(4)])));

return statearr_129639;
})();
var state_129417__$1 = state_129417;
var statearr_129641_133625 = state_129417__$1;
(statearr_129641_133625[(2)] = inst_129020);

(statearr_129641_133625[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129420 === (13))){
var _ = (function (){var statearr_129646 = state_129417;
(statearr_129646[(4)] = cljs.core.rest((state_129417[(4)])));

return statearr_129646;
})();
var inst_128874 = (state_129417[(2)]);
var inst_128875 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_128876 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_128877 = (new cljs.core.PersistentVector(null,1,(5),inst_128875,inst_128876,null));
var inst_128878 = cljs.test.update_current_env_BANG_(inst_128877,cljs.core.rest);
var ___$1 = (function (){var temp__5753__auto__ = (state_129417[(5)]);
if(cljs.core.truth_(temp__5753__auto__)){
var e__38733__auto__ = temp__5753__auto__;
throw e__38733__auto__;
} else {
return null;
}
})();
var state_129417__$1 = (function (){var statearr_129653 = state_129417;
(statearr_129653[(20)] = inst_128878);

return statearr_129653;
})();
var statearr_129655_133631 = state_129417__$1;
(statearr_129655_133631[(2)] = inst_128874);

(statearr_129655_133631[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129420 === (22))){
var inst_128927 = (state_129417[(2)]);
var inst_128928 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_128929 = check.core.normalize_error(inst_128927);
var inst_128930 = cljs.core.list(new cljs.core.Symbol("async","<!","async/<!",-1308982001,null),new cljs.core.Symbol(null,"output","output",534662484,null));
var inst_128931 = new cljs.core.Symbol(null,"=expect=>","=expect=>",-1384225590,null);
var inst_128932 = "[tooling$eval-res id01 \":foo\"]";
var inst_128933 = ["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_128930)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_128931)," ",inst_128932].join('');
var inst_128934 = [new cljs.core.Keyword(null,"error","error",-978969032),"[tooling$eval-res id01 \":foo\"]",inst_128929,inst_128933];
var inst_128935 = cljs.core.PersistentHashMap.fromArrays(inst_128928,inst_128934);
var inst_128936 = cljs.test.do_report(inst_128935);
var state_129417__$1 = state_129417;
var statearr_129661_133633 = state_129417__$1;
(statearr_129661_133633[(2)] = inst_128936);

(statearr_129661_133633[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129420 === (36))){
var inst_129024 = (state_129417[(2)]);
var inst_129026 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_129028 = check.core.normalize_error(inst_129024);
var inst_129030 = cljs.core.list(new cljs.core.Symbol("async","<!","async/<!",-1308982001,null),new cljs.core.Symbol(null,"output","output",534662484,null));
var inst_129031 = new cljs.core.Symbol(null,"=expect=>","=expect=>",-1384225590,null);
var inst_129032 = "lol";
var inst_129033 = ["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_129030)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_129031)," ",inst_129032].join('');
var inst_129034 = [new cljs.core.Keyword(null,"error","error",-978969032),"lol",inst_129028,inst_129033];
var inst_129035 = cljs.core.PersistentHashMap.fromArrays(inst_129026,inst_129034);
var inst_129036 = cljs.test.do_report(inst_129035);
var state_129417__$1 = state_129417;
var statearr_129666_133635 = state_129417__$1;
(statearr_129666_133635[(2)] = inst_129036);

(statearr_129666_133635[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129420 === (41))){
var inst_129064 = (state_129417[(2)]);
var inst_129066 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_129067 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id01","id01",-1954134071,null),":foo"], null);
var inst_129068 = check.core.normalize_error(inst_129064);
var inst_129070 = cljs.core.list(new cljs.core.Symbol("async","<!","async/<!",-1308982001,null),new cljs.core.Symbol(null,"results","results",506361414,null));
var inst_129071 = new cljs.core.Symbol(null,"=expect=>","=expect=>",-1384225590,null);
var inst_129072 = cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id01","id01",-1954134071,null),":foo"], null));
var inst_129073 = ["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_129070)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_129071)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_129072)].join('');
var inst_129074 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_129067,inst_129068,inst_129073];
var inst_129075 = cljs.core.PersistentHashMap.fromArrays(inst_129066,inst_129074);
var inst_129076 = cljs.test.do_report(inst_129075);
var state_129417__$1 = state_129417;
var statearr_129672_133636 = state_129417__$1;
(statearr_129672_133636[(2)] = inst_129076);

(statearr_129672_133636[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129420 === (43))){
var inst_129083 = (state_129417[(2)]);
var inst_129084 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id01","id01",-1954134071,null),":foo"], null);
var inst_129085 = cljs.core.list(new cljs.core.Symbol("async","<!","async/<!",-1308982001,null),new cljs.core.Symbol(null,"results","results",506361414,null));
var inst_129086 = cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id01","id01",-1954134071,null),":foo"], null));
var inst_129087 = expectations.compare_expr.cljs$core$IFn$_invoke$arity$4(inst_129084,inst_129083,inst_129086,inst_129085);
var inst_129088 = expectations.__GT_failure_message(inst_129087);
var inst_129089 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_129085)," => ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_129086)].join('');
var inst_129090 = clojure.string.replace(inst_129088,/^.*?\n/,inst_129089);
var inst_129091 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_129093 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_129087);
var inst_129094 = [inst_129093,inst_129086,inst_129085,inst_129090];
var inst_129095 = cljs.core.PersistentHashMap.fromArrays(inst_129091,inst_129094);
var inst_129096 = cljs.test.do_report(inst_129095);
var _ = (function (){var statearr_129677 = state_129417;
(statearr_129677[(4)] = cljs.core.rest((state_129417[(4)])));

return statearr_129677;
})();
var state_129417__$1 = state_129417;
var statearr_129679_133639 = state_129417__$1;
(statearr_129679_133639[(2)] = inst_129096);

(statearr_129679_133639[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129420 === (61))){
var _ = (function (){var statearr_129682 = state_129417;
(statearr_129682[(4)] = cljs.core.rest((state_129417[(4)])));

return statearr_129682;
})();
var state_129417__$1 = state_129417;
var ex129668 = (state_129417__$1[(2)]);
var statearr_129686_133640 = state_129417__$1;
(statearr_129686_133640[(5)] = ex129668);


var statearr_129687_133641 = state_129417__$1;
(statearr_129687_133641[(1)] = (60));

(statearr_129687_133641[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129420 === (29))){
var _ = (function (){var statearr_129690 = state_129417;
(statearr_129690[(4)] = cljs.core.cons((32),(state_129417[(4)])));

return statearr_129690;
})();
var state_129417__$1 = state_129417;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_129417__$1,(33),results);
} else {
if((state_val_129420 === (44))){
var _ = (function (){var statearr_129693 = state_129417;
(statearr_129693[(4)] = cljs.core.cons((47),(state_129417[(4)])));

return statearr_129693;
})();
var state_129417__$1 = state_129417;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_129417__$1,(48),output);
} else {
if((state_val_129420 === (6))){
var _ = (function (){var statearr_129697 = state_129417;
(statearr_129697[(4)] = cljs.core.cons((9),(state_129417[(4)])));

return statearr_129697;
})();
var state_129417__$1 = state_129417;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_129417__$1,(10),output);
} else {
if((state_val_129420 === (28))){
var _ = (function (){var statearr_129700 = state_129417;
(statearr_129700[(4)] = cljs.core.rest((state_129417[(4)])));

return statearr_129700;
})();
var state_129417__$1 = state_129417;
var ex129692 = (state_129417__$1[(2)]);
var statearr_129703_133648 = state_129417__$1;
(statearr_129703_133648[(5)] = ex129692);


throw ex129692;


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129420 === (64))){
var inst_129265 = (state_129417[(2)]);
var inst_129266 = new cljs.core.Symbol(null,"id01","id01",-1954134071,null);
var inst_129267 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(control,cljs.core.update,new cljs.core.Keyword(null,"pending-evals","pending-evals",1249255957),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_129266], 0));
var inst_129268 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(buffer,cljs.core.conj,"[tooling$eval-res id01 \":foo\"]user.cljs=> bar");
var state_129417__$1 = (function (){var statearr_129712 = state_129417;
(statearr_129712[(21)] = inst_129267);

(statearr_129712[(22)] = inst_129265);

(statearr_129712[(23)] = inst_129268);

return statearr_129712;
})();
var statearr_129713_133649 = state_129417__$1;
(statearr_129713_133649[(2)] = null);

(statearr_129713_133649[(1)] = (68));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129420 === (51))){
var inst_129135 = (state_129417[(2)]);
var inst_129137 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_129139 = check.core.normalize_error(inst_129135);
var inst_129141 = cljs.core.list(new cljs.core.Symbol("async","<!","async/<!",-1308982001,null),new cljs.core.Symbol(null,"output","output",534662484,null));
var inst_129142 = new cljs.core.Symbol(null,"=expect=>","=expect=>",-1384225590,null);
var inst_129143 = "bar";
var inst_129144 = ["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_129141)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_129142)," ",inst_129143].join('');
var inst_129145 = [new cljs.core.Keyword(null,"error","error",-978969032),"bar",inst_129139,inst_129144];
var inst_129146 = cljs.core.PersistentHashMap.fromArrays(inst_129137,inst_129145);
var inst_129147 = cljs.test.do_report(inst_129146);
var state_129417__$1 = state_129417;
var statearr_129721_133651 = state_129417__$1;
(statearr_129721_133651[(2)] = inst_129147);

(statearr_129721_133651[(1)] = (50));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129420 === (25))){
var _ = (function (){var statearr_129725 = state_129417;
(statearr_129725[(4)] = cljs.core.cons((27),(state_129417[(4)])));

return statearr_129725;
})();
var ___$1 = (function (){var statearr_129727 = state_129417;
(statearr_129727[(4)] = cljs.core.cons((28),(state_129417[(4)])));

return statearr_129727;
})();
var inst_128982 = new cljs.core.Symbol(null,"id01","id01",-1954134071,null);
var inst_128983 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(control,cljs.core.update,new cljs.core.Keyword(null,"pending-evals","pending-evals",1249255957),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_128982], 0));
var inst_128984 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(buffer,cljs.core.conj,"lol[tooling$eval-res id01 \":foo\"]");
var state_129417__$1 = (function (){var statearr_129729 = state_129417;
(statearr_129729[(24)] = inst_128983);

(statearr_129729[(25)] = inst_128984);

return statearr_129729;
})();
var statearr_129730_133655 = state_129417__$1;
(statearr_129730_133655[(2)] = null);

(statearr_129730_133655[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129420 === (34))){
var _ = (function (){var statearr_129733 = state_129417;
(statearr_129733[(4)] = cljs.core.cons((37),(state_129417[(4)])));

return statearr_129733;
})();
var state_129417__$1 = state_129417;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_129417__$1,(38),output);
} else {
if((state_val_129420 === (17))){
var inst_128890 = (state_129417[(2)]);
var inst_128891 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_128892 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id01","id01",-1954134071,null),":foo"], null);
var inst_128893 = check.core.normalize_error(inst_128890);
var inst_128896 = cljs.core.list(new cljs.core.Symbol("async","<!","async/<!",-1308982001,null),new cljs.core.Symbol(null,"results","results",506361414,null));
var inst_128897 = new cljs.core.Symbol(null,"=expect=>","=expect=>",-1384225590,null);
var inst_128898 = cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id01","id01",-1954134071,null),":foo"], null));
var inst_128899 = ["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_128896)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_128897)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_128898)].join('');
var inst_128900 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_128892,inst_128893,inst_128899];
var inst_128901 = cljs.core.PersistentHashMap.fromArrays(inst_128891,inst_128900);
var inst_128902 = cljs.test.do_report(inst_128901);
var state_129417__$1 = state_129417;
var statearr_129744_133657 = state_129417__$1;
(statearr_129744_133657[(2)] = inst_128902);

(statearr_129744_133657[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129420 === (3))){
var inst_128865 = (state_129417[(2)]);
var inst_128867 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_128868 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_128869 = (new cljs.core.PersistentVector(null,1,(5),inst_128867,inst_128868,null));
var inst_128870 = cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(inst_128869,cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["captures results of simple evaluations"], 0));
var state_129417__$1 = (function (){var statearr_129752 = state_129417;
(statearr_129752[(26)] = inst_128865);

(statearr_129752[(27)] = inst_128870);

return statearr_129752;
})();
var statearr_129754_133658 = state_129417__$1;
(statearr_129754_133658[(2)] = null);

(statearr_129754_133658[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129420 === (12))){
var inst_128964 = (state_129417[(2)]);
var inst_128965 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_128966 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_128967 = (new cljs.core.PersistentVector(null,1,(5),inst_128965,inst_128966,null));
var inst_128968 = cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(inst_128967,cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["captures results of results mixed with stdout"], 0));
var state_129417__$1 = (function (){var statearr_129759 = state_129417;
(statearr_129759[(28)] = inst_128964);

(statearr_129759[(29)] = inst_128968);

return statearr_129759;
})();
var statearr_129761_133662 = state_129417__$1;
(statearr_129761_133662[(2)] = null);

(statearr_129761_133662[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129420 === (2))){
var _ = (function (){var statearr_129765 = state_129417;
(statearr_129765[(4)] = cljs.core.cons((4),(state_129417[(4)])));

return statearr_129765;
})();
var ___$1 = (function (){var statearr_129768 = state_129417;
(statearr_129768[(4)] = cljs.core.cons((5),(state_129417[(4)])));

return statearr_129768;
})();
var inst_128823 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(buffer,cljs.core.conj,":foobar");
var state_129417__$1 = (function (){var statearr_129772 = state_129417;
(statearr_129772[(30)] = inst_128823);

return statearr_129772;
})();
var statearr_129774_133664 = state_129417__$1;
(statearr_129774_133664[(2)] = null);

(statearr_129774_133664[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129420 === (66))){
var _ = (function (){var statearr_129777 = state_129417;
(statearr_129777[(4)] = cljs.core.rest((state_129417[(4)])));

return statearr_129777;
})();
var state_129417__$1 = state_129417;
var ex129756 = (state_129417__$1[(2)]);
var statearr_129778_133666 = state_129417__$1;
(statearr_129778_133666[(5)] = ex129756);


var statearr_129782_133667 = state_129417__$1;
(statearr_129782_133667[(1)] = (65));

(statearr_129782_133667[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129420 === (23))){
var _ = (function (){var statearr_129783 = state_129417;
(statearr_129783[(4)] = cljs.core.rest((state_129417[(4)])));

return statearr_129783;
})();
var state_129417__$1 = state_129417;
var ex129763 = (state_129417__$1[(2)]);
var statearr_129784_133670 = state_129417__$1;
(statearr_129784_133670[(5)] = ex129763);


var statearr_129786_133671 = state_129417__$1;
(statearr_129786_133671[(1)] = (22));

(statearr_129786_133671[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129420 === (47))){
var _ = (function (){var statearr_129788 = state_129417;
(statearr_129788[(4)] = cljs.core.rest((state_129417[(4)])));

return statearr_129788;
})();
var state_129417__$1 = state_129417;
var ex129775 = (state_129417__$1[(2)]);
var statearr_129791_133673 = state_129417__$1;
(statearr_129791_133673[(5)] = ex129775);


var statearr_129794_133674 = state_129417__$1;
(statearr_129794_133674[(1)] = (46));

(statearr_129794_133674[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129420 === (35))){
var inst_129060 = (state_129417[(2)]);
var inst_129061 = new cljs.core.Symbol(null,"id01","id01",-1954134071,null);
var inst_129062 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(control,cljs.core.update,new cljs.core.Keyword(null,"pending-evals","pending-evals",1249255957),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_129061], 0));
var inst_129063 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(buffer,cljs.core.conj,"lol[tooling$eval-res id01 \":foo\"]bar");
var state_129417__$1 = (function (){var statearr_129800 = state_129417;
(statearr_129800[(31)] = inst_129062);

(statearr_129800[(32)] = inst_129060);

(statearr_129800[(33)] = inst_129063);

return statearr_129800;
})();
var statearr_129802_133677 = state_129417__$1;
(statearr_129802_133677[(2)] = null);

(statearr_129802_133677[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129420 === (82))){
var _ = (function (){var statearr_129804 = state_129417;
(statearr_129804[(4)] = cljs.core.cons((85),(state_129417[(4)])));

return statearr_129804;
})();
var state_129417__$1 = state_129417;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_129417__$1,(86),results);
} else {
if((state_val_129420 === (76))){
var _ = (function (){var statearr_129808 = state_129417;
(statearr_129808[(4)] = cljs.core.rest((state_129417[(4)])));

return statearr_129808;
})();
var state_129417__$1 = state_129417;
var ex129796 = (state_129417__$1[(2)]);
var statearr_129811_133679 = state_129417__$1;
(statearr_129811_133679[(5)] = ex129796);


var statearr_129812_133680 = state_129417__$1;
(statearr_129812_133680[(1)] = (75));

(statearr_129812_133680[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129420 === (19))){
var inst_128910 = (state_129417[(2)]);
var inst_128911 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id01","id01",-1954134071,null),":foo"], null);
var inst_128912 = cljs.core.list(new cljs.core.Symbol("async","<!","async/<!",-1308982001,null),new cljs.core.Symbol(null,"results","results",506361414,null));
var inst_128913 = cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id01","id01",-1954134071,null),":foo"], null));
var inst_128914 = expectations.compare_expr.cljs$core$IFn$_invoke$arity$4(inst_128911,inst_128910,inst_128913,inst_128912);
var inst_128915 = expectations.__GT_failure_message(inst_128914);
var inst_128916 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_128912)," => ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_128913)].join('');
var inst_128917 = clojure.string.replace(inst_128915,/^.*?\n/,inst_128916);
var inst_128918 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_128919 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_128914);
var inst_128920 = [inst_128919,inst_128913,inst_128912,inst_128917];
var inst_128921 = cljs.core.PersistentHashMap.fromArrays(inst_128918,inst_128920);
var inst_128922 = cljs.test.do_report(inst_128921);
var _ = (function (){var statearr_129817 = state_129417;
(statearr_129817[(4)] = cljs.core.rest((state_129417[(4)])));

return statearr_129817;
})();
var state_129417__$1 = state_129417;
var statearr_129820_133683 = state_129417__$1;
(statearr_129820_133683[(2)] = inst_128922);

(statearr_129820_133683[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129420 === (57))){
var _ = (function (){var statearr_129825 = state_129417;
(statearr_129825[(4)] = cljs.core.rest((state_129417[(4)])));

return statearr_129825;
})();
var state_129417__$1 = state_129417;
var ex129807 = (state_129417__$1[(2)]);
var statearr_129828_133684 = state_129417__$1;
(statearr_129828_133684[(5)] = ex129807);


throw ex129807;


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129420 === (68))){
var _ = (function (){var statearr_129831 = state_129417;
(statearr_129831[(4)] = cljs.core.cons((71),(state_129417[(4)])));

return statearr_129831;
})();
var state_129417__$1 = state_129417;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_129417__$1,(72),results);
} else {
if((state_val_129420 === (11))){
var _ = (function (){var statearr_129836 = state_129417;
(statearr_129836[(4)] = cljs.core.cons((13),(state_129417[(4)])));

return statearr_129836;
})();
var ___$1 = (function (){var statearr_129838 = state_129417;
(statearr_129838[(4)] = cljs.core.cons((14),(state_129417[(4)])));

return statearr_129838;
})();
var inst_128886 = new cljs.core.Symbol(null,"id01","id01",-1954134071,null);
var inst_128887 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(control,cljs.core.update,new cljs.core.Keyword(null,"pending-evals","pending-evals",1249255957),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_128886], 0));
var inst_128888 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(buffer,cljs.core.conj,"[tooling$eval-res id01 \":foo\"]");
var state_129417__$1 = (function (){var statearr_129840 = state_129417;
(statearr_129840[(34)] = inst_128888);

(statearr_129840[(35)] = inst_128887);

return statearr_129840;
})();
var statearr_129842_133686 = state_129417__$1;
(statearr_129842_133686[(2)] = null);

(statearr_129842_133686[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129420 === (9))){
var _ = (function (){var statearr_129845 = state_129417;
(statearr_129845[(4)] = cljs.core.rest((state_129417[(4)])));

return statearr_129845;
})();
var state_129417__$1 = state_129417;
var ex129829 = (state_129417__$1[(2)]);
var statearr_129847_133687 = state_129417__$1;
(statearr_129847_133687[(5)] = ex129829);


var statearr_129849_133688 = state_129417__$1;
(statearr_129849_133688[(1)] = (8));

(statearr_129849_133688[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129420 === (5))){
var _ = (function (){var statearr_129854 = state_129417;
(statearr_129854[(4)] = cljs.core.rest((state_129417[(4)])));

return statearr_129854;
})();
var state_129417__$1 = state_129417;
var ex129835 = (state_129417__$1[(2)]);
var statearr_129856_133692 = state_129417__$1;
(statearr_129856_133692[(5)] = ex129835);


throw ex129835;


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129420 === (83))){
var inst_129398 = (state_129417[(2)]);
var _ = (function (){var statearr_129859 = state_129417;
(statearr_129859[(4)] = cljs.core.rest((state_129417[(4)])));

return statearr_129859;
})();
var state_129417__$1 = state_129417;
var statearr_129862_133693 = state_129417__$1;
(statearr_129862_133693[(2)] = inst_129398);

(statearr_129862_133693[(1)] = (80));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129420 === (14))){
var _ = (function (){var statearr_129866 = state_129417;
(statearr_129866[(4)] = cljs.core.rest((state_129417[(4)])));

return statearr_129866;
})();
var state_129417__$1 = state_129417;
var ex129852 = (state_129417__$1[(2)]);
var statearr_129868_133694 = state_129417__$1;
(statearr_129868_133694[(5)] = ex129852);


throw ex129852;


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129420 === (45))){
var inst_129134 = (state_129417[(2)]);
var state_129417__$1 = (function (){var statearr_129871 = state_129417;
(statearr_129871[(36)] = inst_129134);

return statearr_129871;
})();
var statearr_129873_133696 = state_129417__$1;
(statearr_129873_133696[(2)] = null);

(statearr_129873_133696[(1)] = (49));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129420 === (53))){
var inst_129154 = (state_129417[(2)]);
var inst_129155 = cljs.core.list(new cljs.core.Symbol("async","<!","async/<!",-1308982001,null),new cljs.core.Symbol(null,"output","output",534662484,null));
var inst_129156 = "bar";
var inst_129157 = expectations.compare_expr.cljs$core$IFn$_invoke$arity$4("bar",inst_129154,inst_129156,inst_129155);
var inst_129158 = expectations.__GT_failure_message(inst_129157);
var inst_129159 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_129155)," => ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_129156)].join('');
var inst_129160 = clojure.string.replace(inst_129158,/^.*?\n/,inst_129159);
var inst_129161 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_129162 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_129157);
var inst_129163 = [inst_129162,inst_129156,inst_129155,inst_129160];
var inst_129164 = cljs.core.PersistentHashMap.fromArrays(inst_129161,inst_129163);
var inst_129165 = cljs.test.do_report(inst_129164);
var _ = (function (){var statearr_129879 = state_129417;
(statearr_129879[(4)] = cljs.core.rest((state_129417[(4)])));

return statearr_129879;
})();
var state_129417__$1 = state_129417;
var statearr_129881_133699 = state_129417__$1;
(statearr_129881_133699[(2)] = inst_129165);

(statearr_129881_133699[(1)] = (50));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129420 === (78))){
var _ = (function (){var statearr_129884 = state_129417;
(statearr_129884[(4)] = cljs.core.cons((80),(state_129417[(4)])));

return statearr_129884;
})();
var ___$1 = (function (){var statearr_129886 = state_129417;
(statearr_129886[(4)] = cljs.core.cons((81),(state_129417[(4)])));

return statearr_129886;
})();
var inst_129361 = new cljs.core.Symbol(null,"id02","id02",365882140,null);
var inst_129362 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(control,cljs.core.update,new cljs.core.Keyword(null,"pending-evals","pending-evals",1249255957),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_129361], 0));
var inst_129363 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(buffer,cljs.core.conj,"[tooling$eval-res id02 \"[\n");
var inst_129364 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(buffer,cljs.core.conj,"1 2\n");
var inst_129365 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(buffer,cljs.core.conj,"]\"]");
var state_129417__$1 = (function (){var statearr_129889 = state_129417;
(statearr_129889[(37)] = inst_129364);

(statearr_129889[(38)] = inst_129362);

(statearr_129889[(39)] = inst_129363);

(statearr_129889[(40)] = inst_129365);

return statearr_129889;
})();
var statearr_129893_133701 = state_129417__$1;
(statearr_129893_133701[(2)] = null);

(statearr_129893_133701[(1)] = (82));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129420 === (26))){
var inst_129171 = (state_129417[(2)]);
var inst_129173 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_129174 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_129175 = (new cljs.core.PersistentVector(null,1,(5),inst_129173,inst_129174,null));
var inst_129176 = cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(inst_129175,cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["ignores prompt after a result"], 0));
var state_129417__$1 = (function (){var statearr_129900 = state_129417;
(statearr_129900[(41)] = inst_129176);

(statearr_129900[(42)] = inst_129171);

return statearr_129900;
})();
var statearr_129902_133703 = state_129417__$1;
(statearr_129902_133703[(2)] = null);

(statearr_129902_133703[(1)] = (54));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129420 === (16))){
var inst_128925 = (state_129417[(2)]);
var inst_128926 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(buffer,cljs.core.conj,"[tooling$eval-res id01 \":foo\"]");
var state_129417__$1 = (function (){var statearr_129907 = state_129417;
(statearr_129907[(43)] = inst_128926);

(statearr_129907[(44)] = inst_128925);

return statearr_129907;
})();
var statearr_129910_133704 = state_129417__$1;
(statearr_129910_133704[(2)] = null);

(statearr_129910_133704[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129420 === (81))){
var _ = (function (){var statearr_129915 = state_129417;
(statearr_129915[(4)] = cljs.core.rest((state_129417[(4)])));

return statearr_129915;
})();
var state_129417__$1 = state_129417;
var ex129897 = (state_129417__$1[(2)]);
var statearr_129918_133705 = state_129417__$1;
(statearr_129918_133705[(5)] = ex129897);


throw ex129897;


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129420 === (79))){
var inst_129401 = (state_129417[(2)]);
var inst_129402 = cljs.core.async.close_BANG_(output);
var inst_129403 = cljs.core.async.close_BANG_(results);
var inst_129404 = (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
var state_129417__$1 = (function (){var statearr_129923 = state_129417;
(statearr_129923[(45)] = inst_129402);

(statearr_129923[(46)] = inst_129403);

(statearr_129923[(47)] = inst_129401);

return statearr_129923;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_129417__$1,inst_129404);
} else {
if((state_val_129420 === (38))){
var inst_129045 = (state_129417[(2)]);
var inst_129046 = cljs.core.list(new cljs.core.Symbol("async","<!","async/<!",-1308982001,null),new cljs.core.Symbol(null,"output","output",534662484,null));
var inst_129047 = "lol";
var inst_129048 = expectations.compare_expr.cljs$core$IFn$_invoke$arity$4("lol",inst_129045,inst_129047,inst_129046);
var inst_129049 = expectations.__GT_failure_message(inst_129048);
var inst_129050 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_129046)," => ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_129047)].join('');
var inst_129052 = clojure.string.replace(inst_129049,/^.*?\n/,inst_129050);
var inst_129053 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_129054 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_129048);
var inst_129055 = [inst_129054,inst_129047,inst_129046,inst_129052];
var inst_129056 = cljs.core.PersistentHashMap.fromArrays(inst_129053,inst_129055);
var inst_129057 = cljs.test.do_report(inst_129056);
var _ = (function (){var statearr_129926 = state_129417;
(statearr_129926[(4)] = cljs.core.rest((state_129417[(4)])));

return statearr_129926;
})();
var state_129417__$1 = state_129417;
var statearr_129928_133706 = state_129417__$1;
(statearr_129928_133706[(2)] = inst_129057);

(statearr_129928_133706[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129420 === (30))){
var inst_129023 = (state_129417[(2)]);
var state_129417__$1 = (function (){var statearr_129932 = state_129417;
(statearr_129932[(48)] = inst_129023);

return statearr_129932;
})();
var statearr_129933_133708 = state_129417__$1;
(statearr_129933_133708[(2)] = null);

(statearr_129933_133708[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129420 === (73))){
var _ = (function (){var statearr_129935 = state_129417;
(statearr_129935[(4)] = cljs.core.cons((76),(state_129417[(4)])));

return statearr_129935;
})();
var state_129417__$1 = state_129417;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_129417__$1,(77),output);
} else {
if((state_val_129420 === (10))){
var inst_128845 = (state_129417[(2)]);
var inst_128846 = cljs.core.list(new cljs.core.Symbol("async","<!","async/<!",-1308982001,null),new cljs.core.Symbol(null,"output","output",534662484,null));
var inst_128847 = ":foobar";
var inst_128848 = expectations.compare_expr.cljs$core$IFn$_invoke$arity$4(":foobar",inst_128845,inst_128847,inst_128846);
var inst_128849 = expectations.__GT_failure_message(inst_128848);
var inst_128851 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_128846)," => ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_128847)].join('');
var inst_128852 = clojure.string.replace(inst_128849,/^.*?\n/,inst_128851);
var inst_128854 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_128856 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_128848);
var inst_128857 = [inst_128856,inst_128847,inst_128846,inst_128852];
var inst_128858 = cljs.core.PersistentHashMap.fromArrays(inst_128854,inst_128857);
var inst_128859 = cljs.test.do_report(inst_128858);
var _ = (function (){var statearr_129946 = state_129417;
(statearr_129946[(4)] = cljs.core.rest((state_129417[(4)])));

return statearr_129946;
})();
var state_129417__$1 = state_129417;
var statearr_129948_133715 = state_129417__$1;
(statearr_129948_133715[(2)] = inst_128859);

(statearr_129948_133715[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129420 === (18))){
var _ = (function (){var statearr_129949 = state_129417;
(statearr_129949[(4)] = cljs.core.rest((state_129417[(4)])));

return statearr_129949;
})();
var state_129417__$1 = state_129417;
var ex129934 = (state_129417__$1[(2)]);
var statearr_129953_133716 = state_129417__$1;
(statearr_129953_133716[(5)] = ex129934);


var statearr_129955_133717 = state_129417__$1;
(statearr_129955_133717[(1)] = (17));

(statearr_129955_133717[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129420 === (52))){
var _ = (function (){var statearr_129959 = state_129417;
(statearr_129959[(4)] = cljs.core.rest((state_129417[(4)])));

return statearr_129959;
})();
var state_129417__$1 = state_129417;
var ex129939 = (state_129417__$1[(2)]);
var statearr_129962_133718 = state_129417__$1;
(statearr_129962_133718[(5)] = ex129939);


var statearr_129963_133719 = state_129417__$1;
(statearr_129963_133719[(1)] = (51));

(statearr_129963_133719[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129420 === (67))){
var inst_129250 = (state_129417[(2)]);
var inst_129251 = cljs.core.list(new cljs.core.Symbol("async","<!","async/<!",-1308982001,null),new cljs.core.Symbol(null,"output","output",534662484,null));
var inst_129252 = "lol";
var inst_129253 = expectations.compare_expr.cljs$core$IFn$_invoke$arity$4("lol",inst_129250,inst_129252,inst_129251);
var inst_129254 = expectations.__GT_failure_message(inst_129253);
var inst_129255 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_129251)," => ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_129252)].join('');
var inst_129256 = clojure.string.replace(inst_129254,/^.*?\n/,inst_129255);
var inst_129257 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_129259 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_129253);
var inst_129260 = [inst_129259,inst_129252,inst_129251,inst_129256];
var inst_129261 = cljs.core.PersistentHashMap.fromArrays(inst_129257,inst_129260);
var inst_129262 = cljs.test.do_report(inst_129261);
var _ = (function (){var statearr_129972 = state_129417;
(statearr_129972[(4)] = cljs.core.rest((state_129417[(4)])));

return statearr_129972;
})();
var state_129417__$1 = state_129417;
var statearr_129975_133724 = state_129417__$1;
(statearr_129975_133724[(2)] = inst_129262);

(statearr_129975_133724[(1)] = (64));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129420 === (71))){
var _ = (function (){var statearr_129979 = state_129417;
(statearr_129979[(4)] = cljs.core.rest((state_129417[(4)])));

return statearr_129979;
})();
var state_129417__$1 = state_129417;
var ex129958 = (state_129417__$1[(2)]);
var statearr_129980_133727 = state_129417__$1;
(statearr_129980_133727[(5)] = ex129958);


var statearr_129981_133729 = state_129417__$1;
(statearr_129981_133729[(1)] = (70));

(statearr_129981_133729[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129420 === (42))){
var _ = (function (){var statearr_129984 = state_129417;
(statearr_129984[(4)] = cljs.core.rest((state_129417[(4)])));

return statearr_129984;
})();
var state_129417__$1 = state_129417;
var ex129966 = (state_129417__$1[(2)]);
var statearr_129986_133733 = state_129417__$1;
(statearr_129986_133733[(5)] = ex129966);


var statearr_129988_133734 = state_129417__$1;
(statearr_129988_133734[(1)] = (41));

(statearr_129988_133734[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129420 === (80))){
var _ = (function (){var statearr_129993 = state_129417;
(statearr_129993[(4)] = cljs.core.rest((state_129417[(4)])));

return statearr_129993;
})();
var inst_129348 = (state_129417[(2)]);
var inst_129349 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_129350 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_129351 = (new cljs.core.PersistentVector(null,1,(5),inst_129349,inst_129350,null));
var inst_129352 = cljs.test.update_current_env_BANG_(inst_129351,cljs.core.rest);
var ___$1 = (function (){var temp__5753__auto__ = (state_129417[(5)]);
if(cljs.core.truth_(temp__5753__auto__)){
var e__38733__auto__ = temp__5753__auto__;
throw e__38733__auto__;
} else {
return null;
}
})();
var state_129417__$1 = (function (){var statearr_129998 = state_129417;
(statearr_129998[(49)] = inst_129352);

return statearr_129998;
})();
var statearr_130000_133736 = state_129417__$1;
(statearr_130000_133736[(2)] = inst_129348);

(statearr_130000_133736[(1)] = (79));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129420 === (37))){
var _ = (function (){var statearr_130004 = state_129417;
(statearr_130004[(4)] = cljs.core.rest((state_129417[(4)])));

return statearr_130004;
})();
var state_129417__$1 = state_129417;
var ex129982 = (state_129417__$1[(2)]);
var statearr_130007_133737 = state_129417__$1;
(statearr_130007_133737[(5)] = ex129982);


var statearr_130008_133738 = state_129417__$1;
(statearr_130008_133738[(1)] = (36));

(statearr_130008_133738[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129420 === (63))){
var _ = (function (){var statearr_130011 = state_129417;
(statearr_130011[(4)] = cljs.core.cons((66),(state_129417[(4)])));

return statearr_130011;
})();
var state_129417__$1 = state_129417;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_129417__$1,(67),output);
} else {
if((state_val_129420 === (8))){
var inst_128826 = (state_129417[(2)]);
var inst_128827 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_128828 = check.core.normalize_error(inst_128826);
var inst_128829 = cljs.core.list(new cljs.core.Symbol("async","<!","async/<!",-1308982001,null),new cljs.core.Symbol(null,"output","output",534662484,null));
var inst_128830 = new cljs.core.Symbol(null,"=expect=>","=expect=>",-1384225590,null);
var inst_128831 = ":foobar";
var inst_128832 = ["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_128829)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_128830)," ",inst_128831].join('');
var inst_128833 = [new cljs.core.Keyword(null,"error","error",-978969032),":foobar",inst_128828,inst_128832];
var inst_128834 = cljs.core.PersistentHashMap.fromArrays(inst_128827,inst_128833);
var inst_128835 = cljs.test.do_report(inst_128834);
var state_129417__$1 = state_129417;
var statearr_130021_133744 = state_129417__$1;
(statearr_130021_133744[(2)] = inst_128835);

(statearr_130021_133744[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129420 === (49))){
var _ = (function (){var statearr_130023 = state_129417;
(statearr_130023[(4)] = cljs.core.cons((52),(state_129417[(4)])));

return statearr_130023;
})();
var state_129417__$1 = state_129417;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_129417__$1,(53),output);
} else {
if((state_val_129420 === (84))){
var inst_129366 = (state_129417[(2)]);
var inst_129367 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_129368 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id02","id02",365882140,null),"[\n1 2\n]"], null);
var inst_129369 = check.core.normalize_error(inst_129366);
var inst_129370 = cljs.core.list(new cljs.core.Symbol("async","<!","async/<!",-1308982001,null),new cljs.core.Symbol(null,"results","results",506361414,null));
var inst_129371 = new cljs.core.Symbol(null,"=expect=>","=expect=>",-1384225590,null);
var inst_129372 = cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id02","id02",365882140,null),"[\n1 2\n]"], null));
var inst_129373 = ["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_129370)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_129371)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_129372)].join('');
var inst_129374 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_129368,inst_129369,inst_129373];
var inst_129375 = cljs.core.PersistentHashMap.fromArrays(inst_129367,inst_129374);
var inst_129376 = cljs.test.do_report(inst_129375);
var state_129417__$1 = state_129417;
var statearr_130032_133748 = state_129417__$1;
(statearr_130032_133748[(2)] = inst_129376);

(statearr_130032_133748[(1)] = (83));


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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
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
var repl_tooling$repl_client$connection_test$state_machine__39695__auto__ = null;
var repl_tooling$repl_client$connection_test$state_machine__39695__auto____0 = (function (){
var statearr_130038 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_130038[(0)] = repl_tooling$repl_client$connection_test$state_machine__39695__auto__);

(statearr_130038[(1)] = (1));

return statearr_130038;
});
var repl_tooling$repl_client$connection_test$state_machine__39695__auto____1 = (function (state_129417){
while(true){
var ret_value__39696__auto__ = (function (){try{while(true){
var result__39697__auto__ = switch__39694__auto__(state_129417);
if(cljs.core.keyword_identical_QMARK_(result__39697__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39697__auto__;
}
break;
}
}catch (e130043){var ex__39698__auto__ = e130043;
var statearr_130045_133751 = state_129417;
(statearr_130045_133751[(2)] = ex__39698__auto__);


if(cljs.core.seq((state_129417[(4)]))){
var statearr_130048_133752 = state_129417;
(statearr_130048_133752[(1)] = cljs.core.first((state_129417[(4)])));

} else {
throw ex__39698__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__133754 = state_129417;
state_129417 = G__133754;
continue;
} else {
return ret_value__39696__auto__;
}
break;
}
});
repl_tooling$repl_client$connection_test$state_machine__39695__auto__ = function(state_129417){
switch(arguments.length){
case 0:
return repl_tooling$repl_client$connection_test$state_machine__39695__auto____0.call(this);
case 1:
return repl_tooling$repl_client$connection_test$state_machine__39695__auto____1.call(this,state_129417);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
repl_tooling$repl_client$connection_test$state_machine__39695__auto__.cljs$core$IFn$_invoke$arity$0 = repl_tooling$repl_client$connection_test$state_machine__39695__auto____0;
repl_tooling$repl_client$connection_test$state_machine__39695__auto__.cljs$core$IFn$_invoke$arity$1 = repl_tooling$repl_client$connection_test$state_machine__39695__auto____1;
return repl_tooling$repl_client$connection_test$state_machine__39695__auto__;
})()
})();
var state__39771__auto__ = (function (){var statearr_130051 = f__39770__auto__();
(statearr_130051[(6)] = c__39769__auto__);

return statearr_130051;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39771__auto__);
}));

return c__39769__auto__;
}));

(repl_tooling.repl_client.connection_test.t_repl_tooling$repl_client$connection_test127440.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta127441","meta127441",247077580,null)], null);
}));

(repl_tooling.repl_client.connection_test.t_repl_tooling$repl_client$connection_test127440.cljs$lang$type = true);

(repl_tooling.repl_client.connection_test.t_repl_tooling$repl_client$connection_test127440.cljs$lang$ctorStr = "repl-tooling.repl-client.connection-test/t_repl_tooling$repl_client$connection_test127440");

(repl_tooling.repl_client.connection_test.t_repl_tooling$repl_client$connection_test127440.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"repl-tooling.repl-client.connection-test/t_repl_tooling$repl_client$connection_test127440");
}));

/**
 * Positional factory function for repl-tooling.repl-client.connection-test/t_repl_tooling$repl_client$connection_test127440.
 */
repl_tooling.repl_client.connection_test.__GT_t_repl_tooling$repl_client$connection_test127440 = (function repl_tooling$repl_client$connection_test$__GT_t_repl_tooling$repl_client$connection_test127440(meta127441){
return (new repl_tooling.repl_client.connection_test.t_repl_tooling$repl_client$connection_test127440(meta127441));
});

}

return (new repl_tooling.repl_client.connection_test.t_repl_tooling$repl_client$connection_test127440(null));
})], 0)),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));

repl_tooling.repl_client.connection_test.eval_cycle = (function repl_tooling$repl_client$connection_test$eval_cycle(){
return cljs.test.test_var(repl_tooling.repl_client.connection_test.eval_cycle.cljs$lang$var);
});
repl_tooling.repl_client.connection_test.eval_cycle.cljs$lang$test = (function (){
if((typeof repl_tooling !== 'undefined') && (typeof repl_tooling.repl_client !== 'undefined') && (typeof repl_tooling.repl_client.connection_test !== 'undefined') && (typeof repl_tooling.repl_client.connection_test.t_repl_tooling$repl_client$connection_test130062 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
repl_tooling.repl_client.connection_test.t_repl_tooling$repl_client$connection_test130062 = (function (meta130063){
this.meta130063 = meta130063;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(repl_tooling.repl_client.connection_test.t_repl_tooling$repl_client$connection_test130062.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_130064,meta130063__$1){
var self__ = this;
var _130064__$1 = this;
return (new repl_tooling.repl_client.connection_test.t_repl_tooling$repl_client$connection_test130062(meta130063__$1));
}));

(repl_tooling.repl_client.connection_test.t_repl_tooling$repl_client$connection_test130062.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_130064){
var self__ = this;
var _130064__$1 = this;
return self__.meta130063;
}));

(repl_tooling.repl_client.connection_test.t_repl_tooling$repl_client$connection_test130062.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(repl_tooling.repl_client.connection_test.t_repl_tooling$repl_client$connection_test130062.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___9200__auto__ = self____$1;
var buffer = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
var output = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var control = repl_tooling.repl_client.connection.treat_buffer_BANG_(buffer,cljs.core.identity,cljs.core.identity);
var c__39769__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__39770__auto__ = (function (){var switch__39694__auto__ = (function (state_130728){
var state_val_130732 = (state_130728[(1)]);
if((state_val_130732 === (65))){
var inst_130532 = (state_130728[(2)]);
var inst_130533 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_130534 = check.core.normalize_error(inst_130532);
var inst_130536 = cljs.core.list(new cljs.core.Symbol("async","<!","async/<!",-1308982001,null),new cljs.core.Symbol(null,"output","output",534662484,null));
var inst_130537 = new cljs.core.Symbol(null,"=expect=>","=expect=>",-1384225590,null);
var inst_130538 = "lol";
var inst_130539 = ["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_130536)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_130537)," ",inst_130538].join('');
var inst_130540 = [new cljs.core.Keyword(null,"error","error",-978969032),"lol",inst_130534,inst_130539];
var inst_130541 = cljs.core.PersistentHashMap.fromArrays(inst_130533,inst_130540);
var inst_130542 = cljs.test.do_report(inst_130541);
var state_130728__$1 = state_130728;
var statearr_130741_133759 = state_130728__$1;
(statearr_130741_133759[(2)] = inst_130542);

(statearr_130741_133759[(1)] = (64));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130732 === (70))){
var inst_130570 = (state_130728[(2)]);
var inst_130572 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_130573 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id01","id01",-1954134071,null),":foo"], null);
var inst_130574 = check.core.normalize_error(inst_130570);
var inst_130575 = cljs.core.list(new cljs.core.Symbol("async","<!","async/<!",-1308982001,null),new cljs.core.Symbol(null,"results","results",506361414,null));
var inst_130576 = new cljs.core.Symbol(null,"=expect=>","=expect=>",-1384225590,null);
var inst_130578 = cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id01","id01",-1954134071,null),":foo"], null));
var inst_130579 = ["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_130575)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_130576)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_130578)].join('');
var inst_130580 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_130573,inst_130574,inst_130579];
var inst_130581 = cljs.core.PersistentHashMap.fromArrays(inst_130572,inst_130580);
var inst_130582 = cljs.test.do_report(inst_130581);
var state_130728__$1 = state_130728;
var statearr_130750_133765 = state_130728__$1;
(statearr_130750_133765[(2)] = inst_130582);

(statearr_130750_133765[(1)] = (69));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130732 === (62))){
var inst_130515 = (state_130728[(2)]);
var inst_130516 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id01","id01",-1954134071,null),":foo"], null);
var inst_130517 = cljs.core.list(new cljs.core.Symbol("async","<!","async/<!",-1308982001,null),new cljs.core.Symbol(null,"results","results",506361414,null));
var inst_130518 = cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id01","id01",-1954134071,null),":foo"], null));
var inst_130519 = expectations.compare_expr.cljs$core$IFn$_invoke$arity$4(inst_130516,inst_130515,inst_130518,inst_130517);
var inst_130520 = expectations.__GT_failure_message(inst_130519);
var inst_130522 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_130517)," => ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_130518)].join('');
var inst_130523 = clojure.string.replace(inst_130520,/^.*?\n/,inst_130522);
var inst_130524 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_130525 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_130519);
var inst_130526 = [inst_130525,inst_130518,inst_130517,inst_130523];
var inst_130527 = cljs.core.PersistentHashMap.fromArrays(inst_130524,inst_130526);
var inst_130528 = cljs.test.do_report(inst_130527);
var _ = (function (){var statearr_130757 = state_130728;
(statearr_130757[(4)] = cljs.core.rest((state_130728[(4)])));

return statearr_130757;
})();
var state_130728__$1 = state_130728;
var statearr_130758_133769 = state_130728__$1;
(statearr_130758_133769[(2)] = inst_130528);

(statearr_130758_133769[(1)] = (59));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130732 === (74))){
var inst_130641 = (state_130728[(2)]);
var _ = (function (){var statearr_130763 = state_130728;
(statearr_130763[(4)] = cljs.core.rest((state_130728[(4)])));

return statearr_130763;
})();
var state_130728__$1 = state_130728;
var statearr_130765_133771 = state_130728__$1;
(statearr_130765_133771[(2)] = inst_130641);

(statearr_130765_133771[(1)] = (56));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130732 === (7))){
var inst_130145 = (state_130728[(2)]);
var _ = (function (){var statearr_130770 = state_130728;
(statearr_130770[(4)] = cljs.core.rest((state_130728[(4)])));

return statearr_130770;
})();
var state_130728__$1 = state_130728;
var statearr_130772_133772 = state_130728__$1;
(statearr_130772_133772[(2)] = inst_130145);

(statearr_130772_133772[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130732 === (59))){
var inst_130531 = (state_130728[(2)]);
var state_130728__$1 = (function (){var statearr_130775 = state_130728;
(statearr_130775[(7)] = inst_130531);

return statearr_130775;
})();
var statearr_130778_133774 = state_130728__$1;
(statearr_130778_133774[(2)] = null);

(statearr_130778_133774[(1)] = (63));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130732 === (86))){
var inst_130690 = (state_130728[(2)]);
var inst_130692 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id02","id02",365882140,null),"[\n1 2\n]"], null);
var inst_130693 = cljs.core.list(new cljs.core.Symbol("async","<!","async/<!",-1308982001,null),new cljs.core.Symbol(null,"results","results",506361414,null));
var inst_130694 = cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id02","id02",365882140,null),"[\n1 2\n]"], null));
var inst_130695 = expectations.compare_expr.cljs$core$IFn$_invoke$arity$4(inst_130692,inst_130690,inst_130694,inst_130693);
var inst_130696 = expectations.__GT_failure_message(inst_130695);
var inst_130697 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_130693)," => ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_130694)].join('');
var inst_130698 = clojure.string.replace(inst_130696,/^.*?\n/,inst_130697);
var inst_130699 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_130700 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_130695);
var inst_130701 = [inst_130700,inst_130694,inst_130693,inst_130698];
var inst_130702 = cljs.core.PersistentHashMap.fromArrays(inst_130699,inst_130701);
var inst_130703 = cljs.test.do_report(inst_130702);
var _ = (function (){var statearr_130784 = state_130728;
(statearr_130784[(4)] = cljs.core.rest((state_130728[(4)])));

return statearr_130784;
})();
var state_130728__$1 = state_130728;
var statearr_130785_133778 = state_130728__$1;
(statearr_130785_133778[(2)] = inst_130703);

(statearr_130785_133778[(1)] = (83));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130732 === (20))){
var _ = (function (){var statearr_130789 = state_130728;
(statearr_130789[(4)] = cljs.core.cons((23),(state_130728[(4)])));

return statearr_130789;
})();
var state_130728__$1 = state_130728;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_130728__$1,(24),output);
} else {
if((state_val_130732 === (72))){
var inst_130590 = (state_130728[(2)]);
var inst_130592 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id01","id01",-1954134071,null),":foo"], null);
var inst_130593 = cljs.core.list(new cljs.core.Symbol("async","<!","async/<!",-1308982001,null),new cljs.core.Symbol(null,"results","results",506361414,null));
var inst_130594 = cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id01","id01",-1954134071,null),":foo"], null));
var inst_130595 = expectations.compare_expr.cljs$core$IFn$_invoke$arity$4(inst_130592,inst_130590,inst_130594,inst_130593);
var inst_130596 = expectations.__GT_failure_message(inst_130595);
var inst_130598 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_130593)," => ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_130594)].join('');
var inst_130599 = clojure.string.replace(inst_130596,/^.*?\n/,inst_130598);
var inst_130600 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_130601 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_130595);
var inst_130602 = [inst_130601,inst_130594,inst_130593,inst_130599];
var inst_130603 = cljs.core.PersistentHashMap.fromArrays(inst_130600,inst_130602);
var inst_130604 = cljs.test.do_report(inst_130603);
var _ = (function (){var statearr_130794 = state_130728;
(statearr_130794[(4)] = cljs.core.rest((state_130728[(4)])));

return statearr_130794;
})();
var state_130728__$1 = state_130728;
var statearr_130796_133782 = state_130728__$1;
(statearr_130796_133782[(2)] = inst_130604);

(statearr_130796_133782[(1)] = (69));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130732 === (58))){
var _ = (function (){var statearr_130799 = state_130728;
(statearr_130799[(4)] = cljs.core.cons((61),(state_130728[(4)])));

return statearr_130799;
})();
var state_130728__$1 = state_130728;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_130728__$1,(62),results);
} else {
if((state_val_130732 === (60))){
var inst_130496 = (state_130728[(2)]);
var inst_130498 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_130499 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id01","id01",-1954134071,null),":foo"], null);
var inst_130500 = check.core.normalize_error(inst_130496);
var inst_130501 = cljs.core.list(new cljs.core.Symbol("async","<!","async/<!",-1308982001,null),new cljs.core.Symbol(null,"results","results",506361414,null));
var inst_130502 = new cljs.core.Symbol(null,"=expect=>","=expect=>",-1384225590,null);
var inst_130503 = cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id01","id01",-1954134071,null),":foo"], null));
var inst_130504 = ["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_130501)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_130502)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_130503)].join('');
var inst_130505 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_130499,inst_130500,inst_130504];
var inst_130506 = cljs.core.PersistentHashMap.fromArrays(inst_130498,inst_130505);
var inst_130507 = cljs.test.do_report(inst_130506);
var state_130728__$1 = state_130728;
var statearr_130807_133788 = state_130728__$1;
(statearr_130807_133788[(2)] = inst_130507);

(statearr_130807_133788[(1)] = (59));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130732 === (27))){
var _ = (function (){var statearr_130814 = state_130728;
(statearr_130814[(4)] = cljs.core.rest((state_130728[(4)])));

return statearr_130814;
})();
var inst_130258 = (state_130728[(2)]);
var inst_130260 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_130262 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_130263 = (new cljs.core.PersistentVector(null,1,(5),inst_130260,inst_130262,null));
var inst_130264 = cljs.test.update_current_env_BANG_(inst_130263,cljs.core.rest);
var ___$1 = (function (){var temp__5753__auto__ = (state_130728[(5)]);
if(cljs.core.truth_(temp__5753__auto__)){
var e__38733__auto__ = temp__5753__auto__;
throw e__38733__auto__;
} else {
return null;
}
})();
var state_130728__$1 = (function (){var statearr_130818 = state_130728;
(statearr_130818[(8)] = inst_130264);

return statearr_130818;
})();
var statearr_130821_133793 = state_130728__$1;
(statearr_130821_133793[(2)] = inst_130258);

(statearr_130821_133793[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130732 === (1))){
var inst_130084 = (function (){return (function (p1__127425_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(output,(function (){var or__4223__auto__ = p1__127425_SHARP_;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return new cljs.core.Keyword(null,"closed","closed",-919675359);
}
})());
});
})();
var inst_130086 = (function (){return (function (p1__127426_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(results,(function (){var or__4223__auto__ = p1__127426_SHARP_;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return new cljs.core.Keyword(null,"closed","closed",-919675359);
}
})());
});
})();
var inst_130087 = repl_tooling.repl_client.connection.prepare_evals(control,inst_130084,inst_130086);
var inst_130088 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_130089 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_130090 = (new cljs.core.PersistentVector(null,1,(5),inst_130088,inst_130089,null));
var inst_130091 = cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(inst_130090,cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["captures the result of output"], 0));
var state_130728__$1 = (function (){var statearr_130830 = state_130728;
(statearr_130830[(9)] = inst_130087);

(statearr_130830[(10)] = inst_130091);

return statearr_130830;
})();
var statearr_130832_133800 = state_130728__$1;
(statearr_130832_133800[(2)] = null);

(statearr_130832_133800[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130732 === (69))){
var inst_130607 = (state_130728[(2)]);
var state_130728__$1 = (function (){var statearr_130837 = state_130728;
(statearr_130837[(11)] = inst_130607);

return statearr_130837;
})();
var statearr_130840_133801 = state_130728__$1;
(statearr_130840_133801[(2)] = null);

(statearr_130840_133801[(1)] = (73));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130732 === (24))){
var inst_130231 = (state_130728[(2)]);
var inst_130232 = cljs.core.list(new cljs.core.Symbol("async","<!","async/<!",-1308982001,null),new cljs.core.Symbol(null,"output","output",534662484,null));
var inst_130233 = "[tooling$eval-res id01 \":foo\"]";
var inst_130235 = expectations.compare_expr.cljs$core$IFn$_invoke$arity$4("[tooling$eval-res id01 \":foo\"]",inst_130231,inst_130233,inst_130232);
var inst_130236 = expectations.__GT_failure_message(inst_130235);
var inst_130238 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_130232)," => ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_130233)].join('');
var inst_130239 = clojure.string.replace(inst_130236,/^.*?\n/,inst_130238);
var inst_130241 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_130242 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_130235);
var inst_130243 = [inst_130242,inst_130233,inst_130232,inst_130239];
var inst_130244 = cljs.core.PersistentHashMap.fromArrays(inst_130241,inst_130243);
var inst_130246 = cljs.test.do_report(inst_130244);
var _ = (function (){var statearr_130850 = state_130728;
(statearr_130850[(4)] = cljs.core.rest((state_130728[(4)])));

return statearr_130850;
})();
var state_130728__$1 = state_130728;
var statearr_130852_133802 = state_130728__$1;
(statearr_130852_133802[(2)] = inst_130246);

(statearr_130852_133802[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130732 === (55))){
var inst_130644 = (state_130728[(2)]);
var inst_130647 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_130648 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_130649 = (new cljs.core.PersistentVector(null,1,(5),inst_130647,inst_130648,null));
var inst_130650 = cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(inst_130649,cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["captures output in different fragments"], 0));
var state_130728__$1 = (function (){var statearr_130855 = state_130728;
(statearr_130855[(12)] = inst_130650);

(statearr_130855[(13)] = inst_130644);

return statearr_130855;
})();
var statearr_130857_133807 = state_130728__$1;
(statearr_130857_133807[(2)] = null);

(statearr_130857_133807[(1)] = (78));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130732 === (85))){
var _ = (function (){var statearr_130860 = state_130728;
(statearr_130860[(4)] = cljs.core.rest((state_130728[(4)])));

return statearr_130860;
})();
var state_130728__$1 = state_130728;
var ex130843 = (state_130728__$1[(2)]);
var statearr_130865_133809 = state_130728__$1;
(statearr_130865_133809[(5)] = ex130843);


var statearr_130868_133810 = state_130728__$1;
(statearr_130868_133810[(1)] = (84));

(statearr_130868_133810[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130732 === (39))){
var _ = (function (){var statearr_130870 = state_130728;
(statearr_130870[(4)] = cljs.core.cons((42),(state_130728[(4)])));

return statearr_130870;
})();
var state_130728__$1 = state_130728;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_130728__$1,(43),results);
} else {
if((state_val_130732 === (46))){
var inst_130399 = (state_130728[(2)]);
var inst_130400 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_130401 = check.core.normalize_error(inst_130399);
var inst_130404 = cljs.core.list(new cljs.core.Symbol("async","<!","async/<!",-1308982001,null),new cljs.core.Symbol(null,"output","output",534662484,null));
var inst_130405 = new cljs.core.Symbol(null,"=expect=>","=expect=>",-1384225590,null);
var inst_130406 = "lol";
var inst_130407 = ["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_130404)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_130405)," ",inst_130406].join('');
var inst_130408 = [new cljs.core.Keyword(null,"error","error",-978969032),"lol",inst_130401,inst_130407];
var inst_130409 = cljs.core.PersistentHashMap.fromArrays(inst_130400,inst_130408);
var inst_130410 = cljs.test.do_report(inst_130409);
var state_130728__$1 = state_130728;
var statearr_130876_133813 = state_130728__$1;
(statearr_130876_133813[(2)] = inst_130410);

(statearr_130876_133813[(1)] = (45));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130732 === (4))){
var _ = (function (){var statearr_130882 = state_130728;
(statearr_130882[(4)] = cljs.core.rest((state_130728[(4)])));

return statearr_130882;
})();
var inst_130093 = (state_130728[(2)]);
var inst_130095 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_130096 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_130097 = (new cljs.core.PersistentVector(null,1,(5),inst_130095,inst_130096,null));
var inst_130098 = cljs.test.update_current_env_BANG_(inst_130097,cljs.core.rest);
var ___$1 = (function (){var temp__5753__auto__ = (state_130728[(5)]);
if(cljs.core.truth_(temp__5753__auto__)){
var e__38733__auto__ = temp__5753__auto__;
throw e__38733__auto__;
} else {
return null;
}
})();
var state_130728__$1 = (function (){var statearr_130887 = state_130728;
(statearr_130887[(14)] = inst_130098);

return statearr_130887;
})();
var statearr_130889_133817 = state_130728__$1;
(statearr_130889_133817[(2)] = inst_130093);

(statearr_130889_133817[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130732 === (77))){
var inst_130626 = (state_130728[(2)]);
var inst_130627 = cljs.core.list(new cljs.core.Symbol("async","<!","async/<!",-1308982001,null),new cljs.core.Symbol(null,"output","output",534662484,null));
var inst_130628 = "bar";
var inst_130630 = expectations.compare_expr.cljs$core$IFn$_invoke$arity$4("bar",inst_130626,inst_130628,inst_130627);
var inst_130631 = expectations.__GT_failure_message(inst_130630);
var inst_130632 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_130627)," => ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_130628)].join('');
var inst_130633 = clojure.string.replace(inst_130631,/^.*?\n/,inst_130632);
var inst_130634 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_130635 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_130630);
var inst_130636 = [inst_130635,inst_130628,inst_130627,inst_130633];
var inst_130637 = cljs.core.PersistentHashMap.fromArrays(inst_130634,inst_130636);
var inst_130638 = cljs.test.do_report(inst_130637);
var _ = (function (){var statearr_130896 = state_130728;
(statearr_130896[(4)] = cljs.core.rest((state_130728[(4)])));

return statearr_130896;
})();
var state_130728__$1 = state_130728;
var statearr_130898_133821 = state_130728__$1;
(statearr_130898_133821[(2)] = inst_130638);

(statearr_130898_133821[(1)] = (74));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130732 === (54))){
var _ = (function (){var statearr_130902 = state_130728;
(statearr_130902[(4)] = cljs.core.cons((56),(state_130728[(4)])));

return statearr_130902;
})();
var ___$1 = (function (){var statearr_130904 = state_130728;
(statearr_130904[(4)] = cljs.core.cons((57),(state_130728[(4)])));

return statearr_130904;
})();
var inst_130492 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(control,cljs.core.assoc,new cljs.core.Keyword(null,"ignore-prompt","ignore-prompt",-1001404739),true);
var inst_130493 = new cljs.core.Symbol(null,"id01","id01",-1954134071,null);
var inst_130494 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(control,cljs.core.update,new cljs.core.Keyword(null,"pending-evals","pending-evals",1249255957),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_130493], 0));
var inst_130495 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(buffer,cljs.core.conj,"lol[tooling$eval-res id01 \":foo\"]\nuser.cljs=> ");
var state_130728__$1 = (function (){var statearr_130908 = state_130728;
(statearr_130908[(15)] = inst_130492);

(statearr_130908[(16)] = inst_130494);

(statearr_130908[(17)] = inst_130495);

return statearr_130908;
})();
var statearr_130911_133825 = state_130728__$1;
(statearr_130911_133825[(2)] = null);

(statearr_130911_133825[(1)] = (58));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130732 === (15))){
var _ = (function (){var statearr_130912 = state_130728;
(statearr_130912[(4)] = cljs.core.cons((18),(state_130728[(4)])));

return statearr_130912;
})();
var state_130728__$1 = state_130728;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_130728__$1,(19),results);
} else {
if((state_val_130732 === (48))){
var inst_130417 = (state_130728[(2)]);
var inst_130418 = cljs.core.list(new cljs.core.Symbol("async","<!","async/<!",-1308982001,null),new cljs.core.Symbol(null,"output","output",534662484,null));
var inst_130419 = "lol";
var inst_130420 = expectations.compare_expr.cljs$core$IFn$_invoke$arity$4("lol",inst_130417,inst_130419,inst_130418);
var inst_130421 = expectations.__GT_failure_message(inst_130420);
var inst_130423 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_130418)," => ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_130419)].join('');
var inst_130424 = clojure.string.replace(inst_130421,/^.*?\n/,inst_130423);
var inst_130428 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_130429 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_130420);
var inst_130430 = [inst_130429,inst_130419,inst_130418,inst_130424];
var inst_130431 = cljs.core.PersistentHashMap.fromArrays(inst_130428,inst_130430);
var inst_130432 = cljs.test.do_report(inst_130431);
var _ = (function (){var statearr_130919 = state_130728;
(statearr_130919[(4)] = cljs.core.rest((state_130728[(4)])));

return statearr_130919;
})();
var state_130728__$1 = state_130728;
var statearr_130922_133827 = state_130728__$1;
(statearr_130922_133827[(2)] = inst_130432);

(statearr_130922_133827[(1)] = (45));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130732 === (50))){
var inst_130470 = (state_130728[(2)]);
var _ = (function (){var statearr_130924 = state_130728;
(statearr_130924[(4)] = cljs.core.rest((state_130728[(4)])));

return statearr_130924;
})();
var state_130728__$1 = state_130728;
var statearr_130926_133828 = state_130728__$1;
(statearr_130926_133828[(2)] = inst_130470);

(statearr_130926_133828[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130732 === (75))){
var inst_130608 = (state_130728[(2)]);
var inst_130610 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_130611 = check.core.normalize_error(inst_130608);
var inst_130612 = cljs.core.list(new cljs.core.Symbol("async","<!","async/<!",-1308982001,null),new cljs.core.Symbol(null,"output","output",534662484,null));
var inst_130613 = new cljs.core.Symbol(null,"=expect=>","=expect=>",-1384225590,null);
var inst_130614 = "bar";
var inst_130615 = ["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_130612)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_130613)," ",inst_130614].join('');
var inst_130616 = [new cljs.core.Keyword(null,"error","error",-978969032),"bar",inst_130611,inst_130615];
var inst_130617 = cljs.core.PersistentHashMap.fromArrays(inst_130610,inst_130616);
var inst_130618 = cljs.test.do_report(inst_130617);
var state_130728__$1 = state_130728;
var statearr_130934_133830 = state_130728__$1;
(statearr_130934_133830[(2)] = inst_130618);

(statearr_130934_133830[(1)] = (74));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130732 === (21))){
var inst_130249 = (state_130728[(2)]);
var _ = (function (){var statearr_130938 = state_130728;
(statearr_130938[(4)] = cljs.core.rest((state_130728[(4)])));

return statearr_130938;
})();
var state_130728__$1 = state_130728;
var statearr_130940_133833 = state_130728__$1;
(statearr_130940_133833[(2)] = inst_130249);

(statearr_130940_133833[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130732 === (31))){
var inst_130275 = (state_130728[(2)]);
var inst_130277 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_130278 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id01","id01",-1954134071,null),":foo"], null);
var inst_130279 = check.core.normalize_error(inst_130275);
var inst_130281 = cljs.core.list(new cljs.core.Symbol("async","<!","async/<!",-1308982001,null),new cljs.core.Symbol(null,"results","results",506361414,null));
var inst_130283 = new cljs.core.Symbol(null,"=expect=>","=expect=>",-1384225590,null);
var inst_130284 = cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id01","id01",-1954134071,null),":foo"], null));
var inst_130285 = ["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_130281)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_130283)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_130284)].join('');
var inst_130286 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_130278,inst_130279,inst_130285];
var inst_130287 = cljs.core.PersistentHashMap.fromArrays(inst_130277,inst_130286);
var inst_130288 = cljs.test.do_report(inst_130287);
var state_130728__$1 = state_130728;
var statearr_130943_133834 = state_130728__$1;
(statearr_130943_133834[(2)] = inst_130288);

(statearr_130943_133834[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130732 === (32))){
var _ = (function (){var statearr_130948 = state_130728;
(statearr_130948[(4)] = cljs.core.rest((state_130728[(4)])));

return statearr_130948;
})();
var state_130728__$1 = state_130728;
var ex130937 = (state_130728__$1[(2)]);
var statearr_130952_133835 = state_130728__$1;
(statearr_130952_133835[(5)] = ex130937);


var statearr_130953_133836 = state_130728__$1;
(statearr_130953_133836[(1)] = (31));

(statearr_130953_133836[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130732 === (40))){
var inst_130397 = (state_130728[(2)]);
var state_130728__$1 = (function (){var statearr_130958 = state_130728;
(statearr_130958[(18)] = inst_130397);

return statearr_130958;
})();
var statearr_130959_133838 = state_130728__$1;
(statearr_130959_133838[(2)] = null);

(statearr_130959_133838[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130732 === (56))){
var _ = (function (){var statearr_130962 = state_130728;
(statearr_130962[(4)] = cljs.core.rest((state_130728[(4)])));

return statearr_130962;
})();
var inst_130479 = (state_130728[(2)]);
var inst_130480 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_130481 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_130482 = (new cljs.core.PersistentVector(null,1,(5),inst_130480,inst_130481,null));
var inst_130483 = cljs.test.update_current_env_BANG_(inst_130482,cljs.core.rest);
var ___$1 = (function (){var temp__5753__auto__ = (state_130728[(5)]);
if(cljs.core.truth_(temp__5753__auto__)){
var e__38733__auto__ = temp__5753__auto__;
throw e__38733__auto__;
} else {
return null;
}
})();
var state_130728__$1 = (function (){var statearr_130967 = state_130728;
(statearr_130967[(19)] = inst_130483);

return statearr_130967;
})();
var statearr_130968_133841 = state_130728__$1;
(statearr_130968_133841[(2)] = inst_130479);

(statearr_130968_133841[(1)] = (55));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130732 === (33))){
var inst_130298 = (state_130728[(2)]);
var inst_130300 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id01","id01",-1954134071,null),":foo"], null);
var inst_130301 = cljs.core.list(new cljs.core.Symbol("async","<!","async/<!",-1308982001,null),new cljs.core.Symbol(null,"results","results",506361414,null));
var inst_130302 = cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id01","id01",-1954134071,null),":foo"], null));
var inst_130303 = expectations.compare_expr.cljs$core$IFn$_invoke$arity$4(inst_130300,inst_130298,inst_130302,inst_130301);
var inst_130305 = expectations.__GT_failure_message(inst_130303);
var inst_130307 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_130301)," => ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_130302)].join('');
var inst_130308 = clojure.string.replace(inst_130305,/^.*?\n/,inst_130307);
var inst_130311 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_130312 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_130303);
var inst_130313 = [inst_130312,inst_130302,inst_130301,inst_130308];
var inst_130314 = cljs.core.PersistentHashMap.fromArrays(inst_130311,inst_130313);
var inst_130315 = cljs.test.do_report(inst_130314);
var _ = (function (){var statearr_130975 = state_130728;
(statearr_130975[(4)] = cljs.core.rest((state_130728[(4)])));

return statearr_130975;
})();
var state_130728__$1 = state_130728;
var statearr_130977_133846 = state_130728__$1;
(statearr_130977_133846[(2)] = inst_130315);

(statearr_130977_133846[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130732 === (13))){
var _ = (function (){var statearr_130979 = state_130728;
(statearr_130979[(4)] = cljs.core.rest((state_130728[(4)])));

return statearr_130979;
})();
var inst_130155 = (state_130728[(2)]);
var inst_130156 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_130157 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_130158 = (new cljs.core.PersistentVector(null,1,(5),inst_130156,inst_130157,null));
var inst_130159 = cljs.test.update_current_env_BANG_(inst_130158,cljs.core.rest);
var ___$1 = (function (){var temp__5753__auto__ = (state_130728[(5)]);
if(cljs.core.truth_(temp__5753__auto__)){
var e__38733__auto__ = temp__5753__auto__;
throw e__38733__auto__;
} else {
return null;
}
})();
var state_130728__$1 = (function (){var statearr_130987 = state_130728;
(statearr_130987[(20)] = inst_130159);

return statearr_130987;
})();
var statearr_130988_133850 = state_130728__$1;
(statearr_130988_133850[(2)] = inst_130155);

(statearr_130988_133850[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130732 === (22))){
var inst_130210 = (state_130728[(2)]);
var inst_130212 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_130214 = check.core.normalize_error(inst_130210);
var inst_130216 = cljs.core.list(new cljs.core.Symbol("async","<!","async/<!",-1308982001,null),new cljs.core.Symbol(null,"output","output",534662484,null));
var inst_130218 = new cljs.core.Symbol(null,"=expect=>","=expect=>",-1384225590,null);
var inst_130219 = "[tooling$eval-res id01 \":foo\"]";
var inst_130220 = ["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_130216)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_130218)," ",inst_130219].join('');
var inst_130221 = [new cljs.core.Keyword(null,"error","error",-978969032),"[tooling$eval-res id01 \":foo\"]",inst_130214,inst_130220];
var inst_130222 = cljs.core.PersistentHashMap.fromArrays(inst_130212,inst_130221);
var inst_130223 = cljs.test.do_report(inst_130222);
var state_130728__$1 = state_130728;
var statearr_130991_133852 = state_130728__$1;
(statearr_130991_133852[(2)] = inst_130223);

(statearr_130991_133852[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130732 === (36))){
var inst_130320 = (state_130728[(2)]);
var inst_130323 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_130324 = check.core.normalize_error(inst_130320);
var inst_130325 = cljs.core.list(new cljs.core.Symbol("async","<!","async/<!",-1308982001,null),new cljs.core.Symbol(null,"output","output",534662484,null));
var inst_130326 = new cljs.core.Symbol(null,"=expect=>","=expect=>",-1384225590,null);
var inst_130327 = "lol";
var inst_130328 = ["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_130325)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_130326)," ",inst_130327].join('');
var inst_130329 = [new cljs.core.Keyword(null,"error","error",-978969032),"lol",inst_130324,inst_130328];
var inst_130330 = cljs.core.PersistentHashMap.fromArrays(inst_130323,inst_130329);
var inst_130331 = cljs.test.do_report(inst_130330);
var state_130728__$1 = state_130728;
var statearr_130999_133855 = state_130728__$1;
(statearr_130999_133855[(2)] = inst_130331);

(statearr_130999_133855[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130732 === (41))){
var inst_130360 = (state_130728[(2)]);
var inst_130363 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_130364 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id01","id01",-1954134071,null),":foo"], null);
var inst_130365 = check.core.normalize_error(inst_130360);
var inst_130366 = cljs.core.list(new cljs.core.Symbol("async","<!","async/<!",-1308982001,null),new cljs.core.Symbol(null,"results","results",506361414,null));
var inst_130367 = new cljs.core.Symbol(null,"=expect=>","=expect=>",-1384225590,null);
var inst_130368 = cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id01","id01",-1954134071,null),":foo"], null));
var inst_130369 = ["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_130366)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_130367)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_130368)].join('');
var inst_130370 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_130364,inst_130365,inst_130369];
var inst_130371 = cljs.core.PersistentHashMap.fromArrays(inst_130363,inst_130370);
var inst_130372 = cljs.test.do_report(inst_130371);
var state_130728__$1 = state_130728;
var statearr_131005_133857 = state_130728__$1;
(statearr_131005_133857[(2)] = inst_130372);

(statearr_131005_133857[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130732 === (43))){
var inst_130381 = (state_130728[(2)]);
var inst_130382 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id01","id01",-1954134071,null),":foo"], null);
var inst_130383 = cljs.core.list(new cljs.core.Symbol("async","<!","async/<!",-1308982001,null),new cljs.core.Symbol(null,"results","results",506361414,null));
var inst_130384 = cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id01","id01",-1954134071,null),":foo"], null));
var inst_130385 = expectations.compare_expr.cljs$core$IFn$_invoke$arity$4(inst_130382,inst_130381,inst_130384,inst_130383);
var inst_130387 = expectations.__GT_failure_message(inst_130385);
var inst_130388 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_130383)," => ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_130384)].join('');
var inst_130389 = clojure.string.replace(inst_130387,/^.*?\n/,inst_130388);
var inst_130390 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_130391 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_130385);
var inst_130392 = [inst_130391,inst_130384,inst_130383,inst_130389];
var inst_130393 = cljs.core.PersistentHashMap.fromArrays(inst_130390,inst_130392);
var inst_130394 = cljs.test.do_report(inst_130393);
var _ = (function (){var statearr_131007 = state_130728;
(statearr_131007[(4)] = cljs.core.rest((state_130728[(4)])));

return statearr_131007;
})();
var state_130728__$1 = state_130728;
var statearr_131009_133862 = state_130728__$1;
(statearr_131009_133862[(2)] = inst_130394);

(statearr_131009_133862[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130732 === (61))){
var _ = (function (){var statearr_131012 = state_130728;
(statearr_131012[(4)] = cljs.core.rest((state_130728[(4)])));

return statearr_131012;
})();
var state_130728__$1 = state_130728;
var ex131000 = (state_130728__$1[(2)]);
var statearr_131014_133865 = state_130728__$1;
(statearr_131014_133865[(5)] = ex131000);


var statearr_131016_133866 = state_130728__$1;
(statearr_131016_133866[(1)] = (60));

(statearr_131016_133866[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130732 === (29))){
var _ = (function (){var statearr_131017 = state_130728;
(statearr_131017[(4)] = cljs.core.cons((32),(state_130728[(4)])));

return statearr_131017;
})();
var state_130728__$1 = state_130728;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_130728__$1,(33),results);
} else {
if((state_val_130732 === (44))){
var _ = (function (){var statearr_131020 = state_130728;
(statearr_131020[(4)] = cljs.core.cons((47),(state_130728[(4)])));

return statearr_131020;
})();
var state_130728__$1 = state_130728;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_130728__$1,(48),output);
} else {
if((state_val_130732 === (6))){
var _ = (function (){var statearr_131024 = state_130728;
(statearr_131024[(4)] = cljs.core.cons((9),(state_130728[(4)])));

return statearr_131024;
})();
var state_130728__$1 = state_130728;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_130728__$1,(10),output);
} else {
if((state_val_130732 === (28))){
var _ = (function (){var statearr_131028 = state_130728;
(statearr_131028[(4)] = cljs.core.rest((state_130728[(4)])));

return statearr_131028;
})();
var state_130728__$1 = state_130728;
var ex131019 = (state_130728__$1[(2)]);
var statearr_131029_133870 = state_130728__$1;
(statearr_131029_133870[(5)] = ex131019);


throw ex131019;


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130732 === (64))){
var inst_130566 = (state_130728[(2)]);
var inst_130567 = new cljs.core.Symbol(null,"id01","id01",-1954134071,null);
var inst_130568 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(control,cljs.core.update,new cljs.core.Keyword(null,"pending-evals","pending-evals",1249255957),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_130567], 0));
var inst_130569 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(buffer,cljs.core.conj,"[tooling$eval-res id01 \":foo\"]user.cljs=> bar");
var state_130728__$1 = (function (){var statearr_131033 = state_130728;
(statearr_131033[(21)] = inst_130569);

(statearr_131033[(22)] = inst_130566);

(statearr_131033[(23)] = inst_130568);

return statearr_131033;
})();
var statearr_131035_133873 = state_130728__$1;
(statearr_131035_133873[(2)] = null);

(statearr_131035_133873[(1)] = (68));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130732 === (51))){
var inst_130437 = (state_130728[(2)]);
var inst_130438 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_130440 = check.core.normalize_error(inst_130437);
var inst_130441 = cljs.core.list(new cljs.core.Symbol("async","<!","async/<!",-1308982001,null),new cljs.core.Symbol(null,"output","output",534662484,null));
var inst_130442 = new cljs.core.Symbol(null,"=expect=>","=expect=>",-1384225590,null);
var inst_130443 = "bar";
var inst_130444 = ["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_130441)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_130442)," ",inst_130443].join('');
var inst_130445 = [new cljs.core.Keyword(null,"error","error",-978969032),"bar",inst_130440,inst_130444];
var inst_130446 = cljs.core.PersistentHashMap.fromArrays(inst_130438,inst_130445);
var inst_130447 = cljs.test.do_report(inst_130446);
var state_130728__$1 = state_130728;
var statearr_131039_133875 = state_130728__$1;
(statearr_131039_133875[(2)] = inst_130447);

(statearr_131039_133875[(1)] = (50));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130732 === (25))){
var _ = (function (){var statearr_131042 = state_130728;
(statearr_131042[(4)] = cljs.core.cons((27),(state_130728[(4)])));

return statearr_131042;
})();
var ___$1 = (function (){var statearr_131043 = state_130728;
(statearr_131043[(4)] = cljs.core.cons((28),(state_130728[(4)])));

return statearr_131043;
})();
var inst_130272 = new cljs.core.Symbol(null,"id01","id01",-1954134071,null);
var inst_130273 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(control,cljs.core.update,new cljs.core.Keyword(null,"pending-evals","pending-evals",1249255957),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_130272], 0));
var inst_130274 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(buffer,cljs.core.conj,"lol[tooling$eval-res id01 \":foo\"]");
var state_130728__$1 = (function (){var statearr_131048 = state_130728;
(statearr_131048[(24)] = inst_130273);

(statearr_131048[(25)] = inst_130274);

return statearr_131048;
})();
var statearr_131050_133878 = state_130728__$1;
(statearr_131050_133878[(2)] = null);

(statearr_131050_133878[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130732 === (34))){
var _ = (function (){var statearr_131052 = state_130728;
(statearr_131052[(4)] = cljs.core.cons((37),(state_130728[(4)])));

return statearr_131052;
})();
var state_130728__$1 = state_130728;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_130728__$1,(38),output);
} else {
if((state_val_130732 === (17))){
var inst_130171 = (state_130728[(2)]);
var inst_130172 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_130173 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id01","id01",-1954134071,null),":foo"], null);
var inst_130174 = check.core.normalize_error(inst_130171);
var inst_130175 = cljs.core.list(new cljs.core.Symbol("async","<!","async/<!",-1308982001,null),new cljs.core.Symbol(null,"results","results",506361414,null));
var inst_130176 = new cljs.core.Symbol(null,"=expect=>","=expect=>",-1384225590,null);
var inst_130177 = cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id01","id01",-1954134071,null),":foo"], null));
var inst_130178 = ["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_130175)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_130176)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_130177)].join('');
var inst_130179 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_130173,inst_130174,inst_130178];
var inst_130180 = cljs.core.PersistentHashMap.fromArrays(inst_130172,inst_130179);
var inst_130181 = cljs.test.do_report(inst_130180);
var state_130728__$1 = state_130728;
var statearr_131060_133881 = state_130728__$1;
(statearr_131060_133881[(2)] = inst_130181);

(statearr_131060_133881[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130732 === (3))){
var inst_130148 = (state_130728[(2)]);
var inst_130150 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_130151 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_130152 = (new cljs.core.PersistentVector(null,1,(5),inst_130150,inst_130151,null));
var inst_130153 = cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(inst_130152,cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["captures results of simple evaluations"], 0));
var state_130728__$1 = (function (){var statearr_131067 = state_130728;
(statearr_131067[(26)] = inst_130148);

(statearr_131067[(27)] = inst_130153);

return statearr_131067;
})();
var statearr_131070_133883 = state_130728__$1;
(statearr_131070_133883[(2)] = null);

(statearr_131070_133883[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130732 === (12))){
var inst_130252 = (state_130728[(2)]);
var inst_130253 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_130254 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_130255 = (new cljs.core.PersistentVector(null,1,(5),inst_130253,inst_130254,null));
var inst_130256 = cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(inst_130255,cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["captures results of results mixed with stdout"], 0));
var state_130728__$1 = (function (){var statearr_131074 = state_130728;
(statearr_131074[(28)] = inst_130256);

(statearr_131074[(29)] = inst_130252);

return statearr_131074;
})();
var statearr_131076_133884 = state_130728__$1;
(statearr_131076_133884[(2)] = null);

(statearr_131076_133884[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130732 === (2))){
var _ = (function (){var statearr_131080 = state_130728;
(statearr_131080[(4)] = cljs.core.cons((4),(state_130728[(4)])));

return statearr_131080;
})();
var ___$1 = (function (){var statearr_131081 = state_130728;
(statearr_131081[(4)] = cljs.core.cons((5),(state_130728[(4)])));

return statearr_131081;
})();
var inst_130106 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(buffer,cljs.core.conj,":foobar");
var state_130728__$1 = (function (){var statearr_131083 = state_130728;
(statearr_131083[(30)] = inst_130106);

return statearr_131083;
})();
var statearr_131084_133886 = state_130728__$1;
(statearr_131084_133886[(2)] = null);

(statearr_131084_133886[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130732 === (66))){
var _ = (function (){var statearr_131086 = state_130728;
(statearr_131086[(4)] = cljs.core.rest((state_130728[(4)])));

return statearr_131086;
})();
var state_130728__$1 = state_130728;
var ex131073 = (state_130728__$1[(2)]);
var statearr_131089_133888 = state_130728__$1;
(statearr_131089_133888[(5)] = ex131073);


var statearr_131091_133889 = state_130728__$1;
(statearr_131091_133889[(1)] = (65));

(statearr_131091_133889[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130732 === (23))){
var _ = (function (){var statearr_131094 = state_130728;
(statearr_131094[(4)] = cljs.core.rest((state_130728[(4)])));

return statearr_131094;
})();
var state_130728__$1 = state_130728;
var ex131078 = (state_130728__$1[(2)]);
var statearr_131097_133890 = state_130728__$1;
(statearr_131097_133890[(5)] = ex131078);


var statearr_131099_133891 = state_130728__$1;
(statearr_131099_133891[(1)] = (22));

(statearr_131099_133891[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130732 === (47))){
var _ = (function (){var statearr_131101 = state_130728;
(statearr_131101[(4)] = cljs.core.rest((state_130728[(4)])));

return statearr_131101;
})();
var state_130728__$1 = state_130728;
var ex131085 = (state_130728__$1[(2)]);
var statearr_131103_133894 = state_130728__$1;
(statearr_131103_133894[(5)] = ex131085);


var statearr_131105_133895 = state_130728__$1;
(statearr_131105_133895[(1)] = (46));

(statearr_131105_133895[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130732 === (35))){
var inst_130355 = (state_130728[(2)]);
var inst_130357 = new cljs.core.Symbol(null,"id01","id01",-1954134071,null);
var inst_130358 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(control,cljs.core.update,new cljs.core.Keyword(null,"pending-evals","pending-evals",1249255957),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_130357], 0));
var inst_130359 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(buffer,cljs.core.conj,"lol[tooling$eval-res id01 \":foo\"]bar");
var state_130728__$1 = (function (){var statearr_131113 = state_130728;
(statearr_131113[(31)] = inst_130359);

(statearr_131113[(32)] = inst_130355);

(statearr_131113[(33)] = inst_130358);

return statearr_131113;
})();
var statearr_131122_133897 = state_130728__$1;
(statearr_131122_133897[(2)] = null);

(statearr_131122_133897[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130732 === (82))){
var _ = (function (){var statearr_131127 = state_130728;
(statearr_131127[(4)] = cljs.core.cons((85),(state_130728[(4)])));

return statearr_131127;
})();
var state_130728__$1 = state_130728;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_130728__$1,(86),results);
} else {
if((state_val_130732 === (76))){
var _ = (function (){var statearr_131130 = state_130728;
(statearr_131130[(4)] = cljs.core.rest((state_130728[(4)])));

return statearr_131130;
})();
var state_130728__$1 = state_130728;
var ex131109 = (state_130728__$1[(2)]);
var statearr_131133_133899 = state_130728__$1;
(statearr_131133_133899[(5)] = ex131109);


var statearr_131134_133900 = state_130728__$1;
(statearr_131134_133900[(1)] = (75));

(statearr_131134_133900[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130732 === (19))){
var inst_130191 = (state_130728[(2)]);
var inst_130192 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id01","id01",-1954134071,null),":foo"], null);
var inst_130193 = cljs.core.list(new cljs.core.Symbol("async","<!","async/<!",-1308982001,null),new cljs.core.Symbol(null,"results","results",506361414,null));
var inst_130194 = cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id01","id01",-1954134071,null),":foo"], null));
var inst_130195 = expectations.compare_expr.cljs$core$IFn$_invoke$arity$4(inst_130192,inst_130191,inst_130194,inst_130193);
var inst_130196 = expectations.__GT_failure_message(inst_130195);
var inst_130198 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_130193)," => ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_130194)].join('');
var inst_130199 = clojure.string.replace(inst_130196,/^.*?\n/,inst_130198);
var inst_130200 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_130202 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_130195);
var inst_130203 = [inst_130202,inst_130194,inst_130193,inst_130199];
var inst_130204 = cljs.core.PersistentHashMap.fromArrays(inst_130200,inst_130203);
var inst_130205 = cljs.test.do_report(inst_130204);
var _ = (function (){var statearr_131139 = state_130728;
(statearr_131139[(4)] = cljs.core.rest((state_130728[(4)])));

return statearr_131139;
})();
var state_130728__$1 = state_130728;
var statearr_131142_133903 = state_130728__$1;
(statearr_131142_133903[(2)] = inst_130205);

(statearr_131142_133903[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130732 === (57))){
var _ = (function (){var statearr_131144 = state_130728;
(statearr_131144[(4)] = cljs.core.rest((state_130728[(4)])));

return statearr_131144;
})();
var state_130728__$1 = state_130728;
var ex131129 = (state_130728__$1[(2)]);
var statearr_131145_133904 = state_130728__$1;
(statearr_131145_133904[(5)] = ex131129);


throw ex131129;


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130732 === (68))){
var _ = (function (){var statearr_131148 = state_130728;
(statearr_131148[(4)] = cljs.core.cons((71),(state_130728[(4)])));

return statearr_131148;
})();
var state_130728__$1 = state_130728;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_130728__$1,(72),results);
} else {
if((state_val_130732 === (11))){
var _ = (function (){var statearr_131154 = state_130728;
(statearr_131154[(4)] = cljs.core.cons((13),(state_130728[(4)])));

return statearr_131154;
})();
var ___$1 = (function (){var statearr_131157 = state_130728;
(statearr_131157[(4)] = cljs.core.cons((14),(state_130728[(4)])));

return statearr_131157;
})();
var inst_130168 = new cljs.core.Symbol(null,"id01","id01",-1954134071,null);
var inst_130169 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(control,cljs.core.update,new cljs.core.Keyword(null,"pending-evals","pending-evals",1249255957),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_130168], 0));
var inst_130170 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(buffer,cljs.core.conj,"[tooling$eval-res id01 \":foo\"]");
var state_130728__$1 = (function (){var statearr_131161 = state_130728;
(statearr_131161[(34)] = inst_130169);

(statearr_131161[(35)] = inst_130170);

return statearr_131161;
})();
var statearr_131163_133908 = state_130728__$1;
(statearr_131163_133908[(2)] = null);

(statearr_131163_133908[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130732 === (9))){
var _ = (function (){var statearr_131166 = state_130728;
(statearr_131166[(4)] = cljs.core.rest((state_130728[(4)])));

return statearr_131166;
})();
var state_130728__$1 = state_130728;
var ex131147 = (state_130728__$1[(2)]);
var statearr_131168_133909 = state_130728__$1;
(statearr_131168_133909[(5)] = ex131147);


var statearr_131171_133910 = state_130728__$1;
(statearr_131171_133910[(1)] = (8));

(statearr_131171_133910[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130732 === (5))){
var _ = (function (){var statearr_131176 = state_130728;
(statearr_131176[(4)] = cljs.core.rest((state_130728[(4)])));

return statearr_131176;
})();
var state_130728__$1 = state_130728;
var ex131153 = (state_130728__$1[(2)]);
var statearr_131178_133913 = state_130728__$1;
(statearr_131178_133913[(5)] = ex131153);


throw ex131153;


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130732 === (83))){
var inst_130706 = (state_130728[(2)]);
var _ = (function (){var statearr_131180 = state_130728;
(statearr_131180[(4)] = cljs.core.rest((state_130728[(4)])));

return statearr_131180;
})();
var state_130728__$1 = state_130728;
var statearr_131182_133915 = state_130728__$1;
(statearr_131182_133915[(2)] = inst_130706);

(statearr_131182_133915[(1)] = (80));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130732 === (14))){
var _ = (function (){var statearr_131185 = state_130728;
(statearr_131185[(4)] = cljs.core.rest((state_130728[(4)])));

return statearr_131185;
})();
var state_130728__$1 = state_130728;
var ex131174 = (state_130728__$1[(2)]);
var statearr_131186_133918 = state_130728__$1;
(statearr_131186_133918[(5)] = ex131174);


throw ex131174;


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130732 === (45))){
var inst_130435 = (state_130728[(2)]);
var state_130728__$1 = (function (){var statearr_131190 = state_130728;
(statearr_131190[(36)] = inst_130435);

return statearr_131190;
})();
var statearr_131192_133919 = state_130728__$1;
(statearr_131192_133919[(2)] = null);

(statearr_131192_133919[(1)] = (49));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130732 === (53))){
var inst_130455 = (state_130728[(2)]);
var inst_130456 = cljs.core.list(new cljs.core.Symbol("async","<!","async/<!",-1308982001,null),new cljs.core.Symbol(null,"output","output",534662484,null));
var inst_130457 = "bar";
var inst_130458 = expectations.compare_expr.cljs$core$IFn$_invoke$arity$4("bar",inst_130455,inst_130457,inst_130456);
var inst_130459 = expectations.__GT_failure_message(inst_130458);
var inst_130460 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_130456)," => ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_130457)].join('');
var inst_130462 = clojure.string.replace(inst_130459,/^.*?\n/,inst_130460);
var inst_130463 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_130464 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_130458);
var inst_130465 = [inst_130464,inst_130457,inst_130456,inst_130462];
var inst_130466 = cljs.core.PersistentHashMap.fromArrays(inst_130463,inst_130465);
var inst_130467 = cljs.test.do_report(inst_130466);
var _ = (function (){var statearr_131198 = state_130728;
(statearr_131198[(4)] = cljs.core.rest((state_130728[(4)])));

return statearr_131198;
})();
var state_130728__$1 = state_130728;
var statearr_131203_133922 = state_130728__$1;
(statearr_131203_133922[(2)] = inst_130467);

(statearr_131203_133922[(1)] = (50));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130732 === (78))){
var _ = (function (){var statearr_131206 = state_130728;
(statearr_131206[(4)] = cljs.core.cons((80),(state_130728[(4)])));

return statearr_131206;
})();
var ___$1 = (function (){var statearr_131209 = state_130728;
(statearr_131209[(4)] = cljs.core.cons((81),(state_130728[(4)])));

return statearr_131209;
})();
var inst_130665 = new cljs.core.Symbol(null,"id02","id02",365882140,null);
var inst_130666 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(control,cljs.core.update,new cljs.core.Keyword(null,"pending-evals","pending-evals",1249255957),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_130665], 0));
var inst_130667 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(buffer,cljs.core.conj,"[tooling$eval-res id02 \"[\n");
var inst_130668 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(buffer,cljs.core.conj,"1 2\n");
var inst_130669 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(buffer,cljs.core.conj,"]\"]");
var state_130728__$1 = (function (){var statearr_131216 = state_130728;
(statearr_131216[(37)] = inst_130668);

(statearr_131216[(38)] = inst_130666);

(statearr_131216[(39)] = inst_130667);

(statearr_131216[(40)] = inst_130669);

return statearr_131216;
})();
var statearr_131218_133926 = state_130728__$1;
(statearr_131218_133926[(2)] = null);

(statearr_131218_133926[(1)] = (82));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130732 === (26))){
var inst_130473 = (state_130728[(2)]);
var inst_130474 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_130475 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_130476 = (new cljs.core.PersistentVector(null,1,(5),inst_130474,inst_130475,null));
var inst_130477 = cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(inst_130476,cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["ignores prompt after a result"], 0));
var state_130728__$1 = (function (){var statearr_131226 = state_130728;
(statearr_131226[(41)] = inst_130477);

(statearr_131226[(42)] = inst_130473);

return statearr_131226;
})();
var statearr_131227_133928 = state_130728__$1;
(statearr_131227_133928[(2)] = null);

(statearr_131227_133928[(1)] = (54));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130732 === (16))){
var inst_130208 = (state_130728[(2)]);
var inst_130209 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(buffer,cljs.core.conj,"[tooling$eval-res id01 \":foo\"]");
var state_130728__$1 = (function (){var statearr_131229 = state_130728;
(statearr_131229[(43)] = inst_130209);

(statearr_131229[(44)] = inst_130208);

return statearr_131229;
})();
var statearr_131230_133930 = state_130728__$1;
(statearr_131230_133930[(2)] = null);

(statearr_131230_133930[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130732 === (81))){
var _ = (function (){var statearr_131231 = state_130728;
(statearr_131231[(4)] = cljs.core.rest((state_130728[(4)])));

return statearr_131231;
})();
var state_130728__$1 = state_130728;
var ex131220 = (state_130728__$1[(2)]);
var statearr_131234_133933 = state_130728__$1;
(statearr_131234_133933[(5)] = ex131220);


throw ex131220;


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130732 === (79))){
var inst_130709 = (state_130728[(2)]);
var inst_130710 = cljs.core.async.close_BANG_(output);
var inst_130711 = cljs.core.async.close_BANG_(results);
var inst_130712 = (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
var state_130728__$1 = (function (){var statearr_131239 = state_130728;
(statearr_131239[(45)] = inst_130711);

(statearr_131239[(46)] = inst_130710);

(statearr_131239[(47)] = inst_130709);

return statearr_131239;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_130728__$1,inst_130712);
} else {
if((state_val_130732 === (38))){
var inst_130339 = (state_130728[(2)]);
var inst_130340 = cljs.core.list(new cljs.core.Symbol("async","<!","async/<!",-1308982001,null),new cljs.core.Symbol(null,"output","output",534662484,null));
var inst_130341 = "lol";
var inst_130342 = expectations.compare_expr.cljs$core$IFn$_invoke$arity$4("lol",inst_130339,inst_130341,inst_130340);
var inst_130343 = expectations.__GT_failure_message(inst_130342);
var inst_130345 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_130340)," => ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_130341)].join('');
var inst_130346 = clojure.string.replace(inst_130343,/^.*?\n/,inst_130345);
var inst_130348 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_130349 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_130342);
var inst_130350 = [inst_130349,inst_130341,inst_130340,inst_130346];
var inst_130351 = cljs.core.PersistentHashMap.fromArrays(inst_130348,inst_130350);
var inst_130352 = cljs.test.do_report(inst_130351);
var _ = (function (){var statearr_131246 = state_130728;
(statearr_131246[(4)] = cljs.core.rest((state_130728[(4)])));

return statearr_131246;
})();
var state_130728__$1 = state_130728;
var statearr_131248_133939 = state_130728__$1;
(statearr_131248_133939[(2)] = inst_130352);

(statearr_131248_133939[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130732 === (30))){
var inst_130318 = (state_130728[(2)]);
var state_130728__$1 = (function (){var statearr_131249 = state_130728;
(statearr_131249[(48)] = inst_130318);

return statearr_131249;
})();
var statearr_131251_133940 = state_130728__$1;
(statearr_131251_133940[(2)] = null);

(statearr_131251_133940[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130732 === (73))){
var _ = (function (){var statearr_131256 = state_130728;
(statearr_131256[(4)] = cljs.core.cons((76),(state_130728[(4)])));

return statearr_131256;
})();
var state_130728__$1 = state_130728;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_130728__$1,(77),output);
} else {
if((state_val_130732 === (10))){
var inst_130128 = (state_130728[(2)]);
var inst_130129 = cljs.core.list(new cljs.core.Symbol("async","<!","async/<!",-1308982001,null),new cljs.core.Symbol(null,"output","output",534662484,null));
var inst_130131 = ":foobar";
var inst_130132 = expectations.compare_expr.cljs$core$IFn$_invoke$arity$4(":foobar",inst_130128,inst_130131,inst_130129);
var inst_130134 = expectations.__GT_failure_message(inst_130132);
var inst_130135 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_130129)," => ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_130131)].join('');
var inst_130136 = clojure.string.replace(inst_130134,/^.*?\n/,inst_130135);
var inst_130137 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_130138 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_130132);
var inst_130139 = [inst_130138,inst_130131,inst_130129,inst_130136];
var inst_130140 = cljs.core.PersistentHashMap.fromArrays(inst_130137,inst_130139);
var inst_130142 = cljs.test.do_report(inst_130140);
var _ = (function (){var statearr_131260 = state_130728;
(statearr_131260[(4)] = cljs.core.rest((state_130728[(4)])));

return statearr_131260;
})();
var state_130728__$1 = state_130728;
var statearr_131264_133943 = state_130728__$1;
(statearr_131264_133943[(2)] = inst_130142);

(statearr_131264_133943[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130732 === (18))){
var _ = (function (){var statearr_131267 = state_130728;
(statearr_131267[(4)] = cljs.core.rest((state_130728[(4)])));

return statearr_131267;
})();
var state_130728__$1 = state_130728;
var ex131254 = (state_130728__$1[(2)]);
var statearr_131271_133946 = state_130728__$1;
(statearr_131271_133946[(5)] = ex131254);


var statearr_131272_133947 = state_130728__$1;
(statearr_131272_133947[(1)] = (17));

(statearr_131272_133947[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130732 === (52))){
var _ = (function (){var statearr_131276 = state_130728;
(statearr_131276[(4)] = cljs.core.rest((state_130728[(4)])));

return statearr_131276;
})();
var state_130728__$1 = state_130728;
var ex131258 = (state_130728__$1[(2)]);
var statearr_131281_133949 = state_130728__$1;
(statearr_131281_133949[(5)] = ex131258);


var statearr_131283_133950 = state_130728__$1;
(statearr_131283_133950[(1)] = (51));

(statearr_131283_133950[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130732 === (67))){
var inst_130551 = (state_130728[(2)]);
var inst_130552 = cljs.core.list(new cljs.core.Symbol("async","<!","async/<!",-1308982001,null),new cljs.core.Symbol(null,"output","output",534662484,null));
var inst_130553 = "lol";
var inst_130554 = expectations.compare_expr.cljs$core$IFn$_invoke$arity$4("lol",inst_130551,inst_130553,inst_130552);
var inst_130555 = expectations.__GT_failure_message(inst_130554);
var inst_130556 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_130552)," => ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_130553)].join('');
var inst_130557 = clojure.string.replace(inst_130555,/^.*?\n/,inst_130556);
var inst_130558 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_130559 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_130554);
var inst_130560 = [inst_130559,inst_130553,inst_130552,inst_130557];
var inst_130561 = cljs.core.PersistentHashMap.fromArrays(inst_130558,inst_130560);
var inst_130562 = cljs.test.do_report(inst_130561);
var _ = (function (){var statearr_131293 = state_130728;
(statearr_131293[(4)] = cljs.core.rest((state_130728[(4)])));

return statearr_131293;
})();
var state_130728__$1 = state_130728;
var statearr_131296_133952 = state_130728__$1;
(statearr_131296_133952[(2)] = inst_130562);

(statearr_131296_133952[(1)] = (64));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130732 === (71))){
var _ = (function (){var statearr_131297 = state_130728;
(statearr_131297[(4)] = cljs.core.rest((state_130728[(4)])));

return statearr_131297;
})();
var state_130728__$1 = state_130728;
var ex131274 = (state_130728__$1[(2)]);
var statearr_131301_133954 = state_130728__$1;
(statearr_131301_133954[(5)] = ex131274);


var statearr_131303_133956 = state_130728__$1;
(statearr_131303_133956[(1)] = (70));

(statearr_131303_133956[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130732 === (42))){
var _ = (function (){var statearr_131306 = state_130728;
(statearr_131306[(4)] = cljs.core.rest((state_130728[(4)])));

return statearr_131306;
})();
var state_130728__$1 = state_130728;
var ex131286 = (state_130728__$1[(2)]);
var statearr_131307_133959 = state_130728__$1;
(statearr_131307_133959[(5)] = ex131286);


var statearr_131309_133960 = state_130728__$1;
(statearr_131309_133960[(1)] = (41));

(statearr_131309_133960[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130732 === (80))){
var _ = (function (){var statearr_131313 = state_130728;
(statearr_131313[(4)] = cljs.core.rest((state_130728[(4)])));

return statearr_131313;
})();
var inst_130652 = (state_130728[(2)]);
var inst_130653 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_130654 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_130655 = (new cljs.core.PersistentVector(null,1,(5),inst_130653,inst_130654,null));
var inst_130656 = cljs.test.update_current_env_BANG_(inst_130655,cljs.core.rest);
var ___$1 = (function (){var temp__5753__auto__ = (state_130728[(5)]);
if(cljs.core.truth_(temp__5753__auto__)){
var e__38733__auto__ = temp__5753__auto__;
throw e__38733__auto__;
} else {
return null;
}
})();
var state_130728__$1 = (function (){var statearr_131316 = state_130728;
(statearr_131316[(49)] = inst_130656);

return statearr_131316;
})();
var statearr_131319_133962 = state_130728__$1;
(statearr_131319_133962[(2)] = inst_130652);

(statearr_131319_133962[(1)] = (79));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130732 === (37))){
var _ = (function (){var statearr_131322 = state_130728;
(statearr_131322[(4)] = cljs.core.rest((state_130728[(4)])));

return statearr_131322;
})();
var state_130728__$1 = state_130728;
var ex131304 = (state_130728__$1[(2)]);
var statearr_131323_133965 = state_130728__$1;
(statearr_131323_133965[(5)] = ex131304);


var statearr_131327_133967 = state_130728__$1;
(statearr_131327_133967[(1)] = (36));

(statearr_131327_133967[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130732 === (63))){
var _ = (function (){var statearr_131329 = state_130728;
(statearr_131329[(4)] = cljs.core.cons((66),(state_130728[(4)])));

return statearr_131329;
})();
var state_130728__$1 = state_130728;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_130728__$1,(67),output);
} else {
if((state_val_130732 === (8))){
var inst_130108 = (state_130728[(2)]);
var inst_130111 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_130112 = check.core.normalize_error(inst_130108);
var inst_130113 = cljs.core.list(new cljs.core.Symbol("async","<!","async/<!",-1308982001,null),new cljs.core.Symbol(null,"output","output",534662484,null));
var inst_130114 = new cljs.core.Symbol(null,"=expect=>","=expect=>",-1384225590,null);
var inst_130115 = ":foobar";
var inst_130116 = ["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_130113)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_130114)," ",inst_130115].join('');
var inst_130117 = [new cljs.core.Keyword(null,"error","error",-978969032),":foobar",inst_130112,inst_130116];
var inst_130118 = cljs.core.PersistentHashMap.fromArrays(inst_130111,inst_130117);
var inst_130119 = cljs.test.do_report(inst_130118);
var state_130728__$1 = state_130728;
var statearr_131334_133969 = state_130728__$1;
(statearr_131334_133969[(2)] = inst_130119);

(statearr_131334_133969[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130732 === (49))){
var _ = (function (){var statearr_131335 = state_130728;
(statearr_131335[(4)] = cljs.core.cons((52),(state_130728[(4)])));

return statearr_131335;
})();
var state_130728__$1 = state_130728;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_130728__$1,(53),output);
} else {
if((state_val_130732 === (84))){
var inst_130671 = (state_130728[(2)]);
var inst_130672 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_130673 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id02","id02",365882140,null),"[\n1 2\n]"], null);
var inst_130674 = check.core.normalize_error(inst_130671);
var inst_130676 = cljs.core.list(new cljs.core.Symbol("async","<!","async/<!",-1308982001,null),new cljs.core.Symbol(null,"results","results",506361414,null));
var inst_130677 = new cljs.core.Symbol(null,"=expect=>","=expect=>",-1384225590,null);
var inst_130678 = cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id02","id02",365882140,null),"[\n1 2\n]"], null));
var inst_130679 = ["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_130676)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_130677)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_130678)].join('');
var inst_130680 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_130673,inst_130674,inst_130679];
var inst_130681 = cljs.core.PersistentHashMap.fromArrays(inst_130672,inst_130680);
var inst_130682 = cljs.test.do_report(inst_130681);
var state_130728__$1 = state_130728;
var statearr_131341_133973 = state_130728__$1;
(statearr_131341_133973[(2)] = inst_130682);

(statearr_131341_133973[(1)] = (83));


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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
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
var repl_tooling$repl_client$connection_test$state_machine__39695__auto__ = null;
var repl_tooling$repl_client$connection_test$state_machine__39695__auto____0 = (function (){
var statearr_131355 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_131355[(0)] = repl_tooling$repl_client$connection_test$state_machine__39695__auto__);

(statearr_131355[(1)] = (1));

return statearr_131355;
});
var repl_tooling$repl_client$connection_test$state_machine__39695__auto____1 = (function (state_130728){
while(true){
var ret_value__39696__auto__ = (function (){try{while(true){
var result__39697__auto__ = switch__39694__auto__(state_130728);
if(cljs.core.keyword_identical_QMARK_(result__39697__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39697__auto__;
}
break;
}
}catch (e131358){var ex__39698__auto__ = e131358;
var statearr_131360_133976 = state_130728;
(statearr_131360_133976[(2)] = ex__39698__auto__);


if(cljs.core.seq((state_130728[(4)]))){
var statearr_131362_133977 = state_130728;
(statearr_131362_133977[(1)] = cljs.core.first((state_130728[(4)])));

} else {
throw ex__39698__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__133980 = state_130728;
state_130728 = G__133980;
continue;
} else {
return ret_value__39696__auto__;
}
break;
}
});
repl_tooling$repl_client$connection_test$state_machine__39695__auto__ = function(state_130728){
switch(arguments.length){
case 0:
return repl_tooling$repl_client$connection_test$state_machine__39695__auto____0.call(this);
case 1:
return repl_tooling$repl_client$connection_test$state_machine__39695__auto____1.call(this,state_130728);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
repl_tooling$repl_client$connection_test$state_machine__39695__auto__.cljs$core$IFn$_invoke$arity$0 = repl_tooling$repl_client$connection_test$state_machine__39695__auto____0;
repl_tooling$repl_client$connection_test$state_machine__39695__auto__.cljs$core$IFn$_invoke$arity$1 = repl_tooling$repl_client$connection_test$state_machine__39695__auto____1;
return repl_tooling$repl_client$connection_test$state_machine__39695__auto__;
})()
})();
var state__39771__auto__ = (function (){var statearr_131365 = f__39770__auto__();
(statearr_131365[(6)] = c__39769__auto__);

return statearr_131365;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39771__auto__);
}));

return c__39769__auto__;
}));

(repl_tooling.repl_client.connection_test.t_repl_tooling$repl_client$connection_test130062.prototype.apply = (function (self__,args130068){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args130068)));
}));

(repl_tooling.repl_client.connection_test.t_repl_tooling$repl_client$connection_test130062.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___9200__auto__ = this;
var buffer = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
var output = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var control = repl_tooling.repl_client.connection.treat_buffer_BANG_(buffer,cljs.core.identity,cljs.core.identity);
var c__39769__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__39770__auto__ = (function (){var switch__39694__auto__ = (function (state_131992){
var state_val_131996 = (state_131992[(1)]);
if((state_val_131996 === (65))){
var inst_131798 = (state_131992[(2)]);
var inst_131799 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_131800 = check.core.normalize_error(inst_131798);
var inst_131801 = cljs.core.list(new cljs.core.Symbol("async","<!","async/<!",-1308982001,null),new cljs.core.Symbol(null,"output","output",534662484,null));
var inst_131802 = new cljs.core.Symbol(null,"=expect=>","=expect=>",-1384225590,null);
var inst_131803 = "lol";
var inst_131804 = ["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_131801)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_131802)," ",inst_131803].join('');
var inst_131805 = [new cljs.core.Keyword(null,"error","error",-978969032),"lol",inst_131800,inst_131804];
var inst_131806 = cljs.core.PersistentHashMap.fromArrays(inst_131799,inst_131805);
var inst_131807 = cljs.test.do_report(inst_131806);
var state_131992__$1 = state_131992;
var statearr_132003_133983 = state_131992__$1;
(statearr_132003_133983[(2)] = inst_131807);

(statearr_132003_133983[(1)] = (64));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_131996 === (70))){
var inst_131839 = (state_131992[(2)]);
var inst_131840 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_131841 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id01","id01",-1954134071,null),":foo"], null);
var inst_131842 = check.core.normalize_error(inst_131839);
var inst_131845 = cljs.core.list(new cljs.core.Symbol("async","<!","async/<!",-1308982001,null),new cljs.core.Symbol(null,"results","results",506361414,null));
var inst_131846 = new cljs.core.Symbol(null,"=expect=>","=expect=>",-1384225590,null);
var inst_131847 = cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id01","id01",-1954134071,null),":foo"], null));
var inst_131848 = ["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_131845)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_131846)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_131847)].join('');
var inst_131849 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_131841,inst_131842,inst_131848];
var inst_131850 = cljs.core.PersistentHashMap.fromArrays(inst_131840,inst_131849);
var inst_131851 = cljs.test.do_report(inst_131850);
var state_131992__$1 = state_131992;
var statearr_132007_133987 = state_131992__$1;
(statearr_132007_133987[(2)] = inst_131851);

(statearr_132007_133987[(1)] = (69));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_131996 === (62))){
var inst_131781 = (state_131992[(2)]);
var inst_131782 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id01","id01",-1954134071,null),":foo"], null);
var inst_131783 = cljs.core.list(new cljs.core.Symbol("async","<!","async/<!",-1308982001,null),new cljs.core.Symbol(null,"results","results",506361414,null));
var inst_131784 = cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id01","id01",-1954134071,null),":foo"], null));
var inst_131785 = expectations.compare_expr.cljs$core$IFn$_invoke$arity$4(inst_131782,inst_131781,inst_131784,inst_131783);
var inst_131786 = expectations.__GT_failure_message(inst_131785);
var inst_131787 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_131783)," => ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_131784)].join('');
var inst_131788 = clojure.string.replace(inst_131786,/^.*?\n/,inst_131787);
var inst_131790 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_131791 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_131785);
var inst_131792 = [inst_131791,inst_131784,inst_131783,inst_131788];
var inst_131793 = cljs.core.PersistentHashMap.fromArrays(inst_131790,inst_131792);
var inst_131794 = cljs.test.do_report(inst_131793);
var _ = (function (){var statearr_132013 = state_131992;
(statearr_132013[(4)] = cljs.core.rest((state_131992[(4)])));

return statearr_132013;
})();
var state_131992__$1 = state_131992;
var statearr_132015_133988 = state_131992__$1;
(statearr_132015_133988[(2)] = inst_131794);

(statearr_132015_133988[(1)] = (59));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_131996 === (74))){
var inst_131917 = (state_131992[(2)]);
var _ = (function (){var statearr_132018 = state_131992;
(statearr_132018[(4)] = cljs.core.rest((state_131992[(4)])));

return statearr_132018;
})();
var state_131992__$1 = state_131992;
var statearr_132033_133991 = state_131992__$1;
(statearr_132033_133991[(2)] = inst_131917);

(statearr_132033_133991[(1)] = (56));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_131996 === (7))){
var inst_131434 = (state_131992[(2)]);
var _ = (function (){var statearr_132036 = state_131992;
(statearr_132036[(4)] = cljs.core.rest((state_131992[(4)])));

return statearr_132036;
})();
var state_131992__$1 = state_131992;
var statearr_132039_133993 = state_131992__$1;
(statearr_132039_133993[(2)] = inst_131434);

(statearr_132039_133993[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_131996 === (59))){
var inst_131797 = (state_131992[(2)]);
var state_131992__$1 = (function (){var statearr_132042 = state_131992;
(statearr_132042[(7)] = inst_131797);

return statearr_132042;
})();
var statearr_132044_133995 = state_131992__$1;
(statearr_132044_133995[(2)] = null);

(statearr_132044_133995[(1)] = (63));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_131996 === (86))){
var inst_131962 = (state_131992[(2)]);
var inst_131964 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id02","id02",365882140,null),"[\n1 2\n]"], null);
var inst_131965 = cljs.core.list(new cljs.core.Symbol("async","<!","async/<!",-1308982001,null),new cljs.core.Symbol(null,"results","results",506361414,null));
var inst_131966 = cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id02","id02",365882140,null),"[\n1 2\n]"], null));
var inst_131967 = expectations.compare_expr.cljs$core$IFn$_invoke$arity$4(inst_131964,inst_131962,inst_131966,inst_131965);
var inst_131968 = expectations.__GT_failure_message(inst_131967);
var inst_131969 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_131965)," => ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_131966)].join('');
var inst_131970 = clojure.string.replace(inst_131968,/^.*?\n/,inst_131969);
var inst_131971 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_131972 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_131967);
var inst_131973 = [inst_131972,inst_131966,inst_131965,inst_131970];
var inst_131974 = cljs.core.PersistentHashMap.fromArrays(inst_131971,inst_131973);
var inst_131975 = cljs.test.do_report(inst_131974);
var _ = (function (){var statearr_132052 = state_131992;
(statearr_132052[(4)] = cljs.core.rest((state_131992[(4)])));

return statearr_132052;
})();
var state_131992__$1 = state_131992;
var statearr_132053_133999 = state_131992__$1;
(statearr_132053_133999[(2)] = inst_131975);

(statearr_132053_133999[(1)] = (83));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_131996 === (20))){
var _ = (function (){var statearr_132055 = state_131992;
(statearr_132055[(4)] = cljs.core.cons((23),(state_131992[(4)])));

return statearr_132055;
})();
var state_131992__$1 = state_131992;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_131992__$1,(24),output);
} else {
if((state_val_131996 === (72))){
var inst_131859 = (state_131992[(2)]);
var inst_131868 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id01","id01",-1954134071,null),":foo"], null);
var inst_131869 = cljs.core.list(new cljs.core.Symbol("async","<!","async/<!",-1308982001,null),new cljs.core.Symbol(null,"results","results",506361414,null));
var inst_131871 = cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id01","id01",-1954134071,null),":foo"], null));
var inst_131872 = expectations.compare_expr.cljs$core$IFn$_invoke$arity$4(inst_131868,inst_131859,inst_131871,inst_131869);
var inst_131873 = expectations.__GT_failure_message(inst_131872);
var inst_131874 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_131869)," => ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_131871)].join('');
var inst_131875 = clojure.string.replace(inst_131873,/^.*?\n/,inst_131874);
var inst_131877 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_131878 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_131872);
var inst_131879 = [inst_131878,inst_131871,inst_131869,inst_131875];
var inst_131880 = cljs.core.PersistentHashMap.fromArrays(inst_131877,inst_131879);
var inst_131881 = cljs.test.do_report(inst_131880);
var _ = (function (){var statearr_132058 = state_131992;
(statearr_132058[(4)] = cljs.core.rest((state_131992[(4)])));

return statearr_132058;
})();
var state_131992__$1 = state_131992;
var statearr_132059_134001 = state_131992__$1;
(statearr_132059_134001[(2)] = inst_131881);

(statearr_132059_134001[(1)] = (69));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_131996 === (58))){
var _ = (function (){var statearr_132062 = state_131992;
(statearr_132062[(4)] = cljs.core.cons((61),(state_131992[(4)])));

return statearr_132062;
})();
var state_131992__$1 = state_131992;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_131992__$1,(62),results);
} else {
if((state_val_131996 === (60))){
var inst_131762 = (state_131992[(2)]);
var inst_131763 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_131764 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id01","id01",-1954134071,null),":foo"], null);
var inst_131765 = check.core.normalize_error(inst_131762);
var inst_131767 = cljs.core.list(new cljs.core.Symbol("async","<!","async/<!",-1308982001,null),new cljs.core.Symbol(null,"results","results",506361414,null));
var inst_131768 = new cljs.core.Symbol(null,"=expect=>","=expect=>",-1384225590,null);
var inst_131769 = cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id01","id01",-1954134071,null),":foo"], null));
var inst_131770 = ["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_131767)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_131768)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_131769)].join('');
var inst_131771 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_131764,inst_131765,inst_131770];
var inst_131772 = cljs.core.PersistentHashMap.fromArrays(inst_131763,inst_131771);
var inst_131773 = cljs.test.do_report(inst_131772);
var state_131992__$1 = state_131992;
var statearr_132069_134002 = state_131992__$1;
(statearr_132069_134002[(2)] = inst_131773);

(statearr_132069_134002[(1)] = (59));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_131996 === (27))){
var _ = (function (){var statearr_132074 = state_131992;
(statearr_132074[(4)] = cljs.core.rest((state_131992[(4)])));

return statearr_132074;
})();
var inst_131543 = (state_131992[(2)]);
var inst_131544 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_131545 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_131546 = (new cljs.core.PersistentVector(null,1,(5),inst_131544,inst_131545,null));
var inst_131547 = cljs.test.update_current_env_BANG_(inst_131546,cljs.core.rest);
var ___$1 = (function (){var temp__5753__auto__ = (state_131992[(5)]);
if(cljs.core.truth_(temp__5753__auto__)){
var e__38733__auto__ = temp__5753__auto__;
throw e__38733__auto__;
} else {
return null;
}
})();
var state_131992__$1 = (function (){var statearr_132077 = state_131992;
(statearr_132077[(8)] = inst_131547);

return statearr_132077;
})();
var statearr_132078_134006 = state_131992__$1;
(statearr_132078_134006[(2)] = inst_131543);

(statearr_132078_134006[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_131996 === (1))){
var inst_131375 = (function (){return (function (p1__127425_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(output,(function (){var or__4223__auto__ = p1__127425_SHARP_;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return new cljs.core.Keyword(null,"closed","closed",-919675359);
}
})());
});
})();
var inst_131376 = (function (){return (function (p1__127426_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(results,(function (){var or__4223__auto__ = p1__127426_SHARP_;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return new cljs.core.Keyword(null,"closed","closed",-919675359);
}
})());
});
})();
var inst_131377 = repl_tooling.repl_client.connection.prepare_evals(control,inst_131375,inst_131376);
var inst_131379 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_131380 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_131381 = (new cljs.core.PersistentVector(null,1,(5),inst_131379,inst_131380,null));
var inst_131382 = cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(inst_131381,cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["captures the result of output"], 0));
var state_131992__$1 = (function (){var statearr_132088 = state_131992;
(statearr_132088[(9)] = inst_131377);

(statearr_132088[(10)] = inst_131382);

return statearr_132088;
})();
var statearr_132090_134007 = state_131992__$1;
(statearr_132090_134007[(2)] = null);

(statearr_132090_134007[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_131996 === (69))){
var inst_131884 = (state_131992[(2)]);
var state_131992__$1 = (function (){var statearr_132092 = state_131992;
(statearr_132092[(11)] = inst_131884);

return statearr_132092;
})();
var statearr_132095_134010 = state_131992__$1;
(statearr_132095_134010[(2)] = null);

(statearr_132095_134010[(1)] = (73));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_131996 === (24))){
var inst_131518 = (state_131992[(2)]);
var inst_131519 = cljs.core.list(new cljs.core.Symbol("async","<!","async/<!",-1308982001,null),new cljs.core.Symbol(null,"output","output",534662484,null));
var inst_131520 = "[tooling$eval-res id01 \":foo\"]";
var inst_131521 = expectations.compare_expr.cljs$core$IFn$_invoke$arity$4("[tooling$eval-res id01 \":foo\"]",inst_131518,inst_131520,inst_131519);
var inst_131522 = expectations.__GT_failure_message(inst_131521);
var inst_131523 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_131519)," => ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_131520)].join('');
var inst_131524 = clojure.string.replace(inst_131522,/^.*?\n/,inst_131523);
var inst_131525 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_131526 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_131521);
var inst_131527 = [inst_131526,inst_131520,inst_131519,inst_131524];
var inst_131528 = cljs.core.PersistentHashMap.fromArrays(inst_131525,inst_131527);
var inst_131530 = cljs.test.do_report(inst_131528);
var _ = (function (){var statearr_132098 = state_131992;
(statearr_132098[(4)] = cljs.core.rest((state_131992[(4)])));

return statearr_132098;
})();
var state_131992__$1 = state_131992;
var statearr_132100_134011 = state_131992__$1;
(statearr_132100_134011[(2)] = inst_131530);

(statearr_132100_134011[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_131996 === (55))){
var inst_131920 = (state_131992[(2)]);
var inst_131921 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_131922 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_131923 = (new cljs.core.PersistentVector(null,1,(5),inst_131921,inst_131922,null));
var inst_131924 = cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(inst_131923,cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["captures output in different fragments"], 0));
var state_131992__$1 = (function (){var statearr_132101 = state_131992;
(statearr_132101[(12)] = inst_131920);

(statearr_132101[(13)] = inst_131924);

return statearr_132101;
})();
var statearr_132104_134012 = state_131992__$1;
(statearr_132104_134012[(2)] = null);

(statearr_132104_134012[(1)] = (78));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_131996 === (85))){
var _ = (function (){var statearr_132107 = state_131992;
(statearr_132107[(4)] = cljs.core.rest((state_131992[(4)])));

return statearr_132107;
})();
var state_131992__$1 = state_131992;
var ex132096 = (state_131992__$1[(2)]);
var statearr_132110_134013 = state_131992__$1;
(statearr_132110_134013[(5)] = ex132096);


var statearr_132112_134014 = state_131992__$1;
(statearr_132112_134014[(1)] = (84));

(statearr_132112_134014[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_131996 === (39))){
var _ = (function (){var statearr_132114 = state_131992;
(statearr_132114[(4)] = cljs.core.cons((42),(state_131992[(4)])));

return statearr_132114;
})();
var state_131992__$1 = state_131992;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_131992__$1,(43),results);
} else {
if((state_val_131996 === (46))){
var inst_131671 = (state_131992[(2)]);
var inst_131672 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_131673 = check.core.normalize_error(inst_131671);
var inst_131674 = cljs.core.list(new cljs.core.Symbol("async","<!","async/<!",-1308982001,null),new cljs.core.Symbol(null,"output","output",534662484,null));
var inst_131675 = new cljs.core.Symbol(null,"=expect=>","=expect=>",-1384225590,null);
var inst_131676 = "lol";
var inst_131677 = ["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_131674)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_131675)," ",inst_131676].join('');
var inst_131678 = [new cljs.core.Keyword(null,"error","error",-978969032),"lol",inst_131673,inst_131677];
var inst_131679 = cljs.core.PersistentHashMap.fromArrays(inst_131672,inst_131678);
var inst_131680 = cljs.test.do_report(inst_131679);
var state_131992__$1 = state_131992;
var statearr_132119_134017 = state_131992__$1;
(statearr_132119_134017[(2)] = inst_131680);

(statearr_132119_134017[(1)] = (45));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_131996 === (4))){
var _ = (function (){var statearr_132120 = state_131992;
(statearr_132120[(4)] = cljs.core.rest((state_131992[(4)])));

return statearr_132120;
})();
var inst_131384 = (state_131992[(2)]);
var inst_131385 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_131386 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_131387 = (new cljs.core.PersistentVector(null,1,(5),inst_131385,inst_131386,null));
var inst_131389 = cljs.test.update_current_env_BANG_(inst_131387,cljs.core.rest);
var ___$1 = (function (){var temp__5753__auto__ = (state_131992[(5)]);
if(cljs.core.truth_(temp__5753__auto__)){
var e__38733__auto__ = temp__5753__auto__;
throw e__38733__auto__;
} else {
return null;
}
})();
var state_131992__$1 = (function (){var statearr_132124 = state_131992;
(statearr_132124[(14)] = inst_131389);

return statearr_132124;
})();
var statearr_132125_134019 = state_131992__$1;
(statearr_132125_134019[(2)] = inst_131384);

(statearr_132125_134019[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_131996 === (77))){
var inst_131901 = (state_131992[(2)]);
var inst_131902 = cljs.core.list(new cljs.core.Symbol("async","<!","async/<!",-1308982001,null),new cljs.core.Symbol(null,"output","output",534662484,null));
var inst_131903 = "bar";
var inst_131904 = expectations.compare_expr.cljs$core$IFn$_invoke$arity$4("bar",inst_131901,inst_131903,inst_131902);
var inst_131906 = expectations.__GT_failure_message(inst_131904);
var inst_131908 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_131902)," => ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_131903)].join('');
var inst_131909 = clojure.string.replace(inst_131906,/^.*?\n/,inst_131908);
var inst_131910 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_131911 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_131904);
var inst_131912 = [inst_131911,inst_131903,inst_131902,inst_131909];
var inst_131913 = cljs.core.PersistentHashMap.fromArrays(inst_131910,inst_131912);
var inst_131914 = cljs.test.do_report(inst_131913);
var _ = (function (){var statearr_132126 = state_131992;
(statearr_132126[(4)] = cljs.core.rest((state_131992[(4)])));

return statearr_132126;
})();
var state_131992__$1 = state_131992;
var statearr_132129_134020 = state_131992__$1;
(statearr_132129_134020[(2)] = inst_131914);

(statearr_132129_134020[(1)] = (74));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_131996 === (54))){
var _ = (function (){var statearr_132132 = state_131992;
(statearr_132132[(4)] = cljs.core.cons((56),(state_131992[(4)])));

return statearr_132132;
})();
var ___$1 = (function (){var statearr_132133 = state_131992;
(statearr_132133[(4)] = cljs.core.cons((57),(state_131992[(4)])));

return statearr_132133;
})();
var inst_131757 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(control,cljs.core.assoc,new cljs.core.Keyword(null,"ignore-prompt","ignore-prompt",-1001404739),true);
var inst_131758 = new cljs.core.Symbol(null,"id01","id01",-1954134071,null);
var inst_131759 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(control,cljs.core.update,new cljs.core.Keyword(null,"pending-evals","pending-evals",1249255957),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_131758], 0));
var inst_131760 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(buffer,cljs.core.conj,"lol[tooling$eval-res id01 \":foo\"]\nuser.cljs=> ");
var state_131992__$1 = (function (){var statearr_132134 = state_131992;
(statearr_132134[(15)] = inst_131760);

(statearr_132134[(16)] = inst_131759);

(statearr_132134[(17)] = inst_131757);

return statearr_132134;
})();
var statearr_132135_134021 = state_131992__$1;
(statearr_132135_134021[(2)] = null);

(statearr_132135_134021[(1)] = (58));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_131996 === (15))){
var _ = (function (){var statearr_132138 = state_131992;
(statearr_132138[(4)] = cljs.core.cons((18),(state_131992[(4)])));

return statearr_132138;
})();
var state_131992__$1 = state_131992;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_131992__$1,(19),results);
} else {
if((state_val_131996 === (48))){
var inst_131687 = (state_131992[(2)]);
var inst_131688 = cljs.core.list(new cljs.core.Symbol("async","<!","async/<!",-1308982001,null),new cljs.core.Symbol(null,"output","output",534662484,null));
var inst_131689 = "lol";
var inst_131690 = expectations.compare_expr.cljs$core$IFn$_invoke$arity$4("lol",inst_131687,inst_131689,inst_131688);
var inst_131691 = expectations.__GT_failure_message(inst_131690);
var inst_131692 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_131688)," => ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_131689)].join('');
var inst_131693 = clojure.string.replace(inst_131691,/^.*?\n/,inst_131692);
var inst_131694 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_131695 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_131690);
var inst_131696 = [inst_131695,inst_131689,inst_131688,inst_131693];
var inst_131697 = cljs.core.PersistentHashMap.fromArrays(inst_131694,inst_131696);
var inst_131698 = cljs.test.do_report(inst_131697);
var _ = (function (){var statearr_132143 = state_131992;
(statearr_132143[(4)] = cljs.core.rest((state_131992[(4)])));

return statearr_132143;
})();
var state_131992__$1 = state_131992;
var statearr_132144_134022 = state_131992__$1;
(statearr_132144_134022[(2)] = inst_131698);

(statearr_132144_134022[(1)] = (45));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_131996 === (50))){
var inst_131734 = (state_131992[(2)]);
var _ = (function (){var statearr_132149 = state_131992;
(statearr_132149[(4)] = cljs.core.rest((state_131992[(4)])));

return statearr_132149;
})();
var state_131992__$1 = state_131992;
var statearr_132151_134023 = state_131992__$1;
(statearr_132151_134023[(2)] = inst_131734);

(statearr_132151_134023[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_131996 === (75))){
var inst_131885 = (state_131992[(2)]);
var inst_131886 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_131887 = check.core.normalize_error(inst_131885);
var inst_131888 = cljs.core.list(new cljs.core.Symbol("async","<!","async/<!",-1308982001,null),new cljs.core.Symbol(null,"output","output",534662484,null));
var inst_131889 = new cljs.core.Symbol(null,"=expect=>","=expect=>",-1384225590,null);
var inst_131890 = "bar";
var inst_131891 = ["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_131888)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_131889)," ",inst_131890].join('');
var inst_131892 = [new cljs.core.Keyword(null,"error","error",-978969032),"bar",inst_131887,inst_131891];
var inst_131893 = cljs.core.PersistentHashMap.fromArrays(inst_131886,inst_131892);
var inst_131894 = cljs.test.do_report(inst_131893);
var state_131992__$1 = state_131992;
var statearr_132156_134024 = state_131992__$1;
(statearr_132156_134024[(2)] = inst_131894);

(statearr_132156_134024[(1)] = (74));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_131996 === (21))){
var inst_131533 = (state_131992[(2)]);
var _ = (function (){var statearr_132159 = state_131992;
(statearr_132159[(4)] = cljs.core.rest((state_131992[(4)])));

return statearr_132159;
})();
var state_131992__$1 = state_131992;
var statearr_132163_134025 = state_131992__$1;
(statearr_132163_134025[(2)] = inst_131533);

(statearr_132163_134025[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_131996 === (31))){
var inst_131560 = (state_131992[(2)]);
var inst_131561 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_131562 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id01","id01",-1954134071,null),":foo"], null);
var inst_131563 = check.core.normalize_error(inst_131560);
var inst_131565 = cljs.core.list(new cljs.core.Symbol("async","<!","async/<!",-1308982001,null),new cljs.core.Symbol(null,"results","results",506361414,null));
var inst_131566 = new cljs.core.Symbol(null,"=expect=>","=expect=>",-1384225590,null);
var inst_131567 = cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id01","id01",-1954134071,null),":foo"], null));
var inst_131568 = ["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_131565)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_131566)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_131567)].join('');
var inst_131569 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_131562,inst_131563,inst_131568];
var inst_131570 = cljs.core.PersistentHashMap.fromArrays(inst_131561,inst_131569);
var inst_131571 = cljs.test.do_report(inst_131570);
var state_131992__$1 = state_131992;
var statearr_132167_134026 = state_131992__$1;
(statearr_132167_134026[(2)] = inst_131571);

(statearr_132167_134026[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_131996 === (32))){
var _ = (function (){var statearr_132169 = state_131992;
(statearr_132169[(4)] = cljs.core.rest((state_131992[(4)])));

return statearr_132169;
})();
var state_131992__$1 = state_131992;
var ex132158 = (state_131992__$1[(2)]);
var statearr_132171_134027 = state_131992__$1;
(statearr_132171_134027[(5)] = ex132158);


var statearr_132173_134028 = state_131992__$1;
(statearr_132173_134028[(1)] = (31));

(statearr_132173_134028[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_131996 === (40))){
var inst_131670 = (state_131992[(2)]);
var state_131992__$1 = (function (){var statearr_132177 = state_131992;
(statearr_132177[(18)] = inst_131670);

return statearr_132177;
})();
var statearr_132179_134029 = state_131992__$1;
(statearr_132179_134029[(2)] = null);

(statearr_132179_134029[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_131996 === (56))){
var _ = (function (){var statearr_132182 = state_131992;
(statearr_132182[(4)] = cljs.core.rest((state_131992[(4)])));

return statearr_132182;
})();
var inst_131743 = (state_131992[(2)]);
var inst_131745 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_131746 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_131747 = (new cljs.core.PersistentVector(null,1,(5),inst_131745,inst_131746,null));
var inst_131748 = cljs.test.update_current_env_BANG_(inst_131747,cljs.core.rest);
var ___$1 = (function (){var temp__5753__auto__ = (state_131992[(5)]);
if(cljs.core.truth_(temp__5753__auto__)){
var e__38733__auto__ = temp__5753__auto__;
throw e__38733__auto__;
} else {
return null;
}
})();
var state_131992__$1 = (function (){var statearr_132183 = state_131992;
(statearr_132183[(19)] = inst_131748);

return statearr_132183;
})();
var statearr_132186_134030 = state_131992__$1;
(statearr_132186_134030[(2)] = inst_131743);

(statearr_132186_134030[(1)] = (55));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_131996 === (33))){
var inst_131578 = (state_131992[(2)]);
var inst_131579 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id01","id01",-1954134071,null),":foo"], null);
var inst_131580 = cljs.core.list(new cljs.core.Symbol("async","<!","async/<!",-1308982001,null),new cljs.core.Symbol(null,"results","results",506361414,null));
var inst_131581 = cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id01","id01",-1954134071,null),":foo"], null));
var inst_131582 = expectations.compare_expr.cljs$core$IFn$_invoke$arity$4(inst_131579,inst_131578,inst_131581,inst_131580);
var inst_131584 = expectations.__GT_failure_message(inst_131582);
var inst_131585 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_131580)," => ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_131581)].join('');
var inst_131586 = clojure.string.replace(inst_131584,/^.*?\n/,inst_131585);
var inst_131587 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_131589 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_131582);
var inst_131590 = [inst_131589,inst_131581,inst_131580,inst_131586];
var inst_131591 = cljs.core.PersistentHashMap.fromArrays(inst_131587,inst_131590);
var inst_131592 = cljs.test.do_report(inst_131591);
var _ = (function (){var statearr_132189 = state_131992;
(statearr_132189[(4)] = cljs.core.rest((state_131992[(4)])));

return statearr_132189;
})();
var state_131992__$1 = state_131992;
var statearr_132192_134031 = state_131992__$1;
(statearr_132192_134031[(2)] = inst_131592);

(statearr_132192_134031[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_131996 === (13))){
var _ = (function (){var statearr_132194 = state_131992;
(statearr_132194[(4)] = cljs.core.rest((state_131992[(4)])));

return statearr_132194;
})();
var inst_131444 = (state_131992[(2)]);
var inst_131445 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_131446 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_131447 = (new cljs.core.PersistentVector(null,1,(5),inst_131445,inst_131446,null));
var inst_131448 = cljs.test.update_current_env_BANG_(inst_131447,cljs.core.rest);
var ___$1 = (function (){var temp__5753__auto__ = (state_131992[(5)]);
if(cljs.core.truth_(temp__5753__auto__)){
var e__38733__auto__ = temp__5753__auto__;
throw e__38733__auto__;
} else {
return null;
}
})();
var state_131992__$1 = (function (){var statearr_132199 = state_131992;
(statearr_132199[(20)] = inst_131448);

return statearr_132199;
})();
var statearr_132200_134032 = state_131992__$1;
(statearr_132200_134032[(2)] = inst_131444);

(statearr_132200_134032[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_131996 === (22))){
var inst_131499 = (state_131992[(2)]);
var inst_131501 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_131502 = check.core.normalize_error(inst_131499);
var inst_131503 = cljs.core.list(new cljs.core.Symbol("async","<!","async/<!",-1308982001,null),new cljs.core.Symbol(null,"output","output",534662484,null));
var inst_131504 = new cljs.core.Symbol(null,"=expect=>","=expect=>",-1384225590,null);
var inst_131505 = "[tooling$eval-res id01 \":foo\"]";
var inst_131506 = ["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_131503)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_131504)," ",inst_131505].join('');
var inst_131507 = [new cljs.core.Keyword(null,"error","error",-978969032),"[tooling$eval-res id01 \":foo\"]",inst_131502,inst_131506];
var inst_131508 = cljs.core.PersistentHashMap.fromArrays(inst_131501,inst_131507);
var inst_131509 = cljs.test.do_report(inst_131508);
var state_131992__$1 = state_131992;
var statearr_132205_134033 = state_131992__$1;
(statearr_132205_134033[(2)] = inst_131509);

(statearr_132205_134033[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_131996 === (36))){
var inst_131596 = (state_131992[(2)]);
var inst_131597 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_131598 = check.core.normalize_error(inst_131596);
var inst_131600 = cljs.core.list(new cljs.core.Symbol("async","<!","async/<!",-1308982001,null),new cljs.core.Symbol(null,"output","output",534662484,null));
var inst_131601 = new cljs.core.Symbol(null,"=expect=>","=expect=>",-1384225590,null);
var inst_131602 = "lol";
var inst_131603 = ["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_131600)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_131601)," ",inst_131602].join('');
var inst_131604 = [new cljs.core.Keyword(null,"error","error",-978969032),"lol",inst_131598,inst_131603];
var inst_131605 = cljs.core.PersistentHashMap.fromArrays(inst_131597,inst_131604);
var inst_131606 = cljs.test.do_report(inst_131605);
var state_131992__$1 = state_131992;
var statearr_132212_134034 = state_131992__$1;
(statearr_132212_134034[(2)] = inst_131606);

(statearr_132212_134034[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_131996 === (41))){
var inst_131634 = (state_131992[(2)]);
var inst_131635 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_131638 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id01","id01",-1954134071,null),":foo"], null);
var inst_131639 = check.core.normalize_error(inst_131634);
var inst_131640 = cljs.core.list(new cljs.core.Symbol("async","<!","async/<!",-1308982001,null),new cljs.core.Symbol(null,"results","results",506361414,null));
var inst_131642 = new cljs.core.Symbol(null,"=expect=>","=expect=>",-1384225590,null);
var inst_131643 = cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id01","id01",-1954134071,null),":foo"], null));
var inst_131644 = ["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_131640)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_131642)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_131643)].join('');
var inst_131645 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_131638,inst_131639,inst_131644];
var inst_131646 = cljs.core.PersistentHashMap.fromArrays(inst_131635,inst_131645);
var inst_131647 = cljs.test.do_report(inst_131646);
var state_131992__$1 = state_131992;
var statearr_132216_134035 = state_131992__$1;
(statearr_132216_134035[(2)] = inst_131647);

(statearr_132216_134035[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_131996 === (43))){
var inst_131654 = (state_131992[(2)]);
var inst_131655 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id01","id01",-1954134071,null),":foo"], null);
var inst_131656 = cljs.core.list(new cljs.core.Symbol("async","<!","async/<!",-1308982001,null),new cljs.core.Symbol(null,"results","results",506361414,null));
var inst_131657 = cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id01","id01",-1954134071,null),":foo"], null));
var inst_131658 = expectations.compare_expr.cljs$core$IFn$_invoke$arity$4(inst_131655,inst_131654,inst_131657,inst_131656);
var inst_131660 = expectations.__GT_failure_message(inst_131658);
var inst_131661 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_131656)," => ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_131657)].join('');
var inst_131662 = clojure.string.replace(inst_131660,/^.*?\n/,inst_131661);
var inst_131663 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_131664 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_131658);
var inst_131665 = [inst_131664,inst_131657,inst_131656,inst_131662];
var inst_131666 = cljs.core.PersistentHashMap.fromArrays(inst_131663,inst_131665);
var inst_131667 = cljs.test.do_report(inst_131666);
var _ = (function (){var statearr_132221 = state_131992;
(statearr_132221[(4)] = cljs.core.rest((state_131992[(4)])));

return statearr_132221;
})();
var state_131992__$1 = state_131992;
var statearr_132223_134036 = state_131992__$1;
(statearr_132223_134036[(2)] = inst_131667);

(statearr_132223_134036[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_131996 === (61))){
var _ = (function (){var statearr_132225 = state_131992;
(statearr_132225[(4)] = cljs.core.rest((state_131992[(4)])));

return statearr_132225;
})();
var state_131992__$1 = state_131992;
var ex132214 = (state_131992__$1[(2)]);
var statearr_132226_134037 = state_131992__$1;
(statearr_132226_134037[(5)] = ex132214);


var statearr_132227_134038 = state_131992__$1;
(statearr_132227_134038[(1)] = (60));

(statearr_132227_134038[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_131996 === (29))){
var _ = (function (){var statearr_132229 = state_131992;
(statearr_132229[(4)] = cljs.core.cons((32),(state_131992[(4)])));

return statearr_132229;
})();
var state_131992__$1 = state_131992;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_131992__$1,(33),results);
} else {
if((state_val_131996 === (44))){
var _ = (function (){var statearr_132233 = state_131992;
(statearr_132233[(4)] = cljs.core.cons((47),(state_131992[(4)])));

return statearr_132233;
})();
var state_131992__$1 = state_131992;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_131992__$1,(48),output);
} else {
if((state_val_131996 === (6))){
var _ = (function (){var statearr_132235 = state_131992;
(statearr_132235[(4)] = cljs.core.cons((9),(state_131992[(4)])));

return statearr_132235;
})();
var state_131992__$1 = state_131992;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_131992__$1,(10),output);
} else {
if((state_val_131996 === (28))){
var _ = (function (){var statearr_132237 = state_131992;
(statearr_132237[(4)] = cljs.core.rest((state_131992[(4)])));

return statearr_132237;
})();
var state_131992__$1 = state_131992;
var ex132232 = (state_131992__$1[(2)]);
var statearr_132239_134039 = state_131992__$1;
(statearr_132239_134039[(5)] = ex132232);


throw ex132232;


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_131996 === (64))){
var inst_131834 = (state_131992[(2)]);
var inst_131835 = new cljs.core.Symbol(null,"id01","id01",-1954134071,null);
var inst_131836 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(control,cljs.core.update,new cljs.core.Keyword(null,"pending-evals","pending-evals",1249255957),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_131835], 0));
var inst_131837 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(buffer,cljs.core.conj,"[tooling$eval-res id01 \":foo\"]user.cljs=> bar");
var state_131992__$1 = (function (){var statearr_132243 = state_131992;
(statearr_132243[(21)] = inst_131837);

(statearr_132243[(22)] = inst_131836);

(statearr_132243[(23)] = inst_131834);

return statearr_132243;
})();
var statearr_132245_134040 = state_131992__$1;
(statearr_132245_134040[(2)] = null);

(statearr_132245_134040[(1)] = (68));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_131996 === (51))){
var inst_131703 = (state_131992[(2)]);
var inst_131704 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_131705 = check.core.normalize_error(inst_131703);
var inst_131706 = cljs.core.list(new cljs.core.Symbol("async","<!","async/<!",-1308982001,null),new cljs.core.Symbol(null,"output","output",534662484,null));
var inst_131707 = new cljs.core.Symbol(null,"=expect=>","=expect=>",-1384225590,null);
var inst_131708 = "bar";
var inst_131709 = ["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_131706)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_131707)," ",inst_131708].join('');
var inst_131710 = [new cljs.core.Keyword(null,"error","error",-978969032),"bar",inst_131705,inst_131709];
var inst_131711 = cljs.core.PersistentHashMap.fromArrays(inst_131704,inst_131710);
var inst_131712 = cljs.test.do_report(inst_131711);
var state_131992__$1 = state_131992;
var statearr_132249_134041 = state_131992__$1;
(statearr_132249_134041[(2)] = inst_131712);

(statearr_132249_134041[(1)] = (50));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_131996 === (25))){
var _ = (function (){var statearr_132252 = state_131992;
(statearr_132252[(4)] = cljs.core.cons((27),(state_131992[(4)])));

return statearr_132252;
})();
var ___$1 = (function (){var statearr_132254 = state_131992;
(statearr_132254[(4)] = cljs.core.cons((28),(state_131992[(4)])));

return statearr_132254;
})();
var inst_131556 = new cljs.core.Symbol(null,"id01","id01",-1954134071,null);
var inst_131557 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(control,cljs.core.update,new cljs.core.Keyword(null,"pending-evals","pending-evals",1249255957),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_131556], 0));
var inst_131558 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(buffer,cljs.core.conj,"lol[tooling$eval-res id01 \":foo\"]");
var state_131992__$1 = (function (){var statearr_132258 = state_131992;
(statearr_132258[(24)] = inst_131557);

(statearr_132258[(25)] = inst_131558);

return statearr_132258;
})();
var statearr_132259_134042 = state_131992__$1;
(statearr_132259_134042[(2)] = null);

(statearr_132259_134042[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_131996 === (34))){
var _ = (function (){var statearr_132263 = state_131992;
(statearr_132263[(4)] = cljs.core.cons((37),(state_131992[(4)])));

return statearr_132263;
})();
var state_131992__$1 = state_131992;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_131992__$1,(38),output);
} else {
if((state_val_131996 === (17))){
var inst_131459 = (state_131992[(2)]);
var inst_131460 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_131461 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id01","id01",-1954134071,null),":foo"], null);
var inst_131462 = check.core.normalize_error(inst_131459);
var inst_131466 = cljs.core.list(new cljs.core.Symbol("async","<!","async/<!",-1308982001,null),new cljs.core.Symbol(null,"results","results",506361414,null));
var inst_131467 = new cljs.core.Symbol(null,"=expect=>","=expect=>",-1384225590,null);
var inst_131468 = cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id01","id01",-1954134071,null),":foo"], null));
var inst_131469 = ["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_131466)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_131467)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_131468)].join('');
var inst_131470 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_131461,inst_131462,inst_131469];
var inst_131471 = cljs.core.PersistentHashMap.fromArrays(inst_131460,inst_131470);
var inst_131473 = cljs.test.do_report(inst_131471);
var state_131992__$1 = state_131992;
var statearr_132265_134043 = state_131992__$1;
(statearr_132265_134043[(2)] = inst_131473);

(statearr_132265_134043[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_131996 === (3))){
var inst_131437 = (state_131992[(2)]);
var inst_131438 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_131439 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_131440 = (new cljs.core.PersistentVector(null,1,(5),inst_131438,inst_131439,null));
var inst_131441 = cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(inst_131440,cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["captures results of simple evaluations"], 0));
var state_131992__$1 = (function (){var statearr_132292 = state_131992;
(statearr_132292[(26)] = inst_131441);

(statearr_132292[(27)] = inst_131437);

return statearr_132292;
})();
var statearr_132293_134044 = state_131992__$1;
(statearr_132293_134044[(2)] = null);

(statearr_132293_134044[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_131996 === (12))){
var inst_131536 = (state_131992[(2)]);
var inst_131537 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_131538 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_131539 = (new cljs.core.PersistentVector(null,1,(5),inst_131537,inst_131538,null));
var inst_131540 = cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(inst_131539,cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["captures results of results mixed with stdout"], 0));
var state_131992__$1 = (function (){var statearr_132300 = state_131992;
(statearr_132300[(28)] = inst_131540);

(statearr_132300[(29)] = inst_131536);

return statearr_132300;
})();
var statearr_132302_134045 = state_131992__$1;
(statearr_132302_134045[(2)] = null);

(statearr_132302_134045[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_131996 === (2))){
var _ = (function (){var statearr_132304 = state_131992;
(statearr_132304[(4)] = cljs.core.cons((4),(state_131992[(4)])));

return statearr_132304;
})();
var ___$1 = (function (){var statearr_132305 = state_131992;
(statearr_132305[(4)] = cljs.core.cons((5),(state_131992[(4)])));

return statearr_132305;
})();
var inst_131397 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(buffer,cljs.core.conj,":foobar");
var state_131992__$1 = (function (){var statearr_132307 = state_131992;
(statearr_132307[(30)] = inst_131397);

return statearr_132307;
})();
var statearr_132308_134046 = state_131992__$1;
(statearr_132308_134046[(2)] = null);

(statearr_132308_134046[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_131996 === (66))){
var _ = (function (){var statearr_132311 = state_131992;
(statearr_132311[(4)] = cljs.core.rest((state_131992[(4)])));

return statearr_132311;
})();
var state_131992__$1 = state_131992;
var ex132294 = (state_131992__$1[(2)]);
var statearr_132314_134047 = state_131992__$1;
(statearr_132314_134047[(5)] = ex132294);


var statearr_132317_134048 = state_131992__$1;
(statearr_132317_134048[(1)] = (65));

(statearr_132317_134048[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_131996 === (23))){
var _ = (function (){var statearr_132322 = state_131992;
(statearr_132322[(4)] = cljs.core.rest((state_131992[(4)])));

return statearr_132322;
})();
var state_131992__$1 = state_131992;
var ex132303 = (state_131992__$1[(2)]);
var statearr_132323_134049 = state_131992__$1;
(statearr_132323_134049[(5)] = ex132303);


var statearr_132324_134050 = state_131992__$1;
(statearr_132324_134050[(1)] = (22));

(statearr_132324_134050[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_131996 === (47))){
var _ = (function (){var statearr_132326 = state_131992;
(statearr_132326[(4)] = cljs.core.rest((state_131992[(4)])));

return statearr_132326;
})();
var state_131992__$1 = state_131992;
var ex132310 = (state_131992__$1[(2)]);
var statearr_132331_134051 = state_131992__$1;
(statearr_132331_134051[(5)] = ex132310);


var statearr_132332_134052 = state_131992__$1;
(statearr_132332_134052[(1)] = (46));

(statearr_132332_134052[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_131996 === (35))){
var inst_131630 = (state_131992[(2)]);
var inst_131631 = new cljs.core.Symbol(null,"id01","id01",-1954134071,null);
var inst_131632 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(control,cljs.core.update,new cljs.core.Keyword(null,"pending-evals","pending-evals",1249255957),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_131631], 0));
var inst_131633 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(buffer,cljs.core.conj,"lol[tooling$eval-res id01 \":foo\"]bar");
var state_131992__$1 = (function (){var statearr_132335 = state_131992;
(statearr_132335[(31)] = inst_131630);

(statearr_132335[(32)] = inst_131633);

(statearr_132335[(33)] = inst_131632);

return statearr_132335;
})();
var statearr_132337_134053 = state_131992__$1;
(statearr_132337_134053[(2)] = null);

(statearr_132337_134053[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_131996 === (82))){
var _ = (function (){var statearr_132341 = state_131992;
(statearr_132341[(4)] = cljs.core.cons((85),(state_131992[(4)])));

return statearr_132341;
})();
var state_131992__$1 = state_131992;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_131992__$1,(86),results);
} else {
if((state_val_131996 === (76))){
var _ = (function (){var statearr_132345 = state_131992;
(statearr_132345[(4)] = cljs.core.rest((state_131992[(4)])));

return statearr_132345;
})();
var state_131992__$1 = state_131992;
var ex132333 = (state_131992__$1[(2)]);
var statearr_132346_134054 = state_131992__$1;
(statearr_132346_134054[(5)] = ex132333);


var statearr_132348_134055 = state_131992__$1;
(statearr_132348_134055[(1)] = (75));

(statearr_132348_134055[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_131996 === (19))){
var inst_131480 = (state_131992[(2)]);
var inst_131481 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id01","id01",-1954134071,null),":foo"], null);
var inst_131482 = cljs.core.list(new cljs.core.Symbol("async","<!","async/<!",-1308982001,null),new cljs.core.Symbol(null,"results","results",506361414,null));
var inst_131483 = cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id01","id01",-1954134071,null),":foo"], null));
var inst_131484 = expectations.compare_expr.cljs$core$IFn$_invoke$arity$4(inst_131481,inst_131480,inst_131483,inst_131482);
var inst_131485 = expectations.__GT_failure_message(inst_131484);
var inst_131486 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_131482)," => ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_131483)].join('');
var inst_131487 = clojure.string.replace(inst_131485,/^.*?\n/,inst_131486);
var inst_131489 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_131490 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_131484);
var inst_131491 = [inst_131490,inst_131483,inst_131482,inst_131487];
var inst_131492 = cljs.core.PersistentHashMap.fromArrays(inst_131489,inst_131491);
var inst_131494 = cljs.test.do_report(inst_131492);
var _ = (function (){var statearr_132352 = state_131992;
(statearr_132352[(4)] = cljs.core.rest((state_131992[(4)])));

return statearr_132352;
})();
var state_131992__$1 = state_131992;
var statearr_132355_134056 = state_131992__$1;
(statearr_132355_134056[(2)] = inst_131494);

(statearr_132355_134056[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_131996 === (57))){
var _ = (function (){var statearr_132357 = state_131992;
(statearr_132357[(4)] = cljs.core.rest((state_131992[(4)])));

return statearr_132357;
})();
var state_131992__$1 = state_131992;
var ex132344 = (state_131992__$1[(2)]);
var statearr_132360_134057 = state_131992__$1;
(statearr_132360_134057[(5)] = ex132344);


throw ex132344;


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_131996 === (68))){
var _ = (function (){var statearr_132363 = state_131992;
(statearr_132363[(4)] = cljs.core.cons((71),(state_131992[(4)])));

return statearr_132363;
})();
var state_131992__$1 = state_131992;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_131992__$1,(72),results);
} else {
if((state_val_131996 === (11))){
var _ = (function (){var statearr_132370 = state_131992;
(statearr_132370[(4)] = cljs.core.cons((13),(state_131992[(4)])));

return statearr_132370;
})();
var ___$1 = (function (){var statearr_132371 = state_131992;
(statearr_132371[(4)] = cljs.core.cons((14),(state_131992[(4)])));

return statearr_132371;
})();
var inst_131456 = new cljs.core.Symbol(null,"id01","id01",-1954134071,null);
var inst_131457 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(control,cljs.core.update,new cljs.core.Keyword(null,"pending-evals","pending-evals",1249255957),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_131456], 0));
var inst_131458 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(buffer,cljs.core.conj,"[tooling$eval-res id01 \":foo\"]");
var state_131992__$1 = (function (){var statearr_132374 = state_131992;
(statearr_132374[(34)] = inst_131457);

(statearr_132374[(35)] = inst_131458);

return statearr_132374;
})();
var statearr_132375_134058 = state_131992__$1;
(statearr_132375_134058[(2)] = null);

(statearr_132375_134058[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_131996 === (9))){
var _ = (function (){var statearr_132379 = state_131992;
(statearr_132379[(4)] = cljs.core.rest((state_131992[(4)])));

return statearr_132379;
})();
var state_131992__$1 = state_131992;
var ex132362 = (state_131992__$1[(2)]);
var statearr_132380_134059 = state_131992__$1;
(statearr_132380_134059[(5)] = ex132362);


var statearr_132381_134060 = state_131992__$1;
(statearr_132381_134060[(1)] = (8));

(statearr_132381_134060[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_131996 === (5))){
var _ = (function (){var statearr_132385 = state_131992;
(statearr_132385[(4)] = cljs.core.rest((state_131992[(4)])));

return statearr_132385;
})();
var state_131992__$1 = state_131992;
var ex132367 = (state_131992__$1[(2)]);
var statearr_132388_134061 = state_131992__$1;
(statearr_132388_134061[(5)] = ex132367);


throw ex132367;


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_131996 === (83))){
var inst_131978 = (state_131992[(2)]);
var _ = (function (){var statearr_132390 = state_131992;
(statearr_132390[(4)] = cljs.core.rest((state_131992[(4)])));

return statearr_132390;
})();
var state_131992__$1 = state_131992;
var statearr_132391_134062 = state_131992__$1;
(statearr_132391_134062[(2)] = inst_131978);

(statearr_132391_134062[(1)] = (80));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_131996 === (14))){
var _ = (function (){var statearr_132393 = state_131992;
(statearr_132393[(4)] = cljs.core.rest((state_131992[(4)])));

return statearr_132393;
})();
var state_131992__$1 = state_131992;
var ex132383 = (state_131992__$1[(2)]);
var statearr_132394_134063 = state_131992__$1;
(statearr_132394_134063[(5)] = ex132383);


throw ex132383;


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_131996 === (45))){
var inst_131702 = (state_131992[(2)]);
var state_131992__$1 = (function (){var statearr_132398 = state_131992;
(statearr_132398[(36)] = inst_131702);

return statearr_132398;
})();
var statearr_132399_134064 = state_131992__$1;
(statearr_132399_134064[(2)] = null);

(statearr_132399_134064[(1)] = (49));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_131996 === (53))){
var inst_131719 = (state_131992[(2)]);
var inst_131720 = cljs.core.list(new cljs.core.Symbol("async","<!","async/<!",-1308982001,null),new cljs.core.Symbol(null,"output","output",534662484,null));
var inst_131721 = "bar";
var inst_131723 = expectations.compare_expr.cljs$core$IFn$_invoke$arity$4("bar",inst_131719,inst_131721,inst_131720);
var inst_131724 = expectations.__GT_failure_message(inst_131723);
var inst_131725 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_131720)," => ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_131721)].join('');
var inst_131726 = clojure.string.replace(inst_131724,/^.*?\n/,inst_131725);
var inst_131727 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_131728 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_131723);
var inst_131729 = [inst_131728,inst_131721,inst_131720,inst_131726];
var inst_131730 = cljs.core.PersistentHashMap.fromArrays(inst_131727,inst_131729);
var inst_131731 = cljs.test.do_report(inst_131730);
var _ = (function (){var statearr_132401 = state_131992;
(statearr_132401[(4)] = cljs.core.rest((state_131992[(4)])));

return statearr_132401;
})();
var state_131992__$1 = state_131992;
var statearr_132404_134065 = state_131992__$1;
(statearr_132404_134065[(2)] = inst_131731);

(statearr_132404_134065[(1)] = (50));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_131996 === (78))){
var _ = (function (){var statearr_132408 = state_131992;
(statearr_132408[(4)] = cljs.core.cons((80),(state_131992[(4)])));

return statearr_132408;
})();
var ___$1 = (function (){var statearr_132409 = state_131992;
(statearr_132409[(4)] = cljs.core.cons((81),(state_131992[(4)])));

return statearr_132409;
})();
var inst_131939 = new cljs.core.Symbol(null,"id02","id02",365882140,null);
var inst_131940 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(control,cljs.core.update,new cljs.core.Keyword(null,"pending-evals","pending-evals",1249255957),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_131939], 0));
var inst_131942 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(buffer,cljs.core.conj,"[tooling$eval-res id02 \"[\n");
var inst_131943 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(buffer,cljs.core.conj,"1 2\n");
var inst_131944 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(buffer,cljs.core.conj,"]\"]");
var state_131992__$1 = (function (){var statearr_132410 = state_131992;
(statearr_132410[(37)] = inst_131940);

(statearr_132410[(38)] = inst_131942);

(statearr_132410[(39)] = inst_131944);

(statearr_132410[(40)] = inst_131943);

return statearr_132410;
})();
var statearr_132413_134066 = state_131992__$1;
(statearr_132413_134066[(2)] = null);

(statearr_132413_134066[(1)] = (82));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_131996 === (26))){
var inst_131737 = (state_131992[(2)]);
var inst_131738 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_131739 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_131740 = (new cljs.core.PersistentVector(null,1,(5),inst_131738,inst_131739,null));
var inst_131741 = cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(inst_131740,cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["ignores prompt after a result"], 0));
var state_131992__$1 = (function (){var statearr_132416 = state_131992;
(statearr_132416[(41)] = inst_131741);

(statearr_132416[(42)] = inst_131737);

return statearr_132416;
})();
var statearr_132418_134067 = state_131992__$1;
(statearr_132418_134067[(2)] = null);

(statearr_132418_134067[(1)] = (54));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_131996 === (16))){
var inst_131497 = (state_131992[(2)]);
var inst_131498 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(buffer,cljs.core.conj,"[tooling$eval-res id01 \":foo\"]");
var state_131992__$1 = (function (){var statearr_132419 = state_131992;
(statearr_132419[(43)] = inst_131498);

(statearr_132419[(44)] = inst_131497);

return statearr_132419;
})();
var statearr_132420_134068 = state_131992__$1;
(statearr_132420_134068[(2)] = null);

(statearr_132420_134068[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_131996 === (81))){
var _ = (function (){var statearr_132421 = state_131992;
(statearr_132421[(4)] = cljs.core.rest((state_131992[(4)])));

return statearr_132421;
})();
var state_131992__$1 = state_131992;
var ex132414 = (state_131992__$1[(2)]);
var statearr_132424_134069 = state_131992__$1;
(statearr_132424_134069[(5)] = ex132414);


throw ex132414;


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_131996 === (79))){
var inst_131981 = (state_131992[(2)]);
var inst_131982 = cljs.core.async.close_BANG_(output);
var inst_131983 = cljs.core.async.close_BANG_(results);
var inst_131984 = (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
var state_131992__$1 = (function (){var statearr_132426 = state_131992;
(statearr_132426[(45)] = inst_131982);

(statearr_132426[(46)] = inst_131983);

(statearr_132426[(47)] = inst_131981);

return statearr_132426;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_131992__$1,inst_131984);
} else {
if((state_val_131996 === (38))){
var inst_131615 = (state_131992[(2)]);
var inst_131616 = cljs.core.list(new cljs.core.Symbol("async","<!","async/<!",-1308982001,null),new cljs.core.Symbol(null,"output","output",534662484,null));
var inst_131617 = "lol";
var inst_131618 = expectations.compare_expr.cljs$core$IFn$_invoke$arity$4("lol",inst_131615,inst_131617,inst_131616);
var inst_131619 = expectations.__GT_failure_message(inst_131618);
var inst_131620 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_131616)," => ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_131617)].join('');
var inst_131621 = clojure.string.replace(inst_131619,/^.*?\n/,inst_131620);
var inst_131623 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_131624 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_131618);
var inst_131625 = [inst_131624,inst_131617,inst_131616,inst_131621];
var inst_131626 = cljs.core.PersistentHashMap.fromArrays(inst_131623,inst_131625);
var inst_131627 = cljs.test.do_report(inst_131626);
var _ = (function (){var statearr_132432 = state_131992;
(statearr_132432[(4)] = cljs.core.rest((state_131992[(4)])));

return statearr_132432;
})();
var state_131992__$1 = state_131992;
var statearr_132435_134070 = state_131992__$1;
(statearr_132435_134070[(2)] = inst_131627);

(statearr_132435_134070[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_131996 === (30))){
var inst_131595 = (state_131992[(2)]);
var state_131992__$1 = (function (){var statearr_132437 = state_131992;
(statearr_132437[(48)] = inst_131595);

return statearr_132437;
})();
var statearr_132438_134071 = state_131992__$1;
(statearr_132438_134071[(2)] = null);

(statearr_132438_134071[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_131996 === (73))){
var _ = (function (){var statearr_132441 = state_131992;
(statearr_132441[(4)] = cljs.core.cons((76),(state_131992[(4)])));

return statearr_132441;
})();
var state_131992__$1 = state_131992;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_131992__$1,(77),output);
} else {
if((state_val_131996 === (10))){
var inst_131418 = (state_131992[(2)]);
var inst_131419 = cljs.core.list(new cljs.core.Symbol("async","<!","async/<!",-1308982001,null),new cljs.core.Symbol(null,"output","output",534662484,null));
var inst_131421 = ":foobar";
var inst_131422 = expectations.compare_expr.cljs$core$IFn$_invoke$arity$4(":foobar",inst_131418,inst_131421,inst_131419);
var inst_131423 = expectations.__GT_failure_message(inst_131422);
var inst_131424 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_131419)," => ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_131421)].join('');
var inst_131425 = clojure.string.replace(inst_131423,/^.*?\n/,inst_131424);
var inst_131427 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_131428 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_131422);
var inst_131429 = [inst_131428,inst_131421,inst_131419,inst_131425];
var inst_131430 = cljs.core.PersistentHashMap.fromArrays(inst_131427,inst_131429);
var inst_131431 = cljs.test.do_report(inst_131430);
var _ = (function (){var statearr_132448 = state_131992;
(statearr_132448[(4)] = cljs.core.rest((state_131992[(4)])));

return statearr_132448;
})();
var state_131992__$1 = state_131992;
var statearr_132449_134072 = state_131992__$1;
(statearr_132449_134072[(2)] = inst_131431);

(statearr_132449_134072[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_131996 === (18))){
var _ = (function (){var statearr_132452 = state_131992;
(statearr_132452[(4)] = cljs.core.rest((state_131992[(4)])));

return statearr_132452;
})();
var state_131992__$1 = state_131992;
var ex132440 = (state_131992__$1[(2)]);
var statearr_132454_134073 = state_131992__$1;
(statearr_132454_134073[(5)] = ex132440);


var statearr_132455_134074 = state_131992__$1;
(statearr_132455_134074[(1)] = (17));

(statearr_132455_134074[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_131996 === (52))){
var _ = (function (){var statearr_132457 = state_131992;
(statearr_132457[(4)] = cljs.core.rest((state_131992[(4)])));

return statearr_132457;
})();
var state_131992__$1 = state_131992;
var ex132444 = (state_131992__$1[(2)]);
var statearr_132460_134075 = state_131992__$1;
(statearr_132460_134075[(5)] = ex132444);


var statearr_132463_134076 = state_131992__$1;
(statearr_132463_134076[(1)] = (51));

(statearr_132463_134076[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_131996 === (67))){
var inst_131816 = (state_131992[(2)]);
var inst_131819 = cljs.core.list(new cljs.core.Symbol("async","<!","async/<!",-1308982001,null),new cljs.core.Symbol(null,"output","output",534662484,null));
var inst_131820 = "lol";
var inst_131821 = expectations.compare_expr.cljs$core$IFn$_invoke$arity$4("lol",inst_131816,inst_131820,inst_131819);
var inst_131822 = expectations.__GT_failure_message(inst_131821);
var inst_131823 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_131819)," => ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_131820)].join('');
var inst_131824 = clojure.string.replace(inst_131822,/^.*?\n/,inst_131823);
var inst_131826 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_131827 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_131821);
var inst_131828 = [inst_131827,inst_131820,inst_131819,inst_131824];
var inst_131829 = cljs.core.PersistentHashMap.fromArrays(inst_131826,inst_131828);
var inst_131831 = cljs.test.do_report(inst_131829);
var _ = (function (){var statearr_132472 = state_131992;
(statearr_132472[(4)] = cljs.core.rest((state_131992[(4)])));

return statearr_132472;
})();
var state_131992__$1 = state_131992;
var statearr_132473_134077 = state_131992__$1;
(statearr_132473_134077[(2)] = inst_131831);

(statearr_132473_134077[(1)] = (64));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_131996 === (71))){
var _ = (function (){var statearr_132475 = state_131992;
(statearr_132475[(4)] = cljs.core.rest((state_131992[(4)])));

return statearr_132475;
})();
var state_131992__$1 = state_131992;
var ex132456 = (state_131992__$1[(2)]);
var statearr_132477_134078 = state_131992__$1;
(statearr_132477_134078[(5)] = ex132456);


var statearr_132478_134079 = state_131992__$1;
(statearr_132478_134079[(1)] = (70));

(statearr_132478_134079[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_131996 === (42))){
var _ = (function (){var statearr_132481 = state_131992;
(statearr_132481[(4)] = cljs.core.rest((state_131992[(4)])));

return statearr_132481;
})();
var state_131992__$1 = state_131992;
var ex132465 = (state_131992__$1[(2)]);
var statearr_132483_134080 = state_131992__$1;
(statearr_132483_134080[(5)] = ex132465);


var statearr_132485_134081 = state_131992__$1;
(statearr_132485_134081[(1)] = (41));

(statearr_132485_134081[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_131996 === (80))){
var _ = (function (){var statearr_132486 = state_131992;
(statearr_132486[(4)] = cljs.core.rest((state_131992[(4)])));

return statearr_132486;
})();
var inst_131926 = (state_131992[(2)]);
var inst_131927 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_131928 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_131929 = (new cljs.core.PersistentVector(null,1,(5),inst_131927,inst_131928,null));
var inst_131930 = cljs.test.update_current_env_BANG_(inst_131929,cljs.core.rest);
var ___$1 = (function (){var temp__5753__auto__ = (state_131992[(5)]);
if(cljs.core.truth_(temp__5753__auto__)){
var e__38733__auto__ = temp__5753__auto__;
throw e__38733__auto__;
} else {
return null;
}
})();
var state_131992__$1 = (function (){var statearr_132490 = state_131992;
(statearr_132490[(49)] = inst_131930);

return statearr_132490;
})();
var statearr_132491_134082 = state_131992__$1;
(statearr_132491_134082[(2)] = inst_131926);

(statearr_132491_134082[(1)] = (79));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_131996 === (37))){
var _ = (function (){var statearr_132494 = state_131992;
(statearr_132494[(4)] = cljs.core.rest((state_131992[(4)])));

return statearr_132494;
})();
var state_131992__$1 = state_131992;
var ex132480 = (state_131992__$1[(2)]);
var statearr_132496_134083 = state_131992__$1;
(statearr_132496_134083[(5)] = ex132480);


var statearr_132498_134084 = state_131992__$1;
(statearr_132498_134084[(1)] = (36));

(statearr_132498_134084[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_131996 === (63))){
var _ = (function (){var statearr_132501 = state_131992;
(statearr_132501[(4)] = cljs.core.cons((66),(state_131992[(4)])));

return statearr_132501;
})();
var state_131992__$1 = state_131992;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_131992__$1,(67),output);
} else {
if((state_val_131996 === (8))){
var inst_131399 = (state_131992[(2)]);
var inst_131400 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_131401 = check.core.normalize_error(inst_131399);
var inst_131402 = cljs.core.list(new cljs.core.Symbol("async","<!","async/<!",-1308982001,null),new cljs.core.Symbol(null,"output","output",534662484,null));
var inst_131403 = new cljs.core.Symbol(null,"=expect=>","=expect=>",-1384225590,null);
var inst_131404 = ":foobar";
var inst_131405 = ["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_131402)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_131403)," ",inst_131404].join('');
var inst_131406 = [new cljs.core.Keyword(null,"error","error",-978969032),":foobar",inst_131401,inst_131405];
var inst_131407 = cljs.core.PersistentHashMap.fromArrays(inst_131400,inst_131406);
var inst_131408 = cljs.test.do_report(inst_131407);
var state_131992__$1 = state_131992;
var statearr_132505_134085 = state_131992__$1;
(statearr_132505_134085[(2)] = inst_131408);

(statearr_132505_134085[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_131996 === (49))){
var _ = (function (){var statearr_132506 = state_131992;
(statearr_132506[(4)] = cljs.core.cons((52),(state_131992[(4)])));

return statearr_132506;
})();
var state_131992__$1 = state_131992;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_131992__$1,(53),output);
} else {
if((state_val_131996 === (84))){
var inst_131945 = (state_131992[(2)]);
var inst_131946 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_131947 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id02","id02",365882140,null),"[\n1 2\n]"], null);
var inst_131948 = check.core.normalize_error(inst_131945);
var inst_131949 = cljs.core.list(new cljs.core.Symbol("async","<!","async/<!",-1308982001,null),new cljs.core.Symbol(null,"results","results",506361414,null));
var inst_131950 = new cljs.core.Symbol(null,"=expect=>","=expect=>",-1384225590,null);
var inst_131951 = cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id02","id02",365882140,null),"[\n1 2\n]"], null));
var inst_131952 = ["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_131949)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_131950)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_131951)].join('');
var inst_131953 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_131947,inst_131948,inst_131952];
var inst_131954 = cljs.core.PersistentHashMap.fromArrays(inst_131946,inst_131953);
var inst_131955 = cljs.test.do_report(inst_131954);
var state_131992__$1 = state_131992;
var statearr_132513_134086 = state_131992__$1;
(statearr_132513_134086[(2)] = inst_131955);

(statearr_132513_134086[(1)] = (83));


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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
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
var repl_tooling$repl_client$connection_test$state_machine__39695__auto__ = null;
var repl_tooling$repl_client$connection_test$state_machine__39695__auto____0 = (function (){
var statearr_132521 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_132521[(0)] = repl_tooling$repl_client$connection_test$state_machine__39695__auto__);

(statearr_132521[(1)] = (1));

return statearr_132521;
});
var repl_tooling$repl_client$connection_test$state_machine__39695__auto____1 = (function (state_131992){
while(true){
var ret_value__39696__auto__ = (function (){try{while(true){
var result__39697__auto__ = switch__39694__auto__(state_131992);
if(cljs.core.keyword_identical_QMARK_(result__39697__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39697__auto__;
}
break;
}
}catch (e132522){var ex__39698__auto__ = e132522;
var statearr_132523_134087 = state_131992;
(statearr_132523_134087[(2)] = ex__39698__auto__);


if(cljs.core.seq((state_131992[(4)]))){
var statearr_132524_134088 = state_131992;
(statearr_132524_134088[(1)] = cljs.core.first((state_131992[(4)])));

} else {
throw ex__39698__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__134089 = state_131992;
state_131992 = G__134089;
continue;
} else {
return ret_value__39696__auto__;
}
break;
}
});
repl_tooling$repl_client$connection_test$state_machine__39695__auto__ = function(state_131992){
switch(arguments.length){
case 0:
return repl_tooling$repl_client$connection_test$state_machine__39695__auto____0.call(this);
case 1:
return repl_tooling$repl_client$connection_test$state_machine__39695__auto____1.call(this,state_131992);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
repl_tooling$repl_client$connection_test$state_machine__39695__auto__.cljs$core$IFn$_invoke$arity$0 = repl_tooling$repl_client$connection_test$state_machine__39695__auto____0;
repl_tooling$repl_client$connection_test$state_machine__39695__auto__.cljs$core$IFn$_invoke$arity$1 = repl_tooling$repl_client$connection_test$state_machine__39695__auto____1;
return repl_tooling$repl_client$connection_test$state_machine__39695__auto__;
})()
})();
var state__39771__auto__ = (function (){var statearr_132526 = f__39770__auto__();
(statearr_132526[(6)] = c__39769__auto__);

return statearr_132526;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39771__auto__);
}));

return c__39769__auto__;
}));

(repl_tooling.repl_client.connection_test.t_repl_tooling$repl_client$connection_test130062.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta130063","meta130063",-2058197135,null)], null);
}));

(repl_tooling.repl_client.connection_test.t_repl_tooling$repl_client$connection_test130062.cljs$lang$type = true);

(repl_tooling.repl_client.connection_test.t_repl_tooling$repl_client$connection_test130062.cljs$lang$ctorStr = "repl-tooling.repl-client.connection-test/t_repl_tooling$repl_client$connection_test130062");

(repl_tooling.repl_client.connection_test.t_repl_tooling$repl_client$connection_test130062.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"repl-tooling.repl-client.connection-test/t_repl_tooling$repl_client$connection_test130062");
}));

/**
 * Positional factory function for repl-tooling.repl-client.connection-test/t_repl_tooling$repl_client$connection_test130062.
 */
repl_tooling.repl_client.connection_test.__GT_t_repl_tooling$repl_client$connection_test130062 = (function repl_tooling$repl_client$connection_test$__GT_t_repl_tooling$repl_client$connection_test130062(meta130063){
return (new repl_tooling.repl_client.connection_test.t_repl_tooling$repl_client$connection_test130062(meta130063));
});

}

return (new repl_tooling.repl_client.connection_test.t_repl_tooling$repl_client$connection_test130062(null));
});

(repl_tooling.repl_client.connection_test.eval_cycle.cljs$lang$var = new cljs.core.Var(function(){return repl_tooling.repl_client.connection_test.eval_cycle;},new cljs.core.Symbol("repl-tooling.repl-client.connection-test","eval-cycle","repl-tooling.repl-client.connection-test/eval-cycle",1264347856,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"repl-tooling.repl-client.connection-test","repl-tooling.repl-client.connection-test",1805185577,null),new cljs.core.Symbol(null,"eval-cycle","eval-cycle",1583780150,null),"repl_tooling/repl_client/connection_test.cljs",26,1,67,67,cljs.core.List.EMPTY,null,(cljs.core.truth_(repl_tooling.repl_client.connection_test.eval_cycle)?repl_tooling.repl_client.connection_test.eval_cycle.cljs$lang$test:null)])));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"repl_tooling.repl_client.connection_test","repl_tooling.repl_client.connection_test",1555915928),new cljs.core.Keyword(null,"buffers","buffers",471409492)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"buffers",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof repl_tooling !== 'undefined') && (typeof repl_tooling.repl_client !== 'undefined') && (typeof repl_tooling.repl_client.connection_test !== 'undefined') && (typeof repl_tooling.repl_client.connection_test.t_repl_tooling$repl_client$connection_test132537 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
repl_tooling.repl_client.connection_test.t_repl_tooling$repl_client$connection_test132537 = (function (meta132538){
this.meta132538 = meta132538;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(repl_tooling.repl_client.connection_test.t_repl_tooling$repl_client$connection_test132537.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_132539,meta132538__$1){
var self__ = this;
var _132539__$1 = this;
return (new repl_tooling.repl_client.connection_test.t_repl_tooling$repl_client$connection_test132537(meta132538__$1));
}));

(repl_tooling.repl_client.connection_test.t_repl_tooling$repl_client$connection_test132537.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_132539){
var self__ = this;
var _132539__$1 = this;
return self__.meta132538;
}));

(repl_tooling.repl_client.connection_test.t_repl_tooling$repl_client$connection_test132537.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(repl_tooling.repl_client.connection_test.t_repl_tooling$repl_client$connection_test132537.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__60603__auto__,devcard_opts__60604__auto__){
var self__ = this;
var this__60603__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__60604__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__60634__auto__ = (function (buffer){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.deref(buffer)], 0))], null);
});
if(cljs.core.fn_QMARK_(v__60634__auto__)){
return (function (data_atom__60635__auto__,owner__60636__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__60634__auto__,data_atom__60635__auto__,owner__60636__auto__], null));
});
} else {
return reagent.core.as_element(v__60634__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__60604__auto__))], 0))], 0));
}));

(repl_tooling.repl_client.connection_test.t_repl_tooling$repl_client$connection_test132537.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta132538","meta132538",-280732703,null)], null);
}));

(repl_tooling.repl_client.connection_test.t_repl_tooling$repl_client$connection_test132537.cljs$lang$type = true);

(repl_tooling.repl_client.connection_test.t_repl_tooling$repl_client$connection_test132537.cljs$lang$ctorStr = "repl-tooling.repl-client.connection-test/t_repl_tooling$repl_client$connection_test132537");

(repl_tooling.repl_client.connection_test.t_repl_tooling$repl_client$connection_test132537.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"repl-tooling.repl-client.connection-test/t_repl_tooling$repl_client$connection_test132537");
}));

/**
 * Positional factory function for repl-tooling.repl-client.connection-test/t_repl_tooling$repl_client$connection_test132537.
 */
repl_tooling.repl_client.connection_test.__GT_t_repl_tooling$repl_client$connection_test132537 = (function repl_tooling$repl_client$connection_test$__GT_t_repl_tooling$repl_client$connection_test132537(meta132538){
return (new repl_tooling.repl_client.connection_test.t_repl_tooling$repl_client$connection_test132537(meta132538));
});

}

return (new repl_tooling.repl_client.connection_test.t_repl_tooling$repl_client$connection_test132537(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),(function (){var G__132553 = cljs.core.deref(repl_tooling.repl_client.connection_test.state);
if((G__132553 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(G__132553);
}
})(),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));

//# sourceMappingURL=repl_tooling.repl_client.connection_test.js.map
