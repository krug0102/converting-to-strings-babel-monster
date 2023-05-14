goog.provide('duck_repled.definition_resolvers');
duck_repled.definition_resolvers.join_paths = (function duck_repled$definition_resolvers$join_paths(paths){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(shadow.js.shim.module$path.join,paths);
});
duck_repled.definition_resolvers.file_exists_QMARK_ = (function duck_repled$definition_resolvers$file_exists_QMARK_(path){
var and__4221__auto__ = shadow.js.shim.module$fs.existsSync(path);
if(cljs.core.truth_(and__4221__auto__)){
return shadow.js.shim.module$fs.statSync(path).isFile();
} else {
return and__4221__auto__;
}
});
duck_repled.definition_resolvers.join_paths_resolver = com.wsscode.pathom3.connect.operation.resolver.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol("duck-repled.definition-resolvers","join-paths-resolver","duck-repled.definition-resolvers/join-paths-resolver",1546597594,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","output","com.wsscode.pathom3.connect.operation/output",801488703),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("file","filename","file/filename",-1425692619)], null),new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","input","com.wsscode.pathom3.connect.operation/input",-1553849497),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("file","path","file/path",-191335748)], null)], null),(function duck_repled$definition_resolvers$join_paths_resolver(_,p__89077){
var map__89078 = p__89077;
var map__89078__$1 = cljs.core.__destructure_map(map__89078);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89078__$1,new cljs.core.Keyword("file","path","file/path",-191335748));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("file","filename","file/filename",-1425692619),duck_repled.definition_resolvers.join_paths(path)], null);
}));

var original89073_89351 = duck_repled.definition_resolvers.join_paths_resolver;
var resolver89074_89352 = new cljs.core.Keyword(null,"resolve","resolve",-1584445482).cljs$core$IFn$_invoke$arity$1(original89073_89351);
var outputs89075_89353 = new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","output","com.wsscode.pathom3.connect.operation/output",801488703).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(original89073_89351));
var op89076_89354 = new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","op-name","com.wsscode.pathom3.connect.operation/op-name",-1249801049).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(original89073_89351));
(duck_repled.definition_resolvers.join_paths_resolver = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(original89073_89351,new cljs.core.Keyword(null,"resolve","resolve",-1584445482),(function (a__89033__auto__,b__89034__auto__){
return promesa.protocols._bind(null,(function (___56277__auto__){
return promesa.protocols._bind((resolver89074_89352.cljs$core$IFn$_invoke$arity$2 ? resolver89074_89352.cljs$core$IFn$_invoke$arity$2(a__89033__auto__,b__89034__auto__) : resolver89074_89352.call(null,a__89033__auto__,b__89034__auto__)),(function (result__89035__auto__){
return promesa.protocols._bind(null,(function (___56267__auto__){
return promesa.protocols._promise((cljs.core.truth_(result__89035__auto__)?duck_repled.schemas.validate_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.keys(result__89035__auto__),result__89035__auto__,["Invalid schema on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(op89076_89354)," outputing ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(outputs89075_89353)].join('')):null));
}));
}));
}));
})));
duck_repled.definition_resolvers.file_exists_resolver = com.wsscode.pathom3.connect.operation.resolver.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol("duck-repled.definition-resolvers","file-exists-resolver","duck-repled.definition-resolvers/file-exists-resolver",-1409519308,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","output","com.wsscode.pathom3.connect.operation/output",801488703),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("file","exists?","file/exists?",1411240824)], null),new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","input","com.wsscode.pathom3.connect.operation/input",-1553849497),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("file","filename","file/filename",-1425692619)], null)], null),(function duck_repled$definition_resolvers$file_exists_resolver(_,p__89095){
var map__89100 = p__89095;
var map__89100__$1 = cljs.core.__destructure_map(map__89100);
var filename = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89100__$1,new cljs.core.Keyword("file","filename","file/filename",-1425692619));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("file","exists?","file/exists?",1411240824),duck_repled.definition_resolvers.file_exists_QMARK_(filename)], null);
}));

