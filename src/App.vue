<template>
  <v-app>
    <NavigationBar />
    <v-content fluid>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import NavigationBar from "./components/NavigationBar.vue";

export default {
  name: "App",

  data: () => ({
    //
  }),

  components: { NavigationBar },
};
</script>
