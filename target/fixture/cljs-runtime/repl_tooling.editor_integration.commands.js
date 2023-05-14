goog.provide('repl_tooling.editor_integration.commands');
repl_tooling.editor_integration.commands.run_cmd = (function repl_tooling$editor_integration$commands$run_cmd(cmd,state,key,args){
var callback = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,cmd], null));
if(cljs.core.truth_(goog.DEBUG)){
if((callback == null)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Didn't find function on editor-state",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"available","available",-1470697127),cljs.core.keys((function (){var G__153288 = cljs.core.deref(state);
return (key.cljs$core$IFn$_invoke$arity$1 ? key.cljs$core$IFn$_invoke$arity$1(G__153288) : key.call(null,G__153288));
})()),new cljs.core.Keyword(null,"required","required",1807647006),cmd], null));
} else {
}

var schemas_153387 = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__153287_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(p1__153287_SHARP_),cljs.core.count(args));
}),new cljs.core.Keyword(null,"input-schemas","input-schemas",-982154805).cljs$core$IFn$_invoke$arity$1((function (){var G__153289 = (function (){var G__153290 = repl_tooling.editor_integration.schemas.EditorState.schema;
return (key.cljs$core$IFn$_invoke$arity$1 ? key.cljs$core$IFn$_invoke$arity$1(G__153290) : key.call(null,G__153290));
})();
return (cmd.cljs$core$IFn$_invoke$arity$1 ? cmd.cljs$core$IFn$_invoke$arity$1(G__153289) : cmd.call(null,G__153289));
})())));
schema.core.validate(schemas_153387,args);
} else {
}

var res = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(callback,args);
if(cljs.core.truth_(goog.DEBUG)){
var schema_153388__$1 = new cljs.core.Keyword(null,"output-schema","output-schema",272504137).cljs$core$IFn$_invoke$arity$1((function (){var G__153291 = (function (){var G__153292 = repl_tooling.editor_integration.schemas.EditorState.schema;
return (key.cljs$core$IFn$_invoke$arity$1 ? key.cljs$core$IFn$_invoke$arity$1(G__153292) : key.call(null,G__153292));
})();
return (cmd.cljs$core$IFn$_invoke$arity$1 ? cmd.cljs$core$IFn$_invoke$arity$1(G__153291) : cmd.call(null,G__153291));
})());
schema.core.validate(schema_153388__$1,res);
} else {
}

return res;
});
repl_tooling.editor_integration.commands.CallbackCmd = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(schema.core.enum$,cljs.core.keys(repl_tooling.editor_integration.schemas.Callbacks));
var ufv___153389 = schema.utils.use_fn_validation;
var output_schema153293_153390 = schema.core.Any;
var input_schema153295_153391 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(repl_tooling.editor_integration.schemas.EditorState,cljs.core.with_meta(new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schemas","EditorState","schemas/EditorState",807360483,null)], null))),schema.core.one(repl_tooling.editor_integration.commands.CallbackCmd,cljs.core.with_meta(new cljs.core.Symbol(null,"cmd","cmd",1337600384,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"CallbackCmd","CallbackCmd",1774889727,null)], null))),schema.core.one(schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"args","args",-1338879193,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker153296_153392 = (new cljs.core.Delay((function (){
return schema.core.checker(input_schema153295_153391);
}),null));
var output_checker153297_153393 = (new cljs.core.Delay((function (){
return schema.core.checker(output_schema153293_153390);
}),null));
var ret__49553__auto___153394 = /**
 * Inputs: [state :- schemas/EditorState cmd :- CallbackCmd args]
 * 
 *   Calls a function registered when the REPL was connected
 */
