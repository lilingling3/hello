<template>
  <div class="row">
    <h2 v-show="firstView">Start Search</h2>
    <h2 v-show="loading">Loading.......</h2>
    <h2 v-if="error">{{error}}</h2>
    <div v-show="users" class="card" v-for="user in users">
      <a :href="user.html_url" target="_blank">
        <img :src="user.avatar_url" style='width: 100px'/>
      </a>

      <p class="card-text">{{user.login}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    props:['searchName'],
    data () {
      return {
        firstView :true,
        loading:false,
        users:null,
        error:null
      }
    },
    computed:{
      searchName:{
        set(value){
          //监视数据变化，发送请求
          //更新状态
          this.firstView = false
          this.loading = true
          const url = `https://api.github.com/search/users?q=${value}`;
          this.$http.get(url).then(response =>{
            this.loading = false
            this.users =response.data.items
            console.log(response);
          },
            response =>{
              console.log(response);
              this.loading = false
              this.error = response.statusText
            }
          )
        }
      }
    },
    components: {}
  }
</script>

<style>
  .card {
    float: left;
    width: 33.333%;
    padding: .75rem;
    margin-bottom: 2rem;
    border: 1px solid #efefef;
    text-align: center;
  }

  .card > img {
    margin-bottom: .75rem;
    border-radius: 100px;
  }

  .card-text {
    font-size: 85%;
  }
</style>
