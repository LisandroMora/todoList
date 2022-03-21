import { doc, updateDoc } from "firebase/firestore";
import db from "../../firebase/firebaseConfig";

const putTask = async ({ task, id }) => {
    try {
        const TaskRef = doc(db, "tasks", id);
        await updateDoc(TaskRef, {
            ...task
        });
    } catch (e) {
        console.log(e);
    }
}

export default putTask;
