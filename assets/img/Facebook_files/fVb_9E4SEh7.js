;/*FB_PKG_DELIM*/

__d("CometGamingVideoLiveViewerCountFetcherQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="4884164861637141"}),null);
__d("CometGamingVideoLiveViewerCountFetcherQuery.graphql",["CometGamingVideoLiveViewerCountFetcherQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{defaultValue:null,kind:"LocalArgument",name:"broadcastIds"}],c=[{kind:"Variable",name:"ids",variableName:"broadcastIds"}],d={alias:null,args:null,kind:"ScalarField",name:"broadcast_status",storageKey:null},e={alias:null,args:null,kind:"ScalarField",name:"live_viewer_count_read_only",storageKey:null},f={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null};return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"CometGamingVideoLiveViewerCountFetcherQuery",selections:[{alias:null,args:c,concreteType:"VideoBroadcastMultifetchEdge",kind:"LinkedField",name:"multifetch__VideoBroadcast",plural:!0,selections:[{alias:null,args:null,concreteType:"VideoBroadcast",kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,concreteType:"Video",kind:"LinkedField",name:"video",plural:!1,selections:[d,e],storageKey:null}],storageKey:null}],storageKey:null}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"CometGamingVideoLiveViewerCountFetcherQuery",selections:[{alias:null,args:c,concreteType:"VideoBroadcastMultifetchEdge",kind:"LinkedField",name:"multifetch__VideoBroadcast",plural:!0,selections:[{alias:null,args:null,concreteType:"VideoBroadcast",kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,concreteType:"Video",kind:"LinkedField",name:"video",plural:!1,selections:[d,e,f],storageKey:null},f],storageKey:null}],storageKey:null}]},params:{id:b("CometGamingVideoLiveViewerCountFetcherQuery_facebookRelayOperation"),metadata:{live:{config_id:"comet_gaming_live_viewer_count"}},name:"CometGamingVideoLiveViewerCountFetcherQuery",operationKind:"query",text:null}}}();e.exports=a}),null);
__d("CometGamingVideoLiveViewerCountFetcher.react",["CometGamingVideoLiveViewerCountFetcherQuery.graphql","CometRelay"],(function(a,b,c,d,e,f,g){"use strict";var h;function a(a){a=a.broadcastIds;d("CometRelay").useLazyLoadQuery(h!==void 0?h:h=b("CometGamingVideoLiveViewerCountFetcherQuery.graphql"),{broadcastIds:a},{fetchPolicy:"store-and-network"})}g["default"]=a}),98);
__d("EventCometGoingRootQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="6172178856199848"}),null);