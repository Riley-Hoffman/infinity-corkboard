import firebase from 'firebase/app';
import 'firebase/database';

// Your web app's Firebase configuration

const firebaseConfig = {

    apiKey: "AIzaSyCFJcsYJegBxCU6DTj7EHTQvnd_HfgbtPk",

    authDomain: "infinity-corkboard.firebaseapp.com",

    projectId: "infinity-corkboard",

    storageBucket: "infinity-corkboard.appspot.com",

    messagingSenderId: "934094337441",

    appId: "1:934094337441:web:e1f6429035651935fbc7e0"

};

firebase.initializeApp(firebaseConfig)

export default firebase