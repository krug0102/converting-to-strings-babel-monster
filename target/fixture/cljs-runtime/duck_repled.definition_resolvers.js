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
duck_repled.definition_resolvers.join_paths_resolver = com.wsscode.pathom3.connect.operation.resolver.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol("duck-repled.definition-resolvers","join-paths-resolver","duck-repled.definition-resolvers/join-paths-resolver",1546597594,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","output","com.wsscode.pathom3.connect.operation/output",801488703),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("file","filename","file/filename",-1425692619)], null),new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","input","com.wsscode.pathom3.connect.operation/input",-1553849497),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("file","path","file/path",-191335748)], null)], null),(function duck_repled$definition_resolvers$join_paths_resolver(_,p__160819){
var map__160820 = p__160819;
var map__160820__$1 = cljs.core.__destructure_map(map__160820);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__160820__$1,new cljs.core.Keyword("file","path","file/path",-191335748));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("file","filename","file/filename",-1425692619),duck_repled.definition_resolvers.join_paths(path)], null);
}));

var original160815_160968 = duck_repled.definition_resolvers.join_paths_resolver;
var resolver160816_160969 = new cljs.core.Keyword(null,"resolve","resolve",-1584445482).cljs$core$IFn$_invoke$arity$1(original160815_160968);
var outputs160817_160970 = new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","output","com.wsscode.pathom3.connect.operation/output",801488703).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(original160815_160968));
var op160818_160971 = new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","op-name","com.wsscode.pathom3.connect.operation/op-name",-1249801049).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(original160815_160968));
(duck_repled.definition_resolvers.join_paths_resolver = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(original160815_160968,new cljs.core.Keyword(null,"resolve","resolve",-1584445482),(function (a__89033__auto__,b__89034__auto__){
return promesa.protocols._bind(null,(function (___56277__auto__){
return promesa.protocols._bind((resolver160816_160969.cljs$core$IFn$_invoke$arity$2 ? resolver160816_160969.cljs$core$IFn$_invoke$arity$2(a__89033__auto__,b__89034__auto__) : resolver160816_160969.call(null,a__89033__auto__,b__89034__auto__)),(function (result__89035__auto__){
return promesa.protocols._bind(null,(function (___56267__auto__){
return promesa.protocols._promise((cljs.core.truth_(result__89035__auto__)?duck_repled.schemas.validate_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.keys(result__89035__auto__),result__89035__auto__,["Invalid schema on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(op160818_160971)," outputing ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(outputs160817_160970)].join('')):null));
}));
}));
}));
})));
duck_repled.definition_resolvers.file_exists_resolver = com.wsscode.pathom3.connect.operation.resolver.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol("duck-repled.definition-resolvers","file-exists-resolver","duck-repled.definition-resolvers/file-exists-resolver",-1409519308,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","output","com.wsscode.pathom3.connect.operation/output",801488703),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("file","exists?","file/exists?",1411240824)], null),new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","input","com.wsscode.pathom3.connect.operation/input",-1553849497),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("file","filename","file/filename",-1425692619)], null)], null),(function duck_repled$definition_resolvers$file_exists_resolver(_,p__160830){
var map__160832 = p__160830;
var map__160832__$1 = cljs.core.__destructure_map(map__160832);
var filename = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__160832__$1,new cljs.core.Keyword("file","filename","file/filename",-1425692619));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("file","exists?","file/exists?",1411240824),duck_repled.definition_resolvers.file_exists_QMARK_(filename)], null);
}));

