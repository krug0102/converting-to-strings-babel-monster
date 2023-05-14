goog.provide('repl_tooling.processor');
/**
 * Takes a type and a message and returns a string based on the match found in error
 * dictionary
 */
repl_tooling.processor.process_message = (function repl_tooling$processor$process_message(t,m){
return p_exc.process_errors(t,m);
});
/**
 * Takes an exception cause and via. Returns a true value
 * if it's a spec error for a macro, a false value otherwise.
 */
repl_tooling.processor.macro_spec_QMARK_ = (function repl_tooling$processor$macro_spec_QMARK_(cause,via){
var and__4221__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"macro-syntax-check","macro-syntax-check",2072602373),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via))));
if(and__4221__auto__){
var and__4221__auto____$1 = cause;
if(cljs.core.truth_(and__4221__auto____$1)){
return cljs.core.re_matches(/Call to (.*) did not conform to spec./,cause);
} else {
return and__4221__auto____$1;
}
} else {
return and__4221__auto__;
}
});
/**
 * Takes an exception cause and via. Returns a true value
 * if it's an invalid signature error, a false value otherwise.
 */
repl_tooling.processor.invalid_signature_QMARK_ = (function repl_tooling$processor$invalid_signature_QMARK_(cause,via){
var and__4221__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"macro-syntax-check","macro-syntax-check",2072602373),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via))));
if(and__4221__auto__){
var and__4221__auto____$1 = cause;
if(cljs.core.truth_(and__4221__auto____$1)){
return cljs.core.re_matches(/Invalid signature (.*) should be a (.*)/,cause);
} else {
return and__4221__auto____$1;
}
} else {
return and__4221__auto__;
}
});
repl_tooling.processor.spec_ref = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"collection-map","collection-map",-1969912512),new cljs.core.Keyword(null,"num","num",1985240673),new cljs.core.Keyword(null,"future","future",1877842724),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"map-or-vector","map-or-vector",1501430565),new cljs.core.Keyword(null,"only-collection","only-collection",-508259706),new cljs.core.Keyword(null,"number","number",1570378438),new cljs.core.Keyword(null,"coll","coll",1647737163),new cljs.core.Keyword(null,"map-arg","map-arg",-2003135091),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"function","function",-2127255473),new cljs.core.Keyword(null,"lazy","lazy",-424547181),new cljs.core.Keyword(null,"number-greater-than-zero","number-greater-than-zero",969857267),new cljs.core.Keyword(null,"ratio","ratio",-926560044),new cljs.core.Keyword(null,"sequence","sequence",926807414),new cljs.core.Keyword(null,"num-non-zero","num-non-zero",-619439976),new cljs.core.Keyword(null,"wrong-path","wrong-path",925290936),new cljs.core.Keyword(null,"regex","regex",939488856),new cljs.core.Keyword(null,"collection","collection",-683361892)],["a sequence","a number","a future","a key","a map or a vector","a collection","a number","a sequence","a two-element-vector","a string","a function","a lazy sequence","a number that's greater than zero","a ratio","a sequence of vectors with only 2 elements or a map with key-value pairs","a number that's not zero","of correct type and length","a regular expression","a sequence"]);
repl_tooling.processor.length_ref = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"b-length-two","b-length-two",-1798191387),new cljs.core.Keyword(null,"b-length-zero-or-greater","b-length-zero-or-greater",-348597722),new cljs.core.Keyword(null,"b-length-greater-zero","b-length-greater-zero",-1669004503),new cljs.core.Keyword(null,"b-length-zero-to-one","b-length-zero-to-one",1440807946),new cljs.core.Keyword(null,"b-length-zero-to-three","b-length-zero-to-three",1353759887),new cljs.core.Keyword(null,"b-length-greater-two","b-length-greater-two",-1906331883),new cljs.core.Keyword(null,"b-length-one-to-three","b-length-one-to-three",497040760),new cljs.core.Keyword(null,"b-length-one-to-two","b-length-one-to-two",1717221208),new cljs.core.Keyword(null,"b-length-three","b-length-three",-779344262),new cljs.core.Keyword(null,"b-length-one","b-length-one",-1508357764),new cljs.core.Keyword(null,"b-length-two-to-three","b-length-two-to-three",1400368189),new cljs.core.Keyword(null,"b-length-greater-one","b-length-greater-one",-1745915491),new cljs.core.Keyword(null,"b-length-two-to-four","b-length-two-to-four",-1157109378)],["two arguments","zero or more arguments","one or more arguments","zero or one arguments","zero or up to three arguments","three or more arguments","one or up to three arguments","one or two arguments","three arguments","one argument","two or three arguments","two or more arguments","two or up to four arguments"]);
/**
 * Takes a vector of keywords of failed predicates. If there is
 *   only one, returns the result of looking it up in spec-ref.
 *   Otherwise returns the first result of looking up the rest of
 *   the keywords in spec-ref, as a string.
 *   Returns an empty string if no matches are found
 */
