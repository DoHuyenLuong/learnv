import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

// Khởi tạo kết nối tới project trên firebase console
firebase.initializeApp({
    apiKey: "AIzaSyDv3LTpEc4ZZijOvc-VJ26h59CpZ16LlGc",
    authDomain: "learnev-75b6c.firebaseapp.com",
    projectId: "learnev-75b6c",
    storageBucket: "learnev-75b6c.appspot.com",
    messagingSenderId: "235967520381",
    appId: "1:235967520381:web:055130476884fcb6f99b14",
    measurementId: "G-81VB7N8CK1"
})

export const auth = firebase.auth()
export const realtimeDB = firebase.database() // realtime database

export const userDB = realtimeDB.ref('users')
export const studySetDB = realtimeDB.ref('studysets')
export const rulesDB = realtimeDB.ref('rules')

export default firebase