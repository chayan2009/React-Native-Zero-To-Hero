import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={{ padding: 100,flexDirection:'column-reverse' }}>
      <View
        style={{
          backgroundColor: "red",
          width: '80%',
          height: 200,
          justifyContent: 'space-around',
          alignItems: 'stretch',

        }}
      >
        <Text>1</Text>
      </View>
      <View
        style={{
          backgroundColor: "blue",
          width: '100%',
          height: 200,
          justifyContent: 'space-around',
          alignItems: 'stretch',
        }}
      >
        <Text>2</Text>
      </View>
      <View
        style={{
          backgroundColor: "green",
          width: 100,
          height: 100,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>3</Text>
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
  },
});
