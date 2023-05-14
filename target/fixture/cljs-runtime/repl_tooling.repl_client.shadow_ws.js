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
promesa.core.resolve_BANG_.cljs$core$IFn$_invoke$arity$2(prom,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"pass","pass",1574159993).cljs$core$IFn$_invoke$arity$1(opts),(function (){var G__139284 = "Syntax Error";
var G__139285 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(blobbed_code);
var G__139286 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [file,null,build_id,row], null)], null);
return (repl_tooling.editor_helpers.error_result.cljs$core$IFn$_invoke$arity$3 ? repl_tooling.editor_helpers.error_result.cljs$core$IFn$_invoke$arity$3(G__139284,G__139285,G__139286) : repl_tooling.editor_helpers.error_result.call(null,G__139284,G__139285,G__139286));
})()], 0)));
} else {
if(cljs.core.truth_(client_id)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update,new cljs.core.Keyword(null,"pending-evals","pending-evals",1249255957),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"promise","promise",1767129287),prom,new cljs.core.Keyword(null,"file","file",-1269645878),file,new cljs.core.Keyword(null,"row","row",-570139521),row,new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"pass","pass",1574159993).cljs$core$IFn$_invoke$arity$1(opts)], null)], 0));

repl_tooling.repl_client.shadow_ws.send_BANG_(ws,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-eval","cljs-eval",1860675817),new cljs.core.Keyword(null,"to","to",192099007),client_id,new cljs.core.Keyword(null,"call-id","call-id",1043012968),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(blobbed_code),new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(namespace)], null)], null));
} else {
promesa.core.resolve_BANG_.cljs$core$IFn$_invoke$arity$2(prom,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"pass","pass",1574159993).cljs$core$IFn$_invoke$arity$1(opts),(function (){var G__139288 = "No clients connected";
var G__139289 = ["No clients connected to ","the runtime ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(build_id)].join('');
var G__139290 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [file,null,build_id,row], null)], null);
return (repl_tooling.editor_helpers.error_result.cljs$core$IFn$_invoke$arity$3 ? repl_tooling.editor_helpers.error_result.cljs$core$IFn$_invoke$arity$3(G__139288,G__139289,G__139290) : repl_tooling.editor_helpers.error_result.call(null,G__139288,G__139289,G__139290));
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

(repl_tooling.repl_client.shadow_ws.ShadowCLJS.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k139297,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__139314 = k139297;
var G__139314__$1 = (((G__139314 instanceof cljs.core.Keyword))?G__139314.fqn:null);
switch (G__139314__$1) {
case "state":
return self__.state;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k139297,else__4475__auto__);

}
}));

(repl_tooling.repl_client.shadow_ws.ShadowCLJS.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__139315){
var vec__139316 = p__139315;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__139316,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__139316,(1),null);
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

(repl_tooling.repl_client.shadow_ws.ShadowCLJS.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__139296){
var self__ = this;
var G__139296__$1 = this;
return (new cljs.core.RecordIter((0),G__139296__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state","state",-1988618099)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(repl_tooling.repl_client.shadow_ws.ShadowCLJS.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this139298,other139299){
var self__ = this;
var this139298__$1 = this;
return (((!((other139299 == null)))) && ((((this139298__$1.constructor === other139299.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this139298__$1.state,other139299.state)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this139298__$1.__extmap,other139299.__extmap)))))));
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

(repl_tooling.repl_client.shadow_ws.ShadowCLJS.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k139297){
var self__ = this;
var this__4479__auto____$1 = this;
var G__139327 = k139297;
var G__139327__$1 = (((G__139327 instanceof cljs.core.Keyword))?G__139327.fqn:null);
switch (G__139327__$1) {
case "state":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k139297);

}
}));

(repl_tooling.repl_client.shadow_ws.ShadowCLJS.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__139296){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__139328 = cljs.core.keyword_identical_QMARK_;
var expr__139329 = k__4481__auto__;
if(cljs.core.truth_((pred__139328.cljs$core$IFn$_invoke$arity$2 ? pred__139328.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"state","state",-1988618099),expr__139329) : pred__139328.call(null,new cljs.core.Keyword(null,"state","state",-1988618099),expr__139329)))){
return (new repl_tooling.repl_client.shadow_ws.ShadowCLJS(G__139296,self__.__meta,self__.__extmap,null));
} else {
return (new repl_tooling.repl_client.shadow_ws.ShadowCLJS(self__.state,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__139296),null));
}
}));

(repl_tooling.repl_client.shadow_ws.ShadowCLJS.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"state","state",-1988618099),self__.state,null))], null),self__.__extmap));
}));

