goog.provide('expectations');
expectations.no_op = (function expectations$no_op(var_args){
var args__4835__auto__ = [];
var len__4829__auto___52315 = arguments.length;
var i__4830__auto___52316 = (0);
while(true){
if((i__4830__auto___52316 < len__4829__auto___52315)){
args__4835__auto__.push((arguments[i__4830__auto___52316]));

var G__52317 = (i__4830__auto___52316 + (1));
i__4830__auto___52316 = G__52317;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return expectations.no_op.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(expectations.no_op.cljs$core$IFn$_invoke$arity$variadic = (function (_){
return null;
}));

(expectations.no_op.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(expectations.no_op.cljs$lang$applyTo = (function (seq51477){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51477));
}));

expectations.in$ = (function expectations$in(n){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("expectations","in","expectations/in",-1616294280),n,new cljs.core.Keyword("expectations","in-flag","expectations/in-flag",-130698686),true], null);
});
expectations.run_tests_on_shutdown = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
expectations.warn_on_iref_updates_boolean = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
expectations._STAR_test_name_STAR_ = null;
expectations._STAR_test_meta_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
expectations._STAR_test_var_STAR_ = null;
expectations._STAR_prune_stacktrace_STAR_ = true;
expectations._STAR_report_counters_STAR_ = null;
expectations.initial_report_counters = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"test","test",577538877),(0),new cljs.core.Keyword(null,"pass","pass",1574159993),(0),new cljs.core.Keyword(null,"fail","fail",1706214930),(0),new cljs.core.Keyword(null,"error","error",-978969032),(0),new cljs.core.Keyword(null,"run-time","run-time",-1231674133),(0)], null);
expectations.reminder = null;
expectations.show_raw_choice = (function expectations$show_raw_choice(){
var temp__5751__auto__ = expectations.platform.getenv("EXPECTATIONS_SHOW_RAW");
if(cljs.core.truth_(temp__5751__auto__)){
var choice = temp__5751__auto__;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("TRUE",clojure.string.upper_case(choice));
} else {
return true;
}
});
expectations.colorize_choice = (function expectations$colorize_choice(){
return clojure.string.upper_case((function (){var or__4223__auto__ = expectations.platform.getenv("EXPECTATIONS_COLORIZE");
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.not(expectations.platform.on_windows_QMARK_()));
}
})());
});
expectations.ansi_colors = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"reset","reset",-800929946),"[0m",new cljs.core.Keyword(null,"red","red",-969428204),"[31m",new cljs.core.Keyword(null,"blue","blue",-622100620),"[34m",new cljs.core.Keyword(null,"yellow","yellow",-881035449),"[33m",new cljs.core.Keyword(null,"cyan","cyan",1118839274),"[36m",new cljs.core.Keyword(null,"green","green",-945526839),"[32m",new cljs.core.Keyword(null,"magenta","magenta",1687937081),"[35m"], null);
expectations.ansi = (function expectations$ansi(code){
return ["\u001B",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$3(expectations.ansi_colors,code,new cljs.core.Keyword(null,"reset","reset",-800929946).cljs$core$IFn$_invoke$arity$1(expectations.ansi_colors)))].join('');
});
expectations.color = (function expectations$color(var_args){
var args__4835__auto__ = [];
var len__4829__auto___52326 = arguments.length;
var i__4830__auto___52327 = (0);
while(true){
if((i__4830__auto___52327 < len__4829__auto___52326)){
args__4835__auto__.push((arguments[i__4830__auto___52327]));

var G__52328 = (i__4830__auto___52327 + (1));
i__4830__auto___52327 = G__52328;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return expectations.color.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(expectations.color.cljs$core$IFn$_invoke$arity$variadic = (function (code,s){
return [expectations.ansi(code),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,s)),expectations.ansi(new cljs.core.Keyword(null,"reset","reset",-800929946))].join('');
}));

(expectations.color.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(expectations.color.cljs$lang$applyTo = (function (seq51498){
var G__51499 = cljs.core.first(seq51498);
var seq51498__$1 = cljs.core.next(seq51498);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51499,seq51498__$1);
}));

expectations.colorize_filename = (function expectations$colorize_filename(s){
var pred__51510 = cljs.core._EQ_;
var expr__51511 = expectations.colorize_choice();
if(cljs.core.truth_((pred__51510.cljs$core$IFn$_invoke$arity$2 ? pred__51510.cljs$core$IFn$_invoke$arity$2("TRUE",expr__51511) : pred__51510.call(null,"TRUE",expr__51511)))){
return expectations.color.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"magenta","magenta",1687937081),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s], 0));
} else {
return s;
}
});
expectations.colorize_raw = (function expectations$colorize_raw(s){
var pred__51513 = cljs.core._EQ_;
var expr__51514 = expectations.colorize_choice();
if(cljs.core.truth_((pred__51513.cljs$core$IFn$_invoke$arity$2 ? pred__51513.cljs$core$IFn$_invoke$arity$2("TRUE",expr__51514) : pred__51513.call(null,"TRUE",expr__51514)))){
return expectations.color.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"cyan","cyan",1118839274),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s], 0));
} else {
return s;
}
});
expectations.colorize_results = (function expectations$colorize_results(pred,s){
var pred__51519 = cljs.core._EQ_;
var expr__51520 = expectations.colorize_choice();
if(cljs.core.truth_((pred__51519.cljs$core$IFn$_invoke$arity$2 ? pred__51519.cljs$core$IFn$_invoke$arity$2("TRUE",expr__51520) : pred__51519.call(null,"TRUE",expr__51520)))){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$0 ? pred.cljs$core$IFn$_invoke$arity$0() : pred.call(null)))){
return expectations.color.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"green","green",-945526839),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s], 0));
} else {
return expectations.color.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"red","red",-969428204),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s], 0));
}
} else {
return s;
}
});
expectations.colorize_warn = (function expectations$colorize_warn(s){
var pred__51533 = cljs.core._EQ_;
var expr__51534 = expectations.colorize_choice();
if(cljs.core.truth_((pred__51533.cljs$core$IFn$_invoke$arity$2 ? pred__51533.cljs$core$IFn$_invoke$arity$2("TRUE",expr__51534) : pred__51533.call(null,"TRUE",expr__51534)))){
return expectations.color.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"yellow","yellow",-881035449),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s], 0));
} else {
return s;
}
});
expectations.string_join = (function expectations$string_join(s,coll){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(s,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,coll));
});
expectations.inc_counter_BANG_ = (function expectations$inc_counter_BANG_(counters,name){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(counters,name,((function (){var or__4223__auto__ = (counters.cljs$core$IFn$_invoke$arity$1 ? counters.cljs$core$IFn$_invoke$arity$1(name) : counters.call(null,name));
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return (0);
}
})() + (1)));
});
expectations.inc_report_counter = (function expectations$inc_report_counter(name){
if(cljs.core.truth_(expectations._STAR_report_counters_STAR_)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(expectations._STAR_report_counters_STAR_,expectations.inc_counter_BANG_,name);
} else {
return null;
}
});
expectations.test_name = (function expectations$test_name(p__51539){
var map__51540 = p__51539;
var map__51540__$1 = cljs.core.__destructure_map(map__51540);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51540__$1,new cljs.core.Keyword(null,"line","line",212345235));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51540__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join('');
});
expectations.test_file = (function expectations$test_file(p__51545){
var map__51555 = p__51545;
var map__51555__$1 = cljs.core.__destructure_map(map__51555);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51555__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51555__$1,new cljs.core.Keyword(null,"line","line",212345235));
return expectations.colorize_filename([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.last(cljs.core.re_seq(/[0-9A-Za-z_\.]+/,file))),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''));
});
expectations.raw_str = (function expectations$raw_str(p__51560){
var vec__51561 = p__51560;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51561,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51561,(1),null);
var sb__4760__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__51564_52336 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__51565_52337 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__51566_52338 = true;
var _STAR_print_fn_STAR__temp_val__51567_52339 = (function (x__4761__auto__){
return sb__4760__auto__.append(x__4761__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__51566_52338);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__51567_52339);

try{var G__51569_52341 = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"expect","expect",470404175,null),null,(1),null)),(new cljs.core.List(null,e,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,a,null,(1),null))], 0))));
(expectations.platform.pprint.cljs$core$IFn$_invoke$arity$1 ? expectations.platform.pprint.cljs$core$IFn$_invoke$arity$1(G__51569_52341) : expectations.platform.pprint.call(null,G__51569_52341));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__51565_52337);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__51564_52336);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4760__auto__);
});
expectations.pp_str = (function expectations$pp_str(e){
return clojure.string.trim((function (){var sb__4760__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__51574_52342 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__51575_52343 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__51576_52344 = true;
var _STAR_print_fn_STAR__temp_val__51577_52345 = (function (x__4761__auto__){
return sb__4760__auto__.append(x__4761__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__51576_52344);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__51577_52345);

try{(expectations.platform.pprint.cljs$core$IFn$_invoke$arity$1 ? expectations.platform.pprint.cljs$core$IFn$_invoke$arity$1(e) : expectations.platform.pprint.call(null,e));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__51575_52343);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__51574_52342);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4760__auto__);
})());
});
expectations.fail = (function expectations$fail(test_name,test_meta,msg){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\nfailure in (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expectations.test_file(test_meta)),") : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(test_meta))].join('')], 0));

return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
expectations.summary = (function expectations$summary(msg){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
expectations.started = (function expectations$started(test_name,test_meta){
return null;
});
expectations.finished = (function expectations$finished(test_name,test_meta){
return null;
});
expectations.ns_finished = (function expectations$ns_finished(a_ns){
return null;
});
expectations.expectation_finished = (function expectations$expectation_finished(a_var){
return null;
});
expectations.ignored_fns = (function expectations$ignored_fns(p__51588){
var map__51589 = p__51588;
var map__51589__$1 = cljs.core.__destructure_map(map__51589);
var className = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51589__$1,new cljs.core.Keyword(null,"className","className",-1983287057));
var fileName = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51589__$1,new cljs.core.Keyword(null,"fileName","fileName",1063478601));
if(cljs.core.truth_(expectations._STAR_prune_stacktrace_STAR_)){
var or__4223__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fileName,"expectations.clj");
if(or__4223__auto__){
return or__4223__auto__;
} else {
var or__4223__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fileName,"expectations_options.clj");
if(or__4223__auto____$1){
return or__4223__auto____$1;
} else {
var or__4223__auto____$2 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fileName,"NO_SOURCE_FILE");
if(or__4223__auto____$2){
return or__4223__auto____$2;
} else {
var or__4223__auto____$3 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fileName,"interruptible_eval.clj");
if(or__4223__auto____$3){
return or__4223__auto____$3;
} else {
var or__4223__auto____$4 = cljs.core.re_seq(/clojure\.lang/,className);
if(cljs.core.truth_(or__4223__auto____$4)){
return or__4223__auto____$4;
} else {
var or__4223__auto____$5 = cljs.core.re_seq(/clojure\.core/,className);
if(cljs.core.truth_(or__4223__auto____$5)){
return or__4223__auto____$5;
} else {
var or__4223__auto____$6 = cljs.core.re_seq(/clojure\.main/,className);
if(cljs.core.truth_(or__4223__auto____$6)){
return or__4223__auto____$6;
} else {
var or__4223__auto____$7 = cljs.core.re_seq(/java\.lang/,className);
if(cljs.core.truth_(or__4223__auto____$7)){
return or__4223__auto____$7;
} else {
return cljs.core.re_seq(/java\.util\.concurrent\.ThreadPoolExecutor\$Worker/,className);
}
}
}
}
}
}
}
}
} else {
return null;
}
});
expectations.stackline__GT_str = (function expectations$stackline__GT_str(p__51593){
var map__51594 = p__51593;
var map__51594__$1 = cljs.core.__destructure_map(map__51594);
var className = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51594__$1,new cljs.core.Keyword(null,"className","className",-1983287057));
var methodName = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51594__$1,new cljs.core.Keyword(null,"methodName","methodName",-2055958885));
var fileName = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51594__$1,new cljs.core.Keyword(null,"fileName","fileName",1063478601));
var lineNumber = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51594__$1,new cljs.core.Keyword(null,"lineNumber","lineNumber",974255001));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(methodName,"invoke")){
return ["           on (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fileName),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lineNumber),")"].join('');
} else {
return ["           ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(className),"$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(methodName)," (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fileName),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lineNumber),")"].join('');
}
});
expectations.pruned_stack_trace = (function expectations$pruned_stack_trace(t){
return t.stack;
});
expectations.__GT_failure_message = (function expectations$__GT_failure_message(p__51600){
var map__51601 = p__51600;
var map__51601__$1 = cljs.core.__destructure_map(map__51601);
var raw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51601__$1,new cljs.core.Keyword(null,"raw","raw",1604651272));
var ref_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51601__$1,new cljs.core.Keyword(null,"ref-data","ref-data",743306603));
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51601__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var expected_message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51601__$1,new cljs.core.Keyword(null,"expected-message","expected-message",-615750006));
var actual_message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51601__$1,new cljs.core.Keyword(null,"actual-message","actual-message",1010600886));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51601__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var list = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51601__$1,new cljs.core.Keyword(null,"list","list",765357683));
var show_raw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51601__$1,new cljs.core.Keyword(null,"show-raw","show-raw",312153310));
return expectations.string_join("\n",new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(expectations.reminder)?expectations.colorize_warn(["     ***** ",clojure.string.upper_case(expectations.reminder)," *****"].join('')):null),(cljs.core.truth_(raw)?(cljs.core.truth_((function (){var or__4223__auto__ = show_raw;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return expectations.show_raw_choice();
}
})())?expectations.colorize_raw(expectations.raw_str(raw)):null):null),(function (){var temp__5753__auto__ = ref_data;
if(cljs.core.truth_(temp__5753__auto__)){
var vec__51609 = temp__5753__auto__;
var seq__51610 = cljs.core.seq(vec__51609);
var first__51611 = cljs.core.first(seq__51610);
var seq__51610__$1 = cljs.core.next(seq__51610);
var n1 = first__51611;
var first__51611__$1 = cljs.core.first(seq__51610__$1);
var seq__51610__$2 = cljs.core.next(seq__51610__$1);
var v1 = first__51611__$1;
var _ = seq__51610__$2;
var G__51614 = "             locals %s: %s";
var G__51615 = n1;
var G__51616 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v1], 0));
return (expectations.platform.format.cljs$core$IFn$_invoke$arity$3 ? expectations.platform.format.cljs$core$IFn$_invoke$arity$3(G__51614,G__51615,G__51616) : expectations.platform.format.call(null,G__51614,G__51615,G__51616));
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = ref_data;
if(cljs.core.truth_(temp__5753__auto__)){
var vec__51620 = temp__5753__auto__;
var seq__51621 = cljs.core.seq(vec__51620);
var first__51622 = cljs.core.first(seq__51621);
var seq__51621__$1 = cljs.core.next(seq__51621);
var _ = first__51622;
var first__51622__$1 = cljs.core.first(seq__51621__$1);
var seq__51621__$2 = cljs.core.next(seq__51621__$1);
var ___$1 = first__51622__$1;
var the_rest = seq__51621__$2;
if(the_rest){
return expectations.string_join("\n",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__51596_SHARP_){
var G__51624 = "                    %s: %s";
var G__51625 = cljs.core.first(p1__51596_SHARP_);
var G__51626 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.second(p1__51596_SHARP_)], 0));
return (expectations.platform.format.cljs$core$IFn$_invoke$arity$3 ? expectations.platform.format.cljs$core$IFn$_invoke$arity$3(G__51624,G__51625,G__51626) : expectations.platform.format.call(null,G__51624,G__51625,G__51626));
}),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),the_rest)));
} else {
return null;
}
} else {
return null;
}
})(),(cljs.core.truth_(result)?["           ",expectations.string_join(" ",result)].join(''):null),(cljs.core.truth_((function (){var and__4221__auto__ = result;
if(cljs.core.truth_(and__4221__auto__)){
var or__4223__auto__ = expected_message;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
var or__4223__auto____$1 = actual_message;
if(cljs.core.truth_(or__4223__auto____$1)){
return or__4223__auto____$1;
} else {
return message;
}
}
} else {
return and__4221__auto__;
}
})())?"":null),(cljs.core.truth_(expected_message)?["           ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expected_message)].join(''):null),(cljs.core.truth_(actual_message)?["           ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(actual_message)].join(''):null),(cljs.core.truth_(message)?["           ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join(''):null),(cljs.core.truth_(list)?["\n",expectations.string_join("\n\n",cljs.core.map.cljs$core$IFn$_invoke$arity$2(expectations.__GT_failure_message,list))].join(''):null)], null));
});
if((typeof expectations !== 'undefined') && (typeof expectations.report !== 'undefined')){
} else {
expectations.report = (function (){var method_table__4712__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4713__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4714__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4715__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4716__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__51640 = cljs.core.get_global_hierarchy;
return (fexpr__51640.cljs$core$IFn$_invoke$arity$0 ? fexpr__51640.cljs$core$IFn$_invoke$arity$0() : fexpr__51640.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("expectations","report"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4716__auto__,method_table__4712__auto__,prefer_table__4713__auto__,method_cache__4714__auto__,cached_hierarchy__4715__auto__));
})();
}
expectations.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"pass","pass",1574159993),(function (m){
cljs.core.alter_meta_BANG_.cljs$core$IFn$_invoke$arity$variadic(expectations._STAR_test_var_STAR_,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("expectations","run","expectations/run",-1889289556),true,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"success","success",1890645906),"",new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(expectations._STAR_test_meta_STAR_)], null)], 0));

