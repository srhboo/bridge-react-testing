const faker = require('faker')
const fs = require('fs')

const randNumber = n => Math.floor(Math.random() * n) + 1

const generateCat = () => ({
  name: faker.name.firstName(),
  age: faker.random.number(),
  picture: `http://lorempixel.com/500/500/cats/${randNumber(10)}`
})

console.log(faker.image.cats())

const cats = n => [ ...Array(n) ].map(
  () => generateCat()
)

const number = parseInt(process.argv[2], 10)

fs.writeFile('src/cats.json', JSON.stringify(cats(number)), 'utf8', (err) => {
  if (err) throw error
  console.log('go check your cats out!')
  process.exit()
})
