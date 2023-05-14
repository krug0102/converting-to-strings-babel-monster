goog.provide('duck_repled.editor_resolvers');
duck_repled.editor_resolvers.seed_data = com.wsscode.pathom3.connect.operation.resolver.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol("duck-repled.editor-resolvers","seed-data","duck-repled.editor-resolvers/seed-data",-1697143672,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","output","com.wsscode.pathom3.connect.operation/output",801488703),cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"map","map",1371690461),null], null), null),cljs.core.keys(duck_repled.schemas.registry))),new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","priority","com.wsscode.pathom3.connect.operation/priority",-813904543),(99)], null),(function duck_repled$editor_resolvers$seed_data(p__89048,_){
var map__89049 = p__89048;
var map__89049__$1 = cljs.core.__destructure_map(map__89049);
var seed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89049__$1,new cljs.core.Keyword(null,"seed","seed",68613327));
return seed;
}));

var original89044_89272 = duck_repled.editor_resolvers.seed_data;
var resolver89045_89273 = new cljs.core.Keyword(null,"resolve","resolve",-1584445482).cljs$core$IFn$_invoke$arity$1(original89044_89272);
var outputs89046_89274 = new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","output","com.wsscode.pathom3.connect.operation/output",801488703).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(original89044_89272));
var op89047_89275 = new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","op-name","com.wsscode.pathom3.connect.operation/op-name",-1249801049).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(original89044_89272));
(duck_repled.editor_resolvers.seed_data = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(original89044_89272,new cljs.core.Keyword(null,"resolve","resolve",-1584445482),(function (a__89033__auto__,b__89034__auto__){
return promesa.protocols._bind(null,(function (___56277__auto__){
return promesa.protocols._bind((resolver89045_89273.cljs$core$IFn$_invoke$arity$2 ? resolver89045_89273.cljs$core$IFn$_invoke$arity$2(a__89033__auto__,b__89034__auto__) : resolver89045_89273.call(null,a__89033__auto__,b__89034__auto__)),(function (result__89035__auto__){
return promesa.protocols._bind(null,(function (___56267__auto__){
return promesa.protocols._promise((cljs.core.truth_(result__89035__auto__)?duck_repled.schemas.validate_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.keys(result__89035__auto__),result__89035__auto__,["Invalid schema on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(op89047_89275)," outputing ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(outputs89046_89274)].join('')):null));
}));
}));
}));
})));
duck_repled.editor_resolvers.separate_data = com.wsscode.pathom3.connect.operation.resolver.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol("duck-repled.editor-resolvers","separate-data","duck-repled.editor-resolvers/separate-data",-2036697622,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","output","com.wsscode.pathom3.connect.operation/output",801488703),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","filename","editor/filename",1561957414),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("editor","contents","editor/contents",-394611860),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","contents","text/contents",-1566533716),new cljs.core.Keyword("text","range","text/range",1644551777)], null)], null)], null),new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","input","com.wsscode.pathom3.connect.operation/input",-1553849497),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","data","editor/data",-1539989548)], null)], null),(function duck_repled$editor_resolvers$separate_data(_,p__89070){
var map__89071 = p__89070;
var map__89071__$1 = cljs.core.__destructure_map(map__89071);
var editor_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89071__$1,new cljs.core.Keyword("editor","data","editor/data",-1539989548));
var file = new cljs.core.Keyword(null,"filename","filename",-1428840783).cljs$core$IFn$_invoke$arity$1(editor_data);
var G__89072 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("editor","contents","editor/contents",-394611860),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("text","contents","text/contents",-1566533716),new cljs.core.Keyword(null,"contents","contents",-1567174023).cljs$core$IFn$_invoke$arity$1(editor_data),new cljs.core.Keyword("text","range","text/range",1644551777),new cljs.core.Keyword(null,"range","range",1639692286).cljs$core$IFn$_invoke$arity$1(editor_data)], null)], null);
if(cljs.core.truth_(file)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__89072,new cljs.core.Keyword("editor","filename","editor/filename",1561957414),file);
} else {
return G__89072;
}
}));

