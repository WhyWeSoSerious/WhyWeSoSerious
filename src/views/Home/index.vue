<template>
  <div>
    <TypeNav/>
    <listContaine />
    <todayRecommend />
    <Rank />
    <Like />
    <Floor  v-for="floor in floors" :key="floor.id" :floor="floor"/>
    <Brand />
  </div>
</template>

<script>
import {mapState} from 'vuex'
import TypeNav from "@/components/type-nav";
import listContaine from "./list-container";
import Brand from "./brand";
import Floor from "./floor";
import Like from "./like";
import Rank from "./rank";
import todayRecommend from "./today-recommend";
export default {
  name: "Home",
  //todo 获取数据
  mounted(){
    this.$store.dispatch('getBannerList')
    this.$store.dispatch('getFloors')
    this.$store.dispatch('getRecommends')
  },
  computed: {
    ...mapState({
      floors: state => state.home.floors
    })
  },
  components: {
    listContaine,
    Brand,
    Floor,
    Like,
    Rank,
    todayRecommend,
    TypeNav,
  },
};
</script>

<style lang = 'less' scoped>

  
</style>
