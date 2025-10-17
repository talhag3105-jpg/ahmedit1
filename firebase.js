// Firebase yapılandırması
const firebaseConfig = {
  apiKey: "AIzaSyC86wSTkGJvDBx7h_NWaY_Iy_4th1_4zRQ",
  authDomain: "ahmedit1.firebaseapp.com",
  projectId: "ahmedit1",
  storageBucket: "ahmedit1.firebasestorage.app",
  messagingSenderId: "508853189575",
  appId: "1:508853189575:web:e150c1989cb432754437e2",
  measurementId: "G-7JH08PKY39"
};

// Firebase başlat
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

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
// Kullanıcı kayıt işlemi
const signupForm = document.getElementById("signupForm");
if (signupForm) {
  signupForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = signupForm.querySelector('input[type="email"]').value;
    const password = signupForm.querySelector('input[type="password"]').value;

    try {
      const userCredential = await auth.createUserWithEmailAndPassword(email, password);
      alert("Kayıt başarılı! Hoş geldin, " + email);
      signupForm.reset();
    } catch (error) {
      alert("Hata: " + error.message);
    }
  });
}
// Kullanıcı kayıt (sign up)
const signupForm = document.getElementById("signupForm");
if (signupForm) {
  signupForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = signupForm.querySelector('input[type="email"]').value;
    const password = signupForm.querySelector('input[type="password"]').value;

    try {
      await auth.createUserWithEmailAndPassword(email, password);
      alert("Kayıt başarılı! Şimdi giriş yapabilirsiniz.");
      signupForm.reset();
    } catch (error) {
      alert("Hata: " + error.message);
    }
  });
}

// Kullanıcı giriş (login)
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = loginForm.querySelector('input[type="email"]').value;
    const password = loginForm.querySelector('input[type="password"]').value;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      alert("Giriş başarılı!");
      loginForm.reset();
    } catch (error) {
      alert("Giriş hatası: " + error.message);
    }
  });
}

// Kullanıcı çıkışı
const logoutBtn = document.getElementById("logoutBtn");
if (logoutBtn) {
  logoutBtn.addEventListener("click", async () => {
    await auth.signOut();
    alert("Çıkış yapıldı!");
  });
}

// Firestore veritabanı başlat
const db = firebase.firestore();

// Sipariş oluşturma
const orderForm = document.getElementById("orderForm");
if (orderForm) {
  orderForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const title = document.getElementById("orderTitle").value;
    const details = document.getElementById("orderDetails").value;
    const style = document.getElementById("orderStyle").value;
    const price = document.getElementById("orderPrice").value;
    const user = auth.currentUser;

    if (!user) {
      alert("Lütfen önce giriş yapın.");
      return;
    }

    try {
      await db.collection("orders").add({
        userId: user.uid,
        email: user.email,
        title,
        details,
        style,
        price,
        status: "Hazırlanıyor",
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
      });

      alert("Sipariş başarıyla gönderildi!");
      orderForm.reset();
    } catch (error) {
      alert("Sipariş gönderilirken hata: " + error.message);
    }
  });
}
