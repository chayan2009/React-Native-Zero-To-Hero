import { Text } from "react-native";

function Title({children}){

    return <Text style={styles.Title}>children</Text>

}
export default Title;

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