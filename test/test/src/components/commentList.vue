<template>
  <div class="col-md-8">
    <h3 class="reply">评论回复：</h3>
    <h2 v-show="comments.length === 0">暂无评论，点击左侧添加评论！！！</h2>
    <ul class="list-group">
      <comment-item v-for="comment in comments" :comment="comment" :delete-comment="deleteComment"></comment-item>
    </ul>
  </div>
</template>

<script>
  import commentItem from './commentItem.vue'
  export default {
    props: {
      comments: {
        type: Array,
        required: true
      },
      deleteComment: {
        type: Function,
        required: true
      }

    },
    components: {
      commentItem
    }
  }
</script>

<style>
  .handle {
    width: 40px;
    border: 1px solid #ccc;
    background: #fff;
    position: absolute;
    right: 10px;
    top: 1px;
    text-align: center;
  }

  .handle a {
    display: block;
    text-decoration: none;
  }

  .list-group-item .centence {
    padding: 0px 50px;
  }

  .user {
    font-size: 22px;
  }

  .reply {
    margin-top: 0px;
  }

  .list-group li {
    transition: .5s;
    overflow: hidden;
  }
</style>
