;/*FB_PKG_DELIM*/

__d("LiveVideoCometAlertConditionalLoader_video.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"LiveVideoCometAlertConditionalLoader_video",selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"comet_video_cue_system_renderer",plural:!1,selections:[{kind:"InlineFragment",selections:[{args:null,documentName:"LiveVideoCometAlertConditionalLoader_video",fragmentName:"LiveVideoCometAlert_videoCueSystemRenderer",fragmentPropName:"videoCueSystemRenderer",kind:"ModuleImport"}],type:"CometLiveVideoCUESystemRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"LiveVideoCometAlertConditionalLoader_video",fragmentName:"LiveVideoCometAlertFeaturedProductContainerLiveQueryWrapper_videoCueSystemRenderer",fragmentPropName:"videoCueSystemRenderer",kind:"ModuleImport"}],type:"CometVideoLiveShoppingProductCUESystemRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"LiveVideoCometAlertConditionalLoader_video",fragmentName:"LiveVideoCometAlertPromoteLinkContainer_videoCueSystemRenderer",fragmentPropName:"videoCueSystemRenderer",kind:"ModuleImport"}],type:"CometVideoPromoteLinkCUESystemRenderer",abstractKey:null}],storageKey:null}],type:"Video",abstractKey:null};e.exports=a}),null);
__d("CometLiveShoppingPopoverCartDeferred_video.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometLiveShoppingPopoverCartDeferred_video",selections:[{alias:null,args:null,concreteType:"Video",kind:"LinkedField",name:"should_show_live_shopping_popover_cart",plural:!1,selections:[{args:null,documentName:"CometLiveShoppingPopoverCartDeferred_video",fragmentName:"CometLiveShoppingPopoverCart_video",fragmentPropName:"video",kind:"ModuleImport"}],storageKey:null}],type:"Video",abstractKey:null};e.exports=a}),null);
__d("CometVideoPlayerWithEntityPresenceRenderer_video.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometVideoPlayerWithEntityPresenceRenderer_video",selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"comet_video_player_with_entity_presence_renderer",plural:!1,selections:[{kind:"InlineFragment",selections:[{args:null,documentName:"CometVideoPlayerWithEntityPresenceRenderer_video",fragmentName:"CometVideoPlayerWithLiveVideoEntityPresenceRenderer_renderer",fragmentPropName:"renderer",kind:"ModuleImport"}],type:"CometVideoPlayerWithLiveVideoEntityPresenceRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometVideoPlayerWithEntityPresenceRenderer_video",fragmentName:"CometVideoPlayerWithHuddleEntityPresenceRenderer_renderer",fragmentPropName:"renderer",kind:"ModuleImport"}],type:"CometVideoPlayerWithHuddleEntityPresenceRenderer",abstractKey:null}],storageKey:null}],type:"Video",abstractKey:null};e.exports=a}),null);
__d("LiveVideoCometAlertConditionalLoader.react",["CometPlaceholder.react","CometRelay","LiveVideoCometAlertConditionalLoader_video.graphql","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react");function a(a){var e=a.video$key;a=a.videoID;e=d("CometRelay").useFragment(h!==void 0?h:h=b("LiveVideoCometAlertConditionalLoader_video.graphql"),e);return i.jsx(c("CometPlaceholder.react"),{fallback:null,children:i.jsx(d("CometRelay").MatchContainer,{match:e==null?void 0:e.comet_video_cue_system_renderer,props:{videoID:a}})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometLiveShoppingPopoverCartDeferred.react",["CometLiveShoppingPopoverCartDeferred_video.graphql","CometPlaceholder.react","CometRelay","gkx","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react"),j=h!==void 0?h:h=b("CometLiveShoppingPopoverCartDeferred_video.graphql");function a(a){a=d("CometRelay").useFragment(j,a.video);return a.should_show_live_shopping_popover_cart!=null&&c("gkx")("2531")===!0?i.jsx(c("CometPlaceholder.react"),{fallback:null,children:i.jsx(d("CometRelay").MatchContainer,{match:a.should_show_live_shopping_popover_cart})}):null}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometVideoPlayerWithEntityPresenceRenderer.react",["CometErrorBoundary.react","CometRelay","CometVideoPlayerWithEntityPresenceRenderer_video.graphql","emptyFunction","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react");function a(a){a=a.video$key;a=d("CometRelay").useFragment(h!==void 0?h:h=b("CometVideoPlayerWithEntityPresenceRenderer_video.graphql"),a);a=a.comet_video_player_with_entity_presence_renderer;return i.jsx(c("CometErrorBoundary.react"),{fallback:c("emptyFunction"),children:i.jsx(d("CometRelay").MatchContainer,{match:a})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("LiveVideoOverlayStickerFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("4077");b=d("FalcoLoggerInternal").create("live_video_overlay_sticker",a);e=b;g["default"]=e}),98);