(repl_tooling.repl_client.shadow_ws.ShadowCLJS.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__139296){
var self__ = this;
var this__4471__auto____$1 = this;
return (new repl_tooling.repl_client.shadow_ws.ShadowCLJS(self__.state,G__139296,self__.__extmap,self__.__hash));
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
repl_tooling.repl_client.shadow_ws.map__GT_ShadowCLJS = (function repl_tooling$repl_client$shadow_ws$map__GT_ShadowCLJS(G__139300){
var extmap__4512__auto__ = (function (){var G__139349 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__139300,new cljs.core.Keyword(null,"state","state",-1988618099));
if(cljs.core.record_QMARK_(G__139300)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__139349);
} else {
return G__139349;
}
})();
return (new repl_tooling.repl_client.shadow_ws.ShadowCLJS(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(G__139300),null,cljs.core.not_empty(extmap__4512__auto__),null));
});

repl_tooling.repl_client.shadow_ws.send_hello_BANG_ = (function repl_tooling$repl_client$shadow_ws$send_hello_BANG_(state){
var map__139355 = cljs.core.deref(state);
var map__139355__$1 = cljs.core.__destructure_map(map__139355);
var ws = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__139355__$1,new cljs.core.Keyword(null,"ws","ws",86841443));
var evaluator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__139355__$1,new cljs.core.Keyword(null,"evaluator","evaluator",704655039));
repl_tooling.repl_client.shadow_ws.send_BANG_(ws,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor","editor",-989377770),new cljs.core.Keyword(null,"repl-tooling","repl-tooling",857049704)], null)], null));

repl_tooling.repl_client.shadow_ws.send_BANG_(ws,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"request-clients","request-clients",13229886),new cljs.core.Keyword(null,"notify","notify",-1256867814),true,new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"and","and",-971899817),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"eq","eq",-618539067),new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"cljs","cljs",1492417629)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"eq","eq",-618539067),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"runtime","runtime",-1331573996)], null)], null)], null));

repl_tooling.repl_client.shadow_ws.send_BANG_(ws,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword("shadow.cljs.model","subscribe","shadow.cljs.model/subscribe",558638855),new cljs.core.Keyword(null,"to","to",192099007),(1),new cljs.core.Keyword("shadow.cljs.model","topic","shadow.cljs.model/topic",-1801858664),new cljs.core.Keyword("shadow.cljs.model","build-status-update","shadow.cljs.model/build-status-update",-2118551008)], null));

return promesa.core.resolve_BANG_.cljs$core$IFn$_invoke$arity$2(evaluator,repl_tooling.repl_client.shadow_ws.__GT_ShadowCLJS(state));
});
repl_tooling.repl_client.shadow_ws.listen_to_events_BANG_ = (function repl_tooling$repl_client$shadow_ws$listen_to_events_BANG_(state){
var map__139357 = cljs.core.deref(state);
var map__139357__$1 = cljs.core.__destructure_map(map__139357);
var ws = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__139357__$1,new cljs.core.Keyword(null,"ws","ws",86841443));
var build_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__139357__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
var builds = new cljs.core.Keyword(null,"build->id","build->id",-340112667).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state));
var seq__139364_139768 = cljs.core.seq(builds);
var chunk__139369_139769 = null;
var count__139370_139770 = (0);
var i__139371_139771 = (0);
while(true){
if((i__139371_139771 < count__139370_139770)){
var vec__139384_139772 = chunk__139369_139769.cljs$core$IIndexed$_nth$arity$2(null,i__139371_139771);
var __139773 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__139384_139772,(0),null);
var ids_139774 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__139384_139772,(1),null);
var seq__139372_139775 = cljs.core.seq(ids_139774);
var chunk__139373_139776 = null;
var count__139374_139777 = (0);
var i__139375_139778 = (0);
while(true){
if((i__139375_139778 < count__139374_139777)){
var id_139779 = chunk__139373_139776.cljs$core$IIndexed$_nth$arity$2(null,i__139375_139778);
repl_tooling.repl_client.shadow_ws.send_BANG_(ws,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"runtime-print-unsub","runtime-print-unsub",2055442536),new cljs.core.Keyword(null,"to","to",192099007),id_139779], null));

repl_tooling.repl_client.shadow_ws.send_BANG_(ws,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),new cljs.core.Keyword(null,"to","to",192099007),id_139779], null));


var G__139780 = seq__139372_139775;
var G__139781 = chunk__139373_139776;
var G__139782 = count__139374_139777;
var G__139783 = (i__139375_139778 + (1));
seq__139372_139775 = G__139780;
chunk__139373_139776 = G__139781;
count__139374_139777 = G__139782;
i__139375_139778 = G__139783;
continue;
} else {
var temp__5753__auto___139785 = cljs.core.seq(seq__139372_139775);
if(temp__5753__auto___139785){
var seq__139372_139787__$1 = temp__5753__auto___139785;
if(cljs.core.chunked_seq_QMARK_(seq__139372_139787__$1)){
var c__4649__auto___139788 = cljs.core.chunk_first(seq__139372_139787__$1);
var G__139789 = cljs.core.chunk_rest(seq__139372_139787__$1);
var G__139790 = c__4649__auto___139788;
var G__139791 = cljs.core.count(c__4649__auto___139788);
var G__139792 = (0);
seq__139372_139775 = G__139789;
chunk__139373_139776 = G__139790;
count__139374_139777 = G__139791;
i__139375_139778 = G__139792;
continue;
} else {
var id_139793 = cljs.core.first(seq__139372_139787__$1);
repl_tooling.repl_client.shadow_ws.send_BANG_(ws,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"runtime-print-unsub","runtime-print-unsub",2055442536),new cljs.core.Keyword(null,"to","to",192099007),id_139793], null));

