export type ISpecie = {
  id: string;
};

export type IMovie = {
  id: string;
  title: string;
  original_title: string;
  original_title_romanised: string;
  description: string;
  image: string;
  director: string;
  producer: string;
  release_date: string;
  running_time: string;
  rt_score: string;
  people: string[];
  species: ISpecie[];
  locations: string[];
  vehicles: string[];
  url: string;
};
