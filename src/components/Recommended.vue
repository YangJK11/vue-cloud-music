<template>
    <div>
        <v-subheader class="sub-title">推荐歌单</v-subheader>
        <Grid></Grid>
        <v-subheader class="sub-title">最新音乐</v-subheader>
        <div class="new-songs">
            <v-list >
                <div v-for="item in newSongs" :key="item.id" @click="play()">
                    <v-list-tile avatar>
                        <v-list-tile-content>
                            <v-list-tile-title v-text="item.name"></v-list-tile-title>
                            <v-list-tile-sub-title>{{item.song.artists[0].name}} - {{item.song.album.name}}</v-list-tile-sub-title>
                        </v-list-tile-content>
                        <v-list-tile-avatar size="24">
                            <img src="../assets/play.png" alt="" srcset="">
                        </v-list-tile-avatar>
                    </v-list-tile>
                    <v-divider inset></v-divider>
                </div>
            </v-list>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import Grid from "./Grid.vue";
export default {
  name: "recommended",
  data() {
    return {
      newSongs: []
    };
  },
  computed: {
    top20Hots: function() {
      return this.hots.slice(0, 20);
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
  },
  components: {
    Grid
  },
  methods: {
      play: function () {
          console.log('???');
          this.$router.push('/song');
      }
  }
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
</style>

