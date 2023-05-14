goog.provide('pinkgorilla.ui.jsrender');
pinkgorilla.ui.jsrender.info = (function pinkgorilla$ui$jsrender$info(s){
return console.log(s);
});
pinkgorilla.ui.jsrender.render_function_impl = (function pinkgorilla$ui$jsrender$render_function_impl(p__161072){
var map__161073 = p__161072;
var map__161073__$1 = cljs.core.__destructure_map(map__161073);
var f = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__161073__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__161073__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var uuid = cljs_uuid_utils.core.uuid_string(cljs_uuid_utils.core.make_random_uuid());
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"render-function",new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),uuid], null)], null);
}),new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (this$){
var G__161074 = reagent.dom.dom_node(this$);
var G__161075 = data;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__161074,G__161075) : f.call(null,G__161074,G__161075));
}),new cljs.core.Keyword(null,"component-will-update","component-will-update",335247566),(function (this$,p__161076){
var vec__161077 = p__161076;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__161077,(0),null);
var map__161080 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__161077,(1),null);
var map__161080__$1 = cljs.core.__destructure_map(map__161080);
var f__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__161080__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var data__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__161080__$1,new cljs.core.Keyword(null,"data","data",-232669377));
pinkgorilla.ui.jsrender.info(["jsrender new params: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(data__$1)].join(''));

var G__161081 = reagent.dom.dom_node(this$);
var G__161082 = data__$1;
return (f__$1.cljs$core$IFn$_invoke$arity$2 ? f__$1.cljs$core$IFn$_invoke$arity$2(G__161081,G__161082) : f__$1.call(null,G__161081,G__161082));
})], null));
});
pinkgorilla.ui.jsrender.render_clj = (function pinkgorilla$ui$jsrender$render_clj(data){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pinkgorilla.ui.error.error_boundary,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pinkgorilla.ui.jsrender.render_function_impl,data], null)], null);
});
pinkgorilla.ui.jsrender.render_js = (function pinkgorilla$ui$jsrender$render_js(p__161083){
var map__161084 = p__161083;
var map__161084__$1 = cljs.core.__destructure_map(map__161084);
var f = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__161084__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__161084__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var data_js = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"f","f",-1597136552),f,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.clj__GT_js(data)], null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pinkgorilla.ui.jsrender.render_clj,data_js], null);
});

//# sourceMappingURL=pinkgorilla.ui.jsrender.js.map
