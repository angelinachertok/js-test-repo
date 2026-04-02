import { test, expect } from "bun:test";

test("сложение работает", () => {
  expect(1 + 2).toBe(3);
});

// (Опционально) тест, использующий код студента
test("функция sum из студенческого кода", async () => {
  const { sum } = await import("../student-solution/index.js");
  expect(sum(2, 3)).toBe(5);
});
