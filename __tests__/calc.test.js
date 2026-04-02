import { test, expect } from "bun:test";

test("add works", () => {
  expect(1 + 2).toBe(3);
});

test("intentional fail", () => {
  expect("HELLO").toBe("HELLO!");
});
