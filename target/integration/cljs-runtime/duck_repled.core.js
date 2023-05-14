goog.provide('duck_repled.core');
duck_repled.core.original_resolvers = cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(duck_repled.editor_resolvers.resolvers,duck_repled.repl_resolvers.resolvers,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([duck_repled.definition_resolvers.resolvers], 0)));
duck_repled.core.gen_resolver_fun = (function duck_repled$core$gen_resolver_fun(fun,outputs){
return (function (_,input){
return promesa.protocols._bind(null,(function (___56277__auto__){
return promesa.protocols._bind((fun.cljs$core$IFn$_invoke$arity$1 ? fun.cljs$core$IFn$_invoke$arity$1(input) : fun.call(null,input)),(function (result){
return promesa.protocols._bind(null,(function (___56267__auto__){
return promesa.protocols._promise(duck_repled.schemas.validate_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.keys(result),result,["Invalid schema on custom resolver outputing ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(outputs)].join('')));
}));
}));
}));
});
});
duck_repled.core.gen_eql = (function duck_repled$core$gen_eql(var_args){
var G__89364 = arguments.length;
switch (G__89364) {
case 0:
return duck_repled.core.gen_eql.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return duck_repled.core.gen_eql.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(duck_repled.core.gen_eql.cljs$core$IFn$_invoke$arity$0 = (function (){
return duck_repled.core.gen_eql.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}));

(duck_repled.core.gen_eql.cljs$core$IFn$_invoke$arity$1 = (function (p__89369){
var map__89370 = p__89369;
var map__89370__$1 = cljs.core.__destructure_map(map__89370);
var resolvers = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__89370__$1,new cljs.core.Keyword(null,"resolvers","resolvers",-1037942130),duck_repled.core.original_resolvers);
var plugin = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__89370__$1,new cljs.core.Keyword(null,"plugin","plugin",-1688841923),cljs.core.identity);
var env = (function (){var G__89371 = com.wsscode.pathom3.plugin.register.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom3.connect.indexes.register.cljs$core$IFn$_invoke$arity$1(resolvers),com.wsscode.pathom3.connect.built_in.plugins.attribute_errors_plugin());
return (plugin.cljs$core$IFn$_invoke$arity$1 ? plugin.cljs$core$IFn$_invoke$arity$1(G__89371) : plugin.call(null,G__89371));
})();
return (function() {
var duck_repled$core$q = null;
var duck_repled$core$q__1 = (function (query){
return duck_repled$core$q.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,query);
});
var duck_repled$core$q__2 = (function (seed,query){
duck_repled.schemas.validate_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(seed),seed);

return com.wsscode.pathom3.interface$.async.eql.process.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"seed","seed",68613327),seed),query);
});
duck_repled$core$q = function(seed,query){
switch(arguments.length){
case 1:
return duck_repled$core$q__1.call(this,seed);
case 2:
return duck_repled$core$q__2.call(this,seed,query);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
duck_repled$core$q.cljs$core$IFn$_invoke$arity$1 = duck_repled$core$q__1;
duck_repled$core$q.cljs$core$IFn$_invoke$arity$2 = duck_repled$core$q__2;
return duck_repled$core$q;
})()
}));

(duck_repled.core.gen_eql.cljs$lang$maxFixedArity = 1);

duck_repled.core.add_resolver = (function duck_repled$core$add_resolver(var_args){
var G__89373 = arguments.length;
switch (G__89373) {
case 2:
return duck_repled.core.add_resolver.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return duck_repled.core.add_resolver.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(duck_repled.core.add_resolver.cljs$core$IFn$_invoke$arity$2 = (function (config,fun){
return duck_repled.core.add_resolver.cljs$core$IFn$_invoke$arity$3(duck_repled.core.original_resolvers,config,fun);
}));

(duck_repled.core.add_resolver.cljs$core$IFn$_invoke$arity$3 = (function (resolvers,p__89375,fun){
var map__89376 = p__89375;
var map__89376__$1 = cljs.core.__destructure_map(map__89376);
var config = map__89376__$1;
var inputs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89376__$1,new cljs.core.Keyword(null,"inputs","inputs",865803858));
var outputs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89376__$1,new cljs.core.Keyword(null,"outputs","outputs",-1896513034));
var priority = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89376__$1,new cljs.core.Keyword(null,"priority","priority",1431093715));
var temp__5753__auto___89411 = duck_repled.schemas.explain_add_resolver(config);
if(cljs.core.truth_(temp__5753__auto___89411)){
var errors_89412 = temp__5753__auto___89411;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Input to add-resolver is invalid",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"errors","errors",-908790718),errors_89412], null));
} else {
}

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(resolvers,com.wsscode.pathom3.connect.operation.resolver.cljs$core$IFn$_invoke$arity$3(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("custom-resolver-"),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","input","com.wsscode.pathom3.connect.operation/input",-1553849497),inputs,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","output","com.wsscode.pathom3.connect.operation/output",801488703),outputs,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","priority","com.wsscode.pathom3.connect.operation/priority",-813904543),(function (){var or__4223__auto__ = priority;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return (50);
}
})()], null),duck_repled.core.gen_resolver_fun(fun,outputs)));
}));

