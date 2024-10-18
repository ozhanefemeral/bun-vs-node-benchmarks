export const basicTestResults = [
  {
    filename: "fibonacci.json",
    title: "Fibonacci",
    mainDescription:
      "Calculation of Fibonacci(40) with a recursive algorithm. (Execution Time in seconds)",
    description:
      "Bun completes the calculation in 1.20 seconds, while Node.js takes 1.94 seconds. This means Bun is approximately 1.62 times faster than Node.js for this recursive Fibonacci calculation.",
  },
  {
    filename: "large_array.json",
    title: "Large Array Operations",
    mainDescription:
      "Creating and manipulating a large array with 10 million elements. (Execution Time in seconds)",
    description:
      "Bun performs the operations in 0.046 seconds, while Node.js takes 0.063 seconds. This indicates that Bun is about 1.37 times faster than Node.js for large array operations.",
  },
  {
    filename: "stringify.json",
    title: "JSON Stringify",
    mainDescription:
      "Stringify a simple JavaScript object. (Execution Time in seconds)",
    description:
      "Bun completes the stringify operation in 0.015 seconds, while Node.js takes 0.032 seconds. This shows that Bun is approximately 2.13 times faster than Node.js for JSON stringify operations on large objects.",
  },
  {
    filename: "while_loop.json",
    title: "While Loop",
    mainDescription:
      "Perform a while loop with 1 million iterations. (Execution Time in seconds)",
    description:
      "Bun executes the while loop in 0.020 seconds, while Node.js takes 0.032 seconds. This demonstrates that Bun is about 1.6 times faster than Node.js for this simple while loop operation.",
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
