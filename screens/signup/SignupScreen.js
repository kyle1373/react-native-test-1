import { KeyboardAvoidingView, StyleSheet, Text, View } from "react-native";
import { React } from "react";

const SignupScreen = () => {
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View>
        <Text>SignupScreen</Text>
      </View>
    </KeyboardAvoidingView>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({});
