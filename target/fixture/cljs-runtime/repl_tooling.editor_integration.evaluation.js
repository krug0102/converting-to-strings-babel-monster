goog.provide('repl_tooling.editor_integration.evaluation');
repl_tooling.editor_integration.evaluation.get_code = (function repl_tooling$editor_integration$evaluation$get_code(editor_state,kind){
return promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(repl_tooling.editor_integration.commands.run_callback_BANG_(editor_state,new cljs.core.Keyword(null,"editor-data","editor-data",-2084300305)),(function (data){
return promesa.protocols._bind(null,(function (___31810__auto__){
return promesa.protocols._promise((function (){var temp__5753__auto__ = data;
if(cljs.core.truth_(temp__5753__auto__)){
var map__137197 = temp__5753__auto__;
var map__137197__$1 = cljs.core.__destructure_map(map__137197);
var contents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__137197__$1,new cljs.core.Keyword(null,"contents","contents",-1567174023));
var range = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__137197__$1,new cljs.core.Keyword(null,"range","range",1639692286));
var temp__5753__auto____$1 = (function (){var G__137208 = kind;
var G__137208__$1 = (((G__137208 instanceof cljs.core.Keyword))?G__137208.fqn:null);
switch (G__137208__$1) {
case "top-block":
return repl_tooling.editor_helpers.top_block_for(contents,cljs.core.first(range));

break;
case "block":
var G__137222 = contents;
var G__137223 = cljs.core.first(range);
return (repl_tooling.editor_helpers.block_for.cljs$core$IFn$_invoke$arity$2 ? repl_tooling.editor_helpers.block_for.cljs$core$IFn$_invoke$arity$2(G__137222,G__137223) : repl_tooling.editor_helpers.block_for.call(null,G__137222,G__137223));

break;
case "var":
var G__137228 = contents;
var G__137229 = cljs.core.first(range);
return (repl_tooling.editor_helpers.current_var.cljs$core$IFn$_invoke$arity$2 ? repl_tooling.editor_helpers.current_var.cljs$core$IFn$_invoke$arity$2(G__137228,G__137229) : repl_tooling.editor_helpers.current_var.call(null,G__137228,G__137229));

break;
case "selection":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [range,(repl_tooling.editor_helpers.text_in_range.cljs$core$IFn$_invoke$arity$2 ? repl_tooling.editor_helpers.text_in_range.cljs$core$IFn$_invoke$arity$2(contents,range) : repl_tooling.editor_helpers.text_in_range.call(null,contents,range))], null);

break;
case "ns":
return repl_tooling.editor_helpers.ns_range_for(contents,cljs.core.first(range));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__137208__$1)].join('')));

}
})();
if(cljs.core.truth_(temp__5753__auto____$1)){
var vec__137251 = temp__5753__auto____$1;
var range__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__137251,(0),null);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__137251,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),text,new cljs.core.Keyword(null,"range","range",1639692286),range__$1], null);
} else {
return null;
}
} else {
return null;
}
})());
}));
}));
}));
});
repl_tooling.editor_integration.evaluation.need_cljs_QMARK_ = (function repl_tooling$editor_integration$evaluation$need_cljs_QMARK_(config,filename){
var or__4223__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"eval-mode","eval-mode",1105308847).cljs$core$IFn$_invoke$arity$1(config),new cljs.core.Keyword(null,"cljs","cljs",1492417629));
if(or__4223__auto__){
return or__4223__auto__;
} else {
var or__4223__auto____$1 = (function (){var and__4221__auto__ = (function (){var G__137308 = new cljs.core.Keyword(null,"eval-mode","eval-mode",1105308847).cljs$core$IFn$_invoke$arity$1(config);
var fexpr__137307 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"prefer-clj","prefer-clj",-124166522),null,new cljs.core.Keyword(null,"prefer-cljs","prefer-cljs",1599484843),null], null), null);
return (fexpr__137307.cljs$core$IFn$_invoke$arity$1 ? fexpr__137307.cljs$core$IFn$_invoke$arity$1(G__137308) : fexpr__137307.call(null,G__137308));
})();
if(cljs.core.truth_(and__4221__auto__)){
return clojure.string.ends_with_QMARK_(cljs.core.str.cljs$core$IFn$_invoke$arity$1(filename),".cljs");
} else {
return and__4221__auto__;
}
})();
if(cljs.core.truth_(or__4223__auto____$1)){
return or__4223__auto____$1;
} else {
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"eval-mode","eval-mode",1105308847).cljs$core$IFn$_invoke$arity$1(config),new cljs.core.Keyword(null,"prefer-cljs","prefer-cljs",1599484843))) && (((clojure.string.ends_with_QMARK_(cljs.core.str.cljs$core$IFn$_invoke$arity$1(filename),".cljs")) || (((clojure.string.ends_with_QMARK_(cljs.core.str.cljs$core$IFn$_invoke$arity$1(filename),".cljc")) || (clojure.string.ends_with_QMARK_(cljs.core.str.cljs$core$IFn$_invoke$arity$1(filename),".cljx")))))));
}
}
});
repl_tooling.editor_integration.evaluation.treat_error = (function repl_tooling$editor_integration$evaluation$treat_error(notify_BANG_,cljs_QMARK_,clj_connected_QMARK_){
var msg = (cljs.core.truth_((function (){var and__4221__auto__ = cljs_QMARK_;
if(cljs.core.truth_(and__4221__auto__)){
return clj_connected_QMARK_;
} else {
return and__4221__auto__;
}
})())?["REPL not connected for ClojureScript.\n\n","You can connect a REPL using 'Connect Socket REPL' ","command, or 'Connect Embedded' command"].join(''):(cljs.core.truth_(cljs_QMARK_)?["REPL not connected for ClojureScript.\n\n","You can connect a REPL using 'Connect Socket REPL' ","command, or by connecting a Clojure REPL and running ","'Connect Embedded' command"].join(''):["REPL not connected for Clojure\n\n","You can connect a REPL by running 'Connect Socket REPL' command"].join('')
));
var G__137394_138295 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"title","title",636505583),"REPL not connected",new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
(notify_BANG_.cljs$core$IFn$_invoke$arity$1 ? notify_BANG_.cljs$core$IFn$_invoke$arity$1(G__137394_138295) : notify_BANG_.call(null,G__137394_138295));

return null;
});
var ufv___138296 = schema.utils.use_fn_validation;
var output_schema137414_138297 = schema.core.Any;
var input_schema137416_138298 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.one(schema.core.maybe(schema.core.Str),cljs.core.with_meta(new cljs.core.Symbol(null,"filename","filename",211690744,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","maybe","s/maybe",1326133944,null),new cljs.core.Symbol("s","Str","s/Str",907974338,null))], null))),schema.core.one(repl_tooling.editor_integration.schemas.AuxOptions,cljs.core.with_meta(new cljs.core.Symbol(null,"aux?","aux?",-480229891,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schemas","AuxOptions","schemas/AuxOptions",1798073301,null)], null)))], null);
var input_checker137417_138299 = (new cljs.core.Delay((function (){
return schema.core.checker(input_schema137416_138298);
}),null));
var output_checker137418_138300 = (new cljs.core.Delay((function (){
return schema.core.checker(output_schema137414_138297);
}),null));
var ret__40409__auto___138303 = /**
 * Inputs: [state filename :- (s/maybe s/Str) aux? :- schemas/AuxOptions]
 *   Returns: s/Any
 */
