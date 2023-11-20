(function() {
  var arrayData = [
    [10, 130],
    [100, 60],
    [190, 160],
    [280, 10]
  ]
  var lineGenerator = rj3.svg.line()
  var path = lineGenerator(arrayData)

  document.getElementById('pathFromArrays').setAttribute('d', path)
}())
