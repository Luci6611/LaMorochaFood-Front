// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCknV1dQIh05tyMPH_MjF8HkhZNrZFU6U",
  authDomain: "la-morocha-9466d.firebaseapp.com",
  projectId: "la-morocha-9466d",
  storageBucket: "la-morocha-9466d.appspot.com",
  messagingSenderId: "693092020897",
  appId: "1:693092020897:web:42a380f3d751dcd4dff6e0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);



export const upload = async (file) => {

  const storageref = ref(storage,v4());
    await uploadBytes(storageref, file)
    const url = await getDownloadURL(storageref)
    return url;
}