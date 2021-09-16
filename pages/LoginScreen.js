// Import React and Component
import React, { useState, createRef } from "react";
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  Text,
  ScrollView,
  Image,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";

import auth from "@react-native-firebase/auth";

const LoginScreen = ({ navigation }) => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [errortext, setErrortext] = useState("");

  const passwordInputRef = createRef();

  const handleSubmitPress = () => {
    setErrortext("");
    if (!userEmail) {
      alert("Please Input Your Email");
      return;
    }
    if (!userPassword) {
      alert("Please Input Your Password");
      return;
    }
    auth()
      .signInWithEmailAndPassword(userEmail, userPassword)
      .then((user) => {
        console.log(user);
        // If server response message same as Data Matched
        if (user) navigation.replace("HomeScreen");
      })
      .catch((error) => {
        console.log(error);
        if (error.code === "auth/invalid-email")
          setErrortext(error.message);
        else if (error.code === "auth/user-not-found")
          setErrortext("No User Found");
        else {
          setErrortext(
            "Please check your email id or password"
          );
        }
      });
  };

  return (
    
    <SafeAreaView style={styles.mainBody}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          flex: 1,
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <View>
          <KeyboardAvoidingView enabled>
            <View style={{ alignItems: "center" }}>
              <Image
                source={require("../Image/hbl.png")}
                style={{
                  width: "50%",
                  height: 100,
                  resizeMode: "contain",
                  margin: 30,
                }}
              />
            </View>
            <View style={styles.sectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={(UserEmail) =>
                  setUserEmail(UserEmail)
                }
                placeholder="Enter Email"
                placeholderTextColor="white"
                autoCapitalize="none"
                keyboardType="email-address"
                returnKeyType="next"
                onSubmitEditing={() =>
                  passwordInputRef.current &&
                  passwordInputRef.current.focus()
                }
                underlineColorAndroid="#f000"
                blurOnSubmit={false}
              />
            </View>
            <View style={styles.sectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={(UserPassword) =>
                  setUserPassword(UserPassword)
                }
                placeholder="Enter Password"
                placeholderTextColor="white"
                keyboardType="default"
                ref={passwordInputRef}
                onSubmitEditing={Keyboard.dismiss}
                blurOnSubmit={false}
                secureTextEntry={true}
                underlineColorAndroid="#f000"
                returnKeyType="next"
              />
            </View>
            {errortext != "" ? (
              <Text style={styles.errorTextStyle}>
                {" "}
                {errortext}{" "}
              </Text>
            ) : null}
            <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}
              onPress={handleSubmitPress}
            >
              <Text style={styles.buttonTextStyle}>
                LOGIN
              </Text>
            </TouchableOpacity>
            <Text
              style={styles.registerTextStyle}
              onPress={() =>
                navigation.navigate("RegisterScreen")
              }
            >
              New Here ? Register
            </Text>
          </KeyboardAvoidingView>
        </View>
      </ScrollView>
     
    </SafeAreaView>
  );
};
export default LoginScreen;

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#009591",
    alignContent: "center",
  },
  sectionStyle: {
    flexDirection: "row",
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  buttonStyle: {
    backgroundColor: "white",
    borderWidth: 0,
    color: "#009591",
    height: 40,
    alignItems: "center",
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 25,
  },
  buttonTextStyle: {
    color: "#009591",
    paddingVertical: 10,
    fontSize: 16,
    fontWeight:'bold'
  },
  inputStyle: {
    flex: 1,
    color: "white",
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: "white",
  },
  registerTextStyle: {
    color: "white",
    textAlign: "center",
    fontSize: 14,
    alignSelf: "center",
    padding: 10,
  },
  errorTextStyle: {
    color: "red",
    textAlign: "center",
    fontSize: 14,
  },
});