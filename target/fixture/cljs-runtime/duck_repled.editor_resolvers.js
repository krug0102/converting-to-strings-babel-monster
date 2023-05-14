goog.provide('duck_repled.editor_resolvers');
duck_repled.editor_resolvers.seed_data = com.wsscode.pathom3.connect.operation.resolver.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol("duck-repled.editor-resolvers","seed-data","duck-repled.editor-resolvers/seed-data",-1697143672,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","output","com.wsscode.pathom3.connect.operation/output",801488703),cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"map","map",1371690461),null], null), null),cljs.core.keys(duck_repled.schemas.registry))),new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","priority","com.wsscode.pathom3.connect.operation/priority",-813904543),(99)], null),(function duck_repled$editor_resolvers$seed_data(p__160628,_){
var map__160629 = p__160628;
var map__160629__$1 = cljs.core.__destructure_map(map__160629);
var seed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__160629__$1,new cljs.core.Keyword(null,"seed","seed",68613327));
return seed;
}));

var original160623_160740 = duck_repled.editor_resolvers.seed_data;
var resolver160624_160741 = new cljs.core.Keyword(null,"resolve","resolve",-1584445482).cljs$core$IFn$_invoke$arity$1(original160623_160740);
var outputs160625_160742 = new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","output","com.wsscode.pathom3.connect.operation/output",801488703).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(original160623_160740));
var op160626_160743 = new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","op-name","com.wsscode.pathom3.connect.operation/op-name",-1249801049).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(original160623_160740));
(duck_repled.editor_resolvers.seed_data = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(original160623_160740,new cljs.core.Keyword(null,"resolve","resolve",-1584445482),(function (a__89033__auto__,b__89034__auto__){
return promesa.protocols._bind(null,(function (___56277__auto__){
return promesa.protocols._bind((resolver160624_160741.cljs$core$IFn$_invoke$arity$2 ? resolver160624_160741.cljs$core$IFn$_invoke$arity$2(a__89033__auto__,b__89034__auto__) : resolver160624_160741.call(null,a__89033__auto__,b__89034__auto__)),(function (result__89035__auto__){
return promesa.protocols._bind(null,(function (___56267__auto__){
return promesa.protocols._promise((cljs.core.truth_(result__89035__auto__)?duck_repled.schemas.validate_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.keys(result__89035__auto__),result__89035__auto__,["Invalid schema on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(op160626_160743)," outputing ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(outputs160625_160742)].join('')):null));
}));
}));
}));
})));
duck_repled.editor_resolvers.separate_data = com.wsscode.pathom3.connect.operation.resolver.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol("duck-repled.editor-resolvers","separate-data","duck-repled.editor-resolvers/separate-data",-2036697622,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","output","com.wsscode.pathom3.connect.operation/output",801488703),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","filename","editor/filename",1561957414),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("editor","contents","editor/contents",-394611860),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","contents","text/contents",-1566533716),new cljs.core.Keyword("text","range","text/range",1644551777)], null)], null)], null),new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","input","com.wsscode.pathom3.connect.operation/input",-1553849497),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","data","editor/data",-1539989548)], null)], null),(function duck_repled$editor_resolvers$separate_data(_,p__160635){
var map__160636 = p__160635;
var map__160636__$1 = cljs.core.__destructure_map(map__160636);
var editor_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__160636__$1,new cljs.core.Keyword("editor","data","editor/data",-1539989548));
var file = new cljs.core.Keyword(null,"filename","filename",-1428840783).cljs$core$IFn$_invoke$arity$1(editor_data);
var G__160637 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("editor","contents","editor/contents",-394611860),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("text","contents","text/contents",-1566533716),new cljs.core.Keyword(null,"contents","contents",-1567174023).cljs$core$IFn$_invoke$arity$1(editor_data),new cljs.core.Keyword("text","range","text/range",1644551777),new cljs.core.Keyword(null,"range","range",1639692286).cljs$core$IFn$_invoke$arity$1(editor_data)], null)], null);
if(cljs.core.truth_(file)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__160637,new cljs.core.Keyword("editor","filename","editor/filename",1561957414),file);
} else {
return G__160637;
}
}));

