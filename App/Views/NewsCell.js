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

var NewsCell = React.createClass({

  render: function() {
    return (
      <TouchableHighlight underlayColor={CONSTANT.TAP}
        {...this.props}>
        <View style={styles.cellContainer}>
          <Image style={styles.cellImage} source={{uri: this.props.data.image}} />

          <View style={styles.cellText}>
            <Text style={styles.cellTitle}>{this.props.data.title}</Text>
            <Text style={styles.cellSubInfo}>{this.props.data.summary}</Text>
          </View>

          <Text style={styles.cellDate}>{'评论(' + this.props.data.commentCount + ')'}</Text>
          
        </View>
      </TouchableHighlight>
    );
  }

});


var styles = StyleSheet.create({
  cellContainer: {
    flexDirection: 'row',
    padding: 15,
    borderBottomWidth: 0.5,
    borderColor: CONSTANT.BORDER,
    backgroundColor: '#fff'
  },
  cellImage: {
    width: 80,
    height: 60,
    marginRight: 10,
    backgroundColor: '#fee'
  },

  cellText: {
    flex: 1
  },

  cellTitle: {
    color: CONSTANT.BLACK,
    fontSize: 15
  },

  cellSubInfo: {
    color: CONSTANT.GRAY,
    fontSize: 12,
    marginTop: 5
  },

  cellDate: {
    position: 'absolute',
    right: 15,
    bottom: 15,
    color: CONSTANT.GRAY,
    fontSize: 10,
  }
});

module.exports = NewsCell;