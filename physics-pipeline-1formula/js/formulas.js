// 公式分类定义 - 单公式演示版
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
