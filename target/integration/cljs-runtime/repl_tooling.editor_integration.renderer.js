goog.provide('repl_tooling.editor_integration.renderer');
repl_tooling.editor_integration.renderer.parse_inner_root = (function repl_tooling$editor_integration$renderer$parse_inner_root(objs,more_fn,a_for_more){
var inner = (function (){var G__143065 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__143042_SHARP_){
return repl_tooling.editor_integration.renderer.protocols.as_html(cljs.core.deref(p1__143042_SHARP_),p1__143042_SHARP_,false);
}),objs);
if(cljs.core.truth_(more_fn)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__143065,a_for_more);
} else {
return G__143065;
}
})();
return cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__143044_SHARP_,p2__143043_SHARP_){
return cljs.core.with_meta(p2__143043_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),p1__143044_SHARP_], null));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$0(),cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"whitespace"], null)," "], null),inner));
});
repl_tooling.editor_integration.renderer.parse_inner_for_map = (function repl_tooling$editor_integration$renderer$parse_inner_for_map(objs,more_fn,a_for_more){
var sep = cljs.core.cycle(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"whitespace"], null)," "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"coll whitespace"], null),", "], null)], null));
var inner = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__143101_SHARP_){
return repl_tooling.editor_integration.renderer.protocols.as_html(cljs.core.deref(p1__143101_SHARP_),p1__143101_SHARP_,false);
}),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__143099_SHARP_){
return new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(p1__143099_SHARP_));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([objs], 0)));
return cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__143103_SHARP_,p2__143102_SHARP_){
return cljs.core.with_meta(p2__143102_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),p1__143103_SHARP_], null));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$0(),(function (){var G__143146 = cljs.core.vec(cljs.core.butlast(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(inner,sep)));
if(cljs.core.truth_(more_fn)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(G__143146,cljs.core.second(sep),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a_for_more], 0));
} else {
return G__143146;
}
})());
});
repl_tooling.editor_integration.renderer.assert_root = (function repl_tooling$editor_integration$renderer$assert_root(txt){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(txt),new cljs.core.Keyword(null,"row","row",-570139521))){
return txt;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"row","row",-570139521),txt], null);
}
});
repl_tooling.editor_integration.renderer.textual__GT_text = (function repl_tooling$editor_integration$renderer$textual__GT_text(elements,first_line_only_QMARK_){
var els = (function (){var G__143234 = elements;
if(cljs.core.truth_(first_line_only_QMARK_)){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__143203_SHARP_){
return ((cljs.core.coll_QMARK_(p1__143203_SHARP_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(p1__143203_SHARP_),new cljs.core.Keyword(null,"row","row",-570139521))));
}),G__143234);
} else {
return G__143234;
}
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__143204_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(p1__143204_SHARP_),new cljs.core.Keyword(null,"text","text",-1790561697));
}),cljs.core.partition.cljs$core$IFn$_invoke$arity$3((2),(1),cljs.core.flatten(els)))));
});
repl_tooling.editor_integration.renderer.copy_to_clipboard = (function repl_tooling$editor_integration$renderer$copy_to_clipboard(ratom,editor_state,first_line_only_QMARK_){
var copy = new cljs.core.Keyword(null,"on-copy","on-copy",-227435882).cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("editor","callbacks","editor/callbacks",1179124831).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(editor_state)),(function (){
return cljs.core.List.EMPTY;
}));
var G__143239 = repl_tooling.editor_integration.renderer.textual__GT_text((repl_tooling.editor_integration.renderer.txt_for_result.cljs$core$IFn$_invoke$arity$1 ? repl_tooling.editor_integration.renderer.txt_for_result.cljs$core$IFn$_invoke$arity$1(ratom) : repl_tooling.editor_integration.renderer.txt_for_result.call(null,ratom)),first_line_only_QMARK_);
return (copy.cljs$core$IFn$_invoke$arity$1 ? copy.cljs$core$IFn$_invoke$arity$1(G__143239) : copy.call(null,G__143239));
});
repl_tooling.editor_integration.renderer.obj_with_more_fn = (function repl_tooling$editor_integration$renderer$obj_with_more_fn(more_fn,ratom,repl,editor_state,callback){
var G__143241 = repl;
var G__143242 = (function (res){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(ratom,cljs.core.assoc,new cljs.core.Keyword(null,"more-fn","more-fn",-1002134682),null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"expanded?","expanded?",2055832296),true,new cljs.core.Keyword(null,"attributes-atom","attributes-atom",1302491177),repl_tooling.editor_integration.renderer.protocols.as_renderable(new cljs.core.Keyword(null,"attributes","attributes",-74013604).cljs$core$IFn$_invoke$arity$1(res),repl,editor_state)], 0));

return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
});
return (more_fn.cljs$core$IFn$_invoke$arity$2 ? more_fn.cljs$core$IFn$_invoke$arity$2(G__143241,G__143242) : more_fn.call(null,G__143241,G__143242));
});

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
 * @implements {repl_tooling.editor_integration.renderer.protocols.Renderable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
repl_tooling.editor_integration.renderer.ObjWithMore = (function (obj_atom,more_fn,attributes_atom,expanded_QMARK_,repl,editor_state,__meta,__extmap,__hash){
this.obj_atom = obj_atom;
this.more_fn = more_fn;
this.attributes_atom = attributes_atom;
this.expanded_QMARK_ = expanded_QMARK_;
this.repl = repl;
this.editor_state = editor_state;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(repl_tooling.editor_integration.renderer.ObjWithMore.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(repl_tooling.editor_integration.renderer.ObjWithMore.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k143250,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__143260 = k143250;
var G__143260__$1 = (((G__143260 instanceof cljs.core.Keyword))?G__143260.fqn:null);
switch (G__143260__$1) {
case "obj-atom":
return self__.obj_atom;

break;
case "more-fn":
return self__.more_fn;

break;
case "attributes-atom":
return self__.attributes_atom;

break;
case "expanded?":
return self__.expanded_QMARK_;

break;
case "repl":
return self__.repl;

break;
case "editor-state":
return self__.editor_state;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k143250,else__4475__auto__);

}
}));

(repl_tooling.editor_integration.renderer.ObjWithMore.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__143265){
var vec__143266 = p__143265;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__143266,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__143266,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(repl_tooling.editor_integration.renderer.ObjWithMore.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#repl-tooling.editor-integration.renderer.ObjWithMore{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj-atom","obj-atom",1074110926),self__.obj_atom],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"more-fn","more-fn",-1002134682),self__.more_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attributes-atom","attributes-atom",1302491177),self__.attributes_atom],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"expanded?","expanded?",2055832296),self__.expanded_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"repl","repl",-35398667),self__.repl],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"editor-state","editor-state",579582138),self__.editor_state],null))], null),self__.__extmap));
}));

(repl_tooling.editor_integration.renderer.ObjWithMore.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__143249){
var self__ = this;
var G__143249__$1 = this;
return (new cljs.core.RecordIter((0),G__143249__$1,6,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj-atom","obj-atom",1074110926),new cljs.core.Keyword(null,"more-fn","more-fn",-1002134682),new cljs.core.Keyword(null,"attributes-atom","attributes-atom",1302491177),new cljs.core.Keyword(null,"expanded?","expanded?",2055832296),new cljs.core.Keyword(null,"repl","repl",-35398667),new cljs.core.Keyword(null,"editor-state","editor-state",579582138)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(repl_tooling.editor_integration.renderer.ObjWithMore.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(repl_tooling.editor_integration.renderer.ObjWithMore.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new repl_tooling.editor_integration.renderer.ObjWithMore(self__.obj_atom,self__.more_fn,self__.attributes_atom,self__.expanded_QMARK_,self__.repl,self__.editor_state,self__.__meta,self__.__extmap,self__.__hash));
}));

(repl_tooling.editor_integration.renderer.ObjWithMore.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (6 + cljs.core.count(self__.__extmap));
}));

(repl_tooling.editor_integration.renderer.ObjWithMore.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (coll__4469__auto__){
return (2085883923 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
})(this__4468__auto____$1);
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(repl_tooling.editor_integration.renderer.ObjWithMore.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this143251,other143252){
var self__ = this;
var this143251__$1 = this;
return (((!((other143252 == null)))) && ((((this143251__$1.constructor === other143252.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this143251__$1.obj_atom,other143252.obj_atom)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this143251__$1.more_fn,other143252.more_fn)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this143251__$1.attributes_atom,other143252.attributes_atom)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this143251__$1.expanded_QMARK_,other143252.expanded_QMARK_)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this143251__$1.repl,other143252.repl)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this143251__$1.editor_state,other143252.editor_state)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this143251__$1.__extmap,other143252.__extmap)))))))))))))))));
}));

(repl_tooling.editor_integration.renderer.ObjWithMore.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"more-fn","more-fn",-1002134682),null,new cljs.core.Keyword(null,"expanded?","expanded?",2055832296),null,new cljs.core.Keyword(null,"attributes-atom","attributes-atom",1302491177),null,new cljs.core.Keyword(null,"obj-atom","obj-atom",1074110926),null,new cljs.core.Keyword(null,"repl","repl",-35398667),null,new cljs.core.Keyword(null,"editor-state","editor-state",579582138),null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new repl_tooling.editor_integration.renderer.ObjWithMore(self__.obj_atom,self__.more_fn,self__.attributes_atom,self__.expanded_QMARK_,self__.repl,self__.editor_state,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(repl_tooling.editor_integration.renderer.ObjWithMore.prototype.repl_tooling$editor_integration$renderer$protocols$Renderable$ = cljs.core.PROTOCOL_SENTINEL);

(repl_tooling.editor_integration.renderer.ObjWithMore.prototype.repl_tooling$editor_integration$renderer$protocols$Renderable$as_text$arity$3 = (function (_,ratom,root_QMARK_){
var self__ = this;
var ___$1 = this;
var obj = repl_tooling.editor_integration.renderer.assert_root(repl_tooling.editor_integration.renderer.protocols.as_text(cljs.core.deref(self__.obj_atom),self__.obj_atom,root_QMARK_));
if(cljs.core.truth_(self__.expanded_QMARK_)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(obj,repl_tooling.editor_integration.renderer.protocols.as_text(cljs.core.deref(self__.attributes_atom),self__.attributes_atom,root_QMARK_));
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(obj,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),"...",(function (p1__143245_SHARP_){
return repl_tooling.editor_integration.renderer.obj_with_more_fn(self__.more_fn,ratom,self__.repl,self__.editor_state,p1__143245_SHARP_);
})], null));
}
}));

(repl_tooling.editor_integration.renderer.ObjWithMore.prototype.repl_tooling$editor_integration$renderer$protocols$Renderable$as_html$arity$3 = (function (_,ratom,root_QMARK_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["browseable"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["object"], null)], null),repl_tooling.editor_integration.renderer.protocols.as_html(cljs.core.deref(self__.obj_atom),self__.obj_atom,root_QMARK_),(cljs.core.truth_(self__.more_fn)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
e.preventDefault();

e.stopPropagation();

return repl_tooling.editor_integration.renderer.obj_with_more_fn(self__.more_fn,ratom,self__.repl,self__.editor_state,cljs.core.identity);
})], null),(cljs.core.truth_(root_QMARK_)?"...":null)], null):null)], null),(cljs.core.truth_((function (){var and__4221__auto__ = root_QMARK_;
if(cljs.core.truth_(and__4221__auto__)){
return self__.expanded_QMARK_;
} else {
return and__4221__auto__;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"row children"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [repl_tooling.editor_integration.renderer.protocols.as_html,cljs.core.deref(self__.attributes_atom),self__.attributes_atom,true], null)], null):null)], null);
}));

(repl_tooling.editor_integration.renderer.ObjWithMore.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k143250){
var self__ = this;
var this__4479__auto____$1 = this;
var G__143697 = k143250;
var G__143697__$1 = (((G__143697 instanceof cljs.core.Keyword))?G__143697.fqn:null);
switch (G__143697__$1) {
case "obj-atom":
case "more-fn":
case "attributes-atom":
case "expanded?":
case "repl":
case "editor-state":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k143250);

}
}));

(repl_tooling.editor_integration.renderer.ObjWithMore.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__143249){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__143698 = cljs.core.keyword_identical_QMARK_;
var expr__143699 = k__4481__auto__;
if(cljs.core.truth_((pred__143698.cljs$core$IFn$_invoke$arity$2 ? pred__143698.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"obj-atom","obj-atom",1074110926),expr__143699) : pred__143698.call(null,new cljs.core.Keyword(null,"obj-atom","obj-atom",1074110926),expr__143699)))){
return (new repl_tooling.editor_integration.renderer.ObjWithMore(G__143249,self__.more_fn,self__.attributes_atom,self__.expanded_QMARK_,self__.repl,self__.editor_state,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__143698.cljs$core$IFn$_invoke$arity$2 ? pred__143698.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"more-fn","more-fn",-1002134682),expr__143699) : pred__143698.call(null,new cljs.core.Keyword(null,"more-fn","more-fn",-1002134682),expr__143699)))){
return (new repl_tooling.editor_integration.renderer.ObjWithMore(self__.obj_atom,G__143249,self__.attributes_atom,self__.expanded_QMARK_,self__.repl,self__.editor_state,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__143698.cljs$core$IFn$_invoke$arity$2 ? pred__143698.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"attributes-atom","attributes-atom",1302491177),expr__143699) : pred__143698.call(null,new cljs.core.Keyword(null,"attributes-atom","attributes-atom",1302491177),expr__143699)))){
return (new repl_tooling.editor_integration.renderer.ObjWithMore(self__.obj_atom,self__.more_fn,G__143249,self__.expanded_QMARK_,self__.repl,self__.editor_state,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__143698.cljs$core$IFn$_invoke$arity$2 ? pred__143698.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expanded?","expanded?",2055832296),expr__143699) : pred__143698.call(null,new cljs.core.Keyword(null,"expanded?","expanded?",2055832296),expr__143699)))){
return (new repl_tooling.editor_integration.renderer.ObjWithMore(self__.obj_atom,self__.more_fn,self__.attributes_atom,G__143249,self__.repl,self__.editor_state,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__143698.cljs$core$IFn$_invoke$arity$2 ? pred__143698.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"repl","repl",-35398667),expr__143699) : pred__143698.call(null,new cljs.core.Keyword(null,"repl","repl",-35398667),expr__143699)))){
return (new repl_tooling.editor_integration.renderer.ObjWithMore(self__.obj_atom,self__.more_fn,self__.attributes_atom,self__.expanded_QMARK_,G__143249,self__.editor_state,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__143698.cljs$core$IFn$_invoke$arity$2 ? pred__143698.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"editor-state","editor-state",579582138),expr__143699) : pred__143698.call(null,new cljs.core.Keyword(null,"editor-state","editor-state",579582138),expr__143699)))){
return (new repl_tooling.editor_integration.renderer.ObjWithMore(self__.obj_atom,self__.more_fn,self__.attributes_atom,self__.expanded_QMARK_,self__.repl,G__143249,self__.__meta,self__.__extmap,null));
} else {
return (new repl_tooling.editor_integration.renderer.ObjWithMore(self__.obj_atom,self__.more_fn,self__.attributes_atom,self__.expanded_QMARK_,self__.repl,self__.editor_state,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__143249),null));
}
}
}
}
}
}
}));

(repl_tooling.editor_integration.renderer.ObjWithMore.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"obj-atom","obj-atom",1074110926),self__.obj_atom,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"more-fn","more-fn",-1002134682),self__.more_fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"attributes-atom","attributes-atom",1302491177),self__.attributes_atom,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"expanded?","expanded?",2055832296),self__.expanded_QMARK_,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"repl","repl",-35398667),self__.repl,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"editor-state","editor-state",579582138),self__.editor_state,null))], null),self__.__extmap));
}));