repl_tooling.repl_client.shadow_ws.send_BANG_(ws,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),new cljs.core.Keyword(null,"to","to",192099007),id_139793], null));


var G__139798 = cljs.core.next(seq__139372_139787__$1);
var G__139799 = null;
var G__139800 = (0);
var G__139801 = (0);
seq__139372_139775 = G__139798;
chunk__139373_139776 = G__139799;
count__139374_139777 = G__139800;
i__139375_139778 = G__139801;
continue;
}
} else {
}
}
break;
}

var G__139802 = seq__139364_139768;
var G__139803 = chunk__139369_139769;
var G__139804 = count__139370_139770;
var G__139805 = (i__139371_139771 + (1));
seq__139364_139768 = G__139802;
chunk__139369_139769 = G__139803;
count__139370_139770 = G__139804;
i__139371_139771 = G__139805;
continue;
} else {
var temp__5753__auto___139806 = cljs.core.seq(seq__139364_139768);
if(temp__5753__auto___139806){
var seq__139364_139807__$1 = temp__5753__auto___139806;
if(cljs.core.chunked_seq_QMARK_(seq__139364_139807__$1)){
var c__4649__auto___139809 = cljs.core.chunk_first(seq__139364_139807__$1);
var G__139810 = cljs.core.chunk_rest(seq__139364_139807__$1);
var G__139811 = c__4649__auto___139809;
var G__139812 = cljs.core.count(c__4649__auto___139809);
var G__139813 = (0);
seq__139364_139768 = G__139810;
chunk__139369_139769 = G__139811;
count__139370_139770 = G__139812;
i__139371_139771 = G__139813;
continue;
} else {
var vec__139395_139814 = cljs.core.first(seq__139364_139807__$1);
var __139815 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__139395_139814,(0),null);
var ids_139816 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__139395_139814,(1),null);
var seq__139365_139817 = cljs.core.seq(ids_139816);
var chunk__139366_139818 = null;
var count__139367_139819 = (0);
var i__139368_139820 = (0);
while(true){
if((i__139368_139820 < count__139367_139819)){
var id_139821 = chunk__139366_139818.cljs$core$IIndexed$_nth$arity$2(null,i__139368_139820);
repl_tooling.repl_client.shadow_ws.send_BANG_(ws,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"runtime-print-unsub","runtime-print-unsub",2055442536),new cljs.core.Keyword(null,"to","to",192099007),id_139821], null));

repl_tooling.repl_client.shadow_ws.send_BANG_(ws,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),new cljs.core.Keyword(null,"to","to",192099007),id_139821], null));


var G__139822 = seq__139365_139817;
var G__139823 = chunk__139366_139818;
var G__139824 = count__139367_139819;
var G__139825 = (i__139368_139820 + (1));
seq__139365_139817 = G__139822;
chunk__139366_139818 = G__139823;
count__139367_139819 = G__139824;
i__139368_139820 = G__139825;
continue;
} else {
var temp__5753__auto___139826__$1 = cljs.core.seq(seq__139365_139817);
if(temp__5753__auto___139826__$1){
var seq__139365_139828__$1 = temp__5753__auto___139826__$1;
if(cljs.core.chunked_seq_QMARK_(seq__139365_139828__$1)){
var c__4649__auto___139829 = cljs.core.chunk_first(seq__139365_139828__$1);
var G__139830 = cljs.core.chunk_rest(seq__139365_139828__$1);
var G__139831 = c__4649__auto___139829;
var G__139832 = cljs.core.count(c__4649__auto___139829);
var G__139833 = (0);
seq__139365_139817 = G__139830;
chunk__139366_139818 = G__139831;
count__139367_139819 = G__139832;
i__139368_139820 = G__139833;
continue;
} else {
var id_139834 = cljs.core.first(seq__139365_139828__$1);
repl_tooling.repl_client.shadow_ws.send_BANG_(ws,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"runtime-print-unsub","runtime-print-unsub",2055442536),new cljs.core.Keyword(null,"to","to",192099007),id_139834], null));

repl_tooling.repl_client.shadow_ws.send_BANG_(ws,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),new cljs.core.Keyword(null,"to","to",192099007),id_139834], null));


