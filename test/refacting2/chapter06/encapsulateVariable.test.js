import { expect } from 'chai'
import { getDefaultOwner, setDefaultOwner } from '../../../refacting2/chapter06/encapsulateVariable.js'

describe('defaultOwner', function() {
  it('it Martin Fowler', () => {
    const spaceship = {}
    spaceship.owner = getDefaultOwner()
    expect(spaceship.owner.firstName).equal('Martin')
    expect(spaceship.owner.lastName).equal('Fowler')
  })
})
