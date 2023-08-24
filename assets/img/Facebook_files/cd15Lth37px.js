;/*FB_PKG_DELIM*/

__d("CometGamesMainColumnCardDetailsFooter_game.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometGamesMainColumnCardDetailsFooter_game",selections:[{alias:"instantGameInfo",args:null,concreteType:"GamesInstantPlayStyleInfo",kind:"LinkedField",name:"instant_game_info",plural:!1,selections:[{alias:"gameName",args:null,kind:"ScalarField",name:"game_name",storageKey:null},{alias:"socialContextProfiles",args:[{kind:"Literal",name:"count",value:4}],kind:"ScalarField",name:"social_context_profiles",storageKey:"social_context_profiles(count:4)"},{args:null,kind:"FragmentSpread",name:"CometGamesFriendsWhoPlayGameFacepiles_fragment"}],storageKey:null}],type:"Application",abstractKey:null};e.exports=a}),null);
__d("CometGamesStyledCardStandard_game.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometGamesStyledCardStandard_game",selections:[{alias:"instantGameInfo",args:null,concreteType:"GamesInstantPlayStyleInfo",kind:"LinkedField",name:"instant_game_info",plural:!1,selections:[{alias:"iconUri",args:null,kind:"ScalarField",name:"icon_uri",storageKey:null},{alias:"isNewGame",args:null,kind:"ScalarField",name:"is_new_game",storageKey:null},{alias:"name",args:null,kind:"ScalarField",name:"game_name",storageKey:null},{alias:"tallBannerImageUri",args:null,kind:"ScalarField",name:"tall_banner_image_uri",storageKey:null}],storageKey:null},{args:null,kind:"FragmentSpread",name:"CometGamesGameTagCategory_game"},{args:null,kind:"FragmentSpread",name:"CometGamesGameTagSocialContext_game"},{args:null,kind:"FragmentSpread",name:"CometGamesMainColumnCard_game"},{args:null,kind:"FragmentSpread",name:"CometGamesMainColumnCardDetailsFooter_game"}],type:"Application",abstractKey:null};e.exports=a}),null);
__d("CometGamesGameTagCategory_game.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometGamesGameTagCategory_game",selections:[{args:null,kind:"FragmentSpread",name:"useGameCategoryFromGame_game"},{args:null,kind:"FragmentSpread",name:"useGameCategoryFBIDFromGame_game"}],type:"Application",abstractKey:null};e.exports=a}),null);
__d("CometGamesGameTagSocialContext_game.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometGamesGameTagSocialContext_game",selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:"instantGameInfo",args:null,concreteType:"GamesInstantPlayStyleInfo",kind:"LinkedField",name:"instant_game_info",plural:!1,selections:[{alias:"gameCardSocialInfo",args:null,kind:"ScalarField",name:"game_card_social_context",storageKey:null}],storageKey:null}],type:"Application",abstractKey:null};e.exports=a}),null);
__d("CometInstantGamesHubCategoriesList_categories.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:{plural:!0},name:"CometInstantGamesHubCategoriesList_categories",selections:[{alias:"iconDark",args:null,kind:"ScalarField",name:"icon_glyph_dark",storageKey:null},{alias:"iconLight",args:null,kind:"ScalarField",name:"icon_glyph_light",storageKey:null},{alias:"categoryID",args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:"categoryName",args:null,kind:"ScalarField",name:"fbt",storageKey:null}],type:"XFBInstantGamesCategory",abstractKey:null};e.exports=a}),null);
__d("useGameCategoryFBIDFromGame_game.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"useGameCategoryFBIDFromGame_game",selections:[{alias:"gamingTags",args:null,concreteType:"ApplicationAppGamingTagsConnection",kind:"LinkedField",name:"app_gaming_tags",plural:!1,selections:[{alias:"tagNodes",args:null,concreteType:"XFBApplicationGamingTag",kind:"LinkedField",name:"nodes",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null}],storageKey:null}],storageKey:null}],type:"Application",abstractKey:null};e.exports=a}),null);
__d("useGameCategoryFromGame_game.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"useGameCategoryFromGame_game",selections:[{alias:"category",args:null,kind:"ScalarField",name:"app_center_categories",storageKey:null},{alias:"gamingTags",args:null,concreteType:"ApplicationAppGamingTagsConnection",kind:"LinkedField",name:"app_gaming_tags",plural:!1,selections:[{alias:"tagNodes",args:null,concreteType:"XFBApplicationGamingTag",kind:"LinkedField",name:"nodes",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null}],storageKey:null}],storageKey:null}],type:"Application",abstractKey:null};e.exports=a}),null);
__d("CometGamingCategoryListItem.react",["TetraListCell.react","XCometInstantGamesCategoryControllerRouteBuilder","react","useInstantGamesWebHubImpressionLogging"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){var b=c("useInstantGamesWebHubImpressionLogging")({position:a.index.toString(),section:a.section}),d=b.impressionRef,e=b.logClick;b=c("XCometInstantGamesCategoryControllerRouteBuilder").buildURL({category:a.category,store_visit_source:a.storeVisitSource});return h.jsx(c("TetraListCell.react"),{addOnPrimary:a.addOnPrimary,headline:a.fbt,linkProps:{url:b},onPress:function(){return e()},ref:d,selected:a.isActive,selectedBackground:"wash"})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometGamesMainColumnCardDetailsFooter.react",["CometGamesFriendsWhoPlayGameFacepiles.react","CometGamesMainColumnCardDetailsFooter_game.graphql","CometInstantGamesHubUtils","CometRelay","CometTooltip.react","TetraText.react","react","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react"),j={facepilePadding:{paddingEnd:"x150jy0e",$$css:!0},footer:{paddingTop:"xz9dl7a",paddingEnd:"x1sxyh0",paddingBottom:"xsag5q8",paddingStart:"xurb0ha",width:"xgqk73l",$$css:!0},secondRow:{alignItems:"x6s0dn4",display:"x78zum5",height:"x158ke7r",marginTop:"x14vqqas",$$css:!0},tagRow:{alignItems:"x6s0dn4",display:"x78zum5",flexDirection:"x1q0g3np",maxWidth:"x16fdfms",minWidth:"xeuugli",paddingEnd:"x1sxyh0",$$css:!0}},k=h!==void 0?h:h=b("CometGamesMainColumnCardDetailsFooter_game.graphql"),l=2;function a(a){var b=a.game,e=a.secondRowxStyle;a=a.tags;b=d("CometRelay").useFragment(k,b);if(b.instantGameInfo==null)return null;var f=b.instantGameInfo,g=f.gameName;f=f.socialContextProfiles;if(g==null)return null;f=f!=null&&f.length>0?i.jsx(c("CometGamesFriendsWhoPlayGameFacepiles.react"),{facepileSize:24,game:b.instantGameInfo,paddingStyle:j.facepilePadding},"facepiles"):null;b=[f].concat(a).filter(Boolean).slice(0,l);return i.jsxs("div",{className:"xz9dl7a x1sxyh0 xsag5q8 xurb0ha xgqk73l",children:[i.jsx(c("CometTooltip.react"),{delayMs:d("CometInstantGamesHubUtils").CARD_TOOLTIP_DELAY,position:"above",tooltip:g,children:i.jsx(c("TetraText.react"),{numberOfLines:1,type:"headlineEmphasized4",children:g})}),i.jsx("div",{className:c("stylex")(j.secondRow,e),children:b.length>0?i.jsx("div",{className:"x6s0dn4 x78zum5 x1q0g3np x16fdfms xeuugli x1sxyh0",children:b}):null})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometGamesMainColumnHScrollGlimmer.react",["CometGlimmer.react","CometHScroll.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i={title:{borderTopStartRadius:"xhk9q7s",borderTopEndRadius:"x1otrzb0",borderBottomEndRadius:"x1i1ezom",borderBottomStartRadius:"x1o6z2jb",height:"xxk0z11",width:"x1f1nzxn",$$css:!0},titleSpacing:{height:"x36qwtl",$$css:!0}},j=10;function a(a){var b=a.cardGlimmer,e=a.cardWidth,f=a.extraFooter;a=a.extraHeader;return h.jsxs("div",{children:[h.jsx(c("CometGlimmer.react"),{index:0,xstyle:i.title}),h.jsx("div",{className:"x36qwtl"}),a,h.jsx(d("CometHScroll.react").Container,{cardWidth:{minWidth:e,type:"responsive"},gap:8,children:Array(j).fill(0).map(function(a,c){return h.jsx(d("CometHScroll.react").Child,{children:h.cloneElement(b,{cardIndex:c})},c)})}),f]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometGamesGameTag.react",["CometIcon.react","CometInstantGamesHubUtils","CometPressable.react","CometTooltip.react","TetraText.react","react","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i={container:{backgroundColor:"x1qhmfi1",borderTopStartRadius:"xyi19xy",borderTopEndRadius:"x1ccrb07",borderBottomEndRadius:"xtf3nb5",borderBottomStartRadius:"x1pc53ja",display:"x1rg5ohu",maxWidth:"x193iq5w",minWidth:"xeuugli",paddingTop:"x1y1aw1k",paddingEnd:"x1sxyh0",paddingBottom:"xwib8y2",paddingStart:"xurb0ha",$$css:!0},icon:{display:"x78zum5",flexDirection:"x1q0g3np",paddingEnd:"x150jy0e",$$css:!0},tagRow:{alignItems:"x6s0dn4",display:"x78zum5",flexDirection:"x1q0g3np",maxWidth:"x193iq5w",minWidth:"xeuugli",wordBreak:"x13faqbe",wordWrap:"x1vvkbs",$$css:!0}};function a(a){var b,e=a.containerXStyle,f=a.icon,g=a.iconColor,j=a.onPress,k=a.tooltip,l=a.url;a=babelHelpers.objectWithoutPropertiesLoose(a,["containerXStyle","icon","iconColor","onPress","tooltip","url"]);a=h.jsx(c("TetraText.react"),babelHelpers["extends"]({numberOfLines:1},a));l=j==null?h.jsx("div",{className:c("stylex")((b=e)!=null?b:i.container),children:h.jsx("div",{className:"x6s0dn4 x78zum5 x1q0g3np x193iq5w xeuugli x13faqbe x1vvkbs",children:a})}):h.jsx(c("CometPressable.react"),{linkProps:{url:l},onPress:j,xstyle:(b=e)!=null?b:i.container,children:h.jsxs("div",{className:"x6s0dn4 x78zum5 x1q0g3np x193iq5w xeuugli x13faqbe x1vvkbs",children:[f?h.jsx("div",{className:"x78zum5 x1q0g3np x150jy0e",children:h.jsx(c("CometIcon.react"),{color:g,icon:f,size:12})}):null,a]})});return h.jsx(c("CometTooltip.react"),{delayMs:d("CometInstantGamesHubUtils").CARD_TOOLTIP_DELAY,tooltip:k,children:l})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("useGameCategoryFBIDFromGame",["CometRelay","useGameCategoryFBIDFromGame_game.graphql"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h!==void 0?h:h=b("useGameCategoryFBIDFromGame_game.graphql");function a(a){a=d("CometRelay").useFragment(i,a);a=(a=(a=a.gamingTags)==null?void 0:a.tagNodes)!=null?a:[];return a.length>0?(a=a[0])==null?void 0:a.id:null}g["default"]=a}),98);
__d("useGameCategoryFromGame",["CometRelay","useGameCategoryFromGame_game.graphql"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h!==void 0?h:h=b("useGameCategoryFromGame_game.graphql");function a(a){var b;a=d("CometRelay").useFragment(i,a);b=(b=(b=a.gamingTags)==null?void 0:b.tagNodes)!=null?b:[];var c=null;b!=null&&b.length>0&&(c=b[0]);c=(b=c)==null?void 0:b.name;if(c==null||c.length===0)return a.category!=null?a.category[1]:null;else return c}g["default"]=a}),98);
__d("CometGamesGameTagCategory.react",["fbt","CometGamesGameTag.react","CometGamesGameTagCategory_game.graphql","CometRelay","InstantGamesWebHubEventsFalcoEvent","XCometInstantGamesCategoryControllerRouteBuilder","react","useGameCategoryFBIDFromGame","useGameCategoryFromGame"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=d("react"),k=i!==void 0?i:i=b("CometGamesGameTagCategory_game.graphql");function a(a){var b=a.game,e=a.section;a=babelHelpers.objectWithoutPropertiesLoose(a,["game","section"]);b=d("CometRelay").useFragment(k,b);var f=c("useGameCategoryFromGame")(b),g=c("useGameCategoryFBIDFromGame")(b);if(f==null)return null;b=null;g!=null&&(b=c("XCometInstantGamesCategoryControllerRouteBuilder").buildURL({category:g,store_visit_source:"category_tag"}));var i=function(){g!=null&&c("InstantGamesWebHubEventsFalcoEvent").log(function(){return{button_type:"category_tag",event:"click",section:e}})},l=g==null?null:h._("__JHASH__JqIM0sMzHzI__JHASH__",[h._param("Name of the category",f)]);return j.jsx("div",{className:"x193iq5w xeuugli",children:j.jsx(c("CometGamesGameTag.react"),babelHelpers["extends"]({onPress:g!=null?i:null,tooltip:l,url:b},a,{children:f}))})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometGamesGameTagNew.react",["fbt","CometGamesGameTag.react","InstantGamesWebHubEventsFalcoEvent","XCometInstantGamesCategoryControllerRouteBuilder","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react"),j={backgroundStyles:{backgroundImage:"x12ip1aw",$$css:!0},width:{flexShrink:"x2lah0s",maxWidth:"x193iq5w",minWidth:"xeuugli",$$css:!0}};function a(a){var b=a.disablePress;b=b===void 0?!1:b;var d=a.section,e=d===void 0?null:d;d=babelHelpers.objectWithoutPropertiesLoose(a,["disablePress","section"]);a=d.containerXStyle;d=babelHelpers.objectWithoutPropertiesLoose(d,["containerXStyle"]);var f=c("XCometInstantGamesCategoryControllerRouteBuilder").buildURL({category:400,sort_type:"new_releases",store_visit_source:"new_tag"}),g=function(){c("InstantGamesWebHubEventsFalcoEvent").log(function(){return{button_type:"new_tag",event:"click",section:e}})};return i.jsx("div",{className:"x2lah0s x193iq5w xeuugli",children:i.jsx(c("CometGamesGameTag.react"),babelHelpers["extends"]({color:"white",containerXStyle:[a,j.backgroundStyles],iconColor:"white",onPress:b?null:g,tooltip:b?null:h._("__JHASH__wgarR9fYpbX__JHASH__"),url:f},d,{children:h._("__JHASH__HjGb8g41ylY__JHASH__")}))})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometGamesGameTagSocialContext.react",["fbt","CometEntryPointDialogTrigger.react","CometGamesGameTag.react","CometGamesGameTagSocialContext_game.graphql","CometGamingFacepileDetailDialog.entrypoint","CometRelay","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=d("react"),k=i!==void 0?i:i=b("CometGamesGameTagSocialContext_game.graphql");function a(a){var b=a.game,e=babelHelpers.objectWithoutPropertiesLoose(a,["game"]);a=d("CometRelay").useFragment(k,b);b=a==null?void 0:a.id;if(a.instantGameInfo==null||b==null)return null;var f=a.instantGameInfo.gameCardSocialInfo;if(f==null||f.length===0)return null;a=f.includes("friend");return j.jsx("div",{className:"x193iq5w xeuugli",children:a?j.jsx(c("CometEntryPointDialogTrigger.react"),{dialogEntryPoint:c("CometGamingFacepileDetailDialog.entrypoint"),otherProps:{},preloadParams:{gameID:b},children:function(a){return j.jsx(c("CometGamesGameTag.react"),babelHelpers["extends"]({onPress:a,tooltip:h._("__JHASH__TzCgYpl6YET__JHASH__")},e,{children:f}))}}):j.jsx(c("CometGamesGameTag.react"),babelHelpers["extends"]({},e,{children:f}))})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometGamesStyledCardStandard.react",["CometGamesGameTagCategory.react","CometGamesGameTagNew.react","CometGamesGameTagSocialContext.react","CometGamesMainColumnCard.react","CometGamesMainColumnCardDetailsFooter.react","CometGamesStyledCardStandard_game.graphql","CometInstantGamesHubUtils","CometRelay","CometTooltip.react","TetraText.react","react","useCurrentRoute"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react"),j={newGameTagContainer:{borderTopStartRadius:"xyi19xy",borderTopEndRadius:"x1ccrb07",borderBottomEndRadius:"xtf3nb5",borderBottomStartRadius:"x1pc53ja",display:"x1rg5ohu",maxWidth:"x193iq5w",minWidth:"xeuugli",paddingTop:"xm7lytj",paddingEnd:"x1iji9kk",paddingBottom:"x1ykpatu",paddingStart:"x1sln4lm",$$css:!0},secondRow:{alignItems:"x6s0dn4",display:"x78zum5",height:"x158ke7r",marginTop:"x14vqqas",$$css:!0},spacer:{paddingEnd:"x150jy0e",$$css:!0},tagBackground:{backgroundColor:"xrmyhay",$$css:!0},tagContainer:{borderTopStartRadius:"xfh8nwu",borderTopEndRadius:"xoqspk4",borderBottomEndRadius:"x12v9rci",borderBottomStartRadius:"x138vmkv",display:"x1rg5ohu",maxWidth:"x193iq5w",minWidth:"xeuugli",paddingTop:"x889kno",paddingEnd:"x1sxyh0",paddingBottom:"x1a8lsjc",paddingStart:"xurb0ha",$$css:!0},tagRow:{alignItems:"x6s0dn4",display:"x78zum5",flexDirection:"x1q0g3np",maxWidth:"x16fdfms",minWidth:"xeuugli",paddingEnd:"xn6708d",$$css:!0}},k=h!==void 0?h:h=b("CometGamesStyledCardStandard_game.graphql");function a(a){var b=a.cardIndex,e=a.disableGameLaunch,f=a.footerHeadlineType,g=a.game,h=a.hideNewTag;h=h===void 0?!1:h;var l=a.isCompact;l=l===void 0?!1:l;var m=a.isTall;m=m===void 0?!1:m;var n=a.onPress,o=a.section,p=a.showSocialContext;p=p===void 0?!1:p;a=a.source;g=d("CometRelay").useFragment(k,g);var q=c("useCurrentRoute")();if(g.instantGameInfo==null)return null;var r=g.instantGameInfo.isNewGame,s=g.instantGameInfo.iconUri;m&&(s=g.instantGameInfo.tallBannerImageUri);if(s==null)return null;if(l)return i.jsx(c("CometTooltip.react"),{delayMs:d("CometInstantGamesHubUtils").CARD_TOOLTIP_DELAY,position:"below",tooltip:g.instantGameInfo.name,children:i.jsx(c("CometGamesMainColumnCard.react"),{cardIndex:b,disableGameLaunch:e,game:g,gameImageAspectRatio:d("CometInstantGamesHubUtils").COMET_GRID_STANDARD_ASPECT_RATIO,gameImageUri:s,imageFooter:i.jsx(c("TetraText.react"),{color:"primaryOnMedia",type:f?f:"headlineEmphasized3",children:g.instantGameInfo.name}),imageGradient:l,onPress:n,section:o,source:a})});f=null;p||(q==null?void 0:q.tracePolicy)==="comet.gaming.games.category"?f=i.jsx(c("CometGamesGameTagSocialContext.react"),{children:null,color:m?"secondaryOnMedia":"secondary",containerXStyle:m?[j.tagContainer,j.tagBackground]:null,game:g,type:"meta2"},"tag"):f=i.jsx(c("CometGamesGameTagCategory.react"),{children:null,color:m?"secondaryOnMedia":"secondary",containerXStyle:m?[j.tagContainer,j.tagBackground]:null,game:g,section:o,type:"meta2"},"tag");l=!h&&r===!0?i.jsx("div",{className:"x150jy0e",children:i.jsx(c("CometGamesGameTagNew.react"),{children:null,containerXStyle:j.newGameTagContainer,section:o,type:"meta2"})},"new"):null;return i.jsx(c("CometGamesMainColumnCard.react"),{cardFooter:m?null:i.jsx(c("CometGamesMainColumnCardDetailsFooter.react"),{game:g,tags:[l,f].filter(Boolean)}),cardIndex:b,disableGameLaunch:e,game:g,gameImageAspectRatio:m?d("CometInstantGamesHubUtils").COMET_GRID_TALL_CARD_ASPECT_RATIO:d("CometInstantGamesHubUtils").COMET_GRID_STANDARD_ASPECT_RATIO,gameImageUri:s,imageFooter:m?i.jsxs(i.Fragment,{children:[i.jsx(c("CometTooltip.react"),{delayMs:d("CometInstantGamesHubUtils").CARD_TOOLTIP_DELAY,position:"above",tooltip:(p=g.instantGameInfo)==null?void 0:p.name,children:i.jsx(c("TetraText.react"),{color:"primaryOnMedia",numberOfLines:1,type:"headlineEmphasized2",children:(q=g.instantGameInfo)==null?void 0:q.name})}),i.jsx("div",{className:"x6s0dn4 x78zum5 x158ke7r x14vqqas",children:[l,f].filter(Boolean).length>0?i.jsx("div",{className:"x6s0dn4 x78zum5 x1q0g3np x16fdfms xeuugli xn6708d",children:[l,f].filter(Boolean)}):null})]}):i.jsx("div",{}),imageGradient:m,onPress:n,section:o,source:a})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("InstantGamesStoreCategoryTagFBID",[],(function(a,b,c,d,e,f){a=Object.freeze({ACTION:162354739166404,ADVENTURE:159333999412133,ARCADE:512369833455735,BATTLE:316232583513658,BOARD:167965491941264,BUILDER:248343760122557,CARD:504683730567912,CASINO:476176473466382,DESIGN:282978193526211,FANTASY_GAME:948512033056954,MATCH:112249107616792,MERGE:203005921647794,PUZZLE:2377795169031420,QUICK_PLAY:482234206383476,QUIZ_AND_TRIVIA:960095724726991,RACING:2245162332280348,ROLE_PLAYING:154963989937777,RUNNER:197222635582483,SIMULATION:377142393740373,SOLITAIRE:970123487124844,SPORTS:548292719909623,WORD:953400792157137});f["default"]=a}),66);
__d("InstantGamesWebHubSourceType",[],(function(a,b,c,d,e,f){a=Object.freeze({ACHIEVEMENT_STORY:"achievement_story",ADS_IN_FB_PROMOTE_STORE:"ads_in_fb_promote_store",BROWSE_ALL_GAMES:"browse_all_games",CANVAS_FLASH_DEPRECATION:"canvas_flash_deprecation",CANVAS_PLAYER_RHC:"canvas_player_rhc",CANVAS_PLAYER_TOP_BAR:"canvas_player_top_bar",CATEGORIES_LHC:"categories_lhc",CATEGORIES_LHC_WWW_GAMING_FOR_YOU_FEED:"categories_lhc_www_gaming_for_you_feed",CATEGORY_BACK_BUTTON:"category_back_button",CATEGORY_CELL:"category_cell",CATEGORY_CELL_DROPDOWN:"category_cell_dropdown",CATEGORY_TAG:"category_tag",CLAIM_IAP_OFFER_DIALOG:"claim_iap_offer_dialog",COMMUNITY_API_DIALOG_PAGE:"community_api_dialog_page",COMMUNITY_RHC_PAGE_UNIT:"community_rhc_page_unit",CUSTOM_UPDATES_CONSENT:"custom_updates_consent",DARK_TOS_CLOSED:"dark_tos_closed",DESTINATION_SEE_ALL:"destination_see_all",GAMEROOM:"gameroom",GAMES_BOOKMARK:"games_bookmark",GAMES_DESKTOP_REDIRECT:"games_desktop_redirect",GAMES_HUB_REDIRECT:"games_hub_redirect",GAMES_LEAVING_SOON:"games_leaving_soon",GAMES_MY_GAMES_REDIRECT:"games_my_games_redirect",GAMING_TAB:"gaming_tab",INSTANT_GAMES_QUIT:"instant_games_quit",LEFT_RAIL_NAVIGATION:"left_rail_navigation",MY_GAMES_HERO_SECTION:"my_games_hero_section",MY_GAMES_LHC_SEE_ALL:"my_games_lhc_see_all",NEW_TAG:"new_tag",NOTIFICATIONS:"notifications",PAY_HUB_BALANCE_DIALOG:"pay_hub_balance_dialog",PLAYER_CLOSED_BUTTON:"player_closed_button",PLAYER_CLOSED_COMPONENT:"player_closed_component",PLAYER_CLOSED_ESCAPE:"player_closed_escape",PLAYER_CLOSED_NAVBAR:"player_closed_navbar",PLAYER_ERROR_REDIRECT:"player_error_redirect",PLAYER_RHC:"player_rhc",PRE_GAME_DIALOG:"pre_game_dialog",PROMO_RHC:"promo_rhc",PROMO_RHC_RECENTLY_PLAYED:"promo_rhc_recently_played",PUSH_VIEW_BACKGROUND:"push_view_background",PWA_INCENTIVE_PROGRAM_PROMO:"pwa_incentive_program_promo",PWA_PROMO:"pwa_promo",SMALL_SCREEN_NAVIGATION:"small_screen_navigation",SUGGESTED_INSTANT_GAMES:"suggested_instant_games",TOS_CG:"tos_cg",TOS_IG:"tos_ig"});f["default"]=a}),66);
__d("XCometInstantGamesHubControllerParamsRefineValidator",["InstantGameContextType","InstantGamesChartsCategories","InstantGamesWebHubSourceType","coerceRouteParams","refine"],(function(a,b,c,d,e,f,g){b=d("refine").or(d("refine").literal(null),d("refine").string());e=d("refine").or(d("refine").literal(null),d("refine").enumObject(c("InstantGameContextType")));f=d("refine").or(d("refine").literal(null),d("refine").enumObject(c("InstantGamesWebHubSourceType")));e=d("refine").object({category:d("refine").number(),cloud_binary_id:b,context_source_id:b,context_type:e,game_session_id:b,gameorlink:b,launched_game_id:b,payload:b,showcase_game_id:b,sort_type:d("refine").enumObject(c("InstantGamesChartsCategories")),source:b,store_visit_source:f});var h=d("refine").coercion(e),i=Object.freeze({game_session_id:{legacyNames:[],"default":null,coercibleType:"STRING"},showcase_game_id:{legacyNames:[],"default":null,coercibleType:"FBID"},gameorlink:{legacyNames:[],"default":null,coercibleType:"STRING"},source:{legacyNames:[],"default":null,coercibleType:"STRING"},context_source_id:{legacyNames:[],"default":null,coercibleType:"STRING"},context_type:{legacyNames:[],"default":null,enumType:1,coercibleType:"ENUM"},payload:{legacyNames:[],"default":null,coercibleType:"STRING"},cloud_binary_id:{legacyNames:[],"default":null,coercibleType:"FBID"},launched_game_id:{legacyNames:[],"default":null,coercibleType:"FBID"},sort_type:{legacyNames:[],"default":"recommended",enumType:1,coercibleType:"ENUM"},category:{legacyNames:[],"default":400,coercibleType:"INT"},store_visit_source:{legacyNames:[],"default":null,enumType:1,coercibleType:"ENUM"}});function a(a){return h(c("coerceRouteParams")(a,i))}g.XCometInstantGamesHubControllerParamsRefineValidator=a}),98);
__d("CometInstantGamesHubCategoriesList.react",["fbt","ix","CometGamingCategoryListItem.react","CometInstantGamesHubCategoriesList_categories.graphql","CometRelay","CometRouteParams","CometRouteURL","CometUnit.react","CometUnitHeader.react","ImageIconSource","InstantGamesStoreCategoryTagFBID","TetraText.react","XCometInstantGamesHubControllerParamsRefineValidator","XCometInstantGamesHubControllerRouteBuilder","fbicon","getJSEnumSafe","react","useCurrentDisplayMode"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j,k=d("react"),l=h._("__JHASH__CmdFW4iKPOh__JHASH__"),m=j!==void 0?j:j=b("CometInstantGamesHubCategoriesList_categories.graphql");function a(a){var b=a.categories,e=a.section,f=a.storeVisitSource;a=d("CometRelay").useFragment(m,b);b=c("useCurrentDisplayMode")();var g=b==="dark";b=d("CometRouteParams").useCometRefinedRouteParams(d("XCometInstantGamesHubControllerParamsRefineValidator").XCometInstantGamesHubControllerParamsRefineValidator);var j=b==null?void 0:b.category;b=d("CometRouteURL").useRouteURLPath();var n=c("XCometInstantGamesHubControllerRouteBuilder").buildURL({}),o=n.includes(b);n=null;if(a!=null){n=a.map(function(a,b){var d=a.categoryID,h=a.categoryName,i=a.iconDark;a=a.iconLight;d=c("getJSEnumSafe")(c("InstantGamesStoreCategoryTagFBID"),d);if(d==null||h==null||i==null||a==null)return null;var l=!o&&d===j;i={color:l?"blue":"gray",icon:new(c("ImageIconSource"))(l||g?i:a,20,20),size:36,type:"contained-icon"};return k.jsx(c("CometGamingCategoryListItem.react"),{addOnPrimary:i,category:d,fbt:h,index:b+1,isActive:l,section:e,storeVisitSource:f},b+1)});b=!o&&j===400;a={color:b?"blue":"gray",icon:d("fbicon")._(i("545940"),20),size:36,type:"contained-icon"};n.unshift(k.jsx(c("CometGamingCategoryListItem.react"),{addOnPrimary:a,category:400,fbt:l,index:0,isActive:b,section:e,storeVisitSource:f},0))}return k.jsx(c("CometUnit.react"),{header:k.jsx(c("CometUnitHeader.react"),{headline:k.jsx(c("TetraText.react"),{type:"headlineEmphasized3",children:h._("__JHASH__K_Be1tyF5Hl__JHASH__")}),level:3,paddingTop:8}),paddingBottom:8,children:k.jsx("div",{className:"xzsf02u x6prxxf x117nqv4",children:n})})}a.displayName=a.name+" [from "+f.id+"]";g.CategoriesListAllGamesFbt=l;g.CometInstantGamesHubCategoriesList=a}),98);