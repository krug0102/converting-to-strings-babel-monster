goog.provide('repl_tooling.integration.fake_editor');
repl_tooling.integration.fake_editor.wait_for = (function repl_tooling$integration$fake_editor$wait_for(f){
var c__35941__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35942__auto__ = (function (){var switch__34939__auto__ = (function (state_72453){
var state_val_72454 = (state_72453[(1)]);
if((state_val_72454 === (7))){
var inst_72434 = (state_72453[(7)]);
var state_72453__$1 = state_72453;
var statearr_72459_72864 = state_72453__$1;
(statearr_72459_72864[(2)] = inst_72434);

(statearr_72459_72864[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72454 === (1))){
var inst_72429 = (0);
var state_72453__$1 = (function (){var statearr_72462 = state_72453;
(statearr_72462[(8)] = inst_72429);

return statearr_72462;
})();
var statearr_72463_72865 = state_72453__$1;
(statearr_72463_72865[(2)] = null);

(statearr_72463_72865[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72454 === (4))){
var inst_72434 = (state_72453[(7)]);
var inst_72434__$1 = (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
var state_72453__$1 = (function (){var statearr_72466 = state_72453;
(statearr_72466[(7)] = inst_72434__$1);

return statearr_72466;
})();
if(cljs.core.truth_(inst_72434__$1)){
var statearr_72468_72866 = state_72453__$1;
(statearr_72468_72866[(1)] = (7));

} else {
var statearr_72469_72867 = state_72453__$1;
(statearr_72469_72867[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72454 === (6))){
var inst_72448 = (state_72453[(2)]);
var state_72453__$1 = state_72453;
var statearr_72470_72873 = state_72453__$1;
(statearr_72470_72873[(2)] = inst_72448);

(statearr_72470_72873[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72454 === (3))){
var inst_72450 = (state_72453[(2)]);
var state_72453__$1 = state_72453;
return cljs.core.async.impl.ioc_helpers.return_chan(state_72453__$1,inst_72450);
} else {
if((state_val_72454 === (2))){
var inst_72429 = (state_72453[(8)]);
var inst_72431 = (inst_72429 < (100));
var state_72453__$1 = state_72453;
if(cljs.core.truth_(inst_72431)){
var statearr_72474_72874 = state_72453__$1;
(statearr_72474_72874[(1)] = (4));

} else {
var statearr_72475_72875 = state_72453__$1;
(statearr_72475_72875[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72454 === (9))){
var inst_72445 = (state_72453[(2)]);
var state_72453__$1 = state_72453;
var statearr_72478_72876 = state_72453__$1;
(statearr_72478_72876[(2)] = inst_72445);

(statearr_72478_72876[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72454 === (5))){
var state_72453__$1 = state_72453;
var statearr_72479_72877 = state_72453__$1;
(statearr_72479_72877[(2)] = null);

(statearr_72479_72877[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72454 === (10))){
var inst_72429 = (state_72453[(8)]);
var inst_72440 = (state_72453[(2)]);
var inst_72441 = (inst_72429 + (1));
var inst_72429__$1 = inst_72441;
var state_72453__$1 = (function (){var statearr_72481 = state_72453;
(statearr_72481[(9)] = inst_72440);

(statearr_72481[(8)] = inst_72429__$1);

return statearr_72481;
})();
var statearr_72482_72878 = state_72453__$1;
(statearr_72482_72878[(2)] = null);

(statearr_72482_72878[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72454 === (8))){
var inst_72438 = cljs.core.async.timeout((100));
var state_72453__$1 = state_72453;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_72453__$1,(10),inst_72438);
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
var repl_tooling$integration$fake_editor$wait_for_$_state_machine__34940__auto__ = null;
var repl_tooling$integration$fake_editor$wait_for_$_state_machine__34940__auto____0 = (function (){
var statearr_72484 = [null,null,null,null,null,null,null,null,null,null];
(statearr_72484[(0)] = repl_tooling$integration$fake_editor$wait_for_$_state_machine__34940__auto__);

(statearr_72484[(1)] = (1));

return statearr_72484;
});
var repl_tooling$integration$fake_editor$wait_for_$_state_machine__34940__auto____1 = (function (state_72453){
while(true){
var ret_value__34941__auto__ = (function (){try{while(true){
var result__34942__auto__ = switch__34939__auto__(state_72453);
if(cljs.core.keyword_identical_QMARK_(result__34942__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34942__auto__;
}
break;
}
}catch (e72486){var ex__34943__auto__ = e72486;
var statearr_72487_72879 = state_72453;
(statearr_72487_72879[(2)] = ex__34943__auto__);


if(cljs.core.seq((state_72453[(4)]))){
var statearr_72488_72880 = state_72453;
(statearr_72488_72880[(1)] = cljs.core.first((state_72453[(4)])));

} else {
throw ex__34943__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34941__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72881 = state_72453;
state_72453 = G__72881;
continue;
} else {
return ret_value__34941__auto__;
}
break;
}
});
repl_tooling$integration$fake_editor$wait_for_$_state_machine__34940__auto__ = function(state_72453){
switch(arguments.length){
case 0:
return repl_tooling$integration$fake_editor$wait_for_$_state_machine__34940__auto____0.call(this);
case 1:
return repl_tooling$integration$fake_editor$wait_for_$_state_machine__34940__auto____1.call(this,state_72453);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
repl_tooling$integration$fake_editor$wait_for_$_state_machine__34940__auto__.cljs$core$IFn$_invoke$arity$0 = repl_tooling$integration$fake_editor$wait_for_$_state_machine__34940__auto____0;
repl_tooling$integration$fake_editor$wait_for_$_state_machine__34940__auto__.cljs$core$IFn$_invoke$arity$1 = repl_tooling$integration$fake_editor$wait_for_$_state_machine__34940__auto____1;
return repl_tooling$integration$fake_editor$wait_for_$_state_machine__34940__auto__;
})()
})();
var state__35943__auto__ = (function (){var statearr_72491 = f__35942__auto__();
(statearr_72491[(6)] = c__35941__auto__);

return statearr_72491;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35943__auto__);
}));

return c__35941__auto__;
});
repl_tooling.integration.fake_editor.wait_for_p = (function repl_tooling$integration$fake_editor$wait_for_p(f){
var run72501 = promesa.core._STAR_loop_run_fn_STAR_;
var deferred72500 = promesa.core.deferred();
var loop72499 = (function repl_tooling$integration$fake_editor$wait_for_p_$_loop72499(params__31844__auto__){
return promesa.core.handle.cljs$core$IFn$_invoke$arity$2(promesa.core.then.cljs$core$IFn$_invoke$arity$2(promesa.core.all(params__31844__auto__),(function (p__72503){
var vec__72505 = p__72503;
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72505,(0),null);
return promesa.protocols._bind(null,(function (___31810__auto__){
return promesa.protocols._promise((((t < (100)))?(function (){var temp__5751__auto__ = (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
if(cljs.core.truth_(temp__5751__auto__)){
var res = temp__5751__auto__;
return res;
} else {
return promesa.protocols._bind(null,(function (___31810__auto____$1){
return promesa.protocols._bind(promesa.core.delay.cljs$core$IFn$_invoke$arity$1((100)),(function (___31809__auto__){
return promesa.protocols._promise((new cljs.core.PersistentArrayMap(null,(2),[new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("promesa.core","recur","promesa.core/recur",100580374),new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(t + (1))], null)],null)));
}));
}));
}
})():null));
}));
})),(function (res__31845__auto__,err__31846__auto__){
if((!((err__31846__auto__ == null)))){
return promesa.core.reject_BANG_(deferred72500,err__31846__auto__);
} else {
if(((cljs.core.map_QMARK_(res__31845__auto__)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(res__31845__auto__),new cljs.core.Keyword("promesa.core","recur","promesa.core/recur",100580374))))){
var G__72521_72882 = (function (){
return repl_tooling$integration$fake_editor$wait_for_p_$_loop72499(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(res__31845__auto__));
});
(run72501.cljs$core$IFn$_invoke$arity$1 ? run72501.cljs$core$IFn$_invoke$arity$1(G__72521_72882) : run72501.call(null,G__72521_72882));

return null;
} else {
return promesa.core.resolve_BANG_.cljs$core$IFn$_invoke$arity$2(deferred72500,res__31845__auto__);

}
}
}));
});
var G__72526_72883 = (function (){
return loop72499(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null));
});
(run72501.cljs$core$IFn$_invoke$arity$1 ? run72501.cljs$core$IFn$_invoke$arity$1(G__72526_72883) : run72501.call(null,G__72526_72883));

return deferred72500;
});
if((typeof repl_tooling !== 'undefined') && (typeof repl_tooling.integration !== 'undefined') && (typeof repl_tooling.integration.fake_editor !== 'undefined') && (typeof repl_tooling.integration.fake_editor.state !== 'undefined')){
} else {
repl_tooling.integration.fake_editor.state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"eval-result","eval-result",937286342),new cljs.core.Keyword(null,"port","port",1534937262),new cljs.core.Keyword(null,"repls","repls",870822864),new cljs.core.Keyword(null,"filename","filename",-1428840783),new cljs.core.Keyword(null,"host","host",-1558485167),new cljs.core.Keyword(null,"commands","commands",161008658),new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"stderr","stderr",-1571650309),new cljs.core.Keyword(null,"stdout","stdout",-531490018),new cljs.core.Keyword(null,"range","range",1639692286)],[reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null),(2233),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"eval","eval",-1103567905),null,new cljs.core.Keyword(null,"aux","aux",-10408640),null], null),"foo.clj","localhost",cljs.core.PersistentArrayMap.EMPTY,"(do (defrecord Foo [a b]) (->Foo (range 20) 20))",null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)], null)]));
}
repl_tooling.integration.fake_editor.reset_state_BANG_ = (function repl_tooling$integration$fake_editor$reset_state_BANG_(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(repl_tooling.integration.fake_editor.state,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"code","code",1586293142),"",new cljs.core.Keyword(null,"filename","filename",-1428840783),"file.clj",new cljs.core.Keyword(null,"stdout","stdout",-531490018),null,new cljs.core.Keyword(null,"stderr","stderr",-1571650309),null,new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)], null),new cljs.core.Keyword(null,"eval-result","eval-result",937286342),reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null)], null));
});
repl_tooling.integration.fake_editor.res = (function repl_tooling$integration$fake_editor$res(result){
return promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(new cljs.core.Keyword(null,"result-for-renderer","result-for-renderer",-118580804).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"features","features",-1146962336).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(repl_tooling.integration.fake_editor.state))),(function (parse){
return promesa.protocols._bind((parse.cljs$core$IFn$_invoke$arity$1 ? parse.cljs$core$IFn$_invoke$arity$1(result) : parse.call(null,result)),(function (res){
return promesa.protocols._bind(null,(function (___31810__auto__){
return promesa.protocols._promise(cljs.core.reset_BANG_(new cljs.core.Keyword(null,"eval-result","eval-result",937286342).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(repl_tooling.integration.fake_editor.state)),res));
}));
}));
}));
}));
});
repl_tooling.integration.fake_editor.run_command_BANG_ = (function repl_tooling$integration$fake_editor$run_command_BANG_(command){
var temp__5751__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(repl_tooling.integration.fake_editor.state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"commands","commands",161008658),command,new cljs.core.Keyword(null,"command","command",-894540724)], null));
if(cljs.core.truth_(temp__5751__auto__)){
var cmd = temp__5751__auto__;
return (cmd.cljs$core$IFn$_invoke$arity$0 ? cmd.cljs$core$IFn$_invoke$arity$0() : cmd.call(null));
} else {
return cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Command not found",command], 0));
}
});
repl_tooling.integration.fake_editor.run_feature_BANG_ = (function repl_tooling$integration$fake_editor$run_feature_BANG_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___72884 = arguments.length;
var i__4830__auto___72885 = (0);
while(true){
if((i__4830__auto___72885 < len__4829__auto___72884)){
args__4835__auto__.push((arguments[i__4830__auto___72885]));

var G__72886 = (i__4830__auto___72885 + (1));
i__4830__auto___72885 = G__72886;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return repl_tooling.integration.fake_editor.run_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(repl_tooling.integration.fake_editor.run_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (feature,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(repl_tooling.editor_integration.commands.run_feature_BANG_,new cljs.core.Keyword(null,"editor-state","editor-state",579582138).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(repl_tooling.integration.fake_editor.state)),feature,args);
}));

(repl_tooling.integration.fake_editor.run_feature_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(repl_tooling.integration.fake_editor.run_feature_BANG_.cljs$lang$applyTo = (function (seq72537){
var G__72538 = cljs.core.first(seq72537);
var seq72537__$1 = cljs.core.next(seq72537);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__72538,seq72537__$1);
}));

repl_tooling.integration.fake_editor.evaluate = (function repl_tooling$integration$fake_editor$evaluate(){
var lines = clojure.string.split_lines(new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(repl_tooling.integration.fake_editor.state)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(repl_tooling.integration.fake_editor.state,cljs.core.assoc,new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.count(lines) - (1)),(cljs.core.count(cljs.core.last(lines)) - (1))], null)], null));

