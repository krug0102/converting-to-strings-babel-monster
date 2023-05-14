goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__44044){
var map__44045 = p__44044;
var map__44045__$1 = cljs.core.__destructure_map(map__44045);
var m = map__44045__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44045__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44045__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4223__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return [(function (){var temp__5753__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__44046_44253 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__44047_44254 = null;
var count__44048_44255 = (0);
var i__44049_44256 = (0);
while(true){
if((i__44049_44256 < count__44048_44255)){
var f_44257 = chunk__44047_44254.cljs$core$IIndexed$_nth$arity$2(null,i__44049_44256);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_44257], 0));


var G__44258 = seq__44046_44253;
var G__44259 = chunk__44047_44254;
var G__44260 = count__44048_44255;
var G__44261 = (i__44049_44256 + (1));
seq__44046_44253 = G__44258;
chunk__44047_44254 = G__44259;
count__44048_44255 = G__44260;
i__44049_44256 = G__44261;
continue;
} else {
var temp__5753__auto___44264 = cljs.core.seq(seq__44046_44253);
if(temp__5753__auto___44264){
var seq__44046_44265__$1 = temp__5753__auto___44264;
if(cljs.core.chunked_seq_QMARK_(seq__44046_44265__$1)){
var c__4649__auto___44268 = cljs.core.chunk_first(seq__44046_44265__$1);
var G__44269 = cljs.core.chunk_rest(seq__44046_44265__$1);
var G__44270 = c__4649__auto___44268;
var G__44271 = cljs.core.count(c__4649__auto___44268);
var G__44272 = (0);
seq__44046_44253 = G__44269;
chunk__44047_44254 = G__44270;
count__44048_44255 = G__44271;
i__44049_44256 = G__44272;
continue;
} else {
var f_44273 = cljs.core.first(seq__44046_44265__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_44273], 0));


var G__44274 = cljs.core.next(seq__44046_44265__$1);
var G__44275 = null;
var G__44276 = (0);
var G__44277 = (0);
seq__44046_44253 = G__44274;
chunk__44047_44254 = G__44275;
count__44048_44255 = G__44276;
i__44049_44256 = G__44277;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_44278 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4223__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_44278], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_44278)))?cljs.core.second(arglists_44278):arglists_44278)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__44052_44279 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__44053_44280 = null;
var count__44054_44281 = (0);
var i__44055_44282 = (0);
while(true){
if((i__44055_44282 < count__44054_44281)){
var vec__44068_44283 = chunk__44053_44280.cljs$core$IIndexed$_nth$arity$2(null,i__44055_44282);
var name_44284 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44068_44283,(0),null);
var map__44071_44285 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44068_44283,(1),null);
var map__44071_44286__$1 = cljs.core.__destructure_map(map__44071_44285);
var doc_44287 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44071_44286__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_44288 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44071_44286__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_44284], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_44288], 0));

if(cljs.core.truth_(doc_44287)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_44287], 0));
} else {
}


var G__44289 = seq__44052_44279;
var G__44290 = chunk__44053_44280;
var G__44291 = count__44054_44281;
var G__44292 = (i__44055_44282 + (1));
seq__44052_44279 = G__44289;
chunk__44053_44280 = G__44290;
count__44054_44281 = G__44291;
i__44055_44282 = G__44292;
continue;
} else {
var temp__5753__auto___44293 = cljs.core.seq(seq__44052_44279);
if(temp__5753__auto___44293){
var seq__44052_44294__$1 = temp__5753__auto___44293;
if(cljs.core.chunked_seq_QMARK_(seq__44052_44294__$1)){
var c__4649__auto___44295 = cljs.core.chunk_first(seq__44052_44294__$1);
var G__44296 = cljs.core.chunk_rest(seq__44052_44294__$1);
var G__44297 = c__4649__auto___44295;
var G__44298 = cljs.core.count(c__4649__auto___44295);
var G__44299 = (0);
seq__44052_44279 = G__44296;
chunk__44053_44280 = G__44297;
count__44054_44281 = G__44298;
i__44055_44282 = G__44299;
continue;
} else {
var vec__44073_44300 = cljs.core.first(seq__44052_44294__$1);
var name_44301 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44073_44300,(0),null);
var map__44076_44302 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44073_44300,(1),null);
var map__44076_44303__$1 = cljs.core.__destructure_map(map__44076_44302);
var doc_44304 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44076_44303__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_44305 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44076_44303__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_44301], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_44305], 0));

