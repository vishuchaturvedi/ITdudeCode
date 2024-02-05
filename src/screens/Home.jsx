import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import images from '../assets/images';

const Home = () => {
  const imageAnimatedSize = useSharedValue(0);
  const ydirectionValue = useSharedValue(0);

  const imageAnimation = useAnimatedStyle(() => {
    return {
      height: imageAnimatedSize.value,
      width: imageAnimatedSize.value,
      transform: [{translateY: ydirectionValue.value}],
    };
  });

  const onPress = () => {
    if (imageAnimatedSize.value == 0) {
      ydirectionValue.value = withTiming(-300, {duration: 1000});
      imageAnimatedSize.value = withTiming(300, {duration: 1000});
    } else {
      ydirectionValue.value = withTiming(0, {duration: 1000});
      imageAnimatedSize.value = withTiming(0, {duration: 1000});
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />

      {/* Image Component */}
      <Animated.Image
        source={images.gift}
        style={imageAnimation}
        resizeMode="cover"
      />

      {/* Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={onPress}
        activeOpacity={0.8}>
        <Text style={styles.btnText}>Click Me</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingVertical: 40,
    backgroundColor: 'white',
  },
  button: {
    width: '90%',
    height: 65,
    backgroundColor: '#000',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  btnText: {
    fontSize: 22,
    color: '#fff',
  },
});

export default Home;
