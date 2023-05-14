goog.provide('sablono.core');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__46900__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__46738 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var seq__46739 = cljs.core.seq(vec__46738);
var first__46740 = cljs.core.first(seq__46739);
var seq__46739__$1 = cljs.core.next(seq__46739);
var tag = first__46740;
var body = seq__46739__$1;
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.first(body),cljs.core.first(args)], 0))], null),cljs.core.rest(body));
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first(args)], null),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__46900 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__46901__i = 0, G__46901__a = new Array(arguments.length -  0);
while (G__46901__i < G__46901__a.length) {G__46901__a[G__46901__i] = arguments[G__46901__i + 0]; ++G__46901__i;}
  args = new cljs.core.IndexedSeq(G__46901__a,0,null);
} 
return G__46900__delegate.call(this,args);};
G__46900.cljs$lang$maxFixedArity = 0;
G__46900.cljs$lang$applyTo = (function (arglist__46902){
var args = cljs.core.seq(arglist__46902);
return G__46900__delegate(args);
});
G__46900.cljs$core$IFn$_invoke$arity$variadic = G__46900__delegate;
return G__46900;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__4622__auto__ = (function sablono$core$update_arglists_$_iter__46741(s__46742){
return (new cljs.core.LazySeq(null,(function (){
var s__46742__$1 = s__46742;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__46742__$1);
if(temp__5753__auto__){
var s__46742__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__46742__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__46742__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__46744 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__46743 = (0);
while(true){
if((i__46743 < size__4621__auto__)){
var args = cljs.core._nth(c__4620__auto__,i__46743);
cljs.core.chunk_append(b__46744,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__46904 = (i__46743 + (1));
i__46743 = G__46904;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__46744),sablono$core$update_arglists_$_iter__46741(cljs.core.chunk_rest(s__46742__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__46744),null);
}
} else {
var args = cljs.core.first(s__46742__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__46741(cljs.core.rest(s__46742__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__4835__auto__ = [];
var len__4829__auto___46905 = arguments.length;
var i__4830__auto___46906 = (0);
while(true){
if((i__4830__auto___46906 < len__4829__auto___46905)){
args__4835__auto__.push((arguments[i__4830__auto___46906]));

var G__46907 = (i__4830__auto___46906 + (1));
i__4830__auto___46906 = G__46907;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__4622__auto__ = (function sablono$core$iter__46746(s__46747){
return (new cljs.core.LazySeq(null,(function (){
var s__46747__$1 = s__46747;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__46747__$1);
if(temp__5753__auto__){
var s__46747__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__46747__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__46747__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__46749 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__46748 = (0);
while(true){
if((i__46748 < size__4621__auto__)){
var style = cljs.core._nth(c__4620__auto__,i__46748);
cljs.core.chunk_append(b__46749,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__46909 = (i__46748 + (1));
i__46748 = G__46909;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__46749),sablono$core$iter__46746(cljs.core.chunk_rest(s__46747__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__46749),null);
}
} else {
var style = cljs.core.first(s__46747__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__46746(cljs.core.rest(s__46747__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(styles);
}));

(sablono.core.include_css.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sablono.core.include_css.cljs$lang$applyTo = (function (seq46745){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq46745));
}));

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",({"src": src})));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js("http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to46750 = (function sablono$core$link_to46750(var_args){
var args__4835__auto__ = [];
var len__4829__auto___46912 = arguments.length;
var i__4830__auto___46913 = (0);
while(true){
if((i__4830__auto___46913 < len__4829__auto___46912)){
args__4835__auto__.push((arguments[i__4830__auto___46913]));

var G__46914 = (i__4830__auto___46913 + (1));
i__4830__auto___46913 = G__46914;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to46750.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(sablono.core.link_to46750.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([url], 0))], null),content], null);
}));

(sablono.core.link_to46750.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.link_to46750.cljs$lang$applyTo = (function (seq46751){
var G__46752 = cljs.core.first(seq46751);
var seq46751__$1 = cljs.core.next(seq46751);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46752,seq46751__$1);
}));


sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to46750);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to46753 = (function sablono$core$mail_to46753(var_args){
var args__4835__auto__ = [];
var len__4829__auto___46916 = arguments.length;
var i__4830__auto___46917 = (0);
while(true){
if((i__4830__auto___46917 < len__4829__auto___46916)){
args__4835__auto__.push((arguments[i__4830__auto___46917]));

var G__46918 = (i__4830__auto___46917 + (1));
i__4830__auto___46917 = G__46918;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to46753.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(sablono.core.mail_to46753.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__46756){
var vec__46757 = p__46756;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46757,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__4223__auto__ = content;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return e_mail;
}
})()], null);
}));

(sablono.core.mail_to46753.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.mail_to46753.cljs$lang$applyTo = (function (seq46754){
var G__46755 = cljs.core.first(seq46754);
var seq46754__$1 = cljs.core.next(seq46754);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46755,seq46754__$1);
}));


sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to46753);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list46760 = (function sablono$core$unordered_list46760(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4622__auto__ = (function sablono$core$unordered_list46760_$_iter__46761(s__46762){
return (new cljs.core.LazySeq(null,(function (){
var s__46762__$1 = s__46762;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__46762__$1);
if(temp__5753__auto__){
var s__46762__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__46762__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__46762__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__46764 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__46763 = (0);
while(true){
if((i__46763 < size__4621__auto__)){
var x = cljs.core._nth(c__4620__auto__,i__46763);
cljs.core.chunk_append(b__46764,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__46919 = (i__46763 + (1));
i__46763 = G__46919;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__46764),sablono$core$unordered_list46760_$_iter__46761(cljs.core.chunk_rest(s__46762__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__46764),null);
}
} else {
var x = cljs.core.first(s__46762__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list46760_$_iter__46761(cljs.core.rest(s__46762__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list46760);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list46765 = (function sablono$core$ordered_list46765(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4622__auto__ = (function sablono$core$ordered_list46765_$_iter__46766(s__46767){
return (new cljs.core.LazySeq(null,(function (){
var s__46767__$1 = s__46767;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__46767__$1);
if(temp__5753__auto__){
var s__46767__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__46767__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__46767__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__46769 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__46768 = (0);
while(true){
if((i__46768 < size__4621__auto__)){
var x = cljs.core._nth(c__4620__auto__,i__46768);
cljs.core.chunk_append(b__46769,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__46922 = (i__46768 + (1));
i__46768 = G__46922;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__46769),sablono$core$ordered_list46765_$_iter__46766(cljs.core.chunk_rest(s__46767__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__46769),null);
}
} else {
var x = cljs.core.first(s__46767__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list46765_$_iter__46766(cljs.core.rest(s__46767__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list46765);
/**
 * Create an image element.
 */
sablono.core.image46770 = (function sablono$core$image46770(var_args){
var G__46772 = arguments.length;
switch (G__46772) {
case 1:
return sablono.core.image46770.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image46770.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.image46770.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0))], null)], null);
}));

(sablono.core.image46770.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0)),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
}));

(sablono.core.image46770.cljs$lang$maxFixedArity = 2);


sablono.core.image = sablono.core.wrap_attrs(sablono.core.image46770);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__46773_SHARP_,p2__46774_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__46773_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__46774_SHARP_),"]"].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__46775_SHARP_,p2__46776_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__46775_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__46776_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(var_args){
var G__46778 = arguments.length;
switch (G__46778) {
case 2:
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (type,name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4223__auto__ = value;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return undefined;
}
})()], null)], null);
}));

(sablono.core.input_field_STAR_.cljs$lang$maxFixedArity = 3);

/**
 * Creates a color input field.
 */
sablono.core.color_field46784 = (function sablono$core$color_field46784(var_args){
var G__46786 = arguments.length;
switch (G__46786) {
case 1:
return sablono.core.color_field46784.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field46784.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.color_field46784.cljs$core$IFn$_invoke$arity$1 = (function (name__46730__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__46730__auto__);
}));

(sablono.core.color_field46784.cljs$core$IFn$_invoke$arity$2 = (function (name__46730__auto__,value__46731__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__46730__auto__,value__46731__auto__);
}));

(sablono.core.color_field46784.cljs$lang$maxFixedArity = 2);


sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field46784);

/**
 * Creates a date input field.
 */
sablono.core.date_field46791 = (function sablono$core$date_field46791(var_args){
var G__46793 = arguments.length;
switch (G__46793) {
case 1:
return sablono.core.date_field46791.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field46791.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.date_field46791.cljs$core$IFn$_invoke$arity$1 = (function (name__46730__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__46730__auto__);
}));

(sablono.core.date_field46791.cljs$core$IFn$_invoke$arity$2 = (function (name__46730__auto__,value__46731__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__46730__auto__,value__46731__auto__);
}));

(sablono.core.date_field46791.cljs$lang$maxFixedArity = 2);


sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field46791);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field46796 = (function sablono$core$datetime_field46796(var_args){
var G__46800 = arguments.length;
switch (G__46800) {
case 1:
return sablono.core.datetime_field46796.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field46796.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_field46796.cljs$core$IFn$_invoke$arity$1 = (function (name__46730__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__46730__auto__);
}));

(sablono.core.datetime_field46796.cljs$core$IFn$_invoke$arity$2 = (function (name__46730__auto__,value__46731__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__46730__auto__,value__46731__auto__);
}));

(sablono.core.datetime_field46796.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field46796);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field46803 = (function sablono$core$datetime_local_field46803(var_args){
var G__46805 = arguments.length;
switch (G__46805) {
case 1:
return sablono.core.datetime_local_field46803.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field46803.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_local_field46803.cljs$core$IFn$_invoke$arity$1 = (function (name__46730__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__46730__auto__);
}));

(sablono.core.datetime_local_field46803.cljs$core$IFn$_invoke$arity$2 = (function (name__46730__auto__,value__46731__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__46730__auto__,value__46731__auto__);
}));

(sablono.core.datetime_local_field46803.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field46803);

/**
 * Creates a email input field.
 */
sablono.core.email_field46808 = (function sablono$core$email_field46808(var_args){
var G__46810 = arguments.length;
switch (G__46810) {
case 1:
return sablono.core.email_field46808.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field46808.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.email_field46808.cljs$core$IFn$_invoke$arity$1 = (function (name__46730__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__46730__auto__);
}));

(sablono.core.email_field46808.cljs$core$IFn$_invoke$arity$2 = (function (name__46730__auto__,value__46731__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__46730__auto__,value__46731__auto__);
}));

(sablono.core.email_field46808.cljs$lang$maxFixedArity = 2);


sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field46808);

/**
 * Creates a file input field.
 */
sablono.core.file_field46811 = (function sablono$core$file_field46811(var_args){
var G__46813 = arguments.length;
switch (G__46813) {
case 1:
return sablono.core.file_field46811.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field46811.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.file_field46811.cljs$core$IFn$_invoke$arity$1 = (function (name__46730__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__46730__auto__);
}));

(sablono.core.file_field46811.cljs$core$IFn$_invoke$arity$2 = (function (name__46730__auto__,value__46731__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__46730__auto__,value__46731__auto__);
}));

(sablono.core.file_field46811.cljs$lang$maxFixedArity = 2);


sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field46811);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field46814 = (function sablono$core$hidden_field46814(var_args){
var G__46816 = arguments.length;
switch (G__46816) {
case 1:
return sablono.core.hidden_field46814.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field46814.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.hidden_field46814.cljs$core$IFn$_invoke$arity$1 = (function (name__46730__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__46730__auto__);
}));

(sablono.core.hidden_field46814.cljs$core$IFn$_invoke$arity$2 = (function (name__46730__auto__,value__46731__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__46730__auto__,value__46731__auto__);
}));

(sablono.core.hidden_field46814.cljs$lang$maxFixedArity = 2);


sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field46814);

/**
 * Creates a month input field.
 */
sablono.core.month_field46817 = (function sablono$core$month_field46817(var_args){
var G__46819 = arguments.length;
switch (G__46819) {
case 1:
return sablono.core.month_field46817.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field46817.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.month_field46817.cljs$core$IFn$_invoke$arity$1 = (function (name__46730__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__46730__auto__);
}));

(sablono.core.month_field46817.cljs$core$IFn$_invoke$arity$2 = (function (name__46730__auto__,value__46731__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__46730__auto__,value__46731__auto__);
}));

(sablono.core.month_field46817.cljs$lang$maxFixedArity = 2);


sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field46817);

/**
 * Creates a number input field.
 */
sablono.core.number_field46820 = (function sablono$core$number_field46820(var_args){
var G__46822 = arguments.length;
switch (G__46822) {
case 1:
return sablono.core.number_field46820.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field46820.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.number_field46820.cljs$core$IFn$_invoke$arity$1 = (function (name__46730__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__46730__auto__);
}));

(sablono.core.number_field46820.cljs$core$IFn$_invoke$arity$2 = (function (name__46730__auto__,value__46731__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__46730__auto__,value__46731__auto__);
}));

(sablono.core.number_field46820.cljs$lang$maxFixedArity = 2);


sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field46820);

/**
 * Creates a password input field.
 */
sablono.core.password_field46823 = (function sablono$core$password_field46823(var_args){
var G__46825 = arguments.length;
switch (G__46825) {
case 1:
return sablono.core.password_field46823.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field46823.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.password_field46823.cljs$core$IFn$_invoke$arity$1 = (function (name__46730__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__46730__auto__);
}));

(sablono.core.password_field46823.cljs$core$IFn$_invoke$arity$2 = (function (name__46730__auto__,value__46731__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__46730__auto__,value__46731__auto__);
}));

(sablono.core.password_field46823.cljs$lang$maxFixedArity = 2);


sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field46823);

/**
 * Creates a range input field.
 */
sablono.core.range_field46826 = (function sablono$core$range_field46826(var_args){
var G__46828 = arguments.length;
switch (G__46828) {
case 1:
return sablono.core.range_field46826.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field46826.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.range_field46826.cljs$core$IFn$_invoke$arity$1 = (function (name__46730__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__46730__auto__);
}));

(sablono.core.range_field46826.cljs$core$IFn$_invoke$arity$2 = (function (name__46730__auto__,value__46731__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__46730__auto__,value__46731__auto__);
}));

(sablono.core.range_field46826.cljs$lang$maxFixedArity = 2);


sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field46826);

/**
 * Creates a search input field.
 */
sablono.core.search_field46829 = (function sablono$core$search_field46829(var_args){
var G__46831 = arguments.length;
switch (G__46831) {
case 1:
return sablono.core.search_field46829.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field46829.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.search_field46829.cljs$core$IFn$_invoke$arity$1 = (function (name__46730__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__46730__auto__);
}));

(sablono.core.search_field46829.cljs$core$IFn$_invoke$arity$2 = (function (name__46730__auto__,value__46731__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__46730__auto__,value__46731__auto__);
}));

(sablono.core.search_field46829.cljs$lang$maxFixedArity = 2);


sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field46829);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field46832 = (function sablono$core$tel_field46832(var_args){
var G__46834 = arguments.length;
switch (G__46834) {
case 1:
return sablono.core.tel_field46832.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field46832.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.tel_field46832.cljs$core$IFn$_invoke$arity$1 = (function (name__46730__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__46730__auto__);
}));

(sablono.core.tel_field46832.cljs$core$IFn$_invoke$arity$2 = (function (name__46730__auto__,value__46731__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__46730__auto__,value__46731__auto__);
}));

