goog.provide('sci.impl.protocols');
sci.impl.protocols.defprotocol = (function sci$impl$protocols$defprotocol(var_args){
var args__4835__auto__ = [];
var len__4829__auto___72129 = arguments.length;
var i__4830__auto___72130 = (0);
while(true){
if((i__4830__auto___72130 < len__4829__auto___72129)){
args__4835__auto__.push((arguments[i__4830__auto___72130]));

var G__72132 = (i__4830__auto___72130 + (1));
i__4830__auto___72130 = G__72132;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((4) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((4)),(0),null)):null);
return sci.impl.protocols.defprotocol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4836__auto__);
});

(sci.impl.protocols.defprotocol.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,_ctx,protocol_name,signatures){
var vec__71835 = (function (){var sig = cljs.core.first(signatures);
if(typeof sig === 'string'){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sig,cljs.core.rest(signatures)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,signatures], null);
}
})();
var docstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71835,(0),null);
var signatures__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71835,(1),null);
var vec__71838 = (function (){var opt = cljs.core.first(signatures__$1);
if((opt instanceof cljs.core.Keyword)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.createAsIfByAssoc([opt,cljs.core.second(signatures__$1)]),cljs.core.nnext(signatures__$1)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,signatures__$1], null);
}
})();
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71838,(0),null);
var signatures__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71838,(1),null);
var current_ns = cljs.core.str.cljs$core$IFn$_invoke$arity$1(sci.impl.vars.current_ns_name());
var expansion = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),null,(1),null)),(new cljs.core.List(null,cljs.core.with_meta(protocol_name,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),docstring], null)),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"methods","methods",453930866),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_set,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"ns","ns",441598760),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*ns*","cljs.core/*ns*",1155497085,null),null,(1),null))], 0))))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__71846){
var vec__71848 = p__71846;
var seq__71849 = cljs.core.seq(vec__71848);
var first__71850 = cljs.core.first(seq__71849);
var seq__71849__$1 = cljs.core.next(seq__71849);
var method_name = first__71850;
var ___$2 = seq__71849__$1;
var fq_name = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(current_ns,cljs.core.str.cljs$core$IFn$_invoke$arity$1(method_name));
var impls = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defmulti","cljs.core/defmulti",723984225,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","protocol-type-impl","cljs.core/protocol-type-impl",155177701,null),null,(1),null))], 0)))),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defmethod","cljs.core/defmethod",-180785162,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword("sci.impl.protocols","reified","sci.impl.protocols/reified",-2019939396),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"x__71812__auto__","x__71812__auto__",879341785,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"&","&",-2144855648,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"args__71813__auto__","args__71813__auto__",1696566952,null),null,(1),null))], 0))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"methods__71814__auto__","methods__71814__auto__",-414859307,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-reified-methods","cljs.core/-reified-methods",-1833109469,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__71812__auto__","x__71812__auto__",879341785,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"methods__71814__auto__","methods__71814__auto__",-414859307,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null))))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"x__71812__auto__","x__71812__auto__",879341785,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args__71813__auto__","args__71813__auto__",1696566952,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))))], null);
var impls__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"extend-via-metadata","extend-via-metadata",-427346794).cljs$core$IFn$_invoke$arity$1(opts))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(impls,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defmethod","cljs.core/defmethod",-180785162,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"default","default",-1987822328),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"x__71816__auto__","x__71816__auto__",1453665722,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"&","&",-2144855648,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"args__71817__auto__","args__71817__auto__",458088509,null),null,(1),null))], 0))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"meta__71818__auto__","meta__71818__auto__",530045002,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","meta","cljs.core/meta",-748218346,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__71816__auto__","x__71816__auto__",1453665722,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"method__71819__auto__","method__71819__auto__",-1910374375,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"meta__71818__auto__","meta__71818__auto__",530045002,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,fq_name,null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"method__71819__auto__","method__71819__auto__",-1910374375,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"method__71819__auto__","method__71819__auto__",-1910374375,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"x__71816__auto__","x__71816__auto__",1453665722,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args__71817__auto__","args__71817__auto__",458088509,null),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("js","Error","js/Error",-1692659266,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"No implementation of method: ",null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(method_name),null,(1),null)),(new cljs.core.List(null," of protocol: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"var","var",870848730,null),null,(1),null)),(new cljs.core.List(null,protocol_name,null,(1),null))))),null,(1),null)),(new cljs.core.List(null," found for: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","protocol-type-impl","cljs.core/protocol-type-impl",155177701,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__71816__auto__","x__71816__auto__",1453665722,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))))):impls);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),impls__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),null,(1),null)),(new cljs.core.List(null,protocol_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","update","cljs.core/update",-908565906,null),null,(1),null)),(new cljs.core.List(null,protocol_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"methods","methods",453930866),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","conj","cljs.core/conj",-460750931,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
}),signatures__$2)], 0))));
return expansion;
}));

(sci.impl.protocols.defprotocol.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(sci.impl.protocols.defprotocol.cljs$lang$applyTo = (function (seq71825){
var G__71826 = cljs.core.first(seq71825);
var seq71825__$1 = cljs.core.next(seq71825);
var G__71827 = cljs.core.first(seq71825__$1);
var seq71825__$2 = cljs.core.next(seq71825__$1);
var G__71828 = cljs.core.first(seq71825__$2);
var seq71825__$3 = cljs.core.next(seq71825__$2);
var G__71829 = cljs.core.first(seq71825__$3);
var seq71825__$4 = cljs.core.next(seq71825__$3);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__71826,G__71827,G__71828,G__71829,seq71825__$4);
}));

sci.impl.protocols.extend_protocol = (function sci$impl$protocols$extend_protocol(var_args){
var args__4835__auto__ = [];
var len__4829__auto___72153 = arguments.length;
var i__4830__auto___72154 = (0);
while(true){
if((i__4830__auto___72154 < len__4829__auto___72153)){
args__4835__auto__.push((arguments[i__4830__auto___72154]));

var G__72155 = (i__4830__auto___72154 + (1));
i__4830__auto___72154 = G__72155;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((4) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((4)),(0),null)):null);
return sci.impl.protocols.extend_protocol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4836__auto__);
});

(sci.impl.protocols.extend_protocol.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,ctx,protocol_name,impls){
var impls__$1 = sci.impl.utils.split_when((function (p1__71880_SHARP_){
return (!(cljs.core.seq_QMARK_(p1__71880_SHARP_)));
}),impls);
var protocol_var = (function (){var fexpr__71892 = cljs.core.deref(sci.impl.utils.eval_resolve_state);
return (fexpr__71892.cljs$core$IFn$_invoke$arity$2 ? fexpr__71892.cljs$core$IFn$_invoke$arity$2(ctx,protocol_name) : fexpr__71892.call(null,ctx,protocol_name));
})();
var protocol_ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(protocol_var));
var pns = cljs.core.str.cljs$core$IFn$_invoke$arity$1(sci.impl.vars.getName(protocol_ns));
var fq_meth_name = (function (p1__71881_SHARP_){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(pns,p1__71881_SHARP_);
});
var expansion = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__71897){
var vec__71898 = p__71897;
var seq__71899 = cljs.core.seq(vec__71898);
var first__71900 = cljs.core.first(seq__71899);
var seq__71899__$1 = cljs.core.next(seq__71899);
var type = first__71900;
var meths = seq__71899__$1;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (meth){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defmethod","cljs.core/defmethod",-180785162,null),null,(1),null)),(new cljs.core.List(null,fq_meth_name(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(meth))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,type,null,(1),null)),(new cljs.core.List(null,cljs.core.second(meth),null,(1),null)),cljs.core.nnext(meth)], 0))));
}),meths))));
}),impls__$1))));
return expansion;
}));

(sci.impl.protocols.extend_protocol.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(sci.impl.protocols.extend_protocol.cljs$lang$applyTo = (function (seq71884){
var G__71885 = cljs.core.first(seq71884);
var seq71884__$1 = cljs.core.next(seq71884);
var G__71886 = cljs.core.first(seq71884__$1);
var seq71884__$2 = cljs.core.next(seq71884__$1);
var G__71887 = cljs.core.first(seq71884__$2);
var seq71884__$3 = cljs.core.next(seq71884__$2);
var G__71888 = cljs.core.first(seq71884__$3);
var seq71884__$4 = cljs.core.next(seq71884__$3);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__71885,G__71886,G__71887,G__71888,seq71884__$4);
}));

sci.impl.protocols.extend = (function sci$impl$protocols$extend(var_args){
var args__4835__auto__ = [];
var len__4829__auto___72162 = arguments.length;
var i__4830__auto___72163 = (0);
while(true){
if((i__4830__auto___72163 < len__4829__auto___72162)){
args__4835__auto__.push((arguments[i__4830__auto___72163]));

var G__72165 = (i__4830__auto___72163 + (1));
i__4830__auto___72163 = G__72165;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((2) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((2)),(0),null)):null);
return sci.impl.protocols.extend.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4836__auto__);
});

(sci.impl.protocols.extend.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,atype,proto_PLUS_mmaps){
var seq__71917 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),proto_PLUS_mmaps));
var chunk__71919 = null;
var count__71920 = (0);
var i__71921 = (0);
while(true){
if((i__71921 < count__71920)){
var vec__71994 = chunk__71919.cljs$core$IIndexed$_nth$arity$2(null,i__71921);
var proto = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71994,(0),null);
var mmap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71994,(1),null);
var proto_ns_72168 = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(proto);
var pns_72169 = sci.impl.vars.getName(proto_ns_72168);
var seq__71999_72170 = cljs.core.seq(mmap);
var chunk__72000_72171 = null;
var count__72001_72172 = (0);
var i__72002_72173 = (0);
while(true){
if((i__72002_72173 < count__72001_72172)){
var vec__72016_72175 = chunk__72000_72171.cljs$core$IIndexed$_nth$arity$2(null,i__72002_72173);
var fn_name_72176 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72016_72175,(0),null);
var f_72177 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72016_72175,(1),null);
var fn_sym_72178 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(fn_name_72176));
var env_72179 = cljs.core.deref(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx));
var multi_method_var_72180 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env_72179,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),pns_72169,fn_sym_72178], null));
var multi_method_72181 = cljs.core.deref(multi_method_var_72180);
sci.impl.multimethods.multi_fn_add_method_impl(multi_method_72181,atype,f_72177);


var G__72183 = seq__71999_72170;
var G__72184 = chunk__72000_72171;
var G__72185 = count__72001_72172;
var G__72186 = (i__72002_72173 + (1));
seq__71999_72170 = G__72183;
chunk__72000_72171 = G__72184;
count__72001_72172 = G__72185;
i__72002_72173 = G__72186;
continue;
} else {
var temp__5753__auto___72187 = cljs.core.seq(seq__71999_72170);
if(temp__5753__auto___72187){
var seq__71999_72188__$1 = temp__5753__auto___72187;
if(cljs.core.chunked_seq_QMARK_(seq__71999_72188__$1)){
var c__4649__auto___72190 = cljs.core.chunk_first(seq__71999_72188__$1);
var G__72191 = cljs.core.chunk_rest(seq__71999_72188__$1);
var G__72192 = c__4649__auto___72190;
var G__72193 = cljs.core.count(c__4649__auto___72190);
var G__72194 = (0);
seq__71999_72170 = G__72191;
chunk__72000_72171 = G__72192;
count__72001_72172 = G__72193;
i__72002_72173 = G__72194;
continue;
} else {
var vec__72022_72196 = cljs.core.first(seq__71999_72188__$1);
var fn_name_72197 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72022_72196,(0),null);
var f_72198 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72022_72196,(1),null);
var fn_sym_72199 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(fn_name_72197));
var env_72200 = cljs.core.deref(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx));
var multi_method_var_72201 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env_72200,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),pns_72169,fn_sym_72199], null));
var multi_method_72202 = cljs.core.deref(multi_method_var_72201);
sci.impl.multimethods.multi_fn_add_method_impl(multi_method_72202,atype,f_72198);


var G__72204 = cljs.core.next(seq__71999_72188__$1);
var G__72205 = null;
var G__72206 = (0);
var G__72207 = (0);
seq__71999_72170 = G__72204;
chunk__72000_72171 = G__72205;
count__72001_72172 = G__72206;
i__72002_72173 = G__72207;
continue;
}
} else {
}
}
break;
}


var G__72208 = seq__71917;
var G__72209 = chunk__71919;
var G__72210 = count__71920;
var G__72211 = (i__71921 + (1));
seq__71917 = G__72208;
chunk__71919 = G__72209;
count__71920 = G__72210;
i__71921 = G__72211;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__71917);
if(temp__5753__auto__){
var seq__71917__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__71917__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__71917__$1);
var G__72215 = cljs.core.chunk_rest(seq__71917__$1);
var G__72216 = c__4649__auto__;
var G__72217 = cljs.core.count(c__4649__auto__);
var G__72218 = (0);
seq__71917 = G__72215;
chunk__71919 = G__72216;
count__71920 = G__72217;
i__71921 = G__72218;
continue;
} else {
var vec__72027 = cljs.core.first(seq__71917__$1);
var proto = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72027,(0),null);
var mmap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72027,(1),null);
var proto_ns_72219 = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(proto);
var pns_72220 = sci.impl.vars.getName(proto_ns_72219);
var seq__72031_72222 = cljs.core.seq(mmap);
var chunk__72032_72223 = null;
var count__72033_72224 = (0);
var i__72034_72225 = (0);
while(true){
if((i__72034_72225 < count__72033_72224)){
var vec__72050_72226 = chunk__72032_72223.cljs$core$IIndexed$_nth$arity$2(null,i__72034_72225);
var fn_name_72228 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72050_72226,(0),null);
var f_72229 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72050_72226,(1),null);
var fn_sym_72230 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(fn_name_72228));
var env_72231 = cljs.core.deref(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx));
var multi_method_var_72232 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env_72231,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),pns_72220,fn_sym_72230], null));
var multi_method_72233 = cljs.core.deref(multi_method_var_72232);
sci.impl.multimethods.multi_fn_add_method_impl(multi_method_72233,atype,f_72229);


var G__72234 = seq__72031_72222;
var G__72235 = chunk__72032_72223;
var G__72236 = count__72033_72224;
var G__72237 = (i__72034_72225 + (1));
seq__72031_72222 = G__72234;
chunk__72032_72223 = G__72235;
count__72033_72224 = G__72236;
i__72034_72225 = G__72237;
continue;
} else {
var temp__5753__auto___72238__$1 = cljs.core.seq(seq__72031_72222);
if(temp__5753__auto___72238__$1){
var seq__72031_72239__$1 = temp__5753__auto___72238__$1;
if(cljs.core.chunked_seq_QMARK_(seq__72031_72239__$1)){
var c__4649__auto___72240 = cljs.core.chunk_first(seq__72031_72239__$1);
var G__72242 = cljs.core.chunk_rest(seq__72031_72239__$1);
var G__72243 = c__4649__auto___72240;
var G__72244 = cljs.core.count(c__4649__auto___72240);
var G__72245 = (0);
seq__72031_72222 = G__72242;
chunk__72032_72223 = G__72243;
count__72033_72224 = G__72244;
i__72034_72225 = G__72245;
continue;
} else {
var vec__72056_72246 = cljs.core.first(seq__72031_72239__$1);
var fn_name_72247 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72056_72246,(0),null);
var f_72248 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72056_72246,(1),null);
var fn_sym_72249 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(fn_name_72247));
var env_72250 = cljs.core.deref(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx));
var multi_method_var_72251 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env_72250,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),pns_72220,fn_sym_72249], null));
var multi_method_72252 = cljs.core.deref(multi_method_var_72251);
sci.impl.multimethods.multi_fn_add_method_impl(multi_method_72252,atype,f_72248);


var G__72253 = cljs.core.next(seq__72031_72239__$1);
var G__72254 = null;
var G__72255 = (0);
var G__72256 = (0);
seq__72031_72222 = G__72253;
chunk__72032_72223 = G__72254;
count__72033_72224 = G__72255;
i__72034_72225 = G__72256;
continue;
}
} else {
}
}
break;
}


var G__72257 = cljs.core.next(seq__71917__$1);
var G__72258 = null;
var G__72259 = (0);
var G__72260 = (0);
seq__71917 = G__72257;
chunk__71919 = G__72258;
count__71920 = G__72259;
i__71921 = G__72260;
continue;
}
} else {
return null;
}
}
break;
}
}));

(sci.impl.protocols.extend.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.protocols.extend.cljs$lang$applyTo = (function (seq71909){
var G__71911 = cljs.core.first(seq71909);
var seq71909__$1 = cljs.core.next(seq71909);
var G__71912 = cljs.core.first(seq71909__$1);
var seq71909__$2 = cljs.core.next(seq71909__$1);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__71911,G__71912,seq71909__$2);
}));

sci.impl.protocols.extend_type = (function sci$impl$protocols$extend_type(var_args){
var args__4835__auto__ = [];
var len__4829__auto___72262 = arguments.length;
var i__4830__auto___72263 = (0);
while(true){
if((i__4830__auto___72263 < len__4829__auto___72262)){
args__4835__auto__.push((arguments[i__4830__auto___72263]));

var G__72264 = (i__4830__auto___72263 + (1));
i__4830__auto___72263 = G__72264;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((4) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((4)),(0),null)):null);
return sci.impl.protocols.extend_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4836__auto__);
});

(sci.impl.protocols.extend_type.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,ctx,type,proto_PLUS_meths){
var proto_PLUS_meths__$1 = sci.impl.utils.split_when((function (p1__72067_SHARP_){
return (!(cljs.core.seq_QMARK_(p1__72067_SHARP_)));
}),proto_PLUS_meths);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__72082){
var vec__72083 = p__72082;
var seq__72084 = cljs.core.seq(vec__72083);
var first__72085 = cljs.core.first(seq__72084);
var seq__72084__$1 = cljs.core.next(seq__72084);
var proto = first__72085;
var meths = seq__72084__$1;
var protocol_var = (function (){var fexpr__72087 = cljs.core.deref(sci.impl.utils.eval_resolve_state);
return (fexpr__72087.cljs$core$IFn$_invoke$arity$2 ? fexpr__72087.cljs$core$IFn$_invoke$arity$2(ctx,proto) : fexpr__72087.call(null,ctx,proto));
})();
var protocol_ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(protocol_var));
var pns = cljs.core.str.cljs$core$IFn$_invoke$arity$1(sci.impl.vars.getName(protocol_ns));
var fq_meth_name = (function (p1__72068_SHARP_){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(pns,p1__72068_SHARP_);
});
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (meth){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defmethod","cljs.core/defmethod",-180785162,null),null,(1),null)),(new cljs.core.List(null,fq_meth_name(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(meth))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,type,null,(1),null)),(new cljs.core.List(null,cljs.core.second(meth),null,(1),null)),cljs.core.nnext(meth)], 0))));
}),meths))));
}),proto_PLUS_meths__$1))));
}));

(sci.impl.protocols.extend_type.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(sci.impl.protocols.extend_type.cljs$lang$applyTo = (function (seq72070){
var G__72071 = cljs.core.first(seq72070);
var seq72070__$1 = cljs.core.next(seq72070);
var G__72072 = cljs.core.first(seq72070__$1);
var seq72070__$2 = cljs.core.next(seq72070__$1);
var G__72073 = cljs.core.first(seq72070__$2);
var seq72070__$3 = cljs.core.next(seq72070__$2);
var G__72074 = cljs.core.first(seq72070__$3);
var seq72070__$4 = cljs.core.next(seq72070__$3);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__72071,G__72072,G__72073,G__72074,seq72070__$4);
}));

sci.impl.protocols.reify = (function sci$impl$protocols$reify(var_args){
var args__4835__auto__ = [];
var len__4829__auto___72273 = arguments.length;
var i__4830__auto___72274 = (0);
while(true){
if((i__4830__auto___72274 < len__4829__auto___72273)){
args__4835__auto__.push((arguments[i__4830__auto___72274]));

var G__72275 = (i__4830__auto___72274 + (1));
i__4830__auto___72274 = G__72275;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((4) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((4)),(0),null)):null);
return sci.impl.protocols.reify.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4836__auto__);
});

(sci.impl.protocols.reify.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,_ctx,interface$,meths){
var meths__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (meth){
return cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,cljs.core.first(meth),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.second(meth),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.nnext(meth)], 0)))),null,(1),null))))));
}),meths));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-reified","cljs.core/-reified",-1831583173,null),null,(1),null)),(new cljs.core.List(null,interface$,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,meths__$1,null,(1),null))], 0))));
}));

(sci.impl.protocols.reify.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(sci.impl.protocols.reify.cljs$lang$applyTo = (function (seq72098){
var G__72099 = cljs.core.first(seq72098);
var seq72098__$1 = cljs.core.next(seq72098);
var G__72100 = cljs.core.first(seq72098__$1);
var seq72098__$2 = cljs.core.next(seq72098__$1);
var G__72101 = cljs.core.first(seq72098__$2);
var seq72098__$3 = cljs.core.next(seq72098__$2);
var G__72102 = cljs.core.first(seq72098__$3);
var seq72098__$4 = cljs.core.next(seq72098__$3);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__72099,G__72100,G__72101,G__72102,seq72098__$4);
}));

sci.impl.protocols.satisfies_QMARK_ = (function sci$impl$protocols$satisfies_QMARK_(protocol,obj){
return cljs.core.boolean$(cljs.core.some((function (p1__72114_SHARP_){
return cljs.core.get_method(p1__72114_SHARP_,sci.impl.types.type_impl(obj));
}),new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(protocol)));
});
/**
 * Returns true if atype extends protocol
 */
sci.impl.protocols.extends_QMARK_ = (function sci$impl$protocols$extends_QMARK_(protocol,atype){
return cljs.core.boolean$(cljs.core.some((function (p1__72122_SHARP_){
return cljs.core.get_method(p1__72122_SHARP_,atype);
}),new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(protocol)));
});

//# sourceMappingURL=sci.impl.protocols.js.map
