'use strict';

var React = require('react-native');
var GoalList = require('./GoalList');

var {
  StyleSheet,
  View,
  Text,
  Component,
  NavigatorIOS
} = React;

var styles = StyleSheet.create({
  
  description:{
    fontSize: 20,
    backgroundColor: 'white'
  },
  container: {
    flex: 1,
  }

});

class Goals extends Component {
  render(){
    return (
      <NavigatorIOS
          style={styles.container}
          initialRoute={{
            title: 'Goals',
            component: GoalList
          }}/> 
    )
  }
}

module.exports = Goals;