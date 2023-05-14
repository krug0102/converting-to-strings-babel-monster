goog.provide('repl_tooling.editor_integration.autocomplete_test');
(devcards.core.test_timeout = (20000));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"repl_tooling.editor_integration.autocomplete_test","repl_tooling.editor_integration.autocomplete_test",-872225640),new cljs.core.Keyword(null,"autodetection-of-autocomplete","autodetection-of-autocomplete",1199890134)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"autodetection-of-autocomplete",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){
if((typeof repl_tooling !== 'undefined') && (typeof repl_tooling.editor_integration !== 'undefined') && (typeof repl_tooling.editor_integration.autocomplete_test !== 'undefined') && (typeof repl_tooling.editor_integration.autocomplete_test.t_repl_tooling$editor_integration$autocomplete_test91232 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
repl_tooling.editor_integration.autocomplete_test.t_repl_tooling$editor_integration$autocomplete_test91232 = (function (meta91233){
this.meta91233 = meta91233;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(repl_tooling.editor_integration.autocomplete_test.t_repl_tooling$editor_integration$autocomplete_test91232.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_91234,meta91233__$1){
var self__ = this;
var _91234__$1 = this;
return (new repl_tooling.editor_integration.autocomplete_test.t_repl_tooling$editor_integration$autocomplete_test91232(meta91233__$1));
}));

(repl_tooling.editor_integration.autocomplete_test.t_repl_tooling$editor_integration$autocomplete_test91232.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_91234){
var self__ = this;
var _91234__$1 = this;
return self__.meta91233;
}));

(repl_tooling.editor_integration.autocomplete_test.t_repl_tooling$editor_integration$autocomplete_test91232.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(repl_tooling.editor_integration.autocomplete_test.t_repl_tooling$editor_integration$autocomplete_test91232.prototype.call = (function (self__,done__53962__auto__){
var self__ = this;
var self____$1 = this;
var ___9200__auto__ = self____$1;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["autocomplete"], 0));

try{var c__35941__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35942__auto__ = (function (){var switch__34939__auto__ = (function (state_91519){
var state_val_91521 = (state_91519[(1)]);
if((state_val_91521 === (7))){
var _ = (function (){var statearr_91529 = state_91519;
(statearr_91529[(4)] = cljs.core.rest((state_91519[(4)])));

return statearr_91529;
})();
var state_91519__$1 = state_91519;
var ex91522 = (state_91519__$1[(2)]);
var statearr_91531_94222 = state_91519__$1;
(statearr_91531_94222[(5)] = ex91522);


throw ex91522;


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91521 === (20))){
var inst_91266 = (state_91519[(7)]);
var inst_91300 = (state_91519[(8)]);
var inst_91293 = (state_91519[(9)]);
var inst_91265 = (state_91519[(10)]);
var inst_91264 = (state_91519[(11)]);
var inst_91299 = (state_91519[(12)]);
var inst_91243 = (state_91519[(13)]);
var inst_91292 = (state_91519[(14)]);
var inst_91287 = (state_91519[(15)]);
var inst_91267 = (state_91519[(16)]);
var inst_91427 = (state_91519[(2)]);
var inst_91428 = (inst_91300.cljs$core$IFn$_invoke$arity$0 ? inst_91300.cljs$core$IFn$_invoke$arity$0() : inst_91300.call(null));
var inst_91429 = (function (){var res = inst_91265;
var autocomplete = inst_91300;
var clj = inst_91266;
var cljs__$1 = inst_91267;
var map__91248 = inst_91292;
var data = inst_91264;
var mark_as_done__53963__auto__ = inst_91243;
var map__91249 = inst_91299;
var _ = inst_91287;
var connect_embedded = inst_91293;
return (function (p1__91228_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(cljs__$1,p1__91228_SHARP_);
});
})();
var inst_91430 = inst_91428.then(inst_91429);
var state_91519__$1 = (function (){var statearr_91538 = state_91519;
(statearr_91538[(17)] = inst_91430);

(statearr_91538[(18)] = inst_91427);

return statearr_91538;
})();
var statearr_91541_94225 = state_91519__$1;
(statearr_91541_94225[(2)] = null);

(statearr_91541_94225[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91521 === (27))){
var state_91519__$1 = state_91519;
var statearr_91546_94226 = state_91519__$1;
(statearr_91546_94226[(2)] = new cljs.core.Keyword(null,"fail","fail",1706214930));

(statearr_91546_94226[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91521 === (1))){
var inst_91266 = (state_91519[(7)]);
var inst_91265 = (state_91519[(10)]);
var inst_91264 = (state_91519[(11)]);
var inst_91243 = (state_91519[(13)]);
var inst_91267 = (state_91519[(16)]);
var inst_91242 = (function (){return (function (){
repl_tooling.editor_integration.connection.disconnect_BANG_();

return (done__53962__auto__.cljs$core$IFn$_invoke$arity$0 ? done__53962__auto__.cljs$core$IFn$_invoke$arity$0() : done__53962__auto__.call(null));
});
})();
var inst_91243__$1 = (new cljs.core.Delay(inst_91242,null));
var inst_91246 = (function (){var mark_as_done__53963__auto__ = inst_91243__$1;
return (function (){
if(cljs.core.realized_QMARK_(mark_as_done__53963__auto__)){
return null;
} else {
try{var value__9156__auto___94227 = (function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Async test error - not finalized",cljs.core.PersistentArrayMap.EMPTY)})();
if(cljs.core.truth_(value__9156__auto___94227)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"pass","pass",1574159993),null,null,cljs.core.list(new cljs.core.Symbol(null,"throw","throw",595905694,null),cljs.core.list(new cljs.core.Symbol("clojure.core","ex-info","clojure.core/ex-info",-504237117,null),"Async test error - not finalized",cljs.core.PersistentArrayMap.EMPTY)),null,value__9156__auto___94227,null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"fail","fail",1706214930),null,null,cljs.core.list(new cljs.core.Symbol(null,"throw","throw",595905694,null),cljs.core.list(new cljs.core.Symbol("clojure.core","ex-info","clojure.core/ex-info",-504237117,null),"Async test error - not finalized",cljs.core.PersistentArrayMap.EMPTY)),null,value__9156__auto___94227,null]));
}

}catch (e91557){var t__9189__auto___94228 = e91557;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol(null,"throw","throw",595905694,null),cljs.core.list(new cljs.core.Symbol("clojure.core","ex-info","clojure.core/ex-info",-504237117,null),"Async test error - not finalized",cljs.core.PersistentArrayMap.EMPTY)),null,t__9189__auto___94228,null]));
}
return cljs.core.deref(mark_as_done__53963__auto__);
}
});
})();
var inst_91247 = setTimeout(inst_91246,(3000));
var inst_91250 = [new cljs.core.Keyword(null,"contents","contents",-1567174023),new cljs.core.Keyword(null,"filename","filename",-1428840783),new cljs.core.Keyword(null,"range","range",1639692286)];
var inst_91252 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_91253 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_91254 = [(1),(19)];
var inst_91255 = (new cljs.core.PersistentVector(null,2,(5),inst_91253,inst_91254,null));
var inst_91257 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_91258 = [(1),(19)];
var inst_91259 = (new cljs.core.PersistentVector(null,2,(5),inst_91257,inst_91258,null));
var inst_91260 = [inst_91255,inst_91259];
var inst_91261 = (new cljs.core.PersistentVector(null,2,(5),inst_91252,inst_91260,null));
var inst_91262 = ["(let [foa 10] foa)\n(let [foo 10] (+ fo))","foo.clj",inst_91261];
var inst_91263 = cljs.core.PersistentHashMap.fromArrays(inst_91250,inst_91262);
var inst_91264__$1 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(inst_91263);
var inst_91265__$1 = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var inst_91266__$1 = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var inst_91267__$1 = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var inst_91269 = [new cljs.core.Keyword(null,"editor-data","editor-data",-2084300305),new cljs.core.Keyword(null,"prompt","prompt",-78109487),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),new cljs.core.Keyword(null,"notify","notify",-1256867814),new cljs.core.Keyword(null,"get-config","get-config",1800808901)];
var inst_91270 = (function (){var mark_as_done__53963__auto__ = inst_91243__$1;
var data = inst_91264__$1;
var res = inst_91265__$1;
var clj = inst_91266__$1;
var cljs__$1 = inst_91267__$1;
return (function (){
return cljs.core.deref(data);
});
})();
var inst_91271 = Promise.resolve("fixture");
var inst_91272 = cljs.core.constantly(inst_91271);
var inst_91274 = [new cljs.core.Keyword(null,"eval-mode","eval-mode",1105308847),new cljs.core.Keyword(null,"project-paths","project-paths",-1637469806)];
var inst_91276 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_91277 = process.cwd();
var inst_91278 = [inst_91277];
var inst_91279 = (new cljs.core.PersistentVector(null,1,(5),inst_91276,inst_91278,null));
var inst_91280 = [new cljs.core.Keyword(null,"prefer-cljs","prefer-cljs",1599484843),inst_91279];
var inst_91281 = cljs.core.PersistentHashMap.fromArrays(inst_91274,inst_91280);
var inst_91282 = cljs.core.constantly(inst_91281);
var inst_91283 = [inst_91270,inst_91272,cljs.core.identity,cljs.core.identity,inst_91282];
var inst_91284 = cljs.core.PersistentHashMap.fromArrays(inst_91269,inst_91283);
var inst_91285 = repl_tooling.editor_integration.connection.connect_BANG_("localhost",(2233),inst_91284);
var inst_91286 = (function (){var mark_as_done__53963__auto__ = inst_91243__$1;
var data = inst_91264__$1;
var res = inst_91265__$1;
var clj = inst_91266__$1;
var cljs__$1 = inst_91267__$1;
return (function (p1__91225_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(res,p1__91225_SHARP_);
});
})();
var inst_91287 = inst_91285.then(inst_91286);
var state_91519__$1 = (function (){var statearr_91572 = state_91519;
(statearr_91572[(7)] = inst_91266__$1);

(statearr_91572[(10)] = inst_91265__$1);

(statearr_91572[(19)] = inst_91247);

(statearr_91572[(11)] = inst_91264__$1);

(statearr_91572[(13)] = inst_91243__$1);

(statearr_91572[(15)] = inst_91287);

(statearr_91572[(16)] = inst_91267__$1);

return statearr_91572;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_91519__$1,(2),inst_91265__$1);
} else {
if((state_val_91521 === (24))){
var _ = (function (){var statearr_91576 = state_91519;
(statearr_91576[(4)] = cljs.core.rest((state_91519[(4)])));

return statearr_91576;
})();
var state_91519__$1 = state_91519;
var ex91544 = (state_91519__$1[(2)]);
var statearr_91578_94233 = state_91519__$1;
(statearr_91578_94233[(5)] = ex91544);


var statearr_91581_94234 = state_91519__$1;
(statearr_91581_94234[(1)] = (23));

(statearr_91581_94234[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91521 === (4))){
var inst_91266 = (state_91519[(7)]);
var inst_91300 = (state_91519[(8)]);
var inst_91293 = (state_91519[(9)]);
var inst_91265 = (state_91519[(10)]);
var inst_91264 = (state_91519[(11)]);
var inst_91299 = (state_91519[(12)]);
var inst_91243 = (state_91519[(13)]);
var inst_91292 = (state_91519[(14)]);
var inst_91287 = (state_91519[(15)]);
var inst_91267 = (state_91519[(16)]);
var _ = (function (){var statearr_91587 = state_91519;
(statearr_91587[(4)] = cljs.core.cons((6),(state_91519[(4)])));

return statearr_91587;
})();
var ___$1 = (function (){var statearr_91589 = state_91519;
(statearr_91589[(4)] = cljs.core.cons((7),(state_91519[(4)])));

return statearr_91589;
})();
var inst_91321 = (inst_91300.cljs$core$IFn$_invoke$arity$0 ? inst_91300.cljs$core$IFn$_invoke$arity$0() : inst_91300.call(null));
var inst_91322 = (function (){var res = inst_91265;
var autocomplete = inst_91300;
var clj = inst_91266;
var cljs__$1 = inst_91267;
var map__91248 = inst_91292;
var data = inst_91264;
var mark_as_done__53963__auto__ = inst_91243;
var map__91249 = inst_91299;
var ___$2 = inst_91287;
var connect_embedded = inst_91293;
return (function (p1__91226_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(clj,p1__91226_SHARP_);
});
})();
var inst_91323 = inst_91321.then(inst_91322);
var state_91519__$1 = (function (){var statearr_91596 = state_91519;
(statearr_91596[(20)] = inst_91323);

return statearr_91596;
})();
var statearr_91597_94237 = state_91519__$1;
(statearr_91597_94237[(2)] = null);

(statearr_91597_94237[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91521 === (15))){
var inst_91383 = (state_91519[(21)]);
var inst_91378 = (state_91519[(22)]);
var inst_91387 = (state_91519[(23)]);
var inst_91391 = (state_91519[(2)]);
var inst_91392 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(inst_91383);
var inst_91393 = [inst_91391,inst_91378,inst_91392];
var inst_91394 = cljs.core.PersistentHashMap.fromArrays(inst_91387,inst_91393);
var inst_91395 = cljs.test.do_report(inst_91394);
var _ = (function (){var statearr_91600 = state_91519;
(statearr_91600[(4)] = cljs.core.rest((state_91519[(4)])));

return statearr_91600;
})();
var state_91519__$1 = state_91519;
var statearr_91601_94239 = state_91519__$1;
(statearr_91601_94239[(2)] = inst_91395);

(statearr_91601_94239[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91521 === (21))){
var inst_91267 = (state_91519[(16)]);
var _ = (function (){var statearr_91606 = state_91519;
(statearr_91606[(4)] = cljs.core.cons((24),(state_91519[(4)])));

return statearr_91606;
})();
var state_91519__$1 = state_91519;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_91519__$1,(25),inst_91267);
} else {
if((state_val_91521 === (13))){
var state_91519__$1 = state_91519;
var statearr_91607_94240 = state_91519__$1;
(statearr_91607_94240[(2)] = new cljs.core.Keyword(null,"pass","pass",1574159993));

(statearr_91607_94240[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91521 === (22))){
var inst_91506 = (state_91519[(2)]);
var _ = (function (){var statearr_91610 = state_91519;
(statearr_91610[(4)] = cljs.core.rest((state_91519[(4)])));

return statearr_91610;
})();
var state_91519__$1 = state_91519;
var statearr_91611_94242 = state_91519__$1;
(statearr_91611_94242[(2)] = inst_91506);

(statearr_91611_94242[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91521 === (6))){
var _ = (function (){var statearr_91612 = state_91519;
(statearr_91612[(4)] = cljs.core.rest((state_91519[(4)])));

return statearr_91612;
})();
var inst_91307 = (state_91519[(2)]);
var inst_91309 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_91310 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_91311 = (new cljs.core.PersistentVector(null,1,(5),inst_91309,inst_91310,null));
var inst_91312 = cljs.test.update_current_env_BANG_(inst_91311,cljs.core.rest);
var ___$1 = (function (){var temp__5753__auto__ = (state_91519[(5)]);
if(cljs.core.truth_(temp__5753__auto__)){
var e__34184__auto__ = temp__5753__auto__;
throw e__34184__auto__;
} else {
return null;
}
})();
var state_91519__$1 = (function (){var statearr_91617 = state_91519;
(statearr_91617[(24)] = inst_91312);

return statearr_91617;
})();
var statearr_91618_94243 = state_91519__$1;
(statearr_91618_94243[(2)] = inst_91307);

(statearr_91618_94243[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91521 === (28))){
var inst_91494 = (state_91519[(25)]);
var inst_91490 = (state_91519[(26)]);
var inst_91482 = (state_91519[(27)]);
var inst_91499 = (state_91519[(2)]);
var inst_91500 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(inst_91490);
var inst_91501 = [inst_91499,inst_91482,inst_91500];
var inst_91502 = cljs.core.PersistentHashMap.fromArrays(inst_91494,inst_91501);
var inst_91503 = cljs.test.do_report(inst_91502);
var _ = (function (){var statearr_91621 = state_91519;
(statearr_91621[(4)] = cljs.core.rest((state_91519[(4)])));

return statearr_91621;
})();
var state_91519__$1 = state_91519;
var statearr_91622_94246 = state_91519__$1;
(statearr_91622_94246[(2)] = inst_91503);

(statearr_91622_94246[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91521 === (25))){
var inst_91465 = (state_91519[(2)]);
var inst_91466 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_91468 = [new cljs.core.Keyword(null,"candidate","candidate",-940308314),new cljs.core.Keyword(null,"type","type",1174270348)];
var inst_91469 = ["foo",new cljs.core.Keyword(null,"local","local",-1497766724)];
var inst_91470 = cljs.core.PersistentHashMap.fromArrays(inst_91468,inst_91469);
var inst_91471 = [new cljs.core.Keyword(null,"candidate","candidate",-940308314),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ns","ns",441598760)];
var inst_91472 = ["for",new cljs.core.Keyword(null,"macro","macro",-867863404),"cljs.core"];
var inst_91473 = cljs.core.PersistentHashMap.fromArrays(inst_91471,inst_91472);
var inst_91474 = [new cljs.core.Keyword(null,"candidate","candidate",-940308314),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ns","ns",441598760)];
var inst_91475 = ["force",new cljs.core.Keyword(null,"function","function",-2127255473),"cljs.core"];
var inst_91476 = cljs.core.PersistentHashMap.fromArrays(inst_91474,inst_91475);
var inst_91477 = [inst_91470,inst_91473,inst_91476];
var inst_91478 = (new cljs.core.PersistentVector(null,3,(5),inst_91466,inst_91477,null));
var inst_91479 = matcher_combinators.matchers.embeds(inst_91478);
var inst_91480 = cljs.core.list(new cljs.core.Symbol("async","<!","async/<!",-1308982001,null),new cljs.core.Symbol(null,"cljs","cljs",-1162018140,null));
var inst_91482 = cljs.core.list(new cljs.core.Symbol(null,"embeds","embeds",-1821086689,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"candidate","candidate",-940308314),"foo",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"local","local",-1497766724)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"candidate","candidate",-940308314),"for",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"macro","macro",-867863404),new cljs.core.Keyword(null,"ns","ns",441598760),"cljs.core"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"candidate","candidate",-940308314),"force",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"function","function",-2127255473),new cljs.core.Keyword(null,"ns","ns",441598760),"cljs.core"], null)], null));
var inst_91483 = matcher_combinators.core.match(inst_91479,inst_91465);
var inst_91487 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_91465], 0));
var inst_91488 = new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(inst_91483);
var inst_91489 = matcher_combinators.printer.as_string(inst_91488);
var inst_91490 = [inst_91487,"\n\nMismatch:\n",inst_91489].join('');
var inst_91491 = new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(inst_91483);
var inst_91492 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),inst_91491);
var inst_91494 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363)];
var state_91519__$1 = (function (){var statearr_91627 = state_91519;
(statearr_91627[(25)] = inst_91494);

(statearr_91627[(26)] = inst_91490);

(statearr_91627[(28)] = inst_91480);

(statearr_91627[(27)] = inst_91482);

return statearr_91627;
})();
if(inst_91492){
var statearr_91629_94250 = state_91519__$1;
(statearr_91629_94250[(1)] = (26));

} else {
var statearr_91630_94251 = state_91519__$1;
(statearr_91630_94251[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91521 === (17))){
var inst_91243 = (state_91519[(13)]);
var inst_91509 = (state_91519[(2)]);
var inst_91510 = cljs.core.deref(inst_91243);
var state_91519__$1 = (function (){var statearr_91631 = state_91519;
(statearr_91631[(29)] = inst_91509);

return statearr_91631;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_91519__$1,inst_91510);
} else {
if((state_val_91521 === (3))){
var inst_91299 = (state_91519[(12)]);
var inst_91295 = (state_91519[(2)]);
var inst_91296 = cljs.core.deref(inst_91295);
var inst_91297 = new cljs.core.Keyword("editor","features","editor/features",1302258665).cljs$core$IFn$_invoke$arity$1(inst_91296);
var inst_91299__$1 = cljs.core.__destructure_map(inst_91297);
var inst_91300 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_91299__$1,new cljs.core.Keyword(null,"autocomplete","autocomplete",1041133913));
var inst_91302 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_91303 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_91304 = (new cljs.core.PersistentVector(null,1,(5),inst_91302,inst_91303,null));
var inst_91305 = cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(inst_91304,cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Clojure"], 0));
var state_91519__$1 = (function (){var statearr_91635 = state_91519;
(statearr_91635[(8)] = inst_91300);

(statearr_91635[(30)] = inst_91305);

(statearr_91635[(12)] = inst_91299__$1);

return statearr_91635;
})();
var statearr_91636_94252 = state_91519__$1;
(statearr_91636_94252[(2)] = null);

(statearr_91636_94252[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91521 === (12))){
var inst_91357 = (state_91519[(2)]);
var inst_91358 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_91360 = [new cljs.core.Keyword(null,"candidate","candidate",-940308314),new cljs.core.Keyword(null,"type","type",1174270348)];
var inst_91361 = ["foo",new cljs.core.Keyword(null,"local","local",-1497766724)];
var inst_91362 = cljs.core.PersistentHashMap.fromArrays(inst_91360,inst_91361);
var inst_91363 = [new cljs.core.Keyword(null,"candidate","candidate",-940308314),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ns","ns",441598760)];
var inst_91364 = ["for",new cljs.core.Keyword(null,"macro","macro",-867863404),"clojure.core"];
var inst_91365 = cljs.core.PersistentHashMap.fromArrays(inst_91363,inst_91364);
var inst_91367 = [new cljs.core.Keyword(null,"candidate","candidate",-940308314),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ns","ns",441598760)];
var inst_91369 = ["force",new cljs.core.Keyword(null,"function","function",-2127255473),"clojure.core"];
var inst_91370 = cljs.core.PersistentHashMap.fromArrays(inst_91367,inst_91369);
var inst_91371 = [new cljs.core.Keyword(null,"candidate","candidate",-940308314),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ns","ns",441598760)];
var inst_91372 = ["format",new cljs.core.Keyword(null,"function","function",-2127255473),"clojure.core"];
var inst_91373 = cljs.core.PersistentHashMap.fromArrays(inst_91371,inst_91372);
var inst_91374 = [inst_91362,inst_91365,inst_91370,inst_91373];
var inst_91375 = (new cljs.core.PersistentVector(null,4,(5),inst_91358,inst_91374,null));
var inst_91376 = matcher_combinators.matchers.embeds(inst_91375);
var inst_91377 = cljs.core.list(new cljs.core.Symbol("async","<!","async/<!",-1308982001,null),new cljs.core.Symbol(null,"clj","clj",980036099,null));
var inst_91378 = cljs.core.list(new cljs.core.Symbol(null,"embeds","embeds",-1821086689,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"candidate","candidate",-940308314),"foo",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"local","local",-1497766724)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"candidate","candidate",-940308314),"for",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"macro","macro",-867863404),new cljs.core.Keyword(null,"ns","ns",441598760),"clojure.core"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"candidate","candidate",-940308314),"force",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"function","function",-2127255473),new cljs.core.Keyword(null,"ns","ns",441598760),"clojure.core"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"candidate","candidate",-940308314),"format",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"function","function",-2127255473),new cljs.core.Keyword(null,"ns","ns",441598760),"clojure.core"], null)], null));
var inst_91379 = matcher_combinators.core.match(inst_91376,inst_91357);
var inst_91380 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_91357], 0));
var inst_91381 = new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(inst_91379);
var inst_91382 = matcher_combinators.printer.as_string(inst_91381);
var inst_91383 = [inst_91380,"\n\nMismatch:\n",inst_91382].join('');
var inst_91384 = new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(inst_91379);
var inst_91385 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),inst_91384);
var inst_91387 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363)];
var state_91519__$1 = (function (){var statearr_91648 = state_91519;
(statearr_91648[(21)] = inst_91383);

(statearr_91648[(22)] = inst_91378);

(statearr_91648[(31)] = inst_91377);

(statearr_91648[(23)] = inst_91387);

return statearr_91648;
})();
if(inst_91385){
var statearr_91687_94326 = state_91519__$1;
(statearr_91687_94326[(1)] = (13));

} else {
var statearr_91688_94327 = state_91519__$1;
(statearr_91688_94327[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91521 === (2))){
var inst_91265 = (state_91519[(10)]);
var inst_91292 = (state_91519[(14)]);
var inst_91289 = (state_91519[(2)]);
var inst_91290 = cljs.core.deref(inst_91289);
var inst_91291 = new cljs.core.Keyword("editor","commands","editor/commands",1134888579).cljs$core$IFn$_invoke$arity$1(inst_91290);
var inst_91292__$1 = cljs.core.__destructure_map(inst_91291);
var inst_91293 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_91292__$1,new cljs.core.Keyword(null,"connect-embedded","connect-embedded",610098730));
var state_91519__$1 = (function (){var statearr_91697 = state_91519;
(statearr_91697[(9)] = inst_91293);

(statearr_91697[(14)] = inst_91292__$1);

return statearr_91697;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_91519__$1,(3),inst_91265);
} else {
if((state_val_91521 === (23))){
var inst_91432 = (state_91519[(2)]);
var inst_91433 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_91434 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_91435 = [new cljs.core.Keyword(null,"candidate","candidate",-940308314),new cljs.core.Keyword(null,"type","type",1174270348)];
var inst_91437 = ["foo",new cljs.core.Keyword(null,"local","local",-1497766724)];
var inst_91438 = cljs.core.PersistentHashMap.fromArrays(inst_91435,inst_91437);
var inst_91440 = [new cljs.core.Keyword(null,"candidate","candidate",-940308314),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ns","ns",441598760)];
var inst_91441 = ["for",new cljs.core.Keyword(null,"macro","macro",-867863404),"cljs.core"];
var inst_91442 = cljs.core.PersistentHashMap.fromArrays(inst_91440,inst_91441);
var inst_91443 = [new cljs.core.Keyword(null,"candidate","candidate",-940308314),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ns","ns",441598760)];
var inst_91444 = ["force",new cljs.core.Keyword(null,"function","function",-2127255473),"cljs.core"];
var inst_91445 = cljs.core.PersistentHashMap.fromArrays(inst_91443,inst_91444);
var inst_91446 = [inst_91438,inst_91442,inst_91445];
var inst_91447 = (new cljs.core.PersistentVector(null,3,(5),inst_91434,inst_91446,null));
var inst_91448 = matcher_combinators.matchers.embeds(inst_91447);
var inst_91449 = check.core.normalize_error(inst_91432);
var inst_91450 = cljs.core.list(new cljs.core.Symbol("async","<!","async/<!",-1308982001,null),new cljs.core.Symbol(null,"cljs","cljs",-1162018140,null));
var inst_91451 = new cljs.core.Symbol(null,"=>","=>",-813269641,null);
var inst_91452 = cljs.core.list(new cljs.core.Symbol(null,"embeds","embeds",-1821086689,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"candidate","candidate",-940308314),"foo",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"local","local",-1497766724)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"candidate","candidate",-940308314),"for",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"macro","macro",-867863404),new cljs.core.Keyword(null,"ns","ns",441598760),"cljs.core"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"candidate","candidate",-940308314),"force",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"function","function",-2127255473),new cljs.core.Keyword(null,"ns","ns",441598760),"cljs.core"], null)], null));
var inst_91453 = ["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_91450)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_91451)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_91452)].join('');
var inst_91454 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_91448,inst_91449,inst_91453];
var inst_91455 = cljs.core.PersistentHashMap.fromArrays(inst_91433,inst_91454);
var inst_91456 = cljs.test.do_report(inst_91455);
var state_91519__$1 = state_91519;
var statearr_91706_94382 = state_91519__$1;
(statearr_91706_94382[(2)] = inst_91456);

