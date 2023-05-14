goog.provide('repl_tooling.editor_integration.evaluation');
repl_tooling.editor_integration.evaluation.get_code = (function repl_tooling$editor_integration$evaluation$get_code(editor_state,kind){
return promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(repl_tooling.editor_integration.commands.run_callback_BANG_(editor_state,new cljs.core.Keyword(null,"editor-data","editor-data",-2084300305)),(function (data){
return promesa.protocols._bind(null,(function (___31810__auto__){
return promesa.protocols._promise((function (){var temp__5753__auto__ = data;
if(cljs.core.truth_(temp__5753__auto__)){
var map__144034 = temp__5753__auto__;
var map__144034__$1 = cljs.core.__destructure_map(map__144034);
var contents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__144034__$1,new cljs.core.Keyword(null,"contents","contents",-1567174023));
var range = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__144034__$1,new cljs.core.Keyword(null,"range","range",1639692286));
var temp__5753__auto____$1 = (function (){var G__144035 = kind;
var G__144035__$1 = (((G__144035 instanceof cljs.core.Keyword))?G__144035.fqn:null);
switch (G__144035__$1) {
case "top-block":
return repl_tooling.editor_helpers.top_block_for(contents,cljs.core.first(range));

break;
case "block":
var G__144036 = contents;
var G__144037 = cljs.core.first(range);
return (repl_tooling.editor_helpers.block_for.cljs$core$IFn$_invoke$arity$2 ? repl_tooling.editor_helpers.block_for.cljs$core$IFn$_invoke$arity$2(G__144036,G__144037) : repl_tooling.editor_helpers.block_for.call(null,G__144036,G__144037));

break;
case "var":
var G__144039 = contents;
var G__144040 = cljs.core.first(range);
return (repl_tooling.editor_helpers.current_var.cljs$core$IFn$_invoke$arity$2 ? repl_tooling.editor_helpers.current_var.cljs$core$IFn$_invoke$arity$2(G__144039,G__144040) : repl_tooling.editor_helpers.current_var.call(null,G__144039,G__144040));

break;
case "selection":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [range,(repl_tooling.editor_helpers.text_in_range.cljs$core$IFn$_invoke$arity$2 ? repl_tooling.editor_helpers.text_in_range.cljs$core$IFn$_invoke$arity$2(contents,range) : repl_tooling.editor_helpers.text_in_range.call(null,contents,range))], null);

break;
case "ns":
return repl_tooling.editor_helpers.ns_range_for(contents,cljs.core.first(range));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__144035__$1)].join('')));

}
})();
if(cljs.core.truth_(temp__5753__auto____$1)){
var vec__144044 = temp__5753__auto____$1;
var range__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__144044,(0),null);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__144044,(1),null);
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
var or__4223__auto____$1 = (function (){var and__4221__auto__ = (function (){var G__144053 = new cljs.core.Keyword(null,"eval-mode","eval-mode",1105308847).cljs$core$IFn$_invoke$arity$1(config);
var fexpr__144051 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"prefer-clj","prefer-clj",-124166522),null,new cljs.core.Keyword(null,"prefer-cljs","prefer-cljs",1599484843),null], null), null);
return (fexpr__144051.cljs$core$IFn$_invoke$arity$1 ? fexpr__144051.cljs$core$IFn$_invoke$arity$1(G__144053) : fexpr__144051.call(null,G__144053));
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
var G__144057_144227 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"title","title",636505583),"REPL not connected",new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
(notify_BANG_.cljs$core$IFn$_invoke$arity$1 ? notify_BANG_.cljs$core$IFn$_invoke$arity$1(G__144057_144227) : notify_BANG_.call(null,G__144057_144227));

return null;
});
var ufv___144229 = schema.utils.use_fn_validation;
var output_schema144061_144230 = schema.core.Any;
var input_schema144062_144231 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.one(schema.core.maybe(schema.core.Str),cljs.core.with_meta(new cljs.core.Symbol(null,"filename","filename",211690744,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","maybe","s/maybe",1326133944,null),new cljs.core.Symbol("s","Str","s/Str",907974338,null))], null))),schema.core.one(repl_tooling.editor_integration.schemas.AuxOptions,cljs.core.with_meta(new cljs.core.Symbol(null,"aux?","aux?",-480229891,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schemas","AuxOptions","schemas/AuxOptions",1798073301,null)], null)))], null);
var input_checker144063_144232 = (new cljs.core.Delay((function (){
return schema.core.checker(input_schema144062_144231);
}),null));
var output_checker144064_144233 = (new cljs.core.Delay((function (){
return schema.core.checker(output_schema144061_144230);
}),null));
var ret__40409__auto___144235 = /**
 * Inputs: [state filename :- (s/maybe s/Str) aux? :- schemas/AuxOptions]
 *   Returns: s/Any
 */
