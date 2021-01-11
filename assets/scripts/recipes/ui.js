'use strict'

// Create Success Response
const createRecipeSuccess = function (response) {
  console.log(response.recipe)
  // $('form').trigger('reset')
  const recipeHtml = ''
  $('#recipe-display').html(recipeHtml)
  $('#message').css('color', 'green')
  $('#message').before(`<b>Creation Name:</b> ${response.recipe.title}</br>`)
  $('#message').before(`<b>Creation ID:</b> ${response.recipe._id}</br>`)
  $('#message').before(`<b>Description:</b> ${response.recipe.description}</br>`)
  $('#message').before(`<b>Method:</b> ${response.recipe.method}</br>`)
  $('#message').before(`<b>Ingredients:</b> ${response.recipe.ingredients}</br></br>`)
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
  $('#message').text('Here are your creations!')
  recipeIndex.forEach(recipe => {
    $('#message').before(`<b>Creation Name:</b> ${recipe.title}</br>`)
    $('#message').before(`<b>Creation ID:</b> ${recipe._id}</br>`)
    $('#message').before(`<b>Description:</b> ${recipe.description}</br>`)
    $('#message').before(`<b>Method:</b> ${recipe.method}</br>`)
    $('#message').before(`<b>Ingredients:</b> ${recipe.ingredients}</br></br>`)
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
  $('#message').text('Explore Different Creations!')
  recipeIndex.forEach(recipe => {
    $('#message').before(`<b>Creation Name:</b> ${recipe.title}</br>`)
    $('#message').before(`<b>Creation ID:</b> ${recipe._id}</br>`)
    $('#message').before(`<b>Description:</b> ${recipe.description}</br>`)
    $('#message').before(`<b>Method:</b> ${recipe.method}</br>`)
    $('#message').before(`<b>Ingredients:</b> ${recipe.ingredients}</br></br>`)
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
  $('#recipe-display').html(recipeHtml)
  $('#message').css('color', 'green')
  $('#message').text(`
    Creation Name: ${response.recipe.title}
    Description: ${response.recipe.description}
    Method: ${response.recipe.method}
    Ingredients: ${response.recipe.ingredients}
    `)
}

// Show Failure Response
const showRecipeFailure = function (error) {
  $('#message').text('We were unable to display creations. Please try again. ' + error.message)
  $('#message').css('color', 'red')
}

// Update Success Response
const updateRecipeSuccess = function (response) {
  // $('form').trigger('reset')
  $('#message').css('color', 'green')
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
const destroyRecipeSuccess = function (data) {
  $('form').trigger('reset')
  $('#message').css('color', 'green')
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