var original89091_89355 = duck_repled.definition_resolvers.file_exists_resolver;
var resolver89092_89356 = new cljs.core.Keyword(null,"resolve","resolve",-1584445482).cljs$core$IFn$_invoke$arity$1(original89091_89355);
var outputs89093_89357 = new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","output","com.wsscode.pathom3.connect.operation/output",801488703).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(original89091_89355));
var op89094_89358 = new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","op-name","com.wsscode.pathom3.connect.operation/op-name",-1249801049).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(original89091_89355));
(duck_repled.definition_resolvers.file_exists_resolver = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(original89091_89355,new cljs.core.Keyword(null,"resolve","resolve",-1584445482),(function (a__89033__auto__,b__89034__auto__){
return promesa.protocols._bind(null,(function (___56277__auto__){
return promesa.protocols._bind((resolver89092_89356.cljs$core$IFn$_invoke$arity$2 ? resolver89092_89356.cljs$core$IFn$_invoke$arity$2(a__89033__auto__,b__89034__auto__) : resolver89092_89356.call(null,a__89033__auto__,b__89034__auto__)),(function (result__89035__auto__){
return promesa.protocols._bind(null,(function (___56267__auto__){
return promesa.protocols._promise((cljs.core.truth_(result__89035__auto__)?duck_repled.schemas.validate_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.keys(result__89035__auto__),result__89035__auto__,["Invalid schema on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(op89094_89358)," outputing ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(outputs89093_89357)].join('')):null));
}));
}));
}));
})));
duck_repled.definition_resolvers.position_resolver = com.wsscode.pathom3.connect.operation.resolver.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol("duck-repled.definition-resolvers","position-resolver","duck-repled.definition-resolvers/position-resolver",198287486,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","output","com.wsscode.pathom3.connect.operation/output",801488703),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("definition","row","definition/row",275880138),new cljs.core.Keyword("definition","col","definition/col",-811501491)], null),new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","input","com.wsscode.pathom3.connect.operation/input",-1553849497),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("var","meta","var/meta",1499588507)], null)], null),(function duck_repled$definition_resolvers$position_resolver(_,p__89115){
var map__89116 = p__89115;
var map__89116__$1 = cljs.core.__destructure_map(map__89116);
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89116__$1,new cljs.core.Keyword("var","meta","var/meta",1499588507));
var temp__5753__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(meta);
if(cljs.core.truth_(temp__5753__auto__)){
var line = temp__5753__auto__;
var G__89117 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("definition","row","definition/row",275880138),(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(meta) - (1))], null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(meta))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__89117,new cljs.core.Keyword("definition","col","definition/col",-811501491),(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(meta) - (1)));
} else {
return G__89117;
}
} else {
return null;
}
}));

var original89111_89359 = duck_repled.definition_resolvers.position_resolver;
var resolver89112_89360 = new cljs.core.Keyword(null,"resolve","resolve",-1584445482).cljs$core$IFn$_invoke$arity$1(original89111_89359);
var outputs89113_89361 = new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","output","com.wsscode.pathom3.connect.operation/output",801488703).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(original89111_89359));
var op89114_89362 = new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","op-name","com.wsscode.pathom3.connect.operation/op-name",-1249801049).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(original89111_89359));
(duck_repled.definition_resolvers.position_resolver = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(original89111_89359,new cljs.core.Keyword(null,"resolve","resolve",-1584445482),(function (a__89033__auto__,b__89034__auto__){
return promesa.protocols._bind(null,(function (___56277__auto__){
return promesa.protocols._bind((resolver89112_89360.cljs$core$IFn$_invoke$arity$2 ? resolver89112_89360.cljs$core$IFn$_invoke$arity$2(a__89033__auto__,b__89034__auto__) : resolver89112_89360.call(null,a__89033__auto__,b__89034__auto__)),(function (result__89035__auto__){
return promesa.protocols._bind(null,(function (___56267__auto__){
return promesa.protocols._promise((cljs.core.truth_(result__89035__auto__)?duck_repled.schemas.validate_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.keys(result__89035__auto__),result__89035__auto__,["Invalid schema on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(op89114_89362)," outputing ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(outputs89113_89361)].join('')):null));
}));
}));
}));
})));
duck_repled.definition_resolvers.norm_result = (function duck_repled$definition_resolvers$norm_result(file_name){
var os = shadow.js.shim.module$os.platform();
var G__89128 = file_name;
if(cljs.core.truth_(cljs.core.re_find(/^win/i,os))){
return clojure.string.replace_first(G__89128,/^\//,"");
} else {
return G__89128;
}
});
duck_repled.definition_resolvers.existing_filename = com.wsscode.pathom3.connect.operation.resolver.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol("duck-repled.definition-resolvers","existing-filename","duck-repled.definition-resolvers/existing-filename",-1927725947,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","output","com.wsscode.pathom3.connect.operation/output",801488703),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("definition","filename","definition/filename",1721264452)], null),new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","priority","com.wsscode.pathom3.connect.operation/priority",-813904543),(3),new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","input","com.wsscode.pathom3.connect.operation/input",-1553849497),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("var","meta","var/meta",1499588507)], null)], null),(function duck_repled$definition_resolvers$existing_filename(_,p__89146){
var map__89147 = p__89146;
var map__89147__$1 = cljs.core.__destructure_map(map__89147);
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89147__$1,new cljs.core.Keyword("var","meta","var/meta",1499588507));
if(cljs.core.truth_(duck_repled.definition_resolvers.file_exists_QMARK_(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(meta)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("definition","filename","definition/filename",1721264452),duck_repled.definition_resolvers.norm_result(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(meta))], null);
} else {
return null;
}
}));

