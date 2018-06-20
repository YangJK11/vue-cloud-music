<template>
    <div>
      <v-toolbar color="red" dark tabs fixed>
        <!-- <v-toolbar-side-icon></v-toolbar-side-icon> -->
        <v-toolbar-title>Cloud Music</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon>
          <!-- <v-icon>more_vert</v-icon> -->
        </v-btn>
        <v-tabs slot="extension" centered color="red" slider-color="white">
          <v-tab to="/recommended" replace>推荐音乐</v-tab>
          <v-tab to="/hot" replace>热歌榜单</v-tab>
          <v-tab to="/search" replace>搜索音乐</v-tab>
        </v-tabs>
      </v-toolbar>
      <router-view class="main-content"></router-view>
    </div>
</template>

<script>
export default {
    name: 'home'
}
</script>

<style>
.main-content {
  padding-top: 104px;
}
</style>


