
import { db } from '../../configs/FirebaseConfig';
import { collection, addDoc, query, where, getDocs } from 'firebase/firestore';

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
                let data;
                const q = query(collection(db, docName), where(key, "==", value));

                const querySnapshot = await getDocs(q);
                querySnapshot.forEach((doc) => {
                    data = {
                        id: doc.id,
                        usertype: doc.data().usertype,
                        displayName: doc.data().firstname + ' ' + doc.data().lastname,
                        email: doc.data().email,
                    }
                });
                return data;
        }
        catch(e){
            console.log('Error getting data in ', docName, 'with collection name =>', e);
        } 
    }
    static async getDocs(docName){
        let data = []
        try {
            let i = 0;
            const colRef = collection(db, docName);
            const docsSnap = await getDocs(colRef);
            if(docsSnap.docs.length > 0) {
               docsSnap.forEach((doc) => {
                 data[i] = doc.data()
                i++;
               })
               return data;
            }
        } catch(e){
            console.log('Error getting data in ', docName, 'with collection name =>', e);
        }
    }

}
