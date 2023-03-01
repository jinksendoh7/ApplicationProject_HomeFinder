
import { db } from '../../../configs/FirebaseConfig';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

class StorageService {

    static async addData(docName, doc){
        try {
            const docRef = await addDoc(collection(db, docName), doc);
        }
        catch(e){
            console.log('Error saving in ', docName, doc);
        } 
    }

}

module.exports = StorageService;