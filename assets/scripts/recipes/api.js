'use strict'

const config = require('./../config')
const store = require('./../store')

// API call for creating a new recipe
const create = function (formData) {
  // console.log('formData in create is ', formData)
  return $.ajax({
    url: config.apiUrl + '/recipes',
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: formData
  })
}

// API call for show
const show = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/recipes' + formData.recipe._id,
    method: 'GET',
    data: formData,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

// API call for indexing one recipe
const indexOne = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/recipes',
    method: 'GET',
    data: formData,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

// API call for indexing all recipes
const indexAll = function (formData) {
  console.log('formData in indexAll is ', formData)
  return $.ajax({
    url: config.apiUrl + '/recipes/all',
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: formData
  })
}

// API call for indexing all recipes
const update = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/recipes',
    method: 'PATCH',
    data: formData
  })
}

// API call for when we sign out
const destroy = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/recipes' + formData.recipe._id,
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

module.exports = {
  create,
  show,
  indexOne,
  indexAll,
  update,
  destroy
}
