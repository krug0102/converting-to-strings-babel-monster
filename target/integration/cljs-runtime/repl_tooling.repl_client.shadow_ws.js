goog.provide('repl_tooling.repl_client.shadow_ws');
repl_tooling.repl_client.shadow_ws.State = schema.core.atom(new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"build-id","build-id",1642831089),schema.core.Keyword,new cljs.core.Keyword(null,"on-output","on-output",-2023300495),schema.core.make_fn_schema(schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null)),new cljs.core.Keyword(null,"ws","ws",86841443),shadow.js.shim.module$ws,new cljs.core.Keyword(null,"should-disconnect?","should-disconnect?",-426700894),schema.core.Bool,new cljs.core.Keyword(null,"evaluator","evaluator",704655039),Promise,new cljs.core.Keyword(null,"id->build","id->build",-541876518),cljs.core.PersistentArrayMap.createAsIfByAssoc([schema.core.Int,schema.core.Keyword]),new cljs.core.Keyword(null,"build->id","build->id",-340112667),cljs.core.PersistentArrayMap.createAsIfByAssoc([schema.core.Keyword,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Int], null)]),new cljs.core.Keyword(null,"pending-evals","pending-evals",1249255957),cljs.core.PersistentArrayMap.createAsIfByAssoc([schema.core.Any,cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"promise","promise",1767129287),schema.core.Any,new cljs.core.Keyword(null,"file","file",-1269645878),schema.core.Str,new cljs.core.Keyword(null,"row","row",-570139521),schema.core.Int,new cljs.core.Keyword(null,"pass","pass",1574159993),schema.core.Any,schema.core.optional_key(new cljs.core.Keyword(null,"success?","success?",-122854052)),schema.core.Bool])])], null));
repl_tooling.repl_client.shadow_ws.send_BANG_ = (function repl_tooling$repl_client$shadow_ws$send_BANG_(ws,msg){
var writer = cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"json","json",1279968570));
var out = cognitect.transit.write(writer,msg);
return ws.send(out);
});
repl_tooling.repl_client.shadow_ws.blob = "(clojure.core/let [tooling$norm$walk (clojure.core/atom nil)\n\n                   tooling$norm$jsbeam\n                   (clojure.core/fn [js-obj]\n                     (clojure.core/tagged-literal\n                      'unrepl/browsable\n                      [(if (clojure.core/= js/Function (clojure.core/type js-obj))\n                         (clojure.core/let [fn-name (clojure.core/-> js-obj .-name cljs.core/demunge)\n                                            fn-name (if (clojure.core/empty? fn-name)\n                                                      (clojure.core/pr-str js-obj)\n                                                      fn-name)]\n                           (clojure.core/tagged-literal 'unrepl/bad-symbol\n                                                          [nil\n                                                           (clojure.core/str\n                                                            fn-name\n                                                            \" (function)\")]))\n                         (if (try (cljs.reader/read-string {:default clojure.core/tagged-literal}\n                                                           (clojure.core/pr-str js-obj))\n                               (catch :default _ nil))\n                           js-obj\n                           (clojure.core/tagged-literal 'unrepl/bad-symbol [nil (clojure.core/pr-str js-obj)])))\n                       {:repl-tooling/... `(quote\n                                             ~(->> js-obj\n                                                  js/Object.getPrototypeOf\n                                                  js/Object.getOwnPropertyNames\n                                                  (clojure.core/concat (js/Object.getOwnPropertyNames js-obj))\n                                                  distinct\n                                                  sort\n                                                  (clojure.core/map #(clojure.core/symbol (str \".\" %)))))}]))\n\n                   res-fn\n                   (clojure.core/fn [res]\n                     (clojure.core/cond\n                       (clojure.core/= \"cljs.core/Atom\" (clojure.core/pr-str (clojure.core/type res)))\n                       (clojure.core/tagged-literal 'atom\n                         (@tooling$norm$walk @res))\n\n                       ; Reagent fixes...\n                       (clojure.core/= \"reagent.ratom/RAtom\" (clojure.core/pr-str (clojure.core/type res)))\n                       (clojure.core/tagged-literal 'reagent.ratom/RAtom\n                         (@tooling$norm$walk @res))\n\n                       (clojure.core/instance? cljs.core/ExceptionInfo res)\n                       (clojure.core/tagged-literal 'error\n                         {:type \"cljs.core.ExceptionInfo\"\n                          :data (.-data res)\n                          :message (.-message res)\n                          :trace (clojure.core/->> res .-stack clojure.string/split-lines)})\n\n                       (clojure.core/instance? js/Error res)\n                       (clojure.core/tagged-literal 'error\n                         {:type (.-name res)\n                          :message (.-message res)\n                          :trace (clojure.core/->> res .-stack clojure.string/split-lines)})\n\n                       (clojure.core/symbol? res)\n                       (if (clojure.core/re-find (clojure.core/re-pattern \"\\\\s\") (str res))\n                        (clojure.core/symbol (clojure.core/str \"#unrepl/bad-symbol [nil \"\n                                                  (clojure.core/pr-str (clojure.core/str res))\n                                                  \"]\"))\n                        res)\n\n                       (clojure.core/keyword? res)\n                       (if (clojure.core/re-find (clojure.core/re-pattern \"\\\\s\") (str res))\n                        (clojure.core/symbol (clojure.core/str \"#unrepl/bad-keyword [\"\n                                               (clojure.core/pr-str (clojure.core/namespace res)) \" \"\n                                               (clojure.core/pr-str (clojure.core/name res))\n                                               \"]\"))\n                        res)\n\n                       (clojure.core/instance? js/Promise res)\n                       (clojure.core/let [id (clojure.core/gensym \"patch\")]\n                         (.then res\n                                (clojure.core/fn [resolved]\n                                  (cljs.core/tap>\n                                   (clojure.core/tagged-literal\n                                    'repl-tooling/patch\n                                    [id\n                                     (clojure.core/pr-str\n                                      (clojure.core/tagged-literal\n                                       'promise\n                                       (@tooling$norm$walk resolved)))]))))\n                         (clojure.core/tagged-literal\n                          'repl-tooling/patchable [id (clojure.core/tagged-literal 'promise '<pending>)]))\n\n                       ;; Collections...\n                       (clojure.core/map? res)\n                       (clojure.core/let [norm (clojure.core/->> res\n                                                                 (clojure.core/map #(clojure.core/mapv @tooling$norm$walk %))\n                                                                 (clojure.core/into {}))]\n                         (if (clojure.core/record? res)\n                           (clojure.core/tagged-literal\n                            (clojure.core/symbol (clojure.core/pr-str (clojure.core/type res)))\n                            norm)\n                           norm))\n\n                       (clojure.core/vector? res)\n                       (clojure.core/mapv @tooling$norm$walk res)\n\n                       (clojure.core/set? res)\n                       (clojure.core/->> res (clojure.core/map @tooling$norm$walk) (clojure.core/into #{}))\n\n                       (clojure.core/coll? res)\n                       (clojure.core/map @tooling$norm$walk res)\n\n                       (clojure.core/keyword? res) res\n                       (clojure.core/= nil res) res\n                       (clojure.core/boolean? res) res\n                       (clojure.core/number? res) res\n                       (clojure.core/string? res) res\n                       (clojure.core/regexp? res) res\n                       :else (tooling$norm$jsbeam res)))]\n  (try\n    (clojure.core/reset! tooling$norm$walk (clojure.core/memoize res-fn))\n                        ; (clojure.core/fn [res]\n                          ; (if (clojure.core/record? res)\n                          ;   (clojure.walk/postwalk (clojure.core/fn [a] (res-fn a false)) res)\n                            ; (if (clojure.core/coll? res)\n                            ;   (clojure.walk/postwalk (clojure.core/fn [a] (res-fn a)) res)\n                              ; (res-fn res))\n\n    (clojure.core/let [res (do __COMMAND__)]\n      ['tooling$eval-res '__ID__ {:result (clojure.core/pr-str (@tooling$norm$walk res))\n                                  :as-text (clojure.core/pr-str (@tooling$norm$walk res))}])\n    (catch :default e ['tooling$eval-res '__ID__ {:error (clojure.core/pr-str (@tooling$norm$walk e))\n                                                  :as-text (clojure.core/pr-str (@tooling$norm$walk e))}])))\n";
repl_tooling.repl_client.shadow_ws.evaluate_BANG_ = (function repl_tooling$repl_client$shadow_ws$evaluate_BANG_(state,namespace,code,opts){
var ws = new cljs.core.Keyword(null,"ws","ws",86841443).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state));
var row = new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$2(opts,(0));
var file = new cljs.core.Keyword(null,"filename","filename",-1428840783).cljs$core$IFn$_invoke$arity$2(opts,"[EVAL]");
var build_id = new cljs.core.Keyword(null,"build-id","build-id",1642831089).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state));
var client_id = cljs.core.first(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"build->id","build->id",-340112667),build_id], null)));
var blobbed_code = (cljs.core.truth_(new cljs.core.Keyword(null,"no-wrap","no-wrap",1249460674).cljs$core$IFn$_invoke$arity$1(opts))?code:repl_tooling.repl_client.source.parse_command(clojure.string.replace(repl_tooling.repl_client.shadow_ws.blob,/__COMMAND__/,code),true));
var prom = promesa.core.deferred();
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(blobbed_code))){
promesa.core.resolve_BANG_.cljs$core$IFn$_invoke$arity$2(prom,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"pass","pass",1574159993).cljs$core$IFn$_invoke$arity$1(opts),(function (){var G__141715 = "Syntax Error";
var G__141716 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(blobbed_code);
var G__141717 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [file,null,build_id,row], null)], null);
return (repl_tooling.editor_helpers.error_result.cljs$core$IFn$_invoke$arity$3 ? repl_tooling.editor_helpers.error_result.cljs$core$IFn$_invoke$arity$3(G__141715,G__141716,G__141717) : repl_tooling.editor_helpers.error_result.call(null,G__141715,G__141716,G__141717));
})()], 0)));
} else {
if(cljs.core.truth_(client_id)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update,new cljs.core.Keyword(null,"pending-evals","pending-evals",1249255957),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"promise","promise",1767129287),prom,new cljs.core.Keyword(null,"file","file",-1269645878),file,new cljs.core.Keyword(null,"row","row",-570139521),row,new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"pass","pass",1574159993).cljs$core$IFn$_invoke$arity$1(opts)], null)], 0));

