goog.provide('duck_repled.repl_protocol');

/**
 * @interface
 */
duck_repled.repl_protocol.Evaluator = function(){};

var duck_repled$repl_protocol$Evaluator$_evaluate$dyn_159588 = (function (repl,command,options){
var x__4521__auto__ = (((repl == null))?null:repl);
var m__4522__auto__ = (duck_repled.repl_protocol._evaluate[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$3(repl,command,options) : m__4522__auto__.call(null,repl,command,options));
} else {
var m__4519__auto__ = (duck_repled.repl_protocol._evaluate["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$3(repl,command,options) : m__4519__auto__.call(null,repl,command,options));
} else {
throw cljs.core.missing_protocol("Evaluator.-evaluate",repl);
}
}
});
/**
 * Evaluates a command (defined by `command` - a string) into the
 * REPL. Command can be multiple forms, and have comments, etc; it can
 * also be invalid Clojure code.
 * 
 * `options` is a map of `:namespace`, `:file`, `:row`, and `:col` (0-based).
 * Other keys are allowed, and are REPL-specific - for example, for Shadow-CLJS
 * you can use "shadow remote API" commands, etc.
 * 
 * Needs to return either a {:result <value>}, value being a valid EDN, or
 * {:error <error>}, also value being a valid EDN. Probably on Clojure, <error>
 * will always be an exception, and in JS, can be anything. You can also return
 * Promises / Futures, as long as they are Promesa-Compatible. For more information,
 * see Promesa's documentation (specifically, promesa.protocols)
 */
duck_repled.repl_protocol._evaluate = (function duck_repled$repl_protocol$_evaluate(repl,command,options){
if((((!((repl == null)))) && ((!((repl.duck_repled$repl_protocol$Evaluator$_evaluate$arity$3 == null)))))){
return repl.duck_repled$repl_protocol$Evaluator$_evaluate$arity$3(repl,command,options);
} else {
return duck_repled$repl_protocol$Evaluator$_evaluate$dyn_159588(repl,command,options);
}
});

/**
 * Evaluates a command. `repl` is an instance of Evaluator, command is a
 * string with clojure command(s) to eval, and `options` is a map containing:
 * 
 * :namespace - a string that points to the namespace the command will run
 * :file - the current filename (some REPLs do not support this yet)
 * :row  - the current 0-based line (some REPLs do not support this yet)
 * :col  - the current 0-based column (some REPLs do not support this yet)
 * :pass - a map with parameters that will be included on the result, without any change
 * Other keys are allowed, and are REPL-specific - for example, for Shadow-CLJS can
 * use additional keys to change JS targets, for example
 * 
 * Returns {:succes <edn>} or {:error <edn>}, merged with keys passed to `:pass` parameter
 */
duck_repled.repl_protocol.eval = (function duck_repled$repl_protocol$eval(var_args){
var G__159585 = arguments.length;
switch (G__159585) {
case 2:
return duck_repled.repl_protocol.eval.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return duck_repled.repl_protocol.eval.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(duck_repled.repl_protocol.eval.cljs$core$IFn$_invoke$arity$2 = (function (repl,command){
return duck_repled.repl_protocol.eval.cljs$core$IFn$_invoke$arity$3(repl,command,cljs.core.PersistentArrayMap.EMPTY);
}));

(duck_repled.repl_protocol.eval.cljs$core$IFn$_invoke$arity$3 = (function (repl,command,options){
var result = duck_repled.repl_protocol._evaluate(repl,command,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(options,new cljs.core.Keyword(null,"pass","pass",1574159993)));
var pass = new cljs.core.Keyword(null,"pass","pass",1574159993).cljs$core$IFn$_invoke$arity$2(options,cljs.core.PersistentArrayMap.EMPTY);
if(promesa.core.promise_QMARK_(result)){
return promesa.core.then.cljs$core$IFn$_invoke$arity$2(result,(function (p1__159583_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pass,p1__159583_SHARP_], 0));
}));
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pass,result], 0));
}
}));

(duck_repled.repl_protocol.eval.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=duck_repled.repl_protocol.js.map
