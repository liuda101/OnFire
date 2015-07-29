'use strict';

var React = require('react-native');

var {

  StyleSheet,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Image,
  View,
  Text,
  ScrollView

} = React;

var CONSTANT = require('../Styles/CONSTANT');
var TeamList = require('./TeamList');
var CreateTeam = require('./CreateTeam');

var MatchCity = React.createClass({
  getInitialState: function() {
    return {
      segmentIndex: 0
    };
  },
  _onSegmentChange: function(index) {
    this.setState({
      segmentIndex: index
    });

    this.refs.teamList.loadTeam(index);
  },

  _goToCreateTeam: function() {
    if (this._checkLogin()) {
      this.props.navigator.push({
        title: CreateTeam.TITLE,
        component: CreateTeam,
        backButtonTitle: '返回'
      });
    }
  },

  _checkLogin: function() {
    return true;
  },
  render: function() {
    return (
      <View style={styles.container}>

        <View style={styles.segmentContainer}>
          <TouchableHighlight onPress={this._onSegmentChange.bind(this, 0)} style={[styles.segment, this.state.segmentIndex == 0 ? styles.activeSegment : styles.unactiveSegment]} underlayColor={CONSTANT.RED}>
            <Text style={styles.segmentButton}>{'加入球队'}</Text>
          </TouchableHighlight>
          <TouchableHighlight onPress={this._onSegmentChange.bind(this, 1)} style={[styles.segment, this.state.segmentIndex == 1 ? styles.activeSegment : styles.unactiveSegment]} underlayColor={CONSTANT.RED}>
            <Text style={styles.segmentButton}>{'我的球队'}</Text>
          </TouchableHighlight>
        </View>

        <TeamList ref={'teamList'} style={styles.teamContainer} automaticallyAdjustContentInsets={false}>
        </TeamList>

        <View style={styles.bottomContainer}>
          <TouchableHighlight onPress={this._goToCreateTeam} style={styles.createButton} underlayColor={CONSTANT.DARK_BLUE}>
            <Text style={styles.createButtonText}>{'创建球队'}</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    marginTop: 64,
    marginBottom: 50,
    flex: 1
  },

  segmentContainer: {
    height: 40,
    flexDirection: 'row',
    backgroundColor: '#cdcdcd'
  },

  segment: {
    backgroundColor: 'blue',
    flex: 1,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center'
  },

  activeSegment: {
    backgroundColor: CONSTANT.RED
  },

  unactiveSegment: {
    backgroundColor: CONSTANT.GRAY
  },

  segmentButton: {
    fontSize: 14,
    color: '#fff'
  },

  bottomContainer: {
    height: 60,
    borderTopWidth: 0.5,
    borderTopColor: CONSTANT.BORDER,
    backgroundColor: '#fff'
  },

  createButton: {
    flex: 1,
    marginHorizontal: 30,
    marginTop: 5,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: CONSTANT.BLUE,
    borderRadius: 3
  },

  createButtonText: {
    fontSize: 15,
    color: '#fff'
  },

  teamContainer: {
    flex: 1
  }
});

module.exports = MatchCity;