return expectations.inc_report_counter(new cljs.core.Keyword(null,"pass","pass",1574159993));
}));
expectations.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"fail","fail",1706214930),(function (m){
expectations.inc_report_counter(new cljs.core.Keyword(null,"fail","fail",1706214930));

var current_test = expectations._STAR_test_var_STAR_;
var message = expectations.__GT_failure_message(m);
cljs.core.alter_meta_BANG_.cljs$core$IFn$_invoke$arity$variadic(current_test,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("expectations","run","expectations/run",-1889289556),true,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fail","fail",1706214930),message,new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(expectations._STAR_test_meta_STAR_)], null)], 0));

return expectations.fail.call(null,expectations._STAR_test_name_STAR_,expectations._STAR_test_meta_STAR_,message);
}));
expectations.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"error","error",-978969032),(function (p__51649){
var map__51650 = p__51649;
var map__51650__$1 = cljs.core.__destructure_map(map__51650);
var m = map__51650__$1;
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51650__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var raw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51650__$1,new cljs.core.Keyword(null,"raw","raw",1604651272));
expectations.inc_report_counter(new cljs.core.Keyword(null,"error","error",-978969032));

var result__$1 = cljs.core.first(result);
var current_test = expectations._STAR_test_var_STAR_;
var message = expectations.string_join("\n",new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(expectations.reminder)?expectations.colorize_warn(["     ***** ",clojure.string.upper_case(expectations.reminder)," *****"].join('')):null),(cljs.core.truth_(raw)?((expectations.show_raw_choice())?expectations.colorize_raw(expectations.raw_str(raw)):null):null),(function (){var temp__5753__auto__ = new cljs.core.Keyword(null,"expected-message","expected-message",-615750006).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5753__auto__)){
var msg = temp__5753__auto__;
return ["  exp-msg: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('');
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = new cljs.core.Keyword(null,"actual-message","actual-message",1010600886).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5753__auto__)){
var msg = temp__5753__auto__;
return ["  act-msg: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('');
} else {
return null;
}
})(),["    threw: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(result__$1))," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expectations.platform.get_message(result__$1))].join(''),expectations.pruned_stack_trace(result__$1)], null));
cljs.core.alter_meta_BANG_.cljs$core$IFn$_invoke$arity$variadic(current_test,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("expectations","run","expectations/run",-1889289556),true,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),message,new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(expectations._STAR_test_meta_STAR_)], null)], 0));

return expectations.fail.call(null,expectations._STAR_test_name_STAR_,expectations._STAR_test_meta_STAR_,message);
}));
expectations.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"summary","summary",380847952),(function (p__51662){
var map__51663 = p__51662;
var map__51663__$1 = cljs.core.__destructure_map(map__51663);
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51663__$1,new cljs.core.Keyword(null,"test","test",577538877));
var pass = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51663__$1,new cljs.core.Keyword(null,"pass","pass",1574159993));
var fail = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51663__$1,new cljs.core.Keyword(null,"fail","fail",1706214930));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51663__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var run_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51663__$1,new cljs.core.Keyword(null,"run-time","run-time",-1231674133));
var ignored_expectations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51663__$1,new cljs.core.Keyword(null,"ignored-expectations","ignored-expectations",303531187));
return expectations.summary.call(null,["\nRan ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(test)," tests containing ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((pass + fail) + error))," assertions in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(run_time)," msecs\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1((((ignored_expectations > (0)))?expectations.colorize_warn(["IGNORED ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ignored_expectations)," EXPECTATIONS\n"].join('')):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(expectations.colorize_results(cljs.core.partial.cljs$core$IFn$_invoke$arity$4(cljs.core._EQ_,(0),fail,error),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(fail)," failures, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(error)," errors"].join(''))),"."].join(''));
}));
expectations.disable_run_on_shutdown = (function expectations$disable_run_on_shutdown(){
return cljs.core.reset_BANG_(expectations.run_tests_on_shutdown,false);
});
expectations.warn_on_iref_updates = (function expectations$warn_on_iref_updates(){
return cljs.core.reset_BANG_(expectations.warn_on_iref_updates_boolean,true);
});
expectations.add_watch_every_iref_for_updates = (function expectations$add_watch_every_iref_for_updates(iref_vars){
var seq__51672 = cljs.core.seq(iref_vars);
var chunk__51673 = null;
var count__51674 = (0);
var i__51675 = (0);
while(true){
if((i__51675 < count__51674)){
var var$ = chunk__51673.cljs$core$IIndexed$_nth$arity$2(null,i__51675);
cljs.core.add_watch(cljs.core.deref(var$),new cljs.core.Keyword("expectations","expectations-watching-state-modifications","expectations/expectations-watching-state-modifications",1804238518),((function (seq__51672,chunk__51673,count__51674,i__51675,var$){
return (function (_,reference,old_state,new_state){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([expectations.colorize_warn(clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, ["WARNING:",(function (){var or__4223__auto__ = expectations._STAR_test_name_STAR_;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return "test name unset";
}
})(),"modified",var$,"from",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([old_state], 0)),"to",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new_state], 0))], null)))], 0));

if(cljs.core.truth_(expectations._STAR_test_name_STAR_)){
return null;
} else {
return expectations.platform.print_stack_trace((new Error("stacktrace for var modification")));
}
});})(seq__51672,chunk__51673,count__51674,i__51675,var$))
);