(repl_tooling.editor_integration.renderer.ObjWithMore.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__143249){
var self__ = this;
var this__4471__auto____$1 = this;
return (new repl_tooling.editor_integration.renderer.ObjWithMore(self__.obj_atom,self__.more_fn,self__.attributes_atom,self__.expanded_QMARK_,self__.repl,self__.editor_state,G__143249,self__.__extmap,self__.__hash));
}));

(repl_tooling.editor_integration.renderer.ObjWithMore.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4478__auto__,(0)),cljs.core._nth(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(repl_tooling.editor_integration.renderer.ObjWithMore.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj-atom","obj-atom",-1580324843,null),new cljs.core.Symbol(null,"more-fn","more-fn",638396845,null),new cljs.core.Symbol(null,"attributes-atom","attributes-atom",-1351944592,null),new cljs.core.Symbol(null,"expanded?","expanded?",-598603473,null),new cljs.core.Symbol(null,"repl","repl",1605132860,null),new cljs.core.Symbol(null,"editor-state","editor-state",-2074853631,null)], null);
}));

(repl_tooling.editor_integration.renderer.ObjWithMore.cljs$lang$type = true);

(repl_tooling.editor_integration.renderer.ObjWithMore.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"repl-tooling.editor-integration.renderer/ObjWithMore",null,(1),null));
}));

(repl_tooling.editor_integration.renderer.ObjWithMore.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"repl-tooling.editor-integration.renderer/ObjWithMore");
}));

/**
 * Positional factory function for repl-tooling.editor-integration.renderer/ObjWithMore.
 */
repl_tooling.editor_integration.renderer.__GT_ObjWithMore = (function repl_tooling$editor_integration$renderer$__GT_ObjWithMore(obj_atom,more_fn,attributes_atom,expanded_QMARK_,repl,editor_state){
return (new repl_tooling.editor_integration.renderer.ObjWithMore(obj_atom,more_fn,attributes_atom,expanded_QMARK_,repl,editor_state,null,null,null));
});

/**
 * Factory function for repl-tooling.editor-integration.renderer/ObjWithMore, taking a map of keywords to field values.
 */
repl_tooling.editor_integration.renderer.map__GT_ObjWithMore = (function repl_tooling$editor_integration$renderer$map__GT_ObjWithMore(G__143253){
var extmap__4512__auto__ = (function (){var G__143701 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__143253,new cljs.core.Keyword(null,"obj-atom","obj-atom",1074110926),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"more-fn","more-fn",-1002134682),new cljs.core.Keyword(null,"attributes-atom","attributes-atom",1302491177),new cljs.core.Keyword(null,"expanded?","expanded?",2055832296),new cljs.core.Keyword(null,"repl","repl",-35398667),new cljs.core.Keyword(null,"editor-state","editor-state",579582138)], 0));
if(cljs.core.record_QMARK_(G__143253)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__143701);
} else {
return G__143701;
}
})();
return (new repl_tooling.editor_integration.renderer.ObjWithMore(new cljs.core.Keyword(null,"obj-atom","obj-atom",1074110926).cljs$core$IFn$_invoke$arity$1(G__143253),new cljs.core.Keyword(null,"more-fn","more-fn",-1002134682).cljs$core$IFn$_invoke$arity$1(G__143253),new cljs.core.Keyword(null,"attributes-atom","attributes-atom",1302491177).cljs$core$IFn$_invoke$arity$1(G__143253),new cljs.core.Keyword(null,"expanded?","expanded?",2055832296).cljs$core$IFn$_invoke$arity$1(G__143253),new cljs.core.Keyword(null,"repl","repl",-35398667).cljs$core$IFn$_invoke$arity$1(G__143253),new cljs.core.Keyword(null,"editor-state","editor-state",579582138).cljs$core$IFn$_invoke$arity$1(G__143253),null,cljs.core.not_empty(extmap__4512__auto__),null));
});

repl_tooling.editor_integration.renderer.reset_atom = (function repl_tooling$editor_integration$renderer$reset_atom(repl,ratom,obj,result,editor_state){
var new_idx = (repl_tooling.editor_integration.renderer.__GT_indexed.cljs$core$IFn$_invoke$arity$3 ? repl_tooling.editor_integration.renderer.__GT_indexed.cljs$core$IFn$_invoke$arity$3(result,repl,editor_state) : repl_tooling.editor_integration.renderer.__GT_indexed.call(null,result,repl,editor_state));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(ratom,(function (indexed){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(indexed,new cljs.core.Keyword(null,"obj","obj",981763962),cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(obj,new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(new_idx))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"more-fn","more-fn",-1002134682),new cljs.core.Keyword(null,"more-fn","more-fn",-1002134682).cljs$core$IFn$_invoke$arity$1(new_idx)], 0));
}));
});
repl_tooling.editor_integration.renderer.link_to_copy = (function repl_tooling$editor_integration$renderer$link_to_copy(ratom,editor_state,first_line_only_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"icon clipboard",new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (evt){
evt.preventDefault();

evt.stopPropagation();

return repl_tooling.editor_integration.renderer.copy_to_clipboard(ratom,editor_state,first_line_only_QMARK_);
})], null)], null);
});

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
 * @implements {repl_tooling.editor_integration.renderer.protocols.Renderable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
repl_tooling.editor_integration.renderer.Indexed = (function (open,obj,close,kind,expanded_QMARK_,more_fn,repl,editor_state,__meta,__extmap,__hash){
this.open = open;
this.obj = obj;
this.close = close;
this.kind = kind;
this.expanded_QMARK_ = expanded_QMARK_;
this.more_fn = more_fn;
this.repl = repl;
this.editor_state = editor_state;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(repl_tooling.editor_integration.renderer.Indexed.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(repl_tooling.editor_integration.renderer.Indexed.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k143716,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__143753 = k143716;
var G__143753__$1 = (((G__143753 instanceof cljs.core.Keyword))?G__143753.fqn:null);
switch (G__143753__$1) {
case "open":
return self__.open;

break;
case "obj":
return self__.obj;

break;
case "close":
return self__.close;

break;
case "kind":
return self__.kind;

break;
case "expanded?":
return self__.expanded_QMARK_;

break;
case "more-fn":
return self__.more_fn;

break;
case "repl":
return self__.repl;

break;
case "editor-state":
return self__.editor_state;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k143716,else__4475__auto__);

}
}));

(repl_tooling.editor_integration.renderer.Indexed.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__143797){
var vec__143799 = p__143797;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__143799,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__143799,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(repl_tooling.editor_integration.renderer.Indexed.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#repl-tooling.editor-integration.renderer.Indexed{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"open","open",-1763596448),self__.open],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"close","close",1835149582),self__.close],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kind","kind",-717265803),self__.kind],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"expanded?","expanded?",2055832296),self__.expanded_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"more-fn","more-fn",-1002134682),self__.more_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"repl","repl",-35398667),self__.repl],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"editor-state","editor-state",579582138),self__.editor_state],null))], null),self__.__extmap));
}));

(repl_tooling.editor_integration.renderer.Indexed.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__143715){
var self__ = this;
var G__143715__$1 = this;
return (new cljs.core.RecordIter((0),G__143715__$1,8,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"open","open",-1763596448),new cljs.core.Keyword(null,"obj","obj",981763962),new cljs.core.Keyword(null,"close","close",1835149582),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"expanded?","expanded?",2055832296),new cljs.core.Keyword(null,"more-fn","more-fn",-1002134682),new cljs.core.Keyword(null,"repl","repl",-35398667),new cljs.core.Keyword(null,"editor-state","editor-state",579582138)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(repl_tooling.editor_integration.renderer.Indexed.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(repl_tooling.editor_integration.renderer.Indexed.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new repl_tooling.editor_integration.renderer.Indexed(self__.open,self__.obj,self__.close,self__.kind,self__.expanded_QMARK_,self__.more_fn,self__.repl,self__.editor_state,self__.__meta,self__.__extmap,self__.__hash));
}));

(repl_tooling.editor_integration.renderer.Indexed.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (8 + cljs.core.count(self__.__extmap));
}));

(repl_tooling.editor_integration.renderer.Indexed.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (coll__4469__auto__){
return (911831387 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
})(this__4468__auto____$1);
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(repl_tooling.editor_integration.renderer.Indexed.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this143717,other143718){
var self__ = this;
var this143717__$1 = this;
return (((!((other143718 == null)))) && ((((this143717__$1.constructor === other143718.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this143717__$1.open,other143718.open)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this143717__$1.obj,other143718.obj)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this143717__$1.close,other143718.close)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this143717__$1.kind,other143718.kind)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this143717__$1.expanded_QMARK_,other143718.expanded_QMARK_)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this143717__$1.more_fn,other143718.more_fn)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this143717__$1.repl,other143718.repl)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this143717__$1.editor_state,other143718.editor_state)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this143717__$1.__extmap,other143718.__extmap)))))))))))))))))))));
}));

(repl_tooling.editor_integration.renderer.Indexed.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"open","open",-1763596448),null,new cljs.core.Keyword(null,"more-fn","more-fn",-1002134682),null,new cljs.core.Keyword(null,"expanded?","expanded?",2055832296),null,new cljs.core.Keyword(null,"close","close",1835149582),null,new cljs.core.Keyword(null,"kind","kind",-717265803),null,new cljs.core.Keyword(null,"repl","repl",-35398667),null,new cljs.core.Keyword(null,"editor-state","editor-state",579582138),null,new cljs.core.Keyword(null,"obj","obj",981763962),null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new repl_tooling.editor_integration.renderer.Indexed(self__.open,self__.obj,self__.close,self__.kind,self__.expanded_QMARK_,self__.more_fn,self__.repl,self__.editor_state,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(repl_tooling.editor_integration.renderer.Indexed.prototype.repl_tooling$editor_integration$renderer$protocols$Renderable$ = cljs.core.PROTOCOL_SENTINEL);

(repl_tooling.editor_integration.renderer.Indexed.prototype.repl_tooling$editor_integration$renderer$protocols$Renderable$as_html$arity$3 = (function (_,ratom,root_QMARK_){
var self__ = this;
var ___$1 = this;
var a_for_more = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
e.preventDefault();

e.stopPropagation();

var G__143890 = self__.repl;
var G__143891 = false;
var G__143892 = (function (p1__143703_SHARP_){
return repl_tooling.editor_integration.renderer.reset_atom(self__.repl,ratom,self__.obj,p1__143703_SHARP_,self__.editor_state);
});
return (self__.more_fn.cljs$core$IFn$_invoke$arity$3 ? self__.more_fn.cljs$core$IFn$_invoke$arity$3(G__143890,G__143891,G__143892) : self__.more_fn.call(null,G__143890,G__143891,G__143892));
})], null),"..."], null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["row",self__.kind], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["coll",self__.kind], null)], null),(cljs.core.truth_(root_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["chevron",(cljs.core.truth_(self__.expanded_QMARK_)?"opened":"closed")], null),new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
e.preventDefault();

e.stopPropagation();

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(ratom,cljs.core.update,new cljs.core.Keyword(null,"expanded?","expanded?",2055832296),cljs.core.not);
})], null)], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"delim opening"], null),self__.open], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"inner"], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("map",self__.kind))?repl_tooling.editor_integration.renderer.parse_inner_for_map(self__.obj,self__.more_fn,a_for_more):repl_tooling.editor_integration.renderer.parse_inner_root(self__.obj,self__.more_fn,a_for_more))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"delim closing"], null),self__.close], null),(cljs.core.truth_(root_QMARK_)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [repl_tooling.editor_integration.renderer.link_to_copy,ratom,self__.editor_state,true], null):null)], null),(cljs.core.truth_((function (){var and__4221__auto__ = root_QMARK_;
if(cljs.core.truth_(and__4221__auto__)){
return self__.expanded_QMARK_;
} else {
return and__4221__auto__;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"children"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),(function (){var G__143895 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__143706_SHARP_){
return repl_tooling.editor_integration.renderer.protocols.as_html(cljs.core.deref(p1__143706_SHARP_),p1__143706_SHARP_,true);
}),self__.obj);
var G__143895__$1 = (cljs.core.truth_(self__.more_fn)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__143895,a_for_more):G__143895);
return cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (i,e){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),i,new cljs.core.Keyword(null,"class","class",-2030961996),"row"], null),e], null);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$0(),G__143895__$1);

})()], null)], null):null)], null);
}));

(repl_tooling.editor_integration.renderer.Indexed.prototype.repl_tooling$editor_integration$renderer$protocols$Renderable$as_text$arity$3 = (function (_,ratom,root_QMARK_){
var self__ = this;
var ___$1 = this;
var children = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__143707_SHARP_){
return repl_tooling.editor_integration.renderer.protocols.as_text(cljs.core.deref(p1__143707_SHARP_),p1__143707_SHARP_,false);
}),self__.obj);
var toggle = (function (p1__143708_SHARP_){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(ratom,cljs.core.update,new cljs.core.Keyword(null,"expanded?","expanded?",2055832296),cljs.core.not);

return (p1__143708_SHARP_.cljs$core$IFn$_invoke$arity$0 ? p1__143708_SHARP_.cljs$core$IFn$_invoke$arity$0() : p1__143708_SHARP_.call(null));
});
var extract_map = (function (p1__143709_SHARP_){
return clojure.string.replace(clojure.string.replace(repl_tooling.editor_integration.renderer.textual__GT_text(p1__143709_SHARP_,false),/^\[/,""),/\]$/,"");
});
var txt = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("map",self__.kind))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(extract_map,children))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(repl_tooling.editor_integration.renderer.textual__GT_text,children))], null));
var more_callback = (function (callback){
var G__143899 = self__.repl;
var G__143900 = false;
var G__143901 = (function (p1__143710_SHARP_){
repl_tooling.editor_integration.renderer.reset_atom(self__.repl,ratom,self__.obj,p1__143710_SHARP_,self__.editor_state);

return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
});
return (self__.more_fn.cljs$core$IFn$_invoke$arity$3 ? self__.more_fn.cljs$core$IFn$_invoke$arity$3(G__143899,G__143900,G__143901) : self__.more_fn.call(null,G__143899,G__143900,G__143901));
});
var complete_txt = (new cljs.core.Delay((function (){
if(cljs.core.truth_(self__.more_fn)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(txt,(1),(function (p1__143711_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.open),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__143711_SHARP_)," ...",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.close)].join('');
}));
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(txt,(1),(function (p1__143712_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.open),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__143712_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.close)].join('');
}));
}
}),null));
var root_part = (new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"expand","expand",595248157),(cljs.core.truth_(self__.expanded_QMARK_)?"-":"+"),toggle], null);
}),null));
var rows = ((cljs.core.not(root_QMARK_))?cljs.core.deref(complete_txt):(cljs.core.truth_(self__.more_fn)?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"row","row",-570139521),cljs.core.deref(root_part),cljs.core.update.cljs$core$IFn$_invoke$arity$3(txt,(1),(function (p1__143713_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.open),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__143713_SHARP_)," "].join('');
})),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),"...",more_callback], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),self__.close], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"row","row",-570139521),cljs.core.deref(root_part),cljs.core.deref(complete_txt)], null)
));
if(cljs.core.truth_(self__.expanded_QMARK_)){
var G__143909 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,rows,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__143714_SHARP_){
return repl_tooling.editor_integration.renderer.assert_root(repl_tooling.editor_integration.renderer.protocols.as_text(cljs.core.deref(p1__143714_SHARP_),p1__143714_SHARP_,true));
}),self__.obj));
if(cljs.core.truth_(self__.more_fn)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__143909,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),"...",more_callback], null)], null));
} else {
return G__143909;
}
} else {
return rows;
}
}));

