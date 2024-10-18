import { useState, useEffect } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
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
    const isCurrentTestValid = filteredTests.some(
      (test) => test.filename === selectedTest
    );

    if (!isCurrentTestValid && filteredTests.length > 0) {
      setSelectedTest(filteredTests[0].filename);
    }
  }, [selectedType, filteredTests, selectedTest]);

  const selectedTestInfo = testResults.find(
    (test) => test.filename === selectedTest
  );
  const chartData = getChartData(
    selectedTest,
    selectedTestInfo?.type ?? "basic"
  );
  const isHttpTest = selectedTestInfo?.type === "http";

  const colors = {
    bunPink: isDarkMode ? "#f7c8e0" : "#f472b6",
    nodeGreen: isDarkMode ? "#68b984" : "#4caf50",
    textColor: isDarkMode ? "#ffffff" : "#000000",
    backgroundColor: isDarkMode ? "#000000" : "#ffffff",
  };

  const handleSeeCode = () => {
    const baseUrl =
      "https://github.com/ozhanefemeral/bun-vs-node/tree/main/tests/";
    let url = baseUrl;

    switch (selectedType) {
      case "basic":
        url += `basic/${selectedTest.replace(".json", ".js")}`;
        break;
      case "file":
        if (selectedTest.startsWith("very_large_")) {
          url += `file/very_large_file_read`;
        } else {
          url += `file/${selectedTest.replace(".json", "")}`;
        }
        break;
      // Add cases for other types if needed
    }

    window.open(url, "_blank");
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

        <Button onClick={handleSeeCode}>See Code</Button>
      </div>

      <TestInfo selectedTest={selectedTest} />

      {chartData && (
        <div className="h-[400px]">
          <BenchmarkChart
            chartData={chartData}
            colors={colors}
            isHttpTest={isHttpTest}
          />
        </div>
      )}
    </div>
  );
};

export default BenchmarkDashboard;
