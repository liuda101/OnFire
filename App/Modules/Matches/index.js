'use strict';

var React = require('react-native');


var {
  
  NavigatorIOS

} = React;

var CONSTANT = require('../Styles/CONSTANT');
var Styles = require('../Styles/index');

var BasketballStarMatch = require('./basketballStarMatch');

var Matches = React.createClass({
  render: function() {
    return (
      <NavigatorIOS
        barTintColor={CONSTANT.NAV_BG}
        titleTextColor={CONSTANT.NAV_TITLE}
        tintColor={CONSTANT.NAV_TITLE}
        shadowHidden={true}
        style={Styles.fullContainer}
        itemWrapperStyle={Styles.grayBg}
        translucent={true}
        initialRoute={{
          title: BasketballStarMatch.TITLE,
          component: BasketballStarMatch,
          backButtonTitle: '返回'
        }}/>
    );
  }
});

module.exports = Matches;