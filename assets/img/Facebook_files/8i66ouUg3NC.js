;/*FB_PKG_DELIM*/

__d("CometSplitContainer.react",["BaseView.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i={aspectRatioContainer:{paddingTop:"x1ukowes",$$css:!0},aspectRatioContainerContent:{bottom:"x1ey2m1c",end:"xds687c",position:"x10l6tqk",start:"x17qophe",top:"x13vifvy",$$css:!0},item:{"float":"xrbpyxo",height:"x5yr21d",width:"xh8yej3",$$css:!0},root:{overflowX:"x6ikm8r",overflowY:"x10wlt62",$$css:!0}},j={2:{marginTop:"x1y332i5",marginEnd:"xcwd3tp",marginBottom:"x1jyxor1",marginStart:"x39eecv",$$css:!0},4:{marginTop:"x1kgmq87",marginEnd:"xwrv7xz",marginBottom:"xmgb6t1",marginStart:"x8182xy",$$css:!0}},k={0:{height:"xlxyqfn",width:"x3hqpx7",$$css:!0},2:{height:"xsjs6fv",marginTop:"xvijh9v",marginEnd:"xhhsvwb",marginBottom:"x1ty9z65",marginStart:"xgzva0m",width:"x1v9rd06",$$css:!0},4:{height:"xk0gi2l",marginTop:"xr9ek0c",marginEnd:"xfs2ol5",marginBottom:"xjpr12u",marginStart:"x12mruv9",width:"x1gefphp",$$css:!0}},l={0:{height:"x5yr21d",width:"x3hqpx7",$$css:!0},2:{height:"xhiitf2",marginTop:"xvijh9v",marginEnd:"xhhsvwb",marginBottom:"x1ty9z65",marginStart:"xgzva0m",width:"x1v9rd06",$$css:!0},4:{height:"x10msahz",marginTop:"xr9ek0c",marginEnd:"xfs2ol5",marginBottom:"xjpr12u",marginStart:"x12mruv9",width:"x1gefphp",$$css:!0}};function a(a){var b=a.children,d=a.spacing,e=d===void 0?0:d;d=a.xstyle;var f=h.Children.count(b);return h.jsx(c("BaseView.react"),{xstyle:[i.root,j[e],d],children:h.jsx(c("BaseView.react"),{xstyle:i.aspectRatioContainer,children:h.jsx(c("BaseView.react"),{xstyle:i.aspectRatioContainerContent,children:h.Children.map(b,function(a,b){return b>=4?null:h.jsx(c("BaseView.react"),{xstyle:[i.item,f>1&&(f===2||f===3&&b===0?l[e]:k[e])],children:a})})})})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometSplitImage.react",["BaseImage.react","CometDisabledContext","CometSplitContainer.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i=d("react").useContext,j={image:{maxWidth:"x193iq5w",minHeight:"x1us19tq",objectFit:"xl1xv1r",opacity:"x1hc1fzr",transitionDuration:"xii2z7h",transitionProperty:"x19991ni",transitionTimingFunction:"xls3em1",$$css:!0},imageDisabled:{opacity:"xti2d7y",$$css:!0},root:{overflowX:"x6ikm8r",overflowY:"x10wlt62",$$css:!0}};function a(a){var b=a.disabled,d=a.images,e=a.xstyle;a=babelHelpers.objectWithoutPropertiesLoose(a,["disabled","images","xstyle"]);var f=i(c("CometDisabledContext"));return h.jsx(c("CometSplitContainer.react"),babelHelpers["extends"]({},a,{xstyle:[j.root,e],children:d.map(function(a,d){var e;a=typeof a==="object"?a:{source:a};var g=a.alt;g=g===void 0?void 0:g;var i=a.disabled;e=i===void 0?(e=b)!=null?e:f:i;i=a.source;return h.jsx(c("BaseImage.react"),{alt:g,src:i,xstyle:[j.image,e&&j.imageDisabled]},i+"-"+d)})}))}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("GroupRoomUpdaterUtils",["CometRelay","objectValues","recoverableViolation"],(function(a,b,c,d,e,f,g){"use strict";var h="GroupRoomRHCCard_joinable_video_chats",i="GroupRoomGamingAudioRHCCard_joinable_video_chats",j="GroupRoomTab_joinable_video_chats",k="GroupJoinableVideoChatRHCUnitRoot_joinable_video_chats",l="GroupsJoinableVideoChatsList_joinable_video_chats",m="GroupJoinableVideoChatsEdge";function n(a){return d("CometRelay").ConnectionHandler.getConnection(a,h,{allows_guests:!1})}function o(a){return d("CometRelay").ConnectionHandler.getConnection(a,i,{allows_guests:!1,group_room_type:"GAMING_AUDIO"})}function p(a){return d("CometRelay").ConnectionHandler.getConnection(a,k,{allows_guests:!1})}function q(a){return d("CometRelay").ConnectionHandler.getConnection(a,j,{allows_guests:!1})}function r(a){return d("CometRelay").ConnectionHandler.getConnection(a,l,{allows_guests:!1})}function s(a){return{blueRhcConnection:p(a),blueTabConnection:r(a),gamingAudioRhcConnection:o(a),rhcConnection:n(a),tabConnection:q(a)}}function a(a,b,e){a=a.get(b);if(a==null){c("recoverableViolation")("group is not found in relay store for groupID: "+b,"groups_comet");return}b=s(a);a=b.blueRhcConnection;var f=b.blueTabConnection,g=b.gamingAudioRhcConnection,h=b.rhcConnection;b=b.tabConnection;f!=null&&d("CometRelay").ConnectionHandler.deleteNode(f,e);a!=null&&d("CometRelay").ConnectionHandler.deleteNode(a,e);g!=null&&d("CometRelay").ConnectionHandler.deleteNode(g,e);b!=null&&d("CometRelay").ConnectionHandler.deleteNode(b,e);h!=null&&d("CometRelay").ConnectionHandler.deleteNode(h,e)}function t(a,b,e){var f;if(!e)return;a=d("CometRelay").ConnectionHandler.createEdge(a,e,b,m);if(!a){c("recoverableViolation")("GroupRoomUpdaterUtils: Failed to create new edge","groups_comet");return}b=e.getLinkedRecords("edges");if(!b){c("recoverableViolation")("GroupRoomUpdaterUtils: Expected connection to have edges","groups_comet");return}f=(f=a.getLinkedRecord("node"))==null?void 0:f.getDataID();for(var b=b,g=Array.isArray(b),h=0,b=g?b:b[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var i;if(g){if(h>=b.length)break;i=b[h++]}else{h=b.next();if(h.done)break;i=h.value}i=i;if(f!=null&&(i==null?void 0:(i=i.getLinkedRecord("node"))==null?void 0:i.getDataID())===f)return}d("CometRelay").ConnectionHandler.insertEdgeBefore(e,a)}function b(a,b,d){var e=a.get(d);if(e==null){c("recoverableViolation")("group is not found in relay store for groupID: "+d,"groups_comet");return}c("objectValues")(s(e)).map(function(c){t(a,b,c)})}g.getConnections=s;g.groupsDeleteRoomUpdater=a;g.addNodeToGroupsConnections=b}),98);
__d("VideoChatLogging",["VideoChatLoggingDataContext","react","recoverableViolation","requireDeferred","useSinglePartialViewImpression"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");e=d("react");var i=e.useCallback,j=e.useContext,k=e.useMemo,l=c("requireDeferred")("CommunityMessagingRoomsClientEventFalcoEvent").__setRef("VideoChatLogging"),m=c("requireDeferred")("RoomCardImpressionFalcoEvent").__setRef("VideoChatLogging"),n=c("requireDeferred")("RoomCardTapFalcoEvent").__setRef("VideoChatLogging"),o=c("requireDeferred")("RoomCreateSuccessFalcoEvent").__setRef("VideoChatLogging"),p=c("requireDeferred")("RoomCreateTapFalcoEvent").__setRef("VideoChatLogging"),q=c("requireDeferred")("RoomCreationFailFalcoEvent").__setRef("VideoChatLogging"),r=c("requireDeferred")("RoomCreationFlowStartFalcoEvent").__setRef("VideoChatLogging"),s=c("requireDeferred")("RoomCreationFlowSuccessFalcoEvent").__setRef("VideoChatLogging"),t=c("requireDeferred")("RoomEmptyCardSheetImpressionFalcoEvent").__setRef("VideoChatLogging"),u=c("requireDeferred")("RoomEndTapFalcoEvent").__setRef("VideoChatLogging"),v=c("requireDeferred")("RoomGroupRoomInviteParticipantsFalcoEvent").__setRef("VideoChatLogging"),w=c("requireDeferred")("RoomGroupRoomListViewImpressionFalcoEvent").__setRef("VideoChatLogging"),x=c("requireDeferred")("RoomGroupRoomListViewItemTapFalcoEvent").__setRef("VideoChatLogging"),y=c("requireDeferred")("RoomGroupRoomRhcImpressionFalcoEvent").__setRef("VideoChatLogging"),z=c("requireDeferred")("RoomInterestTapFalcoEvent").__setRef("VideoChatLogging"),A=c("requireDeferred")("RoomJoinTapFalcoEvent").__setRef("VideoChatLogging"),B=c("requireDeferred")("RoomLobbySheetImpressionFalcoEvent").__setRef("VideoChatLogging"),C=c("requireDeferred")("RoomMessageTapFalcoEvent").__setRef("VideoChatLogging"),D=c("requireDeferred")("RoomPromotionUnitImpressionFalcoEvent").__setRef("VideoChatLogging"),E=c("requireDeferred")("RoomPromotionUnitTapFalcoEvent").__setRef("VideoChatLogging"),F=c("requireDeferred")("RoomSelfCardButtonTapFalcoEvent").__setRef("VideoChatLogging"),G=c("requireDeferred")("RoomSelfCardTapFalcoEvent").__setRef("VideoChatLogging"),H=c("requireDeferred")("RoomSettingSheetImpressionFalcoEvent").__setRef("VideoChatLogging"),I=c("requireDeferred")("RoomTrayImpressionFalcoEvent").__setRef("VideoChatLogging"),J=c("requireDeferred")("RoomUpdateTapFalcoEvent").__setRef("VideoChatLogging"),K=c("requireDeferred")("TapReportToFacebookFalcoEvent").__setRef("VideoChatLogging"),L={};function a(){var a=j(c("VideoChatLoggingDataContext")),b=function(b){D.onReady(function(c){var d=babelHelpers["extends"]({},a,b);c.log(function(){var a;return{source:(a=d.source)!=null?a:void 0,surface:(a=d.surface)!=null?a:void 0}})})},d=i(function(a){E.onReady(function(b){b.log(function(){return{button_type:a==null?void 0:a.button_type,source:a==null?void 0:a.source,surface:a==null?void 0:a.surface}})})},[]),e=i(function(b){A.onReady(function(c){var d=babelHelpers["extends"]({},a,b);c.log(function(){var a;return{button_type:d.button_type,card_tray_index:d.card_tray_index,funnel_session_id:(a=d.session_ids)==null?void 0:a.funnel_session_id,num_room_participants:d.num_room_participants,room_url:d.room_url,session_ids:(a=d.session_ids)!=null?a:L,source:d.source,surface:d.surface,video_call_link_id:d.video_call_link_id}})})},[a]),f=function(a){y.onReady(function(b){var d=a==null?void 0:a.room_container_id;if(d==null){c("recoverableViolation")("roomContainerID should not be null while logging Groups RHC Impression","groups_comet");return}b.log(function(){return{list_video_call_link_ids:a==null?void 0:a.list_video_call_link_ids,room_container_id:d,source:a==null?void 0:a.source,surface:a==null?void 0:a.surface}})})},g=function(a){w.onReady(function(b){var d=a==null?void 0:a.room_container_id;if(d==null){c("recoverableViolation")("roomContainerID should not be null while logging Groups Rooms Tab\n          List View Impression","groups_comet");return}b.log(function(){var b;return{list_video_call_link_ids:a==null?void 0:a.list_video_call_link_ids,room_container_id:d,session_ids:(b=a==null?void 0:a.session_ids)!=null?b:L,source:a==null?void 0:a.source,surface:a==null?void 0:a.surface}})})},h=i(function(b){x.onReady(function(c){var d=babelHelpers["extends"]({},a,b);c.log(function(){var a;return{num_room_participants:(a=d.num_room_participants)!=null?a:0,room_container_id:d.room_container_id,source:d.source,surface:d.surface,video_call_link_id:d.video_call_link_id}})})},[a]),k=i(function(b){m.onReady(function(c){var d=babelHelpers["extends"]({},a,b);c.log(function(){var a;return{card_tray_index:d.card_tray_index,num_room_participants:(a=d.num_room_participants)!=null?a:0,session_ids:(a=d.session_ids)!=null?a:{},source:d.source,surface:d.surface,video_call_link_id:d.video_call_link_id}})})},[a]),M=i(function(b){p.onReady(function(c){var d=babelHelpers["extends"]({},a,b);c.log(function(){var a;return{button_type:d.button_type,card_tray_index:d.card_tray_index,room_container_id:d.room_container_id,session_ids:(a=d.session_ids)!=null?a:{},sheet_type:d.sheet_type,source:d.source,surface:d.surface,tray_ui_type:d.tray_ui_type,video_call_link_id:d.video_call_link_id}})})},[a]),N=i(function(b){r.onReady(function(c){var d=babelHelpers["extends"]({},a,b);c.log(function(){var a;return{card_tray_index:d.card_tray_index,session_ids:(a=d.session_ids)!=null?a:{},source:d.source,surface:d.surface,tray_ui_type:d.tray_ui_type}})})},[a]),O=i(function(b){s.onReady(function(c){var d=babelHelpers["extends"]({},a,b);c.log(function(){var a;return{card_tray_index:d.card_tray_index,session_ids:(a=d.session_ids)!=null?a:{},source:d.source,surface:d.surface,tray_ui_type:d.tray_ui_type}})})},[a]),P=i(function(b){J.onReady(function(c){var d=babelHelpers["extends"]({},a,b);c.log(function(){var a;return{button_type:d.button_type,card_tray_index:d.card_tray_index,room_container_id:d.room_container_id,session_ids:(a=d.session_ids)!=null?a:{},source:d.source,surface:d.surface,video_call_link_id:d.video_call_link_id}})})},[a]),Q=i(function(b){n.onReady(function(c){var d=babelHelpers["extends"]({},a,b);c.log(function(){var a;return{card_tray_index:d.card_tray_index,num_room_participants:d.num_room_participants,session_ids:(a=d.session_ids)!=null?a:{},source:d.source,surface:d.surface,video_call_link_id:d.video_call_link_id}})})},[a]),R=i(function(b){z.onReady(function(c){var d=babelHelpers["extends"]({},a,b);c.log(function(){var a;return{card_tray_index:d.card_tray_index,num_room_participants:d.num_room_participants,session_ids:(a=d.session_ids)!=null?a:{},source:d.source,surface:d.surface,video_call_link_id:d.video_call_link_id}})})},[a]),S=i(function(b){var c=babelHelpers["extends"]({},a,b);F.onReady(function(a){a.log(function(){var a;return{button_type:c.button_type,card_tray_index:c.card_tray_index,session_ids:(a=c.session_ids)!=null?a:{},sheet_type:c.sheet_type,source:c.source,surface:c.surface,tray_ui_type:c.tray_ui_type}})})},[a]),T=i(function(b){t.onReady(function(c){var d=babelHelpers["extends"]({},a,b);c.log(function(){var a;return{card_tray_index:d.card_tray_index,session_ids:(a=d.session_ids)!=null?a:{},sheet_type:d.sheet_type,source:d.source,surface:d.surface,tray_ui_type:d.tray_ui_type}})})},[a]),U=i(function(b){var c=babelHelpers["extends"]({},a,b);F.onReady(function(a){a.log(function(){var a;return{button_type:c.button_type,card_tray_index:c.card_tray_index,num_room_participants:c.num_room_participants,session_ids:(a=c.session_ids)!=null?a:{},sheet_type:c.sheet_type,source:c.source,surface:c.surface,tray_ui_type:c.tray_ui_type,video_call_link_id:c.video_call_link_id}})})},[a]),V=i(function(b){var c=babelHelpers["extends"]({},a,b);G.onReady(function(a){a.log(function(){var a;return{card_tray_index:c.card_tray_index,num_room_participants:c.num_room_participants,session_ids:(a=c.session_ids)!=null?a:{},source:c.source,surface:c.surface,tray_ui_type:c.tray_ui_type,video_call_link_id:c.video_call_link_id}})})},[a]),W=i(function(b){H.onReady(function(c){var d=babelHelpers["extends"]({},a,b);c.log(function(){var a;return{card_tray_index:d.card_tray_index,num_room_participants:d.num_room_participants,room_type:d.room_type,session_ids:(a=d.session_ids)!=null?a:{},sheet_type:d.sheet_type,source:d.source,surface:d.surface,tray_ui_type:d.tray_ui_type,video_call_link_id:d.video_call_link_id}})})},[a]),X=i(function(b){B.onReady(function(c){var d=babelHelpers["extends"]({},a,b);c.log(function(){var a;return{card_tray_index:d.card_tray_index,num_room_participants:d.num_room_participants,room_container_id:d.room_container_id,session_ids:(a=d.session_ids)!=null?a:{},sheet_type:d.sheet_type,source:d.source,surface:d.surface,tray_ui_type:d.tray_ui_type,video_call_link_id:d.video_call_link_id}})})},[a]),Y=i(function(b){I.onReady(function(c){var d=babelHelpers["extends"]({},a,b);c.log(function(){var a;return{num_rooms:d.num_rooms,session_ids:(a=d.session_ids)!=null?a:{},source:d.source,surface:d.surface,tray_ui_type:d.tray_ui_type}})})},[a]),Z=i(function(b){C.onReady(function(c){var d=babelHelpers["extends"]({},a,b);c.log(function(){var a;return{button_type:d.button_type,card_tray_index:d.card_tray_index,session_ids:(a=d.session_ids)!=null?a:L,source:d.source,surface:d.surface,video_call_link_id:d.video_call_link_id}})})},[a]),$=i(function(b){var c=babelHelpers["extends"]({},a,b);v.onReady(function(a){a.log(function(){return{button_type:c.button_type,num_room_participants:c.num_room_participants,room_url:c.room_url,source:c.source,surface:c.surface,video_call_link_id:c.video_call_link_id}})})},[a]),aa=i(function(b){var c=babelHelpers["extends"]({},a,b);if(c.client_event!=null){var d=c.client_event;l.onReady(function(a){a.log(function(){var a;return{client_event:d,session_ids:(a=c.session_ids)!=null?a:L,sheet_type:c.sheet_type,source:c.source,surface:c.surface}})})}},[a]),ba=i(function(b){o.onReady(function(c){var d=babelHelpers["extends"]({},a,b);c.log(function(){var a;return{button_type:d.button_type,room_container_id:d.room_container_id,session_ids:(a=d.session_ids)!=null?a:{},sheet_type:d.sheet_type,source:d.source,surface:d.surface,video_call_link_id:d.video_call_link_id}})})},[a]),ca=i(function(b){q.onReady(function(c){var d=babelHelpers["extends"]({},a,b);c.log(function(){var a;return{button_type:d.button_type,room_type:d.room_type,session_ids:(a=d.session_ids)!=null?a:{},source:d.source,surface:d.surface}})})},[a]),da=i(function(b){u.onReady(function(c){var d=babelHelpers["extends"]({},a,b);c.log(function(){var a;return{session_ids:(a=d.session_ids)!=null?a:{},sheet_type:d.sheet_type,source:d.source,surface:d.surface}})})},[a]),ea=i(function(b){K.onReady(function(c){var d=babelHelpers["extends"]({},a,b);c.log(function(){var a;return{session_ids:(a=d.session_ids)!=null?a:{},sheet_type:d.sheet_type,source:d.source,surface:d.surface}})})},[a]),fa=function(a,b){var d=function(){b(a)};return c("useSinglePartialViewImpression")({onImpressionStart:d})};return{defaultData:a,logCommunityMessagingRoomsClientEvent:aa,logGroupsRHCImpression:f,logGroupsRoomsInviteParticipantsTap:$,logGroupsRoomsItemTap:h,logGroupsRoomsTabListImpression:g,logPromotionUnitImpression:b,logPromotionUnitTap:d,logRoomCardImpression:k,logRoomCardTap:Q,logRoomCreateFailure:ca,logRoomCreateSuccess:ba,logRoomCreateTap:M,logRoomCreationFlowStart:N,logRoomCreationFlowSuccess:O,logRoomEmptyCardButtonTap:S,logRoomEmptyCardSheetImpression:T,logRoomEndTap:da,logRoomInterestTap:R,logRoomJoinTap:e,logRoomLobbySheetImpression:X,logRoomMessageButtonTap:Z,logRoomSelfCardButtonTap:U,logRoomSelfCardTap:V,logRoomSheetImpression:W,logRoomsTrayImpression:Y,logRoomUpdateTap:P,logTapReportToFacebook:ea,useVideoChatImpressionLogging:fa}}function b(a,b){return function(d){var e=j(c("VideoChatLoggingDataContext")),f=b&&b(d),g=k(function(){return babelHelpers["extends"]({},e,f)},[e,f]);return h.jsx(c("VideoChatLoggingDataContext").Provider,{value:g,children:h.jsx(a,babelHelpers["extends"]({},d))})}}g.useVideoChatLogging=a;g.withVideoChatLoggingProvider=b}),98);
__d("XCometGroupJoinableVideoChatsControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/groups/{idorvanity}/rooms/",Object.freeze({}),void 0);b=a;g["default"]=b}),98);