(sablono.core.tel_field46832.cljs$lang$maxFixedArity = 2);


sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field46832);

/**
 * Creates a text input field.
 */
sablono.core.text_field46835 = (function sablono$core$text_field46835(var_args){
var G__46837 = arguments.length;
switch (G__46837) {
case 1:
return sablono.core.text_field46835.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field46835.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_field46835.cljs$core$IFn$_invoke$arity$1 = (function (name__46730__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__46730__auto__);
}));

(sablono.core.text_field46835.cljs$core$IFn$_invoke$arity$2 = (function (name__46730__auto__,value__46731__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__46730__auto__,value__46731__auto__);
}));

(sablono.core.text_field46835.cljs$lang$maxFixedArity = 2);


sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field46835);

/**
 * Creates a time input field.
 */
sablono.core.time_field46838 = (function sablono$core$time_field46838(var_args){
var G__46840 = arguments.length;
switch (G__46840) {
case 1:
return sablono.core.time_field46838.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field46838.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.time_field46838.cljs$core$IFn$_invoke$arity$1 = (function (name__46730__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__46730__auto__);
}));

(sablono.core.time_field46838.cljs$core$IFn$_invoke$arity$2 = (function (name__46730__auto__,value__46731__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__46730__auto__,value__46731__auto__);
}));

