goog.provide('matcher_combinators.ansi_color');
matcher_combinators.ansi_color._STAR_use_color_STAR_ = true;
matcher_combinators.ansi_color.ANSI_CODES = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"strikethrough-off","strikethrough-off",1886417568),new cljs.core.Keyword(null,"white","white",-483998618),new cljs.core.Keyword(null,"reset","reset",-800929946),new cljs.core.Keyword(null,"yellow","yellow",-881035449),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"bg-red","bg-red",-1645498040),new cljs.core.Keyword(null,"inverse","inverse",-1623859672),new cljs.core.Keyword(null,"bg-cyan","bg-cyan",-1582237015),new cljs.core.Keyword(null,"green","green",-945526839),new cljs.core.Keyword(null,"bg-green","bg-green",-138353590),new cljs.core.Keyword(null,"cyan","cyan",1118839274),new cljs.core.Keyword(null,"bg-black","bg-black",2110303851),new cljs.core.Keyword(null,"underline-off","underline-off",-1119988244),new cljs.core.Keyword(null,"underline","underline",2018066703),new cljs.core.Keyword(null,"bg-magenta","bg-magenta",2073641232),new cljs.core.Keyword(null,"inverse-off","inverse-off",1978808529),new cljs.core.Keyword(null,"bg-yellow","bg-yellow",-1293468429),new cljs.core.Keyword(null,"strikethrough","strikethrough",1012146804),new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.Keyword(null,"blue","blue",-622100620),new cljs.core.Keyword(null,"bg-default","bg-default",-1886924330),new cljs.core.Keyword(null,"bg-white","bg-white",-1453241673),new cljs.core.Keyword(null,"magenta","magenta",1687937081),new cljs.core.Keyword(null,"bg-blue","bg-blue",-1747478308),new cljs.core.Keyword(null,"blink-slow","blink-slow",102076510),new cljs.core.Keyword(null,"bright","bright",-1876684577),new cljs.core.Keyword(null,"black","black",1294279647)],["[29m","[37m","[0m","[33m","[39m","[41m","[7m","[46m","[32m","[42m","[36m","[40m","[24m","[4m","[45m","[27m","[43m","[9m","[31m","[34m","[49m","[47m","[35m","[44m","[5m","[1m","[30m"]);
matcher_combinators.ansi_color.ansi_code = (function matcher_combinators$ansi_color$ansi_code(code){
if(cljs.core.truth_((function (){var and__4221__auto__ = matcher_combinators.ansi_color._STAR_use_color_STAR_;
if(cljs.core.truth_(and__4221__auto__)){
return code;
} else {
return and__4221__auto__;
}
})())){
return ["\u001B",cljs.core.str.cljs$core$IFn$_invoke$arity$1(code)].join('');
} else {
return null;
}
});
matcher_combinators.ansi_color.style_STAR_ = (function matcher_combinators$ansi_color$style_STAR_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___147936 = arguments.length;
var i__4830__auto___147937 = (0);
while(true){
if((i__4830__auto___147937 < len__4829__auto___147936)){
args__4835__auto__.push((arguments[i__4830__auto___147937]));

var G__147938 = (i__4830__auto___147937 + (1));
i__4830__auto___147937 = G__147938;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return matcher_combinators.ansi_color.style_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(matcher_combinators.ansi_color.style_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (s,codes){
return [clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(matcher_combinators.ansi_color.ansi_code,codes)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),matcher_combinators.ansi_color.ansi_code("[0m")].join('');
}));

(matcher_combinators.ansi_color.style_STAR_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(matcher_combinators.ansi_color.style_STAR_.cljs$lang$applyTo = (function (seq147922){
var G__147923 = cljs.core.first(seq147922);
var seq147922__$1 = cljs.core.next(seq147922);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__147923,seq147922__$1);
}));

matcher_combinators.ansi_color.style = (function matcher_combinators$ansi_color$style(var_args){
var args__4835__auto__ = [];
var len__4829__auto___147943 = arguments.length;
var i__4830__auto___147944 = (0);
while(true){
if((i__4830__auto___147944 < len__4829__auto___147943)){
args__4835__auto__.push((arguments[i__4830__auto___147944]));

var G__147945 = (i__4830__auto___147944 + (1));
i__4830__auto___147944 = G__147945;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return matcher_combinators.ansi_color.style.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(matcher_combinators.ansi_color.style.cljs$core$IFn$_invoke$arity$variadic = (function (s,codes){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(matcher_combinators.ansi_color.style_STAR_,s,cljs.core.map.cljs$core$IFn$_invoke$arity$2(matcher_combinators.ansi_color.ANSI_CODES,codes));
}));

(matcher_combinators.ansi_color.style.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(matcher_combinators.ansi_color.style.cljs$lang$applyTo = (function (seq147926){
var G__147927 = cljs.core.first(seq147926);
var seq147926__$1 = cljs.core.next(seq147926);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__147927,seq147926__$1);
}));

matcher_combinators.ansi_color.set_color = (function matcher_combinators$ansi_color$set_color(color){
return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(matcher_combinators.ansi_color.ansi_code((matcher_combinators.ansi_color.ANSI_CODES.cljs$core$IFn$_invoke$arity$1 ? matcher_combinators.ansi_color.ANSI_CODES.cljs$core$IFn$_invoke$arity$1(color) : matcher_combinators.ansi_color.ANSI_CODES.call(null,color))))], 0));
});
matcher_combinators.ansi_color.reset = (function matcher_combinators$ansi_color$reset(){
return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(matcher_combinators.ansi_color.ansi_code((matcher_combinators.ansi_color.ANSI_CODES.cljs$core$IFn$_invoke$arity$1 ? matcher_combinators.ansi_color.ANSI_CODES.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"reset","reset",-800929946)) : matcher_combinators.ansi_color.ANSI_CODES.call(null,new cljs.core.Keyword(null,"reset","reset",-800929946)))))], 0));
});

//# sourceMappingURL=matcher_combinators.ansi_color.js.map
