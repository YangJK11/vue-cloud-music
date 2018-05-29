<template>
  <div>
    <v-toolbar color="red" dark tabs fixed>
      <v-toolbar-side-icon></v-toolbar-side-icon>
      <v-toolbar-title>云音乐</v-toolbar-title>

      <v-spacer></v-spacer>
      <!-- <v-btn icon>
        <v-icon>search</v-icon>
      </v-btn> -->
      <v-btn icon>
        <v-icon>more_vert</v-icon>
      </v-btn>
      <v-tabs slot="extension" v-model="model" centered color="red" slider-color="white">
        <v-tab to="/recommended">推荐音乐</v-tab>
        <v-tab to="/hot">热歌榜单</v-tab>
        <v-tab to="/search">搜索音乐</v-tab>
      </v-tabs>
    </v-toolbar>
    <router-link to="/sea"></router-link>
    <router-view class="main-content"></router-view>
  </div>
</template>

<script>
export default {
  name: "Header",
  methods: {
    go: function(path) {
      this.$router.push(path);
    }
  },
  props: {
    msg: String
  }
};
</script>


<style scoped>
.main-content {
  padding-top: 104px;
}
</style>
