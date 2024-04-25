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