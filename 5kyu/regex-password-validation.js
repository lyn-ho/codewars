function validate(password) {
  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)((?!\W+).){6,}$/.test(password)
}
