goog.provide('repl_tooling.repl_client.connection');
repl_tooling.repl_client.connection.emit_line_BANG_ = (function repl_tooling$repl_client$connection$emit_line_BANG_(control,on_line,on_fragment,buffer,frags,last_line){
clearTimeout(new cljs.core.Keyword(null,"timeout-id","timeout-id",-1230045451).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(control)));

var raw_lines = cljs.core.vec(last_line.split(/\r?\n/));
var last_fragment = cljs.core.peek(raw_lines);
var lines = cljs.core.butlast(cljs.core.update.cljs$core$IFn$_invoke$arity$3(raw_lines,(0),(function (p1__153607_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"emitted-frags","emitted-frags",-1174750442).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(control)),frags,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__153607_SHARP_], null)], 0)));
})));
var vec__153609 = lines;
var seq__153610 = cljs.core.seq(vec__153609);
var first__153611 = cljs.core.first(seq__153610);
var seq__153610__$1 = cljs.core.next(seq__153610);
var first_line = first__153611;
var rest_of_lines = seq__153610__$1;
(on_line.cljs$core$IFn$_invoke$arity$1 ? on_line.cljs$core$IFn$_invoke$arity$1(first_line) : on_line.call(null,first_line));

var G__153612_153711 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(frags,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(raw_lines),"\n"], null)));
(on_fragment.cljs$core$IFn$_invoke$arity$1 ? on_fragment.cljs$core$IFn$_invoke$arity$1(G__153612_153711) : on_fragment.call(null,G__153612_153711));

var seq__153613_153712 = cljs.core.seq(rest_of_lines);
var chunk__153614_153713 = null;
var count__153615_153714 = (0);
var i__153616_153715 = (0);
while(true){
if((i__153616_153715 < count__153615_153714)){
var line_153716 = chunk__153614_153713.cljs$core$IIndexed$_nth$arity$2(null,i__153616_153715);
(on_line.cljs$core$IFn$_invoke$arity$1 ? on_line.cljs$core$IFn$_invoke$arity$1(line_153716) : on_line.call(null,line_153716));

var G__153619_153717 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_153716),"\n"].join('');
(on_fragment.cljs$core$IFn$_invoke$arity$1 ? on_fragment.cljs$core$IFn$_invoke$arity$1(G__153619_153717) : on_fragment.call(null,G__153619_153717));


var G__153718 = seq__153613_153712;
var G__153719 = chunk__153614_153713;
var G__153720 = count__153615_153714;
var G__153721 = (i__153616_153715 + (1));
seq__153613_153712 = G__153718;
chunk__153614_153713 = G__153719;
count__153615_153714 = G__153720;
i__153616_153715 = G__153721;
continue;
} else {
var temp__5753__auto___153722 = cljs.core.seq(seq__153613_153712);
if(temp__5753__auto___153722){
var seq__153613_153723__$1 = temp__5753__auto___153722;
if(cljs.core.chunked_seq_QMARK_(seq__153613_153723__$1)){
var c__4649__auto___153724 = cljs.core.chunk_first(seq__153613_153723__$1);
var G__153725 = cljs.core.chunk_rest(seq__153613_153723__$1);
var G__153726 = c__4649__auto___153724;
var G__153727 = cljs.core.count(c__4649__auto___153724);
var G__153728 = (0);
seq__153613_153712 = G__153725;
chunk__153614_153713 = G__153726;
count__153615_153714 = G__153727;
i__153616_153715 = G__153728;
continue;
} else {
var line_153729 = cljs.core.first(seq__153613_153723__$1);
(on_line.cljs$core$IFn$_invoke$arity$1 ? on_line.cljs$core$IFn$_invoke$arity$1(line_153729) : on_line.call(null,line_153729));

var G__153620_153730 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_153729),"\n"].join('');
(on_fragment.cljs$core$IFn$_invoke$arity$1 ? on_fragment.cljs$core$IFn$_invoke$arity$1(G__153620_153730) : on_fragment.call(null,G__153620_153730));


var G__153731 = cljs.core.next(seq__153613_153723__$1);
var G__153732 = null;
var G__153733 = (0);
var G__153734 = (0);
seq__153613_153712 = G__153731;
chunk__153614_153713 = G__153732;
count__153615_153714 = G__153733;
i__153616_153715 = G__153734;
continue;
}
} else {
}
}
break;
}

