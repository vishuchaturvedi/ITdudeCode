import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import images from '../assets/images';

const Home = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />
      {/* Image Component */}

      <Image
        source={images.gift}
        style={{width: 30, height: 30}}
        resizeMode="cover"
      />

      {/* Button */}
      <TouchableOpacity style={styles.button}>
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
