goog.provide('repl_tooling.editor_integration.interpreter');
repl_tooling.editor_integration.interpreter.read_config_file = (function repl_tooling$editor_integration$interpreter$read_config_file(config_file){
var p = promesa.core.deferred();
shadow.js.shim.module$fs.readFile(config_file,(function (p1__142743_SHARP_,p2__142742_SHARP_){
return promesa.core.resolve_BANG_.cljs$core$IFn$_invoke$arity$2(p,cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__142742_SHARP_));
}));

return p;
});
repl_tooling.editor_integration.interpreter.name_for = (function repl_tooling$editor_integration$interpreter$name_for(k){
return clojure.string.replace(clojure.string.capitalize(cljs.core.name(k)),/-/," ");
});
repl_tooling.editor_integration.interpreter.promised_let = cljs.core.with_meta((function() { 
var repl_tooling$editor_integration$interpreter$promised_let__delegate = function (__AMPERSAND_form,__AMPERSAND_env,bindings,body){
var binds = cljs.core.reverse(cljs.core.partition_all.cljs$core$IFn$_invoke$arity$3((2),(2),bindings));
var body__$1 = cljs.core.cons(new cljs.core.Symbol(null,"do","do",1686842252,null),body);
var G__142828 = binds;
var vec__142842 = G__142828;
var seq__142843 = cljs.core.seq(vec__142842);
var first__142844 = cljs.core.first(seq__142843);
var seq__142843__$1 = cljs.core.next(seq__142843);
var vec__142845 = first__142844;
var var$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__142845,(0),null);
var elem = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__142845,(1),null);
var rest = seq__142843__$1;
var body__$2 = body__$1;
var G__142828__$1 = G__142828;
while(true){
var body__$3 = body__$2;
var vec__142904 = G__142828__$1;
var seq__142905 = cljs.core.seq(vec__142904);
var first__142906 = cljs.core.first(seq__142905);
var seq__142905__$1 = cljs.core.next(seq__142905);
var vec__142907 = first__142906;
var var$__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__142907,(0),null);
var elem__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__142907,(1),null);
var rest__$1 = seq__142905__$1;
if((var$__$1 == null)){
return body__$3;
} else {
var G__143243 = (new cljs.core.List(null,new cljs.core.Symbol("p","then","p/then",2101129421,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"promise","promise",-887306482,null),(new cljs.core.List(null,elem__$1,null,(1),null)),(2),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"fn","fn",465265323,null),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [var$__$1], null),(new cljs.core.List(null,body__$3,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(3),null));
var G__143244 = rest__$1;
body__$2 = G__143243;
G__142828__$1 = G__143244;
continue;
}
break;
}
};
var repl_tooling$editor_integration$interpreter$promised_let = function (__AMPERSAND_form,__AMPERSAND_env,bindings,var_args){
var body = null;
if (arguments.length > 3) {
var G__143247__i = 0, G__143247__a = new Array(arguments.length -  3);
while (G__143247__i < G__143247__a.length) {G__143247__a[G__143247__i] = arguments[G__143247__i + 3]; ++G__143247__i;}
  body = new cljs.core.IndexedSeq(G__143247__a,0,null);
} 
return repl_tooling$editor_integration$interpreter$promised_let__delegate.call(this,__AMPERSAND_form,__AMPERSAND_env,bindings,body);};
repl_tooling$editor_integration$interpreter$promised_let.cljs$lang$maxFixedArity = 3;
repl_tooling$editor_integration$interpreter$promised_let.cljs$lang$applyTo = (function (arglist__143248){
var __AMPERSAND_form = cljs.core.first(arglist__143248);
arglist__143248 = cljs.core.next(arglist__143248);
var __AMPERSAND_env = cljs.core.first(arglist__143248);
arglist__143248 = cljs.core.next(arglist__143248);
var bindings = cljs.core.first(arglist__143248);
var body = cljs.core.rest(arglist__143248);
return repl_tooling$editor_integration$interpreter$promised_let__delegate(__AMPERSAND_form,__AMPERSAND_env,bindings,body);
});
repl_tooling$editor_integration$interpreter$promised_let.cljs$core$IFn$_invoke$arity$variadic = repl_tooling$editor_integration$interpreter$promised_let__delegate;
return repl_tooling$editor_integration$interpreter$promised_let;
})()
,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("sci","macro","sci/macro",-868536151),true], null));
repl_tooling.editor_integration.interpreter.find_repl = (function repl_tooling$editor_integration$interpreter$find_repl(state){
return promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(repl_tooling.editor_integration.commands.run_callback_BANG_(state,new cljs.core.Keyword(null,"editor-data","editor-data",-2084300305)),(function (data){
return promesa.protocols._bind(null,(function (___31810__auto__){
return promesa.protocols._promise(repl_tooling.editor_integration.commands.run_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword(null,"repl-for","repl-for",1424925162),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"filename","filename",-1428840783).cljs$core$IFn$_invoke$arity$1(data),true], 0)));
}));
}));
}));
});
repl_tooling.editor_integration.interpreter.interactive_eval = (function repl_tooling$editor_integration$interpreter$interactive_eval(state,params){
(repl_tooling.editor_helpers._STAR_out_on_aux_STAR_ = true);

return promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(repl_tooling.editor_integration.commands.run_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword(null,"evaluate-and-render","evaluate-and-render",482317356),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$variadic(params,new cljs.core.Keyword(null,"pass","pass",1574159993),cljs.core.assoc,new cljs.core.Keyword(null,"interactive","interactive",-2024078362),true,new cljs.core.Keyword(null,"aux","aux",-10408640),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([true], 0))], 0)),(function() { 
var G__143254__delegate = function (_){
return (repl_tooling.editor_helpers._STAR_out_on_aux_STAR_ = false);
};
var G__143254 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__143256__i = 0, G__143256__a = new Array(arguments.length -  0);
while (G__143256__i < G__143256__a.length) {G__143256__a[G__143256__i] = arguments[G__143256__i + 0]; ++G__143256__i;}
  _ = new cljs.core.IndexedSeq(G__143256__a,0,null);
} 
return G__143254__delegate.call(this,_);};
G__143254.cljs$lang$maxFixedArity = 0;
G__143254.cljs$lang$applyTo = (function (arglist__143257){
var _ = cljs.core.seq(arglist__143257);
return G__143254__delegate(_);
});
G__143254.cljs$core$IFn$_invoke$arity$variadic = G__143254__delegate;
return G__143254;
})()
);
});
repl_tooling.editor_integration.interpreter.editor_ns = (function repl_tooling$editor_integration$interpreter$editor_ns(repl,state){
var repl__$1 = (new cljs.core.Delay((function (){
var or__4223__auto__ = repl;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return repl_tooling.editor_integration.interpreter.find_repl(state);
}
}),null));
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Symbol(null,"get-var","get-var",-2020931375,null),new cljs.core.Symbol(null,"eval-interactive","eval-interactive",-1738256136,null),new cljs.core.Symbol(null,"run-callback","run-callback",38842670,null),new cljs.core.Symbol(null,"compose-resolver","compose-resolver",722841885,null),new cljs.core.Symbol(null,"get-top-block","get-top-block",-1683803658,null),new cljs.core.Symbol(null,"get-selection","get-selection",1687271619,null),new cljs.core.Symbol(null,"eql","eql",-1239543386,null),new cljs.core.Symbol(null,"get-namespace","get-namespace",-1988899488,null),new cljs.core.Symbol(null,"eval","eval",536963622,null),new cljs.core.Symbol(null,"add-resolver","add-resolver",-2037240901,null),new cljs.core.Symbol(null,"eval-and-render","eval-and-render",1581632904,null),new cljs.core.Symbol(null,"run-feature","run-feature",1033669849,null),new cljs.core.Symbol(null,"get-block","get-block",-1878521400,null)],[(function (){
return repl_tooling.editor_integration.commands.run_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword(null,"get-code","get-code",619118884),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"var","var",-769682797)], 0));
}),(function (p1__143040_SHARP_){
return repl_tooling.editor_integration.interpreter.interactive_eval(state,p1__143040_SHARP_);
}),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(repl_tooling.editor_integration.commands.run_callback_BANG_,state),repl_tooling.commands_to_repl.pathom.compose_resolver,(function (){
return repl_tooling.editor_integration.commands.run_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword(null,"get-code","get-code",619118884),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"top-block","top-block",124760254)], 0));
}),(function (){
return repl_tooling.editor_integration.commands.run_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword(null,"get-code","get-code",619118884),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"selection","selection",975998651)], 0));
}),repl_tooling.commands_to_repl.pathom.eql_from_state(state),(function (){
return promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(repl_tooling.editor_integration.commands.run_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword(null,"get-code","get-code",619118884),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"ns","ns",441598760)], 0)),(function (res){
return promesa.protocols._bind(null,(function (___31810__auto__){
return promesa.protocols._promise(cljs.core.update.cljs$core$IFn$_invoke$arity$3(res,new cljs.core.Keyword(null,"text","text",-1790561697),cljs.core.str));
}));
}));
}));
}),cljs.core.partial.cljs$core$IFn$_invoke$arity$3(repl_tooling.editor_integration.commands.run_feature_BANG_,state,new cljs.core.Keyword(null,"eval","eval",-1103567905)),repl_tooling.commands_to_repl.pathom.add_resolver,(function (p1__143039_SHARP_){
return repl_tooling.editor_integration.commands.run_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword(null,"evaluate-and-render","evaluate-and-render",482317356),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__143039_SHARP_], 0));
}),(function() { 
var G__143259__delegate = function (cmd,args){
return promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(cljs.core.deref(repl__$1),(function (curr_repl){
return promesa.protocols._bind(null,(function (___31810__auto__){
return promesa.protocols._promise(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cmd,new cljs.core.Keyword(null,"go-to-var-definition","go-to-var-definition",-956809838)))?repl_tooling.editor_integration.commands.run_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword(null,"go-to-var-definition","go-to-var-definition",-956809838),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.first(args),new cljs.core.Keyword(null,"repl","repl",-35398667),curr_repl)], 0)):cljs.core.apply.cljs$core$IFn$_invoke$arity$4(repl_tooling.editor_integration.commands.run_feature_BANG_,state,cmd,args)));
}));
}));
}));
};
var G__143259 = function (cmd,var_args){
var args = null;
if (arguments.length > 1) {
var G__143261__i = 0, G__143261__a = new Array(arguments.length -  1);
while (G__143261__i < G__143261__a.length) {G__143261__a[G__143261__i] = arguments[G__143261__i + 1]; ++G__143261__i;}
  args = new cljs.core.IndexedSeq(G__143261__a,0,null);
} 
return G__143259__delegate.call(this,cmd,args);};
G__143259.cljs$lang$maxFixedArity = 1;
G__143259.cljs$lang$applyTo = (function (arglist__143262){
var cmd = cljs.core.first(arglist__143262);
var args = cljs.core.rest(arglist__143262);
return G__143259__delegate(cmd,args);
});
G__143259.cljs$core$IFn$_invoke$arity$variadic = G__143259__delegate;
return G__143259;
})()
,(function (){
return repl_tooling.editor_integration.commands.run_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword(null,"get-code","get-code",619118884),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"block","block",664686210)], 0));
})]);
});
repl_tooling.editor_integration.interpreter.render_ns = (function repl_tooling$editor_integration$interpreter$render_ns(editor_state){
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Symbol(null,"js-require","js-require",1873175332,null),(function (p1__143145_SHARP_){
return require(shadow.js.shim.module$path.join(shadow.js.shim.module$path.dirname(new cljs.core.Keyword(null,"config-file-path","config-file-path",-862460128).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("editor","callbacks","editor/callbacks",1179124831).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(editor_state)))),p1__143145_SHARP_));
}),new cljs.core.Symbol(null,"create-tag","create-tag",1707994373,null),(function (p1__143147_SHARP_){
return document.createElement(p1__143147_SHARP_);
}),new cljs.core.Symbol(null,"set-text","set-text",-1307646024,null),(function (p1__143148_SHARP_,p2__143149_SHARP_){
return (p1__143148_SHARP_["innerText"] = p2__143149_SHARP_);
}),new cljs.core.Symbol(null,"set-html","set-html",654911706,null),(function (p1__143150_SHARP_,p2__143151_SHARP_){
return (p1__143150_SHARP_["innerHTML"] = p2__143151_SHARP_);
}),new cljs.core.Symbol(null,"add-class","add-class",-1746720837,null),(function() { 
var G__143264__delegate = function (e,args){
var seq__143207 = cljs.core.seq(args);
var chunk__143208 = null;
var count__143209 = (0);
var i__143210 = (0);
while(true){
if((i__143210 < count__143209)){
var a = chunk__143208.cljs$core$IIndexed$_nth$arity$2(null,i__143210);
e.classList.add(a);


var G__143269 = seq__143207;
var G__143270 = chunk__143208;
var G__143271 = count__143209;
var G__143272 = (i__143210 + (1));
seq__143207 = G__143269;
chunk__143208 = G__143270;
count__143209 = G__143271;
i__143210 = G__143272;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__143207);
if(temp__5753__auto__){
var seq__143207__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__143207__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__143207__$1);
var G__143273 = cljs.core.chunk_rest(seq__143207__$1);
var G__143274 = c__4649__auto__;
var G__143275 = cljs.core.count(c__4649__auto__);
var G__143276 = (0);
seq__143207 = G__143273;
chunk__143208 = G__143274;
count__143209 = G__143275;
i__143210 = G__143276;
continue;
} else {
var a = cljs.core.first(seq__143207__$1);
e.classList.add(a);


var G__143278 = cljs.core.next(seq__143207__$1);
var G__143279 = null;
var G__143280 = (0);
var G__143281 = (0);
seq__143207 = G__143278;
chunk__143208 = G__143279;
count__143209 = G__143280;
i__143210 = G__143281;
continue;
}
} else {
return null;
}
}
break;
}
};
var G__143264 = function (e,var_args){
var args = null;
if (arguments.length > 1) {
var G__143282__i = 0, G__143282__a = new Array(arguments.length -  1);
while (G__143282__i < G__143282__a.length) {G__143282__a[G__143282__i] = arguments[G__143282__i + 1]; ++G__143282__i;}
  args = new cljs.core.IndexedSeq(G__143282__a,0,null);
} 
return G__143264__delegate.call(this,e,args);};
G__143264.cljs$lang$maxFixedArity = 1;
G__143264.cljs$lang$applyTo = (function (arglist__143283){
var e = cljs.core.first(arglist__143283);
var args = cljs.core.rest(arglist__143283);
return G__143264__delegate(e,args);
});
G__143264.cljs$core$IFn$_invoke$arity$variadic = G__143264__delegate;
return G__143264;
})()
,new cljs.core.Symbol(null,"set-attr","set-attr",-235359091,null),(function (e,attr,value){
return e.setAttribute(attr,value);
}),new cljs.core.Symbol(null,"register-reagent","register-reagent",338980158,null),(function (p1__143157_SHARP_,p2__143159_SHARP_){
if(cljs.core.truth_((function (){var and__4221__auto__ = (p1__143157_SHARP_ instanceof cljs.core.Keyword);
if(and__4221__auto__){
var and__4221__auto____$1 = cljs.core.namespace(p1__143157_SHARP_);
if(cljs.core.truth_(and__4221__auto____$1)){
return cljs.core.fn_QMARK_(p2__143159_SHARP_);
} else {
return and__4221__auto____$1;
}
} else {
return and__4221__auto__;
}
})())){
return repl_tooling.editor_integration.renderer.pinkie.register_reagent(p1__143157_SHARP_,p2__143159_SHARP_);
} else {
return repl_tooling.editor_integration.commands.run_callback_BANG_.cljs$core$IFn$_invoke$arity$variadic(editor_state,new cljs.core.Keyword(null,"notify","notify",-1256867814),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"title","title",636505583),"Invalid params",new cljs.core.Keyword(null,"text","text",-1790561697),["First argument needs to be a namespaced keyword, ","and second argument needs to be a reagent fn"].join('')], null)], 0));
}
}),new cljs.core.Symbol(null,"register-tag","register-tag",1794595694,null),(function (p1__143160_SHARP_,p2__143161_SHARP_){
if(cljs.core.truth_((function (){var and__4221__auto__ = (p1__143160_SHARP_ instanceof cljs.core.Keyword);
if(and__4221__auto__){
var and__4221__auto____$1 = cljs.core.namespace(p1__143160_SHARP_);
if(cljs.core.truth_(and__4221__auto____$1)){
return cljs.core.fn_QMARK_(p2__143161_SHARP_);
} else {
return and__4221__auto____$1;
}
} else {
return and__4221__auto__;
}
})())){
return repl_tooling.editor_integration.renderer.pinkie.register_tag(p1__143160_SHARP_,p2__143161_SHARP_);
} else {
return repl_tooling.editor_integration.commands.run_callback_BANG_.cljs$core$IFn$_invoke$arity$variadic(editor_state,new cljs.core.Keyword(null,"notify","notify",-1256867814),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"title","title",636505583),"Invalid params",new cljs.core.Keyword(null,"text","text",-1790561697),["First argument needs to be a namespaced keyword, ","and second argument needs to be a function that ","returns a HTML tag"].join('')], null)], 0));
}
})], null);
});
repl_tooling.editor_integration.interpreter.prepare_nses = (function repl_tooling$editor_integration$interpreter$prepare_nses(repl,editor_state){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(clojure.set.rename_keys(sci.impl.namespaces.namespaces,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Symbol(null,"clojure.string","clojure.string",-1415552165,null),new cljs.core.Symbol(null,"str","str",-1564826950,null),new cljs.core.Symbol(null,"clojure.set","clojure.set",-630955632,null),new cljs.core.Symbol(null,"set","set",1945134081,null),new cljs.core.Symbol(null,"clojure.walk","clojure.walk",1625897340,null),new cljs.core.Symbol(null,"walk","walk",1673453164,null),new cljs.core.Symbol(null,"clojure.template","clojure.template",-1162325089,null),new cljs.core.Symbol(null,"template","template",938125843,null),new cljs.core.Symbol(null,"clojure.repl","clojure.repl",570897595,null),new cljs.core.Symbol(null,"repl","repl",1605132860,null),new cljs.core.Symbol(null,"clojure.edn","clojure.edn",-302325352,null),new cljs.core.Symbol(null,"edn","edn",-1336594884,null)], null)),new cljs.core.Symbol(null,"r","r",1169147337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Symbol(null,"create-class","create-class",-665911586,null),new cljs.core.Symbol(null,"atom","atom",1243487874,null),new cljs.core.Symbol(null,"render","render",232498073,null),new cljs.core.Symbol(null,"as-element","as-element",-2139409597,null),new cljs.core.Symbol(null,"reactify-component","reactify-component",-882526483,null),new cljs.core.Symbol(null,"is-client","is-client",-580030505,null),new cljs.core.Symbol(null,"current-component","current-component",830794177,null),new cljs.core.Symbol(null,"create-element","create-element",1833774591,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null),new cljs.core.Symbol(null,"wrap","wrap",-1802765782,null),new cljs.core.Symbol(null,"adapt-react-class","adapt-react-class",1221068673,null)],[reagent.core.create_class,reagent.core.atom,reagent.dom.render,reagent.core.as_element,reagent.core.reactify_component,reagent.core.is_client,reagent.core.current_component,reagent.core.create_element,reagent.core.cursor,reagent.core.wrap,reagent.core.adapt_react_class])),new cljs.core.Symbol(null,"render","render",232498073,null),repl_tooling.editor_integration.interpreter.render_ns(editor_state)),new cljs.core.Symbol(null,"editor","editor",651153757,null),repl_tooling.editor_integration.interpreter.editor_ns(repl,editor_state)),new cljs.core.Symbol(null,"repl-tooling.editor-helpers","repl-tooling.editor-helpers",1017498236,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"Error","Error",-1692662047,null),repl_tooling.editor_helpers.Error], null));
});
repl_tooling.editor_integration.interpreter.promised_bindings = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Symbol(null,"promise","promise",-887306482,null),(function (p1__143215_SHARP_){
return Promise.resolve(p1__143215_SHARP_);
}),new cljs.core.Symbol("p","then","p/then",2101129421,null),(function (p1__143216_SHARP_,p2__143217_SHARP_){
return p1__143216_SHARP_.then(p2__143217_SHARP_);
}),new cljs.core.Symbol("p","catch","p/catch",-1616370133,null),(function (p1__143218_SHARP_,p2__143219_SHARP_){
return p1__143218_SHARP_.catch(p2__143219_SHARP_);
}),new cljs.core.Symbol("p","let","p/let",358118874,null),repl_tooling.editor_integration.interpreter.promised_let], null);
repl_tooling.editor_integration.interpreter.debug_bindings = (function repl_tooling$editor_integration$interpreter$debug_bindings(editor_state){
var run_callback = new cljs.core.Keyword(null,"run-callback","run-callback",-1601688857).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(editor_state));
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Symbol(null,"println","println",-733595439,null),(function() { 
var G__143349__delegate = function (args){
var G__143223_143352 = new cljs.core.Keyword(null,"on-stdout","on-stdout",1480958368);
var G__143224_143353 = [clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",args),"\n"].join('');
(run_callback.cljs$core$IFn$_invoke$arity$2 ? run_callback.cljs$core$IFn$_invoke$arity$2(G__143223_143352,G__143224_143353) : run_callback.call(null,G__143223_143352,G__143224_143353));

return null;
};
var G__143349 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__143354__i = 0, G__143354__a = new Array(arguments.length -  0);
while (G__143354__i < G__143354__a.length) {G__143354__a[G__143354__i] = arguments[G__143354__i + 0]; ++G__143354__i;}
  args = new cljs.core.IndexedSeq(G__143354__a,0,null);
} 
return G__143349__delegate.call(this,args);};
G__143349.cljs$lang$maxFixedArity = 0;
G__143349.cljs$lang$applyTo = (function (arglist__143356){
var args = cljs.core.seq(arglist__143356);
return G__143349__delegate(args);
});
G__143349.cljs$core$IFn$_invoke$arity$variadic = G__143349__delegate;
return G__143349;
})()
,new cljs.core.Symbol(null,"print","print",-1354873355,null),(function() { 
var G__143362__delegate = function (args){
var G__143225_143363 = new cljs.core.Keyword(null,"on-stdout","on-stdout",1480958368);
var G__143226_143364 = clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",args);
(run_callback.cljs$core$IFn$_invoke$arity$2 ? run_callback.cljs$core$IFn$_invoke$arity$2(G__143225_143363,G__143226_143364) : run_callback.call(null,G__143225_143363,G__143226_143364));

return null;
};
var G__143362 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__143370__i = 0, G__143370__a = new Array(arguments.length -  0);
while (G__143370__i < G__143370__a.length) {G__143370__a[G__143370__i] = arguments[G__143370__i + 0]; ++G__143370__i;}
  args = new cljs.core.IndexedSeq(G__143370__a,0,null);
} 
return G__143362__delegate.call(this,args);};
G__143362.cljs$lang$maxFixedArity = 0;
G__143362.cljs$lang$applyTo = (function (arglist__143376){
var args = cljs.core.seq(arglist__143376);
return G__143362__delegate(args);
});
G__143362.cljs$core$IFn$_invoke$arity$variadic = G__143362__delegate;
return G__143362;
})()
,new cljs.core.Symbol(null,"prn","prn",1561684909,null),(function() { 
var G__143381__delegate = function (args){
var G__143228_143382 = new cljs.core.Keyword(null,"on-stdout","on-stdout",1480958368);
var G__143229_143383 = (function (p1__143221_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__143221_SHARP_),"\n"].join('');
})(clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,args)));
(run_callback.cljs$core$IFn$_invoke$arity$2 ? run_callback.cljs$core$IFn$_invoke$arity$2(G__143228_143382,G__143229_143383) : run_callback.call(null,G__143228_143382,G__143229_143383));

