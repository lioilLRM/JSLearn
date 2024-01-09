test('对象赋值', () => {
  const data = {
    one: 2
  }
  data['two'] = 2
  expect(data).toEqual({
    one: 1,
    two: 2
  })
})
