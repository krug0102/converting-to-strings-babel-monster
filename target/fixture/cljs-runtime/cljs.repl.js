goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__145190){
var map__145191 = p__145190;
var map__145191__$1 = cljs.core.__destructure_map(map__145191);
var m = map__145191__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__145191__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__145191__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__145192_145403 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__145193_145404 = null;
var count__145194_145405 = (0);
var i__145195_145406 = (0);
while(true){
if((i__145195_145406 < count__145194_145405)){
var f_145407 = chunk__145193_145404.cljs$core$IIndexed$_nth$arity$2(null,i__145195_145406);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_145407], 0));


var G__145408 = seq__145192_145403;
var G__145409 = chunk__145193_145404;
var G__145410 = count__145194_145405;
var G__145411 = (i__145195_145406 + (1));
seq__145192_145403 = G__145408;
chunk__145193_145404 = G__145409;
count__145194_145405 = G__145410;
i__145195_145406 = G__145411;
continue;
} else {
var temp__5753__auto___145412 = cljs.core.seq(seq__145192_145403);
if(temp__5753__auto___145412){
var seq__145192_145413__$1 = temp__5753__auto___145412;
if(cljs.core.chunked_seq_QMARK_(seq__145192_145413__$1)){
var c__4649__auto___145414 = cljs.core.chunk_first(seq__145192_145413__$1);
var G__145415 = cljs.core.chunk_rest(seq__145192_145413__$1);
var G__145416 = c__4649__auto___145414;
var G__145417 = cljs.core.count(c__4649__auto___145414);
var G__145418 = (0);
seq__145192_145403 = G__145415;
chunk__145193_145404 = G__145416;
count__145194_145405 = G__145417;
i__145195_145406 = G__145418;
continue;
} else {
var f_145419 = cljs.core.first(seq__145192_145413__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_145419], 0));


var G__145420 = cljs.core.next(seq__145192_145413__$1);
var G__145421 = null;
var G__145422 = (0);
var G__145423 = (0);
seq__145192_145403 = G__145420;
chunk__145193_145404 = G__145421;
count__145194_145405 = G__145422;
i__145195_145406 = G__145423;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_145424 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4223__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_145424], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_145424)))?cljs.core.second(arglists_145424):arglists_145424)], 0));
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
var seq__145201_145429 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__145202_145430 = null;
var count__145203_145431 = (0);
var i__145204_145432 = (0);
while(true){
if((i__145204_145432 < count__145203_145431)){
var vec__145215_145433 = chunk__145202_145430.cljs$core$IIndexed$_nth$arity$2(null,i__145204_145432);
var name_145434 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__145215_145433,(0),null);
var map__145218_145435 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__145215_145433,(1),null);
var map__145218_145436__$1 = cljs.core.__destructure_map(map__145218_145435);
var doc_145437 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__145218_145436__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_145438 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__145218_145436__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_145434], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_145438], 0));

if(cljs.core.truth_(doc_145437)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_145437], 0));
} else {
}


var G__145440 = seq__145201_145429;
var G__145441 = chunk__145202_145430;
var G__145442 = count__145203_145431;
var G__145443 = (i__145204_145432 + (1));
seq__145201_145429 = G__145440;
chunk__145202_145430 = G__145441;
count__145203_145431 = G__145442;
i__145204_145432 = G__145443;
continue;
} else {
var temp__5753__auto___145444 = cljs.core.seq(seq__145201_145429);
if(temp__5753__auto___145444){
var seq__145201_145445__$1 = temp__5753__auto___145444;
if(cljs.core.chunked_seq_QMARK_(seq__145201_145445__$1)){
var c__4649__auto___145446 = cljs.core.chunk_first(seq__145201_145445__$1);
var G__145447 = cljs.core.chunk_rest(seq__145201_145445__$1);
var G__145448 = c__4649__auto___145446;
var G__145449 = cljs.core.count(c__4649__auto___145446);
var G__145450 = (0);
seq__145201_145429 = G__145447;
chunk__145202_145430 = G__145448;
count__145203_145431 = G__145449;
i__145204_145432 = G__145450;
continue;
} else {
var vec__145219_145451 = cljs.core.first(seq__145201_145445__$1);
var name_145452 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__145219_145451,(0),null);
var map__145222_145453 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__145219_145451,(1),null);
var map__145222_145454__$1 = cljs.core.__destructure_map(map__145222_145453);
var doc_145455 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__145222_145454__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_145456 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__145222_145454__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_145452], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_145456], 0));

