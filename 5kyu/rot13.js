const rot13 = message => {
  const charCodeOfA = 'A'.charCodeAt()
  const charCodeOfZ = 'Z'.charCodeAt()
  const charCodeOfa = 'a'.charCodeAt()
  const charCodeOfz = 'z'.charCodeAt()

  return message.replace(/[a-zA-Z]/g, s => {
    return String.fromCharCode(
      (s.charCodeAt() <= charCodeOfZ ? charCodeOfZ : charCodeOfz) >=
      (s = s.charCodeAt() + 13)
        ? s
        : s - 26
    )
  })
}

/**
 *
 */

const rot13_2 = str =>
  str.replace(/[a-z]/gi, letter =>
    String.fromCharCode(
      letter.charCodeAt(0) + (letter.toLowerCase() <= 'm' ? 13 : -13)
    )
  )