(repl_tooling.editor_integration.renderer.Indexed.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k143716){
var self__ = this;
var this__4479__auto____$1 = this;
var G__143918 = k143716;
var G__143918__$1 = (((G__143918 instanceof cljs.core.Keyword))?G__143918.fqn:null);
switch (G__143918__$1) {
case "open":
case "obj":
case "close":
case "kind":
case "expanded?":
case "more-fn":
case "repl":
case "editor-state":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k143716);

}
}));

(repl_tooling.editor_integration.renderer.Indexed.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__143715){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__143921 = cljs.core.keyword_identical_QMARK_;
var expr__143922 = k__4481__auto__;
if(cljs.core.truth_((pred__143921.cljs$core$IFn$_invoke$arity$2 ? pred__143921.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"open","open",-1763596448),expr__143922) : pred__143921.call(null,new cljs.core.Keyword(null,"open","open",-1763596448),expr__143922)))){
return (new repl_tooling.editor_integration.renderer.Indexed(G__143715,self__.obj,self__.close,self__.kind,self__.expanded_QMARK_,self__.more_fn,self__.repl,self__.editor_state,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__143921.cljs$core$IFn$_invoke$arity$2 ? pred__143921.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"obj","obj",981763962),expr__143922) : pred__143921.call(null,new cljs.core.Keyword(null,"obj","obj",981763962),expr__143922)))){
return (new repl_tooling.editor_integration.renderer.Indexed(self__.open,G__143715,self__.close,self__.kind,self__.expanded_QMARK_,self__.more_fn,self__.repl,self__.editor_state,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__143921.cljs$core$IFn$_invoke$arity$2 ? pred__143921.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"close","close",1835149582),expr__143922) : pred__143921.call(null,new cljs.core.Keyword(null,"close","close",1835149582),expr__143922)))){
return (new repl_tooling.editor_integration.renderer.Indexed(self__.open,self__.obj,G__143715,self__.kind,self__.expanded_QMARK_,self__.more_fn,self__.repl,self__.editor_state,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__143921.cljs$core$IFn$_invoke$arity$2 ? pred__143921.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"kind","kind",-717265803),expr__143922) : pred__143921.call(null,new cljs.core.Keyword(null,"kind","kind",-717265803),expr__143922)))){
return (new repl_tooling.editor_integration.renderer.Indexed(self__.open,self__.obj,self__.close,G__143715,self__.expanded_QMARK_,self__.more_fn,self__.repl,self__.editor_state,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__143921.cljs$core$IFn$_invoke$arity$2 ? pred__143921.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expanded?","expanded?",2055832296),expr__143922) : pred__143921.call(null,new cljs.core.Keyword(null,"expanded?","expanded?",2055832296),expr__143922)))){
return (new repl_tooling.editor_integration.renderer.Indexed(self__.open,self__.obj,self__.close,self__.kind,G__143715,self__.more_fn,self__.repl,self__.editor_state,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__143921.cljs$core$IFn$_invoke$arity$2 ? pred__143921.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"more-fn","more-fn",-1002134682),expr__143922) : pred__143921.call(null,new cljs.core.Keyword(null,"more-fn","more-fn",-1002134682),expr__143922)))){
return (new repl_tooling.editor_integration.renderer.Indexed(self__.open,self__.obj,self__.close,self__.kind,self__.expanded_QMARK_,G__143715,self__.repl,self__.editor_state,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__143921.cljs$core$IFn$_invoke$arity$2 ? pred__143921.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"repl","repl",-35398667),expr__143922) : pred__143921.call(null,new cljs.core.Keyword(null,"repl","repl",-35398667),expr__143922)))){
return (new repl_tooling.editor_integration.renderer.Indexed(self__.open,self__.obj,self__.close,self__.kind,self__.expanded_QMARK_,self__.more_fn,G__143715,self__.editor_state,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__143921.cljs$core$IFn$_invoke$arity$2 ? pred__143921.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"editor-state","editor-state",579582138),expr__143922) : pred__143921.call(null,new cljs.core.Keyword(null,"editor-state","editor-state",579582138),expr__143922)))){
return (new repl_tooling.editor_integration.renderer.Indexed(self__.open,self__.obj,self__.close,self__.kind,self__.expanded_QMARK_,self__.more_fn,self__.repl,G__143715,self__.__meta,self__.__extmap,null));
} else {
return (new repl_tooling.editor_integration.renderer.Indexed(self__.open,self__.obj,self__.close,self__.kind,self__.expanded_QMARK_,self__.more_fn,self__.repl,self__.editor_state,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__143715),null));
}
}
}
}
}
}
}
}
}));

(repl_tooling.editor_integration.renderer.Indexed.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"open","open",-1763596448),self__.open,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"close","close",1835149582),self__.close,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"kind","kind",-717265803),self__.kind,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"expanded?","expanded?",2055832296),self__.expanded_QMARK_,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"more-fn","more-fn",-1002134682),self__.more_fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"repl","repl",-35398667),self__.repl,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"editor-state","editor-state",579582138),self__.editor_state,null))], null),self__.__extmap));
}));

(repl_tooling.editor_integration.renderer.Indexed.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__143715){
var self__ = this;
var this__4471__auto____$1 = this;
return (new repl_tooling.editor_integration.renderer.Indexed(self__.open,self__.obj,self__.close,self__.kind,self__.expanded_QMARK_,self__.more_fn,self__.repl,self__.editor_state,G__143715,self__.__extmap,self__.__hash));
}));

(repl_tooling.editor_integration.renderer.Indexed.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4478__auto__,(0)),cljs.core._nth(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(repl_tooling.editor_integration.renderer.Indexed.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"open","open",-123064921,null),new cljs.core.Symbol(null,"obj","obj",-1672671807,null),new cljs.core.Symbol(null,"close","close",-819286187,null),new cljs.core.Symbol(null,"kind","kind",923265724,null),new cljs.core.Symbol(null,"expanded?","expanded?",-598603473,null),new cljs.core.Symbol(null,"more-fn","more-fn",638396845,null),new cljs.core.Symbol(null,"repl","repl",1605132860,null),new cljs.core.Symbol(null,"editor-state","editor-state",-2074853631,null)], null);
}));

(repl_tooling.editor_integration.renderer.Indexed.cljs$lang$type = true);

(repl_tooling.editor_integration.renderer.Indexed.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"repl-tooling.editor-integration.renderer/Indexed",null,(1),null));
}));

(repl_tooling.editor_integration.renderer.Indexed.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"repl-tooling.editor-integration.renderer/Indexed");
}));

/**
 * Positional factory function for repl-tooling.editor-integration.renderer/Indexed.
 */
repl_tooling.editor_integration.renderer.__GT_Indexed = (function repl_tooling$editor_integration$renderer$__GT_Indexed(open,obj,close,kind,expanded_QMARK_,more_fn,repl,editor_state){
return (new repl_tooling.editor_integration.renderer.Indexed(open,obj,close,kind,expanded_QMARK_,more_fn,repl,editor_state,null,null,null));
});

/**
 * Factory function for repl-tooling.editor-integration.renderer/Indexed, taking a map of keywords to field values.
 */
repl_tooling.editor_integration.renderer.map__GT_Indexed = (function repl_tooling$editor_integration$renderer$map__GT_Indexed(G__143721){
var extmap__4512__auto__ = (function (){var G__143938 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__143721,new cljs.core.Keyword(null,"open","open",-1763596448),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"obj","obj",981763962),new cljs.core.Keyword(null,"close","close",1835149582),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"expanded?","expanded?",2055832296),new cljs.core.Keyword(null,"more-fn","more-fn",-1002134682),new cljs.core.Keyword(null,"repl","repl",-35398667),new cljs.core.Keyword(null,"editor-state","editor-state",579582138)], 0));
if(cljs.core.record_QMARK_(G__143721)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__143938);
} else {
return G__143938;
}
})();
return (new repl_tooling.editor_integration.renderer.Indexed(new cljs.core.Keyword(null,"open","open",-1763596448).cljs$core$IFn$_invoke$arity$1(G__143721),new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(G__143721),new cljs.core.Keyword(null,"close","close",1835149582).cljs$core$IFn$_invoke$arity$1(G__143721),new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(G__143721),new cljs.core.Keyword(null,"expanded?","expanded?",2055832296).cljs$core$IFn$_invoke$arity$1(G__143721),new cljs.core.Keyword(null,"more-fn","more-fn",-1002134682).cljs$core$IFn$_invoke$arity$1(G__143721),new cljs.core.Keyword(null,"repl","repl",-35398667).cljs$core$IFn$_invoke$arity$1(G__143721),new cljs.core.Keyword(null,"editor-state","editor-state",579582138).cljs$core$IFn$_invoke$arity$1(G__143721),null,cljs.core.not_empty(extmap__4512__auto__),null));
});


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
 * @implements {repl_tooling.editor_integration.renderer.protocols.Renderable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
repl_tooling.editor_integration.renderer.Leaf = (function (obj,editor_state,__meta,__extmap,__hash){
this.obj = obj;
this.editor_state = editor_state;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(repl_tooling.editor_integration.renderer.Leaf.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(repl_tooling.editor_integration.renderer.Leaf.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k143966,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__144006 = k143966;
var G__144006__$1 = (((G__144006 instanceof cljs.core.Keyword))?G__144006.fqn:null);
switch (G__144006__$1) {
case "obj":
return self__.obj;

break;
case "editor-state":
return self__.editor_state;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k143966,else__4475__auto__);

}
}));

(repl_tooling.editor_integration.renderer.Leaf.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__144007){
var vec__144008 = p__144007;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__144008,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__144008,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(repl_tooling.editor_integration.renderer.Leaf.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#repl-tooling.editor-integration.renderer.Leaf{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"editor-state","editor-state",579582138),self__.editor_state],null))], null),self__.__extmap));
}));

(repl_tooling.editor_integration.renderer.Leaf.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__143965){
var self__ = this;
var G__143965__$1 = this;
return (new cljs.core.RecordIter((0),G__143965__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj","obj",981763962),new cljs.core.Keyword(null,"editor-state","editor-state",579582138)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(repl_tooling.editor_integration.renderer.Leaf.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(repl_tooling.editor_integration.renderer.Leaf.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new repl_tooling.editor_integration.renderer.Leaf(self__.obj,self__.editor_state,self__.__meta,self__.__extmap,self__.__hash));
}));

(repl_tooling.editor_integration.renderer.Leaf.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(repl_tooling.editor_integration.renderer.Leaf.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (coll__4469__auto__){
return (-100738551 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
})(this__4468__auto____$1);
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(repl_tooling.editor_integration.renderer.Leaf.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this143967,other143968){
var self__ = this;
var this143967__$1 = this;
return (((!((other143968 == null)))) && ((((this143967__$1.constructor === other143968.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this143967__$1.obj,other143968.obj)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this143967__$1.editor_state,other143968.editor_state)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this143967__$1.__extmap,other143968.__extmap)))))))));
}));

(repl_tooling.editor_integration.renderer.Leaf.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"editor-state","editor-state",579582138),null,new cljs.core.Keyword(null,"obj","obj",981763962),null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new repl_tooling.editor_integration.renderer.Leaf(self__.obj,self__.editor_state,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(repl_tooling.editor_integration.renderer.Leaf.prototype.repl_tooling$editor_integration$renderer$protocols$Renderable$ = cljs.core.PROTOCOL_SENTINEL);

(repl_tooling.editor_integration.renderer.Leaf.prototype.repl_tooling$editor_integration$renderer$protocols$Renderable$as_html$arity$3 = (function (_,ratom,root_QMARK_){
var self__ = this;
var ___$1 = this;
var tp = ((typeof self__.obj === 'string')?"string":((typeof self__.obj === 'number')?"number":((cljs.core.boolean_QMARK_(self__.obj))?"bool":(((self__.obj == null))?"nil":"other"
))));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),tp], null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.obj], 0)),(cljs.core.truth_(root_QMARK_)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [repl_tooling.editor_integration.renderer.link_to_copy,ratom,self__.editor_state,true], null):null)], null);
}));

(repl_tooling.editor_integration.renderer.Leaf.prototype.repl_tooling$editor_integration$renderer$protocols$Renderable$as_text$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.obj], 0))], null);
}));

(repl_tooling.editor_integration.renderer.Leaf.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k143966){
var self__ = this;
var this__4479__auto____$1 = this;
var G__144011 = k143966;
var G__144011__$1 = (((G__144011 instanceof cljs.core.Keyword))?G__144011.fqn:null);
switch (G__144011__$1) {
case "obj":
case "editor-state":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k143966);

}
}));

(repl_tooling.editor_integration.renderer.Leaf.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__143965){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__144012 = cljs.core.keyword_identical_QMARK_;
var expr__144013 = k__4481__auto__;
if(cljs.core.truth_((pred__144012.cljs$core$IFn$_invoke$arity$2 ? pred__144012.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"obj","obj",981763962),expr__144013) : pred__144012.call(null,new cljs.core.Keyword(null,"obj","obj",981763962),expr__144013)))){
return (new repl_tooling.editor_integration.renderer.Leaf(G__143965,self__.editor_state,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__144012.cljs$core$IFn$_invoke$arity$2 ? pred__144012.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"editor-state","editor-state",579582138),expr__144013) : pred__144012.call(null,new cljs.core.Keyword(null,"editor-state","editor-state",579582138),expr__144013)))){
return (new repl_tooling.editor_integration.renderer.Leaf(self__.obj,G__143965,self__.__meta,self__.__extmap,null));
} else {
return (new repl_tooling.editor_integration.renderer.Leaf(self__.obj,self__.editor_state,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__143965),null));
}
}
}));

(repl_tooling.editor_integration.renderer.Leaf.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"editor-state","editor-state",579582138),self__.editor_state,null))], null),self__.__extmap));
}));

(repl_tooling.editor_integration.renderer.Leaf.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__143965){
var self__ = this;
var this__4471__auto____$1 = this;
return (new repl_tooling.editor_integration.renderer.Leaf(self__.obj,self__.editor_state,G__143965,self__.__extmap,self__.__hash));
}));

(repl_tooling.editor_integration.renderer.Leaf.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4478__auto__,(0)),cljs.core._nth(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(repl_tooling.editor_integration.renderer.Leaf.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null),new cljs.core.Symbol(null,"editor-state","editor-state",-2074853631,null)], null);
}));

(repl_tooling.editor_integration.renderer.Leaf.cljs$lang$type = true);

(repl_tooling.editor_integration.renderer.Leaf.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"repl-tooling.editor-integration.renderer/Leaf",null,(1),null));
}));

(repl_tooling.editor_integration.renderer.Leaf.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"repl-tooling.editor-integration.renderer/Leaf");
}));

/**
 * Positional factory function for repl-tooling.editor-integration.renderer/Leaf.
 */
repl_tooling.editor_integration.renderer.__GT_Leaf = (function repl_tooling$editor_integration$renderer$__GT_Leaf(obj,editor_state){
return (new repl_tooling.editor_integration.renderer.Leaf(obj,editor_state,null,null,null));
});

/**
 * Factory function for repl-tooling.editor-integration.renderer/Leaf, taking a map of keywords to field values.
 */
repl_tooling.editor_integration.renderer.map__GT_Leaf = (function repl_tooling$editor_integration$renderer$map__GT_Leaf(G__143969){
var extmap__4512__auto__ = (function (){var G__144076 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__143969,new cljs.core.Keyword(null,"obj","obj",981763962),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"editor-state","editor-state",579582138)], 0));
if(cljs.core.record_QMARK_(G__143969)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__144076);
} else {
return G__144076;
}
})();
return (new repl_tooling.editor_integration.renderer.Leaf(new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(G__143969),new cljs.core.Keyword(null,"editor-state","editor-state",579582138).cljs$core$IFn$_invoke$arity$1(G__143969),null,cljs.core.not_empty(extmap__4512__auto__),null));
});