if(cljs.core.truth_(doc_145455)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_145455], 0));
} else {
}


var G__145457 = cljs.core.next(seq__145201_145445__$1);
var G__145458 = null;
var G__145459 = (0);
var G__145460 = (0);
seq__145201_145429 = G__145457;
chunk__145202_145430 = G__145458;
count__145203_145431 = G__145459;
i__145204_145432 = G__145460;
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

var seq__145225 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__145226 = null;
var count__145227 = (0);
var i__145228 = (0);
while(true){
if((i__145228 < count__145227)){
var role = chunk__145226.cljs$core$IIndexed$_nth$arity$2(null,i__145228);
var temp__5753__auto___145461__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___145461__$1)){
var spec_145462 = temp__5753__auto___145461__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_145462)], 0));
} else {
}


var G__145463 = seq__145225;
var G__145464 = chunk__145226;
var G__145465 = count__145227;
var G__145466 = (i__145228 + (1));
seq__145225 = G__145463;
chunk__145226 = G__145464;
count__145227 = G__145465;
i__145228 = G__145466;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq(seq__145225);
if(temp__5753__auto____$1){
var seq__145225__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__145225__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__145225__$1);
var G__145467 = cljs.core.chunk_rest(seq__145225__$1);
var G__145468 = c__4649__auto__;
var G__145469 = cljs.core.count(c__4649__auto__);
var G__145470 = (0);
seq__145225 = G__145467;
chunk__145226 = G__145468;
count__145227 = G__145469;
i__145228 = G__145470;
continue;
} else {
var role = cljs.core.first(seq__145225__$1);
var temp__5753__auto___145471__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___145471__$2)){
var spec_145472 = temp__5753__auto___145471__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_145472)], 0));
} else {
}


