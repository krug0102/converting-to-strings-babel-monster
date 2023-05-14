goog.provide('repl_tooling.editor_integration.interpreter');
repl_tooling.editor_integration.interpreter.read_config_file = (function repl_tooling$editor_integration$interpreter$read_config_file(config_file){
var p = promesa.core.deferred();
shadow.js.shim.module$fs.readFile(config_file,(function (p1__138628_SHARP_,p2__138627_SHARP_){
return promesa.core.resolve_BANG_.cljs$core$IFn$_invoke$arity$2(p,cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__138627_SHARP_));
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
var G__138638 = binds;
var vec__138639 = G__138638;
var seq__138640 = cljs.core.seq(vec__138639);
var first__138641 = cljs.core.first(seq__138640);
var seq__138640__$1 = cljs.core.next(seq__138640);
var vec__138642 = first__138641;
var var$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__138642,(0),null);
var elem = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__138642,(1),null);
var rest = seq__138640__$1;
var body__$2 = body__$1;
var G__138638__$1 = G__138638;
while(true){
var body__$3 = body__$2;
var vec__138653 = G__138638__$1;
var seq__138654 = cljs.core.seq(vec__138653);
var first__138655 = cljs.core.first(seq__138654);
var seq__138654__$1 = cljs.core.next(seq__138654);
var vec__138656 = first__138655;
var var$__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__138656,(0),null);
var elem__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__138656,(1),null);
var rest__$1 = seq__138654__$1;
if((var$__$1 == null)){
return body__$3;
} else {
var G__138748 = (new cljs.core.List(null,new cljs.core.Symbol("p","then","p/then",2101129421,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"promise","promise",-887306482,null),(new cljs.core.List(null,elem__$1,null,(1),null)),(2),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"fn","fn",465265323,null),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [var$__$1], null),(new cljs.core.List(null,body__$3,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(3),null));
var G__138749 = rest__$1;
body__$2 = G__138748;
G__138638__$1 = G__138749;
continue;
}
break;
}
};
var repl_tooling$editor_integration$interpreter$promised_let = function (__AMPERSAND_form,__AMPERSAND_env,bindings,var_args){
var body = null;
if (arguments.length > 3) {
var G__138752__i = 0, G__138752__a = new Array(arguments.length -  3);
while (G__138752__i < G__138752__a.length) {G__138752__a[G__138752__i] = arguments[G__138752__i + 3]; ++G__138752__i;}
  body = new cljs.core.IndexedSeq(G__138752__a,0,null);
} 
return repl_tooling$editor_integration$interpreter$promised_let__delegate.call(this,__AMPERSAND_form,__AMPERSAND_env,bindings,body);};
repl_tooling$editor_integration$interpreter$promised_let.cljs$lang$maxFixedArity = 3;
repl_tooling$editor_integration$interpreter$promised_let.cljs$lang$applyTo = (function (arglist__138754){
var __AMPERSAND_form = cljs.core.first(arglist__138754);
arglist__138754 = cljs.core.next(arglist__138754);
var __AMPERSAND_env = cljs.core.first(arglist__138754);
arglist__138754 = cljs.core.next(arglist__138754);
var bindings = cljs.core.first(arglist__138754);
var body = cljs.core.rest(arglist__138754);
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
var G__138760__delegate = function (_){
return (repl_tooling.editor_helpers._STAR_out_on_aux_STAR_ = false);
};
var G__138760 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__138761__i = 0, G__138761__a = new Array(arguments.length -  0);
while (G__138761__i < G__138761__a.length) {G__138761__a[G__138761__i] = arguments[G__138761__i + 0]; ++G__138761__i;}
  _ = new cljs.core.IndexedSeq(G__138761__a,0,null);
} 
return G__138760__delegate.call(this,_);};
G__138760.cljs$lang$maxFixedArity = 0;
G__138760.cljs$lang$applyTo = (function (arglist__138762){
var _ = cljs.core.seq(arglist__138762);
return G__138760__delegate(_);
});
G__138760.cljs$core$IFn$_invoke$arity$variadic = G__138760__delegate;
return G__138760;
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
}),(function (p1__138665_SHARP_){
return repl_tooling.editor_integration.interpreter.interactive_eval(state,p1__138665_SHARP_);
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
}),cljs.core.partial.cljs$core$IFn$_invoke$arity$3(repl_tooling.editor_integration.commands.run_feature_BANG_,state,new cljs.core.Keyword(null,"eval","eval",-1103567905)),repl_tooling.commands_to_repl.pathom.add_resolver,(function (p1__138664_SHARP_){
return repl_tooling.editor_integration.commands.run_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword(null,"evaluate-and-render","evaluate-and-render",482317356),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__138664_SHARP_], 0));
}),(function() { 
var G__138765__delegate = function (cmd,args){
return promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(cljs.core.deref(repl__$1),(function (curr_repl){
return promesa.protocols._bind(null,(function (___31810__auto__){
return promesa.protocols._promise(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cmd,new cljs.core.Keyword(null,"go-to-var-definition","go-to-var-definition",-956809838)))?repl_tooling.editor_integration.commands.run_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword(null,"go-to-var-definition","go-to-var-definition",-956809838),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.first(args),new cljs.core.Keyword(null,"repl","repl",-35398667),curr_repl)], 0)):cljs.core.apply.cljs$core$IFn$_invoke$arity$4(repl_tooling.editor_integration.commands.run_feature_BANG_,state,cmd,args)));
}));
}));
}));
};
var G__138765 = function (cmd,var_args){
var args = null;
if (arguments.length > 1) {
var G__138768__i = 0, G__138768__a = new Array(arguments.length -  1);
while (G__138768__i < G__138768__a.length) {G__138768__a[G__138768__i] = arguments[G__138768__i + 1]; ++G__138768__i;}
  args = new cljs.core.IndexedSeq(G__138768__a,0,null);
} 
return G__138765__delegate.call(this,cmd,args);};
G__138765.cljs$lang$maxFixedArity = 1;
G__138765.cljs$lang$applyTo = (function (arglist__138769){
var cmd = cljs.core.first(arglist__138769);
var args = cljs.core.rest(arglist__138769);
return G__138765__delegate(cmd,args);
});
G__138765.cljs$core$IFn$_invoke$arity$variadic = G__138765__delegate;
return G__138765;
})()
,(function (){
return repl_tooling.editor_integration.commands.run_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword(null,"get-code","get-code",619118884),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"block","block",664686210)], 0));
})]);
});
repl_tooling.editor_integration.interpreter.render_ns = (function repl_tooling$editor_integration$interpreter$render_ns(editor_state){
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Symbol(null,"js-require","js-require",1873175332,null),(function (p1__138666_SHARP_){
return require(shadow.js.shim.module$path.join(shadow.js.shim.module$path.dirname(new cljs.core.Keyword(null,"config-file-path","config-file-path",-862460128).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("editor","callbacks","editor/callbacks",1179124831).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(editor_state)))),p1__138666_SHARP_));
}),new cljs.core.Symbol(null,"create-tag","create-tag",1707994373,null),(function (p1__138667_SHARP_){
return document.createElement(p1__138667_SHARP_);
}),new cljs.core.Symbol(null,"set-text","set-text",-1307646024,null),(function (p1__138668_SHARP_,p2__138669_SHARP_){
return (p1__138668_SHARP_["innerText"] = p2__138669_SHARP_);
}),new cljs.core.Symbol(null,"set-html","set-html",654911706,null),(function (p1__138670_SHARP_,p2__138671_SHARP_){
return (p1__138670_SHARP_["innerHTML"] = p2__138671_SHARP_);
}),new cljs.core.Symbol(null,"add-class","add-class",-1746720837,null),(function() { 
var G__138771__delegate = function (e,args){
var seq__138676 = cljs.core.seq(args);
var chunk__138677 = null;
var count__138678 = (0);
var i__138679 = (0);
while(true){
if((i__138679 < count__138678)){
var a = chunk__138677.cljs$core$IIndexed$_nth$arity$2(null,i__138679);
e.classList.add(a);


var G__138772 = seq__138676;
var G__138773 = chunk__138677;
var G__138774 = count__138678;
var G__138775 = (i__138679 + (1));
seq__138676 = G__138772;
chunk__138677 = G__138773;
count__138678 = G__138774;
i__138679 = G__138775;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__138676);
if(temp__5753__auto__){
var seq__138676__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__138676__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__138676__$1);
var G__138776 = cljs.core.chunk_rest(seq__138676__$1);
var G__138777 = c__4649__auto__;
var G__138778 = cljs.core.count(c__4649__auto__);
var G__138779 = (0);
seq__138676 = G__138776;
chunk__138677 = G__138777;
count__138678 = G__138778;
i__138679 = G__138779;
continue;
} else {
var a = cljs.core.first(seq__138676__$1);
e.classList.add(a);


var G__138780 = cljs.core.next(seq__138676__$1);
var G__138781 = null;
var G__138782 = (0);
var G__138783 = (0);
seq__138676 = G__138780;
chunk__138677 = G__138781;
count__138678 = G__138782;
i__138679 = G__138783;
continue;
}
} else {
return null;
}
}
break;
}
};
var G__138771 = function (e,var_args){
var args = null;
if (arguments.length > 1) {
var G__138784__i = 0, G__138784__a = new Array(arguments.length -  1);
while (G__138784__i < G__138784__a.length) {G__138784__a[G__138784__i] = arguments[G__138784__i + 1]; ++G__138784__i;}
  args = new cljs.core.IndexedSeq(G__138784__a,0,null);
} 
return G__138771__delegate.call(this,e,args);};
G__138771.cljs$lang$maxFixedArity = 1;
G__138771.cljs$lang$applyTo = (function (arglist__138789){
var e = cljs.core.first(arglist__138789);
var args = cljs.core.rest(arglist__138789);
return G__138771__delegate(e,args);
});
G__138771.cljs$core$IFn$_invoke$arity$variadic = G__138771__delegate;
return G__138771;
})()
,new cljs.core.Symbol(null,"set-attr","set-attr",-235359091,null),(function (e,attr,value){
return e.setAttribute(attr,value);
}),new cljs.core.Symbol(null,"register-reagent","register-reagent",338980158,null),(function (p1__138672_SHARP_,p2__138673_SHARP_){
if(cljs.core.truth_((function (){var and__4221__auto__ = (p1__138672_SHARP_ instanceof cljs.core.Keyword);
if(and__4221__auto__){
var and__4221__auto____$1 = cljs.core.namespace(p1__138672_SHARP_);
if(cljs.core.truth_(and__4221__auto____$1)){
return cljs.core.fn_QMARK_(p2__138673_SHARP_);
} else {
return and__4221__auto____$1;
}
} else {
return and__4221__auto__;
}
})())){
return repl_tooling.editor_integration.renderer.pinkie.register_reagent(p1__138672_SHARP_,p2__138673_SHARP_);
} else {
return repl_tooling.editor_integration.commands.run_callback_BANG_.cljs$core$IFn$_invoke$arity$variadic(editor_state,new cljs.core.Keyword(null,"notify","notify",-1256867814),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"title","title",636505583),"Invalid params",new cljs.core.Keyword(null,"text","text",-1790561697),["First argument needs to be a namespaced keyword, ","and second argument needs to be a reagent fn"].join('')], null)], 0));
}
}),new cljs.core.Symbol(null,"register-tag","register-tag",1794595694,null),(function (p1__138674_SHARP_,p2__138675_SHARP_){
if(cljs.core.truth_((function (){var and__4221__auto__ = (p1__138674_SHARP_ instanceof cljs.core.Keyword);
if(and__4221__auto__){
var and__4221__auto____$1 = cljs.core.namespace(p1__138674_SHARP_);
if(cljs.core.truth_(and__4221__auto____$1)){
return cljs.core.fn_QMARK_(p2__138675_SHARP_);
} else {
return and__4221__auto____$1;
}
} else {
return and__4221__auto__;
}
})())){
return repl_tooling.editor_integration.renderer.pinkie.register_tag(p1__138674_SHARP_,p2__138675_SHARP_);
} else {
return repl_tooling.editor_integration.commands.run_callback_BANG_.cljs$core$IFn$_invoke$arity$variadic(editor_state,new cljs.core.Keyword(null,"notify","notify",-1256867814),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"title","title",636505583),"Invalid params",new cljs.core.Keyword(null,"text","text",-1790561697),["First argument needs to be a namespaced keyword, ","and second argument needs to be a function that ","returns a HTML tag"].join('')], null)], 0));
}
})], null);
});
repl_tooling.editor_integration.interpreter.prepare_nses = (function repl_tooling$editor_integration$interpreter$prepare_nses(repl,editor_state){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(clojure.set.rename_keys(sci.impl.namespaces.namespaces,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Symbol(null,"clojure.string","clojure.string",-1415552165,null),new cljs.core.Symbol(null,"str","str",-1564826950,null),new cljs.core.Symbol(null,"clojure.set","clojure.set",-630955632,null),new cljs.core.Symbol(null,"set","set",1945134081,null),new cljs.core.Symbol(null,"clojure.walk","clojure.walk",1625897340,null),new cljs.core.Symbol(null,"walk","walk",1673453164,null),new cljs.core.Symbol(null,"clojure.template","clojure.template",-1162325089,null),new cljs.core.Symbol(null,"template","template",938125843,null),new cljs.core.Symbol(null,"clojure.repl","clojure.repl",570897595,null),new cljs.core.Symbol(null,"repl","repl",1605132860,null),new cljs.core.Symbol(null,"clojure.edn","clojure.edn",-302325352,null),new cljs.core.Symbol(null,"edn","edn",-1336594884,null)], null)),new cljs.core.Symbol(null,"r","r",1169147337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Symbol(null,"create-class","create-class",-665911586,null),new cljs.core.Symbol(null,"atom","atom",1243487874,null),new cljs.core.Symbol(null,"render","render",232498073,null),new cljs.core.Symbol(null,"as-element","as-element",-2139409597,null),new cljs.core.Symbol(null,"reactify-component","reactify-component",-882526483,null),new cljs.core.Symbol(null,"is-client","is-client",-580030505,null),new cljs.core.Symbol(null,"current-component","current-component",830794177,null),new cljs.core.Symbol(null,"create-element","create-element",1833774591,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null),new cljs.core.Symbol(null,"wrap","wrap",-1802765782,null),new cljs.core.Symbol(null,"adapt-react-class","adapt-react-class",1221068673,null)],[reagent.core.create_class,reagent.core.atom,reagent.dom.render,reagent.core.as_element,reagent.core.reactify_component,reagent.core.is_client,reagent.core.current_component,reagent.core.create_element,reagent.core.cursor,reagent.core.wrap,reagent.core.adapt_react_class])),new cljs.core.Symbol(null,"render","render",232498073,null),repl_tooling.editor_integration.interpreter.render_ns(editor_state)),new cljs.core.Symbol(null,"editor","editor",651153757,null),repl_tooling.editor_integration.interpreter.editor_ns(repl,editor_state)),new cljs.core.Symbol(null,"repl-tooling.editor-helpers","repl-tooling.editor-helpers",1017498236,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"Error","Error",-1692662047,null),repl_tooling.editor_helpers.Error], null));
});
repl_tooling.editor_integration.interpreter.promised_bindings = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Symbol(null,"promise","promise",-887306482,null),(function (p1__138701_SHARP_){
return Promise.resolve(p1__138701_SHARP_);
}),new cljs.core.Symbol("p","then","p/then",2101129421,null),(function (p1__138702_SHARP_,p2__138703_SHARP_){
return p1__138702_SHARP_.then(p2__138703_SHARP_);
}),new cljs.core.Symbol("p","catch","p/catch",-1616370133,null),(function (p1__138704_SHARP_,p2__138705_SHARP_){
return p1__138704_SHARP_.catch(p2__138705_SHARP_);
}),new cljs.core.Symbol("p","let","p/let",358118874,null),repl_tooling.editor_integration.interpreter.promised_let], null);
repl_tooling.editor_integration.interpreter.debug_bindings = (function repl_tooling$editor_integration$interpreter$debug_bindings(editor_state){
var run_callback = new cljs.core.Keyword(null,"run-callback","run-callback",-1601688857).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(editor_state));
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Symbol(null,"println","println",-733595439,null),(function() { 
var G__138790__delegate = function (args){
var G__138707_138791 = new cljs.core.Keyword(null,"on-stdout","on-stdout",1480958368);
var G__138708_138792 = [clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",args),"\n"].join('');
(run_callback.cljs$core$IFn$_invoke$arity$2 ? run_callback.cljs$core$IFn$_invoke$arity$2(G__138707_138791,G__138708_138792) : run_callback.call(null,G__138707_138791,G__138708_138792));

return null;
};
var G__138790 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__138793__i = 0, G__138793__a = new Array(arguments.length -  0);
while (G__138793__i < G__138793__a.length) {G__138793__a[G__138793__i] = arguments[G__138793__i + 0]; ++G__138793__i;}
  args = new cljs.core.IndexedSeq(G__138793__a,0,null);
} 
return G__138790__delegate.call(this,args);};
G__138790.cljs$lang$maxFixedArity = 0;
G__138790.cljs$lang$applyTo = (function (arglist__138794){
var args = cljs.core.seq(arglist__138794);
return G__138790__delegate(args);
});
G__138790.cljs$core$IFn$_invoke$arity$variadic = G__138790__delegate;
return G__138790;
})()
,new cljs.core.Symbol(null,"print","print",-1354873355,null),(function() { 
var G__138795__delegate = function (args){
var G__138709_138796 = new cljs.core.Keyword(null,"on-stdout","on-stdout",1480958368);
var G__138710_138797 = clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",args);
(run_callback.cljs$core$IFn$_invoke$arity$2 ? run_callback.cljs$core$IFn$_invoke$arity$2(G__138709_138796,G__138710_138797) : run_callback.call(null,G__138709_138796,G__138710_138797));

return null;
};
var G__138795 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__138798__i = 0, G__138798__a = new Array(arguments.length -  0);
while (G__138798__i < G__138798__a.length) {G__138798__a[G__138798__i] = arguments[G__138798__i + 0]; ++G__138798__i;}
  args = new cljs.core.IndexedSeq(G__138798__a,0,null);
} 
return G__138795__delegate.call(this,args);};
G__138795.cljs$lang$maxFixedArity = 0;
G__138795.cljs$lang$applyTo = (function (arglist__138799){
var args = cljs.core.seq(arglist__138799);
return G__138795__delegate(args);
});
G__138795.cljs$core$IFn$_invoke$arity$variadic = G__138795__delegate;
return G__138795;
})()
,new cljs.core.Symbol(null,"prn","prn",1561684909,null),(function() { 
var G__138800__delegate = function (args){
var G__138711_138801 = new cljs.core.Keyword(null,"on-stdout","on-stdout",1480958368);
var G__138712_138802 = (function (p1__138706_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__138706_SHARP_),"\n"].join('');
})(clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,args)));
(run_callback.cljs$core$IFn$_invoke$arity$2 ? run_callback.cljs$core$IFn$_invoke$arity$2(G__138711_138801,G__138712_138802) : run_callback.call(null,G__138711_138801,G__138712_138802));