var original89050_89279 = duck_repled.editor_resolvers.separate_data;
var resolver89051_89280 = new cljs.core.Keyword(null,"resolve","resolve",-1584445482).cljs$core$IFn$_invoke$arity$1(original89050_89279);
var outputs89052_89281 = new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","output","com.wsscode.pathom3.connect.operation/output",801488703).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(original89050_89279));
var op89053_89282 = new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","op-name","com.wsscode.pathom3.connect.operation/op-name",-1249801049).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(original89050_89279));
(duck_repled.editor_resolvers.separate_data = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(original89050_89279,new cljs.core.Keyword(null,"resolve","resolve",-1584445482),(function (a__89033__auto__,b__89034__auto__){
return promesa.protocols._bind(null,(function (___56277__auto__){
return promesa.protocols._bind((resolver89051_89280.cljs$core$IFn$_invoke$arity$2 ? resolver89051_89280.cljs$core$IFn$_invoke$arity$2(a__89033__auto__,b__89034__auto__) : resolver89051_89280.call(null,a__89033__auto__,b__89034__auto__)),(function (result__89035__auto__){
return promesa.protocols._bind(null,(function (___56267__auto__){
return promesa.protocols._promise((cljs.core.truth_(result__89035__auto__)?duck_repled.schemas.validate_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.keys(result__89035__auto__),result__89035__auto__,["Invalid schema on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(op89053_89282)," outputing ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(outputs89052_89281)].join('')):null));
}));
}));
}));
})));
duck_repled.editor_resolvers.namespace_from_text = com.wsscode.pathom3.connect.operation.resolver.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol("duck-repled.editor-resolvers","namespace-from-text","duck-repled.editor-resolvers/namespace-from-text",-1146659775,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","output","com.wsscode.pathom3.connect.operation/output",801488703),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("text","ns","text/ns",453543537),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","contents","text/contents",-1566533716),new cljs.core.Keyword("text","range","text/range",1644551777),new cljs.core.Keyword("text","ns","text/ns",453543537)], null)], null)], null),new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","input","com.wsscode.pathom3.connect.operation/input",-1553849497),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","top-blocks","text/top-blocks",-1746652277),new cljs.core.Keyword("text","range","text/range",1644551777)], null)], null),(function duck_repled$editor_resolvers$namespace_from_text(_,p__89083){
var map__89084 = p__89083;
var map__89084__$1 = cljs.core.__destructure_map(map__89084);
var top_blocks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89084__$1,new cljs.core.Keyword("text","top-blocks","text/top-blocks",-1746652277));
var range = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89084__$1,new cljs.core.Keyword("text","range","text/range",1644551777));
var temp__5753__auto__ = duck_repled.editor_helpers.ns_range_for(top_blocks,cljs.core.first(range));
if(cljs.core.truth_(temp__5753__auto__)){
var vec__89088 = temp__5753__auto__;
var range__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__89088,(0),null);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__89088,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("text","ns","text/ns",453543537),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("text","contents","text/contents",-1566533716),cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),new cljs.core.Keyword("text","range","text/range",1644551777),range__$1], null)], null);
} else {
return null;
}
}));

var original89079_89284 = duck_repled.editor_resolvers.namespace_from_text;
var resolver89080_89285 = new cljs.core.Keyword(null,"resolve","resolve",-1584445482).cljs$core$IFn$_invoke$arity$1(original89079_89284);
var outputs89081_89286 = new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","output","com.wsscode.pathom3.connect.operation/output",801488703).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(original89079_89284));
var op89082_89287 = new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","op-name","com.wsscode.pathom3.connect.operation/op-name",-1249801049).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(original89079_89284));
(duck_repled.editor_resolvers.namespace_from_text = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(original89079_89284,new cljs.core.Keyword(null,"resolve","resolve",-1584445482),(function (a__89033__auto__,b__89034__auto__){
return promesa.protocols._bind(null,(function (___56277__auto__){
return promesa.protocols._bind((resolver89080_89285.cljs$core$IFn$_invoke$arity$2 ? resolver89080_89285.cljs$core$IFn$_invoke$arity$2(a__89033__auto__,b__89034__auto__) : resolver89080_89285.call(null,a__89033__auto__,b__89034__auto__)),(function (result__89035__auto__){
return promesa.protocols._bind(null,(function (___56267__auto__){
return promesa.protocols._promise((cljs.core.truth_(result__89035__auto__)?duck_repled.schemas.validate_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.keys(result__89035__auto__),result__89035__auto__,["Invalid schema on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(op89082_89287)," outputing ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(outputs89081_89286)].join('')):null));
}));
}));
}));
})));
duck_repled.editor_resolvers.contents_top_blocks = com.wsscode.pathom3.connect.operation.resolver.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol("duck-repled.editor-resolvers","contents-top-blocks","duck-repled.editor-resolvers/contents-top-blocks",696738496,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","output","com.wsscode.pathom3.connect.operation/output",801488703),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","top-blocks","text/top-blocks",-1746652277)], null),new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","input","com.wsscode.pathom3.connect.operation/input",-1553849497),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","contents","text/contents",-1566533716)], null)], null),(function duck_repled$editor_resolvers$contents_top_blocks(_,p__89107){
var map__89108 = p__89107;
var map__89108__$1 = cljs.core.__destructure_map(map__89108);
var contents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89108__$1,new cljs.core.Keyword("text","contents","text/contents",-1566533716));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("text","top-blocks","text/top-blocks",-1746652277),duck_repled.editor_helpers.top_blocks(contents)], null);
}));

