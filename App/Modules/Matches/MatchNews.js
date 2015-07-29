'use strict';

var React = require('react-native');


var {

} = React;

var CONSTANT = require('../Styles/CONSTANT');
var Styles = require('../Styles/index');

var NewsListView = require('../../Views/NewsListView');
var NewsCell = require('../../Views/NewsCell');

var MatchNews = React.createClass({
  render: function() {
    return (
      <NewsListView 
        onRowTouch={'1'}
        rowCell={NewsCell}/>
    );
  }
});


module.exports = MatchNews;