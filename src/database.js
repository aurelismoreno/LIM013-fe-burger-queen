import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDl87nVyqrxX8S1TBNUxTI_xpeeSU_Y76s',
  authDomain: 'burguer-queen-prueba.firebaseapp.com',
  projectId: 'burguer-queen-prueba',
  storageBucket: 'burguer-queen-prueba.appspot.com',
  messagingSenderId: '1083407787808',
  appId: '1:1083407787808:web:2b0fab957615dfd9979945',
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const db = firebase.firestore();
db.settings({ timestampsInSnapshots: true });

export default db;
