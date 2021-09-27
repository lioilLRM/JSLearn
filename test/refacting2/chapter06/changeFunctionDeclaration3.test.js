import { expect } from 'chai'
import { inNewEngland } from '../../../refacting2/chapter06/changeFunctionDeclaration3.js'

describe('inNewEngland', () => {
  it('should find no New England Customers when there are no customers', () => {
    const noCustomer = []
    const newEnglandCustomer = noCustomer.filter(c => inNewEngland(c.address.state))
    expect(newEnglandCustomer).to.eql([])
  })

  it('should find a single New England Customer', function() {
    const aNewEnglandCustomer = {
      address: {
        state: 'MA'
      }
    }
    const someCustomer = [aNewEnglandCustomer]
    const newEnglandCustomer = someCustomer.filter(c => inNewEngland(c.address.state))
    expect(newEnglandCustomer).to.eql(someCustomer)
  })
})
