sap.ui.define(
  ['sap/ui/demo/orderbrowser/localService/mockserver'],
  function (e) {
    'use strict'
    var r = []
    r.push(e.init())
    Promise.all(r).then(function () {
      sap.ui.require(['sap/ui/core/ComponentSupport'])
    })
  }
)