(duck_repled.core.add_resolver.cljs$lang$maxFixedArity = 3);

duck_repled.core.rename_resolve_out = (function duck_repled$core$rename_resolve_out(resolve_out){
var out_ns = cljs.core.namespace(resolve_out);
var out_name = cljs.core.name(resolve_out);
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(out_ns,[out_name,"-rewrote"].join(''));
});
duck_repled.core.rename_resolvers_that_output = (function duck_repled$core$rename_resolvers_that_output(resolvers,outputs){
var rewroted_map = cljs.core.zipmap(outputs,cljs.core.map.cljs$core$IFn$_invoke$arity$2(duck_repled.core.rename_resolve_out,outputs));
var iter__4622__auto__ = (function duck_repled$core$rename_resolvers_that_output_$_iter__89382(s__89383){
return (new cljs.core.LazySeq(null,(function (){
var s__89383__$1 = s__89383;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__89383__$1);
if(temp__5753__auto__){
var s__89383__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__89383__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__89383__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__89385 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__89384 = (0);
while(true){
if((i__89384 < size__4621__auto__)){
var resolver = cljs.core._nth(c__4620__auto__,i__89384);
var resolver_out = new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","output","com.wsscode.pathom3.connect.operation/output",801488703).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(resolver));
var new_out = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (i__89384,resolver_out,resolver,c__4620__auto__,size__4621__auto__,b__89385,s__89383__$2,temp__5753__auto__,rewroted_map){
return (function (p1__89381_SHARP_){
var G__89390 = p1__89381_SHARP_;
if(cljs.core.truth_((rewroted_map.cljs$core$IFn$_invoke$arity$1 ? rewroted_map.cljs$core$IFn$_invoke$arity$1(p1__89381_SHARP_) : rewroted_map.call(null,p1__89381_SHARP_)))){
return (rewroted_map.cljs$core$IFn$_invoke$arity$1 ? rewroted_map.cljs$core$IFn$_invoke$arity$1(G__89390) : rewroted_map.call(null,G__89390));
} else {
return G__89390;
}
});})(i__89384,resolver_out,resolver,c__4620__auto__,size__4621__auto__,b__89385,s__89383__$2,temp__5753__auto__,rewroted_map))
,resolver_out);
var fun = new cljs.core.Keyword(null,"resolve","resolve",-1584445482).cljs$core$IFn$_invoke$arity$1(resolver);
cljs.core.chunk_append(b__89385,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(resolver_out,new_out))?resolver:com.wsscode.pathom3.connect.operation.resolver.cljs$core$IFn$_invoke$arity$3(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","op-name","com.wsscode.pathom3.connect.operation/op-name",-1249801049).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(resolver))),"-renamed"].join('')),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","input","com.wsscode.pathom3.connect.operation/input",-1553849497),new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","input","com.wsscode.pathom3.connect.operation/input",-1553849497).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(resolver)),new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","output","com.wsscode.pathom3.connect.operation/output",801488703),new_out,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","priority","com.wsscode.pathom3.connect.operation/priority",-813904543),new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","priority","com.wsscode.pathom3.connect.operation/priority",-813904543).cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(resolver),(0))], null),((function (i__89384,resolver_out,new_out,fun,resolver,c__4620__auto__,size__4621__auto__,b__89385,s__89383__$2,temp__5753__auto__,rewroted_map){
return (function() { 
var G__89417__delegate = function (args){
return promesa.protocols._bind(null,((function (i__89384,resolver_out,new_out,fun,resolver,c__4620__auto__,size__4621__auto__,b__89385,s__89383__$2,temp__5753__auto__,rewroted_map){
return (function (___56277__auto__){
return promesa.protocols._bind(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(fun,args),((function (i__89384,resolver_out,new_out,fun,resolver,c__4620__auto__,size__4621__auto__,b__89385,s__89383__$2,temp__5753__auto__,rewroted_map){
return (function (res){
return promesa.protocols._bind(null,((function (i__89384,resolver_out,new_out,fun,resolver,c__4620__auto__,size__4621__auto__,b__89385,s__89383__$2,temp__5753__auto__,rewroted_map){
return (function (___56267__auto__){
return promesa.protocols._promise(clojure.set.rename_keys(res,rewroted_map));
});})(i__89384,resolver_out,new_out,fun,resolver,c__4620__auto__,size__4621__auto__,b__89385,s__89383__$2,temp__5753__auto__,rewroted_map))
);
});})(i__89384,resolver_out,new_out,fun,resolver,c__4620__auto__,size__4621__auto__,b__89385,s__89383__$2,temp__5753__auto__,rewroted_map))
);
});})(i__89384,resolver_out,new_out,fun,resolver,c__4620__auto__,size__4621__auto__,b__89385,s__89383__$2,temp__5753__auto__,rewroted_map))
);
};
var G__89417 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__89418__i = 0, G__89418__a = new Array(arguments.length -  0);
while (G__89418__i < G__89418__a.length) {G__89418__a[G__89418__i] = arguments[G__89418__i + 0]; ++G__89418__i;}
  args = new cljs.core.IndexedSeq(G__89418__a,0,null);
} 
return G__89417__delegate.call(this,args);};
G__89417.cljs$lang$maxFixedArity = 0;
G__89417.cljs$lang$applyTo = (function (arglist__89419){
var args = cljs.core.seq(arglist__89419);
return G__89417__delegate(args);
});
G__89417.cljs$core$IFn$_invoke$arity$variadic = G__89417__delegate;
return G__89417;
})()
;})(i__89384,resolver_out,new_out,fun,resolver,c__4620__auto__,size__4621__auto__,b__89385,s__89383__$2,temp__5753__auto__,rewroted_map))
)));

