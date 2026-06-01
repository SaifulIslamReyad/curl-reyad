import { plainTextResponse } from "../lib/text-route";

export async function GET() {
  return plainTextResponse([
    "________________________________________________________________________________________",
    "git clone --filter=blob:none --no-checkout --branch reyad --single-branch <url>",
    "git sparse-checkout init --cone",
    "git sparse-checkout set folder1 folder2",
    "git checkout",
    "________________________________________________________________________________________",

  ])
}