repl_tooling.editor_integration.renderer.__GT_indexed = (function repl_tooling$editor_integration$renderer$__GT_indexed(obj,repl,editor_state){
var more_fn = repl_tooling.eval.get_more_fn(obj);
var children = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__144077_SHARP_){
return repl_tooling.editor_integration.renderer.protocols.as_renderable(p1__144077_SHARP_,repl,editor_state);
}),repl_tooling.eval.without_ellision(obj));
if(cljs.core.vector_QMARK_(obj)){
return repl_tooling.editor_integration.renderer.__GT_Indexed("[",children,"]","vector",false,more_fn,repl,editor_state);
} else {
if(cljs.core.set_QMARK_(obj)){
return repl_tooling.editor_integration.renderer.__GT_Indexed("#{",cljs.core.vec(children),"}","set",false,more_fn,repl,editor_state);
} else {
if(cljs.core.map_QMARK_(obj)){
return repl_tooling.editor_integration.renderer.__GT_Indexed("{",cljs.core.vec(children),"}","map",false,more_fn,repl,editor_state);
} else {
if(cljs.core.seq_QMARK_(obj)){
return repl_tooling.editor_integration.renderer.__GT_Indexed("(",children,")","list",false,more_fn,repl,editor_state);
} else {
return null;
}
}
}
}
});

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
 * @implements {repl_tooling.editor_integration.renderer.protocols.Renderable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
repl_tooling.editor_integration.renderer.IncompleteStr = (function (string,repl,editor_state,__meta,__extmap,__hash){
this.string = string;
this.repl = repl;
this.editor_state = editor_state;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(repl_tooling.editor_integration.renderer.IncompleteStr.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(repl_tooling.editor_integration.renderer.IncompleteStr.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k144087,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__144099 = k144087;
var G__144099__$1 = (((G__144099 instanceof cljs.core.Keyword))?G__144099.fqn:null);
switch (G__144099__$1) {
case "string":
return self__.string;

break;
case "repl":
return self__.repl;

break;
case "editor-state":
return self__.editor_state;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k144087,else__4475__auto__);

}
}));

(repl_tooling.editor_integration.renderer.IncompleteStr.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__144113){
var vec__144114 = p__144113;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__144114,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__144114,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(repl_tooling.editor_integration.renderer.IncompleteStr.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#repl-tooling.editor-integration.renderer.IncompleteStr{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"string","string",-1989541586),self__.string],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"repl","repl",-35398667),self__.repl],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"editor-state","editor-state",579582138),self__.editor_state],null))], null),self__.__extmap));
}));

(repl_tooling.editor_integration.renderer.IncompleteStr.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__144086){
var self__ = this;
var G__144086__$1 = this;
return (new cljs.core.RecordIter((0),G__144086__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"repl","repl",-35398667),new cljs.core.Keyword(null,"editor-state","editor-state",579582138)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(repl_tooling.editor_integration.renderer.IncompleteStr.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(repl_tooling.editor_integration.renderer.IncompleteStr.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new repl_tooling.editor_integration.renderer.IncompleteStr(self__.string,self__.repl,self__.editor_state,self__.__meta,self__.__extmap,self__.__hash));
}));

(repl_tooling.editor_integration.renderer.IncompleteStr.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
}));

(repl_tooling.editor_integration.renderer.IncompleteStr.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (coll__4469__auto__){
return (992402232 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
})(this__4468__auto____$1);
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(repl_tooling.editor_integration.renderer.IncompleteStr.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this144088,other144089){
var self__ = this;
var this144088__$1 = this;
return (((!((other144089 == null)))) && ((((this144088__$1.constructor === other144089.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this144088__$1.string,other144089.string)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this144088__$1.repl,other144089.repl)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this144088__$1.editor_state,other144089.editor_state)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this144088__$1.__extmap,other144089.__extmap)))))))))));
}));

(repl_tooling.editor_integration.renderer.IncompleteStr.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"string","string",-1989541586),null,new cljs.core.Keyword(null,"repl","repl",-35398667),null,new cljs.core.Keyword(null,"editor-state","editor-state",579582138),null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new repl_tooling.editor_integration.renderer.IncompleteStr(self__.string,self__.repl,self__.editor_state,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(repl_tooling.editor_integration.renderer.IncompleteStr.prototype.repl_tooling$editor_integration$renderer$protocols$Renderable$ = cljs.core.PROTOCOL_SENTINEL);

(repl_tooling.editor_integration.renderer.IncompleteStr.prototype.repl_tooling$editor_integration$renderer$protocols$Renderable$as_html$arity$3 = (function (_,ratom,root_QMARK_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"string big"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),clojure.string.replace(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([repl_tooling.eval.without_ellision(self__.string)], 0)),/\"$/,"")], null),(function (){var temp__5753__auto__ = repl_tooling.eval.get_more_fn(self__.string);
if(cljs.core.truth_(temp__5753__auto__)){
var get_more = temp__5753__auto__;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
e.preventDefault();

e.stopPropagation();

var G__144137 = self__.repl;
var G__144138 = (function (p1__144084_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(ratom,cljs.core.assoc,new cljs.core.Keyword(null,"string","string",-1989541586),p1__144084_SHARP_);
});
return (get_more.cljs$core$IFn$_invoke$arity$2 ? get_more.cljs$core$IFn$_invoke$arity$2(G__144137,G__144138) : get_more.call(null,G__144137,G__144138));
})], null),"..."], null);
} else {
return null;
}
})(),"\"",(cljs.core.truth_(root_QMARK_)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [repl_tooling.editor_integration.renderer.link_to_copy,ratom,self__.editor_state,true], null):null)], null);
}));

(repl_tooling.editor_integration.renderer.IncompleteStr.prototype.repl_tooling$editor_integration$renderer$protocols$Renderable$as_text$arity$3 = (function (_,ratom,root_QMARK_){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(root_QMARK_)){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),clojure.string.replace(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([repl_tooling.eval.without_ellision(self__.string)], 0)),/\"$/,"")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),"...",(function (p1__144085_SHARP_){
var f = repl_tooling.eval.get_more_fn(self__.string);
var G__144139 = self__.repl;
var G__144140 = (function (obj){
if(typeof obj === 'string'){
cljs.core.reset_BANG_(ratom,repl_tooling.editor_integration.renderer.__GT_Leaf(obj,self__.editor_state));
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(ratom,cljs.core.assoc,new cljs.core.Keyword(null,"string","string",-1989541586),obj);
}

return (p1__144085_SHARP_.cljs$core$IFn$_invoke$arity$0 ? p1__144085_SHARP_.cljs$core$IFn$_invoke$arity$0() : p1__144085_SHARP_.call(null));
});
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__144139,G__144140) : f.call(null,G__144139,G__144140));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),"\""], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.string], 0))], null);
}
}));

(repl_tooling.editor_integration.renderer.IncompleteStr.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k144087){
var self__ = this;
var this__4479__auto____$1 = this;
var G__144143 = k144087;
var G__144143__$1 = (((G__144143 instanceof cljs.core.Keyword))?G__144143.fqn:null);
switch (G__144143__$1) {
case "string":
case "repl":
case "editor-state":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k144087);

}
}));

(repl_tooling.editor_integration.renderer.IncompleteStr.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__144086){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__144190 = cljs.core.keyword_identical_QMARK_;
var expr__144191 = k__4481__auto__;
if(cljs.core.truth_((pred__144190.cljs$core$IFn$_invoke$arity$2 ? pred__144190.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"string","string",-1989541586),expr__144191) : pred__144190.call(null,new cljs.core.Keyword(null,"string","string",-1989541586),expr__144191)))){
return (new repl_tooling.editor_integration.renderer.IncompleteStr(G__144086,self__.repl,self__.editor_state,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__144190.cljs$core$IFn$_invoke$arity$2 ? pred__144190.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"repl","repl",-35398667),expr__144191) : pred__144190.call(null,new cljs.core.Keyword(null,"repl","repl",-35398667),expr__144191)))){
return (new repl_tooling.editor_integration.renderer.IncompleteStr(self__.string,G__144086,self__.editor_state,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__144190.cljs$core$IFn$_invoke$arity$2 ? pred__144190.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"editor-state","editor-state",579582138),expr__144191) : pred__144190.call(null,new cljs.core.Keyword(null,"editor-state","editor-state",579582138),expr__144191)))){
return (new repl_tooling.editor_integration.renderer.IncompleteStr(self__.string,self__.repl,G__144086,self__.__meta,self__.__extmap,null));
} else {
return (new repl_tooling.editor_integration.renderer.IncompleteStr(self__.string,self__.repl,self__.editor_state,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__144086),null));
}
}
}
}));

(repl_tooling.editor_integration.renderer.IncompleteStr.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"string","string",-1989541586),self__.string,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"repl","repl",-35398667),self__.repl,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"editor-state","editor-state",579582138),self__.editor_state,null))], null),self__.__extmap));
}));

(repl_tooling.editor_integration.renderer.IncompleteStr.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__144086){
var self__ = this;
var this__4471__auto____$1 = this;
return (new repl_tooling.editor_integration.renderer.IncompleteStr(self__.string,self__.repl,self__.editor_state,G__144086,self__.__extmap,self__.__hash));
}));

(repl_tooling.editor_integration.renderer.IncompleteStr.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4478__auto__,(0)),cljs.core._nth(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(repl_tooling.editor_integration.renderer.IncompleteStr.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"string","string",-349010059,null),new cljs.core.Symbol(null,"repl","repl",1605132860,null),new cljs.core.Symbol(null,"editor-state","editor-state",-2074853631,null)], null);
}));

(repl_tooling.editor_integration.renderer.IncompleteStr.cljs$lang$type = true);

(repl_tooling.editor_integration.renderer.IncompleteStr.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"repl-tooling.editor-integration.renderer/IncompleteStr",null,(1),null));
}));

(repl_tooling.editor_integration.renderer.IncompleteStr.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"repl-tooling.editor-integration.renderer/IncompleteStr");
}));

/**
 * Positional factory function for repl-tooling.editor-integration.renderer/IncompleteStr.
 */
repl_tooling.editor_integration.renderer.__GT_IncompleteStr = (function repl_tooling$editor_integration$renderer$__GT_IncompleteStr(string,repl,editor_state){
return (new repl_tooling.editor_integration.renderer.IncompleteStr(string,repl,editor_state,null,null,null));
});

/**
 * Factory function for repl-tooling.editor-integration.renderer/IncompleteStr, taking a map of keywords to field values.
 */
repl_tooling.editor_integration.renderer.map__GT_IncompleteStr = (function repl_tooling$editor_integration$renderer$map__GT_IncompleteStr(G__144090){
var extmap__4512__auto__ = (function (){var G__144195 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__144090,new cljs.core.Keyword(null,"string","string",-1989541586),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"repl","repl",-35398667),new cljs.core.Keyword(null,"editor-state","editor-state",579582138)], 0));
if(cljs.core.record_QMARK_(G__144090)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__144195);
} else {
return G__144195;
}
})();
return (new repl_tooling.editor_integration.renderer.IncompleteStr(new cljs.core.Keyword(null,"string","string",-1989541586).cljs$core$IFn$_invoke$arity$1(G__144090),new cljs.core.Keyword(null,"repl","repl",-35398667).cljs$core$IFn$_invoke$arity$1(G__144090),new cljs.core.Keyword(null,"editor-state","editor-state",579582138).cljs$core$IFn$_invoke$arity$1(G__144090),null,cljs.core.not_empty(extmap__4512__auto__),null));
});


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
 * @implements {repl_tooling.editor_integration.renderer.protocols.Renderable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
repl_tooling.editor_integration.renderer.Tagged = (function (tag,subelement,editor_state,open_QMARK_,__meta,__extmap,__hash){
this.tag = tag;
this.subelement = subelement;
this.editor_state = editor_state;
this.open_QMARK_ = open_QMARK_;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(repl_tooling.editor_integration.renderer.Tagged.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(repl_tooling.editor_integration.renderer.Tagged.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k144203,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__144209 = k144203;
var G__144209__$1 = (((G__144209 instanceof cljs.core.Keyword))?G__144209.fqn:null);
switch (G__144209__$1) {
case "tag":
return self__.tag;

break;
case "subelement":
return self__.subelement;

break;
case "editor-state":
return self__.editor_state;

break;
case "open?":
return self__.open_QMARK_;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k144203,else__4475__auto__);

}
}));

(repl_tooling.editor_integration.renderer.Tagged.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__144210){
var vec__144212 = p__144210;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__144212,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__144212,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(repl_tooling.editor_integration.renderer.Tagged.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#repl-tooling.editor-integration.renderer.Tagged{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tag","tag",-1290361223),self__.tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"subelement","subelement",862507584),self__.subelement],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"editor-state","editor-state",579582138),self__.editor_state],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"open?","open?",1238443125),self__.open_QMARK_],null))], null),self__.__extmap));
}));

(repl_tooling.editor_integration.renderer.Tagged.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__144202){
var self__ = this;
var G__144202__$1 = this;
return (new cljs.core.RecordIter((0),G__144202__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"subelement","subelement",862507584),new cljs.core.Keyword(null,"editor-state","editor-state",579582138),new cljs.core.Keyword(null,"open?","open?",1238443125)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(repl_tooling.editor_integration.renderer.Tagged.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(repl_tooling.editor_integration.renderer.Tagged.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new repl_tooling.editor_integration.renderer.Tagged(self__.tag,self__.subelement,self__.editor_state,self__.open_QMARK_,self__.__meta,self__.__extmap,self__.__hash));
}));

(repl_tooling.editor_integration.renderer.Tagged.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
}));

(repl_tooling.editor_integration.renderer.Tagged.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (coll__4469__auto__){
return (-1198220116 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
})(this__4468__auto____$1);
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(repl_tooling.editor_integration.renderer.Tagged.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this144204,other144205){
var self__ = this;
var this144204__$1 = this;
return (((!((other144205 == null)))) && ((((this144204__$1.constructor === other144205.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this144204__$1.tag,other144205.tag)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this144204__$1.subelement,other144205.subelement)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this144204__$1.editor_state,other144205.editor_state)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this144204__$1.open_QMARK_,other144205.open_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this144204__$1.__extmap,other144205.__extmap)))))))))))));
}));

(repl_tooling.editor_integration.renderer.Tagged.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"subelement","subelement",862507584),null,new cljs.core.Keyword(null,"open?","open?",1238443125),null,new cljs.core.Keyword(null,"tag","tag",-1290361223),null,new cljs.core.Keyword(null,"editor-state","editor-state",579582138),null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new repl_tooling.editor_integration.renderer.Tagged(self__.tag,self__.subelement,self__.editor_state,self__.open_QMARK_,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(repl_tooling.editor_integration.renderer.Tagged.prototype.repl_tooling$editor_integration$renderer$protocols$Renderable$ = cljs.core.PROTOCOL_SENTINEL);

(repl_tooling.editor_integration.renderer.Tagged.prototype.repl_tooling$editor_integration$renderer$protocols$Renderable$as_text$arity$3 = (function (_,ratom,root_QMARK_){
var self__ = this;
var ___$1 = this;
var toggle = (function (p1__144198_SHARP_){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(ratom,cljs.core.update,new cljs.core.Keyword(null,"open?","open?",1238443125),cljs.core.not);

return (p1__144198_SHARP_.cljs$core$IFn$_invoke$arity$0 ? p1__144198_SHARP_.cljs$core$IFn$_invoke$arity$0() : p1__144198_SHARP_.call(null));
});
if(cljs.core.truth_(self__.open_QMARK_)){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"expand","expand",595248157),"-",toggle], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),self__.tag], null),repl_tooling.editor_integration.renderer.protocols.as_text(cljs.core.deref(self__.subelement),self__.subelement,false),repl_tooling.editor_integration.renderer.assert_root(repl_tooling.editor_integration.renderer.protocols.as_text(cljs.core.deref(self__.subelement),self__.subelement,true))], null);
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"expand","expand",595248157),"+",toggle], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),self__.tag], null),repl_tooling.editor_integration.renderer.protocols.as_text(cljs.core.deref(self__.subelement),self__.subelement,false)], null);
}
}));