var original160631_160747 = duck_repled.editor_resolvers.separate_data;
var resolver160632_160748 = new cljs.core.Keyword(null,"resolve","resolve",-1584445482).cljs$core$IFn$_invoke$arity$1(original160631_160747);
var outputs160633_160749 = new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","output","com.wsscode.pathom3.connect.operation/output",801488703).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(original160631_160747));
var op160634_160750 = new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","op-name","com.wsscode.pathom3.connect.operation/op-name",-1249801049).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(original160631_160747));
(duck_repled.editor_resolvers.separate_data = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(original160631_160747,new cljs.core.Keyword(null,"resolve","resolve",-1584445482),(function (a__89033__auto__,b__89034__auto__){
return promesa.protocols._bind(null,(function (___56277__auto__){
return promesa.protocols._bind((resolver160632_160748.cljs$core$IFn$_invoke$arity$2 ? resolver160632_160748.cljs$core$IFn$_invoke$arity$2(a__89033__auto__,b__89034__auto__) : resolver160632_160748.call(null,a__89033__auto__,b__89034__auto__)),(function (result__89035__auto__){
return promesa.protocols._bind(null,(function (___56267__auto__){
return promesa.protocols._promise((cljs.core.truth_(result__89035__auto__)?duck_repled.schemas.validate_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.keys(result__89035__auto__),result__89035__auto__,["Invalid schema on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(op160634_160750)," outputing ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(outputs160633_160749)].join('')):null));
}));
}));
}));
})));
duck_repled.editor_resolvers.namespace_from_text = com.wsscode.pathom3.connect.operation.resolver.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol("duck-repled.editor-resolvers","namespace-from-text","duck-repled.editor-resolvers/namespace-from-text",-1146659775,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","output","com.wsscode.pathom3.connect.operation/output",801488703),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("text","ns","text/ns",453543537),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","contents","text/contents",-1566533716),new cljs.core.Keyword("text","range","text/range",1644551777),new cljs.core.Keyword("text","ns","text/ns",453543537)], null)], null)], null),new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","input","com.wsscode.pathom3.connect.operation/input",-1553849497),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","top-blocks","text/top-blocks",-1746652277),new cljs.core.Keyword("text","range","text/range",1644551777)], null)], null),(function duck_repled$editor_resolvers$namespace_from_text(_,p__160642){
var map__160643 = p__160642;
var map__160643__$1 = cljs.core.__destructure_map(map__160643);
var top_blocks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__160643__$1,new cljs.core.Keyword("text","top-blocks","text/top-blocks",-1746652277));
var range = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__160643__$1,new cljs.core.Keyword("text","range","text/range",1644551777));
var temp__5753__auto__ = duck_repled.editor_helpers.ns_range_for(top_blocks,cljs.core.first(range));
if(cljs.core.truth_(temp__5753__auto__)){
var vec__160644 = temp__5753__auto__;
var range__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__160644,(0),null);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__160644,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("text","ns","text/ns",453543537),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("text","contents","text/contents",-1566533716),cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),new cljs.core.Keyword("text","range","text/range",1644551777),range__$1], null)], null);
} else {
return null;
}
}));

var original160638_160752 = duck_repled.editor_resolvers.namespace_from_text;
var resolver160639_160753 = new cljs.core.Keyword(null,"resolve","resolve",-1584445482).cljs$core$IFn$_invoke$arity$1(original160638_160752);
var outputs160640_160754 = new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","output","com.wsscode.pathom3.connect.operation/output",801488703).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(original160638_160752));
var op160641_160755 = new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","op-name","com.wsscode.pathom3.connect.operation/op-name",-1249801049).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(original160638_160752));
(duck_repled.editor_resolvers.namespace_from_text = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(original160638_160752,new cljs.core.Keyword(null,"resolve","resolve",-1584445482),(function (a__89033__auto__,b__89034__auto__){
return promesa.protocols._bind(null,(function (___56277__auto__){
return promesa.protocols._bind((resolver160639_160753.cljs$core$IFn$_invoke$arity$2 ? resolver160639_160753.cljs$core$IFn$_invoke$arity$2(a__89033__auto__,b__89034__auto__) : resolver160639_160753.call(null,a__89033__auto__,b__89034__auto__)),(function (result__89035__auto__){
return promesa.protocols._bind(null,(function (___56267__auto__){
return promesa.protocols._promise((cljs.core.truth_(result__89035__auto__)?duck_repled.schemas.validate_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.keys(result__89035__auto__),result__89035__auto__,["Invalid schema on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(op160641_160755)," outputing ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(outputs160640_160754)].join('')):null));
}));
}));
}));
})));
duck_repled.editor_resolvers.contents_top_blocks = com.wsscode.pathom3.connect.operation.resolver.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol("duck-repled.editor-resolvers","contents-top-blocks","duck-repled.editor-resolvers/contents-top-blocks",696738496,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","output","com.wsscode.pathom3.connect.operation/output",801488703),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","top-blocks","text/top-blocks",-1746652277)], null),new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","input","com.wsscode.pathom3.connect.operation/input",-1553849497),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","contents","text/contents",-1566533716)], null)], null),(function duck_repled$editor_resolvers$contents_top_blocks(_,p__160651){
var map__160652 = p__160651;
var map__160652__$1 = cljs.core.__destructure_map(map__160652);
var contents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__160652__$1,new cljs.core.Keyword("text","contents","text/contents",-1566533716));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("text","top-blocks","text/top-blocks",-1746652277),duck_repled.editor_helpers.top_blocks(contents)], null);
}));

