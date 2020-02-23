import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>My first app!</Text>
      <Button title="Solid Button" />

      <Button title="Outline button" type="outline" />

      <Button title="Clear button" type="clear" />

      <Button
        icon={<Icon name="arrow-right" size={15} color="white" />}
        title="Button with icon component"
      />

      <Button
        icon={{
          name: "arrow-right",
          size: 15,
          color: "white"
        }}
        title="Button with icon object"
      />

      <Button
        icon={<Icon name="arrow-right" size={15} color="white" />}
        iconRight
        title="Button with right icon"
      />

      <Button title="Loading button" loading />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    fontFamily: "TradeWinds-Regular",
    flex: 1,
    backgroundColor: "#3377ff",
    alignItems: "center",
    justifyContent: "center"
  }
});
