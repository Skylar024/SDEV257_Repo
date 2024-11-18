import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Platform } from "react-native";
import Planets from "./Planets";
import Films from "./Films";
import Starships from "./Starships";

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {Platform.OS == "ios" && (
        <Tab.Navigator>
          <Tab.Screen name="Planets" component={Planets} />
          <Tab.Screen name="Films" component={Films} />
          <Tab.Screen name="Starships" component={Starships} />
        </Tab.Navigator>
      )}

      {Platform.OS == "android" && (
        <Drawer.Navigator>
          <Drawer.Screen name="Planets" component={Planets} />
          <Drawer.Screen name="Films" component={Films} />
          <Drawer.Screen name="Starships" component={Starships} />
        </Drawer.Navigator>
      )}

      {Platform.OS == "web" && (
        <Drawer.Navigator>
          <Drawer.Screen name="Planets" component={Planets} />
          <Drawer.Screen name="Films" component={Films} />
          <Drawer.Screen name="Starships" component={Starships} />
        </Drawer.Navigator>
      )}
    </NavigationContainer>
  );
}

