import { NavigationContainer } from "@react-navigation/native"
import { Text, View } from "react-native"
import BottomNavigation from "./src/navigation/BottomNavigation"

const App = ()=>{
  return(
    <NavigationContainer>
      <BottomNavigation></BottomNavigation>
    </NavigationContainer>
  )
}

export default App