var original89136_89365 = duck_repled.definition_resolvers.existing_filename;
var resolver89137_89366 = new cljs.core.Keyword(null,"resolve","resolve",-1584445482).cljs$core$IFn$_invoke$arity$1(original89136_89365);
var outputs89138_89367 = new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","output","com.wsscode.pathom3.connect.operation/output",801488703).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(original89136_89365));
var op89139_89368 = new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","op-name","com.wsscode.pathom3.connect.operation/op-name",-1249801049).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(original89136_89365));
(duck_repled.definition_resolvers.existing_filename = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(original89136_89365,new cljs.core.Keyword(null,"resolve","resolve",-1584445482),(function (a__89033__auto__,b__89034__auto__){
return promesa.protocols._bind(null,(function (___56277__auto__){
return promesa.protocols._bind((resolver89137_89366.cljs$core$IFn$_invoke$arity$2 ? resolver89137_89366.cljs$core$IFn$_invoke$arity$2(a__89033__auto__,b__89034__auto__) : resolver89137_89366.call(null,a__89033__auto__,b__89034__auto__)),(function (result__89035__auto__){
return promesa.protocols._bind(null,(function (___56267__auto__){
return promesa.protocols._promise((cljs.core.truth_(result__89035__auto__)?duck_repled.schemas.validate_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.keys(result__89035__auto__),result__89035__auto__,["Invalid schema on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(op89139_89368)," outputing ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(outputs89138_89367)].join('')):null));
}));
}));
}));
})));
duck_repled.definition_resolvers.read_jar = (function duck_repled$definition_resolvers$read_jar(clj,jar_file_name){
var vec__89158 = clojure.string.split.cljs$core$IFn$_invoke$arity$3(jar_file_name,/!\//,(2));
var jar = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__89158,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__89158,(1),null);
var jar__$1 = clojure.string.replace_first(jar,/file:/,"");
var t = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"jar-file__89155__auto__","jar-file__89155__auto__",2033246345,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"java.util.jar.JarFile.","java.util.jar.JarFile.",1948481733,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword("duck-repled.definition-resolvers","jar","duck-repled.definition-resolvers/jar",1603710630),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"ba__89156__auto__","ba__89156__auto__",-1163732243,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"java.io.ByteArrayOutputStream.","java.io.ByteArrayOutputStream.",399984032,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"is__89157__auto__","is__89157__auto__",406530730,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".getInputStream",".getInputStream",-1187358654,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"jar-file__89155__auto__","jar-file__89155__auto__",2033246345,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".getJarEntry",".getJarEntry",1683694053,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"jar-file__89155__auto__","jar-file__89155__auto__",2033246345,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword("duck-repled.definition-resolvers","path","duck-repled.definition-resolvers/path",269305471),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("clojure.java.io","copy","clojure.java.io/copy",2139950786,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"is__89157__auto__","is__89157__auto__",406530730,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"ba__89156__auto__","ba__89156__auto__",-1163732243,null),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"java.lang.String.","java.lang.String.",2016118773,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,".toByteArray",".toByteArray",1550382981,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"ba__89156__auto__","ba__89156__auto__",-1163732243,null),null,(1),null))))),null,(1),null))))),null,(1),null))], 0))));
var code = duck_repled.template.template(t,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("duck-repled.definition-resolvers","jar","duck-repled.definition-resolvers/jar",1603710630),jar__$1,new cljs.core.Keyword("duck-repled.definition-resolvers","path","duck-repled.definition-resolvers/path",269305471),path], null));
return duck_repled.repl_protocol.eval.cljs$core$IFn$_invoke$arity$2(clj,code);
});
duck_repled.definition_resolvers.clojure_filename = com.wsscode.pathom3.connect.operation.resolver.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol("duck-repled.definition-resolvers","clojure-filename","duck-repled.definition-resolvers/clojure-filename",1452603745,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","input","com.wsscode.pathom3.connect.operation/input",-1553849497),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("repl","evaluator","repl/evaluator",693013328),new cljs.core.Keyword("var","meta","var/meta",1499588507),new cljs.core.Keyword("repl","kind","repl/kind",-721172504),com.wsscode.pathom3.connect.operation._QMARK_(new cljs.core.Keyword("repl","clj","repl/clj",-655079317))], null),new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","output","com.wsscode.pathom3.connect.operation/output",801488703),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("definition","filename","definition/filename",1721264452),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("definition","contents","definition/contents",-151279794),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","contents","text/contents",-1566533716),new cljs.core.Keyword("text","range","text/range",1644551777)], null)], null)], null)], null),(function duck_repled$definition_resolvers$clojure_filename(_,p__89186){
var map__89189 = p__89186;
var map__89189__$1 = cljs.core.__destructure_map(map__89189);
var evaluator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89189__$1,new cljs.core.Keyword("repl","evaluator","repl/evaluator",693013328));
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89189__$1,new cljs.core.Keyword("var","meta","var/meta",1499588507));
var kind = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89189__$1,new cljs.core.Keyword("repl","kind","repl/kind",-721172504));
var clj = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89189__$1,new cljs.core.Keyword("repl","clj","repl/clj",-655079317));
var temp__5753__auto__ = (function (){var G__89192 = kind;
var G__89192__$1 = (((G__89192 instanceof cljs.core.Keyword))?G__89192.fqn:null);
switch (G__89192__$1) {
case "clj":
return evaluator;

break;
case "cljs":
return clj;

break;
default:
return null;

}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var repl = temp__5753__auto__;
return promesa.protocols._bind(null,(function (___56277__auto__){
return promesa.protocols._bind(duck_repled.template.template(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","require","cljs.core/require",2107770869,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"clojure.java.io","clojure.java.io",1971616537,null),null,(1),null))))),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","some->>","cljs.core/some->>",-244881963,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"file","file",-1269645878),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,".getResource",".getResource",952205732,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol("clojure.lang.RT","baseLoader","clojure.lang.RT/baseLoader",-2114283410,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,".getPath",".getPath",-1671576457,null),null,(1),null))], 0)))),null,(1),null))], 0)))),cljs.core.select_keys(meta,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878)], null))),(function (code){
return promesa.protocols._bind(duck_repled.repl_protocol.eval.cljs$core$IFn$_invoke$arity$2(repl,code),(function (p__89193){
var map__89194 = p__89193;
var map__89194__$1 = cljs.core.__destructure_map(map__89194);
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89194__$1,new cljs.core.Keyword(null,"result","result",1415092211));
return promesa.protocols._bind(duck_repled.definition_resolvers.norm_result(result),(function (filename){
return promesa.protocols._bind(null,(function (___56267__auto__){
return promesa.protocols._promise((cljs.core.truth_(cljs.core.re_find(/\.jar!\//,filename))?promesa.protocols._bind(null,(function (___56277__auto____$1){
return promesa.protocols._bind(duck_repled.definition_resolvers.read_jar(repl,filename),(function (p__89217){
var map__89218 = p__89217;
var map__89218__$1 = cljs.core.__destructure_map(map__89218);
var result__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89218__$1,new cljs.core.Keyword(null,"result","result",1415092211));
return promesa.protocols._bind(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$2(meta,(1)) - (1)),(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$2(meta,(1)) - (1))], null),(function (pos){
return promesa.protocols._bind(null,(function (___56267__auto____$1){
return promesa.protocols._promise(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("definition","filename","definition/filename",1721264452),filename,new cljs.core.Keyword("definition","contents","definition/contents",-151279794),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("text","contents","text/contents",-1566533716),result__$1,new cljs.core.Keyword("text","range","text/range",1644551777),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pos,pos], null)], null)], null));
}));
}));
}));
})):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("definition","filename","definition/filename",1721264452),filename], null)));
}));
}));
}));
}));
}));
} else {
return null;
}
}));

