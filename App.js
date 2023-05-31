import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ToastManager, { Toast } from "toastify-react-native";
import Home from "./src/screens/Home";
import Login from "./src/screens/Login";
import Register from "./src/screens/Register";
import { loadFonts } from "./src/components/font/Font";
import { useEffect } from "react";
import Category from "./src/screens/Category";
import User from "./src/screens/User";
import Setting from "./src/screens/Setting";
import TabNavigatior from "./src/components/layout/TabNavigatior";
import Promotion from "./src/components/modules/Promotion";
import PromotionScreen from "./src/screens/PromotionScreen";
import BranDetail from "./src/screens/BranDetail";
import { AuthProvider } from "./src/components/contexts/AuthConText";
import UpdateUser from "./src/screens/UpdateUser";

export default function App() {
  const Stack = createNativeStackNavigator();
  useEffect(() => {
    loadFonts();
  }, []);

  return (
    <NavigationContainer>
      <AuthProvider>
        <ToastManager />
        <Stack.Navigator
          initialRouteName="login"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="login" component={Login}></Stack.Screen>
          <Stack.Screen name="register" component={Register}></Stack.Screen>
          <Stack.Screen name="home" component={TabNavigatior}></Stack.Screen>
          <Stack.Screen
            name="brandDetail"
            component={BranDetail}
          ></Stack.Screen>
          <Stack.Screen
            name="promotions"
            component={PromotionScreen}
          ></Stack.Screen>
           <Stack.Screen
            name="userUpdate"
            component={UpdateUser}
          ></Stack.Screen>
        </Stack.Navigator>
      </AuthProvider>
    </NavigationContainer>
  );
}
