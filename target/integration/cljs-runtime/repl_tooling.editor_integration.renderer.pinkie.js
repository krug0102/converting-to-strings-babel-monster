goog.provide('repl_tooling.editor_integration.renderer.pinkie');
repl_tooling.editor_integration.renderer.pinkie.norm_reagent_fn = (function repl_tooling$editor_integration$renderer$pinkie$norm_reagent_fn(fun){
return (function() { 
var G__89483__delegate = function (args){
var empty = (new Object());
var state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(empty);
var render = (function() { 
var G__89484__delegate = function (state__$1,args__$1){
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
var G__89484 = function (state__$1,var_args){
var args__$1 = null;
if (arguments.length > 1) {
var G__89485__i = 0, G__89485__a = new Array(arguments.length -  1);
while (G__89485__i < G__89485__a.length) {G__89485__a[G__89485__i] = arguments[G__89485__i + 1]; ++G__89485__i;}
  args__$1 = new cljs.core.IndexedSeq(G__89485__a,0,null);
} 
return G__89484__delegate.call(this,state__$1,args__$1);};
G__89484.cljs$lang$maxFixedArity = 1;
G__89484.cljs$lang$applyTo = (function (arglist__89486){
var state__$1 = cljs.core.first(arglist__89486);
var args__$1 = cljs.core.rest(arglist__89486);
return G__89484__delegate(state__$1,args__$1);
});
G__89484.cljs$core$IFn$_invoke$arity$variadic = G__89484__delegate;
return G__89484;
})()
;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,render,state,args);
};
var G__89483 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__89487__i = 0, G__89487__a = new Array(arguments.length -  0);
while (G__89487__i < G__89487__a.length) {G__89487__a[G__89487__i] = arguments[G__89487__i + 0]; ++G__89487__i;}
  args = new cljs.core.IndexedSeq(G__89487__a,0,null);
} 
return G__89483__delegate.call(this,args);};
G__89483.cljs$lang$maxFixedArity = 0;
G__89483.cljs$lang$applyTo = (function (arglist__89488){
var args = cljs.core.seq(arglist__89488);
return G__89483__delegate(args);
});
G__89483.cljs$core$IFn$_invoke$arity$variadic = G__89483__delegate;
return G__89483;
})()
;
});
repl_tooling.editor_integration.renderer.pinkie.register_reagent = (function repl_tooling$editor_integration$renderer$pinkie$register_reagent(keyword,fun){
return repl_tooling.ui.pinkie.register_tag(keyword,repl_tooling.editor_integration.renderer.pinkie.norm_reagent_fn(fun));
});
repl_tooling.editor_integration.renderer.pinkie.norm_pinkie_fn = (function repl_tooling$editor_integration$renderer$pinkie$norm_pinkie_fn(fun){
return (function() { 
var G__89489__delegate = function (args){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pinkgorilla.ui.jsrender.render_js,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"f","f",-1597136552),(function (dom,args__$1){
var div = document.createElement("div");
var upd = (function (elem){
try{dom.removeChild(div);
}catch (e89467){var __89490 = e89467;
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
var G__89489 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__89491__i = 0, G__89491__a = new Array(arguments.length -  0);
while (G__89491__i < G__89491__a.length) {G__89491__a[G__89491__i] = arguments[G__89491__i + 0]; ++G__89491__i;}
  args = new cljs.core.IndexedSeq(G__89491__a,0,null);
} 
return G__89489__delegate.call(this,args);};
G__89489.cljs$lang$maxFixedArity = 0;
G__89489.cljs$lang$applyTo = (function (arglist__89492){
var args = cljs.core.seq(arglist__89492);
return G__89489__delegate(args);
});
G__89489.cljs$core$IFn$_invoke$arity$variadic = G__89489__delegate;
return G__89489;
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
var len__4829__auto___89493 = arguments.length;
var i__4830__auto___89494 = (0);
while(true){
if((i__4830__auto___89494 < len__4829__auto___89493)){
args__4835__auto__.push((arguments[i__4830__auto___89494]));

var G__89495 = (i__4830__auto___89494 + (1));
i__4830__auto___89494 = G__89495;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return repl_tooling.editor_integration.renderer.pinkie.ansi_tag.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(repl_tooling.editor_integration.renderer.pinkie.ansi_tag.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,txts){
var vec__89470 = ((cljs.core.map_QMARK_(attrs))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs,txts], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,cljs.core.cons(attrs,txts)], null));
var attrs__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__89470,(0),null);
var txts__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__89470,(1),null);
var attrs__$2 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"pre block"], null),attrs__$1], 0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(attrs__$2,new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),({"__html": repl_tooling.editor_integration.renderer.pinkie.ansi.ansi_to_html(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,txts__$1))}))], null);
}));

