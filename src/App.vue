<template>
  <div id="app" class="app">
    <nav class="nav">
      <router-link :to="{ name: `personal-info` }" class="nav-item">
        Personal Info
      </router-link>
      |
      <router-link :to="{ name: `contact-info` }" class="nav-item">
        Contact Info
      </router-link>
      |
      <router-link :to="{ name: `study-info` }" class="nav-item">
        Study Info
      </router-link>
      |
      <router-link :to="{ name: `residence-info` }" class="nav-item">
        Residence Info
      </router-link>
      |
      <router-link :to="{ name: `legitimation-info` }" class="nav-item">
        Legitimation Info
      </router-link>
      |
      <router-link :to="{ name: `about` }" class="nav-item">
        About
      </router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: `App`,
};
</script>

<style lang="scss">
@import "@/styles/global.scss";
</style>