var original89103_89288 = duck_repled.editor_resolvers.contents_top_blocks;
var resolver89104_89289 = new cljs.core.Keyword(null,"resolve","resolve",-1584445482).cljs$core$IFn$_invoke$arity$1(original89103_89288);
var outputs89105_89290 = new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","output","com.wsscode.pathom3.connect.operation/output",801488703).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(original89103_89288));
var op89106_89291 = new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","op-name","com.wsscode.pathom3.connect.operation/op-name",-1249801049).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(original89103_89288));
(duck_repled.editor_resolvers.contents_top_blocks = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(original89103_89288,new cljs.core.Keyword(null,"resolve","resolve",-1584445482),(function (a__89033__auto__,b__89034__auto__){
return promesa.protocols._bind(null,(function (___56277__auto__){
return promesa.protocols._bind((resolver89104_89289.cljs$core$IFn$_invoke$arity$2 ? resolver89104_89289.cljs$core$IFn$_invoke$arity$2(a__89033__auto__,b__89034__auto__) : resolver89104_89289.call(null,a__89033__auto__,b__89034__auto__)),(function (result__89035__auto__){
return promesa.protocols._bind(null,(function (___56267__auto__){
return promesa.protocols._promise((cljs.core.truth_(result__89035__auto__)?duck_repled.schemas.validate_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.keys(result__89035__auto__),result__89035__auto__,["Invalid schema on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(op89106_89291)," outputing ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(outputs89105_89290)].join('')):null));
}));
}));
}));
})));
duck_repled.editor_resolvers.contents_top_block = com.wsscode.pathom3.connect.operation.resolver.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol("duck-repled.editor-resolvers","contents-top-block","duck-repled.editor-resolvers/contents-top-block",1737829525,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","input","com.wsscode.pathom3.connect.operation/input",-1553849497),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","top-blocks","text/top-blocks",-1746652277),new cljs.core.Keyword("text","range","text/range",1644551777),com.wsscode.pathom3.connect.operation._QMARK_(new cljs.core.Keyword("text","ns","text/ns",453543537))], null),new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","output","com.wsscode.pathom3.connect.operation/output",801488703),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("text","top-block","text/top-block",127527825),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","contents","text/contents",-1566533716),new cljs.core.Keyword("text","range","text/range",1644551777),new cljs.core.Keyword("text","ns","text/ns",453543537)], null)], null)], null)], null),(function duck_repled$editor_resolvers$contents_top_block(_,p__89122){
var map__89123 = p__89122;
var map__89123__$1 = cljs.core.__destructure_map(map__89123);
var top_blocks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89123__$1,new cljs.core.Keyword("text","top-blocks","text/top-blocks",-1746652277));
var range = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89123__$1,new cljs.core.Keyword("text","range","text/range",1644551777));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89123__$1,new cljs.core.Keyword("text","ns","text/ns",453543537));
var temp__5753__auto__ = duck_repled.editor_helpers.top_block_for(top_blocks,cljs.core.first(range));
if(cljs.core.truth_(temp__5753__auto__)){
var vec__89124 = temp__5753__auto__;
var range__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__89124,(0),null);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__89124,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("text","top-block","text/top-block",127527825),(function (){var G__89127 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("text","contents","text/contents",-1566533716),text,new cljs.core.Keyword("text","range","text/range",1644551777),range__$1], null);
if(cljs.core.truth_(ns)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__89127,new cljs.core.Keyword("text","ns","text/ns",453543537),ns);
} else {
return G__89127;
}
})()], null);
} else {
return null;
}
}));

