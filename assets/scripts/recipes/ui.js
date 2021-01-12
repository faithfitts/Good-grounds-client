'use strict'

// Create Success Response
const createRecipeSuccess = function (response) {
  console.log(response.recipe)
  $('form').trigger('reset')
  const recipeHtml = ''
  $('#recipe-display').html(recipeHtml)
  $('#message').css('color', 'yellow')
  $('#message').html('Here Is Your New Creation!')
  $('#recipes-container').css('color', 'yellow')
  $('#recipes-container').append(`</br></br><b>Creation ID:</b> ${response.recipe._id}</br>`)
  $('#recipes-container').append(`<b>Creation Name:</b> ${response.recipe.title}</br>`)
  $('#recipes-container').append(`<b>Description:</b> ${response.recipe.description}</br>`)
  $('#recipes-container').append(`<b>Method:</b> ${response.recipe.method}</br>`)
  $('#recipes-container').append(`<b>Ingredients:</b> ${response.recipe.ingredients}</br></br>`)
}

// Create Failure Response
const createRecipeFailure = function (error) {
  $('#message').text('We were unable to create a new creation. Please try again. ' + error.message)
  $('#message').css('color', 'red')
}

// Index-One Success Response
const indexUserRecipeSuccess = function (response) {
  // console.log('result from indexOne', result)
  const recipeIndex = response.recipes
  $('#recipes-container').css('color', 'white')
  recipeIndex.forEach(recipe => {
    $('#recipes-container').append(`</br><b>Creation ID:</b> ${recipe._id}</br>`)
    $('#recipes-container').append(`<b>Creation Name:</b> ${recipe.title}</br>`)
    $('#recipes-container').append(`<b>Description:</b> ${recipe.description}</br>`)
    $('#recipes-container').append(`<b>Method:</b> ${recipe.method}</br>`)
    $('#recipes-container').append(`<b>Ingredients:</b> ${recipe.ingredients}</br></br>`)
  })
}

// Index-One Failure Response
const indexUserRecipeFailure = function (error) {
  $('#message').text('We were unable to display your creations. Please try again. ' + error.message)
  $('#message').css('color', 'red')
}

// Index-All Success Response
const indexAllRecipeSuccess = function (response) {
  // console.log('Here is everyones recipes', response.recipes)
  const recipeIndex = response.recipes
  $('#recipes-container').css('color', 'white')
  recipeIndex.forEach(recipe => {
    $('#recipes-container').append(`<b>Creation ID:</b> ${recipe._id}</br>`)
    $('#recipes-container').append(`<b>Creation Name:</b> ${recipe.title}</br>`)
    $('#recipes-container').append(`<b>Description:</b> ${recipe.description}</br>`)
    $('#recipes-container').append(`<b>Method:</b> ${recipe.method}</br>`)
    $('#recipes-container').append(`<b>Ingredients:</b> ${recipe.ingredients}</br></br>`)
  })
}

// Index-All Failure Response
const indexAllRecipeFailure = function (error) {
  $('#message').text('We were unable to display creations. Please try again. ' + error.message)
  $('#message').css('color', 'red')
}

// Show Success Response
const showRecipeSuccess = function (response) {
  const recipeHtml = ''
  $('#recipes-container').html(recipeHtml)
  $('#recipes-container').append(`
    </br></br>Creation Name: ${response.recipe.title}</br>
    Description: ${response.recipe.description}</br>
    Method: ${response.recipe.method}</br>
    Ingredients: ${response.recipe.ingredients}
    `)
  $('#message').css('color', 'yellow')
  const recipeHTML = (`
      <div>
        <h4>Is this it?</h4>
      </div>`)
  $('#message').html(recipeHTML)
}

// Show Failure Response
const showRecipeFailure = function (error) {
  $('#message').text('We were unable to display creations. Please try again. ' + error.message)
  $('#message').css('color', 'red')
}

// Update Success Response
const updateRecipeSuccess = function (response) {
  // $('form').trigger('reset')
  $('#message').css('color', 'yellow')
  const recipeHTML = (`
    <div>
      <h4>You Have Updated A Creation!</h4>
    </div>`)
  $('#message').html(recipeHTML)
}

// Update Failure Response
const updateRecipeFailure = function (error) {
  $('#message').text('We were unable to update a new creation. ' + error.message)
  $('#message').css('color', 'red')
}

// Delete Success Response
const destroyRecipeSuccess = function () {
  $('form').trigger('reset')
  $('#message').css('color', 'yellow')
  const recipeHTML = (`
    <div>
      <h4>You Have Successfully Removed Your Creation!</h4>
    </div>`)
  $('#message').html(recipeHTML)
}

// Delete Failure Response
const destroyRecipeFailure = function (error) {
  $('form').trigger('reset')
  $('#message').text('We were unable to delete your creation. ' + error.message)
  $('#message').css('color', 'red')
}

module.exports = {
  createRecipeSuccess,
  createRecipeFailure,
  indexUserRecipeSuccess,
  indexUserRecipeFailure,
  indexAllRecipeSuccess,
  indexAllRecipeFailure,
  showRecipeSuccess,
  showRecipeFailure,
  updateRecipeSuccess,
  updateRecipeFailure,
  destroyRecipeSuccess,
  destroyRecipeFailure
}
