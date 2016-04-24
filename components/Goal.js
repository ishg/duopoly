'use strict';

var React = require('react-native');

var styles = require('../styles.js');

var {
  View,
  TouchableHighlight,
  Text
  Component
} = React;

class Goal extends Component {
  render(){
    return(
      <TouchableHighlight onPress={this.props.onPress}>
        <View style="{styles.goal}">
          
        </View>
      </TouchableHighlight>
    )
  }

}