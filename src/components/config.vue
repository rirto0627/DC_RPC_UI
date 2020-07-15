<template>
    <div id="input">
        <Input v-model="clientID" prefix="md-ionitron" placeholder="Client ID" style="width: 470px;margin: 10px" clearable/>
        <br>
        <Input v-model="details" prefix="ios-create" placeholder="details" style="width: 225px;margin: 10px" clearable/>
        <Input v-model="state" prefix="ios-create" placeholder="state" style="width: 225px;margin: 10px" clearable/>
        <br>
        <Input v-model="largeImageKey" prefix="md-image" placeholder="largeImageKey" style="width: 225px;margin: 10px"
               clearable/>
        <Input v-model="smallImageKey" prefix="md-image" placeholder="smallImageKey" style="width: 225px;margin: 10px"
               clearable/>
        <br>
        <Button v-on:click="save()" style="margin: 10px" @click="background('success')">更新資訊</Button>
    </div>
</template>

<script>
    const axios = require('axios').default;
    export default {
        name: "config",
        data: () => ({
            clientID: "",
            details: "",
            state: "",
            largeImageKey: "",
            smallImageKey: "",
        }),
        methods: {
            background(type) {
                this.$Message[type]({
                    background: true,
                    content: '儲存成功'
                });
            },
            save() {
                var change = {
                    clientID: this.clientID,
                    details: this.details,
                    state: this.state,
                    largeImageKey: this.largeImageKey,
                    smallImageKey: this.smallImageKey
                }
                axios.get('http://localhost:2715/save?data=' + JSON.stringify(change))
                    .then(function () {

                    })
            }

        },
        mounted() {
            axios.get('http://localhost:2715/setting.json')
                .then((response) => {
                    this.clientID = response.data.clientID.toString()
                    this.details = response.data.details
                    this.state = response.data.state
                    this.largeImageKey = response.data.largeImageKey
                    this.smallImageKey = response.data.smallImageKey
                })
        },
    }
</script>

<style>
    #input {
        padding: 5px;
    }
</style>