(statearr_91706_94382[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91521 === (19))){
var _ = (function (){var statearr_91708 = state_91519;
(statearr_91708[(4)] = cljs.core.rest((state_91519[(4)])));

return statearr_91708;
})();
var state_91519__$1 = state_91519;
var ex91693 = (state_91519__$1[(2)]);
var statearr_91710_94395 = state_91519__$1;
(statearr_91710_94395[(5)] = ex91693);


throw ex91693;


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91521 === (11))){
var _ = (function (){var statearr_91711 = state_91519;
(statearr_91711[(4)] = cljs.core.rest((state_91519[(4)])));

return statearr_91711;
})();
var state_91519__$1 = state_91519;
var ex91699 = (state_91519__$1[(2)]);
var statearr_91712_94401 = state_91519__$1;
(statearr_91712_94401[(5)] = ex91699);


var statearr_91713_94403 = state_91519__$1;
(statearr_91713_94403[(1)] = (10));

(statearr_91713_94403[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91521 === (9))){
var inst_91398 = (state_91519[(2)]);
var _ = (function (){var statearr_91715 = state_91519;
(statearr_91715[(4)] = cljs.core.rest((state_91519[(4)])));

return statearr_91715;
})();
var state_91519__$1 = state_91519;
var statearr_91717_94413 = state_91519__$1;
(statearr_91717_94413[(2)] = inst_91398);

(statearr_91717_94413[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91521 === (5))){
var inst_91401 = (state_91519[(2)]);
var inst_91402 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_91404 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_91405 = (new cljs.core.PersistentVector(null,1,(5),inst_91402,inst_91404,null));
var inst_91406 = cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(inst_91405,cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["ClojureScript"], 0));
var state_91519__$1 = (function (){var statearr_91720 = state_91519;
(statearr_91720[(32)] = inst_91401);

(statearr_91720[(33)] = inst_91406);

return statearr_91720;
})();
var statearr_91724_94438 = state_91519__$1;
(statearr_91724_94438[(2)] = null);

(statearr_91724_94438[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91521 === (14))){
var state_91519__$1 = state_91519;
var statearr_91726_94443 = state_91519__$1;
(statearr_91726_94443[(2)] = new cljs.core.Keyword(null,"fail","fail",1706214930));

(statearr_91726_94443[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91521 === (26))){
var state_91519__$1 = state_91519;
var statearr_91729_94450 = state_91519__$1;
(statearr_91729_94450[(2)] = new cljs.core.Keyword(null,"pass","pass",1574159993));

(statearr_91729_94450[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91521 === (16))){
var inst_91266 = (state_91519[(7)]);
var inst_91300 = (state_91519[(8)]);
var inst_91293 = (state_91519[(9)]);
var inst_91265 = (state_91519[(10)]);
var inst_91264 = (state_91519[(11)]);
var inst_91299 = (state_91519[(12)]);
var inst_91243 = (state_91519[(13)]);
var inst_91292 = (state_91519[(14)]);
var inst_91287 = (state_91519[(15)]);
var inst_91267 = (state_91519[(16)]);
var _ = (function (){var statearr_91732 = state_91519;
(statearr_91732[(4)] = cljs.core.cons((18),(state_91519[(4)])));

return statearr_91732;
})();
var ___$1 = (function (){var statearr_91734 = state_91519;
(statearr_91734[(4)] = cljs.core.cons((19),(state_91519[(4)])));

return statearr_91734;
})();
var inst_91420 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inst_91264,cljs.core.assoc,new cljs.core.Keyword(null,"filename","filename",-1428840783),"foo.cljs");
var inst_91421 = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var inst_91422 = new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(inst_91293);
var inst_91423 = (inst_91422.cljs$core$IFn$_invoke$arity$0 ? inst_91422.cljs$core$IFn$_invoke$arity$0() : inst_91422.call(null));
var inst_91424 = (function (){var res = inst_91265;
var autocomplete = inst_91300;
var clj = inst_91266;
var cljs__$1 = inst_91267;
var map__91248 = inst_91292;
var data = inst_91264;
var mark_as_done__53963__auto__ = inst_91243;
var map__91249 = inst_91299;
var ___$2 = inst_91287;
var connect_embedded = inst_91293;
var c = inst_91421;
return (function (p1__91227_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,p1__91227_SHARP_);
});
})();
var inst_91425 = inst_91423.then(inst_91424);
var state_91519__$1 = (function (){var statearr_91736 = state_91519;
(statearr_91736[(34)] = inst_91420);

(statearr_91736[(35)] = inst_91425);

return statearr_91736;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_91519__$1,(20),inst_91421);
} else {
if((state_val_91521 === (10))){
var inst_91324 = (state_91519[(2)]);
var inst_91325 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_91326 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_91327 = [new cljs.core.Keyword(null,"candidate","candidate",-940308314),new cljs.core.Keyword(null,"type","type",1174270348)];
var inst_91328 = ["foo",new cljs.core.Keyword(null,"local","local",-1497766724)];
var inst_91329 = cljs.core.PersistentHashMap.fromArrays(inst_91327,inst_91328);
var inst_91330 = [new cljs.core.Keyword(null,"candidate","candidate",-940308314),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ns","ns",441598760)];
var inst_91331 = ["for",new cljs.core.Keyword(null,"macro","macro",-867863404),"clojure.core"];
var inst_91332 = cljs.core.PersistentHashMap.fromArrays(inst_91330,inst_91331);
var inst_91333 = [new cljs.core.Keyword(null,"candidate","candidate",-940308314),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ns","ns",441598760)];
var inst_91334 = ["force",new cljs.core.Keyword(null,"function","function",-2127255473),"clojure.core"];
var inst_91335 = cljs.core.PersistentHashMap.fromArrays(inst_91333,inst_91334);
var inst_91336 = [new cljs.core.Keyword(null,"candidate","candidate",-940308314),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ns","ns",441598760)];
var inst_91337 = ["format",new cljs.core.Keyword(null,"function","function",-2127255473),"clojure.core"];
var inst_91338 = cljs.core.PersistentHashMap.fromArrays(inst_91336,inst_91337);
var inst_91339 = [inst_91329,inst_91332,inst_91335,inst_91338];
var inst_91340 = (new cljs.core.PersistentVector(null,4,(5),inst_91326,inst_91339,null));
var inst_91341 = matcher_combinators.matchers.embeds(inst_91340);
var inst_91342 = check.core.normalize_error(inst_91324);
var inst_91344 = cljs.core.list(new cljs.core.Symbol("async","<!","async/<!",-1308982001,null),new cljs.core.Symbol(null,"clj","clj",980036099,null));
var inst_91345 = new cljs.core.Symbol(null,"=>","=>",-813269641,null);
var inst_91346 = cljs.core.list(new cljs.core.Symbol(null,"embeds","embeds",-1821086689,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"candidate","candidate",-940308314),"foo",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"local","local",-1497766724)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"candidate","candidate",-940308314),"for",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"macro","macro",-867863404),new cljs.core.Keyword(null,"ns","ns",441598760),"clojure.core"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"candidate","candidate",-940308314),"force",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"function","function",-2127255473),new cljs.core.Keyword(null,"ns","ns",441598760),"clojure.core"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"candidate","candidate",-940308314),"format",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"function","function",-2127255473),new cljs.core.Keyword(null,"ns","ns",441598760),"clojure.core"], null)], null));
var inst_91347 = ["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_91344)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_91345)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_91346)].join('');
var inst_91348 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_91341,inst_91342,inst_91347];
var inst_91349 = cljs.core.PersistentHashMap.fromArrays(inst_91325,inst_91348);
var inst_91350 = cljs.test.do_report(inst_91349);
var state_91519__$1 = state_91519;
var statearr_91741_94545 = state_91519__$1;
(statearr_91741_94545[(2)] = inst_91350);

(statearr_91741_94545[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91521 === (18))){
var _ = (function (){var statearr_91742 = state_91519;
(statearr_91742[(4)] = cljs.core.rest((state_91519[(4)])));

return statearr_91742;
})();
var inst_91408 = (state_91519[(2)]);
var inst_91409 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_91410 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_91411 = (new cljs.core.PersistentVector(null,1,(5),inst_91409,inst_91410,null));
var inst_91412 = cljs.test.update_current_env_BANG_(inst_91411,cljs.core.rest);
var ___$1 = (function (){var temp__5753__auto__ = (state_91519[(5)]);
if(cljs.core.truth_(temp__5753__auto__)){
var e__34184__auto__ = temp__5753__auto__;
throw e__34184__auto__;
} else {
return null;
}
})();
var state_91519__$1 = (function (){var statearr_91744 = state_91519;
(statearr_91744[(36)] = inst_91412);

return statearr_91744;
})();
var statearr_91745_94562 = state_91519__$1;
(statearr_91745_94562[(2)] = inst_91408);

(statearr_91745_94562[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91521 === (8))){
var inst_91266 = (state_91519[(7)]);
var _ = (function (){var statearr_91748 = state_91519;
(statearr_91748[(4)] = cljs.core.cons((11),(state_91519[(4)])));

return statearr_91748;
})();
var state_91519__$1 = state_91519;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_91519__$1,(12),inst_91266);
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
});
return (function() {
var repl_tooling$editor_integration$autocomplete_test$state_machine__34940__auto__ = null;
var repl_tooling$editor_integration$autocomplete_test$state_machine__34940__auto____0 = (function (){
var statearr_91749 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_91749[(0)] = repl_tooling$editor_integration$autocomplete_test$state_machine__34940__auto__);

(statearr_91749[(1)] = (1));

return statearr_91749;
});
var repl_tooling$editor_integration$autocomplete_test$state_machine__34940__auto____1 = (function (state_91519){
while(true){
var ret_value__34941__auto__ = (function (){try{while(true){
var result__34942__auto__ = switch__34939__auto__(state_91519);
if(cljs.core.keyword_identical_QMARK_(result__34942__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34942__auto__;
}
break;
}
}catch (e91752){var ex__34943__auto__ = e91752;
var statearr_91754_94592 = state_91519;
(statearr_91754_94592[(2)] = ex__34943__auto__);


if(cljs.core.seq((state_91519[(4)]))){
var statearr_91758_94606 = state_91519;
(statearr_91758_94606[(1)] = cljs.core.first((state_91519[(4)])));

} else {
throw ex__34943__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34941__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__94613 = state_91519;
state_91519 = G__94613;
continue;
} else {
return ret_value__34941__auto__;
}
break;
}
});
repl_tooling$editor_integration$autocomplete_test$state_machine__34940__auto__ = function(state_91519){
switch(arguments.length){
case 0:
return repl_tooling$editor_integration$autocomplete_test$state_machine__34940__auto____0.call(this);
case 1:
return repl_tooling$editor_integration$autocomplete_test$state_machine__34940__auto____1.call(this,state_91519);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
repl_tooling$editor_integration$autocomplete_test$state_machine__34940__auto__.cljs$core$IFn$_invoke$arity$0 = repl_tooling$editor_integration$autocomplete_test$state_machine__34940__auto____0;
repl_tooling$editor_integration$autocomplete_test$state_machine__34940__auto__.cljs$core$IFn$_invoke$arity$1 = repl_tooling$editor_integration$autocomplete_test$state_machine__34940__auto____1;
return repl_tooling$editor_integration$autocomplete_test$state_machine__34940__auto__;
})()
})();
var state__35943__auto__ = (function (){var statearr_91761 = f__35942__auto__();
(statearr_91761[(6)] = c__35941__auto__);

return statearr_91761;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35943__auto__);
}));

return c__35941__auto__;
}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}}));

(repl_tooling.editor_integration.autocomplete_test.t_repl_tooling$editor_integration$autocomplete_test91232.prototype.apply = (function (self__,args91237){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args91237)));
}));

(repl_tooling.editor_integration.autocomplete_test.t_repl_tooling$editor_integration$autocomplete_test91232.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done__53962__auto__){
var self__ = this;
var ___9200__auto__ = this;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["autocomplete"], 0));

