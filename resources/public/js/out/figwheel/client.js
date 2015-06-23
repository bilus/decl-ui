// Compiled by ClojureScript 0.0-3308 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__24744__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__24744 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24745__i = 0, G__24745__a = new Array(arguments.length -  0);
while (G__24745__i < G__24745__a.length) {G__24745__a[G__24745__i] = arguments[G__24745__i + 0]; ++G__24745__i;}
  args = new cljs.core.IndexedSeq(G__24745__a,0);
} 
return G__24744__delegate.call(this,args);};
G__24744.cljs$lang$maxFixedArity = 0;
G__24744.cljs$lang$applyTo = (function (arglist__24746){
var args = cljs.core.seq(arglist__24746);
return G__24744__delegate(args);
});
G__24744.cljs$core$IFn$_invoke$arity$variadic = G__24744__delegate;
return G__24744;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__24747){
var map__24749 = p__24747;
var map__24749__$1 = ((cljs.core.seq_QMARK_.call(null,map__24749))?cljs.core.apply.call(null,cljs.core.hash_map,map__24749):map__24749);
var message = cljs.core.get.call(null,map__24749__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__24749__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__18087__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__18087__auto__)){
return or__18087__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__18075__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__18075__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__18075__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__21099__auto___24878 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21099__auto___24878,ch){
return (function (){
var f__21100__auto__ = (function (){var switch__21037__auto__ = ((function (c__21099__auto___24878,ch){
return (function (state_24852){
var state_val_24853 = (state_24852[(1)]);
if((state_val_24853 === (7))){
var inst_24848 = (state_24852[(2)]);
var state_24852__$1 = state_24852;
var statearr_24854_24879 = state_24852__$1;
(statearr_24854_24879[(2)] = inst_24848);

(statearr_24854_24879[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24853 === (1))){
var state_24852__$1 = state_24852;
var statearr_24855_24880 = state_24852__$1;
(statearr_24855_24880[(2)] = null);

(statearr_24855_24880[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24853 === (4))){
var inst_24816 = (state_24852[(7)]);
var inst_24816__$1 = (state_24852[(2)]);
var state_24852__$1 = (function (){var statearr_24856 = state_24852;
(statearr_24856[(7)] = inst_24816__$1);

return statearr_24856;
})();
if(cljs.core.truth_(inst_24816__$1)){
var statearr_24857_24881 = state_24852__$1;
(statearr_24857_24881[(1)] = (5));

} else {
var statearr_24858_24882 = state_24852__$1;
(statearr_24858_24882[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24853 === (13))){
var state_24852__$1 = state_24852;
var statearr_24859_24883 = state_24852__$1;
(statearr_24859_24883[(2)] = null);

(statearr_24859_24883[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24853 === (6))){
var state_24852__$1 = state_24852;
var statearr_24860_24884 = state_24852__$1;
(statearr_24860_24884[(2)] = null);

(statearr_24860_24884[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24853 === (3))){
var inst_24850 = (state_24852[(2)]);
var state_24852__$1 = state_24852;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24852__$1,inst_24850);
} else {
if((state_val_24853 === (12))){
var inst_24823 = (state_24852[(8)]);
var inst_24836 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_24823);
var inst_24837 = cljs.core.first.call(null,inst_24836);
var inst_24838 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_24837);
var inst_24839 = console.warn("Figwheel: Not loading code with warnings - ",inst_24838);
var state_24852__$1 = state_24852;
var statearr_24861_24885 = state_24852__$1;
(statearr_24861_24885[(2)] = inst_24839);

(statearr_24861_24885[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24853 === (2))){
var state_24852__$1 = state_24852;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24852__$1,(4),ch);
} else {
if((state_val_24853 === (11))){
var inst_24832 = (state_24852[(2)]);
var state_24852__$1 = state_24852;
var statearr_24862_24886 = state_24852__$1;
(statearr_24862_24886[(2)] = inst_24832);

(statearr_24862_24886[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24853 === (9))){
var inst_24822 = (state_24852[(9)]);
var inst_24834 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_24822,opts);
var state_24852__$1 = state_24852;
if(cljs.core.truth_(inst_24834)){
var statearr_24863_24887 = state_24852__$1;
(statearr_24863_24887[(1)] = (12));

} else {
var statearr_24864_24888 = state_24852__$1;
(statearr_24864_24888[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24853 === (5))){
var inst_24816 = (state_24852[(7)]);
var inst_24822 = (state_24852[(9)]);
var inst_24818 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_24819 = (new cljs.core.PersistentArrayMap(null,2,inst_24818,null));
var inst_24820 = (new cljs.core.PersistentHashSet(null,inst_24819,null));
var inst_24821 = figwheel.client.focus_msgs.call(null,inst_24820,inst_24816);
var inst_24822__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_24821);
var inst_24823 = cljs.core.first.call(null,inst_24821);
var inst_24824 = figwheel.client.reload_file_state_QMARK_.call(null,inst_24822__$1,opts);
var state_24852__$1 = (function (){var statearr_24865 = state_24852;
(statearr_24865[(9)] = inst_24822__$1);

(statearr_24865[(8)] = inst_24823);

return statearr_24865;
})();
if(cljs.core.truth_(inst_24824)){
var statearr_24866_24889 = state_24852__$1;
(statearr_24866_24889[(1)] = (8));

} else {
var statearr_24867_24890 = state_24852__$1;
(statearr_24867_24890[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24853 === (14))){
var inst_24842 = (state_24852[(2)]);
var state_24852__$1 = state_24852;
var statearr_24868_24891 = state_24852__$1;
(statearr_24868_24891[(2)] = inst_24842);

(statearr_24868_24891[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24853 === (10))){
var inst_24844 = (state_24852[(2)]);
var state_24852__$1 = (function (){var statearr_24869 = state_24852;
(statearr_24869[(10)] = inst_24844);

return statearr_24869;
})();
var statearr_24870_24892 = state_24852__$1;
(statearr_24870_24892[(2)] = null);

(statearr_24870_24892[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24853 === (8))){
var inst_24823 = (state_24852[(8)]);
var inst_24826 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24827 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_24823);
var inst_24828 = cljs.core.async.timeout.call(null,(1000));
var inst_24829 = [inst_24827,inst_24828];
var inst_24830 = (new cljs.core.PersistentVector(null,2,(5),inst_24826,inst_24829,null));
var state_24852__$1 = state_24852;
return cljs.core.async.ioc_alts_BANG_.call(null,state_24852__$1,(11),inst_24830);
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
});})(c__21099__auto___24878,ch))
;
return ((function (switch__21037__auto__,c__21099__auto___24878,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__21038__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__21038__auto____0 = (function (){
var statearr_24874 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24874[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__21038__auto__);

(statearr_24874[(1)] = (1));

return statearr_24874;
});
var figwheel$client$file_reloader_plugin_$_state_machine__21038__auto____1 = (function (state_24852){
while(true){
var ret_value__21039__auto__ = (function (){try{while(true){
var result__21040__auto__ = switch__21037__auto__.call(null,state_24852);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21040__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21040__auto__;
}
break;
}
}catch (e24875){if((e24875 instanceof Object)){
var ex__21041__auto__ = e24875;
var statearr_24876_24893 = state_24852;
(statearr_24876_24893[(5)] = ex__21041__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24852);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24875;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21039__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24894 = state_24852;
state_24852 = G__24894;
continue;
} else {
return ret_value__21039__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__21038__auto__ = function(state_24852){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__21038__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__21038__auto____1.call(this,state_24852);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__21038__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__21038__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__21038__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__21038__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__21038__auto__;
})()
;})(switch__21037__auto__,c__21099__auto___24878,ch))
})();
var state__21101__auto__ = (function (){var statearr_24877 = f__21100__auto__.call(null);
(statearr_24877[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21099__auto___24878);

return statearr_24877;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21101__auto__);
});})(c__21099__auto___24878,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__24895_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__24895_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_24902 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_24902){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,result_handler){
try{var _STAR_print_fn_STAR_24900 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_24901 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_24900,_STAR_print_newline_STAR_24901,base_path_24902){
return (function() { 
var G__24903__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__24903 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24904__i = 0, G__24904__a = new Array(arguments.length -  0);
while (G__24904__i < G__24904__a.length) {G__24904__a[G__24904__i] = arguments[G__24904__i + 0]; ++G__24904__i;}
  args = new cljs.core.IndexedSeq(G__24904__a,0);
} 
return G__24903__delegate.call(this,args);};
G__24903.cljs$lang$maxFixedArity = 0;
G__24903.cljs$lang$applyTo = (function (arglist__24905){
var args = cljs.core.seq(arglist__24905);
return G__24903__delegate(args);
});
G__24903.cljs$core$IFn$_invoke$arity$variadic = G__24903__delegate;
return G__24903;
})()
;})(_STAR_print_fn_STAR_24900,_STAR_print_newline_STAR_24901,base_path_24902))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(eval(code))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_24901;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_24900;
}}catch (e24899){if((e24899 instanceof Error)){
var e = e24899;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_24902], null));
} else {
var e = e24899;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_24902))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__24906){
var map__24911 = p__24906;
var map__24911__$1 = ((cljs.core.seq_QMARK_.call(null,map__24911))?cljs.core.apply.call(null,cljs.core.hash_map,map__24911):map__24911);
var opts = map__24911__$1;
var build_id = cljs.core.get.call(null,map__24911__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__24911,map__24911__$1,opts,build_id){
return (function (p__24912){
var vec__24913 = p__24912;
var map__24914 = cljs.core.nth.call(null,vec__24913,(0),null);
var map__24914__$1 = ((cljs.core.seq_QMARK_.call(null,map__24914))?cljs.core.apply.call(null,cljs.core.hash_map,map__24914):map__24914);
var msg = map__24914__$1;
var msg_name = cljs.core.get.call(null,map__24914__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__24913,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),((function (vec__24913,map__24914,map__24914__$1,msg,msg_name,_,map__24911,map__24911__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__24913,map__24914,map__24914__$1,msg,msg_name,_,map__24911,map__24911__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__24911,map__24911__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__24918){
var vec__24919 = p__24918;
var map__24920 = cljs.core.nth.call(null,vec__24919,(0),null);
var map__24920__$1 = ((cljs.core.seq_QMARK_.call(null,map__24920))?cljs.core.apply.call(null,cljs.core.hash_map,map__24920):map__24920);
var msg = map__24920__$1;
var msg_name = cljs.core.get.call(null,map__24920__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__24919,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__24921){
var map__24929 = p__24921;
var map__24929__$1 = ((cljs.core.seq_QMARK_.call(null,map__24929))?cljs.core.apply.call(null,cljs.core.hash_map,map__24929):map__24929);
var on_compile_warning = cljs.core.get.call(null,map__24929__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__24929__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__24929,map__24929__$1,on_compile_warning,on_compile_fail){
return (function (p__24930){
var vec__24931 = p__24930;
var map__24932 = cljs.core.nth.call(null,vec__24931,(0),null);
var map__24932__$1 = ((cljs.core.seq_QMARK_.call(null,map__24932))?cljs.core.apply.call(null,cljs.core.hash_map,map__24932):map__24932);
var msg = map__24932__$1;
var msg_name = cljs.core.get.call(null,map__24932__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__24931,(1));
var pred__24933 = cljs.core._EQ_;
var expr__24934 = msg_name;
if(cljs.core.truth_(pred__24933.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__24934))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__24933.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__24934))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__24929,map__24929__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__21099__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21099__auto__,msg_hist,msg_names,msg){
return (function (){
var f__21100__auto__ = (function (){var switch__21037__auto__ = ((function (c__21099__auto__,msg_hist,msg_names,msg){
return (function (state_25135){
var state_val_25136 = (state_25135[(1)]);
if((state_val_25136 === (7))){
var inst_25069 = (state_25135[(2)]);
var state_25135__$1 = state_25135;
var statearr_25137_25178 = state_25135__$1;
(statearr_25137_25178[(2)] = inst_25069);

(statearr_25137_25178[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25136 === (20))){
var inst_25097 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_25135__$1 = state_25135;
if(cljs.core.truth_(inst_25097)){
var statearr_25138_25179 = state_25135__$1;
(statearr_25138_25179[(1)] = (22));

} else {
var statearr_25139_25180 = state_25135__$1;
(statearr_25139_25180[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25136 === (27))){
var inst_25109 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25110 = figwheel.client.heads_up.display_warning.call(null,inst_25109);
var state_25135__$1 = state_25135;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25135__$1,(30),inst_25110);
} else {
if((state_val_25136 === (1))){
var inst_25057 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_25135__$1 = state_25135;
if(cljs.core.truth_(inst_25057)){
var statearr_25140_25181 = state_25135__$1;
(statearr_25140_25181[(1)] = (2));

} else {
var statearr_25141_25182 = state_25135__$1;
(statearr_25141_25182[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25136 === (24))){
var inst_25125 = (state_25135[(2)]);
var state_25135__$1 = state_25135;
var statearr_25142_25183 = state_25135__$1;
(statearr_25142_25183[(2)] = inst_25125);

(statearr_25142_25183[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25136 === (4))){
var inst_25133 = (state_25135[(2)]);
var state_25135__$1 = state_25135;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25135__$1,inst_25133);
} else {
if((state_val_25136 === (15))){
var inst_25085 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25086 = figwheel.client.format_messages.call(null,inst_25085);
var inst_25087 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25088 = figwheel.client.heads_up.display_error.call(null,inst_25086,inst_25087);
var state_25135__$1 = state_25135;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25135__$1,(18),inst_25088);
} else {
if((state_val_25136 === (21))){
var inst_25127 = (state_25135[(2)]);
var state_25135__$1 = state_25135;
var statearr_25143_25184 = state_25135__$1;
(statearr_25143_25184[(2)] = inst_25127);

(statearr_25143_25184[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25136 === (31))){
var inst_25116 = figwheel.client.heads_up.flash_loaded.call(null);
var state_25135__$1 = state_25135;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25135__$1,(34),inst_25116);
} else {
if((state_val_25136 === (32))){
var state_25135__$1 = state_25135;
var statearr_25144_25185 = state_25135__$1;
(statearr_25144_25185[(2)] = null);

(statearr_25144_25185[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25136 === (33))){
var inst_25121 = (state_25135[(2)]);
var state_25135__$1 = state_25135;
var statearr_25145_25186 = state_25135__$1;
(statearr_25145_25186[(2)] = inst_25121);

(statearr_25145_25186[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25136 === (13))){
var inst_25075 = (state_25135[(2)]);
var inst_25076 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25077 = figwheel.client.format_messages.call(null,inst_25076);
var inst_25078 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25079 = figwheel.client.heads_up.display_error.call(null,inst_25077,inst_25078);
var state_25135__$1 = (function (){var statearr_25146 = state_25135;
(statearr_25146[(7)] = inst_25075);

return statearr_25146;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25135__$1,(14),inst_25079);
} else {
if((state_val_25136 === (22))){
var inst_25099 = figwheel.client.heads_up.clear.call(null);
var state_25135__$1 = state_25135;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25135__$1,(25),inst_25099);
} else {
if((state_val_25136 === (29))){
var inst_25123 = (state_25135[(2)]);
var state_25135__$1 = state_25135;
var statearr_25147_25187 = state_25135__$1;
(statearr_25147_25187[(2)] = inst_25123);

(statearr_25147_25187[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25136 === (6))){
var inst_25065 = figwheel.client.heads_up.clear.call(null);
var state_25135__$1 = state_25135;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25135__$1,(9),inst_25065);
} else {
if((state_val_25136 === (28))){
var inst_25114 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_25135__$1 = state_25135;
if(cljs.core.truth_(inst_25114)){
var statearr_25148_25188 = state_25135__$1;
(statearr_25148_25188[(1)] = (31));

} else {
var statearr_25149_25189 = state_25135__$1;
(statearr_25149_25189[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25136 === (25))){
var inst_25101 = (state_25135[(2)]);
var inst_25102 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25103 = figwheel.client.heads_up.display_warning.call(null,inst_25102);
var state_25135__$1 = (function (){var statearr_25150 = state_25135;
(statearr_25150[(8)] = inst_25101);

return statearr_25150;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25135__$1,(26),inst_25103);
} else {
if((state_val_25136 === (34))){
var inst_25118 = (state_25135[(2)]);
var state_25135__$1 = state_25135;
var statearr_25151_25190 = state_25135__$1;
(statearr_25151_25190[(2)] = inst_25118);

(statearr_25151_25190[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25136 === (17))){
var inst_25129 = (state_25135[(2)]);
var state_25135__$1 = state_25135;
var statearr_25152_25191 = state_25135__$1;
(statearr_25152_25191[(2)] = inst_25129);

(statearr_25152_25191[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25136 === (3))){
var inst_25071 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_25135__$1 = state_25135;
if(cljs.core.truth_(inst_25071)){
var statearr_25153_25192 = state_25135__$1;
(statearr_25153_25192[(1)] = (10));

} else {
var statearr_25154_25193 = state_25135__$1;
(statearr_25154_25193[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25136 === (12))){
var inst_25131 = (state_25135[(2)]);
var state_25135__$1 = state_25135;
var statearr_25155_25194 = state_25135__$1;
(statearr_25155_25194[(2)] = inst_25131);

(statearr_25155_25194[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25136 === (2))){
var inst_25059 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_25135__$1 = state_25135;
if(cljs.core.truth_(inst_25059)){
var statearr_25156_25195 = state_25135__$1;
(statearr_25156_25195[(1)] = (5));

} else {
var statearr_25157_25196 = state_25135__$1;
(statearr_25157_25196[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25136 === (23))){
var inst_25107 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_25135__$1 = state_25135;
if(cljs.core.truth_(inst_25107)){
var statearr_25158_25197 = state_25135__$1;
(statearr_25158_25197[(1)] = (27));

} else {
var statearr_25159_25198 = state_25135__$1;
(statearr_25159_25198[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25136 === (19))){
var inst_25094 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25095 = figwheel.client.heads_up.append_message.call(null,inst_25094);
var state_25135__$1 = state_25135;
var statearr_25160_25199 = state_25135__$1;
(statearr_25160_25199[(2)] = inst_25095);

(statearr_25160_25199[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25136 === (11))){
var inst_25083 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_25135__$1 = state_25135;
if(cljs.core.truth_(inst_25083)){
var statearr_25161_25200 = state_25135__$1;
(statearr_25161_25200[(1)] = (15));

} else {
var statearr_25162_25201 = state_25135__$1;
(statearr_25162_25201[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25136 === (9))){
var inst_25067 = (state_25135[(2)]);
var state_25135__$1 = state_25135;
var statearr_25163_25202 = state_25135__$1;
(statearr_25163_25202[(2)] = inst_25067);

(statearr_25163_25202[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25136 === (5))){
var inst_25061 = figwheel.client.heads_up.flash_loaded.call(null);
var state_25135__$1 = state_25135;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25135__$1,(8),inst_25061);
} else {
if((state_val_25136 === (14))){
var inst_25081 = (state_25135[(2)]);
var state_25135__$1 = state_25135;
var statearr_25164_25203 = state_25135__$1;
(statearr_25164_25203[(2)] = inst_25081);

(statearr_25164_25203[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25136 === (26))){
var inst_25105 = (state_25135[(2)]);
var state_25135__$1 = state_25135;
var statearr_25165_25204 = state_25135__$1;
(statearr_25165_25204[(2)] = inst_25105);

(statearr_25165_25204[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25136 === (16))){
var inst_25092 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_25135__$1 = state_25135;
if(cljs.core.truth_(inst_25092)){
var statearr_25166_25205 = state_25135__$1;
(statearr_25166_25205[(1)] = (19));

} else {
var statearr_25167_25206 = state_25135__$1;
(statearr_25167_25206[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25136 === (30))){
var inst_25112 = (state_25135[(2)]);
var state_25135__$1 = state_25135;
var statearr_25168_25207 = state_25135__$1;
(statearr_25168_25207[(2)] = inst_25112);

(statearr_25168_25207[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25136 === (10))){
var inst_25073 = figwheel.client.heads_up.clear.call(null);
var state_25135__$1 = state_25135;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25135__$1,(13),inst_25073);
} else {
if((state_val_25136 === (18))){
var inst_25090 = (state_25135[(2)]);
var state_25135__$1 = state_25135;
var statearr_25169_25208 = state_25135__$1;
(statearr_25169_25208[(2)] = inst_25090);

(statearr_25169_25208[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25136 === (8))){
var inst_25063 = (state_25135[(2)]);
var state_25135__$1 = state_25135;
var statearr_25170_25209 = state_25135__$1;
(statearr_25170_25209[(2)] = inst_25063);

(statearr_25170_25209[(1)] = (7));


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
});})(c__21099__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__21037__auto__,c__21099__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21038__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21038__auto____0 = (function (){
var statearr_25174 = [null,null,null,null,null,null,null,null,null];
(statearr_25174[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21038__auto__);

(statearr_25174[(1)] = (1));

return statearr_25174;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21038__auto____1 = (function (state_25135){
while(true){
var ret_value__21039__auto__ = (function (){try{while(true){
var result__21040__auto__ = switch__21037__auto__.call(null,state_25135);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21040__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21040__auto__;
}
break;
}
}catch (e25175){if((e25175 instanceof Object)){
var ex__21041__auto__ = e25175;
var statearr_25176_25210 = state_25135;
(statearr_25176_25210[(5)] = ex__21041__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25135);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25175;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21039__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25211 = state_25135;
state_25135 = G__25211;
continue;
} else {
return ret_value__21039__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21038__auto__ = function(state_25135){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21038__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21038__auto____1.call(this,state_25135);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21038__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21038__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21038__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21038__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21038__auto__;
})()
;})(switch__21037__auto__,c__21099__auto__,msg_hist,msg_names,msg))
})();
var state__21101__auto__ = (function (){var statearr_25177 = f__21100__auto__.call(null);
(statearr_25177[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21099__auto__);

return statearr_25177;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21101__auto__);
});})(c__21099__auto__,msg_hist,msg_names,msg))
);

return c__21099__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__21099__auto___25274 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21099__auto___25274,ch){
return (function (){
var f__21100__auto__ = (function (){var switch__21037__auto__ = ((function (c__21099__auto___25274,ch){
return (function (state_25257){
var state_val_25258 = (state_25257[(1)]);
if((state_val_25258 === (1))){
var state_25257__$1 = state_25257;
var statearr_25259_25275 = state_25257__$1;
(statearr_25259_25275[(2)] = null);

(statearr_25259_25275[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25258 === (2))){
var state_25257__$1 = state_25257;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25257__$1,(4),ch);
} else {
if((state_val_25258 === (3))){
var inst_25255 = (state_25257[(2)]);
var state_25257__$1 = state_25257;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25257__$1,inst_25255);
} else {
if((state_val_25258 === (4))){
var inst_25245 = (state_25257[(7)]);
var inst_25245__$1 = (state_25257[(2)]);
var state_25257__$1 = (function (){var statearr_25260 = state_25257;
(statearr_25260[(7)] = inst_25245__$1);

return statearr_25260;
})();
if(cljs.core.truth_(inst_25245__$1)){
var statearr_25261_25276 = state_25257__$1;
(statearr_25261_25276[(1)] = (5));

} else {
var statearr_25262_25277 = state_25257__$1;
(statearr_25262_25277[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25258 === (5))){
var inst_25245 = (state_25257[(7)]);
var inst_25247 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_25245);
var state_25257__$1 = state_25257;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25257__$1,(8),inst_25247);
} else {
if((state_val_25258 === (6))){
var state_25257__$1 = state_25257;
var statearr_25263_25278 = state_25257__$1;
(statearr_25263_25278[(2)] = null);

(statearr_25263_25278[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25258 === (7))){
var inst_25253 = (state_25257[(2)]);
var state_25257__$1 = state_25257;
var statearr_25264_25279 = state_25257__$1;
(statearr_25264_25279[(2)] = inst_25253);

(statearr_25264_25279[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25258 === (8))){
var inst_25249 = (state_25257[(2)]);
var state_25257__$1 = (function (){var statearr_25265 = state_25257;
(statearr_25265[(8)] = inst_25249);

return statearr_25265;
})();
var statearr_25266_25280 = state_25257__$1;
(statearr_25266_25280[(2)] = null);

(statearr_25266_25280[(1)] = (2));


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
});})(c__21099__auto___25274,ch))
;
return ((function (switch__21037__auto__,c__21099__auto___25274,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__21038__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__21038__auto____0 = (function (){
var statearr_25270 = [null,null,null,null,null,null,null,null,null];
(statearr_25270[(0)] = figwheel$client$heads_up_plugin_$_state_machine__21038__auto__);

(statearr_25270[(1)] = (1));

return statearr_25270;
});
var figwheel$client$heads_up_plugin_$_state_machine__21038__auto____1 = (function (state_25257){
while(true){
var ret_value__21039__auto__ = (function (){try{while(true){
var result__21040__auto__ = switch__21037__auto__.call(null,state_25257);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21040__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21040__auto__;
}
break;
}
}catch (e25271){if((e25271 instanceof Object)){
var ex__21041__auto__ = e25271;
var statearr_25272_25281 = state_25257;
(statearr_25272_25281[(5)] = ex__21041__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25257);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25271;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21039__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25282 = state_25257;
state_25257 = G__25282;
continue;
} else {
return ret_value__21039__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__21038__auto__ = function(state_25257){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__21038__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__21038__auto____1.call(this,state_25257);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__21038__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__21038__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__21038__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__21038__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__21038__auto__;
})()
;})(switch__21037__auto__,c__21099__auto___25274,ch))
})();
var state__21101__auto__ = (function (){var statearr_25273 = f__21100__auto__.call(null);
(statearr_25273[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21099__auto___25274);

return statearr_25273;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21101__auto__);
});})(c__21099__auto___25274,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__21099__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21099__auto__){
return (function (){
var f__21100__auto__ = (function (){var switch__21037__auto__ = ((function (c__21099__auto__){
return (function (state_25303){
var state_val_25304 = (state_25303[(1)]);
if((state_val_25304 === (1))){
var inst_25298 = cljs.core.async.timeout.call(null,(3000));
var state_25303__$1 = state_25303;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25303__$1,(2),inst_25298);
} else {
if((state_val_25304 === (2))){
var inst_25300 = (state_25303[(2)]);
var inst_25301 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_25303__$1 = (function (){var statearr_25305 = state_25303;
(statearr_25305[(7)] = inst_25300);

return statearr_25305;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25303__$1,inst_25301);
} else {
return null;
}
}
});})(c__21099__auto__))
;
return ((function (switch__21037__auto__,c__21099__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__21038__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__21038__auto____0 = (function (){
var statearr_25309 = [null,null,null,null,null,null,null,null];
(statearr_25309[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__21038__auto__);

(statearr_25309[(1)] = (1));

return statearr_25309;
});
var figwheel$client$enforce_project_plugin_$_state_machine__21038__auto____1 = (function (state_25303){
while(true){
var ret_value__21039__auto__ = (function (){try{while(true){
var result__21040__auto__ = switch__21037__auto__.call(null,state_25303);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21040__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21040__auto__;
}
break;
}
}catch (e25310){if((e25310 instanceof Object)){
var ex__21041__auto__ = e25310;
var statearr_25311_25313 = state_25303;
(statearr_25311_25313[(5)] = ex__21041__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25303);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25310;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21039__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25314 = state_25303;
state_25303 = G__25314;
continue;
} else {
return ret_value__21039__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__21038__auto__ = function(state_25303){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__21038__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__21038__auto____1.call(this,state_25303);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__21038__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__21038__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__21038__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__21038__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__21038__auto__;
})()
;})(switch__21037__auto__,c__21099__auto__))
})();
var state__21101__auto__ = (function (){var statearr_25312 = f__21100__auto__.call(null);
(statearr_25312[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21099__auto__);

return statearr_25312;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21101__auto__);
});})(c__21099__auto__))
);

return c__21099__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__25315){
var map__25321 = p__25315;
var map__25321__$1 = ((cljs.core.seq_QMARK_.call(null,map__25321))?cljs.core.apply.call(null,cljs.core.hash_map,map__25321):map__25321);
var ed = map__25321__$1;
var formatted_exception = cljs.core.get.call(null,map__25321__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__25321__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__25321__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__25322_25326 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__25323_25327 = null;
var count__25324_25328 = (0);
var i__25325_25329 = (0);
while(true){
if((i__25325_25329 < count__25324_25328)){
var msg_25330 = cljs.core._nth.call(null,chunk__25323_25327,i__25325_25329);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_25330);

var G__25331 = seq__25322_25326;
var G__25332 = chunk__25323_25327;
var G__25333 = count__25324_25328;
var G__25334 = (i__25325_25329 + (1));
seq__25322_25326 = G__25331;
chunk__25323_25327 = G__25332;
count__25324_25328 = G__25333;
i__25325_25329 = G__25334;
continue;
} else {
var temp__4423__auto___25335 = cljs.core.seq.call(null,seq__25322_25326);
if(temp__4423__auto___25335){
var seq__25322_25336__$1 = temp__4423__auto___25335;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25322_25336__$1)){
var c__18872__auto___25337 = cljs.core.chunk_first.call(null,seq__25322_25336__$1);
var G__25338 = cljs.core.chunk_rest.call(null,seq__25322_25336__$1);
var G__25339 = c__18872__auto___25337;
var G__25340 = cljs.core.count.call(null,c__18872__auto___25337);
var G__25341 = (0);
seq__25322_25326 = G__25338;
chunk__25323_25327 = G__25339;
count__25324_25328 = G__25340;
i__25325_25329 = G__25341;
continue;
} else {
var msg_25342 = cljs.core.first.call(null,seq__25322_25336__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_25342);

var G__25343 = cljs.core.next.call(null,seq__25322_25336__$1);
var G__25344 = null;
var G__25345 = (0);
var G__25346 = (0);
seq__25322_25326 = G__25343;
chunk__25323_25327 = G__25344;
count__25324_25328 = G__25345;
i__25325_25329 = G__25346;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__25347){
var map__25349 = p__25347;
var map__25349__$1 = ((cljs.core.seq_QMARK_.call(null,map__25349))?cljs.core.apply.call(null,cljs.core.hash_map,map__25349):map__25349);
var w = map__25349__$1;
var message = cljs.core.get.call(null,map__25349__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704),new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[true,figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,(100),true,false,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__18075__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__18075__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__18075__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__25356 = cljs.core.seq.call(null,plugins);
var chunk__25357 = null;
var count__25358 = (0);
var i__25359 = (0);
while(true){
if((i__25359 < count__25358)){
var vec__25360 = cljs.core._nth.call(null,chunk__25357,i__25359);
var k = cljs.core.nth.call(null,vec__25360,(0),null);
var plugin = cljs.core.nth.call(null,vec__25360,(1),null);
if(cljs.core.truth_(plugin)){
var pl_25362 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__25356,chunk__25357,count__25358,i__25359,pl_25362,vec__25360,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_25362.call(null,msg_hist);
});})(seq__25356,chunk__25357,count__25358,i__25359,pl_25362,vec__25360,k,plugin))
);
} else {
}

var G__25363 = seq__25356;
var G__25364 = chunk__25357;
var G__25365 = count__25358;
var G__25366 = (i__25359 + (1));
seq__25356 = G__25363;
chunk__25357 = G__25364;
count__25358 = G__25365;
i__25359 = G__25366;
continue;
} else {
var temp__4423__auto__ = cljs.core.seq.call(null,seq__25356);
if(temp__4423__auto__){
var seq__25356__$1 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25356__$1)){
var c__18872__auto__ = cljs.core.chunk_first.call(null,seq__25356__$1);
var G__25367 = cljs.core.chunk_rest.call(null,seq__25356__$1);
var G__25368 = c__18872__auto__;
var G__25369 = cljs.core.count.call(null,c__18872__auto__);
var G__25370 = (0);
seq__25356 = G__25367;
chunk__25357 = G__25368;
count__25358 = G__25369;
i__25359 = G__25370;
continue;
} else {
var vec__25361 = cljs.core.first.call(null,seq__25356__$1);
var k = cljs.core.nth.call(null,vec__25361,(0),null);
var plugin = cljs.core.nth.call(null,vec__25361,(1),null);
if(cljs.core.truth_(plugin)){
var pl_25371 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__25356,chunk__25357,count__25358,i__25359,pl_25371,vec__25361,k,plugin,seq__25356__$1,temp__4423__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_25371.call(null,msg_hist);
});})(seq__25356,chunk__25357,count__25358,i__25359,pl_25371,vec__25361,k,plugin,seq__25356__$1,temp__4423__auto__))
);
} else {
}

var G__25372 = cljs.core.next.call(null,seq__25356__$1);
var G__25373 = null;
var G__25374 = (0);
var G__25375 = (0);
seq__25356 = G__25372;
chunk__25357 = G__25373;
count__25358 = G__25374;
i__25359 = G__25375;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(){
var G__25377 = arguments.length;
switch (G__25377) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(){
var argseq__19127__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__19127__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__25380){
var map__25381 = p__25380;
var map__25381__$1 = ((cljs.core.seq_QMARK_.call(null,map__25381))?cljs.core.apply.call(null,cljs.core.hash_map,map__25381):map__25381);
var opts = map__25381__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq25379){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25379));
});

//# sourceMappingURL=client.js.map