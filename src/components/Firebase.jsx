import firebase from 'firebase'

const firebaseApp = firebase.initializeApp ({
    apiKey: "AIzaSyB-5SO7ICR7BgyghcTScFUXeuog19mHFG8",
    authDomain: "tlw-store.firebaseapp.com",
    projectId: "tlw-store",
    storageBucket: "tlw-store.appspot.com",
    messagingSenderId: "64020989395",
    appId: "1:64020989395:web:3e3e8cce275867189edb26"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db,auth}