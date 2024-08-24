// document.addEventListener("DOMContentLoaded", function () {
//   const url = "https://fedskillstest.coalitiontechnologies.workers.dev";
//   const username = "coalition";
//   const password = "skills-test";
//   const authHeader = "Basic " + btoa(username + ":" + password);

//   fetch(url, {
//     method: "GET",
//     headers: {
//       Authorization: authHeader,
//     },
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       const patient = data.find((p) => p.name === "Jessica Taylor");
//       if (patient) {
//         populatePatientInfo(patient);
//         populateDiagnosisHistory(patient.diagnosis_history);
//         populateDiagnosticList(patient.diagnostic_list);
//         populateLabResults(patient.lab_results);
//       } else {
//         console.error("Jessica Taylor's data not found");
//       }
//     })
//     .catch((error) => console.error("Error fetching data:", error));

//   function populatePatientInfo(patient) {
//     document.querySelector(".profile-card img").src = patient.profile_picture;
//     document.querySelector(".profile-card-info h5").textContent = patient.name;

//     document.querySelector(
//       ".profile-card-info p:nth-of-type(1) strong"
//     ).textContent = patient.date_of_birth;
//     document.querySelector(
//       ".profile-card-info p:nth-of-type(2) strong"
//     ).textContent = patient.gender;
//     document.querySelector(
//       ".profile-card-info p:nth-of-type(3) strong"
//     ).textContent = patient.phone_number;
//     document.querySelector(
//       ".profile-card-info p:nth-of-type(4) strong"
//     ).textContent = patient.emergency_contact;
//     document.querySelector(
//       ".profile-card-info p:nth-of-type(5) strong"
//     ).textContent = patient.insurance_type;
//   }

//   function populateDiagnosisHistory(diagnosisHistory) {
//     const ctx = document.getElementById("bloodPressureChart").getContext("2d");
//     const labels = diagnosisHistory.map((d) => `${d.month} ${d.year}`);
//     const systolicData = diagnosisHistory.map(
//       (d) => d.blood_pressure.systolic.value
//     );
//     const diastolicData = diagnosisHistory.map(
//       (d) => d.blood_pressure.diastolic.value
//     );

//     new Chart(ctx, {
//       type: "line",
//       data: {
//         labels: labels,
//         datasets: [
//           {
//             label: "Systolic",
//             data: systolicData,
//             borderColor: "#FF6384",
//             fill: false,
//           },
//           {
//             label: "Diastolic",
//             data: diastolicData,
//             borderColor: "#36A2EB",
//             fill: false,
//           },
//         ],
//       },
//       options: {
//         responsive: true,
//         scales: {
//           y: {
//             beginAtZero: true,
//           },
//         },
//       },
//     });
//   }

//   function populateDiagnosticList(diagnosticList) {
//     const diagnosticListEl = document.querySelector(".table tbody");
//     diagnosticListEl.innerHTML = "";
//     diagnosticList.forEach((item) => {
//       const tr = document.createElement("tr");
//       tr.innerHTML = `<td>${item.name}</td><td>${item.description}</td><td>${item.status}</td>`;
//       diagnosticListEl.appendChild(tr);
//     });
//   }

