<template>
  <div>
    <TypeNav/>
    <listContaine />
    <todayRecommend />
    <Rank />
    <Like />
    <Floor />
    <Floor />
    <Brand />
  </div>
</template>

<script>
import TypeNav from "@/components/type-nav";
import listContaine from "./list-container";
import Brand from "./brand";
import Floor from "./floor";
import Like from "./like";
import Rank from "./rank";
import todayRecommend from "./today-recommend";
export default {
  name: "Home",
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
