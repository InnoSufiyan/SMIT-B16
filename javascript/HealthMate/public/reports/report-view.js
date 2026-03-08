import { auth, onAuthStateChanged, getReports } from "../firebaseFunctions.js";

const GEMINI_API_KEY = 'AIzaSyBuBg32Fc15rIjY2b5hcNTANjKR_uzQT-A'

function buildPrompt(fileUrl) {
  return `
You are HealthMate, an AI health assistant.

Analyze the given medical report file.

Tasks:
1. Read and understand the medical report from the file.
2. Explain the report in SIMPLE English.
3. Explain the same in Roman Urdu (easy words, no Urdu script).
4. Highlight abnormal values clearly.
5. Suggest 3-5 important questions the patient should ask their doctor.
6. Suggest foods to eat and foods to avoid (if applicable).
7. Suggest basic home-care tips if appropriate.

Rules:
- Do NOT give medical diagnosis.
- Do NOT prescribe medicines.
- Always add a disclaimer.

End with this disclaimer exactly:
"⚠️ This AI summary is for understanding only. Always consult your doctor before making medical decisions."
Roman Urdu disclaimer:
"⚠️ Yeh AI sirf samajhne ke liye hai, ilaaj ke liye nahi."
"The medical report file is attached below."

`;
}

const params = new URLSearchParams(window.location.search);
const memberId = params.get("memberId");
const reportId = params.get("reportId");

const previewEl = document.getElementById("filePreview");
const analyzeBtn = document.getElementById("analyzeBtn");
const aiResult = document.getElementById("aiResult");

let reportData;
let uid;

onAuthStateChanged(auth, async (user) => {
  if (!user) return;

  uid = user.uid;

  const res = await getReports(uid, memberId);
  reportData = res.reports.find((r) => r.id === reportId);

  showPreview(reportData);
});

function showPreview(report) {
  if (report.fileType.includes("pdf")) {
    previewEl.innerHTML = `<iframe src="${report.fileUrl}"></iframe>`;
  } else {
    previewEl.innerHTML = `<img src="${report.fileUrl}" />`;
  }
}

function blobToBase64(blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      // remove "data:application/pdf;base64,"
      const base64 = reader.result.split(",")[1];
      resolve(base64);
    };
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
}

async function getFileAsBase64(fileUrl) {
  const res = await fetch(fileUrl);
  const blob = await res.blob();

  const base64 = await blobToBase64(blob);

  return {
    base64,
    mimeType: blob.type, // e.g. application/pdf or image/jpeg
  };
}

analyzeBtn.onclick = async () => {
  aiResult.innerHTML = "🤖 Analyzing report, please wait...";

  try {
    const { base64, mimeType } = await getFileAsBase64(reportData.fileUrl);

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-pro:generateContent?key=${GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              role: "user",
              parts: [
                {
                  text: buildPrompt(""), // no URL now
                },
                {
                  inline_data: {
                    mime_type: mimeType,
                    data: base64,
                  },
                },
              ],
            },
          ],
        }),
      },
    );

    const data = await response.json();

    const text =
      data.candidates?.[0]?.content?.parts?.[0]?.text ||
      "No AI response generated.";

    aiResult.innerHTML = formatAIResponse(text);
  } catch (err) {
    aiResult.innerHTML = "❌ AI analysis failed. Please try again.";
    console.error(err);
  }
};

function formatAIResponse(text) {
  return `
    <div class="ai-card">
      <h4>📝 Summary (English)</h4>
      <p>${extract(text, "English")}</p>
    </div>

    <div class="ai-card">
      <h4>🌍 Roman Urdu Explanation</h4>
      <p>${extract(text, "Roman Urdu")}</p>
    </div>

    <div class="ai-card warning">
      <h4>⚠️ Abnormal Values</h4>
      <p>${extract(text, "abnormal")}</p>
    </div>

    <div class="ai-card">
      <h4>❓ Questions to Ask Doctor</h4>
      <ul>${listify(extract(text, "doctor"))}</ul>
    </div>

    <div class="ai-card">
      <h4>🥗 Food Suggestions</h4>
      <p>${extract(text, "food")}</p>
    </div>

    <div class="ai-card disclaimer">
      <h4>⚠️ Disclaimer</h4>
      <p>
        This AI summary is for understanding only. Always consult your doctor.
        <br><br>
        <strong>Roman Urdu:</strong>
        Yeh AI sirf samajhne ke liye hai, ilaaj ke liye nahi.
      </p>
    </div>
  `;
}

function extract(text, keyword) {
  const lower = text.toLowerCase();
  const index = lower.indexOf(keyword.toLowerCase());

  if (index === -1) return "—";

  return text
    .slice(index)
    .split("\n")
    .slice(1)
    .join(" ");
}

function listify(text) {
  if (!text || text === "—") return "<li>—</li>";

  return text
    .split("\n")
    .filter(Boolean)
    .map((item) => `<li>${item.replace(/[-•]/g, "")}</li>`)
    .join("");
}
