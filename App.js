import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CatComponent from './src/components/CatComponent';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <CatComponent nombre="Rober" raza="negro" image="https://reactnative.dev/docs/assets/p_cat1.png"></CatComponent>
      <CatComponent nombre="Mari" raza="azul" image="https://reactnative.dev/docs/assets/p_cat2.png"></CatComponent>
      <CatComponent nombre="Elvira" raza="blanco"  image="https://reactnative.dev/docs/assets/p_cat1.png"></CatComponent>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
