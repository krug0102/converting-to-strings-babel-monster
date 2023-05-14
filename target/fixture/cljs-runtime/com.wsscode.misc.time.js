goog.provide('com.wsscode.misc.time');
com.wsscode.misc.time.now_ms = (function com$wsscode$misc$time$now_ms(){
return cljs.core.system_time();
});
/**
 * Clojure and Clojurescript solution to hold execution for a given time.
 */
com.wsscode.misc.time.sleep_ms = (function com$wsscode$misc$time$sleep_ms(ms){
var now = cljs.core.system_time();
var continue_at = (now + ms);
while(true){
if((cljs.core.system_time() < continue_at)){
continue;
} else {
return null;
}
break;
}
});

//# sourceMappingURL=com.wsscode.misc.time.js.map