(repl_tooling.editor_integration.renderer.Tagged.prototype.repl_tooling$editor_integration$renderer$protocols$Renderable$as_html$arity$3 = (function (_,ratom,root_QMARK_){
var self__ = this;
var ___$1 = this;
var will_be_open_QMARK_ = (function (){var and__4221__auto__ = root_QMARK_;
if(cljs.core.truth_(and__4221__auto__)){
return self__.open_QMARK_;
} else {
return and__4221__auto__;
}
})();
var copy_elem = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [repl_tooling.editor_integration.renderer.link_to_copy,ratom,self__.editor_state,true], null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"tagged"], null),(cljs.core.truth_(root_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["chevron",(cljs.core.truth_(self__.open_QMARK_)?"opened":"closed")], null),new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
e.preventDefault();

e.stopPropagation();

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(ratom,cljs.core.update,new cljs.core.Keyword(null,"open?","open?",1238443125),cljs.core.not);
})], null)], null):null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(will_be_open_QMARK_)?"row":null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"tag"], null),self__.tag,(cljs.core.truth_(will_be_open_QMARK_)?copy_elem:null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(will_be_open_QMARK_)?"tag children":null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [repl_tooling.editor_integration.renderer.protocols.as_html,cljs.core.deref(self__.subelement),self__.subelement,will_be_open_QMARK_], null)], null),(cljs.core.truth_((function (){var and__4221__auto__ = cljs.core.not(self__.open_QMARK_);
if(and__4221__auto__){
return root_QMARK_;
} else {
return and__4221__auto__;
}
})())?copy_elem:null)], null)], null);
}));

(repl_tooling.editor_integration.renderer.Tagged.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k144203){
var self__ = this;
var this__4479__auto____$1 = this;
var G__144308 = k144203;
var G__144308__$1 = (((G__144308 instanceof cljs.core.Keyword))?G__144308.fqn:null);
switch (G__144308__$1) {
case "tag":
case "subelement":
case "editor-state":
case "open?":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k144203);

}
}));

(repl_tooling.editor_integration.renderer.Tagged.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__144202){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__144310 = cljs.core.keyword_identical_QMARK_;
var expr__144311 = k__4481__auto__;
if(cljs.core.truth_((pred__144310.cljs$core$IFn$_invoke$arity$2 ? pred__144310.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tag","tag",-1290361223),expr__144311) : pred__144310.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223),expr__144311)))){
return (new repl_tooling.editor_integration.renderer.Tagged(G__144202,self__.subelement,self__.editor_state,self__.open_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__144310.cljs$core$IFn$_invoke$arity$2 ? pred__144310.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"subelement","subelement",862507584),expr__144311) : pred__144310.call(null,new cljs.core.Keyword(null,"subelement","subelement",862507584),expr__144311)))){
return (new repl_tooling.editor_integration.renderer.Tagged(self__.tag,G__144202,self__.editor_state,self__.open_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__144310.cljs$core$IFn$_invoke$arity$2 ? pred__144310.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"editor-state","editor-state",579582138),expr__144311) : pred__144310.call(null,new cljs.core.Keyword(null,"editor-state","editor-state",579582138),expr__144311)))){
return (new repl_tooling.editor_integration.renderer.Tagged(self__.tag,self__.subelement,G__144202,self__.open_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__144310.cljs$core$IFn$_invoke$arity$2 ? pred__144310.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"open?","open?",1238443125),expr__144311) : pred__144310.call(null,new cljs.core.Keyword(null,"open?","open?",1238443125),expr__144311)))){
return (new repl_tooling.editor_integration.renderer.Tagged(self__.tag,self__.subelement,self__.editor_state,G__144202,self__.__meta,self__.__extmap,null));
} else {
return (new repl_tooling.editor_integration.renderer.Tagged(self__.tag,self__.subelement,self__.editor_state,self__.open_QMARK_,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__144202),null));
}
}
}
}
}));

(repl_tooling.editor_integration.renderer.Tagged.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"tag","tag",-1290361223),self__.tag,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"subelement","subelement",862507584),self__.subelement,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"editor-state","editor-state",579582138),self__.editor_state,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"open?","open?",1238443125),self__.open_QMARK_,null))], null),self__.__extmap));
}));

(repl_tooling.editor_integration.renderer.Tagged.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__144202){
var self__ = this;
var this__4471__auto____$1 = this;
return (new repl_tooling.editor_integration.renderer.Tagged(self__.tag,self__.subelement,self__.editor_state,self__.open_QMARK_,G__144202,self__.__extmap,self__.__hash));
}));

(repl_tooling.editor_integration.renderer.Tagged.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4478__auto__,(0)),cljs.core._nth(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(repl_tooling.editor_integration.renderer.Tagged.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.Symbol(null,"subelement","subelement",-1791928185,null),new cljs.core.Symbol(null,"editor-state","editor-state",-2074853631,null),new cljs.core.Symbol(null,"open?","open?",-1415992644,null)], null);
}));

(repl_tooling.editor_integration.renderer.Tagged.cljs$lang$type = true);

(repl_tooling.editor_integration.renderer.Tagged.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"repl-tooling.editor-integration.renderer/Tagged",null,(1),null));
}));

(repl_tooling.editor_integration.renderer.Tagged.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"repl-tooling.editor-integration.renderer/Tagged");
}));

/**
 * Positional factory function for repl-tooling.editor-integration.renderer/Tagged.
 */
repl_tooling.editor_integration.renderer.__GT_Tagged = (function repl_tooling$editor_integration$renderer$__GT_Tagged(tag,subelement,editor_state,open_QMARK_){
return (new repl_tooling.editor_integration.renderer.Tagged(tag,subelement,editor_state,open_QMARK_,null,null,null));
});

/**
 * Factory function for repl-tooling.editor-integration.renderer/Tagged, taking a map of keywords to field values.
 */
repl_tooling.editor_integration.renderer.map__GT_Tagged = (function repl_tooling$editor_integration$renderer$map__GT_Tagged(G__144208){
var extmap__4512__auto__ = (function (){var G__144326 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__144208,new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"subelement","subelement",862507584),new cljs.core.Keyword(null,"editor-state","editor-state",579582138),new cljs.core.Keyword(null,"open?","open?",1238443125)], 0));
if(cljs.core.record_QMARK_(G__144208)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__144326);
} else {
return G__144326;
}
})();
return (new repl_tooling.editor_integration.renderer.Tagged(new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(G__144208),new cljs.core.Keyword(null,"subelement","subelement",862507584).cljs$core$IFn$_invoke$arity$1(G__144208),new cljs.core.Keyword(null,"editor-state","editor-state",579582138).cljs$core$IFn$_invoke$arity$1(G__144208),new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(G__144208),null,cljs.core.not_empty(extmap__4512__auto__),null));
});


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
 * @implements {repl_tooling.editor_integration.renderer.protocols.Renderable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
repl_tooling.editor_integration.renderer.IncompleteObj = (function (incomplete,repl,editor_state,__meta,__extmap,__hash){
this.incomplete = incomplete;
this.repl = repl;
this.editor_state = editor_state;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(repl_tooling.editor_integration.renderer.IncompleteObj.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(repl_tooling.editor_integration.renderer.IncompleteObj.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k144334,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__144344 = k144334;
var G__144344__$1 = (((G__144344 instanceof cljs.core.Keyword))?G__144344.fqn:null);
switch (G__144344__$1) {
case "incomplete":
return self__.incomplete;

break;
case "repl":
return self__.repl;

break;
case "editor-state":
return self__.editor_state;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k144334,else__4475__auto__);

}
}));

(repl_tooling.editor_integration.renderer.IncompleteObj.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__144349){
var vec__144350 = p__144349;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__144350,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__144350,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(repl_tooling.editor_integration.renderer.IncompleteObj.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#repl-tooling.editor-integration.renderer.IncompleteObj{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"incomplete","incomplete",-998567478),self__.incomplete],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"repl","repl",-35398667),self__.repl],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"editor-state","editor-state",579582138),self__.editor_state],null))], null),self__.__extmap));
}));

(repl_tooling.editor_integration.renderer.IncompleteObj.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__144333){
var self__ = this;
var G__144333__$1 = this;
return (new cljs.core.RecordIter((0),G__144333__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"incomplete","incomplete",-998567478),new cljs.core.Keyword(null,"repl","repl",-35398667),new cljs.core.Keyword(null,"editor-state","editor-state",579582138)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(repl_tooling.editor_integration.renderer.IncompleteObj.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(repl_tooling.editor_integration.renderer.IncompleteObj.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new repl_tooling.editor_integration.renderer.IncompleteObj(self__.incomplete,self__.repl,self__.editor_state,self__.__meta,self__.__extmap,self__.__hash));
}));

(repl_tooling.editor_integration.renderer.IncompleteObj.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
}));

(repl_tooling.editor_integration.renderer.IncompleteObj.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (coll__4469__auto__){
return (-1520185832 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
})(this__4468__auto____$1);
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(repl_tooling.editor_integration.renderer.IncompleteObj.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this144335,other144336){
var self__ = this;
var this144335__$1 = this;
return (((!((other144336 == null)))) && ((((this144335__$1.constructor === other144336.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this144335__$1.incomplete,other144336.incomplete)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this144335__$1.repl,other144336.repl)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this144335__$1.editor_state,other144336.editor_state)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this144335__$1.__extmap,other144336.__extmap)))))))))));
}));

(repl_tooling.editor_integration.renderer.IncompleteObj.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"incomplete","incomplete",-998567478),null,new cljs.core.Keyword(null,"repl","repl",-35398667),null,new cljs.core.Keyword(null,"editor-state","editor-state",579582138),null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new repl_tooling.editor_integration.renderer.IncompleteObj(self__.incomplete,self__.repl,self__.editor_state,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(repl_tooling.editor_integration.renderer.IncompleteObj.prototype.repl_tooling$editor_integration$renderer$protocols$Renderable$ = cljs.core.PROTOCOL_SENTINEL);

(repl_tooling.editor_integration.renderer.IncompleteObj.prototype.repl_tooling$editor_integration$renderer$protocols$Renderable$as_text$arity$3 = (function (_,ratom,___$1){
var self__ = this;
var ___$2 = this;
var more = repl_tooling.eval.get_more_fn(self__.incomplete);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),"...",(function (callback){
var G__144390 = self__.repl;
var G__144391 = (function (p1__144330_SHARP_){
cljs.core.reset_BANG_(ratom,cljs.core.deref(repl_tooling.editor_integration.renderer.protocols.as_renderable(p1__144330_SHARP_,self__.repl,self__.editor_state)));

return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
});
return (more.cljs$core$IFn$_invoke$arity$2 ? more.cljs$core$IFn$_invoke$arity$2(G__144390,G__144391) : more.call(null,G__144390,G__144391));
})], null);
}));

(repl_tooling.editor_integration.renderer.IncompleteObj.prototype.repl_tooling$editor_integration$renderer$protocols$Renderable$as_html$arity$3 = (function (_,ratom,___$1){
var self__ = this;
var ___$2 = this;
var more = repl_tooling.eval.get_more_fn(self__.incomplete);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"incomplete-obj"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
e.preventDefault();

e.stopPropagation();

var G__144396 = self__.repl;
var G__144397 = (function (p1__144332_SHARP_){
return cljs.core.reset_BANG_(ratom,cljs.core.deref(repl_tooling.editor_integration.renderer.protocols.as_renderable(p1__144332_SHARP_,self__.repl,self__.editor_state)));
});
return (more.cljs$core$IFn$_invoke$arity$2 ? more.cljs$core$IFn$_invoke$arity$2(G__144396,G__144397) : more.call(null,G__144396,G__144397));
})], null),"..."], null)], null);
}));

(repl_tooling.editor_integration.renderer.IncompleteObj.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k144334){
var self__ = this;
var this__4479__auto____$1 = this;
var G__144400 = k144334;
var G__144400__$1 = (((G__144400 instanceof cljs.core.Keyword))?G__144400.fqn:null);
switch (G__144400__$1) {
case "incomplete":
case "repl":
case "editor-state":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k144334);

}
}));

(repl_tooling.editor_integration.renderer.IncompleteObj.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__144333){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__144404 = cljs.core.keyword_identical_QMARK_;
var expr__144405 = k__4481__auto__;
if(cljs.core.truth_((pred__144404.cljs$core$IFn$_invoke$arity$2 ? pred__144404.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"incomplete","incomplete",-998567478),expr__144405) : pred__144404.call(null,new cljs.core.Keyword(null,"incomplete","incomplete",-998567478),expr__144405)))){
return (new repl_tooling.editor_integration.renderer.IncompleteObj(G__144333,self__.repl,self__.editor_state,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__144404.cljs$core$IFn$_invoke$arity$2 ? pred__144404.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"repl","repl",-35398667),expr__144405) : pred__144404.call(null,new cljs.core.Keyword(null,"repl","repl",-35398667),expr__144405)))){
return (new repl_tooling.editor_integration.renderer.IncompleteObj(self__.incomplete,G__144333,self__.editor_state,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__144404.cljs$core$IFn$_invoke$arity$2 ? pred__144404.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"editor-state","editor-state",579582138),expr__144405) : pred__144404.call(null,new cljs.core.Keyword(null,"editor-state","editor-state",579582138),expr__144405)))){
return (new repl_tooling.editor_integration.renderer.IncompleteObj(self__.incomplete,self__.repl,G__144333,self__.__meta,self__.__extmap,null));
} else {
return (new repl_tooling.editor_integration.renderer.IncompleteObj(self__.incomplete,self__.repl,self__.editor_state,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__144333),null));
}
}
}
}));

(repl_tooling.editor_integration.renderer.IncompleteObj.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"incomplete","incomplete",-998567478),self__.incomplete,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"repl","repl",-35398667),self__.repl,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"editor-state","editor-state",579582138),self__.editor_state,null))], null),self__.__extmap));
}));

(repl_tooling.editor_integration.renderer.IncompleteObj.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__144333){
var self__ = this;
var this__4471__auto____$1 = this;
return (new repl_tooling.editor_integration.renderer.IncompleteObj(self__.incomplete,self__.repl,self__.editor_state,G__144333,self__.__extmap,self__.__hash));
}));

(repl_tooling.editor_integration.renderer.IncompleteObj.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4478__auto__,(0)),cljs.core._nth(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(repl_tooling.editor_integration.renderer.IncompleteObj.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"incomplete","incomplete",641964049,null),new cljs.core.Symbol(null,"repl","repl",1605132860,null),new cljs.core.Symbol(null,"editor-state","editor-state",-2074853631,null)], null);
}));

(repl_tooling.editor_integration.renderer.IncompleteObj.cljs$lang$type = true);

(repl_tooling.editor_integration.renderer.IncompleteObj.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"repl-tooling.editor-integration.renderer/IncompleteObj",null,(1),null));
}));

(repl_tooling.editor_integration.renderer.IncompleteObj.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"repl-tooling.editor-integration.renderer/IncompleteObj");
}));

/**
 * Positional factory function for repl-tooling.editor-integration.renderer/IncompleteObj.
 */
repl_tooling.editor_integration.renderer.__GT_IncompleteObj = (function repl_tooling$editor_integration$renderer$__GT_IncompleteObj(incomplete,repl,editor_state){
return (new repl_tooling.editor_integration.renderer.IncompleteObj(incomplete,repl,editor_state,null,null,null));
});