repl_tooling.repl_client.shadow_ws.send_BANG_(ws,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-eval","cljs-eval",1860675817),new cljs.core.Keyword(null,"to","to",192099007),client_id,new cljs.core.Keyword(null,"call-id","call-id",1043012968),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(blobbed_code),new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(namespace)], null)], null));
} else {
promesa.core.resolve_BANG_.cljs$core$IFn$_invoke$arity$2(prom,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"pass","pass",1574159993).cljs$core$IFn$_invoke$arity$1(opts),(function (){var G__141718 = "No clients connected";
var G__141719 = ["No clients connected to ","the runtime ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(build_id)].join('');
var G__141720 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [file,null,build_id,row], null)], null);
return (repl_tooling.editor_helpers.error_result.cljs$core$IFn$_invoke$arity$3 ? repl_tooling.editor_helpers.error_result.cljs$core$IFn$_invoke$arity$3(G__141718,G__141719,G__141720) : repl_tooling.editor_helpers.error_result.call(null,G__141718,G__141719,G__141720));
})()], 0)));

}
}

return prom;
});
repl_tooling.repl_client.shadow_ws.send_custom_command_BANG_ = (function repl_tooling$repl_client$shadow_ws$send_custom_command_BANG_(state,message,id,opts){
var prom = promesa.core.deferred();
var row = new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$2(opts,(0));
var file = new cljs.core.Keyword(null,"filename","filename",-1428840783).cljs$core$IFn$_invoke$arity$2(opts,"[EVAL]");
var message__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(message),new cljs.core.Keyword(null,"call-id","call-id",1043012968),id);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update,new cljs.core.Keyword(null,"pending-evals","pending-evals",1249255957),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"call-id","call-id",1043012968).cljs$core$IFn$_invoke$arity$1(message__$1),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"promise","promise",1767129287),prom,new cljs.core.Keyword(null,"file","file",-1269645878),file,new cljs.core.Keyword(null,"row","row",-570139521),row,new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"pass","pass",1574159993).cljs$core$IFn$_invoke$arity$1(opts)], null)], 0));

repl_tooling.repl_client.shadow_ws.send_BANG_(new cljs.core.Keyword(null,"ws","ws",86841443).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)),message__$1);

return prom;
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {repl_tooling.eval.Evaluator}
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
repl_tooling.repl_client.shadow_ws.ShadowCLJS = (function (state,__meta,__extmap,__hash){
this.state = state;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(repl_tooling.repl_client.shadow_ws.ShadowCLJS.prototype.repl_tooling$eval$Evaluator$ = cljs.core.PROTOCOL_SENTINEL);

(repl_tooling.repl_client.shadow_ws.ShadowCLJS.prototype.repl_tooling$eval$Evaluator$evaluate$arity$4 = (function (this$,command,opts,callback){
var self__ = this;
var this$__$1 = this;
return promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$2(opts,cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("shadow-eval-")),(function (id){
return promesa.protocols._bind((function (){var or__4223__auto__ = cljs.core.not_empty(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(opts)));
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return "cljs.user";
}
})(),(function (namespace){
return promesa.protocols._bind((cljs.core.truth_(new cljs.core.Keyword(null,"shadow-command","shadow-command",1389461500).cljs$core$IFn$_invoke$arity$1(opts))?repl_tooling.repl_client.shadow_ws.send_custom_command_BANG_(self__.state,command,id,opts):repl_tooling.repl_client.shadow_ws.evaluate_BANG_(self__.state,namespace,cljs.core.str.cljs$core$IFn$_invoke$arity$1(command),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"id","id",-1388402092),id))),(function (prom){
return promesa.protocols._bind(null,(function (___31810__auto__){
return promesa.protocols._bind((callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(prom) : callback.call(null,prom)),(function (___31809__auto__){
return promesa.protocols._promise(id);
}));
}));
}));
}));
}));
}));
}));

(repl_tooling.repl_client.shadow_ws.ShadowCLJS.prototype.repl_tooling$eval$Evaluator$break$arity$2 = (function (this$,repl){
var self__ = this;
var this$__$1 = this;
return null;
}));

(repl_tooling.repl_client.shadow_ws.ShadowCLJS.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(repl_tooling.repl_client.shadow_ws.ShadowCLJS.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k141727,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__141744 = k141727;
var G__141744__$1 = (((G__141744 instanceof cljs.core.Keyword))?G__141744.fqn:null);
switch (G__141744__$1) {
case "state":
return self__.state;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k141727,else__4475__auto__);

}
}));

(repl_tooling.repl_client.shadow_ws.ShadowCLJS.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__141750){
var vec__141751 = p__141750;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__141751,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__141751,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(repl_tooling.repl_client.shadow_ws.ShadowCLJS.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#repl-tooling.repl-client.shadow-ws.ShadowCLJS{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state","state",-1988618099),self__.state],null))], null),self__.__extmap));
}));

(repl_tooling.repl_client.shadow_ws.ShadowCLJS.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__141726){
var self__ = this;
var G__141726__$1 = this;
return (new cljs.core.RecordIter((0),G__141726__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state","state",-1988618099)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(repl_tooling.repl_client.shadow_ws.ShadowCLJS.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(repl_tooling.repl_client.shadow_ws.ShadowCLJS.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new repl_tooling.repl_client.shadow_ws.ShadowCLJS(self__.state,self__.__meta,self__.__extmap,self__.__hash));
}));

