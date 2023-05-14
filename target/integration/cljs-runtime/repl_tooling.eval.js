goog.provide('repl_tooling.eval');

/**
 * @interface
 */
repl_tooling.eval.MoreData = function(){};

var repl_tooling$eval$MoreData$without_ellision$dyn_141436 = (function (self){
var x__4521__auto__ = (((self == null))?null:self);
var m__4522__auto__ = (repl_tooling.eval.without_ellision[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(self) : m__4522__auto__.call(null,self));
} else {
var m__4519__auto__ = (repl_tooling.eval.without_ellision["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(self) : m__4519__auto__.call(null,self));
} else {
throw cljs.core.missing_protocol("MoreData.without-ellision",self);
}
}
});
/**
 * Return the object without the {:repl-tooling/... (more-fn)} key
 */
repl_tooling.eval.without_ellision = (function repl_tooling$eval$without_ellision(self){
if((((!((self == null)))) && ((!((self.repl_tooling$eval$MoreData$without_ellision$arity$1 == null)))))){
return self.repl_tooling$eval$MoreData$without_ellision$arity$1(self);
} else {
return repl_tooling$eval$MoreData$without_ellision$dyn_141436(self);
}
});

var repl_tooling$eval$MoreData$get_more_fn$dyn_141440 = (function (self){
var x__4521__auto__ = (((self == null))?null:self);
var m__4522__auto__ = (repl_tooling.eval.get_more_fn[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(self) : m__4522__auto__.call(null,self));
} else {
var m__4519__auto__ = (repl_tooling.eval.get_more_fn["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(self) : m__4519__auto__.call(null,self));
} else {
throw cljs.core.missing_protocol("MoreData.get-more-fn",self);
}
}
});
/**
 * Returns a function that'll receive an Evaluator and a callback
 * will call the callback with the same kind of object with more data
 */
repl_tooling.eval.get_more_fn = (function repl_tooling$eval$get_more_fn(self){
if((((!((self == null)))) && ((!((self.repl_tooling$eval$MoreData$get_more_fn$arity$1 == null)))))){
return self.repl_tooling$eval$MoreData$get_more_fn$arity$1(self);
} else {
return repl_tooling$eval$MoreData$get_more_fn$dyn_141440(self);
}
});


/**
 * @interface
 */
repl_tooling.eval.Evaluator = function(){};

var repl_tooling$eval$Evaluator$evaluate$dyn_141441 = (function (this$,command,opts,callback){
var x__4521__auto__ = (((this$ == null))?null:this$);
var m__4522__auto__ = (repl_tooling.eval.evaluate[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$4(this$,command,opts,callback) : m__4522__auto__.call(null,this$,command,opts,callback));
} else {
var m__4519__auto__ = (repl_tooling.eval.evaluate["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$4(this$,command,opts,callback) : m__4519__auto__.call(null,this$,command,opts,callback));
} else {
throw cljs.core.missing_protocol("Evaluator.evaluate",this$);
}
}
});
/**
 * Evaluates the current command in the current REPL evaluator. Opts is a map with the
 * following:
 * :filename -> the current filename (only works on supported REPLs for now)
 * :row -> The 0-based row of the current file
 * :col -> the 0-based col of the current file
 * :pass -> a map where the data will be copied to the result
 * :ignore -> will not send the result to the output/stdout/stderr callback
 */
repl_tooling.eval.evaluate = (function repl_tooling$eval$evaluate(this$,command,opts,callback){
if((((!((this$ == null)))) && ((!((this$.repl_tooling$eval$Evaluator$evaluate$arity$4 == null)))))){
return this$.repl_tooling$eval$Evaluator$evaluate$arity$4(this$,command,opts,callback);
} else {
return repl_tooling$eval$Evaluator$evaluate$dyn_141441(this$,command,opts,callback);
}
});

var repl_tooling$eval$Evaluator$break$dyn_141443 = (function (this$,repl){
var x__4521__auto__ = (((this$ == null))?null:this$);
var m__4522__auto__ = (repl_tooling.eval.break$[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(this$,repl) : m__4522__auto__.call(null,this$,repl));
} else {
var m__4519__auto__ = (repl_tooling.eval.break$["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(this$,repl) : m__4519__auto__.call(null,this$,repl));
} else {
throw cljs.core.missing_protocol("Evaluator.break",this$);
}
}
});
repl_tooling.eval.break$ = (function repl_tooling$eval$break(this$,repl){
if((((!((this$ == null)))) && ((!((this$.repl_tooling$eval$Evaluator$break$arity$2 == null)))))){
return this$.repl_tooling$eval$Evaluator$break$arity$2(this$,repl);
} else {
return repl_tooling$eval$Evaluator$break$dyn_141443(this$,repl);
}
});

/**
 * Uses the same API as `evaluate`, but instead of expecting a callback returns a
 * resolved promise with the result, or a rejected promise with the error
 * 
 * If no argument is passed to opts, {:ignore true} is assumed
 */
repl_tooling.eval.eval = (function repl_tooling$eval$eval(var_args){
var G__141333 = arguments.length;
switch (G__141333) {
case 2:
return repl_tooling.eval.eval.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return repl_tooling.eval.eval.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(repl_tooling.eval.eval.cljs$core$IFn$_invoke$arity$2 = (function (evaluator,command){
return repl_tooling.eval.eval.cljs$core$IFn$_invoke$arity$3(evaluator,command,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ignore","ignore",-1631542033),true], null));
}));

(repl_tooling.eval.eval.cljs$core$IFn$_invoke$arity$3 = (function (evaluator,command,opts){
var p = promesa.core.deferred();
try{repl_tooling.eval.evaluate(evaluator,command,opts,(function (res){
var parsed = repl_tooling.editor_helpers.parse_result(res);
if(cljs.core.contains_QMARK_(res,new cljs.core.Keyword(null,"result","result",1415092211))){
return promesa.core.resolve_BANG_.cljs$core$IFn$_invoke$arity$2(p,parsed);
} else {
return promesa.core.reject_BANG_(p,parsed);
}
}));
}catch (e141338){var e_141449 = e141338;
promesa.core.reject_BANG_(p,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),e_141449], null));
}
return p;
}));

(repl_tooling.eval.eval.cljs$lang$maxFixedArity = 3);

repl_tooling.eval.without_ellision_list = (function repl_tooling$eval$without_ellision_list(lst){
var G__141340 = lst;
if(cljs.core.truth_(new cljs.core.Keyword("repl-tooling","...","repl-tooling/...",-2073461648).cljs$core$IFn$_invoke$arity$1(cljs.core.last(lst)))){
return cljs.core.butlast(G__141340);
} else {
return G__141340;
}
});
repl_tooling.eval.get_more_fn_list = (function repl_tooling$eval$get_more_fn_list(lst){
var temp__5753__auto__ = new cljs.core.Keyword("repl-tooling","...","repl-tooling/...",-2073461648).cljs$core$IFn$_invoke$arity$1(cljs.core.last(lst));
if(cljs.core.truth_(temp__5753__auto__)){
var fun = temp__5753__auto__;
return (function() {
var repl_tooling$eval$get_more_fn_list_$_more = null;
var repl_tooling$eval$get_more_fn_list_$_more__2 = (function (repl,callback){
return repl_tooling$eval$get_more_fn_list_$_more.cljs$core$IFn$_invoke$arity$3(repl,true,callback);
});
var repl_tooling$eval$get_more_fn_list_$_more__3 = (function (repl,combine_QMARK_,callback){
return repl_tooling.eval.evaluate(repl,fun,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ignore","ignore",-1631542033),true], null),(function (p1__141343_SHARP_){
var res = repl_tooling.editor_helpers.parse_result(p1__141343_SHARP_);
var G__141348 = (function (){var G__141349 = new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(res);
if(cljs.core.truth_(combine_QMARK_)){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(repl_tooling.eval.without_ellision(lst),G__141349);
} else {
return G__141349;
}
})();
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__141348) : callback.call(null,G__141348));
}));
});
repl_tooling$eval$get_more_fn_list_$_more = function(repl,combine_QMARK_,callback){
switch(arguments.length){
case 2:
return repl_tooling$eval$get_more_fn_list_$_more__2.call(this,repl,combine_QMARK_);
case 3:
return repl_tooling$eval$get_more_fn_list_$_more__3.call(this,repl,combine_QMARK_,callback);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
repl_tooling$eval$get_more_fn_list_$_more.cljs$core$IFn$_invoke$arity$2 = repl_tooling$eval$get_more_fn_list_$_more__2;
repl_tooling$eval$get_more_fn_list_$_more.cljs$core$IFn$_invoke$arity$3 = repl_tooling$eval$get_more_fn_list_$_more__3;
return repl_tooling$eval$get_more_fn_list_$_more;
})()
} else {
return null;
}
});
repl_tooling.eval.without_map = (function repl_tooling$eval$without_map(self){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("repl-tooling","...","repl-tooling/...",-2073461648),null], null));
});
repl_tooling.eval.get_more_map = (function repl_tooling$eval$get_more_map(self){
var temp__5753__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(self,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("repl-tooling","...","repl-tooling/...",-2073461648),null], null),new cljs.core.Keyword("repl-tooling","...","repl-tooling/...",-2073461648)], null));
if(cljs.core.truth_(temp__5753__auto__)){
var fun = temp__5753__auto__;
return (function() {
var repl_tooling$eval$get_more_map_$_more = null;
var repl_tooling$eval$get_more_map_$_more__2 = (function (repl,callback){
return repl_tooling$eval$get_more_map_$_more.cljs$core$IFn$_invoke$arity$3(repl,true,callback);
});
var repl_tooling$eval$get_more_map_$_more__3 = (function (repl,combine_QMARK_,callback){
return repl_tooling.eval.evaluate(repl,fun,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ignore","ignore",-1631542033),true], null),(function (p1__141354_SHARP_){
var res = repl_tooling.editor_helpers.parse_result(p1__141354_SHARP_);
var G__141358 = (function (){var G__141359 = new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(res);
if(cljs.core.truth_(combine_QMARK_)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self,G__141359], 0));
} else {
return G__141359;
}
})();
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__141358) : callback.call(null,G__141358));
}));
});
repl_tooling$eval$get_more_map_$_more = function(repl,combine_QMARK_,callback){
switch(arguments.length){
case 2:
return repl_tooling$eval$get_more_map_$_more__2.call(this,repl,combine_QMARK_);
case 3:
return repl_tooling$eval$get_more_map_$_more__3.call(this,repl,combine_QMARK_,callback);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
repl_tooling$eval$get_more_map_$_more.cljs$core$IFn$_invoke$arity$2 = repl_tooling$eval$get_more_map_$_more__2;
repl_tooling$eval$get_more_map_$_more.cljs$core$IFn$_invoke$arity$3 = repl_tooling$eval$get_more_map_$_more__3;
return repl_tooling$eval$get_more_map_$_more;
})()
} else {
return null;
}
});
(cljs.core.PersistentHashMap.prototype.repl_tooling$eval$MoreData$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentHashMap.prototype.repl_tooling$eval$MoreData$without_ellision$arity$1 = (function (self){
var self__$1 = this;
return repl_tooling.eval.without_map(self__$1);
}));

