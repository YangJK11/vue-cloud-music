<template>
    <div>
        <v-layout>
            <v-flex xs12 sm12>
                <v-card> 
                    <v-card-media :src="song.pic" height="400px">
                    </v-card-media>
                    <v-card-title primary-title>
                        <h1>{{song.title}}</h1>                        
                    </v-card-title>                    
                </v-card>
                <audio :src="song.url" controls ></audio>
            </v-flex>
        </v-layout>
    </div>
</template>
<script>
import axios from "axios";

export default {
  data: function() {
    return {
      song: {
          title: '',
          pic: '',
          url: 'http://music.163.com/song/media/outer/url?id='+this.$route.query.id+'.mp3 '
      }
    };
  },
  methods: {},
  mounted() {
    axios
      .get("http://47.106.119.139:3000/song/detail?ids=" + this.$route.query.id)
      .then(response => {
        this.song.title = response.data.songs[0].name;
        this.song.pic = response.data.songs[0].al.picUrl;        
      });
  }
};
</script>
<style scoped>
</style>

