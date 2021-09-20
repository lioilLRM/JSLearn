// var assert = require('assert')
// var expect = require('chai').expect
import assert from 'assert'
import { expect } from 'chai'
import { Province, Producer, sampleProvinceData } from '../../refacting2/demo02/index.js'
// const Province = require('../refacting2/demo02/index.js')
// const sampleProvinceData = require('../refacting2/demo02/index.js')

describe('province', function() {
  let asia

  beforeEach(function() {
    // console.log('每个测试用例都运行一次');

    asia = new Province(sampleProvinceData())
  })

  it('shortfall', function() {
    // const asia = new Province(sampleProvinceData())
    // assert.equal(asia.shortfall, 5)
    expect(asia.shortfall).equal(5)
  })

  it('profit', function() {
    // const asia = new Province(sampleProvinceData())
    expect(asia.profit).equal(230)
  })

  it('change production', function() {
    asia.producers[0].production = 20
    expect(asia.shortfall).equal(-6)
    expect(asia.profit).equal(292)
  })

  it('zero demand', function() {
    asia.demand = 0
    expect(asia.shortfall).equal(-25)
    expect(asia.profit).equal(0)
  })

  it('negative demand', function() {
    asia.demand = -1
    expect(asia.shortfall).equal(-26)
    expect(asia.profit).equal(-10)
  })

  it('empty string demand', function() {
    asia.demand = ''
    expect(asia.shortfall).NaN
    expect(asia.profit).NaN
  })
})

describe('no producers', function() {
  let noProducers
  beforeEach(function() {
    const data = {
      name: 'No proudcers',
      producers: [],
      demand: 30,
      price: 20
    }
    noProducers = new Province(data)
  })

  it('shortfall', function() {
    expect(noProducers.shortfall).equal(30)
  })

  it('profit', function() {
    expect(noProducers.profit).equal(0)
  })
})

describe('string for producers', function() {
  it('', function() {
    const data = {
      name: 'String producers',
      producers: [],
      demand: 30,
      price: 20
    }
    const prov = new Province(data)
    expect(prov.shortfall).equal(30)
  })
})
