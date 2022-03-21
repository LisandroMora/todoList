import { collection, addDoc } from "firebase/firestore";
import db from "../../firebase/firebaseConfig";

const postTask = async (task) => {
    try {
        const docRef = await addDoc(collection(db, "tasks"), {
            ...task,
        });
        alert("Document written with ID: ", docRef.id);
    } catch (e) {
        alert("Error adding document: ", e);
    }
}

export default postTask;