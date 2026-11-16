import { Text, View, StyleSheet } from "react-native";
import { Image } from "expo-image"; 

export default function Profile() {
  return (
    <View style={styles.container}>
      <Text>Profile Page</Text>
      

     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  
  img:{
    width:200,
    height: 200,
  },
});
