export type BenchmarkType = "file" | "basic" | "http" | "package-manager";

export interface TestResult {
  filename: string;
  title: string;
  mainDescription: string;
  description: string;
  type: BenchmarkType;
}

export interface ChartDataPoint {
  name: string;
  value: number;
  stddev: number;
  min: number;
  max: number;
}

export interface ChartData {
  type: BenchmarkType;
  data: ChartDataPoint[];
}