var G__139836 = cljs.core.next(seq__139365_139828__$1);
var G__139837 = null;
var G__139838 = (0);
var G__139839 = (0);
seq__139365_139817 = G__139836;
chunk__139366_139818 = G__139837;
count__139367_139819 = G__139838;
i__139368_139820 = G__139839;
continue;
}
} else {
}
}
break;
}

var G__139840 = cljs.core.next(seq__139364_139807__$1);
var G__139841 = null;
var G__139842 = (0);
var G__139843 = (0);
seq__139364_139768 = G__139840;
chunk__139369_139769 = G__139841;
count__139370_139770 = G__139842;
i__139371_139771 = G__139843;
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
repl_tooling.repl_client.shadow_ws.parse_clients_BANG_ = (function repl_tooling$repl_client$shadow_ws$parse_clients_BANG_(state,p__139400){
var map__139401 = p__139400;
var map__139401__$1 = cljs.core.__destructure_map(map__139401);
var clients = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__139401__$1,new cljs.core.Keyword(null,"clients","clients",1436018090));
var build_id = new cljs.core.Keyword(null,"build-id","build-id",1642831089).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state));
var shadow_ids = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (v){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(v,(1),(function (p1__139399_SHARP_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-id","client-id",-464622140),p1__139399_SHARP_);
}));
}),cljs.core.group_by((function (p1__139398_SHARP_){
return new cljs.core.Keyword(null,"build-id","build-id",1642831089).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-info","client-info",1958982504).cljs$core$IFn$_invoke$arity$1(p1__139398_SHARP_));
}),clients)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.assoc,new cljs.core.Keyword(null,"build->id","build->id",-340112667),shadow_ids,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id->build","id->build",-541876518),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4622__auto__ = (function repl_tooling$repl_client$shadow_ws$parse_clients_BANG__$_iter__139412(s__139413){
return (new cljs.core.LazySeq(null,(function (){
var s__139413__$1 = s__139413;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__139413__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var vec__139419 = cljs.core.first(xs__6308__auto__);
var build_id__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__139419,(0),null);
var ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__139419,(1),null);
var iterys__4618__auto__ = ((function (s__139413__$1,vec__139419,build_id__$1,ids,xs__6308__auto__,temp__5753__auto__,build_id,shadow_ids,map__139401,map__139401__$1,clients){
return (function repl_tooling$repl_client$shadow_ws$parse_clients_BANG__$_iter__139412_$_iter__139414(s__139415){
return (new cljs.core.LazySeq(null,((function (s__139413__$1,vec__139419,build_id__$1,ids,xs__6308__auto__,temp__5753__auto__,build_id,shadow_ids,map__139401,map__139401__$1,clients){
return (function (){
var s__139415__$1 = s__139415;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__139415__$1);
if(temp__5753__auto____$1){
var s__139415__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__139415__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__139415__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__139417 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__139416 = (0);
while(true){
if((i__139416 < size__4621__auto__)){
var id = cljs.core._nth(c__4620__auto__,i__139416);
cljs.core.chunk_append(b__139417,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,build_id__$1], null));

var G__139849 = (i__139416 + (1));
i__139416 = G__139849;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__139417),repl_tooling$repl_client$shadow_ws$parse_clients_BANG__$_iter__139412_$_iter__139414(cljs.core.chunk_rest(s__139415__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__139417),null);
}
} else {
var id = cljs.core.first(s__139415__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,build_id__$1], null),repl_tooling$repl_client$shadow_ws$parse_clients_BANG__$_iter__139412_$_iter__139414(cljs.core.rest(s__139415__$2)));
}
} else {
return null;
}
break;
}
});})(s__139413__$1,vec__139419,build_id__$1,ids,xs__6308__auto__,temp__5753__auto__,build_id,shadow_ids,map__139401,map__139401__$1,clients))
,null,null));
});})(s__139413__$1,vec__139419,build_id__$1,ids,xs__6308__auto__,temp__5753__auto__,build_id,shadow_ids,map__139401,map__139401__$1,clients))
;
var fs__4619__auto__ = cljs.core.seq(iterys__4618__auto__(ids));
if(fs__4619__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4619__auto__,repl_tooling$repl_client$shadow_ws$parse_clients_BANG__$_iter__139412(cljs.core.rest(s__139413__$1)));
} else {
var G__139851 = cljs.core.rest(s__139413__$1);
s__139413__$1 = G__139851;
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
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(st,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"build->id","build->id",-340112667),build_id], null),(function (p1__139426_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var or__4223__auto__ = p1__139426_SHARP_;
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
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$4(st,new cljs.core.Keyword(null,"id->build","id->build",-541876518),cljs.core.dissoc,client_id),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"build->id","build->id",-340112667),build_id], null),(function (p1__139431_SHARP_){
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,client_id),p1__139431_SHARP_));
}));
});
repl_tooling.repl_client.shadow_ws.update_builds_BANG_ = (function repl_tooling$repl_client$shadow_ws$update_builds_BANG_(state,p__139446){
var map__139448 = p__139446;
var map__139448__$1 = cljs.core.__destructure_map(map__139448);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__139448__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__139448__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__139448__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,(function (p1__139444_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
return repl_tooling.repl_client.shadow_ws.add_id(p1__139444_SHARP_,client_id,new cljs.core.Keyword(null,"build-id","build-id",1642831089).cljs$core$IFn$_invoke$arity$1(client_info));
} else {
return repl_tooling.repl_client.shadow_ws.remove_id(p1__139444_SHARP_,client_id);
}
}));