(repl_tooling.repl_client.shadow_ws.ShadowCLJS.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(repl_tooling.repl_client.shadow_ws.ShadowCLJS.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (coll__4469__auto__){
return (593265413 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
})(this__4468__auto____$1);
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(repl_tooling.repl_client.shadow_ws.ShadowCLJS.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this141728,other141729){
var self__ = this;
var this141728__$1 = this;
return (((!((other141729 == null)))) && ((((this141728__$1.constructor === other141729.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this141728__$1.state,other141729.state)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this141728__$1.__extmap,other141729.__extmap)))))));
}));

(repl_tooling.repl_client.shadow_ws.ShadowCLJS.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new repl_tooling.repl_client.shadow_ws.ShadowCLJS(self__.state,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(repl_tooling.repl_client.shadow_ws.ShadowCLJS.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k141727){
var self__ = this;
var this__4479__auto____$1 = this;
var G__141765 = k141727;
var G__141765__$1 = (((G__141765 instanceof cljs.core.Keyword))?G__141765.fqn:null);
switch (G__141765__$1) {
case "state":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k141727);

}
}));

(repl_tooling.repl_client.shadow_ws.ShadowCLJS.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__141726){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__141767 = cljs.core.keyword_identical_QMARK_;
var expr__141768 = k__4481__auto__;
if(cljs.core.truth_((pred__141767.cljs$core$IFn$_invoke$arity$2 ? pred__141767.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"state","state",-1988618099),expr__141768) : pred__141767.call(null,new cljs.core.Keyword(null,"state","state",-1988618099),expr__141768)))){
return (new repl_tooling.repl_client.shadow_ws.ShadowCLJS(G__141726,self__.__meta,self__.__extmap,null));
} else {
return (new repl_tooling.repl_client.shadow_ws.ShadowCLJS(self__.state,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__141726),null));
}
}));

(repl_tooling.repl_client.shadow_ws.ShadowCLJS.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"state","state",-1988618099),self__.state,null))], null),self__.__extmap));
}));

(repl_tooling.repl_client.shadow_ws.ShadowCLJS.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__141726){
var self__ = this;
var this__4471__auto____$1 = this;
return (new repl_tooling.repl_client.shadow_ws.ShadowCLJS(self__.state,G__141726,self__.__extmap,self__.__hash));
}));

(repl_tooling.repl_client.shadow_ws.ShadowCLJS.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4478__auto__,(0)),cljs.core._nth(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(repl_tooling.repl_client.shadow_ws.ShadowCLJS.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null)], null);
}));

(repl_tooling.repl_client.shadow_ws.ShadowCLJS.cljs$lang$type = true);

(repl_tooling.repl_client.shadow_ws.ShadowCLJS.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"repl-tooling.repl-client.shadow-ws/ShadowCLJS",null,(1),null));
}));

(repl_tooling.repl_client.shadow_ws.ShadowCLJS.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"repl-tooling.repl-client.shadow-ws/ShadowCLJS");
}));

/**
 * Positional factory function for repl-tooling.repl-client.shadow-ws/ShadowCLJS.
 */
repl_tooling.repl_client.shadow_ws.__GT_ShadowCLJS = (function repl_tooling$repl_client$shadow_ws$__GT_ShadowCLJS(state){
return (new repl_tooling.repl_client.shadow_ws.ShadowCLJS(state,null,null,null));
});

/**
 * Factory function for repl-tooling.repl-client.shadow-ws/ShadowCLJS, taking a map of keywords to field values.
 */
repl_tooling.repl_client.shadow_ws.map__GT_ShadowCLJS = (function repl_tooling$repl_client$shadow_ws$map__GT_ShadowCLJS(G__141730){
var extmap__4512__auto__ = (function (){var G__141773 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__141730,new cljs.core.Keyword(null,"state","state",-1988618099));
if(cljs.core.record_QMARK_(G__141730)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__141773);
} else {
return G__141773;
}
})();
return (new repl_tooling.repl_client.shadow_ws.ShadowCLJS(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(G__141730),null,cljs.core.not_empty(extmap__4512__auto__),null));
});

repl_tooling.repl_client.shadow_ws.send_hello_BANG_ = (function repl_tooling$repl_client$shadow_ws$send_hello_BANG_(state){
var map__141775 = cljs.core.deref(state);
var map__141775__$1 = cljs.core.__destructure_map(map__141775);
var ws = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__141775__$1,new cljs.core.Keyword(null,"ws","ws",86841443));
var evaluator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__141775__$1,new cljs.core.Keyword(null,"evaluator","evaluator",704655039));
repl_tooling.repl_client.shadow_ws.send_BANG_(ws,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor","editor",-989377770),new cljs.core.Keyword(null,"repl-tooling","repl-tooling",857049704)], null)], null));

repl_tooling.repl_client.shadow_ws.send_BANG_(ws,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"request-clients","request-clients",13229886),new cljs.core.Keyword(null,"notify","notify",-1256867814),true,new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"and","and",-971899817),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"eq","eq",-618539067),new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"cljs","cljs",1492417629)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"eq","eq",-618539067),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"runtime","runtime",-1331573996)], null)], null)], null));

repl_tooling.repl_client.shadow_ws.send_BANG_(ws,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword("shadow.cljs.model","subscribe","shadow.cljs.model/subscribe",558638855),new cljs.core.Keyword(null,"to","to",192099007),(1),new cljs.core.Keyword("shadow.cljs.model","topic","shadow.cljs.model/topic",-1801858664),new cljs.core.Keyword("shadow.cljs.model","build-status-update","shadow.cljs.model/build-status-update",-2118551008)], null));

return promesa.core.resolve_BANG_.cljs$core$IFn$_invoke$arity$2(evaluator,repl_tooling.repl_client.shadow_ws.__GT_ShadowCLJS(state));
});
repl_tooling.repl_client.shadow_ws.listen_to_events_BANG_ = (function repl_tooling$repl_client$shadow_ws$listen_to_events_BANG_(state){
var map__141778 = cljs.core.deref(state);
var map__141778__$1 = cljs.core.__destructure_map(map__141778);
var ws = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__141778__$1,new cljs.core.Keyword(null,"ws","ws",86841443));
var build_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__141778__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
var builds = new cljs.core.Keyword(null,"build->id","build->id",-340112667).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state));
var seq__141780_142014 = cljs.core.seq(builds);
var chunk__141785_142015 = null;
var count__141786_142016 = (0);
var i__141787_142017 = (0);
while(true){
if((i__141787_142017 < count__141786_142016)){
var vec__141817_142019 = chunk__141785_142015.cljs$core$IIndexed$_nth$arity$2(null,i__141787_142017);
var __142020 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__141817_142019,(0),null);
var ids_142021 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__141817_142019,(1),null);
var seq__141788_142023 = cljs.core.seq(ids_142021);
var chunk__141789_142024 = null;
var count__141790_142025 = (0);
var i__141791_142026 = (0);
while(true){
if((i__141791_142026 < count__141790_142025)){
var id_142027 = chunk__141789_142024.cljs$core$IIndexed$_nth$arity$2(null,i__141791_142026);
repl_tooling.repl_client.shadow_ws.send_BANG_(ws,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"runtime-print-unsub","runtime-print-unsub",2055442536),new cljs.core.Keyword(null,"to","to",192099007),id_142027], null));

repl_tooling.repl_client.shadow_ws.send_BANG_(ws,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),new cljs.core.Keyword(null,"to","to",192099007),id_142027], null));


