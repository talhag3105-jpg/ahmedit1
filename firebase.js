// Firebase bağlantısı
const firebaseConfig = {
  apiKey: "AIzaSyC86wSTkGJvDBx7h_NWaY_Iy_4th1_4zRQ",
  authDomain: "ahmedit1.firebaseapp.com",
  projectId: "ahmedit1",
  storageBucket: "ahmedit1.firebasestorage.app",
  messagingSenderId: "508853189575",
  appId: "1:508853189575:web:e150c1989cb432754437e2",
  measurementId: "G-7JH08PKY39"
};

// Firebase başlatma
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