if(cljs.core.truth_(doc_44304)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_44304], 0));
} else {
}


var G__44306 = cljs.core.next(seq__44052_44294__$1);
var G__44307 = null;
var G__44308 = (0);
var G__44309 = (0);
seq__44052_44279 = G__44306;
chunk__44053_44280 = G__44307;
count__44054_44281 = G__44308;
i__44055_44282 = G__44309;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5753__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5753__auto__)){
var fnspec = temp__5753__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__44077 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__44078 = null;
var count__44079 = (0);
var i__44080 = (0);
while(true){
if((i__44080 < count__44079)){
var role = chunk__44078.cljs$core$IIndexed$_nth$arity$2(null,i__44080);
var temp__5753__auto___44310__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___44310__$1)){
var spec_44311 = temp__5753__auto___44310__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_44311)], 0));
} else {
}


var G__44312 = seq__44077;
var G__44313 = chunk__44078;
var G__44314 = count__44079;
var G__44315 = (i__44080 + (1));
seq__44077 = G__44312;
chunk__44078 = G__44313;
count__44079 = G__44314;
i__44080 = G__44315;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq(seq__44077);
if(temp__5753__auto____$1){
var seq__44077__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__44077__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__44077__$1);
var G__44316 = cljs.core.chunk_rest(seq__44077__$1);
var G__44317 = c__4649__auto__;
var G__44318 = cljs.core.count(c__4649__auto__);
var G__44319 = (0);
seq__44077 = G__44316;
chunk__44078 = G__44317;
count__44079 = G__44318;
i__44080 = G__44319;
continue;
} else {
var role = cljs.core.first(seq__44077__$1);
var temp__5753__auto___44320__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___44320__$2)){
var spec_44321 = temp__5753__auto___44320__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_44321)], 0));
} else {
}