(cljs.core.PersistentHashMap.prototype.repl_tooling$eval$MoreData$get_more_fn$arity$1 = (function (self){
var self__$1 = this;
return repl_tooling.eval.get_more_map(self__$1);
}));

(cljs.core.PersistentArrayMap.prototype.repl_tooling$eval$MoreData$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentArrayMap.prototype.repl_tooling$eval$MoreData$without_ellision$arity$1 = (function (self){
var self__$1 = this;
return repl_tooling.eval.without_map(self__$1);
}));

(cljs.core.PersistentArrayMap.prototype.repl_tooling$eval$MoreData$get_more_fn$arity$1 = (function (self){
var self__$1 = this;
return repl_tooling.eval.get_more_map(self__$1);
}));

(repl_tooling.editor_helpers.IncompleteObj.prototype.repl_tooling$eval$MoreData$ = cljs.core.PROTOCOL_SENTINEL);

(repl_tooling.editor_helpers.IncompleteObj.prototype.repl_tooling$eval$MoreData$without_ellision$arity$1 = (function (_){
var ___$1 = this;
return null;
}));

(repl_tooling.editor_helpers.IncompleteObj.prototype.repl_tooling$eval$MoreData$get_more_fn$arity$1 = (function (self){
var self__$1 = this;

return (function() {
var repl_tooling$eval$more = null;
var repl_tooling$eval$more__2 = (function (repl,callback){
return repl_tooling$eval$more.cljs$core$IFn$_invoke$arity$3(repl,true,callback);
});
var repl_tooling$eval$more__3 = (function (repl,_,callback){
return repl_tooling.eval.evaluate(repl,self__$1.more_fn,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ignore","ignore",-1631542033),true], null),(function (p1__141361_SHARP_){
var parsed = repl_tooling.editor_helpers.parse_result(p1__141361_SHARP_);
var obj = new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(parsed);
var browsable = repl_tooling.editor_helpers.as_obj(cljs.core.cons(null,obj));
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(browsable) : callback.call(null,browsable));
}));
});
repl_tooling$eval$more = function(repl,_,callback){
switch(arguments.length){
case 2:
return repl_tooling$eval$more__2.call(this,repl,_);
case 3:
return repl_tooling$eval$more__3.call(this,repl,_,callback);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
repl_tooling$eval$more.cljs$core$IFn$_invoke$arity$2 = repl_tooling$eval$more__2;
repl_tooling$eval$more.cljs$core$IFn$_invoke$arity$3 = repl_tooling$eval$more__3;
return repl_tooling$eval$more;
})()
}));

