// Compiled by ClojureScript 0.0-3308 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t26512 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26512 = (function (fn_handler,f,meta26513){
this.fn_handler = fn_handler;
this.f = f;
this.meta26513 = meta26513;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t26512.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26514,meta26513__$1){
var self__ = this;
var _26514__$1 = this;
return (new cljs.core.async.t26512(self__.fn_handler,self__.f,meta26513__$1));
});

cljs.core.async.t26512.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26514){
var self__ = this;
var _26514__$1 = this;
return self__.meta26513;
});

cljs.core.async.t26512.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t26512.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t26512.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t26512.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta26513","meta26513",-265050945,null)], null);
});

cljs.core.async.t26512.cljs$lang$type = true;

cljs.core.async.t26512.cljs$lang$ctorStr = "cljs.core.async/t26512";

cljs.core.async.t26512.cljs$lang$ctorPrWriter = (function (this__18666__auto__,writer__18667__auto__,opt__18668__auto__){
return cljs.core._write.call(null,writer__18667__auto__,"cljs.core.async/t26512");
});

cljs.core.async.__GT_t26512 = (function cljs$core$async$fn_handler_$___GT_t26512(fn_handler__$1,f__$1,meta26513){
return (new cljs.core.async.t26512(fn_handler__$1,f__$1,meta26513));
});

}

return (new cljs.core.async.t26512(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 * val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 * buffered, but oldest elements in buffer will be dropped (not
 * transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full.
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
var G__26516 = buff;
if(G__26516){
var bit__18761__auto__ = null;
if(cljs.core.truth_((function (){var or__18087__auto__ = bit__18761__auto__;
if(cljs.core.truth_(or__18087__auto__)){
return or__18087__auto__;
} else {
return G__26516.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__26516.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__26516);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__26516);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 * (filter p) etc or a composition thereof), and an optional exception handler.
 * If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 * transducer is supplied a buffer must be specified. ex-handler must be a
 * fn of one argument - if an exception occurs during transformation it will be called
 * with the thrown value as an argument, and any non-nil return value will be placed
 * in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(){
var G__26518 = arguments.length;
switch (G__26518) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 * return nil if closed. Will park if nothing is available.
 * Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(){
var G__26521 = arguments.length;
switch (G__26521) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_26523 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_26523);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_26523,ret){
return (function (){
return fn1.call(null,val_26523);
});})(val_26523,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 * inside a (go ...) block. Will park if no buffer space is available.
 * Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(){
var G__26525 = arguments.length;
switch (G__26525) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4421__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4421__auto__)){
var ret = temp__4421__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4421__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4421__auto__)){
var retb = temp__4421__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4421__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4421__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__18972__auto___26527 = n;
var x_26528 = (0);
while(true){
if((x_26528 < n__18972__auto___26527)){
(a[x_26528] = (0));

var G__26529 = (x_26528 + (1));
x_26528 = G__26529;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__26530 = (i + (1));
i = G__26530;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t26534 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26534 = (function (alt_flag,flag,meta26535){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta26535 = meta26535;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t26534.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_26536,meta26535__$1){
var self__ = this;
var _26536__$1 = this;
return (new cljs.core.async.t26534(self__.alt_flag,self__.flag,meta26535__$1));
});})(flag))
;

cljs.core.async.t26534.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_26536){
var self__ = this;
var _26536__$1 = this;
return self__.meta26535;
});})(flag))
;

cljs.core.async.t26534.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t26534.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t26534.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t26534.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta26535","meta26535",-1394049873,null)], null);
});})(flag))
;

cljs.core.async.t26534.cljs$lang$type = true;

cljs.core.async.t26534.cljs$lang$ctorStr = "cljs.core.async/t26534";

cljs.core.async.t26534.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__18666__auto__,writer__18667__auto__,opt__18668__auto__){
return cljs.core._write.call(null,writer__18667__auto__,"cljs.core.async/t26534");
});})(flag))
;

cljs.core.async.__GT_t26534 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t26534(alt_flag__$1,flag__$1,meta26535){
return (new cljs.core.async.t26534(alt_flag__$1,flag__$1,meta26535));
});})(flag))
;

}

return (new cljs.core.async.t26534(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t26540 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26540 = (function (alt_handler,flag,cb,meta26541){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta26541 = meta26541;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t26540.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26542,meta26541__$1){
var self__ = this;
var _26542__$1 = this;
return (new cljs.core.async.t26540(self__.alt_handler,self__.flag,self__.cb,meta26541__$1));
});

cljs.core.async.t26540.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26542){
var self__ = this;
var _26542__$1 = this;
return self__.meta26541;
});

cljs.core.async.t26540.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t26540.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t26540.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t26540.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta26541","meta26541",1250297220,null)], null);
});

cljs.core.async.t26540.cljs$lang$type = true;

cljs.core.async.t26540.cljs$lang$ctorStr = "cljs.core.async/t26540";

cljs.core.async.t26540.cljs$lang$ctorPrWriter = (function (this__18666__auto__,writer__18667__auto__,opt__18668__auto__){
return cljs.core._write.call(null,writer__18667__auto__,"cljs.core.async/t26540");
});

cljs.core.async.__GT_t26540 = (function cljs$core$async$alt_handler_$___GT_t26540(alt_handler__$1,flag__$1,cb__$1,meta26541){
return (new cljs.core.async.t26540(alt_handler__$1,flag__$1,cb__$1,meta26541));
});

}

