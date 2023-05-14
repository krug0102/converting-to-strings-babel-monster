goog.provide('devcards.util.utils');
devcards.util.utils.html_env_QMARK_ = (function devcards$util$utils$html_env_QMARK_(){
var temp__5751__auto__ = goog.global.document;
if(cljs.core.truth_(temp__5751__auto__)){
var doc = temp__5751__auto__;
return goog.object.get(doc,"write");
} else {
return null;
}
});
devcards.util.utils.node_env_QMARK_ = (function devcards$util$utils$node_env_QMARK_(){
return (!((goog.nodeGlobalRequire == null)));
});
devcards.util.utils.pprint_str = (function devcards$util$utils$pprint_str(obj){
try{var sb__4760__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__44879_44886 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__44880_44887 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__44881_44888 = true;
var _STAR_print_fn_STAR__temp_val__44882_44889 = (function (x__4761__auto__){
return sb__4760__auto__.append(x__4761__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__44881_44888);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__44882_44889);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(obj);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__44880_44887);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__44879_44886);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4760__auto__);
}catch (e44877){if((e44877 instanceof Error)){
var e1 = e44877;
try{return obj.toString();
}catch (e44878){if((e44878 instanceof Error)){
var e2 = e44878;
return "<<Un-printable Type>>";
} else {
throw e44878;

}
}} else {
throw e44877;

}
}});
devcards.util.utils.pprint_code = (function devcards$util$utils$pprint_code(code){
var _STAR_print_pprint_dispatch_STAR__orig_val__44884 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
var _STAR_print_pprint_dispatch_STAR__temp_val__44885 = cljs.pprint.code_dispatch;
(cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR__temp_val__44885);

try{return devcards.util.utils.pprint_str(code);
}finally {(cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR__orig_val__44884);
}});

//# sourceMappingURL=devcards.util.utils.js.map