var G__52368 = seq__51672;
var G__52369 = chunk__51673;
var G__52370 = count__51674;
var G__52371 = (i__51675 + (1));
seq__51672 = G__52368;
chunk__51673 = G__52369;
count__51674 = G__52370;
i__51675 = G__52371;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__51672);
if(temp__5753__auto__){
var seq__51672__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51672__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__51672__$1);
var G__52372 = cljs.core.chunk_rest(seq__51672__$1);
var G__52373 = c__4649__auto__;
var G__52374 = cljs.core.count(c__4649__auto__);
var G__52375 = (0);
seq__51672 = G__52372;
chunk__51673 = G__52373;
count__51674 = G__52374;
i__51675 = G__52375;
continue;
} else {
var var$ = cljs.core.first(seq__51672__$1);
cljs.core.add_watch(cljs.core.deref(var$),new cljs.core.Keyword("expectations","expectations-watching-state-modifications","expectations/expectations-watching-state-modifications",1804238518),((function (seq__51672,chunk__51673,count__51674,i__51675,var$,seq__51672__$1,temp__5753__auto__){
return (function (_,reference,old_state,new_state){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([expectations.colorize_warn(clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, ["WARNING:",(function (){var or__4223__auto__ = expectations._STAR_test_name_STAR_;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return "test name unset";
}
})(),"modified",var$,"from",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([old_state], 0)),"to",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new_state], 0))], null)))], 0));

if(cljs.core.truth_(expectations._STAR_test_name_STAR_)){
return null;
} else {
return expectations.platform.print_stack_trace((new Error("stacktrace for var modification")));
}
});})(seq__51672,chunk__51673,count__51674,i__51675,var$,seq__51672__$1,temp__5753__auto__))
);


var G__52376 = cljs.core.next(seq__51672__$1);
var G__52377 = null;
var G__52378 = (0);
var G__52379 = (0);
seq__51672 = G__52376;
chunk__51673 = G__52377;
count__51674 = G__52378;
i__51675 = G__52379;
continue;
}
} else {
return null;
}
}
break;
}
});
expectations.remove_watch_every_iref_for_updates = (function expectations$remove_watch_every_iref_for_updates(iref_vars){
var seq__51686 = cljs.core.seq(iref_vars);
var chunk__51687 = null;
var count__51688 = (0);
var i__51689 = (0);
while(true){
if((i__51689 < count__51688)){
var var$ = chunk__51687.cljs$core$IIndexed$_nth$arity$2(null,i__51689);
cljs.core.remove_watch(cljs.core.deref(var$),new cljs.core.Keyword("expectations","expectations-watching-state-modifications","expectations/expectations-watching-state-modifications",1804238518));


var G__52380 = seq__51686;
var G__52381 = chunk__51687;
var G__52382 = count__51688;
var G__52383 = (i__51689 + (1));
seq__51686 = G__52380;
chunk__51687 = G__52381;
count__51688 = G__52382;
i__51689 = G__52383;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__51686);
if(temp__5753__auto__){
var seq__51686__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51686__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__51686__$1);
var G__52384 = cljs.core.chunk_rest(seq__51686__$1);
var G__52385 = c__4649__auto__;
var G__52386 = cljs.core.count(c__4649__auto__);
var G__52387 = (0);
seq__51686 = G__52384;
chunk__51687 = G__52385;
count__51688 = G__52386;
i__51689 = G__52387;
continue;
} else {
var var$ = cljs.core.first(seq__51686__$1);
cljs.core.remove_watch(cljs.core.deref(var$),new cljs.core.Keyword("expectations","expectations-watching-state-modifications","expectations/expectations-watching-state-modifications",1804238518));


var G__52388 = cljs.core.next(seq__51686__$1);
var G__52389 = null;
var G__52390 = (0);
var G__52391 = (0);
seq__51686 = G__52388;
chunk__51687 = G__52389;
count__51688 = G__52390;
i__51689 = G__52391;
continue;
}
} else {
return null;
}
}
break;
}
});
expectations.test_var = (function expectations$test_var(v){
var temp__5753__auto__ = cljs.core.deref(v);
if(cljs.core.truth_(temp__5753__auto__)){
var t = temp__5753__auto__;
var tn = expectations.test_name(cljs.core.meta(v));
var tm = cljs.core.meta(v);
expectations.started.call(null,tn,tm);

expectations.inc_report_counter(new cljs.core.Keyword(null,"test","test",577538877));

var _STAR_test_name_STAR__orig_val__51693_52392 = expectations._STAR_test_name_STAR_;
var _STAR_test_meta_STAR__orig_val__51694_52393 = expectations._STAR_test_meta_STAR_;
var _STAR_test_var_STAR__orig_val__51695_52394 = expectations._STAR_test_var_STAR_;
var _STAR_test_name_STAR__temp_val__51696_52395 = tn;
var _STAR_test_meta_STAR__temp_val__51697_52396 = tm;
var _STAR_test_var_STAR__temp_val__51698_52397 = v;
(expectations._STAR_test_name_STAR_ = _STAR_test_name_STAR__temp_val__51696_52395);

(expectations._STAR_test_meta_STAR_ = _STAR_test_meta_STAR__temp_val__51697_52396);

(expectations._STAR_test_var_STAR_ = _STAR_test_var_STAR__temp_val__51698_52397);

try{try{(t.cljs$core$IFn$_invoke$arity$0 ? t.cljs$core$IFn$_invoke$arity$0() : t.call(null));
}catch (e51699){if((e51699 instanceof Error)){
var e_52398 = e51699;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\nunexpected error in",tn], 0));

expectations.platform.print_stack_trace(e_52398);
} else {
throw e51699;

}
}}finally {(expectations._STAR_test_var_STAR_ = _STAR_test_var_STAR__orig_val__51695_52394);

(expectations._STAR_test_meta_STAR_ = _STAR_test_meta_STAR__orig_val__51694_52393);

(expectations._STAR_test_name_STAR_ = _STAR_test_name_STAR__orig_val__51693_52392);
}
return expectations.finished.call(null,tn,tm);
} else {
return null;
}
});
expectations.execute_vars = (function expectations$execute_vars(vars){
var seq__51700 = cljs.core.seq(vars);
var chunk__51701 = null;
var count__51702 = (0);
var i__51703 = (0);
while(true){
if((i__51703 < count__51702)){
var var$ = chunk__51701.cljs$core$IIndexed$_nth$arity$2(null,i__51703);
if(expectations.platform.bound_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([var$], 0))){
var temp__5753__auto___52399 = cljs.core.deref(var$);
if(cljs.core.truth_(temp__5753__auto___52399)){
var vv_52400 = temp__5753__auto___52399;
(vv_52400.cljs$core$IFn$_invoke$arity$0 ? vv_52400.cljs$core$IFn$_invoke$arity$0() : vv_52400.call(null));
} else {
}
} else {
}


var G__52401 = seq__51700;
var G__52402 = chunk__51701;
var G__52403 = count__51702;
var G__52404 = (i__51703 + (1));
seq__51700 = G__52401;
chunk__51701 = G__52402;
count__51702 = G__52403;
i__51703 = G__52404;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__51700);
if(temp__5753__auto__){
var seq__51700__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51700__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__51700__$1);
var G__52405 = cljs.core.chunk_rest(seq__51700__$1);
var G__52406 = c__4649__auto__;
var G__52407 = cljs.core.count(c__4649__auto__);
var G__52408 = (0);
seq__51700 = G__52405;
chunk__51701 = G__52406;
count__51702 = G__52407;
i__51703 = G__52408;
continue;
} else {
var var$ = cljs.core.first(seq__51700__$1);
if(expectations.platform.bound_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([var$], 0))){
var temp__5753__auto___52409__$1 = cljs.core.deref(var$);
if(cljs.core.truth_(temp__5753__auto___52409__$1)){
var vv_52410 = temp__5753__auto___52409__$1;
(vv_52410.cljs$core$IFn$_invoke$arity$0 ? vv_52410.cljs$core$IFn$_invoke$arity$0() : vv_52410.call(null));
} else {
}
} else {
}


var G__52411 = cljs.core.next(seq__51700__$1);
var G__52412 = null;
var G__52413 = (0);
var G__52414 = (0);
seq__51700 = G__52411;
chunk__51701 = G__52412;
count__51702 = G__52413;
i__51703 = G__52414;
continue;
}
} else {
return null;
}
}
break;
}
});
expectations.create_context = (function expectations$create_context(in_context_vars,work){
var G__51721 = cljs.core.count(in_context_vars);
switch (G__51721) {
case (0):
return (work.cljs$core$IFn$_invoke$arity$0 ? work.cljs$core$IFn$_invoke$arity$0() : work.call(null));

break;
case (1):
var fexpr__51722 = cljs.core.deref(cljs.core.first(in_context_vars));
return (fexpr__51722.cljs$core$IFn$_invoke$arity$1 ? fexpr__51722.cljs$core$IFn$_invoke$arity$1(work) : fexpr__51722.call(null,work));

break;
default:
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["expectations only supports 0 or 1 :in-context fns. Ignoring:",in_context_vars], 0));

return (work.cljs$core$IFn$_invoke$arity$0 ? work.cljs$core$IFn$_invoke$arity$0() : work.call(null));

}
});
expectations.test_vars = (function expectations$test_vars(vars_by_kind,ignored_expectations){
expectations.execute_vars(new cljs.core.Keyword(null,"before-run","before-run",-1615468948).cljs$core$IFn$_invoke$arity$1(vars_by_kind));

if(cljs.core.truth_(cljs.core.deref(expectations.warn_on_iref_updates_boolean))){
expectations.add_watch_every_iref_for_updates(new cljs.core.Keyword(null,"iref","iref",2006639238).cljs$core$IFn$_invoke$arity$1(vars_by_kind));
} else {
}

var _STAR_report_counters_STAR__orig_val__51728 = expectations._STAR_report_counters_STAR_;
var _STAR_report_counters_STAR__temp_val__51729 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(expectations.initial_report_counters);
(expectations._STAR_report_counters_STAR_ = _STAR_report_counters_STAR__temp_val__51729);

try{var ns__GT_vars = cljs.core.group_by(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.meta),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"line","line",212345235),cljs.core.meta),new cljs.core.Keyword(null,"expectation","expectation",-250416721).cljs$core$IFn$_invoke$arity$1(vars_by_kind)));
var start = expectations.platform.nano_time();
var in_context_vars = cljs.core.vec(new cljs.core.Keyword(null,"in-context","in-context",-673372070).cljs$core$IFn$_invoke$arity$1(vars_by_kind));
var seq__51731_52416 = cljs.core.seq(ns__GT_vars);
var chunk__51732_52417 = null;
var count__51733_52418 = (0);
var i__51734_52419 = (0);
while(true){
if((i__51734_52419 < count__51733_52418)){
var vec__51758_52420 = chunk__51732_52417.cljs$core$IIndexed$_nth$arity$2(null,i__51734_52419);
var a_ns_52421 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51758_52420,(0),null);
var the_vars_52422 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51758_52420,(1),null);
var seq__51763_52423 = cljs.core.seq(the_vars_52422);
var chunk__51764_52424 = null;
var count__51765_52425 = (0);
var i__51766_52426 = (0);
while(true){
if((i__51766_52426 < count__51765_52425)){
var v_52427 = chunk__51764_52424.cljs$core$IIndexed$_nth$arity$2(null,i__51766_52426);
expectations.create_context(in_context_vars,cljs.core.with_meta(((function (seq__51763_52423,chunk__51764_52424,count__51765_52425,i__51766_52426,seq__51731_52416,chunk__51732_52417,count__51733_52418,i__51734_52419,v_52427,vec__51758_52420,a_ns_52421,the_vars_52422,ns__GT_vars,start,in_context_vars,_STAR_report_counters_STAR__orig_val__51728,_STAR_report_counters_STAR__temp_val__51729){
return (function (){
return expectations.test_var(v_52427);
});})(seq__51763_52423,chunk__51764_52424,count__51765_52425,i__51766_52426,seq__51731_52416,chunk__51732_52417,count__51733_52418,i__51734_52419,v_52427,vec__51758_52420,a_ns_52421,the_vars_52422,ns__GT_vars,start,in_context_vars,_STAR_report_counters_STAR__orig_val__51728,_STAR_report_counters_STAR__temp_val__51729))
,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"the-var","the-var",1428415613),v_52427], null)));

