;/*FB_PKG_DELIM*/

__d("CometCloudGamingPreGameDialogRootQuery.graphql",["CometCloudGamingPreGameDialogRootQuery_facebookRelayOperation","relay-runtime"],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{defaultValue:null,kind:"LocalArgument",name:"app_id"}],c=[{kind:"Variable",name:"game",variableName:"app_id"}],d={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},e={alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},f={alias:"isCloudGaming",args:null,kind:"ScalarField",name:"is_cloud_gaming",storageKey:null},g={alias:"iconUri",args:null,kind:"ScalarField",name:"icon_uri",storageKey:null},h={alias:"cloudGamingConnectivityCheckResult",args:null,concreteType:"CloudGamingConnectivityCheckResult",kind:"LinkedField",name:"cloud_gaming_connectivity_check_result",plural:!1,selections:[{alias:"locationCheckResult",args:null,kind:"ScalarField",name:"location_check_result",storageKey:null},{alias:"networkCheckResult",args:null,kind:"ScalarField",name:"location_check_result",storageKey:null}],storageKey:null};return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"CometCloudGamingPreGameDialogRootQuery",selections:[{alias:null,args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[{alias:"instantGameInfoWithSupportCheck",args:c,concreteType:"InstantGameInfoWithSupportCheck",kind:"LinkedField",name:"instant_game_info_with_support_check",plural:!1,selections:[{alias:null,args:null,concreteType:"Application",kind:"LinkedField",name:"application",plural:!1,selections:[d,e,{alias:"instantGameInfo",args:null,concreteType:"GamesInstantPlayStyleInfo",kind:"LinkedField",name:"instant_game_info",plural:!1,selections:[f,g,h],storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"CometCloudGamingPreGameDialogRootQuery",selections:[{alias:null,args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[{alias:"instantGameInfoWithSupportCheck",args:c,concreteType:"InstantGameInfoWithSupportCheck",kind:"LinkedField",name:"instant_game_info_with_support_check",plural:!1,selections:[{alias:null,args:null,concreteType:"Application",kind:"LinkedField",name:"application",plural:!1,selections:[d,e,{alias:"instantGameInfo",args:null,concreteType:"GamesInstantPlayStyleInfo",kind:"LinkedField",name:"instant_game_info",plural:!1,selections:[f,g,h,d],storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null}]},params:{id:b("CometCloudGamingPreGameDialogRootQuery_facebookRelayOperation"),metadata:{},name:"CometCloudGamingPreGameDialogRootQuery",operationKind:"query",text:null}}}();b("relay-runtime").PreloadableQueryRegistry.set(a.params.id,a);e.exports=a}),null);
__d("WelcomeDashboardCometContainerQuery.graphql",["WelcomeDashboardCometContainerQuery_facebookRelayOperation","relay-runtime"],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{defaultValue:null,kind:"LocalArgument",name:"scale"}],c={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},d={kind:"Variable",name:"scale",variableName:"scale"},e=[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}],f=[{kind:"Literal",name:"first",value:10}],g={alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},h={alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null},i={alias:null,args:null,kind:"ScalarField",name:"friendship_status",storageKey:null},j={alias:null,args:[{kind:"Literal",name:"height",value:60},d,{kind:"Literal",name:"width",value:60}],concreteType:"Image",kind:"LinkedField",name:"profile_picture",plural:!1,selections:e,storageKey:null};return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"WelcomeDashboardCometContainerQuery",selections:[{alias:null,args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"WelcomeDashboardCometContent_viewer"}],storageKey:null}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"WelcomeDashboardCometContainerQuery",selections:[{alias:null,args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"account_user",plural:!1,selections:[c,{alias:null,args:null,kind:"ScalarField",name:"short_name",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"profile_picture_id",storageKey:null},{alias:null,args:[{kind:"Literal",name:"height",value:160},d,{kind:"Literal",name:"width",value:160}],concreteType:"Image",kind:"LinkedField",name:"profile_picture",plural:!1,selections:e,storageKey:null}],storageKey:null},{alias:null,args:f,concreteType:"PeopleYouMayKnowConnection",kind:"LinkedField",name:"people_you_may_know",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"count",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"tracking_signature",storageKey:null},{alias:null,args:null,concreteType:"PeopleYouMayKnowEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"node",plural:!1,selections:[c,g,h,i,j,{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"cursor",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"PageInfo",kind:"LinkedField",name:"page_info",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"end_cursor",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"has_next_page",storageKey:null}],storageKey:null}],storageKey:"people_you_may_know(first:10)"},{alias:null,args:f,filters:null,handle:"connection",key:"WelcomeDashboardPYMK_people_you_may_know",kind:"LinkedHandle",name:"people_you_may_know"},{alias:null,args:[{kind:"Literal",name:"first",value:2}],concreteType:"FriendingPossibilitiesConnection",kind:"LinkedField",name:"friending_possibilities",plural:!1,selections:[{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"nodes",plural:!0,selections:[c,g,h,i,j],storageKey:null}],storageKey:"friending_possibilities(first:2)"}],storageKey:null}]},params:{id:b("WelcomeDashboardCometContainerQuery_facebookRelayOperation"),metadata:{},name:"WelcomeDashboardCometContainerQuery",operationKind:"query",text:null}}}();b("relay-runtime").PreloadableQueryRegistry.set(a.params.id,a);e.exports=a}),null);
__d("WelcomeDashboardCometContent_viewer.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[{defaultValue:10,kind:"LocalArgument",name:"count"},{kind:"RootArgument",name:"scale"}],kind:"Fragment",metadata:null,name:"WelcomeDashboardCometContent_viewer",selections:[{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"account_user",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"short_name",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"profile_picture_id",storageKey:null},{alias:null,args:[{kind:"Literal",name:"height",value:160},{kind:"Variable",name:"scale",variableName:"scale"},{kind:"Literal",name:"width",value:160}],concreteType:"Image",kind:"LinkedField",name:"profile_picture",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:[{kind:"Variable",name:"first",variableName:"count"}],concreteType:"PeopleYouMayKnowConnection",kind:"LinkedField",name:"people_you_may_know",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"count",storageKey:null}],storageKey:null},{args:null,kind:"FragmentSpread",name:"WelcomeDashboardFriendRequestList_viewer"},{args:null,kind:"FragmentSpread",name:"WelcomeDashboardPYMKList_viewer"}],type:"Viewer",abstractKey:null};e.exports=a}),null);
__d("WelcomeDashboardFriendRequestList_viewer.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[{defaultValue:2,kind:"LocalArgument",name:"count"},{kind:"RootArgument",name:"scale"}],kind:"Fragment",metadata:null,name:"WelcomeDashboardFriendRequestList_viewer",selections:[{alias:null,args:[{kind:"Variable",name:"first",variableName:"count"}],concreteType:"FriendingPossibilitiesConnection",kind:"LinkedField",name:"friending_possibilities",plural:!1,selections:[{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"nodes",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"friendship_status",storageKey:null},{alias:null,args:[{kind:"Literal",name:"height",value:60},{kind:"Variable",name:"scale",variableName:"scale"},{kind:"Literal",name:"width",value:60}],concreteType:"Image",kind:"LinkedField",name:"profile_picture",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null}],type:"Viewer",abstractKey:null};e.exports=a}),null);
__d("WelcomeDashboardPYMKList_viewer.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[{defaultValue:10,kind:"LocalArgument",name:"count"},{kind:"RootArgument",name:"scale"}],kind:"Fragment",metadata:{connection:[{count:"count",cursor:null,direction:"forward",path:["people_you_may_know"]}]},name:"WelcomeDashboardPYMKList_viewer",selections:[{alias:"people_you_may_know",args:null,concreteType:"PeopleYouMayKnowConnection",kind:"LinkedField",name:"__WelcomeDashboardPYMK_people_you_may_know_connection",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"tracking_signature",storageKey:null},{alias:null,args:null,concreteType:"PeopleYouMayKnowEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"friendship_status",storageKey:null},{alias:null,args:[{kind:"Literal",name:"height",value:60},{kind:"Variable",name:"scale",variableName:"scale"},{kind:"Literal",name:"width",value:60}],concreteType:"Image",kind:"LinkedField",name:"profile_picture",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"cursor",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"PageInfo",kind:"LinkedField",name:"page_info",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"end_cursor",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"has_next_page",storageKey:null}],storageKey:null}],storageKey:null}],type:"Viewer",abstractKey:null};e.exports=a}),null);
__d("CometCloudGamingPreGameDialogRoot.react",["CometCloudGamingPreGameDialogRootQuery.graphql","CometContentArea.react","CometRelay","JSResourceForInteraction","XCometInstantGamesHubControllerRouteBuilder","XCometInstantGamesHubPlayControllerRouteBuilder","react","useCometLazyDialog","useCometRouterDispatcher"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react"),j=d("react").useEffect,k=c("JSResourceForInteraction")("GamesServiceCloudGamingUnsupportedLocationDialog.react").__setRef("CometCloudGamingPreGameDialogRoot.react"),l=c("JSResourceForInteraction")("GamesServiceCloudGamingNetworkConnectionDialog.react").__setRef("CometCloudGamingPreGameDialogRoot.react");function a(a){var e,f,g,m,n=c("useCometRouterDispatcher")(),o=c("useCometLazyDialog")(k,void 0),p=o[0];o=c("useCometLazyDialog")(l,void 0);var q=o[0];o=d("CometRelay").usePreloadedQuery(h!==void 0?h:h=b("CometCloudGamingPreGameDialogRootQuery.graphql"),a.queries.preGameDialogRootQuery);o=o.viewer;o=o==null?void 0:(o=o.instantGameInfoWithSupportCheck)==null?void 0:o.application;e=o==null?void 0:(e=o.instantGameInfo)==null?void 0:(e=e.cloudGamingConnectivityCheckResult)==null?void 0:e.locationCheckResult;f=o==null?void 0:(f=o.instantGameInfo)==null?void 0:(f=f.cloudGamingConnectivityCheckResult)==null?void 0:f.networkCheckResult;g=o==null?void 0:(g=o.instantGameInfo)==null?void 0:g.isCloudGaming;var r=(m=o==null?void 0:o.id)!=null?m:"",s=(m=o==null?void 0:o.name)!=null?m:"",t=(o=o==null?void 0:(m=o.instantGameInfo)==null?void 0:m.iconUri)!=null?o:"",u=c("XCometInstantGamesHubPlayControllerRouteBuilder").buildURL({cloud_binary_id:(m=a.extraProps)==null?void 0:m.cloud_binary_id,context_source_id:(o=a.extraProps)==null?void 0:o.context_source_id,context_type:(m=a.extraProps)==null?void 0:m.context_type,game_or_link:(o=a.extraProps)==null?void 0:o.game_or_link,payload:(m=a.extraProps)==null?void 0:m.payload,skip_check:!0,source:(o=a.extraProps)==null?void 0:o.source}),v=c("XCometInstantGamesHubControllerRouteBuilder").buildURL({store_visit_source:"pre_game_dialog"}),w=g===!0&&e===!1,x=g===!0&&f===!1;j(function(){w?p({appId:r,gameIcon:t,gameName:s,navigateToGameHub:function(){n==null?void 0:n.go(v,{});return},onClose:function(){n==null?void 0:n.go(v,{});return}}):x?q({appId:r,navigateToGameHub:function(){n==null?void 0:n.go(v,{})},onClose:function(){},onContinueToGame:function(){n==null?void 0:n.go(u,{})}}):n==null?void 0:n.go(u,{})});return i.jsx(c("CometContentArea.react"),{children:i.jsx("div",{})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("WelcomeDashboardFriendListItemWithButtons.react",["fbt","CometRouteMatch","FriendingCometFriendRequestStrings","TetraButtonGroup.react","TetraListCell.react","TetraText.react","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");function a(a){var b=a.href,e=a.iconSrc,f=a.message,g=a.onAddFriend,j=a.onCancelRequest,k=a.onClick,l=a.onConfirm,m=a.onDelete;a=a.title;var n=null;f!==null&&(n=i.jsx(c("TetraText.react"),{color:"secondary",type:"body4",children:f}));f=null;l!=null&&m!=null?f={component:i.jsx(c("TetraButtonGroup.react"),{paddingTop:0,primary:{label:h._("__JHASH__ulrteH22Ka6__JHASH__"),onPress:l,testid:"confirm_button"},secondary:{label:d("FriendingCometFriendRequestStrings").reject(),onPress:m,testid:"ignore_button"},size:"medium"}),type:"buttons"}:g!=null&&m!=null?f={component:i.jsx(c("TetraButtonGroup.react"),{paddingTop:0,primary:{label:h._("__JHASH__Z4PyBRj_DqQ__JHASH__"),onPress:g,testid:"add_button"},secondary:{label:h._("__JHASH__NBfMiFm79R7__JHASH__"),onPress:m,testid:"remove_suggestion"},size:"medium"}),type:"buttons"}:j!=null&&(f={component:i.jsx(c("TetraButtonGroup.react"),{paddingTop:0,primary:{label:h._("__JHASH__s4QOxbUulOM__JHASH__"),onPress:j,testid:"cancel_request_button",type:"secondary"},size:"medium"}),type:"buttons"});l=d("CometRouteMatch").useCurrentRouteMatcher(d("CometRouteMatch").MatchFunctions.urlMatchFunction);g=l(b);m={shape:"circle",size:60,source:{uri:e},type:"profile-photo"};return i.jsx(c("TetraListCell.react"),{addOnBottom:f,addOnPrimary:m,body:n,headline:a,headlineLineLimit:1,level:4,linkProps:{url:b},onPress:k,selected:g})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("WelcomeDashboardFriendRequestListItem.react",["fbt","CometRelay","FriendingCometFriendRequestConfirmMutation","FriendingCometFriendRequestDeleteMutation","RequestClickFalcoEvent","RequestSeenFalcoEvent","WelcomeDashboardFriendListItemWithButtons.react","react","useMinifiedProductAttribution","useVisibilityObserver"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");b=d("react");var j=b.useCallback,k=b.useRef,l=b.useState;function a(a){var b=a.friendship_status,e=a.id,f=a.name,g=a.profilePicUri;a=a.url;var m=d("CometRelay").useRelayEnvironment(),n=k(!1),o=l(null),p=o[0],q=o[1],r=c("useMinifiedProductAttribution")(),s=j(function(a){q(function(){return a.name==="NetworkTransportError"?h._("__JHASH__J83gzDrVB2V__JHASH__"):a.description})},[]);o=j(function(){e!=null&&d("FriendingCometFriendRequestConfirmMutation").commit({environment:m,navigationChain:r,onError:s,senderID:e,source:"welcome_dash"})},[m,s,e,r]);var t=j(function(){e!=null&&d("FriendingCometFriendRequestDeleteMutation").commit(m,e,"welcome_dash",void 0,s)},[m,s,e]),u=j(function(){e!=null&&c("RequestClickFalcoEvent").log(function(){return{request_id:e,request_surface:"welcome_dash"}})},[e]),v=j(function(){e!=null&&!n.current&&(c("RequestSeenFalcoEvent").log(function(){return{request_id:e,request_surface:"welcome_dash"}}),n.current=!0)},[e]);v=c("useVisibilityObserver")({onVisible:v});if(e==null||a==null||g==null||f==null||b==null)return null;var w=null;switch(b){case"ARE_FRIENDS":w=h._("__JHASH__MBSKqmuWv9I__JHASH__");break;case"INCOMING_REQUEST":return i.jsx("div",{ref:v,children:i.jsx(c("WelcomeDashboardFriendListItemWithButtons.react"),{href:a,iconSrc:g,message:p,onClick:u,onConfirm:o,onDelete:t,title:f})});case"CAN_REQUEST":w=h._("__JHASH__dFVgEtnSoyi__JHASH__");break;default:break}return i.jsx("div",{ref:v,children:i.jsx(c("WelcomeDashboardFriendListItemWithButtons.react"),{href:a,iconSrc:g,message:w,onClick:u,title:f})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("WelcomeDashboardFriendRequestList.react",["fbt","CometCard.react","CometRelay","TetraButton.react","TetraText.react","WelcomeDashboardFriendRequestListItem.react","WelcomeDashboardFriendRequestList_viewer.graphql","XCometFriendingControllerRouteBuilder","gkx","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=d("react");function a(a){a=a.viewer;a=d("CometRelay").useFragment(i!==void 0?i:i=b("WelcomeDashboardFriendRequestList_viewer.graphql"),a);a=a==null?void 0:(a=a.friending_possibilities)==null?void 0:a.nodes;if(a==null||a.length===0)return null;a=a.map(function(a,b){var d=a.friendship_status,e=a.id,f=a.name,g=a.profile_picture;a=a.url;g=g==null?void 0:g.uri;return j.jsxs("div",{"data-testid":void 0,children:[b===0?null:j.jsx("div",{className:"xdppsyt x1d52u69 xktsk01"}),j.jsx(c("WelcomeDashboardFriendRequestListItem.react"),{friendship_status:d,id:e,name:f,profilePicUri:g,url:a})]},b)}).filter(Boolean);if(a.length===0)return null;c("gkx")("1721485")&&a.push(j.jsx(c("TetraButton.react"),{label:h._("__JHASH__djyUPV2-z2E__JHASH__"),linkProps:{passthroughProps:{ref:"WELCOME_PAGE"},url:c("XCometFriendingControllerRouteBuilder").buildURL({})},size:"medium",type:"secondary"},"see-all"));return j.jsx("div",{className:"xw7yly9",children:j.jsxs(c("CometCard.react"),{background:"white",dropShadow:1,children:[j.jsx("div",{className:"x1xfsgkm xqmdsaz x1miatn0",children:j.jsx(c("TetraText.react"),{type:"headlineEmphasized2",children:h._("__JHASH__cri6-fIU5WH__JHASH__")})}),j.jsx("div",{className:"xwxc41k x1swvt13 x1pi30zi xyamay9",children:a})]})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("WelcomeDashboardPYMKListItem.react",["fbt","CometRelay","FriendingCometFriendRequestCancelMutation","FriendingCometFriendRequestSendMutation","FriendingCometPYMKBlacklistSuggestionMutation","RegularPymkAddFalcoEvent","RegularPymkImpFalcoEvent","RegularPymkProfileFalcoEvent","RegularPymkXoutFalcoEvent","SilenceableErrorMessageUtils","WelcomeDashboardFriendListItemWithButtons.react","react","useMinifiedProductAttribution","useVisibilityObserver"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");b=d("react");var j=b.useCallback,k=b.useRef,l=b.useState;function a(a){var b=a.friendship_status,e=a.id,f=a.name,g=a.profilePicUri,m=a.signature;a=a.url;var n=d("CometRelay").useRelayEnvironment(),o=k(!1),p=l(null),q=p[0],r=p[1],s=k(!1),t=j(function(a){var b=d("SilenceableErrorMessageUtils").getMetadataFromError(a);d("SilenceableErrorMessageUtils").shouldHideErrorMessage(b)||r(function(){return a.name==="NetworkTransportError"?h._("__JHASH__J83gzDrVB2V__JHASH__"):a.description});s.current=!s.current},[]),u=c("useMinifiedProductAttribution")();p=j(function(){e!=null&&(d("FriendingCometFriendRequestSendMutation").commit({environment:n,navigationChain:u,onError:t,pymkLocation:"friend_browser",receiverID:e,source:"friend_browser_wd"}),c("RegularPymkAddFalcoEvent").log(function(){return{pymk_id:e,pymk_location:"friend_browser",pymk_signature:m}}))},[n,t,e,u,m]);var v=j(function(){e!=null&&d("FriendingCometFriendRequestCancelMutation").commit({environment:n,navigationChain:u,onError:t,receiverID:e,source:"friend_browser"})},[n,t,e,u]),w=j(function(){e!=null&&(d("FriendingCometPYMKBlacklistSuggestionMutation").commit(n,"WelcomeDashboardPYMK_people_you_may_know",d("CometRelay").VIEWER_ID,e,"friend_browser"),c("RegularPymkXoutFalcoEvent").log(function(){return{pymk_id:e,pymk_location:"friend_browser",pymk_signature:m}}))},[n,e,m]),x=j(function(){e!=null&&c("RegularPymkProfileFalcoEvent").log(function(){return{pymk_id:e,pymk_location:"friend_browser",pymk_signature:m}})},[e,m]),y=j(function(){e!=null&&!o.current&&(c("RegularPymkImpFalcoEvent").log(function(){return{pymk_id:e,pymk_location:"friend_browser",pymk_signature:m}}),o.current=!0)},[e,m]);y=c("useVisibilityObserver")({onVisible:y});if(e==null||a==null||g==null||f==null)return null;q=q;switch(b){case"CAN_REQUEST":s.current&&(q=h._("__JHASH__MJNiftGCp6X__JHASH__"),s.current=!1);return i.jsx("div",{ref:y,children:i.jsx(c("WelcomeDashboardFriendListItemWithButtons.react"),{href:a,iconSrc:g,message:q,onAddFriend:p,onClick:x,onDelete:w,title:f})});case"OUTGOING_REQUEST":s.current||(q=h._("__JHASH__TEOr0XFFOKy__JHASH__"),s.current=!0);return i.jsx("div",{ref:y,children:i.jsx(c("WelcomeDashboardFriendListItemWithButtons.react"),{href:a,iconSrc:g,message:q,onCancelRequest:v,onClick:x,title:f})});default:return null}}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("WelcomeDashboardPYMKList.react",["fbt","CometCard.react","CometRelay","TetraButton.react","TetraText.react","WelcomeDashboardPYMKListItem.react","WelcomeDashboardPYMKList_viewer.graphql","XCometFriendingControllerRouteBuilder","gkx","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=d("react");function a(a){var e;a=a.viewer;a=d("CometRelay").useFragment(i!==void 0?i:i=b("WelcomeDashboardPYMKList_viewer.graphql"),a);e=a==null?void 0:(e=a.people_you_may_know)==null?void 0:e.edges;var f=a==null?void 0:(a=a.people_you_may_know)==null?void 0:a.tracking_signature;if(e==null||e.length===0)return null;a=e.map(function(a,b){a=a==null?void 0:a.node;if(a==null)return null;var d=a.friendship_status,e=a.id,g=a.name,h=a.profile_picture;a=a.url;h=h==null?void 0:h.uri;return j.jsxs("div",{children:[b===0?null:j.jsx("div",{className:"xdppsyt x1d52u69 xktsk01"}),j.jsx(c("WelcomeDashboardPYMKListItem.react"),{friendship_status:d,id:e,name:g,profilePicUri:h,signature:f,url:a})]},b)}).filter(Boolean);if(a.length===0)return null;c("gkx")("1721485")&&a.push(j.jsx(c("TetraButton.react"),{label:h._("__JHASH__djyUPV2-z2E__JHASH__"),linkProps:{passthroughProps:{ref:"WELCOME_PAGE"},url:c("XCometFriendingControllerRouteBuilder").buildURL({})},size:"medium",type:"secondary"},"see-all"));return j.jsx("div",{className:"xw7yly9",children:j.jsxs(c("CometCard.react"),{background:"white",dropShadow:1,children:[j.jsx("div",{className:"x1xfsgkm xqmdsaz x1miatn0",children:j.jsx(c("TetraText.react"),{type:"headlineEmphasized2",children:h._("__JHASH__LrO2U3BVx6Y__JHASH__")})}),j.jsx("div",{className:"xwxc41k x1swvt13 x1pi30zi xyamay9",children:a})]})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("WelcomeDashboardPrivacyTour.react",["fbt","CometCard.react","CometRow.react","CometRowItem.react","CometUnitHeader.react","JSResourceForInteraction","TetraButton.react","react","useCometLazyDialog"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react"),j=c("JSResourceForInteraction")("WelcomeDashboardPrivacyTourDialog.react").__setRef("WelcomeDashboardPrivacyTour.react");function a(){var a=c("useCometLazyDialog")(j);a=a[0];return i.jsx("div",{className:"xw7yly9",children:i.jsx(c("CometCard.react"),{background:"white",dropShadow:1,children:i.jsxs("div",{className:"xyamay9 x1pi30zi x1l90r2v x1swvt13",children:[i.jsx(c("CometRow.react"),{paddingHorizontal:8,paddingTop:8,paddingVertical:0,children:i.jsx(c("CometRowItem.react"),{children:i.jsx(c("CometUnitHeader.react"),{body:h._("__JHASH__Ra9jawhpNvZ__JHASH__"),headline:h._("__JHASH__ZP_sV7bAIbq__JHASH__"),level:2,paddingHorizontal:8,paddingTop:8})})}),i.jsx(c("CometRow.react"),{paddingHorizontal:16,paddingTop:8,paddingVertical:16,children:i.jsx(c("CometRowItem.react"),{children:i.jsx(c("TetraButton.react"),{label:h._("__JHASH__gfb_DJPw46p__JHASH__"),onPress:a,padding:"wide",size:"large",testid:void 0})})})]})})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("WelcomeDashboardSearchInput.react",["fbt","ix","CometCard.react","CometComponentWithKeyCommands.react","CometKeys","CometRoundedTextInput.react","CometRow.react","CometRowItem.react","CometUnitHeader.react","TetraIcon.react","XCometSearchResultsControllerRouteBuilder","cometTypeaheadInputWebkitStyles","fbicon","react","useCometTypeaheadNavigate","useSearchCometResultsURLBuilder"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j=d("react");b=d("react");var k=b.useCallback,l=b.useState;function a(){var a=l(""),b=a[0],e=a[1],f=c("useSearchCometResultsURLBuilder")({currentSearchType:"people",entryPointSurface:"WELCOME_DASHBOARD",routeBuilder:c("XCometSearchResultsControllerRouteBuilder")}),g=c("useCometTypeaheadNavigate")(),m=k(function(){g(f({entryPointAction:"SEARCH_BOX",query:b}))},[g,b,f]);a=k(function(a){a=a.target.value;e(a)},[]);var n=[{command:{key:c("CometKeys").ENTER},description:h._("__JHASH__82ed1_ObreX__JHASH__"),handler:function(){return m&&m()},triggerFromInputs:!0}],o=h._("__JHASH__cz_aRITW6k5__JHASH__");return j.jsx("div",{className:"xw7yly9",children:j.jsx(c("CometCard.react"),{background:"white",dropShadow:1,children:j.jsxs("div",{className:"x1swvt13 x1pi30zi xyamay9 x1l90r2v",children:[j.jsx(c("CometRow.react"),{paddingHorizontal:16,paddingTop:8,children:j.jsx(c("CometRowItem.react"),{children:j.jsx(c("CometUnitHeader.react"),{body:h._("__JHASH__9CjNiN4FDhf__JHASH__"),headline:h._("__JHASH__4XWatnpwvp-__JHASH__"),level:2,paddingHorizontal:0,paddingTop:8})})}),j.jsx(c("CometRow.react"),{paddingHorizontal:16,paddingTop:8,paddingVertical:16,children:j.jsx(c("CometRowItem.react"),{expanding:!0,children:j.jsx(c("CometComponentWithKeyCommands.react"),{commandConfigs:n,children:j.jsx(c("CometRoundedTextInput.react"),{icon:j.jsx(c("TetraIcon.react"),{color:"tertiary",icon:d("fbicon")._(i("491282"),16)}),label:o,onChange:a,placeholder:o,size:"large",type:"search",xstyle:c("cometTypeaheadInputWebkitStyles")["default"]})})})})]})})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("WelcomeDashboardUploadProfilePictureButton.react",["fbt","CometEntryPointDialogTrigger.react","CometTransientDialogProvider.react","ProfileCometContext","ProfileCometEngagementLoggingContext","ProfileCometProfilePictureEditDialog.entrypoint","TetraButton.react","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react"),j=d("react").useMemo;function a(a){var b=a.userID;a=j(function(){return{isInViewAs:!1,profileID:b,profileVanity:null,viewerID:b}},[b]);var d=j(function(){return{profile_product_bucket:"welcome",profile_subsurface:"protile",profile_surface:"timeline"}},[]);return i.jsx(c("ProfileCometContext").Provider,{value:a,children:i.jsx(c("ProfileCometEngagementLoggingContext").Provider,{value:d,children:i.jsx(c("CometTransientDialogProvider.react"),{children:i.jsx(c("CometEntryPointDialogTrigger.react"),{dialogEntryPoint:c("ProfileCometProfilePictureEditDialog.entrypoint"),otherProps:{profileID:b,source:"WELCOME"},preloadParams:{},preloadTrigger:"button",children:function(a,b,d,e){return i.jsx(c("TetraButton.react"),{label:h._("__JHASH__UPW6U3tRThj__JHASH__"),onHoverIn:b,onHoverOut:d,onPress:a,onPressIn:e,padding:"wide",size:"large"})}})})})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("WelcomeDashboardUploadProfilePicture.react",["fbt","CometCard.react","CometRow.react","CometRowItem.react","CometUnitHeader.react","TetraProfilePhoto.react","WelcomeDashboardUploadProfilePictureButton.react","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");function a(a){var b=a.profilePhotoUri,d=a.profilePictureId;a=a.userID;if(d!=null||a==null)return null;d=b!=null?i.jsx(c("TetraProfilePhoto.react"),{shape:"circle",size:168,source:{uri:b}}):null;return i.jsx("div",{className:"xw7yly9",children:i.jsx(c("CometCard.react"),{background:"white",dropShadow:1,children:i.jsxs(c("CometRow.react"),{paddingHorizontal:16,paddingVertical:16,children:[i.jsxs(c("CometRowItem.react"),{expanding:!0,verticalAlign:"center",children:[i.jsx(c("CometRow.react"),{paddingHorizontal:0,paddingTop:0,children:i.jsx(c("CometRowItem.react"),{children:i.jsx(c("CometUnitHeader.react"),{body:h._("__JHASH__yOhG8DxUUxY__JHASH__"),headline:h._("__JHASH__wYwh3v_wy_y__JHASH__"),level:2,paddingHorizontal:16,paddingTop:8})})}),i.jsx(c("CometRow.react"),{paddingHorizontal:16,paddingTop:16,children:i.jsx(c("CometRowItem.react"),{children:i.jsx(c("WelcomeDashboardUploadProfilePictureButton.react"),{userID:a})})})]}),i.jsx(c("CometRowItem.react"),{children:d})]})})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("WelcomeDashboardCometContent.react",["fbt","CometFeedWidthStyles","CometRelay","TetraText.react","WelcomeDashboardCometContent_viewer.graphql","WelcomeDashboardFriendRequestList.react","WelcomeDashboardPYMKList.react","WelcomeDashboardPrivacyTour.react","WelcomeDashboardSearchInput.react","WelcomeDashboardUploadProfilePicture.react","react","stylex"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=d("react"),k={container:{maxWidth:"x193iq5w",paddingBottom:"x1gan7if",$$css:!0},headline:{marginTop:"xg87l8a",marginBottom:"x1iymm2a",$$css:!0}};function a(a){var e,f,g,l,m;a=a.viewer;a=d("CometRelay").useFragment(i!==void 0?i:i=b("WelcomeDashboardCometContent_viewer.graphql"),a);e=a==null?void 0:(e=a.account_user)==null?void 0:e.short_name;f=a==null?void 0:(f=a.account_user)==null?void 0:f.profile_picture_id;g=a==null?void 0:(g=a.account_user)==null?void 0:(g=g.profile_picture)==null?void 0:g.uri;l=a==null?void 0:(l=a.account_user)==null?void 0:l.id;m=(m=a==null?void 0:(m=a.people_you_may_know)==null?void 0:m.count)!=null?m:0;var n=d("CometFeedWidthStyles").getFeedWidthStyles();e=j.jsx("div",{className:"xg87l8a x1iymm2a",children:j.jsx(c("TetraText.react"),{type:"headlineEmphasized1",children:h._("__JHASH__fEIrD1k2KZC__JHASH__",[h._param("short-name",e)])})});return j.jsxs("div",{className:c("stylex")(k.container,n.feedContainer),children:[e,j.jsx(c("WelcomeDashboardUploadProfilePicture.react"),{profilePhotoUri:g,profilePictureId:f,userID:l}),j.jsx(c("WelcomeDashboardFriendRequestList.react"),{viewer:a}),m===0?j.jsx(c("WelcomeDashboardSearchInput.react"),{}):j.jsx(c("WelcomeDashboardPYMKList.react"),{viewer:a}),j.jsx(c("WelcomeDashboardPrivacyTour.react"),{})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("WelcomeDashboardCometContainer.react",["CometRelay","WelcomeDashboardCometContainerQuery.graphql","WelcomeDashboardCometContent.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react");function a(a){a=a.welcomeDashboardContainerQueryReference;a=d("CometRelay").usePreloadedQuery(h!==void 0?h:h=b("WelcomeDashboardCometContainerQuery.graphql"),a);a=a.viewer;return i.jsx(c("WelcomeDashboardCometContent.react"),{viewer:a})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("WelcomeDashboardCometRoot.react",["CometHomeContentArea.react","CometHomeRootLayout.react","WelcomeDashboardCometContainer.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){a=a.queries;return h.jsx(c("CometHomeRootLayout.react"),{leftRailContainerQueryReference:a.leftRailContainerQueryReference,children:h.jsx(c("CometHomeContentArea.react"),{rightRail:null,children:h.jsx(c("WelcomeDashboardCometContainer.react"),{welcomeDashboardContainerQueryReference:a.welcomeDashboardContainerQueryReference})})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);