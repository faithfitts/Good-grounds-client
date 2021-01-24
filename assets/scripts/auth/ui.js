'use strict'

const store = require('./../store')

// Sign-Up Success Response
const signUpSuccess = function (response) {
  $('form').trigger('reset')
  $('#message').text('You have Signed Up Successfully!')
  $('#message').css('color', 'yellow')
}

// Sign-Up Failure Response
const signUpFailure = function (error) {
  $('form').trigger('reset')
  $('#message').text('We were unable to sign you up. Please try again. ' + error.message)
  $('#message').css('color', 'yellow')
}

// Sign-In Success Response
const signInSuccess = function (response) {
  $('form').trigger('reset')
  $('#message').text('Welcome!')
  $('#message').css('color', 'yellow')
  store.user = response.user
  console.log(store.user)

  $('.unauthenticated').hide()
  $('.authenticated').show()
}

// Sign-In Failure Response
const signInFailure = function (error) {
  $('form').trigger('reset')
  $('#message').text('Sorry! Sign In Failed: ' + error.responseJSON.message)
  $('#message').css('color', 'yellow')
}

// Change-Password Success Response
const changePasswordSuccess = function (response) {
  $('form').trigger('reset')
  $('#message').text('You have successfully changed your password!')
  $('#message').css('color', 'yellow')
}

// Change-Password Failure Response
const changePasswordFailure = function (error) {
  $('form').trigger('reset')
  $('#message').text('We were unable to change your password. Please try again! ' + error.responseJSON.message)
  $('#message').css('color', 'yellow')
}

// Sign-Out Success Response
const signOutSuccess = function () {
  $('form').trigger('reset')
  $('#message').text('Sign Out Successful!')
  $('#message').css('color', 'yellow')
  $('.unauthenticated').show()
  $('.authenticated').hide()

  // Removes token
  store.user = null
  // Resets the form
  $('form').trigger('reset')
}

// Sign-Out Success Response
const signOutFailure = function (error) {
  $('form').trigger('reset')
  $('#message').text('SignOut Failed: ' + error.responseJSON.message)
  $('#message').css('color', 'yellow')
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