var G__142028 = seq__141788_142023;
var G__142029 = chunk__141789_142024;
var G__142030 = count__141790_142025;
var G__142031 = (i__141791_142026 + (1));
seq__141788_142023 = G__142028;
chunk__141789_142024 = G__142029;
count__141790_142025 = G__142030;
i__141791_142026 = G__142031;
continue;
} else {
var temp__5753__auto___142033 = cljs.core.seq(seq__141788_142023);
if(temp__5753__auto___142033){
var seq__141788_142034__$1 = temp__5753__auto___142033;
if(cljs.core.chunked_seq_QMARK_(seq__141788_142034__$1)){
var c__4649__auto___142036 = cljs.core.chunk_first(seq__141788_142034__$1);
var G__142037 = cljs.core.chunk_rest(seq__141788_142034__$1);
var G__142038 = c__4649__auto___142036;
var G__142039 = cljs.core.count(c__4649__auto___142036);
var G__142040 = (0);
seq__141788_142023 = G__142037;
chunk__141789_142024 = G__142038;
count__141790_142025 = G__142039;
i__141791_142026 = G__142040;
continue;
} else {
var id_142041 = cljs.core.first(seq__141788_142034__$1);
repl_tooling.repl_client.shadow_ws.send_BANG_(ws,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"runtime-print-unsub","runtime-print-unsub",2055442536),new cljs.core.Keyword(null,"to","to",192099007),id_142041], null));

repl_tooling.repl_client.shadow_ws.send_BANG_(ws,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),new cljs.core.Keyword(null,"to","to",192099007),id_142041], null));


var G__142042 = cljs.core.next(seq__141788_142034__$1);
var G__142043 = null;
var G__142044 = (0);
var G__142045 = (0);
seq__141788_142023 = G__142042;
chunk__141789_142024 = G__142043;
count__141790_142025 = G__142044;
i__141791_142026 = G__142045;
continue;
}
} else {
}
}
break;
}

var G__142046 = seq__141780_142014;
var G__142047 = chunk__141785_142015;
var G__142048 = count__141786_142016;
var G__142049 = (i__141787_142017 + (1));
seq__141780_142014 = G__142046;
chunk__141785_142015 = G__142047;
count__141786_142016 = G__142048;
i__141787_142017 = G__142049;
continue;
} else {
var temp__5753__auto___142050 = cljs.core.seq(seq__141780_142014);
if(temp__5753__auto___142050){
var seq__141780_142051__$1 = temp__5753__auto___142050;
if(cljs.core.chunked_seq_QMARK_(seq__141780_142051__$1)){
var c__4649__auto___142052 = cljs.core.chunk_first(seq__141780_142051__$1);
var G__142053 = cljs.core.chunk_rest(seq__141780_142051__$1);
var G__142054 = c__4649__auto___142052;
var G__142055 = cljs.core.count(c__4649__auto___142052);
var G__142056 = (0);
seq__141780_142014 = G__142053;
chunk__141785_142015 = G__142054;
count__141786_142016 = G__142055;
i__141787_142017 = G__142056;
continue;
} else {
var vec__141823_142057 = cljs.core.first(seq__141780_142051__$1);
var __142058 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__141823_142057,(0),null);
var ids_142059 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__141823_142057,(1),null);
var seq__141781_142060 = cljs.core.seq(ids_142059);
var chunk__141782_142061 = null;
var count__141783_142062 = (0);
var i__141784_142063 = (0);
while(true){
if((i__141784_142063 < count__141783_142062)){
var id_142064 = chunk__141782_142061.cljs$core$IIndexed$_nth$arity$2(null,i__141784_142063);
repl_tooling.repl_client.shadow_ws.send_BANG_(ws,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"runtime-print-unsub","runtime-print-unsub",2055442536),new cljs.core.Keyword(null,"to","to",192099007),id_142064], null));

repl_tooling.repl_client.shadow_ws.send_BANG_(ws,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),new cljs.core.Keyword(null,"to","to",192099007),id_142064], null));


var G__142066 = seq__141781_142060;
var G__142067 = chunk__141782_142061;
var G__142068 = count__141783_142062;
var G__142069 = (i__141784_142063 + (1));
seq__141781_142060 = G__142066;
chunk__141782_142061 = G__142067;
count__141783_142062 = G__142068;
i__141784_142063 = G__142069;
continue;
} else {
var temp__5753__auto___142070__$1 = cljs.core.seq(seq__141781_142060);
if(temp__5753__auto___142070__$1){
var seq__141781_142071__$1 = temp__5753__auto___142070__$1;
if(cljs.core.chunked_seq_QMARK_(seq__141781_142071__$1)){
var c__4649__auto___142072 = cljs.core.chunk_first(seq__141781_142071__$1);
var G__142074 = cljs.core.chunk_rest(seq__141781_142071__$1);
var G__142075 = c__4649__auto___142072;
var G__142076 = cljs.core.count(c__4649__auto___142072);
var G__142077 = (0);
seq__141781_142060 = G__142074;
chunk__141782_142061 = G__142075;
count__141783_142062 = G__142076;
i__141784_142063 = G__142077;
continue;
} else {
var id_142078 = cljs.core.first(seq__141781_142071__$1);
repl_tooling.repl_client.shadow_ws.send_BANG_(ws,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"runtime-print-unsub","runtime-print-unsub",2055442536),new cljs.core.Keyword(null,"to","to",192099007),id_142078], null));

repl_tooling.repl_client.shadow_ws.send_BANG_(ws,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),new cljs.core.Keyword(null,"to","to",192099007),id_142078], null));


var G__142080 = cljs.core.next(seq__141781_142071__$1);
var G__142081 = null;
var G__142082 = (0);
var G__142083 = (0);
seq__141781_142060 = G__142080;
chunk__141782_142061 = G__142081;
count__141783_142062 = G__142082;
i__141784_142063 = G__142083;
continue;
}
} else {
}
}
break;
}

var G__142085 = cljs.core.next(seq__141780_142051__$1);
var G__142086 = null;
var G__142087 = (0);
var G__142088 = (0);
seq__141780_142014 = G__142085;
chunk__141785_142015 = G__142086;
count__141786_142016 = G__142087;
i__141787_142017 = G__142088;
continue;
}
} else {
}
}
break;
}

var temp__5753__auto__ = cljs.core.first((build_id.cljs$core$IFn$_invoke$arity$1 ? build_id.cljs$core$IFn$_invoke$arity$1(builds) : build_id.call(null,builds)));
if(cljs.core.truth_(temp__5753__auto__)){
var id = temp__5753__auto__;
repl_tooling.repl_client.shadow_ws.send_BANG_(ws,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"runtime-print-sub","runtime-print-sub",1832904759),new cljs.core.Keyword(null,"to","to",192099007),id], null));

repl_tooling.repl_client.shadow_ws.send_BANG_(ws,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),new cljs.core.Keyword(null,"to","to",192099007),id], null));

