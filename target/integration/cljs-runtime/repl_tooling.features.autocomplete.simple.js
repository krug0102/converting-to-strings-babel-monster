goog.provide('repl_tooling.features.autocomplete.simple');
repl_tooling.features.autocomplete.simple.special_forms = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.list(new cljs.core.Symbol(null,"case*","case*",-1938255072,null),new cljs.core.Symbol(null,"catch","catch",-1616370245,null),new cljs.core.Symbol(null,"def","def",597100991,null),new cljs.core.Symbol(null,"defrecord*","defrecord*",-1936366207,null),new cljs.core.Symbol(null,"deftype*","deftype*",962659890,null),new cljs.core.Symbol(null,"do","do",1686842252,null),new cljs.core.Symbol(null,"finally","finally",-1065347064,null),new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.Symbol(null,"if","if",1181717262,null),new cljs.core.Symbol(null,"js*","js*",-1134233646,null),new cljs.core.Symbol(null,"let*","let*",1920721458,null),new cljs.core.Symbol(null,"letfn*","letfn*",-110097810,null),new cljs.core.Symbol(null,"loop*","loop*",615029416,null),new cljs.core.Symbol(null,"new","new",-444906321,null),new cljs.core.Symbol(null,"ns","ns",2082130287,null),new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"recur","recur",1202958259,null),new cljs.core.Symbol(null,"set!","set!",250714521,null),new cljs.core.Symbol(null,"throw","throw",595905694,null),new cljs.core.Symbol(null,"try","try",-1273693247,null)));
repl_tooling.features.autocomplete.simple.valid_prefix = /\/?([a-zA-Z0-9\-.$!?\\/><*=\?_]+)/;
repl_tooling.features.autocomplete.simple.normalize_results = (function repl_tooling$features$autocomplete$simple$normalize_results(result){
return cljs.core.vec((function (){var G__144417 = result;
var G__144417__$1 = (((G__144417 == null))?null:repl_tooling.editor_helpers.parse_result(G__144417));
var G__144417__$2 = (((G__144417__$1 == null))?null:new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(G__144417__$1));
if((G__144417__$2 == null)){
return null;
} else {
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (c){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"function","function",-2127255473),new cljs.core.Keyword(null,"candidate","candidate",-940308314),c], null);
}),G__144417__$2);
}
})());
});
repl_tooling.features.autocomplete.simple.re_char_escapes = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,(function (p1__144420_SHARP_){
return ["\\",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__144420_SHARP_)].join('');
})),cljs.core.set("\\.*+|?()[]{}$^")));
repl_tooling.features.autocomplete.simple.re_escape = (function repl_tooling$features$autocomplete$simple$re_escape(prefix){
return clojure.string.escape(cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),repl_tooling.features.autocomplete.simple.re_char_escapes);
});
repl_tooling.features.autocomplete.simple.for_clj = (function repl_tooling$features$autocomplete$simple$for_clj(repl,ns_name,txt_prefix){
var prefix = cljs.core.last(cljs.core.last(cljs.core.re_seq(repl_tooling.features.autocomplete.simple.valid_prefix,txt_prefix)));
var cmd = ["(clojure.core/let [collect #(clojure.core/map ","(clojure.core/comp str first) ","(%1 %2)) ","refers (collect clojure.core/ns-map *ns*)","from-ns (->> (clojure.core/ns-aliases *ns*) ","(clojure.core/mapcat (fn [[k v]] ","(clojure.core/map #(str k \"/\" %) ","(collect clojure.core/ns-publics v)))))] ","(clojure.core/->> refers ","(concat from-ns) ","(clojure.core/filter #(re-find #\"",repl_tooling.features.autocomplete.simple.re_escape(txt_prefix),"\" %)) ","(clojure.core/sort)","vec","))"].join('');
if(cljs.core.truth_(cljs.core.not_empty(prefix))){
return repl_tooling.eval.eval.cljs$core$IFn$_invoke$arity$3(repl,cmd,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),ns_name,new cljs.core.Keyword(null,"ignore","ignore",-1631542033),true], null)).then(repl_tooling.features.autocomplete.simple.normalize_results).catch(cljs.core.constantly(cljs.core.PersistentVector.EMPTY));
} else {
return promesa.core.promise.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
});
repl_tooling.features.autocomplete.simple.for_cljs = (function repl_tooling$features$autocomplete$simple$for_cljs(repl,ns_name,prefix){
var prefix__$1 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.last(cljs.core.last(cljs.core.re_seq(repl_tooling.features.autocomplete.simple.valid_prefix,prefix))));
var have_prefix_QMARK_ = cljs.core.re_find(/\//,prefix__$1);
var ns_part = (cljs.core.truth_(have_prefix_QMARK_)?clojure.string.replace(prefix__$1,/\/.*/,""):ns_name);
var ex_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns_part),"/a"].join('');
var cmd = ["(cljs.core/let [ns-name (cljs.core/str `",ex_name,") ","                splitted (js->clj (.split ns-name #\"[\\./]\"))\n","                ns-part (map cljs.core/munge (clojure.core/butlast splitted))","                from-ns (js->clj (.keys js/Object (apply aget (.-global js/goog) ns-part)))",(cljs.core.truth_(have_prefix_QMARK_)?[" from-ns (map #(str \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns_part),"/\" %) from-ns)"].join(''):null),"      from-core ",(cljs.core.truth_(have_prefix_QMARK_)?"nil":"(js->clj (.keys js/Object (aget js/goog \"global\" \"cljs\" \"core\")))"),"      both (concat from-ns from-core ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(repl_tooling.features.autocomplete.simple.special_forms),")]","(->> both","     (clojure.core/map cljs.core/demunge)","     (clojure.core/filter #(clojure.core/re-find #\"",repl_tooling.features.autocomplete.simple.re_escape(prefix__$1),"\" %))","     (clojure.core/sort)","     (clojure.core/take 50)","))"].join('');
if(cljs.core.truth_(cljs.core.not_empty(prefix__$1))){
return repl_tooling.eval.eval.cljs$core$IFn$_invoke$arity$3(repl,cmd,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),ns_name,new cljs.core.Keyword(null,"ignore","ignore",-1631542033),true], null)).then(repl_tooling.features.autocomplete.simple.normalize_results).catch(cljs.core.constantly(cljs.core.PersistentVector.EMPTY));
} else {
return promesa.core.promise.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
});

//# sourceMappingURL=repl_tooling.features.autocomplete.simple.js.map
