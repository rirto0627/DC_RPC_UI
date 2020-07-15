<template>
    <div id = "frame">
        <div id="title">
            Discord Rich Presence
            <Icon v-on:click="close" size="20"
                  style="position: absolute;right:0px;z-index: 9999999999;color: #FFFFFF;background: #36393F" type="md-power"/>
        </div>
        <el-container>
            <el-header style="padding: 0px">
                <Menu mode="horizontal">
                    <MenuItem name="3" to="account" style="right: 1px ;float:right;font-size: 15px" >
                        <Icon size="20" type="md-contact"/>
                        登入/註冊
                    </MenuItem>
                    <MenuItem name="1" to="/home" style="font-size: 15px">
                        <Icon size="20" type="md-home"/>
                        主選單
                    </MenuItem>
                    <MenuItem name="2" to="config" style="font-size: 15px">
                        <Icon size="20" type="md-settings"/>
                        系統設定
                    </MenuItem>
                </Menu>
            </el-header>
            <el-main>
                <div id='introduction'>
                    <router-view>
                    </router-view>
                </div>
            </el-main>
        </el-container>
    </div>
</template>

<script>
    import Vue from 'vue'
    import VueRouter from 'vue-router'
    const axios = require('axios').default;
    Vue.use(VueRouter)

    export default {
        name: "App",


        data: () => ({
            currentActive: ""
        }),

        methods: {
            close() {
                axios.get('/close')
                    .then(() => {

                    })
            }
        },

    };
</script>

<style>
    html{
        background: transparent;
        overflow-y:hidden;
    }
    body{
        background: transparent;
    }
    #frame{
        border-radius: 10px;
        overflow: hidden;
    }
</style>

<style scoped>

    #title {
        height: 20px;
        width: calc(100vw - 20px);
        z-index: 9999999999;
        background: #36393F;
        color: goldenrod;
        padding-left:7px ;
        -webkit-app-region: drag;
    }

    .el-main {
        padding: 0;
    }

    #introduction {
        height: calc(100vh - 60px - 20px);
        background: #2b2b2b;
    }
</style>