repl_tooling.editor_integration.evaluation.repl_for = (function repl_tooling$editor_integration$evaluation$repl_for(G__144065,G__144066,G__144067){
var validate__38124__auto__ = cljs.core.deref(ufv___144229);
if(cljs.core.truth_(validate__38124__auto__)){
var args__38125__auto___144237 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__144065,G__144066,G__144067], null);
if(cljs.core.truth_(schema.core.fn_validator)){
var G__144078_144238 = new cljs.core.Keyword(null,"input","input",556931961);
var G__144079_144239 = cljs.core.with_meta(new cljs.core.Symbol(null,"repl-for","repl-for",-1229510607,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null));
var G__144080_144240 = input_schema144062_144231;
var G__144081_144241 = cljs.core.deref(input_checker144063_144232);
var G__144082_144242 = args__38125__auto___144237;
(schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5 ? schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5(G__144078_144238,G__144079_144239,G__144080_144240,G__144081_144241,G__144082_144242) : schema.core.fn_validator.call(null,G__144078_144238,G__144079_144239,G__144080_144240,G__144081_144241,G__144082_144242));
} else {
var temp__5753__auto___144243 = (function (){var fexpr__144083 = cljs.core.deref(input_checker144063_144232);
return (fexpr__144083.cljs$core$IFn$_invoke$arity$1 ? fexpr__144083.cljs$core$IFn$_invoke$arity$1(args__38125__auto___144237) : fexpr__144083.call(null,args__38125__auto___144237));
})();
if(cljs.core.truth_(temp__5753__auto___144243)){
var error__38126__auto___144245 = temp__5753__auto___144243;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.with_meta(new cljs.core.Symbol(null,"repl-for","repl-for",-1229510607,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([error__38126__auto___144245], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema144062_144231,new cljs.core.Keyword(null,"value","value",305978217),args__38125__auto___144237,new cljs.core.Keyword(null,"error","error",-978969032),error__38126__auto___144245], null));
} else {
}
}
} else {
}

var o__38127__auto__ = (function (){var state = G__144065;
var filename = G__144066;
var aux_QMARK_ = G__144067;
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
return repl_tooling.editor_integration.evaluation.treat_error(((function (cljs_QMARK_,repl,validate__38124__auto__,ufv___144229,output_schema144061_144230,input_schema144062_144231,input_checker144063_144232,output_checker144064_144233){
return (function (p1__144060_SHARP_){
return repl_tooling.editor_integration.commands.run_callback_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword(null,"notify","notify",-1256867814),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__144060_SHARP_], 0));
});})(cljs_QMARK_,repl,validate__38124__auto__,ufv___144229,output_schema144061_144230,input_schema144062_144231,input_checker144063_144232,output_checker144064_144233))
,cljs_QMARK_,new cljs.core.Keyword("clj","repl","clj/repl",-35234538).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)));
} else {
return repl;
}
break;
}
})();
if(cljs.core.truth_(validate__38124__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
var G__144091_144252 = new cljs.core.Keyword(null,"output","output",-1105869043);
var G__144092_144253 = cljs.core.with_meta(new cljs.core.Symbol(null,"repl-for","repl-for",-1229510607,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null));
var G__144093_144254 = output_schema144061_144230;
var G__144094_144255 = cljs.core.deref(output_checker144064_144233);
var G__144095_144256 = o__38127__auto__;
(schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5 ? schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5(G__144091_144252,G__144092_144253,G__144093_144254,G__144094_144255,G__144095_144256) : schema.core.fn_validator.call(null,G__144091_144252,G__144092_144253,G__144093_144254,G__144094_144255,G__144095_144256));
} else {
var temp__5753__auto___144259 = (function (){var fexpr__144097 = cljs.core.deref(output_checker144064_144233);
return (fexpr__144097.cljs$core$IFn$_invoke$arity$1 ? fexpr__144097.cljs$core$IFn$_invoke$arity$1(o__38127__auto__) : fexpr__144097.call(null,o__38127__auto__));
})();
if(cljs.core.truth_(temp__5753__auto___144259)){
var error__38126__auto___144260 = temp__5753__auto___144259;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.with_meta(new cljs.core.Symbol(null,"repl-for","repl-for",-1229510607,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([error__38126__auto___144260], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema144061_144230,new cljs.core.Keyword(null,"value","value",305978217),o__38127__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__38126__auto___144260], null));
} else {
}
}
} else {
}

