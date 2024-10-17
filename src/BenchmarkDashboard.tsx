import { useState, useMemo } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Bar,
  BarChart,
  Cell,
  ResponsiveContainer,
  XAxis,
  YAxis,
  LabelList,
} from "recharts";
import { useDarkMode } from "./hooks/useDarkMode";

const testResults = [
  {
    filename: "single_large_json_parse.json",
    title: "Single Large JSON Parse",
  },
  { filename: "fibonacci.json", title: "Fibonacci" },
  { filename: "http_benchmark.json", title: "HTTP Benchmark" },
];

const BenchmarkDashboard = () => {
  const [selectedTest, setSelectedTest] = useState(testResults[0].filename);
  const { isDarkMode } = useDarkMode();

  const getChartData = (filename) => {
    if (filename === "single_large_json_parse.json") {
      return [
        {
          name: "Bun (Bun API)",
          value: 2.0972832842850004,
          stddev: 0.06300044692874336,
          min: 2.04,
          max: 2.29,
        },
        {
          name: "Bun (Node API)",
          value: 2.145782596160001,
          stddev: 0.11800509710607542,
          min: 2.02,
          max: 2.52,
        },
        {
          name: "Node.js",
          value: 3.04805889521,
          stddev: 0.05282880491304688,
          min: 2.97,
          max: 3.21,
        },
      ];
    } else if (filename === "fibonacci.json") {
      return [
        {
          name: "Bun",
          value: 0.85509487504,
          stddev: 0.05559936313362806,
          min: 0.79,
          max: 0.97,
        },
        {
          name: "Node.js",
          value: 1.2903605514399998,
          stddev: 0.051305833617070355,
          min: 1.2,
          max: 1.38,
        },
      ];
    } else if (filename === "http_benchmark.json") {
      return [
        {
          name: "Bun",
          value: 63951.04489125367,
          stddev: 9851.19169411234,
          max: 76790.99,
          successRate: 100,
        },
        {
          name: "Node.js",
          value: 22054.249690692806,
          stddev: 4039.5904303526772,
          max: 27545.71,
          successRate: 100,
        },
      ];
    }
    return [];
  };

  const chartData = getChartData(selectedTest);
  const isHttpTest = selectedTest === "http_benchmark.json";

  const getTestInfo = (filename) => {
    const test = testResults.find((t) => t.filename === filename);
    switch (filename) {
      case "single_large_json_parse.json":
        return {
          title: test.title,
          description:
            "Read and parse a ~400MB JSON file. (Execution Time in seconds)",
        };
      case "fibonacci.json":
        return {
          title: test.title,
          description:
            "Calculation of Fibonacci(40) with a recursive algorithm. (Execution Time in seconds)",
        };
      case "http_benchmark.json":
        return {
          title: test.title,
          description:
            "Performance of serving a HTTP Server with static files (~5MB, HTML including CSS and JPEG files). (Requests per Second)",
        };
      default:
        return { title: "", description: "" };
    }
  };

  const { title, description } = getTestInfo(selectedTest);

  const colors = useMemo(
    () => ({
      bunPink: isDarkMode ? "#f7c8e0" : "#f7c8c9",
      nodeGreen: isDarkMode ? "#68b984" : "#4caf50",
      textColor: isDarkMode ? "#ffffff" : "#000000",
      backgroundColor: isDarkMode ? "#000000" : "#ffffff",
    }),
    [isDarkMode]
  );

  const getBarColor = (name) => {
    if (name.startsWith("Bun")) {
      return colors.bunPink;
    }
    return colors.nodeGreen;
  };

  const getBarFill = (name) => {
    if (name === "Bun (Node API)") {
      return "url(#stripes-bun-node)";
    }
    return getBarColor(name);
  };

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

      <h2 className="text-xl font-bold mb-2 text-center">{title}</h2>
      <p className="mb-4 text-center">{description}</p>

      <div className="h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData}>
            <XAxis dataKey="name" tick={{ fill: colors.textColor }} />
            <YAxis tick={{ fill: colors.textColor }} />
            <defs>
              <pattern
                id="stripes-bun-node"
                patternUnits="userSpaceOnUse"
                width="10"
                height="10"
                patternTransform="rotate(45)"
              >
                <rect width="10" height="10" fill={colors.bunPink} />
                <line
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="10"
                  stroke={colors.nodeGreen}
                  strokeWidth="8"
                />
              </pattern>
            </defs>
            <Bar dataKey="value">
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={getBarFill(entry.name)} />
              ))}
              <LabelList
                dataKey="value"
                position="insideTop"
                content={({ x, y, width, height, value, min, max }) => {
                  const xPos = typeof x === "number" ? x : 0;
                  const yPos = typeof y === "number" ? y : 0;
                  const barWidth = typeof width === "number" ? width : 0;

                  const unit = isHttpTest ? " RPS" : "s";
                  const formattedValue = Number(value).toFixed(2) + unit;
                  const formattedMin = min ? Number(min).toFixed(2) + unit : "";
                  const formattedMax = max ? Number(max).toFixed(2) + unit : "";
                  const rangeText =
                    formattedMin && formattedMax
                      ? `${formattedMin} - ${formattedMax}`
                      : "";

                  return (
                    <g>
                      <rect
                        x={xPos + barWidth / 2 - 45}
                        y={yPos + 5}
                        width="90"
                        height="45"
                        fill={`${colors.backgroundColor}80`}
                        rx="4"
                        ry="4"
                      />
                      <text
                        x={xPos + barWidth / 2}
                        y={yPos + 20}
                        fill={colors.textColor}
                        textAnchor="middle"
                        fontSize="12"
                      >
                        {formattedValue}
                      </text>
                      <text
                        x={xPos + barWidth / 2}
                        y={yPos + 35}
                        fill={colors.textColor}
                        textAnchor="middle"
                        fontSize="10"
                      >
                        {rangeText}
                      </text>
                    </g>
                  );
                }}
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BenchmarkDashboard;
