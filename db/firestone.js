import * as firebase from 'firebase';
import 'firebase/firestore';

const configuration = {
    apiKey: "AIzaSyDAfnJNUoS4NhgS6FAQxG-KFanFJGH8Xg8",
    authDomain: "alda-english-86ba5.firebaseapp.com",
    projectId: "alda-english-86ba5",
    storageBucket: "alda-english-86ba5.appspot.com",
    messagingSenderId: "584340192337",
    appId: "1:584340192337:web:717e942d1f15aa451d0c70",
    measurementId: "G-KCMJRE0YZE"
}

firebase.initializeApp(configuration)

const db = firebase.firestore()

export default db;