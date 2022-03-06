import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState } from "react";
import { Button, Input, Image } from "react-native-elements";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = () => {
    alert("Hi");
  };

  return (
    <KeyboardAvoidingView behaviour="padding" style={styles.container}>
      <StatusBar style="light" />
      <Image
        source={{
          uri: "https://ps.w.org/wp-whatsapp/assets/icon-256x256.png?rev=2470082",
        }}
        style={{ width: 200, height: 200 }}
      />
      <View style={styles.inputContainer}>
        <Input
          value={email}
          onChangeText={(text) => setEmail(text)}
          placeholder="Email"
          type="email"
        />
        <Input
          value={password}
          onChangeText={(text) => setPassword(text)}
          placeholder="Password"
          secureTextEntry
          type="password"
        />
      </View>

      <Button containerStyle={styles.button} onPress={signIn} title="Login" />
      <Button
        containerStyle={styles.button}
        onPress={() => navigation.navigate("Register")}
        type="outline"
        title="Register"
      />
      <View style={{ height: 100 }} />
    </KeyboardAvoidingView>
  );
};

export { Login };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "white",
  },
  inputContainer: {
    marginTop: 10,
    width: 300,
  },
  button: {
    width: 200,
    marginTop: 10,
  },
});
