
import "react-native-gesture-handler";

// Import React and Component
import React from "react";

// Import Navigators from React Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Import Screens
import SplashScreen from "./pages/SplashScreen";
import LoginScreen from "./pages/LoginScreen";
import RegisterScreen from "./pages/RegisterScreen";
import HomeScreen from "./pages/HomeScreen";
import SendMoney from "./pages/SendMoney";
import BillPayments from "./pages/BillPayments";
import MobileRecharge from "./pages/Recharge/MobileRecharge";
import Electricity from "./pages/bills/electricity"
import Rechargescreen from "./pages/Recharge/Rechargescreen";
import MyAccount from "./pages/More/MyAccount"
import MoreScreen from "./pages/More/MoreScreen";
import MyCards from "./pages/More/Cards"
import cheque from "./pages/More/cheque"
import whatsapp from "./pages/More/whatsapp";
import Support from "./pages/More/support";
import help from "./pages/More/help";
import locator from "./pages/More/locator";
import Entertainment from "./pages/More/Entertainment";

const Stack = createStackNavigator();

const Auth = () => {
  // Stack Navigator for Login and Sign up Screen
  return (
    <Stack.Navigator initialRouteName="LoginScreen">
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{
          headerShown: false
        
          
          
        }}
      />
    </Stack.Navigator>
  );
};

/* Main Navigator */
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        {/* SplashScreen which will come once for 2 Seconds */}
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          // Hiding header for Splash Screen
          options={{ headerShown: false }}
        />
        {/* Auth Navigator which include Login Signup */}
        <Stack.Screen
          name="Auth"
          component={Auth}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            title: "HBL Mobile",
            
             //Set Header Title
            headerStyle: {
              backgroundColor: "#009591", //Set Header color
              
            },
            headerTintColor: "#fff",
             //Set Header text color
            headerTitleStyle: {
              fontWeight: "bold", 
              //Set Header text style
            },
          }}
        />

        <Stack.Screen
          name="SendMoney"
          component={SendMoney}
          options={{
            title:"Send Money",
          headerStyle: {
            backgroundColor: "#009591", //Set Header color
            },
          headerTintColor: "#fff",
           //Set Header text color
          headerTitleStyle: {
            fontWeight: "bold", 
            //Set Header text style
          },
        }}
        />

        <Stack.Screen
          name="BillPayments"
          component={BillPayments}
          options={{
            title:"Bill Payments",
            
          headerStyle: {
            backgroundColor: "#009591", //Set Header color
            },
          headerTintColor: "#fff",
           //Set Header text color
          headerTitleStyle: {
            fontWeight: "bold", 
            //Set Header text style
          },
        }}
        />

        <Stack.Screen
          name="MobileRecharge"
          component={MobileRecharge}
          options={{
            title:"Mobile Recharge",
          headerStyle: {
            backgroundColor: "#009591", //Set Header color
            },
          headerTintColor: "#fff",
           //Set Header text color
          headerTitleStyle: {
            fontWeight: "bold", 
            //Set Header text style
          },
        }}
        />

<Stack.Screen
          name="electricity"
          component={Electricity}
          options={{
            title:"Bill Payment",
          headerStyle: {
            backgroundColor: "#009591", //Set Header color
            },
          headerTintColor: "#fff",
           //Set Header text color
          headerTitleStyle: {
            fontWeight: "bold", 
            //Set Header text style
          },
        }}
        />

      <Stack.Screen
          name="Rechargescreen"
          component={Rechargescreen}
          options={{
            title:"Mobile Recharge",
          headerStyle: {
            backgroundColor: "#009591", //Set Header color
            },
          headerTintColor: "#fff",
           //Set Header text color
          headerTitleStyle: {
            fontWeight: "bold", 
            //Set Header text style
          },
        }}
        />

    <Stack.Screen
          name="MyAccount"
          component={MyAccount}
          options={{
            title:"My Account",
          headerStyle: {
            backgroundColor: "#009591", //Set Header color
            },
          headerTintColor: "#fff",
           //Set Header text color
          headerTitleStyle: {
            fontWeight: "bold", 
            //Set Header text style
          },
        }}
        />

    <Stack.Screen
          name="MoreScreen"
          component={MoreScreen}
          options={{
            title:"More",
          headerStyle: {
            backgroundColor: "#009591", //Set Header color
            },
          headerTintColor: "#fff",
           //Set Header text color
          headerTitleStyle: {
            fontWeight: "bold", 
            //Set Header text style
          },
        }}
        />

<Stack.Screen
          name="MyCards"
          component={MyCards}
          options={{
            title:"My Cards",
          headerStyle: {
            backgroundColor: "#009591", //Set Header color
            },
          headerTintColor: "#fff",
           //Set Header text color
          headerTitleStyle: {
            fontWeight: "bold", 
            //Set Header text style
          },
        }}
        />

<Stack.Screen
          name="cheque"
          component={cheque}
          options={{
            title:"Cheque Book Request",
          headerStyle: {
            backgroundColor: "#009591", //Set Header color
            },
          headerTintColor: "#fff",
           //Set Header text color
          headerTitleStyle: {
            fontWeight: "bold", 
            //Set Header text style
          },
        }}
        />

<Stack.Screen
          name="whatsapp"
          component={whatsapp}
          options={{
            title:"Connect to Whatsapp",
          headerStyle: {
            backgroundColor: "#009591", //Set Header color
            },
          headerTintColor: "#fff",
           //Set Header text color
          headerTitleStyle: {
            fontWeight: "bold", 
            //Set Header text style
          },
        }}
        />

<Stack.Screen
          name="Support"
          component={Support}
          options={{
            title:"Customer Support",
          headerStyle: {
            backgroundColor: "#009591", //Set Header color
            },
          headerTintColor: "#fff",
           //Set Header text color
          headerTitleStyle: {
            fontWeight: "bold", 
            //Set Header text style
          },
        }}
        />

    <Stack.Screen
          name="help"
          component={help}
          options={{
            title:"Help",
          headerStyle: {
            backgroundColor: "#009591", //Set Header color
            },
          headerTintColor: "#fff",
           //Set Header text color
          headerTitleStyle: {
            fontWeight: "bold", 
            //Set Header text style
          },
        }}
        />
    
    <Stack.Screen
          name="locator"
          component={locator}
          options={{
            title:"Branch Locator",
          headerStyle: {
            backgroundColor: "#009591", //Set Header color
            },
          headerTintColor: "#fff",
           //Set Header text color
          headerTitleStyle: {
            fontWeight: "bold", 
            //Set Header text style
          },
        }}
        />

<Stack.Screen
          name="Entertainment"
          component={Entertainment}
          options={{
            title:"HBL Entertainment",
          headerStyle: {
            backgroundColor: "#009591", //Set Header color
            },
          headerTintColor: "#fff",
           //Set Header text color
          headerTitleStyle: {
            fontWeight: "bold", 
            //Set Header text style
          },
        }}
        />


      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;