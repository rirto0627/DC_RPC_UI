<template>
    <div id="introduce">
        <h1>介紹</h1>
        <h2>開發人員：</h2>
        <Row>
            <i-Col span="11">
                <Card>
                    <p slot="title">熊兒</p>
                    <img style="position: absolute;right:20px;top:40px" width="130px" src="https://i.imgur.com/XQJUIKd.jpg"/>
                    <p>聯繫方式：<p>
                    <p style="color: steelblue">Discord:</p>
                    <p>熊兒#8304</p>
                    <p style="color: #42b983">LINE:</p>
                    <p>0981813705</p>
                    <p style="color: #ff5800;">伺服器群組：</p>
                    <a>https://discord.com/invite/Q5ruvyK</a>
                </Card>
            </i-Col>
        </Row>
    </div>
</template>

<script>
    export default {
        name: "introduce"
    }
</script>

<style>
    #introduce {
        color: #ffffff;
        padding: 10px;
    }
    .ivu-card-body{
        color: #2b2b2b;
    }
    .ivu-row{
        width: 700px;
    }
</style>