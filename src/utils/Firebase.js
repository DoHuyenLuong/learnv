import firebase, { auth, userDB, studySetDB, rulesDB, paidDB } from '../config/firebase'
import { Utils } from './index.js'

const Firebase = {
    signInGoogle: async () => {
        try {
            const provider = new firebase.auth.GoogleAuthProvider()
            const res = await auth.signInWithPopup(provider)
            const user = Utils.filterUserObject({ ...res.user, ...res.additionalUserInfo, ...res.additionalUserInfo.profile})
            userDB.child(user?.uid).set(user)   
            if(user?.isNewUser) {
                rulesDB.child(user?.uid).set({admin: true}) 
                paidDB.child(user?.uid).set({paid: true})  
            }
            return true         
        }
        catch (error) {
            return false
        }
    },

    signOut: async () => {
        try {
            await auth.signOut()
            return true
        }
        catch (error) {
            return false
        }
    },

    addStudySet: (studyset) => {
        try {
            studySetDB.child(auth.currentUser.uid).push(studyset)
            return true
        }
        catch (error) {
            return false
        }
    },

    removeStudySet: (idStudyset, idAuthor = auth?.currentUser?.uids) => {
        try {
            studySetDB.child(idAuthor).child(idStudyset).remove()
            return true
        }
        catch (error) {
            return false
        }
    },

    updateStudySet: (idAuthor = auth?.currentUser?.uid, id, studyset) => {
        try {
            studySetDB.child(idAuthor).child(id).update(studyset)
            return true
        }
        catch (error) {
            return false
        }
    },

    resetUser: (idUser) => {
        try {
            studySetDB.child(idUser).remove()
            rulesDB.child(idUser).set({user: true}) 
            paidDB.child(idUser).set({paid: false})
            return true
        }
        catch (error) {
            return false
        }
    },

    updateRulePaid: (idUser, {rule, paid}) => {
        try {
            if(rule)
                if(rule === 'Admin')
                    rulesDB.child(idUser).set({admin: true}) 
                else if(rule === 'Collaborator')
                    rulesDB.child(idUser).set({collaborator: true}) 
                else if(rule === 'User')
                    rulesDB.child(idUser).set({user: true}) 
            if(paid)
                if(paid === 'True')
                    paidDB.child(idUser).set({paid: true}) 
                else if(paid === 'False')
                    paidDB.child(idUser).set({paid: false})
            return true
        }
        catch (error) {
            return false
        }
    }
}

export default Firebase