repl_tooling.editor_integration.commands.state_run_callback_BANG_ = (function repl_tooling$editor_integration$commands$state_run_callback_BANG_(G__153298,G__153299,G__153300){
var validate__47609__auto__ = cljs.core.deref(ufv___153389);
if(cljs.core.truth_(validate__47609__auto__)){
var args__47610__auto___153395 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__153298,G__153299,G__153300], null);
if(cljs.core.truth_(schema.core.fn_validator)){
var G__153303_153396 = new cljs.core.Keyword(null,"input","input",556931961);
var G__153304_153397 = cljs.core.with_meta(new cljs.core.Symbol(null,"state-run-callback!","state-run-callback!",105940794,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Calls a function registered when the REPL was connected"], null));
var G__153305_153398 = input_schema153295_153391;
var G__153306_153399 = cljs.core.deref(input_checker153296_153392);
var G__153307_153400 = args__47610__auto___153395;
(schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5 ? schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5(G__153303_153396,G__153304_153397,G__153305_153398,G__153306_153399,G__153307_153400) : schema.core.fn_validator.call(null,G__153303_153396,G__153304_153397,G__153305_153398,G__153306_153399,G__153307_153400));
} else {
var temp__5753__auto___153401 = (function (){var fexpr__153308 = cljs.core.deref(input_checker153296_153392);
return (fexpr__153308.cljs$core$IFn$_invoke$arity$1 ? fexpr__153308.cljs$core$IFn$_invoke$arity$1(args__47610__auto___153395) : fexpr__153308.call(null,args__47610__auto___153395));
})();
if(cljs.core.truth_(temp__5753__auto___153401)){
var error__47611__auto___153402 = temp__5753__auto___153401;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.with_meta(new cljs.core.Symbol(null,"state-run-callback!","state-run-callback!",105940794,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Calls a function registered when the REPL was connected"], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([error__47611__auto___153402], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema153295_153391,new cljs.core.Keyword(null,"value","value",305978217),args__47610__auto___153395,new cljs.core.Keyword(null,"error","error",-978969032),error__47611__auto___153402], null));
} else {
}
}
} else {
}

var o__47612__auto__ = (function (){var state = G__153298;
var cmd = G__153299;
var args = G__153300;
while(true){
return repl_tooling.editor_integration.commands.run_cmd(cmd,state,new cljs.core.Keyword("editor","callbacks","editor/callbacks",1179124831),args);
break;
}
})();
if(cljs.core.truth_(validate__47609__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
var G__153310_153403 = new cljs.core.Keyword(null,"output","output",-1105869043);
var G__153311_153404 = cljs.core.with_meta(new cljs.core.Symbol(null,"state-run-callback!","state-run-callback!",105940794,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Calls a function registered when the REPL was connected"], null));
var G__153312_153405 = output_schema153293_153390;
var G__153313_153406 = cljs.core.deref(output_checker153297_153393);
var G__153314_153407 = o__47612__auto__;
(schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5 ? schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5(G__153310_153403,G__153311_153404,G__153312_153405,G__153313_153406,G__153314_153407) : schema.core.fn_validator.call(null,G__153310_153403,G__153311_153404,G__153312_153405,G__153313_153406,G__153314_153407));
} else {
var temp__5753__auto___153409 = (function (){var fexpr__153316 = cljs.core.deref(output_checker153297_153393);
return (fexpr__153316.cljs$core$IFn$_invoke$arity$1 ? fexpr__153316.cljs$core$IFn$_invoke$arity$1(o__47612__auto__) : fexpr__153316.call(null,o__47612__auto__));
})();
if(cljs.core.truth_(temp__5753__auto___153409)){
var error__47611__auto___153410 = temp__5753__auto___153409;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.with_meta(new cljs.core.Symbol(null,"state-run-callback!","state-run-callback!",105940794,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Calls a function registered when the REPL was connected"], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([error__47611__auto___153410], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema153293_153390,new cljs.core.Keyword(null,"value","value",305978217),o__47612__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__47611__auto___153410], null));
} else {
}
}
} else {
}

return o__47612__auto__;
});
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(repl_tooling.editor_integration.commands.state_run_callback_BANG_),schema.core.__GT_FnSchema(output_schema153293_153390,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema153295_153391], null)));

repl_tooling.editor_integration.commands.FeatureCmd = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(schema.core.enum$,cljs.core.keys(repl_tooling.editor_integration.schemas.EditorFeatures));
var ufv___153412 = schema.utils.use_fn_validation;
var output_schema153317_153413 = schema.core.Any;
var input_schema153318_153414 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(repl_tooling.editor_integration.schemas.EditorState,cljs.core.with_meta(new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schemas","EditorState","schemas/EditorState",807360483,null)], null))),schema.core.one(repl_tooling.editor_integration.commands.FeatureCmd,cljs.core.with_meta(new cljs.core.Symbol(null,"cmd","cmd",1337600384,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"FeatureCmd","FeatureCmd",-1562629130,null)], null))),schema.core.one(schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"args","args",-1338879193,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker153319_153415 = (new cljs.core.Delay((function (){
return schema.core.checker(input_schema153318_153414);
}),null));
var output_checker153320_153416 = (new cljs.core.Delay((function (){
return schema.core.checker(output_schema153317_153413);
}),null));
var ret__49553__auto___153421 = /**
 * Inputs: [state :- schemas/EditorState cmd :- FeatureCmd args]
 * 
 *   Runs an editor command
 */
repl_tooling.editor_integration.commands.state_run_feature_BANG_ = (function repl_tooling$editor_integration$commands$state_run_feature_BANG_(G__153321,G__153322,G__153323){
var validate__47609__auto__ = cljs.core.deref(ufv___153412);
if(cljs.core.truth_(validate__47609__auto__)){
var args__47610__auto___153422 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__153321,G__153322,G__153323], null);
if(cljs.core.truth_(schema.core.fn_validator)){
var G__153328_153423 = new cljs.core.Keyword(null,"input","input",556931961);
var G__153329_153424 = cljs.core.with_meta(new cljs.core.Symbol(null,"state-run-feature!","state-run-feature!",-1026533111,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Runs an editor command"], null));
var G__153330_153425 = input_schema153318_153414;
var G__153331_153426 = cljs.core.deref(input_checker153319_153415);
var G__153332_153427 = args__47610__auto___153422;
(schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5 ? schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5(G__153328_153423,G__153329_153424,G__153330_153425,G__153331_153426,G__153332_153427) : schema.core.fn_validator.call(null,G__153328_153423,G__153329_153424,G__153330_153425,G__153331_153426,G__153332_153427));
} else {
var temp__5753__auto___153431 = (function (){var fexpr__153334 = cljs.core.deref(input_checker153319_153415);
return (fexpr__153334.cljs$core$IFn$_invoke$arity$1 ? fexpr__153334.cljs$core$IFn$_invoke$arity$1(args__47610__auto___153422) : fexpr__153334.call(null,args__47610__auto___153422));
})();
if(cljs.core.truth_(temp__5753__auto___153431)){
var error__47611__auto___153432 = temp__5753__auto___153431;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.with_meta(new cljs.core.Symbol(null,"state-run-feature!","state-run-feature!",-1026533111,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Runs an editor command"], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([error__47611__auto___153432], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema153318_153414,new cljs.core.Keyword(null,"value","value",305978217),args__47610__auto___153422,new cljs.core.Keyword(null,"error","error",-978969032),error__47611__auto___153432], null));
} else {
}
}
} else {
}

var o__47612__auto__ = (function (){var state = G__153321;
var cmd = G__153322;
var args = G__153323;
while(true){
return repl_tooling.editor_integration.commands.run_cmd(cmd,state,new cljs.core.Keyword("editor","features","editor/features",1302258665),args);
break;
}
})();
if(cljs.core.truth_(validate__47609__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
var G__153335_153433 = new cljs.core.Keyword(null,"output","output",-1105869043);
var G__153336_153434 = cljs.core.with_meta(new cljs.core.Symbol(null,"state-run-feature!","state-run-feature!",-1026533111,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Runs an editor command"], null));
var G__153337_153435 = output_schema153317_153413;
var G__153338_153436 = cljs.core.deref(output_checker153320_153416);
var G__153339_153437 = o__47612__auto__;
(schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5 ? schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5(G__153335_153433,G__153336_153434,G__153337_153435,G__153338_153436,G__153339_153437) : schema.core.fn_validator.call(null,G__153335_153433,G__153336_153434,G__153337_153435,G__153338_153436,G__153339_153437));
} else {
var temp__5753__auto___153438 = (function (){var fexpr__153340 = cljs.core.deref(output_checker153320_153416);
return (fexpr__153340.cljs$core$IFn$_invoke$arity$1 ? fexpr__153340.cljs$core$IFn$_invoke$arity$1(o__47612__auto__) : fexpr__153340.call(null,o__47612__auto__));
})();
if(cljs.core.truth_(temp__5753__auto___153438)){
var error__47611__auto___153441 = temp__5753__auto___153438;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.with_meta(new cljs.core.Symbol(null,"state-run-feature!","state-run-feature!",-1026533111,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Runs an editor command"], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([error__47611__auto___153441], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema153317_153413,new cljs.core.Keyword(null,"value","value",305978217),o__47612__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__47611__auto___153441], null));
} else {
}
}
} else {
}

return o__47612__auto__;
});
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(repl_tooling.editor_integration.commands.state_run_feature_BANG_),schema.core.__GT_FnSchema(output_schema153317_153413,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema153318_153414], null)));


/**
 * @interface
 */
repl_tooling.editor_integration.commands.CommandRunner = function(){};

var repl_tooling$editor_integration$commands$CommandRunner$_run_callback_BANG_$dyn_153442 = (function (this$,callback,args){
var x__4521__auto__ = (((this$ == null))?null:this$);
var m__4522__auto__ = (repl_tooling.editor_integration.commands._run_callback_BANG_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$3(this$,callback,args) : m__4522__auto__.call(null,this$,callback,args));
} else {
var m__4519__auto__ = (repl_tooling.editor_integration.commands._run_callback_BANG_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$3(this$,callback,args) : m__4519__auto__.call(null,this$,callback,args));
} else {
throw cljs.core.missing_protocol("CommandRunner.-run-callback!",this$);
}
}
});
repl_tooling.editor_integration.commands._run_callback_BANG_ = (function repl_tooling$editor_integration$commands$_run_callback_BANG_(this$,callback,args){
if((((!((this$ == null)))) && ((!((this$.repl_tooling$editor_integration$commands$CommandRunner$_run_callback_BANG_$arity$3 == null)))))){
return this$.repl_tooling$editor_integration$commands$CommandRunner$_run_callback_BANG_$arity$3(this$,callback,args);
} else {
return repl_tooling$editor_integration$commands$CommandRunner$_run_callback_BANG_$dyn_153442(this$,callback,args);
}
});

var repl_tooling$editor_integration$commands$CommandRunner$_run_feature_BANG_$dyn_153443 = (function (this$,feature,args){
var x__4521__auto__ = (((this$ == null))?null:this$);
var m__4522__auto__ = (repl_tooling.editor_integration.commands._run_feature_BANG_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$3(this$,feature,args) : m__4522__auto__.call(null,this$,feature,args));
} else {
var m__4519__auto__ = (repl_tooling.editor_integration.commands._run_feature_BANG_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$3(this$,feature,args) : m__4519__auto__.call(null,this$,feature,args));
} else {
throw cljs.core.missing_protocol("CommandRunner.-run-feature!",this$);
}
}
});
repl_tooling.editor_integration.commands._run_feature_BANG_ = (function repl_tooling$editor_integration$commands$_run_feature_BANG_(this$,feature,args){
if((((!((this$ == null)))) && ((!((this$.repl_tooling$editor_integration$commands$CommandRunner$_run_feature_BANG_$arity$3 == null)))))){
return this$.repl_tooling$editor_integration$commands$CommandRunner$_run_feature_BANG_$arity$3(this$,feature,args);
} else {
return repl_tooling$editor_integration$commands$CommandRunner$_run_feature_BANG_$dyn_153443(this$,feature,args);
}
});

