(this.webpackJsonppic=this.webpackJsonppic||[]).push([[0],{122:function(e,a,t){e.exports=t(136)},136:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(12),o=t.n(r),c=t(195),i=t(194),m=t(23),s=t(56),u=t(196),E=t(193),d=t(34),p=t.n(d),v=t(45),b=t(33),g=t(44),h=t(3),y=t(174),f=t(203),O=t(176),R=t(178),N=t(179),x=t(139),S=t(110),C=t(183),w=t(202),T=t(184),I=t(185),j=t(201),A=t(182),P=t(186),L=t(140),D=t(187),B=t(88),M=t.n(B),V=t(93),k=t.n(V),F=t(70),G=t.n(F),W=t(68),z=t.n(W),U=t(69),H=t.n(U),_=t(89),J=t.n(_),$=t(91),K=t.n($),X=t(92),Y=t.n(X),q=t(18),Q=t.n(q),Z=t(10),ee={showCopyright:!0},ae={maps:{result:{}},map:{}},te=l.a.createContext(void 0);function ne(){return l.a.useContext(te)}var le=function(e){var a=l.a.useState(ee),t=Object(m.a)(a,2),n=t[0],r=t[1],o=l.a.useState(ae),c=Object(m.a)(o,2),i=c[0],s=c[1];return console.log("AppContext: useEffect"),l.a.createElement(te.Provider,{value:{layout:n,setLayout:r,maps:i,setMaps:s}},e.children)},re=t(84);console.log("env",Object({NODE_ENV:"production",PUBLIC_URL:"/pic",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}));var oe=Object({NODE_ENV:"production",PUBLIC_URL:"/pic",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_BACKEND_URL||"http://localhost:5000/",ce=Object(re.createAuthProvider)({accessTokenKey:"access_token"}),ie=Object(m.a)(ce,4),me=ie[0],se=ie[1],ue=ie[2],Ee=ie[3],de=Object(y.a)((function(e){return Object(f.a)({root:{display:"flex"},toolbar:{paddingRight:24},toolbarIcon:Object(g.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 8px",height:"120px",backgroundColor:e.palette.secondary.main,color:e.palette.primary.main},e.mixins.toolbar),appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:320,width:"calc(100% - 320px)",transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:Object(b.a)({marginRight:0},e.breakpoints.up("sm"),{}),menuButtonHidden:{display:"none"},title:{flexGrow:1},createMenu:{},createMenuButtom:{marginTop:e.spacing(1),marginLeft:e.spacing(6)},drawerPaper:{overflowX:"hidden",position:"relative",whiteSpace:"nowrap",width:320,height:"100vh",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerPaperClose:Object(b.a)({overflowX:"hidden",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),width:0},e.breakpoints.up("sm"),{width:0}),appBarSpacer:e.mixins.toolbar,content:{flexGrow:1,height:"100vh",overflow:"auto"},container:{paddingLeft:e.spacing(0),paddingRight:e.spacing(0),paddingTop:e.spacing(0),paddingBottom:e.spacing(0)},paper:{padding:e.spacing(2),display:"flex",overflow:"auto",flexDirection:"column"},fixedHeight:{height:280},linkButton:{color:"#ffffff"},logo:{maxWidth:"120px",marginRight:"16px",marginTop:"4px",maxHeight:"42px"}})}));var pe=function(e){console.debug("FullLayout start...");var a=de(),t=window.location.href.indexOf("kiosk=yes")>0,n=(ne(),l.a.useState(!t)),r=Object(m.a)(n,2),o=r[0],c=r[1],i=l.a.useState(null),u=Object(m.a)(i,2),E=u[0],d=u[1],b=Boolean(E),g=function(){d(null)},y=function(){var e=Object(v.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d(null),se(oe+"/auth/logout",{method:"DELETE"}).then((function(e){return e.json()})).catch((function(e){console.error(e)})).finally((function(){return Ee()})),e.next=4,Object(Z.c)("/auth/login");case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return l.a.createElement("div",{className:a.root},l.a.createElement(O.a,{position:"absolute",className:Object(h.a)(a.appBar,o&&a.appBarShift)},l.a.createElement(R.a,{className:a.toolbar},!t&&l.a.createElement(N.a,{edge:"start",color:"inherit","aria-label":"open drawer",onClick:function(){c(!0)},className:Object(h.a)(a.menuButton,o&&a.menuButtonHidden)},l.a.createElement(M.a,null)),t&&l.a.createElement(N.a,{edge:"start",color:"inherit","aria-label":"back"},l.a.createElement(J.a,null)),l.a.createElement("div",null,l.a.createElement("img",{alt:"logo",className:a.logo,src:"/assets/images/logo2.png"})),l.a.createElement("div",{className:a.title}),l.a.createElement("div",null,l.a.createElement(x.a,null,"Federico Luna")),l.a.createElement("div",null,l.a.createElement(N.a,{"aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(e){d(e.currentTarget)},color:"inherit"},l.a.createElement(G.a,null)),l.a.createElement(S.a,{anchorEl:E,anchorOrigin:{vertical:"top",horizontal:"right"},id:"menu-appbar",keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:b,onClose:g},l.a.createElement(C.a,{onClick:g},l.a.createElement(w.a,{title:"Su Perfil"},l.a.createElement(T.a,null,l.a.createElement(G.a,{fontSize:"small"}))),l.a.createElement(s.a,{variant:"subtitle2"},"Federico Luna")),l.a.createElement(C.a,{onClick:g},l.a.createElement(w.a,{title:"Gestionando a..."},l.a.createElement(T.a,null,l.a.createElement(z.a,{fontSize:"small"}))),l.a.createElement(s.a,{variant:"subtitle2"},"Federico Luna")),l.a.createElement(C.a,{onClick:g},l.a.createElement(w.a,{title:"Facultades"},l.a.createElement(T.a,null,l.a.createElement(H.a,{fontSize:"small"}))),l.a.createElement(s.a,{variant:"subtitle2"},"Ciudadano")),l.a.createElement(C.a,{onClick:g},l.a.createElement(w.a,{title:"Perfil Verificado"},l.a.createElement(T.a,null,l.a.createElement(K.a,{fontSize:"small"}))),l.a.createElement(s.a,{variant:"subtitle2"},"Verificado")),l.a.createElement(I.a,null),l.a.createElement(C.a,{onClick:g},l.a.createElement(w.a,{title:"Modificar su perfil"},l.a.createElement(T.a,null,l.a.createElement(G.a,null))),l.a.createElement(s.a,{variant:"inherit"},"Gestionar Mi Perfil")),l.a.createElement(I.a,null),l.a.createElement(C.a,{onClick:y},l.a.createElement(w.a,{title:"Salir"},l.a.createElement(T.a,null,l.a.createElement(Y.a,null))),l.a.createElement(s.a,{variant:"inherit"},"Salir")))))),!t&&l.a.createElement(j.a,{variant:"permanent",ModalProps:{hideBackdrop:!0,disableBackdropClick:!0},classes:{paper:Object(h.a)(a.drawerPaper,!o&&a.drawerPaperClose)},open:o},l.a.createElement("div",{className:a.toolbarIcon},l.a.createElement(s.a,{variant:"h6"},"Plataforma"),l.a.createElement(N.a,{color:"primary",onClick:function(){c(!1)}},l.a.createElement(k.a,null))),l.a.createElement(I.a,null),l.a.createElement(A.a,null,l.a.createElement(P.a,{component:"div"},"Tus cositas"),l.a.createElement(L.a,{button:!0,component:Z.a,to:"/cuentas"},l.a.createElement(T.a,null,l.a.createElement(Q.a,{color:"secondary"})),l.a.createElement(D.a,{primary:"Cuentas"})),l.a.createElement(L.a,{button:!0,component:Z.a,to:"/bienes"},l.a.createElement(T.a,null,l.a.createElement(Q.a,{color:"secondary"})),l.a.createElement(D.a,{primary:"Bienes"})),l.a.createElement(L.a,{button:!0,component:Z.a,to:"/licencias"},l.a.createElement(T.a,null,l.a.createElement(Q.a,{color:"secondary"})),l.a.createElement(D.a,{primary:"Licencias y Permisos"})),l.a.createElement(L.a,{button:!0,component:Z.a,to:"/cuentas"},l.a.createElement(T.a,null,l.a.createElement(Q.a,{color:"secondary"})),l.a.createElement(D.a,{primary:"Inscripci\xf3n / Beneficios / Prestaciones"})),l.a.createElement(P.a,{component:"div"},"Gestiones"),l.a.createElement(L.a,{button:!0,component:Z.a,to:"/home"},l.a.createElement(T.a,null,l.a.createElement(Q.a,{color:"secondary"})),l.a.createElement(D.a,{primary:"Infracciones y Pagos Voluntarios"})),l.a.createElement(L.a,{button:!0,component:Z.a,to:"/home"},l.a.createElement(T.a,null,l.a.createElement(Q.a,{color:"secondary"})),l.a.createElement(D.a,{primary:"Sellados"})),l.a.createElement(L.a,{button:!0,component:Z.a,to:"/home"},l.a.createElement(T.a,null,l.a.createElement(Q.a,{color:"secondary"})),l.a.createElement(D.a,{primary:"Tr\xe1mites"})),l.a.createElement(L.a,{button:!0,component:Z.a,to:"/home"},l.a.createElement(T.a,null,l.a.createElement(Q.a,{color:"secondary"})),l.a.createElement(D.a,{primary:"Reclamos"})),l.a.createElement(P.a,{component:"div"},"Perifil"),l.a.createElement(L.a,{button:!0,component:Z.a,to:"/home"},l.a.createElement(T.a,null,l.a.createElement(Q.a,{color:"secondary"})),l.a.createElement(D.a,{primary:"Mis Datos"})),l.a.createElement(L.a,{button:!0,component:Z.a,to:"/home"},l.a.createElement(T.a,null,l.a.createElement(Q.a,{color:"secondary"})),l.a.createElement(D.a,{primary:"Novedades"})),l.a.createElement(L.a,{button:!0,component:Z.a,to:"/home"},l.a.createElement(T.a,null,l.a.createElement(Q.a,{color:"secondary"})),l.a.createElement(D.a,{primary:"Notificaciones"})),l.a.createElement(L.a,{button:!0,component:Z.a,to:"/home"},l.a.createElement(T.a,null,l.a.createElement(Q.a,{color:"secondary"})),l.a.createElement(D.a,{primary:"Mis Documentos"})),l.a.createElement(L.a,{button:!0,component:Z.a,to:"/apoderados"},l.a.createElement(T.a,null,l.a.createElement(Q.a,{color:"secondary"})),l.a.createElement(D.a,{primary:"Gestionar a otra persona"})))),l.a.createElement("main",{className:a.content},l.a.createElement("div",{className:a.appBarSpacer}),e.children))},ve=t(188),be=t(189),ge=Object(y.a)((function(e){return Object(f.a)({container:{height:"100vh",maxWidth:"unset",padding:0},leftPanel:Object(b.a)({height:"100vh",backgroundColor:"#0066cc"},e.breakpoints.down("sm"),{display:"none"}),rightPanel:{marginTop:"20vh"}})}));var he=function(e){var a=ge();return l.a.createElement(ve.a,{className:a.container},l.a.createElement(be.a,{container:!0,spacing:0,className:a.container},l.a.createElement(be.a,{item:!0,lg:4,className:a.leftPanel},l.a.createElement("br",null),l.a.createElement(s.a,{color:"primary",variant:"h1",style:{margin:"36pt"}},"Plataforma Ciudadana")),l.a.createElement(be.a,{item:!0,lg:8,xs:12,className:a.rightPanel},e.children)))},ye=t(197),fe=t(190),Oe=t(206),Re=t(205),Ne=t(191),xe=t(94),Se=t.n(xe),Ce=t(95),we=t.n(Ce),Te=Object(y.a)((function(e){return Object(f.a)({container:{textAlign:"center"},withoutLabel:{marginTop:e.spacing(3)},textField:{width:"40ch"},row:{padding:"1ch"},actions:{padding:"1ch",textAlign:"right"},separator:{display:"inline-block",minWidth:"70px"}})}));var Ie=function(e){var a=Te(),t=Object(Z.d)(),n=l.a.useState({username:"",password:"",showPassword:!1}),r=Object(m.a)(n,2),o=r[0],c=r[1],i=function(e){return function(a){c(Object(g.a)(Object(g.a)({},o),{},Object(b.a)({},e,a.target.value)))}},u=function(){var e=Object(v.a)(p.a.mark((function e(a){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return{username:o.username,password:o.password},"eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiTml2ZWwxIiwiSXNzdWVyIjoiSXNzdWVyIiwiVXNlcm5hbWUiOiJ1c3VhcmlvMSIsImV4cCI6MTkxNjY5ODk2NywiaWF0IjoxNjAxMTY2MTY3fQ.su1jWA-xIvCpXHxrjEjhtP5v6MMK6BDUyOtN-rdxTNc",ue({accessToken:"eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiTml2ZWwxIiwiSXNzdWVyIjoiSXNzdWVyIiwiVXNlcm5hbWUiOiJ1c3VhcmlvMSIsImV4cCI6MTkxNjY5ODk2NywiaWF0IjoxNjAxMTY2MTY3fQ.su1jWA-xIvCpXHxrjEjhtP5v6MMK6BDUyOtN-rdxTNc",refreshToken:""}),e.next=5,t("/home");case 5:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return l.a.createElement("div",{className:a.container},l.a.createElement(s.a,{variant:"h6"},"Iniciar Sesi\xf3n"),l.a.createElement("div",{className:a.row}),l.a.createElement("div",{className:a.row}),l.a.createElement("div",{className:a.row},l.a.createElement(ye.a,{className:Object(h.a)(a.textField),required:!0,id:"username",label:"Email",value:o.username,onChange:i("username"),variant:"outlined"})),l.a.createElement("div",{className:a.row},l.a.createElement(fe.a,{className:Object(h.a)(a.textField),variant:"outlined"},l.a.createElement(Oe.a,{htmlFor:"outlined-adornment-password"},"Clave"),l.a.createElement(Re.a,{id:"password",type:o.showPassword?"text":"password",value:o.password,onChange:i("password"),endAdornment:l.a.createElement(Ne.a,{position:"end"},l.a.createElement(N.a,{"aria-label":"toggle password visibility",onClick:function(){c(Object(g.a)(Object(g.a)({},o),{},{showPassword:!o.showPassword}))},onMouseDown:function(e){e.preventDefault()},edge:"end"},o.showPassword?l.a.createElement(Se.a,null):l.a.createElement(we.a,null))),labelWidth:70}))),l.a.createElement("div",{className:a.row},l.a.createElement(x.a,null,"Olvido su contrase\xf1a"),l.a.createElement("div",{className:a.separator},"\xa0"),l.a.createElement(x.a,{color:"secondary",variant:"contained",onClick:u},"Ingresar")))},je=t(200),Ae=t(50),Pe=t.n(Ae),Le=t(51),De=t.n(Le),Be=t(40),Me=t.n(Be),Ve=t(138),ke=t(207),Fe=t(96),Ge=t.n(Fe),We=t(99),ze=t.n(We),Ue=t(101),He=t.n(Ue),_e=t(102),Je=t.n(_e),$e=t(100),Ke=t.n($e),Xe=t(97),Ye=t.n(Xe),qe=t(98),Qe=t.n(qe),Ze=t(103),ea=t.n(Ze),aa=t(104),ta=t.n(aa),na=t(105),la=t.n(na),ra=t(106),oa=t.n(ra),ca=Object(y.a)((function(e){return Object(f.a)({root:{marginTop:e.spacing(2)},button:{lineHeight:"inherit",margin:0,padding:12},inline:{display:"inline"},icon:{marginTop:1},item:{textAlign:"left",verticalAlign:"top"},row2:{marginTop:e.spacing(1)}})}));var ia=function(e){var a,t,n,r,o,c,i,m,E,d,p,v,b,g,h,y,f,O,R,N,S=ca();return l.a.createElement(Ve.a,{className:S.root},l.a.createElement(x.a,{fullWidth:!0,className:S.button,component:Z.a,to:"/objeto",state:{cuenta:e.cuenta}},l.a.createElement(be.a,{container:!0,item:!0,xs:12,spacing:2,className:S.item},l.a.createElement(be.a,{item:!0,xs:1},"Home"===(null===(a=e.cuenta)||void 0===a?void 0:a.icon)&&l.a.createElement(Ge.a,{className:S.icon,fontSize:"large",color:"secondary"}),"Store"===(null===(t=e.cuenta)||void 0===t?void 0:t.icon)&&l.a.createElement(Ye.a,{className:S.icon,fontSize:"large",color:"secondary"}),"Storefront"===(null===(n=e.cuenta)||void 0===n?void 0:n.icon)&&l.a.createElement(Qe.a,{className:S.icon,fontSize:"large",color:"secondary"}),"DirectionsCar"===(null===(r=e.cuenta)||void 0===r?void 0:r.icon)&&l.a.createElement(ze.a,{className:S.icon,fontSize:"large",color:"secondary"}),"DirectionsBike"===(null===(o=e.cuenta)||void 0===o?void 0:o.icon)&&l.a.createElement(Ke.a,{className:S.icon,fontSize:"large",color:"secondary"}),"DirectionsBus"===(null===(c=e.cuenta)||void 0===c?void 0:c.icon)&&l.a.createElement(He.a,{className:S.icon,fontSize:"large",color:"secondary"}),"FormartListNumberd"===(null===(i=e.cuenta)||void 0===i?void 0:i.icon)&&l.a.createElement(Je.a,{className:S.icon,fontSize:"large",color:"secondary"}),"FeaturedVideo"===(null===(m=e.cuenta)||void 0===m?void 0:m.icon)&&l.a.createElement(ea.a,{className:S.icon,fontSize:"large",color:"secondary"}),"DeleteSweep"===(null===(E=e.cuenta)||void 0===E?void 0:E.icon)&&l.a.createElement(ta.a,{className:S.icon,fontSize:"large",color:"secondary"}),"Domain"===(null===(d=e.cuenta)||void 0===d?void 0:d.icon)&&l.a.createElement(la.a,{className:S.icon,fontSize:"large",color:"secondary"}),"LocalTaxi"===(null===(p=e.cuenta)||void 0===p?void 0:p.icon)&&l.a.createElement(oa.a,{className:S.icon,fontSize:"large",color:"secondary"})),l.a.createElement(be.a,{item:!0,xs:7},l.a.createElement(be.a,{container:!0,spacing:0},l.a.createElement(be.a,{item:!0,xs:12},l.a.createElement(s.a,{display:"block",variant:"caption"},null===(v=e.cuenta)||void 0===v?void 0:v.subtitulo),l.a.createElement(s.a,{display:"inline",variant:"subtitle2"},null===(b=e.cuenta)||void 0===b?void 0:b.titulo),l.a.createElement(s.a,{display:"inline",variant:"body2"}," \xa0\xa0 ",null===(g=e.cuenta)||void 0===g?void 0:g.domicilio),l.a.createElement(u.a,null,l.a.createElement(s.a,{display:"inline",variant:"caption"},null===(h=e.cuenta)||void 0===h?void 0:h.titular)))),l.a.createElement(je.a,{xsDown:!0},l.a.createElement(be.a,{container:!0,className:S.row2},l.a.createElement(be.a,{item:!0,xs:12},l.a.createElement(u.a,null,l.a.createElement(s.a,{variant:"caption"},null===(y=e.cuenta)||void 0===y?void 0:y.campoRel0)),l.a.createElement(s.a,{display:"inline",variant:"subtitle2"},null===(f=e.cuenta)||void 0===f?void 0:f.valorRel0),l.a.createElement(s.a,{variant:"caption"},"\xa0\xa0",null===(O=e.cuenta)||void 0===O?void 0:O.subValorRel0))))),(null===(R=e.cuenta)||void 0===R?void 0:R.saldo)&&l.a.createElement(be.a,{item:!0,xs:4},l.a.createElement(s.a,{variant:"caption"},"SALDO"),l.a.createElement(s.a,{variant:"h6"},null===(N=e.cuenta)||void 0===N?void 0:N.saldo),l.a.createElement(s.a,{variant:"caption"},"Venc 12/09/2003"),l.a.createElement("div",{className:S.row2},e.cuenta.saldoDeuda&&l.a.createElement(ke.a,{size:"small",label:"Deuda"}),e.cuenta.saldoMulta&&l.a.createElement(ke.a,{size:"small",label:"Multa"}))))))},ma=t(39),sa=t.n(ma),ua=Object(y.a)((function(e){return Object(f.a)({root:{},inline:{display:"inline"}})}));var Ea=function(e){var a=ua();return l.a.createElement(ve.a,null,l.a.createElement("div",{className:a.root},l.a.createElement(ia,{cuenta:{tipo:"Cuenta",icon:"Home",titulo:"TGI 2334234",domicilio:"Superi 1363",subtitulo:"Tasa General de Inmuebles",titular:"Federico Luna",saldo:"$ 603,34",saldoDeuda:!0,campoRel0:"PARCELA",valorRel0:"01/192/101/0/0",atributos:[{codigo:"Parcela",seccion:"Relacion",titulo:"PARCELA",valor:"01/192/101/0/0",subvalor:"(123 m2)"}],acciones:[{codigo:"",seccion:"Objeto",titulo:"Gestionar Libre Deuda"},{codigo:"",seccion:"Objeto",titulo:"Adhesi\xf3n Boleta Digital"},{codigo:"",seccion:"Objeto",titulo:"M\xe1s..."},{codigo:"",seccion:"Relacion",titulo:"Tr\xe1mites para la Parcela..."}]}}),l.a.createElement(ia,{cuenta:{tipo:"Cuenta",icon:"FormartListNumberd",titulo:"CVP 14585334",domicilio:"San Juan 473 Dto1",subtitulo:"Convenio de Pago",titular:"Federico Luna y Otra",saldo:"$ 2.200,34",saldoDeuda:!0,campoRel0:"CUENTA",valorRel0:"TGI 2334234",atributos:[{codigo:"Convenio.Cuenta",seccion:"Relacion",titulo:"Cuenta",valor:"TGI 3233214",subvalor:"(123 m2)"},{codigo:"Convenio.Plan",seccion:"Relacion",titulo:"Plan",valor:"Plan Moratoria 2019"},{codigo:"Convenio.Fecha",seccion:"Relacion",titulo:"Fecha Confecci\xf3n",valor:"2019-11-21"}],acciones:[{codigo:"",seccion:"Objeto",titulo:"Acci\xf3n para el Convenio"},{codigo:"",seccion:"Relacion",titulo:"Ver Cuenta..."}]}}),l.a.createElement(ia,{cuenta:{tipo:"Cuenta",icon:"Store",titulo:"DREI 3334344",domicilio:"Santa Fe 892 - Rosario",subtitulo:"Derecho Registro Inspecci\xf3n Regimen Simplif.",titular:"Federico Luna",saldo:"$ 18874,00",saldoMulta:!0,campoRel0:"PERMISO",valorRel0:"1323/2020",subValorRel0:"(venc. 10/10/2025)"}}),l.a.createElement(ia,{cuenta:{tipo:"Cuenta",icon:"Storefront",titulo:"ETUR 3334344",domicilio:"Santa Fe 892 - Rosario",subtitulo:"Derecho ...Ente Turismo",titular:"Federico Luna",saldo:"$ 887,00",saldoMulta:!0,campoRel0:"PERMISO",valorRel0:"32323/2020",subValorRel0:"(10/10/2025)"}}),l.a.createElement(ia,{cuenta:{tipo:"Cuenta",icon:"FeaturedVideo",titulo:"DERPUB 3334344",domicilio:"Santa Fe 892 - Rosario",subtitulo:"Derecho Publicitario",titular:"Federico Luna",saldo:"$ 2283,00",saldoMulta:!0,campoRel0:"PERMISO",valorRel0:"32323/2020",subValorRel0:"(10/11/2023)"}}),l.a.createElement(ia,{cuenta:{tipo:"Cuenta",icon:"DeleteSweep",titulo:"TRESID 3334344",domicilio:"Santa Fe 892 - Rosario",subtitulo:"Derecho Publicitario",titular:"Federico Luna",saldo:"$ 454,00",saldoMulta:!0,campoRel0:"PERMISO",valorRel0:"32323/2020",subValorRel0:"(10/11/2023)"}}),l.a.createElement(ia,{cuenta:{tipo:"Cuenta",icon:"DirectionsBike",titulo:"BICI 24586843",domicilio:"Villarico 892 - Rosario",subtitulo:"Mi Bici Tu Bici",titular:"Federico Luna",saldo:"$ 1502,00",campoRel0:"PUNTOS",valorRel0:"3403"}})),l.a.createElement(u.a,null,l.a.createElement("br",null),l.a.createElement(x.a,{endIcon:l.a.createElement(sa.a,null)},"M\xe1s")))},da=Object(y.a)((function(e){return Object(f.a)({root:{display:"flex"},title:{flexGrow:1},container:{padding:0},textSearch:{},iconButton:{}})}));var pa=function(e){var a=da();return l.a.createElement(ve.a,{className:a.container},l.a.createElement(R.a,null,l.a.createElement(s.a,{component:"div",variant:"h5",color:"inherit",noWrap:!0,className:a.title},"Tus Cuentas")),l.a.createElement(be.a,{container:!0,spacing:0,direction:"row-reverse"},l.a.createElement(je.a,{smDown:!0},l.a.createElement(be.a,{item:!0,md:4},l.a.createElement(s.a,{component:"h1",variant:"h6",color:"inherit",noWrap:!0}),l.a.createElement(u.a,null,l.a.createElement(x.a,{color:"secondary",startIcon:l.a.createElement(Pe.a,null)},"Opci\xf3n r\xe1pida 1")),l.a.createElement(u.a,null,l.a.createElement(x.a,{component:Z.a,to:"/datasets/new",color:"secondary",startIcon:l.a.createElement(De.a,null)},"Algo r\xe1pida 2")),l.a.createElement(u.a,null,l.a.createElement(x.a,{color:"secondary",startIcon:l.a.createElement(Me.a,null)},"Ayuda")))),l.a.createElement(be.a,{item:!0,xs:12,md:8},l.a.createElement(Ea,null))))},va=t(74),ba=t.n(va),ga=t(107),ha=t.n(ga),ya=Object(y.a)((function(e){return Object(f.a)({root:{marginBottom:e.spacing(2)},button:{lineHeight:"inherit",margin:0,padding:12},inline:{display:"inline"},icon:{marginTop:1},item:{textAlign:"left",verticalAlign:"top"},row2:{marginTop:e.spacing(1)}})}));var fa=function(e){var a=ya();return l.a.createElement(Ve.a,{className:a.root},l.a.createElement(x.a,{fullWidth:!0,className:a.button},l.a.createElement(be.a,{container:!0,item:!0,xs:12,spacing:2,className:a.item},l.a.createElement(be.a,{item:!0,xs:1},l.a.createElement(z.a,{className:a.icon,fontSize:"large",color:"secondary"})),l.a.createElement(be.a,{item:!0,xs:6},l.a.createElement(be.a,{container:!0,spacing:0},l.a.createElement(be.a,{item:!0,xs:12},l.a.createElement(s.a,{variant:"subtitle2"},"PDR 2238732"),l.a.createElement(u.a,null,l.a.createElement(s.a,{display:"inline",variant:"caption"},"Maria Noel Gonzalez")),l.a.createElement(s.a,{variant:"caption"},"Apoderamiento"))),l.a.createElement(be.a,{container:!0,className:a.row2},l.a.createElement(be.a,{item:!0,xs:12},l.a.createElement(s.a,{variant:"caption"},"SOBRE"),l.a.createElement(s.a,{variant:"subtitle2"},"TGI 2132334234 - Todo")))),l.a.createElement(be.a,{item:!0,xs:4},l.a.createElement(s.a,{variant:"caption"},"PODER DANTE"),l.a.createElement(s.a,{variant:"body2"},"Federico Luna")))))},Oa=t(192),Ra=Object(y.a)((function(e){return Object(f.a)({root:{},inline:{display:"inline"},title:{flexGrow:1}})}));var Na=function(e){var a=Ra();return l.a.createElement(l.a.Fragment,null,l.a.createElement(R.a,null,l.a.createElement(s.a,{component:"div",variant:"h5",color:"inherit",noWrap:!0,className:a.title},"Apoderados")),l.a.createElement(ve.a,null,l.a.createElement("div",{style:{marginBottom:14}},l.a.createElement(Oa.a,{variant:"contained",color:"primary","aria-label":"contained primary button group"},l.a.createElement(x.a,{color:"secondary"},"Todos"),l.a.createElement(x.a,null,"Otorgados por Mi"),l.a.createElement(x.a,null,"Otorgados a Mi"))),l.a.createElement("div",{className:a.root},l.a.createElement(fa,{cuenta:{icon:"Home",titulo:"TGI 2334234",domicilio:"Super 1363",subtitulo:"Tasa General de Inmuebles",titular:"Federico Luna",saldo:"$ 603,34",saldoDeuda:!0,campoRel0:"PARCELA",valorRel0:"01/192/101/0/0",supTotal:"405 m2"}}),l.a.createElement(fa,{cuenta:{icon:"FormartListNumberd",titulo:"CVP 14585334",domicilio:"San Juan 473 Dto1",subtitulo:"Convenio de Pago",titular:"Federico Luna y Otra",saldo:"$ 2.200,34",saldoDeuda:!0,campoRel0:"CUENTA",valorRel0:"TGI 2334234"}}),l.a.createElement(fa,{cuenta:{icon:"DirectionsCar",titulo:"LNC 24586843",domicilio:"Villarico 892 - Rosario",subtitulo:"Licencia de Conducir",titular:"Federico Luna",saldo:"$ 1234,00",saldoMulta:!0,campoRel0:"VENCIMIENTO",valorRel0:"25/01/2021"}}),l.a.createElement(fa,{cuenta:{icon:"DirectionsBike",titulo:"BICI 24586843",domicilio:"Villarico 892 - Rosario",subtitulo:"Mi Bici Tu Bici",titular:"Federico Luna",saldo:"$ 10234,00",campoRel0:"PUNTOS",valorRel0:"3403"}})),l.a.createElement(u.a,null,l.a.createElement("br",null),l.a.createElement(x.a,{endIcon:l.a.createElement(sa.a,null)},"M\xe1s"))))},xa=Object(y.a)((function(e){return Object(f.a)({root:{display:"flex"},title:{flexGrow:1},container:{padding:0},textSearch:{},iconButton:{}})}));var Sa=function(e){var a=xa();return l.a.createElement(ve.a,{className:a.container},l.a.createElement(be.a,{container:!0,spacing:0,direction:"row-reverse"},l.a.createElement(je.a,{smDown:!0},l.a.createElement(be.a,{item:!0,md:4},l.a.createElement(R.a,null,l.a.createElement(s.a,{component:"div",variant:"h5",color:"inherit",noWrap:!0,className:a.title},"\xa0")),l.a.createElement(s.a,{component:"h1",variant:"h6",color:"inherit",noWrap:!0}),l.a.createElement(u.a,null,l.a.createElement(x.a,{color:"secondary",startIcon:l.a.createElement(H.a,null)},"Solicitar Facultad")),l.a.createElement(u.a,null,l.a.createElement(x.a,{color:"secondary",startIcon:l.a.createElement(Me.a,null)},"Ayuda")))),l.a.createElement(be.a,{item:!0,xs:12,md:8},l.a.createElement(R.a,null,l.a.createElement(s.a,{component:"div",variant:"h5",color:"inherit",noWrap:!0,className:a.title},"Facultades")),l.a.createElement(ve.a,null,l.a.createElement(be.a,{container:!0,item:!0,xs:12},l.a.createElement(be.a,{item:!0,xs:2},l.a.createElement(x.a,{variant:"contained",color:"primary",startIcon:l.a.createElement(ba.a,null)},"Ciudadano")),l.a.createElement(be.a,{item:!0,xs:2},l.a.createElement(x.a,{variant:"contained",color:"secondary",startIcon:l.a.createElement(ba.a,null)},"Arquitecto")),l.a.createElement(be.a,{item:!0,xs:2},l.a.createElement(x.a,{variant:"contained",color:"secondary",startIcon:l.a.createElement(ha.a,null)},"Solictar")))),l.a.createElement("br",null),l.a.createElement(Na,null))))},Ca=t(198),wa=Object(y.a)((function(e){return Object(f.a)({root:{display:"flex"},title:{flexGrow:1},container:{padding:0},textSearch:{},iconButton:{}})}));function Ta(e){var a=wa();return l.a.createElement(Ve.a,null,l.a.createElement(R.a,null,l.a.createElement(s.a,{variant:"h5",className:a.title},"Opciones de Pagos")),l.a.createElement(Ve.a,null,l.a.createElement(ve.a,null,l.a.createElement(be.a,{container:!0,spacing:0},l.a.createElement(be.a,{item:!0,xs:1},l.a.createElement(Ca.a,{checked:!0,value:"a",name:"radio-button-demo"})),l.a.createElement(be.a,{item:!0,xs:9,sm:8,md:6},l.a.createElement("p",{style:{marginTop:10}},l.a.createElement(s.a,{variant:"body1",color:"secondary"},l.a.createElement("b",null,"PAGAR SALDO COMPLETO"))),l.a.createElement("p",{style:{margin:0}},l.a.createElement(s.a,{variant:"body1"},"Paga todas las deudas pendientes de la cuenta.")),l.a.createElement("p",{style:{margin:0}},l.a.createElement(s.a,{variant:"body1"},l.a.createElement(Z.a,{to:""},"Ver detalle")))),l.a.createElement(be.a,{item:!0,xs:2},l.a.createElement("p",{style:{marginTop:4}},l.a.createElement(s.a,{variant:"h6"},"603,34")),l.a.createElement("p",null,l.a.createElement(x.a,{variant:"contained",color:"secondary"},"Pagar ..."))))),l.a.createElement("p",null),l.a.createElement(ve.a,null,l.a.createElement(be.a,{container:!0,spacing:0},l.a.createElement(be.a,{item:!0,xs:1},l.a.createElement(Ca.a,{checked:!1,value:"a",name:"radio-button-demo"})),l.a.createElement(be.a,{item:!0,xs:9,sm:8,md:6},l.a.createElement("p",{style:{marginTop:10}},l.a.createElement(s.a,{variant:"body1",color:"secondary"},l.a.createElement("b",null,"PAGAR SOLO DEUDA VENCIDA"))),l.a.createElement("p",{style:{margin:0}},l.a.createElement(s.a,{variant:"body1"},"Paga todas las deudas que ya estan vencidas.")),l.a.createElement("p",{style:{margin:0}},l.a.createElement(s.a,{variant:"body1"},l.a.createElement(Z.a,{to:""},"Ver detalle")))),l.a.createElement(be.a,{item:!0,xs:2},l.a.createElement("p",{style:{marginTop:4}},l.a.createElement(s.a,{variant:"h6"},"403,14")),l.a.createElement("p",null)))),l.a.createElement("p",null),l.a.createElement(ve.a,null,l.a.createElement(be.a,{container:!0,spacing:0},l.a.createElement(be.a,{item:!0,xs:1},l.a.createElement(Ca.a,{checked:!1,value:"a",name:"radio-button-demo"})),l.a.createElement(be.a,{item:!0,xs:9,sm:8,md:6},l.a.createElement("p",{style:{marginTop:10}},l.a.createElement(s.a,{variant:"body1",color:"secondary"},l.a.createElement("b",null,"REALIZAR CONVENIO"))),l.a.createElement("p",{style:{margin:0}},l.a.createElement(s.a,{variant:"body1"},"Realizar un convenio y pagar en cuotas la deuda antigua.")),l.a.createElement("p",{style:{margin:0}},l.a.createElement(s.a,{variant:"body1"},l.a.createElement(Z.a,{to:""},"Ver detalle de las cuotas")))),l.a.createElement(be.a,{item:!0,xs:2},l.a.createElement("p",{style:{marginTop:4}},l.a.createElement(s.a,{variant:"h6"},"403,14")," ",l.a.createElement(s.a,{variant:"body2"},"6 Cuotas de 103,78")),l.a.createElement("p",null)))),l.a.createElement("p",null),l.a.createElement(ve.a,null,l.a.createElement(be.a,{container:!0,spacing:0},l.a.createElement(be.a,{item:!0,xs:1},l.a.createElement(Ca.a,{checked:!1,value:"a",name:"radio-button-demo"})),l.a.createElement(be.a,{item:!0,xs:9,sm:8,md:6},l.a.createElement("p",{style:{marginTop:10}},l.a.createElement(s.a,{variant:"body1",color:"secondary"},l.a.createElement("b",null,"PAGO ANTICIPADO"))),l.a.createElement("p",{style:{margin:0}},l.a.createElement(s.a,{variant:"body1"},"Pagar por adelantado el resto del a\xf1o con un descuento.")),l.a.createElement("p",{style:{margin:0}},l.a.createElement(s.a,{variant:"body1"},l.a.createElement(Z.a,{to:""},"Ver detalle")))),l.a.createElement(be.a,{item:!0,xs:2},l.a.createElement("p",{style:{marginTop:4}},l.a.createElement(s.a,{variant:"h6"},"6203,14"),l.a.createElement(s.a,{variant:"body2"},l.a.createElement("del",null,"6804,23"))),l.a.createElement("p",null)))),l.a.createElement("p",null,"\xa0")))}function Ia(e){var a=wa();return l.a.createElement(Ve.a,null,l.a.createElement(R.a,null,l.a.createElement(s.a,{variant:"h5",className:a.title},"Opciones de Pagos")),l.a.createElement(Ve.a,null,l.a.createElement(ve.a,null,l.a.createElement(be.a,{container:!0,spacing:0},l.a.createElement(be.a,{item:!0,xs:1},l.a.createElement(Ca.a,{checked:!0,value:"a",name:"radio-button-demo"})),l.a.createElement(be.a,{item:!0,xs:9,sm:8,md:6},l.a.createElement("p",{style:{marginTop:10}},l.a.createElement(s.a,{variant:"body1",color:"secondary"},l.a.createElement("b",null,"PAGAR PENDIENTE AL D\xcdA DE HOY"))),l.a.createElement("p",{style:{margin:0}},l.a.createElement(s.a,{variant:"body1"},"Paga todas las cuotas atrasadas y la del periodo acutal.")),l.a.createElement("p",{style:{margin:0}},l.a.createElement(s.a,{variant:"body1"},l.a.createElement(Z.a,{to:""},"Ver detalle")))),l.a.createElement(be.a,{item:!0,xs:2,sm:2},l.a.createElement("p",{style:{marginTop:4}},l.a.createElement(s.a,{variant:"h6"},"401,20")),l.a.createElement("p",null,l.a.createElement(x.a,{variant:"contained",color:"secondary"},"Pagar ..."))))),l.a.createElement("p",null),l.a.createElement(ve.a,null,l.a.createElement(be.a,{container:!0,spacing:0},l.a.createElement(be.a,{item:!0,xs:1},l.a.createElement(Ca.a,{checked:!1,value:"a",name:"radio-button-demo"})),l.a.createElement(be.a,{item:!0,xs:9,sm:8,md:6},l.a.createElement("p",{style:{marginTop:10}},l.a.createElement(s.a,{variant:"body1",color:"secondary"},l.a.createElement("b",null,"PAGAR CUOTAS ATRASADAS"))),l.a.createElement("p",{style:{margin:0}},l.a.createElement(s.a,{variant:"body1"},"Paga todas las cuptas que ya estan vencidas.")),l.a.createElement("p",{style:{margin:0}},l.a.createElement(s.a,{variant:"body1"},l.a.createElement(Z.a,{to:""},"Ver detalle")))),l.a.createElement(be.a,{item:!0,xs:2},l.a.createElement("p",{style:{marginTop:4}},l.a.createElement(s.a,{variant:"h6"},"363,14")),l.a.createElement("p",null)))),l.a.createElement("p",null,"\xa0")))}var ja=function(e){var a=wa(),t=e.location.state.cuenta;return t.acciones=t.acciones||[],t.atributos=t.atributos||[],console.log("acciones",t.acciones),l.a.createElement(ve.a,{className:a.container},l.a.createElement("br",null),l.a.createElement(ve.a,null,l.a.createElement(be.a,{container:!0,spacing:2},l.a.createElement(be.a,{item:!0,xs:12,sm:6},l.a.createElement(Ve.a,{style:{height:"100%"}},l.a.createElement(R.a,null,l.a.createElement(s.a,{variant:"h5",className:a.title},"Objeto")),l.a.createElement(ve.a,null,l.a.createElement("p",null,l.a.createElement("b",null,t.subtitulo)),l.a.createElement("p",null,l.a.createElement("b",null,"Cuenta:")," ",t.titulo),l.a.createElement("p",null,l.a.createElement("b",null,"Domicilio:")," ",t.domicilio),l.a.createElement("p",null,l.a.createElement("b",null,"Titular:")," ",t.titular)),l.a.createElement(ve.a,null,l.a.createElement("p",{style:{textAlign:"right"}},t.acciones.filter((function(e){return"Objeto"===e.seccion})).map((function(e){return l.a.createElement("span",null,l.a.createElement(x.a,{variant:"outlined",color:"secondary",style:{marginBottom:18,marginRight:18}},e.titulo))})))))),l.a.createElement(be.a,{item:!0,xs:12,sm:6},l.a.createElement(Ve.a,{style:{height:"100%"}},l.a.createElement(R.a,null,l.a.createElement(s.a,{variant:"h5",className:a.title},"Relaci\xf3n")),l.a.createElement(ve.a,null,t.atributos.filter((function(e){return"Relacion"===e.seccion})).map((function(e){return l.a.createElement("p",null,l.a.createElement("b",null,e.titulo,":")," ",e.valor," ",e.subvalor)}))),l.a.createElement(ve.a,null,l.a.createElement("p",{style:{textAlign:"right"}},t.acciones.filter((function(e){return"Relacion"===e.seccion})).map((function(e){return l.a.createElement("span",null,l.a.createElement(x.a,{variant:"outlined",color:"secondary",style:{marginBottom:18,marginRight:18}},e.titulo))}))))))),l.a.createElement("br",null),t.titulo.startsWith("TGI")&&l.a.createElement(Ta,null),t.titulo.startsWith("CVP")&&l.a.createElement(Ia,null)),l.a.createElement(Ve.a,null))},Aa=Object(y.a)((function(e){return Object(f.a)({root:{},inline:{display:"inline"}})}));var Pa=function(e){var a=Aa();return l.a.createElement(ve.a,null,l.a.createElement("div",{className:a.root},l.a.createElement(ia,{cuenta:{tipo:"Bien",icon:"Home",subtitulo:"Parcela",titulo:"PAR 01/192/98/01",domicilio:"Superi 1363",titular:"Federico Luna",atributos:[{codigo:"Parcela",seccion:"Relacion",titulo:"PARCELA",valor:"01/192/101/0/0",subvalor:"(123 m2)"}],acciones:[{codigo:"",seccion:"Objeto",titulo:"Ver Tramites"}]}}),l.a.createElement(ia,{cuenta:{tipo:"Bien",icon:"Store",titulo:"COMERCIO 12928374",domicilio:"Santa Fe 892 - Rosario",subtitulo:"Comercio",titular:"ALGUIEN SRL (33245887340)",campoRel0:"ALGUN",valorRel0:"CAMPO",subValorRel0:""}}),l.a.createElement(ia,{cuenta:{tipo:"Bien",icon:"DirectionsBus",titulo:"TRANSP 993022",domicilio:"Santa Fe 892 - Rosario",subtitulo:"Comercio",titular:"ALGUIEN SRL (33245887340)",campoRel0:"ALGUN",valorRel0:"CAMPO",subValorRel0:""}}),l.a.createElement(ia,{cuenta:{tipo:"Bien",icon:"DirectionsCar",titulo:"VEH JHL897",domicilio:"Santa Fe 892 - Rosario",subtitulo:"Comercio",titular:"Federico Luna (33245887340)",campoRel0:"ALGUN",valorRel0:"CAMPO",subValorRel0:""}})),l.a.createElement(u.a,null,l.a.createElement("br",null),l.a.createElement(x.a,{endIcon:l.a.createElement(sa.a,null)},"M\xe1s")))},La=Object(y.a)((function(e){return Object(f.a)({root:{display:"flex"},title:{flexGrow:1},container:{padding:0},textSearch:{},iconButton:{}})}));var Da=function(e){var a=La();return l.a.createElement(ve.a,{className:a.container},l.a.createElement(R.a,null,l.a.createElement(s.a,{component:"div",variant:"h5",color:"inherit",noWrap:!0,className:a.title},"Tus Bienes")),l.a.createElement(be.a,{container:!0,spacing:0,direction:"row-reverse"},l.a.createElement(je.a,{smDown:!0},l.a.createElement(be.a,{item:!0,md:4},l.a.createElement(s.a,{component:"h1",variant:"h6",color:"inherit",noWrap:!0}),l.a.createElement(u.a,null,l.a.createElement(x.a,{color:"secondary",startIcon:l.a.createElement(Pe.a,null)},"Opci\xf3n r\xe1pida 1")),l.a.createElement(u.a,null,l.a.createElement(x.a,{component:Z.a,to:"/datasets/new",color:"secondary",startIcon:l.a.createElement(De.a,null)},"Algo r\xe1pida 2")),l.a.createElement(u.a,null,l.a.createElement(x.a,{color:"secondary",startIcon:l.a.createElement(Me.a,null)},"Ayuda")))),l.a.createElement(be.a,{item:!0,xs:12,md:8},l.a.createElement(Pa,null))))},Ba=Object(y.a)((function(e){return Object(f.a)({root:{},inline:{display:"inline"}})}));var Ma=function(e){var a=Ba();return l.a.createElement(ve.a,null,l.a.createElement("div",{className:a.root},l.a.createElement(ia,{cuenta:{tipo:"Licencia",icon:"DirectionsCar",subtitulo:"Licencia de Conducir",titulo:"LCON 2586843",domicilio:"Superi 1363",titular:"Federico Luna",campoRel0:"VENCIMIENTO",valorRel0:"10/01/2023",subValorRel0:"",atributos:[{codigo:"Vencimiento",seccion:"Relacion",titulo:"VENCIMIENTO",valor:"10/01/2023"}],acciones:[{codigo:"",seccion:"Objeto",titulo:"Renovar"},{codigo:"",seccion:"Objeto",titulo:"Otros..."}]}}),l.a.createElement(ia,{cuenta:{tipo:"Licencia",icon:"Domain",titulo:"LOBRA 2323/2020",domicilio:"Santa Fe 892 - Rosario",subtitulo:"Permiso de Obra",titular:"ALGUIEN SRL (33245887340)",campoRel0:"ARQUITECO",valorRel0:"Juan Marcos Arquite",subValorRel0:""}}),l.a.createElement(ia,{cuenta:{tipo:"Licencia",icon:"Store",titulo:"LHAB 1938/2020",domicilio:"Santa Fe 892 - Rosario",subtitulo:"Comercio",titular:"ALGUIEN SRL (33245887340)",campoRel0:"ADICIONALES",valorRel0:"+TOLDOS +MESAS",subValorRel0:""}}),l.a.createElement(ia,{cuenta:{tipo:"Licencia",icon:"LocalTaxi",titulo:"LTR 8297",domicilio:"Santa Fe 892 - Rosario",subtitulo:"Comercio",titular:"Federico Luna (33245887340)",campoRel0:"VENCE",valorRel0:"2023/10/11",subValorRel0:""}})),l.a.createElement(u.a,null,l.a.createElement("br",null),l.a.createElement(x.a,{endIcon:l.a.createElement(sa.a,null)},"M\xe1s")))},Va=Object(y.a)((function(e){return Object(f.a)({root:{display:"flex"},title:{flexGrow:1},container:{padding:0},textSearch:{},iconButton:{}})}));var ka=function(e){var a=Va();return l.a.createElement(ve.a,{className:a.container},l.a.createElement(R.a,null,l.a.createElement(s.a,{component:"div",variant:"h5",color:"inherit",noWrap:!0,className:a.title},"Tus Bienes")),l.a.createElement(be.a,{container:!0,spacing:0,direction:"row-reverse"},l.a.createElement(je.a,{smDown:!0},l.a.createElement(be.a,{item:!0,md:4},l.a.createElement(s.a,{component:"h1",variant:"h6",color:"inherit",noWrap:!0}),l.a.createElement(u.a,null,l.a.createElement(x.a,{color:"secondary",startIcon:l.a.createElement(Pe.a,null)},"Opci\xf3n r\xe1pida 1")),l.a.createElement(u.a,null,l.a.createElement(x.a,{component:Z.a,to:"/datasets/new",color:"secondary",startIcon:l.a.createElement(De.a,null)},"Algo r\xe1pida 2")),l.a.createElement(u.a,null,l.a.createElement(x.a,{color:"secondary",startIcon:l.a.createElement(Me.a,null)},"Ayuda")))),l.a.createElement(be.a,{item:!0,xs:12,md:8},l.a.createElement(Ma,null))))},Fa=Object(y.a)((function(e){return Object(f.a)({layout:{padding:0}})}));function Ga(){return ne().layout.showCopyright?l.a.createElement(s.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9",l.a.createElement(E.a,{color:"inherit",href:"https://material-ui.com/"},"PIC")," ",(new Date).getFullYear(),"."):l.a.createElement("span",null)}function Wa(){var e=Fa(),a=me(),t=Object(m.a)(a,1)[0],n=l.a.createElement(pe,{className:e.layout},l.a.createElement(Z.b,null,l.a.createElement(pa,{path:"/cuentas"}),l.a.createElement(Da,{path:"/bienes"}),l.a.createElement(ka,{path:"/licencias"}),l.a.createElement(ja,{path:"/objeto"}),l.a.createElement(Sa,{path:"/apoderados"})),l.a.createElement(u.a,{my:4},l.a.createElement(Ga,null))),r=l.a.createElement(he,null,l.a.createElement(Z.b,null,l.a.createElement(Ie,{default:!0,path:"/auth/login"})));return t?n:r}var za=t(108),Ua=t.n(za),Ha=t(109),_a=Object(Ha.a)({typography:{button:{textTransform:"none"}},palette:{primary:{main:"#ffffff"},secondary:{main:"#0066cc"},error:{main:Ua.a.A400},background:{default:"#f5f5f6"}}});o.a.render(l.a.createElement(i.a,{theme:_a},l.a.createElement(c.a,null),l.a.createElement(le,null,l.a.createElement(Wa,null))),document.querySelector("#root"))}},[[122,1,2]]]);
//# sourceMappingURL=main.c34a717d.chunk.js.map