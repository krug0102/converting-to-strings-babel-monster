goog.provide('repl_tooling.editor_integration.autocomplete');
repl_tooling.editor_integration.autocomplete.have_ns_QMARK_ = (function repl_tooling$editor_integration$autocomplete$have_ns_QMARK_(repl,namespace){
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.then.cljs$core$IFn$_invoke$arity$2(repl_tooling.eval.eval.cljs$core$IFn$_invoke$arity$2(repl,repl_tooling.repl_client.source.have_ns_command(namespace)),new cljs.core.Keyword(null,"result","result",1415092211)),cljs.core.constantly(false));
});
repl_tooling.editor_integration.autocomplete.detect_clj_compliment = (function repl_tooling$editor_integration$autocomplete$detect_clj_compliment(repl,state){
var temp__5751__auto__ = new cljs.core.Keyword("clj","autocomplete-kind","clj/autocomplete-kind",595223229).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("repl","info","repl/info",-345199547).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)));
if(cljs.core.truth_(temp__5751__auto__)){
var kind = temp__5751__auto__;
return kind;
} else {
return promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(repl_tooling.editor_integration.autocomplete.have_ns_QMARK_(repl,"compliment.core"),(function (res){
return promesa.protocols._bind((cljs.core.truth_(res)?new cljs.core.Keyword(null,"compliment","compliment",-1589677957):new cljs.core.Keyword(null,"simple","simple",-581868663)),(function (res__$1){
return promesa.protocols._bind(null,(function (___31810__auto__){
return promesa.protocols._bind(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("repl","info","repl/info",-345199547),new cljs.core.Keyword("clj","autocomplete-kind","clj/autocomplete-kind",595223229)], null),res__$1),(function (___31809__auto__){
return promesa.protocols._promise(res__$1);
}));
}));
}));
}));
}));
}
});
repl_tooling.editor_integration.autocomplete.detect_cljs_engine = (function repl_tooling$editor_integration$autocomplete$detect_cljs_engine(repl,state){
if(cljs.core.truth_(repl)){
var temp__5751__auto__ = new cljs.core.Keyword("cljs","autocomplete-kind","cljs/autocomplete-kind",552046734).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("repl","info","repl/info",-345199547).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)));
if(cljs.core.truth_(temp__5751__auto__)){
var kind = temp__5751__auto__;
return kind;
} else {
return promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(repl_tooling.editor_integration.autocomplete.have_ns_QMARK_(repl,"suitable.js-completions"),(function (suit){
return promesa.protocols._bind(repl_tooling.editor_integration.autocomplete.have_ns_QMARK_(repl,"suitable.js-completions"),(function (compliment){
return promesa.protocols._bind((function (){var G__144465 = cljs.core.PersistentHashSet.EMPTY;
var G__144465__$1 = (cljs.core.truth_(suit)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__144465,new cljs.core.Keyword(null,"suitable","suitable",-1487946612)):G__144465);
var G__144465__$2 = (cljs.core.truth_(compliment)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__144465__$1,new cljs.core.Keyword(null,"compliment","compliment",-1589677957)):G__144465__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(false,suit,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([compliment], 0))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__144465__$2,new cljs.core.Keyword(null,"simple","simple",-581868663));
} else {
return G__144465__$2;
}
})(),(function (res){
return promesa.protocols._bind(null,(function (___31810__auto__){
return promesa.protocols._bind(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("repl","info","repl/info",-345199547),new cljs.core.Keyword("cljs","autocomplete-kind","cljs/autocomplete-kind",552046734)], null),res),(function (___31809__auto__){
return promesa.protocols._promise(res);
}));
}));
}));
}));
}));
}));
}
} else {
return new cljs.core.Keyword(null,"simple","simple",-581868663);
}
});
repl_tooling.editor_integration.autocomplete.non_clj_var_regex = /[^a-zA-Z0-9\-.$!?\\/><*=\?_:]+/;
repl_tooling.editor_integration.autocomplete.get_prefix = (function repl_tooling$editor_integration$autocomplete$get_prefix(code,row,col){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.take.cljs$core$IFn$_invoke$arity$2(col,cljs.core.nth.cljs$core$IFn$_invoke$arity$3(clojure.string.split_lines(code),row,""))),repl_tooling.editor_integration.autocomplete.non_clj_var_regex)));
});
repl_tooling.editor_integration.autocomplete.autocomplete_clj = (function repl_tooling$editor_integration$autocomplete$autocomplete_clj(repl,kind,p__144477){
var map__144484 = p__144477;
var map__144484__$1 = cljs.core.__destructure_map(map__144484);
var contents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__144484__$1,new cljs.core.Keyword(null,"contents","contents",-1567174023));
var range = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__144484__$1,new cljs.core.Keyword(null,"range","range",1639692286));
var position = cljs.core.first(range);
var vec__144491 = position;
var orig_row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__144491,(0),null);
var orig_col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__144491,(1),null);
var vec__144494 = repl_tooling.editor_helpers.top_block_for(contents,position);
var vec__144497 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__144494,(0),null);
var vec__144500 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__144497,(0),null);
var block_row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__144500,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__144500,(1),null);
var block_text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__144494,(1),null);
var prefix = repl_tooling.editor_integration.autocomplete.get_prefix(contents,orig_row,orig_col);
var ns_name = cljs.core.second(repl_tooling.editor_helpers.ns_range_for(contents,position));
var vec__144503 = (cljs.core.truth_(block_text)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(orig_row - block_row),orig_col], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null));
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__144503,(0),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__144503,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"compliment","compliment",-1589677957),kind)){
return repl_tooling.features.autocomplete.compliment.for_clojure.cljs$core$IFn$_invoke$arity$6(repl,ns_name,cljs.core.str.cljs$core$IFn$_invoke$arity$1(block_text),prefix,row,col);
} else {
return repl_tooling.features.autocomplete.simple.for_clj(repl,ns_name,prefix);
}
});
repl_tooling.editor_integration.autocomplete.autocomplete_cljs = (function repl_tooling$editor_integration$autocomplete$autocomplete_cljs(clj_repl,cljs_repl,kind,cmd,p__144517){
var map__144518 = p__144517;
var map__144518__$1 = cljs.core.__destructure_map(map__144518);
var contents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__144518__$1,new cljs.core.Keyword(null,"contents","contents",-1567174023));
var range = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__144518__$1,new cljs.core.Keyword(null,"range","range",1639692286));
var position = cljs.core.first(range);
var vec__144519 = position;
var orig_row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__144519,(0),null);
var orig_col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__144519,(1),null);
var vec__144522 = repl_tooling.editor_helpers.top_block_for(contents,position);
var vec__144525 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__144522,(0),null);
var vec__144528 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__144525,(0),null);
var block_row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__144528,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__144528,(1),null);
var block_text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__144522,(1),null);
var prefix = repl_tooling.editor_integration.autocomplete.get_prefix(contents,orig_row,orig_col);
var ns_name = cljs.core.second(repl_tooling.editor_helpers.ns_range_for(contents,position));
var vec__144531 = (cljs.core.truth_(block_text)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(orig_row - block_row),orig_col], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null));
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__144531,(0),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__144531,(1),null);
var shadow_env = cljs.core.second(cmd);
var suits = (cljs.core.truth_(new cljs.core.Keyword(null,"suitable","suitable",-1487946612).cljs$core$IFn$_invoke$arity$1(kind))?repl_tooling.features.autocomplete.suitable.for_cljs(cljs_repl,clj_repl,shadow_env,cmd,ns_name,cljs.core.str.cljs$core$IFn$_invoke$arity$1(block_text),prefix,row,col):null);
var compls = (cljs.core.truth_(new cljs.core.Keyword(null,"compliment","compliment",-1589677957).cljs$core$IFn$_invoke$arity$1(kind))?repl_tooling.features.autocomplete.compliment.for_cljs(clj_repl,cmd,ns_name,cljs.core.str.cljs$core$IFn$_invoke$arity$1(block_text),prefix,row,col):null);
var simples = (cljs.core.truth_(new cljs.core.Keyword(null,"simple","simple",-581868663).cljs$core$IFn$_invoke$arity$1(kind))?(function (){var G__144534 = cljs_repl;
if((G__144534 == null)){
return null;
} else {
return repl_tooling.features.autocomplete.simple.for_cljs(G__144534,ns_name,prefix);
}
})():null);
return promesa.core.then.cljs$core$IFn$_invoke$arity$2(promesa.core.all(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [suits,compls,simples], null)),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.distinct,(function (p1__144516_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,p1__144516_SHARP_);
})));
});
repl_tooling.editor_integration.autocomplete.resolve_clj = (function repl_tooling$editor_integration$autocomplete$resolve_clj(state,editor_data){
var temp__5751__auto__ = new cljs.core.Keyword("clj","aux","clj/aux",-10310625).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state));
if(cljs.core.truth_(temp__5751__auto__)){
var aux_repl = temp__5751__auto__;
return promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(repl_tooling.editor_integration.autocomplete.detect_clj_compliment(aux_repl,state),(function (kind){
return promesa.protocols._bind(null,(function (___31810__auto__){
return promesa.protocols._promise(repl_tooling.editor_integration.autocomplete.autocomplete_clj(new cljs.core.Keyword("clj","aux","clj/aux",-10310625).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)),kind,editor_data));
}));
}));
}));
} else {
return promesa.core.promise.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
});
repl_tooling.editor_integration.autocomplete.resolve_cljs = (function repl_tooling$editor_integration$autocomplete$resolve_cljs(state,editor_data){
return promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(repl_tooling.editor_integration.autocomplete.detect_cljs_engine(new cljs.core.Keyword("clj","aux","clj/aux",-10310625).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)),state),(function (kind){
return promesa.protocols._bind(null,(function (___31810__auto__){
return promesa.protocols._promise(repl_tooling.editor_integration.autocomplete.autocomplete_cljs(new cljs.core.Keyword("clj","aux","clj/aux",-10310625).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)),new cljs.core.Keyword("cljs","repl","cljs/repl",-36497565).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)),kind,new cljs.core.Keyword("cljs","repl-env","cljs/repl-env",-1983757034).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("repl","info","repl/info",-345199547).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state))),editor_data));
}));
}));
}));
});
repl_tooling.editor_integration.autocomplete.command = (function repl_tooling$editor_integration$autocomplete$command(state,p__144552,editor_data){
var map__144553 = p__144552;
var map__144553__$1 = cljs.core.__destructure_map(map__144553);
var get_config = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__144553__$1,new cljs.core.Keyword(null,"get-config","get-config",1800808901));
if(cljs.core.truth_(repl_tooling.editor_integration.evaluation.need_cljs_QMARK_((get_config.cljs$core$IFn$_invoke$arity$0 ? get_config.cljs$core$IFn$_invoke$arity$0() : get_config.call(null)),new cljs.core.Keyword(null,"filename","filename",-1428840783).cljs$core$IFn$_invoke$arity$1(editor_data)))){
return repl_tooling.editor_integration.autocomplete.resolve_cljs(state,editor_data);
} else {
return repl_tooling.editor_integration.autocomplete.resolve_clj(state,editor_data);
}
});

//# sourceMappingURL=repl_tooling.editor_integration.autocomplete.js.map
