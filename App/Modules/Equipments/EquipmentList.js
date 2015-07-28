'use strict';

var React = require('react-native');


var {

  View,
  Text

} = React;

var CONSTANT = require('../Styles/CONSTANT');
var Styles = require('../Styles/index');

var NewsListView = require('../../Views/NewsListView');
var EquipmentCell = require('../../Views/EquipmentCell');

var EquipmentList = React.createClass({
  render: function() {
    return (
      <NewsListView 
        onRowTouch={'1'}
        rowCell={EquipmentCell}/>
    );
  }
});

EquipmentList.TITLE = '装备评测';

module.exports = EquipmentList;