repl_tooling.editor_integration.evaluation.repl_for = (function repl_tooling$editor_integration$evaluation$repl_for(G__137421,G__137423,G__137424){
var validate__38124__auto__ = cljs.core.deref(ufv___138296);
if(cljs.core.truth_(validate__38124__auto__)){
var args__38125__auto___138304 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__137421,G__137423,G__137424], null);
if(cljs.core.truth_(schema.core.fn_validator)){
var G__137496_138305 = new cljs.core.Keyword(null,"input","input",556931961);
var G__137497_138306 = cljs.core.with_meta(new cljs.core.Symbol(null,"repl-for","repl-for",-1229510607,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null));
var G__137498_138307 = input_schema137416_138298;
var G__137499_138308 = cljs.core.deref(input_checker137417_138299);
var G__137500_138309 = args__38125__auto___138304;
(schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5 ? schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5(G__137496_138305,G__137497_138306,G__137498_138307,G__137499_138308,G__137500_138309) : schema.core.fn_validator.call(null,G__137496_138305,G__137497_138306,G__137498_138307,G__137499_138308,G__137500_138309));
} else {
var temp__5753__auto___138310 = (function (){var fexpr__137510 = cljs.core.deref(input_checker137417_138299);
return (fexpr__137510.cljs$core$IFn$_invoke$arity$1 ? fexpr__137510.cljs$core$IFn$_invoke$arity$1(args__38125__auto___138304) : fexpr__137510.call(null,args__38125__auto___138304));
})();
if(cljs.core.truth_(temp__5753__auto___138310)){
var error__38126__auto___138312 = temp__5753__auto___138310;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.with_meta(new cljs.core.Symbol(null,"repl-for","repl-for",-1229510607,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([error__38126__auto___138312], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema137416_138298,new cljs.core.Keyword(null,"value","value",305978217),args__38125__auto___138304,new cljs.core.Keyword(null,"error","error",-978969032),error__38126__auto___138312], null));
} else {
}
}
} else {
}

