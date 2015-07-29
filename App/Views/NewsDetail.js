'use strict';

var React = require('react-native');

var {

  View,
  Text,
  WebView

} = React;


var NewsDetail = React.createClass({
  render: function() {
    return (
      <WebView url={'https://hotel.huoli.com/'}/>
    );
  } 
});

module.exports = NewsDetail;