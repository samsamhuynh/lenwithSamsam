;/*FB_PKG_DELIM*/

__d("LSGetIfViewerIsWorkplaceUser",["gkx"],(function(a,b,c,d,e,f,g){function a(){var a=arguments,b=a[a.length-1];b.n;var d=[];return d[0]=c("gkx")("7530"),b.resolve(d)}b=a;g["default"]=b}),98);
__d("LSGetThreadParticipantDisplayName",["LSGetIfViewerIsWorkplaceUser"],(function(a,b,c,d,e,f){function a(){var a=arguments,c=a[a.length-1];c.n;var d=[],e=[],f;return c.seq([function(g){return c.seq([function(a){return c.sp(b("LSGetIfViewerIsWorkplaceUser")).then(function(a){return a=a,d[0]=a[0],a})},function(b){return d[0]?c.seq([function(b){return c.ftr(c.db.table(7).fetch([[[a[1]]]]),function(b){return c.i64.eq(b.id,a[1])&&c.i64.eq(c.i64.cast([0,1]),c.i64.cast([0,1]))}).next().then(function(a,b){var e=a.done;a=a.value;return e?c.seq([function(a){return c.localizeV2Async(c.i64.cast([0,2352696798]),f).then(function(a){return d[4]=a})},function(a){return d[2]=d[4]}]):(b=a.item,d[2]=b.name)})},function(a){return d[1]=d[2]}]):c.seq([function(b){return c.ftr(c.db.table(14).fetch([[[a[0],a[1]]]]),function(b){return c.i64.eq(b.threadKey,a[0])&&c.i64.eq(c.i64.cast([0,0]),c.i64.cast([0,0]))&&c.i64.eq(b.contactId,a[1])}).next().then(function(a,b){var c=a.done;a=a.value;return c?d[2]=f:(b=a.item,d[2]=b.nickname)})},function(b){return c.ftr(c.db.table(7).fetch([[[a[1]]]]),function(b){return c.i64.eq(b.id,a[1])&&c.i64.eq(c.i64.cast([0,1]),c.i64.cast([0,1]))}).next().then(function(a,b){var e=a.done;a=a.value;return e?c.seq([function(a){return c.localizeV2Async(c.i64.cast([0,14617150]),f).then(function(a){return d[6]=a})},function(a){return d[4]=d[6]}]):(b=a.item,d[4]=b.firstName==null?b.name:b.firstName)})},function(a){return d[1]=d[2]==null?d[4]:d[2]}])},function(a){return e[0]=d[1]}])},function(a){return c.resolve(e)}])}c=a;f["default"]=c}),66);
__d("LSUpdateOrInsertReactionV2",[],(function(a,b,c,d,e,f){function a(){var a=arguments,b=a[a.length-1];b.n;var c=[],d=[];return b.seq([function(d){return b.db.table(226).fetch([[[a[0],a[1],a[2]]]]).next().then(function(d,e){var f=d.done;d=d.value;return f?b.db.table(12).fetch([[[a[1]]],"messageId"]).next().then(function(d,e){var c=d.done;d=d.value;return c?0:(e=d.item,b.seq([function(c){return b.fe(b.ftr(b.db.table(226).fetch([[[a[0],a[1],a[2]]]]),function(c){return b.i64.eq(c.threadKey,a[0])&&c.messageId===a[1]&&b.i64.eq(c.reactionFbid,a[2])&&b.i64.lt(c.authorityLevel,a[5])}),function(a){return a["delete"]()})},function(c){return b.db.table(226).add({messageId:a[1],threadKey:a[0],reactionFbid:a[2],messageTimestamp:e.timestampMs,authorityLevel:a[5],count:a[4],viewerIsReactor:a[6],viewerReactionTimestampMs:a[7],lastUpdatedTimestampMs:a[8]})}]))}):(e=d.item,c[2]=e.lastUpdatedTimestampMs,c[1]=e.authorityLevel,b.i64.eq(a[5],b.i64.cast([0,20]))||b.i64.eq(c[1],b.i64.cast([0,80]))&&b.i64.eq(a[5],b.i64.cast([0,80]))||b.i64.eq(c[1],b.i64.cast([0,20]))&&b.i64.eq(a[5],b.i64.cast([0,80]))&&b.i64.le(b.i64.add(c[2],b.i64.cast([0,2e3])),a[8])||b.i64.eq(c[1],b.i64.cast([0,20]))&&b.i64.eq(a[5],b.i64.cast([0,60]))||b.i64.eq(c[1],b.i64.cast([0,60]))&&b.i64.eq(a[5],b.i64.cast([0,80]))&&b.i64.le(c[2],a[8])?c[3]=!0:c[3]=!1,c[3]?b.db.table(226).put({messageId:a[1],threadKey:a[0],reactionFbid:a[2],messageTimestamp:e.messageTimestamp,reactionLiteral:a[3],count:a[4],authorityLevel:a[5],viewerIsReactor:a[6],viewerReactionTimestampMs:b.i64.cast([0,0]),lastUpdatedTimestampMs:a[8]}):b.resolve())})},function(a){return b.resolve(d)}])}b=a;f["default"]=b}),66);
__d("LSUpsertReaction",[],(function(a,b,c,d,e,f){function a(){var a=arguments,b=a[a.length-1];b.n;var c=[];return b.seq([function(c){return b.db.table(8).put({threadKey:a[0],messageId:a[2],actorId:a[3],timestampMs:a[1],reaction:a[4],authorityLevel:a[5]})},function(a){return b.resolve(c)}])}b=a;f["default"]=b}),66);
__d("CometMiddotSeparator.react",["CometMiddot.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){return h.Children.toArray(a.children).filter(Boolean).map(function(a,b){return h.jsxs(h.Fragment,{children:[b!==0?h.jsx(c("CometMiddot.react"),{}):null,a]},b)})}g["default"]=a}),98);
__d("MWXPopover.react",["cr:2420","cr:2457","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a,c){if(b("cr:2420")!=null)return h.jsx(b("cr:2420"),babelHelpers["extends"]({},a,{ref:c}));return b("cr:2457")!=null?h.jsx(b("cr:2457"),babelHelpers["extends"]({},a,{ref:c})):null}a.displayName=a.name+" [from "+f.id+"]";c=h.forwardRef(a);g["default"]=c}),98);
__d("BehaviorsMixin",[],(function(a,b,c,d,e,f){var g=function(){function a(a){this.$1=a,this.$2=!1}var b=a.prototype;b.enable=function(){this.$2||(this.$2=!0,this.$1.enable())};b.disable=function(){this.$2&&(this.$2=!1,this.$1.disable())};return a}(),h=1;function i(a){a.__BEHAVIOR_ID||(a.__BEHAVIOR_ID=h++);return a.__BEHAVIOR_ID}a={enableBehavior:function(a){this._behaviors||(this._behaviors={});var b=i(a);this._behaviors[b]||(this._behaviors[b]=new g(new a(this)));this._behaviors[b].enable();return this},disableBehavior:function(a){if(this._behaviors){a=i(a);this._behaviors[a]&&this._behaviors[a].disable()}return this},enableBehaviors:function(a){a.forEach(this.enableBehavior,this);return this},destroyBehaviors:function(){if(this._behaviors){for(var a in this._behaviors)this._behaviors[a].disable();this._behaviors={}}},hasBehavior:function(a){return this._behaviors&&i(a)in this._behaviors}};b=a;f["default"]=b}),66);
__d("shield",[],(function(a,b,c,d,e,f){function a(a,b){for(var c=arguments.length,d=new Array(c>2?c-2:0),e=2;e<c;e++)d[e-2]=arguments[e];if(typeof a!=="function")throw new TypeError("shield expects a function as the first argument");return function(){return a.apply(b,d)}}f["default"]=a}),66);
__d("fbjs/lib/invariant",["invariant"],(function(a,b,c,d,e,f){"use strict";e.exports=b("invariant")}),null);
__d("fbjs/lib/warning",["warning"],(function(a,b,c,d,e,f){"use strict";e.exports=b("warning")}),null);
__d("GroupsCometAdminActivityLogItemSeeDetailsDialogQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="6637341129660361"}),null);