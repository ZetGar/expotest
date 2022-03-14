import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>아직도 연결되어있니 오오오오오!!</Text>
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

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    // <View>
    //   <View style={{width:200, height:200, backgroundColor:"tomato"}}></View>
    //   <View style={{width:200, height:200, backgroundColor:"teal"}}></View>
    //   <View style={{width:200, height:200, backgroundColor:"orange"}}></View>
    // </View>
    <View style = {{ flex : 1 }}>
      <View style={{ flex : 1, backgroundColor:"tomato" }}></View>
      <View style={{ flex : 1, backgroundColor:"teal" }}></View>
      <View style={{ flex : 1, backgroundColor:"orange" }}></View>
    </View>
  );
}
// display: flex; flex-direction: row;
