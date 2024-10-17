import { testResults } from "../data/benchmarkResults";

interface TestInfoProps {
  selectedTest: string;
}

const TestInfo: React.FC<TestInfoProps> = ({ selectedTest }) => {
  const testInfo = testResults.find((test) => test.filename === selectedTest);

  if (!testInfo) return null;

  return (
    <>
      <h2 className="text-xl font-bold text-center">{testInfo.title}</h2>
      <p className="mb-4 text-center">{testInfo.mainDescription}</p>
      <p className="mb-4 text-sm whitespace-pre-line">{testInfo.description}</p>
    </>
  );
};

export default TestInfo;
