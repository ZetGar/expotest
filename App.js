import { StatusBar } from 'expo-status-bar';
import { View , Text , StyleSheet} from 'react-native';
import module as Font from 'expo-font';

export default function App() {
  return (
    <View sytle={{flex : 1, 
      backgroundColor : "tomato"}}>
      <View sytle={styles.city}>
        <Text style={styles.cityName}>Sonnnn</Text>
      </View>
      <View style={styles.weather}>
        <View style={styles.day}>
          <Text>27</Text>
          <Text>Sunny</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container : {
    flex : 1, 
    backgroundColor : "tomato",
    
  },
  city : {
    flex : 1.2,
    backgroundColor : "blue",
    justifyContent : "center"
  },
  cityName : {
    fontSize: 68,
    fontWeight: "500",
    // fontFamily: "Roboto"
  },
  weather : {
    flex : 3,
    backgroundColor : "teal"
  },
  day : {
    backgroundColor : "teal"
  },
});
