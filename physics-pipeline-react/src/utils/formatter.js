// Utility: Format number
export function fmt(x) {
  if (x === null || x === undefined) return '—';
  if (Number.isNaN(x)) return 'NaN';
  if (!Number.isFinite(x)) return x > 0 ? '+∞' : '-∞';
  return Number(x).toFixed(4).replace(/\.?0+$/, '');
}

// Check if input string is a reference
export function isReferenced(inputStr) {
  return /^(?:block)?#?\d+\(\w+\)$/i.test(inputStr.trim());
}
