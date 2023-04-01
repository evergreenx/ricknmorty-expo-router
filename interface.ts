  export interface Location {
    name: string;
    url: string;
  }
  
export interface Character {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: Location;
    location: Location;
    image: string;
    medium : string;
    episode: string[];
    url: string;
    created: string;
  }
  

  export interface ApiResponse {
    info: {
      count: number;
      pages: number;
      next: string;
      prev: string;
    };
    results: Character[];
  }