import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const output = new URL("../out/", import.meta.url);
const pages = ["index.html", "publication.html", "software.html", "blog.html"];

for (const page of pages) {
  test(`${page} exports complete content and valid local links`, async () => {
    const file = new URL(page, output);
    const html = await readFile(file, "utf8");
    assert.match(html, /Renmin Cheng/);
    assert.match(html, /aria-label="Main navigation"/);
    assert.equal((html.match(/<main\b/g) ?? []).length, 1);
    assert.doesNotMatch(html, /Your site is taking shape|Codex is working/);
    for (const [, value] of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
      if (/^(?:https?:|mailto:|data:)/.test(value)) continue;
      const target = value.startsWith("/")
        ? new URL(value.slice(1), output)
        : new URL(value, file);
      const hash = decodeURIComponent(target.hash.slice(1));
      target.hash = "";
      target.search = "";
      await access(target);
      if (hash && target.pathname.endsWith(".html")) {
        const destination = await readFile(target, "utf8");
        assert.ok(destination.includes(`id="${hash}"`), `${page}: missing anchor ${value}`);
      }
    }
  });
}

test("preserves the supplied research and honest blog empty state", async () => {
  const home = await readFile(new URL("index.html", output), "utf8");
  const publications = await readFile(new URL("publication.html", output), "utf8");
  const software = await readFile(new URL("software.html", output), "utf8");
  const blog = await readFile(new URL("blog.html", output), "utf8");
  for (const html of [home, publications]) {
    assert.match(html, /WISE: A Long-Horizon Agent in Minecraft with Why-Which Reasoning/);
    assert.match(html, /Research on RCS Measurement Methods Based on Global Adaptive Extraction/);
    assert.match(html, /Concept illustration/);
  }
  assert.match(software, /github.com\/labixiaoQ\/MrSteve/);
  assert.match(blog, /No posts yet/);
  await access(new URL(".nojekyll", output));
  await access(new URL("template/fonts/fa-solid-900.woff2", output));
  await access(new URL("template/fonts/fa-brands-400.woff2", output));
});
