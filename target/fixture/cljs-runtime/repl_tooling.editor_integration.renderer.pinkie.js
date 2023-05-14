goog.provide('repl_tooling.editor_integration.renderer.pinkie');
repl_tooling.editor_integration.renderer.pinkie.norm_reagent_fn = (function repl_tooling$editor_integration$renderer$pinkie$norm_reagent_fn(fun){
return (function() { 
var G__161101__delegate = function (args){
var empty = (new Object());
var state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(empty);
var render = (function() { 
var G__161102__delegate = function (state__$1,args__$1){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(empty,cljs.core.deref(state__$1))){
promesa.protocols._bind(null,(function (___56277__auto__){
return promesa.protocols._bind(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(fun,args__$1),(function (res){
return promesa.protocols._bind(null,(function (___56267__auto__){
return promesa.protocols._promise(cljs.core.reset_BANG_(state__$1,res));
}));
}));
}));

return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.repl-tooling.icon.loading","div.repl-tooling.icon.loading",-644670055)], null);
} else {
return cljs.core.deref(state__$1);
}
};
var G__161102 = function (state__$1,var_args){
var args__$1 = null;
if (arguments.length > 1) {
var G__161103__i = 0, G__161103__a = new Array(arguments.length -  1);
while (G__161103__i < G__161103__a.length) {G__161103__a[G__161103__i] = arguments[G__161103__i + 1]; ++G__161103__i;}
  args__$1 = new cljs.core.IndexedSeq(G__161103__a,0,null);
} 
return G__161102__delegate.call(this,state__$1,args__$1);};
G__161102.cljs$lang$maxFixedArity = 1;
G__161102.cljs$lang$applyTo = (function (arglist__161104){
var state__$1 = cljs.core.first(arglist__161104);
var args__$1 = cljs.core.rest(arglist__161104);
return G__161102__delegate(state__$1,args__$1);
});
G__161102.cljs$core$IFn$_invoke$arity$variadic = G__161102__delegate;
return G__161102;
})()
;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,render,state,args);
};
var G__161101 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__161105__i = 0, G__161105__a = new Array(arguments.length -  0);
while (G__161105__i < G__161105__a.length) {G__161105__a[G__161105__i] = arguments[G__161105__i + 0]; ++G__161105__i;}
  args = new cljs.core.IndexedSeq(G__161105__a,0,null);
} 
return G__161101__delegate.call(this,args);};
G__161101.cljs$lang$maxFixedArity = 0;
G__161101.cljs$lang$applyTo = (function (arglist__161106){
var args = cljs.core.seq(arglist__161106);
return G__161101__delegate(args);
});
G__161101.cljs$core$IFn$_invoke$arity$variadic = G__161101__delegate;
return G__161101;
})()
;
});
repl_tooling.editor_integration.renderer.pinkie.register_reagent = (function repl_tooling$editor_integration$renderer$pinkie$register_reagent(keyword,fun){
return repl_tooling.ui.pinkie.register_tag(keyword,repl_tooling.editor_integration.renderer.pinkie.norm_reagent_fn(fun));
});
repl_tooling.editor_integration.renderer.pinkie.norm_pinkie_fn = (function repl_tooling$editor_integration$renderer$pinkie$norm_pinkie_fn(fun){
return (function() { 
var G__161107__delegate = function (args){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pinkgorilla.ui.jsrender.render_js,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"f","f",-1597136552),(function (dom,args__$1){
var div = document.createElement("div");
var upd = (function (elem){
try{dom.removeChild(div);
}catch (e161085){var __161108 = e161085;
}
return dom.appendChild(elem);
});
var elem = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(fun,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(args__$1));
div.classList.add("repl-tooling","icon","loading");

dom.appendChild(div);

if((elem instanceof Promise)){
return elem.then(upd);
} else {
return upd(elem);
}
}),new cljs.core.Keyword(null,"data","data",-232669377),args], null)], null);
};
var G__161107 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__161109__i = 0, G__161109__a = new Array(arguments.length -  0);
while (G__161109__i < G__161109__a.length) {G__161109__a[G__161109__i] = arguments[G__161109__i + 0]; ++G__161109__i;}
  args = new cljs.core.IndexedSeq(G__161109__a,0,null);
} 
return G__161107__delegate.call(this,args);};
G__161107.cljs$lang$maxFixedArity = 0;
G__161107.cljs$lang$applyTo = (function (arglist__161110){
var args = cljs.core.seq(arglist__161110);
return G__161107__delegate(args);
});
G__161107.cljs$core$IFn$_invoke$arity$variadic = G__161107__delegate;
return G__161107;
})()
;
});
repl_tooling.editor_integration.renderer.pinkie.register_tag = (function repl_tooling$editor_integration$renderer$pinkie$register_tag(keyword,fun){
return repl_tooling.ui.pinkie.register_tag(keyword,repl_tooling.editor_integration.renderer.pinkie.norm_pinkie_fn(fun));
});
if((typeof repl_tooling !== 'undefined') && (typeof repl_tooling.editor_integration !== 'undefined') && (typeof repl_tooling.editor_integration.renderer !== 'undefined') && (typeof repl_tooling.editor_integration.renderer.pinkie !== 'undefined') && (typeof repl_tooling.editor_integration.renderer.pinkie.ansi !== 'undefined')){
} else {
repl_tooling.editor_integration.renderer.pinkie.ansi = (new shadow.js.shim.module$ansi_up.default());
}
repl_tooling.editor_integration.renderer.pinkie.ansi_tag = (function repl_tooling$editor_integration$renderer$pinkie$ansi_tag(var_args){
var args__4835__auto__ = [];
var len__4829__auto___161111 = arguments.length;
var i__4830__auto___161112 = (0);
while(true){
if((i__4830__auto___161112 < len__4829__auto___161111)){
args__4835__auto__.push((arguments[i__4830__auto___161112]));

var G__161113 = (i__4830__auto___161112 + (1));
i__4830__auto___161112 = G__161113;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return repl_tooling.editor_integration.renderer.pinkie.ansi_tag.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(repl_tooling.editor_integration.renderer.pinkie.ansi_tag.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,txts){
var vec__161088 = ((cljs.core.map_QMARK_(attrs))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs,txts], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,cljs.core.cons(attrs,txts)], null));
var attrs__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__161088,(0),null);
var txts__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__161088,(1),null);
var attrs__$2 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"pre block"], null),attrs__$1], 0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(attrs__$2,new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),({"__html": repl_tooling.editor_integration.renderer.pinkie.ansi.ansi_to_html(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,txts__$1))}))], null);
}));

