'use strict'

const authEvents = require('./auth/events')
const recipeEvents = require('./recipes/events')

$(() => {
  // $('.authenticated').hide()

  // Auth Listeners
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('click', authEvents.onSignOut)

  // Recipe Listeners
  $('#create-recipe').on('submit', recipeEvents.onCreate)
  $('#show-recipe').on('click', recipeEvents.onShow)
  $('#update-recipe').on('submit', recipeEvents.onUpdate)
  $('#index-all').on('submit', recipeEvents.onIndexAll)
  $('#index-one').on('submit', recipeEvents.onIndexOne)
  $('#destroy-recipe').on('submit', recipeEvents.onDestroy)
})
