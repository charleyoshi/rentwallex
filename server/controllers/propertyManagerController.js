import firebaseApp from "../config.js";
import { getDatabase, ref, set, push, get } from "firebase/database";

// Initialize Realtime Database and get a reference to the service
const db = getDatabase(firebaseApp);
const propertyManagerRef = ref(db, 'propertymanager');

const getPropertyManagers = async (req, res) => {

    get(propertyManagerRef).then((snapshot) => {
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


const addPropertyManager = async (req, res) => {
    const data = req.body

    // Conditionally assign otherSoftware if propertyManagementSoftware is "other"
    if (data.propertyManagementSoftware === "other") {
        data.propertyManagementSoftware = data.otherSoftware || ""; // Set otherSoftware to empty string if it's not provided
    }
    delete data.otherSoftware; // Remove otherSoftware if propertyManagementSoftware is not "other"


    const newRef = push(propertyManagerRef);

    try {
        set(newRef, { ...data });
        res.status(201).json({ message: "New item created" })
    } catch (error) {
        res.status(400).json({ name: error.name, error: error.message })
    }

}

export { getPropertyManagers, addPropertyManager }





