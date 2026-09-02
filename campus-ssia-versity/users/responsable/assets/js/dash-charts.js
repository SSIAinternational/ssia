const financeChart = document.querySelector(".finance_chart canvas");

new Chart(financeChart, {
  type: "line",
  data: {
    labels: ["10:30", "12:00", "15:36", "18:45", "7:30"],
    datasets: [
      {
        label: "Entrées",
        data: [0, 50000, 0, 120000, 30000],
        borderWidth: 1,
        backgroundColor: "#22c55eab",
        borderColor: "#22c55eab",
      },
      {
        label: "Dépenses",
        data: [40000, 0, 60000, 20000, 0],
        borderWidth: 1,
        backgroundColor: "#ef4444b3",
        borderColor: "#ef4444b3",
      },
      {
        label: "Solde",
        data: [216000, 266000, 206000, 306000, 336000],
        borderWidth: 1,
        backgroundColor: "#3b83f6a5",
        borderColor: "#3b83f6a5",
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

const reussiteChart = document.querySelector(".reussite_chart canvas");

new Chart(reussiteChart, {
  type: "bar",
  data: {
    labels: ["2025-2026"],
    datasets: [
      {
        label: "Nombre d'inscrits",
        data: [1237],
        backgroundColor: "#3b83f6a5",
        borderColor: "#3b83f6a5",
        borderWidth: 1,
      },
      {
        label: "Nombre d'admis",
        data: [1000],
        backgroundColor: "#22c55eab",
        borderColor: "#22c55eab",
        borderWidth: 1,
      },
      {
        label: "Nombre d'échec",
        data: [237],
        borderColor: "#ef4444b3",
        backgroundColor: "#ef4444b3",
        borderWidth: 1,
      },
    ],
  },
  options: {
    responsive: false,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          display: false,
        },
      },
    },
  },
});

const emploiChart = document.querySelector(".emplois_chart canvas");
new Chart(emploiChart, {
  type: "doughnut",
  data: {
    labels: ["Employés", "Non employés"],
    datasets: [
      {
        label: "",
        data: [1200, 37],
        borderWidth: 0, // enlève aussi les contours si tu veux un rendu clean
      },
    ],
  },
  options: {
    responsive: false,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true, // ou false si tu veux aussi enlever la légende
      },
    },
  },
});