var original89118_89303 = duck_repled.editor_resolvers.contents_top_block;
var resolver89119_89304 = new cljs.core.Keyword(null,"resolve","resolve",-1584445482).cljs$core$IFn$_invoke$arity$1(original89118_89303);
var outputs89120_89305 = new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","output","com.wsscode.pathom3.connect.operation/output",801488703).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(original89118_89303));
var op89121_89306 = new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","op-name","com.wsscode.pathom3.connect.operation/op-name",-1249801049).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(original89118_89303));
(duck_repled.editor_resolvers.contents_top_block = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(original89118_89303,new cljs.core.Keyword(null,"resolve","resolve",-1584445482),(function (a__89033__auto__,b__89034__auto__){
return promesa.protocols._bind(null,(function (___56277__auto__){
return promesa.protocols._bind((resolver89119_89304.cljs$core$IFn$_invoke$arity$2 ? resolver89119_89304.cljs$core$IFn$_invoke$arity$2(a__89033__auto__,b__89034__auto__) : resolver89119_89304.call(null,a__89033__auto__,b__89034__auto__)),(function (result__89035__auto__){
return promesa.protocols._bind(null,(function (___56267__auto__){
return promesa.protocols._promise((cljs.core.truth_(result__89035__auto__)?duck_repled.schemas.validate_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.keys(result__89035__auto__),result__89035__auto__,["Invalid schema on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(op89121_89306)," outputing ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(outputs89120_89305)].join('')):null));
}));
}));
}));
})));
duck_repled.editor_resolvers.text_block = com.wsscode.pathom3.connect.operation.resolver.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol("duck-repled.editor-resolvers","text-block","duck-repled.editor-resolvers/text-block",-707602904,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","input","com.wsscode.pathom3.connect.operation/input",-1553849497),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","contents","text/contents",-1566533716),new cljs.core.Keyword("text","range","text/range",1644551777),com.wsscode.pathom3.connect.operation._QMARK_(new cljs.core.Keyword("text","ns","text/ns",453543537))], null),new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","output","com.wsscode.pathom3.connect.operation/output",801488703),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("text","block","text/block",660870389),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","contents","text/contents",-1566533716),new cljs.core.Keyword("text","range","text/range",1644551777),new cljs.core.Keyword("text","ns","text/ns",453543537)], null)], null)], null)], null),(function duck_repled$editor_resolvers$text_block(_,p__89148){
var map__89149 = p__89148;
var map__89149__$1 = cljs.core.__destructure_map(map__89149);
var contents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89149__$1,new cljs.core.Keyword("text","contents","text/contents",-1566533716));
var range = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89149__$1,new cljs.core.Keyword("text","range","text/range",1644551777));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89149__$1,new cljs.core.Keyword("text","ns","text/ns",453543537));
var temp__5753__auto__ = duck_repled.editor_helpers.block_for(contents,cljs.core.first(range));
if(cljs.core.truth_(temp__5753__auto__)){
var vec__89150 = temp__5753__auto__;
var range__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__89150,(0),null);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__89150,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("text","block","text/block",660870389),(function (){var G__89153 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("text","contents","text/contents",-1566533716),text,new cljs.core.Keyword("text","range","text/range",1644551777),range__$1], null);
if(cljs.core.truth_(ns)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__89153,new cljs.core.Keyword("text","ns","text/ns",453543537),ns);
} else {
return G__89153;
}
})()], null);
} else {
return null;
}
}));

var original89140_89307 = duck_repled.editor_resolvers.text_block;
var resolver89141_89308 = new cljs.core.Keyword(null,"resolve","resolve",-1584445482).cljs$core$IFn$_invoke$arity$1(original89140_89307);
var outputs89142_89309 = new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","output","com.wsscode.pathom3.connect.operation/output",801488703).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(original89140_89307));
var op89143_89310 = new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","op-name","com.wsscode.pathom3.connect.operation/op-name",-1249801049).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(original89140_89307));
(duck_repled.editor_resolvers.text_block = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(original89140_89307,new cljs.core.Keyword(null,"resolve","resolve",-1584445482),(function (a__89033__auto__,b__89034__auto__){
return promesa.protocols._bind(null,(function (___56277__auto__){
return promesa.protocols._bind((resolver89141_89308.cljs$core$IFn$_invoke$arity$2 ? resolver89141_89308.cljs$core$IFn$_invoke$arity$2(a__89033__auto__,b__89034__auto__) : resolver89141_89308.call(null,a__89033__auto__,b__89034__auto__)),(function (result__89035__auto__){
return promesa.protocols._bind(null,(function (___56267__auto__){
return promesa.protocols._promise((cljs.core.truth_(result__89035__auto__)?duck_repled.schemas.validate_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.keys(result__89035__auto__),result__89035__auto__,["Invalid schema on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(op89143_89310)," outputing ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(outputs89142_89309)].join('')):null));
}));
}));
}));
})));
duck_repled.editor_resolvers.text_selection = com.wsscode.pathom3.connect.operation.resolver.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol("duck-repled.editor-resolvers","text-selection","duck-repled.editor-resolvers/text-selection",-1897880285,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","input","com.wsscode.pathom3.connect.operation/input",-1553849497),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","contents","text/contents",-1566533716),new cljs.core.Keyword("text","range","text/range",1644551777),com.wsscode.pathom3.connect.operation._QMARK_(new cljs.core.Keyword("text","ns","text/ns",453543537))], null),new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","output","com.wsscode.pathom3.connect.operation/output",801488703),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("text","selection","text/selection",972475430),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","contents","text/contents",-1566533716),new cljs.core.Keyword("text","range","text/range",1644551777),new cljs.core.Keyword("text","ns","text/ns",453543537)], null)], null)], null)], null),(function duck_repled$editor_resolvers$text_selection(_,p__89169){
var map__89170 = p__89169;
var map__89170__$1 = cljs.core.__destructure_map(map__89170);
var contents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89170__$1,new cljs.core.Keyword("text","contents","text/contents",-1566533716));
var range = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89170__$1,new cljs.core.Keyword("text","range","text/range",1644551777));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89170__$1,new cljs.core.Keyword("text","ns","text/ns",453543537));
var temp__5753__auto__ = duck_repled.editor_helpers.text_in_range(contents,range);
if(cljs.core.truth_(temp__5753__auto__)){
var text = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("text","selection","text/selection",972475430),(function (){var G__89173 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("text","contents","text/contents",-1566533716),text,new cljs.core.Keyword("text","range","text/range",1644551777),range], null);
if(cljs.core.truth_(ns)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__89173,new cljs.core.Keyword("text","ns","text/ns",453543537),ns);
} else {
return G__89173;
}
})()], null);
} else {
return null;
}
}));

