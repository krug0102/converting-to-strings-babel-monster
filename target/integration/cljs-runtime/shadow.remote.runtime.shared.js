goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__43063,res){
var map__43064 = p__43063;
var map__43064__$1 = cljs.core.__destructure_map(map__43064);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43064__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43064__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__43065 = res;
var G__43065__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43065,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__43065);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43065__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__43065__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__43071 = arguments.length;
switch (G__43071) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__43072,msg,handlers,timeout_after_ms){
var map__43073 = p__43072;
var map__43073__$1 = cljs.core.__destructure_map(map__43073);
var runtime = map__43073__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43073__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___43174 = arguments.length;
var i__4830__auto___43175 = (0);
while(true){
if((i__4830__auto___43175 < len__4829__auto___43174)){
args__4835__auto__.push((arguments[i__4830__auto___43175]));

var G__43176 = (i__4830__auto___43175 + (1));
i__4830__auto___43175 = G__43176;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((2) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4836__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__43077,ev,args){
var map__43078 = p__43077;
var map__43078__$1 = cljs.core.__destructure_map(map__43078);
var runtime = map__43078__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43078__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__43080 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__43083 = null;
var count__43084 = (0);
var i__43085 = (0);
while(true){
if((i__43085 < count__43084)){
var ext = chunk__43083.cljs$core$IIndexed$_nth$arity$2(null,i__43085);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__43177 = seq__43080;
var G__43178 = chunk__43083;
var G__43179 = count__43084;
var G__43180 = (i__43085 + (1));
seq__43080 = G__43177;
chunk__43083 = G__43178;
count__43084 = G__43179;
i__43085 = G__43180;
continue;
} else {
var G__43181 = seq__43080;
var G__43182 = chunk__43083;
var G__43183 = count__43084;
var G__43184 = (i__43085 + (1));
seq__43080 = G__43181;
chunk__43083 = G__43182;
count__43084 = G__43183;
i__43085 = G__43184;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__43080);
if(temp__5753__auto__){
var seq__43080__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__43080__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__43080__$1);
var G__43185 = cljs.core.chunk_rest(seq__43080__$1);
var G__43186 = c__4649__auto__;
var G__43187 = cljs.core.count(c__4649__auto__);
var G__43188 = (0);
seq__43080 = G__43185;
chunk__43083 = G__43186;
count__43084 = G__43187;
i__43085 = G__43188;
continue;
} else {
var ext = cljs.core.first(seq__43080__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__43189 = cljs.core.next(seq__43080__$1);
var G__43190 = null;
var G__43191 = (0);
var G__43192 = (0);
seq__43080 = G__43189;
chunk__43083 = G__43190;
count__43084 = G__43191;
i__43085 = G__43192;
continue;
} else {
var G__43193 = cljs.core.next(seq__43080__$1);
var G__43194 = null;
var G__43195 = (0);
var G__43196 = (0);
seq__43080 = G__43193;
chunk__43083 = G__43194;
count__43084 = G__43195;
i__43085 = G__43196;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq43074){
var G__43075 = cljs.core.first(seq43074);
var seq43074__$1 = cljs.core.next(seq43074);
var G__43076 = cljs.core.first(seq43074__$1);
var seq43074__$2 = cljs.core.next(seq43074__$1);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43075,G__43076,seq43074__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__43114,p__43115){
var map__43116 = p__43114;
var map__43116__$1 = cljs.core.__destructure_map(map__43116);
var runtime = map__43116__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43116__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__43117 = p__43115;
var map__43117__$1 = cljs.core.__destructure_map(map__43117);
var msg = map__43117__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43117__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__43118 = cljs.core.deref(state_ref);
var map__43118__$1 = cljs.core.__destructure_map(map__43118);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43118__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43118__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__43121){
var map__43122 = p__43121;
var map__43122__$1 = cljs.core.__destructure_map(map__43122);
var runtime = map__43122__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43122__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__4223__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__43126,msg){
var map__43127 = p__43126;
var map__43127__$1 = cljs.core.__destructure_map(map__43127);
var runtime = map__43127__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43127__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__43128,key,p__43129){
var map__43130 = p__43128;
var map__43130__$1 = cljs.core.__destructure_map(map__43130);
var state = map__43130__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43130__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__43131 = p__43129;
var map__43131__$1 = cljs.core.__destructure_map(map__43131);
var spec = map__43131__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43131__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__43132,key,spec){
var map__43133 = p__43132;
var map__43133__$1 = cljs.core.__destructure_map(map__43133);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43133__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__43137_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__43137_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__43138_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__43138_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__43139_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__43139_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__43140_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__43140_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__43141_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__43141_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__43142,key){
var map__43143 = p__43142;
var map__43143__$1 = cljs.core.__destructure_map(map__43143);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43143__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__43150,msg){
var map__43151 = p__43150;
var map__43151__$1 = cljs.core.__destructure_map(map__43151);
var runtime = map__43151__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43151__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__43155,p__43156){
var map__43157 = p__43155;
var map__43157__$1 = cljs.core.__destructure_map(map__43157);
var runtime = map__43157__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43157__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__43158 = p__43156;
var map__43158__$1 = cljs.core.__destructure_map(map__43158);
var msg = map__43158__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43158__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43158__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__43159 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__43161 = null;
var count__43162 = (0);
var i__43163 = (0);
while(true){
if((i__43163 < count__43162)){
var map__43167 = chunk__43161.cljs$core$IIndexed$_nth$arity$2(null,i__43163);
var map__43167__$1 = cljs.core.__destructure_map(map__43167);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43167__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__43204 = seq__43159;
var G__43205 = chunk__43161;
var G__43206 = count__43162;
var G__43207 = (i__43163 + (1));
seq__43159 = G__43204;
chunk__43161 = G__43205;
count__43162 = G__43206;
i__43163 = G__43207;
continue;
} else {
var G__43208 = seq__43159;
var G__43209 = chunk__43161;
var G__43210 = count__43162;
var G__43211 = (i__43163 + (1));
seq__43159 = G__43208;
chunk__43161 = G__43209;
count__43162 = G__43210;
i__43163 = G__43211;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__43159);
if(temp__5753__auto__){
var seq__43159__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__43159__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__43159__$1);
var G__43212 = cljs.core.chunk_rest(seq__43159__$1);
var G__43213 = c__4649__auto__;
var G__43214 = cljs.core.count(c__4649__auto__);
var G__43215 = (0);
seq__43159 = G__43212;
chunk__43161 = G__43213;
count__43162 = G__43214;
i__43163 = G__43215;
continue;
} else {
var map__43169 = cljs.core.first(seq__43159__$1);
var map__43169__$1 = cljs.core.__destructure_map(map__43169);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43169__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__43216 = cljs.core.next(seq__43159__$1);
var G__43217 = null;
var G__43218 = (0);
var G__43219 = (0);
seq__43159 = G__43216;
chunk__43161 = G__43217;
count__43162 = G__43218;
i__43163 = G__43219;
continue;
} else {
var G__43220 = cljs.core.next(seq__43159__$1);
var G__43221 = null;
var G__43222 = (0);
var G__43223 = (0);
seq__43159 = G__43220;
chunk__43161 = G__43221;
count__43162 = G__43222;
i__43163 = G__43223;
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

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
