<template>
    <div class="comment group hover:bg-blue-500 p-4 m-4 cursor-pointer bg-yellow-200 rounded max-w-xs w-full shadow-lg select-none overflow-hidden float-left">
      <a v-bind:href="comment.url"><span class="text-gray-700 mb-2" v-html="comment.comment"></span> 
        [<span class="font-bold mb-2" v-html="comment.author"></span>]</a>
    </div>
</template>
<style scoped>
    
</style>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

export interface IComment {
    author?: string;
    comment: string;
    date?: string;
    location?: string;
    url?: string;
}

@Component
export default class Comment extends Vue {
    @Prop()
    comment: IComment;
    
    created() {
    console.log('comment created');
    }
    
}
console.log('comment loaded');
</script>
