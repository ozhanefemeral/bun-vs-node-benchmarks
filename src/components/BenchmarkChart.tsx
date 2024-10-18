import { ChartDataPoint } from "@/types/benchmarks";
import {
  Bar,
  BarChart,
  Cell,
  ResponsiveContainer,
  XAxis,
  YAxis,
  LabelList,
} from "recharts";

interface BenchmarkChartProps {
  chartData: ChartDataPoint[];
  colors: {
    bunPink: string;
    nodeGreen: string;
    textColor: string;
    backgroundColor: string;
  };
  isHttpTest: boolean;
}

const BenchmarkChart: React.FC<BenchmarkChartProps> = ({
  chartData,
  colors,
  isHttpTest,
}) => {
  const getBarColor = (name: string) => {
    if (name.startsWith("Bun")) {
      return colors.bunPink;
    }
    return colors.nodeGreen;
  };

  const getBarFill = (name: string) => {
    if (name === "Bun (Node API)") {
      return "url(#stripes-bun-node)";
    }
    return getBarColor(name);
  };

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={chartData}>
        <XAxis dataKey="name" tick={{ fill: colors.textColor }} />
        <YAxis
          tick={{ fill: colors.textColor }}
          tickFormatter={(value) => (isHttpTest ? value : `${value}s`)}
          label={{
            value: isHttpTest ? "Requests per second" : "Time (s)",
            angle: -90,
            position: "insideLeft",
            style: { fill: colors.textColor },
          }}
        />
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
  );
};

export default BenchmarkChart;
