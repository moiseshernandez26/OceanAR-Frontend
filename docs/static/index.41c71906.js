import{c as h,i as v,r as f,A as g,C as x,T as n}from"./index.afc09e44.js";import{r,f as y,j as a,F as _,a as t,L as j}from"./index.4342dab0.js";import{a as A}from"./animals.service.9894bc5f.js";import{G as s}from"./server.9bf35674.js";import{B as w}from"./Button.47218212.js";import"./ButtonBase.1c1d3b45.js";var i={},I=v.exports;Object.defineProperty(i,"__esModule",{value:!0});var c=i.default=void 0,z=I(h),F=f,P=(0,z.default)((0,F.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm0 16H5V7h14v12zm-5.5-6c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5zM12 9c-2.73 0-5.06 1.66-6 4 .94 2.34 3.27 4 6 4s5.06-1.66 6-4c-.94-2.34-3.27-4-6-4zm0 6.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"}),"Preview");c=i.default=P;const L=()=>{const[e,d]=r.exports.useState({}),[p,o]=r.exports.useState(!1),m=y();r.exports.useEffect(()=>{l()},[]);const l=async()=>{o(!0);const u=await A(m.id);d(u.data),o(!1)};return a(_,{children:[p&&t(j,{}),t(g,{component:"description"}),a(s,{container:!0,spacing:2,children:[t(s,{item:!0,xs:12,sm:6,children:t("img",{src:e==null?void 0:e.UrlImage,alt:"item",style:{width:"100%",height:"auto",objectFit:"cover",maxHeight:"50vh"}})}),t(s,{item:!0,xs:12,sm:6,children:a(x,{maxWidth:"sm",children:[t("div",{className:"wrapper_btn",children:t(w,{startIcon:t(c,{}),children:t("a",{href:`/OceanAR-Frontend/${e==null?void 0:e.FileName}/index.html`,className:"link-ar",children:"Preview"})})}),t(n,{variant:"h5",component:"h2",style:{paddingTop:"1em"},children:e==null?void 0:e.Name}),t(n,{variant:"body2",component:"p",style:{paddingTop:"1em"},children:e==null?void 0:e.Description})]})})]})]})};export{L as default};
