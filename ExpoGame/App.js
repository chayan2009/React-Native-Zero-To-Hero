import { ImageBackground, StyleSheet } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  const [userNumber, setUserNumber] = useState();

  function pickedNumberHandler(pickerNumber) {
    setUserNumber(pickerNumber);
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = <GameScreen />;
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LinearGradient colors={["#4e0329", "#ddb52f"]} style={styles.rootScreen}>
        <ImageBackground
          source={require("./assets/bgimg.png")}
          resizeMode="cover"
          style={styles.rootScreen}
          imageStyle={styles.backgroundImgColor}
        >
          {screen}
        </ImageBackground>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImgColor: {
    opacity: 0.15,
  },
});
