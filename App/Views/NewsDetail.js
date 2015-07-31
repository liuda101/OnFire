'use strict';

var React = require('react-native');

var {

  View,
  Text,
  WebView

} = React;

var WEBVIEW_REF = 'my_webview';

var WebView = require('./WebView');
var CONSTANT = require('../Modules/Styles/CONSTANT');

var NewsDetail = React.createClass({
  componentDidMount: function() {
  },
  onLoadingStart: function(e) {
  },
  onMessageFromWeb: function(e) {
    var message = decodeURIComponent(e.nativeEvent.message);
    var messageObj = JSON.parse(message);

    if (this.refs[WEBVIEW_REF][messageObj.method]) {
      this.refs[WEBVIEW_REF][messageObj.method](messageObj.parameter);
    }

    if (messageObj.method === 'goToComment') {
      console.log('goToComment');
    }
  },
  render: function() {
    return (
      <WebView
        ref={WEBVIEW_REF} 
        url={'http://localhost:8080/newsDetail.html?from=native'}
        style={{flex: 1, backgroundColor: CONSTANT.BG}}
        onMessageFromWeb={this.onMessageFromWeb}/>
    );
  } 
});

module.exports = NewsDetail;