goog.provide('shadow.cljs.devtools.client.node');
shadow.cljs.devtools.client.node.node_eval = (function shadow$cljs$devtools$client$node$node_eval(p__145840){
var map__145842 = p__145840;
var map__145842__$1 = cljs.core.__destructure_map(map__145842);
var msg = map__145842__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__145842__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var source_map_json = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__145842__$1,new cljs.core.Keyword(null,"source-map-json","source-map-json",-299460036));
var result = SHADOW_NODE_EVAL(js,source_map_json);
return result;
});
shadow.cljs.devtools.client.node.is_loaded_QMARK_ = (function shadow$cljs$devtools$client$node$is_loaded_QMARK_(src){
return goog.object.get(SHADOW_IMPORTED,src) === true;
});
shadow.cljs.devtools.client.node.closure_import = (function shadow$cljs$devtools$client$node$closure_import(src){
if(typeof src === 'string'){
} else {
throw (new Error("Assert failed: (string? src)"));
}

return SHADOW_IMPORT(src);
});
shadow.cljs.devtools.client.node.handle_build_complete = (function shadow$cljs$devtools$client$node$handle_build_complete(runtime,p__145853){
var map__145854 = p__145853;
var map__145854__$1 = cljs.core.__destructure_map(map__145854);
var msg = map__145854__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__145854__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__145854__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__145855 = info;
var map__145855__$1 = cljs.core.__destructure_map(map__145855);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__145855__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__145855__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__145855__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(((shadow.cljs.devtools.client.env.autoload) && (((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))))){
var files_to_require = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"output-name","output-name",-1769107767),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__145857){
var map__145858 = p__145857;
var map__145858__$1 = cljs.core.__destructure_map(map__145858);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__145858__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__145858__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(compiled,resource_id)) || (cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__145859){
var map__145860 = p__145859;
var map__145860__$1 = cljs.core.__destructure_map(map__145860);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__145860__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
}),sources))));
if(cljs.core.seq(files_to_require)){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$2(msg,(function (){
var seq__145861 = cljs.core.seq(files_to_require);
var chunk__145862 = null;
var count__145863 = (0);
var i__145864 = (0);
while(true){
if((i__145864 < count__145863)){
var src = chunk__145862.cljs$core$IIndexed$_nth$arity$2(null,i__145864);
shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.node.closure_import(src);


var G__145913 = seq__145861;
var G__145914 = chunk__145862;
var G__145915 = count__145863;
var G__145916 = (i__145864 + (1));
seq__145861 = G__145913;
chunk__145862 = G__145914;
count__145863 = G__145915;
i__145864 = G__145916;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__145861);
if(temp__5753__auto__){
var seq__145861__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__145861__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__145861__$1);
var G__145917 = cljs.core.chunk_rest(seq__145861__$1);
var G__145918 = c__4649__auto__;
var G__145919 = cljs.core.count(c__4649__auto__);
var G__145920 = (0);
seq__145861 = G__145917;
chunk__145862 = G__145918;
count__145863 = G__145919;
i__145864 = G__145920;
continue;
} else {
var src = cljs.core.first(seq__145861__$1);
shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.node.closure_import(src);


var G__145921 = cljs.core.next(seq__145861__$1);
var G__145922 = null;
var G__145923 = (0);
var G__145924 = (0);
seq__145861 = G__145921;
chunk__145862 = G__145922;
count__145863 = G__145923;
i__145864 = G__145924;
continue;
}
} else {
return null;
}
}
break;
}
}));
} else {
return null;
}
} else {
return null;
}
});
shadow.cljs.devtools.client.node.client_info = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"host","host",-1558485167),new cljs.core.Keyword(null,"node","node",581201198),new cljs.core.Keyword(null,"desc","desc",2093485764),["Node ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(process.version)].join('')], null);
shadow.cljs.devtools.client.node.start = (function shadow$cljs$devtools$client$node$start(runtime){
var ws_url = shadow.cljs.devtools.client.env.get_ws_relay_url();
var socket = (new shadow.js.shim.module$ws(ws_url,({"rejectUnauthorized": false})));
var ws_active_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
socket.on("message",(function (data){
if(cljs.core.truth_(cljs.core.deref(ws_active_ref))){
return shadow.cljs.devtools.client.shared.remote_msg(runtime,data);
} else {
return null;
}
}));

socket.on("open",(function (e){
if(cljs.core.truth_(cljs.core.deref(ws_active_ref))){
return shadow.cljs.devtools.client.shared.remote_open(runtime,e);
} else {
return null;
}
}));

socket.on("close",(function (e){
if(cljs.core.truth_(cljs.core.deref(ws_active_ref))){
return shadow.cljs.devtools.client.shared.remote_close(runtime,e,ws_url);
} else {
return null;
}
}));

socket.on("error",(function (e){
if(cljs.core.truth_(cljs.core.deref(ws_active_ref))){
return shadow.cljs.devtools.client.shared.remote_error(runtime,e);
} else {
return null;
}
}));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"socket","socket",59137063),socket,new cljs.core.Keyword(null,"ws-active-ref","ws-active-ref",804496391),ws_active_ref], null);
});
shadow.cljs.devtools.client.node.send = (function shadow$cljs$devtools$client$node$send(p__145866,msg){
var map__145867 = p__145866;
var map__145867__$1 = cljs.core.__destructure_map(map__145867);
var socket = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__145867__$1,new cljs.core.Keyword(null,"socket","socket",59137063));
return socket.send(msg);
});
shadow.cljs.devtools.client.node.stop = (function shadow$cljs$devtools$client$node$stop(p__145868){
var map__145869 = p__145868;
var map__145869__$1 = cljs.core.__destructure_map(map__145869);
var socket = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__145869__$1,new cljs.core.Keyword(null,"socket","socket",59137063));
var ws_active_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__145869__$1,new cljs.core.Keyword(null,"ws-active-ref","ws-active-ref",804496391));
cljs.core.reset_BANG_(ws_active_ref,false);

