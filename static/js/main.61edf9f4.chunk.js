(this.webpackJsonpinstagram=this.webpackJsonpinstagram||[]).push([[0],{81:function(e,t,a){},82:function(e,t,a){},90:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),c=a(10),r=a.n(c),i=(a(81),a(82),a(26)),o=a(16),l=a(17),j=a(19),h=a(18),u=a(67),b=a(25),d=a(2),p=function(e){Object(j.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={count:!1},n.handleChange=n.handleChange.bind(Object(b.a)(n)),n}return Object(l.a)(a,[{key:"handleChange",value:function(e){e.preventDefault(),this.setState((function(e){return{count:!e.count}}))}},{key:"render",value:function(){return this.state.count?Object(d.jsx)("div",{children:Object(d.jsxs)("form",{Name:"",Method:"",Action:"",children:[Object(d.jsx)("input",{className:"size2",Name:"IB1",type:"image",src:"https://cdn.vox-cdn.com/thumbor/Tu7MTsyg34xe7ihpFiNsxvmazvk=/0x0:640x426/1400x1400/filters:focal(269x162:371x264):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/51868653/like.0.jpeg",alt:"",onClick:this.handleChange}),Object(d.jsxs)("h3",{className:"Message",children:[" You ",this.state.count," liked this "]})]})}):Object(d.jsx)("div",{children:Object(d.jsxs)("form",{Name:"",Method:"",Action:"",children:[Object(d.jsx)("input",{className:"size2",Name:"IB1",type:"image",src:"https://cdn.vox-cdn.com/thumbor/Tu7MTsyg34xe7ihpFiNsxvmazvk=/0x0:640x426/1400x1400/filters:focal(269x162:371x264):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/51868653/like.0.jpeg",alt:"",onClick:this.handleChange}),Object(d.jsxs)("h3",{className:"Message",children:[" Nobody likes this yet ",this.state.count,"  "]})]})})}}]),a}(s.a.Component),O=a(120),m=a(131),x=function(e){Object(j.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={input:"",submit:""},n.handleClick=n.handleClick.bind(Object(b.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(b.a)(n)),n}return Object(l.a)(a,[{key:"handleClick",value:function(e){this.setState({input:e.target.value})}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.setState({submit:this.state.input})}},{key:"render",value:function(){var e;return Object(d.jsx)("div",{children:Object(d.jsxs)("form",{Name:"",Method:"",Action:"",onSubmit:this.handleSubmit,children:[Object(d.jsxs)("p",{children:[" ",this.state.submit," "]}),Object(d.jsx)(O.a,{className:"buttonStyle",variant:"contained",color:"primary",type:"submit",children:" Add  "}),Object(d.jsx)(m.a,(e={id:!0,className:"commentBar"},Object(i.a)(e,"id","Comment"),Object(i.a)(e,"label","Add Comment"),Object(i.a)(e,"value",this.state.input),Object(i.a)(e,"onChange",this.handleClick),e))]})})}}]),a}(s.a.Component),v=function(e){Object(j.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleChange=function(e){n.setState({option:e.target.value})},n.handleSubmit=function(e){alert(n.state.option),e.preventDefault()},n.state={option:"reported"},n.handleChange=n.handleChange.bind(Object(b.a)(n)),n}return Object(l.a)(a,[{key:"render",value:function(){return Object(d.jsx)("form",{onSubmit:this.handleSubmit,children:Object(d.jsxs)("div",{children:[Object(d.jsxs)("select",{className:"Labels",value:this.state.option,onChange:this.handleChange,children:[Object(d.jsx)("option",{value:"reported",children:"Report"}),Object(d.jsx)("option",{value:"You are not following this user anymore",children:" Stop Following"}),Object(d.jsx)("option",{value:"Go to post",children:"Go to post"})]}),Object(d.jsx)("button",{Type:"submit",children:" Submit"})]})})}}]),a}(s.a.Component),g=a(124),f=a(125),C=a(134),S=a(126),y=a(127),k=a(128),N=a(50),w=a(129),F=a(49),M=a(132),_=a(64),A=a.n(_),D=a(65),P=a.n(D),T=a(66),E=a.n(T);a(4);var I=function(){var e=[{avatar:Object(d.jsx)("img",{src:"https://i.blogs.es/d13b4e/hollowknight/840_560.jpeg",alt:""}),username:"Johan_69",posts:Object(d.jsx)("img",{className:"size",src:"https://lov.do/wp-content/uploads/2020/04/landscape-mountains-sky-4843193.jpg"})}];return Object(d.jsx)("div",{children:e.map((function(e){return Object(d.jsxs)("div",{children:[Object(d.jsxs)("h2",{children:[" ",e.username," "]}),Object(d.jsx)("h3",{children:"Posts"}),e.posts]})}))})};var W=function(){var e=[{avatar:Object(d.jsx)("img",{src:"https://i.blogs.es/d13b4e/hollowknight/840_560.jpeg",alt:""}),username:"Manuel_14",posts:Object(d.jsx)("img",{className:"size",src:"https://i.blogs.es/d13b4e/hollowknight/840_560.jpeg"})}];return Object(d.jsx)("div",{children:e.map((function(e){return Object(d.jsxs)("div",{children:[Object(d.jsxs)("h2",{children:[" ",e.username," "]}),Object(d.jsx)("h3",{children:"Posts of Manuel "}),e.posts]})}))})},z=Object(M.a)((function(e){return{root:{maxWidth:345},media:{height:200,paddingTop:"56.25%"},expandOpen:{transform:"rotate(180deg)"},avatar:{backgroundColor:F.a[500]}}}));var B=function(e){var t=z(),a=s.a.useState(!1),n=Object(u.a)(a,2);return n[0],n[1],Object(d.jsx)("div",{children:Object(d.jsxs)("div",{children:[Object(d.jsxs)(g.a,{className:t.root,children:[Object(d.jsx)(f.a,{avatar:Object(d.jsx)(C.a,{"aria-label":"recipe",className:t.avatar,children:e.avatar}),action:Object(d.jsx)(S.a,{"aria-label":"settings",children:Object(d.jsx)(A.a,{})}),title:e.username,subheader:"September 14, 2016"}),Object(d.jsx)(y.a,{className:t.media,image:"https://assets.tonica.la/__export/1602704308252/sites/debate/img/2020/10/14/eren-jaeger-portada.jpg_242310155.jpg",title:e.username}),Object(d.jsx)(k.a,{children:Object(d.jsxs)(N.a,{variant:"body2",color:"textSecondary",component:"p",children:[e.username,e.caption]})}),Object(d.jsxs)(w.a,{disableSpacing:!0,children:[Object(d.jsx)(S.a,{"aria-label":"add to favorites",children:Object(d.jsx)(P.a,{})}),Object(d.jsx)(S.a,{"aria-label":"share",children:Object(d.jsx)(E.a,{})})]}),Object(d.jsx)(v,{})]}),Object(d.jsx)(p,{}),Object(d.jsxs)("h2",{children:[" ",e.link," "]}),Object(d.jsx)(x,{})]})})},J=a(130),U=function(e){Object(j.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).continue=function(t){t.preventDefault(),e.props.nextStep()},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props,t=(e.values,e.handleChange);return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(J.a,{}),Object(d.jsx)(N.a,{variant:"h6",children:"Johan"}),Object(d.jsx)(m.a,{id:"Email",label:"Enter Email",onChange:t("email")}),Object(d.jsx)("br",{}),Object(d.jsx)(m.a,{id:"Fullname",label:" Enter your Fullname",onChange:t("fullName")}),Object(d.jsx)(m.a,{id:"Username",label:"Create an username",onChange:t("userName")}),Object(d.jsx)(m.a,{id:"Password",label:"Create a password",onChange:t("passWord")}),Object(d.jsx)(O.a,{variant:"contained",color:"primary",onClick:this.continue,children:" Continue "})]})}}]),a}(s.a.Component),L=function(e){Object(j.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).continue=function(t){t.preventDefault(),e.props.nextStep()},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props,t=(e.values,e.handleChange);return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(m.a,{id:"User Name",label:"Enter Username",onChange:t("userName")}),Object(d.jsx)("br",{}),Object(d.jsx)(m.a,{id:"Password",label:" Enter password",onChange:t("passWord")}),Object(d.jsx)(O.a,{variant:"contained",color:"primary",onClick:this.continue,children:" Sign in "})]})}}]),a}(s.a.Component),G=function(e){Object(j.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={step:1,email:"",fullName:"",userName:"",passWord:""},e.nextStep=function(){var t=e.state.step;e.setState({step:t+1})},e.prevStep=function(){var t=e.state.step;e.setState({step:t-1})},e.handleChange=function(t){return function(a){e.setState(Object(i.a)({},t,a.target.value))}},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state.step,t=this.state;t.email,t.fullName,t.userName,t.passWord;switch(e){case 1:return Object(d.jsx)(U,{nextStep:this.nextStep,handleChange:this.handleChange,values:this.values})}}}]),a}(s.a.Component),Y=function(e){Object(j.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={step:1,userName:"",passWord:""},e.nextStep=function(){var t=e.state.step;e.setState({step:t+1})},e.prevStep=function(){var t=e.state.step;e.setState({step:t-1})},e.handleChange=function(t){return function(a){e.setState(Object(i.a)({},t,a.target.value))}},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state.step,t=this.state;t.userName,t.passWord;switch(e){case 1:return Object(d.jsx)(L,{nextStep:this.nextStep,handleChange:this.handleChange,values:this.values});case 2:return Object(d.jsx)(B,{})}}}]),a}(s.a.Component),H=a(27);var R=function(){return Object(d.jsxs)("nav",{children:[Object(d.jsx)("h1",{children:"Hello "}),Object(d.jsxs)("ul",{children:[" ",Object(d.jsx)(H.b,{to:"/Details",children:Object(d.jsx)("li",{children:"Sign Up"})}),Object(d.jsx)(H.b,{to:"/SignIn",children:Object(d.jsx)("li",{children:"Sign In"})})]})]})},q=a(11);var K=function(){return Object(d.jsx)(H.a,{children:Object(d.jsxs)("div",{children:[Object(d.jsx)(R,{}),Object(d.jsxs)(q.c,{children:[Object(d.jsx)(q.a,{path:"/Details",exact:!0,component:G}),Object(d.jsx)(q.a,{path:"/SignIn",exact:!0,component:Y}),Object(d.jsx)(q.a,{path:"/Profiles",exact:!0,component:I}),Object(d.jsx)(q.a,{path:"/Profiles2",exact:!0,component:W})]})]})})},Q=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,135)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),n(e),s(e),c(e),r(e)}))};r.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(K,{})}),document.getElementById("root")),Q()}},[[90,1,2]]]);
//# sourceMappingURL=main.61edf9f4.chunk.js.map