var original160824_160972 = duck_repled.definition_resolvers.file_exists_resolver;
var resolver160825_160973 = new cljs.core.Keyword(null,"resolve","resolve",-1584445482).cljs$core$IFn$_invoke$arity$1(original160824_160972);
var outputs160826_160974 = new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","output","com.wsscode.pathom3.connect.operation/output",801488703).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(original160824_160972));
var op160827_160975 = new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","op-name","com.wsscode.pathom3.connect.operation/op-name",-1249801049).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(original160824_160972));
(duck_repled.definition_resolvers.file_exists_resolver = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(original160824_160972,new cljs.core.Keyword(null,"resolve","resolve",-1584445482),(function (a__89033__auto__,b__89034__auto__){
return promesa.protocols._bind(null,(function (___56277__auto__){
return promesa.protocols._bind((resolver160825_160973.cljs$core$IFn$_invoke$arity$2 ? resolver160825_160973.cljs$core$IFn$_invoke$arity$2(a__89033__auto__,b__89034__auto__) : resolver160825_160973.call(null,a__89033__auto__,b__89034__auto__)),(function (result__89035__auto__){
return promesa.protocols._bind(null,(function (___56267__auto__){
return promesa.protocols._promise((cljs.core.truth_(result__89035__auto__)?duck_repled.schemas.validate_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.keys(result__89035__auto__),result__89035__auto__,["Invalid schema on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(op160827_160975)," outputing ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(outputs160826_160974)].join('')):null));
}));
}));
}));
})));
duck_repled.definition_resolvers.position_resolver = com.wsscode.pathom3.connect.operation.resolver.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol("duck-repled.definition-resolvers","position-resolver","duck-repled.definition-resolvers/position-resolver",198287486,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","output","com.wsscode.pathom3.connect.operation/output",801488703),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("definition","row","definition/row",275880138),new cljs.core.Keyword("definition","col","definition/col",-811501491)], null),new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","input","com.wsscode.pathom3.connect.operation/input",-1553849497),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("var","meta","var/meta",1499588507)], null)], null),(function duck_repled$definition_resolvers$position_resolver(_,p__160842){
var map__160843 = p__160842;
var map__160843__$1 = cljs.core.__destructure_map(map__160843);
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__160843__$1,new cljs.core.Keyword("var","meta","var/meta",1499588507));
var temp__5753__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(meta);
if(cljs.core.truth_(temp__5753__auto__)){
var line = temp__5753__auto__;
var G__160844 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("definition","row","definition/row",275880138),(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(meta) - (1))], null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(meta))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__160844,new cljs.core.Keyword("definition","col","definition/col",-811501491),(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(meta) - (1)));
} else {
return G__160844;
}
} else {
return null;
}
}));

var original160834_160976 = duck_repled.definition_resolvers.position_resolver;
var resolver160835_160977 = new cljs.core.Keyword(null,"resolve","resolve",-1584445482).cljs$core$IFn$_invoke$arity$1(original160834_160976);
var outputs160836_160978 = new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","output","com.wsscode.pathom3.connect.operation/output",801488703).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(original160834_160976));
var op160837_160979 = new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","op-name","com.wsscode.pathom3.connect.operation/op-name",-1249801049).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(original160834_160976));
(duck_repled.definition_resolvers.position_resolver = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(original160834_160976,new cljs.core.Keyword(null,"resolve","resolve",-1584445482),(function (a__89033__auto__,b__89034__auto__){
return promesa.protocols._bind(null,(function (___56277__auto__){
return promesa.protocols._bind((resolver160835_160977.cljs$core$IFn$_invoke$arity$2 ? resolver160835_160977.cljs$core$IFn$_invoke$arity$2(a__89033__auto__,b__89034__auto__) : resolver160835_160977.call(null,a__89033__auto__,b__89034__auto__)),(function (result__89035__auto__){
return promesa.protocols._bind(null,(function (___56267__auto__){
return promesa.protocols._promise((cljs.core.truth_(result__89035__auto__)?duck_repled.schemas.validate_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.keys(result__89035__auto__),result__89035__auto__,["Invalid schema on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(op160837_160979)," outputing ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(outputs160836_160978)].join('')):null));
}));
}));
}));
})));
duck_repled.definition_resolvers.norm_result = (function duck_repled$definition_resolvers$norm_result(file_name){
var os = shadow.js.shim.module$os.platform();
var G__160861 = file_name;
if(cljs.core.truth_(cljs.core.re_find(/^win/i,os))){
return clojure.string.replace_first(G__160861,/^\//,"");
} else {
return G__160861;
}
});
duck_repled.definition_resolvers.existing_filename = com.wsscode.pathom3.connect.operation.resolver.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol("duck-repled.definition-resolvers","existing-filename","duck-repled.definition-resolvers/existing-filename",-1927725947,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","output","com.wsscode.pathom3.connect.operation/output",801488703),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("definition","filename","definition/filename",1721264452)], null),new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","priority","com.wsscode.pathom3.connect.operation/priority",-813904543),(3),new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","input","com.wsscode.pathom3.connect.operation/input",-1553849497),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("var","meta","var/meta",1499588507)], null)], null),(function duck_repled$definition_resolvers$existing_filename(_,p__160866){
var map__160867 = p__160866;
var map__160867__$1 = cljs.core.__destructure_map(map__160867);
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__160867__$1,new cljs.core.Keyword("var","meta","var/meta",1499588507));
if(cljs.core.truth_(duck_repled.definition_resolvers.file_exists_QMARK_(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(meta)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("definition","filename","definition/filename",1721264452),duck_repled.definition_resolvers.norm_result(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(meta))], null);
} else {
return null;
}
}));

