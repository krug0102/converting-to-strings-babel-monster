goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_42103 = (function (this$){
var x__4521__auto__ = (((this$ == null))?null:this$);
var m__4522__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4522__auto__.call(null,this$));
} else {
var m__4519__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4519__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_42103(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_42104 = (function (this$){
var x__4521__auto__ = (((this$ == null))?null:this$);
var m__4522__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4522__auto__.call(null,this$));
} else {
var m__4519__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4519__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_42104(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__41406 = coll;
var G__41407 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__41406,G__41407) : shadow.dom.lazy_native_coll_seq.call(null,G__41406,G__41407));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4223__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__41433 = arguments.length;
switch (G__41433) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__41436 = arguments.length;
switch (G__41436) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__41448 = arguments.length;
switch (G__41448) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__41458 = arguments.length;
switch (G__41458) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__41470 = arguments.length;
switch (G__41470) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__41482 = arguments.length;
switch (G__41482) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4223__auto__ = (!((typeof document !== 'undefined')));
if(or__4223__auto__){
return or__4223__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e41493){if((e41493 instanceof Object)){
var e = e41493;
return console.log("didnt support attachEvent",el,e);
} else {
throw e41493;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4223__auto__ = (!((typeof document !== 'undefined')));
if(or__4223__auto__){
return or__4223__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__41504 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__41505 = null;
var count__41506 = (0);
var i__41507 = (0);
while(true){
if((i__41507 < count__41506)){
var el = chunk__41505.cljs$core$IIndexed$_nth$arity$2(null,i__41507);
var handler_42111__$1 = ((function (seq__41504,chunk__41505,count__41506,i__41507,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__41504,chunk__41505,count__41506,i__41507,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_42111__$1);


var G__42112 = seq__41504;
var G__42113 = chunk__41505;
var G__42114 = count__41506;
var G__42115 = (i__41507 + (1));
seq__41504 = G__42112;
chunk__41505 = G__42113;
count__41506 = G__42114;
i__41507 = G__42115;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__41504);
if(temp__5753__auto__){
var seq__41504__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41504__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__41504__$1);
var G__42116 = cljs.core.chunk_rest(seq__41504__$1);
var G__42117 = c__4649__auto__;
var G__42118 = cljs.core.count(c__4649__auto__);
var G__42119 = (0);
seq__41504 = G__42116;
chunk__41505 = G__42117;
count__41506 = G__42118;
i__41507 = G__42119;
continue;
} else {
var el = cljs.core.first(seq__41504__$1);
var handler_42120__$1 = ((function (seq__41504,chunk__41505,count__41506,i__41507,el,seq__41504__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__41504,chunk__41505,count__41506,i__41507,el,seq__41504__$1,temp__5753__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_42120__$1);


var G__42121 = cljs.core.next(seq__41504__$1);
var G__42122 = null;
var G__42123 = (0);
var G__42124 = (0);
seq__41504 = G__42121;
chunk__41505 = G__42122;
count__41506 = G__42123;
i__41507 = G__42124;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__41521 = arguments.length;
switch (G__41521) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__41535 = cljs.core.seq(events);
var chunk__41536 = null;
var count__41537 = (0);
var i__41538 = (0);
while(true){
if((i__41538 < count__41537)){
var vec__41553 = chunk__41536.cljs$core$IIndexed$_nth$arity$2(null,i__41538);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41553,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41553,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__42126 = seq__41535;
var G__42127 = chunk__41536;
var G__42128 = count__41537;
var G__42129 = (i__41538 + (1));
seq__41535 = G__42126;
chunk__41536 = G__42127;
count__41537 = G__42128;
i__41538 = G__42129;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__41535);
if(temp__5753__auto__){
var seq__41535__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41535__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__41535__$1);
var G__42130 = cljs.core.chunk_rest(seq__41535__$1);
var G__42131 = c__4649__auto__;
var G__42132 = cljs.core.count(c__4649__auto__);
var G__42133 = (0);
seq__41535 = G__42130;
chunk__41536 = G__42131;
count__41537 = G__42132;
i__41538 = G__42133;
continue;
} else {
var vec__41559 = cljs.core.first(seq__41535__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41559,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41559,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__42134 = cljs.core.next(seq__41535__$1);
var G__42135 = null;
var G__42136 = (0);
var G__42137 = (0);
seq__41535 = G__42134;
chunk__41536 = G__42135;
count__41537 = G__42136;
i__41538 = G__42137;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__41564 = cljs.core.seq(styles);
var chunk__41565 = null;
var count__41566 = (0);
var i__41567 = (0);
while(true){
if((i__41567 < count__41566)){
var vec__41580 = chunk__41565.cljs$core$IIndexed$_nth$arity$2(null,i__41567);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41580,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41580,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__42138 = seq__41564;
var G__42139 = chunk__41565;
var G__42140 = count__41566;
var G__42141 = (i__41567 + (1));
seq__41564 = G__42138;
chunk__41565 = G__42139;
count__41566 = G__42140;
i__41567 = G__42141;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__41564);
if(temp__5753__auto__){
var seq__41564__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41564__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__41564__$1);
var G__42142 = cljs.core.chunk_rest(seq__41564__$1);
var G__42143 = c__4649__auto__;
var G__42144 = cljs.core.count(c__4649__auto__);
var G__42145 = (0);
seq__41564 = G__42142;
chunk__41565 = G__42143;
count__41566 = G__42144;
i__41567 = G__42145;
continue;
} else {
var vec__41590 = cljs.core.first(seq__41564__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41590,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41590,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__42146 = cljs.core.next(seq__41564__$1);
var G__42147 = null;
var G__42148 = (0);
var G__42149 = (0);
seq__41564 = G__42146;
chunk__41565 = G__42147;
count__41566 = G__42148;
i__41567 = G__42149;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__41600_42150 = key;
var G__41600_42151__$1 = (((G__41600_42150 instanceof cljs.core.Keyword))?G__41600_42150.fqn:null);
switch (G__41600_42151__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_42153 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4223__auto__ = goog.string.startsWith(ks_42153,"data-");
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return goog.string.startsWith(ks_42153,"aria-");
}
})())){
el.setAttribute(ks_42153,value);
} else {
(el[ks_42153] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__41614){
var map__41615 = p__41614;
var map__41615__$1 = cljs.core.__destructure_map(map__41615);
var props = map__41615__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41615__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__41617 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41617,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41617,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41617,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__41623 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__41623,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__41623;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__41628 = arguments.length;
switch (G__41628) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__41637){
var vec__41639 = p__41637;
var seq__41640 = cljs.core.seq(vec__41639);
var first__41641 = cljs.core.first(seq__41640);
var seq__41640__$1 = cljs.core.next(seq__41640);
var nn = first__41641;
var first__41641__$1 = cljs.core.first(seq__41640__$1);
var seq__41640__$2 = cljs.core.next(seq__41640__$1);
var np = first__41641__$1;
var nc = seq__41640__$2;
var node = vec__41639;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__41644 = nn;
var G__41645 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__41644,G__41645) : create_fn.call(null,G__41644,G__41645));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__41647 = nn;
var G__41648 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__41647,G__41648) : create_fn.call(null,G__41647,G__41648));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__41655 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41655,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41655,(1),null);
var seq__41659_42155 = cljs.core.seq(node_children);
var chunk__41660_42156 = null;
var count__41661_42157 = (0);
var i__41662_42158 = (0);
while(true){
if((i__41662_42158 < count__41661_42157)){
var child_struct_42159 = chunk__41660_42156.cljs$core$IIndexed$_nth$arity$2(null,i__41662_42158);
var children_42160 = shadow.dom.dom_node(child_struct_42159);
if(cljs.core.seq_QMARK_(children_42160)){
var seq__41703_42161 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_42160));
var chunk__41705_42162 = null;
var count__41706_42163 = (0);
var i__41707_42164 = (0);
while(true){
if((i__41707_42164 < count__41706_42163)){
var child_42165 = chunk__41705_42162.cljs$core$IIndexed$_nth$arity$2(null,i__41707_42164);
if(cljs.core.truth_(child_42165)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_42165);


var G__42166 = seq__41703_42161;
var G__42167 = chunk__41705_42162;
var G__42168 = count__41706_42163;
var G__42169 = (i__41707_42164 + (1));
seq__41703_42161 = G__42166;
chunk__41705_42162 = G__42167;
count__41706_42163 = G__42168;
i__41707_42164 = G__42169;
continue;
} else {
var G__42170 = seq__41703_42161;
var G__42171 = chunk__41705_42162;
var G__42172 = count__41706_42163;
var G__42173 = (i__41707_42164 + (1));
seq__41703_42161 = G__42170;
chunk__41705_42162 = G__42171;
count__41706_42163 = G__42172;
i__41707_42164 = G__42173;
continue;
}
} else {
var temp__5753__auto___42174 = cljs.core.seq(seq__41703_42161);
if(temp__5753__auto___42174){
var seq__41703_42175__$1 = temp__5753__auto___42174;
if(cljs.core.chunked_seq_QMARK_(seq__41703_42175__$1)){
var c__4649__auto___42176 = cljs.core.chunk_first(seq__41703_42175__$1);
var G__42177 = cljs.core.chunk_rest(seq__41703_42175__$1);
var G__42178 = c__4649__auto___42176;
var G__42179 = cljs.core.count(c__4649__auto___42176);
var G__42180 = (0);
seq__41703_42161 = G__42177;
chunk__41705_42162 = G__42178;
count__41706_42163 = G__42179;
i__41707_42164 = G__42180;
continue;
} else {
var child_42181 = cljs.core.first(seq__41703_42175__$1);
if(cljs.core.truth_(child_42181)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_42181);


var G__42182 = cljs.core.next(seq__41703_42175__$1);
var G__42183 = null;
var G__42184 = (0);
var G__42185 = (0);
seq__41703_42161 = G__42182;
chunk__41705_42162 = G__42183;
count__41706_42163 = G__42184;
i__41707_42164 = G__42185;
continue;
} else {
var G__42186 = cljs.core.next(seq__41703_42175__$1);
var G__42187 = null;
var G__42188 = (0);
var G__42189 = (0);
seq__41703_42161 = G__42186;
chunk__41705_42162 = G__42187;
count__41706_42163 = G__42188;
i__41707_42164 = G__42189;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_42160);
}


var G__42190 = seq__41659_42155;
var G__42191 = chunk__41660_42156;
var G__42192 = count__41661_42157;
var G__42193 = (i__41662_42158 + (1));
seq__41659_42155 = G__42190;
chunk__41660_42156 = G__42191;
count__41661_42157 = G__42192;
i__41662_42158 = G__42193;
continue;
} else {
var temp__5753__auto___42194 = cljs.core.seq(seq__41659_42155);
if(temp__5753__auto___42194){
var seq__41659_42195__$1 = temp__5753__auto___42194;
if(cljs.core.chunked_seq_QMARK_(seq__41659_42195__$1)){
var c__4649__auto___42196 = cljs.core.chunk_first(seq__41659_42195__$1);
var G__42197 = cljs.core.chunk_rest(seq__41659_42195__$1);
var G__42198 = c__4649__auto___42196;
var G__42199 = cljs.core.count(c__4649__auto___42196);
var G__42200 = (0);
seq__41659_42155 = G__42197;
chunk__41660_42156 = G__42198;
count__41661_42157 = G__42199;
i__41662_42158 = G__42200;
continue;
} else {
var child_struct_42201 = cljs.core.first(seq__41659_42195__$1);
var children_42202 = shadow.dom.dom_node(child_struct_42201);
if(cljs.core.seq_QMARK_(children_42202)){
var seq__41718_42203 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_42202));
var chunk__41720_42204 = null;
var count__41721_42205 = (0);
var i__41722_42206 = (0);
while(true){
if((i__41722_42206 < count__41721_42205)){
var child_42207 = chunk__41720_42204.cljs$core$IIndexed$_nth$arity$2(null,i__41722_42206);
if(cljs.core.truth_(child_42207)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_42207);


var G__42208 = seq__41718_42203;
var G__42209 = chunk__41720_42204;
var G__42210 = count__41721_42205;
var G__42211 = (i__41722_42206 + (1));
seq__41718_42203 = G__42208;
chunk__41720_42204 = G__42209;
count__41721_42205 = G__42210;
i__41722_42206 = G__42211;
continue;
} else {
var G__42212 = seq__41718_42203;
var G__42213 = chunk__41720_42204;
var G__42214 = count__41721_42205;
var G__42215 = (i__41722_42206 + (1));
seq__41718_42203 = G__42212;
chunk__41720_42204 = G__42213;
count__41721_42205 = G__42214;
i__41722_42206 = G__42215;
continue;
}
} else {
var temp__5753__auto___42216__$1 = cljs.core.seq(seq__41718_42203);
if(temp__5753__auto___42216__$1){
var seq__41718_42217__$1 = temp__5753__auto___42216__$1;
if(cljs.core.chunked_seq_QMARK_(seq__41718_42217__$1)){
var c__4649__auto___42218 = cljs.core.chunk_first(seq__41718_42217__$1);
var G__42219 = cljs.core.chunk_rest(seq__41718_42217__$1);
var G__42220 = c__4649__auto___42218;
var G__42221 = cljs.core.count(c__4649__auto___42218);
var G__42222 = (0);
seq__41718_42203 = G__42219;
chunk__41720_42204 = G__42220;
count__41721_42205 = G__42221;
i__41722_42206 = G__42222;
continue;
} else {
var child_42223 = cljs.core.first(seq__41718_42217__$1);
if(cljs.core.truth_(child_42223)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_42223);


var G__42224 = cljs.core.next(seq__41718_42217__$1);
var G__42225 = null;
var G__42226 = (0);
var G__42227 = (0);
seq__41718_42203 = G__42224;
chunk__41720_42204 = G__42225;
count__41721_42205 = G__42226;
i__41722_42206 = G__42227;
continue;
} else {
var G__42228 = cljs.core.next(seq__41718_42217__$1);
var G__42229 = null;
var G__42230 = (0);
var G__42231 = (0);
seq__41718_42203 = G__42228;
chunk__41720_42204 = G__42229;
count__41721_42205 = G__42230;
i__41722_42206 = G__42231;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_42202);
}


var G__42232 = cljs.core.next(seq__41659_42195__$1);
var G__42233 = null;
var G__42234 = (0);
var G__42235 = (0);
seq__41659_42155 = G__42232;
chunk__41660_42156 = G__42233;
count__41661_42157 = G__42234;
i__41662_42158 = G__42235;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__41740 = cljs.core.seq(node);
var chunk__41741 = null;
var count__41742 = (0);
var i__41743 = (0);
while(true){
if((i__41743 < count__41742)){
var n = chunk__41741.cljs$core$IIndexed$_nth$arity$2(null,i__41743);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__42236 = seq__41740;
var G__42237 = chunk__41741;
var G__42238 = count__41742;
var G__42239 = (i__41743 + (1));
seq__41740 = G__42236;
chunk__41741 = G__42237;
count__41742 = G__42238;
i__41743 = G__42239;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__41740);
if(temp__5753__auto__){
var seq__41740__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41740__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__41740__$1);
var G__42240 = cljs.core.chunk_rest(seq__41740__$1);
var G__42241 = c__4649__auto__;
var G__42242 = cljs.core.count(c__4649__auto__);
var G__42243 = (0);
seq__41740 = G__42240;
chunk__41741 = G__42241;
count__41742 = G__42242;
i__41743 = G__42243;
continue;
} else {
var n = cljs.core.first(seq__41740__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__42244 = cljs.core.next(seq__41740__$1);
var G__42245 = null;
var G__42246 = (0);
var G__42247 = (0);
seq__41740 = G__42244;
chunk__41741 = G__42245;
count__41742 = G__42246;
i__41743 = G__42247;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__41762 = arguments.length;
switch (G__41762) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__41767 = arguments.length;
switch (G__41767) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__41774 = arguments.length;
switch (G__41774) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4223__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4835__auto__ = [];
var len__4829__auto___42251 = arguments.length;
var i__4830__auto___42252 = (0);
while(true){
if((i__4830__auto___42252 < len__4829__auto___42251)){
args__4835__auto__.push((arguments[i__4830__auto___42252]));

var G__42253 = (i__4830__auto___42252 + (1));
i__4830__auto___42252 = G__42253;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__41795_42254 = cljs.core.seq(nodes);
var chunk__41796_42255 = null;
var count__41797_42256 = (0);
var i__41798_42257 = (0);
while(true){
if((i__41798_42257 < count__41797_42256)){
var node_42258 = chunk__41796_42255.cljs$core$IIndexed$_nth$arity$2(null,i__41798_42257);
fragment.appendChild(shadow.dom._to_dom(node_42258));


var G__42259 = seq__41795_42254;
var G__42260 = chunk__41796_42255;
var G__42261 = count__41797_42256;
var G__42262 = (i__41798_42257 + (1));
seq__41795_42254 = G__42259;
chunk__41796_42255 = G__42260;
count__41797_42256 = G__42261;
i__41798_42257 = G__42262;
continue;
} else {
var temp__5753__auto___42263 = cljs.core.seq(seq__41795_42254);
if(temp__5753__auto___42263){
var seq__41795_42264__$1 = temp__5753__auto___42263;
if(cljs.core.chunked_seq_QMARK_(seq__41795_42264__$1)){
var c__4649__auto___42265 = cljs.core.chunk_first(seq__41795_42264__$1);
var G__42266 = cljs.core.chunk_rest(seq__41795_42264__$1);
var G__42267 = c__4649__auto___42265;
var G__42268 = cljs.core.count(c__4649__auto___42265);
var G__42269 = (0);
seq__41795_42254 = G__42266;
chunk__41796_42255 = G__42267;
count__41797_42256 = G__42268;
i__41798_42257 = G__42269;
continue;
} else {
var node_42270 = cljs.core.first(seq__41795_42264__$1);
fragment.appendChild(shadow.dom._to_dom(node_42270));


var G__42271 = cljs.core.next(seq__41795_42264__$1);
var G__42272 = null;
var G__42273 = (0);
var G__42274 = (0);
seq__41795_42254 = G__42271;
chunk__41796_42255 = G__42272;
count__41797_42256 = G__42273;
i__41798_42257 = G__42274;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq41791){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41791));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__41812_42275 = cljs.core.seq(scripts);
var chunk__41813_42276 = null;
var count__41814_42277 = (0);
var i__41815_42278 = (0);
while(true){
if((i__41815_42278 < count__41814_42277)){
var vec__41825_42279 = chunk__41813_42276.cljs$core$IIndexed$_nth$arity$2(null,i__41815_42278);
var script_tag_42280 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41825_42279,(0),null);
var script_body_42281 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41825_42279,(1),null);
eval(script_body_42281);


var G__42282 = seq__41812_42275;
var G__42283 = chunk__41813_42276;
var G__42284 = count__41814_42277;
var G__42285 = (i__41815_42278 + (1));
seq__41812_42275 = G__42282;
chunk__41813_42276 = G__42283;
count__41814_42277 = G__42284;
i__41815_42278 = G__42285;
continue;
} else {
var temp__5753__auto___42286 = cljs.core.seq(seq__41812_42275);
if(temp__5753__auto___42286){
var seq__41812_42287__$1 = temp__5753__auto___42286;
if(cljs.core.chunked_seq_QMARK_(seq__41812_42287__$1)){
var c__4649__auto___42288 = cljs.core.chunk_first(seq__41812_42287__$1);
var G__42289 = cljs.core.chunk_rest(seq__41812_42287__$1);
var G__42290 = c__4649__auto___42288;
var G__42291 = cljs.core.count(c__4649__auto___42288);
var G__42292 = (0);
seq__41812_42275 = G__42289;
chunk__41813_42276 = G__42290;
count__41814_42277 = G__42291;
i__41815_42278 = G__42292;
continue;
} else {
var vec__41830_42293 = cljs.core.first(seq__41812_42287__$1);
var script_tag_42294 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41830_42293,(0),null);
var script_body_42295 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41830_42293,(1),null);
eval(script_body_42295);


var G__42296 = cljs.core.next(seq__41812_42287__$1);
var G__42297 = null;
var G__42298 = (0);
var G__42299 = (0);
seq__41812_42275 = G__42296;
chunk__41813_42276 = G__42297;
count__41814_42277 = G__42298;
i__41815_42278 = G__42299;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__41836){
var vec__41837 = p__41836;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41837,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41837,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__41852 = arguments.length;
switch (G__41852) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__41870 = cljs.core.seq(style_keys);
var chunk__41871 = null;
var count__41872 = (0);
var i__41873 = (0);
while(true){
if((i__41873 < count__41872)){
var it = chunk__41871.cljs$core$IIndexed$_nth$arity$2(null,i__41873);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__42303 = seq__41870;
var G__42304 = chunk__41871;
var G__42305 = count__41872;
var G__42306 = (i__41873 + (1));
seq__41870 = G__42303;
chunk__41871 = G__42304;
count__41872 = G__42305;
i__41873 = G__42306;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__41870);
if(temp__5753__auto__){
var seq__41870__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41870__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__41870__$1);
var G__42307 = cljs.core.chunk_rest(seq__41870__$1);
var G__42308 = c__4649__auto__;
var G__42309 = cljs.core.count(c__4649__auto__);
var G__42310 = (0);
seq__41870 = G__42307;
chunk__41871 = G__42308;
count__41872 = G__42309;
i__41873 = G__42310;
continue;
} else {
var it = cljs.core.first(seq__41870__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__42311 = cljs.core.next(seq__41870__$1);
var G__42312 = null;
var G__42313 = (0);
var G__42314 = (0);
seq__41870 = G__42311;
chunk__41871 = G__42312;
count__41872 = G__42313;
i__41873 = G__42314;
continue;
}
} else {
return null;
}
}
break;
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
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k41883,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__41896 = k41883;
var G__41896__$1 = (((G__41896 instanceof cljs.core.Keyword))?G__41896.fqn:null);
switch (G__41896__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k41883,else__4475__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__41898){
var vec__41899 = p__41898;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41899,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41899,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__41882){
var self__ = this;
var G__41882__$1 = this;
return (new cljs.core.RecordIter((0),G__41882__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (coll__4469__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
})(this__4468__auto____$1);
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this41884,other41885){
var self__ = this;
var this41884__$1 = this;
return (((!((other41885 == null)))) && ((((this41884__$1.constructor === other41885.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this41884__$1.x,other41885.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this41884__$1.y,other41885.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this41884__$1.__extmap,other41885.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k41883){
var self__ = this;
var this__4479__auto____$1 = this;
var G__41902 = k41883;
var G__41902__$1 = (((G__41902 instanceof cljs.core.Keyword))?G__41902.fqn:null);
switch (G__41902__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k41883);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__41882){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__41904 = cljs.core.keyword_identical_QMARK_;
var expr__41905 = k__4481__auto__;
if(cljs.core.truth_((pred__41904.cljs$core$IFn$_invoke$arity$2 ? pred__41904.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__41905) : pred__41904.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__41905)))){
return (new shadow.dom.Coordinate(G__41882,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__41904.cljs$core$IFn$_invoke$arity$2 ? pred__41904.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__41905) : pred__41904.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__41905)))){
return (new shadow.dom.Coordinate(self__.x,G__41882,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__41882),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__41882){
var self__ = this;
var this__4471__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__41882,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4478__auto__,(0)),cljs.core._nth(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__41888){
var extmap__4512__auto__ = (function (){var G__41921 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__41888,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__41888)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__41921);
} else {
return G__41921;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__41888),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__41888),null,cljs.core.not_empty(extmap__4512__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
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
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k41931,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__41942 = k41931;
var G__41942__$1 = (((G__41942 instanceof cljs.core.Keyword))?G__41942.fqn:null);
switch (G__41942__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k41931,else__4475__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__41950){
var vec__41951 = p__41950;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41951,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41951,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#shadow.dom.Size{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__41930){
var self__ = this;
var G__41930__$1 = this;
return (new cljs.core.RecordIter((0),G__41930__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (coll__4469__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
})(this__4468__auto____$1);
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this41933,other41934){
var self__ = this;
var this41933__$1 = this;
return (((!((other41934 == null)))) && ((((this41933__$1.constructor === other41934.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this41933__$1.w,other41934.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this41933__$1.h,other41934.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this41933__$1.__extmap,other41934.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k41931){
var self__ = this;
var this__4479__auto____$1 = this;
var G__41972 = k41931;
var G__41972__$1 = (((G__41972 instanceof cljs.core.Keyword))?G__41972.fqn:null);
switch (G__41972__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k41931);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__41930){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__41975 = cljs.core.keyword_identical_QMARK_;
var expr__41976 = k__4481__auto__;
if(cljs.core.truth_((pred__41975.cljs$core$IFn$_invoke$arity$2 ? pred__41975.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__41976) : pred__41975.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__41976)))){
return (new shadow.dom.Size(G__41930,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__41975.cljs$core$IFn$_invoke$arity$2 ? pred__41975.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__41976) : pred__41975.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__41976)))){
return (new shadow.dom.Size(self__.w,G__41930,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__41930),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__41930){
var self__ = this;
var this__4471__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__41930,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4478__auto__,(0)),cljs.core._nth(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__41936){
var extmap__4512__auto__ = (function (){var G__41991 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__41936,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__41936)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__41991);
} else {
return G__41991;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__41936),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__41936),null,cljs.core.not_empty(extmap__4512__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4703__auto__ = opts;
var l__4704__auto__ = a__4703__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4704__auto__)){
var G__42326 = (i + (1));
var G__42327 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__42326;
ret = G__42327;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__42017){
var vec__42020 = p__42017;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42020,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42020,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__42030 = arguments.length;
switch (G__42030) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5751__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5751__auto__)){
var child = temp__5751__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__42334 = ps;
var G__42335 = (i + (1));
el__$1 = G__42334;
i = G__42335;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__42034 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42034,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42034,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42034,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__42037_42336 = cljs.core.seq(props);
var chunk__42038_42337 = null;
var count__42039_42338 = (0);
var i__42040_42339 = (0);
while(true){
if((i__42040_42339 < count__42039_42338)){
var vec__42047_42340 = chunk__42038_42337.cljs$core$IIndexed$_nth$arity$2(null,i__42040_42339);
var k_42341 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42047_42340,(0),null);
var v_42342 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42047_42340,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_42341);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_42341),v_42342);


var G__42343 = seq__42037_42336;
var G__42344 = chunk__42038_42337;
var G__42345 = count__42039_42338;
var G__42346 = (i__42040_42339 + (1));
seq__42037_42336 = G__42343;
chunk__42038_42337 = G__42344;
count__42039_42338 = G__42345;
i__42040_42339 = G__42346;
continue;
} else {
var temp__5753__auto___42347 = cljs.core.seq(seq__42037_42336);
if(temp__5753__auto___42347){
var seq__42037_42348__$1 = temp__5753__auto___42347;
if(cljs.core.chunked_seq_QMARK_(seq__42037_42348__$1)){
var c__4649__auto___42349 = cljs.core.chunk_first(seq__42037_42348__$1);
var G__42350 = cljs.core.chunk_rest(seq__42037_42348__$1);
var G__42351 = c__4649__auto___42349;
var G__42352 = cljs.core.count(c__4649__auto___42349);
var G__42353 = (0);
seq__42037_42336 = G__42350;
chunk__42038_42337 = G__42351;
count__42039_42338 = G__42352;
i__42040_42339 = G__42353;
continue;
} else {
var vec__42050_42354 = cljs.core.first(seq__42037_42348__$1);
var k_42355 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42050_42354,(0),null);
var v_42356 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42050_42354,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_42355);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_42355),v_42356);


var G__42357 = cljs.core.next(seq__42037_42348__$1);
var G__42358 = null;
var G__42359 = (0);
var G__42360 = (0);
seq__42037_42336 = G__42357;
chunk__42038_42337 = G__42358;
count__42039_42338 = G__42359;
i__42040_42339 = G__42360;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__42054 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42054,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42054,(1),null);
var seq__42057_42364 = cljs.core.seq(node_children);
var chunk__42059_42365 = null;
var count__42060_42366 = (0);
var i__42061_42367 = (0);
while(true){
if((i__42061_42367 < count__42060_42366)){
var child_struct_42368 = chunk__42059_42365.cljs$core$IIndexed$_nth$arity$2(null,i__42061_42367);
if((!((child_struct_42368 == null)))){
if(typeof child_struct_42368 === 'string'){
var text_42369 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_42369),child_struct_42368].join(''));
} else {
var children_42370 = shadow.dom.svg_node(child_struct_42368);
if(cljs.core.seq_QMARK_(children_42370)){
var seq__42075_42371 = cljs.core.seq(children_42370);
var chunk__42077_42372 = null;
var count__42078_42373 = (0);
var i__42079_42374 = (0);
while(true){
if((i__42079_42374 < count__42078_42373)){
var child_42375 = chunk__42077_42372.cljs$core$IIndexed$_nth$arity$2(null,i__42079_42374);
if(cljs.core.truth_(child_42375)){
node.appendChild(child_42375);


var G__42376 = seq__42075_42371;
var G__42377 = chunk__42077_42372;
var G__42378 = count__42078_42373;
var G__42379 = (i__42079_42374 + (1));
seq__42075_42371 = G__42376;
chunk__42077_42372 = G__42377;
count__42078_42373 = G__42378;
i__42079_42374 = G__42379;
continue;
} else {
var G__42380 = seq__42075_42371;
var G__42381 = chunk__42077_42372;
var G__42382 = count__42078_42373;
var G__42383 = (i__42079_42374 + (1));
seq__42075_42371 = G__42380;
chunk__42077_42372 = G__42381;
count__42078_42373 = G__42382;
i__42079_42374 = G__42383;
continue;
}
} else {
var temp__5753__auto___42384 = cljs.core.seq(seq__42075_42371);
if(temp__5753__auto___42384){
var seq__42075_42385__$1 = temp__5753__auto___42384;
if(cljs.core.chunked_seq_QMARK_(seq__42075_42385__$1)){
var c__4649__auto___42386 = cljs.core.chunk_first(seq__42075_42385__$1);
var G__42387 = cljs.core.chunk_rest(seq__42075_42385__$1);
var G__42388 = c__4649__auto___42386;
var G__42389 = cljs.core.count(c__4649__auto___42386);
var G__42390 = (0);
seq__42075_42371 = G__42387;
chunk__42077_42372 = G__42388;
count__42078_42373 = G__42389;
i__42079_42374 = G__42390;
continue;
} else {
var child_42391 = cljs.core.first(seq__42075_42385__$1);
if(cljs.core.truth_(child_42391)){
node.appendChild(child_42391);


var G__42392 = cljs.core.next(seq__42075_42385__$1);
var G__42393 = null;
var G__42394 = (0);
var G__42395 = (0);
seq__42075_42371 = G__42392;
chunk__42077_42372 = G__42393;
count__42078_42373 = G__42394;
i__42079_42374 = G__42395;
continue;
} else {
var G__42396 = cljs.core.next(seq__42075_42385__$1);
var G__42397 = null;
var G__42398 = (0);
var G__42399 = (0);
seq__42075_42371 = G__42396;
chunk__42077_42372 = G__42397;
count__42078_42373 = G__42398;
i__42079_42374 = G__42399;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_42370);
}
}


var G__42404 = seq__42057_42364;
var G__42405 = chunk__42059_42365;
var G__42406 = count__42060_42366;
var G__42407 = (i__42061_42367 + (1));
seq__42057_42364 = G__42404;
chunk__42059_42365 = G__42405;
count__42060_42366 = G__42406;
i__42061_42367 = G__42407;
continue;
} else {
var G__42408 = seq__42057_42364;
var G__42409 = chunk__42059_42365;
var G__42410 = count__42060_42366;
var G__42411 = (i__42061_42367 + (1));
seq__42057_42364 = G__42408;
chunk__42059_42365 = G__42409;
count__42060_42366 = G__42410;
i__42061_42367 = G__42411;
continue;
}
} else {
var temp__5753__auto___42412 = cljs.core.seq(seq__42057_42364);
if(temp__5753__auto___42412){
var seq__42057_42413__$1 = temp__5753__auto___42412;
if(cljs.core.chunked_seq_QMARK_(seq__42057_42413__$1)){
var c__4649__auto___42414 = cljs.core.chunk_first(seq__42057_42413__$1);
var G__42415 = cljs.core.chunk_rest(seq__42057_42413__$1);
var G__42416 = c__4649__auto___42414;
var G__42417 = cljs.core.count(c__4649__auto___42414);
var G__42418 = (0);
seq__42057_42364 = G__42415;
chunk__42059_42365 = G__42416;
count__42060_42366 = G__42417;
i__42061_42367 = G__42418;
continue;
} else {
var child_struct_42419 = cljs.core.first(seq__42057_42413__$1);
if((!((child_struct_42419 == null)))){
if(typeof child_struct_42419 === 'string'){
var text_42420 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_42420),child_struct_42419].join(''));
} else {
var children_42421 = shadow.dom.svg_node(child_struct_42419);
if(cljs.core.seq_QMARK_(children_42421)){
var seq__42081_42422 = cljs.core.seq(children_42421);
var chunk__42083_42423 = null;
var count__42084_42424 = (0);
var i__42085_42425 = (0);
while(true){
if((i__42085_42425 < count__42084_42424)){
var child_42426 = chunk__42083_42423.cljs$core$IIndexed$_nth$arity$2(null,i__42085_42425);
if(cljs.core.truth_(child_42426)){
node.appendChild(child_42426);


var G__42427 = seq__42081_42422;
var G__42428 = chunk__42083_42423;
var G__42429 = count__42084_42424;
var G__42430 = (i__42085_42425 + (1));
seq__42081_42422 = G__42427;
chunk__42083_42423 = G__42428;
count__42084_42424 = G__42429;
i__42085_42425 = G__42430;
continue;
} else {
var G__42431 = seq__42081_42422;
var G__42432 = chunk__42083_42423;
var G__42433 = count__42084_42424;
var G__42434 = (i__42085_42425 + (1));
seq__42081_42422 = G__42431;
chunk__42083_42423 = G__42432;
count__42084_42424 = G__42433;
i__42085_42425 = G__42434;
continue;
}
} else {
var temp__5753__auto___42435__$1 = cljs.core.seq(seq__42081_42422);
if(temp__5753__auto___42435__$1){
var seq__42081_42436__$1 = temp__5753__auto___42435__$1;
if(cljs.core.chunked_seq_QMARK_(seq__42081_42436__$1)){
var c__4649__auto___42437 = cljs.core.chunk_first(seq__42081_42436__$1);
var G__42438 = cljs.core.chunk_rest(seq__42081_42436__$1);
var G__42439 = c__4649__auto___42437;
var G__42440 = cljs.core.count(c__4649__auto___42437);
var G__42441 = (0);
seq__42081_42422 = G__42438;
chunk__42083_42423 = G__42439;
count__42084_42424 = G__42440;
i__42085_42425 = G__42441;
continue;
} else {
var child_42442 = cljs.core.first(seq__42081_42436__$1);
if(cljs.core.truth_(child_42442)){
node.appendChild(child_42442);


var G__42443 = cljs.core.next(seq__42081_42436__$1);
var G__42444 = null;
var G__42445 = (0);
var G__42446 = (0);
seq__42081_42422 = G__42443;
chunk__42083_42423 = G__42444;
count__42084_42424 = G__42445;
i__42085_42425 = G__42446;
continue;
} else {
var G__42447 = cljs.core.next(seq__42081_42436__$1);
var G__42448 = null;
var G__42449 = (0);
var G__42450 = (0);
seq__42081_42422 = G__42447;
chunk__42083_42423 = G__42448;
count__42084_42424 = G__42449;
i__42085_42425 = G__42450;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_42421);
}
}


var G__42451 = cljs.core.next(seq__42057_42413__$1);
var G__42452 = null;
var G__42453 = (0);
var G__42454 = (0);
seq__42057_42364 = G__42451;
chunk__42059_42365 = G__42452;
count__42060_42366 = G__42453;
i__42061_42367 = G__42454;
continue;
} else {
var G__42455 = cljs.core.next(seq__42057_42413__$1);
var G__42456 = null;
var G__42457 = (0);
var G__42458 = (0);
seq__42057_42364 = G__42455;
chunk__42059_42365 = G__42456;
count__42060_42366 = G__42457;
i__42061_42367 = G__42458;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4835__auto__ = [];
var len__4829__auto___42459 = arguments.length;
var i__4830__auto___42460 = (0);
while(true){
if((i__4830__auto___42460 < len__4829__auto___42459)){
args__4835__auto__.push((arguments[i__4830__auto___42460]));

var G__42461 = (i__4830__auto___42460 + (1));
i__4830__auto___42460 = G__42461;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq42087){
var G__42088 = cljs.core.first(seq42087);
var seq42087__$1 = cljs.core.next(seq42087);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42088,seq42087__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__42090 = arguments.length;
switch (G__42090) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4221__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4221__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4221__auto__;
}
})())){
var c__39769__auto___42467 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__39770__auto__ = (function (){var switch__39694__auto__ = (function (state_42095){
var state_val_42096 = (state_42095[(1)]);
if((state_val_42096 === (1))){
var state_42095__$1 = state_42095;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42095__$1,(2),once_or_cleanup);
} else {
if((state_val_42096 === (2))){
var inst_42092 = (state_42095[(2)]);
var inst_42093 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_42095__$1 = (function (){var statearr_42097 = state_42095;
(statearr_42097[(7)] = inst_42092);

return statearr_42097;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_42095__$1,inst_42093);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__39695__auto__ = null;
var shadow$dom$state_machine__39695__auto____0 = (function (){
var statearr_42098 = [null,null,null,null,null,null,null,null];
(statearr_42098[(0)] = shadow$dom$state_machine__39695__auto__);

(statearr_42098[(1)] = (1));

return statearr_42098;
});
var shadow$dom$state_machine__39695__auto____1 = (function (state_42095){
while(true){
var ret_value__39696__auto__ = (function (){try{while(true){
var result__39697__auto__ = switch__39694__auto__(state_42095);
if(cljs.core.keyword_identical_QMARK_(result__39697__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39697__auto__;
}
break;
}
}catch (e42099){var ex__39698__auto__ = e42099;
var statearr_42100_42468 = state_42095;
(statearr_42100_42468[(2)] = ex__39698__auto__);


if(cljs.core.seq((state_42095[(4)]))){
var statearr_42101_42469 = state_42095;
(statearr_42101_42469[(1)] = cljs.core.first((state_42095[(4)])));

} else {
throw ex__39698__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42470 = state_42095;
state_42095 = G__42470;
continue;
} else {
return ret_value__39696__auto__;
}
break;
}
});
shadow$dom$state_machine__39695__auto__ = function(state_42095){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__39695__auto____0.call(this);
case 1:
return shadow$dom$state_machine__39695__auto____1.call(this,state_42095);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__39695__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__39695__auto____0;
shadow$dom$state_machine__39695__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__39695__auto____1;
return shadow$dom$state_machine__39695__auto__;
})()
})();
var state__39771__auto__ = (function (){var statearr_42102 = f__39770__auto__();
(statearr_42102[(6)] = c__39769__auto___42467);

return statearr_42102;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39771__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
