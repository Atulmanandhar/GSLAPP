import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Keyboard,
  BackHandler,
  Animated,
  Dimensions,
  TextInput,
  ScrollView,
} from 'react-native';
import Map from '../Map';
import styles from '../styles';
import CustomHeaderComponent from './CustomHeaderComponent';
import {RNToasty} from 'react-native-toasty';
let {width, height} = Dimensions.get('window');
export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.springValue = new Animated.Value(100);
    this.state = {
      loc: '',
      loc1: '',
    };
  }

  /// state value updated from child component map;
  handler(arg) {
    this.setState({
      loc: arg,
    });
    return;
  }
  /// state value updated from child component map;
  handler1(arg) {
    this.setState({
      loc1: arg,
    });
    return;
  }

  static navigationOptions = {
    drawerLabel: 'Home',
    drawerIcon: ({tintColor}) => (
      <Image
        source={require('../images/home.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };

  render() {
    return (
      <ScrollView stickyHeaderIndices={[0]} style={{flex: 1}}>
        <CustomHeaderComponent
          props={this.props}
          screenHeaderTitle="Home Screen"
        />
        <View style={{flex: 1}}>
          <TextInput
            style={styles.inputBox}
            keyboardType="phone-pad"
            placeholder="Enter distance(km)"
            onChangeText={value => this.setState({testParameter: value})}
          />
        </View>
        <View style={{flex: 1}}>
          <Map handler={(this.handler.bind(this), this.handler1.bind(this))} />
        </View>

        <View style={styles.containerEstimate}>
          <TouchableOpacity
            style={styles.buttonestimate}
            onPress={() =>
              this.props.navigation.navigate('GetEstimate', {
                distanceValue: this.state.testParameter,
              })
            }>
            <Text style={styles.buttonText}>Get Estimate</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}
