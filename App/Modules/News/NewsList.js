'use strict';

var React = require('react-native');


var {

  View,
  Text

} = React;

var CONSTANT = require('../Styles/CONSTANT');
var Styles = require('../Styles/index');

var NewsListView = require('../../Views/NewsListView');
var NewsCell = require('../../Views/NewsCell');

var NewsList = React.createClass({
  render: function() {
    return (
      <NewsListView 
        onRowTouch={'1'}
        rowCell={'2'}/>
    );
  }
});

NewsList.TITLE = '新闻室';

module.exports = NewsList;