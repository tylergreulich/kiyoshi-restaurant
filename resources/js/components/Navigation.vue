<template>
  <div class="nav-container">
    <nav>
      <a href="/" class="logo">
        <img src="/img/resized.png" />
      </a>
      <div class="menu">
        <ul class="links">
          <li>
            <router-link to="/menu">
              Food
            </router-link>
          </li>
          <li>
            <router-link to="/about">
              About Us
            </router-link>
          </li>
          <li>
            <router-link to="/offers">
              Offers
            </router-link>
          </li>
          <li>
            <router-link to="/contact">
              Contact
            </router-link>
          </li>
          <li>
            <router-link to="/menu">
              Order
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<style lang="scss">
@import '../../sass/_variables.scss';
@import '../../sass/_navigation.scss';
</style>
