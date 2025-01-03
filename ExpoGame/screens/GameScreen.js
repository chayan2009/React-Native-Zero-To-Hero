import { StyleSheet, Text, View } from "react-native";
function GameScreen() {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Opponent's Guess</Text>
      <View>
        <Text style={styles.title}>Higher Or Lower?</Text>
      </View>
    </View>
  );
}
export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    paddingTop: 88, // Add extra padding at the top
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: "yellow",
    textAlign: "center",
    borderWidth: 2,
    margin:8,
    borderColor: "yellow",
    padding: 12,
  },
});
