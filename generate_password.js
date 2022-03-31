function generatePassword(options) {
  // define things user might want
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  const upperCaseLetters = lowerCaseLetters.toUpperCase()
  const numbers = '0123456789'
  const symbols = '~!@$%&*()-_+={}[]|;:"<>,.?/'

  // create a collection to store things user picked up
  let collection = []
  if (options.lowercase === 'on') {
    collection = collection.concat(lowerCaseLetters.split(''))
  }

  if (options.uppercase === 'on') {
    collection = collection.concat(upperCaseLetters.split(''))
  }

  if (options.numbers === 'on') {
    collection = collection.concat(numbers.split(''))
  }

  if (options.symbols === 'on') {
    collection = collection.concat(symbols.split(''))
  }

  // remove things user do not need
  collection = collection.filter(
    character => !options.excludeCharacters.includes(character)
  )

  // Return error notice if collection is empty
  if (collection.length === 0) {
    return 'There is no valid character in your selection!'
  }
  // start generating password
  let password = ''
  for (let i = 1; i <= Number(options.length); i++) {
    const randomIndex = Math.floor(Math.random() * collection.length)
    password += collection[randomIndex]
  }

  // return the generated password
  return password
}

module.exports = generatePassword