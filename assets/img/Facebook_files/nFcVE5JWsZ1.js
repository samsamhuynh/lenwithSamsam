;/*FB_PKG_DELIM*/

__d("LWICometPromoteButtonWrapper_page.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"LWICometPromoteButtonWrapper_page",selections:[{alias:null,args:null,concreteType:"AccountBanhammerInfo",kind:"LinkedField",name:"account_banhammer_info",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"is_banhammered",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"WhatsAppAdsIdeneityInfo",kind:"LinkedField",name:"whatsapp_ads_identity_info",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"is_wa_ads_identity",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_published",storageKey:null},{alias:null,args:null,concreteType:"AdsLWIInfo",kind:"LinkedField",name:"lwi_info",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"should_render_promote_button",storageKey:null}],storageKey:null}],type:"Page",abstractKey:null};e.exports=a}),null);
__d("PagesCometAdminEditingInlineFieldQuery$Parameters",["PagesCometAdminEditingInlineFieldQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("PagesCometAdminEditingInlineFieldQuery_facebookRelayOperation"),metadata:{},name:"PagesCometAdminEditingInlineFieldQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("PagesCometAdminEditingSectionDialogQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="5830502400384780"}),null);
__d("PagesCometAdminEditingSectionDialogQuery$Parameters",["PagesCometAdminEditingSectionDialogQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("PagesCometAdminEditingSectionDialogQuery_facebookRelayOperation"),metadata:{},name:"PagesCometAdminEditingSectionDialogQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometPageVerificationBadge_page.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometPageVerificationBadge_page",selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_verified",storageKey:null}],type:"Page",abstractKey:null};e.exports=a}),null);
__d("PagesCometHeaderActionsMenuWrapperQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="9296600990413574"}),null);
__d("PagesCometHeaderActionsMenuWrapperQuery$Parameters",["PagesCometHeaderActionsMenuWrapperQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("PagesCometHeaderActionsMenuWrapperQuery_facebookRelayOperation"),metadata:{},name:"PagesCometHeaderActionsMenuWrapperQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("PagesCometLikeFollowButtonRenderer_page.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[{defaultValue:null,kind:"LocalArgument",name:"location"}],kind:"Fragment",metadata:null,name:"PagesCometLikeFollowButtonRenderer_page",selections:[{alias:null,args:[{kind:"Variable",name:"location",variableName:"location"}],concreteType:null,kind:"LinkedField",name:"comet_like_follow_button_renderer",plural:!1,selections:[{kind:"InlineFragment",selections:[{args:null,documentName:"PagesCometLikeFollowButtonRenderer_page",fragmentName:"PagesCometLikeButtonRenderer_renderer",fragmentPropName:"renderer",kind:"ModuleImport"}],type:"PagesCometLikeButtonRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"PagesCometLikeFollowButtonRenderer_page",fragmentName:"PagesCometFollowButtonRenderer_renderer",fragmentPropName:"renderer",kind:"ModuleImport"}],type:"PagesCometFollowButtonRenderer",abstractKey:null}],storageKey:null}],type:"Page",abstractKey:null};e.exports=a}),null);
__d("PagesCometMessageButton_page.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"PagesCometMessageButton_page",selections:[{args:null,kind:"FragmentSpread",name:"usePagesCometMessage_page"}],type:"Page",abstractKey:null};e.exports=a}),null);
__d("usePagesCometMessage_page.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"usePagesCometMessage_page",selections:[{alias:null,args:null,kind:"ScalarField",name:"can_viewer_message",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"should_hide_page_messaging_entrypoint",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"mailbox_id",storageKey:null}],type:"Page",abstractKey:null};e.exports=a}),null);
__d("LWICometPromoteUnavailableButton.react",["fbt","CometLazyPopoverTrigger.react","JSResourceForInteraction","LWICometGenericEventsLoggerLite","LWIOmniButton.react","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react"),j=d("react").useEffect,k=c("JSResourceForInteraction")("LWICometPromoteUnavailablePopover.react").__setRef("LWICometPromoteUnavailableButton.react");function a(a){var b=a.entryPoint,e=a.icon,f=a.pageID,g=a.size,l=g===void 0?"medium":g;g=a.usePromoteLabel;var m=g===void 0?!1:g;j(function(){d("LWICometGenericEventsLoggerLite").log({entry_point:b,event:"render_promote_unavailable_button",page_id:f})},[b,f]);return i.jsx(c("CometLazyPopoverTrigger.react"),{align:"end",popoverProps:{entryPoint:b,pageID:f},popoverResource:k,position:"above",children:function(a,b){return i.jsx(c("LWIOmniButton.react"),{icon:e,label:m?h._("__JHASH__ph8_ygAUTgO__JHASH__"):h._("__JHASH__BQ1PA1IMMda__JHASH__"),onPress:b,ref:a,size:l,type:"secondary"})}})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("LWIPromoteButton.react",["fbt","LWIOmniAdCenterButton.react","qex","react","useGetLWIPromoteButtonClickProps"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");function a(a){var b=a.entryPoint,d=a.excludedProducts,e=a.icon,f=a.isPublished;f=f===void 0?!0:f;var g=a.padding;g=g===void 0?"wide":g;var j=a.pageID,k=a.phase,l=a.product,m=a.reduceEmphasis;m=m===void 0?!1:m;var n=a.size;n=n===void 0?"medium":n;var o=a.testid;o=a.type;o=o===void 0?"primary":o;a=a.usePromoteLabel;a=a===void 0?!1:a;b=c("useGetLWIPromoteButtonClickProps")({entryPoint:b,excludedProducts:d,isPublished:f,pageID:j,phase:k,product:l});f=(d=c("qex")._("970"))!=null?d:0;j=a?h._("__JHASH__ph8_ygAUTgO__JHASH__"):h._("__JHASH__5BuQSnX_nB8__JHASH__");switch(f){case 1:j=h._("__JHASH__sQbiaeAI8xX__JHASH__");break;case 2:j=h._("__JHASH__by1iiEGrkiY__JHASH__");break}return i.jsx(c("LWIOmniAdCenterButton.react"),babelHelpers["extends"]({icon:e,label:j,padding:g,reduceEmphasis:m,size:n,testid:void 0,type:o},b))}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("LWICometPromoteButtonWrapper.react",["CometRelay","LWICometPromoteButtonWrapper_page.graphql","LWICometPromoteUnavailableButton.react","LWIPromoteButton.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react");function a(a){var e,f,g,j=a.entryPoint,k=a.icon,l=a.page$key,m=a.pageID,n=a.reduceEmphasis,o=a.size,p=a.testid;p=a.type;a=a.usePromoteLabel;a=a===void 0?!1:a;l=d("CometRelay").useFragment(h!==void 0?h:h=b("LWICometPromoteButtonWrapper_page.graphql"),l);e=l==null?void 0:(e=l.lwi_info)==null?void 0:e.should_render_promote_button;f=l==null?void 0:(f=l.account_banhammer_info)==null?void 0:f.is_banhammered;g=(l==null?void 0:(g=l.whatsapp_ads_identity_info)==null?void 0:g.is_wa_ads_identity)===!0;if(g)return null;return f===!0||e===!1?i.jsx(c("LWICometPromoteUnavailableButton.react"),{entryPoint:j,icon:k,pageID:m,size:o,usePromoteLabel:a}):i.jsx(c("LWIPromoteButton.react"),{entryPoint:j,icon:k,isPublished:(l==null?void 0:l.is_published)===!0,pageID:m,reduceEmphasis:n,size:o,testid:void 0,type:p,usePromoteLabel:a})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PagesCometAdminEditingInlineField.entrypoint",["JSResourceForInteraction","PagesCometAdminEditingInlineFieldQuery$Parameters"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){var b=a.routeProps,d=b.endPoint,e=b.entryPoint,f=b.field;b=b.pageID;return{extraProps:a,queries:{queryRef:{parameters:c("PagesCometAdminEditingInlineFieldQuery$Parameters"),variables:{endPoint:d,entryPoint:e,field:f,pageID:b,scale:1}}}}},root:c("JSResourceForInteraction")("PagesCometAdminEditingInlineField.react").__setRef("PagesCometAdminEditingInlineField.entrypoint")};g["default"]=a}),98);
__d("PagesCometAdminEditPageFieldButton.react",["fbt","ix","CometEntryPointDialogTrigger.react","CometLink.react","CometPressable.react","PagesCometAdminEditingInlineField.entrypoint","TetraButton.react","TetraIcon.react","fbicon","react"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j=d("react");function a(a){var b=a.createPageUsernameDialog;b=b===void 0?!1:b;var e=a.customDialogTitle,f=a.endPoint,g=a.entryPoint,k=a.field,l=a.icon,m=a.label,n=a.pageID,o=a.useIcon,p=o===void 0?!1:o;o=a.useLink;var q=o===void 0?!1:o,r=h._("__JHASH__LANK1cc3G7K__JHASH__");return j.jsx(c("CometEntryPointDialogTrigger.react"),{dialogEntryPoint:c("PagesCometAdminEditingInlineField.entrypoint"),otherProps:{},preloadParams:{routeParams:{},routeProps:{createPageUsernameDialog:b,customDialogTitle:e,endPoint:f,entryPoint:g,field:k,pageID:n}},children:function(a){if(q)return j.jsx(c("CometLink.react"),{color:"highlight",onClick:a,children:m==null?r:m});if(p){var b;return j.jsx(c("CometPressable.react"),{"aria-label":h._("__JHASH__Askw29qHfww__JHASH__"),focusable:!1,onPress:a,overlayDisabled:!0,children:j.jsx(c("TetraIcon.react"),{color:"highlight",icon:(b=l)!=null?b:d("fbicon")._(i("477826"),20)})})}else return j.jsx(c("TetraButton.react"),{icon:l,label:m==null?r:m,onPress:a,type:"secondary"})}})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PagesCometAdminEditingSectionDialog.entrypoint",["JSResourceForInteraction","PagesCometAdminEditingSectionDialogQuery$Parameters"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){var b=a.routeProps,d=b.endPoint,e=b.entryPoint,f=b.pageID;b=b.section;return{extraProps:a,queries:{queryRef:{parameters:c("PagesCometAdminEditingSectionDialogQuery$Parameters"),variables:{endPoint:d,entryPoint:e,pageID:f,scale:1,section:b}}}}},root:c("JSResourceForInteraction")("PagesCometAdminEditingSectionDialog.react").__setRef("PagesCometAdminEditingSectionDialog.entrypoint")};g["default"]=a}),98);
__d("BusinessCometSelfViewContext",["react"],(function(a,b,c,d,e,f,g){"use strict";a=d("react");b=a.createContext(!1);c=b;g["default"]=c}),98);
__d("CometPageVerificationBadge.react",["CometPageVerificationBadge_page.graphql","CometProfileVerificationBadge.react","CometRelay","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react");function a(a){var e=a.page,f=a.shouldBeWhite;f=f===void 0?!1:f;a=a.size;e=d("CometRelay").useFragment(h!==void 0?h:h=b("CometPageVerificationBadge_page.graphql"),e);var g=e.id;e=e.is_verified===!0;return g==null||!e?null:i.jsx(c("CometProfileVerificationBadge.react"),{isInverted:f,profileID:g,size:a})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PagesCometHeaderActionsMenuWrapper.entrypoint",["JSResourceForInteraction","PagesCometHeaderActionsMenuWrapperQuery$Parameters"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){var c=a.isAdminView,d=a.isLikedPageView;a=a.pageID;return{queries:{pageHeaderActionsQueryReference:{parameters:b("PagesCometHeaderActionsMenuWrapperQuery$Parameters"),variables:{pageID:a,showAdminActions:c===!0,showLikedPageActions:d===!0}}}}},root:c("JSResourceForInteraction")("PagesCometHeaderActionsMenuWrapper.react").__setRef("PagesCometHeaderActionsMenuWrapper.entrypoint")};g["default"]=a}),98);
__d("PagesCometLikeFollowButtonRenderer.react",["CometRelay","PagesCometLikeFollowButtonRenderer_page.graphql","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react");function a(a){var c=a.page$key;a=babelHelpers.objectWithoutPropertiesLoose(a,["page$key"]);c=d("CometRelay").useFragment(h!==void 0?h:h=b("PagesCometLikeFollowButtonRenderer_page.graphql"),c);return i.jsx(d("CometRelay").MatchContainer,{match:c==null?void 0:c.comet_like_follow_button_renderer,props:a})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PagesPageMessageClickFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("1744158");b=d("FalcoLoggerInternal").create("pages_page_message_click",a);e=b;g["default"]=e}),98);
__d("usePagesCometMessage",["CometRelay","PagesLogger","PagesLoggerEventEnum","PagesPageMessageClickFalcoEvent","react","useMWChatOpenTabForPage","usePagesCometMessage_page.graphql"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react").useCallback;function a(a,e,f,g){a=d("CometRelay").useFragment(h!==void 0?h:h=b("usePagesCometMessage_page.graphql"),a);var j=(a==null?void 0:a.can_viewer_message)===!0&&(a==null?void 0:a.should_hide_page_messaging_entrypoint)===!1,k=c("useMWChatOpenTabForPage")(f),l=a==null?void 0:a.id,m=a==null?void 0:a.mailbox_id;f=i(function(){if(l!=null&&j===!0){var a;k((a=m)!=null?a:l);g&&g(e);c("PagesPageMessageClickFalcoEvent").log(function(){return{event_data:{},event_location:e,page_id:l}});d("PagesLogger").log(l,c("PagesLoggerEventEnum").CLICK,"page_message",e,["page_consumer_experience"],{})}},[l,j,k,g,e]);return[j,f]}g.usePagesCometMessage=a}),98);
__d("PagesCometMessageButton.react",["fbt","ix","CometRelay","CometTrackingNodeProvider.react","PagesCometMessageButton_page.graphql","TetraButton.react","fbicon","react","usePagesCometMessage"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j,k=d("react");function a(a){var e=a.disabled;e=e===void 0?!1:e;var f=a.hideLabel;f=f===void 0?!0:f;var g=a.location,l=a.logAction,m=a.messengerLsEntryPoint;a=a.page$key;a=d("CometRelay").useFragment(j!==void 0?j:j=b("PagesCometMessageButton_page.graphql"),a);a=d("usePagesCometMessage").usePagesCometMessage(a,g,m,l);g=a[0];m=a[1];return g?k.jsx(c("CometTrackingNodeProvider.react"),{trackingNode:199,children:k.jsx("div",{className:"x6s0dn4 x78zum5 x1i64zmx","data-testid":void 0,children:k.jsx(c("TetraButton.react"),{disabled:e,icon:d("fbicon")._(i("505616"),16),label:h._("__JHASH__4qQOXx0pgR3__JHASH__"),labelIsHidden:f,onPress:m,size:"medium",type:"secondary"},"message")},"message")}):null}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PagesCometMoreActionsButton.react",["fbt","CometEntryPointPopoverTrigger.react","CometTrackingNodeProvider.react","Dots3HorizontalFilled24.svg.react","PagesCometHeaderActionsMenuWrapper.entrypoint","SVGIcon","TetraButton.react","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");function a(a){var b=a.disabled,e=b===void 0?!1:b;b=a.isAdminView;var f=a.isLikedPageView;f=f===void 0?!1:f;a=a.pageID;return i.jsx(c("CometTrackingNodeProvider.react"),{trackingNode:55,children:i.jsx("div",{className:"x6s0dn4 x78zum5 x1i64zmx",children:i.jsx(c("CometEntryPointPopoverTrigger.react"),{align:"middle",entryPointParams:{isAdminView:b,isLikedPageView:f,pageID:a},otherProps:{isAdminView:b},popoverEntryPoint:c("PagesCometHeaderActionsMenuWrapper.entrypoint"),preloadTrigger:"button",children:function(a,b,f,g,j,k){return i.jsx(c("TetraButton.react"),{disabled:e,icon:d("SVGIcon").svgIcon(c("Dots3HorizontalFilled24.svg.react")),label:h._("__JHASH__4dz9c4GojOb__JHASH__"),labelIsHidden:!0,onHoverIn:g,onHoverOut:j,onPress:b,onPressIn:k,ref:a,size:"medium",testid:void 0,type:"secondary"})}})},"more")})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("validatePhoneNumber",[],(function(a,b,c,d,e,f){"use strict";function a(a,b){b=(b=b)!=null?b:7;return/^[+]?[0-9()\s-.#]{7,25}$/.test(a)&&a.replace(/[^0-9]/g,"").length>=b}f["default"]=a}),66);