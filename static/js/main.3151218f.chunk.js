(this["webpackJsonpnotes-frontend"]=this["webpackJsonpnotes-frontend"]||[]).push([[0],{47:function(t,e,n){},49:function(t,e,n){},71:function(t,e,n){},75:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),c=n(13),o=n.n(c),s=(n(47),n(2)),i=n(22),u=n(7),l=n.n(u),p=n(12),d=n(8),f=(n(49),n(15)),j=n.n(f),b="".concat("https://note-app-backend-rajag.herokuapp.com","/notes"),v=function(){var t=Object(p.a)(l.a.mark((function t(){var e;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,j.a.get(b);case 3:return e=t.sent,t.abrupt("return",e.data.notes);case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}(),h=function(){var t=Object(p.a)(l.a.mark((function t(e){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,j.a.post(b,e);case 3:return n=t.sent,t.abrupt("return",n.data.note);case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),x=function(){var t=Object(p.a)(l.a.mark((function t(e){var n,r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n="".concat(b,"/").concat(e),t.next=4,j.a.delete(n);case 4:return r=t.sent,t.abrupt("return",r.data.reply);case 8:t.prev=8,t.t0=t.catch(0),console.error(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}(),O=function(){var t=Object(p.a)(l.a.mark((function t(e){var n,r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n="".concat(b,"/").concat(e._id),t.next=4,j.a.put(n,e);case 4:return r=t.sent,t.abrupt("return",r.data.updatedNote);case 8:t.prev=8,t.t0=t.catch(0),console.error(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}(),m=function(){var t=Object(p.a)(l.a.mark((function t(e){var n,r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n="".concat(b,"/").concat(e._id),t.next=4,j.a.put(n,e);case 4:return r=t.sent,t.abrupt("return",r.data.updatedNote);case 8:t.prev=8,t.t0=t.catch(0),console.error(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}(),k=n(23),w=n(24),g=(n(71),n(1)),_=function(t){var e=t.note,n=t.onNoteUpdate,a=t.onNoteDelete,c=t.toggleHandler,o=t.isPinned,i=Object(r.useState)(!1),u=Object(d.a)(i,2),l=u[0],p=u[1],f=Object(s.a)(Object(s.a)({},e),{},{pinned:!e.pinned});return Object(g.jsxs)("div",{className:l?"note note--focused":"note",children:[Object(g.jsxs)("div",{className:"note__tools",children:[Object(g.jsx)("a",{className:"link",target:"_blank",rel:"noreferrer",href:e.link,children:Object(g.jsx)(k.a,{icon:w.a})}),Object(g.jsx)("button",{onClick:function(){c(e)},children:Object(g.jsx)(k.a,{icon:w.b})})]}),Object(g.jsx)("button",{onClick:function(){o(f)},className:e.pinned?"note__pin note__pinned":"note__pin",children:Object(g.jsx)(k.a,{icon:w.c})}),Object(g.jsx)("button",{onClick:function(){a(e)},type:"button",className:"btn-close","aria-label":"Close"}),Object(g.jsx)("div",{onBlur:function(t){p(!1);var r=t.currentTarget.textContent;if(r!==e.text){var a=Object(s.a)(Object(s.a)({},e),{},{text:r||""});n(a)}},onFocus:function(){p(!0)},contentEditable:!0,suppressContentEditableWarning:!0,className:"note__text",children:e.text})]})},y=n(80),N=n(78),C=n(41),A=n(79);var E=function(){var t;!function(t){t[t.Add=0]="Add",t[t.Edit=1]="Edit"}(t||(t={}));var e=Object(r.useState)([]),n=Object(d.a)(e,2),a=n[0],c=n[1],o=Object(r.useState)(!1),u=Object(d.a)(o,2),f=u[0],j=u[1],b=Object(r.useState)(t.Add),k=Object(d.a)(b,2),w=k[0],E=k[1],T=function(){I({link:"",text:"",pinned:!1}),j(!1)},S=function(e){I(e),E(t.Edit),j(!0)},F=Object(r.useState)({link:"",text:"",pinned:!1}),B=Object(d.a)(F,2),H=B[0],I=B[1];Object(r.useEffect)((function(){L()}),[]);var L=function(){var t=Object(p.a)(l.a.mark((function t(){var e,n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v();case 2:e=t.sent,n=e.sort((function(t){return t.pinned?-1:1})),c(n);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),P=function(){var t=Object(p.a)(l.a.mark((function t(e){var n,r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O(e);case 2:n=t.sent,r=a.map((function(t){return t._id===n._id?n:t})),c(r);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),U=function(){var t=Object(p.a)(l.a.mark((function t(){var e;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h(H);case 2:e=t.sent,c([].concat(Object(i.a)(a),[e])),T();case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),D=function(){var t=Object(p.a)(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:P(H),j(!1);case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),J=function(){var t=Object(p.a)(l.a.mark((function t(e){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x(e._id);case 2:n=a.filter((function(t){return t._id!==e._id})),c(n);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),M=function(){var t=Object(p.a)(l.a.mark((function t(e){var n,r,o;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m(e);case 2:n=t.sent,r=a.map((function(t){return t._id===n._id?n:t})),o=r.sort((function(t){return t.pinned?-1:1})),c(o);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(g.jsxs)("div",{className:"App",children:[Object(g.jsx)("div",{className:"t1-main",children:"Notes Application"}),Object(g.jsx)(y.a,{variant:"dark",className:"add-button",onClick:function(){E(t.Add),j(!0)},children:"+"}),Object(g.jsxs)(N.a,{show:f,onHide:T,children:[Object(g.jsx)(N.a.Header,{closeButton:!0,children:Object(g.jsxs)(N.a.Title,{children:[w===t.Add?"Add":"Edit"," Note"]})}),Object(g.jsxs)(N.a.Body,{children:[Object(g.jsx)(C.a,{controlId:"floatingTextarea2",label:"Text",children:Object(g.jsx)(A.a.Control,{onChange:function(t){var e=t.currentTarget.value;I(Object(s.a)(Object(s.a)({},H),{},{text:e}))},as:"textarea",value:H.text,placeholder:"Leave a comment here",style:{height:"100px"}})}),Object(g.jsx)(C.a,{controlId:"floatingTextarea",label:"Link",className:"mb-3 note-link",children:Object(g.jsx)(A.a.Control,{onChange:function(t){var e=t.currentTarget.value;I(Object(s.a)(Object(s.a)({},H),{},{link:e}))},placeholder:"Enter note Url",type:"url",value:H.link})})]}),Object(g.jsxs)(N.a.Footer,{children:[Object(g.jsx)(y.a,{variant:"secondary",onClick:T,children:"Close"}),Object(g.jsx)(y.a,{variant:"primary",onClick:w===t.Add?U:D,children:w===t.Add?"Create":"Update"})]})]}),Object(g.jsx)("div",{className:"notes-list",children:a.map((function(t,e){return Object(g.jsx)(_,{note:t,onNoteUpdate:P,onNoteDelete:J,toggleHandler:S,isPinned:M},e)}))})]})},T=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,81)).then((function(e){var n=e.getCLS,r=e.getFID,a=e.getFCP,c=e.getLCP,o=e.getTTFB;n(t),r(t),a(t),c(t),o(t)}))};n(73),n(74);o.a.render(Object(g.jsx)(a.a.StrictMode,{children:Object(g.jsx)(E,{})}),document.getElementById("root")),T()}},[[75,1,2]]]);
//# sourceMappingURL=main.3151218f.chunk.js.map