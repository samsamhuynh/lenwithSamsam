;/*FB_PKG_DELIM*/

__d("CometGamingLeftRailSettingsMenuQuery.graphql",["CometGamingLeftRailSettingsMenuQuery_facebookRelayOperation","relay-runtime"],(function(a,b,c,d,e,f){"use strict";a={fragment:{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometGamingLeftRailSettingsMenuQuery",selections:[{alias:null,args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"CometGamingLeftRailSettingsShowNotificationDots_viewer"}],storageKey:null}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[],kind:"Operation",name:"CometGamingLeftRailSettingsMenuQuery",selections:[{alias:null,args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[{alias:null,args:[{items:[{kind:"Literal",name:"bookmark_ids.0",value:"285571681929755"}],kind:"ListValue",name:"bookmark_ids"},{kind:"Literal",name:"environment",value:"COMET"},{kind:"Literal",name:"folder_id",value:"PRODUCT"},{kind:"Literal",name:"sections",value:["FACEBOOK_APP"]}],concreteType:"BookmarksConnection",kind:"LinkedField",name:"bookmarks",plural:!1,selections:[{alias:null,args:null,concreteType:"BookmarksEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"Bookmark",kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"is_badge_disabled",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null}],storageKey:null}],storageKey:null}],storageKey:'bookmarks(bookmark_ids:["285571681929755"],environment:"COMET",folder_id:"PRODUCT",sections:["FACEBOOK_APP"])'}],storageKey:null}]},params:{id:b("CometGamingLeftRailSettingsMenuQuery_facebookRelayOperation"),metadata:{},name:"CometGamingLeftRailSettingsMenuQuery",operationKind:"query",text:null}};b("relay-runtime").PreloadableQueryRegistry.set(a.params.id,a);e.exports=a}),null);
__d("CometGamingLeftRailSettingsShowNotificationDots_viewer.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometGamingLeftRailSettingsShowNotificationDots_viewer",selections:[{args:[{kind:"Literal",name:"bookmarkID",value:"285571681929755"}],kind:"FragmentSpread",name:"useTopTabBadgeDisabled_viewer"}],type:"Viewer",abstractKey:null};e.exports=a}),null);
__d("CometGamingLeftRailSettingsShowNotificationDots.react",["fbt","ix","CometGamingLeftRailSettingsShowNotificationDots_viewer.graphql","CometMenuItemCheckbox.react","CometRelay","CometUpdateProductBadgeSettingMutation","deferredLoadComponent","fbicon","react","requireDeferred","useGamingDestinationLoggedInCallback","useToasterStateManager","useTopTabBadgeDisabled"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j,k=d("react");e=d("react");var l=e.useCallback,m=e.useRef;e=c("requireDeferred")("CometDisableNotificationBadgingToast.react").__setRef("CometGamingLeftRailSettingsShowNotificationDots.react");var n=c("deferredLoadComponent")(e);function a(a){a=a.viewer$key;a=d("CometRelay").useFragment(j!==void 0?j:j=b("CometGamingLeftRailSettingsShowNotificationDots_viewer.graphql"),a);var e=d("CometRelay").useRelayEnvironment(),f=c("useTopTabBadgeDisabled")(a),g=c("useToasterStateManager")(),o=m(null);a=c("useGamingDestinationLoggedInCallback")(l(function(){d("CometUpdateProductBadgeSettingMutation").updateProductBadgeDisableSetting({bookmark_id:"285571681929755",environment:e,hide_badge:!f,onCompleted:function(){o.current!=null&&g["delete"](o.current);var a=g.push(k.jsx(n,{disabled:!f,onDismiss:function(){return g["delete"](a)},productName:"Gaming"}),5e3);o.current=a}})},[e,f,g]));var p=h._("__JHASH__NfN9_SK03WK__JHASH__");return k.jsx(c("CometMenuItemCheckbox.react"),{asSwitch:!0,icon:d("fbicon")._(i("716571"),20),iconStyle:"contained",isSelected:!f,onClick:a,preventClosingMenuOnSelect:!0,primaryText:p})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometGamingLeftRailNotificationSettings",["fbt","ix","CometGamingLeftRailSettingsShowNotificationDots.react","CometMenuItemWithSubmenu.react","fbicon","react"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j=d("react");function a(a){a=a.viewer$key;var b=h._("__JHASH__RaplACq2n-y__JHASH__");return j.jsx(c("CometMenuItemWithSubmenu.react"),{icon:d("fbicon")._(i("716571"),20),iconStyle:"contained",primaryText:b,submenu:{header:{meta:h._("__JHASH__UB5d6bBLs-v__JHASH__"),title:b},items:[j.jsx(c("CometGamingLeftRailSettingsShowNotificationDots.react"),{viewer$key:a},"notification-settings-dots")]}},"notification-settings")}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("XCometGamingPrivacySettingsControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/gaming/privacy/settings/",Object.freeze({}),void 0);b=a;g["default"]=b}),98);
__d("CometGamingLeftRailSettingsMenu.react",["fbt","ix","CometGamingLeftRailNotificationSettings","CometGamingLeftRailSettingsMenuQuery.graphql","CometGamingLeftRailSettingsShowNotificationDots.react","CometMenu.react","CometMenuItem.react","CometRelay","XCometGamingPrivacySettingsControllerRouteBuilder","fbicon","gkx","react","unrecoverableViolation","useCometRouterDispatcher"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j,k=d("react");function a(a){a.props;a=a.queries;a=d("CometRelay").usePreloadedQuery(j!==void 0?j:j=b("CometGamingLeftRailSettingsMenuQuery.graphql"),a.queryReference);a=a.viewer;var e=c("useCometRouterDispatcher")();if(!a)throw c("unrecoverableViolation")("In CometGamingLeftRailSettingsMenu cannot get viewer","gaming_video");var f=function(){var a=c("XCometGamingPrivacySettingsControllerRouteBuilder").buildURL({}).toString();e!=null&&e.go(a,{})};return c("gkx")("43")?k.jsxs(c("CometMenu.react"),{header:{title:h._("__JHASH__0XNZkwpFQhN__JHASH__")},children:[k.jsx(c("CometGamingLeftRailNotificationSettings"),{viewer$key:a}),k.jsx(c("CometMenuItem.react"),{icon:d("fbicon")._(i("497245"),20),iconStyle:"contained",onClick:f,primaryText:h._("__JHASH__VSTL6HBe54Y__JHASH__")},"game-privacy")]}):k.jsx(c("CometMenu.react"),{header:{meta:h._("__JHASH__UB5d6bBLs-v__JHASH__"),title:h._("__JHASH__RaplACq2n-y__JHASH__")},children:k.jsx(c("CometGamingLeftRailSettingsShowNotificationDots.react"),{viewer$key:a})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);