
// import * as faker from "faker"

// const generateFakeNumbers = () => {
//     Array.from({ length: 1000 }, () => faker.datatype.number({min:1000, max: 10000}))
// }

export const RandomNumber = ({ _min, _max }) => {
    return Math.floor(Math.random()*(_max - _min) + _min)
}

const GenerateRandomNumbers = ({ totalCount, minValue, maxValue }) => {
    return Array.from({ length: totalCount }, () => {
        return { idValue: RandomNumber({ _min: minValue, _max: maxValue }) }
    })
}

export const GenerateRandomNumberNoId = ({ totalCount, minValue, maxValue }) => {
    return Array.from({ length: totalCount }, () => RandomNumber({ _min: minValue, _max: maxValue }))
}

export default GenerateRandomNumbers