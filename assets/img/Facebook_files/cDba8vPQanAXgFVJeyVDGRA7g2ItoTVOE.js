;/*FB_PKG_DELIM*/

__d("CometStickerPickerSearchResult_sticker.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[{defaultValue:null,kind:"LocalArgument",name:"height"},{defaultValue:null,kind:"LocalArgument",name:"scale"},{defaultValue:null,kind:"LocalArgument",name:"width"}],kind:"Fragment",metadata:null,name:"CometStickerPickerSearchResult_sticker",selections:[{args:[{kind:"Variable",name:"height",variableName:"height"},{kind:"Variable",name:"scale",variableName:"scale"},{kind:"Variable",name:"width",variableName:"width"}],kind:"FragmentSpread",name:"CometStickerRelay_sticker"}],type:"Sticker",abstractKey:null};e.exports=a}),null);
__d("CometStickerPickerNullState.react",["fbt","CometPickerNullState.react","NullStateMedia","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");function a(a){a=a.notExpanding;a=a===void 0?!1:a;return i.jsx(c("CometPickerNullState.react"),{body:h._("__JHASH__LLCsdMImAs0__JHASH__"),icon:c("NullStateMedia"),notExpanding:a})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometStickerPickerStickerGrid.react",["CometFlexibleGrid.react","CometPickerScrollableArea.react","CometStickerPickerNullState.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i={root:{marginTop:"x1xmf6yo",marginEnd:"x1emribx",marginBottom:"x1e56ztr",marginStart:"x1i64zmx",$$css:!0}};function a(a){var b=a.children,d=a.notExpanding;d=d===void 0?!1:d;var e=a.onScrollBottom,f=a.scrollKey;a=a.testid;return b.length==null||b.length===0?h.jsx(c("CometStickerPickerNullState.react"),{notExpanding:d}):h.jsx(c("CometPickerScrollableArea.react"),{expanding:!d,horizontal:!1,onScrollBottom:e,scrollKey:f,testid:void 0,children:h.jsx(c("CometFlexibleGrid.react"),{columnMaxWidth:"25%",columnMinWidth:"25%",minItems:b.length,xstyle:i.root,children:b})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometStickerPickerSearchResult.react",["CometAspectRatioContainer.react","CometRelay","CometStickerPickerSearchResult_sticker.graphql","CometStickerRelay.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react"),j={sticker:{height:"x5yr21d",width:"xh8yej3",$$css:!0}};function a(a){var e=a.sticker,f=a.xstyle;a=babelHelpers.objectWithoutPropertiesLoose(a,["sticker","xstyle"]);e=d("CometRelay").useFragment(h!==void 0?h:h=b("CometStickerPickerSearchResult_sticker.graphql"),e);return i.jsx(c("CometAspectRatioContainer.react"),{aspectRatio:1,testid:void 0,children:i.jsx(c("CometStickerRelay.react"),babelHelpers["extends"]({},a,{cursorEnabled:!0,overlayEnabled:!0,showFocusOverlay:!0,showHoverOverlay:!0,sticker:e,xstyle:[j.sticker,f]}))})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometStickerPickerStickersContent.react",["CometErrorBoundary.react","CometStickerPickerSearchResult.react","CometStickerPickerStickerGrid.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){var b=a.onSelect,d=a.stickers;a=babelHelpers.objectWithoutPropertiesLoose(a,["onSelect","stickers"]);return h.jsx(c("CometStickerPickerStickerGrid.react"),babelHelpers["extends"]({},a,{children:d.map(function(a){var d=a.id,e=a.preview;a=a.sticker;return h.jsx(c("CometErrorBoundary.react"),{children:h.jsx(c("CometStickerPickerSearchResult.react"),{animationTriggers:{hover:!0,load:!1},onPress:b==null?void 0:function(a){a.preventDefault(),b({stickerID:d},e)},sticker:a})},d)})}))}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometStickerPickerRecentlyUsedStickersContentRootQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="5746878685413377"}),null);
__d("CometStickerPickerSearchResultsRootQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="6228768943912938"}),null);/*FB_PKG_DELIM*/
__d("CometFlexibleGrid.react",["react","stylex","unrecoverableViolation"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");b=d("react");var i=b.useLayoutEffect,j=b.useRef,k=b.useState,l={grid:{alignContent:"x8gbvx8",display:"x78zum5",flexDirection:"x1q0g3np",flexWrap:"x1a02dak",justifyContent:"x1nhvcw1",marginTop:"x1rdy4ex",marginEnd:"xcud41i",marginBottom:"x4vbgl9",marginStart:"x139jcc6",$$css:!0},gridJustifyCenter:{justifyContent:"xl56j7k",$$css:!0},item:{boxSizing:"x9f619",display:"x78zum5",flexBasis:"x1r8uery",flexDirection:"xdt5ytf",flexGrow:"x1iyjqo2",flexShrink:"xs83m0k",paddingEnd:"x150jy0e",paddingStart:"x1e558r4",visibility:"xlshs6z",$$css:!0},itemVisible:{paddingBottom:"xjkvuk6",paddingTop:"x1iorvi4",visibility:"xnpuxes",$$css:!0}};function a(a){var b=a.columnMaxWidth,d=a.columnMinWidth,e=a.justify;e=e===void 0?"start":e;var f=a.maxItems;f=f===void 0?Infinity:f;var g=a.minItems,m=g===void 0?1:g,n=a.onTotalItemsChanged;g=a.xstyle;var o=h.Children.toArray(a.children);a=k(o.length);var p=a[0],q=a[1],r=j(null);i(function(){function a(a){a!==p&&(n&&n(a),q(a))}function b(){if(r.current!=null){var b=r.current.children;if(m<1||m>b.length){a(b.length);return}var c=b[m-1].offsetTop;for(var d=m;d<b.length;d++)if(b[d].offsetTop>c){a(d);return}a(b.length)}}b();window.addEventListener("resize",b);return function(){window.removeEventListener("resize",b)}},[b,d,m,f,p,n]);if(m>f)throw c("unrecoverableViolation")("minItems must be less than maxItems","comet_ui");a=Math.min(Math.max(m,o.length+(e!=="center"?10:0)),f);return h.jsx("div",{className:c("stylex")(l.grid,e==="center"&&l.gridJustifyCenter,g),ref:r,role:"list",children:Array(a).fill().map(function(a,e){a=o[e];var f=e<p;return h.jsx("div",{className:c("stylex")(l.item,f&&l.itemVisible),role:"listitem",style:{maxWidth:b,minWidth:d},children:f?a:null},(f=a==null?void 0:a.key)!=null?f:e)})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("FriendingCometMainTabViewLeftRailSettingsMenuQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="4450177725086416"}),null);/*FB_PKG_DELIM*/
__d("cometStickerPreview_sticker.graphql",[],(function(a,b,c,d,e,f){"use strict";a={kind:"InlineDataFragment",name:"cometStickerPreview_sticker"};e.exports=a}),null);
__d("cometStickerPreview",["CometRelay","cometStickerPreview_sticker.graphql"],(function(a,b,c,d,e,f,g){"use strict";var h;function a(a){var c;a=d("CometRelay").readInlineData(h!==void 0?h:h=b("cometStickerPreview_sticker.graphql"),a);return{animated_uri:((c=a.animated_image)==null?void 0:c.uri)!=null?a.animated_image.uri:void 0,uri:((c=a.image)==null?void 0:c.uri)!=null?a.image.uri:void 0}}g["default"]=a}),98);
__d("CometStickerPickerAvatarStickersContentRootQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="6311561695600244"}),null);