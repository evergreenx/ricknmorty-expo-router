import {
  View,
  Text,
  FlatList,
  TextStyle,
  ViewStyle,
  Image,
} from "react-native";
import React from "react";
import { Character } from "../interface";
type CharacterCardProps = {
  characters: Character[];
};

export default function characterCard({ characters }: CharacterCardProps) {
  const renderCharacters = ({ item }: { item: Character }) => {
    return (
      <View style={$characterContainer}>
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
            resizeMode="cover"
          />
        </View>

        <View style={$characterInfoContainer}>
          <Text style={$characterText}>{item?.name}</Text>
          <Text style={$characterSpecies}>{item?.species}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={$container}>
      <FlatList
        style={{ width: "100%", padding: 10 }}
        data={characters}
        renderItem={renderCharacters}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        numColumns={2}
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
