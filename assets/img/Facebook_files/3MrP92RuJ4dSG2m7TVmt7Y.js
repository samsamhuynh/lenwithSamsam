;/*FB_PKG_DELIM*/

__d("ProfileTabConst",[],(function(a,b,c,d,e,f){e.exports={AD_CENTER:"ad_center",ALL_ACTIVITY:"allactivity",APPROVAL:"approve",CHANNELS:"channels",COMMUNITY:"community",COMMUNITY_PERMALINK:"community_permalink",EXCLUSIVE_CONTENT:"exclusive_content",HASHTAGS:"hashtags",HOME:"home",INSIGHTS:"new_insights",LIVE_VIDEOS:"live_videos",MEMBERS_BADGES:"members_badges",MENTIONS:"mentions",MUSIC_CHARTS:"top_songs",PROFESSIONAL_DASHBOARD:"professional_dashboard",REVIEWS:"reviews",TIMELINE:"timeline",TIMELINE_OVERVIEW:"grid",TRIBUTES:"tributes",WALL:"wall",ADMINS:"admins",ALBUM:"album",ALBUMS:"albums",APPS:"apps",ARTICLES:"articles",BASIC_INFO:"basic_info",BLOOD_DONOR_INFO:"blood_donor_info",BOXES:"box_3",CATEGORY:"category",CHATS:"chats",COLLECTIBLES:"digital_collectibles_all",COMMERCE:"shop",CONTACT_INFO:"contact_info",DEALS:"deals",DRAFT_NOTES:"notes_drafts",EDUCATION:"education",EVENTS:"events",FAMILY:"family",FANS:"friends_likes",FAVORITES:"favorites",FUNDRAISERS:"fundraisers",FOLLOWERS:"followers",FOLLOWING:"following",FRIENDS:"friends",FRIENDS_MUTUAL:"friends_mutual",FUN_FACTS:"did_you_know",GROUPS:"groups",GROUPS_MUTUAL:"groups_mutual",GROUPS_ADMINED:"groups_admined",GUIDES:"guides",INFO:"info",INTERESTED_IN:"interested_in",LIFE_EVENTS:"life_events",LIKES:"likes",LINEAR_CHANNELS:"linear_channels",LOCATIONS:"locations",MAP:"map",MEMBERS:"members",MEMORIAL_CONTACT:"legacy_contact",MY_NOTES:"notes_my_notes",NAME_PRONUNCIATION:"name_pronunciation",NEARBY:"nearby",NICKNAMES:"nicknames",NOTES:"notes",OVERVIEW:"about",PAST_EVENTS:"pe",PAST_HOSTED_EVENTS:"phe",PERSONALITY_QUESTIONS:"personality_questions",PHOTOS:"photos",PHOTOS_ALBUM:"media_set",PHOTOS_ALBUMS:"photos_albums",PHOTOS_BY:"photos_by",PHOTOS_BY_OTHERS:"photos_by_others",PHOTOS_STREAM:"photos_stream",PHOTOS_SYNCED:"photos_synced",POLITICAL_VIEWS:"political_views",POSTS:"posts",POSTS_OTHERS:"posts_to_page",PUBLIC_CHATS:"public_chats",RECURRING_NOTIFICATIONS:"recurring_notifications",RELATIONSHIP:"relationship",RELIGIOUS_VIEWS:"religious_views",RESUME:"resume",PLACES_LIVED:"places_lived",REVIEWS_GIVEN:"reviews_given",SAVE_LISTS:"lists",SAVED_FOR_LATER:"saved",SHOP_TAB:"shop_tab",SPACES:"post_sets",STORIES_ARCHIVE:"archive",SPORTS:"sports",SUBSCRIBER_HUB:"subscriber_hub",SUPPORTERS:"supporters",TAGGED_NOTES:"notes_tagged",TASKS:"tasks",TRANSPARENCY:"transparency",UPCOMING_HOSTED_EVENTS:"uhe",VIDEOS:"videos",REELS_TAB:"reels_tab",VOLUNTEERING:"volunteering",WALL_ADMIN:"wall_admin",WIKIPEDIA:"wiki",WORK:"work",PAGE_GETTING_STARTED:"page_getting_started",PAGE_MAP:"page_map",PAGE_MENU:"menu",PAGE_FOOD_DRINK_MENU:"food_drink_menu",PAGE_PRODUCTS:"products",PAGE_SERVICES:"services",PAGES_CONTENT_TAB:"content_tab",PAGE_FAN_QUESTIONS:"questions",PAGES_REACTION_SANDBOX:"reaction_sandbox",PAGE_OFFERS:"offers",PAGE_JOB_PERMALINK:"page_job_permalink",PAGE_JOBS:"jobs",PAGE_LIVE_VIDEOS:"page_live_videos",PAGE_EPISODES:"episodes",PAGE_SHOP_NT:"shop_nt",PAGE_SHOW:"show",PAGE_PLAYLISTS:"playlists",PAGE_SHOW_VIDEOS:"show_videos",PAGE_COLLECTIONS:"collections",PAGE_SERIES:"series",PAGE_CHANNEL:"channel",PAGE_VEHICLES:"vehicles",PAGE_REELS:"reels",CAST_AND_CREW:"cast_and_crew",COMMUNITY_ADMINS:"community_admins",COMMUNITY_MEMBERS:"community_members",COMMUNITY_RULES:"community_rules",FEATURING:"featuring",FREQUENTLY_ASKED_QUESTIONS:"frequently_asked_questions",INSTAGRAM:"instagram",LOYALTY:"loyalty",MOVIE_PROVIDER:"movie_provider",PODCASTS:"podcasts",PROFILE_OVERLAYS:"profile_overlays",STORY:"story",CUSTOM:"custom",OG_APP_URL_PREFIX:"app_",OG_APPID_PREFIX:"og_app_",OG_NAMESPACE_PREFIX:"og_ns_",OG_BOOKS:"books",OG_GAMES:"games",OG_MOVIES:"movies",OG_MUSIC:"music",OG_NEWS:"news",OG_TV_SHOWS:"tv",OG_VIDEO:"video",OG_APP_INSTAGRAM:"app_instapp",OG_APP_POKEDEX:"app_fbpokedex",API:"API",BIRTHDAY:"Birthday",POST:"Post",GENERIC:"Generic",PAGE_DONATE:"Page",EVENT:"Event"}}),null);
__d("CometButtonCommandStopper.react",["CometComponentWithKeyCommands.react","CometKeys","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){var b=[{command:{key:c("CometKeys").SPACE},description:a.label,handler:function(){}},{command:{key:c("CometKeys").ENTER},description:a.label,handler:function(){}}];return h.jsx(c("CometComponentWithKeyCommands.react"),{commandConfigs:b,debugName:"Button",children:a.children})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("ProfileCometFeaturedHighlightsStrings",["fbt"],(function(a,b,c,d,e,f,g,h){"use strict";a=h._("__JHASH__2cTu434w08f__JHASH__");b=h._("__JHASH__YLQlwwviMqi__JHASH__");c=h._("__JHASH__8HZoF15p6-M__JHASH__");d=h._("__JHASH__S2YWTMmrKk0__JHASH__");e=h._("__JHASH__GouG29wItu2__JHASH__");f=h._("__JHASH__y3XDBnM3--Y__JHASH__");h=h._("__JHASH__3hDHuORYWn7__JHASH__");g.ADD_MORE=a;g.EDIT_FEATURED=b;g.EDIT_FEATURED_COLLECTION=c;g.FEATURED=d;g.FEATURED_SECTION=e;g.REPORT_ITEM=f;g.ZERO_VIEWER_COUNT_TEXT=h}),98);
__d("StoriesQueryArgumentsContext",["react"],(function(a,b,c,d,e,f,g){"use strict";a=d("react");b={hideSelfBucket:!1,initialBucketID:null,initialBucketsCount:9,pageBucketsCount:9};c=a.createContext(b);g["default"]=c}),98);
__d("useStoriesBucketsConnectionArguments",["StoriesQueryArgumentsContext","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react").useContext;function a(){var a=h(c("StoriesQueryArgumentsContext")),b=a.hideSelfBucket;a=a.initialBucketID;a={front_pin_buckets:[a],hide_self_bucket:b};b="useStoriesViewerBuckets_unified_stories_buckets";return{connectionArguments:a,connectionName:b}}g["default"]=a}),98);
__d("StoriesTestUtils",["Banzai","BanzaiConsts"],(function(a,b,c,d,e,f,g){"use strict";a=function(){function a(){this.$1=!1,this.$2=[]}var b=a.prototype;b.initializeBanzaiLogging=function(){var a=this;if(this.$1)return;this.$1=!0;this.$2=[];c("Banzai").subscribe(c("BanzaiConsts").SEND,function(){var b=c("Banzai")._testState();b=b.postBuffer;a.$3(b)});c("Banzai").flush&&c("Banzai").flush()};b.$3=function(a){var b=this;a=a.filter(function(a){var c=a[0];return c==="require_cond_exposure_logging"||c==="gk2_exposure"||!(c.startsWith("logger:DirectMessagingLoggerConfig")||c.includes("falco")||c.startsWith("xtrackable:"))?!1:b.$2.find(function(b){return b[0]===a[0]&&b[2]===a[2]})===void 0});this.$2=this.$2.concat(a)};b.getLogs=function(){return this.$2};b.getMockedCardID=function(a,b,c){return(a*1e3+b*100+c).toString()};b.getNavListName=function(a){return"friend"+a};return a}();b=new a();g["default"]=b}),98);
__d("StoriesFeedbackCommentStateContext",["react"],(function(a,b,c,d,e,f,g){"use strict";a=d("react");b={commentTriggerSource:"",isCommentingOnForStory:!1,isCommentsRightRailOpen:!1,isStoryCommentingEnabled:!1,setCommentTriggerSource:function(a){},setIsCommentingOnForStory:function(a){},setIsCommentsRightRailOpen:function(a){},setShowCommentsSheetOverlay:function(a){},showCommentsSheetOverlay:!1};c=a.createContext(b);g["default"]=c}),98);
__d("StoriesLoggerContext",["react"],(function(a,b,c,d,e,f,g){"use strict";a=d("react");b=a.createContext({logger:{clickInteractiveFeedbackReplyButtonLog:function(a){return void 0},closeStoryLog:function(){return void 0},commentAddAttemptedLog:function(a,b){return void 0},commentButtonImpressionLog:function(){return void 0},commentCardImpressionLog:function(a,b){return void 0},deleteLog:function(){return void 0},getImpressionConfig:function(){return void 0},getImpressionData:function(a){return void 0},getTimespentConfig:function(){return void 0},getTrackingString:function(){return void 0},handleLiveVideoLog:function(a){return void 0},openLinkLog:function(){return void 0},openMediaLog:function(a){return void 0},openStoryLog:function(){return void 0},openViewerSheetLog:function(){return void 0},pauseByKeyboardLog:function(a,b){return void 0},pauseLog:function(a){return void 0},replyAttemptCompletedLog:function(a,b){return void 0},replyLog:function(a){return void 0},replySentWhenSmartReplyShownLog:function(a,b,c,d){return void 0},sifAutoplayLwrLog:function(a){return void 0},sifAutoplayTextReplyLog:function(a){return void 0},smartReplyImpressionLog:function(a,b,c){return void 0},smartReplyTapLog:function(a,b){return void 0},storyMediaViewLog:function(a){return void 0},storyNavigationLog:function(a){return void 0},visitPageLog:function(){return void 0}}});g["default"]=b}),98);
__d("StoriesLoggerSession",["cr:3712","uuidv4"],(function(a,b,c,d,e,f,g){"use strict";var h=null,i=null,j=null,k=null,l=function(){k=null},m=function(a){h=a},n=function(a){i=a==null?c("uuidv4")():a},o=function(a){j=a==null?c("uuidv4")():a};function a(){return k}function d(){return h}function e(){return i}function f(){return j}function p(a,c,d){b("cr:3712")==null?void 0:b("cr:3712").initializeBanzaiLogging(),n(a),o(c),m(d),l()}var q=function(a){k=a};g._initializeCloseGesture=l;g._initializeOpenViewerSource=m;g._initializeTraySessionID=n;g._initializeViewerSessionID=o;g.getCloseGesture=a;g.getOpenViewerSource=d;g.getTraySessionID=e;g.getViewerSessionID=f;g.initialize=p;g.setCloseGesture=q}),98);
__d("StoriesTrayLoggerSessionContext",["react"],(function(a,b,c,d,e,f,g){"use strict";a=d("react");b={trackingStrings:new Map()};c=a.createContext(b);e=c;g["default"]=e}),98);
__d("StoriesTrayLoggerSessionProvider",["StoriesTrayLoggerSessionContext","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i=d("react").useMemo;function a(a){var b=a.children,d=a.trackingStrings;a=i(function(){return{trackingStrings:d}},[d]);return h.jsx(c("StoriesTrayLoggerSessionContext").Provider,{value:a,children:b})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("StoriesViewerMenuButton.react",["CometButtonCommandStopper.react","CometPressable.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a,b){var d=function(b){var c=b.type==="press";c||b.preventDefault();var d=a.onClick;d!=null&&(!c&&b.type!=="keydown"&&b.stopPropagation(),d())},e=a.icon,f=a.label,g=a.testid;return h.jsx(c("CometButtonCommandStopper.react"),{label:f,children:h.jsx(c("CometPressable.react"),{display:"inline",label:f,onPress:d,overlayDisabled:!0,ref:b,children:h.jsx("div",{className:"x1ypdohk xdj266r xw3qccf xat24cr xsgj6o6","data-testid":void 0,children:e})})})}a.displayName=a.name+" [from "+f.id+"]";b=h.forwardRef(a);g["default"]=b}),98);
__d("StoriesPauseReasons",[],(function(a,b,c,d,e,f){"use strict";a="ANONYMOUS_VIEWS_INDICATOR";b="ANONYMOUS_VIEWS_POST_TEST_POPUP";c="BUCKET_TRANSITION";d="BUCKET_REFRESH";e="BUG_DIALOG";var g="CARD_CHANGE",h="CARD_TRANSITION_INITIATED",i="CLICK_ADD_STORY",j="CLICK_ARCHIVE_RESHARE_BUTTON",k="CLICK_EMOJI_SELECTOR",l="CLICK_GIF_SELECTOR",m="CLICK_ON_OVERLAY_STICKER",n="CLICK_PAUSE_ICON",o="CLICK_SEE_MORE_LONG_TEXT",p="CLICK_STICKER_SELECTOR",q="COMMENTS_SHEET_OVERLAY",r="CONFIRMATION_DIALOG",s="EXTENDED_VIEWER",t="FOCUSE_ON_INPUT",u="HOVER_ON_ARCHIVE_RESHARE_BUTTON",v="HOVER_ON_OVERLAY_STICKER",w="HOVER_ON_PAUSE_OVERLAY",x="HOVER_ON_RATING_STICKER",y="HOVER_ON_REACTION_ICON",z="HOVER_ON_SHARE_BUTTON",A="HOVER_ON_SONG_STICKER",B="JEWEL",C="KEYBOARD",D="LWR_PLAYBACK",E="MENU",F="MESSAGE_VIEWER",G="MOUSE_CLICK_AND_HOLD",H="MOUSE_ENTER_POLL_STICKER",I="REPORT_DIALOG",J="SETTINGS_DIALOG",K="SCME_DIALOG",L="TILE_GRID_BUTTON",M="VIDEO_PLAYBACK",N="VIEWER_SHEET_OVERLAY",O="VISIBILITY_CHANGE",P="WATCH_BROADCAST_CTA",Q="HOVER_ON_COMMENT_SHEET",R="AUDIENCE_DIALOG",S="ATTRIBUTION_DIALOG",T="NUX_DISPLAY",U="WATCH_AGAIN_OVERLAY";f.ANONYMOUS_VIEWS_INDICATOR=a;f.ANONYMOUS_VIEWS_POST_TEST_POPUP=b;f.BUCKET_TRANSITION=c;f.BUCKET_REFRESH=d;f.BUG_DIALOG=e;f.CARD_CHANGE=g;f.CARD_TRANSITION_INITIATED=h;f.CLICK_ADD_STORY=i;f.CLICK_ARCHIVE_RESHARE_BUTTON=j;f.CLICK_EMOJI_SELECTOR=k;f.CLICK_GIF_SELECTOR=l;f.CLICK_ON_OVERLAY_STICKER=m;f.CLICK_PAUSE_ICON=n;f.CLICK_SEE_MORE_LONG_TEXT=o;f.CLICK_STICKER_SELECTOR=p;f.COMMENTS_SHEET_OVERLAY=q;f.CONFIRMATION_DIALOG=r;f.EXTENDED_VIEWER=s;f.FOCUSE_ON_INPUT=t;f.HOVER_ON_ARCHIVE_RESHARE_BUTTON=u;f.HOVER_ON_OVERLAY_STICKER=v;f.HOVER_ON_PAUSE_OVERLAY=w;f.HOVER_ON_RATING_STICKER=x;f.HOVER_ON_REACTION_ICON=y;f.HOVER_ON_SHARE_BUTTON=z;f.HOVER_ON_SONG_STICKER=A;f.JEWEL=B;f.KEYBOARD=C;f.LWR_PLAYBACK=D;f.MENU=E;f.MESSAGE_VIEWER=F;f.MOUSE_CLICK_AND_HOLD=G;f.MOUSE_ENTER_POLL_STICKER=H;f.REPORT_DIALOG=I;f.SETTINGS_DIALOG=J;f.SCME_DIALOG=K;f.TILE_GRID_BUTTON=L;f.VIDEO_PLAYBACK=M;f.VIEWER_SHEET_OVERLAY=N;f.VISIBILITY_CHANGE=O;f.WATCH_BROADCAST_CTA=P;f.HOVER_ON_COMMENT_SHEET=Q;f.AUDIENCE_DIALOG=R;f.ATTRIBUTION_DIALOG=S;f.NUX_DISPLAY=T;f.WATCH_AGAIN_OVERLAY=U}),66);
__d("StoriesUtils",["ExecutionEnvironment","UserAgent"],(function(a,b,c,d,e,f,g){"use strict";var h={};b=function(a){h[a]==null&&(h[a]=window.atob(a).split(":")[2]);return h[a]};function a(){var a={format:"image/jpeg",quality:.92};return!c("UserAgent").isBrowser("Chrome")?a:{format:"image/webp",quality:.86}}var i=500;d=function(a,b){b===void 0&&(b=i);return!c("ExecutionEnvironment").canUseDOM?!1:a<b};g.cardID2ThreadID=b;g.getBlobImageParams=a;g.shouldResizeToViewStories=d}),98);
__d("StoriesSuspenseContuxActionsContext",["FBLogger","react"],(function(a,b,c,d,e,f,g){"use strict";a=d("react");b={cardIndexChanged:function(a){return c("FBLogger")("fbstories").warn("setCardIndex is using default, should override")},handleCardDeletion:function(){return c("FBLogger")("fbstories").warn("handleCardDeletion is using default, should override")},performBucketNavigation:function(a,b,d){return c("FBLogger")("fbstories").warn("performBucketNavigation is using default, should override")},performCardNavigation:function(a){return c("FBLogger")("fbstories").warn("performCardNavigation is using default, should override")}};e=a.createContext(b);g["default"]=e}),98);
__d("StoriesSuspensePauseContext",["react"],(function(a,b,c,d,e,f,g){"use strict";a=d("react");b={isPaused:!1,setPause:function(a,b){}};c=a.createContext(b);g["default"]=c}),98);
__d("storiesViewerSuspenseEmitter",["BaseEventEmitter"],(function(a,b,c,d,e,f,g){"use strict";var h=new(c("BaseEventEmitter"))();a={bucketLoaded:function(){h.emit("bucketLoaded")},listenToBucketLoaded:function(a){var b=h.addListener("bucketLoaded",a);return function(){return b.remove()}},listenToNavListItemTransition:function(a){var b=h.addListener("navListTransition",a);return function(){return b.remove()}},listenToPauseRequest:function(a){var b=h.addListener("requestPause",a);return function(){return b.remove()}},listenToReshareRequest:function(a){var b=h.addListener("reshareRequest",a);return function(){return b.remove()}},listenToTransitionRequest:function(a){var b=h.addListener("transitionRequest",a);return function(){return b.remove()}},navListItemTransition:function(){h.emit("navListTransition")},requestBucketTransition:function(a,b){b===void 0&&(b=1),h.emit("transitionRequest",a,b)},requestPause:function(a,b){h.emit("requestPause",a,b)},requestReshare:function(a){h.emit("reshareRequest",a)}};b=a;g["default"]=b}),98);/*FB_PKG_DELIM*/
__d("StoriesCreateContext",["react"],(function(a,b,c,d,e,f,g){"use strict";a=d("react");b=!1;c=a.createContext(b);g["default"]=c}),98);
__d("StoriesCreateConstants",["fbt"],(function(a,b,c,d,e,f,g,h){"use strict";a={DEFAULT:{BODY:h._("__JHASH__2dP-S2NXGWo__JHASH__"),CANCEL:h._("__JHASH__iNbID4Of76-__JHASH__"),CONFIRM:h._("__JHASH__2bGTq0Hn_zL__JHASH__"),TITLE:h._("__JHASH__fy6v2Hc0_3x__JHASH__")}};b={SELECTION_TILE_HEIGHT:330,SELECTION_TILE_WIDTH:220,SPACE_BETWEEN_SELECTOR:20};c={FOOTER_HEIGHT:52,HEADER_HEIGHT:16};d={COMET_PUSH_VIEW_HEIGHT:28,CONTAINER_HORIZONTAL_PADDING:24*2,CONTAINER_MAX_WIDTH:940,CONTAINER_VERTICAL_PADDING:32*2,CONTENT_HEADER_HEIGHT:36,CONTENT_HORIZONTAL_PADDING:16*2,CONTENT_VERTICAL_PADDING:16*2,MAX_OVERLAY_WIDTH:472.5,SIDE_PANE_WIDTH:360};e=h._("__JHASH__b-5wJWOv0zU__JHASH__");f={FOOTER_HEIGHT:12,HEADER_HEIGHT:12};h={EDITING:"editing",NONE:"none"};var i={EMOJI:"emoji",LOCATION:"location",POLL:"poll",TAG:"tag"},j={EDITING:"editing",NONE:"none"},k={HORIZONTAL:"horizontal",NONE:"none"},l=26,m=3,n=4,o={FOOTER_HEIGHT:92},p=Object.freeze({BLACK:"rgb(0, 0, 0)",BLUE:"rgb(41, 134, 174)",BROWN:"rgb(112, 41, 41)",CORAL:"rgb(247, 114, 74)",CYAN:"rgb(94, 213, 255)",GOLD:"rgb(241, 196, 58)",GRAY:"rgb(142, 147, 156)",GREEN:"rgb(136, 191, 75)",LIGHT_BLUE:"rgb(202, 237, 248)",LIGHT_GRAY:"rgb(206, 208, 212)",LIGHT_PURPLE:"rgb(220, 211, 239)",MAGENTA:"rgb(251, 62, 160)",MINT:"rgb(185, 252, 203)",NAVY:"rgb(43, 69, 124)",ORANGE:"rgb(244, 146, 58)",PINK:"rgb(249, 203, 209)",PURPLE:"rgb(148, 31, 177)",RED:"rgb(248, 61, 61)",VIOLET:"rgb(88, 59, 154)",WHITE:"rgb(255, 255, 255)",YELLOW:"rgb(248, 226, 76)"}),q={x:.5,y:.5};g.LEAVE_TEXT=a;g.NULL_STATE_DIMENSIONS=b;g.PHOTO_PREVIEW_DIMENSIONS=c;g.PREVIEW_DIMENSIONS=d;g.SATP_PLACEHOLDER=e;g.SATP_PREVIEW_DIMENSIONS=f;g.STICKER_EDITING_MODE=h;g.STICKER_TYPE=i;g.TEXT_OVERLAY_MODE=j;g.OVERLAY_ALIGNMENT_TYPE=k;g.VIDEO_MAX_DURATION=l;g.VIDEO_MIN_DURATION=m;g.VIDEO_MIN_DURATION_FOR_TRIM=n;g.VIDEO_PREVIEW_DIMENSIONS=o;g.COLOR_NAME_TO_RGB=p;g.ORIGIN=q}),98);
__d("StoriesFeedbackCommentStateContextProvider",["StoriesFeedbackCommentStateContext","StoriesGating","StoriesLoggingConstants","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");b=d("react");var i=b.useMemo,j=b.useState,k=d("StoriesGating").shouldUseCommentsSheet();function a(a){var b=a.children;a=a.initialCommentID;var e=j(k?!1:a!==""),f=e[0],g=e[1];e=j(!1);var l=e[0],m=e[1];e=j(k?a!=="":!1);var n=e[0],o=e[1];e=j(a!==""?c("StoriesLoggingConstants").COMMENT_TRIGGER_SOURCE.NOTIFICATION_STORY_UFI:c("StoriesLoggingConstants").COMMENT_TRIGGER_SOURCE.STORY_UFI_BUTTON);var p=e[0],q=e[1],r=d("StoriesGating").isCommentEnabled();a=i(function(){return{commentTriggerSource:p,isCommentingOnForStory:l,isCommentsRightRailOpen:f,isStoryCommentingEnabled:r,setCommentTriggerSource:q,setIsCommentingOnForStory:m,setIsCommentsRightRailOpen:g,setShowCommentsSheetOverlay:o,showCommentsSheetOverlay:n}},[p,l,f,r,n]);return h.jsx(c("StoriesFeedbackCommentStateContext").Provider,{value:a,children:b})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);