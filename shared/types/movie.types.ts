export interface IGenre {
  _id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
}

export interface IParameters {
  year: number;
  durationL: number;
  country: string;
}

export interface IActor {
  _id: string;
  photo: string;
  name: string; 
  countMovies: string;
  slug: string;
}

export interface IMovie {
  _id: string;
  poster: string;
  bigPoster: string;
  title: string;
  parameters: IParameters;
  genres: IGenre[];
  actors: IActor[];
  countOpened: number;
  videoUrl: string;
  rating: string;
  slug: string;
}