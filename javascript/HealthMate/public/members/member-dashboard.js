import {
  getReports,
  addReport,
  auth,
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

    loadMember(uid);

    // ...
  } else {
    // User is signed out
    // ...
  }
});

// URL se memberId nikaalo
const params = new URLSearchParams(window.location.search);
const memberId = params.get("memberId");

const nameEl = document.getElementById("memberName");
const infoEl = document.getElementById("memberInfo");
const reportListEl = document.getElementById("reportList");
const uploadBtn = document.getElementById("uploadReportBtn");

async function loadMember() {
  const result = await getReports(loggedInUserId, memberId); // can also load member info separately
  nameEl.innerText = "Loading...";
  infoEl.innerText = "";

  if (!result.success) return alert(result.message);

  // For simplicity, set name from first report or placeholder
  nameEl.innerText = "Member Dashboard";
  infoEl.innerText = `Family Member • Reports: ${result.reports.length}`;

  renderReports(result.reports);
}

// Render reports in the list
function renderReports(reports) {
  if (reports.length === 0) {
    reportListEl.innerHTML = `
      <div class="empty-state">
        <p>No reports uploaded yet</p>
      </div>
    `;
    return;
  }

  reportListEl.innerHTML = "";

  reports.forEach((r) => {
    const date = r.uploadedAt?.seconds
      ? new Date(r.uploadedAt.seconds * 1000).toLocaleDateString()
      : "—";

    reportListEl.innerHTML += `
  <div class="report-card">
    <div class="report-info">
      <p><strong>${r.fileName}</strong></p>
      <p>📄 ${r.fileType}</p>
    </div>

    <button 
      class="view-btn"
      data-reportid="${r.id}">
      View
    </button>
  </div>
`;
  });
}

reportListEl.addEventListener("click", (e) => {
  if (!e.target.classList.contains("view-btn")) return;

  const reportId = e.target.dataset.reportid;

  window.location.href = `../reports/report-view.html?memberId=${memberId}&reportId=${reportId}`;
});

// ==============================
// Upload button click (just hook)
// ==============================
uploadBtn.addEventListener("click", async () => {
  // Trigger file selection
  const fileInput = document.createElement("input");
  fileInput.type = "file";
  fileInput.accept = "image/*,application/pdf";
  fileInput.click();

  fileInput.onchange = async () => {
    const file = fileInput.files[0];
    if (!file) return;

    uploadBtn.innerText = "Uploading...";
    uploadBtn.disabled = true;

    try {
      // Upload to Cloudinary
      const cloudinaryRes = await uploadToCloudinary(file);

      console.log(cloudinaryRes, "==>>> cloudinaryRes");
      // Save in Firestore
      await addReport(loggedInUserId, memberId, {
        //familyMember
        fileName: file.name,
        fileUrl: cloudinaryRes.secure_url,
        fileType: file.type,
      });

      alert("Report uploaded successfully ✅");
      loadMember(); // refresh reports
    } catch (err) {
      alert(err.message);
    }

    uploadBtn.innerText = "➕ Upload Report";
    uploadBtn.disabled = false;
  };
});

// ==============================
// Cloudinary upload function
// ==============================
const CLOUD_NAME = "dcatl0oqj";
const UPLOAD_PRESET = "smit-b12";

async function uploadToCloudinary(file) {
  const url = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/auto/upload`;
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", UPLOAD_PRESET);

  const res = await fetch(url, {
    method: "POST",
    body: formData,
  });

  if (!res.ok) {
    throw new Error("Cloudinary upload failed");
  }

  return await res.json();
}

// modal working

const modal = document.getElementById("reportModal");
const previewContainer = document.getElementById("previewContainer");
const closeModal = document.getElementById("closeModal");

// Open preview
reportListEl.addEventListener("click", (e) => {
  if (!e.target.classList.contains("view-btn")) return;

  const fileUrl = e.target.dataset.url;
  const fileType = e.target.dataset.type;

  previewContainer.innerHTML = "";

  // PDF preview
  if (fileType.includes("pdf")) {
    previewContainer.innerHTML = `
      <iframe src="${fileUrl}"></iframe>
    `;
  }
  // Image preview
  else {
    previewContainer.innerHTML = `
      <img src="${fileUrl}" alt="Report Preview" />
    `;
  }

  modal.style.display = "flex";
});

// Close modal
closeModal.onclick = () => {
  modal.style.display = "none";
  previewContainer.innerHTML = "";
};

// Close on outside click
modal.onclick = (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
    previewContainer.innerHTML = "";
  }
};
