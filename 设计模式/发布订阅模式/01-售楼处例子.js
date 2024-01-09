const salesOffices = {}

salesOffices.clientList = []

salesOffices.listen = function(fn) {
  this.clientList.push(fn)
}

salesOffices.trigger = function() {
  for (var i = 0, fn; fn = this.clientList[i++];) {
    fn.apply(this, arguments)
  }
}