var original89182_89377 = duck_repled.definition_resolvers.clojure_filename;
var resolver89183_89378 = new cljs.core.Keyword(null,"resolve","resolve",-1584445482).cljs$core$IFn$_invoke$arity$1(original89182_89377);
var outputs89184_89379 = new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","output","com.wsscode.pathom3.connect.operation/output",801488703).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(original89182_89377));
var op89185_89380 = new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","op-name","com.wsscode.pathom3.connect.operation/op-name",-1249801049).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(original89182_89377));
(duck_repled.definition_resolvers.clojure_filename = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(original89182_89377,new cljs.core.Keyword(null,"resolve","resolve",-1584445482),(function (a__89033__auto__,b__89034__auto__){
return promesa.protocols._bind(null,(function (___56277__auto__){
return promesa.protocols._bind((resolver89183_89378.cljs$core$IFn$_invoke$arity$2 ? resolver89183_89378.cljs$core$IFn$_invoke$arity$2(a__89033__auto__,b__89034__auto__) : resolver89183_89378.call(null,a__89033__auto__,b__89034__auto__)),(function (result__89035__auto__){
return promesa.protocols._bind(null,(function (___56267__auto__){
return promesa.protocols._promise((cljs.core.truth_(result__89035__auto__)?duck_repled.schemas.validate_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.keys(result__89035__auto__),result__89035__auto__,["Invalid schema on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(op89185_89380)," outputing ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(outputs89184_89379)].join('')):null));
}));
}));
}));
})));
duck_repled.definition_resolvers.file_from_clr = com.wsscode.pathom3.connect.operation.resolver.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol("duck-repled.definition-resolvers","file-from-clr","duck-repled.definition-resolvers/file-from-clr",418414022,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","output","com.wsscode.pathom3.connect.operation/output",801488703),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("definition","filename","definition/filename",1721264452)], null),new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","input","com.wsscode.pathom3.connect.operation/input",-1553849497),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("repl","evaluator","repl/evaluator",693013328),new cljs.core.Keyword("var","meta","var/meta",1499588507),new cljs.core.Keyword("repl","kind","repl/kind",-721172504)], null)], null),(function duck_repled$definition_resolvers$file_from_clr(_,p__89227){
var map__89232 = p__89227;
var map__89232__$1 = cljs.core.__destructure_map(map__89232);
var evaluator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89232__$1,new cljs.core.Keyword("repl","evaluator","repl/evaluator",693013328));
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89232__$1,new cljs.core.Keyword("var","meta","var/meta",1499588507));
var kind = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89232__$1,new cljs.core.Keyword("repl","kind","repl/kind",-721172504));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cljr","cljr",361703864),kind)){
return promesa.protocols._bind(null,(function (___56277__auto__){
return promesa.protocols._bind(duck_repled.template.template(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","some->","cljs.core/some->",-67411995,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword("duck-repled.definition-resolvers","file","duck-repled.definition-resolvers/file",-745265521),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol("clojure.lang.RT","FindFile","clojure.lang.RT/FindFile",-1945450882,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null))], 0)))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("duck-repled.definition-resolvers","file","duck-repled.definition-resolvers/file",-745265521),new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(meta)], null)),(function (code){
return promesa.protocols._bind(duck_repled.repl_protocol.eval.cljs$core$IFn$_invoke$arity$2(evaluator,code),(function (p__89237){
var map__89238 = p__89237;
var map__89238__$1 = cljs.core.__destructure_map(map__89238);
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89238__$1,new cljs.core.Keyword(null,"result","result",1415092211));
return promesa.protocols._bind(null,(function (___56267__auto__){
return promesa.protocols._promise((cljs.core.truth_(result)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("definition","filename","definition/filename",1721264452),duck_repled.definition_resolvers.norm_result(result)], null):null));
}));
}));
}));
}));
} else {
return null;
}
}));

