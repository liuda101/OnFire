var React = require('react-native');

var {
  requireNativeComponent,
  PropTypes,
  ActivityIndicatorIOS,
  View
} = React;



var WebView = React.createClass({
  getInitialState: function() {
    return {
      showLoading: true
    };
  },

  renderLoading: function() {
    return (
      <View style={{position: 'absolute', top: 0, right: 0, bottom: 0, left: 0, alignItems: 'center', justifyContent: 'center'}}>
        <ActivityIndicatorIOS />
      </View>
    );
  },

  hideLoading: function() {
    this.setState({
      showLoading: false
    });
  },

  render: function() {
    var loading = this.state.showLoading ? this.renderLoading() : null;
    return (
      <View style={{flex: 1}}>
        <ONFEWebView {... this.props} />
        {loading}
      </View>
    );
  }
});

WebView.propTypes = {
  url: PropTypes.string,
  contentInset: PropTypes.string,
  automaticallyAdjustContentInsets: PropTypes.bool,
  onMessageFromWeb: PropTypes.func
};


var ONFEWebView = requireNativeComponent('ONFEWebView', WebView);

module.exports = WebView;