(reagent.ratom.RAtom.prototype.repl_tooling$editor_integration$commands$CommandRunner$ = cljs.core.PROTOCOL_SENTINEL);

(reagent.ratom.RAtom.prototype.repl_tooling$editor_integration$commands$CommandRunner$_run_callback_BANG_$arity$3 = (function (this$,callback,args){
var this$__$1 = this;
return repl_tooling.editor_integration.commands.state_run_callback_BANG_(this$__$1,callback,args);
}));

(reagent.ratom.RAtom.prototype.repl_tooling$editor_integration$commands$CommandRunner$_run_feature_BANG_$arity$3 = (function (this$,feature,args){
var this$__$1 = this;
return repl_tooling.editor_integration.commands.state_run_feature_BANG_(this$__$1,feature,args);
}));

(cljs.core.Atom.prototype.repl_tooling$editor_integration$commands$CommandRunner$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Atom.prototype.repl_tooling$editor_integration$commands$CommandRunner$_run_callback_BANG_$arity$3 = (function (this$,callback,args){
var this$__$1 = this;
return repl_tooling.editor_integration.commands.state_run_callback_BANG_(this$__$1,callback,args);
}));

(cljs.core.Atom.prototype.repl_tooling$editor_integration$commands$CommandRunner$_run_feature_BANG_$arity$3 = (function (this$,feature,args){
var this$__$1 = this;
return repl_tooling.editor_integration.commands.state_run_feature_BANG_(this$__$1,feature,args);
}));

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {repl_tooling.editor_integration.commands.CommandRunner}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
repl_tooling.editor_integration.commands.Callbacks = (function (quasi_state,__meta,__extmap,__hash){
this.quasi_state = quasi_state;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(repl_tooling.editor_integration.commands.Callbacks.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(repl_tooling.editor_integration.commands.Callbacks.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k153348,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__153353 = k153348;
var G__153353__$1 = (((G__153353 instanceof cljs.core.Keyword))?G__153353.fqn:null);
switch (G__153353__$1) {
case "quasi-state":
return self__.quasi_state;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k153348,else__4475__auto__);

}
}));

