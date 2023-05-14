goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4835__auto__ = [];
var len__4829__auto___44932 = arguments.length;
var i__4830__auto___44933 = (0);
while(true){
if((i__4830__auto___44933 < len__4829__auto___44932)){
args__4835__auto__.push((arguments[i__4830__auto___44933]));

var G__44934 = (i__4830__auto___44933 + (1));
i__4830__auto___44933 = G__44934;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq44738){
var G__44739 = cljs.core.first(seq44738);
var seq44738__$1 = cljs.core.next(seq44738);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44739,seq44738__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__44743 = cljs.core.seq(sources);
var chunk__44744 = null;
var count__44745 = (0);
var i__44746 = (0);
while(true){
if((i__44746 < count__44745)){
var map__44751 = chunk__44744.cljs$core$IIndexed$_nth$arity$2(null,i__44746);
var map__44751__$1 = cljs.core.__destructure_map(map__44751);
var src = map__44751__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44751__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44751__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44751__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44751__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e44752){var e_44938 = e44752;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_44938);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_44938.message)].join('')));
}

var G__44940 = seq__44743;
var G__44941 = chunk__44744;
var G__44942 = count__44745;
var G__44943 = (i__44746 + (1));
seq__44743 = G__44940;
chunk__44744 = G__44941;
count__44745 = G__44942;
i__44746 = G__44943;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__44743);
if(temp__5753__auto__){
var seq__44743__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44743__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__44743__$1);
var G__44945 = cljs.core.chunk_rest(seq__44743__$1);
var G__44946 = c__4649__auto__;
var G__44947 = cljs.core.count(c__4649__auto__);
var G__44948 = (0);
seq__44743 = G__44945;
chunk__44744 = G__44946;
count__44745 = G__44947;
i__44746 = G__44948;
continue;
} else {
var map__44753 = cljs.core.first(seq__44743__$1);
var map__44753__$1 = cljs.core.__destructure_map(map__44753);
var src = map__44753__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44753__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44753__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44753__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44753__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e44754){var e_44950 = e44754;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_44950);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_44950.message)].join('')));
}

var G__44951 = cljs.core.next(seq__44743__$1);
var G__44952 = null;
var G__44953 = (0);
var G__44954 = (0);
seq__44743 = G__44951;
chunk__44744 = G__44952;
count__44745 = G__44953;
i__44746 = G__44954;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__44755 = cljs.core.seq(js_requires);
var chunk__44756 = null;
var count__44757 = (0);
var i__44758 = (0);
while(true){
if((i__44758 < count__44757)){
var js_ns = chunk__44756.cljs$core$IIndexed$_nth$arity$2(null,i__44758);
var require_str_44955 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_44955);


var G__44956 = seq__44755;
var G__44957 = chunk__44756;
var G__44958 = count__44757;
var G__44959 = (i__44758 + (1));
seq__44755 = G__44956;
chunk__44756 = G__44957;
count__44757 = G__44958;
i__44758 = G__44959;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__44755);
if(temp__5753__auto__){
var seq__44755__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44755__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__44755__$1);
var G__44960 = cljs.core.chunk_rest(seq__44755__$1);
var G__44961 = c__4649__auto__;
var G__44962 = cljs.core.count(c__4649__auto__);
var G__44963 = (0);
seq__44755 = G__44960;
chunk__44756 = G__44961;
count__44757 = G__44962;
i__44758 = G__44963;
continue;
} else {
var js_ns = cljs.core.first(seq__44755__$1);
var require_str_44964 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_44964);