var temp__5753__auto___153735 = new cljs.core.Keyword(null,"next-line-prom","next-line-prom",-27850347).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(control));
if(cljs.core.truth_(temp__5753__auto___153735)){
var p_153736 = temp__5753__auto___153735;
promesa.core.resolve_BANG_.cljs$core$IFn$_invoke$arity$2(p_153736,first_line);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(control,cljs.core.dissoc,new cljs.core.Keyword(null,"next-line-prom","next-line-prom",-27850347));
} else {
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(buffer,(function (p1__153608_SHARP_){
if(cljs.core.empty_QMARK_(last_fragment)){
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(p1__153608_SHARP_,(1));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(p1__153608_SHARP_,cljs.core.count(frags)),(0),last_fragment);
}
}));
});
repl_tooling.repl_client.connection.schedule_fragment_BANG_ = (function repl_tooling$repl_client$connection$schedule_fragment_BANG_(control,on_fragment,buffer,new_state){
var frags = (function (){var G__153622 = new_state;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.peek(new_state),new cljs.core.Keyword(null,"closed","closed",-919675359))){
return cljs.core.pop(G__153622);
} else {
return G__153622;
}
})();
clearTimeout(new cljs.core.Keyword(null,"timeout-id","timeout-id",-1230045451).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(control)));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(control,cljs.core.assoc,new cljs.core.Keyword(null,"timeout-id","timeout-id",-1230045451),setTimeout((function (){
var G__153623_153740 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,frags);
(on_fragment.cljs$core$IFn$_invoke$arity$1 ? on_fragment.cljs$core$IFn$_invoke$arity$1(G__153623_153740) : on_fragment.call(null,G__153623_153740));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(control,cljs.core.update,new cljs.core.Keyword(null,"emitted-frags","emitted-frags",-1174750442),cljs.core.into,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frags], 0));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(buffer,(function (p1__153621_SHARP_){
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(p1__153621_SHARP_,cljs.core.count(frags));
}));
}),(1000)));
});
repl_tooling.repl_client.connection.treat_new_state = (function repl_tooling$repl_client$connection$treat_new_state(control,buffer,new_state){
var has_newline_QMARK_ = (function (p1__153624_SHARP_){
return cljs.core.re_find(/\r?\n/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__153624_SHARP_));
});
var map__153625 = cljs.core.deref(control);
var map__153625__$1 = cljs.core.__destructure_map(map__153625);
var on_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__153625__$1,new cljs.core.Keyword(null,"on-line","on-line",657365746));
var on_fragment = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__153625__$1,new cljs.core.Keyword(null,"on-fragment","on-fragment",-1898612620));
var vec__153626 = cljs.core.split_with(cljs.core.complement(has_newline_QMARK_),new_state);
var frags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__153626,(0),null);
var vec__153629 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__153626,(1),null);
var last_line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__153629,(0),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"closed","closed",-919675359)], null),new_state)){
cljs.core.remove_watch(buffer,new cljs.core.Keyword(null,"on-add","on-add",-1283372042));

(on_fragment.cljs$core$IFn$_invoke$arity$1 ? on_fragment.cljs$core$IFn$_invoke$arity$1(null) : on_fragment.call(null,null));

return (on_line.cljs$core$IFn$_invoke$arity$1 ? on_line.cljs$core$IFn$_invoke$arity$1(null) : on_line.call(null,null));
} else {
if(cljs.core.truth_(has_newline_QMARK_(last_line))){
return repl_tooling.repl_client.connection.emit_line_BANG_(control,on_line,on_fragment,buffer,frags,last_line);
} else {
if(cljs.core.truth_(cljs.core.not_empty(new_state))){
return repl_tooling.repl_client.connection.schedule_fragment_BANG_(control,on_fragment,buffer,new_state);
} else {
return null;
}
}
}
});
repl_tooling.repl_client.connection.treat_buffer_BANG_ = (function repl_tooling$repl_client$connection$treat_buffer_BANG_(buffer,on_line,on_fragment){
var control = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"emitted-frags","emitted-frags",-1174750442),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"on-line","on-line",657365746),on_line,new cljs.core.Keyword(null,"on-fragment","on-fragment",-1898612620),on_fragment], null));
cljs.core.add_watch(buffer,new cljs.core.Keyword(null,"on-add","on-add",-1283372042),(function (p1__153633_SHARP_,p2__153634_SHARP_,p3__153635_SHARP_,p4__153632_SHARP_){
return repl_tooling.repl_client.connection.treat_new_state(control,buffer,p4__153632_SHARP_);
}));