var o__38127__auto__ = (function (){var state = G__137421;
var filename = G__137423;
var aux_QMARK_ = G__137424;
while(true){
var cljs_QMARK_ = repl_tooling.editor_integration.evaluation.need_cljs_QMARK_(repl_tooling.editor_integration.commands.run_callback_BANG_(state,new cljs.core.Keyword(null,"get-config","get-config",1800808901)),filename);
var repl = (cljs.core.truth_((function (){var and__4221__auto__ = cljs_QMARK_;
if(cljs.core.truth_(and__4221__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(aux_QMARK_,new cljs.core.Keyword(null,"always","always",-1772028770));
} else {
return and__4221__auto__;
}
})())?new cljs.core.Keyword("cljs","repl","cljs/repl",-36497565).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)):(cljs.core.truth_(aux_QMARK_)?new cljs.core.Keyword("clj","aux","clj/aux",-10310625).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)):new cljs.core.Keyword("clj","repl","clj/repl",-35234538).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state))
));
if((repl == null)){
return repl_tooling.editor_integration.evaluation.treat_error(((function (cljs_QMARK_,repl,validate__38124__auto__,ufv___138296,output_schema137414_138297,input_schema137416_138298,input_checker137417_138299,output_checker137418_138300){
return (function (p1__137413_SHARP_){
return repl_tooling.editor_integration.commands.run_callback_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword(null,"notify","notify",-1256867814),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__137413_SHARP_], 0));
});})(cljs_QMARK_,repl,validate__38124__auto__,ufv___138296,output_schema137414_138297,input_schema137416_138298,input_checker137417_138299,output_checker137418_138300))
,cljs_QMARK_,new cljs.core.Keyword("clj","repl","clj/repl",-35234538).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)));
} else {
return repl;
}
break;
}
})();
if(cljs.core.truth_(validate__38124__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
var G__137571_138316 = new cljs.core.Keyword(null,"output","output",-1105869043);
var G__137572_138317 = cljs.core.with_meta(new cljs.core.Symbol(null,"repl-for","repl-for",-1229510607,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null));
var G__137573_138318 = output_schema137414_138297;
var G__137574_138319 = cljs.core.deref(output_checker137418_138300);
var G__137575_138320 = o__38127__auto__;
(schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5 ? schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5(G__137571_138316,G__137572_138317,G__137573_138318,G__137574_138319,G__137575_138320) : schema.core.fn_validator.call(null,G__137571_138316,G__137572_138317,G__137573_138318,G__137574_138319,G__137575_138320));
} else {
var temp__5753__auto___138322 = (function (){var fexpr__137588 = cljs.core.deref(output_checker137418_138300);
return (fexpr__137588.cljs$core$IFn$_invoke$arity$1 ? fexpr__137588.cljs$core$IFn$_invoke$arity$1(o__38127__auto__) : fexpr__137588.call(null,o__38127__auto__));
})();
if(cljs.core.truth_(temp__5753__auto___138322)){
var error__38126__auto___138323 = temp__5753__auto___138322;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.with_meta(new cljs.core.Symbol(null,"repl-for","repl-for",-1229510607,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([error__38126__auto___138323], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema137414_138297,new cljs.core.Keyword(null,"value","value",305978217),o__38127__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__38126__auto___138323], null));
} else {
}
}
} else {
}

