import { KeyboardAvoidingView, StyleSheet, Text, View } from "react-native";
import { React } from "react";
import { TextInput } from "react-native-gesture-handler";

const LoginScreen = () => {
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View>
        <TextInput
          placeholder="Email"
          styles={styles.input}
        />
        <TextInput
          placeHolder="Password"
          styles={styles.input}
          secureTextEntry>

        </TextInput>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  }
});