return control;
});
repl_tooling.repl_client.connection.next_line = (function repl_tooling$repl_client$connection$next_line(control){
var p = promesa.core.deferred();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(control,cljs.core.assoc,new cljs.core.Keyword(null,"next-line-prom","next-line-prom",-27850347),p);

return p;
});
repl_tooling.repl_client.connection.calculate_match = (function repl_tooling$repl_client$connection$calculate_match(output,control){
while(true){
var temp__5753__auto__ = cljs.core.first(new cljs.core.Keyword(null,"ignore-output","ignore-output",-1884856211).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(control)));
if(cljs.core.truth_(temp__5753__auto__)){
var re = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(control,cljs.core.update,new cljs.core.Keyword(null,"ignore-output","ignore-output",-1884856211),cljs.core.rest);

var temp__5751__auto__ = cljs.core.re_find(re,output);
if(cljs.core.truth_(temp__5751__auto__)){
var match = temp__5751__auto__;
return match;
} else {
var G__153745 = output;
var G__153746 = control;
output = G__153745;
control = G__153746;
continue;
}
} else {
return null;
}
break;
}
});
repl_tooling.repl_client.connection.send_output = (function repl_tooling$repl_client$connection$send_output(output,control,on_output){
if(cljs.core.truth_(cljs.core.not_empty(output))){
var temp__5751__auto__ = repl_tooling.repl_client.connection.calculate_match(output,control);
if(cljs.core.truth_(temp__5751__auto__)){
var match = temp__5751__auto__;
var new_output = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(output,cljs.core.count(match));
return (repl_tooling.repl_client.connection.send_output.cljs$core$IFn$_invoke$arity$3 ? repl_tooling.repl_client.connection.send_output.cljs$core$IFn$_invoke$arity$3(new_output,control,on_output) : repl_tooling.repl_client.connection.send_output.call(null,new_output,control,on_output));
} else {
return (on_output.cljs$core$IFn$_invoke$arity$1 ? on_output.cljs$core$IFn$_invoke$arity$1(output) : on_output.call(null,output));
}
} else {
return null;
}
});
repl_tooling.repl_client.connection.parse_edn_string = (function repl_tooling$repl_client$connection$parse_edn_string(output,control){
try{return cljs.core.str.cljs$core$IFn$_invoke$arity$1(rewrite_clj.parser.parse_string(output));
}catch (e153636){var ex = e153636;
if(cljs.core.truth_(cljs.core.re_find(/^Unexpected EOF/,ex.message))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(control,cljs.core.assoc,new cljs.core.Keyword(null,"incomplete-result","incomplete-result",544115868),output);

return "[nil :ignore]";
} else {
return null;
}
}});
repl_tooling.repl_client.connection.send_result = (function repl_tooling$repl_client$connection$send_result(output,control,on_output,on_result){
var edn_str = repl_tooling.repl_client.connection.parse_edn_string(output,control);
var vec__153638 = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(edn_str);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__153638,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__153638,(1),null);
var res = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__153638,(2),null);
var exist_QMARK_ = new cljs.core.Keyword(null,"pending-evals","pending-evals",1249255957).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(control));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ignore","ignore",-1631542033),id)){
return null;
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(control,cljs.core.dissoc,new cljs.core.Keyword(null,"incomplete-result","incomplete-result",544115868));