return o__38127__auto__;
});
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(repl_tooling.editor_integration.evaluation.repl_for),schema.core.__GT_FnSchema(output_schema137414_138297,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema137416_138298], null)));

var ufv___138356 = schema.utils.use_fn_validation;
var output_schema137638_138357 = schema.core.Any;
var input_schema137644_138358 = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(repl_tooling.editor_integration.schemas.EditorState,cljs.core.with_meta(new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schemas","EditorState","schemas/EditorState",807360483,null)], null))),schema.core.one(schema.core.Str,cljs.core.with_meta(new cljs.core.Symbol(null,"code","code",-1068142627,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Str","s/Str",907974338,null)], null))),schema.core.one(schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"namespace","namespace",1263021155,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.one(repl_tooling.editor_integration.schemas.Range,cljs.core.with_meta(new cljs.core.Symbol(null,"range","range",-1014743483,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schemas","Range","schemas/Range",2120074999,null)], null))),schema.core.one(repl_tooling.editor_integration.schemas.EditorData,cljs.core.with_meta(new cljs.core.Symbol(null,"editor-data","editor-data",-443768778,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schemas","EditorData","schemas/EditorData",334505549,null)], null))),schema.core.one(repl_tooling.editor_integration.schemas.EvalOpts,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schemas","EvalOpts","schemas/EvalOpts",-11139299,null)], null)))], null);
var input_checker137645_138359 = (new cljs.core.Delay((function (){
return schema.core.checker(input_schema137644_138358);
}),null));
var output_checker137646_138360 = (new cljs.core.Delay((function (){
return schema.core.checker(output_schema137638_138357);
}),null));
var ret__40409__auto___138362 = /**
 * Inputs: [state :- schemas/EditorState code :- s/Str namespace range :- schemas/Range editor-data :- schemas/EditorData opts :- schemas/EvalOpts]
 */
repl_tooling.editor_integration.evaluation.eval_cmd = (function repl_tooling$editor_integration$evaluation$eval_cmd(G__137648,G__137649,G__137650,G__137651,G__137652,G__137653){
var validate__38124__auto__ = cljs.core.deref(ufv___138356);
if(cljs.core.truth_(validate__38124__auto__)){
var args__38125__auto___138363 = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__137648,G__137649,G__137650,G__137651,G__137652,G__137653], null);
if(cljs.core.truth_(schema.core.fn_validator)){
var G__137731_138364 = new cljs.core.Keyword(null,"input","input",556931961);
var G__137732_138365 = cljs.core.with_meta(new cljs.core.Symbol(null,"eval-cmd","eval-cmd",-1345880458,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null));
var G__137733_138366 = input_schema137644_138358;
var G__137734_138367 = cljs.core.deref(input_checker137645_138359);
var G__137735_138368 = args__38125__auto___138363;
(schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5 ? schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5(G__137731_138364,G__137732_138365,G__137733_138366,G__137734_138367,G__137735_138368) : schema.core.fn_validator.call(null,G__137731_138364,G__137732_138365,G__137733_138366,G__137734_138367,G__137735_138368));
} else {
var temp__5753__auto___138371 = (function (){var fexpr__137754 = cljs.core.deref(input_checker137645_138359);
return (fexpr__137754.cljs$core$IFn$_invoke$arity$1 ? fexpr__137754.cljs$core$IFn$_invoke$arity$1(args__38125__auto___138363) : fexpr__137754.call(null,args__38125__auto___138363));
})();
if(cljs.core.truth_(temp__5753__auto___138371)){
var error__38126__auto___138373 = temp__5753__auto___138371;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.with_meta(new cljs.core.Symbol(null,"eval-cmd","eval-cmd",-1345880458,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([error__38126__auto___138373], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema137644_138358,new cljs.core.Keyword(null,"value","value",305978217),args__38125__auto___138363,new cljs.core.Keyword(null,"error","error",-978969032),error__38126__auto___138373], null));
} else {
}
}
} else {
}

var o__38127__auto__ = (function (){var state = G__137648;
var code = G__137649;
var namespace = G__137650;
var range = G__137651;
var editor_data = G__137652;
var opts = G__137653;
while(true){
if(cljs.core.truth_(code)){
var prom = promesa.core.deferred();
var filename = new cljs.core.Keyword(null,"filename","filename",-1428840783).cljs$core$IFn$_invoke$arity$1(editor_data);
var map__137790 = new cljs.core.Keyword("editor","callbacks","editor/callbacks",1179124831).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state));
var map__137790__$1 = cljs.core.__destructure_map(map__137790);
var on_start_eval = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__137790__$1,new cljs.core.Keyword(null,"on-start-eval","on-start-eval",-560475418));
var on_eval = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__137790__$1,new cljs.core.Keyword(null,"on-eval","on-eval",-1349336659));
var vec__137791 = range;
var vec__137794 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__137791,(0),null);
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__137794,(0),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__137794,(1),null);
var repl = repl_tooling.editor_integration.evaluation.repl_for(state,filename,new cljs.core.Keyword(null,"aux","aux",-10408640).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pass","pass",1574159993).cljs$core$IFn$_invoke$arity$1(opts)));
var id = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var eval_data = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"editor-data","editor-data",-2084300305),editor_data,new cljs.core.Keyword(null,"range","range",1639692286),range], null);
if(cljs.core.truth_(repl)){
var and__4221__auto___138385 = on_start_eval;
if(cljs.core.truth_(and__4221__auto___138385)){
(on_start_eval.cljs$core$IFn$_invoke$arity$1 ? on_start_eval.cljs$core$IFn$_invoke$arity$1(eval_data) : on_start_eval.call(null,eval_data));
} else {
}

repl_tooling.eval.evaluate(repl,code,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"filename","filename",-1428840783),filename,new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"row","row",-570139521),(row + (1)),new cljs.core.Keyword(null,"col","col",-1959363084),(col + (1)),new cljs.core.Keyword(null,"namespace","namespace",-377510372),namespace], null),opts], 0)),((function (prom,filename,map__137790,map__137790__$1,on_start_eval,on_eval,vec__137791,vec__137794,row,col,repl,id,eval_data,validate__38124__auto__,ufv___138356,output_schema137638_138357,input_schema137644_138358,input_checker137645_138359,output_checker137646_138360){
return (function (p1__137630_SHARP_){
if(cljs.core.truth_((function (){var and__4221__auto__ = on_eval;
if(cljs.core.truth_(and__4221__auto__)){
return cljs.core.deref(state);
} else {
return and__4221__auto__;
}
})())){
var parsed = repl_tooling.editor_helpers.parse_result(p1__137630_SHARP_);
var G__137849_138389 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(eval_data,new cljs.core.Keyword(null,"repl","repl",-35398667),repl,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"result","result",1415092211),parsed], 0));
(on_eval.cljs$core$IFn$_invoke$arity$1 ? on_eval.cljs$core$IFn$_invoke$arity$1(G__137849_138389) : on_eval.call(null,G__137849_138389));

return promesa.core.resolve_BANG_.cljs$core$IFn$_invoke$arity$2(prom,cljs.core.select_keys(parsed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Keyword(null,"error","error",-978969032)], null)));
} else {
return null;
}
});})(prom,filename,map__137790,map__137790__$1,on_start_eval,on_eval,vec__137791,vec__137794,row,col,repl,id,eval_data,validate__38124__auto__,ufv___138356,output_schema137638_138357,input_schema137644_138358,input_checker137645_138359,output_checker137646_138360))
);
} else {
}

