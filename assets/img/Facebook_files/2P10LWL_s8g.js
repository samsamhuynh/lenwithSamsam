;/*FB_PKG_DELIM*/

__d("useMWV2RedirectToLatestReadThread",["I64","LSIntEnum","MWPIsThreadUnread.bs","MWPThreadsForThreadList.bs","MWThreadListSupportedThreadTypes.bs","ReQL","ReQLSubscription.bs","promiseDone","react","useCurrentRoute","useMWInboxURIState","useMWNavigation","useReStore"],(function(a,b,c,d,e,f,g){"use strict";b=d("react");var h=b.useCallback,i=b.useEffect,j=b.useRef,k={contents:!1};function l(a){return d("ReQL").firstAsync(d("ReQL").fromTableAscending(a.table("threads_ranges_v2__generated")).getKeyRange(d("LSIntEnum").ofNumber(0))).then(function(b){return d("ReQL").firstAsync(d("MWPThreadsForThreadList.bs").createIterable(a,d("LSIntEnum").ofNumber(0),(b=b)!=null?b:void 0).filter(function(a){if(!d("MWPIsThreadUnread.bs").isThreadUnread(a)&&!d("I64").equal(a.threadType,d("LSIntEnum").ofNumber(6)))return d("MWThreadListSupportedThreadTypes.bs").supportedThreadTypes.findIndex(function(b){return d("I64").equal(a.threadType,b)})!==-1;else return!1}))})}function a(){var a=c("useReStore")(),b=c("useCurrentRoute")(),e=j(b.url),f=j(!1);i(function(){e.current!==b.url&&(f.current=!0)},[b]);var g=c("useMWNavigation")(),m=h(function(){var b=d("useMWInboxURIState").getRouteTokens(e.current),h=b.length,i=!1;if(h>=3)i=!1;else switch(h){case 0:i=!1;break;case 1:i=b[0]==="";break;case 2:switch(b[1]){case"":case"t":i=!0;break;default:i=!1}break}if(i&&!k.contents&&!f.current){k.contents=!0;c("promiseDone")(l(a).then(function(a){if(a!=null)return g.openInbox({clientThreadKey:a.clientThreadKey,threadKey:a.threadKey,threadType:a.threadType},"inboxInitialLoad")}));return}},[g,f,e,a]);i(function(){var b=d("ReQLSubscription.bs").subscribe(a,d("ReQL").fromTableAscending(a.table("sync_groups")).getKeyRange(d("LSIntEnum").ofNumber(95)),function(a){if(a==null)return;if(a.length!==1)return;a=a[0];d("I64").equal(a.syncStatus,d("LSIntEnum").ofNumber(2))&&(m(),b())});return b},[a,e,m])}g["default"]=a}),98);
__d("MAWInboxInfoButton.react",["MWXListCellPressable.react","MWXText.react","MWXTextPairing.react","gkx","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");b=d("react").forwardRef;var i=c("gkx")("571")&&c("gkx")("1968579")?"contained":"normal";function a(a,b){var d=a.addOnEnd,e=a.addOnStart,f=a.addOnStartStyle,g=a.disabled,j=a.label,k=a.linkProps,l=a.onPress,m=a.subLabel,n=a.subLabelElement;a=a.testid;f=((a=f)!=null?a:i)==="contained";a=e!=null&&f?h.jsx("div",{className:"x6s0dn4 x1qhmfi1 x14yjl9h xudhj91 x18nykt9 xww2gxu x78zum5 x1fgtraw xl56j7k x1264ykn",children:e}):e;f=m!=null?h.jsx(c("MWXText.react"),{type:"meta3",children:m}):n!=null?h.jsx(c("MWXText.react"),{type:"meta3",children:n}):void 0;return h.jsx(c("MWXListCellPressable.react"),{addOnEnd:d,addOnStart:a,addOnStartVerticalAlign:"top",content:h.jsx(c("MWXTextPairing.react"),{headline:h.jsx(c("MWXText.react"),{type:"headline4",children:j}),level:4,meta:f}),disabled:g,linkProps:k,onPress:l,ref:b,size:"medium",testid:void 0})}a.displayName=a.name+" [from "+f.id+"]";e=b(a);d=e;g["default"]=d}),98);