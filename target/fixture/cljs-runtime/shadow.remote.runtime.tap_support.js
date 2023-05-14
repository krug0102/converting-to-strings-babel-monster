goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__145625,p__145626){
var map__145627 = p__145625;
var map__145627__$1 = cljs.core.__destructure_map(map__145627);
var svc = map__145627__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__145627__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__145627__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__145627__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__145628 = p__145626;
var map__145628__$1 = cljs.core.__destructure_map(map__145628);
var msg = map__145628__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__145628__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__145628__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__145628__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__145628__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__145636,p__145637){
var map__145638 = p__145636;
var map__145638__$1 = cljs.core.__destructure_map(map__145638);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__145638__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__145639 = p__145637;
var map__145639__$1 = cljs.core.__destructure_map(map__145639);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__145639__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__145643,p__145644){
var map__145645 = p__145643;
var map__145645__$1 = cljs.core.__destructure_map(map__145645);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__145645__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__145645__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__145646 = p__145644;
var map__145646__$1 = cljs.core.__destructure_map(map__145646);
var msg = map__145646__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__145646__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__145648,tid){
var map__145649 = p__145648;
var map__145649__$1 = cljs.core.__destructure_map(map__145649);
var svc = map__145649__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__145649__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__145664 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__145665 = null;
var count__145666 = (0);
var i__145667 = (0);
while(true){
if((i__145667 < count__145666)){
var vec__145678 = chunk__145665.cljs$core$IIndexed$_nth$arity$2(null,i__145667);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__145678,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__145678,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__145690 = seq__145664;
var G__145691 = chunk__145665;
var G__145692 = count__145666;
var G__145693 = (i__145667 + (1));
seq__145664 = G__145690;
chunk__145665 = G__145691;
count__145666 = G__145692;
i__145667 = G__145693;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__145664);
if(temp__5753__auto__){
var seq__145664__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__145664__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__145664__$1);
var G__145694 = cljs.core.chunk_rest(seq__145664__$1);
var G__145695 = c__4649__auto__;
var G__145696 = cljs.core.count(c__4649__auto__);
var G__145697 = (0);
seq__145664 = G__145694;
chunk__145665 = G__145695;
count__145666 = G__145696;
i__145667 = G__145697;
continue;
} else {
var vec__145681 = cljs.core.first(seq__145664__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__145681,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__145681,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__145703 = cljs.core.next(seq__145664__$1);
var G__145704 = null;
var G__145705 = (0);
var G__145706 = (0);
seq__145664 = G__145703;
chunk__145665 = G__145704;
count__145666 = G__145705;
i__145667 = G__145706;
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
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__145654_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__145654_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__145655_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__145655_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__145656_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__145656_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__145658_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__145658_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__145685){
var map__145686 = p__145685;
var map__145686__$1 = cljs.core.__destructure_map(map__145686);
var svc = map__145686__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__145686__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__145686__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
