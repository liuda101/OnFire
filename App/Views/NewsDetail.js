'use strict';

var React = require('react-native');

var {

  View,
  Text,
  WebView

} = React;

var WEBVIEW_REF = 'my_webview';

var WebView = require('./WebView');

var NewsDetail = React.createClass({
  componentDidMount: function() {
  },
  onLoadingStart: function(e) {
    console.log(e);
  },
  onMessageFromWeb: function(e) {
    var message = decodeURIComponent(e.nativeEvent.message);
    console.log(JSON.parse(message));
  },
  render: function() {
    return (
      <WebView 
        url={'http://localhost:8000/testWebView.html'}
        style={{flex: 1}}
        onMessageFromWeb={this.onMessageFromWeb}/>
    );
  } 
});

module.exports = NewsDetail;