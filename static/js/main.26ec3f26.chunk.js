(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var s=n(7),r=n.n(s),i=n(2),o=n(3),a=n(5),c=n(4),l=n(1),u=n.n(l),h=n(17),b=(n(12),n(13),n(0)),j=function(t){Object(a.a)(n,t);var e=Object(c.a)(n);function n(){var t;Object(i.a)(this,n);for(var s=arguments.length,r=new Array(s),o=0;o<s;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).state={isReversed:!1,sortBy:"",maxWordLength:"10"},t.reverse=function(){t.setState((function(t){return{isReversed:!t.isReversed}}))},t.sortByAlphabet=function(){t.setState({sortBy:"alphabet"})},t.sortByLength=function(){t.setState({sortBy:"length"})},t.changeHandler=function(e){t.setState({maxWordLength:e.target.value})},t.reset=function(){t.setState({sortBy:"",isReversed:!1,maxWordLength:"10"})},t}return Object(o.a)(n,[{key:"render",value:function(){var t=this.props.goods,e=this.state,n=e.isReversed,s=e.sortBy,r=e.maxWordLength,i=t.filter((function(t){return t.name.length<=+r}));return i.sort((function(t,e){var n=t.name,r=e.name;switch(s){case"alphabet":return n.localeCompare(r);case"length":return n.length-r.length;default:return 0}})),n&&i.reverse(),Object(b.jsxs)("div",{children:[Object(b.jsx)("p",{children:"Maximum length of the words in the list will be:"}),Object(b.jsxs)("select",{value:r,onChange:this.changeHandler,children:[Object(b.jsx)("option",{value:"1",children:"1"}),Object(b.jsx)("option",{value:"2",children:"2"}),Object(b.jsx)("option",{value:"3",children:"3"}),Object(b.jsx)("option",{value:"4",children:"4"}),Object(b.jsx)("option",{value:"5",children:"5"}),Object(b.jsx)("option",{value:"6",children:"6"}),Object(b.jsx)("option",{value:"7",children:"7"}),Object(b.jsx)("option",{value:"8",children:"8"}),Object(b.jsx)("option",{value:"9",children:"9"}),Object(b.jsx)("option",{value:"10",children:"10"})]}),Object(b.jsx)("ul",{className:"list",children:i.map((function(t){return Object(b.jsx)("li",{className:"list__item",children:t.name},t.id)}))}),Object(b.jsx)("button",{className:"button",type:"button",onClick:this.reverse,children:"Reverse"}),Object(b.jsx)("button",{className:"button",type:"button",onClick:this.sortByAlphabet,children:"Sort alphabetically"}),Object(b.jsx)("button",{className:"button",type:"button",onClick:this.reset,children:"Reset"}),Object(b.jsx)("button",{className:"button",type:"button",onClick:this.sortByLength,children:"Sort by length"})]})}}]),n}(u.a.Component),d=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"].map((function(t){return{name:t,id:Object(h.a)()}})),p=function(t){Object(a.a)(n,t);var e=Object(c.a)(n);function n(){var t;Object(i.a)(this,n);for(var s=arguments.length,r=new Array(s),o=0;o<s;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).state={goods:d,isListVisible:!1},t.showList=function(){t.setState((function(t){return{isListVisible:!t.isListVisible}}))},t}return Object(o.a)(n,[{key:"render",value:function(){var t=this.state,e=t.isListVisible,n=t.goods;return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("h1",{children:"Goods"}),e?Object(b.jsx)(j,{goods:n}):Object(b.jsx)("button",{className:"button",type:"button",onClick:this.showList,children:"Start"})]})}}]),n}(u.a.Component);r.a.render(Object(b.jsx)(p,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.26ec3f26.chunk.js.map