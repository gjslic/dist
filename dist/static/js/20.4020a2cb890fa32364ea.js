webpackJsonp([20],{Fozc:function(e,r,i){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var t=i("9K/l"),n={name:"auction",data:function(){return{breadcrumbArr:[{content:"拍卖页"}],brandID:0,seriesID:0,priceID:"",brandArr:[],seriesArr:[],priceArr:[]}},components:{Menu:function(){return i.e(28).then(i.bind(null,"ZdAc"))},QueryCar:function(){return i.e(30).then(i.bind(null,"dTcG"))},Breadcrumb:function(){return i.e(31).then(i.bind(null,"6Fvq"))},AuctionVehicle:function(){return i.e(32).then(i.bind(null,"NtLr"))},BackTop:function(){return i.e(33).then(i.bind(null,"9wla"))},Bottom:function(){return i.e(27).then(i.bind(null,"2ndn"))}},mounted:function(){var e=this;Object(t.a)("auction/Auction/queryCar").then(function(r){e.brandArr=r.data.data[0],e.seriesArr=r.data.data[1],e.priceArr=r.data.data[2]}).catch(function(e){console.log(e)})},methods:{brandFun:function(e){var r=this;this.brandID=e,this.seriesID=0;var i={brandID:this.brandID};Object(t.b)("buyCar/Buycar/seriesSel",i).then(function(e){r.seriesArr=e.data.data}).catch(function(e){console.log(e)}),this.$refs.vehicleSel.vehicleSel(this.brandID,this.seriesID,this.priceID,this.timeBaseNum,this.priceBaseNum)},seriesFun:function(e){this.seriesID=e,this.$refs.vehicleSel.vehicleSel(this.brandID,this.seriesID,this.priceID,this.timeBaseNum,this.priceBaseNum)},priceFun:function(e,r){this.priceID=r,this.$refs.vehicleSel.vehicleSel(this.brandID,this.seriesID,r,this.timeBaseNum,this.priceBaseNum)},timeBase:function(e){this.timeBaseNum=e,this.$refs.vehicleSel.vehicleSel(this.brandID,this.seriesID,this.priceID,this.timeBaseNum)},priceBase:function(e){this.priceBaseNum=e,this.$refs.vehicleSel.vehicleSel(this.brandID,this.seriesID,this.priceID,"",this.priceBaseNum)},defaultBase:function(){this.priceBaseNum="",this.timeBaseNum="",this.$refs.vehicleSel.vehicleSel(this.brandID,this.seriesID,this.priceID)}}},s={render:function(){var e=this,r=e.$createElement,i=e._self._c||r;return i("div",[i("Menu"),e._v(" "),i("Breadcrumb",{attrs:{"breadcrumb-arr":e.breadcrumbArr}}),e._v(" "),i("QueryCar",{attrs:{"brand-arr":e.brandArr,"series-arr":e.seriesArr,"price-arr":e.priceArr},on:{brandFun:e.brandFun,seriesFun:e.seriesFun,priceFun:e.priceFun}}),e._v(" "),i("AuctionVehicle",{ref:"vehicleSel"}),e._v(" "),i("BackTop"),e._v(" "),i("Bottom")],1)},staticRenderFns:[]};var c=i("VU/8")(n,s,!1,function(e){i("w+qy")},"data-v-139e0e17",null);r.default=c.exports},"w+qy":function(e,r){}});
//# sourceMappingURL=20.4020a2cb890fa32364ea.js.map