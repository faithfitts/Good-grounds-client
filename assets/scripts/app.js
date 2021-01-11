'use strict'

const authEvents = require('./auth/events')
const recipeEvents = require('./recipes/events')

$(() => {
  $('.authenticated').hide()

  // Auth Listeners
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('click', authEvents.onSignOut)

  // Recipe Listeners
  $('#create-recipe').on('submit', recipeEvents.onRecipeCreate)
  $('#show-recipe').on('submit', recipeEvents.onRecipeShow)
  $('#index-user').on('click', recipeEvents.onRecipeIndexUser)
  $('#index-all').on('click', recipeEvents.onRecipeIndexAll)
  $('#update-recipe').on('submit', recipeEvents.onRecipeUpdate)
  $('#destroy-recipe').on('submit', recipeEvents.onRecipeDestroy)
})
