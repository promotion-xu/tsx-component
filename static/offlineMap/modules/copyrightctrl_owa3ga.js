_jsload2&&_jsload2('copyrightctrl', 'x.extend(Yb.prototype,{xf:function(){this.C&&this.Ee(this.C)},initialize:function(a){Tb.prototype.initialize.call(this,a);this.Aa();this.oo();this.ca(a);return this.B},ca:function(a){var b=this;a.addEventListener("load",function(){b.oo()});a.addEventListener("moveend",function(){b.oo()});a.addEventListener("zoomend",function(){b.oo()});a.addEventListener("maptypechange",function(){b.B&&(b.B.style.color=b.C.pa().vm())})},Aa:function(){Tb.prototype.Aa.call(this);x.D.Ua(this.B,"BMap_cpyCtrl");var a= this.B.style;a.cursor="default";a.whiteSpace="nowrap";a.MozUserSelect="none";a.color=this.C.pa().vm();a.background="none";a.font="11px/15px "+E.fontFamily;Tb.prototype.Ir.call(this)},oo:function(){if(this.C&&this.B&&0!=this.dc.length)for(var a=0,b=this.dc.length;a<b;a++){this.C.fa();var c=this.C.wb({x:0,y:0}),d=this.C.wb({x:this.C.width,y:this.C.height}),c=new eb(c,d);if(this.dc[a].bounds&&c.gt(this.dc[a].bounds)==p){if(this.B)for(d=0;d<this.B.children.length;d++)if(this.B.children[d].getAttribute("_cid")== this.dc[a].id&&"none"!=this.B.children[d].style.display){this.B.children[d].style.display="none";return}}else if(this.B){for(var c=q,d=0,e=this.B.children.length;d<e;d++)if(this.B.children[d].getAttribute("_cid")==this.dc[a].id){c=o;this.B.children[d].style.display="inline";this.B.children[d].innerHTML!=this.dc[a].content&&(this.B.children[d].innerHTML=this.dc[a].content);break}c||this.Pq(this.dc[a])}}},nw:function(a){if(a&&Xa(a.id)&&!isNaN(a.id)){var b={bounds:p,content:""},c;for(c in a)b[c]=a[c]; if(a=this.nm(a.id))for(var d in b)a[d]=b[d];else this.dc.push(b);this.oo()}},nm:function(a){for(var b=0,c=this.dc.length;b<c;b++)if(this.dc[b].id==a)return this.dc[b]},DD:u("dc"),$E:function(a){for(var b,c=0,d=this.dc.length;c<d;c++)this.dc[c].id==a&&(b=this.dc.splice(c,1),c--,d=this.dc.length);(a=this.Id(a))&&a.parentNode&&a.parentNode.removeChild(a);this.oo();return b},Pq:function(a){this.B&&(this.B.innerHTML+="<span _cid=\'"+a.id+"\'>"+a.content+"</span>")},Id:function(a){var b=Tb.prototype.Id.call(this); if(Eb(a)){if(b)for(var c=0,d=b.children.length;c<d;c++)if(b.children[c].getAttribute("_cid")==a)return b.children[c]}else return b}});S(lf,{addCopyright:lf.nw,removeCopyright:lf.$E,getCopyright:lf.nm,getCopyrightCollection:lf.DD}); ');
