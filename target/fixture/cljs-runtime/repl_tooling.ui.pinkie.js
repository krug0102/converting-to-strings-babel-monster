goog.provide('repl_tooling.ui.pinkie');
repl_tooling.ui.pinkie.custom_renderers = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
repl_tooling.ui.pinkie.renderer_list = (function repl_tooling$ui$pinkie$renderer_list(){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__154022_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"k","k",-2146297393),cljs.core.first(p1__154022_SHARP_),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"r","r",-471384190),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.last(p1__154022_SHARP_)], 0))], 0));
}),cljs.core.seq(cljs.core.deref(repl_tooling.ui.pinkie.custom_renderers)));
});
repl_tooling.ui.pinkie.register_tag = (function repl_tooling$ui$pinkie$register_tag(k,v){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(repl_tooling.ui.pinkie.custom_renderers,cljs.core.assoc,k,v);
});
repl_tooling.ui.pinkie.clj__GT_json = (function repl_tooling$ui$pinkie$clj__GT_json(ds){
return JSON.stringify(cljs.core.clj__GT_js(ds));
});
repl_tooling.ui.pinkie.html5_tag_QMARK_ = (function repl_tooling$ui$pinkie$html5_tag_QMARK_(tag){
var tag_typed = reagent.impl.template.cached_parse(tag);
var tag_clean = tag_typed.tag;
var tag_clean__$1 = (((tag_clean == null))?null:cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(tag_clean));
return cljs.core.contains_QMARK_(pinkgorilla.ui.htmltags.html5_tags,tag_clean__$1);
});
repl_tooling.ui.pinkie.pinkie_tag_QMARK_ = (function repl_tooling$ui$pinkie$pinkie_tag_QMARK_(tag){
var and__4221__auto__ = (tag instanceof cljs.core.Keyword);
if(and__4221__auto__){
return cljs.core.namespace(tag);
} else {
return and__4221__auto__;
}
});
repl_tooling.ui.pinkie.pinkie_exclude_QMARK_ = (function repl_tooling$ui$pinkie$pinkie_exclude_QMARK_(hiccup_vector){
return cljs.core.contains_QMARK_(cljs.core.meta(hiccup_vector),new cljs.core.Keyword(null,"r","r",-471384190));
});
repl_tooling.ui.pinkie.hiccup_vector_QMARK_ = (function repl_tooling$ui$pinkie$hiccup_vector_QMARK_(hiccup_vector){
return ((cljs.core.vector_QMARK_(hiccup_vector)) && ((((!(cljs.core.map_entry_QMARK_(hiccup_vector)))) && ((cljs.core.first(hiccup_vector) instanceof cljs.core.Keyword)))));
});
repl_tooling.ui.pinkie.should_replace_QMARK_ = (function repl_tooling$ui$pinkie$should_replace_QMARK_(hiccup_vector){
if(repl_tooling.ui.pinkie.hiccup_vector_QMARK_(hiccup_vector)){
var tag = cljs.core.first(hiccup_vector);
var and__4221__auto__ = (!(repl_tooling.ui.pinkie.pinkie_exclude_QMARK_(hiccup_vector)));
if(and__4221__auto__){
var and__4221__auto____$1 = (!(repl_tooling.ui.pinkie.html5_tag_QMARK_(tag)));
if(and__4221__auto____$1){
return repl_tooling.ui.pinkie.pinkie_tag_QMARK_(tag);
} else {
return and__4221__auto____$1;
}
} else {
return and__4221__auto__;
}
} else {
return false;
}
});
/**
 * ui component for unknown tags - so that we don't need to catch react errors
 * Currently not yet used (see resolve function)
 */
repl_tooling.ui.pinkie.unknown_tag = (function repl_tooling$ui$pinkie$unknown_tag(tag){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.unknown-tag","span.unknown-tag",-1604027258),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"red"], null)], null),["Unknown Tag: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag)].join('')], null);
});
/**
 * input: hiccup vector
 * if keyword (first position in vector) has been registered via register-tag,
 * then it gets replaced with the react function,
 * otherwise keyword remains
 */
repl_tooling.ui.pinkie.replace_tag_in_hiccup_vector = (function repl_tooling$ui$pinkie$replace_tag_in_hiccup_vector(hiccup_vector){
var tag = cljs.core.first(hiccup_vector);
var render_function = (function (){var G__154026 = cljs.core.deref(repl_tooling.ui.pinkie.custom_renderers);
return (tag.cljs$core$IFn$_invoke$arity$1 ? tag.cljs$core$IFn$_invoke$arity$1(G__154026) : tag.call(null,G__154026));
})();
if((render_function == null)){
console.log("pinkie unknown tag: ",cljs.core.name(tag));

return repl_tooling.ui.pinkie.unknown_tag(tag);
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(hiccup_vector,(0),render_function));
}
});
/**
 * resolve function-as symbol to function references in the reagent-hickup-map.
 * Leaves regular hiccup data unchanged.
 */
