goog.provide('repl_tooling.integration.ui_macros');
repl_tooling.integration.ui_macros.type_and_just_for_test = (function repl_tooling$integration$ui_macros$type_and_just_for_test(){
return null;
});
repl_tooling.integration.ui_macros.text_on_result = (function repl_tooling$integration$ui_macros$text_on_result(){
var elem = document.querySelector("div.result");
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),clojure.string.replace(elem.innerText,/\n/," "),new cljs.core.Keyword(null,"html","html",-998796897),elem.innerHTML], null);
});
repl_tooling.integration.ui_macros.click_on = (function repl_tooling$integration$ui_macros$click_on(link_label){
var temp__5753__auto__ = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__93889_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__93889_SHARP_.innerText,link_label);
}),Array.prototype.slice.call(document.querySelectorAll("a"))));
if(cljs.core.truth_(temp__5753__auto__)){
var elem = temp__5753__auto__;
return elem.click();
} else {
return null;
}
});

//# sourceMappingURL=repl_tooling.integration.ui_macros.js.map
