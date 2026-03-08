import { uploadImage } from "./cloudinary.js";
import {
  deleteUserAuth,
  deleteUserData,
  getAllUserDetails,
  logoutUser,
  toGetLoggedInUser,
  updateUserData,
} from "./firebase.js";

toGetLoggedInUser();

const button = document.querySelector("button");

// button.addEventListener("click", () => {
//   console.log("==>> logout huwa");
//   logoutUser();
// });

button.addEventListener("click", () => logoutUser());

// {} -->> block --->> multiple statements

const usersData = await getAllUserDetails();

console.log(usersData, "==>> usersData");

const usersDataHTML = usersData.map((user) => {
  return `<div class="card" style="width: 18rem">
        <img src=${user?.profilePicture} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">${user.userName}</h5>
          <p class="card-text">
            ${user.description}
          </p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">${user.email}</li>
          <li class="list-group-item">${user.password}</li>
          <li class="list-group-item">A third item</li>
        </ul>
        <div class="card-body">
          <button id=${user.id} data-bs-toggle="modal"
      data-bs-target="#exampleModal">Update User</button>
          <button  id=${user.id} class="card-link">Delete User</button>
        </div>
      </div>`;
});

console.log(usersDataHTML);

document.querySelector("#mainUsersContainer").innerHTML =
  usersDataHTML.join("");

let selectedUserDetails;

const userName = document.querySelector("#userName");
const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const description = document.querySelector("#description");
const profilePicture = document.querySelector("#profilePic");

const body = document.body;

body.addEventListener("click", async (e) => {
  console.log(e.target.id, "==>> body per click huwa");
  if (
    e.target.innerHTML !== "Update User" &&
    e.target.innerHTML !== "Delete User"
  )
    return;

  const selectedUser = usersData.find((user) => user.id === e.target.id);

  selectedUserDetails = selectedUser;

  console.log(selectedUser);

  if (e.target.innerHTML == "Update User") {
    userName.value = selectedUser?.userName || "No userName provided";
    firstName.value = selectedUser?.firstName || "No firstName provided";
    lastName.value = selectedUser?.lastName || "No lastName provided";
    description.value = selectedUser?.description || "No description provided";

    return;
  }

  console.log("===>>> delete user ki functionality chala dunga");

  await deleteUserData("users", e.target.id);

  console.log("==>> user data deleted successfully");

  setTimeout(() => {
    window.location.reload();
  }, 3000);
});

const saveChangesBtn = document.querySelector("#saveChangesBtn");

saveChangesBtn.addEventListener("click", async () => {
  console.log("==>> click huwa");

  console.log(profilePicture.files);

  // cloudinary code ----------->

  const formData = new FormData();

  formData.append("file", profilePicture.files[0]);
  formData.append("upload_preset", "smit-b12");

  const secure_url = await uploadImage(formData);

  // cloudinary code ----------->

  selectedUserDetails.userName = userName.value;
  selectedUserDetails.firstName = firstName.value;
  selectedUserDetails.lastName = lastName.value;
  selectedUserDetails.description = description.value;
  selectedUserDetails.profilePicture = secure_url;

  console.log(selectedUserDetails, "===>>> after update");

  await updateUserData(selectedUserDetails, selectedUserDetails.id, "users");

  window.location.reload();
});

// Note: apney risk per uncomment kareyn, otherwise user will be delete from authentication
// deleteUserAuth()
