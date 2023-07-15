<template>
  <!--Навигационная панель для средних и больших экранов-->
  <v-app-bar>
    <v-toolbar color="light-blue-darken-4 hidden-sm-and-down">
      <v-toolbar-title>
        <v-btn
          block
          variant="plain"
          value="home"
          :ripple="false"
          router
          :to="`/`"
        >
          <span class="font-weight-bold"
            >Гармония с вегетососудистой дистонией</span
          >
        </v-btn>
      </v-toolbar-title>
      <v-divider vertical></v-divider>

      <v-toolbar-items>
        <v-btn
          variant="text"
          value="about"
          append-icon="mdi-chevron-right"
          router
          :to="`/about`"
        >
          <span>Узнать больше о ВСД</span>
        </v-btn>
        <v-btn
          variant="text"
          value="test"
          append-icon="mdi-chevron-right"
          router
          :to="`/test`"
        >
          <span>Пройди тест Вейна</span>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <!--Навигационная панель для маленьких экранов-->
    <v-toolbar color="light-blue-darken-4 hidden-md-and-up">
      <v-toolbar-title>
        <v-btn
          block
          variant="plain"
          value="home"
          :ripple="false"
          router
          :to="`/`"
        >
          <span class="font-weight-bold text-subtitle-2"
            >Гармония с вегетососудистой дистонией</span
          >
        </v-btn>
      </v-toolbar-title>
      <v-divider vertical></v-divider>

      <v-toolbar-items>
        <v-btn icon="mdi-menu" @click="drawer = !drawer"> </v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </v-app-bar>
  <div>
    <v-navigation-drawer v-model="drawer" temporary>
      <v-list nav>
        <v-list-item
          title="Гармония с вегетососудистой дистонией"
          value="home"
          router
          :to="`/`"
        ></v-list-item>
        <v-list-item
          append-icon="mdi-chevron-right"
          title="Узнать больше о ВСД"
          value="about"
          router
          :to="`/about`"
        ></v-list-item>
        <v-list-item
          append-icon="mdi-chevron-right"
          title="Пройди тест Вейна"
          value="test"
          router
          :to="`/test`"
        ></v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
    };
  },
};
</script>
