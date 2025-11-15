// 公式分类定义 - 双公式演示版
const FORMULA_CATEGORIES = [
  {
    name: '运动学 Kinematics',
    formulas: [
      {
        id: 'v_v0_at',
        name: '匀加速末速度',
        formulaText: 'v = v0 + a·t',
        inputs: ['v0', 'a', 't'],
        output: 'v',
        compute: ({ v0, a, t }) => v0 + a * t
      },
      {
        id: 'x_xt_v0_a_t',
        name: '匀加速直线运动位移',
        formulaText: 'x = x0 + v0·t + 1/2·a·t²',
        inputs: ['x0', 'v0', 'a', 't'],
        output: 'x',
        compute: ({ x0, v0, a, t }) => x0 + v0 * t + 0.5 * a * t * t
      }
    ]
  }
];

// 获取公式对象
function getFormulaById(id) {
  for (const cat of FORMULA_CATEGORIES) {
    const found = cat.formulas.find(f => f.id === id);
    if (found) return found;
  }
  return null;
}