expectations.expectation_finished.call(null,v_52427);


var G__52428 = seq__51763_52423;
var G__52429 = chunk__51764_52424;
var G__52430 = count__51765_52425;
var G__52431 = (i__51766_52426 + (1));
seq__51763_52423 = G__52428;
chunk__51764_52424 = G__52429;
count__51765_52425 = G__52430;
i__51766_52426 = G__52431;
continue;
} else {
var temp__5753__auto___52432 = cljs.core.seq(seq__51763_52423);
if(temp__5753__auto___52432){
var seq__51763_52433__$1 = temp__5753__auto___52432;
if(cljs.core.chunked_seq_QMARK_(seq__51763_52433__$1)){
var c__4649__auto___52434 = cljs.core.chunk_first(seq__51763_52433__$1);
var G__52435 = cljs.core.chunk_rest(seq__51763_52433__$1);
var G__52436 = c__4649__auto___52434;
var G__52437 = cljs.core.count(c__4649__auto___52434);
var G__52438 = (0);
seq__51763_52423 = G__52435;
chunk__51764_52424 = G__52436;
count__51765_52425 = G__52437;
i__51766_52426 = G__52438;
continue;
} else {
var v_52439 = cljs.core.first(seq__51763_52433__$1);
expectations.create_context(in_context_vars,cljs.core.with_meta(((function (seq__51763_52423,chunk__51764_52424,count__51765_52425,i__51766_52426,seq__51731_52416,chunk__51732_52417,count__51733_52418,i__51734_52419,v_52439,seq__51763_52433__$1,temp__5753__auto___52432,vec__51758_52420,a_ns_52421,the_vars_52422,ns__GT_vars,start,in_context_vars,_STAR_report_counters_STAR__orig_val__51728,_STAR_report_counters_STAR__temp_val__51729){
return (function (){
return expectations.test_var(v_52439);
});})(seq__51763_52423,chunk__51764_52424,count__51765_52425,i__51766_52426,seq__51731_52416,chunk__51732_52417,count__51733_52418,i__51734_52419,v_52439,seq__51763_52433__$1,temp__5753__auto___52432,vec__51758_52420,a_ns_52421,the_vars_52422,ns__GT_vars,start,in_context_vars,_STAR_report_counters_STAR__orig_val__51728,_STAR_report_counters_STAR__temp_val__51729))
,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"the-var","the-var",1428415613),v_52439], null)));

expectations.expectation_finished.call(null,v_52439);


var G__52440 = cljs.core.next(seq__51763_52433__$1);
var G__52441 = null;
var G__52442 = (0);
var G__52443 = (0);
seq__51763_52423 = G__52440;
chunk__51764_52424 = G__52441;
count__51765_52425 = G__52442;
i__51766_52426 = G__52443;
continue;
}
} else {
}
}
break;
}

expectations.ns_finished.call(null,expectations.platform.ns_name(a_ns_52421));


var G__52444 = seq__51731_52416;
var G__52445 = chunk__51732_52417;
var G__52446 = count__51733_52418;
var G__52447 = (i__51734_52419 + (1));
seq__51731_52416 = G__52444;
chunk__51732_52417 = G__52445;
count__51733_52418 = G__52446;
i__51734_52419 = G__52447;
continue;
} else {
var temp__5753__auto___52448 = cljs.core.seq(seq__51731_52416);
if(temp__5753__auto___52448){
var seq__51731_52449__$1 = temp__5753__auto___52448;
if(cljs.core.chunked_seq_QMARK_(seq__51731_52449__$1)){
var c__4649__auto___52450 = cljs.core.chunk_first(seq__51731_52449__$1);
var G__52451 = cljs.core.chunk_rest(seq__51731_52449__$1);
var G__52452 = c__4649__auto___52450;
var G__52453 = cljs.core.count(c__4649__auto___52450);
var G__52454 = (0);
seq__51731_52416 = G__52451;
chunk__51732_52417 = G__52452;
count__51733_52418 = G__52453;
i__51734_52419 = G__52454;
continue;
} else {
var vec__51781_52455 = cljs.core.first(seq__51731_52449__$1);
var a_ns_52456 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51781_52455,(0),null);
var the_vars_52457 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51781_52455,(1),null);
var seq__51784_52458 = cljs.core.seq(the_vars_52457);
var chunk__51785_52459 = null;
var count__51786_52460 = (0);
var i__51787_52461 = (0);
while(true){
if((i__51787_52461 < count__51786_52460)){
var v_52462 = chunk__51785_52459.cljs$core$IIndexed$_nth$arity$2(null,i__51787_52461);
expectations.create_context(in_context_vars,cljs.core.with_meta(((function (seq__51784_52458,chunk__51785_52459,count__51786_52460,i__51787_52461,seq__51731_52416,chunk__51732_52417,count__51733_52418,i__51734_52419,v_52462,vec__51781_52455,a_ns_52456,the_vars_52457,seq__51731_52449__$1,temp__5753__auto___52448,ns__GT_vars,start,in_context_vars,_STAR_report_counters_STAR__orig_val__51728,_STAR_report_counters_STAR__temp_val__51729){
return (function (){
return expectations.test_var(v_52462);
});})(seq__51784_52458,chunk__51785_52459,count__51786_52460,i__51787_52461,seq__51731_52416,chunk__51732_52417,count__51733_52418,i__51734_52419,v_52462,vec__51781_52455,a_ns_52456,the_vars_52457,seq__51731_52449__$1,temp__5753__auto___52448,ns__GT_vars,start,in_context_vars,_STAR_report_counters_STAR__orig_val__51728,_STAR_report_counters_STAR__temp_val__51729))
,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"the-var","the-var",1428415613),v_52462], null)));

expectations.expectation_finished.call(null,v_52462);


var G__52463 = seq__51784_52458;
var G__52464 = chunk__51785_52459;
var G__52465 = count__51786_52460;
var G__52466 = (i__51787_52461 + (1));
seq__51784_52458 = G__52463;
chunk__51785_52459 = G__52464;
count__51786_52460 = G__52465;
i__51787_52461 = G__52466;
continue;
} else {
var temp__5753__auto___52467__$1 = cljs.core.seq(seq__51784_52458);
if(temp__5753__auto___52467__$1){
var seq__51784_52468__$1 = temp__5753__auto___52467__$1;
if(cljs.core.chunked_seq_QMARK_(seq__51784_52468__$1)){
var c__4649__auto___52469 = cljs.core.chunk_first(seq__51784_52468__$1);
var G__52470 = cljs.core.chunk_rest(seq__51784_52468__$1);
var G__52471 = c__4649__auto___52469;
var G__52472 = cljs.core.count(c__4649__auto___52469);
var G__52473 = (0);
seq__51784_52458 = G__52470;
chunk__51785_52459 = G__52471;
count__51786_52460 = G__52472;
i__51787_52461 = G__52473;
continue;
} else {
var v_52474 = cljs.core.first(seq__51784_52468__$1);
expectations.create_context(in_context_vars,cljs.core.with_meta(((function (seq__51784_52458,chunk__51785_52459,count__51786_52460,i__51787_52461,seq__51731_52416,chunk__51732_52417,count__51733_52418,i__51734_52419,v_52474,seq__51784_52468__$1,temp__5753__auto___52467__$1,vec__51781_52455,a_ns_52456,the_vars_52457,seq__51731_52449__$1,temp__5753__auto___52448,ns__GT_vars,start,in_context_vars,_STAR_report_counters_STAR__orig_val__51728,_STAR_report_counters_STAR__temp_val__51729){
return (function (){
return expectations.test_var(v_52474);
});})(seq__51784_52458,chunk__51785_52459,count__51786_52460,i__51787_52461,seq__51731_52416,chunk__51732_52417,count__51733_52418,i__51734_52419,v_52474,seq__51784_52468__$1,temp__5753__auto___52467__$1,vec__51781_52455,a_ns_52456,the_vars_52457,seq__51731_52449__$1,temp__5753__auto___52448,ns__GT_vars,start,in_context_vars,_STAR_report_counters_STAR__orig_val__51728,_STAR_report_counters_STAR__temp_val__51729))
,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"the-var","the-var",1428415613),v_52474], null)));

expectations.expectation_finished.call(null,v_52474);


var G__52475 = cljs.core.next(seq__51784_52468__$1);
var G__52476 = null;
var G__52477 = (0);
var G__52478 = (0);
seq__51784_52458 = G__52475;
chunk__51785_52459 = G__52476;
count__51786_52460 = G__52477;
i__51787_52461 = G__52478;
continue;
}
} else {
}
}
break;
}

expectations.ns_finished.call(null,expectations.platform.ns_name(a_ns_52456));


var G__52479 = cljs.core.next(seq__51731_52449__$1);
var G__52480 = null;
var G__52481 = (0);
var G__52482 = (0);
seq__51731_52416 = G__52479;
chunk__51732_52417 = G__52480;
count__51733_52418 = G__52481;
i__51734_52419 = G__52482;
continue;
}
} else {
}
}
break;
}

var result = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.deref(expectations._STAR_report_counters_STAR_),new cljs.core.Keyword(null,"run-time","run-time",-1231674133),(((expectations.platform.nano_time() - start) / (1000000)) | (0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"ignored-expectations","ignored-expectations",303531187),ignored_expectations], 0));
if(cljs.core.truth_(cljs.core.deref(expectations.warn_on_iref_updates_boolean))){
expectations.remove_watch_every_iref_for_updates(new cljs.core.Keyword(null,"iref","iref",2006639238).cljs$core$IFn$_invoke$arity$1(vars_by_kind));
} else {
}

expectations.execute_vars(new cljs.core.Keyword(null,"after-run","after-run",1986853392).cljs$core$IFn$_invoke$arity$1(vars_by_kind));

