
// Demo mapping: map NFC tag hex UID -> patient record ID
const tagToPatient = {
  // Replace these example UIDs with the real UIDs of programmed wristbands
  "04A1B5C27E": "psysafe-0001",
  "04B3C4D5E6": "psysafe-0002",
  "0499AA11BB": "psysafe-0003"
};

const sampleDB = {
  "psysafe-0001": {
    id: "psysafe-0001",
    name: "Ahmed M.",
    age: 42,
    diagnosis: "Major Depression",
    level: "🟨 Monitor",
    tips: "Speak calmly; avoid sensitive topics."
  },
  "psysafe-0002": {
    id: "psysafe-0002",
    name: "Fatima S.",
    age: 28,
    diagnosis: "Chronic Psychosis",
    level: "🟥 High - Continuous observation",
    tips: "Keep a nurse nearby; avoid sudden approach from behind."
  },
  "psysafe-0003": {
    id: "psysafe-0003",
    name: "Salman A.",
    age: 35,
    diagnosis: "Schizophrenia",
    level: "🟩 Stable",
    tips: "Short interactions; offer choices rather than commands."
  }
};

const status = document.getElementById('status');
const card = document.getElementById('card');
const pName = document.getElementById('pName');
const pId = document.getElementById('pId');
const pAge = document.getElementById('pAge');
const pDiag = document.getElementById('pDiag');
const pLevel = document.getElementById('pLevel');
const pTips = document.getElementById('pTips');

function showPatient(data){
  card.classList.remove('hidden');
  pName.textContent = data.name || "Unknown";
  pId.textContent = data.id || "-";
  pAge.textContent = data.age || "-";
  pDiag.textContent = data.diagnosis || "-";
  pLevel.textContent = data.level || "-";
  pTips.textContent = data.tips || "-";
  status.textContent = "Patient loaded: " + (data.name || data.id);
}

// This function is called from the Android native layer when NFC tag detected
function onNfcScan(tagHex) {
  status.textContent = "NFC Tag detected: " + tagHex;
  // Normalize: remove leading zeros or make uppercase
  const key = tagToPatient[tagHex.toUpperCase()];
  if (key && sampleDB[key]) {
    showPatient(sampleDB[key]);
  } else {
    status.textContent = "Tag UID not recognized in demo mapping. See README to add UIDs.";
    card.classList.add('hidden');
  }
}