var G__44322 = cljs.core.next(seq__44077__$1);
var G__44323 = null;
var G__44324 = (0);
var G__44325 = (0);
seq__44077 = G__44322;
chunk__44078 = G__44323;
count__44079 = G__44324;
i__44080 = G__44325;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5753__auto__)){
var msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5753__auto__)){
var ed = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__44331 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__44332 = cljs.core.ex_cause(t);
via = G__44331;
t = G__44332;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5753__auto__)){
var root_msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5753__auto__)){
var data = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5753__auto__)){
var phase = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__44112 = datafied_throwable;
var map__44112__$1 = cljs.core.__destructure_map(map__44112);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44112__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44112__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__44112__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__44113 = cljs.core.last(via);
var map__44113__$1 = cljs.core.__destructure_map(map__44113);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44113__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44113__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44113__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__44114 = data;
var map__44114__$1 = cljs.core.__destructure_map(map__44114);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44114__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44114__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44114__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__44115 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__44115__$1 = cljs.core.__destructure_map(map__44115);
var top_data = map__44115__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44115__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__44130 = phase;
var G__44130__$1 = (((G__44130 instanceof cljs.core.Keyword))?G__44130.fqn:null);
switch (G__44130__$1) {
case "read-source":
var map__44139 = data;
var map__44139__$1 = cljs.core.__destructure_map(map__44139);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44139__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44139__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__44143 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__44143__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44143,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__44143);
var G__44143__$2 = (cljs.core.truth_((function (){var fexpr__44157 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__44157.cljs$core$IFn$_invoke$arity$1 ? fexpr__44157.cljs$core$IFn$_invoke$arity$1(source) : fexpr__44157.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__44143__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__44143__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44143__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__44143__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__44158 = top_data;
var G__44158__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44158,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__44158);
var G__44158__$2 = (cljs.core.truth_((function (){var fexpr__44160 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__44160.cljs$core$IFn$_invoke$arity$1 ? fexpr__44160.cljs$core$IFn$_invoke$arity$1(source) : fexpr__44160.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__44158__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__44158__$1);
var G__44158__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44158__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__44158__$2);
var G__44158__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44158__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__44158__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44158__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__44158__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__44167 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44167,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44167,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44167,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44167,(3),null);
var G__44177 = top_data;
var G__44177__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44177,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__44177);
var G__44177__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44177__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__44177__$1);
var G__44177__$3 = (cljs.core.truth_((function (){var and__4221__auto__ = source__$1;
if(cljs.core.truth_(and__4221__auto__)){
return method;
} else {
return and__4221__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44177__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__44177__$2);
var G__44177__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44177__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__44177__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44177__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__44177__$4;
}

break;
case "execution":
var vec__44193 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44193,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44193,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44193,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44193,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__44095_SHARP_){
var or__4223__auto__ = (p1__44095_SHARP_ == null);
if(or__4223__auto__){
return or__4223__auto__;
} else {
var fexpr__44200 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__44200.cljs$core$IFn$_invoke$arity$1 ? fexpr__44200.cljs$core$IFn$_invoke$arity$1(p1__44095_SHARP_) : fexpr__44200.call(null,p1__44095_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4223__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return line;
}
})();
var G__44201 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__44201__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44201,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__44201);
var G__44201__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44201__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__44201__$1);
var G__44201__$3 = (cljs.core.truth_((function (){var or__4223__auto__ = fn;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
var and__4221__auto__ = source__$1;
if(cljs.core.truth_(and__4221__auto__)){
return method;
} else {
return and__4221__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44201__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4223__auto__ = fn;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__44201__$2);
var G__44201__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44201__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__44201__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44201__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__44201__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44130__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__44206){
var map__44207 = p__44206;
var map__44207__$1 = cljs.core.__destructure_map(map__44207);
var triage_data = map__44207__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44207__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44207__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44207__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44207__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44207__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44207__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44207__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44207__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4223__auto__ = source;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4223__auto__ = line;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4223__auto__ = class$;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__44210 = phase;
var G__44210__$1 = (((G__44210 instanceof cljs.core.Keyword))?G__44210.fqn:null);
switch (G__44210__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__44211 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__44212 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__44213 = loc;
var G__44214 = (cljs.core.truth_(spec)?(function (){var sb__4760__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__44216_44343 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__44217_44344 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__44218_44345 = true;
var _STAR_print_fn_STAR__temp_val__44219_44346 = (function (x__4761__auto__){
return sb__4760__auto__.append(x__4761__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__44218_44345);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__44219_44346);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__44204_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__44204_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__44217_44344);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__44216_44343);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4760__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__44211,G__44212,G__44213,G__44214) : format.call(null,G__44211,G__44212,G__44213,G__44214));

break;
case "macroexpansion":
var G__44220 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__44221 = cause_type;
var G__44222 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__44223 = loc;
var G__44224 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__44220,G__44221,G__44222,G__44223,G__44224) : format.call(null,G__44220,G__44221,G__44222,G__44223,G__44224));

break;
case "compile-syntax-check":
var G__44225 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__44226 = cause_type;
var G__44227 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__44228 = loc;
var G__44229 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__44225,G__44226,G__44227,G__44228,G__44229) : format.call(null,G__44225,G__44226,G__44227,G__44228,G__44229));

break;
case "compilation":
var G__44231 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__44232 = cause_type;
var G__44233 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__44234 = loc;
var G__44235 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__44231,G__44232,G__44233,G__44234,G__44235) : format.call(null,G__44231,G__44232,G__44233,G__44234,G__44235));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__44236 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__44237 = symbol;
var G__44238 = loc;
var G__44239 = (function (){var sb__4760__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__44240_44350 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__44241_44351 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__44242_44352 = true;
var _STAR_print_fn_STAR__temp_val__44243_44353 = (function (x__4761__auto__){
return sb__4760__auto__.append(x__4761__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__44242_44352);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__44243_44353);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__44205_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__44205_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__44241_44351);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__44240_44350);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4760__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__44236,G__44237,G__44238,G__44239) : format.call(null,G__44236,G__44237,G__44238,G__44239));
} else {
var G__44244 = "Execution error%s at %s(%s).\n%s\n";
var G__44245 = cause_type;
var G__44246 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__44247 = loc;
var G__44248 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__44244,G__44245,G__44246,G__44247,G__44248) : format.call(null,G__44244,G__44245,G__44246,G__44247,G__44248));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44210__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
