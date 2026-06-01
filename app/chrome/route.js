import { plainTextResponse } from "../lib/text-route";

export async function GET() {
  return plainTextResponse([
    "chrome://version",
    "document.body.contentEditable='true'",
    "document.designMode='on'",
    'localstorage.setitem("a",1)',
    'localstorage.getitem("a")'
  ]);
}
