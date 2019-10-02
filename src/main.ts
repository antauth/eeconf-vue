import Vue from 'vue';
import App from './App.vue';
import store from './store';

Vue.config.productionTip = false;

new App({
    store,
    render: (h) => h(App),
    sockets: {
        connect(): void {        },
        comment(comment: IComment): void {
            this.$store.dispatch("addComment", comment);
        }
    };
}).$mount('#notifications');
