'use strict'

const config = require('./../config')
const store = require('./../store')

// API call for Creating a New Recipe
const createRecipe = function (data) {
  // console.log('formData in create is ', formData)
  return $.ajax({
    url: config.apiUrl + '/recipes',
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data
  })
}

// API call for Show a Recipe
const showRecipe = function (data) {
  console.log('This is showRecipe data:', data)
  return $.ajax({
    url: config.apiUrl + '/recipes/' + data.recipe.id,
    method: 'GET',
    // data: formData,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

// API call for Index-One Recipe (the current user)
const indexUserRecipes = function () {
  return $.ajax({
    url: config.apiUrl + '/recipes',
    method: 'GET',
    // data: formData,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

// API call for Index-All Recipes (all users)
const indexAllRecipes = function (data) {
  console.log('formData in indexAll is ', data)
  return $.ajax({
    url: config.apiUrl + '/recipes/all',
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data
  })
}

// API call for Updating a Recipe
const updateRecipe = function (data) {
  console.log('This is editRecipe data:', data)
  return $.ajax({
    url: config.apiUrl + '/recipes/' + data.recipe.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data
  })
}

// API call for Deleting a Recipe
const destroyRecipe = function (data) {
  console.log('This is destroyRecipe data:', data)
  return $.ajax({
    url: config.apiUrl + '/recipes/' + data.recipe.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data
  })
}

module.exports = {
  createRecipe,
  showRecipe,
  indexUserRecipes,
  indexAllRecipes,
  updateRecipe,
  destroyRecipe
}
