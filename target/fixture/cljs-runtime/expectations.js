goog.provide('expectations');
expectations.no_op = (function expectations$no_op(var_args){
var args__4835__auto__ = [];
var len__4829__auto___148191 = arguments.length;
var i__4830__auto___148192 = (0);
while(true){
if((i__4830__auto___148192 < len__4829__auto___148191)){
args__4835__auto__.push((arguments[i__4830__auto___148192]));

var G__148193 = (i__4830__auto___148192 + (1));
i__4830__auto___148192 = G__148193;
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
(expectations.no_op.cljs$lang$applyTo = (function (seq147637){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq147637));
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
var len__4829__auto___148198 = arguments.length;
var i__4830__auto___148199 = (0);
while(true){
if((i__4830__auto___148199 < len__4829__auto___148198)){
args__4835__auto__.push((arguments[i__4830__auto___148199]));

var G__148200 = (i__4830__auto___148199 + (1));
i__4830__auto___148199 = G__148200;
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
(expectations.color.cljs$lang$applyTo = (function (seq147691){
var G__147692 = cljs.core.first(seq147691);
var seq147691__$1 = cljs.core.next(seq147691);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__147692,seq147691__$1);
}));

expectations.colorize_filename = (function expectations$colorize_filename(s){
var pred__147694 = cljs.core._EQ_;
var expr__147695 = expectations.colorize_choice();
if(cljs.core.truth_((pred__147694.cljs$core$IFn$_invoke$arity$2 ? pred__147694.cljs$core$IFn$_invoke$arity$2("TRUE",expr__147695) : pred__147694.call(null,"TRUE",expr__147695)))){
return expectations.color.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"magenta","magenta",1687937081),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s], 0));
} else {
return s;
}
});
expectations.colorize_raw = (function expectations$colorize_raw(s){
var pred__147697 = cljs.core._EQ_;
var expr__147698 = expectations.colorize_choice();
if(cljs.core.truth_((pred__147697.cljs$core$IFn$_invoke$arity$2 ? pred__147697.cljs$core$IFn$_invoke$arity$2("TRUE",expr__147698) : pred__147697.call(null,"TRUE",expr__147698)))){
return expectations.color.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"cyan","cyan",1118839274),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s], 0));
} else {
return s;
}
});
expectations.colorize_results = (function expectations$colorize_results(pred,s){
var pred__147700 = cljs.core._EQ_;
var expr__147701 = expectations.colorize_choice();
if(cljs.core.truth_((pred__147700.cljs$core$IFn$_invoke$arity$2 ? pred__147700.cljs$core$IFn$_invoke$arity$2("TRUE",expr__147701) : pred__147700.call(null,"TRUE",expr__147701)))){
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
var pred__147704 = cljs.core._EQ_;
var expr__147705 = expectations.colorize_choice();
if(cljs.core.truth_((pred__147704.cljs$core$IFn$_invoke$arity$2 ? pred__147704.cljs$core$IFn$_invoke$arity$2("TRUE",expr__147705) : pred__147704.call(null,"TRUE",expr__147705)))){
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
expectations.test_name = (function expectations$test_name(p__147708){
var map__147709 = p__147708;
var map__147709__$1 = cljs.core.__destructure_map(map__147709);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__147709__$1,new cljs.core.Keyword(null,"line","line",212345235));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__147709__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join('');
});
expectations.test_file = (function expectations$test_file(p__147712){
var map__147719 = p__147712;
var map__147719__$1 = cljs.core.__destructure_map(map__147719);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__147719__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__147719__$1,new cljs.core.Keyword(null,"line","line",212345235));
return expectations.colorize_filename([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.last(cljs.core.re_seq(/[0-9A-Za-z_\.]+/,file))),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''));
});
expectations.raw_str = (function expectations$raw_str(p__147722){
var vec__147724 = p__147722;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__147724,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__147724,(1),null);
var sb__4760__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__147728_148202 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__147729_148203 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__147730_148204 = true;
var _STAR_print_fn_STAR__temp_val__147731_148205 = (function (x__4761__auto__){
return sb__4760__auto__.append(x__4761__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__147730_148204);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__147731_148205);

try{var G__147732_148206 = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"expect","expect",470404175,null),null,(1),null)),(new cljs.core.List(null,e,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,a,null,(1),null))], 0))));
(expectations.platform.pprint.cljs$core$IFn$_invoke$arity$1 ? expectations.platform.pprint.cljs$core$IFn$_invoke$arity$1(G__147732_148206) : expectations.platform.pprint.call(null,G__147732_148206));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__147729_148203);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__147728_148202);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4760__auto__);
});
expectations.pp_str = (function expectations$pp_str(e){
return clojure.string.trim((function (){var sb__4760__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__147733_148208 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__147734_148211 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__147735_148212 = true;
var _STAR_print_fn_STAR__temp_val__147736_148213 = (function (x__4761__auto__){
return sb__4760__auto__.append(x__4761__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__147735_148212);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__147736_148213);

try{(expectations.platform.pprint.cljs$core$IFn$_invoke$arity$1 ? expectations.platform.pprint.cljs$core$IFn$_invoke$arity$1(e) : expectations.platform.pprint.call(null,e));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__147734_148211);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__147733_148208);
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
expectations.ignored_fns = (function expectations$ignored_fns(p__147741){
var map__147743 = p__147741;
var map__147743__$1 = cljs.core.__destructure_map(map__147743);
var className = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__147743__$1,new cljs.core.Keyword(null,"className","className",-1983287057));
var fileName = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__147743__$1,new cljs.core.Keyword(null,"fileName","fileName",1063478601));
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
expectations.stackline__GT_str = (function expectations$stackline__GT_str(p__147757){
var map__147758 = p__147757;
var map__147758__$1 = cljs.core.__destructure_map(map__147758);
var className = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__147758__$1,new cljs.core.Keyword(null,"className","className",-1983287057));
var methodName = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__147758__$1,new cljs.core.Keyword(null,"methodName","methodName",-2055958885));
var fileName = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__147758__$1,new cljs.core.Keyword(null,"fileName","fileName",1063478601));
var lineNumber = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__147758__$1,new cljs.core.Keyword(null,"lineNumber","lineNumber",974255001));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(methodName,"invoke")){
return ["           on (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fileName),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lineNumber),")"].join('');
} else {
return ["           ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(className),"$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(methodName)," (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fileName),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lineNumber),")"].join('');
}
});
expectations.pruned_stack_trace = (function expectations$pruned_stack_trace(t){
return t.stack;
});
expectations.__GT_failure_message = (function expectations$__GT_failure_message(p__147763){
var map__147764 = p__147763;
var map__147764__$1 = cljs.core.__destructure_map(map__147764);
var raw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__147764__$1,new cljs.core.Keyword(null,"raw","raw",1604651272));
var ref_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__147764__$1,new cljs.core.Keyword(null,"ref-data","ref-data",743306603));
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__147764__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var expected_message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__147764__$1,new cljs.core.Keyword(null,"expected-message","expected-message",-615750006));
var actual_message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__147764__$1,new cljs.core.Keyword(null,"actual-message","actual-message",1010600886));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__147764__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var list = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__147764__$1,new cljs.core.Keyword(null,"list","list",765357683));
var show_raw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__147764__$1,new cljs.core.Keyword(null,"show-raw","show-raw",312153310));
return expectations.string_join("\n",new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(expectations.reminder)?expectations.colorize_warn(["     ***** ",clojure.string.upper_case(expectations.reminder)," *****"].join('')):null),(cljs.core.truth_(raw)?(cljs.core.truth_((function (){var or__4223__auto__ = show_raw;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return expectations.show_raw_choice();
}
})())?expectations.colorize_raw(expectations.raw_str(raw)):null):null),(function (){var temp__5753__auto__ = ref_data;
if(cljs.core.truth_(temp__5753__auto__)){
var vec__147766 = temp__5753__auto__;
var seq__147767 = cljs.core.seq(vec__147766);
var first__147768 = cljs.core.first(seq__147767);
var seq__147767__$1 = cljs.core.next(seq__147767);
var n1 = first__147768;
var first__147768__$1 = cljs.core.first(seq__147767__$1);
var seq__147767__$2 = cljs.core.next(seq__147767__$1);
var v1 = first__147768__$1;
var _ = seq__147767__$2;
var G__147769 = "             locals %s: %s";
var G__147770 = n1;
var G__147771 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v1], 0));
return (expectations.platform.format.cljs$core$IFn$_invoke$arity$3 ? expectations.platform.format.cljs$core$IFn$_invoke$arity$3(G__147769,G__147770,G__147771) : expectations.platform.format.call(null,G__147769,G__147770,G__147771));
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = ref_data;
if(cljs.core.truth_(temp__5753__auto__)){
var vec__147772 = temp__5753__auto__;
var seq__147773 = cljs.core.seq(vec__147772);
var first__147774 = cljs.core.first(seq__147773);
var seq__147773__$1 = cljs.core.next(seq__147773);
var _ = first__147774;
var first__147774__$1 = cljs.core.first(seq__147773__$1);
var seq__147773__$2 = cljs.core.next(seq__147773__$1);
var ___$1 = first__147774__$1;
var the_rest = seq__147773__$2;
if(the_rest){
return expectations.string_join("\n",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__147762_SHARP_){
var G__147776 = "                    %s: %s";
var G__147777 = cljs.core.first(p1__147762_SHARP_);
var G__147778 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.second(p1__147762_SHARP_)], 0));
return (expectations.platform.format.cljs$core$IFn$_invoke$arity$3 ? expectations.platform.format.cljs$core$IFn$_invoke$arity$3(G__147776,G__147777,G__147778) : expectations.platform.format.call(null,G__147776,G__147777,G__147778));
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
var hierarchy__4716__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__147784 = cljs.core.get_global_hierarchy;
return (fexpr__147784.cljs$core$IFn$_invoke$arity$0 ? fexpr__147784.cljs$core$IFn$_invoke$arity$0() : fexpr__147784.call(null));
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
expectations.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"error","error",-978969032),(function (p__147786){
var map__147787 = p__147786;
var map__147787__$1 = cljs.core.__destructure_map(map__147787);
var m = map__147787__$1;
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__147787__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var raw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__147787__$1,new cljs.core.Keyword(null,"raw","raw",1604651272));
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
expectations.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"summary","summary",380847952),(function (p__147793){
var map__147794 = p__147793;
var map__147794__$1 = cljs.core.__destructure_map(map__147794);
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__147794__$1,new cljs.core.Keyword(null,"test","test",577538877));
var pass = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__147794__$1,new cljs.core.Keyword(null,"pass","pass",1574159993));
var fail = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__147794__$1,new cljs.core.Keyword(null,"fail","fail",1706214930));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__147794__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var run_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__147794__$1,new cljs.core.Keyword(null,"run-time","run-time",-1231674133));
var ignored_expectations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__147794__$1,new cljs.core.Keyword(null,"ignored-expectations","ignored-expectations",303531187));
return expectations.summary.call(null,["\nRan ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(test)," tests containing ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((pass + fail) + error))," assertions in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(run_time)," msecs\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1((((ignored_expectations > (0)))?expectations.colorize_warn(["IGNORED ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ignored_expectations)," EXPECTATIONS\n"].join('')):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(expectations.colorize_results(cljs.core.partial.cljs$core$IFn$_invoke$arity$4(cljs.core._EQ_,(0),fail,error),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(fail)," failures, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(error)," errors"].join(''))),"."].join(''));
}));
expectations.disable_run_on_shutdown = (function expectations$disable_run_on_shutdown(){
return cljs.core.reset_BANG_(expectations.run_tests_on_shutdown,false);
});
expectations.warn_on_iref_updates = (function expectations$warn_on_iref_updates(){
return cljs.core.reset_BANG_(expectations.warn_on_iref_updates_boolean,true);
});
expectations.add_watch_every_iref_for_updates = (function expectations$add_watch_every_iref_for_updates(iref_vars){
var seq__147801 = cljs.core.seq(iref_vars);
var chunk__147802 = null;
var count__147803 = (0);
var i__147804 = (0);
while(true){
if((i__147804 < count__147803)){
var var$ = chunk__147802.cljs$core$IIndexed$_nth$arity$2(null,i__147804);
cljs.core.add_watch(cljs.core.deref(var$),new cljs.core.Keyword("expectations","expectations-watching-state-modifications","expectations/expectations-watching-state-modifications",1804238518),((function (seq__147801,chunk__147802,count__147803,i__147804,var$){
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
});})(seq__147801,chunk__147802,count__147803,i__147804,var$))
);


var G__148276 = seq__147801;
var G__148277 = chunk__147802;
var G__148278 = count__147803;
var G__148279 = (i__147804 + (1));
seq__147801 = G__148276;
chunk__147802 = G__148277;
count__147803 = G__148278;
i__147804 = G__148279;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__147801);
if(temp__5753__auto__){
var seq__147801__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__147801__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__147801__$1);
var G__148280 = cljs.core.chunk_rest(seq__147801__$1);
var G__148281 = c__4649__auto__;
var G__148282 = cljs.core.count(c__4649__auto__);
var G__148283 = (0);
seq__147801 = G__148280;
chunk__147802 = G__148281;
count__147803 = G__148282;
i__147804 = G__148283;
continue;
} else {
var var$ = cljs.core.first(seq__147801__$1);
cljs.core.add_watch(cljs.core.deref(var$),new cljs.core.Keyword("expectations","expectations-watching-state-modifications","expectations/expectations-watching-state-modifications",1804238518),((function (seq__147801,chunk__147802,count__147803,i__147804,var$,seq__147801__$1,temp__5753__auto__){
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
});})(seq__147801,chunk__147802,count__147803,i__147804,var$,seq__147801__$1,temp__5753__auto__))
);


