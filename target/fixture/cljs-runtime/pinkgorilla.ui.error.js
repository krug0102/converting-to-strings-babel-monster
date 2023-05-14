goog.provide('pinkgorilla.ui.error');
pinkgorilla.ui.error.error_boundary = (function pinkgorilla$ui$error$error_boundary(_){
var error = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var info = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component-did-catch","component-did-catch",652725810),(function (___$1,___$2,i){
return cljs.core.reset_BANG_(info,i);
}),new cljs.core.Keyword(null,"get-derived-state-from-error","get-derived-state-from-error",1473896468),(function (e){
cljs.core.reset_BANG_(error,e);

return ({});
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (comp){
if(cljs.core.truth_(cljs.core.deref(error))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Something went wrong."], null);
} else {
return comp;
}
})], null));
});

//# sourceMappingURL=pinkgorilla.ui.error.js.map
