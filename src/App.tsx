import BenchmarkDashboard from "./BenchmarkDashboard";
import Footer from "./components/Footer";
import InformationTabs from "./InformationTabs";
import { Separator } from "./components/ui/separator";

export default function App() {
  return (
    <div className={`max-w-screen-md mx-auto p-4`}>
      <h1 className="text-3xl font-bold text-center mb-8">
        Bun vs Node.js Performance Comparison
      </h1>
      <BenchmarkDashboard />
      <Separator className="my-6" />
      <InformationTabs />
      <Footer />
    </div>
  );
}
