<template lang="html">
    <div id="app">
        <hello :msg="msg"></hello>
    </div>
</template>
<script>
export default {
    data() {
        return {
            msg: 'Hello World'            
        }
    },

    mounted() {
        console.log('App Mounted!');
    }
}
</script>