var G__148288 = cljs.core.next(seq__147801__$1);
var G__148289 = null;
var G__148290 = (0);
var G__148291 = (0);
seq__147801 = G__148288;
chunk__147802 = G__148289;
count__147803 = G__148290;
i__147804 = G__148291;
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
var seq__147816 = cljs.core.seq(iref_vars);
var chunk__147817 = null;
var count__147818 = (0);
var i__147819 = (0);
while(true){
if((i__147819 < count__147818)){
var var$ = chunk__147817.cljs$core$IIndexed$_nth$arity$2(null,i__147819);
cljs.core.remove_watch(cljs.core.deref(var$),new cljs.core.Keyword("expectations","expectations-watching-state-modifications","expectations/expectations-watching-state-modifications",1804238518));


var G__148292 = seq__147816;
var G__148293 = chunk__147817;
var G__148294 = count__147818;
var G__148295 = (i__147819 + (1));
seq__147816 = G__148292;
chunk__147817 = G__148293;
count__147818 = G__148294;
i__147819 = G__148295;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__147816);
if(temp__5753__auto__){
var seq__147816__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__147816__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__147816__$1);
var G__148296 = cljs.core.chunk_rest(seq__147816__$1);
var G__148297 = c__4649__auto__;
var G__148298 = cljs.core.count(c__4649__auto__);
var G__148299 = (0);
seq__147816 = G__148296;
chunk__147817 = G__148297;
count__147818 = G__148298;
i__147819 = G__148299;
continue;
} else {
var var$ = cljs.core.first(seq__147816__$1);
cljs.core.remove_watch(cljs.core.deref(var$),new cljs.core.Keyword("expectations","expectations-watching-state-modifications","expectations/expectations-watching-state-modifications",1804238518));


var G__148300 = cljs.core.next(seq__147816__$1);
var G__148301 = null;
var G__148302 = (0);
var G__148303 = (0);
seq__147816 = G__148300;
chunk__147817 = G__148301;
count__147818 = G__148302;
i__147819 = G__148303;
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

var _STAR_test_name_STAR__orig_val__147822_148304 = expectations._STAR_test_name_STAR_;
var _STAR_test_meta_STAR__orig_val__147823_148305 = expectations._STAR_test_meta_STAR_;
var _STAR_test_var_STAR__orig_val__147824_148306 = expectations._STAR_test_var_STAR_;
var _STAR_test_name_STAR__temp_val__147825_148307 = tn;
var _STAR_test_meta_STAR__temp_val__147826_148308 = tm;
var _STAR_test_var_STAR__temp_val__147827_148309 = v;
(expectations._STAR_test_name_STAR_ = _STAR_test_name_STAR__temp_val__147825_148307);

(expectations._STAR_test_meta_STAR_ = _STAR_test_meta_STAR__temp_val__147826_148308);

(expectations._STAR_test_var_STAR_ = _STAR_test_var_STAR__temp_val__147827_148309);

try{try{(t.cljs$core$IFn$_invoke$arity$0 ? t.cljs$core$IFn$_invoke$arity$0() : t.call(null));
}catch (e147828){if((e147828 instanceof Error)){
var e_148310 = e147828;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\nunexpected error in",tn], 0));

expectations.platform.print_stack_trace(e_148310);
} else {
throw e147828;

}
}}finally {(expectations._STAR_test_var_STAR_ = _STAR_test_var_STAR__orig_val__147824_148306);

(expectations._STAR_test_meta_STAR_ = _STAR_test_meta_STAR__orig_val__147823_148305);

(expectations._STAR_test_name_STAR_ = _STAR_test_name_STAR__orig_val__147822_148304);
}
return expectations.finished.call(null,tn,tm);
} else {
return null;
}
});
expectations.execute_vars = (function expectations$execute_vars(vars){
var seq__147829 = cljs.core.seq(vars);
var chunk__147830 = null;
var count__147831 = (0);
var i__147832 = (0);
while(true){
if((i__147832 < count__147831)){
var var$ = chunk__147830.cljs$core$IIndexed$_nth$arity$2(null,i__147832);
if(expectations.platform.bound_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([var$], 0))){
var temp__5753__auto___148311 = cljs.core.deref(var$);
if(cljs.core.truth_(temp__5753__auto___148311)){
var vv_148312 = temp__5753__auto___148311;
(vv_148312.cljs$core$IFn$_invoke$arity$0 ? vv_148312.cljs$core$IFn$_invoke$arity$0() : vv_148312.call(null));
} else {
}
} else {
}


var G__148314 = seq__147829;
var G__148315 = chunk__147830;
var G__148316 = count__147831;
var G__148317 = (i__147832 + (1));
seq__147829 = G__148314;
chunk__147830 = G__148315;
count__147831 = G__148316;
i__147832 = G__148317;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__147829);
if(temp__5753__auto__){
var seq__147829__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__147829__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__147829__$1);
var G__148318 = cljs.core.chunk_rest(seq__147829__$1);
var G__148319 = c__4649__auto__;
var G__148320 = cljs.core.count(c__4649__auto__);
var G__148321 = (0);
seq__147829 = G__148318;
chunk__147830 = G__148319;
count__147831 = G__148320;
i__147832 = G__148321;
continue;
} else {
var var$ = cljs.core.first(seq__147829__$1);
if(expectations.platform.bound_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([var$], 0))){
var temp__5753__auto___148322__$1 = cljs.core.deref(var$);
if(cljs.core.truth_(temp__5753__auto___148322__$1)){
var vv_148323 = temp__5753__auto___148322__$1;
(vv_148323.cljs$core$IFn$_invoke$arity$0 ? vv_148323.cljs$core$IFn$_invoke$arity$0() : vv_148323.call(null));
} else {
}
} else {
}


var G__148324 = cljs.core.next(seq__147829__$1);
var G__148325 = null;
var G__148326 = (0);
var G__148327 = (0);
seq__147829 = G__148324;
chunk__147830 = G__148325;
count__147831 = G__148326;
i__147832 = G__148327;
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
var G__147848 = cljs.core.count(in_context_vars);
switch (G__147848) {
case (0):
return (work.cljs$core$IFn$_invoke$arity$0 ? work.cljs$core$IFn$_invoke$arity$0() : work.call(null));

break;
case (1):
var fexpr__147849 = cljs.core.deref(cljs.core.first(in_context_vars));
return (fexpr__147849.cljs$core$IFn$_invoke$arity$1 ? fexpr__147849.cljs$core$IFn$_invoke$arity$1(work) : fexpr__147849.call(null,work));

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

var _STAR_report_counters_STAR__orig_val__147864 = expectations._STAR_report_counters_STAR_;
var _STAR_report_counters_STAR__temp_val__147865 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(expectations.initial_report_counters);
(expectations._STAR_report_counters_STAR_ = _STAR_report_counters_STAR__temp_val__147865);

try{var ns__GT_vars = cljs.core.group_by(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.meta),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"line","line",212345235),cljs.core.meta),new cljs.core.Keyword(null,"expectation","expectation",-250416721).cljs$core$IFn$_invoke$arity$1(vars_by_kind)));
var start = expectations.platform.nano_time();
var in_context_vars = cljs.core.vec(new cljs.core.Keyword(null,"in-context","in-context",-673372070).cljs$core$IFn$_invoke$arity$1(vars_by_kind));
var seq__147870_148332 = cljs.core.seq(ns__GT_vars);
var chunk__147871_148333 = null;
var count__147872_148334 = (0);
var i__147873_148335 = (0);
while(true){
if((i__147873_148335 < count__147872_148334)){
var vec__147900_148336 = chunk__147871_148333.cljs$core$IIndexed$_nth$arity$2(null,i__147873_148335);
var a_ns_148337 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__147900_148336,(0),null);
var the_vars_148338 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__147900_148336,(1),null);
var seq__147903_148339 = cljs.core.seq(the_vars_148338);
var chunk__147904_148340 = null;
var count__147905_148341 = (0);
var i__147906_148342 = (0);
while(true){
if((i__147906_148342 < count__147905_148341)){
var v_148343 = chunk__147904_148340.cljs$core$IIndexed$_nth$arity$2(null,i__147906_148342);
expectations.create_context(in_context_vars,cljs.core.with_meta(((function (seq__147903_148339,chunk__147904_148340,count__147905_148341,i__147906_148342,seq__147870_148332,chunk__147871_148333,count__147872_148334,i__147873_148335,v_148343,vec__147900_148336,a_ns_148337,the_vars_148338,ns__GT_vars,start,in_context_vars,_STAR_report_counters_STAR__orig_val__147864,_STAR_report_counters_STAR__temp_val__147865){
return (function (){
return expectations.test_var(v_148343);
});})(seq__147903_148339,chunk__147904_148340,count__147905_148341,i__147906_148342,seq__147870_148332,chunk__147871_148333,count__147872_148334,i__147873_148335,v_148343,vec__147900_148336,a_ns_148337,the_vars_148338,ns__GT_vars,start,in_context_vars,_STAR_report_counters_STAR__orig_val__147864,_STAR_report_counters_STAR__temp_val__147865))
,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"the-var","the-var",1428415613),v_148343], null)));

