goog.provide('repl_tooling.editor_integration.renderer.protocols');

/**
 * @interface
 */
repl_tooling.editor_integration.renderer.protocols.Parseable = function(){};

var repl_tooling$editor_integration$renderer$protocols$Parseable$as_renderable$dyn_62019 = (function (self,repl,editor_state){
var x__4521__auto__ = (((self == null))?null:self);
var m__4522__auto__ = (repl_tooling.editor_integration.renderer.protocols.as_renderable[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$3(self,repl,editor_state) : m__4522__auto__.call(null,self,repl,editor_state));
} else {
var m__4519__auto__ = (repl_tooling.editor_integration.renderer.protocols.as_renderable["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$3(self,repl,editor_state) : m__4519__auto__.call(null,self,repl,editor_state));
} else {
throw cljs.core.missing_protocol("Parseable.as-renderable",self);
}
}
});
repl_tooling.editor_integration.renderer.protocols.as_renderable = (function repl_tooling$editor_integration$renderer$protocols$as_renderable(self,repl,editor_state){
if((((!((self == null)))) && ((!((self.repl_tooling$editor_integration$renderer$protocols$Parseable$as_renderable$arity$3 == null)))))){
return self.repl_tooling$editor_integration$renderer$protocols$Parseable$as_renderable$arity$3(self,repl,editor_state);
} else {
return repl_tooling$editor_integration$renderer$protocols$Parseable$as_renderable$dyn_62019(self,repl,editor_state);
}
});


/**
 * @interface
 */
repl_tooling.editor_integration.renderer.protocols.Renderable = function(){};

var repl_tooling$editor_integration$renderer$protocols$Renderable$as_html$dyn_62034 = (function (this$,ratom,root_QMARK_){
var x__4521__auto__ = (((this$ == null))?null:this$);
var m__4522__auto__ = (repl_tooling.editor_integration.renderer.protocols.as_html[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$3(this$,ratom,root_QMARK_) : m__4522__auto__.call(null,this$,ratom,root_QMARK_));
} else {
var m__4519__auto__ = (repl_tooling.editor_integration.renderer.protocols.as_html["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$3(this$,ratom,root_QMARK_) : m__4519__auto__.call(null,this$,ratom,root_QMARK_));
} else {
throw cljs.core.missing_protocol("Renderable.as-html",this$);
}
}
});
repl_tooling.editor_integration.renderer.protocols.as_html = (function repl_tooling$editor_integration$renderer$protocols$as_html(this$,ratom,root_QMARK_){
if((((!((this$ == null)))) && ((!((this$.repl_tooling$editor_integration$renderer$protocols$Renderable$as_html$arity$3 == null)))))){
return this$.repl_tooling$editor_integration$renderer$protocols$Renderable$as_html$arity$3(this$,ratom,root_QMARK_);
} else {
return repl_tooling$editor_integration$renderer$protocols$Renderable$as_html$dyn_62034(this$,ratom,root_QMARK_);
}
});

var repl_tooling$editor_integration$renderer$protocols$Renderable$as_text$dyn_62047 = (function (this$,ratom,root_QMARK_){
var x__4521__auto__ = (((this$ == null))?null:this$);
var m__4522__auto__ = (repl_tooling.editor_integration.renderer.protocols.as_text[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$3(this$,ratom,root_QMARK_) : m__4522__auto__.call(null,this$,ratom,root_QMARK_));
} else {
var m__4519__auto__ = (repl_tooling.editor_integration.renderer.protocols.as_text["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$3(this$,ratom,root_QMARK_) : m__4519__auto__.call(null,this$,ratom,root_QMARK_));
} else {
throw cljs.core.missing_protocol("Renderable.as-text",this$);
}
}
});
repl_tooling.editor_integration.renderer.protocols.as_text = (function repl_tooling$editor_integration$renderer$protocols$as_text(this$,ratom,root_QMARK_){
if((((!((this$ == null)))) && ((!((this$.repl_tooling$editor_integration$renderer$protocols$Renderable$as_text$arity$3 == null)))))){
return this$.repl_tooling$editor_integration$renderer$protocols$Renderable$as_text$arity$3(this$,ratom,root_QMARK_);
} else {
return repl_tooling$editor_integration$renderer$protocols$Renderable$as_text$dyn_62047(this$,ratom,root_QMARK_);
}
});


//# sourceMappingURL=repl_tooling.editor_integration.renderer.protocols.js.map
