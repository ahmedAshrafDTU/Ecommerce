"use strict";(self.webpackChunkproj1=self.webpackChunkproj1||[]).push([[660],{9321:function(t,e,n){n.r(e),n.d(e,{default:function(){return x}});var a=n(4165),s=n(5861),r=n(9439),i=n(2791),c=n(3926),o=n(7620),l=n(8163),d=n.p+"static/media/preview.5fb1161d4ca5695646ac.png",u=n(4855),m=n(6747),p=n(5705),h=n(184);function x(){var t=(0,i.useContext)(c.A),e=t.getCart,n=t.deleteCart,x=t.updateCart,v=t.setCartNums,f=t.checkout,b=t.cartId,j=t.setCartId,y=i.useState(!1),C=(0,r.Z)(y,2),N=C[0],g=C[1];function w(){return(w=(0,s.Z)((0,a.Z)().mark((function t(e){var n,s;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f(b,e);case 2:"success"===(null===(s=t.sent)||void 0===s?void 0:s.data.status)&&(window.location.href=null===s||void 0===s||null===(n=s.data.session)||void 0===n?void 0:n.url);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var Z=(0,p.TA)({initialValues:{details:"",phone:"",city:""},onSubmit:function(t){return w.apply(this,arguments)}}),k=(0,i.useContext)(o.h).isLogin,S=(0,i.useState)(null),I=(0,r.Z)(S,2),_=I[0],O=I[1],P=(0,i.useState)(!1),A=(0,r.Z)(P,2),E=A[0],L=A[1];function R(){return(R=(0,s.Z)((0,a.Z)().mark((function t(){var n,s;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return L(!0),t.next=3,e();case 3:"success"===(null===(s=t.sent)||void 0===s||null===(n=s.data)||void 0===n?void 0:n.status)&&(O(null===s||void 0===s?void 0:s.data),j(s.data.data._id),v(null===s||void 0===s?void 0:s.data.numOfCartItems),L(!1)),L(!1);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function T(t){return V.apply(this,arguments)}function V(){return(V=(0,s.Z)((0,a.Z)().mark((function t(e){var s;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n(e);case 2:"success"===(s=t.sent).data.status&&(O(null===s||void 0===s?void 0:s.data),v(null===s||void 0===s?void 0:s.data.numOfCartItems));case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function q(t,e){return z.apply(this,arguments)}function z(){return(z=(0,s.Z)((0,a.Z)().mark((function t(e,n){var s;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(0!==n){t.next=4;break}T(e),t.next=8;break;case 4:return t.next=6,x(e,n);case 6:"success"===(s=t.sent).data.status&&(O(null===s||void 0===s?void 0:s.data),v(null===s||void 0===s?void 0:s.data.numOfCartItems));case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return(0,i.useEffect)((function(){null!=k&&function(){R.apply(this,arguments)}()}),[k]),E?(0,h.jsxs)("div",{className:"container ",children:[(0,h.jsx)("h3",{className:"my-3 text-left",children:"your cart is loading ..."}),(0,h.jsx)(l.Z,{})]}):(0,h.jsxs)("div",{className:"container",children:[null!==_&&void 0!==_&&_.data.totalCartPrice?(0,h.jsxs)("div",{children:[(0,h.jsx)("h3",{className:"h4 my-3",children:"total cart Price "+(null===_||void 0===_?void 0:_.data.totalCartPrice)}),(0,h.jsxs)("div",{className:"cart-box p-3 bg-main-light  my-2",children:[(0,h.jsx)("h2",{children:"Shop Cart"}),null===_||void 0===_?void 0:_.data.products.map((function(t){return(0,h.jsxs)("div",{className:"row align-items-center justify-content-between ",children:[(0,h.jsx)("div",{className:"col-md-8",children:(0,h.jsxs)("div",{className:"row my-3 align-items-center ",children:[(0,h.jsx)("div",{className:"col-md-2",children:(0,h.jsx)("img",{src:t.product.imageCover,className:"w-100",alt:"img"})}),(0,h.jsxs)("div",{className:"col-md-10",children:[(0,h.jsx)("p",{children:t.product.title}),(0,h.jsx)("p",{className:"text-main",children:t.price}),(0,h.jsxs)("span",{className:"cursor-pointer",onClick:function(){T(t.product._id)},children:[" ",(0,h.jsx)("i",{className:"fa-solid fa-trash text-main"})," Remove "]})]})]})}),(0,h.jsxs)("div",{className:"col-md-3 d-flex justify-content-end",children:[(0,h.jsx)("button",{className:"btn text-main border border-1 border-success p-1",onClick:function(){q(t.product._id.toString(),t.count+1)},children:"+"}),(0,h.jsx)("span",{className:"mx-2",children:t.count}),(0,h.jsx)("button",{className:"btn text-main border border-1 border-success p-1",onClick:function(){q(t.product._id,t.count>0?t.count-1:0)},children:"-"})]})]},t.product._id)}))]}),(0,h.jsx)("button",{className:"bg-main text-white my-3 btn",onClick:function(){return g(!0)},children:"Check out"})]}):(0,h.jsxs)("div",{className:"text-center",children:[(0,h.jsx)("p",{className:"text-start fw-bold",children:"your cart is empty"}),(0,h.jsx)("img",{src:d,alt:"img"})]}),(0,h.jsx)(u.Z,{open:N,onClose:function(){return g(!1)},"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,h.jsx)(m.Z,{sx:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4},children:(0,h.jsxs)("form",{onSubmit:Z.handleSubmit,children:[(0,h.jsx)("input",{type:"text",className:"form-control my-2",name:"details",onChange:Z.handleChange,value:Z.values.details,placeholder:"address "}),(0,h.jsx)("input",{type:"tel",className:"form-control my-2",name:"phone",onChange:Z.handleChange,value:Z.values.phone,placeholder:"phone "}),(0,h.jsx)("input",{type:"text",className:"form-control my-2",name:"city",onChange:Z.handleChange,value:Z.values.city,placeholder:"city "}),(0,h.jsx)("button",{className:"btn bg-main text-white",type:"submit",children:"send"})]})})})]})}}}]);
//# sourceMappingURL=660.d99a71a0.chunk.js.map