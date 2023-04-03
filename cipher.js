const cipher = {
  encode: (offset, string) => {
    const result = [];
    let stringArray = string.split('');

    stringArray.forEach(letter => {

      let codeForUpperCase = ((letter.charCodeAt(0) - 65 + parseInt(Math.abs(offset))) % 26) + 65;
      let codeForLowerCase = ((letter.charCodeAt(0) - 97 + parseInt(Math.abs(offset))) % 26) + 97;

      (letter.charCodeAt(0) <= 90 && letter.charCodeAt(0) >= 65) ? result.push(String.fromCharCode(codeForUpperCase)) : (letter.charCodeAt(0) <= 122 && letter.charCodeAt(0) >= 97) ? result.push(String.fromCharCode(codeForLowerCase)) : result.push(letter);
    })

    return result.join('');
  },

  decode: (offset, message) => {
    const result = [];
    const messageArray = message.split('');

    messageArray.forEach(letter => {

      let codeForUpperCase = ((letter.charCodeAt(0) - 65 + 26 - parseInt(Math.abs(offset))) % 26) + 65;
      let codeForLowerCase = ((letter.charCodeAt(0) - 97 + 26 - parseInt(Math.abs(offset))) % 26) + 97;

      (letter.charCodeAt(0) <= 90 && letter.charCodeAt(0) >= 65) ? result.push(String.fromCharCode(codeForUpperCase)) : (letter.charCodeAt(0) <= 122 && letter.charCodeAt(0) >= 97) ? result.push(String.fromCharCode(codeForLowerCase)) : result.push(letter);
    })

    return result.join('');
  }
};

export default cipher;
