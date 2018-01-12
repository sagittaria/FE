<template>
  <div class="pos">
    <el-row>
        <el-col :span='7' class="pos-order" id="order-list">
            <el-tabs type=card>
                <el-tab-pane label="点餐">
                    <el-table :data="tableData" border 
                            header-cell-style='background-color:#f5f7fa;' style="width: 100%" >
                        <el-table-column prop="goodsName" label="商品" align=center></el-table-column>
                        <el-table-column prop="count" label="量" width="50" align=center></el-table-column>
                        <el-table-column prop="price" label="金额" width="70" align=center></el-table-column>
                        <el-table-column  label="操作" width="100" fixed="right" align=center>
                            <template scope="scope">
                                <el-button type="text" size="small">删除</el-button>
                                <el-button type="text" size="small" @click="addOrderList(scope.row)">增加</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                    <div class="totalDiv">
                        <small>数量:</small>{{totalCount}} &nbsp;&nbsp;&nbsp; <small>总价:</small>¥{{totalMoney}}
                    </div>
                    <div class="div_btn">
                        <el-button type="warning" >挂单</el-button>
                        <el-button type="danger" >删除</el-button>
                        <el-button type="success" >结账</el-button>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="挂单">
                    挂单
                </el-tab-pane>
                <el-tab-pane label="外卖">
                    外卖
                </el-tab-pane>
            </el-tabs>
        </el-col>
        <!--商品展示-->
        <el-col :span="17">
            <div class="often-goods">
                <div class="title">常用商品</div>
                <div class="often-goods-list" >
                    <ul>
                        <li v-for="goods of oftenGoods" @click="addOrderList(goods)">
                            <span>{{goods.goodsName}}</span>
                            <span class="o-price">￥{{goods.price}}元</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="goods-type">
                <el-tabs type=card >
                        <el-tab-pane label="汉堡">
                            <ul class='cookList'>
                                <li v-for="goods in type0Goods" @click="addOrderList(goods)">
                                    <span class="foodImg"><img :src="goods.goodsImg" width="100%"></span>
                                    <span class="foodName">{{goods.goodsName}}</span>
                                    <span class="foodPrice">￥{{goods.price}}元</span>
                                </li>
                            </ul>
                        </el-tab-pane>
                        <el-tab-pane label="小食">
                            <ul class='cookList'>
                                <li v-for="goods in type1Goods" @click="addOrderList(goods)">
                                    <span class="foodImg"><img :src="goods.goodsImg" width="100%"></span>
                                    <span class="foodName">{{goods.goodsName}}</span>
                                    <span class="foodPrice">￥{{goods.price}}元</span>
                                </li>
                            </ul>
                        </el-tab-pane>
                        <el-tab-pane label="饮料">
                            <ul class='cookList'>
                                <li v-for="goods in type2Goods" @click="addOrderList(goods)">
                                    <span class="foodImg"><img :src="goods.goodsImg" width="100%"></span>
                                    <span class="foodName">{{goods.goodsName}}</span>
                                    <span class="foodPrice">￥{{goods.price}}元</span>
                                </li>
                            </ul>
                        </el-tab-pane>
                        <el-tab-pane label="套餐">
                            <ul class='cookList'>
                                <li v-for="goods in type3Goods" @click="addOrderList(goods)">
                                    <span class="foodImg"><img :src="goods.goodsImg" width="100%"></span>
                                    <span class="foodName">{{goods.goodsName}}</span>
                                    <span class="foodPrice">￥{{goods.price}}元</span>
                                </li>
                            </ul>
                        </el-tab-pane>
                </el-tabs>
            </div>
        </el-col>
    </el-row>
  </div>
</template>
 
<script>
import axios from 'axios'
export default {
  name: 'Pos',
  data(){
    return {
        tableData: [],
        oftenGoods:[],
        type0Goods:[],
        type1Goods:[],
        type2Goods:[],
        type3Goods:[],
        totalMoney:0,
        totalCount:0
    }
  },
  methods:{
      //添加订单列表的方法
      addOrderList(goods){
            this.totalCount=0; //汇总数量清0
            this.totalMoney=0;
            let isHave=false;
            //判断是否这个商品已经存在于订单列表
            for (let i=0; i<this.tableData.length;i++){
                if(this.tableData[i].goodsId==goods.goodsId){
                    isHave=true; //存在
                }
            }
            //根据isHave的值判断订单列表中是否已经有此商品
            if(isHave){
                //存在就进行数量添加
                 let arr = this.tableData.filter(o =>o.goodsId == goods.goodsId);
                 arr[0].count++;
                 //console.log(arr);
            }else{
                //不存在就推入数组
                let newGoods={goodsId:goods.goodsId,goodsName:goods.goodsName,price:goods.price,count:1};
                this.tableData.push(newGoods);
            }
            //进行数量和价格的汇总计算
            this.tableData.forEach((element) => {
                this.totalCount+=element.count;
                this.totalMoney=this.totalMoney+(element.price*element.count);   
            });
      }
  },
  created(){
      axios.get('http://jspang.com/DemoApi/oftenGoods.php')
      .then(response=>{
         this.oftenGoods=response.data;
      })
      .catch(error=>{
          console.log(error);
          alert('网络错误，不能访问');
      });
      axios.get('http://jspang.com/DemoApi/typeGoods.php')
      .then(response=>{
        this.type0Goods=response.data[0];
        this.type1Goods=response.data[1];
        this.type2Goods=response.data[2];
        this.type3Goods=response.data[3];
      })
      .catch(error=>{
          console.log(error);
          alert('网络错误，不能访问');
      })
  },
  mounted:function(){
      var orderHeight=document.body.clientHeight;
      document.getElementById("order-list").style.height=orderHeight+'px';
  },
}
</script>
<style scoped>
.pos-order{
    background-color:#f9fafc;
    border-right:1px solid #c0ccda;
}
.div_btn{
    margin-top:10px;
    text-align:center;
}
.title{
   height: 20px;
   border-bottom:1px solid #D3DCE6;
   background-color: #F9FAFC;
   padding:10px;
}

.often-goods-list ul li{
  list-style: none;
  float:left;
  border:1px solid #E5E9F2;
  padding:10px;
  margin:10px;
  background-color:#fff;
}
.o-price{
  color:#58B7FF; 
}
.goods-type{
    clear:both;
    padding-top:20px;
}

.cookList li{
   list-style: none;
   width:23%;
   border:1px solid #E5E9F2;
   height: auot;
   overflow: hidden;
   background-color:#fff;
   padding: 2px;
   float:left;
   margin: 2px;

}
.cookList li span{
    display: block;
    float:left;
}
.foodImg{
   width: 40%;
}
.foodName{
   font-size: 18px;
   padding-left: 10px;
   color:brown;

}
.foodPrice{
   font-size: 16px;
   padding-left: 10px;
   padding-top:10px;
}
.totalDiv{
    text-align:center;
    background-color:#fff;
    padding:10px;
    border-bottom:1px solid #d3dce6;
}
</style>