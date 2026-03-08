import {
  addFamilyMember,
  auth,
  deleteFamilyMember,
  getFamilyMembers,
  onAuthStateChanged,
} from "../firebaseFunctions.js";

let loggedInUserId;

onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user.uid;

    console.log(uid, "===>> uid");

    loggedInUserId = uid;

    loadFamilyMembers(uid);
    // ...
  } else {
    // User is signed out
    // ...
  }
});

const addBtn = document.getElementById("addMemberBtn");
const modal = document.getElementById("memberModal");
const saveBtn = document.getElementById("saveMember");
const grid = document.getElementById("familyGrid");

// Open modal
addBtn.onclick = () => (modal.style.display = "flex");

// Save member to Firestore
saveBtn.onclick = async () => {
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const relation = document.getElementById("relation").value;

  if (!name || !age || !relation) {
    return alert("Fill all fields");
  }

  const result = await addFamilyMember(loggedInUserId, name, age, relation);

  if (result.success) {
    modal.style.display = "none";
    loadFamilyMembers();
  } else {
    alert(result.message);
  }
};

// Load members from Firestore
async function loadFamilyMembers() {
  grid.innerHTML = "";

  const result = await getFamilyMembers(loggedInUserId);

  if (!result.success) {
    return alert(result.message);
  }

  result.members.forEach((m) => {
    grid.innerHTML += `
   <div class="card member-card" data-id="${m.id}">
      <h3>${m.name}</h3>
      <p>👤 ${m.relation}</p>
      <p>🎂 Age: ${m.age}</p>
      <p>📄 Reports: 0</p>

      <div class="card-actions">
        <button class="edit-btn" data-id="${m.id}">✏️ Edit</button>
        <button class="delete-btn" data-id="${m.id}">🗑️ Delete</button>
      </div>
    </div>
  `;
  });
}

// Close modal
window.onclick = (e) => {
  if (e.target === modal) modal.style.display = "none";
};

// update and delete functionality gets handle from here
grid.addEventListener("click", async (e) => {
  // EDIT
  if (e.target.classList.contains("edit-btn")) {
    const memberId = e.target.dataset.id;
    console.log("EDIT member:", memberId);

    // yahan apna edit modal / form open kar lena
    // editFamilyMember(memberId)
  }

  // DELETE
  if (e.target.classList.contains("delete-btn")) {
    const memberId = e.target.dataset.id;

    if (!confirm("Are you sure you want to delete this member?")) return;

    console.log("DELETE member:", memberId);

    // yahan apna delete function call kar lena
    const deleteResponse = await deleteFamilyMember(loggedInUserId, memberId);

    if (deleteResponse.success) {
      loadFamilyMembers(loggedInUserId);
    } else {
      alert(deleteFamilyMember.message);
    }
  }
});

// it will move towards member dashboard page

grid.addEventListener("click", (e) => {
  // ❌ Agar edit/delete pe click ho to card click ignore
  if (
    e.target.classList.contains("edit-btn") ||
    e.target.classList.contains("delete-btn")
  ) {
    return;
  }

  // ✅ Card click
  const card = e.target.closest(".member-card");
  if (!card) return;

  const memberId = card.dataset.id;

  // Redirect to member dashboard
  window.location.href = `../members/member-dashboard.html?memberId=${memberId}`;
});