(cljs.core.LazySeq.prototype.repl_tooling$eval$MoreData$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.repl_tooling$eval$MoreData$without_ellision$arity$1 = (function (self){
var self__$1 = this;
return repl_tooling.eval.without_ellision_list(self__$1);
}));

(cljs.core.LazySeq.prototype.repl_tooling$eval$MoreData$get_more_fn$arity$1 = (function (self){
var self__$1 = this;
return repl_tooling.eval.get_more_fn_list(self__$1);
}));

goog.object.set(repl_tooling.eval.MoreData,"_",true);

goog.object.set(repl_tooling.eval.without_ellision,"_",(function (self){
return self;
}));

goog.object.set(repl_tooling.eval.get_more_fn,"_",(function (_){
return null;
}));

(repl_tooling.editor_helpers.IncompleteStr.prototype.repl_tooling$eval$MoreData$ = cljs.core.PROTOCOL_SENTINEL);

(repl_tooling.editor_helpers.IncompleteStr.prototype.repl_tooling$eval$MoreData$without_ellision$arity$1 = (function (self){
var self__$1 = this;
return self__$1.repl_tooling$editor_helpers$IIncompleteStr$only_str$arity$1(null);
}));

(repl_tooling.editor_helpers.IncompleteStr.prototype.repl_tooling$eval$MoreData$get_more_fn$arity$1 = (function (self){
var self__$1 = this;
return (function() {
var repl_tooling$eval$more = null;
var repl_tooling$eval$more__2 = (function (repl,callback){
return repl_tooling$eval$more.cljs$core$IFn$_invoke$arity$3(repl,true,callback);
});
var repl_tooling$eval$more__3 = (function (repl,combine_QMARK_,callback){
var fun = new cljs.core.Keyword(null,"get-more","get-more",634750896).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(self__$1));
return repl_tooling.eval.evaluate(repl,fun,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ignore","ignore",-1631542033),true], null),(function (p1__141368_SHARP_){
var res = repl_tooling.editor_helpers.parse_result(p1__141368_SHARP_);
var G__141379 = (function (){var G__141381 = new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(res);
if(cljs.core.truth_(combine_QMARK_)){
return self__$1.repl_tooling$editor_helpers$IIncompleteStr$concat_with$arity$2(null,G__141381);
} else {
return G__141381;
}
})();
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__141379) : callback.call(null,G__141379));
}));
});
repl_tooling$eval$more = function(repl,combine_QMARK_,callback){
switch(arguments.length){
case 2:
return repl_tooling$eval$more__2.call(this,repl,combine_QMARK_);
case 3:
return repl_tooling$eval$more__3.call(this,repl,combine_QMARK_,callback);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
repl_tooling$eval$more.cljs$core$IFn$_invoke$arity$2 = repl_tooling$eval$more__2;
repl_tooling$eval$more.cljs$core$IFn$_invoke$arity$3 = repl_tooling$eval$more__3;
return repl_tooling$eval$more;
})()
}));

