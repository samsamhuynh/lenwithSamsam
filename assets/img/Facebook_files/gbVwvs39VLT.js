;/*FB_PKG_DELIM*/

__d("MWChatMediaRootQuery.graphql",["MWChatMediaRootQuery_facebookRelayOperation","relay-runtime"],(function(a,b,c,d,e,f){"use strict";a=function(){var a={defaultValue:null,kind:"LocalArgument",name:"after"},c={defaultValue:null,kind:"LocalArgument",name:"before"},d={defaultValue:null,kind:"LocalArgument",name:"first"},e={defaultValue:null,kind:"LocalArgument",name:"last"},f={defaultValue:null,kind:"LocalArgument",name:"messageID"},g={defaultValue:null,kind:"LocalArgument",name:"scale"},h={defaultValue:null,kind:"LocalArgument",name:"threadID"},i=[{kind:"Variable",name:"id",variableName:"threadID"}],j={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},k={alias:null,args:null,kind:"ScalarField",name:"folder",storageKey:null},l=[{kind:"Variable",name:"after",variableName:"after"},{kind:"Literal",name:"ascending",value:!0},{kind:"Variable",name:"before",variableName:"before"},{kind:"Variable",name:"first",variableName:"first"},{kind:"Variable",name:"last",variableName:"last"},{kind:"Variable",name:"message_id",variableName:"messageID"},{kind:"Literal",name:"message_shared_media_type",value:"PHOTO_VIDEO_AND_GIF"}],m={alias:null,args:null,kind:"ScalarField",name:"message_id",storageKey:null},n={alias:null,args:null,kind:"ScalarField",name:"timestamp_precise",storageKey:null},o={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},p={alias:null,args:null,kind:"ScalarField",name:"legacy_attachment_id",storageKey:null},q={alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null},r={alias:null,args:null,kind:"ScalarField",name:"width",storageKey:null},s={alias:null,args:null,kind:"ScalarField",name:"height",storageKey:null},t=[q,r,s,{alias:null,args:null,kind:"ScalarField",name:"downloadable_uri",storageKey:null}];q={alias:"image_thumb",args:[{kind:"Literal",name:"height",value:250},{kind:"Literal",name:"width",value:250}],concreteType:"Image",kind:"LinkedField",name:"image",plural:!1,selections:[q,r,s],storageKey:"image(height:250,width:250)"};r={kind:"InlineFragment",selections:[p,{alias:null,args:null,kind:"ScalarField",name:"blurred_image_uri",storageKey:null},{alias:null,args:[{kind:"Literal",name:"height",value:2048},{kind:"Variable",name:"scale",variableName:"scale"},{kind:"Literal",name:"width",value:2048}],concreteType:"Image",kind:"LinkedField",name:"image",plural:!1,selections:t,storageKey:null},q],type:"MessageImage",abstractKey:null};s={kind:"InlineFragment",selections:[p,{alias:"sdUrl",args:[{kind:"Literal",name:"quality",value:"SD"}],kind:"ScalarField",name:"playable_url",storageKey:'playable_url(quality:"SD")'},{alias:"hdUrl",args:[{kind:"Literal",name:"quality",value:"HD"}],kind:"ScalarField",name:"playable_url",storageKey:'playable_url(quality:"HD")'},q,{alias:null,args:null,concreteType:"Vect2",kind:"LinkedField",name:"original_dimensions",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"x",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"y",storageKey:null}],storageKey:null}],type:"MessageVideo",abstractKey:null};p={kind:"InlineFragment",selections:[p,{alias:null,args:null,concreteType:"Image",kind:"LinkedField",name:"image",plural:!1,selections:t,storageKey:null},q,{alias:null,args:null,kind:"ScalarField",name:"animated_image_caption",storageKey:null}],type:"MessageAnimatedImage",abstractKey:null};t={alias:null,args:null,kind:"ScalarField",name:"cursor",storageKey:null};q={alias:null,args:null,concreteType:"PageInfo",kind:"LinkedField",name:"page_info",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"has_next_page",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"has_previous_page",storageKey:null}],storageKey:null};return{fragment:{argumentDefinitions:[a,c,d,e,f,g,h],kind:"Fragment",metadata:null,name:"MWChatMediaRootQuery",selections:[{alias:null,args:i,concreteType:"MessageThread",kind:"LinkedField",name:"message_thread",plural:!1,selections:[j,k,{alias:null,args:l,concreteType:"MessagesWithAttachmentsOfThreadConnection",kind:"LinkedField",name:"messages_with_attachments",plural:!1,selections:[{alias:null,args:null,concreteType:"MessagesWithAttachmentsOfThreadEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[{kind:"InlineFragment",selections:[m,j,n,{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"blob_attachments",plural:!0,selections:[o,r,s,p],storageKey:null}],type:"UserMessage",abstractKey:null}],storageKey:null},t],storageKey:null},q],storageKey:null}],storageKey:null}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[h,f,a,d,c,e,g],kind:"Operation",name:"MWChatMediaRootQuery",selections:[{alias:null,args:i,concreteType:"MessageThread",kind:"LinkedField",name:"message_thread",plural:!1,selections:[j,k,{alias:null,args:l,concreteType:"MessagesWithAttachmentsOfThreadConnection",kind:"LinkedField",name:"messages_with_attachments",plural:!1,selections:[{alias:null,args:null,concreteType:"MessagesWithAttachmentsOfThreadEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[o,j,{kind:"InlineFragment",selections:[m,n,{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"blob_attachments",plural:!0,selections:[o,r,s,p,{kind:"InlineFragment",selections:[j],type:"Node",abstractKey:"__isNode"}],storageKey:null}],type:"UserMessage",abstractKey:null}],storageKey:null},t],storageKey:null},q],storageKey:null}],storageKey:null}]},params:{id:b("MWChatMediaRootQuery_facebookRelayOperation"),metadata:{},name:"MWChatMediaRootQuery",operationKind:"query",text:null}}}();b("relay-runtime").PreloadableQueryRegistry.set(a.params.id,a);e.exports=a}),null);
__d("CometPhotoViewerImageSuspense",["Promise","PromiseAnnotate","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i=document.body,j=typeof jest==="undefined"&&document!==void 0&&typeof document.createElement==="function";function k(a){return new(b("Promise"))(function(b){if(!j||i==null)return b();var c=document.createElement("img");c.onload=c.onerror=b;c.src=a})}var l=new Map(),m=2e3,n={get:function(a){var b=l.get(a);if(b!=null){l["delete"](a);l.set(a,b);return b}},set:function(a,b){l["delete"](a);l.set(a,b);if(l.size>m){a=l.keys().next();a.done||l["delete"](a.value)}}};function o(a){if(a==null)return;var b=n.get(a);if(b!=null)if(b.pending===!0)throw b.promise;else return;else{b=k(a);d("PromiseAnnotate").setDisplayName(b,"SuspenseImage");var c={pending:!0,promise:b};b.then(function(){c.pending===!0&&(c.pending=!1)});n.set(a,c);throw b}}a=h.forwardRef(function(a,b){o(a.src);return h.jsx("img",babelHelpers["extends"]({},a,{ref:b}))});g["default"]=a}),98);
__d("CometPhotoViewerInnerWrapper.react",["CometRouteRenderType","react","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i={backgroundContainer:{alignItems:"x6s0dn4",display:"x78zum5",justifyContent:"xl56j7k",minHeight:"x1xoerdy",$$css:!0},backgroundContainerDialog:{height:"x1dr59a3",$$css:!0},backgroundContainerDialogWithFooter:{height:"x4uq5q4",$$css:!0},backgroundContainerTabs:{height:"xtp0wl1",$$css:!0},backgroundContainerTabsWithFooter:{height:"xossbfl",$$css:!0},image:{height:"xt7dq6l",maxWidth:"x193iq5w",width:"x14atkfc",$$css:!0},maxImageHeightDialog:{maxHeight:"x1bwycvy",$$css:!0},maxImageHeightDialogWithFooter:{maxHeight:"x4ju7c5",$$css:!0},maxImageHeightTabs:{maxHeight:"x85a59c",$$css:!0},maxImageHeightTabsWithFooter:{maxHeight:"x1wlxzsl",$$css:!0},passthroughImage:{backgroundPosition:"x1lvsgvq",backgroundRepeat:"xiy17q3",backgroundSize:"x1tbiz1a",height:"x5yr21d",width:"xh8yej3",$$css:!0},photoWrapper:{alignItems:"x6s0dn4",display:"x78zum5",justifyContent:"xl56j7k",maxHeight:"xmz0i5r",position:"x1n2onr6",$$css:!0},photoWrapperPlaceholder:{height:"x5yr21d",width:"xh8yej3",$$css:!0},placeholderContainer:{width:"xh8yej3",$$css:!0}};function j(a,b){a===void 0&&(a=!1);b===void 0&&(b=!1);var e=d("CometRouteRenderType").useIsPushView();return c("stylex")(i.backgroundContainer,!a&&e&&i.backgroundContainerDialog,!a&&!e&&i.backgroundContainerTabs,a&&e&&i.backgroundContainerDialogWithFooter,a&&!e&&i.backgroundContainerTabsWithFooter,b&&i.placeholderContainer)}function k(a,b){var e=d("CometRouteRenderType").useIsPushView();return c("stylex")(!a&&e&&i.maxImageHeightDialog,!a&&!e&&i.maxImageHeightTabs,a&&e&&i.maxImageHeightDialogWithFooter,a&&!e&&i.maxImageHeightTabsWithFooter,b&&i.passthroughImage,!b&&i.image)}function l(a,b){var c=d("CometRouteRenderType").useIsPushView();return[!a&&c&&i.maxImageHeightDialog,!a&&!c&&i.maxImageHeightTabs,a&&c&&i.maxImageHeightDialogWithFooter,a&&!c&&i.maxImageHeightTabsWithFooter,b&&i.passthroughImage,!b&&i.image]}function a(a,b){var c=a.height,d=a.imageUri,e=a.showPlaceholderImage;e=e===void 0?!0:e;var f=a.width;a=a.withFooter;a=a===void 0?!1:a;a=k(a,!0);var g=j(!1,!0);return h.jsx("div",{className:g,ref:(g=b)!=null?g:null,children:d!=null&&e&&h.jsx("div",{className:"x6s0dn4 x78zum5 xl56j7k xmz0i5r x1n2onr6 x5yr21d xh8yej3",children:h.jsx("div",{className:a,style:c!=null&&f!=null?{backgroundImage:"url("+d+")",maxHeight:c,maxWidth:f}:{backgroundImage:"url("+d+")"}},d)})})}a.displayName=a.name+" [from "+f.id+"]";function b(a,b){var c=a.imageComponent,d=a.imageComponentWithXStyle;a=a.withFooter;a=a===void 0?!1:a;var e=k(a,!1);a=l(a,!1);return h.jsx("div",{className:"x6s0dn4 x78zum5 xl56j7k xmz0i5r x1n2onr6",ref:b,children:c!=null?c(e):d!=null?d(a):null})}b.displayName=b.name+" [from "+f.id+"]";e=h.forwardRef(b);f=h.forwardRef(a);g.useCometPhotoViewerContainerStyles=j;g.CometPhotoViewerImageWrapper=e;g.CometPhotoViewerPlaceholderWrapper=f}),98);
__d("MWChatMediaData",[],(function(a,b,c,d,e,f){"use strict";var g=function(a){return a==null||a.__typename!=="MessageVideo"||a.sdUrl==null||a.image_thumb==null||a.image_thumb.uri==null||a.image_thumb.width==null||a.image_thumb.height==null||a.original_dimensions==null||a.original_dimensions.x==null||a.original_dimensions.y==null?null:{hdUrl:a.hdUrl,imageThumb:{height:a.image_thumb.height,uri:a.image_thumb.uri,width:a.image_thumb.width},legacyAttachmentID:a.legacy_attachment_id,originalDimensions:{x:a.original_dimensions.x,y:a.original_dimensions.y},sdUrl:a.sdUrl}},h=function(a){return a==null||a.__typename!=="MessageImage"||a.image==null||a.image.uri==null||a.image.width==null||a.image.height==null||a.image_thumb==null||a.image_thumb.uri==null||a.image_thumb.width==null||a.image_thumb.height==null?null:{blurredImageUri:a.blurred_image_uri,image:{downloadableUri:a.image.downloadable_uri,height:a.image.height,uri:a.image.uri,width:a.image.width},imageThumb:{height:a.image_thumb.height,uri:a.image_thumb.uri,width:a.image_thumb.width},legacyAttachmentID:a.legacy_attachment_id}},i=function(a){return a==null||a.__typename!=="MessageAnimatedImage"||a.image==null||a.image.uri==null||a.image.width==null||a.image.height==null||a.image_thumb==null||a.image_thumb.uri==null||a.image_thumb.width==null||a.image_thumb.height==null?null:{blurredImageUri:null,image:{downloadableUri:a.image.downloadable_uri,height:a.image.height,uri:a.image.uri,width:a.image.width},imageThumb:{height:a.image_thumb.height,uri:a.image_thumb.uri,width:a.image_thumb.width},legacyAttachmentID:a.legacy_attachment_id}};a=function(a){return a.reduce(function(a,b){if(b==null||b.node==null||b.node.id==null||b.node.message_id==null||b.node.blob_attachments==null||b.cursor==null)return a;var c=b.node,d=c.blob_attachments,e=c.id,f=c.message_id,j=c.timestamp_precise,k=b.cursor;c=d.map(function(a){if(a.__typename==="MessageImage"){var b=h(a);return b==null?null:{__typename:"MessageImage",attachment:b,cursor:k,messageID:f,nodeID:e,timestamp:j}}else if(a.__typename==="MessageVideo"){b=g(a);return b==null?null:{__typename:"MessageVideo",attachment:b,cursor:k,messageID:f,nodeID:e,timestamp:j}}else if(a.__typename==="MessageAnimatedImage"){b=i(a);return b==null?null:{__typename:"MessageAnimatedImage",attachment:b,cursor:k,messageID:f,nodeID:e,timestamp:j}}else return null}).filter(Boolean);return a.concat(c)},[]).filter(Boolean)};f.normalizeMessages=a}),66);
__d("MWChatMediaReducer",[],(function(a,b,c,d,e,f){"use strict";a={curIdx:0,hasNextPage:!1,hasPrevPage:!1,initialCursor:null,isFetchingNextPage:!1,isFetchingPrevPage:!1,mediaList:[]};b=function(a,b){switch(b.type){case"initialize":return babelHelpers["extends"]({},a,{curIdx:b.curIdx,initialCursor:b.initialCursor,mediaList:b.mediaList});case"startFetchingNextPage":return babelHelpers["extends"]({},a,{isFetchingNextPage:!0});case"startFetchingPrevPage":return babelHelpers["extends"]({},a,{isFetchingPrevPage:!0});case"prevPageReceived":return babelHelpers["extends"]({},a,{curIdx:a.curIdx+b.medias.length,hasPrevPage:b.hasPrevPage,isFetchingPrevPage:!1,mediaList:b.medias.concat(a.mediaList)});case"nextPageReceived":return babelHelpers["extends"]({},a,{hasNextPage:b.hasNextPage,isFetchingNextPage:!1,mediaList:a.mediaList.concat(b.medias)});case"messageDeleted":return babelHelpers["extends"]({},a,{curIdx:Math.min(Math.max(b.curIdx,0),a.mediaList.length-1),mediaList:b.mediaList});case"viewMediaAtIndex":return babelHelpers["extends"]({},a,{curIdx:Math.min(Math.max(b.curIdx,0),a.mediaList.length-1)});default:return a}};f.initialState=a;f.reducer=b}),66);
__d("MWChatDeleteMessageEventEmitter",["BaseEventEmitter"],(function(a,b,c,d,e,f,g){"use strict";var h="deleteMessage",i=new(c("BaseEventEmitter"))();function a(a){i.emit(h,a)}function b(a){var b=i.addListener(h,a);return function(){return b.remove()}}g.emit=a;g.subscribe=b}),98);
__d("MWChatMediaUtil",["ExecutionEnvironment"],(function(a,b,c,d,e,f,g){"use strict";a=function(a){if(!c("ExecutionEnvironment").canUseDOM)return;a.forEach(function(a){if(typeof a==="string"){var b=new Image();b.src=a}})};g.prefetchImages=a}),98);
__d("MWChatMediaViewerImage.react",["fbt","CometHero.react","CometPagelet.react","CometPhotoViewerImageSuspense","CometPhotoViewerInnerWrapper.react","CometPressable.react","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react"),j=d("react").useState,k=h._("__JHASH__SUN00vbyQRp__JHASH__");function a(a){var b=a.blurredImageURI,e=a.imageURI,f=a.origHeight,g=a.origSrc;a=a.origWidth;var l=j(!1),m=l[0],n=l[1];l=d("CometPhotoViewerInnerWrapper.react").useCometPhotoViewerContainerStyles(!0);return i.jsx("div",{"data-testid":void 0,children:i.jsxs(d("CometPagelet.react").Placeholder,{className:l,fallback:g!=null?i.jsx(d("CometPhotoViewerInnerWrapper.react").CometPhotoViewerPlaceholderWrapper,{height:f,imageUri:g,showPlaceholderImage:g!=null&&a!=null&&f!=null,width:a,withFooter:!0}):null,name:"MessengerMediaViewerPhoto",pageletType:"media",children:[i.jsx(c("CometHero.react"),{description:"MWChatMediaViewerImage"}),b==null||m?i.jsx(d("CometPhotoViewerInnerWrapper.react").CometPhotoViewerImageWrapper,{imageComponent:function(a){return i.jsx(c("CometPhotoViewerImageSuspense"),{alt:k,className:a,src:e},e)},withFooter:!0}):i.jsx(c("CometPressable.react"),{display:"inline",label:h._("__JHASH__jjpvSNJ1g5C__JHASH__"),onPress:function(){return n(!0)},children:i.jsx(d("CometPhotoViewerInnerWrapper.react").CometPhotoViewerImageWrapper,{imageComponent:function(a){return i.jsx(c("CometPhotoViewerImageSuspense"),{alt:k,className:a,src:b},b)},withFooter:!0})})]},e)})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("MWChatMediaViewerNavigationTapTarget.react",["ix","CometPressable.react","CometSkittleIcon.react","CometTrackingNodeProvider.react","fbicon","react","stylex"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react"),j={buttonContainerBackground:{backgroundColor:"xiwuv7k",$$css:!0},buttonContainerHoverLeft:{opacity:"x1hc1fzr",transform:"xs51lif",$$css:!0},buttonContainerHoverRight:{opacity:"x1hc1fzr",transform:"xzycz3q",$$css:!0},fullHeight:{height:"x5yr21d",$$css:!0},invisible:{opacity:"xg01cxk",transitionDuration:"xhb22t3",transitionTimingFunction:"xls3em1",visibility:"xlshs6z",$$css:!0},navButton:{alignItems:"x6s0dn4",display:"x78zum5",opacity:"x197sbye",paddingTop:"xyamay9",paddingEnd:"x1pi30zi",paddingBottom:"x1l90r2v",paddingStart:"x1swvt13",position:"x1n2onr6",transitionDuration:"x1k90msu",transitionProperty:"x6o7n8i",transitionTimingFunction:"x9lcvmn",willChange:"x6my1t9",$$css:!0},root:{alignItems:"x6s0dn4",display:"x78zum5",justifyContent:"xl56j7k",opacity:"x1hc1fzr",position:"x1n2onr6",transitionDuration:"x1ebt8du",transitionProperty:"x1jl3cmp",transitionTimingFunction:"x1dhq9h",willChange:"xfwg19i",zIndex:"x1vjfegm",$$css:!0},tapTargetOverlay:{height:"x5yr21d",$$css:!0}};function a(a){var b=a.direction,e=a.disable,f=e===void 0?!1:e;e=a.invisible;e=e===void 0?!1:e;var g=a.label,k=a.onClick,l=a.testid;l=a.trackingNode;a=i.jsx(c("CometPressable.react"),{"aria-label":g,focusable:!1,onPress:k,testid:void 0,xstyle:j.tapTargetOverlay,children:function(a){a=a.hovered;return i.jsx("div",{className:c("stylex")(j.navButton,j.buttonContainerBackground,a&&(b==="previous"?j.buttonContainerHoverLeft:j.buttonContainerHoverRight)),children:i.jsx(c("CometSkittleIcon.react"),{color:"gray",disabled:f,icon:b==="previous"?d("fbicon")._(h("492491"),24):d("fbicon")._(h("492539"),24),size:48})})}});return i.jsx("div",{className:c("stylex")(j.root,e&&j.invisible,j.fullHeight),children:l!=null?i.jsx(c("CometTrackingNodeProvider.react"),{trackingNode:l,children:a}):a})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("MWChatMediaViewerStage.react",["fbt","CometBlurredBackgroundImage.react","CometGlobalPanelLayoutContext","CometKeys","CometLink.react","CometMediaViewerFilmstrip.react","CurrentEnvironment","Locale","MWChatMediaViewerNavigationTapTarget.react","MWLSFeatureLimitedStatus.bs","MessengerBlurpleLogoSvg.react","XMessengerDotComCometRootControllerRouteBuilder","deferredLoadComponent","gkx","react","requireDeferred","stylex","useCometRouterDispatcher","useDebouncedComet","useLayerKeyCommands","useLayoutEffect_SAFE_FOR_SSR"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");b=d("react");var j=b.useContext,k=b.useMemo,l=b.useRef,m=b.useState,n=c("deferredLoadComponent")(c("requireDeferred")("MWChatMediaViewerControls.react").__setRef("MWChatMediaViewerStage.react")),o={blurredBackground:{bottom:"x1ey2m1c",end:"xds687c",opacity:"xuzhngd",position:"x10l6tqk",start:"x17qophe",top:"x13vifvy",$$css:!0},containerPadding:{paddingEnd:"xvj1nn1",paddingStart:"x1nd34w2",$$css:!0},easyExit:{bottom:"x1ey2m1c",boxSizing:"x9f619",end:"xds687c",position:"x10l6tqk",start:"x17qophe",top:"x13vifvy",$$css:!0},footer:{maxWidth:"x193iq5w",overflowX:"x6ikm8r",overflowY:"x10wlt62",$$css:!0},gradientProtection:{backgroundImage:"x1f90px3",height:"x1ffmiix",position:"x10l6tqk",width:"xh8yej3",zIndex:"x1vjfegm",$$css:!0},headerContainer:{alignItems:"x6s0dn4",display:"x78zum5",end:"xbruw4w",height:"x1s65kcs",position:"x10l6tqk",zIndex:"x1vjfegm",$$css:!0},headerContainerWithGlobalPanel:{height:"xnnlda6",$$css:!0},logoContainer:{position:"x10l6tqk",start:"x16q8cke",top:"xomnu4r",zIndex:"x1n327nk",$$css:!0},mediaContainer:{boxSizing:"x9f619",display:"x78zum5",flexGrow:"x1iyjqo2",height:"x5yr21d",justifyContent:"xl56j7k",overflowX:"x6ikm8r",overflowY:"x10wlt62",position:"x1n2onr6",width:"xh8yej3",$$css:!0},messengerDotComHeaderContainerHeight:{end:"xds687c",height:"xnnlda6",$$css:!0},navButtonContainer:{alignItems:"x6s0dn4",bottom:"x1ey2m1c",display:"x78zum5",end:"xds687c",justifyContent:"x1qughib",position:"x10l6tqk",start:"x17qophe",top:"x13vifvy",zIndex:"x1ja2u2z",$$css:!0},root:{alignItems:"x6s0dn4",backgroundColor:"xal61yo",display:"x78zum5",flexDirection:"xdt5ytf",flexGrow:"x1iyjqo2",height:"x5yr21d",minWidth:"x17upfok",position:"x1n2onr6",userSelect:"x87ps6o",":focus_outline":"x1uvtmcs",$$css:!0},workplaceHeaderContainer:{end:"xlr8s2x",height:"xng8ra",zIndex:"xhtitgo",$$css:!0},workroomsHeaderContainer:{end:"xlr8s2x",height:"xng8ra",zIndex:"xhtitgo",$$css:!0}},p=2e3,q=c("gkx")("1299319");function a(a){var b=a.activeIndex,e=a.attachmentID,f=a.backgroundSrc,g=a.children,r=a.disableNextButton,s=a.disablePrevButton,t=a.downloadLink,u=a.hideNextButton,v=a.hidePrevButton,w=a.isForwardEnabledForThread,x=a.messageID,y=a.setActiveIndex,z=a.showMessengerLink,A=j(c("CometGlobalPanelLayoutContext")),B=c("CurrentEnvironment").messengerdotcom,C=c("gkx")("1224637"),D=c("gkx")("7278"),E=d("MWLSFeatureLimitedStatus.bs").useIsReadOnlyFeatureLimited();E=c("gkx")("1844772")&&!E&&w;var F=h._("__JHASH__LwpPfoJWBJ-__JHASH__"),G=h._("__JHASH__37s-bUHecpV__JHASH__"),H=l(!0);w=m(!1);var I=w[0],J=w[1],K=l(null),L=c("useCometRouterDispatcher")();w=function(){return M.isPending()?N():M()};var M=c("useDebouncedComet")(function(){J(!1),N()},{leading:!0,wait:p}),N=c("useDebouncedComet")(function(){J(!0),H.current=!1},{leading:!1,wait:p});c("useLayoutEffect_SAFE_FOR_SSR")(function(){N(),K.current&&H.current&&K.current.focus()});var O=function(){L!=null&&L.popPushView()},P=k(function(){var b=[];!v&&!s&&b.push({command:{key:c("CometKeys").LEFT},description:F,handler:function(){return y(a.activeIndex-1)}});!u&&!r&&b.push({command:{key:c("CometKeys").RIGHT},description:G,handler:function(){return y(a.activeIndex+1)}});return b},[r,s,u,v,G,F,a.activeIndex,y]),Q=i.jsx(c("MWChatMediaViewerNavigationTapTarget.react"),{direction:d("Locale").isRTL()?"next":"previous",disable:s,invisible:v||I,label:F,onClick:function(){return y(b-1)},testid:void 0,trackingNode:143});I=i.jsx(c("MWChatMediaViewerNavigationTapTarget.react"),{direction:d("Locale").isRTL()?"previous":"next",disable:r,invisible:u||I,label:G,onClick:function(){return y(b+1)},testid:void 0,trackingNode:142});c("useLayerKeyCommands")(P);return i.jsxs("div",{className:"x6s0dn4 xal61yo x78zum5 xdt5ytf x1iyjqo2 x5yr21d x17upfok x1n2onr6 x87ps6o x1uvtmcs","data-testid":void 0,onMouseMove:w,ref:K,tabIndex:"0",children:[z&&i.jsx("div",{className:"x10l6tqk x16q8cke xomnu4r x1n327nk",children:i.jsx(c("CometLink.react"),{"aria-label":"Messenger",href:c("XMessengerDotComCometRootControllerRouteBuilder").buildURL({}),children:i.jsx(c("MessengerBlurpleLogoSvg.react"),{height:"40",width:"40"})})}),i.jsx("div",{className:"x1f90px3 x1ffmiix x10l6tqk xh8yej3 x1vjfegm"}),i.jsx("div",{className:"x1ey2m1c xds687c xuzhngd x10l6tqk x17qophe x13vifvy",children:f!=null?i.jsx(c("CometBlurredBackgroundImage.react"),{src:f}):null}),i.jsxs("div",{className:"x9f619 x78zum5 x1iyjqo2 x5yr21d xl56j7k x6ikm8r x10wlt62 x1n2onr6 xh8yej3 xvj1nn1 x1nd34w2",children:[e!=null&&x!=null?i.jsx("div",{className:c("stylex")(o.headerContainer,A&&o.headerContainerWithGlobalPanel,B&&o.messengerDotComHeaderContainerHeight,C&&o.workplaceHeaderContainer,D&&o.workroomsHeaderContainer),children:i.jsx(n,{attachmentID:e,canForward:E,downloadLink:t,messageID:x})}):null,i.jsxs("div",{className:"x6s0dn4 x1ey2m1c x78zum5 xds687c x1qughib x10l6tqk x17qophe x13vifvy x1ja2u2z",children:[!q&&i.jsx("div",{"aria-hidden":!0,className:"x1ey2m1c x9f619 xds687c x10l6tqk x17qophe x13vifvy","data-testid":void 0,onClick:O}),Q,I]}),g]}),i.jsx("div",{className:"x193iq5w x6ikm8r x10wlt62",children:i.jsx(c("CometMediaViewerFilmstrip.react"),{activeIndex:b,images:a.thumbnails.map(function(a){return babelHelpers["extends"]({},a,{mediaType:"image"})}),onSetImage:y})})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("MWChatMediaViewerVideo.react",["CometRouteRenderType","MWChatVideoPlayer.react","MWVideoPlayerControllerContext.react","react","stylex","useRoutePassthroughProps"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");b=d("react");var i=b.useContext,j=b.useEffect,k=b.useMemo,l=b.useRef,m={videoContainer:{alignItems:"x6s0dn4",display:"x78zum5",flexGrow:"x1iyjqo2",justifyContent:"xl56j7k",minHeight:"x1xoerdy",width:"xh8yej3",$$css:!0},videoContainerDialog:{height:"x4uq5q4",$$css:!0},videoContainerTabs:{height:"x1ch8t6n",$$css:!0}};function n(a){var b=d("CometRouteRenderType").useIsPushView(),e=c("useRoutePassthroughProps")(),f=(e==null?void 0:e.startTimestamp)!=null?Number(e.startTimestamp):void 0;e=(e==null?void 0:e.volumeSetting)!=null?Number(e.volumeSetting):void 0;var g=l(!1),k=i(c("MWVideoPlayerControllerContext.react")),n=k.ref.current;j(function(){n!==null&&!g.current&&(n.setMuted(!1,"product_initiated"),g.current=!0)},[n,g]);return h.jsx("div",{className:c("stylex")(m.videoContainer,b&&m.videoContainerDialog,!b&&m.videoContainerTabs),children:h.jsx(c("MWChatVideoPlayer.react"),{controls:"default",fbid:a.fbid,hdSrc:a.hdSrc,initialForceHD:!0,originalHeight:a.originalHeight,originalWidth:a.originalWidth,sdSrc:a.sdSrc,startTimestamp:f,volumeSetting:e})})}n.displayName=n.name+" [from "+f.id+"]";function a(a){var b=l(null),d=k(function(){return{ref:b}},[b]);return h.jsx(c("MWVideoPlayerControllerContext.react").Provider,{value:d,children:h.jsx(n,babelHelpers["extends"]({},a))})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("MWChatMediaRoot.react",["fbt","CometContentNotAvailable.react","CometErrorBoundary.react","CometErrorRoot.react","CometRelay","CometRouteParams","CometRouterPushViewStackContext","MWChatDeleteMessageEventEmitter","MWChatMediaData","MWChatMediaReducer","MWChatMediaRootQuery.graphql","MWChatMediaUtil","MWChatMediaViewerImage.react","MWChatMediaViewerStage.react","MWChatMediaViewerVideo.react","MWChatMessageId","MWInboxInfoSharedContentQPLLogger.bs","WebPixelRatio","promiseDone","react","useIsMountedRef"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=d("react");e=d("react");var k=e.useCallback,l=e.useContext,m=e.useEffect,n=e.useReducer,o=e.useState,p=20,q=i!==void 0?i:i=b("MWChatMediaRootQuery.graphql");function r(a){var b=a.props;a=a.queries;var e=d("CometRelay").useRelayEnvironment(),f=d("CometRouteParams").useRouteParams();b.manualRouteParams!=null&&(f=b.manualRouteParams);var g=l(c("CometRouterPushViewStackContext"))||[];g=g.length===0&&b.routeProps.showMessengerLink;b=o(null);var i=b[0],r=b[1];b=n(d("MWChatMediaReducer").reducer,d("MWChatMediaReducer").initialState);var s=b[0],t=s.curIdx,u=s.hasNextPage,v=s.hasPrevPage,w=s.initialCursor,x=s.isFetchingNextPage,y=s.isFetchingPrevPage,z=s.mediaList,A=b[1],B=c("useIsMountedRef")(),C=d("CometRelay").usePreloadedQuery(q,a.messengerMediaRootQueryReference);if(i!==null)throw i;m(function(){var a;a=C==null?void 0:(a=C.message_thread)==null?void 0:(a=a.messages_with_attachments)==null?void 0:(a=a.edges[0])==null?void 0:a.cursor;if(a!=null&&w===null){var b;b=C==null?void 0:(b=C.message_thread)==null?void 0:(b=b.messages_with_attachments)==null?void 0:b.edges;if(b!=null){b=d("MWChatMediaData").normalizeMessages(b);var c=0;f.attachment_id!=null&&(c=b.findIndex(function(a){return a.attachment.legacyAttachmentID===f.attachment_id}));A({curIdx:c,initialCursor:a,mediaList:b,type:"initialize"})}}},[w,C,f.attachment_id]);var D=C==null?void 0:(s=C.message_thread)==null?void 0:s.id;a=C==null?void 0:(b=C.message_thread)==null?void 0:b.folder;m(function(){return d("MWChatDeleteMessageEventEmitter").subscribe(function(a){var b=t,c=z.filter(function(c,d){c=c.messageID===a;c&&(d<=t&&t>0&&b--);return!c});c.length!==z.length&&(D!=null&&e.commitUpdate(function(a){return(a=a.get(D))==null?void 0:a.invalidateRecord()}));A({curIdx:b,mediaList:c,type:"messageDeleted"})})},[e,D,t,z]);var E=k(function(a){A({type:"startFetchingPrevPage"});return d("CometRelay").fetchQuery(e,q,{before:a,last:p,scale:d("WebPixelRatio").get(),threadID:f.thread_id}).toPromise().then(function(a){var b;if(!B.current)return;a=a==null?void 0:(a=a.message_thread)==null?void 0:a.messages_with_attachments;b=d("MWChatMediaData").normalizeMessages((b=a==null?void 0:a.edges)!=null?b:[]);if(b.length>0){A({hasPrevPage:(a=a==null?void 0:(a=a.page_info)==null?void 0:a.has_previous_page)!=null?a:!1,medias:b,type:"prevPageReceived"})}})["catch"](function(a){if(!B.current)return;r(a)})},[e,B,f.thread_id]),F=k(function(a){A({type:"startFetchingNextPage"});return d("CometRelay").fetchQuery(e,q,{after:a,first:p,scale:d("WebPixelRatio").get(),threadID:f.thread_id}).toPromise().then(function(a){var b;if(!B.current)return;a=a==null?void 0:(a=a.message_thread)==null?void 0:a.messages_with_attachments;b=d("MWChatMediaData").normalizeMessages((b=a==null?void 0:a.edges)!=null?b:[]);if(b.length>0){A({hasNextPage:(a=a==null?void 0:(a=a.page_info)==null?void 0:a.has_next_page)!=null?a:!1,medias:b,type:"nextPageReceived"})}})["catch"](function(a){if(!B.current)return;r(a)})},[e,B,f.thread_id]);m(function(){w!=null&&(c("promiseDone")(F(w)),c("promiseDone")(E(w)))},[e,F,E,w,f.thread_id]);var G=(s=(i=z[0])==null?void 0:i.cursor)!=null?s:null,H=(i=(b=z[z.length-1])==null?void 0:b.cursor)!=null?i:null;m(function(){t<=p/2&&v&&!y&&G!=null?c("promiseDone")(E(G)):t>=z.length-p/2&&u&&!x&&H!=null&&c("promiseDone")(F(H))},[t,E,F,u,v,G,H,z.length,x,y]);s=z[t-1];b=z[t+1];var I=null,J=null;s!=null&&s.__typename==="MessageImage"&&(I=s.attachment.image.uri);b!=null&&b.__typename==="MessageImage"&&(J=b.attachment.image.uri);m(function(){d("MWChatMediaUtil").prefetchImages([I,J])},[I,J]);m(function(){d("MWInboxInfoSharedContentQPLLogger.bs").logOpenContentViewer()},[]);i=z[t];if(w==null)return null;if(i==null)return j.jsx(c("CometContentNotAvailable.react"),{});s=z.map(function(a){var b=a.attachment.imageThumb,c=b.height,d=b.uri;b=b.width;return{alt:h._("__JHASH__SUN00vbyQRp__JHASH__"),height:c,key:(c=a.attachment.legacyAttachmentID)!=null?c:d,uri:d,width:b}}).filter(Boolean);return j.jsx(c("MWChatMediaViewerStage.react"),{activeIndex:t,attachmentID:i.attachment.legacyAttachmentID,backgroundSrc:i.__typename!=="MessageAnimatedImage"?i.attachment.imageThumb.uri:void 0,disableNextButton:x&&z[t+1]==null,disablePrevButton:y&&z[t-1]==null,downloadLink:i.__typename==="MessageVideo"?(b=i.attachment.hdUrl)!=null?b:i.attachment.sdUrl:i.attachment.image.downloadableUri,hideNextButton:!u&&z[t+1]==null,hidePrevButton:!v&&z[t-1]==null,isForwardEnabledForThread:a!=="COMMUNITY"&&a!=="E2EE_CUTOVER",messageID:typeof f.thread_id==="string"&&i.timestamp!=null?d("MWChatMessageId").makeSent(f.thread_id,i.messageID,i.timestamp):null,setActiveIndex:function(a){return A({curIdx:a,type:"viewMediaAtIndex"})},showMessengerLink:g,thumbnails:s,children:i.__typename==="MessageVideo"?j.jsx(c("MWChatMediaViewerVideo.react"),{fbid:i.nodeID,hdSrc:i.attachment.hdUrl!=null?i.attachment.hdUrl:void 0,originalHeight:i.attachment.originalDimensions.x,originalWidth:i.attachment.originalDimensions.y,sdSrc:i.attachment.sdUrl}):i.__typename==="MessageImage"?j.jsx(c("MWChatMediaViewerImage.react"),{blurredImageURI:i.attachment.blurredImageUri,imageURI:i.attachment.image.uri}):i.__typename==="MessageAnimatedImage"?j.jsx(c("MWChatMediaViewerImage.react"),{blurredImageURI:null,imageURI:i.attachment.image.uri,origHeight:i.attachment.image.height,origWidth:i.attachment.image.width}):null})}r.displayName=r.name+" [from "+f.id+"]";function a(a){a=j.jsx(r,babelHelpers["extends"]({},a));return j.jsx(c("CometErrorBoundary.react"),{fallback:function(){return j.jsx(c("CometErrorRoot.react"),{})},children:a})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);