if(cljs.core.truth_((exist_QMARK_.cljs$core$IFn$_invoke$arity$1 ? exist_QMARK_.cljs$core$IFn$_invoke$arity$1(id) : exist_QMARK_.call(null,id)))){
var edn_size = cljs.core.count(edn_str);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(control,cljs.core.update,new cljs.core.Keyword(null,"pending-evals","pending-evals",1249255957),cljs.core.disj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"ignore-prompt","ignore-prompt",-1001404739).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(control)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(control,cljs.core.update,new cljs.core.Keyword(null,"ignore-output","ignore-output",-1884856211),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([/^\r?\n?.*?=> /,/\r?\n/], 0));
} else {
}

var G__153642_153748 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,res], null);
(on_result.cljs$core$IFn$_invoke$arity$1 ? on_result.cljs$core$IFn$_invoke$arity$1(G__153642_153748) : on_result.call(null,G__153642_153748));

return repl_tooling.repl_client.connection.send_output(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(output,edn_size),control,on_output);
} else {
return repl_tooling.repl_client.connection.send_output(output,control,on_output);
}
}
});
repl_tooling.repl_client.connection.treat_output = (function repl_tooling$repl_client$connection$treat_output(output,control,on_output,on_result){
if(cljs.core.truth_(output)){
var new_output = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"incomplete-result","incomplete-result",544115868).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(control))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output)].join('');
var idx = (function (){var G__153650 = /\[tooling\$eval-res/;
var G__153650__$1 = (((G__153650 == null))?null:G__153650.exec(new_output));
if((G__153650__$1 == null)){
return null;
} else {
return G__153650__$1.index;
}
})();
var G__153655 = idx;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__153655)){
return repl_tooling.repl_client.connection.send_output(new_output,control,on_output);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),G__153655)){
return repl_tooling.repl_client.connection.send_result(new_output,control,on_output,on_result);
} else {
repl_tooling.repl_client.connection.send_output(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(new_output,(0),idx),control,on_output);

return repl_tooling.repl_client.connection.send_result(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new_output,idx),control,on_output,on_result);

}
}
} else {
return (on_output.cljs$core$IFn$_invoke$arity$1 ? on_output.cljs$core$IFn$_invoke$arity$1(null) : on_output.call(null,null));
}
});
repl_tooling.repl_client.connection.prepare_evals = (function repl_tooling$repl_client$connection$prepare_evals(control,on_output,on_result){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(control,cljs.core.assoc,new cljs.core.Keyword(null,"pending-evals","pending-evals",1249255957),cljs.core.PersistentHashSet.EMPTY,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-fragment","on-fragment",-1898612620),(function (p1__153671_SHARP_){
return repl_tooling.repl_client.connection.treat_output(p1__153671_SHARP_,control,on_output,on_result);
})], 0));
});
repl_tooling.repl_client.connection.connect_BANG_ = (function repl_tooling$repl_client$connection$connect_BANG_(host,port){
return (new Promise((function (resolve,fail){
var buffer = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
var conn = shadow.js.shim.module$net.createConnection(port,host);
conn.on("connect",(function (){
var G__153676 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"buffer","buffer",617295198),buffer,new cljs.core.Keyword(null,"conn","conn",278309663),conn], null);
return (resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(G__153676) : resolve.call(null,G__153676));
}));

conn.on("data",(function (p1__153672_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(buffer,cljs.core.conj,cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__153672_SHARP_));
}));

conn.on("error",(function (p1__153673_SHARP_){
var G__153681 = p1__153673_SHARP_.errno;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(G__153681) : fail.call(null,G__153681));
}));

return conn.on("close",(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(buffer,cljs.core.conj,new cljs.core.Keyword(null,"closed","closed",-919675359));
}));
})));
});

//# sourceMappingURL=repl_tooling.repl_client.connection.js.map
