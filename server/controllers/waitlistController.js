import firebaseApp from "../config.js";
import { getDatabase, ref, set, push } from "firebase/database";

// Initialize Realtime Database and get a reference to the service
const db = getDatabase(firebaseApp);
const waitlistRef = ref(db, 'waitlist');

const getWaitlist = async (req, res) => {
    res.send({ message: 'Waitlist get' });
}


const joinWaitlist = async (req, res) => {
    const data = req.body
    const newRef = push(waitlistRef);

    try {
        set(newRef, { ...data });
        res.status(201).json({ message: "new item created"})
    } catch (error){
        res.status(400).json({ name: error.name, error: error.message })
    }


    
}

export { getWaitlist, joinWaitlist }