return null;
};
var G__138800 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__138803__i = 0, G__138803__a = new Array(arguments.length -  0);
while (G__138803__i < G__138803__a.length) {G__138803__a[G__138803__i] = arguments[G__138803__i + 0]; ++G__138803__i;}
  args = new cljs.core.IndexedSeq(G__138803__a,0,null);
} 
return G__138800__delegate.call(this,args);};
G__138800.cljs$lang$maxFixedArity = 0;
G__138800.cljs$lang$applyTo = (function (arglist__138804){
var args = cljs.core.seq(arglist__138804);
return G__138800__delegate(args);
});
G__138800.cljs$core$IFn$_invoke$arity$variadic = G__138800__delegate;
return G__138800;
})()
,new cljs.core.Symbol(null,"log","log",45015523,null),(function() { 
var G__138805__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(console.log,args);
};
var G__138805 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__138806__i = 0, G__138806__a = new Array(arguments.length -  0);
while (G__138806__i < G__138806__a.length) {G__138806__a[G__138806__i] = arguments[G__138806__i + 0]; ++G__138806__i;}
  args = new cljs.core.IndexedSeq(G__138806__a,0,null);
} 
return G__138805__delegate.call(this,args);};
G__138805.cljs$lang$maxFixedArity = 0;
G__138805.cljs$lang$applyTo = (function (arglist__138807){
var args = cljs.core.seq(arglist__138807);
return G__138805__delegate(args);
});
G__138805.cljs$core$IFn$_invoke$arity$variadic = G__138805__delegate;
return G__138805;
})()
,new cljs.core.Symbol(null,"pr","pr",1056937027,null),(function() { 
var G__138808__delegate = function (args){
var G__138713_138809 = new cljs.core.Keyword(null,"on-stdout","on-stdout",1480958368);
var G__138714_138810 = clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,args));
(run_callback.cljs$core$IFn$_invoke$arity$2 ? run_callback.cljs$core$IFn$_invoke$arity$2(G__138713_138809,G__138714_138810) : run_callback.call(null,G__138713_138809,G__138714_138810));

return null;
};
var G__138808 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__138811__i = 0, G__138811__a = new Array(arguments.length -  0);
while (G__138811__i < G__138811__a.length) {G__138811__a[G__138811__i] = arguments[G__138811__i + 0]; ++G__138811__i;}
  args = new cljs.core.IndexedSeq(G__138811__a,0,null);
} 
return G__138808__delegate.call(this,args);};
G__138808.cljs$lang$maxFixedArity = 0;
G__138808.cljs$lang$applyTo = (function (arglist__138812){
var args = cljs.core.seq(arglist__138812);
return G__138808__delegate(args);
});
G__138808.cljs$core$IFn$_invoke$arity$variadic = G__138808__delegate;
return G__138808;
})()
], null);
});
repl_tooling.editor_integration.interpreter.readers_for = (function repl_tooling$editor_integration$interpreter$readers_for(editor_state){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Symbol(null,"repl-tooling.editor-helpers.Error","repl-tooling.editor-helpers.Error",-45274176,null),repl_tooling.editor_helpers.map__GT_Error,new cljs.core.Symbol(null,"repl-tooling.editor-helpers.Browseable","repl-tooling.editor-helpers.Browseable",-596236747,null),repl_tooling.editor_helpers.map__GT_Browseable,new cljs.core.Symbol(null,"repl-tooling.editor-helpers.Patchable","repl-tooling.editor-helpers.Patchable",-1663886942,null),repl_tooling.editor_helpers.map__GT_Patchable,new cljs.core.Symbol(null,"repl-tooling.editor-helpers.IncompleteObj","repl-tooling.editor-helpers.IncompleteObj",-1250019273,null),repl_tooling.editor_helpers.map__GT_IncompleteObj], null);
});
repl_tooling.editor_integration.interpreter.evaluate_code = (function repl_tooling$editor_integration$interpreter$evaluate_code(p__138733){
var map__138734 = p__138733;
var map__138734__$1 = cljs.core.__destructure_map(map__138734);
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__138734__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__138734__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var sci_state = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__138734__$1,new cljs.core.Keyword(null,"sci-state","sci-state",-1065730528),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY));
var editor_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__138734__$1,new cljs.core.Keyword(null,"editor-state","editor-state",579582138));
var repl = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__138734__$1,new cljs.core.Keyword(null,"repl","repl",-35398667));
var bindings__$1 = (cljs.core.truth_(editor_state)?cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(repl_tooling.editor_integration.interpreter.promised_bindings,new cljs.core.Symbol(null,"eql","eql",-1239543386,null),new cljs.core.Keyword(null,"eql","eql",1414892383).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("editor","feature","editor/feature",1268484873).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(editor_state)))),repl_tooling.editor_integration.interpreter.debug_bindings(editor_state),bindings], 0)):repl_tooling.editor_integration.interpreter.promised_bindings
);
return sci.core.eval_string.cljs$core$IFn$_invoke$arity$2(code,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"env","env",-1815813235),sci_state,new cljs.core.Keyword(null,"classes","classes",2037804510),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"allow","allow",-1857325745),new cljs.core.Keyword(null,"all","all",892129742)], null),new cljs.core.Keyword(null,"preset","preset",777387345),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"termination-safe","termination-safe",-1845225130),true], null),new cljs.core.Keyword(null,"readers","readers",-2118263030),repl_tooling.editor_integration.interpreter.readers_for(editor_state),new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),repl_tooling.editor_integration.interpreter.prepare_nses(repl,editor_state),new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings__$1], null));
});

//# sourceMappingURL=repl_tooling.editor_integration.interpreter.js.map