(repl_tooling.editor_integration.renderer.pinkie.ansi_tag.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(repl_tooling.editor_integration.renderer.pinkie.ansi_tag.cljs$lang$applyTo = (function (seq161086){
var G__161087 = cljs.core.first(seq161086);
var seq161086__$1 = cljs.core.next(seq161086);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__161087,seq161086__$1);
}));

repl_tooling.editor_integration.renderer.pinkie.code_tag = (function repl_tooling$editor_integration$renderer$pinkie$code_tag(var_args){
var args__4835__auto__ = [];
var len__4829__auto___161114 = arguments.length;
var i__4830__auto___161115 = (0);
while(true){
if((i__4830__auto___161115 < len__4829__auto___161114)){
args__4835__auto__.push((arguments[i__4830__auto___161115]));

var G__161116 = (i__4830__auto___161115 + (1));
i__4830__auto___161115 = G__161116;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return repl_tooling.editor_integration.renderer.pinkie.code_tag.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(repl_tooling.editor_integration.renderer.pinkie.code_tag.cljs$core$IFn$_invoke$arity$variadic = (function (param,body){
var vec__161093 = ((cljs.core.map_QMARK_(param))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param,body], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.cons(param,body)], null));
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__161093,(0),null);
var body__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__161093,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(params,new cljs.core.Keyword(null,"class","class",-2030961996),"hljs"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),shadow.js.shim.module$highlight.highlight(clojure.string.join.cljs$core$IFn$_invoke$arity$2("",body__$1),({"language": "clojure", "ignoreIllegals": true})).value], null)], null)], null)], null);
}));