try{var c__35941__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35942__auto__ = (function (){var switch__34939__auto__ = (function (state_92052){
var state_val_92054 = (state_92052[(1)]);
if((state_val_92054 === (7))){
var _ = (function (){var statearr_92057 = state_92052;
(statearr_92057[(4)] = cljs.core.rest((state_92052[(4)])));

return statearr_92057;
})();
var state_92052__$1 = state_92052;
var ex92055 = (state_92052__$1[(2)]);
var statearr_92058_94648 = state_92052__$1;
(statearr_92058_94648[(5)] = ex92055);


throw ex92055;


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92054 === (20))){
var inst_91773 = (state_92052[(7)]);
var inst_91819 = (state_92052[(8)]);
var inst_91827 = (state_92052[(9)]);
var inst_91794 = (state_92052[(10)]);
var inst_91795 = (state_92052[(11)]);
var inst_91826 = (state_92052[(12)]);
var inst_91820 = (state_92052[(13)]);
var inst_91813 = (state_92052[(14)]);
var inst_91793 = (state_92052[(15)]);
var inst_91792 = (state_92052[(16)]);
var inst_91959 = (state_92052[(2)]);
var inst_91960 = (inst_91827.cljs$core$IFn$_invoke$arity$0 ? inst_91827.cljs$core$IFn$_invoke$arity$0() : inst_91827.call(null));
var inst_91961 = (function (){var res = inst_91793;
var autocomplete = inst_91827;
var clj = inst_91794;
var cljs__$1 = inst_91795;
var data = inst_91792;
var mark_as_done__53963__auto__ = inst_91773;
var _ = inst_91813;
var connect_embedded = inst_91820;
var map__91776 = inst_91819;
var map__91777 = inst_91826;
return (function (p1__91228_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(cljs__$1,p1__91228_SHARP_);
});
})();
var inst_91962 = inst_91960.then(inst_91961);
var state_92052__$1 = (function (){var statearr_92062 = state_92052;
(statearr_92062[(17)] = inst_91962);

(statearr_92062[(18)] = inst_91959);

return statearr_92062;
})();
var statearr_92063_94670 = state_92052__$1;
(statearr_92063_94670[(2)] = null);

(statearr_92063_94670[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92054 === (27))){
var state_92052__$1 = state_92052;
var statearr_92067_94680 = state_92052__$1;
(statearr_92067_94680[(2)] = new cljs.core.Keyword(null,"fail","fail",1706214930));

(statearr_92067_94680[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92054 === (1))){
var inst_91773 = (state_92052[(7)]);
var inst_91794 = (state_92052[(10)]);
var inst_91795 = (state_92052[(11)]);
var inst_91793 = (state_92052[(15)]);
var inst_91792 = (state_92052[(16)]);
var inst_91772 = (function (){return (function (){
repl_tooling.editor_integration.connection.disconnect_BANG_();

return (done__53962__auto__.cljs$core$IFn$_invoke$arity$0 ? done__53962__auto__.cljs$core$IFn$_invoke$arity$0() : done__53962__auto__.call(null));
});
})();
var inst_91773__$1 = (new cljs.core.Delay(inst_91772,null));
var inst_91774 = (function (){var mark_as_done__53963__auto__ = inst_91773__$1;
return (function (){
if(cljs.core.realized_QMARK_(mark_as_done__53963__auto__)){
return null;
} else {
try{var value__9156__auto___94693 = (function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Async test error - not finalized",cljs.core.PersistentArrayMap.EMPTY)})();
if(cljs.core.truth_(value__9156__auto___94693)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"pass","pass",1574159993),null,null,cljs.core.list(new cljs.core.Symbol(null,"throw","throw",595905694,null),cljs.core.list(new cljs.core.Symbol("clojure.core","ex-info","clojure.core/ex-info",-504237117,null),"Async test error - not finalized",cljs.core.PersistentArrayMap.EMPTY)),null,value__9156__auto___94693,null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"fail","fail",1706214930),null,null,cljs.core.list(new cljs.core.Symbol(null,"throw","throw",595905694,null),cljs.core.list(new cljs.core.Symbol("clojure.core","ex-info","clojure.core/ex-info",-504237117,null),"Async test error - not finalized",cljs.core.PersistentArrayMap.EMPTY)),null,value__9156__auto___94693,null]));
}

}catch (e92071){var t__9189__auto___94696 = e92071;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol(null,"throw","throw",595905694,null),cljs.core.list(new cljs.core.Symbol("clojure.core","ex-info","clojure.core/ex-info",-504237117,null),"Async test error - not finalized",cljs.core.PersistentArrayMap.EMPTY)),null,t__9189__auto___94696,null]));
}
return cljs.core.deref(mark_as_done__53963__auto__);
}
});
})();
var inst_91775 = setTimeout(inst_91774,(3000));
var inst_91779 = [new cljs.core.Keyword(null,"contents","contents",-1567174023),new cljs.core.Keyword(null,"filename","filename",-1428840783),new cljs.core.Keyword(null,"range","range",1639692286)];
var inst_91780 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_91782 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_91783 = [(1),(19)];
var inst_91784 = (new cljs.core.PersistentVector(null,2,(5),inst_91782,inst_91783,null));
var inst_91785 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_91786 = [(1),(19)];
var inst_91787 = (new cljs.core.PersistentVector(null,2,(5),inst_91785,inst_91786,null));
var inst_91788 = [inst_91784,inst_91787];
var inst_91789 = (new cljs.core.PersistentVector(null,2,(5),inst_91780,inst_91788,null));
var inst_91790 = ["(let [foa 10] foa)\n(let [foo 10] (+ fo))","foo.clj",inst_91789];
var inst_91791 = cljs.core.PersistentHashMap.fromArrays(inst_91779,inst_91790);
var inst_91792__$1 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(inst_91791);
var inst_91793__$1 = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var inst_91794__$1 = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var inst_91795__$1 = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var inst_91796 = [new cljs.core.Keyword(null,"editor-data","editor-data",-2084300305),new cljs.core.Keyword(null,"prompt","prompt",-78109487),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),new cljs.core.Keyword(null,"notify","notify",-1256867814),new cljs.core.Keyword(null,"get-config","get-config",1800808901)];
var inst_91797 = (function (){var mark_as_done__53963__auto__ = inst_91773__$1;
var data = inst_91792__$1;
var res = inst_91793__$1;
var clj = inst_91794__$1;
var cljs__$1 = inst_91795__$1;
return (function (){
return cljs.core.deref(data);
});
})();
var inst_91798 = Promise.resolve("fixture");
var inst_91799 = cljs.core.constantly(inst_91798);
var inst_91800 = [new cljs.core.Keyword(null,"eval-mode","eval-mode",1105308847),new cljs.core.Keyword(null,"project-paths","project-paths",-1637469806)];
var inst_91801 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_91802 = process.cwd();
var inst_91803 = [inst_91802];
var inst_91804 = (new cljs.core.PersistentVector(null,1,(5),inst_91801,inst_91803,null));
var inst_91805 = [new cljs.core.Keyword(null,"prefer-cljs","prefer-cljs",1599484843),inst_91804];
var inst_91806 = cljs.core.PersistentHashMap.fromArrays(inst_91800,inst_91805);
var inst_91807 = cljs.core.constantly(inst_91806);
var inst_91808 = [inst_91797,inst_91799,cljs.core.identity,cljs.core.identity,inst_91807];
var inst_91809 = cljs.core.PersistentHashMap.fromArrays(inst_91796,inst_91808);
var inst_91810 = repl_tooling.editor_integration.connection.connect_BANG_("localhost",(2233),inst_91809);
var inst_91812 = (function (){var mark_as_done__53963__auto__ = inst_91773__$1;
var data = inst_91792__$1;
var res = inst_91793__$1;
var clj = inst_91794__$1;
var cljs__$1 = inst_91795__$1;
return (function (p1__91225_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(res,p1__91225_SHARP_);
});
})();
var inst_91813 = inst_91810.then(inst_91812);
var state_92052__$1 = (function (){var statearr_92080 = state_92052;
(statearr_92080[(7)] = inst_91773__$1);

(statearr_92080[(10)] = inst_91794__$1);

(statearr_92080[(11)] = inst_91795__$1);

(statearr_92080[(14)] = inst_91813);

(statearr_92080[(19)] = inst_91775);

(statearr_92080[(15)] = inst_91793__$1);

(statearr_92080[(16)] = inst_91792__$1);

return statearr_92080;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_92052__$1,(2),inst_91793__$1);
} else {
if((state_val_92054 === (24))){
var _ = (function (){var statearr_92084 = state_92052;
(statearr_92084[(4)] = cljs.core.rest((state_92052[(4)])));

return statearr_92084;
})();
var state_92052__$1 = state_92052;
var ex92065 = (state_92052__$1[(2)]);
var statearr_92085_94705 = state_92052__$1;
(statearr_92085_94705[(5)] = ex92065);


var statearr_92086_94706 = state_92052__$1;
(statearr_92086_94706[(1)] = (23));

(statearr_92086_94706[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92054 === (4))){
var inst_91773 = (state_92052[(7)]);
var inst_91819 = (state_92052[(8)]);
var inst_91827 = (state_92052[(9)]);
var inst_91794 = (state_92052[(10)]);
var inst_91795 = (state_92052[(11)]);
var inst_91826 = (state_92052[(12)]);
var inst_91820 = (state_92052[(13)]);
var inst_91813 = (state_92052[(14)]);
var inst_91793 = (state_92052[(15)]);
var inst_91792 = (state_92052[(16)]);
var _ = (function (){var statearr_92089 = state_92052;
(statearr_92089[(4)] = cljs.core.cons((6),(state_92052[(4)])));

return statearr_92089;
})();
var ___$1 = (function (){var statearr_92090 = state_92052;
(statearr_92090[(4)] = cljs.core.cons((7),(state_92052[(4)])));

return statearr_92090;
})();
var inst_91848 = (inst_91827.cljs$core$IFn$_invoke$arity$0 ? inst_91827.cljs$core$IFn$_invoke$arity$0() : inst_91827.call(null));
var inst_91849 = (function (){var res = inst_91793;
var autocomplete = inst_91827;
var clj = inst_91794;
var cljs__$1 = inst_91795;
var data = inst_91792;
var mark_as_done__53963__auto__ = inst_91773;
var ___$2 = inst_91813;
var connect_embedded = inst_91820;
var map__91776 = inst_91819;
var map__91777 = inst_91826;
return (function (p1__91226_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(clj,p1__91226_SHARP_);
});
})();
var inst_91850 = inst_91848.then(inst_91849);
var state_92052__$1 = (function (){var statearr_92094 = state_92052;
(statearr_92094[(20)] = inst_91850);

return statearr_92094;
})();
var statearr_92096_94708 = state_92052__$1;
(statearr_92096_94708[(2)] = null);

(statearr_92096_94708[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92054 === (15))){
var inst_91915 = (state_92052[(21)]);
var inst_91906 = (state_92052[(22)]);
var inst_91912 = (state_92052[(23)]);
var inst_91919 = (state_92052[(2)]);
var inst_91920 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(inst_91912);
var inst_91921 = [inst_91919,inst_91906,inst_91920];
var inst_91922 = cljs.core.PersistentHashMap.fromArrays(inst_91915,inst_91921);
var inst_91923 = cljs.test.do_report(inst_91922);
var _ = (function (){var statearr_92104 = state_92052;
(statearr_92104[(4)] = cljs.core.rest((state_92052[(4)])));

return statearr_92104;
})();
var state_92052__$1 = state_92052;
var statearr_92106_94709 = state_92052__$1;
(statearr_92106_94709[(2)] = inst_91923);

(statearr_92106_94709[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92054 === (21))){
var inst_91795 = (state_92052[(11)]);
var _ = (function (){var statearr_92108 = state_92052;
(statearr_92108[(4)] = cljs.core.cons((24),(state_92052[(4)])));

return statearr_92108;
})();
var state_92052__$1 = state_92052;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_92052__$1,(25),inst_91795);
} else {
if((state_val_92054 === (13))){
var state_92052__$1 = state_92052;
var statearr_92109_94712 = state_92052__$1;
(statearr_92109_94712[(2)] = new cljs.core.Keyword(null,"pass","pass",1574159993));

(statearr_92109_94712[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92054 === (22))){
var inst_92041 = (state_92052[(2)]);
var _ = (function (){var statearr_92115 = state_92052;
(statearr_92115[(4)] = cljs.core.rest((state_92052[(4)])));

return statearr_92115;
})();
var state_92052__$1 = state_92052;
var statearr_92117_94713 = state_92052__$1;
(statearr_92117_94713[(2)] = inst_92041);

(statearr_92117_94713[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92054 === (6))){
var _ = (function (){var statearr_92121 = state_92052;
(statearr_92121[(4)] = cljs.core.rest((state_92052[(4)])));

return statearr_92121;
})();
var inst_91834 = (state_92052[(2)]);
var inst_91836 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_91837 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_91838 = (new cljs.core.PersistentVector(null,1,(5),inst_91836,inst_91837,null));
var inst_91839 = cljs.test.update_current_env_BANG_(inst_91838,cljs.core.rest);
var ___$1 = (function (){var temp__5753__auto__ = (state_92052[(5)]);
if(cljs.core.truth_(temp__5753__auto__)){
var e__34184__auto__ = temp__5753__auto__;
throw e__34184__auto__;
} else {
return null;
}
})();
var state_92052__$1 = (function (){var statearr_92127 = state_92052;
(statearr_92127[(24)] = inst_91839);

return statearr_92127;
})();
var statearr_92128_94716 = state_92052__$1;
(statearr_92128_94716[(2)] = inst_91834);

(statearr_92128_94716[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92054 === (28))){
var inst_92017 = (state_92052[(25)]);
var inst_92029 = (state_92052[(26)]);
var inst_92024 = (state_92052[(27)]);
var inst_92034 = (state_92052[(2)]);
var inst_92035 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(inst_92024);
var inst_92036 = [inst_92034,inst_92017,inst_92035];
var inst_92037 = cljs.core.PersistentHashMap.fromArrays(inst_92029,inst_92036);
var inst_92038 = cljs.test.do_report(inst_92037);
var _ = (function (){var statearr_92134 = state_92052;
(statearr_92134[(4)] = cljs.core.rest((state_92052[(4)])));

return statearr_92134;
})();
var state_92052__$1 = state_92052;
var statearr_92135_94718 = state_92052__$1;
(statearr_92135_94718[(2)] = inst_92038);

(statearr_92135_94718[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92054 === (25))){
var inst_92000 = (state_92052[(2)]);
var inst_92002 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_92004 = [new cljs.core.Keyword(null,"candidate","candidate",-940308314),new cljs.core.Keyword(null,"type","type",1174270348)];
var inst_92005 = ["foo",new cljs.core.Keyword(null,"local","local",-1497766724)];
var inst_92006 = cljs.core.PersistentHashMap.fromArrays(inst_92004,inst_92005);
var inst_92007 = [new cljs.core.Keyword(null,"candidate","candidate",-940308314),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ns","ns",441598760)];
var inst_92008 = ["for",new cljs.core.Keyword(null,"macro","macro",-867863404),"cljs.core"];
var inst_92009 = cljs.core.PersistentHashMap.fromArrays(inst_92007,inst_92008);
var inst_92010 = [new cljs.core.Keyword(null,"candidate","candidate",-940308314),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ns","ns",441598760)];
var inst_92011 = ["force",new cljs.core.Keyword(null,"function","function",-2127255473),"cljs.core"];
var inst_92012 = cljs.core.PersistentHashMap.fromArrays(inst_92010,inst_92011);
var inst_92013 = [inst_92006,inst_92009,inst_92012];
var inst_92014 = (new cljs.core.PersistentVector(null,3,(5),inst_92002,inst_92013,null));
var inst_92015 = matcher_combinators.matchers.embeds(inst_92014);
var inst_92016 = cljs.core.list(new cljs.core.Symbol("async","<!","async/<!",-1308982001,null),new cljs.core.Symbol(null,"cljs","cljs",-1162018140,null));
var inst_92017 = cljs.core.list(new cljs.core.Symbol(null,"embeds","embeds",-1821086689,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"candidate","candidate",-940308314),"foo",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"local","local",-1497766724)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"candidate","candidate",-940308314),"for",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"macro","macro",-867863404),new cljs.core.Keyword(null,"ns","ns",441598760),"cljs.core"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"candidate","candidate",-940308314),"force",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"function","function",-2127255473),new cljs.core.Keyword(null,"ns","ns",441598760),"cljs.core"], null)], null));
var inst_92018 = matcher_combinators.core.match(inst_92015,inst_92000);
var inst_92021 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_92000], 0));
var inst_92022 = new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(inst_92018);
var inst_92023 = matcher_combinators.printer.as_string(inst_92022);
var inst_92024 = [inst_92021,"\n\nMismatch:\n",inst_92023].join('');
var inst_92025 = new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(inst_92018);
var inst_92026 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),inst_92025);
var inst_92029 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363)];
var state_92052__$1 = (function (){var statearr_92147 = state_92052;
(statearr_92147[(28)] = inst_92016);

(statearr_92147[(25)] = inst_92017);

(statearr_92147[(26)] = inst_92029);

(statearr_92147[(27)] = inst_92024);

return statearr_92147;
})();
if(inst_92026){
var statearr_92149_94720 = state_92052__$1;
(statearr_92149_94720[(1)] = (26));

} else {
var statearr_92150_94721 = state_92052__$1;
(statearr_92150_94721[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92054 === (17))){
var inst_91773 = (state_92052[(7)]);
var inst_92044 = (state_92052[(2)]);
var inst_92045 = cljs.core.deref(inst_91773);
var state_92052__$1 = (function (){var statearr_92154 = state_92052;
(statearr_92154[(29)] = inst_92044);

return statearr_92154;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_92052__$1,inst_92045);
} else {
if((state_val_92054 === (3))){
var inst_91826 = (state_92052[(12)]);
var inst_91823 = (state_92052[(2)]);
var inst_91824 = cljs.core.deref(inst_91823);
var inst_91825 = new cljs.core.Keyword("editor","features","editor/features",1302258665).cljs$core$IFn$_invoke$arity$1(inst_91824);
var inst_91826__$1 = cljs.core.__destructure_map(inst_91825);
var inst_91827 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_91826__$1,new cljs.core.Keyword(null,"autocomplete","autocomplete",1041133913));
var inst_91829 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_91830 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_91831 = (new cljs.core.PersistentVector(null,1,(5),inst_91829,inst_91830,null));
var inst_91832 = cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(inst_91831,cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Clojure"], 0));
var state_92052__$1 = (function (){var statearr_92161 = state_92052;
(statearr_92161[(9)] = inst_91827);

(statearr_92161[(30)] = inst_91832);

(statearr_92161[(12)] = inst_91826__$1);

return statearr_92161;
})();
var statearr_92162_94723 = state_92052__$1;
(statearr_92162_94723[(2)] = null);

(statearr_92162_94723[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92054 === (12))){
var inst_91885 = (state_92052[(2)]);
var inst_91886 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_91889 = [new cljs.core.Keyword(null,"candidate","candidate",-940308314),new cljs.core.Keyword(null,"type","type",1174270348)];
var inst_91890 = ["foo",new cljs.core.Keyword(null,"local","local",-1497766724)];
var inst_91891 = cljs.core.PersistentHashMap.fromArrays(inst_91889,inst_91890);
var inst_91892 = [new cljs.core.Keyword(null,"candidate","candidate",-940308314),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ns","ns",441598760)];
var inst_91893 = ["for",new cljs.core.Keyword(null,"macro","macro",-867863404),"clojure.core"];
var inst_91894 = cljs.core.PersistentHashMap.fromArrays(inst_91892,inst_91893);
var inst_91895 = [new cljs.core.Keyword(null,"candidate","candidate",-940308314),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ns","ns",441598760)];
var inst_91897 = ["force",new cljs.core.Keyword(null,"function","function",-2127255473),"clojure.core"];
var inst_91898 = cljs.core.PersistentHashMap.fromArrays(inst_91895,inst_91897);
var inst_91899 = [new cljs.core.Keyword(null,"candidate","candidate",-940308314),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ns","ns",441598760)];
var inst_91900 = ["format",new cljs.core.Keyword(null,"function","function",-2127255473),"clojure.core"];
var inst_91901 = cljs.core.PersistentHashMap.fromArrays(inst_91899,inst_91900);
var inst_91902 = [inst_91891,inst_91894,inst_91898,inst_91901];
var inst_91903 = (new cljs.core.PersistentVector(null,4,(5),inst_91886,inst_91902,null));
var inst_91904 = matcher_combinators.matchers.embeds(inst_91903);
var inst_91905 = cljs.core.list(new cljs.core.Symbol("async","<!","async/<!",-1308982001,null),new cljs.core.Symbol(null,"clj","clj",980036099,null));
var inst_91906 = cljs.core.list(new cljs.core.Symbol(null,"embeds","embeds",-1821086689,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"candidate","candidate",-940308314),"foo",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"local","local",-1497766724)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"candidate","candidate",-940308314),"for",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"macro","macro",-867863404),new cljs.core.Keyword(null,"ns","ns",441598760),"clojure.core"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"candidate","candidate",-940308314),"force",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"function","function",-2127255473),new cljs.core.Keyword(null,"ns","ns",441598760),"clojure.core"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"candidate","candidate",-940308314),"format",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"function","function",-2127255473),new cljs.core.Keyword(null,"ns","ns",441598760),"clojure.core"], null)], null));
var inst_91907 = matcher_combinators.core.match(inst_91904,inst_91885);
var inst_91909 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_91885], 0));
var inst_91910 = new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(inst_91907);
var inst_91911 = matcher_combinators.printer.as_string(inst_91910);
var inst_91912 = [inst_91909,"\n\nMismatch:\n",inst_91911].join('');
var inst_91913 = new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(inst_91907);
var inst_91914 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),inst_91913);
var inst_91915 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363)];
var state_92052__$1 = (function (){var statearr_92172 = state_92052;
(statearr_92172[(21)] = inst_91915);

(statearr_92172[(22)] = inst_91906);

(statearr_92172[(23)] = inst_91912);

(statearr_92172[(31)] = inst_91905);

return statearr_92172;
})();
if(inst_91914){
var statearr_92173_94727 = state_92052__$1;
(statearr_92173_94727[(1)] = (13));

} else {
var statearr_92174_94729 = state_92052__$1;
(statearr_92174_94729[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92054 === (2))){
var inst_91819 = (state_92052[(8)]);
var inst_91793 = (state_92052[(15)]);
var inst_91815 = (state_92052[(2)]);
var inst_91817 = cljs.core.deref(inst_91815);
var inst_91818 = new cljs.core.Keyword("editor","commands","editor/commands",1134888579).cljs$core$IFn$_invoke$arity$1(inst_91817);
var inst_91819__$1 = cljs.core.__destructure_map(inst_91818);
var inst_91820 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_91819__$1,new cljs.core.Keyword(null,"connect-embedded","connect-embedded",610098730));
var state_92052__$1 = (function (){var statearr_92177 = state_92052;
(statearr_92177[(8)] = inst_91819__$1);

(statearr_92177[(13)] = inst_91820);

return statearr_92177;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_92052__$1,(3),inst_91793);
} else {
if((state_val_92054 === (23))){
var inst_91963 = (state_92052[(2)]);
var inst_91965 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_91967 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_91968 = [new cljs.core.Keyword(null,"candidate","candidate",-940308314),new cljs.core.Keyword(null,"type","type",1174270348)];
var inst_91969 = ["foo",new cljs.core.Keyword(null,"local","local",-1497766724)];
var inst_91970 = cljs.core.PersistentHashMap.fromArrays(inst_91968,inst_91969);
var inst_91971 = [new cljs.core.Keyword(null,"candidate","candidate",-940308314),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ns","ns",441598760)];
var inst_91972 = ["for",new cljs.core.Keyword(null,"macro","macro",-867863404),"cljs.core"];
var inst_91973 = cljs.core.PersistentHashMap.fromArrays(inst_91971,inst_91972);
var inst_91975 = [new cljs.core.Keyword(null,"candidate","candidate",-940308314),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ns","ns",441598760)];
var inst_91976 = ["force",new cljs.core.Keyword(null,"function","function",-2127255473),"cljs.core"];
var inst_91977 = cljs.core.PersistentHashMap.fromArrays(inst_91975,inst_91976);
var inst_91978 = [inst_91970,inst_91973,inst_91977];
var inst_91979 = (new cljs.core.PersistentVector(null,3,(5),inst_91967,inst_91978,null));
var inst_91980 = matcher_combinators.matchers.embeds(inst_91979);
var inst_91982 = check.core.normalize_error(inst_91963);
var inst_91983 = cljs.core.list(new cljs.core.Symbol("async","<!","async/<!",-1308982001,null),new cljs.core.Symbol(null,"cljs","cljs",-1162018140,null));
var inst_91984 = new cljs.core.Symbol(null,"=>","=>",-813269641,null);
var inst_91986 = cljs.core.list(new cljs.core.Symbol(null,"embeds","embeds",-1821086689,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"candidate","candidate",-940308314),"foo",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"local","local",-1497766724)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"candidate","candidate",-940308314),"for",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"macro","macro",-867863404),new cljs.core.Keyword(null,"ns","ns",441598760),"cljs.core"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"candidate","candidate",-940308314),"force",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"function","function",-2127255473),new cljs.core.Keyword(null,"ns","ns",441598760),"cljs.core"], null)], null));
var inst_91987 = ["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_91983)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_91984)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_91986)].join('');
var inst_91988 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_91980,inst_91982,inst_91987];
var inst_91989 = cljs.core.PersistentHashMap.fromArrays(inst_91965,inst_91988);
var inst_91990 = cljs.test.do_report(inst_91989);
var state_92052__$1 = state_92052;
var statearr_92181_94733 = state_92052__$1;
(statearr_92181_94733[(2)] = inst_91990);

