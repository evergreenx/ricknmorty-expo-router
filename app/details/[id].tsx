import { View, Text, ViewStyle, TextStyle, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "expo-router";
import { getCharacter } from "../../api";

const Details = () => {
  const [character, setCharacter] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const { id } = useSearchParams();

  useEffect(() => {
    const fetchCharactersData = async () => {
      try {
        const res = await getCharacter(id);
        setCharacter(res);
      } catch (err) {
        setLoading(false);
        setCharacter([]);
        setError("An error occurred");
      } finally {
        setLoading(false);
      }
    };
    fetchCharactersData();
  }, []);

  return (
    <View style={$container}>
      {error && <Text style={$errorText}>{error}</Text>}

      {loading && (
        <Image
          source={{
            uri: "https://res.cloudinary.com/evergreenx/image/upload/v1680297056/Loading_component_tr2ec6.png",
          }}
          resizeMode="contain"
          style={{
            width: 300,
            height: 200,
            alignSelf: "center",
            marginTop: 100,
          }}
        />
      )}
      {character && (
        <>
          <Link
            href={{
              pathname: "/",
            }}
            style={$backButton}
          >
            <Text style={$backButtonText}>Back</Text>
          </Link>

          <View style={$characterImageContainer}>
            <Image
              source={{ uri: character?.image }}
              style={{
                width: 250,
                height: 250,
                borderRadius: 150,
              }}
              resizeMode="contain"
            />
            <Text style={$characterName}>{character?.name}</Text>
          </View>

          <View style={$characterInfoContainer}>
            <View style={$characterInfo}>
              <Text style={$characterText}>Gender: </Text>
              <Text style={$characterTextInfo}>{character?.gender}</Text>
            </View>

            <View style={$characterInfo}>
              <Text style={$characterText}>Status: </Text>
              <Text style={$characterTextInfo}>{character?.status}</Text>
            </View>

            <View style={$characterInfo}>
              <Text style={$characterText}>Species: </Text>
              <Text style={$characterTextInfo}>{character?.species}</Text>
            </View>

            <View style={$characterInfo}>
              <Text style={$characterText}>origin: </Text>
              <Text style={$characterTextInfo}>{character?.origin.name}</Text>
            </View>

            <View style={$characterInfo}>
              <Text style={$characterText}>location: </Text>
              <Text style={$characterTextInfo}>{character?.location.name}</Text>
            </View>
          </View>
        </>
      )}
    </View>
  );
};

export default Details;

const $container: ViewStyle = {
  flex: 1,
  width: "100%",
  backgroundColor: "#FFDEAD",

  paddingVertical: 40,
  paddingHorizontal: 20,
};

const $characterImageContainer: ViewStyle = {
  width: "100%",
  padding: 15,
  borderRadius: 10,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const $characterName: TextStyle = {
  color: "#081F32",
  marginVertical: 16,
  fontSize: 30,
  fontWeight: "400",
};

const $characterInfoContainer: ViewStyle = {
  width: "100%",
  padding: 15,
  borderRadius: 10,
};

const $characterText: TextStyle = {
  color: "#081F32",
  marginVertical: 3,
  fontSize: 16,
  fontWeight: "700",
  textTransform: "capitalize",
  display: "flex",
  flexDirection: "row",
};

const $characterTextInfo: TextStyle = {
  color: "#6E798C",
  fontSize: 14,
  fontWeight: "400",
};

const $characterInfo: ViewStyle = {
  padding: 5,
  marginVertical: 3,
  borderBottomColor: "#979797",
  borderBottomWidth: 0.5,
};

const $backButton: ViewStyle = {
  width: 100,
  height: 40,
  borderRadius: 10,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: 20,
  marginTop: 10,
};

const $backButtonText: TextStyle = {
  color: "#979797",
  fontSize: 16,
  fontWeight: "700",
};

const $errorText: TextStyle = {
  color: "red",
  fontSize: 16,
  fontWeight: "700",
  alignSelf: "center",
  paddingTop: 100,
};