expectations.expectation_finished.call(null,v_148343);


var G__148350 = seq__147903_148339;
var G__148351 = chunk__147904_148340;
var G__148352 = count__147905_148341;
var G__148353 = (i__147906_148342 + (1));
seq__147903_148339 = G__148350;
chunk__147904_148340 = G__148351;
count__147905_148341 = G__148352;
i__147906_148342 = G__148353;
continue;
} else {
var temp__5753__auto___148354 = cljs.core.seq(seq__147903_148339);
if(temp__5753__auto___148354){
var seq__147903_148361__$1 = temp__5753__auto___148354;
if(cljs.core.chunked_seq_QMARK_(seq__147903_148361__$1)){
var c__4649__auto___148362 = cljs.core.chunk_first(seq__147903_148361__$1);
var G__148363 = cljs.core.chunk_rest(seq__147903_148361__$1);
var G__148364 = c__4649__auto___148362;
var G__148365 = cljs.core.count(c__4649__auto___148362);
var G__148367 = (0);
seq__147903_148339 = G__148363;
chunk__147904_148340 = G__148364;
count__147905_148341 = G__148365;
i__147906_148342 = G__148367;
continue;
} else {
var v_148368 = cljs.core.first(seq__147903_148361__$1);
expectations.create_context(in_context_vars,cljs.core.with_meta(((function (seq__147903_148339,chunk__147904_148340,count__147905_148341,i__147906_148342,seq__147870_148332,chunk__147871_148333,count__147872_148334,i__147873_148335,v_148368,seq__147903_148361__$1,temp__5753__auto___148354,vec__147900_148336,a_ns_148337,the_vars_148338,ns__GT_vars,start,in_context_vars,_STAR_report_counters_STAR__orig_val__147864,_STAR_report_counters_STAR__temp_val__147865){
return (function (){
return expectations.test_var(v_148368);
});})(seq__147903_148339,chunk__147904_148340,count__147905_148341,i__147906_148342,seq__147870_148332,chunk__147871_148333,count__147872_148334,i__147873_148335,v_148368,seq__147903_148361__$1,temp__5753__auto___148354,vec__147900_148336,a_ns_148337,the_vars_148338,ns__GT_vars,start,in_context_vars,_STAR_report_counters_STAR__orig_val__147864,_STAR_report_counters_STAR__temp_val__147865))
,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"the-var","the-var",1428415613),v_148368], null)));

