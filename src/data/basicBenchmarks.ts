export const basicTestResults = [
  {
    filename: "fibonacci.json",
    title: "Fibonacci",
    mainDescription:
      "Calculation of Fibonacci(40) with a recursive algorithm. (Time in seconds)",
    description:
      "Bun was faster for recursive Fibonacci calculation. It was about 1.62 times faster than Node.js.",
  },
  {
    filename: "large_array.json",
    title: "Large Array Operations",
    mainDescription:
      "Creating and manipulating a large array with 1 million elements. (Time in seconds)",
    description:
      "Bun was faster when iterating over a very large array and having a simple calculation over count. It was about 1.37 times faster than Node.js; even with a simple loop over array items.",
  },
  {
    filename: "stringify.json",
    title: "JSON Stringify",
    mainDescription: "Stringify a simple JavaScript object. (Time in seconds)",
    description:
      "Bun was much faster for a simple JSON stringify operation. It was about 2.13 times faster than Node.js. This shows Bun is very efficient at converting objects to JSON strings.",
  },
  {
    filename: "while_loop.json",
    title: "While Loop",
    mainDescription:
      "Perform a while loop with 1 million iterations. (Time in seconds)",
    description:
      "Bun was faster for simple while loop operations and counting index. It was about 1.6 times faster than Node.js. Running a plain while loop with Bun had increased performance.",
  },
];

export const getBasicChartData = (filename: string) => {
  switch (filename) {
    case "fibonacci.json":
      return [
        {
          name: "Bun",
          value: 1.195,
          stddev: 0.003,
          min: 1.193,
          max: 1.2,
        },
        {
          name: "Node.js",
          value: 1.942,
          stddev: 0.009,
          min: 1.937,
          max: 1.967,
        },
      ];
    case "large_array.json":
      return [
        {
          name: "Bun",
          value: 0.046,
          stddev: 0.005,
          min: 0.042,
          max: 0.063,
        },
        {
          name: "Node.js",
          value: 0.063,
          stddev: 0.001,
          min: 0.061,
          max: 0.066,
        },
      ];
    case "stringify.json":
      return [
        {
          name: "Bun",
          value: 0.015,
          stddev: 0.0,
          min: 0.014,
          max: 0.017,
        },
        {
          name: "Node.js",
          value: 0.032,
          stddev: 0.001,
          min: 0.031,
          max: 0.034,
        },
      ];
    case "while_loop.json":
      return [
        {
          name: "Bun",
          value: 0.02,
          stddev: 0.001,
          min: 0.019,
          max: 0.023,
        },
        {
          name: "Node.js",
          value: 0.032,
          stddev: 0.001,
          min: 0.031,
          max: 0.034,
        },
      ];
  }
};
