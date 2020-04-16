<script>
import axios from 'axios';

export default {
  data: () => ({
    foodCategories: null,
  }),

  created() {
    this.getFoodCategories();
  },

  methods: {
    getFoodCategories() {
      axios
        .get('/api/food-categories/all')
        .then((response) => {
          this.foodCategories = response.data;
        })
        .catch((error) => console.error(error));
    },
  },
};
</script>

<template>
  <section id="food-preview">
    <h2>We have everything you need to kill your hunger</h2>

    <div class="container">
      <div class="food-slider">
        <div class="sliding-system">
          <figure
            class="slide"
            v-for="foodCategory in foodCategories"
            :key="foodCategory.id"
          >
            <div class="content">
              <div class="food-container">
                <div class="food-title">
                  {{ foodCategory.title }}
                </div>
                <p class="food-description">
                  {{ foodCategory.description }}
                </p>
                <router-link :to="`/menu/${foodCategory.id}`">
                  <button class="food-button">View More</button>
                </router-link>
              </div>
              <div class="food-image">
                <img :src="foodCategory.image_url" />
              </div>
            </div>
          </figure>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import '../../../sass/_mixins.scss';
@import '../../../sass/_variables.scss';
@import '../../../sass/pages/menu/_food-preview.scss';
</style>
