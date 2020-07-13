import { log, WebView } from "./deps.ts";

log.info("Welcome to Deno 🦕");

const html = `<html>
    <body>
        <div>
        <h1>This is a website</h1>
        <p>I wonder if we can load a React module here?</p>
        </div>
    </body>
    </html>`;

await new WebView({
  title: "Local webview_deno example",
  url: `data:text/html,${encodeURIComponent(html)}`,
  height: 600,
  resizable: true,
  debug: true,
  frameless: false,
}).run();