expectations.expectation_finished.call(null,v_148368);


var G__148369 = cljs.core.next(seq__147903_148361__$1);
var G__148370 = null;
var G__148371 = (0);
var G__148372 = (0);
seq__147903_148339 = G__148369;
chunk__147904_148340 = G__148370;
count__147905_148341 = G__148371;
i__147906_148342 = G__148372;
continue;
}
} else {
}
}
break;
}

expectations.ns_finished.call(null,expectations.platform.ns_name(a_ns_148337));


var G__148373 = seq__147870_148332;
var G__148374 = chunk__147871_148333;
var G__148375 = count__147872_148334;
var G__148376 = (i__147873_148335 + (1));
seq__147870_148332 = G__148373;
chunk__147871_148333 = G__148374;
count__147872_148334 = G__148375;
i__147873_148335 = G__148376;
continue;
} else {
var temp__5753__auto___148377 = cljs.core.seq(seq__147870_148332);
if(temp__5753__auto___148377){
var seq__147870_148378__$1 = temp__5753__auto___148377;
if(cljs.core.chunked_seq_QMARK_(seq__147870_148378__$1)){
var c__4649__auto___148379 = cljs.core.chunk_first(seq__147870_148378__$1);
var G__148380 = cljs.core.chunk_rest(seq__147870_148378__$1);
var G__148381 = c__4649__auto___148379;
var G__148382 = cljs.core.count(c__4649__auto___148379);
var G__148383 = (0);
seq__147870_148332 = G__148380;
chunk__147871_148333 = G__148381;
count__147872_148334 = G__148382;
i__147873_148335 = G__148383;
continue;
} else {
var vec__147911_148387 = cljs.core.first(seq__147870_148378__$1);
var a_ns_148388 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__147911_148387,(0),null);
var the_vars_148389 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__147911_148387,(1),null);
var seq__147914_148393 = cljs.core.seq(the_vars_148389);
var chunk__147915_148394 = null;
var count__147916_148395 = (0);
var i__147917_148396 = (0);
while(true){
if((i__147917_148396 < count__147916_148395)){
var v_148400 = chunk__147915_148394.cljs$core$IIndexed$_nth$arity$2(null,i__147917_148396);
expectations.create_context(in_context_vars,cljs.core.with_meta(((function (seq__147914_148393,chunk__147915_148394,count__147916_148395,i__147917_148396,seq__147870_148332,chunk__147871_148333,count__147872_148334,i__147873_148335,v_148400,vec__147911_148387,a_ns_148388,the_vars_148389,seq__147870_148378__$1,temp__5753__auto___148377,ns__GT_vars,start,in_context_vars,_STAR_report_counters_STAR__orig_val__147864,_STAR_report_counters_STAR__temp_val__147865){
return (function (){
return expectations.test_var(v_148400);
});})(seq__147914_148393,chunk__147915_148394,count__147916_148395,i__147917_148396,seq__147870_148332,chunk__147871_148333,count__147872_148334,i__147873_148335,v_148400,vec__147911_148387,a_ns_148388,the_vars_148389,seq__147870_148378__$1,temp__5753__auto___148377,ns__GT_vars,start,in_context_vars,_STAR_report_counters_STAR__orig_val__147864,_STAR_report_counters_STAR__temp_val__147865))
,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"the-var","the-var",1428415613),v_148400], null)));

expectations.expectation_finished.call(null,v_148400);


