"use strict";(self.webpackChunkjinwon_docs=self.webpackChunkjinwon_docs||[]).push([[8209],{6535:(e,s,t)=>{t.d(s,{A:()=>v});var a=t(6540),i=t(4164),r=t(7907),n=t(4581),l=t(8774),c=t(1312),o=t(6347),d=t(9169);function m(e){const{pathname:s}=(0,o.zy)();return(0,a.useMemo)((()=>e.filter((e=>function(e,s){return!(e.unlisted&&!(0,d.ys)(e.permalink,s))}(e,s)))),[e,s])}const u={sidebar:"sidebar_re4s",sidebarItemTitle:"sidebarItemTitle_pO2u",sidebarItemList:"sidebarItemList_Yudw",sidebarItem:"sidebarItem__DBe",sidebarItemLink:"sidebarItemLink_mo7H",sidebarItemLinkActive:"sidebarItemLinkActive_I1ZP"};var b=t(4848);function g(e){let{sidebar:s}=e;const t=m(s.items);return(0,b.jsx)("aside",{className:"col col--3",children:(0,b.jsxs)("nav",{className:(0,i.A)(u.sidebar,"thin-scrollbar"),"aria-label":(0,c.T)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"}),children:[(0,b.jsx)("div",{className:(0,i.A)(u.sidebarItemTitle,"margin-bottom--md"),children:s.title}),(0,b.jsx)("ul",{className:(0,i.A)(u.sidebarItemList,"clean-list"),children:t.map((e=>(0,b.jsx)("li",{className:u.sidebarItem,children:(0,b.jsx)(l.A,{isNavLink:!0,to:e.permalink,className:u.sidebarItemLink,activeClassName:u.sidebarItemLinkActive,children:e.title})},e.permalink)))})]})})}var h=t(5600);function j(e){let{sidebar:s}=e;const t=m(s.items);return(0,b.jsx)("ul",{className:"menu__list",children:t.map((e=>(0,b.jsx)("li",{className:"menu__list-item",children:(0,b.jsx)(l.A,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active",children:e.title})},e.permalink)))})}function p(e){return(0,b.jsx)(h.GX,{component:j,props:e})}function x(e){let{sidebar:s}=e;const t=(0,n.l)();return s?.items.length?"mobile"===t?(0,b.jsx)(p,{sidebar:s}):(0,b.jsx)(g,{sidebar:s}):null}function v(e){const{sidebar:s,toc:t,children:a,...n}=e,l=s&&s.items.length>0;return(0,b.jsx)(r.A,{...n,children:(0,b.jsx)("div",{className:"container margin-vert--lg",children:(0,b.jsxs)("div",{className:"row",children:[(0,b.jsx)(x,{sidebar:s}),(0,b.jsx)("main",{className:(0,i.A)("col",{"col--7":l,"col--9 col--offset-1":!l}),children:a}),t&&(0,b.jsx)("div",{className:"col col--2",children:t})]})})})}},9158:(e,s,t)=>{t.r(s),t.d(s,{default:()=>j});t(6540);var a=t(4164),i=t(1312);const r=()=>(0,i.T)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});var n=t(1213),l=t(7559),c=t(6535),o=t(6133),d=t(1107);const m={tag:"tag_Nnez"};var u=t(4848);function b(e){let{letterEntry:s}=e;return(0,u.jsxs)("article",{children:[(0,u.jsx)(d.A,{as:"h2",id:s.letter,children:s.letter}),(0,u.jsx)("ul",{className:"padding--none",children:s.tags.map((e=>(0,u.jsx)("li",{className:m.tag,children:(0,u.jsx)(o.A,{...e})},e.permalink)))}),(0,u.jsx)("hr",{})]})}function g(e){let{tags:s}=e;const t=function(e){const s={};return Object.values(e).forEach((e=>{const t=function(e){return e[0].toUpperCase()}(e.label);s[t]??=[],s[t].push(e)})),Object.entries(s).sort(((e,s)=>{let[t]=e,[a]=s;return t.localeCompare(a)})).map((e=>{let[s,t]=e;return{letter:s,tags:t.sort(((e,s)=>e.label.localeCompare(s.label)))}}))}(s);return(0,u.jsx)("section",{className:"margin-vert--lg",children:t.map((e=>(0,u.jsx)(b,{letterEntry:e},e.letter)))})}var h=t(1463);function j(e){let{tags:s,sidebar:t}=e;const i=r();return(0,u.jsxs)(n.e3,{className:(0,a.A)(l.G.wrapper.blogPages,l.G.page.blogTagsListPage),children:[(0,u.jsx)(n.be,{title:i}),(0,u.jsx)(h.A,{tag:"blog_tags_list"}),(0,u.jsxs)(c.A,{sidebar:t,children:[(0,u.jsx)(d.A,{as:"h1",children:i}),(0,u.jsx)(g,{tags:s})]})]})}},6133:(e,s,t)=>{t.d(s,{A:()=>l});t(6540);var a=t(4164),i=t(8774);const r={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};var n=t(4848);function l(e){let{permalink:s,label:t,count:l,description:c}=e;return(0,n.jsxs)(i.A,{href:s,title:c,className:(0,a.A)(r.tag,l?r.tagWithCount:r.tagRegular),children:[t,l&&(0,n.jsx)("span",{children:l})]})}}}]);