var original160647_160756 = duck_repled.editor_resolvers.contents_top_blocks;
var resolver160648_160757 = new cljs.core.Keyword(null,"resolve","resolve",-1584445482).cljs$core$IFn$_invoke$arity$1(original160647_160756);
var outputs160649_160758 = new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","output","com.wsscode.pathom3.connect.operation/output",801488703).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(original160647_160756));
var op160650_160759 = new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","op-name","com.wsscode.pathom3.connect.operation/op-name",-1249801049).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(original160647_160756));
(duck_repled.editor_resolvers.contents_top_blocks = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(original160647_160756,new cljs.core.Keyword(null,"resolve","resolve",-1584445482),(function (a__89033__auto__,b__89034__auto__){
return promesa.protocols._bind(null,(function (___56277__auto__){
return promesa.protocols._bind((resolver160648_160757.cljs$core$IFn$_invoke$arity$2 ? resolver160648_160757.cljs$core$IFn$_invoke$arity$2(a__89033__auto__,b__89034__auto__) : resolver160648_160757.call(null,a__89033__auto__,b__89034__auto__)),(function (result__89035__auto__){
return promesa.protocols._bind(null,(function (___56267__auto__){
return promesa.protocols._promise((cljs.core.truth_(result__89035__auto__)?duck_repled.schemas.validate_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.keys(result__89035__auto__),result__89035__auto__,["Invalid schema on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(op160650_160759)," outputing ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(outputs160649_160758)].join('')):null));
}));
}));
}));
})));
duck_repled.editor_resolvers.contents_top_block = com.wsscode.pathom3.connect.operation.resolver.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol("duck-repled.editor-resolvers","contents-top-block","duck-repled.editor-resolvers/contents-top-block",1737829525,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","input","com.wsscode.pathom3.connect.operation/input",-1553849497),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","top-blocks","text/top-blocks",-1746652277),new cljs.core.Keyword("text","range","text/range",1644551777),com.wsscode.pathom3.connect.operation._QMARK_(new cljs.core.Keyword("text","ns","text/ns",453543537))], null),new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","output","com.wsscode.pathom3.connect.operation/output",801488703),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("text","top-block","text/top-block",127527825),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","contents","text/contents",-1566533716),new cljs.core.Keyword("text","range","text/range",1644551777),new cljs.core.Keyword("text","ns","text/ns",453543537)], null)], null)], null)], null),(function duck_repled$editor_resolvers$contents_top_block(_,p__160657){
var map__160658 = p__160657;
var map__160658__$1 = cljs.core.__destructure_map(map__160658);
var top_blocks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__160658__$1,new cljs.core.Keyword("text","top-blocks","text/top-blocks",-1746652277));
var range = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__160658__$1,new cljs.core.Keyword("text","range","text/range",1644551777));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__160658__$1,new cljs.core.Keyword("text","ns","text/ns",453543537));
var temp__5753__auto__ = duck_repled.editor_helpers.top_block_for(top_blocks,cljs.core.first(range));
if(cljs.core.truth_(temp__5753__auto__)){
var vec__160659 = temp__5753__auto__;
var range__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__160659,(0),null);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__160659,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("text","top-block","text/top-block",127527825),(function (){var G__160662 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("text","contents","text/contents",-1566533716),text,new cljs.core.Keyword("text","range","text/range",1644551777),range__$1], null);
if(cljs.core.truth_(ns)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__160662,new cljs.core.Keyword("text","ns","text/ns",453543537),ns);
} else {
return G__160662;
}
})()], null);
} else {
return null;
}
}));