var G__44965 = cljs.core.next(seq__44755__$1);
var G__44966 = null;
var G__44967 = (0);
var G__44968 = (0);
seq__44755 = G__44965;
chunk__44756 = G__44966;
count__44757 = G__44967;
i__44758 = G__44968;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__44764){
var map__44765 = p__44764;
var map__44765__$1 = cljs.core.__destructure_map(map__44765);
var msg = map__44765__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44765__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44765__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4622__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__44767(s__44768){
return (new cljs.core.LazySeq(null,(function (){
var s__44768__$1 = s__44768;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__44768__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var map__44773 = cljs.core.first(xs__6308__auto__);
var map__44773__$1 = cljs.core.__destructure_map(map__44773);
var src = map__44773__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44773__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44773__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4618__auto__ = ((function (s__44768__$1,map__44773,map__44773__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__44765,map__44765__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__44767_$_iter__44769(s__44770){
return (new cljs.core.LazySeq(null,((function (s__44768__$1,map__44773,map__44773__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__44765,map__44765__$1,msg,info,reload_info){
return (function (){
var s__44770__$1 = s__44770;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__44770__$1);
if(temp__5753__auto____$1){
var s__44770__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__44770__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__44770__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__44772 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__44771 = (0);
while(true){
if((i__44771 < size__4621__auto__)){
var warning = cljs.core._nth(c__4620__auto__,i__44771);
cljs.core.chunk_append(b__44772,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__44974 = (i__44771 + (1));
i__44771 = G__44974;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__44772),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__44767_$_iter__44769(cljs.core.chunk_rest(s__44770__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__44772),null);
}
} else {
var warning = cljs.core.first(s__44770__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__44767_$_iter__44769(cljs.core.rest(s__44770__$2)));
}
} else {
return null;
}
break;
}
});})(s__44768__$1,map__44773,map__44773__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__44765,map__44765__$1,msg,info,reload_info))
,null,null));
});})(s__44768__$1,map__44773,map__44773__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__44765,map__44765__$1,msg,info,reload_info))
;
var fs__4619__auto__ = cljs.core.seq(iterys__4618__auto__(warnings));
if(fs__4619__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4619__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__44767(cljs.core.rest(s__44768__$1)));
} else {
var G__44976 = cljs.core.rest(s__44768__$1);
s__44768__$1 = G__44976;
continue;
}
} else {
var G__44977 = cljs.core.rest(s__44768__$1);
s__44768__$1 = G__44977;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__44776_44978 = cljs.core.seq(warnings);
var chunk__44777_44979 = null;
var count__44778_44980 = (0);
var i__44779_44981 = (0);
while(true){
if((i__44779_44981 < count__44778_44980)){
var map__44783_44982 = chunk__44777_44979.cljs$core$IIndexed$_nth$arity$2(null,i__44779_44981);
var map__44783_44983__$1 = cljs.core.__destructure_map(map__44783_44982);
var w_44984 = map__44783_44983__$1;
var msg_44985__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44783_44983__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_44986 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44783_44983__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_44987 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44783_44983__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_44988 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44783_44983__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_44988)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_44986),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_44987),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_44985__$1)].join(''));


var G__44990 = seq__44776_44978;
var G__44991 = chunk__44777_44979;
var G__44992 = count__44778_44980;
var G__44993 = (i__44779_44981 + (1));
seq__44776_44978 = G__44990;
chunk__44777_44979 = G__44991;
count__44778_44980 = G__44992;
i__44779_44981 = G__44993;
continue;
} else {
var temp__5753__auto___44994 = cljs.core.seq(seq__44776_44978);
if(temp__5753__auto___44994){
var seq__44776_44995__$1 = temp__5753__auto___44994;
if(cljs.core.chunked_seq_QMARK_(seq__44776_44995__$1)){
var c__4649__auto___44996 = cljs.core.chunk_first(seq__44776_44995__$1);
var G__44997 = cljs.core.chunk_rest(seq__44776_44995__$1);
var G__44998 = c__4649__auto___44996;
var G__44999 = cljs.core.count(c__4649__auto___44996);
var G__45000 = (0);
seq__44776_44978 = G__44997;
chunk__44777_44979 = G__44998;
count__44778_44980 = G__44999;
i__44779_44981 = G__45000;
continue;
} else {
var map__44789_45001 = cljs.core.first(seq__44776_44995__$1);
var map__44789_45002__$1 = cljs.core.__destructure_map(map__44789_45001);
var w_45003 = map__44789_45002__$1;
var msg_45004__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44789_45002__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_45005 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44789_45002__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_45006 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44789_45002__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_45007 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44789_45002__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_45007)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_45005),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_45006),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_45004__$1)].join(''));