if(cljs.core.truth_(repl)){
} else {
promesa.core.resolve_BANG_.cljs$core$IFn$_invoke$arity$2(prom,null);
}

return prom;
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(validate__38124__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
var G__137868_138390 = new cljs.core.Keyword(null,"output","output",-1105869043);
var G__137869_138391 = cljs.core.with_meta(new cljs.core.Symbol(null,"eval-cmd","eval-cmd",-1345880458,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null));
var G__137870_138392 = output_schema137638_138357;
var G__137871_138393 = cljs.core.deref(output_checker137646_138360);
var G__137872_138394 = o__38127__auto__;
(schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5 ? schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5(G__137868_138390,G__137869_138391,G__137870_138392,G__137871_138393,G__137872_138394) : schema.core.fn_validator.call(null,G__137868_138390,G__137869_138391,G__137870_138392,G__137871_138393,G__137872_138394));
} else {
var temp__5753__auto___138396 = (function (){var fexpr__137893 = cljs.core.deref(output_checker137646_138360);
return (fexpr__137893.cljs$core$IFn$_invoke$arity$1 ? fexpr__137893.cljs$core$IFn$_invoke$arity$1(o__38127__auto__) : fexpr__137893.call(null,o__38127__auto__));
})();
if(cljs.core.truth_(temp__5753__auto___138396)){
var error__38126__auto___138397 = temp__5753__auto___138396;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.with_meta(new cljs.core.Symbol(null,"eval-cmd","eval-cmd",-1345880458,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([error__38126__auto___138397], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema137638_138357,new cljs.core.Keyword(null,"value","value",305978217),o__38127__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__38126__auto___138397], null));
} else {
}
}
} else {
}