return repl_tooling.repl_client.shadow_ws.send_BANG_(ws,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-eval","cljs-eval",1860675817),new cljs.core.Keyword(null,"to","to",192099007),id,new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"code","code",1586293142),"(require 'cljs.reader)",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"shadow.user","shadow.user",357039622,null)], null)], null));
} else {
return null;
}
});
repl_tooling.repl_client.shadow_ws.parse_clients_BANG_ = (function repl_tooling$repl_client$shadow_ws$parse_clients_BANG_(state,p__141859){
var map__141860 = p__141859;
var map__141860__$1 = cljs.core.__destructure_map(map__141860);
var clients = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__141860__$1,new cljs.core.Keyword(null,"clients","clients",1436018090));
var build_id = new cljs.core.Keyword(null,"build-id","build-id",1642831089).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state));
var shadow_ids = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (v){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(v,(1),(function (p1__141849_SHARP_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-id","client-id",-464622140),p1__141849_SHARP_);
}));
}),cljs.core.group_by((function (p1__141848_SHARP_){
return new cljs.core.Keyword(null,"build-id","build-id",1642831089).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-info","client-info",1958982504).cljs$core$IFn$_invoke$arity$1(p1__141848_SHARP_));
}),clients)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.assoc,new cljs.core.Keyword(null,"build->id","build->id",-340112667),shadow_ids,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id->build","id->build",-541876518),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4622__auto__ = (function repl_tooling$repl_client$shadow_ws$parse_clients_BANG__$_iter__141866(s__141867){
return (new cljs.core.LazySeq(null,(function (){
var s__141867__$1 = s__141867;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__141867__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var vec__141872 = cljs.core.first(xs__6308__auto__);
var build_id__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__141872,(0),null);
var ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__141872,(1),null);
var iterys__4618__auto__ = ((function (s__141867__$1,vec__141872,build_id__$1,ids,xs__6308__auto__,temp__5753__auto__,build_id,shadow_ids,map__141860,map__141860__$1,clients){
return (function repl_tooling$repl_client$shadow_ws$parse_clients_BANG__$_iter__141866_$_iter__141868(s__141869){
return (new cljs.core.LazySeq(null,((function (s__141867__$1,vec__141872,build_id__$1,ids,xs__6308__auto__,temp__5753__auto__,build_id,shadow_ids,map__141860,map__141860__$1,clients){
return (function (){
var s__141869__$1 = s__141869;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__141869__$1);
if(temp__5753__auto____$1){
var s__141869__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__141869__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__141869__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__141871 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__141870 = (0);
while(true){
if((i__141870 < size__4621__auto__)){
var id = cljs.core._nth(c__4620__auto__,i__141870);
cljs.core.chunk_append(b__141871,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,build_id__$1], null));

var G__142095 = (i__141870 + (1));
i__141870 = G__142095;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__141871),repl_tooling$repl_client$shadow_ws$parse_clients_BANG__$_iter__141866_$_iter__141868(cljs.core.chunk_rest(s__141869__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__141871),null);
}
} else {
var id = cljs.core.first(s__141869__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,build_id__$1], null),repl_tooling$repl_client$shadow_ws$parse_clients_BANG__$_iter__141866_$_iter__141868(cljs.core.rest(s__141869__$2)));
}
} else {
return null;
}
break;
}
});})(s__141867__$1,vec__141872,build_id__$1,ids,xs__6308__auto__,temp__5753__auto__,build_id,shadow_ids,map__141860,map__141860__$1,clients))
,null,null));
});})(s__141867__$1,vec__141872,build_id__$1,ids,xs__6308__auto__,temp__5753__auto__,build_id,shadow_ids,map__141860,map__141860__$1,clients))
;
var fs__4619__auto__ = cljs.core.seq(iterys__4618__auto__(ids));
if(fs__4619__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4619__auto__,repl_tooling$repl_client$shadow_ws$parse_clients_BANG__$_iter__141866(cljs.core.rest(s__141867__$1)));
} else {
var G__142096 = cljs.core.rest(s__141867__$1);
s__141867__$1 = G__142096;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(shadow_ids);
})())], 0));

return repl_tooling.repl_client.shadow_ws.listen_to_events_BANG_(state);
});
repl_tooling.repl_client.shadow_ws.add_id = (function repl_tooling$repl_client$shadow_ws$add_id(st,client_id,build_id){
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(st,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"build->id","build->id",-340112667),build_id], null),(function (p1__141877_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var or__4223__auto__ = p1__141877_SHARP_;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),client_id);
})),new cljs.core.Keyword(null,"id->build","id->build",-541876518),cljs.core.assoc,client_id,build_id);
});
repl_tooling.repl_client.shadow_ws.remove_id = (function repl_tooling$repl_client$shadow_ws$remove_id(st,client_id){
var build_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(st,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id->build","id->build",-541876518),client_id], null));
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$4(st,new cljs.core.Keyword(null,"id->build","id->build",-541876518),cljs.core.dissoc,client_id),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"build->id","build->id",-340112667),build_id], null),(function (p1__141879_SHARP_){
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,client_id),p1__141879_SHARP_));
}));
});
repl_tooling.repl_client.shadow_ws.update_builds_BANG_ = (function repl_tooling$repl_client$shadow_ws$update_builds_BANG_(state,p__141882){
var map__141883 = p__141882;
var map__141883__$1 = cljs.core.__destructure_map(map__141883);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__141883__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__141883__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__141883__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,(function (p1__141881_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
return repl_tooling.repl_client.shadow_ws.add_id(p1__141881_SHARP_,client_id,new cljs.core.Keyword(null,"build-id","build-id",1642831089).cljs$core$IFn$_invoke$arity$1(client_info));
} else {
return repl_tooling.repl_client.shadow_ws.remove_id(p1__141881_SHARP_,client_id);
}
}));

