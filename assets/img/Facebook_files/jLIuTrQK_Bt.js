;/*FB_PKG_DELIM*/

__d("ProfileCometLegacyAlbumViewRootQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="6354184508027600"}),null);
__d("ProfileCometLegacyAlbumViewRootQuery$Parameters",["IsMergQAPolls.relayprovider","IsWorkUser.relayprovider","ProfileCometLegacyAlbumViewRootQuery_facebookRelayOperation","StoriesArmadilloReplyEnabled.relayprovider","StoriesRing.relayprovider"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("ProfileCometLegacyAlbumViewRootQuery_facebookRelayOperation"),metadata:{},name:"ProfileCometLegacyAlbumViewRootQuery",operationKind:"query",text:null,providedVariables:{__relay_internal__pv__IsWorkUserrelayprovider:b("IsWorkUser.relayprovider"),__relay_internal__pv__IsMergQAPollsrelayprovider:b("IsMergQAPolls.relayprovider"),__relay_internal__pv__StoriesArmadilloReplyEnabledrelayprovider:b("StoriesArmadilloReplyEnabled.relayprovider"),__relay_internal__pv__StoriesRingrelayprovider:b("StoriesRing.relayprovider")}}};e.exports=a}),null);
__d("ProfileCometLegacyAlbumViewRouteRoot.entrypoint",["JSResourceForInteraction","ProfileCometLegacyAlbumViewRootQuery$Parameters","WebPixelRatio","buildCometProfileRoute.entrypoint"],(function(a,b,c,d,e,f,g){"use strict";a=c("buildCometProfileRoute.entrypoint")(c("JSResourceForInteraction")("ProfileCometLegacyAlbumViewRoot.react").__setRef("ProfileCometLegacyAlbumViewRouteRoot.entrypoint"),function(a){a=a.routeParams.set;return{queries:{rootQueryReference:{parameters:c("ProfileCometLegacyAlbumViewRootQuery$Parameters"),variables:{UFI2CommentsProvider_commentsKey:"ProfileCometLegacyAlbumViewRoute",feedbackSource:67,feedLocation:"ALBUM_FEED",mediaSetToken:a,privacySelectorRenderLocation:"COMET_STREAM",renderLocation:"album_feed",scale:d("WebPixelRatio").get()}}}}});g["default"]=a}),98);