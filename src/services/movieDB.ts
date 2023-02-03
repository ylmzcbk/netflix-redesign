import dotenv from 'dotenv';
import { MovieDb } from 'moviedb-promise';

dotenv.config();
const moviedb = new MovieDb(process.env.NEXT_PUBLIC_API_KEY as string);

export const Movies = {
  netflixOriginals: async () => {
    const res = await moviedb.movieNowPlaying();
    return res.results;
  },
  popular: async () => {
    const res = await moviedb.moviePopular();
    return res.results;
  },
  trending: async () => {
    const res = await moviedb.trending({
      media_type: 'movie',
      time_window: 'day',
    });
    return res.results;
  },
  action: async () => {
    const res = await moviedb.discoverMovie({
      with_genres: '28',
    });
    return res.results;
  },
  comedy: async () => {
    const res = await moviedb.discoverMovie({
      with_genres: '35',
    });
    return res.results;
  },
  horror: async () => {
    const res = await moviedb.discoverMovie({
      with_genres: '27',
    });
    return res.results;
  },
  romance: async () => {
    const res = await moviedb.discoverMovie({
      with_genres: '10749',
    });
    return res.results;
  },
  documentary: async () => {
    const res = await moviedb.discoverMovie({
      with_genres: '99',
    });
    return res.results;
  },
};
