import React, { Component } from 'react';
import { View, Text,TouchableOpacity,StatusBar,Image } from 'react-native';
import {Header, Left, Right, Body, Title} from 'native-base';
import styles from '../styles';

class CustomHeaderComponent extends Component {
  constructor(props) {
    super(props);
    navHelper = this.props.props.navigation;
    this.state = {
    };
    
  }

  render() {
    return (
      <View style={{flex: 1}}>
      <Header style={{backgroundColor: '#238B4F'}}>
        <Left>
          <TouchableOpacity
            onPress={() => navHelper.openDrawer()} style={{marginLeft:10}}> 
            <Image
              source={require('../images/menu.png')}
              style={[styles.icon]}
            />
          </TouchableOpacity>
        </Left>
        <Body style={{alignItems: 'center', justifyContent: 'center'}}>
          <Title style={{alignItems: 'center', justifyContent: 'center'}}>
            {this.props.screenHeaderTitle}
          
          </Title>
        </Body>
        <Right></Right>
      </Header>
      <StatusBar backgroundColor="#238B4F" barStyles="light-content" />
    </View>)
    
  }
}

export default CustomHeaderComponent;


