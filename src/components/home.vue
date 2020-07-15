<template>
<div id="introduce">
    <h1>歡迎使用 Discord Rich Presence</h1>
    <h2>版本:v1.0.0    </h2>
    <h2 style="color: yellow"><br>注意事項：</h2>
    <h2>熊兒開發資料僅供個人名義使用<br>
        並禁止任何營利行為<br>
        <br>
    </h2>
    <h2 style="color: #42b983">
        開發紀錄</h2>
    <Timeline>
        <TimelineItem>
            <p class="time">2020/07/04</p>
            <p class="content">版本v1.0.0發布</p>
        </TimelineItem>
        <TimelineItem>
            <p class="time">2020/07/05</p>
            <p class="content">版本V1.1.0</p>
            <p class="content">Fix:ClientID異常</p>
        </TimelineItem>
        <TimelineItem><a href="#">查看更多</a></TimelineItem>

    </Timeline>

</div>
</template>

<script>
    export default {
        name: "home",}
</script>

<style>
#introduce{
    color: aliceblue;
    padding: 10px;
}
</style>