(statearr_92181_94733[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92054 === (19))){
var _ = (function (){var statearr_92182 = state_92052;
(statearr_92182[(4)] = cljs.core.rest((state_92052[(4)])));

return statearr_92182;
})();
var state_92052__$1 = state_92052;
var ex92175 = (state_92052__$1[(2)]);
var statearr_92184_94734 = state_92052__$1;
(statearr_92184_94734[(5)] = ex92175);


throw ex92175;


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92054 === (11))){
var _ = (function (){var statearr_92187 = state_92052;
(statearr_92187[(4)] = cljs.core.rest((state_92052[(4)])));

return statearr_92187;
})();
var state_92052__$1 = state_92052;
var ex92178 = (state_92052__$1[(2)]);
var statearr_92188_94735 = state_92052__$1;
(statearr_92188_94735[(5)] = ex92178);


var statearr_92190_94736 = state_92052__$1;
(statearr_92190_94736[(1)] = (10));

(statearr_92190_94736[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92054 === (9))){
var inst_91926 = (state_92052[(2)]);
var _ = (function (){var statearr_92192 = state_92052;
(statearr_92192[(4)] = cljs.core.rest((state_92052[(4)])));

return statearr_92192;
})();
var state_92052__$1 = state_92052;
var statearr_92194_94738 = state_92052__$1;
(statearr_92194_94738[(2)] = inst_91926);

(statearr_92194_94738[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92054 === (5))){
var inst_91929 = (state_92052[(2)]);
var inst_91932 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_91933 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_91934 = (new cljs.core.PersistentVector(null,1,(5),inst_91932,inst_91933,null));
var inst_91935 = cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(inst_91934,cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["ClojureScript"], 0));
var state_92052__$1 = (function (){var statearr_92197 = state_92052;
(statearr_92197[(32)] = inst_91929);

(statearr_92197[(33)] = inst_91935);

return statearr_92197;
})();
var statearr_92198_94752 = state_92052__$1;
(statearr_92198_94752[(2)] = null);

(statearr_92198_94752[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92054 === (14))){
var state_92052__$1 = state_92052;
var statearr_92201_94754 = state_92052__$1;
(statearr_92201_94754[(2)] = new cljs.core.Keyword(null,"fail","fail",1706214930));

(statearr_92201_94754[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92054 === (26))){
var state_92052__$1 = state_92052;
var statearr_92202_94758 = state_92052__$1;
(statearr_92202_94758[(2)] = new cljs.core.Keyword(null,"pass","pass",1574159993));

(statearr_92202_94758[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92054 === (16))){
var inst_91773 = (state_92052[(7)]);
var inst_91819 = (state_92052[(8)]);
var inst_91827 = (state_92052[(9)]);
var inst_91794 = (state_92052[(10)]);
var inst_91795 = (state_92052[(11)]);
var inst_91826 = (state_92052[(12)]);
var inst_91820 = (state_92052[(13)]);
var inst_91813 = (state_92052[(14)]);
var inst_91793 = (state_92052[(15)]);
var inst_91792 = (state_92052[(16)]);
var _ = (function (){var statearr_92205 = state_92052;
(statearr_92205[(4)] = cljs.core.cons((18),(state_92052[(4)])));

return statearr_92205;
})();
var ___$1 = (function (){var statearr_92206 = state_92052;
(statearr_92206[(4)] = cljs.core.cons((19),(state_92052[(4)])));

return statearr_92206;
})();
var inst_91951 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inst_91792,cljs.core.assoc,new cljs.core.Keyword(null,"filename","filename",-1428840783),"foo.cljs");
var inst_91952 = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var inst_91953 = new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(inst_91820);
var inst_91954 = (inst_91953.cljs$core$IFn$_invoke$arity$0 ? inst_91953.cljs$core$IFn$_invoke$arity$0() : inst_91953.call(null));
var inst_91955 = (function (){var res = inst_91793;
var autocomplete = inst_91827;
var clj = inst_91794;
var cljs__$1 = inst_91795;
var data = inst_91792;
var mark_as_done__53963__auto__ = inst_91773;
var ___$2 = inst_91813;
var connect_embedded = inst_91820;
var map__91776 = inst_91819;
var c = inst_91952;
var map__91777 = inst_91826;
return (function (p1__91227_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,p1__91227_SHARP_);
});
})();
var inst_91957 = inst_91954.then(inst_91955);
var state_92052__$1 = (function (){var statearr_92210 = state_92052;
(statearr_92210[(34)] = inst_91951);

(statearr_92210[(35)] = inst_91957);

return statearr_92210;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_92052__$1,(20),inst_91952);
} else {
if((state_val_92054 === (10))){
var inst_91851 = (state_92052[(2)]);
var inst_91852 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_91854 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_91855 = [new cljs.core.Keyword(null,"candidate","candidate",-940308314),new cljs.core.Keyword(null,"type","type",1174270348)];
var inst_91856 = ["foo",new cljs.core.Keyword(null,"local","local",-1497766724)];
var inst_91857 = cljs.core.PersistentHashMap.fromArrays(inst_91855,inst_91856);
var inst_91858 = [new cljs.core.Keyword(null,"candidate","candidate",-940308314),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ns","ns",441598760)];
var inst_91859 = ["for",new cljs.core.Keyword(null,"macro","macro",-867863404),"clojure.core"];
var inst_91860 = cljs.core.PersistentHashMap.fromArrays(inst_91858,inst_91859);
var inst_91861 = [new cljs.core.Keyword(null,"candidate","candidate",-940308314),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ns","ns",441598760)];
var inst_91862 = ["force",new cljs.core.Keyword(null,"function","function",-2127255473),"clojure.core"];
var inst_91863 = cljs.core.PersistentHashMap.fromArrays(inst_91861,inst_91862);
var inst_91864 = [new cljs.core.Keyword(null,"candidate","candidate",-940308314),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ns","ns",441598760)];
var inst_91865 = ["format",new cljs.core.Keyword(null,"function","function",-2127255473),"clojure.core"];
var inst_91866 = cljs.core.PersistentHashMap.fromArrays(inst_91864,inst_91865);
var inst_91867 = [inst_91857,inst_91860,inst_91863,inst_91866];
var inst_91868 = (new cljs.core.PersistentVector(null,4,(5),inst_91854,inst_91867,null));
var inst_91869 = matcher_combinators.matchers.embeds(inst_91868);
var inst_91870 = check.core.normalize_error(inst_91851);
var inst_91872 = cljs.core.list(new cljs.core.Symbol("async","<!","async/<!",-1308982001,null),new cljs.core.Symbol(null,"clj","clj",980036099,null));
var inst_91873 = new cljs.core.Symbol(null,"=>","=>",-813269641,null);
var inst_91874 = cljs.core.list(new cljs.core.Symbol(null,"embeds","embeds",-1821086689,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"candidate","candidate",-940308314),"foo",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"local","local",-1497766724)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"candidate","candidate",-940308314),"for",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"macro","macro",-867863404),new cljs.core.Keyword(null,"ns","ns",441598760),"clojure.core"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"candidate","candidate",-940308314),"force",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"function","function",-2127255473),new cljs.core.Keyword(null,"ns","ns",441598760),"clojure.core"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"candidate","candidate",-940308314),"format",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"function","function",-2127255473),new cljs.core.Keyword(null,"ns","ns",441598760),"clojure.core"], null)], null));
var inst_91875 = ["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_91872)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_91873)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_91874)].join('');
var inst_91876 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_91869,inst_91870,inst_91875];
var inst_91877 = cljs.core.PersistentHashMap.fromArrays(inst_91852,inst_91876);
var inst_91878 = cljs.test.do_report(inst_91877);
var state_92052__$1 = state_92052;
var statearr_92285_94803 = state_92052__$1;
(statearr_92285_94803[(2)] = inst_91878);

(statearr_92285_94803[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92054 === (18))){
var _ = (function (){var statearr_92287 = state_92052;
(statearr_92287[(4)] = cljs.core.rest((state_92052[(4)])));

return statearr_92287;
})();
var inst_91937 = (state_92052[(2)]);
var inst_91938 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_91940 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_91941 = (new cljs.core.PersistentVector(null,1,(5),inst_91938,inst_91940,null));
var inst_91942 = cljs.test.update_current_env_BANG_(inst_91941,cljs.core.rest);
var ___$1 = (function (){var temp__5753__auto__ = (state_92052[(5)]);
if(cljs.core.truth_(temp__5753__auto__)){
var e__34184__auto__ = temp__5753__auto__;
throw e__34184__auto__;
} else {
return null;
}
})();
var state_92052__$1 = (function (){var statearr_92291 = state_92052;
(statearr_92291[(36)] = inst_91942);

return statearr_92291;
})();
var statearr_92292_94808 = state_92052__$1;
(statearr_92292_94808[(2)] = inst_91937);

(statearr_92292_94808[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92054 === (8))){
var inst_91794 = (state_92052[(10)]);
var _ = (function (){var statearr_92293 = state_92052;
(statearr_92293[(4)] = cljs.core.cons((11),(state_92052[(4)])));

return statearr_92293;
})();
var state_92052__$1 = state_92052;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_92052__$1,(12),inst_91794);
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
});
return (function() {
var repl_tooling$editor_integration$autocomplete_test$state_machine__34940__auto__ = null;
var repl_tooling$editor_integration$autocomplete_test$state_machine__34940__auto____0 = (function (){
var statearr_92298 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_92298[(0)] = repl_tooling$editor_integration$autocomplete_test$state_machine__34940__auto__);

(statearr_92298[(1)] = (1));

return statearr_92298;
});
var repl_tooling$editor_integration$autocomplete_test$state_machine__34940__auto____1 = (function (state_92052){
while(true){
var ret_value__34941__auto__ = (function (){try{while(true){
var result__34942__auto__ = switch__34939__auto__(state_92052);
if(cljs.core.keyword_identical_QMARK_(result__34942__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34942__auto__;
}
break;
}
}catch (e92302){var ex__34943__auto__ = e92302;
var statearr_92303_94814 = state_92052;
(statearr_92303_94814[(2)] = ex__34943__auto__);


if(cljs.core.seq((state_92052[(4)]))){
var statearr_92305_94815 = state_92052;
(statearr_92305_94815[(1)] = cljs.core.first((state_92052[(4)])));

} else {
throw ex__34943__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34941__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__94818 = state_92052;
state_92052 = G__94818;
continue;
} else {
return ret_value__34941__auto__;
}
break;
}
});
repl_tooling$editor_integration$autocomplete_test$state_machine__34940__auto__ = function(state_92052){
switch(arguments.length){
case 0:
return repl_tooling$editor_integration$autocomplete_test$state_machine__34940__auto____0.call(this);
case 1:
return repl_tooling$editor_integration$autocomplete_test$state_machine__34940__auto____1.call(this,state_92052);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
repl_tooling$editor_integration$autocomplete_test$state_machine__34940__auto__.cljs$core$IFn$_invoke$arity$0 = repl_tooling$editor_integration$autocomplete_test$state_machine__34940__auto____0;
repl_tooling$editor_integration$autocomplete_test$state_machine__34940__auto__.cljs$core$IFn$_invoke$arity$1 = repl_tooling$editor_integration$autocomplete_test$state_machine__34940__auto____1;
return repl_tooling$editor_integration$autocomplete_test$state_machine__34940__auto__;
})()
})();
var state__35943__auto__ = (function (){var statearr_92310 = f__35942__auto__();
(statearr_92310[(6)] = c__35941__auto__);

return statearr_92310;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35943__auto__);
}));

return c__35941__auto__;
}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}}));

(repl_tooling.editor_integration.autocomplete_test.t_repl_tooling$editor_integration$autocomplete_test91232.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta91233","meta91233",358198357,null)], null);
}));

(repl_tooling.editor_integration.autocomplete_test.t_repl_tooling$editor_integration$autocomplete_test91232.cljs$lang$type = true);

(repl_tooling.editor_integration.autocomplete_test.t_repl_tooling$editor_integration$autocomplete_test91232.cljs$lang$ctorStr = "repl-tooling.editor-integration.autocomplete-test/t_repl_tooling$editor_integration$autocomplete_test91232");

(repl_tooling.editor_integration.autocomplete_test.t_repl_tooling$editor_integration$autocomplete_test91232.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"repl-tooling.editor-integration.autocomplete-test/t_repl_tooling$editor_integration$autocomplete_test91232");
}));

/**
 * Positional factory function for repl-tooling.editor-integration.autocomplete-test/t_repl_tooling$editor_integration$autocomplete_test91232.
 */
repl_tooling.editor_integration.autocomplete_test.__GT_t_repl_tooling$editor_integration$autocomplete_test91232 = (function repl_tooling$editor_integration$autocomplete_test$__GT_t_repl_tooling$editor_integration$autocomplete_test91232(meta91233){
return (new repl_tooling.editor_integration.autocomplete_test.t_repl_tooling$editor_integration$autocomplete_test91232(meta91233));
});

}

return (new repl_tooling.editor_integration.autocomplete_test.t_repl_tooling$editor_integration$autocomplete_test91232(null));
})], 0)),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));

