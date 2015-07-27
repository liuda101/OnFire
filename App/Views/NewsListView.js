'use strict';

var React = require('react-native');

var {

  StyleSheet,
  ListView,
  View,
  Text

} = React;




var NewsListView = React.createClass({

  getInitialState: function() {
    return {
      dataSource: new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
      })
    };
  },

  getDefaultProps: function() {

  },

  componentDidMount: function() {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows([1,2,3,4,5,6,7,8,9,10])
    });
  },

  _renderRow: function(data, section, row) {
    return (
      <View><Text>{'ss'}</Text></View>
    );
  },

  render: function() {
    return (
      <ListView style={styles.container}
        dataSource={this.state.dataSource}
        renderRow={this._renderRow}/>
    );
  }
});


var styles = StyleSheet.create({
  container: {
    flex: 1
  }
});


module.exports = NewsListView;