return result;
}finally {(expectations._STAR_report_counters_STAR_ = _STAR_report_counters_STAR__orig_val__51728);
}});
expectations.run_tests_in_vars = (function expectations$run_tests_in_vars(vars_by_kind){
var G__51798 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(expectations.test_vars(vars_by_kind,(0)),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"summary","summary",380847952));
expectations.report.cljs$core$IFn$_invoke$arity$1(G__51798);

return G__51798;
});
expectations.var_kind = (function expectations$var_kind(v){
var m = cljs.core.meta(v);
if(cljs.core.truth_((function (){var and__4221__auto__ = new cljs.core.Keyword(null,"focused","focused",1851572115).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(and__4221__auto__)){
return new cljs.core.Keyword(null,"expectation","expectation",-250416721).cljs$core$IFn$_invoke$arity$1(m);
} else {
return and__4221__auto__;
}
})())){
return new cljs.core.Keyword(null,"focused","focused",1851572115);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"expectation","expectation",-250416721).cljs$core$IFn$_invoke$arity$1(m))){
return new cljs.core.Keyword(null,"expectation","expectation",-250416721);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"expectations-options","expectations-options",-1135296272).cljs$core$IFn$_invoke$arity$1(m))){
return new cljs.core.Keyword(null,"expectations-options","expectations-options",-1135296272).cljs$core$IFn$_invoke$arity$1(m);
} else {
if(cljs.core.truth_((function (){var G__51804 = cljs.core.type(cljs.core.deref(v));
return (expectations.platform.iref_types.cljs$core$IFn$_invoke$arity$1 ? expectations.platform.iref_types.cljs$core$IFn$_invoke$arity$1(G__51804) : expectations.platform.iref_types.call(null,G__51804));
})())){
return new cljs.core.Keyword(null,"iref","iref",2006639238);
} else {
return null;
}
}
}
}
});
expectations.by_kind = (function expectations$by_kind(vars){
return cljs.core.group_by(expectations.var_kind,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.not,cljs.core.nil_QMARK_,expectations.var_kind),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.not,new cljs.core.Keyword("expectations","run","expectations/run",-1889289556),cljs.core.meta),vars)));
});

/**
 * @interface
 */
expectations.CustomPred = function(){};

