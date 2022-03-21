import { collection, addDoc } from "firebase/firestore";
import db from "../../firebase/firebaseConfig";

const postTask = async (task) => {
    try {
        const docRef = await addDoc(collection(db, "tasks"), {
            ...task,
        });
    } catch (e) {
        console.log(e);
    }
}

export default postTask;