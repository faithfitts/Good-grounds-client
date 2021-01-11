'use strict'
const getFormFields = require('./../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

// Create
const onRecipeCreate = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)

  api.createRecipe(data)
    .then(ui.createRecipeSuccess)
    .catch(ui.createRecipeFailure)
}

// Show
const onRecipeShow = function (result) {
  console.log('result from show', result)
  event.preventDefault()
  const data = getFormFields(event.target)

  api.showRecipe(data)
    .then(ui.showRecipeSuccess)
    .catch(ui.showRecipeFailure)
}

// Index One
const onRecipeIndexUser = function (event) {
  event.preventDefault()

  api.indexUserRecipes()
    .then(ui.indexUserRecipeSuccess)
    .catch(ui.indexUserRecipeFailure)
}

// Index All
const onRecipeIndexAll = function (event) {
  const data = getFormFields(event.target)

  api.indexAllRecipes(data)
    .then(ui.indexAllRecipeSuccess)
    .catch(ui.indexAllRecipeFailure)
}

// Update
const onRecipeUpdate = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)

  api.updateRecipe(data)
    .then(ui.updateRecipeSuccess)
    .catch(ui.updateRecipeFailure)
}

// Delete
const onRecipeDestroy = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)

  api.destroyRecipe(data)
    .then(ui.destroyRecipeSuccess)
    .catch(ui.destroyRecipeFailure)
}

module.exports = {
  onRecipeCreate,
  onRecipeShow,
  onRecipeIndexUser,
  onRecipeIndexAll,
  onRecipeUpdate,
  onRecipeDestroy
}
