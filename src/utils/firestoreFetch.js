import { async } from "@firebase/util";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "./firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

export const firestoreFetch = async(idCat) => {
    let q
    if (idCat) {
        q = query(collection(db, "products"), where('categoryId', '==', parseInt(idCat)))
    } else {
        q = query(collection(db, "products"))
    }
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }))
}

export const firestoreFetchOne = async(idItem) => {
    const docRef = doc(db, "products", idItem);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return {
            id: idItem,
            ...docSnap.data()
        }
    } else {
        console.log("ERROR");
    }
}