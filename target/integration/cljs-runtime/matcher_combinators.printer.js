goog.provide('matcher_combinators.printer');

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
matcher_combinators.printer.ColorTag = (function (color,expression,__meta,__extmap,__hash){
this.color = color;
this.expression = expression;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(matcher_combinators.printer.ColorTag.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(matcher_combinators.printer.ColorTag.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k52605,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__52614 = k52605;
var G__52614__$1 = (((G__52614 instanceof cljs.core.Keyword))?G__52614.fqn:null);
switch (G__52614__$1) {
case "color":
return self__.color;

break;
case "expression":
return self__.expression;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k52605,else__4475__auto__);

}
}));

(matcher_combinators.printer.ColorTag.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__52615){
var vec__52616 = p__52615;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52616,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52616,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(matcher_combinators.printer.ColorTag.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#matcher-combinators.printer.ColorTag{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"color","color",1011675173),self__.color],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"expression","expression",202311876),self__.expression],null))], null),self__.__extmap));
}));

(matcher_combinators.printer.ColorTag.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__52604){
var self__ = this;
var G__52604__$1 = this;
return (new cljs.core.RecordIter((0),G__52604__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"expression","expression",202311876)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(matcher_combinators.printer.ColorTag.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(matcher_combinators.printer.ColorTag.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new matcher_combinators.printer.ColorTag(self__.color,self__.expression,self__.__meta,self__.__extmap,self__.__hash));
}));

(matcher_combinators.printer.ColorTag.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(matcher_combinators.printer.ColorTag.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (coll__4469__auto__){
return (-689793432 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
})(this__4468__auto____$1);
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(matcher_combinators.printer.ColorTag.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this52607,other52608){
var self__ = this;
var this52607__$1 = this;
return (((!((other52608 == null)))) && ((((this52607__$1.constructor === other52608.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52607__$1.color,other52608.color)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52607__$1.expression,other52608.expression)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52607__$1.__extmap,other52608.__extmap)))))))));
}));

(matcher_combinators.printer.ColorTag.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"expression","expression",202311876),null,new cljs.core.Keyword(null,"color","color",1011675173),null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new matcher_combinators.printer.ColorTag(self__.color,self__.expression,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(matcher_combinators.printer.ColorTag.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k52605){
var self__ = this;
var this__4479__auto____$1 = this;
var G__52622 = k52605;
var G__52622__$1 = (((G__52622 instanceof cljs.core.Keyword))?G__52622.fqn:null);
switch (G__52622__$1) {
case "color":
case "expression":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k52605);

}
}));

(matcher_combinators.printer.ColorTag.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__52604){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__52623 = cljs.core.keyword_identical_QMARK_;
var expr__52624 = k__4481__auto__;
if(cljs.core.truth_((pred__52623.cljs$core$IFn$_invoke$arity$2 ? pred__52623.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"color","color",1011675173),expr__52624) : pred__52623.call(null,new cljs.core.Keyword(null,"color","color",1011675173),expr__52624)))){
return (new matcher_combinators.printer.ColorTag(G__52604,self__.expression,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__52623.cljs$core$IFn$_invoke$arity$2 ? pred__52623.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expression","expression",202311876),expr__52624) : pred__52623.call(null,new cljs.core.Keyword(null,"expression","expression",202311876),expr__52624)))){
return (new matcher_combinators.printer.ColorTag(self__.color,G__52604,self__.__meta,self__.__extmap,null));
} else {
return (new matcher_combinators.printer.ColorTag(self__.color,self__.expression,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__52604),null));
}
}
}));

(matcher_combinators.printer.ColorTag.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"color","color",1011675173),self__.color,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"expression","expression",202311876),self__.expression,null))], null),self__.__extmap));
}));

(matcher_combinators.printer.ColorTag.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__52604){
var self__ = this;
var this__4471__auto____$1 = this;
return (new matcher_combinators.printer.ColorTag(self__.color,self__.expression,G__52604,self__.__extmap,self__.__hash));
}));

(matcher_combinators.printer.ColorTag.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4478__auto__,(0)),cljs.core._nth(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(matcher_combinators.printer.ColorTag.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"color","color",-1642760596,null),new cljs.core.Symbol(null,"expression","expression",1842843403,null)], null);
}));

(matcher_combinators.printer.ColorTag.cljs$lang$type = true);

(matcher_combinators.printer.ColorTag.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"matcher-combinators.printer/ColorTag",null,(1),null));
}));

(matcher_combinators.printer.ColorTag.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"matcher-combinators.printer/ColorTag");
}));

/**
 * Positional factory function for matcher-combinators.printer/ColorTag.
 */
