'use strict'

const store = require('./../store')

// Sign-Up Success Response
const signUpSuccess = function (response) {
  $('#message').text('You have Signed Up Successfully!')
  $('#message').css('color', 'yellow')
}

// Sign-Up Failure Response
const signUpFailure = function (error) {
  $('#message').text('We were unable to sign you up. Please try again. ' + error.message)
  $('#message').css('color', 'red')
}

// Sign-In Success Response
const signInSuccess = function (response) {
  $('#message').text('Welcome!')
  $('#message').css('color', 'yellow')
  store.user = response.user
  console.log(store.user)

  $('.unauthenticated').hide()
  $('.authenticated').show()
}

// Sign-In Failure Response
const signInFailure = function (error) {
  $('#message').text('Sorry! Sign In Failed: ' + error.responseJSON.message)
  $('#message').css('color', 'red')
}

// Change-Password Success Response
const changePasswordSuccess = function (response) {
  $('#message').text('You have successfully changed your password!')
  $('#message').css('color', 'yellow')
}

// Change-Password Failure Response
const changePasswordFailure = function (error) {
  $('#message').text('We were unable to change your password. Please try again! ' + error.responseJSON.message)
  $('#message').css('color', 'red')
}

// Sign-Out Success Response
const signOutSuccess = function () {
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