var G__148409 = seq__147914_148393;
var G__148410 = chunk__147915_148394;
var G__148411 = count__147916_148395;
var G__148412 = (i__147917_148396 + (1));
seq__147914_148393 = G__148409;
chunk__147915_148394 = G__148410;
count__147916_148395 = G__148411;
i__147917_148396 = G__148412;
continue;
} else {
var temp__5753__auto___148413__$1 = cljs.core.seq(seq__147914_148393);
if(temp__5753__auto___148413__$1){
var seq__147914_148414__$1 = temp__5753__auto___148413__$1;
if(cljs.core.chunked_seq_QMARK_(seq__147914_148414__$1)){
var c__4649__auto___148415 = cljs.core.chunk_first(seq__147914_148414__$1);
var G__148416 = cljs.core.chunk_rest(seq__147914_148414__$1);
var G__148417 = c__4649__auto___148415;
var G__148418 = cljs.core.count(c__4649__auto___148415);
var G__148419 = (0);
seq__147914_148393 = G__148416;
chunk__147915_148394 = G__148417;
count__147916_148395 = G__148418;
i__147917_148396 = G__148419;
continue;
} else {
var v_148420 = cljs.core.first(seq__147914_148414__$1);
expectations.create_context(in_context_vars,cljs.core.with_meta(((function (seq__147914_148393,chunk__147915_148394,count__147916_148395,i__147917_148396,seq__147870_148332,chunk__147871_148333,count__147872_148334,i__147873_148335,v_148420,seq__147914_148414__$1,temp__5753__auto___148413__$1,vec__147911_148387,a_ns_148388,the_vars_148389,seq__147870_148378__$1,temp__5753__auto___148377,ns__GT_vars,start,in_context_vars,_STAR_report_counters_STAR__orig_val__147864,_STAR_report_counters_STAR__temp_val__147865){
return (function (){
return expectations.test_var(v_148420);
});})(seq__147914_148393,chunk__147915_148394,count__147916_148395,i__147917_148396,seq__147870_148332,chunk__147871_148333,count__147872_148334,i__147873_148335,v_148420,seq__147914_148414__$1,temp__5753__auto___148413__$1,vec__147911_148387,a_ns_148388,the_vars_148389,seq__147870_148378__$1,temp__5753__auto___148377,ns__GT_vars,start,in_context_vars,_STAR_report_counters_STAR__orig_val__147864,_STAR_report_counters_STAR__temp_val__147865))
,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"the-var","the-var",1428415613),v_148420], null)));

expectations.expectation_finished.call(null,v_148420);


var G__148421 = cljs.core.next(seq__147914_148414__$1);
var G__148422 = null;
var G__148423 = (0);
var G__148424 = (0);
seq__147914_148393 = G__148421;
chunk__147915_148394 = G__148422;
count__147916_148395 = G__148423;
i__147917_148396 = G__148424;
continue;
}
} else {
}
}
break;
}

expectations.ns_finished.call(null,expectations.platform.ns_name(a_ns_148388));