repl_tooling.ui.pinkie.tag_inject = (function repl_tooling$ui$pinkie$tag_inject(hiccup_vector){
return clojure.walk.prewalk((function (x){
if(cljs.core.truth_(repl_tooling.ui.pinkie.should_replace_QMARK_(x))){
return repl_tooling.ui.pinkie.replace_tag_in_hiccup_vector(x);
} else {
return x;
}
}),hiccup_vector);
});
repl_tooling.ui.pinkie.to_map_style = (function repl_tooling$ui$pinkie$to_map_style(s){
var style_vec = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__154027_SHARP_){
return clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__154027_SHARP_,/:/);
}),clojure.string.split.cljs$core$IFn$_invoke$arity$2(s,/;/));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4622__auto__ = (function repl_tooling$ui$pinkie$to_map_style_$_iter__154028(s__154029){
return (new cljs.core.LazySeq(null,(function (){
var s__154029__$1 = s__154029;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__154029__$1);
if(temp__5753__auto__){
var s__154029__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__154029__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__154029__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__154031 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__154030 = (0);
while(true){
if((i__154030 < size__4621__auto__)){
var vec__154032 = cljs.core._nth(c__4620__auto__,i__154030);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__154032,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__154032,(1),null);
cljs.core.chunk_append(b__154031,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.trim(k)),clojure.string.trim(v)], null));

var G__154042 = (i__154030 + (1));
i__154030 = G__154042;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__154031),repl_tooling$ui$pinkie$to_map_style_$_iter__154028(cljs.core.chunk_rest(s__154029__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__154031),null);
}
} else {
var vec__154035 = cljs.core.first(s__154029__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__154035,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__154035,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.trim(k)),clojure.string.trim(v)], null),repl_tooling$ui$pinkie$to_map_style_$_iter__154028(cljs.core.rest(s__154029__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(style_vec);
})());
});
repl_tooling.ui.pinkie.is_style_QMARK_ = (function repl_tooling$ui$pinkie$is_style_QMARK_(x){
if(((cljs.core.vector_QMARK_(x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(x))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(x),new cljs.core.Keyword(null,"style","style",-496642736))) && (typeof cljs.core.second(x) === 'string'))))))){
return true;
} else {
return false;
}
});
repl_tooling.ui.pinkie.replace_style = (function repl_tooling$ui$pinkie$replace_style(x){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["pinkie replacing string style: ",x], 0));

return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(x,(1),repl_tooling.ui.pinkie.to_map_style(cljs.core.last(x))));
});
/**
 * resolve function-as symbol to function references in the reagent-hickup-map.
 * Leaves regular hiccup data unchanged.
 */
repl_tooling.ui.pinkie.convert_style_as_strings_to_map = (function repl_tooling$ui$pinkie$convert_style_as_strings_to_map(hiccup_vector){
return clojure.walk.prewalk((function (x){
if(repl_tooling.ui.pinkie.is_style_QMARK_(x)){
return repl_tooling.ui.pinkie.replace_style(x);
} else {
return x;
}
}),hiccup_vector);
});
repl_tooling.ui.pinkie.render_as_QMARK_ = (function repl_tooling$ui$pinkie$render_as_QMARK_(hiccup_vector){
return cljs.core.contains_QMARK_(cljs.core.meta(hiccup_vector),new cljs.core.Keyword("p","render-as","p/render-as",-1497012127));
});
repl_tooling.ui.pinkie.wrap_renderer = (function repl_tooling$ui$pinkie$wrap_renderer(x){
var renderer = new cljs.core.Keyword("p","render-as","p/render-as",-1497012127).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(x));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["pinkie wrapping renderer ",renderer," to: ",x], 0));

return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [renderer,x], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"R","R",-936662523),true], null));
});
/**
 * resolve function-as symbol to function references in the reagent-hickup-map.
 * Leaves regular hiccup data unchanged.
 */
repl_tooling.ui.pinkie.convert_render_as = (function repl_tooling$ui$pinkie$convert_render_as(hiccup_vector){
return clojure.walk.postwalk((function (x){
if(repl_tooling.ui.pinkie.render_as_QMARK_(x)){
return repl_tooling.ui.pinkie.wrap_renderer(x);
} else {
return x;
}
}),hiccup_vector);
});

//# sourceMappingURL=repl_tooling.ui.pinkie.js.map