return repl_tooling.repl_client.shadow_ws.listen_to_events_BANG_(state);
});
repl_tooling.repl_client.shadow_ws.resolve_pending_BANG_ = (function repl_tooling$repl_client$shadow_ws$resolve_pending_BANG_(state,p__141885,result){
var map__141886 = p__141885;
var map__141886__$1 = cljs.core.__destructure_map(map__141886);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__141886__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var map__141887 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pending-evals","pending-evals",1249255957).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)),call_id);
var map__141887__$1 = cljs.core.__destructure_map(map__141887);
var promise = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__141887__$1,new cljs.core.Keyword(null,"promise","promise",1767129287));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update,new cljs.core.Keyword(null,"pending-evals","pending-evals",1249255957),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return promesa.core.resolve_BANG_.cljs$core$IFn$_invoke$arity$2(promise,result);
});
repl_tooling.repl_client.shadow_ws.capture_result_BANG_ = (function repl_tooling$repl_client$shadow_ws$capture_result_BANG_(state,p__141890){
var map__141891 = p__141890;
var map__141891__$1 = cljs.core.__destructure_map(map__141891);
var msg = map__141891__$1;
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__141891__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__141891__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pending-evals","pending-evals",1249255957).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)),call_id);
if(cljs.core.truth_(temp__5753__auto__)){
var map__141892 = temp__5753__auto__;
var map__141892__$1 = cljs.core.__destructure_map(map__141892);
var success_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__141892__$1,new cljs.core.Keyword(null,"success?","success?",-122854052));
var pass = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__141892__$1,new cljs.core.Keyword(null,"pass","pass",1574159993));
var parsed_res = ((clojure.string.starts_with_QMARK_(result,"[tooling$eval-res"))?cljs.core.last(cljs.reader.read_string.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),cljs.core.tagged_literal], null),result)):cljs.core.PersistentArrayMap.createAsIfByAssoc([(cljs.core.truth_(success_QMARK_)?new cljs.core.Keyword(null,"result","result",1415092211):new cljs.core.Keyword(null,"error","error",-978969032)),result,new cljs.core.Keyword(null,"as-text","as-text",-449861067),result]));
return repl_tooling.repl_client.shadow_ws.resolve_pending_BANG_(state,msg,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pass,parsed_res], 0)));
} else {
return null;
}
});
repl_tooling.repl_client.shadow_ws.get_result_BANG_ = (function repl_tooling$repl_client$shadow_ws$get_result_BANG_(state,msg){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pending-evals","pending-evals",1249255957),new cljs.core.Keyword(null,"call-id","call-id",1043012968).cljs$core$IFn$_invoke$arity$1(msg)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"success?","success?",-122854052),true], 0));

return repl_tooling.repl_client.shadow_ws.send_BANG_(new cljs.core.Keyword(null,"ws","ws",86841443).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"obj-request","obj-request",-1709325811),new cljs.core.Keyword(null,"call-id","call-id",1043012968),new cljs.core.Keyword(null,"call-id","call-id",1043012968).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"from","from",1815293044).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"request-op","request-op",1472997246),new cljs.core.Keyword(null,"edn","edn",1317840885),new cljs.core.Keyword(null,"oid","oid",-768692334),new cljs.core.Keyword(null,"ref-oid","ref-oid",-526648644).cljs$core$IFn$_invoke$arity$1(msg)], null));
});
repl_tooling.repl_client.shadow_ws.get_error_BANG_ = (function repl_tooling$repl_client$shadow_ws$get_error_BANG_(state,msg){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pending-evals","pending-evals",1249255957),new cljs.core.Keyword(null,"call-id","call-id",1043012968).cljs$core$IFn$_invoke$arity$1(msg)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"success?","success?",-122854052),false], 0));

return repl_tooling.repl_client.shadow_ws.send_BANG_(new cljs.core.Keyword(null,"ws","ws",86841443).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"obj-request","obj-request",-1709325811),new cljs.core.Keyword(null,"call-id","call-id",1043012968),new cljs.core.Keyword(null,"call-id","call-id",1043012968).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"from","from",1815293044).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"request-op","request-op",1472997246),new cljs.core.Keyword(null,"edn","edn",1317840885),new cljs.core.Keyword(null,"oid","oid",-768692334),new cljs.core.Keyword(null,"ex-oid","ex-oid",-650256737).cljs$core$IFn$_invoke$arity$1(msg)], null));
});
repl_tooling.repl_client.shadow_ws.send_as_error_BANG_ = (function repl_tooling$repl_client$shadow_ws$send_as_error_BANG_(state,p__141896){
var map__141897 = p__141896;
var map__141897__$1 = cljs.core.__destructure_map(map__141897);
var msg = map__141897__$1;
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__141897__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__141897__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pending-evals","pending-evals",1249255957).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)),call_id);
if(cljs.core.truth_(temp__5753__auto__)){
var map__141899 = temp__5753__auto__;
var map__141899__$1 = cljs.core.__destructure_map(map__141899);
var row = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__141899__$1,new cljs.core.Keyword(null,"row","row",-570139521));
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__141899__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var trace = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__141900){
var map__141901 = p__141900;
var map__141901__$1 = cljs.core.__destructure_map(map__141901);
var msg__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__141901__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__141901__$1,new cljs.core.Keyword(null,"line","line",212345235));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.replace(msg__$1,/Use of.* (.*\/.*)$/,"$1"),null,file,((row + line) - (1))], null);
}),warnings);
return repl_tooling.repl_client.shadow_ws.resolve_pending_BANG_(state,msg,(function (){var G__141903 = "Compile Warning";
var G__141904 = clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"msg","msg",-1386103444),warnings));
var G__141905 = trace;
return (repl_tooling.editor_helpers.error_result.cljs$core$IFn$_invoke$arity$3 ? repl_tooling.editor_helpers.error_result.cljs$core$IFn$_invoke$arity$3(G__141903,G__141904,G__141905) : repl_tooling.editor_helpers.error_result.call(null,G__141903,G__141904,G__141905));
})());
} else {
return null;
}
});
repl_tooling.repl_client.shadow_ws.obj_not_found_BANG_ = (function repl_tooling$repl_client$shadow_ws$obj_not_found_BANG_(state,p__141907){
var map__141908 = p__141907;
var map__141908__$1 = cljs.core.__destructure_map(map__141908);
var msg = map__141908__$1;
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__141908__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pending-evals","pending-evals",1249255957).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)),call_id);
if(cljs.core.truth_(temp__5753__auto__)){
var map__141910 = temp__5753__auto__;
var map__141910__$1 = cljs.core.__destructure_map(map__141910);
var row = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__141910__$1,new cljs.core.Keyword(null,"row","row",-570139521));
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__141910__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return repl_tooling.repl_client.shadow_ws.resolve_pending_BANG_(state,msg,(function (){var G__141911 = "404";
var G__141912 = "Result not found";
var G__141913 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [file,null,null,row], null)], null);
return (repl_tooling.editor_helpers.error_result.cljs$core$IFn$_invoke$arity$3 ? repl_tooling.editor_helpers.error_result.cljs$core$IFn$_invoke$arity$3(G__141911,G__141912,G__141913) : repl_tooling.editor_helpers.error_result.call(null,G__141911,G__141912,G__141913));
})());
} else {
return null;
}
});
repl_tooling.repl_client.shadow_ws.send_output_BANG_ = (function repl_tooling$repl_client$shadow_ws$send_output_BANG_(state,p__141914){
var map__141915 = p__141914;
var map__141915__$1 = cljs.core.__destructure_map(map__141915);
var stream = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__141915__$1,new cljs.core.Keyword(null,"stream","stream",1534941648));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__141915__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var on_out = new cljs.core.Keyword(null,"on-output","on-output",-2023300495).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state));
var key = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"stdout","stdout",-531490018),stream))?new cljs.core.Keyword(null,"out","out",-910545517):new cljs.core.Keyword(null,"err","err",-2089457205));
var G__141916 = cljs.core.PersistentArrayMap.createAsIfByAssoc([key,text]);
return (on_out.cljs$core$IFn$_invoke$arity$1 ? on_out.cljs$core$IFn$_invoke$arity$1(G__141916) : on_out.call(null,G__141916));
});
repl_tooling.repl_client.shadow_ws.parse_compile_error_report = (function repl_tooling$repl_client$shadow_ws$parse_compile_error_report(report){
var prepare_stack = (function (p__141919){
var vec__141920 = p__141919;
var vec__141923 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__141920,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__141923,(0),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__141923,(1),null);
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__141923,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__141923,(3),null);
var vec__141926 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__141920,(1),null);
var error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__141926,(0),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"file","file",-1269645878),file,new cljs.core.Keyword(null,"line","line",212345235),row,new cljs.core.Keyword(null,"column","column",2078222095),col,new cljs.core.Keyword(null,"msg","msg",-1386103444),error], null);
});
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(prepare_stack,cljs.core.partition.cljs$core$IFn$_invoke$arity$3((2),(2),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (row){
var or__4223__auto__ = cljs.core.re_find(/File: (.*):(\d+):(\d+)/,row);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.re_find(/^([^\s-].*)/,row);
}
}),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((1),clojure.string.split_lines(report))))));
});
repl_tooling.repl_client.shadow_ws.compile_error_BANG_ = (function repl_tooling$repl_client$shadow_ws$compile_error_BANG_(state,msg){
var build_id = new cljs.core.Keyword(null,"build-id","build-id",1642831089).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state));
var on_out = new cljs.core.Keyword(null,"on-output","on-output",-2023300495).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state));
var build_status = new cljs.core.Keyword(null,"build-status","build-status",-144527287).cljs$core$IFn$_invoke$arity$1(msg);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(build_id,new cljs.core.Keyword(null,"build-id","build-id",1642831089).cljs$core$IFn$_invoke$arity$1(msg))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(build_status),new cljs.core.Keyword(null,"failed","failed",-1397425762))){
var G__141932 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"compile-err","compile-err",319516808),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"errors","errors",-908790718),new cljs.core.Keyword(null,"warnings","warnings",-735437651),repl_tooling.repl_client.shadow_ws.parse_compile_error_report(new cljs.core.Keyword(null,"report","report",1394055010).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"build-status","build-status",-144527287).cljs$core$IFn$_invoke$arity$1(msg)))], null)], null);
return (on_out.cljs$core$IFn$_invoke$arity$1 ? on_out.cljs$core$IFn$_invoke$arity$1(G__141932) : on_out.call(null,G__141932));
} else {
var temp__5753__auto__ = cljs.core.not_empty(new cljs.core.Keyword(null,"warnings","warnings",-735437651).cljs$core$IFn$_invoke$arity$1(build_status));
if(cljs.core.truth_(temp__5753__auto__)){
var warnings = temp__5753__auto__;
var G__141933 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"compile-err","compile-err",319516808),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"warnings","warnings",-735437651),new cljs.core.Keyword(null,"warnings","warnings",-735437651),warnings], null)], null);
return (on_out.cljs$core$IFn$_invoke$arity$1 ? on_out.cljs$core$IFn$_invoke$arity$1(G__141933) : on_out.call(null,G__141933));
} else {
return null;
}
}
} else {
return null;
}
});
repl_tooling.repl_client.shadow_ws.access_denied_BANG_ = (function repl_tooling$repl_client$shadow_ws$access_denied_BANG_(state){
new cljs.core.Keyword(null,"ws","ws",86841443).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)).end();