(cljs.core.PersistentVector.prototype.repl_tooling$eval$MoreData$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.repl_tooling$eval$MoreData$without_ellision$arity$1 = (function (self){
var self__$1 = this;
var G__141383 = self__$1;
if(cljs.core.truth_(new cljs.core.Keyword("repl-tooling","...","repl-tooling/...",-2073461648).cljs$core$IFn$_invoke$arity$1(cljs.core.last(self__$1)))){
return cljs.core.pop(G__141383);
} else {
return G__141383;
}
}));

(cljs.core.PersistentVector.prototype.repl_tooling$eval$MoreData$get_more_fn$arity$1 = (function (self){
var self__$1 = this;
var temp__5753__auto__ = new cljs.core.Keyword("repl-tooling","...","repl-tooling/...",-2073461648).cljs$core$IFn$_invoke$arity$1(cljs.core.last(self__$1));
if(cljs.core.truth_(temp__5753__auto__)){
var fun = temp__5753__auto__;
return (function() {
var repl_tooling$eval$more = null;
var repl_tooling$eval$more__2 = (function (repl,callback){
return repl_tooling$eval$more.cljs$core$IFn$_invoke$arity$3(repl,true,callback);
});
var repl_tooling$eval$more__3 = (function (repl,combine_QMARK_,callback){
return repl_tooling.eval.evaluate(repl,fun,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ignore","ignore",-1631542033),true], null),(function (p1__141370_SHARP_){
var res = repl_tooling.editor_helpers.parse_result(p1__141370_SHARP_);
var G__141385 = (function (){var G__141386 = new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(res);
if(cljs.core.truth_(combine_QMARK_)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(repl_tooling.eval.without_ellision(self__$1),G__141386);
} else {
return G__141386;
}
})();
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__141385) : callback.call(null,G__141385));
}));
});
repl_tooling$eval$more = function(repl,combine_QMARK_,callback){
switch(arguments.length){
case 2:
return repl_tooling$eval$more__2.call(this,repl,combine_QMARK_);
case 3:
return repl_tooling$eval$more__3.call(this,repl,combine_QMARK_,callback);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
repl_tooling$eval$more.cljs$core$IFn$_invoke$arity$2 = repl_tooling$eval$more__2;
repl_tooling$eval$more.cljs$core$IFn$_invoke$arity$3 = repl_tooling$eval$more__3;
return repl_tooling$eval$more;
})()
} else {
return null;
}
}));

