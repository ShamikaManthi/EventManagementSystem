import React from 'react';
import { Animated, Text, View ,Image} from 'react-native';

class FadeInView extends React.Component {
    constructor () {
        super()
        this.spinValue = new Animated.Value(0)
      }
//   state = {
//     fadeAnim: new Animated.Value(0),  // Initial value for opacity: 0
//   }

  componentDidMount() {
    Animated.timing(                  // Animate over time
      this.state.fadeAnim,            // The animated value to drive
      {
        toValue: 1,                   // Animate to opacity: 1 (opaque)
        duration: 15000,              // Make it take a while
      }
    ).start();                        // Starts the animation
  }

  render() {
    let { fadeAnim } = this.state;

    return (
      <Animated.View                 // Special animatable View
        style={{
          ...this.props.style,
          opacity: fadeAnim,         // Bind opacity to animated value
        }}
      >
        {this.props.children}
      </Animated.View>
    );
  }
}

// You can then use your `FadeInView` in place of a `View` in your components:
export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <FadeInView style={{width: null, flex:1, alignSelf:'stretch'}}>
          <Image source={require('../Login/headerbg.jpg')}/>
        </FadeInView>
      </View>
    )
  }
}
