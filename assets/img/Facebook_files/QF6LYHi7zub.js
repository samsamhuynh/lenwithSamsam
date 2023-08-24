;/*FB_PKG_DELIM*/

__d("useTopTabBadgeDisabled_viewer.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[{defaultValue:null,kind:"LocalArgument",name:"bookmarkID"}],kind:"Fragment",metadata:null,name:"useTopTabBadgeDisabled_viewer",selections:[{alias:null,args:[{items:[{kind:"Variable",name:"bookmark_ids.0",variableName:"bookmarkID"}],kind:"ListValue",name:"bookmark_ids"},{kind:"Literal",name:"environment",value:"COMET"},{kind:"Literal",name:"folder_id",value:"PRODUCT"},{kind:"Literal",name:"sections",value:["FACEBOOK_APP"]}],concreteType:"BookmarksConnection",kind:"LinkedField",name:"bookmarks",plural:!1,selections:[{alias:null,args:null,concreteType:"BookmarksEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"Bookmark",kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"is_badge_disabled",storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null}],type:"Viewer",abstractKey:null};e.exports=a}),null);
__d("CometUpdateProductBadgeSettingMutation_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="4871010913013615"}),null);
__d("CometUpdateProductBadgeSettingMutation.graphql",["CometUpdateProductBadgeSettingMutation_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a=function(){var a={defaultValue:null,kind:"LocalArgument",name:"bookmark_id"},c={defaultValue:null,kind:"LocalArgument",name:"input"},d=[{kind:"Variable",name:"input",variableName:"input"}];return{fragment:{argumentDefinitions:[a,c],kind:"Fragment",metadata:null,name:"CometUpdateProductBadgeSettingMutation",selections:[{alias:null,args:d,concreteType:"UpdateBadgeDisabledSettingResponsePayload",kind:"LinkedField",name:"update_badge_disabled_setting",plural:!1,selections:[{alias:null,args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[{args:[{kind:"Variable",name:"bookmarkID",variableName:"bookmark_id"}],kind:"FragmentSpread",name:"useTopTabBadgeDisabled_viewer"}],storageKey:null}],storageKey:null}],type:"Mutation",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[c,a],kind:"Operation",name:"CometUpdateProductBadgeSettingMutation",selections:[{alias:null,args:d,concreteType:"UpdateBadgeDisabledSettingResponsePayload",kind:"LinkedField",name:"update_badge_disabled_setting",plural:!1,selections:[{alias:null,args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[{alias:null,args:[{items:[{kind:"Variable",name:"bookmark_ids.0",variableName:"bookmark_id"}],kind:"ListValue",name:"bookmark_ids"},{kind:"Literal",name:"environment",value:"COMET"},{kind:"Literal",name:"folder_id",value:"PRODUCT"},{kind:"Literal",name:"sections",value:["FACEBOOK_APP"]}],concreteType:"BookmarksConnection",kind:"LinkedField",name:"bookmarks",plural:!1,selections:[{alias:null,args:null,concreteType:"BookmarksEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"Bookmark",kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"is_badge_disabled",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null}]},params:{id:b("CometUpdateProductBadgeSettingMutation_facebookRelayOperation"),metadata:{},name:"CometUpdateProductBadgeSettingMutation",operationKind:"mutation",text:null}}}();e.exports=a}),null);
__d("CometMenuItemCheckbox.react",["ix","CometIcon.react","CometMenuItemBase.react","CometMenuItemIcon.react","CometSwitch.react","fbicon","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");function a(a,b){a.asSwitch;var e=a.disabled,f=a.icon,g=a.iconColor,j=a.iconSize,k=a.iconStyle,l=a.isSelected,m=a.radioStyle;m===void 0?"default":m;m=babelHelpers.objectWithoutPropertiesLoose(a,["asSwitch","disabled","icon","iconColor","iconSize","iconStyle","isSelected","radioStyle"]);a=a.asSwitch===!0?i.jsx(c("CometSwitch.react"),{size:"small",value:l,children:a.primaryText}):l?i.jsx(c("CometIcon.react"),{color:e===!0?"disabled":"highlight",icon:d("fbicon")._(h("531032"),24)}):i.jsx(c("CometIcon.react"),{color:e===!0?"disabled":"secondary",icon:d("fbicon")._(h("659289"),24)});return i.jsx(c("CometMenuItemBase.react"),babelHelpers["extends"]({},m,{"aria-checked":l,aux:a,disabled:e,iconNode:f!=null?i.jsx(c("CometMenuItemIcon.react"),{icon:f,iconColor:g,iconSize:j,use:k}):void 0,ref:b,role:"menuitemcheckbox"}))}a.displayName=a.name+" [from "+f.id+"]";b=i.forwardRef(a);g["default"]=b}),98);
__d("useTopTabBadgeDisabled",["CometRelay","useTopTabBadgeDisabled_viewer.graphql"],(function(a,b,c,d,e,f,g){"use strict";var h;function a(a){a=d("CometRelay").useFragment(h!==void 0?h:h=b("useTopTabBadgeDisabled_viewer.graphql"),a);return(a=a==null?void 0:(a=a.bookmarks)==null?void 0:(a=a.edges[0])==null?void 0:(a=a.node)==null?void 0:a.is_badge_disabled)!=null?a:!1}g["default"]=a}),98);
__d("MarketplaceComposerDeliveryMethodMultiselectDropdown.react",["fbt","CometMenu.react","CometMenuItemCheckbox.react","CometOnOutsideClick.react","MarketplaceComposerDeliveryMethodMultiselectField","marketplaceComposerDispatchers.hybrid","react","useListingShippableEligibilityCheck"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");function a(a){var b=d("marketplaceComposerDispatchers.hybrid").useMarketplaceComposerViewState(),e=d("marketplaceComposerDispatchers.hybrid").useMarketplaceComposerCommonViewState(),f=e.shippingSeller,g=c("useListingShippableEligibilityCheck")(b);return i.jsx(c("CometOnOutsideClick.react"),{onOutsideClick:a.onClose,children:function(b){return i.jsx("div",{ref:b,children:i.jsxs(c("CometMenu.react"),{onClose:a.onClose,children:[i.jsx(j,{bodyText:h._("__JHASH__R6GOQjOjic4__JHASH__"),disabled:!g||!f.value.canCreateShippableListings,primaryText:h._("__JHASH__KmWvby9yCx9__JHASH__"),value:"SHIPPING_ONSITE"}),i.jsx(j,{primaryText:h._("__JHASH__8xhaTVDi9dE__JHASH__"),value:"IN_PERSON"})]})})}})}a.displayName=a.name+" [from "+f.id+"]";function j(a){var b=d("marketplaceComposerDispatchers.hybrid").useMarketplaceComposerDispatcher(),e=b.dispatch;b=d("marketplaceComposerDispatchers.hybrid").useMarketplaceComposerC2CViewState();b=b.deliveryMethods;var f=b.value.has(a.value);b=function(){f?e(d("MarketplaceComposerDeliveryMethodMultiselectField").removeDeliveryMethod(a.value)):e(d("MarketplaceComposerDeliveryMethodMultiselectField").addDeliveryMethod(a.value))};return i.jsx(c("CometMenuItemCheckbox.react"),{bodyText:a.bodyText,disabled:a.disabled,isSelected:f,onClick:b,preventClosingMenuOnSelect:!0,primaryText:a.primaryText},a.primaryText)}j.displayName=j.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometUpdateProductBadgeSettingMutation",["CometRelay","CometUpdateProductBadgeSettingMutation.graphql"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h!==void 0?h:h=b("CometUpdateProductBadgeSettingMutation.graphql");function a(a){var b=a.bookmark_id,c=a.environment,e=a.hide_badge;a=a.onCompleted;d("CometRelay").commitMutation(c,{mutation:i,onCompleted:a&&a(),optimisticResponse:{update_badge_disabled_setting:{viewer:{bookmarks:{edges:[{node:{id:b,is_badge_disabled:e}}]}}}},variables:{bookmark_id:b,input:{bookmark_id:b,hide_badge:e}}})}g.updateProductBadgeDisableSetting=a}),98);