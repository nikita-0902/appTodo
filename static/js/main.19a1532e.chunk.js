(this.webpackJsonptodo_app=this.webpackJsonptodo_app||[]).push([[0],{25:function(t,e,n){t.exports={TodoInput:"Todo_TodoInput__1b-MR",TodoList:"Todo_TodoList__3PDug",btn:"Todo_btn__1Gmhf"}},45:function(t,e,n){},55:function(t,e,n){},57:function(t,e,n){"use strict";n.r(e);var c=n(3),a=n(0),r=n.n(a),o=n(11),d=n.n(o),i=(n(45),n(14)),s=n(34),u=n(23),j="ADD_TODO",b="DELETE_TODO",l={data:[]},O=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case j:return Object(u.a)(Object(u.a)({},t),{},{data:[].concat(Object(s.a)(t.data),[{message:e.message,id:e.id}])});case b:var n=t.data.filter((function(t){return t.id!==e.id}));return Object(u.a)(Object(u.a)({},t),{},{data:n});default:return t}},p=n(25),h=n.n(p),x=n(74),f=n(33),m=n.n(f),v=n(32),g=Object(i.b)((function(t){return{tod:t.reducer.data}}))((function(t,e){return Object(c.jsxs)("div",{className:h.a.TodoList,children:[Object(c.jsx)("h1",{children:"TodoList"}),Object(c.jsx)("ul",{children:Object(c.jsx)(v.a,{children:t.tod.map((function(e,n){return Object(c.jsxs)("li",{children:[e.message,Object(c.jsx)(x.a,{"aria-label":"delete",color:"secondary",onClick:function(){return t.dispatch((n=e.id,{type:b,id:n}));var n},children:Object(c.jsx)(m.a,{})})]},n)}))})})]})})),T=n(77),_=n(76),y=n(78),I=Object(_.a)((function(t){return{button:{margin:t.spacing(1)}}}));var D=Object(i.b)()((function(t){var e=I();return Object(c.jsx)("div",{className:h.a.TodoInput,children:Object(c.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n=e.target.userInput.value;t.dispatch({type:j,message:n,id:Math.random()}),e.target.userInput.value=""},children:[Object(c.jsx)("input",{type:"text",name:"userInput",placeholder:"Add your list...",required:!0}),Object(c.jsx)(T.a,{type:"submit",variant:"contained",color:"primary",className:e.button,endIcon:Object(c.jsx)(y.a,{children:"send"}),children:"Add"})]})})}));n(55);var L=function(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(D,{}),Object(c.jsx)(g,{})]})},E=n(19),k=Object(E.b)({reducer:O}),w=Object(E.c)(k);d.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(i.a,{store:w,children:Object(c.jsx)(L,{})})}),document.getElementById("root"))}},[[57,1,2]]]);
//# sourceMappingURL=main.19a1532e.chunk.js.map