return promesa.core.resolve_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"evaluator","evaluator",704655039).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"access-denied","access-denied",959449406)], null));
});
repl_tooling.repl_client.shadow_ws.send_result_BANG_ = (function repl_tooling$repl_client$shadow_ws$send_result_BANG_(state,p__141935,msg){
var map__141936 = p__141935;
var map__141936__$1 = cljs.core.__destructure_map(map__141936);
var pass = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__141936__$1,new cljs.core.Keyword(null,"pass","pass",1574159993));
var res = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
var result = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(pass,new cljs.core.Keyword(null,"result","result",1415092211),res,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"as-text","as-text",-449861067),res], 0));
return repl_tooling.repl_client.shadow_ws.resolve_pending_BANG_(state,msg,result);
});
repl_tooling.repl_client.shadow_ws.tap_BANG_ = (function repl_tooling$repl_client$shadow_ws$tap_BANG_(state,msg){
return repl_tooling.repl_client.shadow_ws.send_BANG_(new cljs.core.Keyword(null,"ws","ws",86841443).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"obj-request","obj-request",-1709325811),new cljs.core.Keyword(null,"call-id","call-id",1043012968),cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("tap-result"),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"from","from",1815293044).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"request-op","request-op",1472997246),new cljs.core.Keyword(null,"edn","edn",1317840885),new cljs.core.Keyword(null,"oid","oid",-768692334),new cljs.core.Keyword(null,"oid","oid",-768692334).cljs$core$IFn$_invoke$arity$1(msg)], null));
});
repl_tooling.repl_client.shadow_ws.unexpected_obj_BANG_ = (function repl_tooling$repl_client$shadow_ws$unexpected_obj_BANG_(state,p__141940){
var map__141941 = p__141940;
var map__141941__$1 = cljs.core.__destructure_map(map__141941);
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__141941__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__141941__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var on_out = new cljs.core.Keyword(null,"on-output","on-output",-2023300495).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state));
var tapped_QMARK_ = clojure.string.starts_with_QMARK_(cljs.core.str.cljs$core$IFn$_invoke$arity$1(call_id),"tap-result");
var patch_QMARK_ = clojure.string.starts_with_QMARK_(result,"#repl-tooling/patch");
if(((tapped_QMARK_) && (patch_QMARK_))){
var vec__141942 = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"readers","readers",-2118263030),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("repl-tooling","patch","repl-tooling/patch",292795928,null),cljs.core.identity], null)], null),result);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__141942,(0),null);
var res = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__141942,(1),null);
var G__141946 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"patch","patch",380775109),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as-text","as-text",-449861067),res,new cljs.core.Keyword(null,"result","result",1415092211),res], null)], null)], null);
return (on_out.cljs$core$IFn$_invoke$arity$1 ? on_out.cljs$core$IFn$_invoke$arity$1(G__141946) : on_out.call(null,G__141946));
} else {
var G__141947 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),call_id,new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as-text","as-text",-449861067),result,new cljs.core.Keyword(null,"result","result",1415092211),result], null),new cljs.core.Keyword(null,"editor-data","editor-data",-2084300305),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"filename","filename",-1428840783),"<console>.cljs",new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)], null),new cljs.core.Keyword(null,"contents","contents",-1567174023),""], null),new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)], null)], null)], null);
return (on_out.cljs$core$IFn$_invoke$arity$1 ? on_out.cljs$core$IFn$_invoke$arity$1(G__141947) : on_out.call(null,G__141947));
}
});
var ufv___142101 = schema.utils.use_fn_validation;
var output_schema141949_142102 = schema.core.Any;
var input_schema141950_142103 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(repl_tooling.repl_client.shadow_ws.State,cljs.core.with_meta(new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"State","State",1487565184,null)], null))),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);
var input_checker141951_142104 = (new cljs.core.Delay((function (){
return schema.core.checker(input_schema141950_142103);
}),null));
var output_checker141952_142105 = (new cljs.core.Delay((function (){
return schema.core.checker(output_schema141949_142102);
}),null));
var ret__40409__auto___142106 = /**
 * Inputs: [state :- State {:keys [op call-id], :as msg}]
 */
repl_tooling.repl_client.shadow_ws.treat_ws_message_BANG_ = (function repl_tooling$repl_client$shadow_ws$treat_ws_message_BANG_(G__141953,G__141954){
var validate__38124__auto__ = cljs.core.deref(ufv___142101);
if(cljs.core.truth_(validate__38124__auto__)){
var args__38125__auto___142107 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__141953,G__141954], null);
if(cljs.core.truth_(schema.core.fn_validator)){
var G__141956_142108 = new cljs.core.Keyword(null,"input","input",556931961);
var G__141957_142109 = cljs.core.with_meta(new cljs.core.Symbol(null,"treat-ws-message!","treat-ws-message!",-1500949708,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null));
var G__141958_142110 = input_schema141950_142103;
var G__141959_142111 = cljs.core.deref(input_checker141951_142104);
var G__141960_142112 = args__38125__auto___142107;
(schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5 ? schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5(G__141956_142108,G__141957_142109,G__141958_142110,G__141959_142111,G__141960_142112) : schema.core.fn_validator.call(null,G__141956_142108,G__141957_142109,G__141958_142110,G__141959_142111,G__141960_142112));
} else {
var temp__5753__auto___142113 = (function (){var fexpr__141961 = cljs.core.deref(input_checker141951_142104);
return (fexpr__141961.cljs$core$IFn$_invoke$arity$1 ? fexpr__141961.cljs$core$IFn$_invoke$arity$1(args__38125__auto___142107) : fexpr__141961.call(null,args__38125__auto___142107));
})();
if(cljs.core.truth_(temp__5753__auto___142113)){
var error__38126__auto___142114 = temp__5753__auto___142113;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.with_meta(new cljs.core.Symbol(null,"treat-ws-message!","treat-ws-message!",-1500949708,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([error__38126__auto___142114], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema141950_142103,new cljs.core.Keyword(null,"value","value",305978217),args__38125__auto___142107,new cljs.core.Keyword(null,"error","error",-978969032),error__38126__auto___142114], null));
} else {
}
}
} else {
}

