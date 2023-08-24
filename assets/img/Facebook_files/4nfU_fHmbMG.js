;/*FB_PKG_DELIM*/

__d("SearchCometResultsUserFollowCTA_renderingStrategy$normalization.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null};return{kind:"SplitOperation",metadata:{},name:"SearchCometResultsUserFollowCTA_renderingStrategy$normalization",selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"profile",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},{kind:"InlineFragment",selections:[a,{alias:null,args:null,kind:"ScalarField",name:"subscribe_status",storageKey:null},{alias:null,args:[{kind:"Literal",name:"site",value:"www"}],kind:"ScalarField",name:"url",storageKey:'url(site:"www")'}],type:"User",abstractKey:null},{kind:"InlineFragment",selections:[a],type:"Node",abstractKey:"__isNode"}],storageKey:null}]}}();e.exports=a}),null);
__d("SearchCometResultsUserFollowCTA_renderingStrategy.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"SearchCometResultsUserFollowCTA_renderingStrategy",selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"profile",plural:!1,selections:[{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"subscribe_status",storageKey:null},{alias:null,args:[{kind:"Literal",name:"site",value:"www"}],kind:"ScalarField",name:"url",storageKey:'url(site:"www")'}],type:"User",abstractKey:null}],storageKey:null}],type:"SearchCTATypeUserFollowRenderingStrategy",abstractKey:null};e.exports=a}),null);
__d("SearchCometUserFollowMutation_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="7117200261686887"}),null);
__d("SearchCometUserFollowMutation.graphql",["SearchCometUserFollowMutation_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{defaultValue:null,kind:"LocalArgument",name:"input"}],c=[{kind:"Variable",name:"data",variableName:"input"}],d={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},e={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},f={alias:null,args:null,kind:"ScalarField",name:"subscribe_status",storageKey:null};return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"SearchCometUserFollowMutation",selections:[{alias:null,args:c,concreteType:"ActorSubscribeResponsePayload",kind:"LinkedField",name:"actor_subscribe",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"subscribee",plural:!1,selections:[d,{kind:"InlineFragment",selections:[e,f],type:"User",abstractKey:null}],storageKey:null}],storageKey:null}],type:"Mutation",abstractKey:null},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"SearchCometUserFollowMutation",selections:[{alias:null,args:c,concreteType:"ActorSubscribeResponsePayload",kind:"LinkedField",name:"actor_subscribe",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"subscribee",plural:!1,selections:[d,e,{kind:"InlineFragment",selections:[f],type:"User",abstractKey:null}],storageKey:null}],storageKey:null}]},params:{id:b("SearchCometUserFollowMutation_facebookRelayOperation"),metadata:{},name:"SearchCometUserFollowMutation",operationKind:"mutation",text:null}}}();e.exports=a}),null);
__d("SearchCometUserFollowMutation",["CometRelay","SearchCometUserFollowMutation.graphql"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h!==void 0?h:h=b("SearchCometUserFollowMutation.graphql");function a(a,b){var c=b.onError,e=b.onSuccess,f=b.subscribeLocation;b=b.userID;d("CometRelay").commitMutation(a,{mutation:i,onCompleted:e,onError:c,optimisticResponse:{actor_subscribe:{subscribee:{__typename:"User",id:b,subscribe_status:"IS_SUBSCRIBED"}}},variables:{input:{subscribe_location:f,subscribee_id:b}}})}g.commit=a}),98);
__d("SearchCometResultsUserFollowCTA.react",["fbt","ix","CometRelay","FBLogger","SearchCometResultsCTAButton.react","SearchCometResultsUserFollowCTA_renderingStrategy.graphql","SearchCometUserFollowMutation","fbicon","gkx","react","useSearchCometResultsLogger","useSearchCometResultsMaybeShowChainingSuggestions"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j,k=d("react"),l=d("react").useCallback;function a(a){var e,f;a=a.renderingStrategy;var g=d("CometRelay").useRelayEnvironment();a=d("CometRelay").useFragment(j!==void 0?j:j=b("SearchCometResultsUserFollowCTA_renderingStrategy.graphql"),a);e=a==null?void 0:(e=a.profile)==null?void 0:e.subscribe_status;var m=a==null?void 0:(f=a.profile)==null?void 0:f.id;f=c("useSearchCometResultsLogger")();var n=f.logInlineAction;f=f.logResultClick;var o=c("useSearchCometResultsMaybeShowChainingSuggestions")(),p=l(function(){m!=null&&(c("gkx")("1549")||d("SearchCometUserFollowMutation").commit(g,{subscribeLocation:"SEARCH",userID:m}),o(),n("inline_user_follow_request"))},[g,n,o,m]),q,r,s,t,u,v=!0,w;switch(e){case"CAN_SUBSCRIBE":q=d("fbicon")._(i("618353"),20);w=d("fbicon")._(i("618352"),16);r="highlight";s=p;t=h._("__JHASH__cFa7IQU96ge__JHASH__");e="cta-user-can-follow";break;case"CANNOT_SUBSCRIBE":q=null;r=null;s=null;t=null;v=!1;e=void 0;break;case"IS_SUBSCRIBED":q=d("fbicon")._(i("602177"),20);w=d("fbicon")._(i("602176"),16);r="normal";s=f;u={url:a==null?void 0:(p=a.profile)==null?void 0:p.url};t=h._("__JHASH___BaWKxLIyom__JHASH__");e="cta-user-is-following";break}var x;v&&t!=null&&w!=null&&(x={textButton:{icon:w,label:t}});if(q==null||t==null||s==null)throw c("FBLogger")("search").mustfixThrow("Missing icon, label or onPress for user follow CTA");return k.jsx(c("SearchCometResultsCTAButton.react"),babelHelpers["extends"]({icon:q,label:t,linkProps:u,onPress:s,testid:void 0,type:r},x))}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometMarketplaceYouSubmittedOffersContentContainerQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="5124749820904188"}),null);