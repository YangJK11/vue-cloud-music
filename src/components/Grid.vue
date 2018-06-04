<template>
  <v-content>
    <v-container grid-list-md>
      <v-layout row wrap>
        <v-flex d-flex xs4 v-for="item in top6List" :key="item.id">
          <v-card dark color="white" flat tile>
            <img :src="item.picUrl" alt="" srcset="" width="100%">
            <div class="list-title">{{item.name}}</div>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>



<script>
import axios from "axios";
export default {
  data: function() {
    return {
      recommendedList: []
    };
  },
  computed: {
    top6List: function() {
      return this.recommendedList.slice(0, 6);
    }
  },
  mounted() {
    axios
      .get("http://47.106.119.139:3000/personalized")
      .then(response => {
        this.recommendedList = response.data.result;
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>



<style scoped>
.list-title {
  color: black;
  font-size: 12px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>

