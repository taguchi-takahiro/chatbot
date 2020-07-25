import * as firebase from 'firebase/app'

import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBKQd3VGaMLrOvj9sau4lmiBlcDBSkU5Js",
    authDomain: "chatbot-demo-4571b.firebaseapp.com",
    databaseURL: "https://chatbot-demo-4571b.firebaseio.com",
    projectId: "chatbot-demo-4571b",
    storageBucket: "chatbot-demo-4571b.appspot.com",
    messagingSenderId: "348867353208",
    appId: "1:348867353208:web:2dc38f021dc4c6d2e02b8d",
    measurementId: "G-8P932653JR"
}

firebase.initializeApp(firebaseConfig)

export default <firebase></firebase>