var original89161_89311 = duck_repled.editor_resolvers.text_selection;
var resolver89162_89312 = new cljs.core.Keyword(null,"resolve","resolve",-1584445482).cljs$core$IFn$_invoke$arity$1(original89161_89311);
var outputs89163_89313 = new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","output","com.wsscode.pathom3.connect.operation/output",801488703).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(original89161_89311));
var op89164_89314 = new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","op-name","com.wsscode.pathom3.connect.operation/op-name",-1249801049).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(original89161_89311));
(duck_repled.editor_resolvers.text_selection = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(original89161_89311,new cljs.core.Keyword(null,"resolve","resolve",-1584445482),(function (a__89033__auto__,b__89034__auto__){
return promesa.protocols._bind(null,(function (___56277__auto__){
return promesa.protocols._bind((resolver89162_89312.cljs$core$IFn$_invoke$arity$2 ? resolver89162_89312.cljs$core$IFn$_invoke$arity$2(a__89033__auto__,b__89034__auto__) : resolver89162_89312.call(null,a__89033__auto__,b__89034__auto__)),(function (result__89035__auto__){
return promesa.protocols._bind(null,(function (___56267__auto__){
return promesa.protocols._promise((cljs.core.truth_(result__89035__auto__)?duck_repled.schemas.validate_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.keys(result__89035__auto__),result__89035__auto__,["Invalid schema on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(op89164_89314)," outputing ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(outputs89163_89313)].join('')):null));
}));
}));
}));
})));
duck_repled.editor_resolvers.default_text_elements = com.wsscode.pathom3.connect.operation.resolver.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol("duck-repled.editor-resolvers","default-text-elements","duck-repled.editor-resolvers/default-text-elements",-1107609477,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","priority","com.wsscode.pathom3.connect.operation/priority",-813904543),(-10),new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","output","com.wsscode.pathom3.connect.operation/output",801488703),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","contents","text/contents",-1566533716),new cljs.core.Keyword("text","range","text/range",1644551777)], null),new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","input","com.wsscode.pathom3.connect.operation/input",-1553849497),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","contents","editor/contents",-394611860)], null)], null),(function duck_repled$editor_resolvers$default_text_elements(_,p__89188){
var map__89191 = p__89188;
var map__89191__$1 = cljs.core.__destructure_map(map__89191);
var contents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89191__$1,new cljs.core.Keyword("editor","contents","editor/contents",-394611860));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("text","contents","text/contents",-1566533716),new cljs.core.Keyword("text","contents","text/contents",-1566533716).cljs$core$IFn$_invoke$arity$1(contents),new cljs.core.Keyword("text","range","text/range",1644551777),new cljs.core.Keyword("text","range","text/range",1644551777).cljs$core$IFn$_invoke$arity$1(contents)], null);
}));

var original89175_89321 = duck_repled.editor_resolvers.default_text_elements;
var resolver89176_89322 = new cljs.core.Keyword(null,"resolve","resolve",-1584445482).cljs$core$IFn$_invoke$arity$1(original89175_89321);
var outputs89177_89323 = new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","output","com.wsscode.pathom3.connect.operation/output",801488703).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(original89175_89321));
var op89178_89324 = new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","op-name","com.wsscode.pathom3.connect.operation/op-name",-1249801049).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(original89175_89321));
(duck_repled.editor_resolvers.default_text_elements = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(original89175_89321,new cljs.core.Keyword(null,"resolve","resolve",-1584445482),(function (a__89033__auto__,b__89034__auto__){
return promesa.protocols._bind(null,(function (___56277__auto__){
return promesa.protocols._bind((resolver89176_89322.cljs$core$IFn$_invoke$arity$2 ? resolver89176_89322.cljs$core$IFn$_invoke$arity$2(a__89033__auto__,b__89034__auto__) : resolver89176_89322.call(null,a__89033__auto__,b__89034__auto__)),(function (result__89035__auto__){
return promesa.protocols._bind(null,(function (___56267__auto__){
return promesa.protocols._promise((cljs.core.truth_(result__89035__auto__)?duck_repled.schemas.validate_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.keys(result__89035__auto__),result__89035__auto__,["Invalid schema on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(op89178_89324)," outputing ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(outputs89177_89323)].join('')):null));
}));
}));
}));
})));
duck_repled.editor_resolvers.resolver_for_ns = com.wsscode.pathom3.connect.operation.resolver.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol("duck-repled.editor-resolvers","resolver-for-ns","duck-repled.editor-resolvers/resolver-for-ns",-301434039,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","input","com.wsscode.pathom3.connect.operation/input",-1553849497),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom3.connect.operation._QMARK_(new cljs.core.Keyword("text","ns","text/ns",453543537)),com.wsscode.pathom3.connect.operation._QMARK_(new cljs.core.Keyword("repl","kind","repl/kind",-721172504))], null),new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","output","com.wsscode.pathom3.connect.operation/output",801488703),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("repl","namespace","repl/namespace",-380958069)], null)], null),(function duck_repled$editor_resolvers$resolver_for_ns(_,inputs){
var contents = (function (){var or__4223__auto__ = new cljs.core.Keyword("text","contents","text/contents",-1566533716).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("text","ns","text/ns",453543537).cljs$core$IFn$_invoke$arity$1(inputs));
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return new cljs.core.Keyword("text","contents","text/contents",-1566533716).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("text","ns","text/ns",453543537).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("editor","contents","editor/contents",-394611860).cljs$core$IFn$_invoke$arity$1(inputs)));
}
})();
var kind = new cljs.core.Keyword("repl","kind","repl/kind",-721172504).cljs$core$IFn$_invoke$arity$1(inputs);
if(cljs.core.truth_(contents)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("repl","namespace","repl/namespace",-380958069),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(contents)], null);
} else {
if((kind == null)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cljs","cljs",1492417629),kind)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("repl","namespace","repl/namespace",-380958069),new cljs.core.Symbol(null,"cljs.user","cljs.user",877795071,null)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("repl","namespace","repl/namespace",-380958069),new cljs.core.Symbol(null,"user","user",-1122004413,null)], null);

}
}
}
}));

