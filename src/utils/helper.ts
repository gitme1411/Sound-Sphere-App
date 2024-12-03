export const regexPhoneNumber = /[^0-9]/g

export const regexDecimalNumber = /[^0-9.,]/g

export const regexCharacters = /[^A-Za-z0-9]/g

export const REGEX_PLATE_NUMBER = (number: string) => {
  const plateNumber = /^[0-9]{2}[A-Z]{1,2}[0-9]{5,6}$/
  return plateNumber.test(number)
}

export const REMOVE_CHARACTERS = (text: string) => {
  // eslint-disable-next-line no-useless-escape
  const outString = text?.replace(/[^A-Za-z0-9 ]/g, "").trim()
  return outString
}

export const REGEX_PASSWORD = (password: string) => {
  const pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/
  return pattern.test(password)
}