(cljs.core.List.prototype.repl_tooling$eval$MoreData$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.List.prototype.repl_tooling$eval$MoreData$without_ellision$arity$1 = (function (self){
var self__$1 = this;
return repl_tooling.eval.without_ellision_list(self__$1);
}));

(cljs.core.List.prototype.repl_tooling$eval$MoreData$get_more_fn$arity$1 = (function (self){
var self__$1 = this;
return repl_tooling.eval.get_more_fn_list(self__$1);
}));

(repl_tooling.editor_helpers.WithTag.prototype.repl_tooling$eval$MoreData$ = cljs.core.PROTOCOL_SENTINEL);

(repl_tooling.editor_helpers.WithTag.prototype.repl_tooling$eval$MoreData$without_ellision$arity$1 = (function (self){
var self__$1 = this;
return (new repl_tooling.editor_helpers.WithTag(repl_tooling.eval.without_ellision(self__$1.repl_tooling$editor_helpers$Taggable$obj$arity$1(null)),self__$1.repl_tooling$editor_helpers$Taggable$tag$arity$1(null)));
}));

(repl_tooling.editor_helpers.WithTag.prototype.repl_tooling$eval$MoreData$get_more_fn$arity$1 = (function (self){
var self__$1 = this;
var temp__5753__auto__ = repl_tooling.eval.get_more_fn(self__$1.repl_tooling$editor_helpers$Taggable$obj$arity$1(null));
if(cljs.core.truth_(temp__5753__auto__)){
var fun = temp__5753__auto__;
return (function() {
var repl_tooling$eval$more = null;
var repl_tooling$eval$more__2 = (function (repl,callback){
return repl_tooling$eval$more.cljs$core$IFn$_invoke$arity$3(repl,true,callback);
});
var repl_tooling$eval$more__3 = (function (repl,combine_QMARK_,callback){
var G__141388 = repl;
var G__141389 = combine_QMARK_;
var G__141390 = (function (p1__141367_SHARP_){
var G__141391 = (new repl_tooling.editor_helpers.WithTag(p1__141367_SHARP_,self__$1.repl_tooling$editor_helpers$Taggable$tag$arity$1(null)));
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__141391) : callback.call(null,G__141391));
});
return (fun.cljs$core$IFn$_invoke$arity$3 ? fun.cljs$core$IFn$_invoke$arity$3(G__141388,G__141389,G__141390) : fun.call(null,G__141388,G__141389,G__141390));
});
repl_tooling$eval$more = function(repl,combine_QMARK_,callback){
switch(arguments.length){
case 2:
return repl_tooling$eval$more__2.call(this,repl,combine_QMARK_);
case 3:
return repl_tooling$eval$more__3.call(this,repl,combine_QMARK_,callback);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
repl_tooling$eval$more.cljs$core$IFn$_invoke$arity$2 = repl_tooling$eval$more__2;
repl_tooling$eval$more.cljs$core$IFn$_invoke$arity$3 = repl_tooling$eval$more__3;
return repl_tooling$eval$more;
})()
} else {
return null;
}
}));

