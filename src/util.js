const Util = {};

Util.install = function (Vue, options) {
    Vue.prototype.goToSong = function (id) {
        this.$router.push({ path: "/song", query: { id: id }});
    };

    Vue.prototype.goToPlayList = function (id) {
        this.$router.push({ path: "/playlist", query: { id: id }});
    }
}

export default Util;