return o__38127__auto__;
});
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(repl_tooling.editor_integration.evaluation.repl_for),schema.core.__GT_FnSchema(output_schema144061_144230,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema144062_144231], null)));

var ufv___144262 = schema.utils.use_fn_validation;
var output_schema144102_144263 = schema.core.Any;
var input_schema144104_144264 = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(repl_tooling.editor_integration.schemas.EditorState,cljs.core.with_meta(new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schemas","EditorState","schemas/EditorState",807360483,null)], null))),schema.core.one(schema.core.Str,cljs.core.with_meta(new cljs.core.Symbol(null,"code","code",-1068142627,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Str","s/Str",907974338,null)], null))),schema.core.one(schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"namespace","namespace",1263021155,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.one(repl_tooling.editor_integration.schemas.Range,cljs.core.with_meta(new cljs.core.Symbol(null,"range","range",-1014743483,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schemas","Range","schemas/Range",2120074999,null)], null))),schema.core.one(repl_tooling.editor_integration.schemas.EditorData,cljs.core.with_meta(new cljs.core.Symbol(null,"editor-data","editor-data",-443768778,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schemas","EditorData","schemas/EditorData",334505549,null)], null))),schema.core.one(repl_tooling.editor_integration.schemas.EvalOpts,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schemas","EvalOpts","schemas/EvalOpts",-11139299,null)], null)))], null);
var input_checker144105_144265 = (new cljs.core.Delay((function (){
return schema.core.checker(input_schema144104_144264);
}),null));
var output_checker144106_144266 = (new cljs.core.Delay((function (){
return schema.core.checker(output_schema144102_144263);
}),null));
var ret__40409__auto___144271 = /**
 * Inputs: [state :- schemas/EditorState code :- s/Str namespace range :- schemas/Range editor-data :- schemas/EditorData opts :- schemas/EvalOpts]
 */
repl_tooling.editor_integration.evaluation.eval_cmd = (function repl_tooling$editor_integration$evaluation$eval_cmd(G__144107,G__144108,G__144109,G__144110,G__144111,G__144112){
var validate__38124__auto__ = cljs.core.deref(ufv___144262);
if(cljs.core.truth_(validate__38124__auto__)){
var args__38125__auto___144273 = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__144107,G__144108,G__144109,G__144110,G__144111,G__144112], null);
if(cljs.core.truth_(schema.core.fn_validator)){
var G__144117_144274 = new cljs.core.Keyword(null,"input","input",556931961);
var G__144118_144275 = cljs.core.with_meta(new cljs.core.Symbol(null,"eval-cmd","eval-cmd",-1345880458,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null));
var G__144119_144276 = input_schema144104_144264;
var G__144120_144277 = cljs.core.deref(input_checker144105_144265);
var G__144121_144278 = args__38125__auto___144273;
(schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5 ? schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5(G__144117_144274,G__144118_144275,G__144119_144276,G__144120_144277,G__144121_144278) : schema.core.fn_validator.call(null,G__144117_144274,G__144118_144275,G__144119_144276,G__144120_144277,G__144121_144278));
} else {
var temp__5753__auto___144280 = (function (){var fexpr__144122 = cljs.core.deref(input_checker144105_144265);
return (fexpr__144122.cljs$core$IFn$_invoke$arity$1 ? fexpr__144122.cljs$core$IFn$_invoke$arity$1(args__38125__auto___144273) : fexpr__144122.call(null,args__38125__auto___144273));
})();
if(cljs.core.truth_(temp__5753__auto___144280)){
var error__38126__auto___144281 = temp__5753__auto___144280;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.with_meta(new cljs.core.Symbol(null,"eval-cmd","eval-cmd",-1345880458,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([error__38126__auto___144281], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema144104_144264,new cljs.core.Keyword(null,"value","value",305978217),args__38125__auto___144273,new cljs.core.Keyword(null,"error","error",-978969032),error__38126__auto___144281], null));
} else {
}
}
} else {
}

var o__38127__auto__ = (function (){var state = G__144107;
var code = G__144108;
var namespace = G__144109;
var range = G__144110;
var editor_data = G__144111;
var opts = G__144112;
while(true){
if(cljs.core.truth_(code)){
var prom = promesa.core.deferred();
var filename = new cljs.core.Keyword(null,"filename","filename",-1428840783).cljs$core$IFn$_invoke$arity$1(editor_data);
var map__144123 = new cljs.core.Keyword("editor","callbacks","editor/callbacks",1179124831).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state));
var map__144123__$1 = cljs.core.__destructure_map(map__144123);
var on_start_eval = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__144123__$1,new cljs.core.Keyword(null,"on-start-eval","on-start-eval",-560475418));
var on_eval = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__144123__$1,new cljs.core.Keyword(null,"on-eval","on-eval",-1349336659));
var vec__144124 = range;
var vec__144127 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__144124,(0),null);
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__144127,(0),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__144127,(1),null);
var repl = repl_tooling.editor_integration.evaluation.repl_for(state,filename,new cljs.core.Keyword(null,"aux","aux",-10408640).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pass","pass",1574159993).cljs$core$IFn$_invoke$arity$1(opts)));
var id = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var eval_data = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"editor-data","editor-data",-2084300305),editor_data,new cljs.core.Keyword(null,"range","range",1639692286),range], null);
if(cljs.core.truth_(repl)){
var and__4221__auto___144287 = on_start_eval;
if(cljs.core.truth_(and__4221__auto___144287)){
(on_start_eval.cljs$core$IFn$_invoke$arity$1 ? on_start_eval.cljs$core$IFn$_invoke$arity$1(eval_data) : on_start_eval.call(null,eval_data));
} else {
}

repl_tooling.eval.evaluate(repl,code,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"filename","filename",-1428840783),filename,new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"row","row",-570139521),(row + (1)),new cljs.core.Keyword(null,"col","col",-1959363084),(col + (1)),new cljs.core.Keyword(null,"namespace","namespace",-377510372),namespace], null),opts], 0)),((function (prom,filename,map__144123,map__144123__$1,on_start_eval,on_eval,vec__144124,vec__144127,row,col,repl,id,eval_data,validate__38124__auto__,ufv___144262,output_schema144102_144263,input_schema144104_144264,input_checker144105_144265,output_checker144106_144266){
return (function (p1__144100_SHARP_){
if(cljs.core.truth_((function (){var and__4221__auto__ = on_eval;
if(cljs.core.truth_(and__4221__auto__)){
return cljs.core.deref(state);
} else {
return and__4221__auto__;
}
})())){
var parsed = repl_tooling.editor_helpers.parse_result(p1__144100_SHARP_);
var G__144130_144288 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(eval_data,new cljs.core.Keyword(null,"repl","repl",-35398667),repl,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"result","result",1415092211),parsed], 0));
(on_eval.cljs$core$IFn$_invoke$arity$1 ? on_eval.cljs$core$IFn$_invoke$arity$1(G__144130_144288) : on_eval.call(null,G__144130_144288));

return promesa.core.resolve_BANG_.cljs$core$IFn$_invoke$arity$2(prom,cljs.core.select_keys(parsed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Keyword(null,"error","error",-978969032)], null)));
} else {
return null;
}
});})(prom,filename,map__144123,map__144123__$1,on_start_eval,on_eval,vec__144124,vec__144127,row,col,repl,id,eval_data,validate__38124__auto__,ufv___144262,output_schema144102_144263,input_schema144104_144264,input_checker144105_144265,output_checker144106_144266))
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
var G__144131_144289 = new cljs.core.Keyword(null,"output","output",-1105869043);
var G__144132_144290 = cljs.core.with_meta(new cljs.core.Symbol(null,"eval-cmd","eval-cmd",-1345880458,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null));
var G__144133_144291 = output_schema144102_144263;
var G__144134_144292 = cljs.core.deref(output_checker144106_144266);
var G__144135_144293 = o__38127__auto__;
(schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5 ? schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5(G__144131_144289,G__144132_144290,G__144133_144291,G__144134_144292,G__144135_144293) : schema.core.fn_validator.call(null,G__144131_144289,G__144132_144290,G__144133_144291,G__144134_144292,G__144135_144293));
} else {
var temp__5753__auto___144294 = (function (){var fexpr__144136 = cljs.core.deref(output_checker144106_144266);
return (fexpr__144136.cljs$core$IFn$_invoke$arity$1 ? fexpr__144136.cljs$core$IFn$_invoke$arity$1(o__38127__auto__) : fexpr__144136.call(null,o__38127__auto__));
})();
if(cljs.core.truth_(temp__5753__auto___144294)){
var error__38126__auto___144295 = temp__5753__auto___144294;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.with_meta(new cljs.core.Symbol(null,"eval-cmd","eval-cmd",-1345880458,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([error__38126__auto___144295], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema144102_144263,new cljs.core.Keyword(null,"value","value",305978217),o__38127__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__38126__auto___144295], null));
} else {
}
}
} else {
}

