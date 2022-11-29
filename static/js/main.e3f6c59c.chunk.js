(this["webpackJsonpreact_dynamic-list-of-posts"]=this["webpackJsonpreact_dynamic-list-of-posts"]||[]).push([[0],{18:function(e,t,c){},20:function(e,t,c){},21:function(e,t,c){"use strict";c.r(t);var s=c(9),a=c.n(s),n=c(5),i=c(2),r=c(3),l=c.n(r),o=c(1),d=(c(16),c(17),c(18),c(4)),j=c.n(d),u=c(0),b=function(e){var t=e.user,c=e.posts,s=e.isSidebar,a=e.setIsSidebar,n=e.selectedPost,i=e.setSelectedPost,r=Object(o.useCallback)((function(e){if(n&&e.id===n.id)return i(null),void a(!1);i(e),a(!0)}),[s,n]);return Object(u.jsx)(u.Fragment,{children:t&&Object(u.jsxs)("div",{"data-cy":"PostsList",children:[Object(u.jsx)("p",{className:"title",children:"Posts:"}),Object(u.jsxs)("table",{className:"table is-fullwidth is-striped is-hoverable is-narrow",children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{className:"has-background-link-light",children:[Object(u.jsx)("th",{children:"#"}),Object(u.jsx)("th",{children:"Title"}),Object(u.jsx)("th",{children:" "})]})}),Object(u.jsx)("tbody",{children:c.map((function(e){return Object(u.jsxs)("tr",{"data-cy":"Post",children:[Object(u.jsx)("td",{"data-cy":"PostId",children:e.id}),Object(u.jsx)("td",{"data-cy":"PostTitle",children:e.title}),Object(u.jsx)("td",{className:"has-text-right is-vcentered",children:Object(u.jsx)("button",{type:"button","data-cy":"PostButton",className:"button is-link is-light",onClick:function(){r(e)},children:n&&n.id===e.id?"Close":"Open"})})]},e.id)}))})]})]})})},m=c(10),h="https://mate.academy/students-api/";function O(e){return new Promise((function(t){setTimeout(t,e)}))}function x(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,s={method:t};return c&&(s.body=JSON.stringify(c),s.headers={"Content-Type":"application/json; charset=UTF-8"}),O(300).then((function(){return fetch(h+e,s)})).then((function(e){return e.json()}))}var f=function(e){return x(e)},p=function(e,t){return x(e,"POST",t)},v=function(e){return x(e,"DELETE")},N=(c(20),function(){return Object(u.jsx)("div",{className:"Loader","data-cy":"Loader",children:Object(u.jsx)("div",{className:"Loader__content"})})}),y=function(e){var t=e.handleAddComment,c=Object(o.useState)(""),s=Object(i.a)(c,2),a=s[0],n=s[1],r=Object(o.useState)(!1),l=Object(i.a)(r,2),d=l[0],b=l[1],m=Object(o.useState)(""),h=Object(i.a)(m,2),O=h[0],x=h[1],f=Object(o.useState)(!1),p=Object(i.a)(f,2),v=p[0],N=p[1],y=Object(o.useState)(""),g=Object(i.a)(y,2),k=g[0],C=g[1],S=Object(o.useState)(!1),w=Object(i.a)(S,2),P=w[0],E=w[1],I=Object(o.useState)(!1),T=Object(i.a)(I,2),F=T[0],U=T[1],A=Object(o.useCallback)((function(e){n(e.target.value),b(!1)}),[a]),L=Object(o.useCallback)((function(e){x(e.target.value),N(!1)}),[O]),B=Object(o.useCallback)((function(e){C(e.target.value),E(!1)}),[k]),D=Object(o.useCallback)((function(e){e.preventDefault(),b(0===a.length),N(0===O.length),E(0===k.length),0!==a.length&&0!==O.length&&0!==k.length&&(U(!0),t(a,O,k),U(!1),C(""))}),[a,O,k]),M=Object(o.useCallback)((function(){n(""),x(""),C(""),b(!1),N(!1),E(!1)}),[]);return Object(u.jsxs)("form",{"data-cy":"NewCommentForm",onSubmit:D,children:[Object(u.jsxs)("div",{className:"field","data-cy":"NameField",children:[Object(u.jsx)("label",{className:"label",htmlFor:"comment-author-name",children:"Author Name"}),Object(u.jsxs)("div",{className:"control has-icons-left has-icons-right",children:[Object(u.jsx)("input",{type:"text",name:"name",id:"comment-author-name",placeholder:"Name Surname",className:j()("input",{"is-danger":d}),value:a,onChange:function(e){return A(e)}}),Object(u.jsx)("span",{className:"icon is-small is-left",children:Object(u.jsx)("i",{className:"fas fa-user"})}),d&&Object(u.jsx)("span",{className:"icon is-small is-right has-text-danger","data-cy":"ErrorIcon",children:Object(u.jsx)("i",{className:"fas fa-exclamation-triangle"})})]}),d&&Object(u.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Name is required"})]}),Object(u.jsxs)("div",{className:"field","data-cy":"EmailField",children:[Object(u.jsx)("label",{className:"label",htmlFor:"comment-author-email",children:"Author Email"}),Object(u.jsxs)("div",{className:"control has-icons-left has-icons-right",children:[Object(u.jsx)("input",{type:"text",name:"email",id:"comment-author-email",placeholder:"email@test.com",className:j()("input",{"is-danger":v}),value:O,onChange:function(e){return L(e)}}),Object(u.jsx)("span",{className:"icon is-small is-left",children:Object(u.jsx)("i",{className:"fas fa-envelope"})}),v&&Object(u.jsx)("span",{className:"icon is-small is-right has-text-danger","data-cy":"ErrorIcon",children:Object(u.jsx)("i",{className:"fas fa-exclamation-triangle"})})]}),v&&Object(u.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Email is required"})]}),Object(u.jsxs)("div",{className:"field","data-cy":"BodyField",children:[Object(u.jsx)("label",{className:"label",htmlFor:"comment-body",children:"Comment Text"}),Object(u.jsx)("div",{className:"control",children:Object(u.jsx)("textarea",{id:"comment-body",name:"body",placeholder:"Type comment here",className:j()("textarea",{"is-danger":P}),value:k,onChange:function(e){return B(e)}})}),P&&Object(u.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Enter some text"})]}),Object(u.jsxs)("div",{className:"field is-grouped",children:[Object(u.jsx)("div",{className:"control",children:Object(u.jsx)("button",{type:"submit",className:j()("button","is-link",{"is-loading":F}),children:"Add"})}),Object(u.jsx)("div",{className:"control",children:Object(u.jsx)("button",{type:"reset",className:"button is-link is-light",onClick:M,children:"Clear"})})]})]})},g=function(e){var t=e.post,c=e.getUser,s=Object(o.useState)([]),a=Object(i.a)(s,2),r=a[0],d=a[1],j=Object(o.useState)(!1),b=Object(i.a)(j,2),h=b[0],O=b[1],x=Object(o.useState)(!1),g=Object(i.a)(x,2),k=g[0],C=g[1],S=Object(o.useState)(!1),w=Object(i.a)(S,2),P=w[0],E=w[1],I=Object(o.useCallback)(function(){var e=Object(n.a)(l.a.mark((function e(t){var c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,E(!1),O(!0),e.next=5,f("comments");case 5:c=e.sent,d(c.filter((function(e){return e.postId===t}))),O(!1),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),C(!0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),[r]),T=Object(o.useCallback)(function(){var e=Object(n.a)(l.a.mark((function e(c,s,a){var n,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={postId:t&&t.id||1,id:r.reduce((function(e,t){return e>t.id?e:t.id}),0)+1,name:c,email:s,body:a},e.next=3,p("comments",n);case 3:i=e.sent,d((function(e){return[].concat(Object(m.a)(e),[i])}));case 5:case"end":return e.stop()}}),e)})));return function(t,c,s){return e.apply(this,arguments)}}(),[r]),F=Object(o.useCallback)(function(){var e=Object(n.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d((function(e){return e.filter((function(e){return e.id!==t}))})),e.next=3,v("comments/".concat(t));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[r]);return Object(o.useEffect)((function(){t&&I(t.id)}),[t]),Object(u.jsx)("div",{className:"content","data-cy":"PostDetails",children:Object(u.jsxs)("div",{className:"content","data-cy":"PostDetails",children:[Object(u.jsxs)("div",{className:"block",children:[Object(u.jsx)("h2",{"data-cy":"PostTitle",children:t&&"#".concat(t.id,": ").concat(t.title)}),Object(u.jsx)("p",{"data-cy":"PostBody",children:t&&t.body})]}),Object(u.jsxs)("div",{className:"block",children:[h&&Object(u.jsx)(N,{}),k&&Object(u.jsx)("div",{className:"notification is-danger","data-cy":"CommentsError",children:"Something went wrong"}),!r.length&&Object(u.jsx)("p",{className:"title is-4","data-cy":"NoCommentsMessage",children:"No comments yet"}),0===r.length&&Object(u.jsx)("p",{className:"title is-4",children:"Comments:"}),0!==r.length&&r.map((function(e){return Object(u.jsxs)("article",{className:"message is-small","data-cy":"Comment",children:[Object(u.jsxs)("div",{className:"message-header",children:[Object(u.jsx)("a",{href:"mailto:".concat(e.email),"data-cy":"CommentAuthor",children:c(e.email)}),Object(u.jsx)("button",{"data-cy":"CommentDelete",type:"button",className:"delete is-small","aria-label":"delete",onClick:function(){return F(e.id)},children:"delete button"})]}),Object(u.jsx)("div",{className:"message-body","data-cy":"CommentBody",children:e.body})]},e.id)})),Object(u.jsx)("button",{"data-cy":"WriteCommentButton",type:"button",className:"button is-link",onClick:function(){return E(P||!P)},children:"Write a comment"})]}),P&&Object(u.jsx)(y,{handleAddComment:T})]})})},k=function(e){var t=e.users,c=e.activeUser,s=e.setActiveUser,a=e.getPostList,n=e.setIsSidebar,r=Object(o.useState)(!1),l=Object(i.a)(r,2),d=l[0],b=l[1],m=Object(o.useCallback)((function(e,t){e.preventDefault(),s(t),b(!d),a(t),n(!1)}),[c,d]),h=Object(o.useCallback)((function(){b(!d)}),[d]);return Object(u.jsxs)("div",{"data-cy":"UserSelector",className:"dropdown is-active",children:[Object(u.jsx)("div",{className:"dropdown-trigger",children:Object(u.jsxs)("button",{type:"button",className:"button","aria-haspopup":"true","aria-controls":"dropdown-menu",onClick:h,children:[Object(u.jsx)("span",{children:c&&c.name||"Choose a user"}),Object(u.jsx)("span",{className:"icon is-small",children:Object(u.jsx)("i",{className:"fas fa-angle-down","aria-hidden":"true"})})]})}),d&&Object(u.jsx)("div",{className:"dropdown-menu",id:"dropdown-menu",role:"menu",children:Object(u.jsx)("div",{className:"dropdown-content",children:t.map((function(e){return Object(u.jsx)("a",{href:"#user-".concat(e.id),className:j()("dropdown-item",{"is-active":c&&e.id===c.id}),onClick:function(t){m(t,e)},children:e.name},e.id)}))})})]})},C=function(){var e=Object(o.useState)([]),t=Object(i.a)(e,2),c=t[0],s=t[1],a=Object(o.useState)(null),r=Object(i.a)(a,2),d=r[0],m=r[1],h=Object(o.useState)(!0),O=Object(i.a)(h,2),x=O[0],p=O[1],v=Object(o.useState)(!1),y=Object(i.a)(v,2),C=y[0],S=y[1],w=Object(o.useState)(!1),P=Object(i.a)(w,2),E=P[0],I=P[1],T=Object(o.useState)([]),F=Object(i.a)(T,2),U=F[0],A=F[1],L=Object(o.useState)(!1),B=Object(i.a)(L,2),D=B[0],M=B[1],_=Object(o.useState)(null),J=Object(i.a)(_,2),q=J[0],W=J[1],G=Object(o.useCallback)(Object(n.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f("users");case 3:t=e.sent,s(t),p(!1),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),S(!0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])}))),[c]),Y=Object(o.useCallback)(function(){var e=Object(n.a)(l.a.mark((function e(t){var c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,p(!0),e.next=4,f("posts");case 4:c=e.sent,A(c.filter((function(e){return e.userId===t.id}))),p(!1),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),I(!0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),[U]),z=Object(o.useCallback)((function(e){var t=c.find((function(t){return t.email===e}));return void 0===t?"":t.name}),[q]);return Object(o.useEffect)((function(){G()}),[]),Object(u.jsx)("main",{className:"section",children:Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)("div",{className:"tile is-ancestor",children:[Object(u.jsx)("div",{className:"tile is-parent",children:Object(u.jsxs)("div",{className:"tile is-child box is-success",children:[Object(u.jsx)("div",{className:"block",children:Object(u.jsx)(k,{users:c,activeUser:d,setActiveUser:m,getPostList:Y,setIsSidebar:M})}),Object(u.jsxs)("div",{className:"block","data-cy":"MainContent",children:[Object(u.jsx)("p",{"data-cy":"NoSelectedUser",children:!d&&"No user selected"}),x&&!C&&!E&&Object(u.jsx)(N,{}),(C||E)&&Object(u.jsx)("div",{className:"notification is-danger","data-cy":"PostsLoadingError",children:"Something went wrong!"}),d&&0===U.length&&Object(u.jsx)("div",{className:"notification is-warning","data-cy":"NoPostsYet",children:"No posts yet"}),Object(u.jsx)(b,{user:d,posts:U,isSidebar:D,setIsSidebar:M,selectedPost:q,setSelectedPost:W})]})]})}),Object(u.jsx)("div",{"data-cy":"Sidebar",className:j()("tile","is-parent","is-8-desktop","Sidebar",{"Sidebar--open":D}),children:Object(u.jsx)("div",{className:"tile is-child box is-success ",children:Object(u.jsx)(g,{post:q,getUser:z})})})]})})})};a.a.render(Object(u.jsx)(C,{}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.e3f6c59c.chunk.js.map