import { db } from "./Firebase.js";

import { collection, addDoc } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js"; 

// Add a new document with a generated id.

export let agregarMusica = async()=>{
    const docRef = await addDoc(collection(db, "musica"), musica);
}

