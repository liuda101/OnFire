'use strict';


var React = require('react-native');


var {
  StyleSheet,
  View,
  Image,
  Text,
  ScrollView,
  TouchableHighlight,
  TouchableWithoutFeedback
} = React;

var Styles = require('../Styles/index');
var CONSTANT = require('../Styles/CONSTANT');

var MatchNews = require('./MatchNews');
var CreateCard = require('../Playcard/CreateCard');
var MatchCity = require('./MatchCity');


var MENU_HEIGHT = 50;
var CITY_WIDTH = 100;
var CITY_HEIHGT = 60;


var BasketballStarMatch = React.createClass({
  _goToMatchNews: function() {
    this.props.navigator.push({
      title: '赛事新闻',
      component: MatchNews,
      backButtonTitle: '返回'
    });
  },

  _goToCreateCard: function() {
    this.props.navigator.push({
      title: '制作球星卡',
      component: CreateCard,
      backButtonTitle: '返回'
    });
  },

  _goToMatchCity: function() {
    this.props.navigator.push({
      title: '北京站 - 报名',
      component: MatchCity,
      backButtonTitle: '返回'
    });
  },

  render: function() {
    return (
      <ScrollView style={Styles.fullContainer}>
        
        <View style={thisStyle.matchCard} />

        <View style={thisStyle.menuContainer}>
          <TouchableHighlight style={thisStyle.menuButton} underlayColor={CONSTANT.DARK_RED} onPress={this._goToMatchNews}>
            <View style={thisStyle.menuButtonC}>
              <Image source={require('image!matchMenuIcon1')} />
              <Text style={thisStyle.menuText}>{'赛事新闻'}</Text>
            </View>
          </TouchableHighlight>

          <View style={thisStyle.menuSpliter} />

          <TouchableHighlight style={thisStyle.menuButton} underlayColor={CONSTANT.DARK_RED} onPress={this._goToCreateCard}>
            <View style={thisStyle.menuButtonC}>
              <Image source={require('image!matchMenuIcon2')} />
              <Text style={thisStyle.menuText}>{'制作球星卡'}</Text>
            </View>
          </TouchableHighlight>
        </View>

        <View style={thisStyle.cityHeader}>
          <Image source={require('image!cityIconLine1')} />
          <View style={thisStyle.cityHeaderC}>
            <Image source={require('image!cityIcon')} />
            <Text style={thisStyle.cityHeaderText}>{'报名城市'}</Text>
          </View>
          <Image source={require('image!cityIconLine2')} />
        </View>


        <View style={thisStyle.allCity}>
          <View style={thisStyle.cityRow}>

            <TouchableWithoutFeedback style={thisStyle.city}>
              <View style={thisStyle.city}>
                <View style={[thisStyle.cityBorder, thisStyle.cityBorder1]}>
                </View>
                <View style={thisStyle.cityTitle}>
                  <Image source={require('image!status1')} style={thisStyle.cityTitleImage}/>
                  <Text style={[thisStyle.cityTitleText, thisStyle.textColor1]}>{'比赛结束'}</Text>
                </View>
                <View style={thisStyle.cityName}>
                  <Text style={[thisStyle.cityNameText, thisStyle.textColor1]}>{'北京'}</Text>
                </View>
                <View style={thisStyle.cityStatus}>
                  <Text style={[thisStyle.cityStatusText, thisStyle.textColor1]}>{'查看新闻'}</Text>
                </View>
              </View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback style={thisStyle.city}>
              <View style={thisStyle.city}>
                <View style={[thisStyle.cityBorder, thisStyle.cityBorder2]}>
                </View>
                <View style={thisStyle.cityTitle}>
                  <Image source={require('image!status2')} style={thisStyle.cityTitleImage}/>
                  <Text style={[thisStyle.cityTitleText, thisStyle.textColor2]}>{'比赛结束'}</Text>
                </View>
                <View style={thisStyle.cityName}>
                  <Text style={[thisStyle.cityNameText, thisStyle.textColor2]}>{'北京'}</Text>
                </View>
                <View style={thisStyle.cityStatus}>
                  <Text style={[thisStyle.cityStatusText, thisStyle.textColor2]}>{'9月10日-9月12日'}</Text>
                </View>
              </View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback style={thisStyle.city} onPress={this._goToMatchCity}>
              <View style={thisStyle.city}>
                <View style={[thisStyle.cityBorder, thisStyle.cityBorder3]}>
                </View>
                <View style={thisStyle.cityTitle}>
                  <Image source={require('image!status3')} style={thisStyle.cityTitleImage}/>
                  <Text style={[thisStyle.cityTitleText, thisStyle.textColor3]}>{'比赛结束'}</Text>
                </View>
                <View style={thisStyle.cityName}>
                  <Text style={[thisStyle.cityNameText, thisStyle.textColor3]}>{'北京'}</Text>
                </View>
                <View style={thisStyle.cityStatus}>
                  <Text style={[thisStyle.cityStatusText, thisStyle.textColor3]}>{'9月10日-9月12日'}</Text>
                </View>
              </View>
            </TouchableWithoutFeedback>

          </View>

          <View style={thisStyle.cityRow}>

            <TouchableWithoutFeedback style={thisStyle.city}>
              <View style={thisStyle.city}>
                <View style={[thisStyle.cityBorder, thisStyle.cityBorder3]}>
                </View>
                <View style={thisStyle.cityTitle}>
                  <Image source={require('image!status3')} style={thisStyle.cityTitleImage}/>
                  <Text style={[thisStyle.cityTitleText, thisStyle.textColor3]}>{'比赛结束'}</Text>
                </View>
                <View style={thisStyle.cityName}>
                  <Text style={[thisStyle.cityNameText, thisStyle.textColor3]}>{'北京'}</Text>
                </View>
                <View style={thisStyle.cityStatus}>
                  <Text style={[thisStyle.cityStatusText, thisStyle.textColor3]}>{'9月10日-9月12日'}</Text>
                </View>
              </View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback style={thisStyle.city}>
              <View style={thisStyle.city}>
                <View style={[thisStyle.cityBorder, thisStyle.cityBorder3]}>
                </View>
                <View style={thisStyle.cityTitle}>
                  <Image source={require('image!status3')} style={thisStyle.cityTitleImage}/>
                  <Text style={[thisStyle.cityTitleText, thisStyle.textColor3]}>{'比赛结束'}</Text>
                </View>
                <View style={thisStyle.cityName}>
                  <Text style={[thisStyle.cityNameText, thisStyle.textColor3]}>{'北京'}</Text>
                </View>
                <View style={thisStyle.cityStatus}>
                  <Text style={[thisStyle.cityStatusText, thisStyle.textColor3]}>{'9月10日-9月12日'}</Text>
                </View>
              </View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback style={thisStyle.city}>
              <View style={thisStyle.city}>
                <View style={[thisStyle.cityBorder, thisStyle.cityBorder3]}>
                </View>
                <View style={thisStyle.cityTitle}>
                  <Image source={require('image!status3')} style={thisStyle.cityTitleImage}/>
                  <Text style={[thisStyle.cityTitleText, thisStyle.textColor3]}>{'比赛结束'}</Text>
                </View>
                <View style={thisStyle.cityName}>
                  <Text style={[thisStyle.cityNameText, thisStyle.textColor3]}>{'北京'}</Text>
                </View>
                <View style={thisStyle.cityStatus}>
                  <Text style={[thisStyle.cityStatusText, thisStyle.textColor3]}>{'9月10日-9月12日'}</Text>
                </View>
              </View>
            </TouchableWithoutFeedback>

          </View>

          <View style={[thisStyle.cityRow, thisStyle.cityRow2]}>

            <TouchableWithoutFeedback style={thisStyle.city}>
              <View style={thisStyle.city}>
                <View style={[thisStyle.cityBorder, thisStyle.cityBorder3]}>
                </View>
                <View style={thisStyle.cityTitle}>
                  <Image source={require('image!status3')} style={thisStyle.cityTitleImage}/>
                  <Text style={[thisStyle.cityTitleText, thisStyle.textColor3]}>{'比赛结束'}</Text>
                </View>
                <View style={thisStyle.cityName}>
                  <Text style={[thisStyle.cityNameText, thisStyle.textColor3]}>{'北京'}</Text>
                </View>
                <View style={thisStyle.cityStatus}>
                  <Text style={[thisStyle.cityStatusText, thisStyle.textColor3]}>{'9月10日-9月12日'}</Text>
                </View>
              </View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback style={thisStyle.city}>
              <View style={thisStyle.city}>
                <View style={[thisStyle.cityBorder, thisStyle.cityBorder3]}>
                </View>
                <View style={thisStyle.cityTitle}>
                  <Image source={require('image!status3')} style={thisStyle.cityTitleImage}/>
                  <Text style={[thisStyle.cityTitleText, thisStyle.textColor3]}>{'比赛结束'}</Text>
                </View>
                <View style={thisStyle.cityName}>
                  <Text style={[thisStyle.cityNameText, thisStyle.textColor3]}>{'北京'}</Text>
                </View>
                <View style={thisStyle.cityStatus}>
                  <Text style={[thisStyle.cityStatusText, thisStyle.textColor3]}>{'9月10日-9月12日'}</Text>
                </View>
              </View>
            </TouchableWithoutFeedback>

          </View>

          <View style={[thisStyle.cityRow, thisStyle.cityRow3]}>

            <TouchableWithoutFeedback style={thisStyle.city}>
              <View style={thisStyle.city}>
                <View style={[thisStyle.cityBorder, thisStyle.cityBorder2]}>
                </View>
                <View style={thisStyle.cityTitle}>
                  <Image source={require('image!finalStatus')} style={thisStyle.cityTitleImage}/>
                  <Text style={[thisStyle.cityTitleText, thisStyle.textColor2]}>{'比赛结束'}</Text>
                </View>
                <View style={thisStyle.cityName}>
                  <Text style={[thisStyle.cityNameText, thisStyle.textColor2]}>{'北京'}</Text>
                </View>
                <View style={thisStyle.cityStatus}>
                  <Text style={[thisStyle.cityStatusText, thisStyle.textColor2]}>{'9月10日-9月12日'}</Text>
                </View>
              </View>
            </TouchableWithoutFeedback>

          </View>
        </View>

      </ScrollView>
    );
  }
});

