import { StyleSheet, View, TextInput, Alert } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { useState } from "react";
import GameScreen from "./GameScreen";

const StartGameScreen = ({onPickNumber}) => {
  const [enterNumber, setEnterNumber] = useState("");

  function numberInputhandler(inputText) {
    setEnterNumber(inputText);
  }
  function resetInputhandler(inputText) {
    setEnterNumber("");
  }
  function confirmInputHandler() {
    console.log("test");
    const chooseNumber = parseInt(enterNumber);
    if (isNaN(chooseNumber) || chooseNumber <= 0 || chooseNumber > 10) {
      Alert.alert(
        "Invalid Number",
        "Number has to be a number between 1 and 10.",
        [{ text: "Okay", style: "destructive", onPress: resetInputhandler }]
      );
      return;
    }
    onPickNumber(chooseNumber);
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        placeholder="Please Enter Number"
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={numberInputhandler}
        value={enterNumber}
      ></TextInput>
      <View style={styles.butonContainer}>
        <View style={styles.butonsContainer}>
          <PrimaryButton onClick={resetInputhandler}>Reset</PrimaryButton>
        </View>
        <View style={styles.butonsContainer}>
          <PrimaryButton onClick={confirmInputHandler}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    padding: 16,
    marginTop: 100,
    marginHorizontal: 16,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    backgroundColor: "#4e0329",
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.5,
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: "#ddb52f",
    color: "#ddb52f",
    fontWeight: "bold",
    marginVertical: 8,
    borderBottomWidth: 2,
  },
  butonContainer: {
    flexDirection: "row",
  },
  butonsContainer: {
    flex: 1,
  },
});