return null;
};
var G__143381 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__143385__i = 0, G__143385__a = new Array(arguments.length -  0);
while (G__143385__i < G__143385__a.length) {G__143385__a[G__143385__i] = arguments[G__143385__i + 0]; ++G__143385__i;}
  args = new cljs.core.IndexedSeq(G__143385__a,0,null);
} 
return G__143381__delegate.call(this,args);};
G__143381.cljs$lang$maxFixedArity = 0;
G__143381.cljs$lang$applyTo = (function (arglist__143387){
var args = cljs.core.seq(arglist__143387);
return G__143381__delegate(args);
});
G__143381.cljs$core$IFn$_invoke$arity$variadic = G__143381__delegate;
return G__143381;
})()
,new cljs.core.Symbol(null,"log","log",45015523,null),(function() { 
var G__143389__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(console.log,args);
};
var G__143389 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__143393__i = 0, G__143393__a = new Array(arguments.length -  0);
while (G__143393__i < G__143393__a.length) {G__143393__a[G__143393__i] = arguments[G__143393__i + 0]; ++G__143393__i;}
  args = new cljs.core.IndexedSeq(G__143393__a,0,null);
} 
return G__143389__delegate.call(this,args);};
G__143389.cljs$lang$maxFixedArity = 0;
G__143389.cljs$lang$applyTo = (function (arglist__143399){
var args = cljs.core.seq(arglist__143399);
return G__143389__delegate(args);
});
G__143389.cljs$core$IFn$_invoke$arity$variadic = G__143389__delegate;
return G__143389;
})()
,new cljs.core.Symbol(null,"pr","pr",1056937027,null),(function() { 
var G__143404__delegate = function (args){
var G__143230_143405 = new cljs.core.Keyword(null,"on-stdout","on-stdout",1480958368);
var G__143231_143406 = clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,args));
(run_callback.cljs$core$IFn$_invoke$arity$2 ? run_callback.cljs$core$IFn$_invoke$arity$2(G__143230_143405,G__143231_143406) : run_callback.call(null,G__143230_143405,G__143231_143406));

return null;
};
var G__143404 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__143407__i = 0, G__143407__a = new Array(arguments.length -  0);
while (G__143407__i < G__143407__a.length) {G__143407__a[G__143407__i] = arguments[G__143407__i + 0]; ++G__143407__i;}
  args = new cljs.core.IndexedSeq(G__143407__a,0,null);
} 
return G__143404__delegate.call(this,args);};
G__143404.cljs$lang$maxFixedArity = 0;
G__143404.cljs$lang$applyTo = (function (arglist__143412){
var args = cljs.core.seq(arglist__143412);
return G__143404__delegate(args);
});
G__143404.cljs$core$IFn$_invoke$arity$variadic = G__143404__delegate;
return G__143404;
})()
], null);
});
repl_tooling.editor_integration.interpreter.readers_for = (function repl_tooling$editor_integration$interpreter$readers_for(editor_state){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Symbol(null,"repl-tooling.editor-helpers.Error","repl-tooling.editor-helpers.Error",-45274176,null),repl_tooling.editor_helpers.map__GT_Error,new cljs.core.Symbol(null,"repl-tooling.editor-helpers.Browseable","repl-tooling.editor-helpers.Browseable",-596236747,null),repl_tooling.editor_helpers.map__GT_Browseable,new cljs.core.Symbol(null,"repl-tooling.editor-helpers.Patchable","repl-tooling.editor-helpers.Patchable",-1663886942,null),repl_tooling.editor_helpers.map__GT_Patchable,new cljs.core.Symbol(null,"repl-tooling.editor-helpers.IncompleteObj","repl-tooling.editor-helpers.IncompleteObj",-1250019273,null),repl_tooling.editor_helpers.map__GT_IncompleteObj], null);
});
repl_tooling.editor_integration.interpreter.evaluate_code = (function repl_tooling$editor_integration$interpreter$evaluate_code(p__143235){
var map__143236 = p__143235;
var map__143236__$1 = cljs.core.__destructure_map(map__143236);
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__143236__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__143236__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var sci_state = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__143236__$1,new cljs.core.Keyword(null,"sci-state","sci-state",-1065730528),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY));
var editor_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__143236__$1,new cljs.core.Keyword(null,"editor-state","editor-state",579582138));
var repl = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__143236__$1,new cljs.core.Keyword(null,"repl","repl",-35398667));
var bindings__$1 = (cljs.core.truth_(editor_state)?cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(repl_tooling.editor_integration.interpreter.promised_bindings,new cljs.core.Symbol(null,"eql","eql",-1239543386,null),new cljs.core.Keyword(null,"eql","eql",1414892383).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("editor","feature","editor/feature",1268484873).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(editor_state)))),repl_tooling.editor_integration.interpreter.debug_bindings(editor_state),bindings], 0)):repl_tooling.editor_integration.interpreter.promised_bindings
);
return sci.core.eval_string.cljs$core$IFn$_invoke$arity$2(code,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"env","env",-1815813235),sci_state,new cljs.core.Keyword(null,"classes","classes",2037804510),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"allow","allow",-1857325745),new cljs.core.Keyword(null,"all","all",892129742)], null),new cljs.core.Keyword(null,"preset","preset",777387345),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"termination-safe","termination-safe",-1845225130),true], null),new cljs.core.Keyword(null,"readers","readers",-2118263030),repl_tooling.editor_integration.interpreter.readers_for(editor_state),new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),repl_tooling.editor_integration.interpreter.prepare_nses(repl,editor_state),new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings__$1], null));
});

//# sourceMappingURL=repl_tooling.editor_integration.interpreter.js.map
