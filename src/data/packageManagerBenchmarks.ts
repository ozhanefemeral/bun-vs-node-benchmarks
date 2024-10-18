export const packageManagerTestResults = [
  {
    filename: "svelte_install_with_lock.json",
    title: "Svelte Package Installation (with lock)",
    mainDescription:
      "Install packages for a Svelte project with an existing lock file. (Execution Time in seconds)",
    description:
      "Bun completes the installation in 1.229 seconds, while npm takes 4.521 seconds. This shows that Bun is approximately 3.68 times faster than npm for installing packages in a Svelte project with an existing lock file.",
  },
  {
    filename: "svelte_install_without_lock.json",
    title: "Svelte Package Installation (without lock)",
    mainDescription:
      "Install packages for a Svelte project without an existing lock file. (Execution Time in seconds)",
    description:
      "Bun completes the installation in 1.161 seconds, while npm takes 14.843 seconds. This demonstrates that Bun is about 12.78 times faster than npm for installing packages in a Svelte project without an existing lock file.",
  },
  {
    filename: "nextjs_install_with_lock.json",
    title: "Next.js Package Installation (with lock)",
    mainDescription:
      "Install packages for a Next.js project with an existing lock file. (Execution Time in seconds)",
    description:
      "Bun completes the installation in 0.312 seconds, while npm takes 10.798 seconds. This indicates that Bun is approximately 34.63 times faster than npm for installing packages in a Next.js project with an existing lock file.",
  },
  {
    filename: "nextjs_install_without_lock.json",
    title: "Next.js Package Installation (without lock)",
    mainDescription:
      "Install packages for a Next.js project without an existing lock file. (Execution Time in seconds)",
    description:
      "Bun completes the installation in 0.348 seconds, while npm takes 16.087 seconds. This shows that Bun is about 46.21 times faster than npm for installing packages in a Next.js project without an existing lock file.",
  },
  {
    filename: "expo_react_native_install_with_lock.json",
    title: "Expo React Native Package Installation (with lock)",
    mainDescription:
      "Install packages for an Expo React Native project with an existing lock file. (Execution Time in seconds)",
    description:
      "Bun completes the installation in 0.929 seconds, while npm takes 18.429 seconds. This demonstrates that Bun is approximately 19.83 times faster than npm for installing packages in an Expo React Native project with an existing lock file.",
  },
  {
    filename: "expo_react_native_install_without_lock.json",
    title: "Expo React Native Package Installation (without lock)",
    mainDescription:
      "Install packages for an Expo React Native project without an existing lock file. (Execution Time in seconds)",
    description:
      "Bun completes the installation in 1.010 seconds, while npm takes 36.393 seconds. This indicates that Bun is about 36.03 times faster than npm for installing packages in an Expo React Native project without an existing lock file.",
  },
  {
    filename: "bloated_project_add_package.json",
    title: "Add Package to Bloated Project",
    mainDescription:
      "Add a single package (moment) to a project with many existing dependencies. (Execution Time in seconds)",
    description:
      "Bun completes the operation in 0.057 seconds, while npm takes 2.427 seconds. This shows that Bun is approximately 42.96 times faster than npm for adding a single package to a project with many existing dependencies.",
  },
];

export const getPackageManagerChartData = (filename: string) => {
  switch (filename) {
    case "svelte_install_with_lock.json":
      return [
        {
          name: "Bun",
          value: 1.229,
          stddev: 0.143,
          min: 1.126,
          max: 1.655,
        },
        {
          name: "npm",
          value: 4.521,
          stddev: 0.101,
          min: 4.405,
          max: 4.878,
        },
      ];
    case "svelte_install_without_lock.json":
      return [
        {
          name: "Bun",
          value: 1.161,
          stddev: 0.034,
          min: 1.123,
          max: 1.247,
        },
        {
          name: "npm",
          value: 14.843,
          stddev: 16.219,
          min: 10.277,
          max: 83.557,
        },
      ];
    case "nextjs_install_with_lock.json":
      return [
        {
          name: "Bun",
          value: 0.312,
          stddev: 0.069,
          min: 0.27,
          max: 0.5,
        },
        {
          name: "npm",
          value: 10.798,
          stddev: 0.107,
          min: 10.638,
          max: 11.053,
        },
      ];
    case "nextjs_install_without_lock.json":
      return [
        {
          name: "Bun",
          value: 0.348,
          stddev: 0.092,
          min: 0.293,
          max: 0.642,
        },
        {
          name: "npm",
          value: 16.087,
          stddev: 3.131,
          min: 15.182,
          max: 29.366,
        },
      ];
    case "expo_react_native_install_with_lock.json":
      return [
        {
          name: "Bun",
          value: 0.929,
          stddev: 0.203,
          min: 0.745,
          max: 1.429,
        },
        {
          name: "npm",
          value: 18.429,
          stddev: 1.258,
          min: 17.413,
          max: 22.667,
        },
      ];
    case "expo_react_native_install_without_lock.json":
      return [
        {
          name: "Bun",
          value: 1.01,
          stddev: 0.363,
          min: 0.79,
          max: 1.984,
        },
        {
          name: "npm",
          value: 36.393,
          stddev: 13.69,
          min: 31.097,
          max: 78.62,
        },
      ];
    case "bloated_project_add_package.json":
      return [
        {
          name: "Bun",
          value: 0.057,
          stddev: 0.03,
          min: 0.048,
          max: 0.243,
        },
        {
          name: "npm",
          value: 2.427,
          stddev: 0.122,
          min: 2.341,
          max: 2.912,
        },
      ];
    default:
      return [];
  }
};
