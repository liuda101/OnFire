'use strict';

var React = require('react-native');

var {

  StyleSheet,
  TabBarIOS,
  View,
  Text

} = React;


var CONSTANT = require('../Styles/CONSTANT');

var Matches = require('../Matches/index');
var News = require('../News/index');
var Equipments = require('../Equipments/index');
var Account = require('../Account/index');

var OnFire = React.createClass({
  getInitialState: function() {
    return {
      selectedTab: 'matches'
    };
  },


  render: function() {
    return (
      <TabBarIOS
        tintColor={CONSTANT.BLUE}
        barTiniColor={CONSTANT.BLUE}>
        
        <TabBarIOS.Item
          selected={this.state.selectedTab === 'matches'}
          onPress={() => this.setState({selectedTab: 'matches'})}
          title='赛事'
          icon={require('image!matchesTabIcon')}>

          <Matches ref='matches' />


        </TabBarIOS.Item>

        <TabBarIOS.Item
          selected={this.state.selectedTab === 'news'}
          onPress={() => this.setState({selectedTab: 'news'})}
          title='新闻室'
          icon={require('image!newsTabIcon')}>

          <News ref='news' />


        </TabBarIOS.Item>

        <TabBarIOS.Item
          selected={this.state.selectedTab === 'equipments'}
          onPress={() => this.setState({selectedTab: 'equipments'})}
          title='装备评测'
          icon={require('image!equipmentsTabIcon')}>

          <Equipments ref='equipments' />


        </TabBarIOS.Item>

        <TabBarIOS.Item
          selected={this.state.selectedTab === 'account'}
          onPress={() => this.setState({selectedTab: 'account'})}
          title='我'
          icon={require('image!equipmentsTabIcon')}>

          <Account ref='account' />


        </TabBarIOS.Item>

      </TabBarIOS>
    );
  }

});



module.exports = OnFire;