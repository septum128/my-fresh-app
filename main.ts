/// <reference no-default-lib="true" />
/// <reference lib="dom" />
/// <reference lib="dom.iterable" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />

import { start } from "$fresh/server.ts";
import manifest from "./fresh.gen.ts";

// twindv1プラグインを読み込みます。
import twindv1 from "$fresh/plugins/twindv1.ts";
import twindConfig from "./twind.config.ts";

await start(manifest, {
  plugins: [twindv1(twindConfig)], // twindv1プラグインを適用します。
});
