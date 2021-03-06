import Vue from 'vue';
import Hello from './components/Hello.vue';
import App from './App.vue';

Vue.component('hello', Hello);

new Vue({
    el: '#app',

    render: h => h(App)
});