var G__148425 = cljs.core.next(seq__147870_148378__$1);
var G__148426 = null;
var G__148427 = (0);
var G__148428 = (0);
seq__147870_148332 = G__148425;
chunk__147871_148333 = G__148426;
count__147872_148334 = G__148427;
i__147873_148335 = G__148428;
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
}finally {(expectations._STAR_report_counters_STAR_ = _STAR_report_counters_STAR__orig_val__147864);
}});
expectations.run_tests_in_vars = (function expectations$run_tests_in_vars(vars_by_kind){
var G__147924 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(expectations.test_vars(vars_by_kind,(0)),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"summary","summary",380847952));
expectations.report.cljs$core$IFn$_invoke$arity$1(G__147924);

return G__147924;
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
if(cljs.core.truth_((function (){var G__147925 = cljs.core.type(cljs.core.deref(v));
return (expectations.platform.iref_types.cljs$core$IFn$_invoke$arity$1 ? expectations.platform.iref_types.cljs$core$IFn$_invoke$arity$1(G__147925) : expectations.platform.iref_types.call(null,G__147925));
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

var expectations$CustomPred$expect_fn$dyn_148435 = (function (e,a){
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
return expectations$CustomPred$expect_fn$dyn_148435(e,a);
}
});

var expectations$CustomPred$expected_message$dyn_148436 = (function (e,a,str_e,str_a){
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
return expectations$CustomPred$expected_message$dyn_148436(e,a,str_e,str_a);
}
});

var expectations$CustomPred$actual_message$dyn_148440 = (function (e,a,str_e,str_a){
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
return expectations$CustomPred$actual_message$dyn_148440(e,a,str_e,str_a);
}
});

var expectations$CustomPred$message$dyn_148454 = (function (e,a,str_e,str_a){
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
return expectations$CustomPred$message$dyn_148454(e,a,str_e,str_a);
}
});

if((typeof expectations !== 'undefined') && (typeof expectations.compare_expr !== 'undefined')){
} else {
expectations.compare_expr = (function (){var method_table__4712__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4713__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4714__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4715__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4716__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__147949 = cljs.core.get_global_hierarchy;
return (fexpr__147949.cljs$core$IFn$_invoke$arity$0 ? fexpr__147949.cljs$core$IFn$_invoke$arity$0() : fexpr__147949.call(null));
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
}catch (e147965){if((e147965 instanceof Error)){
var ex = e147965;
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"raw","raw",1604651272),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [str_e,str_a], null),new cljs.core.Keyword(null,"expected-message","expected-message",-615750006),["also attempted: (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(str_e)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(str_a),")"].join(''),new cljs.core.Keyword(null,"actual-message","actual-message",1010600886),["       and got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expectations.platform.get_message(ex))].join(''),new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["expected:",str_e,"\n                was:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a], 0))], null)], null);
} else {
throw e147965;

}
}}));
expectations.find_failures = (function expectations$find_failures(the_seq){
return cljs.core.seq(cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pass","pass",1574159993),null], null), null),new cljs.core.Keyword(null,"type","type",1174270348)),the_seq)));
});
expectations.find_successes = (function expectations$find_successes(the_seq){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pass","pass",1574159993),null], null), null),new cljs.core.Keyword(null,"type","type",1174270348)),the_seq));
});
expectations.compare_expr.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("expectations","from-each","expectations/from-each",-1067663208),(function (e,p__147970,str_e,str_a){
var map__147971 = p__147970;
var map__147971__$1 = cljs.core.__destructure_map(map__147971);
var a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__147971__$1,new cljs.core.Keyword("expectations","from-each","expectations/from-each",-1067663208));
var str_i_a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__147971__$1,new cljs.core.Keyword("expectations","from-each-body","expectations/from-each-body",-1647304945));
var temp__5751__auto__ = expectations.find_failures((function (){var iter__4622__auto__ = (function expectations$iter__147975(s__147976){
return (new cljs.core.LazySeq(null,(function (){
var s__147976__$1 = s__147976;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__147976__$1);
if(temp__5753__auto__){
var s__147976__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__147976__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__147976__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__147978 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__147977 = (0);
while(true){
if((i__147977 < size__4621__auto__)){
var map__147980 = cljs.core._nth(c__4620__auto__,i__147977);
var map__147980__$1 = cljs.core.__destructure_map(map__147980);
var ts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__147980__$1,new cljs.core.Keyword("expectations","the-result","expectations/the-result",268799287));
var rd = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__147980__$1,new cljs.core.Keyword("expectations","ref-data","expectations/ref-data",303734692));
cljs.core.chunk_append(b__147978,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(expectations.compare_expr.cljs$core$IFn$_invoke$arity$4(e,ts,str_e,str_i_a),new cljs.core.Keyword(null,"ref-data","ref-data",743306603),rd));

var G__148478 = (i__147977 + (1));
i__147977 = G__148478;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__147978),expectations$iter__147975(cljs.core.chunk_rest(s__147976__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__147978),null);
}
} else {
var map__147981 = cljs.core.first(s__147976__$2);
var map__147981__$1 = cljs.core.__destructure_map(map__147981);
var ts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__147981__$1,new cljs.core.Keyword("expectations","the-result","expectations/the-result",268799287));
var rd = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__147981__$1,new cljs.core.Keyword("expectations","ref-data","expectations/ref-data",303734692));
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(expectations.compare_expr.cljs$core$IFn$_invoke$arity$4(e,ts,str_e,str_i_a),new cljs.core.Keyword(null,"ref-data","ref-data",743306603),rd),expectations$iter__147975(cljs.core.rest(s__147976__$2)));
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
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"raw","raw",1604651272),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [str_e,str_a], null),new cljs.core.Keyword(null,"message","message",-406056002),(function (){var G__147988 = "the list: %s";
var G__147989 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
var temp__5751__auto____$1 = new cljs.core.Keyword("expectations","in","expectations/in",-1616294280).cljs$core$IFn$_invoke$arity$1(x);
if(cljs.core.truth_(temp__5751__auto____$1)){
var y = temp__5751__auto____$1;
return y;
} else {
return x;
}
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("expectations","the-result","expectations/the-result",268799287),a))], 0));
return (expectations.platform.format.cljs$core$IFn$_invoke$arity$2 ? expectations.platform.format.cljs$core$IFn$_invoke$arity$2(G__147988,G__147989) : expectations.platform.format.call(null,G__147988,G__147989));
})(),new cljs.core.Keyword(null,"list","list",765357683),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__147968_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__147968_SHARP_,new cljs.core.Keyword(null,"show-raw","show-raw",312153310),true);
}),failures)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993)], null);
}
}));
expectations.compare_expr.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("expectations","more","expectations/more",-1187281521),(function (p__147994,a,str_e,str_a){
var map__147995 = p__147994;
var map__147995__$1 = cljs.core.__destructure_map(map__147995);
var es = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__147995__$1,new cljs.core.Keyword("expectations","more","expectations/more",-1187281521));
var temp__5751__auto__ = expectations.find_failures((function (){var iter__4622__auto__ = (function expectations$iter__147997(s__147998){
return (new cljs.core.LazySeq(null,(function (){
var s__147998__$1 = s__147998;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__147998__$1);
if(temp__5753__auto__){
var s__147998__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__147998__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__147998__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__148000 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__147999 = (0);
while(true){
if((i__147999 < size__4621__auto__)){
var map__148005 = cljs.core._nth(c__4620__auto__,i__147999);
var map__148005__$1 = cljs.core.__destructure_map(map__148005);
var e = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__148005__$1,new cljs.core.Keyword(null,"e","e",1381269198));
var str_e__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__148005__$1,new cljs.core.Keyword(null,"str-e","str-e",2007824807));
var a_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__148005__$1,new cljs.core.Keyword(null,"a-fn","a-fn",-979165273));
var gen_str_a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__148005__$1,new cljs.core.Keyword(null,"gen-str-a","gen-str-a",1722083628));
cljs.core.chunk_append(b__148000,expectations.compare_expr.cljs$core$IFn$_invoke$arity$4(e,(function (){try{return (a_fn.cljs$core$IFn$_invoke$arity$1 ? a_fn.cljs$core$IFn$_invoke$arity$1(a) : a_fn.call(null,a));
}catch (e148006){if((e148006 instanceof Error)){
var t = e148006;
return t;
} else {
throw e148006;

}
}})(),str_e__$1,(gen_str_a.cljs$core$IFn$_invoke$arity$1 ? gen_str_a.cljs$core$IFn$_invoke$arity$1(str_a) : gen_str_a.call(null,str_a))));

var G__148500 = (i__147999 + (1));
i__147999 = G__148500;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__148000),expectations$iter__147997(cljs.core.chunk_rest(s__147998__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__148000),null);
}
} else {
var map__148013 = cljs.core.first(s__147998__$2);
var map__148013__$1 = cljs.core.__destructure_map(map__148013);
var e = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__148013__$1,new cljs.core.Keyword(null,"e","e",1381269198));
var str_e__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__148013__$1,new cljs.core.Keyword(null,"str-e","str-e",2007824807));
var a_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__148013__$1,new cljs.core.Keyword(null,"a-fn","a-fn",-979165273));
var gen_str_a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__148013__$1,new cljs.core.Keyword(null,"gen-str-a","gen-str-a",1722083628));
return cljs.core.cons(expectations.compare_expr.cljs$core$IFn$_invoke$arity$4(e,(function (){try{return (a_fn.cljs$core$IFn$_invoke$arity$1 ? a_fn.cljs$core$IFn$_invoke$arity$1(a) : a_fn.call(null,a));
}catch (e148014){if((e148014 instanceof Error)){
var t = e148014;
return t;
} else {
throw e148014;

}
}})(),str_e__$1,(gen_str_a.cljs$core$IFn$_invoke$arity$1 ? gen_str_a.cljs$core$IFn$_invoke$arity$1(str_a) : gen_str_a.call(null,str_a))),expectations$iter__147997(cljs.core.rest(s__147998__$2)));
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
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"raw","raw",1604651272),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [str_e,str_a], null),new cljs.core.Keyword(null,"message","message",-406056002),(function (){var G__148015 = "actual val: %s";
var G__148016 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a], 0));
return (expectations.platform.format.cljs$core$IFn$_invoke$arity$2 ? expectations.platform.format.cljs$core$IFn$_invoke$arity$2(G__148015,G__148016) : expectations.platform.format.call(null,G__148015,G__148016));
})(),new cljs.core.Keyword(null,"list","list",765357683),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__147993_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__147993_SHARP_,new cljs.core.Keyword(null,"show-raw","show-raw",312153310),true);
}),failures)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993)], null);
}
}));
expectations.compare_expr.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("expectations","in","expectations/in",-1616294280),(function (e,a,str_e,str_a){
if(((cljs.core.sequential_QMARK_(new cljs.core.Keyword("expectations","in","expectations/in",-1616294280).cljs$core$IFn$_invoke$arity$1(a))) || (cljs.core.set_QMARK_(new cljs.core.Keyword("expectations","in","expectations/in",-1616294280).cljs$core$IFn$_invoke$arity$1(a))))){
if(cljs.core.truth_(expectations.find_successes((function (){var iter__4622__auto__ = (function expectations$iter__148019(s__148020){
return (new cljs.core.LazySeq(null,(function (){
var s__148020__$1 = s__148020;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__148020__$1);
if(temp__5753__auto__){
var s__148020__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__148020__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__148020__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__148022 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__148021 = (0);
while(true){
if((i__148021 < size__4621__auto__)){
var a__$1 = cljs.core._nth(c__4620__auto__,i__148021);
cljs.core.chunk_append(b__148022,expectations.compare_expr.cljs$core$IFn$_invoke$arity$4(e,a__$1,str_e,str_a));

var G__148518 = (i__148021 + (1));
i__148021 = G__148518;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__148022),expectations$iter__148019(cljs.core.chunk_rest(s__148020__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__148022),null);
}
} else {
var a__$1 = cljs.core.first(s__148020__$2);
return cljs.core.cons(expectations.compare_expr.cljs$core$IFn$_invoke$arity$4(e,a__$1,str_e,str_a),expectations$iter__148019(cljs.core.rest(s__148020__$2)));
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
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"raw","raw",1604651272),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [str_e,str_a], null),new cljs.core.Keyword(null,"list","list",765357683),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__148017_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__148017_SHARP_,new cljs.core.Keyword(null,"show-raw","show-raw",312153310),true);
}),expectations.find_failures((function (){var iter__4622__auto__ = (function expectations$iter__148027(s__148028){
return (new cljs.core.LazySeq(null,(function (){
var s__148028__$1 = s__148028;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__148028__$1);
if(temp__5753__auto__){
var s__148028__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__148028__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__148028__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__148030 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__148029 = (0);
while(true){
if((i__148029 < size__4621__auto__)){
var a__$1 = cljs.core._nth(c__4620__auto__,i__148029);
cljs.core.chunk_append(b__148030,expectations.compare_expr.cljs$core$IFn$_invoke$arity$4(e,a__$1,str_e,a__$1));

var G__148520 = (i__148029 + (1));
i__148029 = G__148520;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__148030),expectations$iter__148027(cljs.core.chunk_rest(s__148028__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__148030),null);
}
} else {
var a__$1 = cljs.core.first(s__148028__$2);
return cljs.core.cons(expectations.compare_expr.cljs$core$IFn$_invoke$arity$4(e,a__$1,str_e,a__$1),expectations$iter__148027(cljs.core.rest(s__148028__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(new cljs.core.Keyword("expectations","in","expectations/in",-1616294280).cljs$core$IFn$_invoke$arity$1(a));
})())),new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(new cljs.core.Keyword("expectations","more","expectations/more",-1187281521).cljs$core$IFn$_invoke$arity$1(e))?str_e:(function (){var G__148039 = "val %s";
var G__148040 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
return (expectations.platform.format.cljs$core$IFn$_invoke$arity$2 ? expectations.platform.format.cljs$core$IFn$_invoke$arity$2(G__148039,G__148040) : expectations.platform.format.call(null,G__148039,G__148040));
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
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected-message","expected-message",-615750006),(function (){var G__148045 = "in expected, not actual: %s";
var G__148046 = cljs.core.first(clojure.data.diff(e,a__$1));
return (expectations.platform.format.cljs$core$IFn$_invoke$arity$2 ? expectations.platform.format.cljs$core$IFn$_invoke$arity$2(G__148045,G__148046) : expectations.platform.format.call(null,G__148045,G__148046));
})(),new cljs.core.Keyword(null,"actual-message","actual-message",1010600886),(function (){var G__148047 = "in actual, not expected: %s";
var G__148048 = cljs.core.first(clojure.data.diff(a__$1,e));
return (expectations.platform.format.cljs$core$IFn$_invoke$arity$2 ? expectations.platform.format.cljs$core$IFn$_invoke$arity$2(G__148047,G__148048) : expectations.platform.format.call(null,G__148047,G__148048));
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
}catch (e148057){if((e148057 instanceof Error)){
var _ = e148057;
return error;
} else {
throw e148057;

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
var vec__148080 = clojure.data.diff(e,a);
var in_e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__148080,(0),null);
var in_a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__148080,(1),null);
if((((in_e == null)) && ((in_a == null)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected-message","expected-message",-615750006),(function (){var G__148083 = in_e;
if((G__148083 == null)){
return null;
} else {
return (expectations.platform.format.cljs$core$IFn$_invoke$arity$2 ? expectations.platform.format.cljs$core$IFn$_invoke$arity$2("in expected, not actual: %s",G__148083) : expectations.platform.format.call(null,"in expected, not actual: %s",G__148083));
}
})(),new cljs.core.Keyword(null,"actual-message","actual-message",1010600886),(function (){var G__148084 = in_a;
if((G__148084 == null)){
return null;
} else {
return (expectations.platform.format.cljs$core$IFn$_invoke$arity$2 ? expectations.platform.format.cljs$core$IFn$_invoke$arity$2("in actual, not expected: %s",G__148084) : expectations.platform.format.call(null,"in actual, not expected: %s",G__148084));
}
})(),new cljs.core.Keyword(null,"raw","raw",1604651272),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [str_e,str_a], null),new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["expected:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0)),"\n                was:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a], 0))], null)], null);
}
}));
expectations.compare_expr.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("expectations","sets","expectations/sets",63554325),(function (e,a,str_e,str_a){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"actual-message","actual-message",1010600886),(function (){var G__148089 = "in actual, not expected: %s";
var G__148090 = cljs.core.first(clojure.data.diff(a,e));
return (expectations.platform.format.cljs$core$IFn$_invoke$arity$2 ? expectations.platform.format.cljs$core$IFn$_invoke$arity$2(G__148089,G__148090) : expectations.platform.format.call(null,G__148089,G__148090));
})(),new cljs.core.Keyword(null,"expected-message","expected-message",-615750006),(function (){var G__148091 = "in expected, not actual: %s";
var G__148092 = cljs.core.first(clojure.data.diff(e,a));
return (expectations.platform.format.cljs$core$IFn$_invoke$arity$2 ? expectations.platform.format.cljs$core$IFn$_invoke$arity$2(G__148091,G__148092) : expectations.platform.format.call(null,G__148091,G__148092));
})(),new cljs.core.Keyword(null,"raw","raw",1604651272),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [str_e,str_a], null),new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["expected:",e,"\n                was:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a], 0))], null)], null);
}));
expectations.compare_expr.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("expectations","sequentials","expectations/sequentials",160347083),(function (e,a,str_e,str_a){
var diff_fn = (function (e__$1,a__$1){
return cljs.core.seq(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(e__$1),cljs.core.set(a__$1)));
});
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"actual-message","actual-message",1010600886),(function (){var G__148094 = "in actual, not expected: %s";
var G__148095 = cljs.core.first(clojure.data.diff(a,e));
return (expectations.platform.format.cljs$core$IFn$_invoke$arity$2 ? expectations.platform.format.cljs$core$IFn$_invoke$arity$2(G__148094,G__148095) : expectations.platform.format.call(null,G__148094,G__148095));
})(),new cljs.core.Keyword(null,"expected-message","expected-message",-615750006),(function (){var G__148096 = "in expected, not actual: %s";
var G__148097 = cljs.core.first(clojure.data.diff(e,a));
return (expectations.platform.format.cljs$core$IFn$_invoke$arity$2 ? expectations.platform.format.cljs$core$IFn$_invoke$arity$2(G__148096,G__148097) : expectations.platform.format.call(null,G__148096,G__148097));
})(),new cljs.core.Keyword(null,"raw","raw",1604651272),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [str_e,str_a], null),new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["expected:",e,"\n                was:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a], 0))], null),new cljs.core.Keyword(null,"message","message",-406056002),((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.set(e),cljs.core.set(a))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(e),cljs.core.count(a))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(e),cljs.core.count(cljs.core.set(a))))))))?"lists appear to contain the same items with different ordering":((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.set(e),cljs.core.set(a))) && ((cljs.core.count(e) < cljs.core.count(a)))))?"some duplicate items in actual are not expected":((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.set(e),cljs.core.set(a))) && ((cljs.core.count(e) > cljs.core.count(a)))))?"some duplicate items in expected are not actual":(((cljs.core.count(e) < cljs.core.count(a)))?"actual is larger than expected":(((cljs.core.count(e) > cljs.core.count(a)))?"expected is larger than actual":null)))))], null);
}));
if((typeof expectations !== 'undefined') && (typeof expectations.localize !== 'undefined')){
} else {
expectations.localize = (function (){var method_table__4712__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4713__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4714__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4715__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4716__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__148104 = cljs.core.get_global_hierarchy;
return (fexpr__148104.cljs$core$IFn$_invoke$arity$0 ? fexpr__148104.cljs$core$IFn$_invoke$arity$0() : fexpr__148104.call(null));
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
var G__148119 = arguments.length;
switch (G__148119) {
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

(expectations.Functionally.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k148133,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__148142 = k148133;
var G__148142__$1 = (((G__148142 instanceof cljs.core.Keyword))?G__148142.fqn:null);
switch (G__148142__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k148133,else__4475__auto__);

}
}));

(expectations.Functionally.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__148143){
var vec__148144 = p__148143;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__148144,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__148144,(1),null);
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

(expectations.Functionally.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__148132){
var self__ = this;
var G__148132__$1 = this;
return (new cljs.core.RecordIter((0),G__148132__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"e-fn","e-fn",127489254),new cljs.core.Keyword(null,"a-fn","a-fn",-979165273),new cljs.core.Keyword(null,"differ","differ",-242135540)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(expectations.Functionally.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this148134,other148135){
var self__ = this;
var this148134__$1 = this;
return (((!((other148135 == null)))) && ((((this148134__$1.constructor === other148135.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this148134__$1.e_fn,other148135.e_fn)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this148134__$1.a_fn,other148135.a_fn)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this148134__$1.differ,other148135.differ)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this148134__$1.__extmap,other148135.__extmap)))))))))));
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

