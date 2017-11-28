(() => {
  "use strict";

  const geolib = require("geolib"),
    Hashids = require("hashids"),
    hashids = new Hashids();

  module.exports = {
    shuffle(array) {
      let currentIndex = array.length,
        temporaryValue,
        randomIndex;
      while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }

      return array;
    },
    capitalizeFirstLetter(string) {
      let keysArray = string.split(" ");
      for (let i = 0; i < keysArray.length; i++) {
        keysArray[i] =
          keysArray[i].charAt(0).toUpperCase() +
          keysArray[i].slice(1).toLowerCase();
      }
      return keysArray.join(" ");
    },
    uniqueArray(array) {
      return array.filter((x, i, a) => a.indexOf(x) == i);
    },
    textSplit(text) {
      let stringArray = text.split(/[\- ,.]+/);
      for (let i = 0; i < stringArray.length; i++) {
        stringArray[i] = stringArray[i].trim().toLowerCase();
      }
      return stringArray;
    },
    arrayDifference(arrayA, arrayB) {
      return arrayA.filter(e => !arrayB.find(a => e == a));
    },
    getDistance(coordinatesA, coordinatesB, i) {
      let distance = geolib.getDistance(
        {
          latitude: coordinatesA[0],
          longitude: coordinatesA[1]
        },
        {
          latitude: coordinatesB[0],
          longitude: coordinatesB[1]
        }
      );
      let distance_unit;
      if (Math.trunc(distance) > 1000) {
        distance = distance / 1000;
        if ((distance + "").indexOf(".") > -1) {
          distance = distance.toFixed(1);
          let dotIndex = (distance + "").indexOf(".");
          if (distance.charAt(dotIndex + 1) === 0) {
            distance = distance.substr(0, dotIndex);
          }
        }
        distance_unit = "km";
      } else {
        distance_unit = "m";
      }
      return {
        distance: distance.toString(),
        distance_unit: distance_unit,
        distance_score: i
      };
    },
    hash(string) {
      return hashids.encode(string);
    },
    joinArrayToString(array, seperator) {
      let result = array
        .map(elem => {
          return elem;
        })
        .join(seperator);
      return result;
    },
    convertString(phrase) {
      var maxLength = 100;

      var returnString = phrase.toLowerCase();
      returnString = returnString.replace(/ö/g, "o");
      returnString = returnString.replace(/ç/g, "c");
      returnString = returnString.replace(/ş/g, "s");
      returnString = returnString.replace(/ı/g, "i");
      returnString = returnString.replace(/ğ/g, "g");
      returnString = returnString.replace(/ü/g, "u");
      returnString = returnString.replace(/[^a-z0-9\s-]/g, "");
      returnString = returnString.replace(/[\s-]+/g, " ");
      returnString = returnString.replace(/^\s+|\s+$/g, "");
      if (returnString.length > maxLength)
        returnString = returnString.substring(0, maxLength);
      returnString = returnString.replace(/\s/g, "-");

      return returnString;
    }
  };
})();
