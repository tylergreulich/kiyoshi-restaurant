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
  <div id="content-section">
    <div id="menu-page">
      <section id="food-preview">
        <div>
          <h2>We have everything you need to kill your hunger</h2>
        </div>
        <div class="container">
          <section class="food-slider">
            <div class="sliding-system">
              <figure
                v-for="foodCategory in foodCategories"
                :key="foodCategory.id"
                class="slide"
              >
                <div class="background" />
                <div class="content">
                  <div class="food-title">
                    {{ foodCategory.title }}
                  </div>
                  <p class="food-description">
                    {{ foodCategory.description }}
                  </p>
                  <div class="food-image">
                    <img :src="foodCategory.image_url" />
                  </div>
                </div>
              </figure>
            </div>
          </section>
        </div>
      </section>
    </div>
  </div>
</template>

<style lang="scss">
@import '../../sass/_mixins.scss';
@import '../../sass/_variables.scss';
@import '../../sass/pages/menu/_food-preview.scss';
</style>
