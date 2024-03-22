import firebaseApp from "../config.js";
import { getDatabase, ref, set, push } from "firebase/database";

// Initialize Realtime Database and get a reference to the service
const db = getDatabase(firebaseApp);  


const getWaitlist = async (req, res) => {
    res.send({ message: 'Waitlist get' });
}


const joinWaitlist = async (req, res) => {
    const data = req.body
    const waitlistRef = ref(db, 'waitlist');
    const newRef = push(waitlistRef);
    set(newRef, {
        ...data
    });

    res.send({ msg: "added" });
}

export { getWaitlist, joinWaitlist }





