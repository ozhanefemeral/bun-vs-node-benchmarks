export const testResults = [
  {
    filename: "single_large_json_parse.json",
    title: "Single Large JSON Parse",
    mainDescription:
      "Read and parse a ~400MB JSON file. (Execution Time in seconds)",
    description:
      "For this task, we have three scenarios:\n" +
      "a) Bun with Bun API performs best, parsing the JSON in 2.10 seconds.\n" +
      "b) Bun using Node API comes in second, taking 2.15 seconds.\n" +
      "c) Node.js is the slowest, requiring 3.05 seconds.\n" +
      "This means Bun with its own API is about 1.45 times faster than Node.js for parsing large JSON files. Even when using the Node API, Bun still outperforms Node.js by about 1.42 times.",
  },
  {
    filename: "fibonacci.json",
    title: "Fibonacci",
    mainDescription:
      "Calculation of Fibonacci(40) with a recursive algorithm. (Execution Time in seconds)",
    description:
      "Bun performs significantly better, completing the calculation in 0.86 seconds. Node.js, on the other hand, takes 1.29 seconds. This means Bun is about 1.5 times faster than Node.js for this recursive Fibonacci calculation.",
  },
  {
    filename: "http_benchmark.json",
    title: "HTTP Benchmark",
    mainDescription:
      "Performance of serving a HTTP Server with static files (~5MB, HTML including CSS and JPEG files). (Requests per Second)",
    description:
      "Bun performs significantly better, handling 63,951.04 requests per second. Node.js, on the other hand, manages 22,054.25 requests per second. This means Bun is nearly three times faster than Node.js in this specific benchmark.",
  },
];

export const getChartData = (filename: string) => {
  switch (filename) {
    case "single_large_json_parse.json":
      return [
        {
          name: "Bun (Bun API)",
          value: 2.0972832842850004,
          stddev: 0.06300044692874336,
          min: 2.04,
          max: 2.29,
        },
        {
          name: "Bun (Node API)",
          value: 2.145782596160001,
          stddev: 0.11800509710607542,
          min: 2.02,
          max: 2.52,
        },
        {
          name: "Node.js",
          value: 3.04805889521,
          stddev: 0.05282880491304688,
          min: 2.97,
          max: 3.21,
        },
      ];
    case "fibonacci.json":
      return [
        {
          name: "Bun",
          value: 0.85509487504,
          stddev: 0.05559936313362806,
          min: 0.79,
          max: 0.97,
        },
        {
          name: "Node.js",
          value: 1.2903605514399998,
          stddev: 0.051305833617070355,
          min: 1.2,
          max: 1.38,
        },
      ];
    case "http_benchmark.json":
      return [
        {
          name: "Bun",
          value: 63951.04489125367,
          stddev: 9851.19169411234,
          max: 76790.99,
          successRate: 100,
        },
        {
          name: "Node.js",
          value: 22054.249690692806,
          stddev: 4039.5904303526772,
          max: 27545.71,
          successRate: 100,
        },
      ];
    default:
      return [];
  }
};
