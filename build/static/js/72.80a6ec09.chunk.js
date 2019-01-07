(window.webpackJsonp=window.webpackJsonp||[]).push([[72,126,127,128,129],{1028:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(37);function i(){var e=Object(l.a)(["\n  padding: 40px 20px;\n  display: flex;\n  flex-flow: row wrap;\n  overflow: hidden;\n\n  @media only screen and (max-width: 767px) {\n    padding: 50px 20px;\n  }\n\n  @media (max-width: 580px) {\n    padding: 15px;\n  }\n"]);return i=function(){return e},e}var c=n(30).b.div(i());t.default=function(e){return r.a.createElement(c,Object.assign({className:null!=e.className?"".concat(e.className," isoLayoutContentWrapper"):"isoLayoutContentWrapper"},e),e.children)}},1029:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(37),i=n(30),c=n(7);function o(){var e=Object(l.a)(["\n  font-size: 13px;\n  font-weight: 400;\n  color: ",";\n  line-height: 24px;\n"]);return o=function(){return e},e}function m(){var e=Object(l.a)(["\n  font-size: 14px;\n  font-weight: 500;\n  color: ",";\n  margin: 0;\n  margin-bottom: 5px;\n"]);return m=function(){return e},e}var u=i.b.h3(m(),Object(c.palette)("text",0)),s=i.b.p(o(),Object(c.palette)("text",3)),d=function(e){return r.a.createElement("div",null,e.title?r.a.createElement(u,{className:"isoBoxTitle"}," ",e.title," "):"",e.subtitle?r.a.createElement(s,{className:"isoBoxSubTitle"}," ",e.subtitle," "):"")};function p(){var e=Object(l.a)(["\n  width: 100%;\n  height: 100%;\n  padding: 20px;\n  background-color: #ffffff;\n  border: 1px solid ",";\n  margin: 0 0 30px;\n\n  &:last-child {\n    margin-bottom: 0;\n  }\n\n  @media only screen and (max-width: 767px) {\n    padding: 20px;\n    ",";\n  }\n\n  &.half {\n    width: calc(50% - 34px);\n    @media (max-width: 767px) {\n      width: 100%;\n    }\n  }\n"]);return p=function(){return e},e}var f=i.b.div(p(),Object(c.palette)("border",0),"");t.default=function(e){return r.a.createElement(f,{className:"".concat(e.className," isoBoxWrapper"),style:e.style},r.a.createElement(d,{title:e.title,subtitle:e.subtitle}),e.children)}},1032:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(37),i=n(30),c=n(7),o=n(45);function m(){var e=Object(l.a)(["\n  font-size: 19px;\n  font-weight: 500;\n  color: ",";\n  width: 100%;\n  margin-right: 17px;\n  margin-bottom: 30px;\n  display: flex;\n  align-items: center;\n  white-space: nowrap;\n\n  @media only screen and (max-width: 767px) {\n    margin: 0 10px;\n    margin-bottom: 30px;\n  }\n\n  &:before {\n    content: '';\n    width: 5px;\n    height: 40px;\n    background-color: ",";\n    display: flex;\n    margin: ",";\n  }\n\n  &:after {\n    content: '';\n    width: 100%;\n    height: 1px;\n    background-color: ",";\n    display: flex;\n    margin: ",";\n  }\n"]);return m=function(){return e},e}var u=i.b.h1(m(),Object(c.palette)("secondary",2),Object(c.palette)("secondary",3),function(e){return"rtl"===e["data-rtl"]?"0 0 0 15px":"0 15px 0 0"},Object(c.palette)("secondary",3),function(e){return"rtl"===e["data-rtl"]?"0 15px 0 0":"0 0 0 15px"}),s=Object(o.a)(u);t.default=function(e){return r.a.createElement(s,{className:"isoComponentTitle"},e.children)}},1033:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(37),i=n(30),c=n(7),o=n(45);function m(){var e=Object(l.a)(["\n  margin-top: 30px;\n  -webkit-overflow-scrolling: touch;\n\n  .demoBtn {\n    margin-right: ",";\n    margin-left: ",";\n  }\n\n  .demoBtnsWrapper {\n    &:nth-child(1) {\n      margin-left: ",";\n      margin-right: ",";\n      white-space: nowrap;\n    }\n\n    &:nth-child(2) {\n      width: 70px;\n      float: ",";\n    }\n\n    &:nth-child(3) {\n      width: 70px;\n      margin-left: ",";\n      margin-right: ",";\n    }\n\n    &:nth-child(4) {\n      margin-left: ",";\n      margin-right: ",";\n      clear: both;\n      white-space: nowrap;\n    }\n\n    @media only screen and (max-width: 480px) {\n      margin-left: ",";\n      white-space: nowrap;\n      margin-right: ",";\n      float: none !important;\n    }\n\n    .demoPosBtn {\n      width: 70px;\n      margin-right: ",";\n      margin-left: ",";\n      margin-bottom: 8px;\n      padding: 0;\n\n      @media only screen and (max-width: 480px) {\n        width: 65px;\n      }\n    }\n  }\n\n  .ant-btn {\n    &:not(.demoPosBtn) {\n      &:last-child {\n        margin-right: 0;\n      }\n    }\n  }\n\n  .tooltipBtn {\n    display: inline-block;\n    line-height: 32px;\n    height: 32px;\n    width: 70px;\n    font-size: 14px;\n    text-align: center;\n    background: ",";\n    margin-right: ",";\n    margin-left: ",";\n    margin-bottom: 6px;\n    border-radius: 6px;\n  }\n\n  .ant-progress {\n    &.ant-progress-circle {\n      margin-right: ",";\n      margin-left: ",";\n\n      &:last-child {\n        margin-right: ",";\n        margin-left: ",";\n      }\n    }\n  }\n\n  strong {\n    font-weight: 700;\n    font-size: 14px;\n  }\n"]);return m=function(){return e},e}var u=i.b.div(m(),function(e){return"rtl"===e["data-rtl"]?"0":"10px"},function(e){return"rtl"===e["data-rtl"]?"10px":"0"},function(e){return"rtl"===e["data-rtl"]?"0":"70px"},function(e){return"rtl"===e["data-rtl"]?"70px":"0"},function(e){return"rtl"===e["data-rtl"]?"right":"left"},function(e){return"rtl"===e["data-rtl"]?"0":"295px"},function(e){return"rtl"===e["data-rtl"]?"295px":"0"},function(e){return"rtl"===e["data-rtl"]?"0":"70px"},function(e){return"rtl"===e["data-rtl"]?"70px":"0"},function(e){return"rtl"===e["data-rtl"]?"8px":"0 !important"},function(e){return"rtl"===e["data-rtl"]?"0 !important":"8px"},function(e){return"rtl"===e["data-rtl"]?"0":"8px"},function(e){return"rtl"===e["data-rtl"]?"8px":"0"},Object(c.palette)("secondary",1),function(e){return"rtl"===e["data-rtl"]?"auto":"6px"},function(e){return"rtl"===e["data-rtl"]?"6px":"0"},function(e){return"rtl"===e["data-rtl"]?"0":"15px"},function(e){return"rtl"===e["data-rtl"]?"15px":"0"},function(e){return e["data-rtl"],"0"},function(e){return e["data-rtl"],"0"}),s=Object(o.a)(u);t.default=function(e){return r.a.createElement(s,{className:"isoExampleWrapper",style:e.style},e.children)}},1034:function(e,t,n){"use strict";var a={rowStyle:{width:"100%",display:"flex",flexFlow:"row wrap"},colStyle:{marginBottom:"16px"},gutter:16};t.a=a},2744:function(e,t,n){"use strict";n.r(t);var a=n(20),r=n(21),l=n(26),i=n(27),c=n(28),o=n(0),m=n.n(o),u=n(33),s=n(34),d=n(32),p=n(1032),f=n(1029),x=n(1028),h=n(1033),g=n(1034),E=n(29),b=n(2738),w=n(37),v=n(30),y=n(7);function j(){var e=Object(w.a)(["\n  &.ant-timeline {\n    .ant-timeline-item-content {\n      font-size: 13px;\n      color: ",";\n      padding: ",";\n    }\n    .ant-timeline-item-tail {\n      left: ",";\n      right: ",";\n    }\n    .ant-timeline-item-head-custom {\n      left: ",";\n      right: ",";\n    }\n  }\n"]);return j=function(){return e},e}var O=function(e){return Object(v.b)(e)(j(),Object(y.palette)("text",3),function(e){return"rtl"===e["data-rtl"]?"0 24px 10px 0":"0 0 10px 24px"},function(e){return"rtl"===e["data-rtl"]?"inherit":"4px"},function(e){return"rtl"===e["data-rtl"]?"4px":"inherit"},function(e){return"rtl"===e["data-rtl"]?"inherit":"5px"},function(e){return"rtl"===e["data-rtl"]?"5px":"inherit"})},k=n(45),S=O(b.a),N=O(b.a.Item),C=Object(k.a)(N),T=Object(k.a)(S);n.d(t,"default",function(){return B});var B=function(e){function t(){return Object(a.a)(this,t),Object(l.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=g.a.rowStyle,t=g.a.colStyle,n=g.a.gutter;return m.a.createElement(x.default,null,m.a.createElement(p.default,null,m.a.createElement(E.a,{id:"uiElements.timeline.timeline"})),m.a.createElement(u.a,{style:e,gutter:n,justify:"start"},m.a.createElement(s.a,{md:12,sm:12,xs:24,style:t},m.a.createElement(f.default,{title:m.a.createElement(E.a,{id:"uiElements.timeline.basicExample"}),subtitle:m.a.createElement(E.a,{id:"uiElements.timeline.basicTimeline"})},m.a.createElement(h.default,null,m.a.createElement(T,null,m.a.createElement(C,null,m.a.createElement(E.a,{id:"uiElements.timeline.createServiceSite"})),m.a.createElement(C,null,m.a.createElement(E.a,{id:"uiElements.timeline.solveInitialNetwork"})),m.a.createElement(C,null,m.a.createElement(E.a,{id:"uiElements.timeline.technicalTesting"})),m.a.createElement(C,null,m.a.createElement(E.a,{id:"uiElements.timeline.networkProblemSolved"})))))),m.a.createElement(s.a,{md:12,sm:12,xs:24,style:t},m.a.createElement(f.default,{title:m.a.createElement(E.a,{id:"uiElements.timeline.colorExample"}),subtitle:m.a.createElement(E.a,{id:"uiElements.timeline.colorExampleContent"})},m.a.createElement(h.default,null,m.a.createElement(T,null,m.a.createElement(C,{color:"green"},"Create a services site 2015-09-01"),m.a.createElement(C,{color:"green"},"Create a services site 2015-09-01"),m.a.createElement(C,{color:"red"},m.a.createElement("p",null,"Solve initial network problems 1"),m.a.createElement("p",null,"Solve initial network problems 2"),m.a.createElement("p",null,"Solve initial network problems 3 2015-09-01")),m.a.createElement(C,null,m.a.createElement("p",null,"Technical testing 1"),m.a.createElement("p",null,"Technical testing 2"),m.a.createElement("p",null,"Technical testing 3 2015-09-01"))))))),m.a.createElement(u.a,{style:e,gutter:n,justify:"start"},m.a.createElement(s.a,{md:12,sm:12,xs:24,style:t},m.a.createElement(f.default,{title:m.a.createElement(E.a,{id:"uiElements.timeline.custom"}),subtitle:m.a.createElement(E.a,{id:"uiElements.timeline.customContent"})},m.a.createElement(h.default,null,m.a.createElement(T,null,m.a.createElement(C,null,"Create a services site 2015-09-01"),m.a.createElement(C,null,"Solve initial network problems 2015-09-01"),m.a.createElement(C,{dot:m.a.createElement(d.a,{type:"clock-circle-o",style:{fontSize:"16px"}}),color:"red"},"Technical testing 2015-09-01"),m.a.createElement(C,null,"Network problems being solved 2015-09-01"))))),m.a.createElement(s.a,{md:12,sm:12,xs:24,style:t},m.a.createElement(f.default,{title:m.a.createElement(E.a,{id:"uiElements.timeline.lastNode"}),subtitle:m.a.createElement(E.a,{id:"uiElements.timeline.lastNodeContent"})},m.a.createElement(h.default,null,m.a.createElement(T,{pending:m.a.createElement("a",{href:"# "},m.a.createElement(E.a,{id:"uiElements.timeline.seeMore"}))},m.a.createElement(C,null,"Create a services site 2015-09-01"),m.a.createElement(C,null,"Solve initial network problems 2015-09-01"),m.a.createElement(C,null,"Technical testing 2015-09-01")))))))}}]),t}(o.Component)}}]);
//# sourceMappingURL=72.80a6ec09.chunk.js.map