const aiPredictions = {
    "Leicester City vs Brentford": {
        prediction: "Brentford Win",
        confidence: "70%",
        date: "2025-02-25",
        time: "17:00",
        venue: "King Power Stadium",
        homeAway: "Home",
        tipster: "AI Tipster (80%)"
    },
    "Arsenal vs West Ham United": {
        prediction: "Arsenal Win",
        confidence: "75%",
        date: "2025-02-26",
        time: "20:00",
        venue: "Emirates Stadium",
        homeAway: "Home",
        tipster: "Expert John (75%)"
    }
};

// Populate Matches
const matchesDiv = document.getElementById("matches");
Object.keys(aiPredictions).forEach(match => {
    let matchData = aiPredictions[match];
    let matchElement = document.createElement("div");
    matchElement.classList.add("match");
    matchElement.innerHTML = `
        <h3>${match}</h3>
        <p><strong>Date:</strong> ${matchData.date} | <strong>Time:</strong> ${matchData.time} | <strong>Venue:</strong> ${matchData.venue}</p>
        <p><strong>Prediction:</strong> ${matchData.prediction}</p>
        <p><strong>Confidence:</strong> ${matchData.confidence}</p>
        <p><strong>Tipster:</strong> ${matchData.tipster}</p>
        <button onclick="openMatchModal('${match}')">View Analysis</button>
    `;
    matchesDiv.appendChild(matchElement);
});

// Open Match Modal
function openMatchModal(match) {
    const matchData = aiPredictions[match];
    document.getElementById("matchDetails").innerHTML = `
        <h2>${match}</h2>
        <p><strong>Date:</strong> ${matchData.date} | <strong>Time:</strong> ${matchData.time} | <strong>Venue:</strong> ${matchData.venue}</p>
        <p><strong>Prediction:</strong> ${matchData.prediction}</p>
        <p><strong>Confidence:</strong> ${matchData.confidence}</p>
        <p><strong>Tipster:</strong> ${matchData.tipster}</p>
    `;
    document.getElementById("analysisModal").style.display = "flex";
}

// Close Modal
function closeModal() {
    document.getElementById("analysisModal").style.display = "none";
}

// Open Premium Modal
function openPremiumModal() {
    document.getElementById("premiumModal").style.display = "flex";
}

// Close Premium Modal
function closePremiumModal() {
    document.getElementById("premiumModal").style.display = "none";
}

// Search Matches
function filterMatches() {
    const query = document.getElementById("searchBar").value.toLowerCase();
    document.querySelectorAll(".match").forEach(match => {
        match.style.display = match.innerText.toLowerCase().includes(query) ? "block" : "none";
    });
}
