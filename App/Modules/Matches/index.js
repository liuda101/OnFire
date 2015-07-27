'use strict';

var React = require('react-native');


var {

  View,
  Text

} = React;

var Matches = React.createClass({
  render: function() {
    return (
      <View>
        <Text>{'Matches'}</Text>
      </View>
    );
  }
});

module.exports = Matches;