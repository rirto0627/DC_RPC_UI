<template>
  <el-container>
    <el-header>
      <Menu mode="horizontal"  :theme="theme1">
        <MenuItem name="1" to="/">
          <Icon type="md-home"/>
          主選單
        </MenuItem>
        <MenuItem name="2" to="config">
          <Icon type="ios-construct" />
          系統設定
        </MenuItem>
      </Menu>
    </el-header>
    <el-main>
      <router-view>
      </router-view>
    </el-main>
  </el-container>

</template>

<script>
  import Vue from 'vue'
  import VueRouter from 'vue-router'

  Vue.use(VueRouter)


  export default {
    name: "App",


    data: () => ({
      currentActive:""
    }),

    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    },


  };
</script>

<style scoped>

</style>