export const fileTestResults = [
  {
    filename: "compress.json",
    title: "File Compression",
    mainDescription:
      "Compress a large file using gzip. (Execution Time in seconds)",
    description:
      "Bun with Bun API completes the compression in 8.854 seconds, Bun with Node API takes 8.706 seconds, while Node.js takes 10.478 seconds. This shows that Bun's Node API compatibility is slightly faster than its native API for this operation, and both are significantly faster than Node.js.",
  },
  {
    filename: "single_large_json_parse.json",
    title: "Large JSON Parse",
    mainDescription: "Parse a large JSON file. (Execution Time in seconds)",
    description:
      "Bun with Bun API parses the JSON in 4.174 seconds, Bun with Node API takes 4.521 seconds, while Node.js takes 4.522 seconds. This demonstrates that Bun's native API is faster for JSON parsing, while its Node API compatibility performs similarly to Node.js.",
  },
  {
    filename: "small_files_sequential.json",
    title: "Small Files (Sequential)",
    mainDescription:
      "Read and write many small files sequentially. (Execution Time in seconds)",
    description:
      "Bun with Bun API completes the operation in 5.950 seconds, Bun with Node API takes 2.024 seconds, while Node.js takes 2.507 seconds (placeholder value). This shows that Bun's Node API compatibility is significantly faster for sequential small file operations, even outperforming Node.js.",
  },
  {
    filename: "small_files_parallel.json",
    title: "Small Files (Parallel)",
    mainDescription:
      "Read and write many small files in parallel. (Execution Time in seconds)",
    description:
      "Bun with Bun API completes the operation in 2.267 seconds, Bun with Node API takes 2.579 seconds, while Node.js takes 13.275 seconds. This demonstrates that both Bun APIs significantly outperform Node.js for parallel small file operations, with Bun's native API being the fastest.",
  },
  {
    filename: "write_large_file.json",
    title: "Write Large File",
    mainDescription:
      "Write a large JSON file with 400,000 objects. (Execution Time in seconds)",
    description:
      "Bun with Bun API writes the file in 5.655 seconds, Bun with Node API takes 7.793 seconds, while Node.js takes 12.913 seconds. This shows that Bun's native API is significantly faster for writing large files, with its Node API compatibility also outperforming Node.js.",
  },
  {
    filename: "write_small_files.json",
    title: "Write Small Files",
    mainDescription:
      "Write 100,000 small JSON files. (Execution Time in seconds)",
    description:
      "Bun with Bun API completes the operation in 5.007 seconds, Bun with Node API takes 4.366 seconds, while Node.js takes 15.836 seconds. This demonstrates that both Bun APIs significantly outperform Node.js for writing many small files, with Bun's Node API compatibility being slightly faster than its native API for this specific task.",
  },
  {
    filename: "very_large_csv_read.json",
    title: "Very Large CSV File Read",
    mainDescription:
      "Read a very large CSV file (1GB). (Execution Time in seconds)",
    description:
      "Bun with Bun API reads the file in 1.638 seconds, Bun with Node API takes 1.639 seconds, while Node.js takes 2.037 seconds. This demonstrates that both Bun APIs significantly outperform Node.js for reading very large CSV files, with nearly identical performance between Bun's native and Node-compatible APIs.",
  },
  {
    filename: "very_large_json_read.json",
    title: "Very Large JSON File Read",
    mainDescription:
      "Read a very large JSON file (1GB). (Execution Time in seconds)",
    description:
      "Bun with Bun API reads the file in 1.638 seconds, Bun with Node API takes 1.639 seconds, while Node.js takes 2.037 seconds. This demonstrates that both Bun APIs significantly outperform Node.js for reading very large JSON files, with nearly identical performance between Bun's native and Node-compatible APIs.",
  },
];

export const getFileChartData = (filename: string) => {
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
          value: 2.2671864726599997,
          stddev: 0.02584562252662924,
          min: 2.23297956946,
          max: 2.30503148846,
        },
        {
          name: "Bun with Node API",
          value: 2.57888649276,
          stddev: 0.023491026050649615,
          min: 2.52980498746,
          max: 2.61780863546,
        },
        {
          name: "Node.js",
          value: 13.27471116566,
          stddev: 0.12035138598410554,
          min: 13.124649292460001,
          max: 13.47130707246,
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
          value: 1.638,
          stddev: 0.037,
          min: 1.594,
          max: 1.708,
        },
        {
          name: "Bun with Node API",
          value: 1.639,
          stddev: 0.037,
          min: 1.595,
          max: 1.709,
        },
        {
          name: "Node.js",
          value: 2.037,
          stddev: 0.037,
          min: 1.993,
          max: 2.107,
        },
      ];
    case "very_large_json_read.json":
      return [
        {
          name: "Bun with Bun API",
          value: 1.638,
          stddev: 0.037,
          min: 1.594,
          max: 1.708,
        },
        {
          name: "Bun with Node API",
          value: 1.639,
          stddev: 0.037,
          min: 1.595,
          max: 1.709,
        },
        {
          name: "Node.js",
          value: 2.037,
          stddev: 0.037,
          min: 1.993,
          max: 2.107,
        },
      ];
  }
};
