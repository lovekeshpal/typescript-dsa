import path from "path";
import { spawn } from "child_process";

const args = process.argv.slice(2);

if (args.length < 2) {
  console.error("❌ Usage: npm run dsa <level-number> <file.ts>");
  console.error("👉 Example: npm run dsa 1 palindrome.ts");
  process.exit(1);
}

const [levelNumber, file] = args;

// Map numbers to folder names
const levelMap: Record<string, string> = {
  "0": "language-basics",
  "1": "level-1-basic",
  "2": "level-2-intermediate",
  "3": "level-3-advanced",
};

const folder = levelMap[levelNumber];

if (!folder) {
  console.error(`❌ Invalid level: ${levelNumber}`);
  console.error("👉 Use 1, 2, or 3");
  process.exit(1);
}

const fullPath = path.resolve(__dirname, folder, file);

console.log(`🚀 Running: ${folder}/${file}\n`);

const child = spawn("ts-node", [fullPath], { stdio: "inherit" });

child.on("close", (code) => {
  process.exit(code ?? 0);
});
