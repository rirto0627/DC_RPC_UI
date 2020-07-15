<template>
    <div id=login>
        <el-steps :active="active" finish-status="success" style="padding: 20px">
            <el-step title="步骤 1"></el-step>
            <el-step title="步骤 2"></el-step>
            <el-step title="步骤 3"></el-step>
        </el-steps>
        <el-button style="position: absolute;bottom: 12px;right:12px" @click="next">下一步</el-button>

    </div>
</template>

<script>
    export default {
        name: "register",
        data() {
            return {
                active: 0
            };
        },

        methods: {
            next() {
                if (this.active++ > 2) this.active = 0;
            }
        }
    }
</script>

<style>
    .el-button{

    }

</style>

<style lang="scss" scoped>
    #login {
        background-image: url("https://i.imgur.com/iooDUMC.jpg");
        background-size: 100% 100%;
        width: 600px;
        height: 400px;
        position: absolute;
        top: 20%;
        left: 50%;
        margin: 0 0 0 -300px;
        border-radius: 20px;
        opacity: 0.9;
    }
</style>