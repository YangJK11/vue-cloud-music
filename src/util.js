const Util = {};
Util.install = function (Vue, options) {
    Vue.prototype.goToSong = function (id) {
        this.$router.push({ path: "/song", query: { id: id }});
    };

    Vue.prototype.goToPlayList = function (id) {
        this.$router.push({ path: "/playlist", query: { id: id }});
    }

    // Vue.prototype.saveLocalData = function (key, value) {
    //     console.log('save local data');
        
    //     window.localStorage.setItem(key, value);
    // }

    // Vue.prototype.fetchLocalData = function (key) {
    //     console.log('fetch local data');
        
    //     window.localStorage.getItem(key);
    // }
}





export default Util;