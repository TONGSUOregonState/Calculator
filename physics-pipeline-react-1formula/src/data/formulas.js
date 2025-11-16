// Single formula for demo
export const FORMULA_CATEGORIES = [
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

export function getFormulaById(id) {
  for (const cat of FORMULA_CATEGORIES) {
    const found = cat.formulas.find(f => f.id === id);
    if (found) return found;
  }
  return null;
}