repl_tooling.editor_integration.autocomplete_test.autodetection_of_autocomplete = (function repl_tooling$editor_integration$autocomplete_test$autodetection_of_autocomplete(){
return cljs.test.test_var(repl_tooling.editor_integration.autocomplete_test.autodetection_of_autocomplete.cljs$lang$var);
});
repl_tooling.editor_integration.autocomplete_test.autodetection_of_autocomplete.cljs$lang$test = (function (){
if((typeof repl_tooling !== 'undefined') && (typeof repl_tooling.editor_integration !== 'undefined') && (typeof repl_tooling.editor_integration.autocomplete_test !== 'undefined') && (typeof repl_tooling.editor_integration.autocomplete_test.t_repl_tooling$editor_integration$autocomplete_test92319 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
repl_tooling.editor_integration.autocomplete_test.t_repl_tooling$editor_integration$autocomplete_test92319 = (function (meta92320){
this.meta92320 = meta92320;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(repl_tooling.editor_integration.autocomplete_test.t_repl_tooling$editor_integration$autocomplete_test92319.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_92321,meta92320__$1){
var self__ = this;
var _92321__$1 = this;
return (new repl_tooling.editor_integration.autocomplete_test.t_repl_tooling$editor_integration$autocomplete_test92319(meta92320__$1));
}));

(repl_tooling.editor_integration.autocomplete_test.t_repl_tooling$editor_integration$autocomplete_test92319.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_92321){
var self__ = this;
var _92321__$1 = this;
return self__.meta92320;
}));

(repl_tooling.editor_integration.autocomplete_test.t_repl_tooling$editor_integration$autocomplete_test92319.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(repl_tooling.editor_integration.autocomplete_test.t_repl_tooling$editor_integration$autocomplete_test92319.prototype.call = (function (self__,done__53962__auto__){
var self__ = this;
var self____$1 = this;
var ___9200__auto__ = self____$1;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["autocomplete"], 0));

try{var c__35941__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35942__auto__ = (function (){var switch__34939__auto__ = (function (state_92740){
var state_val_92741 = (state_92740[(1)]);
if((state_val_92741 === (7))){
var _ = (function (){var statearr_92747 = state_92740;
(statearr_92747[(4)] = cljs.core.rest((state_92740[(4)])));

return statearr_92747;
})();
var state_92740__$1 = state_92740;
var ex92742 = (state_92740__$1[(2)]);
var statearr_92748_94834 = state_92740__$1;
(statearr_92748_94834[(5)] = ex92742);


throw ex92742;


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92741 === (20))){
var inst_92336 = (state_92740[(7)]);
var inst_92415 = (state_92740[(8)]);
var inst_92358 = (state_92740[(9)]);
var inst_92409 = (state_92740[(10)]);
var inst_92421 = (state_92740[(11)]);
var inst_92414 = (state_92740[(12)]);
var inst_92356 = (state_92740[(13)]);
var inst_92357 = (state_92740[(14)]);
var inst_92420 = (state_92740[(15)]);
var inst_92355 = (state_92740[(16)]);
var inst_92638 = (state_92740[(2)]);
var inst_92640 = (inst_92421.cljs$core$IFn$_invoke$arity$0 ? inst_92421.cljs$core$IFn$_invoke$arity$0() : inst_92421.call(null));
var inst_92641 = (function (){var res = inst_92356;
var autocomplete = inst_92421;
var clj = inst_92357;
var cljs__$1 = inst_92358;
var data = inst_92355;
var mark_as_done__53963__auto__ = inst_92336;
var _ = inst_92409;
var connect_embedded = inst_92415;
var map__92341 = inst_92420;
var map__92340 = inst_92414;
return (function (p1__91228_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(cljs__$1,p1__91228_SHARP_);
});
})();
var inst_92642 = inst_92640.then(inst_92641);
var state_92740__$1 = (function (){var statearr_92807 = state_92740;
(statearr_92807[(17)] = inst_92642);

(statearr_92807[(18)] = inst_92638);

return statearr_92807;
})();
var statearr_92808_94842 = state_92740__$1;
(statearr_92808_94842[(2)] = null);

(statearr_92808_94842[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92741 === (27))){
var state_92740__$1 = state_92740;
var statearr_92812_94847 = state_92740__$1;
(statearr_92812_94847[(2)] = new cljs.core.Keyword(null,"fail","fail",1706214930));

(statearr_92812_94847[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92741 === (1))){
var inst_92336 = (state_92740[(7)]);
var inst_92358 = (state_92740[(9)]);
var inst_92356 = (state_92740[(13)]);
var inst_92357 = (state_92740[(14)]);
var inst_92355 = (state_92740[(16)]);
var inst_92335 = (function (){return (function (){
repl_tooling.editor_integration.connection.disconnect_BANG_();

return (done__53962__auto__.cljs$core$IFn$_invoke$arity$0 ? done__53962__auto__.cljs$core$IFn$_invoke$arity$0() : done__53962__auto__.call(null));
});
})();
var inst_92336__$1 = (new cljs.core.Delay(inst_92335,null));
var inst_92337 = (function (){var mark_as_done__53963__auto__ = inst_92336__$1;
return (function (){
if(cljs.core.realized_QMARK_(mark_as_done__53963__auto__)){
return null;
} else {
try{var value__9156__auto___94868 = (function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Async test error - not finalized",cljs.core.PersistentArrayMap.EMPTY)})();
if(cljs.core.truth_(value__9156__auto___94868)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"pass","pass",1574159993),null,null,cljs.core.list(new cljs.core.Symbol(null,"throw","throw",595905694,null),cljs.core.list(new cljs.core.Symbol("clojure.core","ex-info","clojure.core/ex-info",-504237117,null),"Async test error - not finalized",cljs.core.PersistentArrayMap.EMPTY)),null,value__9156__auto___94868,null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"fail","fail",1706214930),null,null,cljs.core.list(new cljs.core.Symbol(null,"throw","throw",595905694,null),cljs.core.list(new cljs.core.Symbol("clojure.core","ex-info","clojure.core/ex-info",-504237117,null),"Async test error - not finalized",cljs.core.PersistentArrayMap.EMPTY)),null,value__9156__auto___94868,null]));
}

}catch (e92819){var t__9189__auto___94892 = e92819;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol(null,"throw","throw",595905694,null),cljs.core.list(new cljs.core.Symbol("clojure.core","ex-info","clojure.core/ex-info",-504237117,null),"Async test error - not finalized",cljs.core.PersistentArrayMap.EMPTY)),null,t__9189__auto___94892,null]));
}
return cljs.core.deref(mark_as_done__53963__auto__);
}
});
})();
var inst_92338 = setTimeout(inst_92337,(3000));
var inst_92343 = [new cljs.core.Keyword(null,"contents","contents",-1567174023),new cljs.core.Keyword(null,"filename","filename",-1428840783),new cljs.core.Keyword(null,"range","range",1639692286)];
var inst_92344 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_92345 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_92346 = [(1),(19)];
var inst_92347 = (new cljs.core.PersistentVector(null,2,(5),inst_92345,inst_92346,null));
var inst_92348 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_92349 = [(1),(19)];
var inst_92350 = (new cljs.core.PersistentVector(null,2,(5),inst_92348,inst_92349,null));
var inst_92351 = [inst_92347,inst_92350];
var inst_92352 = (new cljs.core.PersistentVector(null,2,(5),inst_92344,inst_92351,null));
var inst_92353 = ["(let [foa 10] foa)\n(let [foo 10] (+ fo))","foo.clj",inst_92352];
var inst_92354 = cljs.core.PersistentHashMap.fromArrays(inst_92343,inst_92353);
var inst_92355__$1 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(inst_92354);
var inst_92356__$1 = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var inst_92357__$1 = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var inst_92358__$1 = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var inst_92390 = [new cljs.core.Keyword(null,"editor-data","editor-data",-2084300305),new cljs.core.Keyword(null,"prompt","prompt",-78109487),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),new cljs.core.Keyword(null,"notify","notify",-1256867814),new cljs.core.Keyword(null,"get-config","get-config",1800808901)];
var inst_92391 = (function (){var mark_as_done__53963__auto__ = inst_92336__$1;
var data = inst_92355__$1;
var res = inst_92356__$1;
var clj = inst_92357__$1;
var cljs__$1 = inst_92358__$1;
return (function (){
return cljs.core.deref(data);
});
})();
var inst_92393 = Promise.resolve("fixture");
var inst_92394 = cljs.core.constantly(inst_92393);
var inst_92396 = [new cljs.core.Keyword(null,"eval-mode","eval-mode",1105308847),new cljs.core.Keyword(null,"project-paths","project-paths",-1637469806)];
var inst_92397 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_92399 = process.cwd();
var inst_92400 = [inst_92399];
var inst_92401 = (new cljs.core.PersistentVector(null,1,(5),inst_92397,inst_92400,null));
var inst_92402 = [new cljs.core.Keyword(null,"prefer-cljs","prefer-cljs",1599484843),inst_92401];
var inst_92403 = cljs.core.PersistentHashMap.fromArrays(inst_92396,inst_92402);
var inst_92404 = cljs.core.constantly(inst_92403);
var inst_92405 = [inst_92391,inst_92394,cljs.core.identity,cljs.core.identity,inst_92404];
var inst_92406 = cljs.core.PersistentHashMap.fromArrays(inst_92390,inst_92405);
var inst_92407 = repl_tooling.editor_integration.connection.connect_BANG_("localhost",(2233),inst_92406);
var inst_92408 = (function (){var mark_as_done__53963__auto__ = inst_92336__$1;
var data = inst_92355__$1;
var res = inst_92356__$1;
var clj = inst_92357__$1;
var cljs__$1 = inst_92358__$1;
return (function (p1__91225_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(res,p1__91225_SHARP_);
});
})();
var inst_92409 = inst_92407.then(inst_92408);
var state_92740__$1 = (function (){var statearr_92833 = state_92740;
(statearr_92833[(7)] = inst_92336__$1);

(statearr_92833[(9)] = inst_92358__$1);

(statearr_92833[(19)] = inst_92338);

(statearr_92833[(10)] = inst_92409);

(statearr_92833[(13)] = inst_92356__$1);

(statearr_92833[(14)] = inst_92357__$1);

(statearr_92833[(16)] = inst_92355__$1);

return statearr_92833;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_92740__$1,(2),inst_92356__$1);
} else {
if((state_val_92741 === (24))){
var _ = (function (){var statearr_92840 = state_92740;
(statearr_92840[(4)] = cljs.core.rest((state_92740[(4)])));

return statearr_92840;
})();
var state_92740__$1 = state_92740;
var ex92810 = (state_92740__$1[(2)]);
var statearr_92842_94931 = state_92740__$1;
(statearr_92842_94931[(5)] = ex92810);


var statearr_92843_94932 = state_92740__$1;
(statearr_92843_94932[(1)] = (23));

(statearr_92843_94932[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92741 === (4))){
var inst_92336 = (state_92740[(7)]);
var inst_92415 = (state_92740[(8)]);
var inst_92358 = (state_92740[(9)]);
var inst_92409 = (state_92740[(10)]);
var inst_92421 = (state_92740[(11)]);
var inst_92414 = (state_92740[(12)]);
var inst_92356 = (state_92740[(13)]);
var inst_92357 = (state_92740[(14)]);
var inst_92420 = (state_92740[(15)]);
var inst_92355 = (state_92740[(16)]);
var _ = (function (){var statearr_92847 = state_92740;
(statearr_92847[(4)] = cljs.core.cons((6),(state_92740[(4)])));

return statearr_92847;
})();
var ___$1 = (function (){var statearr_92848 = state_92740;
(statearr_92848[(4)] = cljs.core.cons((7),(state_92740[(4)])));

return statearr_92848;
})();
var inst_92440 = (inst_92421.cljs$core$IFn$_invoke$arity$0 ? inst_92421.cljs$core$IFn$_invoke$arity$0() : inst_92421.call(null));
var inst_92441 = (function (){var res = inst_92356;
var autocomplete = inst_92421;
var clj = inst_92357;
var cljs__$1 = inst_92358;
var data = inst_92355;
var mark_as_done__53963__auto__ = inst_92336;
var ___$2 = inst_92409;
var connect_embedded = inst_92415;
var map__92341 = inst_92420;
var map__92340 = inst_92414;
return (function (p1__91226_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(clj,p1__91226_SHARP_);
});
})();
var inst_92442 = inst_92440.then(inst_92441);
var state_92740__$1 = (function (){var statearr_92854 = state_92740;
(statearr_92854[(20)] = inst_92442);

return statearr_92854;
})();
var statearr_92855_94936 = state_92740__$1;
(statearr_92855_94936[(2)] = null);

(statearr_92855_94936[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92741 === (15))){
var inst_92563 = (state_92740[(21)]);
var inst_92569 = (state_92740[(22)]);
var inst_92554 = (state_92740[(23)]);
var inst_92573 = (state_92740[(2)]);
var inst_92576 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(inst_92563);
var inst_92577 = [inst_92573,inst_92554,inst_92576];
var inst_92579 = cljs.core.PersistentHashMap.fromArrays(inst_92569,inst_92577);
var inst_92580 = cljs.test.do_report(inst_92579);
var _ = (function (){var statearr_92862 = state_92740;
(statearr_92862[(4)] = cljs.core.rest((state_92740[(4)])));

return statearr_92862;
})();
var state_92740__$1 = state_92740;
var statearr_92864_94939 = state_92740__$1;
(statearr_92864_94939[(2)] = inst_92580);

(statearr_92864_94939[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92741 === (21))){
var inst_92358 = (state_92740[(9)]);
var _ = (function (){var statearr_92867 = state_92740;
(statearr_92867[(4)] = cljs.core.cons((24),(state_92740[(4)])));

return statearr_92867;
})();
var state_92740__$1 = state_92740;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_92740__$1,(25),inst_92358);
} else {
if((state_val_92741 === (13))){
var state_92740__$1 = state_92740;
var statearr_92870_94940 = state_92740__$1;
(statearr_92870_94940[(2)] = new cljs.core.Keyword(null,"pass","pass",1574159993));

(statearr_92870_94940[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92741 === (22))){
var inst_92730 = (state_92740[(2)]);
var _ = (function (){var statearr_92872 = state_92740;
(statearr_92872[(4)] = cljs.core.rest((state_92740[(4)])));

return statearr_92872;
})();
var state_92740__$1 = state_92740;
var statearr_92873_94942 = state_92740__$1;
(statearr_92873_94942[(2)] = inst_92730);

(statearr_92873_94942[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92741 === (6))){
var _ = (function (){var statearr_92878 = state_92740;
(statearr_92878[(4)] = cljs.core.rest((state_92740[(4)])));

return statearr_92878;
})();
var inst_92427 = (state_92740[(2)]);
var inst_92429 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_92430 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_92431 = (new cljs.core.PersistentVector(null,1,(5),inst_92429,inst_92430,null));
var inst_92432 = cljs.test.update_current_env_BANG_(inst_92431,cljs.core.rest);
var ___$1 = (function (){var temp__5753__auto__ = (state_92740[(5)]);
if(cljs.core.truth_(temp__5753__auto__)){
var e__34184__auto__ = temp__5753__auto__;
throw e__34184__auto__;
} else {
return null;
}
})();
var state_92740__$1 = (function (){var statearr_92881 = state_92740;
(statearr_92881[(24)] = inst_92432);

return statearr_92881;
})();
var statearr_92882_94945 = state_92740__$1;
(statearr_92882_94945[(2)] = inst_92427);

(statearr_92882_94945[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92741 === (28))){
var inst_92716 = (state_92740[(25)]);
var inst_92719 = (state_92740[(26)]);
var inst_92711 = (state_92740[(27)]);
var inst_92723 = (state_92740[(2)]);
var inst_92724 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(inst_92716);
var inst_92725 = [inst_92723,inst_92711,inst_92724];
var inst_92726 = cljs.core.PersistentHashMap.fromArrays(inst_92719,inst_92725);
var inst_92727 = cljs.test.do_report(inst_92726);
var _ = (function (){var statearr_92888 = state_92740;
(statearr_92888[(4)] = cljs.core.rest((state_92740[(4)])));

return statearr_92888;
})();
var state_92740__$1 = state_92740;
var statearr_92889_94948 = state_92740__$1;
(statearr_92889_94948[(2)] = inst_92727);

(statearr_92889_94948[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92741 === (25))){
var inst_92696 = (state_92740[(2)]);
var inst_92697 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_92698 = [new cljs.core.Keyword(null,"candidate","candidate",-940308314),new cljs.core.Keyword(null,"type","type",1174270348)];
var inst_92699 = ["foo",new cljs.core.Keyword(null,"local","local",-1497766724)];
var inst_92700 = cljs.core.PersistentHashMap.fromArrays(inst_92698,inst_92699);
var inst_92701 = [new cljs.core.Keyword(null,"candidate","candidate",-940308314),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ns","ns",441598760)];
var inst_92702 = ["for",new cljs.core.Keyword(null,"macro","macro",-867863404),"cljs.core"];
var inst_92703 = cljs.core.PersistentHashMap.fromArrays(inst_92701,inst_92702);
var inst_92704 = [new cljs.core.Keyword(null,"candidate","candidate",-940308314),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ns","ns",441598760)];
var inst_92705 = ["force",new cljs.core.Keyword(null,"function","function",-2127255473),"cljs.core"];
var inst_92706 = cljs.core.PersistentHashMap.fromArrays(inst_92704,inst_92705);
var inst_92707 = [inst_92700,inst_92703,inst_92706];
var inst_92708 = (new cljs.core.PersistentVector(null,3,(5),inst_92697,inst_92707,null));
var inst_92709 = matcher_combinators.matchers.embeds(inst_92708);
var inst_92710 = cljs.core.list(new cljs.core.Symbol("async","<!","async/<!",-1308982001,null),new cljs.core.Symbol(null,"cljs","cljs",-1162018140,null));
var inst_92711 = cljs.core.list(new cljs.core.Symbol(null,"embeds","embeds",-1821086689,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"candidate","candidate",-940308314),"foo",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"local","local",-1497766724)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"candidate","candidate",-940308314),"for",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"macro","macro",-867863404),new cljs.core.Keyword(null,"ns","ns",441598760),"cljs.core"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"candidate","candidate",-940308314),"force",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"function","function",-2127255473),new cljs.core.Keyword(null,"ns","ns",441598760),"cljs.core"], null)], null));
var inst_92712 = matcher_combinators.core.match(inst_92709,inst_92696);
var inst_92713 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_92696], 0));
var inst_92714 = new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(inst_92712);
var inst_92715 = matcher_combinators.printer.as_string(inst_92714);
var inst_92716 = [inst_92713,"\n\nMismatch:\n",inst_92715].join('');
var inst_92717 = new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(inst_92712);
var inst_92718 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),inst_92717);
var inst_92719 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363)];
var state_92740__$1 = (function (){var statearr_92899 = state_92740;
(statearr_92899[(25)] = inst_92716);

(statearr_92899[(26)] = inst_92719);

(statearr_92899[(28)] = inst_92710);

(statearr_92899[(27)] = inst_92711);

return statearr_92899;
})();
if(inst_92718){
var statearr_92901_94951 = state_92740__$1;
(statearr_92901_94951[(1)] = (26));

} else {
var statearr_92938_94952 = state_92740__$1;
(statearr_92938_94952[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92741 === (17))){
var inst_92336 = (state_92740[(7)]);
var inst_92733 = (state_92740[(2)]);
var inst_92734 = cljs.core.deref(inst_92336);
var state_92740__$1 = (function (){var statearr_92942 = state_92740;
(statearr_92942[(29)] = inst_92733);

return statearr_92942;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_92740__$1,inst_92734);
} else {
if((state_val_92741 === (3))){
var inst_92420 = (state_92740[(15)]);
var inst_92417 = (state_92740[(2)]);
var inst_92418 = cljs.core.deref(inst_92417);
var inst_92419 = new cljs.core.Keyword("editor","features","editor/features",1302258665).cljs$core$IFn$_invoke$arity$1(inst_92418);
var inst_92420__$1 = cljs.core.__destructure_map(inst_92419);
var inst_92421 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_92420__$1,new cljs.core.Keyword(null,"autocomplete","autocomplete",1041133913));
var inst_92422 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_92423 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_92424 = (new cljs.core.PersistentVector(null,1,(5),inst_92422,inst_92423,null));
var inst_92425 = cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(inst_92424,cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Clojure"], 0));
var state_92740__$1 = (function (){var statearr_92947 = state_92740;
(statearr_92947[(11)] = inst_92421);

(statearr_92947[(15)] = inst_92420__$1);

(statearr_92947[(30)] = inst_92425);

return statearr_92947;
})();
var statearr_92948_94957 = state_92740__$1;
(statearr_92948_94957[(2)] = null);

(statearr_92948_94957[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92741 === (12))){
var inst_92516 = (state_92740[(2)]);
var inst_92523 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_92525 = [new cljs.core.Keyword(null,"candidate","candidate",-940308314),new cljs.core.Keyword(null,"type","type",1174270348)];
var inst_92526 = ["foo",new cljs.core.Keyword(null,"local","local",-1497766724)];
var inst_92527 = cljs.core.PersistentHashMap.fromArrays(inst_92525,inst_92526);
var inst_92529 = [new cljs.core.Keyword(null,"candidate","candidate",-940308314),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ns","ns",441598760)];
var inst_92530 = ["for",new cljs.core.Keyword(null,"macro","macro",-867863404),"clojure.core"];
var inst_92531 = cljs.core.PersistentHashMap.fromArrays(inst_92529,inst_92530);
var inst_92533 = [new cljs.core.Keyword(null,"candidate","candidate",-940308314),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ns","ns",441598760)];
var inst_92541 = ["force",new cljs.core.Keyword(null,"function","function",-2127255473),"clojure.core"];
var inst_92542 = cljs.core.PersistentHashMap.fromArrays(inst_92533,inst_92541);
var inst_92547 = [new cljs.core.Keyword(null,"candidate","candidate",-940308314),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ns","ns",441598760)];
var inst_92548 = ["format",new cljs.core.Keyword(null,"function","function",-2127255473),"clojure.core"];
var inst_92549 = cljs.core.PersistentHashMap.fromArrays(inst_92547,inst_92548);
var inst_92550 = [inst_92527,inst_92531,inst_92542,inst_92549];
var inst_92551 = (new cljs.core.PersistentVector(null,4,(5),inst_92523,inst_92550,null));
var inst_92552 = matcher_combinators.matchers.embeds(inst_92551);
var inst_92553 = cljs.core.list(new cljs.core.Symbol("async","<!","async/<!",-1308982001,null),new cljs.core.Symbol(null,"clj","clj",980036099,null));
var inst_92554 = cljs.core.list(new cljs.core.Symbol(null,"embeds","embeds",-1821086689,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"candidate","candidate",-940308314),"foo",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"local","local",-1497766724)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"candidate","candidate",-940308314),"for",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"macro","macro",-867863404),new cljs.core.Keyword(null,"ns","ns",441598760),"clojure.core"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"candidate","candidate",-940308314),"force",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"function","function",-2127255473),new cljs.core.Keyword(null,"ns","ns",441598760),"clojure.core"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"candidate","candidate",-940308314),"format",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"function","function",-2127255473),new cljs.core.Keyword(null,"ns","ns",441598760),"clojure.core"], null)], null));
var inst_92555 = matcher_combinators.core.match(inst_92552,inst_92516);
var inst_92560 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_92516], 0));
var inst_92561 = new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(inst_92555);
var inst_92562 = matcher_combinators.printer.as_string(inst_92561);
var inst_92563 = [inst_92560,"\n\nMismatch:\n",inst_92562].join('');
var inst_92565 = new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(inst_92555);
var inst_92566 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),inst_92565);
var inst_92569 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363)];
var state_92740__$1 = (function (){var statearr_92955 = state_92740;
(statearr_92955[(21)] = inst_92563);

(statearr_92955[(22)] = inst_92569);

(statearr_92955[(31)] = inst_92553);

(statearr_92955[(23)] = inst_92554);

return statearr_92955;
})();
if(inst_92566){
var statearr_92956_94961 = state_92740__$1;
(statearr_92956_94961[(1)] = (13));

} else {
var statearr_92958_94962 = state_92740__$1;
(statearr_92958_94962[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92741 === (2))){
var inst_92414 = (state_92740[(12)]);
var inst_92356 = (state_92740[(13)]);
var inst_92411 = (state_92740[(2)]);
var inst_92412 = cljs.core.deref(inst_92411);
var inst_92413 = new cljs.core.Keyword("editor","commands","editor/commands",1134888579).cljs$core$IFn$_invoke$arity$1(inst_92412);
var inst_92414__$1 = cljs.core.__destructure_map(inst_92413);
var inst_92415 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_92414__$1,new cljs.core.Keyword(null,"connect-embedded","connect-embedded",610098730));
var state_92740__$1 = (function (){var statearr_92964 = state_92740;
(statearr_92964[(8)] = inst_92415);

(statearr_92964[(12)] = inst_92414__$1);

return statearr_92964;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_92740__$1,(3),inst_92356);
} else {
if((state_val_92741 === (23))){
var inst_92643 = (state_92740[(2)]);
var inst_92648 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_92652 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_92657 = [new cljs.core.Keyword(null,"candidate","candidate",-940308314),new cljs.core.Keyword(null,"type","type",1174270348)];
var inst_92662 = ["foo",new cljs.core.Keyword(null,"local","local",-1497766724)];
var inst_92663 = cljs.core.PersistentHashMap.fromArrays(inst_92657,inst_92662);
var inst_92670 = [new cljs.core.Keyword(null,"candidate","candidate",-940308314),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ns","ns",441598760)];
var inst_92671 = ["for",new cljs.core.Keyword(null,"macro","macro",-867863404),"cljs.core"];
var inst_92672 = cljs.core.PersistentHashMap.fromArrays(inst_92670,inst_92671);
var inst_92673 = [new cljs.core.Keyword(null,"candidate","candidate",-940308314),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ns","ns",441598760)];
var inst_92674 = ["force",new cljs.core.Keyword(null,"function","function",-2127255473),"cljs.core"];
var inst_92675 = cljs.core.PersistentHashMap.fromArrays(inst_92673,inst_92674);
var inst_92676 = [inst_92663,inst_92672,inst_92675];
var inst_92677 = (new cljs.core.PersistentVector(null,3,(5),inst_92652,inst_92676,null));
var inst_92678 = matcher_combinators.matchers.embeds(inst_92677);
var inst_92679 = check.core.normalize_error(inst_92643);
var inst_92680 = cljs.core.list(new cljs.core.Symbol("async","<!","async/<!",-1308982001,null),new cljs.core.Symbol(null,"cljs","cljs",-1162018140,null));
var inst_92681 = new cljs.core.Symbol(null,"=>","=>",-813269641,null);
var inst_92682 = cljs.core.list(new cljs.core.Symbol(null,"embeds","embeds",-1821086689,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"candidate","candidate",-940308314),"foo",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"local","local",-1497766724)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"candidate","candidate",-940308314),"for",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"macro","macro",-867863404),new cljs.core.Keyword(null,"ns","ns",441598760),"cljs.core"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"candidate","candidate",-940308314),"force",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"function","function",-2127255473),new cljs.core.Keyword(null,"ns","ns",441598760),"cljs.core"], null)], null));
var inst_92683 = ["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_92680)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_92681)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_92682)].join('');
var inst_92684 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_92678,inst_92679,inst_92683];
var inst_92685 = cljs.core.PersistentHashMap.fromArrays(inst_92648,inst_92684);
var inst_92686 = cljs.test.do_report(inst_92685);
var state_92740__$1 = state_92740;
var statearr_92972_94970 = state_92740__$1;
(statearr_92972_94970[(2)] = inst_92686);

