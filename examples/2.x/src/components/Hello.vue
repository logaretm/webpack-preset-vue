<template>
  <h1 class="title">{{ msg }}</h1>
</template>

<script>
export default {
    props: ['msg'],

    mounted() {
        console.log('Component Mounted!');
    }
}
</script>

<style lang="css">
.title {
  color: blue;
  font-weight: lighter;
}
</style>
