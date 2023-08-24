;/*FB_PKG_DELIM*/

__d("InstantGamesAdTemplate",["$InternalEnum"],(function(a,b,c,d,e,f){"use strict";a=b("$InternalEnum")({Banner:"702",Interstitial:"600",RewardedVideo:"601",InterstitialMobile:"100",RewardedVideoMobile:"400"});c=a;f["default"]=c}),66);
__d("InstantGamesAdsBounceBackManager",[],(function(a,b,c,d,e,f){"use strict";a=function(){function a(a){this.$1=a}var b=a.prototype;b.attach=function(a){var b=this,c=function c(){b.$1.visibilityState==="visible"&&(a(Date.now()),b.$1.removeEventListener("visibilitychange",c))};this.$1.addEventListener("visibilitychange",c)};return a}();f["default"]=a}),66);
__d("ANMobileEndpointAdsLogger",["$InternalEnum","ConstUriUtils","InstantGamesAdsBounceBackManager","unrecoverableViolation","uuidv4"],(function(a,b,c,d,e,f,g){"use strict";var h=b("$InternalEnum").Mirrored(["InProgress","Logged","Unlogged"]);a=function(){function a(a,b,e){this.$8=[];this.$2=b;this.$4=h.Unlogged;this.$3=!1;this.$5=c("uuidv4")();this.$6=e;this.$7=null;this.$1=(a=(e=d("ConstUriUtils").getUri(a))==null?void 0:e.setPath("/adnw_logging"))!=null?a:null;this.clickGuardTimeMS=parseInt(b.clickguard_time_ms,10)}var b=a.prototype;b.isImpressionReported=function(){return this.$7!==null};b.addImpressionReportCallback=function(a){this.$8.push(a)};b.sendAdImpression=function(a){var b=this;switch(this.$4){case h.Unlogged:this.$4=h.InProgress;this.$7=this.$9();this.log("impression",this.$10(),function(a){b.$4=a?h.Logged:h.Unlogged});this.$8.forEach(function(a){a()});break;case h.InProgress:break;case h.Logged:break}a&&this.sendDebugFunnelImpressionLog({funnel_view_type:"UDMA"});this.sendDebugFunnelImpressionLog()};b.sendDebugFunnelImpressionLog=function(a){a===void 0};b.sendDebugFunnelClickLog=function(a){a===void 0};b.sendDebugFunnelAdCloseClickedLog=function(a){a===void 0};b.sendVideoEvent=function(a,b,c,d,e,f,g,h,i,j,k){var l,m=document.documentElement;a=(l={},l.action=a.toString(),l.autoplay="1",l.exoplayer="false",l.ph=d.height.toString(),l.pt=d.top.toString(),l.pl=d.left.toString(),l.pw=d.width.toString(),l.vph=Math.max((m==null?void 0:m.clientHeight)||0,window.innerHeight||0).toString(),l.vpw=Math.max((m==null?void 0:m.clientWidth)||0,window.innerWidth||0).toString(),l.vla=e.toString(),l.vlm=f.toString(),l.vlmax=g.toString(),l.atime_ms=h.toString(),l.mcat_ms=i.toString(),l.vwa="1.0",l.vwmax="1.0",l.vwm="1.0",l.vtime_ms=j.toString(),l.mcvt_ms=k.toString(),l.inline="1",l.prep="0",l.time=b.toString(),l.ptime=c.toString(),l.analog=JSON.stringify({}),l);this.log("video",a)};b.sendXout=function(a,b,c){a={options_selected:a===null?JSON.stringify([]):JSON.stringify([a]),user_journey:JSON.stringify(b)};this.log("x_out",a,c)};b.sendAdClick=function(a,b,d,e){var f,g=this;e===void 0&&(e=null);if(this.$3)return!0;b=b-a.left;d=d-a.top;var h=a.width.toString();a=a.height.toString();var i=this.$9();f=(f=this.$7)!=null?f:0;f=i-f;var j=this.$10();j.touch=JSON.stringify({clickDelayTime:f,clickX:b,clickY:d,height:a,visibleHeight:a,visibleWidth:h,width:h});if(e===!1||f<this.clickGuardTimeMS){this.log("click_guard",j);return!1}this.log("open_link",j,function(){g.$3=!0});new(c("InstantGamesAdsBounceBackManager"))(document).attach(function(a){a={handler_time_ms:i,session_finish_ms:a};g.log("browser_session",a)});return!0};b.sendClose=function(){this.log("close",this.$10())};b.sendShowAdCalled=function(){this.log("show_ad_called",{})};b.$9=function(){return Date.now()};b.$10=function(){var a=this.$9()/1e3;return{analog:JSON.stringify({}),touch:JSON.stringify({}),vh:JSON.stringify({1:"1"}),vp:"1.0",vrc:"1",vt:a.toString()}};b.log=function(a,b,d){var e=new XMLHttpRequest();if(this.$1===null)throw c("unrecoverableViolation")("Could not generate endpoint URL for logging","instant_games");e.open("POST",this.$1.toString(),!0);e.setRequestHeader("Content-Type","application/x-www-form-urlencoded;charset=UTF-8");e.onreadystatechange=function(){e.readyState>=e.HEADERS_RECEIVED&&(d&&d(e.status>=200&&e.status<300))};a=this.createDataForLog(a,b);e.send("payload="+encodeURIComponent(JSON.stringify(a)))};b.createDataForLog=function(a,b){var d=this.$9()/1e3,e=c("uuidv4")(),f={};f[e]=this.$6;b={events:[{data:b,id:c("uuidv4")(),session_id:this.$5,session_time:d,time:d,token_id:e,type:a}],tokens:f};return b};return a}();g["default"]=a}),98);
__d("InstantGamesFunnelLogger",["$InternalEnum","ANMobileEndpointAdsLogger","ODS"],(function(a,b,c,d,e,f,g){"use strict";var h=b("$InternalEnum").Mirrored(["Logged","Unlogged"]);a=function(a){babelHelpers.inheritsLoose(b,a);function b(b,c,d,e){b=a.call(this,b,c,d)||this;b.$InstantGamesFunnelLogger1=e;b.$InstantGamesFunnelLogger2=h.Unlogged;return b}var c=b.prototype;c.sendDebugFunnelImpressionLog=function(a){a===void 0&&(a=null);switch(this.$InstantGamesFunnelLogger2){case h.Unlogged:this.sendDebugFunnelLog(123,a);this.$InstantGamesFunnelLogger2=h.Logged;break;case h.Logged:break}};c.sendDebugFunnelShowFinishedLog=function(a,b){b===void 0&&(b=null);a={funnel_show_result:a};b!==null&&(a=babelHelpers["extends"]({},a,{funnel_error_message:b}));this.sendDebugFunnelLog(107,a)};c.sendDebugFunnelLoadErrorLog=function(a,b){b===void 0&&(b=null),this.sendDebugFunnelLog(104,babelHelpers["extends"]({funnel_error_message:a},b))};c.sendDebugFunnelClickLog=function(a){a===void 0&&(a=null),this.sendDebugFunnelLog(122,a)};c.sendDebugFunnelAdCloseClickedLog=function(a){a===void 0&&(a=null),this.sendDebugFunnelLog(121,a)};c.sendDebugFunnelVideoAdPausedLog=function(a){a===void 0&&(a=null),this.sendDebugFunnelLog(112,a)};c.sendDebugFunnelVideoAdFinishedLog=function(a){a===void 0&&(a=null),this.sendDebugFunnelLog(115,a)};c.sendDebugFunnelVideoAdStartedLog=function(a){a===void 0&&(a=null),this.sendDebugFunnelLog(111,a)};c.sendDebugFunnelVideoAdSkippedLog=function(a){a===void 0&&(a=null),this.sendDebugFunnelLog(114,a)};c.sendDebugFunnelLog=function(a,b){b===void 0&&(b=null);d("ODS").bumpEntityKey(539,"obc.www.all","adnw.desktop_funnel_logger.frontend."+String(a));var c=this.$InstantGamesFunnelLogger1.getAdLoggingInfo();a=Number(a)+4e3;b=babelHelpers["extends"]({},c,b);b={additional_info:JSON.stringify(b),sdk_version:c.SDK_VERSION,subtype:"funnel",subtype_code:a};this.log("debug",b)};return b}(c("ANMobileEndpointAdsLogger"));g["default"]=a}),98);
__d("ANWebAdMenuItem.react",["CometMenuItem.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){var b=a.data,d=a.onClick;a=b.adPreferenceHyperlink;var e=b.icon,f=b.text,g=f.primary;f=f.secondary;return b.type==="report_experience"?h.jsx(c("CometMenuItem.react"),{href:a.url,icon:e,iconStyle:"contained",primaryText:g,secondaryText:f,target:"_blank"}):h.jsx(c("CometMenuItem.react"),{icon:e,iconStyle:"contained",onClick:function(){return d(b)},primaryText:g,secondaryText:f})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("ANWebAdTextType",["fbt","$InternalEnum"],(function(a,b,c,d,e,f,g,h){"use strict";var i=b("$InternalEnum").Mirrored(["OptionsButtonAriaLabel","OptionsButtonTooltip","OptionsMenuAriaLabel","CloseAdButton","MediaPressableImageAriaLabel","Sponsored","ReportFlowBackToGame","ReportFlowConfirmSelection","ReportFlowError","SkipInSeconds","CloseInSeconds","DisableAdBlockerDialogTitle","DisableAdBlockerDialogBody","DisableAdBlockerDialogContinueButton","ResumeVideo","WatchAgain","SkipAdTitle","SkipAdBody","SkipAdButton"]);function a(a,b){b===void 0&&(b=void 0);switch(a){case i.CloseAdButton:return h._("__JHASH__KHTjjH06f7y__JHASH__");case i.SkipAdButton:return h._("__JHASH__KmoKooYAzxv__JHASH__");case i.OptionsButtonAriaLabel:return h._("__JHASH__JEQbDVVYetW__JHASH__");case i.OptionsButtonTooltip:return h._("__JHASH__2ffgMnS9lt8__JHASH__");case i.Sponsored:return h._("__JHASH__LZrdIp3zY-P__JHASH__");case i.OptionsMenuAriaLabel:return h._("__JHASH__LSUVay6diWe__JHASH__");case i.ReportFlowError:return h._("__JHASH__cGfb-OhkY_P__JHASH__");case i.ReportFlowBackToGame:return h._("__JHASH__UaduhtBOTsx__JHASH__");case i.ReportFlowConfirmSelection:return h._("__JHASH__TW_vHVYcYpf__JHASH__");case i.SkipInSeconds:return h._("__JHASH__FXdxZDFX-6K__JHASH__",[h._param("seconds",b)]);case i.CloseInSeconds:return h._("__JHASH__Q4YU68sw4Jl__JHASH__",[h._param("seconds",b)]);case i.MediaPressableImageAriaLabel:return h._("__JHASH__ftNkXXuxq6A__JHASH__");case i.DisableAdBlockerDialogTitle:return h._("__JHASH__nN88eAxjHRw__JHASH__");case i.DisableAdBlockerDialogBody:return h._("__JHASH__7brBEK0OOdI__JHASH__");case i.DisableAdBlockerDialogContinueButton:return h._("__JHASH__JdTJmWirALp__JHASH__");case i.ResumeVideo:return h._("__JHASH__FFs-ITt9Kqo__JHASH__");case i.WatchAgain:return h._("__JHASH__XmnYHud1sro__JHASH__");case i.SkipAdTitle:return h._("__JHASH__tYn4bBHc0wF__JHASH__");case i.SkipAdBody:return h._("__JHASH___L6nTBgor2t__JHASH__")}}g.ANWebAdTextType=i;g.textTypeToFBT=a}),98);
__d("ANWebAdModuleMenu.react",["ANWebAdMenuItem.react","ANWebAdTextType","CometMenu.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){var b=a.adReportClicked;a=a.items;var e=a.adChoices,f=a.hideAd;a=a.reportAd;e=[e,f,a].map(function(a){return h.jsx(c("ANWebAdMenuItem.react"),{data:a,onClick:b},a.type)});return h.jsx("div",{style:{display:"inline-block"},children:h.jsx(c("CometMenu.react"),{label:d("ANWebAdTextType").textTypeToFBT(d("ANWebAdTextType").ANWebAdTextType.OptionsMenuAriaLabel),children:e})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("ANWebAdIconType",["ix","$InternalEnum","fbicon"],(function(a,b,c,d,e,f,g,h){"use strict";var i=b("$InternalEnum").Mirrored(["Gaming"]);function a(a){if(a===null)return null;switch(a){case i.Gaming:return d("fbicon")._(h("666915"),16)}}function c(a){if(a===null)return null;switch(a){case i.Gaming:return d("fbicon")._(h("666926"),24)}}g.ANWebAdIconType=i;g.iconTypeToCTAButtonIcon=a;g.iconTypeToCTAMediaIcon=c}),98);
__d("ANWebAdUtils",["$InternalEnum","ANWebAdIconType","UserAgent","gkx"],(function(a,b,c,d,e,f,g){"use strict";var h=(b=b("$InternalEnum")).Mirrored(["BottomCloseButton","TopCloseButton"]),i=b({LOADING:"loading",ERROR:"error",LOADED:"loaded"}),j=b({IOS:"iOS",WINDOWS:"Windows",MACOSX:"Mac OS X",ANDROID:"Android",LINUX:"Linux"}),k=b.Mirrored(["None","ScaleUp","Shake"]);function l(a){a=a==null?void 0:a.cta_url;return a==null?null:a}function m(a,b){var e,f,g,h,i,j;b===void 0&&(b=!0);var m=l(a);e=(e=m==null?void 0:(e=m.toLowerCase())==null?void 0:e.endsWith("facebook.com"))!=null?e:!1;var p=null;f=(f=a.fbad_command)!=null?f:null;g=(g=a.call_to_action)!=null?g:null;var q=f!==null&&g!==null;h=(h=(h=a.image)==null?void 0:h.url)!=null?h:"";i=(i=a.unskippable_seconds)!=null?i:5;var r=o(a);j=(j=a.title)!=null?j:a.subtitle;e&&q&&(p=d("ANWebAdIconType").ANWebAdIconType.Gaming);a.friend_context==null||r!==null?q=null:q=c("gkx")("2065")?a.friend_context:null;var s=r===null,t=n(a);return{body:a.body,ctaData:{command:f,iconType:p,shouldPulse:b,text:g},destinationUrl:e?null:m,forceViewSeconds:i,friendContext:q,mediaData:{carouselData:t,ctaConfig:{animation:k.ScaleUp,isEnabled:s},imageUrl:h,videoData:r},theme:"dark",thumbnailUrl:a.icon.url,title:j}}function a(a,b){a=m(a);b=b===h.BottomCloseButton;return babelHelpers["extends"]({},a,{showBottomCloseButton:b})}function n(a){a=a.carousel;return a==null?null:a.map(function(a){return{body:a.body,buttonIcon:a.button_icon,clickReportUrl:a.click_report_url,command:a.fbad_command,cta:a.call_to_action,ctaTitle:a.title,detectionStrings:a.detection_strings,friendContext:a.friend_context,image:a.image.url,impressionReportUrl:a.impression_report_url,subtitle:a.subtitle}})}function o(a){var b,c;b=(b=a.video_id)!=null?b:null;c=(c=a.video_url)!=null?c:null;return c===null?null:{autoplay:a.video_autoplay_enabled,startMuted:a.is_video_audio_muted,videoHdUrl:a.video_hd_url,videoId:b,videoUrl:c}}function e(a){a=(a=a.video_id)!=null?a:null;if(a!==null)if(c("gkx")("2779"))return h.BottomCloseButton;else return null;return c("gkx")("567")?h.BottomCloseButton:null}function f(a,b){return b?p():a.placementType==="banner_desktop"?j.WINDOWS:j.IOS}function p(){if(c("UserAgent").isPlatform(j.IOS))return j.IOS;if(c("UserAgent").isPlatform(j.ANDROID))return j.ANDROID;if(c("UserAgent").isPlatform(j.WINDOWS))return j.WINDOWS;return c("UserAgent").isPlatform(j.MACOSX)?j.MACOSX:j.LINUX}g.ANWebAdUDMAVariant=h;g.LoadingState=i;g.ANUserOS=j;g.ANWebMediaCTAHoverAnimation=k;g.mapJSONObjectToAdData=m;g.mapJSONObjectToAdDataWithVariant=a;g.makeCarouselData=n;g.getInterstitialVariantFromAdJSONData=e;g.getUserOS=f;g.getRealUserOSName=p}),98);
__d("CometInstantGamesPlayerCustomEscHandlingContext",["react"],(function(a,b,c,d,e,f,g){"use strict";a=d("react");b={setCustomEscHandlerProvider:function(){}};c=a.createContext(b);g["default"]=c}),98);
__d("CometInstantGamesPlayerLevelOverlayGenContext",["react"],(function(a,b,c,d,e,f,g){"use strict";a=d("react");b=a.createContext(null);g["default"]=b}),98);
__d("InstantGamesAdUtils",[],(function(a,b,c,d,e,f){"use strict";a=function(){function a(){}var b=a.prototype;b.getHostName=function(){var a=window.location.origin.split(".");a.length>2&&(a[a.length-2]="facebook");return a.join(".")};return a}();b=new a();f["default"]=b}),66);
__d("NetworkAdPlacementType",["$InternalEnum"],(function(a,b,c,d,e,f){a=b("$InternalEnum")({BANNER:"banner",BANNER_DESKTOP:"banner_desktop",DYNAMIC_BANNER:"dynamic_banner",FULLWIDTH:"fullwidth",INSTANT_ARTICLE_NATIVE:"instant_article_native",INSTANT_ARTICLE_RECIRC_NATIVE:"instant_article_recirc_native",INSTREAM:"instream",INTERSTITIAL:"interstitial",INTERSTITIAL_DESKTOP:"interstitial_desktop",MEDIUM_RECTANGLE:"medium_rectangle",NATIVE:"native",NATIVE_BANNER:"native_banner",REWARDED_VIDEO:"rewarded_video",REWARDED_VIDEO_DESKTOP:"rewarded_video_desktop"});c=a;f["default"]=c}),66);