import { Text, View, StyleSheet, TextInput, ActivityIndicator, Button } from "react-native";
import { Image } from "expo-image"; 
import { Link, useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.helloWorldTitle}>Hello World</Text>
      

      <TextInput style={styles.helloWorldTitle} placeholder="Email"/>
      <ActivityIndicator size={"large"}/>
      <Link href={"/about"}>Go To About</Link>
      <Button title="Navigate" onPress={() => router.push("/about")}/>
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
