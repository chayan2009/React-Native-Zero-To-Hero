import { StyleSheet } from "react-native";
import {
    Text,
    View,
  } from "react-native";
  
const GoalItem=({text})=>{
    return (
    <View style={styles.goalItem}>
    <Text style={styles.goalText}>{text}</Text>
  </View>)
};
export default GoalItem;

const styles= StyleSheet.create({
    goalItem: {
        marginVertical: 8,
        borderRadius: 6,
        backgroundColor: "#5e08cc",
        padding: 12,
      },
      goalText: {
        color: "#fff",
        fontSize: 16,
      }
})