<template>
    <div id="app">
        <img src="./images/logo.png" alt="logo" >
        {{msg}}
    </div>
</template>
<script>
    export default {
        name:'app',
        data(){
            return {
                msg: 'hello vue limegbo'
            }
        }
    }
</script>
<style lang="scss" scoped>
    #app {
        color: red;
    }
</style>

