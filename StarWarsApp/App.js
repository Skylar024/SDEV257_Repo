import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Platform } from "react-native";
import Planets from "./Planets";
import Films from "./Films";
import Starships from "./Starships";
import details from "./ListComponents/details";

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function PlanetStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Planets"
        component={Planets}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="details"
        component={details}
        options={{ title: "Planet Details" }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      {Platform.OS == "ios" && (
        <Tab.Navigator>
          <Tab.Screen name="Planets" component={PlanetStack} />
          <Tab.Screen name="Films" component={Films} />
          <Tab.Screen name="Starships" component={Starships} />
        </Tab.Navigator>
      )}

      {Platform.OS == "android" && (
        <Drawer.Navigator>
          <Drawer.Screen name="Planets" component={PlanetStack} />
          <Drawer.Screen name="Films" component={Films} />
          <Drawer.Screen name="Starships" component={Starships} />
        </Drawer.Navigator>
      )}

      {Platform.OS == "web" && (
        <Drawer.Navigator>
          <Drawer.Screen name="Planets" component={PlanetStack} />
          <Drawer.Screen name="Films" component={Films} />
          <Drawer.Screen name="Starships" component={Starships} />
        </Drawer.Navigator>
      )}
    </NavigationContainer>
  );
}

