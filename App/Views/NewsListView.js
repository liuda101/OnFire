'use strict';

var React = require('react-native');

var {

  StyleSheet,
  ListView,
  View,
  Text

} = React;


var data = require('../mock/newsList');

var NewsListView = React.createClass({

  getInitialState: function() {
    return {
      dataSource: new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
      })
    };
  },

  componentDidMount: function() {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(data)
    });
  },

  _renderRow: function(data, section, row) {
    return (
      <this.props.rowCell
        data={data}/>
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