(sablono.core.time_field46838.cljs$lang$maxFixedArity = 2);


sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field46838);

/**
 * Creates a url input field.
 */
sablono.core.url_field46841 = (function sablono$core$url_field46841(var_args){
var G__46843 = arguments.length;
switch (G__46843) {
case 1:
return sablono.core.url_field46841.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field46841.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.url_field46841.cljs$core$IFn$_invoke$arity$1 = (function (name__46730__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__46730__auto__);
}));

(sablono.core.url_field46841.cljs$core$IFn$_invoke$arity$2 = (function (name__46730__auto__,value__46731__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__46730__auto__,value__46731__auto__);
}));

(sablono.core.url_field46841.cljs$lang$maxFixedArity = 2);


sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field46841);

/**
 * Creates a week input field.
 */
sablono.core.week_field46844 = (function sablono$core$week_field46844(var_args){
var G__46848 = arguments.length;
switch (G__46848) {
case 1:
return sablono.core.week_field46844.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field46844.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.week_field46844.cljs$core$IFn$_invoke$arity$1 = (function (name__46730__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__46730__auto__);
}));

(sablono.core.week_field46844.cljs$core$IFn$_invoke$arity$2 = (function (name__46730__auto__,value__46731__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__46730__auto__,value__46731__auto__);
}));