(repl_tooling.editor_integration.commands.Callbacks.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__153357){
var vec__153358 = p__153357;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__153358,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__153358,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(repl_tooling.editor_integration.commands.Callbacks.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#repl-tooling.editor-integration.commands.Callbacks{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"quasi-state","quasi-state",458057182),self__.quasi_state],null))], null),self__.__extmap));
}));

(repl_tooling.editor_integration.commands.Callbacks.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__153347){
var self__ = this;
var G__153347__$1 = this;
return (new cljs.core.RecordIter((0),G__153347__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"quasi-state","quasi-state",458057182)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(repl_tooling.editor_integration.commands.Callbacks.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(repl_tooling.editor_integration.commands.Callbacks.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new repl_tooling.editor_integration.commands.Callbacks(self__.quasi_state,self__.__meta,self__.__extmap,self__.__hash));
}));

(repl_tooling.editor_integration.commands.Callbacks.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(repl_tooling.editor_integration.commands.Callbacks.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (coll__4469__auto__){
return (1353694060 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
})(this__4468__auto____$1);
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(repl_tooling.editor_integration.commands.Callbacks.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this153349,other153350){
var self__ = this;
var this153349__$1 = this;
return (((!((other153350 == null)))) && ((((this153349__$1.constructor === other153350.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this153349__$1.quasi_state,other153350.quasi_state)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this153349__$1.__extmap,other153350.__extmap)))))));
}));

