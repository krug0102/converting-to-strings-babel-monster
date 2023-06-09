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
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__144562,res){
var map__144564 = p__144562;
var map__144564__$1 = cljs.core.__destructure_map(map__144564);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__144564__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__144564__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__144568 = res;
var G__144568__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__144568,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__144568);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__144568__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__144568__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__144585 = arguments.length;
switch (G__144585) {
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

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__144588,msg,handlers,timeout_after_ms){
var map__144589 = p__144588;
var map__144589__$1 = cljs.core.__destructure_map(map__144589);
var runtime = map__144589__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__144589__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___144798 = arguments.length;
var i__4830__auto___144802 = (0);
while(true){
if((i__4830__auto___144802 < len__4829__auto___144798)){
args__4835__auto__.push((arguments[i__4830__auto___144802]));

var G__144803 = (i__4830__auto___144802 + (1));
i__4830__auto___144802 = G__144803;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((2) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4836__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__144593,ev,args){
var map__144594 = p__144593;
var map__144594__$1 = cljs.core.__destructure_map(map__144594);
var runtime = map__144594__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__144594__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__144595 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__144598 = null;
var count__144599 = (0);
var i__144600 = (0);
while(true){
if((i__144600 < count__144599)){
var ext = chunk__144598.cljs$core$IIndexed$_nth$arity$2(null,i__144600);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__144809 = seq__144595;
var G__144810 = chunk__144598;
var G__144811 = count__144599;
var G__144812 = (i__144600 + (1));
seq__144595 = G__144809;
chunk__144598 = G__144810;
count__144599 = G__144811;
i__144600 = G__144812;
continue;
} else {
var G__144817 = seq__144595;
var G__144818 = chunk__144598;
var G__144819 = count__144599;
var G__144820 = (i__144600 + (1));
seq__144595 = G__144817;
chunk__144598 = G__144818;
count__144599 = G__144819;
i__144600 = G__144820;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__144595);
if(temp__5753__auto__){
var seq__144595__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__144595__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__144595__$1);
var G__144823 = cljs.core.chunk_rest(seq__144595__$1);
var G__144824 = c__4649__auto__;
var G__144825 = cljs.core.count(c__4649__auto__);
var G__144826 = (0);
seq__144595 = G__144823;
chunk__144598 = G__144824;
count__144599 = G__144825;
i__144600 = G__144826;
continue;
} else {
var ext = cljs.core.first(seq__144595__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__144827 = cljs.core.next(seq__144595__$1);
var G__144828 = null;
var G__144829 = (0);
var G__144830 = (0);
seq__144595 = G__144827;
chunk__144598 = G__144828;
count__144599 = G__144829;
i__144600 = G__144830;
continue;
} else {
var G__144833 = cljs.core.next(seq__144595__$1);
var G__144834 = null;
var G__144835 = (0);
var G__144836 = (0);
seq__144595 = G__144833;
chunk__144598 = G__144834;
count__144599 = G__144835;
i__144600 = G__144836;
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
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq144590){
var G__144591 = cljs.core.first(seq144590);
var seq144590__$1 = cljs.core.next(seq144590);
var G__144592 = cljs.core.first(seq144590__$1);
var seq144590__$2 = cljs.core.next(seq144590__$1);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__144591,G__144592,seq144590__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__144607,p__144608){
var map__144615 = p__144607;
var map__144615__$1 = cljs.core.__destructure_map(map__144615);
var runtime = map__144615__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__144615__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__144616 = p__144608;
var map__144616__$1 = cljs.core.__destructure_map(map__144616);
var msg = map__144616__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__144616__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__144621 = cljs.core.deref(state_ref);
var map__144621__$1 = cljs.core.__destructure_map(map__144621);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__144621__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__144621__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__144639){
var map__144640 = p__144639;
var map__144640__$1 = cljs.core.__destructure_map(map__144640);
var runtime = map__144640__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__144640__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__4223__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__144646,msg){
var map__144647 = p__144646;
var map__144647__$1 = cljs.core.__destructure_map(map__144647);
var runtime = map__144647__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__144647__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__144650,key,p__144651){
var map__144652 = p__144650;
var map__144652__$1 = cljs.core.__destructure_map(map__144652);
var state = map__144652__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__144652__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__144653 = p__144651;
var map__144653__$1 = cljs.core.__destructure_map(map__144653);
var spec = map__144653__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__144653__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
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
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__144682,key,spec){
var map__144683 = p__144682;
var map__144683__$1 = cljs.core.__destructure_map(map__144683);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__144683__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__144684_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__144684_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__144685_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__144685_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__144686_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__144686_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__144687_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__144687_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__144688_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__144688_SHARP_);
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
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__144707,key){
var map__144708 = p__144707;
var map__144708__$1 = cljs.core.__destructure_map(map__144708);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__144708__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__144709,msg){
var map__144710 = p__144709;
var map__144710__$1 = cljs.core.__destructure_map(map__144710);
var runtime = map__144710__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__144710__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__144711,p__144712){
var map__144713 = p__144711;
var map__144713__$1 = cljs.core.__destructure_map(map__144713);
var runtime = map__144713__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__144713__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__144714 = p__144712;
var map__144714__$1 = cljs.core.__destructure_map(map__144714);
var msg = map__144714__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__144714__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__144714__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
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
var seq__144717 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__144719 = null;
var count__144720 = (0);
var i__144721 = (0);
while(true){
if((i__144721 < count__144720)){
var map__144727 = chunk__144719.cljs$core$IIndexed$_nth$arity$2(null,i__144721);
var map__144727__$1 = cljs.core.__destructure_map(map__144727);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__144727__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__144937 = seq__144717;
var G__144938 = chunk__144719;
var G__144939 = count__144720;
var G__144940 = (i__144721 + (1));
seq__144717 = G__144937;
chunk__144719 = G__144938;
count__144720 = G__144939;
i__144721 = G__144940;
continue;
} else {
var G__144941 = seq__144717;
var G__144942 = chunk__144719;
var G__144943 = count__144720;
var G__144944 = (i__144721 + (1));
seq__144717 = G__144941;
chunk__144719 = G__144942;
count__144720 = G__144943;
i__144721 = G__144944;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__144717);
if(temp__5753__auto__){
var seq__144717__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__144717__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__144717__$1);
var G__144946 = cljs.core.chunk_rest(seq__144717__$1);
var G__144947 = c__4649__auto__;
var G__144948 = cljs.core.count(c__4649__auto__);
var G__144949 = (0);
seq__144717 = G__144946;
chunk__144719 = G__144947;
count__144720 = G__144948;
i__144721 = G__144949;
continue;
} else {
var map__144746 = cljs.core.first(seq__144717__$1);
var map__144746__$1 = cljs.core.__destructure_map(map__144746);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__144746__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__144953 = cljs.core.next(seq__144717__$1);
var G__144954 = null;
var G__144955 = (0);
var G__144956 = (0);
seq__144717 = G__144953;
chunk__144719 = G__144954;
count__144720 = G__144955;
i__144721 = G__144956;
continue;
} else {
var G__144957 = cljs.core.next(seq__144717__$1);
var G__144958 = null;
var G__144959 = (0);
var G__144960 = (0);
seq__144717 = G__144957;
chunk__144719 = G__144958;
count__144720 = G__144959;
i__144721 = G__144960;
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
