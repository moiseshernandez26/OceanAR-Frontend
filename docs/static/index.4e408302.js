import{r as a,A as l,u,j as g,F as C,a as s,L as h}from"./index.4342dab0.js";import{A as x,C as f}from"./index.afc09e44.js";import{C as y}from"./index.359ae636.js";import{s as A,G as j}from"./server.9bf35674.js";import"./ButtonBase.1c1d3b45.js";const v=async()=>{try{return(await A.get("/city",{headers:{"Content-Type":"application/json"}})).data}catch(e){throw console.log(e),e}},I=()=>{const{dispatch:e}=a.exports.useContext(l),[r,n]=a.exports.useState([]),[i,o]=a.exports.useState(!1);a.exports.useEffect(()=>{c()},[]);const c=async()=>{o(!0);const t=await v();n(t),o(!1)},p=t=>{e({type:"set-url-map",urlMap:t.UrlMap}),m(`/animal/${t.Id}`)},m=u();return g(C,{children:[i&&s(h,{}),s(x,{component:"home"}),s(f,{maxWidth:"sm",style:{paddingTop:"2em"},children:s(j,{container:!0,spacing:2,children:r.map((t,d)=>s(y,{place:t,handleClick:p},d))})})]})};export{I as default};
