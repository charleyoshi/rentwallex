import firebaseApp from "../config.js";
import { getDatabase, ref, set, push, get } from "firebase/database";

// Initialize Realtime Database and get a reference to the service
const db = getDatabase(firebaseApp);
const waitlistRef = ref(db, 'waitlist');

const getWaitlist = async (req, res) => {

    get(waitlistRef).then((snapshot) => {
        if (snapshot.exists()) {
            var result = snapshot.val();
            res.status(200).json({ result: result });
        } else {
            console.log("No data available");
            res.status(404).json({ error: "No data available" });
        }
    }).catch((error) => {
        res.status(400).json({ error: error.message });
    });

    
}


const joinWaitlist = async (req, res) => {
    const data = req.body
    const newRef = push(waitlistRef);

    try {
        set(newRef, { ...data });
        res.status(201).json({ message: "new item created" })
    } catch (error) {
        res.status(400).json({ name: error.name, error: error.message })
    }



}

export { getWaitlist, joinWaitlist }