return repl_tooling.repl_client.shadow_ws.listen_to_events_BANG_(state);
});
repl_tooling.repl_client.shadow_ws.resolve_pending_BANG_ = (function repl_tooling$repl_client$shadow_ws$resolve_pending_BANG_(state,p__139451,result){
var map__139452 = p__139451;
var map__139452__$1 = cljs.core.__destructure_map(map__139452);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__139452__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var map__139453 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pending-evals","pending-evals",1249255957).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)),call_id);
var map__139453__$1 = cljs.core.__destructure_map(map__139453);
var promise = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__139453__$1,new cljs.core.Keyword(null,"promise","promise",1767129287));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update,new cljs.core.Keyword(null,"pending-evals","pending-evals",1249255957),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return promesa.core.resolve_BANG_.cljs$core$IFn$_invoke$arity$2(promise,result);
});
repl_tooling.repl_client.shadow_ws.capture_result_BANG_ = (function repl_tooling$repl_client$shadow_ws$capture_result_BANG_(state,p__139456){
var map__139457 = p__139456;
var map__139457__$1 = cljs.core.__destructure_map(map__139457);
var msg = map__139457__$1;
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__139457__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__139457__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pending-evals","pending-evals",1249255957).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)),call_id);
if(cljs.core.truth_(temp__5753__auto__)){
var map__139458 = temp__5753__auto__;
var map__139458__$1 = cljs.core.__destructure_map(map__139458);
var success_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__139458__$1,new cljs.core.Keyword(null,"success?","success?",-122854052));
var pass = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__139458__$1,new cljs.core.Keyword(null,"pass","pass",1574159993));
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
repl_tooling.repl_client.shadow_ws.send_as_error_BANG_ = (function repl_tooling$repl_client$shadow_ws$send_as_error_BANG_(state,p__139471){
var map__139479 = p__139471;
var map__139479__$1 = cljs.core.__destructure_map(map__139479);
var msg = map__139479__$1;
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__139479__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__139479__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pending-evals","pending-evals",1249255957).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)),call_id);
if(cljs.core.truth_(temp__5753__auto__)){
var map__139482 = temp__5753__auto__;
var map__139482__$1 = cljs.core.__destructure_map(map__139482);
var row = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__139482__$1,new cljs.core.Keyword(null,"row","row",-570139521));
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__139482__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var trace = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__139483){
var map__139485 = p__139483;
var map__139485__$1 = cljs.core.__destructure_map(map__139485);
var msg__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__139485__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__139485__$1,new cljs.core.Keyword(null,"line","line",212345235));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.replace(msg__$1,/Use of.* (.*\/.*)$/,"$1"),null,file,((row + line) - (1))], null);
}),warnings);
return repl_tooling.repl_client.shadow_ws.resolve_pending_BANG_(state,msg,(function (){var G__139488 = "Compile Warning";
var G__139489 = clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"msg","msg",-1386103444),warnings));
var G__139490 = trace;
return (repl_tooling.editor_helpers.error_result.cljs$core$IFn$_invoke$arity$3 ? repl_tooling.editor_helpers.error_result.cljs$core$IFn$_invoke$arity$3(G__139488,G__139489,G__139490) : repl_tooling.editor_helpers.error_result.call(null,G__139488,G__139489,G__139490));
})());
} else {
return null;
}
});
repl_tooling.repl_client.shadow_ws.obj_not_found_BANG_ = (function repl_tooling$repl_client$shadow_ws$obj_not_found_BANG_(state,p__139576){
var map__139578 = p__139576;
var map__139578__$1 = cljs.core.__destructure_map(map__139578);
var msg = map__139578__$1;
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__139578__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pending-evals","pending-evals",1249255957).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)),call_id);
if(cljs.core.truth_(temp__5753__auto__)){
var map__139586 = temp__5753__auto__;
var map__139586__$1 = cljs.core.__destructure_map(map__139586);
var row = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__139586__$1,new cljs.core.Keyword(null,"row","row",-570139521));
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__139586__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return repl_tooling.repl_client.shadow_ws.resolve_pending_BANG_(state,msg,(function (){var G__139587 = "404";
var G__139588 = "Result not found";
var G__139589 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [file,null,null,row], null)], null);
return (repl_tooling.editor_helpers.error_result.cljs$core$IFn$_invoke$arity$3 ? repl_tooling.editor_helpers.error_result.cljs$core$IFn$_invoke$arity$3(G__139587,G__139588,G__139589) : repl_tooling.editor_helpers.error_result.call(null,G__139587,G__139588,G__139589));
})());
} else {
return null;
}
});
repl_tooling.repl_client.shadow_ws.send_output_BANG_ = (function repl_tooling$repl_client$shadow_ws$send_output_BANG_(state,p__139594){
var map__139595 = p__139594;
var map__139595__$1 = cljs.core.__destructure_map(map__139595);
var stream = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__139595__$1,new cljs.core.Keyword(null,"stream","stream",1534941648));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__139595__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var on_out = new cljs.core.Keyword(null,"on-output","on-output",-2023300495).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state));
var key = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"stdout","stdout",-531490018),stream))?new cljs.core.Keyword(null,"out","out",-910545517):new cljs.core.Keyword(null,"err","err",-2089457205));
var G__139597 = cljs.core.PersistentArrayMap.createAsIfByAssoc([key,text]);
return (on_out.cljs$core$IFn$_invoke$arity$1 ? on_out.cljs$core$IFn$_invoke$arity$1(G__139597) : on_out.call(null,G__139597));
});
repl_tooling.repl_client.shadow_ws.parse_compile_error_report = (function repl_tooling$repl_client$shadow_ws$parse_compile_error_report(report){
var prepare_stack = (function (p__139602){
var vec__139603 = p__139602;
var vec__139606 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__139603,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__139606,(0),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__139606,(1),null);
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__139606,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__139606,(3),null);
var vec__139609 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__139603,(1),null);
var error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__139609,(0),null);
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
var G__139625 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"compile-err","compile-err",319516808),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"errors","errors",-908790718),new cljs.core.Keyword(null,"warnings","warnings",-735437651),repl_tooling.repl_client.shadow_ws.parse_compile_error_report(new cljs.core.Keyword(null,"report","report",1394055010).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"build-status","build-status",-144527287).cljs$core$IFn$_invoke$arity$1(msg)))], null)], null);
return (on_out.cljs$core$IFn$_invoke$arity$1 ? on_out.cljs$core$IFn$_invoke$arity$1(G__139625) : on_out.call(null,G__139625));
} else {
var temp__5753__auto__ = cljs.core.not_empty(new cljs.core.Keyword(null,"warnings","warnings",-735437651).cljs$core$IFn$_invoke$arity$1(build_status));
if(cljs.core.truth_(temp__5753__auto__)){
var warnings = temp__5753__auto__;
var G__139628 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"compile-err","compile-err",319516808),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"warnings","warnings",-735437651),new cljs.core.Keyword(null,"warnings","warnings",-735437651),warnings], null)], null);
return (on_out.cljs$core$IFn$_invoke$arity$1 ? on_out.cljs$core$IFn$_invoke$arity$1(G__139628) : on_out.call(null,G__139628));
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
repl_tooling.repl_client.shadow_ws.send_result_BANG_ = (function repl_tooling$repl_client$shadow_ws$send_result_BANG_(state,p__139635,msg){
var map__139636 = p__139635;
var map__139636__$1 = cljs.core.__destructure_map(map__139636);
var pass = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__139636__$1,new cljs.core.Keyword(null,"pass","pass",1574159993));
var res = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
var result = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(pass,new cljs.core.Keyword(null,"result","result",1415092211),res,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"as-text","as-text",-449861067),res], 0));
return repl_tooling.repl_client.shadow_ws.resolve_pending_BANG_(state,msg,result);
});
repl_tooling.repl_client.shadow_ws.tap_BANG_ = (function repl_tooling$repl_client$shadow_ws$tap_BANG_(state,msg){
return repl_tooling.repl_client.shadow_ws.send_BANG_(new cljs.core.Keyword(null,"ws","ws",86841443).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"obj-request","obj-request",-1709325811),new cljs.core.Keyword(null,"call-id","call-id",1043012968),cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("tap-result"),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"from","from",1815293044).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"request-op","request-op",1472997246),new cljs.core.Keyword(null,"edn","edn",1317840885),new cljs.core.Keyword(null,"oid","oid",-768692334),new cljs.core.Keyword(null,"oid","oid",-768692334).cljs$core$IFn$_invoke$arity$1(msg)], null));
});
repl_tooling.repl_client.shadow_ws.unexpected_obj_BANG_ = (function repl_tooling$repl_client$shadow_ws$unexpected_obj_BANG_(state,p__139643){
var map__139644 = p__139643;
var map__139644__$1 = cljs.core.__destructure_map(map__139644);
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__139644__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__139644__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var on_out = new cljs.core.Keyword(null,"on-output","on-output",-2023300495).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state));
var tapped_QMARK_ = clojure.string.starts_with_QMARK_(cljs.core.str.cljs$core$IFn$_invoke$arity$1(call_id),"tap-result");
var patch_QMARK_ = clojure.string.starts_with_QMARK_(result,"#repl-tooling/patch");
if(((tapped_QMARK_) && (patch_QMARK_))){
var vec__139648 = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"readers","readers",-2118263030),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("repl-tooling","patch","repl-tooling/patch",292795928,null),cljs.core.identity], null)], null),result);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__139648,(0),null);
var res = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__139648,(1),null);
var G__139652 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"patch","patch",380775109),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as-text","as-text",-449861067),res,new cljs.core.Keyword(null,"result","result",1415092211),res], null)], null)], null);
return (on_out.cljs$core$IFn$_invoke$arity$1 ? on_out.cljs$core$IFn$_invoke$arity$1(G__139652) : on_out.call(null,G__139652));
} else {
var G__139653 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),call_id,new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as-text","as-text",-449861067),result,new cljs.core.Keyword(null,"result","result",1415092211),result], null),new cljs.core.Keyword(null,"editor-data","editor-data",-2084300305),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"filename","filename",-1428840783),"<console>.cljs",new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)], null),new cljs.core.Keyword(null,"contents","contents",-1567174023),""], null),new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)], null)], null)], null);
return (on_out.cljs$core$IFn$_invoke$arity$1 ? on_out.cljs$core$IFn$_invoke$arity$1(G__139653) : on_out.call(null,G__139653));
}
});
var ufv___139935 = schema.utils.use_fn_validation;
var output_schema139654_139936 = schema.core.Any;
var input_schema139655_139937 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(repl_tooling.repl_client.shadow_ws.State,cljs.core.with_meta(new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"State","State",1487565184,null)], null))),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);
var input_checker139656_139938 = (new cljs.core.Delay((function (){
return schema.core.checker(input_schema139655_139937);
}),null));
var output_checker139657_139939 = (new cljs.core.Delay((function (){
return schema.core.checker(output_schema139654_139936);
}),null));
var ret__40409__auto___139941 = /**
 * Inputs: [state :- State {:keys [op call-id], :as msg}]
 */
