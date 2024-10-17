import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

const InformationTabs: React.FC = () => {
  return (
    <Tabs defaultValue="about" className="w-full">
      <TabsList className="grid w-full grid-cols-4">
        <TabsTrigger value="about">About</TabsTrigger>
        <TabsTrigger value="system-specs">System Specs</TabsTrigger>
        <TabsTrigger value="tools-versions">Tools & Versions</TabsTrigger>
        <TabsTrigger value="bun-node">Bun with Node</TabsTrigger>
      </TabsList>
      <TabsContent value="about">
        <Card>
          <CardContent className="space-y-2 pt-6">
            <h2 className="text-2xl font-bold">About This Project</h2>
            <p>
              This project aims to compare the performance of Bun and Node.js
              across various aspects. There are benchmarks for different
              scenarios, including simple loops, recursive functions,
              reading/writing large files and too many small files, as a HTTP
              server and as a package manager.
            </p>
            <br />
            <h4 className="text-lg font-semibold">Testing Process</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                All tests are automated using Bash scripts for environment
                preparation, test execution, system usage monitoring, and report
                generation.
              </li>
              <li>
                Each test scenario includes a warm-up phase (not included in
                results) followed by 100 iterations for both Bun and Node.js.
              </li>
              <li>Tests are run sequentially to prevent interference.</li>
            </ul>
            <br />

            <p>
              For more details, visit the{" "}
              <a
                href="https://github.com/ozhanefemeral/bun-vs-node"
                target="_blank"
                rel="noopener noreferrer"
                className="text-node-green hover:underline"
              >
                GitHub repository
              </a>
              .
            </p>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="system-specs">
        <Card>
          <CardContent className="space-y-2 pt-6">
            <h3 className="text-lg font-semibold">System Specifications</h3>
            <p>The test environment specifications are as follows:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>8GB RAM</li>
              <li>4 Dedicated Intel CPUs</li>
              <li>Up to 2GBPs bandwidth</li>
              <li>50GB SSD storage</li>
            </ul>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="tools-versions">
        <Card>
          <CardContent className="space-y-4 pt-6">
            <div>
              <h3 className="text-lg font-semibold">Tools and Technologies</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Hyperfine: For precise timing measurements</li>
                <li>Bombardier: For HTTP server stress testing</li>
                <li>Digital Ocean: Cloud platform for HTTP server tests</li>
                <li>Ubuntu: Operating system for test environments</li>
                <li>Git: Version control system</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Versions</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Node.js: v20.16.0 (released 2024-07-24)</li>
                <li>NPM: v10.8.1</li>
                <li>Bun: v1.1.21 (released 2024-07-20)</li>
                <li>Ubuntu: 24.04 LTS (on Digital Ocean)</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="bun-node">
        <Card>
          <CardContent className="space-y-4 pt-6">
            <p>
              Bun provides alternative implementations for many Node.js APIs.
              While JavaScript logic remains consistent, Bun offers its own
              optimized versions for operations such as file system access and
              HTTP server functionality.
            </p>
            <div>
              <h3 className="text-lg font-semibold">
                Comparison: File Reading
              </h3>
              <h4 className="text-md font-medium mt-2">
                Node.js Implementation:
              </h4>
              <pre className="bg-muted p-2 rounded-md">
                <code>
                  {`const fs = require('fs');
const data = fs.readFileSync('file.txt', 'utf8');
console.log(data);`}
                </code>
              </pre>
              <h4 className="text-md font-medium mt-2">Bun Implementation:</h4>
              <pre className="bg-muted p-2 rounded-md">
                <code>
                  {`const data = Bun.file('file.txt').text();
console.log(data);`}
                </code>
              </pre>
            </div>
            <p>
              This comparison allows for assessment of potential performance
              improvements when transitioning to Bun, as well as evaluating
              Bun's viability as a direct replacement for Node.js in existing
              codebases.
            </p>
            <p>
              Note that some test results are presented in three columns,
              comparing Node.js, Bun running Node.js code, and Bun-optimized
              code. This approach provides a comprehensive view of performance
              differences across these scenarios.
            </p>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export default InformationTabs;