(statearr_92972_94970[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92741 === (19))){
var _ = (function (){var statearr_92973 = state_92740;
(statearr_92973[(4)] = cljs.core.rest((state_92740[(4)])));

return statearr_92973;
})();
var state_92740__$1 = state_92740;
var ex92960 = (state_92740__$1[(2)]);
var statearr_92975_94972 = state_92740__$1;
(statearr_92975_94972[(5)] = ex92960);


throw ex92960;


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92741 === (11))){
var _ = (function (){var statearr_92977 = state_92740;
(statearr_92977[(4)] = cljs.core.rest((state_92740[(4)])));

return statearr_92977;
})();
var state_92740__$1 = state_92740;
var ex92966 = (state_92740__$1[(2)]);
var statearr_92979_94973 = state_92740__$1;
(statearr_92979_94973[(5)] = ex92966);


var statearr_92980_94975 = state_92740__$1;
(statearr_92980_94975[(1)] = (10));

(statearr_92980_94975[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92741 === (9))){
var inst_92584 = (state_92740[(2)]);
var _ = (function (){var statearr_92982 = state_92740;
(statearr_92982[(4)] = cljs.core.rest((state_92740[(4)])));

return statearr_92982;
})();
var state_92740__$1 = state_92740;
var statearr_92984_94984 = state_92740__$1;
(statearr_92984_94984[(2)] = inst_92584);

(statearr_92984_94984[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92741 === (5))){
var inst_92590 = (state_92740[(2)]);
var inst_92596 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_92597 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_92598 = (new cljs.core.PersistentVector(null,1,(5),inst_92596,inst_92597,null));
var inst_92599 = cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(inst_92598,cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["ClojureScript"], 0));
var state_92740__$1 = (function (){var statearr_92986 = state_92740;
(statearr_92986[(32)] = inst_92599);

(statearr_92986[(33)] = inst_92590);

return statearr_92986;
})();
var statearr_92987_94998 = state_92740__$1;
(statearr_92987_94998[(2)] = null);

(statearr_92987_94998[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92741 === (14))){
var state_92740__$1 = state_92740;
var statearr_92990_95004 = state_92740__$1;
(statearr_92990_95004[(2)] = new cljs.core.Keyword(null,"fail","fail",1706214930));

(statearr_92990_95004[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92741 === (26))){
var state_92740__$1 = state_92740;
var statearr_92992_95015 = state_92740__$1;
(statearr_92992_95015[(2)] = new cljs.core.Keyword(null,"pass","pass",1574159993));

(statearr_92992_95015[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92741 === (16))){
var inst_92336 = (state_92740[(7)]);
var inst_92415 = (state_92740[(8)]);
var inst_92358 = (state_92740[(9)]);
var inst_92409 = (state_92740[(10)]);
var inst_92421 = (state_92740[(11)]);
var inst_92414 = (state_92740[(12)]);
var inst_92356 = (state_92740[(13)]);
var inst_92357 = (state_92740[(14)]);
var inst_92420 = (state_92740[(15)]);
var inst_92355 = (state_92740[(16)]);
var _ = (function (){var statearr_92996 = state_92740;
(statearr_92996[(4)] = cljs.core.cons((18),(state_92740[(4)])));

return statearr_92996;
})();
var ___$1 = (function (){var statearr_92998 = state_92740;
(statearr_92998[(4)] = cljs.core.cons((19),(state_92740[(4)])));

return statearr_92998;
})();
var inst_92620 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inst_92355,cljs.core.assoc,new cljs.core.Keyword(null,"filename","filename",-1428840783),"foo.cljs");
var inst_92626 = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var inst_92631 = new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(inst_92415);
var inst_92632 = (inst_92631.cljs$core$IFn$_invoke$arity$0 ? inst_92631.cljs$core$IFn$_invoke$arity$0() : inst_92631.call(null));
var inst_92634 = (function (){var res = inst_92356;
var autocomplete = inst_92421;
var clj = inst_92357;
var cljs__$1 = inst_92358;
var data = inst_92355;
var mark_as_done__53963__auto__ = inst_92336;
var ___$2 = inst_92409;
var connect_embedded = inst_92415;
var map__92341 = inst_92420;
var c = inst_92626;
var map__92340 = inst_92414;
return (function (p1__91227_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,p1__91227_SHARP_);
});
})();
var inst_92635 = inst_92632.then(inst_92634);
var state_92740__$1 = (function (){var statearr_93004 = state_92740;
(statearr_93004[(34)] = inst_92635);

(statearr_93004[(35)] = inst_92620);

return statearr_93004;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_92740__$1,(20),inst_92626);
} else {
if((state_val_92741 === (10))){
var inst_92445 = (state_92740[(2)]);
var inst_92448 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_92450 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_92456 = [new cljs.core.Keyword(null,"candidate","candidate",-940308314),new cljs.core.Keyword(null,"type","type",1174270348)];
var inst_92459 = ["foo",new cljs.core.Keyword(null,"local","local",-1497766724)];
var inst_92460 = cljs.core.PersistentHashMap.fromArrays(inst_92456,inst_92459);
var inst_92463 = [new cljs.core.Keyword(null,"candidate","candidate",-940308314),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ns","ns",441598760)];
var inst_92467 = ["for",new cljs.core.Keyword(null,"macro","macro",-867863404),"clojure.core"];
var inst_92468 = cljs.core.PersistentHashMap.fromArrays(inst_92463,inst_92467);
var inst_92471 = [new cljs.core.Keyword(null,"candidate","candidate",-940308314),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ns","ns",441598760)];
var inst_92473 = ["force",new cljs.core.Keyword(null,"function","function",-2127255473),"clojure.core"];
var inst_92474 = cljs.core.PersistentHashMap.fromArrays(inst_92471,inst_92473);
var inst_92479 = [new cljs.core.Keyword(null,"candidate","candidate",-940308314),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ns","ns",441598760)];
var inst_92483 = ["format",new cljs.core.Keyword(null,"function","function",-2127255473),"clojure.core"];
var inst_92484 = cljs.core.PersistentHashMap.fromArrays(inst_92479,inst_92483);
var inst_92485 = [inst_92460,inst_92468,inst_92474,inst_92484];
var inst_92486 = (new cljs.core.PersistentVector(null,4,(5),inst_92450,inst_92485,null));
var inst_92487 = matcher_combinators.matchers.embeds(inst_92486);
var inst_92490 = check.core.normalize_error(inst_92445);
var inst_92493 = cljs.core.list(new cljs.core.Symbol("async","<!","async/<!",-1308982001,null),new cljs.core.Symbol(null,"clj","clj",980036099,null));
var inst_92494 = new cljs.core.Symbol(null,"=>","=>",-813269641,null);
var inst_92495 = cljs.core.list(new cljs.core.Symbol(null,"embeds","embeds",-1821086689,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"candidate","candidate",-940308314),"foo",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"local","local",-1497766724)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"candidate","candidate",-940308314),"for",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"macro","macro",-867863404),new cljs.core.Keyword(null,"ns","ns",441598760),"clojure.core"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"candidate","candidate",-940308314),"force",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"function","function",-2127255473),new cljs.core.Keyword(null,"ns","ns",441598760),"clojure.core"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"candidate","candidate",-940308314),"format",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"function","function",-2127255473),new cljs.core.Keyword(null,"ns","ns",441598760),"clojure.core"], null)], null));
var inst_92496 = ["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_92493)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_92494)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_92495)].join('');
var inst_92498 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_92487,inst_92490,inst_92496];
var inst_92499 = cljs.core.PersistentHashMap.fromArrays(inst_92448,inst_92498);
var inst_92500 = cljs.test.do_report(inst_92499);
var state_92740__$1 = state_92740;
var statearr_93128_95106 = state_92740__$1;
(statearr_93128_95106[(2)] = inst_92500);

(statearr_93128_95106[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92741 === (18))){
var _ = (function (){var statearr_93131 = state_92740;
(statearr_93131[(4)] = cljs.core.rest((state_92740[(4)])));

return statearr_93131;
})();
var inst_92602 = (state_92740[(2)]);
var inst_92605 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_92607 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_92608 = (new cljs.core.PersistentVector(null,1,(5),inst_92605,inst_92607,null));
var inst_92610 = cljs.test.update_current_env_BANG_(inst_92608,cljs.core.rest);
var ___$1 = (function (){var temp__5753__auto__ = (state_92740[(5)]);
if(cljs.core.truth_(temp__5753__auto__)){
var e__34184__auto__ = temp__5753__auto__;
throw e__34184__auto__;
} else {
return null;
}
})();
var state_92740__$1 = (function (){var statearr_93133 = state_92740;
(statearr_93133[(36)] = inst_92610);

return statearr_93133;
})();
var statearr_93138_95135 = state_92740__$1;
(statearr_93138_95135[(2)] = inst_92602);

(statearr_93138_95135[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92741 === (8))){
var inst_92357 = (state_92740[(14)]);
var _ = (function (){var statearr_93152 = state_92740;
(statearr_93152[(4)] = cljs.core.cons((11),(state_92740[(4)])));

return statearr_93152;
})();
var state_92740__$1 = state_92740;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_92740__$1,(12),inst_92357);
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
});
return (function() {
var repl_tooling$editor_integration$autocomplete_test$state_machine__34940__auto__ = null;
var repl_tooling$editor_integration$autocomplete_test$state_machine__34940__auto____0 = (function (){
var statearr_93181 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_93181[(0)] = repl_tooling$editor_integration$autocomplete_test$state_machine__34940__auto__);

(statearr_93181[(1)] = (1));

return statearr_93181;
});
var repl_tooling$editor_integration$autocomplete_test$state_machine__34940__auto____1 = (function (state_92740){
while(true){
var ret_value__34941__auto__ = (function (){try{while(true){
var result__34942__auto__ = switch__34939__auto__(state_92740);
if(cljs.core.keyword_identical_QMARK_(result__34942__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34942__auto__;
}
break;
}
}catch (e93197){var ex__34943__auto__ = e93197;
var statearr_93198_95140 = state_92740;
(statearr_93198_95140[(2)] = ex__34943__auto__);


if(cljs.core.seq((state_92740[(4)]))){
var statearr_93199_95142 = state_92740;
(statearr_93199_95142[(1)] = cljs.core.first((state_92740[(4)])));

} else {
throw ex__34943__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34941__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__95145 = state_92740;
state_92740 = G__95145;
continue;
} else {
return ret_value__34941__auto__;
}
break;
}
});
repl_tooling$editor_integration$autocomplete_test$state_machine__34940__auto__ = function(state_92740){
switch(arguments.length){
case 0:
return repl_tooling$editor_integration$autocomplete_test$state_machine__34940__auto____0.call(this);
case 1:
return repl_tooling$editor_integration$autocomplete_test$state_machine__34940__auto____1.call(this,state_92740);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
repl_tooling$editor_integration$autocomplete_test$state_machine__34940__auto__.cljs$core$IFn$_invoke$arity$0 = repl_tooling$editor_integration$autocomplete_test$state_machine__34940__auto____0;
repl_tooling$editor_integration$autocomplete_test$state_machine__34940__auto__.cljs$core$IFn$_invoke$arity$1 = repl_tooling$editor_integration$autocomplete_test$state_machine__34940__auto____1;
return repl_tooling$editor_integration$autocomplete_test$state_machine__34940__auto__;
})()
})();
var state__35943__auto__ = (function (){var statearr_93202 = f__35942__auto__();
(statearr_93202[(6)] = c__35941__auto__);

return statearr_93202;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35943__auto__);
}));

return c__35941__auto__;
}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}}));

(repl_tooling.editor_integration.autocomplete_test.t_repl_tooling$editor_integration$autocomplete_test92319.prototype.apply = (function (self__,args92326){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args92326)));
}));

(repl_tooling.editor_integration.autocomplete_test.t_repl_tooling$editor_integration$autocomplete_test92319.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done__53962__auto__){
var self__ = this;
var ___9200__auto__ = this;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["autocomplete"], 0));