repl_tooling.repl_client.shadow_ws.treat_ws_message_BANG_ = (function repl_tooling$repl_client$shadow_ws$treat_ws_message_BANG_(G__139658,G__139659){
var validate__38124__auto__ = cljs.core.deref(ufv___139935);
if(cljs.core.truth_(validate__38124__auto__)){
var args__38125__auto___139942 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__139658,G__139659], null);
if(cljs.core.truth_(schema.core.fn_validator)){
var G__139662_139943 = new cljs.core.Keyword(null,"input","input",556931961);
var G__139663_139944 = cljs.core.with_meta(new cljs.core.Symbol(null,"treat-ws-message!","treat-ws-message!",-1500949708,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null));
var G__139664_139945 = input_schema139655_139937;
var G__139665_139946 = cljs.core.deref(input_checker139656_139938);
var G__139666_139947 = args__38125__auto___139942;
(schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5 ? schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5(G__139662_139943,G__139663_139944,G__139664_139945,G__139665_139946,G__139666_139947) : schema.core.fn_validator.call(null,G__139662_139943,G__139663_139944,G__139664_139945,G__139665_139946,G__139666_139947));
} else {
var temp__5753__auto___139949 = (function (){var fexpr__139668 = cljs.core.deref(input_checker139656_139938);
return (fexpr__139668.cljs$core$IFn$_invoke$arity$1 ? fexpr__139668.cljs$core$IFn$_invoke$arity$1(args__38125__auto___139942) : fexpr__139668.call(null,args__38125__auto___139942));
})();
if(cljs.core.truth_(temp__5753__auto___139949)){
var error__38126__auto___139951 = temp__5753__auto___139949;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.with_meta(new cljs.core.Symbol(null,"treat-ws-message!","treat-ws-message!",-1500949708,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([error__38126__auto___139951], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema139655_139937,new cljs.core.Keyword(null,"value","value",305978217),args__38125__auto___139942,new cljs.core.Keyword(null,"error","error",-978969032),error__38126__auto___139951], null));
} else {
}
}
} else {
}

