goog.provide('repl_tooling.integration.fixture_app');
repl_tooling.integration.fixture_app.private_var = (20);
repl_tooling.integration.fixture_app.local_var = (10);
repl_tooling.integration.fixture_app.private_fn = (function repl_tooling$integration$fixture_app$private_fn(a,b){
return ((a + b) + (11));
});
repl_tooling.integration.fixture_app.local_fn = (function repl_tooling$integration$fixture_app$local_fn(a,b){
return ((a + b) + (10));
});
/**
 * Replaces the first occurrence or Bar with nothing
 */
repl_tooling.integration.fixture_app.some_replace = (function repl_tooling$integration$fixture_app$some_replace(s){
return clojure.string.replace_first(s,"Bar","");
});
repl_tooling.integration.fixture_app.main = (function repl_tooling$integration$fixture_app$main(var_args){
var args__4835__auto__ = [];
var len__4829__auto___52096 = arguments.length;
var i__4830__auto___52097 = (0);
while(true){
if((i__4830__auto___52097 < len__4829__auto___52096)){
args__4835__auto__.push((arguments[i__4830__auto___52097]));

var G__52098 = (i__4830__auto___52097 + (1));
i__4830__auto___52097 = G__52098;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return repl_tooling.integration.fixture_app.main.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(repl_tooling.integration.fixture_app.main.cljs$core$IFn$_invoke$arity$variadic = (function (args){

if((cljs.core.count(args) === (0))){
return cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"CONNECTED","CONNECTED",-311957149)], 0));
} else {
return repl_tooling.target_eval_test.run(cljs.core.first(args));
}
}));

(repl_tooling.integration.fixture_app.main.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(repl_tooling.integration.fixture_app.main.cljs$lang$applyTo = (function (seq52095){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52095));
}));


//# sourceMappingURL=repl_tooling.integration.fixture_app.js.map
