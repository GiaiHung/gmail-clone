import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyBQWXIxWCAsgvy0s5IGnOSidzuwMiCSJQ8',
  authDomain: 'clone-daee4.firebaseapp.com',
  projectId: 'clone-daee4',
  storageBucket: 'clone-daee4.appspot.com',
  messagingSenderId: '383005084669',
  appId: '1:383005084669:web:b5cd2f7fbea5ee71f1e794',
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