var original160862_160980 = duck_repled.definition_resolvers.existing_filename;
var resolver160863_160981 = new cljs.core.Keyword(null,"resolve","resolve",-1584445482).cljs$core$IFn$_invoke$arity$1(original160862_160980);
var outputs160864_160982 = new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","output","com.wsscode.pathom3.connect.operation/output",801488703).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(original160862_160980));
var op160865_160983 = new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","op-name","com.wsscode.pathom3.connect.operation/op-name",-1249801049).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(original160862_160980));
(duck_repled.definition_resolvers.existing_filename = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(original160862_160980,new cljs.core.Keyword(null,"resolve","resolve",-1584445482),(function (a__89033__auto__,b__89034__auto__){
return promesa.protocols._bind(null,(function (___56277__auto__){
return promesa.protocols._bind((resolver160863_160981.cljs$core$IFn$_invoke$arity$2 ? resolver160863_160981.cljs$core$IFn$_invoke$arity$2(a__89033__auto__,b__89034__auto__) : resolver160863_160981.call(null,a__89033__auto__,b__89034__auto__)),(function (result__89035__auto__){
return promesa.protocols._bind(null,(function (___56267__auto__){
return promesa.protocols._promise((cljs.core.truth_(result__89035__auto__)?duck_repled.schemas.validate_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.keys(result__89035__auto__),result__89035__auto__,["Invalid schema on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(op160865_160983)," outputing ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(outputs160864_160982)].join('')):null));
}));
}));
}));
})));
duck_repled.definition_resolvers.read_jar = (function duck_repled$definition_resolvers$read_jar(clj,jar_file_name){
var vec__160871 = clojure.string.split.cljs$core$IFn$_invoke$arity$3(jar_file_name,/!\//,(2));
var jar = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__160871,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__160871,(1),null);
var jar__$1 = clojure.string.replace_first(jar,/file:/,"");
var t = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"jar-file__160868__auto__","jar-file__160868__auto__",157027833,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"java.util.jar.JarFile.","java.util.jar.JarFile.",1948481733,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword("duck-repled.definition-resolvers","jar","duck-repled.definition-resolvers/jar",1603710630),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"ba__160869__auto__","ba__160869__auto__",-940369555,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"java.io.ByteArrayOutputStream.","java.io.ByteArrayOutputStream.",399984032,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"is__160870__auto__","is__160870__auto__",893849531,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".getInputStream",".getInputStream",-1187358654,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"jar-file__160868__auto__","jar-file__160868__auto__",157027833,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".getJarEntry",".getJarEntry",1683694053,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"jar-file__160868__auto__","jar-file__160868__auto__",157027833,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword("duck-repled.definition-resolvers","path","duck-repled.definition-resolvers/path",269305471),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("clojure.java.io","copy","clojure.java.io/copy",2139950786,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"is__160870__auto__","is__160870__auto__",893849531,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"ba__160869__auto__","ba__160869__auto__",-940369555,null),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"java.lang.String.","java.lang.String.",2016118773,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,".toByteArray",".toByteArray",1550382981,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"ba__160869__auto__","ba__160869__auto__",-940369555,null),null,(1),null))))),null,(1),null))))),null,(1),null))], 0))));
var code = duck_repled.template.template(t,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("duck-repled.definition-resolvers","jar","duck-repled.definition-resolvers/jar",1603710630),jar__$1,new cljs.core.Keyword("duck-repled.definition-resolvers","path","duck-repled.definition-resolvers/path",269305471),path], null));
return duck_repled.repl_protocol.eval.cljs$core$IFn$_invoke$arity$2(clj,code);
});
duck_repled.definition_resolvers.clojure_filename = com.wsscode.pathom3.connect.operation.resolver.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol("duck-repled.definition-resolvers","clojure-filename","duck-repled.definition-resolvers/clojure-filename",1452603745,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","input","com.wsscode.pathom3.connect.operation/input",-1553849497),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("repl","evaluator","repl/evaluator",693013328),new cljs.core.Keyword("var","meta","var/meta",1499588507),new cljs.core.Keyword("repl","kind","repl/kind",-721172504),com.wsscode.pathom3.connect.operation._QMARK_(new cljs.core.Keyword("repl","clj","repl/clj",-655079317))], null),new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","output","com.wsscode.pathom3.connect.operation/output",801488703),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("definition","filename","definition/filename",1721264452),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("definition","contents","definition/contents",-151279794),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","contents","text/contents",-1566533716),new cljs.core.Keyword("text","range","text/range",1644551777)], null)], null)], null)], null),(function duck_repled$definition_resolvers$clojure_filename(_,p__160882){
var map__160883 = p__160882;
var map__160883__$1 = cljs.core.__destructure_map(map__160883);
var evaluator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__160883__$1,new cljs.core.Keyword("repl","evaluator","repl/evaluator",693013328));
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__160883__$1,new cljs.core.Keyword("var","meta","var/meta",1499588507));
var kind = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__160883__$1,new cljs.core.Keyword("repl","kind","repl/kind",-721172504));
var clj = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__160883__$1,new cljs.core.Keyword("repl","clj","repl/clj",-655079317));
var temp__5753__auto__ = (function (){var G__160885 = kind;
var G__160885__$1 = (((G__160885 instanceof cljs.core.Keyword))?G__160885.fqn:null);
switch (G__160885__$1) {
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
return promesa.protocols._bind(duck_repled.repl_protocol.eval.cljs$core$IFn$_invoke$arity$2(repl,code),(function (p__160889){
var map__160890 = p__160889;
var map__160890__$1 = cljs.core.__destructure_map(map__160890);
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__160890__$1,new cljs.core.Keyword(null,"result","result",1415092211));
return promesa.protocols._bind(duck_repled.definition_resolvers.norm_result(result),(function (filename){
return promesa.protocols._bind(null,(function (___56267__auto__){
return promesa.protocols._promise((cljs.core.truth_(cljs.core.re_find(/\.jar!\//,filename))?promesa.protocols._bind(null,(function (___56277__auto____$1){
return promesa.protocols._bind(duck_repled.definition_resolvers.read_jar(repl,filename),(function (p__160893){
var map__160894 = p__160893;
var map__160894__$1 = cljs.core.__destructure_map(map__160894);
var result__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__160894__$1,new cljs.core.Keyword(null,"result","result",1415092211));
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

var original160878_160986 = duck_repled.definition_resolvers.clojure_filename;
var resolver160879_160987 = new cljs.core.Keyword(null,"resolve","resolve",-1584445482).cljs$core$IFn$_invoke$arity$1(original160878_160986);
var outputs160880_160988 = new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","output","com.wsscode.pathom3.connect.operation/output",801488703).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(original160878_160986));
var op160881_160989 = new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","op-name","com.wsscode.pathom3.connect.operation/op-name",-1249801049).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(original160878_160986));
(duck_repled.definition_resolvers.clojure_filename = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(original160878_160986,new cljs.core.Keyword(null,"resolve","resolve",-1584445482),(function (a__89033__auto__,b__89034__auto__){
return promesa.protocols._bind(null,(function (___56277__auto__){
return promesa.protocols._bind((resolver160879_160987.cljs$core$IFn$_invoke$arity$2 ? resolver160879_160987.cljs$core$IFn$_invoke$arity$2(a__89033__auto__,b__89034__auto__) : resolver160879_160987.call(null,a__89033__auto__,b__89034__auto__)),(function (result__89035__auto__){
return promesa.protocols._bind(null,(function (___56267__auto__){
return promesa.protocols._promise((cljs.core.truth_(result__89035__auto__)?duck_repled.schemas.validate_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.keys(result__89035__auto__),result__89035__auto__,["Invalid schema on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(op160881_160989)," outputing ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(outputs160880_160988)].join('')):null));
}));
}));
}));
})));
duck_repled.definition_resolvers.file_from_clr = com.wsscode.pathom3.connect.operation.resolver.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol("duck-repled.definition-resolvers","file-from-clr","duck-repled.definition-resolvers/file-from-clr",418414022,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","output","com.wsscode.pathom3.connect.operation/output",801488703),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("definition","filename","definition/filename",1721264452)], null),new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","input","com.wsscode.pathom3.connect.operation/input",-1553849497),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("repl","evaluator","repl/evaluator",693013328),new cljs.core.Keyword("var","meta","var/meta",1499588507),new cljs.core.Keyword("repl","kind","repl/kind",-721172504)], null)], null),(function duck_repled$definition_resolvers$file_from_clr(_,p__160903){
var map__160904 = p__160903;
var map__160904__$1 = cljs.core.__destructure_map(map__160904);
var evaluator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__160904__$1,new cljs.core.Keyword("repl","evaluator","repl/evaluator",693013328));
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__160904__$1,new cljs.core.Keyword("var","meta","var/meta",1499588507));
var kind = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__160904__$1,new cljs.core.Keyword("repl","kind","repl/kind",-721172504));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cljr","cljr",361703864),kind)){
return promesa.protocols._bind(null,(function (___56277__auto__){
return promesa.protocols._bind(duck_repled.template.template(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","some->","cljs.core/some->",-67411995,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword("duck-repled.definition-resolvers","file","duck-repled.definition-resolvers/file",-745265521),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol("clojure.lang.RT","FindFile","clojure.lang.RT/FindFile",-1945450882,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null))], 0)))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("duck-repled.definition-resolvers","file","duck-repled.definition-resolvers/file",-745265521),new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(meta)], null)),(function (code){
return promesa.protocols._bind(duck_repled.repl_protocol.eval.cljs$core$IFn$_invoke$arity$2(evaluator,code),(function (p__160906){
var map__160907 = p__160906;
var map__160907__$1 = cljs.core.__destructure_map(map__160907);
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__160907__$1,new cljs.core.Keyword(null,"result","result",1415092211));
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

var original160898_160990 = duck_repled.definition_resolvers.file_from_clr;
var resolver160899_160991 = new cljs.core.Keyword(null,"resolve","resolve",-1584445482).cljs$core$IFn$_invoke$arity$1(original160898_160990);
var outputs160900_160992 = new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","output","com.wsscode.pathom3.connect.operation/output",801488703).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(original160898_160990));
var op160901_160993 = new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","op-name","com.wsscode.pathom3.connect.operation/op-name",-1249801049).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(original160898_160990));
(duck_repled.definition_resolvers.file_from_clr = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(original160898_160990,new cljs.core.Keyword(null,"resolve","resolve",-1584445482),(function (a__89033__auto__,b__89034__auto__){
return promesa.protocols._bind(null,(function (___56277__auto__){
return promesa.protocols._bind((resolver160899_160991.cljs$core$IFn$_invoke$arity$2 ? resolver160899_160991.cljs$core$IFn$_invoke$arity$2(a__89033__auto__,b__89034__auto__) : resolver160899_160991.call(null,a__89033__auto__,b__89034__auto__)),(function (result__89035__auto__){
return promesa.protocols._bind(null,(function (___56267__auto__){
return promesa.protocols._promise((cljs.core.truth_(result__89035__auto__)?duck_repled.schemas.validate_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.keys(result__89035__auto__),result__89035__auto__,["Invalid schema on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(op160901_160993)," outputing ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(outputs160900_160992)].join('')):null));
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
var vec__160913 = duck_repled.editor_helpers.current_var(cljs.core.str.cljs$core$IFn$_invoke$arity$1(contents__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__160913,(0),null);
var var$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__160913,(1),null);
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
duck_repled.definition_resolvers.resolver_for_ns_only = com.wsscode.pathom3.connect.operation.resolver.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol("duck-repled.definition-resolvers","resolver-for-ns-only","duck-repled.definition-resolvers/resolver-for-ns-only",1030445510,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","input","com.wsscode.pathom3.connect.operation/input",-1553849497),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("repl","evaluator","repl/evaluator",693013328),com.wsscode.pathom3.connect.operation._QMARK_(new cljs.core.Keyword("text","current-var","text/current-var",1432933099)),com.wsscode.pathom3.connect.operation._QMARK_(new cljs.core.Keyword("text","contents","text/contents",-1566533716))], null),new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","output","com.wsscode.pathom3.connect.operation/output",801488703),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("var","meta","var/meta",1499588507),new cljs.core.Keyword("definition","row","definition/row",275880138),new cljs.core.Keyword("definition","col","definition/col",-811501491)], null)], null),(function duck_repled$definition_resolvers$resolver_for_ns_only(_,p__160926){
var map__160927 = p__160926;
var map__160927__$1 = cljs.core.__destructure_map(map__160927);
var evaluator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__160927__$1,new cljs.core.Keyword("repl","evaluator","repl/evaluator",693013328));
var contents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__160927__$1,new cljs.core.Keyword("text","contents","text/contents",-1566533716));
var current_var = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__160927__$1,new cljs.core.Keyword("text","current-var","text/current-var",1432933099));
var temp__5753__auto__ = (function (){var G__160928 = duck_repled.definition_resolvers.extract_right_var(current_var,contents);
if((G__160928 == null)){
return null;
} else {
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(G__160928);
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var fqn = temp__5753__auto__;
if((cljs.core.namespace(fqn) == null)){
return promesa.protocols._bind(null,(function (___56277__auto__){
return promesa.protocols._bind(duck_repled.template.template(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"ns__160917__auto__","ns__160917__auto__",-1384306846,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","find-ns","cljs.core/find-ns",-486459417,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword("duck-repled.definition-resolvers","namespace-sym","duck-repled.definition-resolvers/namespace-sym",-1866654453),null,(1),null))))),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"first-var__160918__auto__","first-var__160918__auto__",888720208,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","some->","cljs.core/some->",-67411995,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"ns__160917__auto__","ns__160917__auto__",-1384306846,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","ns-interns","cljs.core/ns-interns",-1003949633,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","second","cljs.core/second",520555958,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","meta","cljs.core/meta",-748218346,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"file","file",-1269645878),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"ns-meta__160919__auto__","ns-meta__160919__auto__",1414668766,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","meta","cljs.core/meta",-748218346,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"ns__160917__auto__","ns__160917__auto__",-1384306846,null),null,(1),null))))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","cond->","cljs.core/cond->",-113941356,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"ns-meta__160919__auto__","ns-meta__160919__auto__",1414668766,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"first-var__160918__auto__","first-var__160918__auto__",888720208,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","assoc","cljs.core/assoc",322326297,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"file","file",-1269645878),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"first-var__160918__auto__","first-var__160918__auto__",888720208,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("duck-repled.definition-resolvers","namespace-sym","duck-repled.definition-resolvers/namespace-sym",-1866654453),fqn], null)),(function (code){
return promesa.protocols._bind(duck_repled.repl_protocol.eval.cljs$core$IFn$_invoke$arity$2(evaluator,code),(function (p__160937){
var map__160938 = p__160937;
var map__160938__$1 = cljs.core.__destructure_map(map__160938);
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__160938__$1,new cljs.core.Keyword(null,"result","result",1415092211));
return promesa.protocols._bind((function (){var G__160940 = result;
var G__160940__$1 = (((G__160940 == null))?null:new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(G__160940));
if((G__160940__$1 == null)){
return null;
} else {
return (G__160940__$1 - (1));
}
})(),(function (col){
return promesa.protocols._bind(null,(function (___56267__auto__){
return promesa.protocols._promise((cljs.core.truth_(result)?(function (){var G__160941 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("var","meta","var/meta",1499588507),result,new cljs.core.Keyword("definition","row","definition/row",275880138),(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$2(result,(1)) - (1))], null);
if(cljs.core.truth_(col)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__160941,new cljs.core.Keyword("definition","col","definition/col",-811501491),col);
} else {
return G__160941;
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

var original160920_160994 = duck_repled.definition_resolvers.resolver_for_ns_only;
var resolver160921_160995 = new cljs.core.Keyword(null,"resolve","resolve",-1584445482).cljs$core$IFn$_invoke$arity$1(original160920_160994);
var outputs160922_160996 = new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","output","com.wsscode.pathom3.connect.operation/output",801488703).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(original160920_160994));
var op160923_160997 = new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","op-name","com.wsscode.pathom3.connect.operation/op-name",-1249801049).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(original160920_160994));
(duck_repled.definition_resolvers.resolver_for_ns_only = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(original160920_160994,new cljs.core.Keyword(null,"resolve","resolve",-1584445482),(function (a__89033__auto__,b__89034__auto__){
return promesa.protocols._bind(null,(function (___56277__auto__){
return promesa.protocols._bind((resolver160921_160995.cljs$core$IFn$_invoke$arity$2 ? resolver160921_160995.cljs$core$IFn$_invoke$arity$2(a__89033__auto__,b__89034__auto__) : resolver160921_160995.call(null,a__89033__auto__,b__89034__auto__)),(function (result__89035__auto__){
return promesa.protocols._bind(null,(function (___56267__auto__){
return promesa.protocols._promise((cljs.core.truth_(result__89035__auto__)?duck_repled.schemas.validate_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.keys(result__89035__auto__),result__89035__auto__,["Invalid schema on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(op160923_160997)," outputing ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(outputs160922_160996)].join('')):null));
}));
}));
}));
})));
duck_repled.definition_resolvers.resolver_for_stacktrace = com.wsscode.pathom3.connect.operation.resolver.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol("duck-repled.definition-resolvers","resolver-for-stacktrace","duck-repled.definition-resolvers/resolver-for-stacktrace",-291098939,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","input","com.wsscode.pathom3.connect.operation/input",-1553849497),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("repl","evaluator","repl/evaluator",693013328),new cljs.core.Keyword("ex","function-name","ex/function-name",621896913),new cljs.core.Keyword("ex","filename","ex/filename",-1428836124),com.wsscode.pathom3.connect.operation._QMARK_(new cljs.core.Keyword("ex","row","ex/row",-570134166))], null),new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","output","com.wsscode.pathom3.connect.operation/output",801488703),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("var","meta","var/meta",1499588507),new cljs.core.Keyword("definition","row","definition/row",275880138)], null),new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","priority","com.wsscode.pathom3.connect.operation/priority",-813904543),(20)], null),(function duck_repled$definition_resolvers$resolver_for_stacktrace(_,p__160951){
var map__160952 = p__160951;
var map__160952__$1 = cljs.core.__destructure_map(map__160952);
var evaluator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__160952__$1,new cljs.core.Keyword("repl","evaluator","repl/evaluator",693013328));
var function_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__160952__$1,new cljs.core.Keyword("ex","function-name","ex/function-name",621896913));
var filename = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__160952__$1,new cljs.core.Keyword("ex","filename","ex/filename",-1428836124));
var row = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__160952__$1,new cljs.core.Keyword("ex","row","ex/row",-570134166));
return promesa.protocols._bind(null,(function (___56277__auto__){
return promesa.protocols._bind(cljs.core.first(clojure.string.split.cljs$core$IFn$_invoke$arity$2(function_name,/\//)),(function (ns_name){
return promesa.protocols._bind(duck_repled.template.template(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"n__160942__auto__","n__160942__auto__",-484687530,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","find-ns","cljs.core/find-ns",-486459417,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword("duck-repled.definition-resolvers","namespace-sym","duck-repled.definition-resolvers/namespace-sym",-1866654453),null,(1),null))))),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","->>","cljs.core/->>",-1207871206,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"n__160942__auto__","n__160942__auto__",-484687530,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","ns-interns","cljs.core/ns-interns",-1003949633,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","some","cljs.core/some",-977628065,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"___160943__auto__","___160943__auto__",-1518653882,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"res__160944__auto__","res__160944__auto__",260726377,null),null,(1),null)))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"meta__160945__auto__","meta__160945__auto__",-1233532160,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","meta","cljs.core/meta",-748218346,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"res__160944__auto__","res__160944__auto__",260726377,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"file__160946__auto__","file__160946__auto__",-1855685686,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","->","cljs.core/->",1488366311,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"meta__160945__auto__","meta__160945__auto__",-1233532160,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"file","file",-1269645878),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("clojure.string","ends-with?","clojure.string/ends-with?",-745964149,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"file__160946__auto__","file__160946__auto__",-1855685686,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword("duck-repled.definition-resolvers","file-name","duck-repled.definition-resolvers/file-name",-1223053476),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","select-keys","cljs.core/select-keys",1032580216,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"meta__160945__auto__","meta__160945__auto__",-1233532160,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Keyword(null,"file","file",-1269645878),null,(1),null)))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("duck-repled.definition-resolvers","namespace-sym","duck-repled.definition-resolvers/namespace-sym",-1866654453),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(ns_name),new cljs.core.Keyword("duck-repled.definition-resolvers","file-name","duck-repled.definition-resolvers/file-name",-1223053476),filename], null)),(function (code){
return promesa.protocols._bind(duck_repled.repl_protocol.eval.cljs$core$IFn$_invoke$arity$2(evaluator,code),(function (p__160953){
var map__160954 = p__160953;
var map__160954__$1 = cljs.core.__destructure_map(map__160954);
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__160954__$1,new cljs.core.Keyword(null,"result","result",1415092211));
return promesa.protocols._bind(null,(function (___56267__auto__){
return promesa.protocols._promise(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("var","meta","var/meta",1499588507),result,new cljs.core.Keyword("definition","row","definition/row",275880138),row], null));
}));
}));
}));
}));
}));
}));

var original160947_160998 = duck_repled.definition_resolvers.resolver_for_stacktrace;
var resolver160948_160999 = new cljs.core.Keyword(null,"resolve","resolve",-1584445482).cljs$core$IFn$_invoke$arity$1(original160947_160998);
var outputs160949_161000 = new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","output","com.wsscode.pathom3.connect.operation/output",801488703).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(original160947_160998));
var op160950_161001 = new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","op-name","com.wsscode.pathom3.connect.operation/op-name",-1249801049).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(original160947_160998));
(duck_repled.definition_resolvers.resolver_for_stacktrace = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(original160947_160998,new cljs.core.Keyword(null,"resolve","resolve",-1584445482),(function (a__89033__auto__,b__89034__auto__){
return promesa.protocols._bind(null,(function (___56277__auto__){
return promesa.protocols._bind((resolver160948_160999.cljs$core$IFn$_invoke$arity$2 ? resolver160948_160999.cljs$core$IFn$_invoke$arity$2(a__89033__auto__,b__89034__auto__) : resolver160948_160999.call(null,a__89033__auto__,b__89034__auto__)),(function (result__89035__auto__){
return promesa.protocols._bind(null,(function (___56267__auto__){
return promesa.protocols._promise((cljs.core.truth_(result__89035__auto__)?duck_repled.schemas.validate_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.keys(result__89035__auto__),result__89035__auto__,["Invalid schema on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(op160950_161001)," outputing ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(outputs160949_161000)].join('')):null));
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

var original160955_161002 = duck_repled.definition_resolvers.source_from_contents;
var resolver160956_161003 = new cljs.core.Keyword(null,"resolve","resolve",-1584445482).cljs$core$IFn$_invoke$arity$1(original160955_161002);
var outputs160957_161004 = new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","output","com.wsscode.pathom3.connect.operation/output",801488703).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(original160955_161002));
var op160958_161005 = new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","op-name","com.wsscode.pathom3.connect.operation/op-name",-1249801049).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(original160955_161002));
(duck_repled.definition_resolvers.source_from_contents = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(original160955_161002,new cljs.core.Keyword(null,"resolve","resolve",-1584445482),(function (a__89033__auto__,b__89034__auto__){
return promesa.protocols._bind(null,(function (___56277__auto__){
return promesa.protocols._bind((resolver160956_161003.cljs$core$IFn$_invoke$arity$2 ? resolver160956_161003.cljs$core$IFn$_invoke$arity$2(a__89033__auto__,b__89034__auto__) : resolver160956_161003.call(null,a__89033__auto__,b__89034__auto__)),(function (result__89035__auto__){
return promesa.protocols._bind(null,(function (___56267__auto__){
return promesa.protocols._promise((cljs.core.truth_(result__89035__auto__)?duck_repled.schemas.validate_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.keys(result__89035__auto__),result__89035__auto__,["Invalid schema on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(op160958_161005)," outputing ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(outputs160957_161004)].join('')):null));
}));
}));
}));
})));
duck_repled.definition_resolvers.source_from_file = com.wsscode.pathom3.connect.operation.resolver.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol("duck-repled.definition-resolvers","source-from-file","duck-repled.definition-resolvers/source-from-file",-293203153,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","input","com.wsscode.pathom3.connect.operation/input",-1553849497),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("definition","filename","definition/filename",1721264452),new cljs.core.Keyword("definition","row","definition/row",275880138),com.wsscode.pathom3.connect.operation._QMARK_(new cljs.core.Keyword("definition","col","definition/col",-811501491))], null),new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","output","com.wsscode.pathom3.connect.operation/output",801488703),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("definition","source","definition/source",513279520),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","contents","text/contents",-1566533716),new cljs.core.Keyword("text","range","text/range",1644551777)], null)], null)], null)], null),(function duck_repled$definition_resolvers$source_from_file(_,p__160963){
var map__160964 = p__160963;
var map__160964__$1 = cljs.core.__destructure_map(map__160964);
var filename = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__160964__$1,new cljs.core.Keyword("definition","filename","definition/filename",1721264452));
var row = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__160964__$1,new cljs.core.Keyword("definition","row","definition/row",275880138));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__160964__$1,new cljs.core.Keyword("definition","col","definition/col",-811501491));
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
var vec__160965 = temp__5753__auto__;
var range = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__160965,(0),null);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__160965,(1),null);
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

var original160959_161007 = duck_repled.definition_resolvers.source_from_file;
var resolver160960_161008 = new cljs.core.Keyword(null,"resolve","resolve",-1584445482).cljs$core$IFn$_invoke$arity$1(original160959_161007);
var outputs160961_161009 = new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","output","com.wsscode.pathom3.connect.operation/output",801488703).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(original160959_161007));
var op160962_161010 = new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","op-name","com.wsscode.pathom3.connect.operation/op-name",-1249801049).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(original160959_161007));
(duck_repled.definition_resolvers.source_from_file = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(original160959_161007,new cljs.core.Keyword(null,"resolve","resolve",-1584445482),(function (a__89033__auto__,b__89034__auto__){
return promesa.protocols._bind(null,(function (___56277__auto__){
return promesa.protocols._bind((resolver160960_161008.cljs$core$IFn$_invoke$arity$2 ? resolver160960_161008.cljs$core$IFn$_invoke$arity$2(a__89033__auto__,b__89034__auto__) : resolver160960_161008.call(null,a__89033__auto__,b__89034__auto__)),(function (result__89035__auto__){
return promesa.protocols._bind(null,(function (___56267__auto__){
return promesa.protocols._promise((cljs.core.truth_(result__89035__auto__)?duck_repled.schemas.validate_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.keys(result__89035__auto__),result__89035__auto__,["Invalid schema on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(op160962_161010)," outputing ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(outputs160961_161009)].join('')):null));
}));
}));
}));
})));
duck_repled.definition_resolvers.resolvers = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [duck_repled.definition_resolvers.join_paths_resolver,duck_repled.definition_resolvers.file_exists_resolver,duck_repled.definition_resolvers.position_resolver,duck_repled.definition_resolvers.existing_filename,duck_repled.definition_resolvers.clojure_filename,duck_repled.definition_resolvers.file_from_clr,duck_repled.definition_resolvers.resolver_for_ns_only,duck_repled.definition_resolvers.resolver_for_stacktrace,duck_repled.definition_resolvers.source_from_contents,duck_repled.definition_resolvers.source_from_file], null);

//# sourceMappingURL=duck_repled.definition_resolvers.js.map
