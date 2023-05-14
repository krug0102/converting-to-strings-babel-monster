goog.provide('duck_repled.editor_helpers');
duck_repled.editor_helpers.simple_read = (function duck_repled$editor_helpers$simple_read(str){
return cljs.tools.reader.read_string.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"default","default",-1987822328),(function (_,res){
return res;
}),new cljs.core.Keyword(null,"read-cond","read-cond",1056899244),new cljs.core.Keyword(null,"allow","allow",-1857325745)], null),str);
});
duck_repled.editor_helpers.parse_reader = (function duck_repled$editor_helpers$parse_reader(reader){
try{var parsed = rewrite_clj.parser.parse(reader);
if(cljs.core.truth_(parsed)){
if(rewrite_clj.node.whitespace_or_comment_QMARK_(parsed)){
return new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483);
} else {
if((parsed instanceof rewrite_clj.node.uneval.UnevalNode)){
return cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(rewrite_clj.node.whitespace_or_comment_QMARK_,parsed.children));
} else {
return parsed;

}
}
} else {
return null;
}
}catch (e152359){var _ = e152359;
cljs.tools.reader.reader_types.read_char(reader);

return new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483);
}});
duck_repled.editor_helpers.top_blocks = (function duck_repled$editor_helpers$top_blocks(code){
var reader = cljs.tools.reader.reader_types.indexing_push_back_reader.cljs$core$IFn$_invoke$arity$1(code);
var sofar = cljs.core.PersistentVector.EMPTY;
while(true){
var parsed = duck_repled.editor_helpers.parse_reader(reader);
var G__152366 = parsed;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483),G__152366)){
var G__152474 = sofar;
sofar = G__152474;
continue;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__152366)){
return sofar;
} else {
var as_str = rewrite_clj.node.string(parsed);
var map__152367 = cljs.core.meta(parsed);
var map__152367__$1 = cljs.core.__destructure_map(map__152367);
var row = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__152367__$1,new cljs.core.Keyword(null,"row","row",-570139521));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__152367__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var end_row = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__152367__$1,new cljs.core.Keyword(null,"end-row","end-row",-545103581));
var end_col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__152367__$1,new cljs.core.Keyword(null,"end-col","end-col",-724155879));
var G__152475 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sofar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(row - (1)),(col - (1))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(end_row - (1)),(end_col - (2))], null)], null),as_str], null));
sofar = G__152475;
continue;

}
}
break;
}
});
/**
 * Gets the current NS range (and ns name) for the current code, considering
 * that the cursor is in row and col (0-based)
 */