var o__38127__auto__ = (function (){var state = G__141953;
var G__141965 = G__141954;
var map__141966 = G__141965;
var map__141966__$1 = cljs.core.__destructure_map(map__141966);
var msg = map__141966__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__141966__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__141966__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state__$1 = state;
var G__141965__$1 = G__141965;
while(true){
var state__$2 = state__$1;
var map__141967 = G__141965__$1;
var map__141967__$1 = cljs.core.__destructure_map(map__141967);
var msg__$1 = map__141967__$1;
var op__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__141967__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__141967__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var temp__5751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pending-evals","pending-evals",1249255957).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state__$2)),call_id__$1);
if(cljs.core.truth_(temp__5751__auto__)){
var pending = temp__5751__auto__;
var G__141968 = op__$1;
var G__141968__$1 = (((G__141968 instanceof cljs.core.Keyword))?G__141968.fqn:null);
switch (G__141968__$1) {
case "obj-result":
return repl_tooling.repl_client.shadow_ws.capture_result_BANG_(state__$2,msg__$1);

break;
case "eval-runtime-error":
return repl_tooling.repl_client.shadow_ws.get_error_BANG_(state__$2,msg__$1);

break;
case "eval-compile-error":
return repl_tooling.repl_client.shadow_ws.get_error_BANG_(state__$2,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"ex-client-id","ex-client-id",-446123984).cljs$core$IFn$_invoke$arity$2(msg__$1,(1))));

break;
case "eval-compile-warnings":
return repl_tooling.repl_client.shadow_ws.send_as_error_BANG_(state__$2,msg__$1);

break;
case "eval-result-ref":
return repl_tooling.repl_client.shadow_ws.get_result_BANG_(state__$2,msg__$1);

break;
case "obj-not-found":
return repl_tooling.repl_client.shadow_ws.obj_not_found_BANG_(state__$2,msg__$1);

break;
default:
return repl_tooling.repl_client.shadow_ws.send_result_BANG_(state__$2,pending,msg__$1);

}
} else {
var G__141970 = op__$1;
var G__141970__$1 = (((G__141970 instanceof cljs.core.Keyword))?G__141970.fqn:null);
switch (G__141970__$1) {
case "welcome":
return repl_tooling.repl_client.shadow_ws.send_hello_BANG_(state__$2);

break;
case "clients":
return repl_tooling.repl_client.shadow_ws.parse_clients_BANG_(state__$2,msg__$1);

break;
case "notify":
return repl_tooling.repl_client.shadow_ws.update_builds_BANG_(state__$2,msg__$1);

break;
case "ping":
return repl_tooling.repl_client.shadow_ws.send_BANG_(new cljs.core.Keyword(null,"ws","ws",86841443).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state__$2)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));

break;
case "runtime-print":
return repl_tooling.repl_client.shadow_ws.send_output_BANG_(state__$2,msg__$1);

break;
case "shadow.cljs.model/sub-msg":
return repl_tooling.repl_client.shadow_ws.compile_error_BANG_(state__$2,msg__$1);

break;
case "access-denied":
return repl_tooling.repl_client.shadow_ws.access_denied_BANG_(state__$2);

break;
case "tap":
return repl_tooling.repl_client.shadow_ws.tap_BANG_(state__$2,msg__$1);

break;
case "obj-result":
return repl_tooling.repl_client.shadow_ws.unexpected_obj_BANG_(state__$2,msg__$1);

break;
default:
return cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),op__$1], 0));

}
}
break;
}
})();
if(cljs.core.truth_(validate__38124__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
var G__141972_142118 = new cljs.core.Keyword(null,"output","output",-1105869043);
var G__141973_142119 = cljs.core.with_meta(new cljs.core.Symbol(null,"treat-ws-message!","treat-ws-message!",-1500949708,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null));
var G__141974_142120 = output_schema141949_142102;
var G__141975_142121 = cljs.core.deref(output_checker141952_142105);
var G__141976_142122 = o__38127__auto__;
(schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5 ? schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5(G__141972_142118,G__141973_142119,G__141974_142120,G__141975_142121,G__141976_142122) : schema.core.fn_validator.call(null,G__141972_142118,G__141973_142119,G__141974_142120,G__141975_142121,G__141976_142122));
} else {
var temp__5753__auto___142125 = (function (){var fexpr__141977 = cljs.core.deref(output_checker141952_142105);
return (fexpr__141977.cljs$core$IFn$_invoke$arity$1 ? fexpr__141977.cljs$core$IFn$_invoke$arity$1(o__38127__auto__) : fexpr__141977.call(null,o__38127__auto__));
})();
if(cljs.core.truth_(temp__5753__auto___142125)){
var error__38126__auto___142129 = temp__5753__auto___142125;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.with_meta(new cljs.core.Symbol(null,"treat-ws-message!","treat-ws-message!",-1500949708,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([error__38126__auto___142129], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema141949_142102,new cljs.core.Keyword(null,"value","value",305978217),o__38127__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__38126__auto___142129], null));
} else {
}
}
} else {
}

return o__38127__auto__;
});
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(repl_tooling.repl_client.shadow_ws.treat_ws_message_BANG_),schema.core.__GT_FnSchema(output_schema141949_142102,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema141950_142103], null)));

repl_tooling.repl_client.shadow_ws.create_ws_conn_BANG_ = (function repl_tooling$repl_client$shadow_ws$create_ws_conn_BANG_(id,url,state){
try{var ws = (new shadow.js.shim.module$ws(url,({"rejectUnauthorized": false})));
var update_state_BANG_ = (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword(null,"ws","ws",86841443),ws);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(repl_tooling.integrations.repls.connections,cljs.core.assoc,id,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"conn","conn",278309663),ws,new cljs.core.Keyword(null,"buffer","buffer",617295198),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY)], null));
});
update_state_BANG_();

var G__141983_142132 = ws;
(G__141983_142132["onmessage"] = (function (p1__141979_SHARP_){
var reader = cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"json","json",1279968570));
var payload = cognitect.transit.read(reader,p1__141979_SHARP_.data);
return repl_tooling.repl_client.shadow_ws.treat_ws_message_BANG_(state,payload);
}));

(G__141983_142132["onerror"] = (function (e){
ws.end();

console.log(e);

return promesa.core.resolve_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"evaluator","evaluator",704655039).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),e.message], null));
}));

(G__141983_142132["onclose"] = (function (_){
var map__141984 = cljs.core.deref(state);
var map__141984__$1 = cljs.core.__destructure_map(map__141984);
var on_output = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__141984__$1,new cljs.core.Keyword(null,"on-output","on-output",-2023300495));
var should_disconnect_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__141984__$1,new cljs.core.Keyword(null,"should-disconnect?","should-disconnect?",-426700894));
if(cljs.core.truth_(should_disconnect_QMARK_)){
return (on_output.cljs$core$IFn$_invoke$arity$1 ? on_output.cljs$core$IFn$_invoke$arity$1(null) : on_output.call(null,null));
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1((repl_tooling.repl_client.shadow_ws.create_ws_conn_BANG_.cljs$core$IFn$_invoke$arity$3 ? repl_tooling.repl_client.shadow_ws.create_ws_conn_BANG_.cljs$core$IFn$_invoke$arity$3(id,url,state) : repl_tooling.repl_client.shadow_ws.create_ws_conn_BANG_.call(null,id,url,state))))){
return (on_output.cljs$core$IFn$_invoke$arity$1 ? on_output.cljs$core$IFn$_invoke$arity$1(null) : on_output.call(null,null));
} else {
return null;
}
}
}));

(G__141983_142132["end"] = (function (_){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword(null,"should-disconnect?","should-disconnect?",-426700894),true);

return ws.close();
}));


return ws;
}catch (e141981){var e = e141981;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),e.message], null);
}});
repl_tooling.repl_client.shadow_ws.connect_BANG_ = (function repl_tooling$repl_client$shadow_ws$connect_BANG_(p__141986){
var map__141987 = p__141986;
var map__141987__$1 = cljs.core.__destructure_map(map__141987);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__141987__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var build_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__141987__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
var host = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__141987__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
var port = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__141987__$1,new cljs.core.Keyword(null,"port","port",1534937262));
var token = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__141987__$1,new cljs.core.Keyword(null,"token","token",-1211463215));
var on_output = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__141987__$1,new cljs.core.Keyword(null,"on-output","on-output",-2023300495));
var ssl_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__141987__$1,new cljs.core.Keyword(null,"ssl?","ssl?",1502872597));
var p = promesa.core.deferred();
var state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"build-id","build-id",1642831089),build_id,new cljs.core.Keyword(null,"should-disconnect?","should-disconnect?",-426700894),false,new cljs.core.Keyword(null,"evaluator","evaluator",704655039),p,new cljs.core.Keyword(null,"on-output","on-output",-2023300495),(function (){var or__4223__auto__ = on_output;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.identity;
}
})(),new cljs.core.Keyword(null,"pending-evals","pending-evals",1249255957),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"build->id","build->id",-340112667),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"id->build","id->build",-541876518),cljs.core.PersistentArrayMap.EMPTY], null));
var ws = repl_tooling.repl_client.shadow_ws.create_ws_conn_BANG_(id,[(cljs.core.truth_(ssl_QMARK_)?"wss://":"ws://"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(host),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(port),"/api/remote-relay?server-token=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(token)].join(''),state);
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(ws))){
return promesa.core.promise.cljs$core$IFn$_invoke$arity$1(ws);
} else {
return p;
}
});

//# sourceMappingURL=repl_tooling.repl_client.shadow_ws.js.map
