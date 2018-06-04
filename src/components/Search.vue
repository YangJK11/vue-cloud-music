<template>
    <div>
        <v-flex xs10 offset-xs1>
            <v-text-field @keyup.enter="search(keyword)" type="search" prepend-icon="search" v-model="keyword" flat clearable @input="getSuggestions(keyword)"></v-text-field>
        </v-flex>
        <div class="text-xs-center" v-if="!keyword">
            <v-subheader>热门搜索</v-subheader>
            <v-chip v-for="item in hots" :key="item.first" @click="chipsClick(item.first)">{{item.first}}</v-chip>
        </div>
        <div v-if="suggestions && keyword && !results">
            <v-list>
                <v-list-tile v-for="item in suggestions.songs" :key="item.id">
                    <v-list-tile-content>
                        <v-list-tile-title>
                            <v-icon>search</v-icon> {{item.name + ' - ' +item.artists[0].name}}</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </div>

        <div v-if="results && keyword">
            <div class="search-result">
                <v-list>
                    <div v-for="item in results" :key="item.id" @click="songsClick(item.id)">
                        <v-list-tile avatar>
                            <v-list-tile-content>
                                <v-list-tile-title v-text="item.name"></v-list-tile-title>
                                <v-list-tile-sub-title>{{item.artists[0].name}} - {{item.album.name}}</v-list-tile-sub-title>
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
    </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      hots: [],
      keyword: null,
      suggestions: [],
      results: []
    };
  },
  mounted() {
    axios
      .get("http://47.106.119.139:3000/search/hot")
      .then(response => (this.hots = response.data.result.hots));
  },
  methods: {
    getSuggestions: function(keyword) {
      axios
        .get("http://47.106.119.139:3000/search/suggest?keywords=" + keyword)
        .then(response => (this.suggestions = response.data.result));
      this.results = null;
    },
    chipsClick: function(key) {
      this.keyword = key;
      this.search(key);
    },
    search: function(key) {
      axios
        .get("http://47.106.119.139:3000/search?keywords=" + key)
        .then(response => (this.results = response.data.result.songs));
    },
    songsClick: function(id) {
      console.log(id);
    }
  }
};
</script>
<style scoped>
</style>

