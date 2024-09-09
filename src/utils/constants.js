export const LOGO =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const USER_PIC =
  "https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg";

export const NOW_PLAYING_LIST =
  "https://api.themoviedb.org/3/movie/now_playing?page=1";

export const POPULAR_MOVIES_LIST =
  "https://api.themoviedb.org/3/movie/popular?page=1";

export const TOP_RATED_MOVIES_LIST =
  "https://api.themoviedb.org/3/movie/top_rated?page=1";

export const UPCOMING_MOVIES_LIST =
  "https://api.themoviedb.org/3/movie/upcoming?page=1";

export const NETFLIX_BACKGROUND_IMG =
  "https://assets.nflxext.com/ffe/siteui/vlv3/1fd8c6d0-20db-4667-860e-dd1ad7353ac0/10f8d166-7c8c-499a-b16f-57c3740cdeae/IN-en-20240624-popsignuptwoweeks-perspective_alpha_website_medium.jpg";

export const API_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YmI1YjhjYzAwNjQ1YzAzNzU2MzA0MWFhMWJlNGJhNiIsIm5iZiI6MTcyMDA3NDM1Ni4xNTU5MDgsInN1YiI6IjY2ODYzZjFkN2Y5NGM0MGZmNzRhN2NhNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gqLmXLp7KyVlU2RqqnbvHHcE3n_b8ncpovsXCErEf_g";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YmI1YjhjYzAwNjQ1YzAzNzU2MzA0MWFhMWJlNGJhNiIsIm5iZiI6MTcyMDA3NDQ1OS4zNDIwNDMsInN1YiI6IjY2ODYzZjFkN2Y5NGM0MGZmNzRhN2NhNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.G_1wBtcBhVeTmAyN-Q55iEMcZ1hAX1QEcDT02WSBoEw",
  },
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";

export const SUPPORTED_LANGUAGES = [
  { identifier: "en", language: "English" },
  { identifier: "hindi", language: "Hindi" },
  { identifier: "spanish", language: "Spanish" },
];

export const GEMINI_API_KEY = process.env.REACT_APP_GEMINI_API_KEY;
