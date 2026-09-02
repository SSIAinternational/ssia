const calendarEl = document.getElementById("calendar");
const calendar = new FullCalendar.Calendar(calendarEl, {
  initialView: "dayGridMonth",
  events: [{ title: "Mathématique", start: "2025-09-24" }],
});
calendar.render();
