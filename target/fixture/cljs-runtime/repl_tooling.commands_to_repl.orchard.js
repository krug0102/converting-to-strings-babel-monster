goog.provide('repl_tooling.commands_to_repl.orchard');
repl_tooling.commands_to_repl.orchard.have_ns_QMARK_ = (function repl_tooling$commands_to_repl$orchard$have_ns_QMARK_(repl,namespace){
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.then.cljs$core$IFn$_invoke$arity$2(repl_tooling.eval.eval.cljs$core$IFn$_invoke$arity$2(repl,repl_tooling.repl_client.source.have_ns_command(namespace)),new cljs.core.Keyword(null,"result","result",1415092211)),cljs.core.constantly(false));
});
repl_tooling.commands_to_repl.orchard.info_msg = "(clojure.core/fn info [ns-name var-name params] (clojure.core/let [s (orchard.info/info (symbol ns-name) (symbol var-name) (eval params))] (clojure.core/tagged-literal (quote repl-tooling/interactive) {:html (quote (cond (:ns ?state) [:div.rows [:div.title (cond->> (str (:name ?state)) (:ns ?state) (str (:ns ?state) \"/\"))] [:div.indent (str (:arglists ?state))] [:div.space] [:div.pre (str (:doc ?state))] [:div.space] [:div.rows [:div [:i \"See also:\"]] [:<> (map (fn [e i] [:div {:key i} [:a {:href \"#\", :on-click (?info e)} (pr-str e)]]) (:see-also ?state) (range))]]] (:candidates ?state) [:div.rows [:select {:on-change ?change-class} (->> ?state :candidates (sort-by first) (map (fn [[class cand]] [:option {:key class, :value (str class)} (str class)])))] (let [sel (or (:sel ?state) (-> ?state :candidates keys sort first)) sel (get-in ?state [:candidates sel])] [:<> [:div (pr-str (:sel ?state))] [:div.title (str (str/join (:modifiers sel) \" \") \" \" (:class sel) \"#\" (:member sel))] [:div.indent (str (:arglists sel))] [:div.space] [:div.pre (str (:doc sel))] [:div.pre (str \"=> \" (:returns sel))] [:div.space]])] :else [:div.title \"Nothing found for this var\"])), :state s, :fns {:info (clojure.core/list (quote clojure.core/fn) (quote [_ s var-name]) (clojure.core/list (quote orchard.info/info) (quote (clojure.core/symbol (clojure.core/namespace var-name))) (quote (clojure.core/symbol (clojure.core/name var-name))) params)), :change-class (quote (clojure.core/fn [e s] (clojure.core/assoc s :sel (clojure.core/symbol (:value e)))))}})))";
repl_tooling.commands_to_repl.orchard.info_BANG_ = (function repl_tooling$commands_to_repl$orchard$info_BANG_(repl,editor_state){
return promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(new cljs.core.Keyword("editor","callbacks","editor/callbacks",1179124831).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(editor_state)),(function (p__139332){
var map__139333 = p__139332;
var map__139333__$1 = cljs.core.__destructure_map(map__139333);
var on_start_eval = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__139333__$1,new cljs.core.Keyword(null,"on-start-eval","on-start-eval",-560475418));
var on_eval = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__139333__$1,new cljs.core.Keyword(null,"on-eval","on-eval",-1349336659));
var editor_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__139333__$1,new cljs.core.Keyword(null,"editor-data","editor-data",-2084300305));
var get_config = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__139333__$1,new cljs.core.Keyword(null,"get-config","get-config",1800808901));
return promesa.protocols._bind((editor_data.cljs$core$IFn$_invoke$arity$0 ? editor_data.cljs$core$IFn$_invoke$arity$0() : editor_data.call(null)),(function (p__139334){
var map__139335 = p__139334;
var map__139335__$1 = cljs.core.__destructure_map(map__139335);
var ed = map__139335__$1;
var contents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__139335__$1,new cljs.core.Keyword(null,"contents","contents",-1567174023));
var range = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__139335__$1,new cljs.core.Keyword(null,"range","range",1639692286));
var filename = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__139335__$1,new cljs.core.Keyword(null,"filename","filename",-1428840783));
return promesa.protocols._bind(cljs.core.first(range),(function (start){
return promesa.protocols._bind(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("info"),(function (id){
return promesa.protocols._bind((repl_tooling.editor_helpers.current_var.cljs$core$IFn$_invoke$arity$2 ? repl_tooling.editor_helpers.current_var.cljs$core$IFn$_invoke$arity$2(contents,start) : repl_tooling.editor_helpers.current_var.call(null,contents,start)),(function (p__139336){
var vec__139337 = p__139336;
var range__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__139337,(0),null);
var var$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__139337,(1),null);
return promesa.protocols._bind(repl_tooling.editor_integration.commands.run_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic(editor_state,new cljs.core.Keyword(null,"eval","eval",-1103567905),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"text","text",-1790561697),["`",cljs.core.str.cljs$core$IFn$_invoke$arity$1(var$)].join(''),new cljs.core.Keyword(null,"ignore","ignore",-1631542033),true,new cljs.core.Keyword(null,"auto-detect","auto-detect",-1255603603),true,new cljs.core.Keyword(null,"aux","aux",-10408640),true], null)], 0)),(function (full_var_name){
return promesa.protocols._bind(clojure.string.split.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(full_var_name)),/\//,(2)),(function (splitted){
return promesa.protocols._bind((function (){var G__139341 = splitted;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(splitted))){
return cljs.core.cons("user",G__139341);
} else {
return G__139341;
}
})(),(function (p__139345){
var vec__139346 = p__139345;
var ns_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__139346,(0),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__139346,(1),null);
return promesa.protocols._bind(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"editor-data","editor-data",-2084300305),ed,new cljs.core.Keyword(null,"range","range",1639692286),range__$1], null),(function (params){
return promesa.protocols._bind(repl_tooling.editor_integration.evaluation.need_cljs_QMARK_((get_config.cljs$core$IFn$_invoke$arity$0 ? get_config.cljs$core$IFn$_invoke$arity$0() : get_config.call(null)),filename),(function (cljs_QMARK_){
return promesa.protocols._bind(["(",repl_tooling.commands_to_repl.orchard.info_msg," ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ns_name], 0))," ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))," '",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dialect","dialect",-1374251073),(cljs.core.truth_(cljs_QMARK_)?new cljs.core.Keyword(null,"cljs","cljs",1492417629):new cljs.core.Keyword(null,"clj","clj",-660495428)),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("cljs","repl-env","cljs/repl-env",-1983757034).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("repl","info","repl/info",-345199547).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(editor_state)))], null)], 0)),")"].join(''),(function (cmd){
return promesa.protocols._bind(start,(function (p__139350){
var vec__139351 = p__139350;
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__139351,(0),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__139351,(1),null);
return promesa.protocols._bind(null,(function (___31810__auto__){
return promesa.protocols._bind((on_start_eval.cljs$core$IFn$_invoke$arity$1 ? on_start_eval.cljs$core$IFn$_invoke$arity$1(params) : on_start_eval.call(null,params)),(function (___31809__auto__){
return promesa.protocols._promise(repl_tooling.eval.evaluate(repl,cmd,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ignore","ignore",-1631542033),true,new cljs.core.Keyword(null,"row","row",-570139521),row,new cljs.core.Keyword(null,"col","col",-1959363084),col], null),(function (p1__139331_SHARP_){
var G__139354 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(params,new cljs.core.Keyword(null,"result","result",1415092211),p1__139331_SHARP_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"repl","repl",-35398667),repl], 0));
return (on_eval.cljs$core$IFn$_invoke$arity$1 ? on_eval.cljs$core$IFn$_invoke$arity$1(G__139354) : on_eval.call(null,G__139354));
})));
}));
}));
}));
}));
}));
}));
}));
}));
}));
}));
}));
}));
}));
}));
}));
});
repl_tooling.commands_to_repl.orchard.xref_msg = "(clojure.core/fn find-usages [symbol-name] (let [sym (clojure.core/symbol symbol-name) refs (orchard.xref/fn-refs sym) grouped (clojure.core/group-by (fn* [p1__139465#] (-> p1__139465# meta :ns str)) refs)] {:html (clojure.core/vec (clojure.core/sequence (clojure.core/seq (clojure.core/concat (clojure.core/list :div.rows) (clojure.core/list (clojure.core/vec (clojure.core/sequence (clojure.core/seq (clojure.core/concat (clojure.core/list :div.title) (clojure.core/list \"Occurrences of \") (clojure.core/list symbol-name) (clojure.core/list \":\")))))) (clojure.core/list (clojure.core/vec (clojure.core/sequence (clojure.core/seq (clojure.core/concat (clojure.core/list :div.space)))))) (for [ns-name (sort (keys grouped))] (clojure.core/vec (clojure.core/sequence (clojure.core/seq (clojure.core/concat (clojure.core/list :div.rows) (clojure.core/list (clojure.core/vec (clojure.core/sequence (clojure.core/seq (clojure.core/concat (clojure.core/list :div.title) (clojure.core/list \"In namespace: \") (clojure.core/list ns-name)))))) (for [variable (clojure.core/get grouped ns-name) :let [v (clojure.core/str (clojure.core/symbol variable))]] [:div [:a {:href \"#\", :on-click (clojure.core/list (quote fn) (quote [_]) (clojure.core/list (quote editor/run-feature) :go-to-var-definition {:namespace \"user\", :var-name v}))} v]]) (clojure.core/list (clojure.core/vec (clojure.core/sequence (clojure.core/seq (clojure.core/concat (clojure.core/list :div.space)))))))))))))))}))";
repl_tooling.commands_to_repl.orchard.xref_BANG_ = (function repl_tooling$commands_to_repl$orchard$xref_BANG_(editor_state){
return promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(repl_tooling.editor_integration.commands.run_feature_BANG_(editor_state,new cljs.core.Keyword(null,"get-full-var-name","get-full-var-name",167996546)),(function (fqn){
return promesa.protocols._bind(["(",repl_tooling.commands_to_repl.orchard.xref_msg," ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(fqn))], 0)),")"].join(''),(function (cmd){
return promesa.protocols._bind(null,(function (___31810__auto__){
return promesa.protocols._promise(repl_tooling.editor_integration.commands.run_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic(editor_state,new cljs.core.Keyword(null,"eval-and-render","eval-and-render",-58898623),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cmd,new cljs.core.Keyword(null,"range","range",1639692286).cljs$core$IFn$_invoke$arity$1(fqn),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"aux","aux",-10408640),true,new cljs.core.Keyword(null,"interactive","interactive",-2024078362),true], null)], 0)));
}));
}));
}));
}));
});
repl_tooling.commands_to_repl.orchard.doc_msg = "(clojure.core/fn clojure-docs [ns-name var-name] (clojure.core/let [doc (orchard.clojuredocs/find-doc ns-name var-name)] {:html (quote (let [{:keys [doc nodes examples see-alsos ns name arglists]} ?state] (if doc [:div.rows [:div.title (:fqn ?state)] [:<> (map (fn [a] [:div {:key a} \"(\" (:fqn ?state) \" \" a \")\"]) arglists)] [:div.space] [:div.pre doc] [:div.space] [:div.title (count examples) \" example(s)\"] [:<> (map (fn [ex i] (if ((:pages ?state) i) [:div.rows {:key i} [:div.cols [:a.chevron.opened {:href \"#\", :on-click (?close i)}] [:div.space] [:a.icon.clipboard {:on-click (fn [_] (editor/run-callback :on-copy ex))}] [:div.pre ex]] [:div.space]] [:div.rows {:key i} [:div.cols [:a.chevron.closed {:href \"#\", :on-click (?open i)}] [:div.space] (->> ex (take 10) (apply str)) \"...\"] [:div.space]])) examples (range))]] [:div.error \"No ClojureDoc for the variable \" ns-name (:fqn ?state)]))), :state (clojure.core/assoc doc :pages #{0} :fqn (str ns-name \"/\" var-name)), :fns (quote {:open (fn [_ s idx] (clojure.core/update s :pages clojure.core/conj idx)), :close (fn [_ s idx] (clojure.core/update s :pages clojure.core/disj idx))})}))";
repl_tooling.commands_to_repl.orchard.cljdoc_BANG_ = (function repl_tooling$commands_to_repl$orchard$cljdoc_BANG_(editor_state){
return promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(repl_tooling.editor_integration.commands.run_feature_BANG_(editor_state,new cljs.core.Keyword(null,"get-full-var-name","get-full-var-name",167996546)),(function (fqn){
return promesa.protocols._bind(clojure.string.split.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(fqn)),/\//,(2)),(function (s){
return promesa.protocols._bind((function (){var G__139681 = s;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(s),(1))){
return cljs.core.cons("",G__139681);
} else {
return G__139681;
}
})(),(function (p__139687){
var vec__139689 = p__139687;
var ns_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__139689,(0),null);
var var_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__139689,(1),null);
return promesa.protocols._bind(["(",repl_tooling.commands_to_repl.orchard.doc_msg," ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ns_name], 0))," ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([var_name], 0)),")"].join(''),(function (cmd){
return promesa.protocols._bind(null,(function (___31810__auto__){
return promesa.protocols._promise(repl_tooling.editor_integration.commands.run_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic(editor_state,new cljs.core.Keyword(null,"eval-and-render","eval-and-render",-58898623),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cmd,new cljs.core.Keyword(null,"range","range",1639692286).cljs$core$IFn$_invoke$arity$1(fqn),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"aux","aux",-10408640),new cljs.core.Keyword(null,"always","always",-1772028770),new cljs.core.Keyword(null,"interactive","interactive",-2024078362),true], null)], 0)));
}));
}));
}));
}));
}));
}));
});
repl_tooling.commands_to_repl.orchard.cmds = (function repl_tooling$commands_to_repl$orchard$cmds(editor_state){
return promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(new cljs.core.Keyword("clj","aux","clj/aux",-10310625).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(editor_state)),(function (aux_repl){
return promesa.protocols._bind(repl_tooling.commands_to_repl.orchard.have_ns_QMARK_(aux_repl,"orchard.info"),(function (have_info_QMARK_){
return promesa.protocols._bind(repl_tooling.commands_to_repl.orchard.have_ns_QMARK_(aux_repl,"orchard.xref"),(function (have_xref_QMARK_){
return promesa.protocols._bind(repl_tooling.commands_to_repl.orchard.have_ns_QMARK_(aux_repl,"orchard.clojuredocs"),(function (have_docs_QMARK_){
return promesa.protocols._bind(null,(function (___31810__auto__){
return promesa.protocols._promise((function (){var G__139707 = cljs.core.PersistentArrayMap.EMPTY;
var G__139707__$1 = (cljs.core.truth_(have_info_QMARK_)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__139707,new cljs.core.Keyword(null,"info-for-var","info-for-var",397656868),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Info for var",new cljs.core.Keyword(null,"description","description",-1428560544),"Gets information for the current var, under cursor",new cljs.core.Keyword(null,"command","command",-894540724),(function (){
return repl_tooling.commands_to_repl.orchard.info_BANG_(aux_repl,editor_state);
})], null)):G__139707);
var G__139707__$2 = (cljs.core.truth_(have_xref_QMARK_)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__139707__$1,new cljs.core.Keyword(null,"find-usages","find-usages",1129844133),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Find usages",new cljs.core.Keyword(null,"description","description",-1428560544),"Find usages of the current var",new cljs.core.Keyword(null,"command","command",-894540724),(function (){
return repl_tooling.commands_to_repl.orchard.xref_BANG_(editor_state);
})], null)):G__139707__$1);
if(cljs.core.truth_(have_docs_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__139707__$2,new cljs.core.Keyword(null,"clojure-doc-for-var","clojure-doc-for-var",-1547657444),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Clojure doc for var",new cljs.core.Keyword(null,"description","description",-1428560544),"Find the Clojure doc of the current var",new cljs.core.Keyword(null,"command","command",-894540724),(function (){
return repl_tooling.commands_to_repl.orchard.cljdoc_BANG_(editor_state);
})], null));
} else {
return G__139707__$2;
}
})());
}));
}));
}));
}));
}));
}));
});

//# sourceMappingURL=repl_tooling.commands_to_repl.orchard.js.map