try{var c__35941__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35942__auto__ = (function (){var switch__34939__auto__ = (function (state_93540){
var state_val_93541 = (state_93540[(1)]);
if((state_val_93541 === (7))){
var _ = (function (){var statearr_93545 = state_93540;
(statearr_93545[(4)] = cljs.core.rest((state_93540[(4)])));

return statearr_93545;
})();
var state_93540__$1 = state_93540;
var ex93542 = (state_93540__$1[(2)]);
var statearr_93547_95149 = state_93540__$1;
(statearr_93547_95149[(5)] = ex93542);


throw ex93542;


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_93541 === (20))){
var inst_93264 = (state_93540[(7)]);
var inst_93234 = (state_93540[(8)]);
var inst_93257 = (state_93540[(9)]);
var inst_93263 = (state_93540[(10)]);
var inst_93233 = (state_93540[(11)]);
var inst_93258 = (state_93540[(12)]);
var inst_93231 = (state_93540[(13)]);
var inst_93252 = (state_93540[(14)]);
var inst_93232 = (state_93540[(15)]);
var inst_93211 = (state_93540[(16)]);
var inst_93397 = (state_93540[(2)]);
var inst_93398 = (inst_93264.cljs$core$IFn$_invoke$arity$0 ? inst_93264.cljs$core$IFn$_invoke$arity$0() : inst_93264.call(null));
var inst_93399 = (function (){var res = inst_93232;
var autocomplete = inst_93264;
var clj = inst_93233;
var cljs__$1 = inst_93234;
var map__93216 = inst_93257;
var data = inst_93231;
var mark_as_done__53963__auto__ = inst_93211;
var _ = inst_93252;
var connect_embedded = inst_93258;
var map__93217 = inst_93263;
return (function (p1__91228_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(cljs__$1,p1__91228_SHARP_);
});
})();
var inst_93400 = inst_93398.then(inst_93399);
var state_93540__$1 = (function (){var statearr_93559 = state_93540;
(statearr_93559[(17)] = inst_93397);

(statearr_93559[(18)] = inst_93400);

return statearr_93559;
})();
var statearr_93561_95155 = state_93540__$1;
(statearr_93561_95155[(2)] = null);

(statearr_93561_95155[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_93541 === (27))){
var state_93540__$1 = state_93540;
var statearr_93564_95157 = state_93540__$1;
(statearr_93564_95157[(2)] = new cljs.core.Keyword(null,"fail","fail",1706214930));

(statearr_93564_95157[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_93541 === (1))){
var inst_93234 = (state_93540[(8)]);
var inst_93233 = (state_93540[(11)]);
var inst_93231 = (state_93540[(13)]);
var inst_93232 = (state_93540[(15)]);
var inst_93211 = (state_93540[(16)]);
var inst_93210 = (function (){return (function (){
repl_tooling.editor_integration.connection.disconnect_BANG_();

return (done__53962__auto__.cljs$core$IFn$_invoke$arity$0 ? done__53962__auto__.cljs$core$IFn$_invoke$arity$0() : done__53962__auto__.call(null));
});
})();
var inst_93211__$1 = (new cljs.core.Delay(inst_93210,null));
var inst_93212 = (function (){var mark_as_done__53963__auto__ = inst_93211__$1;
return (function (){
if(cljs.core.realized_QMARK_(mark_as_done__53963__auto__)){
return null;
} else {
try{var value__9156__auto___95161 = (function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Async test error - not finalized",cljs.core.PersistentArrayMap.EMPTY)})();
if(cljs.core.truth_(value__9156__auto___95161)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"pass","pass",1574159993),null,null,cljs.core.list(new cljs.core.Symbol(null,"throw","throw",595905694,null),cljs.core.list(new cljs.core.Symbol("clojure.core","ex-info","clojure.core/ex-info",-504237117,null),"Async test error - not finalized",cljs.core.PersistentArrayMap.EMPTY)),null,value__9156__auto___95161,null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"fail","fail",1706214930),null,null,cljs.core.list(new cljs.core.Symbol(null,"throw","throw",595905694,null),cljs.core.list(new cljs.core.Symbol("clojure.core","ex-info","clojure.core/ex-info",-504237117,null),"Async test error - not finalized",cljs.core.PersistentArrayMap.EMPTY)),null,value__9156__auto___95161,null]));
}

}catch (e93571){var t__9189__auto___95164 = e93571;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol(null,"throw","throw",595905694,null),cljs.core.list(new cljs.core.Symbol("clojure.core","ex-info","clojure.core/ex-info",-504237117,null),"Async test error - not finalized",cljs.core.PersistentArrayMap.EMPTY)),null,t__9189__auto___95164,null]));
}
return cljs.core.deref(mark_as_done__53963__auto__);
}
});
})();
var inst_93213 = setTimeout(inst_93212,(3000));
var inst_93218 = [new cljs.core.Keyword(null,"contents","contents",-1567174023),new cljs.core.Keyword(null,"filename","filename",-1428840783),new cljs.core.Keyword(null,"range","range",1639692286)];
var inst_93219 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_93220 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_93221 = [(1),(19)];
var inst_93222 = (new cljs.core.PersistentVector(null,2,(5),inst_93220,inst_93221,null));
var inst_93224 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_93225 = [(1),(19)];
var inst_93226 = (new cljs.core.PersistentVector(null,2,(5),inst_93224,inst_93225,null));
var inst_93227 = [inst_93222,inst_93226];
var inst_93228 = (new cljs.core.PersistentVector(null,2,(5),inst_93219,inst_93227,null));
var inst_93229 = ["(let [foa 10] foa)\n(let [foo 10] (+ fo))","foo.clj",inst_93228];
var inst_93230 = cljs.core.PersistentHashMap.fromArrays(inst_93218,inst_93229);
var inst_93231__$1 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(inst_93230);
var inst_93232__$1 = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var inst_93233__$1 = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var inst_93234__$1 = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var inst_93236 = [new cljs.core.Keyword(null,"editor-data","editor-data",-2084300305),new cljs.core.Keyword(null,"prompt","prompt",-78109487),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),new cljs.core.Keyword(null,"notify","notify",-1256867814),new cljs.core.Keyword(null,"get-config","get-config",1800808901)];
var inst_93237 = (function (){var mark_as_done__53963__auto__ = inst_93211__$1;
var data = inst_93231__$1;
var res = inst_93232__$1;
var clj = inst_93233__$1;
var cljs__$1 = inst_93234__$1;
return (function (){
return cljs.core.deref(data);
});
})();
var inst_93238 = Promise.resolve("fixture");
var inst_93239 = cljs.core.constantly(inst_93238);
var inst_93240 = [new cljs.core.Keyword(null,"eval-mode","eval-mode",1105308847),new cljs.core.Keyword(null,"project-paths","project-paths",-1637469806)];
var inst_93241 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_93242 = process.cwd();
var inst_93243 = [inst_93242];
var inst_93244 = (new cljs.core.PersistentVector(null,1,(5),inst_93241,inst_93243,null));
var inst_93245 = [new cljs.core.Keyword(null,"prefer-cljs","prefer-cljs",1599484843),inst_93244];
var inst_93246 = cljs.core.PersistentHashMap.fromArrays(inst_93240,inst_93245);
var inst_93247 = cljs.core.constantly(inst_93246);
var inst_93248 = [inst_93237,inst_93239,cljs.core.identity,cljs.core.identity,inst_93247];
var inst_93249 = cljs.core.PersistentHashMap.fromArrays(inst_93236,inst_93248);
var inst_93250 = repl_tooling.editor_integration.connection.connect_BANG_("localhost",(2233),inst_93249);
var inst_93251 = (function (){var mark_as_done__53963__auto__ = inst_93211__$1;
var data = inst_93231__$1;
var res = inst_93232__$1;
var clj = inst_93233__$1;
var cljs__$1 = inst_93234__$1;
return (function (p1__91225_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(res,p1__91225_SHARP_);
});
})();
var inst_93252 = inst_93250.then(inst_93251);
var state_93540__$1 = (function (){var statearr_93646 = state_93540;
(statearr_93646[(19)] = inst_93213);

(statearr_93646[(8)] = inst_93234__$1);

(statearr_93646[(11)] = inst_93233__$1);

(statearr_93646[(13)] = inst_93231__$1);

(statearr_93646[(14)] = inst_93252);

(statearr_93646[(15)] = inst_93232__$1);

(statearr_93646[(16)] = inst_93211__$1);

return statearr_93646;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_93540__$1,(2),inst_93232__$1);
} else {
if((state_val_93541 === (24))){
var _ = (function (){var statearr_93648 = state_93540;
(statearr_93648[(4)] = cljs.core.rest((state_93540[(4)])));

return statearr_93648;
})();
var state_93540__$1 = state_93540;
var ex93563 = (state_93540__$1[(2)]);
var statearr_93649_95182 = state_93540__$1;
(statearr_93649_95182[(5)] = ex93563);


var statearr_93651_95183 = state_93540__$1;
(statearr_93651_95183[(1)] = (23));

(statearr_93651_95183[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_93541 === (4))){
var inst_93264 = (state_93540[(7)]);
var inst_93234 = (state_93540[(8)]);
var inst_93257 = (state_93540[(9)]);
var inst_93263 = (state_93540[(10)]);
var inst_93233 = (state_93540[(11)]);
var inst_93258 = (state_93540[(12)]);
var inst_93231 = (state_93540[(13)]);
var inst_93252 = (state_93540[(14)]);
var inst_93232 = (state_93540[(15)]);
var inst_93211 = (state_93540[(16)]);
var _ = (function (){var statearr_93655 = state_93540;
(statearr_93655[(4)] = cljs.core.cons((6),(state_93540[(4)])));

return statearr_93655;
})();
var ___$1 = (function (){var statearr_93657 = state_93540;
(statearr_93657[(4)] = cljs.core.cons((7),(state_93540[(4)])));

return statearr_93657;
})();
var inst_93284 = (inst_93264.cljs$core$IFn$_invoke$arity$0 ? inst_93264.cljs$core$IFn$_invoke$arity$0() : inst_93264.call(null));
var inst_93285 = (function (){var res = inst_93232;
var autocomplete = inst_93264;
var clj = inst_93233;
var cljs__$1 = inst_93234;
var map__93216 = inst_93257;
var data = inst_93231;
var mark_as_done__53963__auto__ = inst_93211;
var ___$2 = inst_93252;
var connect_embedded = inst_93258;
var map__93217 = inst_93263;
return (function (p1__91226_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(clj,p1__91226_SHARP_);
});
})();
var inst_93286 = inst_93284.then(inst_93285);
var state_93540__$1 = (function (){var statearr_93661 = state_93540;
(statearr_93661[(20)] = inst_93286);

return statearr_93661;
})();
var statearr_93662_95188 = state_93540__$1;
(statearr_93662_95188[(2)] = null);

(statearr_93662_95188[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_93541 === (15))){
var inst_93351 = (state_93540[(21)]);
var inst_93344 = (state_93540[(22)]);
var inst_93354 = (state_93540[(23)]);
var inst_93358 = (state_93540[(2)]);
var inst_93359 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(inst_93351);
var inst_93360 = [inst_93358,inst_93344,inst_93359];
var inst_93361 = cljs.core.PersistentHashMap.fromArrays(inst_93354,inst_93360);
var inst_93362 = cljs.test.do_report(inst_93361);
var _ = (function (){var statearr_93664 = state_93540;
(statearr_93664[(4)] = cljs.core.rest((state_93540[(4)])));

return statearr_93664;
})();
var state_93540__$1 = state_93540;
var statearr_93665_95191 = state_93540__$1;
(statearr_93665_95191[(2)] = inst_93362);

(statearr_93665_95191[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_93541 === (21))){
var inst_93234 = (state_93540[(8)]);
var _ = (function (){var statearr_93667 = state_93540;
(statearr_93667[(4)] = cljs.core.cons((24),(state_93540[(4)])));

return statearr_93667;
})();
var state_93540__$1 = state_93540;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_93540__$1,(25),inst_93234);
} else {
if((state_val_93541 === (13))){
var state_93540__$1 = state_93540;
var statearr_93669_95193 = state_93540__$1;
(statearr_93669_95193[(2)] = new cljs.core.Keyword(null,"pass","pass",1574159993));

(statearr_93669_95193[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_93541 === (22))){
var inst_93529 = (state_93540[(2)]);
var _ = (function (){var statearr_93670 = state_93540;
(statearr_93670[(4)] = cljs.core.rest((state_93540[(4)])));

return statearr_93670;
})();
var state_93540__$1 = state_93540;
var statearr_93671_95195 = state_93540__$1;
(statearr_93671_95195[(2)] = inst_93529);

(statearr_93671_95195[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_93541 === (6))){
var _ = (function (){var statearr_93673 = state_93540;
(statearr_93673[(4)] = cljs.core.rest((state_93540[(4)])));

return statearr_93673;
})();
var inst_93271 = (state_93540[(2)]);
var inst_93272 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_93274 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_93275 = (new cljs.core.PersistentVector(null,1,(5),inst_93272,inst_93274,null));
var inst_93276 = cljs.test.update_current_env_BANG_(inst_93275,cljs.core.rest);
var ___$1 = (function (){var temp__5753__auto__ = (state_93540[(5)]);
if(cljs.core.truth_(temp__5753__auto__)){
var e__34184__auto__ = temp__5753__auto__;
throw e__34184__auto__;
} else {
return null;
}
})();
var state_93540__$1 = (function (){var statearr_93675 = state_93540;
(statearr_93675[(24)] = inst_93276);

return statearr_93675;
})();
var statearr_93676_95198 = state_93540__$1;
(statearr_93676_95198[(2)] = inst_93271);

(statearr_93676_95198[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_93541 === (28))){
var inst_93518 = (state_93540[(25)]);
var inst_93515 = (state_93540[(26)]);
var inst_93509 = (state_93540[(27)]);
var inst_93522 = (state_93540[(2)]);
var inst_93523 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(inst_93515);
var inst_93524 = [inst_93522,inst_93509,inst_93523];
var inst_93525 = cljs.core.PersistentHashMap.fromArrays(inst_93518,inst_93524);
var inst_93526 = cljs.test.do_report(inst_93525);
var _ = (function (){var statearr_93679 = state_93540;
(statearr_93679[(4)] = cljs.core.rest((state_93540[(4)])));

return statearr_93679;
})();
var state_93540__$1 = state_93540;
var statearr_93680_95200 = state_93540__$1;
(statearr_93680_95200[(2)] = inst_93526);

(statearr_93680_95200[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_93541 === (25))){
var inst_93493 = (state_93540[(2)]);
var inst_93494 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_93496 = [new cljs.core.Keyword(null,"candidate","candidate",-940308314),new cljs.core.Keyword(null,"type","type",1174270348)];
var inst_93497 = ["foo",new cljs.core.Keyword(null,"local","local",-1497766724)];
var inst_93498 = cljs.core.PersistentHashMap.fromArrays(inst_93496,inst_93497);
var inst_93499 = [new cljs.core.Keyword(null,"candidate","candidate",-940308314),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ns","ns",441598760)];
var inst_93500 = ["for",new cljs.core.Keyword(null,"macro","macro",-867863404),"cljs.core"];
var inst_93501 = cljs.core.PersistentHashMap.fromArrays(inst_93499,inst_93500);
var inst_93502 = [new cljs.core.Keyword(null,"candidate","candidate",-940308314),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ns","ns",441598760)];
var inst_93503 = ["force",new cljs.core.Keyword(null,"function","function",-2127255473),"cljs.core"];
var inst_93504 = cljs.core.PersistentHashMap.fromArrays(inst_93502,inst_93503);
var inst_93505 = [inst_93498,inst_93501,inst_93504];
var inst_93506 = (new cljs.core.PersistentVector(null,3,(5),inst_93494,inst_93505,null));
var inst_93507 = matcher_combinators.matchers.embeds(inst_93506);
var inst_93508 = cljs.core.list(new cljs.core.Symbol("async","<!","async/<!",-1308982001,null),new cljs.core.Symbol(null,"cljs","cljs",-1162018140,null));
var inst_93509 = cljs.core.list(new cljs.core.Symbol(null,"embeds","embeds",-1821086689,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"candidate","candidate",-940308314),"foo",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"local","local",-1497766724)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"candidate","candidate",-940308314),"for",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"macro","macro",-867863404),new cljs.core.Keyword(null,"ns","ns",441598760),"cljs.core"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"candidate","candidate",-940308314),"force",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"function","function",-2127255473),new cljs.core.Keyword(null,"ns","ns",441598760),"cljs.core"], null)], null));
var inst_93510 = matcher_combinators.core.match(inst_93507,inst_93493);
var inst_93512 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_93493], 0));
var inst_93513 = new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(inst_93510);
var inst_93514 = matcher_combinators.printer.as_string(inst_93513);
var inst_93515 = [inst_93512,"\n\nMismatch:\n",inst_93514].join('');
var inst_93516 = new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(inst_93510);
var inst_93517 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),inst_93516);
var inst_93518 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363)];
var state_93540__$1 = (function (){var statearr_93722 = state_93540;
(statearr_93722[(28)] = inst_93508);

(statearr_93722[(25)] = inst_93518);

(statearr_93722[(26)] = inst_93515);

(statearr_93722[(27)] = inst_93509);

return statearr_93722;
})();
if(inst_93517){
var statearr_93730_95208 = state_93540__$1;
(statearr_93730_95208[(1)] = (26));

} else {
var statearr_93743_95210 = state_93540__$1;
(statearr_93743_95210[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_93541 === (17))){
var inst_93211 = (state_93540[(16)]);
var inst_93532 = (state_93540[(2)]);
var inst_93534 = cljs.core.deref(inst_93211);
var state_93540__$1 = (function (){var statearr_93752 = state_93540;
(statearr_93752[(29)] = inst_93532);

return statearr_93752;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_93540__$1,inst_93534);
} else {
if((state_val_93541 === (3))){
var inst_93263 = (state_93540[(10)]);
var inst_93260 = (state_93540[(2)]);
var inst_93261 = cljs.core.deref(inst_93260);
var inst_93262 = new cljs.core.Keyword("editor","features","editor/features",1302258665).cljs$core$IFn$_invoke$arity$1(inst_93261);
var inst_93263__$1 = cljs.core.__destructure_map(inst_93262);
var inst_93264 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_93263__$1,new cljs.core.Keyword(null,"autocomplete","autocomplete",1041133913));
var inst_93266 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_93267 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_93268 = (new cljs.core.PersistentVector(null,1,(5),inst_93266,inst_93267,null));
var inst_93269 = cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(inst_93268,cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Clojure"], 0));
var state_93540__$1 = (function (){var statearr_93867 = state_93540;
(statearr_93867[(7)] = inst_93264);

(statearr_93867[(30)] = inst_93269);

(statearr_93867[(10)] = inst_93263__$1);

return statearr_93867;
})();
var statearr_93869_95212 = state_93540__$1;
(statearr_93869_95212[(2)] = null);

(statearr_93869_95212[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_93541 === (12))){
var inst_93322 = (state_93540[(2)]);
var inst_93323 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_93325 = [new cljs.core.Keyword(null,"candidate","candidate",-940308314),new cljs.core.Keyword(null,"type","type",1174270348)];
var inst_93326 = ["foo",new cljs.core.Keyword(null,"local","local",-1497766724)];
var inst_93327 = cljs.core.PersistentHashMap.fromArrays(inst_93325,inst_93326);
var inst_93328 = [new cljs.core.Keyword(null,"candidate","candidate",-940308314),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ns","ns",441598760)];
var inst_93330 = ["for",new cljs.core.Keyword(null,"macro","macro",-867863404),"clojure.core"];
var inst_93331 = cljs.core.PersistentHashMap.fromArrays(inst_93328,inst_93330);
var inst_93333 = [new cljs.core.Keyword(null,"candidate","candidate",-940308314),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ns","ns",441598760)];
var inst_93335 = ["force",new cljs.core.Keyword(null,"function","function",-2127255473),"clojure.core"];
var inst_93336 = cljs.core.PersistentHashMap.fromArrays(inst_93333,inst_93335);
var inst_93337 = [new cljs.core.Keyword(null,"candidate","candidate",-940308314),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ns","ns",441598760)];
var inst_93338 = ["format",new cljs.core.Keyword(null,"function","function",-2127255473),"clojure.core"];
var inst_93339 = cljs.core.PersistentHashMap.fromArrays(inst_93337,inst_93338);
var inst_93340 = [inst_93327,inst_93331,inst_93336,inst_93339];
var inst_93341 = (new cljs.core.PersistentVector(null,4,(5),inst_93323,inst_93340,null));
var inst_93342 = matcher_combinators.matchers.embeds(inst_93341);
var inst_93343 = cljs.core.list(new cljs.core.Symbol("async","<!","async/<!",-1308982001,null),new cljs.core.Symbol(null,"clj","clj",980036099,null));
var inst_93344 = cljs.core.list(new cljs.core.Symbol(null,"embeds","embeds",-1821086689,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"candidate","candidate",-940308314),"foo",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"local","local",-1497766724)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"candidate","candidate",-940308314),"for",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"macro","macro",-867863404),new cljs.core.Keyword(null,"ns","ns",441598760),"clojure.core"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"candidate","candidate",-940308314),"force",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"function","function",-2127255473),new cljs.core.Keyword(null,"ns","ns",441598760),"clojure.core"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"candidate","candidate",-940308314),"format",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"function","function",-2127255473),new cljs.core.Keyword(null,"ns","ns",441598760),"clojure.core"], null)], null));
var inst_93345 = matcher_combinators.core.match(inst_93342,inst_93322);
var inst_93348 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_93322], 0));
var inst_93349 = new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(inst_93345);
var inst_93350 = matcher_combinators.printer.as_string(inst_93349);
var inst_93351 = [inst_93348,"\n\nMismatch:\n",inst_93350].join('');
var inst_93352 = new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(inst_93345);
var inst_93353 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),inst_93352);
var inst_93354 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363)];
var state_93540__$1 = (function (){var statearr_93873 = state_93540;
(statearr_93873[(31)] = inst_93343);

(statearr_93873[(21)] = inst_93351);

(statearr_93873[(22)] = inst_93344);

(statearr_93873[(23)] = inst_93354);

return statearr_93873;
})();
if(inst_93353){
var statearr_93876_95218 = state_93540__$1;
(statearr_93876_95218[(1)] = (13));

} else {
var statearr_93878_95219 = state_93540__$1;
(statearr_93878_95219[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_93541 === (2))){
var inst_93257 = (state_93540[(9)]);
var inst_93232 = (state_93540[(15)]);
var inst_93254 = (state_93540[(2)]);
var inst_93255 = cljs.core.deref(inst_93254);
var inst_93256 = new cljs.core.Keyword("editor","commands","editor/commands",1134888579).cljs$core$IFn$_invoke$arity$1(inst_93255);
var inst_93257__$1 = cljs.core.__destructure_map(inst_93256);
var inst_93258 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_93257__$1,new cljs.core.Keyword(null,"connect-embedded","connect-embedded",610098730));
var state_93540__$1 = (function (){var statearr_93885 = state_93540;
(statearr_93885[(9)] = inst_93257__$1);

(statearr_93885[(12)] = inst_93258);

return statearr_93885;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_93540__$1,(3),inst_93232);
} else {
if((state_val_93541 === (23))){
var inst_93402 = (state_93540[(2)]);
var inst_93404 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_93405 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_93407 = [new cljs.core.Keyword(null,"candidate","candidate",-940308314),new cljs.core.Keyword(null,"type","type",1174270348)];
var inst_93408 = ["foo",new cljs.core.Keyword(null,"local","local",-1497766724)];
var inst_93409 = cljs.core.PersistentHashMap.fromArrays(inst_93407,inst_93408);
var inst_93410 = [new cljs.core.Keyword(null,"candidate","candidate",-940308314),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ns","ns",441598760)];
var inst_93411 = ["for",new cljs.core.Keyword(null,"macro","macro",-867863404),"cljs.core"];
var inst_93412 = cljs.core.PersistentHashMap.fromArrays(inst_93410,inst_93411);
var inst_93468 = [new cljs.core.Keyword(null,"candidate","candidate",-940308314),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ns","ns",441598760)];
var inst_93469 = ["force",new cljs.core.Keyword(null,"function","function",-2127255473),"cljs.core"];
var inst_93470 = cljs.core.PersistentHashMap.fromArrays(inst_93468,inst_93469);
var inst_93471 = [inst_93409,inst_93412,inst_93470];
var inst_93472 = (new cljs.core.PersistentVector(null,3,(5),inst_93405,inst_93471,null));
var inst_93473 = matcher_combinators.matchers.embeds(inst_93472);
var inst_93474 = check.core.normalize_error(inst_93402);
var inst_93476 = cljs.core.list(new cljs.core.Symbol("async","<!","async/<!",-1308982001,null),new cljs.core.Symbol(null,"cljs","cljs",-1162018140,null));
var inst_93478 = new cljs.core.Symbol(null,"=>","=>",-813269641,null);
var inst_93479 = cljs.core.list(new cljs.core.Symbol(null,"embeds","embeds",-1821086689,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"candidate","candidate",-940308314),"foo",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"local","local",-1497766724)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"candidate","candidate",-940308314),"for",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"macro","macro",-867863404),new cljs.core.Keyword(null,"ns","ns",441598760),"cljs.core"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"candidate","candidate",-940308314),"force",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"function","function",-2127255473),new cljs.core.Keyword(null,"ns","ns",441598760),"cljs.core"], null)], null));
var inst_93480 = ["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_93476)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_93478)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_93479)].join('');
var inst_93481 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_93473,inst_93474,inst_93480];
var inst_93482 = cljs.core.PersistentHashMap.fromArrays(inst_93404,inst_93481);
var inst_93483 = cljs.test.do_report(inst_93482);
var state_93540__$1 = state_93540;
var statearr_93897_95223 = state_93540__$1;
(statearr_93897_95223[(2)] = inst_93483);

