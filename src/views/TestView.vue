<template>
  <div class="mt-16">
    <div class="bgimg">
      <v-container>
        <h1 class="text-center text-white">Тест Вейна</h1>
        <v-card class="py-6 px-6 my-8" elevation="10">
          <v-card-text class="my-5 text-justify">
            <p>
              Опросник Вейна предназначен для опроса взрослых людей, возрастом
              от 18 до 65 лет. Он универсален для мужчин и женщин, независимо от
              образа жизни и сферы деятельности. Представленная методика
              разработана для экспресс-скрининга нарушений в работе вегетативной
              нервной системе. Она подходит для первичного анализа, но не
              раскрывает причины возникновения симптомов. Точный диагноз может
              установить только невропатолог после полноценного клинического
              обследования. Результаты теста могут быть основанием для обращения
              за профессиональной медицинской помощью.
            </p>
          </v-card-text>
        </v-card>
      </v-container>
    </div>
    <hr />
    <v-container class="px-16 my-8">
      <div>
        <p class="text-subtitle-1">
          1. Отмечаете ли Вы (при любом волнении) склонность к:
        </p>
        <p class="text-body-1 mx-4">a. покраснения лица</p>
        <v-radio-group class="mx-8 text-body-2">
          <v-radio label="да" value="3" @click="test_result[0] = 3"></v-radio>
          <v-radio label="нет" value="0" @click="test_result[0] = 0"></v-radio>
        </v-radio-group>
        <p class="text-body-1 mx-4">b. побледнению лица</p>
        <v-radio-group class="mx-8 text-body-2">
          <v-radio label="да" value="3" @click="test_result[1] = 3"></v-radio>
          <v-radio label="нет" value="0" @click="test_result[1] = 0"></v-radio>
        </v-radio-group>
      </div>

      <div>
        <p class="text-subtitle-1">
          2. Бывает ли у Вас онемение или похолодание:
        </p>
        <p class="text-body-1 mx-4">a. пальцев кистей, стоп</p>
        <v-radio-group class="mx-8 text-body-2">
          <v-radio label="да" value="3" @click="test_result[2] = 3"></v-radio>
          <v-radio label="нет" value="0" @click="test_result[2] = 0"></v-radio>
        </v-radio-group>
        <p class="text-body-1 mx-4">b. целиком кистей, стоп</p>
        <v-radio-group class="mx-8 text-body-2">
          <v-radio label="да" value="4" @click="test_result[3] = 4"></v-radio>
          <v-radio label="нет" value="0" @click="test_result[3] = 0"></v-radio>
        </v-radio-group>
      </div>

      <div>
        <p class="text-subtitle-1">
          3. Бывает ли у Вас изменение окраски (побледнение, покраснение,
          синюшность):
        </p>
        <p class="text-body-1 mx-4">a. пальцев кистей, стоп</p>
        <v-radio-group class="mx-8 text-body-2">
          <v-radio label="да" value="5" @click="test_result[4] = 5"></v-radio>
          <v-radio label="нет" value="0" @click="test_result[4] = 0"></v-radio>
        </v-radio-group>
        <p class="text-body-1 mx-4">b. целиком кистей, стоп</p>
        <v-radio-group class="mx-8 text-body-2">
          <v-radio label="да" value="5" @click="test_result[5] = 5"></v-radio>
          <v-radio label="нет" value="0" @click="test_result[5] = 0"></v-radio>
        </v-radio-group>
      </div>

      <div>
        <p class="text-subtitle-1">4. Отмечаете ли Вы повышенную потливость?</p>
        <v-radio-group class="mx-8 text-body-2">
          <v-radio label="да" value="4" @click="test_result[6] = 4"></v-radio>
          <v-radio label="нет" value="0" @click="test_result[6] = 0"></v-radio>
        </v-radio-group>
      </div>

      <div>
        <p class="text-subtitle-1">
          5. Бывают ли у Вас часто ощущения сердцебиения, «замирания»,
          «остановки сердца»?
        </p>
        <v-radio-group class="mx-8 text-body-2">
          <v-radio label="да" value="7" @click="test_result[7] = 7"></v-radio>
          <v-radio label="нет" value="0" @click="test_result[7] = 0"></v-radio>
        </v-radio-group>
      </div>

      <div>
        <p class="text-subtitle-1">
          6. Бывают ли у Вас часто ощущения затруднения при дыхании: чувство
          нехватки воздуха, учащенное дыхание?
        </p>
        <v-radio-group class="mx-8 text-body-2">
          <v-radio label="да" value="7" @click="test_result[8] = 7"></v-radio>
          <v-radio label="нет" value="0" @click="test_result[8] = 0"></v-radio>
        </v-radio-group>
      </div>

      <div>
        <p class="text-subtitle-1">
          7. Характерно ли для Вас нарушение функции желудочно-кишечного тракта:
          склонность к запорам, поносам, «вздутиям» живота, боли?
        </p>
        <v-radio-group class="mx-8 text-body-2">
          <v-radio label="да" value="6" @click="test_result[9] = 6"></v-radio>
          <v-radio label="нет" value="0" @click="test_result[9] = 0"></v-radio>
        </v-radio-group>
      </div>

      <div>
        <p class="text-subtitle-1">
          8. Бывают ли у Вас обмороки (потеря внезапно сознания или чувство, что
          можете его потерять)?
        </p>
        <v-radio-group class="mx-8 text-body-2">
          <v-radio label="да" value="7" @click="test_result[10] = 7"></v-radio>
          <v-radio label="нет" value="0" @click="test_result[10] = 0"></v-radio>
        </v-radio-group>
      </div>

      <div>
        <p class="text-subtitle-1">
          9. Бывают ли у вас приступообразные головные боли?
        </p>
        <v-radio-group class="mx-8 text-body-2">
          <v-radio label="да" value="7" @click="test_result[11] = 7"></v-radio>
          <v-radio label="нет" value="0" @click="test_result[11] = 0"></v-radio>
        </v-radio-group>
      </div>

      <div>
        <p class="text-subtitle-1">
          10. Отмечаете ли Вы в настоящее время снижение работоспособности,
          быструю утомляемость?
        </p>
        <v-radio-group class="mx-8 text-body-2">
          <v-radio label="да" value="5" @click="test_result[12] = 5"></v-radio>
          <v-radio label="нет" value="0" @click="test_result[12] = 0"></v-radio>
        </v-radio-group>
      </div>

      <div>
        <p class="text-subtitle-1">11. Отмечаете ли Вы нарушения сна?</p>
        <v-radio-group class="mx-8 text-body-2">
          <v-radio label="да" value="5" @click="test_result[13] = 5"></v-radio>
          <v-radio label="нет" value="0" @click="test_result[13] = 0"></v-radio>
        </v-radio-group>
      </div>
    </v-container>

    <v-container>
      <v-row justify="center" align="center">
        <v-btn
          class="ma-6 align-self-center text-body-1"
          color="light-blue-darken-4"
          @click="createPost"
          router
          :to="`${link}`"
          >Подсчитать</v-btn
        >
      </v-row>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "App",

  data() {
    return {
      test_result: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    };
  },

  computed: {
    result() {
      return (
        this.test_result.reduce(
          (accumulator, currentValue) => accumulator + currentValue,
          0
        ) > 15
      );
    },
    link() {
      return this.result ? "/result_true" : "/result_false";
    },
  },
  methods: {
    showResult() {
      if (this.result) {
        alert("У вас первично выявлен ВСД");
      } else {
        alert("Все нормально");
      }
    },

    createPost() {
      axios
        .post("https://server-practice-eo8u.onrender.com/results/", {
          test_result: this.test_result,
          result: this.result,
        })
        .then((response) => console.log(response))
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
</script>

<style type="text/css">
.bgimg {
  background-image: url("../assets/bg_home.png");
  background-repeat: repeat;
}
</style>
