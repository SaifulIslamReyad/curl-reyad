import { plainTextResponse } from "../lib/text-route";

export async function GET() {
  return plainTextResponse([
    "cool",
    "git",
    "hacking",
    "linux",
    "network",
    "windows",
    "chrome",
    "tool",
    "pnpm",
  ]);
}