var expectations$CustomPred$expect_fn$dyn_52483 = (function (e,a){
var x__4521__auto__ = (((e == null))?null:e);
var m__4522__auto__ = (expectations.expect_fn[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(e,a) : m__4522__auto__.call(null,e,a));
} else {
var m__4519__auto__ = (expectations.expect_fn["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(e,a) : m__4519__auto__.call(null,e,a));
} else {
throw cljs.core.missing_protocol("CustomPred.expect-fn",e);
}
}
});
expectations.expect_fn = (function expectations$expect_fn(e,a){
if((((!((e == null)))) && ((!((e.expectations$CustomPred$expect_fn$arity$2 == null)))))){
return e.expectations$CustomPred$expect_fn$arity$2(e,a);
} else {
return expectations$CustomPred$expect_fn$dyn_52483(e,a);
}
});

var expectations$CustomPred$expected_message$dyn_52484 = (function (e,a,str_e,str_a){
var x__4521__auto__ = (((e == null))?null:e);
var m__4522__auto__ = (expectations.expected_message[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$4(e,a,str_e,str_a) : m__4522__auto__.call(null,e,a,str_e,str_a));
} else {
var m__4519__auto__ = (expectations.expected_message["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$4(e,a,str_e,str_a) : m__4519__auto__.call(null,e,a,str_e,str_a));
} else {
throw cljs.core.missing_protocol("CustomPred.expected-message",e);
}
}
});
expectations.expected_message = (function expectations$expected_message(e,a,str_e,str_a){
if((((!((e == null)))) && ((!((e.expectations$CustomPred$expected_message$arity$4 == null)))))){
return e.expectations$CustomPred$expected_message$arity$4(e,a,str_e,str_a);
} else {
return expectations$CustomPred$expected_message$dyn_52484(e,a,str_e,str_a);
}
});

var expectations$CustomPred$actual_message$dyn_52493 = (function (e,a,str_e,str_a){
var x__4521__auto__ = (((e == null))?null:e);
var m__4522__auto__ = (expectations.actual_message[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$4(e,a,str_e,str_a) : m__4522__auto__.call(null,e,a,str_e,str_a));
} else {
var m__4519__auto__ = (expectations.actual_message["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$4(e,a,str_e,str_a) : m__4519__auto__.call(null,e,a,str_e,str_a));
} else {
throw cljs.core.missing_protocol("CustomPred.actual-message",e);
}
}
});
expectations.actual_message = (function expectations$actual_message(e,a,str_e,str_a){
if((((!((e == null)))) && ((!((e.expectations$CustomPred$actual_message$arity$4 == null)))))){
return e.expectations$CustomPred$actual_message$arity$4(e,a,str_e,str_a);
} else {
return expectations$CustomPred$actual_message$dyn_52493(e,a,str_e,str_a);
}
});

var expectations$CustomPred$message$dyn_52494 = (function (e,a,str_e,str_a){
var x__4521__auto__ = (((e == null))?null:e);
var m__4522__auto__ = (expectations.message[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$4(e,a,str_e,str_a) : m__4522__auto__.call(null,e,a,str_e,str_a));
} else {
var m__4519__auto__ = (expectations.message["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$4(e,a,str_e,str_a) : m__4519__auto__.call(null,e,a,str_e,str_a));
} else {
throw cljs.core.missing_protocol("CustomPred.message",e);
}
}
});
expectations.message = (function expectations$message(e,a,str_e,str_a){
if((((!((e == null)))) && ((!((e.expectations$CustomPred$message$arity$4 == null)))))){
return e.expectations$CustomPred$message$arity$4(e,a,str_e,str_a);
} else {
return expectations$CustomPred$message$dyn_52494(e,a,str_e,str_a);
}
});

if((typeof expectations !== 'undefined') && (typeof expectations.compare_expr !== 'undefined')){
} else {
expectations.compare_expr = (function (){var method_table__4712__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4713__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4714__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4715__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4716__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__51849 = cljs.core.get_global_hierarchy;
return (fexpr__51849.cljs$core$IFn$_invoke$arity$0 ? fexpr__51849.cljs$core$IFn$_invoke$arity$0() : fexpr__51849.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("expectations","compare-expr"),(function (e,a,_,___$1){
if(((cljs.core.map_QMARK_(a)) && ((((!(cljs.core.sorted_QMARK_(a)))) && (cljs.core.contains_QMARK_(a,new cljs.core.Keyword("expectations","from-each-flag","expectations/from-each-flag",1734220986))))))){
return new cljs.core.Keyword("expectations","from-each","expectations/from-each",-1067663208);
} else {
if(((cljs.core.map_QMARK_(a)) && ((((!(cljs.core.sorted_QMARK_(a)))) && (cljs.core.contains_QMARK_(a,new cljs.core.Keyword("expectations","in-flag","expectations/in-flag",-130698686))))))){
return new cljs.core.Keyword("expectations","in","expectations/in",-1616294280);
} else {
if((((!((e == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === e.expectations$CustomPred$))))?true:(((!e.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(expectations.CustomPred,e):false)):cljs.core.native_satisfies_QMARK_(expectations.CustomPred,e))){
return new cljs.core.Keyword("expectations","custom-pred","expectations/custom-pred",-805975120);
} else {
if(((cljs.core.map_QMARK_(e)) && ((((!(cljs.core.sorted_QMARK_(e)))) && (cljs.core.contains_QMARK_(e,new cljs.core.Keyword("expectations","more","expectations/more",-1187281521))))))){
return new cljs.core.Keyword("expectations","more","expectations/more",-1187281521);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e,a)){
return new cljs.core.Keyword("expectations","equals","expectations/equals",-367825465);
} else {
if(((typeof e === 'string') && (typeof a === 'string'))){
return new cljs.core.Keyword("expectations","strings","expectations/strings",-1987464060);
} else {
if(((cljs.core.map_QMARK_(e)) && (cljs.core.map_QMARK_(a)))){
return new cljs.core.Keyword("expectations","maps","expectations/maps",-1640972023);
} else {
if(((cljs.core.set_QMARK_(e)) && (cljs.core.set_QMARK_(a)))){
return new cljs.core.Keyword("expectations","sets","expectations/sets",63554325);
} else {
if(((cljs.core.sequential_QMARK_(e)) && (cljs.core.sequential_QMARK_(a)))){
return new cljs.core.Keyword("expectations","sequentials","expectations/sequentials",160347083);
} else {
if((((e instanceof RegExp)) && ((a instanceof RegExp)))){
return new cljs.core.Keyword("expectations","regexps","expectations/regexps",976628246);
} else {
if((e instanceof RegExp)){
return new cljs.core.Keyword("expectations","re-seq","expectations/re-seq",1017362038);
} else {
if(cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(e,Error)){
return new cljs.core.Keyword("expectations","expect-exception","expectations/expect-exception",-625804045);
} else {
if((e instanceof Error)){
return new cljs.core.Keyword("expectations","expected-exception","expectations/expected-exception",256433227);
} else {
if((a instanceof Error)){
return new cljs.core.Keyword("expectations","actual-exception","expectations/actual-exception",-271507269);
} else {
if((((e instanceof Function)) && ((a instanceof Function)))){
return new cljs.core.Keyword("expectations","types","expectations/types",655900024);
} else {
if((((e instanceof Function)) && (cljs.core.not((function (){var and__4221__auto____$1 = cljs.core.fn_QMARK_(e);
if(and__4221__auto____$1){
return (e.cljs$core$IFn$_invoke$arity$1 ? e.cljs$core$IFn$_invoke$arity$1(a) : e.call(null,a));
} else {
return and__4221__auto____$1;
}
})())))){
return new cljs.core.Keyword("expectations","expect-instance","expectations/expect-instance",1758326554);
} else {
if(cljs.core.fn_QMARK_(e)){
return new cljs.core.Keyword("expectations","fn","expectations/fn",-1243905589);
} else {
return new cljs.core.Keyword("expectations","default","expectations/default",-1785257137);

}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4716__auto__,method_table__4712__auto__,prefer_table__4713__auto__,method_cache__4714__auto__,cached_hierarchy__4715__auto__));
})();
}
expectations.compare_expr.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("expectations","equals","expectations/equals",-367825465),(function (e,a,str_e,str_a){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993)], null);
}));
expectations.compare_expr.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("expectations","default","expectations/default",-1785257137),(function (e,a,str_e,str_a){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"raw","raw",1604651272),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [str_e,str_a], null),new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["expected:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0)),"\n                was:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a], 0))], null)], null);
}));
expectations.compare_expr.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("expectations","custom-pred","expectations/custom-pred",-805975120),(function (e,a,str_e,str_a){
if(cljs.core.truth_(expectations.expect_fn(e,a))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"raw","raw",1604651272),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [str_e,str_a], null),new cljs.core.Keyword(null,"expected-message","expected-message",-615750006),expectations.expected_message(e,a,str_e,str_a),new cljs.core.Keyword(null,"actual-message","actual-message",1010600886),expectations.actual_message(e,a,str_e,str_a),new cljs.core.Keyword(null,"message","message",-406056002),expectations.message(e,a,str_e,str_a)], null);
}
}));
expectations.compare_expr.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("expectations","fn","expectations/fn",-1243905589),(function (e,a,str_e,str_a){
try{if(cljs.core.truth_((e.cljs$core$IFn$_invoke$arity$1 ? e.cljs$core$IFn$_invoke$arity$1(a) : e.call(null,a)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"raw","raw",1604651272),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [str_e,str_a], null),new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a], 0)),"is not",str_e], null)], null);
}
}catch (e51865){if((e51865 instanceof Error)){
var ex = e51865;
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"raw","raw",1604651272),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [str_e,str_a], null),new cljs.core.Keyword(null,"expected-message","expected-message",-615750006),["also attempted: (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(str_e)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(str_a),")"].join(''),new cljs.core.Keyword(null,"actual-message","actual-message",1010600886),["       and got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expectations.platform.get_message(ex))].join(''),new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["expected:",str_e,"\n                was:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a], 0))], null)], null);
} else {
throw e51865;

}
}}));
expectations.find_failures = (function expectations$find_failures(the_seq){
return cljs.core.seq(cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pass","pass",1574159993),null], null), null),new cljs.core.Keyword(null,"type","type",1174270348)),the_seq)));
});
expectations.find_successes = (function expectations$find_successes(the_seq){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pass","pass",1574159993),null], null), null),new cljs.core.Keyword(null,"type","type",1174270348)),the_seq));
});
expectations.compare_expr.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("expectations","from-each","expectations/from-each",-1067663208),(function (e,p__51877,str_e,str_a){
var map__51878 = p__51877;
var map__51878__$1 = cljs.core.__destructure_map(map__51878);
var a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51878__$1,new cljs.core.Keyword("expectations","from-each","expectations/from-each",-1067663208));
var str_i_a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51878__$1,new cljs.core.Keyword("expectations","from-each-body","expectations/from-each-body",-1647304945));
var temp__5751__auto__ = expectations.find_failures((function (){var iter__4622__auto__ = (function expectations$iter__51880(s__51881){
return (new cljs.core.LazySeq(null,(function (){
var s__51881__$1 = s__51881;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__51881__$1);
if(temp__5753__auto__){
var s__51881__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__51881__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__51881__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__51883 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__51882 = (0);
while(true){
if((i__51882 < size__4621__auto__)){
var map__51889 = cljs.core._nth(c__4620__auto__,i__51882);
var map__51889__$1 = cljs.core.__destructure_map(map__51889);
var ts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51889__$1,new cljs.core.Keyword("expectations","the-result","expectations/the-result",268799287));
var rd = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51889__$1,new cljs.core.Keyword("expectations","ref-data","expectations/ref-data",303734692));
cljs.core.chunk_append(b__51883,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(expectations.compare_expr.cljs$core$IFn$_invoke$arity$4(e,ts,str_e,str_i_a),new cljs.core.Keyword(null,"ref-data","ref-data",743306603),rd));

var G__52498 = (i__51882 + (1));
i__51882 = G__52498;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51883),expectations$iter__51880(cljs.core.chunk_rest(s__51881__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51883),null);
}
} else {
var map__51890 = cljs.core.first(s__51881__$2);
var map__51890__$1 = cljs.core.__destructure_map(map__51890);
var ts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51890__$1,new cljs.core.Keyword("expectations","the-result","expectations/the-result",268799287));
var rd = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51890__$1,new cljs.core.Keyword("expectations","ref-data","expectations/ref-data",303734692));
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(expectations.compare_expr.cljs$core$IFn$_invoke$arity$4(e,ts,str_e,str_i_a),new cljs.core.Keyword(null,"ref-data","ref-data",743306603),rd),expectations$iter__51880(cljs.core.rest(s__51881__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(a);
})());
if(temp__5751__auto__){
var failures = temp__5751__auto__;
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"raw","raw",1604651272),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [str_e,str_a], null),new cljs.core.Keyword(null,"message","message",-406056002),(function (){var G__51891 = "the list: %s";
var G__51892 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
var temp__5751__auto____$1 = new cljs.core.Keyword("expectations","in","expectations/in",-1616294280).cljs$core$IFn$_invoke$arity$1(x);
if(cljs.core.truth_(temp__5751__auto____$1)){
var y = temp__5751__auto____$1;
return y;
} else {
return x;
}
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("expectations","the-result","expectations/the-result",268799287),a))], 0));
return (expectations.platform.format.cljs$core$IFn$_invoke$arity$2 ? expectations.platform.format.cljs$core$IFn$_invoke$arity$2(G__51891,G__51892) : expectations.platform.format.call(null,G__51891,G__51892));
})(),new cljs.core.Keyword(null,"list","list",765357683),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__51876_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__51876_SHARP_,new cljs.core.Keyword(null,"show-raw","show-raw",312153310),true);
}),failures)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993)], null);
}
}));
expectations.compare_expr.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("expectations","more","expectations/more",-1187281521),(function (p__51896,a,str_e,str_a){
var map__51898 = p__51896;
var map__51898__$1 = cljs.core.__destructure_map(map__51898);
var es = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51898__$1,new cljs.core.Keyword("expectations","more","expectations/more",-1187281521));
var temp__5751__auto__ = expectations.find_failures((function (){var iter__4622__auto__ = (function expectations$iter__51900(s__51901){
return (new cljs.core.LazySeq(null,(function (){
var s__51901__$1 = s__51901;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__51901__$1);
if(temp__5753__auto__){
var s__51901__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__51901__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__51901__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__51903 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__51902 = (0);
while(true){
if((i__51902 < size__4621__auto__)){
var map__51907 = cljs.core._nth(c__4620__auto__,i__51902);
var map__51907__$1 = cljs.core.__destructure_map(map__51907);
var e = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51907__$1,new cljs.core.Keyword(null,"e","e",1381269198));
var str_e__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51907__$1,new cljs.core.Keyword(null,"str-e","str-e",2007824807));
var a_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51907__$1,new cljs.core.Keyword(null,"a-fn","a-fn",-979165273));
var gen_str_a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51907__$1,new cljs.core.Keyword(null,"gen-str-a","gen-str-a",1722083628));
cljs.core.chunk_append(b__51903,expectations.compare_expr.cljs$core$IFn$_invoke$arity$4(e,(function (){try{return (a_fn.cljs$core$IFn$_invoke$arity$1 ? a_fn.cljs$core$IFn$_invoke$arity$1(a) : a_fn.call(null,a));
}catch (e51909){if((e51909 instanceof Error)){
var t = e51909;
return t;
} else {
throw e51909;

}
}})(),str_e__$1,(gen_str_a.cljs$core$IFn$_invoke$arity$1 ? gen_str_a.cljs$core$IFn$_invoke$arity$1(str_a) : gen_str_a.call(null,str_a))));

var G__52499 = (i__51902 + (1));
i__51902 = G__52499;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51903),expectations$iter__51900(cljs.core.chunk_rest(s__51901__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51903),null);
}
} else {
var map__51910 = cljs.core.first(s__51901__$2);
var map__51910__$1 = cljs.core.__destructure_map(map__51910);
var e = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51910__$1,new cljs.core.Keyword(null,"e","e",1381269198));
var str_e__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51910__$1,new cljs.core.Keyword(null,"str-e","str-e",2007824807));
var a_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51910__$1,new cljs.core.Keyword(null,"a-fn","a-fn",-979165273));
var gen_str_a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51910__$1,new cljs.core.Keyword(null,"gen-str-a","gen-str-a",1722083628));
return cljs.core.cons(expectations.compare_expr.cljs$core$IFn$_invoke$arity$4(e,(function (){try{return (a_fn.cljs$core$IFn$_invoke$arity$1 ? a_fn.cljs$core$IFn$_invoke$arity$1(a) : a_fn.call(null,a));
}catch (e51911){if((e51911 instanceof Error)){
var t = e51911;
return t;
} else {
throw e51911;

}
}})(),str_e__$1,(gen_str_a.cljs$core$IFn$_invoke$arity$1 ? gen_str_a.cljs$core$IFn$_invoke$arity$1(str_a) : gen_str_a.call(null,str_a))),expectations$iter__51900(cljs.core.rest(s__51901__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(es);
})());
if(temp__5751__auto__){
var failures = temp__5751__auto__;
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"raw","raw",1604651272),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [str_e,str_a], null),new cljs.core.Keyword(null,"message","message",-406056002),(function (){var G__51915 = "actual val: %s";
var G__51916 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a], 0));
return (expectations.platform.format.cljs$core$IFn$_invoke$arity$2 ? expectations.platform.format.cljs$core$IFn$_invoke$arity$2(G__51915,G__51916) : expectations.platform.format.call(null,G__51915,G__51916));
})(),new cljs.core.Keyword(null,"list","list",765357683),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__51895_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__51895_SHARP_,new cljs.core.Keyword(null,"show-raw","show-raw",312153310),true);
}),failures)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993)], null);
}
}));
expectations.compare_expr.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("expectations","in","expectations/in",-1616294280),(function (e,a,str_e,str_a){
if(((cljs.core.sequential_QMARK_(new cljs.core.Keyword("expectations","in","expectations/in",-1616294280).cljs$core$IFn$_invoke$arity$1(a))) || (cljs.core.set_QMARK_(new cljs.core.Keyword("expectations","in","expectations/in",-1616294280).cljs$core$IFn$_invoke$arity$1(a))))){
if(cljs.core.truth_(expectations.find_successes((function (){var iter__4622__auto__ = (function expectations$iter__51927(s__51928){
return (new cljs.core.LazySeq(null,(function (){
var s__51928__$1 = s__51928;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__51928__$1);
if(temp__5753__auto__){
var s__51928__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__51928__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__51928__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__51930 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__51929 = (0);
while(true){
if((i__51929 < size__4621__auto__)){
var a__$1 = cljs.core._nth(c__4620__auto__,i__51929);
cljs.core.chunk_append(b__51930,expectations.compare_expr.cljs$core$IFn$_invoke$arity$4(e,a__$1,str_e,str_a));

var G__52501 = (i__51929 + (1));
i__51929 = G__52501;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51930),expectations$iter__51927(cljs.core.chunk_rest(s__51928__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51930),null);
}
} else {
var a__$1 = cljs.core.first(s__51928__$2);
return cljs.core.cons(expectations.compare_expr.cljs$core$IFn$_invoke$arity$4(e,a__$1,str_e,str_a),expectations$iter__51927(cljs.core.rest(s__51928__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(new cljs.core.Keyword("expectations","in","expectations/in",-1616294280).cljs$core$IFn$_invoke$arity$1(a));
})()))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"raw","raw",1604651272),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [str_e,str_a], null),new cljs.core.Keyword(null,"list","list",765357683),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__51920_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__51920_SHARP_,new cljs.core.Keyword(null,"show-raw","show-raw",312153310),true);
}),expectations.find_failures((function (){var iter__4622__auto__ = (function expectations$iter__51937(s__51938){
return (new cljs.core.LazySeq(null,(function (){
var s__51938__$1 = s__51938;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__51938__$1);
if(temp__5753__auto__){
var s__51938__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__51938__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__51938__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__51940 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__51939 = (0);
while(true){
if((i__51939 < size__4621__auto__)){
var a__$1 = cljs.core._nth(c__4620__auto__,i__51939);
cljs.core.chunk_append(b__51940,expectations.compare_expr.cljs$core$IFn$_invoke$arity$4(e,a__$1,str_e,a__$1));

var G__52502 = (i__51939 + (1));
i__51939 = G__52502;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51940),expectations$iter__51937(cljs.core.chunk_rest(s__51938__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51940),null);
}
} else {
var a__$1 = cljs.core.first(s__51938__$2);
return cljs.core.cons(expectations.compare_expr.cljs$core$IFn$_invoke$arity$4(e,a__$1,str_e,a__$1),expectations$iter__51937(cljs.core.rest(s__51938__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(new cljs.core.Keyword("expectations","in","expectations/in",-1616294280).cljs$core$IFn$_invoke$arity$1(a));
})())),new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(new cljs.core.Keyword("expectations","more","expectations/more",-1187281521).cljs$core$IFn$_invoke$arity$1(e))?str_e:(function (){var G__51949 = "val %s";
var G__51950 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
return (expectations.platform.format.cljs$core$IFn$_invoke$arity$2 ? expectations.platform.format.cljs$core$IFn$_invoke$arity$2(G__51949,G__51950) : expectations.platform.format.call(null,G__51949,G__51950));
})()),"not found in",new cljs.core.Keyword("expectations","in","expectations/in",-1616294280).cljs$core$IFn$_invoke$arity$1(a)], null)], null);
}
} else {
if(cljs.core.truth_((function (){var and__4221__auto__ = cljs.core.map_QMARK_(new cljs.core.Keyword("expectations","in","expectations/in",-1616294280).cljs$core$IFn$_invoke$arity$1(a));
if(and__4221__auto__){
return new cljs.core.Keyword("expectations","more","expectations/more",-1187281521).cljs$core$IFn$_invoke$arity$1(e);
} else {
return and__4221__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"raw","raw",1604651272),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [str_e,str_a], null),new cljs.core.Keyword(null,"message","message",-406056002),"Using both 'in with a map and 'more is not supported."], null);
} else {
if(cljs.core.map_QMARK_(new cljs.core.Keyword("expectations","in","expectations/in",-1616294280).cljs$core$IFn$_invoke$arity$1(a))){
var a__$1 = new cljs.core.Keyword("expectations","in","expectations/in",-1616294280).cljs$core$IFn$_invoke$arity$1(a);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e,cljs.core.select_keys(a__$1,cljs.core.keys(e)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected-message","expected-message",-615750006),(function (){var G__51951 = "in expected, not actual: %s";
var G__51952 = cljs.core.first(clojure.data.diff(e,a__$1));
return (expectations.platform.format.cljs$core$IFn$_invoke$arity$2 ? expectations.platform.format.cljs$core$IFn$_invoke$arity$2(G__51951,G__51952) : expectations.platform.format.call(null,G__51951,G__51952));
})(),new cljs.core.Keyword(null,"actual-message","actual-message",1010600886),(function (){var G__51953 = "in actual, not expected: %s";
var G__51954 = cljs.core.first(clojure.data.diff(a__$1,e));
return (expectations.platform.format.cljs$core$IFn$_invoke$arity$2 ? expectations.platform.format.cljs$core$IFn$_invoke$arity$2(G__51953,G__51954) : expectations.platform.format.call(null,G__51953,G__51954));
})(),new cljs.core.Keyword(null,"raw","raw",1604651272),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [str_e,str_a], null),new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["expected:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0)),"in",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a__$1], 0))], null)], null);
}
} else {
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"raw","raw",1604651272),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [str_e,str_a], null),new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["You supplied:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("expectations","in","expectations/in",-1616294280).cljs$core$IFn$_invoke$arity$1(a)], 0))], null),new cljs.core.Keyword(null,"message","message",-406056002),"You must supply a list, set, or map when using (in)"], null);

}
}
}
}));
expectations.compare_expr.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("expectations","expect-instance","expectations/expect-instance",1758326554),(function (e,a,str_e,str_a){
if((a instanceof e)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"raw","raw",1604651272),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [str_e,str_a], null),new cljs.core.Keyword(null,"expected-message","expected-message",-615750006),["expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(a)," to be an instance of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e)].join(''),new cljs.core.Keyword(null,"actual-message","actual-message",1010600886),["     was: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(a)," is an instance of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(a))].join('')], null);
}
}));
expectations.compare_expr.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("expectations","types","expectations/types",655900024),(function (e,a,str_e,str_a){
if(cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(a,e)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"raw","raw",1604651272),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [str_e,str_a], null),new cljs.core.Keyword(null,"expected-message","expected-message",-615750006),["expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(a)," to be a ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e)].join('')], null);
}
}));
expectations.compare_expr.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("expectations","actual-exception","expectations/actual-exception",-271507269),(function (e,a,str_e,str_a){
var error = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"raw","raw",1604651272),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [str_e,str_a], null),new cljs.core.Keyword(null,"actual-message","actual-message",1010600886),["exception in actual: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(str_a)].join(''),new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [a], null)], null);
if(cljs.core.fn_QMARK_(e)){
try{if(cljs.core.truth_((e.cljs$core$IFn$_invoke$arity$1 ? e.cljs$core$IFn$_invoke$arity$1(a) : e.call(null,a)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"raw","raw",1604651272),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [str_e,str_a], null),new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["exception thrown by",str_a,"is not",str_e], null)], null);
}
}catch (e51968){if((e51968 instanceof Error)){
var _ = e51968;
return error;
} else {
throw e51968;

}
}} else {
return error;
}
}));
expectations.compare_expr.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("expectations","expected-exception","expectations/expected-exception",256433227),(function (e,a,str_e,str_a){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"raw","raw",1604651272),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [str_e,str_a], null),new cljs.core.Keyword(null,"expected-message","expected-message",-615750006),["exception in expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(str_e)].join(''),new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e], null)], null);
}));
expectations.compare_expr.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("expectations","regexps","expectations/regexps",976628246),(function (e,a,str_e,str_a){
return expectations.compare_expr.cljs$core$IFn$_invoke$arity$4(cljs.core.str.cljs$core$IFn$_invoke$arity$1(e),cljs.core.str.cljs$core$IFn$_invoke$arity$1(a),str_e,str_a);
}));
expectations.compare_expr.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("expectations","re-seq","expectations/re-seq",1017362038),(function (e,a,str_e,str_a){
if(cljs.core.truth_((function (){var and__4221__auto__ = a;
if(cljs.core.truth_(and__4221__auto__)){
return cljs.core.re_seq(e,a);
} else {
return and__4221__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"raw","raw",1604651272),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [str_e,str_a], null),new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["regex",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0)),"not found in",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a], 0))], null)], null);
}
}));
expectations.strings_difference = (function expectations$strings_difference(e,a){
var matches = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.apply,cljs.core._EQ_),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,e,a))));
var e_diverges = clojure.string.replace(e,matches,"");
var a_diverges = clojure.string.replace(a,matches,"");
return [" matches: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([matches], 0)),"\n           diverges: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e_diverges], 0)),"\n                  &: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a_diverges], 0))].join('');
});
expectations.compare_expr.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("expectations","strings","expectations/strings",-1987464060),(function (e,a,str_e,str_a){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"raw","raw",1604651272),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [str_e,str_a], null),new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["expected:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0)),"\n                was:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a], 0))], null),new cljs.core.Keyword(null,"message","message",-406056002),expectations.strings_difference(e,a)], null);
}));
expectations.compare_expr.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("expectations","expect-exception","expectations/expect-exception",-625804045),(function (e,a,str_e,str_a){
if((a instanceof e)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"raw","raw",1604651272),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [str_e,str_a], null),new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [str_a,"did not throw",str_e], null)], null);
}
}));
expectations.compare_expr.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("expectations","maps","expectations/maps",-1640972023),(function (e,a,str_e,str_a){
var vec__52000 = clojure.data.diff(e,a);
var in_e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52000,(0),null);
var in_a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52000,(1),null);
if((((in_e == null)) && ((in_a == null)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected-message","expected-message",-615750006),(function (){var G__52008 = in_e;
if((G__52008 == null)){
return null;
} else {
return (expectations.platform.format.cljs$core$IFn$_invoke$arity$2 ? expectations.platform.format.cljs$core$IFn$_invoke$arity$2("in expected, not actual: %s",G__52008) : expectations.platform.format.call(null,"in expected, not actual: %s",G__52008));
}
})(),new cljs.core.Keyword(null,"actual-message","actual-message",1010600886),(function (){var G__52013 = in_a;
if((G__52013 == null)){
return null;
} else {
return (expectations.platform.format.cljs$core$IFn$_invoke$arity$2 ? expectations.platform.format.cljs$core$IFn$_invoke$arity$2("in actual, not expected: %s",G__52013) : expectations.platform.format.call(null,"in actual, not expected: %s",G__52013));
}
})(),new cljs.core.Keyword(null,"raw","raw",1604651272),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [str_e,str_a], null),new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["expected:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0)),"\n                was:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a], 0))], null)], null);
}
}));
expectations.compare_expr.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("expectations","sets","expectations/sets",63554325),(function (e,a,str_e,str_a){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"actual-message","actual-message",1010600886),(function (){var G__52020 = "in actual, not expected: %s";
var G__52021 = cljs.core.first(clojure.data.diff(a,e));
return (expectations.platform.format.cljs$core$IFn$_invoke$arity$2 ? expectations.platform.format.cljs$core$IFn$_invoke$arity$2(G__52020,G__52021) : expectations.platform.format.call(null,G__52020,G__52021));
})(),new cljs.core.Keyword(null,"expected-message","expected-message",-615750006),(function (){var G__52029 = "in expected, not actual: %s";
var G__52030 = cljs.core.first(clojure.data.diff(e,a));
return (expectations.platform.format.cljs$core$IFn$_invoke$arity$2 ? expectations.platform.format.cljs$core$IFn$_invoke$arity$2(G__52029,G__52030) : expectations.platform.format.call(null,G__52029,G__52030));
})(),new cljs.core.Keyword(null,"raw","raw",1604651272),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [str_e,str_a], null),new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["expected:",e,"\n                was:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a], 0))], null)], null);
}));
expectations.compare_expr.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("expectations","sequentials","expectations/sequentials",160347083),(function (e,a,str_e,str_a){
var diff_fn = (function (e__$1,a__$1){
return cljs.core.seq(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(e__$1),cljs.core.set(a__$1)));
});
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"actual-message","actual-message",1010600886),(function (){var G__52057 = "in actual, not expected: %s";
var G__52058 = cljs.core.first(clojure.data.diff(a,e));
return (expectations.platform.format.cljs$core$IFn$_invoke$arity$2 ? expectations.platform.format.cljs$core$IFn$_invoke$arity$2(G__52057,G__52058) : expectations.platform.format.call(null,G__52057,G__52058));
})(),new cljs.core.Keyword(null,"expected-message","expected-message",-615750006),(function (){var G__52059 = "in expected, not actual: %s";
var G__52060 = cljs.core.first(clojure.data.diff(e,a));
return (expectations.platform.format.cljs$core$IFn$_invoke$arity$2 ? expectations.platform.format.cljs$core$IFn$_invoke$arity$2(G__52059,G__52060) : expectations.platform.format.call(null,G__52059,G__52060));
})(),new cljs.core.Keyword(null,"raw","raw",1604651272),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [str_e,str_a], null),new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["expected:",e,"\n                was:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a], 0))], null),new cljs.core.Keyword(null,"message","message",-406056002),((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.set(e),cljs.core.set(a))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(e),cljs.core.count(a))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(e),cljs.core.count(cljs.core.set(a))))))))?"lists appear to contain the same items with different ordering":((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.set(e),cljs.core.set(a))) && ((cljs.core.count(e) < cljs.core.count(a)))))?"some duplicate items in actual are not expected":((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.set(e),cljs.core.set(a))) && ((cljs.core.count(e) > cljs.core.count(a)))))?"some duplicate items in expected are not actual":(((cljs.core.count(e) < cljs.core.count(a)))?"actual is larger than expected":(((cljs.core.count(e) > cljs.core.count(a)))?"expected is larger than actual":null)))))], null);
}));
if((typeof expectations !== 'undefined') && (typeof expectations.localize !== 'undefined')){
} else {
expectations.localize = (function (){var method_table__4712__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4713__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4714__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4715__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4716__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__52072 = cljs.core.get_global_hierarchy;
return (fexpr__52072.cljs$core$IFn$_invoke$arity$0 ? fexpr__52072.cljs$core$IFn$_invoke$arity$0() : fexpr__52072.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("expectations","localize"),cljs.core.type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4716__auto__,method_table__4712__auto__,prefer_table__4713__auto__,method_cache__4714__auto__,cached_hierarchy__4715__auto__));
})();
}
expectations.localize.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.Atom,(function (a){
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(a));
}));
expectations.localize.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (v){
return v;
}));
/**
 * Given a value and an optional delta (default 0.001), return a predicate
 *   that expects its argument to be within that delta of the given value.
 */
