'use strict'

const store = require('./../store')

// Sign-Up Success & Failure Responses
const signUpSuccess = function (response) {
  $('#message').text('You have Signed Up Successfully!')
  $('#message').css('color', 'green')
}

const signUpFailure = function (error) {
  $('#message').text('We were unable to sign you up. Please try again. ' + error.message)
  $('#message').css('color', 'red')
}

// Sign-In Success & Failure Responses
const signInSuccess = function (response) {
  $('#message').text('You have successfully signed in!')
  $('#message').css('color', 'green')
  store.user = response.user
  console.log(store.user)

  $('.unauthenticated').hide()
  $('.authenticated').show()
}

const signInFailure = function (error) {
  $('#message').text('Sorry! Sign In Failed: ' + error.responseJSON.message)
  $('#message').css('color', 'red')
}

// Change-Password Success & Failure
const changePasswordSuccess = function (response) {
  $('#message').text('You have successfully changed your password!')
  $('#message').css('color', 'green')
}

const changePasswordFailure = function (error) {
  $('#message').text('We were unable to change your password. Please try again! ' + error.responseJSON.message)
  $('#message').css('color', 'red')
}

// Sign-Out Success & Failure
const signOutSuccess = function () {
  $('#message').text('Sign Out Successful!')
  $('#message').css('color', 'green')
  $('.new-game').hide()
  $('.unauthenticated').show()
  $('.authenticated').hide()

  // Removes token
  store.user = null
  // Resets the form
  $('form').trigger('reset')
}

const signOutFailure = function (error) {
  $('#message').text('SignOut Failed: ' + error.responseJSON.message)
  $('#message').css('color', 'red')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
