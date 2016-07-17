import Vue from 'vue';
import Hello from './components/Hello.vue';

new Vue({
    el: 'body',
    data: {
        msg: 'Hello World'
    },
    components: {
        Hello
    }
});