(expectations.Functionally.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k148133){
var self__ = this;
var this__4479__auto____$1 = this;
var G__148162 = k148133;
var G__148162__$1 = (((G__148162 instanceof cljs.core.Keyword))?G__148162.fqn:null);
switch (G__148162__$1) {
case "e-fn":
case "a-fn":
case "differ":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k148133);

}
}));

(expectations.Functionally.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__148132){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__148166 = cljs.core.keyword_identical_QMARK_;
var expr__148167 = k__4481__auto__;
if(cljs.core.truth_((pred__148166.cljs$core$IFn$_invoke$arity$2 ? pred__148166.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"e-fn","e-fn",127489254),expr__148167) : pred__148166.call(null,new cljs.core.Keyword(null,"e-fn","e-fn",127489254),expr__148167)))){
return (new expectations.Functionally(G__148132,self__.a_fn,self__.differ,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__148166.cljs$core$IFn$_invoke$arity$2 ? pred__148166.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"a-fn","a-fn",-979165273),expr__148167) : pred__148166.call(null,new cljs.core.Keyword(null,"a-fn","a-fn",-979165273),expr__148167)))){
return (new expectations.Functionally(self__.e_fn,G__148132,self__.differ,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__148166.cljs$core$IFn$_invoke$arity$2 ? pred__148166.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"differ","differ",-242135540),expr__148167) : pred__148166.call(null,new cljs.core.Keyword(null,"differ","differ",-242135540),expr__148167)))){
return (new expectations.Functionally(self__.e_fn,self__.a_fn,G__148132,self__.__meta,self__.__extmap,null));
} else {
return (new expectations.Functionally(self__.e_fn,self__.a_fn,self__.differ,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__148132),null));
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
var G__148169 = "expected: %s";
var G__148170 = (self__.e_fn.cljs$core$IFn$_invoke$arity$1 ? self__.e_fn.cljs$core$IFn$_invoke$arity$1(a) : self__.e_fn.call(null,a));
return (expectations.platform.format.cljs$core$IFn$_invoke$arity$2 ? expectations.platform.format.cljs$core$IFn$_invoke$arity$2(G__148169,G__148170) : expectations.platform.format.call(null,G__148169,G__148170));
}));

