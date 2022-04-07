import * as WebBrowser from "expo-web-browser";
import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

import Colors from "../constants/Colors";
import { MonoText } from "./StyledText";
import { Text, View } from "./Themed";

export default function FirstTestComponent({ path }: { path: string }) {
  const [text , onChangeText] = React.useState("");
  const [number, onChangeNumber] = React.useState("");

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        keyboardType="number-pad"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="useless placeholder"
        keyboardType="number-pad"
      />
      <Bmi height={Number(text)} weight={Number(number)} />
      <Bmr height={Number(text)} weight={Number(number)} />


    </SafeAreaView>
  );
}


const Bmi = (props: { height: number; weight: number }) => {
  const bmi = props.weight / (props.height * props.height);
  return (
    <Text>
      {bmi}
    </Text>
  );
};

const Bmr = (props: { height: number; weight: number }) => {
  const bmr = (props.weight * 10) + (props.height * 6.25) - (props.height * 5) + 5;
  return (
    <Text>
      {bmr}
    </Text>
  );
};


const styles = StyleSheet.create({
  getStartedContainer: {
    alignItems: "center",
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: "center",
  },
  helpContainer: { 
    
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: "center",
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    textAlign: "center",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    color: "white",
  },
});
