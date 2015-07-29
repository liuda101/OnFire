'use strict';

var React = require('react-native');


var {

} = React;

var CONSTANT = require('../Styles/CONSTANT');
var Styles = require('../Styles/index');

var NewsListView = require('../../Views/NewsListView');
var TeamCell = require('../../Views/TeamCell');

var TeamList = React.createClass({
  loadTeam: function() {
    
  },
  render: function() {
    return (
      <NewsListView 
        onRowTouch={'1'}
        rowCell={TeamCell}
        {...this.props}/>
    );
  }
});

module.exports = TeamList;