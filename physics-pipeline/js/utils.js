// 工具函数：数字格式化
function fmt(x) {
  if (x === null || x === undefined) return '—';
  if (Number.isNaN(x)) return 'NaN';
  if (!Number.isFinite(x)) return x > 0 ? '+∞' : '-∞';
  return Number(x).toFixed(4).replace(/\.?0+$/, '');
}
