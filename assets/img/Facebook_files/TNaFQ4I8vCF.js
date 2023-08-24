;/*FB_PKG_DELIM*/

__d("useSingleVPVDImpression",["react","useVPVDImpression","vpvdConstants"],(function(a,b,c,d,e,f,g){"use strict";b=d("react");var h=b.useCallback,i=b.useRef;function a(a){var b=a.isLite,e=a.minVisiblePx;e=e===void 0?d("vpvdConstants").DEFAULT_MIN_VISIBLE_PX:e;var f=a.minVisibleTimeMs;f=f===void 0?d("vpvdConstants").DEFAULT_MIN_VISIBLE_TIME_MS:f;var g=a.onVPVDEnd,j=a.onVPVDStart,k=i(!1),l=i(!1);a=h(function(a){if(l.current===!0)return;g&&g(a);l.current=!0},[g]);var m=h(function(a){if(k.current===!0)return;j&&j(a);k.current=!0},[j]);return c("useVPVDImpression")({isLite:b,minVisiblePx:e,minVisibleTimeMs:f,onVPVDEnd:a,onVPVDStart:m})}g["default"]=a}),98);
__d("PageCometLaunchpointLeftNavPlinksLoggerUtils",["react","requireDeferred","useSinglePartialViewImpression"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react").useCallback,i=c("requireDeferred")("PagesLaunchpointTabFalcoEvent").__setRef("PageCometLaunchpointLeftNavPlinksLoggerUtils");function a(a,b){var d=h(function(){i.onReady(function(c){return c.log(function(){return{event_name:"impression",is_page_admin:a,ref:"pages_comet_bookmark",tabs_name:b}})})},[a,b]);return c("useSinglePartialViewImpression")({onImpressionStart:d})}function b(a,b){i.onReady(function(c){return c.log(function(){return{event_name:"click",is_page_admin:a,ref:"pages_comet_bookmark",tabs_name:[b]}})})}g.usePageCometLaunchpointLeftNavPlinksImpressionLogger=a;g.logPageCometLaunchpointLeftNavPlinksClick=b}),98);
__d("ProfilePlusAdFluencyInsightEventsFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("4438");b=d("FalcoLoggerInternal").create("profile_plus_ad_fluency_insight_events",a);e=b;g["default"]=e}),98);
__d("ProfilePlusAdFluencyInsightLoggingUtils",["ProfilePlusAdFluencyInsightEventsFalcoEvent","react","useFullViewImpression","useSingleVPVDImpression"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react").useCallback;function i(a,b){var d=h(function(){c("ProfilePlusAdFluencyInsightEventsFalcoEvent").log(function(){return{event:"impression",extra_data:b,location:a}})},[b,a]);return c("useFullViewImpression")({onFullViewStart:d})}function j(a,b){var d=h(function(d){var e=d.visibleDuration;c("ProfilePlusAdFluencyInsightEventsFalcoEvent").log(function(){return{event:"vpvd",extra_data:b,location:a,vpvd:e.toString()}})},[b,a]);return c("useSingleVPVDImpression")({onVPVDEnd:d})}function k(a){return h(function(b){c("ProfilePlusAdFluencyInsightEventsFalcoEvent").log(function(){return{event:"primary_click",extra_data:b,location:a}})},[a])}function l(a){return h(function(b,d){c("ProfilePlusAdFluencyInsightEventsFalcoEvent").log(function(){return{event:b,extra_data:d,location:a}})},[a])}function a(a,b){return[i(a,b),k(a)]}function b(a,b){b=j(a,b);b=b[0];return[b,k(a)]}function e(a,b){return[i(a,b),l(a)]}function f(a,b){b=j(a,b);b=b[0];return[b,l(a)]}function m(a,b,d){c("ProfilePlusAdFluencyInsightEventsFalcoEvent").log(function(){return{event:b,extra_data:d,location:a}})}g.useAdFluencyInsightFullViewImpressionLogger=i;g.useAdFluencyInsightVPVDLogger=j;g.useAdFluencyInsightClickLogger=k;g.useAdFluencyInsightEventLogger=l;g.useAdFluencyInsightCTRLogger=a;g.useAdFluencyInsightVPVDCTRLogger=b;g.useAdFluencyImpressionAndEventLogger=e;g.useAdFluencyVPVDAndEventLogger=f;g.adFluencyInsightEventLogger=m}),98);