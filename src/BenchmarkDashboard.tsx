import { useState, useMemo, useEffect } from "react";
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
  const [selectedType, setSelectedType] = useState<string>("basic");
  const [selectedTest, setSelectedTest] = useState("");
  const { isDarkMode } = useDarkMode();

  const filteredTests = testResults.filter(
    (test) => test.type === selectedType
  );

  useEffect(() => {
    if (filteredTests.length > 0) {
      setSelectedTest(filteredTests[0].filename);
    }
  }, [selectedType, filteredTests]);

  const selectedTestInfo = testResults.find(
    (test) => test.filename === selectedTest
  );
  const chartData = getChartData(selectedTest, selectedTestInfo?.type);
  const isHttpTest = selectedTestInfo?.type === "http";

  const colors = {
    bunPink: isDarkMode ? "#f7c8e0" : "#f472b6",
    nodeGreen: isDarkMode ? "#68b984" : "#4caf50",
    textColor: isDarkMode ? "#ffffff" : "#000000",
    backgroundColor: isDarkMode ? "#000000" : "#ffffff",
  };

  return (
    <div className="flex flex-col">
      <div className="mb-4 mx-auto flex space-x-4">
        <Select onValueChange={setSelectedType} defaultValue={selectedType}>
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Select benchmark type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="basic">Basic</SelectItem>
            <SelectItem value="file">File</SelectItem>
            <SelectItem value="http" disabled>
              HTTP{" "}
              <span className="ml-2 text-xs text-muted-foreground">(soon)</span>
            </SelectItem>
            <SelectItem value="package-manager">Package Manager</SelectItem>
          </SelectContent>
        </Select>

        <Select onValueChange={setSelectedTest} value={selectedTest}>
          <SelectTrigger className="w-[280px]">
            <SelectValue placeholder="Select a test" />
          </SelectTrigger>
          <SelectContent>
            {filteredTests.map((test) => (
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
