import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TextInput,
  Button,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.Logo} source={require("./assets/Logo.png")} />
      <View>
        <TextInput style={styles.input} value={Text} placeholder="Username" />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
        />
      </View>
      <Text style={{ color: "rgb(0, 46, 107)" }}>
        Forgot Passowrd | Register Now {"\n"}
      </Text>
      <View>
        <Button title="Login" color="rgb(0, 46, 107)"></Button>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  Logo: {
    width: "60%",
    height: "30%",
    resizeMode: "stretch",
    alignItems: "flex-start",
  },
  input: {
    height: 40,
    margin: 12,
    borderBottomWidth: 1,
    borderBottomColor: "rgb(0, 46, 107)",
    padding: 10,
    width: 300,
  },
});