repl_tooling.processor.stringify = (function repl_tooling$processor$stringify(vector_of_keywords){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(vector_of_keywords),(1))){
var or__4223__auto__ = (function (){var G__37968 = cljs.core.first(vector_of_keywords);
return (repl_tooling.processor.spec_ref.cljs$core$IFn$_invoke$arity$1 ? repl_tooling.processor.spec_ref.cljs$core$IFn$_invoke$arity$1(G__37968) : repl_tooling.processor.spec_ref.call(null,G__37968));
})();
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return "unknown condition";
}
} else {
var or__4223__auto__ = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__37965_SHARP_){
return (!((p1__37965_SHARP_ == null)));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37962_SHARP_){
return (repl_tooling.processor.spec_ref.cljs$core$IFn$_invoke$arity$1 ? repl_tooling.processor.spec_ref.cljs$core$IFn$_invoke$arity$1(p1__37962_SHARP_) : repl_tooling.processor.spec_ref.call(null,p1__37962_SHARP_));
}),cljs.core.rest(vector_of_keywords))));
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return "unknown condition";
}
}
});
repl_tooling.processor.has_alpha_nil_QMARK_ = (function repl_tooling$processor$has_alpha_nil_QMARK_(p__37988){
var map__37991 = p__37988;
var map__37991__$1 = cljs.core.__destructure_map(map__37991);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37991__$1,new cljs.core.Keyword(null,"path","path",-188191168));
return path.contains(new cljs.core.Keyword("clojure.spec.alpha","nil","clojure.spec.alpha/nil",802715052));
});
repl_tooling.processor.BABEL_NS = ":corefns.corefns";
/**
 * Takes a list of spec problems, returns true if any of the :via or :pred
 * starts with :corefns.corefns
 */
repl_tooling.processor.babel_fn_spec_QMARK_ = (function repl_tooling$processor$babel_fn_spec_QMARK_(probs){
var p = sp.select(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sp.ALL,sp.multi_path(new cljs.core.Keyword(null,"via","via",-1904457336),new cljs.core.Keyword(null,"pred","pred",1927423397))], null),probs);
return sp.selected_any_QMARK_(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sp.ALL,sp.if_path(cljs.core.seqable_QMARK_,sp.ALL,sp.STAY),(function (p1__37997_SHARP_){
return clojure.string.starts_with_QMARK_(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__37997_SHARP_),repl_tooling.processor.BABEL_NS);
})], null),p);
});
repl_tooling.processor.macro_predicates = cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Var(function(){return cljs.core.simple_symbol_QMARK_;},new cljs.core.Symbol("cljs.core","simple-symbol?","cljs.core/simple-symbol?",-1951205629,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"simple-symbol?","simple-symbol?",1408454822,null),"cljs/core.cljs",(21),(1),(3401),(3401),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null)),"Return true if x is a symbol without a namespace",(cljs.core.truth_(cljs.core.simple_symbol_QMARK_)?cljs.core.simple_symbol_QMARK_.cljs$lang$test:null)])),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)," a name"], null),new cljs.core.Var(function(){return cljs.core.vector_QMARK_;},new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),"cljs/core.cljs",(14),(1),(2183),(2183),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null)),"Return true if x satisfies IVector",(cljs.core.truth_(cljs.core.vector_QMARK_)?cljs.core.vector_QMARK_.cljs$lang$test:null)])),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)," a vector"], null),new cljs.core.Var(function(){return cljs.core.map_QMARK_;},new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"map?","map?",-1780568534,null),"cljs/core.cljs",(11),(1),(2171),(2171),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null)),"Return true if x satisfies IMap",(cljs.core.truth_(cljs.core.map_QMARK_)?cljs.core.map_QMARK_.cljs$lang$test:null)])),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2)," a hashmap"], null),new cljs.core.Var(function(){return cljs.core.qualified_keyword_QMARK_;},new cljs.core.Symbol("cljs.core","qualified-keyword?","cljs.core/qualified-keyword?",-308091478,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"qualified-keyword?","qualified-keyword?",375456001,null),"cljs/core.cljs",(25),(1),(3413),(3413),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null)),"Return true if x is a keyword with a namespace",(cljs.core.truth_(cljs.core.qualified_keyword_QMARK_)?cljs.core.qualified_keyword_QMARK_.cljs$lang$test:null)])),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1)," a keyword"], null),new cljs.core.Var(function(){return cljs.core.sequential_QMARK_;},new cljs.core.Symbol("cljs.core","sequential?","cljs.core/sequential?",1777854658,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"sequential?","sequential?",1102351463,null),"cljs/core.cljs",(18),(1),(2159),(2159),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null)),"Returns true if coll satisfies ISequential",(cljs.core.truth_(cljs.core.sequential_QMARK_)?cljs.core.sequential_QMARK_.cljs$lang$test:null)])),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)," a vector"], null)]);
/**
 * Takes a failed predicate from a macro spec, returns a vector
 * of its name and position
 */
