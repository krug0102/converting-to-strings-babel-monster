goog.provide('com.wsscode.log.protocols');

/**
 * @interface
 */
com.wsscode.log.protocols.Logger = function(){};

var com$wsscode$log$protocols$Logger$_log_event$dyn_83048 = (function (this$,data){
var x__4521__auto__ = (((this$ == null))?null:this$);
var m__4522__auto__ = (com.wsscode.log.protocols._log_event[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(this$,data) : m__4522__auto__.call(null,this$,data));
} else {
var m__4519__auto__ = (com.wsscode.log.protocols._log_event["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(this$,data) : m__4519__auto__.call(null,this$,data));
} else {
throw cljs.core.missing_protocol("Logger.-log-event",this$);
}
}
});
com.wsscode.log.protocols._log_event = (function com$wsscode$log$protocols$_log_event(this$,data){
if((((!((this$ == null)))) && ((!((this$.com$wsscode$log$protocols$Logger$_log_event$arity$2 == null)))))){
return this$.com$wsscode$log$protocols$Logger$_log_event$arity$2(this$,data);
} else {
return com$wsscode$log$protocols$Logger$_log_event$dyn_83048(this$,data);
}
});


//# sourceMappingURL=com.wsscode.log.protocols.js.map
