<template>
  <div>
    <TypeNav/>
    <h3>{{$route.params}}</h3>
      <h3>{{$route.query}}</h3>

  </div>
</template>

<script>
import TypeNav from "@/components/type-nav";
export default {
  name: 'search',
  components: {
    TypeNav,
  }
}
</script>

<style scoped>

</style>
