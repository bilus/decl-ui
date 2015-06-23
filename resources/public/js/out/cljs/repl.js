// Compiled by ClojureScript 0.0-3308 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4423__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4423__auto__)){
var ns = temp__4423__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__25751_25763 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__25752_25764 = null;
var count__25753_25765 = (0);
var i__25754_25766 = (0);
while(true){
if((i__25754_25766 < count__25753_25765)){
var f_25767 = cljs.core._nth.call(null,chunk__25752_25764,i__25754_25766);
cljs.core.println.call(null,"  ",f_25767);

var G__25768 = seq__25751_25763;
var G__25769 = chunk__25752_25764;
var G__25770 = count__25753_25765;
var G__25771 = (i__25754_25766 + (1));
seq__25751_25763 = G__25768;
chunk__25752_25764 = G__25769;
count__25753_25765 = G__25770;
i__25754_25766 = G__25771;
continue;
} else {
var temp__4423__auto___25772 = cljs.core.seq.call(null,seq__25751_25763);
if(temp__4423__auto___25772){
var seq__25751_25773__$1 = temp__4423__auto___25772;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25751_25773__$1)){
var c__18872__auto___25774 = cljs.core.chunk_first.call(null,seq__25751_25773__$1);
var G__25775 = cljs.core.chunk_rest.call(null,seq__25751_25773__$1);
var G__25776 = c__18872__auto___25774;
var G__25777 = cljs.core.count.call(null,c__18872__auto___25774);
var G__25778 = (0);
seq__25751_25763 = G__25775;
chunk__25752_25764 = G__25776;
count__25753_25765 = G__25777;
i__25754_25766 = G__25778;
continue;
} else {
var f_25779 = cljs.core.first.call(null,seq__25751_25773__$1);
cljs.core.println.call(null,"  ",f_25779);

var G__25780 = cljs.core.next.call(null,seq__25751_25773__$1);
var G__25781 = null;
var G__25782 = (0);
var G__25783 = (0);
seq__25751_25763 = G__25780;
chunk__25752_25764 = G__25781;
count__25753_25765 = G__25782;
i__25754_25766 = G__25783;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_25784 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__18087__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__18087__auto__)){
return or__18087__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_25784);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_25784)))?cljs.core.second.call(null,arglists_25784):arglists_25784));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__25755 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__25756 = null;
var count__25757 = (0);
var i__25758 = (0);
while(true){
if((i__25758 < count__25757)){
var vec__25759 = cljs.core._nth.call(null,chunk__25756,i__25758);
var name = cljs.core.nth.call(null,vec__25759,(0),null);
var map__25760 = cljs.core.nth.call(null,vec__25759,(1),null);
var map__25760__$1 = ((cljs.core.seq_QMARK_.call(null,map__25760))?cljs.core.apply.call(null,cljs.core.hash_map,map__25760):map__25760);
var doc = cljs.core.get.call(null,map__25760__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__25760__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__25785 = seq__25755;
var G__25786 = chunk__25756;
var G__25787 = count__25757;
var G__25788 = (i__25758 + (1));
seq__25755 = G__25785;
chunk__25756 = G__25786;
count__25757 = G__25787;
i__25758 = G__25788;
continue;
} else {
var temp__4423__auto__ = cljs.core.seq.call(null,seq__25755);
if(temp__4423__auto__){
var seq__25755__$1 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25755__$1)){
var c__18872__auto__ = cljs.core.chunk_first.call(null,seq__25755__$1);
var G__25789 = cljs.core.chunk_rest.call(null,seq__25755__$1);
var G__25790 = c__18872__auto__;
var G__25791 = cljs.core.count.call(null,c__18872__auto__);
var G__25792 = (0);
seq__25755 = G__25789;
chunk__25756 = G__25790;
count__25757 = G__25791;
i__25758 = G__25792;
continue;
} else {
var vec__25761 = cljs.core.first.call(null,seq__25755__$1);
var name = cljs.core.nth.call(null,vec__25761,(0),null);
var map__25762 = cljs.core.nth.call(null,vec__25761,(1),null);
var map__25762__$1 = ((cljs.core.seq_QMARK_.call(null,map__25762))?cljs.core.apply.call(null,cljs.core.hash_map,map__25762):map__25762);
var doc = cljs.core.get.call(null,map__25762__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__25762__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__25793 = cljs.core.next.call(null,seq__25755__$1);
var G__25794 = null;
var G__25795 = (0);
var G__25796 = (0);
seq__25755 = G__25793;
chunk__25756 = G__25794;
count__25757 = G__25795;
i__25758 = G__25796;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map