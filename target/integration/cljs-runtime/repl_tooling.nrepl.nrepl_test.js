goog.provide('repl_tooling.nrepl.nrepl_test');
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"repl_tooling.nrepl.nrepl_test","repl_tooling.nrepl.nrepl_test",-1443749589),new cljs.core.Keyword(null,"bencode","bencode",1957899313)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"bencode",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["encode numbers"], 0));

try{try{return cljs.test.do_report((function (){var lft__35783__auto__ = repl_tooling.nrepl.bencode.encode((210));
var rgt__35784__auto__ = "i210e";
var qleft__35785__auto__ = cljs.core.list(new cljs.core.Symbol("bencode","encode","bencode/encode",104618649,null),(210));
var qright__35786__auto__ = "i210e";
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})());
}catch (e102452){var t__35810__auto__ = e102452;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),"i210e",new cljs.core.Keyword(null,"actual","actual",107306363),check.core.normalize_error(t__35810__auto__),new cljs.core.Keyword(null,"message","message",-406056002),["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.list(new cljs.core.Symbol("bencode","encode","bencode/encode",104618649,null),(210)))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"=>","=>",-813269641,null))," ","i210e"].join('')], null));
}}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}}),(function (){
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["encode strings"], 0));

try{try{cljs.test.do_report((function (){var lft__35783__auto__ = repl_tooling.nrepl.bencode.encode("foo");
var rgt__35784__auto__ = "3:foo";
var qleft__35785__auto__ = cljs.core.list(new cljs.core.Symbol("bencode","encode","bencode/encode",104618649,null),"foo");
var qright__35786__auto__ = "3:foo";
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})());
}catch (e102453){var t__35810__auto___106858 = e102453;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),"3:foo",new cljs.core.Keyword(null,"actual","actual",107306363),check.core.normalize_error(t__35810__auto___106858),new cljs.core.Keyword(null,"message","message",-406056002),["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.list(new cljs.core.Symbol("bencode","encode","bencode/encode",104618649,null),"foo"))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"=>","=>",-813269641,null))," ","3:foo"].join('')], null));
}
try{cljs.test.do_report((function (){var lft__35783__auto__ = repl_tooling.nrepl.bencode.encode("foo\n");
var rgt__35784__auto__ = "4:foo\n";
var qleft__35785__auto__ = cljs.core.list(new cljs.core.Symbol("bencode","encode","bencode/encode",104618649,null),"foo\n");
var qright__35786__auto__ = "4:foo\n";
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})());
}catch (e102456){var t__35810__auto___106887 = e102456;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),"4:foo\n",new cljs.core.Keyword(null,"actual","actual",107306363),check.core.normalize_error(t__35810__auto___106887),new cljs.core.Keyword(null,"message","message",-406056002),["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.list(new cljs.core.Symbol("bencode","encode","bencode/encode",104618649,null),"foo\n"))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"=>","=>",-813269641,null))," ","4:foo\n"].join('')], null));
}
try{cljs.test.do_report((function (){var lft__35783__auto__ = repl_tooling.nrepl.bencode.encode("\u00E1");
var rgt__35784__auto__ = "2:\u00E1";
var qleft__35785__auto__ = cljs.core.list(new cljs.core.Symbol("bencode","encode","bencode/encode",104618649,null),"\u00E1");
var qright__35786__auto__ = "2:\u00E1";
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})());
}catch (e102457){var t__35810__auto___106933 = e102457;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),"2:\u00E1",new cljs.core.Keyword(null,"actual","actual",107306363),check.core.normalize_error(t__35810__auto___106933),new cljs.core.Keyword(null,"message","message",-406056002),["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.list(new cljs.core.Symbol("bencode","encode","bencode/encode",104618649,null),"\u00E1"))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"=>","=>",-813269641,null))," ","2:\u00E1"].join('')], null));
}
try{return cljs.test.do_report((function (){var lft__35783__auto__ = repl_tooling.nrepl.bencode.encode("\u0417\u0434\u0440\u0430\u0432\u0435\u0439, \u0421\u0432\u044F\u0442!");
var rgt__35784__auto__ = "25:\u0417\u0434\u0440\u0430\u0432\u0435\u0439, \u0421\u0432\u044F\u0442!";
var qleft__35785__auto__ = cljs.core.list(new cljs.core.Symbol("bencode","encode","bencode/encode",104618649,null),"\u0417\u0434\u0440\u0430\u0432\u0435\u0439, \u0421\u0432\u044F\u0442!");
var qright__35786__auto__ = "25:\u0417\u0434\u0440\u0430\u0432\u0435\u0439, \u0421\u0432\u044F\u0442!";
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})());
}catch (e102460){var t__35810__auto__ = e102460;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),"25:\u0417\u0434\u0440\u0430\u0432\u0435\u0439, \u0421\u0432\u044F\u0442!",new cljs.core.Keyword(null,"actual","actual",107306363),check.core.normalize_error(t__35810__auto__),new cljs.core.Keyword(null,"message","message",-406056002),["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.list(new cljs.core.Symbol("bencode","encode","bencode/encode",104618649,null),"\u0417\u0434\u0440\u0430\u0432\u0435\u0439, \u0421\u0432\u044F\u0442!"))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"=>","=>",-813269641,null))," ","25:\u0417\u0434\u0440\u0430\u0432\u0435\u0439, \u0421\u0432\u044F\u0442!"].join('')], null));
}}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}}),(function (){
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["encode keywords"], 0));

try{try{cljs.test.do_report((function (){var lft__35783__auto__ = repl_tooling.nrepl.bencode.encode(new cljs.core.Keyword(null,"foo","foo",1268894036));
var rgt__35784__auto__ = "3:foo";
var qleft__35785__auto__ = cljs.core.list(new cljs.core.Symbol("bencode","encode","bencode/encode",104618649,null),new cljs.core.Keyword(null,"foo","foo",1268894036));
var qright__35786__auto__ = "3:foo";
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})());
}catch (e102463){var t__35810__auto___107204 = e102463;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),"3:foo",new cljs.core.Keyword(null,"actual","actual",107306363),check.core.normalize_error(t__35810__auto___107204),new cljs.core.Keyword(null,"message","message",-406056002),["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.list(new cljs.core.Symbol("bencode","encode","bencode/encode",104618649,null),new cljs.core.Keyword(null,"foo","foo",1268894036)))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"=>","=>",-813269641,null))," ","3:foo"].join('')], null));
}
try{return cljs.test.do_report((function (){var lft__35783__auto__ = repl_tooling.nrepl.bencode.encode(new cljs.core.Keyword("foo","bar","foo/bar",-1386151538));
var rgt__35784__auto__ = "7:foo/bar";
var qleft__35785__auto__ = cljs.core.list(new cljs.core.Symbol("bencode","encode","bencode/encode",104618649,null),new cljs.core.Keyword("foo","bar","foo/bar",-1386151538));
var qright__35786__auto__ = "7:foo/bar";
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})());
}catch (e102464){var t__35810__auto__ = e102464;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),"7:foo/bar",new cljs.core.Keyword(null,"actual","actual",107306363),check.core.normalize_error(t__35810__auto__),new cljs.core.Keyword(null,"message","message",-406056002),["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.list(new cljs.core.Symbol("bencode","encode","bencode/encode",104618649,null),new cljs.core.Keyword("foo","bar","foo/bar",-1386151538)))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"=>","=>",-813269641,null))," ","7:foo/bar"].join('')], null));
}}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}}),(function (){
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["encode symbols"], 0));

try{try{cljs.test.do_report((function (){var lft__35783__auto__ = repl_tooling.nrepl.bencode.encode(new cljs.core.Symbol(null,"foo","foo",-1385541733,null));
var rgt__35784__auto__ = "3:foo";
var qleft__35785__auto__ = cljs.core.list(new cljs.core.Symbol("bencode","encode","bencode/encode",104618649,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"foo","foo",-1385541733,null)));
var qright__35786__auto__ = "3:foo";
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})());
}catch (e102465){var t__35810__auto___107211 = e102465;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),"3:foo",new cljs.core.Keyword(null,"actual","actual",107306363),check.core.normalize_error(t__35810__auto___107211),new cljs.core.Keyword(null,"message","message",-406056002),["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.list(new cljs.core.Symbol("bencode","encode","bencode/encode",104618649,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"foo","foo",-1385541733,null))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"=>","=>",-813269641,null))," ","3:foo"].join('')], null));
}
try{return cljs.test.do_report((function (){var lft__35783__auto__ = repl_tooling.nrepl.bencode.encode(new cljs.core.Symbol("foo","bar","foo/bar",254379989,null));
var rgt__35784__auto__ = "7:foo/bar";
var qleft__35785__auto__ = cljs.core.list(new cljs.core.Symbol("bencode","encode","bencode/encode",104618649,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("foo","bar","foo/bar",254379989,null)));
var qright__35786__auto__ = "7:foo/bar";
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})());
}catch (e102466){var t__35810__auto__ = e102466;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),"7:foo/bar",new cljs.core.Keyword(null,"actual","actual",107306363),check.core.normalize_error(t__35810__auto__),new cljs.core.Keyword(null,"message","message",-406056002),["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.list(new cljs.core.Symbol("bencode","encode","bencode/encode",104618649,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("foo","bar","foo/bar",254379989,null))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"=>","=>",-813269641,null))," ","7:foo/bar"].join('')], null));
}}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}}),(function (){
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["encode lists"], 0));

try{try{cljs.test.do_report((function (){var lft__35783__auto__ = repl_tooling.nrepl.bencode.encode(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["a","b"], null));
var rgt__35784__auto__ = "l1:a1:be";
var qleft__35785__auto__ = cljs.core.list(new cljs.core.Symbol("bencode","encode","bencode/encode",104618649,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["a","b"], null));
var qright__35786__auto__ = "l1:a1:be";
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})());
}catch (e102470){var t__35810__auto___107217 = e102470;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),"l1:a1:be",new cljs.core.Keyword(null,"actual","actual",107306363),check.core.normalize_error(t__35810__auto___107217),new cljs.core.Keyword(null,"message","message",-406056002),["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.list(new cljs.core.Symbol("bencode","encode","bencode/encode",104618649,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["a","b"], null)))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"=>","=>",-813269641,null))," ","l1:a1:be"].join('')], null));
}
try{return cljs.test.do_report((function (){var lft__35783__auto__ = repl_tooling.nrepl.bencode.encode(cljs.core.list("a","b"));
var rgt__35784__auto__ = "l1:a1:be";
var qleft__35785__auto__ = cljs.core.list(new cljs.core.Symbol("bencode","encode","bencode/encode",104618649,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list("a","b")));
var qright__35786__auto__ = "l1:a1:be";
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})());
}catch (e102472){var t__35810__auto__ = e102472;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),"l1:a1:be",new cljs.core.Keyword(null,"actual","actual",107306363),check.core.normalize_error(t__35810__auto__),new cljs.core.Keyword(null,"message","message",-406056002),["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.list(new cljs.core.Symbol("bencode","encode","bencode/encode",104618649,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list("a","b"))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"=>","=>",-813269641,null))," ","l1:a1:be"].join('')], null));
}}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}}),(function (){
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["encode maps"], 0));

try{try{return cljs.test.do_report((function (){var lft__35783__auto__ = repl_tooling.nrepl.bencode.encode(new cljs.core.PersistentArrayMap(null, 1, ["a","b"], null));
var rgt__35784__auto__ = "d1:a1:be";
var qleft__35785__auto__ = cljs.core.list(new cljs.core.Symbol("bencode","encode","bencode/encode",104618649,null),new cljs.core.PersistentArrayMap(null, 1, ["a","b"], null));
var qright__35786__auto__ = "d1:a1:be";
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})());
}catch (e102476){var t__35810__auto__ = e102476;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),"d1:a1:be",new cljs.core.Keyword(null,"actual","actual",107306363),check.core.normalize_error(t__35810__auto__),new cljs.core.Keyword(null,"message","message",-406056002),["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.list(new cljs.core.Symbol("bencode","encode","bencode/encode",104618649,null),new cljs.core.PersistentArrayMap(null, 1, ["a","b"], null)))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"=>","=>",-813269641,null))," ","d1:a1:be"].join('')], null));
}}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}})], 0)),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));

repl_tooling.nrepl.nrepl_test.bencode = (function repl_tooling$nrepl$nrepl_test$bencode(){
return cljs.test.test_var(repl_tooling.nrepl.nrepl_test.bencode.cljs$lang$var);
});
repl_tooling.nrepl.nrepl_test.bencode.cljs$lang$test = (function (){
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["encode numbers"], 0));

try{try{cljs.test.do_report((function (){var lft__35783__auto__ = repl_tooling.nrepl.bencode.encode((210));
var rgt__35784__auto__ = "i210e";
var qleft__35785__auto__ = cljs.core.list(new cljs.core.Symbol("bencode","encode","bencode/encode",104618649,null),(210));
var qright__35786__auto__ = "i210e";
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})());
}catch (e102480){var t__35810__auto___107220 = e102480;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),"i210e",new cljs.core.Keyword(null,"actual","actual",107306363),check.core.normalize_error(t__35810__auto___107220),new cljs.core.Keyword(null,"message","message",-406056002),["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.list(new cljs.core.Symbol("bencode","encode","bencode/encode",104618649,null),(210)))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"=>","=>",-813269641,null))," ","i210e"].join('')], null));
}}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["encode strings"], 0));

try{try{cljs.test.do_report((function (){var lft__35783__auto__ = repl_tooling.nrepl.bencode.encode("foo");
var rgt__35784__auto__ = "3:foo";
var qleft__35785__auto__ = cljs.core.list(new cljs.core.Symbol("bencode","encode","bencode/encode",104618649,null),"foo");
var qright__35786__auto__ = "3:foo";
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})());
}catch (e102482){var t__35810__auto___107223 = e102482;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),"3:foo",new cljs.core.Keyword(null,"actual","actual",107306363),check.core.normalize_error(t__35810__auto___107223),new cljs.core.Keyword(null,"message","message",-406056002),["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.list(new cljs.core.Symbol("bencode","encode","bencode/encode",104618649,null),"foo"))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"=>","=>",-813269641,null))," ","3:foo"].join('')], null));
}
try{cljs.test.do_report((function (){var lft__35783__auto__ = repl_tooling.nrepl.bencode.encode("foo\n");
var rgt__35784__auto__ = "4:foo\n";
var qleft__35785__auto__ = cljs.core.list(new cljs.core.Symbol("bencode","encode","bencode/encode",104618649,null),"foo\n");
var qright__35786__auto__ = "4:foo\n";
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})());
}catch (e102488){var t__35810__auto___107226 = e102488;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),"4:foo\n",new cljs.core.Keyword(null,"actual","actual",107306363),check.core.normalize_error(t__35810__auto___107226),new cljs.core.Keyword(null,"message","message",-406056002),["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.list(new cljs.core.Symbol("bencode","encode","bencode/encode",104618649,null),"foo\n"))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"=>","=>",-813269641,null))," ","4:foo\n"].join('')], null));
}
try{cljs.test.do_report((function (){var lft__35783__auto__ = repl_tooling.nrepl.bencode.encode("\u00E1");
var rgt__35784__auto__ = "2:\u00E1";
var qleft__35785__auto__ = cljs.core.list(new cljs.core.Symbol("bencode","encode","bencode/encode",104618649,null),"\u00E1");
var qright__35786__auto__ = "2:\u00E1";
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})());
}catch (e102494){var t__35810__auto___107259 = e102494;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),"2:\u00E1",new cljs.core.Keyword(null,"actual","actual",107306363),check.core.normalize_error(t__35810__auto___107259),new cljs.core.Keyword(null,"message","message",-406056002),["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.list(new cljs.core.Symbol("bencode","encode","bencode/encode",104618649,null),"\u00E1"))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"=>","=>",-813269641,null))," ","2:\u00E1"].join('')], null));
}
try{cljs.test.do_report((function (){var lft__35783__auto__ = repl_tooling.nrepl.bencode.encode("\u0417\u0434\u0440\u0430\u0432\u0435\u0439, \u0421\u0432\u044F\u0442!");
var rgt__35784__auto__ = "25:\u0417\u0434\u0440\u0430\u0432\u0435\u0439, \u0421\u0432\u044F\u0442!";
var qleft__35785__auto__ = cljs.core.list(new cljs.core.Symbol("bencode","encode","bencode/encode",104618649,null),"\u0417\u0434\u0440\u0430\u0432\u0435\u0439, \u0421\u0432\u044F\u0442!");
var qright__35786__auto__ = "25:\u0417\u0434\u0440\u0430\u0432\u0435\u0439, \u0421\u0432\u044F\u0442!";
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})());
}catch (e102495){var t__35810__auto___107263 = e102495;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),"25:\u0417\u0434\u0440\u0430\u0432\u0435\u0439, \u0421\u0432\u044F\u0442!",new cljs.core.Keyword(null,"actual","actual",107306363),check.core.normalize_error(t__35810__auto___107263),new cljs.core.Keyword(null,"message","message",-406056002),["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.list(new cljs.core.Symbol("bencode","encode","bencode/encode",104618649,null),"\u0417\u0434\u0440\u0430\u0432\u0435\u0439, \u0421\u0432\u044F\u0442!"))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"=>","=>",-813269641,null))," ","25:\u0417\u0434\u0440\u0430\u0432\u0435\u0439, \u0421\u0432\u044F\u0442!"].join('')], null));
}}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["encode keywords"], 0));

try{try{cljs.test.do_report((function (){var lft__35783__auto__ = repl_tooling.nrepl.bencode.encode(new cljs.core.Keyword(null,"foo","foo",1268894036));
var rgt__35784__auto__ = "3:foo";
var qleft__35785__auto__ = cljs.core.list(new cljs.core.Symbol("bencode","encode","bencode/encode",104618649,null),new cljs.core.Keyword(null,"foo","foo",1268894036));
var qright__35786__auto__ = "3:foo";
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})());
}catch (e102496){var t__35810__auto___107265 = e102496;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),"3:foo",new cljs.core.Keyword(null,"actual","actual",107306363),check.core.normalize_error(t__35810__auto___107265),new cljs.core.Keyword(null,"message","message",-406056002),["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.list(new cljs.core.Symbol("bencode","encode","bencode/encode",104618649,null),new cljs.core.Keyword(null,"foo","foo",1268894036)))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"=>","=>",-813269641,null))," ","3:foo"].join('')], null));
}
try{cljs.test.do_report((function (){var lft__35783__auto__ = repl_tooling.nrepl.bencode.encode(new cljs.core.Keyword("foo","bar","foo/bar",-1386151538));
var rgt__35784__auto__ = "7:foo/bar";
var qleft__35785__auto__ = cljs.core.list(new cljs.core.Symbol("bencode","encode","bencode/encode",104618649,null),new cljs.core.Keyword("foo","bar","foo/bar",-1386151538));
var qright__35786__auto__ = "7:foo/bar";
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})());
}catch (e102497){var t__35810__auto___107266 = e102497;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),"7:foo/bar",new cljs.core.Keyword(null,"actual","actual",107306363),check.core.normalize_error(t__35810__auto___107266),new cljs.core.Keyword(null,"message","message",-406056002),["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.list(new cljs.core.Symbol("bencode","encode","bencode/encode",104618649,null),new cljs.core.Keyword("foo","bar","foo/bar",-1386151538)))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"=>","=>",-813269641,null))," ","7:foo/bar"].join('')], null));
}}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["encode symbols"], 0));

try{try{cljs.test.do_report((function (){var lft__35783__auto__ = repl_tooling.nrepl.bencode.encode(new cljs.core.Symbol(null,"foo","foo",-1385541733,null));
var rgt__35784__auto__ = "3:foo";
var qleft__35785__auto__ = cljs.core.list(new cljs.core.Symbol("bencode","encode","bencode/encode",104618649,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"foo","foo",-1385541733,null)));
var qright__35786__auto__ = "3:foo";
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})());
}catch (e102498){var t__35810__auto___107270 = e102498;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),"3:foo",new cljs.core.Keyword(null,"actual","actual",107306363),check.core.normalize_error(t__35810__auto___107270),new cljs.core.Keyword(null,"message","message",-406056002),["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.list(new cljs.core.Symbol("bencode","encode","bencode/encode",104618649,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"foo","foo",-1385541733,null))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"=>","=>",-813269641,null))," ","3:foo"].join('')], null));
}
try{cljs.test.do_report((function (){var lft__35783__auto__ = repl_tooling.nrepl.bencode.encode(new cljs.core.Symbol("foo","bar","foo/bar",254379989,null));
var rgt__35784__auto__ = "7:foo/bar";
var qleft__35785__auto__ = cljs.core.list(new cljs.core.Symbol("bencode","encode","bencode/encode",104618649,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("foo","bar","foo/bar",254379989,null)));
var qright__35786__auto__ = "7:foo/bar";
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})());
}catch (e102499){var t__35810__auto___107273 = e102499;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),"7:foo/bar",new cljs.core.Keyword(null,"actual","actual",107306363),check.core.normalize_error(t__35810__auto___107273),new cljs.core.Keyword(null,"message","message",-406056002),["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.list(new cljs.core.Symbol("bencode","encode","bencode/encode",104618649,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("foo","bar","foo/bar",254379989,null))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"=>","=>",-813269641,null))," ","7:foo/bar"].join('')], null));
}}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["encode lists"], 0));

try{try{cljs.test.do_report((function (){var lft__35783__auto__ = repl_tooling.nrepl.bencode.encode(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["a","b"], null));
var rgt__35784__auto__ = "l1:a1:be";
var qleft__35785__auto__ = cljs.core.list(new cljs.core.Symbol("bencode","encode","bencode/encode",104618649,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["a","b"], null));
var qright__35786__auto__ = "l1:a1:be";
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})());
}catch (e102502){var t__35810__auto___107277 = e102502;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),"l1:a1:be",new cljs.core.Keyword(null,"actual","actual",107306363),check.core.normalize_error(t__35810__auto___107277),new cljs.core.Keyword(null,"message","message",-406056002),["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.list(new cljs.core.Symbol("bencode","encode","bencode/encode",104618649,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["a","b"], null)))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"=>","=>",-813269641,null))," ","l1:a1:be"].join('')], null));
}
try{cljs.test.do_report((function (){var lft__35783__auto__ = repl_tooling.nrepl.bencode.encode(cljs.core.list("a","b"));
var rgt__35784__auto__ = "l1:a1:be";
var qleft__35785__auto__ = cljs.core.list(new cljs.core.Symbol("bencode","encode","bencode/encode",104618649,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list("a","b")));
var qright__35786__auto__ = "l1:a1:be";
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})());
}catch (e102503){var t__35810__auto___107280 = e102503;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),"l1:a1:be",new cljs.core.Keyword(null,"actual","actual",107306363),check.core.normalize_error(t__35810__auto___107280),new cljs.core.Keyword(null,"message","message",-406056002),["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.list(new cljs.core.Symbol("bencode","encode","bencode/encode",104618649,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list("a","b"))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"=>","=>",-813269641,null))," ","l1:a1:be"].join('')], null));
}}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["encode maps"], 0));

try{try{return cljs.test.do_report((function (){var lft__35783__auto__ = repl_tooling.nrepl.bencode.encode(new cljs.core.PersistentArrayMap(null, 1, ["a","b"], null));
var rgt__35784__auto__ = "d1:a1:be";
var qleft__35785__auto__ = cljs.core.list(new cljs.core.Symbol("bencode","encode","bencode/encode",104618649,null),new cljs.core.PersistentArrayMap(null, 1, ["a","b"], null));
var qright__35786__auto__ = "d1:a1:be";
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})());
}catch (e102504){var t__35810__auto__ = e102504;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),"d1:a1:be",new cljs.core.Keyword(null,"actual","actual",107306363),check.core.normalize_error(t__35810__auto__),new cljs.core.Keyword(null,"message","message",-406056002),["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.list(new cljs.core.Symbol("bencode","encode","bencode/encode",104618649,null),new cljs.core.PersistentArrayMap(null, 1, ["a","b"], null)))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"=>","=>",-813269641,null))," ","d1:a1:be"].join('')], null));
}}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}});

(repl_tooling.nrepl.nrepl_test.bencode.cljs$lang$var = new cljs.core.Var(function(){return repl_tooling.nrepl.nrepl_test.bencode;},new cljs.core.Symbol("repl-tooling.nrepl.nrepl-test","bencode","repl-tooling.nrepl.nrepl-test/bencode",-2006448539,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"repl-tooling.nrepl.nrepl-test","repl-tooling.nrepl.nrepl-test",-1432404227,null),new cljs.core.Symbol(null,"bencode","bencode",-696536456,null),"repl_tooling/nrepl/nrepl_test.cljs",23,1,11,11,cljs.core.List.EMPTY,null,(cljs.core.truth_(repl_tooling.nrepl.nrepl_test.bencode)?repl_tooling.nrepl.nrepl_test.bencode.cljs$lang$test:null)])));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"repl_tooling.nrepl.nrepl_test","repl_tooling.nrepl.nrepl_test",-1443749589),new cljs.core.Keyword(null,"decode","decode",-1306165281)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"decode",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){
var decode_BANG_ = repl_tooling.nrepl.bencode.decoder();
try{cljs.test.do_report((function (){var lft__35783__auto__ = decode_BANG_("");
var rgt__35784__auto__ = cljs.core.PersistentVector.EMPTY;
var qleft__35785__auto__ = cljs.core.list(new cljs.core.Symbol(null,"decode!","decode!",489055331,null),"");
var qright__35786__auto__ = cljs.core.PersistentVector.EMPTY;
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})());
}catch (e102508){var t__35810__auto___107287 = e102508;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"actual","actual",107306363),check.core.normalize_error(t__35810__auto___107287),new cljs.core.Keyword(null,"message","message",-406056002),["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.list(new cljs.core.Symbol(null,"decode!","decode!",489055331,null),""))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"=>","=>",-813269641,null))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY)].join('')], null));
}
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["decode numbers"], 0));

try{try{cljs.test.do_report((function (){var lft__35783__auto__ = decode_BANG_("i210e");
var rgt__35784__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(210)], null);
var qleft__35785__auto__ = cljs.core.list(new cljs.core.Symbol(null,"decode!","decode!",489055331,null),"i210e");
var qright__35786__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(210)], null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})());
}catch (e102512){var t__35810__auto___107290 = e102512;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(210)], null),new cljs.core.Keyword(null,"actual","actual",107306363),check.core.normalize_error(t__35810__auto___107290),new cljs.core.Keyword(null,"message","message",-406056002),["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.list(new cljs.core.Symbol(null,"decode!","decode!",489055331,null),"i210e"))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"=>","=>",-813269641,null))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(210)], null))].join('')], null));
}
try{cljs.test.do_report((function (){var lft__35783__auto__ = decode_BANG_("i-210e");
var rgt__35784__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-210)], null);
var qleft__35785__auto__ = cljs.core.list(new cljs.core.Symbol(null,"decode!","decode!",489055331,null),"i-210e");
var qright__35786__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-210)], null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})());
}catch (e102513){var t__35810__auto___107294 = e102513;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-210)], null),new cljs.core.Keyword(null,"actual","actual",107306363),check.core.normalize_error(t__35810__auto___107294),new cljs.core.Keyword(null,"message","message",-406056002),["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.list(new cljs.core.Symbol(null,"decode!","decode!",489055331,null),"i-210e"))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"=>","=>",-813269641,null))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-210)], null))].join('')], null));
}
try{cljs.test.do_report((function (){var lft__35783__auto__ = decode_BANG_("i21ei20e");
var rgt__35784__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(21),(20)], null);
var qleft__35785__auto__ = cljs.core.list(new cljs.core.Symbol(null,"decode!","decode!",489055331,null),"i21ei20e");
var qright__35786__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(21),(20)], null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})());
}catch (e102517){var t__35810__auto___107298 = e102517;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(21),(20)], null),new cljs.core.Keyword(null,"actual","actual",107306363),check.core.normalize_error(t__35810__auto___107298),new cljs.core.Keyword(null,"message","message",-406056002),["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.list(new cljs.core.Symbol(null,"decode!","decode!",489055331,null),"i21ei20e"))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"=>","=>",-813269641,null))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(21),(20)], null))].join('')], null));
}}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["decode partially"], 0));

try{try{cljs.test.do_report((function (){var lft__35783__auto__ = decode_BANG_("i2");
var rgt__35784__auto__ = cljs.core.PersistentVector.EMPTY;
var qleft__35785__auto__ = cljs.core.list(new cljs.core.Symbol(null,"decode!","decode!",489055331,null),"i2");
var qright__35786__auto__ = cljs.core.PersistentVector.EMPTY;
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})());
}catch (e102522){var t__35810__auto___107301 = e102522;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"actual","actual",107306363),check.core.normalize_error(t__35810__auto___107301),new cljs.core.Keyword(null,"message","message",-406056002),["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.list(new cljs.core.Symbol(null,"decode!","decode!",489055331,null),"i2"))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"=>","=>",-813269641,null))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY)].join('')], null));
}
try{cljs.test.do_report((function (){var lft__35783__auto__ = decode_BANG_("1");
var rgt__35784__auto__ = cljs.core.PersistentVector.EMPTY;
var qleft__35785__auto__ = cljs.core.list(new cljs.core.Symbol(null,"decode!","decode!",489055331,null),"1");
var qright__35786__auto__ = cljs.core.PersistentVector.EMPTY;
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})());
}catch (e102524){var t__35810__auto___107304 = e102524;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"actual","actual",107306363),check.core.normalize_error(t__35810__auto___107304),new cljs.core.Keyword(null,"message","message",-406056002),["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.list(new cljs.core.Symbol(null,"decode!","decode!",489055331,null),"1"))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"=>","=>",-813269641,null))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY)].join('')], null));
}
try{cljs.test.do_report((function (){var lft__35783__auto__ = decode_BANG_("0ei20e");
var rgt__35784__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(210),(20)], null);
var qleft__35785__auto__ = cljs.core.list(new cljs.core.Symbol(null,"decode!","decode!",489055331,null),"0ei20e");
var qright__35786__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(210),(20)], null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})());
}catch (e102527){var t__35810__auto___107306 = e102527;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(210),(20)], null),new cljs.core.Keyword(null,"actual","actual",107306363),check.core.normalize_error(t__35810__auto___107306),new cljs.core.Keyword(null,"message","message",-406056002),["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.list(new cljs.core.Symbol(null,"decode!","decode!",489055331,null),"0ei20e"))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"=>","=>",-813269641,null))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(210),(20)], null))].join('')], null));
}}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["decode strings"], 0));

try{try{cljs.test.do_report((function (){var lft__35783__auto__ = decode_BANG_("0:");
var rgt__35784__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null);
var qleft__35785__auto__ = cljs.core.list(new cljs.core.Symbol(null,"decode!","decode!",489055331,null),"0:");
var qright__35786__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})());
}catch (e102532){var t__35810__auto___107311 = e102532;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null),new cljs.core.Keyword(null,"actual","actual",107306363),check.core.normalize_error(t__35810__auto___107311),new cljs.core.Keyword(null,"message","message",-406056002),["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.list(new cljs.core.Symbol(null,"decode!","decode!",489055331,null),"0:"))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"=>","=>",-813269641,null))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null))].join('')], null));
}
try{cljs.test.do_report((function (){var lft__35783__auto__ = decode_BANG_("3:foo");
var rgt__35784__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["foo"], null);
var qleft__35785__auto__ = cljs.core.list(new cljs.core.Symbol(null,"decode!","decode!",489055331,null),"3:foo");
var qright__35786__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["foo"], null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})());
}catch (e102535){var t__35810__auto___107312 = e102535;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["foo"], null),new cljs.core.Keyword(null,"actual","actual",107306363),check.core.normalize_error(t__35810__auto___107312),new cljs.core.Keyword(null,"message","message",-406056002),["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.list(new cljs.core.Symbol(null,"decode!","decode!",489055331,null),"3:foo"))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"=>","=>",-813269641,null))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["foo"], null))].join('')], null));
}
try{cljs.test.do_report((function (){var lft__35783__auto__ = decode_BANG_("0");
var rgt__35784__auto__ = cljs.core.PersistentVector.EMPTY;
var qleft__35785__auto__ = cljs.core.list(new cljs.core.Symbol(null,"decode!","decode!",489055331,null),"0");
var qright__35786__auto__ = cljs.core.PersistentVector.EMPTY;
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})());
}catch (e102536){var t__35810__auto___107316 = e102536;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"actual","actual",107306363),check.core.normalize_error(t__35810__auto___107316),new cljs.core.Keyword(null,"message","message",-406056002),["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.list(new cljs.core.Symbol(null,"decode!","decode!",489055331,null),"0"))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"=>","=>",-813269641,null))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY)].join('')], null));
}
try{cljs.test.do_report((function (){var lft__35783__auto__ = decode_BANG_(":");
var rgt__35784__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null);
var qleft__35785__auto__ = cljs.core.list(new cljs.core.Symbol(null,"decode!","decode!",489055331,null),":");
var qright__35786__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})());
}catch (e102537){var t__35810__auto___107320 = e102537;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null),new cljs.core.Keyword(null,"actual","actual",107306363),check.core.normalize_error(t__35810__auto___107320),new cljs.core.Keyword(null,"message","message",-406056002),["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.list(new cljs.core.Symbol(null,"decode!","decode!",489055331,null),":"))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"=>","=>",-813269641,null))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null))].join('')], null));
}
try{cljs.test.do_report((function (){var lft__35783__auto__ = decode_BANG_("3");
var rgt__35784__auto__ = cljs.core.PersistentVector.EMPTY;
var qleft__35785__auto__ = cljs.core.list(new cljs.core.Symbol(null,"decode!","decode!",489055331,null),"3");
var qright__35786__auto__ = cljs.core.PersistentVector.EMPTY;
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})());
}catch (e102538){var t__35810__auto___107324 = e102538;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"actual","actual",107306363),check.core.normalize_error(t__35810__auto___107324),new cljs.core.Keyword(null,"message","message",-406056002),["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.list(new cljs.core.Symbol(null,"decode!","decode!",489055331,null),"3"))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"=>","=>",-813269641,null))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY)].join('')], null));
}
try{cljs.test.do_report((function (){var lft__35783__auto__ = decode_BANG_(":");
var rgt__35784__auto__ = cljs.core.PersistentVector.EMPTY;
var qleft__35785__auto__ = cljs.core.list(new cljs.core.Symbol(null,"decode!","decode!",489055331,null),":");
var qright__35786__auto__ = cljs.core.PersistentVector.EMPTY;
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})());
}catch (e102539){var t__35810__auto___107327 = e102539;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"actual","actual",107306363),check.core.normalize_error(t__35810__auto___107327),new cljs.core.Keyword(null,"message","message",-406056002),["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.list(new cljs.core.Symbol(null,"decode!","decode!",489055331,null),":"))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"=>","=>",-813269641,null))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY)].join('')], null));
}
try{cljs.test.do_report((function (){var lft__35783__auto__ = decode_BANG_("fo");
var rgt__35784__auto__ = cljs.core.PersistentVector.EMPTY;
var qleft__35785__auto__ = cljs.core.list(new cljs.core.Symbol(null,"decode!","decode!",489055331,null),"fo");
var qright__35786__auto__ = cljs.core.PersistentVector.EMPTY;
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})());
}catch (e102540){var t__35810__auto___107329 = e102540;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"actual","actual",107306363),check.core.normalize_error(t__35810__auto___107329),new cljs.core.Keyword(null,"message","message",-406056002),["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.list(new cljs.core.Symbol(null,"decode!","decode!",489055331,null),"fo"))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"=>","=>",-813269641,null))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY)].join('')], null));
}
try{cljs.test.do_report((function (){var lft__35783__auto__ = decode_BANG_("o");
var rgt__35784__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["foo"], null);
var qleft__35785__auto__ = cljs.core.list(new cljs.core.Symbol(null,"decode!","decode!",489055331,null),"o");
var qright__35786__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["foo"], null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})());
}catch (e102543){var t__35810__auto___107331 = e102543;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["foo"], null),new cljs.core.Keyword(null,"actual","actual",107306363),check.core.normalize_error(t__35810__auto___107331),new cljs.core.Keyword(null,"message","message",-406056002),["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.list(new cljs.core.Symbol(null,"decode!","decode!",489055331,null),"o"))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"=>","=>",-813269641,null))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["foo"], null))].join('')], null));
}
try{cljs.test.do_report((function (){var lft__35783__auto__ = decode_BANG_("4:foo\n");
var rgt__35784__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["foo\n"], null);
var qleft__35785__auto__ = cljs.core.list(new cljs.core.Symbol(null,"decode!","decode!",489055331,null),"4:foo\n");
var qright__35786__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["foo\n"], null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})());
}catch (e102544){var t__35810__auto___107334 = e102544;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["foo\n"], null),new cljs.core.Keyword(null,"actual","actual",107306363),check.core.normalize_error(t__35810__auto___107334),new cljs.core.Keyword(null,"message","message",-406056002),["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.list(new cljs.core.Symbol(null,"decode!","decode!",489055331,null),"4:foo\n"))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"=>","=>",-813269641,null))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["foo\n"], null))].join('')], null));
}
try{cljs.test.do_report((function (){var lft__35783__auto__ = decode_BANG_("1:");
var rgt__35784__auto__ = cljs.core.PersistentVector.EMPTY;
var qleft__35785__auto__ = cljs.core.list(new cljs.core.Symbol(null,"decode!","decode!",489055331,null),"1:");
var qright__35786__auto__ = cljs.core.PersistentVector.EMPTY;
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})());
}catch (e102547){var t__35810__auto___107338 = e102547;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"actual","actual",107306363),check.core.normalize_error(t__35810__auto___107338),new cljs.core.Keyword(null,"message","message",-406056002),["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.list(new cljs.core.Symbol(null,"decode!","decode!",489055331,null),"1:"))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"=>","=>",-813269641,null))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY)].join('')], null));
}
try{cljs.test.do_report((function (){var lft__35783__auto__ = decode_BANG_("i");
var rgt__35784__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["i"], null);
var qleft__35785__auto__ = cljs.core.list(new cljs.core.Symbol(null,"decode!","decode!",489055331,null),"i");
var qright__35786__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["i"], null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})());
}catch (e102548){var t__35810__auto___107340 = e102548;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["i"], null),new cljs.core.Keyword(null,"actual","actual",107306363),check.core.normalize_error(t__35810__auto___107340),new cljs.core.Keyword(null,"message","message",-406056002),["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.list(new cljs.core.Symbol(null,"decode!","decode!",489055331,null),"i"))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"=>","=>",-813269641,null))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["i"], null))].join('')], null));
}
try{cljs.test.do_report((function (){var lft__35783__auto__ = decode_BANG_("1:");
var rgt__35784__auto__ = cljs.core.PersistentVector.EMPTY;
var qleft__35785__auto__ = cljs.core.list(new cljs.core.Symbol(null,"decode!","decode!",489055331,null),"1:");
var qright__35786__auto__ = cljs.core.PersistentVector.EMPTY;
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})());
}catch (e102550){var t__35810__auto___107344 = e102550;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"actual","actual",107306363),check.core.normalize_error(t__35810__auto___107344),new cljs.core.Keyword(null,"message","message",-406056002),["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.list(new cljs.core.Symbol(null,"decode!","decode!",489055331,null),"1:"))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"=>","=>",-813269641,null))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY)].join('')], null));
}
try{cljs.test.do_report((function (){var lft__35783__auto__ = decode_BANG_("i");
var rgt__35784__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["i"], null);
var qleft__35785__auto__ = cljs.core.list(new cljs.core.Symbol(null,"decode!","decode!",489055331,null),"i");
var qright__35786__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["i"], null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})());
}catch (e102554){var t__35810__auto___107347 = e102554;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["i"], null),new cljs.core.Keyword(null,"actual","actual",107306363),check.core.normalize_error(t__35810__auto___107347),new cljs.core.Keyword(null,"message","message",-406056002),["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.list(new cljs.core.Symbol(null,"decode!","decode!",489055331,null),"i"))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"=>","=>",-813269641,null))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["i"], null))].join('')], null));
}}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["decode multi-byte strings"], 0));

try{try{return cljs.test.do_report((function (){var lft__35783__auto__ = decode_BANG_("2:\u00E13:l\u00E9");
var rgt__35784__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u00E1","l\u00E9"], null);
var qleft__35785__auto__ = cljs.core.list(new cljs.core.Symbol(null,"decode!","decode!",489055331,null),"2:\u00E13:l\u00E9");
var qright__35786__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u00E1","l\u00E9"], null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})());
}catch (e102561){var t__35810__auto__ = e102561;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u00E1","l\u00E9"], null),new cljs.core.Keyword(null,"actual","actual",107306363),check.core.normalize_error(t__35810__auto__),new cljs.core.Keyword(null,"message","message",-406056002),["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.list(new cljs.core.Symbol(null,"decode!","decode!",489055331,null),"2:\u00E13:l\u00E9"))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"=>","=>",-813269641,null))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u00E1","l\u00E9"], null))].join('')], null));
}}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}})], 0)),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));

repl_tooling.nrepl.nrepl_test.decode = (function repl_tooling$nrepl$nrepl_test$decode(){
return cljs.test.test_var(repl_tooling.nrepl.nrepl_test.decode.cljs$lang$var);
});
repl_tooling.nrepl.nrepl_test.decode.cljs$lang$test = (function (){
var decode_BANG_ = repl_tooling.nrepl.bencode.decoder();
try{cljs.test.do_report((function (){var lft__35783__auto__ = decode_BANG_("");
var rgt__35784__auto__ = cljs.core.PersistentVector.EMPTY;
var qleft__35785__auto__ = cljs.core.list(new cljs.core.Symbol(null,"decode!","decode!",489055331,null),"");
var qright__35786__auto__ = cljs.core.PersistentVector.EMPTY;
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})());
}catch (e102564){var t__35810__auto___107358 = e102564;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"actual","actual",107306363),check.core.normalize_error(t__35810__auto___107358),new cljs.core.Keyword(null,"message","message",-406056002),["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.list(new cljs.core.Symbol(null,"decode!","decode!",489055331,null),""))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"=>","=>",-813269641,null))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY)].join('')], null));
}
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["decode numbers"], 0));

try{try{cljs.test.do_report((function (){var lft__35783__auto__ = decode_BANG_("i210e");
var rgt__35784__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(210)], null);
var qleft__35785__auto__ = cljs.core.list(new cljs.core.Symbol(null,"decode!","decode!",489055331,null),"i210e");
var qright__35786__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(210)], null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})());
}catch (e102570){var t__35810__auto___107361 = e102570;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(210)], null),new cljs.core.Keyword(null,"actual","actual",107306363),check.core.normalize_error(t__35810__auto___107361),new cljs.core.Keyword(null,"message","message",-406056002),["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.list(new cljs.core.Symbol(null,"decode!","decode!",489055331,null),"i210e"))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"=>","=>",-813269641,null))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(210)], null))].join('')], null));
}
try{cljs.test.do_report((function (){var lft__35783__auto__ = decode_BANG_("i-210e");
var rgt__35784__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-210)], null);
var qleft__35785__auto__ = cljs.core.list(new cljs.core.Symbol(null,"decode!","decode!",489055331,null),"i-210e");
var qright__35786__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-210)], null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})());
}catch (e102572){var t__35810__auto___107366 = e102572;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-210)], null),new cljs.core.Keyword(null,"actual","actual",107306363),check.core.normalize_error(t__35810__auto___107366),new cljs.core.Keyword(null,"message","message",-406056002),["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.list(new cljs.core.Symbol(null,"decode!","decode!",489055331,null),"i-210e"))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"=>","=>",-813269641,null))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-210)], null))].join('')], null));
}
try{cljs.test.do_report((function (){var lft__35783__auto__ = decode_BANG_("i21ei20e");
var rgt__35784__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(21),(20)], null);
var qleft__35785__auto__ = cljs.core.list(new cljs.core.Symbol(null,"decode!","decode!",489055331,null),"i21ei20e");
var qright__35786__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(21),(20)], null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})());
}catch (e102575){var t__35810__auto___107370 = e102575;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(21),(20)], null),new cljs.core.Keyword(null,"actual","actual",107306363),check.core.normalize_error(t__35810__auto___107370),new cljs.core.Keyword(null,"message","message",-406056002),["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.list(new cljs.core.Symbol(null,"decode!","decode!",489055331,null),"i21ei20e"))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"=>","=>",-813269641,null))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(21),(20)], null))].join('')], null));
}}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["decode partially"], 0));

try{try{cljs.test.do_report((function (){var lft__35783__auto__ = decode_BANG_("i2");
var rgt__35784__auto__ = cljs.core.PersistentVector.EMPTY;
var qleft__35785__auto__ = cljs.core.list(new cljs.core.Symbol(null,"decode!","decode!",489055331,null),"i2");
var qright__35786__auto__ = cljs.core.PersistentVector.EMPTY;
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})());
}catch (e102577){var t__35810__auto___107377 = e102577;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"actual","actual",107306363),check.core.normalize_error(t__35810__auto___107377),new cljs.core.Keyword(null,"message","message",-406056002),["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.list(new cljs.core.Symbol(null,"decode!","decode!",489055331,null),"i2"))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"=>","=>",-813269641,null))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY)].join('')], null));
}
try{cljs.test.do_report((function (){var lft__35783__auto__ = decode_BANG_("1");
var rgt__35784__auto__ = cljs.core.PersistentVector.EMPTY;
var qleft__35785__auto__ = cljs.core.list(new cljs.core.Symbol(null,"decode!","decode!",489055331,null),"1");
var qright__35786__auto__ = cljs.core.PersistentVector.EMPTY;
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})());
}catch (e102581){var t__35810__auto___107380 = e102581;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"actual","actual",107306363),check.core.normalize_error(t__35810__auto___107380),new cljs.core.Keyword(null,"message","message",-406056002),["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.list(new cljs.core.Symbol(null,"decode!","decode!",489055331,null),"1"))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"=>","=>",-813269641,null))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY)].join('')], null));
}
try{cljs.test.do_report((function (){var lft__35783__auto__ = decode_BANG_("0ei20e");
var rgt__35784__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(210),(20)], null);
var qleft__35785__auto__ = cljs.core.list(new cljs.core.Symbol(null,"decode!","decode!",489055331,null),"0ei20e");
var qright__35786__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(210),(20)], null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})());
}catch (e102582){var t__35810__auto___107383 = e102582;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(210),(20)], null),new cljs.core.Keyword(null,"actual","actual",107306363),check.core.normalize_error(t__35810__auto___107383),new cljs.core.Keyword(null,"message","message",-406056002),["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.list(new cljs.core.Symbol(null,"decode!","decode!",489055331,null),"0ei20e"))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"=>","=>",-813269641,null))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(210),(20)], null))].join('')], null));
}}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["decode strings"], 0));

try{try{cljs.test.do_report((function (){var lft__35783__auto__ = decode_BANG_("0:");
var rgt__35784__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null);
var qleft__35785__auto__ = cljs.core.list(new cljs.core.Symbol(null,"decode!","decode!",489055331,null),"0:");
var qright__35786__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})());
}catch (e102587){var t__35810__auto___107388 = e102587;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null),new cljs.core.Keyword(null,"actual","actual",107306363),check.core.normalize_error(t__35810__auto___107388),new cljs.core.Keyword(null,"message","message",-406056002),["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.list(new cljs.core.Symbol(null,"decode!","decode!",489055331,null),"0:"))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"=>","=>",-813269641,null))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null))].join('')], null));
}
try{cljs.test.do_report((function (){var lft__35783__auto__ = decode_BANG_("3:foo");
var rgt__35784__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["foo"], null);
var qleft__35785__auto__ = cljs.core.list(new cljs.core.Symbol(null,"decode!","decode!",489055331,null),"3:foo");
var qright__35786__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["foo"], null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})());
}catch (e102592){var t__35810__auto___107391 = e102592;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["foo"], null),new cljs.core.Keyword(null,"actual","actual",107306363),check.core.normalize_error(t__35810__auto___107391),new cljs.core.Keyword(null,"message","message",-406056002),["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.list(new cljs.core.Symbol(null,"decode!","decode!",489055331,null),"3:foo"))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"=>","=>",-813269641,null))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["foo"], null))].join('')], null));
}
try{cljs.test.do_report((function (){var lft__35783__auto__ = decode_BANG_("0");
var rgt__35784__auto__ = cljs.core.PersistentVector.EMPTY;
var qleft__35785__auto__ = cljs.core.list(new cljs.core.Symbol(null,"decode!","decode!",489055331,null),"0");
var qright__35786__auto__ = cljs.core.PersistentVector.EMPTY;
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})());
}catch (e102594){var t__35810__auto___107396 = e102594;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"actual","actual",107306363),check.core.normalize_error(t__35810__auto___107396),new cljs.core.Keyword(null,"message","message",-406056002),["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.list(new cljs.core.Symbol(null,"decode!","decode!",489055331,null),"0"))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"=>","=>",-813269641,null))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY)].join('')], null));
}
try{cljs.test.do_report((function (){var lft__35783__auto__ = decode_BANG_(":");
var rgt__35784__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null);
var qleft__35785__auto__ = cljs.core.list(new cljs.core.Symbol(null,"decode!","decode!",489055331,null),":");
var qright__35786__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})());
}catch (e102598){var t__35810__auto___107397 = e102598;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null),new cljs.core.Keyword(null,"actual","actual",107306363),check.core.normalize_error(t__35810__auto___107397),new cljs.core.Keyword(null,"message","message",-406056002),["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.list(new cljs.core.Symbol(null,"decode!","decode!",489055331,null),":"))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"=>","=>",-813269641,null))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null))].join('')], null));
}
try{cljs.test.do_report((function (){var lft__35783__auto__ = decode_BANG_("3");
var rgt__35784__auto__ = cljs.core.PersistentVector.EMPTY;
var qleft__35785__auto__ = cljs.core.list(new cljs.core.Symbol(null,"decode!","decode!",489055331,null),"3");
var qright__35786__auto__ = cljs.core.PersistentVector.EMPTY;
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})());
}catch (e102599){var t__35810__auto___107398 = e102599;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"actual","actual",107306363),check.core.normalize_error(t__35810__auto___107398),new cljs.core.Keyword(null,"message","message",-406056002),["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.list(new cljs.core.Symbol(null,"decode!","decode!",489055331,null),"3"))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"=>","=>",-813269641,null))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY)].join('')], null));
}
try{cljs.test.do_report((function (){var lft__35783__auto__ = decode_BANG_(":");
var rgt__35784__auto__ = cljs.core.PersistentVector.EMPTY;
var qleft__35785__auto__ = cljs.core.list(new cljs.core.Symbol(null,"decode!","decode!",489055331,null),":");
var qright__35786__auto__ = cljs.core.PersistentVector.EMPTY;
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})());
}catch (e102600){var t__35810__auto___107399 = e102600;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"actual","actual",107306363),check.core.normalize_error(t__35810__auto___107399),new cljs.core.Keyword(null,"message","message",-406056002),["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.list(new cljs.core.Symbol(null,"decode!","decode!",489055331,null),":"))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"=>","=>",-813269641,null))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY)].join('')], null));
}
try{cljs.test.do_report((function (){var lft__35783__auto__ = decode_BANG_("fo");
var rgt__35784__auto__ = cljs.core.PersistentVector.EMPTY;
var qleft__35785__auto__ = cljs.core.list(new cljs.core.Symbol(null,"decode!","decode!",489055331,null),"fo");
var qright__35786__auto__ = cljs.core.PersistentVector.EMPTY;
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})());
}catch (e102604){var t__35810__auto___107403 = e102604;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"actual","actual",107306363),check.core.normalize_error(t__35810__auto___107403),new cljs.core.Keyword(null,"message","message",-406056002),["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.list(new cljs.core.Symbol(null,"decode!","decode!",489055331,null),"fo"))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"=>","=>",-813269641,null))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY)].join('')], null));
}
try{cljs.test.do_report((function (){var lft__35783__auto__ = decode_BANG_("o");
var rgt__35784__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["foo"], null);
var qleft__35785__auto__ = cljs.core.list(new cljs.core.Symbol(null,"decode!","decode!",489055331,null),"o");
var qright__35786__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["foo"], null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})());
}catch (e102608){var t__35810__auto___107404 = e102608;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["foo"], null),new cljs.core.Keyword(null,"actual","actual",107306363),check.core.normalize_error(t__35810__auto___107404),new cljs.core.Keyword(null,"message","message",-406056002),["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.list(new cljs.core.Symbol(null,"decode!","decode!",489055331,null),"o"))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"=>","=>",-813269641,null))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["foo"], null))].join('')], null));
}
try{cljs.test.do_report((function (){var lft__35783__auto__ = decode_BANG_("4:foo\n");
var rgt__35784__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["foo\n"], null);
var qleft__35785__auto__ = cljs.core.list(new cljs.core.Symbol(null,"decode!","decode!",489055331,null),"4:foo\n");
var qright__35786__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["foo\n"], null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})());
}catch (e102609){var t__35810__auto___107405 = e102609;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["foo\n"], null),new cljs.core.Keyword(null,"actual","actual",107306363),check.core.normalize_error(t__35810__auto___107405),new cljs.core.Keyword(null,"message","message",-406056002),["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.list(new cljs.core.Symbol(null,"decode!","decode!",489055331,null),"4:foo\n"))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"=>","=>",-813269641,null))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["foo\n"], null))].join('')], null));
}
try{cljs.test.do_report((function (){var lft__35783__auto__ = decode_BANG_("1:");
var rgt__35784__auto__ = cljs.core.PersistentVector.EMPTY;
var qleft__35785__auto__ = cljs.core.list(new cljs.core.Symbol(null,"decode!","decode!",489055331,null),"1:");
var qright__35786__auto__ = cljs.core.PersistentVector.EMPTY;
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})());
}catch (e102610){var t__35810__auto___107406 = e102610;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"actual","actual",107306363),check.core.normalize_error(t__35810__auto___107406),new cljs.core.Keyword(null,"message","message",-406056002),["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.list(new cljs.core.Symbol(null,"decode!","decode!",489055331,null),"1:"))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"=>","=>",-813269641,null))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY)].join('')], null));
}
try{cljs.test.do_report((function (){var lft__35783__auto__ = decode_BANG_("i");
var rgt__35784__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["i"], null);
var qleft__35785__auto__ = cljs.core.list(new cljs.core.Symbol(null,"decode!","decode!",489055331,null),"i");
var qright__35786__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["i"], null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})());
}catch (e102614){var t__35810__auto___107407 = e102614;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["i"], null),new cljs.core.Keyword(null,"actual","actual",107306363),check.core.normalize_error(t__35810__auto___107407),new cljs.core.Keyword(null,"message","message",-406056002),["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.list(new cljs.core.Symbol(null,"decode!","decode!",489055331,null),"i"))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"=>","=>",-813269641,null))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["i"], null))].join('')], null));
}
try{cljs.test.do_report((function (){var lft__35783__auto__ = decode_BANG_("1:");
var rgt__35784__auto__ = cljs.core.PersistentVector.EMPTY;
var qleft__35785__auto__ = cljs.core.list(new cljs.core.Symbol(null,"decode!","decode!",489055331,null),"1:");
var qright__35786__auto__ = cljs.core.PersistentVector.EMPTY;
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})());
}catch (e102618){var t__35810__auto___107408 = e102618;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"actual","actual",107306363),check.core.normalize_error(t__35810__auto___107408),new cljs.core.Keyword(null,"message","message",-406056002),["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.list(new cljs.core.Symbol(null,"decode!","decode!",489055331,null),"1:"))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"=>","=>",-813269641,null))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY)].join('')], null));
}
try{cljs.test.do_report((function (){var lft__35783__auto__ = decode_BANG_("i");
var rgt__35784__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["i"], null);
var qleft__35785__auto__ = cljs.core.list(new cljs.core.Symbol(null,"decode!","decode!",489055331,null),"i");
var qright__35786__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["i"], null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})());
}catch (e102620){var t__35810__auto___107415 = e102620;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["i"], null),new cljs.core.Keyword(null,"actual","actual",107306363),check.core.normalize_error(t__35810__auto___107415),new cljs.core.Keyword(null,"message","message",-406056002),["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.list(new cljs.core.Symbol(null,"decode!","decode!",489055331,null),"i"))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"=>","=>",-813269641,null))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["i"], null))].join('')], null));
}}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["decode multi-byte strings"], 0));

try{try{return cljs.test.do_report((function (){var lft__35783__auto__ = decode_BANG_("2:\u00E13:l\u00E9");
var rgt__35784__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u00E1","l\u00E9"], null);
var qleft__35785__auto__ = cljs.core.list(new cljs.core.Symbol(null,"decode!","decode!",489055331,null),"2:\u00E13:l\u00E9");
var qright__35786__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u00E1","l\u00E9"], null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})());
}catch (e102626){var t__35810__auto__ = e102626;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u00E1","l\u00E9"], null),new cljs.core.Keyword(null,"actual","actual",107306363),check.core.normalize_error(t__35810__auto__),new cljs.core.Keyword(null,"message","message",-406056002),["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.list(new cljs.core.Symbol(null,"decode!","decode!",489055331,null),"2:\u00E13:l\u00E9"))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"=>","=>",-813269641,null))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u00E1","l\u00E9"], null))].join('')], null));
}}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}});

(repl_tooling.nrepl.nrepl_test.decode.cljs$lang$var = new cljs.core.Var(function(){return repl_tooling.nrepl.nrepl_test.decode;},new cljs.core.Symbol("repl-tooling.nrepl.nrepl-test","decode","repl-tooling.nrepl.nrepl-test/decode",1576645165,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"repl-tooling.nrepl.nrepl-test","repl-tooling.nrepl.nrepl-test",-1432404227,null),new cljs.core.Symbol(null,"decode","decode",334366246,null),"repl_tooling/nrepl/nrepl_test.cljs",22,1,36,36,cljs.core.List.EMPTY,null,(cljs.core.truth_(repl_tooling.nrepl.nrepl_test.decode)?repl_tooling.nrepl.nrepl_test.decode.cljs$lang$test:null)])));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"repl_tooling.nrepl.nrepl_test","repl_tooling.nrepl.nrepl_test",-1443749589),new cljs.core.Keyword(null,"decode-lists","decode-lists",250767696)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"decode-lists",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){
var decode_BANG_ = repl_tooling.nrepl.bencode.decoder();
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["full lists"], 0));

try{try{cljs.test.do_report((function (){var lft__35783__auto__ = decode_BANG_("le");
var rgt__35784__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null);
var qleft__35785__auto__ = cljs.core.list(new cljs.core.Symbol(null,"decode!","decode!",489055331,null),"le");
var qright__35786__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})());
}catch (e102638){var t__35810__auto___107422 = e102638;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null),new cljs.core.Keyword(null,"actual","actual",107306363),check.core.normalize_error(t__35810__auto___107422),new cljs.core.Keyword(null,"message","message",-406056002),["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.list(new cljs.core.Symbol(null,"decode!","decode!",489055331,null),"le"))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"=>","=>",-813269641,null))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null))].join('')], null));
}
try{cljs.test.do_report((function (){var lft__35783__auto__ = decode_BANG_("llee");
var rgt__35784__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null)], null);
var qleft__35785__auto__ = cljs.core.list(new cljs.core.Symbol(null,"decode!","decode!",489055331,null),"llee");
var qright__35786__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null)], null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})());
}catch (e102640){var t__35810__auto___107425 = e102640;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null)], null),new cljs.core.Keyword(null,"actual","actual",107306363),check.core.normalize_error(t__35810__auto___107425),new cljs.core.Keyword(null,"message","message",-406056002),["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.list(new cljs.core.Symbol(null,"decode!","decode!",489055331,null),"llee"))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"=>","=>",-813269641,null))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null)], null))].join('')], null));
}
try{cljs.test.do_report((function (){var lft__35783__auto__ = decode_BANG_("llei10ee");
var rgt__35784__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,(10)], null)], null);
var qleft__35785__auto__ = cljs.core.list(new cljs.core.Symbol(null,"decode!","decode!",489055331,null),"llei10ee");
var qright__35786__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,(10)], null)], null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})());
}catch (e102646){var t__35810__auto___107431 = e102646;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,(10)], null)], null),new cljs.core.Keyword(null,"actual","actual",107306363),check.core.normalize_error(t__35810__auto___107431),new cljs.core.Keyword(null,"message","message",-406056002),["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.list(new cljs.core.Symbol(null,"decode!","decode!",489055331,null),"llei10ee"))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"=>","=>",-813269641,null))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,(10)], null)], null))].join('')], null));
}}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["multiple lists"], 0));

try{try{cljs.test.do_report((function (){var lft__35783__auto__ = decode_BANG_("llei10eeli12ee");
var rgt__35784__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,(10)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12)], null)], null);
var qleft__35785__auto__ = cljs.core.list(new cljs.core.Symbol(null,"decode!","decode!",489055331,null),"llei10eeli12ee");
var qright__35786__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,(10)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12)], null)], null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})());
}catch (e102651){var t__35810__auto___107433 = e102651;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,(10)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12)], null)], null),new cljs.core.Keyword(null,"actual","actual",107306363),check.core.normalize_error(t__35810__auto___107433),new cljs.core.Keyword(null,"message","message",-406056002),["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.list(new cljs.core.Symbol(null,"decode!","decode!",489055331,null),"llei10eeli12ee"))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"=>","=>",-813269641,null))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,(10)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12)], null)], null))].join('')], null));
}}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["lazily decode lists"], 0));

try{try{cljs.test.do_report((function (){var lft__35783__auto__ = decode_BANG_("l");
var rgt__35784__auto__ = cljs.core.PersistentVector.EMPTY;
var qleft__35785__auto__ = cljs.core.list(new cljs.core.Symbol(null,"decode!","decode!",489055331,null),"l");
var qright__35786__auto__ = cljs.core.PersistentVector.EMPTY;
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})());
}catch (e102655){var t__35810__auto___107434 = e102655;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"actual","actual",107306363),check.core.normalize_error(t__35810__auto___107434),new cljs.core.Keyword(null,"message","message",-406056002),["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.list(new cljs.core.Symbol(null,"decode!","decode!",489055331,null),"l"))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"=>","=>",-813269641,null))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY)].join('')], null));
}
try{cljs.test.do_report((function (){var lft__35783__auto__ = decode_BANG_("e");
var rgt__35784__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null);
var qleft__35785__auto__ = cljs.core.list(new cljs.core.Symbol(null,"decode!","decode!",489055331,null),"e");
var qright__35786__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})());
}catch (e102658){var t__35810__auto___107435 = e102658;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null),new cljs.core.Keyword(null,"actual","actual",107306363),check.core.normalize_error(t__35810__auto___107435),new cljs.core.Keyword(null,"message","message",-406056002),["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.list(new cljs.core.Symbol(null,"decode!","decode!",489055331,null),"e"))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"=>","=>",-813269641,null))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null))].join('')], null));
}
try{cljs.test.do_report((function (){var lft__35783__auto__ = decode_BANG_("li0");
var rgt__35784__auto__ = cljs.core.PersistentVector.EMPTY;
var qleft__35785__auto__ = cljs.core.list(new cljs.core.Symbol(null,"decode!","decode!",489055331,null),"li0");
var qright__35786__auto__ = cljs.core.PersistentVector.EMPTY;
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})());
}catch (e102660){var t__35810__auto___107436 = e102660;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"actual","actual",107306363),check.core.normalize_error(t__35810__auto___107436),new cljs.core.Keyword(null,"message","message",-406056002),["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.list(new cljs.core.Symbol(null,"decode!","decode!",489055331,null),"li0"))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"=>","=>",-813269641,null))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY)].join('')], null));
}
try{cljs.test.do_report((function (){var lft__35783__auto__ = decode_BANG_("ei");
var rgt__35784__auto__ = cljs.core.PersistentVector.EMPTY;
var qleft__35785__auto__ = cljs.core.list(new cljs.core.Symbol(null,"decode!","decode!",489055331,null),"ei");
var qright__35786__auto__ = cljs.core.PersistentVector.EMPTY;
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})());
}catch (e102663){var t__35810__auto___107437 = e102663;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"actual","actual",107306363),check.core.normalize_error(t__35810__auto___107437),new cljs.core.Keyword(null,"message","message",-406056002),["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.list(new cljs.core.Symbol(null,"decode!","decode!",489055331,null),"ei"))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"=>","=>",-813269641,null))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY)].join('')], null));
}
try{cljs.test.do_report((function (){var lft__35783__auto__ = decode_BANG_("2ee");
var rgt__35784__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null)], null);
var qleft__35785__auto__ = cljs.core.list(new cljs.core.Symbol(null,"decode!","decode!",489055331,null),"2ee");
var qright__35786__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null)], null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})());
}catch (e102665){var t__35810__auto___107439 = e102665;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null)], null),new cljs.core.Keyword(null,"actual","actual",107306363),check.core.normalize_error(t__35810__auto___107439),new cljs.core.Keyword(null,"message","message",-406056002),["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.list(new cljs.core.Symbol(null,"decode!","decode!",489055331,null),"2ee"))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"=>","=>",-813269641,null))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null)], null))].join('')], null));
}}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["lazily decode multiple lists"], 0));

try{try{cljs.test.do_report((function (){var lft__35783__auto__ = decode_BANG_("li0ei2");
var rgt__35784__auto__ = cljs.core.PersistentVector.EMPTY;
var qleft__35785__auto__ = cljs.core.list(new cljs.core.Symbol(null,"decode!","decode!",489055331,null),"li0ei2");
var qright__35786__auto__ = cljs.core.PersistentVector.EMPTY;
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})());
}catch (e102668){var t__35810__auto___107470 = e102668;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"actual","actual",107306363),check.core.normalize_error(t__35810__auto___107470),new cljs.core.Keyword(null,"message","message",-406056002),["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.list(new cljs.core.Symbol(null,"decode!","decode!",489055331,null),"li0ei2"))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"=>","=>",-813269641,null))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY)].join('')], null));
}
try{cljs.test.do_report((function (){var lft__35783__auto__ = decode_BANG_("eelli10eee");
var rgt__35784__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10)], null)], null)], null);
var qleft__35785__auto__ = cljs.core.list(new cljs.core.Symbol(null,"decode!","decode!",489055331,null),"eelli10eee");
var qright__35786__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10)], null)], null)], null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})());
}catch (e102670){var t__35810__auto___107473 = e102670;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10)], null)], null)], null),new cljs.core.Keyword(null,"actual","actual",107306363),check.core.normalize_error(t__35810__auto___107473),new cljs.core.Keyword(null,"message","message",-406056002),["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.list(new cljs.core.Symbol(null,"decode!","decode!",489055331,null),"eelli10eee"))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"=>","=>",-813269641,null))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10)], null)], null)], null))].join('')], null));
}}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["decode maps"], 0));

try{try{cljs.test.do_report((function (){var lft__35783__auto__ = decode_BANG_("de");
var rgt__35784__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY], null);
var qleft__35785__auto__ = cljs.core.list(new cljs.core.Symbol(null,"decode!","decode!",489055331,null),"de");
var qright__35786__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY], null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})());
}catch (e102674){var t__35810__auto___107474 = e102674;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.Keyword(null,"actual","actual",107306363),check.core.normalize_error(t__35810__auto___107474),new cljs.core.Keyword(null,"message","message",-406056002),["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.list(new cljs.core.Symbol(null,"decode!","decode!",489055331,null),"de"))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"=>","=>",-813269641,null))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY], null))].join('')], null));
}
try{cljs.test.do_report((function (){var lft__35783__auto__ = decode_BANG_("di10ei20eli11eedi99ei98eee");
var rgt__35784__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.createAsIfByAssoc([(10),(20),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(11)], null),new cljs.core.PersistentArrayMap(null, 1, [(99),(98)], null)])], null);
var qleft__35785__auto__ = cljs.core.list(new cljs.core.Symbol(null,"decode!","decode!",489055331,null),"di10ei20eli11eedi99ei98eee");
var qright__35786__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [(10),(20),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(11)], null),new cljs.core.PersistentArrayMap(null, 1, [(99),(98)], null)], null)], null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})());
}catch (e102675){var t__35810__auto___107475 = e102675;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.createAsIfByAssoc([(10),(20),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(11)], null),new cljs.core.PersistentArrayMap(null, 1, [(99),(98)], null)])], null),new cljs.core.Keyword(null,"actual","actual",107306363),check.core.normalize_error(t__35810__auto___107475),new cljs.core.Keyword(null,"message","message",-406056002),["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.list(new cljs.core.Symbol(null,"decode!","decode!",489055331,null),"di10ei20eli11eedi99ei98eee"))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"=>","=>",-813269641,null))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [(10),(20),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(11)], null),new cljs.core.PersistentArrayMap(null, 1, [(99),(98)], null)], null)], null))].join('')], null));
}}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["decode maps"], 0));

try{try{cljs.test.do_report((function (){var lft__35783__auto__ = decode_BANG_("d1:a1:be");
var rgt__35784__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, ["a","b"], null)], null);
var qleft__35785__auto__ = cljs.core.list(new cljs.core.Symbol(null,"decode!","decode!",489055331,null),"d1:a1:be");
var qright__35786__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, ["a","b"], null)], null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})());
}catch (e102678){var t__35810__auto___107476 = e102678;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, ["a","b"], null)], null),new cljs.core.Keyword(null,"actual","actual",107306363),check.core.normalize_error(t__35810__auto___107476),new cljs.core.Keyword(null,"message","message",-406056002),["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.list(new cljs.core.Symbol(null,"decode!","decode!",489055331,null),"d1:a1:be"))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"=>","=>",-813269641,null))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, ["a","b"], null)], null))].join('')], null));
}}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["decode nested data"], 0));

try{try{return cljs.test.do_report((function (){var lft__35783__auto__ = decode_BANG_("d1:a1:bi0eli0ei2eee");
var rgt__35784__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, ["a","b",(0),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null)], null)], null);
var qleft__35785__auto__ = cljs.core.list(new cljs.core.Symbol(null,"decode!","decode!",489055331,null),"d1:a1:bi0eli0ei2eee");
var qright__35786__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, ["a","b",(0),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null)], null)], null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})());
}catch (e102684){var t__35810__auto__ = e102684;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, ["a","b",(0),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null)], null)], null),new cljs.core.Keyword(null,"actual","actual",107306363),check.core.normalize_error(t__35810__auto__),new cljs.core.Keyword(null,"message","message",-406056002),["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.list(new cljs.core.Symbol(null,"decode!","decode!",489055331,null),"d1:a1:bi0eli0ei2eee"))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"=>","=>",-813269641,null))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, ["a","b",(0),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null)], null)], null))].join('')], null));
}}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}})], 0)),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));

repl_tooling.nrepl.nrepl_test.decode_lists = (function repl_tooling$nrepl$nrepl_test$decode_lists(){
return cljs.test.test_var(repl_tooling.nrepl.nrepl_test.decode_lists.cljs$lang$var);
});
repl_tooling.nrepl.nrepl_test.decode_lists.cljs$lang$test = (function (){
var decode_BANG_ = repl_tooling.nrepl.bencode.decoder();
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["full lists"], 0));

try{try{cljs.test.do_report((function (){var lft__35783__auto__ = decode_BANG_("le");
var rgt__35784__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null);
var qleft__35785__auto__ = cljs.core.list(new cljs.core.Symbol(null,"decode!","decode!",489055331,null),"le");
var qright__35786__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})());
}catch (e102691){var t__35810__auto___107477 = e102691;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null),new cljs.core.Keyword(null,"actual","actual",107306363),check.core.normalize_error(t__35810__auto___107477),new cljs.core.Keyword(null,"message","message",-406056002),["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.list(new cljs.core.Symbol(null,"decode!","decode!",489055331,null),"le"))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"=>","=>",-813269641,null))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null))].join('')], null));
}
try{cljs.test.do_report((function (){var lft__35783__auto__ = decode_BANG_("llee");
var rgt__35784__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null)], null);
var qleft__35785__auto__ = cljs.core.list(new cljs.core.Symbol(null,"decode!","decode!",489055331,null),"llee");
var qright__35786__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null)], null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})());
}catch (e102692){var t__35810__auto___107478 = e102692;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null)], null),new cljs.core.Keyword(null,"actual","actual",107306363),check.core.normalize_error(t__35810__auto___107478),new cljs.core.Keyword(null,"message","message",-406056002),["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.list(new cljs.core.Symbol(null,"decode!","decode!",489055331,null),"llee"))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"=>","=>",-813269641,null))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null)], null))].join('')], null));
}
try{cljs.test.do_report((function (){var lft__35783__auto__ = decode_BANG_("llei10ee");
var rgt__35784__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,(10)], null)], null);
var qleft__35785__auto__ = cljs.core.list(new cljs.core.Symbol(null,"decode!","decode!",489055331,null),"llei10ee");
var qright__35786__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,(10)], null)], null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})());
}catch (e102693){var t__35810__auto___107479 = e102693;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,(10)], null)], null),new cljs.core.Keyword(null,"actual","actual",107306363),check.core.normalize_error(t__35810__auto___107479),new cljs.core.Keyword(null,"message","message",-406056002),["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.list(new cljs.core.Symbol(null,"decode!","decode!",489055331,null),"llei10ee"))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"=>","=>",-813269641,null))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,(10)], null)], null))].join('')], null));
}}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["multiple lists"], 0));

try{try{cljs.test.do_report((function (){var lft__35783__auto__ = decode_BANG_("llei10eeli12ee");
var rgt__35784__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,(10)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12)], null)], null);
var qleft__35785__auto__ = cljs.core.list(new cljs.core.Symbol(null,"decode!","decode!",489055331,null),"llei10eeli12ee");
var qright__35786__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,(10)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12)], null)], null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})());
}catch (e102694){var t__35810__auto___107480 = e102694;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,(10)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12)], null)], null),new cljs.core.Keyword(null,"actual","actual",107306363),check.core.normalize_error(t__35810__auto___107480),new cljs.core.Keyword(null,"message","message",-406056002),["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.list(new cljs.core.Symbol(null,"decode!","decode!",489055331,null),"llei10eeli12ee"))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"=>","=>",-813269641,null))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,(10)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12)], null)], null))].join('')], null));
}}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["lazily decode lists"], 0));

try{try{cljs.test.do_report((function (){var lft__35783__auto__ = decode_BANG_("l");
var rgt__35784__auto__ = cljs.core.PersistentVector.EMPTY;
var qleft__35785__auto__ = cljs.core.list(new cljs.core.Symbol(null,"decode!","decode!",489055331,null),"l");
var qright__35786__auto__ = cljs.core.PersistentVector.EMPTY;
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})());
}catch (e102695){var t__35810__auto___107481 = e102695;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"actual","actual",107306363),check.core.normalize_error(t__35810__auto___107481),new cljs.core.Keyword(null,"message","message",-406056002),["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.list(new cljs.core.Symbol(null,"decode!","decode!",489055331,null),"l"))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"=>","=>",-813269641,null))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY)].join('')], null));
}
try{cljs.test.do_report((function (){var lft__35783__auto__ = decode_BANG_("e");
var rgt__35784__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null);
var qleft__35785__auto__ = cljs.core.list(new cljs.core.Symbol(null,"decode!","decode!",489055331,null),"e");
var qright__35786__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})());
}catch (e102696){var t__35810__auto___107482 = e102696;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null),new cljs.core.Keyword(null,"actual","actual",107306363),check.core.normalize_error(t__35810__auto___107482),new cljs.core.Keyword(null,"message","message",-406056002),["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.list(new cljs.core.Symbol(null,"decode!","decode!",489055331,null),"e"))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"=>","=>",-813269641,null))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null))].join('')], null));
}
try{cljs.test.do_report((function (){var lft__35783__auto__ = decode_BANG_("li0");
var rgt__35784__auto__ = cljs.core.PersistentVector.EMPTY;
var qleft__35785__auto__ = cljs.core.list(new cljs.core.Symbol(null,"decode!","decode!",489055331,null),"li0");
var qright__35786__auto__ = cljs.core.PersistentVector.EMPTY;
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})());
}catch (e102697){var t__35810__auto___107483 = e102697;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"actual","actual",107306363),check.core.normalize_error(t__35810__auto___107483),new cljs.core.Keyword(null,"message","message",-406056002),["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.list(new cljs.core.Symbol(null,"decode!","decode!",489055331,null),"li0"))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"=>","=>",-813269641,null))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY)].join('')], null));
}
try{cljs.test.do_report((function (){var lft__35783__auto__ = decode_BANG_("ei");
var rgt__35784__auto__ = cljs.core.PersistentVector.EMPTY;
var qleft__35785__auto__ = cljs.core.list(new cljs.core.Symbol(null,"decode!","decode!",489055331,null),"ei");
var qright__35786__auto__ = cljs.core.PersistentVector.EMPTY;
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})());
}catch (e102698){var t__35810__auto___107484 = e102698;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"actual","actual",107306363),check.core.normalize_error(t__35810__auto___107484),new cljs.core.Keyword(null,"message","message",-406056002),["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.list(new cljs.core.Symbol(null,"decode!","decode!",489055331,null),"ei"))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"=>","=>",-813269641,null))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY)].join('')], null));
}
try{cljs.test.do_report((function (){var lft__35783__auto__ = decode_BANG_("2ee");
var rgt__35784__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null)], null);
var qleft__35785__auto__ = cljs.core.list(new cljs.core.Symbol(null,"decode!","decode!",489055331,null),"2ee");
var qright__35786__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null)], null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})());
}catch (e102699){var t__35810__auto___107485 = e102699;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null)], null),new cljs.core.Keyword(null,"actual","actual",107306363),check.core.normalize_error(t__35810__auto___107485),new cljs.core.Keyword(null,"message","message",-406056002),["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.list(new cljs.core.Symbol(null,"decode!","decode!",489055331,null),"2ee"))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"=>","=>",-813269641,null))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null)], null))].join('')], null));
}}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["lazily decode multiple lists"], 0));

try{try{cljs.test.do_report((function (){var lft__35783__auto__ = decode_BANG_("li0ei2");
var rgt__35784__auto__ = cljs.core.PersistentVector.EMPTY;
var qleft__35785__auto__ = cljs.core.list(new cljs.core.Symbol(null,"decode!","decode!",489055331,null),"li0ei2");
var qright__35786__auto__ = cljs.core.PersistentVector.EMPTY;
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})());
}catch (e102700){var t__35810__auto___107486 = e102700;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"actual","actual",107306363),check.core.normalize_error(t__35810__auto___107486),new cljs.core.Keyword(null,"message","message",-406056002),["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.list(new cljs.core.Symbol(null,"decode!","decode!",489055331,null),"li0ei2"))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"=>","=>",-813269641,null))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY)].join('')], null));
}
try{cljs.test.do_report((function (){var lft__35783__auto__ = decode_BANG_("eelli10eee");
var rgt__35784__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10)], null)], null)], null);
var qleft__35785__auto__ = cljs.core.list(new cljs.core.Symbol(null,"decode!","decode!",489055331,null),"eelli10eee");
var qright__35786__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10)], null)], null)], null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})());
}catch (e102701){var t__35810__auto___107487 = e102701;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10)], null)], null)], null),new cljs.core.Keyword(null,"actual","actual",107306363),check.core.normalize_error(t__35810__auto___107487),new cljs.core.Keyword(null,"message","message",-406056002),["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.list(new cljs.core.Symbol(null,"decode!","decode!",489055331,null),"eelli10eee"))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"=>","=>",-813269641,null))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10)], null)], null)], null))].join('')], null));
}}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["decode maps"], 0));

try{try{cljs.test.do_report((function (){var lft__35783__auto__ = decode_BANG_("de");
var rgt__35784__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY], null);
var qleft__35785__auto__ = cljs.core.list(new cljs.core.Symbol(null,"decode!","decode!",489055331,null),"de");
var qright__35786__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY], null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})());
}catch (e102702){var t__35810__auto___107488 = e102702;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.Keyword(null,"actual","actual",107306363),check.core.normalize_error(t__35810__auto___107488),new cljs.core.Keyword(null,"message","message",-406056002),["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.list(new cljs.core.Symbol(null,"decode!","decode!",489055331,null),"de"))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"=>","=>",-813269641,null))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY], null))].join('')], null));
}
try{cljs.test.do_report((function (){var lft__35783__auto__ = decode_BANG_("di10ei20eli11eedi99ei98eee");
var rgt__35784__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.createAsIfByAssoc([(10),(20),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(11)], null),new cljs.core.PersistentArrayMap(null, 1, [(99),(98)], null)])], null);
var qleft__35785__auto__ = cljs.core.list(new cljs.core.Symbol(null,"decode!","decode!",489055331,null),"di10ei20eli11eedi99ei98eee");
var qright__35786__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [(10),(20),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(11)], null),new cljs.core.PersistentArrayMap(null, 1, [(99),(98)], null)], null)], null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})());
}catch (e102703){var t__35810__auto___107489 = e102703;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.createAsIfByAssoc([(10),(20),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(11)], null),new cljs.core.PersistentArrayMap(null, 1, [(99),(98)], null)])], null),new cljs.core.Keyword(null,"actual","actual",107306363),check.core.normalize_error(t__35810__auto___107489),new cljs.core.Keyword(null,"message","message",-406056002),["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.list(new cljs.core.Symbol(null,"decode!","decode!",489055331,null),"di10ei20eli11eedi99ei98eee"))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"=>","=>",-813269641,null))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [(10),(20),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(11)], null),new cljs.core.PersistentArrayMap(null, 1, [(99),(98)], null)], null)], null))].join('')], null));
}}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["decode maps"], 0));

try{try{cljs.test.do_report((function (){var lft__35783__auto__ = decode_BANG_("d1:a1:be");
var rgt__35784__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, ["a","b"], null)], null);
var qleft__35785__auto__ = cljs.core.list(new cljs.core.Symbol(null,"decode!","decode!",489055331,null),"d1:a1:be");
var qright__35786__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, ["a","b"], null)], null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})());
}catch (e102704){var t__35810__auto___107490 = e102704;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, ["a","b"], null)], null),new cljs.core.Keyword(null,"actual","actual",107306363),check.core.normalize_error(t__35810__auto___107490),new cljs.core.Keyword(null,"message","message",-406056002),["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.list(new cljs.core.Symbol(null,"decode!","decode!",489055331,null),"d1:a1:be"))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"=>","=>",-813269641,null))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, ["a","b"], null)], null))].join('')], null));
}}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["decode nested data"], 0));

try{try{return cljs.test.do_report((function (){var lft__35783__auto__ = decode_BANG_("d1:a1:bi0eli0ei2eee");
var rgt__35784__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, ["a","b",(0),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null)], null)], null);
var qleft__35785__auto__ = cljs.core.list(new cljs.core.Symbol(null,"decode!","decode!",489055331,null),"d1:a1:bi0eli0ei2eee");
var qright__35786__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, ["a","b",(0),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null)], null)], null);
var result__35787__auto__ = matcher_combinators.core.match(rgt__35784__auto__,lft__35783__auto__);
var msg__35788__auto__ = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lft__35783__auto__], 0)),"\n\nMismatch:\n",matcher_combinators.printer.as_string(new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(result__35787__auto__))].join('');
var pass_QMARK___35789__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(result__35787__auto__));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((pass_QMARK___35789__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),qright__35786__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(msg__35788__auto__)], null);
})());
}catch (e102705){var t__35810__auto__ = e102705;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, ["a","b",(0),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null)], null)], null),new cljs.core.Keyword(null,"actual","actual",107306363),check.core.normalize_error(t__35810__auto__),new cljs.core.Keyword(null,"message","message",-406056002),["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.list(new cljs.core.Symbol(null,"decode!","decode!",489055331,null),"d1:a1:bi0eli0ei2eee"))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"=>","=>",-813269641,null))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, ["a","b",(0),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null)], null)], null))].join('')], null));
}}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}});

(repl_tooling.nrepl.nrepl_test.decode_lists.cljs$lang$var = new cljs.core.Var(function(){return repl_tooling.nrepl.nrepl_test.decode_lists;},new cljs.core.Symbol("repl-tooling.nrepl.nrepl-test","decode-lists","repl-tooling.nrepl.nrepl-test/decode-lists",649427874,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"repl-tooling.nrepl.nrepl-test","repl-tooling.nrepl.nrepl-test",-1432404227,null),new cljs.core.Symbol(null,"decode-lists","decode-lists",1891299223,null),"repl_tooling/nrepl/nrepl_test.cljs",28,1,71,71,cljs.core.List.EMPTY,null,(cljs.core.truth_(repl_tooling.nrepl.nrepl_test.decode_lists)?repl_tooling.nrepl.nrepl_test.decode_lists.cljs$lang$test:null)])));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"repl_tooling.nrepl.nrepl_test","repl_tooling.nrepl.nrepl_test",-1443749589),new cljs.core.Keyword(null,"fake-editor","fake-editor",-2015963141)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"fake-editor",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof repl_tooling !== 'undefined') && (typeof repl_tooling.nrepl !== 'undefined') && (typeof repl_tooling.nrepl.nrepl_test !== 'undefined') && (typeof repl_tooling.nrepl.nrepl_test.t_repl_tooling$nrepl$nrepl_test102706 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
repl_tooling.nrepl.nrepl_test.t_repl_tooling$nrepl$nrepl_test102706 = (function (meta102707){
this.meta102707 = meta102707;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(repl_tooling.nrepl.nrepl_test.t_repl_tooling$nrepl$nrepl_test102706.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_102708,meta102707__$1){
var self__ = this;
var _102708__$1 = this;
return (new repl_tooling.nrepl.nrepl_test.t_repl_tooling$nrepl$nrepl_test102706(meta102707__$1));
}));

(repl_tooling.nrepl.nrepl_test.t_repl_tooling$nrepl$nrepl_test102706.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_102708){
var self__ = this;
var _102708__$1 = this;
return self__.meta102707;
}));

(repl_tooling.nrepl.nrepl_test.t_repl_tooling$nrepl$nrepl_test102706.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(repl_tooling.nrepl.nrepl_test.t_repl_tooling$nrepl$nrepl_test102706.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__54113__auto__,devcard_opts__54114__auto__){
var self__ = this;
var this__54113__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__54114__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__54138__auto__ = repl_tooling.integration.fake_editor.editor;
if(cljs.core.fn_QMARK_(v__54138__auto__)){
return (function (data_atom__54139__auto__,owner__54140__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__54138__auto__,data_atom__54139__auto__,owner__54140__auto__], null));
});
} else {
return reagent.core.as_element(v__54138__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__54114__auto__))], 0))], 0));
}));

(repl_tooling.nrepl.nrepl_test.t_repl_tooling$nrepl$nrepl_test102706.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta102707","meta102707",62847158,null)], null);
}));

(repl_tooling.nrepl.nrepl_test.t_repl_tooling$nrepl$nrepl_test102706.cljs$lang$type = true);

(repl_tooling.nrepl.nrepl_test.t_repl_tooling$nrepl$nrepl_test102706.cljs$lang$ctorStr = "repl-tooling.nrepl.nrepl-test/t_repl_tooling$nrepl$nrepl_test102706");

(repl_tooling.nrepl.nrepl_test.t_repl_tooling$nrepl$nrepl_test102706.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"repl-tooling.nrepl.nrepl-test/t_repl_tooling$nrepl$nrepl_test102706");
}));

/**
 * Positional factory function for repl-tooling.nrepl.nrepl-test/t_repl_tooling$nrepl$nrepl_test102706.
 */
repl_tooling.nrepl.nrepl_test.__GT_t_repl_tooling$nrepl$nrepl_test102706 = (function repl_tooling$nrepl$nrepl_test$__GT_t_repl_tooling$nrepl$nrepl_test102706(meta102707){
return (new repl_tooling.nrepl.nrepl_test.t_repl_tooling$nrepl$nrepl_test102706(meta102707));
});

}

return (new repl_tooling.nrepl.nrepl_test.t_repl_tooling$nrepl$nrepl_test102706(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),repl_tooling.integration.fake_editor.state,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"repl_tooling.nrepl.nrepl_test","repl_tooling.nrepl.nrepl_test",-1443749589),new cljs.core.Keyword(null,"nrepl-connection","nrepl-connection",-1461104808)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"nrepl-connection",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
if((typeof repl_tooling !== 'undefined') && (typeof repl_tooling.nrepl !== 'undefined') && (typeof repl_tooling.nrepl.nrepl_test !== 'undefined') && (typeof repl_tooling.nrepl.nrepl_test.t_repl_tooling$nrepl$nrepl_test102710 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
repl_tooling.nrepl.nrepl_test.t_repl_tooling$nrepl$nrepl_test102710 = (function (out,meta102711){
this.out = out;
this.meta102711 = meta102711;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(repl_tooling.nrepl.nrepl_test.t_repl_tooling$nrepl$nrepl_test102710.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_102712,meta102711__$1){
var self__ = this;
var _102712__$1 = this;
return (new repl_tooling.nrepl.nrepl_test.t_repl_tooling$nrepl$nrepl_test102710(self__.out,meta102711__$1));
}));

(repl_tooling.nrepl.nrepl_test.t_repl_tooling$nrepl$nrepl_test102710.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_102712){
var self__ = this;
var _102712__$1 = this;
return self__.meta102711;
}));

(repl_tooling.nrepl.nrepl_test.t_repl_tooling$nrepl$nrepl_test102710.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(repl_tooling.nrepl.nrepl_test.t_repl_tooling$nrepl$nrepl_test102710.prototype.call = (function (self__,done__53962__auto__){
var self__ = this;
var self____$1 = this;
var ___9200__auto__ = self____$1;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["connecting to a nREPL REPL"], 0));

try{var c__35941__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35942__auto__ = (function (){var switch__34939__auto__ = (function (state_103159){
var state_val_103160 = (state_103159[(1)]);
if((state_val_103160 === (65))){
var _ = (function (){var statearr_103162 = state_103159;
(statearr_103162[(4)] = cljs.core.rest((state_103159[(4)])));

return statearr_103162;
})();
var state_103159__$1 = state_103159;
var ex103161 = (state_103159__$1[(2)]);
var statearr_103163_107496 = state_103159__$1;
(statearr_103163_107496[(5)] = ex103161);


throw ex103161;


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103160 === (70))){
var inst_103054 = (state_103159[(2)]);
var inst_103055 = cljs.core.list(new cljs.core.Symbol(null,"await!","await!",-473046777,null),cljs.core.list(new cljs.core.Symbol("editor","change-stdout","editor/change-stdout",294315011,null)));
var inst_103056 = /Hi: :some-error/;
var inst_103057 = matcher_combinators.core.match(/Hi: :some-error/,inst_103054);
var inst_103058 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_103054], 0));
var inst_103059 = new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(inst_103057);
var inst_103060 = matcher_combinators.printer.as_string(inst_103059);
var inst_103061 = [inst_103058,"\n\nMismatch:\n",inst_103060].join('');
var inst_103062 = new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(inst_103057);
var inst_103063 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),inst_103062);
var inst_103064 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363)];
var state_103159__$1 = (function (){var statearr_103164 = state_103159;
(statearr_103164[(7)] = inst_103055);

(statearr_103164[(8)] = inst_103061);

(statearr_103164[(9)] = inst_103064);

(statearr_103164[(10)] = inst_103056);

return statearr_103164;
})();
if(inst_103063){
var statearr_103165_107499 = state_103159__$1;
(statearr_103165_107499[(1)] = (74));

} else {
var statearr_103166_107500 = state_103159__$1;
(statearr_103166_107500[(1)] = (75));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103160 === (62))){
var _ = (function (){var statearr_103167 = state_103159;
(statearr_103167[(4)] = cljs.core.cons((64),(state_103159[(4)])));

return statearr_103167;
})();
var ___$1 = (function (){var statearr_103168 = state_103159;
(statearr_103168[(4)] = cljs.core.cons((65),(state_103159[(4)])));

return statearr_103168;
})();
var inst_103026 = repl_tooling.integration.fake_editor.type_and_eval("(binding [*out* *err*] (prn :some-error))");
var state_103159__$1 = (function (){var statearr_103169 = state_103159;
(statearr_103169[(11)] = inst_103026);

return statearr_103169;
})();
var statearr_103170_107503 = state_103159__$1;
(statearr_103170_107503[(2)] = null);

(statearr_103170_107503[(1)] = (66));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103160 === (74))){
var state_103159__$1 = state_103159;
var statearr_103171_107504 = state_103159__$1;
(statearr_103171_107504[(2)] = new cljs.core.Keyword(null,"pass","pass",1574159993));

(statearr_103171_107504[(1)] = (76));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103160 === (7))){
var inst_102715 = (state_103159[(12)]);
var inst_102748 = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var inst_102749 = (function (){var mark_as_done__53963__auto__ = inst_102715;
var chan__53977__auto__ = inst_102748;
return (function (){
return new cljs.core.Keyword(null,"eval","eval",-1103567905).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"repls","repls",870822864).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(repl_tooling.integration.fake_editor.state)));
});
})();
var inst_102750 = repl_tooling.integration.fake_editor.wait_for(inst_102749);
var inst_102751 = (function (){var mark_as_done__53963__auto__ = inst_102715;
var chan__53977__auto__ = inst_102748;
return (function (result__53978__auto__){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan__53977__auto__,result__53978__auto__);
});
})();
var inst_102752 = inst_102750.then(inst_102751);
var state_103159__$1 = (function (){var statearr_103172 = state_103159;
(statearr_103172[(13)] = inst_102752);

return statearr_103172;
})();
var statearr_103173_107508 = state_103159__$1;
(statearr_103173_107508[(2)] = inst_102748);

(statearr_103173_107508[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103160 === (59))){
var state_103159__$1 = state_103159;
var statearr_103174_107510 = state_103159__$1;
(statearr_103174_107510[(2)] = new cljs.core.Keyword(null,"pass","pass",1574159993));

(statearr_103174_107510[(1)] = (61));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103160 === (86))){
var inst_103132 = (state_103159[(2)]);
var inst_103133 = cljs.core.list(new cljs.core.Symbol(null,"await!","await!",-473046777,null),cljs.core.list(new cljs.core.Symbol("editor","change-result","editor/change-result",-914297300,null)));
var inst_103134 = /Interrupted/;
var inst_103135 = matcher_combinators.core.match(/Interrupted/,inst_103132);
var inst_103136 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_103132], 0));
var inst_103137 = new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(inst_103135);
var inst_103138 = matcher_combinators.printer.as_string(inst_103137);
var inst_103139 = [inst_103136,"\n\nMismatch:\n",inst_103138].join('');
var inst_103140 = new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(inst_103135);
var inst_103141 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),inst_103140);
var inst_103142 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363)];
var state_103159__$1 = (function (){var statearr_103175 = state_103159;
(statearr_103175[(14)] = inst_103142);

(statearr_103175[(15)] = inst_103134);

(statearr_103175[(16)] = inst_103133);

(statearr_103175[(17)] = inst_103139);

return statearr_103175;
})();
if(inst_103141){
var statearr_103176_107514 = state_103159__$1;
(statearr_103176_107514[(1)] = (90));

} else {
var statearr_103177_107515 = state_103159__$1;
(statearr_103177_107515[(1)] = (91));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103160 === (20))){
var inst_102801 = repl_tooling.integration.fake_editor.change_result();
var state_103159__$1 = state_103159;
var statearr_103178_107516 = state_103159__$1;
(statearr_103178_107516[(2)] = inst_102801);

(statearr_103178_107516[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103160 === (72))){
var inst_103050 = repl_tooling.integration.fake_editor.change_stdout();
var state_103159__$1 = state_103159;
var statearr_103179_107517 = state_103159__$1;
(statearr_103179_107517[(2)] = inst_103050);

(statearr_103179_107517[(1)] = (73));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103160 === (58))){
var inst_102982 = (state_103159[(2)]);
var state_103159__$1 = state_103159;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_103159__$1,(55),inst_102982);
} else {
if((state_val_103160 === (60))){
var state_103159__$1 = state_103159;
var statearr_103180_107518 = state_103159__$1;
(statearr_103180_107518[(2)] = new cljs.core.Keyword(null,"fail","fail",1706214930));

(statearr_103180_107518[(1)] = (61));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103160 === (27))){
var inst_102827 = (state_103159[(2)]);
var inst_102828 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_102829 = cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"re-find","re-find",1143444147,null),/=>/,cljs.core.list(new cljs.core.Symbol("editor","txt-for-selector","editor/txt-for-selector",-1957500269,null),"#stdout")));
var inst_102830 = ["repl_tooling/nrepl/nrepl_test.cljs",70,new cljs.core.Keyword(null,"error","error",-978969032),13,123,inst_102829,123,inst_102827,null];
var inst_102831 = cljs.core.PersistentHashMap.fromArrays(inst_102828,inst_102830);
var inst_102832 = cljs.test.report.call(null,inst_102831);
var state_103159__$1 = state_103159;
var statearr_103182_107519 = state_103159__$1;
(statearr_103182_107519[(2)] = inst_102832);

(statearr_103182_107519[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103160 === (1))){
var inst_102715 = (state_103159[(12)]);
var inst_102714 = (function (){return (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(repl_tooling.integration.fake_editor.state,cljs.core.assoc,new cljs.core.Keyword(null,"port","port",1534937262),(2233));

cljs.core.async.close_BANG_(self__.out);

repl_tooling.integration.fake_editor.disconnect_BANG_();

return (done__53962__auto__.cljs$core$IFn$_invoke$arity$0 ? done__53962__auto__.cljs$core$IFn$_invoke$arity$0() : done__53962__auto__.call(null));
});
})();
var inst_102715__$1 = (new cljs.core.Delay(inst_102714,null));
var inst_102716 = (function (){var mark_as_done__53963__auto__ = inst_102715__$1;
return (function (){
if(cljs.core.realized_QMARK_(mark_as_done__53963__auto__)){
return null;
} else {
try{var value__9156__auto___107522 = (function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Async test error - not finalized",cljs.core.PersistentArrayMap.EMPTY)})();
if(cljs.core.truth_(value__9156__auto___107522)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"pass","pass",1574159993),null,null,cljs.core.list(new cljs.core.Symbol(null,"throw","throw",595905694,null),cljs.core.list(new cljs.core.Symbol("clojure.core","ex-info","clojure.core/ex-info",-504237117,null),"Async test error - not finalized",cljs.core.PersistentArrayMap.EMPTY)),null,value__9156__auto___107522,null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"fail","fail",1706214930),null,null,cljs.core.list(new cljs.core.Symbol(null,"throw","throw",595905694,null),cljs.core.list(new cljs.core.Symbol("clojure.core","ex-info","clojure.core/ex-info",-504237117,null),"Async test error - not finalized",cljs.core.PersistentArrayMap.EMPTY)),null,value__9156__auto___107522,null]));
}

}catch (e103183){var t__9189__auto___107525 = e103183;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol(null,"throw","throw",595905694,null),cljs.core.list(new cljs.core.Symbol("clojure.core","ex-info","clojure.core/ex-info",-504237117,null),"Async test error - not finalized",cljs.core.PersistentArrayMap.EMPTY)),null,t__9189__auto___107525,null]));
}
return cljs.core.deref(mark_as_done__53963__auto__);
}
});
})();
var inst_102717 = setTimeout(inst_102716,(8000));
var inst_102718 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(repl_tooling.integration.fake_editor.state,cljs.core.assoc,new cljs.core.Keyword(null,"port","port",1534937262),(3322));
var inst_102719 = [new cljs.core.Keyword(null,"on-stderr","on-stderr",1583456038)];
var inst_102720 = (function (){var mark_as_done__53963__auto__ = inst_102715__$1;
return (function (p1__102709_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(repl_tooling.integration.fake_editor.state,cljs.core.update,new cljs.core.Keyword(null,"stdout","stdout",-531490018),(function (e){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(e),"Hi: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__102709_SHARP_)].join('');
}));
});
})();
var inst_102721 = [inst_102720];
var inst_102722 = cljs.core.PersistentHashMap.fromArrays(inst_102719,inst_102721);
var inst_102723 = repl_tooling.integration.fake_editor.connect_BANG_.cljs$core$IFn$_invoke$arity$1(inst_102722);
var inst_102724 = (inst_102723 instanceof Promise);
var state_103159__$1 = (function (){var statearr_103184 = state_103159;
(statearr_103184[(18)] = inst_102717);

(statearr_103184[(12)] = inst_102715__$1);

(statearr_103184[(19)] = inst_102718);

return statearr_103184;
})();
if(cljs.core.truth_(inst_102724)){
var statearr_103185_107527 = state_103159__$1;
(statearr_103185_107527[(1)] = (3));

} else {
var statearr_103186_107528 = state_103159__$1;
(statearr_103186_107528[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103160 === (69))){
var _ = (function (){var statearr_103187 = state_103159;
(statearr_103187[(4)] = cljs.core.rest((state_103159[(4)])));

return statearr_103187;
})();
var state_103159__$1 = state_103159;
var ex103181 = (state_103159__$1[(2)]);
var statearr_103188_107529 = state_103159__$1;
(statearr_103188_107529[(5)] = ex103181);


var statearr_103189_107530 = state_103159__$1;
(statearr_103189_107530[(1)] = (68));

(statearr_103189_107530[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103160 === (24))){
var inst_102807 = (state_103159[(20)]);
var inst_102812 = (state_103159[(21)]);
var inst_102815 = (state_103159[(22)]);
var inst_102819 = (state_103159[(2)]);
var inst_102820 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(inst_102812);
var inst_102821 = [inst_102819,inst_102807,inst_102820];
var inst_102822 = cljs.core.PersistentHashMap.fromArrays(inst_102815,inst_102821);
var inst_102823 = cljs.test.do_report(inst_102822);
var _ = (function (){var statearr_103191 = state_103159;
(statearr_103191[(4)] = cljs.core.rest((state_103159[(4)])));

return statearr_103191;
})();
var state_103159__$1 = state_103159;
var statearr_103192_107531 = state_103159__$1;
(statearr_103192_107531[(2)] = inst_102823);

(statearr_103192_107531[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103160 === (55))){
var inst_102984 = (state_103159[(2)]);
var inst_102985 = cljs.core.list(new cljs.core.Symbol(null,"await!","await!",-473046777,null),cljs.core.list(new cljs.core.Symbol("editor","change-stdout","editor/change-stdout",294315011,null)));
var inst_102986 = /:some-message/;
var inst_102987 = matcher_combinators.core.match(/:some-message/,inst_102984);
var inst_102988 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_102984], 0));
var inst_102989 = new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(inst_102987);
var inst_102990 = matcher_combinators.printer.as_string(inst_102989);
var inst_102991 = [inst_102988,"\n\nMismatch:\n",inst_102990].join('');
var inst_102992 = new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(inst_102987);
var inst_102993 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),inst_102992);
var inst_102994 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363)];
var state_103159__$1 = (function (){var statearr_103194 = state_103159;
(statearr_103194[(23)] = inst_102991);

(statearr_103194[(24)] = inst_102985);

(statearr_103194[(25)] = inst_102994);

(statearr_103194[(26)] = inst_102986);

return statearr_103194;
})();
if(inst_102993){
var statearr_103195_107538 = state_103159__$1;
(statearr_103195_107538[(1)] = (59));

} else {
var statearr_103196_107543 = state_103159__$1;
(statearr_103196_107543[(1)] = (60));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103160 === (85))){
var _ = (function (){var statearr_103197 = state_103159;
(statearr_103197[(4)] = cljs.core.rest((state_103159[(4)])));

return statearr_103197;
})();
var state_103159__$1 = state_103159;
var ex103190 = (state_103159__$1[(2)]);
var statearr_103198_107558 = state_103159__$1;
(statearr_103198_107558[(5)] = ex103190);


var statearr_103199_107560 = state_103159__$1;
(statearr_103199_107560[(1)] = (84));

(statearr_103199_107560[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103160 === (39))){
var _ = (function (){var statearr_103200 = state_103159;
(statearr_103200[(4)] = cljs.core.rest((state_103159[(4)])));

return statearr_103200;
})();
var state_103159__$1 = state_103159;
var ex103193 = (state_103159__$1[(2)]);
var statearr_103201_107561 = state_103159__$1;
(statearr_103201_107561[(5)] = ex103193);


var statearr_103202_107562 = state_103159__$1;
(statearr_103202_107562[(1)] = (38));

(statearr_103202_107562[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103160 === (88))){
var inst_103128 = repl_tooling.integration.fake_editor.change_result();
var state_103159__$1 = state_103159;
var statearr_103203_107563 = state_103159__$1;
(statearr_103203_107563[(2)] = inst_103128);

(statearr_103203_107563[(1)] = (89));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103160 === (46))){
var inst_102921 = (state_103159[(27)]);
var inst_102924 = (state_103159[(28)]);
var inst_102916 = (state_103159[(29)]);
var inst_102928 = (state_103159[(2)]);
var inst_102929 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(inst_102921);
var inst_102930 = [inst_102928,inst_102916,inst_102929];
var inst_102931 = cljs.core.PersistentHashMap.fromArrays(inst_102924,inst_102930);
var inst_102932 = cljs.test.do_report(inst_102931);
var _ = (function (){var statearr_103204 = state_103159;
(statearr_103204[(4)] = cljs.core.rest((state_103159[(4)])));

return statearr_103204;
})();
var state_103159__$1 = state_103159;
var statearr_103205_107566 = state_103159__$1;
(statearr_103205_107566[(2)] = inst_102932);

(statearr_103205_107566[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103160 === (4))){
var inst_102715 = (state_103159[(12)]);
var inst_102735 = [new cljs.core.Keyword(null,"on-stderr","on-stderr",1583456038)];
var inst_102736 = (function (){var mark_as_done__53963__auto__ = inst_102715;
return (function (p1__102709_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(repl_tooling.integration.fake_editor.state,cljs.core.update,new cljs.core.Keyword(null,"stdout","stdout",-531490018),(function (e){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(e),"Hi: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__102709_SHARP_)].join('');
}));
});
})();
var inst_102737 = [inst_102736];
var inst_102738 = cljs.core.PersistentHashMap.fromArrays(inst_102735,inst_102737);
var inst_102739 = repl_tooling.integration.fake_editor.connect_BANG_.cljs$core$IFn$_invoke$arity$1(inst_102738);
var state_103159__$1 = state_103159;
var statearr_103207_107570 = state_103159__$1;
(statearr_103207_107570[(2)] = inst_102739);

(statearr_103207_107570[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103160 === (77))){
var _ = (function (){var statearr_103208 = state_103159;
(statearr_103208[(4)] = cljs.core.cons((79),(state_103159[(4)])));

return statearr_103208;
})();
var ___$1 = (function (){var statearr_103209 = state_103159;
(statearr_103209[(4)] = cljs.core.cons((80),(state_103159[(4)])));

return statearr_103209;
})();
var inst_103096 = repl_tooling.integration.fake_editor.type_and_eval("(Thread/sleep 1000)");
var inst_103097 = cljs.core.async.timeout((200));
var state_103159__$1 = (function (){var statearr_103210 = state_103159;
(statearr_103210[(30)] = inst_103096);

return statearr_103210;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_103159__$1,(81),inst_103097);
} else {
if((state_val_103160 === (54))){
var _ = (function (){var statearr_103211 = state_103159;
(statearr_103211[(4)] = cljs.core.rest((state_103159[(4)])));

return statearr_103211;
})();
var state_103159__$1 = state_103159;
var ex103206 = (state_103159__$1[(2)]);
var statearr_103212_107588 = state_103159__$1;
(statearr_103212_107588[(5)] = ex103206);


var statearr_103213_107600 = state_103159__$1;
(statearr_103213_107600[(1)] = (53));

(statearr_103213_107600[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103160 === (92))){
var inst_103142 = (state_103159[(14)]);
var inst_103134 = (state_103159[(15)]);
var inst_103139 = (state_103159[(17)]);
var inst_103146 = (state_103159[(2)]);
var inst_103147 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(inst_103139);
var inst_103148 = [inst_103146,inst_103134,inst_103147];
var inst_103149 = cljs.core.PersistentHashMap.fromArrays(inst_103142,inst_103148);
var inst_103150 = cljs.test.do_report(inst_103149);
var _ = (function (){var statearr_103214 = state_103159;
(statearr_103214[(4)] = cljs.core.rest((state_103159[(4)])));

return statearr_103214;
})();
var state_103159__$1 = state_103159;
var statearr_103215_107611 = state_103159__$1;
(statearr_103215_107611[(2)] = inst_103150);

(statearr_103215_107611[(1)] = (83));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103160 === (15))){
var inst_102826 = (state_103159[(2)]);
var state_103159__$1 = (function (){var statearr_103217 = state_103159;
(statearr_103217[(31)] = inst_102826);

return statearr_103217;
})();
var statearr_103218_107618 = state_103159__$1;
(statearr_103218_107618[(2)] = null);

(statearr_103218_107618[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103160 === (48))){
var inst_103008 = (state_103159[(2)]);
var inst_103009 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_103010 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_103011 = (new cljs.core.PersistentVector(null,1,(5),inst_103009,inst_103010,null));
var inst_103012 = cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(inst_103011,cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["STDERR works"], 0));
var state_103159__$1 = (function (){var statearr_103219 = state_103159;
(statearr_103219[(32)] = inst_103008);

(statearr_103219[(33)] = inst_103012);

return statearr_103219;
})();
var statearr_103220_107633 = state_103159__$1;
(statearr_103220_107633[(2)] = null);

(statearr_103220_107633[(1)] = (62));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103160 === (50))){
var _ = (function (){var statearr_103221 = state_103159;
(statearr_103221[(4)] = cljs.core.rest((state_103159[(4)])));

return statearr_103221;
})();
var state_103159__$1 = state_103159;
var ex103216 = (state_103159__$1[(2)]);
var statearr_103222_107650 = state_103159__$1;
(statearr_103222_107650[(5)] = ex103216);


throw ex103216;


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103160 === (75))){
var state_103159__$1 = state_103159;
var statearr_103223_107651 = state_103159__$1;
(statearr_103223_107651[(2)] = new cljs.core.Keyword(null,"fail","fail",1706214930));

(statearr_103223_107651[(1)] = (76));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103160 === (21))){
var inst_102803 = (state_103159[(2)]);
var state_103159__$1 = state_103159;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_103159__$1,(18),inst_102803);
} else {
if((state_val_103160 === (31))){
var inst_102841 = (state_103159[(34)]);
var inst_102862 = (state_103159[(2)]);
var _ = (function (){var statearr_103224 = state_103159;
(statearr_103224[(4)] = cljs.core.rest((state_103159[(4)])));

return statearr_103224;
})();
var state_103159__$1 = (function (){var statearr_103225 = state_103159;
(statearr_103225[(35)] = inst_102862);

return statearr_103225;
})();
var statearr_103226_107665 = state_103159__$1;
(statearr_103226_107665[(2)] = inst_102841);

(statearr_103226_107665[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103160 === (32))){
var _ = (function (){var statearr_103227 = state_103159;
(statearr_103227[(4)] = cljs.core.cons((34),(state_103159[(4)])));

return statearr_103227;
})();
var ___$1 = (function (){var statearr_103228 = state_103159;
(statearr_103228[(4)] = cljs.core.cons((35),(state_103159[(4)])));

return statearr_103228;
})();
var inst_102886 = repl_tooling.integration.fake_editor.type_and_eval("(/ 10 0)");
var state_103159__$1 = (function (){var statearr_103229 = state_103159;
(statearr_103229[(36)] = inst_102886);

return statearr_103229;
})();
var statearr_103230_107691 = state_103159__$1;
(statearr_103230_107691[(2)] = null);

(statearr_103230_107691[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103160 === (40))){
var inst_102914 = (state_103159[(2)]);
var inst_102915 = cljs.core.list(new cljs.core.Symbol(null,"await!","await!",-473046777,null),cljs.core.list(new cljs.core.Symbol("editor","change-result","editor/change-result",-914297300,null)));
var inst_102916 = /java.lang.ArithmeticException/;
var inst_102917 = matcher_combinators.core.match(/java.lang.ArithmeticException/,inst_102914);
var inst_102918 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_102914], 0));
var inst_102919 = new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(inst_102917);
var inst_102920 = matcher_combinators.printer.as_string(inst_102919);
var inst_102921 = [inst_102918,"\n\nMismatch:\n",inst_102920].join('');
var inst_102922 = new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(inst_102917);
var inst_102923 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),inst_102922);
var inst_102924 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363)];
var state_103159__$1 = (function (){var statearr_103231 = state_103159;
(statearr_103231[(27)] = inst_102921);

(statearr_103231[(28)] = inst_102924);

(statearr_103231[(37)] = inst_102915);

(statearr_103231[(29)] = inst_102916);

return statearr_103231;
})();
if(inst_102923){
var statearr_103232_107717 = state_103159__$1;
(statearr_103232_107717[(1)] = (44));

} else {
var statearr_103233_107718 = state_103159__$1;
(statearr_103233_107718[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103160 === (91))){
var state_103159__$1 = state_103159;
var statearr_103234_107721 = state_103159__$1;
(statearr_103234_107721[(2)] = new cljs.core.Keyword(null,"fail","fail",1706214930));

(statearr_103234_107721[(1)] = (92));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103160 === (56))){
var inst_102715 = (state_103159[(12)]);
var inst_102975 = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var inst_102976 = repl_tooling.integration.fake_editor.change_stdout();
var inst_102977 = (function (){var mark_as_done__53963__auto__ = inst_102715;
var chan__53977__auto__ = inst_102975;
return (function (result__53978__auto__){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan__53977__auto__,result__53978__auto__);
});
})();
var inst_102978 = inst_102976.then(inst_102977);
var state_103159__$1 = (function (){var statearr_103236 = state_103159;
(statearr_103236[(38)] = inst_102978);

return statearr_103236;
})();
var statearr_103237_107739 = state_103159__$1;
(statearr_103237_107739[(2)] = inst_102975);

(statearr_103237_107739[(1)] = (58));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103160 === (33))){
var inst_102938 = (state_103159[(2)]);
var inst_102939 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_102940 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_102941 = (new cljs.core.PersistentVector(null,1,(5),inst_102939,inst_102940,null));
var inst_102942 = cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(inst_102941,cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["STDOUT works"], 0));
var state_103159__$1 = (function (){var statearr_103238 = state_103159;
(statearr_103238[(39)] = inst_102938);

(statearr_103238[(40)] = inst_102942);

return statearr_103238;
})();
var statearr_103239_107752 = state_103159__$1;
(statearr_103239_107752[(2)] = null);

(statearr_103239_107752[(1)] = (47));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103160 === (13))){
var _ = (function (){var statearr_103240 = state_103159;
(statearr_103240[(4)] = cljs.core.rest((state_103159[(4)])));

return statearr_103240;
})();
var state_103159__$1 = state_103159;
var ex103235 = (state_103159__$1[(2)]);
var statearr_103241_107761 = state_103159__$1;
(statearr_103241_107761[(5)] = ex103235);


throw ex103235;


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103160 === (22))){
var state_103159__$1 = state_103159;
var statearr_103242_107768 = state_103159__$1;
(statearr_103242_107768[(2)] = new cljs.core.Keyword(null,"pass","pass",1574159993));

(statearr_103242_107768[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103160 === (90))){
var state_103159__$1 = state_103159;
var statearr_103243_107770 = state_103159__$1;
(statearr_103243_107770[(2)] = new cljs.core.Keyword(null,"pass","pass",1574159993));

(statearr_103243_107770[(1)] = (92));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103160 === (36))){
var _ = (function (){var statearr_103244 = state_103159;
(statearr_103244[(4)] = cljs.core.cons((39),(state_103159[(4)])));

return statearr_103244;
})();
var inst_102902 = repl_tooling.integration.fake_editor.change_result();
var inst_102903 = (inst_102902 instanceof Promise);
var state_103159__$1 = state_103159;
if(cljs.core.truth_(inst_102903)){
var statearr_103245_107785 = state_103159__$1;
(statearr_103245_107785[(1)] = (41));

} else {
var statearr_103246_107787 = state_103159__$1;
(statearr_103246_107787[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103160 === (41))){
var inst_102715 = (state_103159[(12)]);
var inst_102905 = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var inst_102906 = repl_tooling.integration.fake_editor.change_result();
var inst_102907 = (function (){var mark_as_done__53963__auto__ = inst_102715;
var chan__53977__auto__ = inst_102905;
return (function (result__53978__auto__){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan__53977__auto__,result__53978__auto__);
});
})();
var inst_102908 = inst_102906.then(inst_102907);
var state_103159__$1 = (function (){var statearr_103247 = state_103159;
(statearr_103247[(41)] = inst_102908);

return statearr_103247;
})();
var statearr_103248_107801 = state_103159__$1;
(statearr_103248_107801[(2)] = inst_102905);

(statearr_103248_107801[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103160 === (89))){
var inst_103130 = (state_103159[(2)]);
var state_103159__$1 = state_103159;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_103159__$1,(86),inst_103130);
} else {
if((state_val_103160 === (43))){
var inst_102912 = (state_103159[(2)]);
var state_103159__$1 = state_103159;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_103159__$1,(40),inst_102912);
} else {
if((state_val_103160 === (61))){
var inst_102991 = (state_103159[(23)]);
var inst_102994 = (state_103159[(25)]);
var inst_102986 = (state_103159[(26)]);
var inst_102998 = (state_103159[(2)]);
var inst_102999 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(inst_102991);
var inst_103000 = [inst_102998,inst_102986,inst_102999];
var inst_103001 = cljs.core.PersistentHashMap.fromArrays(inst_102994,inst_103000);
var inst_103002 = cljs.test.do_report(inst_103001);
var _ = (function (){var statearr_103249 = state_103159;
(statearr_103249[(4)] = cljs.core.rest((state_103159[(4)])));

return statearr_103249;
})();
var state_103159__$1 = state_103159;
var statearr_103250_107838 = state_103159__$1;
(statearr_103250_107838[(2)] = inst_103002);

(statearr_103250_107838[(1)] = (52));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103160 === (29))){
var inst_102840 = (state_103159[(42)]);
var inst_102843 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_102844 = cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"re-find","re-find",1143444147,null),/=>/,cljs.core.list(new cljs.core.Symbol("editor","txt-for-selector","editor/txt-for-selector",-1957500269,null),"#stdout")));
var inst_102845 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_102846 = cljs.core.cons(inst_102845,inst_102840);
var inst_102847 = ["repl_tooling/nrepl/nrepl_test.cljs",70,new cljs.core.Keyword(null,"pass","pass",1574159993),13,123,inst_102844,123,inst_102846,null];
var inst_102848 = cljs.core.PersistentHashMap.fromArrays(inst_102843,inst_102847);
var inst_102849 = cljs.test.report.call(null,inst_102848);
var state_103159__$1 = state_103159;
var statearr_103251_107854 = state_103159__$1;
(statearr_103251_107854[(2)] = inst_102849);

(statearr_103251_107854[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103160 === (44))){
var state_103159__$1 = state_103159;
var statearr_103253_107867 = state_103159__$1;
(statearr_103253_107867[(2)] = new cljs.core.Keyword(null,"pass","pass",1574159993));

(statearr_103253_107867[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103160 === (6))){
var inst_102759 = (state_103159[(2)]);
var inst_102760 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_102761 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_102762 = (new cljs.core.PersistentVector(null,1,(5),inst_102760,inst_102761,null));
var inst_102763 = cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(inst_102762,cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["evaluation works"], 0));
var state_103159__$1 = (function (){var statearr_103254 = state_103159;
(statearr_103254[(43)] = inst_102763);

(statearr_103254[(44)] = inst_102759);

return statearr_103254;
})();
var statearr_103255_107873 = state_103159__$1;
(statearr_103255_107873[(2)] = null);

(statearr_103255_107873[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103160 === (28))){
var _ = (function (){var statearr_103256 = state_103159;
(statearr_103256[(4)] = cljs.core.rest((state_103159[(4)])));

return statearr_103256;
})();
var state_103159__$1 = state_103159;
var ex103252 = (state_103159__$1[(2)]);
var statearr_103257_107885 = state_103159__$1;
(statearr_103257_107885[(5)] = ex103252);


var statearr_103258_107886 = state_103159__$1;
(statearr_103258_107886[(1)] = (27));

(statearr_103258_107886[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103160 === (64))){
var _ = (function (){var statearr_103259 = state_103159;
(statearr_103259[(4)] = cljs.core.rest((state_103159[(4)])));

return statearr_103259;
})();
var inst_103014 = (state_103159[(2)]);
var inst_103015 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_103016 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_103017 = (new cljs.core.PersistentVector(null,1,(5),inst_103015,inst_103016,null));
var inst_103018 = cljs.test.update_current_env_BANG_(inst_103017,cljs.core.rest);
var ___$1 = (function (){var temp__5753__auto__ = (state_103159[(5)]);
if(cljs.core.truth_(temp__5753__auto__)){
var e__34184__auto__ = temp__5753__auto__;
throw e__34184__auto__;
} else {
return null;
}
})();
var state_103159__$1 = (function (){var statearr_103260 = state_103159;
(statearr_103260[(45)] = inst_103018);

return statearr_103260;
})();
var statearr_103261_107912 = state_103159__$1;
(statearr_103261_107912[(2)] = inst_103014);

(statearr_103261_107912[(1)] = (63));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103160 === (51))){
var _ = (function (){var statearr_103262 = state_103159;
(statearr_103262[(4)] = cljs.core.cons((54),(state_103159[(4)])));

return statearr_103262;
})();
var inst_102972 = repl_tooling.integration.fake_editor.change_stdout();
var inst_102973 = (inst_102972 instanceof Promise);
var state_103159__$1 = state_103159;
if(cljs.core.truth_(inst_102973)){
var statearr_103263_107929 = state_103159__$1;
(statearr_103263_107929[(1)] = (56));

} else {
var statearr_103264_107931 = state_103159__$1;
(statearr_103264_107931[(1)] = (57));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103160 === (25))){
var inst_102840 = (state_103159[(42)]);
var inst_102841 = (state_103159[(34)]);
var _ = (function (){var statearr_103266 = state_103159;
(statearr_103266[(4)] = cljs.core.cons((28),(state_103159[(4)])));

return statearr_103266;
})();
var inst_102838 = repl_tooling.integration.fake_editor.txt_for_selector("#stdout");
var inst_102839 = cljs.core.re_find(/=>/,inst_102838);
var inst_102840__$1 = (new cljs.core.List(null,inst_102839,null,(1),null));
var inst_102841__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.not,inst_102840__$1);
var state_103159__$1 = (function (){var statearr_103267 = state_103159;
(statearr_103267[(42)] = inst_102840__$1);

(statearr_103267[(34)] = inst_102841__$1);

return statearr_103267;
})();
if(cljs.core.truth_(inst_102841__$1)){
var statearr_103268_107946 = state_103159__$1;
(statearr_103268_107946[(1)] = (29));

} else {
var statearr_103269_107948 = state_103159__$1;
(statearr_103269_107948[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103160 === (34))){
var _ = (function (){var statearr_103270 = state_103159;
(statearr_103270[(4)] = cljs.core.rest((state_103159[(4)])));

return statearr_103270;
})();
var inst_102874 = (state_103159[(2)]);
var inst_102875 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_102876 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_102877 = (new cljs.core.PersistentVector(null,1,(5),inst_102875,inst_102876,null));
var inst_102878 = cljs.test.update_current_env_BANG_(inst_102877,cljs.core.rest);
var ___$1 = (function (){var temp__5753__auto__ = (state_103159[(5)]);
if(cljs.core.truth_(temp__5753__auto__)){
var e__34184__auto__ = temp__5753__auto__;
throw e__34184__auto__;
} else {
return null;
}
})();
var state_103159__$1 = (function (){var statearr_103271 = state_103159;
(statearr_103271[(46)] = inst_102878);

return statearr_103271;
})();
var statearr_103272_107967 = state_103159__$1;
(statearr_103272_107967[(2)] = inst_102874);

(statearr_103272_107967[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103160 === (17))){
var _ = (function (){var statearr_103273 = state_103159;
(statearr_103273[(4)] = cljs.core.rest((state_103159[(4)])));

return statearr_103273;
})();
var state_103159__$1 = state_103159;
var ex103265 = (state_103159__$1[(2)]);
var statearr_103274_107977 = state_103159__$1;
(statearr_103274_107977[(5)] = ex103265);


var statearr_103275_107979 = state_103159__$1;
(statearr_103275_107979[(1)] = (16));

(statearr_103275_107979[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103160 === (3))){
var inst_102715 = (state_103159[(12)]);
var inst_102726 = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var inst_102727 = [new cljs.core.Keyword(null,"on-stderr","on-stderr",1583456038)];
var inst_102728 = (function (){var mark_as_done__53963__auto__ = inst_102715;
var chan__53977__auto__ = inst_102726;
return (function (p1__102709_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(repl_tooling.integration.fake_editor.state,cljs.core.update,new cljs.core.Keyword(null,"stdout","stdout",-531490018),(function (e){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(e),"Hi: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__102709_SHARP_)].join('');
}));
});
})();
var inst_102729 = [inst_102728];
var inst_102730 = cljs.core.PersistentHashMap.fromArrays(inst_102727,inst_102729);
var inst_102731 = repl_tooling.integration.fake_editor.connect_BANG_.cljs$core$IFn$_invoke$arity$1(inst_102730);
var inst_102732 = (function (){var mark_as_done__53963__auto__ = inst_102715;
var chan__53977__auto__ = inst_102726;
return (function (result__53978__auto__){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan__53977__auto__,result__53978__auto__);
});
})();
var inst_102733 = inst_102731.then(inst_102732);
var state_103159__$1 = (function (){var statearr_103276 = state_103159;
(statearr_103276[(47)] = inst_102733);

return statearr_103276;
})();
var statearr_103277_108022 = state_103159__$1;
(statearr_103277_108022[(2)] = inst_102726);

(statearr_103277_108022[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103160 === (12))){
var _ = (function (){var statearr_103278 = state_103159;
(statearr_103278[(4)] = cljs.core.rest((state_103159[(4)])));

return statearr_103278;
})();
var inst_102765 = (state_103159[(2)]);
var inst_102766 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_102767 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_102768 = (new cljs.core.PersistentVector(null,1,(5),inst_102766,inst_102767,null));
var inst_102769 = cljs.test.update_current_env_BANG_(inst_102768,cljs.core.rest);
var ___$1 = (function (){var temp__5753__auto__ = (state_103159[(5)]);
if(cljs.core.truth_(temp__5753__auto__)){
var e__34184__auto__ = temp__5753__auto__;
throw e__34184__auto__;
} else {
return null;
}
})();
var state_103159__$1 = (function (){var statearr_103279 = state_103159;
(statearr_103279[(48)] = inst_102769);

return statearr_103279;
})();
var statearr_103280_108043 = state_103159__$1;
(statearr_103280_108043[(2)] = inst_102765);

(statearr_103280_108043[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103160 === (2))){
var inst_102715 = (state_103159[(12)]);
var inst_102743 = (state_103159[(2)]);
var inst_102744 = (function (){var mark_as_done__53963__auto__ = inst_102715;
return (function (){
return new cljs.core.Keyword(null,"eval","eval",-1103567905).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"repls","repls",870822864).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(repl_tooling.integration.fake_editor.state)));
});
})();
var inst_102745 = repl_tooling.integration.fake_editor.wait_for(inst_102744);
var inst_102746 = (inst_102745 instanceof Promise);
var state_103159__$1 = (function (){var statearr_103281 = state_103159;
(statearr_103281[(49)] = inst_102743);

return statearr_103281;
})();
if(cljs.core.truth_(inst_102746)){
var statearr_103282_108055 = state_103159__$1;
(statearr_103282_108055[(1)] = (7));

} else {
var statearr_103283_108056 = state_103159__$1;
(statearr_103283_108056[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103160 === (66))){
var _ = (function (){var statearr_103284 = state_103159;
(statearr_103284[(4)] = cljs.core.cons((69),(state_103159[(4)])));

return statearr_103284;
})();
var inst_103042 = repl_tooling.integration.fake_editor.change_stdout();
var inst_103043 = (inst_103042 instanceof Promise);
var state_103159__$1 = state_103159;
if(cljs.core.truth_(inst_103043)){
var statearr_103285_108068 = state_103159__$1;
(statearr_103285_108068[(1)] = (71));

} else {
var statearr_103286_108069 = state_103159__$1;
(statearr_103286_108069[(1)] = (72));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103160 === (23))){
var state_103159__$1 = state_103159;
var statearr_103288_108076 = state_103159__$1;
(statearr_103288_108076[(2)] = new cljs.core.Keyword(null,"fail","fail",1706214930));

(statearr_103288_108076[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103160 === (47))){
var _ = (function (){var statearr_103289 = state_103159;
(statearr_103289[(4)] = cljs.core.cons((49),(state_103159[(4)])));

return statearr_103289;
})();
var ___$1 = (function (){var statearr_103290 = state_103159;
(statearr_103290[(4)] = cljs.core.cons((50),(state_103159[(4)])));

return statearr_103290;
})();
var inst_102956 = repl_tooling.integration.fake_editor.type_and_eval("(prn :some-message)");
var state_103159__$1 = (function (){var statearr_103291 = state_103159;
(statearr_103291[(50)] = inst_102956);

return statearr_103291;
})();
var statearr_103292_108094 = state_103159__$1;
(statearr_103292_108094[(2)] = null);

(statearr_103292_108094[(1)] = (51));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103160 === (35))){
var _ = (function (){var statearr_103293 = state_103159;
(statearr_103293[(4)] = cljs.core.rest((state_103159[(4)])));

return statearr_103293;
})();
var state_103159__$1 = state_103159;
var ex103287 = (state_103159__$1[(2)]);
var statearr_103294_108095 = state_103159__$1;
(statearr_103294_108095[(5)] = ex103287);


throw ex103287;


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103160 === (82))){
var _ = (function (){var statearr_103295 = state_103159;
(statearr_103295[(4)] = cljs.core.cons((85),(state_103159[(4)])));

return statearr_103295;
})();
var inst_103120 = repl_tooling.integration.fake_editor.change_result();
var inst_103121 = (inst_103120 instanceof Promise);
var state_103159__$1 = state_103159;
if(cljs.core.truth_(inst_103121)){
var statearr_103296_108096 = state_103159__$1;
(statearr_103296_108096[(1)] = (87));

} else {
var statearr_103297_108097 = state_103159__$1;
(statearr_103297_108097[(1)] = (88));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103160 === (76))){
var inst_103061 = (state_103159[(8)]);
var inst_103064 = (state_103159[(9)]);
var inst_103056 = (state_103159[(10)]);
var inst_103068 = (state_103159[(2)]);
var inst_103069 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(inst_103061);
var inst_103070 = [inst_103068,inst_103056,inst_103069];
var inst_103071 = cljs.core.PersistentHashMap.fromArrays(inst_103064,inst_103070);
var inst_103072 = cljs.test.do_report(inst_103071);
var _ = (function (){var statearr_103298 = state_103159;
(statearr_103298[(4)] = cljs.core.rest((state_103159[(4)])));

return statearr_103298;
})();
var state_103159__$1 = state_103159;
var statearr_103299_108098 = state_103159__$1;
(statearr_103299_108098[(2)] = inst_103072);

(statearr_103299_108098[(1)] = (67));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103160 === (19))){
var inst_102715 = (state_103159[(12)]);
var inst_102796 = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var inst_102797 = repl_tooling.integration.fake_editor.change_result();
var inst_102798 = (function (){var mark_as_done__53963__auto__ = inst_102715;
var chan__53977__auto__ = inst_102796;
return (function (result__53978__auto__){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan__53977__auto__,result__53978__auto__);
});
})();
var inst_102799 = inst_102797.then(inst_102798);
var state_103159__$1 = (function (){var statearr_103300 = state_103159;
(statearr_103300[(51)] = inst_102799);

return statearr_103300;
})();
var statearr_103301_108100 = state_103159__$1;
(statearr_103301_108100[(2)] = inst_102796);

(statearr_103301_108100[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103160 === (57))){
var inst_102980 = repl_tooling.integration.fake_editor.change_stdout();
var state_103159__$1 = state_103159;
var statearr_103302_108101 = state_103159__$1;
(statearr_103302_108101[(2)] = inst_102980);

(statearr_103302_108101[(1)] = (58));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103160 === (68))){
var inst_103027 = (state_103159[(2)]);
var inst_103028 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_103029 = check.core.normalize_error(inst_103027);
var inst_103030 = cljs.core.list(new cljs.core.Symbol(null,"await!","await!",-473046777,null),cljs.core.list(new cljs.core.Symbol("editor","change-stdout","editor/change-stdout",294315011,null)));
var inst_103031 = new cljs.core.Symbol(null,"=>","=>",-813269641,null);
var inst_103032 = /Hi: :some-error/;
var inst_103033 = ["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_103030)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_103031)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_103032)].join('');
var inst_103034 = [new cljs.core.Keyword(null,"error","error",-978969032),/Hi: :some-error/,inst_103029,inst_103033];
var inst_103035 = cljs.core.PersistentHashMap.fromArrays(inst_103028,inst_103034);
var inst_103036 = cljs.test.do_report(inst_103035);
var state_103159__$1 = state_103159;
var statearr_103303_108102 = state_103159__$1;
(statearr_103303_108102[(2)] = inst_103036);

(statearr_103303_108102[(1)] = (67));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103160 === (11))){
var inst_102868 = (state_103159[(2)]);
var inst_102869 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_102870 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_102871 = (new cljs.core.PersistentVector(null,1,(5),inst_102869,inst_102870,null));
var inst_102872 = cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(inst_102871,cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["exception works"], 0));
var state_103159__$1 = (function (){var statearr_103304 = state_103159;
(statearr_103304[(52)] = inst_102868);

(statearr_103304[(53)] = inst_102872);

return statearr_103304;
})();
var statearr_103305_108103 = state_103159__$1;
(statearr_103305_108103[(2)] = null);

(statearr_103305_108103[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103160 === (9))){
var inst_102757 = (state_103159[(2)]);
var state_103159__$1 = state_103159;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_103159__$1,(6),inst_102757);
} else {
if((state_val_103160 === (5))){
var inst_102741 = (state_103159[(2)]);
var state_103159__$1 = state_103159;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_103159__$1,(2),inst_102741);
} else {
if((state_val_103160 === (83))){
var inst_103153 = (state_103159[(2)]);
var _ = (function (){var statearr_103306 = state_103159;
(statearr_103306[(4)] = cljs.core.rest((state_103159[(4)])));

return statearr_103306;
})();
var state_103159__$1 = state_103159;
var statearr_103307_108104 = state_103159__$1;
(statearr_103307_108104[(2)] = inst_103153);

(statearr_103307_108104[(1)] = (79));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103160 === (14))){
var _ = (function (){var statearr_103308 = state_103159;
(statearr_103308[(4)] = cljs.core.cons((17),(state_103159[(4)])));

return statearr_103308;
})();
var inst_102793 = repl_tooling.integration.fake_editor.change_result();
var inst_102794 = (inst_102793 instanceof Promise);
var state_103159__$1 = state_103159;
if(cljs.core.truth_(inst_102794)){
var statearr_103309_108106 = state_103159__$1;
(statearr_103309_108106[(1)] = (19));

} else {
var statearr_103310_108107 = state_103159__$1;
(statearr_103310_108107[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103160 === (45))){
var state_103159__$1 = state_103159;
var statearr_103311_108108 = state_103159__$1;
(statearr_103311_108108[(2)] = new cljs.core.Keyword(null,"fail","fail",1706214930));

(statearr_103311_108108[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103160 === (53))){
var inst_102957 = (state_103159[(2)]);
var inst_102958 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_102959 = check.core.normalize_error(inst_102957);
var inst_102960 = cljs.core.list(new cljs.core.Symbol(null,"await!","await!",-473046777,null),cljs.core.list(new cljs.core.Symbol("editor","change-stdout","editor/change-stdout",294315011,null)));
var inst_102961 = new cljs.core.Symbol(null,"=>","=>",-813269641,null);
var inst_102962 = /:some-message/;
var inst_102963 = ["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_102960)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_102961)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_102962)].join('');
var inst_102964 = [new cljs.core.Keyword(null,"error","error",-978969032),/:some-message/,inst_102959,inst_102963];
var inst_102965 = cljs.core.PersistentHashMap.fromArrays(inst_102958,inst_102964);
var inst_102966 = cljs.test.do_report(inst_102965);
var state_103159__$1 = state_103159;
var statearr_103312_108109 = state_103159__$1;
(statearr_103312_108109[(2)] = inst_102966);

(statearr_103312_108109[(1)] = (52));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103160 === (78))){
var inst_102715 = (state_103159[(12)]);
var inst_103156 = (state_103159[(2)]);
var inst_103157 = cljs.core.deref(inst_102715);
var state_103159__$1 = (function (){var statearr_103313 = state_103159;
(statearr_103313[(54)] = inst_103156);

return statearr_103313;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_103159__$1,inst_103157);
} else {
if((state_val_103160 === (26))){
var inst_102865 = (state_103159[(2)]);
var _ = (function (){var statearr_103314 = state_103159;
(statearr_103314[(4)] = cljs.core.rest((state_103159[(4)])));

return statearr_103314;
})();
var state_103159__$1 = state_103159;
var statearr_103315_108110 = state_103159__$1;
(statearr_103315_108110[(2)] = inst_102865);

(statearr_103315_108110[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103160 === (16))){
var inst_102778 = (state_103159[(2)]);
var inst_102779 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_102780 = check.core.normalize_error(inst_102778);
var inst_102781 = cljs.core.list(new cljs.core.Symbol(null,"await!","await!",-473046777,null),cljs.core.list(new cljs.core.Symbol("editor","change-result","editor/change-result",-914297300,null)));
var inst_102782 = new cljs.core.Symbol(null,"=>","=>",-813269641,null);
var inst_102783 = "5";
var inst_102784 = ["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_102781)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_102782)," ",inst_102783].join('');
var inst_102785 = [new cljs.core.Keyword(null,"error","error",-978969032),"5",inst_102780,inst_102784];
var inst_102786 = cljs.core.PersistentHashMap.fromArrays(inst_102779,inst_102785);
var inst_102787 = cljs.test.do_report(inst_102786);
var state_103159__$1 = state_103159;
var statearr_103316_108112 = state_103159__$1;
(statearr_103316_108112[(2)] = inst_102787);

(statearr_103316_108112[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103160 === (81))){
var inst_103099 = (state_103159[(2)]);
var inst_103100 = cljs.core.deref(repl_tooling.integration.fake_editor.state);
var inst_103101 = new cljs.core.Keyword(null,"commands","commands",161008658).cljs$core$IFn$_invoke$arity$1(inst_103100);
var inst_103102 = new cljs.core.Keyword(null,"break-evaluation","break-evaluation",580088387).cljs$core$IFn$_invoke$arity$1(inst_103101);
var inst_103103 = new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(inst_103102);
var inst_103104 = (inst_103103.cljs$core$IFn$_invoke$arity$0 ? inst_103103.cljs$core$IFn$_invoke$arity$0() : inst_103103.call(null));
var state_103159__$1 = (function (){var statearr_103317 = state_103159;
(statearr_103317[(55)] = inst_103099);

(statearr_103317[(56)] = inst_103104);

return statearr_103317;
})();
var statearr_103318_108115 = state_103159__$1;
(statearr_103318_108115[(2)] = null);

(statearr_103318_108115[(1)] = (82));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103160 === (79))){
var _ = (function (){var statearr_103319 = state_103159;
(statearr_103319[(4)] = cljs.core.rest((state_103159[(4)])));

return statearr_103319;
})();
var inst_103084 = (state_103159[(2)]);
var inst_103085 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_103086 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_103087 = (new cljs.core.PersistentVector(null,1,(5),inst_103085,inst_103086,null));
var inst_103088 = cljs.test.update_current_env_BANG_(inst_103087,cljs.core.rest);
var ___$1 = (function (){var temp__5753__auto__ = (state_103159[(5)]);
if(cljs.core.truth_(temp__5753__auto__)){
var e__34184__auto__ = temp__5753__auto__;
throw e__34184__auto__;
} else {
return null;
}
})();
var state_103159__$1 = (function (){var statearr_103320 = state_103159;
(statearr_103320[(57)] = inst_103088);

return statearr_103320;
})();
var statearr_103321_108118 = state_103159__$1;
(statearr_103321_108118[(2)] = inst_103084);

(statearr_103321_108118[(1)] = (78));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103160 === (38))){
var inst_102887 = (state_103159[(2)]);
var inst_102888 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_102889 = check.core.normalize_error(inst_102887);
var inst_102890 = cljs.core.list(new cljs.core.Symbol(null,"await!","await!",-473046777,null),cljs.core.list(new cljs.core.Symbol("editor","change-result","editor/change-result",-914297300,null)));
var inst_102891 = new cljs.core.Symbol(null,"=>","=>",-813269641,null);
var inst_102892 = /java.lang.ArithmeticException/;
var inst_102893 = ["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_102890)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_102891)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_102892)].join('');
var inst_102894 = [new cljs.core.Keyword(null,"error","error",-978969032),/java.lang.ArithmeticException/,inst_102889,inst_102893];
var inst_102895 = cljs.core.PersistentHashMap.fromArrays(inst_102888,inst_102894);
var inst_102896 = cljs.test.do_report(inst_102895);
var state_103159__$1 = state_103159;
var statearr_103322_108121 = state_103159__$1;
(statearr_103322_108121[(2)] = inst_102896);

(statearr_103322_108121[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103160 === (87))){
var inst_102715 = (state_103159[(12)]);
var inst_103123 = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var inst_103124 = repl_tooling.integration.fake_editor.change_result();
var inst_103125 = (function (){var mark_as_done__53963__auto__ = inst_102715;
var chan__53977__auto__ = inst_103123;
return (function (result__53978__auto__){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan__53977__auto__,result__53978__auto__);
});
})();
var inst_103126 = inst_103124.then(inst_103125);
var state_103159__$1 = (function (){var statearr_103323 = state_103159;
(statearr_103323[(58)] = inst_103126);

return statearr_103323;
})();
var statearr_103324_108123 = state_103159__$1;
(statearr_103324_108123[(2)] = inst_103123);

(statearr_103324_108123[(1)] = (89));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103160 === (30))){
var inst_102840 = (state_103159[(42)]);
var inst_102851 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_102852 = cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"re-find","re-find",1143444147,null),/=>/,cljs.core.list(new cljs.core.Symbol("editor","txt-for-selector","editor/txt-for-selector",-1957500269,null),"#stdout")));
var inst_102853 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_102854 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_102855 = cljs.core.cons(inst_102854,inst_102840);
var inst_102856 = (new cljs.core.List(null,inst_102855,null,(1),null));
var inst_102857 = (new cljs.core.List(null,inst_102853,inst_102856,(2),null));
var inst_102858 = ["repl_tooling/nrepl/nrepl_test.cljs",70,new cljs.core.Keyword(null,"fail","fail",1706214930),13,123,inst_102852,123,inst_102857,null];
var inst_102859 = cljs.core.PersistentHashMap.fromArrays(inst_102851,inst_102858);
var inst_102860 = cljs.test.report.call(null,inst_102859);
var state_103159__$1 = state_103159;
var statearr_103325_108126 = state_103159__$1;
(statearr_103325_108126[(2)] = inst_102860);

(statearr_103325_108126[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103160 === (73))){
var inst_103052 = (state_103159[(2)]);
var state_103159__$1 = state_103159;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_103159__$1,(70),inst_103052);
} else {
if((state_val_103160 === (10))){
var _ = (function (){var statearr_103326 = state_103159;
(statearr_103326[(4)] = cljs.core.cons((12),(state_103159[(4)])));

return statearr_103326;
})();
var ___$1 = (function (){var statearr_103327 = state_103159;
(statearr_103327[(4)] = cljs.core.cons((13),(state_103159[(4)])));

return statearr_103327;
})();
var inst_102777 = repl_tooling.integration.fake_editor.type_and_eval("(+ 2 3)");
var state_103159__$1 = (function (){var statearr_103328 = state_103159;
(statearr_103328[(59)] = inst_102777);

return statearr_103328;
})();
var statearr_103329_108127 = state_103159__$1;
(statearr_103329_108127[(2)] = null);

(statearr_103329_108127[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103160 === (18))){
var inst_102805 = (state_103159[(2)]);
var inst_102806 = cljs.core.list(new cljs.core.Symbol(null,"await!","await!",-473046777,null),cljs.core.list(new cljs.core.Symbol("editor","change-result","editor/change-result",-914297300,null)));
var inst_102807 = "5";
var inst_102808 = matcher_combinators.core.match("5",inst_102805);
var inst_102809 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_102805], 0));
var inst_102810 = new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(inst_102808);
var inst_102811 = matcher_combinators.printer.as_string(inst_102810);
var inst_102812 = [inst_102809,"\n\nMismatch:\n",inst_102811].join('');
var inst_102813 = new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(inst_102808);
var inst_102814 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),inst_102813);
var inst_102815 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363)];
var state_103159__$1 = (function (){var statearr_103330 = state_103159;
(statearr_103330[(20)] = inst_102807);

(statearr_103330[(60)] = inst_102806);

(statearr_103330[(21)] = inst_102812);

(statearr_103330[(22)] = inst_102815);

return statearr_103330;
})();
if(inst_102814){
var statearr_103331_108131 = state_103159__$1;
(statearr_103331_108131[(1)] = (22));

} else {
var statearr_103332_108132 = state_103159__$1;
(statearr_103332_108132[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103160 === (52))){
var inst_103005 = (state_103159[(2)]);
var _ = (function (){var statearr_103333 = state_103159;
(statearr_103333[(4)] = cljs.core.rest((state_103159[(4)])));

return statearr_103333;
})();
var state_103159__$1 = state_103159;
var statearr_103334_108133 = state_103159__$1;
(statearr_103334_108133[(2)] = inst_103005);

(statearr_103334_108133[(1)] = (49));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103160 === (67))){
var inst_103075 = (state_103159[(2)]);
var _ = (function (){var statearr_103335 = state_103159;
(statearr_103335[(4)] = cljs.core.rest((state_103159[(4)])));

return statearr_103335;
})();
var state_103159__$1 = state_103159;
var statearr_103336_108136 = state_103159__$1;
(statearr_103336_108136[(2)] = inst_103075);

(statearr_103336_108136[(1)] = (64));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103160 === (71))){
var inst_102715 = (state_103159[(12)]);
var inst_103045 = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var inst_103046 = repl_tooling.integration.fake_editor.change_stdout();
var inst_103047 = (function (){var mark_as_done__53963__auto__ = inst_102715;
var chan__53977__auto__ = inst_103045;
return (function (result__53978__auto__){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan__53977__auto__,result__53978__auto__);
});
})();
var inst_103048 = inst_103046.then(inst_103047);
var state_103159__$1 = (function (){var statearr_103338 = state_103159;
(statearr_103338[(61)] = inst_103048);

return statearr_103338;
})();
var statearr_103339_108137 = state_103159__$1;
(statearr_103339_108137[(2)] = inst_103045);

(statearr_103339_108137[(1)] = (73));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103160 === (42))){
var inst_102910 = repl_tooling.integration.fake_editor.change_result();
var state_103159__$1 = state_103159;
var statearr_103340_108138 = state_103159__$1;
(statearr_103340_108138[(2)] = inst_102910);

(statearr_103340_108138[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103160 === (80))){
var _ = (function (){var statearr_103341 = state_103159;
(statearr_103341[(4)] = cljs.core.rest((state_103159[(4)])));

return statearr_103341;
})();
var state_103159__$1 = state_103159;
var ex103337 = (state_103159__$1[(2)]);
var statearr_103342_108140 = state_103159__$1;
(statearr_103342_108140[(5)] = ex103337);


throw ex103337;


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103160 === (37))){
var inst_102935 = (state_103159[(2)]);
var _ = (function (){var statearr_103343 = state_103159;
(statearr_103343[(4)] = cljs.core.rest((state_103159[(4)])));

return statearr_103343;
})();
var state_103159__$1 = state_103159;
var statearr_103344_108141 = state_103159__$1;
(statearr_103344_108141[(2)] = inst_102935);

(statearr_103344_108141[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103160 === (63))){
var inst_103078 = (state_103159[(2)]);
var inst_103079 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_103080 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_103081 = (new cljs.core.PersistentVector(null,1,(5),inst_103079,inst_103080,null));
var inst_103082 = cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(inst_103081,cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["break works"], 0));
var state_103159__$1 = (function (){var statearr_103345 = state_103159;
(statearr_103345[(62)] = inst_103078);

(statearr_103345[(63)] = inst_103082);

return statearr_103345;
})();
var statearr_103346_108142 = state_103159__$1;
(statearr_103346_108142[(2)] = null);

(statearr_103346_108142[(1)] = (77));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103160 === (8))){
var inst_102715 = (state_103159[(12)]);
var inst_102754 = (function (){var mark_as_done__53963__auto__ = inst_102715;
return (function (){
return new cljs.core.Keyword(null,"eval","eval",-1103567905).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"repls","repls",870822864).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(repl_tooling.integration.fake_editor.state)));
});
})();
var inst_102755 = repl_tooling.integration.fake_editor.wait_for(inst_102754);
var state_103159__$1 = state_103159;
var statearr_103347_108144 = state_103159__$1;
(statearr_103347_108144[(2)] = inst_102755);

(statearr_103347_108144[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103160 === (49))){
var _ = (function (){var statearr_103348 = state_103159;
(statearr_103348[(4)] = cljs.core.rest((state_103159[(4)])));

return statearr_103348;
})();
var inst_102944 = (state_103159[(2)]);
var inst_102945 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_102946 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_102947 = (new cljs.core.PersistentVector(null,1,(5),inst_102945,inst_102946,null));
var inst_102948 = cljs.test.update_current_env_BANG_(inst_102947,cljs.core.rest);
var ___$1 = (function (){var temp__5753__auto__ = (state_103159[(5)]);
if(cljs.core.truth_(temp__5753__auto__)){
var e__34184__auto__ = temp__5753__auto__;
throw e__34184__auto__;
} else {
return null;
}
})();
var state_103159__$1 = (function (){var statearr_103349 = state_103159;
(statearr_103349[(64)] = inst_102948);

return statearr_103349;
})();
var statearr_103350_108147 = state_103159__$1;
(statearr_103350_108147[(2)] = inst_102944);

(statearr_103350_108147[(1)] = (48));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103160 === (84))){
var inst_103105 = (state_103159[(2)]);
var inst_103106 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_103107 = check.core.normalize_error(inst_103105);
var inst_103108 = cljs.core.list(new cljs.core.Symbol(null,"await!","await!",-473046777,null),cljs.core.list(new cljs.core.Symbol("editor","change-result","editor/change-result",-914297300,null)));
var inst_103109 = new cljs.core.Symbol(null,"=>","=>",-813269641,null);
var inst_103110 = /Interrupted/;
var inst_103111 = ["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_103108)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_103109)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_103110)].join('');
var inst_103112 = [new cljs.core.Keyword(null,"error","error",-978969032),/Interrupted/,inst_103107,inst_103111];
var inst_103113 = cljs.core.PersistentHashMap.fromArrays(inst_103106,inst_103112);
var inst_103114 = cljs.test.do_report(inst_103113);
var state_103159__$1 = state_103159;
var statearr_103351_108150 = state_103159__$1;
(statearr_103351_108150[(2)] = inst_103114);

(statearr_103351_108150[(1)] = (83));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var repl_tooling$nrepl$nrepl_test$state_machine__34940__auto__ = null;
var repl_tooling$nrepl$nrepl_test$state_machine__34940__auto____0 = (function (){
var statearr_103352 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_103352[(0)] = repl_tooling$nrepl$nrepl_test$state_machine__34940__auto__);

(statearr_103352[(1)] = (1));

return statearr_103352;
});
var repl_tooling$nrepl$nrepl_test$state_machine__34940__auto____1 = (function (state_103159){
while(true){
var ret_value__34941__auto__ = (function (){try{while(true){
var result__34942__auto__ = switch__34939__auto__(state_103159);
if(cljs.core.keyword_identical_QMARK_(result__34942__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34942__auto__;
}
break;
}
}catch (e103353){var ex__34943__auto__ = e103353;
var statearr_103354_108152 = state_103159;
(statearr_103354_108152[(2)] = ex__34943__auto__);


if(cljs.core.seq((state_103159[(4)]))){
var statearr_103355_108154 = state_103159;
(statearr_103355_108154[(1)] = cljs.core.first((state_103159[(4)])));

} else {
throw ex__34943__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34941__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__108155 = state_103159;
state_103159 = G__108155;
continue;
} else {
return ret_value__34941__auto__;
}
break;
}
});
repl_tooling$nrepl$nrepl_test$state_machine__34940__auto__ = function(state_103159){
switch(arguments.length){
case 0:
return repl_tooling$nrepl$nrepl_test$state_machine__34940__auto____0.call(this);
case 1:
return repl_tooling$nrepl$nrepl_test$state_machine__34940__auto____1.call(this,state_103159);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
repl_tooling$nrepl$nrepl_test$state_machine__34940__auto__.cljs$core$IFn$_invoke$arity$0 = repl_tooling$nrepl$nrepl_test$state_machine__34940__auto____0;
repl_tooling$nrepl$nrepl_test$state_machine__34940__auto__.cljs$core$IFn$_invoke$arity$1 = repl_tooling$nrepl$nrepl_test$state_machine__34940__auto____1;
return repl_tooling$nrepl$nrepl_test$state_machine__34940__auto__;
})()
})();
var state__35943__auto__ = (function (){var statearr_103356 = f__35942__auto__();
(statearr_103356[(6)] = c__35941__auto__);

return statearr_103356;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35943__auto__);
}));

return c__35941__auto__;
}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}}));

(repl_tooling.nrepl.nrepl_test.t_repl_tooling$nrepl$nrepl_test102710.prototype.apply = (function (self__,args102713){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args102713)));
}));

(repl_tooling.nrepl.nrepl_test.t_repl_tooling$nrepl$nrepl_test102710.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done__53962__auto__){
var self__ = this;
var ___9200__auto__ = this;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["connecting to a nREPL REPL"], 0));

try{var c__35941__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35942__auto__ = (function (){var switch__34939__auto__ = (function (state_103802){
var state_val_103803 = (state_103802[(1)]);
if((state_val_103803 === (65))){
var _ = (function (){var statearr_103805 = state_103802;
(statearr_103805[(4)] = cljs.core.rest((state_103802[(4)])));

return statearr_103805;
})();
var state_103802__$1 = state_103802;
var ex103804 = (state_103802__$1[(2)]);
var statearr_103806_108159 = state_103802__$1;
(statearr_103806_108159[(5)] = ex103804);


throw ex103804;


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103803 === (70))){
var inst_103697 = (state_103802[(2)]);
var inst_103698 = cljs.core.list(new cljs.core.Symbol(null,"await!","await!",-473046777,null),cljs.core.list(new cljs.core.Symbol("editor","change-stdout","editor/change-stdout",294315011,null)));
var inst_103699 = /Hi: :some-error/;
var inst_103700 = matcher_combinators.core.match(/Hi: :some-error/,inst_103697);
var inst_103701 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_103697], 0));
var inst_103702 = new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(inst_103700);
var inst_103703 = matcher_combinators.printer.as_string(inst_103702);
var inst_103704 = [inst_103701,"\n\nMismatch:\n",inst_103703].join('');
var inst_103705 = new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(inst_103700);
var inst_103706 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),inst_103705);
var inst_103707 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363)];
var state_103802__$1 = (function (){var statearr_103807 = state_103802;
(statearr_103807[(7)] = inst_103698);

(statearr_103807[(8)] = inst_103707);

(statearr_103807[(9)] = inst_103704);

(statearr_103807[(10)] = inst_103699);

return statearr_103807;
})();
if(inst_103706){
var statearr_103808_108162 = state_103802__$1;
(statearr_103808_108162[(1)] = (74));

} else {
var statearr_103812_108163 = state_103802__$1;
(statearr_103812_108163[(1)] = (75));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103803 === (62))){
var _ = (function (){var statearr_103813 = state_103802;
(statearr_103813[(4)] = cljs.core.cons((64),(state_103802[(4)])));

return statearr_103813;
})();
var ___$1 = (function (){var statearr_103814 = state_103802;
(statearr_103814[(4)] = cljs.core.cons((65),(state_103802[(4)])));

return statearr_103814;
})();
var inst_103669 = repl_tooling.integration.fake_editor.type_and_eval("(binding [*out* *err*] (prn :some-error))");
var state_103802__$1 = (function (){var statearr_103815 = state_103802;
(statearr_103815[(11)] = inst_103669);

return statearr_103815;
})();
var statearr_103816_108164 = state_103802__$1;
(statearr_103816_108164[(2)] = null);

(statearr_103816_108164[(1)] = (66));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103803 === (74))){
var state_103802__$1 = state_103802;
var statearr_103817_108165 = state_103802__$1;
(statearr_103817_108165[(2)] = new cljs.core.Keyword(null,"pass","pass",1574159993));

(statearr_103817_108165[(1)] = (76));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103803 === (7))){
var inst_103358 = (state_103802[(12)]);
var inst_103391 = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var inst_103392 = (function (){var mark_as_done__53963__auto__ = inst_103358;
var chan__53977__auto__ = inst_103391;
return (function (){
return new cljs.core.Keyword(null,"eval","eval",-1103567905).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"repls","repls",870822864).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(repl_tooling.integration.fake_editor.state)));
});
})();
var inst_103393 = repl_tooling.integration.fake_editor.wait_for(inst_103392);
var inst_103394 = (function (){var mark_as_done__53963__auto__ = inst_103358;
var chan__53977__auto__ = inst_103391;
return (function (result__53978__auto__){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan__53977__auto__,result__53978__auto__);
});
})();
var inst_103395 = inst_103393.then(inst_103394);
var state_103802__$1 = (function (){var statearr_103818 = state_103802;
(statearr_103818[(13)] = inst_103395);

return statearr_103818;
})();
var statearr_103819_108166 = state_103802__$1;
(statearr_103819_108166[(2)] = inst_103391);

(statearr_103819_108166[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103803 === (59))){
var state_103802__$1 = state_103802;
var statearr_103820_108168 = state_103802__$1;
(statearr_103820_108168[(2)] = new cljs.core.Keyword(null,"pass","pass",1574159993));

(statearr_103820_108168[(1)] = (61));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103803 === (86))){
var inst_103775 = (state_103802[(2)]);
var inst_103776 = cljs.core.list(new cljs.core.Symbol(null,"await!","await!",-473046777,null),cljs.core.list(new cljs.core.Symbol("editor","change-result","editor/change-result",-914297300,null)));
var inst_103777 = /Interrupted/;
var inst_103778 = matcher_combinators.core.match(/Interrupted/,inst_103775);
var inst_103779 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_103775], 0));
var inst_103780 = new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(inst_103778);
var inst_103781 = matcher_combinators.printer.as_string(inst_103780);
var inst_103782 = [inst_103779,"\n\nMismatch:\n",inst_103781].join('');
var inst_103783 = new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(inst_103778);
var inst_103784 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),inst_103783);
var inst_103785 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363)];
var state_103802__$1 = (function (){var statearr_103825 = state_103802;
(statearr_103825[(14)] = inst_103777);

(statearr_103825[(15)] = inst_103785);

(statearr_103825[(16)] = inst_103782);

(statearr_103825[(17)] = inst_103776);

return statearr_103825;
})();
if(inst_103784){
var statearr_103826_108169 = state_103802__$1;
(statearr_103826_108169[(1)] = (90));

} else {
var statearr_103827_108170 = state_103802__$1;
(statearr_103827_108170[(1)] = (91));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103803 === (20))){
var inst_103444 = repl_tooling.integration.fake_editor.change_result();
var state_103802__$1 = state_103802;
var statearr_103828_108171 = state_103802__$1;
(statearr_103828_108171[(2)] = inst_103444);

(statearr_103828_108171[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103803 === (72))){
var inst_103693 = repl_tooling.integration.fake_editor.change_stdout();
var state_103802__$1 = state_103802;
var statearr_103829_108172 = state_103802__$1;
(statearr_103829_108172[(2)] = inst_103693);

(statearr_103829_108172[(1)] = (73));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103803 === (58))){
var inst_103625 = (state_103802[(2)]);
var state_103802__$1 = state_103802;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_103802__$1,(55),inst_103625);
} else {
if((state_val_103803 === (60))){
var state_103802__$1 = state_103802;
var statearr_103830_108173 = state_103802__$1;
(statearr_103830_108173[(2)] = new cljs.core.Keyword(null,"fail","fail",1706214930));

(statearr_103830_108173[(1)] = (61));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103803 === (27))){
var inst_103470 = (state_103802[(2)]);
var inst_103471 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_103472 = cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"re-find","re-find",1143444147,null),/=>/,cljs.core.list(new cljs.core.Symbol("editor","txt-for-selector","editor/txt-for-selector",-1957500269,null),"#stdout")));
var inst_103473 = ["repl_tooling/nrepl/nrepl_test.cljs",70,new cljs.core.Keyword(null,"error","error",-978969032),13,123,inst_103472,123,inst_103470,null];
var inst_103474 = cljs.core.PersistentHashMap.fromArrays(inst_103471,inst_103473);
var inst_103475 = cljs.test.report.call(null,inst_103474);
var state_103802__$1 = state_103802;
var statearr_103853_108176 = state_103802__$1;
(statearr_103853_108176[(2)] = inst_103475);

(statearr_103853_108176[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103803 === (1))){
var inst_103358 = (state_103802[(12)]);
var inst_103357 = (function (){return (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(repl_tooling.integration.fake_editor.state,cljs.core.assoc,new cljs.core.Keyword(null,"port","port",1534937262),(2233));

cljs.core.async.close_BANG_(self__.out);

repl_tooling.integration.fake_editor.disconnect_BANG_();

return (done__53962__auto__.cljs$core$IFn$_invoke$arity$0 ? done__53962__auto__.cljs$core$IFn$_invoke$arity$0() : done__53962__auto__.call(null));
});
})();
var inst_103358__$1 = (new cljs.core.Delay(inst_103357,null));
var inst_103359 = (function (){var mark_as_done__53963__auto__ = inst_103358__$1;
return (function (){
if(cljs.core.realized_QMARK_(mark_as_done__53963__auto__)){
return null;
} else {
try{var value__9156__auto___108177 = (function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Async test error - not finalized",cljs.core.PersistentArrayMap.EMPTY)})();
if(cljs.core.truth_(value__9156__auto___108177)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"pass","pass",1574159993),null,null,cljs.core.list(new cljs.core.Symbol(null,"throw","throw",595905694,null),cljs.core.list(new cljs.core.Symbol("clojure.core","ex-info","clojure.core/ex-info",-504237117,null),"Async test error - not finalized",cljs.core.PersistentArrayMap.EMPTY)),null,value__9156__auto___108177,null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"fail","fail",1706214930),null,null,cljs.core.list(new cljs.core.Symbol(null,"throw","throw",595905694,null),cljs.core.list(new cljs.core.Symbol("clojure.core","ex-info","clojure.core/ex-info",-504237117,null),"Async test error - not finalized",cljs.core.PersistentArrayMap.EMPTY)),null,value__9156__auto___108177,null]));
}

}catch (e103903){var t__9189__auto___108179 = e103903;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol(null,"throw","throw",595905694,null),cljs.core.list(new cljs.core.Symbol("clojure.core","ex-info","clojure.core/ex-info",-504237117,null),"Async test error - not finalized",cljs.core.PersistentArrayMap.EMPTY)),null,t__9189__auto___108179,null]));
}
return cljs.core.deref(mark_as_done__53963__auto__);
}
});
})();
var inst_103360 = setTimeout(inst_103359,(8000));
var inst_103361 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(repl_tooling.integration.fake_editor.state,cljs.core.assoc,new cljs.core.Keyword(null,"port","port",1534937262),(3322));
var inst_103362 = [new cljs.core.Keyword(null,"on-stderr","on-stderr",1583456038)];
var inst_103363 = (function (){var mark_as_done__53963__auto__ = inst_103358__$1;
return (function (p1__102709_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(repl_tooling.integration.fake_editor.state,cljs.core.update,new cljs.core.Keyword(null,"stdout","stdout",-531490018),(function (e){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(e),"Hi: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__102709_SHARP_)].join('');
}));
});
})();
var inst_103364 = [inst_103363];
var inst_103365 = cljs.core.PersistentHashMap.fromArrays(inst_103362,inst_103364);
var inst_103366 = repl_tooling.integration.fake_editor.connect_BANG_.cljs$core$IFn$_invoke$arity$1(inst_103365);
var inst_103367 = (inst_103366 instanceof Promise);
var state_103802__$1 = (function (){var statearr_103951 = state_103802;
(statearr_103951[(18)] = inst_103360);

(statearr_103951[(12)] = inst_103358__$1);

(statearr_103951[(19)] = inst_103361);

return statearr_103951;
})();
if(cljs.core.truth_(inst_103367)){
var statearr_103964_108183 = state_103802__$1;
(statearr_103964_108183[(1)] = (3));

} else {
var statearr_103965_108184 = state_103802__$1;
(statearr_103965_108184[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103803 === (69))){
var _ = (function (){var statearr_103987 = state_103802;
(statearr_103987[(4)] = cljs.core.rest((state_103802[(4)])));

return statearr_103987;
})();
var state_103802__$1 = state_103802;
var ex103835 = (state_103802__$1[(2)]);
var statearr_104005_108186 = state_103802__$1;
(statearr_104005_108186[(5)] = ex103835);


var statearr_104008_108188 = state_103802__$1;
(statearr_104008_108188[(1)] = (68));

(statearr_104008_108188[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103803 === (24))){
var inst_103455 = (state_103802[(20)]);
var inst_103458 = (state_103802[(21)]);
var inst_103450 = (state_103802[(22)]);
var inst_103462 = (state_103802[(2)]);
var inst_103463 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(inst_103455);
var inst_103464 = [inst_103462,inst_103450,inst_103463];
var inst_103465 = cljs.core.PersistentHashMap.fromArrays(inst_103458,inst_103464);
var inst_103466 = cljs.test.do_report(inst_103465);
var _ = (function (){var statearr_104033 = state_103802;
(statearr_104033[(4)] = cljs.core.rest((state_103802[(4)])));

return statearr_104033;
})();
var state_103802__$1 = state_103802;
var statearr_104042_108191 = state_103802__$1;
(statearr_104042_108191[(2)] = inst_103466);

(statearr_104042_108191[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103803 === (55))){
var inst_103627 = (state_103802[(2)]);
var inst_103628 = cljs.core.list(new cljs.core.Symbol(null,"await!","await!",-473046777,null),cljs.core.list(new cljs.core.Symbol("editor","change-stdout","editor/change-stdout",294315011,null)));
var inst_103629 = /:some-message/;
var inst_103630 = matcher_combinators.core.match(/:some-message/,inst_103627);
var inst_103631 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_103627], 0));
var inst_103632 = new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(inst_103630);
var inst_103633 = matcher_combinators.printer.as_string(inst_103632);
var inst_103634 = [inst_103631,"\n\nMismatch:\n",inst_103633].join('');
var inst_103635 = new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(inst_103630);
var inst_103636 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),inst_103635);
var inst_103637 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363)];
var state_103802__$1 = (function (){var statearr_104080 = state_103802;
(statearr_104080[(23)] = inst_103634);

(statearr_104080[(24)] = inst_103629);

(statearr_104080[(25)] = inst_103637);

(statearr_104080[(26)] = inst_103628);

return statearr_104080;
})();
if(inst_103636){
var statearr_104081_108194 = state_103802__$1;
(statearr_104081_108194[(1)] = (59));

} else {
var statearr_104082_108195 = state_103802__$1;
(statearr_104082_108195[(1)] = (60));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103803 === (85))){
var _ = (function (){var statearr_104083 = state_103802;
(statearr_104083[(4)] = cljs.core.rest((state_103802[(4)])));

return statearr_104083;
})();
var state_103802__$1 = state_103802;
var ex104022 = (state_103802__$1[(2)]);
var statearr_104086_108196 = state_103802__$1;
(statearr_104086_108196[(5)] = ex104022);


var statearr_104088_108197 = state_103802__$1;
(statearr_104088_108197[(1)] = (84));

(statearr_104088_108197[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103803 === (39))){
var _ = (function (){var statearr_104089 = state_103802;
(statearr_104089[(4)] = cljs.core.rest((state_103802[(4)])));

return statearr_104089;
})();
var state_103802__$1 = state_103802;
var ex104052 = (state_103802__$1[(2)]);
var statearr_104090_108199 = state_103802__$1;
(statearr_104090_108199[(5)] = ex104052);


var statearr_104091_108200 = state_103802__$1;
(statearr_104091_108200[(1)] = (38));

(statearr_104091_108200[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103803 === (88))){
var inst_103771 = repl_tooling.integration.fake_editor.change_result();
var state_103802__$1 = state_103802;
var statearr_104094_108202 = state_103802__$1;
(statearr_104094_108202[(2)] = inst_103771);

(statearr_104094_108202[(1)] = (89));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103803 === (46))){
var inst_103559 = (state_103802[(27)]);
var inst_103564 = (state_103802[(28)]);
var inst_103567 = (state_103802[(29)]);
var inst_103571 = (state_103802[(2)]);
var inst_103572 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(inst_103564);
var inst_103573 = [inst_103571,inst_103559,inst_103572];
var inst_103574 = cljs.core.PersistentHashMap.fromArrays(inst_103567,inst_103573);
var inst_103575 = cljs.test.do_report(inst_103574);
var _ = (function (){var statearr_104098 = state_103802;
(statearr_104098[(4)] = cljs.core.rest((state_103802[(4)])));

return statearr_104098;
})();
var state_103802__$1 = state_103802;
var statearr_104099_108204 = state_103802__$1;
(statearr_104099_108204[(2)] = inst_103575);

(statearr_104099_108204[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103803 === (4))){
var inst_103358 = (state_103802[(12)]);
var inst_103378 = [new cljs.core.Keyword(null,"on-stderr","on-stderr",1583456038)];
var inst_103379 = (function (){var mark_as_done__53963__auto__ = inst_103358;
return (function (p1__102709_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(repl_tooling.integration.fake_editor.state,cljs.core.update,new cljs.core.Keyword(null,"stdout","stdout",-531490018),(function (e){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(e),"Hi: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__102709_SHARP_)].join('');
}));
});
})();
var inst_103380 = [inst_103379];
var inst_103381 = cljs.core.PersistentHashMap.fromArrays(inst_103378,inst_103380);
var inst_103382 = repl_tooling.integration.fake_editor.connect_BANG_.cljs$core$IFn$_invoke$arity$1(inst_103381);
var state_103802__$1 = state_103802;
var statearr_104103_108206 = state_103802__$1;
(statearr_104103_108206[(2)] = inst_103382);

(statearr_104103_108206[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103803 === (77))){
var _ = (function (){var statearr_104104 = state_103802;
(statearr_104104[(4)] = cljs.core.cons((79),(state_103802[(4)])));

return statearr_104104;
})();
var ___$1 = (function (){var statearr_104105 = state_103802;
(statearr_104105[(4)] = cljs.core.cons((80),(state_103802[(4)])));

return statearr_104105;
})();
var inst_103739 = repl_tooling.integration.fake_editor.type_and_eval("(Thread/sleep 1000)");
var inst_103740 = cljs.core.async.timeout((200));
var state_103802__$1 = (function (){var statearr_104106 = state_103802;
(statearr_104106[(30)] = inst_103739);

return statearr_104106;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_103802__$1,(81),inst_103740);
} else {
if((state_val_103803 === (54))){
var _ = (function (){var statearr_104108 = state_103802;
(statearr_104108[(4)] = cljs.core.rest((state_103802[(4)])));

return statearr_104108;
})();
var state_103802__$1 = state_103802;
var ex104100 = (state_103802__$1[(2)]);
var statearr_104109_108207 = state_103802__$1;
(statearr_104109_108207[(5)] = ex104100);


var statearr_104110_108208 = state_103802__$1;
(statearr_104110_108208[(1)] = (53));

(statearr_104110_108208[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103803 === (92))){
var inst_103777 = (state_103802[(14)]);
var inst_103785 = (state_103802[(15)]);
var inst_103782 = (state_103802[(16)]);
var inst_103789 = (state_103802[(2)]);
var inst_103790 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(inst_103782);
var inst_103791 = [inst_103789,inst_103777,inst_103790];
var inst_103792 = cljs.core.PersistentHashMap.fromArrays(inst_103785,inst_103791);
var inst_103793 = cljs.test.do_report(inst_103792);
var _ = (function (){var statearr_104113 = state_103802;
(statearr_104113[(4)] = cljs.core.rest((state_103802[(4)])));

return statearr_104113;
})();
var state_103802__$1 = state_103802;
var statearr_104114_108211 = state_103802__$1;
(statearr_104114_108211[(2)] = inst_103793);

(statearr_104114_108211[(1)] = (83));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103803 === (15))){
var inst_103469 = (state_103802[(2)]);
var state_103802__$1 = (function (){var statearr_104116 = state_103802;
(statearr_104116[(31)] = inst_103469);

return statearr_104116;
})();
var statearr_104118_108213 = state_103802__$1;
(statearr_104118_108213[(2)] = null);

(statearr_104118_108213[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103803 === (48))){
var inst_103651 = (state_103802[(2)]);
var inst_103652 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_103653 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_103654 = (new cljs.core.PersistentVector(null,1,(5),inst_103652,inst_103653,null));
var inst_103655 = cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(inst_103654,cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["STDERR works"], 0));
var state_103802__$1 = (function (){var statearr_104119 = state_103802;
(statearr_104119[(32)] = inst_103651);

(statearr_104119[(33)] = inst_103655);

return statearr_104119;
})();
var statearr_104122_108214 = state_103802__$1;
(statearr_104122_108214[(2)] = null);

(statearr_104122_108214[(1)] = (62));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103803 === (50))){
var _ = (function (){var statearr_104124 = state_103802;
(statearr_104124[(4)] = cljs.core.rest((state_103802[(4)])));

return statearr_104124;
})();
var state_103802__$1 = state_103802;
var ex104115 = (state_103802__$1[(2)]);
var statearr_104126_108217 = state_103802__$1;
(statearr_104126_108217[(5)] = ex104115);


throw ex104115;


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103803 === (75))){
var state_103802__$1 = state_103802;
var statearr_104128_108218 = state_103802__$1;
(statearr_104128_108218[(2)] = new cljs.core.Keyword(null,"fail","fail",1706214930));

(statearr_104128_108218[(1)] = (76));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103803 === (21))){
var inst_103446 = (state_103802[(2)]);
var state_103802__$1 = state_103802;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_103802__$1,(18),inst_103446);
} else {
if((state_val_103803 === (31))){
var inst_103484 = (state_103802[(34)]);
var inst_103505 = (state_103802[(2)]);
var _ = (function (){var statearr_104130 = state_103802;
(statearr_104130[(4)] = cljs.core.rest((state_103802[(4)])));

return statearr_104130;
})();
var state_103802__$1 = (function (){var statearr_104131 = state_103802;
(statearr_104131[(35)] = inst_103505);

return statearr_104131;
})();
var statearr_104133_108221 = state_103802__$1;
(statearr_104133_108221[(2)] = inst_103484);

(statearr_104133_108221[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103803 === (32))){
var _ = (function (){var statearr_104136 = state_103802;
(statearr_104136[(4)] = cljs.core.cons((34),(state_103802[(4)])));

return statearr_104136;
})();
var ___$1 = (function (){var statearr_104137 = state_103802;
(statearr_104137[(4)] = cljs.core.cons((35),(state_103802[(4)])));

return statearr_104137;
})();
var inst_103529 = repl_tooling.integration.fake_editor.type_and_eval("(/ 10 0)");
var state_103802__$1 = (function (){var statearr_104139 = state_103802;
(statearr_104139[(36)] = inst_103529);

return statearr_104139;
})();
var statearr_104141_108223 = state_103802__$1;
(statearr_104141_108223[(2)] = null);

(statearr_104141_108223[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103803 === (40))){
var inst_103557 = (state_103802[(2)]);
var inst_103558 = cljs.core.list(new cljs.core.Symbol(null,"await!","await!",-473046777,null),cljs.core.list(new cljs.core.Symbol("editor","change-result","editor/change-result",-914297300,null)));
var inst_103559 = /java.lang.ArithmeticException/;
var inst_103560 = matcher_combinators.core.match(/java.lang.ArithmeticException/,inst_103557);
var inst_103561 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_103557], 0));
var inst_103562 = new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(inst_103560);
var inst_103563 = matcher_combinators.printer.as_string(inst_103562);
var inst_103564 = [inst_103561,"\n\nMismatch:\n",inst_103563].join('');
var inst_103565 = new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(inst_103560);
var inst_103566 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),inst_103565);
var inst_103567 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363)];
var state_103802__$1 = (function (){var statearr_104144 = state_103802;
(statearr_104144[(27)] = inst_103559);

(statearr_104144[(37)] = inst_103558);

(statearr_104144[(28)] = inst_103564);

(statearr_104144[(29)] = inst_103567);

return statearr_104144;
})();
if(inst_103566){
var statearr_104146_108228 = state_103802__$1;
(statearr_104146_108228[(1)] = (44));

} else {
var statearr_104148_108229 = state_103802__$1;
(statearr_104148_108229[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103803 === (91))){
var state_103802__$1 = state_103802;
var statearr_104149_108230 = state_103802__$1;
(statearr_104149_108230[(2)] = new cljs.core.Keyword(null,"fail","fail",1706214930));

(statearr_104149_108230[(1)] = (92));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103803 === (56))){
var inst_103358 = (state_103802[(12)]);
var inst_103618 = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var inst_103619 = repl_tooling.integration.fake_editor.change_stdout();
var inst_103620 = (function (){var mark_as_done__53963__auto__ = inst_103358;
var chan__53977__auto__ = inst_103618;
return (function (result__53978__auto__){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan__53977__auto__,result__53978__auto__);
});
})();
var inst_103621 = inst_103619.then(inst_103620);
var state_103802__$1 = (function (){var statearr_104154 = state_103802;
(statearr_104154[(38)] = inst_103621);

return statearr_104154;
})();
var statearr_104156_108232 = state_103802__$1;
(statearr_104156_108232[(2)] = inst_103618);

(statearr_104156_108232[(1)] = (58));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103803 === (33))){
var inst_103581 = (state_103802[(2)]);
var inst_103582 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_103583 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_103584 = (new cljs.core.PersistentVector(null,1,(5),inst_103582,inst_103583,null));
var inst_103585 = cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(inst_103584,cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["STDOUT works"], 0));
var state_103802__$1 = (function (){var statearr_104158 = state_103802;
(statearr_104158[(39)] = inst_103581);

(statearr_104158[(40)] = inst_103585);

return statearr_104158;
})();
var statearr_104159_108234 = state_103802__$1;
(statearr_104159_108234[(2)] = null);

(statearr_104159_108234[(1)] = (47));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103803 === (13))){
var _ = (function (){var statearr_104160 = state_103802;
(statearr_104160[(4)] = cljs.core.rest((state_103802[(4)])));

return statearr_104160;
})();
var state_103802__$1 = state_103802;
var ex104151 = (state_103802__$1[(2)]);
var statearr_104163_108235 = state_103802__$1;
(statearr_104163_108235[(5)] = ex104151);


throw ex104151;


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103803 === (22))){
var state_103802__$1 = state_103802;
var statearr_104164_108237 = state_103802__$1;
(statearr_104164_108237[(2)] = new cljs.core.Keyword(null,"pass","pass",1574159993));

(statearr_104164_108237[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103803 === (90))){
var state_103802__$1 = state_103802;
var statearr_104165_108238 = state_103802__$1;
(statearr_104165_108238[(2)] = new cljs.core.Keyword(null,"pass","pass",1574159993));

(statearr_104165_108238[(1)] = (92));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103803 === (36))){
var _ = (function (){var statearr_104166 = state_103802;
(statearr_104166[(4)] = cljs.core.cons((39),(state_103802[(4)])));

return statearr_104166;
})();
var inst_103545 = repl_tooling.integration.fake_editor.change_result();
var inst_103546 = (inst_103545 instanceof Promise);
var state_103802__$1 = state_103802;
if(cljs.core.truth_(inst_103546)){
var statearr_104169_108241 = state_103802__$1;
(statearr_104169_108241[(1)] = (41));

} else {
var statearr_104170_108242 = state_103802__$1;
(statearr_104170_108242[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103803 === (41))){
var inst_103358 = (state_103802[(12)]);
var inst_103548 = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var inst_103549 = repl_tooling.integration.fake_editor.change_result();
var inst_103550 = (function (){var mark_as_done__53963__auto__ = inst_103358;
var chan__53977__auto__ = inst_103548;
return (function (result__53978__auto__){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan__53977__auto__,result__53978__auto__);
});
})();
var inst_103551 = inst_103549.then(inst_103550);
var state_103802__$1 = (function (){var statearr_104173 = state_103802;
(statearr_104173[(41)] = inst_103551);

return statearr_104173;
})();
var statearr_104175_108245 = state_103802__$1;
(statearr_104175_108245[(2)] = inst_103548);

(statearr_104175_108245[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103803 === (89))){
var inst_103773 = (state_103802[(2)]);
var state_103802__$1 = state_103802;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_103802__$1,(86),inst_103773);
} else {
if((state_val_103803 === (43))){
var inst_103555 = (state_103802[(2)]);
var state_103802__$1 = state_103802;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_103802__$1,(40),inst_103555);
} else {
if((state_val_103803 === (61))){
var inst_103634 = (state_103802[(23)]);
var inst_103629 = (state_103802[(24)]);
var inst_103637 = (state_103802[(25)]);
var inst_103641 = (state_103802[(2)]);
var inst_103642 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(inst_103634);
var inst_103643 = [inst_103641,inst_103629,inst_103642];
var inst_103644 = cljs.core.PersistentHashMap.fromArrays(inst_103637,inst_103643);
var inst_103645 = cljs.test.do_report(inst_103644);
var _ = (function (){var statearr_104178 = state_103802;
(statearr_104178[(4)] = cljs.core.rest((state_103802[(4)])));

return statearr_104178;
})();
var state_103802__$1 = state_103802;
var statearr_104179_108248 = state_103802__$1;
(statearr_104179_108248[(2)] = inst_103645);

(statearr_104179_108248[(1)] = (52));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103803 === (29))){
var inst_103483 = (state_103802[(42)]);
var inst_103486 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_103487 = cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"re-find","re-find",1143444147,null),/=>/,cljs.core.list(new cljs.core.Symbol("editor","txt-for-selector","editor/txt-for-selector",-1957500269,null),"#stdout")));
var inst_103488 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_103489 = cljs.core.cons(inst_103488,inst_103483);
var inst_103490 = ["repl_tooling/nrepl/nrepl_test.cljs",70,new cljs.core.Keyword(null,"pass","pass",1574159993),13,123,inst_103487,123,inst_103489,null];
var inst_103491 = cljs.core.PersistentHashMap.fromArrays(inst_103486,inst_103490);
var inst_103492 = cljs.test.report.call(null,inst_103491);
var state_103802__$1 = state_103802;
var statearr_104184_108251 = state_103802__$1;
(statearr_104184_108251[(2)] = inst_103492);

(statearr_104184_108251[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103803 === (44))){
var state_103802__$1 = state_103802;
var statearr_104187_108253 = state_103802__$1;
(statearr_104187_108253[(2)] = new cljs.core.Keyword(null,"pass","pass",1574159993));

(statearr_104187_108253[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103803 === (6))){
var inst_103402 = (state_103802[(2)]);
var inst_103403 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_103404 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_103405 = (new cljs.core.PersistentVector(null,1,(5),inst_103403,inst_103404,null));
var inst_103406 = cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(inst_103405,cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["evaluation works"], 0));
var state_103802__$1 = (function (){var statearr_104189 = state_103802;
(statearr_104189[(43)] = inst_103402);

(statearr_104189[(44)] = inst_103406);

return statearr_104189;
})();
var statearr_104190_108256 = state_103802__$1;
(statearr_104190_108256[(2)] = null);

(statearr_104190_108256[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103803 === (28))){
var _ = (function (){var statearr_104191 = state_103802;
(statearr_104191[(4)] = cljs.core.rest((state_103802[(4)])));

return statearr_104191;
})();
var state_103802__$1 = state_103802;
var ex104186 = (state_103802__$1[(2)]);
var statearr_104193_108258 = state_103802__$1;
(statearr_104193_108258[(5)] = ex104186);


var statearr_104194_108259 = state_103802__$1;
(statearr_104194_108259[(1)] = (27));

(statearr_104194_108259[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103803 === (64))){
var _ = (function (){var statearr_104196 = state_103802;
(statearr_104196[(4)] = cljs.core.rest((state_103802[(4)])));

return statearr_104196;
})();
var inst_103657 = (state_103802[(2)]);
var inst_103658 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_103659 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_103660 = (new cljs.core.PersistentVector(null,1,(5),inst_103658,inst_103659,null));
var inst_103661 = cljs.test.update_current_env_BANG_(inst_103660,cljs.core.rest);
var ___$1 = (function (){var temp__5753__auto__ = (state_103802[(5)]);
if(cljs.core.truth_(temp__5753__auto__)){
var e__34184__auto__ = temp__5753__auto__;
throw e__34184__auto__;
} else {
return null;
}
})();
var state_103802__$1 = (function (){var statearr_104199 = state_103802;
(statearr_104199[(45)] = inst_103661);

return statearr_104199;
})();
var statearr_104200_108261 = state_103802__$1;
(statearr_104200_108261[(2)] = inst_103657);

(statearr_104200_108261[(1)] = (63));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103803 === (51))){
var _ = (function (){var statearr_104202 = state_103802;
(statearr_104202[(4)] = cljs.core.cons((54),(state_103802[(4)])));

return statearr_104202;
})();
var inst_103615 = repl_tooling.integration.fake_editor.change_stdout();
var inst_103616 = (inst_103615 instanceof Promise);
var state_103802__$1 = state_103802;
if(cljs.core.truth_(inst_103616)){
var statearr_104204_108262 = state_103802__$1;
(statearr_104204_108262[(1)] = (56));

} else {
var statearr_104205_108264 = state_103802__$1;
(statearr_104205_108264[(1)] = (57));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103803 === (25))){
var inst_103484 = (state_103802[(34)]);
var inst_103483 = (state_103802[(42)]);
var _ = (function (){var statearr_104208 = state_103802;
(statearr_104208[(4)] = cljs.core.cons((28),(state_103802[(4)])));

return statearr_104208;
})();
var inst_103481 = repl_tooling.integration.fake_editor.txt_for_selector("#stdout");
var inst_103482 = cljs.core.re_find(/=>/,inst_103481);
var inst_103483__$1 = (new cljs.core.List(null,inst_103482,null,(1),null));
var inst_103484__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.not,inst_103483__$1);
var state_103802__$1 = (function (){var statearr_104211 = state_103802;
(statearr_104211[(34)] = inst_103484__$1);

(statearr_104211[(42)] = inst_103483__$1);

return statearr_104211;
})();
if(cljs.core.truth_(inst_103484__$1)){
var statearr_104213_108266 = state_103802__$1;
(statearr_104213_108266[(1)] = (29));

} else {
var statearr_104215_108267 = state_103802__$1;
(statearr_104215_108267[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103803 === (34))){
var _ = (function (){var statearr_104217 = state_103802;
(statearr_104217[(4)] = cljs.core.rest((state_103802[(4)])));

return statearr_104217;
})();
var inst_103517 = (state_103802[(2)]);
var inst_103518 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_103519 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_103520 = (new cljs.core.PersistentVector(null,1,(5),inst_103518,inst_103519,null));
var inst_103521 = cljs.test.update_current_env_BANG_(inst_103520,cljs.core.rest);
var ___$1 = (function (){var temp__5753__auto__ = (state_103802[(5)]);
if(cljs.core.truth_(temp__5753__auto__)){
var e__34184__auto__ = temp__5753__auto__;
throw e__34184__auto__;
} else {
return null;
}
})();
var state_103802__$1 = (function (){var statearr_104220 = state_103802;
(statearr_104220[(46)] = inst_103521);

return statearr_104220;
})();
var statearr_104221_108270 = state_103802__$1;
(statearr_104221_108270[(2)] = inst_103517);

(statearr_104221_108270[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103803 === (17))){
var _ = (function (){var statearr_104225 = state_103802;
(statearr_104225[(4)] = cljs.core.rest((state_103802[(4)])));

return statearr_104225;
})();
var state_103802__$1 = state_103802;
var ex104206 = (state_103802__$1[(2)]);
var statearr_104226_108271 = state_103802__$1;
(statearr_104226_108271[(5)] = ex104206);


var statearr_104227_108272 = state_103802__$1;
(statearr_104227_108272[(1)] = (16));

(statearr_104227_108272[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103803 === (3))){
var inst_103358 = (state_103802[(12)]);
var inst_103369 = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var inst_103370 = [new cljs.core.Keyword(null,"on-stderr","on-stderr",1583456038)];
var inst_103371 = (function (){var mark_as_done__53963__auto__ = inst_103358;
var chan__53977__auto__ = inst_103369;
return (function (p1__102709_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(repl_tooling.integration.fake_editor.state,cljs.core.update,new cljs.core.Keyword(null,"stdout","stdout",-531490018),(function (e){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(e),"Hi: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__102709_SHARP_)].join('');
}));
});
})();
var inst_103372 = [inst_103371];
var inst_103373 = cljs.core.PersistentHashMap.fromArrays(inst_103370,inst_103372);
var inst_103374 = repl_tooling.integration.fake_editor.connect_BANG_.cljs$core$IFn$_invoke$arity$1(inst_103373);
var inst_103375 = (function (){var mark_as_done__53963__auto__ = inst_103358;
var chan__53977__auto__ = inst_103369;
return (function (result__53978__auto__){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan__53977__auto__,result__53978__auto__);
});
})();
var inst_103376 = inst_103374.then(inst_103375);
var state_103802__$1 = (function (){var statearr_104237 = state_103802;
(statearr_104237[(47)] = inst_103376);

return statearr_104237;
})();
var statearr_104238_108275 = state_103802__$1;
(statearr_104238_108275[(2)] = inst_103369);

(statearr_104238_108275[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103803 === (12))){
var _ = (function (){var statearr_104241 = state_103802;
(statearr_104241[(4)] = cljs.core.rest((state_103802[(4)])));

return statearr_104241;
})();
var inst_103408 = (state_103802[(2)]);
var inst_103409 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_103410 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_103411 = (new cljs.core.PersistentVector(null,1,(5),inst_103409,inst_103410,null));
var inst_103412 = cljs.test.update_current_env_BANG_(inst_103411,cljs.core.rest);
var ___$1 = (function (){var temp__5753__auto__ = (state_103802[(5)]);
if(cljs.core.truth_(temp__5753__auto__)){
var e__34184__auto__ = temp__5753__auto__;
throw e__34184__auto__;
} else {
return null;
}
})();
var state_103802__$1 = (function (){var statearr_104244 = state_103802;
(statearr_104244[(48)] = inst_103412);

return statearr_104244;
})();
var statearr_104246_108276 = state_103802__$1;
(statearr_104246_108276[(2)] = inst_103408);

(statearr_104246_108276[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103803 === (2))){
var inst_103358 = (state_103802[(12)]);
var inst_103386 = (state_103802[(2)]);
var inst_103387 = (function (){var mark_as_done__53963__auto__ = inst_103358;
return (function (){
return new cljs.core.Keyword(null,"eval","eval",-1103567905).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"repls","repls",870822864).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(repl_tooling.integration.fake_editor.state)));
});
})();
var inst_103388 = repl_tooling.integration.fake_editor.wait_for(inst_103387);
var inst_103389 = (inst_103388 instanceof Promise);
var state_103802__$1 = (function (){var statearr_104248 = state_103802;
(statearr_104248[(49)] = inst_103386);

return statearr_104248;
})();
if(cljs.core.truth_(inst_103389)){
var statearr_104249_108278 = state_103802__$1;
(statearr_104249_108278[(1)] = (7));

} else {
var statearr_104250_108279 = state_103802__$1;
(statearr_104250_108279[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103803 === (66))){
var _ = (function (){var statearr_104252 = state_103802;
(statearr_104252[(4)] = cljs.core.cons((69),(state_103802[(4)])));

return statearr_104252;
})();
var inst_103685 = repl_tooling.integration.fake_editor.change_stdout();
var inst_103686 = (inst_103685 instanceof Promise);
var state_103802__$1 = state_103802;
if(cljs.core.truth_(inst_103686)){
var statearr_104253_108281 = state_103802__$1;
(statearr_104253_108281[(1)] = (71));

} else {
var statearr_104254_108282 = state_103802__$1;
(statearr_104254_108282[(1)] = (72));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103803 === (23))){
var state_103802__$1 = state_103802;
var statearr_104256_108284 = state_103802__$1;
(statearr_104256_108284[(2)] = new cljs.core.Keyword(null,"fail","fail",1706214930));

(statearr_104256_108284[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103803 === (47))){
var _ = (function (){var statearr_104257 = state_103802;
(statearr_104257[(4)] = cljs.core.cons((49),(state_103802[(4)])));

return statearr_104257;
})();
var ___$1 = (function (){var statearr_104258 = state_103802;
(statearr_104258[(4)] = cljs.core.cons((50),(state_103802[(4)])));

return statearr_104258;
})();
var inst_103599 = repl_tooling.integration.fake_editor.type_and_eval("(prn :some-message)");
var state_103802__$1 = (function (){var statearr_104259 = state_103802;
(statearr_104259[(50)] = inst_103599);

return statearr_104259;
})();
var statearr_104260_108286 = state_103802__$1;
(statearr_104260_108286[(2)] = null);

(statearr_104260_108286[(1)] = (51));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103803 === (35))){
var _ = (function (){var statearr_104261 = state_103802;
(statearr_104261[(4)] = cljs.core.rest((state_103802[(4)])));

return statearr_104261;
})();
var state_103802__$1 = state_103802;
var ex104255 = (state_103802__$1[(2)]);
var statearr_104262_108288 = state_103802__$1;
(statearr_104262_108288[(5)] = ex104255);


throw ex104255;


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103803 === (82))){
var _ = (function (){var statearr_104263 = state_103802;
(statearr_104263[(4)] = cljs.core.cons((85),(state_103802[(4)])));

return statearr_104263;
})();
var inst_103763 = repl_tooling.integration.fake_editor.change_result();
var inst_103764 = (inst_103763 instanceof Promise);
var state_103802__$1 = state_103802;
if(cljs.core.truth_(inst_103764)){
var statearr_104264_108290 = state_103802__$1;
(statearr_104264_108290[(1)] = (87));

} else {
var statearr_104265_108291 = state_103802__$1;
(statearr_104265_108291[(1)] = (88));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103803 === (76))){
var inst_103707 = (state_103802[(8)]);
var inst_103704 = (state_103802[(9)]);
var inst_103699 = (state_103802[(10)]);
var inst_103711 = (state_103802[(2)]);
var inst_103712 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(inst_103704);
var inst_103713 = [inst_103711,inst_103699,inst_103712];
var inst_103714 = cljs.core.PersistentHashMap.fromArrays(inst_103707,inst_103713);
var inst_103715 = cljs.test.do_report(inst_103714);
var _ = (function (){var statearr_104268 = state_103802;
(statearr_104268[(4)] = cljs.core.rest((state_103802[(4)])));

return statearr_104268;
})();
var state_103802__$1 = state_103802;
var statearr_104269_108293 = state_103802__$1;
(statearr_104269_108293[(2)] = inst_103715);

(statearr_104269_108293[(1)] = (67));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103803 === (19))){
var inst_103358 = (state_103802[(12)]);
var inst_103439 = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var inst_103440 = repl_tooling.integration.fake_editor.change_result();
var inst_103441 = (function (){var mark_as_done__53963__auto__ = inst_103358;
var chan__53977__auto__ = inst_103439;
return (function (result__53978__auto__){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan__53977__auto__,result__53978__auto__);
});
})();
var inst_103442 = inst_103440.then(inst_103441);
var state_103802__$1 = (function (){var statearr_104273 = state_103802;
(statearr_104273[(51)] = inst_103442);

return statearr_104273;
})();
var statearr_104274_108295 = state_103802__$1;
(statearr_104274_108295[(2)] = inst_103439);

(statearr_104274_108295[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103803 === (57))){
var inst_103623 = repl_tooling.integration.fake_editor.change_stdout();
var state_103802__$1 = state_103802;
var statearr_104275_108296 = state_103802__$1;
(statearr_104275_108296[(2)] = inst_103623);

(statearr_104275_108296[(1)] = (58));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103803 === (68))){
var inst_103670 = (state_103802[(2)]);
var inst_103671 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_103672 = check.core.normalize_error(inst_103670);
var inst_103673 = cljs.core.list(new cljs.core.Symbol(null,"await!","await!",-473046777,null),cljs.core.list(new cljs.core.Symbol("editor","change-stdout","editor/change-stdout",294315011,null)));
var inst_103674 = new cljs.core.Symbol(null,"=>","=>",-813269641,null);
var inst_103675 = /Hi: :some-error/;
var inst_103676 = ["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_103673)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_103674)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_103675)].join('');
var inst_103677 = [new cljs.core.Keyword(null,"error","error",-978969032),/Hi: :some-error/,inst_103672,inst_103676];
var inst_103678 = cljs.core.PersistentHashMap.fromArrays(inst_103671,inst_103677);
var inst_103679 = cljs.test.do_report(inst_103678);
var state_103802__$1 = state_103802;
var statearr_104278_108300 = state_103802__$1;
(statearr_104278_108300[(2)] = inst_103679);

(statearr_104278_108300[(1)] = (67));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103803 === (11))){
var inst_103511 = (state_103802[(2)]);
var inst_103512 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_103513 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_103514 = (new cljs.core.PersistentVector(null,1,(5),inst_103512,inst_103513,null));
var inst_103515 = cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(inst_103514,cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["exception works"], 0));
var state_103802__$1 = (function (){var statearr_104280 = state_103802;
(statearr_104280[(52)] = inst_103515);

(statearr_104280[(53)] = inst_103511);

return statearr_104280;
})();
var statearr_104282_108303 = state_103802__$1;
(statearr_104282_108303[(2)] = null);

(statearr_104282_108303[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103803 === (9))){
var inst_103400 = (state_103802[(2)]);
var state_103802__$1 = state_103802;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_103802__$1,(6),inst_103400);
} else {
if((state_val_103803 === (5))){
var inst_103384 = (state_103802[(2)]);
var state_103802__$1 = state_103802;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_103802__$1,(2),inst_103384);
} else {
if((state_val_103803 === (83))){
var inst_103796 = (state_103802[(2)]);
var _ = (function (){var statearr_104284 = state_103802;
(statearr_104284[(4)] = cljs.core.rest((state_103802[(4)])));

return statearr_104284;
})();
var state_103802__$1 = state_103802;
var statearr_104285_108305 = state_103802__$1;
(statearr_104285_108305[(2)] = inst_103796);

(statearr_104285_108305[(1)] = (79));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103803 === (14))){
var _ = (function (){var statearr_104286 = state_103802;
(statearr_104286[(4)] = cljs.core.cons((17),(state_103802[(4)])));

return statearr_104286;
})();
var inst_103436 = repl_tooling.integration.fake_editor.change_result();
var inst_103437 = (inst_103436 instanceof Promise);
var state_103802__$1 = state_103802;
if(cljs.core.truth_(inst_103437)){
var statearr_104287_108307 = state_103802__$1;
(statearr_104287_108307[(1)] = (19));

} else {
var statearr_104288_108308 = state_103802__$1;
(statearr_104288_108308[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103803 === (45))){
var state_103802__$1 = state_103802;
var statearr_104289_108309 = state_103802__$1;
(statearr_104289_108309[(2)] = new cljs.core.Keyword(null,"fail","fail",1706214930));

(statearr_104289_108309[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103803 === (53))){
var inst_103600 = (state_103802[(2)]);
var inst_103601 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_103602 = check.core.normalize_error(inst_103600);
var inst_103603 = cljs.core.list(new cljs.core.Symbol(null,"await!","await!",-473046777,null),cljs.core.list(new cljs.core.Symbol("editor","change-stdout","editor/change-stdout",294315011,null)));
var inst_103604 = new cljs.core.Symbol(null,"=>","=>",-813269641,null);
var inst_103605 = /:some-message/;
var inst_103606 = ["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_103603)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_103604)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_103605)].join('');
var inst_103607 = [new cljs.core.Keyword(null,"error","error",-978969032),/:some-message/,inst_103602,inst_103606];
var inst_103608 = cljs.core.PersistentHashMap.fromArrays(inst_103601,inst_103607);
var inst_103609 = cljs.test.do_report(inst_103608);
var state_103802__$1 = state_103802;
var statearr_104290_108311 = state_103802__$1;
(statearr_104290_108311[(2)] = inst_103609);

(statearr_104290_108311[(1)] = (52));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103803 === (78))){
var inst_103358 = (state_103802[(12)]);
var inst_103799 = (state_103802[(2)]);
var inst_103800 = cljs.core.deref(inst_103358);
var state_103802__$1 = (function (){var statearr_104291 = state_103802;
(statearr_104291[(54)] = inst_103799);

return statearr_104291;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_103802__$1,inst_103800);
} else {
if((state_val_103803 === (26))){
var inst_103508 = (state_103802[(2)]);
var _ = (function (){var statearr_104292 = state_103802;
(statearr_104292[(4)] = cljs.core.rest((state_103802[(4)])));

return statearr_104292;
})();
var state_103802__$1 = state_103802;
var statearr_104293_108312 = state_103802__$1;
(statearr_104293_108312[(2)] = inst_103508);

(statearr_104293_108312[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103803 === (16))){
var inst_103421 = (state_103802[(2)]);
var inst_103422 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_103423 = check.core.normalize_error(inst_103421);
var inst_103424 = cljs.core.list(new cljs.core.Symbol(null,"await!","await!",-473046777,null),cljs.core.list(new cljs.core.Symbol("editor","change-result","editor/change-result",-914297300,null)));
var inst_103425 = new cljs.core.Symbol(null,"=>","=>",-813269641,null);
var inst_103426 = "5";
var inst_103427 = ["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_103424)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_103425)," ",inst_103426].join('');
var inst_103428 = [new cljs.core.Keyword(null,"error","error",-978969032),"5",inst_103423,inst_103427];
var inst_103429 = cljs.core.PersistentHashMap.fromArrays(inst_103422,inst_103428);
var inst_103430 = cljs.test.do_report(inst_103429);
var state_103802__$1 = state_103802;
var statearr_104294_108314 = state_103802__$1;
(statearr_104294_108314[(2)] = inst_103430);

(statearr_104294_108314[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103803 === (81))){
var inst_103742 = (state_103802[(2)]);
var inst_103743 = cljs.core.deref(repl_tooling.integration.fake_editor.state);
var inst_103744 = new cljs.core.Keyword(null,"commands","commands",161008658).cljs$core$IFn$_invoke$arity$1(inst_103743);
var inst_103745 = new cljs.core.Keyword(null,"break-evaluation","break-evaluation",580088387).cljs$core$IFn$_invoke$arity$1(inst_103744);
var inst_103746 = new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(inst_103745);
var inst_103747 = (inst_103746.cljs$core$IFn$_invoke$arity$0 ? inst_103746.cljs$core$IFn$_invoke$arity$0() : inst_103746.call(null));
var state_103802__$1 = (function (){var statearr_104295 = state_103802;
(statearr_104295[(55)] = inst_103747);

(statearr_104295[(56)] = inst_103742);

return statearr_104295;
})();
var statearr_104296_108317 = state_103802__$1;
(statearr_104296_108317[(2)] = null);

(statearr_104296_108317[(1)] = (82));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103803 === (79))){
var _ = (function (){var statearr_104297 = state_103802;
(statearr_104297[(4)] = cljs.core.rest((state_103802[(4)])));

return statearr_104297;
})();
var inst_103727 = (state_103802[(2)]);
var inst_103728 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_103729 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_103730 = (new cljs.core.PersistentVector(null,1,(5),inst_103728,inst_103729,null));
var inst_103731 = cljs.test.update_current_env_BANG_(inst_103730,cljs.core.rest);
var ___$1 = (function (){var temp__5753__auto__ = (state_103802[(5)]);
if(cljs.core.truth_(temp__5753__auto__)){
var e__34184__auto__ = temp__5753__auto__;
throw e__34184__auto__;
} else {
return null;
}
})();
var state_103802__$1 = (function (){var statearr_104298 = state_103802;
(statearr_104298[(57)] = inst_103731);

return statearr_104298;
})();
var statearr_104299_108319 = state_103802__$1;
(statearr_104299_108319[(2)] = inst_103727);

(statearr_104299_108319[(1)] = (78));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103803 === (38))){
var inst_103530 = (state_103802[(2)]);
var inst_103531 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_103532 = check.core.normalize_error(inst_103530);
var inst_103533 = cljs.core.list(new cljs.core.Symbol(null,"await!","await!",-473046777,null),cljs.core.list(new cljs.core.Symbol("editor","change-result","editor/change-result",-914297300,null)));
var inst_103534 = new cljs.core.Symbol(null,"=>","=>",-813269641,null);
var inst_103535 = /java.lang.ArithmeticException/;
var inst_103536 = ["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_103533)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_103534)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_103535)].join('');
var inst_103537 = [new cljs.core.Keyword(null,"error","error",-978969032),/java.lang.ArithmeticException/,inst_103532,inst_103536];
var inst_103538 = cljs.core.PersistentHashMap.fromArrays(inst_103531,inst_103537);
var inst_103539 = cljs.test.do_report(inst_103538);
var state_103802__$1 = state_103802;
var statearr_104300_108321 = state_103802__$1;
(statearr_104300_108321[(2)] = inst_103539);

(statearr_104300_108321[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103803 === (87))){
var inst_103358 = (state_103802[(12)]);
var inst_103766 = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var inst_103767 = repl_tooling.integration.fake_editor.change_result();
var inst_103768 = (function (){var mark_as_done__53963__auto__ = inst_103358;
var chan__53977__auto__ = inst_103766;
return (function (result__53978__auto__){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan__53977__auto__,result__53978__auto__);
});
})();
var inst_103769 = inst_103767.then(inst_103768);
var state_103802__$1 = (function (){var statearr_104301 = state_103802;
(statearr_104301[(58)] = inst_103769);

return statearr_104301;
})();
var statearr_104302_108322 = state_103802__$1;
(statearr_104302_108322[(2)] = inst_103766);

(statearr_104302_108322[(1)] = (89));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103803 === (30))){
var inst_103483 = (state_103802[(42)]);
var inst_103494 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_103495 = cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"re-find","re-find",1143444147,null),/=>/,cljs.core.list(new cljs.core.Symbol("editor","txt-for-selector","editor/txt-for-selector",-1957500269,null),"#stdout")));
var inst_103496 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_103497 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_103498 = cljs.core.cons(inst_103497,inst_103483);
var inst_103499 = (new cljs.core.List(null,inst_103498,null,(1),null));
var inst_103500 = (new cljs.core.List(null,inst_103496,inst_103499,(2),null));
var inst_103501 = ["repl_tooling/nrepl/nrepl_test.cljs",70,new cljs.core.Keyword(null,"fail","fail",1706214930),13,123,inst_103495,123,inst_103500,null];
var inst_103502 = cljs.core.PersistentHashMap.fromArrays(inst_103494,inst_103501);
var inst_103503 = cljs.test.report.call(null,inst_103502);
var state_103802__$1 = state_103802;
var statearr_104303_108326 = state_103802__$1;
(statearr_104303_108326[(2)] = inst_103503);

(statearr_104303_108326[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103803 === (73))){
var inst_103695 = (state_103802[(2)]);
var state_103802__$1 = state_103802;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_103802__$1,(70),inst_103695);
} else {
if((state_val_103803 === (10))){
var _ = (function (){var statearr_104304 = state_103802;
(statearr_104304[(4)] = cljs.core.cons((12),(state_103802[(4)])));

return statearr_104304;
})();
var ___$1 = (function (){var statearr_104305 = state_103802;
(statearr_104305[(4)] = cljs.core.cons((13),(state_103802[(4)])));

return statearr_104305;
})();
var inst_103420 = repl_tooling.integration.fake_editor.type_and_eval("(+ 2 3)");
var state_103802__$1 = (function (){var statearr_104306 = state_103802;
(statearr_104306[(59)] = inst_103420);

return statearr_104306;
})();
var statearr_104307_108329 = state_103802__$1;
(statearr_104307_108329[(2)] = null);

(statearr_104307_108329[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103803 === (18))){
var inst_103448 = (state_103802[(2)]);
var inst_103449 = cljs.core.list(new cljs.core.Symbol(null,"await!","await!",-473046777,null),cljs.core.list(new cljs.core.Symbol("editor","change-result","editor/change-result",-914297300,null)));
var inst_103450 = "5";
var inst_103451 = matcher_combinators.core.match("5",inst_103448);
var inst_103452 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_103448], 0));
var inst_103453 = new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(inst_103451);
var inst_103454 = matcher_combinators.printer.as_string(inst_103453);
var inst_103455 = [inst_103452,"\n\nMismatch:\n",inst_103454].join('');
var inst_103456 = new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(inst_103451);
var inst_103457 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),inst_103456);
var inst_103458 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363)];
var state_103802__$1 = (function (){var statearr_104308 = state_103802;
(statearr_104308[(60)] = inst_103449);

(statearr_104308[(20)] = inst_103455);

(statearr_104308[(21)] = inst_103458);

(statearr_104308[(22)] = inst_103450);

return statearr_104308;
})();
if(inst_103457){
var statearr_104309_108332 = state_103802__$1;
(statearr_104309_108332[(1)] = (22));

} else {
var statearr_104310_108334 = state_103802__$1;
(statearr_104310_108334[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103803 === (52))){
var inst_103648 = (state_103802[(2)]);
var _ = (function (){var statearr_104311 = state_103802;
(statearr_104311[(4)] = cljs.core.rest((state_103802[(4)])));

return statearr_104311;
})();
var state_103802__$1 = state_103802;
var statearr_104312_108336 = state_103802__$1;
(statearr_104312_108336[(2)] = inst_103648);

(statearr_104312_108336[(1)] = (49));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103803 === (67))){
var inst_103718 = (state_103802[(2)]);
var _ = (function (){var statearr_104313 = state_103802;
(statearr_104313[(4)] = cljs.core.rest((state_103802[(4)])));

return statearr_104313;
})();
var state_103802__$1 = state_103802;
var statearr_104314_108337 = state_103802__$1;
(statearr_104314_108337[(2)] = inst_103718);

(statearr_104314_108337[(1)] = (64));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103803 === (71))){
var inst_103358 = (state_103802[(12)]);
var inst_103688 = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var inst_103689 = repl_tooling.integration.fake_editor.change_stdout();
var inst_103690 = (function (){var mark_as_done__53963__auto__ = inst_103358;
var chan__53977__auto__ = inst_103688;
return (function (result__53978__auto__){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan__53977__auto__,result__53978__auto__);
});
})();
var inst_103691 = inst_103689.then(inst_103690);
var state_103802__$1 = (function (){var statearr_104316 = state_103802;
(statearr_104316[(61)] = inst_103691);

return statearr_104316;
})();
var statearr_104317_108339 = state_103802__$1;
(statearr_104317_108339[(2)] = inst_103688);

(statearr_104317_108339[(1)] = (73));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103803 === (42))){
var inst_103553 = repl_tooling.integration.fake_editor.change_result();
var state_103802__$1 = state_103802;
var statearr_104318_108341 = state_103802__$1;
(statearr_104318_108341[(2)] = inst_103553);

(statearr_104318_108341[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103803 === (80))){
var _ = (function (){var statearr_104319 = state_103802;
(statearr_104319[(4)] = cljs.core.rest((state_103802[(4)])));

return statearr_104319;
})();
var state_103802__$1 = state_103802;
var ex104315 = (state_103802__$1[(2)]);
var statearr_104320_108342 = state_103802__$1;
(statearr_104320_108342[(5)] = ex104315);


throw ex104315;


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103803 === (37))){
var inst_103578 = (state_103802[(2)]);
var _ = (function (){var statearr_104321 = state_103802;
(statearr_104321[(4)] = cljs.core.rest((state_103802[(4)])));

return statearr_104321;
})();
var state_103802__$1 = state_103802;
var statearr_104322_108343 = state_103802__$1;
(statearr_104322_108343[(2)] = inst_103578);

(statearr_104322_108343[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103803 === (63))){
var inst_103721 = (state_103802[(2)]);
var inst_103722 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_103723 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_103724 = (new cljs.core.PersistentVector(null,1,(5),inst_103722,inst_103723,null));
var inst_103725 = cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(inst_103724,cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["break works"], 0));
var state_103802__$1 = (function (){var statearr_104323 = state_103802;
(statearr_104323[(62)] = inst_103721);

(statearr_104323[(63)] = inst_103725);

return statearr_104323;
})();
var statearr_104324_108345 = state_103802__$1;
(statearr_104324_108345[(2)] = null);

(statearr_104324_108345[(1)] = (77));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103803 === (8))){
var inst_103358 = (state_103802[(12)]);
var inst_103397 = (function (){var mark_as_done__53963__auto__ = inst_103358;
return (function (){
return new cljs.core.Keyword(null,"eval","eval",-1103567905).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"repls","repls",870822864).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(repl_tooling.integration.fake_editor.state)));
});
})();
var inst_103398 = repl_tooling.integration.fake_editor.wait_for(inst_103397);
var state_103802__$1 = state_103802;
var statearr_104328_108347 = state_103802__$1;
(statearr_104328_108347[(2)] = inst_103398);

(statearr_104328_108347[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103803 === (49))){
var _ = (function (){var statearr_104330 = state_103802;
(statearr_104330[(4)] = cljs.core.rest((state_103802[(4)])));

return statearr_104330;
})();
var inst_103587 = (state_103802[(2)]);
var inst_103588 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_103589 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_103590 = (new cljs.core.PersistentVector(null,1,(5),inst_103588,inst_103589,null));
var inst_103591 = cljs.test.update_current_env_BANG_(inst_103590,cljs.core.rest);
var ___$1 = (function (){var temp__5753__auto__ = (state_103802[(5)]);
if(cljs.core.truth_(temp__5753__auto__)){
var e__34184__auto__ = temp__5753__auto__;
throw e__34184__auto__;
} else {
return null;
}
})();
var state_103802__$1 = (function (){var statearr_104332 = state_103802;
(statearr_104332[(64)] = inst_103591);

return statearr_104332;
})();
var statearr_104333_108349 = state_103802__$1;
(statearr_104333_108349[(2)] = inst_103587);

(statearr_104333_108349[(1)] = (48));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103803 === (84))){
var inst_103748 = (state_103802[(2)]);
var inst_103749 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_103750 = check.core.normalize_error(inst_103748);
var inst_103751 = cljs.core.list(new cljs.core.Symbol(null,"await!","await!",-473046777,null),cljs.core.list(new cljs.core.Symbol("editor","change-result","editor/change-result",-914297300,null)));
var inst_103752 = new cljs.core.Symbol(null,"=>","=>",-813269641,null);
var inst_103753 = /Interrupted/;
var inst_103754 = ["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_103751)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_103752)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_103753)].join('');
var inst_103755 = [new cljs.core.Keyword(null,"error","error",-978969032),/Interrupted/,inst_103750,inst_103754];
var inst_103756 = cljs.core.PersistentHashMap.fromArrays(inst_103749,inst_103755);
var inst_103757 = cljs.test.do_report(inst_103756);
var state_103802__$1 = state_103802;
var statearr_104334_108351 = state_103802__$1;
(statearr_104334_108351[(2)] = inst_103757);

(statearr_104334_108351[(1)] = (83));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var repl_tooling$nrepl$nrepl_test$state_machine__34940__auto__ = null;
var repl_tooling$nrepl$nrepl_test$state_machine__34940__auto____0 = (function (){
var statearr_104362 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_104362[(0)] = repl_tooling$nrepl$nrepl_test$state_machine__34940__auto__);

(statearr_104362[(1)] = (1));

return statearr_104362;
});
var repl_tooling$nrepl$nrepl_test$state_machine__34940__auto____1 = (function (state_103802){
while(true){
var ret_value__34941__auto__ = (function (){try{while(true){
var result__34942__auto__ = switch__34939__auto__(state_103802);
if(cljs.core.keyword_identical_QMARK_(result__34942__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34942__auto__;
}
break;
}
}catch (e104381){var ex__34943__auto__ = e104381;
var statearr_104382_108353 = state_103802;
(statearr_104382_108353[(2)] = ex__34943__auto__);


if(cljs.core.seq((state_103802[(4)]))){
var statearr_104389_108354 = state_103802;
(statearr_104389_108354[(1)] = cljs.core.first((state_103802[(4)])));

} else {
throw ex__34943__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34941__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__108356 = state_103802;
state_103802 = G__108356;
continue;
} else {
return ret_value__34941__auto__;
}
break;
}
});
repl_tooling$nrepl$nrepl_test$state_machine__34940__auto__ = function(state_103802){
switch(arguments.length){
case 0:
return repl_tooling$nrepl$nrepl_test$state_machine__34940__auto____0.call(this);
case 1:
return repl_tooling$nrepl$nrepl_test$state_machine__34940__auto____1.call(this,state_103802);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
repl_tooling$nrepl$nrepl_test$state_machine__34940__auto__.cljs$core$IFn$_invoke$arity$0 = repl_tooling$nrepl$nrepl_test$state_machine__34940__auto____0;
repl_tooling$nrepl$nrepl_test$state_machine__34940__auto__.cljs$core$IFn$_invoke$arity$1 = repl_tooling$nrepl$nrepl_test$state_machine__34940__auto____1;
return repl_tooling$nrepl$nrepl_test$state_machine__34940__auto__;
})()
})();
var state__35943__auto__ = (function (){var statearr_104423 = f__35942__auto__();
(statearr_104423[(6)] = c__35941__auto__);

return statearr_104423;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35943__auto__);
}));

return c__35941__auto__;
}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}}));

(repl_tooling.nrepl.nrepl_test.t_repl_tooling$nrepl$nrepl_test102710.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"meta102711","meta102711",1255688703,null)], null);
}));

(repl_tooling.nrepl.nrepl_test.t_repl_tooling$nrepl$nrepl_test102710.cljs$lang$type = true);

(repl_tooling.nrepl.nrepl_test.t_repl_tooling$nrepl$nrepl_test102710.cljs$lang$ctorStr = "repl-tooling.nrepl.nrepl-test/t_repl_tooling$nrepl$nrepl_test102710");

(repl_tooling.nrepl.nrepl_test.t_repl_tooling$nrepl$nrepl_test102710.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"repl-tooling.nrepl.nrepl-test/t_repl_tooling$nrepl$nrepl_test102710");
}));

/**
 * Positional factory function for repl-tooling.nrepl.nrepl-test/t_repl_tooling$nrepl$nrepl_test102710.
 */
repl_tooling.nrepl.nrepl_test.__GT_t_repl_tooling$nrepl$nrepl_test102710 = (function repl_tooling$nrepl$nrepl_test$__GT_t_repl_tooling$nrepl$nrepl_test102710(out__$1,meta102711){
return (new repl_tooling.nrepl.nrepl_test.t_repl_tooling$nrepl$nrepl_test102710(out__$1,meta102711));
});

}

return (new repl_tooling.nrepl.nrepl_test.t_repl_tooling$nrepl$nrepl_test102710(out,null));
})], 0)),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));

repl_tooling.nrepl.nrepl_test.nrepl_connection = (function repl_tooling$nrepl$nrepl_test$nrepl_connection(){
return cljs.test.test_var(repl_tooling.nrepl.nrepl_test.nrepl_connection.cljs$lang$var);
});
repl_tooling.nrepl.nrepl_test.nrepl_connection.cljs$lang$test = (function (){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
if((typeof repl_tooling !== 'undefined') && (typeof repl_tooling.nrepl !== 'undefined') && (typeof repl_tooling.nrepl.nrepl_test !== 'undefined') && (typeof repl_tooling.nrepl.nrepl_test.t_repl_tooling$nrepl$nrepl_test104510 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
repl_tooling.nrepl.nrepl_test.t_repl_tooling$nrepl$nrepl_test104510 = (function (out,meta104511){
this.out = out;
this.meta104511 = meta104511;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(repl_tooling.nrepl.nrepl_test.t_repl_tooling$nrepl$nrepl_test104510.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_104512,meta104511__$1){
var self__ = this;
var _104512__$1 = this;
return (new repl_tooling.nrepl.nrepl_test.t_repl_tooling$nrepl$nrepl_test104510(self__.out,meta104511__$1));
}));

(repl_tooling.nrepl.nrepl_test.t_repl_tooling$nrepl$nrepl_test104510.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_104512){
var self__ = this;
var _104512__$1 = this;
return self__.meta104511;
}));

(repl_tooling.nrepl.nrepl_test.t_repl_tooling$nrepl$nrepl_test104510.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(repl_tooling.nrepl.nrepl_test.t_repl_tooling$nrepl$nrepl_test104510.prototype.call = (function (self__,done__53962__auto__){
var self__ = this;
var self____$1 = this;
var ___9200__auto__ = self____$1;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["connecting to a nREPL REPL"], 0));

try{var c__35941__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35942__auto__ = (function (){var switch__34939__auto__ = (function (state_105028){
var state_val_105029 = (state_105028[(1)]);
if((state_val_105029 === (65))){
var _ = (function (){var statearr_105035 = state_105028;
(statearr_105035[(4)] = cljs.core.rest((state_105028[(4)])));

return statearr_105035;
})();
var state_105028__$1 = state_105028;
var ex105030 = (state_105028__$1[(2)]);
var statearr_105037_108361 = state_105028__$1;
(statearr_105037_108361[(5)] = ex105030);


throw ex105030;


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105029 === (70))){
var inst_104923 = (state_105028[(2)]);
var inst_104924 = cljs.core.list(new cljs.core.Symbol(null,"await!","await!",-473046777,null),cljs.core.list(new cljs.core.Symbol("editor","change-stdout","editor/change-stdout",294315011,null)));
var inst_104925 = /Hi: :some-error/;
var inst_104926 = matcher_combinators.core.match(/Hi: :some-error/,inst_104923);
var inst_104927 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_104923], 0));
var inst_104928 = new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(inst_104926);
var inst_104929 = matcher_combinators.printer.as_string(inst_104928);
var inst_104930 = [inst_104927,"\n\nMismatch:\n",inst_104929].join('');
var inst_104931 = new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(inst_104926);
var inst_104932 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),inst_104931);
var inst_104933 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363)];
var state_105028__$1 = (function (){var statearr_105040 = state_105028;
(statearr_105040[(7)] = inst_104924);

(statearr_105040[(8)] = inst_104930);

(statearr_105040[(9)] = inst_104933);

(statearr_105040[(10)] = inst_104925);

return statearr_105040;
})();
if(inst_104932){
var statearr_105041_108363 = state_105028__$1;
(statearr_105041_108363[(1)] = (74));

} else {
var statearr_105042_108364 = state_105028__$1;
(statearr_105042_108364[(1)] = (75));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105029 === (62))){
var _ = (function (){var statearr_105043 = state_105028;
(statearr_105043[(4)] = cljs.core.cons((64),(state_105028[(4)])));

return statearr_105043;
})();
var ___$1 = (function (){var statearr_105044 = state_105028;
(statearr_105044[(4)] = cljs.core.cons((65),(state_105028[(4)])));

return statearr_105044;
})();
var inst_104895 = repl_tooling.integration.fake_editor.type_and_eval("(binding [*out* *err*] (prn :some-error))");
var state_105028__$1 = (function (){var statearr_105045 = state_105028;
(statearr_105045[(11)] = inst_104895);

return statearr_105045;
})();
var statearr_105046_108366 = state_105028__$1;
(statearr_105046_108366[(2)] = null);

(statearr_105046_108366[(1)] = (66));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105029 === (74))){
var state_105028__$1 = state_105028;
var statearr_105048_108367 = state_105028__$1;
(statearr_105048_108367[(2)] = new cljs.core.Keyword(null,"pass","pass",1574159993));

(statearr_105048_108367[(1)] = (76));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105029 === (7))){
var inst_104581 = (state_105028[(12)]);
var inst_104617 = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var inst_104618 = (function (){var mark_as_done__53963__auto__ = inst_104581;
var chan__53977__auto__ = inst_104617;
return (function (){
return new cljs.core.Keyword(null,"eval","eval",-1103567905).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"repls","repls",870822864).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(repl_tooling.integration.fake_editor.state)));
});
})();
var inst_104619 = repl_tooling.integration.fake_editor.wait_for(inst_104618);
var inst_104620 = (function (){var mark_as_done__53963__auto__ = inst_104581;
var chan__53977__auto__ = inst_104617;
return (function (result__53978__auto__){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan__53977__auto__,result__53978__auto__);
});
})();
var inst_104621 = inst_104619.then(inst_104620);
var state_105028__$1 = (function (){var statearr_105050 = state_105028;
(statearr_105050[(13)] = inst_104621);

return statearr_105050;
})();
var statearr_105052_108371 = state_105028__$1;
(statearr_105052_108371[(2)] = inst_104617);

(statearr_105052_108371[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105029 === (59))){
var state_105028__$1 = state_105028;
var statearr_105053_108373 = state_105028__$1;
(statearr_105053_108373[(2)] = new cljs.core.Keyword(null,"pass","pass",1574159993));

(statearr_105053_108373[(1)] = (61));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105029 === (86))){
var inst_105001 = (state_105028[(2)]);
var inst_105002 = cljs.core.list(new cljs.core.Symbol(null,"await!","await!",-473046777,null),cljs.core.list(new cljs.core.Symbol("editor","change-result","editor/change-result",-914297300,null)));
var inst_105003 = /Interrupted/;
var inst_105004 = matcher_combinators.core.match(/Interrupted/,inst_105001);
var inst_105005 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_105001], 0));
var inst_105006 = new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(inst_105004);
var inst_105007 = matcher_combinators.printer.as_string(inst_105006);
var inst_105008 = [inst_105005,"\n\nMismatch:\n",inst_105007].join('');
var inst_105009 = new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(inst_105004);
var inst_105010 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),inst_105009);
var inst_105011 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363)];
var state_105028__$1 = (function (){var statearr_105055 = state_105028;
(statearr_105055[(14)] = inst_105011);

(statearr_105055[(15)] = inst_105002);

(statearr_105055[(16)] = inst_105003);

(statearr_105055[(17)] = inst_105008);

return statearr_105055;
})();
if(inst_105010){
var statearr_105056_108375 = state_105028__$1;
(statearr_105056_108375[(1)] = (90));

} else {
var statearr_105057_108376 = state_105028__$1;
(statearr_105057_108376[(1)] = (91));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105029 === (20))){
var inst_104670 = repl_tooling.integration.fake_editor.change_result();
var state_105028__$1 = state_105028;
var statearr_105058_108378 = state_105028__$1;
(statearr_105058_108378[(2)] = inst_104670);

(statearr_105058_108378[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105029 === (72))){
var inst_104919 = repl_tooling.integration.fake_editor.change_stdout();
var state_105028__$1 = state_105028;
var statearr_105059_108380 = state_105028__$1;
(statearr_105059_108380[(2)] = inst_104919);

(statearr_105059_108380[(1)] = (73));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105029 === (58))){
var inst_104851 = (state_105028[(2)]);
var state_105028__$1 = state_105028;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_105028__$1,(55),inst_104851);
} else {
if((state_val_105029 === (60))){
var state_105028__$1 = state_105028;
var statearr_105064_108381 = state_105028__$1;
(statearr_105064_108381[(2)] = new cljs.core.Keyword(null,"fail","fail",1706214930));

(statearr_105064_108381[(1)] = (61));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105029 === (27))){
var inst_104696 = (state_105028[(2)]);
var inst_104697 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_104698 = cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"re-find","re-find",1143444147,null),/=>/,cljs.core.list(new cljs.core.Symbol("editor","txt-for-selector","editor/txt-for-selector",-1957500269,null),"#stdout")));
var inst_104699 = ["repl_tooling/nrepl/nrepl_test.cljs",70,new cljs.core.Keyword(null,"error","error",-978969032),13,123,inst_104698,123,inst_104696,null];
var inst_104700 = cljs.core.PersistentHashMap.fromArrays(inst_104697,inst_104699);
var inst_104701 = cljs.test.report.call(null,inst_104700);
var state_105028__$1 = state_105028;
var statearr_105067_108384 = state_105028__$1;
(statearr_105067_108384[(2)] = inst_104701);

(statearr_105067_108384[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105029 === (1))){
var inst_104581 = (state_105028[(12)]);
var inst_104580 = (function (){return (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(repl_tooling.integration.fake_editor.state,cljs.core.assoc,new cljs.core.Keyword(null,"port","port",1534937262),(2233));

cljs.core.async.close_BANG_(self__.out);

repl_tooling.integration.fake_editor.disconnect_BANG_();

return (done__53962__auto__.cljs$core$IFn$_invoke$arity$0 ? done__53962__auto__.cljs$core$IFn$_invoke$arity$0() : done__53962__auto__.call(null));
});
})();
var inst_104581__$1 = (new cljs.core.Delay(inst_104580,null));
var inst_104583 = (function (){var mark_as_done__53963__auto__ = inst_104581__$1;
return (function (){
if(cljs.core.realized_QMARK_(mark_as_done__53963__auto__)){
return null;
} else {
try{var value__9156__auto___108386 = (function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Async test error - not finalized",cljs.core.PersistentArrayMap.EMPTY)})();
if(cljs.core.truth_(value__9156__auto___108386)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"pass","pass",1574159993),null,null,cljs.core.list(new cljs.core.Symbol(null,"throw","throw",595905694,null),cljs.core.list(new cljs.core.Symbol("clojure.core","ex-info","clojure.core/ex-info",-504237117,null),"Async test error - not finalized",cljs.core.PersistentArrayMap.EMPTY)),null,value__9156__auto___108386,null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"fail","fail",1706214930),null,null,cljs.core.list(new cljs.core.Symbol(null,"throw","throw",595905694,null),cljs.core.list(new cljs.core.Symbol("clojure.core","ex-info","clojure.core/ex-info",-504237117,null),"Async test error - not finalized",cljs.core.PersistentArrayMap.EMPTY)),null,value__9156__auto___108386,null]));
}

}catch (e105069){var t__9189__auto___108389 = e105069;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol(null,"throw","throw",595905694,null),cljs.core.list(new cljs.core.Symbol("clojure.core","ex-info","clojure.core/ex-info",-504237117,null),"Async test error - not finalized",cljs.core.PersistentArrayMap.EMPTY)),null,t__9189__auto___108389,null]));
}
return cljs.core.deref(mark_as_done__53963__auto__);
}
});
})();
var inst_104584 = setTimeout(inst_104583,(8000));
var inst_104585 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(repl_tooling.integration.fake_editor.state,cljs.core.assoc,new cljs.core.Keyword(null,"port","port",1534937262),(3322));
var inst_104587 = [new cljs.core.Keyword(null,"on-stderr","on-stderr",1583456038)];
var inst_104589 = (function (){var mark_as_done__53963__auto__ = inst_104581__$1;
return (function (p1__102709_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(repl_tooling.integration.fake_editor.state,cljs.core.update,new cljs.core.Keyword(null,"stdout","stdout",-531490018),(function (e){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(e),"Hi: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__102709_SHARP_)].join('');
}));
});
})();
var inst_104590 = [inst_104589];
var inst_104591 = cljs.core.PersistentHashMap.fromArrays(inst_104587,inst_104590);
var inst_104592 = repl_tooling.integration.fake_editor.connect_BANG_.cljs$core$IFn$_invoke$arity$1(inst_104591);
var inst_104593 = (inst_104592 instanceof Promise);
var state_105028__$1 = (function (){var statearr_105073 = state_105028;
(statearr_105073[(18)] = inst_104585);

(statearr_105073[(12)] = inst_104581__$1);

(statearr_105073[(19)] = inst_104584);

return statearr_105073;
})();
if(cljs.core.truth_(inst_104593)){
var statearr_105075_108393 = state_105028__$1;
(statearr_105075_108393[(1)] = (3));

} else {
var statearr_105077_108394 = state_105028__$1;
(statearr_105077_108394[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105029 === (69))){
var _ = (function (){var statearr_105079 = state_105028;
(statearr_105079[(4)] = cljs.core.rest((state_105028[(4)])));

return statearr_105079;
})();
var state_105028__$1 = state_105028;
var ex105065 = (state_105028__$1[(2)]);
var statearr_105080_108396 = state_105028__$1;
(statearr_105080_108396[(5)] = ex105065);


var statearr_105081_108397 = state_105028__$1;
(statearr_105081_108397[(1)] = (68));

(statearr_105081_108397[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105029 === (24))){
var inst_104676 = (state_105028[(20)]);
var inst_104684 = (state_105028[(21)]);
var inst_104681 = (state_105028[(22)]);
var inst_104688 = (state_105028[(2)]);
var inst_104689 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(inst_104681);
var inst_104690 = [inst_104688,inst_104676,inst_104689];
var inst_104691 = cljs.core.PersistentHashMap.fromArrays(inst_104684,inst_104690);
var inst_104692 = cljs.test.do_report(inst_104691);
var _ = (function (){var statearr_105087 = state_105028;
(statearr_105087[(4)] = cljs.core.rest((state_105028[(4)])));

return statearr_105087;
})();
var state_105028__$1 = state_105028;
var statearr_105089_108399 = state_105028__$1;
(statearr_105089_108399[(2)] = inst_104692);

(statearr_105089_108399[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105029 === (55))){
var inst_104853 = (state_105028[(2)]);
var inst_104854 = cljs.core.list(new cljs.core.Symbol(null,"await!","await!",-473046777,null),cljs.core.list(new cljs.core.Symbol("editor","change-stdout","editor/change-stdout",294315011,null)));
var inst_104855 = /:some-message/;
var inst_104856 = matcher_combinators.core.match(/:some-message/,inst_104853);
var inst_104857 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_104853], 0));
var inst_104858 = new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(inst_104856);
var inst_104859 = matcher_combinators.printer.as_string(inst_104858);
var inst_104860 = [inst_104857,"\n\nMismatch:\n",inst_104859].join('');
var inst_104861 = new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(inst_104856);
var inst_104862 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),inst_104861);
var inst_104863 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363)];
var state_105028__$1 = (function (){var statearr_105091 = state_105028;
(statearr_105091[(23)] = inst_104854);

(statearr_105091[(24)] = inst_104855);

(statearr_105091[(25)] = inst_104863);

(statearr_105091[(26)] = inst_104860);

return statearr_105091;
})();
if(inst_104862){
var statearr_105092_108403 = state_105028__$1;
(statearr_105092_108403[(1)] = (59));

} else {
var statearr_105093_108404 = state_105028__$1;
(statearr_105093_108404[(1)] = (60));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105029 === (85))){
var _ = (function (){var statearr_105094 = state_105028;
(statearr_105094[(4)] = cljs.core.rest((state_105028[(4)])));

return statearr_105094;
})();
var state_105028__$1 = state_105028;
var ex105084 = (state_105028__$1[(2)]);
var statearr_105095_108405 = state_105028__$1;
(statearr_105095_108405[(5)] = ex105084);


var statearr_105096_108407 = state_105028__$1;
(statearr_105096_108407[(1)] = (84));

(statearr_105096_108407[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105029 === (39))){
var _ = (function (){var statearr_105097 = state_105028;
(statearr_105097[(4)] = cljs.core.rest((state_105028[(4)])));

return statearr_105097;
})();
var state_105028__$1 = state_105028;
var ex105090 = (state_105028__$1[(2)]);
var statearr_105098_108409 = state_105028__$1;
(statearr_105098_108409[(5)] = ex105090);


var statearr_105099_108411 = state_105028__$1;
(statearr_105099_108411[(1)] = (38));

(statearr_105099_108411[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105029 === (88))){
var inst_104997 = repl_tooling.integration.fake_editor.change_result();
var state_105028__$1 = state_105028;
var statearr_105100_108412 = state_105028__$1;
(statearr_105100_108412[(2)] = inst_104997);

(statearr_105100_108412[(1)] = (89));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105029 === (46))){
var inst_104793 = (state_105028[(27)]);
var inst_104790 = (state_105028[(28)]);
var inst_104785 = (state_105028[(29)]);
var inst_104797 = (state_105028[(2)]);
var inst_104798 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(inst_104790);
var inst_104799 = [inst_104797,inst_104785,inst_104798];
var inst_104800 = cljs.core.PersistentHashMap.fromArrays(inst_104793,inst_104799);
var inst_104801 = cljs.test.do_report(inst_104800);
var _ = (function (){var statearr_105101 = state_105028;
(statearr_105101[(4)] = cljs.core.rest((state_105028[(4)])));

return statearr_105101;
})();
var state_105028__$1 = state_105028;
var statearr_105102_108413 = state_105028__$1;
(statearr_105102_108413[(2)] = inst_104801);

(statearr_105102_108413[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105029 === (4))){
var inst_104581 = (state_105028[(12)]);
var inst_104604 = [new cljs.core.Keyword(null,"on-stderr","on-stderr",1583456038)];
var inst_104605 = (function (){var mark_as_done__53963__auto__ = inst_104581;
return (function (p1__102709_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(repl_tooling.integration.fake_editor.state,cljs.core.update,new cljs.core.Keyword(null,"stdout","stdout",-531490018),(function (e){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(e),"Hi: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__102709_SHARP_)].join('');
}));
});
})();
var inst_104606 = [inst_104605];
var inst_104607 = cljs.core.PersistentHashMap.fromArrays(inst_104604,inst_104606);
var inst_104608 = repl_tooling.integration.fake_editor.connect_BANG_.cljs$core$IFn$_invoke$arity$1(inst_104607);
var state_105028__$1 = state_105028;
var statearr_105104_108416 = state_105028__$1;
(statearr_105104_108416[(2)] = inst_104608);

(statearr_105104_108416[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105029 === (77))){
var _ = (function (){var statearr_105105 = state_105028;
(statearr_105105[(4)] = cljs.core.cons((79),(state_105028[(4)])));

return statearr_105105;
})();
var ___$1 = (function (){var statearr_105106 = state_105028;
(statearr_105106[(4)] = cljs.core.cons((80),(state_105028[(4)])));

return statearr_105106;
})();
var inst_104965 = repl_tooling.integration.fake_editor.type_and_eval("(Thread/sleep 1000)");
var inst_104966 = cljs.core.async.timeout((200));
var state_105028__$1 = (function (){var statearr_105107 = state_105028;
(statearr_105107[(30)] = inst_104965);

return statearr_105107;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_105028__$1,(81),inst_104966);
} else {
if((state_val_105029 === (54))){
var _ = (function (){var statearr_105108 = state_105028;
(statearr_105108[(4)] = cljs.core.rest((state_105028[(4)])));

return statearr_105108;
})();
var state_105028__$1 = state_105028;
var ex105103 = (state_105028__$1[(2)]);
var statearr_105109_108419 = state_105028__$1;
(statearr_105109_108419[(5)] = ex105103);


var statearr_105110_108421 = state_105028__$1;
(statearr_105110_108421[(1)] = (53));

(statearr_105110_108421[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105029 === (92))){
var inst_105011 = (state_105028[(14)]);
var inst_105003 = (state_105028[(16)]);
var inst_105008 = (state_105028[(17)]);
var inst_105015 = (state_105028[(2)]);
var inst_105016 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(inst_105008);
var inst_105017 = [inst_105015,inst_105003,inst_105016];
var inst_105018 = cljs.core.PersistentHashMap.fromArrays(inst_105011,inst_105017);
var inst_105019 = cljs.test.do_report(inst_105018);
var _ = (function (){var statearr_105111 = state_105028;
(statearr_105111[(4)] = cljs.core.rest((state_105028[(4)])));

return statearr_105111;
})();
var state_105028__$1 = state_105028;
var statearr_105112_108424 = state_105028__$1;
(statearr_105112_108424[(2)] = inst_105019);

(statearr_105112_108424[(1)] = (83));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105029 === (15))){
var inst_104695 = (state_105028[(2)]);
var state_105028__$1 = (function (){var statearr_105114 = state_105028;
(statearr_105114[(31)] = inst_104695);

return statearr_105114;
})();
var statearr_105115_108427 = state_105028__$1;
(statearr_105115_108427[(2)] = null);

(statearr_105115_108427[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105029 === (48))){
var inst_104877 = (state_105028[(2)]);
var inst_104878 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_104879 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_104880 = (new cljs.core.PersistentVector(null,1,(5),inst_104878,inst_104879,null));
var inst_104881 = cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(inst_104880,cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["STDERR works"], 0));
var state_105028__$1 = (function (){var statearr_105116 = state_105028;
(statearr_105116[(32)] = inst_104881);

(statearr_105116[(33)] = inst_104877);

return statearr_105116;
})();
var statearr_105117_108428 = state_105028__$1;
(statearr_105117_108428[(2)] = null);

(statearr_105117_108428[(1)] = (62));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105029 === (50))){
var _ = (function (){var statearr_105118 = state_105028;
(statearr_105118[(4)] = cljs.core.rest((state_105028[(4)])));

return statearr_105118;
})();
var state_105028__$1 = state_105028;
var ex105113 = (state_105028__$1[(2)]);
var statearr_105119_108430 = state_105028__$1;
(statearr_105119_108430[(5)] = ex105113);


throw ex105113;


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105029 === (75))){
var state_105028__$1 = state_105028;
var statearr_105120_108431 = state_105028__$1;
(statearr_105120_108431[(2)] = new cljs.core.Keyword(null,"fail","fail",1706214930));

(statearr_105120_108431[(1)] = (76));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105029 === (21))){
var inst_104672 = (state_105028[(2)]);
var state_105028__$1 = state_105028;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_105028__$1,(18),inst_104672);
} else {
if((state_val_105029 === (31))){
var inst_104710 = (state_105028[(34)]);
var inst_104731 = (state_105028[(2)]);
var _ = (function (){var statearr_105121 = state_105028;
(statearr_105121[(4)] = cljs.core.rest((state_105028[(4)])));

return statearr_105121;
})();
var state_105028__$1 = (function (){var statearr_105122 = state_105028;
(statearr_105122[(35)] = inst_104731);

return statearr_105122;
})();
var statearr_105123_108433 = state_105028__$1;
(statearr_105123_108433[(2)] = inst_104710);

(statearr_105123_108433[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105029 === (32))){
var _ = (function (){var statearr_105124 = state_105028;
(statearr_105124[(4)] = cljs.core.cons((34),(state_105028[(4)])));

return statearr_105124;
})();
var ___$1 = (function (){var statearr_105125 = state_105028;
(statearr_105125[(4)] = cljs.core.cons((35),(state_105028[(4)])));

return statearr_105125;
})();
var inst_104755 = repl_tooling.integration.fake_editor.type_and_eval("(/ 10 0)");
var state_105028__$1 = (function (){var statearr_105126 = state_105028;
(statearr_105126[(36)] = inst_104755);

return statearr_105126;
})();
var statearr_105127_108434 = state_105028__$1;
(statearr_105127_108434[(2)] = null);

(statearr_105127_108434[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105029 === (40))){
var inst_104783 = (state_105028[(2)]);
var inst_104784 = cljs.core.list(new cljs.core.Symbol(null,"await!","await!",-473046777,null),cljs.core.list(new cljs.core.Symbol("editor","change-result","editor/change-result",-914297300,null)));
var inst_104785 = /java.lang.ArithmeticException/;
var inst_104786 = matcher_combinators.core.match(/java.lang.ArithmeticException/,inst_104783);
var inst_104787 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_104783], 0));
var inst_104788 = new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(inst_104786);
var inst_104789 = matcher_combinators.printer.as_string(inst_104788);
var inst_104790 = [inst_104787,"\n\nMismatch:\n",inst_104789].join('');
var inst_104791 = new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(inst_104786);
var inst_104792 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),inst_104791);
var inst_104793 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363)];
var state_105028__$1 = (function (){var statearr_105128 = state_105028;
(statearr_105128[(27)] = inst_104793);

(statearr_105128[(37)] = inst_104784);

(statearr_105128[(28)] = inst_104790);

(statearr_105128[(29)] = inst_104785);

return statearr_105128;
})();
if(inst_104792){
var statearr_105129_108437 = state_105028__$1;
(statearr_105129_108437[(1)] = (44));

} else {
var statearr_105130_108439 = state_105028__$1;
(statearr_105130_108439[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105029 === (91))){
var state_105028__$1 = state_105028;
var statearr_105131_108440 = state_105028__$1;
(statearr_105131_108440[(2)] = new cljs.core.Keyword(null,"fail","fail",1706214930));

(statearr_105131_108440[(1)] = (92));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105029 === (56))){
var inst_104581 = (state_105028[(12)]);
var inst_104844 = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var inst_104845 = repl_tooling.integration.fake_editor.change_stdout();
var inst_104846 = (function (){var mark_as_done__53963__auto__ = inst_104581;
var chan__53977__auto__ = inst_104844;
return (function (result__53978__auto__){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan__53977__auto__,result__53978__auto__);
});
})();
var inst_104847 = inst_104845.then(inst_104846);
var state_105028__$1 = (function (){var statearr_105133 = state_105028;
(statearr_105133[(38)] = inst_104847);

return statearr_105133;
})();
var statearr_105134_108441 = state_105028__$1;
(statearr_105134_108441[(2)] = inst_104844);

(statearr_105134_108441[(1)] = (58));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105029 === (33))){
var inst_104807 = (state_105028[(2)]);
var inst_104808 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_104809 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_104810 = (new cljs.core.PersistentVector(null,1,(5),inst_104808,inst_104809,null));
var inst_104811 = cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(inst_104810,cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["STDOUT works"], 0));
var state_105028__$1 = (function (){var statearr_105135 = state_105028;
(statearr_105135[(39)] = inst_104807);

(statearr_105135[(40)] = inst_104811);

return statearr_105135;
})();
var statearr_105136_108444 = state_105028__$1;
(statearr_105136_108444[(2)] = null);

(statearr_105136_108444[(1)] = (47));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105029 === (13))){
var _ = (function (){var statearr_105137 = state_105028;
(statearr_105137[(4)] = cljs.core.rest((state_105028[(4)])));

return statearr_105137;
})();
var state_105028__$1 = state_105028;
var ex105132 = (state_105028__$1[(2)]);
var statearr_105138_108445 = state_105028__$1;
(statearr_105138_108445[(5)] = ex105132);


throw ex105132;


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105029 === (22))){
var state_105028__$1 = state_105028;
var statearr_105139_108446 = state_105028__$1;
(statearr_105139_108446[(2)] = new cljs.core.Keyword(null,"pass","pass",1574159993));

(statearr_105139_108446[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105029 === (90))){
var state_105028__$1 = state_105028;
var statearr_105140_108447 = state_105028__$1;
(statearr_105140_108447[(2)] = new cljs.core.Keyword(null,"pass","pass",1574159993));

(statearr_105140_108447[(1)] = (92));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105029 === (36))){
var _ = (function (){var statearr_105141 = state_105028;
(statearr_105141[(4)] = cljs.core.cons((39),(state_105028[(4)])));

return statearr_105141;
})();
var inst_104771 = repl_tooling.integration.fake_editor.change_result();
var inst_104772 = (inst_104771 instanceof Promise);
var state_105028__$1 = state_105028;
if(cljs.core.truth_(inst_104772)){
var statearr_105142_108448 = state_105028__$1;
(statearr_105142_108448[(1)] = (41));

} else {
var statearr_105143_108449 = state_105028__$1;
(statearr_105143_108449[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105029 === (41))){
var inst_104581 = (state_105028[(12)]);
var inst_104774 = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var inst_104775 = repl_tooling.integration.fake_editor.change_result();
var inst_104776 = (function (){var mark_as_done__53963__auto__ = inst_104581;
var chan__53977__auto__ = inst_104774;
return (function (result__53978__auto__){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan__53977__auto__,result__53978__auto__);
});
})();
var inst_104777 = inst_104775.then(inst_104776);
var state_105028__$1 = (function (){var statearr_105144 = state_105028;
(statearr_105144[(41)] = inst_104777);

return statearr_105144;
})();
var statearr_105145_108452 = state_105028__$1;
(statearr_105145_108452[(2)] = inst_104774);

(statearr_105145_108452[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105029 === (89))){
var inst_104999 = (state_105028[(2)]);
var state_105028__$1 = state_105028;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_105028__$1,(86),inst_104999);
} else {
if((state_val_105029 === (43))){
var inst_104781 = (state_105028[(2)]);
var state_105028__$1 = state_105028;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_105028__$1,(40),inst_104781);
} else {
if((state_val_105029 === (61))){
var inst_104855 = (state_105028[(24)]);
var inst_104863 = (state_105028[(25)]);
var inst_104860 = (state_105028[(26)]);
var inst_104867 = (state_105028[(2)]);
var inst_104868 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(inst_104860);
var inst_104869 = [inst_104867,inst_104855,inst_104868];
var inst_104870 = cljs.core.PersistentHashMap.fromArrays(inst_104863,inst_104869);
var inst_104871 = cljs.test.do_report(inst_104870);
var _ = (function (){var statearr_105149 = state_105028;
(statearr_105149[(4)] = cljs.core.rest((state_105028[(4)])));

return statearr_105149;
})();
var state_105028__$1 = state_105028;
var statearr_105150_108454 = state_105028__$1;
(statearr_105150_108454[(2)] = inst_104871);

(statearr_105150_108454[(1)] = (52));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105029 === (29))){
var inst_104709 = (state_105028[(42)]);
var inst_104712 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_104713 = cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"re-find","re-find",1143444147,null),/=>/,cljs.core.list(new cljs.core.Symbol("editor","txt-for-selector","editor/txt-for-selector",-1957500269,null),"#stdout")));
var inst_104714 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_104715 = cljs.core.cons(inst_104714,inst_104709);
var inst_104716 = ["repl_tooling/nrepl/nrepl_test.cljs",70,new cljs.core.Keyword(null,"pass","pass",1574159993),13,123,inst_104713,123,inst_104715,null];
var inst_104717 = cljs.core.PersistentHashMap.fromArrays(inst_104712,inst_104716);
var inst_104718 = cljs.test.report.call(null,inst_104717);
var state_105028__$1 = state_105028;
var statearr_105153_108457 = state_105028__$1;
(statearr_105153_108457[(2)] = inst_104718);

(statearr_105153_108457[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105029 === (44))){
var state_105028__$1 = state_105028;
var statearr_105155_108458 = state_105028__$1;
(statearr_105155_108458[(2)] = new cljs.core.Keyword(null,"pass","pass",1574159993));

(statearr_105155_108458[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105029 === (6))){
var inst_104628 = (state_105028[(2)]);
var inst_104629 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_104630 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_104631 = (new cljs.core.PersistentVector(null,1,(5),inst_104629,inst_104630,null));
var inst_104632 = cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(inst_104631,cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["evaluation works"], 0));
var state_105028__$1 = (function (){var statearr_105158 = state_105028;
(statearr_105158[(43)] = inst_104628);

(statearr_105158[(44)] = inst_104632);

return statearr_105158;
})();
var statearr_105160_108459 = state_105028__$1;
(statearr_105160_108459[(2)] = null);

(statearr_105160_108459[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105029 === (28))){
var _ = (function (){var statearr_105162 = state_105028;
(statearr_105162[(4)] = cljs.core.rest((state_105028[(4)])));

return statearr_105162;
})();
var state_105028__$1 = state_105028;
var ex105154 = (state_105028__$1[(2)]);
var statearr_105163_108461 = state_105028__$1;
(statearr_105163_108461[(5)] = ex105154);


var statearr_105164_108462 = state_105028__$1;
(statearr_105164_108462[(1)] = (27));

(statearr_105164_108462[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105029 === (64))){
var _ = (function (){var statearr_105166 = state_105028;
(statearr_105166[(4)] = cljs.core.rest((state_105028[(4)])));

return statearr_105166;
})();
var inst_104883 = (state_105028[(2)]);
var inst_104884 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_104885 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_104886 = (new cljs.core.PersistentVector(null,1,(5),inst_104884,inst_104885,null));
var inst_104887 = cljs.test.update_current_env_BANG_(inst_104886,cljs.core.rest);
var ___$1 = (function (){var temp__5753__auto__ = (state_105028[(5)]);
if(cljs.core.truth_(temp__5753__auto__)){
var e__34184__auto__ = temp__5753__auto__;
throw e__34184__auto__;
} else {
return null;
}
})();
var state_105028__$1 = (function (){var statearr_105167 = state_105028;
(statearr_105167[(45)] = inst_104887);

return statearr_105167;
})();
var statearr_105168_108465 = state_105028__$1;
(statearr_105168_108465[(2)] = inst_104883);

(statearr_105168_108465[(1)] = (63));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105029 === (51))){
var _ = (function (){var statearr_105169 = state_105028;
(statearr_105169[(4)] = cljs.core.cons((54),(state_105028[(4)])));

return statearr_105169;
})();
var inst_104841 = repl_tooling.integration.fake_editor.change_stdout();
var inst_104842 = (inst_104841 instanceof Promise);
var state_105028__$1 = state_105028;
if(cljs.core.truth_(inst_104842)){
var statearr_105170_108467 = state_105028__$1;
(statearr_105170_108467[(1)] = (56));

} else {
var statearr_105171_108468 = state_105028__$1;
(statearr_105171_108468[(1)] = (57));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105029 === (25))){
var inst_104709 = (state_105028[(42)]);
var inst_104710 = (state_105028[(34)]);
var _ = (function (){var statearr_105174 = state_105028;
(statearr_105174[(4)] = cljs.core.cons((28),(state_105028[(4)])));

return statearr_105174;
})();
var inst_104707 = repl_tooling.integration.fake_editor.txt_for_selector("#stdout");
var inst_104708 = cljs.core.re_find(/=>/,inst_104707);
var inst_104709__$1 = (new cljs.core.List(null,inst_104708,null,(1),null));
var inst_104710__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.not,inst_104709__$1);
var state_105028__$1 = (function (){var statearr_105175 = state_105028;
(statearr_105175[(42)] = inst_104709__$1);

(statearr_105175[(34)] = inst_104710__$1);

return statearr_105175;
})();
if(cljs.core.truth_(inst_104710__$1)){
var statearr_105176_108470 = state_105028__$1;
(statearr_105176_108470[(1)] = (29));

} else {
var statearr_105178_108472 = state_105028__$1;
(statearr_105178_108472[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105029 === (34))){
var _ = (function (){var statearr_105181 = state_105028;
(statearr_105181[(4)] = cljs.core.rest((state_105028[(4)])));

return statearr_105181;
})();
var inst_104743 = (state_105028[(2)]);
var inst_104744 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_104745 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_104746 = (new cljs.core.PersistentVector(null,1,(5),inst_104744,inst_104745,null));
var inst_104747 = cljs.test.update_current_env_BANG_(inst_104746,cljs.core.rest);
var ___$1 = (function (){var temp__5753__auto__ = (state_105028[(5)]);
if(cljs.core.truth_(temp__5753__auto__)){
var e__34184__auto__ = temp__5753__auto__;
throw e__34184__auto__;
} else {
return null;
}
})();
var state_105028__$1 = (function (){var statearr_105185 = state_105028;
(statearr_105185[(46)] = inst_104747);

return statearr_105185;
})();
var statearr_105186_108475 = state_105028__$1;
(statearr_105186_108475[(2)] = inst_104743);

(statearr_105186_108475[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105029 === (17))){
var _ = (function (){var statearr_105188 = state_105028;
(statearr_105188[(4)] = cljs.core.rest((state_105028[(4)])));

return statearr_105188;
})();
var state_105028__$1 = state_105028;
var ex105172 = (state_105028__$1[(2)]);
var statearr_105189_108476 = state_105028__$1;
(statearr_105189_108476[(5)] = ex105172);


var statearr_105190_108478 = state_105028__$1;
(statearr_105190_108478[(1)] = (16));

(statearr_105190_108478[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105029 === (3))){
var inst_104581 = (state_105028[(12)]);
var inst_104595 = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var inst_104596 = [new cljs.core.Keyword(null,"on-stderr","on-stderr",1583456038)];
var inst_104597 = (function (){var mark_as_done__53963__auto__ = inst_104581;
var chan__53977__auto__ = inst_104595;
return (function (p1__102709_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(repl_tooling.integration.fake_editor.state,cljs.core.update,new cljs.core.Keyword(null,"stdout","stdout",-531490018),(function (e){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(e),"Hi: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__102709_SHARP_)].join('');
}));
});
})();
var inst_104598 = [inst_104597];
var inst_104599 = cljs.core.PersistentHashMap.fromArrays(inst_104596,inst_104598);
var inst_104600 = repl_tooling.integration.fake_editor.connect_BANG_.cljs$core$IFn$_invoke$arity$1(inst_104599);
var inst_104601 = (function (){var mark_as_done__53963__auto__ = inst_104581;
var chan__53977__auto__ = inst_104595;
return (function (result__53978__auto__){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan__53977__auto__,result__53978__auto__);
});
})();
var inst_104602 = inst_104600.then(inst_104601);
var state_105028__$1 = (function (){var statearr_105195 = state_105028;
(statearr_105195[(47)] = inst_104602);

return statearr_105195;
})();
var statearr_105196_108481 = state_105028__$1;
(statearr_105196_108481[(2)] = inst_104595);

(statearr_105196_108481[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105029 === (12))){
var _ = (function (){var statearr_105199 = state_105028;
(statearr_105199[(4)] = cljs.core.rest((state_105028[(4)])));

return statearr_105199;
})();
var inst_104634 = (state_105028[(2)]);
var inst_104635 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_104636 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_104637 = (new cljs.core.PersistentVector(null,1,(5),inst_104635,inst_104636,null));
var inst_104638 = cljs.test.update_current_env_BANG_(inst_104637,cljs.core.rest);
var ___$1 = (function (){var temp__5753__auto__ = (state_105028[(5)]);
if(cljs.core.truth_(temp__5753__auto__)){
var e__34184__auto__ = temp__5753__auto__;
throw e__34184__auto__;
} else {
return null;
}
})();
var state_105028__$1 = (function (){var statearr_105200 = state_105028;
(statearr_105200[(48)] = inst_104638);

return statearr_105200;
})();
var statearr_105202_108483 = state_105028__$1;
(statearr_105202_108483[(2)] = inst_104634);

(statearr_105202_108483[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105029 === (2))){
var inst_104581 = (state_105028[(12)]);
var inst_104612 = (state_105028[(2)]);
var inst_104613 = (function (){var mark_as_done__53963__auto__ = inst_104581;
return (function (){
return new cljs.core.Keyword(null,"eval","eval",-1103567905).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"repls","repls",870822864).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(repl_tooling.integration.fake_editor.state)));
});
})();
var inst_104614 = repl_tooling.integration.fake_editor.wait_for(inst_104613);
var inst_104615 = (inst_104614 instanceof Promise);
var state_105028__$1 = (function (){var statearr_105207 = state_105028;
(statearr_105207[(49)] = inst_104612);

return statearr_105207;
})();
if(cljs.core.truth_(inst_104615)){
var statearr_105209_108486 = state_105028__$1;
(statearr_105209_108486[(1)] = (7));

} else {
var statearr_105210_108487 = state_105028__$1;
(statearr_105210_108487[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105029 === (66))){
var _ = (function (){var statearr_105211 = state_105028;
(statearr_105211[(4)] = cljs.core.cons((69),(state_105028[(4)])));

return statearr_105211;
})();
var inst_104911 = repl_tooling.integration.fake_editor.change_stdout();
var inst_104912 = (inst_104911 instanceof Promise);
var state_105028__$1 = state_105028;
if(cljs.core.truth_(inst_104912)){
var statearr_105213_108488 = state_105028__$1;
(statearr_105213_108488[(1)] = (71));

} else {
var statearr_105215_108489 = state_105028__$1;
(statearr_105215_108489[(1)] = (72));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105029 === (23))){
var state_105028__$1 = state_105028;
var statearr_105218_108490 = state_105028__$1;
(statearr_105218_108490[(2)] = new cljs.core.Keyword(null,"fail","fail",1706214930));

(statearr_105218_108490[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105029 === (47))){
var _ = (function (){var statearr_105220 = state_105028;
(statearr_105220[(4)] = cljs.core.cons((49),(state_105028[(4)])));

return statearr_105220;
})();
var ___$1 = (function (){var statearr_105222 = state_105028;
(statearr_105222[(4)] = cljs.core.cons((50),(state_105028[(4)])));

return statearr_105222;
})();
var inst_104825 = repl_tooling.integration.fake_editor.type_and_eval("(prn :some-message)");
var state_105028__$1 = (function (){var statearr_105223 = state_105028;
(statearr_105223[(50)] = inst_104825);

return statearr_105223;
})();
var statearr_105224_108494 = state_105028__$1;
(statearr_105224_108494[(2)] = null);

(statearr_105224_108494[(1)] = (51));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105029 === (35))){
var _ = (function (){var statearr_105227 = state_105028;
(statearr_105227[(4)] = cljs.core.rest((state_105028[(4)])));

return statearr_105227;
})();
var state_105028__$1 = state_105028;
var ex105216 = (state_105028__$1[(2)]);
var statearr_105229_108496 = state_105028__$1;
(statearr_105229_108496[(5)] = ex105216);


throw ex105216;


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105029 === (82))){
var _ = (function (){var statearr_105231 = state_105028;
(statearr_105231[(4)] = cljs.core.cons((85),(state_105028[(4)])));

return statearr_105231;
})();
var inst_104989 = repl_tooling.integration.fake_editor.change_result();
var inst_104990 = (inst_104989 instanceof Promise);
var state_105028__$1 = state_105028;
if(cljs.core.truth_(inst_104990)){
var statearr_105234_108497 = state_105028__$1;
(statearr_105234_108497[(1)] = (87));

} else {
var statearr_105235_108498 = state_105028__$1;
(statearr_105235_108498[(1)] = (88));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105029 === (76))){
var inst_104930 = (state_105028[(8)]);
var inst_104933 = (state_105028[(9)]);
var inst_104925 = (state_105028[(10)]);
var inst_104937 = (state_105028[(2)]);
var inst_104938 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(inst_104930);
var inst_104939 = [inst_104937,inst_104925,inst_104938];
var inst_104940 = cljs.core.PersistentHashMap.fromArrays(inst_104933,inst_104939);
var inst_104941 = cljs.test.do_report(inst_104940);
var _ = (function (){var statearr_105236 = state_105028;
(statearr_105236[(4)] = cljs.core.rest((state_105028[(4)])));

return statearr_105236;
})();
var state_105028__$1 = state_105028;
var statearr_105237_108500 = state_105028__$1;
(statearr_105237_108500[(2)] = inst_104941);

(statearr_105237_108500[(1)] = (67));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105029 === (19))){
var inst_104581 = (state_105028[(12)]);
var inst_104665 = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var inst_104666 = repl_tooling.integration.fake_editor.change_result();
var inst_104667 = (function (){var mark_as_done__53963__auto__ = inst_104581;
var chan__53977__auto__ = inst_104665;
return (function (result__53978__auto__){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan__53977__auto__,result__53978__auto__);
});
})();
var inst_104668 = inst_104666.then(inst_104667);
var state_105028__$1 = (function (){var statearr_105238 = state_105028;
(statearr_105238[(51)] = inst_104668);

return statearr_105238;
})();
var statearr_105239_108503 = state_105028__$1;
(statearr_105239_108503[(2)] = inst_104665);

(statearr_105239_108503[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105029 === (57))){
var inst_104849 = repl_tooling.integration.fake_editor.change_stdout();
var state_105028__$1 = state_105028;
var statearr_105241_108505 = state_105028__$1;
(statearr_105241_108505[(2)] = inst_104849);

(statearr_105241_108505[(1)] = (58));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105029 === (68))){
var inst_104896 = (state_105028[(2)]);
var inst_104897 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_104898 = check.core.normalize_error(inst_104896);
var inst_104899 = cljs.core.list(new cljs.core.Symbol(null,"await!","await!",-473046777,null),cljs.core.list(new cljs.core.Symbol("editor","change-stdout","editor/change-stdout",294315011,null)));
var inst_104900 = new cljs.core.Symbol(null,"=>","=>",-813269641,null);
var inst_104901 = /Hi: :some-error/;
var inst_104902 = ["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_104899)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_104900)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_104901)].join('');
var inst_104903 = [new cljs.core.Keyword(null,"error","error",-978969032),/Hi: :some-error/,inst_104898,inst_104902];
var inst_104904 = cljs.core.PersistentHashMap.fromArrays(inst_104897,inst_104903);
var inst_104905 = cljs.test.do_report(inst_104904);
var state_105028__$1 = state_105028;
var statearr_105244_108508 = state_105028__$1;
(statearr_105244_108508[(2)] = inst_104905);

(statearr_105244_108508[(1)] = (67));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105029 === (11))){
var inst_104737 = (state_105028[(2)]);
var inst_104738 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_104739 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_104740 = (new cljs.core.PersistentVector(null,1,(5),inst_104738,inst_104739,null));
var inst_104741 = cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(inst_104740,cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["exception works"], 0));
var state_105028__$1 = (function (){var statearr_105247 = state_105028;
(statearr_105247[(52)] = inst_104741);

(statearr_105247[(53)] = inst_104737);

return statearr_105247;
})();
var statearr_105249_108511 = state_105028__$1;
(statearr_105249_108511[(2)] = null);

(statearr_105249_108511[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105029 === (9))){
var inst_104626 = (state_105028[(2)]);
var state_105028__$1 = state_105028;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_105028__$1,(6),inst_104626);
} else {
if((state_val_105029 === (5))){
var inst_104610 = (state_105028[(2)]);
var state_105028__$1 = state_105028;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_105028__$1,(2),inst_104610);
} else {
if((state_val_105029 === (83))){
var inst_105022 = (state_105028[(2)]);
var _ = (function (){var statearr_105252 = state_105028;
(statearr_105252[(4)] = cljs.core.rest((state_105028[(4)])));

return statearr_105252;
})();
var state_105028__$1 = state_105028;
var statearr_105253_108513 = state_105028__$1;
(statearr_105253_108513[(2)] = inst_105022);

(statearr_105253_108513[(1)] = (79));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105029 === (14))){
var _ = (function (){var statearr_105255 = state_105028;
(statearr_105255[(4)] = cljs.core.cons((17),(state_105028[(4)])));

return statearr_105255;
})();
var inst_104662 = repl_tooling.integration.fake_editor.change_result();
var inst_104663 = (inst_104662 instanceof Promise);
var state_105028__$1 = state_105028;
if(cljs.core.truth_(inst_104663)){
var statearr_105257_108515 = state_105028__$1;
(statearr_105257_108515[(1)] = (19));

} else {
var statearr_105258_108517 = state_105028__$1;
(statearr_105258_108517[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105029 === (45))){
var state_105028__$1 = state_105028;
var statearr_105259_108518 = state_105028__$1;
(statearr_105259_108518[(2)] = new cljs.core.Keyword(null,"fail","fail",1706214930));

(statearr_105259_108518[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105029 === (53))){
var inst_104826 = (state_105028[(2)]);
var inst_104827 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_104828 = check.core.normalize_error(inst_104826);
var inst_104829 = cljs.core.list(new cljs.core.Symbol(null,"await!","await!",-473046777,null),cljs.core.list(new cljs.core.Symbol("editor","change-stdout","editor/change-stdout",294315011,null)));
var inst_104830 = new cljs.core.Symbol(null,"=>","=>",-813269641,null);
var inst_104831 = /:some-message/;
var inst_104832 = ["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_104829)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_104830)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_104831)].join('');
var inst_104833 = [new cljs.core.Keyword(null,"error","error",-978969032),/:some-message/,inst_104828,inst_104832];
var inst_104834 = cljs.core.PersistentHashMap.fromArrays(inst_104827,inst_104833);
var inst_104835 = cljs.test.do_report(inst_104834);
var state_105028__$1 = state_105028;
var statearr_105263_108521 = state_105028__$1;
(statearr_105263_108521[(2)] = inst_104835);

(statearr_105263_108521[(1)] = (52));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105029 === (78))){
var inst_104581 = (state_105028[(12)]);
var inst_105025 = (state_105028[(2)]);
var inst_105026 = cljs.core.deref(inst_104581);
var state_105028__$1 = (function (){var statearr_105265 = state_105028;
(statearr_105265[(54)] = inst_105025);

return statearr_105265;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_105028__$1,inst_105026);
} else {
if((state_val_105029 === (26))){
var inst_104734 = (state_105028[(2)]);
var _ = (function (){var statearr_105267 = state_105028;
(statearr_105267[(4)] = cljs.core.rest((state_105028[(4)])));

return statearr_105267;
})();
var state_105028__$1 = state_105028;
var statearr_105268_108523 = state_105028__$1;
(statearr_105268_108523[(2)] = inst_104734);

(statearr_105268_108523[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105029 === (16))){
var inst_104647 = (state_105028[(2)]);
var inst_104648 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_104649 = check.core.normalize_error(inst_104647);
var inst_104650 = cljs.core.list(new cljs.core.Symbol(null,"await!","await!",-473046777,null),cljs.core.list(new cljs.core.Symbol("editor","change-result","editor/change-result",-914297300,null)));
var inst_104651 = new cljs.core.Symbol(null,"=>","=>",-813269641,null);
var inst_104652 = "5";
var inst_104653 = ["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_104650)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_104651)," ",inst_104652].join('');
var inst_104654 = [new cljs.core.Keyword(null,"error","error",-978969032),"5",inst_104649,inst_104653];
var inst_104655 = cljs.core.PersistentHashMap.fromArrays(inst_104648,inst_104654);
var inst_104656 = cljs.test.do_report(inst_104655);
var state_105028__$1 = state_105028;
var statearr_105271_108526 = state_105028__$1;
(statearr_105271_108526[(2)] = inst_104656);

(statearr_105271_108526[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105029 === (81))){
var inst_104968 = (state_105028[(2)]);
var inst_104969 = cljs.core.deref(repl_tooling.integration.fake_editor.state);
var inst_104970 = new cljs.core.Keyword(null,"commands","commands",161008658).cljs$core$IFn$_invoke$arity$1(inst_104969);
var inst_104971 = new cljs.core.Keyword(null,"break-evaluation","break-evaluation",580088387).cljs$core$IFn$_invoke$arity$1(inst_104970);
var inst_104972 = new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(inst_104971);
var inst_104973 = (inst_104972.cljs$core$IFn$_invoke$arity$0 ? inst_104972.cljs$core$IFn$_invoke$arity$0() : inst_104972.call(null));
var state_105028__$1 = (function (){var statearr_105274 = state_105028;
(statearr_105274[(55)] = inst_104968);

(statearr_105274[(56)] = inst_104973);

return statearr_105274;
})();
var statearr_105275_108528 = state_105028__$1;
(statearr_105275_108528[(2)] = null);

(statearr_105275_108528[(1)] = (82));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105029 === (79))){
var _ = (function (){var statearr_105276 = state_105028;
(statearr_105276[(4)] = cljs.core.rest((state_105028[(4)])));

return statearr_105276;
})();
var inst_104953 = (state_105028[(2)]);
var inst_104954 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_104955 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_104956 = (new cljs.core.PersistentVector(null,1,(5),inst_104954,inst_104955,null));
var inst_104957 = cljs.test.update_current_env_BANG_(inst_104956,cljs.core.rest);
var ___$1 = (function (){var temp__5753__auto__ = (state_105028[(5)]);
if(cljs.core.truth_(temp__5753__auto__)){
var e__34184__auto__ = temp__5753__auto__;
throw e__34184__auto__;
} else {
return null;
}
})();
var state_105028__$1 = (function (){var statearr_105278 = state_105028;
(statearr_105278[(57)] = inst_104957);

return statearr_105278;
})();
var statearr_105279_108531 = state_105028__$1;
(statearr_105279_108531[(2)] = inst_104953);

(statearr_105279_108531[(1)] = (78));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105029 === (38))){
var inst_104756 = (state_105028[(2)]);
var inst_104757 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_104758 = check.core.normalize_error(inst_104756);
var inst_104759 = cljs.core.list(new cljs.core.Symbol(null,"await!","await!",-473046777,null),cljs.core.list(new cljs.core.Symbol("editor","change-result","editor/change-result",-914297300,null)));
var inst_104760 = new cljs.core.Symbol(null,"=>","=>",-813269641,null);
var inst_104761 = /java.lang.ArithmeticException/;
var inst_104762 = ["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_104759)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_104760)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_104761)].join('');
var inst_104763 = [new cljs.core.Keyword(null,"error","error",-978969032),/java.lang.ArithmeticException/,inst_104758,inst_104762];
var inst_104764 = cljs.core.PersistentHashMap.fromArrays(inst_104757,inst_104763);
var inst_104765 = cljs.test.do_report(inst_104764);
var state_105028__$1 = state_105028;
var statearr_105281_108534 = state_105028__$1;
(statearr_105281_108534[(2)] = inst_104765);

(statearr_105281_108534[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105029 === (87))){
var inst_104581 = (state_105028[(12)]);
var inst_104992 = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var inst_104993 = repl_tooling.integration.fake_editor.change_result();
var inst_104994 = (function (){var mark_as_done__53963__auto__ = inst_104581;
var chan__53977__auto__ = inst_104992;
return (function (result__53978__auto__){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan__53977__auto__,result__53978__auto__);
});
})();
var inst_104995 = inst_104993.then(inst_104994);
var state_105028__$1 = (function (){var statearr_105285 = state_105028;
(statearr_105285[(58)] = inst_104995);

return statearr_105285;
})();
var statearr_105286_108536 = state_105028__$1;
(statearr_105286_108536[(2)] = inst_104992);

(statearr_105286_108536[(1)] = (89));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105029 === (30))){
var inst_104709 = (state_105028[(42)]);
var inst_104720 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_104721 = cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"re-find","re-find",1143444147,null),/=>/,cljs.core.list(new cljs.core.Symbol("editor","txt-for-selector","editor/txt-for-selector",-1957500269,null),"#stdout")));
var inst_104722 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_104723 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_104724 = cljs.core.cons(inst_104723,inst_104709);
var inst_104725 = (new cljs.core.List(null,inst_104724,null,(1),null));
var inst_104726 = (new cljs.core.List(null,inst_104722,inst_104725,(2),null));
var inst_104727 = ["repl_tooling/nrepl/nrepl_test.cljs",70,new cljs.core.Keyword(null,"fail","fail",1706214930),13,123,inst_104721,123,inst_104726,null];
var inst_104728 = cljs.core.PersistentHashMap.fromArrays(inst_104720,inst_104727);
var inst_104729 = cljs.test.report.call(null,inst_104728);
var state_105028__$1 = state_105028;
var statearr_105288_108541 = state_105028__$1;
(statearr_105288_108541[(2)] = inst_104729);

(statearr_105288_108541[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105029 === (73))){
var inst_104921 = (state_105028[(2)]);
var state_105028__$1 = state_105028;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_105028__$1,(70),inst_104921);
} else {
if((state_val_105029 === (10))){
var _ = (function (){var statearr_105289 = state_105028;
(statearr_105289[(4)] = cljs.core.cons((12),(state_105028[(4)])));

return statearr_105289;
})();
var ___$1 = (function (){var statearr_105290 = state_105028;
(statearr_105290[(4)] = cljs.core.cons((13),(state_105028[(4)])));

return statearr_105290;
})();
var inst_104646 = repl_tooling.integration.fake_editor.type_and_eval("(+ 2 3)");
var state_105028__$1 = (function (){var statearr_105291 = state_105028;
(statearr_105291[(59)] = inst_104646);

return statearr_105291;
})();
var statearr_105292_108542 = state_105028__$1;
(statearr_105292_108542[(2)] = null);

(statearr_105292_108542[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105029 === (18))){
var inst_104674 = (state_105028[(2)]);
var inst_104675 = cljs.core.list(new cljs.core.Symbol(null,"await!","await!",-473046777,null),cljs.core.list(new cljs.core.Symbol("editor","change-result","editor/change-result",-914297300,null)));
var inst_104676 = "5";
var inst_104677 = matcher_combinators.core.match("5",inst_104674);
var inst_104678 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_104674], 0));
var inst_104679 = new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(inst_104677);
var inst_104680 = matcher_combinators.printer.as_string(inst_104679);
var inst_104681 = [inst_104678,"\n\nMismatch:\n",inst_104680].join('');
var inst_104682 = new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(inst_104677);
var inst_104683 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),inst_104682);
var inst_104684 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363)];
var state_105028__$1 = (function (){var statearr_105296 = state_105028;
(statearr_105296[(20)] = inst_104676);

(statearr_105296[(60)] = inst_104675);

(statearr_105296[(21)] = inst_104684);

(statearr_105296[(22)] = inst_104681);

return statearr_105296;
})();
if(inst_104683){
var statearr_105297_108543 = state_105028__$1;
(statearr_105297_108543[(1)] = (22));

} else {
var statearr_105299_108544 = state_105028__$1;
(statearr_105299_108544[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105029 === (52))){
var inst_104874 = (state_105028[(2)]);
var _ = (function (){var statearr_105300 = state_105028;
(statearr_105300[(4)] = cljs.core.rest((state_105028[(4)])));

return statearr_105300;
})();
var state_105028__$1 = state_105028;
var statearr_105301_108546 = state_105028__$1;
(statearr_105301_108546[(2)] = inst_104874);

(statearr_105301_108546[(1)] = (49));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105029 === (67))){
var inst_104944 = (state_105028[(2)]);
var _ = (function (){var statearr_105302 = state_105028;
(statearr_105302[(4)] = cljs.core.rest((state_105028[(4)])));

return statearr_105302;
})();
var state_105028__$1 = state_105028;
var statearr_105303_108547 = state_105028__$1;
(statearr_105303_108547[(2)] = inst_104944);

(statearr_105303_108547[(1)] = (64));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105029 === (71))){
var inst_104581 = (state_105028[(12)]);
var inst_104914 = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var inst_104915 = repl_tooling.integration.fake_editor.change_stdout();
var inst_104916 = (function (){var mark_as_done__53963__auto__ = inst_104581;
var chan__53977__auto__ = inst_104914;
return (function (result__53978__auto__){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan__53977__auto__,result__53978__auto__);
});
})();
var inst_104917 = inst_104915.then(inst_104916);
var state_105028__$1 = (function (){var statearr_105310 = state_105028;
(statearr_105310[(61)] = inst_104917);

return statearr_105310;
})();
var statearr_105317_108551 = state_105028__$1;
(statearr_105317_108551[(2)] = inst_104914);

(statearr_105317_108551[(1)] = (73));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105029 === (42))){
var inst_104779 = repl_tooling.integration.fake_editor.change_result();
var state_105028__$1 = state_105028;
var statearr_105331_108552 = state_105028__$1;
(statearr_105331_108552[(2)] = inst_104779);

(statearr_105331_108552[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105029 === (80))){
var _ = (function (){var statearr_105344 = state_105028;
(statearr_105344[(4)] = cljs.core.rest((state_105028[(4)])));

return statearr_105344;
})();
var state_105028__$1 = state_105028;
var ex105304 = (state_105028__$1[(2)]);
var statearr_105354_108553 = state_105028__$1;
(statearr_105354_108553[(5)] = ex105304);


throw ex105304;


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105029 === (37))){
var inst_104804 = (state_105028[(2)]);
var _ = (function (){var statearr_105376 = state_105028;
(statearr_105376[(4)] = cljs.core.rest((state_105028[(4)])));

return statearr_105376;
})();
var state_105028__$1 = state_105028;
var statearr_105389_108555 = state_105028__$1;
(statearr_105389_108555[(2)] = inst_104804);

(statearr_105389_108555[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105029 === (63))){
var inst_104947 = (state_105028[(2)]);
var inst_104948 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_104949 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_104950 = (new cljs.core.PersistentVector(null,1,(5),inst_104948,inst_104949,null));
var inst_104951 = cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(inst_104950,cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["break works"], 0));
var state_105028__$1 = (function (){var statearr_105410 = state_105028;
(statearr_105410[(62)] = inst_104947);

(statearr_105410[(63)] = inst_104951);

return statearr_105410;
})();
var statearr_105411_108556 = state_105028__$1;
(statearr_105411_108556[(2)] = null);

(statearr_105411_108556[(1)] = (77));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105029 === (8))){
var inst_104581 = (state_105028[(12)]);
var inst_104623 = (function (){var mark_as_done__53963__auto__ = inst_104581;
return (function (){
return new cljs.core.Keyword(null,"eval","eval",-1103567905).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"repls","repls",870822864).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(repl_tooling.integration.fake_editor.state)));
});
})();
var inst_104624 = repl_tooling.integration.fake_editor.wait_for(inst_104623);
var state_105028__$1 = state_105028;
var statearr_105421_108557 = state_105028__$1;
(statearr_105421_108557[(2)] = inst_104624);

(statearr_105421_108557[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105029 === (49))){
var _ = (function (){var statearr_105432 = state_105028;
(statearr_105432[(4)] = cljs.core.rest((state_105028[(4)])));

return statearr_105432;
})();
var inst_104813 = (state_105028[(2)]);
var inst_104814 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_104815 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_104816 = (new cljs.core.PersistentVector(null,1,(5),inst_104814,inst_104815,null));
var inst_104817 = cljs.test.update_current_env_BANG_(inst_104816,cljs.core.rest);
var ___$1 = (function (){var temp__5753__auto__ = (state_105028[(5)]);
if(cljs.core.truth_(temp__5753__auto__)){
var e__34184__auto__ = temp__5753__auto__;
throw e__34184__auto__;
} else {
return null;
}
})();
var state_105028__$1 = (function (){var statearr_105466 = state_105028;
(statearr_105466[(64)] = inst_104817);

return statearr_105466;
})();
var statearr_105471_108558 = state_105028__$1;
(statearr_105471_108558[(2)] = inst_104813);

(statearr_105471_108558[(1)] = (48));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105029 === (84))){
var inst_104974 = (state_105028[(2)]);
var inst_104975 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_104976 = check.core.normalize_error(inst_104974);
var inst_104977 = cljs.core.list(new cljs.core.Symbol(null,"await!","await!",-473046777,null),cljs.core.list(new cljs.core.Symbol("editor","change-result","editor/change-result",-914297300,null)));
var inst_104978 = new cljs.core.Symbol(null,"=>","=>",-813269641,null);
var inst_104979 = /Interrupted/;
var inst_104980 = ["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_104977)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_104978)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_104979)].join('');
var inst_104981 = [new cljs.core.Keyword(null,"error","error",-978969032),/Interrupted/,inst_104976,inst_104980];
var inst_104982 = cljs.core.PersistentHashMap.fromArrays(inst_104975,inst_104981);
var inst_104983 = cljs.test.do_report(inst_104982);
var state_105028__$1 = state_105028;
var statearr_105500_108559 = state_105028__$1;
(statearr_105500_108559[(2)] = inst_104983);

(statearr_105500_108559[(1)] = (83));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var repl_tooling$nrepl$nrepl_test$state_machine__34940__auto__ = null;
var repl_tooling$nrepl$nrepl_test$state_machine__34940__auto____0 = (function (){
var statearr_105539 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_105539[(0)] = repl_tooling$nrepl$nrepl_test$state_machine__34940__auto__);

(statearr_105539[(1)] = (1));

return statearr_105539;
});
var repl_tooling$nrepl$nrepl_test$state_machine__34940__auto____1 = (function (state_105028){
while(true){
var ret_value__34941__auto__ = (function (){try{while(true){
var result__34942__auto__ = switch__34939__auto__(state_105028);
if(cljs.core.keyword_identical_QMARK_(result__34942__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34942__auto__;
}
break;
}
}catch (e105556){var ex__34943__auto__ = e105556;
var statearr_105557_108564 = state_105028;
(statearr_105557_108564[(2)] = ex__34943__auto__);


if(cljs.core.seq((state_105028[(4)]))){
var statearr_105558_108565 = state_105028;
(statearr_105558_108565[(1)] = cljs.core.first((state_105028[(4)])));

} else {
throw ex__34943__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34941__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__108566 = state_105028;
state_105028 = G__108566;
continue;
} else {
return ret_value__34941__auto__;
}
break;
}
});
repl_tooling$nrepl$nrepl_test$state_machine__34940__auto__ = function(state_105028){
switch(arguments.length){
case 0:
return repl_tooling$nrepl$nrepl_test$state_machine__34940__auto____0.call(this);
case 1:
return repl_tooling$nrepl$nrepl_test$state_machine__34940__auto____1.call(this,state_105028);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
repl_tooling$nrepl$nrepl_test$state_machine__34940__auto__.cljs$core$IFn$_invoke$arity$0 = repl_tooling$nrepl$nrepl_test$state_machine__34940__auto____0;
repl_tooling$nrepl$nrepl_test$state_machine__34940__auto__.cljs$core$IFn$_invoke$arity$1 = repl_tooling$nrepl$nrepl_test$state_machine__34940__auto____1;
return repl_tooling$nrepl$nrepl_test$state_machine__34940__auto__;
})()
})();
var state__35943__auto__ = (function (){var statearr_105562 = f__35942__auto__();
(statearr_105562[(6)] = c__35941__auto__);

return statearr_105562;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35943__auto__);
}));

return c__35941__auto__;
}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}}));

(repl_tooling.nrepl.nrepl_test.t_repl_tooling$nrepl$nrepl_test104510.prototype.apply = (function (self__,args104533){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args104533)));
}));

(repl_tooling.nrepl.nrepl_test.t_repl_tooling$nrepl$nrepl_test104510.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done__53962__auto__){
var self__ = this;
var ___9200__auto__ = this;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["connecting to a nREPL REPL"], 0));

try{var c__35941__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35942__auto__ = (function (){var switch__34939__auto__ = (function (state_106016){
var state_val_106017 = (state_106016[(1)]);
if((state_val_106017 === (65))){
var _ = (function (){var statearr_106019 = state_106016;
(statearr_106019[(4)] = cljs.core.rest((state_106016[(4)])));

return statearr_106019;
})();
var state_106016__$1 = state_106016;
var ex106018 = (state_106016__$1[(2)]);
var statearr_106020_108567 = state_106016__$1;
(statearr_106020_108567[(5)] = ex106018);


throw ex106018;


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106017 === (70))){
var inst_105908 = (state_106016[(2)]);
var inst_105909 = cljs.core.list(new cljs.core.Symbol(null,"await!","await!",-473046777,null),cljs.core.list(new cljs.core.Symbol("editor","change-stdout","editor/change-stdout",294315011,null)));
var inst_105910 = /Hi: :some-error/;
var inst_105911 = matcher_combinators.core.match(/Hi: :some-error/,inst_105908);
var inst_105912 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_105908], 0));
var inst_105913 = new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(inst_105911);
var inst_105914 = matcher_combinators.printer.as_string(inst_105913);
var inst_105915 = [inst_105912,"\n\nMismatch:\n",inst_105914].join('');
var inst_105916 = new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(inst_105911);
var inst_105917 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),inst_105916);
var inst_105918 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363)];
var state_106016__$1 = (function (){var statearr_106021 = state_106016;
(statearr_106021[(7)] = inst_105915);

(statearr_106021[(8)] = inst_105910);

(statearr_106021[(9)] = inst_105909);

(statearr_106021[(10)] = inst_105918);

return statearr_106021;
})();
if(inst_105917){
var statearr_106022_108573 = state_106016__$1;
(statearr_106022_108573[(1)] = (74));

} else {
var statearr_106023_108575 = state_106016__$1;
(statearr_106023_108575[(1)] = (75));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106017 === (62))){
var _ = (function (){var statearr_106024 = state_106016;
(statearr_106024[(4)] = cljs.core.cons((64),(state_106016[(4)])));

return statearr_106024;
})();
var ___$1 = (function (){var statearr_106025 = state_106016;
(statearr_106025[(4)] = cljs.core.cons((65),(state_106016[(4)])));

return statearr_106025;
})();
var inst_105880 = repl_tooling.integration.fake_editor.type_and_eval("(binding [*out* *err*] (prn :some-error))");
var state_106016__$1 = (function (){var statearr_106026 = state_106016;
(statearr_106026[(11)] = inst_105880);

return statearr_106026;
})();
var statearr_106027_108590 = state_106016__$1;
(statearr_106027_108590[(2)] = null);

(statearr_106027_108590[(1)] = (66));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106017 === (74))){
var state_106016__$1 = state_106016;
var statearr_106028_108599 = state_106016__$1;
(statearr_106028_108599[(2)] = new cljs.core.Keyword(null,"pass","pass",1574159993));

(statearr_106028_108599[(1)] = (76));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106017 === (7))){
var inst_105569 = (state_106016[(12)]);
var inst_105602 = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var inst_105603 = (function (){var mark_as_done__53963__auto__ = inst_105569;
var chan__53977__auto__ = inst_105602;
return (function (){
return new cljs.core.Keyword(null,"eval","eval",-1103567905).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"repls","repls",870822864).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(repl_tooling.integration.fake_editor.state)));
});
})();
var inst_105604 = repl_tooling.integration.fake_editor.wait_for(inst_105603);
var inst_105605 = (function (){var mark_as_done__53963__auto__ = inst_105569;
var chan__53977__auto__ = inst_105602;
return (function (result__53978__auto__){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan__53977__auto__,result__53978__auto__);
});
})();
var inst_105606 = inst_105604.then(inst_105605);
var state_106016__$1 = (function (){var statearr_106029 = state_106016;
(statearr_106029[(13)] = inst_105606);

return statearr_106029;
})();
var statearr_106030_108612 = state_106016__$1;
(statearr_106030_108612[(2)] = inst_105602);

(statearr_106030_108612[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106017 === (59))){
var state_106016__$1 = state_106016;
var statearr_106031_108619 = state_106016__$1;
(statearr_106031_108619[(2)] = new cljs.core.Keyword(null,"pass","pass",1574159993));

(statearr_106031_108619[(1)] = (61));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106017 === (86))){
var inst_105986 = (state_106016[(2)]);
var inst_105987 = cljs.core.list(new cljs.core.Symbol(null,"await!","await!",-473046777,null),cljs.core.list(new cljs.core.Symbol("editor","change-result","editor/change-result",-914297300,null)));
var inst_105988 = /Interrupted/;
var inst_105989 = matcher_combinators.core.match(/Interrupted/,inst_105986);
var inst_105990 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_105986], 0));
var inst_105991 = new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(inst_105989);
var inst_105992 = matcher_combinators.printer.as_string(inst_105991);
var inst_105993 = [inst_105990,"\n\nMismatch:\n",inst_105992].join('');
var inst_105994 = new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(inst_105989);
var inst_105995 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),inst_105994);
var inst_105996 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363)];
var state_106016__$1 = (function (){var statearr_106032 = state_106016;
(statearr_106032[(14)] = inst_105993);

(statearr_106032[(15)] = inst_105988);

(statearr_106032[(16)] = inst_105987);

(statearr_106032[(17)] = inst_105996);

return statearr_106032;
})();
if(inst_105995){
var statearr_106042_108642 = state_106016__$1;
(statearr_106042_108642[(1)] = (90));

} else {
var statearr_106043_108644 = state_106016__$1;
(statearr_106043_108644[(1)] = (91));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106017 === (20))){
var inst_105655 = repl_tooling.integration.fake_editor.change_result();
var state_106016__$1 = state_106016;
var statearr_106044_108651 = state_106016__$1;
(statearr_106044_108651[(2)] = inst_105655);

(statearr_106044_108651[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106017 === (72))){
var inst_105904 = repl_tooling.integration.fake_editor.change_stdout();
var state_106016__$1 = state_106016;
var statearr_106046_108664 = state_106016__$1;
(statearr_106046_108664[(2)] = inst_105904);

(statearr_106046_108664[(1)] = (73));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106017 === (58))){
var inst_105836 = (state_106016[(2)]);
var state_106016__$1 = state_106016;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_106016__$1,(55),inst_105836);
} else {
if((state_val_106017 === (60))){
var state_106016__$1 = state_106016;
var statearr_106050_108670 = state_106016__$1;
(statearr_106050_108670[(2)] = new cljs.core.Keyword(null,"fail","fail",1706214930));

(statearr_106050_108670[(1)] = (61));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106017 === (27))){
var inst_105681 = (state_106016[(2)]);
var inst_105682 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_105683 = cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"re-find","re-find",1143444147,null),/=>/,cljs.core.list(new cljs.core.Symbol("editor","txt-for-selector","editor/txt-for-selector",-1957500269,null),"#stdout")));
var inst_105684 = ["repl_tooling/nrepl/nrepl_test.cljs",70,new cljs.core.Keyword(null,"error","error",-978969032),13,123,inst_105683,123,inst_105681,null];
var inst_105685 = cljs.core.PersistentHashMap.fromArrays(inst_105682,inst_105684);
var inst_105686 = cljs.test.report.call(null,inst_105685);
var state_106016__$1 = state_106016;
var statearr_106054_108695 = state_106016__$1;
(statearr_106054_108695[(2)] = inst_105686);

(statearr_106054_108695[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106017 === (1))){
var inst_105569 = (state_106016[(12)]);
var inst_105568 = (function (){return (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(repl_tooling.integration.fake_editor.state,cljs.core.assoc,new cljs.core.Keyword(null,"port","port",1534937262),(2233));

cljs.core.async.close_BANG_(self__.out);

repl_tooling.integration.fake_editor.disconnect_BANG_();

return (done__53962__auto__.cljs$core$IFn$_invoke$arity$0 ? done__53962__auto__.cljs$core$IFn$_invoke$arity$0() : done__53962__auto__.call(null));
});
})();
var inst_105569__$1 = (new cljs.core.Delay(inst_105568,null));
var inst_105570 = (function (){var mark_as_done__53963__auto__ = inst_105569__$1;
return (function (){
if(cljs.core.realized_QMARK_(mark_as_done__53963__auto__)){
return null;
} else {
try{var value__9156__auto___108718 = (function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Async test error - not finalized",cljs.core.PersistentArrayMap.EMPTY)})();
if(cljs.core.truth_(value__9156__auto___108718)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"pass","pass",1574159993),null,null,cljs.core.list(new cljs.core.Symbol(null,"throw","throw",595905694,null),cljs.core.list(new cljs.core.Symbol("clojure.core","ex-info","clojure.core/ex-info",-504237117,null),"Async test error - not finalized",cljs.core.PersistentArrayMap.EMPTY)),null,value__9156__auto___108718,null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"fail","fail",1706214930),null,null,cljs.core.list(new cljs.core.Symbol(null,"throw","throw",595905694,null),cljs.core.list(new cljs.core.Symbol("clojure.core","ex-info","clojure.core/ex-info",-504237117,null),"Async test error - not finalized",cljs.core.PersistentArrayMap.EMPTY)),null,value__9156__auto___108718,null]));
}

}catch (e106061){var t__9189__auto___108739 = e106061;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol(null,"throw","throw",595905694,null),cljs.core.list(new cljs.core.Symbol("clojure.core","ex-info","clojure.core/ex-info",-504237117,null),"Async test error - not finalized",cljs.core.PersistentArrayMap.EMPTY)),null,t__9189__auto___108739,null]));
}
return cljs.core.deref(mark_as_done__53963__auto__);
}
});
})();
var inst_105571 = setTimeout(inst_105570,(8000));
var inst_105572 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(repl_tooling.integration.fake_editor.state,cljs.core.assoc,new cljs.core.Keyword(null,"port","port",1534937262),(3322));
var inst_105573 = [new cljs.core.Keyword(null,"on-stderr","on-stderr",1583456038)];
var inst_105574 = (function (){var mark_as_done__53963__auto__ = inst_105569__$1;
return (function (p1__102709_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(repl_tooling.integration.fake_editor.state,cljs.core.update,new cljs.core.Keyword(null,"stdout","stdout",-531490018),(function (e){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(e),"Hi: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__102709_SHARP_)].join('');
}));
});
})();
var inst_105575 = [inst_105574];
var inst_105576 = cljs.core.PersistentHashMap.fromArrays(inst_105573,inst_105575);
var inst_105577 = repl_tooling.integration.fake_editor.connect_BANG_.cljs$core$IFn$_invoke$arity$1(inst_105576);
var inst_105578 = (inst_105577 instanceof Promise);
var state_106016__$1 = (function (){var statearr_106066 = state_106016;
(statearr_106066[(18)] = inst_105572);

(statearr_106066[(19)] = inst_105571);

(statearr_106066[(12)] = inst_105569__$1);

return statearr_106066;
})();
if(cljs.core.truth_(inst_105578)){
var statearr_106067_108768 = state_106016__$1;
(statearr_106067_108768[(1)] = (3));

} else {
var statearr_106068_108769 = state_106016__$1;
(statearr_106068_108769[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106017 === (69))){
var _ = (function (){var statearr_106069 = state_106016;
(statearr_106069[(4)] = cljs.core.rest((state_106016[(4)])));

return statearr_106069;
})();
var state_106016__$1 = state_106016;
var ex106051 = (state_106016__$1[(2)]);
var statearr_106087_108776 = state_106016__$1;
(statearr_106087_108776[(5)] = ex106051);


var statearr_106088_108779 = state_106016__$1;
(statearr_106088_108779[(1)] = (68));

(statearr_106088_108779[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106017 === (24))){
var inst_105669 = (state_106016[(20)]);
var inst_105666 = (state_106016[(21)]);
var inst_105661 = (state_106016[(22)]);
var inst_105673 = (state_106016[(2)]);
var inst_105674 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(inst_105666);
var inst_105675 = [inst_105673,inst_105661,inst_105674];
var inst_105676 = cljs.core.PersistentHashMap.fromArrays(inst_105669,inst_105675);
var inst_105677 = cljs.test.do_report(inst_105676);
var _ = (function (){var statearr_106092 = state_106016;
(statearr_106092[(4)] = cljs.core.rest((state_106016[(4)])));

return statearr_106092;
})();
var state_106016__$1 = state_106016;
var statearr_106093_108799 = state_106016__$1;
(statearr_106093_108799[(2)] = inst_105677);

(statearr_106093_108799[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106017 === (55))){
var inst_105838 = (state_106016[(2)]);
var inst_105839 = cljs.core.list(new cljs.core.Symbol(null,"await!","await!",-473046777,null),cljs.core.list(new cljs.core.Symbol("editor","change-stdout","editor/change-stdout",294315011,null)));
var inst_105840 = /:some-message/;
var inst_105841 = matcher_combinators.core.match(/:some-message/,inst_105838);
var inst_105842 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_105838], 0));
var inst_105843 = new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(inst_105841);
var inst_105844 = matcher_combinators.printer.as_string(inst_105843);
var inst_105845 = [inst_105842,"\n\nMismatch:\n",inst_105844].join('');
var inst_105846 = new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(inst_105841);
var inst_105847 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),inst_105846);
var inst_105848 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363)];
var state_106016__$1 = (function (){var statearr_106100 = state_106016;
(statearr_106100[(23)] = inst_105848);

(statearr_106100[(24)] = inst_105845);

(statearr_106100[(25)] = inst_105840);

(statearr_106100[(26)] = inst_105839);

return statearr_106100;
})();
if(inst_105847){
var statearr_106102_108824 = state_106016__$1;
(statearr_106102_108824[(1)] = (59));

} else {
var statearr_106103_108829 = state_106016__$1;
(statearr_106103_108829[(1)] = (60));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106017 === (85))){
var _ = (function (){var statearr_106104 = state_106016;
(statearr_106104[(4)] = cljs.core.rest((state_106016[(4)])));

return statearr_106104;
})();
var state_106016__$1 = state_106016;
var ex106090 = (state_106016__$1[(2)]);
var statearr_106106_108845 = state_106016__$1;
(statearr_106106_108845[(5)] = ex106090);


var statearr_106107_108847 = state_106016__$1;
(statearr_106107_108847[(1)] = (84));

(statearr_106107_108847[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106017 === (39))){
var _ = (function (){var statearr_106109 = state_106016;
(statearr_106109[(4)] = cljs.core.rest((state_106016[(4)])));

return statearr_106109;
})();
var state_106016__$1 = state_106016;
var ex106095 = (state_106016__$1[(2)]);
var statearr_106111_108866 = state_106016__$1;
(statearr_106111_108866[(5)] = ex106095);


var statearr_106113_108868 = state_106016__$1;
(statearr_106113_108868[(1)] = (38));

(statearr_106113_108868[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106017 === (88))){
var inst_105982 = repl_tooling.integration.fake_editor.change_result();
var state_106016__$1 = state_106016;
var statearr_106115_108871 = state_106016__$1;
(statearr_106115_108871[(2)] = inst_105982);

(statearr_106115_108871[(1)] = (89));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106017 === (46))){
var inst_105775 = (state_106016[(27)]);
var inst_105778 = (state_106016[(28)]);
var inst_105770 = (state_106016[(29)]);
var inst_105782 = (state_106016[(2)]);
var inst_105783 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(inst_105775);
var inst_105784 = [inst_105782,inst_105770,inst_105783];
var inst_105785 = cljs.core.PersistentHashMap.fromArrays(inst_105778,inst_105784);
var inst_105786 = cljs.test.do_report(inst_105785);
var _ = (function (){var statearr_106119 = state_106016;
(statearr_106119[(4)] = cljs.core.rest((state_106016[(4)])));

return statearr_106119;
})();
var state_106016__$1 = state_106016;
var statearr_106121_108894 = state_106016__$1;
(statearr_106121_108894[(2)] = inst_105786);

(statearr_106121_108894[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106017 === (4))){
var inst_105569 = (state_106016[(12)]);
var inst_105589 = [new cljs.core.Keyword(null,"on-stderr","on-stderr",1583456038)];
var inst_105590 = (function (){var mark_as_done__53963__auto__ = inst_105569;
return (function (p1__102709_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(repl_tooling.integration.fake_editor.state,cljs.core.update,new cljs.core.Keyword(null,"stdout","stdout",-531490018),(function (e){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(e),"Hi: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__102709_SHARP_)].join('');
}));
});
})();
var inst_105591 = [inst_105590];
var inst_105592 = cljs.core.PersistentHashMap.fromArrays(inst_105589,inst_105591);
var inst_105593 = repl_tooling.integration.fake_editor.connect_BANG_.cljs$core$IFn$_invoke$arity$1(inst_105592);
var state_106016__$1 = state_106016;
var statearr_106127_108905 = state_106016__$1;
(statearr_106127_108905[(2)] = inst_105593);

(statearr_106127_108905[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106017 === (77))){
var _ = (function (){var statearr_106129 = state_106016;
(statearr_106129[(4)] = cljs.core.cons((79),(state_106016[(4)])));

return statearr_106129;
})();
var ___$1 = (function (){var statearr_106131 = state_106016;
(statearr_106131[(4)] = cljs.core.cons((80),(state_106016[(4)])));

return statearr_106131;
})();
var inst_105950 = repl_tooling.integration.fake_editor.type_and_eval("(Thread/sleep 1000)");
var inst_105951 = cljs.core.async.timeout((200));
var state_106016__$1 = (function (){var statearr_106133 = state_106016;
(statearr_106133[(30)] = inst_105950);

return statearr_106133;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_106016__$1,(81),inst_105951);
} else {
if((state_val_106017 === (54))){
var _ = (function (){var statearr_106135 = state_106016;
(statearr_106135[(4)] = cljs.core.rest((state_106016[(4)])));

return statearr_106135;
})();
var state_106016__$1 = state_106016;
var ex106122 = (state_106016__$1[(2)]);
var statearr_106137_108937 = state_106016__$1;
(statearr_106137_108937[(5)] = ex106122);


var statearr_106138_108942 = state_106016__$1;
(statearr_106138_108942[(1)] = (53));

(statearr_106138_108942[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106017 === (92))){
var inst_105993 = (state_106016[(14)]);
var inst_105988 = (state_106016[(15)]);
var inst_105996 = (state_106016[(17)]);
var inst_106000 = (state_106016[(2)]);
var inst_106001 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(inst_105993);
var inst_106002 = [inst_106000,inst_105988,inst_106001];
var inst_106003 = cljs.core.PersistentHashMap.fromArrays(inst_105996,inst_106002);
var inst_106004 = cljs.test.do_report(inst_106003);
var _ = (function (){var statearr_106141 = state_106016;
(statearr_106141[(4)] = cljs.core.rest((state_106016[(4)])));

return statearr_106141;
})();
var state_106016__$1 = state_106016;
var statearr_106142_108961 = state_106016__$1;
(statearr_106142_108961[(2)] = inst_106004);

(statearr_106142_108961[(1)] = (83));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106017 === (15))){
var inst_105680 = (state_106016[(2)]);
var state_106016__$1 = (function (){var statearr_106145 = state_106016;
(statearr_106145[(31)] = inst_105680);

return statearr_106145;
})();
var statearr_106146_108973 = state_106016__$1;
(statearr_106146_108973[(2)] = null);

(statearr_106146_108973[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106017 === (48))){
var inst_105862 = (state_106016[(2)]);
var inst_105863 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_105864 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_105865 = (new cljs.core.PersistentVector(null,1,(5),inst_105863,inst_105864,null));
var inst_105866 = cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(inst_105865,cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["STDERR works"], 0));
var state_106016__$1 = (function (){var statearr_106149 = state_106016;
(statearr_106149[(32)] = inst_105862);

(statearr_106149[(33)] = inst_105866);

return statearr_106149;
})();
var statearr_106150_108988 = state_106016__$1;
(statearr_106150_108988[(2)] = null);

(statearr_106150_108988[(1)] = (62));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106017 === (50))){
var _ = (function (){var statearr_106152 = state_106016;
(statearr_106152[(4)] = cljs.core.rest((state_106016[(4)])));

return statearr_106152;
})();
var state_106016__$1 = state_106016;
var ex106144 = (state_106016__$1[(2)]);
var statearr_106154_108994 = state_106016__$1;
(statearr_106154_108994[(5)] = ex106144);


throw ex106144;


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106017 === (75))){
var state_106016__$1 = state_106016;
var statearr_106156_109006 = state_106016__$1;
(statearr_106156_109006[(2)] = new cljs.core.Keyword(null,"fail","fail",1706214930));

(statearr_106156_109006[(1)] = (76));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106017 === (21))){
var inst_105657 = (state_106016[(2)]);
var state_106016__$1 = state_106016;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_106016__$1,(18),inst_105657);
} else {
if((state_val_106017 === (31))){
var inst_105695 = (state_106016[(34)]);
var inst_105716 = (state_106016[(2)]);
var _ = (function (){var statearr_106158 = state_106016;
(statearr_106158[(4)] = cljs.core.rest((state_106016[(4)])));

return statearr_106158;
})();
var state_106016__$1 = (function (){var statearr_106160 = state_106016;
(statearr_106160[(35)] = inst_105716);

return statearr_106160;
})();
var statearr_106161_109040 = state_106016__$1;
(statearr_106161_109040[(2)] = inst_105695);

(statearr_106161_109040[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106017 === (32))){
var _ = (function (){var statearr_106162 = state_106016;
(statearr_106162[(4)] = cljs.core.cons((34),(state_106016[(4)])));

return statearr_106162;
})();
var ___$1 = (function (){var statearr_106163 = state_106016;
(statearr_106163[(4)] = cljs.core.cons((35),(state_106016[(4)])));

return statearr_106163;
})();
var inst_105740 = repl_tooling.integration.fake_editor.type_and_eval("(/ 10 0)");
var state_106016__$1 = (function (){var statearr_106164 = state_106016;
(statearr_106164[(36)] = inst_105740);

return statearr_106164;
})();
var statearr_106166_109058 = state_106016__$1;
(statearr_106166_109058[(2)] = null);

(statearr_106166_109058[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106017 === (40))){
var inst_105768 = (state_106016[(2)]);
var inst_105769 = cljs.core.list(new cljs.core.Symbol(null,"await!","await!",-473046777,null),cljs.core.list(new cljs.core.Symbol("editor","change-result","editor/change-result",-914297300,null)));
var inst_105770 = /java.lang.ArithmeticException/;
var inst_105771 = matcher_combinators.core.match(/java.lang.ArithmeticException/,inst_105768);
var inst_105772 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_105768], 0));
var inst_105773 = new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(inst_105771);
var inst_105774 = matcher_combinators.printer.as_string(inst_105773);
var inst_105775 = [inst_105772,"\n\nMismatch:\n",inst_105774].join('');
var inst_105776 = new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(inst_105771);
var inst_105777 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),inst_105776);
var inst_105778 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363)];
var state_106016__$1 = (function (){var statearr_106168 = state_106016;
(statearr_106168[(37)] = inst_105769);

(statearr_106168[(27)] = inst_105775);

(statearr_106168[(28)] = inst_105778);

(statearr_106168[(29)] = inst_105770);

return statearr_106168;
})();
if(inst_105777){
var statearr_106170_109080 = state_106016__$1;
(statearr_106170_109080[(1)] = (44));

} else {
var statearr_106171_109082 = state_106016__$1;
(statearr_106171_109082[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106017 === (91))){
var state_106016__$1 = state_106016;
var statearr_106172_109085 = state_106016__$1;
(statearr_106172_109085[(2)] = new cljs.core.Keyword(null,"fail","fail",1706214930));

(statearr_106172_109085[(1)] = (92));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106017 === (56))){
var inst_105569 = (state_106016[(12)]);
var inst_105829 = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var inst_105830 = repl_tooling.integration.fake_editor.change_stdout();
var inst_105831 = (function (){var mark_as_done__53963__auto__ = inst_105569;
var chan__53977__auto__ = inst_105829;
return (function (result__53978__auto__){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan__53977__auto__,result__53978__auto__);
});
})();
var inst_105832 = inst_105830.then(inst_105831);
var state_106016__$1 = (function (){var statearr_106175 = state_106016;
(statearr_106175[(38)] = inst_105832);

return statearr_106175;
})();
var statearr_106178_109101 = state_106016__$1;
(statearr_106178_109101[(2)] = inst_105829);

(statearr_106178_109101[(1)] = (58));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106017 === (33))){
var inst_105792 = (state_106016[(2)]);
var inst_105793 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_105794 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_105795 = (new cljs.core.PersistentVector(null,1,(5),inst_105793,inst_105794,null));
var inst_105796 = cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(inst_105795,cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["STDOUT works"], 0));
var state_106016__$1 = (function (){var statearr_106180 = state_106016;
(statearr_106180[(39)] = inst_105792);

(statearr_106180[(40)] = inst_105796);

return statearr_106180;
})();
var statearr_106181_109121 = state_106016__$1;
(statearr_106181_109121[(2)] = null);

(statearr_106181_109121[(1)] = (47));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106017 === (13))){
var _ = (function (){var statearr_106183 = state_106016;
(statearr_106183[(4)] = cljs.core.rest((state_106016[(4)])));

return statearr_106183;
})();
var state_106016__$1 = state_106016;
var ex106173 = (state_106016__$1[(2)]);
var statearr_106184_109122 = state_106016__$1;
(statearr_106184_109122[(5)] = ex106173);


throw ex106173;


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106017 === (22))){
var state_106016__$1 = state_106016;
var statearr_106185_109123 = state_106016__$1;
(statearr_106185_109123[(2)] = new cljs.core.Keyword(null,"pass","pass",1574159993));

(statearr_106185_109123[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106017 === (90))){
var state_106016__$1 = state_106016;
var statearr_106186_109124 = state_106016__$1;
(statearr_106186_109124[(2)] = new cljs.core.Keyword(null,"pass","pass",1574159993));

(statearr_106186_109124[(1)] = (92));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106017 === (36))){
var _ = (function (){var statearr_106187 = state_106016;
(statearr_106187[(4)] = cljs.core.cons((39),(state_106016[(4)])));

return statearr_106187;
})();
var inst_105756 = repl_tooling.integration.fake_editor.change_result();
var inst_105757 = (inst_105756 instanceof Promise);
var state_106016__$1 = state_106016;
if(cljs.core.truth_(inst_105757)){
var statearr_106190_109125 = state_106016__$1;
(statearr_106190_109125[(1)] = (41));

} else {
var statearr_106193_109126 = state_106016__$1;
(statearr_106193_109126[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106017 === (41))){
var inst_105569 = (state_106016[(12)]);
var inst_105759 = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var inst_105760 = repl_tooling.integration.fake_editor.change_result();
var inst_105761 = (function (){var mark_as_done__53963__auto__ = inst_105569;
var chan__53977__auto__ = inst_105759;
return (function (result__53978__auto__){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan__53977__auto__,result__53978__auto__);
});
})();
var inst_105762 = inst_105760.then(inst_105761);
var state_106016__$1 = (function (){var statearr_106222 = state_106016;
(statearr_106222[(41)] = inst_105762);

return statearr_106222;
})();
var statearr_106227_109127 = state_106016__$1;
(statearr_106227_109127[(2)] = inst_105759);

(statearr_106227_109127[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106017 === (89))){
var inst_105984 = (state_106016[(2)]);
var state_106016__$1 = state_106016;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_106016__$1,(86),inst_105984);
} else {
if((state_val_106017 === (43))){
var inst_105766 = (state_106016[(2)]);
var state_106016__$1 = state_106016;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_106016__$1,(40),inst_105766);
} else {
if((state_val_106017 === (61))){
var inst_105848 = (state_106016[(23)]);
var inst_105845 = (state_106016[(24)]);
var inst_105840 = (state_106016[(25)]);
var inst_105852 = (state_106016[(2)]);
var inst_105853 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(inst_105845);
var inst_105854 = [inst_105852,inst_105840,inst_105853];
var inst_105855 = cljs.core.PersistentHashMap.fromArrays(inst_105848,inst_105854);
var inst_105856 = cljs.test.do_report(inst_105855);
var _ = (function (){var statearr_106278 = state_106016;
(statearr_106278[(4)] = cljs.core.rest((state_106016[(4)])));

return statearr_106278;
})();
var state_106016__$1 = state_106016;
var statearr_106291_109130 = state_106016__$1;
(statearr_106291_109130[(2)] = inst_105856);

(statearr_106291_109130[(1)] = (52));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106017 === (29))){
var inst_105694 = (state_106016[(42)]);
var inst_105697 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_105698 = cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"re-find","re-find",1143444147,null),/=>/,cljs.core.list(new cljs.core.Symbol("editor","txt-for-selector","editor/txt-for-selector",-1957500269,null),"#stdout")));
var inst_105699 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_105700 = cljs.core.cons(inst_105699,inst_105694);
var inst_105701 = ["repl_tooling/nrepl/nrepl_test.cljs",70,new cljs.core.Keyword(null,"pass","pass",1574159993),13,123,inst_105698,123,inst_105700,null];
var inst_105702 = cljs.core.PersistentHashMap.fromArrays(inst_105697,inst_105701);
var inst_105703 = cljs.test.report.call(null,inst_105702);
var state_106016__$1 = state_106016;
var statearr_106310_109131 = state_106016__$1;
(statearr_106310_109131[(2)] = inst_105703);

(statearr_106310_109131[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106017 === (44))){
var state_106016__$1 = state_106016;
var statearr_106325_109133 = state_106016__$1;
(statearr_106325_109133[(2)] = new cljs.core.Keyword(null,"pass","pass",1574159993));

(statearr_106325_109133[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106017 === (6))){
var inst_105613 = (state_106016[(2)]);
var inst_105614 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_105615 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_105616 = (new cljs.core.PersistentVector(null,1,(5),inst_105614,inst_105615,null));
var inst_105617 = cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(inst_105616,cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["evaluation works"], 0));
var state_106016__$1 = (function (){var statearr_106354 = state_106016;
(statearr_106354[(43)] = inst_105613);

(statearr_106354[(44)] = inst_105617);

return statearr_106354;
})();
var statearr_106366_109135 = state_106016__$1;
(statearr_106366_109135[(2)] = null);

(statearr_106366_109135[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106017 === (28))){
var _ = (function (){var statearr_106381 = state_106016;
(statearr_106381[(4)] = cljs.core.rest((state_106016[(4)])));

return statearr_106381;
})();
var state_106016__$1 = state_106016;
var ex106324 = (state_106016__$1[(2)]);
var statearr_106384_109138 = state_106016__$1;
(statearr_106384_109138[(5)] = ex106324);


var statearr_106393_109140 = state_106016__$1;
(statearr_106393_109140[(1)] = (27));

(statearr_106393_109140[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106017 === (64))){
var _ = (function (){var statearr_106413 = state_106016;
(statearr_106413[(4)] = cljs.core.rest((state_106016[(4)])));

return statearr_106413;
})();
var inst_105868 = (state_106016[(2)]);
var inst_105869 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_105870 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_105871 = (new cljs.core.PersistentVector(null,1,(5),inst_105869,inst_105870,null));
var inst_105872 = cljs.test.update_current_env_BANG_(inst_105871,cljs.core.rest);
var ___$1 = (function (){var temp__5753__auto__ = (state_106016[(5)]);
if(cljs.core.truth_(temp__5753__auto__)){
var e__34184__auto__ = temp__5753__auto__;
throw e__34184__auto__;
} else {
return null;
}
})();
var state_106016__$1 = (function (){var statearr_106443 = state_106016;
(statearr_106443[(45)] = inst_105872);

return statearr_106443;
})();
var statearr_106444_109141 = state_106016__$1;
(statearr_106444_109141[(2)] = inst_105868);

(statearr_106444_109141[(1)] = (63));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106017 === (51))){
var _ = (function (){var statearr_106445 = state_106016;
(statearr_106445[(4)] = cljs.core.cons((54),(state_106016[(4)])));

return statearr_106445;
})();
var inst_105826 = repl_tooling.integration.fake_editor.change_stdout();
var inst_105827 = (inst_105826 instanceof Promise);
var state_106016__$1 = state_106016;
if(cljs.core.truth_(inst_105827)){
var statearr_106446_109144 = state_106016__$1;
(statearr_106446_109144[(1)] = (56));

} else {
var statearr_106448_109145 = state_106016__$1;
(statearr_106448_109145[(1)] = (57));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106017 === (25))){
var inst_105694 = (state_106016[(42)]);
var inst_105695 = (state_106016[(34)]);
var _ = (function (){var statearr_106452 = state_106016;
(statearr_106452[(4)] = cljs.core.cons((28),(state_106016[(4)])));

return statearr_106452;
})();
var inst_105692 = repl_tooling.integration.fake_editor.txt_for_selector("#stdout");
var inst_105693 = cljs.core.re_find(/=>/,inst_105692);
var inst_105694__$1 = (new cljs.core.List(null,inst_105693,null,(1),null));
var inst_105695__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.not,inst_105694__$1);
var state_106016__$1 = (function (){var statearr_106453 = state_106016;
(statearr_106453[(42)] = inst_105694__$1);

(statearr_106453[(34)] = inst_105695__$1);

return statearr_106453;
})();
if(cljs.core.truth_(inst_105695__$1)){
var statearr_106454_109147 = state_106016__$1;
(statearr_106454_109147[(1)] = (29));

} else {
var statearr_106456_109149 = state_106016__$1;
(statearr_106456_109149[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106017 === (34))){
var _ = (function (){var statearr_106459 = state_106016;
(statearr_106459[(4)] = cljs.core.rest((state_106016[(4)])));

return statearr_106459;
})();
var inst_105728 = (state_106016[(2)]);
var inst_105729 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_105730 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_105731 = (new cljs.core.PersistentVector(null,1,(5),inst_105729,inst_105730,null));
var inst_105732 = cljs.test.update_current_env_BANG_(inst_105731,cljs.core.rest);
var ___$1 = (function (){var temp__5753__auto__ = (state_106016[(5)]);
if(cljs.core.truth_(temp__5753__auto__)){
var e__34184__auto__ = temp__5753__auto__;
throw e__34184__auto__;
} else {
return null;
}
})();
var state_106016__$1 = (function (){var statearr_106462 = state_106016;
(statearr_106462[(46)] = inst_105732);

return statearr_106462;
})();
var statearr_106463_109151 = state_106016__$1;
(statearr_106463_109151[(2)] = inst_105728);

(statearr_106463_109151[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106017 === (17))){
var _ = (function (){var statearr_106465 = state_106016;
(statearr_106465[(4)] = cljs.core.rest((state_106016[(4)])));

return statearr_106465;
})();
var state_106016__$1 = state_106016;
var ex106450 = (state_106016__$1[(2)]);
var statearr_106467_109152 = state_106016__$1;
(statearr_106467_109152[(5)] = ex106450);


var statearr_106468_109153 = state_106016__$1;
(statearr_106468_109153[(1)] = (16));

(statearr_106468_109153[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106017 === (3))){
var inst_105569 = (state_106016[(12)]);
var inst_105580 = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var inst_105581 = [new cljs.core.Keyword(null,"on-stderr","on-stderr",1583456038)];
var inst_105582 = (function (){var mark_as_done__53963__auto__ = inst_105569;
var chan__53977__auto__ = inst_105580;
return (function (p1__102709_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(repl_tooling.integration.fake_editor.state,cljs.core.update,new cljs.core.Keyword(null,"stdout","stdout",-531490018),(function (e){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(e),"Hi: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__102709_SHARP_)].join('');
}));
});
})();
var inst_105583 = [inst_105582];
var inst_105584 = cljs.core.PersistentHashMap.fromArrays(inst_105581,inst_105583);
var inst_105585 = repl_tooling.integration.fake_editor.connect_BANG_.cljs$core$IFn$_invoke$arity$1(inst_105584);
var inst_105586 = (function (){var mark_as_done__53963__auto__ = inst_105569;
var chan__53977__auto__ = inst_105580;
return (function (result__53978__auto__){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan__53977__auto__,result__53978__auto__);
});
})();
var inst_105587 = inst_105585.then(inst_105586);
var state_106016__$1 = (function (){var statearr_106470 = state_106016;
(statearr_106470[(47)] = inst_105587);

return statearr_106470;
})();
var statearr_106471_109157 = state_106016__$1;
(statearr_106471_109157[(2)] = inst_105580);

(statearr_106471_109157[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106017 === (12))){
var _ = (function (){var statearr_106472 = state_106016;
(statearr_106472[(4)] = cljs.core.rest((state_106016[(4)])));

return statearr_106472;
})();
var inst_105619 = (state_106016[(2)]);
var inst_105620 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_105621 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_105622 = (new cljs.core.PersistentVector(null,1,(5),inst_105620,inst_105621,null));
var inst_105623 = cljs.test.update_current_env_BANG_(inst_105622,cljs.core.rest);
var ___$1 = (function (){var temp__5753__auto__ = (state_106016[(5)]);
if(cljs.core.truth_(temp__5753__auto__)){
var e__34184__auto__ = temp__5753__auto__;
throw e__34184__auto__;
} else {
return null;
}
})();
var state_106016__$1 = (function (){var statearr_106475 = state_106016;
(statearr_106475[(48)] = inst_105623);

return statearr_106475;
})();
var statearr_106476_109160 = state_106016__$1;
(statearr_106476_109160[(2)] = inst_105619);

(statearr_106476_109160[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106017 === (2))){
var inst_105569 = (state_106016[(12)]);
var inst_105597 = (state_106016[(2)]);
var inst_105598 = (function (){var mark_as_done__53963__auto__ = inst_105569;
return (function (){
return new cljs.core.Keyword(null,"eval","eval",-1103567905).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"repls","repls",870822864).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(repl_tooling.integration.fake_editor.state)));
});
})();
var inst_105599 = repl_tooling.integration.fake_editor.wait_for(inst_105598);
var inst_105600 = (inst_105599 instanceof Promise);
var state_106016__$1 = (function (){var statearr_106477 = state_106016;
(statearr_106477[(49)] = inst_105597);

return statearr_106477;
})();
if(cljs.core.truth_(inst_105600)){
var statearr_106479_109162 = state_106016__$1;
(statearr_106479_109162[(1)] = (7));

} else {
var statearr_106480_109163 = state_106016__$1;
(statearr_106480_109163[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106017 === (66))){
var _ = (function (){var statearr_106481 = state_106016;
(statearr_106481[(4)] = cljs.core.cons((69),(state_106016[(4)])));

return statearr_106481;
})();
var inst_105896 = repl_tooling.integration.fake_editor.change_stdout();
var inst_105897 = (inst_105896 instanceof Promise);
var state_106016__$1 = state_106016;
if(cljs.core.truth_(inst_105897)){
var statearr_106484_109166 = state_106016__$1;
(statearr_106484_109166[(1)] = (71));

} else {
var statearr_106486_109167 = state_106016__$1;
(statearr_106486_109167[(1)] = (72));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106017 === (23))){
var state_106016__$1 = state_106016;
var statearr_106489_109168 = state_106016__$1;
(statearr_106489_109168[(2)] = new cljs.core.Keyword(null,"fail","fail",1706214930));

(statearr_106489_109168[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106017 === (47))){
var _ = (function (){var statearr_106490 = state_106016;
(statearr_106490[(4)] = cljs.core.cons((49),(state_106016[(4)])));

return statearr_106490;
})();
var ___$1 = (function (){var statearr_106493 = state_106016;
(statearr_106493[(4)] = cljs.core.cons((50),(state_106016[(4)])));

return statearr_106493;
})();
var inst_105810 = repl_tooling.integration.fake_editor.type_and_eval("(prn :some-message)");
var state_106016__$1 = (function (){var statearr_106496 = state_106016;
(statearr_106496[(50)] = inst_105810);

return statearr_106496;
})();
var statearr_106497_109171 = state_106016__$1;
(statearr_106497_109171[(2)] = null);

(statearr_106497_109171[(1)] = (51));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106017 === (35))){
var _ = (function (){var statearr_106500 = state_106016;
(statearr_106500[(4)] = cljs.core.rest((state_106016[(4)])));

return statearr_106500;
})();
var state_106016__$1 = state_106016;
var ex106488 = (state_106016__$1[(2)]);
var statearr_106501_109173 = state_106016__$1;
(statearr_106501_109173[(5)] = ex106488);


throw ex106488;


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106017 === (82))){
var _ = (function (){var statearr_106504 = state_106016;
(statearr_106504[(4)] = cljs.core.cons((85),(state_106016[(4)])));

return statearr_106504;
})();
var inst_105974 = repl_tooling.integration.fake_editor.change_result();
var inst_105975 = (inst_105974 instanceof Promise);
var state_106016__$1 = state_106016;
if(cljs.core.truth_(inst_105975)){
var statearr_106506_109175 = state_106016__$1;
(statearr_106506_109175[(1)] = (87));

} else {
var statearr_106508_109176 = state_106016__$1;
(statearr_106508_109176[(1)] = (88));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106017 === (76))){
var inst_105915 = (state_106016[(7)]);
var inst_105910 = (state_106016[(8)]);
var inst_105918 = (state_106016[(10)]);
var inst_105922 = (state_106016[(2)]);
var inst_105923 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(inst_105915);
var inst_105924 = [inst_105922,inst_105910,inst_105923];
var inst_105925 = cljs.core.PersistentHashMap.fromArrays(inst_105918,inst_105924);
var inst_105926 = cljs.test.do_report(inst_105925);
var _ = (function (){var statearr_106511 = state_106016;
(statearr_106511[(4)] = cljs.core.rest((state_106016[(4)])));

return statearr_106511;
})();
var state_106016__$1 = state_106016;
var statearr_106512_109177 = state_106016__$1;
(statearr_106512_109177[(2)] = inst_105926);

(statearr_106512_109177[(1)] = (67));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106017 === (19))){
var inst_105569 = (state_106016[(12)]);
var inst_105650 = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var inst_105651 = repl_tooling.integration.fake_editor.change_result();
var inst_105652 = (function (){var mark_as_done__53963__auto__ = inst_105569;
var chan__53977__auto__ = inst_105650;
return (function (result__53978__auto__){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan__53977__auto__,result__53978__auto__);
});
})();
var inst_105653 = inst_105651.then(inst_105652);
var state_106016__$1 = (function (){var statearr_106516 = state_106016;
(statearr_106516[(51)] = inst_105653);

return statearr_106516;
})();
var statearr_106518_109180 = state_106016__$1;
(statearr_106518_109180[(2)] = inst_105650);

(statearr_106518_109180[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106017 === (57))){
var inst_105834 = repl_tooling.integration.fake_editor.change_stdout();
var state_106016__$1 = state_106016;
var statearr_106520_109182 = state_106016__$1;
(statearr_106520_109182[(2)] = inst_105834);

(statearr_106520_109182[(1)] = (58));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106017 === (68))){
var inst_105881 = (state_106016[(2)]);
var inst_105882 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_105883 = check.core.normalize_error(inst_105881);
var inst_105884 = cljs.core.list(new cljs.core.Symbol(null,"await!","await!",-473046777,null),cljs.core.list(new cljs.core.Symbol("editor","change-stdout","editor/change-stdout",294315011,null)));
var inst_105885 = new cljs.core.Symbol(null,"=>","=>",-813269641,null);
var inst_105886 = /Hi: :some-error/;
var inst_105887 = ["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_105884)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_105885)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_105886)].join('');
var inst_105888 = [new cljs.core.Keyword(null,"error","error",-978969032),/Hi: :some-error/,inst_105883,inst_105887];
var inst_105889 = cljs.core.PersistentHashMap.fromArrays(inst_105882,inst_105888);
var inst_105890 = cljs.test.do_report(inst_105889);
var state_106016__$1 = state_106016;
var statearr_106524_109184 = state_106016__$1;
(statearr_106524_109184[(2)] = inst_105890);

(statearr_106524_109184[(1)] = (67));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106017 === (11))){
var inst_105722 = (state_106016[(2)]);
var inst_105723 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_105724 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_105725 = (new cljs.core.PersistentVector(null,1,(5),inst_105723,inst_105724,null));
var inst_105726 = cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(inst_105725,cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["exception works"], 0));
var state_106016__$1 = (function (){var statearr_106525 = state_106016;
(statearr_106525[(52)] = inst_105722);

(statearr_106525[(53)] = inst_105726);

return statearr_106525;
})();
var statearr_106527_109186 = state_106016__$1;
(statearr_106527_109186[(2)] = null);

(statearr_106527_109186[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106017 === (9))){
var inst_105611 = (state_106016[(2)]);
var state_106016__$1 = state_106016;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_106016__$1,(6),inst_105611);
} else {
if((state_val_106017 === (5))){
var inst_105595 = (state_106016[(2)]);
var state_106016__$1 = state_106016;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_106016__$1,(2),inst_105595);
} else {
if((state_val_106017 === (83))){
var inst_106007 = (state_106016[(2)]);
var _ = (function (){var statearr_106529 = state_106016;
(statearr_106529[(4)] = cljs.core.rest((state_106016[(4)])));

return statearr_106529;
})();
var state_106016__$1 = state_106016;
var statearr_106531_109188 = state_106016__$1;
(statearr_106531_109188[(2)] = inst_106007);

(statearr_106531_109188[(1)] = (79));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106017 === (14))){
var _ = (function (){var statearr_106534 = state_106016;
(statearr_106534[(4)] = cljs.core.cons((17),(state_106016[(4)])));

return statearr_106534;
})();
var inst_105647 = repl_tooling.integration.fake_editor.change_result();
var inst_105648 = (inst_105647 instanceof Promise);
var state_106016__$1 = state_106016;
if(cljs.core.truth_(inst_105648)){
var statearr_106537_109189 = state_106016__$1;
(statearr_106537_109189[(1)] = (19));

} else {
var statearr_106539_109190 = state_106016__$1;
(statearr_106539_109190[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106017 === (45))){
var state_106016__$1 = state_106016;
var statearr_106540_109191 = state_106016__$1;
(statearr_106540_109191[(2)] = new cljs.core.Keyword(null,"fail","fail",1706214930));

(statearr_106540_109191[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106017 === (53))){
var inst_105811 = (state_106016[(2)]);
var inst_105812 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_105813 = check.core.normalize_error(inst_105811);
var inst_105814 = cljs.core.list(new cljs.core.Symbol(null,"await!","await!",-473046777,null),cljs.core.list(new cljs.core.Symbol("editor","change-stdout","editor/change-stdout",294315011,null)));
var inst_105815 = new cljs.core.Symbol(null,"=>","=>",-813269641,null);
var inst_105816 = /:some-message/;
var inst_105817 = ["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_105814)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_105815)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_105816)].join('');
var inst_105818 = [new cljs.core.Keyword(null,"error","error",-978969032),/:some-message/,inst_105813,inst_105817];
var inst_105819 = cljs.core.PersistentHashMap.fromArrays(inst_105812,inst_105818);
var inst_105820 = cljs.test.do_report(inst_105819);
var state_106016__$1 = state_106016;
var statearr_106545_109192 = state_106016__$1;
(statearr_106545_109192[(2)] = inst_105820);

(statearr_106545_109192[(1)] = (52));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106017 === (78))){
var inst_105569 = (state_106016[(12)]);
var inst_106010 = (state_106016[(2)]);
var inst_106011 = cljs.core.deref(inst_105569);
var state_106016__$1 = (function (){var statearr_106546 = state_106016;
(statearr_106546[(54)] = inst_106010);

return statearr_106546;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_106016__$1,inst_106011);
} else {
if((state_val_106017 === (26))){
var inst_105719 = (state_106016[(2)]);
var _ = (function (){var statearr_106548 = state_106016;
(statearr_106548[(4)] = cljs.core.rest((state_106016[(4)])));

return statearr_106548;
})();
var state_106016__$1 = state_106016;
var statearr_106551_109194 = state_106016__$1;
(statearr_106551_109194[(2)] = inst_105719);

(statearr_106551_109194[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106017 === (16))){
var inst_105632 = (state_106016[(2)]);
var inst_105633 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_105634 = check.core.normalize_error(inst_105632);
var inst_105635 = cljs.core.list(new cljs.core.Symbol(null,"await!","await!",-473046777,null),cljs.core.list(new cljs.core.Symbol("editor","change-result","editor/change-result",-914297300,null)));
var inst_105636 = new cljs.core.Symbol(null,"=>","=>",-813269641,null);
var inst_105637 = "5";
var inst_105638 = ["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_105635)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_105636)," ",inst_105637].join('');
var inst_105639 = [new cljs.core.Keyword(null,"error","error",-978969032),"5",inst_105634,inst_105638];
var inst_105640 = cljs.core.PersistentHashMap.fromArrays(inst_105633,inst_105639);
var inst_105641 = cljs.test.do_report(inst_105640);
var state_106016__$1 = state_106016;
var statearr_106555_109195 = state_106016__$1;
(statearr_106555_109195[(2)] = inst_105641);

(statearr_106555_109195[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106017 === (81))){
var inst_105953 = (state_106016[(2)]);
var inst_105954 = cljs.core.deref(repl_tooling.integration.fake_editor.state);
var inst_105955 = new cljs.core.Keyword(null,"commands","commands",161008658).cljs$core$IFn$_invoke$arity$1(inst_105954);
var inst_105956 = new cljs.core.Keyword(null,"break-evaluation","break-evaluation",580088387).cljs$core$IFn$_invoke$arity$1(inst_105955);
var inst_105957 = new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(inst_105956);
var inst_105958 = (inst_105957.cljs$core$IFn$_invoke$arity$0 ? inst_105957.cljs$core$IFn$_invoke$arity$0() : inst_105957.call(null));
var state_106016__$1 = (function (){var statearr_106557 = state_106016;
(statearr_106557[(55)] = inst_105953);

(statearr_106557[(56)] = inst_105958);

return statearr_106557;
})();
var statearr_106568_109196 = state_106016__$1;
(statearr_106568_109196[(2)] = null);

(statearr_106568_109196[(1)] = (82));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106017 === (79))){
var _ = (function (){var statearr_106572 = state_106016;
(statearr_106572[(4)] = cljs.core.rest((state_106016[(4)])));

return statearr_106572;
})();
var inst_105938 = (state_106016[(2)]);
var inst_105939 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_105940 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_105941 = (new cljs.core.PersistentVector(null,1,(5),inst_105939,inst_105940,null));
var inst_105942 = cljs.test.update_current_env_BANG_(inst_105941,cljs.core.rest);
var ___$1 = (function (){var temp__5753__auto__ = (state_106016[(5)]);
if(cljs.core.truth_(temp__5753__auto__)){
var e__34184__auto__ = temp__5753__auto__;
throw e__34184__auto__;
} else {
return null;
}
})();
var state_106016__$1 = (function (){var statearr_106576 = state_106016;
(statearr_106576[(57)] = inst_105942);

return statearr_106576;
})();
var statearr_106577_109199 = state_106016__$1;
(statearr_106577_109199[(2)] = inst_105938);

(statearr_106577_109199[(1)] = (78));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106017 === (38))){
var inst_105741 = (state_106016[(2)]);
var inst_105742 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_105743 = check.core.normalize_error(inst_105741);
var inst_105744 = cljs.core.list(new cljs.core.Symbol(null,"await!","await!",-473046777,null),cljs.core.list(new cljs.core.Symbol("editor","change-result","editor/change-result",-914297300,null)));
var inst_105745 = new cljs.core.Symbol(null,"=>","=>",-813269641,null);
var inst_105746 = /java.lang.ArithmeticException/;
var inst_105747 = ["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_105744)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_105745)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_105746)].join('');
var inst_105748 = [new cljs.core.Keyword(null,"error","error",-978969032),/java.lang.ArithmeticException/,inst_105743,inst_105747];
var inst_105749 = cljs.core.PersistentHashMap.fromArrays(inst_105742,inst_105748);
var inst_105750 = cljs.test.do_report(inst_105749);
var state_106016__$1 = state_106016;
var statearr_106580_109201 = state_106016__$1;
(statearr_106580_109201[(2)] = inst_105750);

(statearr_106580_109201[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106017 === (87))){
var inst_105569 = (state_106016[(12)]);
var inst_105977 = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var inst_105978 = repl_tooling.integration.fake_editor.change_result();
var inst_105979 = (function (){var mark_as_done__53963__auto__ = inst_105569;
var chan__53977__auto__ = inst_105977;
return (function (result__53978__auto__){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan__53977__auto__,result__53978__auto__);
});
})();
var inst_105980 = inst_105978.then(inst_105979);
var state_106016__$1 = (function (){var statearr_106584 = state_106016;
(statearr_106584[(58)] = inst_105980);

return statearr_106584;
})();
var statearr_106585_109203 = state_106016__$1;
(statearr_106585_109203[(2)] = inst_105977);

(statearr_106585_109203[(1)] = (89));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106017 === (30))){
var inst_105694 = (state_106016[(42)]);
var inst_105705 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_105706 = cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"re-find","re-find",1143444147,null),/=>/,cljs.core.list(new cljs.core.Symbol("editor","txt-for-selector","editor/txt-for-selector",-1957500269,null),"#stdout")));
var inst_105707 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_105708 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_105709 = cljs.core.cons(inst_105708,inst_105694);
var inst_105710 = (new cljs.core.List(null,inst_105709,null,(1),null));
var inst_105711 = (new cljs.core.List(null,inst_105707,inst_105710,(2),null));
var inst_105712 = ["repl_tooling/nrepl/nrepl_test.cljs",70,new cljs.core.Keyword(null,"fail","fail",1706214930),13,123,inst_105706,123,inst_105711,null];
var inst_105713 = cljs.core.PersistentHashMap.fromArrays(inst_105705,inst_105712);
var inst_105714 = cljs.test.report.call(null,inst_105713);
var state_106016__$1 = state_106016;
var statearr_106589_109207 = state_106016__$1;
(statearr_106589_109207[(2)] = inst_105714);

(statearr_106589_109207[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106017 === (73))){
var inst_105906 = (state_106016[(2)]);
var state_106016__$1 = state_106016;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_106016__$1,(70),inst_105906);
} else {
if((state_val_106017 === (10))){
var _ = (function (){var statearr_106593 = state_106016;
(statearr_106593[(4)] = cljs.core.cons((12),(state_106016[(4)])));

return statearr_106593;
})();
var ___$1 = (function (){var statearr_106595 = state_106016;
(statearr_106595[(4)] = cljs.core.cons((13),(state_106016[(4)])));

return statearr_106595;
})();
var inst_105631 = repl_tooling.integration.fake_editor.type_and_eval("(+ 2 3)");
var state_106016__$1 = (function (){var statearr_106596 = state_106016;
(statearr_106596[(59)] = inst_105631);

return statearr_106596;
})();
var statearr_106598_109211 = state_106016__$1;
(statearr_106598_109211[(2)] = null);

(statearr_106598_109211[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106017 === (18))){
var inst_105659 = (state_106016[(2)]);
var inst_105660 = cljs.core.list(new cljs.core.Symbol(null,"await!","await!",-473046777,null),cljs.core.list(new cljs.core.Symbol("editor","change-result","editor/change-result",-914297300,null)));
var inst_105661 = "5";
var inst_105662 = matcher_combinators.core.match("5",inst_105659);
var inst_105663 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_105659], 0));
var inst_105664 = new cljs.core.Keyword("matcher-combinators.result","value","matcher-combinators.result/value",-1708331494).cljs$core$IFn$_invoke$arity$1(inst_105662);
var inst_105665 = matcher_combinators.printer.as_string(inst_105664);
var inst_105666 = [inst_105663,"\n\nMismatch:\n",inst_105665].join('');
var inst_105667 = new cljs.core.Keyword("matcher-combinators.result","type","matcher-combinators.result/type",-630343109).cljs$core$IFn$_invoke$arity$1(inst_105662);
var inst_105668 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match","match",1220059550),inst_105667);
var inst_105669 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363)];
var state_106016__$1 = (function (){var statearr_106602 = state_106016;
(statearr_106602[(20)] = inst_105669);

(statearr_106602[(21)] = inst_105666);

(statearr_106602[(22)] = inst_105661);

(statearr_106602[(60)] = inst_105660);

return statearr_106602;
})();
if(inst_105668){
var statearr_106603_109213 = state_106016__$1;
(statearr_106603_109213[(1)] = (22));

} else {
var statearr_106605_109214 = state_106016__$1;
(statearr_106605_109214[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106017 === (52))){
var inst_105859 = (state_106016[(2)]);
var _ = (function (){var statearr_106607 = state_106016;
(statearr_106607[(4)] = cljs.core.rest((state_106016[(4)])));

return statearr_106607;
})();
var state_106016__$1 = state_106016;
var statearr_106609_109216 = state_106016__$1;
(statearr_106609_109216[(2)] = inst_105859);

(statearr_106609_109216[(1)] = (49));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106017 === (67))){
var inst_105929 = (state_106016[(2)]);
var _ = (function (){var statearr_106610 = state_106016;
(statearr_106610[(4)] = cljs.core.rest((state_106016[(4)])));

return statearr_106610;
})();
var state_106016__$1 = state_106016;
var statearr_106612_109217 = state_106016__$1;
(statearr_106612_109217[(2)] = inst_105929);

(statearr_106612_109217[(1)] = (64));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106017 === (71))){
var inst_105569 = (state_106016[(12)]);
var inst_105899 = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var inst_105900 = repl_tooling.integration.fake_editor.change_stdout();
var inst_105901 = (function (){var mark_as_done__53963__auto__ = inst_105569;
var chan__53977__auto__ = inst_105899;
return (function (result__53978__auto__){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan__53977__auto__,result__53978__auto__);
});
})();
var inst_105902 = inst_105900.then(inst_105901);
var state_106016__$1 = (function (){var statearr_106615 = state_106016;
(statearr_106615[(61)] = inst_105902);

return statearr_106615;
})();
var statearr_106616_109220 = state_106016__$1;
(statearr_106616_109220[(2)] = inst_105899);

(statearr_106616_109220[(1)] = (73));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106017 === (42))){
var inst_105764 = repl_tooling.integration.fake_editor.change_result();
var state_106016__$1 = state_106016;
var statearr_106619_109221 = state_106016__$1;
(statearr_106619_109221[(2)] = inst_105764);

(statearr_106619_109221[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106017 === (80))){
var _ = (function (){var statearr_106621 = state_106016;
(statearr_106621[(4)] = cljs.core.rest((state_106016[(4)])));

return statearr_106621;
})();
var state_106016__$1 = state_106016;
var ex106613 = (state_106016__$1[(2)]);
var statearr_106622_109223 = state_106016__$1;
(statearr_106622_109223[(5)] = ex106613);


throw ex106613;


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106017 === (37))){
var inst_105789 = (state_106016[(2)]);
var _ = (function (){var statearr_106625 = state_106016;
(statearr_106625[(4)] = cljs.core.rest((state_106016[(4)])));

return statearr_106625;
})();
var state_106016__$1 = state_106016;
var statearr_106626_109224 = state_106016__$1;
(statearr_106626_109224[(2)] = inst_105789);

(statearr_106626_109224[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106017 === (63))){
var inst_105932 = (state_106016[(2)]);
var inst_105933 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_105934 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_105935 = (new cljs.core.PersistentVector(null,1,(5),inst_105933,inst_105934,null));
var inst_105936 = cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(inst_105935,cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["break works"], 0));
var state_106016__$1 = (function (){var statearr_106628 = state_106016;
(statearr_106628[(62)] = inst_105932);

(statearr_106628[(63)] = inst_105936);

return statearr_106628;
})();
var statearr_106630_109226 = state_106016__$1;
(statearr_106630_109226[(2)] = null);

(statearr_106630_109226[(1)] = (77));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106017 === (8))){
var inst_105569 = (state_106016[(12)]);
var inst_105608 = (function (){var mark_as_done__53963__auto__ = inst_105569;
return (function (){
return new cljs.core.Keyword(null,"eval","eval",-1103567905).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"repls","repls",870822864).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(repl_tooling.integration.fake_editor.state)));
});
})();
var inst_105609 = repl_tooling.integration.fake_editor.wait_for(inst_105608);
var state_106016__$1 = state_106016;
var statearr_106631_109227 = state_106016__$1;
(statearr_106631_109227[(2)] = inst_105609);

(statearr_106631_109227[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106017 === (49))){
var _ = (function (){var statearr_106636 = state_106016;
(statearr_106636[(4)] = cljs.core.rest((state_106016[(4)])));

return statearr_106636;
})();
var inst_105798 = (state_106016[(2)]);
var inst_105799 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_105800 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_105801 = (new cljs.core.PersistentVector(null,1,(5),inst_105799,inst_105800,null));
var inst_105802 = cljs.test.update_current_env_BANG_(inst_105801,cljs.core.rest);
var ___$1 = (function (){var temp__5753__auto__ = (state_106016[(5)]);
if(cljs.core.truth_(temp__5753__auto__)){
var e__34184__auto__ = temp__5753__auto__;
throw e__34184__auto__;
} else {
return null;
}
})();
var state_106016__$1 = (function (){var statearr_106638 = state_106016;
(statearr_106638[(64)] = inst_105802);

return statearr_106638;
})();
var statearr_106640_109230 = state_106016__$1;
(statearr_106640_109230[(2)] = inst_105798);

(statearr_106640_109230[(1)] = (48));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106017 === (84))){
var inst_105959 = (state_106016[(2)]);
var inst_105960 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_105961 = check.core.normalize_error(inst_105959);
var inst_105962 = cljs.core.list(new cljs.core.Symbol(null,"await!","await!",-473046777,null),cljs.core.list(new cljs.core.Symbol("editor","change-result","editor/change-result",-914297300,null)));
var inst_105963 = new cljs.core.Symbol(null,"=>","=>",-813269641,null);
var inst_105964 = /Interrupted/;
var inst_105965 = ["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_105962)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_105963)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_105964)].join('');
var inst_105966 = [new cljs.core.Keyword(null,"error","error",-978969032),/Interrupted/,inst_105961,inst_105965];
var inst_105967 = cljs.core.PersistentHashMap.fromArrays(inst_105960,inst_105966);
var inst_105968 = cljs.test.do_report(inst_105967);
var state_106016__$1 = state_106016;
var statearr_106641_109232 = state_106016__$1;
(statearr_106641_109232[(2)] = inst_105968);

(statearr_106641_109232[(1)] = (83));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var repl_tooling$nrepl$nrepl_test$state_machine__34940__auto__ = null;
var repl_tooling$nrepl$nrepl_test$state_machine__34940__auto____0 = (function (){
var statearr_106652 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_106652[(0)] = repl_tooling$nrepl$nrepl_test$state_machine__34940__auto__);

(statearr_106652[(1)] = (1));

return statearr_106652;
});
var repl_tooling$nrepl$nrepl_test$state_machine__34940__auto____1 = (function (state_106016){
while(true){
var ret_value__34941__auto__ = (function (){try{while(true){
var result__34942__auto__ = switch__34939__auto__(state_106016);
if(cljs.core.keyword_identical_QMARK_(result__34942__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34942__auto__;
}
break;
}
}catch (e106654){var ex__34943__auto__ = e106654;
var statearr_106655_109237 = state_106016;
(statearr_106655_109237[(2)] = ex__34943__auto__);


if(cljs.core.seq((state_106016[(4)]))){
var statearr_106656_109238 = state_106016;
(statearr_106656_109238[(1)] = cljs.core.first((state_106016[(4)])));

} else {
throw ex__34943__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34941__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__109239 = state_106016;
state_106016 = G__109239;
continue;
} else {
return ret_value__34941__auto__;
}
break;
}
});
repl_tooling$nrepl$nrepl_test$state_machine__34940__auto__ = function(state_106016){
switch(arguments.length){
case 0:
return repl_tooling$nrepl$nrepl_test$state_machine__34940__auto____0.call(this);
case 1:
return repl_tooling$nrepl$nrepl_test$state_machine__34940__auto____1.call(this,state_106016);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
repl_tooling$nrepl$nrepl_test$state_machine__34940__auto__.cljs$core$IFn$_invoke$arity$0 = repl_tooling$nrepl$nrepl_test$state_machine__34940__auto____0;
repl_tooling$nrepl$nrepl_test$state_machine__34940__auto__.cljs$core$IFn$_invoke$arity$1 = repl_tooling$nrepl$nrepl_test$state_machine__34940__auto____1;
return repl_tooling$nrepl$nrepl_test$state_machine__34940__auto__;
})()
})();
var state__35943__auto__ = (function (){var statearr_106657 = f__35942__auto__();
(statearr_106657[(6)] = c__35941__auto__);

return statearr_106657;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35943__auto__);
}));

return c__35941__auto__;
}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}}));

(repl_tooling.nrepl.nrepl_test.t_repl_tooling$nrepl$nrepl_test104510.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"meta104511","meta104511",2117931582,null)], null);
}));

(repl_tooling.nrepl.nrepl_test.t_repl_tooling$nrepl$nrepl_test104510.cljs$lang$type = true);

(repl_tooling.nrepl.nrepl_test.t_repl_tooling$nrepl$nrepl_test104510.cljs$lang$ctorStr = "repl-tooling.nrepl.nrepl-test/t_repl_tooling$nrepl$nrepl_test104510");

(repl_tooling.nrepl.nrepl_test.t_repl_tooling$nrepl$nrepl_test104510.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"repl-tooling.nrepl.nrepl-test/t_repl_tooling$nrepl$nrepl_test104510");
}));

/**
 * Positional factory function for repl-tooling.nrepl.nrepl-test/t_repl_tooling$nrepl$nrepl_test104510.
 */
repl_tooling.nrepl.nrepl_test.__GT_t_repl_tooling$nrepl$nrepl_test104510 = (function repl_tooling$nrepl$nrepl_test$__GT_t_repl_tooling$nrepl$nrepl_test104510(out__$1,meta104511){
return (new repl_tooling.nrepl.nrepl_test.t_repl_tooling$nrepl$nrepl_test104510(out__$1,meta104511));
});

}

return (new repl_tooling.nrepl.nrepl_test.t_repl_tooling$nrepl$nrepl_test104510(out,null));
});

(repl_tooling.nrepl.nrepl_test.nrepl_connection.cljs$lang$var = new cljs.core.Var(function(){return repl_tooling.nrepl.nrepl_test.nrepl_connection;},new cljs.core.Symbol("repl-tooling.nrepl.nrepl-test","nrepl-connection","repl-tooling.nrepl.nrepl-test/nrepl-connection",-1329749616,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"repl-tooling.nrepl.nrepl-test","repl-tooling.nrepl.nrepl-test",-1432404227,null),new cljs.core.Symbol(null,"nrepl-connection","nrepl-connection",179426719,null),"repl_tooling/nrepl/nrepl_test.cljs",32,1,107,107,cljs.core.List.EMPTY,null,(cljs.core.truth_(repl_tooling.nrepl.nrepl_test.nrepl_connection)?repl_tooling.nrepl.nrepl_test.nrepl_connection.cljs$lang$test:null)])));

//# sourceMappingURL=repl_tooling.nrepl.nrepl_test.js.map
