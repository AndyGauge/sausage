module.exports = function(index, options) {
  if(index == undefined) {
    var index = 0
  }
  if(index%2 == 0)
  {
    return options.fn(this)
  }
  else
  {
    return options.inverse(this)
  }
}
