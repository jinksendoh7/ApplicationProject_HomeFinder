

export default class LocalStorage {

    static async setStorageItem(key, data){
        localStorage.setItem(key, JSON.stringify(data));
    }
    
    static async getStorageItem(key){
        return JSON.parse(localStorage.getItem(key) || '');
    }
    

}
