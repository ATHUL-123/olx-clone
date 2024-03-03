import firebase from 'firebase';
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyDkngqufv9w30bd4LR4omEediDK-VkbmUg",
    authDomain: "fir-8d842.firebaseapp.com",
    projectId: "fir-8d842",
    storageBucket: "fir-8d842.appspot.com",
    messagingSenderId: "1020070765380",
    appId: "1:1020070765380:web:2aadb0c8062f9035e1ed11",
    measurementId: "G-4H2B691WTM"
  };

  // Initialize Firebase
export default  firebase.initializeApp(firebaseConfig);