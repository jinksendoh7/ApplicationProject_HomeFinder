
import { db } from '../../configs/FirebaseConfig';
import { collection, addDoc } from 'firebase/firestore';

export default class StorageService {

    static async createDoc(docName, doc){
        console.log(docName, doc);
        try {
            const docRef = await addDoc(collection(db, docName), doc);
            return docRef;
        }
        catch(e){
            console.log('Error saving in ', docName, 'with collection name =>', doc);
        } 
    }

}
