import { View, Text, Image, ViewStyle } from "react-native";
import React from "react";

const Index = () => {
  return (
    <View style={$ViewStyle}>
      <View>
        <Image
          source={{
            uri: "https://res.cloudinary.com/evergreenx/image/upload/v1680259111/Logo_1_tdttqu.png",
          }}
          resizeMode="contain"
          alt="logo"
          style={{ width: 300, height: 200, alignSelf: "center" }}
        />
      </View>
    </View>
  );
};

export default Index;

const $ViewStyle: ViewStyle = {
  flex: 1,
  padding: 20,
  backgroundColor: "#fff",
};