return (new cljs.core.async.t26540(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__26543_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26543_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__26544_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26544_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__18087__auto__ = wport;
if(cljs.core.truth_(or__18087__auto__)){
return or__18087__auto__;
} else {
return port;
}
})()], null));
} else {
var G__26545 = (i + (1));
i = G__26545;
continue;
}
} else {
return null;
}
break;
}
})();
var or__18087__auto__ = ret;
if(cljs.core.truth_(or__18087__auto__)){
return or__18087__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4423__auto__ = (function (){var and__18075__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__18075__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__18075__auto__;
}
})();
if(cljs.core.truth_(temp__4423__auto__)){
var got = temp__4423__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 * [channel-to-put-to val-to-put], in any combination. Takes will be
 * made as if by <!, and puts will be made as if by >!. Unless
 * the :priority option is true, if more than one port operation is
 * ready a non-deterministic choice will be made. If no operation is
 * ready and a :default value is supplied, [default-val :default] will
 * be returned, otherwise alts! will park until the first operation to
 * become ready completes. Returns [val port] of the completed
 * operation, where val is the value taken for takes, and a
 * boolean (true unless already closed, as per put!) for puts.
 * 
 * opts are passed as :key val ... Supported options:
 * 
 * :default val - the value to use if none of the operations are immediately ready
 * :priority true - (default nil) when true, the operations will be tried in order.
 * 
 * Note: there is no guarantee that the port exps or val exprs will be
 * used, nor in what order should they be, so they should not be
 * depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(){
var argseq__19127__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19127__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__26548){
var map__26549 = p__26548;
var map__26549__$1 = ((cljs.core.seq_QMARK_.call(null,map__26549))?cljs.core.apply.call(null,cljs.core.hash_map,map__26549):map__26549);
var opts = map__26549__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq26546){
var G__26547 = cljs.core.first.call(null,seq26546);
var seq26546__$1 = cljs.core.next.call(null,seq26546);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__26547,seq26546__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(){
var G__26551 = arguments.length;
switch (G__26551) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__21099__auto___26600 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21099__auto___26600){
return (function (){
var f__21100__auto__ = (function (){var switch__21037__auto__ = ((function (c__21099__auto___26600){
return (function (state_26575){
var state_val_26576 = (state_26575[(1)]);
if((state_val_26576 === (7))){
var inst_26571 = (state_26575[(2)]);
var state_26575__$1 = state_26575;
var statearr_26577_26601 = state_26575__$1;
(statearr_26577_26601[(2)] = inst_26571);

(statearr_26577_26601[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26576 === (1))){
var state_26575__$1 = state_26575;
var statearr_26578_26602 = state_26575__$1;
(statearr_26578_26602[(2)] = null);

(statearr_26578_26602[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26576 === (4))){
var inst_26554 = (state_26575[(7)]);
var inst_26554__$1 = (state_26575[(2)]);
var inst_26555 = (inst_26554__$1 == null);
var state_26575__$1 = (function (){var statearr_26579 = state_26575;
(statearr_26579[(7)] = inst_26554__$1);

return statearr_26579;
})();
if(cljs.core.truth_(inst_26555)){
var statearr_26580_26603 = state_26575__$1;
(statearr_26580_26603[(1)] = (5));

} else {
var statearr_26581_26604 = state_26575__$1;
(statearr_26581_26604[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26576 === (13))){
var state_26575__$1 = state_26575;
var statearr_26582_26605 = state_26575__$1;
(statearr_26582_26605[(2)] = null);

(statearr_26582_26605[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26576 === (6))){
var inst_26554 = (state_26575[(7)]);
var state_26575__$1 = state_26575;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26575__$1,(11),to,inst_26554);
} else {
if((state_val_26576 === (3))){
var inst_26573 = (state_26575[(2)]);
var state_26575__$1 = state_26575;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26575__$1,inst_26573);
} else {
if((state_val_26576 === (12))){
var state_26575__$1 = state_26575;
var statearr_26583_26606 = state_26575__$1;
(statearr_26583_26606[(2)] = null);

(statearr_26583_26606[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26576 === (2))){
var state_26575__$1 = state_26575;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26575__$1,(4),from);
} else {
if((state_val_26576 === (11))){
var inst_26564 = (state_26575[(2)]);
var state_26575__$1 = state_26575;
if(cljs.core.truth_(inst_26564)){
var statearr_26584_26607 = state_26575__$1;
(statearr_26584_26607[(1)] = (12));

} else {
var statearr_26585_26608 = state_26575__$1;
(statearr_26585_26608[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26576 === (9))){
var state_26575__$1 = state_26575;
var statearr_26586_26609 = state_26575__$1;
(statearr_26586_26609[(2)] = null);

(statearr_26586_26609[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26576 === (5))){
var state_26575__$1 = state_26575;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26587_26610 = state_26575__$1;
(statearr_26587_26610[(1)] = (8));

} else {
var statearr_26588_26611 = state_26575__$1;
(statearr_26588_26611[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26576 === (14))){
var inst_26569 = (state_26575[(2)]);
var state_26575__$1 = state_26575;
var statearr_26589_26612 = state_26575__$1;
(statearr_26589_26612[(2)] = inst_26569);

(statearr_26589_26612[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26576 === (10))){
var inst_26561 = (state_26575[(2)]);
var state_26575__$1 = state_26575;
var statearr_26590_26613 = state_26575__$1;
(statearr_26590_26613[(2)] = inst_26561);

(statearr_26590_26613[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26576 === (8))){
var inst_26558 = cljs.core.async.close_BANG_.call(null,to);
var state_26575__$1 = state_26575;
var statearr_26591_26614 = state_26575__$1;
(statearr_26591_26614[(2)] = inst_26558);

(statearr_26591_26614[(1)] = (10));


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
});})(c__21099__auto___26600))
;
return ((function (switch__21037__auto__,c__21099__auto___26600){
return (function() {
var cljs$core$async$state_machine__21038__auto__ = null;
var cljs$core$async$state_machine__21038__auto____0 = (function (){
var statearr_26595 = [null,null,null,null,null,null,null,null];
(statearr_26595[(0)] = cljs$core$async$state_machine__21038__auto__);

(statearr_26595[(1)] = (1));

return statearr_26595;
});
var cljs$core$async$state_machine__21038__auto____1 = (function (state_26575){
while(true){
var ret_value__21039__auto__ = (function (){try{while(true){
var result__21040__auto__ = switch__21037__auto__.call(null,state_26575);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21040__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21040__auto__;
}
break;
}
}catch (e26596){if((e26596 instanceof Object)){
var ex__21041__auto__ = e26596;
var statearr_26597_26615 = state_26575;
(statearr_26597_26615[(5)] = ex__21041__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26575);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26596;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21039__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26616 = state_26575;
state_26575 = G__26616;
continue;
} else {
return ret_value__21039__auto__;
}
break;
}
});
cljs$core$async$state_machine__21038__auto__ = function(state_26575){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21038__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21038__auto____1.call(this,state_26575);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21038__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21038__auto____0;
cljs$core$async$state_machine__21038__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21038__auto____1;
return cljs$core$async$state_machine__21038__auto__;
})()
;})(switch__21037__auto__,c__21099__auto___26600))
})();
var state__21101__auto__ = (function (){var statearr_26598 = f__21100__auto__.call(null);
(statearr_26598[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21099__auto___26600);

return statearr_26598;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21101__auto__);
});})(c__21099__auto___26600))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__26800){
var vec__26801 = p__26800;
var v = cljs.core.nth.call(null,vec__26801,(0),null);
var p = cljs.core.nth.call(null,vec__26801,(1),null);
var job = vec__26801;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__21099__auto___26983 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21099__auto___26983,res,vec__26801,v,p,job,jobs,results){
return (function (){
var f__21100__auto__ = (function (){var switch__21037__auto__ = ((function (c__21099__auto___26983,res,vec__26801,v,p,job,jobs,results){
return (function (state_26806){
var state_val_26807 = (state_26806[(1)]);
if((state_val_26807 === (1))){
var state_26806__$1 = state_26806;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26806__$1,(2),res,v);
} else {
if((state_val_26807 === (2))){
var inst_26803 = (state_26806[(2)]);
var inst_26804 = cljs.core.async.close_BANG_.call(null,res);
var state_26806__$1 = (function (){var statearr_26808 = state_26806;
(statearr_26808[(7)] = inst_26803);

return statearr_26808;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26806__$1,inst_26804);
} else {
return null;
}
}
});})(c__21099__auto___26983,res,vec__26801,v,p,job,jobs,results))
;
return ((function (switch__21037__auto__,c__21099__auto___26983,res,vec__26801,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21038__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21038__auto____0 = (function (){
var statearr_26812 = [null,null,null,null,null,null,null,null];
(statearr_26812[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21038__auto__);

(statearr_26812[(1)] = (1));

return statearr_26812;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21038__auto____1 = (function (state_26806){
while(true){
var ret_value__21039__auto__ = (function (){try{while(true){
var result__21040__auto__ = switch__21037__auto__.call(null,state_26806);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21040__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21040__auto__;
}
break;
}
}catch (e26813){if((e26813 instanceof Object)){
var ex__21041__auto__ = e26813;
var statearr_26814_26984 = state_26806;
(statearr_26814_26984[(5)] = ex__21041__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26806);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26813;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21039__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26985 = state_26806;
state_26806 = G__26985;
continue;
} else {
return ret_value__21039__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21038__auto__ = function(state_26806){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21038__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21038__auto____1.call(this,state_26806);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21038__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21038__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21038__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21038__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21038__auto__;
})()
;})(switch__21037__auto__,c__21099__auto___26983,res,vec__26801,v,p,job,jobs,results))
})();
var state__21101__auto__ = (function (){var statearr_26815 = f__21100__auto__.call(null);
(statearr_26815[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21099__auto___26983);

return statearr_26815;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21101__auto__);
});})(c__21099__auto___26983,res,vec__26801,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__26816){
var vec__26817 = p__26816;
var v = cljs.core.nth.call(null,vec__26817,(0),null);
var p = cljs.core.nth.call(null,vec__26817,(1),null);
var job = vec__26817;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__18972__auto___26986 = n;
var __26987 = (0);
while(true){
if((__26987 < n__18972__auto___26986)){
var G__26818_26988 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__26818_26988) {
case "compute":
var c__21099__auto___26990 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__26987,c__21099__auto___26990,G__26818_26988,n__18972__auto___26986,jobs,results,process,async){
return (function (){
var f__21100__auto__ = (function (){var switch__21037__auto__ = ((function (__26987,c__21099__auto___26990,G__26818_26988,n__18972__auto___26986,jobs,results,process,async){
return (function (state_26831){
var state_val_26832 = (state_26831[(1)]);
if((state_val_26832 === (1))){
var state_26831__$1 = state_26831;
var statearr_26833_26991 = state_26831__$1;
(statearr_26833_26991[(2)] = null);

(statearr_26833_26991[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26832 === (2))){
var state_26831__$1 = state_26831;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26831__$1,(4),jobs);
} else {
if((state_val_26832 === (3))){
var inst_26829 = (state_26831[(2)]);
var state_26831__$1 = state_26831;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26831__$1,inst_26829);
} else {
if((state_val_26832 === (4))){
var inst_26821 = (state_26831[(2)]);
var inst_26822 = process.call(null,inst_26821);
var state_26831__$1 = state_26831;
if(cljs.core.truth_(inst_26822)){
var statearr_26834_26992 = state_26831__$1;
(statearr_26834_26992[(1)] = (5));

} else {
var statearr_26835_26993 = state_26831__$1;
(statearr_26835_26993[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26832 === (5))){
var state_26831__$1 = state_26831;
var statearr_26836_26994 = state_26831__$1;
(statearr_26836_26994[(2)] = null);

(statearr_26836_26994[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26832 === (6))){
var state_26831__$1 = state_26831;
var statearr_26837_26995 = state_26831__$1;
(statearr_26837_26995[(2)] = null);

(statearr_26837_26995[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26832 === (7))){
var inst_26827 = (state_26831[(2)]);
var state_26831__$1 = state_26831;
var statearr_26838_26996 = state_26831__$1;
(statearr_26838_26996[(2)] = inst_26827);

(statearr_26838_26996[(1)] = (3));


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
});})(__26987,c__21099__auto___26990,G__26818_26988,n__18972__auto___26986,jobs,results,process,async))
;
return ((function (__26987,switch__21037__auto__,c__21099__auto___26990,G__26818_26988,n__18972__auto___26986,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21038__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21038__auto____0 = (function (){
var statearr_26842 = [null,null,null,null,null,null,null];
(statearr_26842[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21038__auto__);

(statearr_26842[(1)] = (1));

return statearr_26842;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21038__auto____1 = (function (state_26831){
while(true){
var ret_value__21039__auto__ = (function (){try{while(true){
var result__21040__auto__ = switch__21037__auto__.call(null,state_26831);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21040__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21040__auto__;
}
break;
}
}catch (e26843){if((e26843 instanceof Object)){
var ex__21041__auto__ = e26843;
var statearr_26844_26997 = state_26831;
(statearr_26844_26997[(5)] = ex__21041__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26831);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26843;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21039__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26998 = state_26831;
state_26831 = G__26998;
continue;
} else {
return ret_value__21039__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21038__auto__ = function(state_26831){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21038__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21038__auto____1.call(this,state_26831);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21038__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21038__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21038__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21038__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21038__auto__;
})()
;})(__26987,switch__21037__auto__,c__21099__auto___26990,G__26818_26988,n__18972__auto___26986,jobs,results,process,async))
})();
var state__21101__auto__ = (function (){var statearr_26845 = f__21100__auto__.call(null);
(statearr_26845[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21099__auto___26990);

return statearr_26845;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21101__auto__);
});})(__26987,c__21099__auto___26990,G__26818_26988,n__18972__auto___26986,jobs,results,process,async))
);


break;
case "async":
var c__21099__auto___26999 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__26987,c__21099__auto___26999,G__26818_26988,n__18972__auto___26986,jobs,results,process,async){
return (function (){
var f__21100__auto__ = (function (){var switch__21037__auto__ = ((function (__26987,c__21099__auto___26999,G__26818_26988,n__18972__auto___26986,jobs,results,process,async){
return (function (state_26858){
var state_val_26859 = (state_26858[(1)]);
if((state_val_26859 === (1))){
var state_26858__$1 = state_26858;
var statearr_26860_27000 = state_26858__$1;
(statearr_26860_27000[(2)] = null);

(statearr_26860_27000[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26859 === (2))){
var state_26858__$1 = state_26858;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26858__$1,(4),jobs);
} else {
if((state_val_26859 === (3))){
var inst_26856 = (state_26858[(2)]);
var state_26858__$1 = state_26858;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26858__$1,inst_26856);
} else {
if((state_val_26859 === (4))){
var inst_26848 = (state_26858[(2)]);
var inst_26849 = async.call(null,inst_26848);
var state_26858__$1 = state_26858;
if(cljs.core.truth_(inst_26849)){
var statearr_26861_27001 = state_26858__$1;
(statearr_26861_27001[(1)] = (5));

} else {
var statearr_26862_27002 = state_26858__$1;
(statearr_26862_27002[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26859 === (5))){
var state_26858__$1 = state_26858;
var statearr_26863_27003 = state_26858__$1;
(statearr_26863_27003[(2)] = null);

(statearr_26863_27003[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26859 === (6))){
var state_26858__$1 = state_26858;
var statearr_26864_27004 = state_26858__$1;
(statearr_26864_27004[(2)] = null);

(statearr_26864_27004[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26859 === (7))){
var inst_26854 = (state_26858[(2)]);
var state_26858__$1 = state_26858;
var statearr_26865_27005 = state_26858__$1;
(statearr_26865_27005[(2)] = inst_26854);

(statearr_26865_27005[(1)] = (3));


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
});})(__26987,c__21099__auto___26999,G__26818_26988,n__18972__auto___26986,jobs,results,process,async))
;
return ((function (__26987,switch__21037__auto__,c__21099__auto___26999,G__26818_26988,n__18972__auto___26986,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21038__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21038__auto____0 = (function (){
var statearr_26869 = [null,null,null,null,null,null,null];
(statearr_26869[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21038__auto__);

(statearr_26869[(1)] = (1));

return statearr_26869;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21038__auto____1 = (function (state_26858){
while(true){
var ret_value__21039__auto__ = (function (){try{while(true){
var result__21040__auto__ = switch__21037__auto__.call(null,state_26858);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21040__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21040__auto__;
}
break;
}
}catch (e26870){if((e26870 instanceof Object)){
var ex__21041__auto__ = e26870;
var statearr_26871_27006 = state_26858;
(statearr_26871_27006[(5)] = ex__21041__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26858);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26870;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21039__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27007 = state_26858;
state_26858 = G__27007;
continue;
} else {
return ret_value__21039__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21038__auto__ = function(state_26858){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21038__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21038__auto____1.call(this,state_26858);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21038__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21038__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21038__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21038__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21038__auto__;
})()
;})(__26987,switch__21037__auto__,c__21099__auto___26999,G__26818_26988,n__18972__auto___26986,jobs,results,process,async))
})();
var state__21101__auto__ = (function (){var statearr_26872 = f__21100__auto__.call(null);
(statearr_26872[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21099__auto___26999);

return statearr_26872;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21101__auto__);
});})(__26987,c__21099__auto___26999,G__26818_26988,n__18972__auto___26986,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__27008 = (__26987 + (1));
__26987 = G__27008;
continue;
} else {
}
break;
}

var c__21099__auto___27009 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21099__auto___27009,jobs,results,process,async){
return (function (){
var f__21100__auto__ = (function (){var switch__21037__auto__ = ((function (c__21099__auto___27009,jobs,results,process,async){
return (function (state_26894){
var state_val_26895 = (state_26894[(1)]);
if((state_val_26895 === (1))){
var state_26894__$1 = state_26894;
var statearr_26896_27010 = state_26894__$1;
(statearr_26896_27010[(2)] = null);

(statearr_26896_27010[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26895 === (2))){
var state_26894__$1 = state_26894;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26894__$1,(4),from);
} else {
if((state_val_26895 === (3))){
var inst_26892 = (state_26894[(2)]);
var state_26894__$1 = state_26894;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26894__$1,inst_26892);
} else {
if((state_val_26895 === (4))){
var inst_26875 = (state_26894[(7)]);
var inst_26875__$1 = (state_26894[(2)]);
var inst_26876 = (inst_26875__$1 == null);
var state_26894__$1 = (function (){var statearr_26897 = state_26894;
(statearr_26897[(7)] = inst_26875__$1);

return statearr_26897;
})();
if(cljs.core.truth_(inst_26876)){
var statearr_26898_27011 = state_26894__$1;
(statearr_26898_27011[(1)] = (5));

} else {
var statearr_26899_27012 = state_26894__$1;
(statearr_26899_27012[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26895 === (5))){
var inst_26878 = cljs.core.async.close_BANG_.call(null,jobs);
var state_26894__$1 = state_26894;
var statearr_26900_27013 = state_26894__$1;
(statearr_26900_27013[(2)] = inst_26878);

(statearr_26900_27013[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26895 === (6))){
var inst_26875 = (state_26894[(7)]);
var inst_26880 = (state_26894[(8)]);
var inst_26880__$1 = cljs.core.async.chan.call(null,(1));
var inst_26881 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26882 = [inst_26875,inst_26880__$1];
var inst_26883 = (new cljs.core.PersistentVector(null,2,(5),inst_26881,inst_26882,null));
var state_26894__$1 = (function (){var statearr_26901 = state_26894;
(statearr_26901[(8)] = inst_26880__$1);

return statearr_26901;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26894__$1,(8),jobs,inst_26883);
} else {
if((state_val_26895 === (7))){
var inst_26890 = (state_26894[(2)]);
var state_26894__$1 = state_26894;
var statearr_26902_27014 = state_26894__$1;
(statearr_26902_27014[(2)] = inst_26890);

(statearr_26902_27014[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26895 === (8))){
var inst_26880 = (state_26894[(8)]);
var inst_26885 = (state_26894[(2)]);
var state_26894__$1 = (function (){var statearr_26903 = state_26894;
(statearr_26903[(9)] = inst_26885);

return statearr_26903;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26894__$1,(9),results,inst_26880);
} else {
if((state_val_26895 === (9))){
var inst_26887 = (state_26894[(2)]);
var state_26894__$1 = (function (){var statearr_26904 = state_26894;
(statearr_26904[(10)] = inst_26887);

return statearr_26904;
})();
var statearr_26905_27015 = state_26894__$1;
(statearr_26905_27015[(2)] = null);

(statearr_26905_27015[(1)] = (2));


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
});})(c__21099__auto___27009,jobs,results,process,async))
;
return ((function (switch__21037__auto__,c__21099__auto___27009,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21038__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21038__auto____0 = (function (){
var statearr_26909 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26909[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21038__auto__);

(statearr_26909[(1)] = (1));

return statearr_26909;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21038__auto____1 = (function (state_26894){
while(true){
var ret_value__21039__auto__ = (function (){try{while(true){
var result__21040__auto__ = switch__21037__auto__.call(null,state_26894);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21040__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21040__auto__;
}
break;
}
}catch (e26910){if((e26910 instanceof Object)){
var ex__21041__auto__ = e26910;
var statearr_26911_27016 = state_26894;
(statearr_26911_27016[(5)] = ex__21041__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26894);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26910;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21039__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27017 = state_26894;
state_26894 = G__27017;
continue;
} else {
return ret_value__21039__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21038__auto__ = function(state_26894){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21038__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21038__auto____1.call(this,state_26894);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21038__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21038__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21038__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21038__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21038__auto__;
})()
;})(switch__21037__auto__,c__21099__auto___27009,jobs,results,process,async))
})();
var state__21101__auto__ = (function (){var statearr_26912 = f__21100__auto__.call(null);
(statearr_26912[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21099__auto___27009);

return statearr_26912;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21101__auto__);
});})(c__21099__auto___27009,jobs,results,process,async))
);


var c__21099__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21099__auto__,jobs,results,process,async){
return (function (){
var f__21100__auto__ = (function (){var switch__21037__auto__ = ((function (c__21099__auto__,jobs,results,process,async){
return (function (state_26950){
var state_val_26951 = (state_26950[(1)]);
if((state_val_26951 === (7))){
var inst_26946 = (state_26950[(2)]);
var state_26950__$1 = state_26950;
var statearr_26952_27018 = state_26950__$1;
(statearr_26952_27018[(2)] = inst_26946);

(statearr_26952_27018[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26951 === (20))){
var state_26950__$1 = state_26950;
var statearr_26953_27019 = state_26950__$1;
(statearr_26953_27019[(2)] = null);

(statearr_26953_27019[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26951 === (1))){
var state_26950__$1 = state_26950;
var statearr_26954_27020 = state_26950__$1;
(statearr_26954_27020[(2)] = null);

(statearr_26954_27020[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26951 === (4))){
var inst_26915 = (state_26950[(7)]);
var inst_26915__$1 = (state_26950[(2)]);
var inst_26916 = (inst_26915__$1 == null);
var state_26950__$1 = (function (){var statearr_26955 = state_26950;
(statearr_26955[(7)] = inst_26915__$1);

return statearr_26955;
})();
if(cljs.core.truth_(inst_26916)){
var statearr_26956_27021 = state_26950__$1;
(statearr_26956_27021[(1)] = (5));

} else {
var statearr_26957_27022 = state_26950__$1;
(statearr_26957_27022[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26951 === (15))){
var inst_26928 = (state_26950[(8)]);
var state_26950__$1 = state_26950;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26950__$1,(18),to,inst_26928);
} else {
if((state_val_26951 === (21))){
var inst_26941 = (state_26950[(2)]);
var state_26950__$1 = state_26950;
var statearr_26958_27023 = state_26950__$1;
(statearr_26958_27023[(2)] = inst_26941);

(statearr_26958_27023[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26951 === (13))){
var inst_26943 = (state_26950[(2)]);
var state_26950__$1 = (function (){var statearr_26959 = state_26950;
(statearr_26959[(9)] = inst_26943);

return statearr_26959;
})();
var statearr_26960_27024 = state_26950__$1;
(statearr_26960_27024[(2)] = null);

(statearr_26960_27024[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26951 === (6))){
var inst_26915 = (state_26950[(7)]);
var state_26950__$1 = state_26950;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26950__$1,(11),inst_26915);
} else {
if((state_val_26951 === (17))){
var inst_26936 = (state_26950[(2)]);
var state_26950__$1 = state_26950;
if(cljs.core.truth_(inst_26936)){
var statearr_26961_27025 = state_26950__$1;
(statearr_26961_27025[(1)] = (19));

} else {
var statearr_26962_27026 = state_26950__$1;
(statearr_26962_27026[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26951 === (3))){
var inst_26948 = (state_26950[(2)]);
var state_26950__$1 = state_26950;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26950__$1,inst_26948);
} else {
if((state_val_26951 === (12))){
var inst_26925 = (state_26950[(10)]);
var state_26950__$1 = state_26950;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26950__$1,(14),inst_26925);
} else {
if((state_val_26951 === (2))){
var state_26950__$1 = state_26950;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26950__$1,(4),results);
} else {
if((state_val_26951 === (19))){
var state_26950__$1 = state_26950;
var statearr_26963_27027 = state_26950__$1;
(statearr_26963_27027[(2)] = null);

(statearr_26963_27027[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26951 === (11))){
var inst_26925 = (state_26950[(2)]);
var state_26950__$1 = (function (){var statearr_26964 = state_26950;
(statearr_26964[(10)] = inst_26925);

return statearr_26964;
})();
var statearr_26965_27028 = state_26950__$1;
(statearr_26965_27028[(2)] = null);

(statearr_26965_27028[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26951 === (9))){
var state_26950__$1 = state_26950;
var statearr_26966_27029 = state_26950__$1;
(statearr_26966_27029[(2)] = null);

(statearr_26966_27029[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26951 === (5))){
var state_26950__$1 = state_26950;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26967_27030 = state_26950__$1;
(statearr_26967_27030[(1)] = (8));

} else {
var statearr_26968_27031 = state_26950__$1;
(statearr_26968_27031[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26951 === (14))){
var inst_26928 = (state_26950[(8)]);
var inst_26930 = (state_26950[(11)]);
var inst_26928__$1 = (state_26950[(2)]);
var inst_26929 = (inst_26928__$1 == null);
var inst_26930__$1 = cljs.core.not.call(null,inst_26929);
var state_26950__$1 = (function (){var statearr_26969 = state_26950;
(statearr_26969[(8)] = inst_26928__$1);

(statearr_26969[(11)] = inst_26930__$1);

return statearr_26969;
})();
if(inst_26930__$1){
var statearr_26970_27032 = state_26950__$1;
(statearr_26970_27032[(1)] = (15));

} else {
var statearr_26971_27033 = state_26950__$1;
(statearr_26971_27033[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26951 === (16))){
var inst_26930 = (state_26950[(11)]);
var state_26950__$1 = state_26950;
var statearr_26972_27034 = state_26950__$1;
(statearr_26972_27034[(2)] = inst_26930);

(statearr_26972_27034[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26951 === (10))){
var inst_26922 = (state_26950[(2)]);
var state_26950__$1 = state_26950;
var statearr_26973_27035 = state_26950__$1;
(statearr_26973_27035[(2)] = inst_26922);

(statearr_26973_27035[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26951 === (18))){
var inst_26933 = (state_26950[(2)]);
var state_26950__$1 = state_26950;
var statearr_26974_27036 = state_26950__$1;
(statearr_26974_27036[(2)] = inst_26933);

(statearr_26974_27036[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26951 === (8))){
var inst_26919 = cljs.core.async.close_BANG_.call(null,to);
var state_26950__$1 = state_26950;
var statearr_26975_27037 = state_26950__$1;
(statearr_26975_27037[(2)] = inst_26919);

(statearr_26975_27037[(1)] = (10));


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
});})(c__21099__auto__,jobs,results,process,async))
;
return ((function (switch__21037__auto__,c__21099__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21038__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21038__auto____0 = (function (){
var statearr_26979 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26979[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21038__auto__);

(statearr_26979[(1)] = (1));

return statearr_26979;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21038__auto____1 = (function (state_26950){
while(true){
var ret_value__21039__auto__ = (function (){try{while(true){
var result__21040__auto__ = switch__21037__auto__.call(null,state_26950);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21040__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21040__auto__;
}
break;
}
}catch (e26980){if((e26980 instanceof Object)){
var ex__21041__auto__ = e26980;
var statearr_26981_27038 = state_26950;
(statearr_26981_27038[(5)] = ex__21041__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26950);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26980;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21039__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27039 = state_26950;
state_26950 = G__27039;
continue;
} else {
return ret_value__21039__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21038__auto__ = function(state_26950){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21038__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21038__auto____1.call(this,state_26950);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21038__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21038__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21038__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21038__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21038__auto__;
})()
;})(switch__21037__auto__,c__21099__auto__,jobs,results,process,async))
})();
var state__21101__auto__ = (function (){var statearr_26982 = f__21100__auto__.call(null);
(statearr_26982[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21099__auto__);

return statearr_26982;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21101__auto__);
});})(c__21099__auto__,jobs,results,process,async))
);

return c__21099__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the async function af, with parallelism n. af
 * must be a function of two arguments, the first an input value and
 * the second a channel on which to place the result(s). af must close!
 * the channel before returning.  The presumption is that af will
 * return immediately, having launched some asynchronous operation
 * whose completion/callback will manipulate the result channel. Outputs
 * will be returned in order relative to  the inputs. By default, the to
 * channel will be closed when the from channel closes, but can be
 * determined by the close?  parameter. Will stop consuming the from
 * channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(){
var G__27041 = arguments.length;
switch (G__27041) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the transducer xf, with parallelism n. Because
 * it is parallel, the transducer will be applied independently to each
 * element, not across elements, and may produce zero or more outputs
 * per input.  Outputs will be returned in order relative to the
 * inputs. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes.
 * 
 * Note this is supplied for API compatibility with the Clojure version.
 * Values of N > 1 will not result in actual concurrency in a
 * single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(){
var G__27044 = arguments.length;
switch (G__27044) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 * channels, the first of which will contain the values for which the
 * predicate returned true, the second those for which it returned
 * false.
 * 
 * The out channels will be unbuffered by default, or two buf-or-ns can
 * be supplied. The channels will close after the source channel has
 * closed.
 */
cljs.core.async.split = (function cljs$core$async$split(){
var G__27047 = arguments.length;
switch (G__27047) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__21099__auto___27099 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21099__auto___27099,tc,fc){
return (function (){
var f__21100__auto__ = (function (){var switch__21037__auto__ = ((function (c__21099__auto___27099,tc,fc){
return (function (state_27073){
var state_val_27074 = (state_27073[(1)]);
if((state_val_27074 === (7))){
var inst_27069 = (state_27073[(2)]);
var state_27073__$1 = state_27073;
var statearr_27075_27100 = state_27073__$1;
(statearr_27075_27100[(2)] = inst_27069);

(statearr_27075_27100[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27074 === (1))){
var state_27073__$1 = state_27073;
var statearr_27076_27101 = state_27073__$1;
(statearr_27076_27101[(2)] = null);

(statearr_27076_27101[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27074 === (4))){
var inst_27050 = (state_27073[(7)]);
var inst_27050__$1 = (state_27073[(2)]);
var inst_27051 = (inst_27050__$1 == null);
var state_27073__$1 = (function (){var statearr_27077 = state_27073;
(statearr_27077[(7)] = inst_27050__$1);

return statearr_27077;
})();
if(cljs.core.truth_(inst_27051)){
var statearr_27078_27102 = state_27073__$1;
(statearr_27078_27102[(1)] = (5));

} else {
var statearr_27079_27103 = state_27073__$1;
(statearr_27079_27103[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27074 === (13))){
var state_27073__$1 = state_27073;
var statearr_27080_27104 = state_27073__$1;
(statearr_27080_27104[(2)] = null);

(statearr_27080_27104[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27074 === (6))){
var inst_27050 = (state_27073[(7)]);
var inst_27056 = p.call(null,inst_27050);
var state_27073__$1 = state_27073;
if(cljs.core.truth_(inst_27056)){
var statearr_27081_27105 = state_27073__$1;
(statearr_27081_27105[(1)] = (9));

} else {
var statearr_27082_27106 = state_27073__$1;
(statearr_27082_27106[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27074 === (3))){
var inst_27071 = (state_27073[(2)]);
var state_27073__$1 = state_27073;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27073__$1,inst_27071);
} else {
if((state_val_27074 === (12))){
var state_27073__$1 = state_27073;
var statearr_27083_27107 = state_27073__$1;
(statearr_27083_27107[(2)] = null);

(statearr_27083_27107[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27074 === (2))){
var state_27073__$1 = state_27073;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27073__$1,(4),ch);
} else {
if((state_val_27074 === (11))){
var inst_27050 = (state_27073[(7)]);
var inst_27060 = (state_27073[(2)]);
var state_27073__$1 = state_27073;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27073__$1,(8),inst_27060,inst_27050);
} else {
if((state_val_27074 === (9))){
var state_27073__$1 = state_27073;
var statearr_27084_27108 = state_27073__$1;
(statearr_27084_27108[(2)] = tc);

(statearr_27084_27108[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27074 === (5))){
var inst_27053 = cljs.core.async.close_BANG_.call(null,tc);
var inst_27054 = cljs.core.async.close_BANG_.call(null,fc);
var state_27073__$1 = (function (){var statearr_27085 = state_27073;
(statearr_27085[(8)] = inst_27053);

return statearr_27085;
})();
var statearr_27086_27109 = state_27073__$1;
(statearr_27086_27109[(2)] = inst_27054);

(statearr_27086_27109[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27074 === (14))){
var inst_27067 = (state_27073[(2)]);
var state_27073__$1 = state_27073;
var statearr_27087_27110 = state_27073__$1;
(statearr_27087_27110[(2)] = inst_27067);

(statearr_27087_27110[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27074 === (10))){
var state_27073__$1 = state_27073;
var statearr_27088_27111 = state_27073__$1;
(statearr_27088_27111[(2)] = fc);

(statearr_27088_27111[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27074 === (8))){
var inst_27062 = (state_27073[(2)]);
var state_27073__$1 = state_27073;
if(cljs.core.truth_(inst_27062)){
var statearr_27089_27112 = state_27073__$1;
(statearr_27089_27112[(1)] = (12));

} else {
var statearr_27090_27113 = state_27073__$1;
(statearr_27090_27113[(1)] = (13));

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
});})(c__21099__auto___27099,tc,fc))
;
return ((function (switch__21037__auto__,c__21099__auto___27099,tc,fc){
return (function() {
var cljs$core$async$state_machine__21038__auto__ = null;
var cljs$core$async$state_machine__21038__auto____0 = (function (){
var statearr_27094 = [null,null,null,null,null,null,null,null,null];
(statearr_27094[(0)] = cljs$core$async$state_machine__21038__auto__);

(statearr_27094[(1)] = (1));

return statearr_27094;
});
var cljs$core$async$state_machine__21038__auto____1 = (function (state_27073){
while(true){
var ret_value__21039__auto__ = (function (){try{while(true){
var result__21040__auto__ = switch__21037__auto__.call(null,state_27073);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21040__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21040__auto__;
}
break;
}
}catch (e27095){if((e27095 instanceof Object)){
var ex__21041__auto__ = e27095;
var statearr_27096_27114 = state_27073;
(statearr_27096_27114[(5)] = ex__21041__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27073);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27095;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21039__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27115 = state_27073;
state_27073 = G__27115;
continue;
} else {
return ret_value__21039__auto__;
}
break;
}
});
cljs$core$async$state_machine__21038__auto__ = function(state_27073){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21038__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21038__auto____1.call(this,state_27073);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21038__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21038__auto____0;
cljs$core$async$state_machine__21038__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21038__auto____1;
return cljs$core$async$state_machine__21038__auto__;
})()
;})(switch__21037__auto__,c__21099__auto___27099,tc,fc))
})();
var state__21101__auto__ = (function (){var statearr_27097 = f__21100__auto__.call(null);
(statearr_27097[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21099__auto___27099);

return statearr_27097;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21101__auto__);
});})(c__21099__auto___27099,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 * the single result of applying f to init and the first item from the
 * channel, then applying f to that result and the 2nd item, etc. If
 * the channel closes without yielding items, returns init and f is not
 * called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__21099__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21099__auto__){
return (function (){
var f__21100__auto__ = (function (){var switch__21037__auto__ = ((function (c__21099__auto__){
return (function (state_27162){
var state_val_27163 = (state_27162[(1)]);
if((state_val_27163 === (1))){
var inst_27148 = init;
var state_27162__$1 = (function (){var statearr_27164 = state_27162;
(statearr_27164[(7)] = inst_27148);

return statearr_27164;
})();
var statearr_27165_27180 = state_27162__$1;
(statearr_27165_27180[(2)] = null);

(statearr_27165_27180[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27163 === (2))){
var state_27162__$1 = state_27162;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27162__$1,(4),ch);
} else {
if((state_val_27163 === (3))){
var inst_27160 = (state_27162[(2)]);
var state_27162__$1 = state_27162;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27162__$1,inst_27160);
} else {
if((state_val_27163 === (4))){
var inst_27151 = (state_27162[(8)]);
var inst_27151__$1 = (state_27162[(2)]);
var inst_27152 = (inst_27151__$1 == null);
var state_27162__$1 = (function (){var statearr_27166 = state_27162;
(statearr_27166[(8)] = inst_27151__$1);

return statearr_27166;
})();
if(cljs.core.truth_(inst_27152)){
var statearr_27167_27181 = state_27162__$1;
(statearr_27167_27181[(1)] = (5));

} else {
var statearr_27168_27182 = state_27162__$1;
(statearr_27168_27182[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27163 === (5))){
var inst_27148 = (state_27162[(7)]);
var state_27162__$1 = state_27162;
var statearr_27169_27183 = state_27162__$1;
(statearr_27169_27183[(2)] = inst_27148);

(statearr_27169_27183[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27163 === (6))){
var inst_27148 = (state_27162[(7)]);
var inst_27151 = (state_27162[(8)]);
var inst_27155 = f.call(null,inst_27148,inst_27151);
var inst_27148__$1 = inst_27155;
var state_27162__$1 = (function (){var statearr_27170 = state_27162;
(statearr_27170[(7)] = inst_27148__$1);

return statearr_27170;
})();
var statearr_27171_27184 = state_27162__$1;
(statearr_27171_27184[(2)] = null);

(statearr_27171_27184[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27163 === (7))){
var inst_27158 = (state_27162[(2)]);
var state_27162__$1 = state_27162;
var statearr_27172_27185 = state_27162__$1;
(statearr_27172_27185[(2)] = inst_27158);

(statearr_27172_27185[(1)] = (3));


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
});})(c__21099__auto__))
;
return ((function (switch__21037__auto__,c__21099__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__21038__auto__ = null;
var cljs$core$async$reduce_$_state_machine__21038__auto____0 = (function (){
var statearr_27176 = [null,null,null,null,null,null,null,null,null];
(statearr_27176[(0)] = cljs$core$async$reduce_$_state_machine__21038__auto__);

(statearr_27176[(1)] = (1));

return statearr_27176;
});
var cljs$core$async$reduce_$_state_machine__21038__auto____1 = (function (state_27162){
while(true){
var ret_value__21039__auto__ = (function (){try{while(true){
var result__21040__auto__ = switch__21037__auto__.call(null,state_27162);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21040__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21040__auto__;
}
break;
}
}catch (e27177){if((e27177 instanceof Object)){
var ex__21041__auto__ = e27177;
var statearr_27178_27186 = state_27162;
(statearr_27178_27186[(5)] = ex__21041__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27162);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27177;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21039__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27187 = state_27162;
state_27162 = G__27187;
continue;
} else {
return ret_value__21039__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__21038__auto__ = function(state_27162){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__21038__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__21038__auto____1.call(this,state_27162);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__21038__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__21038__auto____0;
cljs$core$async$reduce_$_state_machine__21038__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__21038__auto____1;
return cljs$core$async$reduce_$_state_machine__21038__auto__;
})()
;})(switch__21037__auto__,c__21099__auto__))
})();
var state__21101__auto__ = (function (){var statearr_27179 = f__21100__auto__.call(null);
(statearr_27179[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21099__auto__);

return statearr_27179;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21101__auto__);
});})(c__21099__auto__))
);

return c__21099__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 * By default the channel will be closed after the items are copied,
 * but can be determined by the close? parameter.
 * 
 * Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(){
var G__27189 = arguments.length;
switch (G__27189) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__21099__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21099__auto__){
return (function (){
var f__21100__auto__ = (function (){var switch__21037__auto__ = ((function (c__21099__auto__){
return (function (state_27214){
var state_val_27215 = (state_27214[(1)]);
if((state_val_27215 === (7))){
var inst_27196 = (state_27214[(2)]);
var state_27214__$1 = state_27214;
var statearr_27216_27240 = state_27214__$1;
(statearr_27216_27240[(2)] = inst_27196);

(statearr_27216_27240[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27215 === (1))){
var inst_27190 = cljs.core.seq.call(null,coll);
var inst_27191 = inst_27190;
var state_27214__$1 = (function (){var statearr_27217 = state_27214;
(statearr_27217[(7)] = inst_27191);

return statearr_27217;
})();
var statearr_27218_27241 = state_27214__$1;
(statearr_27218_27241[(2)] = null);

(statearr_27218_27241[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27215 === (4))){
var inst_27191 = (state_27214[(7)]);
var inst_27194 = cljs.core.first.call(null,inst_27191);
var state_27214__$1 = state_27214;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27214__$1,(7),ch,inst_27194);
} else {
if((state_val_27215 === (13))){
var inst_27208 = (state_27214[(2)]);
var state_27214__$1 = state_27214;
var statearr_27219_27242 = state_27214__$1;
(statearr_27219_27242[(2)] = inst_27208);

(statearr_27219_27242[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27215 === (6))){
var inst_27199 = (state_27214[(2)]);
var state_27214__$1 = state_27214;
if(cljs.core.truth_(inst_27199)){
var statearr_27220_27243 = state_27214__$1;
(statearr_27220_27243[(1)] = (8));

} else {
var statearr_27221_27244 = state_27214__$1;
(statearr_27221_27244[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27215 === (3))){
var inst_27212 = (state_27214[(2)]);
var state_27214__$1 = state_27214;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27214__$1,inst_27212);
} else {
if((state_val_27215 === (12))){
var state_27214__$1 = state_27214;
var statearr_27222_27245 = state_27214__$1;
(statearr_27222_27245[(2)] = null);

(statearr_27222_27245[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27215 === (2))){
var inst_27191 = (state_27214[(7)]);
var state_27214__$1 = state_27214;
if(cljs.core.truth_(inst_27191)){
var statearr_27223_27246 = state_27214__$1;
(statearr_27223_27246[(1)] = (4));

} else {
var statearr_27224_27247 = state_27214__$1;
(statearr_27224_27247[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27215 === (11))){
var inst_27205 = cljs.core.async.close_BANG_.call(null,ch);
var state_27214__$1 = state_27214;
var statearr_27225_27248 = state_27214__$1;
(statearr_27225_27248[(2)] = inst_27205);

(statearr_27225_27248[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27215 === (9))){
var state_27214__$1 = state_27214;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27226_27249 = state_27214__$1;
(statearr_27226_27249[(1)] = (11));

} else {
var statearr_27227_27250 = state_27214__$1;
(statearr_27227_27250[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27215 === (5))){
var inst_27191 = (state_27214[(7)]);
var state_27214__$1 = state_27214;
var statearr_27228_27251 = state_27214__$1;
(statearr_27228_27251[(2)] = inst_27191);

(statearr_27228_27251[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27215 === (10))){
var inst_27210 = (state_27214[(2)]);
var state_27214__$1 = state_27214;
var statearr_27229_27252 = state_27214__$1;
(statearr_27229_27252[(2)] = inst_27210);

(statearr_27229_27252[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27215 === (8))){
var inst_27191 = (state_27214[(7)]);
var inst_27201 = cljs.core.next.call(null,inst_27191);
var inst_27191__$1 = inst_27201;
var state_27214__$1 = (function (){var statearr_27230 = state_27214;
(statearr_27230[(7)] = inst_27191__$1);

return statearr_27230;
})();
var statearr_27231_27253 = state_27214__$1;
(statearr_27231_27253[(2)] = null);

(statearr_27231_27253[(1)] = (2));


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
});})(c__21099__auto__))
;
return ((function (switch__21037__auto__,c__21099__auto__){
return (function() {
var cljs$core$async$state_machine__21038__auto__ = null;
var cljs$core$async$state_machine__21038__auto____0 = (function (){
var statearr_27235 = [null,null,null,null,null,null,null,null];
(statearr_27235[(0)] = cljs$core$async$state_machine__21038__auto__);

(statearr_27235[(1)] = (1));

return statearr_27235;
});
var cljs$core$async$state_machine__21038__auto____1 = (function (state_27214){
while(true){
var ret_value__21039__auto__ = (function (){try{while(true){
var result__21040__auto__ = switch__21037__auto__.call(null,state_27214);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21040__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21040__auto__;
}
break;
}
}catch (e27236){if((e27236 instanceof Object)){
var ex__21041__auto__ = e27236;
var statearr_27237_27254 = state_27214;
(statearr_27237_27254[(5)] = ex__21041__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27214);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27236;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21039__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27255 = state_27214;
state_27214 = G__27255;
continue;
} else {
return ret_value__21039__auto__;
}
break;
}
});
cljs$core$async$state_machine__21038__auto__ = function(state_27214){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21038__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21038__auto____1.call(this,state_27214);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21038__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21038__auto____0;
cljs$core$async$state_machine__21038__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21038__auto____1;
return cljs$core$async$state_machine__21038__auto__;
})()
;})(switch__21037__auto__,c__21099__auto__))
})();
var state__21101__auto__ = (function (){var statearr_27238 = f__21100__auto__.call(null);
(statearr_27238[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21099__auto__);

return statearr_27238;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21101__auto__);
});})(c__21099__auto__))
);

return c__21099__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 * closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj27257 = {};
return obj27257;
})();

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((function (){var and__18075__auto__ = _;
if(and__18075__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__18075__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__18723__auto__ = (((_ == null))?null:_);
return (function (){var or__18087__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__18723__auto__)]);
if(or__18087__auto__){
return or__18087__auto__;
} else {
var or__18087__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__18087__auto____$1){
return or__18087__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj27259 = {};
return obj27259;
})();

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__18075__auto__ = m;
if(and__18075__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__18075__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__18723__auto__ = (((m == null))?null:m);
return (function (){var or__18087__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__18723__auto__)]);
if(or__18087__auto__){
return or__18087__auto__;
} else {
var or__18087__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__18087__auto____$1){
return or__18087__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((function (){var and__18075__auto__ = m;
if(and__18075__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__18075__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__18723__auto__ = (((m == null))?null:m);
return (function (){var or__18087__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__18723__auto__)]);
if(or__18087__auto__){
return or__18087__auto__;
} else {
var or__18087__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__18087__auto____$1){
return or__18087__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((function (){var and__18075__auto__ = m;
if(and__18075__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__18075__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__18723__auto__ = (((m == null))?null:m);
return (function (){var or__18087__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__18723__auto__)]);
if(or__18087__auto__){
return or__18087__auto__;
} else {
var or__18087__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__18087__auto____$1){
return or__18087__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 * containing copies of the channel can be created with 'tap', and
 * detached with 'untap'.
 * 
 * Each item is distributed to all taps in parallel and synchronously,
 * i.e. each tap must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow taps from holding up the mult.
 * 
 * Items received when there are no taps get dropped.
 * 
 * If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t27481 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27481 = (function (mult,ch,cs,meta27482){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta27482 = meta27482;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t27481.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_27483,meta27482__$1){
var self__ = this;
var _27483__$1 = this;
return (new cljs.core.async.t27481(self__.mult,self__.ch,self__.cs,meta27482__$1));
});})(cs))
;

cljs.core.async.t27481.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_27483){
var self__ = this;
var _27483__$1 = this;
return self__.meta27482;
});})(cs))
;

cljs.core.async.t27481.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t27481.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t27481.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t27481.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t27481.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t27481.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t27481.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta27482","meta27482",-1167989456,null)], null);
});})(cs))
;

cljs.core.async.t27481.cljs$lang$type = true;

cljs.core.async.t27481.cljs$lang$ctorStr = "cljs.core.async/t27481";

cljs.core.async.t27481.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__18666__auto__,writer__18667__auto__,opt__18668__auto__){
return cljs.core._write.call(null,writer__18667__auto__,"cljs.core.async/t27481");
});})(cs))
;

cljs.core.async.__GT_t27481 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t27481(mult__$1,ch__$1,cs__$1,meta27482){
return (new cljs.core.async.t27481(mult__$1,ch__$1,cs__$1,meta27482));
});})(cs))
;

}

return (new cljs.core.async.t27481(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__21099__auto___27702 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21099__auto___27702,cs,m,dchan,dctr,done){
return (function (){
var f__21100__auto__ = (function (){var switch__21037__auto__ = ((function (c__21099__auto___27702,cs,m,dchan,dctr,done){
return (function (state_27614){
var state_val_27615 = (state_27614[(1)]);
if((state_val_27615 === (7))){
var inst_27610 = (state_27614[(2)]);
var state_27614__$1 = state_27614;
var statearr_27616_27703 = state_27614__$1;
(statearr_27616_27703[(2)] = inst_27610);

(statearr_27616_27703[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27615 === (20))){
var inst_27515 = (state_27614[(7)]);
var inst_27525 = cljs.core.first.call(null,inst_27515);
var inst_27526 = cljs.core.nth.call(null,inst_27525,(0),null);
var inst_27527 = cljs.core.nth.call(null,inst_27525,(1),null);
var state_27614__$1 = (function (){var statearr_27617 = state_27614;
(statearr_27617[(8)] = inst_27526);

return statearr_27617;
})();
if(cljs.core.truth_(inst_27527)){
var statearr_27618_27704 = state_27614__$1;
(statearr_27618_27704[(1)] = (22));

} else {
var statearr_27619_27705 = state_27614__$1;
(statearr_27619_27705[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27615 === (27))){
var inst_27555 = (state_27614[(9)]);
var inst_27557 = (state_27614[(10)]);
var inst_27562 = (state_27614[(11)]);
var inst_27486 = (state_27614[(12)]);
var inst_27562__$1 = cljs.core._nth.call(null,inst_27555,inst_27557);
var inst_27563 = cljs.core.async.put_BANG_.call(null,inst_27562__$1,inst_27486,done);
var state_27614__$1 = (function (){var statearr_27620 = state_27614;
(statearr_27620[(11)] = inst_27562__$1);

return statearr_27620;
})();
if(cljs.core.truth_(inst_27563)){
var statearr_27621_27706 = state_27614__$1;
(statearr_27621_27706[(1)] = (30));

} else {
var statearr_27622_27707 = state_27614__$1;
(statearr_27622_27707[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27615 === (1))){
var state_27614__$1 = state_27614;
var statearr_27623_27708 = state_27614__$1;
(statearr_27623_27708[(2)] = null);

(statearr_27623_27708[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27615 === (24))){
var inst_27515 = (state_27614[(7)]);
var inst_27532 = (state_27614[(2)]);
var inst_27533 = cljs.core.next.call(null,inst_27515);
var inst_27495 = inst_27533;
var inst_27496 = null;
var inst_27497 = (0);
var inst_27498 = (0);
var state_27614__$1 = (function (){var statearr_27624 = state_27614;
(statearr_27624[(13)] = inst_27498);

(statearr_27624[(14)] = inst_27497);

(statearr_27624[(15)] = inst_27496);

(statearr_27624[(16)] = inst_27495);

(statearr_27624[(17)] = inst_27532);

return statearr_27624;
})();
var statearr_27625_27709 = state_27614__$1;
(statearr_27625_27709[(2)] = null);

(statearr_27625_27709[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27615 === (39))){
var state_27614__$1 = state_27614;
var statearr_27629_27710 = state_27614__$1;
(statearr_27629_27710[(2)] = null);

(statearr_27629_27710[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27615 === (4))){
var inst_27486 = (state_27614[(12)]);
var inst_27486__$1 = (state_27614[(2)]);
var inst_27487 = (inst_27486__$1 == null);
var state_27614__$1 = (function (){var statearr_27630 = state_27614;
(statearr_27630[(12)] = inst_27486__$1);

return statearr_27630;
})();
if(cljs.core.truth_(inst_27487)){
var statearr_27631_27711 = state_27614__$1;
(statearr_27631_27711[(1)] = (5));

} else {
var statearr_27632_27712 = state_27614__$1;
(statearr_27632_27712[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27615 === (15))){
var inst_27498 = (state_27614[(13)]);
var inst_27497 = (state_27614[(14)]);
var inst_27496 = (state_27614[(15)]);
var inst_27495 = (state_27614[(16)]);
var inst_27511 = (state_27614[(2)]);
var inst_27512 = (inst_27498 + (1));
var tmp27626 = inst_27497;
var tmp27627 = inst_27496;
var tmp27628 = inst_27495;
var inst_27495__$1 = tmp27628;
var inst_27496__$1 = tmp27627;
var inst_27497__$1 = tmp27626;
var inst_27498__$1 = inst_27512;
var state_27614__$1 = (function (){var statearr_27633 = state_27614;
(statearr_27633[(13)] = inst_27498__$1);

(statearr_27633[(14)] = inst_27497__$1);

(statearr_27633[(15)] = inst_27496__$1);

(statearr_27633[(16)] = inst_27495__$1);

(statearr_27633[(18)] = inst_27511);

return statearr_27633;
})();
var statearr_27634_27713 = state_27614__$1;
(statearr_27634_27713[(2)] = null);

(statearr_27634_27713[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27615 === (21))){
var inst_27536 = (state_27614[(2)]);
var state_27614__$1 = state_27614;
var statearr_27638_27714 = state_27614__$1;
(statearr_27638_27714[(2)] = inst_27536);

(statearr_27638_27714[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27615 === (31))){
var inst_27562 = (state_27614[(11)]);
var inst_27566 = done.call(null,null);
var inst_27567 = cljs.core.async.untap_STAR_.call(null,m,inst_27562);
var state_27614__$1 = (function (){var statearr_27639 = state_27614;
(statearr_27639[(19)] = inst_27566);

return statearr_27639;
})();
var statearr_27640_27715 = state_27614__$1;
(statearr_27640_27715[(2)] = inst_27567);

(statearr_27640_27715[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27615 === (32))){
var inst_27556 = (state_27614[(20)]);
var inst_27555 = (state_27614[(9)]);
var inst_27554 = (state_27614[(21)]);
var inst_27557 = (state_27614[(10)]);
var inst_27569 = (state_27614[(2)]);
var inst_27570 = (inst_27557 + (1));
var tmp27635 = inst_27556;
var tmp27636 = inst_27555;
var tmp27637 = inst_27554;
var inst_27554__$1 = tmp27637;
var inst_27555__$1 = tmp27636;
var inst_27556__$1 = tmp27635;
var inst_27557__$1 = inst_27570;
var state_27614__$1 = (function (){var statearr_27641 = state_27614;
(statearr_27641[(20)] = inst_27556__$1);

(statearr_27641[(9)] = inst_27555__$1);

(statearr_27641[(22)] = inst_27569);

(statearr_27641[(21)] = inst_27554__$1);

(statearr_27641[(10)] = inst_27557__$1);

return statearr_27641;
})();
var statearr_27642_27716 = state_27614__$1;
(statearr_27642_27716[(2)] = null);

(statearr_27642_27716[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27615 === (40))){
var inst_27582 = (state_27614[(23)]);
var inst_27586 = done.call(null,null);
var inst_27587 = cljs.core.async.untap_STAR_.call(null,m,inst_27582);
var state_27614__$1 = (function (){var statearr_27643 = state_27614;
(statearr_27643[(24)] = inst_27586);

return statearr_27643;
})();
var statearr_27644_27717 = state_27614__$1;
(statearr_27644_27717[(2)] = inst_27587);

(statearr_27644_27717[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27615 === (33))){
var inst_27573 = (state_27614[(25)]);
var inst_27575 = cljs.core.chunked_seq_QMARK_.call(null,inst_27573);
var state_27614__$1 = state_27614;
if(inst_27575){
var statearr_27645_27718 = state_27614__$1;
(statearr_27645_27718[(1)] = (36));

} else {
var statearr_27646_27719 = state_27614__$1;
(statearr_27646_27719[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27615 === (13))){
var inst_27505 = (state_27614[(26)]);
var inst_27508 = cljs.core.async.close_BANG_.call(null,inst_27505);
var state_27614__$1 = state_27614;
var statearr_27647_27720 = state_27614__$1;
(statearr_27647_27720[(2)] = inst_27508);

(statearr_27647_27720[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27615 === (22))){
var inst_27526 = (state_27614[(8)]);
var inst_27529 = cljs.core.async.close_BANG_.call(null,inst_27526);
var state_27614__$1 = state_27614;
var statearr_27648_27721 = state_27614__$1;
(statearr_27648_27721[(2)] = inst_27529);

(statearr_27648_27721[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27615 === (36))){
var inst_27573 = (state_27614[(25)]);
var inst_27577 = cljs.core.chunk_first.call(null,inst_27573);
var inst_27578 = cljs.core.chunk_rest.call(null,inst_27573);
var inst_27579 = cljs.core.count.call(null,inst_27577);
var inst_27554 = inst_27578;
var inst_27555 = inst_27577;
var inst_27556 = inst_27579;
var inst_27557 = (0);
var state_27614__$1 = (function (){var statearr_27649 = state_27614;
(statearr_27649[(20)] = inst_27556);

(statearr_27649[(9)] = inst_27555);

(statearr_27649[(21)] = inst_27554);

(statearr_27649[(10)] = inst_27557);

return statearr_27649;
})();
var statearr_27650_27722 = state_27614__$1;
(statearr_27650_27722[(2)] = null);

(statearr_27650_27722[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27615 === (41))){
var inst_27573 = (state_27614[(25)]);
var inst_27589 = (state_27614[(2)]);
var inst_27590 = cljs.core.next.call(null,inst_27573);
var inst_27554 = inst_27590;
var inst_27555 = null;
var inst_27556 = (0);
var inst_27557 = (0);
var state_27614__$1 = (function (){var statearr_27651 = state_27614;
(statearr_27651[(27)] = inst_27589);

(statearr_27651[(20)] = inst_27556);

(statearr_27651[(9)] = inst_27555);

(statearr_27651[(21)] = inst_27554);

(statearr_27651[(10)] = inst_27557);

return statearr_27651;
})();
var statearr_27652_27723 = state_27614__$1;
(statearr_27652_27723[(2)] = null);

(statearr_27652_27723[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27615 === (43))){
var state_27614__$1 = state_27614;
var statearr_27653_27724 = state_27614__$1;
(statearr_27653_27724[(2)] = null);

(statearr_27653_27724[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27615 === (29))){
var inst_27598 = (state_27614[(2)]);
var state_27614__$1 = state_27614;
var statearr_27654_27725 = state_27614__$1;
(statearr_27654_27725[(2)] = inst_27598);

(statearr_27654_27725[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27615 === (44))){
var inst_27607 = (state_27614[(2)]);
var state_27614__$1 = (function (){var statearr_27655 = state_27614;
(statearr_27655[(28)] = inst_27607);

return statearr_27655;
})();
var statearr_27656_27726 = state_27614__$1;
(statearr_27656_27726[(2)] = null);

(statearr_27656_27726[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27615 === (6))){
var inst_27546 = (state_27614[(29)]);
var inst_27545 = cljs.core.deref.call(null,cs);
var inst_27546__$1 = cljs.core.keys.call(null,inst_27545);
var inst_27547 = cljs.core.count.call(null,inst_27546__$1);
var inst_27548 = cljs.core.reset_BANG_.call(null,dctr,inst_27547);
var inst_27553 = cljs.core.seq.call(null,inst_27546__$1);
var inst_27554 = inst_27553;
var inst_27555 = null;
var inst_27556 = (0);
var inst_27557 = (0);
var state_27614__$1 = (function (){var statearr_27657 = state_27614;
(statearr_27657[(20)] = inst_27556);

(statearr_27657[(9)] = inst_27555);

(statearr_27657[(29)] = inst_27546__$1);

(statearr_27657[(30)] = inst_27548);

(statearr_27657[(21)] = inst_27554);

(statearr_27657[(10)] = inst_27557);

return statearr_27657;
})();
var statearr_27658_27727 = state_27614__$1;
(statearr_27658_27727[(2)] = null);

(statearr_27658_27727[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27615 === (28))){
var inst_27554 = (state_27614[(21)]);
var inst_27573 = (state_27614[(25)]);
var inst_27573__$1 = cljs.core.seq.call(null,inst_27554);
var state_27614__$1 = (function (){var statearr_27659 = state_27614;
(statearr_27659[(25)] = inst_27573__$1);

return statearr_27659;
})();
if(inst_27573__$1){
var statearr_27660_27728 = state_27614__$1;
(statearr_27660_27728[(1)] = (33));

} else {
var statearr_27661_27729 = state_27614__$1;
(statearr_27661_27729[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27615 === (25))){
var inst_27556 = (state_27614[(20)]);
var inst_27557 = (state_27614[(10)]);
var inst_27559 = (inst_27557 < inst_27556);
var inst_27560 = inst_27559;
var state_27614__$1 = state_27614;
if(cljs.core.truth_(inst_27560)){
var statearr_27662_27730 = state_27614__$1;
(statearr_27662_27730[(1)] = (27));

} else {
var statearr_27663_27731 = state_27614__$1;
(statearr_27663_27731[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27615 === (34))){
var state_27614__$1 = state_27614;
var statearr_27664_27732 = state_27614__$1;
(statearr_27664_27732[(2)] = null);

(statearr_27664_27732[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27615 === (17))){
var state_27614__$1 = state_27614;
var statearr_27665_27733 = state_27614__$1;
(statearr_27665_27733[(2)] = null);

(statearr_27665_27733[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27615 === (3))){
var inst_27612 = (state_27614[(2)]);
var state_27614__$1 = state_27614;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27614__$1,inst_27612);
} else {
if((state_val_27615 === (12))){
var inst_27541 = (state_27614[(2)]);
var state_27614__$1 = state_27614;
var statearr_27666_27734 = state_27614__$1;
(statearr_27666_27734[(2)] = inst_27541);

(statearr_27666_27734[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27615 === (2))){
var state_27614__$1 = state_27614;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27614__$1,(4),ch);
} else {
if((state_val_27615 === (23))){
var state_27614__$1 = state_27614;
var statearr_27667_27735 = state_27614__$1;
(statearr_27667_27735[(2)] = null);

(statearr_27667_27735[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27615 === (35))){
var inst_27596 = (state_27614[(2)]);
var state_27614__$1 = state_27614;
var statearr_27668_27736 = state_27614__$1;
(statearr_27668_27736[(2)] = inst_27596);

(statearr_27668_27736[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27615 === (19))){
var inst_27515 = (state_27614[(7)]);
var inst_27519 = cljs.core.chunk_first.call(null,inst_27515);
var inst_27520 = cljs.core.chunk_rest.call(null,inst_27515);
var inst_27521 = cljs.core.count.call(null,inst_27519);
var inst_27495 = inst_27520;
var inst_27496 = inst_27519;
var inst_27497 = inst_27521;
var inst_27498 = (0);
var state_27614__$1 = (function (){var statearr_27669 = state_27614;
(statearr_27669[(13)] = inst_27498);

(statearr_27669[(14)] = inst_27497);

(statearr_27669[(15)] = inst_27496);

(statearr_27669[(16)] = inst_27495);

return statearr_27669;
})();
var statearr_27670_27737 = state_27614__$1;
(statearr_27670_27737[(2)] = null);

(statearr_27670_27737[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27615 === (11))){
var inst_27515 = (state_27614[(7)]);
var inst_27495 = (state_27614[(16)]);
var inst_27515__$1 = cljs.core.seq.call(null,inst_27495);
var state_27614__$1 = (function (){var statearr_27671 = state_27614;
(statearr_27671[(7)] = inst_27515__$1);

return statearr_27671;
})();
if(inst_27515__$1){
var statearr_27672_27738 = state_27614__$1;
(statearr_27672_27738[(1)] = (16));

} else {
var statearr_27673_27739 = state_27614__$1;
(statearr_27673_27739[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27615 === (9))){
var inst_27543 = (state_27614[(2)]);
var state_27614__$1 = state_27614;
var statearr_27674_27740 = state_27614__$1;
(statearr_27674_27740[(2)] = inst_27543);

(statearr_27674_27740[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27615 === (5))){
var inst_27493 = cljs.core.deref.call(null,cs);
var inst_27494 = cljs.core.seq.call(null,inst_27493);
var inst_27495 = inst_27494;
var inst_27496 = null;
var inst_27497 = (0);
var inst_27498 = (0);
var state_27614__$1 = (function (){var statearr_27675 = state_27614;
(statearr_27675[(13)] = inst_27498);

(statearr_27675[(14)] = inst_27497);

(statearr_27675[(15)] = inst_27496);

(statearr_27675[(16)] = inst_27495);

return statearr_27675;
})();
var statearr_27676_27741 = state_27614__$1;
(statearr_27676_27741[(2)] = null);

(statearr_27676_27741[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27615 === (14))){
var state_27614__$1 = state_27614;
var statearr_27677_27742 = state_27614__$1;
(statearr_27677_27742[(2)] = null);

(statearr_27677_27742[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27615 === (45))){
var inst_27604 = (state_27614[(2)]);
var state_27614__$1 = state_27614;
var statearr_27678_27743 = state_27614__$1;
(statearr_27678_27743[(2)] = inst_27604);

(statearr_27678_27743[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27615 === (26))){
var inst_27546 = (state_27614[(29)]);
var inst_27600 = (state_27614[(2)]);
var inst_27601 = cljs.core.seq.call(null,inst_27546);
var state_27614__$1 = (function (){var statearr_27679 = state_27614;
(statearr_27679[(31)] = inst_27600);

return statearr_27679;
})();
if(inst_27601){
var statearr_27680_27744 = state_27614__$1;
(statearr_27680_27744[(1)] = (42));

} else {
var statearr_27681_27745 = state_27614__$1;
(statearr_27681_27745[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27615 === (16))){
var inst_27515 = (state_27614[(7)]);
var inst_27517 = cljs.core.chunked_seq_QMARK_.call(null,inst_27515);
var state_27614__$1 = state_27614;
if(inst_27517){
var statearr_27682_27746 = state_27614__$1;
(statearr_27682_27746[(1)] = (19));

} else {
var statearr_27683_27747 = state_27614__$1;
(statearr_27683_27747[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27615 === (38))){
var inst_27593 = (state_27614[(2)]);
var state_27614__$1 = state_27614;
var statearr_27684_27748 = state_27614__$1;
(statearr_27684_27748[(2)] = inst_27593);

(statearr_27684_27748[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27615 === (30))){
var state_27614__$1 = state_27614;
var statearr_27685_27749 = state_27614__$1;
(statearr_27685_27749[(2)] = null);

(statearr_27685_27749[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27615 === (10))){
var inst_27498 = (state_27614[(13)]);
var inst_27496 = (state_27614[(15)]);
var inst_27504 = cljs.core._nth.call(null,inst_27496,inst_27498);
var inst_27505 = cljs.core.nth.call(null,inst_27504,(0),null);
var inst_27506 = cljs.core.nth.call(null,inst_27504,(1),null);
var state_27614__$1 = (function (){var statearr_27686 = state_27614;
(statearr_27686[(26)] = inst_27505);

return statearr_27686;
})();
if(cljs.core.truth_(inst_27506)){
var statearr_27687_27750 = state_27614__$1;
(statearr_27687_27750[(1)] = (13));

} else {
var statearr_27688_27751 = state_27614__$1;
(statearr_27688_27751[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27615 === (18))){
var inst_27539 = (state_27614[(2)]);
var state_27614__$1 = state_27614;
var statearr_27689_27752 = state_27614__$1;
(statearr_27689_27752[(2)] = inst_27539);

(statearr_27689_27752[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27615 === (42))){
var state_27614__$1 = state_27614;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27614__$1,(45),dchan);
} else {
if((state_val_27615 === (37))){
var inst_27582 = (state_27614[(23)]);
var inst_27573 = (state_27614[(25)]);
var inst_27486 = (state_27614[(12)]);
var inst_27582__$1 = cljs.core.first.call(null,inst_27573);
var inst_27583 = cljs.core.async.put_BANG_.call(null,inst_27582__$1,inst_27486,done);
var state_27614__$1 = (function (){var statearr_27690 = state_27614;
(statearr_27690[(23)] = inst_27582__$1);

return statearr_27690;
})();
if(cljs.core.truth_(inst_27583)){
var statearr_27691_27753 = state_27614__$1;
(statearr_27691_27753[(1)] = (39));

} else {
var statearr_27692_27754 = state_27614__$1;
(statearr_27692_27754[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27615 === (8))){
var inst_27498 = (state_27614[(13)]);
var inst_27497 = (state_27614[(14)]);
var inst_27500 = (inst_27498 < inst_27497);
var inst_27501 = inst_27500;
var state_27614__$1 = state_27614;
if(cljs.core.truth_(inst_27501)){
var statearr_27693_27755 = state_27614__$1;
(statearr_27693_27755[(1)] = (10));

} else {
var statearr_27694_27756 = state_27614__$1;
(statearr_27694_27756[(1)] = (11));

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
}
}
}
}
}
}
}
}
});})(c__21099__auto___27702,cs,m,dchan,dctr,done))
;
return ((function (switch__21037__auto__,c__21099__auto___27702,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__21038__auto__ = null;
var cljs$core$async$mult_$_state_machine__21038__auto____0 = (function (){
var statearr_27698 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27698[(0)] = cljs$core$async$mult_$_state_machine__21038__auto__);

(statearr_27698[(1)] = (1));

return statearr_27698;
});
var cljs$core$async$mult_$_state_machine__21038__auto____1 = (function (state_27614){
while(true){
var ret_value__21039__auto__ = (function (){try{while(true){
var result__21040__auto__ = switch__21037__auto__.call(null,state_27614);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21040__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21040__auto__;
}
break;
}
}catch (e27699){if((e27699 instanceof Object)){
var ex__21041__auto__ = e27699;
var statearr_27700_27757 = state_27614;
(statearr_27700_27757[(5)] = ex__21041__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27614);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27699;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21039__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27758 = state_27614;
state_27614 = G__27758;
continue;
} else {
return ret_value__21039__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__21038__auto__ = function(state_27614){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__21038__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__21038__auto____1.call(this,state_27614);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__21038__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__21038__auto____0;
cljs$core$async$mult_$_state_machine__21038__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__21038__auto____1;
return cljs$core$async$mult_$_state_machine__21038__auto__;
})()
;})(switch__21037__auto__,c__21099__auto___27702,cs,m,dchan,dctr,done))
})();
var state__21101__auto__ = (function (){var statearr_27701 = f__21100__auto__.call(null);
(statearr_27701[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21099__auto___27702);

return statearr_27701;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21101__auto__);
});})(c__21099__auto___27702,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(){
var G__27760 = arguments.length;
switch (G__27760) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

cljs.core.async.Mix = (function (){var obj27763 = {};
return obj27763;
})();

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((function (){var and__18075__auto__ = m;
if(and__18075__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__18075__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__18723__auto__ = (((m == null))?null:m);
return (function (){var or__18087__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__18723__auto__)]);
if(or__18087__auto__){
return or__18087__auto__;
} else {
var or__18087__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__18087__auto____$1){
return or__18087__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((function (){var and__18075__auto__ = m;
if(and__18075__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__18075__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__18723__auto__ = (((m == null))?null:m);
return (function (){var or__18087__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__18723__auto__)]);
if(or__18087__auto__){
return or__18087__auto__;
} else {
var or__18087__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__18087__auto____$1){
return or__18087__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((function (){var and__18075__auto__ = m;
if(and__18075__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__18075__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__18723__auto__ = (((m == null))?null:m);
return (function (){var or__18087__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__18723__auto__)]);
if(or__18087__auto__){
return or__18087__auto__;
} else {
var or__18087__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__18087__auto____$1){
return or__18087__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((function (){var and__18075__auto__ = m;
if(and__18075__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__18075__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__18723__auto__ = (((m == null))?null:m);
return (function (){var or__18087__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__18723__auto__)]);
if(or__18087__auto__){
return or__18087__auto__;
} else {
var or__18087__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__18087__auto____$1){
return or__18087__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((function (){var and__18075__auto__ = m;
if(and__18075__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__18075__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__18723__auto__ = (((m == null))?null:m);
return (function (){var or__18087__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__18723__auto__)]);
if(or__18087__auto__){
return or__18087__auto__;
} else {
var or__18087__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__18087__auto____$1){
return or__18087__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(){
var argseq__19127__auto__ = ((((3) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19127__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__27768){
var map__27769 = p__27768;
var map__27769__$1 = ((cljs.core.seq_QMARK_.call(null,map__27769))?cljs.core.apply.call(null,cljs.core.hash_map,map__27769):map__27769);
var opts = map__27769__$1;
var statearr_27770_27773 = state;
(statearr_27770_27773[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4423__auto__ = cljs.core.async.do_alts.call(null,((function (map__27769,map__27769__$1,opts){
return (function (val){
var statearr_27771_27774 = state;
(statearr_27771_27774[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__27769,map__27769__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4423__auto__)){
var cb = temp__4423__auto__;
var statearr_27772_27775 = state;
(statearr_27772_27775[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq27764){
var G__27765 = cljs.core.first.call(null,seq27764);
var seq27764__$1 = cljs.core.next.call(null,seq27764);
var G__27766 = cljs.core.first.call(null,seq27764__$1);
var seq27764__$2 = cljs.core.next.call(null,seq27764__$1);
var G__27767 = cljs.core.first.call(null,seq27764__$2);
var seq27764__$3 = cljs.core.next.call(null,seq27764__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__27765,G__27766,G__27767,seq27764__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 * be put on the supplied out channel. Input sources can be added to
 * the mix with 'admix', and removed with 'unmix'. A mix supports
 * soloing, muting and pausing multiple inputs atomically using
 * 'toggle', and can solo using either muting or pausing as determined
 * by 'solo-mode'.
 * 
 * Each channel can have zero or more boolean modes set via 'toggle':
 * 
 * :solo - when true, only this (ond other soloed) channel(s) will appear
 * in the mix output channel. :mute and :pause states of soloed
 * channels are ignored. If solo-mode is :mute, non-soloed
 * channels are muted, if :pause, non-soloed channels are
 * paused.
 * 
 * :mute - muted channels will have their contents consumed but not included in the mix
 * :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t27895 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27895 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta27896){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta27896 = meta27896;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t27895.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27897,meta27896__$1){
var self__ = this;
var _27897__$1 = this;
return (new cljs.core.async.t27895(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta27896__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27895.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27897){
var self__ = this;
var _27897__$1 = this;
return self__.meta27896;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27895.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t27895.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27895.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t27895.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27895.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27895.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27895.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27895.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27895.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta27896","meta27896",-450987348,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27895.cljs$lang$type = true;

cljs.core.async.t27895.cljs$lang$ctorStr = "cljs.core.async/t27895";

cljs.core.async.t27895.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__18666__auto__,writer__18667__auto__,opt__18668__auto__){
return cljs.core._write.call(null,writer__18667__auto__,"cljs.core.async/t27895");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t27895 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t27895(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta27896){
return (new cljs.core.async.t27895(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta27896));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t27895(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21099__auto___28014 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21099__auto___28014,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__21100__auto__ = (function (){var switch__21037__auto__ = ((function (c__21099__auto___28014,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_27967){
var state_val_27968 = (state_27967[(1)]);
if((state_val_27968 === (7))){
var inst_27911 = (state_27967[(7)]);
var inst_27916 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27911);
var state_27967__$1 = state_27967;
var statearr_27969_28015 = state_27967__$1;
(statearr_27969_28015[(2)] = inst_27916);

(statearr_27969_28015[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27968 === (20))){
var inst_27926 = (state_27967[(8)]);
var state_27967__$1 = state_27967;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27967__$1,(23),out,inst_27926);
} else {
if((state_val_27968 === (1))){
var inst_27901 = (state_27967[(9)]);
var inst_27901__$1 = calc_state.call(null);
var inst_27902 = cljs.core.seq_QMARK_.call(null,inst_27901__$1);
var state_27967__$1 = (function (){var statearr_27970 = state_27967;
(statearr_27970[(9)] = inst_27901__$1);

return statearr_27970;
})();
if(inst_27902){
var statearr_27971_28016 = state_27967__$1;
(statearr_27971_28016[(1)] = (2));

} else {
var statearr_27972_28017 = state_27967__$1;
(statearr_27972_28017[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27968 === (24))){
var inst_27919 = (state_27967[(10)]);
var inst_27911 = inst_27919;
var state_27967__$1 = (function (){var statearr_27973 = state_27967;
(statearr_27973[(7)] = inst_27911);

return statearr_27973;
})();
var statearr_27974_28018 = state_27967__$1;
(statearr_27974_28018[(2)] = null);

(statearr_27974_28018[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27968 === (4))){
var inst_27901 = (state_27967[(9)]);
var inst_27907 = (state_27967[(2)]);
var inst_27908 = cljs.core.get.call(null,inst_27907,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_27909 = cljs.core.get.call(null,inst_27907,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27910 = cljs.core.get.call(null,inst_27907,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_27911 = inst_27901;
var state_27967__$1 = (function (){var statearr_27975 = state_27967;
(statearr_27975[(11)] = inst_27910);

(statearr_27975[(7)] = inst_27911);

(statearr_27975[(12)] = inst_27908);

(statearr_27975[(13)] = inst_27909);

return statearr_27975;
})();
var statearr_27976_28019 = state_27967__$1;
(statearr_27976_28019[(2)] = null);

(statearr_27976_28019[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27968 === (15))){
var state_27967__$1 = state_27967;
var statearr_27977_28020 = state_27967__$1;
(statearr_27977_28020[(2)] = null);

(statearr_27977_28020[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27968 === (21))){
var inst_27919 = (state_27967[(10)]);
var inst_27911 = inst_27919;
var state_27967__$1 = (function (){var statearr_27978 = state_27967;
(statearr_27978[(7)] = inst_27911);

return statearr_27978;
})();
var statearr_27979_28021 = state_27967__$1;
(statearr_27979_28021[(2)] = null);

(statearr_27979_28021[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27968 === (13))){
var inst_27963 = (state_27967[(2)]);
var state_27967__$1 = state_27967;
var statearr_27980_28022 = state_27967__$1;
(statearr_27980_28022[(2)] = inst_27963);

(statearr_27980_28022[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27968 === (22))){
var inst_27961 = (state_27967[(2)]);
var state_27967__$1 = state_27967;
var statearr_27981_28023 = state_27967__$1;
(statearr_27981_28023[(2)] = inst_27961);

(statearr_27981_28023[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27968 === (6))){
var inst_27965 = (state_27967[(2)]);
var state_27967__$1 = state_27967;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27967__$1,inst_27965);
} else {
if((state_val_27968 === (25))){
var state_27967__$1 = state_27967;
var statearr_27982_28024 = state_27967__$1;
(statearr_27982_28024[(2)] = null);

(statearr_27982_28024[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27968 === (17))){
var inst_27941 = (state_27967[(14)]);
var state_27967__$1 = state_27967;
var statearr_27983_28025 = state_27967__$1;
(statearr_27983_28025[(2)] = inst_27941);

(statearr_27983_28025[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27968 === (3))){
var inst_27901 = (state_27967[(9)]);
var state_27967__$1 = state_27967;
var statearr_27984_28026 = state_27967__$1;
(statearr_27984_28026[(2)] = inst_27901);

(statearr_27984_28026[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27968 === (12))){
var inst_27920 = (state_27967[(15)]);
var inst_27927 = (state_27967[(16)]);
var inst_27941 = (state_27967[(14)]);
var inst_27941__$1 = inst_27920.call(null,inst_27927);
var state_27967__$1 = (function (){var statearr_27985 = state_27967;
(statearr_27985[(14)] = inst_27941__$1);

return statearr_27985;
})();
if(cljs.core.truth_(inst_27941__$1)){
var statearr_27986_28027 = state_27967__$1;
(statearr_27986_28027[(1)] = (17));

} else {
var statearr_27987_28028 = state_27967__$1;
(statearr_27987_28028[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27968 === (2))){
var inst_27901 = (state_27967[(9)]);
var inst_27904 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27901);
var state_27967__$1 = state_27967;
var statearr_27988_28029 = state_27967__$1;
(statearr_27988_28029[(2)] = inst_27904);

(statearr_27988_28029[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27968 === (23))){
var inst_27952 = (state_27967[(2)]);
var state_27967__$1 = state_27967;
if(cljs.core.truth_(inst_27952)){
var statearr_27989_28030 = state_27967__$1;
(statearr_27989_28030[(1)] = (24));

} else {
var statearr_27990_28031 = state_27967__$1;
(statearr_27990_28031[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27968 === (19))){
var inst_27949 = (state_27967[(2)]);
var state_27967__$1 = state_27967;
if(cljs.core.truth_(inst_27949)){
var statearr_27991_28032 = state_27967__$1;
(statearr_27991_28032[(1)] = (20));

} else {
var statearr_27992_28033 = state_27967__$1;
(statearr_27992_28033[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27968 === (11))){
var inst_27926 = (state_27967[(8)]);
var inst_27932 = (inst_27926 == null);
var state_27967__$1 = state_27967;
if(cljs.core.truth_(inst_27932)){
var statearr_27993_28034 = state_27967__$1;
(statearr_27993_28034[(1)] = (14));

} else {
var statearr_27994_28035 = state_27967__$1;
(statearr_27994_28035[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27968 === (9))){
var inst_27919 = (state_27967[(10)]);
var inst_27919__$1 = (state_27967[(2)]);
var inst_27920 = cljs.core.get.call(null,inst_27919__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_27921 = cljs.core.get.call(null,inst_27919__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27922 = cljs.core.get.call(null,inst_27919__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_27967__$1 = (function (){var statearr_27995 = state_27967;
(statearr_27995[(17)] = inst_27921);

(statearr_27995[(15)] = inst_27920);

(statearr_27995[(10)] = inst_27919__$1);

return statearr_27995;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_27967__$1,(10),inst_27922);
} else {
if((state_val_27968 === (5))){
var inst_27911 = (state_27967[(7)]);
var inst_27914 = cljs.core.seq_QMARK_.call(null,inst_27911);
var state_27967__$1 = state_27967;
if(inst_27914){
var statearr_27996_28036 = state_27967__$1;
(statearr_27996_28036[(1)] = (7));

} else {
var statearr_27997_28037 = state_27967__$1;
(statearr_27997_28037[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27968 === (14))){
var inst_27927 = (state_27967[(16)]);
var inst_27934 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_27927);
var state_27967__$1 = state_27967;
var statearr_27998_28038 = state_27967__$1;
(statearr_27998_28038[(2)] = inst_27934);

(statearr_27998_28038[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27968 === (26))){
var inst_27957 = (state_27967[(2)]);
var state_27967__$1 = state_27967;
var statearr_27999_28039 = state_27967__$1;
(statearr_27999_28039[(2)] = inst_27957);

(statearr_27999_28039[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27968 === (16))){
var inst_27937 = (state_27967[(2)]);
var inst_27938 = calc_state.call(null);
var inst_27911 = inst_27938;
var state_27967__$1 = (function (){var statearr_28000 = state_27967;
(statearr_28000[(7)] = inst_27911);

(statearr_28000[(18)] = inst_27937);

return statearr_28000;
})();
var statearr_28001_28040 = state_27967__$1;
(statearr_28001_28040[(2)] = null);

(statearr_28001_28040[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27968 === (10))){
var inst_27927 = (state_27967[(16)]);
var inst_27926 = (state_27967[(8)]);
var inst_27925 = (state_27967[(2)]);
var inst_27926__$1 = cljs.core.nth.call(null,inst_27925,(0),null);
var inst_27927__$1 = cljs.core.nth.call(null,inst_27925,(1),null);
var inst_27928 = (inst_27926__$1 == null);
var inst_27929 = cljs.core._EQ_.call(null,inst_27927__$1,change);
var inst_27930 = (inst_27928) || (inst_27929);
var state_27967__$1 = (function (){var statearr_28002 = state_27967;
(statearr_28002[(16)] = inst_27927__$1);

(statearr_28002[(8)] = inst_27926__$1);

return statearr_28002;
})();
if(cljs.core.truth_(inst_27930)){
var statearr_28003_28041 = state_27967__$1;
(statearr_28003_28041[(1)] = (11));

} else {
var statearr_28004_28042 = state_27967__$1;
(statearr_28004_28042[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27968 === (18))){
var inst_27921 = (state_27967[(17)]);
var inst_27920 = (state_27967[(15)]);
var inst_27927 = (state_27967[(16)]);
var inst_27944 = cljs.core.empty_QMARK_.call(null,inst_27920);
var inst_27945 = inst_27921.call(null,inst_27927);
var inst_27946 = cljs.core.not.call(null,inst_27945);
var inst_27947 = (inst_27944) && (inst_27946);
var state_27967__$1 = state_27967;
var statearr_28005_28043 = state_27967__$1;
(statearr_28005_28043[(2)] = inst_27947);

(statearr_28005_28043[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27968 === (8))){
var inst_27911 = (state_27967[(7)]);
var state_27967__$1 = state_27967;
var statearr_28006_28044 = state_27967__$1;
(statearr_28006_28044[(2)] = inst_27911);

(statearr_28006_28044[(1)] = (9));


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
});})(c__21099__auto___28014,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__21037__auto__,c__21099__auto___28014,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__21038__auto__ = null;
var cljs$core$async$mix_$_state_machine__21038__auto____0 = (function (){
var statearr_28010 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28010[(0)] = cljs$core$async$mix_$_state_machine__21038__auto__);

(statearr_28010[(1)] = (1));

return statearr_28010;
});
var cljs$core$async$mix_$_state_machine__21038__auto____1 = (function (state_27967){
while(true){
var ret_value__21039__auto__ = (function (){try{while(true){
var result__21040__auto__ = switch__21037__auto__.call(null,state_27967);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21040__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21040__auto__;
}
break;
}
}catch (e28011){if((e28011 instanceof Object)){
var ex__21041__auto__ = e28011;
var statearr_28012_28045 = state_27967;
(statearr_28012_28045[(5)] = ex__21041__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27967);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28011;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21039__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28046 = state_27967;
state_27967 = G__28046;
continue;
} else {
return ret_value__21039__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__21038__auto__ = function(state_27967){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__21038__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__21038__auto____1.call(this,state_27967);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__21038__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__21038__auto____0;
cljs$core$async$mix_$_state_machine__21038__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__21038__auto____1;
return cljs$core$async$mix_$_state_machine__21038__auto__;
})()
;})(switch__21037__auto__,c__21099__auto___28014,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__21101__auto__ = (function (){var statearr_28013 = f__21100__auto__.call(null);
(statearr_28013[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21099__auto___28014);

return statearr_28013;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21101__auto__);
});})(c__21099__auto___28014,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 * state map is a map of channels -> channel-state-map. A
 * channel-state-map is a map of attrs -> boolean, where attr is one or
 * more of :mute, :pause or :solo. Any states supplied are merged with
 * the current state.
 * 
 * Note that channels can be added to a mix via toggle, which can be
 * used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

cljs.core.async.Pub = (function (){var obj28048 = {};
return obj28048;
})();

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__18075__auto__ = p;
if(and__18075__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__18075__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__18723__auto__ = (((p == null))?null:p);
return (function (){var or__18087__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__18723__auto__)]);
if(or__18087__auto__){
return or__18087__auto__;
} else {
var or__18087__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__18087__auto____$1){
return or__18087__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((function (){var and__18075__auto__ = p;
if(and__18075__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__18075__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__18723__auto__ = (((p == null))?null:p);
return (function (){var or__18087__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__18723__auto__)]);
if(or__18087__auto__){
return or__18087__auto__;
} else {
var or__18087__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__18087__auto____$1){
return or__18087__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(){
var G__28050 = arguments.length;
switch (G__28050) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((function (){var and__18075__auto__ = p;
if(and__18075__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__18075__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__18723__auto__ = (((p == null))?null:p);
return (function (){var or__18087__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__18723__auto__)]);
if(or__18087__auto__){
return or__18087__auto__;
} else {
var or__18087__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__18087__auto____$1){
return or__18087__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((function (){var and__18075__auto__ = p;
if(and__18075__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__18075__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__18723__auto__ = (((p == null))?null:p);
return (function (){var or__18087__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__18723__auto__)]);
if(or__18087__auto__){
return or__18087__auto__;
} else {
var or__18087__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__18087__auto____$1){
return or__18087__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 * partitioned into topics by the topic-fn. topic-fn will be applied to
 * each value on the channel and the result will determine the 'topic'
 * on which that value will be put. Channels can be subscribed to
 * receive copies of topics using 'sub', and unsubscribed using
 * 'unsub'. Each topic will be handled by an internal mult on a
 * dedicated channel. By default these internal channels are
 * unbuffered, but a buf-fn can be supplied which, given a topic,
 * creates a buffer with desired properties.
 * 
 * Each item is distributed to all subs in parallel and synchronously,
 * i.e. each sub must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow subs from holding up the pub.
 * 
 * Items received when there are no matching subs get dropped.
 * 
 * Note that if buf-fns are used then each topic is handled
 * asynchronously, i.e. if a channel is subscribed to more than one
 * topic it should not expect them to be interleaved identically with
 * the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(){
var G__28054 = arguments.length;
switch (G__28054) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__18087__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__18087__auto__)){
return or__18087__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__18087__auto__,mults){
return (function (p1__28052_SHARP_){
if(cljs.core.truth_(p1__28052_SHARP_.call(null,topic))){
return p1__28052_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__28052_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__18087__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t28055 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28055 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta28056){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta28056 = meta28056;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t28055.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_28057,meta28056__$1){
var self__ = this;
var _28057__$1 = this;
return (new cljs.core.async.t28055(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta28056__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t28055.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_28057){
var self__ = this;
var _28057__$1 = this;
return self__.meta28056;
});})(mults,ensure_mult))
;

cljs.core.async.t28055.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t28055.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t28055.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t28055.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t28055.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4423__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4423__auto__)){
var m = temp__4423__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t28055.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t28055.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t28055.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta28056","meta28056",1417341983,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t28055.cljs$lang$type = true;

cljs.core.async.t28055.cljs$lang$ctorStr = "cljs.core.async/t28055";

cljs.core.async.t28055.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__18666__auto__,writer__18667__auto__,opt__18668__auto__){
return cljs.core._write.call(null,writer__18667__auto__,"cljs.core.async/t28055");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t28055 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t28055(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28056){
return (new cljs.core.async.t28055(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28056));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t28055(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21099__auto___28178 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21099__auto___28178,mults,ensure_mult,p){
return (function (){
var f__21100__auto__ = (function (){var switch__21037__auto__ = ((function (c__21099__auto___28178,mults,ensure_mult,p){
return (function (state_28129){
var state_val_28130 = (state_28129[(1)]);
if((state_val_28130 === (7))){
var inst_28125 = (state_28129[(2)]);
var state_28129__$1 = state_28129;
var statearr_28131_28179 = state_28129__$1;
(statearr_28131_28179[(2)] = inst_28125);

(statearr_28131_28179[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28130 === (20))){
var state_28129__$1 = state_28129;
var statearr_28132_28180 = state_28129__$1;
(statearr_28132_28180[(2)] = null);

(statearr_28132_28180[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28130 === (1))){
var state_28129__$1 = state_28129;
var statearr_28133_28181 = state_28129__$1;
(statearr_28133_28181[(2)] = null);

(statearr_28133_28181[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28130 === (24))){
var inst_28108 = (state_28129[(7)]);
var inst_28117 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_28108);
var state_28129__$1 = state_28129;
var statearr_28134_28182 = state_28129__$1;
(statearr_28134_28182[(2)] = inst_28117);

(statearr_28134_28182[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28130 === (4))){
var inst_28060 = (state_28129[(8)]);
var inst_28060__$1 = (state_28129[(2)]);
var inst_28061 = (inst_28060__$1 == null);
var state_28129__$1 = (function (){var statearr_28135 = state_28129;
(statearr_28135[(8)] = inst_28060__$1);

return statearr_28135;
})();
if(cljs.core.truth_(inst_28061)){
var statearr_28136_28183 = state_28129__$1;
(statearr_28136_28183[(1)] = (5));

} else {
var statearr_28137_28184 = state_28129__$1;
(statearr_28137_28184[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28130 === (15))){
var inst_28102 = (state_28129[(2)]);
var state_28129__$1 = state_28129;
var statearr_28138_28185 = state_28129__$1;
(statearr_28138_28185[(2)] = inst_28102);

(statearr_28138_28185[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28130 === (21))){
var inst_28122 = (state_28129[(2)]);
var state_28129__$1 = (function (){var statearr_28139 = state_28129;
(statearr_28139[(9)] = inst_28122);

return statearr_28139;
})();
var statearr_28140_28186 = state_28129__$1;
(statearr_28140_28186[(2)] = null);

(statearr_28140_28186[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28130 === (13))){
var inst_28084 = (state_28129[(10)]);
var inst_28086 = cljs.core.chunked_seq_QMARK_.call(null,inst_28084);
var state_28129__$1 = state_28129;
if(inst_28086){
var statearr_28141_28187 = state_28129__$1;
(statearr_28141_28187[(1)] = (16));

} else {
var statearr_28142_28188 = state_28129__$1;
(statearr_28142_28188[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28130 === (22))){
var inst_28114 = (state_28129[(2)]);
var state_28129__$1 = state_28129;
if(cljs.core.truth_(inst_28114)){
var statearr_28143_28189 = state_28129__$1;
(statearr_28143_28189[(1)] = (23));

} else {
var statearr_28144_28190 = state_28129__$1;
(statearr_28144_28190[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28130 === (6))){
var inst_28110 = (state_28129[(11)]);
var inst_28060 = (state_28129[(8)]);
var inst_28108 = (state_28129[(7)]);
var inst_28108__$1 = topic_fn.call(null,inst_28060);
var inst_28109 = cljs.core.deref.call(null,mults);
var inst_28110__$1 = cljs.core.get.call(null,inst_28109,inst_28108__$1);
var state_28129__$1 = (function (){var statearr_28145 = state_28129;
(statearr_28145[(11)] = inst_28110__$1);

(statearr_28145[(7)] = inst_28108__$1);

return statearr_28145;
})();
if(cljs.core.truth_(inst_28110__$1)){
var statearr_28146_28191 = state_28129__$1;
(statearr_28146_28191[(1)] = (19));

} else {
var statearr_28147_28192 = state_28129__$1;
(statearr_28147_28192[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28130 === (25))){
var inst_28119 = (state_28129[(2)]);
var state_28129__$1 = state_28129;
var statearr_28148_28193 = state_28129__$1;
(statearr_28148_28193[(2)] = inst_28119);

(statearr_28148_28193[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28130 === (17))){
var inst_28084 = (state_28129[(10)]);
var inst_28093 = cljs.core.first.call(null,inst_28084);
var inst_28094 = cljs.core.async.muxch_STAR_.call(null,inst_28093);
var inst_28095 = cljs.core.async.close_BANG_.call(null,inst_28094);
var inst_28096 = cljs.core.next.call(null,inst_28084);
var inst_28070 = inst_28096;
var inst_28071 = null;
var inst_28072 = (0);
var inst_28073 = (0);
var state_28129__$1 = (function (){var statearr_28149 = state_28129;
(statearr_28149[(12)] = inst_28071);

(statearr_28149[(13)] = inst_28073);

(statearr_28149[(14)] = inst_28095);

(statearr_28149[(15)] = inst_28070);

(statearr_28149[(16)] = inst_28072);

return statearr_28149;
})();
var statearr_28150_28194 = state_28129__$1;
(statearr_28150_28194[(2)] = null);

(statearr_28150_28194[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28130 === (3))){
var inst_28127 = (state_28129[(2)]);
var state_28129__$1 = state_28129;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28129__$1,inst_28127);
} else {
if((state_val_28130 === (12))){
var inst_28104 = (state_28129[(2)]);
var state_28129__$1 = state_28129;
var statearr_28151_28195 = state_28129__$1;
(statearr_28151_28195[(2)] = inst_28104);

(statearr_28151_28195[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28130 === (2))){
var state_28129__$1 = state_28129;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28129__$1,(4),ch);
} else {
if((state_val_28130 === (23))){
var state_28129__$1 = state_28129;
var statearr_28152_28196 = state_28129__$1;
(statearr_28152_28196[(2)] = null);

(statearr_28152_28196[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28130 === (19))){
var inst_28110 = (state_28129[(11)]);
var inst_28060 = (state_28129[(8)]);
var inst_28112 = cljs.core.async.muxch_STAR_.call(null,inst_28110);
var state_28129__$1 = state_28129;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28129__$1,(22),inst_28112,inst_28060);
} else {
if((state_val_28130 === (11))){
var inst_28084 = (state_28129[(10)]);
var inst_28070 = (state_28129[(15)]);
var inst_28084__$1 = cljs.core.seq.call(null,inst_28070);
var state_28129__$1 = (function (){var statearr_28153 = state_28129;
(statearr_28153[(10)] = inst_28084__$1);

return statearr_28153;
})();
if(inst_28084__$1){
var statearr_28154_28197 = state_28129__$1;
(statearr_28154_28197[(1)] = (13));

} else {
var statearr_28155_28198 = state_28129__$1;
(statearr_28155_28198[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28130 === (9))){
var inst_28106 = (state_28129[(2)]);
var state_28129__$1 = state_28129;
var statearr_28156_28199 = state_28129__$1;
(statearr_28156_28199[(2)] = inst_28106);

(statearr_28156_28199[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28130 === (5))){
var inst_28067 = cljs.core.deref.call(null,mults);
var inst_28068 = cljs.core.vals.call(null,inst_28067);
var inst_28069 = cljs.core.seq.call(null,inst_28068);
var inst_28070 = inst_28069;
var inst_28071 = null;
var inst_28072 = (0);
var inst_28073 = (0);
var state_28129__$1 = (function (){var statearr_28157 = state_28129;
(statearr_28157[(12)] = inst_28071);

(statearr_28157[(13)] = inst_28073);

(statearr_28157[(15)] = inst_28070);

(statearr_28157[(16)] = inst_28072);

return statearr_28157;
})();
var statearr_28158_28200 = state_28129__$1;
(statearr_28158_28200[(2)] = null);

(statearr_28158_28200[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28130 === (14))){
var state_28129__$1 = state_28129;
var statearr_28162_28201 = state_28129__$1;
(statearr_28162_28201[(2)] = null);

(statearr_28162_28201[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28130 === (16))){
var inst_28084 = (state_28129[(10)]);
var inst_28088 = cljs.core.chunk_first.call(null,inst_28084);
var inst_28089 = cljs.core.chunk_rest.call(null,inst_28084);
var inst_28090 = cljs.core.count.call(null,inst_28088);
var inst_28070 = inst_28089;
var inst_28071 = inst_28088;
var inst_28072 = inst_28090;
var inst_28073 = (0);
var state_28129__$1 = (function (){var statearr_28163 = state_28129;
(statearr_28163[(12)] = inst_28071);

(statearr_28163[(13)] = inst_28073);

(statearr_28163[(15)] = inst_28070);

(statearr_28163[(16)] = inst_28072);

return statearr_28163;
})();
var statearr_28164_28202 = state_28129__$1;
(statearr_28164_28202[(2)] = null);

(statearr_28164_28202[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28130 === (10))){
var inst_28071 = (state_28129[(12)]);
var inst_28073 = (state_28129[(13)]);
var inst_28070 = (state_28129[(15)]);
var inst_28072 = (state_28129[(16)]);
var inst_28078 = cljs.core._nth.call(null,inst_28071,inst_28073);
var inst_28079 = cljs.core.async.muxch_STAR_.call(null,inst_28078);
var inst_28080 = cljs.core.async.close_BANG_.call(null,inst_28079);
var inst_28081 = (inst_28073 + (1));
var tmp28159 = inst_28071;
var tmp28160 = inst_28070;
var tmp28161 = inst_28072;
var inst_28070__$1 = tmp28160;
var inst_28071__$1 = tmp28159;
var inst_28072__$1 = tmp28161;
var inst_28073__$1 = inst_28081;
var state_28129__$1 = (function (){var statearr_28165 = state_28129;
(statearr_28165[(12)] = inst_28071__$1);

(statearr_28165[(17)] = inst_28080);

(statearr_28165[(13)] = inst_28073__$1);

(statearr_28165[(15)] = inst_28070__$1);

(statearr_28165[(16)] = inst_28072__$1);

return statearr_28165;
})();
var statearr_28166_28203 = state_28129__$1;
(statearr_28166_28203[(2)] = null);

(statearr_28166_28203[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28130 === (18))){
var inst_28099 = (state_28129[(2)]);
var state_28129__$1 = state_28129;
var statearr_28167_28204 = state_28129__$1;
(statearr_28167_28204[(2)] = inst_28099);

(statearr_28167_28204[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28130 === (8))){
var inst_28073 = (state_28129[(13)]);
var inst_28072 = (state_28129[(16)]);
var inst_28075 = (inst_28073 < inst_28072);
var inst_28076 = inst_28075;
var state_28129__$1 = state_28129;
if(cljs.core.truth_(inst_28076)){
var statearr_28168_28205 = state_28129__$1;
(statearr_28168_28205[(1)] = (10));

} else {
var statearr_28169_28206 = state_28129__$1;
(statearr_28169_28206[(1)] = (11));

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
});})(c__21099__auto___28178,mults,ensure_mult,p))
;
return ((function (switch__21037__auto__,c__21099__auto___28178,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__21038__auto__ = null;
var cljs$core$async$state_machine__21038__auto____0 = (function (){
var statearr_28173 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28173[(0)] = cljs$core$async$state_machine__21038__auto__);

(statearr_28173[(1)] = (1));

return statearr_28173;
});
var cljs$core$async$state_machine__21038__auto____1 = (function (state_28129){
while(true){
var ret_value__21039__auto__ = (function (){try{while(true){
var result__21040__auto__ = switch__21037__auto__.call(null,state_28129);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21040__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21040__auto__;
}
break;
}
}catch (e28174){if((e28174 instanceof Object)){
var ex__21041__auto__ = e28174;
var statearr_28175_28207 = state_28129;
(statearr_28175_28207[(5)] = ex__21041__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28129);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28174;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21039__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28208 = state_28129;
state_28129 = G__28208;
continue;
} else {
return ret_value__21039__auto__;
}
break;
}
});
cljs$core$async$state_machine__21038__auto__ = function(state_28129){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21038__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21038__auto____1.call(this,state_28129);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21038__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21038__auto____0;
cljs$core$async$state_machine__21038__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21038__auto____1;
return cljs$core$async$state_machine__21038__auto__;
})()
;})(switch__21037__auto__,c__21099__auto___28178,mults,ensure_mult,p))
})();
var state__21101__auto__ = (function (){var statearr_28176 = f__21100__auto__.call(null);
(statearr_28176[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21099__auto___28178);

return statearr_28176;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21101__auto__);
});})(c__21099__auto___28178,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(){
var G__28210 = arguments.length;
switch (G__28210) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(){
var G__28213 = arguments.length;
switch (G__28213) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 * channel which contains the values produced by applying f to the set
 * of first items taken from each source channel, followed by applying
 * f to the set of second items from each channel, until any one of the
 * channels is closed, at which point the output channel will be
 * closed. The returned channel will be unbuffered by default, or a
 * buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(){
var G__28216 = arguments.length;
switch (G__28216) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__21099__auto___28286 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21099__auto___28286,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__21100__auto__ = (function (){var switch__21037__auto__ = ((function (c__21099__auto___28286,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_28255){
var state_val_28256 = (state_28255[(1)]);
if((state_val_28256 === (7))){
var state_28255__$1 = state_28255;
var statearr_28257_28287 = state_28255__$1;
(statearr_28257_28287[(2)] = null);

(statearr_28257_28287[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28256 === (1))){
var state_28255__$1 = state_28255;
var statearr_28258_28288 = state_28255__$1;
(statearr_28258_28288[(2)] = null);

(statearr_28258_28288[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28256 === (4))){
var inst_28219 = (state_28255[(7)]);
var inst_28221 = (inst_28219 < cnt);
var state_28255__$1 = state_28255;
if(cljs.core.truth_(inst_28221)){
var statearr_28259_28289 = state_28255__$1;
(statearr_28259_28289[(1)] = (6));

} else {
var statearr_28260_28290 = state_28255__$1;
(statearr_28260_28290[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28256 === (15))){
var inst_28251 = (state_28255[(2)]);
var state_28255__$1 = state_28255;
var statearr_28261_28291 = state_28255__$1;
(statearr_28261_28291[(2)] = inst_28251);

(statearr_28261_28291[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28256 === (13))){
var inst_28244 = cljs.core.async.close_BANG_.call(null,out);
var state_28255__$1 = state_28255;
var statearr_28262_28292 = state_28255__$1;
(statearr_28262_28292[(2)] = inst_28244);

(statearr_28262_28292[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28256 === (6))){
var state_28255__$1 = state_28255;
var statearr_28263_28293 = state_28255__$1;
(statearr_28263_28293[(2)] = null);

(statearr_28263_28293[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28256 === (3))){
var inst_28253 = (state_28255[(2)]);
var state_28255__$1 = state_28255;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28255__$1,inst_28253);
} else {
if((state_val_28256 === (12))){
var inst_28241 = (state_28255[(8)]);
var inst_28241__$1 = (state_28255[(2)]);
var inst_28242 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_28241__$1);
var state_28255__$1 = (function (){var statearr_28264 = state_28255;
(statearr_28264[(8)] = inst_28241__$1);

return statearr_28264;
})();
if(cljs.core.truth_(inst_28242)){
var statearr_28265_28294 = state_28255__$1;
(statearr_28265_28294[(1)] = (13));

} else {
var statearr_28266_28295 = state_28255__$1;
(statearr_28266_28295[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28256 === (2))){
var inst_28218 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_28219 = (0);
var state_28255__$1 = (function (){var statearr_28267 = state_28255;
(statearr_28267[(7)] = inst_28219);

(statearr_28267[(9)] = inst_28218);

return statearr_28267;
})();
var statearr_28268_28296 = state_28255__$1;
(statearr_28268_28296[(2)] = null);

(statearr_28268_28296[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28256 === (11))){
var inst_28219 = (state_28255[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_28255,(10),Object,null,(9));
var inst_28228 = chs__$1.call(null,inst_28219);
var inst_28229 = done.call(null,inst_28219);
var inst_28230 = cljs.core.async.take_BANG_.call(null,inst_28228,inst_28229);
var state_28255__$1 = state_28255;
var statearr_28269_28297 = state_28255__$1;
(statearr_28269_28297[(2)] = inst_28230);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28255__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28256 === (9))){
var inst_28219 = (state_28255[(7)]);
var inst_28232 = (state_28255[(2)]);
var inst_28233 = (inst_28219 + (1));
var inst_28219__$1 = inst_28233;
var state_28255__$1 = (function (){var statearr_28270 = state_28255;
(statearr_28270[(7)] = inst_28219__$1);

(statearr_28270[(10)] = inst_28232);

return statearr_28270;
})();
var statearr_28271_28298 = state_28255__$1;
(statearr_28271_28298[(2)] = null);

(statearr_28271_28298[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28256 === (5))){
var inst_28239 = (state_28255[(2)]);
var state_28255__$1 = (function (){var statearr_28272 = state_28255;
(statearr_28272[(11)] = inst_28239);

return statearr_28272;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28255__$1,(12),dchan);
} else {
if((state_val_28256 === (14))){
var inst_28241 = (state_28255[(8)]);
var inst_28246 = cljs.core.apply.call(null,f,inst_28241);
var state_28255__$1 = state_28255;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28255__$1,(16),out,inst_28246);
} else {
if((state_val_28256 === (16))){
var inst_28248 = (state_28255[(2)]);
var state_28255__$1 = (function (){var statearr_28273 = state_28255;
(statearr_28273[(12)] = inst_28248);

return statearr_28273;
})();
var statearr_28274_28299 = state_28255__$1;
(statearr_28274_28299[(2)] = null);

(statearr_28274_28299[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28256 === (10))){
var inst_28223 = (state_28255[(2)]);
var inst_28224 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_28255__$1 = (function (){var statearr_28275 = state_28255;
(statearr_28275[(13)] = inst_28223);

return statearr_28275;
})();
var statearr_28276_28300 = state_28255__$1;
(statearr_28276_28300[(2)] = inst_28224);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28255__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28256 === (8))){
var inst_28237 = (state_28255[(2)]);
var state_28255__$1 = state_28255;
var statearr_28277_28301 = state_28255__$1;
(statearr_28277_28301[(2)] = inst_28237);

(statearr_28277_28301[(1)] = (5));


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
});})(c__21099__auto___28286,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__21037__auto__,c__21099__auto___28286,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__21038__auto__ = null;
var cljs$core$async$state_machine__21038__auto____0 = (function (){
var statearr_28281 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28281[(0)] = cljs$core$async$state_machine__21038__auto__);

(statearr_28281[(1)] = (1));

return statearr_28281;
});
var cljs$core$async$state_machine__21038__auto____1 = (function (state_28255){
while(true){
var ret_value__21039__auto__ = (function (){try{while(true){
var result__21040__auto__ = switch__21037__auto__.call(null,state_28255);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21040__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21040__auto__;
}
break;
}
}catch (e28282){if((e28282 instanceof Object)){
var ex__21041__auto__ = e28282;
var statearr_28283_28302 = state_28255;
(statearr_28283_28302[(5)] = ex__21041__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28255);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28282;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21039__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28303 = state_28255;
state_28255 = G__28303;
continue;
} else {
return ret_value__21039__auto__;
}
break;
}
});
cljs$core$async$state_machine__21038__auto__ = function(state_28255){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21038__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21038__auto____1.call(this,state_28255);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21038__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21038__auto____0;
cljs$core$async$state_machine__21038__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21038__auto____1;
return cljs$core$async$state_machine__21038__auto__;
})()
;})(switch__21037__auto__,c__21099__auto___28286,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__21101__auto__ = (function (){var statearr_28284 = f__21100__auto__.call(null);
(statearr_28284[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21099__auto___28286);

return statearr_28284;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21101__auto__);
});})(c__21099__auto___28286,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 * contains all values taken from them. The returned channel will be
 * unbuffered by default, or a buf-or-n can be supplied. The channel
 * will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(){
var G__28306 = arguments.length;
switch (G__28306) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21099__auto___28361 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21099__auto___28361,out){
return (function (){
var f__21100__auto__ = (function (){var switch__21037__auto__ = ((function (c__21099__auto___28361,out){
return (function (state_28336){
var state_val_28337 = (state_28336[(1)]);
if((state_val_28337 === (7))){
var inst_28315 = (state_28336[(7)]);
var inst_28316 = (state_28336[(8)]);
var inst_28315__$1 = (state_28336[(2)]);
var inst_28316__$1 = cljs.core.nth.call(null,inst_28315__$1,(0),null);
var inst_28317 = cljs.core.nth.call(null,inst_28315__$1,(1),null);
var inst_28318 = (inst_28316__$1 == null);
var state_28336__$1 = (function (){var statearr_28338 = state_28336;
(statearr_28338[(9)] = inst_28317);

(statearr_28338[(7)] = inst_28315__$1);

(statearr_28338[(8)] = inst_28316__$1);

return statearr_28338;
})();
if(cljs.core.truth_(inst_28318)){
var statearr_28339_28362 = state_28336__$1;
(statearr_28339_28362[(1)] = (8));

} else {
var statearr_28340_28363 = state_28336__$1;
(statearr_28340_28363[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28337 === (1))){
var inst_28307 = cljs.core.vec.call(null,chs);
var inst_28308 = inst_28307;
var state_28336__$1 = (function (){var statearr_28341 = state_28336;
(statearr_28341[(10)] = inst_28308);

return statearr_28341;
})();
var statearr_28342_28364 = state_28336__$1;
(statearr_28342_28364[(2)] = null);

(statearr_28342_28364[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28337 === (4))){
var inst_28308 = (state_28336[(10)]);
var state_28336__$1 = state_28336;
return cljs.core.async.ioc_alts_BANG_.call(null,state_28336__$1,(7),inst_28308);
} else {
if((state_val_28337 === (6))){
var inst_28332 = (state_28336[(2)]);
var state_28336__$1 = state_28336;
var statearr_28343_28365 = state_28336__$1;
(statearr_28343_28365[(2)] = inst_28332);

(statearr_28343_28365[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28337 === (3))){
var inst_28334 = (state_28336[(2)]);
var state_28336__$1 = state_28336;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28336__$1,inst_28334);
} else {
if((state_val_28337 === (2))){
var inst_28308 = (state_28336[(10)]);
var inst_28310 = cljs.core.count.call(null,inst_28308);
var inst_28311 = (inst_28310 > (0));
var state_28336__$1 = state_28336;
if(cljs.core.truth_(inst_28311)){
var statearr_28345_28366 = state_28336__$1;
(statearr_28345_28366[(1)] = (4));

} else {
var statearr_28346_28367 = state_28336__$1;
(statearr_28346_28367[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28337 === (11))){
var inst_28308 = (state_28336[(10)]);
var inst_28325 = (state_28336[(2)]);
var tmp28344 = inst_28308;
var inst_28308__$1 = tmp28344;
var state_28336__$1 = (function (){var statearr_28347 = state_28336;
(statearr_28347[(11)] = inst_28325);

(statearr_28347[(10)] = inst_28308__$1);

return statearr_28347;
})();
var statearr_28348_28368 = state_28336__$1;
(statearr_28348_28368[(2)] = null);

(statearr_28348_28368[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28337 === (9))){
var inst_28316 = (state_28336[(8)]);
var state_28336__$1 = state_28336;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28336__$1,(11),out,inst_28316);
} else {
if((state_val_28337 === (5))){
var inst_28330 = cljs.core.async.close_BANG_.call(null,out);
var state_28336__$1 = state_28336;
var statearr_28349_28369 = state_28336__$1;
(statearr_28349_28369[(2)] = inst_28330);

(statearr_28349_28369[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28337 === (10))){
var inst_28328 = (state_28336[(2)]);
var state_28336__$1 = state_28336;
var statearr_28350_28370 = state_28336__$1;
(statearr_28350_28370[(2)] = inst_28328);

(statearr_28350_28370[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28337 === (8))){
var inst_28317 = (state_28336[(9)]);
var inst_28315 = (state_28336[(7)]);
var inst_28316 = (state_28336[(8)]);
var inst_28308 = (state_28336[(10)]);
var inst_28320 = (function (){var cs = inst_28308;
var vec__28313 = inst_28315;
var v = inst_28316;
var c = inst_28317;
return ((function (cs,vec__28313,v,c,inst_28317,inst_28315,inst_28316,inst_28308,state_val_28337,c__21099__auto___28361,out){
return (function (p1__28304_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__28304_SHARP_);
});
;})(cs,vec__28313,v,c,inst_28317,inst_28315,inst_28316,inst_28308,state_val_28337,c__21099__auto___28361,out))
})();
var inst_28321 = cljs.core.filterv.call(null,inst_28320,inst_28308);
var inst_28308__$1 = inst_28321;
var state_28336__$1 = (function (){var statearr_28351 = state_28336;
(statearr_28351[(10)] = inst_28308__$1);

return statearr_28351;
})();
var statearr_28352_28371 = state_28336__$1;
(statearr_28352_28371[(2)] = null);

(statearr_28352_28371[(1)] = (2));


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
});})(c__21099__auto___28361,out))
;
return ((function (switch__21037__auto__,c__21099__auto___28361,out){
return (function() {
var cljs$core$async$state_machine__21038__auto__ = null;
var cljs$core$async$state_machine__21038__auto____0 = (function (){
var statearr_28356 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28356[(0)] = cljs$core$async$state_machine__21038__auto__);

(statearr_28356[(1)] = (1));

return statearr_28356;
});
var cljs$core$async$state_machine__21038__auto____1 = (function (state_28336){
while(true){
var ret_value__21039__auto__ = (function (){try{while(true){
var result__21040__auto__ = switch__21037__auto__.call(null,state_28336);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21040__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21040__auto__;
}
break;
}
}catch (e28357){if((e28357 instanceof Object)){
var ex__21041__auto__ = e28357;
var statearr_28358_28372 = state_28336;
(statearr_28358_28372[(5)] = ex__21041__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28336);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28357;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21039__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28373 = state_28336;
state_28336 = G__28373;
continue;
} else {
return ret_value__21039__auto__;
}
break;
}
});
cljs$core$async$state_machine__21038__auto__ = function(state_28336){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21038__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21038__auto____1.call(this,state_28336);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21038__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21038__auto____0;
cljs$core$async$state_machine__21038__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21038__auto____1;
return cljs$core$async$state_machine__21038__auto__;
})()
;})(switch__21037__auto__,c__21099__auto___28361,out))
})();
var state__21101__auto__ = (function (){var statearr_28359 = f__21100__auto__.call(null);
(statearr_28359[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21099__auto___28361);

return statearr_28359;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21101__auto__);
});})(c__21099__auto___28361,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 * items taken from the channel conjoined to the supplied
 * collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 * The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(){
var G__28375 = arguments.length;
switch (G__28375) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21099__auto___28423 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21099__auto___28423,out){
return (function (){
var f__21100__auto__ = (function (){var switch__21037__auto__ = ((function (c__21099__auto___28423,out){
return (function (state_28399){
var state_val_28400 = (state_28399[(1)]);
if((state_val_28400 === (7))){
var inst_28381 = (state_28399[(7)]);
var inst_28381__$1 = (state_28399[(2)]);
var inst_28382 = (inst_28381__$1 == null);
var inst_28383 = cljs.core.not.call(null,inst_28382);
var state_28399__$1 = (function (){var statearr_28401 = state_28399;
(statearr_28401[(7)] = inst_28381__$1);

return statearr_28401;
})();
if(inst_28383){
var statearr_28402_28424 = state_28399__$1;
(statearr_28402_28424[(1)] = (8));

} else {
var statearr_28403_28425 = state_28399__$1;
(statearr_28403_28425[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28400 === (1))){
var inst_28376 = (0);
var state_28399__$1 = (function (){var statearr_28404 = state_28399;
(statearr_28404[(8)] = inst_28376);

return statearr_28404;
})();
var statearr_28405_28426 = state_28399__$1;
(statearr_28405_28426[(2)] = null);

(statearr_28405_28426[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28400 === (4))){
var state_28399__$1 = state_28399;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28399__$1,(7),ch);
} else {
if((state_val_28400 === (6))){
var inst_28394 = (state_28399[(2)]);
var state_28399__$1 = state_28399;
var statearr_28406_28427 = state_28399__$1;
(statearr_28406_28427[(2)] = inst_28394);

(statearr_28406_28427[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28400 === (3))){
var inst_28396 = (state_28399[(2)]);
var inst_28397 = cljs.core.async.close_BANG_.call(null,out);
var state_28399__$1 = (function (){var statearr_28407 = state_28399;
(statearr_28407[(9)] = inst_28396);

return statearr_28407;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28399__$1,inst_28397);
} else {
if((state_val_28400 === (2))){
var inst_28376 = (state_28399[(8)]);
var inst_28378 = (inst_28376 < n);
var state_28399__$1 = state_28399;
if(cljs.core.truth_(inst_28378)){
var statearr_28408_28428 = state_28399__$1;
(statearr_28408_28428[(1)] = (4));

} else {
var statearr_28409_28429 = state_28399__$1;
(statearr_28409_28429[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28400 === (11))){
var inst_28376 = (state_28399[(8)]);
var inst_28386 = (state_28399[(2)]);
var inst_28387 = (inst_28376 + (1));
var inst_28376__$1 = inst_28387;
var state_28399__$1 = (function (){var statearr_28410 = state_28399;
(statearr_28410[(10)] = inst_28386);

(statearr_28410[(8)] = inst_28376__$1);

return statearr_28410;
})();
var statearr_28411_28430 = state_28399__$1;
(statearr_28411_28430[(2)] = null);

(statearr_28411_28430[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28400 === (9))){
var state_28399__$1 = state_28399;
var statearr_28412_28431 = state_28399__$1;
(statearr_28412_28431[(2)] = null);

(statearr_28412_28431[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28400 === (5))){
var state_28399__$1 = state_28399;
var statearr_28413_28432 = state_28399__$1;
(statearr_28413_28432[(2)] = null);

(statearr_28413_28432[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28400 === (10))){
var inst_28391 = (state_28399[(2)]);
var state_28399__$1 = state_28399;
var statearr_28414_28433 = state_28399__$1;
(statearr_28414_28433[(2)] = inst_28391);

(statearr_28414_28433[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28400 === (8))){
var inst_28381 = (state_28399[(7)]);
var state_28399__$1 = state_28399;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28399__$1,(11),out,inst_28381);
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
});})(c__21099__auto___28423,out))
;
return ((function (switch__21037__auto__,c__21099__auto___28423,out){
return (function() {
var cljs$core$async$state_machine__21038__auto__ = null;
var cljs$core$async$state_machine__21038__auto____0 = (function (){
var statearr_28418 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28418[(0)] = cljs$core$async$state_machine__21038__auto__);

(statearr_28418[(1)] = (1));

return statearr_28418;
});
var cljs$core$async$state_machine__21038__auto____1 = (function (state_28399){
while(true){
var ret_value__21039__auto__ = (function (){try{while(true){
var result__21040__auto__ = switch__21037__auto__.call(null,state_28399);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21040__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21040__auto__;
}
break;
}
}catch (e28419){if((e28419 instanceof Object)){
var ex__21041__auto__ = e28419;
var statearr_28420_28434 = state_28399;
(statearr_28420_28434[(5)] = ex__21041__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28399);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28419;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21039__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28435 = state_28399;
state_28399 = G__28435;
continue;
} else {
return ret_value__21039__auto__;
}
break;
}
});
cljs$core$async$state_machine__21038__auto__ = function(state_28399){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21038__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21038__auto____1.call(this,state_28399);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21038__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21038__auto____0;
cljs$core$async$state_machine__21038__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21038__auto____1;
return cljs$core$async$state_machine__21038__auto__;
})()
;})(switch__21037__auto__,c__21099__auto___28423,out))
})();
var state__21101__auto__ = (function (){var statearr_28421 = f__21100__auto__.call(null);
(statearr_28421[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21099__auto___28423);

return statearr_28421;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21101__auto__);
});})(c__21099__auto___28423,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t28443 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28443 = (function (map_LT_,f,ch,meta28444){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta28444 = meta28444;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t28443.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28445,meta28444__$1){
var self__ = this;
var _28445__$1 = this;
return (new cljs.core.async.t28443(self__.map_LT_,self__.f,self__.ch,meta28444__$1));
});

cljs.core.async.t28443.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28445){
var self__ = this;
var _28445__$1 = this;
return self__.meta28444;
});

cljs.core.async.t28443.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t28443.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t28443.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t28443.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t28443.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t28446 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28446 = (function (map_LT_,f,ch,meta28444,_,fn1,meta28447){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta28444 = meta28444;
this._ = _;
this.fn1 = fn1;
this.meta28447 = meta28447;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t28446.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_28448,meta28447__$1){
var self__ = this;
var _28448__$1 = this;
return (new cljs.core.async.t28446(self__.map_LT_,self__.f,self__.ch,self__.meta28444,self__._,self__.fn1,meta28447__$1));
});})(___$1))
;

cljs.core.async.t28446.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_28448){
var self__ = this;
var _28448__$1 = this;
return self__.meta28447;
});})(___$1))
;

cljs.core.async.t28446.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t28446.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t28446.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__28436_SHARP_){
return f1.call(null,(((p1__28436_SHARP_ == null))?null:self__.f.call(null,p1__28436_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t28446.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28444","meta28444",-1510791915,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta28447","meta28447",-287640694,null)], null);
});})(___$1))
;

cljs.core.async.t28446.cljs$lang$type = true;

cljs.core.async.t28446.cljs$lang$ctorStr = "cljs.core.async/t28446";

cljs.core.async.t28446.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__18666__auto__,writer__18667__auto__,opt__18668__auto__){
return cljs.core._write.call(null,writer__18667__auto__,"cljs.core.async/t28446");
});})(___$1))
;

cljs.core.async.__GT_t28446 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t28446(map_LT___$1,f__$1,ch__$1,meta28444__$1,___$2,fn1__$1,meta28447){
return (new cljs.core.async.t28446(map_LT___$1,f__$1,ch__$1,meta28444__$1,___$2,fn1__$1,meta28447));
});})(___$1))
;

}

return (new cljs.core.async.t28446(self__.map_LT_,self__.f,self__.ch,self__.meta28444,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__18075__auto__ = ret;
if(cljs.core.truth_(and__18075__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__18075__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t28443.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t28443.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t28443.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28444","meta28444",-1510791915,null)], null);
});

cljs.core.async.t28443.cljs$lang$type = true;

cljs.core.async.t28443.cljs$lang$ctorStr = "cljs.core.async/t28443";

cljs.core.async.t28443.cljs$lang$ctorPrWriter = (function (this__18666__auto__,writer__18667__auto__,opt__18668__auto__){
return cljs.core._write.call(null,writer__18667__auto__,"cljs.core.async/t28443");
});

cljs.core.async.__GT_t28443 = (function cljs$core$async$map_LT__$___GT_t28443(map_LT___$1,f__$1,ch__$1,meta28444){
return (new cljs.core.async.t28443(map_LT___$1,f__$1,ch__$1,meta28444));
});

}

return (new cljs.core.async.t28443(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t28452 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28452 = (function (map_GT_,f,ch,meta28453){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta28453 = meta28453;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t28452.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28454,meta28453__$1){
var self__ = this;
var _28454__$1 = this;
return (new cljs.core.async.t28452(self__.map_GT_,self__.f,self__.ch,meta28453__$1));
});

cljs.core.async.t28452.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28454){
var self__ = this;
var _28454__$1 = this;
return self__.meta28453;
});

cljs.core.async.t28452.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t28452.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t28452.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t28452.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t28452.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t28452.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t28452.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28453","meta28453",-1461276531,null)], null);
});

cljs.core.async.t28452.cljs$lang$type = true;

cljs.core.async.t28452.cljs$lang$ctorStr = "cljs.core.async/t28452";

cljs.core.async.t28452.cljs$lang$ctorPrWriter = (function (this__18666__auto__,writer__18667__auto__,opt__18668__auto__){
return cljs.core._write.call(null,writer__18667__auto__,"cljs.core.async/t28452");
});

cljs.core.async.__GT_t28452 = (function cljs$core$async$map_GT__$___GT_t28452(map_GT___$1,f__$1,ch__$1,meta28453){
return (new cljs.core.async.t28452(map_GT___$1,f__$1,ch__$1,meta28453));
});

}

return (new cljs.core.async.t28452(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t28458 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28458 = (function (filter_GT_,p,ch,meta28459){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta28459 = meta28459;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t28458.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28460,meta28459__$1){
var self__ = this;
var _28460__$1 = this;
return (new cljs.core.async.t28458(self__.filter_GT_,self__.p,self__.ch,meta28459__$1));
});

cljs.core.async.t28458.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28460){
var self__ = this;
var _28460__$1 = this;
return self__.meta28459;
});

cljs.core.async.t28458.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t28458.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t28458.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t28458.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t28458.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t28458.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t28458.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t28458.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28459","meta28459",-104666476,null)], null);
});

cljs.core.async.t28458.cljs$lang$type = true;

cljs.core.async.t28458.cljs$lang$ctorStr = "cljs.core.async/t28458";

cljs.core.async.t28458.cljs$lang$ctorPrWriter = (function (this__18666__auto__,writer__18667__auto__,opt__18668__auto__){
return cljs.core._write.call(null,writer__18667__auto__,"cljs.core.async/t28458");
});

cljs.core.async.__GT_t28458 = (function cljs$core$async$filter_GT__$___GT_t28458(filter_GT___$1,p__$1,ch__$1,meta28459){
return (new cljs.core.async.t28458(filter_GT___$1,p__$1,ch__$1,meta28459));
});

}

return (new cljs.core.async.t28458(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(){
var G__28462 = arguments.length;
switch (G__28462) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21099__auto___28505 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21099__auto___28505,out){
return (function (){
var f__21100__auto__ = (function (){var switch__21037__auto__ = ((function (c__21099__auto___28505,out){
return (function (state_28483){
var state_val_28484 = (state_28483[(1)]);
if((state_val_28484 === (7))){
var inst_28479 = (state_28483[(2)]);
var state_28483__$1 = state_28483;
var statearr_28485_28506 = state_28483__$1;
(statearr_28485_28506[(2)] = inst_28479);

(statearr_28485_28506[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28484 === (1))){
var state_28483__$1 = state_28483;
var statearr_28486_28507 = state_28483__$1;
(statearr_28486_28507[(2)] = null);

(statearr_28486_28507[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28484 === (4))){
var inst_28465 = (state_28483[(7)]);
var inst_28465__$1 = (state_28483[(2)]);
var inst_28466 = (inst_28465__$1 == null);
var state_28483__$1 = (function (){var statearr_28487 = state_28483;
(statearr_28487[(7)] = inst_28465__$1);

return statearr_28487;
})();
if(cljs.core.truth_(inst_28466)){
var statearr_28488_28508 = state_28483__$1;
(statearr_28488_28508[(1)] = (5));

} else {
var statearr_28489_28509 = state_28483__$1;
(statearr_28489_28509[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28484 === (6))){
var inst_28465 = (state_28483[(7)]);
var inst_28470 = p.call(null,inst_28465);
var state_28483__$1 = state_28483;
if(cljs.core.truth_(inst_28470)){
var statearr_28490_28510 = state_28483__$1;
(statearr_28490_28510[(1)] = (8));

} else {
var statearr_28491_28511 = state_28483__$1;
(statearr_28491_28511[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28484 === (3))){
var inst_28481 = (state_28483[(2)]);
var state_28483__$1 = state_28483;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28483__$1,inst_28481);
} else {
if((state_val_28484 === (2))){
var state_28483__$1 = state_28483;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28483__$1,(4),ch);
} else {
if((state_val_28484 === (11))){
var inst_28473 = (state_28483[(2)]);
var state_28483__$1 = state_28483;
var statearr_28492_28512 = state_28483__$1;
(statearr_28492_28512[(2)] = inst_28473);

(statearr_28492_28512[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28484 === (9))){
var state_28483__$1 = state_28483;
var statearr_28493_28513 = state_28483__$1;
(statearr_28493_28513[(2)] = null);

(statearr_28493_28513[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28484 === (5))){
var inst_28468 = cljs.core.async.close_BANG_.call(null,out);
var state_28483__$1 = state_28483;
var statearr_28494_28514 = state_28483__$1;
(statearr_28494_28514[(2)] = inst_28468);

(statearr_28494_28514[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28484 === (10))){
var inst_28476 = (state_28483[(2)]);
var state_28483__$1 = (function (){var statearr_28495 = state_28483;
(statearr_28495[(8)] = inst_28476);

return statearr_28495;
})();
var statearr_28496_28515 = state_28483__$1;
(statearr_28496_28515[(2)] = null);

(statearr_28496_28515[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28484 === (8))){
var inst_28465 = (state_28483[(7)]);
var state_28483__$1 = state_28483;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28483__$1,(11),out,inst_28465);
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
});})(c__21099__auto___28505,out))
;
return ((function (switch__21037__auto__,c__21099__auto___28505,out){
return (function() {
var cljs$core$async$state_machine__21038__auto__ = null;
var cljs$core$async$state_machine__21038__auto____0 = (function (){
var statearr_28500 = [null,null,null,null,null,null,null,null,null];
(statearr_28500[(0)] = cljs$core$async$state_machine__21038__auto__);

(statearr_28500[(1)] = (1));

return statearr_28500;
});
var cljs$core$async$state_machine__21038__auto____1 = (function (state_28483){
while(true){
var ret_value__21039__auto__ = (function (){try{while(true){
var result__21040__auto__ = switch__21037__auto__.call(null,state_28483);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21040__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21040__auto__;
}
break;
}
}catch (e28501){if((e28501 instanceof Object)){
var ex__21041__auto__ = e28501;
var statearr_28502_28516 = state_28483;
(statearr_28502_28516[(5)] = ex__21041__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28483);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28501;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21039__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28517 = state_28483;
state_28483 = G__28517;
continue;
} else {
return ret_value__21039__auto__;
}
break;
}
});
cljs$core$async$state_machine__21038__auto__ = function(state_28483){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21038__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21038__auto____1.call(this,state_28483);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21038__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21038__auto____0;
cljs$core$async$state_machine__21038__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21038__auto____1;
return cljs$core$async$state_machine__21038__auto__;
})()
;})(switch__21037__auto__,c__21099__auto___28505,out))
})();
var state__21101__auto__ = (function (){var statearr_28503 = f__21100__auto__.call(null);
(statearr_28503[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21099__auto___28505);

return statearr_28503;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21101__auto__);
});})(c__21099__auto___28505,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(){
var G__28519 = arguments.length;
switch (G__28519) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__21099__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21099__auto__){
return (function (){
var f__21100__auto__ = (function (){var switch__21037__auto__ = ((function (c__21099__auto__){
return (function (state_28686){
var state_val_28687 = (state_28686[(1)]);
if((state_val_28687 === (7))){
var inst_28682 = (state_28686[(2)]);
var state_28686__$1 = state_28686;
var statearr_28688_28729 = state_28686__$1;
(statearr_28688_28729[(2)] = inst_28682);

(statearr_28688_28729[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28687 === (20))){
var inst_28652 = (state_28686[(7)]);
var inst_28663 = (state_28686[(2)]);
var inst_28664 = cljs.core.next.call(null,inst_28652);
var inst_28638 = inst_28664;
var inst_28639 = null;
var inst_28640 = (0);
var inst_28641 = (0);
var state_28686__$1 = (function (){var statearr_28689 = state_28686;
(statearr_28689[(8)] = inst_28638);

(statearr_28689[(9)] = inst_28640);

(statearr_28689[(10)] = inst_28663);

(statearr_28689[(11)] = inst_28641);

(statearr_28689[(12)] = inst_28639);

return statearr_28689;
})();
var statearr_28690_28730 = state_28686__$1;
(statearr_28690_28730[(2)] = null);

(statearr_28690_28730[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28687 === (1))){
var state_28686__$1 = state_28686;
var statearr_28691_28731 = state_28686__$1;
(statearr_28691_28731[(2)] = null);

(statearr_28691_28731[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28687 === (4))){
var inst_28627 = (state_28686[(13)]);
var inst_28627__$1 = (state_28686[(2)]);
var inst_28628 = (inst_28627__$1 == null);
var state_28686__$1 = (function (){var statearr_28692 = state_28686;
(statearr_28692[(13)] = inst_28627__$1);

return statearr_28692;
})();
if(cljs.core.truth_(inst_28628)){
var statearr_28693_28732 = state_28686__$1;
(statearr_28693_28732[(1)] = (5));

} else {
var statearr_28694_28733 = state_28686__$1;
(statearr_28694_28733[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28687 === (15))){
var state_28686__$1 = state_28686;
var statearr_28698_28734 = state_28686__$1;
(statearr_28698_28734[(2)] = null);

(statearr_28698_28734[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28687 === (21))){
var state_28686__$1 = state_28686;
var statearr_28699_28735 = state_28686__$1;
(statearr_28699_28735[(2)] = null);

(statearr_28699_28735[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28687 === (13))){
var inst_28638 = (state_28686[(8)]);
var inst_28640 = (state_28686[(9)]);
var inst_28641 = (state_28686[(11)]);
var inst_28639 = (state_28686[(12)]);
var inst_28648 = (state_28686[(2)]);
var inst_28649 = (inst_28641 + (1));
var tmp28695 = inst_28638;
var tmp28696 = inst_28640;
var tmp28697 = inst_28639;
var inst_28638__$1 = tmp28695;
var inst_28639__$1 = tmp28697;
var inst_28640__$1 = tmp28696;
var inst_28641__$1 = inst_28649;
var state_28686__$1 = (function (){var statearr_28700 = state_28686;
(statearr_28700[(14)] = inst_28648);

(statearr_28700[(8)] = inst_28638__$1);

(statearr_28700[(9)] = inst_28640__$1);

(statearr_28700[(11)] = inst_28641__$1);

(statearr_28700[(12)] = inst_28639__$1);

return statearr_28700;
})();
var statearr_28701_28736 = state_28686__$1;
(statearr_28701_28736[(2)] = null);

(statearr_28701_28736[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28687 === (22))){
var state_28686__$1 = state_28686;
var statearr_28702_28737 = state_28686__$1;
(statearr_28702_28737[(2)] = null);

(statearr_28702_28737[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28687 === (6))){
var inst_28627 = (state_28686[(13)]);
var inst_28636 = f.call(null,inst_28627);
var inst_28637 = cljs.core.seq.call(null,inst_28636);
var inst_28638 = inst_28637;
var inst_28639 = null;
var inst_28640 = (0);
var inst_28641 = (0);
var state_28686__$1 = (function (){var statearr_28703 = state_28686;
(statearr_28703[(8)] = inst_28638);

(statearr_28703[(9)] = inst_28640);

(statearr_28703[(11)] = inst_28641);

(statearr_28703[(12)] = inst_28639);

return statearr_28703;
})();
var statearr_28704_28738 = state_28686__$1;
(statearr_28704_28738[(2)] = null);

(statearr_28704_28738[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28687 === (17))){
var inst_28652 = (state_28686[(7)]);
var inst_28656 = cljs.core.chunk_first.call(null,inst_28652);
var inst_28657 = cljs.core.chunk_rest.call(null,inst_28652);
var inst_28658 = cljs.core.count.call(null,inst_28656);
var inst_28638 = inst_28657;
var inst_28639 = inst_28656;
var inst_28640 = inst_28658;
var inst_28641 = (0);
var state_28686__$1 = (function (){var statearr_28705 = state_28686;
(statearr_28705[(8)] = inst_28638);

(statearr_28705[(9)] = inst_28640);

(statearr_28705[(11)] = inst_28641);

(statearr_28705[(12)] = inst_28639);

return statearr_28705;
})();
var statearr_28706_28739 = state_28686__$1;
(statearr_28706_28739[(2)] = null);

(statearr_28706_28739[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28687 === (3))){
var inst_28684 = (state_28686[(2)]);
var state_28686__$1 = state_28686;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28686__$1,inst_28684);
} else {
if((state_val_28687 === (12))){
var inst_28672 = (state_28686[(2)]);
var state_28686__$1 = state_28686;
var statearr_28707_28740 = state_28686__$1;
(statearr_28707_28740[(2)] = inst_28672);

(statearr_28707_28740[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28687 === (2))){
var state_28686__$1 = state_28686;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28686__$1,(4),in$);
} else {
if((state_val_28687 === (23))){
var inst_28680 = (state_28686[(2)]);
var state_28686__$1 = state_28686;
var statearr_28708_28741 = state_28686__$1;
(statearr_28708_28741[(2)] = inst_28680);

(statearr_28708_28741[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28687 === (19))){
var inst_28667 = (state_28686[(2)]);
var state_28686__$1 = state_28686;
var statearr_28709_28742 = state_28686__$1;
(statearr_28709_28742[(2)] = inst_28667);

(statearr_28709_28742[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28687 === (11))){
var inst_28638 = (state_28686[(8)]);
var inst_28652 = (state_28686[(7)]);
var inst_28652__$1 = cljs.core.seq.call(null,inst_28638);
var state_28686__$1 = (function (){var statearr_28710 = state_28686;
(statearr_28710[(7)] = inst_28652__$1);

return statearr_28710;
})();
if(inst_28652__$1){
var statearr_28711_28743 = state_28686__$1;
(statearr_28711_28743[(1)] = (14));

} else {
var statearr_28712_28744 = state_28686__$1;
(statearr_28712_28744[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28687 === (9))){
var inst_28674 = (state_28686[(2)]);
var inst_28675 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_28686__$1 = (function (){var statearr_28713 = state_28686;
(statearr_28713[(15)] = inst_28674);

return statearr_28713;
})();
if(cljs.core.truth_(inst_28675)){
var statearr_28714_28745 = state_28686__$1;
(statearr_28714_28745[(1)] = (21));

} else {
var statearr_28715_28746 = state_28686__$1;
(statearr_28715_28746[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28687 === (5))){
var inst_28630 = cljs.core.async.close_BANG_.call(null,out);
var state_28686__$1 = state_28686;
var statearr_28716_28747 = state_28686__$1;
(statearr_28716_28747[(2)] = inst_28630);

(statearr_28716_28747[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28687 === (14))){
var inst_28652 = (state_28686[(7)]);
var inst_28654 = cljs.core.chunked_seq_QMARK_.call(null,inst_28652);
var state_28686__$1 = state_28686;
if(inst_28654){
var statearr_28717_28748 = state_28686__$1;
(statearr_28717_28748[(1)] = (17));

} else {
var statearr_28718_28749 = state_28686__$1;
(statearr_28718_28749[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28687 === (16))){
var inst_28670 = (state_28686[(2)]);
var state_28686__$1 = state_28686;
var statearr_28719_28750 = state_28686__$1;
(statearr_28719_28750[(2)] = inst_28670);

(statearr_28719_28750[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28687 === (10))){
var inst_28641 = (state_28686[(11)]);
var inst_28639 = (state_28686[(12)]);
var inst_28646 = cljs.core._nth.call(null,inst_28639,inst_28641);
var state_28686__$1 = state_28686;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28686__$1,(13),out,inst_28646);
} else {
if((state_val_28687 === (18))){
var inst_28652 = (state_28686[(7)]);
var inst_28661 = cljs.core.first.call(null,inst_28652);
var state_28686__$1 = state_28686;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28686__$1,(20),out,inst_28661);
} else {
if((state_val_28687 === (8))){
var inst_28640 = (state_28686[(9)]);
var inst_28641 = (state_28686[(11)]);
var inst_28643 = (inst_28641 < inst_28640);
var inst_28644 = inst_28643;
var state_28686__$1 = state_28686;
if(cljs.core.truth_(inst_28644)){
var statearr_28720_28751 = state_28686__$1;
(statearr_28720_28751[(1)] = (10));

} else {
var statearr_28721_28752 = state_28686__$1;
(statearr_28721_28752[(1)] = (11));

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
});})(c__21099__auto__))
;
return ((function (switch__21037__auto__,c__21099__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__21038__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__21038__auto____0 = (function (){
var statearr_28725 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28725[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__21038__auto__);

(statearr_28725[(1)] = (1));

return statearr_28725;
});
var cljs$core$async$mapcat_STAR__$_state_machine__21038__auto____1 = (function (state_28686){
while(true){
var ret_value__21039__auto__ = (function (){try{while(true){
var result__21040__auto__ = switch__21037__auto__.call(null,state_28686);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21040__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21040__auto__;
}
break;
}
}catch (e28726){if((e28726 instanceof Object)){
var ex__21041__auto__ = e28726;
var statearr_28727_28753 = state_28686;
(statearr_28727_28753[(5)] = ex__21041__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28686);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28726;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21039__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28754 = state_28686;
state_28686 = G__28754;
continue;
} else {
return ret_value__21039__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__21038__auto__ = function(state_28686){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__21038__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__21038__auto____1.call(this,state_28686);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__21038__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__21038__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__21038__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__21038__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__21038__auto__;
})()
;})(switch__21037__auto__,c__21099__auto__))
})();
var state__21101__auto__ = (function (){var statearr_28728 = f__21100__auto__.call(null);
(statearr_28728[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21099__auto__);

return statearr_28728;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21101__auto__);
});})(c__21099__auto__))
);

return c__21099__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(){
var G__28756 = arguments.length;
switch (G__28756) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(){
var G__28759 = arguments.length;
switch (G__28759) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(){
var G__28762 = arguments.length;
switch (G__28762) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21099__auto___28812 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21099__auto___28812,out){
return (function (){
var f__21100__auto__ = (function (){var switch__21037__auto__ = ((function (c__21099__auto___28812,out){
return (function (state_28786){
var state_val_28787 = (state_28786[(1)]);
if((state_val_28787 === (7))){
var inst_28781 = (state_28786[(2)]);
var state_28786__$1 = state_28786;
var statearr_28788_28813 = state_28786__$1;
(statearr_28788_28813[(2)] = inst_28781);

(statearr_28788_28813[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28787 === (1))){
var inst_28763 = null;
var state_28786__$1 = (function (){var statearr_28789 = state_28786;
(statearr_28789[(7)] = inst_28763);

return statearr_28789;
})();
var statearr_28790_28814 = state_28786__$1;
(statearr_28790_28814[(2)] = null);

(statearr_28790_28814[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28787 === (4))){
var inst_28766 = (state_28786[(8)]);
var inst_28766__$1 = (state_28786[(2)]);
var inst_28767 = (inst_28766__$1 == null);
var inst_28768 = cljs.core.not.call(null,inst_28767);
var state_28786__$1 = (function (){var statearr_28791 = state_28786;
(statearr_28791[(8)] = inst_28766__$1);

return statearr_28791;
})();
if(inst_28768){
var statearr_28792_28815 = state_28786__$1;
(statearr_28792_28815[(1)] = (5));

} else {
var statearr_28793_28816 = state_28786__$1;
(statearr_28793_28816[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28787 === (6))){
var state_28786__$1 = state_28786;
var statearr_28794_28817 = state_28786__$1;
(statearr_28794_28817[(2)] = null);

(statearr_28794_28817[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28787 === (3))){
var inst_28783 = (state_28786[(2)]);
var inst_28784 = cljs.core.async.close_BANG_.call(null,out);
var state_28786__$1 = (function (){var statearr_28795 = state_28786;
(statearr_28795[(9)] = inst_28783);

return statearr_28795;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28786__$1,inst_28784);
} else {
if((state_val_28787 === (2))){
var state_28786__$1 = state_28786;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28786__$1,(4),ch);
} else {
if((state_val_28787 === (11))){
var inst_28766 = (state_28786[(8)]);
var inst_28775 = (state_28786[(2)]);
var inst_28763 = inst_28766;
var state_28786__$1 = (function (){var statearr_28796 = state_28786;
(statearr_28796[(10)] = inst_28775);

(statearr_28796[(7)] = inst_28763);

return statearr_28796;
})();
var statearr_28797_28818 = state_28786__$1;
(statearr_28797_28818[(2)] = null);

(statearr_28797_28818[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28787 === (9))){
var inst_28766 = (state_28786[(8)]);
var state_28786__$1 = state_28786;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28786__$1,(11),out,inst_28766);
} else {
if((state_val_28787 === (5))){
var inst_28766 = (state_28786[(8)]);
var inst_28763 = (state_28786[(7)]);
var inst_28770 = cljs.core._EQ_.call(null,inst_28766,inst_28763);
var state_28786__$1 = state_28786;
if(inst_28770){
var statearr_28799_28819 = state_28786__$1;
(statearr_28799_28819[(1)] = (8));

} else {
var statearr_28800_28820 = state_28786__$1;
(statearr_28800_28820[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28787 === (10))){
var inst_28778 = (state_28786[(2)]);
var state_28786__$1 = state_28786;
var statearr_28801_28821 = state_28786__$1;
(statearr_28801_28821[(2)] = inst_28778);

(statearr_28801_28821[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28787 === (8))){
var inst_28763 = (state_28786[(7)]);
var tmp28798 = inst_28763;
var inst_28763__$1 = tmp28798;
var state_28786__$1 = (function (){var statearr_28802 = state_28786;
(statearr_28802[(7)] = inst_28763__$1);

return statearr_28802;
})();
var statearr_28803_28822 = state_28786__$1;
(statearr_28803_28822[(2)] = null);

(statearr_28803_28822[(1)] = (2));


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
});})(c__21099__auto___28812,out))
;
return ((function (switch__21037__auto__,c__21099__auto___28812,out){
return (function() {
var cljs$core$async$state_machine__21038__auto__ = null;
var cljs$core$async$state_machine__21038__auto____0 = (function (){
var statearr_28807 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28807[(0)] = cljs$core$async$state_machine__21038__auto__);

(statearr_28807[(1)] = (1));

return statearr_28807;
});
var cljs$core$async$state_machine__21038__auto____1 = (function (state_28786){
while(true){
var ret_value__21039__auto__ = (function (){try{while(true){
var result__21040__auto__ = switch__21037__auto__.call(null,state_28786);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21040__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21040__auto__;
}
break;
}
}catch (e28808){if((e28808 instanceof Object)){
var ex__21041__auto__ = e28808;
var statearr_28809_28823 = state_28786;
(statearr_28809_28823[(5)] = ex__21041__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28786);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28808;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21039__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28824 = state_28786;
state_28786 = G__28824;
continue;
} else {
return ret_value__21039__auto__;
}
break;
}
});
cljs$core$async$state_machine__21038__auto__ = function(state_28786){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21038__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21038__auto____1.call(this,state_28786);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21038__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21038__auto____0;
cljs$core$async$state_machine__21038__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21038__auto____1;
return cljs$core$async$state_machine__21038__auto__;
})()
;})(switch__21037__auto__,c__21099__auto___28812,out))
})();
var state__21101__auto__ = (function (){var statearr_28810 = f__21100__auto__.call(null);
(statearr_28810[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21099__auto___28812);

return statearr_28810;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21101__auto__);
});})(c__21099__auto___28812,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(){
var G__28826 = arguments.length;
switch (G__28826) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21099__auto___28895 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21099__auto___28895,out){
return (function (){
var f__21100__auto__ = (function (){var switch__21037__auto__ = ((function (c__21099__auto___28895,out){
return (function (state_28864){
var state_val_28865 = (state_28864[(1)]);
if((state_val_28865 === (7))){
var inst_28860 = (state_28864[(2)]);
var state_28864__$1 = state_28864;
var statearr_28866_28896 = state_28864__$1;
(statearr_28866_28896[(2)] = inst_28860);

(statearr_28866_28896[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28865 === (1))){
var inst_28827 = (new Array(n));
var inst_28828 = inst_28827;
var inst_28829 = (0);
var state_28864__$1 = (function (){var statearr_28867 = state_28864;
(statearr_28867[(7)] = inst_28829);

(statearr_28867[(8)] = inst_28828);

return statearr_28867;
})();
var statearr_28868_28897 = state_28864__$1;
(statearr_28868_28897[(2)] = null);

(statearr_28868_28897[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28865 === (4))){
var inst_28832 = (state_28864[(9)]);
var inst_28832__$1 = (state_28864[(2)]);
var inst_28833 = (inst_28832__$1 == null);
var inst_28834 = cljs.core.not.call(null,inst_28833);
var state_28864__$1 = (function (){var statearr_28869 = state_28864;
(statearr_28869[(9)] = inst_28832__$1);

return statearr_28869;
})();
if(inst_28834){
var statearr_28870_28898 = state_28864__$1;
(statearr_28870_28898[(1)] = (5));

} else {
var statearr_28871_28899 = state_28864__$1;
(statearr_28871_28899[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28865 === (15))){
var inst_28854 = (state_28864[(2)]);
var state_28864__$1 = state_28864;
var statearr_28872_28900 = state_28864__$1;
(statearr_28872_28900[(2)] = inst_28854);

(statearr_28872_28900[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28865 === (13))){
var state_28864__$1 = state_28864;
var statearr_28873_28901 = state_28864__$1;
(statearr_28873_28901[(2)] = null);

(statearr_28873_28901[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28865 === (6))){
var inst_28829 = (state_28864[(7)]);
var inst_28850 = (inst_28829 > (0));
var state_28864__$1 = state_28864;
if(cljs.core.truth_(inst_28850)){
var statearr_28874_28902 = state_28864__$1;
(statearr_28874_28902[(1)] = (12));

} else {
var statearr_28875_28903 = state_28864__$1;
(statearr_28875_28903[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28865 === (3))){
var inst_28862 = (state_28864[(2)]);
var state_28864__$1 = state_28864;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28864__$1,inst_28862);
} else {
if((state_val_28865 === (12))){
var inst_28828 = (state_28864[(8)]);
var inst_28852 = cljs.core.vec.call(null,inst_28828);
var state_28864__$1 = state_28864;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28864__$1,(15),out,inst_28852);
} else {
if((state_val_28865 === (2))){
var state_28864__$1 = state_28864;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28864__$1,(4),ch);
} else {
if((state_val_28865 === (11))){
var inst_28844 = (state_28864[(2)]);
var inst_28845 = (new Array(n));
var inst_28828 = inst_28845;
var inst_28829 = (0);
var state_28864__$1 = (function (){var statearr_28876 = state_28864;
(statearr_28876[(10)] = inst_28844);

(statearr_28876[(7)] = inst_28829);

(statearr_28876[(8)] = inst_28828);

return statearr_28876;
})();
var statearr_28877_28904 = state_28864__$1;
(statearr_28877_28904[(2)] = null);

(statearr_28877_28904[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28865 === (9))){
var inst_28828 = (state_28864[(8)]);
var inst_28842 = cljs.core.vec.call(null,inst_28828);
var state_28864__$1 = state_28864;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28864__$1,(11),out,inst_28842);
} else {
if((state_val_28865 === (5))){
var inst_28837 = (state_28864[(11)]);
var inst_28829 = (state_28864[(7)]);
var inst_28828 = (state_28864[(8)]);
var inst_28832 = (state_28864[(9)]);
var inst_28836 = (inst_28828[inst_28829] = inst_28832);
var inst_28837__$1 = (inst_28829 + (1));
var inst_28838 = (inst_28837__$1 < n);
var state_28864__$1 = (function (){var statearr_28878 = state_28864;
(statearr_28878[(11)] = inst_28837__$1);

(statearr_28878[(12)] = inst_28836);

return statearr_28878;
})();
if(cljs.core.truth_(inst_28838)){
var statearr_28879_28905 = state_28864__$1;
(statearr_28879_28905[(1)] = (8));

} else {
var statearr_28880_28906 = state_28864__$1;
(statearr_28880_28906[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28865 === (14))){
var inst_28857 = (state_28864[(2)]);
var inst_28858 = cljs.core.async.close_BANG_.call(null,out);
var state_28864__$1 = (function (){var statearr_28882 = state_28864;
(statearr_28882[(13)] = inst_28857);

return statearr_28882;
})();
var statearr_28883_28907 = state_28864__$1;
(statearr_28883_28907[(2)] = inst_28858);

(statearr_28883_28907[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28865 === (10))){
var inst_28848 = (state_28864[(2)]);
var state_28864__$1 = state_28864;
var statearr_28884_28908 = state_28864__$1;
(statearr_28884_28908[(2)] = inst_28848);

(statearr_28884_28908[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28865 === (8))){
var inst_28837 = (state_28864[(11)]);
var inst_28828 = (state_28864[(8)]);
var tmp28881 = inst_28828;
var inst_28828__$1 = tmp28881;
var inst_28829 = inst_28837;
var state_28864__$1 = (function (){var statearr_28885 = state_28864;
(statearr_28885[(7)] = inst_28829);

(statearr_28885[(8)] = inst_28828__$1);

return statearr_28885;
})();
var statearr_28886_28909 = state_28864__$1;
(statearr_28886_28909[(2)] = null);

(statearr_28886_28909[(1)] = (2));


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
});})(c__21099__auto___28895,out))
;
return ((function (switch__21037__auto__,c__21099__auto___28895,out){
return (function() {
var cljs$core$async$state_machine__21038__auto__ = null;
var cljs$core$async$state_machine__21038__auto____0 = (function (){
var statearr_28890 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28890[(0)] = cljs$core$async$state_machine__21038__auto__);

(statearr_28890[(1)] = (1));

return statearr_28890;
});
var cljs$core$async$state_machine__21038__auto____1 = (function (state_28864){
while(true){
var ret_value__21039__auto__ = (function (){try{while(true){
var result__21040__auto__ = switch__21037__auto__.call(null,state_28864);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21040__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21040__auto__;
}
break;
}
}catch (e28891){if((e28891 instanceof Object)){
var ex__21041__auto__ = e28891;
var statearr_28892_28910 = state_28864;
(statearr_28892_28910[(5)] = ex__21041__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28864);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28891;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21039__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28911 = state_28864;
state_28864 = G__28911;
continue;
} else {
return ret_value__21039__auto__;
}
break;
}
});
cljs$core$async$state_machine__21038__auto__ = function(state_28864){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21038__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21038__auto____1.call(this,state_28864);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21038__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21038__auto____0;
cljs$core$async$state_machine__21038__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21038__auto____1;
return cljs$core$async$state_machine__21038__auto__;
})()
;})(switch__21037__auto__,c__21099__auto___28895,out))
})();
var state__21101__auto__ = (function (){var statearr_28893 = f__21100__auto__.call(null);
(statearr_28893[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21099__auto___28895);

return statearr_28893;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21101__auto__);
});})(c__21099__auto___28895,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(){
var G__28913 = arguments.length;
switch (G__28913) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21099__auto___28986 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21099__auto___28986,out){
return (function (){
var f__21100__auto__ = (function (){var switch__21037__auto__ = ((function (c__21099__auto___28986,out){
return (function (state_28955){
var state_val_28956 = (state_28955[(1)]);
if((state_val_28956 === (7))){
var inst_28951 = (state_28955[(2)]);
var state_28955__$1 = state_28955;
var statearr_28957_28987 = state_28955__$1;
(statearr_28957_28987[(2)] = inst_28951);

(statearr_28957_28987[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28956 === (1))){
var inst_28914 = [];
var inst_28915 = inst_28914;
var inst_28916 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_28955__$1 = (function (){var statearr_28958 = state_28955;
(statearr_28958[(7)] = inst_28915);

(statearr_28958[(8)] = inst_28916);

return statearr_28958;
})();
var statearr_28959_28988 = state_28955__$1;
(statearr_28959_28988[(2)] = null);

(statearr_28959_28988[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28956 === (4))){
var inst_28919 = (state_28955[(9)]);
var inst_28919__$1 = (state_28955[(2)]);
var inst_28920 = (inst_28919__$1 == null);
var inst_28921 = cljs.core.not.call(null,inst_28920);
var state_28955__$1 = (function (){var statearr_28960 = state_28955;
(statearr_28960[(9)] = inst_28919__$1);

return statearr_28960;
})();
if(inst_28921){
var statearr_28961_28989 = state_28955__$1;
(statearr_28961_28989[(1)] = (5));

} else {
var statearr_28962_28990 = state_28955__$1;
(statearr_28962_28990[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28956 === (15))){
var inst_28945 = (state_28955[(2)]);
var state_28955__$1 = state_28955;
var statearr_28963_28991 = state_28955__$1;
(statearr_28963_28991[(2)] = inst_28945);

(statearr_28963_28991[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28956 === (13))){
var state_28955__$1 = state_28955;
var statearr_28964_28992 = state_28955__$1;
(statearr_28964_28992[(2)] = null);

(statearr_28964_28992[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28956 === (6))){
var inst_28915 = (state_28955[(7)]);
var inst_28940 = inst_28915.length;
var inst_28941 = (inst_28940 > (0));
var state_28955__$1 = state_28955;
if(cljs.core.truth_(inst_28941)){
var statearr_28965_28993 = state_28955__$1;
(statearr_28965_28993[(1)] = (12));

} else {
var statearr_28966_28994 = state_28955__$1;
(statearr_28966_28994[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28956 === (3))){
var inst_28953 = (state_28955[(2)]);
var state_28955__$1 = state_28955;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28955__$1,inst_28953);
} else {
if((state_val_28956 === (12))){
var inst_28915 = (state_28955[(7)]);
var inst_28943 = cljs.core.vec.call(null,inst_28915);
var state_28955__$1 = state_28955;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28955__$1,(15),out,inst_28943);
} else {
if((state_val_28956 === (2))){
var state_28955__$1 = state_28955;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28955__$1,(4),ch);
} else {
if((state_val_28956 === (11))){
var inst_28923 = (state_28955[(10)]);
var inst_28919 = (state_28955[(9)]);
var inst_28933 = (state_28955[(2)]);
var inst_28934 = [];
var inst_28935 = inst_28934.push(inst_28919);
var inst_28915 = inst_28934;
var inst_28916 = inst_28923;
var state_28955__$1 = (function (){var statearr_28967 = state_28955;
(statearr_28967[(11)] = inst_28935);

(statearr_28967[(7)] = inst_28915);

(statearr_28967[(8)] = inst_28916);

(statearr_28967[(12)] = inst_28933);

return statearr_28967;
})();
var statearr_28968_28995 = state_28955__$1;
(statearr_28968_28995[(2)] = null);

(statearr_28968_28995[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28956 === (9))){
var inst_28915 = (state_28955[(7)]);
var inst_28931 = cljs.core.vec.call(null,inst_28915);
var state_28955__$1 = state_28955;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28955__$1,(11),out,inst_28931);
} else {
if((state_val_28956 === (5))){
var inst_28923 = (state_28955[(10)]);
var inst_28919 = (state_28955[(9)]);
var inst_28916 = (state_28955[(8)]);
var inst_28923__$1 = f.call(null,inst_28919);
var inst_28924 = cljs.core._EQ_.call(null,inst_28923__$1,inst_28916);
var inst_28925 = cljs.core.keyword_identical_QMARK_.call(null,inst_28916,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_28926 = (inst_28924) || (inst_28925);
var state_28955__$1 = (function (){var statearr_28969 = state_28955;
(statearr_28969[(10)] = inst_28923__$1);

return statearr_28969;
})();
if(cljs.core.truth_(inst_28926)){
var statearr_28970_28996 = state_28955__$1;
(statearr_28970_28996[(1)] = (8));

} else {
var statearr_28971_28997 = state_28955__$1;
(statearr_28971_28997[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28956 === (14))){
var inst_28948 = (state_28955[(2)]);
var inst_28949 = cljs.core.async.close_BANG_.call(null,out);
var state_28955__$1 = (function (){var statearr_28973 = state_28955;
(statearr_28973[(13)] = inst_28948);

return statearr_28973;
})();
var statearr_28974_28998 = state_28955__$1;
(statearr_28974_28998[(2)] = inst_28949);

(statearr_28974_28998[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28956 === (10))){
var inst_28938 = (state_28955[(2)]);
var state_28955__$1 = state_28955;
var statearr_28975_28999 = state_28955__$1;
(statearr_28975_28999[(2)] = inst_28938);

(statearr_28975_28999[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28956 === (8))){
var inst_28923 = (state_28955[(10)]);
var inst_28919 = (state_28955[(9)]);
var inst_28915 = (state_28955[(7)]);
var inst_28928 = inst_28915.push(inst_28919);
var tmp28972 = inst_28915;
var inst_28915__$1 = tmp28972;
var inst_28916 = inst_28923;
var state_28955__$1 = (function (){var statearr_28976 = state_28955;
(statearr_28976[(7)] = inst_28915__$1);

(statearr_28976[(14)] = inst_28928);

(statearr_28976[(8)] = inst_28916);

return statearr_28976;
})();
var statearr_28977_29000 = state_28955__$1;
(statearr_28977_29000[(2)] = null);

(statearr_28977_29000[(1)] = (2));


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
});})(c__21099__auto___28986,out))
;
return ((function (switch__21037__auto__,c__21099__auto___28986,out){
return (function() {
var cljs$core$async$state_machine__21038__auto__ = null;
var cljs$core$async$state_machine__21038__auto____0 = (function (){
var statearr_28981 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28981[(0)] = cljs$core$async$state_machine__21038__auto__);

(statearr_28981[(1)] = (1));

return statearr_28981;
});
var cljs$core$async$state_machine__21038__auto____1 = (function (state_28955){
while(true){
var ret_value__21039__auto__ = (function (){try{while(true){
var result__21040__auto__ = switch__21037__auto__.call(null,state_28955);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21040__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21040__auto__;
}
break;
}
}catch (e28982){if((e28982 instanceof Object)){
var ex__21041__auto__ = e28982;
var statearr_28983_29001 = state_28955;
(statearr_28983_29001[(5)] = ex__21041__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28955);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28982;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21039__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29002 = state_28955;
state_28955 = G__29002;
continue;
} else {
return ret_value__21039__auto__;
}
break;
}
});
cljs$core$async$state_machine__21038__auto__ = function(state_28955){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21038__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21038__auto____1.call(this,state_28955);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21038__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21038__auto____0;
cljs$core$async$state_machine__21038__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21038__auto____1;
return cljs$core$async$state_machine__21038__auto__;
})()
;})(switch__21037__auto__,c__21099__auto___28986,out))
})();
var state__21101__auto__ = (function (){var statearr_28984 = f__21100__auto__.call(null);
(statearr_28984[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21099__auto___28986);

return statearr_28984;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21101__auto__);
});})(c__21099__auto___28986,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map