var original160653_160762 = duck_repled.editor_resolvers.contents_top_block;
var resolver160654_160763 = new cljs.core.Keyword(null,"resolve","resolve",-1584445482).cljs$core$IFn$_invoke$arity$1(original160653_160762);
var outputs160655_160764 = new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","output","com.wsscode.pathom3.connect.operation/output",801488703).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(original160653_160762));
var op160656_160765 = new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","op-name","com.wsscode.pathom3.connect.operation/op-name",-1249801049).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(original160653_160762));
(duck_repled.editor_resolvers.contents_top_block = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(original160653_160762,new cljs.core.Keyword(null,"resolve","resolve",-1584445482),(function (a__89033__auto__,b__89034__auto__){
return promesa.protocols._bind(null,(function (___56277__auto__){
return promesa.protocols._bind((resolver160654_160763.cljs$core$IFn$_invoke$arity$2 ? resolver160654_160763.cljs$core$IFn$_invoke$arity$2(a__89033__auto__,b__89034__auto__) : resolver160654_160763.call(null,a__89033__auto__,b__89034__auto__)),(function (result__89035__auto__){
return promesa.protocols._bind(null,(function (___56267__auto__){
return promesa.protocols._promise((cljs.core.truth_(result__89035__auto__)?duck_repled.schemas.validate_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.keys(result__89035__auto__),result__89035__auto__,["Invalid schema on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(op160656_160765)," outputing ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(outputs160655_160764)].join('')):null));
}));
}));
}));
})));
duck_repled.editor_resolvers.text_block = com.wsscode.pathom3.connect.operation.resolver.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol("duck-repled.editor-resolvers","text-block","duck-repled.editor-resolvers/text-block",-707602904,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","input","com.wsscode.pathom3.connect.operation/input",-1553849497),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","contents","text/contents",-1566533716),new cljs.core.Keyword("text","range","text/range",1644551777),com.wsscode.pathom3.connect.operation._QMARK_(new cljs.core.Keyword("text","ns","text/ns",453543537))], null),new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","output","com.wsscode.pathom3.connect.operation/output",801488703),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("text","block","text/block",660870389),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","contents","text/contents",-1566533716),new cljs.core.Keyword("text","range","text/range",1644551777),new cljs.core.Keyword("text","ns","text/ns",453543537)], null)], null)], null)], null),(function duck_repled$editor_resolvers$text_block(_,p__160667){
var map__160668 = p__160667;
var map__160668__$1 = cljs.core.__destructure_map(map__160668);
var contents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__160668__$1,new cljs.core.Keyword("text","contents","text/contents",-1566533716));
var range = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__160668__$1,new cljs.core.Keyword("text","range","text/range",1644551777));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__160668__$1,new cljs.core.Keyword("text","ns","text/ns",453543537));
var temp__5753__auto__ = duck_repled.editor_helpers.block_for(contents,cljs.core.first(range));
if(cljs.core.truth_(temp__5753__auto__)){
var vec__160669 = temp__5753__auto__;
var range__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__160669,(0),null);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__160669,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("text","block","text/block",660870389),(function (){var G__160672 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("text","contents","text/contents",-1566533716),text,new cljs.core.Keyword("text","range","text/range",1644551777),range__$1], null);
if(cljs.core.truth_(ns)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__160672,new cljs.core.Keyword("text","ns","text/ns",453543537),ns);
} else {
return G__160672;
}
})()], null);
} else {
return null;
}
}));

var original160663_160773 = duck_repled.editor_resolvers.text_block;
var resolver160664_160774 = new cljs.core.Keyword(null,"resolve","resolve",-1584445482).cljs$core$IFn$_invoke$arity$1(original160663_160773);
var outputs160665_160775 = new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","output","com.wsscode.pathom3.connect.operation/output",801488703).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(original160663_160773));
var op160666_160776 = new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","op-name","com.wsscode.pathom3.connect.operation/op-name",-1249801049).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(original160663_160773));
(duck_repled.editor_resolvers.text_block = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(original160663_160773,new cljs.core.Keyword(null,"resolve","resolve",-1584445482),(function (a__89033__auto__,b__89034__auto__){
return promesa.protocols._bind(null,(function (___56277__auto__){
return promesa.protocols._bind((resolver160664_160774.cljs$core$IFn$_invoke$arity$2 ? resolver160664_160774.cljs$core$IFn$_invoke$arity$2(a__89033__auto__,b__89034__auto__) : resolver160664_160774.call(null,a__89033__auto__,b__89034__auto__)),(function (result__89035__auto__){
return promesa.protocols._bind(null,(function (___56267__auto__){
return promesa.protocols._promise((cljs.core.truth_(result__89035__auto__)?duck_repled.schemas.validate_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.keys(result__89035__auto__),result__89035__auto__,["Invalid schema on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(op160666_160776)," outputing ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(outputs160665_160775)].join('')):null));
}));
}));
}));
})));
duck_repled.editor_resolvers.text_selection = com.wsscode.pathom3.connect.operation.resolver.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol("duck-repled.editor-resolvers","text-selection","duck-repled.editor-resolvers/text-selection",-1897880285,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","input","com.wsscode.pathom3.connect.operation/input",-1553849497),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","contents","text/contents",-1566533716),new cljs.core.Keyword("text","range","text/range",1644551777),com.wsscode.pathom3.connect.operation._QMARK_(new cljs.core.Keyword("text","ns","text/ns",453543537))], null),new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","output","com.wsscode.pathom3.connect.operation/output",801488703),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("text","selection","text/selection",972475430),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","contents","text/contents",-1566533716),new cljs.core.Keyword("text","range","text/range",1644551777),new cljs.core.Keyword("text","ns","text/ns",453543537)], null)], null)], null)], null),(function duck_repled$editor_resolvers$text_selection(_,p__160677){
var map__160678 = p__160677;
var map__160678__$1 = cljs.core.__destructure_map(map__160678);
var contents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__160678__$1,new cljs.core.Keyword("text","contents","text/contents",-1566533716));
var range = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__160678__$1,new cljs.core.Keyword("text","range","text/range",1644551777));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__160678__$1,new cljs.core.Keyword("text","ns","text/ns",453543537));
var temp__5753__auto__ = duck_repled.editor_helpers.text_in_range(contents,range);
if(cljs.core.truth_(temp__5753__auto__)){
var text = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("text","selection","text/selection",972475430),(function (){var G__160679 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("text","contents","text/contents",-1566533716),text,new cljs.core.Keyword("text","range","text/range",1644551777),range], null);
if(cljs.core.truth_(ns)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__160679,new cljs.core.Keyword("text","ns","text/ns",453543537),ns);
} else {
return G__160679;
}
})()], null);
} else {
return null;
}
}));

