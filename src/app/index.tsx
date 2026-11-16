import { Text, View, StyleSheet, TextInput, ActivityIndicator } from "react-native";
import { Image } from "expo-image"; 
import { Link } from "expo-router";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.helloWorldTitle}>Hello World</Text>
      

      <TextInput style={styles.helloWorldTitle} placeholder="Email"/>
      <ActivityIndicator size={"large"}/>
      <Link href={"/about"}>Go To About</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  helloWorldTitle: {
    color : "red",
  },

 
});