expectations.approximately = (function expectations$approximately(var_args){
var G__52137 = arguments.length;
switch (G__52137) {
case 1:
return expectations.approximately.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return expectations.approximately.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(expectations.approximately.cljs$core$IFn$_invoke$arity$1 = (function (v){
return expectations.approximately.cljs$core$IFn$_invoke$arity$2(v,0.001);
}));

(expectations.approximately.cljs$core$IFn$_invoke$arity$2 = (function (v,d){
return (function (x){
return ((((v - Math.abs(d)) <= x)) && ((x <= (v + Math.abs(d)))));
});
}));

(expectations.approximately.cljs$lang$maxFixedArity = 2);


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {expectations.CustomPred}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
expectations.Functionally = (function (e_fn,a_fn,differ,__meta,__extmap,__hash){
this.e_fn = e_fn;
this.a_fn = a_fn;
this.differ = differ;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(expectations.Functionally.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(expectations.Functionally.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k52145,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__52169 = k52145;
var G__52169__$1 = (((G__52169 instanceof cljs.core.Keyword))?G__52169.fqn:null);
switch (G__52169__$1) {
case "e-fn":
return self__.e_fn;

break;
case "a-fn":
return self__.a_fn;

break;
case "differ":
return self__.differ;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k52145,else__4475__auto__);

}
}));

(expectations.Functionally.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__52177){
var vec__52179 = p__52177;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52179,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52179,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(expectations.Functionally.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#expectations.Functionally{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"e-fn","e-fn",127489254),self__.e_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"a-fn","a-fn",-979165273),self__.a_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"differ","differ",-242135540),self__.differ],null))], null),self__.__extmap));
}));

(expectations.Functionally.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__52144){
var self__ = this;
var G__52144__$1 = this;
return (new cljs.core.RecordIter((0),G__52144__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"e-fn","e-fn",127489254),new cljs.core.Keyword(null,"a-fn","a-fn",-979165273),new cljs.core.Keyword(null,"differ","differ",-242135540)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(expectations.Functionally.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(expectations.Functionally.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new expectations.Functionally(self__.e_fn,self__.a_fn,self__.differ,self__.__meta,self__.__extmap,self__.__hash));
}));

(expectations.Functionally.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
}));

