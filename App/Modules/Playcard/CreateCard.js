'use strict';

var React = require('react-native');

var {

  StyleSheet,
  TouchableHighlight,
  Image,
  View,
  Text,
  ScrollView

} = React;

var CreateCard = React.createClass({
  render: function() {
    return (
      <ScrollView style={styles.container}>
        <Text>{'Hi'}</Text>
      </ScrollView>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

module.exports = CreateCard;