(repl_tooling.editor_integration.renderer.pinkie.code_tag.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(repl_tooling.editor_integration.renderer.pinkie.code_tag.cljs$lang$applyTo = (function (seq161091){
var G__161092 = cljs.core.first(seq161091);
var seq161091__$1 = cljs.core.next(seq161091);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__161092,seq161091__$1);
}));

repl_tooling.editor_integration.renderer.pinkie.markdown_tag = (function repl_tooling$editor_integration$renderer$pinkie$markdown_tag(var_args){
var args__4835__auto__ = [];
var len__4829__auto___161117 = arguments.length;
var i__4830__auto___161118 = (0);
while(true){
if((i__4830__auto___161118 < len__4829__auto___161117)){
args__4835__auto__.push((arguments[i__4830__auto___161118]));

var G__161119 = (i__4830__auto___161118 + (1));
i__4830__auto___161118 = G__161119;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return repl_tooling.editor_integration.renderer.pinkie.markdown_tag.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(repl_tooling.editor_integration.renderer.pinkie.markdown_tag.cljs$core$IFn$_invoke$arity$variadic = (function (body){
var parser = (new shadow.js.shim.module$commonmark.Parser());
var render = (new shadow.js.shim.module$commonmark.HtmlRenderer());
var body__$1 = clojure.string.join.cljs$core$IFn$_invoke$arity$2("",body);
var div = document.createElement("div");
div.classList.add("rows");

(div["innerHTML"] = render.render(parser.parse(body__$1)));

var seq__161097_161120 = cljs.core.seq(div.querySelectorAll("pre code"));
var chunk__161098_161121 = null;
var count__161099_161122 = (0);
var i__161100_161123 = (0);
while(true){
if((i__161100_161123 < count__161099_161122)){
var n_161124 = chunk__161098_161121.cljs$core$IIndexed$_nth$arity$2(null,i__161100_161123);
shadow.js.shim.module$highlight.highlightElement(n_161124);

n_161124.parentElement.classList.add("hljs");


var G__161125 = seq__161097_161120;
var G__161126 = chunk__161098_161121;
var G__161127 = count__161099_161122;
var G__161128 = (i__161100_161123 + (1));
seq__161097_161120 = G__161125;
chunk__161098_161121 = G__161126;
count__161099_161122 = G__161127;
i__161100_161123 = G__161128;
continue;
} else {
var temp__5753__auto___161129 = cljs.core.seq(seq__161097_161120);
if(temp__5753__auto___161129){
var seq__161097_161130__$1 = temp__5753__auto___161129;
if(cljs.core.chunked_seq_QMARK_(seq__161097_161130__$1)){
var c__4649__auto___161131 = cljs.core.chunk_first(seq__161097_161130__$1);
var G__161132 = cljs.core.chunk_rest(seq__161097_161130__$1);
var G__161133 = c__4649__auto___161131;
var G__161134 = cljs.core.count(c__4649__auto___161131);
var G__161135 = (0);
seq__161097_161120 = G__161132;
chunk__161098_161121 = G__161133;
count__161099_161122 = G__161134;
i__161100_161123 = G__161135;
continue;
} else {
var n_161136 = cljs.core.first(seq__161097_161130__$1);
shadow.js.shim.module$highlight.highlightElement(n_161136);

n_161136.parentElement.classList.add("hljs");


var G__161137 = cljs.core.next(seq__161097_161130__$1);
var G__161138 = null;
var G__161139 = (0);
var G__161140 = (0);
seq__161097_161120 = G__161137;
chunk__161098_161121 = G__161138;
count__161099_161122 = G__161139;
i__161100_161123 = G__161140;
continue;
}
} else {
}
}
break;
}

return div;
}));

(repl_tooling.editor_integration.renderer.pinkie.markdown_tag.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(repl_tooling.editor_integration.renderer.pinkie.markdown_tag.cljs$lang$applyTo = (function (seq161096){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq161096));
}));


//# sourceMappingURL=repl_tooling.editor_integration.renderer.pinkie.js.map
