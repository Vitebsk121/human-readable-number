module.exports = function toReadable (number) {
  const str = String(number);
  const arrOfNumber = str.split("");
  const arrOfUnits = ['zero','one','two','three','four','five','six','seven','eight','nine',
  'ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
  const arrOfTens = ['','ten','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
  if(arrOfNumber.length === 3) {
      if (+arrOfNumber[2] === 0 && +arrOfNumber[1] > 1) {
        return arrOfUnits[arrOfNumber[0]] + ' hundred ' + arrOfTens[arrOfNumber[1]];
      } else if (+arrOfNumber[1] === 1) {
          return arrOfUnits[arrOfNumber[0]] + ' hundred ' + arrOfUnits[(+arrOfNumber[2] + 10)];
      } else if (+arrOfNumber[1] === 0 && +arrOfNumber[2] === 0) {
          return arrOfUnits[arrOfNumber[0]] + ' hundred';
      } else if (+arrOfNumber[1] === 0) {
          return arrOfUnits[arrOfNumber[0]] + ' hundred ' + arrOfTens[arrOfNumber[1]] + arrOfUnits[arrOfNumber[2]];
      } else {
      return arrOfUnits[arrOfNumber[0]] + ' hundred ' + arrOfTens[arrOfNumber[1]] + " " + arrOfUnits[arrOfNumber[2]];    
      }
  } else if (arrOfNumber.length === 2) {
      if (+arrOfNumber[1] === 0) {
          return arrOfTens[arrOfNumber[0]]
      } else if (+arrOfNumber[0] === 1) {
          return arrOfUnits[(+arrOfNumber[1] + 10)];
      } else {
          return arrOfTens[arrOfNumber[0]] + ' ' + arrOfUnits[arrOfNumber[1]];
      }
  } else if(arrOfNumber.length === 1) {
      return arrOfUnits[arrOfNumber[0]];
  }
}