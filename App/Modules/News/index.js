'use strict';

var React = require('react-native');


var {

  NavigatorIOS

} = React;

var CONSTANT = require('../Styles/CONSTANT');
var Styles = require('../Styles/index');

var NewsList = require('./NewsList');

var News = React.createClass({
  render: function() {
    return (
      <NavigatorIOS
        barTintColor={CONSTANT.NAV_BG}
        titleTextColor={CONSTANT.NAV_TITLE}
        tintColor={CONSTANT.NAV_TITLE}
        shadowHidden={true}
        style={Styles.fullContainer}
        itemWrapperStyle={Styles.grayBg}
        initialRoute={{
          title: NewsList.TITLE,
          component: NewsList,
          backButtonTitle: '返回'
        }}/>
    );
  }
});

module.exports = News;