repl_tooling.processor.predicate_name = (function repl_tooling$processor$predicate_name(p){
if((p instanceof cljs.core.Symbol)){
var or__4223__auto__ = (function (){var G__38000 = (((typeof p !== 'undefined'))?(new cljs.core.Var((function (){
return p;
}),cljs.core.with_meta(new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true], null)),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"ns","ns",441598760),null,new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"file","file",-1269645878),null,new cljs.core.Keyword(null,"line","line",212345235),242,new cljs.core.Keyword(null,"column","column",2078222095),4,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(p)?p.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY], null))):null);
return (repl_tooling.processor.macro_predicates.cljs$core$IFn$_invoke$arity$1 ? repl_tooling.processor.macro_predicates.cljs$core$IFn$_invoke$arity$1(G__38000) : repl_tooling.processor.macro_predicates.call(null,G__38000));
})();
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10)," unknown type"], null);
}
} else {
if(cljs.core.set_QMARK_(p)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1)," one of specific keywords"], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p),"(clojure.core/fn [%] (clojure.core/not= (quote &) %))")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1)," not &"], null);
} else {
if(cljs.core.truth_((function (){var and__4221__auto__ = cljs.core.seq_QMARK_(p);
if(and__4221__auto__){
return cljs.core.re_find(/clojure.core\/sequential\?/,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.flatten(p)));
} else {
return and__4221__auto__;
}
})())){
var G__38013 = new cljs.core.Var(function(){return cljs.core.sequential_QMARK_;},new cljs.core.Symbol("cljs.core","sequential?","cljs.core/sequential?",1777854658,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"sequential?","sequential?",1102351463,null),"cljs/core.cljs",(18),(1),(2159),(2159),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null)),"Returns true if coll satisfies ISequential",(cljs.core.truth_(cljs.core.sequential_QMARK_)?cljs.core.sequential_QMARK_.cljs$lang$test:null)]));
return (repl_tooling.processor.macro_predicates.cljs$core$IFn$_invoke$arity$1 ? repl_tooling.processor.macro_predicates.cljs$core$IFn$_invoke$arity$1(G__38013) : repl_tooling.processor.macro_predicates.call(null,G__38013));
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),[" unknown type ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p)].join('')], null);

}
}
}
}
});
/**
 * Takes a vector of hashmaps of failed predicates and returns a string
 * that describes them for beginners
 */
repl_tooling.processor.print_failed_predicates = (function repl_tooling$processor$print_failed_predicates(probs){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" or",cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__38023_SHARP_){
return (cljs.core.first(p1__38023_SHARP_) >= (0));
}),cljs.core.sort.cljs$core$IFn$_invoke$arity$2((function (p1__38021_SHARP_,p2__38022_SHARP_){
return (cljs.core.first(p1__38021_SHARP_) < cljs.core.first(p2__38022_SHARP_));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__38020_SHARP_){
return repl_tooling.processor.predicate_name(p1__38020_SHARP_);
}),cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__38019_SHARP_){
return (new cljs.core.Keyword(null,"reason","reason",-2070751759).cljs$core$IFn$_invoke$arity$1(p1__38019_SHARP_) == null);
}),probs)))))))));
});
/**
 * Takes the 'problems' part of a spect for a macro and returns true
 * if all problems refer to the parameters and false otherwise
 */
repl_tooling.processor.invalid_macro_params_QMARK_ = (function repl_tooling$processor$invalid_macro_params_QMARK_(problems){
var via_lasts = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.last,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"via","via",-1904457336),problems))));
return (((!(cljs.core.empty_QMARK_(via_lasts)))) && (cljs.core.every_QMARK_((function (p1__38037_SHARP_){
var or__4223__auto__ = cljs.core.re_find(/param-list/,p1__38037_SHARP_);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.re_find(/param+body/,p1__38037_SHARP_);
}
}),via_lasts)));
});
/**
 * Takes the cause and symbol of an invalid signature macroexpansion error and
 *  returns the description of the problem as a string
 */
repl_tooling.processor.invalid_sig_message = (function repl_tooling$processor$invalid_sig_message(cause,s){
var vec__38064 = cljs.core.re_matches(/Invalid signature \"(.*)\" should be a (.*)/,cause);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38064,(0),null);
var what = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38064,(1),null);
var should_be = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38064,(2),null);
return ["Syntax problems in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),": instead of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(what)," you need a ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(should_be),"."].join('');
});
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["babel.processor loaded"], 0));

//# sourceMappingURL=repl_tooling.processor.js.map
