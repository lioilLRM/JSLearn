import { expect } from 'chai'
import { circumference } from '../../../refacting2/chapter06/01-extract-function/changeFunctionDeclaration.js'

describe('circumference', function() {
  it('should calculate circumfrence given a radius', function() {
    expect(circumference(100)).equal(628.3185307179587)
  })
})
