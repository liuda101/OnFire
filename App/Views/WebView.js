var React = require('react-native');

var {
  requireNativeComponent,
  PropTypes
} = React;

class WebView extends React.Component {

  render() {
    return <ONFEWebView {...this.props} />
  }
}

WebView.propTypes = {
  url: PropTypes.string,
  contentInset: PropTypes.string,
  automaticallyAdjustContentInsets: PropTypes.bool,
  onMessageFromWeb: React.PropTypes.func
};


var ONFEWebView = requireNativeComponent('ONFEWebView', WebView);

module.exports = WebView;