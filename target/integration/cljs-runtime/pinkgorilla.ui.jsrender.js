goog.provide('pinkgorilla.ui.jsrender');
pinkgorilla.ui.jsrender.info = (function pinkgorilla$ui$jsrender$info(s){
return console.log(s);
});
pinkgorilla.ui.jsrender.render_function_impl = (function pinkgorilla$ui$jsrender$render_function_impl(p__89454){
var map__89455 = p__89454;
var map__89455__$1 = cljs.core.__destructure_map(map__89455);
var f = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89455__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89455__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var uuid = cljs_uuid_utils.core.uuid_string(cljs_uuid_utils.core.make_random_uuid());
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"render-function",new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),uuid], null)], null);
}),new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (this$){
var G__89456 = reagent.dom.dom_node(this$);
var G__89457 = data;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__89456,G__89457) : f.call(null,G__89456,G__89457));
}),new cljs.core.Keyword(null,"component-will-update","component-will-update",335247566),(function (this$,p__89458){
var vec__89459 = p__89458;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__89459,(0),null);
var map__89462 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__89459,(1),null);
var map__89462__$1 = cljs.core.__destructure_map(map__89462);
var f__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89462__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var data__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89462__$1,new cljs.core.Keyword(null,"data","data",-232669377));
pinkgorilla.ui.jsrender.info(["jsrender new params: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(data__$1)].join(''));

var G__89463 = reagent.dom.dom_node(this$);
var G__89464 = data__$1;
return (f__$1.cljs$core$IFn$_invoke$arity$2 ? f__$1.cljs$core$IFn$_invoke$arity$2(G__89463,G__89464) : f__$1.call(null,G__89463,G__89464));
})], null));
});
pinkgorilla.ui.jsrender.render_clj = (function pinkgorilla$ui$jsrender$render_clj(data){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pinkgorilla.ui.error.error_boundary,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pinkgorilla.ui.jsrender.render_function_impl,data], null)], null);
});
pinkgorilla.ui.jsrender.render_js = (function pinkgorilla$ui$jsrender$render_js(p__89465){
var map__89466 = p__89465;
var map__89466__$1 = cljs.core.__destructure_map(map__89466);
var f = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89466__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89466__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var data_js = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"f","f",-1597136552),f,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.clj__GT_js(data)], null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pinkgorilla.ui.jsrender.render_clj,data_js], null);
});

//# sourceMappingURL=pinkgorilla.ui.jsrender.js.map