var G__45008 = cljs.core.next(seq__44776_44995__$1);
var G__45009 = null;
var G__45010 = (0);
var G__45011 = (0);
seq__44776_44978 = G__45008;
chunk__44777_44979 = G__45009;
count__44778_44980 = G__45010;
i__44779_44981 = G__45011;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__44763_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__44763_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4221__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4221__auto__){
var and__4221__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4221__auto____$1){
return new$;
} else {
return and__4221__auto____$1;
}
} else {
return and__4221__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__44793){
var map__44794 = p__44793;
var map__44794__$1 = cljs.core.__destructure_map(map__44794);
var msg = map__44794__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44794__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__44795 = cljs.core.seq(updates);
var chunk__44797 = null;
var count__44798 = (0);
var i__44799 = (0);
while(true){
if((i__44799 < count__44798)){
var path = chunk__44797.cljs$core$IIndexed$_nth$arity$2(null,i__44799);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__44840_45028 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__44844_45029 = null;
var count__44845_45030 = (0);
var i__44846_45031 = (0);
while(true){
if((i__44846_45031 < count__44845_45030)){
var node_45034 = chunk__44844_45029.cljs$core$IIndexed$_nth$arity$2(null,i__44846_45031);
if(cljs.core.not(node_45034.shadow$old)){
var path_match_45035 = shadow.cljs.devtools.client.browser.match_paths(node_45034.getAttribute("href"),path);
if(cljs.core.truth_(path_match_45035)){
var new_link_45036 = (function (){var G__44853 = node_45034.cloneNode(true);
G__44853.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_45035),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__44853;
})();
(node_45034.shadow$old = true);

(new_link_45036.onload = ((function (seq__44840_45028,chunk__44844_45029,count__44845_45030,i__44846_45031,seq__44795,chunk__44797,count__44798,i__44799,new_link_45036,path_match_45035,node_45034,path,map__44794,map__44794__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_45034);
});})(seq__44840_45028,chunk__44844_45029,count__44845_45030,i__44846_45031,seq__44795,chunk__44797,count__44798,i__44799,new_link_45036,path_match_45035,node_45034,path,map__44794,map__44794__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_45035], 0));

goog.dom.insertSiblingAfter(new_link_45036,node_45034);


var G__45037 = seq__44840_45028;
var G__45038 = chunk__44844_45029;
var G__45039 = count__44845_45030;
var G__45040 = (i__44846_45031 + (1));
seq__44840_45028 = G__45037;
chunk__44844_45029 = G__45038;
count__44845_45030 = G__45039;
i__44846_45031 = G__45040;
continue;
} else {
var G__45041 = seq__44840_45028;
var G__45042 = chunk__44844_45029;
var G__45043 = count__44845_45030;
var G__45044 = (i__44846_45031 + (1));
seq__44840_45028 = G__45041;
chunk__44844_45029 = G__45042;
count__44845_45030 = G__45043;
i__44846_45031 = G__45044;
continue;
}
} else {
var G__45045 = seq__44840_45028;
var G__45046 = chunk__44844_45029;
var G__45047 = count__44845_45030;
var G__45048 = (i__44846_45031 + (1));
seq__44840_45028 = G__45045;
chunk__44844_45029 = G__45046;
count__44845_45030 = G__45047;
i__44846_45031 = G__45048;
continue;
}
} else {
var temp__5753__auto___45049 = cljs.core.seq(seq__44840_45028);
if(temp__5753__auto___45049){
var seq__44840_45050__$1 = temp__5753__auto___45049;
if(cljs.core.chunked_seq_QMARK_(seq__44840_45050__$1)){
var c__4649__auto___45052 = cljs.core.chunk_first(seq__44840_45050__$1);
var G__45054 = cljs.core.chunk_rest(seq__44840_45050__$1);
var G__45055 = c__4649__auto___45052;
var G__45056 = cljs.core.count(c__4649__auto___45052);
var G__45057 = (0);
seq__44840_45028 = G__45054;
chunk__44844_45029 = G__45055;
count__44845_45030 = G__45056;
i__44846_45031 = G__45057;
continue;
} else {
var node_45058 = cljs.core.first(seq__44840_45050__$1);
if(cljs.core.not(node_45058.shadow$old)){
var path_match_45059 = shadow.cljs.devtools.client.browser.match_paths(node_45058.getAttribute("href"),path);
if(cljs.core.truth_(path_match_45059)){
var new_link_45060 = (function (){var G__44856 = node_45058.cloneNode(true);
G__44856.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_45059),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__44856;
})();
(node_45058.shadow$old = true);

(new_link_45060.onload = ((function (seq__44840_45028,chunk__44844_45029,count__44845_45030,i__44846_45031,seq__44795,chunk__44797,count__44798,i__44799,new_link_45060,path_match_45059,node_45058,seq__44840_45050__$1,temp__5753__auto___45049,path,map__44794,map__44794__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_45058);
});})(seq__44840_45028,chunk__44844_45029,count__44845_45030,i__44846_45031,seq__44795,chunk__44797,count__44798,i__44799,new_link_45060,path_match_45059,node_45058,seq__44840_45050__$1,temp__5753__auto___45049,path,map__44794,map__44794__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_45059], 0));

goog.dom.insertSiblingAfter(new_link_45060,node_45058);


var G__45063 = cljs.core.next(seq__44840_45050__$1);
var G__45064 = null;
var G__45065 = (0);
var G__45066 = (0);
seq__44840_45028 = G__45063;
chunk__44844_45029 = G__45064;
count__44845_45030 = G__45065;
i__44846_45031 = G__45066;
continue;
} else {
var G__45067 = cljs.core.next(seq__44840_45050__$1);
var G__45068 = null;
var G__45069 = (0);
var G__45070 = (0);
seq__44840_45028 = G__45067;
chunk__44844_45029 = G__45068;
count__44845_45030 = G__45069;
i__44846_45031 = G__45070;
continue;
}
} else {
var G__45071 = cljs.core.next(seq__44840_45050__$1);
var G__45072 = null;
var G__45073 = (0);
var G__45074 = (0);
seq__44840_45028 = G__45071;
chunk__44844_45029 = G__45072;
count__44845_45030 = G__45073;
i__44846_45031 = G__45074;
continue;
}
}
} else {
}
}
break;
}


