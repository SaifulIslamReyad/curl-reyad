import { plainTextResponse } from "../lib/text-route";

export async function GET() {
  return plainTextResponse([
    "pnpm config set store-dir D:\pnpm-store",
    "pnpm store path",
    "pnpm store prune",
    "pnpm add -g <package>",
    "______________________",
    "rm -rf node_modules",
    "pnpm update",
    "pnpm update --latest",
    "pnpm list",
    "pnpm why react",
  
  ]);
}
