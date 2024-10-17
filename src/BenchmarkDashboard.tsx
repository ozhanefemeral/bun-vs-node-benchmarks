import { useState, useMemo } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useDarkMode } from "./hooks/useDarkMode";
import { testResults, getChartData } from "./data/benchmarkResults";
import BenchmarkChart from "./components/BenchmarkChart";
import TestInfo from "./components/TestInfo";

const BenchmarkDashboard = () => {
  const [selectedTest, setSelectedTest] = useState(testResults[0].filename);
  const { isDarkMode } = useDarkMode();

  const chartData = getChartData(selectedTest);
  const isHttpTest = selectedTest === "http_benchmark.json";

  const colors = useMemo(
    () => ({
      bunPink: isDarkMode ? "#f7c8e0" : "#f7c8c9",
      nodeGreen: isDarkMode ? "#68b984" : "#4caf50",
      textColor: isDarkMode ? "#ffffff" : "#000000",
      backgroundColor: isDarkMode ? "#000000" : "#ffffff",
    }),
    [isDarkMode]
  );

  return (
    <div className="flex flex-col">
      <div className="mb-4 mx-auto">
        <Select onValueChange={setSelectedTest} defaultValue={selectedTest}>
          <SelectTrigger className="w-[280px]">
            <SelectValue placeholder="Select a test" />
          </SelectTrigger>
          <SelectContent>
            {testResults.map((test) => (
              <SelectItem key={test.filename} value={test.filename}>
                {test.title}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <TestInfo selectedTest={selectedTest} />

      <div className="h-[400px]">
        <BenchmarkChart
          chartData={chartData}
          colors={colors}
          isHttpTest={isHttpTest}
        />
      </div>
    </div>
  );
};

export default BenchmarkDashboard;
