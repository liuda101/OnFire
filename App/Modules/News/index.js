'use strict';

var React = require('react-native');


var {

  View,
  Text

} = React;

var News = React.createClass({
  render: function() {
    return (
      <View>
        <Text>{'News'}</Text>
      </View>
    );
  }
});

module.exports = News;