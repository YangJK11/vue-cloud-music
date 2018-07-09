<template>
    <div>
        <v-layout>
            <v-flex xs12>
                <v-card color="red" class="white--text">
                    <v-container fluid grid-list-lg>
                        <v-layout row>
                            <v-flex xs5>
                                <v-card-media :src="cover" height="125px" contain></v-card-media>
                            </v-flex>
                            <v-flex xs7>
                                <div class="list-info">
                                    <div class="list-title">{{title}}</div>
                                    <br>
                                    <div>{{creator.nickname}}</div>
                                    <div>{{this.$route.query.id}}</div>
                                </div>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-card>
            </v-flex>
        </v-layout>
        <div>
            <v-list>
                <div v-for="item in tracks" :key="item.id" @click="goToSong(item.id)">
                    <v-list-tile avatar>
                        <v-list-tile-content>
                            <v-list-tile-title v-text="item.name"></v-list-tile-title>
                            <v-list-tile-sub-title>{{item.ar[0].name}} - {{item.al.name}}</v-list-tile-sub-title>
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
// import axios from "axios";
export default {
  data: function() {
    return {
      title: "",
      cover: "",
      creator: {},
      tracks: []
    };
  },
  mounted() {
    this.$ajax
      .get(
        "http://47.106.119.139:3000/playlist/detail?id=" + this.$route.query.id
      )
      .then(response => {
        this.title = response.data.playlist.name;
        this.cover = response.data.playlist.coverImgUrl;
        this.creator = response.data.playlist.creator;
        this.tracks = response.data.playlist.tracks;
      })
      .catch(error => {
        // deal error
      });
  }
};
</script>


<style scoped>
.list-title {
  font-size: 16px;
  font-weight: bold;
}

.list-info {
  text-align: left;
}
</style>


