import { ChartDataPoint } from "@/types/benchmarks";

export const fileTestResults = [
  {
    filename: "compress.json",
    title: "File Compression",
    mainDescription: "Read and compress a big (~350Mb) file. (Time in seconds)",
    description:
      "Bun uses it's native Gzip implementation for compression, while we used 'zlib' library for Node.js. Running Node.js code with Bun was about 1.2 times faster than Node.js itself, while rewriting it with Bun libraries made it slightly slower.",
  },
  {
    filename: "single_large_json_parse.json",
    title: "Large JSON Parse",
    mainDescription:
      "Read and parse a big (~350Mb) JSON file. (Time in seconds)",
    description:
      "Bun was slightly faster for parsing large JSON. Bun's own API was about 1.47 times faster than Node.js.",
  },
  {
    filename: "small_files_sequential.json",
    title: "Small Files (Sequential)",
    mainDescription:
      "Read and write many (100.000) small files (~1Kb) one by one. (Time in seconds)",
    description:
      "Bun with Node API was faster for sequential small file operations. It was about 1.24 times faster than Node.js. However, Bun runtime with Bun native libraries were drastically slower. Seems like it is best to avoid Bun API for reading small files in a directory, sequentially.",
  },
  {
    filename: "small_files_parallel.json",
    title: "Small Files (Parallel)",
    mainDescription:
      "Read and write many (100.000) small files (~1Kb) at the same time. (Time in seconds)",
    description:
      "Bun was much faster for parallel small file operations. Bun's own API was about 5.86 times faster than Node.js. In this benchmark we read all files in a directory, and parse content of files.",
  },
  {
    filename: "write_large_file.json",
    title: "Write Large File",
    mainDescription: "Write a big (~350Mb) JSON file. (Time in seconds)",
    description:
      "Bun was faster for writing large files. Bun's own API was about 2.28 times faster than Node.js. Running the same Node.js code with Bun as the runtime is still 1.66 times faster.",
  },
  {
    filename: "write_small_files.json",
    title: "Write Small Files",
    mainDescription: "Write 100,000 small JSON files. (Time in seconds)",
    description:
      "Bun was much faster for writing many small files. Bun with Node API was about 3.63 times faster than plain Node.js. This shows Bun is very good at managing many small write operations.",
  },
  {
    filename: "very_large_csv_read.json",
    title: "Read Very Large CSV File",
    mainDescription: "Read a very big CSV file (1GB). (Time in seconds)",
    description:
      "Bun with Bun API was significantly faster for reading a very large CSV file, being about 2.81 times faster than Node.js. Interestingly, running Node.js code with Bun as the runtime was slower than both Bun with Bun API and Node.js itself.",
  },
  {
    filename: "very_large_json_read.json",
    title: "Read Very Large JSON File",
    mainDescription: "Read a very big JSON file (1GB). (Time in seconds)",
    description:
      "Bun with Bun API was the fastest for reading a very large JSON file, being about 1.25 times faster than Node.js. Interestingly, running Node.js code with Bun as the runtime was slower than both Bun with Bun API and Node.js itself.",
  },
];

export const getFileChartData = (filename: string): ChartDataPoint[] => {
  switch (filename) {
    case "compress.json":
      return [
        {
          name: "Bun with Bun API",
          value: 8.854,
          stddev: 0.017,
          min: 8.835,
          max: 8.879,
        },
        {
          name: "Bun with Node API",
          value: 8.706,
          stddev: 0.029,
          min: 8.662,
          max: 8.769,
        },
        {
          name: "Node.js",
          value: 10.478,
          stddev: 0.04,
          min: 10.413,
          max: 10.563,
        },
      ];
    case "single_large_json_parse.json":
      return [
        {
          name: "Bun with Bun API",
          value: 4.174,
          stddev: 0.085,
          min: 4.017,
          max: 4.306,
        },
        {
          name: "Bun with Node API",
          value: 4.263,
          stddev: 0.079,
          min: 4.186,
          max: 4.401,
        },
        {
          name: "Node.js",
          value: 6.157,
          stddev: 0.091,
          min: 6.06,
          max: 6.368,
        },
      ];
    case "small_files_sequential.json":
      return [
        {
          name: "Bun with Bun API",
          value: 5.95,
          stddev: 0.122,
          min: 5.865,
          max: 6.285,
        },
        {
          name: "Bun with Node API",
          value: 2.024,
          stddev: 0.035,
          min: 1.976,
          max: 2.069,
        },
        {
          name: "Node.js",
          value: 2.507, // This is a placeholder value
          stddev: 0.054, // This is a placeholder value
          min: 2.453, // This is a placeholder value
          max: 2.561, // This is a placeholder value
        },
      ];
    case "small_files_parallel.json":
      return [
        {
          name: "Bun with Bun API",
          value: 2.267,
          stddev: 0.026,
          min: 2.233,
          max: 2.305,
        },
        {
          name: "Bun with Node API",
          value: 2.579,
          stddev: 0.023,
          min: 2.53,
          max: 2.618,
        },
        {
          name: "Node.js",
          value: 13.275,
          stddev: 0.12,
          min: 13.125,
          max: 13.471,
        },
      ];
    case "write_large_file.json":
      return [
        {
          name: "Bun with Bun API",
          value: 5.655,
          stddev: 0.167,
          min: 5.373,
          max: 5.949,
        },
        {
          name: "Bun with Node API",
          value: 7.793,
          stddev: 1.26,
          min: 6.619,
          max: 10.259,
        },
        {
          name: "Node.js",
          value: 12.913,
          stddev: 1.445,
          min: 11.256,
          max: 16.194,
        },
      ];
    case "write_small_files.json":
      return [
        {
          name: "Bun with Bun API",
          value: 5.007,
          stddev: 0.962,
          min: 3.383,
          max: 6.46,
        },
        {
          name: "Bun with Node API",
          value: 4.366,
          stddev: 0.642,
          min: 3.431,
          max: 5.605,
        },
        {
          name: "Node.js",
          value: 15.836,
          stddev: 1.531,
          min: 14.484,
          max: 18.887,
        },
      ];
    case "very_large_csv_read.json":
      return [
        {
          name: "Bun with Bun API",
          value: 3.642,
          stddev: 0.109,
          min: 3.461,
          max: 3.912,
        },
        {
          name: "Bun with Node API",
          value: 19.151,
          stddev: 0.566,
          min: 18.478,
          max: 23.612,
        },
        {
          name: "Node with Node API",
          value: 10.245,
          stddev: 0.387,
          min: 9.604,
          max: 11.525,
        },
      ];
    case "very_large_json_read.json":
      return [
        {
          name: "Bun with Bun API",
          value: 18.254,
          stddev: 0.305,
          min: 17.553,
          max: 18.913,
        },
        {
          name: "Bun with Node API",
          value: 31.023,
          stddev: 0.851,
          min: 29.708,
          max: 36.362,
        },
        {
          name: "Node with Node API",
          value: 22.896,
          stddev: 0.691,
          min: 21.728,
          max: 27.063,
        },
      ];
  }
  return [];
};
