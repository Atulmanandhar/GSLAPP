import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Button,
  FlatList,
  
} from 'react-native';
import styles from '../styles';
import CustomHeaderComponent from './CustomHeaderComponent';
import firebase from 'react-native-firebase';
class MyTrips extends Component {
  constructor(props) {
    super(props);
    this.state = {
      response: [],
    };
  }
  static navigationOptions = {
    drawerLabel: 'My Trips',
    drawerIcon: ({tintColor}) => (
      <Image
        source={require('../images/myTrip.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };
  async getTripData() {
    const user = firebase.auth().currentUser;
    const userID = user.uid;
    const snapshot = await firebase
      .firestore()
      .collection('TripDetails')
      .where('userID', '==', userID)
      .get();

    this.setState({
      response: snapshot.docs.map(doc => doc.data()),
    });
    return console.log(snapshot.docs.map(doc => doc.data()));
  }

  componentDidMount() {
    this.getTripData();
  }

  handlepressed = () => {
    console.log(this.state.response);

    this.state.response.map(items => {
      if(items.TotalDistance=="2" && items.TotalDistance=="25"){
        console.log("sad");
        
      }
      console.log(items.DeliveryStatus);
    });
  };

  render() {
    return (
      <ScrollView stickyHeaderIndices={[0]} style={{flex: 1}}>
        <CustomHeaderComponent
          props={this.props}
          screenHeaderTitle="My Trips"
        />
        <View>
          <Text>Requested Trips</Text>
          <Button title="cick me" onPress={() => this.handlepressed()} />
        </View>

        <FlatList
      showsVerticalScrollIndicator={false}
      keyExtractor={response => response.scheduledDate}
      data={this.state.response}
      renderItem={({item}) => {                        //element==={item:{name:'Friend#1},index:0}
        return (
          <Text>
            {item.userID}
          </Text>
        );
      }}
    />
      </ScrollView>
    );
  }
}

export default MyTrips;