(statearr_93897_95223[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_93541 === (19))){
var _ = (function (){var statearr_93898 = state_93540;
(statearr_93898[(4)] = cljs.core.rest((state_93540[(4)])));

return statearr_93898;
})();
var state_93540__$1 = state_93540;
var ex93881 = (state_93540__$1[(2)]);
var statearr_93899_95226 = state_93540__$1;
(statearr_93899_95226[(5)] = ex93881);


throw ex93881;


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_93541 === (11))){
var _ = (function (){var statearr_93901 = state_93540;
(statearr_93901[(4)] = cljs.core.rest((state_93540[(4)])));

return statearr_93901;
})();
var state_93540__$1 = state_93540;
var ex93887 = (state_93540__$1[(2)]);
var statearr_93903_95228 = state_93540__$1;
(statearr_93903_95228[(5)] = ex93887);


var statearr_93905_95229 = state_93540__$1;
(statearr_93905_95229[(1)] = (10));

(statearr_93905_95229[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_93541 === (9))){
var inst_93365 = (state_93540[(2)]);
var _ = (function (){var statearr_93907 = state_93540;
(statearr_93907[(4)] = cljs.core.rest((state_93540[(4)])));

return statearr_93907;
})();
var state_93540__$1 = state_93540;
var statearr_93910_95230 = state_93540__$1;
(statearr_93910_95230[(2)] = inst_93365);

(statearr_93910_95230[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_93541 === (5))){
var inst_93368 = (state_93540[(2)]);
var inst_93370 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_93371 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_93372 = (new cljs.core.PersistentVector(null,1,(5),inst_93370,inst_93371,null));
var inst_93373 = cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(inst_93372,cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["ClojureScript"], 0));
var state_93540__$1 = (function (){var statearr_93913 = state_93540;
(statearr_93913[(32)] = inst_93368);

(statearr_93913[(33)] = inst_93373);

return statearr_93913;
})();
var statearr_93915_95233 = state_93540__$1;
(statearr_93915_95233[(2)] = null);

(statearr_93915_95233[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_93541 === (14))){
var state_93540__$1 = state_93540;
var statearr_93918_95234 = state_93540__$1;
(statearr_93918_95234[(2)] = new cljs.core.Keyword(null,"fail","fail",1706214930));

(statearr_93918_95234[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_93541 === (26))){
var state_93540__$1 = state_93540;
var statearr_93921_95235 = state_93540__$1;
(statearr_93921_95235[(2)] = new cljs.core.Keyword(null,"pass","pass",1574159993));

(statearr_93921_95235[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_93541 === (16))){
var inst_93264 = (state_93540[(7)]);
var inst_93234 = (state_93540[(8)]);
var inst_93257 = (state_93540[(9)]);
var inst_93263 = (state_93540[(10)]);
var inst_93233 = (state_93540[(11)]);
var inst_93258 = (state_93540[(12)]);
var inst_93231 = (state_93540[(13)]);
var inst_93252 = (state_93540[(14)]);
var inst_93232 = (state_93540[(15)]);
var inst_93211 = (state_93540[(16)]);
var _ = (function (){var statearr_94032 = state_93540;
(statearr_94032[(4)] = cljs.core.cons((18),(state_93540[(4)])));

return statearr_94032;
})();
var ___$1 = (function (){var statearr_94034 = state_93540;
(statearr_94034[(4)] = cljs.core.cons((19),(state_93540[(4)])));

return statearr_94034;
})();
var inst_93388 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inst_93231,cljs.core.assoc,new cljs.core.Keyword(null,"filename","filename",-1428840783),"foo.cljs");
var inst_93390 = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var inst_93392 = new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(inst_93258);
var inst_93393 = (inst_93392.cljs$core$IFn$_invoke$arity$0 ? inst_93392.cljs$core$IFn$_invoke$arity$0() : inst_93392.call(null));
var inst_93394 = (function (){var res = inst_93232;
var autocomplete = inst_93264;
var clj = inst_93233;
var cljs__$1 = inst_93234;
var map__93216 = inst_93257;
var data = inst_93231;
var mark_as_done__53963__auto__ = inst_93211;
var ___$2 = inst_93252;
var connect_embedded = inst_93258;
var map__93217 = inst_93263;
var c = inst_93390;
return (function (p1__91227_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,p1__91227_SHARP_);
});
})();
var inst_93395 = inst_93393.then(inst_93394);
var state_93540__$1 = (function (){var statearr_94038 = state_93540;
(statearr_94038[(34)] = inst_93388);

(statearr_94038[(35)] = inst_93395);

return statearr_94038;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_93540__$1,(20),inst_93390);
} else {
if((state_val_93541 === (10))){
var inst_93287 = (state_93540[(2)]);
var inst_93288 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_93289 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_93290 = [new cljs.core.Keyword(null,"candidate","candidate",-940308314),new cljs.core.Keyword(null,"type","type",1174270348)];
var inst_93291 = ["foo",new cljs.core.Keyword(null,"local","local",-1497766724)];
var inst_93292 = cljs.core.PersistentHashMap.fromArrays(inst_93290,inst_93291);
var inst_93293 = [new cljs.core.Keyword(null,"candidate","candidate",-940308314),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ns","ns",441598760)];
var inst_93294 = ["for",new cljs.core.Keyword(null,"macro","macro",-867863404),"clojure.core"];
var inst_93295 = cljs.core.PersistentHashMap.fromArrays(inst_93293,inst_93294);
var inst_93297 = [new cljs.core.Keyword(null,"candidate","candidate",-940308314),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ns","ns",441598760)];
var inst_93298 = ["force",new cljs.core.Keyword(null,"function","function",-2127255473),"clojure.core"];
var inst_93299 = cljs.core.PersistentHashMap.fromArrays(inst_93297,inst_93298);
var inst_93302 = [new cljs.core.Keyword(null,"candidate","candidate",-940308314),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ns","ns",441598760)];
var inst_93303 = ["format",new cljs.core.Keyword(null,"function","function",-2127255473),"clojure.core"];
var inst_93304 = cljs.core.PersistentHashMap.fromArrays(inst_93302,inst_93303);
var inst_93305 = [inst_93292,inst_93295,inst_93299,inst_93304];
var inst_93306 = (new cljs.core.PersistentVector(null,4,(5),inst_93289,inst_93305,null));
var inst_93307 = matcher_combinators.matchers.embeds(inst_93306);
var inst_93308 = check.core.normalize_error(inst_93287);
var inst_93309 = cljs.core.list(new cljs.core.Symbol("async","<!","async/<!",-1308982001,null),new cljs.core.Symbol(null,"clj","clj",980036099,null));
var inst_93310 = new cljs.core.Symbol(null,"=>","=>",-813269641,null);
var inst_93311 = cljs.core.list(new cljs.core.Symbol(null,"embeds","embeds",-1821086689,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"candidate","candidate",-940308314),"foo",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"local","local",-1497766724)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"candidate","candidate",-940308314),"for",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"macro","macro",-867863404),new cljs.core.Keyword(null,"ns","ns",441598760),"clojure.core"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"candidate","candidate",-940308314),"force",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"function","function",-2127255473),new cljs.core.Keyword(null,"ns","ns",441598760),"clojure.core"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"candidate","candidate",-940308314),"format",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"function","function",-2127255473),new cljs.core.Keyword(null,"ns","ns",441598760),"clojure.core"], null)], null));
var inst_93312 = ["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_93309)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_93310)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_93311)].join('');
var inst_93313 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_93307,inst_93308,inst_93312];
var inst_93314 = cljs.core.PersistentHashMap.fromArrays(inst_93288,inst_93313);
var inst_93315 = cljs.test.do_report(inst_93314);
var state_93540__$1 = state_93540;
var statearr_94044_95248 = state_93540__$1;
(statearr_94044_95248[(2)] = inst_93315);

(statearr_94044_95248[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_93541 === (18))){
var _ = (function (){var statearr_94046 = state_93540;
(statearr_94046[(4)] = cljs.core.rest((state_93540[(4)])));

return statearr_94046;
})();
var inst_93375 = (state_93540[(2)]);
var inst_93376 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_93377 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_93378 = (new cljs.core.PersistentVector(null,1,(5),inst_93376,inst_93377,null));
var inst_93379 = cljs.test.update_current_env_BANG_(inst_93378,cljs.core.rest);
var ___$1 = (function (){var temp__5753__auto__ = (state_93540[(5)]);
if(cljs.core.truth_(temp__5753__auto__)){
var e__34184__auto__ = temp__5753__auto__;
throw e__34184__auto__;
} else {
return null;
}
})();
var state_93540__$1 = (function (){var statearr_94050 = state_93540;
(statearr_94050[(36)] = inst_93379);

return statearr_94050;
})();
var statearr_94052_95254 = state_93540__$1;
(statearr_94052_95254[(2)] = inst_93375);

(statearr_94052_95254[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_93541 === (8))){
var inst_93233 = (state_93540[(11)]);
var _ = (function (){var statearr_94054 = state_93540;
(statearr_94054[(4)] = cljs.core.cons((11),(state_93540[(4)])));

return statearr_94054;
})();
var state_93540__$1 = state_93540;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_93540__$1,(12),inst_93233);
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
});
return (function() {
var repl_tooling$editor_integration$autocomplete_test$state_machine__34940__auto__ = null;
var repl_tooling$editor_integration$autocomplete_test$state_machine__34940__auto____0 = (function (){
var statearr_94061 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_94061[(0)] = repl_tooling$editor_integration$autocomplete_test$state_machine__34940__auto__);

(statearr_94061[(1)] = (1));

return statearr_94061;
});
var repl_tooling$editor_integration$autocomplete_test$state_machine__34940__auto____1 = (function (state_93540){
while(true){
var ret_value__34941__auto__ = (function (){try{while(true){
var result__34942__auto__ = switch__34939__auto__(state_93540);
if(cljs.core.keyword_identical_QMARK_(result__34942__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34942__auto__;
}
break;
}
}catch (e94062){var ex__34943__auto__ = e94062;
var statearr_94063_95257 = state_93540;
(statearr_94063_95257[(2)] = ex__34943__auto__);


if(cljs.core.seq((state_93540[(4)]))){
var statearr_94064_95259 = state_93540;
(statearr_94064_95259[(1)] = cljs.core.first((state_93540[(4)])));

} else {
throw ex__34943__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34941__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__95260 = state_93540;
state_93540 = G__95260;
continue;
} else {
return ret_value__34941__auto__;
}
break;
}
});
repl_tooling$editor_integration$autocomplete_test$state_machine__34940__auto__ = function(state_93540){
switch(arguments.length){
case 0:
return repl_tooling$editor_integration$autocomplete_test$state_machine__34940__auto____0.call(this);
case 1:
return repl_tooling$editor_integration$autocomplete_test$state_machine__34940__auto____1.call(this,state_93540);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
repl_tooling$editor_integration$autocomplete_test$state_machine__34940__auto__.cljs$core$IFn$_invoke$arity$0 = repl_tooling$editor_integration$autocomplete_test$state_machine__34940__auto____0;
repl_tooling$editor_integration$autocomplete_test$state_machine__34940__auto__.cljs$core$IFn$_invoke$arity$1 = repl_tooling$editor_integration$autocomplete_test$state_machine__34940__auto____1;
return repl_tooling$editor_integration$autocomplete_test$state_machine__34940__auto__;
})()
})();
var state__35943__auto__ = (function (){var statearr_94068 = f__35942__auto__();
(statearr_94068[(6)] = c__35941__auto__);

return statearr_94068;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35943__auto__);
}));

return c__35941__auto__;
}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}}));

(repl_tooling.editor_integration.autocomplete_test.t_repl_tooling$editor_integration$autocomplete_test92319.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta92320","meta92320",1185406125,null)], null);
}));

(repl_tooling.editor_integration.autocomplete_test.t_repl_tooling$editor_integration$autocomplete_test92319.cljs$lang$type = true);

(repl_tooling.editor_integration.autocomplete_test.t_repl_tooling$editor_integration$autocomplete_test92319.cljs$lang$ctorStr = "repl-tooling.editor-integration.autocomplete-test/t_repl_tooling$editor_integration$autocomplete_test92319");

(repl_tooling.editor_integration.autocomplete_test.t_repl_tooling$editor_integration$autocomplete_test92319.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"repl-tooling.editor-integration.autocomplete-test/t_repl_tooling$editor_integration$autocomplete_test92319");
}));

/**
 * Positional factory function for repl-tooling.editor-integration.autocomplete-test/t_repl_tooling$editor_integration$autocomplete_test92319.
 */
repl_tooling.editor_integration.autocomplete_test.__GT_t_repl_tooling$editor_integration$autocomplete_test92319 = (function repl_tooling$editor_integration$autocomplete_test$__GT_t_repl_tooling$editor_integration$autocomplete_test92319(meta92320){
return (new repl_tooling.editor_integration.autocomplete_test.t_repl_tooling$editor_integration$autocomplete_test92319(meta92320));
});

}

return (new repl_tooling.editor_integration.autocomplete_test.t_repl_tooling$editor_integration$autocomplete_test92319(null));
});

(repl_tooling.editor_integration.autocomplete_test.autodetection_of_autocomplete.cljs$lang$var = new cljs.core.Var(function(){return repl_tooling.editor_integration.autocomplete_test.autodetection_of_autocomplete;},new cljs.core.Symbol("repl-tooling.editor-integration.autocomplete-test","autodetection-of-autocomplete","repl-tooling.editor-integration.autocomplete-test/autodetection-of-autocomplete",-121175428,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"repl-tooling.editor-integration.autocomplete-test","repl-tooling.editor-integration.autocomplete-test",-1212724817,null),new cljs.core.Symbol(null,"autodetection-of-autocomplete","autodetection-of-autocomplete",-1454545635,null),"repl_tooling/editor_integration/autocomplete_test.cljs",45,1,14,14,cljs.core.List.EMPTY,null,(cljs.core.truth_(repl_tooling.editor_integration.autocomplete_test.autodetection_of_autocomplete)?repl_tooling.editor_integration.autocomplete_test.autodetection_of_autocomplete.cljs$lang$test:null)])));

//# sourceMappingURL=repl_tooling.editor_integration.autocomplete_test.js.map