(cljs.core.PersistentHashSet.prototype.repl_tooling$eval$MoreData$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentHashSet.prototype.repl_tooling$eval$MoreData$without_ellision$arity$1 = (function (self){
var self__$1 = this;
return cljs.core.set(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("repl-tooling","...","repl-tooling/...",-2073461648),self__$1));
}));

(cljs.core.PersistentHashSet.prototype.repl_tooling$eval$MoreData$get_more_fn$arity$1 = (function (self){
var self__$1 = this;
var temp__5753__auto__ = cljs.core.some(new cljs.core.Keyword("repl-tooling","...","repl-tooling/...",-2073461648),self__$1);
if(cljs.core.truth_(temp__5753__auto__)){
var fun = temp__5753__auto__;
return (function() {
var repl_tooling$eval$more = null;
var repl_tooling$eval$more__2 = (function (repl,callback){
return repl_tooling$eval$more.cljs$core$IFn$_invoke$arity$3(repl,true,callback);
});
var repl_tooling$eval$more__3 = (function (repl,combine_QMARK_,callback){
return repl_tooling.eval.evaluate(repl,fun,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ignore","ignore",-1631542033),true], null),(function (p1__141369_SHARP_){
var res = repl_tooling.editor_helpers.parse_result(p1__141369_SHARP_);
var G__141399 = (function (){var G__141400 = new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(res);
if(cljs.core.truth_(combine_QMARK_)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(repl_tooling.eval.without_ellision(self__$1),G__141400);
} else {
return G__141400;
}
})();
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__141399) : callback.call(null,G__141399));
}));
});
repl_tooling$eval$more = function(repl,combine_QMARK_,callback){
switch(arguments.length){
case 2:
return repl_tooling$eval$more__2.call(this,repl,combine_QMARK_);
case 3:
return repl_tooling$eval$more__3.call(this,repl,combine_QMARK_,callback);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
repl_tooling$eval$more.cljs$core$IFn$_invoke$arity$2 = repl_tooling$eval$more__2;
repl_tooling$eval$more.cljs$core$IFn$_invoke$arity$3 = repl_tooling$eval$more__3;
return repl_tooling$eval$more;
})()
} else {
return null;
}
}));