duck_repled.editor_helpers.ns_range_for = (function duck_repled$editor_helpers$ns_range_for(top_levels,p__152373){
var vec__152374 = p__152373;
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__152374,(0),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__152374,(1),null);
var before_selection_QMARK_ = (function (p__152377){
var vec__152378 = p__152377;
var vec__152381 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__152378,(0),null);
var vec__152384 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__152381,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__152384,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__152384,(1),null);
var vec__152387 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__152381,(1),null);
var erow = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__152387,(0),null);
var ecol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__152387,(1),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__152378,(1),null);
return ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(erow,row)) && ((col <= ecol)))) || ((erow < row)));
});
var is_ns_QMARK_ = (function (p1__152368_SHARP_){
var and__4221__auto__ = cljs.core.list_QMARK_(p1__152368_SHARP_);
if(and__4221__auto__){
var G__152391 = p1__152368_SHARP_;
var G__152391__$1 = (((G__152391 == null))?null:cljs.core.first(G__152391));
if((G__152391__$1 == null)){
return null;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(G__152391__$1,new cljs.core.Symbol(null,"ns","ns",2082130287,null));
}
} else {
return and__4221__auto__;
}
});
var read = cljs.core.memoize((function (p1__152369_SHARP_){
try{return duck_repled.editor_helpers.simple_read(p1__152369_SHARP_);
}catch (e152392){var _ = e152392;
return null;
}}));
var find_ns_for = (function (top_blocks){
return cljs.core.first(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__152372_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__152372_SHARP_,(1),cljs.core.second);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__152371_SHARP_){
return is_ns_QMARK_(cljs.core.peek(p1__152371_SHARP_));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__152370_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__152370_SHARP_,(1),read);
}),top_blocks))));
});
var or__4223__auto__ = find_ns_for(cljs.core.reverse(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(before_selection_QMARK_,top_levels)));
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return find_ns_for(cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(before_selection_QMARK_,top_levels));
}
});
duck_repled.editor_helpers.current_var_STAR_ = (function duck_repled$editor_helpers$current_var_STAR_(zipped,row,col){
var node = rewrite_clj.zip.node(rewrite_clj.zip.find_last_by_pos.cljs$core$IFn$_invoke$arity$2(zipped,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"row","row",-570139521),(row + (1)),new cljs.core.Keyword(null,"col","col",-1959363084),(col + (1))], null)));
if(cljs.core.truth_((function (){var and__4221__auto__ = node;
if(cljs.core.truth_(and__4221__auto__)){
return (!(rewrite_clj.node.whitespace_or_comment_QMARK_(node)));
} else {
return and__4221__auto__;
}
})())){
var map__152401 = cljs.core.meta(node);
var map__152401__$1 = cljs.core.__destructure_map(map__152401);
var row__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__152401__$1,new cljs.core.Keyword(null,"row","row",-570139521));
var col__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__152401__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var end_row = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__152401__$1,new cljs.core.Keyword(null,"end-row","end-row",-545103581));
var end_col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__152401__$1,new cljs.core.Keyword(null,"end-col","end-col",-724155879));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(row__$1 - (1)),(col__$1 - (1))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(end_row - (1)),(end_col - (2))], null)], null),rewrite_clj.node.string(node)], null);
} else {
return null;
}
});
duck_repled.editor_helpers.zip_from_code = (function duck_repled$editor_helpers$zip_from_code(code){
var reader = cljs.tools.reader.reader_types.indexing_push_back_reader.cljs$core$IFn$_invoke$arity$1(code);
var nodes = cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1((function (){
try{return rewrite_clj.parser.parse(reader);
}catch (e152406){var _ = e152406;
cljs.tools.reader.reader_types.read_char(reader);

return rewrite_clj.node.whitespace_node(" ");
}}))));
var all_nodes = cljs.core.with_meta(rewrite_clj.node.forms_node(nodes),cljs.core.meta(cljs.core.first(nodes)));
return rewrite_clj.zip.base.edn.cljs$core$IFn$_invoke$arity$2(all_nodes,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"track-position?","track-position?",1860535489),true], null));
});
duck_repled.editor_helpers.current_var = (function duck_repled$editor_helpers$current_var(code,p__152407){
var vec__152408 = p__152407;
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__152408,(0),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__152408,(1),null);
var zipped = duck_repled.editor_helpers.zip_from_code(code);
var or__4223__auto__ = duck_repled.editor_helpers.current_var_STAR_(zipped,row,col);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return duck_repled.editor_helpers.current_var_STAR_(zipped,row,(col - (1)));
}
});
duck_repled.editor_helpers.in_range_QMARK_ = (function duck_repled$editor_helpers$in_range_QMARK_(p__152411,p__152412){
var map__152413 = p__152411;
var map__152413__$1 = cljs.core.__destructure_map(map__152413);
var row = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__152413__$1,new cljs.core.Keyword(null,"row","row",-570139521));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__152413__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var end_row = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__152413__$1,new cljs.core.Keyword(null,"end-row","end-row",-545103581));
var end_col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__152413__$1,new cljs.core.Keyword(null,"end-col","end-col",-724155879));
var map__152414 = p__152412;
var map__152414__$1 = cljs.core.__destructure_map(map__152414);
var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__152414__$1,new cljs.core.Keyword(null,"row","row",-570139521));
var c = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__152414__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var and__4221__auto__ = (r >= row);
if(and__4221__auto__){
var and__4221__auto____$1 = (r <= end_row);
if(and__4221__auto____$1){
var and__4221__auto____$2 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(r,row))?(c >= col):true);
if(and__4221__auto____$2){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(r,end_row)){
return (c <= end_col);
} else {
return true;
}
} else {
return and__4221__auto____$2;
}
} else {
return and__4221__auto____$1;
}
} else {
return and__4221__auto__;
}
});
/**
 * Gets the top-level from the code (a string) to the current row and col (0-based)
 */
duck_repled.editor_helpers.top_block_for = (function duck_repled$editor_helpers$top_block_for(tops,p__152415){
var vec__152416 = p__152415;
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__152416,(0),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__152416,(1),null);
var in_range_QMARK_ = (function (p__152420){
var vec__152421 = p__152420;
var vec__152424 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__152421,(0),null);
var vec__152427 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__152424,(0),null);
var b_row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__152427,(0),null);
var b_col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__152427,(1),null);
var vec__152430 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__152424,(1),null);
var e_row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__152430,(0),null);
var e_col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__152430,(1),null);
return (((((b_row <= row)) && ((row < e_row)))) || ((((((b_row <= row)) && ((row <= e_row)))) && ((((((b_col <= col)) && ((col <= e_col)))) || ((((b_col <= (col - (1)))) && (((col - (1)) <= e_col)))))))));
});
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(in_range_QMARK_,tops));
});
/**
 * Find last node (if more than one node) that is in range of pos and
 *   satisfying the given predicate depth first from initial zipper
 *   location.
 */
