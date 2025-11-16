// 程序数据 - 将自动生成
// 这里先放几个示例

export const programs = [
  // 示例：Young's Experiment (MATLAB)
  {
    id: 'I5YOUNGS',
    title: "Young's Experiment (杨氏双缝实验)",
    description: 'Young双缝干涉实验的强度分布',
    category: 'Optics - Interference',
    chapter: '2',
    source: 'matlab',
    pythonCode: `
import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# Parameters
Con = 1.0
Lamda = {{Lamda}}  # mm
a = {{a}}  # mm
X = {{X}}  # mm
Y = np.arange(-10, 10.1, 0.1)  # mm

# Calculate intensity
I = Con * (np.cos(np.pi * (Y * a) / (Lamda * X)) ** 2)

# Create plot
fig, ax = plt.subplots(figsize=(10, 6))
ax.plot(Y, I, label='I(Y)')
ax.set_xlim(-10, 10)
ax.set_ylim(0, 1)
ax.set_xlabel('Y (mm)')
ax.set_ylabel('Intensity')
ax.set_title("Young's Experiment - Intensity Distribution")
ax.legend()
ax.grid(True, alpha=0.3)

# Save to base64
buf = io.BytesIO()
fig.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close(fig)

# Print results
print("=" * 50)
print("Young's Experiment Results")
print("=" * 50)
print(f"Wavelength (λ): {Lamda} mm")
print(f"Slit separation (a): {a} mm")
print(f"Screen distance (X): {X} mm")
print(f"Maximum intensity: {np.max(I):.4f}")
print(f"Minimum intensity: {np.min(I):.4f}")

# Return plot data
print(f"data:image/png;base64,{img_base64}")
    `,
    params: [
      { name: 'Lamda', label: '波长', unit: 'mm', default: 0.0005, step: 0.0001 },
      { name: 'a', label: '缝间距', unit: 'mm', default: 0.4, step: 0.1 },
      { name: 'X', label: '屏幕距离', unit: 'mm', default: 4000, step: 100 }
    ],
    defaultParams: {
      Lamda: 0.0005,
      a: 0.4,
      X: 4000
    }
  },

  // 示例：Fermat's Principle (MATLAB)
  {
    id: 'G2FERMAT',
    title: "Fermat's Principle (费马原理)",
    description: '费马原理：光在不同介质中的传播时间',
    category: 'Optics - Geometrical',
    chapter: '1',
    source: 'matlab',
    pythonCode: `
import matplotlib.pyplot as plt
import numpy as np
import io
import base64
from mpl_toolkits.mplot3d import Axes3D

# Parameters
N = 20
i = np.arange(0, N + 1)
k = np.arange(0, N + 1)
q = i
p = k
xq = 20
xp = 40
xf = 60
yf = 60
v1 = 14
v2 = 21
v3 = 52

# Calculate times
t = np.sqrt(xq**2 + q**2) / v1

# Calculate tt matrix
tt = np.zeros((len(q), len(p)))
for r in range(len(q)):
    for c in range(len(p)):
        tt[r, c] = np.sqrt((xp - xq)**2 + (p[c] - q[r])**2) / v2

# Calculate ttt
ttt = np.sqrt((xf - xq)**2 + (yf - p)**2) / v3

# Calculate total time matrix T
T = np.zeros((len(p), len(q)))
for r in range(len(q)):
    for c in range(len(p)):
        T[c, r] = t[r] + tt[r, c] + ttt[c]

M = T

# Create plots
fig = plt.figure(figsize=(14, 6))

# Contour plot
ax1 = plt.subplot(1, 2, 1)
contour = ax1.contour(M)
ax1.clabel(contour, inline=True, fontsize=8)
ax1.set_title('Contour Plot of Total Time')
ax1.set_xlabel('q index')
ax1.set_ylabel('p index')

# Mesh plot
ax2 = plt.subplot(1, 2, 2, projection='3d')
X_mesh, Y_mesh = np.meshgrid(np.arange(len(q)), np.arange(len(p)))
ax2.plot_surface(X_mesh, Y_mesh, M, cmap='viridis', alpha=0.8)
ax2.set_title('3D Mesh Plot of Total Time')
ax2.set_xlabel('q index')
ax2.set_ylabel('p index')
ax2.set_zlabel('Time')

plt.tight_layout()

# Save to base64
buf = io.BytesIO()
fig.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close(fig)

# Print results
print("=" * 50)
print("Fermat's Principle - Time Analysis")
print("=" * 50)
print(f"Minimum time: {np.min(M):.4f}")
print(f"Maximum time: {np.max(M):.4f}")
min_idx = np.unravel_index(np.argmin(M), M.shape)
print(f"Minimum at (q={q[min_idx[1]]}, p={p[min_idx[0]]})")

# Return plot data
print(f"data:image/png;base64,{img_base64}")
    `,
    defaultParams: {}
  },

  // 示例：Print Odd Numbers (C)
  {
    id: 'Print_Odd_Number',
    title: 'Print Odd Numbers (打印奇数)',
    description: '显示 1 到 100 的所有奇数',
    category: 'Berkeley Extension - C Programming',
    chapter: null,
    source: 'c',
    pythonCode: `
print("Odd numbers from 1 to 100:")
odd_number = 1
while odd_number <= 100:
    print(odd_number)
    odd_number += 2
    `,
    defaultParams: {}
  },

  // 示例：Sales Tax Calculator (C)
  {
    id: 'Sales_Tax_Calculator',
    title: 'Sales Tax Calculator (销售税计算器)',
    description: '计算商品价格加上 5.6% 销售税',
    category: 'Berkeley Extension - C Programming',
    chapter: null,
    source: 'c',
    pythonCode: `
# Parameters
item_price = {{item_price}}

SALES_TAX_RATE = 0.056

# Calculate total cost
total_cost = item_price * (1.0 + SALES_TAX_RATE)

# Round to nearest cent
total_rounded_cents = int(total_cost * 100.0 + 0.5)

# Extract dollars and cents
dollars = total_rounded_cents // 100
cents = total_rounded_cents % 100

print(f"Enter the price of the item to be purchased (e.g., 0.98): \\${item_price:.2f}")
print(f"\\nItem price of \\${item_price:.2f} with sales tax is {dollars} dollars and {cents} cents")
    `,
    params: [
      { name: 'item_price', label: '商品价格', unit: '美元', default: 0.98, step: 0.01 }
    ],
    defaultParams: {
      item_price: 0.98
    }
  },

  // Fresnel's mirror, Young's double slit, and Lloyd's mirror
  {
    id: 'I8FRYOLOS',
    title: "Fresnel's Mirror, Young's Double Slit, and Lloyd's Mirror",
    description: '菲涅耳镜、杨氏双缝和劳埃德镜的干涉图样',
    category: 'Optics - Interference',
    chapter: '2',
    source: 'matlab',
    pythonCode: `
import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# Parameters
Con = 1.0
b = 1000  # mm
f = 5000  # mm
Beta = 0.0002  # radians
Lamda = 0.0005  # mm
c = b * np.cos(Beta)
Y = np.arange(-10, 10.1, 0.1)  # mm

# 1. Fresnel's Mirror
IF = Con * (np.cos(np.pi * (Y * 2 * (b / (c + f)) * np.sin(Beta)) / Lamda) ** 2)

# 2. Young's Experiment
a = 0.4  # mm
X = 4000  # mm
IY = Con * (np.cos(np.pi * (Y * a) / (Lamda * X)) ** 2)

# 3. Lloyd's Mirror (same as Young, phase term is added)
IL = Con * (np.cos(np.pi * (Y * a) / (Lamda * X) + np.pi / 2) ** 2)

# Create plot
fig, ax = plt.subplots(figsize=(10, 6))
ax.plot(Y, IF, label='IF(Y) - Fresnel\\'s Mirror')
ax.plot(Y, IY, label='IY(Y) - Young\\'s Experiment')
ax.plot(Y, IL, label='IL(Y) - Lloyd\\'s Mirror')
ax.set_xlim(-10, 10)
ax.set_ylim(0, 1)
ax.set_xlabel('Y (mm)')
ax.set_ylabel('Intensity')
ax.set_title('Interference Patterns Comparison')
ax.legend()
ax.grid(True, alpha=0.3)

# Save to base64
buf = io.BytesIO()
fig.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close(fig)

# Print results
print("=" * 50)
print("Interference Patterns Analysis")
print("=" * 50)
print(f"Wavelength (λ): {Lamda} mm")
print(f"At Y=0: Young has maximum, Lloyd has minimum")
print(f"Fresnel's Mirror - Max intensity: {np.max(IF):.4f}")
print(f"Young's Experiment - Max intensity: {np.max(IY):.4f}")
print(f"Lloyd's Mirror - Max intensity: {np.max(IL):.4f}")

# Return plot data
print(f"data:image/png;base64,{img_base64}")
    `,
    defaultParams: {}
  },

  // Diffraction on a slit
  {
    id: 'D2FASLITS',
    title: 'Diffraction on a Slit (单缝衍射)',
    description: '不同宽度的单缝衍射强度分布',
    category: 'Optics - Diffraction',
    chapter: '3',
    source: 'matlab',
    pythonCode: `
import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# Parameters
d1 = 0.08  # mm
d2 = 0.12  # mm
d3 = 0.16  # mm
X = 4000  # mm
Lamda = 0.0005  # mm
Theta = np.arange(-2, 2.01, 0.01)  # degrees

# Avoid division by zero
Theta_rad = np.deg2rad(Theta)
Theta_rad_safe = np.where(np.abs(Theta_rad) < 1e-10, 1e-10, Theta_rad)

# Calculate intensities
I1 = (np.sin(np.pi * (d1 / Lamda) * np.sin(Theta_rad_safe)) / 
      (np.pi * (d1 / Lamda) * Theta_rad_safe)) ** 2
I2 = (np.sin(np.pi * (d2 / Lamda) * np.sin(Theta_rad_safe)) / 
      (np.pi * (d2 / Lamda) * Theta_rad_safe)) ** 2
I3 = (np.sin(np.pi * (d3 / Lamda) * np.sin(Theta_rad_safe)) / 
      (np.pi * (d3 / Lamda) * Theta_rad_safe)) ** 2

# Create plot
fig, ax = plt.subplots(figsize=(10, 6))
ax.plot(Theta, I1, label='I1(θ) - d=0.08mm')
ax.plot(Theta, I2, label='I2(θ) - d=0.12mm')
ax.plot(Theta, I3, label='I3(θ) - d=0.16mm')
ax.set_xlim(-1, 1)
ax.set_ylim(0, 1)
ax.set_xlabel('θ (degrees)')
ax.set_ylabel('Intensity')
ax.set_title('Diffraction on Slits of Different Widths')
ax.legend()
ax.grid(True, alpha=0.3)

# Save to base64
buf = io.BytesIO()
fig.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close(fig)

# Print results
print("=" * 50)
print("Diffraction on Slits Analysis")
print("=" * 50)
print(f"Wavelength (λ): {Lamda} mm")
print(f"Slit widths: d1={d1}mm, d2={d2}mm, d3={d3}mm")
print(f"Screen distance (X): {X} mm")

# Return plot data
print(f"data:image/png;base64,{img_base64}")
    `,
    defaultParams: {}
  },

  // Seconds to Time Converter
  {
    id: 'seconds_to_time_converter',
    title: 'Seconds to Time Converter (秒数转时间)',
    description: '将秒数转换为小时和分钟',
    category: 'Berkeley Extension - C Programming',
    chapter: null,
    source: 'c',
    pythonCode: `
# Parameters
seconds = {{seconds}}

print("--- Seconds to Time Converter ---")
print()

if seconds <= 0:
    print("Value is zero or less. Terminating program.")
else:
    # Calculate whole hours
    hours = seconds // 3600
    
    # Calculate remaining seconds
    remaining_seconds = seconds % 3600
    
    # Convert to fractional minutes
    minutes = remaining_seconds / 60.0
    
    # Display results
    print(f"{seconds} seconds is {hours} hours and {minutes:.2f} minutes")
    `,
    params: [
      { name: 'seconds', label: '秒数', unit: '秒', default: 10000, step: 1 }
    ],
    defaultParams: {
      seconds: 10000
    }
  },

  // Trip Time Calculator
  {
    id: 'trip_time_calculator',
    title: 'Trip Time Calculator (行程时间计算器)',
    description: '根据距离和速度计算行程时间',
    category: 'Berkeley Extension - C Programming',
    chapter: null,
    source: 'c',
    pythonCode: `
# Parameters
name = "{{name}}"
distance_miles = {{distance_miles}}
speed_mph = {{speed_mph}}

print(f"Enter your name: {name}")
print(f"Enter the trip distance in miles: {distance_miles}")
print(f"Enter the speed in miles/hour: {speed_mph}")

if distance_miles <= 0 or speed_mph <= 0:
    print("Invalid distance or speed entered.")
else:
    # Calculate time: Time = Distance / Speed
    time_hours = distance_miles / speed_mph
    
    # Display result
    print(f"\\n{name}, your trip of {distance_miles:.0f} miles at {speed_mph:.0f} mph will take {time_hours:.1f} hours")
    `,
    params: [
      { name: 'name', label: '姓名', unit: '', default: 'John', step: null },
      { name: 'distance_miles', label: '距离', unit: '英里', default: 100, step: 1 },
      { name: 'speed_mph', label: '速度', unit: '英里/小时', default: 60, step: 1 }
    ],
    defaultParams: {
      name: 'John',
      distance_miles: 100,
      speed_mph: 60
    }
  }
]

