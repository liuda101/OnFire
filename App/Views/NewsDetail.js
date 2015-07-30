'use strict';

var React = require('react-native');

var {

  View,
  Text,
  WebView,

} = React;

var WEBVIEW_REF = 'my_webview';

var NewsDetail = React.createClass({
  componentDidMount: function() {

  },
  onLoadingStart: function(e) {
    console.log(e);
  },
  render: function() {
    return (
      <WebView
        ref={'webView'}
        url={'https://www.baidu.com'}
        style={{flex: 1}}
        onLoadingStart={this.onLoadingStart}/>
    );
  } 
});

module.exports = NewsDetail;