var G__45075 = seq__44795;
var G__45076 = chunk__44797;
var G__45077 = count__44798;
var G__45078 = (i__44799 + (1));
seq__44795 = G__45075;
chunk__44797 = G__45076;
count__44798 = G__45077;
i__44799 = G__45078;
continue;
} else {
var G__45079 = seq__44795;
var G__45080 = chunk__44797;
var G__45081 = count__44798;
var G__45082 = (i__44799 + (1));
seq__44795 = G__45079;
chunk__44797 = G__45080;
count__44798 = G__45081;
i__44799 = G__45082;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__44795);
if(temp__5753__auto__){
var seq__44795__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44795__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__44795__$1);
var G__45083 = cljs.core.chunk_rest(seq__44795__$1);
var G__45084 = c__4649__auto__;
var G__45085 = cljs.core.count(c__4649__auto__);
var G__45086 = (0);
seq__44795 = G__45083;
chunk__44797 = G__45084;
count__44798 = G__45085;
i__44799 = G__45086;
continue;
} else {
var path = cljs.core.first(seq__44795__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__44860_45088 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__44864_45089 = null;
var count__44865_45090 = (0);
var i__44866_45091 = (0);
while(true){
if((i__44866_45091 < count__44865_45090)){
var node_45093 = chunk__44864_45089.cljs$core$IIndexed$_nth$arity$2(null,i__44866_45091);
if(cljs.core.not(node_45093.shadow$old)){
var path_match_45096 = shadow.cljs.devtools.client.browser.match_paths(node_45093.getAttribute("href"),path);
if(cljs.core.truth_(path_match_45096)){
var new_link_45097 = (function (){var G__44876 = node_45093.cloneNode(true);
G__44876.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_45096),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__44876;
})();
(node_45093.shadow$old = true);

(new_link_45097.onload = ((function (seq__44860_45088,chunk__44864_45089,count__44865_45090,i__44866_45091,seq__44795,chunk__44797,count__44798,i__44799,new_link_45097,path_match_45096,node_45093,path,seq__44795__$1,temp__5753__auto__,map__44794,map__44794__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_45093);
});})(seq__44860_45088,chunk__44864_45089,count__44865_45090,i__44866_45091,seq__44795,chunk__44797,count__44798,i__44799,new_link_45097,path_match_45096,node_45093,path,seq__44795__$1,temp__5753__auto__,map__44794,map__44794__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_45096], 0));

goog.dom.insertSiblingAfter(new_link_45097,node_45093);


var G__45103 = seq__44860_45088;
var G__45104 = chunk__44864_45089;
var G__45105 = count__44865_45090;
var G__45106 = (i__44866_45091 + (1));
seq__44860_45088 = G__45103;
chunk__44864_45089 = G__45104;
count__44865_45090 = G__45105;
i__44866_45091 = G__45106;
continue;
} else {
var G__45107 = seq__44860_45088;
var G__45108 = chunk__44864_45089;
var G__45109 = count__44865_45090;
var G__45110 = (i__44866_45091 + (1));
seq__44860_45088 = G__45107;
chunk__44864_45089 = G__45108;
count__44865_45090 = G__45109;
i__44866_45091 = G__45110;
continue;
}
} else {
var G__45112 = seq__44860_45088;
var G__45113 = chunk__44864_45089;
var G__45114 = count__44865_45090;
var G__45115 = (i__44866_45091 + (1));
seq__44860_45088 = G__45112;
chunk__44864_45089 = G__45113;
count__44865_45090 = G__45114;
i__44866_45091 = G__45115;
continue;
}
} else {
var temp__5753__auto___45118__$1 = cljs.core.seq(seq__44860_45088);
if(temp__5753__auto___45118__$1){
var seq__44860_45119__$1 = temp__5753__auto___45118__$1;
if(cljs.core.chunked_seq_QMARK_(seq__44860_45119__$1)){
var c__4649__auto___45120 = cljs.core.chunk_first(seq__44860_45119__$1);
var G__45122 = cljs.core.chunk_rest(seq__44860_45119__$1);
var G__45123 = c__4649__auto___45120;
var G__45124 = cljs.core.count(c__4649__auto___45120);
var G__45125 = (0);
seq__44860_45088 = G__45122;
chunk__44864_45089 = G__45123;
count__44865_45090 = G__45124;
i__44866_45091 = G__45125;
continue;
} else {
var node_45127 = cljs.core.first(seq__44860_45119__$1);
if(cljs.core.not(node_45127.shadow$old)){
var path_match_45128 = shadow.cljs.devtools.client.browser.match_paths(node_45127.getAttribute("href"),path);
if(cljs.core.truth_(path_match_45128)){
var new_link_45129 = (function (){var G__44883 = node_45127.cloneNode(true);
G__44883.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_45128),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__44883;
})();
(node_45127.shadow$old = true);

(new_link_45129.onload = ((function (seq__44860_45088,chunk__44864_45089,count__44865_45090,i__44866_45091,seq__44795,chunk__44797,count__44798,i__44799,new_link_45129,path_match_45128,node_45127,seq__44860_45119__$1,temp__5753__auto___45118__$1,path,seq__44795__$1,temp__5753__auto__,map__44794,map__44794__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_45127);
});})(seq__44860_45088,chunk__44864_45089,count__44865_45090,i__44866_45091,seq__44795,chunk__44797,count__44798,i__44799,new_link_45129,path_match_45128,node_45127,seq__44860_45119__$1,temp__5753__auto___45118__$1,path,seq__44795__$1,temp__5753__auto__,map__44794,map__44794__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_45128], 0));

goog.dom.insertSiblingAfter(new_link_45129,node_45127);


var G__45137 = cljs.core.next(seq__44860_45119__$1);
var G__45138 = null;
var G__45139 = (0);
var G__45140 = (0);
seq__44860_45088 = G__45137;
chunk__44864_45089 = G__45138;
count__44865_45090 = G__45139;
i__44866_45091 = G__45140;
continue;
} else {
var G__45142 = cljs.core.next(seq__44860_45119__$1);
var G__45143 = null;
var G__45144 = (0);
var G__45145 = (0);
seq__44860_45088 = G__45142;
chunk__44864_45089 = G__45143;
count__44865_45090 = G__45144;
i__44866_45091 = G__45145;
continue;
}
} else {
var G__45146 = cljs.core.next(seq__44860_45119__$1);
var G__45147 = null;
var G__45148 = (0);
var G__45149 = (0);
seq__44860_45088 = G__45146;
chunk__44864_45089 = G__45147;
count__44865_45090 = G__45148;
i__44866_45091 = G__45149;
continue;
}
}
} else {
}
}
break;
}


