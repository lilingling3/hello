<template>
  <h2>sub</h2>
<div v-for="a in arr">

  <a v-link="{path:'/home/sub/detail/'+a.id}">{{a.title}}</a>
</div>
  <div>
    <router-view keep-alive></router-view>
  </div>
</template>
<script>
export default {
  data () {
    return {
      arr:[
        {id:1,title:'title1'},
        {id:2,title:'title2'},
        {id:3,title:'title3'},
      ]
    }
  },
  components: {}
}
</script>

<style>

</style>
