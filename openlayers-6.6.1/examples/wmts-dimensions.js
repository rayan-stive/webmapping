(self.webpackChunk=self.webpackChunk||[]).push([[4194],{9469:function(t,e,a){"use strict";for(var o=a(1625),s=a(7340),n=a(7842),i=a(640),r=a(8717),l=a(4053),c=a(4589),m=a(6666),u=(0,c.U2)("EPSG:3857"),d=(0,m.dz)(u.getExtent())/256,f=[],h=[],g=0;g<=14;g++)f[g]=g,h[g]=d/Math.pow(2,g);var p=new l.Z({origin:(0,m.rL)(u.getExtent()),resolutions:h,matrixIds:f}),w=new r.Z({url:"https://ts2.scalgo.com/olpatch/wmts?token=CC5BF28A7D96B320C7DFBFD1236B5BEB",layer:"SRTM_4_1:SRTM_4_1_flooded_sealevels",format:"image/png",matrixSet:"EPSG:3857",attributions:['<a href="https://scalgo.com" target="_blank">SCALGO</a>','<a href="https://cgiarcsi.community/data/srtm-90m-digital-elevation-database-v4-1" target="_blank">CGIAR-CSI SRTM</a>'],tileGrid:p,style:"default",dimensions:{threshold:100}}),S=(new o.Z({target:"map",view:new i.ZP({projection:u,center:[-9871995,3566245],zoom:6}),layers:[new n.Z({source:new s.Z}),new n.Z({opacity:.5,source:w})]}),function(t,e){t.updateDimensions({threshold:e}),document.getElementById("theinfo").innerHTML=e+" meters"});S(w,10),document.getElementById("slider").addEventListener("input",(function(){S(w,this.value)}))}},function(t){"use strict";var e;e=9469,t(t.s=e)}]);
//# sourceMappingURL=wmts-dimensions.js.map