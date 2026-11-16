import { Stack } from "expo-router";
import { StackScreen } from "expo-router/build/layouts/stack-utils/StackScreen.js";

export default function RootLayout() {
  return (
  <Stack 
   screenOptions={{
                    headerStyle :{backgroundColor: "cornflowerblue"} ,
                    headerTintColor:"white",
                    animation:"fade",
                  }}
  >
    <StackScreen name="index" options={{ title:"Home" }}/> 
    <StackScreen name="about" options={{ title:"About" }}/> 
  </Stack> 
  );
}