var o__38127__auto__ = (function (){var state = G__139658;
var G__139672 = G__139659;
var map__139673 = G__139672;
var map__139673__$1 = cljs.core.__destructure_map(map__139673);
var msg = map__139673__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__139673__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__139673__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state__$1 = state;
var G__139672__$1 = G__139672;
while(true){
var state__$2 = state__$1;
var map__139674 = G__139672__$1;
var map__139674__$1 = cljs.core.__destructure_map(map__139674);
var msg__$1 = map__139674__$1;
var op__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__139674__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__139674__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var temp__5751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pending-evals","pending-evals",1249255957).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state__$2)),call_id__$1);
if(cljs.core.truth_(temp__5751__auto__)){
var pending = temp__5751__auto__;
var G__139676 = op__$1;
var G__139676__$1 = (((G__139676 instanceof cljs.core.Keyword))?G__139676.fqn:null);
switch (G__139676__$1) {
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
var G__139678 = op__$1;
var G__139678__$1 = (((G__139678 instanceof cljs.core.Keyword))?G__139678.fqn:null);
switch (G__139678__$1) {
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
var G__139682_139962 = new cljs.core.Keyword(null,"output","output",-1105869043);
var G__139683_139963 = cljs.core.with_meta(new cljs.core.Symbol(null,"treat-ws-message!","treat-ws-message!",-1500949708,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null));
var G__139684_139964 = output_schema139654_139936;
var G__139685_139965 = cljs.core.deref(output_checker139657_139939);
var G__139686_139966 = o__38127__auto__;
(schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5 ? schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5(G__139682_139962,G__139683_139963,G__139684_139964,G__139685_139965,G__139686_139966) : schema.core.fn_validator.call(null,G__139682_139962,G__139683_139963,G__139684_139964,G__139685_139965,G__139686_139966));
} else {
var temp__5753__auto___139967 = (function (){var fexpr__139692 = cljs.core.deref(output_checker139657_139939);
return (fexpr__139692.cljs$core$IFn$_invoke$arity$1 ? fexpr__139692.cljs$core$IFn$_invoke$arity$1(o__38127__auto__) : fexpr__139692.call(null,o__38127__auto__));
})();
if(cljs.core.truth_(temp__5753__auto___139967)){
var error__38126__auto___139968 = temp__5753__auto___139967;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.with_meta(new cljs.core.Symbol(null,"treat-ws-message!","treat-ws-message!",-1500949708,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([error__38126__auto___139968], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema139654_139936,new cljs.core.Keyword(null,"value","value",305978217),o__38127__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__38126__auto___139968], null));
} else {
}
}
} else {
}

return o__38127__auto__;
});
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(repl_tooling.repl_client.shadow_ws.treat_ws_message_BANG_),schema.core.__GT_FnSchema(output_schema139654_139936,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema139655_139937], null)));

