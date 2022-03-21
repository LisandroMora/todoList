import { collection, getDocs } from "firebase/firestore";
import db from "../../firebase/firebaseConfig";

const getTasks = async () => {
    const querySnapshot = await getDocs(collection(db, "tasks"));
    const data = querySnapshot.docs.map((doc) => {
        return {
            id: doc.id,
            ...doc.data(),
        };
    });
    return data;
};

export default getTasks;