return o__38127__auto__;
});
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(repl_tooling.editor_integration.evaluation.eval_cmd),schema.core.__GT_FnSchema(output_schema137638_138357,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema137644_138358], null)));

repl_tooling.editor_integration.evaluation.auto_opts = (function repl_tooling$editor_integration$evaluation$auto_opts(editor_data){
return promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind((editor_data.cljs$core$IFn$_invoke$arity$0 ? editor_data.cljs$core$IFn$_invoke$arity$0() : editor_data.call(null)),(function (p__137965){
var map__137968 = p__137965;
var map__137968__$1 = cljs.core.__destructure_map(map__137968);
var filename = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__137968__$1,new cljs.core.Keyword(null,"filename","filename",-1428840783));
var range = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__137968__$1,new cljs.core.Keyword(null,"range","range",1639692286));
var contents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__137968__$1,new cljs.core.Keyword(null,"contents","contents",-1567174023));
return promesa.protocols._bind(range,(function (p__137988){
var vec__137989 = p__137988;
var vec__137992 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__137989,(0),null);
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__137992,(0),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__137992,(1),null);
return promesa.protocols._bind(repl_tooling.editor_helpers.ns_range_for(contents,cljs.core.first(range)),(function (p__138022){
var vec__138024 = p__138022;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__138024,(0),null);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__138024,(1),null);
return promesa.protocols._bind(null,(function (___31810__auto__){
return promesa.protocols._promise(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"filename","filename",-1428840783),filename,new cljs.core.Keyword(null,"namespace","namespace",-377510372),ns,new cljs.core.Keyword(null,"row","row",-570139521),row,new cljs.core.Keyword(null,"col","col",-1959363084),col], null));
}));
}));
}));
}));
}));
});
/**
 * Evaluates the current code and evaluation options on the current REPL.
 * Accepts an extra argument on `eval-opts` that's :aux - if true, evaluates
 * on the 'auxiliary' REPL instead of primary. On Clojure, this means that
 * the code will use UNREPL but will not use ellisions on infinite sequences, etc.
 * 
 * Please notice that because the REPL is auto-detected, `:filename` is required.
 * Otherwise, ClojureScript REPL will never be used! You can also pass `:auto-detect true`
 * to use the current editor state to find all info about current filename, namespace,
 * and row/col.
 * 
 * Will return a 'promise' that is resolved to the eval result, or failed if the
 * eval result is an error. It will also return a fail, with nil, if there's no
 * REPL available
 */
