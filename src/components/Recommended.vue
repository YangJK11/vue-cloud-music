<template>
  <div>
    <v-subheader class="sub-title">推荐歌单</v-subheader>

    <v-content>
      <v-container grid-list-md>
        <v-layout row wrap>
          <v-flex d-flex xs4 v-for="item in top6List" :key="item.id" @click="goToPlayList(item.id)">
            <v-card dark color="white" flat tile>
              <img :src="item.picUrl" alt="" srcset="" width="100%">
              <div class="list-title">{{item.name}}</div>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <v-subheader class="sub-title">最新音乐</v-subheader>
    <div class="new-songs">
      <v-list>
        <div v-for="item in newSongs" :key="item.id" @click="goToSong(item.id)">
          <v-list-tile avatar>
            <v-list-tile-content>
              <v-list-tile-title v-text="item.name"></v-list-tile-title>
              <v-list-tile-sub-title>{{item.song.artists[0].name}} - {{item.song.album.name}}</v-list-tile-sub-title>
            </v-list-tile-content>
            <v-list-tile-avatar size="24">
              <img src="../assets/play.png" alt="" srcset="">
            </v-list-tile-avatar>
          </v-list-tile>
          <v-divider></v-divider>
        </div>
      </v-list>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "recommended",
  data() {
    return {
      newSongs: [],
      recommendedList: []
    };
  },
  computed: {
    top20Hots: function() {
      return this.hots.slice(0, 20);
    },
    top6List: function() {
      return this.recommendedList.slice(0, 6);
    }
  },
  mounted() {
    axios
      .get("http://47.106.119.139:3000/personalized/newsong")
      .then(response => {
        this.newSongs = response.data.result;
      })
      .catch(error => {
        window.alert(error);
      });
    axios
      .get("http://47.106.119.139:3000/personalized")
      .then(response => {
        this.recommendedList = response.data.result;
      })
      .catch(error => {
         window.alert(error);
      });
  },
  components: {},
  methods: {}
};
</script>

<style scoped>
.sub-title::before {
  content: "";
  position: absolute;
  height: 24px;
  width: 4px;
  background: red;
  left: 0px;
}

.list-title {
  color: black;
  font-size: 12px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-align: left;
}
</style>

