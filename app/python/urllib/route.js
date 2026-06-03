import { plainTextResponse } from "../lib/text-route";

export async function GET() {
  return plainTextResponse([
    "from urllib.parse import urlparse",
    "url = https://gonimia.com",
    "parsed = urlparse(url)",
    'valo_url = f"{parsed.scheme}://{parsed.netloc}{parsed.path.rstrip('/')}"',
  ]);
}
