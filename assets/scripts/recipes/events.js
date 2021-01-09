'use strict'
const getFormFields = require('./../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onCreate = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)

  api.create(data)
    .then(ui.createSuccess)
    .catch(ui.createFailure)
}

const onShow = function (event) {
  // event.preventDefault()
  const form = event.target
  const data = getFormFields(form)

  api.show(data)
    .then(ui.onShowSuccess)
    .catch(ui.onShowFailure)
}

const onIndexOne = function (event) {
  // event.preventDefault()
  const form = event.target
  const data = getFormFields(form)

  api.indexOne(data)
    .then(ui.onIndexOneSuccess)
    .catch(ui.onIndexOneFailure)
}

const onIndexAll = function (event) {
  const form = event.target
  const data = getFormFields(form)

  api.indexAll(data)
    .then(ui.onIndexAllSuccess)
    .catch(ui.onIndexAllFailure)
}

const onDestroy = function (event) {
  // event.preventDefault()
  const form = event.target
  const data = getFormFields(form)

  api.destroy(data)
    .then(ui.onDestroySuccess)
    .catch(ui.onDestroyFailure)
}

module.exports = {
  onCreate,
  onShow,
  onIndexOne,
  onIndexAll,
  onDestroy
}
