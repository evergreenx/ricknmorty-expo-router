import { View, Image, ViewStyle, Text, TextStyle } from "react-native";
import React, { useEffect, useState } from "react";
import { getCharacters } from "../api";
import { Character } from "../interface";
import CharacterCard from "../component/CharacterCard";

const Index = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    setLoading(true);
    const fetchCharactersData = async () => {
      try {
        const res = await getCharacters();
        setCharacters(res.results);
      } catch (err) {
        setLoading(false);
        setCharacters([]);
        setError("An error occurred");
      } finally {
        setLoading(false);
      }
    };
    fetchCharactersData();
  }, []);
  console.log(characters);

  return (
    <View style={$container}>
      

      {loading && (
        <Image
          source={{
            uri: "https://res.cloudinary.com/evergreenx/image/upload/v1680297056/Loading_component_tr2ec6.png",
          }}
          resizeMode="contain"
          style={{ width: 300, height: 200, alignSelf: "center" }}
        />
      )}
      {error && <Text style={$errorText}>{error}</Text>}
      {characters && <CharacterCard characters={characters} />}
    </View>
  );
};

export default Index;

const $container: ViewStyle = {
  flex: 1,
  width: "100%",
  backgroundColor: "#FFDEAD",
};

const $errorText: TextStyle = {
  color: "red",
  fontSize: 20,
  alignSelf: "center",
};
