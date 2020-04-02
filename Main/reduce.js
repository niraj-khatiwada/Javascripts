const Awards = 'Nominated for 5 nominations'
const awards = Awards.split(' ').reduce((preVal, currVal) => {
  console.log('outside', preVal, currVal)
  if (!isNaN(parseInt(currVal))) {
    console.log('current val inside typeof', currVal)
    preVal.push(parseInt(currVal))
  }
  return preVal
}, [])

console.log(awards.reduce((a, b) => {
    return a + b
  }))