import { defineConfig } from "taze";

export default defineConfig({
    // ignore packages from bumping
    exclude: [
    ],
    // write to package.json
    write: true,
    ignorePaths: ["node_modules", "dist"],
    recursive: true,
    mode: "latest",
});
