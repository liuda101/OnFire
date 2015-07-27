'use strict';

var React = require('react-native');


var {

  View,
  Text

} = React;

var Account = React.createClass({
  render: function() {
    return (
      <View>
        <Text>{'Account'}</Text>
      </View>
    );
  }
});

module.exports = Account;