var G__45151 = cljs.core.next(seq__44795__$1);
var G__45152 = null;
var G__45153 = (0);
var G__45154 = (0);
seq__44795 = G__45151;
chunk__44797 = G__45152;
count__44798 = G__45153;
i__44799 = G__45154;
continue;
} else {
var G__45157 = cljs.core.next(seq__44795__$1);
var G__45158 = null;
var G__45159 = (0);
var G__45160 = (0);
seq__44795 = G__45157;
chunk__44797 = G__45158;
count__44798 = G__45159;
i__44799 = G__45160;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__44890){
var map__44891 = p__44890;
var map__44891__$1 = cljs.core.__destructure_map(map__44891);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44891__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__44894){
var map__44895 = p__44894;
var map__44895__$1 = cljs.core.__destructure_map(map__44895);
var _ = map__44895__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44895__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__44896,done,error){
var map__44897 = p__44896;
var map__44897__$1 = cljs.core.__destructure_map(map__44897);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44897__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__44900,done,error){
var map__44902 = p__44900;
var map__44902__$1 = cljs.core.__destructure_map(map__44902);
var msg = map__44902__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44902__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44902__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44902__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__44906){
var map__44907 = p__44906;
var map__44907__$1 = cljs.core.__destructure_map(map__44907);
var src = map__44907__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44907__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4221__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4221__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4221__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__44908 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__44908) : done.call(null,G__44908));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__44911){
var map__44912 = p__44911;
var map__44912__$1 = cljs.core.__destructure_map(map__44912);
var msg__$1 = map__44912__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44912__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e44913){var ex = e44913;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__44917){
var map__44919 = p__44917;
var map__44919__$1 = cljs.core.__destructure_map(map__44919);
var env = map__44919__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44919__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__44920){
var map__44921 = p__44920;
var map__44921__$1 = cljs.core.__destructure_map(map__44921);
var msg = map__44921__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44921__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__44927){
var map__44928 = p__44927;
var map__44928__$1 = cljs.core.__destructure_map(map__44928);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44928__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44928__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__44930){
var map__44931 = p__44930;
var map__44931__$1 = cljs.core.__destructure_map(map__44931);
var svc = map__44931__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44931__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