var original89196_89325 = duck_repled.editor_resolvers.resolver_for_ns;
var resolver89197_89326 = new cljs.core.Keyword(null,"resolve","resolve",-1584445482).cljs$core$IFn$_invoke$arity$1(original89196_89325);
var outputs89198_89327 = new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","output","com.wsscode.pathom3.connect.operation/output",801488703).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(original89196_89325));
var op89199_89328 = new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","op-name","com.wsscode.pathom3.connect.operation/op-name",-1249801049).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(original89196_89325));
(duck_repled.editor_resolvers.resolver_for_ns = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(original89196_89325,new cljs.core.Keyword(null,"resolve","resolve",-1584445482),(function (a__89033__auto__,b__89034__auto__){
return promesa.protocols._bind(null,(function (___56277__auto__){
return promesa.protocols._bind((resolver89197_89326.cljs$core$IFn$_invoke$arity$2 ? resolver89197_89326.cljs$core$IFn$_invoke$arity$2(a__89033__auto__,b__89034__auto__) : resolver89197_89326.call(null,a__89033__auto__,b__89034__auto__)),(function (result__89035__auto__){
return promesa.protocols._bind(null,(function (___56267__auto__){
return promesa.protocols._promise((cljs.core.truth_(result__89035__auto__)?duck_repled.schemas.validate_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.keys(result__89035__auto__),result__89035__auto__,["Invalid schema on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(op89199_89328)," outputing ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(outputs89198_89327)].join('')):null));
}));
}));
}));
})));
duck_repled.editor_resolvers.resolve_repl_kind = com.wsscode.pathom3.connect.operation.resolver.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol("duck-repled.editor-resolvers","resolve-repl-kind","duck-repled.editor-resolvers/resolve-repl-kind",-1932390140,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","input","com.wsscode.pathom3.connect.operation/input",-1553849497),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom3.connect.operation._QMARK_(new cljs.core.Keyword("config","repl-kind","config/repl-kind",1937588875)),com.wsscode.pathom3.connect.operation._QMARK_(new cljs.core.Keyword("config","eval-as","config/eval-as",-937334597)),com.wsscode.pathom3.connect.operation._QMARK_(new cljs.core.Keyword("editor","filename","editor/filename",1561957414))], null),new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","output","com.wsscode.pathom3.connect.operation/output",801488703),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("repl","kind","repl/kind",-721172504)], null)], null),(function duck_repled$editor_resolvers$resolve_repl_kind(_,p__89209){
var map__89210 = p__89209;
var map__89210__$1 = cljs.core.__destructure_map(map__89210);
var repl_kind = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89210__$1,new cljs.core.Keyword("config","repl-kind","config/repl-kind",1937588875));
var eval_as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89210__$1,new cljs.core.Keyword("config","eval-as","config/eval-as",-937334597));
var filename = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89210__$1,new cljs.core.Keyword("editor","filename","editor/filename",1561957414));
if(cljs.core.truth_((function (){var and__4221__auto__ = repl_kind;
if(cljs.core.truth_(and__4221__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"clj","clj",-660495428),repl_kind);
} else {
return and__4221__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("repl","kind","repl/kind",-721172504),repl_kind], null);
} else {
if(cljs.core.truth_((function (){var fexpr__89211 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"clj","clj",-660495428),null,new cljs.core.Keyword(null,"cljs","cljs",1492417629),null], null), null);
return (fexpr__89211.cljs$core$IFn$_invoke$arity$1 ? fexpr__89211.cljs$core$IFn$_invoke$arity$1(eval_as) : fexpr__89211.call(null,eval_as));
})())){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("repl","kind","repl/kind",-721172504),eval_as], null);
} else {
var cljs_file_QMARK_ = clojure.string.ends_with_QMARK_(filename,".cljs");
var cljc_file_QMARK_ = ((clojure.string.ends_with_QMARK_(filename,".cljc")) || (clojure.string.ends_with_QMARK_(filename,".cljx")));
var G__89212 = eval_as;
var G__89212__$1 = (((G__89212 instanceof cljs.core.Keyword))?G__89212.fqn:null);
switch (G__89212__$1) {
case "prefer-clj":
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("repl","kind","repl/kind",-721172504),((cljs_file_QMARK_)?new cljs.core.Keyword(null,"cljs","cljs",1492417629):new cljs.core.Keyword(null,"clj","clj",-660495428))], null);

