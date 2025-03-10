import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { styles } from "./LoginStyles";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../store/actions/login";
import { isEmpty } from "lodash";

const App = () => {
  const errorMessage = useSelector(({ data }) => data.loginErrorMessage);
  const dispatch = useDispatch();

  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const navigation = useNavigation();

  const onPressLogin = () => {
    dispatch(
      userLogin({
        email: state.email,
        password: state.password,
        navigateTo: (screen) => navigation.replace(screen),
      })
    );
  };
  const onPressForgotPassword = () => {
    // Do something about forgot password operation
  };
  const onPressSignUp = () => {
    // Do something about signup operation
  };

  const isDisabled = isEmpty(state.email) || isEmpty(state.password);
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Login Screen</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Email"
          placeholderTextColor="#003f5c"
          onChangeText={(text) => setState({ ...state, email: text })}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          secureTextEntry
          placeholder="Password"
          placeholderTextColor="#003f5c"
          onChangeText={(text) => setState({ ...state, password: text })}
        />
      </View>
      <Text style={styles.errorMsg}>{errorMessage}</Text>
      <TouchableOpacity onPress={onPressForgotPassword}>
        <Text style={styles.forgotAndSignUpText}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity
        disabled={isDisabled}
        onPress={onPressLogin}
        style={[
          styles.loginBtn,
          { backgroundColor: isDisabled ? "gray" : "#fb5b5a" },
        ]}
      >
        <Text style={styles.loginText}>LOGIN </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPressSignUp}>
        <Text style={styles.forgotAndSignUpText}>Signup</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;
