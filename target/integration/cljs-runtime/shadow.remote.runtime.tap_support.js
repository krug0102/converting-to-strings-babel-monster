goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__44483,p__44484){
var map__44485 = p__44483;
var map__44485__$1 = cljs.core.__destructure_map(map__44485);
var svc = map__44485__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44485__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44485__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44485__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__44486 = p__44484;
var map__44486__$1 = cljs.core.__destructure_map(map__44486);
var msg = map__44486__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44486__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44486__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44486__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__44486__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__44488,p__44489){
var map__44490 = p__44488;
var map__44490__$1 = cljs.core.__destructure_map(map__44490);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44490__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__44491 = p__44489;
var map__44491__$1 = cljs.core.__destructure_map(map__44491);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44491__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__44492,p__44493){
var map__44494 = p__44492;
var map__44494__$1 = cljs.core.__destructure_map(map__44494);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44494__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44494__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__44495 = p__44493;
var map__44495__$1 = cljs.core.__destructure_map(map__44495);
var msg = map__44495__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__44495__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__44496,tid){
var map__44497 = p__44496;
var map__44497__$1 = cljs.core.__destructure_map(map__44497);
var svc = map__44497__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44497__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__44509 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__44510 = null;
var count__44511 = (0);
var i__44512 = (0);
while(true){
if((i__44512 < count__44511)){
var vec__44545 = chunk__44510.cljs$core$IIndexed$_nth$arity$2(null,i__44512);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44545,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44545,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__44555 = seq__44509;
var G__44556 = chunk__44510;
var G__44557 = count__44511;
var G__44558 = (i__44512 + (1));
seq__44509 = G__44555;
chunk__44510 = G__44556;
count__44511 = G__44557;
i__44512 = G__44558;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__44509);
if(temp__5753__auto__){
var seq__44509__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44509__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__44509__$1);
var G__44559 = cljs.core.chunk_rest(seq__44509__$1);
var G__44560 = c__4649__auto__;
var G__44561 = cljs.core.count(c__4649__auto__);
var G__44562 = (0);
seq__44509 = G__44559;
chunk__44510 = G__44560;
count__44511 = G__44561;
i__44512 = G__44562;
continue;
} else {
var vec__44548 = cljs.core.first(seq__44509__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44548,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44548,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__44563 = cljs.core.next(seq__44509__$1);
var G__44564 = null;
var G__44565 = (0);
var G__44566 = (0);
seq__44509 = G__44563;
chunk__44510 = G__44564;
count__44511 = G__44565;
i__44512 = G__44566;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__44498_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__44498_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__44499_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__44499_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__44500_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__44500_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__44501_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__44501_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__44551){
var map__44552 = p__44551;
var map__44552__$1 = cljs.core.__destructure_map(map__44552);
var svc = map__44552__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44552__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44552__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
