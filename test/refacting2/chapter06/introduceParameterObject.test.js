// import { expect } from 'chai'
import { readingsOutsideRange, NumberRange } from '../../../refacting2/chapter06/introduceParameterObject.js'

const station = {
  name: 'ZB1',
  readings: [
    { temp: 47, time: '2016-11-10 09:10' },
    { temp: 53, time: '2016-11-10 09:20' },
    { temp: 58, time: '2016-11-10 09:30' },
    { temp: 53, time: '2016-11-10 09:40' },
    { temp: 51, time: '2016-11-10 09:50' }
  ]
}

const operatingPlan = {
  temperatureFloor: 47,
  temperatureCeiling: 53
}

describe('introduceParameterObject', () => {
  it('give the reading outside temperature outside range', () => {
    const range = new NumberRange(operatingPlan.temperatureFloor, operatingPlan.temperatureCeiling)

    const alerts = readingsOutsideRange(station, range)
    console.log('------', alerts)
  })
})