return socket.close();
});
if((shadow.cljs.devtools.client.env.worker_client_id > (0))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return SHADOW_NODE_EVAL(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,msg){
var this$__$1 = this;
return shadow.cljs.devtools.client.node.node_eval(msg);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__145870,done,error){
var map__145871 = p__145870;
var map__145871__$1 = cljs.core.__destructure_map(map__145871);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__145871__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
try{var seq__145873_145925 = cljs.core.seq(repl_sources);
var chunk__145875_145926 = null;
var count__145876_145927 = (0);
var i__145877_145928 = (0);
while(true){
if((i__145877_145928 < count__145876_145927)){
var map__145885_145929 = chunk__145875_145926.cljs$core$IIndexed$_nth$arity$2(null,i__145877_145928);
var map__145885_145930__$1 = cljs.core.__destructure_map(map__145885_145929);
var src_145931 = map__145885_145930__$1;
var output_name_145932 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__145885_145930__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
if((!(shadow.cljs.devtools.client.node.is_loaded_QMARK_(output_name_145932)))){
shadow.cljs.devtools.client.node.closure_import(output_name_145932);


var G__145933 = seq__145873_145925;
var G__145934 = chunk__145875_145926;
var G__145935 = count__145876_145927;
var G__145936 = (i__145877_145928 + (1));
seq__145873_145925 = G__145933;
chunk__145875_145926 = G__145934;
count__145876_145927 = G__145935;
i__145877_145928 = G__145936;
continue;
} else {
var G__145937 = seq__145873_145925;
var G__145938 = chunk__145875_145926;
var G__145939 = count__145876_145927;
var G__145940 = (i__145877_145928 + (1));
seq__145873_145925 = G__145937;
chunk__145875_145926 = G__145938;
count__145876_145927 = G__145939;
i__145877_145928 = G__145940;
continue;
}
} else {
var temp__5753__auto___145941 = cljs.core.seq(seq__145873_145925);
if(temp__5753__auto___145941){
var seq__145873_145942__$1 = temp__5753__auto___145941;
if(cljs.core.chunked_seq_QMARK_(seq__145873_145942__$1)){
var c__4649__auto___145943 = cljs.core.chunk_first(seq__145873_145942__$1);
var G__145944 = cljs.core.chunk_rest(seq__145873_145942__$1);
var G__145945 = c__4649__auto___145943;
var G__145946 = cljs.core.count(c__4649__auto___145943);
var G__145947 = (0);
seq__145873_145925 = G__145944;
chunk__145875_145926 = G__145945;
count__145876_145927 = G__145946;
i__145877_145928 = G__145947;
continue;
} else {
var map__145887_145948 = cljs.core.first(seq__145873_145942__$1);
var map__145887_145949__$1 = cljs.core.__destructure_map(map__145887_145948);
var src_145950 = map__145887_145949__$1;
var output_name_145951 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__145887_145949__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
if((!(shadow.cljs.devtools.client.node.is_loaded_QMARK_(output_name_145951)))){
shadow.cljs.devtools.client.node.closure_import(output_name_145951);


var G__145952 = cljs.core.next(seq__145873_145942__$1);
var G__145953 = null;
var G__145954 = (0);
var G__145955 = (0);
seq__145873_145925 = G__145952;
chunk__145875_145926 = G__145953;
count__145876_145927 = G__145954;
i__145877_145928 = G__145955;
continue;
} else {
var G__145956 = cljs.core.next(seq__145873_145942__$1);
var G__145957 = null;
var G__145958 = (0);
var G__145959 = (0);
seq__145873_145925 = G__145956;
chunk__145875_145926 = G__145957;
count__145876_145927 = G__145958;
i__145877_145928 = G__145959;
continue;
}
}
} else {
}
}
break;
}

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}catch (e145872){var e = e145872;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(e) : error.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (this$,p__145891,done,error){
var map__145893 = p__145891;
var map__145893__$1 = cljs.core.__destructure_map(map__145893);
var msg = map__145893__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__145893__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__145893__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var this$__$1 = this;
try{var seq__145895_145960 = cljs.core.seq(sources);
var chunk__145896_145961 = null;
var count__145897_145962 = (0);
var i__145898_145963 = (0);
while(true){
if((i__145898_145963 < count__145897_145962)){
var map__145903_145964 = chunk__145896_145961.cljs$core$IIndexed$_nth$arity$2(null,i__145898_145963);
var map__145903_145965__$1 = cljs.core.__destructure_map(map__145903_145964);
var src_145966 = map__145903_145965__$1;
var provides_145967 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__145903_145965__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var output_name_145968 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__145903_145965__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
if(cljs.core.truth_((function (){var or__4223__auto__ = (!(shadow.cljs.devtools.client.node.is_loaded_QMARK_(output_name_145968)));
if(or__4223__auto__){
return or__4223__auto__;
} else {
return cljs.core.some(reload_namespaces,provides_145967);
}
})())){
shadow.cljs.devtools.client.node.closure_import(output_name_145968);
} else {
}


var G__145969 = seq__145895_145960;
var G__145970 = chunk__145896_145961;
var G__145971 = count__145897_145962;
var G__145972 = (i__145898_145963 + (1));
seq__145895_145960 = G__145969;
chunk__145896_145961 = G__145970;
count__145897_145962 = G__145971;
i__145898_145963 = G__145972;
continue;
} else {
var temp__5753__auto___145973 = cljs.core.seq(seq__145895_145960);
if(temp__5753__auto___145973){
var seq__145895_145974__$1 = temp__5753__auto___145973;
if(cljs.core.chunked_seq_QMARK_(seq__145895_145974__$1)){
var c__4649__auto___145975 = cljs.core.chunk_first(seq__145895_145974__$1);
var G__145976 = cljs.core.chunk_rest(seq__145895_145974__$1);
var G__145977 = c__4649__auto___145975;
var G__145978 = cljs.core.count(c__4649__auto___145975);
var G__145979 = (0);
seq__145895_145960 = G__145976;
chunk__145896_145961 = G__145977;
count__145897_145962 = G__145978;
i__145898_145963 = G__145979;
continue;
} else {
var map__145906_145980 = cljs.core.first(seq__145895_145974__$1);
var map__145906_145981__$1 = cljs.core.__destructure_map(map__145906_145980);
var src_145982 = map__145906_145981__$1;
var provides_145983 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__145906_145981__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var output_name_145984 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__145906_145981__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
if(cljs.core.truth_((function (){var or__4223__auto__ = (!(shadow.cljs.devtools.client.node.is_loaded_QMARK_(output_name_145984)));
if(or__4223__auto__){
return or__4223__auto__;
} else {
return cljs.core.some(reload_namespaces,provides_145983);
}
})())){
shadow.cljs.devtools.client.node.closure_import(output_name_145984);
} else {
}


var G__145985 = cljs.core.next(seq__145895_145974__$1);
var G__145986 = null;
var G__145987 = (0);
var G__145988 = (0);
seq__145895_145960 = G__145985;
chunk__145896_145961 = G__145986;
count__145897_145962 = G__145987;
i__145898_145963 = G__145988;
continue;
}
} else {
}
}
break;
}

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}catch (e145894){var e = e145894;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(e) : error.call(null,e));
}}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.node","client","shadow.cljs.devtools.client.node/client",1327452098),cljs.core.PersistentHashSet.EMPTY,(function (p__145907){
var map__145908 = p__145907;
var map__145908__$1 = cljs.core.__destructure_map(map__145908);
var env = map__145908__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__145908__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.node","client","shadow.cljs.devtools.client.node/client",1327452098),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
shadow.cljs.devtools.client.env.patch_goog_BANG_();

if(shadow.cljs.devtools.client.env.log){
return console.log(["shadow-cljs - #",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (){
return console.warn("The shadow-cljs Websocket was disconnected.");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
return console.error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.node.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__145909){
var map__145910 = p__145909;
var map__145910__$1 = cljs.core.__destructure_map(map__145910);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__145910__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__145910__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
return console.warn("shadow-cljs - The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
return console.warn("shadow-cljs - A new watch for this build was started, restart of this process required!");
} else {
return null;

}
}
})], null)], null));

return svc;
}),(function (p__145911){
var map__145912 = p__145911;
var map__145912__$1 = cljs.core.__destructure_map(map__145912);
var svc = map__145912__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__145912__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.node","client","shadow.cljs.devtools.client.node/client",1327452098));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.node.client_info,shadow.cljs.devtools.client.node.start,shadow.cljs.devtools.client.node.send,shadow.cljs.devtools.client.node.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.node.js.map