/**
 * Factory function for repl-tooling.editor-integration.renderer/IncompleteObj, taking a map of keywords to field values.
 */
repl_tooling.editor_integration.renderer.map__GT_IncompleteObj = (function repl_tooling$editor_integration$renderer$map__GT_IncompleteObj(G__144339){
var extmap__4512__auto__ = (function (){var G__144422 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__144339,new cljs.core.Keyword(null,"incomplete","incomplete",-998567478),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"repl","repl",-35398667),new cljs.core.Keyword(null,"editor-state","editor-state",579582138)], 0));
if(cljs.core.record_QMARK_(G__144339)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__144422);
} else {
return G__144422;
}
})();
return (new repl_tooling.editor_integration.renderer.IncompleteObj(new cljs.core.Keyword(null,"incomplete","incomplete",-998567478).cljs$core$IFn$_invoke$arity$1(G__144339),new cljs.core.Keyword(null,"repl","repl",-35398667).cljs$core$IFn$_invoke$arity$1(G__144339),new cljs.core.Keyword(null,"editor-state","editor-state",579582138).cljs$core$IFn$_invoke$arity$1(G__144339),null,cljs.core.not_empty(extmap__4512__auto__),null));
});

repl_tooling.editor_integration.renderer.link_for_more_trace = (function repl_tooling$editor_integration$renderer$link_for_more_trace(repl,ratom,more_trace,more_str,callback_QMARK_){
if(cljs.core.truth_(more_trace)){
return (function (e){
if(cljs.core.truth_(callback_QMARK_)){
} else {
e.preventDefault();

e.stopPropagation();
}

var G__144429 = repl;
var G__144430 = (function (p1__144424_SHARP_){
cljs.core.reset_BANG_(ratom,p1__144424_SHARP_);

if(cljs.core.truth_(callback_QMARK_)){
return (e.cljs$core$IFn$_invoke$arity$0 ? e.cljs$core$IFn$_invoke$arity$0() : e.call(null));
} else {
return null;
}
});
return (more_trace.cljs$core$IFn$_invoke$arity$2 ? more_trace.cljs$core$IFn$_invoke$arity$2(G__144429,G__144430) : more_trace.call(null,G__144429,G__144430));
});
} else {
if(cljs.core.truth_(more_str)){
return (function (e){
if(cljs.core.truth_(callback_QMARK_)){
} else {
e.preventDefault();

e.stopPropagation();
}

var G__144433 = repl;
var G__144434 = (function (p1__144425_SHARP_){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(ratom,cljs.core.assoc,(2),p1__144425_SHARP_);

if(cljs.core.truth_(callback_QMARK_)){
return (e.cljs$core$IFn$_invoke$arity$0 ? e.cljs$core$IFn$_invoke$arity$0() : e.call(null));
} else {
return null;
}
});
return (more_str.cljs$core$IFn$_invoke$arity$2 ? more_str.cljs$core$IFn$_invoke$arity$2(G__144433,G__144434) : more_str.call(null,G__144433,G__144434));
});
} else {
return null;
}
}
});
repl_tooling.editor_integration.renderer.trace_span = (function repl_tooling$editor_integration$renderer$trace_span(file,row){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"file"], null)," (",file,":",row,")"], null);
});
repl_tooling.editor_integration.renderer.trace_link = (function repl_tooling$editor_integration$renderer$trace_link(var$,file,row,editor_state,cache_exists_QMARK_){
var map__144438 = new cljs.core.Keyword("editor","callbacks","editor/callbacks",1179124831).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(editor_state));
var map__144438__$1 = cljs.core.__destructure_map(map__144438);
var open_editor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__144438__$1,new cljs.core.Keyword(null,"open-editor","open-editor",1337424020));
var notify = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__144438__$1,new cljs.core.Keyword(null,"notify","notify",-1256867814));
var map__144439 = new cljs.core.Keyword("editor","features","editor/features",1302258665).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(editor_state));
var map__144439__$1 = cljs.core.__destructure_map(map__144439);
var eql = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__144439__$1,new cljs.core.Keyword(null,"eql","eql",1414892383));
var aux_repl = new cljs.core.Keyword("clj","aux","clj/aux",-10310625).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(editor_state));
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.file","a.file",595781754),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
e.preventDefault();

e.stopPropagation();

if(cljs.core.truth_(cache_exists_QMARK_)){
var G__144446 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file-name","file-name",-1654217259),file,new cljs.core.Keyword(null,"line","line",212345235),(row - (1))], null);
return (open_editor.cljs$core$IFn$_invoke$arity$1 ? open_editor.cljs$core$IFn$_invoke$arity$1(G__144446) : open_editor.call(null,G__144446));
} else {
return promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(repl_tooling.editor_integration.commands.run_callback_BANG_.cljs$core$IFn$_invoke$arity$variadic(editor_state,new cljs.core.Keyword(null,"file-exists","file-exists",1541082726),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([file], 0)),(function (exists_QMARK_){
return promesa.protocols._bind(null,(function (___31810__auto__){
return promesa.protocols._promise((cljs.core.truth_(exists_QMARK_)?(function (){var G__144448 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file-name","file-name",-1654217259),file,new cljs.core.Keyword(null,"line","line",212345235),(row - (1))], null);
return (open_editor.cljs$core$IFn$_invoke$arity$1 ? open_editor.cljs$core$IFn$_invoke$arity$1(G__144448) : open_editor.call(null,G__144448));
})():repl_tooling.editor_integration.definition.goto_definition(editor_state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("ex","function-name","ex/function-name",621896913),var$,new cljs.core.Keyword("ex","filename","ex/filename",-1428836124),file,new cljs.core.Keyword("ex","row","ex/row",-570134166),row], null))));
}));
}));
}));
}
})], null)," (",file,":",row,")"], null);
});
repl_tooling.editor_integration.renderer.prepare_source_map = (function repl_tooling$editor_integration$renderer$prepare_source_map(editor_state,js_filename){
return promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(new cljs.core.Keyword(null,"run-callback","run-callback",-1601688857).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(editor_state)),(function (run_callback){
return promesa.protocols._bind([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_filename),".map"].join(''),(function (file_name){
return promesa.protocols._bind((run_callback.cljs$core$IFn$_invoke$arity$2 ? run_callback.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"read-file","read-file",-1584858601),file_name) : run_callback.call(null,new cljs.core.Keyword(null,"read-file","read-file",-1584858601),file_name)),(function (contents){
return promesa.protocols._bind(null,(function (___31810__auto__){
return promesa.protocols._promise((cljs.core.truth_(contents)?(new shadow.js.shim.module$source_map.SourceMapConsumer(contents)):null));
}));
}));
}));
}));
}));
});
repl_tooling.editor_integration.renderer.resolve_source = (function repl_tooling$editor_integration$renderer$resolve_source(sourcemap,row,col){
var temp__5753__auto__ = (function (){var G__144461 = sourcemap;
if((G__144461 == null)){
return null;
} else {
return G__144461.originalPositionFor(({"line": (row | (0)), "column": (col | (0))}));
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var source = temp__5753__auto__;
if(cljs.core.truth_(source.source)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [source.source,source.line,source.column], null);
} else {
return null;
}
} else {
return null;
}
});
repl_tooling.editor_integration.renderer.demunge_js_name = (function repl_tooling$editor_integration$renderer$demunge_js_name(js_name){
return cljs.core.demunge(clojure.string.replace(clojure.string.replace(js_name,/\$/,"."),/(.*)\.(.*)$/,"$1/$2"));
});
repl_tooling.editor_integration.renderer.trace_string = (function repl_tooling$editor_integration$renderer$trace_string(p_source,idx,ratom,editor_state){
var map__144480 = new cljs.core.Keyword("editor","callbacks","editor/callbacks",1179124831).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(editor_state));
var map__144480__$1 = cljs.core.__destructure_map(map__144480);
var open_editor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__144480__$1,new cljs.core.Keyword(null,"open-editor","open-editor",1337424020));
var notify = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__144480__$1,new cljs.core.Keyword(null,"notify","notify",-1256867814));
var aux_repl = new cljs.core.Keyword("clj","aux","clj/aux",-10310625).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(editor_state));
var trace = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(ratom),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj","obj",981763962),new cljs.core.Keyword(null,"trace","trace",-1082747415),idx], null));
var info = clojure.string.replace(trace,/\(.*/,"");
var filename_match = (function (){var G__144482 = cljs.core.re_find(/\(.*\)/,trace);
if((G__144482 == null)){
return null;
} else {
return clojure.string.replace(G__144482,/[\(\)]/,"");
}
})();
var local_row = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(clojure.string.split.cljs$core$IFn$_invoke$arity$2(filename_match,/:/));
var loaded_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var fun = (function (){
var vec__144486 = cljs.core.deref(local_row);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__144486,(0),null);
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__144486,(1),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__144486,(2),null);
if(cljs.core.truth_(cljs.core.deref(loaded_QMARK_))){
} else {
promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(cljs.core.deref(local_row),(function (p__144507){
var vec__144508 = p__144507;
var file__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__144508,(0),null);
var row__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__144508,(1),null);
var col__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__144508,(2),null);
return promesa.protocols._bind((p_source.cljs$core$IFn$_invoke$arity$1 ? p_source.cljs$core$IFn$_invoke$arity$1(file__$1) : p_source.call(null,file__$1)),(function (file_contents){
return promesa.protocols._bind(repl_tooling.editor_integration.renderer.resolve_source(file_contents,row__$1,col__$1),(function (data){
return promesa.protocols._bind(null,(function (___31810__auto__){
return promesa.protocols._bind(cljs.core.reset_BANG_(loaded_QMARK_,true),(function (___31809__auto__){
return promesa.protocols._promise((cljs.core.truth_(data)?cljs.core.reset_BANG_(local_row,data):null));
}));
}));
}));
}));
}));
}));
}

if(cljs.core.truth_(filename_match)){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.class","span.class",-21455082),repl_tooling.editor_integration.renderer.demunge_js_name(info),"(",new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.file","a.file",595781754),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
e.preventDefault();

e.stopPropagation();

return promesa.protocols._bind(null,(function (___31820__auto__){
return promesa.protocols._bind(repl_tooling.editor_integration.commands.run_callback_BANG_.cljs$core$IFn$_invoke$arity$variadic(editor_state,new cljs.core.Keyword(null,"file-exists","file-exists",1541082726),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([file], 0)),(function (exists_QMARK_){
return promesa.protocols._bind(null,(function (___31810__auto__){
return promesa.protocols._promise((cljs.core.truth_(exists_QMARK_)?(function (){var G__144535 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"file-name","file-name",-1654217259),file,new cljs.core.Keyword(null,"line","line",212345235),(row - (1)),new cljs.core.Keyword(null,"column","column",2078222095),(col - (1))], null);
return (open_editor.cljs$core$IFn$_invoke$arity$1 ? open_editor.cljs$core$IFn$_invoke$arity$1(G__144535) : open_editor.call(null,G__144535));
})():(function (){var G__144536 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"title","title",636505583),"Can't find file to go"], null);
return (notify.cljs$core$IFn$_invoke$arity$1 ? notify.cljs$core$IFn$_invoke$arity$1(G__144536) : notify.call(null,G__144536));
})()));
}));
}));
}));
})], null),file,":",row,":",col], null),")"], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.stack-line","span.stack-line",1687741273),trace], null);
}
});
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),idx,new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["row","clj-stack"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fun], null)], null);
});
repl_tooling.editor_integration.renderer.to_trace_row = (function repl_tooling$editor_integration$renderer$to_trace_row(p_source,repl,ratom,editor_state,idx,trace){
var vec__144543 = trace;
var class$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__144543,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__144543,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__144543,(2),null);
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__144543,(3),null);
var link_for_more = repl_tooling.editor_integration.renderer.link_for_more_trace(repl,reagent.core.cursor(ratom,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj","obj",981763962),new cljs.core.Keyword(null,"trace","trace",-1082747415),idx], null)),repl_tooling.eval.get_more_fn(trace),repl_tooling.eval.get_more_fn(file),false);
var clj_file_QMARK_ = cljs.core.re_find(/\.clj.?$/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(file));
var var$ = (function (){var G__144548 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$);
if(cljs.core.truth_(clj_file_QMARK_)){
return cljs.core.demunge(G__144548);
} else {
return G__144548;
}
})();
if(typeof trace === 'string'){
return repl_tooling.editor_integration.renderer.trace_string(p_source,idx,ratom,editor_state);
} else {
if(cljs.core.truth_(link_for_more)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),idx,new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["row","incomplete"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"in ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),link_for_more], null),"..."], null)], null)], null);
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((-1),row)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),idx,new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["row",(cljs.core.truth_(clj_file_QMARK_)?"clj-stack":"stack")], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"in ",(cljs.core.truth_(var$)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"class"], null),var$], null):null),(cljs.core.truth_((function (){var or__4223__auto__ = clj_file_QMARK_;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return (method == null);
}
})())?null:new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"method"], null),".",method], null)),(cljs.core.truth_(clj_file_QMARK_)?repl_tooling.editor_integration.renderer.trace_link(var$,file,row,editor_state,null):(function (){var exists_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var res = (function (){
if(cljs.core.truth_(cljs.core.deref(exists_QMARK_))){
return repl_tooling.editor_integration.renderer.trace_link(var$,file,row,editor_state,true);
} else {
return repl_tooling.editor_integration.renderer.trace_span(file,row);
}
});
repl_tooling.editor_integration.commands.run_callback_BANG_.cljs$core$IFn$_invoke$arity$variadic(editor_state,new cljs.core.Keyword(null,"file-exists","file-exists",1541082726),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)], 0)).then((function (p1__144539_SHARP_){
return cljs.core.reset_BANG_(exists_QMARK_,p1__144539_SHARP_);
}));

return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null);
})())], null)], null);
} else {
return null;
}
}
}
});
repl_tooling.editor_integration.renderer.to_trace_row_txt = (function repl_tooling$editor_integration$renderer$to_trace_row_txt(repl,ratom,idx,trace){
var vec__144558 = trace;
var class$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__144558,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__144558,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__144558,(2),null);
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__144558,(3),null);
var link_for_more = repl_tooling.editor_integration.renderer.link_for_more_trace(repl,reagent.core.cursor(ratom,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj","obj",981763962),new cljs.core.Keyword(null,"trace","trace",-1082747415),idx], null)),repl_tooling.eval.get_more_fn(trace),repl_tooling.eval.get_more_fn(file),true);
var clj_file_QMARK_ = cljs.core.re_find(/\.clj?$/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(file));
if(typeof trace === 'string'){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),trace], null)], null);
} else {
if(cljs.core.truth_(link_for_more)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),"in "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),"...",link_for_more], null)], null);
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((-1),row)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),["in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__144563 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$);
if(cljs.core.truth_(clj_file_QMARK_)){
return cljs.core.demunge(G__144563);
} else {
return G__144563;
}
})()),(cljs.core.truth_(clj_file_QMARK_)?null:[".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(method)].join(''))," (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(row),")"].join('')], null)], null);
} else {
return null;
}
}
}
});

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
 * @implements {repl_tooling.editor_integration.renderer.protocols.Renderable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
repl_tooling.editor_integration.renderer.ExceptionObj = (function (obj,add_data,repl,editor_state,__meta,__extmap,__hash){
this.obj = obj;
this.add_data = add_data;
this.repl = repl;
this.editor_state = editor_state;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(repl_tooling.editor_integration.renderer.ExceptionObj.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(repl_tooling.editor_integration.renderer.ExceptionObj.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k144571,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__144579 = k144571;
var G__144579__$1 = (((G__144579 instanceof cljs.core.Keyword))?G__144579.fqn:null);
switch (G__144579__$1) {
case "obj":
return self__.obj;

break;
case "add-data":
return self__.add_data;

break;
case "repl":
return self__.repl;

break;
case "editor-state":
return self__.editor_state;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k144571,else__4475__auto__);

}
}));

(repl_tooling.editor_integration.renderer.ExceptionObj.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__144580){
var vec__144581 = p__144580;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__144581,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__144581,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(repl_tooling.editor_integration.renderer.ExceptionObj.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#repl-tooling.editor-integration.renderer.ExceptionObj{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"add-data","add-data",1561339203),self__.add_data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"repl","repl",-35398667),self__.repl],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"editor-state","editor-state",579582138),self__.editor_state],null))], null),self__.__extmap));
}));

