import { create } from "apisauce";
import { ApiResponse, Character } from "./interface";
const api = create({
  baseURL: "https://rickandmortyapi.com/api/",
  headers: { Accept: "application/json" },
});

export const getCharacters = async (): Promise<ApiResponse> => {
  const response = await api.get("/character");
  if (!response.ok) throw new Error(response.problem);
  return response.data as ApiResponse;
};

export const getCharacter = async (id: string): Promise<Character> => {
  const response = await api.get(`/character/${id}`);
  if (!response.ok) throw new Error(response.problem);
  return response.data as Character;
};