(repl_tooling.editor_helpers.Browseable.prototype.repl_tooling$eval$MoreData$ = cljs.core.PROTOCOL_SENTINEL);

(repl_tooling.editor_helpers.Browseable.prototype.repl_tooling$eval$MoreData$without_ellision$arity$1 = (function (self){
var self__$1 = this;
return self__$1.object;
}));

(repl_tooling.editor_helpers.Browseable.prototype.repl_tooling$eval$MoreData$get_more_fn$arity$1 = (function (self){
var self__$1 = this;
var temp__5753__auto__ = (function (){var or__4223__auto__ = self__$1.more_fn;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return repl_tooling.eval.get_more_fn(self__$1.attributes);
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var fun = temp__5753__auto__;
return (function() {
var repl_tooling$eval$more = null;
var repl_tooling$eval$more__2 = (function (repl,callback){
return repl_tooling$eval$more.cljs$core$IFn$_invoke$arity$3(repl,true,callback);
});
var repl_tooling$eval$more__3 = (function (repl,combine_QMARK_,callback){
var call = (function (p1__141364_SHARP_){
var G__141418 = (function (){var G__141420 = p1__141364_SHARP_;
if(cljs.core.truth_(combine_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(self__$1,new cljs.core.Keyword(null,"more-fn","more-fn",-1002134682),null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"attributes","attributes",-74013604),G__141420], 0));
} else {
return G__141420;
}
})();
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__141418) : callback.call(null,G__141418));
});
if(cljs.core.coll_QMARK_(fun)){
return repl_tooling.eval.evaluate(repl,fun,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ignore","ignore",-1631542033),true], null),(function (p1__141365_SHARP_){
return call(new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(repl_tooling.editor_helpers.parse_result(p1__141365_SHARP_)));
}));
} else {
return (fun.cljs$core$IFn$_invoke$arity$2 ? fun.cljs$core$IFn$_invoke$arity$2(repl,call) : fun.call(null,repl,call));
}
});
repl_tooling$eval$more = function(repl,combine_QMARK_,callback){
switch(arguments.length){
case 2:
return repl_tooling$eval$more__2.call(this,repl,combine_QMARK_);
case 3:
return repl_tooling$eval$more__3.call(this,repl,combine_QMARK_,callback);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
repl_tooling$eval$more.cljs$core$IFn$_invoke$arity$2 = repl_tooling$eval$more__2;
repl_tooling$eval$more.cljs$core$IFn$_invoke$arity$3 = repl_tooling$eval$more__3;
return repl_tooling$eval$more;
})()
} else {
return null;
}
}));

(cljs.core.PersistentTreeMap.prototype.repl_tooling$eval$MoreData$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentTreeMap.prototype.repl_tooling$eval$MoreData$without_ellision$arity$1 = (function (self){
var self__$1 = this;
return repl_tooling.eval.without_map(self__$1);
}));

(cljs.core.PersistentTreeMap.prototype.repl_tooling$eval$MoreData$get_more_fn$arity$1 = (function (self){
var self__$1 = this;
return repl_tooling.eval.get_more_map(self__$1);
}));

//# sourceMappingURL=repl_tooling.eval.js.map