(repl_tooling.editor_integration.commands.Callbacks.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"quasi-state","quasi-state",458057182),null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new repl_tooling.editor_integration.commands.Callbacks(self__.quasi_state,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(repl_tooling.editor_integration.commands.Callbacks.prototype.repl_tooling$editor_integration$commands$CommandRunner$ = cljs.core.PROTOCOL_SENTINEL);

(repl_tooling.editor_integration.commands.Callbacks.prototype.repl_tooling$editor_integration$commands$CommandRunner$_run_callback_BANG_$arity$3 = (function (this$,callback,args){
var self__ = this;
var this$__$1 = this;
return repl_tooling.editor_integration.commands.run_cmd(callback,self__.quasi_state,new cljs.core.Keyword("editor","callbacks","editor/callbacks",1179124831),args);
}));

(repl_tooling.editor_integration.commands.Callbacks.prototype.repl_tooling$editor_integration$commands$CommandRunner$_run_feature_BANG_$arity$3 = (function (this$,feature,args){
var self__ = this;
var this$__$1 = this;
return repl_tooling.editor_integration.commands.run_cmd(feature,self__.quasi_state,new cljs.core.Keyword("editor","features","editor/features",1302258665),args);
}));

(repl_tooling.editor_integration.commands.Callbacks.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k153348){
var self__ = this;
var this__4479__auto____$1 = this;
var G__153366 = k153348;
var G__153366__$1 = (((G__153366 instanceof cljs.core.Keyword))?G__153366.fqn:null);
switch (G__153366__$1) {
case "quasi-state":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k153348);

}
}));

(repl_tooling.editor_integration.commands.Callbacks.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__153347){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__153372 = cljs.core.keyword_identical_QMARK_;
var expr__153373 = k__4481__auto__;
if(cljs.core.truth_((pred__153372.cljs$core$IFn$_invoke$arity$2 ? pred__153372.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"quasi-state","quasi-state",458057182),expr__153373) : pred__153372.call(null,new cljs.core.Keyword(null,"quasi-state","quasi-state",458057182),expr__153373)))){
return (new repl_tooling.editor_integration.commands.Callbacks(G__153347,self__.__meta,self__.__extmap,null));
} else {
return (new repl_tooling.editor_integration.commands.Callbacks(self__.quasi_state,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__153347),null));
}
}));

(repl_tooling.editor_integration.commands.Callbacks.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"quasi-state","quasi-state",458057182),self__.quasi_state,null))], null),self__.__extmap));
}));

(repl_tooling.editor_integration.commands.Callbacks.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__153347){
var self__ = this;
var this__4471__auto____$1 = this;
return (new repl_tooling.editor_integration.commands.Callbacks(self__.quasi_state,G__153347,self__.__extmap,self__.__hash));
}));

