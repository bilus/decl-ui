// Compiled by ClojureScript 0.0-3308 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');

figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.all_QMARK_ = (function figwheel$client$file_reloading$all_QMARK_(pred,coll){
return cljs.core.reduce.call(null,(function (p1__25799_SHARP_,p2__25800_SHARP_){
var and__18075__auto__ = p1__25799_SHARP_;
if(cljs.core.truth_(and__18075__auto__)){
return p2__25800_SHARP_;
} else {
return and__18075__auto__;
}
}),true,cljs.core.map.call(null,pred,coll));
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__18087__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__18087__auto__){
return or__18087__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.ns_to_js_file = (function figwheel$client$file_reloading$ns_to_js_file(ns){

return [cljs.core.str(clojure.string.replace.call(null,ns,".","/")),cljs.core.str(".js")].join('');
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){

return [cljs.core.str(figwheel.client.utils.base_url_path.call(null)),cljs.core.str(figwheel.client.file_reloading.ns_to_js_file.call(null,ns))].join('');
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
goog.isProvided = (function (x){
return false;
});

if(((cljs.core._STAR_loaded_libs_STAR_ == null)) || (cljs.core.empty_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_))){
cljs.core._STAR_loaded_libs_STAR_ = (function (){var gntp = goog.dependencies_.nameToPath;
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,((function (gntp){
return (function (name){
return (goog.dependencies_.visited[(gntp[name])]);
});})(gntp))
,cljs.core.js_keys.call(null,gntp)));
})();
} else {
}

goog.require = (function (name,reload){
if(cljs.core.truth_((function (){var or__18087__auto__ = !(cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,name));
if(or__18087__auto__){
return or__18087__auto__;
} else {
return reload;
}
})())){
cljs.core._STAR_loaded_libs_STAR_ = cljs.core.conj.call(null,(function (){var or__18087__auto__ = cljs.core._STAR_loaded_libs_STAR_;
if(cljs.core.truth_(or__18087__auto__)){
return or__18087__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),name);

return figwheel.client.file_reloading.reload_file_STAR_.call(null,figwheel.client.file_reloading.resolve_ns.call(null,name));
} else {
return null;
}
});

goog.provide = goog.exportPath_;

return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.reload_file_STAR_;
});
if(typeof figwheel.client.file_reloading.resolve_url !== 'undefined'){
} else {
figwheel.client.file_reloading.resolve_url = (function (){var method_table__18982__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__18983__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__18984__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__18985__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__18986__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","resolve-url"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__18986__auto__,method_table__18982__auto__,prefer_table__18983__auto__,method_cache__18984__auto__,cached_hierarchy__18985__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__25801){
var map__25802 = p__25801;
var map__25802__$1 = ((cljs.core.seq_QMARK_.call(null,map__25802))?cljs.core.apply.call(null,cljs.core.hash_map,map__25802):map__25802);
var file = cljs.core.get.call(null,map__25802__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__25803){
var map__25804 = p__25803;
var map__25804__$1 = ((cljs.core.seq_QMARK_.call(null,map__25804))?cljs.core.apply.call(null,cljs.core.hash_map,map__25804):map__25804);
var namespace = cljs.core.get.call(null,map__25804__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

return figwheel.client.file_reloading.resolve_ns.call(null,namespace);
}));
if(typeof figwheel.client.file_reloading.reload_base !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_base = (function (){var method_table__18982__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__18983__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__18984__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__18985__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__18986__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","reload-base"),figwheel.client.utils.host_env_QMARK_,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__18986__auto__,method_table__18982__auto__,prefer_table__18983__auto__,method_cache__18984__auto__,cached_hierarchy__18985__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"node","node",581201198),(function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(request_url)].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e25805){if((e25805 instanceof Error)){
var e = e25805;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e25805;

}
}})());
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"html","html",-998796897),(function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred))
);