return repl_tooling.integration.fake_editor.run_command_BANG_(new cljs.core.Keyword(null,"evaluate-selection","evaluate-selection",1547740826));
});
repl_tooling.integration.fake_editor.type = (function repl_tooling$integration$fake_editor$type(txt){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(repl_tooling.integration.fake_editor.state,cljs.core.assoc,new cljs.core.Keyword(null,"code","code",1586293142),txt);
});
repl_tooling.integration.fake_editor.type_and_eval = (function repl_tooling$integration$fake_editor$type_and_eval(txt){
repl_tooling.integration.fake_editor.type(txt);

return repl_tooling.integration.fake_editor.evaluate();
});
repl_tooling.integration.fake_editor.change_stdout = (function repl_tooling$integration$fake_editor$change_stdout(){
var old = new cljs.core.Keyword(null,"stdout","stdout",-531490018).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(repl_tooling.integration.fake_editor.state));
return repl_tooling.integration.fake_editor.wait_for((function (){
var and__4221__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old,new cljs.core.Keyword(null,"stdout","stdout",-531490018).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(repl_tooling.integration.fake_editor.state)));
if(and__4221__auto__){
return new cljs.core.Keyword(null,"stdout","stdout",-531490018).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(repl_tooling.integration.fake_editor.state));
} else {
return and__4221__auto__;
}
}));
});
repl_tooling.integration.fake_editor.txt_for_selector = (function repl_tooling$integration$fake_editor$txt_for_selector(sel){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__72593 = document;
var G__72593__$1 = (((G__72593 == null))?null:G__72593.querySelector(sel));
var G__72593__$2 = (((G__72593__$1 == null))?null:G__72593__$1.innerText);
if((G__72593__$2 == null)){
return null;
} else {
return G__72593__$2.trim();
}
})());
});
repl_tooling.integration.fake_editor.change_result = (function repl_tooling$integration$fake_editor$change_result(){
var old = repl_tooling.integration.fake_editor.txt_for_selector("#result");
return repl_tooling.integration.fake_editor.wait_for((function (){
var and__4221__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old,repl_tooling.integration.fake_editor.txt_for_selector("#result"));
if(and__4221__auto__){
return repl_tooling.integration.fake_editor.txt_for_selector("#result");
} else {
return and__4221__auto__;
}
}));
});
repl_tooling.integration.fake_editor.change_result_p = (function repl_tooling$integration$fake_editor$change_result_p(){
var old = repl_tooling.integration.fake_editor.txt_for_selector("#result");
return repl_tooling.integration.fake_editor.wait_for_p((function (){
var and__4221__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old,repl_tooling.integration.fake_editor.txt_for_selector("#result"));
if(and__4221__auto__){
return repl_tooling.integration.fake_editor.txt_for_selector("#result");
} else {
return and__4221__auto__;
}
}));
});
repl_tooling.integration.fake_editor.change_stdout_p = (function repl_tooling$integration$fake_editor$change_stdout_p(){
var old = repl_tooling.integration.fake_editor.txt_for_selector("#stdout");
return repl_tooling.integration.fake_editor.wait_for_p((function (){
var and__4221__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old,repl_tooling.integration.fake_editor.txt_for_selector("#stdout"));
if(and__4221__auto__){
return repl_tooling.integration.fake_editor.txt_for_selector("#stdout");
} else {
return and__4221__auto__;
}
}));
});
repl_tooling.integration.fake_editor.change_stderr_p = (function repl_tooling$integration$fake_editor$change_stderr_p(){
var old = repl_tooling.integration.fake_editor.txt_for_selector("#stderr");
return repl_tooling.integration.fake_editor.wait_for_p((function (){
var and__4221__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old,repl_tooling.integration.fake_editor.txt_for_selector("#stderr"));
if(and__4221__auto__){
return repl_tooling.integration.fake_editor.txt_for_selector("#stderr");
} else {
return and__4221__auto__;
}
}));
});
repl_tooling.integration.fake_editor.handle_disconnect = (function repl_tooling$integration$fake_editor$handle_disconnect(){
cljs.core.reset_BANG_(new cljs.core.Keyword(null,"eval-result","eval-result",937286342).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(repl_tooling.integration.fake_editor.state)),null);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(repl_tooling.integration.fake_editor.state,cljs.core.assoc,new cljs.core.Keyword(null,"repls","repls",870822864),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"eval","eval",-1103567905),null,new cljs.core.Keyword(null,"aux","aux",-10408640),null], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"stdout","stdout",-531490018),null,new cljs.core.Keyword(null,"stderr","stderr",-1571650309),null,new cljs.core.Keyword(null,"commands","commands",161008658),cljs.core.PersistentArrayMap.EMPTY], 0));
});
repl_tooling.integration.fake_editor.connect_BANG_ = (function repl_tooling$integration$fake_editor$connect_BANG_(var_args){
var G__72685 = arguments.length;
switch (G__72685) {
case 0:
return repl_tooling.integration.fake_editor.connect_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return repl_tooling.integration.fake_editor.connect_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(repl_tooling.integration.fake_editor.connect_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return repl_tooling.integration.fake_editor.connect_BANG_.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}));

(repl_tooling.integration.fake_editor.connect_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (additional_callbacks){
repl_tooling.integration.fake_editor.reset_state_BANG_();

if(cljs.core.truth_(new cljs.core.Keyword(null,"eval","eval",-1103567905).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"repls","repls",870822864).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(repl_tooling.integration.fake_editor.state))))){
return Promise.resolve(cljs.core.deref(repl_tooling.integration.fake_editor.state));
} else {
return repl_tooling.editor_integration.connection.connect_BANG_(new cljs.core.Keyword(null,"host","host",-1558485167).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(repl_tooling.integration.fake_editor.state)),new cljs.core.Keyword(null,"port","port",1534937262).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(repl_tooling.integration.fake_editor.state)),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),repl_tooling.integration.fake_editor.handle_disconnect,new cljs.core.Keyword(null,"on-stdout","on-stdout",1480958368),(function (p1__72679_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(repl_tooling.integration.fake_editor.state,cljs.core.update,new cljs.core.Keyword(null,"stdout","stdout",-531490018),(function (e){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(e),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__72679_SHARP_)].join('');
}));
}),new cljs.core.Keyword(null,"on-eval","on-eval",-1349336659),repl_tooling.integration.fake_editor.res,new cljs.core.Keyword(null,"notify","notify",-1256867814),cljs.core.identity,new cljs.core.Keyword(null,"prompt","prompt",-78109487),cljs.core.constantly(Promise.resolve("fixture")),new cljs.core.Keyword(null,"get-config","get-config",1800808901),cljs.core.constantly(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"eval-mode","eval-mode",1105308847),new cljs.core.Keyword(null,"prefer-clj","prefer-clj",-124166522),new cljs.core.Keyword(null,"project-paths","project-paths",-1637469806),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [process.cwd()], null)], null)),new cljs.core.Keyword(null,"on-stderr","on-stderr",1583456038),(function (p1__72681_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(repl_tooling.integration.fake_editor.state,cljs.core.update,new cljs.core.Keyword(null,"stderr","stderr",-1571650309),(function (e){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(e),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__72681_SHARP_)].join('');
}));
}),new cljs.core.Keyword(null,"editor-data","editor-data",-2084300305),(function (){
var code = new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(repl_tooling.integration.fake_editor.state));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"contents","contents",-1567174023),code,new cljs.core.Keyword(null,"filename","filename",-1428840783),new cljs.core.Keyword(null,"filename","filename",-1428840783).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(repl_tooling.integration.fake_editor.state)),new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.Keyword(null,"range","range",1639692286).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(repl_tooling.integration.fake_editor.state))], null);
})], null),additional_callbacks], 0))).then((function (res){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(repl_tooling.integration.fake_editor.state,cljs.core.assoc,new cljs.core.Keyword(null,"editor-state","editor-state",579582138),res,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"repls","repls",870822864),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"eval","eval",-1103567905),new cljs.core.Keyword("clj","repl","clj/repl",-35234538).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(res)),new cljs.core.Keyword(null,"aux","aux",-10408640),new cljs.core.Keyword("clj","aux","clj/aux",-10310625).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(res))], null),new cljs.core.Keyword(null,"commands","commands",161008658),new cljs.core.Keyword("editor","commands","editor/commands",1134888579).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(res)),new cljs.core.Keyword(null,"features","features",-1146962336),new cljs.core.Keyword("editor","features","editor/features",1302258665).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(res)),new cljs.core.Keyword(null,"stdout","stdout",-531490018),"",new cljs.core.Keyword(null,"stderr","stderr",-1571650309),""], 0));
}));
}
}));

