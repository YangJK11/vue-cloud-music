<template>
    <div>
        <div class="hot-top" v-if="ok">
            <v-card color="red" class="white--text">
                <v-container fluid grid-list-lg>
                    <v-layout row>
                        <v-flex xs6>
                            <div>
                                <div class="headline">云音乐 热歌榜</div>
                            </div>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-card>
            <v-divider></v-divider>
        </div>
        <v-alert :value="!ok" type="error">
            数据加载失败
        </v-alert>
        <div class="hot-list">
            <v-list>
                <div v-for="(item, index) in top20Hots" :key="item.id" @click="goToSong(item.id)">
                    <v-list-tile avatar>
                        <v-list-tile-action>
                            <h1 :style="{ 'color': index < 3 ? 'red' : '#777777' }">{{index + 1}}</h1>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title v-text="item.name"></v-list-tile-title>
                            <v-list-tile-sub-title>{{item.ar[0].name}} - {{item.al.name}}</v-list-tile-sub-title>
                        </v-list-tile-content>
                        <v-list-tile-avatar size="24">
                            <img src="../assets/play.png" alt="" srcset="">
                        </v-list-tile-avatar>
                    </v-list-tile>
                    <v-divider inset></v-divider>
                </div>
            </v-list>
        </div>
        <div class="hot-bottom" v-if="ok">
            <v-card color="red" class="white--text">
                <!-- <v-card-title primary-title>
                    <div class="headline">开启音乐之旅</div>
                </v-card-title> -->
                <v-card-actions>
                    <v-btn flat dark>查看完整榜单</v-btn>
                </v-card-actions>
            </v-card>
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      hots: [],
      ok: true
    };
  },
  computed: {
    top20Hots: function() {
      return this.hots.slice(0, 20);
    }
  },
  mounted() {
    axios
      .get("http://47.106.119.139:3000/top/list?idx=1")
      .then(response => {
        this.ok = true;
        this.hots = response.data.playlist.tracks;
      })
      .catch(error => {
        this.ok = false;
      });
  },
  methods: {

  }
};
</script>

<style scoped>
.hot-top {
  width: 100%;
  height: 85px;
}
</style>

