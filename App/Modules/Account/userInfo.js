'use strict';

var React = require('react-native');

var {
  AsyncStorage
} = React;


var USER_KEY = 'onfe_user_info';

function getUser() {
  return AsyncStorage.getItem(USER_KEY);
}

function saveUser(userInfo) {
  return AsyncStorage.setItem(USER_KEY, JSON.stringify(userInfo));
}

function deleteUser() {
  return AsyncStorage.removeItem(USER_KEY);
}


module.exports = {
  getUser: getUser,
  saveUser: saveUser,
  deleteUser: deleteUser
};