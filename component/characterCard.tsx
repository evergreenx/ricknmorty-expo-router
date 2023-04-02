import {
  View,
  Text,
  FlatList,
  TextStyle,
  ViewStyle,
  Image,
  Pressable,
} from "react-native";
import React from "react";
import { Character } from "../interface";

import { useRouter } from "expo-router";
type CharacterCardProps = {
  characters: Character[];
};

export default function characterCard({ characters }: CharacterCardProps) {
  const router = useRouter();
  const renderCharacters = ({ item }: { item: Character }) => {
    return (
      <Pressable
        style={$characterContainer}
        onPress={() => {
          router.push({
            pathname: "details/id/",
            params: { id: item?.id },
          });
        }}
      >
        <View style={$characterImageContainer}>
          <Image
            source={{ uri: item?.image }}
            style={{
              width: "100%",
              height: 150,
              borderBottomLeftRadius: 0,
              borderBottomRightRadius: 0,
              borderRadius: 10,
            }}
          />
        </View>

        <View style={$characterInfoContainer}>
          <Text style={$characterText}>{item?.name}</Text>
          <Text style={$characterSpecies}>{item?.species}</Text>
        </View>
      </Pressable>
    );
  };

  const renderHeader = () => {
    return (
      <View>
        <Image
          source={{
            uri: "https://res.cloudinary.com/evergreenx/image/upload/v1680259111/Logo_1_tdttqu.png",
          }}
          style={{ width: 300, height: 200, alignSelf: "center" }}
          resizeMode="contain"
          alt="logo"
        />
      </View>
    );
  };

  return (
    <View style={$container}>
      <FlatList
        style={{ width: "100%", padding: 10, marginBottom: 20 }}
        data={characters}
        renderItem={renderCharacters}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        ListHeaderComponent={renderHeader}
      />
    </View>
  );
}

const $container: ViewStyle = {
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
};

const $characterContainer: ViewStyle = {
  backgroundColor: "#fff",
  height: 230,
  width: "45%",
  borderRadius: 10,
  marginVertical: 10,
  marginHorizontal: 10,
};
const $characterImageContainer: ViewStyle = {
  width: "100%",
  overflow: "hidden",
  marginBottom: 10,
};

const $characterText: TextStyle = {
  color: "#000",
  fontSize: 18,
  fontWeight: "500",
};

const $characterSpecies: TextStyle = {
  color: "#000",
  fontSize: 13,
  fontWeight: "500",
  marginTop: 5,
};

const $characterInfoContainer: ViewStyle = {
  padding: 10,
};