duck_repled.editor_helpers.find_inners_by_pos = (function duck_repled$editor_helpers$find_inners_by_pos(zloc,pos){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__152436_SHARP_){
return duck_repled.editor_helpers.in_range_QMARK_(cljs.core.meta(rewrite_clj.zip.node(p1__152436_SHARP_)),pos);
}),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(rewrite_clj.zip.move.end_QMARK_),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.iterate(rewrite_clj.zip.next,zloc))));
});
duck_repled.editor_helpers.reader_tag_QMARK_ = (function duck_repled$editor_helpers$reader_tag_QMARK_(node){
if(cljs.core.truth_(node)){
return (((node instanceof rewrite_clj.node.reader_macro.ReaderMacroNode)) || ((((node instanceof rewrite_clj.node.fn.FnNode)) || ((((node instanceof rewrite_clj.node.quote.QuoteNode)) || ((node instanceof rewrite_clj.node.reader_macro.DerefNode)))))));
} else {
return null;
}
});
duck_repled.editor_helpers.filter_forms = (function duck_repled$editor_helpers$filter_forms(nodes){
if(cljs.core.truth_(nodes)){
var valid_tag_QMARK_ = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"vector","vector",1902966158),null,new cljs.core.Keyword(null,"list","list",765357683),null,new cljs.core.Keyword(null,"quote","quote",-262615245),null,new cljs.core.Keyword(null,"set","set",304602554),null,new cljs.core.Keyword(null,"map","map",1371690461),null], null), null),new cljs.core.Keyword(null,"tag","tag",-1290361223));
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__152438){
var vec__152439 = p__152438;
var fst = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__152439,(0),null);
var snd = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__152439,(1),null);
if(cljs.core.truth_(duck_repled.editor_helpers.reader_tag_QMARK_(fst))){
return fst;
} else {
if(cljs.core.truth_((function (){var and__4221__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(fst),new cljs.core.Keyword(null,"list","list",765357683));
if(and__4221__auto__){
var and__4221__auto____$1 = snd;
if(cljs.core.truth_(and__4221__auto____$1)){
return duck_repled.editor_helpers.reader_tag_QMARK_(snd);
} else {
return and__4221__auto____$1;
}
} else {
return and__4221__auto__;
}
})())){
return snd;
} else {
if(cljs.core.truth_(valid_tag_QMARK_(fst))){
return fst;
} else {
return null;
}
}
}
}),cljs.core.partition_all.cljs$core$IFn$_invoke$arity$3((2),(1),cljs.core.map.cljs$core$IFn$_invoke$arity$2(rewrite_clj.zip.node,nodes)))));
} else {
return null;
}
});
/**
 * Gets the current block from the code (a string) to the current row and col (0-based)
 */
duck_repled.editor_helpers.block_for = (function duck_repled$editor_helpers$block_for(code,p__152446){
var vec__152451 = p__152446;
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__152451,(0),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__152451,(1),null);
var node_block = duck_repled.editor_helpers.filter_forms(cljs.core.reverse(duck_repled.editor_helpers.find_inners_by_pos(duck_repled.editor_helpers.zip_from_code(code),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"row","row",-570139521),(row + (1)),new cljs.core.Keyword(null,"col","col",-1959363084),(col + (1))], null))));
var map__152454 = (function (){var G__152456 = node_block;
if((G__152456 == null)){
return null;
} else {
return cljs.core.meta(G__152456);
}
})();
var map__152454__$1 = cljs.core.__destructure_map(map__152454);
var row__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__152454__$1,new cljs.core.Keyword(null,"row","row",-570139521));
var col__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__152454__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var end_row = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__152454__$1,new cljs.core.Keyword(null,"end-row","end-row",-545103581));
var end_col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__152454__$1,new cljs.core.Keyword(null,"end-col","end-col",-724155879));
if(cljs.core.truth_(node_block)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(row__$1 - (1)),(col__$1 - (1))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(end_row - (1)),(end_col - (2))], null)], null),rewrite_clj.node.string(node_block)], null);
} else {
return null;
}
});
duck_repled.editor_helpers.text_in_range = (function duck_repled$editor_helpers$text_in_range(text,p__152460){
var vec__152461 = p__152460;
var vec__152464 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__152461,(0),null);
var row1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__152464,(0),null);
var col1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__152464,(1),null);
var vec__152467 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__152461,(1),null);
var row2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__152467,(0),null);
var col2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__152467,(1),null);
var lines = clojure.string.split_lines(text);
var rows_offset = ((function (){var x__4309__auto__ = row2;
var y__4310__auto__ = cljs.core.count(lines);
return ((x__4309__auto__ < y__4310__auto__) ? x__4309__auto__ : y__4310__auto__);
})() - row1);
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(lines,row1,(function (){var x__4309__auto__ = cljs.core.count(lines);
var y__4310__auto__ = (row2 + (1));
return ((x__4309__auto__ < y__4310__auto__) ? x__4309__auto__ : y__4310__auto__);
})()),(0),(function (p1__152457_SHARP_){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("",cljs.core.drop.cljs$core$IFn$_invoke$arity$2(col1,p1__152457_SHARP_));
})),rows_offset,(function (p1__152458_SHARP_){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("",cljs.core.take.cljs$core$IFn$_invoke$arity$2(((((rows_offset === (0)))?(col2 - col1):col2) + (1)),p1__152458_SHARP_));
})));
});
duck_repled.editor_helpers.read_file = (function duck_repled$editor_helpers$read_file(filename){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.js.shim.module$fs.readFileSync(filename));
});

//# sourceMappingURL=duck_repled.editor_helpers.js.map
