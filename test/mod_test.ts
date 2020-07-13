import { assertEquals } from "./test_deps.ts";
import { add } from "../src/add.ts";

Deno.test("Add should pass", function (): void {
  assertEquals(add(1, 2), 3);
});

Deno.test("Add should pass", function (): void {
  assertEquals(add(15, 15), 30);
});
