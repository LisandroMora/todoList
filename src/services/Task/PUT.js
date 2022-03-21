import { doc, updateDoc } from "firebase/firestore";
import db from "../../firebase/firebaseConfig";

const putTask = async ({ task, id }) => {
    try {
        const TaskRef = doc(db, "tasks", id);
        await updateDoc(TaskRef, {
            ...task
        });
        alert("Document written with ID: ", TaskRef.id);
    } catch (e) {
        console.log(e);
        alert("Error adding document: ", e);
    }
}

export default putTask;
