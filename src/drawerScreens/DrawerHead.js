import React, { Component } from 'react';
import { View, Text ,TouchableOpacity,Image,StatusBar} from 'react-native';
import styles from '../styles';
import {Header, Left, Right, Body} from 'native-base';

class DrawerHead extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
 

  render() {
    return (
      <View>
        <Header style={{backgroundColor: '#2D9F5A'}}>
          <Left>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('DrawerOpen')}>
              <Image
                source={require('../images/menu.png')}
                style={[styles.icon]}
              />
            </TouchableOpacity>
          </Left>
          <Body />
          <Right />
        </Header>
        <StatusBar backgroundColor="#39803E" barStyles="light-content" />
        </View>
    );
  }
}

export default DrawerHead;
