var firebaseConfig = {
    apiKey: "AIzaSyB4agn6A5jvDcyHhi1mQsaOlHiQxbfSOIs",
    authDomain: "blabz-unduh.firebaseapp.com",
    databaseURL: "https://blabz-unduh-default-rtdb.firebaseio.com",
    projectId: "blabz-unduh",
    storageBucket: "blabz-unduh.appspot.com",
    messagingSenderId: "912588666676",
    appId: "1:912588666676:web:9a1660163a5f4e82375761",
    measurementId: "G-199MZ4QKHX"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  // Now let's listen to the value of the counter and write it
  // to the counter DOM element
  const counter = document.getElementsByClassName("view")[0];
  
  const counterRef = firebase.database().ref("Canva Unduh Presentasi Materi Pendidikan Ilustrasi");
  
  counterRef.on("value", count => {
  counter.textContent = count.val().toLocaleString().replaceAll(',', '.');
  });
  
  const incrementButton = document.getElementsByClassName("download")[0];
  incrementButton.addEventListener(
  "click",
  () => {
    counterRef.transaction(
      val => val + 1,
      err => {
        if (err) {
          alert(err);
        }
      }
    );
  },
  false
  );