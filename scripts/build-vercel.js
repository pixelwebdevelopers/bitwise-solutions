import fs from "node:fs";
import path from "node:path";
import { execSync } from "node:child_process";

const __dirname = path.dirname(new URL(import.meta.url).pathname).replace(/^\/([A-Z]:)/, "$1"); // Handle Windows paths

const root = path.join(__dirname, "..");
const dist = path.join(root, "dist");
const vercelOutput = path.join(root, ".vercel", "output");

// 1. Build the project
console.log("Building the project...");
execSync("npm run build", { stdio: "inherit", cwd: root });

// 2. Prepare .vercel/output
console.log("Preparing .vercel/output...");
if (fs.existsSync(vercelOutput)) {
  fs.rmSync(vercelOutput, { recursive: true, force: true });
}
fs.mkdirSync(path.join(vercelOutput, "static"), { recursive: true });
fs.mkdirSync(path.join(vercelOutput, "functions", "index.func"), { recursive: true });

// 3. Move static files
console.log("Moving static files...");
const clientDist = path.join(dist, "client");
if (fs.existsSync(clientDist)) {
  fs.cpSync(clientDist, path.join(vercelOutput, "static"), { recursive: true });
}

// 4. Configure the serverless function
console.log("Configuring serverless function...");
const functionDir = path.join(vercelOutput, "functions", "index.func");

// Use the built server.js directly
const serverBundle = path.join(dist, "server", "server.js");
const targetServer = path.join(functionDir, "server.js");
fs.copyFileSync(serverBundle, targetServer);

// Create the function entry point
const entryPoint = path.join(functionDir, "index.js");
fs.writeFileSync(
  entryPoint,
  `
import { requestHandler } from './server.js';

export default async function handler(req, res) {
  // TanStack Start (srvx) handles the request/response internally if we bridge it correctly.
  // Since server.js exports a default handler, we can use it.
  return requestHandler(req, res);
}
`,
);

// Create .vc-config.json for the function
fs.writeFileSync(
  path.join(functionDir, ".vc-config.json"),
  JSON.stringify(
    {
      runtime: "nodejs20.x",
      handler: "index.js",
      launcherType: "Nodejs",
      shouldAddHelpers: true,
    },
    null,
    2,
  ),
);

// 5. Create config.json for the whole output
fs.writeFileSync(
  path.join(vercelOutput, "config.json"),
  JSON.stringify(
    {
      version: 3,
      routes: [{ handle: "filesystem" }, { src: "/(.*)", dest: "/" }],
    },
    null,
    2,
  ),
);

console.log("Vercel Build Output API ready!");
