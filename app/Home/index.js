'use strict';

// Module dependencies
var React = require('react-native');
var Icon = require("react-native-vector-icons/FontAwesome");

var {
  TabBarIOS
} = React;

var styles = require('./style');

module.exports = React.createClass({

  renderContent: function () {

  },

  render: function () {
    return (
      <TabBarIOS
        tintColor={'#5ac8fb'}>
        <Icon.TabBarItem
          title="Home"
          iconName="home"
          selectedIconName="home">
        </Icon.TabBarItem>
        <Icon.TabBarItem
          title="Post"
          iconName="plus"
          selectedIconName="plus">
        </Icon.TabBarItem>
        <Icon.TabBarItem
          title="Me"
          iconName="user"
          selectedIconName="user">
        </Icon.TabBarItem>
      </TabBarIOS>
    );
  }
});