var original89223_89386 = duck_repled.definition_resolvers.file_from_clr;
var resolver89224_89387 = new cljs.core.Keyword(null,"resolve","resolve",-1584445482).cljs$core$IFn$_invoke$arity$1(original89223_89386);
var outputs89225_89388 = new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","output","com.wsscode.pathom3.connect.operation/output",801488703).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(original89223_89386));
var op89226_89389 = new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","op-name","com.wsscode.pathom3.connect.operation/op-name",-1249801049).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(original89223_89386));
(duck_repled.definition_resolvers.file_from_clr = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(original89223_89386,new cljs.core.Keyword(null,"resolve","resolve",-1584445482),(function (a__89033__auto__,b__89034__auto__){
return promesa.protocols._bind(null,(function (___56277__auto__){
return promesa.protocols._bind((resolver89224_89387.cljs$core$IFn$_invoke$arity$2 ? resolver89224_89387.cljs$core$IFn$_invoke$arity$2(a__89033__auto__,b__89034__auto__) : resolver89224_89387.call(null,a__89033__auto__,b__89034__auto__)),(function (result__89035__auto__){
return promesa.protocols._bind(null,(function (___56267__auto__){
return promesa.protocols._promise((cljs.core.truth_(result__89035__auto__)?duck_repled.schemas.validate_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.keys(result__89035__auto__),result__89035__auto__,["Invalid schema on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(op89226_89389)," outputing ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(outputs89225_89388)].join('')):null));
}));
}));
}));
})));
duck_repled.definition_resolvers.extract_right_var = (function duck_repled$definition_resolvers$extract_right_var(current_var,contents){
var contents__$1 = (function (){var or__4223__auto__ = new cljs.core.Keyword("text","contents","text/contents",-1566533716).cljs$core$IFn$_invoke$arity$1(current_var);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return contents;
}
})();
var vec__89253 = duck_repled.editor_helpers.current_var(cljs.core.str.cljs$core$IFn$_invoke$arity$1(contents__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__89253,(0),null);
var var$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__89253,(1),null);
if(cljs.core.truth_((function (){var and__4221__auto__ = var$;
if(cljs.core.truth_(and__4221__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(var$,contents__$1);
} else {
return and__4221__auto__;
}
})())){
return contents__$1;
} else {
return null;
}
});
duck_repled.definition_resolvers.resolver_for_ns_only = com.wsscode.pathom3.connect.operation.resolver.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol("duck-repled.definition-resolvers","resolver-for-ns-only","duck-repled.definition-resolvers/resolver-for-ns-only",1030445510,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","input","com.wsscode.pathom3.connect.operation/input",-1553849497),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("repl","evaluator","repl/evaluator",693013328),com.wsscode.pathom3.connect.operation._QMARK_(new cljs.core.Keyword("text","current-var","text/current-var",1432933099)),com.wsscode.pathom3.connect.operation._QMARK_(new cljs.core.Keyword("text","contents","text/contents",-1566533716))], null),new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","output","com.wsscode.pathom3.connect.operation/output",801488703),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("var","meta","var/meta",1499588507),new cljs.core.Keyword("definition","row","definition/row",275880138),new cljs.core.Keyword("definition","col","definition/col",-811501491)], null)], null),(function duck_repled$definition_resolvers$resolver_for_ns_only(_,p__89269){
var map__89270 = p__89269;
var map__89270__$1 = cljs.core.__destructure_map(map__89270);
var evaluator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89270__$1,new cljs.core.Keyword("repl","evaluator","repl/evaluator",693013328));
var contents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89270__$1,new cljs.core.Keyword("text","contents","text/contents",-1566533716));
var current_var = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89270__$1,new cljs.core.Keyword("text","current-var","text/current-var",1432933099));
var temp__5753__auto__ = (function (){var G__89271 = duck_repled.definition_resolvers.extract_right_var(current_var,contents);
if((G__89271 == null)){
return null;
} else {
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(G__89271);
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var fqn = temp__5753__auto__;
if((cljs.core.namespace(fqn) == null)){
return promesa.protocols._bind(null,(function (___56277__auto__){
return promesa.protocols._bind(duck_repled.template.template(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"ns__89261__auto__","ns__89261__auto__",-426866062,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","find-ns","cljs.core/find-ns",-486459417,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword("duck-repled.definition-resolvers","namespace-sym","duck-repled.definition-resolvers/namespace-sym",-1866654453),null,(1),null))))),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"first-var__89262__auto__","first-var__89262__auto__",1292991124,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","some->","cljs.core/some->",-67411995,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"ns__89261__auto__","ns__89261__auto__",-426866062,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","ns-interns","cljs.core/ns-interns",-1003949633,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","second","cljs.core/second",520555958,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","meta","cljs.core/meta",-748218346,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"file","file",-1269645878),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"ns-meta__89263__auto__","ns-meta__89263__auto__",-1870824161,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","meta","cljs.core/meta",-748218346,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"ns__89261__auto__","ns__89261__auto__",-426866062,null),null,(1),null))))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","cond->","cljs.core/cond->",-113941356,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"ns-meta__89263__auto__","ns-meta__89263__auto__",-1870824161,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"first-var__89262__auto__","first-var__89262__auto__",1292991124,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","assoc","cljs.core/assoc",322326297,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"file","file",-1269645878),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"first-var__89262__auto__","first-var__89262__auto__",1292991124,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("duck-repled.definition-resolvers","namespace-sym","duck-repled.definition-resolvers/namespace-sym",-1866654453),fqn], null)),(function (code){
return promesa.protocols._bind(duck_repled.repl_protocol.eval.cljs$core$IFn$_invoke$arity$2(evaluator,code),(function (p__89276){
var map__89277 = p__89276;
var map__89277__$1 = cljs.core.__destructure_map(map__89277);
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89277__$1,new cljs.core.Keyword(null,"result","result",1415092211));
return promesa.protocols._bind((function (){var G__89278 = result;
var G__89278__$1 = (((G__89278 == null))?null:new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(G__89278));
if((G__89278__$1 == null)){
return null;
} else {
return (G__89278__$1 - (1));
}
})(),(function (col){
return promesa.protocols._bind(null,(function (___56267__auto__){
return promesa.protocols._promise((cljs.core.truth_(result)?(function (){var G__89283 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("var","meta","var/meta",1499588507),result,new cljs.core.Keyword("definition","row","definition/row",275880138),(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$2(result,(1)) - (1))], null);
if(cljs.core.truth_(col)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__89283,new cljs.core.Keyword("definition","col","definition/col",-811501491),col);
} else {
return G__89283;
}
})():null));
}));
}));
}));
}));
}));
} else {
return null;
}
} else {
return null;
}
}));

