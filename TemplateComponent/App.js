import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import GoalItem from "./component/GoalItem";

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler=(enteredText) =>{
    setEnteredGoalText(enteredText);
  }

  const addGoalHandler=()=> {
    if (enteredGoalText.trim().length === 0) return; // Prevent adding empty goals
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      {text:enteredGoalText,key:Math.random.toString},
    ]);
    setEnteredGoalText(""); // Clear input after adding
  }

  return (
    <View style={styles.appContainer}>
      {/* Toolbar */}
      <View style={styles.toolbar}>
        <Text style={styles.toolbarTitle}>Goal Tracker</Text>
      </View>

      {/* Input Section */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Add a goal"
          value={enteredGoalText}
          onChangeText={goalInputHandler}
        />
        <TouchableOpacity style={styles.addButton} onPress={addGoalHandler}>
          <Text style={styles.addButtonText}>Add</Text>
        </TouchableOpacity>
      </View>

      {/* Goals List */}
      <View style={styles.goalContainer}>
        <Text style={styles.heading}>Your Goals</Text>
        {/* <ScrollView alwaysBounceVertical={false}>
          {courseGoals.map((goal, index) => (
            <View key={index} style={styles.goalItem}>
              <Text style={styles.goalText}>{goal}</Text>
            </View>
          ))}
        </ScrollView> */}

        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return <GoalItem text = {itemData.item.text}/>;
          }}
          keyExtractor={(item,index)=>{
             return item.id
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: 30,
  },
  toolbar: {
    backgroundColor: "#6200ea",
    padding: 20,
    alignItems: "center",
  },
  toolbarTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    margin: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingBottom: 8,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#6200ea",
    borderRadius: 6,
    width: "70%",
    padding: 10,
    marginRight: 8,
  },
  addButton: {
    backgroundColor: "#6200ea",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  addButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  goalContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#6200ea",
    marginVertical: 10,
  }
});
