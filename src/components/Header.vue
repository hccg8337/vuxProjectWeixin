<template>
  <tabbar class="tabbar">
    <div class="title">{{ username }}，您好</div>
  </tabbar>

</template>
<style>
.tabbar{
background-color:#00CC66;
height:50px;
position:relative;
}
.search{
position:absolute;right:5px;top:5px;z-index:999;
}
.title{
   text-align:center;
margin:auto;
   color:white;
   line-height:50px;
   font-size:18px;
 }
</style>
<script>
import {Tabbar, TabbarItem} from 'vux'
    export default{
     name: 'AppHeader',
     components: {
       Tabbar,
       TabbarItem,
     },
     data(){
            return{
                username: 'chen'
            }
     },
     methods: {

     },
    }

</script>
