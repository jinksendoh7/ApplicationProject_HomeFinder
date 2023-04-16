
import { db } from '../../configs/FirebaseConfig';
import { collection, addDoc, query, where, getDocs, updateDoc, doc } from 'firebase/firestore';

export default class StorageService {

    static async createDoc(docName, doc){
        try {
            const docRef = await addDoc(collection(db, docName), doc);
            return docRef;
        }
        catch(e){
            console.log('Error saving in ', docName, 'with collection name =>', doc, e);
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
    static async getDocsById(docName, email){
        let data = []
        try {
            const colRef = collection(db, docName);
            const docsSnap = await getDocs(colRef);
            if(docsSnap.docs.length > 0) {
               docsSnap.forEach((doc) => {
                if(email === doc.data().createdBy)
                data.push({
                    ...doc.data(),
                    id: doc.id
                  });
            
               })
               return data;
            }
        } catch(e){
            console.log('Error getting data in ', docName, 'with collection name =>', e);
        }
    }

    static async update(collectionName, data, id){
        //console.log('Updating....');
        try {
            const docRef = doc(db, collectionName, id);
            await updateDoc(docRef, data);
           // console.log('Success updating: ', docRef.id)
            return true;
        }
        catch (error) {
           // console.log(error);
            return false;
        }
    }

}