var G__145473 = cljs.core.next(seq__145225__$1);
var G__145474 = null;
var G__145475 = (0);
var G__145476 = (0);
seq__145225 = G__145473;
chunk__145226 = G__145474;
count__145227 = G__145475;
i__145228 = G__145476;
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
var G__145479 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__145480 = cljs.core.ex_cause(t);
via = G__145479;
t = G__145480;
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
var map__145280 = datafied_throwable;
var map__145280__$1 = cljs.core.__destructure_map(map__145280);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__145280__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__145280__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__145280__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__145282 = cljs.core.last(via);
var map__145282__$1 = cljs.core.__destructure_map(map__145282);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__145282__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__145282__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__145282__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__145283 = data;
var map__145283__$1 = cljs.core.__destructure_map(map__145283);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__145283__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__145283__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__145283__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__145284 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__145284__$1 = cljs.core.__destructure_map(map__145284);
var top_data = map__145284__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__145284__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__145300 = phase;
var G__145300__$1 = (((G__145300 instanceof cljs.core.Keyword))?G__145300.fqn:null);
switch (G__145300__$1) {
case "read-source":
var map__145308 = data;
var map__145308__$1 = cljs.core.__destructure_map(map__145308);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__145308__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__145308__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__145309 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__145309__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__145309,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__145309);
var G__145309__$2 = (cljs.core.truth_((function (){var fexpr__145314 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__145314.cljs$core$IFn$_invoke$arity$1 ? fexpr__145314.cljs$core$IFn$_invoke$arity$1(source) : fexpr__145314.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__145309__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__145309__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__145309__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__145309__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__145325 = top_data;
var G__145325__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__145325,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__145325);
var G__145325__$2 = (cljs.core.truth_((function (){var fexpr__145326 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__145326.cljs$core$IFn$_invoke$arity$1 ? fexpr__145326.cljs$core$IFn$_invoke$arity$1(source) : fexpr__145326.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__145325__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__145325__$1);
var G__145325__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__145325__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__145325__$2);
var G__145325__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__145325__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__145325__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__145325__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__145325__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__145335 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__145335,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__145335,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__145335,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__145335,(3),null);
var G__145342 = top_data;
var G__145342__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__145342,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__145342);
var G__145342__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__145342__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__145342__$1);
var G__145342__$3 = (cljs.core.truth_((function (){var and__4221__auto__ = source__$1;
if(cljs.core.truth_(and__4221__auto__)){
return method;
} else {
return and__4221__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__145342__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__145342__$2);
var G__145342__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__145342__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__145342__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__145342__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__145342__$4;
}

break;
case "execution":
var vec__145343 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__145343,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__145343,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__145343,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__145343,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__145268_SHARP_){
var or__4223__auto__ = (p1__145268_SHARP_ == null);
if(or__4223__auto__){
return or__4223__auto__;
} else {
var fexpr__145347 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__145347.cljs$core$IFn$_invoke$arity$1 ? fexpr__145347.cljs$core$IFn$_invoke$arity$1(p1__145268_SHARP_) : fexpr__145347.call(null,p1__145268_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4223__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return line;
}
})();
var G__145349 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__145349__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__145349,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__145349);
var G__145349__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__145349__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__145349__$1);
var G__145349__$3 = (cljs.core.truth_((function (){var or__4223__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__145349__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4223__auto__ = fn;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__145349__$2);
var G__145349__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__145349__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__145349__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__145349__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__145349__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__145300__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__145353){
var map__145354 = p__145353;
var map__145354__$1 = cljs.core.__destructure_map(map__145354);
var triage_data = map__145354__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__145354__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__145354__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__145354__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__145354__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__145354__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__145354__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__145354__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__145354__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__145357 = phase;
var G__145357__$1 = (((G__145357 instanceof cljs.core.Keyword))?G__145357.fqn:null);
switch (G__145357__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__145358 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__145359 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__145360 = loc;
var G__145361 = (cljs.core.truth_(spec)?(function (){var sb__4760__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__145362_145492 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__145363_145493 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__145364_145494 = true;
var _STAR_print_fn_STAR__temp_val__145365_145495 = (function (x__4761__auto__){
return sb__4760__auto__.append(x__4761__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__145364_145494);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__145365_145495);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__145351_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__145351_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__145363_145493);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__145362_145492);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4760__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__145358,G__145359,G__145360,G__145361) : format.call(null,G__145358,G__145359,G__145360,G__145361));

break;
case "macroexpansion":
var G__145367 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__145368 = cause_type;
var G__145369 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__145370 = loc;
var G__145371 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__145367,G__145368,G__145369,G__145370,G__145371) : format.call(null,G__145367,G__145368,G__145369,G__145370,G__145371));

break;
case "compile-syntax-check":
var G__145372 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__145373 = cause_type;
var G__145374 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__145375 = loc;
var G__145376 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__145372,G__145373,G__145374,G__145375,G__145376) : format.call(null,G__145372,G__145373,G__145374,G__145375,G__145376));

break;
case "compilation":
var G__145377 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__145378 = cause_type;
var G__145379 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__145380 = loc;
var G__145381 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__145377,G__145378,G__145379,G__145380,G__145381) : format.call(null,G__145377,G__145378,G__145379,G__145380,G__145381));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__145382 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__145383 = symbol;
var G__145384 = loc;
var G__145385 = (function (){var sb__4760__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__145386_145497 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__145387_145498 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__145388_145499 = true;
var _STAR_print_fn_STAR__temp_val__145389_145500 = (function (x__4761__auto__){
return sb__4760__auto__.append(x__4761__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__145388_145499);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__145389_145500);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__145352_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__145352_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__145387_145498);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__145386_145497);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4760__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__145382,G__145383,G__145384,G__145385) : format.call(null,G__145382,G__145383,G__145384,G__145385));
} else {
var G__145390 = "Execution error%s at %s(%s).\n%s\n";
var G__145391 = cause_type;
var G__145392 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__145393 = loc;
var G__145394 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__145390,G__145391,G__145392,G__145393,G__145394) : format.call(null,G__145390,G__145391,G__145392,G__145393,G__145394));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__145357__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
