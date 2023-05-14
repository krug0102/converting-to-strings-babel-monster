goog.provide('repl_tooling.nrepl.bencode');
/**
 * Encodes a map/vector/string/number into BEncode format
 */
repl_tooling.nrepl.bencode.encode = (function repl_tooling$nrepl$bencode$encode(this$){
if(typeof this$ === 'number'){
return ["i",cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$),"e"].join('');
} else {
if(typeof this$ === 'string'){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.js.shim.module$buffer.Buffer.byteLength(this$)),":",this$].join('');
} else {
if((this$ instanceof cljs.core.Keyword)){
var G__153641 = clojure.string.replace_first(cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$),/:/,"");
return (repl_tooling.nrepl.bencode.encode.cljs$core$IFn$_invoke$arity$1 ? repl_tooling.nrepl.bencode.encode.cljs$core$IFn$_invoke$arity$1(G__153641) : repl_tooling.nrepl.bencode.encode.call(null,G__153641));
} else {
if((this$ instanceof cljs.core.Symbol)){
var G__153643 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$);
return (repl_tooling.nrepl.bencode.encode.cljs$core$IFn$_invoke$arity$1 ? repl_tooling.nrepl.bencode.encode.cljs$core$IFn$_invoke$arity$1(G__153643) : repl_tooling.nrepl.bencode.encode.call(null,G__153643));
} else {
if(cljs.core.map_QMARK_(this$)){
return ["d",clojure.string.join.cljs$core$IFn$_invoke$arity$2("",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__153651){
var vec__153652 = p__153651;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__153652,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__153652,(1),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((repl_tooling.nrepl.bencode.encode.cljs$core$IFn$_invoke$arity$1 ? repl_tooling.nrepl.bencode.encode.cljs$core$IFn$_invoke$arity$1(k) : repl_tooling.nrepl.bencode.encode.call(null,k))),cljs.core.str.cljs$core$IFn$_invoke$arity$1((repl_tooling.nrepl.bencode.encode.cljs$core$IFn$_invoke$arity$1 ? repl_tooling.nrepl.bencode.encode.cljs$core$IFn$_invoke$arity$1(v) : repl_tooling.nrepl.bencode.encode.call(null,v)))].join('');
}),this$)),"e"].join('');
} else {
if(cljs.core.coll_QMARK_(this$)){
return ["l",clojure.string.join.cljs$core$IFn$_invoke$arity$2("",cljs.core.map.cljs$core$IFn$_invoke$arity$2(repl_tooling.nrepl.bencode.encode,this$)),"e"].join('');
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't encode this object",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"object","object",1474613949),this$,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type(this$)], null));

}
}
}
}
}
}
});
repl_tooling.nrepl.bencode.decode_fragment = (function repl_tooling$nrepl$bencode$decode_fragment(fragment,acc){
while(true){
var f = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(fragment));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("i",f)){
var temp__5751__auto__ = cljs.core.re_find(/i(\-?\d+)e/,fragment);
if(cljs.core.truth_(temp__5751__auto__)){
var vec__153677 = temp__5751__auto__;
var res = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__153677,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__153677,(1),null);
var G__153763 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(fragment,cljs.core.count(res));
var G__153764 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,parseInt(value));
fragment = G__153763;
acc = G__153764;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fragment,acc], null);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("l",f)){
var vec__153682 = (function (){var G__153685 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(fragment,(1));
var G__153686 = cljs.core.PersistentVector.EMPTY;
return (repl_tooling.nrepl.bencode.decode_fragment.cljs$core$IFn$_invoke$arity$2 ? repl_tooling.nrepl.bencode.decode_fragment.cljs$core$IFn$_invoke$arity$2(G__153685,G__153686) : repl_tooling.nrepl.bencode.decode_fragment.call(null,G__153685,G__153686));
})();
var rest = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__153682,(0),null);
var inner = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__153682,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("e",cljs.core.first(rest))){
var G__153765 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(rest,(1));
var G__153766 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,inner);
fragment = G__153765;
acc = G__153766;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fragment,acc], null);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("d",f)){
var vec__153702 = (function (){var G__153705 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(fragment,(1));
var G__153706 = cljs.core.PersistentVector.EMPTY;
return (repl_tooling.nrepl.bencode.decode_fragment.cljs$core$IFn$_invoke$arity$2 ? repl_tooling.nrepl.bencode.decode_fragment.cljs$core$IFn$_invoke$arity$2(G__153705,G__153706) : repl_tooling.nrepl.bencode.decode_fragment.call(null,G__153705,G__153706));
})();
var rest = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__153702,(0),null);
var inner = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__153702,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("e",cljs.core.first(rest))){
var G__153767 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(rest,(1));
var G__153768 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inner));
fragment = G__153767;
acc = G__153768;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fragment,acc], null);
}
} else {
if(cljs.core.truth_(cljs.core.re_find(/\d/,f))){
var vec__153708 = cljs.core.re_find(/^(\d+):/,fragment);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__153708,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__153708,(1),null);
var chars = parseInt(c);
var start = (cljs.core.count(c) + (1));
var value = cljs.core.str.cljs$core$IFn$_invoke$arity$1(Buffer.from(fragment).slice(start,(start + chars)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(chars,Buffer.byteLength(value))){
var G__153769 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(fragment,(((value).length) + start));
var G__153770 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,value);
fragment = G__153769;
acc = G__153770;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fragment,acc], null);
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fragment,acc], null);

}
}
}
}
break;
}
});
repl_tooling.nrepl.bencode.old_decoder = (function repl_tooling$nrepl$bencode$old_decoder(){
var state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1("");
return (function (fragment){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.str,fragment);

var vec__153737 = repl_tooling.nrepl.bencode.decode_fragment(cljs.core.deref(state),cljs.core.PersistentVector.EMPTY);
var rest = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__153737,(0),null);
var parsed = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__153737,(1),null);
cljs.core.reset_BANG_(state,rest);

return parsed;
});
});
repl_tooling.nrepl.bencode.remove_chars = (function repl_tooling$nrepl$bencode$remove_chars(state,char_size){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update,new cljs.core.Keyword(null,"buffer","buffer",617295198),cljs.core.subs,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([char_size], 0));
});
repl_tooling.nrepl.bencode.parse_int = (function repl_tooling$nrepl$bencode$parse_int(state,fragment){
var buffer = new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state));
var total = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(fragment),cljs.core.str.cljs$core$IFn$_invoke$arity$1(buffer)].join('');
var vec__153741 = cljs.core.re_find(/(\-?\d*)(e)?/,total);
var res = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__153741,(0),null);
var number = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__153741,(1),null);
var term_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__153741,(2),null);
if(cljs.core.truth_(term_QMARK_)){
repl_tooling.nrepl.bencode.remove_chars(state,cljs.core.count(cljs.core.re_find(/\-?\d*e/,buffer)));

return parseInt(number);
} else {
if(cljs.core.truth_(res)){
repl_tooling.nrepl.bencode.remove_chars(state,cljs.core.count(buffer));

return (function (){
return (repl_tooling.nrepl.bencode.parse_int.cljs$core$IFn$_invoke$arity$2 ? repl_tooling.nrepl.bencode.parse_int.cljs$core$IFn$_invoke$arity$2(state,total) : repl_tooling.nrepl.bencode.parse_int.call(null,state,total));
});
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Error parsing INT",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"string","string",-1989541586),total], null));

}
}
});
/**
 * Extracts string. Accumulates in acc-str, counts how many bytes are accumulated (on
 * acc-bytes), until the total (bytes-expected) is fulfilled
 */