return o__38127__auto__;
});
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(repl_tooling.editor_integration.evaluation.eval_cmd),schema.core.__GT_FnSchema(output_schema144102_144263,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema144104_144264], null)));

repl_tooling.editor_integration.evaluation.auto_opts = (function repl_tooling$editor_integration$evaluation$auto_opts(editor_data){
return promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind((editor_data.cljs$core$IFn$_invoke$arity$0 ? editor_data.cljs$core$IFn$_invoke$arity$0() : editor_data.call(null)),(function (p__144141){
var map__144142 = p__144141;
var map__144142__$1 = cljs.core.__destructure_map(map__144142);
var filename = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__144142__$1,new cljs.core.Keyword(null,"filename","filename",-1428840783));
var range = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__144142__$1,new cljs.core.Keyword(null,"range","range",1639692286));
var contents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__144142__$1,new cljs.core.Keyword(null,"contents","contents",-1567174023));
return promesa.protocols._bind(range,(function (p__144164){
var vec__144166 = p__144164;
var vec__144169 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__144166,(0),null);
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__144169,(0),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__144169,(1),null);
return promesa.protocols._bind(repl_tooling.editor_helpers.ns_range_for(contents,cljs.core.first(range)),(function (p__144174){
var vec__144175 = p__144174;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__144175,(0),null);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__144175,(1),null);
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
repl_tooling.editor_integration.evaluation.format_test_result = (function repl_tooling$editor_integration$evaluation$format_test_result(p__144188){
var map__144189 = p__144188;
var map__144189__$1 = cljs.core.__destructure_map(map__144189);
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__144189__$1,new cljs.core.Keyword(null,"test","test",577538877));
var pass = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__144189__$1,new cljs.core.Keyword(null,"pass","pass",1574159993));
var fail = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__144189__$1,new cljs.core.Keyword(null,"fail","fail",1706214930));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__144189__$1,new cljs.core.Keyword(null,"error","error",-978969032));
return ["Ran ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(test)," test",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),test))?null:"s"),(((pass === (0)))?null:[", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pass)," assertion",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),pass))?null:"s")," passed"].join('')),(((fail === (0)))?null:[", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fail)," failed"].join('')),(((error === (0)))?null:[", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(error)," errored"].join('')),"."].join('');
});
repl_tooling.editor_integration.evaluation.run_tests_in_ns_BANG_ = (function repl_tooling$editor_integration$evaluation$run_tests_in_ns_BANG_(state){
return promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(repl_tooling.editor_integration.commands.run_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword(null,"eval","eval",-1103567905),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"auto-detect","auto-detect",-1255603603),true,new cljs.core.Keyword(null,"text","text",-1790561697),"(clojure.test/run-tests)"], null)], 0)),(function (p__144193){
var map__144194 = p__144193;
var map__144194__$1 = cljs.core.__destructure_map(map__144194);
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__144194__$1,new cljs.core.Keyword(null,"result","result",1415092211));
return promesa.protocols._bind(null,(function (___31810__auto__){
return promesa.protocols._promise(repl_tooling.editor_integration.commands.run_callback_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword(null,"notify","notify",-1256867814),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic((0),new cljs.core.Keyword(null,"fail","fail",1706214930).cljs$core$IFn$_invoke$arity$1(result),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(result)], 0)))?new cljs.core.Keyword(null,"info","info",-317069002):new cljs.core.Keyword(null,"warning","warning",-1685650671)),new cljs.core.Keyword(null,"title","title",636505583),"(clojure.test/run-tests)",new cljs.core.Keyword(null,"message","message",-406056002),repl_tooling.editor_integration.evaluation.format_test_result(result)], null)], 0)));
}));
}));
}));
});
repl_tooling.editor_integration.evaluation.run_test_at_cursor_BANG_ = (function repl_tooling$editor_integration$evaluation$run_test_at_cursor_BANG_(state,p__144196){
var map__144197 = p__144196;
var map__144197__$1 = cljs.core.__destructure_map(map__144197);
var range = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__144197__$1,new cljs.core.Keyword(null,"range","range",1639692286));
var contents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__144197__$1,new cljs.core.Keyword(null,"contents","contents",-1567174023));
var vec__144199 = (function (){var G__144206 = contents;
var G__144207 = cljs.core.first(range);
return (repl_tooling.editor_helpers.current_var.cljs$core$IFn$_invoke$arity$2 ? repl_tooling.editor_helpers.current_var.cljs$core$IFn$_invoke$arity$2(G__144206,G__144207) : repl_tooling.editor_helpers.current_var.call(null,G__144206,G__144207));
})();
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__144199,(0),null);
var current_var = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__144199,(1),null);
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
return promesa.protocols._bind((function (){var G__144211 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("editor","contents","editor/contents",-394611860),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("text","current-var","text/current-var",1432933099),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","contents","text/contents",-1566533716),new cljs.core.Keyword("definition","source","definition/source",513279520)], null)], null)], null)], null)], null);
return (eql.cljs$core$IFn$_invoke$arity$1 ? eql.cljs$core$IFn$_invoke$arity$1(G__144211) : eql.call(null,G__144211));
})(),(function (source){
return promesa.protocols._bind(null,(function (___31810__auto__){
return promesa.protocols._promise((function (){var temp__5751__auto__ = new cljs.core.Keyword("text","contents","text/contents",-1566533716).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("definition","source","definition/source",513279520).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("text","current-var","text/current-var",1432933099).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("editor","contents","editor/contents",-394611860).cljs$core$IFn$_invoke$arity$1(source))));
if(cljs.core.truth_(temp__5751__auto__)){
var source__$1 = temp__5751__auto__;
return (on_stdout.cljs$core$IFn$_invoke$arity$1 ? on_stdout.cljs$core$IFn$_invoke$arity$1(source__$1) : on_stdout.call(null,source__$1));
} else {
return repl_tooling.editor_helpers.with_out((function (){
return promesa.protocols._bind(null,(function (___31820__auto____$1){
return promesa.protocols._bind((function (){var G__144215 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("text","contents","text/contents",-1566533716),["(do (clojure.core/require 'clojure.repl)"," #'clojure.repl/source)"].join('')], null);
var G__144216 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("repl","result","repl/result",1421065572)], null);
return (eql.cljs$core$IFn$_invoke$arity$2 ? eql.cljs$core$IFn$_invoke$arity$2(G__144215,G__144216) : eql.call(null,G__144215,G__144216));
})(),(function (req){
return promesa.protocols._bind(null,(function (___31810__auto____$1){
return promesa.protocols._promise((cljs.core.truth_(new cljs.core.Keyword("repl","result","repl/result",1421065572).cljs$core$IFn$_invoke$arity$1(req))?(function (){var G__144217 = new cljs.core.Keyword("text","current-var","text/current-var",1432933099).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("editor","contents","editor/contents",-394611860).cljs$core$IFn$_invoke$arity$1(source));
var G__144218 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Keyword("repl","result","repl/result",1421065572),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("repl","template","repl/template",-731412419),cljs.core.list(new cljs.core.Symbol("clojure.repl","source","clojure.repl/source",1909363069,null),new cljs.core.Keyword("repl","code","repl/code",-1648869881))], null))], null);
return (eql.cljs$core$IFn$_invoke$arity$2 ? eql.cljs$core$IFn$_invoke$arity$2(G__144217,G__144218) : eql.call(null,G__144217,G__144218));
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
