<template>
    <div id=login>
        <Input prefix="md-contact" placeholder="帳號或信箱" style="width: 300px;margin: 10px;" clearable/>
        <Input type="password" prefix="md-key" placeholder="密碼" style="width: 300px;margin: 10px;top:35%" clearable/>
        <Button type="info" style="background-color: #263238">登入</Button>
        <Button to="register" type="primary"  style="right: 80px;background-color: #263238">註冊</Button>
    </div>
</template>

<script>
    export default {
        name: "login"
    }
</script>


<style>
    .ivu-input {
        background-color: transparent!important;
        font-size: 15px!important;
        color: #8ED4FA!important;
        border-radius: 0!important;
    }

    .ivu-input-wrapper{
        background-color: #212121;
        position: absolute!important;
        top:25%;
        right: 0!important;
        opacity: 0.9;
        overflow: hidden!important;
    }

    .ivu-btn{
        position: absolute;
        top:50%;
        right: 10px;
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