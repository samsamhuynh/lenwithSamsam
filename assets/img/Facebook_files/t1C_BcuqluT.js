;/*FB_PKG_DELIM*/

__d("CometInstantGamesPlayerRootQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="6340139596035784"}),null);
__d("CometInstantGamesPlayerRootQuery$Parameters",["CometInstantGamesPlayerRootQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("CometInstantGamesPlayerRootQuery_facebookRelayOperation"),metadata:{},name:"CometInstantGamesPlayerRootQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometIGPlayerRHCHighlightInGameEvent.relayprovider",["qex"],(function(a,b,c,d,e,f,g){"use strict";a={get:function(){return c("qex")._("260")===!0}};g["default"]=a}),98);
__d("CometInstantGamesPlayerRHCQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="6664642636921542"}),null);
__d("CometInstantGamesPlayerRHCQuery$Parameters",["CometIGPlayerRHCHighlightInGameEvent.relayprovider","CometInstantGamesPlayerRHCQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("CometInstantGamesPlayerRHCQuery_facebookRelayOperation"),metadata:{},name:"CometInstantGamesPlayerRHCQuery",operationKind:"query",text:null,providedVariables:{__relay_internal__pv__CometIGPlayerRHCHighlightInGameEventrelayprovider:b("CometIGPlayerRHCHighlightInGameEvent.relayprovider")}}};e.exports=a}),null);
__d("InstantApplicationContextTokenInputCreator.entrypointutils",[],(function(a,b,c,d,e,f){"use strict";function a(a,b,c){var d=null;switch(c){case"THREAD":d={thread_id:b};break;case"STORY":d={story_token:b};break;case"GROUP":d={group_id:b};break;case"LINK":d={link_fragment:b};break;default:d=Object.freeze({});break}return{app_id:a,context_source_id:b,key:d}}f.getTokenInput=a}),66);
__d("CometInstantGamesPlayerRHC.entrypoint",["CometInstantGamesPlayerRHCQuery$Parameters","JSResourceForInteraction","WebPixelRatio"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){return{queries:{queryReference:{parameters:b("CometInstantGamesPlayerRHCQuery$Parameters"),variables:{app_id:a.appID,has_community:a.hasCommunity,has_rhc:a.hasRHC,is_canvas_on_comet:a.isConC,scale:d("WebPixelRatio").get()}}}}},root:c("JSResourceForInteraction")("CometInstantGamesPlayerRHC.react").__setRef("CometInstantGamesPlayerRHC.entrypoint")};g["default"]=a}),98);
__d("InstantGameEnvironmentType.facebook",["$InternalEnum"],(function(a,b,c,d,e,f){a=b("$InternalEnum").Mirrored(["CANVAS_ON_COMET","COPLAY","FBIOS_IAB","LIVE_PRODUCER_PLUGIN","MESSENGER_DISCOVERY","REELS_PLUGIN","STANDARD","VIDEO_PLUGIN"]);c=a;f["default"]=c}),66);
__d("InstantGamesPlayer.entrypointutils",[],(function(a,b,c,d,e,f){"use strict";var g=["276641894055477","5377936592235218"];function a(a){return!g.includes(String(a))}function b(a,b){return b&&a!=="canvas_on_comet"}f.HORIZON_2D_APP_IDS=g;f.getHasRHC=a;f.getHasCommunity=b}),66);
__d("CometInstantGamesPlayerRoot.entrypoint",["CometInstantGamesPlayerRHC.entrypoint","CometInstantGamesPlayerRootQuery$Parameters","InstantApplicationContextTokenInputCreator.entrypointutils","InstantGameEnvironmentTypeUtils.facebook","InstantGamesPlayer.entrypointutils","JSResourceForInteraction","NestedRelayEntryPointBuilderUtils","qex"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){var e,f;e=(e=d("InstantGameEnvironmentTypeUtils.facebook").fromJSEnum(a.routeProps.environmentType))!=null?e:"STANDARD";var g=d("InstantGamesPlayer.entrypointutils").getHasRHC(a.routeProps.appID),h=e==="CANVAS_ON_COMET";f=d("InstantApplicationContextTokenInputCreator.entrypointutils").getTokenInput(a.routeProps.appID,a.routeParams.context_source_id,(f=a.routeParams.context_type)!=null?f:"GENERIC");var i=a.routeProps.isTournament&&c("qex")._("1291")===!0,j=a.routeProps.isCometOnMobile;return{entryPoints:{cometInstantGamesPlayerRHCEntryPoint:d("NestedRelayEntryPointBuilderUtils").NestedRelayEntryPoint({entryPoint:c("CometInstantGamesPlayerRHC.entrypoint"),entryPointParams:{appID:a.routeProps.appID,hasCommunity:d("InstantGamesPlayer.entrypointutils").getHasCommunity(a.routeProps.environmentType,g),hasRHC:g,isConC:g&&h}})},extraProps:{hasRHC:g,hasTournamentID:i},queries:{instantGamesPlayerRootQuery:{options:{},parameters:b("CometInstantGamesPlayerRootQuery$Parameters"),variables:{app_id:a.routeProps.appID,automated_input_config_name:a.routeParams.automated_input_config_name,cgreferral:a.routeParams.cgreferral,cloud_binary_id:a.routeParams.cloud_binary_id,cloud_host_override_cluster:a.routeParams.cloud_host_override_cluster,cloud_host_override_host:a.routeParams.cloud_host_override_host,cloud_host_override_hostname:a.routeParams.cloud_host_override_hostname,cloud_host_override_pop:a.routeParams.cloud_host_override_pop,cloud_host_override_port:a.routeParams.cloud_host_override_port,cloud_host_override_site_key:a.routeParams.cloud_host_override_site_key,context_key:f.key,context_source_id:a.routeParams.context_source_id,environment_type:e,has_tournament_id:i,is_canvas_on_comet:h,is_comet_on_mobile:j,ota_update:a.routeParams.ota_update,payload:a.routeParams.payload,session_id:(g=a.routeParams.session_id)!=null?g:(f=a.timeSpentMetaData)==null?void 0:(e=f.session_ids)==null?void 0:e.cg_session_id,show_top_bar:!a.routeProps.hideTopBar,skip_desktop_fragment:j,skip_mobile_fragment:!j,source:a.routeProps.source,tournament_id:i?a.routeParams.context_source_id:null}}}}},root:c("JSResourceForInteraction")("CometInstantGamesPlayerRoot.react").__setRef("CometInstantGamesPlayerRoot.entrypoint")};g["default"]=a}),98);