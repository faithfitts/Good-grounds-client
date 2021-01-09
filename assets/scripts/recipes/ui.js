'use strict'

const store = require('./../store')

// Create Success & Failure Responses
const createSuccess = function (response) {
  store.recipe = response.recipe
  // console.log(store.recipe)
  // $('form').trigger('reset')

  $('#message').text('You have created a recipe!')
  $('#message').css('color', 'green')
}

const createFailure = function (error) {
  $('#message').text('We were unable to create a new recipe. Please try again. ' + error.message)
  $('#message').css('color', 'red')
}

// Index-All Success & Failure Responses
const onIndexAllSuccess = function (response) {
  store.recipe = response.recipe
  const myRecipes = store.recipe
  // myRecipes = an array of objects
  console.log('these are my recipes ', myRecipes)
  let recipeHTML = ''
  myRecipes.forEach(function (currentRecipe) {
    const currentRecipeHTML = (`
      <div>
      <h5>Recipe Title: ${currentRecipe.title}</h5>
      <p>Recipe Description: ${currentRecipe.description}</p>
      <h6>Recipe Method: ${currentRecipe.method}</h6>
      <p>Recipe Ingredients: ${currentRecipe.ingredients}</p>
      </div>
      `)
    recipeHTML += currentRecipeHTML
  })

  $('#recipe-display').show()
  $('#recipe-display').html(recipeHTML)
  $('#message').text('Explore!')
  $('#message').css('color', 'green')
}
// $('#message').text('Exploring Creations')
// $('#message').css('color', 'green')

const onIndexAllFailure = function (error) {
  $('#message').text('We were unable to display creations. Please try again. ' + error.message)
  $('#message').css('color', 'red')
}

// Index-All Success & Failure Responses
const onIndexOneSuccess = function (response) {
  // console.log('result from indexOne', result)
  $('#message').text('View My Creations')
  $('#message').css('color', 'green')

  $('#message').text('You have created a recipe!')
  $('#message').css('color', 'green')
}

const onIndexOneFailure = function (error) {
  $('#message').text('We were unable to display your creations. Please try again. ' + error.message)
  $('#message').css('color', 'red')
}

// Index-All Success & Failure Responses
const onShowSuccess = function (result) {
  console.log('result from indexAll', result)
  $('#message').text('Exploring Creations')
  $('#message').css('color', 'green')
  store.recipe = result.recipe
}

const onShowFailure = function (error) {
  $('#message').text('We were unable to display creations. Please try again. ' + error.message)
  $('#message').css('color', 'red')
}

// Index-All Success & Failure Responses
const onDestroySuccess = function (result) {
  console.log('result from indexAll', result)
  $('#message').text('Exploring Creations')
  $('#message').css('color', 'green')
  store.recipe = result.recipe
}

const onDestroyFailure = function (error) {
  $('#message').text('We were unable to display creations. Please try again. ' + error.message)
  $('#message').css('color', 'red')
}

module.exports = {
  createSuccess,
  createFailure,
  onIndexOneSuccess,
  onIndexOneFailure,
  onIndexAllSuccess,
  onIndexAllFailure,
  onShowSuccess,
  onShowFailure,
  onDestroySuccess,
  onDestroyFailure
}