break;
case "prefer-cljs":
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("repl","kind","repl/kind",-721172504),(((((!(cljs_file_QMARK_))) && ((!(cljc_file_QMARK_)))))?new cljs.core.Keyword(null,"clj","clj",-660495428):new cljs.core.Keyword(null,"cljs","cljs",1492417629))], null);

break;
default:
return null;

}

}
}
}));

var original89204_89336 = duck_repled.editor_resolvers.resolve_repl_kind;
var resolver89205_89337 = new cljs.core.Keyword(null,"resolve","resolve",-1584445482).cljs$core$IFn$_invoke$arity$1(original89204_89336);
var outputs89206_89338 = new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","output","com.wsscode.pathom3.connect.operation/output",801488703).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(original89204_89336));
var op89207_89339 = new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","op-name","com.wsscode.pathom3.connect.operation/op-name",-1249801049).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(original89204_89336));
(duck_repled.editor_resolvers.resolve_repl_kind = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(original89204_89336,new cljs.core.Keyword(null,"resolve","resolve",-1584445482),(function (a__89033__auto__,b__89034__auto__){
return promesa.protocols._bind(null,(function (___56277__auto__){
return promesa.protocols._bind((resolver89205_89337.cljs$core$IFn$_invoke$arity$2 ? resolver89205_89337.cljs$core$IFn$_invoke$arity$2(a__89033__auto__,b__89034__auto__) : resolver89205_89337.call(null,a__89033__auto__,b__89034__auto__)),(function (result__89035__auto__){
return promesa.protocols._bind(null,(function (___56267__auto__){
return promesa.protocols._promise((cljs.core.truth_(result__89035__auto__)?duck_repled.schemas.validate_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.keys(result__89035__auto__),result__89035__auto__,["Invalid schema on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(op89207_89339)," outputing ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(outputs89206_89338)].join('')):null));
}));
}));
}));
})));
duck_repled.editor_resolvers.var_from_text = com.wsscode.pathom3.connect.operation.resolver.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol("duck-repled.editor-resolvers","var-from-text","duck-repled.editor-resolvers/var-from-text",1602030289,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","input","com.wsscode.pathom3.connect.operation/input",-1553849497),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","contents","text/contents",-1566533716),new cljs.core.Keyword("text","range","text/range",1644551777),com.wsscode.pathom3.connect.operation._QMARK_(new cljs.core.Keyword("text","ns","text/ns",453543537))], null),new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","output","com.wsscode.pathom3.connect.operation/output",801488703),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("text","current-var","text/current-var",1432933099),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","contents","text/contents",-1566533716),new cljs.core.Keyword("text","range","text/range",1644551777),new cljs.core.Keyword("text","ns","text/ns",453543537)], null)], null)], null)], null),(function duck_repled$editor_resolvers$var_from_text(_,p__89239){
var map__89240 = p__89239;
var map__89240__$1 = cljs.core.__destructure_map(map__89240);
var contents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89240__$1,new cljs.core.Keyword("text","contents","text/contents",-1566533716));
var range = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89240__$1,new cljs.core.Keyword("text","range","text/range",1644551777));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89240__$1,new cljs.core.Keyword("text","ns","text/ns",453543537));
var temp__5753__auto__ = duck_repled.editor_helpers.current_var(contents,cljs.core.first(range));
if(cljs.core.truth_(temp__5753__auto__)){
var vec__89245 = temp__5753__auto__;
var range__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__89245,(0),null);
var curr_var = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__89245,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("text","current-var","text/current-var",1432933099),(function (){var G__89248 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("text","contents","text/contents",-1566533716),curr_var,new cljs.core.Keyword("text","range","text/range",1644551777),range__$1], null);
if(cljs.core.truth_(ns)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__89248,new cljs.core.Keyword("text","ns","text/ns",453543537),ns);
} else {
return G__89248;
}
})()], null);
} else {
return null;
}
}));

