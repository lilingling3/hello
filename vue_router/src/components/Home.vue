<template>
<div>
  home component
  <div>
    <a v-link="{path:'/home/sub'}">sub</a>
  </div>
  <div>
    <router-view keep-alive></router-view>
  </div>
</div>
</template>
<script>
export default {
  components: {}
}
</script>

<style>

</style>