var original89265_89392 = duck_repled.definition_resolvers.resolver_for_ns_only;
var resolver89266_89393 = new cljs.core.Keyword(null,"resolve","resolve",-1584445482).cljs$core$IFn$_invoke$arity$1(original89265_89392);
var outputs89267_89394 = new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","output","com.wsscode.pathom3.connect.operation/output",801488703).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(original89265_89392));
var op89268_89395 = new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","op-name","com.wsscode.pathom3.connect.operation/op-name",-1249801049).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(original89265_89392));
(duck_repled.definition_resolvers.resolver_for_ns_only = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(original89265_89392,new cljs.core.Keyword(null,"resolve","resolve",-1584445482),(function (a__89033__auto__,b__89034__auto__){
return promesa.protocols._bind(null,(function (___56277__auto__){
return promesa.protocols._bind((resolver89266_89393.cljs$core$IFn$_invoke$arity$2 ? resolver89266_89393.cljs$core$IFn$_invoke$arity$2(a__89033__auto__,b__89034__auto__) : resolver89266_89393.call(null,a__89033__auto__,b__89034__auto__)),(function (result__89035__auto__){
return promesa.protocols._bind(null,(function (___56267__auto__){
return promesa.protocols._promise((cljs.core.truth_(result__89035__auto__)?duck_repled.schemas.validate_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.keys(result__89035__auto__),result__89035__auto__,["Invalid schema on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(op89268_89395)," outputing ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(outputs89267_89394)].join('')):null));
}));
}));
}));
})));
duck_repled.definition_resolvers.resolver_for_stacktrace = com.wsscode.pathom3.connect.operation.resolver.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol("duck-repled.definition-resolvers","resolver-for-stacktrace","duck-repled.definition-resolvers/resolver-for-stacktrace",-291098939,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","input","com.wsscode.pathom3.connect.operation/input",-1553849497),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("repl","evaluator","repl/evaluator",693013328),new cljs.core.Keyword("ex","function-name","ex/function-name",621896913),new cljs.core.Keyword("ex","filename","ex/filename",-1428836124),com.wsscode.pathom3.connect.operation._QMARK_(new cljs.core.Keyword("ex","row","ex/row",-570134166))], null),new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","output","com.wsscode.pathom3.connect.operation/output",801488703),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("var","meta","var/meta",1499588507),new cljs.core.Keyword("definition","row","definition/row",275880138)], null),new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","priority","com.wsscode.pathom3.connect.operation/priority",-813904543),(20)], null),(function duck_repled$definition_resolvers$resolver_for_stacktrace(_,p__89301){
var map__89302 = p__89301;
var map__89302__$1 = cljs.core.__destructure_map(map__89302);
var evaluator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89302__$1,new cljs.core.Keyword("repl","evaluator","repl/evaluator",693013328));
var function_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89302__$1,new cljs.core.Keyword("ex","function-name","ex/function-name",621896913));
var filename = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89302__$1,new cljs.core.Keyword("ex","filename","ex/filename",-1428836124));
var row = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89302__$1,new cljs.core.Keyword("ex","row","ex/row",-570134166));
return promesa.protocols._bind(null,(function (___56277__auto__){
return promesa.protocols._bind(cljs.core.first(clojure.string.split.cljs$core$IFn$_invoke$arity$2(function_name,/\//)),(function (ns_name){
return promesa.protocols._bind(duck_repled.template.template(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"n__89292__auto__","n__89292__auto__",1724926470,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","find-ns","cljs.core/find-ns",-486459417,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword("duck-repled.definition-resolvers","namespace-sym","duck-repled.definition-resolvers/namespace-sym",-1866654453),null,(1),null))))),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","->>","cljs.core/->>",-1207871206,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"n__89292__auto__","n__89292__auto__",1724926470,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","ns-interns","cljs.core/ns-interns",-1003949633,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","some","cljs.core/some",-977628065,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"___89293__auto__","___89293__auto__",2139470116,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"res__89294__auto__","res__89294__auto__",2093339775,null),null,(1),null)))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"meta__89295__auto__","meta__89295__auto__",539296104,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","meta","cljs.core/meta",-748218346,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"res__89294__auto__","res__89294__auto__",2093339775,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"file__89296__auto__","file__89296__auto__",-651688166,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","->","cljs.core/->",1488366311,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"meta__89295__auto__","meta__89295__auto__",539296104,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"file","file",-1269645878),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("clojure.string","ends-with?","clojure.string/ends-with?",-745964149,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"file__89296__auto__","file__89296__auto__",-651688166,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword("duck-repled.definition-resolvers","file-name","duck-repled.definition-resolvers/file-name",-1223053476),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","select-keys","cljs.core/select-keys",1032580216,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"meta__89295__auto__","meta__89295__auto__",539296104,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Keyword(null,"file","file",-1269645878),null,(1),null)))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("duck-repled.definition-resolvers","namespace-sym","duck-repled.definition-resolvers/namespace-sym",-1866654453),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(ns_name),new cljs.core.Keyword("duck-repled.definition-resolvers","file-name","duck-repled.definition-resolvers/file-name",-1223053476),filename], null)),(function (code){
return promesa.protocols._bind(duck_repled.repl_protocol.eval.cljs$core$IFn$_invoke$arity$2(evaluator,code),(function (p__89315){
var map__89316 = p__89315;
var map__89316__$1 = cljs.core.__destructure_map(map__89316);
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89316__$1,new cljs.core.Keyword(null,"result","result",1415092211));
return promesa.protocols._bind(null,(function (___56267__auto__){
return promesa.protocols._promise(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("var","meta","var/meta",1499588507),result,new cljs.core.Keyword("definition","row","definition/row",275880138),row], null));
}));
}));
}));
}));
}));
}));

