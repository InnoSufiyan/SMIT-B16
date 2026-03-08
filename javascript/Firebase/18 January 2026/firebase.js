import { initializeApp } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-app.js";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  deleteUser
} from "https://www.gstatic.com/firebasejs/12.8.0/firebase-auth.js";

import {
  doc,
  setDoc,
  getDoc,
  getFirestore,
  collection,
  query,
  where,
  getDocs,
  deleteDoc,
} from "https://www.gstatic.com/firebasejs/12.8.0/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkZD1GCsoHkjoSupuQ-XsZiqno8SFUL5k",
  authDomain: "smit-b16.firebaseapp.com",
  projectId: "smit-b16",
  storageBucket: "smit-b16.firebasestorage.app",
  messagingSenderId: "722729755689",
  appId: "1:722729755689:web:75e09a1360bbc5d0922838",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

function signUpFunction(userName, email, password) {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log("==>> signed up successfully");
      // Signed up
      const user = userCredential.user;
      // ...

      setDoc(doc(db, "users", user.uid), {
        userName: userName,
        email: email,
        password: password,
      })
        .then(() => {
          console.log("Record saved in Database");
        })
        .catch(() => {
          console.log("Record have error in Database");
        });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, "==>> error in signup process");
      console.log(errorMessage, "==>> error in signup process");

      // ..
    });
}

function loginFunction(email, password) {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;

      console.log(user, "==>> signin successfully");
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, "==>>> signin phat gaya");
      console.log(errorMessage, "==>>> signin phat gaya");
    });
}

function toGetLoggedInUser() {
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    console.log(user, "====>>> kya user mila ???");
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;

      console.log(uid, "==>> jo user login hai, uski user id yeh hai");

      console.log(window.location, "==>> window location");

      if (window.location.pathname !== "/home.html") {
        window.location = "./home.html";
      }
      // ...
    } else {
      // User is signed out
      // ...
      console.log("===>>> user to login hi nahin hai");

      if (
        window.location.pathname == "/index.html" ||
        window.location.pathname == "/login.html"
      ) {
        console.log(
          "==>> already signup ya login k page per hun, kahin aur jaaaney ki zaroorat nai hai",
        );
      } else {
        window.location = "./login.html";
      }
    }
  });
}

function logoutUser() {
  const auth = getAuth();
  signOut(auth)
    .then(() => {
      // Sign-out successful.
      window.location = "./login.html";
    })
    .catch((error) => {
      // An error happened.
    });
}

async function getSingleUserDetail(uniqueId) {
  const docRef = doc(db, "users", uniqueId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
  } else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!");
  }
}

async function getAllUserDetails() {
  const usersArr = [];
  const q = query(collection(db, "users"));

  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
    const user = doc.data();
    usersArr.push({
      id: doc.id,
      ...user,
    });
  });

  // console.log(usersArr, "===>> usersArr");
  return usersArr;
}

async function updateUserData(details, uid, collection) {
  try {
    await setDoc(doc(db, collection, uid), details);
  } catch (error) {
    console.log(error, "==>> error aaya hai");
  }
}

async function deleteUserData(collection, userId) {
  await deleteDoc(doc(db, collection, userId));
}

async function deleteUserAuth() {
  const user = auth.currentUser;

  console.log(user, "==>> user");


  deleteUser(user)
    .then(() => {
      // User deleted.

      console.log("=====>>> deleted successfully")
    })
    .catch((error) => {
      // An error ocurred
      // ...
      console.log(error, "===>> error")
    });
}

export {
  signUpFunction,
  loginFunction,
  getSingleUserDetail,
  getAllUserDetails,
  toGetLoggedInUser,
  logoutUser,
  updateUserData,
  deleteUserData,
  deleteUserAuth
};
