import { HTTPChartDataPoint } from "@/types/benchmarks";

export const httpTestResults = [
  {
    filename: "api_movies_query_date_genre.json",
    title: "Query SQLite Table from Endpoint",
    mainDescription: "Query movies by date and genre. (Time in seconds)",
    description:
      "Bun was faster for querying movies from SQLite. It was about 1.38 times faster than Node.js. This test used 1250 connections at once and did 100,000 requests. The database had 1M users, 1M movies, and about 5M user favorite movies. This shows Bun is good at handling many database queries at the same time.",
  },
  {
    filename: "api_movies_insert.json",
    title: "Insert SQLite Table from Endpoint",
    mainDescription:
      "Add a new movie to a SQLite table with 1M rows. (Time in seconds)",
    description:
      "Bun was faster for adding new movies to SQLite. It was about 1.47 times faster than Node.js. This test also used 1250 connections and did 100,000 requests. Bun did all the requests, but Node.js missed about 1.31% of them. This shows Bun is better at handling many database writes at once.",
  },
  {
    filename: "static_file_index.json",
    title: "Serving Static Files",
    mainDescription:
      "Send a index.html file (~5Mb) with HTML, CSS, and JPEG. (Time in seconds)",
    description:
      "Bun was much faster for sending static files. It was about 3.14 times faster than Node.js. This test used the same number of connections and requests as before. This shows Bun is very good at quickly sending files to many users at once.",
  },
  {
    filename: "api_user_populated_random.json",
    title: "Populated SQLite Query from Endpoint",
    mainDescription:
      "Get a full SQLite row from an endpoint. (Time in seconds)",
    description:
      "Bun was a bit faster for getting complex data from SQLite. It was about 1.07 times faster than Node.js. This test got a user and their favorite movies from different tables. It shows Bun is slightly better at handling complex database queries with lots of users asking at once.",
  },
];

export const getHttpChartData = (filename: string): HTTPChartDataPoint[] => {
  switch (filename) {
    case "api_movies_query_date_genre.json":
      return [
        {
          name: "Bun",
          value: 23.872,
          rpsMax: 9421.337,
          successRate: 1.0,
        },
        {
          name: "Node.js",
          value: 33.004386261,
          rpsMax: 4073.862,
          successRate: 1.0,
        },
      ];
    case "api_movies_insert.json":
      return [
        {
          name: "Bun",
          value: 137.716,
          rpsMax: 5218.251,
          successRate: 1.0,
        },
        {
          name: "Node.js",
          value: 203.046,
          rpsMax: 15851.135,
          successRate: 0.98692,
        },
      ];
    case "static_file_index.json":
      return [
        {
          name: "Bun",
          value: 4.755,
          rpsMax: 38054.907,
          successRate: 1.0,
        },
        {
          name: "Node.js",
          value: 14.913,
          rpsMax: 22904.528,
          successRate: 1.0,
        },
      ];
    case "api_user_populated_random.json":
      return [
        {
          name: "Bun",
          value: 31.296,
          rpsMax: 26662.596,
          successRate: 1.0,
        },
        {
          name: "Node.js",
          value: 33.606,
          rpsMax: 4341.866,
          successRate: 1.0,
        },
      ];
    default:
      return [];
  }
};