var original89297_89401 = duck_repled.definition_resolvers.resolver_for_stacktrace;
var resolver89298_89402 = new cljs.core.Keyword(null,"resolve","resolve",-1584445482).cljs$core$IFn$_invoke$arity$1(original89297_89401);
var outputs89299_89403 = new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","output","com.wsscode.pathom3.connect.operation/output",801488703).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(original89297_89401));
var op89300_89404 = new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","op-name","com.wsscode.pathom3.connect.operation/op-name",-1249801049).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(original89297_89401));
(duck_repled.definition_resolvers.resolver_for_stacktrace = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(original89297_89401,new cljs.core.Keyword(null,"resolve","resolve",-1584445482),(function (a__89033__auto__,b__89034__auto__){
return promesa.protocols._bind(null,(function (___56277__auto__){
return promesa.protocols._bind((resolver89298_89402.cljs$core$IFn$_invoke$arity$2 ? resolver89298_89402.cljs$core$IFn$_invoke$arity$2(a__89033__auto__,b__89034__auto__) : resolver89298_89402.call(null,a__89033__auto__,b__89034__auto__)),(function (result__89035__auto__){
return promesa.protocols._bind(null,(function (___56267__auto__){
return promesa.protocols._promise((cljs.core.truth_(result__89035__auto__)?duck_repled.schemas.validate_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.keys(result__89035__auto__),result__89035__auto__,["Invalid schema on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(op89300_89404)," outputing ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(outputs89299_89403)].join('')):null));
}));
}));
}));
})));
duck_repled.definition_resolvers.source_from_contents = com.wsscode.pathom3.connect.operation.resolver.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol("duck-repled.definition-resolvers","source-from-contents","duck-repled.definition-resolvers/source-from-contents",418399766,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","input","com.wsscode.pathom3.connect.operation/input",-1553849497),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("definition","contents","definition/contents",-151279794),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","top-block","text/top-block",127527825)], null)], null)], null),new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","output","com.wsscode.pathom3.connect.operation/output",801488703),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("definition","source","definition/source",513279520)], null),new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","priority","com.wsscode.pathom3.connect.operation/priority",-813904543),(1)], null),(function duck_repled$definition_resolvers$source_from_contents(_,inputs){
var temp__5753__auto__ = new cljs.core.Keyword("text","top-block","text/top-block",127527825).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("definition","contents","definition/contents",-151279794).cljs$core$IFn$_invoke$arity$1(inputs));
if(cljs.core.truth_(temp__5753__auto__)){
var source = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("definition","source","definition/source",513279520),source], null);
} else {
return null;
}
}));

