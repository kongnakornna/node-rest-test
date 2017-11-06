(() => {
  "use strict";

  module.exports = {
    formatDate: date => {
      let monthNames = [
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
      date = new Date(date);
      let day = date.getDate();
      let monthIndex = date.getMonth();
      let year = date.getFullYear();
      let hour = date.getHours().toString();

      if (hour.length === 1) {
        hour = "0" + hour;
      }
      let minutes = date.getMinutes().toString();
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
    formatMonth: date => {
      let month = new Date(date).getMonth();
      let day = new Date(date).getDate();
      let monthNames = [
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
      return monthNames[month] + "-" + day;
    },
    formatDateNumaric: date => {
      let today = new Date(date);
      let todaysDay = today.getDate();
      let todaysMonth = today.getMonth();
      let todaysYear = today.getFullYear();
      return todaysYear + "/" + parseInt(todaysMonth) + 1 + "/" + todaysDay;
    },
    diffTime: (time1, time2) => {
      return new Date(time2) > new Date(time1);
    },
    isToday: dateToCheck => {
      let actualDate = new Date();
      return actualDate.toDateString() === dateToCheck.toDateString();
    },
    getDayUniqueTimestamp: date => {
      let today = new Date(date);
      let todaysDay = today.getDate();
      let todaysMonth = parseInt(today.getMonth()) + 1;
      let todaysYear = today.getFullYear();
      let todaysUniqId = parseInt(
        new Date(
          todaysYear + "/" + todaysMonth + "/" + todaysDay + " 00:00"
        ).getTime()
      );
      return todaysUniqId;
    },
    getDateIsoString: date => {
      date = new Date(date);
      date
        .toISOString()
        .substring(0, 19)
        .replace("T", " ");
      return date;
    }
  };
})();