var G__89420 = (i__89384 + (1));
i__89384 = G__89420;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__89385),duck_repled$core$rename_resolvers_that_output_$_iter__89382(cljs.core.chunk_rest(s__89383__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__89385),null);
}
} else {
var resolver = cljs.core.first(s__89383__$2);
var resolver_out = new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","output","com.wsscode.pathom3.connect.operation/output",801488703).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(resolver));
var new_out = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (resolver_out,resolver,s__89383__$2,temp__5753__auto__,rewroted_map){
return (function (p1__89381_SHARP_){
var G__89391 = p1__89381_SHARP_;
if(cljs.core.truth_((rewroted_map.cljs$core$IFn$_invoke$arity$1 ? rewroted_map.cljs$core$IFn$_invoke$arity$1(p1__89381_SHARP_) : rewroted_map.call(null,p1__89381_SHARP_)))){
return (rewroted_map.cljs$core$IFn$_invoke$arity$1 ? rewroted_map.cljs$core$IFn$_invoke$arity$1(G__89391) : rewroted_map.call(null,G__89391));
} else {
return G__89391;
}
});})(resolver_out,resolver,s__89383__$2,temp__5753__auto__,rewroted_map))
,resolver_out);
var fun = new cljs.core.Keyword(null,"resolve","resolve",-1584445482).cljs$core$IFn$_invoke$arity$1(resolver);
return cljs.core.cons(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(resolver_out,new_out))?resolver:com.wsscode.pathom3.connect.operation.resolver.cljs$core$IFn$_invoke$arity$3(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","op-name","com.wsscode.pathom3.connect.operation/op-name",-1249801049).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(resolver))),"-renamed"].join('')),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","input","com.wsscode.pathom3.connect.operation/input",-1553849497),new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","input","com.wsscode.pathom3.connect.operation/input",-1553849497).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(resolver)),new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","output","com.wsscode.pathom3.connect.operation/output",801488703),new_out,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","priority","com.wsscode.pathom3.connect.operation/priority",-813904543),new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","priority","com.wsscode.pathom3.connect.operation/priority",-813904543).cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(resolver),(0))], null),((function (resolver_out,new_out,fun,resolver,s__89383__$2,temp__5753__auto__,rewroted_map){
return (function() { 
var G__89421__delegate = function (args){
return promesa.protocols._bind(null,(function (___56277__auto__){
return promesa.protocols._bind(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(fun,args),(function (res){
return promesa.protocols._bind(null,(function (___56267__auto__){
return promesa.protocols._promise(clojure.set.rename_keys(res,rewroted_map));
}));
}));
}));
};
var G__89421 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__89422__i = 0, G__89422__a = new Array(arguments.length -  0);
while (G__89422__i < G__89422__a.length) {G__89422__a[G__89422__i] = arguments[G__89422__i + 0]; ++G__89422__i;}
  args = new cljs.core.IndexedSeq(G__89422__a,0,null);
} 
return G__89421__delegate.call(this,args);};
G__89421.cljs$lang$maxFixedArity = 0;
G__89421.cljs$lang$applyTo = (function (arglist__89423){
var args = cljs.core.seq(arglist__89423);
return G__89421__delegate(args);
});
G__89421.cljs$core$IFn$_invoke$arity$variadic = G__89421__delegate;
return G__89421;
})()
;})(resolver_out,new_out,fun,resolver,s__89383__$2,temp__5753__auto__,rewroted_map))
)),duck_repled$core$rename_resolvers_that_output_$_iter__89382(cljs.core.rest(s__89383__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(resolvers);
});
duck_repled.core.compose_resolver = (function duck_repled$core$compose_resolver(var_args){
var G__89397 = arguments.length;
switch (G__89397) {
case 2:
return duck_repled.core.compose_resolver.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return duck_repled.core.compose_resolver.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(duck_repled.core.compose_resolver.cljs$core$IFn$_invoke$arity$2 = (function (config,fun){
return duck_repled.core.compose_resolver.cljs$core$IFn$_invoke$arity$3(duck_repled.core.original_resolvers,config,fun);
}));

(duck_repled.core.compose_resolver.cljs$core$IFn$_invoke$arity$3 = (function (resolvers,p__89398,fun){
var map__89399 = p__89398;
var map__89399__$1 = cljs.core.__destructure_map(map__89399);
var config = map__89399__$1;
var inputs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89399__$1,new cljs.core.Keyword(null,"inputs","inputs",865803858));
var outputs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89399__$1,new cljs.core.Keyword(null,"outputs","outputs",-1896513034));
var priority = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89399__$1,new cljs.core.Keyword(null,"priority","priority",1431093715));
var temp__5753__auto___89425 = duck_repled.schemas.explain_add_resolver(config);
if(cljs.core.truth_(temp__5753__auto___89425)){
var errors_89426 = temp__5753__auto___89425;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Input to add-resolver is invalid",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"errors","errors",-908790718),errors_89426], null));
} else {
}

var renamed_resolvers = duck_repled.core.rename_resolvers_that_output(resolvers,outputs);
var renamed = cljs.core.map.cljs$core$IFn$_invoke$arity$2(duck_repled.core.rename_resolve_out,outputs);
var inputs__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(inputs,renamed);
var fun__$1 = (function (input){
var G__89400 = clojure.set.rename_keys(input,cljs.core.zipmap(renamed,outputs));
return (fun.cljs$core$IFn$_invoke$arity$1 ? fun.cljs$core$IFn$_invoke$arity$1(G__89400) : fun.call(null,G__89400));
});
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(renamed_resolvers),com.wsscode.pathom3.connect.operation.resolver.cljs$core$IFn$_invoke$arity$3(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("custom-resolver-"),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","input","com.wsscode.pathom3.connect.operation/input",-1553849497),inputs__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","output","com.wsscode.pathom3.connect.operation/output",801488703),outputs,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","priority","com.wsscode.pathom3.connect.operation/priority",-813904543),(function (){var or__4223__auto__ = priority;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return (50);
}
})()], null),duck_repled.core.gen_resolver_fun(fun__$1,outputs)));
}));

(duck_repled.core.compose_resolver.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=duck_repled.core.js.map
