import React from "react";
import { View, StatusBar } from "react-native";

const App: React.FC = () => (
  <View style={{ flex: 1 }}>
    <StatusBar barStyle="light-content" backgroundColor="transparent" />
  </View>
);

export default App;