repl_tooling.nrepl.bencode.extract_string = (function repl_tooling$nrepl$bencode$extract_string(state,acc_str,bytes_expected,acc_bytes){
var fragment = new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state));
var cut_frag = shadow.js.shim.module$buffer.Buffer.from(fragment).slice((0),(bytes_expected - acc_bytes));
var curr_bytes = (acc_bytes + cut_frag.length);
var cut_str = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cut_frag);
repl_tooling.nrepl.bencode.remove_chars(state,((cut_str).length));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(curr_bytes,bytes_expected)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(acc_str),cut_str].join('');
} else {
return (function (){
var G__153749 = state;
var G__153750 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(acc_str),cut_str].join('');
var G__153751 = bytes_expected;
var G__153752 = curr_bytes;
return (repl_tooling.nrepl.bencode.extract_string.cljs$core$IFn$_invoke$arity$4 ? repl_tooling.nrepl.bencode.extract_string.cljs$core$IFn$_invoke$arity$4(G__153749,G__153750,G__153751,G__153752) : repl_tooling.nrepl.bencode.extract_string.call(null,G__153749,G__153750,G__153751,G__153752));
});
}
});
repl_tooling.nrepl.bencode.parse_str = (function repl_tooling$nrepl$bencode$parse_str(state,fragment){
var buffer = new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state));
var total = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(fragment),cljs.core.str.cljs$core$IFn$_invoke$arity$1(buffer)].join('');
var vec__153753 = cljs.core.re_find(/^(\d+)(:)?/,total);
var res = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__153753,(0),null);
var number = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__153753,(1),null);
var term_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__153753,(2),null);
repl_tooling.nrepl.bencode.remove_chars(state,cljs.core.count(cljs.core.re_find(/\d*:?/,buffer)));