BasketballStarMatch.TITLE = '中国球王争霸赛';

var thisStyle = StyleSheet.create({
  matchCard: {
    height: 200,
    backgroundColor: '#ccc'
  },

  menuContainer: {
    flexDirection: 'row'
  },

  menuButton: {
    flex: 1,
    backgroundColor: CONSTANT.RED
  },

  menuButtonC: {
    flexDirection: 'row',
    height: MENU_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center'
  },

  menuSpliter: {
    width: 0.5,
    height: MENU_HEIGHT
  },

  menuText: {
    marginLeft: 10,
    fontSize: 14,
    color: CONSTANT.WHITE
  },

  cityHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    marginBottom: 20
  },

  cityHeaderC: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10  
  },

  cityHeaderText: {
    color: CONSTANT.RED,
    fontSize: 16
  },

  cityRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 320,
    marginHorizontal: (CONSTANT.DEVICE_WIDTH - 320) / 2,
    marginBottom: 20
  },

  cityRow2: {
    width: 210,
    marginHorizontal: (CONSTANT.DEVICE_WIDTH - 210) / 2,
  },

  cityRow3: {
    width: 100,
    marginHorizontal: (CONSTANT.DEVICE_WIDTH - 100) / 2,
  },

  city: {
    width: CITY_WIDTH,
    height: CITY_HEIHGT + 17
  },

  cityBorder: {
    width: CITY_WIDTH,
    height: CITY_HEIHGT,
    position: 'absolute',
    top: 5,
    left: 0,
    borderWidth: 0.5,
    
  },
  cityBorder1: {
    borderColor: CONSTANT.BORDER
  },
  cityBorder2: {
    borderColor: CONSTANT.RED
  },
  cityBorder3: {
    borderColor: CONSTANT.BLUE
  },
  cityName: {
    width: CITY_WIDTH,
    height: CITY_HEIHGT,
    position: 'absolute',
    top: 8,
    left: 0,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center'
  },

  cityNameText: {
    fontSize: 16
  },

  textColor1: {
    color: CONSTANT.GRAY
  },

  textColor2: {
    color: CONSTANT.RED
  },

  textColor3: {
    color: CONSTANT.BLUE
  },

  cityTitle: {
    position: 'absolute',
    top: 0,
    left: 15,
    right: 15,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: CONSTANT.BG,
  },
  cityTitleText: {
    fontSize: 11,
    marginLeft: 4
  },
  cityStatus: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'transparent',
    alignItems: 'center'
  },
  cityStatusText: {
    fontSize: 10,
    color: CONSTANT.GRAY
  }
});

module.exports = BasketballStarMatch;
