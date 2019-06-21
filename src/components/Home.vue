<template>
  <div>
    <!-- Parallax -->
    <Dialog/>
    <v-parallax
      height="650"
      src="https://conversionxl.com/wp-content/uploads/2018/09/coding-language.jpg"
    >
      <v-layout align-center column justify-center data-aos="zoom-out">
        <v-hover>
          <v-avatar slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 2}`" size="200">
            <img src="@/assets/profile_header.jpg" alt="Four">
          </v-avatar>
        </v-hover>
        <h1 class="display-3 mb-3 margin_home">{{ user.nickName }}</h1>
        <h2>{{ user.name }}</h2>
      </v-layout>
    </v-parallax>
    <section>
      <v-layout align-center data-aos="flip-down">
        <v-flex xs6 v-for="(logo,i) in logos" :key="i">
          <vue-flashcard :front="logo.title" 
          headerFront="คุณต้องการทราบข้อมูลเพิ่มเติมไหม"
          footerFront="คลิกเพื่อเปิดการ์ด"
          footerBack="คลิกเพื่อกลับไปหน้าแรก"
          :imgFront="logo.imgs"
          :colorBack="logo.color"
          :back="logo.skill"
          textSizeBack="7em"
          colorFront="#E4E4E4"
          headerBack="คำตอบ"
          ></vue-flashcard>
        </v-flex>
      </v-layout>
    </section>
    <div>
      <v-container>
        <v-timeline>
          <v-timeline-item
            data-aos="zoom-out"
            v-for="(year, i) in years"
            :key="i"
            :color="year.color"
            small
          >
            <template v-slot:opposite>
              <span :class="`headline font-weight-bold`" class="year_white" v-text="year.year"></span>
            </template>

            <div class="py-3">
              <v-hover>
                <v-card
                  class="rounded-card bg-color"
                  slot-scope="{ hover }"
                  :class="`elevation-${hover ? 12 : 2}`"
                >
                  <v-container>
                    <v-img class="rounded-card" :src="year.src" aspect-ratio="1.7"></v-img>
                    <h1
                      :class="`headline mb-3 ${year.color}--text`"
                      class="margin_home text-xs-center"
                    >{{ year.title }}</h1>
                    <h3>{{ year.detail }}</h3>
                    <div class="text-xs-center">
                      <v-rating :color="year.color" v-model="year.rating"></v-rating>
                    </div>
                  </v-container>
                </v-card>
              </v-hover>
            </div>
          </v-timeline-item>
        </v-timeline>
      </v-container>
    </div>
    <back-to-top visibleoffset="500">
      <v-btn color="primary darken-2" dark>
        <v-icon dark left>arrow_back</v-icon>กลับไปด้านบน
      </v-btn>
    </back-to-top>
  </div>
</template>

<script>
// @ is an alias to /src
import Dialog from "../components/Dialog";
import vueFlashcard from "vue-flashcard";
export default {
  components: {
    Dialog,
    vueFlashcard
  },
  data() {
    return {
      logos: [
        {
          imgs: require("../assets/angular.png"),
          title: "Angular",
          color: "#DE0330",
          skill: "5/10"
        },
        {
          imgs: require("../assets/ionic.png"),
          title: "Ionic",
          color: "#1491FF",
          skill: "7/10"
        },
        {
          imgs: require("../assets/vue.png"),
          title: "Vue.js",
          color: "#65AC7D",
          skill: "6/10"
        }
      ],

      user: {
        nickName: "Four",
        name: "Narakorn Vichianchai"
      },
      years: [
        {
          title: "ประถมศึกษา : โรงเรียนกาฬสินธุ์พิทยาสัย",
          color: "#483D8B",
          year: "2003 - 2008",
          detail:
            "เรื่องราวเกิดขึ้นหลังจากเรียนจบอนุบาล ต้องหาที่เรียนประถมต่อมีโรงเรียนดี ๆ มากมายแต่ผมไม่เลือกด้วยเหตุผลเดียวเพราะว่า 'สาวที่นี่น่ารัก' ",
          src: require("@/assets/study1.jpg"),
          rating: 3
        },
        {
          title: "มัธยมศึกษา : โรงเรียนสหัสขันธ์ศึกษา",
          color: "#00CED1",
          year: "2009 - 2014",
          detail:
            "เรื่องราวเกิดขึ้นหลังจากเรียนจบประถม ต้องหาที่เรียนมัธยมต่อมีโรงเรียนดี ๆ มากมายแต่ผมไม่เลือกด้วยเหตุผลเดียวเพราะว่า 'ฝักใฝ่การเล่นฟุตซอลในสนามบาส' ",
          src: require("@/assets/study2.jpeg"),
          rating: 3
        },
        {
          title: "มหาวิทยาลัย : มหาวิทยาลัยอุบลราชธานี",
          color: "#7FFF00",
          year: "2009 - 2014",
          detail:
            "เรื่องราวเกิดขึ้นหลังจากเรียนจบมัธยม ต้องหาที่เรียนมัธยมต่อมีโรงเรียนดี ๆ มากมายแต่ผมไม่เลือกด้วยเหตุผลเดียวเพราะว่า 'สงบสุข' ",
          src: require("@/assets/study3.jpg"),
          rating: 4
        },
        {
          title: "ที่ทำงาน : บริษัท อินเทอร์เน็ตประเทศไทย จำกัด (มหาชน)",
          color: "#FF0000",
          year: "2019",
          detail:
            "เรื่องราวเกิดขึ้นหลังจากเรียนจบมหาวิทยาลัย ต้องหาที่ทำงานต่อมีบริษัทดี ๆ มากมายแต่ผมไม่เลือกด้วยเหตุผลเดียวเพราะว่า 'ชอบและสบายใจ' ",
          src: require("@/assets/inet.webp"),
          rating: 5
        }
      ]
    };
  }
};
</script>
<style scope>
.margin_home {
  margin-top: 20px;
}
.v-parallax__image {
  -webkit-filter: blur(6px);
  -moz-filter: blur(6px);
  -o-filter: blur(6px);
  -ms-filter: blur(6px);
  filter: blur(6px);
}
.v-progress-circular {
  margin: 1rem;
}
.bg-color {
  background-color: rgb(228, 228, 228) !important;
}
.rounded-card {
  border-radius: 10px;
}
.year_white {
  color: white;
}
.c {
}
</style>