var original160673_160778 = duck_repled.editor_resolvers.text_selection;
var resolver160674_160779 = new cljs.core.Keyword(null,"resolve","resolve",-1584445482).cljs$core$IFn$_invoke$arity$1(original160673_160778);
var outputs160675_160780 = new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","output","com.wsscode.pathom3.connect.operation/output",801488703).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(original160673_160778));
var op160676_160781 = new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","op-name","com.wsscode.pathom3.connect.operation/op-name",-1249801049).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(original160673_160778));
(duck_repled.editor_resolvers.text_selection = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(original160673_160778,new cljs.core.Keyword(null,"resolve","resolve",-1584445482),(function (a__89033__auto__,b__89034__auto__){
return promesa.protocols._bind(null,(function (___56277__auto__){
return promesa.protocols._bind((resolver160674_160779.cljs$core$IFn$_invoke$arity$2 ? resolver160674_160779.cljs$core$IFn$_invoke$arity$2(a__89033__auto__,b__89034__auto__) : resolver160674_160779.call(null,a__89033__auto__,b__89034__auto__)),(function (result__89035__auto__){
return promesa.protocols._bind(null,(function (___56267__auto__){
return promesa.protocols._promise((cljs.core.truth_(result__89035__auto__)?duck_repled.schemas.validate_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.keys(result__89035__auto__),result__89035__auto__,["Invalid schema on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(op160676_160781)," outputing ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(outputs160675_160780)].join('')):null));
}));
}));
}));
})));
duck_repled.editor_resolvers.default_text_elements = com.wsscode.pathom3.connect.operation.resolver.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol("duck-repled.editor-resolvers","default-text-elements","duck-repled.editor-resolvers/default-text-elements",-1107609477,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","priority","com.wsscode.pathom3.connect.operation/priority",-813904543),(-10),new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","output","com.wsscode.pathom3.connect.operation/output",801488703),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","contents","text/contents",-1566533716),new cljs.core.Keyword("text","range","text/range",1644551777)], null),new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","input","com.wsscode.pathom3.connect.operation/input",-1553849497),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","contents","editor/contents",-394611860)], null)], null),(function duck_repled$editor_resolvers$default_text_elements(_,p__160686){
var map__160687 = p__160686;
var map__160687__$1 = cljs.core.__destructure_map(map__160687);
var contents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__160687__$1,new cljs.core.Keyword("editor","contents","editor/contents",-394611860));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("text","contents","text/contents",-1566533716),new cljs.core.Keyword("text","contents","text/contents",-1566533716).cljs$core$IFn$_invoke$arity$1(contents),new cljs.core.Keyword("text","range","text/range",1644551777),new cljs.core.Keyword("text","range","text/range",1644551777).cljs$core$IFn$_invoke$arity$1(contents)], null);
}));

