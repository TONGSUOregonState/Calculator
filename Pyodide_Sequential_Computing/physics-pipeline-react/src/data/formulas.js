// Formula categories definition
export const FORMULA_CATEGORIES = [
  {
    name: '运动学 Kinematics',
    formulas: [
      {
        id: 'x_xt_v0_a_t',
        name: '匀加速直线运动位移',
        formulaText: 'x = x0 + v0·t + 1/2·a·t²',
        inputs: ['x0', 'v0', 'a', 't'],
        output: 'x',
        compute: ({ x0, v0, a, t }) => x0 + v0 * t + 0.5 * a * t * t
      },
      {
        id: 'v_v0_at',
        name: '匀加速末速度',
        formulaText: 'v = v0 + a·t',
        inputs: ['v0', 'a', 't'],
        output: 'v',
        compute: ({ v0, a, t }) => v0 + a * t
      },
      {
        id: 'v2_v02_2a_x_x0',
        name: '速度-位移关系',
        formulaText: 'v² = v0² + 2·a·(x − x0)',
        inputs: ['v0', 'a', 'x', 'x0'],
        output: 'v',
        compute: ({ v0, a, x, x0 }) => {
          const val = v0 * v0 + 2 * a * (x - x0);
          return val >= 0 ? Math.sqrt(val) : NaN;
        }
      },
      {
        id: 'ac_v2_r',
        name: '向心加速度',
        formulaText: 'a_c = v² / r',
        inputs: ['v', 'r'],
        output: 'a_c',
        compute: ({ v, r }) => r === 0 ? NaN : v * v / r
      }
    ]
  },
  {
    name: '动力学 Dynamics',
    formulas: [
      {
        id: 'F_ma',
        name: '牛顿第二定律',
        formulaText: 'F = m·a',
        inputs: ['m', 'a'],
        output: 'F',
        compute: ({ m, a }) => m * a
      }
    ]
  },
  {
    name: '能量与功率 Energy & Power',
    formulas: [
      {
        id: 'K_1_2mv2',
        name: '动能',
        formulaText: 'K = 1/2·m·v²',
        inputs: ['m', 'v'],
        output: 'K',
        compute: ({ m, v }) => 0.5 * m * v * v
      },
      {
        id: 'W_Fd',
        name: '功（同方向）',
        formulaText: 'W = F·d',
        inputs: ['F', 'd'],
        output: 'W',
        compute: ({ F, d }) => F * d
      },
      {
        id: 'Wnet_deltaK',
        name: '动能定理',
        formulaText: 'W_net = 1/2·m·v² − 1/2·m·v0²',
        inputs: ['m', 'v', 'v0'],
        output: 'W_net',
        compute: ({ m, v, v0 }) => 0.5 * m * (v*v - v0*v0)
      },
      {
        id: 'Ug_mgh',
        name: '重力势能',
        formulaText: 'Ug = m·g·h（g默认9.8）',
        inputs: ['m', 'h', 'g'],
        output: 'Ug',
        compute: ({ m, h, g }) => m * (g || 9.8) * h
      },
      {
        id: 'P_W_t',
        name: '平均功率',
        formulaText: 'P = W / t',
        inputs: ['W', 't'],
        output: 'P',
        compute: ({ W, t }) => t === 0 ? NaN : W / t
      }
    ]
  }
];

// Get formula by ID
export function getFormulaById(id) {
  for (const cat of FORMULA_CATEGORIES) {
    const found = cat.formulas.find(f => f.id === id);
    if (found) return found;
  }
  return null;
}
