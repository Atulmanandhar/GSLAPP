import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
} from 'react-native';
import styles from '../styles';

const Logo = () => {
  return (

    <View style ={styles.container}>
    <Image
        style={{width: 100, height: 100}}
        source={require('../images/favicon.png')}
      />
    </View>
  );
};

export default Logo;
