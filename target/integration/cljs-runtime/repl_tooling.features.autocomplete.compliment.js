goog.provide('repl_tooling.features.autocomplete.compliment');
repl_tooling.features.autocomplete.compliment.re_escape = (function repl_tooling$features$autocomplete$compliment$re_escape(str){
return clojure.string.replace(str,/[.*+?^${}()|\[\]\\]/,"\\$&");
});
repl_tooling.features.autocomplete.compliment.make_context = (function repl_tooling$features$autocomplete$compliment$make_context(text,prefix,row,col){
var lines = clojure.string.split_lines(text);
var pattern = cljs.core.re_pattern(["(.{",cljs.core.str.cljs$core$IFn$_invoke$arity$1((col - cljs.core.count(prefix))),"})",repl_tooling.features.autocomplete.compliment.re_escape(prefix)].join(''));
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.update.cljs$core$IFn$_invoke$arity$5(lines,row,clojure.string.replace_first,pattern,"$1__prefix__"));
});
repl_tooling.features.autocomplete.compliment.for_clojure = (function repl_tooling$features$autocomplete$compliment$for_clojure(var_args){
var G__65141 = arguments.length;
switch (G__65141) {
case 6:
return repl_tooling.features.autocomplete.compliment.for_clojure.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
case 7:
return repl_tooling.features.autocomplete.compliment.for_clojure.cljs$core$IFn$_invoke$arity$7((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(repl_tooling.features.autocomplete.compliment.for_clojure.cljs$core$IFn$_invoke$arity$6 = (function (repl,ns_name,text,prefix,row,col){
return repl_tooling.features.autocomplete.compliment.for_clojure.cljs$core$IFn$_invoke$arity$7(repl,ns_name,text,prefix,row,col,null);
}));

(repl_tooling.features.autocomplete.compliment.for_clojure.cljs$core$IFn$_invoke$arity$7 = (function (repl,ns_name,text,prefix,row,col,sources){
var ns = (cljs.core.truth_(ns_name)?cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(ns_name):null);
var context = repl_tooling.features.autocomplete.compliment.make_context(text,prefix,row,col);
var code = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("clojure.core","require","clojure.core/require",1941966779,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"compliment.core","compliment.core",371888358,null),null,(1),null)))))),null,(1),null))))),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("clojure.core","let","clojure.core/let",-407137853,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"completions__65138__auto__","completions__65138__auto__",1935536192,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("compliment.core","completions","compliment.core/completions",338253929,null),null,(1),null)),(new cljs.core.List(null,prefix,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"tag-candidates","tag-candidates",-1036143523),null,(1),null)),(new cljs.core.List(null,true,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"ns","ns",441598760),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,ns,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"sources","sources",-321166424),null,(1),null)),(new cljs.core.List(null,sources,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"context","context",-830191113),null,(1),null)),(new cljs.core.List(null,context,null,(1),null))], 0))))),null,(1),null))], 0)))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("clojure.core","vec","clojure.core/vec",146271141,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"completions__65138__auto__","completions__65138__auto__",1935536192,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))));
return repl_tooling.eval.eval.cljs$core$IFn$_invoke$arity$2(repl,code).then((function (p1__65139_SHARP_){
return new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(p1__65139_SHARP_);
})).catch(cljs.core.constantly(cljs.core.PersistentVector.EMPTY));
}));

(repl_tooling.features.autocomplete.compliment.for_clojure.cljs$lang$maxFixedArity = 7);

repl_tooling.features.autocomplete.compliment.for_cljs = (function repl_tooling$features$autocomplete$compliment$for_cljs(repl,cmd_for_cljs_env,ns_name,text,prefix,row,col){
return promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind((cljs.core.truth_(ns_name)?cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(ns_name):null),(function (ns){
return promesa.protocols._bind(repl_tooling.features.autocomplete.compliment.make_context(text,prefix,row,col),(function (context){
return promesa.protocols._bind(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("clojure.core","require","clojure.core/require",1941966779,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"compliment.sources.cljs","compliment.sources.cljs",-1185125957,null),null,(1),null))))),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("clojure.core","binding","clojure.core/binding",2144622993,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("compliment.sources.cljs","*compiler-env*","compliment.sources.cljs/*compiler-env*",1750497627,null),null,(1),null)),(new cljs.core.List(null,cmd_for_cljs_env,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("compliment.sources.cljs","candidates","compliment.sources.cljs/candidates",-1673949029,null),null,(1),null)),(new cljs.core.List(null,prefix,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,ns,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,context,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),(function (code){
return promesa.protocols._bind(repl_tooling.eval.eval.cljs$core$IFn$_invoke$arity$2(repl,code).catch(cljs.core.constantly(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",1415092211),cljs.core.PersistentVector.EMPTY], null))),(function (p__65148){
var map__65149 = p__65148;
var map__65149__$1 = cljs.core.__destructure_map(map__65149);
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65149__$1,new cljs.core.Keyword(null,"result","result",1415092211));
return promesa.protocols._bind(repl_tooling.features.autocomplete.compliment.for_clojure.cljs$core$IFn$_invoke$arity$7(repl,ns_name,text,prefix,row,col,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("compliment.sources.local-bindings","local-bindings","compliment.sources.local-bindings/local-bindings",373587861),new cljs.core.Keyword("compliment.sources.keywords","keywords","compliment.sources.keywords/keywords",-1116492430)], null)),(function (clj_result){
return promesa.protocols._bind(null,(function (___31810__auto__){
return promesa.protocols._promise(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"candidate","candidate",-940308314),cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(clj_result,result))));
}));
}));
}));
}));
}));
}));
}));
});

//# sourceMappingURL=repl_tooling.features.autocomplete.compliment.js.map
