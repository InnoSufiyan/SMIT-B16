// 🔥 Firebase SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  collection,
  addDoc,
  getDocs,
  query,
  updateDoc,
  deleteDoc,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// 🔐 Your Firebase Config (PASTE YOUR OWN)
const firebaseConfig = {
  apiKey: "AIzaSyBAX6HxxTODP2Yp2OZbj2y6AqOepKv4rWg",
  authDomain: "hackathon-2026-feb.firebaseapp.com",
  projectId: "hackathon-2026-feb",
  storageBucket: "hackathon-2026-feb.firebasestorage.app",
  messagingSenderId: "115366509524",
  appId: "1:115366509524:web:bc025dbaaebb8c481bf441"
};  

// 🚀 Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const db = getFirestore(app);

// ===============================
// 📝 SIGNUP FUNCTION
// ===============================
export async function signupUser(name, email, password) {
  try {
    // Create Auth User
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );

    console.log(userCredential.user, "==>> user")

    const user = userCredential.user;

    console.log("===>>> going to database")

    // Store User Data in Firestore
    await setDoc(doc(db, "users", user.uid), {
      name: name,
      email: email,
      createdAt: new Date(),
    });

    return { success: true, user };
  } catch (error) {
    return { success: false, message: error.message };
  }
}

// ===============================
// 🔐 LOGIN FUNCTION
// ===============================
export async function loginUser(email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password,
    );

    const user = userCredential.user;

    // Fetch User Data from Firestore
    const docRef = doc(db, "users", user.uid);
    const userDoc = await getDoc(docRef);

    return {
      success: true,
      user,
      data: userDoc.data(),
    };
  } catch (error) {
    return { success: false, message: error.message };
  }
}

/* ===============================
   ➕ ADD FAMILY MEMBER
================================ */
export async function addFamilyMember(uid, name, age, relation) {
  try {
    await addDoc(collection(db, "users", uid, "familyMembers"), {
      name,
      age,
      relation,
      createdAt: new Date(),
    });

    return { success: true };
  } catch (error) {
    return { success: false, message: error.message };
  }
}

/* ===============================
   📥 GET FAMILY MEMBERS
================================ */
export async function getFamilyMembers(uid) {
  try {
    const q = query(collection(db, "users", uid, "familyMembers"));

    const snapshot = await getDocs(q);

    let members = [];
    snapshot.forEach((doc) => {
      members.push({ id: doc.id, ...doc.data() });
    });

    return { success: true, members };
  } catch (error) {
    return { success: false, message: error.message };
  }
}

/* ===============================
   ✏️ UPDATE FAMILY MEMBER
================================ */
export async function updateFamilyMember(uid, memberId, updatedData) {
  try {
    const memberRef = doc(db, "users", uid, "familyMembers", memberId);

    await updateDoc(memberRef, updatedData);

    return { success: true };
  } catch (error) {
    return { success: false, message: error.message };
  }
}

/* ===============================
   🗑️ DELETE FAMILY MEMBER
================================ */
export async function deleteFamilyMember(uid, memberId) {
  console.log(uid, "===>> uid");
  console.log(memberId, "===>> memberId");

  try {
    await deleteDoc(doc(db, "users", uid, "familyMembers", memberId));

    return { success: true };
  } catch (error) {
    console.log(error, "==>> error");
    return { success: false, message: error.message };
  }
}

/* ==============================
   Add report for a member
   params: memberId, fileName, fileUrl, fileType
============================== */
export async function addReport(uid, memberId, reportData) {
  try {
    await addDoc(
      collection(db, "users", uid, "familyMembers", memberId, "reports"),
      {
        ...reportData,
        uploadedAt: new Date(),
      },
    );

    return { success: true };
  } catch (error) {
    return { success: false, message: error.message };
  }
}

/* ==============================
   Fetch reports for a member
============================== */
export async function getReports(uid, memberId) {
  try {

    const reportsCol = collection(
      db,
      "users",
      uid,
      "familyMembers",
      memberId,
      "reports",
    );

    const snapshot = await getDocs(reportsCol);
    const reports = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    return { success: true, reports };
  } catch (error) {
    return { success: false, message: error.message };
  }
}

export { onAuthStateChanged };
