(this["webpackJsonpreaktt-1"]=this["webpackJsonpreaktt-1"]||[]).push([[0],{13:function(e,c,t){},14:function(e,c,t){},17:function(e,c,t){"use strict";t.r(c);var i=t(2),s=t.n(i),a=t(6),d=t.n(a),r=(t(13),t(14),t(3)),l=t(4),n=Object(r.a)((function e(c,t,i,s,a,d){Object(l.a)(this,e),this.brand=c,this.title=t,this.description=i,this.descriptionFull=s,this.price=a,this.currency=d})),j=t(0);var h=function(e){var c=e.item;return Object(j.jsxs)("div",{className:"main-content",children:[Object(j.jsx)("h2",{children:c.brand}),Object(j.jsx)("h1",{children:c.title}),Object(j.jsx)("h3",{children:c.description}),Object(j.jsx)("div",{className:"description",children:c.descriptionFull}),Object(j.jsx)("div",{className:"highlight-window mobile",children:Object(j.jsx)("div",{className:"highlight-overlay"})}),Object(j.jsx)("div",{className:"divider"}),Object(j.jsxs)("div",{className:"purchase-info",children:[Object(j.jsxs)("div",{className:"price",children:[c.currency,c.price.toFixed(2)]}),Object(j.jsx)("button",{children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0443"})]})]})},o=t(8),b=t(7),m=function(e){Object(o.a)(t,e);var c=Object(b.a)(t);function t(){return Object(l.a)(this,t),c.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){var e=this.props.item;return Object(j.jsxs)("div",{className:"main-content",children:[Object(j.jsx)("h2",{children:e.brand}),Object(j.jsx)("h1",{children:e.title}),Object(j.jsx)("h3",{children:e.description}),Object(j.jsx)("div",{className:"description",children:e.descriptionFull}),Object(j.jsx)("div",{className:"highlight-window mobile",children:Object(j.jsx)("div",{className:"highlight-overlay"})}),Object(j.jsx)("div",{className:"divider"}),Object(j.jsxs)("div",{className:"purchase-info",children:[Object(j.jsxs)("div",{className:"price",children:[e.currency,e.price.toFixed(2)]}),Object(j.jsx)("button",{children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0443"})]})]})}}]),t}(s.a.Component),O=m,x=t(1),u=t.n(x);var p=function(e){for(var c=e.date,t=[{day:c.date(),class:"ui-datepicker-today"}],i=u()(c);1!==i.date();)i.date(i.date()-1),t.unshift({day:i.date(),class:null});for(;1!==i.day();)i.date(i.date()-1),t.unshift({day:i.date(),class:"ui-datepicker-other-month"});for((i=u()(c)).date(i.date()+1);i.month()===c.month();)t.push({day:i.date(),class:null}),i.date(i.date()+1);for(;1!==i.day();)t.push({day:i.date(),class:"ui-datepicker-other-month"}),i.date(i.date()+1);for(var s=[];t.length;)s.push(t.splice(0,7));return Object(j.jsxs)("div",{className:"ui-datepicker",children:[Object(j.jsxs)("div",{className:"ui-datepicker-material-header",children:[Object(j.jsx)("div",{className:"ui-datepicker-material-day",children:c.format("dddd")}),Object(j.jsxs)("div",{className:"ui-datepicker-material-date",children:[Object(j.jsx)("div",{className:"ui-datepicker-material-day-num",children:c.format("D")}),Object(j.jsx)("div",{className:"ui-datepicker-material-month",children:c.format("MMM")}),Object(j.jsx)("div",{className:"ui-datepicker-material-year",children:c.format("YYYY")})]})]}),Object(j.jsx)("div",{className:"ui-datepicker-header",children:Object(j.jsxs)("div",{className:"ui-datepicker-title",children:[Object(j.jsx)("span",{className:"ui-datepicker-month",children:c.format("MMMM")}),"\xa0",Object(j.jsx)("span",{className:"ui-datepicker-year",children:c.format("YYYY")})]})}),Object(j.jsxs)("table",{className:"ui-datepicker-calendar",children:[Object(j.jsxs)("colgroup",{children:[Object(j.jsx)("col",{}),Object(j.jsx)("col",{}),Object(j.jsx)("col",{}),Object(j.jsx)("col",{}),Object(j.jsx)("col",{}),Object(j.jsx)("col",{className:"ui-datepicker-week-end"}),Object(j.jsx)("col",{className:"ui-datepicker-week-end"})]}),Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{scope:"col",title:"\u041f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a",children:"\u041f\u043d"}),Object(j.jsx)("th",{scope:"col",title:"\u0412\u0442\u043e\u0440\u043d\u0438\u043a",children:"\u0412\u0442"}),Object(j.jsx)("th",{scope:"col",title:"\u0421\u0440\u0435\u0434\u0430",children:"\u0421\u0440"}),Object(j.jsx)("th",{scope:"col",title:"\u0427\u0435\u0442\u0432\u0435\u0440\u0433",children:"\u0427\u0442"}),Object(j.jsx)("th",{scope:"col",title:"\u041f\u044f\u0442\u043d\u0438\u0446\u0430",children:"\u041f\u0442"}),Object(j.jsx)("th",{scope:"col",title:"\u0421\u0443\u0431\u0431\u043e\u0442\u0430",children:"\u0421\u0431"}),Object(j.jsx)("th",{scope:"col",title:"\u0412\u043e\u0441\u043a\u0440\u0435\u0441\u0435\u043d\u044c\u0435",children:"\u0412\u0441"})]})}),Object(j.jsx)("tbody",{children:s.map((function(e,c){return Object(j.jsx)("tr",{children:e.map((function(e,c){return Object(j.jsx)("td",{className:e.class,children:e.day},c)}))},c)}))})]})]})};var v=function(){u.a.locale("ru"),u.a.updateLocale("ru",{weekdays:["\u0412\u043e\u0441\u043a\u0440\u0435\u0441\u0435\u043d\u044c\u0435","\u041f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a","\u0412\u0442\u043e\u0440\u043d\u0438\u043a","\u0421\u0440\u0435\u0434\u0430","\u0427\u0435\u0442\u0432\u0435\u0440\u0433","\u041f\u044f\u0442\u043d\u0438\u0446\u0430","\u0421\u0443\u0431\u0431\u043e\u0442\u0430"],months:["\u042f\u043d\u0432\u0430\u0440\u044c","\u0424\u0435\u0432\u0440\u0430\u043b\u044c","\u041c\u0430\u0440\u0442","\u0410\u043f\u0440\u0435\u043b\u044c","M\u0430\u0439","\u0418\u044e\u043d\u044c","\u0418\u044e\u043b\u044c","\u0410\u0432\u0433\u0443\u0441\u0442","\u0421\u0435\u043d\u0442\u044f\u0431\u0440\u044c","\u041e\u043a\u0442\u044f\u0431\u0440\u044c","\u041d\u043e\u044f\u0431\u0440\u044c","\u0414\u0435\u043a\u0430\u0431\u0440\u044c"],monthsShort:["\u042f\u043d\u0432\u0430\u0440\u044f","\u0424\u0435\u0432\u0440\u0430\u043b\u044f","\u041c\u0430\u0440\u0442\u0430","\u0410\u043f\u0440\u0435\u043b\u044f","M\u0430\u044f","\u0418\u044e\u043d\u044f","\u0418\u044e\u043b\u044f","\u0410\u0432\u0433\u0443\u0441\u0442\u0430","\u0421\u0435\u043d\u0442\u044f\u0431\u0440\u044f","\u041e\u043a\u0442\u044f\u0431\u0440\u044f","\u041d\u043e\u044f\u0431\u0440\u044f","\u0414\u0435\u043a\u0430\u0431\u0440\u044f"]})};var N=function(){var e=new n("Tiger of Sweden","Leonard coat","Minimalistic coat in cotton-blend","Men's minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.",399,"\xa3");v();var c=u()();return Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("div",{className:"background-element"}),Object(j.jsx)("div",{className:"highlight-window",children:Object(j.jsx)("div",{className:"highlight-overlay"})}),Object(j.jsx)("div",{className:"window",children:Object(j.jsx)(h,{item:e})})]}),Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("div",{className:"background-element"}),Object(j.jsx)("div",{className:"highlight-window",children:Object(j.jsx)("div",{className:"highlight-overlay"})}),Object(j.jsx)("div",{className:"window",children:Object(j.jsx)(O,{item:e})})]}),Object(j.jsx)("div",{className:"container-calendar",children:Object(j.jsx)(p,{date:c})})]})};d.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(N,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.c8d46c52.chunk.js.map