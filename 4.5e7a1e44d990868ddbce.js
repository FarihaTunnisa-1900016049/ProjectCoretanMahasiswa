(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{Iab2:function(t,a,e){var n,o;void 0===(o="function"==typeof(n=function(){"use strict";function a(t,a,e){var n=new XMLHttpRequest;n.open("GET",t),n.responseType="blob",n.onload=function(){c(n.response,a,e)},n.onerror=function(){console.error("could not download file")},n.send()}function e(t){var a=new XMLHttpRequest;a.open("HEAD",t,!1);try{a.send()}catch(t){}return 200<=a.status&&299>=a.status}function n(t){try{t.dispatchEvent(new MouseEvent("click"))}catch(a){var e=document.createEvent("MouseEvents");e.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),t.dispatchEvent(e)}}var o="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,i=o.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),c=o.saveAs||("object"!=typeof window||window!==o?function(){}:"download"in HTMLAnchorElement.prototype&&!i?function(t,i,c){var b=o.URL||o.webkitURL,l=document.createElement("a");l.download=i=i||t.name||"download",l.rel="noopener","string"==typeof t?(l.href=t,l.origin===location.origin?n(l):e(l.href)?a(t,i,c):n(l,l.target="_blank")):(l.href=b.createObjectURL(t),setTimeout(function(){b.revokeObjectURL(l.href)},4e4),setTimeout(function(){n(l)},0))}:"msSaveOrOpenBlob"in navigator?function(t,o,i){if(o=o||t.name||"download","string"!=typeof t)navigator.msSaveOrOpenBlob(function(t,a){return void 0===a?a={autoBom:!1}:"object"!=typeof a&&(console.warn("Deprecated: Expected third argument to be a object"),a={autoBom:!a}),a.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type)?new Blob(["\ufeff",t],{type:t.type}):t}(t,i),o);else if(e(t))a(t,o,i);else{var c=document.createElement("a");c.href=t,c.target="_blank",setTimeout(function(){n(c)})}}:function(t,e,n,c){if((c=c||open("","_blank"))&&(c.document.title=c.document.body.innerText="downloading..."),"string"==typeof t)return a(t,e,n);var b="application/octet-stream"===t.type,l=/constructor/i.test(o.HTMLElement)||o.safari,s=/CriOS\/[\d]+/.test(navigator.userAgent);if((s||b&&l||i)&&"undefined"!=typeof FileReader){var r=new FileReader;r.onloadend=function(){var t=r.result;t=s?t:t.replace(/^data:[^;]*;/,"data:attachment/file;"),c?c.location.href=t:location=t,c=null},r.readAsDataURL(t)}else{var d=o.URL||o.webkitURL,u=d.createObjectURL(t);c?c.location=u:location.href=u,c=null,setTimeout(function(){d.revokeObjectURL(u)},4e4)}});o.saveAs=c.saveAs=c,t.exports=c})?n.apply(a,[]):n)||(t.exports=o)},jkDv:function(t,a,e){"use strict";e.r(a),e.d(a,"AdminModule",function(){return N});var n=e("ofXK"),o=e("R0Ic"),i=e("fXoL"),c=e("H+bZ"),b=e("tyNb"),l=e("/t3+"),s=e("bTqV"),r=e("NFeN"),d=e("MutI"),u=e("XhcP"),p=e("FKr1");let m=(()=>{class t{constructor(t,a){this.api=t,this.router=a,this.mode="side"}ngOnInit(){this.checkLogin()}checkLogin(){this.api.get("bookswithauth/status").subscribe(t=>{},t=>{this.router.navigate(["/login"])})}logout(){confirm("Keluar aplikasi?")&&(localStorage.removeItem("appToken"),window.location.reload())}}return t.\u0275fac=function(a){return new(a||t)(i.Nb(c.a),i.Nb(b.a))},t.\u0275cmp=i.Hb({type:t,selectors:[["app-admin"]],decls:35,vars:8,consts:[["color","warn",1,"example-header"],["mat-icon-button","",3,"click"],[1,"uk-width-expand"],["mat-button","",3,"click"],["matListIcon",""],[1,"example-container"],["mode","side","opened","",1,"sidenav-left",3,"position","fixedInViewport","fixedTopGap","fixedBottomGap"],["sidenav",""],["routerLink","/admin/dashboard"],["matLine",""],["routerLink","/admin/gallery"],["routerLink","/admin/product"],["mode","side",1,"example-sidenav",3,"position","fixedInViewport","fixedTopGap","fixedBottomGap"],[2,"padding","20px","background-color","#ccc"]],template:function(t,a){if(1&t){const t=i.Ub();i.Rb(0),i.Tb(1,"mat-toolbar",0),i.Tb(2,"button",1),i.ac("click",function(){return i.sc(t),i.oc(14).toggle()}),i.Tb(3,"mat-icon"),i.zc(4,"menu"),i.Sb(),i.Sb(),i.Tb(5,"span"),i.zc(6,"Coretan Mahasiswa"),i.Sb(),i.Ob(7,"div",2),i.Tb(8,"button",3),i.ac("click",function(){return a.logout()}),i.zc(9,"Logout"),i.Sb(),i.Tb(10,"mat-icon",4),i.zc(11,"exit_to_app"),i.Sb(),i.Sb(),i.Tb(12,"mat-sidenav-container",5),i.Tb(13,"mat-sidenav",6,7),i.Tb(15,"mat-nav-list"),i.Tb(16,"mat-list-item",8),i.Tb(17,"mat-icon",4),i.zc(18,"home"),i.Sb(),i.Tb(19,"h3",9),i.zc(20,"Home"),i.Sb(),i.Sb(),i.Tb(21,"mat-list-item",10),i.Tb(22,"mat-icon",4),i.zc(23,"account_box"),i.Sb(),i.Tb(24,"h3",9),i.zc(25,"Profile"),i.Sb(),i.Sb(),i.Tb(26,"mat-list-item",11),i.Tb(27,"mat-icon",4),i.zc(28,"folder"),i.Sb(),i.Tb(29,"h3",9),i.zc(30,"Folder"),i.Sb(),i.Sb(),i.Sb(),i.Sb(),i.Ob(31,"mat-sidenav",12,7),i.Tb(33,"mat-sidenav-content",13),i.Ob(34,"router-outlet"),i.Sb(),i.Sb(),i.Qb()}2&t&&(i.Cb(13),i.jc("position","start")("fixedInViewport",!0)("fixedTopGap",60)("fixedBottomGap",0),i.Cb(18),i.jc("position","end")("fixedInViewport",!0)("fixedTopGap",60)("fixedBottomGap",0))},directives:[l.a,s.a,r.a,d.a,u.b,u.a,d.d,d.b,b.b,p.j,u.c,b.d],styles:[""],data:{animation:[Object(o.n)("flyInOut",[Object(o.k)("in",Object(o.l)({width:120,transform:"translateX(0)",opacity:1})),Object(o.m)("void => *",[Object(o.l)({width:10,transform:"translateX(50px)",opacity:0}),Object(o.g)([Object(o.e)("0.3s 0.1s ease",Object(o.l)({transform:"translateX(0)",width:120})),Object(o.e)("0.3s ease",Object(o.l)({opacity:1}))])]),Object(o.m)("* => void",[Object(o.g)([Object(o.e)("0.3s ease",Object(o.l)({transform:"translateX(50px)",width:10})),Object(o.e)("0.3s 0.2s ease",Object(o.l)({opacity:0}))])])])]}}),t})();var g=e("Wp6s");let h=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(a){return new(a||t)},t.\u0275cmp=i.Hb({type:t,selectors:[["app-dashboard"]],decls:36,vars:0,consts:[["color","warn"],[1,"content"],[1,"mat-elevation-z4"]],template:function(t,a){1&t&&(i.Tb(0,"mat-toolbar",0),i.Tb(1,"marquee"),i.zc(2,"SELAMAT DATANG DI APLIKASI CORETAN MAHASISWA"),i.Sb(),i.Sb(),i.Tb(3,"div",1),i.Tb(4,"mat-card",2),i.Tb(5,"mat-card-header"),i.Tb(6,"h2"),i.zc(7,"Deskripsi Coretan Mahasiswa "),i.Sb(),i.Ob(8,"hr"),i.Tb(9,"h4"),i.zc(10," Coretan Mahasiswa adalah sebuah aplikasi web yang dapat digunakan oleh mahasiswa untuk membuat Kartu Anggota Perpustakaan. Di dalam aplikasi Coretan Mahasiswa akan memuat data diri calon anggota perpustakaan "),i.Sb(),i.Sb(),i.Tb(11,"mat-card-header"),i.Tb(12,"h2"),i.zc(13,"Fitur Coretan Mahasiswa "),i.Sb(),i.Ob(14,"hr"),i.Tb(15,"h4"),i.zc(16," (1) Profile, memuat contoh Kartu Tanda Anggota Perpustakaan (2) Folder, memuat halaman untuk mengisi data diri pembuat Kartu Tanda Anggota Perpustakaan"),i.Sb(),i.Sb(),i.Tb(17,"mat-card-header"),i.Tb(18,"article"),i.Tb(19,"h2"),i.zc(20,"Prosedur dan Alur Pembuatan Kartu Anggota Perpustakaan"),i.Sb(),i.Tb(21,"details"),i.Tb(22,"summary"),i.zc(23,"Lihat Selengkapnya"),i.Sb(),i.Tb(24,"p"),i.zc(25,"(1) Berstatus sebagai mahasiswa aktif di Kampus"),i.Sb(),i.Tb(26,"p"),i.zc(27,"(2) Memiliki KTM (Kartu Tanda Mahasiswa)"),i.Sb(),i.Tb(28,"p"),i.zc(29,"(3) Mengisi data diri melalui aplikasi web Coretan Mahasiswa"),i.Sb(),i.Tb(30,"p"),i.zc(31,"(4) Scan Kartu Tanda Mahasiswa dalam format pdf lalu upload melalui aplikasi web Coretan Mahasiswa "),i.Sb(),i.Tb(32,"p"),i.zc(33,"(5) Pengambilan foto anggota di Perpustakaan"),i.Sb(),i.Tb(34,"p"),i.zc(35,"(6) Mengambil Kartu Tanda Anggota Perpustakaan"),i.Sb(),i.Sb(),i.Sb(),i.Sb(),i.Sb(),i.Sb())},directives:[l.a,g.a,g.d],styles:[""]}),t})();var f=e("w55g"),T=e("0IaG");let S=(()=>{class t{constructor(t,a){this.dialogRef=t,this.data=a,this.imageChangedEvent="",this.croppedImage=""}ngOnInit(){}fileChangeEvent(t){console.log(t),this.imageChangedEvent=t}imageCropped(t){this.croppedImage=t.base64}imageLoaded(){console.log("loaded")}cropperReady(){console.log("ready")}loadImageFailed(){console.log("failed")}onNoClick(){this.dialogRef.close(!1)}}return t.\u0275fac=function(a){return new(a||t)(i.Nb(T.g),i.Nb(T.a))},t.\u0275cmp=i.Hb({type:t,selectors:[["app-images"]],decls:0,vars:0,template:function(t,a){},styles:[""]}),t})(),k=(()=>{class t{constructor(t){this.dialog=t,this.images=[]}ngOnInit(){}openUploader(){this.dialog.open(S,{width:"500px",data:null}).afterClosed().subscribe(t=>{0!=t&&this.images.push(t)})}}return t.\u0275fac=function(a){return new(a||t)(i.Nb(T.b))},t.\u0275cmp=i.Hb({type:t,selectors:[["app-gallery"]],decls:44,vars:0,consts:[["color","warn"],[1,"content"],[1,"mat-elevation-z4"],["mat-card-image","","src","/assets/foto1.jpg","alt","Photo of a Profile"],[1,"example-card"],["mat-card-avatar","",1,"example-header-image"],["mat-card-image","","src","assets/foto2.jpg","alt","Photo of a Profile"]],template:function(t,a){1&t&&(i.Tb(0,"mat-toolbar",0),i.zc(1," Kartu Anggota Perpustakaan "),i.Sb(),i.Tb(2,"div",1),i.Tb(3,"mat-card",2),i.Tb(4,"mat-card-header"),i.Tb(5,"mat-card-title"),i.zc(6,"No Anggota 2116079"),i.Sb(),i.Sb(),i.Ob(7,"img",3),i.Tb(8,"mat-card-content"),i.Tb(9,"p"),i.zc(10,"Nama : Deddy Yudi"),i.Sb(),i.Tb(11,"p"),i.zc(12,"Fakultas : Fakultas Sains dan Teknologi Terapan"),i.Sb(),i.Tb(13,"p"),i.zc(14,"Prodi : Sistem Informasi"),i.Sb(),i.Tb(15,"p"),i.zc(16,"Angkatan : 2017"),i.Sb(),i.Tb(17,"P"),i.zc(18,"NIM : 1700016089"),i.Sb(),i.Tb(19,"p"),i.zc(20,"Tahun Pembuatan : 2021"),i.Sb(),i.Sb(),i.Sb(),i.Sb(),i.Tb(21,"mat-toolbar",0),i.zc(22," Kartu Anggota Perpustakaan "),i.Sb(),i.Tb(23,"mat-card",4),i.Tb(24,"mat-card-header"),i.Ob(25,"div",5),i.Tb(26,"mat-card-title"),i.zc(27,"Kartu Anggota Perpustakaan"),i.Sb(),i.Tb(28,"mat-card-subtitle"),i.zc(29,"No Anggota 2116123"),i.Sb(),i.Sb(),i.Ob(30,"img",6),i.Tb(31,"mat-card-content"),i.Tb(32,"p"),i.zc(33,"Nama : Alexander Akexy"),i.Sb(),i.Tb(34,"p"),i.zc(35,"Fakultas : Fakultas Sains dan Teknologi Terapan"),i.Sb(),i.Tb(36,"p"),i.zc(37,"Prodi : Sistem Informasi"),i.Sb(),i.Tb(38,"p"),i.zc(39,"Angkatan : 2018"),i.Sb(),i.Tb(40,"P"),i.zc(41,"NIM : 1800016079"),i.Sb(),i.Tb(42,"p"),i.zc(43,"Tahun Pembuatan : 2021"),i.Sb(),i.Sb(),i.Sb())},directives:[l.a,g.a,g.d,g.h,g.e,g.c,g.b,g.g],styles:[".upload-icon[_ngcontent-%COMP%]{padding-bottom:100%;border-radius:10px;border:1px dashed #fff;margin-bottom:15px;position:relative}.upload-icon[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]{position:absolute;text-align:center;width:100%;bottom:40%}.mat-card-image[_ngcontent-%COMP%]{width:calc(100% + 32px);margin:0 -16px 16px 16px}"]}),t})();e("jhN1");let v=(()=>{class t{}return t.\u0275fac=function(a){return new(a||t)},t.\u0275mod=i.Lb({type:t}),t.\u0275inj=i.Kb({imports:[[n.c]]}),t})();var w=e("Iab2");let z=(()=>{class t{constructor(t,a,e){this.api=t,this.dialogRef=a,this.dialogData=e}ngOnInit(){console.log(this.dialogData)}onFileChange(t){t.target.files.length>0&&(this.selectedFile=t.target.files[0],console.log(this.selectedFile))}uploadFile(){let t=new FormData;t.append("file",this.selectedFile),this.loadingUpload=!0,this.api.upload(t).subscribe(t=>{this.updateProduct(t),console.log(t)},t=>{this.loadingUpload=!1,alert("Gagal mengunggah foto")})}updateProduct(t){1==t.status?(this.updateBook(t),alert("Foto berhasil diunggah"),this.loadingUpload=!1,this.dialogRef.close()):alert(t.message)}updateBook(t){this.api.put("books/"+this.dialogData.id,{url:t.url}).subscribe(t=>{console.log(t)})}}return t.\u0275fac=function(a){return new(a||t)(i.Nb(c.a),i.Nb(T.g),i.Nb(T.a))},t.\u0275cmp=i.Hb({type:t,selectors:[["app-file-uploader"]],decls:13,vars:3,consts:[["mat-dialog-title",""],["mat-dialog-content",""],[1,"uk-flex","uk-flex-middle","uk-flex-center",2,"height","100px","outline","2px dashed #ccc","margin","10px",3,"click"],["type","file","id","file",2,"display","none",3,"change"],["fileInput",""],["mat-dialog-action","","align","right"],["mat-button","","mat-dialog-close",""],["mat-flat-button","","color","primary",3,"disabled","click"]],template:function(t,a){if(1&t){const t=i.Ub();i.Tb(0,"h1",0),i.zc(1,"Unggah Foto"),i.Sb(),i.Tb(2,"div",1),i.Tb(3,"div",2),i.ac("click",function(){return i.sc(t),i.oc(7).click()}),i.Tb(4,"span"),i.zc(5),i.Sb(),i.Sb(),i.Tb(6,"input",3,4),i.ac("change",function(t){return a.onFileChange(t)}),i.Sb(),i.Sb(),i.Tb(8,"div",5),i.Tb(9,"button",6),i.zc(10,"Cancel"),i.Sb(),i.Tb(11,"button",7),i.ac("click",function(){return a.uploadFile()}),i.zc(12),i.Sb(),i.Sb()}2&t&&(i.Cb(5),i.Ac(a.selectedFile?a.selectedFile.name:"Pilih File"),i.Cb(6),i.jc("disabled",a.loadingUpload),i.Cb(1),i.Ac(a.loadingUpload?"Uploading..":"Upload"))},directives:[T.h,T.e,s.a,T.d],styles:[""]}),t})();var y=e("kmnG"),x=e("qFsG"),C=e("3Pt+");let A=(()=>{class t{constructor(t,a,e){this.dialogRef=t,this.data=a,this.api=e}ngOnInit(){}saveData(){this.loading=!0,null==this.data.id?this.api.post("books",this.data).subscribe(t=>{this.dialogRef.close(t),this.loading=!1},t=>{this.loading=!1,alert("Tidak dapat menyimpan data")}):this.api.put("books/"+this.data.id,this.data).subscribe(t=>{this.dialogRef.close(t),this.loading=!1},t=>{this.loading=!1,alert("Tidak dapat memperbarui data")})}}return t.\u0275fac=function(a){return new(a||t)(i.Nb(T.g),i.Nb(T.a),i.Nb(c.a))},t.\u0275cmp=i.Hb({type:t,selectors:[["app-product-detail"]],decls:32,vars:8,consts:[["mat-dialog-title",""],["mat-dialog-content",""],["appearance","outline",2,"width","100%"],["matInput","",3,"ngModel","ngModelChange"],["matInput","","type","number",3,"ngModel","ngModelChange"],["mat-dialog-actions","","align","end"],["mat-button","","mat-dialog-close",""],["mat-flat-button","",3,"disabled","click"]],template:function(t,a){1&t&&(i.Tb(0,"h3",0),i.zc(1," Detail Data Diri\n"),i.Sb(),i.Tb(2,"div",1),i.Tb(3,"mat-form-field",2),i.Tb(4,"mat-label"),i.zc(5,"Nama"),i.Sb(),i.Tb(6,"input",3),i.ac("ngModelChange",function(t){return a.data.title=t}),i.Sb(),i.Sb(),i.Tb(7,"mat-form-field",2),i.Tb(8,"mat-label"),i.zc(9,"Fakultas"),i.Sb(),i.Tb(10,"input",3),i.ac("ngModelChange",function(t){return a.data.author=t}),i.Sb(),i.Sb(),i.Tb(11,"mat-form-field",2),i.Tb(12,"mat-label"),i.zc(13,"Prodi"),i.Sb(),i.Tb(14,"input",3),i.ac("ngModelChange",function(t){return a.data.publisher=t}),i.Sb(),i.Sb(),i.Tb(15,"mat-form-field",2),i.Tb(16,"mat-label"),i.zc(17,"Angkatan"),i.Sb(),i.Tb(18,"input",3),i.ac("ngModelChange",function(t){return a.data.year=t}),i.Sb(),i.Sb(),i.Tb(19,"mat-form-field",2),i.Tb(20,"mat-label"),i.zc(21,"NIM"),i.Sb(),i.Tb(22,"input",4),i.ac("ngModelChange",function(t){return a.data.isbn=t}),i.Sb(),i.Sb(),i.Tb(23,"mat-form-field",2),i.Tb(24,"mat-label"),i.zc(25,"Tahun Pembuatan"),i.Sb(),i.Tb(26,"input",4),i.ac("ngModelChange",function(t){return a.data.price=t}),i.Sb(),i.Sb(),i.Sb(),i.Tb(27,"div",5),i.Tb(28,"button",6),i.zc(29,"Batal"),i.Sb(),i.Tb(30,"button",7),i.ac("click",function(){return a.saveData()}),i.zc(31),i.Sb(),i.Sb()),2&t&&(i.Cb(6),i.jc("ngModel",a.data.title),i.Cb(4),i.jc("ngModel",a.data.author),i.Cb(4),i.jc("ngModel",a.data.publisher),i.Cb(4),i.jc("ngModel",a.data.year),i.Cb(4),i.jc("ngModel",a.data.isbn),i.Cb(4),i.jc("ngModel",a.data.price),i.Cb(4),i.jc("disabled",a.loading),i.Cb(1),i.Ac(a.loading?"Menyimpan..":"Simpan"))},directives:[T.h,T.e,y.b,y.e,x.b,C.c,C.i,C.k,C.l,T.c,s.a,T.d],styles:[""]}),t})();var M=e("Xa2L");function O(t,a){1&t&&(i.Tb(0,"div",2),i.Ob(1,"mat-spinner"),i.Sb())}function j(t,a){if(1&t){const t=i.Ub();i.Tb(0,"button",12),i.ac("click",function(){i.sc(t);const a=i.ec().$implicit;return i.ec(2).downloadFile(a)}),i.Tb(1,"mat-icon"),i.zc(2,"download"),i.Sb(),i.Sb()}}function P(t,a){if(1&t){const t=i.Ub();i.Tb(0,"tr"),i.Tb(1,"td"),i.yc(2,j,3,0,"button",9),i.Sb(),i.Tb(3,"td"),i.zc(4),i.Sb(),i.Tb(5,"td"),i.zc(6),i.Sb(),i.Tb(7,"td"),i.zc(8),i.Sb(),i.Tb(9,"td"),i.zc(10),i.Sb(),i.Tb(11,"td"),i.zc(12),i.Sb(),i.Tb(13,"td"),i.zc(14),i.Sb(),i.Tb(15,"td"),i.zc(16),i.Sb(),i.Tb(17,"td",7),i.Tb(18,"button",10),i.ac("click",function(){i.sc(t);const e=a.$implicit;return i.ec(2).uploadFile(e)}),i.zc(19,"Upload"),i.Sb(),i.Tb(20,"button",10),i.ac("click",function(){i.sc(t);const e=a.$implicit,n=a.index;return i.ec(2).productDetail(e,n)}),i.zc(21,"Edit"),i.Sb(),i.Tb(22,"button",11),i.ac("click",function(){i.sc(t);const e=a.$implicit,n=a.index;return i.ec(2).deleteProduct(e.id,n)}),i.zc(23,"Delete"),i.Sb(),i.Sb(),i.Sb()}if(2&t){const t=a.$implicit,e=a.index,n=i.ec(2);i.Cb(2),i.jc("ngIf",""!=t.url),i.Cb(2),i.Ac(e+1),i.Cb(2),i.Ac(t.title),i.Cb(2),i.Ac(t.author),i.Cb(2),i.Ac(t.publisher),i.Cb(2),i.Ac(t.year),i.Cb(2),i.Ac(t.isbn),i.Cb(2),i.Ac(t.price),i.Cb(6),i.jc("disabled",n.loadingDelete[e])}}function I(t,a){if(1&t){const t=i.Ub();i.Tb(0,"mat-card"),i.Tb(1,"mat-card-header"),i.Tb(2,"mat-card-title"),i.zc(3),i.Sb(),i.Sb(),i.Tb(4,"mat-card-content"),i.Tb(5,"div",3),i.Ob(6,"span",4),i.Tb(7,"button",5),i.ac("click",function(){return i.sc(t),i.ec().productDetail({},-1)}),i.zc(8,"Tambah Data"),i.Sb(),i.Sb(),i.Tb(9,"table",6),i.Tb(10,"thead"),i.Ob(11,"th"),i.Tb(12,"th"),i.zc(13,"No"),i.Sb(),i.Tb(14,"th"),i.zc(15,"Nama"),i.Sb(),i.Tb(16,"th"),i.zc(17,"Fakultas"),i.Sb(),i.Tb(18,"th"),i.zc(19,"Prodi"),i.Sb(),i.Tb(20,"th"),i.zc(21,"Angkatan"),i.Sb(),i.Tb(22,"th"),i.zc(23,"NIM"),i.Sb(),i.Tb(24,"th"),i.zc(25,"Tahun Pembuatan"),i.Sb(),i.Tb(26,"th",7),i.zc(27,"#"),i.Sb(),i.Sb(),i.Tb(28,"tbody"),i.yc(29,P,24,9,"tr",8),i.Sb(),i.Sb(),i.Sb(),i.Sb()}if(2&t){const t=i.ec();i.Cb(3),i.Ac(t.title),i.Cb(26),i.jc("ngForOf",t.books)}}const F=[{path:"",component:m,children:[{path:"dashboard",component:h},{path:"product",component:(()=>{class t{constructor(t,a){this.dialog=t,this.api=a,this.book={},this.books=[],this.loadingDelete={}}ngOnInit(){this.title="Produk",this.book={title:"Angular untuk Pemula",author:"Farid Suryanto",publisher:"Sunhouse Digital",year:2020,isbn:"8298377474",price:7e4},this.getBooks()}getBooks(){this.loading=!0,this.api.get("bookswithauth").subscribe(t=>{this.books=t,this.loading=!1},t=>{this.loading=!1})}productDetail(t,a){this.dialog.open(A,{width:"400px",data:t}).afterClosed().subscribe(e=>{e&&(-1==a?this.books.push(e):this.books[a]=t)})}deleteProduct(t,a){confirm("Delete item?")&&(this.loadingDelete[a]=!0,this.api.delete("books/"+t).subscribe(t=>{this.books.splice(a,1),this.loadingDelete[a]=!1},t=>{this.loadingDelete[a]=!1,alert("Tidak dapat menghapus data")}))}uploadFile(t){this.dialog.open(z,{width:"400px",data:t}).afterClosed().subscribe(t=>{this.getBooks()})}downloadFile(t){w.saveAs("http://api.sunhouse.co.id/bookstore/"+t.url)}}return t.\u0275fac=function(a){return new(a||t)(i.Nb(T.b),i.Nb(c.a))},t.\u0275cmp=i.Hb({type:t,selectors:[["app-product"]],decls:2,vars:2,consts:[["style","height: 300px;","class","uk-flex uk-flex-center uk-flex-middle",4,"ngIf"],[4,"ngIf"],[1,"uk-flex","uk-flex-center","uk-flex-middle",2,"height","300px"],[1,"uk-flex"],[1,"uk-width-expand"],["mat-flat-button","","color","warn",3,"click"],[1,"uk-table","uk-table-middle","uk-table-divider"],["align","right"],[4,"ngFor","ngForOf"],["mat-icon-button","",3,"click",4,"ngIf"],["mat-button","","color","primary",3,"click"],["mat-button","","color","warn",3,"disabled","click"],["mat-icon-button","",3,"click"]],template:function(t,a){1&t&&(i.yc(0,O,2,0,"div",0),i.yc(1,I,30,2,"mat-card",1)),2&t&&(i.jc("ngIf",a.loading),i.Cb(1),i.jc("ngIf",!a.loading))},directives:[n.k,M.b,g.a,g.d,g.h,g.c,s.a,n.j,r.a],styles:[""]}),t})()},{path:"gallery",component:k},{path:"images",component:S},{path:"",pathMatch:"full",redirectTo:"/admin/dashboard"}]}];let N=(()=>{class t{}return t.\u0275fac=function(a){return new(a||t)},t.\u0275mod=i.Lb({type:t}),t.\u0275inj=i.Kb({imports:[[n.c,b.c.forChild(F),f.a,v,C.e]]}),t})()}}]);