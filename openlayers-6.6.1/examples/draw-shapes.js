(self.webpackChunk=self.webpackChunk||[]).push([[4008],{1253:function(e,n,t){"use strict";var r,c=t(9341),o=t(1625),u=t(1611),a=t(640),i=t(7340),s=t(1940),w=t(7842),f=t(710),l=new w.Z({source:new i.Z}),v=new s.Z({wrapX:!1}),h=new f.Z({source:v}),m=new o.Z({layers:[l,h],target:"map",view:new a.ZP({center:[-11e6,46e5],zoom:4})}),M=document.getElementById("type");function p(){var e,n=M.value;"None"!==n&&("Square"===n?(n="Circle",e=(0,c.t)(4)):"Box"===n?(n="Circle",e=(0,c.dO)()):"Star"===n&&(n="Circle",e=function(e,n){for(var t=e[0],r=e[e.length-1],c=t[0]-r[0],o=t[1]-r[1],a=Math.sqrt(c*c+o*o),i=Math.atan2(o,c),s=[],w=0;w<12;++w){var f=i+2*w*Math.PI/12,l=w%2==0?1:.5,v=a*l*Math.cos(f),h=a*l*Math.sin(f);s.push([t[0]+v,t[1]+h])}return s.push(s[0].slice()),n?n.setCoordinates([s]):n=new u.ZP([s]),n}),r=new c.ZP({source:v,type:n,geometryFunction:e}),m.addInteraction(r))}M.onchange=function(){m.removeInteraction(r),p()},document.getElementById("undo").addEventListener("click",(function(){r.removeLastPoint()})),p()}},function(e){"use strict";var n;n=1253,e(e.s=n)}]);
//# sourceMappingURL=draw-shapes.js.map