return deferred.addErrback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred))
);
}));
figwheel.client.file_reloading.reload_file_STAR_ = (function figwheel$client$file_reloading$reload_file_STAR_(){
var G__25807 = arguments.length;
switch (G__25807) {
case 2:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (request_url,callback){
return figwheel.client.file_reloading.reload_base.call(null,request_url,callback);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (request_url){
return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,cljs.core.identity);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__25809,callback){
var map__25811 = p__25809;
var map__25811__$1 = ((cljs.core.seq_QMARK_.call(null,map__25811))?cljs.core.apply.call(null,cljs.core.hash_map,map__25811):map__25811);
var file_msg = map__25811__$1;
var request_url = cljs.core.get.call(null,map__25811__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__25811,map__25811__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__25811,map__25811__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__25812){
var map__25814 = p__25812;
var map__25814__$1 = ((cljs.core.seq_QMARK_.call(null,map__25814))?cljs.core.apply.call(null,cljs.core.hash_map,map__25814):map__25814);
var file_msg = map__25814__$1;
var namespace = cljs.core.get.call(null,map__25814__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,map__25814__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));

var meta_data__$1 = (function (){var or__18087__auto__ = meta_data;
if(cljs.core.truth_(or__18087__auto__)){
return or__18087__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var and__18075__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data__$1));
if(and__18075__auto__){
var or__18087__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__18087__auto__)){
return or__18087__auto__;
} else {
var or__18087__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__18087__auto____$1)){
return or__18087__auto____$1;
} else {
var and__18075__auto____$1 = cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,namespace);
if(and__18075__auto____$1){
var or__18087__auto____$2 = !(cljs.core.contains_QMARK_.call(null,meta_data__$1,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932)));
if(or__18087__auto____$2){
return or__18087__auto____$2;
} else {
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
}
} else {
return and__18075__auto____$1;
}
}
}
} else {
return and__18075__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__25815,callback){
var map__25817 = p__25815;
var map__25817__$1 = ((cljs.core.seq_QMARK_.call(null,map__25817))?cljs.core.apply.call(null,cljs.core.hash_map,map__25817):map__25817);
var file_msg = map__25817__$1;
var request_url = cljs.core.get.call(null,map__25817__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__25817__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.reload_file.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
setTimeout(((function (out){
return (function (){
return figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
figwheel.client.file_reloading.patch_goog_base.call(null);

cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
});})(out))
,(0));

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__21099__auto___25904 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21099__auto___25904,out){
return (function (){
var f__21100__auto__ = (function (){var switch__21037__auto__ = ((function (c__21099__auto___25904,out){
return (function (state_25886){
var state_val_25887 = (state_25886[(1)]);
if((state_val_25887 === (1))){
var inst_25864 = cljs.core.nth.call(null,files,(0),null);
var inst_25865 = cljs.core.nthnext.call(null,files,(1));
var inst_25866 = files;
var state_25886__$1 = (function (){var statearr_25888 = state_25886;
(statearr_25888[(7)] = inst_25866);

(statearr_25888[(8)] = inst_25865);

(statearr_25888[(9)] = inst_25864);

return statearr_25888;
})();
var statearr_25889_25905 = state_25886__$1;
(statearr_25889_25905[(2)] = null);

(statearr_25889_25905[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25887 === (2))){
var inst_25866 = (state_25886[(7)]);
var inst_25869 = (state_25886[(10)]);
var inst_25869__$1 = cljs.core.nth.call(null,inst_25866,(0),null);
var inst_25870 = cljs.core.nthnext.call(null,inst_25866,(1));
var inst_25871 = (inst_25869__$1 == null);
var inst_25872 = cljs.core.not.call(null,inst_25871);
var state_25886__$1 = (function (){var statearr_25890 = state_25886;
(statearr_25890[(10)] = inst_25869__$1);

(statearr_25890[(11)] = inst_25870);

return statearr_25890;
})();
if(inst_25872){
var statearr_25891_25906 = state_25886__$1;
(statearr_25891_25906[(1)] = (4));

} else {
var statearr_25892_25907 = state_25886__$1;
(statearr_25892_25907[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25887 === (3))){
var inst_25884 = (state_25886[(2)]);
var state_25886__$1 = state_25886;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25886__$1,inst_25884);
} else {
if((state_val_25887 === (4))){
var inst_25869 = (state_25886[(10)]);
var inst_25874 = figwheel.client.file_reloading.reload_js_file.call(null,inst_25869);
var state_25886__$1 = state_25886;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25886__$1,(7),inst_25874);
} else {
if((state_val_25887 === (5))){
var inst_25880 = cljs.core.async.close_BANG_.call(null,out);
var state_25886__$1 = state_25886;
var statearr_25893_25908 = state_25886__$1;
(statearr_25893_25908[(2)] = inst_25880);

(statearr_25893_25908[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25887 === (6))){
var inst_25882 = (state_25886[(2)]);
var state_25886__$1 = state_25886;
var statearr_25894_25909 = state_25886__$1;
(statearr_25894_25909[(2)] = inst_25882);

(statearr_25894_25909[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25887 === (7))){
var inst_25870 = (state_25886[(11)]);
var inst_25876 = (state_25886[(2)]);
var inst_25877 = cljs.core.async.put_BANG_.call(null,out,inst_25876);
var inst_25866 = inst_25870;
var state_25886__$1 = (function (){var statearr_25895 = state_25886;
(statearr_25895[(7)] = inst_25866);

(statearr_25895[(12)] = inst_25877);

return statearr_25895;
})();
var statearr_25896_25910 = state_25886__$1;
(statearr_25896_25910[(2)] = null);

(statearr_25896_25910[(1)] = (2));


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
});})(c__21099__auto___25904,out))
;
return ((function (switch__21037__auto__,c__21099__auto___25904,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21038__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21038__auto____0 = (function (){
var statearr_25900 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25900[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21038__auto__);

(statearr_25900[(1)] = (1));

return statearr_25900;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21038__auto____1 = (function (state_25886){
while(true){
var ret_value__21039__auto__ = (function (){try{while(true){
var result__21040__auto__ = switch__21037__auto__.call(null,state_25886);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21040__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21040__auto__;
}
break;
}
}catch (e25901){if((e25901 instanceof Object)){
var ex__21041__auto__ = e25901;
var statearr_25902_25911 = state_25886;
(statearr_25902_25911[(5)] = ex__21041__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25886);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25901;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21039__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25912 = state_25886;
state_25886 = G__25912;
continue;
} else {
return ret_value__21039__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21038__auto__ = function(state_25886){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21038__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21038__auto____1.call(this,state_25886);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21038__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21038__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21038__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21038__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21038__auto__;
})()
;})(switch__21037__auto__,c__21099__auto___25904,out))
})();
var state__21101__auto__ = (function (){var statearr_25903 = f__21100__auto__.call(null);
(statearr_25903[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21099__auto___25904);

return statearr_25903;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21101__auto__);
});})(c__21099__auto___25904,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function figwheel$client$file_reloading$add_request_url(p__25913,p__25914){
var map__25917 = p__25913;
var map__25917__$1 = ((cljs.core.seq_QMARK_.call(null,map__25917))?cljs.core.apply.call(null,cljs.core.hash_map,map__25917):map__25917);
var opts = map__25917__$1;
var url_rewriter = cljs.core.get.call(null,map__25917__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__25918 = p__25914;
var map__25918__$1 = ((cljs.core.seq_QMARK_.call(null,map__25918))?cljs.core.apply.call(null,cljs.core.hash_map,map__25918):map__25918);
var file_msg = map__25918__$1;
var file = cljs.core.get.call(null,map__25918__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function figwheel$client$file_reloading$add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__25919){
var map__25922 = p__25919;
var map__25922__$1 = ((cljs.core.seq_QMARK_.call(null,map__25922))?cljs.core.apply.call(null,cljs.core.hash_map,map__25922):map__25922);
var eval_body__$1 = cljs.core.get.call(null,map__25922__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__25922__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__18075__auto__ = eval_body__$1;
if(cljs.core.truth_(and__18075__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__18075__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return eval(code);
}catch (e25923){var e = e25923;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__25928,p__25929){
var map__26131 = p__25928;
var map__26131__$1 = ((cljs.core.seq_QMARK_.call(null,map__26131))?cljs.core.apply.call(null,cljs.core.hash_map,map__26131):map__26131);
var opts = map__26131__$1;
var before_jsload = cljs.core.get.call(null,map__26131__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__26131__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var load_unchanged_files = cljs.core.get.call(null,map__26131__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var map__26132 = p__25929;
var map__26132__$1 = ((cljs.core.seq_QMARK_.call(null,map__26132))?cljs.core.apply.call(null,cljs.core.hash_map,map__26132):map__26132);
var msg = map__26132__$1;
var files = cljs.core.get.call(null,map__26132__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__21099__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21099__auto__,map__26131,map__26131__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__26132,map__26132__$1,msg,files){
return (function (){
var f__21100__auto__ = (function (){var switch__21037__auto__ = ((function (c__21099__auto__,map__26131,map__26131__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__26132,map__26132__$1,msg,files){
return (function (state_26257){
var state_val_26258 = (state_26257[(1)]);
if((state_val_26258 === (7))){
var inst_26147 = (state_26257[(7)]);
var inst_26146 = (state_26257[(8)]);
var inst_26145 = (state_26257[(9)]);
var inst_26144 = (state_26257[(10)]);
var inst_26152 = cljs.core._nth.call(null,inst_26145,inst_26147);
var inst_26153 = figwheel.client.file_reloading.eval_body.call(null,inst_26152);
var inst_26154 = (inst_26147 + (1));
var tmp26259 = inst_26146;
var tmp26260 = inst_26145;
var tmp26261 = inst_26144;
var inst_26144__$1 = tmp26261;
var inst_26145__$1 = tmp26260;
var inst_26146__$1 = tmp26259;
var inst_26147__$1 = inst_26154;
var state_26257__$1 = (function (){var statearr_26262 = state_26257;
(statearr_26262[(7)] = inst_26147__$1);

(statearr_26262[(8)] = inst_26146__$1);

(statearr_26262[(11)] = inst_26153);

(statearr_26262[(9)] = inst_26145__$1);

(statearr_26262[(10)] = inst_26144__$1);

return statearr_26262;
})();
var statearr_26263_26332 = state_26257__$1;
(statearr_26263_26332[(2)] = null);

(statearr_26263_26332[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26258 === (20))){
var inst_26190 = (state_26257[(12)]);
var inst_26193 = (state_26257[(13)]);
var inst_26189 = (state_26257[(14)]);
var inst_26194 = (state_26257[(15)]);
var inst_26196 = (state_26257[(16)]);
var inst_26199 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_26201 = (function (){var all_files = inst_26189;
var files_SINGLEQUOTE_ = inst_26190;
var res_SINGLEQUOTE_ = inst_26193;
var res = inst_26194;
var files_not_loaded = inst_26196;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_26190,inst_26193,inst_26189,inst_26194,inst_26196,inst_26199,state_val_26258,c__21099__auto__,map__26131,map__26131__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__26132,map__26132__$1,msg,files){
return (function (p__26200){
var map__26264 = p__26200;
var map__26264__$1 = ((cljs.core.seq_QMARK_.call(null,map__26264))?cljs.core.apply.call(null,cljs.core.hash_map,map__26264):map__26264);
var namespace = cljs.core.get.call(null,map__26264__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__26264__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_26190,inst_26193,inst_26189,inst_26194,inst_26196,inst_26199,state_val_26258,c__21099__auto__,map__26131,map__26131__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__26132,map__26132__$1,msg,files))
})();
var inst_26202 = cljs.core.map.call(null,inst_26201,inst_26194);
var inst_26203 = cljs.core.pr_str.call(null,inst_26202);
var inst_26204 = figwheel.client.utils.log.call(null,inst_26203);
var inst_26205 = (function (){var all_files = inst_26189;
var files_SINGLEQUOTE_ = inst_26190;
var res_SINGLEQUOTE_ = inst_26193;
var res = inst_26194;
var files_not_loaded = inst_26196;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_26190,inst_26193,inst_26189,inst_26194,inst_26196,inst_26199,inst_26201,inst_26202,inst_26203,inst_26204,state_val_26258,c__21099__auto__,map__26131,map__26131__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__26132,map__26132__$1,msg,files){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_26190,inst_26193,inst_26189,inst_26194,inst_26196,inst_26199,inst_26201,inst_26202,inst_26203,inst_26204,state_val_26258,c__21099__auto__,map__26131,map__26131__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__26132,map__26132__$1,msg,files))
})();
var inst_26206 = setTimeout(inst_26205,(10));
var state_26257__$1 = (function (){var statearr_26265 = state_26257;
(statearr_26265[(17)] = inst_26204);

(statearr_26265[(18)] = inst_26199);

return statearr_26265;
})();
var statearr_26266_26333 = state_26257__$1;
(statearr_26266_26333[(2)] = inst_26206);

(statearr_26266_26333[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26258 === (27))){
var inst_26216 = (state_26257[(19)]);
var state_26257__$1 = state_26257;
var statearr_26267_26334 = state_26257__$1;
(statearr_26267_26334[(2)] = inst_26216);

(statearr_26267_26334[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26258 === (1))){
var inst_26136 = (state_26257[(20)]);
var inst_26133 = before_jsload.call(null,files);
var inst_26134 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_26135 = (function (){return ((function (inst_26136,inst_26133,inst_26134,state_val_26258,c__21099__auto__,map__26131,map__26131__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__26132,map__26132__$1,msg,files){
return (function (p1__25924_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__25924_SHARP_);
});
;})(inst_26136,inst_26133,inst_26134,state_val_26258,c__21099__auto__,map__26131,map__26131__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__26132,map__26132__$1,msg,files))
})();
var inst_26136__$1 = cljs.core.filter.call(null,inst_26135,files);
var inst_26137 = cljs.core.not_empty.call(null,inst_26136__$1);
var state_26257__$1 = (function (){var statearr_26268 = state_26257;
(statearr_26268[(21)] = inst_26133);

(statearr_26268[(22)] = inst_26134);

(statearr_26268[(20)] = inst_26136__$1);

return statearr_26268;
})();
if(cljs.core.truth_(inst_26137)){
var statearr_26269_26335 = state_26257__$1;
(statearr_26269_26335[(1)] = (2));

} else {
var statearr_26270_26336 = state_26257__$1;
(statearr_26270_26336[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26258 === (24))){
var state_26257__$1 = state_26257;
var statearr_26271_26337 = state_26257__$1;
(statearr_26271_26337[(2)] = null);

(statearr_26271_26337[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26258 === (4))){
var inst_26181 = (state_26257[(2)]);
var inst_26182 = (function (){return ((function (inst_26181,state_val_26258,c__21099__auto__,map__26131,map__26131__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__26132,map__26132__$1,msg,files){
return (function (p1__25925_SHARP_){
var and__18075__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__25925_SHARP_);
if(cljs.core.truth_(and__18075__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__25925_SHARP_));
} else {
return and__18075__auto__;
}
});
;})(inst_26181,state_val_26258,c__21099__auto__,map__26131,map__26131__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__26132,map__26132__$1,msg,files))
})();
var inst_26183 = cljs.core.filter.call(null,inst_26182,files);
var state_26257__$1 = (function (){var statearr_26272 = state_26257;
(statearr_26272[(23)] = inst_26183);

(statearr_26272[(24)] = inst_26181);

return statearr_26272;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_26273_26338 = state_26257__$1;
(statearr_26273_26338[(1)] = (16));

} else {
var statearr_26274_26339 = state_26257__$1;
(statearr_26274_26339[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26258 === (15))){
var inst_26171 = (state_26257[(2)]);
var state_26257__$1 = state_26257;
var statearr_26275_26340 = state_26257__$1;
(statearr_26275_26340[(2)] = inst_26171);

(statearr_26275_26340[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26258 === (21))){
var state_26257__$1 = state_26257;
var statearr_26276_26341 = state_26257__$1;
(statearr_26276_26341[(2)] = null);

(statearr_26276_26341[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26258 === (31))){
var inst_26224 = (state_26257[(25)]);
var inst_26234 = (state_26257[(2)]);
var inst_26235 = cljs.core.not_empty.call(null,inst_26224);
var state_26257__$1 = (function (){var statearr_26277 = state_26257;
(statearr_26277[(26)] = inst_26234);

return statearr_26277;
})();
if(cljs.core.truth_(inst_26235)){
var statearr_26278_26342 = state_26257__$1;
(statearr_26278_26342[(1)] = (32));

} else {
var statearr_26279_26343 = state_26257__$1;
(statearr_26279_26343[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26258 === (32))){
var inst_26224 = (state_26257[(25)]);
var inst_26237 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_26224);
var inst_26238 = cljs.core.pr_str.call(null,inst_26237);
var inst_26239 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_26238)].join('');
var inst_26240 = figwheel.client.utils.log.call(null,inst_26239);
var state_26257__$1 = state_26257;
var statearr_26280_26344 = state_26257__$1;
(statearr_26280_26344[(2)] = inst_26240);

(statearr_26280_26344[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26258 === (33))){
var state_26257__$1 = state_26257;
var statearr_26281_26345 = state_26257__$1;
(statearr_26281_26345[(2)] = null);

(statearr_26281_26345[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26258 === (13))){
var inst_26157 = (state_26257[(27)]);
var inst_26161 = cljs.core.chunk_first.call(null,inst_26157);
var inst_26162 = cljs.core.chunk_rest.call(null,inst_26157);
var inst_26163 = cljs.core.count.call(null,inst_26161);
var inst_26144 = inst_26162;
var inst_26145 = inst_26161;
var inst_26146 = inst_26163;
var inst_26147 = (0);
var state_26257__$1 = (function (){var statearr_26282 = state_26257;
(statearr_26282[(7)] = inst_26147);

(statearr_26282[(8)] = inst_26146);

(statearr_26282[(9)] = inst_26145);

(statearr_26282[(10)] = inst_26144);

return statearr_26282;
})();
var statearr_26283_26346 = state_26257__$1;
(statearr_26283_26346[(2)] = null);

(statearr_26283_26346[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26258 === (22))){
var inst_26196 = (state_26257[(16)]);
var inst_26209 = (state_26257[(2)]);
var inst_26210 = cljs.core.not_empty.call(null,inst_26196);
var state_26257__$1 = (function (){var statearr_26284 = state_26257;
(statearr_26284[(28)] = inst_26209);

return statearr_26284;
})();
if(cljs.core.truth_(inst_26210)){
var statearr_26285_26347 = state_26257__$1;
(statearr_26285_26347[(1)] = (23));

} else {
var statearr_26286_26348 = state_26257__$1;
(statearr_26286_26348[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26258 === (36))){
var state_26257__$1 = state_26257;
var statearr_26287_26349 = state_26257__$1;
(statearr_26287_26349[(2)] = null);

(statearr_26287_26349[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26258 === (29))){
var inst_26223 = (state_26257[(29)]);
var inst_26228 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_26223);
var inst_26229 = cljs.core.pr_str.call(null,inst_26228);
var inst_26230 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_26229)].join('');
var inst_26231 = figwheel.client.utils.log.call(null,inst_26230);
var state_26257__$1 = state_26257;
var statearr_26288_26350 = state_26257__$1;
(statearr_26288_26350[(2)] = inst_26231);

(statearr_26288_26350[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26258 === (6))){
var inst_26178 = (state_26257[(2)]);
var state_26257__$1 = state_26257;
var statearr_26289_26351 = state_26257__$1;
(statearr_26289_26351[(2)] = inst_26178);

(statearr_26289_26351[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26258 === (28))){
var inst_26223 = (state_26257[(29)]);
var inst_26222 = (state_26257[(2)]);
var inst_26223__$1 = cljs.core.get.call(null,inst_26222,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_26224 = cljs.core.get.call(null,inst_26222,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_26225 = cljs.core.get.call(null,inst_26222,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_26226 = cljs.core.not_empty.call(null,inst_26223__$1);
var state_26257__$1 = (function (){var statearr_26290 = state_26257;
(statearr_26290[(29)] = inst_26223__$1);

(statearr_26290[(30)] = inst_26225);

(statearr_26290[(25)] = inst_26224);

return statearr_26290;
})();
if(cljs.core.truth_(inst_26226)){
var statearr_26291_26352 = state_26257__$1;
(statearr_26291_26352[(1)] = (29));

} else {
var statearr_26292_26353 = state_26257__$1;
(statearr_26292_26353[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26258 === (25))){
var inst_26255 = (state_26257[(2)]);
var state_26257__$1 = state_26257;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26257__$1,inst_26255);
} else {
if((state_val_26258 === (34))){
var inst_26225 = (state_26257[(30)]);
var inst_26243 = (state_26257[(2)]);
var inst_26244 = cljs.core.not_empty.call(null,inst_26225);
var state_26257__$1 = (function (){var statearr_26293 = state_26257;
(statearr_26293[(31)] = inst_26243);

return statearr_26293;
})();
if(cljs.core.truth_(inst_26244)){
var statearr_26294_26354 = state_26257__$1;
(statearr_26294_26354[(1)] = (35));

} else {
var statearr_26295_26355 = state_26257__$1;
(statearr_26295_26355[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26258 === (17))){
var inst_26183 = (state_26257[(23)]);
var state_26257__$1 = state_26257;
var statearr_26296_26356 = state_26257__$1;
(statearr_26296_26356[(2)] = inst_26183);

(statearr_26296_26356[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26258 === (3))){
var state_26257__$1 = state_26257;
var statearr_26297_26357 = state_26257__$1;
(statearr_26297_26357[(2)] = null);

(statearr_26297_26357[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26258 === (12))){
var inst_26174 = (state_26257[(2)]);
var state_26257__$1 = state_26257;
var statearr_26298_26358 = state_26257__$1;
(statearr_26298_26358[(2)] = inst_26174);

(statearr_26298_26358[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26258 === (2))){
var inst_26136 = (state_26257[(20)]);
var inst_26143 = cljs.core.seq.call(null,inst_26136);
var inst_26144 = inst_26143;
var inst_26145 = null;
var inst_26146 = (0);
var inst_26147 = (0);
var state_26257__$1 = (function (){var statearr_26299 = state_26257;
(statearr_26299[(7)] = inst_26147);

(statearr_26299[(8)] = inst_26146);

(statearr_26299[(9)] = inst_26145);

(statearr_26299[(10)] = inst_26144);

return statearr_26299;
})();
var statearr_26300_26359 = state_26257__$1;
(statearr_26300_26359[(2)] = null);

(statearr_26300_26359[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26258 === (23))){
var inst_26216 = (state_26257[(19)]);
var inst_26190 = (state_26257[(12)]);
var inst_26193 = (state_26257[(13)]);
var inst_26189 = (state_26257[(14)]);
var inst_26194 = (state_26257[(15)]);
var inst_26196 = (state_26257[(16)]);
var inst_26212 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_26215 = (function (){var all_files = inst_26189;
var files_SINGLEQUOTE_ = inst_26190;
var res_SINGLEQUOTE_ = inst_26193;
var res = inst_26194;
var files_not_loaded = inst_26196;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_26216,inst_26190,inst_26193,inst_26189,inst_26194,inst_26196,inst_26212,state_val_26258,c__21099__auto__,map__26131,map__26131__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__26132,map__26132__$1,msg,files){
return (function (p__26214){
var map__26301 = p__26214;
var map__26301__$1 = ((cljs.core.seq_QMARK_.call(null,map__26301))?cljs.core.apply.call(null,cljs.core.hash_map,map__26301):map__26301);
var meta_data = cljs.core.get.call(null,map__26301__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
if((cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data)))){
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
}
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_26216,inst_26190,inst_26193,inst_26189,inst_26194,inst_26196,inst_26212,state_val_26258,c__21099__auto__,map__26131,map__26131__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__26132,map__26132__$1,msg,files))
})();
var inst_26216__$1 = cljs.core.group_by.call(null,inst_26215,inst_26196);
var inst_26217 = cljs.core.seq_QMARK_.call(null,inst_26216__$1);
var state_26257__$1 = (function (){var statearr_26302 = state_26257;
(statearr_26302[(19)] = inst_26216__$1);

(statearr_26302[(32)] = inst_26212);

return statearr_26302;
})();
if(inst_26217){
var statearr_26303_26360 = state_26257__$1;
(statearr_26303_26360[(1)] = (26));

} else {
var statearr_26304_26361 = state_26257__$1;
(statearr_26304_26361[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26258 === (35))){
var inst_26225 = (state_26257[(30)]);
var inst_26246 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_26225);
var inst_26247 = cljs.core.pr_str.call(null,inst_26246);
var inst_26248 = [cljs.core.str("not required: "),cljs.core.str(inst_26247)].join('');
var inst_26249 = figwheel.client.utils.log.call(null,inst_26248);
var state_26257__$1 = state_26257;
var statearr_26305_26362 = state_26257__$1;
(statearr_26305_26362[(2)] = inst_26249);

(statearr_26305_26362[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26258 === (19))){
var inst_26190 = (state_26257[(12)]);
var inst_26193 = (state_26257[(13)]);
var inst_26189 = (state_26257[(14)]);
var inst_26194 = (state_26257[(15)]);
var inst_26193__$1 = (state_26257[(2)]);
var inst_26194__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_26193__$1);
var inst_26195 = (function (){var all_files = inst_26189;
var files_SINGLEQUOTE_ = inst_26190;
var res_SINGLEQUOTE_ = inst_26193__$1;
var res = inst_26194__$1;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,inst_26190,inst_26193,inst_26189,inst_26194,inst_26193__$1,inst_26194__$1,state_val_26258,c__21099__auto__,map__26131,map__26131__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__26132,map__26132__$1,msg,files){
return (function (p1__25927_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__25927_SHARP_));
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,inst_26190,inst_26193,inst_26189,inst_26194,inst_26193__$1,inst_26194__$1,state_val_26258,c__21099__auto__,map__26131,map__26131__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__26132,map__26132__$1,msg,files))
})();
var inst_26196 = cljs.core.filter.call(null,inst_26195,inst_26193__$1);
var inst_26197 = cljs.core.not_empty.call(null,inst_26194__$1);
var state_26257__$1 = (function (){var statearr_26306 = state_26257;
(statearr_26306[(13)] = inst_26193__$1);

(statearr_26306[(15)] = inst_26194__$1);

(statearr_26306[(16)] = inst_26196);

return statearr_26306;
})();
if(cljs.core.truth_(inst_26197)){
var statearr_26307_26363 = state_26257__$1;
(statearr_26307_26363[(1)] = (20));

} else {
var statearr_26308_26364 = state_26257__$1;
(statearr_26308_26364[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26258 === (11))){
var state_26257__$1 = state_26257;
var statearr_26309_26365 = state_26257__$1;
(statearr_26309_26365[(2)] = null);

(statearr_26309_26365[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26258 === (9))){
var inst_26176 = (state_26257[(2)]);
var state_26257__$1 = state_26257;
var statearr_26310_26366 = state_26257__$1;
(statearr_26310_26366[(2)] = inst_26176);

(statearr_26310_26366[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26258 === (5))){
var inst_26147 = (state_26257[(7)]);
var inst_26146 = (state_26257[(8)]);
var inst_26149 = (inst_26147 < inst_26146);
var inst_26150 = inst_26149;
var state_26257__$1 = state_26257;
if(cljs.core.truth_(inst_26150)){
var statearr_26311_26367 = state_26257__$1;
(statearr_26311_26367[(1)] = (7));

} else {
var statearr_26312_26368 = state_26257__$1;
(statearr_26312_26368[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26258 === (14))){
var inst_26157 = (state_26257[(27)]);
var inst_26166 = cljs.core.first.call(null,inst_26157);
var inst_26167 = figwheel.client.file_reloading.eval_body.call(null,inst_26166);
var inst_26168 = cljs.core.next.call(null,inst_26157);
var inst_26144 = inst_26168;
var inst_26145 = null;
var inst_26146 = (0);
var inst_26147 = (0);
var state_26257__$1 = (function (){var statearr_26313 = state_26257;
(statearr_26313[(7)] = inst_26147);

(statearr_26313[(8)] = inst_26146);

(statearr_26313[(33)] = inst_26167);

(statearr_26313[(9)] = inst_26145);

(statearr_26313[(10)] = inst_26144);

return statearr_26313;
})();
var statearr_26314_26369 = state_26257__$1;
(statearr_26314_26369[(2)] = null);

(statearr_26314_26369[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26258 === (26))){
var inst_26216 = (state_26257[(19)]);
var inst_26219 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26216);
var state_26257__$1 = state_26257;
var statearr_26315_26370 = state_26257__$1;
(statearr_26315_26370[(2)] = inst_26219);

(statearr_26315_26370[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26258 === (16))){
var inst_26183 = (state_26257[(23)]);
var inst_26185 = (function (){var all_files = inst_26183;
return ((function (all_files,inst_26183,state_val_26258,c__21099__auto__,map__26131,map__26131__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__26132,map__26132__$1,msg,files){
return (function (p1__25926_SHARP_){
return cljs.core.update_in.call(null,p1__25926_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_26183,state_val_26258,c__21099__auto__,map__26131,map__26131__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__26132,map__26132__$1,msg,files))
})();
var inst_26186 = cljs.core.map.call(null,inst_26185,inst_26183);
var state_26257__$1 = state_26257;
var statearr_26316_26371 = state_26257__$1;
(statearr_26316_26371[(2)] = inst_26186);

(statearr_26316_26371[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26258 === (30))){
var state_26257__$1 = state_26257;
var statearr_26317_26372 = state_26257__$1;
(statearr_26317_26372[(2)] = null);

(statearr_26317_26372[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26258 === (10))){
var inst_26157 = (state_26257[(27)]);
var inst_26159 = cljs.core.chunked_seq_QMARK_.call(null,inst_26157);
var state_26257__$1 = state_26257;
if(inst_26159){
var statearr_26318_26373 = state_26257__$1;
(statearr_26318_26373[(1)] = (13));

} else {
var statearr_26319_26374 = state_26257__$1;
(statearr_26319_26374[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26258 === (18))){
var inst_26190 = (state_26257[(12)]);
var inst_26189 = (state_26257[(14)]);
var inst_26189__$1 = (state_26257[(2)]);
var inst_26190__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_26189__$1);
var inst_26191 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_26190__$1);
var state_26257__$1 = (function (){var statearr_26320 = state_26257;
(statearr_26320[(12)] = inst_26190__$1);

(statearr_26320[(14)] = inst_26189__$1);

return statearr_26320;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26257__$1,(19),inst_26191);
} else {
if((state_val_26258 === (37))){
var inst_26252 = (state_26257[(2)]);
var state_26257__$1 = state_26257;
var statearr_26321_26375 = state_26257__$1;
(statearr_26321_26375[(2)] = inst_26252);

(statearr_26321_26375[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26258 === (8))){
var inst_26157 = (state_26257[(27)]);
var inst_26144 = (state_26257[(10)]);
var inst_26157__$1 = cljs.core.seq.call(null,inst_26144);
var state_26257__$1 = (function (){var statearr_26322 = state_26257;
(statearr_26322[(27)] = inst_26157__$1);

return statearr_26322;
})();
if(inst_26157__$1){
var statearr_26323_26376 = state_26257__$1;
(statearr_26323_26376[(1)] = (10));

} else {
var statearr_26324_26377 = state_26257__$1;
(statearr_26324_26377[(1)] = (11));

}

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
});})(c__21099__auto__,map__26131,map__26131__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__26132,map__26132__$1,msg,files))
;
return ((function (switch__21037__auto__,c__21099__auto__,map__26131,map__26131__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__26132,map__26132__$1,msg,files){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21038__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21038__auto____0 = (function (){
var statearr_26328 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26328[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__21038__auto__);

(statearr_26328[(1)] = (1));

return statearr_26328;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21038__auto____1 = (function (state_26257){
while(true){
var ret_value__21039__auto__ = (function (){try{while(true){
var result__21040__auto__ = switch__21037__auto__.call(null,state_26257);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21040__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21040__auto__;
}
break;
}
}catch (e26329){if((e26329 instanceof Object)){
var ex__21041__auto__ = e26329;
var statearr_26330_26378 = state_26257;
(statearr_26330_26378[(5)] = ex__21041__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26257);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26329;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21039__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26379 = state_26257;
state_26257 = G__26379;
continue;
} else {
return ret_value__21039__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__21038__auto__ = function(state_26257){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21038__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21038__auto____1.call(this,state_26257);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__21038__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__21038__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__21038__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__21038__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21038__auto__;
})()
;})(switch__21037__auto__,c__21099__auto__,map__26131,map__26131__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__26132,map__26132__$1,msg,files))
})();
var state__21101__auto__ = (function (){var statearr_26331 = f__21100__auto__.call(null);
(statearr_26331[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21099__auto__);

return statearr_26331;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21101__auto__);
});})(c__21099__auto__,map__26131,map__26131__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__26132,map__26132__$1,msg,files))
);

return c__21099__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__26382,link){
var map__26384 = p__26382;
var map__26384__$1 = ((cljs.core.seq_QMARK_.call(null,map__26384))?cljs.core.apply.call(null,cljs.core.hash_map,map__26384):map__26384);
var file = cljs.core.get.call(null,map__26384__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4423__auto__ = link.href;
if(cljs.core.truth_(temp__4423__auto__)){
var link_href = temp__4423__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4423__auto__,map__26384,map__26384__$1,file){
return (function (p1__26380_SHARP_,p2__26381_SHARP_){
if(cljs.core._EQ_.call(null,p1__26380_SHARP_,p2__26381_SHARP_)){
return p1__26380_SHARP_;
} else {
return false;
}
});})(link_href,temp__4423__auto__,map__26384,map__26384__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4423__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__26388){
var map__26389 = p__26388;
var map__26389__$1 = ((cljs.core.seq_QMARK_.call(null,map__26389))?cljs.core.apply.call(null,cljs.core.hash_map,map__26389):map__26389);
var match_length = cljs.core.get.call(null,map__26389__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__26389__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__26385_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__26385_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4423__auto__)){
var res = temp__4423__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(){
var G__26391 = arguments.length;
switch (G__26391) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__26393){
var map__26395 = p__26393;
var map__26395__$1 = ((cljs.core.seq_QMARK_.call(null,map__26395))?cljs.core.apply.call(null,cljs.core.hash_map,map__26395):map__26395);
var f_data = map__26395__$1;
var file = cljs.core.get.call(null,map__26395__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var request_url = cljs.core.get.call(null,map__26395__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var temp__4421__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4421__auto__)){
var link = temp__4421__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return figwheel.client.file_reloading.add_link_to_doc.call(null,figwheel.client.file_reloading.create_link.call(null,(function (){var or__18087__auto__ = request_url;
if(cljs.core.truth_(or__18087__auto__)){
return or__18087__auto__;
} else {
return file;
}
})()));
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__26396,files_msg){
var map__26418 = p__26396;
var map__26418__$1 = ((cljs.core.seq_QMARK_.call(null,map__26418))?cljs.core.apply.call(null,cljs.core.hash_map,map__26418):map__26418);
var opts = map__26418__$1;
var on_cssload = cljs.core.get.call(null,map__26418__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__26419_26439 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__26420_26440 = null;
var count__26421_26441 = (0);
var i__26422_26442 = (0);
while(true){
if((i__26422_26442 < count__26421_26441)){
var f_26443 = cljs.core._nth.call(null,chunk__26420_26440,i__26422_26442);
figwheel.client.file_reloading.reload_css_file.call(null,f_26443);

var G__26444 = seq__26419_26439;
var G__26445 = chunk__26420_26440;
var G__26446 = count__26421_26441;
var G__26447 = (i__26422_26442 + (1));
seq__26419_26439 = G__26444;
chunk__26420_26440 = G__26445;
count__26421_26441 = G__26446;
i__26422_26442 = G__26447;
continue;
} else {
var temp__4423__auto___26448 = cljs.core.seq.call(null,seq__26419_26439);
if(temp__4423__auto___26448){
var seq__26419_26449__$1 = temp__4423__auto___26448;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26419_26449__$1)){
var c__18872__auto___26450 = cljs.core.chunk_first.call(null,seq__26419_26449__$1);
var G__26451 = cljs.core.chunk_rest.call(null,seq__26419_26449__$1);
var G__26452 = c__18872__auto___26450;
var G__26453 = cljs.core.count.call(null,c__18872__auto___26450);
var G__26454 = (0);
seq__26419_26439 = G__26451;
chunk__26420_26440 = G__26452;
count__26421_26441 = G__26453;
i__26422_26442 = G__26454;
continue;
} else {
var f_26455 = cljs.core.first.call(null,seq__26419_26449__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_26455);

var G__26456 = cljs.core.next.call(null,seq__26419_26449__$1);
var G__26457 = null;
var G__26458 = (0);
var G__26459 = (0);
seq__26419_26439 = G__26456;
chunk__26420_26440 = G__26457;
count__26421_26441 = G__26458;
i__26422_26442 = G__26459;
continue;
}
} else {
}
}
break;
}

var c__21099__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21099__auto__,map__26418,map__26418__$1,opts,on_cssload){
return (function (){
var f__21100__auto__ = (function (){var switch__21037__auto__ = ((function (c__21099__auto__,map__26418,map__26418__$1,opts,on_cssload){
return (function (state_26429){
var state_val_26430 = (state_26429[(1)]);
if((state_val_26430 === (1))){
var inst_26423 = cljs.core.async.timeout.call(null,(100));
var state_26429__$1 = state_26429;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26429__$1,(2),inst_26423);
} else {
if((state_val_26430 === (2))){
var inst_26425 = (state_26429[(2)]);
var inst_26426 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_26427 = on_cssload.call(null,inst_26426);
var state_26429__$1 = (function (){var statearr_26431 = state_26429;
(statearr_26431[(7)] = inst_26425);

return statearr_26431;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26429__$1,inst_26427);
} else {
return null;
}
}
});})(c__21099__auto__,map__26418,map__26418__$1,opts,on_cssload))
;
return ((function (switch__21037__auto__,c__21099__auto__,map__26418,map__26418__$1,opts,on_cssload){
return (function() {
var figwheel$client$file_reloading$reload_css_files_$_state_machine__21038__auto__ = null;
var figwheel$client$file_reloading$reload_css_files_$_state_machine__21038__auto____0 = (function (){
var statearr_26435 = [null,null,null,null,null,null,null,null];
(statearr_26435[(0)] = figwheel$client$file_reloading$reload_css_files_$_state_machine__21038__auto__);

(statearr_26435[(1)] = (1));

return statearr_26435;
});
var figwheel$client$file_reloading$reload_css_files_$_state_machine__21038__auto____1 = (function (state_26429){
while(true){
var ret_value__21039__auto__ = (function (){try{while(true){
var result__21040__auto__ = switch__21037__auto__.call(null,state_26429);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21040__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21040__auto__;
}
break;
}
}catch (e26436){if((e26436 instanceof Object)){
var ex__21041__auto__ = e26436;
var statearr_26437_26460 = state_26429;
(statearr_26437_26460[(5)] = ex__21041__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26429);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26436;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21039__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26461 = state_26429;
state_26429 = G__26461;
continue;
} else {
return ret_value__21039__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_css_files_$_state_machine__21038__auto__ = function(state_26429){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__21038__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__21038__auto____1.call(this,state_26429);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_css_files_$_state_machine__21038__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_css_files_$_state_machine__21038__auto____0;
figwheel$client$file_reloading$reload_css_files_$_state_machine__21038__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_css_files_$_state_machine__21038__auto____1;
return figwheel$client$file_reloading$reload_css_files_$_state_machine__21038__auto__;
})()
;})(switch__21037__auto__,c__21099__auto__,map__26418,map__26418__$1,opts,on_cssload))
})();
var state__21101__auto__ = (function (){var statearr_26438 = f__21100__auto__.call(null);
(statearr_26438[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21099__auto__);

return statearr_26438;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21101__auto__);
});})(c__21099__auto__,map__26418,map__26418__$1,opts,on_cssload))
);

return c__21099__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map