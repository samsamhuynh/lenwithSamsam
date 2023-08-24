;/*FB_PKG_DELIM*/

__d("CometWarningScreenOverlay_data$normalization.graphql",["CometTextWithEntitiesRelay_textWithEntities$normalization.graphql"],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{args:null,fragment:b("CometTextWithEntitiesRelay_textWithEntities$normalization.graphql"),kind:"FragmentSpread"}],c=[{alias:null,args:null,kind:"ScalarField",name:"text",storageKey:null}],d={alias:null,args:null,kind:"ScalarField",name:"render_type",storageKey:null},e={alias:null,args:null,kind:"ScalarField",name:"type",storageKey:null},f={alias:null,args:null,kind:"ScalarField",name:"height",storageKey:null},g={alias:null,args:null,kind:"ScalarField",name:"scale",storageKey:null},h={alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null},i={alias:null,args:null,kind:"ScalarField",name:"width",storageKey:null},j={alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},k={alias:null,args:null,kind:"ScalarField",name:"content_id",storageKey:null},l={alias:null,args:null,kind:"ScalarField",name:"validator",storageKey:null},m={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},n={alias:null,args:null,kind:"ScalarField",name:"use_feed_simplification_design",storageKey:null};return{kind:"SplitOperation",metadata:{},name:"CometWarningScreenOverlay_data$normalization",selections:[{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"title",plural:!1,selections:a,storageKey:null},{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"subtitle",plural:!1,selections:a,storageKey:null},{alias:null,args:null,concreteType:"WarningScreenAction",kind:"LinkedField",name:"warning_screen_actions",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"context",storageKey:null},{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"label",plural:!1,selections:c,storageKey:null},d,e,{alias:null,args:null,kind:"ScalarField",name:"ixt_trigger",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"InformTreatmentViewModel",kind:"LinkedField",name:"inform_treatment_view_model",plural:!1,selections:[d,{alias:null,args:null,kind:"ScalarField",name:"body_text",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"metadata",storageKey:null},{alias:null,args:null,concreteType:"Image",kind:"LinkedField",name:"icon",plural:!1,selections:[f,g,h,i,j],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"icon_color",storageKey:null},{alias:null,args:null,concreteType:"InformTreatmentButton",kind:"LinkedField",name:"button_list",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"label",storageKey:null},e,{alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"ixt_action",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"action_type",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"InformTreatmentLoggingInfo",kind:"LinkedField",name:"logging_info",plural:!1,selections:[k,{alias:null,args:null,kind:"ScalarField",name:"story_id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"session_id",storageKey:null},l],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"heading",storageKey:null},{alias:null,args:null,concreteType:"InformTreatmentLearnMoreViewModel",kind:"LinkedField",name:"learn_more",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"is_misinfo",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"content_type",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"headline",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"body",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"meta",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"followup_title",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"instant_feedback",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"instant_feedback_undo",storageKey:null},{alias:null,args:null,concreteType:"InformTreatmentLoggingInfo",kind:"LinkedField",name:"logging_info",plural:!1,selections:[l],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"followup_content",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"followup_content_indented",storageKey:null},k,{alias:null,args:null,kind:"ScalarField",name:"followup_meta",storageKey:null},{alias:null,args:null,concreteType:"ManualFactCheck",kind:"LinkedField",name:"fact_check_followup_content",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"external_uri",storageKey:null},{alias:null,args:null,concreteType:"FactCheckProvider",kind:"LinkedField",name:"provider",plural:!1,selections:[j,m],storageKey:null},{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"title",plural:!1,selections:c,storageKey:null},m],storageKey:null},{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"fact_check_badge",plural:!1,selections:c,storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"show_chevron",storageKey:null},n],storageKey:null},{alias:null,args:[{kind:"Literal",name:"color",value:"fds-black"}],concreteType:"Image",kind:"LinkedField",name:"icon",plural:!1,selections:[f,g,h,i],storageKey:'icon(color:"fds-black")'},d,n,k,{alias:null,args:null,kind:"ScalarField",name:"container_story_id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"top_objectionable_category",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"inform_session_id",storageKey:null}]}}();e.exports=a}),null);