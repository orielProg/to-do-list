(this["webpackJsonpto-do-list"]=this["webpackJsonpto-do-list"]||[]).push([[0],{103:function(e,t,a){},104:function(e,t,a){},112:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(32),s=a.n(c),r=(a(103),a(13)),i=(a(104),a(85)),o=a(159),d=a(76),j=a.n(d),l=a(169),b=a(170),u=a(164),x=a(15),O=a(160),h=a(158),f=a(152),m=a(162),k=a(163),g=a(156),v=a(161),p=a(79),_=a.n(p),T=a(80),y=a.n(T),C=a(78),M=a.n(C),S=a(165),F=a(2),N=function(e){var t="dark"===e.mode?"white":"black";return Object(F.jsx)(O.a,{className:M.a.list,children:e.list.map((function(a){var c=!0===a.flag?"line-through":"",s=!0===a.flag?"solid":"";return Object(F.jsxs)(h.a,{button:!0,divider:!0,secondaryAction:Object(F.jsxs)(n.Fragment,{children:[Object(F.jsx)(v.a,{edge:"end","aria-label":"delete",onClick:e.removeTask(a),children:Object(F.jsx)(_.a,{})}),Object(F.jsx)(v.a,{edge:"end","aria-label":"edit",onClick:e.editTask(a),children:Object(F.jsx)(y.a,{})})]}),children:[Object(F.jsxs)(f.a,{role:"checkbox",onClick:e.toggleHandler(a),children:[Object(F.jsx)(m.a,{children:Object(F.jsx)(g.a,{edge:"start",checked:e.list[e.list.indexOf(a)].flag})}),Object(F.jsx)(k.a,{style:{color:t,textDecorationLine:c,textDecorationStyle:s},children:a.text},e.list.indexOf(a))]}),Object(F.jsx)(S.a,{})]},Math.random().toString())}))})},B=a(68),w=a.n(B),D=a(155),L=a(167),A=a(81),H=a.n(A),I=function(e){var t=Object(n.useState)(""),a=Object(r.a)(t,2),c=a[0],s=a[1];return Object(F.jsxs)(n.Fragment,{children:[Object(F.jsx)(D.a,{onChange:function(e){return s(e.target.value)},className:w.a.taskbar,id:"outlined-basic",label:"Write your task",variant:"outlined"}),Object(F.jsx)(L.a,{type:"submit",onClick:function(){e.addTask(c)},className:w.a.add,variant:"outlined",startIcon:Object(F.jsx)(H.a,{}),children:"Add"})]})},J=function(e){var t=Object(n.useState)([]),a=Object(r.a)(t,2),c=a[0],s=a[1];return Object(F.jsxs)(n.Fragment,{children:[Object(F.jsx)(I,{addTask:function(e){var t=Object(x.a)(c);t.push({text:e,flag:!1}),s(t)}}),Object(F.jsx)(N,{list:c,tasksList:c,toggleHandler:function(e){return function(){var t=c.indexOf(e),a=Object(x.a)(c),n=a[t].flag;a[t].flag=!n,s(a)}},removeTask:function(e){return function(){var t=c.indexOf(e),a=Object(x.a)(c);a.splice(t,1),s(a)}},mode:e.mode})]})},X=a(168),z=a(84),E=a.n(z),R=a(83),W=a.n(R),q=a(82),G=a.n(q),K=function(e){return Object(F.jsx)(X.a,{className:G.a.mode,children:Object(F.jsx)(v.a,{onClick:e.changeMode,children:"dark"===e.mode?Object(F.jsx)(W.a,{}):Object(F.jsx)(E.a,{})})})},P=function(e){return Object(F.jsxs)(l.a,{className:j.a.card,children:[Object(F.jsx)(K,{changeMode:e.changeMode,mode:e.mode}),Object(F.jsx)(b.a,{children:Object(F.jsx)(u.a,{style:{fontSize:40},children:"Today's tasks"})}),Object(F.jsx)(J,{mode:e.mode})]})};var Q=function(){var e=Object(n.useState)("dark"),t=Object(r.a)(e,2),a=t[0],c=t[1],s=Object(i.a)({palette:{mode:a}});return Object(F.jsx)(o.a,{theme:s,children:Object(F.jsx)(P,{mode:a,changeMode:function(){c("dark"===a?"light":"dark")}})})};s.a.render(Object(F.jsx)(Q,{}),document.getElementById("root"))},68:function(e,t,a){e.exports={taskbar:"TextBar_taskbar__1oXMF",add:"TextBar_add__cju93"}},76:function(e,t,a){e.exports={card:"DisplayCard_card__1mbTm"}},78:function(e,t,a){e.exports={list:"TasksList_list__1Fuh3"}},82:function(e,t,a){e.exports={mode:"ModeButton_mode__1XkRe"}}},[[112,1,2]]]);
//# sourceMappingURL=main.9bc52598.chunk.js.map