var original160681_160782 = duck_repled.editor_resolvers.default_text_elements;
var resolver160682_160783 = new cljs.core.Keyword(null,"resolve","resolve",-1584445482).cljs$core$IFn$_invoke$arity$1(original160681_160782);
var outputs160683_160784 = new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","output","com.wsscode.pathom3.connect.operation/output",801488703).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(original160681_160782));
var op160684_160785 = new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","op-name","com.wsscode.pathom3.connect.operation/op-name",-1249801049).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(original160681_160782));
(duck_repled.editor_resolvers.default_text_elements = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(original160681_160782,new cljs.core.Keyword(null,"resolve","resolve",-1584445482),(function (a__89033__auto__,b__89034__auto__){
return promesa.protocols._bind(null,(function (___56277__auto__){
return promesa.protocols._bind((resolver160682_160783.cljs$core$IFn$_invoke$arity$2 ? resolver160682_160783.cljs$core$IFn$_invoke$arity$2(a__89033__auto__,b__89034__auto__) : resolver160682_160783.call(null,a__89033__auto__,b__89034__auto__)),(function (result__89035__auto__){
return promesa.protocols._bind(null,(function (___56267__auto__){
return promesa.protocols._promise((cljs.core.truth_(result__89035__auto__)?duck_repled.schemas.validate_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.keys(result__89035__auto__),result__89035__auto__,["Invalid schema on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(op160684_160785)," outputing ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(outputs160683_160784)].join('')):null));
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

var original160688_160792 = duck_repled.editor_resolvers.resolver_for_ns;
var resolver160689_160793 = new cljs.core.Keyword(null,"resolve","resolve",-1584445482).cljs$core$IFn$_invoke$arity$1(original160688_160792);
var outputs160690_160794 = new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","output","com.wsscode.pathom3.connect.operation/output",801488703).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(original160688_160792));
var op160691_160795 = new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","op-name","com.wsscode.pathom3.connect.operation/op-name",-1249801049).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(original160688_160792));
(duck_repled.editor_resolvers.resolver_for_ns = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(original160688_160792,new cljs.core.Keyword(null,"resolve","resolve",-1584445482),(function (a__89033__auto__,b__89034__auto__){
return promesa.protocols._bind(null,(function (___56277__auto__){
return promesa.protocols._bind((resolver160689_160793.cljs$core$IFn$_invoke$arity$2 ? resolver160689_160793.cljs$core$IFn$_invoke$arity$2(a__89033__auto__,b__89034__auto__) : resolver160689_160793.call(null,a__89033__auto__,b__89034__auto__)),(function (result__89035__auto__){
return promesa.protocols._bind(null,(function (___56267__auto__){
return promesa.protocols._promise((cljs.core.truth_(result__89035__auto__)?duck_repled.schemas.validate_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.keys(result__89035__auto__),result__89035__auto__,["Invalid schema on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(op160691_160795)," outputing ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(outputs160690_160794)].join('')):null));
}));
}));
}));
})));
duck_repled.editor_resolvers.resolve_repl_kind = com.wsscode.pathom3.connect.operation.resolver.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol("duck-repled.editor-resolvers","resolve-repl-kind","duck-repled.editor-resolvers/resolve-repl-kind",-1932390140,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","input","com.wsscode.pathom3.connect.operation/input",-1553849497),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom3.connect.operation._QMARK_(new cljs.core.Keyword("config","repl-kind","config/repl-kind",1937588875)),com.wsscode.pathom3.connect.operation._QMARK_(new cljs.core.Keyword("config","eval-as","config/eval-as",-937334597)),com.wsscode.pathom3.connect.operation._QMARK_(new cljs.core.Keyword("editor","filename","editor/filename",1561957414))], null),new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","output","com.wsscode.pathom3.connect.operation/output",801488703),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("repl","kind","repl/kind",-721172504)], null)], null),(function duck_repled$editor_resolvers$resolve_repl_kind(_,p__160696){
var map__160697 = p__160696;
var map__160697__$1 = cljs.core.__destructure_map(map__160697);
var repl_kind = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__160697__$1,new cljs.core.Keyword("config","repl-kind","config/repl-kind",1937588875));
var eval_as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__160697__$1,new cljs.core.Keyword("config","eval-as","config/eval-as",-937334597));
var filename = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__160697__$1,new cljs.core.Keyword("editor","filename","editor/filename",1561957414));
if(cljs.core.truth_((function (){var and__4221__auto__ = repl_kind;
if(cljs.core.truth_(and__4221__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"clj","clj",-660495428),repl_kind);
} else {
return and__4221__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("repl","kind","repl/kind",-721172504),repl_kind], null);
} else {
if(cljs.core.truth_((function (){var fexpr__160698 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"clj","clj",-660495428),null,new cljs.core.Keyword(null,"cljs","cljs",1492417629),null], null), null);
return (fexpr__160698.cljs$core$IFn$_invoke$arity$1 ? fexpr__160698.cljs$core$IFn$_invoke$arity$1(eval_as) : fexpr__160698.call(null,eval_as));
})())){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("repl","kind","repl/kind",-721172504),eval_as], null);
} else {
var cljs_file_QMARK_ = clojure.string.ends_with_QMARK_(filename,".cljs");
var cljc_file_QMARK_ = ((clojure.string.ends_with_QMARK_(filename,".cljc")) || (clojure.string.ends_with_QMARK_(filename,".cljx")));
var G__160703 = eval_as;
var G__160703__$1 = (((G__160703 instanceof cljs.core.Keyword))?G__160703.fqn:null);
switch (G__160703__$1) {
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

var original160692_160798 = duck_repled.editor_resolvers.resolve_repl_kind;
var resolver160693_160799 = new cljs.core.Keyword(null,"resolve","resolve",-1584445482).cljs$core$IFn$_invoke$arity$1(original160692_160798);
var outputs160694_160800 = new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","output","com.wsscode.pathom3.connect.operation/output",801488703).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(original160692_160798));
var op160695_160801 = new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","op-name","com.wsscode.pathom3.connect.operation/op-name",-1249801049).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(original160692_160798));
(duck_repled.editor_resolvers.resolve_repl_kind = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(original160692_160798,new cljs.core.Keyword(null,"resolve","resolve",-1584445482),(function (a__89033__auto__,b__89034__auto__){
return promesa.protocols._bind(null,(function (___56277__auto__){
return promesa.protocols._bind((resolver160693_160799.cljs$core$IFn$_invoke$arity$2 ? resolver160693_160799.cljs$core$IFn$_invoke$arity$2(a__89033__auto__,b__89034__auto__) : resolver160693_160799.call(null,a__89033__auto__,b__89034__auto__)),(function (result__89035__auto__){
return promesa.protocols._bind(null,(function (___56267__auto__){
return promesa.protocols._promise((cljs.core.truth_(result__89035__auto__)?duck_repled.schemas.validate_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.keys(result__89035__auto__),result__89035__auto__,["Invalid schema on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(op160695_160801)," outputing ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(outputs160694_160800)].join('')):null));
}));
}));
}));
})));
duck_repled.editor_resolvers.var_from_text = com.wsscode.pathom3.connect.operation.resolver.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol("duck-repled.editor-resolvers","var-from-text","duck-repled.editor-resolvers/var-from-text",1602030289,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","input","com.wsscode.pathom3.connect.operation/input",-1553849497),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","contents","text/contents",-1566533716),new cljs.core.Keyword("text","range","text/range",1644551777),com.wsscode.pathom3.connect.operation._QMARK_(new cljs.core.Keyword("text","ns","text/ns",453543537))], null),new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","output","com.wsscode.pathom3.connect.operation/output",801488703),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("text","current-var","text/current-var",1432933099),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","contents","text/contents",-1566533716),new cljs.core.Keyword("text","range","text/range",1644551777),new cljs.core.Keyword("text","ns","text/ns",453543537)], null)], null)], null)], null),(function duck_repled$editor_resolvers$var_from_text(_,p__160712){
var map__160715 = p__160712;
var map__160715__$1 = cljs.core.__destructure_map(map__160715);
var contents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__160715__$1,new cljs.core.Keyword("text","contents","text/contents",-1566533716));
var range = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__160715__$1,new cljs.core.Keyword("text","range","text/range",1644551777));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__160715__$1,new cljs.core.Keyword("text","ns","text/ns",453543537));
var temp__5753__auto__ = duck_repled.editor_helpers.current_var(contents,cljs.core.first(range));
if(cljs.core.truth_(temp__5753__auto__)){
var vec__160720 = temp__5753__auto__;
var range__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__160720,(0),null);
var curr_var = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__160720,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("text","current-var","text/current-var",1432933099),(function (){var G__160724 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("text","contents","text/contents",-1566533716),curr_var,new cljs.core.Keyword("text","range","text/range",1644551777),range__$1], null);
if(cljs.core.truth_(ns)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__160724,new cljs.core.Keyword("text","ns","text/ns",453543537),ns);
} else {
return G__160724;
}
})()], null);
} else {
return null;
}
}));

