goog.provide('sci.impl.protocols');
sci.impl.protocols.defprotocol = (function sci$impl$protocols$defprotocol(var_args){
var args__4835__auto__ = [];
var len__4829__auto___154894 = arguments.length;
var i__4830__auto___154895 = (0);
while(true){
if((i__4830__auto___154895 < len__4829__auto___154894)){
args__4835__auto__.push((arguments[i__4830__auto___154895]));

var G__154896 = (i__4830__auto___154895 + (1));
i__4830__auto___154895 = G__154896;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((4) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((4)),(0),null)):null);
return sci.impl.protocols.defprotocol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4836__auto__);
});

(sci.impl.protocols.defprotocol.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,_ctx,protocol_name,signatures){
var vec__154720 = (function (){var sig = cljs.core.first(signatures);
if(typeof sig === 'string'){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sig,cljs.core.rest(signatures)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,signatures], null);
}
})();
var docstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__154720,(0),null);
var signatures__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__154720,(1),null);
var vec__154723 = (function (){var opt = cljs.core.first(signatures__$1);
if((opt instanceof cljs.core.Keyword)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.createAsIfByAssoc([opt,cljs.core.second(signatures__$1)]),cljs.core.nnext(signatures__$1)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,signatures__$1], null);
}
})();
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__154723,(0),null);
var signatures__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__154723,(1),null);
var current_ns = cljs.core.str.cljs$core$IFn$_invoke$arity$1(sci.impl.vars.current_ns_name());
var expansion = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),null,(1),null)),(new cljs.core.List(null,cljs.core.with_meta(protocol_name,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),docstring], null)),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"methods","methods",453930866),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_set,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"ns","ns",441598760),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*ns*","cljs.core/*ns*",1155497085,null),null,(1),null))], 0))))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__154728){
var vec__154729 = p__154728;
var seq__154730 = cljs.core.seq(vec__154729);
var first__154731 = cljs.core.first(seq__154730);
var seq__154730__$1 = cljs.core.next(seq__154730);
var method_name = first__154731;
var ___$2 = seq__154730__$1;
var fq_name = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(current_ns,cljs.core.str.cljs$core$IFn$_invoke$arity$1(method_name));
var impls = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defmulti","cljs.core/defmulti",723984225,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","protocol-type-impl","cljs.core/protocol-type-impl",155177701,null),null,(1),null))], 0)))),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defmethod","cljs.core/defmethod",-180785162,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword("sci.impl.protocols","reified","sci.impl.protocols/reified",-2019939396),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"x__154705__auto__","x__154705__auto__",-2098642788,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"&","&",-2144855648,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"args__154709__auto__","args__154709__auto__",962030338,null),null,(1),null))], 0))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"methods__154710__auto__","methods__154710__auto__",-342260509,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-reified-methods","cljs.core/-reified-methods",-1833109469,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__154705__auto__","x__154705__auto__",-2098642788,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"methods__154710__auto__","methods__154710__auto__",-342260509,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null))))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"x__154705__auto__","x__154705__auto__",-2098642788,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args__154709__auto__","args__154709__auto__",962030338,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))))], null);
var impls__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"extend-via-metadata","extend-via-metadata",-427346794).cljs$core$IFn$_invoke$arity$1(opts))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(impls,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defmethod","cljs.core/defmethod",-180785162,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"default","default",-1987822328),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"x__154711__auto__","x__154711__auto__",-999782113,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"&","&",-2144855648,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"args__154712__auto__","args__154712__auto__",-966933000,null),null,(1),null))], 0))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"meta__154713__auto__","meta__154713__auto__",-1368198702,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","meta","cljs.core/meta",-748218346,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__154711__auto__","x__154711__auto__",-999782113,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"method__154714__auto__","method__154714__auto__",-1617091560,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"meta__154713__auto__","meta__154713__auto__",-1368198702,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,fq_name,null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"method__154714__auto__","method__154714__auto__",-1617091560,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"method__154714__auto__","method__154714__auto__",-1617091560,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"x__154711__auto__","x__154711__auto__",-999782113,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args__154712__auto__","args__154712__auto__",-966933000,null),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("js","Error","js/Error",-1692659266,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"No implementation of method: ",null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(method_name),null,(1),null)),(new cljs.core.List(null," of protocol: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"var","var",870848730,null),null,(1),null)),(new cljs.core.List(null,protocol_name,null,(1),null))))),null,(1),null)),(new cljs.core.List(null," found for: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","protocol-type-impl","cljs.core/protocol-type-impl",155177701,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__154711__auto__","x__154711__auto__",-999782113,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))))):impls);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),impls__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),null,(1),null)),(new cljs.core.List(null,protocol_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","update","cljs.core/update",-908565906,null),null,(1),null)),(new cljs.core.List(null,protocol_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"methods","methods",453930866),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","conj","cljs.core/conj",-460750931,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
}),signatures__$2)], 0))));
return expansion;
}));

(sci.impl.protocols.defprotocol.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(sci.impl.protocols.defprotocol.cljs$lang$applyTo = (function (seq154715){
var G__154716 = cljs.core.first(seq154715);
var seq154715__$1 = cljs.core.next(seq154715);
var G__154717 = cljs.core.first(seq154715__$1);
var seq154715__$2 = cljs.core.next(seq154715__$1);
var G__154718 = cljs.core.first(seq154715__$2);
var seq154715__$3 = cljs.core.next(seq154715__$2);
var G__154719 = cljs.core.first(seq154715__$3);
var seq154715__$4 = cljs.core.next(seq154715__$3);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__154716,G__154717,G__154718,G__154719,seq154715__$4);
}));

sci.impl.protocols.extend_protocol = (function sci$impl$protocols$extend_protocol(var_args){
var args__4835__auto__ = [];
var len__4829__auto___154901 = arguments.length;
var i__4830__auto___154902 = (0);
while(true){
if((i__4830__auto___154902 < len__4829__auto___154901)){
args__4835__auto__.push((arguments[i__4830__auto___154902]));

var G__154903 = (i__4830__auto___154902 + (1));
i__4830__auto___154902 = G__154903;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((4) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((4)),(0),null)):null);
return sci.impl.protocols.extend_protocol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4836__auto__);
});

(sci.impl.protocols.extend_protocol.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,ctx,protocol_name,impls){
var impls__$1 = sci.impl.utils.split_when((function (p1__154749_SHARP_){
return (!(cljs.core.seq_QMARK_(p1__154749_SHARP_)));
}),impls);
var protocol_var = (function (){var fexpr__154756 = cljs.core.deref(sci.impl.utils.eval_resolve_state);
return (fexpr__154756.cljs$core$IFn$_invoke$arity$2 ? fexpr__154756.cljs$core$IFn$_invoke$arity$2(ctx,protocol_name) : fexpr__154756.call(null,ctx,protocol_name));
})();
var protocol_ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(protocol_var));
var pns = cljs.core.str.cljs$core$IFn$_invoke$arity$1(sci.impl.vars.getName(protocol_ns));
var fq_meth_name = (function (p1__154750_SHARP_){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(pns,p1__154750_SHARP_);
});
var expansion = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__154758){
var vec__154759 = p__154758;
var seq__154760 = cljs.core.seq(vec__154759);
var first__154761 = cljs.core.first(seq__154760);
var seq__154760__$1 = cljs.core.next(seq__154760);
var type = first__154761;
var meths = seq__154760__$1;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (meth){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defmethod","cljs.core/defmethod",-180785162,null),null,(1),null)),(new cljs.core.List(null,fq_meth_name(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(meth))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,type,null,(1),null)),(new cljs.core.List(null,cljs.core.second(meth),null,(1),null)),cljs.core.nnext(meth)], 0))));
}),meths))));
}),impls__$1))));
return expansion;
}));

(sci.impl.protocols.extend_protocol.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(sci.impl.protocols.extend_protocol.cljs$lang$applyTo = (function (seq154751){
var G__154752 = cljs.core.first(seq154751);
var seq154751__$1 = cljs.core.next(seq154751);
var G__154753 = cljs.core.first(seq154751__$1);
var seq154751__$2 = cljs.core.next(seq154751__$1);
var G__154754 = cljs.core.first(seq154751__$2);
var seq154751__$3 = cljs.core.next(seq154751__$2);
var G__154755 = cljs.core.first(seq154751__$3);
var seq154751__$4 = cljs.core.next(seq154751__$3);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__154752,G__154753,G__154754,G__154755,seq154751__$4);
}));

sci.impl.protocols.extend = (function sci$impl$protocols$extend(var_args){
var args__4835__auto__ = [];
var len__4829__auto___154904 = arguments.length;
var i__4830__auto___154905 = (0);
while(true){
if((i__4830__auto___154905 < len__4829__auto___154904)){
args__4835__auto__.push((arguments[i__4830__auto___154905]));

var G__154906 = (i__4830__auto___154905 + (1));
i__4830__auto___154905 = G__154906;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((2) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((2)),(0),null)):null);
return sci.impl.protocols.extend.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4836__auto__);
});

(sci.impl.protocols.extend.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,atype,proto_PLUS_mmaps){
var seq__154765 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),proto_PLUS_mmaps));
var chunk__154767 = null;
var count__154768 = (0);
var i__154769 = (0);
while(true){
if((i__154769 < count__154768)){
var vec__154813 = chunk__154767.cljs$core$IIndexed$_nth$arity$2(null,i__154769);
var proto = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__154813,(0),null);
var mmap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__154813,(1),null);
var proto_ns_154907 = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(proto);
var pns_154908 = sci.impl.vars.getName(proto_ns_154907);
var seq__154817_154909 = cljs.core.seq(mmap);
var chunk__154818_154910 = null;
var count__154819_154911 = (0);
var i__154820_154912 = (0);
while(true){
if((i__154820_154912 < count__154819_154911)){
var vec__154830_154913 = chunk__154818_154910.cljs$core$IIndexed$_nth$arity$2(null,i__154820_154912);
var fn_name_154914 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__154830_154913,(0),null);
var f_154915 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__154830_154913,(1),null);
var fn_sym_154916 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(fn_name_154914));
var env_154917 = cljs.core.deref(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx));
var multi_method_var_154918 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env_154917,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),pns_154908,fn_sym_154916], null));
var multi_method_154919 = cljs.core.deref(multi_method_var_154918);
sci.impl.multimethods.multi_fn_add_method_impl(multi_method_154919,atype,f_154915);


var G__154920 = seq__154817_154909;
var G__154921 = chunk__154818_154910;
var G__154922 = count__154819_154911;
var G__154923 = (i__154820_154912 + (1));
seq__154817_154909 = G__154920;
chunk__154818_154910 = G__154921;
count__154819_154911 = G__154922;
i__154820_154912 = G__154923;
continue;
} else {
var temp__5753__auto___154924 = cljs.core.seq(seq__154817_154909);
if(temp__5753__auto___154924){
var seq__154817_154925__$1 = temp__5753__auto___154924;
if(cljs.core.chunked_seq_QMARK_(seq__154817_154925__$1)){
var c__4649__auto___154926 = cljs.core.chunk_first(seq__154817_154925__$1);
var G__154927 = cljs.core.chunk_rest(seq__154817_154925__$1);
var G__154928 = c__4649__auto___154926;
var G__154929 = cljs.core.count(c__4649__auto___154926);
var G__154930 = (0);
seq__154817_154909 = G__154927;
chunk__154818_154910 = G__154928;
count__154819_154911 = G__154929;
i__154820_154912 = G__154930;
continue;
} else {
var vec__154834_154932 = cljs.core.first(seq__154817_154925__$1);
var fn_name_154933 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__154834_154932,(0),null);
var f_154934 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__154834_154932,(1),null);
var fn_sym_154935 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(fn_name_154933));
var env_154936 = cljs.core.deref(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx));
var multi_method_var_154937 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env_154936,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),pns_154908,fn_sym_154935], null));
var multi_method_154938 = cljs.core.deref(multi_method_var_154937);
sci.impl.multimethods.multi_fn_add_method_impl(multi_method_154938,atype,f_154934);


var G__154939 = cljs.core.next(seq__154817_154925__$1);
var G__154940 = null;
var G__154941 = (0);
var G__154942 = (0);
seq__154817_154909 = G__154939;
chunk__154818_154910 = G__154940;
count__154819_154911 = G__154941;
i__154820_154912 = G__154942;
continue;
}
} else {
}
}
break;
}


var G__154943 = seq__154765;
var G__154944 = chunk__154767;
var G__154945 = count__154768;
var G__154946 = (i__154769 + (1));
seq__154765 = G__154943;
chunk__154767 = G__154944;
count__154768 = G__154945;
i__154769 = G__154946;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__154765);
if(temp__5753__auto__){
var seq__154765__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__154765__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__154765__$1);
var G__154947 = cljs.core.chunk_rest(seq__154765__$1);
var G__154948 = c__4649__auto__;
var G__154949 = cljs.core.count(c__4649__auto__);
var G__154950 = (0);
seq__154765 = G__154947;
chunk__154767 = G__154948;
count__154768 = G__154949;
i__154769 = G__154950;
continue;
} else {
var vec__154839 = cljs.core.first(seq__154765__$1);
var proto = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__154839,(0),null);
var mmap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__154839,(1),null);
var proto_ns_154951 = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(proto);
var pns_154952 = sci.impl.vars.getName(proto_ns_154951);
var seq__154843_154953 = cljs.core.seq(mmap);
var chunk__154844_154954 = null;
var count__154845_154955 = (0);
var i__154846_154956 = (0);
while(true){
if((i__154846_154956 < count__154845_154955)){
var vec__154856_154957 = chunk__154844_154954.cljs$core$IIndexed$_nth$arity$2(null,i__154846_154956);
var fn_name_154958 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__154856_154957,(0),null);
var f_154959 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__154856_154957,(1),null);
var fn_sym_154960 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(fn_name_154958));
var env_154961 = cljs.core.deref(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx));
var multi_method_var_154962 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env_154961,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),pns_154952,fn_sym_154960], null));
var multi_method_154963 = cljs.core.deref(multi_method_var_154962);
sci.impl.multimethods.multi_fn_add_method_impl(multi_method_154963,atype,f_154959);


var G__154964 = seq__154843_154953;
var G__154965 = chunk__154844_154954;
var G__154966 = count__154845_154955;
var G__154967 = (i__154846_154956 + (1));
seq__154843_154953 = G__154964;
chunk__154844_154954 = G__154965;
count__154845_154955 = G__154966;
i__154846_154956 = G__154967;
continue;
} else {
var temp__5753__auto___154968__$1 = cljs.core.seq(seq__154843_154953);
if(temp__5753__auto___154968__$1){
var seq__154843_154969__$1 = temp__5753__auto___154968__$1;
if(cljs.core.chunked_seq_QMARK_(seq__154843_154969__$1)){
var c__4649__auto___154970 = cljs.core.chunk_first(seq__154843_154969__$1);
var G__154971 = cljs.core.chunk_rest(seq__154843_154969__$1);
var G__154972 = c__4649__auto___154970;
var G__154973 = cljs.core.count(c__4649__auto___154970);
var G__154974 = (0);
seq__154843_154953 = G__154971;
chunk__154844_154954 = G__154972;
count__154845_154955 = G__154973;
i__154846_154956 = G__154974;
continue;
} else {
var vec__154860_154975 = cljs.core.first(seq__154843_154969__$1);
var fn_name_154976 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__154860_154975,(0),null);
var f_154977 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__154860_154975,(1),null);
var fn_sym_154978 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(fn_name_154976));
var env_154979 = cljs.core.deref(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx));
var multi_method_var_154980 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env_154979,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),pns_154952,fn_sym_154978], null));
var multi_method_154981 = cljs.core.deref(multi_method_var_154980);
sci.impl.multimethods.multi_fn_add_method_impl(multi_method_154981,atype,f_154977);


var G__154982 = cljs.core.next(seq__154843_154969__$1);
var G__154983 = null;
var G__154984 = (0);
var G__154985 = (0);
seq__154843_154953 = G__154982;
chunk__154844_154954 = G__154983;
count__154845_154955 = G__154984;
i__154846_154956 = G__154985;
continue;
}
} else {
}
}
break;
}


var G__154986 = cljs.core.next(seq__154765__$1);
var G__154987 = null;
var G__154988 = (0);
var G__154989 = (0);
seq__154765 = G__154986;
chunk__154767 = G__154987;
count__154768 = G__154988;
i__154769 = G__154989;
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
(sci.impl.protocols.extend.cljs$lang$applyTo = (function (seq154762){
var G__154763 = cljs.core.first(seq154762);
var seq154762__$1 = cljs.core.next(seq154762);
var G__154764 = cljs.core.first(seq154762__$1);
var seq154762__$2 = cljs.core.next(seq154762__$1);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__154763,G__154764,seq154762__$2);
}));

sci.impl.protocols.extend_type = (function sci$impl$protocols$extend_type(var_args){
var args__4835__auto__ = [];
var len__4829__auto___154990 = arguments.length;
var i__4830__auto___154991 = (0);
while(true){
if((i__4830__auto___154991 < len__4829__auto___154990)){
args__4835__auto__.push((arguments[i__4830__auto___154991]));

var G__154992 = (i__4830__auto___154991 + (1));
i__4830__auto___154991 = G__154992;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((4) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((4)),(0),null)):null);
return sci.impl.protocols.extend_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4836__auto__);
});

(sci.impl.protocols.extend_type.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,ctx,type,proto_PLUS_meths){
var proto_PLUS_meths__$1 = sci.impl.utils.split_when((function (p1__154863_SHARP_){
return (!(cljs.core.seq_QMARK_(p1__154863_SHARP_)));
}),proto_PLUS_meths);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__154872){
var vec__154873 = p__154872;
var seq__154874 = cljs.core.seq(vec__154873);
var first__154875 = cljs.core.first(seq__154874);
var seq__154874__$1 = cljs.core.next(seq__154874);
var proto = first__154875;
var meths = seq__154874__$1;
var protocol_var = (function (){var fexpr__154876 = cljs.core.deref(sci.impl.utils.eval_resolve_state);
return (fexpr__154876.cljs$core$IFn$_invoke$arity$2 ? fexpr__154876.cljs$core$IFn$_invoke$arity$2(ctx,proto) : fexpr__154876.call(null,ctx,proto));
})();
var protocol_ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(protocol_var));
var pns = cljs.core.str.cljs$core$IFn$_invoke$arity$1(sci.impl.vars.getName(protocol_ns));
var fq_meth_name = (function (p1__154864_SHARP_){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(pns,p1__154864_SHARP_);
});
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (meth){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defmethod","cljs.core/defmethod",-180785162,null),null,(1),null)),(new cljs.core.List(null,fq_meth_name(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(meth))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,type,null,(1),null)),(new cljs.core.List(null,cljs.core.second(meth),null,(1),null)),cljs.core.nnext(meth)], 0))));
}),meths))));
}),proto_PLUS_meths__$1))));
}));

(sci.impl.protocols.extend_type.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(sci.impl.protocols.extend_type.cljs$lang$applyTo = (function (seq154865){
var G__154866 = cljs.core.first(seq154865);
var seq154865__$1 = cljs.core.next(seq154865);
var G__154867 = cljs.core.first(seq154865__$1);
var seq154865__$2 = cljs.core.next(seq154865__$1);
var G__154868 = cljs.core.first(seq154865__$2);
var seq154865__$3 = cljs.core.next(seq154865__$2);
var G__154869 = cljs.core.first(seq154865__$3);
var seq154865__$4 = cljs.core.next(seq154865__$3);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__154866,G__154867,G__154868,G__154869,seq154865__$4);
}));

sci.impl.protocols.reify = (function sci$impl$protocols$reify(var_args){
var args__4835__auto__ = [];
var len__4829__auto___154994 = arguments.length;
var i__4830__auto___154995 = (0);
while(true){
if((i__4830__auto___154995 < len__4829__auto___154994)){
args__4835__auto__.push((arguments[i__4830__auto___154995]));

var G__154996 = (i__4830__auto___154995 + (1));
i__4830__auto___154995 = G__154996;
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
(sci.impl.protocols.reify.cljs$lang$applyTo = (function (seq154882){
var G__154883 = cljs.core.first(seq154882);
var seq154882__$1 = cljs.core.next(seq154882);
var G__154884 = cljs.core.first(seq154882__$1);
var seq154882__$2 = cljs.core.next(seq154882__$1);
var G__154885 = cljs.core.first(seq154882__$2);
var seq154882__$3 = cljs.core.next(seq154882__$2);
var G__154886 = cljs.core.first(seq154882__$3);
var seq154882__$4 = cljs.core.next(seq154882__$3);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__154883,G__154884,G__154885,G__154886,seq154882__$4);
}));

sci.impl.protocols.satisfies_QMARK_ = (function sci$impl$protocols$satisfies_QMARK_(protocol,obj){
return cljs.core.boolean$(cljs.core.some((function (p1__154892_SHARP_){
return cljs.core.get_method(p1__154892_SHARP_,sci.impl.types.type_impl(obj));
}),new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(protocol)));
});
/**
 * Returns true if atype extends protocol
 */
sci.impl.protocols.extends_QMARK_ = (function sci$impl$protocols$extends_QMARK_(protocol,atype){
return cljs.core.boolean$(cljs.core.some((function (p1__154893_SHARP_){
return cljs.core.get_method(p1__154893_SHARP_,atype);
}),new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(protocol)));
});

//# sourceMappingURL=sci.impl.protocols.js.map
