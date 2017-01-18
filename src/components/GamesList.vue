<template>
  <div>
    <group>
      <cell v-for="x in list" :title="x.title" :inline-desc="x.comments">
        <div slot="icon" class="state"></div>
        <div slot="default">
          <button-tab :value="0">
            <button-tab-item @on-item-click="showDetails(x.id)">详情</button-tab-item>
          </button-tab>
          <button-tab :value="0">
            <button-tab-item>取消</button-tab-item>
          </button-tab>
        </div>
      </cell>
    </group>
    <actionsheet v-model="show" :menus="menus"></actionsheet>
  </div>
</template>

<script>
  import { Cell, ButtonTabItem, ButtonTab, Actionsheet, Group } from 'vux'

  export default {
    components: {
      Group,
      Cell,
      ButtonTabItem,
      ButtonTab,
      Actionsheet
    },
    data () {
      return {
        list: [],
        menus: {},
        show: false
      }
    },
    created: function () {
      this.list = [{id: 1, title: '1', comments: '1111111111', path: ''},
        {id: 2, title: '2', comments: '2222222222'}]
    },
    methods: {
      showDetails (id) {
        var obj = null
        for (var i in this.list) {
          if (this.list[i].id === id) {
            obj = this.list[i]
            break
          }
        }
        this.menus = {
          'menu1.noop': '场地：' + obj.place,
          'menu2.noop': '比赛开始时间：' + obj.gamestarttime,
          'menu3.noop': '备注：' + obj.comments
        }
        this.show = true
      }
    }
  }
</script>

<style>
  .state{
    width: 60px;
    height: 60px;
    background: black;
    border-radius: 50%;
    margin-right:10px;
  }
</style>