matcher_combinators.printer.__GT_ColorTag = (function matcher_combinators$printer$__GT_ColorTag(color,expression){
return (new matcher_combinators.printer.ColorTag(color,expression,null,null,null));
});

/**
 * Factory function for matcher-combinators.printer/ColorTag, taking a map of keywords to field values.
 */
matcher_combinators.printer.map__GT_ColorTag = (function matcher_combinators$printer$map__GT_ColorTag(G__52609){
var extmap__4512__auto__ = (function (){var G__52632 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__52609,new cljs.core.Keyword(null,"color","color",1011675173),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"expression","expression",202311876)], 0));
if(cljs.core.record_QMARK_(G__52609)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__52632);
} else {
return G__52632;
}
})();
return (new matcher_combinators.printer.ColorTag(new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(G__52609),new cljs.core.Keyword(null,"expression","expression",202311876).cljs$core$IFn$_invoke$arity$1(G__52609),null,cljs.core.not_empty(extmap__4512__auto__),null));
});

if((typeof matcher_combinators !== 'undefined') && (typeof matcher_combinators.printer !== 'undefined') && (typeof matcher_combinators.printer.markup_expression !== 'undefined')){
} else {
matcher_combinators.printer.markup_expression = (function (){var method_table__4712__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4713__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4714__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4715__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4716__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__52634 = cljs.core.get_global_hierarchy;
return (fexpr__52634.cljs$core$IFn$_invoke$arity$0 ? fexpr__52634.cljs$core$IFn$_invoke$arity$0() : fexpr__52634.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("matcher-combinators.printer","markup-expression"),cljs.core.type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4716__auto__,method_table__4712__auto__,prefer_table__4713__auto__,method_cache__4714__auto__,cached_hierarchy__4715__auto__));
})();
}
matcher_combinators.printer.markup_expression.cljs$core$IMultiFn$_add_method$arity$3(null,matcher_combinators.model.Mismatch,(function (p__52639){
var map__52640 = p__52639;
var map__52640__$1 = cljs.core.__destructure_map(map__52640);
var expected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52640__$1,new cljs.core.Keyword(null,"expected","expected",1583670997));
var actual = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52640__$1,new cljs.core.Keyword(null,"actual","actual",107306363));
return (new cljs.core.List(null,new cljs.core.Symbol(null,"mismatch","mismatch",1743845144,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expected","expected",-1070764772,null),(new cljs.core.List(null,matcher_combinators.printer.__GT_ColorTag(new cljs.core.Keyword(null,"yellow","yellow",-881035449),expected),null,(1),null)),(2),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"actual","actual",1747837890,null),(new cljs.core.List(null,matcher_combinators.printer.__GT_ColorTag(new cljs.core.Keyword(null,"red","red",-969428204),actual),null,(1),null)),(2),null)),null,(1),null)),(2),null)),(3),null));
}));
matcher_combinators.printer.markup_expression.cljs$core$IMultiFn$_add_method$arity$3(null,matcher_combinators.model.ExpectedMismatch,(function (p__52641){
var map__52642 = p__52641;
var map__52642__$1 = cljs.core.__destructure_map(map__52642);
var actual = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52642__$1,new cljs.core.Keyword(null,"actual","actual",107306363));
var expected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52642__$1,new cljs.core.Keyword(null,"expected","expected",1583670997));
return (new cljs.core.List(null,new cljs.core.Symbol(null,"mismatch","mismatch",1743845144,null),(new cljs.core.List(null,matcher_combinators.printer.__GT_ColorTag(new cljs.core.Keyword(null,"yellow","yellow",-881035449),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1("expected mismatch from: ")),(new cljs.core.List(null,matcher_combinators.printer.__GT_ColorTag(new cljs.core.Keyword(null,"yellow","yellow",-881035449),expected),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"actual","actual",1747837890,null),(new cljs.core.List(null,matcher_combinators.printer.__GT_ColorTag(new cljs.core.Keyword(null,"red","red",-969428204),actual),null,(1),null)),(2),null)),null,(1),null)),(2),null)),(3),null)),(4),null));
}));
matcher_combinators.printer.markup_expression.cljs$core$IMultiFn$_add_method$arity$3(null,matcher_combinators.model.Missing,(function (missing){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"missing","missing",2003039296,null),(new cljs.core.List(null,matcher_combinators.printer.__GT_ColorTag(new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.Keyword(null,"expected","expected",1583670997).cljs$core$IFn$_invoke$arity$1(missing)),null,(1),null)),(2),null));
}));
matcher_combinators.printer.markup_expression.cljs$core$IMultiFn$_add_method$arity$3(null,matcher_combinators.model.Unexpected,(function (unexpected){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"unexpected","unexpected",502779103,null),(new cljs.core.List(null,matcher_combinators.printer.__GT_ColorTag(new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.Keyword(null,"actual","actual",107306363).cljs$core$IFn$_invoke$arity$1(unexpected)),null,(1),null)),(2),null));
}));
matcher_combinators.printer.markup_expression.cljs$core$IMultiFn$_add_method$arity$3(null,matcher_combinators.model.TypeMismatch,(function (p__52643){
var map__52644 = p__52643;
var map__52644__$1 = cljs.core.__destructure_map(map__52644);
var actual = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52644__$1,new cljs.core.Keyword(null,"actual","actual",107306363));
var expected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52644__$1,new cljs.core.Keyword(null,"expected","expected",1583670997));
return (new cljs.core.List(null,new cljs.core.Symbol(null,"mismatch","mismatch",1743845144,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expected","expected",-1070764772,null),(new cljs.core.List(null,matcher_combinators.printer.__GT_ColorTag(new cljs.core.Keyword(null,"yellow","yellow",-881035449),cljs.core.type(expected)),null,(1),null)),(2),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"actual","actual",1747837890,null),(new cljs.core.List(null,matcher_combinators.printer.__GT_ColorTag(new cljs.core.Keyword(null,"red","red",-969428204),cljs.core.type(actual)),null,(1),null)),(2),null)),null,(1),null)),(2),null)),(3),null));
}));
matcher_combinators.printer.markup_expression.cljs$core$IMultiFn$_add_method$arity$3(null,matcher_combinators.model.InvalidMatcherType,(function (invalid_type){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"invalid-matcher-input","invalid-matcher-input",-1293906063,null),(new cljs.core.List(null,matcher_combinators.printer.__GT_ColorTag(new cljs.core.Keyword(null,"yellow","yellow",-881035449),new cljs.core.Keyword(null,"expected-type-msg","expected-type-msg",-1708159764).cljs$core$IFn$_invoke$arity$1(invalid_type)),(new cljs.core.List(null,matcher_combinators.printer.__GT_ColorTag(new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.Keyword(null,"provided","provided",-1493091365).cljs$core$IFn$_invoke$arity$1(invalid_type)),null,(1),null)),(2),null)),(3),null));
}));
matcher_combinators.printer.markup_expression.cljs$core$IMultiFn$_add_method$arity$3(null,matcher_combinators.model.InvalidMatcherContext,(function (invalid_context){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"invalid-matcher-context","invalid-matcher-context",-874287958,null),(new cljs.core.List(null,matcher_combinators.printer.__GT_ColorTag(new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(invalid_context)),null,(1),null)),(2),null));
}));
matcher_combinators.printer.markup_expression.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (expression){
return expression;
}));
matcher_combinators.printer.colorized_print = (function matcher_combinators$printer$colorized_print(p__52645){
var map__52646 = p__52645;
var map__52646__$1 = cljs.core.__destructure_map(map__52646);
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52646__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var expression = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52646__$1,new cljs.core.Keyword(null,"expression","expression",202311876));
if(cljs.core.truth_(color)){
return cljs.pprint.write_out(matcher_combinators.ansi_color.style.cljs$core$IFn$_invoke$arity$variadic(expression,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([color], 0)));
} else {
return cljs.pprint.write_out(expression);
}
});
matcher_combinators.printer.print_diff_dispatch = (function matcher_combinators$printer$print_diff_dispatch(expression){
var markup = matcher_combinators.printer.markup_expression.cljs$core$IFn$_invoke$arity$1(expression);
if((markup instanceof matcher_combinators.printer.ColorTag)){
return matcher_combinators.printer.colorized_print(markup);
} else {
return cljs.pprint.simple_dispatch.cljs$core$IFn$_invoke$arity$1(markup);
}
});
matcher_combinators.printer.pretty_print = (function matcher_combinators$printer$pretty_print(expr){
var _STAR_print_pprint_dispatch_STAR__orig_val__52648 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
var _STAR_print_pprint_dispatch_STAR__temp_val__52649 = matcher_combinators.printer.print_diff_dispatch;
(cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR__temp_val__52649);

try{return cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(expr);
}finally {(cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR__orig_val__52648);
}});
matcher_combinators.printer.as_string = (function matcher_combinators$printer$as_string(value){
var sb__4760__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__52653_52680 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__52654_52681 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__52655_52682 = true;
var _STAR_print_fn_STAR__temp_val__52656_52683 = (function (x__4761__auto__){
return sb__4760__auto__.append(x__4761__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__52655_52682);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__52656_52683);

try{matcher_combinators.printer.pretty_print(value);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__52654_52681);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__52653_52680);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4760__auto__);
});

//# sourceMappingURL=matcher_combinators.printer.js.map