var original89233_89343 = duck_repled.editor_resolvers.var_from_text;
var resolver89234_89344 = new cljs.core.Keyword(null,"resolve","resolve",-1584445482).cljs$core$IFn$_invoke$arity$1(original89233_89343);
var outputs89235_89345 = new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","output","com.wsscode.pathom3.connect.operation/output",801488703).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(original89233_89343));
var op89236_89346 = new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","op-name","com.wsscode.pathom3.connect.operation/op-name",-1249801049).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(original89233_89343));
(duck_repled.editor_resolvers.var_from_text = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(original89233_89343,new cljs.core.Keyword(null,"resolve","resolve",-1584445482),(function (a__89033__auto__,b__89034__auto__){
return promesa.protocols._bind(null,(function (___56277__auto__){
return promesa.protocols._bind((resolver89234_89344.cljs$core$IFn$_invoke$arity$2 ? resolver89234_89344.cljs$core$IFn$_invoke$arity$2(a__89033__auto__,b__89034__auto__) : resolver89234_89344.call(null,a__89033__auto__,b__89034__auto__)),(function (result__89035__auto__){
return promesa.protocols._bind(null,(function (___56267__auto__){
return promesa.protocols._promise((cljs.core.truth_(result__89035__auto__)?duck_repled.schemas.validate_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.keys(result__89035__auto__),result__89035__auto__,["Invalid schema on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(op89236_89346)," outputing ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(outputs89235_89345)].join('')):null));
}));
}));
}));
})));
duck_repled.editor_resolvers.contents_from_filename = com.wsscode.pathom3.connect.operation.resolver.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol("duck-repled.editor-resolvers","contents-from-filename","duck-repled.editor-resolvers/contents-from-filename",-1676226686,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","input","com.wsscode.pathom3.connect.operation/input",-1553849497),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("file","filename","file/filename",-1425692619)], null),new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","output","com.wsscode.pathom3.connect.operation/output",801488703),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("file","contents","file/contents",-1566119931),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","contents","text/contents",-1566533716),new cljs.core.Keyword("text","range","text/range",1644551777)], null)], null)], null)], null),(function duck_repled$editor_resolvers$contents_from_filename(env,p__89260){
var map__89264 = p__89260;
var map__89264__$1 = cljs.core.__destructure_map(map__89264);
var filename = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89264__$1,new cljs.core.Keyword("file","filename","file/filename",-1425692619));
var contents = duck_repled.editor_helpers.read_file(filename);
var range = new cljs.core.Keyword(null,"range","range",1639692286).cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom3.connect.operation.params(env),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)], null));
if(cljs.core.truth_(contents)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("file","contents","file/contents",-1566119931),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("text","range","text/range",1644551777),range,new cljs.core.Keyword("text","contents","text/contents",-1566533716),contents], null)], null);
} else {
return null;
}
}));

var original89256_89347 = duck_repled.editor_resolvers.contents_from_filename;
var resolver89257_89348 = new cljs.core.Keyword(null,"resolve","resolve",-1584445482).cljs$core$IFn$_invoke$arity$1(original89256_89347);
var outputs89258_89349 = new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","output","com.wsscode.pathom3.connect.operation/output",801488703).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(original89256_89347));
var op89259_89350 = new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","op-name","com.wsscode.pathom3.connect.operation/op-name",-1249801049).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(original89256_89347));
(duck_repled.editor_resolvers.contents_from_filename = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(original89256_89347,new cljs.core.Keyword(null,"resolve","resolve",-1584445482),(function (a__89033__auto__,b__89034__auto__){
return promesa.protocols._bind(null,(function (___56277__auto__){
return promesa.protocols._bind((resolver89257_89348.cljs$core$IFn$_invoke$arity$2 ? resolver89257_89348.cljs$core$IFn$_invoke$arity$2(a__89033__auto__,b__89034__auto__) : resolver89257_89348.call(null,a__89033__auto__,b__89034__auto__)),(function (result__89035__auto__){
return promesa.protocols._bind(null,(function (___56267__auto__){
return promesa.protocols._promise((cljs.core.truth_(result__89035__auto__)?duck_repled.schemas.validate_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.keys(result__89035__auto__),result__89035__auto__,["Invalid schema on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(op89259_89350)," outputing ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(outputs89258_89349)].join('')):null));
}));
}));
}));
})));
duck_repled.editor_resolvers.resolvers = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [duck_repled.editor_resolvers.seed_data,duck_repled.editor_resolvers.separate_data,duck_repled.editor_resolvers.resolver_for_ns,duck_repled.editor_resolvers.text_block,duck_repled.editor_resolvers.contents_top_blocks,duck_repled.editor_resolvers.contents_top_block,duck_repled.editor_resolvers.var_from_text,duck_repled.editor_resolvers.text_selection,duck_repled.editor_resolvers.namespace_from_text,duck_repled.editor_resolvers.resolve_repl_kind,duck_repled.editor_resolvers.default_text_elements,duck_repled.editor_resolvers.contents_from_filename], null);

//# sourceMappingURL=duck_repled.editor_resolvers.js.map
