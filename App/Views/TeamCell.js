'use strict';

var React = require('react-native');

var {

  StyleSheet,
  ListView,
  View,
  Text,
  TouchableHighlight,
  Image

} = React;


var CONSTANT = require('../Modules/Styles/CONSTANT');

var EquipmentCell = React.createClass({

  render: function() {
    return (
      <TouchableHighlight underlayColor={CONSTANT.TAP}>
        <View style={styles.cellContainer}>
          <Image style={styles.cellImage} />
          
          <View style={styles.cellTitleBg}>
            <Text style={styles.cellTitle}>{this.props.data.title}</Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }

});


var styles = StyleSheet.create({
  cellContainer: {
  },
  cellImage: {
    width: CONSTANT.DEVICE_WIDTH,
    height: CONSTANT.DEVICE_WIDTH / 2,
    backgroundColor: CONSTANT.BORDER_COLOR
  },
  cellTitleBg: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.4)',
    paddingHorizontal: 10,
    height: 30,
    justifyContent: 'center'
  },
  cellTitle: {
    color: CONSTANT.WHITE,
    fontSize: 14
  }
});

module.exports = EquipmentCell;