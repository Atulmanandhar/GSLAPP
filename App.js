import React, { Component } from 'react';
import { View, Text } from 'react-native';
import SignUp from './src/SignUp';
import SplashScreen from './SplashScreen';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading:true
    };
  }
  performTimeConsumingTask = async() => {
    return new Promise((resolve) =>
      setTimeout(
        () => { resolve('result') },
        10
      )
    );
  }
  async componentDidMount() {
    // Preload data from an external API
    // Preload data using AsyncStorage
    const data = await this.performTimeConsumingTask();
  
    if (data !== null) {
      this.setState({ isLoading: false });
    }
  }
    

  render() {
    if(this.state.isLoading){
      return <SplashScreen/>
    }
    return (
      <SignUp/>
    );
  }
}

export default App;