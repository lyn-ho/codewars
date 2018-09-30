function encrypt(text, n) {
  for (let i = 0; i < n; i++) {
    text = text && text.replace(/.(.|$)/g, '$1') + text.replace(/(.)./g, '$1')
  }
  return text
}

function decrypt(encryptedText, n) {
  let l = encryptedText && (encryptedText.length / 2) | 0
  for (let i = 0; i < n; i++) {
    encryptedText = encryptedText.slice(l).replace(/./g, (_, i) => _ + (i < l ? encryptedText[i] : ''))
  }
  return encryptedText
}