(expectations.Functionally.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (coll__4469__auto__){
return (-1387690763 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
})(this__4468__auto____$1);
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(expectations.Functionally.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this52146,other52147){
var self__ = this;
var this52146__$1 = this;
return (((!((other52147 == null)))) && ((((this52146__$1.constructor === other52147.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52146__$1.e_fn,other52147.e_fn)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52146__$1.a_fn,other52147.a_fn)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52146__$1.differ,other52147.differ)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52146__$1.__extmap,other52147.__extmap)))))))))));
}));

(expectations.Functionally.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"e-fn","e-fn",127489254),null,new cljs.core.Keyword(null,"a-fn","a-fn",-979165273),null,new cljs.core.Keyword(null,"differ","differ",-242135540),null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new expectations.Functionally(self__.e_fn,self__.a_fn,self__.differ,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(expectations.Functionally.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k52145){
var self__ = this;
var this__4479__auto____$1 = this;
var G__52217 = k52145;
var G__52217__$1 = (((G__52217 instanceof cljs.core.Keyword))?G__52217.fqn:null);
switch (G__52217__$1) {
case "e-fn":
case "a-fn":
case "differ":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k52145);

}
}));

(expectations.Functionally.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__52144){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__52225 = cljs.core.keyword_identical_QMARK_;
var expr__52226 = k__4481__auto__;
if(cljs.core.truth_((pred__52225.cljs$core$IFn$_invoke$arity$2 ? pred__52225.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"e-fn","e-fn",127489254),expr__52226) : pred__52225.call(null,new cljs.core.Keyword(null,"e-fn","e-fn",127489254),expr__52226)))){
return (new expectations.Functionally(G__52144,self__.a_fn,self__.differ,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__52225.cljs$core$IFn$_invoke$arity$2 ? pred__52225.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"a-fn","a-fn",-979165273),expr__52226) : pred__52225.call(null,new cljs.core.Keyword(null,"a-fn","a-fn",-979165273),expr__52226)))){
return (new expectations.Functionally(self__.e_fn,G__52144,self__.differ,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__52225.cljs$core$IFn$_invoke$arity$2 ? pred__52225.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"differ","differ",-242135540),expr__52226) : pred__52225.call(null,new cljs.core.Keyword(null,"differ","differ",-242135540),expr__52226)))){
return (new expectations.Functionally(self__.e_fn,self__.a_fn,G__52144,self__.__meta,self__.__extmap,null));
} else {
return (new expectations.Functionally(self__.e_fn,self__.a_fn,self__.differ,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__52144),null));
}
}
}
}));

(expectations.Functionally.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"e-fn","e-fn",127489254),self__.e_fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"a-fn","a-fn",-979165273),self__.a_fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"differ","differ",-242135540),self__.differ,null))], null),self__.__extmap));
}));

(expectations.Functionally.prototype.expectations$CustomPred$ = cljs.core.PROTOCOL_SENTINEL);

(expectations.Functionally.prototype.expectations$CustomPred$expect_fn$arity$2 = (function (e,a){
var self__ = this;
var e__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((self__.e_fn.cljs$core$IFn$_invoke$arity$1 ? self__.e_fn.cljs$core$IFn$_invoke$arity$1(a) : self__.e_fn.call(null,a)),(self__.a_fn.cljs$core$IFn$_invoke$arity$1 ? self__.a_fn.cljs$core$IFn$_invoke$arity$1(a) : self__.a_fn.call(null,a)));
}));

(expectations.Functionally.prototype.expectations$CustomPred$expected_message$arity$4 = (function (e,a,str_e,str_a){
var self__ = this;
var e__$1 = this;
var G__52247 = "expected: %s";
var G__52248 = (self__.e_fn.cljs$core$IFn$_invoke$arity$1 ? self__.e_fn.cljs$core$IFn$_invoke$arity$1(a) : self__.e_fn.call(null,a));
return (expectations.platform.format.cljs$core$IFn$_invoke$arity$2 ? expectations.platform.format.cljs$core$IFn$_invoke$arity$2(G__52247,G__52248) : expectations.platform.format.call(null,G__52247,G__52248));
}));

(expectations.Functionally.prototype.expectations$CustomPred$actual_message$arity$4 = (function (e,a,str_e,str_a){
var self__ = this;
var e__$1 = this;
var G__52249 = "  actual: %s";
var G__52250 = (self__.a_fn.cljs$core$IFn$_invoke$arity$1 ? self__.a_fn.cljs$core$IFn$_invoke$arity$1(a) : self__.a_fn.call(null,a));
return (expectations.platform.format.cljs$core$IFn$_invoke$arity$2 ? expectations.platform.format.cljs$core$IFn$_invoke$arity$2(G__52249,G__52250) : expectations.platform.format.call(null,G__52249,G__52250));
}));

(expectations.Functionally.prototype.expectations$CustomPred$message$arity$4 = (function (e,a,str_e,str_a){
var self__ = this;
var e__$1 = this;
if(cljs.core.truth_(self__.differ)){
var G__52253 = (self__.e_fn.cljs$core$IFn$_invoke$arity$1 ? self__.e_fn.cljs$core$IFn$_invoke$arity$1(a) : self__.e_fn.call(null,a));
var G__52254 = (self__.a_fn.cljs$core$IFn$_invoke$arity$1 ? self__.a_fn.cljs$core$IFn$_invoke$arity$1(a) : self__.a_fn.call(null,a));
return (self__.differ.cljs$core$IFn$_invoke$arity$2 ? self__.differ.cljs$core$IFn$_invoke$arity$2(G__52253,G__52254) : self__.differ.call(null,G__52253,G__52254));
} else {
return "not functionally equivalent";
}
}));

(expectations.Functionally.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__52144){
var self__ = this;
var this__4471__auto____$1 = this;
return (new expectations.Functionally(self__.e_fn,self__.a_fn,self__.differ,G__52144,self__.__extmap,self__.__hash));
}));

(expectations.Functionally.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4478__auto__,(0)),cljs.core._nth(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(expectations.Functionally.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"e-fn","e-fn",1768020781,null),new cljs.core.Symbol(null,"a-fn","a-fn",661366254,null),new cljs.core.Symbol(null,"differ","differ",1398395987,null)], null);
}));

(expectations.Functionally.cljs$lang$type = true);

(expectations.Functionally.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"expectations/Functionally",null,(1),null));
}));

(expectations.Functionally.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"expectations/Functionally");
}));

/**
 * Positional factory function for expectations/Functionally.
 */
expectations.__GT_Functionally = (function expectations$__GT_Functionally(e_fn,a_fn,differ){
return (new expectations.Functionally(e_fn,a_fn,differ,null,null,null));
});

/**
 * Factory function for expectations/Functionally, taking a map of keywords to field values.
 */
expectations.map__GT_Functionally = (function expectations$map__GT_Functionally(G__52148){
var extmap__4512__auto__ = (function (){var G__52278 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__52148,new cljs.core.Keyword(null,"e-fn","e-fn",127489254),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"a-fn","a-fn",-979165273),new cljs.core.Keyword(null,"differ","differ",-242135540)], 0));
if(cljs.core.record_QMARK_(G__52148)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__52278);
} else {
return G__52278;
}
})();
return (new expectations.Functionally(new cljs.core.Keyword(null,"e-fn","e-fn",127489254).cljs$core$IFn$_invoke$arity$1(G__52148),new cljs.core.Keyword(null,"a-fn","a-fn",-979165273).cljs$core$IFn$_invoke$arity$1(G__52148),new cljs.core.Keyword(null,"differ","differ",-242135540).cljs$core$IFn$_invoke$arity$1(G__52148),null,cljs.core.not_empty(extmap__4512__auto__),null));
});

/**
 * Given a pair of functions, return a custom predicate that checks that they
 *   return the same result when applied to a value. May optionally accept a
 *   'difference' function that should accept the result of each function and
 *   return a string explaininhg how they actually differ.
 *   For explaining strings, you could use expectations/strings-difference.
 */
expectations.functionally = (function expectations$functionally(var_args){
var G__52293 = arguments.length;
switch (G__52293) {
case 2:
return expectations.functionally.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return expectations.functionally.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(expectations.functionally.cljs$core$IFn$_invoke$arity$2 = (function (expected_fn,actual_fn){
return expectations.__GT_Functionally(expected_fn,actual_fn,null);
}));

(expectations.functionally.cljs$core$IFn$_invoke$arity$3 = (function (expected_fn,actual_fn,difference_fn){
return expectations.__GT_Functionally(expected_fn,actual_fn,difference_fn);
}));

(expectations.functionally.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=expectations.js.map
