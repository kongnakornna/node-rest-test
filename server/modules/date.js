(() => {
  "use strict";

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  module.exports = {
    formatDate(date) {
      date = new Date(date);
      let day = date.getDate(),
        monthIndex = date.getMonth(),
        year = date.getFullYear(),
        hour = date.getHours().toString(),
        minutes = date.getMinutes().toString();

      if (hour.length === 1) {
        hour = "0" + hour;
      }
      if (minutes.length === 1) {
        minutes = "0" + minutes;
      }

      return (
        day +
        " " +
        monthNames[monthIndex] +
        " " +
        year +
        " " +
        hour +
        ":" +
        minutes
      );
    },
    formatMonth(date) {
      let month = new Date(date).getMonth(),
        day = new Date(date).getDate();
      return monthNames[month] + "-" + day;
    },
    formatDateNumaric(date) {
      let today = new Date(date),
        todaysDay = today.getDate(),
        todaysMonth = today.getMonth(),
        todaysYear = today.getFullYear();
      return todaysYear + "/" + parseInt(todaysMonth) + 1 + "/" + todaysDay;
    },
    diffTime(time1, time2) {
      return new Date(time2) > new Date(time1);
    },
    isToday(dateToCheck) {
      return new Date().toDateString() === dateToCheck.toDateString();
    },
    getDayUniqueTimestamp(date) {
      let today = new Date(date),
        todaysDay = today.getDate(),
        todaysMonth = parseInt(today.getMonth()) + 1,
        todaysYear = today.getFullYear(),
        todaysUniqId = parseInt(
          new Date(
            todaysYear + "/" + todaysMonth + "/" + todaysDay + " 00:00"
          ).getTime()
        );
      return todaysUniqId;
    },
    getDateIsoString(date) {
      date = new Date(date);
      date
        .toISOString()
        .substring(0, 19)
        .replace("T", " ");
      return date;
    }
  };
})();