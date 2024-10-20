export const httpTestResults = [
  {
    filename: "api_movies_query_date_genre.json",
    title: "Query SQLite Table from Endpoint",
    mainDescription:
      "Query movies by date (timestamp) and genre (enum). (Time in seconds)",
    description:
      "Querying movies by date and genre, handling 1250 concurrent connections and 100,000 HTTP requests. Database: 1M users, 1M movies, ~5M UserFavMovies.",
  },
  {
    filename: "api_movies_insert.json",
    title: "Insert SQLite Table from Endpoint",
    mainDescription:
      "Insert a movie into a SQLite table with 1M rows. (Time in seconds)",
    description:
      "Inserting a movie into the database, handling 1250 concurrent connections and 100,000 HTTP requests. Database: 1M users, 1M movies, ~5M UserFavMovies.",
  },
  {
    filename: "static_file_index.json",
    title: "Serving Static Files",
    mainDescription:
      "Serve a static index.html (~5Mb) with HTML, CSS, and JPEG. (Time in seconds)",
    description:
      "Serving a static index.html file, handling 1250 concurrent connections and 100,000 HTTP requests. Database: 1M users, 1M movies, ~5M UserFavMovies.",
  },
  {
    filename: "api_user_populated_random.json",
    title: "Populated SQLite Query from Endpoint",
    mainDescription:
      "Query a populated SQLite row from an endpoint. (Time in seconds)",
    description:
      "Querying SQLite endpoint for populated user data, handling 1250 concurrent connections and 100,000 HTTP requests. Database: 1M users, 1M movies, ~5M UserFavMovies. A user and it's favourite movies (from another table) is queried & served.",
  },
];

export const getHttpChartData = (filename: string) => {
  switch (filename) {
    case "api_movies_query_date_genre.json":
      return [
        {
          name: "Bun",
          value: 23.872,
          rpsMax: 9421.337,
          successRate: 1.0,
          max: 678771,
        },
        {
          name: "Node.js",
          value: 33.004386261,
          rpsMax: 4073.862,
          successRate: 1.0,
          max: 32924356,
        },
      ];
    case "api_movies_insert.json":
      return [
        {
          name: "Bun",
          value: 137.716,
          rpsMax: 5218.251,
          successRate: 1.0,
          max: 4395123,
        },
        {
          name: "Node.js",
          value: 203.046,
          rpsMax: 15851.135,
          successRate: 0.98692,
          max: 172931823,
        },
      ];
    case "static_file_index.json":
      return [
        {
          name: "Bun",
          value: 4.755,
          rpsMax: 38054.907,
          successRate: 1.0,
          max: 148316,
        },
        {
          name: "Node.js",
          value: 14.913,
          rpsMax: 22904.528,
          successRate: 1.0,
          max: 14850376,
        },
      ];
    case "api_user_populated_random.json":
      return [
        {
          name: "Bun",
          value: 31.296,
          rpsMax: 26662.596,
          successRate: 1.0,
          max: 879260,
        },
        {
          name: "Node.js",
          value: 33.606,
          rpsMax: 4341.866,
          successRate: 1.0,
          max: 33518505,
        },
      ];
    default:
      return [];
  }
};