var original89317_89406 = duck_repled.definition_resolvers.source_from_contents;
var resolver89318_89407 = new cljs.core.Keyword(null,"resolve","resolve",-1584445482).cljs$core$IFn$_invoke$arity$1(original89317_89406);
var outputs89319_89408 = new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","output","com.wsscode.pathom3.connect.operation/output",801488703).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(original89317_89406));
var op89320_89409 = new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","op-name","com.wsscode.pathom3.connect.operation/op-name",-1249801049).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(original89317_89406));
(duck_repled.definition_resolvers.source_from_contents = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(original89317_89406,new cljs.core.Keyword(null,"resolve","resolve",-1584445482),(function (a__89033__auto__,b__89034__auto__){
return promesa.protocols._bind(null,(function (___56277__auto__){
return promesa.protocols._bind((resolver89318_89407.cljs$core$IFn$_invoke$arity$2 ? resolver89318_89407.cljs$core$IFn$_invoke$arity$2(a__89033__auto__,b__89034__auto__) : resolver89318_89407.call(null,a__89033__auto__,b__89034__auto__)),(function (result__89035__auto__){
return promesa.protocols._bind(null,(function (___56267__auto__){
return promesa.protocols._promise((cljs.core.truth_(result__89035__auto__)?duck_repled.schemas.validate_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.keys(result__89035__auto__),result__89035__auto__,["Invalid schema on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(op89320_89409)," outputing ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(outputs89319_89408)].join('')):null));
}));
}));
}));
})));
duck_repled.definition_resolvers.source_from_file = com.wsscode.pathom3.connect.operation.resolver.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol("duck-repled.definition-resolvers","source-from-file","duck-repled.definition-resolvers/source-from-file",-293203153,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","input","com.wsscode.pathom3.connect.operation/input",-1553849497),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("definition","filename","definition/filename",1721264452),new cljs.core.Keyword("definition","row","definition/row",275880138),com.wsscode.pathom3.connect.operation._QMARK_(new cljs.core.Keyword("definition","col","definition/col",-811501491))], null),new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","output","com.wsscode.pathom3.connect.operation/output",801488703),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("definition","source","definition/source",513279520),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","contents","text/contents",-1566533716),new cljs.core.Keyword("text","range","text/range",1644551777)], null)], null)], null)], null),(function duck_repled$definition_resolvers$source_from_file(_,p__89333){
var map__89334 = p__89333;
var map__89334__$1 = cljs.core.__destructure_map(map__89334);
var filename = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89334__$1,new cljs.core.Keyword("definition","filename","definition/filename",1721264452));
var row = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89334__$1,new cljs.core.Keyword("definition","row","definition/row",275880138));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89334__$1,new cljs.core.Keyword("definition","col","definition/col",-811501491));
return promesa.protocols._bind(null,(function (___56277__auto__){
return promesa.protocols._bind(duck_repled.editor_helpers.read_file(filename),(function (source){
return promesa.protocols._bind(duck_repled.editor_helpers.top_blocks(source),(function (top_blocks){
return promesa.protocols._bind(null,(function (___56267__auto__){
return promesa.protocols._promise((function (){var temp__5753__auto__ = duck_repled.editor_helpers.top_block_for(top_blocks,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(function (){var or__4223__auto__ = col;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return (0);
}
})()], null));
if(cljs.core.truth_(temp__5753__auto__)){
var vec__89340 = temp__5753__auto__;
var range = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__89340,(0),null);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__89340,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("definition","source","definition/source",513279520),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("text","contents","text/contents",-1566533716),text,new cljs.core.Keyword("text","range","text/range",1644551777),range], null)], null);
} else {
return null;
}
})());
}));
}));
}));
}));
}));

var original89329_89413 = duck_repled.definition_resolvers.source_from_file;
var resolver89330_89414 = new cljs.core.Keyword(null,"resolve","resolve",-1584445482).cljs$core$IFn$_invoke$arity$1(original89329_89413);
var outputs89331_89415 = new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","output","com.wsscode.pathom3.connect.operation/output",801488703).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(original89329_89413));
var op89332_89416 = new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","op-name","com.wsscode.pathom3.connect.operation/op-name",-1249801049).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(original89329_89413));
(duck_repled.definition_resolvers.source_from_file = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(original89329_89413,new cljs.core.Keyword(null,"resolve","resolve",-1584445482),(function (a__89033__auto__,b__89034__auto__){
return promesa.protocols._bind(null,(function (___56277__auto__){
return promesa.protocols._bind((resolver89330_89414.cljs$core$IFn$_invoke$arity$2 ? resolver89330_89414.cljs$core$IFn$_invoke$arity$2(a__89033__auto__,b__89034__auto__) : resolver89330_89414.call(null,a__89033__auto__,b__89034__auto__)),(function (result__89035__auto__){
return promesa.protocols._bind(null,(function (___56267__auto__){
return promesa.protocols._promise((cljs.core.truth_(result__89035__auto__)?duck_repled.schemas.validate_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.keys(result__89035__auto__),result__89035__auto__,["Invalid schema on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(op89332_89416)," outputing ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(outputs89331_89415)].join('')):null));
}));
}));
}));
})));
duck_repled.definition_resolvers.resolvers = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [duck_repled.definition_resolvers.join_paths_resolver,duck_repled.definition_resolvers.file_exists_resolver,duck_repled.definition_resolvers.position_resolver,duck_repled.definition_resolvers.existing_filename,duck_repled.definition_resolvers.clojure_filename,duck_repled.definition_resolvers.file_from_clr,duck_repled.definition_resolvers.resolver_for_ns_only,duck_repled.definition_resolvers.resolver_for_stacktrace,duck_repled.definition_resolvers.source_from_contents,duck_repled.definition_resolvers.source_from_file], null);

//# sourceMappingURL=duck_repled.definition_resolvers.js.map
