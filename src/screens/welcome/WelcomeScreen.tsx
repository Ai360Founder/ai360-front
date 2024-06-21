import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const WelcomeScreen = () => {
  return (
    <ImageBackground
      source={require('../../assets/images/BackgroundImage.png')}
      style={styles.backgroundImage}
    >
      <SafeAreaView style={styles.container}>
        <View>
          <Image source={require('../../assets/images/logoIcon.png')} style={styles.logo} />
          <Image source={require('../../assets/images/textLogo.png')} style={styles.textLogo} />
        </View>
        <Text style={styles.bottomText}>feel ai & blockchain</Text>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  logo: {
    width: '30%',
    resizeMode: 'contain',
    height: '30%',
    alignSelf: 'center',
    marginTop: '30%',
  },
  textLogo: {
    height: '15%',
    resizeMode: 'contain',
    width: '30%',
    alignSelf: 'center',
  },
  bottomText: {
    fontSize: 13,
    color: '#4d977e',
    alignSelf: 'center',
    position: 'absolute',
    bottom: 40,
    fontFamily: 'Dopis-Regular',
  },
});
