export default {
    saveLocalData(key, value) {
        console.log('save local data');
        window.localStorage.setItem(key, value);
    },

    fetchLocalData(key) {
        console.log('fetch local data');
        window.localStorage.getItem(key);
    }
}