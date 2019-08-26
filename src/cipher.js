window.cipher = {
  encode: (offset, newDream) => {
    let dreamcypher = '';
    for (let i = 0; i < newDream.length; i++) {
      const dreamcode = newDream.charCodeAt(i);
      const formula = (dreamcode - 65 + offset) % 26 + 65;
      dreamcypher += String.fromCharCode(formula);
    }
    return dreamcypher;
  },
  decode: (b, n) => {
    let decoded = '';
    for (let i = 0; i < n.length; i++) {
      const underCode = n.charCodeAt(i);
      const formula2 = (underCode + 65 - b) % 26 + 65;
      decoded += String.fromCharCode(formula2);
    }
    return decoded;
  }
}
