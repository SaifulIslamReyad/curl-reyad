import { plainTextResponse } from "../lib/text-route";

export async function GET() {
  return plainTextResponse([
    "git init",
    "git status",
    "git add .",
    'git commit -m "message"',
    "git push origin main",
  ]);
}
