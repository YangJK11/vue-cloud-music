<template>
    <div>
        <h1>Search Result</h1>
        <div class="search-result">
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
export default {
  data: function() {
    return {};
  },
  mounted() {
    
  }
};
</script>


<style scoped>
</style>
