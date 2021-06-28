import axios from 'axios';
import { loadAsync, useFonts } from 'expo-font';
import { StyleProvider } from 'native-base';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import material from './native-base-theme/variables/material';
import getTheme from './native-base-theme/components';
import RootStack from './src/Routers/RootStack';


export default function App() {

  const [isReady, setisReady] = useState(false)




  useEffect(() => {
    const loadFonts = async () => {
      await loadAsync({
        Roboto: require("native-base/Fonts/Roboto.ttf"),
        Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
        Regular: require("./assets/Fonts/OpenSans-Regular.ttf"),
        Regular700: require("./assets/Fonts/OpenSans-Bold.ttf")
      })
      setisReady(true)
    };

    loadFonts()

  }, [])


  return (
    <SafeAreaView style={styles.appContainer}>
      <StatusBar backgroundColor="black" />

      {
        isReady ? <RootStack /> : null
      }
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    backgroundColor: "#454545",
    flex: 1
  },
});
