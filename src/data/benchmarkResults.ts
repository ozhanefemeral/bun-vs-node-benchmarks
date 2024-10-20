import {
  TestResult,
  BenchmarkType,
  HTTPChartDataPoint,
  ChartDataPoint,
} from "../types/benchmarks";
import { basicTestResults, getBasicChartData } from "./basicBenchmarks";
import { httpTestResults, getHttpChartData } from "./httpBenchmarks";
import { fileTestResults, getFileChartData } from "./fileBenchmarks";
import {
  packageManagerTestResults,
  getPackageManagerChartData,
} from "./packageManagerBenchmarks";

export const testResults: TestResult[] = [
  ...basicTestResults.map((i) => ({ ...i, type: "basic" as const })),
  ...httpTestResults.map((i) => ({ ...i, type: "http" as const })),
  ...fileTestResults.map((i) => ({ ...i, type: "file" as const })),
  ...packageManagerTestResults.map((i) => ({
    ...i,
    type: "package-manager" as const,
  })),
];

export const getChartData = (
  filename: string,
  type: BenchmarkType
): HTTPChartDataPoint[] | ChartDataPoint[] => {
  switch (type) {
    case "basic":
      return getBasicChartData(filename);
    case "http":
      return getHttpChartData(filename);
    case "file":
      return getFileChartData(filename);
    case "package-manager":
      return getPackageManagerChartData(filename);
    default:
      return [];
  }
};
