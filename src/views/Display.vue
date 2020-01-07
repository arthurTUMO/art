<template>
    <v-container>
     <h1 class="text-center h1">Zvartnots Cathedral</h1>
     <v-carousel
      dark
      width="400"
      show-arrows-on-hover
      hide-delimiters
      continuous
      cycle
      interval="10000"
      touch
    >
      <v-carousel-item
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
        transition="scroll-x-transition"
        reverse-transition="scroll-x-reverse-transition"
      >
        <v-jumbotron dark>
          <v-container fill-height>
            <v-layout align-center>
              <v-flex>
                <h2 class="display-3 white-text text-center">{{ item.title }}</h2>
              </v-flex>
            </v-layout>
          </v-container>
        </v-jumbotron>
      </v-carousel-item>
    </v-carousel>
        <v-row>
            <v-col cols="12" sm="6">
                <h3>History</h3>
                <p>
                    Zvartnots was built at a time when much of Armenia had just recently been overrun by the Muslim Arabs who were progressively occupying the Sasanian Persia/Iran of which Armenia was a part at the time. Construction of the cathedral began in 643 under the guidance of Catholicos Nerses III (nicknamed Shinogh or the Builder). Dedicated to St. Gregory, it was located at the place where a meeting between King Trdat III and Gregory the Illuminator was supposed to have taken place. According to the medieval Armenian historian Movses Kaghankatvatsi, the cathedral was consecrated in 652.[1] From 653 to 659, Nerses was in Tayk and the construction of the cathedral continued under Anastas Akoratsi. Following the Arab occupation of Dvin and the intensifying wars between the Byzantine and Arab armies on the former's eastern borders, Nerses transferred the patriarchal palace of the Catholicos from Dvin to Zvartnots.[2]
                    The exterior church design, featuring basket capitals with Ionic volute mounts, eagle capitals, and vine scroll friezes reveals the influence of Syrian and northern Mesopotamian architecture.[3]
                    Zvartnots remained standing until the end of the tenth century, but historical sources are silent as to the cause of its collapse.[1] A close copy of the cathedral was erected at Ani out by Trdat the Architect under the reign of Gagik I Bagratuni during the final decade of the tenth century. The contemporary Armenian historian Stepanos Taronetsi referred to Zvartnots when describing the church that Gagik I had inaugurated as "a large structure at Vałaršapat [Vagharshapat], dedicated to the same saint that had fallen into ruins."[4]
                    </p>
            </v-col>
            <v-col >
                <h3>Excavations</h3>
                <p>
                   The ruins of Zvartnots remained buried until its remains were uncovered at the start of the twentieth century. The site was excavated between 1901 and 1907 under the direction of vardapet Khachik Dadyan, uncovering the foundations of the cathedral as well as the remains of the Catholicos palace and a winery. The excavations furthermore revealed that Zvartnots stood on the remnants of structures that dated back to reign of the Urartian king Rusa II.[1]
                </p>
                <h3>Influence</h3>
                <p>
                    The church of St. Gregory (better known as Gagkashen) in Ani (now in Turkey) was built in 1001-1005 and was intended to be a recreation of Zvartnots.The Holy Trinity Church in the Malatia-Sebastia district of Yerevan is modeled by architect Baghdasar Arzoumanian after Zvartnots and was completed in 2003.
                </p>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
  name: 'Display',
  data: () => ({
    items: [
      {
        src: require('../assets/img/slider/carpet.jpg'),
        title: 'Zvartnots'
      },
      {
        src: require('../assets/img/slider/img1.jpg'),
        title: 'Zvartnots'
      },
      {
        src: require('../assets/img/slider/zvartnoz.jpg'),
        title: 'Zvartnots'
      }
    ]
  }),
  methods: {}
}
</script>
<style scoped>
    .h1{
        font-family: "algerian";
    }
    h3{
        font-family: cursive;
    }
    p{
        font-family: "prociono";
    }
</style>
