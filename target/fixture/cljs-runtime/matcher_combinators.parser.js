goog.provide('matcher_combinators.parser');
goog.object.set(matcher_combinators.core.Matcher,"null",true);

goog.object.set(matcher_combinators.core._match,"null",(function (this$,actual){
return matcher_combinators.core.match(matcher_combinators.matchers.equals(this$),actual);
}));

(cljs.core.Var.prototype.matcher_combinators$core$Matcher$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Var.prototype.matcher_combinators$core$Matcher$_match$arity$2 = (function (this$,actual){
var this$__$1 = this;
return matcher_combinators.core.match(matcher_combinators.matchers.equals(this$__$1),actual);
}));

(cljs.core.UUID.prototype.matcher_combinators$core$Matcher$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.UUID.prototype.matcher_combinators$core$Matcher$_match$arity$2 = (function (this$,actual){
var this$__$1 = this;
return matcher_combinators.core.match(matcher_combinators.matchers.equals(this$__$1),actual);
}));

(RegExp.prototype.matcher_combinators$core$Matcher$ = cljs.core.PROTOCOL_SENTINEL);

(RegExp.prototype.matcher_combinators$core$Matcher$_match$arity$2 = (function (this$,actual){
var this$__$1 = this;
return matcher_combinators.core.match(matcher_combinators.matchers.regex(this$__$1),actual);
}));

goog.object.set(matcher_combinators.core.Matcher,"boolean",true);

goog.object.set(matcher_combinators.core._match,"boolean",(function (this$,actual){
return matcher_combinators.core.match(matcher_combinators.matchers.equals(this$),actual);
}));

(cljs.core.Symbol.prototype.matcher_combinators$core$Matcher$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Symbol.prototype.matcher_combinators$core$Matcher$_match$arity$2 = (function (this$,actual){
var this$__$1 = this;
return matcher_combinators.core.match(matcher_combinators.matchers.equals(this$__$1),actual);
}));

(Date.prototype.matcher_combinators$core$Matcher$ = cljs.core.PROTOCOL_SENTINEL);

(Date.prototype.matcher_combinators$core$Matcher$_match$arity$2 = (function (this$,actual){
var this$__$1 = this;
return matcher_combinators.core.match(matcher_combinators.matchers.equals(this$__$1),actual);
}));

(cljs.core.Cons.prototype.matcher_combinators$core$Matcher$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Cons.prototype.matcher_combinators$core$Matcher$_match$arity$2 = (function (this$,actual){
var this$__$1 = this;
return matcher_combinators.core.match(matcher_combinators.matchers.equals(this$__$1),actual);
}));

(goog.Uri.prototype.matcher_combinators$core$Matcher$ = cljs.core.PROTOCOL_SENTINEL);

(goog.Uri.prototype.matcher_combinators$core$Matcher$_match$arity$2 = (function (this$,actual){
var this$__$1 = this;
return matcher_combinators.core.match(matcher_combinators.matchers.cljs_uri(this$__$1),actual);
}));

goog.object.set(matcher_combinators.core.Matcher,"number",true);

goog.object.set(matcher_combinators.core._match,"number",(function (this$,actual){
return matcher_combinators.core.match(matcher_combinators.matchers.equals(this$),actual);
}));

goog.object.set(matcher_combinators.core.Matcher,"_",true);

goog.object.set(matcher_combinators.core._match,"_",(function (this$,actual){
if((((!((this$ == null))))?(((((this$.cljs$lang$protocol_mask$partition0$ & (1024))) || ((cljs.core.PROTOCOL_SENTINEL === this$.cljs$core$IMap$))))?true:(((!this$.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IMap,this$):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IMap,this$))){
return matcher_combinators.core.match(matcher_combinators.matchers.embeds(this$),actual);
} else {
if((function (){var or__4223__auto__ = (((!((this$ == null))))?(((((this$.cljs$lang$protocol_mask$partition0$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === this$.cljs$core$ISet$))))?true:(((!this$.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISet,this$):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISet,this$));
if(or__4223__auto__){
return or__4223__auto__;
} else {
if((!((this$ == null)))){
if((((this$.cljs$lang$protocol_mask$partition0$ & (16777216))) || ((cljs.core.PROTOCOL_SENTINEL === this$.cljs$core$ISequential$)))){
return true;
} else {
if((!this$.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,this$);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,this$);
}
}
})()){
return matcher_combinators.core.match(matcher_combinators.matchers.equals(this$),actual);
} else {
return null;
}
}
}));

(cljs.core.Repeat.prototype.matcher_combinators$core$Matcher$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Repeat.prototype.matcher_combinators$core$Matcher$_match$arity$2 = (function (this$,actual){
var this$__$1 = this;
return matcher_combinators.core.match(matcher_combinators.matchers.equals(this$__$1),actual);
}));

goog.object.set(matcher_combinators.core.Matcher,"string",true);

goog.object.set(matcher_combinators.core._match,"string",(function (this$,actual){
return matcher_combinators.core.match(matcher_combinators.matchers.equals(this$),actual);
}));

goog.object.set(matcher_combinators.core.Matcher,"function",true);

goog.object.set(matcher_combinators.core._match,"function",(function (this$,actual){
return matcher_combinators.core.match(matcher_combinators.matchers.pred(this$),actual);
}));

(cljs.core.Keyword.prototype.matcher_combinators$core$Matcher$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.matcher_combinators$core$Matcher$_match$arity$2 = (function (this$,actual){
var this$__$1 = this;
return matcher_combinators.core.match(matcher_combinators.matchers.equals(this$__$1),actual);
}));

//# sourceMappingURL=matcher_combinators.parser.js.map
