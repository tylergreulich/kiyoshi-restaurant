<script>
import HomeHero from '../components/Home/HomeHero';
import HomeInformation from '../components/Home/HomeInformation';
import HomeFoodCategories from '../components/Home/HomeFoodCategories';
export default {
  components: {
    HomeHero,
    HomeInformation,
    HomeFoodCategories,
  },
};
</script>

<template>
  <div>
    <HomeHero />
    <HomeInformation />
    <HomeFoodCategories />
  </div>
</template>
