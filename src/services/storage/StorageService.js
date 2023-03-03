
import { db } from '../../configs/FirebaseConfig';
import { collection, addDoc, getDoc, doc } from 'firebase/firestore';

export default class StorageService {

    static async createDoc(docName, doc){
        try {
            const docRef = await addDoc(collection(db, docName), doc);
            return docRef;
        }
        catch(e){
            console.log('Error saving in ', docName, 'with collection name =>', doc);
        } 
    }
    
    static async getDocWhere(docName, key, value){
        try {
            const docRef = doc(docName, key, value);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    console.log("Document data:", docSnap.data());
                    return docSnap.data();
                } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
                }
        }
        catch(e){
            console.log('Error saving in ', docName, 'with collection name =>', doc);
        } 
    }

}
