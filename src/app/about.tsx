import { Text, View, StyleSheet, TextInput, ActivityIndicator } from "react-native";
import { Image } from "expo-image"; 

export default function Index() {
  return (
    <View style={styles.container}>
      <Image source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiSTRN8-or2gjO8UW339WZDkP_vVy0uNQ2-sLE8_qMLQ&s=10",}}
      style = {styles.img}
      />

     
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