(repl_tooling.editor_integration.renderer.ExceptionObj.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__144570){
var self__ = this;
var G__144570__$1 = this;
return (new cljs.core.RecordIter((0),G__144570__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj","obj",981763962),new cljs.core.Keyword(null,"add-data","add-data",1561339203),new cljs.core.Keyword(null,"repl","repl",-35398667),new cljs.core.Keyword(null,"editor-state","editor-state",579582138)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(repl_tooling.editor_integration.renderer.ExceptionObj.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(repl_tooling.editor_integration.renderer.ExceptionObj.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new repl_tooling.editor_integration.renderer.ExceptionObj(self__.obj,self__.add_data,self__.repl,self__.editor_state,self__.__meta,self__.__extmap,self__.__hash));
}));

(repl_tooling.editor_integration.renderer.ExceptionObj.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
}));

(repl_tooling.editor_integration.renderer.ExceptionObj.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (coll__4469__auto__){
return (-1937632811 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
})(this__4468__auto____$1);
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(repl_tooling.editor_integration.renderer.ExceptionObj.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this144572,other144573){
var self__ = this;
var this144572__$1 = this;
return (((!((other144573 == null)))) && ((((this144572__$1.constructor === other144573.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this144572__$1.obj,other144573.obj)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this144572__$1.add_data,other144573.add_data)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this144572__$1.repl,other144573.repl)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this144572__$1.editor_state,other144573.editor_state)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this144572__$1.__extmap,other144573.__extmap)))))))))))));
}));

(repl_tooling.editor_integration.renderer.ExceptionObj.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"add-data","add-data",1561339203),null,new cljs.core.Keyword(null,"repl","repl",-35398667),null,new cljs.core.Keyword(null,"editor-state","editor-state",579582138),null,new cljs.core.Keyword(null,"obj","obj",981763962),null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new repl_tooling.editor_integration.renderer.ExceptionObj(self__.obj,self__.add_data,self__.repl,self__.editor_state,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(repl_tooling.editor_integration.renderer.ExceptionObj.prototype.repl_tooling$editor_integration$renderer$protocols$Renderable$ = cljs.core.PROTOCOL_SENTINEL);

(repl_tooling.editor_integration.renderer.ExceptionObj.prototype.repl_tooling$editor_integration$renderer$protocols$Renderable$as_text$arity$3 = (function (_,ratom,root_QMARK_){
var self__ = this;
var ___$1 = this;
var map__144604 = self__.obj;
var map__144604__$1 = cljs.core.__destructure_map(map__144604);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__144604__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__144604__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__144604__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var ex = repl_tooling.editor_integration.renderer.protocols.as_text(cljs.core.deref(message),message,true);
var ex__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(ex),new cljs.core.Keyword(null,"row","row",-570139521)))?cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(ex,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),(function (p1__144566_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(type),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__144566_SHARP_)].join('');
})):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"row","row",-570139521),cljs.core.update.cljs$core$IFn$_invoke$arity$3(ex,(1),(function (p1__144567_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(type),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__144567_SHARP_)].join('');
}))], null));
var traces = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(repl_tooling.editor_integration.renderer.to_trace_row_txt,self__.repl,ratom),cljs.core.range.cljs$core$IFn$_invoke$arity$0(),repl_tooling.eval.without_ellision(trace));
if(cljs.core.truth_(self__.add_data)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.conj,ex__$1,repl_tooling.editor_integration.renderer.protocols.as_text(cljs.core.deref(self__.add_data),self__.add_data,root_QMARK_),traces);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,ex__$1,traces);
}
}));

(repl_tooling.editor_integration.renderer.ExceptionObj.prototype.repl_tooling$editor_integration$renderer$protocols$Renderable$as_html$arity$3 = (function (_,ratom,root_QMARK_){
var self__ = this;
var ___$1 = this;
var map__144637 = self__.obj;
var map__144637__$1 = cljs.core.__destructure_map(map__144637);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__144637__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__144637__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__144637__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var p_source = cljs.core.memoize((function (p1__144568_SHARP_){
return repl_tooling.editor_integration.renderer.prepare_source_map(self__.editor_state,p1__144568_SHARP_);
}));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"exception row"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"description"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"ex-kind"], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)], null),": ",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [repl_tooling.editor_integration.renderer.protocols.as_html,cljs.core.deref(message),message,root_QMARK_], null)], null),(cljs.core.truth_((function (){var and__4221__auto__ = self__.add_data;
if(cljs.core.truth_(and__4221__auto__)){
return root_QMARK_;
} else {
return and__4221__auto__;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"children additional"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [repl_tooling.editor_integration.renderer.protocols.as_html,cljs.core.deref(self__.add_data),self__.add_data,root_QMARK_], null)], null):null),(cljs.core.truth_(root_QMARK_)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"children"], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$variadic(repl_tooling.editor_integration.renderer.to_trace_row,p_source,self__.repl,ratom,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.editor_state], 0)),cljs.core.range.cljs$core$IFn$_invoke$arity$0(),repl_tooling.eval.without_ellision(trace))),(function (){var temp__5753__auto__ = repl_tooling.eval.get_more_fn(trace);
if(cljs.core.truth_(temp__5753__auto__)){
var more = temp__5753__auto__;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
e.preventDefault();

e.stopPropagation();

var G__144642 = self__.repl;
var G__144643 = (function (p1__144569_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(ratom,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj","obj",981763962),new cljs.core.Keyword(null,"trace","trace",-1082747415)], null),p1__144569_SHARP_);
});
return (more.cljs$core$IFn$_invoke$arity$2 ? more.cljs$core$IFn$_invoke$arity$2(G__144642,G__144643) : more.call(null,G__144642,G__144643));
})], null),"..."], null);
} else {
return null;
}
})()], null):null)], null);
}));

(repl_tooling.editor_integration.renderer.ExceptionObj.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k144571){
var self__ = this;
var this__4479__auto____$1 = this;
var G__144645 = k144571;
var G__144645__$1 = (((G__144645 instanceof cljs.core.Keyword))?G__144645.fqn:null);
switch (G__144645__$1) {
case "obj":
case "add-data":
case "repl":
case "editor-state":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k144571);

}
}));

(repl_tooling.editor_integration.renderer.ExceptionObj.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__144570){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__144646 = cljs.core.keyword_identical_QMARK_;
var expr__144647 = k__4481__auto__;
if(cljs.core.truth_((pred__144646.cljs$core$IFn$_invoke$arity$2 ? pred__144646.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"obj","obj",981763962),expr__144647) : pred__144646.call(null,new cljs.core.Keyword(null,"obj","obj",981763962),expr__144647)))){
return (new repl_tooling.editor_integration.renderer.ExceptionObj(G__144570,self__.add_data,self__.repl,self__.editor_state,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__144646.cljs$core$IFn$_invoke$arity$2 ? pred__144646.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"add-data","add-data",1561339203),expr__144647) : pred__144646.call(null,new cljs.core.Keyword(null,"add-data","add-data",1561339203),expr__144647)))){
return (new repl_tooling.editor_integration.renderer.ExceptionObj(self__.obj,G__144570,self__.repl,self__.editor_state,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__144646.cljs$core$IFn$_invoke$arity$2 ? pred__144646.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"repl","repl",-35398667),expr__144647) : pred__144646.call(null,new cljs.core.Keyword(null,"repl","repl",-35398667),expr__144647)))){
return (new repl_tooling.editor_integration.renderer.ExceptionObj(self__.obj,self__.add_data,G__144570,self__.editor_state,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__144646.cljs$core$IFn$_invoke$arity$2 ? pred__144646.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"editor-state","editor-state",579582138),expr__144647) : pred__144646.call(null,new cljs.core.Keyword(null,"editor-state","editor-state",579582138),expr__144647)))){
return (new repl_tooling.editor_integration.renderer.ExceptionObj(self__.obj,self__.add_data,self__.repl,G__144570,self__.__meta,self__.__extmap,null));
} else {
return (new repl_tooling.editor_integration.renderer.ExceptionObj(self__.obj,self__.add_data,self__.repl,self__.editor_state,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__144570),null));
}
}
}
}
}));

(repl_tooling.editor_integration.renderer.ExceptionObj.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"add-data","add-data",1561339203),self__.add_data,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"repl","repl",-35398667),self__.repl,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"editor-state","editor-state",579582138),self__.editor_state,null))], null),self__.__extmap));
}));

(repl_tooling.editor_integration.renderer.ExceptionObj.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__144570){
var self__ = this;
var this__4471__auto____$1 = this;
return (new repl_tooling.editor_integration.renderer.ExceptionObj(self__.obj,self__.add_data,self__.repl,self__.editor_state,G__144570,self__.__extmap,self__.__hash));
}));

(repl_tooling.editor_integration.renderer.ExceptionObj.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4478__auto__,(0)),cljs.core._nth(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(repl_tooling.editor_integration.renderer.ExceptionObj.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null),new cljs.core.Symbol(null,"add-data","add-data",-1093096566,null),new cljs.core.Symbol(null,"repl","repl",1605132860,null),new cljs.core.Symbol(null,"editor-state","editor-state",-2074853631,null)], null);
}));

(repl_tooling.editor_integration.renderer.ExceptionObj.cljs$lang$type = true);

(repl_tooling.editor_integration.renderer.ExceptionObj.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"repl-tooling.editor-integration.renderer/ExceptionObj",null,(1),null));
}));

(repl_tooling.editor_integration.renderer.ExceptionObj.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"repl-tooling.editor-integration.renderer/ExceptionObj");
}));

/**
 * Positional factory function for repl-tooling.editor-integration.renderer/ExceptionObj.
 */
repl_tooling.editor_integration.renderer.__GT_ExceptionObj = (function repl_tooling$editor_integration$renderer$__GT_ExceptionObj(obj,add_data,repl,editor_state){
return (new repl_tooling.editor_integration.renderer.ExceptionObj(obj,add_data,repl,editor_state,null,null,null));
});

/**
 * Factory function for repl-tooling.editor-integration.renderer/ExceptionObj, taking a map of keywords to field values.
 */
repl_tooling.editor_integration.renderer.map__GT_ExceptionObj = (function repl_tooling$editor_integration$renderer$map__GT_ExceptionObj(G__144575){
var extmap__4512__auto__ = (function (){var G__144668 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__144575,new cljs.core.Keyword(null,"obj","obj",981763962),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"add-data","add-data",1561339203),new cljs.core.Keyword(null,"repl","repl",-35398667),new cljs.core.Keyword(null,"editor-state","editor-state",579582138)], 0));
if(cljs.core.record_QMARK_(G__144575)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__144668);
} else {
return G__144668;
}
})();
return (new repl_tooling.editor_integration.renderer.ExceptionObj(new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(G__144575),new cljs.core.Keyword(null,"add-data","add-data",1561339203).cljs$core$IFn$_invoke$arity$1(G__144575),new cljs.core.Keyword(null,"repl","repl",-35398667).cljs$core$IFn$_invoke$arity$1(G__144575),new cljs.core.Keyword(null,"editor-state","editor-state",579582138).cljs$core$IFn$_invoke$arity$1(G__144575),null,cljs.core.not_empty(extmap__4512__auto__),null));
});


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
 * @implements {repl_tooling.editor_integration.renderer.protocols.Renderable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
repl_tooling.editor_integration.renderer.Patchable = (function (id,value,__meta,__extmap,__hash){
this.id = id;
this.value = value;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(repl_tooling.editor_integration.renderer.Patchable.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(repl_tooling.editor_integration.renderer.Patchable.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k144672,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__144679 = k144672;
var G__144679__$1 = (((G__144679 instanceof cljs.core.Keyword))?G__144679.fqn:null);
switch (G__144679__$1) {
case "id":
return self__.id;

break;
case "value":
return self__.value;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k144672,else__4475__auto__);

}
}));

(repl_tooling.editor_integration.renderer.Patchable.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__144682){
var vec__144684 = p__144682;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__144684,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__144684,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(repl_tooling.editor_integration.renderer.Patchable.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#repl-tooling.editor-integration.renderer.Patchable{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"id","id",-1388402092),self__.id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
}));

(repl_tooling.editor_integration.renderer.Patchable.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__144671){
var self__ = this;
var G__144671__$1 = this;
return (new cljs.core.RecordIter((0),G__144671__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"value","value",305978217)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(repl_tooling.editor_integration.renderer.Patchable.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(repl_tooling.editor_integration.renderer.Patchable.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new repl_tooling.editor_integration.renderer.Patchable(self__.id,self__.value,self__.__meta,self__.__extmap,self__.__hash));
}));

(repl_tooling.editor_integration.renderer.Patchable.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(repl_tooling.editor_integration.renderer.Patchable.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (coll__4469__auto__){
return (-1859183685 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
})(this__4468__auto____$1);
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(repl_tooling.editor_integration.renderer.Patchable.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this144673,other144674){
var self__ = this;
var this144673__$1 = this;
return (((!((other144674 == null)))) && ((((this144673__$1.constructor === other144674.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this144673__$1.id,other144674.id)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this144673__$1.value,other144674.value)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this144673__$1.__extmap,other144674.__extmap)))))))));
}));

(repl_tooling.editor_integration.renderer.Patchable.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),null,new cljs.core.Keyword(null,"id","id",-1388402092),null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new repl_tooling.editor_integration.renderer.Patchable(self__.id,self__.value,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(repl_tooling.editor_integration.renderer.Patchable.prototype.repl_tooling$editor_integration$renderer$protocols$Renderable$ = cljs.core.PROTOCOL_SENTINEL);

(repl_tooling.editor_integration.renderer.Patchable.prototype.repl_tooling$editor_integration$renderer$protocols$Renderable$as_text$arity$3 = (function (_,ratom,root_QMARK_){
var self__ = this;
var ___$1 = this;
return repl_tooling.editor_integration.renderer.protocols.as_text(cljs.core.deref(self__.value),self__.value,root_QMARK_);
}));

(repl_tooling.editor_integration.renderer.Patchable.prototype.repl_tooling$editor_integration$renderer$protocols$Renderable$as_html$arity$3 = (function (self,ratom,root_QMARK_){
var self__ = this;
var self__$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [repl_tooling.editor_integration.renderer.protocols.as_html,cljs.core.deref(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ratom))),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ratom)),root_QMARK_], null);
}));

(repl_tooling.editor_integration.renderer.Patchable.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k144672){
var self__ = this;
var this__4479__auto____$1 = this;
var G__144711 = k144672;
var G__144711__$1 = (((G__144711 instanceof cljs.core.Keyword))?G__144711.fqn:null);
switch (G__144711__$1) {
case "id":
case "value":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k144672);

}
}));

