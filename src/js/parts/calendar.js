function calendarAdd() {
  var addToCalendarButtons = document.querySelectorAll('.addToCalendar');

  addToCalendarButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      var startDate = this.getAttribute('data-start');
      var startTime = this.getAttribute('data-start-time');
      var endDate = this.getAttribute('data-end');
      var title = this.getAttribute('data-title');

      // Функція для форматування дати з d.m.Y в YYYYMMDD
      function formatDateToGoogle(dateStr) {
        var dateParts = dateStr.split('.');
        return dateParts[2] + dateParts[1] + dateParts[0]; // YYYYMMDD
      }

      // Форматування дати та часу для Google Calendar
      var startDateFormatted =
        formatDateToGoogle(startDate) + 'T' + startTime.replace(':', '') + '00'; // YYYYMMDDTHHmmss
      var endDateFormatted = formatDateToGoogle(endDate) + 'T235900'; // Якщо немає часу завершення, ставимо 23:59:00

      var googleCalendarUrl =
        'https://www.google.com/calendar/render?action=TEMPLATE&text=' +
        encodeURIComponent(title) +
        '&dates=' +
        encodeURIComponent(startDateFormatted) +
        '/' +
        encodeURIComponent(endDateFormatted);

      window.open(googleCalendarUrl, '_blank');
    });
  });
}

calendarAdd();

document.addEventListener('facetwp-loaded', function () {
  calendarAdd();
});
