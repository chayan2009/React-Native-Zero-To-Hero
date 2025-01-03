import { View, Text, StyleSheet, Pressable } from "react-native";

const PrimaryButton = ({ children ,onClick}) => {
  return (
    <View style={styles.btnOuterContainer}>

      <Pressable
        style={({ pressed }) => pressed ? [styles.btnInnerContainer,styles.pressed] : styles.btnInnerContainer}
        onPress={onClick}
        android_ripple={{ color: "#640233" }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  btnOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  btnInnerContainer: {
    backgroundColor: "#72063c",
    elevation: 2,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  buttonText: {
    color: "#ffffff",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75
  },
});
