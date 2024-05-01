const { v4: uuidv4 } = require("uuid");
export function generateShortUUID() {
    var result = '';
    var characters = uuidv4();
    var charactersLength = characters.length;
    for (var i = 0; i < 5; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  export const totalPriceFormat = (total: number) => {
    const totalString = JSON.stringify(total).split("").reverse().join("");
    const initialStringLength = totalString.length / 3; //the initial divided value (it can be int or float for later use)
    const stringLength = parseInt((totalString.length / 3) as any); //the length for breaking point (the time of comma should be added)
    let result = []; //list for final result
    for (let i = 0; i + 1 <= stringLength; i++) {
      let breakingPoint = (i + 1) * 3;
      let startingPoint = i * 3;
      result.push(totalString.slice(startingPoint, breakingPoint));
      //for the rest (if exist )
      if (initialStringLength > stringLength && i + 1 === stringLength) {
        result.push(totalString.slice(breakingPoint));
      }
    }
  
    return result.join(",").split("").reverse().join("");
  };