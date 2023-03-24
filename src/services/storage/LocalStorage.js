

export default class LocalStorage {

    static setStorageItem(key, data){
        localStorage.setItem(key, JSON.stringify(data));
    }
    
    static  getStorageItem(key){
        return JSON.parse(localStorage.getItem(key) || null);
    }
    

}
