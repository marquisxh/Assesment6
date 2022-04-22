const {shuffleArray} = require('./utils')


describe('shuffleArray should', () => {
    test('shuffleArray should return an array', () => {
        let arr = [1,2,3,4,5]
        let result = shuffleArray(arr)
        expect(result).toHaveProperty('length')
    })

    test('shuffleArray should return an array of the same length', () => {
        let arr = [1,2,3,4,5]
        let result = shuffleArray(arr)
        expect(result.length).toEqual('arr.length')
    })

    test('shuffleArray should return an array with the same items', () => {
        let arr = [1,2,3,4,5]
        let result = shuffleArray(arr)
        expect(result).toEqual(expect.arrayContaining(arr))
    })

    test('shuffleArray should return an array with the items shuffled', () => {
        let arr = [1,2,3,4,5]
        let result = shuffleArray(arr)
        expect(arr.join()).not.toEqual(result.join())
    })

})