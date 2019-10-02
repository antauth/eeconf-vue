<template>
        <div id="notifications" class="absolute right-0 top-0 m-2 w-2/5 bg-white inline-block border-l border rounded-t py-2 px-4">
                <div class="text-blue-700 font-semibold">
                        Comment Chatbox
                </div>

                <div id="comments">
                        <Comment v-for="c in Comments" :key="c.comment" :comment="c" />
                </div>
        </div>
</template>
<script lang="ts">
import Vue from 'vue';
import { Component, Prop, Vue } from 'vue-property-decorator';
import Comment, { IComment } from './components/Comment.vue';
import VueSocketIO from 'vue-socket.io';
import SocketIO from 'socket.io';

Vue.use(new VueSocketIO({
    debug: true,
    connection: (<any>window).serverUrl,
}));

@Component({
  components: {
      Comment
  },
})
export default class App extends Vue {

    classes: any = {
        tab: {
            active: 'bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-700 font-semibold',
            inactive: 'bg-white inline-block py-2 px-4 text-blue-500 rounded-t font-semibold'
        },
    };
    
    created() {

    }

    get Comments(): IComment[] {
       let comments = this.$store.state.comments;
       return comments;
    }


}
</script>

<style>


</style>