var original160708_160807 = duck_repled.editor_resolvers.var_from_text;
var resolver160709_160808 = new cljs.core.Keyword(null,"resolve","resolve",-1584445482).cljs$core$IFn$_invoke$arity$1(original160708_160807);
var outputs160710_160809 = new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","output","com.wsscode.pathom3.connect.operation/output",801488703).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(original160708_160807));
var op160711_160810 = new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","op-name","com.wsscode.pathom3.connect.operation/op-name",-1249801049).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(original160708_160807));
(duck_repled.editor_resolvers.var_from_text = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(original160708_160807,new cljs.core.Keyword(null,"resolve","resolve",-1584445482),(function (a__89033__auto__,b__89034__auto__){
return promesa.protocols._bind(null,(function (___56277__auto__){
return promesa.protocols._bind((resolver160709_160808.cljs$core$IFn$_invoke$arity$2 ? resolver160709_160808.cljs$core$IFn$_invoke$arity$2(a__89033__auto__,b__89034__auto__) : resolver160709_160808.call(null,a__89033__auto__,b__89034__auto__)),(function (result__89035__auto__){
return promesa.protocols._bind(null,(function (___56267__auto__){
return promesa.protocols._promise((cljs.core.truth_(result__89035__auto__)?duck_repled.schemas.validate_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.keys(result__89035__auto__),result__89035__auto__,["Invalid schema on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(op160711_160810)," outputing ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(outputs160710_160809)].join('')):null));
}));
}));
}));
})));
duck_repled.editor_resolvers.contents_from_filename = com.wsscode.pathom3.connect.operation.resolver.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol("duck-repled.editor-resolvers","contents-from-filename","duck-repled.editor-resolvers/contents-from-filename",-1676226686,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","input","com.wsscode.pathom3.connect.operation/input",-1553849497),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("file","filename","file/filename",-1425692619)], null),new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","output","com.wsscode.pathom3.connect.operation/output",801488703),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("file","contents","file/contents",-1566119931),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","contents","text/contents",-1566533716),new cljs.core.Keyword("text","range","text/range",1644551777)], null)], null)], null)], null),(function duck_repled$editor_resolvers$contents_from_filename(env,p__160731){
var map__160732 = p__160731;
var map__160732__$1 = cljs.core.__destructure_map(map__160732);
var filename = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__160732__$1,new cljs.core.Keyword("file","filename","file/filename",-1425692619));
var contents = duck_repled.editor_helpers.read_file(filename);
var range = new cljs.core.Keyword(null,"range","range",1639692286).cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom3.connect.operation.params(env),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)], null));
if(cljs.core.truth_(contents)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("file","contents","file/contents",-1566119931),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("text","range","text/range",1644551777),range,new cljs.core.Keyword("text","contents","text/contents",-1566533716),contents], null)], null);
} else {
return null;
}
}));