repl_tooling.repl_client.shadow_ws.create_ws_conn_BANG_ = (function repl_tooling$repl_client$shadow_ws$create_ws_conn_BANG_(id,url,state){
try{var ws = (new shadow.js.shim.module$ws(url,({"rejectUnauthorized": false})));
var update_state_BANG_ = (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword(null,"ws","ws",86841443),ws);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(repl_tooling.integrations.repls.connections,cljs.core.assoc,id,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"conn","conn",278309663),ws,new cljs.core.Keyword(null,"buffer","buffer",617295198),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY)], null));
});
update_state_BANG_();

var G__139706_139972 = ws;
(G__139706_139972["onmessage"] = (function (p1__139696_SHARP_){
var reader = cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"json","json",1279968570));
var payload = cognitect.transit.read(reader,p1__139696_SHARP_.data);
return repl_tooling.repl_client.shadow_ws.treat_ws_message_BANG_(state,payload);
}));

(G__139706_139972["onerror"] = (function (e){
ws.end();

console.log(e);

return promesa.core.resolve_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"evaluator","evaluator",704655039).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),e.message], null));
}));

(G__139706_139972["onclose"] = (function (_){
var map__139711 = cljs.core.deref(state);
var map__139711__$1 = cljs.core.__destructure_map(map__139711);
var on_output = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__139711__$1,new cljs.core.Keyword(null,"on-output","on-output",-2023300495));
var should_disconnect_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__139711__$1,new cljs.core.Keyword(null,"should-disconnect?","should-disconnect?",-426700894));
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

(G__139706_139972["end"] = (function (_){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword(null,"should-disconnect?","should-disconnect?",-426700894),true);

return ws.close();
}));


return ws;
}catch (e139700){var e = e139700;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),e.message], null);
}});
repl_tooling.repl_client.shadow_ws.connect_BANG_ = (function repl_tooling$repl_client$shadow_ws$connect_BANG_(p__139715){
var map__139716 = p__139715;
var map__139716__$1 = cljs.core.__destructure_map(map__139716);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__139716__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var build_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__139716__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
var host = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__139716__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
var port = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__139716__$1,new cljs.core.Keyword(null,"port","port",1534937262));
var token = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__139716__$1,new cljs.core.Keyword(null,"token","token",-1211463215));
var on_output = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__139716__$1,new cljs.core.Keyword(null,"on-output","on-output",-2023300495));
var ssl_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__139716__$1,new cljs.core.Keyword(null,"ssl?","ssl?",1502872597));
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