if(cljs.core.truth_(term_QMARK_)){
return repl_tooling.nrepl.bencode.extract_string(state,"",parseInt(number),(0));
} else {
return (function (){
return (repl_tooling.nrepl.bencode.parse_str.cljs$core$IFn$_invoke$arity$2 ? repl_tooling.nrepl.bencode.parse_str.cljs$core$IFn$_invoke$arity$2(state,total) : repl_tooling.nrepl.bencode.parse_str.call(null,state,total));
});
}
});
repl_tooling.nrepl.bencode.parse_list = (function repl_tooling$nrepl$bencode$parse_list(state,acc){
var inner = (function repl_tooling$nrepl$bencode$parse_list_$_decode_inner(result){
if(cljs.core.fn_QMARK_(result)){
return (function (){
return repl_tooling$nrepl$bencode$parse_list_$_decode_inner((result.cljs$core$IFn$_invoke$arity$0 ? result.cljs$core$IFn$_invoke$arity$0() : result.call(null)));
});
} else {
var G__153756 = state;
var G__153757 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,result);
return (repl_tooling.nrepl.bencode.parse_list.cljs$core$IFn$_invoke$arity$2 ? repl_tooling.nrepl.bencode.parse_list.cljs$core$IFn$_invoke$arity$2(G__153756,G__153757) : repl_tooling.nrepl.bencode.parse_list.call(null,G__153756,G__153757));
}
});
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state))),"e")){
repl_tooling.nrepl.bencode.remove_chars(state,(1));

return acc;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)),"")){
return (function (){
return (repl_tooling.nrepl.bencode.parse_list.cljs$core$IFn$_invoke$arity$2 ? repl_tooling.nrepl.bencode.parse_list.cljs$core$IFn$_invoke$arity$2(state,acc) : repl_tooling.nrepl.bencode.parse_list.call(null,state,acc));
});
} else {
return inner((repl_tooling.nrepl.bencode.decode_one.cljs$core$IFn$_invoke$arity$1 ? repl_tooling.nrepl.bencode.decode_one.cljs$core$IFn$_invoke$arity$1(state) : repl_tooling.nrepl.bencode.decode_one.call(null,state)));

}
}
});
repl_tooling.nrepl.bencode.parse_map = (function repl_tooling$nrepl$bencode$parse_map(state,acc){
var inner = (function repl_tooling$nrepl$bencode$parse_map_$_decode_inner(result){
if(cljs.core.fn_QMARK_(result)){
return (function (){
return repl_tooling$nrepl$bencode$parse_map_$_decode_inner((result.cljs$core$IFn$_invoke$arity$0 ? result.cljs$core$IFn$_invoke$arity$0() : result.call(null)));
});
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,result);
}
});
return inner(repl_tooling.nrepl.bencode.parse_list(state,acc));
});
repl_tooling.nrepl.bencode.remove_chars_and_continue = (function repl_tooling$nrepl$bencode$remove_chars_and_continue(state,char_size,cont){
repl_tooling.nrepl.bencode.remove_chars(state,char_size);

return (cont.cljs$core$IFn$_invoke$arity$1 ? cont.cljs$core$IFn$_invoke$arity$1(state) : cont.call(null,state));
});
repl_tooling.nrepl.bencode.decode_one = (function repl_tooling$nrepl$bencode$decode_one(state){
var fragment = new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state));
var f = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(fragment));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("i",f)){
return repl_tooling.nrepl.bencode.remove_chars_and_continue(state,(1),(function (p1__153758_SHARP_){
return repl_tooling.nrepl.bencode.parse_int(p1__153758_SHARP_,"");
}));
} else {
if(cljs.core.truth_(cljs.core.re_find(/\d/,f))){
return repl_tooling.nrepl.bencode.parse_str(state,"");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("l",f)){
return repl_tooling.nrepl.bencode.remove_chars_and_continue(state,(1),(function (p1__153759_SHARP_){
return repl_tooling.nrepl.bencode.parse_list(p1__153759_SHARP_,cljs.core.PersistentVector.EMPTY);
}));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("d",f)){
return repl_tooling.nrepl.bencode.remove_chars_and_continue(state,(1),(function (p1__153760_SHARP_){
return repl_tooling.nrepl.bencode.parse_map(p1__153760_SHARP_,cljs.core.PersistentVector.EMPTY);
}));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Garbage on parsing bencode",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"string","string",-1989541586),fragment], null));

}
}
}
}
});
repl_tooling.nrepl.bencode.decode_cont = (function repl_tooling$nrepl$bencode$decode_cont(state,acc){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)))){
return acc;
} else {
var cont = new cljs.core.Keyword(null,"cont","cont",-577100214).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state));
var fragment = new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state));
var f = cljs.core.first(fragment);
var res = (cljs.core.truth_(cont)?(cont.cljs$core$IFn$_invoke$arity$0 ? cont.cljs$core$IFn$_invoke$arity$0() : cont.call(null)):repl_tooling.nrepl.bencode.decode_one(state));
if(cljs.core.fn_QMARK_(res)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword(null,"cont","cont",-577100214),res);

return cljs.core.PersistentVector.EMPTY;
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword(null,"cont","cont",-577100214),null);

var G__153779 = state;
var G__153780 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,res);
state = G__153779;
acc = G__153780;
continue;
}
}
break;
}
});
/**
 * Starts a stateful decoder. It will return a function that accepts one parameter
 * (a string) and it'll try to decode it as a BEncode value. It'll return the BEncode
 * structures it finds, or an empty vector if it didn't found anything.
 * 
 * Ex:
 * (let [decode! (decoder)]
 *   (is (= [10] (decode! "i10e")))
 *   (is (= [] (decode! "i1")))
 *   (is (= [10] (decode! "0e"))))
 */
repl_tooling.nrepl.bencode.decoder = (function repl_tooling$nrepl$bencode$decoder(){
var state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"buffer","buffer",617295198),"",new cljs.core.Keyword(null,"cont","cont",-577100214),null], null));
return (function (fragment){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update,new cljs.core.Keyword(null,"buffer","buffer",617295198),cljs.core.str,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fragment], 0));

return repl_tooling.nrepl.bencode.decode_cont(state,cljs.core.PersistentVector.EMPTY);
});
});

//# sourceMappingURL=repl_tooling.nrepl.bencode.js.map