(sablono.core.week_field46844.cljs$lang$maxFixedArity = 2);


sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field46844);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box46850 = (function sablono$core$check_box46850(var_args){
var G__46855 = arguments.length;
switch (G__46855) {
case 1:
return sablono.core.check_box46850.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box46850.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box46850.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.check_box46850.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.check_box46850.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box46850.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box46850.cljs$lang$maxFixedArity = 3);


sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box46850);
/**
 * Creates a radio button.
 */
sablono.core.radio_button46856 = (function sablono$core$radio_button46856(var_args){
var G__46858 = arguments.length;
switch (G__46858) {
case 1:
return sablono.core.radio_button46856.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button46856.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button46856.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.radio_button46856.cljs$core$IFn$_invoke$arity$1 = (function (group){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)))], null)], null);
}));

(sablono.core.radio_button46856.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0))),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button46856.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id([sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)),"-",sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button46856.cljs$lang$maxFixedArity = 3);


sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button46856);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0)));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options46861 = (function sablono$core$select_options46861(coll){
var iter__4622__auto__ = (function sablono$core$select_options46861_$_iter__46862(s__46863){
return (new cljs.core.LazySeq(null,(function (){
var s__46863__$1 = s__46863;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__46863__$1);
if(temp__5753__auto__){
var s__46863__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__46863__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__46863__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__46865 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__46864 = (0);
while(true){
if((i__46864 < size__4621__auto__)){
var x = cljs.core._nth(c__4620__auto__,i__46864);
cljs.core.chunk_append(b__46865,((cljs.core.sequential_QMARK_(x))?(function (){var vec__46867 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46867,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46867,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46867,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options46861.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options46861.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options46861.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__46970 = (i__46864 + (1));
i__46864 = G__46970;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__46865),sablono$core$select_options46861_$_iter__46862(cljs.core.chunk_rest(s__46863__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__46865),null);
}
} else {
var x = cljs.core.first(s__46863__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__46870 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46870,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46870,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46870,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options46861.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options46861.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options46861.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options46861_$_iter__46862(cljs.core.rest(s__46863__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(coll);
});

sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options46861);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down46875 = (function sablono$core$drop_down46875(var_args){
var G__46877 = arguments.length;
switch (G__46877) {
case 2:
return sablono.core.drop_down46875.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down46875.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.drop_down46875.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down46875.cljs$core$IFn$_invoke$arity$3(name,options,null);
}));

(sablono.core.drop_down46875.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null),sablono.core.select_options(options,selected)], null);
}));

(sablono.core.drop_down46875.cljs$lang$maxFixedArity = 3);


sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down46875);
/**
 * Creates a text area element.
 */
sablono.core.text_area46878 = (function sablono$core$text_area46878(var_args){
var G__46880 = arguments.length;
switch (G__46880) {
case 1:
return sablono.core.text_area46878.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area46878.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_area46878.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.text_area46878.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4223__auto__ = value;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return undefined;
}
})()], null)], null);
}));