//   function populateLabResults(labResults) {
//     const labResultsEl = document.querySelector(".lab-results");
//     labResultsEl.innerHTML = "";
//     labResults.forEach((result) => {
//       const div = document.createElement("div");
//       div.classList.add("lab-result-item");
//       div.innerHTML = `<span>${result}</span><button class="btn btn-link"><img src="assets/download_FILL0_wght300_GRAD0_opsz24 (1).svg" alt="Download icon" width="20"></button>`;
//       labResultsEl.appendChild(div);
//     });
//   }
// });
document.addEventListener("DOMContentLoaded", function () {
  const url = "https://fedskillstest.coalitiontechnologies.workers.dev";
  const username = "coalition";
  const password = "skills-test";
  const authHeader = "Basic " + btoa(username + ":" + password);

  fetch(url, {
    method: "GET",
    headers: {
      Authorization: authHeader,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const patient = data.find((p) => p.name === "Jessica Taylor");
      if (patient) {
        populatePatientInfo(patient);
        populateDiagnosisHistory(patient.diagnosis_history);
        populateDiagnosticList(patient.diagnostic_list);
        populateLabResults(patient.lab_results);
        populateLatestStats(patient.diagnosis_history);
      } else {
        console.error("Jessica Taylor's data not found");
      }
    })
    .catch((error) => console.error("Error fetching data:", error));

  function populatePatientInfo(patient) {
    document.querySelector(".profile-card img").src = patient.profile_picture;
    document.querySelector(".profile-card-info h5").textContent = patient.name;

    // Update the text content of <strong> elements without replacing icons
    document.querySelector(
      ".profile-card-info p:nth-of-type(1) strong"
    ).textContent = patient.date_of_birth;
    document.querySelector(
      ".profile-card-info p:nth-of-type(2) strong"
    ).textContent = patient.gender;
    document.querySelector(
      ".profile-card-info p:nth-of-type(3) strong"
    ).textContent = patient.phone_number;
    document.querySelector(
      ".profile-card-info p:nth-of-type(4) strong"
    ).textContent = patient.emergency_contact;
    document.querySelector(
      ".profile-card-info p:nth-of-type(5) strong"
    ).textContent = patient.insurance_type;
  }

  function populateDiagnosisHistory(diagnosisHistory) {
    const ctx = document.getElementById("bloodPressureChart").getContext("2d");
    const labels = diagnosisHistory.map((d) => `${d.month} ${d.year}`);
    const systolicData = diagnosisHistory.map(
      (d) => d.blood_pressure.systolic.value
    );
    const diastolicData = diagnosisHistory.map(
      (d) => d.blood_pressure.diastolic.value
    );

    new Chart(ctx, {
      type: "line",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Systolic",
            data: systolicData,
            borderColor: "#FF6384",
            fill: false,
          },
          {
            label: "Diastolic",
            data: diastolicData,
            borderColor: "#36A2EB",
            fill: false,
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }

  function populateDiagnosticList(diagnosticList) {
    const diagnosticListEl = document.querySelector(".table tbody");
    diagnosticListEl.innerHTML = ""; // Clear existing entries
    diagnosticList.forEach((item) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `<td>${item.name}</td><td>${item.description}</td><td>${item.status}</td>`;
      diagnosticListEl.appendChild(tr);
    });
  }

  function populateLabResults(labResults) {
    const labResultsEl = document.querySelector(".lab-results");
    labResultsEl.innerHTML = ""; // Clear existing entries
    labResults.forEach((result) => {
      const div = document.createElement("div");
      div.classList.add("lab-result-item");
      div.innerHTML = `<span>${result}</span><button class="btn btn-link"><img src="assets/download_FILL0_wght300_GRAD0_opsz24 (1).svg" alt="Download icon" width="20"></button>`;
      labResultsEl.appendChild(div);
    });
  }

  function populateLatestStats(diagnosisHistory) {
    if (diagnosisHistory.length === 0) return;

    const latestStats = diagnosisHistory[0]; // Get the latest entry

    // Dynamically create the stats cards based on the latest diagnosis
    const statsContainer = document.getElementById("stats-container");
    statsContainer.innerHTML = ""; // Clear existing content

    const stats = [
      {
        label: "Respiratory Rate",
        value: latestStats.respiratory_rate.value,
        unit: "bpm",
        level: latestStats.respiratory_rate.levels,
        icon: "respiratory rate.svg",
      },
      {
        label: "Temperature",
        value: latestStats.temperature.value,
        unit: "°F",
        level: latestStats.temperature.levels,
        icon: "temperature.svg",
      },
      {
        label: "Heart Rate",
        value: latestStats.heart_rate.value,
        unit: "bpm",
        level: latestStats.heart_rate.levels,
        icon: "HeartBPM.svg",
      },
    ];

    stats.forEach((stat) => {
      const statCard = document.createElement("div");
      statCard.classList.add("col-md-4");
      statCard.innerHTML = `
        <div class="stat-card">
          <div class="icon">
            <img src="assets/${stat.icon}" alt="${stat.label} Icon" width="50" />
          </div>
          <div>
            <h6>${stat.label}</h6>
            <p>${stat.value} ${stat.unit}</p>
            <small>${stat.level}</small>
          </div>
        </div>
      `;
      statsContainer.appendChild(statCard);
    });
  }
});
