const {shuffleArray} = require('./utils')

let testData = {
    bot1: "evobot",
    bot2: "buffybot",
    bot3: "aprilbot",
    bot4: "chargerbot",
    bot5: "benderbot"
}

describe('shuffleArray should', () => {
    let shuffledArray = shuffleArray(testData)
    expect(typeof shuffledArray).toBe('string')
})