var original160727_160811 = duck_repled.editor_resolvers.contents_from_filename;
var resolver160728_160812 = new cljs.core.Keyword(null,"resolve","resolve",-1584445482).cljs$core$IFn$_invoke$arity$1(original160727_160811);
var outputs160729_160813 = new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","output","com.wsscode.pathom3.connect.operation/output",801488703).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(original160727_160811));
var op160730_160814 = new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","op-name","com.wsscode.pathom3.connect.operation/op-name",-1249801049).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(original160727_160811));
(duck_repled.editor_resolvers.contents_from_filename = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(original160727_160811,new cljs.core.Keyword(null,"resolve","resolve",-1584445482),(function (a__89033__auto__,b__89034__auto__){
return promesa.protocols._bind(null,(function (___56277__auto__){
return promesa.protocols._bind((resolver160728_160812.cljs$core$IFn$_invoke$arity$2 ? resolver160728_160812.cljs$core$IFn$_invoke$arity$2(a__89033__auto__,b__89034__auto__) : resolver160728_160812.call(null,a__89033__auto__,b__89034__auto__)),(function (result__89035__auto__){
return promesa.protocols._bind(null,(function (___56267__auto__){
return promesa.protocols._promise((cljs.core.truth_(result__89035__auto__)?duck_repled.schemas.validate_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.keys(result__89035__auto__),result__89035__auto__,["Invalid schema on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(op160730_160814)," outputing ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(outputs160729_160813)].join('')):null));
}));
}));
}));
})));
duck_repled.editor_resolvers.resolvers = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [duck_repled.editor_resolvers.seed_data,duck_repled.editor_resolvers.separate_data,duck_repled.editor_resolvers.resolver_for_ns,duck_repled.editor_resolvers.text_block,duck_repled.editor_resolvers.contents_top_blocks,duck_repled.editor_resolvers.contents_top_block,duck_repled.editor_resolvers.var_from_text,duck_repled.editor_resolvers.text_selection,duck_repled.editor_resolvers.namespace_from_text,duck_repled.editor_resolvers.resolve_repl_kind,duck_repled.editor_resolvers.default_text_elements,duck_repled.editor_resolvers.contents_from_filename], null);

//# sourceMappingURL=duck_repled.editor_resolvers.js.map
