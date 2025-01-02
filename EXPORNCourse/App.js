import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
      <Text style={{ margin: 20 ,fontSize:30}}>Hello World</Text>
      <Text style={styles.dummyText}>
        Open up App.js to start working on your app!
      </Text>
      <TextInput
        placeholder="email"
        style={{ width:'100%',borderColor: "black", borderWidth: 1, margin: 10, padding: 20 }}
      />
      <Button title="asdasdas"></Button>
      </View>
      <View>
        <Text> List Of Goals</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding:16
  },
  dummyText: {
    fontSize: 10,
    padding: 16,
    alignContent: "center",
    justifyContent: "ce",
  },
  inputContainer:{
    flexDirection:'row',
    justifyContent:'center',
  },
  textInput:{
    borderWidth:1,
    borderColor:'#cccccc',
    width:'80%'
  }

});
