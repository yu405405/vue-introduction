exports.command = function (select, event, keyCode) {
  return this.execute(function(selector, event, keyCode) {
    var e = document.createElement('HTMLEvents')
    e.initEvent(event, true, true)
    if (keyCode) {
      e.keyCode = keyCode
    }
    document.querySelector(selector).dispatchEvent(e)
  }, [selector, event, keyCode])
}