(repl_tooling.editor_integration.commands.Callbacks.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4478__auto__,(0)),cljs.core._nth(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(repl_tooling.editor_integration.commands.Callbacks.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"quasi-state","quasi-state",2098588709,null)], null);
}));

(repl_tooling.editor_integration.commands.Callbacks.cljs$lang$type = true);

(repl_tooling.editor_integration.commands.Callbacks.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"repl-tooling.editor-integration.commands/Callbacks",null,(1),null));
}));

(repl_tooling.editor_integration.commands.Callbacks.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"repl-tooling.editor-integration.commands/Callbacks");
}));

/**
 * Positional factory function for repl-tooling.editor-integration.commands/Callbacks.
 */
repl_tooling.editor_integration.commands.__GT_Callbacks = (function repl_tooling$editor_integration$commands$__GT_Callbacks(quasi_state){
return (new repl_tooling.editor_integration.commands.Callbacks(quasi_state,null,null,null));
});

/**
 * Factory function for repl-tooling.editor-integration.commands/Callbacks, taking a map of keywords to field values.
 */
repl_tooling.editor_integration.commands.map__GT_Callbacks = (function repl_tooling$editor_integration$commands$map__GT_Callbacks(G__153351){
var extmap__4512__auto__ = (function (){var G__153380 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__153351,new cljs.core.Keyword(null,"quasi-state","quasi-state",458057182));
if(cljs.core.record_QMARK_(G__153351)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__153380);
} else {
return G__153380;
}
})();
return (new repl_tooling.editor_integration.commands.Callbacks(new cljs.core.Keyword(null,"quasi-state","quasi-state",458057182).cljs$core$IFn$_invoke$arity$1(G__153351),null,cljs.core.not_empty(extmap__4512__auto__),null));
});

repl_tooling.editor_integration.commands.run_callback_BANG_ = (function repl_tooling$editor_integration$commands$run_callback_BANG_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___153472 = arguments.length;
var i__4830__auto___153473 = (0);
while(true){
if((i__4830__auto___153473 < len__4829__auto___153472)){
args__4835__auto__.push((arguments[i__4830__auto___153473]));

var G__153474 = (i__4830__auto___153473 + (1));
i__4830__auto___153473 = G__153474;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((2) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((2)),(0),null)):null);
return repl_tooling.editor_integration.commands.run_callback_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4836__auto__);
});

(repl_tooling.editor_integration.commands.run_callback_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,callback,args){
if(cljs.core.truth_(this$)){
return repl_tooling.editor_integration.commands._run_callback_BANG_(this$,callback,args);
} else {
return null;
}
}));

(repl_tooling.editor_integration.commands.run_callback_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(repl_tooling.editor_integration.commands.run_callback_BANG_.cljs$lang$applyTo = (function (seq153381){
var G__153382 = cljs.core.first(seq153381);
var seq153381__$1 = cljs.core.next(seq153381);
var G__153383 = cljs.core.first(seq153381__$1);
var seq153381__$2 = cljs.core.next(seq153381__$1);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__153382,G__153383,seq153381__$2);
}));

repl_tooling.editor_integration.commands.run_feature_BANG_ = (function repl_tooling$editor_integration$commands$run_feature_BANG_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___153486 = arguments.length;
var i__4830__auto___153487 = (0);
while(true){
if((i__4830__auto___153487 < len__4829__auto___153486)){
args__4835__auto__.push((arguments[i__4830__auto___153487]));

var G__153489 = (i__4830__auto___153487 + (1));
i__4830__auto___153487 = G__153489;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((2) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((2)),(0),null)):null);
return repl_tooling.editor_integration.commands.run_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4836__auto__);
});

(repl_tooling.editor_integration.commands.run_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,feature,args){
if(cljs.core.truth_(this$)){
return repl_tooling.editor_integration.commands._run_feature_BANG_(this$,feature,args);
} else {
return null;
}
}));

(repl_tooling.editor_integration.commands.run_feature_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(repl_tooling.editor_integration.commands.run_feature_BANG_.cljs$lang$applyTo = (function (seq153384){
var G__153385 = cljs.core.first(seq153384);
var seq153384__$1 = cljs.core.next(seq153384);
var G__153386 = cljs.core.first(seq153384__$1);
var seq153384__$2 = cljs.core.next(seq153384__$1);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__153385,G__153386,seq153384__$2);
}));


//# sourceMappingURL=repl_tooling.editor_integration.commands.js.map