repl_tooling.editor_integration.evaluation.eval_with_promise = (function repl_tooling$editor_integration$evaluation$eval_with_promise(state,code,eval_opts){
return promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(new cljs.core.Keyword(null,"editor-data","editor-data",-2084300305).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("editor","callbacks","editor/callbacks",1179124831).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state))),(function (editor_data){
return promesa.protocols._bind((cljs.core.truth_(new cljs.core.Keyword(null,"auto-detect","auto-detect",-1255603603).cljs$core$IFn$_invoke$arity$1(eval_opts))?repl_tooling.editor_integration.evaluation.auto_opts(editor_data):null),(function (auto_eval_opts){
return promesa.protocols._bind(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([auto_eval_opts,eval_opts], 0)),(function (eval_opts__$1){
return promesa.protocols._bind(null,(function (___31810__auto__){
return promesa.protocols._promise((function (){var temp__5751__auto__ = repl_tooling.editor_integration.evaluation.repl_for(state,new cljs.core.Keyword(null,"filename","filename",-1428840783).cljs$core$IFn$_invoke$arity$1(eval_opts__$1),new cljs.core.Keyword(null,"aux","aux",-10408640).cljs$core$IFn$_invoke$arity$1(eval_opts__$1));
if(cljs.core.truth_(temp__5751__auto__)){
var repl = temp__5751__auto__;
return repl_tooling.eval.eval.cljs$core$IFn$_invoke$arity$3(repl,code,eval_opts__$1);
} else {
return (new Promise((function (_,fail){
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(null) : fail.call(null,null));
})));
}
})());
}));
}));
}));
}));
}));
});
repl_tooling.editor_integration.evaluation.format_test_result = (function repl_tooling$editor_integration$evaluation$format_test_result(p__138117){
var map__138119 = p__138117;
var map__138119__$1 = cljs.core.__destructure_map(map__138119);
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__138119__$1,new cljs.core.Keyword(null,"test","test",577538877));
var pass = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__138119__$1,new cljs.core.Keyword(null,"pass","pass",1574159993));
var fail = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__138119__$1,new cljs.core.Keyword(null,"fail","fail",1706214930));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__138119__$1,new cljs.core.Keyword(null,"error","error",-978969032));
return ["Ran ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(test)," test",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),test))?null:"s"),(((pass === (0)))?null:[", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pass)," assertion",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),pass))?null:"s")," passed"].join('')),(((fail === (0)))?null:[", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fail)," failed"].join('')),(((error === (0)))?null:[", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(error)," errored"].join('')),"."].join('');
});
repl_tooling.editor_integration.evaluation.run_tests_in_ns_BANG_ = (function repl_tooling$editor_integration$evaluation$run_tests_in_ns_BANG_(state){
return promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(repl_tooling.editor_integration.commands.run_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword(null,"eval","eval",-1103567905),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"auto-detect","auto-detect",-1255603603),true,new cljs.core.Keyword(null,"text","text",-1790561697),"(clojure.test/run-tests)"], null)], 0)),(function (p__138198){
var map__138204 = p__138198;
var map__138204__$1 = cljs.core.__destructure_map(map__138204);
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__138204__$1,new cljs.core.Keyword(null,"result","result",1415092211));
return promesa.protocols._bind(null,(function (___31810__auto__){
return promesa.protocols._promise(repl_tooling.editor_integration.commands.run_callback_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword(null,"notify","notify",-1256867814),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic((0),new cljs.core.Keyword(null,"fail","fail",1706214930).cljs$core$IFn$_invoke$arity$1(result),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(result)], 0)))?new cljs.core.Keyword(null,"info","info",-317069002):new cljs.core.Keyword(null,"warning","warning",-1685650671)),new cljs.core.Keyword(null,"title","title",636505583),"(clojure.test/run-tests)",new cljs.core.Keyword(null,"message","message",-406056002),repl_tooling.editor_integration.evaluation.format_test_result(result)], null)], 0)));
}));
}));
}));
});
repl_tooling.editor_integration.evaluation.run_test_at_cursor_BANG_ = (function repl_tooling$editor_integration$evaluation$run_test_at_cursor_BANG_(state,p__138252){
var map__138257 = p__138252;
var map__138257__$1 = cljs.core.__destructure_map(map__138257);
var range = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__138257__$1,new cljs.core.Keyword(null,"range","range",1639692286));
var contents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__138257__$1,new cljs.core.Keyword(null,"contents","contents",-1567174023));
var vec__138258 = (function (){var G__138261 = contents;
var G__138262 = cljs.core.first(range);
return (repl_tooling.editor_helpers.current_var.cljs$core$IFn$_invoke$arity$2 ? repl_tooling.editor_helpers.current_var.cljs$core$IFn$_invoke$arity$2(G__138261,G__138262) : repl_tooling.editor_helpers.current_var.call(null,G__138261,G__138262));
})();
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__138258,(0),null);
var current_var = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__138258,(1),null);
return promesa.protocols._bind(null,(function (___31810__auto__){
return promesa.protocols._bind(repl_tooling.editor_integration.commands.run_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword(null,"eval","eval",-1103567905),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"auto-detect","auto-detect",-1255603603),true,new cljs.core.Keyword(null,"text","text",-1790561697),["(clojure.test/test-vars [#'",cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_var),"])"].join('')], null)], 0)),(function (___31809__auto__){
return promesa.protocols._promise(repl_tooling.editor_integration.commands.run_callback_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword(null,"notify","notify",-1256867814),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"info","info",-317069002),new cljs.core.Keyword(null,"title","title",636505583),["Ran test: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_var)].join(''),new cljs.core.Keyword(null,"message","message",-406056002),"See REPL for any failures"], null)], 0)));
}));
}));
});
repl_tooling.editor_integration.evaluation.source_BANG_ = (function repl_tooling$editor_integration$evaluation$source_BANG_(state){
return promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(new cljs.core.Keyword(null,"eql","eql",1414892383).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("editor","features","editor/features",1302258665).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state))),(function (eql){
return promesa.protocols._bind(new cljs.core.Keyword(null,"on-stdout","on-stdout",1480958368).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("editor","callbacks","editor/callbacks",1179124831).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state))),(function (on_stdout){
return promesa.protocols._bind((function (){var G__138263 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("editor","contents","editor/contents",-394611860),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("text","current-var","text/current-var",1432933099),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","contents","text/contents",-1566533716),new cljs.core.Keyword("definition","source","definition/source",513279520)], null)], null)], null)], null)], null);
return (eql.cljs$core$IFn$_invoke$arity$1 ? eql.cljs$core$IFn$_invoke$arity$1(G__138263) : eql.call(null,G__138263));
})(),(function (source){
return promesa.protocols._bind(null,(function (___31810__auto__){
return promesa.protocols._promise((function (){var temp__5751__auto__ = new cljs.core.Keyword("text","contents","text/contents",-1566533716).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("definition","source","definition/source",513279520).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("text","current-var","text/current-var",1432933099).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("editor","contents","editor/contents",-394611860).cljs$core$IFn$_invoke$arity$1(source))));
if(cljs.core.truth_(temp__5751__auto__)){
var source__$1 = temp__5751__auto__;
return (on_stdout.cljs$core$IFn$_invoke$arity$1 ? on_stdout.cljs$core$IFn$_invoke$arity$1(source__$1) : on_stdout.call(null,source__$1));
} else {
return repl_tooling.editor_helpers.with_out((function (){
return promesa.protocols._bind(null,(function (___31820__auto____$1){
return promesa.protocols._bind((function (){var G__138265 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("text","contents","text/contents",-1566533716),["(do (clojure.core/require 'clojure.repl)"," #'clojure.repl/source)"].join('')], null);
var G__138266 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("repl","result","repl/result",1421065572)], null);
return (eql.cljs$core$IFn$_invoke$arity$2 ? eql.cljs$core$IFn$_invoke$arity$2(G__138265,G__138266) : eql.call(null,G__138265,G__138266));
})(),(function (req){
return promesa.protocols._bind(null,(function (___31810__auto____$1){
return promesa.protocols._promise((cljs.core.truth_(new cljs.core.Keyword("repl","result","repl/result",1421065572).cljs$core$IFn$_invoke$arity$1(req))?(function (){var G__138267 = new cljs.core.Keyword("text","current-var","text/current-var",1432933099).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("editor","contents","editor/contents",-394611860).cljs$core$IFn$_invoke$arity$1(source));
var G__138268 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Keyword("repl","result","repl/result",1421065572),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("repl","template","repl/template",-731412419),cljs.core.list(new cljs.core.Symbol("clojure.repl","source","clojure.repl/source",1909363069,null),new cljs.core.Keyword("repl","code","repl/code",-1648869881))], null))], null);
return (eql.cljs$core$IFn$_invoke$arity$2 ? eql.cljs$core$IFn$_invoke$arity$2(G__138267,G__138268) : eql.call(null,G__138267,G__138268));
})():(function(){throw "Error"})()));
}));
}));
}));
}));
}
})());
}));
}));
}));
}));
}));
});
repl_tooling.editor_integration.evaluation.source_for_var_BANG_ = (function repl_tooling$editor_integration$evaluation$source_for_var_BANG_(state){
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(repl_tooling.editor_integration.evaluation.source_BANG_(state),(function (){
return repl_tooling.editor_integration.commands.run_callback_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword(null,"notify","notify",-1256867814),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"title","title",636505583),["Source for Var ","not supported for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"kind-name","kind-name",131475723).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("repl","info","repl/info",-345199547).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state))))].join('')], null)], 0));
}));
});

//# sourceMappingURL=repl_tooling.editor_integration.evaluation.js.map
