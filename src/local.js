export default {
    saveLocalData(key, value) {
        console.log('save local data');
        window.localStorage.setItem(key, JSON.stringify(value));
    },

    fetchLocalData(key) {
        
        return JSON.parse(window.localStorage.getItem(key));
    }
}