;/*FB_PKG_DELIM*/

__d("GroupsCometMemberCountAndPrivacy_group.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[{defaultValue:!1,kind:"LocalArgument",name:"showOnlyCount"},{defaultValue:"COMPRESSED",kind:"LocalArgument",name:"type"}],kind:"Fragment",metadata:null,name:"GroupsCometMemberCountAndPrivacy_group",selections:[{kind:"RequiredField",field:{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},action:"THROW",path:"id"},{args:null,kind:"FragmentSpread",name:"GroupsCometPrivacyText_group"},{args:[{kind:"Variable",name:"showOnlyCount",variableName:"showOnlyCount"},{kind:"Variable",name:"type",variableName:"type"}],kind:"FragmentSpread",name:"useGroupsCometMemberCount_group"}],type:"Group",abstractKey:null};e.exports=a}),null);
__d("GroupsCometPrivacyText_group.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"GroupsCometPrivacyText_group",selections:[{kind:"RequiredField",field:{alias:null,args:null,concreteType:"GroupPrivacyInfo",kind:"LinkedField",name:"privacy_info",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"useGroupsCometPrivacyIcon_privacyInfo"},{kind:"RequiredField",field:{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"title",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"CometTextWithEntitiesRelay_textWithEntities"}],storageKey:null},action:"THROW",path:"privacy_info.title"}],storageKey:null},action:"THROW",path:"privacy_info"}],type:"Group",abstractKey:null};e.exports=a}),null);
__d("useGroupsCometLeadersEngagementLogger_group.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"useGroupsCometLeadersEngagementLogger_group",selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{args:null,kind:"FragmentSpread",name:"useGroupsCometLeadersEngagementLoggingSurfaceInfo_group"}],type:"Group",abstractKey:null};e.exports=a}),null);
__d("useGroupsCometLeadersEngagementLoggingSurfaceInfo_group.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"useGroupsCometLeadersEngagementLoggingSurfaceInfo_group",selections:[{alias:null,args:null,concreteType:"GroupLeadersEngagementLoggingSettings",kind:"LinkedField",name:"leaders_engagement_logging_settings",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"comet_surface_mappings",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"surface",storageKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"trace_policy",storageKey:null}],type:"GroupLeadersEngagementLoggingExactCometSurfaceMapping",abstractKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"prefixes",storageKey:null}],type:"GroupLeadersEngagementLoggingPrefixCometSurfaceMapping",abstractKey:null}],storageKey:null}],storageKey:null}],type:"Group",abstractKey:null};e.exports=a}),null);
__d("useGroupsCometPrivacyIcon_privacyInfo.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"useGroupsCometPrivacyIcon_privacyInfo",selections:[{alias:null,args:null,kind:"ScalarField",name:"icon_name",storageKey:null}],type:"GroupPrivacyInfo",abstractKey:null};e.exports=a}),null);
__d("GroupsCometMemberProfileLinkContainer_profile.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[{kind:"RootArgument",name:"groupID"}],kind:"Fragment",metadata:null,name:"GroupsCometMemberProfileLinkContainer_profile",selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null}],type:"Entity",abstractKey:"__isEntity"},{kind:"InlineFragment",selections:[{alias:null,args:[{kind:"Variable",name:"group_id",variableName:"groupID"}],concreteType:"GroupMembership",kind:"LinkedField",name:"group_membership",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"has_member_feed",storageKey:null},{alias:null,args:null,concreteType:"Group",kind:"LinkedField",name:"associated_group",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"useGroupsCometLeadersEngagementLogger_group"}],storageKey:null}],storageKey:null}],type:"GroupMember",abstractKey:"__isGroupMember"}],type:"Profile",abstractKey:"__isProfile"};e.exports=a}),null);
__d("useGroupsCometPrivacyIcon",["ix","CometRelay","fbicon","recoverableViolation","useGroupsCometPrivacyIcon_privacyInfo.graphql"],(function(a,b,c,d,e,f,g,h){"use strict";var i;function a(a){a=d("CometRelay").useFragment(i!==void 0?i:i=b("useGroupsCometPrivacyIcon_privacyInfo.graphql"),a);return j(a.icon_name)}function j(a){if(a==null)return null;switch(a){case"arrows-left-right-circle":return d("fbicon")._(h("785426"),12);case"business-briefcase":return d("fbicon")._(h("497865"),12);case"globe-americas":return d("fbicon")._(h("560118"),12);case"neighborhood":return d("fbicon")._(h("1721953"),12);case"pennant":return d("fbicon")._(h("1679807"),12);case"privacy":return d("fbicon")._(h("497243"),12);case"privacy-unlocked":return d("fbicon")._(h("603210"),12);case"app-groups":return d("fbicon")._(h("573122"),12);default:return c("recoverableViolation")("GroupPrivacyInfo.icon_name is not recognized.","groups_comet")}}g.useGroupsCometPrivacyIcon=a;g.getGroupPrivacyIconName=j}),98);
__d("GroupsCometPrivacyText.react",["CometRelay","CometRow.react","CometRowItem.react","CometTextWithEntitiesRelay.react","GroupsCometPrivacyText_group.graphql","TetraIcon.react","react","useGroupsCometPrivacyIcon"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react");function a(a){a=a.group$key;a=d("CometRelay").useFragment(h!==void 0?h:h=b("GroupsCometPrivacyText_group.graphql"),a);var e=d("useGroupsCometPrivacyIcon").useGroupsCometPrivacyIcon(a.privacy_info);return i.jsxs(c("CometRow.react"),{align:"start",paddingHorizontal:0,paddingTop:0,spacing:4,verticalAlign:"center",children:[e&&i.jsx(c("CometRowItem.react"),{children:i.jsx(c("TetraIcon.react"),{color:"secondary",icon:e})}),i.jsx(c("CometRowItem.react"),{children:i.jsx(c("CometTextWithEntitiesRelay.react"),{textWithEntities:a.privacy_info.title})})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("XCometGroupMembersControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/groups/{idorvanity}/members/",Object.freeze({should_open_welcome_member_composer:!1,only_recruiting_group_non_compliant:!1,source:"unknown"}),void 0);b=a;g["default"]=b}),98);
__d("GroupsCometMemberCountAndPrivacy.react",["CometLink.react","CometMiddot.react","CometRelay","CometRow.react","CometRowItem.react","CurrentEnvironment","GroupsCometMemberCountAndPrivacy_group.graphql","GroupsCometPrivacyText.react","XCometGroupMembersControllerRouteBuilder","promiseDone","react","requireDeferred","useGroupsCometMemberCount","useMinifiedProductAttribution","usePreviousSurfaceForGroupLogging"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react"),j=d("react").useRef,k=c("requireDeferred")("GroupClickActionFalcoEvent").__setRef("GroupsCometMemberCountAndPrivacy.react"),l="www.facebook.com";function a(a){a=a.group$key;var e=d("CometRelay").useFragment(h!==void 0?h:h=b("GroupsCometMemberCountAndPrivacy_group.graphql"),a);a=c("CurrentEnvironment").messengerdotcom?(a=c("XCometGroupMembersControllerRouteBuilder").buildUri({idorvanity:e.id}).setDomain(l))==null?void 0:(a=a.setProtocol("https"))==null?void 0:a.toString():c("XCometGroupMembersControllerRouteBuilder").buildUri({idorvanity:e.id}).toString();var f=c("useGroupsCometMemberCount")({group$key:e}),g=c("useMinifiedProductAttribution")(),m=c("usePreviousSurfaceForGroupLogging")(),n=j(m);m=function(){c("promiseDone")(k.load().then(function(a){return a.log(function(){var a;return{attribution_id:"[]",attribution_id_v2:(a=g)!=null?a:"[]",current_surface:"group_mall",group_id:(a=e.id)!=null?a:"",previous_surface:n.current,unit_name:"group_ngn_members"}})}))};return i.jsxs(c("CometRow.react"),{align:"start",paddingHorizontal:0,paddingTop:0,spacing:4,verticalAlign:"center",wrap:"forward",children:[i.jsx(c("CometRowItem.react"),{children:i.jsx(c("GroupsCometPrivacyText.react"),{group$key:e})}),f!=null&&i.jsx(c("CometRowItem.react"),{children:i.jsx(c("CometMiddot.react"),{})}),f!=null&&i.jsx(c("CometRowItem.react"),{children:i.jsx(c("CometLink.react"),{color:"secondary",href:a,onClick:m,children:f})})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("GroupLeadersEngagamentSurfaceEnum",[],(function(a,b,c,d,e,f){a=Object.freeze({AA_CREATE_CHAT_NOTIFICATION:"aa_create_chat_notification",AA_GROUP_MALL_QP:"aa_group_mall_qp",ADMIN_ACITIVITIES:"admin_acitivities",ADMIN_FEATURE_CHANGELOG:"admin_feature_changelog",ADMIN_HOME:"admin_home",ADMIN_HOME_BOTTOM_SHEET:"admin_home_bottom_sheet",ADMIN_HOME_ACTIVE:"admin_home_active",ADMIN_HOME_COMMUNITY_CHATS_ENTRYPOINTS:"admin_home_community_chats_entrypoints",ADMIN_HOME_GROUP_SWITCHER:"admin_home_group_switcher",ADMIN_HOME_ALL_TOOLS:"admin_home_all_tools",ADMIN_HOME_EDIT_SHORTCUTS:"groups_admin_home_edit_shortcuts",ADMIN_PENDING_POST_REMINDER_NOTIF:"admin_pending_post_reminder_notif",ADMIN_PENDING_POST_REVIEW_QP:"admin_pending_post_review_qp",ADMOD_CHAT_THREAD:"admod_chat_thread",ADMOD_CHAT_XMA_ACTIVITY_LOG_BOTTOM_SHEET:"admod_chat_xma_activity_log_bottom_sheet",ADMOD_CHAT_XMA_ERROR_BOTTOM_SHEET:"admod_chat_xma_error_bottom_sheet",ADMOD_CHAT_XMA_REVIEW_BOTTOM_SHEET:"admod_chat_xma_review_bottom_sheet",AA_CREATE_CHAT_UPSELL:"aa_create_chat_upsell",AUTO_FLAGGED:"auto_flagged",CHAT_SUGGESTIONS:"chat_suggestions",COMET_ENTITY_MENU_POPOVER:"comet_entity_menu_popover",COMMUNITY_CHATS_HUB:"community_chats_hub",CONTEXTUAL_SUGGESTIONS:"contextual_suggestions",GROUP_MALL_CREATE_CHAT_UPSELL:"group_mall_create_chat_upsell",GROUP_MALL_CREATE_CHAT_NO_AA_OR_CHATS_UPSELL:"group_mall_create_chat_no_aa_or_chats_upsell",CONTEXTUAL_SUGGESTIONS_TOAST:"contextual_suggestion_toast",CONTENT_ASSIST:"content_assist",CONTENT_ASSIST_INTERNAL_TOOL:"content_assist_internal_tool",CONTENT_ASSIST_PRO_TIP:"content_assist_pro_tip",CONTENT_ASSIST_ENGAGEMENT_QP:"content_assist_engagement_qp",DECLINE_MEMBERSHIP_REQ_FEEDBACK_DETAILS:"decline_membership_req_feedback_details",DECLINE_MEMBERSHIP_REQ_W_FEEDBACK:"decline_membership_req_w_feedback",DECLINE_MEMBERSHIP_ONBOARDING_DIALOG:"decline_membership_onboarding_dialog",DECLINE_MEMBERSHIP_CONTEXTUAL_MESSAGE_CARD:"decline_membership_contextual_message_card",DRAFT_POSTS:"draft_posts",EDUCATION_CENTER:"education_center",EDUCATION_CENTER_TOPIC:"education_center_topic",EDUCATION_CENTER_TUTORIAL:"education_center_tutorial",EDUCATION_HUB_WATCH_VIDEO:"education_hub_watch_video",GROUP_ANONYMOUS_POST_APPROVAL_MERGE_INTERSTITIAL:"group_anonymous_post_approval_merge_interstitial",GROUP_INSIGHTS_ADMINS:"group_insights_admins",GROUP_INSIGHTS_CONTRIBUTOR:"group_insights_contributor",GROUP_INSIGHTS_EXPERTS:"group_insights_experts",GROUP_INSIGHTS_ENGAGEMENT:"group_insights_engagement",GROUP_INSIGHTS_FUNDRAISERS:"group_insights_fundraisers",GROUP_INSIGHTS_LEARNING:"group_insights_learning",GROUP_INSIGHTS_MEMBER:"group_insights_member",GROUP_INSIGHTS_MENTORSHIP:"group_insights_mentorship",GROUP_INSIGHTS_MODERATOR:"group_insights_moderator",GROUP_INSIGHTS_MONETIZATION:"group_insights_monetization",GROUP_INSIGHTS_SHOPS:"group_insights_shops",GROUP_MEMBER_MODERATION_SUMMARY:"group_member_moderation_summary",GROUP_OLD_ANONYMOUS_POST_INSPO_NOTIF:"group_old_anonymous_post_inspo_notif",GROUP_QUALITY:"group_quality",GROUP_QUESTIONS:"group_questions",GROUP_QUESTIONS_EDIT:"group_questions_edit",GROUP_REFERRAL_POST:"group_referral_post",GROUP_ROLES_CENTER_FOR_EXPERT:"group_roles_center_for_expert",GROUP_RULES_CREATE:"group_rules_create",GROUP_RULES_EDIT:"group_rules_edit",GROUP_RULES_HOME:"group_rules_home",GROUP_RULES_REVIEW:"group_rules_review",GROUP_RULES_SUGGEST:"group_rules_suggest",GROUP_SETTINGS:"group_settings",GROUP_SETTINGS_AUTO_MEMBER_APPROVAL:"group_settings_auto_member_approval",GROUP_SETTINGS_COVER_PHOTO:"group_settings_cover_photo",GROUP_SETTINGS_GROUP_TYPE:"group_settings_group_type",GROUP_SETTINGS_LINKED_GROUPS:"group_settings_linked_groups",GROUP_SETTINGS_LINKED_PAGES:"group_settings_linked_pages",GROUP_SETTINGS_LOCATION:"group_settings_location",GROUP_SETTINGS_NAME_AND_DESCRIPTION:"group_settings_name_and_description",GROUP_SETTINGS_PREAPPROVAL:"group_settings_preapproval",GROUP_SETTINGS_PRIVACY:"group_settings_privacy",GROUP_SETTINGS_TAG:"group_settings_tag",GROUP_SETTINGS_PARTICIPANT_APPROVAL:"group_settings_participant_approval",GROUP_TAB_MANAGE_PIVOT:"group_tab_manage_pivot",GROUP_TAB_ACTION_ITEMS:"group_tab_action_items",GROUP_TAB_COMPOSER:"group_tab_composer",GROUP_UNKNOWN:"group_unknown",INVITE_MEMBER:"invite_member",KEYWORD_ALERT:"keyword_alert",LIGHTWEIGHT_GROUP_ADMIN_TAB:"lightweight_group_admin_tab",MALL:"mall",MEMBER_LIST_ADMIN:"member_list_admin",MEMBER_LIST_BLOCKED:"member_list_blocked",MEMBER_LIST_FRIEND_SUB:"member_list_friend_sub",MEMBER_LIST_INVITED:"member_list_invited",MEMBER_LIST_MAIN:"member_list_main",MEMBER_LIST_OTHER_MEMBER:"member_list_other_member",MEMBER_LIST_PAGE:"member_list_page",MEMBER_LIST_PREAPPROVED:"member_list_preapproved",MEMBER_LIST_UNAVAILABLE:"member_list_unavailable",MEMBER_SUGGESTION_SETTING:"member_suggestion_setting",MIB_THREAD_VIEW:"mib_thread_view",NOTIFICATION:"notification",PENDING_MEMBERS:"pending_members",PENDING_POSTS:"pending_posts",PENDING_POSTS_PREAPPROVE_TOAST:"pending_posts_preapprove_toast",PEOPLE_LIST:"people_list",POST_TOPIC_CREATE:"post_topic_create",POST_TOPIC_ONBOARD:"post_topic_onboard",PROFESSIONAL_DASHBOARD:"professional_dashboard",PRO_DASH_NEXT_STEPS:"pro_dash_next_steps",PROFILE:"profile",REPORTED_CONTENT:"reported_content",ROLES_MANAGEMENT:"roles_management",SCHEDULED_POSTS:"scheduled_posts",SCHEDULED_POST_PILL:"scheduled_post_pill",SUPPORT:"support",UNKNOWN:"unknown",GROUP_MALL_POST_MENU:"group_mall_post_menu",NEWS_FEED_POST_MENU:"news_feed_post_menu",MANAGE_INCOMING_POST:"manage_incoming_post",MANAGE_PUBLISHED_POST:"manage_published_post",RECIPE_DIALOG:"recipe_dialog",AA_ONBOARDING_DIALOG_REQUIREMENTS_PAGE:"onboarding_dialog_requirements_page",AA_ONBOARDING_DIALOG_REVIEW_AND_UNDO_PAGE:"onboarding_dialog_review_and_undo_page",AA_ONBOARDING_DIALOG_SETUP_PAGE:"onboarding_dialog_setup_page",AA_ONBOARDING_CRITERIA_RECOMMENDATION_SCREEN:"onboarding_dialog_criteria_recommendation_page",AA_ONBOARDING_THREE_NEW_DECLINE_CRITERIA:"aa_onboarding_three_new_decline_criteria",AA_ONBOARDING_PRIVATE_GROUP_COMMENT_MODERATION:"aa_onboarding_private_group_comment_moderation",AA_HOME:"aa_home",AA_REMOVE_CRITERIA_DIALOG:"aa_remove_criteria_dialog",AA_RECIPE_COLLECTION:"aa_recipe_collection",AA_RECIPE:"aa_recipe",AA_UPDATE_CRITERIA_DIALOG:"aa_update_criteria_dialog",AA_CRITERIA_COLLECTION:"aa_criteria_collection",AA_CRITERIA_DETAILS:"aa_criteria_details",AA_CRITERIA_ADDED_CONFIRMATION_NUX:"aa_criteria_added_confirmation_nux",AA_ADMIN_INTRO_COMMENT_CONFIRMATION:"aa_admin_intro_comment_confirmation",AA_CHAT_SELECTION_PAGE:"aa_chat_selection_page",CREATE_CHAT_ONBOARDING:"create_chat_onboarding",AA_PENDING_POST_QUEUE_PROMOTION:"aa_pending_post_queue_promotion",AA_PENDING_PARTICIPATION_PROMOTION:"aa_pending_participation_promotion",AA_PENDING_MEMBERS_PROMOTION:"aa_pending_members_promotion",AA_PENDING_MEMBERS_DECLINE_PROMOTION:"aa_pending_members_decline_promotion",AA_PENDING_MEMBERS_RBA_MIGRATION_MESSAGE:"aa_pending_members_rba_migration_message",AA_USER_PREAPPROVAL_PROMOTION:"aa_user_preapproval_promotion",AA_PREAPPROVED_PEOPLE_LIST:"aa_preapproved_people_list",AA_SUGGESTED_PEOPLE_TO_PREAPPROVE:"aa_suggested_people_to_preapprove",AA_PREAPPROVED_PEOPLE_SEARCH:"aa_preapproved_people_search",AA_PREAPPROVED_PEOPLE_INFO:"aa_preapproved_people_info",AA_PREAPPROVED_PEOPLE_ACTIONS_SHEET:"aa_preapproved_people_actions_sheet",AA_AUTOMATED_WELCOME_POST_PROMOTION:"aa_automated_welcome_post_promotion",AA_UPGRADE_CRITERIA_RECOMMENDATION_SCREEN:"aa_upgrade_criteria_recommendation_screen",AA_PENDING_POST_DECLINE_RECOMMENDATION_PAGE:"aa_pending_post_decline_recommendation_page",AA_REMOVE_PUBLISHED_COMMENTS_RECOMMENDATION_PAGE:"aa_remove_published_comments_recommendation_page",AA_POST_KEYWORD_QP_NOTIF_RECOMMENDATION_PAGE:"aa_post_keyword_qp_notif_recommendation_page",AA_SPAM_COMMENT_MODERATION_RECOMMENDATION_PAGE:"aa_spam_comment_moderation_recommendation_page",AA_EXTENDED_SPAM_COMMENT_MODERATION_RECOMMENDATION_PAGE:"aa_extended_spam_comment_moderation_recommendation_page",AA_COMMUNITY_MESSAGING_MODERATION_RECOMMENDATION_PAGE:"aa_community_messaging_moderation_recommendation_page",AA_MISINFO_REMOVE_POST_RECOMMENDATION_PAGE:"aa_remove_remove_post_recommendation_page",AA_COMMUNITY_MESSAGING_MODERATION_CONTEXTUAL_SUGGESTION:"aa_community_messaging_moderation_contextual_suggestion",AA_INTEGRITY_UPSELL_CONTEXTUAL_SUGGESTION:"aa_integrity_upsell_contextual_suggestion",AA_INTEGRITY_UPSELL_QP_GROUP_MALL:"aa_integrity_upsell_qp_group_mall",AA_INTEGRITY_UPSELL_NOTIFICATION:"aa_integrity_upsell_notification",AA_INTEGRITY_UPSELL_EDU:"aa_integrity_upsell_edu",AA_RECURRING_PROMPTS_PRO_TIP:"aa_recurring_prompts_pro_tip",AA_WELCOME_POST_PRO_TIP:"aa_welcome_post_pro_tip",AA_NOTIFICATION_SETTINGS:"aa_notification_settings",AA_ACTIVITY_ALERTS_UPSELL_NOTIFICATION:"aa_activity_alerts_upsell_notification",AA_INSIGHTS_RECURRING_NOTIFICATION:"aa_insights_recurring_notification",AA_INSIGHTS_UPSELL_NOTIFICATION:"aa_insights_upsell_notification",AA_WELCOME_POST_NOTIFICATION:"aa_welcome_post_notification",AA_RECURRING_PROMPTS_NOTIFICATION:"aa_recurring_prompts_notification",AA_RECURRING_CHATS_NOTIFICATION:"aa_recurring_chats_notification",AA_WELCOME_POST_ACTION_BASED_UPSELL:"aa_welcome_post_action_based_upsell",AA_WELCOME_POST_TO_RECURRING_PROMPT_ACTION_BASED_UPSELL:"aa_welcome_post_to_recurring_prompt_action_based_upsell",AA_RECURRING_PROMPT_TO_WELCOME_POST_ACTION_BASED_UPSELL:"aa_recurring_propmpt_to_welcome_post_action_based_upsell",AA_RECURRING_CHAT_TO_RECURRING_CHAT_ACTION_BASED_UPSELL:"aa_recurring_chat_to_recurring_chat_action_based_upsell",AA_MISINFO_UPSELL_GROUP_MALL:"aa_misinfo_upsell_group_mall",AA_MISINFO_UPSELL_NOTIFICATION:"aa_misinfo_upsell_notification",MA_RECURRING_NOTIFICATION:"ma_recurring_notification",MA_PROMOTION_QP_NOTIFICATION:"ma_promotion_qp_notification",MA_AYMT_UPSELL:"ma_aymt_upsell",MA_NEW_CRITERIA_PROMOTION_PAGE:"ma_new_criteria_promotion_page",MA_CONTEXTUAL_UPSELL:"ma_contextual_upsell",MA_RULES_OPT_IN_NOTIFICATION:"ma_rules_opt_in_notification",MA_RULES_OPT_IN_BOTTOM_SHEET:"ma_rules_opt_in_bottom_sheet",AA_COMMUNITY_MESSAGING_MODERATION_QP_NOTIF_RECOMMENDATION_PAGE:"aa_community_messaging_moderation_qp_recommendation_page",AA_MEMBERSHIP_APPROVAL_RECOMMENDATION_PAGE:"aa_membership_approval_recommendation_page",AA_MEMBERSHIP_DECLINE_RECOMMENDATION_PAGE:"aa_membership_decline_recommendation_page",AMA_GROUP_MALL_QP:"ama_group_mall_qp",PENDING_PARTICIPANTS:"pending_participants",PARTICIPANT_LIST_ADMIN:"participant_list_admin",AA_PARTICIPANT_APPROVAL_RECOMMENDATION_PAGE:"aa_participant_approval_recommendation_page",AA_PARTICIPANT_DECLINE_RECOMMENDATION_PAGE:"aa_participant_decline_recommendation_page",PARTICIPANT_REQUESTS_BLOKS:"participant_requests_bloks",ADMIN_INACTIVITY_DIALOG:"admin_inactivity_dialog",ADMIN_INACTIVITY_BANNER:"admin_inactivity_banner",COMMUNITY_ROLES_PLATFORM:"community_roles_platform",PRIORITY_QUEUE:"priority_queue",GROUP_MALL:"groups_mall",MEMBER_REQUESTS_BLOKS:"member_requests_bloks",MEMBER_REQUESTS_COMET:"member_requests_comet",MEMBER_REQUESTS_IOS:"member_requests",KEYWORDS_ALERTED_CONTENT_IOS:"keywords_alerted_content",GROUP_PENDING_POSTS_IOS:"group_pending_posts",ADMIN_ACTIVITY_LOG_IOS:"admin_activity_log",GROUP_SCHEDULED_POSTS_IOS:"group_scheduled_posts",GROUP_INSIGHTS_MEMBERS_IOS:"group_insights_members",GROUP_INSIGHTS_ACTIVITY_IOS:"group_insights_activity",GROUP_INSIGHTS_DEMOGRAPHICS_IOS:"group_insights_demographics",ADMIN_FULL_SCREEN_ONBOARDING:"admin_full_screen_onboarding",ADMIN_IN_MALL_ONBOARDING_UNIT:"admin_in_mall_onboarding_unit",ADMIN_IN_MALL_ONBOARDING_UNIT_DISMISS_DIALOG:"admin_in_mall_onboarding_unit_dismiss_dialog",GROWTH_PREFERENCE:"growth_preference",GROWTH_PREFERENCE_MEMBERSHIP_QUEUE_PROMOTION:"growth_preference_membership_queue_promotion",CATEGORIZED_INVITE:"categorized_invite",MODMIN_REVIEW_FOLDER:"modmin_review_folder",CONTEXTUAL_PROFILE:"contextual_profile",ADMIN_AUTONOMY:"admin_autonomy",GROUP_OVERVIEW:"group_overview",FORUM_QUESTIONS_EDIT:"forum_questions_edit",WELCOME_POST_BOTTOM_SHEET:"welcome_post_bottom_sheet",AA_INSIGHTS_DETAILS:"aa_insights_details",AA_INSIGHTS_BOTTOMSHEET:"aa_insights_bottomsheet",AA_COMMAND_ONBOARDING:"aa_command_onboarding",AA_CONTENT_CREATION_PHOTO_SELECTION:"aa_content_creation_photo_selection",SCHEDULED_POST_UI:"scheduled_post_ui",COMMUNITY_CHATS_POLL_RESULTS:"community_chats_poll_results",COMMUNITY_CHATS_POLL_PROMOTION:"community_chats_poll_promotion",APPEAL_DECISION_NOTIF_LANDING_PAGE:"appeal_decision_notif_landing_page",ADMIN_RECAP:"admin_recap",CONTENT_TEMPLATES:"content_templates",AUTOMATED_TEMPLATE_LIBRARY:"automated_template_library",ENTITY_RECOMMENDATION_NUX_DIALOG:"entity_recommendation_nux_dialog",ENTITY_QUALITY:"entity_quality",PENDING_POST_DISCOVERY_QP:"pending_post_discovery_qp",SPAM_FOLDER_ONBOARDING:"spam_folder_onboarding",GROUP_RULES_ENFORCEMENT_ADMIN_VIEW:"group_rules_enforcement_admin_view",GROUP_RULES_ENFORCEMENT_MEMBER_FEEDBACK_VIEW:"group_rules_enforcement_member_feedback_view"});f["default"]=a}),66);
__d("useGroupsCometLeadersEngagementLoggingSurfaceInfo",["CometRelay","GroupLeadersEngagamentSurfaceEnum","getJSEnumSafe","react","useCurrentRoute","useGroupsCometLeadersEngagementLoggingSurfaceInfo_group.graphql","useRouteReferrer"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react").useMemo,j=function(a,b,c){var d=a==null?void 0:a.tracePolicy;if(d!=null){a=b[d];if(a!=null)return a;b=c.find(function(a){return a.prefixes.some(function(a){return d.startsWith(a)})});if(b!=null)return b.surface}return"unknown"};function a(a){var e=c("useRouteReferrer")(),f=c("useCurrentRoute")(),g=d("CometRelay").useFragment(h!==void 0?h:h=b("useGroupsCometLeadersEngagementLoggingSurfaceInfo_group.graphql"),a);a=i(function(){var a;a=(a=g==null?void 0:(a=g.leaders_engagement_logging_settings)==null?void 0:a.comet_surface_mappings)!=null?a:[];var b={},d=[];a.forEach(function(a){var e=a.surface;if(e==null)return;e=c("getJSEnumSafe")(c("GroupLeadersEngagamentSurfaceEnum"),e);if(e==null)return;if(a.__typename==="GroupLeadersEngagementLoggingExactCometSurfaceMapping"){var f=a.trace_policy;f!=null&&(b[f]=e)}if(a.__typename==="GroupLeadersEngagementLoggingPrefixCometSurfaceMapping"){f=a.prefixes;f!=null&&d.push({prefixes:f,surface:e})}});return[b,d]},[g]);var k=a[0],l=a[1];return i(function(){return{current:j(f,k,l),previous:j(e,k,l)}},[f,k,l,e])}g["default"]=a}),98);
__d("useGroupsCometLeadersEngagementLogger",["CometRelay","promiseDone","react","recoverableViolation","requireDeferred","useGroupsCometLeadersEngagementLogger_group.graphql","useGroupsCometLeadersEngagementLoggingSurfaceInfo"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react").useCallback,j=c("requireDeferred")("GroupLeadersEngagementFalcoEvent").__setRef("useGroupsCometLeadersEngagementLogger");function a(a,e,f,g){var k;a=d("CometRelay").useFragment(h!==void 0?h:h=b("useGroupsCometLeadersEngagementLogger_group.graphql"),a);var l=a==null?void 0:a.id;a=c("useGroupsCometLeadersEngagementLoggingSurfaceInfo")(a);var m=(k=e)!=null?k:a.current.toString(),n=g!=null?g:f===!0?"":(k=e)!=null?k:a.previous.toString();return i(function(a){if(l==null){c("recoverableViolation")("group.id is required to log a leaders-engagement Falco event. Current surface: "+m+".","groups_comet");return}c("promiseDone")(j.load().then(function(b){return b.log(function(){return babelHelpers["extends"]({},a,{current_surface:m,group_id:l,previous_surface:n})})}))},[l,m,n])}g["default"]=a}),98);
__d("GroupsCometMemberProfileLinkContainer.react",["CometLink.react","CometRelay","GroupsCometMemberProfileLink.react","GroupsCometMemberProfileLinkContainer_profile.graphql","react","recoverableViolation","useGroupsCometLeadersEngagementLogger"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react");function a(a){var e,f=d("CometRelay").useFragment(h!==void 0?h:h=b("GroupsCometMemberProfileLinkContainer_profile.graphql"),a.profile),g=c("useGroupsCometLeadersEngagementLogger")(f==null?void 0:(e=f.group_membership)==null?void 0:e.associated_group);e=function(){g({action:"click",action_subtype:"view_profile",content_id:f==null?void 0:f.id,content_type:"user"})};var j=f.group_membership,k=f.id,l=f.url;if(k==null){c("recoverableViolation")("Unexpected null member ID when rendering member profile link","groups_comet");return i.jsx(c("CometLink.react"),{"aria-hidden":a["aria-hidden"],"aria-label":a["aria-label"],focusable:a.focusable,href:l,onClick:e,children:a.children})}return i.jsx(c("GroupsCometMemberProfileLink.react"),{"aria-hidden":a["aria-hidden"],"aria-label":a["aria-label"],focusable:a.focusable,groupID:a.groupID,hasMemberProfile:(j==null?void 0:j.has_member_feed)||!1,kind:a.kind,memberID:k,onClick:e,profileUrl:l,xstyle:a.xstyle,children:a.children})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("groupsCometProfilePictureURIWIthFallback",["ix"],(function(a,b,c,d,e,f,g,h){"use strict";var i=h("1621868");function a(a,b){b===void 0&&(b=i);return(a=a)!=null?a:b}g["default"]=a}),98);
__d("useGroupsCometUserFlowLogger",["QPLUserFlow","react"],(function(a,b,c,d,e,f,g){"use strict";b=d("react");var h=b.useEffect,i=b.useMemo,j=b.useRef,k=0;function a(a){var b=a.addPointOnLoad,d=a.addPointOnLoadStringAnnotations,e=a.instanceKey,f=a.quickLogEvent,g=a.startFlowOnLoad,l=g===void 0?!1:g,m=a.startFlowStringAnnotations,n=j(!1),o=i(function(){var a;return(a=e)!=null?a:k},[e]);h(function(){n.current===!1&&(n.current=!0,l&&c("QPLUserFlow").start(f,m!=null?{annotations:{string:m},instanceKey:o}:{instanceKey:o}),b!=null&&c("QPLUserFlow").addPoint(f,b,d!=null?{data:{string:d},instanceKey:o}:{instanceKey:o}))},[b,d,o,f,l,m]);return i(function(){return{addPoint:function(a,b){c("QPLUserFlow").addPoint(f,a,b!=null?{data:{string:b},instanceKey:o}:{instanceKey:o})},endCancel:function(){c("QPLUserFlow").endCancel(f,{instanceKey:o})},endFailure:function(a){c("QPLUserFlow").endFailure(f,a,{instanceKey:o})},endSuccess:function(){c("QPLUserFlow").endSuccess(f,{instanceKey:o})},getAddPointFunction:function(a){return function(){c("QPLUserFlow").addPoint(f,a,{instanceKey:o})}}}},[o,f])}g["default"]=a}),98);
__d("ProfileCometAppCollectionNullState.react",["TetraText.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){var b=a.banner;a=a.message;return h.jsxs(h.Fragment,{children:[b,h.jsx("div",{className:"xq1608w x1p5oq8j",children:h.jsx(c("TetraText.react"),{align:"center",color:"tertiary",type:"headlineEmphasized2",children:a})})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);