(sablono.core.text_area46878.cljs$lang$maxFixedArity = 2);


sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area46878);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label46881 = (function sablono$core$label46881(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id(name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs(sablono.core.label46881);
/**
 * Creates a submit button.
 */
sablono.core.submit_button46882 = (function sablono$core$submit_button46882(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button46882);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button46883 = (function sablono$core$reset_button46883(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button46883);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to46885 = (function sablono$core$form_to46885(var_args){
var args__4835__auto__ = [];
var len__4829__auto___46975 = arguments.length;
var i__4830__auto___46976 = (0);
while(true){
if((i__4830__auto___46976 < len__4829__auto___46975)){
args__4835__auto__.push((arguments[i__4830__auto___46976]));

var G__46978 = (i__4830__auto___46976 + (1));
i__4830__auto___46976 = G__46978;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to46885.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(sablono.core.form_to46885.cljs$core$IFn$_invoke$arity$variadic = (function (p__46888,body){
var vec__46889 = p__46888;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46889,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46889,(1),null);
var method_str = clojure.string.upper_case(cljs.core.name(method));
var action_uri = sablono.util.to_uri(action);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
}));

(sablono.core.form_to46885.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.form_to46885.cljs$lang$applyTo = (function (seq46886){
var G__46887 = cljs.core.first(seq46886);
var seq46886__$1 = cljs.core.next(seq46886);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46887,seq46886__$1);
}));


sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to46885);

//# sourceMappingURL=sablono.core.js.map