(repl_tooling.editor_integration.renderer.pinkie.ansi_tag.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(repl_tooling.editor_integration.renderer.pinkie.ansi_tag.cljs$lang$applyTo = (function (seq89468){
var G__89469 = cljs.core.first(seq89468);
var seq89468__$1 = cljs.core.next(seq89468);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__89469,seq89468__$1);
}));

repl_tooling.editor_integration.renderer.pinkie.code_tag = (function repl_tooling$editor_integration$renderer$pinkie$code_tag(var_args){
var args__4835__auto__ = [];
var len__4829__auto___89496 = arguments.length;
var i__4830__auto___89497 = (0);
while(true){
if((i__4830__auto___89497 < len__4829__auto___89496)){
args__4835__auto__.push((arguments[i__4830__auto___89497]));

var G__89498 = (i__4830__auto___89497 + (1));
i__4830__auto___89497 = G__89498;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return repl_tooling.editor_integration.renderer.pinkie.code_tag.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(repl_tooling.editor_integration.renderer.pinkie.code_tag.cljs$core$IFn$_invoke$arity$variadic = (function (param,body){
var vec__89475 = ((cljs.core.map_QMARK_(param))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param,body], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.cons(param,body)], null));
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__89475,(0),null);
var body__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__89475,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(params,new cljs.core.Keyword(null,"class","class",-2030961996),"hljs"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),shadow.js.shim.module$highlight.highlight(clojure.string.join.cljs$core$IFn$_invoke$arity$2("",body__$1),({"language": "clojure", "ignoreIllegals": true})).value], null)], null)], null)], null);
}));

(repl_tooling.editor_integration.renderer.pinkie.code_tag.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(repl_tooling.editor_integration.renderer.pinkie.code_tag.cljs$lang$applyTo = (function (seq89473){
var G__89474 = cljs.core.first(seq89473);
var seq89473__$1 = cljs.core.next(seq89473);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__89474,seq89473__$1);
}));

repl_tooling.editor_integration.renderer.pinkie.markdown_tag = (function repl_tooling$editor_integration$renderer$pinkie$markdown_tag(var_args){
var args__4835__auto__ = [];
var len__4829__auto___89501 = arguments.length;
var i__4830__auto___89502 = (0);
while(true){
if((i__4830__auto___89502 < len__4829__auto___89501)){
args__4835__auto__.push((arguments[i__4830__auto___89502]));

var G__89503 = (i__4830__auto___89502 + (1));
i__4830__auto___89502 = G__89503;
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

var seq__89479_89504 = cljs.core.seq(div.querySelectorAll("pre code"));
var chunk__89480_89505 = null;
var count__89481_89506 = (0);
var i__89482_89507 = (0);
while(true){
if((i__89482_89507 < count__89481_89506)){
var n_89508 = chunk__89480_89505.cljs$core$IIndexed$_nth$arity$2(null,i__89482_89507);
shadow.js.shim.module$highlight.highlightElement(n_89508);

n_89508.parentElement.classList.add("hljs");


var G__89509 = seq__89479_89504;
var G__89510 = chunk__89480_89505;
var G__89511 = count__89481_89506;
var G__89512 = (i__89482_89507 + (1));
seq__89479_89504 = G__89509;
chunk__89480_89505 = G__89510;
count__89481_89506 = G__89511;
i__89482_89507 = G__89512;
continue;
} else {
var temp__5753__auto___89513 = cljs.core.seq(seq__89479_89504);
if(temp__5753__auto___89513){
var seq__89479_89514__$1 = temp__5753__auto___89513;
if(cljs.core.chunked_seq_QMARK_(seq__89479_89514__$1)){
var c__4649__auto___89515 = cljs.core.chunk_first(seq__89479_89514__$1);
var G__89516 = cljs.core.chunk_rest(seq__89479_89514__$1);
var G__89517 = c__4649__auto___89515;
var G__89518 = cljs.core.count(c__4649__auto___89515);
var G__89519 = (0);
seq__89479_89504 = G__89516;
chunk__89480_89505 = G__89517;
count__89481_89506 = G__89518;
i__89482_89507 = G__89519;
continue;
} else {
var n_89520 = cljs.core.first(seq__89479_89514__$1);
shadow.js.shim.module$highlight.highlightElement(n_89520);

n_89520.parentElement.classList.add("hljs");


var G__89521 = cljs.core.next(seq__89479_89514__$1);
var G__89522 = null;
var G__89523 = (0);
var G__89524 = (0);
seq__89479_89504 = G__89521;
chunk__89480_89505 = G__89522;
count__89481_89506 = G__89523;
i__89482_89507 = G__89524;
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
(repl_tooling.editor_integration.renderer.pinkie.markdown_tag.cljs$lang$applyTo = (function (seq89478){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq89478));
}));


//# sourceMappingURL=repl_tooling.editor_integration.renderer.pinkie.js.map
