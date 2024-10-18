# Bun vs Node.js Performance Comparison

I decided to visualize & publish the benchmark results of my graduation thesis. You can have a look at the results here; or you can visit the benchmarking repository to do your own tests and see what I did closer.

As always, any contribution, feedback or insight is appreciated. Either to this or original repo.

If you plan to share any information from this project, please credit this repository or the benchmarking repository as your source.

## Project Structure

The project is structured as follows:

- `src/`: Source code
  - `components/`: Reusable components
  - `data/`: Benchmark result data, formatted and served
  - `hooks/`: Custom React hooks
  - `types/`: TypeScript type definitions

## Getting Started

To run this project locally:

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
   or if you're using Bun:
   ```
   bun install
   ```
3. Start the development server:

   ```
   npm run dev
   ```

   or with Bun:

   ```
   bun run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Built with

- React
- TypeScript
- Vite
- Tailwind CSS
- Recharts (for data visualization)
- Shadcn UI (for UI components)
