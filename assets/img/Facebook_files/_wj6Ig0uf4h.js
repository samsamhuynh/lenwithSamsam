;/*FB_PKG_DELIM*/

__d("CometRightRailContentArea.react",["CometRouteRenderType","CometScrollView.react","CometSection.react","HiddenSubtreeContextProvider.react","MWChatVisibilityOverrideContext","gkx","react","stylex","useMWShouldCurrentRouteOverrideChatVisibility","useShouldShowMessagingEntrypointOnCurrentRoute"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i=c("gkx")("708253"),j={alignContentCenter:{alignItems:"x6s0dn4",$$css:!0},alignContentStretch:{alignItems:"x1qjc9v5",$$css:!0},chatSliver:{backgroundColor:"x1jx94hy",boxShadow:"x13tw4yp",display:"x78zum5",end:"xds687c",height:"x5yr21d",position:"xixxii4",top:"xxzkxad",width:"x1dmp6jm",$$css:!0},content:{display:"x78zum5",flexDirection:"xdt5ytf",flexGrow:"x1iyjqo2",minWidth:"x1gvwcb",$$css:!0},contentArea:{display:"x78zum5",minHeight:"x1t2pt76",$$css:!0},contentCentered:{justifyContent:"xl56j7k",$$css:!0},contentContainer:{display:"x78zum5",flexDirection:"xdt5ytf",maxWidth:"x193iq5w",$$css:!0},rightRail:{backgroundColor:"x2bj2ny",display:"x78zum5",flexShrink:"x2lah0s",minHeight:"x1t2pt76",position:"x1n2onr6",$$css:!0},rightRailContainer:{backgroundColor:"x2bj2ny",display:"x78zum5",end:"xds687c",flexDirection:"xdt5ytf",maxHeight:"xnjgh8c",position:"xixxii4",width:"x1qrby5j","@media (max-width: 719px)_position":"xjabf5u",$$css:!0},rightRailContainerHeight:{minHeight:"xfmqk8h",top:"xxzkxad",$$css:!0},rightRailContainerHeightBlue:{minHeight:"x15juy95",top:"x1si2f76",$$css:!0},rightRailContainerPushViewHeader:{boxShadow:"xr9p91e",end:"xds687c",height:"x1s65kcs",pointerEvents:"x47corl",position:"x10l6tqk",start:"x17qophe",top:"x13vifvy",$$css:!0},rightRailContainerWithShadow:{boxSizing:"x1afcbsf",paddingStart:"x1k2j06m",$$css:!0},rightRailExpanded:{width:"xvr7zsw",$$css:!0},rightRailHidden:{display:"x1s85apg",$$css:!0},rightRailShadow:{backgroundColor:"x443n21",backgroundImage:"x5j3x9",backgroundRepeat:"x9wwp8f",backgroundSize:"xps4wih",bottom:"x1ey2m1c",pointerEvents:"x47corl",position:"x10l6tqk",start:"x17qophe",top:"x13vifvy",width:"x1g8rjiy",$$css:!0}},k={360:{width:"x1cvmir6",$$css:!0},400:{width:"x1l2rt3b",$$css:!0},440:{width:"x1peuizl",$$css:!0},480:{width:"xht4xr3",$$css:!0},520:{width:"xr6pica",$$css:!0}};function a(a){var b=a.alignContent;b=b===void 0?"center":b;var e=a.chatSliverHidden;e=e===void 0?!1:e;var f=a.children,g=a.hasShadow;g=g===void 0?!0:g;var l=a.rightRail,m=a.rightRailExpanded;m=m===void 0?!1:m;var n=a.rightRailHidden;n=n===void 0?!1:n;var o=a.rightRailWidth;o=o===void 0?360:o;var p=a.showsVerticalScrollIndicator;p=p===void 0?!0:p;a=a.verticalAlign;a=a===void 0?"top":a;var q=d("CometRouteRenderType").useIsPushView(),r=c("useShouldShowMessagingEntrypointOnCurrentRoute")("CHAT"),s=c("useMWShouldCurrentRouteOverrideChatVisibility")();s=d("MWChatVisibilityOverrideContext").useMWChatVisibilityOverride(s)&&!n;e=!e&&r&&s;return h.jsxs("div",{className:"x78zum5 x1t2pt76",children:[h.jsx(c("CometSection.react"),{className:c("stylex")(j.content,b==="center"&&j.alignContentCenter,b==="stretch"&&j.alignContentStretch,a==="middle"&&j.contentCentered),role:"main",children:h.jsx("div",{className:"x78zum5 xdt5ytf x193iq5w",children:f})}),h.jsxs(c("CometSection.react"),{className:c("stylex")(j.rightRail,k[e?String(Number(o)+80):o],n&&j.rightRailHidden,m&&!n&&j.rightRailExpanded),role:"complementary",children:[h.jsx(c("HiddenSubtreeContextProvider.react"),{isHidden:n,children:h.jsxs("div",{className:c("stylex")(j.rightRailContainer,i&&j.rightRailContainerHeight,!i&&j.rightRailContainerHeightBlue,g&&j.rightRailContainerWithShadow),children:[h.jsx(c("CometScrollView.react"),{showsHorizontalScrollIndicator:!1,showsVerticalScrollIndicator:p,xstyle:m?j.rightRailExpanded:k[o],children:l}),g&&h.jsx("div",{className:"x443n21 x5j3x9 x9wwp8f xps4wih x1ey2m1c x47corl x10l6tqk x17qophe x13vifvy x1g8rjiy"})]})}),e?h.jsx("div",{className:"x1jx94hy x13tw4yp x78zum5 xds687c x5yr21d xixxii4 xxzkxad x1dmp6jm"}):null,q&&h.jsx("div",{className:"xr9p91e xds687c x1s65kcs x47corl x10l6tqk x17qophe x13vifvy",children:g&&h.jsx("div",{className:"x443n21 x5j3x9 x9wwp8f xps4wih x1ey2m1c x47corl x10l6tqk x17qophe x13vifvy x1g8rjiy"})})]})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("convertToCometQuicklingURI",["ConstUriUtils","Env","URI","persistentQueryParams"],(function(a,b,c,d,e,f,g){"use strict";b=new(c("URI"))(String(document.location));var h=b.getOrigin();e=b.getQueryData();var i=Object.entries(e).reduce(function(a,b){var d=b[0];b=b[1];if(d==="sk")return a;c("persistentQueryParams").find(function(a){return a===d})&&(a[d]=b);return a},{});function j(a,b,d){var e=a.indexOf("?")!==-1?"&":"?";e=""+a+e+"cquick="+b+"&ctarget="+h+"&cquick_token="+((a=c("Env").compat_iframe_token)!=null?a:"");d&&(e+="&noCoBLog=true");return e}function a(a,b,e){var f;e===void 0&&(e=!1);var g=d("ConstUriUtils").getUri(a);if(g==null)return j(a,b,e);f=new Map([].concat(Object.entries({cquick:b,cquick_token:(f=c("Env").compat_iframe_token)!=null?f:"",ctarget:h}),Object.entries(i)));e&&f.set("noCoBLog","true");g=g.addQueryParams(f);return g==null?j(a,b,e):g.toString()}g["default"]=a}),98);
__d("getCompatIframeOrigin",["ConstUriUtils","FBLogger"],(function(a,b,c,d,e,f,g){"use strict";function a(a){var b=document.location.origin,e=d("ConstUriUtils").getUri(b);if(e==null){c("FBLogger")("comet_infra").mustfix("Failed to parse the origin `%s`",b);return b}b=e.getSubdomain();if(b==="comet"||b==="www"){b=e.setSubDomain(a);if(b!=null)return b.toString().slice(0,-1)}return e.toString().slice(0,-1)}g["default"]=a}),98);
__d("getMessageEventString",[],(function(a,b,c,d,e,f){"use strict";function a(a,b){a=a.data;if(typeof a==="object"){a=a==null?void 0:a[b];if(typeof a==="string")return a}return""}f["default"]=a}),66);
__d("CometCompatBroker",["BaseEventEmitter","CometAltpayJsSdkIframeAllowedDomains","FBLogger","JSScheduler","SecureMessageListener","convertToCometQuicklingURI","getCompatIframeOrigin","getMessageEventString"],(function(a,b,c,d,e,f,g){"use strict";a=function(a){babelHelpers.inheritsLoose(b,a);function b(){var b,e;for(var f=arguments.length,g=new Array(f),h=0;h<f;h++)g[h]=arguments[h];return(b=e=a.call.apply(a,[this].concat(g))||this,e.$CometCompatBroker1=null,e.$CometCompatBroker2="",e.$CometCompatBroker3=!1,e.$CometCompatBroker5=function(a){d("JSScheduler").scheduleNormalPriCallback(function(){var b=c("getMessageEventString")(a,"compatAction");if(b!==""){e.emit(b,a);return}c("FBLogger")("compat").mustfix("Invalid MessageEvent payload received")})},e.cleanup=function(){var a;(a=e.$CometCompatBroker4)==null?void 0:a.stopListening();e.$CometCompatBroker4=void 0;e.$CometCompatBroker3=!1},b)||babelHelpers.assertThisInitialized(e)}var e=b.prototype;e.init=function(a,b,d){var e=this;d===void 0&&(d=!1);this.$CometCompatBroker2=b;b=new(c("SecureMessageListener"))(window);b.setSupportedOrigins([].concat(["apps","secure","www"].map(c("getCompatIframeOrigin")),d?c("CometAltpayJsSdkIframeAllowedDomains").allowed_domains:[]).map(function(a){return a.replace(/(^\w+:|^)\/\//,"")}));d=function(b){e.setupMessageChannel(b,a)};this.$CometCompatBroker3||(b.setEventHandler(d).beginListening(),this.$CometCompatBroker3=!0,this.$CometCompatBroker4=b)};e.sendChildFrameMessage=function(a){this.$CometCompatBroker1&&this.$CometCompatBroker1.postMessage(babelHelpers["extends"]({},a))};e.sendChildFrameParams=function(a){this.sendChildFrameMessage(babelHelpers["extends"]({},a,{uri:c("convertToCometQuicklingURI")(a.uri,this.$CometCompatBroker2)}))};e.setupMessageChannel=function(a,b){var d=c("getMessageEventString")(a,"compatAction"),e=c("getMessageEventString")(a,"iframeKey");d==="CompatSetup"&&e===this.$CometCompatBroker2&&(this.$CometCompatBroker1&&this.$CometCompatBroker1.close(),a.ports!=null&&Array.isArray(a.ports)&&(this.$CometCompatBroker1=a.ports[0],this.$CometCompatBroker1.onmessage=this.$CometCompatBroker5,b()))};return b}(c("BaseEventEmitter"));g["default"]=a}),98);
__d("useLiveVideoCometInstreamRewardAlertDisplay",["createVideoStateHook"],(function(a,b,c,d,e,f,g){"use strict";a=d("createVideoStateHook").createVideoStateHook(null);b=a.setterHook;c=a.valueHook;e=b;f=c;g.useInstreamRewardAlertDisplayStateSetter=e;g.useInstreamRewardAlertDisplayStateValue=f}),98);
__d("CometOrionPlayerTabsContext",["emptyFunction","react","uuidv4"],(function(a,b,c,d,e,f,g){"use strict";a=d("react");b=a.createContext({addClientTab:function(){return c("uuidv4")()},clientTabs:[],removeClientTab:c("emptyFunction"),selectedTab:null,setSelectedTab:c("emptyFunction"),setUnreadReplyCount:c("emptyFunction"),shouldAnimateOnSelectTab:!1,unreadReplyCount:0});g["default"]=b}),98);
__d("CometHuddleSpeakerExperienceContext",["emptyFunction","react"],(function(a,b,c,d,e,f,g){"use strict";a=d("react");b=a.createContext({audioLinkHash:"",audioLinkUrl:"",cometBlueMessagingBrokerRef:null,funnelSessionID:"",hasSeenJoinAsSpeakerModal:!1,invitedSpeakerIds:[],isHuddleDashboard:!1,isLiveAudioSelected:!1,joinAsSpeakerAccepted:!1,qplJoinID:"",setAudioLinkHash:c("emptyFunction"),setAudioLinkUrl:c("emptyFunction"),setCometBlueMessagingBrokerRef:c("emptyFunction"),setFunnelSessionID:c("emptyFunction"),setHasSeenJoinAsSpeakerModal:c("emptyFunction"),setInvitedSpeakerIds:c("emptyFunction"),setIsHuddleDashboard:c("emptyFunction"),setIsLiveAudioSelected:c("emptyFunction"),setJoinAsSpeakerAccepted:c("emptyFunction"),setQplJoinID:c("emptyFunction"),setStartHuddleBroadcast:c("emptyFunction"),startHuddleBroadcast:!1});g["default"]=b}),98);
__d("parseJSONMixed",[],(function(a,b,c,d,e,f){"use strict";function a(a,b){return a==null?null:JSON.parse(a,b)}f["default"]=a}),66);
__d("tryParseJSONMixed",["parseJSONMixed"],(function(a,b,c,d,e,f,g){"use strict";function a(a,b){try{return c("parseJSONMixed")(a,b)}catch(a){return null}}g["default"]=a}),98);