(repl_tooling.integration.fake_editor.connect_BANG_.cljs$lang$maxFixedArity = 1);

repl_tooling.integration.fake_editor.disconnect_BANG_ = (function repl_tooling$integration$fake_editor$disconnect_BANG_(){
return repl_tooling.commands_to_repl.all_cmds.disconnect_BANG_();
});
repl_tooling.integration.fake_editor.editor = (function repl_tooling$integration$fake_editor$editor(state){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Socket REPL connections"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),"Hostname: "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"host","host",-1558485167).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__72699_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword(null,"host","host",-1558485167),p1__72699_SHARP_.target.value);
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470)," Port: "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"port","port",1534937262).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__72700_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword(null,"port","port",1534937262),(p1__72700_SHARP_.target.value | (0)));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470)," Filename: "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"filename","filename",-1428840783).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__72701_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword(null,"filename","filename",-1428840783),p1__72701_SHARP_.target.value);
})], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100px"], null),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__72702_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword(null,"code","code",1586293142),p1__72702_SHARP_.target.value);
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(cljs.core.truth_(new cljs.core.Keyword(null,"eval","eval",-1103567905).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"repls","repls",870822864).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state))))?(function (){var iter__4622__auto__ = (function repl_tooling$integration$fake_editor$editor_$_iter__72765(s__72766){
return (new cljs.core.LazySeq(null,(function (){
var s__72766__$1 = s__72766;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__72766__$1);
if(temp__5753__auto__){
var s__72766__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__72766__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__72766__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__72768 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__72767 = (0);
while(true){
if((i__72767 < size__4621__auto__)){
var vec__72779 = cljs.core._nth(c__4620__auto__,i__72767);
var command = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72779,(0),null);
cljs.core.chunk_append(b__72768,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),command,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__72767,vec__72779,command,c__4620__auto__,size__4621__auto__,b__72768,s__72766__$2,temp__5753__auto__){
return (function (){
return repl_tooling.integration.fake_editor.run_command_BANG_(command);
});})(i__72767,vec__72779,command,c__4620__auto__,size__4621__auto__,b__72768,s__72766__$2,temp__5753__auto__))
], null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([command], 0))], null));

var G__72950 = (i__72767 + (1));
i__72767 = G__72950;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__72768),repl_tooling$integration$fake_editor$editor_$_iter__72765(cljs.core.chunk_rest(s__72766__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__72768),null);
}
} else {
var vec__72786 = cljs.core.first(s__72766__$2);
var command = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72786,(0),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),command,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__72786,command,s__72766__$2,temp__5753__auto__){
return (function (){
return repl_tooling.integration.fake_editor.run_command_BANG_(command);
});})(vec__72786,command,s__72766__$2,temp__5753__auto__))
], null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([command], 0))], null),repl_tooling$integration$fake_editor$editor_$_iter__72765(cljs.core.rest(s__72766__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(new cljs.core.Keyword(null,"commands","commands",161008658).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)));
})():null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(cljs.core.truth_(new cljs.core.Keyword(null,"eval","eval",-1103567905).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"repls","repls",870822864).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state))))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),repl_tooling.integration.fake_editor.evaluate], null),"Evaluate"], null)," ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),repl_tooling.integration.fake_editor.disconnect_BANG_], null),"Disconnect!"], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return repl_tooling.integration.fake_editor.connect_BANG_.cljs$core$IFn$_invoke$arity$0();
})], null),"Connect!"], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),(cljs.core.truth_(new cljs.core.Keyword(null,"eval","eval",-1103567905).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"repls","repls",870822864).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state))))?"Connected":"Disconnected")], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5","h5",-1829156625),"RESULT"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"result",new cljs.core.Keyword(null,"class","class",-2030961996),"result repl-tooling"], null),(function (){var temp__5753__auto__ = cljs.core.deref(new cljs.core.Keyword(null,"eval-result","eval-result",937286342).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)));
if(cljs.core.truth_(temp__5753__auto__)){
var res = temp__5753__auto__;
return repl_tooling.editor_integration.renderer.view_for_result(res);
} else {
return null;
}
})()], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5","h5",-1829156625),"STDOUT",(function (){var temp__5753__auto__ = new cljs.core.Keyword(null,"stdout","stdout",-531490018).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state));
if(cljs.core.truth_(temp__5753__auto__)){
var out = temp__5753__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre#stdout","pre#stdout",1935059738),out], null);
} else {
return null;
}
})()], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5","h5",-1829156625),"STDERR"], null)], null),(function (){var temp__5753__auto__ = new cljs.core.Keyword(null,"stderr","stderr",-1571650309).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state));
if(cljs.core.truth_(temp__5753__auto__)){
var out = temp__5753__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre#stderr","pre#stderr",-1944932110),out], null);
} else {
return null;
}
})()], null);
});
repl_tooling.integration.fake_editor.click_link = (function repl_tooling$integration$fake_editor$click_link(link_text){
return promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind((function (){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__72799_SHARP_){
return cljs.core.re_find(cljs.core.re_pattern(link_text),p1__72799_SHARP_.innerText);
}),document.querySelectorAll("div.result a")));
}),(function (find_link){
return promesa.protocols._bind(repl_tooling.integration.fake_editor.wait_for_p(find_link),(function (link){
return promesa.protocols._bind(null,(function (___31810__auto__){
return promesa.protocols._promise(link.click());
}));
}));
}));
}));
});
repl_tooling.integration.fake_editor.clear_results_BANG_ = (function repl_tooling$integration$fake_editor$clear_results_BANG_(){
cljs.core.reset_BANG_(new cljs.core.Keyword(null,"eval-result","eval-result",937286342).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(repl_tooling.integration.fake_editor.state)),null);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(repl_tooling.integration.fake_editor.state,cljs.core.assoc,new cljs.core.Keyword(null,"stderr","stderr",-1571650309),"",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"stdout","stdout",-531490018),""], 0));
});

//# sourceMappingURL=repl_tooling.integration.fake_editor.js.map