(repl_tooling.editor_integration.renderer.Patchable.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__144671){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__144712 = cljs.core.keyword_identical_QMARK_;
var expr__144713 = k__4481__auto__;
if(cljs.core.truth_((pred__144712.cljs$core$IFn$_invoke$arity$2 ? pred__144712.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),expr__144713) : pred__144712.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),expr__144713)))){
return (new repl_tooling.editor_integration.renderer.Patchable(G__144671,self__.value,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__144712.cljs$core$IFn$_invoke$arity$2 ? pred__144712.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"value","value",305978217),expr__144713) : pred__144712.call(null,new cljs.core.Keyword(null,"value","value",305978217),expr__144713)))){
return (new repl_tooling.editor_integration.renderer.Patchable(self__.id,G__144671,self__.__meta,self__.__extmap,null));
} else {
return (new repl_tooling.editor_integration.renderer.Patchable(self__.id,self__.value,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__144671),null));
}
}
}));

(repl_tooling.editor_integration.renderer.Patchable.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"id","id",-1388402092),self__.id,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"value","value",305978217),self__.value,null))], null),self__.__extmap));
}));

(repl_tooling.editor_integration.renderer.Patchable.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__144671){
var self__ = this;
var this__4471__auto____$1 = this;
return (new repl_tooling.editor_integration.renderer.Patchable(self__.id,self__.value,G__144671,self__.__extmap,self__.__hash));
}));

(repl_tooling.editor_integration.renderer.Patchable.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4478__auto__,(0)),cljs.core._nth(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(repl_tooling.editor_integration.renderer.Patchable.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"value","value",1946509744,null)], null);
}));

(repl_tooling.editor_integration.renderer.Patchable.cljs$lang$type = true);

(repl_tooling.editor_integration.renderer.Patchable.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"repl-tooling.editor-integration.renderer/Patchable",null,(1),null));
}));

(repl_tooling.editor_integration.renderer.Patchable.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"repl-tooling.editor-integration.renderer/Patchable");
}));

/**
 * Positional factory function for repl-tooling.editor-integration.renderer/Patchable.
 */
repl_tooling.editor_integration.renderer.__GT_Patchable = (function repl_tooling$editor_integration$renderer$__GT_Patchable(id,value){
return (new repl_tooling.editor_integration.renderer.Patchable(id,value,null,null,null));
});

/**
 * Factory function for repl-tooling.editor-integration.renderer/Patchable, taking a map of keywords to field values.
 */
repl_tooling.editor_integration.renderer.map__GT_Patchable = (function repl_tooling$editor_integration$renderer$map__GT_Patchable(G__144677){
var extmap__4512__auto__ = (function (){var G__144723 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__144677,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"value","value",305978217)], 0));
if(cljs.core.record_QMARK_(G__144677)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__144723);
} else {
return G__144723;
}
})();
return (new repl_tooling.editor_integration.renderer.Patchable(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(G__144677),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__144677),null,cljs.core.not_empty(extmap__4512__auto__),null));
});

(repl_tooling.editor_helpers.LiteralRender.prototype.repl_tooling$editor_integration$renderer$protocols$Parseable$ = cljs.core.PROTOCOL_SENTINEL);

(repl_tooling.editor_helpers.LiteralRender.prototype.repl_tooling$editor_integration$renderer$protocols$Parseable$as_renderable$arity$3 = (function (obj,repl,editor_state){
var obj__$1 = this;
return reagent.core.atom.cljs$core$IFn$_invoke$arity$1(repl_tooling.editor_integration.renderer.__GT_Leaf(obj__$1,editor_state));
}));

(repl_tooling.editor_helpers.Patchable.prototype.repl_tooling$editor_integration$renderer$protocols$Parseable$ = cljs.core.PROTOCOL_SENTINEL);

(repl_tooling.editor_helpers.Patchable.prototype.repl_tooling$editor_integration$renderer$protocols$Parseable$as_renderable$arity$3 = (function (p__144733,repl,editor_state){
var map__144734 = p__144733;
var map__144734__$1 = cljs.core.__destructure_map(map__144734);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__144734__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__144734__$1,new cljs.core.Keyword(null,"value","value",305978217));
var map__144736 = this;
var map__144736__$1 = cljs.core.__destructure_map(map__144736);
var id__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__144736__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var value__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__144736__$1,new cljs.core.Keyword(null,"value","value",305978217));
return reagent.core.atom.cljs$core$IFn$_invoke$arity$1(repl_tooling.editor_integration.renderer.__GT_Patchable(id__$1,repl_tooling.editor_integration.renderer.protocols.as_renderable(value__$1,repl,editor_state)));
}));

(repl_tooling.editor_helpers.IncompleteObj.prototype.repl_tooling$editor_integration$renderer$protocols$Parseable$ = cljs.core.PROTOCOL_SENTINEL);

(repl_tooling.editor_helpers.IncompleteObj.prototype.repl_tooling$editor_integration$renderer$protocols$Parseable$as_renderable$arity$3 = (function (self,repl,editor_state){
var self__$1 = this;
return reagent.core.atom.cljs$core$IFn$_invoke$arity$1(repl_tooling.editor_integration.renderer.__GT_IncompleteObj(self__$1,repl,editor_state));
}));

goog.object.set(repl_tooling.editor_integration.renderer.protocols.Parseable,"_",true);

goog.object.set(repl_tooling.editor_integration.renderer.protocols.as_renderable,"_",(function (obj,repl,editor_state){
return reagent.core.atom.cljs$core$IFn$_invoke$arity$1(((cljs.core.coll_QMARK_(obj))?repl_tooling.editor_integration.renderer.__GT_indexed(obj,repl,editor_state):repl_tooling.editor_integration.renderer.__GT_Leaf(obj,editor_state)
));
}));

(repl_tooling.editor_helpers.IncompleteStr.prototype.repl_tooling$editor_integration$renderer$protocols$Parseable$ = cljs.core.PROTOCOL_SENTINEL);

(repl_tooling.editor_helpers.IncompleteStr.prototype.repl_tooling$editor_integration$renderer$protocols$Parseable$as_renderable$arity$3 = (function (self,repl,editor_state){
var self__$1 = this;
return reagent.core.atom.cljs$core$IFn$_invoke$arity$1(repl_tooling.editor_integration.renderer.__GT_IncompleteStr(self__$1,repl,editor_state));
}));

(repl_tooling.editor_helpers.WithTag.prototype.repl_tooling$editor_integration$renderer$protocols$Parseable$ = cljs.core.PROTOCOL_SENTINEL);

(repl_tooling.editor_helpers.WithTag.prototype.repl_tooling$editor_integration$renderer$protocols$Parseable$as_renderable$arity$3 = (function (self,repl,editor_state){
var self__$1 = this;
var tag = self__$1.repl_tooling$editor_helpers$Taggable$tag$arity$1(null);
var subelement = repl_tooling.editor_integration.renderer.protocols.as_renderable(self__$1.repl_tooling$editor_helpers$Taggable$obj$arity$1(null),repl,editor_state);
return reagent.core.atom.cljs$core$IFn$_invoke$arity$1(repl_tooling.editor_integration.renderer.__GT_Tagged(tag,subelement,editor_state,false));
}));

(repl_tooling.editor_helpers.Browseable.prototype.repl_tooling$editor_integration$renderer$protocols$Parseable$ = cljs.core.PROTOCOL_SENTINEL);

(repl_tooling.editor_helpers.Browseable.prototype.repl_tooling$editor_integration$renderer$protocols$Parseable$as_renderable$arity$3 = (function (self,repl,editor_state){
var self__$1 = this;
var map__144748 = self__$1;
var map__144748__$1 = cljs.core.__destructure_map(map__144748);
var object = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__144748__$1,new cljs.core.Keyword(null,"object","object",1474613949));
var attributes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__144748__$1,new cljs.core.Keyword(null,"attributes","attributes",-74013604));
return reagent.core.atom.cljs$core$IFn$_invoke$arity$1(repl_tooling.editor_integration.renderer.__GT_ObjWithMore(repl_tooling.editor_integration.renderer.protocols.as_renderable(object,repl,editor_state),repl_tooling.eval.get_more_fn(self__$1),repl_tooling.editor_integration.renderer.protocols.as_renderable(attributes,repl,editor_state),false,repl,editor_state));
}));

(repl_tooling.editor_helpers.Error.prototype.repl_tooling$editor_integration$renderer$protocols$Parseable$ = cljs.core.PROTOCOL_SENTINEL);

(repl_tooling.editor_helpers.Error.prototype.repl_tooling$editor_integration$renderer$protocols$Parseable$as_renderable$arity$3 = (function (self,repl,editor_state){
var self__$1 = this;
var obj = cljs.core.update.cljs$core$IFn$_invoke$arity$5(self__$1,new cljs.core.Keyword(null,"message","message",-406056002),repl_tooling.editor_integration.renderer.protocols.as_renderable,repl,editor_state);
var add_data = (function (){var G__144750 = self__$1;
var G__144750__$1 = (((G__144750 == null))?null:G__144750.add_data);
var G__144750__$2 = (((G__144750__$1 == null))?null:cljs.core.not_empty(G__144750__$1));
if((G__144750__$2 == null)){
return null;
} else {
return repl_tooling.editor_integration.renderer.protocols.as_renderable(G__144750__$2,repl,editor_state);
}
})();
return reagent.core.atom.cljs$core$IFn$_invoke$arity$1(repl_tooling.editor_integration.renderer.__GT_ExceptionObj(obj,add_data,repl,editor_state));
}));

(repl_tooling.editor_helpers.Interactive.prototype.repl_tooling$editor_integration$renderer$protocols$Parseable$ = cljs.core.PROTOCOL_SENTINEL);

(repl_tooling.editor_helpers.Interactive.prototype.repl_tooling$editor_integration$renderer$protocols$Parseable$as_renderable$arity$3 = (function (self,repl,editor_state){
var self__$1 = this;
return reagent.core.atom.cljs$core$IFn$_invoke$arity$1(repl_tooling.editor_integration.renderer.interactive.__GT_Interactive(self__$1.edn,repl,editor_state));
}));
/**
 * Will parse a result that comes from the REPL in a r/atom so that
 * it'll be suitable to be rendered with `view-for-result`
 */
repl_tooling.editor_integration.renderer.parse_result = (function repl_tooling$editor_integration$renderer$parse_result(result,repl,editor_state){
var parsed = repl_tooling.editor_helpers.parse_result(result);
if(cljs.core.contains_QMARK_(parsed,new cljs.core.Keyword(null,"result","result",1415092211))){
return repl_tooling.editor_integration.renderer.protocols.as_renderable(new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(parsed),repl,editor_state);
} else {
var error = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(parsed);
var ex = (function (){var G__144754 = error;
var G__144754__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"ex","ex",-1413771341).cljs$core$IFn$_invoke$arity$1(error))?new cljs.core.Keyword(null,"ex","ex",-1413771341).cljs$core$IFn$_invoke$arity$1(G__144754):G__144754);
if((new cljs.core.Keyword(null,"ex","ex",-1413771341).cljs$core$IFn$_invoke$arity$1(error) instanceof repl_tooling.editor_helpers.Browseable)){
return new cljs.core.Keyword(null,"object","object",1474613949).cljs$core$IFn$_invoke$arity$1(G__144754__$1);
} else {
return G__144754__$1;
}
})();
return cljs.core.with_meta(repl_tooling.editor_integration.renderer.protocols.as_renderable(ex,repl,editor_state),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null));
}
});
/**
 * Renders a view for a result. If it's an error, will return a view
 * suitable for error backtraces. If it's a success, will return a success
 * view. Expects a r/atom that comes from `parse-result`
 */
repl_tooling.editor_integration.renderer.view_for_result = (function repl_tooling$editor_integration$renderer$view_for_result(state){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [repl_tooling.editor_integration.renderer.protocols.as_html,cljs.core.deref(state),state,true], null);
});
/**
 * Renders a view for a result, but in textual format. This view will be
 * in a pseudo-hiccup format, like so:
 * [:row [:expand "+" some-fn]
 *    [:text "(1 2 3 4 5 6"]
 *    [:button "..." some-fn]
 *    [:text ")"]]
 * 
 * Where :row defines a row of text, :text a fragment, :button a text that's
 * associated with some data (to be able to ellide things) and :expand is to
 * make a placeholder that we can expand (+) or collapse (-) the structure
 */
repl_tooling.editor_integration.renderer.txt_for_result = (function repl_tooling$editor_integration$renderer$txt_for_result(state){
return repl_tooling.editor_integration.renderer.assert_root(repl_tooling.editor_integration.renderer.protocols.as_text(cljs.core.deref(state),state,true));
});
repl_tooling.editor_integration.renderer.parse_funs = (function repl_tooling$editor_integration$renderer$parse_funs(funs,last_elem,curr_text,elem){
var txt_size = cljs.core.count(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(elem,(1)));
var curr_row = cljs.core.count(curr_text);
var fun = cljs.core.peek(elem);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (funs__$1,col){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(funs__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [last_elem,col], null),fun);
}),funs,cljs.core.range.cljs$core$IFn$_invoke$arity$2(curr_row,(curr_row + txt_size)));
});
repl_tooling.editor_integration.renderer.parse_elem = (function repl_tooling$editor_integration$renderer$parse_elem(position,lines,funs,depth){
while(true){
var vec__144760 = position;
var elem = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__144760,(0),null);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__144760,(1),null);
var last_elem = (cljs.core.count(lines) - (1));
var indent = (new cljs.core.Delay(((function (position,lines,funs,depth,vec__144760,elem,text,last_elem){
return (function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constantly(" "),cljs.core.range.cljs$core$IFn$_invoke$arity$1(((2) * depth))));
});})(position,lines,funs,depth,vec__144760,elem,text,last_elem))
,null));
var last_line = cljs.core.peek(lines);
var curr_text = ((cljs.core.empty_QMARK_(last_line))?cljs.core.deref(indent):last_line);
var G__144765 = elem;
var G__144765__$1 = (((G__144765 instanceof cljs.core.Keyword))?G__144765.fqn:null);
switch (G__144765__$1) {
case "row":
var G__145495 = cljs.core.rest(position);
var G__145496 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(lines,"");
var G__145497 = funs;
var G__145498 = (depth + (1));
position = G__145495;
lines = G__145496;
funs = G__145497;
depth = G__145498;
continue;

break;
case "text":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(lines,last_elem,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(curr_text),cljs.core.str.cljs$core$IFn$_invoke$arity$1(text)].join('')),funs], null);

break;
case "button":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(lines,last_elem,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(curr_text),cljs.core.str.cljs$core$IFn$_invoke$arity$1(text)].join('')),repl_tooling.editor_integration.renderer.parse_funs(funs,last_elem,curr_text,position)], null);

break;
case "expand":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(lines,last_elem,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(curr_text),cljs.core.str.cljs$core$IFn$_invoke$arity$1(text),"  "].join('')),repl_tooling.editor_integration.renderer.parse_funs(funs,last_elem,curr_text,position)], null);

break;
default:
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (position,lines,funs,depth,G__144765,G__144765__$1,vec__144760,elem,text,last_elem,indent,last_line,curr_text){
return (function (p__144769,position__$1){
var vec__144771 = p__144769;
var lines__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__144771,(0),null);
var funs__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__144771,(1),null);
return (repl_tooling.editor_integration.renderer.parse_elem.cljs$core$IFn$_invoke$arity$4 ? repl_tooling.editor_integration.renderer.parse_elem.cljs$core$IFn$_invoke$arity$4(position__$1,lines__$1,funs__$1,depth) : repl_tooling.editor_integration.renderer.parse_elem.call(null,position__$1,lines__$1,funs__$1,depth));
});})(position,lines,funs,depth,G__144765,G__144765__$1,vec__144760,elem,text,last_elem,indent,last_line,curr_text))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lines,funs], null),position);

}
break;
}
});
repl_tooling.editor_integration.renderer.repr__GT_lines = (function repl_tooling$editor_integration$renderer$repr__GT_lines(repr){
return repl_tooling.editor_integration.renderer.parse_elem(repr,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,(-1));
});

//# sourceMappingURL=repl_tooling.editor_integration.renderer.js.map