(expectations.Functionally.prototype.expectations$CustomPred$actual_message$arity$4 = (function (e,a,str_e,str_a){
var self__ = this;
var e__$1 = this;
var G__148171 = "  actual: %s";
var G__148172 = (self__.a_fn.cljs$core$IFn$_invoke$arity$1 ? self__.a_fn.cljs$core$IFn$_invoke$arity$1(a) : self__.a_fn.call(null,a));
return (expectations.platform.format.cljs$core$IFn$_invoke$arity$2 ? expectations.platform.format.cljs$core$IFn$_invoke$arity$2(G__148171,G__148172) : expectations.platform.format.call(null,G__148171,G__148172));
}));

(expectations.Functionally.prototype.expectations$CustomPred$message$arity$4 = (function (e,a,str_e,str_a){
var self__ = this;
var e__$1 = this;
if(cljs.core.truth_(self__.differ)){
var G__148173 = (self__.e_fn.cljs$core$IFn$_invoke$arity$1 ? self__.e_fn.cljs$core$IFn$_invoke$arity$1(a) : self__.e_fn.call(null,a));
var G__148174 = (self__.a_fn.cljs$core$IFn$_invoke$arity$1 ? self__.a_fn.cljs$core$IFn$_invoke$arity$1(a) : self__.a_fn.call(null,a));
return (self__.differ.cljs$core$IFn$_invoke$arity$2 ? self__.differ.cljs$core$IFn$_invoke$arity$2(G__148173,G__148174) : self__.differ.call(null,G__148173,G__148174));
} else {
return "not functionally equivalent";
}
}));

(expectations.Functionally.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__148132){
var self__ = this;
var this__4471__auto____$1 = this;
return (new expectations.Functionally(self__.e_fn,self__.a_fn,self__.differ,G__148132,self__.__extmap,self__.__hash));
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
expectations.map__GT_Functionally = (function expectations$map__GT_Functionally(G__148136){
var extmap__4512__auto__ = (function (){var G__148179 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__148136,new cljs.core.Keyword(null,"e-fn","e-fn",127489254),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"a-fn","a-fn",-979165273),new cljs.core.Keyword(null,"differ","differ",-242135540)], 0));
if(cljs.core.record_QMARK_(G__148136)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__148179);
} else {
return G__148179;
}
})();
return (new expectations.Functionally(new cljs.core.Keyword(null,"e-fn","e-fn",127489254).cljs$core$IFn$_invoke$arity$1(G__148136),new cljs.core.Keyword(null,"a-fn","a-fn",-979165273).cljs$core$IFn$_invoke$arity$1(G__148136),new cljs.core.Keyword(null,"differ","differ",-242135540).cljs$core$IFn$_invoke$arity$1(G__148136),null,cljs.core.not_empty(extmap__4512__auto__),null));
});

/**
 * Given a pair of functions, return a custom predicate that checks that they
 *   return the same result when applied to a value. May optionally accept a
 *   'difference' function that should accept the result of each function and
 *   return a string explaininhg how they actually differ.
 *   For explaining strings, you could use expectations/strings-difference.
 */
expectations.functionally = (function expectations$functionally(var_args){
var G__148182 = arguments.length;
switch (G__148182) {
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
