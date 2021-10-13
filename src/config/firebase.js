import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

// Khởi tạo kết nối tới project trên firebase console
firebase.initializeApp({
    apiKey: "AIzaSyCuArn9oZeD53TJPA8ouSb03jGvADVhQ8I",
    authDomain: "learnv-5241b.firebaseapp.com",
    databaseURL: "https://learnv-5241b-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "learnv-5241b",
    storageBucket: "learnv-5241b.appspot.com",
    messagingSenderId: "760932592633",
    appId: "1:760932592633:web:f9475fab7273a4db36ab28",
    measurementId: "G-3K5N8V9NJQ"
})

export const auth = firebase.auth()
export const realtimeDB = firebase.database() // realtime database

export const userDB = realtimeDB.ref('users')
export const studySetDB = realtimeDB.ref('studysets')
export const rulesDB = realtimeDB.ref('rules')

export default firebase