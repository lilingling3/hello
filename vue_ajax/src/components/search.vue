<template>
  <input type="text" placeholder="enter the name you search" v-model="userName"/>
  <button @click="search">Search</button>

</template>

<script>
  export default {
    props:['setSerchName'],
    data () {
      return {
        userName:''
      }
    },
    components: {},
    methods: {
      search () {
        const userName = this.userName && this.userName.trim();
        if(userName){
          this.setSerchName(userName)
        }
      }
    }
  }
</script>

<style>

</style>
